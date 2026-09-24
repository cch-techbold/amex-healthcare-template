"""Example router — delete or rename once you start building your own track.

Shows the two things every team needs on day one:
1. A simple JSON endpoint the React frontend can call.
2. How to read a file from the project-level `/resources` folder.
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.resources import resource_path

router = APIRouter(prefix="/api", tags=["example"])


class Greeting(BaseModel):
    message: str


@router.get("/hello", response_model=Greeting)
def hello() -> Greeting:
    """Sanity-check endpoint used by the frontend starter page."""
    return Greeting(message="Hello from the AMEX Healthcare hackathon backend!")


@router.get("/resources/{filename}")
def read_resource(filename: str) -> dict:
    """Example of loading a file placed in /resources at the repo root."""
    path = resource_path(filename)
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"'{filename}' not found in /resources")
    return {"filename": filename, "content": path.read_text(encoding="utf-8")}
