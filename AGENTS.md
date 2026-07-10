# AGENTS.md — how to maintain this garden

This repo is a **Quartz digital garden**: a human-readable, published knowledge base.
It is **agent-maintained**. Read this before adding or changing anything.

## The core idea: capture ≠ curate

- **The human captures** — a quick thought (`note "…"`) or a request ("write up this
  session and add it to the garden"). They do NOT organize.
- **You (the agent) curate** — write the note properly, put it in the right place, add
  frontmatter + tags, cross-link it, keep indexes tidy, and deploy.

There are two things you'll be asked to do:

1. **Quick note** — a scrap lands in `src/content/private/inbox.md`. Later, turn useful
   entries into real notes and delete them from the inbox.
2. **Session doc (main use case)** — after real work (a Next.js migration, a debugging
   session, a cold-outreach run), the human says "document this / add it to the garden".
   You already have the session context: write a complete doc, file it, link it, deploy.

## Repo layout

```
garden/
  AGENTS.md                 # this file
  src/
    quartz.config.ts        # site config (title, baseUrl, theme)
    content/                # THE NOTES (only this is published)
      index.md              # home
      work/                 # Next.js, migrations, impl docs, debugging
      personal/             # outreach, side projects, learning
      til/                  # one-idea "today I learned" notes
      private/              # NOT published (Quartz ignores `private`) — the inbox lives here
```

Slash paths become site URLs. Add sub-folders under `work/` and `personal/` freely
(e.g. `work/nextjs/`, `work/migrations/`, `personal/outreach/`).

## Note conventions

Every published `.md` starts with frontmatter:

```markdown
---
title: Human Readable Title
date: 2026-07-11        # creation date, YYYY-MM-DD
tags:
  - nextjs
  - migration
draft: false           # optional; true keeps it out of the build
---
```

- **Filenames**: session docs → `work/<topic>/<YYYY-MM-DD>-<slug>.md`
  (e.g. `work/migrations/2026-07-11-prisma-to-drizzle.md`). TIL → `til/<slug>.md`.
  Lowercase, hyphenated, no spaces.
- **Links**: use wikilinks — `[[work/migrations/2026-07-11-prisma-to-drizzle|Prisma → Drizzle]]`.
  Link every new doc from its section `index.md` and from any related page.
- **Tags**: 2–5 lowercase tags. Reuse existing ones; check with
  `grep -rh '^  - ' src/content --include=*.md | sort | uniq -c | sort -rn`.

## Writing a good session doc

Structure work write-ups so they're useful months later:

1. **Context** — what we were doing and why (repo, branch, goal).
2. **What we did** — the actual steps/decisions, in order.
3. **Gotchas** — the non-obvious things that cost time (the real value).
4. **Result / how to verify** — final state, commands to confirm.
5. **Links** — related notes, PRs, docs.

Keep code in fenced blocks with a language. Prefer specifics (versions, exact commands,
error text) over generalities — this is a lab notebook, not a blog.

## Inbox flow (quick notes)

`src/content/private/inbox.md` collects raw captures (timestamp + auto-context + text).
To process: read each entry, decide if it's worth keeping; if so write a real note
(TIL or a section page), link it, then delete that entry from the inbox. Leave the
inbox header intact.

## Build / preview locally

```bash
cd src
npm ci            # first time only (installs Quartz deps)
npx quartz build --serve   # local preview at http://localhost:8080
```

Run a build before deploying to catch broken links / bad frontmatter.

## Deploy

Pushing to `main` triggers the GitHub Pages Action (`.github/workflows/deploy.yml`).
Push is done with a **dedicated PAT**, not SSH:

- Token: `GITHUB_GARDEN_TOKEN` in `~/.config/.keys` (never commit it).
- Repo: `taxkcd/garden` → published at `taxkcd.github.io/garden`.
- Use the helper: `atuin scripts run garden-deploy` (build-check + commit + push), or:
  ```bash
  cd ~/dev/myrepos/garden
  set -a; . ~/.config/.keys; set +a
  git add -A && git commit -m "docs: <what>"
  git push "https://x-access-token:${GITHUB_GARDEN_TOKEN}@github.com/taxkcd/garden.git" HEAD:main
  ```
- `baseUrl` in `src/quartz.config.ts` is `taxkcd.github.io/garden`.

## Quick command reference

- `atuin scripts run garden` — orientation: what this is, how/why it works (read first).
- `note "…"` — capture a scrap to the inbox (works anywhere; atuin-synced).
- `atuin scripts run garden-deploy` — build-check, commit, and deploy the garden.
- "write up this session and add it to the garden" — you draft the doc per the rules above.

## What the human can ask

- "note: <thing>"                     → append to inbox
- "write up this session / migration" → create a session doc in the right folder
- "process my inbox"                  → turn inbox scraps into real notes
- "add a TIL about X"                 → one file in til/
- "deploy the garden"                 → build-check + push with the token
- "tidy up / fix links / dedupe"      → maintenance pass across content/
