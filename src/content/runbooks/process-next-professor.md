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
written under `~/.config/atuin_inventory/outputs/outreach-<slug>/`.

## Pointing a command at a professor

You rarely type a path. Every command can address a professor three ways:

- **Nothing** — it acts on the **current** professor (the one you last claimed or
  worked on), like a shell's working directory.
- **`prof=<slug>`** — name one directly: `prof=amy-ogan`, a unique substring `prof=ogan`,
  or even a typed name `prof='Amy Ogan'`.
- **`state=<full path>`** — the explicit path still works.

List everyone and their status (your `ls`): `action=ls atuin scripts run outreach-orchestrator`.
Every command prints `→ professor: <slug> (<status>)` before acting. If a name is
ambiguous or several professors are in flight with nothing specified, it lists them
and stops — it never guesses.

## The whole path at a glance

`next → profile (± discover) → paper → sent`. Four commands on the clean case. After
`action=next` you never type a path — every command acts on the **current** professor.

```sh
# 0. Once per session — make sure Chrome is up for the browser steps
cmd=status atuin scripts run cdp        # cmd=launch if it isn't running

# 1. Claim the next professor from the Sheet (becomes "current")
action=next atuin scripts run outreach-orchestrator
#    → prints the professor + whether it's ready_to_profile or needs_discovery

# 2a. If step 1 said needs_discovery (no URL on the Sheet):
action=discover atuin scripts run outreach-orchestrator          # opens Chrome tabs
action=profile profile_url='<the URL you picked>' atuin scripts run outreach-orchestrator

# 2b. If step 1 said ready_to_profile (Sheet had a URL):
action=profile atuin scripts run outreach-orchestrator

# 3. Pick a paper — runs all the way to a draft automatically
action=paper paper_url='<arXiv / DOI / PDF URL>' atuin scripts run outreach-orchestrator
#    downloads + validates PDF → builds context → learning path → drafts the email

# 4. Review the draft, edit, and SEND IT YOURSELF (sending is always manual)
#    open  ~/.config/atuin_inventory/outputs/outreach-<slug>/email-draft.md

# 5. After you've sent it, close the row
action=sent atuin scripts run outreach-orchestrator
```

If a step stops (bad/stale URL, name collision, weak fit) it prints exactly what it
needs — usually `action=add-urls urls='<url1>,<url2>' ...` with two or three good pages
you found by hand. The sections below explain each step in full.

## Option A — guided interactive run

This claims the next professor and prompts at each human gate. Stop at any time; the
professor is checkpointed, so re-running resumes it.

```sh
interactive=1 action=run atuin scripts run outreach-orchestrator
```

To resume a specific professor later, name it (no path needed):

```sh
interactive=1 action=run prof=<slug> atuin scripts run outreach-orchestrator
```

## Option B — step by step

### 1. Claim exactly one new professor

```sh
action=next atuin scripts run outreach-orchestrator
```

**Important:** `action=next` only claims a new Sheet row. It does not advance or resume
an existing professor. Never pass an old `prof=`/`state` to `action=next`.

The claimed professor becomes **current**, so every remaining command below needs no
path at all. (If you step away and work another professor in between, re-address this
one with `prof=<slug>` — `action=ls` shows the slugs.)

### 2. Build and verify the professor dossier

If the row already has a profile URL:

```sh
action=profile atuin scripts run outreach-orchestrator
```

If the row has no usable URL, discover candidates, review the opened browser tabs, and
profile the correct page:

```sh
action=discover atuin scripts run outreach-orchestrator
action=profile profile_url='https://AUTHORITATIVE-FACULTY-PAGE' atuin scripts run outreach-orchestrator
```

If profiling stops with `identity_unconfirmed`, `profile_empty`, or a stale/wrong page,
find two or three authoritative pages and merge them through the supported recovery path:

```sh
action=add-urls urls='https://FACULTY-PAGE,https://PERSONAL-OR-SCHOLAR-PAGE' atuin scripts run outreach-orchestrator
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
action=paper paper_url='https://ARXIV-OR-DOI-OR-PDF' atuin scripts run outreach-orchestrator
```

You may explicitly delegate selection from the displayed candidates:

```sh
action=select atuin scripts run outreach-orchestrator
```

If OpenAlex is rejected because its affiliation contradicts the verified dossier, do not
use a generic approval. Supply a verified paper and affirmative author evidence:

```sh
action=paper verified_paper_url='https://VERIFIED-PAPER' paper_evidence_urls='https://FACULTY-OR-SCHOLAR-EVIDENCE' atuin scripts run outreach-orchestrator
```

A validated full-text PDF is mandatory. If one candidate stops at `paper_failed`, choose
another authoritative paper URL; the workflow must never draft from an abstract alone.

The successful paper path downloads and validates the PDF, extracts its text, builds
grounded context, creates the learning path, publishes that learning page to the garden,
and drafts the email. Add `no_garden=1` for a private/test run.

### 4. Resume from a safe checkpoint

Ask the orchestrator what the current state needs:

```sh
action=guide atuin scripts run outreach-orchestrator
```

Common checkpoints:

- `paper_context_ready`: create the grounded draft with
  `action=draft-email atuin scripts run outreach-orchestrator`.
- `draft_review_required`: open the draft and validation findings; do not treat it as
  outreach-ready until the specificity problems are corrected.
- `draft_ready`: the automated work is complete and the draft is ready for human review.

Use `action=run ...` to advance an existing state to its next human gate.
Do not use `action=next` for this.

### 5. Review the draft and recipient

```sh
action=status atuin scripts run outreach-orchestrator
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
action=sent atuin scripts run outreach-orchestrator
```

This changes the Sheet status to `sent` and records the outreach date.

## Useful checks

- List every professor workspace (slug, status, name; marks the current one):
  `action=ls atuin scripts run outreach-orchestrator`
- Current state and exact next command:
  `action=guide atuin scripts run outreach-orchestrator`
- Machine-readable state:
  `action=status atuin scripts run outreach-orchestrator`
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
