# Paper2Agent Web UI 🚀

A beautiful, modern web interface for the Paper2Agent pipeline that transforms research papers into interactive AI agents.

## ✨ Features

- **Beautiful Modern Design**: Gradient backgrounds, glass-morphism effects, and smooth animations
- **Real-time Progress Tracking**: Live updates via Server-Sent Events (SSE)
- **Step-by-Step Visualization**: See each pipeline step with status indicators
- **Live Logs**: Monitor pipeline execution in real-time with a terminal-style interface
- **Time Estimates**: Track elapsed time and ETA for completion
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Clear error messages and status indicators

## 🎨 Design Highlights

- **Glass-morphism cards** with backdrop blur effects
- **Gradient animations** on progress bars
- **Color-coded status badges**: Pending, Running, Completed, Error
- **Smooth transitions** and hover effects
- **Real-time updates** without page refresh
- **Professional typography** using Inter font family
- **Terminal-style log viewer** with auto-scroll

## 📋 Prerequisites

- Python 3.8+
- Paper2Agent installation (parent directory)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd web_ui
pip install -r requirements.txt
```

### 2. Start the Web Server

```bash
python app.py
```

Or use the convenience script:

```bash
bash start_webui.sh
```

### 3. Open Your Browser

Navigate to: **http://localhost:5000**

## 📖 Usage

1. **Enter Configuration**:
   - **Project Directory** (required): Name for your project workspace
   - **GitHub Repository URL** (required): URL of the research paper repository
   - **Tutorial Filter** (optional): Natural language description to filter tutorials
   - **API Key** (optional): For notebook execution and testing

2. **Start Pipeline**: Click the "Start Pipeline" button

3. **Monitor Progress**:
   - Watch the progress bar advance
   - See each step's status change in real-time
   - View detailed logs in the terminal section
   - Track elapsed time and estimated completion time

4. **Review Results**: Once complete, review the logs and generated artifacts

## 🎯 Pipeline Steps

The web UI visualizes all 10 pipeline steps:

1. 🔧 Setup project environment
2. 📥 Clone GitHub repository
3. 📁 Prepare working directories
4. 🔌 Add context MCP server
5. 🐍 Setup Python environment & scan tutorials
6. 📓 Execute tutorial notebooks
7. 🔨 Extract tools from tutorials
8. 📦 Wrap tools in MCP server
9. 📊 Generate code coverage & quality reports
10. 🚀 Launch MCP server

## 🔧 API Endpoints

### `POST /api/start`
Start the pipeline execution.

**Request Body**:
```json
{
  "project_dir": "my_project",
  "github_url": "https://github.com/user/repo",
  "tutorials": "data visualization",
  "api_key": "optional_api_key"
}
```

**Response**:
```json
{
  "status": "started"
}
```

### `GET /api/status`
Get current pipeline status.

**Response**:
```json
{
  "running": true,
  "current_step": 5,
  "total_steps": 10,
  "elapsed_seconds": 120,
  "eta_seconds": 180,
  "steps": [...],
  "error": null
}
```

### `GET /api/logs`
Get all pipeline logs.

**Response**:
```json
[
  {
    "timestamp": "2025-12-03T10:30:00",
    "message": "Pipeline started..."
  }
]
```

### `GET /api/stream`
Server-Sent Events stream for real-time updates.

**Event Types**:
- `log`: New log message
- `state`: Pipeline state update
- `complete`: Pipeline completed successfully
- `error`: Pipeline encountered an error
- `heartbeat`: Keep-alive ping

## 🎨 Customization

### Change Color Scheme

Edit the `<style>` section in `templates/index.html`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your preferred colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Steps

Edit the `STEP_DEFINITIONS` array in `app.py`:

```python
STEP_DEFINITIONS = [
    {'id': 1, 'name': 'Your custom step', 'icon': '🎯'},
    # Add more steps...
]
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5000 is already in use, change it in `app.py`:

```python
app.run(debug=True, host='0.0.0.0', port=5001, threaded=True)
```

### Connection Issues

- Ensure the Flask server is running
- Check firewall settings
- Verify you're accessing `http://localhost:5000` not `https://`

### Logs Not Updating

- Check browser console for JavaScript errors
- Ensure Server-Sent Events (SSE) are supported in your browser
- Try refreshing the page

## 🔒 Security Notes

- **API Keys**: Never commit API keys to version control
- **Local Only**: By default, the server binds to `0.0.0.0` which allows external connections
  - For local-only access, change to `127.0.0.1` in `app.py`
- **HTTPS**: Consider using HTTPS in production with a reverse proxy (nginx, Apache)

## 📦 Project Structure

```
web_ui/
├── app.py                 # Flask backend server
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── start_webui.sh        # Convenience startup script
├── templates/
│   └── index.html        # Modern HTML frontend
└── static/               # Static assets (if needed)
```

## 🌟 Future Enhancements

- [ ] Dark mode toggle
- [ ] Export logs to file
- [ ] Pause/resume functionality
- [ ] Step-level retry capability
- [ ] Email notifications on completion
- [ ] Multi-pipeline execution
- [ ] Historical run viewer
- [ ] Performance analytics dashboard

## 📄 License

Same as Paper2Agent parent project.

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows existing style
- UI changes maintain responsive design
- Real-time updates work correctly
- Documentation is updated

## 💬 Support

For issues or questions, please open an issue in the main Paper2Agent repository.

---

**Made with ❤️ for the Paper2Agent community**
