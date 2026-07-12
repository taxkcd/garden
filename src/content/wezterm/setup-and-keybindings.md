---
title: "WezTerm Setup and Keybindings"
date: 2026-07-11
updated: 2026-07-13
tags:
  - wezterm
  - terminal
  - linux
  - configuration
---

Quick reference for the WezTerm setup on the Linux desktop: where things live, the shortcuts, and the handful of commands worth remembering.

## Locations

| What | Path |
|---|---|
| Live config | `~/.config/wezterm/wezterm.lua` |
| Version-controlled copy | `dotfiles` repo → `common/.config/wezterm/wezterm.lua` |
| Install | Flatpak app `org.wezfurlong.wezterm` |

Editing `~/.config/wezterm/wezterm.lua` reloads WezTerm automatically. Keep it in sync with the dotfiles repo.

## Keyboard shortcuts

| Keys | Action |
|---|---|
| `Ctrl+Tab` | Next tab (wraps around) |
| `Ctrl+Shift+Tab` | Previous tab |
| `` Ctrl+` `` | Toggle to the last-used tab |
| `Ctrl+1` … `Ctrl+9` | Jump to tab 1–9 |
| `Ctrl+Shift+←` / `Ctrl+Shift+→` | Move the current tab left / right (reorder) |
| `Ctrl+Shift+N` | Open a fresh new window |

> Mouse tab drag (reorder or tear-off) is not supported by WezTerm — use the keyboard shortcuts above.

## Quick commands

```bash
# Edit the config (auto-reloads on save)
$EDITOR ~/.config/wezterm/wezterm.lua

# Show the resolved key bindings (confirm what actually loaded)
flatpak run --command=wezterm org.wezfurlong.wezterm show-keys --lua

# Launch WezTerm
flatpak run org.wezfurlong.wezterm
```

## Setup at a glance

- **Font:** MesloLGS NF, 10 pt
- **Theme:** custom `Ptyxis Match` color scheme
- **Tab bar:** fancy tab bar, always visible, at the top
- **Window:** integrated title buttons (minimize / maximize / close), 94% background opacity
- **Cursor:** steady block
- **Bell:** disabled · **Window close:** no confirmation prompt
- **Wayland:** disabled (runs via XWayland to avoid the NVIDIA/Plasma crash on this machine)
