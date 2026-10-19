---
title: "790 · Weakly-Hard Real-Time Flow Scheduling in Time-Sensitive Networks — Monowar Hasan"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-monowar-hasan"
source_hash: "9642fe7267025c74592ca8e070f4188f4793c8d20f940594271f15c7e0afecfb"
sequence: 790
generator: "outreach-garden: managed"
---

# 790 · Weakly-Hard Real-Time Flow Scheduling in Time-Sensitive Networks

## At a glance

- **Professor:** Monowar Hasan
- **Institution:** Washington State University
- **Paper:** [Weakly-Hard Real-Time Flow Scheduling in Time-Sensitive Networks](https://elib.dlr.de/223312/1/TSN_Weakly_Hard___RTAS_26___Accepted.pdf)
- **Authors:** Tamim Ahmed, Zain A. H. Hammadeh, Daniel Lüdtke, Monowar Hasan
- **Year:** 2026

## Paper overview

This paper addresses the challenge of scheduling network traffic in Time-Sensitive Networks (TSN) where some packets can tolerate occasional deadline misses (weakly-hard real-time constraints). The authors propose methods to schedule mandatory packets with strict deadlines while maximizing the delivery of optional packets that can miss deadlines occasionally, improving network efficiency under high load.

### Why it matters

**Research problem:** Existing TSN scheduling approaches assume hard real-time semantics where all packets must meet deadlines, which leads to inefficiency under high utilization or overload. Many cyber-physical systems operate under weakly-hard timing models that allow bounded deadline violations, but integrating these weakly-hard guarantees into TSN flow scheduling is underexplored.

**Why it matters:** TSN is critical for latency-sensitive communications in domains like autonomous vehicles and industrial automation. Allowing bounded deadline misses (weakly-hard constraints) can improve network utilization and flow admissibility under overload, enhancing system reliability and performance without compromising critical packet deadlines.

**Key contributions:**

- Integration of weakly-hard real-time semantics into TSN flow scheduling.
- Development of two GCL construction methods: a heuristic (Lazy Search) and an ILP optimization.
- Systematic analysis of dedicated queue reservation for optional packets versus multiplexing within traffic classes.
- Extensive synthetic evaluation and hardware validation on a commodity TSN switch.
- Public release of implementation code for community use.

## About the professor

**Monowar Hasan** — Assistant Professor, School of Electrical Engineering & Computer Science, Washington State University.

Research interests: building trustworthy computer systems, with a focus on real-time systems

### Research links

- [Faculty/profile page](https://school.eecs.wsu.edu/faculty/profile/?nid=monowar.hasan)
- [Professor website](https://school.eecs.wsu.edu/directory/wsu-profile/monowar.hasan)
- [Resolved homepage](https://monowarhasan.info/)
- [Lab website](https://cps2rl.github.io/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=lLMWtnkAAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Real-Time Systems Scheduling
**The paper assumes:** real-time systems scheduling theory, deadline scheduling algorithms, weakly-hard real-time constraints
**Already in this field?** Skip this entirely if you already understand real-time scheduling concepts including hard and weakly-hard constraints and scheduling algorithms for deadline guarantees.

This background is essential for understanding the scheduling theory and techniques underlying weakly-hard real-time constraints and flow scheduling in Time-Sensitive Networks, as discussed in the paper. The rigorous course provides a deep and structured foundation in real-time systems scheduling theory, while the fast track offers a concise and accessible introduction to key scheduling algorithms and concepts, suitable for quickly grasping the essentials before diving into the paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Real Time CPU Scheduling](https://www.youtube.com/playlist?list=PLRNkaOMDE7ciMfRqdip7bxUS2R8b_p0he) — Debasish Dalei · 6 videos · 0.7h across 6 episodes

**Watch only this:** Episodes 1-6 (the entire playlist), about 0.7 hours — covers priority-driven scheduling approaches and examples, sufficient for a quick grasp of core scheduling concepts.

*Why it unblocks this paper:* This concise playlist by Debasish Dalei provides a quick, clear overview of priority-driven real-time CPU scheduling algorithms such as Rate Monotonic and Earliest Deadline First, which are directly relevant to understanding the scheduling heuristics and guarantees in the paper.

*If you want all of it:* 0.7 hours across all 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on weakly-hard real-time flow scheduling in Time-Sensitive Networks (TSN), start by building foundational knowledge on the key prerequisite topics: the weakly-hard real-time systems timing model, Integer Linear Programming (ILP) optimization techniques, and the fundamentals of TSN scheduling mechanisms. Then, explore the broader context of real-time network flow scheduling before focusing on the paper's core contributions, including the authors' own talk explaining their novel scheduling framework and results.

### Weakly-hard real-time systems *(prerequisite)*
This section covers the timing model that allows bounded deadline misses, which is central to the paper's approach. The selected video provides a detailed academic-level explanation of hard vs soft real-time systems, including weakly-hard semantics, suitable for an advanced reader.

*How the paper uses it:* Understanding weakly-hard real-time semantics is critical to grasping the paper's scheduling framework that allows occasional deadline misses.

▶ [4.13 Real-Time CPU Scheduling | Hard vs Soft Real-Time Systems](https://www.youtube.com/watch?v=zbSPdWGJqFM) — Shree Learning Academy · 8:16 · 5mo ago

### Integer Linear Programming optimization *(prerequisite)*
ILP is the mathematical optimization technique used in the paper to construct optimal Gate Control Lists (GCLs). The chosen lecture is a university-level discrete optimization course that thoroughly explains ILP concepts, providing the necessary depth for understanding the paper's ILP formulation.

*How the paper uses it:* The paper's ILP optimization method for GCL construction relies on a solid understanding of integer linear programming.

▶ [Discrete Optimization Lecture 16: Integer Linear Programs and Totally Unimodular Matrices](https://www.youtube.com/watch?v=cvLBTqcSX-4) — Jonathan Noel · 1:13:46 · Streamed 11mo ago

### Time-Sensitive Networking scheduling *(prerequisite)*
This section introduces the fundamentals of TSN scheduling mechanisms and challenges. The selected video is a university-level seminar by a recognized industry expert, offering a rigorous and comprehensive overview of TSN, which is essential background for the paper's network context.

*How the paper uses it:* The paper builds on TSN scheduling principles to integrate weakly-hard real-time semantics for improved flow admissibility.

▶ [IEEE802.1 TSN Basics (English)](https://www.youtube.com/watch?v=xGs7M6fyTmc) — NetTimeLogic GmbH · 57:58 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces key concepts to understand scheduling in Time-Sensitive Networks (TSN) with weakly-hard real-time constraints, as presented in the paper. It starts with foundational knowledge of weakly-hard real-time systems and integer linear programming optimization, then covers TSN scheduling fundamentals, and culminates with the paper's specific scheduling methods integrating weakly-hard semantics.

### Weakly-hard real-time systems *(prerequisite)*
Learn about real-time systems that allow some bounded deadline misses, which is critical to understanding how the paper improves network efficiency by relaxing strict timing constraints. This concept bridges the gap between hard real-time (no misses allowed) and soft real-time systems.

*How the paper uses it:* The paper integrates weakly-hard real-time semantics to allow occasional deadline misses for optional packets in TSN scheduling.

▶ [4.13 Real-Time CPU Scheduling | Hard vs Soft Real-Time Systems](https://www.youtube.com/watch?v=zbSPdWGJqFM) — Shree Learning Academy · 8:16 · 5mo ago

### Integer Linear Programming optimization *(prerequisite)*
Understand the basics of integer linear programming (ILP), a mathematical optimization technique used to find the best solution under constraints. This knowledge helps grasp the paper's ILP formulation for optimal Gate Control List construction.

*How the paper uses it:* The paper uses an ILP optimization to construct schedules that guarantee mandatory packet deadlines while maximizing optional packet admission.

▶ [Integer Linear Programming - Binary (0-1) Variables 1, Fixed Cost](https://www.youtube.com/watch?v=-3my1TkyFiM) — Joshua Emmanuel · 6:00 · 10y ago

### Time-Sensitive Networking scheduling *(prerequisite)*
Explore the fundamentals of Time-Sensitive Networking (TSN), including its scheduling mechanisms and challenges in ensuring timely delivery of packets in critical systems. This sets the stage for understanding the paper's focus on improving TSN scheduling under weakly-hard constraints.

*How the paper uses it:* The paper targets scheduling flows in TSN switches to meet timing requirements with improved efficiency.

▶ [IEEE802.1 TSN Basics (English)](https://www.youtube.com/watch?v=xGs7M6fyTmc) — NetTimeLogic GmbH · 57:58 · 5y ago

### Weakly-hard TSN flow scheduling methods
Focus on heuristic and optimization methods for scheduling flows with weakly-hard constraints in TSN, which is the core contribution of the paper. Understanding these methods reveals how the authors balance mandatory deadlines and optional packet delivery.

*How the paper uses it:* The paper proposes the Lazy Search heuristic and an ILP approach to construct Gate Control Lists that integrate weakly-hard real-time semantics in TSN scheduling.

▶ [Lec61 - Heuristic approaches to scheduling](https://www.youtube.com/watch?v=mP2yMH9ZRCY) — NPTEL-NOC IITM · 16:29 · 7 yr ago

## Already in your library

- [Time-Sensitive Networking Standardization](https://www.youtube.com/watch?v=MI30rR4fdYE) — also for: A Study of a Deterministic Networking Framework for Latency Critical Large Scientific Data Transfers (Dipak Ghosal)
- [Time-Sensitive Networking (TSN) Explained: Deterministic Ethernet for Real-Time Systems | Uplatz](https://www.youtube.com/watch?v=F6vUSPKOPLk) — also for: A Study of a Deterministic Networking Framework for Latency Critical Large Scientific Data Transfers (Dipak Ghosal)
- [Lecture 12: Introduction to Linear Programming](https://www.youtube.com/watch?v=qKNkP6IfjvY) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Lecture 13: Duality in Linear Programming](https://www.youtube.com/watch?v=oyVZ3rao6M4) — also for: Determining Attributes to Maximize Visibility of Objects (Gautam Das)
- [Intro to Linear Programming](https://www.youtube.com/watch?v=K7TL5NMlKIk) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Integer Linear Programming - Graphical Method - Optimal Solution, Mixed, Rounding, Relaxation](https://www.youtube.com/watch?v=RhHhy-8sz-4) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [1.1: Intro to LP and MIP](https://www.youtube.com/watch?v=i1wg23MFA5I) — also for: Disentangling Fine-Tuning from Pre-Training in Visual Captioning with Hybrid Markov Logic (Deepak Venugopal)
- [Introduction to Integer Linear Programming](https://www.youtube.com/watch?v=kkx3PaHLoek) — also for: Determining Attributes to Maximize Visibility of Objects (Gautam Das)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of weakly-hard real-time flow scheduling in Time-Sensitive Networks (TSN) as presented in the paper. The beginner project recreates a core scheduling concept using familiar tools, the intermediate project reimplements the paper's core ILP scheduling method using the authors' cited codebase, and the advanced project extends the framework toward a stated future direction by exploring network-wide scheduling. Each project builds on the previous one, increasing in complexity and depth of engagement with the paper's contributions and limitations.

### Beginner — Simulate Weakly-Hard Scheduling with Mandatory and Optional Packets
*Effort: a weekend, ~8 hours*

You build a small discrete-event simulation in Python that models a single TSN switch scheduling flows with mandatory and optional packets under weakly-hard constraints. The simulation implements a simplified version of the Lazy Search heuristic to schedule mandatory packets with strict deadlines and optionally admit optional packets, tracking deadline misses.

**Why it shows you understood the paper:** This project shows you understand the core concept of categorizing packets into mandatory and optional classes and the trade-off between strict deadline guarantees and optional packet admission under weakly-hard constraints.

**Grounded in:** Demonstrates the paper's approach of categorizing packets as mandatory or optional and the Lazy Search heuristic for GCL construction.

**Tech stack:** Python 3.11

**Data:** Synthetic TSN flow data generated within the simulation, modeling packet arrival times, deadlines, and weakly-hard constraints as described in the paper.

**Build it:**

1. Implement a discrete-event simulation framework in Python to model packet arrivals and scheduling at a single TSN switch.
2. Define packet classes as mandatory or optional with associated deadlines and weakly-hard constraints.
3. Implement a simplified Lazy Search heuristic that schedules mandatory packets first and tries to admit optional packets without violating mandatory deadlines.
4. Run the simulation under different load scenarios and record metrics such as mandatory deadline misses and optional packet admission rates.
5. Visualize results with simple plots showing the trade-off between mandatory deadline guarantees and optional packet acceptance.

**Ships as:** A Python simulation repository with README explaining the model, the implemented heuristic, and plots demonstrating scheduling behavior under weakly-hard constraints.

**Stretch goal:** Add a comparison with a naive hard real-time scheduler that treats all packets as mandatory to show the benefit of weakly-hard semantics.

### Intermediate — Reimplement and Evaluate ILP-Based Weakly-Hard TSN Scheduling
*Effort: 2-3 weekends, ~20 hours*

You reimplement the paper's Integer Linear Programming (ILP) formulation for Gate Control List (GCL) construction to schedule mandatory and optional packets under weakly-hard constraints. You use the third-party code repository https://github.com/CPS2RL/TSN_Overload as a baseline reference for weakly-hard real-time scheduling methods. You then compare your ILP scheduler's performance against the Lazy Search heuristic on synthetic TSN flow data.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's ILP optimization approach into working code, understand the trade-offs between heuristic and optimal scheduling, and evaluate schedulability and optional packet admissibility metrics as reported in the paper.

**Grounded in:** Implements the paper's ILP optimization method and compares it to the Lazy Search heuristic, reproducing key results on schedulability and optional packet admission.

**Tech stack:** Python 3.11, PuLP or Google OR-Tools for ILP solving, Matplotlib for visualization

**Data:** Synthetic TSN flow datasets generated based on the paper's description of packet flows, deadlines, and weakly-hard constraints; no official dataset is provided, so you simulate flows with varying load and deadline parameters.

**Build it:**

1. Study the ILP formulation described in the paper and implement it using an ILP solver library in Python.
2. Implement the Lazy Search heuristic as a baseline scheduler.
3. Generate synthetic TSN flow datasets with mandatory and optional packets and weakly-hard constraints.
4. Run both schedulers on the datasets and collect metrics on mandatory deadline misses and optional packet admission.
5. Visualize and compare the schedulability and optional packet admission rates of the ILP and heuristic methods.
6. Document the implementation details and evaluation results in the README.

**Verified links from the paper:**

- <https://github.com/CPS2RL/TSN_Overload> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python repository with ILP and heuristic scheduler implementations, synthetic data generation scripts, evaluation code, and a report comparing schedulability and optional packet admission metrics.

**Stretch goal:** Incorporate the dedicated queue reservation strategy for optional packets and evaluate its impact on flow admissibility.

### Advanced — Extend Weakly-Hard TSN Scheduling to Network-Wide GCL Construction
*Effort: 3-4 weeks*

You develop a prototype framework that extends the paper's single-switch scheduling approach to a network-wide scenario with multiple TSN switches. You model flow dependencies across switches and propose a heuristic or approximation method to construct global GCLs that respect weakly-hard constraints. You evaluate your method on synthetic multi-switch TSN topologies and compare schedulability and optional packet admission against single-switch scheduling.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing network-wide scheduling, demonstrating deep comprehension of the scheduling challenges and the ability to innovate beyond the paper's scope.

**Grounded in:** Addresses the paper's stated limitation and future direction of extending the framework to network-wide global GCL construction accounting for flow dependencies.

**Tech stack:** Python 3.11, NetworkX for network modeling, PuLP or Google OR-Tools for ILP or heuristic optimization, Matplotlib or Plotly for visualization

**Data:** Synthetic TSN network topologies with multiple switches and flows crossing switches, generated based on typical TSN network characteristics described in the paper.

**Build it:**

1. Model a TSN network topology with multiple switches and flows crossing them using NetworkX.
2. Extend the single-switch ILP or heuristic scheduling formulation to incorporate flow dependencies across switches.
3. Implement a heuristic or approximation algorithm to construct network-wide GCLs under weakly-hard constraints.
4. Generate synthetic multi-switch TSN flow datasets with mandatory and optional packets.
5. Evaluate schedulability and optional packet admission metrics compared to single-switch scheduling.
6. Document the design, implementation, evaluation, and insights in the README.

**Ships as:** A Python repository implementing network-wide weakly-hard TSN scheduling with evaluation scripts and a detailed report on the approach and results.

**Stretch goal:** Explore runtime enforcement mechanisms such as ingress admission control or programmable NIC filtering for optional packet dropping as suggested in the paper's future directions.
