# Cheap Phone Test

A local MVP dashboard for running Android app launch checks with ADB, recording findings, reviewing test runs, and printing a report to PDF.

## Requirements
- Node.js (LTS)
- Android Platform Tools (`adb`) installed and available in PATH
- Android phone with Developer options and USB debugging enabled (for device testing)

## Run on Windows
1. Open this folder in VS Code.
2. Open Terminal → New Terminal.
3. Run `npm install` (first run only).
4. Run `npm start`.
5. Open `http://localhost:3000`.
6. Open the printable report at `http://localhost:3000/report.html`.

## Report to PDF
On the report page, click Print / Save as PDF, choose **Save as PDF** in Chrome's print dialog, and save the file.

## Important notes
- Test-run status means commands completed; it does not guarantee that the app's UI or behavior passed. Verify results manually.
- Network, battery, memory, and thermal conditions are not automatically enforced by this MVP. Do not claim those tests were performed unless you actually configured and observed them.
- Findings should document issues actually observed on a device.
- Run and finding data is stored locally in `data/runs.json` and `data/findings.json`. The server creates these files on first launch. Back them up before replacing project files.
- Do not upload real device logs or findings containing personal information to public repositories.
