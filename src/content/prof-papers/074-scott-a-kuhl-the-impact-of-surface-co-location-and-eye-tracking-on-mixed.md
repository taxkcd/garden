---
title: "074 · The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing — Scott A. Kuhl"
date: 2026-07-29
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-scott-a-kuhl"
source_hash: "870f483c2fb13cb52a5ec3705b1408001d270a0ff36a79b815bd01dfaba828a7"
sequence: 74
generator: "outreach-garden: managed"
---

# 074 · The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing

## At a glance

- **Professor:** Scott A. Kuhl
- **Institution:** Michigan Technological University
- **Paper:** [The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing](https://arxiv.org/pdf/2410.04177v2)
- **Authors:** Cecilia Schmitz, Joshua Reynolds, Scott Kuhl, Keith Vertanen
- **Year:** 2025

## Paper overview

This study investigates how typing performance in mixed reality (MR) environments is affected by the placement of virtual keyboards and the use of eye-tracking. Two experiments were conducted: the first compared typing on a midair keyboard versus keyboards co-located on a table or wall, and the second explored ten-finger typing with and without eye-tracking to reduce accidental key presses. Results showed that midair typing with index fingers was faster and preferred, while eye-tracking helped reduce errors in ten-finger typing but did not increase speed.

### Why it matters

**Research problem:** Typing in mixed reality often uses midair virtual keyboards that lack tactile feedback, which may impair typing speed and accuracy. The study aims to understand how surface co-location (placing virtual keyboards on physical surfaces) and eye-tracking can improve typing performance and user experience in MR.

**Why it matters:** Efficient text input is critical for MR to replace portable computing devices for everyday tasks. Lack of tactile feedback and accidental key presses limit usability and adoption of MR typing interfaces.

**Key contributions:**

- Demonstrated that midair typing with index fingers on a deterministic keyboard achieves reasonable speed (~12 WPM) and low error rates (<1%) without auto-correct.
- Showed that keyboards co-located on physical surfaces (table or wall) provide tactile feedback but suffer from hand-tracking inaccuracies, reducing typing speed and preference.
- Developed a novel eye-tracking based filter to reduce accidental key presses in ten-finger midair typing, which significantly reduced error corrections.
- Released detailed participant logs and source code for the MR keyboard applications to support future research.

## About the professor

**Scott A. Kuhl** — Associate Professor, Computer Science, Computer Science, Michigan Technological University.

Research interests: computer graphics, immersive virtual environments, head-mounted displays, and how humans understand and interact with 3D space

### Research links

- [Faculty/profile page](https://www.mtu.edu/cs/department/faculty-staff/faculty/kuhl)
- [Professor website](https://pages.mtu.edu/%7Ekuhl/)
- [Resolved homepage](https://www.mtu.edu/cs/department/people/faculty/kuhl/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on mixed reality typing with surface co-location and eye-tracking, start by building foundational knowledge on hand-tracking and eye-tracking technologies, which are critical to the paper's approach. Next, explore mixed reality input devices to contextualize the hardware and interaction methods used. Finally, focus on the core concept of the paper itself, including the authors' own talks or closely related expert discussions on eye-tracking in XR, to grasp the novel contributions and experimental insights.

### Hand-tracking technology *(prerequisite)*
Understanding the capabilities and limitations of hand-tracking is essential since the paper highlights hand-tracking inaccuracies near surfaces as a key challenge. The selected video provides a research-level introduction to real-time hand tracking and its application in VR/AR environments, which underpins the paper's experimental setup and findings.

*How the paper uses it:* The paper's findings on reduced typing performance on surface co-located keyboards are directly linked to hand-tracking limitations.

▶ [Introduction to Virtual Reality, OpenXR Hand-Tracking, and ...](https://www.youtube.com/watch?v=67v-sEhidvM) — Mamadou Babaei · 1:19:48

### Eye-tracking technology *(prerequisite)*
Eye-tracking technology is central to the paper's novel approach to reducing accidental key presses in midair typing. The chosen seminar provides a rigorous academic overview of eye-tracking data collection, models, and applications, offering foundational knowledge to appreciate the paper's eye-tracking filter innovation.

*How the paper uses it:* The paper develops an eye-tracking based filter to improve typing accuracy in mixed reality.

▶ [Stanford Seminar - Why does where people look matter ...](https://www.youtube.com/watch?v=PiYwEq0x2rU) — Stanford Online · 56:17

### Mixed reality input devices *(prerequisite)*
A solid understanding of mixed reality input devices, including virtual keyboards and gesture inputs, is necessary to contextualize the paper's experiments comparing midair and surface co-located keyboards. The selected lecture offers a university-level introduction to various VR hardware and input devices, supporting comprehension of the paper's hardware choices and interaction paradigms.

*How the paper uses it:* The paper compares different MR keyboard placements and input methods using HoloLens 2.

▶ [Lec 14: VR Hardware](https://www.youtube.com/watch?v=V2EMVpnyAn4) — NPTEL IIT Guwahati · 6 months ago

### Paper author talk *(the paper's own talk)*
Direct insights from the authors or closely related expert talks on eye-tracking in XR provide the most precise understanding of the paper's contributions and experimental nuances. Although no exact talk by the paper authors was found, the selected in-depth interview with a head of XR at Tobii, a leading eye-tracking company, offers advanced perspectives on eye-tracking technology's future in XR, which aligns well with the paper's focus.

*How the paper uses it:* The paper's novel use of eye-tracking to reduce typing errors in MR aligns with the expert insights on eye-tracking in XR presented in this interview.

▶ [EYE TRACKING - The Future Of XR - In Depth Interview with Johan Hellqvist, Head of XR, Tobii](https://www.youtube.com/watch?v=a6qgWwRn0mc) — MRTV - MIXED REALITY TV · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational technologies and concepts behind mixed reality typing, starting with the basics of mixed reality input devices and hand-tracking technology. Next, it covers eye-tracking technology and its integration with hand-tracking to improve input accuracy. Finally, it presents insights from the paper's authors and demonstrations of eye-tracking applied to XR typing, helping you understand the specific challenges and solutions explored in the study.

### Mixed reality input devices *(prerequisite)*
Learn about the different input devices used in mixed reality, such as virtual keyboards and hand controllers, to understand how users interact with MR environments. This foundational knowledge helps you grasp the challenges of typing in MR and why new methods are needed.

*How the paper uses it:* The paper studies typing on virtual keyboards in MR, so understanding MR input devices is essential to appreciate the context and challenges.

▶ [Examples of input devices in VR - Introduction to Virtual ...](https://www.youtube.com/watch?v=VknCD3jGXoQ) — Ekeeda · 6:00

### Hand-tracking technology *(prerequisite)*
Explore how hand-tracking works to detect and interpret hand and finger movements in MR, including its limitations like tracking inaccuracies and latency. This is crucial to understand why surface co-location keyboards may suffer performance issues.

*How the paper uses it:* The paper highlights hand-tracking inaccuracies near surfaces as a key factor reducing typing speed and preference on co-located keyboards.

▶ [I tried the Oculus Quest Hand Tracking in VR! | Hands-On First ...](https://www.youtube.com/watch?v=q5Mh-dfKcxc) — Nathie · 12:18

### Eye-tracking technology *(prerequisite)*
Understand how eye-tracking measures where a user is looking and how this data can be used to improve interaction with MR interfaces by reducing errors and enhancing input precision.

*How the paper uses it:* The paper uses eye-tracking to filter accidental key presses during ten-finger midair typing, improving accuracy without reducing speed.

▶ [Eye-Tracking Explained! | Neuroscience Methods 101](https://www.youtube.com/watch?v=sbkbekz82wQ) — Psyched! · 4:21

### Hand and eye-tracking integration
Learn about combining hand-tracking and eye-tracking data to create more accurate and reliable input methods in MR, which can reduce errors and improve user experience.

*How the paper uses it:* The paper develops a novel eye-tracking filter to reduce accidental key presses in midair typing, demonstrating the benefits of integrating these sensing modalities.

▶ [Psychology research with eye tracking in VR](https://www.youtube.com/watch?v=b34oVvQtRbY) — Tobii · 8 years ago

### Paper author talk *(the paper's own talk)*
Gain direct insight from experts about the challenges and findings of MR typing research, including their novel use of eye-tracking and the surprising preference for midair keyboards despite lack of tactile feedback.

*How the paper uses it:* Hearing from the authors themselves provides context and deeper understanding of the study's motivation, methods, and implications.

▶ [An Eye-tracked Swipe Keyboard for Hands-free Typing in Augmented and Virtual Reality](https://www.youtube.com/watch?v=I4Oj4WavKO8) — Jason Orlosky · 2 years ago
