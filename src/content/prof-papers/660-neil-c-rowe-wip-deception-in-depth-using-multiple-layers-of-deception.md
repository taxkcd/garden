---
title: "660 · WiP: Deception-in-Depth Using Multiple Layers of Deception — Neil C. Rowe"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-neil-c-rowe"
source_hash: "c753c18369bea6ca243ce5dea18cb8fa76d61f6c622e020bec513de1a9b7b42d"
sequence: 660
generator: "outreach-garden: managed"
---

# 660 · WiP: Deception-in-Depth Using Multiple Layers of Deception

## At a glance

- **Professor:** Neil C. Rowe
- **Institution:** Naval Postgraduate School
- **Paper:** [WiP: Deception-in-Depth Using Multiple Layers of Deception](https://arxiv.org/pdf/2412.16430v1)
- **Authors:** Jason Landsborough, Neil Rowe, Thuy Nguyen, Sunny Fugate
- **Year:** 2024

## Paper overview

This paper explores a cyberdefense strategy called deception-in-depth, which uses multiple layers of deception—network, host, and data—to protect operational systems from cyberattacks. Drawing inspiration from military deception and cybersecurity techniques like honeypots and moving-target defenses, the authors propose combining various deception methods to more effectively deter attackers and protect real systems, rather than just lure attackers into traps.

### Why it matters

**Research problem:** Cyberattacks are increasing in sophistication and frequency, and existing cybersecurity measures are insufficient to fully prevent breaches. Traditional deception methods like honeypots often fail because attackers can detect and avoid them. The problem is how to design a multilayered deception strategy that effectively deters attackers and protects real systems.

**Why it matters:** Cyberattacks threaten critical infrastructure, military operations, and everyday life, causing significant financial and operational damage. Military organizations face persistent cyber threats from nation-states and advanced persistent threats. Effective deception can reduce attackers' advantages, waste their time, and give defenders more freedom to respond, thus improving cybersecurity resilience.

**Key contributions:**

- Identification and classification of multiple deception layers (network, host, data) for cyber defense.
- Integration of military deception concepts (MILDEC) into cyber deception strategies.
- Proposal of two-sided deception where real systems appear fake and honeypots appear realistic.
- Use of software-defined networking for dynamic network deception.
- Development of evaluation methodology using attacker simulation tools and decision-tree analysis.

## About the professor

**Neil C. Rowe** — Professor, Department of Computer Science, Naval Postgraduate School.

Research interests: A broad range of topics in applied artificial intelligence. His main research interests are in data mining, digital forensics, modeling of deception, and cyberwarfare. He has also worked on text processing, computational geometry, and intelligent tutoring systems.

### Research links

- [Faculty/profile page](http://faculty.nps.edu/ncrowe)
- [Professor website](https://faculty.nps.edu/ncrowe/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cybersecurity Deception Techniques
**The paper assumes:** cybersecurity deception methods, honeypots, moving-target defense, and military deception concepts
**Already in this field?** Skip this entirely if you already understand core cybersecurity deception strategies and their practical implementations.

This background covers cybersecurity deception techniques essential for understanding the multilayer deception-in-depth strategy proposed in the paper, including honeypots, honeytokens, moving-target defenses, and military deception principles. The rigorous course provides a structured, detailed foundation suitable for deep technical understanding, while the fast track offers a concise, accessible introduction to key concepts for quicker orientation. Choose the lane that fits your time and depth needs; both prepare you to grasp the paper's approach and evaluation methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CompTIA SY0-701 Security+ Training Course](https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv) — Professor Messer · 121 videos · 7.4h across the first 60 episodes

**Watch only this:** Episodes 1-9 ("How to Pass Your SY0-701 Security+ Exam in 2026" through "Deception and Disruption - CompTIA Security+SY0-701 - 1.2"), about 1.1 hours total — this subset covers core security principles, threat actors, and the specific deception concepts relevant to the paper.

*Why it unblocks this paper:* Professor Messer's CompTIA SY0-701 Security+ Training Course is a comprehensive, authoritative series covering foundational and advanced cybersecurity topics, including a dedicated episode on deception and disruption, which aligns well with the paper's focus on multilayer deception techniques and cyber defense strategies.

*If you want all of it:* First 60 episodes, about 7.4 hours total — covers a broad range of cybersecurity topics beyond deception, useful for comprehensive background.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Cybersecurity Awareness Course 2024](https://www.youtube.com/playlist?list=PLVOBCDdIjh_S5exbp4u6Af4dyTqG2al6e) — rawktavio · 16 videos · 0.8h across the first 14 episodes

**Watch only this:** First 6 episodes ("Phishing Explained In 6 Minutes" through "Former NSA Hacker Reveals 5 Ways To Protect Yourself Online"), about 18 minutes total — these cover core deception and phishing concepts relevant to understanding cyber deception layers.

*Why it unblocks this paper:* The 'Cybersecurity Awareness Course 2024' by rawktavio offers short, clear, and well-produced videos that quickly explain phishing, deception, and related cybersecurity concepts, providing an accessible introduction to deception techniques that complements the paper's focus without requiring a large time investment.

*If you want all of it:* First 14 episodes, about 46 minutes total — covers a wider range of cybersecurity awareness topics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'WiP: Deception-in-Depth Using Multiple Layers of Deception,' start with foundational concepts including military deception principles, software-defined networking for security, honeypots and honeytokens, and attacker simulation with decision-tree analysis. These prerequisites provide the theoretical and technical background necessary to grasp the multilayer deception architecture. Finally, focus on the authors' own talk presenting their deception-in-depth approach, which directly explains their novel contributions and research methodology.

### Military deception principles *(prerequisite)*
Military deception principles form the conceptual foundation for adapting deception-in-depth strategies from traditional warfare to cyber defense. Understanding these principles helps contextualize how layered deception can mislead and manipulate adversaries effectively.

*How the paper uses it:* The paper integrates military deception concepts into cyber deception strategies to enhance multilayer defense.

▶ [The Art of Military Deception - A Comprehensive Analysis | Defence Taiyari](https://www.youtube.com/watch?v=dOPbgTZyJx8) — Defence Taiyari · 20:50 · 1 yr ago

### Software-defined networking for security *(prerequisite)*
Software-defined networking (SDN) enables dynamic and programmable network configurations, which are crucial for implementing the network deception layer in the proposed architecture. A solid understanding of SDN basics and architecture is necessary to appreciate how network deception can be automated and adapted in real time.

*How the paper uses it:* The paper uses SDN to implement dynamic network deception as part of the multilayer architecture.

▶ [Software Defined Networking SDN: Basics, Architecture, Benefits | SDN Vs. Traditional Networking](https://www.youtube.com/watch?v=Z4v2zG9RlCE) — Engineering Funda · 2 yr ago

### Honeypots and honeytokens in cyber defense *(prerequisite)*
Honeypots and honeytokens are key deception tools used in the host and data layers to mislead attackers and detect intrusions. Understanding their design, deployment, and limitations is essential to grasp the paper's analysis of honeypot fingerprinting and deceptive clue strategies.

*How the paper uses it:* The paper analyzes honeypot fingerprinting and uses honeypots and honeytokens in host and data deception layers.

▶ [CertMike Explains Honeypots, Honey files & Honeytokens](https://www.youtube.com/watch?v=nNssPu0zFaY) — Mike Chapple · 2 yr ago

### Attacker simulation and decision-tree analysis *(prerequisite)*
Attacker simulation tools and decision-tree analysis provide the methodological framework for evaluating deception effectiveness and modeling attacker behavior. Familiarity with these techniques is important to understand the paper's evaluation approach using MITRE Caldera and decision-tree models.

*How the paper uses it:* The paper employs attacker simulation and decision-tree models to analyze attacker responses and deception effectiveness.

▶ [Decision Analysis 3: Decision Trees](https://www.youtube.com/watch?v=ydvnVw80I_8) — Joshua Emmanuel · 11 yr ago

### WiP Deception-in-Depth talk *(paper-talk search result; attribution unverified)*
The authors' own recorded talk presents their multilayer deception-in-depth approach, detailing their architecture, experimental results, and future research directions. This direct source is the most authoritative and comprehensive resource to understand the paper's contributions and ongoing work.

*How the paper uses it:* This talk is the authors' presentation of their multilayer deception approach described in the paper.

▶ [Cybersecurity Webinar on Deception – The Proactive Layer of Defense in Depth](https://www.youtube.com/watch?v=MFsTqSgfKlk) — Infopercept Consulting Pvt. Ltd. · 4 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts before exploring the paper's core idea of deception-in-depth in cybersecurity. Start with understanding military deception principles as the conceptual foundation, then learn about software-defined networking and honeypots as key enabling technologies. Next, grasp attacker simulation and decision-tree analysis methods used for evaluation, followed by multilayer cyber deception strategies. Finally, watch a focused talk on deception as a proactive defense layer to tie all concepts together in the context of the paper.

### Military deception principles *(prerequisite)*
Military deception involves deliberately misleading adversaries to gain strategic advantage, using tactics like camouflage, decoys, and misinformation. Understanding these principles provides intuition for how similar ideas can be adapted to cybersecurity defense.

*How the paper uses it:* The paper adapts military deception concepts to design multilayer cyber deception strategies.

▶ [The Art of Military Deception - A Comprehensive Analysis | Defence Taiyari](https://www.youtube.com/watch?v=dOPbgTZyJx8) — Defence Taiyari · 20:50 · 1 yr ago

### Software-defined networking for security *(prerequisite)*
Software-defined networking (SDN) separates the control plane from the data plane, enabling dynamic and programmable network management. This flexibility allows defenders to create adaptive network deception layers that can change in response to attacks.

*How the paper uses it:* The paper uses SDN to implement dynamic network-layer deception as part of its architecture.

▶ [What is SDN ? - How software defined networking will impact future networking jobs (2025)](https://www.youtube.com/watch?v=o-hbCAMxxk4) — IT k Funde · 10:48 · 2 yr ago

### Honeypots and honeytokens in cyber defense *(prerequisite)*
Honeypots are decoy systems designed to attract attackers, while honeytokens are fake data or credentials that alert defenders when accessed. These tools mislead attackers and provide early warnings, forming key components of host and data deception layers.

*How the paper uses it:* The paper integrates honeypots and honeytokens in host and data layers to mislead attackers effectively.

▶ [CertMike Explains Honeypots, Honey files & Honeytokens](https://www.youtube.com/watch?v=nNssPu0zFaY) — Mike Chapple · 2 yr ago

### Attacker simulation and decision-tree analysis *(prerequisite)*
Attacker simulation tools mimic adversary behavior to test defenses, while decision-tree analysis models attacker choices and responses. Together, they help evaluate how effective deception strategies are and guide their optimization.

*How the paper uses it:* The paper uses attacker simulation and decision-tree models to evaluate and refine deception effectiveness.

▶ [Decision Analysis 3: Decision Trees](https://www.youtube.com/watch?v=ydvnVw80I_8) — Joshua Emmanuel · 11 yr ago

### Cyber deception multilayer strategies
Multilayer cyber deception combines network, host, and data deception techniques to create a layered defense that confuses and deters attackers more effectively than single-layer approaches. This strategy increases attacker uncertainty and defense resilience.

*How the paper uses it:* The paper proposes a deception-in-depth architecture combining multiple deception layers for stronger cyber defense.

▶ [Novel Trick or Critical Component: How Does Cyber Deception Fit Into Modern Security Architecture?](https://www.youtube.com/watch?v=-oFEc-tjqHw) — SANS Offensive Operations · 4 yr ago

### WiP Deception-in-Depth talk *(paper-talk search result; attribution unverified)*
This talk presents the authors' own work on deception-in-depth, explaining their multilayer architecture, inspirations from military deception, and evaluation plans. It provides direct insight into the paper's contributions and ongoing research.

*How the paper uses it:* This video is a direct source presenting the paper's multilayer deception approach.

▶ [Cybersecurity Webinar on Deception – The Proactive Layer of Defense in Depth](https://www.youtube.com/watch?v=MFsTqSgfKlk) — Infopercept Consulting Pvt. Ltd. · 4 yr ago

## Already in your library

- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the WiP paper on deception-in-depth. The beginner project reproduces a core experimental result on host-based deception slowing attackers, using familiar tools. The intermediate project implements a simplified multilayer deception simulation with attacker behavior modeling, reflecting the paper's core architecture and evaluation approach. The advanced project extends the paper by exploring human-autonomy teaming for coordinating multilayer deception, addressing a stated future direction and limitation.

### Beginner — Host-Based Deception Experiment Simulation
*Effort: a weekend (~8 hours)*

You build a small-scale simulation of host-based deception that frustrates attackers by injecting deceptive clues and slowing attack progress. Using a simple Python script or Jupyter notebook, you simulate attacker steps and measure time delays caused by host deception techniques inspired by the paper's experimental study.

**Why it shows you understood the paper:** This project shows you grasp the paper's experimental evidence that host-based deception can slow attackers, and you can reproduce a simplified version of that experiment and metric.

**Grounded in:** Host-based deception was experimentally shown to frustrate and slow attackers in a controlled study.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic attacker step sequences simulated in code, based on descriptions from the paper's host deception experiment.

**Build it:**

1. Read the paper section describing the host-based deception experiment and attacker behavior.
2. Implement a simple attacker simulation that performs a sequence of attack steps with timing.
3. Add host-based deception effects that probabilistically delay or mislead the attacker at certain steps.
4. Run multiple simulation trials to measure average attacker slowdown caused by deception.
5. Visualize results with plots showing attacker progress with and without deception.

**Ships as:** A Jupyter notebook or Python script with simulation code, plots of attacker slowdown metrics, and a README explaining the experiment and results.

**Stretch goal:** Add configurable deception parameters to explore different host deception intensities and their impact on attacker delay.

### Intermediate — Multilayer Deception Simulation with Attacker Decision Trees
*Effort: 1-3 weekends (~20 hours)*

You implement a simplified multilayer deception-in-depth architecture with network, host, and data deception layers. Using Python, you simulate attacker interactions and responses modeled by decision trees, reflecting the paper's approach to analyzing attacker behavior and deception effectiveness.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core multilayer deception concept and attacker decision-tree modeling, showing you understand the integration of multiple deception layers and attacker response analysis.

**Grounded in:** The authors propose a deception-in-depth architecture with three logical layers—network, host, and data—and develop decision-tree models to analyze attacker behavior and deception effectiveness.

**Tech stack:** Python 3.11, scikit-learn (for decision trees), Jupyter Notebook, matplotlib

**Data:** Synthetic attacker interaction logs generated by the simulation, representing attacker decisions and deception triggers.

**Build it:**

1. Design a simple model of three deception layers: network, host, and data, each with distinct deception actions.
2. Implement attacker simulation that interacts with these layers and makes decisions based on deceptive clues.
3. Train or encode decision-tree models to represent attacker responses to deception at each layer.
4. Run simulations to collect attacker behavior data and evaluate deception effectiveness metrics (e.g., attacker confusion, time delays).
5. Visualize decision trees and attacker response statistics to interpret deception impact.

**Ships as:** A Python project with simulation code, decision-tree models, evaluation metrics, visualizations, and a README linking the implementation to the paper's architecture and analysis.

**Stretch goal:** Integrate a simple baseline without deception layers to compare attacker success rates and delays.

### Advanced — Human-Autonomy Teaming Framework for Coordinated Deception-in-Depth
*Effort: a few weeks (~40+ hours)*

You design and prototype a framework that integrates human supervisory control with automated multilayer deception systems. This includes a dashboard UI for human operators to monitor deception layers, override automated decisions, and coordinate deception strategies dynamically, addressing the paper's challenge of managing multiple deception methods without conflict.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring human-autonomy teaming for deception management, demonstrating deep comprehension of the coordination challenges in deception-in-depth architectures.

**Grounded in:** Potential conflicts or suboptimal outcomes may arise when combining multiple deception methods without careful coordination; automation and human supervisory control integration remain challenging.

**Tech stack:** TypeScript, React, Node.js/Express, Python 3.11 (backend simulation), Docker

**Data:** Simulated deception system state and attacker interaction events generated by backend services to feed the UI dashboard.

**Build it:**

1. Design a system architecture combining automated deception modules (network, host, data) with a human supervisory dashboard.
2. Implement backend services simulating deception layer states and attacker events.
3. Build a React frontend dashboard showing deception layer statuses, alerts, and controls for human overrides.
4. Develop APIs for human operators to adjust deception parameters and coordinate layers dynamically.
5. Simulate scenarios where human decisions resolve conflicts or optimize deception strategies.
6. Document the framework design, challenges addressed, and potential extensions.

**Ships as:** A full-stack prototype with a working dashboard, backend deception simulation, APIs for human-autonomy interaction, and a README describing the system and its relation to the paper's future directions.

**Stretch goal:** Incorporate simple AI agent suggestions for deception adjustments to assist human operators, exploring human-autonomy teaming further.
