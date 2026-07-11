---
title: "Flameshot"
date: 2026-07-11
tags:
  - shortcuts
  - flameshot
  - linux
  - kde
---

This page records the Flameshot shortcuts used on this Linux desktop. It was checked against the installed **Flameshot v13.3.0** configuration.

## Global shortcut

| Keys | Action |
|---|---|
| `Ctrl+Shift+X` | Open Flameshot's screenshot capture mode |

This is the only Flameshot shortcut currently registered with KDE Plasma's global shortcut service. The Flameshot actions **Configure**, **Open launcher**, and **Launch Flameshot** have no global bindings assigned.

## Drawing tools

These shortcuts work while the capture editor is open.

| Key | Tool |
|---|---|
| `P` | Pencil |
| `D` | Line |
| `A` | Arrow |
| `S` | Selection |
| `R` | Rectangle |
| `C` | Circle |
| `M` | Marker |
| `T` | Text |
| `B` | Pixelate |
| `G` | Color picker |

## Selection controls

| Keys | Action |
|---|---|
| `Arrow keys` | Move the selection by 1 pixel |
| `Shift+Arrow keys` | Resize the selection by 1 pixel |
| `Ctrl+Shift+Arrow keys` | Resize the selection symmetrically by 2 pixels |
| `Ctrl+M` | Move the selection area |
| `Ctrl+Backspace` | Cancel the current selection |
| `Ctrl` while dragging a selection handle | Preserve the aspect ratio |
| `Shift` while dragging a selection handle | Resize symmetrically from the opposite handle |

## Capture actions

| Keys | Action |
|---|---|
| `Ctrl+C` | Copy the capture to the clipboard |
| `Ctrl+S` | Save the capture to a file |
| `Ctrl+O` | Open the capture in another application |
| `Enter` | Upload the selection to Imgur |
| `Esc` | Quit capture mode |
| `Ctrl+Q` | Leave the capture screen |

## Editing and interface

| Keys | Action |
|---|---|
| `Ctrl+Z` | Undo the last modification |
| `Ctrl+Shift+Z` | Redo the next modification |
| `Ctrl+Enter` | Commit text while editing a text box |
| `Space` | Toggle the selected tool's options/sidebar |
| Right-click | Show the color wheel |
| Mouse wheel | Change the active tool's thickness |

## Configuration

Open **Flameshot → Configuration → Shortcuts** to inspect or change the capture-editor bindings.

To inspect the KDE global bindings over D-Bus:

```bash
qdbus6 --literal org.kde.kglobalaccel \
  /component/org_flameshot_Flameshot_desktop \
  org.kde.kglobalaccel.Component.allShortcutInfos
```

## Gotchas

- Linux does not necessarily assign Flameshot a global `Print Screen` shortcut automatically. On this machine, the active capture binding is `Ctrl+Shift+X`.
- Global shortcuts launch or control the application; the single-letter shortcuts only work after the capture editor is open.
- Flameshot's in-app shortcuts are configurable, so revisit **Configuration → Shortcuts** if the defaults stop matching.

## References

- [Flameshot key bindings](https://flameshot.org/docs/guide/key-bindings/)
