---
title: "Process the next professor"
date: 2026-07-15
tags:
  - runbook
  - professor-outreach
draft: false
---

# Process the next professor

Copy-paste these into your terminal. Env vars go **before** the command (atuin
passes them as parameters). Sending the email always stays manual.

**Prereq:** Chrome running on port 9222 for the browser steps.

```
cmd=status atuin scripts run cdp
```

---

## Option A — one command (interactive)

Claims the next professor, profiles, and **prompts you at each gate** (pick a URL,
pick a paper), then writes the draft. Stop anytime; re-run to resume where you left.

```
interactive=1 action=run atuin scripts run outreach-orchestrator
```

---

## Option B — step by step

### 1. Claim the next professor

```
action=next atuin scripts run outreach-orchestrator
```

Copy the `state=...` path it prints and set it once (paste your path):

```
state=PASTE_THE_STATE_PATH_HERE
```

### 2. Profile (dossier + identity/relevance gates + list papers)

```
action=profile state=$state atuin scripts run outreach-orchestrator
```

- No URL on the Sheet? Discover first, review the Chrome tabs, then profile with your pick:

  ```
  action=discover state=$state atuin scripts run outreach-orchestrator
  action=profile profile_url='https://REAL-PAGE' state=$state atuin scripts run outreach-orchestrator
  ```

- URL dead / wrong person (identity gate stops it)? Web-search the current page and re-profile:

  ```
  action=profile profile_url='https://CORRECT-PAGE' state=$state atuin scripts run outreach-orchestrator
  ```

### 3. Pick a paper → download, analyze, learning path, draft (auto-publishes to garden)

Give a specific paper URL (arXiv / DOI / PDF):

```
action=paper paper_url='https://ARXIV-OR-DOI-OR-PDF' state=$state atuin scripts run outreach-orchestrator
```

…or let it choose from the listed candidates:

```
action=select state=$state atuin scripts run outreach-orchestrator
```

### 4. Review the draft

```
action=status state=$state atuin scripts run outreach-orchestrator
```

Open `email-draft.md` in the workspace it prints, edit as needed, then send it yourself.

### 5. After you send it, close the row out

```
action=sent state=$state atuin scripts run outreach-orchestrator
```

---

## Handy

- Where am I / what's next: `action=guide state=$state atuin scripts run outreach-orchestrator`
- Recurring failures to fix: `action=failures atuin scripts run outreach-orchestrator`
- Skip a junk/mismatched row: `cmd=set-status seq=SEND_SEQ wf_status=skipped error='why' atuin scripts run prof-sheet`
- Private/test run (no garden publish): add `no_garden=1` to the `action=paper` command.
