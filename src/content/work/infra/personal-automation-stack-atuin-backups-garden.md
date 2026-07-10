---
title: "Personal Automation Stack: atuin, backups, garden"
date: 2026-07-11
tags:
  - infra
  - atuin
  - quartz
  - automation
---

Documentation of the personal automation stack built with agents — how scripts, backups, and this garden fit together and how to run them.

## Context

Maintaining reusable setups (terminal, app configs, deploy steps) and a personal wiki had become messy to do by hand. The goal: capture useful work with near-zero friction and let agents curate/organize/publish it. Built on [Atuin](https://atuin.sh) scripts (synced across mac + ubuntu) plus two git repos.

## The pieces

1. **Atuin scripts** — named, reusable commands, synced everywhere via `atuin sync`. The source of truth for automation. House style: parameters come from **environment variables**, never `{{ }}` templates (atuin prompts for those — even ones in comments).
2. **Backups repo** (`~/.config/backups`) — every atuin script mirrored to `atuin_scripts/<name>.yml` + `INDEX.md`. Two-way sync via the `backup` script (`dir=atuin2repo` default, `dir=repo2atuin` to restore). `atuin-backup-diff` shows what changed and infers direction from git state.
3. **Garden** (this site) — a Quartz digital garden, human-readable and published. One `garden` control script drives everything by flags.

## How to use the garden

```bash
atuin scripts run garden                 # guide + live status
cmd=ls   atuin scripts run garden        # sections + URLs
cmd=new  folder=work/infra title="…" tags="…" from=./doc.md deploy=1 atuin scripts run garden
cmd=deploy atuin scripts run garden      # build-check + commit + push
```

Folder structure equals URL structure: `content/work/infra/<slug>.md` publishes at `/work/infra/<slug>`.

## Gotchas (the expensive lessons)

- **Atuin prompts on any `{{ token }}`** in the script — including inside comments. Use env-var flags and never write double braces anywhere in the body.
- **`${VAR:+x}` treats `"0"` as set.** Test `[ "$VAR" = 1 ]` for boolean flags.
- **Atuin doesn't forward positional args** to a script; wrap with a shell function for ergonomics.
- **GitHub Pages must be enabled** (source = GitHub Actions) before the deploy Action can publish; the build succeeds regardless, so a "failed check" is usually just this.
- **Deploy uses a dedicated PAT** (`GITHUB_GARDEN_TOKEN` in `~/.config/.keys`), pushed over HTTPS — not the SSH key.

## Result / how to verify

- `atuin scripts run garden` prints live status and sections.
- Pushing to `main` triggers the Pages Action; the site serves at https://taxkcd.github.io/garden.
- `atuin scripts run backup` keeps the machine-readable mirror in sync.

## Links

- Conventions: the repo's `AGENTS.md`
- Backups system: the `backup` and `atuin-backup-diff` scripts
