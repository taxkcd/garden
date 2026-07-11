---
title: "Personal Automation Stack — Implementation (2026-07-11)"
date: 2026-07-11
tags:
  - infra
  - atuin
  - quartz
  - ssh
  - session-log
---

Implementation log for the personal automation stack built in this session: SSH access to the Linux box, an atuin↔git backup system, and the agent-maintained garden. Written to be re-followable, not just read.

## Context

Goal: make three things effortless and portable across mac + ubuntu — (a) SSH into the Linux machine, (b) keep all reusable automation (atuin scripts) versioned, (c) capture and publish knowledge without hand-organizing. Everything is built on **atuin scripts** (synced via `atuin sync`) plus git repos, and is agent-drivable.

## What we built

### 1. SSH access — `ssh-linux-setup`
- `ed25519` key `~/.ssh/taimour_ubuntu`, a `~/.ssh/config` `Host` entry for a one-word `ssh taimour_linux`.
- Auto-discovers the Linux host via **KDE Connect** (`kdeconnect-cli --list-available`) → resolves `<name>.local` over mDNS (`taimour.local`).
- Idempotent, self-documenting; when `sshd` is down it prints the exact Linux-side install/authorize commands (the chicken-and-egg: it can't configure the far side over SSH).

### 2. Atuin ↔ git backups — `backup`, `atuin-backup-diff`, `readme`
- `~/.config/backups` (`taxkcd/backups`) mirrors every atuin script to `atuin_scripts/<name>.yml` + generated `INDEX.md`.
- `backup` is **two-way**: `dir=atuin2repo` (default, safe, revertible via git) and `dir=repo2atuin` (restore repo edits into atuin; `prune=1` deletes atuin scripts removed from the repo).
- `atuin-backup-diff` shows drift and **infers direction from git state** (dirty repo `.yml` ⇒ repo→atuin, else atuin→repo).
- `readme` orients any agent. Retired the old Atuin Desktop runbook sync (`atrb-converter`) and rewrote `agent-guide`.

### 3. The garden — one `garden` control script
- Fresh Quartz digital garden, emptied `content/` (`work/`, `personal/`, `til/`, `private/`), published to GitHub Pages at https://taxkcd.github.io/garden.
- One flag-driven script: `cmd=ls|tree|find|new|capture|deploy|url`, runs from any directory. `cmd=new folder=<f> file=<name>` creates `content/<folder>/<slug>.md` — folder structure equals URL — with `deploy=1` to publish.
- Deploys with a dedicated PAT (`GITHUB_GARDEN_TOKEN` in `~/.config/.keys`) over HTTPS; push to `main` triggers the Pages Action.

## Gotchas (the expensive lessons)

- **Atuin prompts for every `{{ token }}`** in a script — even in comments. Use env-var flags; never write double braces in the body.
- **`${VAR:+x}` treats `"0"` as set** — test `[ "$VAR" = 1 ]` for boolean flags.
- **Atuin doesn't forward positional args** — wrap with a shell function for ergonomics.
- **`path` can't be a flag name in zsh** (tied to `$PATH`) — `path=… atuin …` makes atuin "command not found"; the URL flag is `page=`.
- **YAML titles with a colon break frontmatter** unless quoted — `new` now quotes titles; the build-check caught it before publishing.
- **GitHub Pages must be enabled** (source = GitHub Actions) before the deploy job can publish; the build job succeeds regardless.
- **macOS `ping`** uses `-W <ms>` for a clean timeout; `-t` is TTL and fires a noisy `SIGALRM`.
- **Path containment**: `cmd=new` refuses `..`/escaping, so docs never land outside `content/`.

## Result / how to verify

- `ssh taimour_linux` (after the Linux side runs the printed setup block).
- `atuin scripts run readme` and `atuin scripts run garden` orient on any machine.
- `atuin scripts run atuin-backup-diff` shows atuin↔repo drift; `atuin scripts run backup` mirrors.
- This doc: created with `cmd=new`, published with `cmd=deploy`, served at its `/…` URL.

## Links

- Conventions: the repo's `AGENTS.md`
- Related: [[work/infra/personal-automation-stack-atuin-backups-garden|Personal Automation Stack]]
