---
title: "976 · Safety Interventions against Adversarial Patches in an Open-Source Driver Assistance System — Lishan Yang"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lishan-yang"
source_hash: "5eae421e6d4a0a69ba662cf2b257798845f63d7a7f48b39a2a42548f15926d9e"
sequence: 976
generator: "outreach-garden: managed"
---

# 976 · Safety Interventions against Adversarial Patches in an Open-Source Driver Assistance System

## At a glance

- **Professor:** Lishan Yang
- **Institution:** George Mason University
- **Paper:** [Safety Interventions against Adversarial Patches in an Open-Source Driver Assistance System](https://arxiv.org/pdf/2504.18990)
- **Authors:** Cheng Chen, Grant Xiao, Daehyun Lee, Lishan Yang, Evgenia Smirni, Homa Alemzadeh, Xugui Zhou
- **Year:** 2025

## Paper overview

This paper studies how advanced driver assistance systems (ADAS), which help cars drive semi-autonomously, can be attacked by placing adversarial patches on vehicles or roads to confuse the car's cameras. The authors simulate these attacks on an open-source ADAS called OpenPilot and evaluate how well existing safety features and human driver interventions can prevent accidents caused by these attacks. They find that OpenPilot is vulnerable to such attacks, but safety mechanisms like automatic emergency braking (AEB) and alert human drivers can significantly reduce accidents. However, conflicts between safety features and delays in driver reactions limit effectiveness, especially for lateral (steering) attacks.

### Why it matters

**Research problem:** ADAS systems relying on deep learning for perception are vulnerable to physical adversarial attacks on camera inputs, which can cause unsafe driving behaviors such as collisions or lane departures. There is a lack of comprehensive evaluation of how integrated safety mechanisms and human driver interventions mitigate these attacks.

**Why it matters:** ADAS are widely deployed in millions of vehicles and are critical for road safety. Vulnerabilities to adversarial attacks threaten the safety of autonomous and semi-autonomous vehicles, potentially leading to accidents and fatalities. Understanding and improving resilience against such attacks is essential for reliable deployment.

**Key contributions:**

- Systematic evaluation of OpenPilot's resilience to physical adversarial patch attacks targeting adaptive cruise control (ACC) and automated lane centering (ALC).
- Development of an open-source simulation platform combining real ADAS software, physical driving simulation, fault injection, and safety intervention modeling.
- Analysis of the effectiveness of multiple safety mechanisms (AEB, FCW, firmware safety checks) and human driver interventions in mitigating attacks.
- Investigation of conflicts and coordination challenges among different safety interventions.
- Comparison of basic safety mechanisms and human interventions with a baseline machine learning-based automated mitigation method.

## About the professor

**Lishan Yang** — Assistant Professor, Department of Computer Science, George Mason University.

Research interests: system reliability, in particular, GPUs (Graphics Processing Units), HPC (High-Performance Computing), and autonomous driving

### Research links

- [Faculty/profile page](https://lishanyang.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Machine Learning
**The paper assumes:** adversarial machine learning, deep learning vulnerabilities, physical adversarial attacks on computer vision
**Already in this field?** Skip this entirely if you already understand adversarial attacks on deep learning models and defenses in computer vision.

To understand the adversarial patch attacks and safety interventions in the ADAS system studied in the paper, foundational knowledge in adversarial machine learning is essential. The rigorous course option offers a deep, structured university-level lecture series covering adversarial robustness and related deep learning concepts, while the fast track provides a concise, practical introduction to adversarial machine learning fundamentals and attack/defense methods. Choose the course for comprehensive depth and theory; choose the fast track for a quick, intuitive grasp of key ideas.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI Security Foundations: Adversarial Machine Learning in Persian](https://www.youtube.com/playlist?list=PLYxTF848CZLmN1wPNhX5gKc4g4DSRafZE) — Arash Vashagh · 11 videos · 1.7h across 11 episodes

**Watch only this:** Sessions 1-6, about 54 minutes — covering introduction, ML foundations, types of ML, classification tasks, and loss functions to build intuition on adversarial ML basics.

*Why it unblocks this paper:* This short series provides a practical and clear introduction to adversarial machine learning foundations, including attacks and defenses, in a compact format suitable for quickly grasping the core concepts relevant to the paper.

*If you want all of it:* All 11 sessions, about 1.7 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on safety interventions against adversarial patches in an open-source driver assistance system, start by building foundational knowledge on the architecture of advanced driver assistance systems (ADAS), the safety mechanisms employed in autonomous vehicles, human factors influencing driver interventions, and the role of closed-loop simulation in autonomous driving research. Then, focus on the core concept of adversarial attacks on autonomous driving, which is central to the paper's research problem. Finally, study the authors' own talks and related advanced presentations on adversarial patch attacks to gain direct insights into the paper's contributions and context.

### Advanced driver assistance systems architecture *(prerequisite)*
Understanding the structure, components, and functioning of ADAS is critical as the paper evaluates vulnerabilities and safety interventions within such systems. This foundational knowledge helps contextualize how attacks impact system modules like adaptive cruise control and lane centering.

*How the paper uses it:* The paper evaluates OpenPilot, an open-source ADAS, so grasping ADAS architecture is essential to understand the system under attack.

▶ [Advanced Driver Assistance Systems](https://www.youtube.com/watch?v=fxVwav33sMk) — IV 16 Symposium · 1:11:24 · 10y ago

### Safety mechanisms in autonomous vehicles *(prerequisite)*
Safety features such as automatic emergency braking (AEB) and forward collision warning (FCW) are key to mitigating risks from adversarial attacks. Understanding these mechanisms and their operational principles is necessary to appreciate the paper's analysis of intervention effectiveness and conflicts.

*How the paper uses it:* The paper analyzes how safety mechanisms like AEB and FCW mitigate adversarial patch attacks in OpenPilot.

▶ [F1TENTH L02 - Automatic Emergency Braking](https://www.youtube.com/watch?v=k4FQ-dZ0Lp8) — xLAB for Safe Autonomous Systems · 45:18 · 4y ago

### Human factors in driver assistance systems *(prerequisite)*
Human driver intervention plays a significant role in accident prevention but is limited by reaction time and coordination with automated safety features. Studying human factors provides insight into these limitations and the challenges of integrating human and automated responses.

*How the paper uses it:* The paper models human driver reactions and discusses delays and conflicts affecting safety intervention effectiveness.

▶ [Priming Drivers before Handover in Semi-autonomous Cars](https://www.youtube.com/watch?v=6Vpr-vcD2lQ) — ACM SIGCHI · 18:26 · 9y ago

### Closed-loop simulation for autonomous driving *(prerequisite)*
The paper's methodology relies on a closed-loop simulation platform integrating real ADAS software, driving simulation, fault injection, and safety intervention modeling. Understanding closed-loop simulation principles is vital to appreciate the experimental setup and validity of the results.

*How the paper uses it:* The authors develop and use a closed-loop simulation platform to evaluate attack resilience and safety interventions.

▶ [\[08\] Simulation (Waabi CVPR 24 Tutorial on Self-Driving Cars)](https://www.youtube.com/watch?v=0jQnNxaqiSU) — Waabi · 52:54 · 2y ago

### Adversarial attacks on autonomous driving
This concept directly addresses how physical adversarial patches can manipulate perception in autonomous driving systems, which is the core threat studied in the paper. Advanced talks on this topic provide context on attack mechanisms and challenges in defense.

*How the paper uses it:* The paper studies adversarial patch attacks targeting perception modules in OpenPilot ADAS.

▶ [Bo Li – Secure Learning in Adversarial Autonomous Driving Environments](https://www.youtube.com/watch?v=0VfBGWnFNuw) — WAD at CVPR · 27:09 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the authors or closely related research presentations offer the most precise insights into the paper's methodology, findings, and implications. These talks often discuss nuances and future directions not fully captured in the paper text.

*How the paper uses it:* The authors' own presentations provide authoritative explanations of their evaluation of safety interventions against adversarial patches in OpenPilot.

▶ [USENIX Security '22 - PatchCleanser: Certifiably Robust Defense against Adversarial Patches...](https://www.youtube.com/watch?v=dA7vEGe_L3c) — USENIX · 12:17 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand safety interventions against adversarial patch attacks in advanced driver assistance systems (ADAS). Starting with the basics of ADAS architecture and human factors in driver assistance, it then covers safety mechanisms in autonomous vehicles and closed-loop simulation for autonomous driving. Finally, it focuses on adversarial attacks on autonomous driving, which is the core concept of the paper.

### Advanced driver assistance systems architecture *(prerequisite)*
Learn what ADAS are, their components, and how they assist drivers by automating certain driving tasks. This foundational knowledge helps understand the system targeted by adversarial attacks in the paper.

*How the paper uses it:* The paper evaluates attacks and safety interventions on OpenPilot, an open-source ADAS, so understanding ADAS architecture is essential.

▶ [Advanced Driver Assistance System | ADAS System in Car | Explained](https://www.youtube.com/watch?v=V_gPUh2xb7E) — Motoring Masters · 9:20 · 3y ago

### Human factors in driver assistance systems *(prerequisite)*
Explore how human drivers interact with semi-autonomous systems, including reaction times and limitations. This is important to grasp the role and constraints of human intervention in mitigating attacks.

*How the paper uses it:* The paper models human driver reactions and studies their impact on safety intervention effectiveness.

▶ [Priming Drivers before Handover in Semi-autonomous Cars](https://www.youtube.com/watch?v=6Vpr-vcD2lQ) — ACM SIGCHI · 18:26 · 9y ago

### Safety mechanisms in autonomous vehicles *(prerequisite)*
Understand key safety features like Automatic Emergency Braking (AEB) and Forward Collision Warning (FCW) that help prevent accidents. These mechanisms are critical defenses evaluated in the paper against adversarial attacks.

*How the paper uses it:* The paper analyzes how safety mechanisms like AEB and FCW mitigate adversarial patch attacks on ADAS.

▶ [F1TENTH L02 - Automatic Emergency Braking](https://www.youtube.com/watch?v=k4FQ-dZ0Lp8) — xLAB for Safe Autonomous Systems · 45:18 · 4y ago

### Closed-loop simulation for autonomous driving *(prerequisite)*
Learn about simulation platforms that integrate vehicle software, sensors, and environment to test autonomous driving systems in realistic scenarios. This is key to understanding how the paper evaluates attacks and interventions safely.

*How the paper uses it:* The authors develop a closed-loop simulation platform combining OpenPilot, MetaDrive, and fault injection to study attack resilience.

▶ [\[08\] Simulation (Waabi CVPR 24 Tutorial on Self-Driving Cars)](https://www.youtube.com/watch?v=0jQnNxaqiSU) — Waabi · 52:54 · 2y ago

### Adversarial attacks on autonomous driving
Discover how physical adversarial patches can fool vehicle perception systems, causing unsafe behaviors. This concept is central to the paper's investigation of vulnerabilities and defenses in ADAS.

*How the paper uses it:* The paper studies adversarial patch attacks on OpenPilot's perception and their impact on driving safety.

▶ [Bo Li – Secure Learning in Adversarial Autonomous Driving Environments](https://www.youtube.com/watch?v=0VfBGWnFNuw) — WAD at CVPR · 27:09 · 6y ago

## Already in your library

- [Adversarial Exposure Validation (AEV) Explained](https://www.youtube.com/watch?v=rmJzaFJcG1Y) — also for: Paying the Price: When Intimate Partners Use Technology for Financial Harm (Rosanna Bellini)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Adversarial Attacks on AI Explained | AiSecurityDIR](https://www.youtube.com/watch?v=5mCQOZBagGo) — also for: A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks (Susan A. Mengel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the paper's evaluation of safety interventions against adversarial patch attacks on OpenPilot ADAS. The beginner project reproduces a key safety mechanism evaluation in simulation using available open-source tools. The intermediate project reimplements the paper's core closed-loop simulation approach to evaluate attack resilience and safety interventions. The advanced project extends the simulation to address a stated limitation by incorporating more realistic human driver reaction models or environmental conditions, exploring improved coordination of safety mechanisms.

### Beginner — Simulate Automatic Emergency Braking (AEB) Effectiveness in OpenPilot
*Effort: a weekend, ~8 hours*

You build a simple closed-loop simulation that injects adversarial patch faults affecting forward collision detection in OpenPilot's adaptive cruise control (ACC) module. You then implement and evaluate the effectiveness of the Automatic Emergency Braking (AEB) safety mechanism in preventing forward collisions under these attacks.

**Why it shows you understood the paper:** This project shows you understand the vulnerability of OpenPilot to adversarial patches and how AEB using independent sensor data can mitigate forward collision risks, a key result of the paper.

**Grounded in:** Basic safety mechanisms, especially AEB using independent sensor data, can prevent up to 100% of forward collision accidents caused by attacks.

**Tech stack:** Python 3.11, MetaDrive driving simulator, OpenPilot (from https://github.com/commaai/openpilot)

**Data:** Simulated driving scenarios generated by MetaDrive; no real-world data required.

**Build it:**

1. Clone and set up the OpenPilot repository and MetaDrive simulator.
2. Implement a fault injection module that simulates adversarial patch attacks causing failure to detect lead vehicles in ACC.
3. Integrate a simple AEB safety mechanism that triggers emergency braking based on independent sensor data.
4. Run simulations with and without AEB under adversarial patch faults and record collision occurrences.
5. Analyze and visualize the accident prevention rate of AEB compared to no intervention.

**Verified links from the paper:**

- <https://github.com/commaai/openpilot> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with simulation code, scripts to run experiments, and a README showing results comparing collision rates with and without AEB under adversarial patch attacks.

**Stretch goal:** Add forward collision warning (FCW) alerts and measure combined effectiveness with AEB.

### Intermediate — Closed-Loop Simulation of OpenPilot Resilience to Adversarial Patches
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core closed-loop simulation platform integrating OpenPilot, MetaDrive, and a fault injection engine to emulate adversarial patch attacks on both adaptive cruise control (ACC) and automated lane centering (ALC). You evaluate the effectiveness of multiple safety interventions (AEB, FCW) and human driver reaction modeled with fixed reaction times, reporting accident prevention metrics.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's main methodological contribution—systematic evaluation of OpenPilot's resilience to adversarial patches using integrated simulation and safety intervention modeling.

**Grounded in:** Systematic evaluation of OpenPilot's resilience to physical adversarial patch attacks targeting ACC and ALC, and analysis of the effectiveness of multiple safety mechanisms and human driver interventions.

**Tech stack:** Python 3.11, MetaDrive driving simulator, OpenPilot (https://github.com/commaai/openpilot), Panda hardware safety check approximation

**Data:** Simulated driving scenarios from MetaDrive; no real-world data used.

**Build it:**

1. Set up OpenPilot and MetaDrive simulation environment.
2. Develop a fault injection engine to simulate adversarial patch attacks affecting both ACC and ALC perception outputs.
3. Model safety interventions: implement AEB, FCW, and a simple human driver reaction model with fixed average reaction time.
4. Run extensive simulations across multiple scenarios with and without safety interventions.
5. Collect and analyze metrics on accident rates, prevention rates, and conflicts among safety mechanisms.
6. Document findings and compare with paper's reported results.

**Verified links from the paper:**

- <https://github.com/commaai/openpilot> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/commaai/panda> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the integrated simulation platform code, experiment scripts, and a detailed README with evaluation metrics and analysis replicating key paper results.

**Stretch goal:** Incorporate the ML-based automated mitigation baseline and compare its performance to basic safety mechanisms and human intervention.

### Advanced — Enhanced Simulation of Safety Interventions with Realistic Human Driver Models and Environmental Conditions
*Effort: 3+ weeks*

You extend the existing closed-loop simulation platform by incorporating a more realistic and variable human driver reaction model (e.g., stochastic reaction times, distraction modeling) and simulate diverse environmental conditions such as varying road friction and lighting effects on perception. You investigate improved coordination strategies among safety mechanisms to reduce conflicts and improve overall accident prevention under adversarial patch attacks.

**Why it shows you understood the paper:** This project tackles the paper's stated limitations and future directions by improving the fidelity of human driver modeling and environmental simulation, and exploring adaptive coordination of safety interventions, demonstrating deep engagement with the paper's challenges.

**Grounded in:** Developing more realistic and complex driver reaction models; extending simulation to include diverse environmental conditions; improving coordination among safety mechanisms to enhance system resilience.

**Tech stack:** Python 3.11, MetaDrive driving simulator, OpenPilot (https://github.com/commaai/openpilot), Simulation libraries for stochastic modeling

**Data:** Simulated driving data with adversarial patch attacks; environmental parameters synthesized within simulation.

**Build it:**

1. Enhance the human driver reaction model to include variability in reaction times and possible distraction effects.
2. Extend MetaDrive scenarios to simulate environmental conditions such as wet/icy roads and different lighting.
3. Implement a coordination framework for safety mechanisms to dynamically prioritize interventions and resolve conflicts.
4. Run simulations comparing baseline fixed-rule interventions to the adaptive coordination approach.
5. Analyze improvements in accident prevention rates and reduction of intervention conflicts.
6. Prepare comprehensive documentation and discussion of findings.

**Verified links from the paper:**

- <https://github.com/commaai/openpilot> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/commaai/panda> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the enhanced simulation platform, adaptive safety coordination code, experiment scripts, and a detailed report demonstrating improvements over baseline models.

**Stretch goal:** Integrate state-of-the-art ML-based mitigation methods trained on the enhanced simulation data to further improve lateral control safety.
