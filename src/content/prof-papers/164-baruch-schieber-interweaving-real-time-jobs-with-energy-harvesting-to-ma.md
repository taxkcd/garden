---
title: "164 · Interweaving Real-Time Jobs with Energy Harvesting to Maximize Throughput — Baruch Schieber"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-baruch-schieber"
source_hash: "77d5b94595ead27e0a538e16088bf1a4ed0de8f314bb7e10d8b0128f6d8de9ae"
sequence: 164
generator: "outreach-garden: managed"
---

# 164 · Interweaving Real-Time Jobs with Energy Harvesting to Maximize Throughput

## At a glance

- **Professor:** Baruch Schieber
- **Institution:** NJIT
- **Paper:** [Interweaving Real-Time Jobs with Energy Harvesting to Maximize Throughput](https://doi.org/10.1007/s00453-025-01331-x)
- **Authors:** Baruch Schieber, Bhargav Samineni, Soroush Vahidi
- **Year:** 2025

## Paper overview

This paper studies scheduling problems motivated by batteryless IoT devices that harvest energy intermittently. It models jobs with release times, due dates, energy needs, and weights, and energy harvesting that occurs only when no job runs. The goal is to schedule jobs to maximize total weight (throughput) while respecting energy constraints. The authors provide algorithms and hardness results for various problem variants.

### Why it matters

**Research problem:** How to schedule unit-time jobs with release times, due dates, energy requirements, and weights on a single machine where energy is harvested only during idle slots, to maximize the total weight of scheduled jobs (throughput), under energy availability constraints.

**Why it matters:** Batteryless IoT devices rely on harvested energy, which is variable and intermittent. Efficient scheduling that accounts for energy harvesting can improve device operation and longevity without batteries, which have environmental and logistical drawbacks.

**Key contributions:**

- First theoretical analysis of energy-aware scheduling with intermittent energy harvesting.
- Polynomial-time optimal dynamic programming algorithm for unweighted jobs with identical release times and due dates.
- More efficient O(n^2 + T) algorithm for the same problem variant.
- Greedy 1/2-approximation algorithm for unweighted jobs with arbitrary release times and due dates.
- FPTAS for weighted jobs with identical release times and due dates.

## About the professor

**Baruch Schieber** — Professor, Department of Computer Science, NJIT.

Research interests: Algorithm design; Combinatorial optimization

### Research links

- [Faculty/profile page](https://cs.njit.edu/faculty/sbar)
- [Professor website](https://sbarnjit.github.io/)
- [Resolved homepage](https://sbarnjit.github.io/#home)
- [Lab website](https://futuretechnologies.njit.edu/)
- [LinkedIn](https://www.linkedin.com/in/baruch-schieber-0b3b9214b/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on energy-aware scheduling with intermittent energy harvesting, start by building foundational knowledge on scheduling theory with release times and deadlines, as this underpins the problem formulation. Next, study approximation algorithms for NP-hard scheduling problems to grasp the theoretical tools used for the paper's algorithmic contributions. Then, explore energy harvesting models in IoT systems to contextualize the practical motivation behind the scheduling constraints. Finally, focus on the core concept of energy-aware scheduling algorithms, including the authors' own talk if available, to directly connect with the paper's novel contributions and results.

### Scheduling theory with release times and deadlines *(prerequisite)*
This section covers fundamental scheduling models involving jobs with release times and deadlines, which form the basis of the paper's problem formulation. Understanding classical scheduling algorithms and constraints is essential to appreciate the complexity and design of the new algorithms presented.

*How the paper uses it:* The paper models scheduling problems with jobs having release times and due dates, making this foundational knowledge critical.

▶ [3.2 Job Sequencing with Deadlines - Greedy Method](https://www.youtube.com/watch?v=zPtI8q9gvX8) — Abdul Bari · 13:29

### Approximation algorithms for NP-hard scheduling *(prerequisite)*
Approximation algorithms provide efficient solutions to NP-hard problems with provable guarantees, which is central to the paper's approach for variants where exact polynomial-time algorithms are unlikely. This section introduces key concepts and methods relevant to the greedy 1/2-approximation and FPTAS developed in the paper.

*How the paper uses it:* The paper develops a greedy 1/2-approximation and an FPTAS for different variants of the scheduling problem, relying on approximation algorithm theory.

▶ [Lecture 4: Greedy algorithms: Interval scheduling, Huffman ...](https://www.youtube.com/watch?v=FcoPWytQJzo) — Center on Frontiers of Computing Studies, PKU · 49:58

### Energy harvesting models in IoT systems *(prerequisite)*
This section explains the practical context of intermittent energy harvesting in batteryless IoT devices, which motivates the energy constraints in the scheduling problem. Understanding energy harvesting technologies and their limitations helps ground the theoretical scheduling models in real-world applications.

*How the paper uses it:* The paper is motivated by batteryless IoT devices that harvest energy intermittently, making this background essential.

▶ [Energy harvesting for IoT devices - Roelof Koopmans, Dracula Technologies - The Things Conference](https://www.youtube.com/watch?v=NUYTIxymV50) — The Things Industries · 18:34 · 2 years ago

### Energy-aware scheduling algorithms
This core section focuses on scheduling algorithms that explicitly consider energy constraints to maximize throughput, directly relating to the paper's main contributions. It includes algorithmic strategies and complexity results for scheduling under energy harvesting constraints.

*How the paper uses it:* The paper presents novel algorithms and hardness results for energy-aware scheduling with intermittent energy harvesting.

▶ [Energy-Aware Scheduling - Ali Zahir (University of Leicester)](https://www.youtube.com/watch?v=-b-rk7QGh9k) — hpcaiadvisorycouncil · 20:55

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand scheduling problems with energy constraints, starting with basic scheduling theory involving release times and deadlines. Next, it covers energy harvesting models in IoT to grasp the motivation behind intermittent energy availability. Then, it explains approximation algorithms for NP-hard scheduling problems to appreciate the algorithmic challenges and solutions. Finally, it focuses on energy-aware scheduling algorithms, the core concept of the paper, to understand how jobs are scheduled under energy harvesting constraints to maximize throughput.

### Scheduling theory with release times and deadlines *(prerequisite)*
Scheduling theory with release times and deadlines studies how to arrange jobs on a machine so that each job starts after its release time and finishes before its deadline. This foundational model helps understand constraints and objectives in scheduling problems, such as maximizing throughput or minimizing lateness.

*How the paper uses it:* The paper models jobs with release times and due dates as a fundamental scheduling framework.

▶ [3.2 Job Sequencing with Deadlines - Greedy Method](https://www.youtube.com/watch?v=zPtI8q9gvX8) — Abdul Bari · 13:29

### Energy harvesting models in IoT systems *(prerequisite)*
Energy harvesting in IoT systems involves collecting energy from the environment (like light or vibrations) to power devices without batteries. Understanding these models explains why energy availability is intermittent and how it impacts scheduling decisions in batteryless devices.

*How the paper uses it:* The paper is motivated by batteryless IoT devices that harvest energy intermittently, influencing the scheduling constraints.

▶ [IoT Sensors powered by Energy Harvesting](https://www.youtube.com/watch?v=3HkYjjmmvTo) — Würth Elektronik Group · 27:56

### Approximation algorithms for NP-hard scheduling *(prerequisite)*
Approximation algorithms provide near-optimal solutions efficiently for NP-hard scheduling problems where exact solutions are computationally infeasible. Learning these algorithms helps understand the trade-offs and guarantees in scheduling under complex constraints.

*How the paper uses it:* The paper develops a greedy 1/2-approximation and an FPTAS for variants of the energy-aware scheduling problem.

▶ [Lecture 4: Greedy algorithms: Interval scheduling, Huffman ...](https://www.youtube.com/watch?v=FcoPWytQJzo) — Center on Frontiers of Computing Studies, PKU · 49:58

### Energy-aware scheduling algorithms
Energy-aware scheduling algorithms schedule jobs considering energy constraints, such as limited or intermittent energy supply, to optimize objectives like throughput. This concept is central to the paper's goal of scheduling jobs on a machine powered by harvested energy.

*How the paper uses it:* The paper proposes algorithms to schedule jobs under intermittent energy harvesting to maximize total job weight.

▶ [Energy-Aware Scheduling - Ali Zahir (University of Leicester)](https://www.youtube.com/watch?v=-b-rk7QGh9k) — hpcaiadvisorycouncil · 20:55
