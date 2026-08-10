---
title: "074 · The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing — Scott A. Kuhl"
date: 2026-07-29
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-scott-a-kuhl"
source_hash: "6729264972b51a5b126cced6d260a7d8440da31a145402089ff3d021104dc9bf"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Human-Computer Interaction
**The paper assumes:** human-computer interaction principles, user interface design, usability evaluation methods
**Already in this field?** Skip this entirely if you already understand core human-computer interaction concepts and usability study methodologies.

This background is designed to provide foundational knowledge in Human-Computer Interaction (HCI), which is essential to understand the design, evaluation, and usability considerations in mixed reality typing interfaces explored in the paper. The rigorous course option offers a deep dive into HCI concepts through a university lecture series, while the fast track provides a concise, well-structured introduction suitable for quickly grasping key principles relevant to this research.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Human Computer Interaction (In English)](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-KVz-9blW7qq_LgDPSOtEE) — NPTEL-NOC IITM · 45 videos · 26.3h across 45 episodes

**Watch only this:** Lectures 1 Part 1, 1 Part 2, 2 Part 1, 2 Part 2, Interaction 3 Part 1, Interaction 3 Part 2, User Perspective 4 part 1 and 4 part 2, Cognitive Aspects in Human-Computer Interaction — about 4 hours total. These cover core HCI concepts, interaction design, and user study considerations essential for this paper.

*Why it unblocks this paper:* This is a comprehensive university-level course on Human-Computer Interaction by Prof. Rajiv Ratn Shah, covering fundamental concepts such as design principles, interaction models, user perspectives, and cognitive aspects, all directly relevant to understanding the experimental design and user study analysis in the paper.

