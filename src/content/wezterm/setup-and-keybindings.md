---
title: "WezTerm Setup and Keybindings"
date: 2026-07-11
tags:
  - wezterm
  - terminal
  - linux
  - configuration
---

This page records the active WezTerm setup on the Linux desktop, with emphasis on the custom tab-navigation keys.

## Configuration location

WezTerm is installed as the Flatpak application `org.wezfurlong.wezterm`. Its user configuration is:

```text
~/.config/wezterm/wezterm.lua
```

WezTerm normally reloads this file automatically after it is saved.

## Tab keybindings

| Keys | Action | WezTerm action |
|---|---|---|
| `Ctrl+Tab` | Move to the next tab in sequence; repeated presses keep advancing and wrap around | `ActivateTabRelative(1)` |
| `Ctrl+Shift+Tab` | Move to the previous tab in sequence | `ActivateTabRelative(-1)` |
| `` Ctrl+` `` | Return to the most recently active tab; repeated presses toggle between the current and last-used tabs | `ActivateLastTab` |
| `Ctrl+1` … `Ctrl+9` | Jump directly to tabs 1–9 | `ActivateTab(0)` … `ActivateTab(8)` |

The relevant Lua configuration is:

```lua
config.keys = {
  { key = "1", mods = "CTRL", action = act.ActivateTab(0) },
  { key = "2", mods = "CTRL", action = act.ActivateTab(1) },
  { key = "3", mods = "CTRL", action = act.ActivateTab(2) },
  { key = "4", mods = "CTRL", action = act.ActivateTab(3) },
  { key = "5", mods = "CTRL", action = act.ActivateTab(4) },
  { key = "6", mods = "CTRL", action = act.ActivateTab(5) },
  { key = "7", mods = "CTRL", action = act.ActivateTab(6) },
  { key = "8", mods = "CTRL", action = act.ActivateTab(7) },
  { key = "9", mods = "CTRL", action = act.ActivateTab(8) },
  { key = "Tab", mods = "CTRL", action = act.ActivateTabRelative(1) },
  { key = "`", mods = "CTRL", action = act.ActivateLastTab },
  { key = "Tab", mods = "CTRL|SHIFT", action = act.ActivateTabRelative(-1) },
}
```

## Other setup details

- Font: MesloLGS NF, 10 pt.
- Theme: custom `Ptyxis Match` color scheme.
- Tab bar: always visible, at the top, using the fancy tab bar.
- Window: integrated title buttons and 94% background opacity.
- Cursor: steady block.
- Audible bell: disabled.
- Closing a window: no confirmation prompt.
- Wayland is disabled so the Flatpak runs through XWayland, avoiding the NVIDIA/Plasma explicit-sync crash encountered on this machine.

## Verify the loaded bindings

Because WezTerm is installed through Flatpak, inspect its resolved key table with:

```bash
flatpak run org.wezfurlong.wezterm show-keys --lua
```

The output should contain `CTRL` + `Tab` with `ActivateTabRelative(1)` and `CTRL` + backtick with `ActivateLastTab`.

## Gotchas

- `ActivateLastTab` is a last-used-tab toggle, not sequential traversal across every tab. Use `Ctrl+Tab` to walk through all tabs.
- WezTerm tab indexes are zero-based internally, so `Ctrl+1` maps to `ActivateTab(0)`.
- If a binding appears unchanged, check the resolved bindings with `show-keys`; this confirms which configuration the Flatpak actually loaded.

## Result

The active configuration now provides both navigation styles: predictable sequential traversal with `Ctrl+Tab`, and quick switching between the two most recently used tabs with `` Ctrl+` ``.
