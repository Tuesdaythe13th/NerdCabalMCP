#!/usr/bin/env python3
"""
Pre-course environment validation script for SIGGRAPH 2026 Sovereign Studio Tutorial.
Run this before the conference to ensure your setup is ready.
"""

import sys
import subprocess
from pathlib import Path


def check(condition: bool, message: str) -> bool:
    """Print check result with emoji."""
    status = "✅" if condition else "❌"
    print(f"{status} {message}")
    return condition


def check_warning(condition: bool, message: str) -> bool:
    """Print warning check."""
    status = "✅" if condition else "⚠️ "
    print(f"{status} {message}")
    return condition


def main():
    print("🔍 Checking prerequisites for SIGGRAPH 2026 Sovereign Studio Tutorial\n")

    all_passed = True

    # Check Python version
    py_version = sys.version_info
    py_ok = py_version >= (3, 11)
    all_passed &= check(
        py_ok,
        f"Python 3.11+ detected ({py_version.major}.{py_version.minor}.{py_version.micro})"
        if py_ok
        else f"Python {py_version.major}.{py_version.minor} found (3.11+ required)",
    )

    # Check if in virtual environment
    in_venv = hasattr(sys, "real_prefix") or (
        hasattr(sys, "base_prefix") and sys.base_prefix != sys.prefix
    )
    check_warning(in_venv, "Virtual environment active" if in_venv else "Not in virtual environment (recommended)")

    # Check Git
    try:
        result = subprocess.run(["git", "--version"], capture_output=True, text=True)
        git_version = result.stdout.strip().split()[-1]
        check(True, f"Git configured ({git_version})")
    except FileNotFoundError:
        all_passed &= check(False, "Git not found (required)")

    # Check Docker (optional)
    try:
        result = subprocess.run(["docker", "--version"], capture_output=True, text=True)
        docker_version = result.stdout.strip().split()[2].rstrip(",")
        check_warning(True, f"Docker available ({docker_version})")
    except FileNotFoundError:
        check_warning(False, "Docker not found (optional, but recommended)")

    # Check Python packages
    packages = {
        "fastmcp": "MCP server framework",
        "anthropic": "Claude API client",
        "torch": "PyTorch (for CLIP)",
        "clip": "CLIP embeddings",
        "jupyter": "Jupyter notebook",
        "pytest": "Testing framework",
    }

    for package, description in packages.items():
        try:
            __import__(package)
            check(True, f"{package} installed ({description})")
        except ImportError:
            all_passed &= check(False, f"{package} not found ({description})")

    # Check CLIP model availability
    try:
        import clip
        import torch

        device = "cuda" if torch.cuda.is_available() else "cpu"
        model, preprocess = clip.load("ViT-B/32", device=device, download_root=Path.home() / ".cache/clip")
        check(True, f"CLIP model loaded on {device}")
    except Exception as e:
        all_passed &= check(False, f"CLIP model load failed: {e}")

    # Check disk space
    import shutil

    usage = shutil.disk_usage(Path.cwd())
    free_gb = usage.free / (1024**3)
    disk_ok = free_gb >= 10
    all_passed &= check(disk_ok, f"{free_gb:.1f}GB free disk space" if disk_ok else f"Only {free_gb:.1f}GB free (10GB+ recommended)")

    # Final verdict
    print()
    if all_passed:
        print("🎉 You're ready for SIGGRAPH 2026!")
        print("📘 Next steps:")
        print("   1. Review docs/COURSE_SYLLABUS.md")
        print("   2. Open notebooks/sovereign_studio_tutorial.ipynb")
        print("   3. Join Discord: https://discord.gg/nerdcabal")
        return 0
    else:
        print("❗ Some requirements are missing. See docs/SETUP_GUIDE.md for help.")
        print("📧 Need assistance? Email: tuesday@nerdcabal.org")
        return 1


if __name__ == "__main__":
    sys.exit(main())
