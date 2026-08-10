---
title: "291 · HyFinBall: a Hybrid User Interface for Coordinated 2D+3D Visualization in Semi-Immersive VR — Zachary Wartell"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zachary-wartell"
source_hash: "1048a713307bbae4e6e7d595269ec4bd10ad579e2ae977ecefd7c815f586794c"
sequence: 291
generator: "outreach-garden: managed"
---

# 291 · HyFinBall: a Hybrid User Interface for Coordinated 2D+3D Visualization in Semi-Immersive VR

## At a glance

- **Professor:** Zachary Wartell
- **Institution:** UNC - Charlotte
- **Paper:** [HyFinBall: a Hybrid User Interface for Coordinated 2D+3D Visualization in Semi-Immersive VR](https://arxiv.org/abs/2512.10196)
- **Authors:** Isaac Cho, Zachary Wartell
- **Year:** 2025

## Paper overview

This paper presents HyFinBall, a hybrid user interface that seamlessly integrates 2D and 3D input methods for virtual reality visualization tasks. It uses dual handheld devices called buttonballs that automatically switch between 6-degree-of-freedom (6DOF) 3D input and planar 3DOF 2D input, combined with multi-touch and finger tracking. The system enables users to perform complex 2D and 3D tasks without switching physical devices, improving efficiency and reducing fatigue.

### Why it matters

**Research problem:** Existing 3D visualization applications require coordinated 2D and 3D interactions, but current input devices either excel at 3D or 2D tasks, not both. Users must often switch between multiple devices, causing inefficiency and fatigue.

**Why it matters:** Efficient and comfortable interaction with complex 3D visualizations is crucial for tasks like terrain analysis and scientific visualization. Reducing device switching and improving input methods can enhance user performance and reduce fatigue.

**Key contributions:**

- Development of HyFinBall, a hybrid bimanual interface supporting seamless switching between 2D and 3D input modes without dropping devices.
- Introduction of an auto-switching mechanism between 6DOF and planar-3DOF input modes based on device position.
- Integration of multi-touch and 3D finger tracking with handheld devices allowing simultaneous 2D and 3D interaction.
- Formal user studies demonstrating improved task performance and reduced fatigue with HyFinBall compared to traditional 6DOF-only and 6DOF+mouse setups.

## About the professor

**Zachary Wartell** — Associate Professor, Department of Computer Science, UNC - Charlotte.

Research interests: Virtual Reality and Mixed Reality User Interfaces, Visualization and Interactive Computer Graphics

### Research links

- [Faculty/profile page](http://webpages.uncc.edu/zwartell)
- [Resolved homepage](https://webpages.charlotte.edu/zwartell/)
- [Lab website](http://www.viscenter.uncc.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D User Interface Design
**The paper assumes:** 3D user interface design, spatial interaction techniques, and 6DOF input device principles
**Already in this field?** Skip this entirely if you already understand 3D interaction design principles and how 6DOF input devices work in virtual reality environments.

To understand the HyFinBall paper on hybrid 2D/3D user interfaces in VR, background knowledge in 3D user interface design and human-computer interaction principles is essential. The rigorous course option offers a comprehensive university-level introduction to human-computer interaction, covering foundational UI design concepts that underpin 3D and hybrid input techniques. The fast track provides a concise, practical introduction to UI design in Unreal Engine, focusing on user interface construction relevant to VR applications, suitable for quickly grasping core UI concepts without deep theory.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Unreal Engine UMG Design for Beginners: Master User Interface (UI/UX)](https://www.youtube.com/playlist?list=PLUEJPqKDLa6IgcQ6rGAl5UlulNyWioAbO) — VR Division · 4 videos · 0.9h across 4 episodes

**Watch only this:** all 4 episodes, about 0.9 hours — covering basics of UMG, canvas panel, buttons, and modular UI design

*Why it unblocks this paper:* This beginner-friendly Unreal Engine UI design series quickly introduces practical UI construction techniques, including button creation and modular UI, which are directly relevant to implementing hybrid interfaces like HyFinBall in VR environments.

*If you want all of it:* 0.9 hours across 4 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HyFinBall paper, start with foundational knowledge on 6DOF input devices and fish-tank VR setups, which underpin the hardware and environment used. Then explore multi-touch and finger tracking in VR to grasp the integrated input modalities. Finally, focus on the core concept of the hybrid 2D/3D interaction techniques and the authors' own detailed presentation of HyFinBall, which directly explains their novel hybrid interface and experimental results.

### 6DOF input devices in VR *(prerequisite)*
Understanding 6-degree-of-freedom input devices is essential as HyFinBall leverages dual 6DOF handheld devices for 3D interaction. This foundational knowledge clarifies the capabilities and challenges of 3D input hardware in VR contexts.

*How the paper uses it:* HyFinBall uses dual 6DOF input devices as part of its hybrid interface for seamless 3D interaction.

▶ [Controlling the Future: The Power of Input Devices in the VR/AR Generation](https://www.youtube.com/watch?v=rTuWF8v44WE) — FinchXR · 7 years ago

### Fish-tank VR setups *(prerequisite)*
Fish-tank VR is the specific semi-immersive display environment used by HyFinBall. Understanding this setup helps contextualize how the hybrid interface operates within a dual-screen fish-tank VR system.

*How the paper uses it:* HyFinBall is implemented in a dual-screen fish-tank VR setup, which influences interaction design and user experience.

▶ [Automatic Calibration of a Multiple-Projector Spherical Fish Tank VR Display](https://www.youtube.com/watch?v=BJjsPHPpaK4) — HCT UBC · 9 years ago

### Multi-touch and finger tracking in VR *(prerequisite)*
Multi-touch and finger tracking are key input modalities integrated into HyFinBall to enable simultaneous 2D and 3D interactions. Understanding these technologies provides insight into the system's novel input capabilities.

*How the paper uses it:* HyFinBall integrates multi-touch and 3D finger tracking with handheld devices for hybrid interaction.

▶ [VR Hand Interactions with Ultraleap's CTO Tom Carter - XR Bootcamp Open Lecture](https://www.youtube.com/watch?v=j4_-mizKKPI) — XR Bootcamp · 5 years ago

### HyFinBall hybrid interface talk *(the paper's own talk)*
The authors' own presentation of HyFinBall offers the most direct and detailed explanation of their hybrid 2D/3D VR interface, including design rationale, implementation details, and experimental results. This talk is crucial for an advanced understanding of the paper.

*How the paper uses it:* This video is the authors' own talk presenting the HyFinBall system and its evaluation.

▶ [HyFinBall: A Two-Handed, Hybrid 2D/3D Desktop VR Interface for Multi-Dimensional Visualization](https://www.youtube.com/watch?v=olMISXCnlKc) — VisCenterUNCC · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HyFinBall paper, start by learning about 6-degree-of-freedom (6DOF) input devices, which are foundational for 3D interaction in VR. Next, explore multi-touch and finger tracking techniques that enable intuitive 2D and 3D input modalities. Then, grasp the fish-tank VR setup that provides the immersive display environment used in the study. Finally, dive into the core concept of hybrid 2D/3D interaction techniques, culminating with the specific HyFinBall hybrid interface that integrates these elements seamlessly.

### 6DOF input devices in VR *(prerequisite)*
6DOF input devices track position and orientation in 3D space, allowing users to interact naturally with virtual environments. Understanding these devices helps grasp how users manipulate objects in VR with full freedom of movement.

*How the paper uses it:* HyFinBall uses dual 6DOF handheld devices as part of its hybrid input system for 3D interaction.

▶ [3 DoF and 6 DoF VR Basics. What's the difference?](https://www.youtube.com/watch?v=19v4eTy4Hj0) — Sensible-VR · 2 years ago

### Multi-touch and finger tracking in VR *(prerequisite)*
Multi-touch and finger tracking enable precise 2D input and gesture recognition, allowing users to interact with virtual interfaces using fingers on touch surfaces. This modality complements 3D input by supporting planar and gesture-based controls.

*How the paper uses it:* HyFinBall integrates multi-touch and finger tracking with handheld devices to support simultaneous 2D and 3D interactions.

▶ [VR Hand Interactions with Ultraleap's CTO Tom Carter - XR Bootcamp Open Lecture](https://www.youtube.com/watch?v=j4_-mizKKPI) — XR Bootcamp · 5 years ago

### Fish-tank VR setups *(prerequisite)*
Fish-tank VR setups use stereoscopic displays and tracking to create a window into a virtual 3D scene, allowing users to perceive depth without full immersion. This setup supports hybrid 2D/3D visualization by combining physical screens and VR perspectives.

*How the paper uses it:* The HyFinBall system operates within a dual-screen fish-tank VR environment to enable coordinated 2D and 3D visualization.

▶ [FTVR in VR: Evaluation of 3D Perception With a Simulated Volumetric Fish-Tank Virtual Reality ...](https://www.youtube.com/watch?v=071I_uohryQ) — ACM SIGCHI · 17:08 · 7 years ago

### HyFinBall hybrid interface talk *(the paper's own talk)*
This talk presents the HyFinBall system itself, explaining how it integrates dual handheld devices with multi-touch and finger tracking to support hybrid 2D/3D VR visualization. It provides direct insight into the design, implementation, and evaluation of the interface.

*How the paper uses it:* This video is a direct presentation of the HyFinBall system described in the paper.

▶ [HyFinBall: A Two-Handed, Hybrid 2D/3D Desktop VR Interface for Multi-Dimensional Visualization](https://www.youtube.com/watch?v=olMISXCnlKc) — VisCenterUNCC · 11 years ago

## Already in your library

- [Examples of input devices in VR - Introduction to Virtual ...](https://www.youtube.com/watch?v=VknCD3jGXoQ) — also for: The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing (Scott A. Kuhl)
- [Introduction to Virtual Reality, OpenXR Hand-Tracking, and ...](https://www.youtube.com/watch?v=67v-sEhidvM) — also for: The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing (Scott A. Kuhl)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the HyFinBall hybrid 2D+3D VR input interface. The beginner project recreates the core auto-switching input mode mechanism in a simplified desktop simulation. The intermediate project implements and evaluates the auto-switching between 6DOF and planar-3DOF input modes on a smaller scale, comparing task completion times against a baseline. The advanced project extends the system by integrating a robust 3D finger tracking component combined with palming techniques, addressing a key limitation and future direction from the paper.

### Beginner — Simulate HyFinBall Auto-Switching Input Modes
*Effort: a weekend, ~8 hours*

You build a desktop simulation that models the HyFinBall device's automatic switching between 6DOF (3D) and planar-3DOF (2D) input modes based on device position. The simulation uses mouse and keyboard input to emulate device position and mode switching, visualizing cursor behavior in 2D and 3D coordinate spaces.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core mechanism of HyFinBall's seamless mode switching without physical device changes, a key contribution of the paper.

**Grounded in:** Introduction of an auto-switching mechanism between 6DOF and planar-3DOF input modes based on device position.

**Tech stack:** JavaScript, React, CSS

**Data:** No external data required; simulation uses synthetic input events.

**Build it:**

1. Create a React app with two visual areas representing 2D and 3D interaction spaces.
2. Implement a virtual device state that switches between 6DOF and planar-3DOF modes based on simulated device position (e.g., mouse Y coordinate).
3. Map input events to either 3D cursor movement or planar 2D cursor movement depending on the mode.
4. Visualize cursor positions and mode status in real time.
5. Add UI controls to manually toggle or simulate device position changes to test auto-switching.

**Ships as:** A GitHub repo with a React app demonstrating seamless switching between 2D and 3D input modes with interactive visualization and code comments explaining the mechanism.

**Stretch goal:** Add multi-touch gesture simulation to emulate the multi-touch input mode while palming the device.

### Intermediate — Reimplement and Evaluate HyFinBall Auto-Switching on Desktop
*Effort: 1-3 weekends*

You reimplement the HyFinBall auto-switching mechanism in a desktop environment using mouse and keyboard to simulate 6DOF and planar-3DOF inputs. You design a small user study or automated task benchmark that measures task completion times for combined 2D and 3D tasks under your hybrid interface versus a baseline using only 6DOF input (e.g., mouse + keyboard).

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the core method and quantitative evaluation of HyFinBall’s auto-switching input mode, demonstrating comprehension of the paper’s experimental approach and results.

**Grounded in:** Experiment 1 results show HyFinBall had faster overall completion times than 6DOF+mouse and 6DOF-only, especially for cross-dimensional tasks.

**Tech stack:** JavaScript, React, Node.js, Jest or Cypress for testing

**Data:** Synthetic task data generated by scripted 2D and 3D target acquisition tasks simulating the paper's controlled experiments.

**Build it:**

1. Implement a desktop hybrid input interface that switches between 3D and planar 2D cursor control based on simulated device position.
2. Design a set of combined 2D and 3D target acquisition tasks with measurable completion times.
3. Implement a baseline interface using only 6DOF input simulation (e.g., mouse + keyboard).
4. Conduct a small user study or automated trials to collect task completion times for both interfaces.
5. Analyze and report task completion time differences, focusing on cross-dimensional tasks.

**Ships as:** A GitHub repo with the hybrid input interface code, task scripts, and a report comparing task completion times between hybrid and baseline interfaces.

**Stretch goal:** Incorporate multi-touch input simulation and compare performance with and without palming techniques.

### Advanced — Integrate Robust 3D Finger Tracking with Palming for Hybrid VR Input
*Effort: few weeks*

You develop an extension of HyFinBall by integrating a robust 3D finger tracking system combined with buttonball palming techniques to enable simultaneous multi-touch and 3D input. You implement a prototype VR or desktop simulation that supports this hybrid input and evaluate its effect on task performance and user fatigue, addressing the paper’s limitation of unrobust 3D finger tracking and future direction of palming combined with finger tracking.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding and ability to extend HyFinBall’s hybrid input concept with new interaction modalities and evaluation.

**Grounded in:** Develop and evaluate buttonball palming techniques combined with robust 3D finger tracking.

**Tech stack:** JavaScript, React, WebXR or Three.js, TensorFlow.js or MediaPipe for finger tracking, Node.js

**Data:** Synthetic interaction tasks designed to measure 2D/3D task performance and fatigue; finger tracking data captured from webcam or VR device sensors.

**Build it:**

1. Research and select a robust 3D finger tracking library compatible with your tech stack (e.g., MediaPipe Hands or TensorFlow.js).
2. Implement a hybrid input prototype that combines finger tracking with a virtual buttonball device supporting palming gestures.
3. Design interaction tasks that require simultaneous 2D multi-touch and 3D manipulation.
4. Conduct user trials or automated tests to measure task completion times and subjective fatigue ratings.
5. Analyze results to assess improvements over baseline without finger tracking or palming.

**Ships as:** A GitHub repo with the hybrid finger tracking + palming prototype, task scripts, and an evaluation report discussing performance and fatigue metrics.

**Stretch goal:** Explore alternative device form factors or untethered VR setups to generalize the hybrid input approach.
