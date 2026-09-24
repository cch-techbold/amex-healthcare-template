# Backend — FastAPI

Python 3.11+ FastAPI service for your hackathon track.

## Setup

```bash
cd backend
python -m venv .venv

# Windows
.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
```

## Run

```bash
uvicorn app.main:app --reload
```

- API: http://localhost:8000
- Interactive docs (Swagger UI): http://localhost:8000/docs
- Health check: http://localhost:8000/health

## Project structure

```
backend/
├── app/
│   ├── main.py          # FastAPI app + CORS setup
│   ├── resources.py      # helper for reading files from /resources
│   └── routers/
│       └── example.py    # example endpoints — replace with your track's logic
└── requirements.txt
```

## Adding your own endpoints

1. Create a new file under `app/routers/`, define an `APIRouter`.
2. Register it in `app/main.py` with `app.include_router(...)`.
3. Any data file you need (CSV, JSON, PDF, etc.) goes in the **top-level `/resources`**
   folder — never inside `backend/`. Load it with `resource_path()` from `app/resources.py`.
