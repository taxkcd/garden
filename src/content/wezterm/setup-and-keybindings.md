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

This page records the active WezTerm setup on the Linux desktop, with emphasis on the custom tab-navigation keys.

## Configuration location

WezTerm is installed as the Flatpak application `org.wezfurlong.wezterm`. Its user configuration is:

```text
~/.config/wezterm/wezterm.lua
```

WezTerm normally reloads this file automatically after it is saved. (This file is version-controlled in the `dotfiles` repo at `common/.config/wezterm/wezterm.lua`.)

## Tab keybindings

| Keys | Action | WezTerm action |
|---|---|---|
| `Ctrl+Tab` | Move to the next tab in sequence; repeated presses keep advancing and wrap around | `ActivateTabRelative(1)` |
| `Ctrl+Shift+Tab` | Move to the previous tab in sequence | `ActivateTabRelative(-1)` |
| `` Ctrl+` `` | Return to the most recently active tab; repeated presses toggle between the current and last-used tabs | `ActivateLastTab` |
| `Ctrl+1` … `Ctrl+9` | Jump directly to tabs 1–9 | `ActivateTab(0)` … `ActivateTab(8)` |
| `Ctrl+Shift+←` | Move the current tab one position to the left (reorder) | `MoveTabRelative(-1)` |
| `Ctrl+Shift+→` | Move the current tab one position to the right (reorder) | `MoveTabRelative(1)` |

The relevant Lua configuration is:

```lua
config.keys = {
  -- Tab management: reorder the current tab (mouse drag-reorder is unsupported).
  { key = "LeftArrow", mods = "CTRL|SHIFT", action = act.MoveTabRelative(-1) },
  { key = "RightArrow", mods = "CTRL|SHIFT", action = act.MoveTabRelative(1) },
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

## Tab drag / tear-off (not available)

WezTerm has **no mouse drag-and-drop for tabs**: you cannot drag a tab (e.g. downward) to reorder it or to tear it off into its own window. This is an upstream limitation, not a configuration gap — no Lua setting adds it. Because of this:

- **Reordering** is done with the keyboard (`Ctrl+Shift+←` / `Ctrl+Shift+→`), not the mouse.
- **Detaching a tab into a new window** was attempted via both `wezterm cli move-pane-to-new-tab --new-window` and the native `pane:move_to_new_window()` API. On this build (`20240203`), both create a new window that immediately closes itself (the multiplexer reaps the torn-off window — no GPU/panic error in the journal), so the feature was removed rather than left flashing.
- `Ctrl+Shift+N` is intentionally left unbound in the config, so it falls back to WezTerm's built-in `SpawnWindow` — a reliable fresh new window (with a new shell, not the current tab's contents).

If tab tear-off is genuinely needed, the realistic options are to upgrade WezTerm and re-test, or use a terminal with native drag tear-off (Ptyxis, Kitty).

## Window title-bar buttons

The minimize / maximize / close buttons are drawn by WezTerm itself as **integrated buttons** in the tab bar:

```lua
config.window_decorations = "INTEGRATED_BUTTONS|RESIZE"
config.integrated_title_buttons = { "Hide", "Maximize", "Close" }
```

The bare `"TITLE|RESIZE"` mode relies on the KWin window manager to draw those buttons, which it does **not** do on this NVIDIA/XWayland setup — leaving a button-less title bar. Drawing them via `INTEGRATED_BUTTONS` (styled by `window_frame.button_*`) guarantees they appear regardless of the compositor.

## Other setup details

- Font: MesloLGS NF, 10 pt.
- Theme: custom `Ptyxis Match` color scheme.
- Tab bar: always visible, at the top, using the fancy tab bar.
- Window: integrated title buttons (see above) and 94% background opacity.
- Cursor: steady block.
- Audible bell: disabled.
- Closing a window: no confirmation prompt.
- Wayland is disabled so the Flatpak runs through XWayland, avoiding the NVIDIA/Plasma explicit-sync crash encountered on this machine.

## Verify the loaded bindings

Because WezTerm is installed through Flatpak, inspect its resolved key table with:

```bash
flatpak run --command=wezterm org.wezfurlong.wezterm show-keys --lua
```

The output should contain `CTRL` + `Tab` with `ActivateTabRelative(1)` and `CTRL` + backtick with `ActivateLastTab`. To confirm the reorder keys, look for `SHIFT | CTRL` + `LeftArrow`/`RightArrow` mapping to `MoveTabRelative`.

## Gotchas

- `ActivateLastTab` is a last-used-tab toggle, not sequential traversal across every tab. Use `Ctrl+Tab` to walk through all tabs.
- WezTerm tab indexes are zero-based internally, so `Ctrl+1` maps to `ActivateTab(0)`.
- If a binding appears unchanged, check the resolved bindings with `show-keys`; this confirms which configuration the Flatpak actually loaded.
- Mouse tab drag (reorder or tear-off) does nothing — this is expected; use the keyboard bindings above.

## Result

The active configuration provides both navigation styles — predictable sequential traversal with `Ctrl+Tab`, and quick switching between the two most recently used tabs with `` Ctrl+` `` — plus keyboard tab reordering with `Ctrl+Shift+←/→`, and reliable window buttons drawn by WezTerm itself.
