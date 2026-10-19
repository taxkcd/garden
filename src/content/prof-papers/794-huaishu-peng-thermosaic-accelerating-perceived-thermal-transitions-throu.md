---
title: "794 · TherMosaic: Accelerating Perceived Thermal Transitions Through Spatiotemporal Thermal Feedback — Huaishu Peng"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-huaishu-peng"
source_hash: "715e6ebf603bada539530ec7718821d9aa5d10eaed6c58c0ea77a00232c47999"
sequence: 794
generator: "outreach-garden: managed"
---

# 794 · TherMosaic: Accelerating Perceived Thermal Transitions Through Spatiotemporal Thermal Feedback

## At a glance

- **Professor:** Huaishu Peng
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [TherMosaic: Accelerating Perceived Thermal Transitions Through Spatiotemporal Thermal Feedback](https://arxiv.org/pdf/2609.05347)
- **Authors:** Zining Zhang, Jiasheng Li, Myungin Lee, Zeyu Yan, Jin Ryong Kim, Huaishu Peng
- **Year:** 2026

## Paper overview

This paper presents TherMosaic, a novel approach to make thermal feedback on the fingertip feel faster by using multiple small thermal elements that change temperature in a coordinated way. Instead of speeding up the physical heating or cooling, TherMosaic leverages how humans perceive temperature spatially and adapt over time to accelerate the sensation of temperature changes. The authors validate this approach through controlled perceptual studies and implement it as a wearable device, demonstrating improved synchronization of thermal feedback with visual events in virtual reality.

### Why it matters

**Research problem:** Thermal feedback devices, especially those using Peltier modules, have slow temperature transition times that cause delays and reduce realism in interactive systems and virtual reality. The problem is how to accelerate perceived thermal transitions without relying solely on hardware improvements that increase complexity and size.

**Why it matters:** Thermal feedback enhances immersion, realism, and emotional expression in interactive and VR systems by conveying material qualities and affective cues. However, slow thermal transitions cause temporal misalignment with user actions and visuals, weakening the user experience and limiting practical deployment, especially in compact fingertip devices.

**Key contributions:**

- Introduction of TherMosaic, a spatiotemporal thermal feedback method that accelerates perceived temperature transitions on the fingertip.
- Empirical demonstration through three perceptual studies of how spatial summation and thermal adaptation can be combined to reduce perceived transition time.
- Development of a standalone wearable fingertip device implementing TherMosaic with the same 2×2 Peltier module architecture.
- Demonstration in a VR study that TherMosaic improves temporal alignment between thermal and visual events compared to a uniform baseline.

## About the professor

**Huaishu Peng** — Associate Professor, Computer Science, Univ. of Maryland - College Park.

Research interests: technical aspects of human-computer interaction, personal fabrication

### Research links

- [Faculty/profile page](https://www.umiacs.umd.edu/our-experts/faculty/huaishu-peng)
- [Professor website](https://smartlab.cs.umd.edu/)
- [Lab website](https://hcil.umd.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=nimapDwAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Human Thermal Perception
**The paper assumes:** psychophysics of thermal sensation, spatial summation in somatosensation, thermal adaptation mechanisms
**Already in this field?** Skip this entirely if you already understand the sensory physiology and psychophysics of human thermal perception and how spatial and temporal factors influence thermal sensation.

Understanding human thermal perception is crucial for grasping how TherMosaic accelerates perceived thermal transitions by leveraging spatial summation and thermal adaptation on the fingertip. The rigorous course option offers a deep dive into the neurophysiology and sensory pathways underlying thermal sensation, while the fast track provides a more focused, practical overview of human thermal comfort modeling relevant to perceptual mechanisms. Choose the course for foundational depth or the fast track for a concise applied perspective.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CNS Physiology 🧠⚡ | Complete Conceptual Playlist](https://www.youtube.com/playlist?list=PL0o42GecDaMd9kB6qRA-E2xtzNXoJqpnL) — Dr.G Bhanu Prakash Animated Medical Videos · 18 videos · 4.4h across 18 episodes

**Watch only this:** Episodes 15 (Touch Receptors), 5 (Somatosensory Pathway Part 2), and 4 (Somatosensory Pathway Part 1), about 42 minutes total — these cover the types, mechanisms, and pathways of sensory input including thermal sensation relevant to the paper.

*Why it unblocks this paper:* This CNS Physiology playlist systematically covers sensory physiology including touch receptors and somatosensory pathways, providing the neurophysiological foundation necessary to understand thermal sensation and perceptual integration on the skin, which is central to TherMosaic's approach.

*If you want all of it:* All 18 episodes, about 4.4 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Human Thermal Comfort Modeling and Simulation](https://www.youtube.com/playlist?list=PLs9RlVtstFtv7HU5AAPlCXUE8pUQP1eJK) — ThermoAnalytics · 14 videos · 8.4h across 14 episodes

**Watch only this:** Episodes 1 (Human Thermal Comfort in Heavy Vehicles), 2 (Human Thermal Model Workflow in TAITherm), and 10 (Thermal Comfort Sensitivity of Human Position for Cabin HVAC Design), about 1.75 hours total — these provide a practical overview of thermal sensation and modeling relevant to perceptual acceleration.

*Why it unblocks this paper:* ThermoAnalytics' Human Thermal Comfort Modeling playlist offers applied insights into human thermal sensation and thermoregulation, focusing on physiological responses and modeling of thermal perception, which complements the paper's focus on perceived thermal transitions.

*If you want all of it:* All 14 episodes, about 8.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TherMosaic paper, start with foundational knowledge on the physiological basis of thermal adaptation in human skin and the hardware technology of Peltier modules, which are crucial for generating controlled thermal stimuli. Then, explore the concept of thermal perception spatial summation, a key perceptual mechanism leveraged by TherMosaic. Finally, focus on the paper's core contribution by watching the authors' own seminar talk presenting TherMosaic's approach, studies, and VR application.

### Thermal adaptation human skin *(prerequisite)*
Understanding thermal adaptation in human skin provides the physiological basis for how humans perceive temperature changes over time, which is central to TherMosaic's approach to accelerating perceived thermal transitions. The selected lecture from University of California Television (UCTV) offers an academic-level exploration of human skin features and thermoregulation.

*How the paper uses it:* TherMosaic leverages thermal adaptation on the fingertip to reduce perceived transition times in thermal feedback.

▶ [CARTA: Unique Features of Human Skin: Gallo Sawka Millar](https://www.youtube.com/watch?v=MRNeqBQAwx0) — University of California Television (UCTV) · 59:32 · 10y ago

### Peltier module thermal actuators *(prerequisite)*
Peltier modules are the fundamental hardware actuators used in TherMosaic to generate precise thermal stimuli. A detailed explanation of their working principles and characteristics is essential to appreciate the hardware constraints and design choices in the paper. The selected video from Electronoobs provides a rigorous and technical overview of the thermoelectric effect and Peltier cells.

*How the paper uses it:* TherMosaic uses a 2×2 array of miniaturized Peltier modules to deliver spatially heterogeneous thermal stimuli on the fingertip.

▶ [Seebeck & Peltier Effect - How Thermocouples & Peltier Cells work?](https://www.youtube.com/watch?v=PccE4WcfnAw) — Electronoobs · 14:22 · 6y ago

### Thermal perception spatial summation
Spatial summation in thermal perception explains how the human sensory system integrates heterogeneous thermal inputs into a unified percept, a key mechanism exploited by TherMosaic to accelerate perceived temperature changes. The selected lecture from Shripad Deshpande offers an in-depth academic treatment of thermal sensation physiology.

*How the paper uses it:* TherMosaic relies on spatial summation to combine multiple small thermal inputs into a dominant thermal percept on the fingertip.

▶ [6-Physiology of Thermal Sensations by SB Deshpande](https://www.youtube.com/watch?v=pm6PDhPjPy8) — Shripad Deshpande · 44:59 · 6y ago

### TherMosaic paper talk *(paper-talk search result; attribution unverified)*
The authors' own seminar talk provides the most direct and comprehensive presentation of the TherMosaic system, including its design rationale, perceptual studies, hardware implementation, and VR application. This talk is essential for understanding the paper's contributions and empirical results from the researchers themselves.

*How the paper uses it:* This seminar by Zining Zhang presents the TherMosaic approach and its validation in detail.

▶ [IQUIST Seminar Series: Zheshen Zhang, University of Michigan](https://www.youtube.com/watch?v=mFij_kO2DNo) — Illinois Quantum · 1:00:19 · Streamed 6mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand TherMosaic, start by learning about the physiological basis of thermal adaptation in human skin, which explains how our skin responds to temperature changes over time. Next, grasp the fundamentals of Peltier modules, the hardware that generates controlled thermal stimuli used in the device. Then, explore thermal haptics in virtual reality to see the application context and challenges TherMosaic addresses. Finally, dive into the core concept of thermal perception spatial summation, which underlies how multiple thermal inputs combine into a single percept, enabling TherMosaic's acceleration of perceived thermal transitions.

### Thermal adaptation human skin *(prerequisite)*
Thermal adaptation is how human skin adjusts its sensitivity to temperature changes over time, reducing the perception of gradual or sustained thermal stimuli. Understanding this helps explain why simply heating or cooling faster is not enough to speed up perceived temperature changes.

*How the paper uses it:* TherMosaic leverages thermal adaptation to accelerate the sensation of temperature transitions on the fingertip.

▶ [Introduction to Skin Anatomy and Physiology](https://www.youtube.com/watch?v=xUW3E6eDbzU) — Armando Hasudungan · 9:31 · 7y ago

### Peltier module thermal actuators *(prerequisite)*
Peltier modules are solid-state devices that can heat or cool surfaces by transferring heat when electric current passes through them. They are compact and controllable, making them suitable for wearable thermal feedback devices.

*How the paper uses it:* TherMosaic uses a 2×2 array of miniaturized Peltier modules to deliver spatially heterogeneous thermal stimuli on the fingertip.

▶ [Seebeck & Peltier Effect - How Thermocouples & Peltier Cells work?](https://www.youtube.com/watch?v=PccE4WcfnAw) — Electronoobs · 14:22 · 6y ago

### Thermal haptics in virtual reality *(prerequisite)*
Thermal haptics in VR involves providing temperature-based feedback to enhance immersion and realism. However, slow thermal transitions pose challenges for synchronizing thermal sensations with visual events.

*How the paper uses it:* TherMosaic addresses the challenge of slow thermal feedback in VR by accelerating perceived thermal transitions to improve temporal alignment with visual cues.

▶ [ThermoVR: Exploring Integrated Thermal Haptic Feedback with Head Mounted Displays](https://www.youtube.com/watch?v=qLS2UT8ZM7k) — ACM SIGCHI · 10:34 · 9y ago

### Thermal perception spatial summation
Spatial summation is the process by which the nervous system integrates multiple localized thermal inputs into a single unified temperature percept. This mechanism allows heterogeneous thermal stimuli to be perceived as one overall sensation.

*How the paper uses it:* TherMosaic exploits spatial summation to combine multiple small thermal elements' inputs into a stable dominant percept, accelerating perceived temperature changes.

▶ [Mod 02 lec 10 Spatial and Temporal Summation of neuronal electrical activities](https://www.youtube.com/watch?v=rOEO_mRhgCE) — NPTEL - Indian Institute of Science, Bengaluru · 9:50 · 4y ago

### TherMosaic paper talk *(paper-talk search result; attribution unverified)*
A direct presentation by the authors explaining the TherMosaic method, experimental validation, and device implementation, providing detailed insights into the approach and results.

*How the paper uses it:* This talk covers the full TherMosaic system and its perceptual studies, complementing the foundational concepts with the paper's specific contributions.

▶ [IQUIST Seminar Series: Zheshen Zhang, University of Michigan](https://www.youtube.com/watch?v=mFij_kO2DNo) — Illinois Quantum · 1:00:19 · Streamed 6mo ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of TherMosaic's approach to accelerating perceived thermal transitions via spatiotemporal thermal feedback. The beginner project reproduces a core perceptual phenomenon from the paper using simulation and visualization. The intermediate project implements a simplified TherMosaic controller to validate spatial summation and adaptation effects on perceived temperature transitions. The advanced project extends the method to explore higher spatial resolution thermal arrays, addressing a key limitation and future direction from the paper.

### Beginner — Simulate Fingertip Thermal Perception with Spatial Summation
*Effort: a weekend, ~8 hours*

You build a Python simulation that models the fingertip as a 2×2 grid of thermal elements with independently varying temperatures. The simulation visualizes how spatially heterogeneous thermal inputs combine into a single categorical percept (cold, neutral, hot) over time, reproducing the perceptual stability shown in Study 1 of the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core perceptual principle that spatially distributed thermal stimuli integrate into a stable categorical percept on the fingertip, a foundational concept for TherMosaic's acceleration effect.

**Grounded in:** Study 1 showed that spatially heterogeneous thermal stimulation is integrated into a single stable categorical percept (cold, neutral, hot) on the fingertip.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** Synthetic data simulating temperature values for a 2×2 fingertip thermal grid over time, based on temperature ranges described in the paper.

**Build it:**

1. Implement a 2×2 grid model representing fingertip thermal elements with temperature values.
2. Define categorical temperature thresholds for cold, neutral, and hot states.
3. Simulate time-varying temperature patterns with spatial heterogeneity (e.g., diagonally split cold/hot).
4. Aggregate the grid temperatures using a weighted average or spatial summation model.
5. Visualize the aggregated percept over time and show categorical stability despite local variations.
6. Write a README explaining the perceptual integration concept and how the simulation relates to Study 1.

**Ships as:** A Jupyter Notebook with simulation code, visualizations of spatial thermal patterns and resulting percepts, and a README linking the results to the paper's Study 1 findings.

**Stretch goal:** Add a simple interactive UI with sliders to adjust individual element temperatures and observe percept changes in real time.

### Intermediate — Implement TherMosaic 2×2 Thermal Controller Simulation
*Effort: 1-2 weekends, ~15 hours*

You build a Python simulation of the TherMosaic 2×2 Peltier module array controlling fingertip thermal feedback. The simulation implements the spatiotemporal preconditioning strategy to accelerate perceived temperature transitions by coordinating subregion temperatures. You compare the perceived transition times against a uniform baseline and report reductions similar to those in Study 3.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of spatial summation combined with thermal adaptation to accelerate perceived thermal transitions, validating the key quantitative result of reduced detection times.

**Grounded in:** Study 3 demonstrated that TherMosaic reduces perceived transition time by approximately 28%–41% (1.29 to 2.09 seconds faster) for transitions originating from cold or hot states.

**Tech stack:** Python 3.11, numpy, matplotlib, Jupyter Notebook

**Data:** Synthetic temperature transition profiles for cold-to-hot and hot-to-cold fingertip states, modeled after the paper's reported timings and temperature ranges.

**Build it:**

1. Model a 2×2 grid of thermal elements with independent temperature control.
2. Implement a baseline uniform temperature transition function simulating slow physical heating/cooling.
3. Implement TherMosaic's spatiotemporal preconditioning strategy: precondition some subregions toward target temperature while maintaining dominant percept.
4. Simulate perceived temperature transitions by aggregating subregion inputs and applying a thermal adaptation model.
5. Measure and compare perceived transition times between TherMosaic and uniform baseline conditions.
6. Plot and report transition time reductions, linking results to Study 3.
7. Document assumptions, methods, and results in a README.

**Ships as:** A Jupyter Notebook or Python script simulating TherMosaic control and baseline, with plots showing accelerated perceived transitions and a README explaining the implementation and comparison to Study 3.

**Stretch goal:** Add a simple GUI to allow users to input different transition scenarios and visualize predicted perceptual acceleration.

### Advanced — Explore Higher-Resolution Thermal Arrays for Perceptual Acceleration
*Effort: 3+ weeks*

You extend the TherMosaic concept by simulating a higher spatial resolution thermal array (e.g., 4×4 or 3×3 grid) to investigate whether increased spatial granularity can further accelerate perceived thermal transitions. You implement spatial summation and thermal adaptation models adapted for the larger array and compare acceleration effects against the original 2×2 configuration. This addresses a key limitation and future direction from the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to critically engage with the paper's limitations and future work by extending the method to a more complex thermal interface, exploring scalability and perceptual effects beyond the original fingertip 2×2 array.

**Grounded in:** The current implementation uses a 2×2 array of Peltier modules, which limits spatial resolution and may not generalize to larger or more complex thermal interfaces. Future directions include exploring higher spatial resolution thermal arrays or alternative actuator configurations to further enhance perceptual acceleration.

**Tech stack:** Python 3.11, numpy, matplotlib, Jupyter Notebook, optional: React/TypeScript for visualization

**Data:** Synthetic temperature transition data for a higher-resolution thermal grid, designed to simulate spatially heterogeneous thermal patterns and transitions.

**Build it:**

1. Design a higher-resolution thermal grid model (e.g., 3×3 or 4×4) representing fingertip or larger contact area.
2. Adapt spatial summation and thermal adaptation models to handle increased spatial granularity.
3. Implement spatiotemporal preconditioning strategies for the larger array to accelerate perceived transitions.
4. Simulate temperature transitions from cold/hot states and measure perceived transition times.
5. Compare acceleration effects to the original 2×2 baseline simulation.
6. Visualize results and analyze whether higher spatial resolution improves acceleration.
7. Write a detailed README discussing methodology, results, limitations, and implications for wearable thermal device design.

**Ships as:** A comprehensive simulation and analysis repository with code, visualizations, and a report-style README exploring the impact of higher spatial resolution on perceived thermal transition acceleration.

**Stretch goal:** Prototype a simple web-based interactive visualization allowing users to experiment with different array sizes and preconditioning patterns.
