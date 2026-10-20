---
title: "866 · Optimizing BLE-Like Neighbor Discovery — Samarjit Chakraborty"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-samarjit-chakraborty"
source_hash: "a8dfdff6034277c25f0e5017aab20382daf4dd50792bca093dd966e02747974c"
sequence: 866
generator: "outreach-garden: managed"
---

# 866 · Optimizing BLE-Like Neighbor Discovery

## At a glance

- **Professor:** Samarjit Chakraborty
- **Institution:** University of North Carolina
- **Paper:** [Optimizing BLE-Like Neighbor Discovery](https://arxiv.org/pdf/2009.04199)
- **Authors:** Philipp H. Kindt, Swaminathan Narayanaswamy, Marco Saur, Samarjit Chakraborty
- **Year:** 2020

## Paper overview

This paper presents an optimization framework for neighbor discovery protocols used in wireless devices, especially those similar to Bluetooth Low Energy (BLE). It proposes closed-form equations to set protocol parameters that minimize the worst-case discovery latency for a given energy budget (duty-cycle). The framework achieves provably optimal performance for one sender and one receiver, and near-optimal for two-way discovery. It also compares these optimized protocols to existing ones, showing significant improvements in latency and energy efficiency, and validates the approach with real hardware experiments.

### Why it matters

**Research problem:** How to optimally parametrize periodic interval (PI)-based neighbor discovery protocols, such as BLE-like protocols, to minimize worst-case discovery latency for a given duty-cycle (energy budget), especially in scenarios with few devices discovering each other simultaneously.

**Why it matters:** Neighbor discovery is critical for establishing connections in wireless networks, particularly in battery-powered devices like IoT and BLE piconets. Efficient discovery reduces energy consumption and latency, improving device usability and network performance. Existing slotted protocols are inefficient for small networks, and optimal parametrizations for PI-based protocols were unknown.

**Key contributions:**

- First closed-form optimization framework for PI-based neighbor discovery protocols.
- Proof that SingleInt scheme achieves optimal worst-case latency for one sender and one receiver.
- Development of MultiInt and MultiInt-BC schemes for symmetric two-way discovery with low failure rates.
- Methodology to compare PI-based protocols with slotted protocols by identifying practical slot length limits.
- Experimental validation of the MultiInt-BC scheme on real BLE hardware with extensive measurements.

## About the professor

**Samarjit Chakraborty** — Computer Science, University of North Carolina.

Research interests: real-time, embedded, and cyber-physical systems design

### Research links

- [Faculty/profile page](https://www.cs.unc.edu/~samarjit)
- [Lab website](http://www.cs.unc.edu/%7Eanderson/real-time/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Wireless Communication Protocols
**The paper assumes:** wireless communication protocols, neighbor discovery mechanisms, duty-cycle and latency trade-offs in wireless networks
**Already in this field?** Skip this entirely if you already understand wireless communication protocols and neighbor discovery methods in low-power wireless networks.

To understand the optimization of BLE-like neighbor discovery protocols, it is essential to grasp the fundamentals of short-range wireless communication, including timing, duty-cycles, and collision effects in wireless protocols. The rigorous course provides a comprehensive university-level foundation on these topics, while the fast track offers a concise, intuitive introduction to wireless communication basics. Choose the rigorous course if you want deep technical grounding; choose the fast track for a quick, clear overview that covers key concepts efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [SHORT RANGE WIRELESS COMMUNICATION - 21EC101T](https://www.youtube.com/playlist?list=PLbxBGRRnuvJcvB0GlxrWeMlM9D_YslmuB) — PASSIONATE PROFESSOR · 29 videos · 6.8h across 29 episodes

**Watch only this:** Episodes 16 to 23, about 1.9 hours — start from 'Wireless Communication - Introduction, Challenges and Characteristics' through 'Basics of Communication Part 2 - Sampling, Quantization, Multiple Access Techniques & Multiplexing' to cover core wireless communication principles and multiple access relevant to neighbor discovery.

*Why it unblocks this paper:* This university-level playlist covers short-range wireless communication comprehensively, including protocol timing, modulation, and energy considerations, which are directly relevant to understanding BLE-like neighbor discovery optimization.

*If you want all of it:* 6.8 hours across 29 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Wireless Communication Basics](https://www.youtube.com/playlist?list=PLuSxX2WyiwCBmJ3t-YIyLUkMWrSzxu5Oh) — Wireless Explained · 6 videos · 0.7h across 6 episodes

**Watch only this:** Episodes 1 to 3, about 18 minutes — covering 'All Modulation Types Explained in 3 Minutes', 'What is QAM modulation?', and 'OFDM Implementation Explained Visually!' to grasp key modulation and channel concepts relevant to BLE-like protocols.

*Why it unblocks this paper:* This short playlist provides clear, visual explanations of fundamental wireless communication concepts such as modulation, channel models, and beamforming, giving a quick but solid grounding in the basics needed to understand wireless protocol timing and energy trade-offs.

*If you want all of it:* 0.7 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Optimizing BLE-Like Neighbor Discovery,' start with foundational knowledge on periodic interval neighbor discovery protocols and Bluetooth Low Energy protocol design, as these are the core technologies the paper builds upon. Next, explore the energy-latency tradeoffs in wireless discovery to grasp the fundamental challenge the paper addresses. Finally, focus on the paper authors' own talk or related advanced presentations to learn about their novel closed-form optimization framework and its practical implications.

### Periodic interval neighbor discovery protocols *(prerequisite)*
This section covers the fundamental neighbor discovery protocols based on periodic intervals, which are the protocol type optimized in the paper. Understanding these protocols is essential to appreciate the optimization framework proposed by the authors.

*How the paper uses it:* The paper optimizes PI-based neighbor discovery protocols, making this foundational knowledge critical.

▶ [Foundations of IPv6 3-1: Neighbor Discovery Protocol (NDP)](https://www.youtube.com/watch?v=YJ6HGTqwwaU) — TechKnowSurge · 4y ago

### Bluetooth Low Energy protocol design *(prerequisite)*
BLE is the practical wireless standard that the paper adapts and optimizes. This section provides an advanced overview of BLE protocol design, which is necessary to understand the constraints and adaptations discussed in the paper.

*How the paper uses it:* The paper adapts its optimization framework to BLE, so understanding BLE protocol design is crucial.

▶ [Ellisys Bluetooth Video 1: Intro to Bluetooth Low Energy](https://www.youtube.com/watch?v=eZGixQzBo7Y) — Ellisys · 8y ago

### Energy-latency tradeoffs in wireless discovery *(prerequisite)*
This section explores the core challenge of balancing energy consumption (duty-cycle) and discovery latency in wireless protocols. Grasping these tradeoffs is key to understanding why the paper's optimization framework is impactful.

*How the paper uses it:* The paper's optimization framework explicitly targets minimizing worst-case latency for a given energy budget.

▶ [Bluetooth Gets Ultra-Low Latency and Higher Throughput](https://www.youtube.com/watch?v=zDCLwGNnC_Y) — Electronic Design · 12d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper on optimizing BLE-like neighbor discovery protocols. We start with the basics of Bluetooth Low Energy (BLE) protocol design, as BLE is the practical standard the paper optimizes. Next, we cover periodic interval neighbor discovery protocols, which are the fundamental protocol type the paper improves. Then, we explore the energy-latency tradeoffs in wireless discovery, the core challenge addressed by the paper's optimization framework. Finally, we present a concise explanation of the paper’s core contribution: the closed-form optimization framework for protocol parameter tuning.

### Bluetooth Low Energy protocol design *(prerequisite)*
Learn the basics of Bluetooth Low Energy (BLE), a widely used wireless communication standard for low-power devices. This video explains BLE’s architecture, how devices communicate, and why energy efficiency is critical. Understanding BLE is essential because the paper adapts and optimizes BLE-like protocols for neighbor discovery.

*How the paper uses it:* The paper adapts its optimization framework to configure BLE protocol parameters for improved latency and energy efficiency.

▶ [Bluetooth Low Energy (BLE) Explained: The Ultimate Beginner's Guide](https://www.youtube.com/watch?v=k6DpB8hmgrs) — CodeLucky · 1y ago

### Periodic interval neighbor discovery protocols *(prerequisite)*
This concept covers how devices periodically send and listen for discovery beacons to find neighbors without centralized coordination. The video explains the basic mechanism of periodic interval (PI)-based neighbor discovery, which balances energy use and discovery latency. This foundation is necessary to grasp the protocols the paper optimizes.

*How the paper uses it:* The paper proposes the first closed-form optimization framework specifically for PI-based neighbor discovery protocols.

▶ [Foundations of IPv6 3-1: Neighbor Discovery Protocol (NDP)](https://www.youtube.com/watch?v=YJ6HGTqwwaU) — TechKnowSurge · 4y ago

### Energy-latency tradeoffs in wireless discovery *(prerequisite)*
Wireless neighbor discovery must balance energy consumption (duty-cycle) and latency (time to discover neighbors). This video explains the fundamental tradeoff between energy use and latency in wireless systems, helping build intuition about why optimizing protocol parameters is challenging and important.

*How the paper uses it:* The paper’s optimization framework minimizes worst-case discovery latency for a given energy budget (duty-cycle).

▶ [MAC Protocol For Optimization Of Energy Latency Of WSN Projects](https://www.youtube.com/watch?v=j2wk9nA4LoU) — NetworkSimulationTools · 1y ago

## Already in your library

- [Master BLE Basics in Just 10 Minutes: The Ultimate Guide!](https://www.youtube.com/watch?v=JSQhRyTKnW4) — also for: The Case for Crowd-Sourcing Communication to BLE-Only Devices (Pat Pannuto)
- [Bluetooth Low Energy - Protocol Stack (Part 1)](https://www.youtube.com/watch?v=_CKlkHJROqw) — also for: The Case for Crowd-Sourcing Communication to BLE-Only Devices (Pat Pannuto)
- [Introduction to Gradient Descent | How Models Minimize Loss](https://www.youtube.com/watch?v=vtOI7NgXMQQ) — also for: Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs (Georg Stadler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Optimizing BLE-Like Neighbor Discovery." The beginner project reproduces a core latency vs. duty-cycle figure from the paper using parameter calculations. The intermediate project implements the SingleInt scheme from the paper to optimize neighbor discovery latency and compares it against a simple baseline. The advanced project extends the framework to explore collision mitigation strategies for multi-device discovery, addressing a key limitation and future direction noted by the authors.

### Beginner — Latency vs. Duty-Cycle Visualization for SingleInt Scheme
*Effort: a weekend, ~8 hours*

You build a Python script that implements the closed-form equations from the paper to compute worst-case discovery latency for the SingleInt scheme across a range of duty-cycles. You then plot the latency vs. duty-cycle curve to reproduce a figure similar to the paper's results.

**Why it shows you understood the paper:** This project shows you understand the core mathematical relationship the paper establishes between duty-cycle and worst-case latency for PI-based neighbor discovery, specifically the SingleInt scheme's optimality for one-way discovery.

**Grounded in:** Proof that SingleInt scheme achieves optimal worst-case latency for one sender and one receiver.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** No external data needed; you use the closed-form equations from the paper to generate synthetic latency values.

**Build it:**

1. Extract the closed-form equations for latency and duty-cycle from Section III of the paper.
2. Implement these equations in Python to compute worst-case latency for given duty-cycle values.
3. Generate a range of duty-cycle values (e.g., 0.2% to 1.5%) and compute corresponding latencies.
4. Plot the latency vs. duty-cycle curve using matplotlib.
5. Write a README explaining the equations, implementation, and how the plot relates to the paper's results.

**Ships as:** A GitHub repository with a Python script and plot image reproducing the latency vs. duty-cycle curve for the SingleInt scheme, with clear documentation linking it to the paper's theoretical results.

**Stretch goal:** Add plots comparing latency for MultiInt and MultiInt-BC schemes using their equations from the paper.

### Intermediate — Implementing and Evaluating SingleInt Neighbor Discovery
*Effort: 1-3 weekends*

You implement the SingleInt PI-based neighbor discovery scheme in a Python simulation environment. You simulate discovery latency and energy consumption for one sender and one receiver, then compare the results against a simple baseline such as a random beaconing scheme.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's closed-form optimization framework into a working simulation that validates the latency and duty-cycle tradeoffs, showing practical performance gains of the SingleInt scheme over naive methods.

**Grounded in:** The authors develop a closed-form optimization framework and prove SingleInt scheme achieves optimal worst-case latency for one sender and one receiver.

**Tech stack:** Python 3.11, numpy, matplotlib

**Data:** No external dataset; simulation generates synthetic discovery events based on protocol parameters derived from the paper.

**Build it:**

1. Implement the SingleInt scheme parameter calculation from the paper to set beacon interval (Ta), scan interval (Ts), and scan window length (ds) for a target duty-cycle.
2. Build a discrete-event simulation of neighbor discovery between one sender and one receiver using these parameters.
3. Simulate multiple discovery attempts to measure worst-case and average discovery latency and energy consumption.
4. Implement a baseline discovery scheme (e.g., random periodic beaconing) for comparison.
5. Plot and compare latency and energy metrics between SingleInt and baseline.
6. Document the simulation design, parameter choices, and results in the README.

**Ships as:** A GitHub repo with simulation code, plots comparing SingleInt vs. baseline latency and energy, and documentation explaining the implementation and results.

**Stretch goal:** Extend the simulation to two-way discovery and implement the MultiInt-BC scheme approximation.

### Advanced — Collision Mitigation Strategies for Multi-Device PI-Based Discovery
*Effort: a few weeks*

You extend the PI-based neighbor discovery simulation to multiple devices (e.g., 5-10) discovering simultaneously. You implement and evaluate collision mitigation techniques inspired by the paper's MultiInt-BC scheme and propose adaptive duty-cycle or scheduling strategies to reduce collisions and improve discovery success rates.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing performance degradation due to collisions in multi-device scenarios. It shows you can apply and extend the paper's framework to more realistic, dense IoT network conditions.

**Grounded in:** Performance degrades as the number of devices simultaneously discovering increases due to collisions; future directions include improving collision mitigation techniques for PI-based protocols in multi-device scenarios.

**Tech stack:** Python 3.11, numpy, matplotlib, scipy

**Data:** Synthetic simulation data generated for multiple devices with randomized start times and discovery parameters based on the paper's framework.

**Build it:**

1. Extend the neighbor discovery simulation to support multiple devices discovering simultaneously.
2. Implement collision detection and failure modeling based on overlapping beacon transmissions.
3. Incorporate the MultiInt-BC scheme's approach to reduce collisions via parameter diversification.
4. Design and implement adaptive duty-cycle or randomized scheduling strategies to further mitigate collisions.
5. Run extensive simulations to measure discovery latency, success rate, and collision probability as device count increases.
6. Analyze and visualize the tradeoffs between latency, energy, and collision rate.
7. Write a detailed report discussing how your strategies improve upon the baseline and relate to the paper's findings.

**Ships as:** A comprehensive GitHub repository with multi-device simulation code, collision mitigation implementations, analysis scripts, plots, and a detailed README/report discussing results and relation to the paper.

**Stretch goal:** Prototype a hardware testbed using BLE devices to validate simulation results experimentally.
