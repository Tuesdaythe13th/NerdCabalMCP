#!/usr/bin/env python3
"""
Paper2Agent Web UI - Flask Backend
Provides a modern web interface for the Paper2Agent pipeline
"""

from flask import Flask, render_template, request, jsonify, Response
from flask_cors import CORS
import subprocess
import threading
import queue
import json
import os
import time
from datetime import datetime
import re

app = Flask(__name__)
CORS(app)

# Global state for pipeline execution
pipeline_state = {
    'running': False,
    'current_step': 0,
    'total_steps': 10,
    'steps': [],
    'start_time': None,
    'logs': [],
    'error': None
}

# Queue for real-time updates
update_queue = queue.Queue()

# Step definitions
STEP_DEFINITIONS = [
    {'id': 1, 'name': 'Setup project environment', 'icon': '🔧'},
    {'id': 2, 'name': 'Clone GitHub repository', 'icon': '📥'},
    {'id': 3, 'name': 'Prepare working directories', 'icon': '📁'},
    {'id': 4, 'name': 'Add context MCP server', 'icon': '🔌'},
    {'id': 5, 'name': 'Setup Python environment & scan tutorials', 'icon': '🐍'},
    {'id': 6, 'name': 'Execute tutorial notebooks', 'icon': '📓'},
    {'id': 7, 'name': 'Extract tools from tutorials', 'icon': '🔨'},
    {'id': 8, 'name': 'Wrap tools in MCP server', 'icon': '📦'},
    {'id': 9, 'name': 'Generate code coverage & quality reports', 'icon': '📊'},
    {'id': 10, 'name': 'Launch MCP server', 'icon': '🚀'}
]


def parse_log_line(line):
    """Parse log line to extract step information"""
    # Pattern: [timestamp] emoji Step N/10: name - STATUS
    pattern = r'\[([^\]]+)\]\s+([^\s]+)\s+Step\s+(\d+)/(\d+):\s+([^-]+)\s+-\s+(\w+)'
    match = re.match(pattern, line)

    if match:
        timestamp, emoji, step_num, total, step_name, status = match.groups()
        return {
            'timestamp': timestamp,
            'emoji': emoji,
            'step_num': int(step_num),
            'total_steps': int(total),
            'step_name': step_name.strip(),
            'status': status.lower()
        }
    return None


def run_pipeline(project_dir, github_url, tutorials, api_key):
    """Run the Paper2Agent pipeline in a separate thread"""
    global pipeline_state

    try:
        pipeline_state['running'] = True
        pipeline_state['start_time'] = time.time()
        pipeline_state['error'] = None
        pipeline_state['current_step'] = 0
        pipeline_state['steps'] = [{'id': s['id'], 'name': s['name'], 'icon': s['icon'],
                                    'status': 'pending', 'timestamp': None}
                                   for s in STEP_DEFINITIONS]

        # Build command
        script_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        script_path = os.path.join(script_dir, 'Paper2Agent.sh')

        cmd = [
            'bash', script_path,
            '--project_dir', project_dir,
            '--github_url', github_url
        ]

        if tutorials:
            cmd.extend(['--tutorials', tutorials])
        if api_key:
            cmd.extend(['--api', api_key])

        # Run pipeline and capture output
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            bufsize=1
        )

        # Read stderr (where logs go) in real-time
        for line in iter(process.stderr.readline, ''):
            line = line.strip()
            if not line:
                continue

            # Add to logs
            pipeline_state['logs'].append({
                'timestamp': datetime.now().isoformat(),
                'message': line
            })

            # Parse log line for step updates
            parsed = parse_log_line(line)
            if parsed:
                step_idx = parsed['step_num'] - 1
                pipeline_state['current_step'] = parsed['step_num']
                pipeline_state['steps'][step_idx].update({
                    'status': parsed['status'],
                    'timestamp': parsed['timestamp']
                })

            # Notify clients
            update_queue.put({
                'type': 'log',
                'data': line
            })
            update_queue.put({
                'type': 'state',
                'data': get_pipeline_state()
            })

        # Wait for completion
        return_code = process.wait()

        if return_code != 0:
            pipeline_state['error'] = f'Pipeline failed with exit code {return_code}'
            update_queue.put({
                'type': 'error',
                'data': pipeline_state['error']
            })
        else:
            update_queue.put({
                'type': 'complete',
                'data': 'Pipeline completed successfully!'
            })

    except Exception as e:
        pipeline_state['error'] = str(e)
        update_queue.put({
            'type': 'error',
            'data': str(e)
        })
    finally:
        pipeline_state['running'] = False


def get_pipeline_state():
    """Get current pipeline state with calculated fields"""
    state = pipeline_state.copy()

    if state['start_time']:
        elapsed = time.time() - state['start_time']
        state['elapsed_seconds'] = int(elapsed)

        # Calculate ETA based on current progress
        if state['current_step'] > 0:
            avg_time_per_step = elapsed / state['current_step']
            remaining_steps = state['total_steps'] - state['current_step']
            state['eta_seconds'] = int(avg_time_per_step * remaining_steps)
        else:
            state['eta_seconds'] = None

    return state


@app.route('/')
def index():
    """Render the main UI"""
    return render_template('index.html')


@app.route('/api/start', methods=['POST'])
def start_pipeline():
    """Start the pipeline execution"""
    if pipeline_state['running']:
        return jsonify({'error': 'Pipeline is already running'}), 400

    data = request.json
    project_dir = data.get('project_dir')
    github_url = data.get('github_url')
    tutorials = data.get('tutorials', '')
    api_key = data.get('api_key', '')

    if not project_dir or not github_url:
        return jsonify({'error': 'project_dir and github_url are required'}), 400

    # Start pipeline in background thread
    thread = threading.Thread(
        target=run_pipeline,
        args=(project_dir, github_url, tutorials, api_key)
    )
    thread.daemon = True
    thread.start()

    return jsonify({'status': 'started'})


@app.route('/api/status')
def get_status():
    """Get current pipeline status"""
    return jsonify(get_pipeline_state())


@app.route('/api/logs')
def get_logs():
    """Get all pipeline logs"""
    return jsonify(pipeline_state['logs'])


@app.route('/api/stream')
def stream():
    """Server-Sent Events stream for real-time updates"""
    def event_stream():
        while True:
            try:
                # Get update from queue (with timeout)
                update = update_queue.get(timeout=30)
                yield f"data: {json.dumps(update)}\n\n"
            except queue.Empty:
                # Send heartbeat
                yield f"data: {json.dumps({'type': 'heartbeat'})}\n\n"

    return Response(event_stream(), mimetype='text/event-stream')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000, threaded=True)
