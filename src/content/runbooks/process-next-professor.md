---
title: "Process the next professor"
date: 2026-07-15
tags:
  - runbook
  - professor-outreach
draft: false
---

# Process the next professor

Copy and paste these commands into a terminal. Environment variables go **before**
the command. Sending the email always stays manual.

The workflow is deliberately human-gated: it may stop for a missing or stale profile,
uncertain research fit, an author-identity conflict, an unavailable full-text PDF, or a
draft that is not specific enough. A safe stop is not a failed run.

## Before starting

Chrome must be running with its debugging port available for browser-assisted steps:

```sh
cmd=status atuin scripts run cdp
```

The Google Sheet is the queue and source of workflow status. Durable artifacts are
written under `~/.config/atuin_inventory/outputs/`.

## Option A — guided interactive run

This claims the next professor and prompts at each human gate. Stop at any time; the
printed state path is the checkpoint used to resume.

```sh
interactive=1 action=run atuin scripts run outreach-orchestrator
```

When resuming, use the exact `state=...` path printed by the workflow:

```sh
interactive=1 action=run state='/absolute/path/to/outreach-state.json' atuin scripts run outreach-orchestrator
```

## Option B — step by step

### 1. Claim exactly one new professor

```sh
action=next atuin scripts run outreach-orchestrator
```

**Important:** `action=next` only claims a new Sheet row. It does not advance or resume
an existing professor. Never pass an old `state` to `action=next`.

Copy the printed state path:

```sh
state='/absolute/path/printed/by/the/orchestrator/outreach-state.json'
```

Use that same state path for every remaining command for this professor.

### 2. Build and verify the professor dossier

If the row already has a profile URL:

```sh
action=profile state="$state" atuin scripts run outreach-orchestrator
```

If the row has no usable URL, discover candidates, review the opened browser tabs, and
profile the correct page:

```sh
action=discover state="$state" atuin scripts run outreach-orchestrator
action=profile profile_url='https://AUTHORITATIVE-FACULTY-PAGE' state="$state" atuin scripts run outreach-orchestrator
```

If profiling stops with `identity_unconfirmed`, `profile_empty`, or a stale/wrong page,
find two or three authoritative pages and merge them through the supported recovery path:

```sh
action=add-urls urls='https://FACULTY-PAGE,https://PERSONAL-OR-SCHOLAR-PAGE' state="$state" atuin scripts run outreach-orchestrator
```

Before continuing, confirm all of the following in the dossier and Sheet:

- the name and current university refer to the same person as the queued row;
- the professor is a plausible research advisor and the research fit is genuine;
- the Sheet email cell is populated when a verified email was found;
- multiple verified professor emails are retained, separated with `; `.

Never infer an address from a university email pattern. If the institution is stale or
contradictory, skip the row instead of drafting against outdated identity context:

```sh
cmd=set-status seq=SEND_SEQ wf_status=skipped error='Stale or contradictory professor identity/affiliation' atuin scripts run prof-sheet
```

### 3. Select one verified paper

Review the paper candidates and choose a paper that genuinely connects the professor's
work to the applicant. A specific paper URL is preferred:

```sh
action=paper paper_url='https://ARXIV-OR-DOI-OR-PDF' state="$state" atuin scripts run outreach-orchestrator
```

You may explicitly delegate selection from the displayed candidates:

```sh
action=select state="$state" atuin scripts run outreach-orchestrator
```

If OpenAlex is rejected because its affiliation contradicts the verified dossier, do not
use a generic approval. Supply a verified paper and affirmative author evidence:

```sh
action=paper verified_paper_url='https://VERIFIED-PAPER' paper_evidence_urls='https://FACULTY-OR-SCHOLAR-EVIDENCE' state="$state" atuin scripts run outreach-orchestrator
```

A validated full-text PDF is mandatory. If one candidate stops at `paper_failed`, choose
another authoritative paper URL; the workflow must never draft from an abstract alone.

The successful paper path downloads and validates the PDF, extracts its text, builds
grounded context, creates the learning path, publishes that learning page to the garden,
and drafts the email. Add `no_garden=1` for a private/test run.

### 4. Resume from a safe checkpoint

Ask the orchestrator what the current state needs:

```sh
action=guide state="$state" atuin scripts run outreach-orchestrator
```

Common checkpoints:

- `paper_context_ready`: create the grounded draft with
  `action=draft-email state="$state" atuin scripts run outreach-orchestrator`.
- `draft_review_required`: open the draft and validation findings; do not treat it as
  outreach-ready until the specificity problems are corrected.
- `draft_ready`: the automated work is complete and the draft is ready for human review.

Use `action=run state="$state" ...` to advance an existing state to its next human gate.
Do not use `action=next` for this.

### 5. Review the draft and recipient

```sh
action=status state="$state" atuin scripts run outreach-orchestrator
```

Open `email-draft.md` in the printed workspace. Before sending, verify:

- the recipient email belongs to this professor and uses the current institution;
- the draft discusses the selected paper and no other paper;
- applicant claims are true and grounded in the applicant documents;
- the request is concise, specific, and appropriate;
- no placeholder text or validation warning remains.

If several verified addresses are stored, choose the most current institutional address
for the actual message; do not send duplicate copies unless you intentionally want to.

### 6. Send manually, then close the row

The orchestrator never sends the email. After you send it yourself:

```sh
action=sent state="$state" atuin scripts run outreach-orchestrator
```

This changes the Sheet status to `sent` and records the outreach date.

## Useful checks

- Current state and exact next command:
  `action=guide state="$state" atuin scripts run outreach-orchestrator`
- Machine-readable state:
  `action=status state="$state" atuin scripts run outreach-orchestrator`
- Recurring pipeline failures:
  `action=failures atuin scripts run outreach-orchestrator`
- Inspect a Sheet row:
  `cmd=read-row seq=SEND_SEQ atuin scripts run prof-sheet`
- Skip a junk, mismatched, emeritus, or stale row:
  `cmd=set-status seq=SEND_SEQ wf_status=skipped error='Specific reason' atuin scripts run prof-sheet`

## Definition of done

A professor is ready for outreach only when the Sheet has a verified email, workflow
status is `draft_ready`, the state points to the correct professor workspace, a validated
paper PDF and grounded context exist, and the human has reviewed the recipient and draft.
After the manual send, mark the state `sent`.
