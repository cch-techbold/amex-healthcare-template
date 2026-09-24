# Resources

Put every file your **backend** needs here — sample datasets, PDFs, spreadsheets,
prompt templates, config/lookup files, etc.

Keeping all of this in one place means:

- Your teammates and reviewers always know where to find the data your API depends on.
- The backend code stays portable — load files via `app/resources.py` (`resource_path(...)`) instead of hardcoding absolute paths.
- Judges and Claude Code / Copilot agents can quickly understand what data your track is built on.

Delete this placeholder text once you add your own files.
