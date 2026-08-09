---
title: "339 · Automated Power Domain Insertion and Control in Dataflow Circuits — Martha A. Kim"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-martha-a-kim"
source_hash: "9e1b9b699293bcf8eaaf158868e0708c05e85e457675b9c2c3244adb39c011aa"
sequence: 339
generator: "outreach-garden: managed"
---

# 339 · Automated Power Domain Insertion and Control in Dataflow Circuits

## At a glance

- **Professor:** Martha A. Kim
- **Institution:** Columbia University
- **Paper:** [Automated Power Domain Insertion and Control in Dataflow Circuits](https://doi.org/10.1145/3742875.3754682)
- **Authors:** Martha Barker, Mark Santolucito, Stephen A. Edwards, Martha A. Kim
- **Year:** 2025

## Paper overview

This paper presents a method to automatically insert and control fine-grained power domains in dataflow circuits to improve energy efficiency. The approach partitions each circuit actor into an always-on control plane and a sleepable data plane, dynamically powering down idle parts without affecting circuit correctness. The method is implemented in the CIRCT high-level synthesis tool and evaluated on various benchmarks, showing significant power savings with manageable performance overhead.

### Why it matters

**Research problem:** With the end of Dennard scaling, managing leakage power in circuits is challenging because voltages no longer scale with transistor size, making full-capacity operation unsustainable due to heat and power limits. Power gating can reduce leakage by turning off idle chip regions, but controlling many small power domains efficiently and correctly is difficult.

**Why it matters:** Reducing leakage power is critical for modern chip design to manage heat and battery life, especially as transistor sizes shrink and static power dominates. Efficient and automated fine-grained power gating can significantly save power without manual design effort or correctness risks.

**Key contributions:**

- Algorithm to identify fine-grained power domains for each dataflow actor.
- Method to determine safe idle states for powering down data planes without affecting outputs.
- Synthesis of control logic to dynamically wake and sleep power domains while preserving token sequences.
- Implementation of a fully automated flow as CIRCT passes to power gate entire dataflow circuits.
- Proof of observational equivalence ensuring power gating does not alter circuit behavior.

## About the professor

**Martha A. Kim** — Associate Professor, Department of Computer Science, Columbia University.

Research interests: computer architecture, parallel programming, compilers, low-power computing

### Research links

- [Faculty/profile page](http://www.cs.columbia.edu/~martha)
- [Lab website](http://arcade.cs.columbia.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=gFb9vegAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on automated power domain insertion and control in dataflow circuits, start by building foundational knowledge on dataflow circuit architecture and high-level synthesis, which are essential for grasping the circuit design and implementation context. Next, review the fundamental technique of power gating in integrated circuits to appreciate the leakage power challenges addressed. Finally, focus on the paper's core contribution by examining the authors' own talk or related advanced presentations on fine-grained power domain control in dataflow circuits.

### Dataflow circuit architecture *(prerequisite)*
Understanding dataflow circuit architecture is critical as it forms the structural and operational basis for the circuits targeted by the paper's power gating techniques. The selected university lectures and seminars provide advanced, research-level insights into dataflow computing models and their hardware implementations, which are necessary to appreciate the partitioning and control of power domains in such circuits.

*How the paper uses it:* The paper focuses on power gating in dataflow circuits, so understanding their architecture is foundational.

▶ [Design of Digital Circuits - Lecture 17: OoO, DataFlow ...](https://www.youtube.com/watch?v=vwLyEbIzyfI) — Onur Mutlu Lectures · 1:23:48

### High-level synthesis for hardware *(prerequisite)*
High-level synthesis (HLS) translates high-level programming constructs into hardware descriptions, which is the framework within which the paper's automated power gating algorithms are implemented. The chosen university-level tutorials and research seminars provide a rigorous understanding of HLS flows, enabling comprehension of how the CIRCT tool integrates the proposed methods.

*How the paper uses it:* The authors implement their algorithms as passes in the CIRCT high-level synthesis tool.

▶ [SAFARI Live Seminar - Modern trends in accelerator design with high-level synthesis](https://www.youtube.com/watch?v=55uH0ESlfjI) — Onur Mutlu Lectures · Streamed 3 years ago

### Power gating in integrated circuits *(prerequisite)*
Power gating is a fundamental technique to reduce leakage power by turning off idle circuit regions. Advanced academic videos on power gating provide the necessary background on the challenges and circuit-level mechanisms involved, which the paper extends to fine-grained, automated control in dataflow circuits.

*How the paper uses it:* The paper builds on power gating techniques to manage leakage power in fine-grained dataflow circuit domains.

▶ [Power Gating and Mother/Daughter cells in VLSI](https://www.youtube.com/watch?v=O6HzFuOXvIg) — Jairam Gouda · 12:33

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on automated fine-grained power gating in dataflow circuits, start by learning the basics of dataflow circuit architecture to grasp the hardware model involved. Next, study power gating in integrated circuits to understand the fundamental technique for reducing leakage power. Then, learn about high-level synthesis tools, since the paper's method is implemented as passes in such a tool (CIRCT). Finally, explore the core concept of fine-grained power domain control, which is the paper's main contribution for dynamic power management.

### Dataflow circuit architecture *(prerequisite)*
Dataflow circuits operate by passing tokens between computational actors, enabling parallel and asynchronous execution. Understanding their structure and operation helps you see how power gating can be applied at a fine granularity without breaking correctness.

*How the paper uses it:* The paper targets dataflow circuits and partitions each actor into control and data planes for power gating.

▶ [Design of Digital Circuits - Lecture 17: OoO, DataFlow ...](https://www.youtube.com/watch?v=vwLyEbIzyfI) — Onur Mutlu Lectures · 1:23:48

### Power gating in integrated circuits *(prerequisite)*
Power gating is a hardware technique that reduces leakage power by turning off power to idle circuit blocks. Learning this concept provides the foundation for why and how parts of a chip can be dynamically powered down safely.

*How the paper uses it:* The paper automates fine-grained power gating to reduce leakage power in dataflow circuits.

▶ [Power Gating and Mother/Daughter cells in VLSI](https://www.youtube.com/watch?v=O6HzFuOXvIg) — Jairam Gouda · 12:33

### High-level synthesis for hardware *(prerequisite)*
High-level synthesis (HLS) tools translate software-like descriptions into hardware designs. Understanding HLS helps you appreciate how the paper integrates its power gating algorithms into the CIRCT synthesis flow.

*How the paper uses it:* The method is implemented as automated passes in the CIRCT high-level synthesis tool.

▶ [What is HLS (High Level Synthesis) ?](https://www.youtube.com/watch?v=7c-bTCK8kYY) — Semiconductor Club · 4:56


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of automated fine-grained power gating in dataflow circuits as presented in the paper. The beginner project recreates a core concept of partitioning an actor into control and data planes with simple simulation. The intermediate project implements the core algorithm to identify idle states and synthesize wake/sleep control logic on a small dataflow circuit model, measuring power domain sleep time as in the paper. The advanced project extends the method by exploring actor merging strategies to reduce performance overhead, addressing a stated limitation and future direction of the paper.

### Beginner — Simulate Control and Data Plane Partitioning in a Simple Dataflow Actor
*Effort: a weekend, ~8 hours*

You build a small Python simulation that models a single dataflow actor partitioned into an always-on control plane and a sleepable data plane. The simulation tracks token flow and toggles the data plane's power state based on idle detection using simple heuristics.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental concept of actor partitioning into control and data planes and the idea of dynamically powering down idle data planes without affecting correctness.

**Grounded in:** Our compile-time algorithm partitions each actor into an always-on control plane and a sleepable data plane.

**Tech stack:** Python 3.11

**Data:** Simulated token sequences representing actor input/output events; no external dataset required.

**Build it:**

1. Implement a Python class to represent a dataflow actor with separate control and data planes.
2. Simulate token arrival and processing events with timestamps.
3. Implement a heuristic to detect idle periods in the data plane and simulate power gating by toggling its state.
4. Track and log the data plane's active and sleep durations during the simulation.
5. Write a README explaining the simulation and how it relates to the paper's actor partitioning.

**Ships as:** A Python script simulating control/data plane partitioning with logs showing data plane sleep times, plus a README linking the simulation to the paper's concept.

**Stretch goal:** Add visualization of token flow and power state transitions over time using matplotlib.

### Intermediate — Reimplement Fine-Grained Power Domain Identification and Control on a Small Dataflow Circuit
*Effort: 2 weekends, ~20 hours*

You implement the core algorithm from the paper to identify fine-grained power domains and safe idle states on a small, manually specified dataflow circuit model. You synthesize wake/sleep control logic and simulate domain activity to measure sleep time and wake delays, comparing results against a baseline with no power gating.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main method of automated power domain insertion and control, reproducing key metrics like domain sleep percentages and wake delay effects on performance.

**Grounded in:** Algorithm to identify fine-grained power domains for each dataflow actor. Method to determine safe idle states for powering down data planes without affecting outputs. Synthesis of control logic to dynamically wake and sleep power domains while preserving token sequences.

**Tech stack:** Python 3.11, NetworkX (for graph modeling), matplotlib (for visualization)

**Data:** A small synthetic dataflow circuit graph you define manually to simulate actor interactions; no external dataset required.

**Build it:**

1. Model a small dataflow circuit as a directed graph with actors as nodes and token channels as edges using NetworkX.
2. Implement the algorithm to partition each actor into control and data planes and identify safe idle states using three-valued simulation heuristics.
3. Synthesize wake/sleep control signals for each power domain based on idle state detection.
4. Simulate token flow through the circuit with and without power gating, recording domain sleep percentages and wake delays.
5. Compare performance metrics and power savings between gated and ungated simulations.
6. Document the implementation, results, and relation to the paper's evaluation metrics.

**Ships as:** A Python project modeling a small dataflow circuit with automated power domain insertion and control, simulation results showing power savings and performance trade-offs, and a detailed README.

**Stretch goal:** Extend the simulation to support multi-cycle wake delays and analyze their impact on domain activity and performance.

### Advanced — Explore Actor Merging Strategies to Reduce Power Gating Overhead in Dataflow Circuits
*Effort: 3+ weeks*

You extend the intermediate implementation by developing and evaluating different actor merging strategies to reduce the performance overhead and area cost of fine-grained power gating. You analyze trade-offs between power savings, active time increase, and area overhead, addressing a key limitation and future direction from the paper.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future work by tackling the challenge of balancing power savings and performance overhead through actor merging, a non-trivial extension of the original method.

**Grounded in:** Performance overhead from frequent cycling of fine-grained power domains can be significant. Merging actors to reduce overhead increases active time and area. Explore further merging strategies to balance power savings and performance overhead.

**Tech stack:** Python 3.11, NetworkX, matplotlib, NumPy

**Data:** The same synthetic dataflow circuit model as intermediate project, extended with merged actor configurations.

**Build it:**

1. Review and understand the intermediate project's power gating implementation and simulation framework.
2. Design and implement multiple actor merging heuristics (e.g., adjacency-based, idle-time similarity) to combine actors into larger power domains.
3. Modify the simulation to support merged power domains and measure their impact on domain sleep time, wake delays, and estimated area overhead.
4. Run experiments comparing different merging strategies against the baseline fine-grained gating and no gating.
5. Analyze and visualize trade-offs between power savings, performance overhead, and area cost.
6. Write a comprehensive report and README explaining your methods, results, and how they address the paper's limitations.

**Ships as:** A Python project with actor merging strategies implemented, simulation results comparing power/performance/area trade-offs, and a detailed report linking back to the paper's stated challenges and future directions.

**Stretch goal:** Incorporate selective gating of actors based on idle period length to further optimize overhead.
