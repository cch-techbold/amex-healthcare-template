"""Helper for locating files in the project-level `/resources` folder.

Keep ALL data your backend needs (sample datasets, PDFs, reference docs,
prompt templates, config files, etc.) inside `/resources` at the repo root
so the whole team and any reviewers know exactly where to look.
"""

from pathlib import Path

# backend/app/resources.py -> backend/app -> backend -> repo root -> resources
REPO_ROOT = Path(__file__).resolve().parents[2]
RESOURCES_DIR = REPO_ROOT / "resources"


def resource_path(*parts: str) -> Path:
    """Build a path inside `/resources`, e.g. resource_path("data", "patients.csv")."""
    return RESOURCES_DIR.joinpath(*parts)
