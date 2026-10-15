---
title: "641 · High Quality Circuit-Based 3-SAT Mappings for Oscillator Ising Machines — Jaijeet S. Roychowdhury"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jaijeet-s-roychowdhury"
source_hash: "cf1ab910f561c521463a52178c4e2abff618f37f6af2b671f02a46df57aa2c79"
sequence: 641
generator: "outreach-garden: managed"
---

# 641 · High Quality Circuit-Based 3-SAT Mappings for Oscillator Ising Machines

## At a glance

- **Professor:** Jaijeet S. Roychowdhury
- **Institution:** Univ. of California - Berkeley
- **Paper:** [High Quality Circuit-Based 3-SAT Mappings for Oscillator Ising Machines](https://jaijeet.github.io/research/PDFs//2024-06--UCNC2024--PavanSumanthEtAl--3ORmapping-for-SAT-paper.pdf)
- **Authors:** Venkata Pavan Sumanth Sikhakollu, Shreesha Sreedhara, Rajit Manohar, Alan Mishchenko, Jaijeet Roychowdhury
- **Year:** 2024

## Paper overview

This paper addresses the challenge of solving 3-SAT problems, a type of difficult combinatorial optimization problem, using Oscillator Ising Machines (OIMs). The authors analyze existing methods for converting 3-SAT problems into a form suitable for OIMs and propose two new techniques that significantly improve the success rate of OIMs in solving these problems. They also introduce a novel circuit-based mapping method called 3OR that achieves the highest success rates reported so far. The paper compares OIM performance with simulated annealing, showing OIM's superiority.

### Why it matters

**Research problem:** How to effectively map 3-SAT problems into Ising model form to maximize the success rate of Oscillator Ising Machines in solving these NP-hard combinatorial optimization problems.

**Why it matters:** 3-SAT is a fundamental NP-hard problem with broad applications in formal verification, AI, and optimization. Efficiently solving 3-SAT using hardware Ising machines like OIMs could lead to faster, energy-efficient solutions for complex computational problems.

**Key contributions:**

- Two novel techniques (Level-Based Gate Scaling and Iterative Gate Scaling) that improve OIM success rates on logic-synthesis-based 3-SAT mappings from 0% to about 56%.
- A new circuit-based 3-SAT-to-Ising mapping scheme (3OR) using 3-input OR gates that achieves a 95.9% success rate on the SATLIB uf20 benchmark, outperforming prior mappings.
- A comparative analysis showing that OIM outperforms simulated annealing on Ising-mapped 3-SAT problems.
- Demonstration that 3OR mapping requires fewer hardware resources (spins and couplings) than other mappings.

## About the professor

**Jaijeet S. Roychowdhury** — Professor, EECS, Univ. of California - Berkeley.

Research interests: machine learning, novel computational paradigms, and the analysis, simulation, verification and design of cyber-physical, electronic, biological, nanoscale and mixed-domain systems

### Research links

- [Faculty/profile page](https://www2.eecs.berkeley.edu/Faculty/Homepages/jr.html)
- [Professor website](https://jaijeet.github.io/)
- [Resolved homepage](https://jaijeet.github.io/jrpages/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Ising model and combinatorial optimization
**The paper assumes:** Ising model, combinatorial optimization, NP-hard problem formulation, spin glass physics, and energy-based problem encoding
**Already in this field?** Skip this entirely if you already understand the Ising model and how combinatorial optimization problems like 3-SAT are encoded as Ising Hamiltonians for solution by specialized hardware or algorithms.

To understand the core concepts behind mapping 3-SAT problems into the Ising model and the optimization techniques used in Oscillator Ising Machines, a solid grasp of optimization theory and Ising model fundamentals is essential. The rigorous course option offers a deep dive into convex optimization principles relevant to combinatorial optimization, while the fast track provides a more accessible introduction to optimization theory and algorithms, suitable for quickly gaining the necessary background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1-7, about 9.2 hours — covering introduction, convex sets, functions, optimization problems, and optimality conditions to build a foundation for understanding Ising model mappings and optimization.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a comprehensive university-level course that covers optimization problems, including convex sets and functions, optimality conditions, and interior-point methods, which underpin the mathematical framework for understanding Ising model optimization and combinatorial problem mappings.

*If you want all of it:* 23.7 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Optimization Theory and Algorithms - Prof. Uday Khankhoje](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8XNc8SxMLbUxdR7lDSuIGw) — NPTEL-NOC IITM · 83 videos · 19.4h across the first 60 episodes

**Watch only this:** Episodes 1-10, about 3.2 hours — covering course introduction, types of problems, and essential background in linear algebra and calculus needed for understanding optimization in Ising models.

*Why it unblocks this paper:* The NPTEL-NOC IITM series 'Optimization Theory and Algorithms' by Prof. Uday Khankhoje offers concise, clear explanations of optimization fundamentals and algorithms, providing a practical and quicker route to grasping the optimization concepts relevant to Ising model problem solving.

*If you want all of it:* 19.4 hours across the first 60 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on high-quality circuit-based 3-SAT mappings for Oscillator Ising Machines, start with foundational knowledge on the 3-SAT problem and NP-completeness to grasp the computational complexity involved. Next, study the Ising model as a mathematical framework for combinatorial optimization and logic synthesis techniques that underpin the proposed mappings. Finally, focus on the core concept of Oscillator Ising Machines and the authors' own talks to directly connect theory with their novel contributions and results.

### 3-SAT Problem and NP-Completeness *(prerequisite)*
Understanding the 3-SAT problem and its NP-completeness is essential as it forms the computational challenge addressed by the paper. This section covers the complexity and structure of 3-SAT, providing the theoretical background necessary to appreciate the difficulty of mapping and solving these problems.

*How the paper uses it:* The paper focuses on improving mappings for 3-SAT problems, so a solid grasp of 3-SAT complexity is foundational.

▶ [F2021 CS 411/811 Lecture 38 (NP-completeness, SAT, 3SAT ...](https://www.youtube.com/watch?v=M2QBMCW4xeY) — Dr. Daniel Page [CS University Lectures] · 1:02:51

### Ising Model for Combinatorial Optimization *(prerequisite)*
The Ising model is the fundamental mathematical framework used to represent combinatorial optimization problems like 3-SAT in a form suitable for hardware solvers. This section explains how spins and couplings model problem constraints and solutions.

*How the paper uses it:* The paper maps 3-SAT problems into the Ising model to leverage Oscillator Ising Machines for solving them.

▶ [INQA Seminar: Massoud Pedram, University of Southern ...](https://www.youtube.com/watch?v=goMehE40Btc) — INQA · 41:25

### Logic Synthesis and Circuit Mapping Techniques *(prerequisite)*
Logic synthesis and circuit mapping techniques are crucial for understanding how the paper improves 3-SAT to Ising mappings. This section covers the design and optimization of logic circuits, which directly relates to the proposed gate scaling and circuit-based mappings.

*How the paper uses it:* The paper proposes enhancements to logic-synthesis-based mappings and a new circuit-based mapping scheme.

▶ [Overview of VLSI Design Flow - III](https://www.youtube.com/watch?v=3uujV3nJvNM) — NPTEL-NOC IITM · 43:02

### Oscillator Ising Machines
Oscillator Ising Machines (OIMs) are the central computational paradigm used in the paper to solve 3-SAT problems. This section explains the physical and computational principles behind OIMs and their role in combinatorial optimization.

*How the paper uses it:* The paper evaluates OIM performance on various 3-SAT to Ising mappings and demonstrates their superiority over simulated annealing.

▶ [How an Ising machine solves the traveling salesman problem](https://www.youtube.com/watch?v=GlXUZFRVq1w) — MIT Lincoln Laboratory · 7 yr ago

### Paper Authors Talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper's authors provide the most precise and detailed explanation of their novel 3-SAT to Ising mappings and experimental results. This section offers insights into their methodology, contributions, and future directions.

*How the paper uses it:* This is the authors' own presentation of their work on high-quality circuit-based 3-SAT mappings for Oscillator Ising Machines.

▶ [mod12lec60 - #3SAT is in IP](https://www.youtube.com/watch?v=BuXQFdBr60A) — NPTEL-NOC IITM · 5 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand how the paper maps 3-SAT problems to Ising models and solves them using Oscillator Ising Machines (OIMs). It starts with the basics of the 3-SAT problem and NP-completeness, then covers the Ising model for combinatorial optimization, followed by logic synthesis and circuit mapping techniques. Finally, it explains Oscillator Ising Machines, the core computational paradigm used in the paper.

### 3-SAT Problem and NP-Completeness *(prerequisite)*
Learn what the 3-SAT problem is and why it is a fundamental NP-complete problem in computer science. Understanding its computational complexity and structure is essential to grasp why specialized hardware like Ising machines are used to solve it.

*How the paper uses it:* The paper focuses on solving 3-SAT problems efficiently using hardware Ising machines.

▶ [F2021 CS 411/811 Lecture 38 (NP-completeness, SAT, 3SAT ...](https://www.youtube.com/watch?v=M2QBMCW4xeY) — Dr. Daniel Page [CS University Lectures] · 1:02:51

### Ising Model for Combinatorial Optimization *(prerequisite)*
Understand the Ising model, a mathematical framework originally from physics, which can represent combinatorial optimization problems like 3-SAT. This model forms the basis for mapping logical problems into hardware-friendly forms.

*How the paper uses it:* The paper maps 3-SAT problems into Ising models to leverage Oscillator Ising Machines for solving them.

▶ [The Quanfluence Ising Machine for Combinatorial Optimization (with demos)](https://www.youtube.com/watch?v=wwOPexzsVi4) — Quanfluence · 1 yr ago

### Logic Synthesis and Circuit Mapping Techniques *(prerequisite)*
Explore how logic synthesis transforms high-level logical expressions into optimized circuit representations. Circuit mapping techniques are crucial for converting 3-SAT clauses into hardware circuits that can be translated into Ising models.

*How the paper uses it:* The paper improves existing logic-synthesis-based mappings and proposes a new circuit-based 3-SAT-to-Ising mapping.

▶ [Overview of VLSI Design Flow - III](https://www.youtube.com/watch?v=3uujV3nJvNM) — NPTEL-NOC IITM · 43:02

### Oscillator Ising Machines
Learn about Oscillator Ising Machines, which use networks of coupled oscillators to find low-energy states of Ising models, effectively solving combinatorial optimization problems. This hardware paradigm is central to the paper's approach.

*How the paper uses it:* The paper evaluates the performance of Oscillator Ising Machines on various 3-SAT-to-Ising mappings.

▶ [How an Ising machine solves the traveling salesman problem](https://www.youtube.com/watch?v=GlXUZFRVq1w) — MIT Lincoln Laboratory · 7 yr ago

## Already in your library

- [15. NP-Completeness](https://www.youtube.com/watch?v=iZPzBHGDsWI) — also for: Degree Realization by Bipartite Multigraphs (Amotz Bar-Noy)
- [8. NP-Hard and NP-Complete Problems](https://www.youtube.com/watch?v=e2cF8a5aAhE) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [DVD - Lecture 3: Logic Synthesis - Part 1](https://www.youtube.com/watch?v=4BZ6t2d3rJM) — also for: An Extended Study of Gear-Ratio-Aware Standard Cell Layout Generation for DTCO Exploration (Chung-Kuan Cheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's contributions on 3-SAT mappings for Oscillator Ising Machines (OIMs). The beginner project reproduces a key metric from the paper using familiar tools, the intermediate project implements the core 3OR mapping method and compares it to a baseline, and the advanced project explores a stated limitation by investigating hardware implementation challenges or annealing parameter tuning.

### Beginner — Simulate OIM Success Rate Improvement with Level-Based Gate Scaling
*Effort: a weekend, ~8 hours*

You build a Python simulation that models the success rate improvement of Oscillator Ising Machines on 3-SAT problems using Level-Based Gate Scaling (LGS). You replicate the reported success rate increase from 0% to about 56% on a small set of uf20 benchmark instances by implementing a simplified version of the LGS technique.

**Why it shows you understood the paper:** This project shows you understand how logic-synthesis-based mappings can be enhanced to improve OIM performance and can reproduce a key quantitative result from the paper.

**Grounded in:** OIM success rate on uf20 problems improved from 0% (ABC mapping without scaling) to 55.6% with Level-Based Gate Scaling.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use a small subset of the SATLIB uf20 benchmark problems as described in the paper; if unavailable, generate small random 3-SAT instances with 20 variables and 91 clauses to simulate.

**Build it:**

1. Implement a basic 3-SAT to Ising mapping using the ABC logic synthesis approach.
2. Implement the Level-Based Gate Scaling technique to adjust Ising model weights based on gate levels.
3. Simulate OIM success rates by running multiple trials per instance and record success/failure.
4. Plot the success rate improvement with and without Level-Based Gate Scaling.
5. Write a README explaining the simulation setup, results, and relation to the paper.

**Ships as:** A GitHub repo with a Jupyter notebook that simulates OIM success rates on uf20 3-SAT problems, demonstrating the effect of Level-Based Gate Scaling with plots and explanations.

**Stretch goal:** Add Iterative Gate Scaling simulation to compare its effect on success rates and computational effort.

### Intermediate — Implement and Evaluate the 3OR Circuit-Based 3-SAT-to-Ising Mapping
*Effort: 1-3 weekends, ~20 hours*

You implement the 3OR circuit-based 3-SAT-to-Ising mapping method described in the paper from scratch in Python. You simulate OIM performance on a small set of uf20 benchmark problems and compare the success rate and hardware resource usage (spins and couplings) against the Chancellor mapping as a baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core novel mapping technique and quantitatively evaluate its advantages, showing deep comprehension of the mapping's design and impact on OIM performance.

**Grounded in:** A new circuit-based 3-SAT-to-Ising mapping scheme (3OR) using 3-input OR gates that achieves a 95.9% success rate on the SATLIB uf20 benchmark, outperforming prior mappings.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use the SATLIB uf20 benchmark 3-SAT instances or generate equivalent 3-SAT problems with 20 variables and 91 clauses for evaluation.

**Build it:**

1. Study the 3OR mapping method from the paper and design data structures to represent 3-input OR gates and their Ising model equivalents.
2. Implement the 3OR mapping to convert 3-SAT clauses into Ising spins and couplings.
3. Implement or reuse a simple OIM simulation to estimate success rates on the mapped problems.
4. Implement the Chancellor mapping as a baseline for comparison.
5. Run simulations on uf20 instances and compare success rates and hardware resource metrics (number of spins and couplings).
6. Document the implementation, results, and comparison in a detailed README.

**Ships as:** A GitHub repo with Python code implementing 3OR and Chancellor mappings, OIM simulation scripts, and a report comparing success rates and hardware efficiency on uf20 problems.

**Stretch goal:** Extend the implementation to uf50 benchmark problems and analyze scaling behavior.

### Advanced — Explore Hardware Implementation Challenges and Annealing Parameter Tuning for 3OR Mapping on OIMs
*Effort: a few weeks, ~40+ hours*

You investigate one of the paper's stated limitations by simulating the impact of annealing profiles and parameter tuning on the performance of the 3OR mapping in Oscillator Ising Machines. Additionally, you analyze the computational and energy costs of Iterative Gate Scaling in a hardware context, proposing optimizations or alternative approaches to reduce overhead.

**Why it shows you understood the paper:** This project tackles open questions from the paper, demonstrating your ability to extend the research by addressing practical hardware challenges and performance tuning, which could lead to meaningful insights or improvements beyond the original simulations.

**Grounded in:** Limitations: Iterative Gate Scaling increases time and energy consumption; future directions include studying annealing profiles and hardware implementations to validate simulation results.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook, Optional: PyTorch or other numerical libraries for optimization

**Data:** Use SATLIB uf20 or uf50 benchmark 3-SAT instances or generate equivalent data for simulation experiments.

**Build it:**

1. Implement or extend the 3OR mapping and OIM simulation to include annealing schedule parameters.
2. Design experiments to vary annealing profiles (e.g., temperature schedules, iteration counts) and measure success rates and convergence times.
3. Model the computational and energy costs of Iterative Gate Scaling based on iteration counts and problem executions.
4. Analyze trade-offs between success rate improvements and hardware resource/time overhead.
5. Propose and simulate potential optimizations to reduce overhead or improve annealing efficiency.
6. Document findings, challenges, and suggestions for hardware implementation in a comprehensive report.

**Ships as:** A GitHub repo with extended simulation code exploring annealing parameter effects and Iterative Gate Scaling costs, accompanied by a detailed analysis report discussing hardware implementation challenges and optimization ideas.

**Stretch goal:** Collaborate with hardware simulation tools or FPGA emulators to prototype the 3OR mapping implementation and validate simulation assumptions.

_The paper does not provide released code or direct access to benchmark datasets; you will need to rely on publicly available SATLIB uf20/uf50 benchmarks or generate synthetic 3-SAT instances approximating those benchmarks._
