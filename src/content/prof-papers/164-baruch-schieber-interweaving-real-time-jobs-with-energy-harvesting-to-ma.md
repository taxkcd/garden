---
title: "164 · Interweaving Real-Time Jobs with Energy Harvesting to Maximize Throughput — Baruch Schieber"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-baruch-schieber"
source_hash: "44a32aaa54b9ec5691268c6fb518b9ee3c5a357616926ac8861a0b73d0009592"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Scheduling Theory and Approximation Algorithms
**The paper assumes:** combinatorial scheduling theory, approximation algorithms, NP-hardness proofs, dynamic programming for scheduling
**Already in this field?** Skip this entirely if you already have a solid understanding of combinatorial scheduling problems and approximation algorithms in theoretical computer science.

This background focuses on scheduling theory and approximation algorithms, essential for understanding the paper's models, algorithms, and hardness results in energy-aware scheduling. The rigorous course option offers a deep, structured university-level treatment of approximation algorithms and scheduling concepts, while the fast track provides a concise, accessible introduction to key algorithm design and complexity topics for quicker preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.046J Design and Analysis of Algorithms, Spring 2015](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp) — MIT OpenCourseWare · 34 videos · 39.5h across 34 episodes

**Watch only this:** Episodes 1 (Course Overview, Interval Scheduling), 12 (Greedy Algorithms), 15 (Linear Programming: LP, reductions, Simplex), 16 (Complexity: P, NP, NP-completeness, Reductions), 17 (Complexity: Approximation Algorithms); about 5.75 hours total

*Why it unblocks this paper:* MIT 6.046J Design and Analysis of Algorithms covers interval scheduling, greedy algorithms, dynamic programming, NP-completeness, and approximation algorithms, directly relevant to the paper's scheduling problems and algorithmic techniques.

