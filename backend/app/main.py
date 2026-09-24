"""AMEX Healthcare Hackathon starter API.

Run locally with:
    uvicorn app.main:app --reload

All static/reference data your track needs (CSVs, JSON, sample docs, etc.)
should live in the top-level `/resources` folder and be loaded through
`app.resources.resource_path()` so the whole team uses one consistent location.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import example

app = FastAPI(
    title="AMEX Healthcare Hackathon API",
    description="Starter FastAPI backend for the AMEX Healthcare hackathon template.",
    version="0.1.0",
)

# Allow the local Vite dev server (and any preview host) to call this API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(example.router)


@app.get("/health", tags=["system"])
def health_check() -> dict:
    """Simple liveness check used by the frontend and CI."""
    return {"status": "ok"}
