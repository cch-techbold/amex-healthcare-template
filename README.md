# AMEX Healthcare Hackathon — Starter Template

Welcome! This repository is your starting point for the AMEX Healthcare Hackathon.
It gives every team the same solid foundation — a **Python/FastAPI backend** and a
**React/Vite frontend** already styled with the AMEX Healthcare brand — so you can
spend your time on your track's idea instead of project setup.

This README walks you through every phase: setup, development, and submission.
It is written so you can hand it directly to **Claude Code, GitHub Copilot, or any
other coding agent** and have it guide (or perform) each step with you.

---

## 0. Your track

Confirm your track and idea with your team lead before you start building.

| # | Department | Project | What it does | Lead |
|---|---|---|---|---|
| 1 | Atomics Sales | Automation of Edit in Excel | Automates repetitive editing/reformatting done by hand in Excel today; a browser-based solution for automated editing and upload into the system (e.g. Handsontable / AG Grid). | Shan |
| 2 | Atomics Operations | Freight Forwarding Assistant | Indicative freight prices by destination and Incoterm (inbound/outbound), and which forwarder suits which route. *(shared with row 4)* | Audrey |
| 3 | Pharma Sales | Negotiation Agent | Supports supplier and customer negotiations — prepares positions, compares offered terms, trains the user on specific cases. | Aleksandra |
| 4 | Pharma Operations | Freight Forwarding Assistant | Same project as row 2 — one build, used by both teams. | Elizabeth |
| 5 | UNited Sales | Supplier Analysis at Sales Stage | At quoting stage, shows supplier track record (success rate, reliability) plus a general supplier dashboard (spend by category, performance). | Johann & Julia |
| 6 | UNited Americas OP | Invoice Assistant | Drafts the WHO invoice by pulling details out of the incoming mail and attaching the right document. | Claudina |
| 7 | Quality | Auto DCR Tracker Analysis | Reviews DCR tracker entries, flags incomplete/poorly completed ones, shows trends over time, and autofills reports. | Rania |
| 8 | Field team | After-Sales Service Agent for Sales | Estimates the after-sales service budget at sales stage and flags items likely to need service attention. | Charlotte |
| 9 | Finance | Cash Collection Dashboard | Overview of outstanding/upcoming receivables and open, not-yet-invoiced or overdue sales orders; cuts manual reminder work. | Reka |
| 10 | Kitting | Automated Kit Lot Assignment | Assigns product batch lots to kits automatically, following today's rules. | Jenny |
| 11 | Kenya - Operations | Automated SEZA Report | Fills the SEZA report automatically. | Kevit |
| 12 | Kenya - Sales | Comparison of Offers | Compares received vendor offers against the project/specs, highlighting best value for money and what to take into the system. | Nigam |
| 13 | CEO | Dashboard 2.0 | Prototype of a new dashboard for 5 KPIs with flexible, user-driven filtering/selection, connected to Sofia. | Marie |

> Note: rows 2 and 4 (Freight Forwarding Assistant) are one shared project between two teams.

---

## 1. Prerequisites

You already have **Git** installed. You additionally need **Node.js** and **Python**,
which most laptops won't have yet.

1. **Node.js 20+** (includes `npm`) → https://nodejs.org (choose the LTS installer)
2. **Python 3.11+** → https://www.python.org/downloads/ (on Windows, tick "Add python.exe to PATH" during install)

Verify both are installed:

```bash
node --version
npm --version
python --version
```

If you're using an AI coding agent (Claude Code, Copilot, etc.), you can simply say:
*"Check if Node.js and Python are installed, and help me install them if not."*

---

## 2. Get the template

Clone this template over HTTPS into a new folder for your team:

```bash
git clone https://github.com/cch-techbold/amex-healthcare-template.git my-track-name
cd my-track-name
```

(Ask your organizer for the exact repository URL if the one above isn't it.)

---

## 3. Project structure

```
├── backend/       FastAPI backend — your API and business logic
├── frontend/       React + Vite frontend — your UI
├── resources/      ⚠️ put ALL data files your backend needs here (see below)
├── assets/         AMEX Healthcare logos
└── README.md       this file
```

### The `/resources` folder — important

**Every file your backend needs at runtime — sample data, spreadsheets, PDFs,
CSVs, prompt templates, config/lookup files, anything — must be placed in the
top-level `/resources` folder, not inside `/backend`.**

This keeps all of your track's inputs in one predictable place for your teammates,
judges, and any AI agent helping you, and keeps the backend code portable. Load
files from Python using the helper already provided:

```python
from app.resources import resource_path

data = resource_path("my_dataset.csv").read_text()
```

See [`resources/README.md`](resources/README.md) for details.

---

## 4. Set up the backend (FastAPI)

```bash
cd backend
python -m venv .venv

# Windows
.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload
```

- API base URL: http://localhost:8000
- Swagger docs: http://localhost:8000/docs
- Health check: http://localhost:8000/health

See [`backend/README.md`](backend/README.md) for how to add your own endpoints.

## 5. Set up the frontend (React + Vite)

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

- App: http://localhost:5173
- Calls to `/api/*` are automatically proxied to your backend on port 8000.

The starter page is already styled with the **AMEX Healthcare brand** (Oxblood /
Charcoal / White color system, Merriweather + Montserrat typography, and the
official logo). See [`frontend/README.md`](frontend/README.md) for the available
brand tokens and how to use them in your components.

---

## 6. Build your track

1. Replace the placeholder UI in `frontend/src/App.tsx` with your track's screens.
2. Add your API logic as new routers in `backend/app/routers/` and register them in
   `backend/app/main.py`.
3. Drop any data files you need into `/resources` and load them via `resource_path()`.
4. Keep iterating — both servers support hot reload, so just save and check the browser.

### Working with an AI coding agent

This repo is designed to be driven with **Claude Code**, **GitHub Copilot**, or a
similar agent. A good way to start a session:

> "This is the AMEX Healthcare hackathon starter template. My track is '<your track
> name>': <paste the description from the table above>. Help me design the data
> model, build the FastAPI endpoints in /backend, and build the matching React UI
> in /frontend, using the AMEX brand tokens already set up in `frontend/src/index.css`.
> Any data files we need should go into /resources."

Feed it this README plus your track's row from the table above, and let it propose
an implementation plan before writing code.

---

## 7. Submitting your project

At the end of the hackathon:

1. Create your **own new Git repository** (e.g. on GitHub/GitLab) for your team's submission —
   don't submit by pushing back to this template.
2. Use this `amex-healthcare-template` project as the base/starting point of that repository
   (i.e. your submission is this template plus everything you built on top of it).
3. Commit and push your final code, including your `/resources` files, to your new repository.
4. Share the repository link as instructed by the organizers.

```bash
# from your project folder, pointed at your own new repository
git remote set-url origin https://github.com/<your-org-or-user>/<your-team-repo>.git
git add .
git commit -m "Submission: <track name>"
git push -u origin main
```

Good luck, and welcome to the AMEX Healthcare Hackathon — **We Care.**