*If you want all of it:* All 34 episodes, about 39.5 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Analysis of Algorithms](https://www.youtube.com/playlist?list=PLgPbN3w-ia_MzatWGASfuPg9hon_Fsz1V) — Professor Bryce · 25 videos · 10.7h across 25 episodes

**Watch only this:** Episodes 8 (Greedy Stays Ahead), 9 (Greedy Exchange Arguments), 14 (Dynamic Programming), 22 (Verifiers and the Class NP), 23 (NP Completeness), 24 (Hamiltonian Cycle is NP-Complete); about 2.5 hours total

*Why it unblocks this paper:* Professor Bryce's Analysis of Algorithms playlist offers clear, focused explanations on greedy algorithms, dynamic programming, NP-completeness, and approximation algorithms, providing a concise yet solid foundation for the paper's key algorithmic concepts.

*If you want all of it:* All 25 episodes, about 10.7 hours

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for you to demonstrate understanding of the paper's core scheduling problem and algorithms. The beginner project reproduces the polynomial-time optimal algorithm for unweighted jobs with identical release times and due dates, using your existing programming skills. The intermediate project implements the greedy 1/2-approximation algorithm for arbitrary release times and due dates, adding algorithmic complexity and comparison against a baseline. The advanced project tackles a stated future direction by extending the model to handle online scheduling with unpredictable energy harvesting, exploring practical algorithm design beyond the paper's offline assumptions.

### Beginner — Optimal Scheduling for Identical Release and Due Dates
*Effort: a weekend, ~8 hours*

You build a command-line program that implements the polynomial-time dynamic programming algorithm for scheduling unweighted unit-time jobs with identical release times and due dates under energy harvesting constraints. The program takes a small synthetic job set and energy harvesting profile as input and outputs an optimal schedule maximizing throughput.

**Why it shows you understood the paper:** This project shows you understood the core problem formulation and the optimal dynamic programming approach for the simplest variant, demonstrating ability to translate the paper's algorithm into working code.

**Grounded in:** Sect. 2 gives an optimal polynomial time dynamic programming algorithm for EAS when all jobs have identical release times and due dates.

**Tech stack:** Python 3.11

**Data:** Synthetic data you generate: a small set of unit-time jobs with identical release times and due dates, and an energy harvesting profile specifying energy availability in idle slots.

**Build it:**

1. Implement data structures to represent jobs (with release time, due date, energy need, weight) and energy harvesting profile.
2. Implement the dynamic programming algorithm described in Sect. 2 to compute the optimal schedule for unweighted jobs with identical release times and due dates.
3. Create a small synthetic dataset of jobs and energy harvesting slots to test the algorithm.
4. Run the algorithm on the dataset and output the scheduled jobs and total throughput.
5. Write a README explaining the problem, the algorithm, and instructions to run the code.

**Ships as:** A Python script with example input and output demonstrating the optimal schedule and throughput, plus a README explaining the implementation and problem context.

**Stretch goal:** Add visualization of the schedule timeline showing job execution and energy harvesting slots.

### Intermediate — Greedy 1/2-Approximation Scheduling with Arbitrary Release and Due Dates
*Effort: 1-2 weekends, ~15 hours*

You implement the greedy 1/2-approximation algorithm for scheduling unweighted unit-time jobs with arbitrary release times and due dates under energy harvesting constraints. You generate or simulate a dataset of jobs with varying release/due dates and compare your greedy solution's throughput against a naive baseline (e.g., earliest deadline first without energy awareness).

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's approximation algorithm for the more complex, NP-hard variant, and your ability to evaluate algorithmic performance against a baseline metric.

**Grounded in:** Sect. 4 presents a greedy 1/2-approximation algorithm for EAS with arbitrary release times and due dates.

**Tech stack:** Python 3.11

**Data:** Synthetic dataset simulating jobs with arbitrary release times and due dates, unit processing times, and an energy harvesting profile; no public dataset available so you simulate data consistent with the paper's problem setting.

**Build it:**

1. Implement data structures for jobs with arbitrary release times, due dates, energy needs, and weights (unweighted in this case).
2. Implement the greedy 1/2-approximation algorithm as described in Sect. 4.
3. Implement a baseline scheduling algorithm (e.g., earliest deadline first ignoring energy constraints).
4. Generate synthetic datasets with varying job parameters and energy harvesting profiles.
5. Run both algorithms on the datasets, compute and compare total throughput achieved.
6. Document the implementation, comparison results, and insights in a README.

**Ships as:** A Python project with scripts to run the greedy and baseline algorithms on synthetic data, output throughput comparisons, and a README discussing the approximation guarantee and empirical performance.

**Stretch goal:** Add parameterized experiments varying job density and energy availability to analyze approximation quality.

### Advanced — Online Energy-Aware Scheduling with Unpredictable Harvesting
*Effort: 3-4 weeks*

You design and implement an online scheduling algorithm that adapts to dynamically arriving jobs and unpredictable energy harvesting profiles, addressing a key limitation and future direction of the paper. You simulate an online environment where jobs and energy arrivals are revealed over time, and evaluate your algorithm's throughput compared to offline greedy scheduling.

**Why it shows you understood the paper:** This project tackles a stated open problem from the paper, showing your ability to extend the model beyond offline assumptions and design practical algorithms for real-world batteryless IoT scenarios.

**Grounded in:** Future direction: Study online versions where energy harvesting profile or jobs arrive dynamically.

**Tech stack:** Python 3.11

**Data:** Synthetic online job streams and stochastic energy harvesting profiles simulated to mimic intermittent energy availability and job arrivals over time.

**Build it:**

1. Design an online scheduling algorithm that makes decisions based only on current and past information about jobs and energy harvesting.
2. Implement a simulator that generates jobs and energy harvesting events over time, revealing them incrementally.
3. Implement the online scheduling algorithm and an offline greedy baseline for comparison.
4. Run simulations to evaluate throughput and analyze performance trade-offs.
5. Write a detailed README explaining the online model, algorithm design, simulation setup, and results.

**Ships as:** A Python simulation framework with online scheduling implementation, comparative results against offline baselines, and a comprehensive README discussing challenges and insights.

**Stretch goal:** Incorporate simple machine learning prediction of energy harvesting patterns to improve online scheduling decisions.
