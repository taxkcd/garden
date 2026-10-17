---
title: "670 · Design-Agnostic Distributed Timing Fault Injection Monitor with End-to-End Design Automation — Kaiyuan Yang"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kaiyuan-yang"
source_hash: "3b597770f320701acd7f230cff8e1692fbc3ce43c3a03e4bc515260cb2103a88"
sequence: 670
generator: "outreach-garden: managed"
---

# 670 · Design-Agnostic Distributed Timing Fault Injection Monitor with End-to-End Design Automation

## At a glance

- **Professor:** Kaiyuan Yang
- **Institution:** Rice University
- **Paper:** [Design-Agnostic Distributed Timing Fault Injection Monitor with End-to-End Design Automation](https://arxiv.org/abs/2501.09665)
- **Authors:** Yan He, Yumin Su, Kaiyuan Yang
- **Year:** 2025

## Paper overview

This paper presents a fully synthesizable and distributable hardware monitor designed to detect timing fault injection attacks (FIAs) on integrated circuits. The monitor replicates the system clock pulse width using a delay-locked loop and detects anomalies caused by clock glitches or environmental manipulations such as voltage, electromagnetic interference, and temperature changes. An automated design framework generates optimized monitors for any technology node, enabling low-cost, widespread deployment across chips to protect against localized attacks.

### Why it matters

**Research problem:** Fault Injection Attacks (FIAs) exploit timing violations in integrated circuits by tampering with clock signals or operating conditions to induce hardware faults, compromising system security. Existing FIA detection methods are either design-specific, costly, or limited in coverage and scalability. There is a need for a design-agnostic, low-overhead, fully synthesizable FIA monitor that can be automatically generated and distributed across chips to detect a broad range of timing FIAs.

**Why it matters:** FIAs pose a severe threat to modern computing systems by enabling attackers to bypass security mechanisms and cause erroneous outputs, potentially leaking secret information. These attacks can be mounted with low cost and minimal effort, including remote electromagnetic interference and voltage glitching, making robust and scalable FIA detection critical for secure hardware design.

**Key contributions:**

- A fully synthesizable, design-agnostic timing FIA monitor based on clock pulse width replication using configurable delay lines.
- Detection of all twelve types of clock glitches and timing faults induced by voltage, electromagnetic, and temperature manipulations.
- An automated design framework that generates optimized monitors for any process node with minimal manual effort.
- Demonstration of a 65nm CMOS prototype with wide frequency range (2MHz to 1.26GHz), low power (0.487mW), and small area (1500µm² footprint).
- Validation of monitor robustness across automotive temperature range (-40 to 125°C) and supply voltages (0.5V to 1.4V).

## About the professor

**Kaiyuan Yang** — Associate Professor of ECE, Electrical and Computer Engineering, Rice University.

Research interests: low-power integrated circuits and system design for bioelectronics, hardware security, and mixed-signal/in-memory computing

### Research links

- [Faculty/profile page](https://profiles.rice.edu/faculty/kaiyuan-yang)
- [Identity evidence](https://vlsi.rice.edu/authors/admin)
- [Resolved homepage](https://vlsi.rice.edu/authors/admin/)
- [ResearchGate](https://www.researchgate.net/profile/Kaiyuan-Yang-11)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Digital Integrated Circuit Design
**The paper assumes:** digital integrated circuit design, clocking and timing analysis, delay-locked loops, standard cell synthesis
**Already in this field?** Skip this entirely if you have completed an undergraduate course in digital integrated circuit design covering timing and clocking concepts.

To understand the design and operation of the timing fault injection monitor in this paper, a solid grasp of digital integrated circuit design principles is essential, especially concepts like clocking schemes, delay-locked loops, and synthesizable standard-cell implementations. The rigorous course option provides a deep, university-level treatment of digital IC design, while the fast track offers a concise, focused introduction to the same subject for quicker comprehension. Choose the fast track for a time-efficient overview or the course for a thorough foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Digital Integrated Circuits (IC) by UC Berkeley](https://www.youtube.com/playlist?list=PLOTpKcFOwiQSP6tqPjR7xXylPXTpiIOGD) — Harry May · 36 videos · 44.4h across the first 35 episodes

**Watch only this:** Lectures 1-6, about 7.6 hours — covering digital IC fundamentals, timing, and clocking essential for grasping the FIA monitor's operation.

*Why it unblocks this paper:* This UC Berkeley Digital Integrated Circuits course covers fundamental digital IC design concepts including timing, clocking, and circuit implementation, directly relevant to understanding the paper's hardware monitor design and automated framework.

*If you want all of it:* 44.4 hours across the first 35 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Integrated Circuits By Dr. Divya Sharma](https://www.youtube.com/playlist?list=PL7VfLVol-8kob52vb20RB343_GPAzTOnA) — AKGEC Digital School · 8 videos · 3.8h across 8 episodes

**Watch only this:** Episodes 4 and 5, about 56 minutes — 'Digital Integrated Circuit Design' and 'Integrated Circuit Timer' lectures focusing on timing and clocking fundamentals.

*Why it unblocks this paper:* This shorter playlist by Dr. Divya Sharma includes a dedicated lecture on Digital Integrated Circuit Design and related topics like timers and phase-locked loops, providing a concise yet clear introduction to the key concepts needed for this paper.

*If you want all of it:* 3.8 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on a design-agnostic distributed timing fault injection monitor, start with foundational knowledge on Delay Locked Loop (DLL) operation, which is central to the monitor's clock pulse width replication technique. Next, study the nature of clock glitch and timing fault attacks to grasp the types of faults the monitor detects. Then, explore digital delay line design as it underpins the hardware implementation of the monitor. Follow this with an understanding of hardware security fault injection detection methods to contextualize the paper's contributions within existing research. Finally, review the authors' own talk to gain direct insights into their approach and automated design framework.

### Delay Locked Loop operation *(prerequisite)*
This concept covers the fundamental circuit technique of delay-locked loops, including their structure, locking mechanisms, and nonidealities. Understanding DLLs is essential because the paper's monitor uses a DLL to replicate and track the system clock pulse width for fault detection.

*How the paper uses it:* The monitor relies on a digitally controlled delay line and DLL implemented with standard cells to replicate clock pulse widths and detect timing anomalies.

▶ [Lecture 3: Delay-locked loop, tunable delay line](https://www.youtube.com/watch?v=GZT11SQSxH8) — SSCD IIT Kanpur · 1:09:50 · 2y ago

### Clock glitch and timing fault attacks *(prerequisite)*
This topic explains the various types of timing faults and glitches that attackers induce to compromise hardware security. Understanding these attacks is crucial to appreciate the detection capabilities and coverage of the proposed monitor.

*How the paper uses it:* The monitor is designed to detect all twelve types of clock glitches and timing faults caused by voltage, electromagnetic, and temperature manipulations.

▶ [LayerOne 2025 -  Introduction to Fault Injection (Joe Rozner)](https://www.youtube.com/watch?v=0QpGPSgR7Ao) — LayerOne Information Security Conference · 39:48 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces key hardware security concepts and circuit techniques essential to understanding the paper's design-agnostic timing fault injection attack monitor. Starting with foundational knowledge of fault injection attacks and clock glitches, it then builds intuition on digital delay lines and delay-locked loops, which are core to the monitor's operation. Finally, it covers the automated hardware design framework enabling scalable deployment of the monitor.

### Clock glitch and timing fault attacks *(prerequisite)*
Learn what timing fault injection attacks are, how attackers manipulate clock signals or environmental conditions to induce faults, and why these attacks threaten hardware security. This foundational understanding clarifies the types of glitches the monitor aims to detect.

*How the paper uses it:* The paper targets detection of all twelve types of clock glitches and timing faults induced by voltage, electromagnetic, and temperature manipulations.

▶ [Taking the guess out of Glitching! | Adam Laurie | NULLCON Goa 2020](https://www.youtube.com/watch?v=eOuUBPOSn0Y) — nullcon · 45:20 · 6y ago

### Digital delay line design *(prerequisite)*
Understand digital delay lines as circuits that introduce controlled timing delays to signals, a fundamental building block for replicating clock pulse widths. This knowledge helps grasp how the monitor uses configurable delay lines to detect anomalies.

*How the paper uses it:* The monitor replicates the system clock pulse width using configurable delay lines implemented with standard cells.

▶ [Lecture 3: Delay-locked loop, tunable delay line](https://www.youtube.com/watch?v=GZT11SQSxH8) — SSCD IIT Kanpur · 1:09:50 · 2y ago

### Hardware security fault injection detection *(prerequisite)*
Gain context on existing methods and challenges in detecting fault injection attacks in hardware, including limitations of design-specific or costly approaches. This sets the stage for appreciating the paper's design-agnostic, low-overhead monitor.

*How the paper uses it:* The paper addresses the need for a fully synthesizable, design-agnostic FIA monitor overcoming coverage and scalability limitations of prior methods.

▶ [LayerOne 2025 -  Introduction to Fault Injection (Joe Rozner)](https://www.youtube.com/watch?v=0QpGPSgR7Ao) — LayerOne Information Security Conference · 39:48 · 1y ago

### Automated hardware design frameworks
Learn about frameworks that automate hardware design and optimization, reducing manual effort and enabling scalable generation of hardware IP across technology nodes. This explains how the paper's monitor can be widely deployed efficiently.

*How the paper uses it:* The authors present an end-to-end automated design framework that generates optimized FIA monitors for any process node and frequency range.

▶ [Lecture-3-Explain Automation Framework component?](https://www.youtube.com/watch?v=xhG32SOVcbg) — The Testing Academy · 16:24 · 2y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to engage with the paper's core innovation: a fully synthesizable, design-agnostic timing fault injection attack (FIA) monitor. The beginner project recreates a simplified digital delay line and clock pulse width detection in software to grasp the fundamental detection principle. The intermediate project implements a simulation of the monitor's delay-locked loop (DLL) and glitch detection logic, comparing detection accuracy against a naive fixed-threshold baseline. The advanced project extends the monitor concept by exploring adaptive acceptance window tuning using machine learning to address a key limitation noted by the authors.

### Beginner — Digital Delay Line and Clock Pulse Width Detector Simulation
*Effort: a weekend, ~8 hours*

You build a software simulation of a configurable digital delay line that replicates a clock pulse width and detects anomalies caused by pulse width deviations. This project models positive and negative clock pulses and simulates glitch injection by altering pulse widths. It visualizes detection events and pulse width variations over time.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core detection mechanism — replicating clock pulse width and detecting timing anomalies — which is central to the paper's monitor design.

**Grounded in:** A fully synthesizable, design-agnostic timing FIA monitor based on clock pulse width replication using configurable delay lines.

**Tech stack:** Python 3.11, Matplotlib, NumPy

**Data:** Synthetic clock pulse signals generated in code to simulate normal and glitch conditions.

**Build it:**

1. Implement a digital delay line model that can delay a clock pulse by configurable amounts.
2. Simulate a clock signal with positive and negative pulses over time.
3. Inject glitches by modifying pulse widths at random or specified intervals.
4. Detect anomalies by comparing delayed pulse widths against expected values within an acceptance window.
5. Visualize pulse widths and detection events using plots.

**Ships as:** A Python repository with simulation scripts and plots showing clock pulse width replication and glitch detection events.

**Stretch goal:** Add a simple GUI to interactively adjust delay line parameters and acceptance windows.

### Intermediate — Simulated Delay-Locked Loop and Glitch Detection with Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You implement a software simulation of the paper's delay-locked loop (DLL) with finite state machine (FSM) for real-time delay locking and drift tracking. The simulation detects all 12 types of clock glitches by monitoring pulse width deviations. You compare detection accuracy and false alert rates against a naive fixed-threshold baseline detector.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method — the DLL-based timing monitor and its real-time locking — and evaluate its effectiveness quantitatively, reflecting deep comprehension of the design and detection trade-offs.

**Grounded in:** Detection of all twelve types of clock glitches and timing faults induced by voltage, electromagnetic, and temperature manipulations; Real-time delay locking enables the monitor to track clock frequency drifts and environmental changes without false alerts.

**Tech stack:** Python 3.11, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic clock signals with injected glitches modeled after the 12 glitch types described in the paper.

**Build it:**

1. Model a digitally controlled delay line and implement a DLL with an FSM for delay locking.
2. Generate synthetic clock signals with frequency drifts and injected glitches of all 12 types.
3. Implement detection logic that flags pulse width deviations outside an acceptance window.
4. Implement a naive fixed-threshold detector as a baseline.
5. Run simulations to collect detection accuracy, false positive, and false negative rates for both methods.
6. Visualize and compare results with plots and summary statistics.

**Ships as:** A Python repository with DLL simulation code, detection algorithms, baseline comparison, and a report with metrics and visualizations.

**Stretch goal:** Extend the simulation to model environmental effects like voltage and temperature variations on delay.

### Advanced — Adaptive Acceptance Window Tuning for Timing FIA Monitor Using Machine Learning
*Effort: 3+ weeks*

You develop an adaptive acceptance window tuning system that dynamically adjusts detection thresholds based on environmental conditions and clock frequency drift. Using machine learning models trained on simulated clock pulse width data under varying conditions, your system aims to reduce false positives and missed detections, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by applying adaptive, data-driven methods to optimize detection sensitivity, demonstrating both comprehension of the monitor's challenges and ability to extend its capabilities.

**Grounded in:** Exploration of adaptive acceptance window tuning to improve detection accuracy under varying operating conditions.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated clock pulse width data with labeled normal and glitch events under varying frequency, voltage, and temperature conditions generated in code.

**Build it:**

1. Generate a comprehensive synthetic dataset simulating clock pulse widths with labeled glitches and environmental variations.
2. Extract features relevant to pulse width deviations and environmental parameters.
3. Train machine learning models (e.g., decision trees, random forests) to predict optimal acceptance window parameters.
4. Integrate the adaptive tuning model with the DLL simulation to dynamically adjust detection thresholds.
5. Evaluate detection performance improvements over static acceptance window configurations.
6. Document methodology, results, and limitations.

**Ships as:** A repository containing data generation scripts, ML model training and evaluation code, integration with DLL simulation, and a detailed README report.

**Stretch goal:** Experiment with reinforcement learning to adapt acceptance windows in real time based on feedback from detection outcomes.
