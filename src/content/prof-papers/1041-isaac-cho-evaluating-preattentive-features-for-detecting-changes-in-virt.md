---
title: "1041 · Evaluating Preattentive Features for Detecting Changes in Virtual Environments — Isaac Cho"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-isaac-cho"
source_hash: "ef3d5284736c29983cd3b46c754c8bb8d4859f19fa65d9f83583865469052aa9"
sequence: 1041
generator: "outreach-garden: managed"
---

# 1041 · Evaluating Preattentive Features for Detecting Changes in Virtual Environments

## At a glance

- **Professor:** Isaac Cho
- **Institution:** Utah State University
- **Paper:** [Evaluating Preattentive Features for Detecting Changes in Virtual Environments](https://arxiv.org/pdf/2601.14561)
- **Authors:** DongHoon Kim, Isaac Cho
- **Year:** 2026

## Paper overview

This study investigates how certain visual features that the human brain processes quickly and automatically (called preattentive features) affect the ability to detect changes in objects within immersive virtual reality (VR) environments. It finds that changes in depth are detected faster and more accurately than changes in size or angle, especially when the changed object is spatially isolated from similar objects. Increasing the number of visual features makes change detection harder and more mentally demanding. These findings help guide the design of VR systems to improve user experience by emphasizing depth cues, reducing visual clutter, and spatially isolating important objects.

### Why it matters

**Research problem:** How do preattentive visual features, visual complexity, and spatial arrangement affect change detection performance in immersive 3D virtual reality environments?

**Why it matters:** Visual perception is critical for effective interaction and spatial awareness in VR, but as visual complexity increases, users struggle to detect changes quickly and accurately. Understanding how preattentive features operate in immersive VR can inform better design of VR applications and immersive analytics systems to reduce cognitive load and improve user experience.

**Key contributions:**

- Systematic evaluation of preattentive features (depth, size, angle) on change detection in immersive VR.
- Demonstration that depth changes are detected faster and more accurately than size or angle changes in VR.
- Evidence that increasing visual complexity by adding more features impairs change detection and increases cognitive workload.
- Showing that spatial isolation of changed objects improves detection performance and reduces errors.
- Providing design guidelines for VR and immersive analytics systems emphasizing depth cues, minimizing clutter, and leveraging spatial separation.

## About the professor

**Isaac Cho** — Assistant Professor, Computer Science, Utah State University.

Research interests: Interactive Visual Analytics, Human-Computer Interactions, 3D User Interfaces, and Virtual Environments

### Research links

- [Faculty/profile page](https://cesar.charlotte.edu/people/dr-isaac-cho)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Visual Perception and Attention
**The paper assumes:** human visual perception, visual attention mechanisms, preattentive processing
**Already in this field?** Skip this entirely if you already understand the basics of how human visual attention and preattentive features operate in cognitive psychology and vision science.

This background focuses on visual perception and attention, essential for understanding how preattentive features like depth, size, and angle influence change detection in immersive VR environments. The rigorous course offers a deep dive into visual perception mechanisms within a computer vision and attention framework, while the fast track provides concise, accessible explanations of visual perception principles for quicker comprehension. Choose the rigorous course for a thorough academic foundation or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [IAT 814: Chris Shaw](https://www.youtube.com/playlist?list=PL8mxCq3WZSlS5v4pXWZVByRsK2LGFtr_2) — Chris Shaw · 32 videos · 7.5h across 32 episodes

**Watch only this:** Lectures 5.1 Visual Perception: Preattentive Processing (14 min) and 5.2 Visual Perception: Color (14 min) — about 28 minutes total, covering core concepts of preattentive features and visual processing relevant to the paper.

*Why it unblocks this paper:* Chris Shaw's IAT 814 course includes dedicated lectures on visual perception and preattentive processing, directly relevant to understanding the cognitive mechanisms underlying the paper's experimental design and findings.

*If you want all of it:* 7.5 hours across 32 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Human visual perception photography](https://www.youtube.com/playlist?list=PL7a7GZF-yZZAsfGKEVCbgUWPLYCmef5A2) — doop · 17 videos · 3.5h across 17 episodes

**Watch only this:** Episodes 1 'Gestalt Principles of Visual Perception related to Photography' and 4 'Visual Processing and the Visual Cortex' — about 24 minutes total, providing foundational insights into visual perception relevant to the paper.

*Why it unblocks this paper:* The 'Human visual perception photography' series offers clear, visually intuitive explanations of visual perception principles, including Gestalt principles and how the eye and brain process visual information, which supports quick understanding of preattentive features and attention.

*If you want all of it:* 3.5 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on evaluating preattentive features for change detection in virtual environments, start with foundational concepts of visual attention mechanisms and preattentive visual features to grasp how the brain processes visual stimuli rapidly and selectively. Then, explore change detection in vision to understand the experimental task's basis. Next, study immersive virtual reality perception to contextualize visual perception in 3D VR settings. Finally, focus on the paper's core concept and the authors' own talk to gain direct insights into their methodology and findings.

### Visual attention mechanisms *(prerequisite)*
This section covers the cognitive and neural basis of attention and awareness, distinguishing between preattentive and attentive processing stages. Understanding these mechanisms is crucial to interpret how visual features are processed differently depending on attentional focus.

*How the paper uses it:* The paper discusses the interplay of preattentive and attentive processing in change detection tasks involving head-turning and active search.

▶ [24. Attention and Awareness](https://www.youtube.com/watch?v=B4a0WdGp52g) — MIT OpenCourseWare · 56:43 · 5y ago

### Preattentive visual features *(prerequisite)*
This lecture introduces the rapid, parallel processing of visual features before conscious attention, explaining key preattentive cues relevant to visual analytics. It provides the theoretical foundation for understanding why certain features like depth might be detected faster.

*How the paper uses it:* The study systematically evaluates preattentive features such as depth, size, and angle in immersive VR change detection.

▶ [IAT355 Lecture 5.1 Visual Perception: Preattentive Processing](https://www.youtube.com/watch?v=QuPxl2fU2bo) — Chris Shaw · 26:52 · 6y ago

### Change detection in vision *(prerequisite)*
This talk provides an academic overview of change detection principles in vision, including mechanisms and challenges in detecting visual changes. It helps frame the experimental task used in the paper where participants detect changes among multiple objects.

*How the paper uses it:* The paper's core experimental task is based on detecting changes in visual features within a complex VR scene.

▶ [Change Detection | Object Tracking](https://www.youtube.com/watch?v=0ANl4bZAxjI) — First Principles of Computer Vision · 10:16 · 5y ago

### Immersive virtual reality perception *(prerequisite)*
This session presents research on perception within immersive VR environments, discussing how visual variables and spatial factors affect user experience and perception. It contextualizes the paper’s focus on 3D VR and spatial arrangement effects.

*How the paper uses it:* The paper investigates change detection performance specifically in immersive 3D VR environments.

▶ [Papers: Perception | IEEE VR 2022](https://www.youtube.com/watch?v=nh2RvW6cEjU) — IEEE Virtual Reality Conference · 54:19 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand how preattentive visual features affect change detection in immersive virtual reality environments. Starting with the basics of visual attention and perception, it then covers how change detection works in vision, followed by the specifics of preattentive features and their role in VR perception. Finally, it introduces the core experimental approach of evaluating these features in VR, enabling a clear grasp of the paper's methods and findings.

### Visual attention mechanisms *(prerequisite)*
Visual attention mechanisms explain how our brain selects certain information from the environment for deeper processing while ignoring others. Understanding the difference between preattentive (automatic, parallel) and attentive (focused, serial) processing is key to grasping how visual features guide perception.

*How the paper uses it:* The paper distinguishes preattentive from attentive processing to interpret change detection results in VR involving head-turning and active search.

▶ [24. Attention and Awareness](https://www.youtube.com/watch?v=B4a0WdGp52g) — MIT OpenCourseWare · 56:43 · 5y ago

### Change detection in vision *(prerequisite)*
Change detection is the ability to notice differences or changes in the visual scene, a fundamental process in vision and attention. Learning how the brain detects changes helps understand the experimental task where participants identify changes in VR objects.

*How the paper uses it:* The study’s core task involves detecting changes in object features within a virtual environment, relying on visual change detection principles.

▶ [Change Detection | Object Tracking](https://www.youtube.com/watch?v=0ANl4bZAxjI) — First Principles of Computer Vision · 10:16 · 5y ago

### Preattentive visual features *(prerequisite)*
Preattentive features are visual properties processed rapidly and automatically by the brain before focused attention. These include attributes like color, size, depth, and orientation, which help quickly guide visual search and change detection.

*How the paper uses it:* The paper systematically evaluates how preattentive features such as depth, size, and angle affect change detection performance in VR.

▶ [IAT355 Lecture 5.1 Visual Perception: Preattentive Processing](https://www.youtube.com/watch?v=QuPxl2fU2bo) — Chris Shaw · 26:52 · 6y ago

### Immersive virtual reality perception *(prerequisite)*
Immersive VR perception studies how visual and spatial perception operate in 3D virtual environments, which differ from traditional 2D displays. Understanding VR perception is essential to appreciate how visual features and spatial arrangements influence user experience and cognition in VR.

*How the paper uses it:* The paper’s experiments and findings are situated within immersive VR, focusing on how perception works in such 3D environments.

▶ [Papers: Perception | IEEE VR 2022](https://www.youtube.com/watch?v=nh2RvW6cEjU) — IEEE Virtual Reality Conference · 54:19 · 4y ago

## Already in your library

- [Augmented Reality (AR) and Virtual Reality (VR) Explained |](https://www.youtube.com/watch?v=h3rKvsFTfPA) — also for: Driving Towards Inclusion: A Systematic Review of AI-powered Accessibility Enhancements for People with Disability in Autonomous Vehicles (Julian Brinkley)
- [Overview | Object Tracking](https://www.youtube.com/watch?v=BLRSIwal7Go) — also for: Tracking without Seeing: Geospatial Inference using Encrypted Traffic from Distributed Nodes (Tarek F. Abdelzaher)
- [Lecture 11: Visual Attention and Consciousness](https://www.youtube.com/watch?v=pnfudjQwjS8) — also for: Interpreting Radiologist’s Intention from Eye Movements in Chest X-ray Diagnosis (Zhigang Deng)
- [The Attention Mechanism 1 hour explanation](https://www.youtube.com/watch?v=K45ze9Yd5UE) — also for: Grounded Video Description (Jason J. Corso)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Visualizing transformers and attention | Talk for TNG Big Tech Day '24](https://www.youtube.com/watch?v=KJtZARuO3JY) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Attention Mechanism Explained](https://www.youtube.com/watch?v=gSwjW945Ivc) — also for: FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing (Sos S. Agaian)
- [What is Self Attention | Transformers Part 2 | CampusX](https://www.youtube.com/watch?v=XnGGmvpDLA0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Self-Attention Explained: How Transformers Actually Work (Full Visual Breakdown)](https://www.youtube.com/watch?v=vkhPtpUiLd8) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [Altering Human Perception and Behavior through Immersive Virtual Reality](https://www.youtube.com/watch?v=Y-0VHEtyIR4) — also for: Fidelity costs in look-alike avatars: hair, eye color, and familiarity in mixed reality (Oyewole Oyekoya)
- [Lecture 06: Fundamentals of AR/VR/XR Systems: Tracking, Sensing, Interaction and System Integration](https://www.youtube.com/watch?v=TyJz42dGtXY) — also for: Toward In-Context Environment Sensing for Mobile Augmented Reality (Yiqin Zhao)
- [Examples of input devices in VR - Introduction to Virtual ...](https://www.youtube.com/watch?v=VknCD3jGXoQ) — also for: The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing (Scott A. Kuhl)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression that lets you demonstrate understanding of how preattentive features affect change detection in immersive VR environments. The beginner project reproduces a core experimental condition from the paper using simple 3D visualization and timing. The intermediate project reimplements the paper's main experimental paradigm in a simplified VR-like 3D scene, measuring detection time and accuracy for different preattentive features and spatial arrangements. The advanced project extends the paper by isolating preattentive from attentive processing using finer-grained motion tracking and head movement separation, addressing a key limitation noted by the authors.

### Beginner — 3D Change Detection Timer for Depth vs. Size
*Effort: a weekend, ~8 hours*

You build a simple interactive 3D web app that displays a grid of cubes where one cube changes either in depth or size. The user clicks a button to start, searches visually for the changed cube, and clicks it to record detection time. The app reports average detection times for depth and size changes.

**Why it shows you understood the paper:** This project shows you understand the paper's key finding that depth changes are detected faster than size changes in VR-like 3D scenes, and you can implement a minimal experimental setup to measure detection time.

**Grounded in:** Depth changes led to significantly faster detection times compared to size changes (Sections 4.1, 4.2).

**Tech stack:** JavaScript, React, Three.js

**Data:** Synthetic 3D cube grid generated in the app, simulating the paper's 6x6 grid of uniform cubes with controlled changes.

**Build it:**

1. Set up a React app with Three.js to render a 6x6 grid of red cubes in 3D space.
2. Implement a function to randomly select one cube to change either its depth (z-position) or size.
3. Add a start button that begins a timer and prompts the user to find the changed cube.
4. Allow the user to click a cube to indicate detection; stop the timer and record detection time.
5. Display average detection times separately for depth and size change trials.
6. Add basic instructions and UI to guide the user.

**Ships as:** A GitHub repo with a React+Three.js app that runs in the browser, allowing users to perform multiple trials and see detection time statistics for depth vs. size changes.

**Stretch goal:** Add angle change trials and compare detection times for depth, size, and angle changes.

### Intermediate — Reimplementation of VR Change Detection Experiment
*Effort: 2-3 weekends, ~20 hours*

You build a simplified VR-like 3D environment (desktop or WebXR) that replicates the paper's core experiment: participants detect changes in one cube among a 6x6 grid, manipulating preattentive feature type (depth, size, angle), number of visual features (single, double), and spatial arrangement (isolated vs grouped). You measure detection time, accuracy, and timeout rates.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main experimental paradigm faithfully, capturing the interaction effects of preattentive features, visual complexity, and spatial isolation on change detection performance.

**Grounded in:** Systematic evaluation of preattentive features (depth, size, angle), visual complexity, and spatial arrangement on change detection in immersive VR (Sections 3 and 4).

**Tech stack:** TypeScript, React, Three.js, WebXR or desktop 3D rendering

**Data:** Synthetic 3D scenes generated programmatically to simulate the paper's 6x6 grid of uniform cubes with controlled feature changes and spatial arrangements.

**Build it:**

1. Set up a React+Three.js project with optional WebXR support for immersive viewing.
2. Create a 6x6 grid of cubes with parameters to control depth, size, and angle features.
3. Implement experimental conditions: single-feature (depth or size or angle), double-feature combinations, and spatial isolation vs grouping of the changed cube.
4. Add user interaction to search for and select the changed cube, recording detection time and accuracy.
5. Implement trial management with randomized conditions and timeout handling.
6. Collect and display summary statistics: detection time, accuracy, timeout rate, and subjective workload survey (NASA-TLX or simplified).

**Ships as:** A GitHub repo with a runnable VR-like experiment app that logs participant performance metrics across conditions and visualizes results in a report page.

**Stretch goal:** Add a simple workload questionnaire and analyze workload scores across feature complexity conditions.

### Advanced — Isolating Preattentive Processing in VR Change Detection
*Effort: 3-4 weeks*

You extend the intermediate VR experiment by integrating fine-grained head and eye tracking (using WebXR or VR headset APIs) to separate head-turning time from actual visual change detection time. You design trials to isolate purely preattentive detection by minimizing active search and head movement. You analyze how detection times differ when controlling for attentive processing.

**Why it shows you understood the paper:** This project tackles a key limitation of the paper — the confound of head-turning and attentive search in detection time — by implementing motion tracking and experimental controls to disentangle preattentive from attentive mechanisms in VR change detection.

**Grounded in:** The task context required active head-turning and search, so results reflect a mix of preattentive and attentive processing rather than purely preattentive effects (Section 5.5). Future direction: incorporate finer-grained motion tracking to separate head movement from visual detection time.

**Tech stack:** TypeScript, React, Three.js, WebXR API, WebGazer.js or similar eye-tracking library

**Data:** Synthetic VR scenes as in the intermediate project, augmented with real-time head and eye tracking data collected during trials.

**Build it:**

1. Extend the intermediate VR experiment to run on a VR headset or WebXR-compatible browser with head tracking enabled.
2. Integrate an eye-tracking library (e.g., WebGazer.js) to record gaze data during trials.
3. Implement logging of head orientation and gaze timestamps to separate head-turning time from detection time.
4. Design experimental conditions that minimize head movement (e.g., smaller grids, fixed gaze cues) to isolate preattentive detection.
5. Analyze collected data to compare detection times with and without head-turning time included.
6. Document findings and discuss implications for VR interface design.

**Ships as:** A GitHub repo with an advanced VR experiment app that logs head and eye tracking data, provides analysis scripts, and a detailed README discussing how preattentive and attentive processes can be separated.

**Stretch goal:** Add adaptive interface features that dynamically adjust visual feature complexity based on real-time workload inferred from tracking data.