*If you want all of it:* 26.3 hours across 45 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Human Computer Interaction](https://www.youtube.com/playlist?list=PLlgPXNRcnX3EtESM59QVohcQBJ6N7H4JF) — IxDF - Interaction Design Foundation · 11 videos · 1.0h across 11 episodes

**Watch only this:** Episodes 1 through 7 and episode 8 (What Is Error and Types of Errors in Human-Computer Interaction) — about 40 minutes total. These episodes cover the essential HCI design concepts and error understanding relevant to the paper's focus on typing performance and error reduction.

*Why it unblocks this paper:* This short-form playlist by the Interaction Design Foundation provides a clear and concise introduction to HCI fundamentals, including design principles, human memory, perception, and error types, which are critical for quickly understanding the usability and error analysis aspects of the paper.

*If you want all of it:* 1.0 hour across 11 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder that helps you demonstrate understanding of the paper "The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing." The beginner project reproduces a core experimental comparison of typing speeds on different keyboard placements using a simple web simulation. The intermediate project implements the paper's eye-tracking filtering method to reduce accidental key presses in a midair typing simulation and compares error rates with and without filtering. The advanced project extends the paper by exploring probabilistic fusion of hand-tracking and eye-tracking signals to improve key press detection accuracy, addressing a stated future direction and limitation.

### Beginner — Simulate Midair vs Surface Keyboard Typing Speeds
*Effort: a weekend, ~8 hours*

You build a simple interactive web app that simulates typing on three virtual keyboard placements: midair, table, and wall. The app measures typing speed (WPM) and error rate based on user input timing and simulated hand-tracking noise for surface keyboards. You replicate the paper's key result that midair typing is faster and preferred.

**Why it shows you understood the paper:** This project shows you understand the core experimental design and results comparing keyboard placements and the impact of hand-tracking inaccuracies on typing speed and preference.

**Grounded in:** In Experiment 1, midair keyboard typing was significantly faster (12.2 WPM) and preferred by most participants compared to table (9.1 WPM) and wall (7.8 WPM) keyboards.

**Tech stack:** JavaScript, React, CSS

**Data:** Simulated typing timing and error data based on the paper's reported means and standard deviations; no real dataset is needed.

**Build it:**

1. Create a React app with three keyboard placement modes: midair, table, and wall.
2. Simulate hand-tracking noise for table and wall modes by adding random delays and occasional missed key presses.
3. Capture user typing input and compute words per minute (WPM) and error rate in each mode.
4. Display results and allow users to switch modes and compare performance.
5. Write a README explaining the simulation and how it relates to the paper's Experiment 1 results.

**Ships as:** A GitHub repo with a React app simulating typing on different keyboard placements, showing WPM and error rates consistent with the paper's findings, plus a README linking the simulation to the paper's Experiment 1.

**Stretch goal:** Add a simple preference survey UI to collect user keyboard placement preference and compare with the paper's participant preferences.

### Intermediate — Implement Eye-Tracking Filter for Midair Ten-Finger Typing
*Effort: 2 weekends, ~20 hours*

You build a midair virtual keyboard typing simulation that supports ten-finger typing with and without an eye-tracking-based filter to reduce accidental key presses. You implement the paper's eye-tracking filter logic to block key presses when gaze is not on the key. You measure and compare error rates and backspace usage between filtered and unfiltered modes.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's novel eye-tracking filtering method and reproduce its key result that eye-tracking reduces errors without reducing typing speed.

**Grounded in:** Developed a novel eye-tracking based filter to reduce accidental key presses in ten-finger midair typing, which significantly reduced error corrections.

**Tech stack:** JavaScript, React, TypeScript

**Data:** Simulated typing sessions with synthetic gaze and finger press events based on the paper's description; no public dataset is available, so you generate synthetic data to mimic the paper's conditions.

**Build it:**

1. Build a React app with a midair keyboard UI supporting ten-finger typing input.
2. Simulate gaze tracking data aligned with key positions and finger press events.
3. Implement the eye-tracking filter that blocks key presses unless gaze is on the target key.
4. Run typing sessions with and without the filter, logging errors and backspace usage.
5. Analyze and visualize the difference in error rates and backspace counts between modes.
6. Document the implementation and relate results to the paper's Experiment 2 findings.

**Ships as:** A GitHub repo with a React+TypeScript midair typing simulation implementing eye-tracking filtering, analysis scripts showing error reduction, and a README linking to the paper's Experiment 2 results.

**Stretch goal:** Integrate a simple language model or auto-correct to explore effects on error rates and typing speed.

### Advanced — Probabilistic Fusion of Hand and Eye-Tracking for MR Typing
*Effort: 3-4 weeks*

You develop a prototype system that fuses simulated hand-tracking and eye-tracking signals probabilistically to improve key press detection accuracy in midair MR typing. You model uncertainties in both signals and combine them to decide key presses more robustly. You evaluate the system against a baseline using only hand-tracking or eye-tracking filtering, measuring error rates and typing speed.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by implementing and evaluating a fusion approach to overcome hand-tracking inaccuracies and improve typing reliability.

**Grounded in:** Investigating probabilistic fusion of hand and eye-tracking signals for more accurate key press detection.

**Tech stack:** Python 3.11, React, TypeScript, NumPy, Matplotlib

**Data:** Synthetic datasets simulating hand-tracking and eye-tracking signals with noise profiles inspired by the paper's reported tracking inaccuracies; no public dataset is available.

**Build it:**

1. Design a probabilistic model to fuse hand-tracking finger position data and eye-tracking gaze data for key press detection.
2. Implement a simulation environment generating noisy hand and eye-tracking signals for midair typing.
3. Build a React frontend to visualize typing input and fusion decisions in real time.
4. Compare typing accuracy and speed metrics of the fusion method against hand-only and eye-only baselines.
5. Analyze results and write a detailed report discussing improvements and limitations relative to the paper.
6. Prepare a README explaining the fusion approach, its relation to the paper's future directions, and instructions to run the prototype.

**Ships as:** A GitHub repo with a Python+React prototype demonstrating probabilistic fusion of hand and eye-tracking for MR typing, evaluation scripts, visualizations, and a comprehensive README linking to the paper's future directions.

**Stretch goal:** Extend the fusion model to adaptively calibrate keyboard height or incorporate tactile feedback simulation.

_The paper's authors did not release code or datasets for this work, so all data must be simulated based on the paper's reported statistics and descriptions._
