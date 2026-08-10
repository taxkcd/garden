---
title: "131 · Quantum Annealing Approaches to Solving the Shipment Rerouting Problems — Fei Li"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fei-li"
source_hash: "aeb0c4aae77a238c98111d7f0189c68190f5748f8e15d56f6226030e060ac404"
sequence: 131
generator: "outreach-garden: managed"
---

# 131 · Quantum Annealing Approaches to Solving the Shipment Rerouting Problems

## At a glance

- **Professor:** Fei Li
- **Institution:** George Mason University
- **Paper:** [Quantum Annealing Approaches to Solving the Shipment Rerouting Problems](https://arxiv.org/pdf/2501.05624)
- **Authors:** Fei Li, Arul Rhik Mazumder, Max Zhao
- **Year:** 2025

## Paper overview

This paper addresses the shipment rerouting problem (SRP), which involves scheduling trucks to transport goods between hubs in a network at minimum cost. The problem is NP-hard and combines sequencing and packing challenges. The authors propose both classical mixed integer programming algorithms and quantum annealing algorithms to solve SRP, including versions with and without a dispatch center. Experiments on real transportation networks show that quantum annealing algorithms achieve near-optimal solutions much faster than classical solvers.

### Why it matters

**Research problem:** The shipment rerouting problem (SRP) requires selecting trucks and scheduling their routes to deliver goods from source hubs to destination hubs in a network while minimizing total cost, considering truck capacities and rental fees. The problem is NP-hard, generalizing sequencing and packing problems, and classical approximation algorithms are lacking.

**Why it matters:** Efficient shipment rerouting has practical applications in vehicle scheduling and transportation logistics, impacting cost savings and operational efficiency. Solving SRP optimally or near-optimally can improve logistics planning in real-world networks.

**Key contributions:**

- Two mixed integer programming formulations for exact classical solutions to SRP.
- Two quantum annealing algorithms based on constrained quadratic models for SRP.
- Extension of formulations to include a dispatch center for trucks.
- Extensive experiments comparing classical and quantum algorithms on multiple real transportation networks.
- Demonstration that quantum annealing algorithms achieve near-optimal solutions faster than classical solvers.

## About the professor

**Fei Li** — Associate Professor, Department of Computer Science, George Mason University.

Research interests: Design and analysis of algorithms: scheduling algorithms; online and approximation algorithms; energy-efficient computing; routing algorithms; job scheduling in computing systems. Quantum algorithms: hybrid quantum algorithms for combinatorial optimization problems

### Research links

- [Faculty/profile page](https://people.cs.gmu.edu/~lifei)
- [Professor website](https://sites.google.com/site/algorithmlabgmu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** combinatorial optimization and integer programming
**The paper assumes:** combinatorial optimization, integer programming, mixed integer linear programming, NP-hardness theory
**Already in this field?** Skip this entirely if you already understand integer programming formulations and combinatorial optimization methods for NP-hard scheduling and routing problems.

This background playlist selection focuses on combinatorial optimization and integer programming, which are essential to understanding the shipment rerouting problem formulations and solution methods in the paper. The rigorous course provides a deep, structured university-level treatment of combinatorial optimization concepts including integer linear programming, while the fast track offers a concise, focused introduction to integer linear programming with practical examples. Readers should pick the rigorous course for comprehensive understanding or the fast track for a quick, practical grasp of the core concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Combinatorial Optimisation (University of Warwick MA252)](https://www.youtube.com/playlist?list=PLtxJg53s2o0PqIAEphtjIaqXTouaWYR0j) — Jonathan Noel · 26 videos · 15.1h across 26 episodes

**Watch only this:** Lectures 19-21: 'Introduction to Integer Linear Programming', 'Totally unimodular matrices and polytopes', and 'Totally Unimodular Matrices from Bipartite Graphs' (about 1 hour 42 minutes total) — these cover integer programming fundamentals and key polyhedral concepts relevant to the paper's formulations.

*Why it unblocks this paper:* This University of Warwick course on combinatorial optimization covers foundational topics including integer linear programming, NP-completeness, and optimization algorithms, directly supporting the paper's focus on mixed integer programming formulations and NP-hardness of the shipment rerouting problem.

*If you want all of it:* All 26 episodes, about 15.1 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intro to Integer Linear Programming](https://www.youtube.com/playlist?list=PLD3fYc0bAjC_iCOOsHZkxosZFDbcA7Kwf) — Joshua Emmanuel · 13 videos · 1.3h across 13 episodes

**Watch only this:** Episodes 1-6: 'Integer Linear Programming - Graphical Method - Optimal Solution, Mixed, Rounding, Relaxation' through 'Solve Integer LP using LINDO (free)' (about 40 minutes total) — these cover the basics of integer programming formulation and solution techniques.

*Why it unblocks this paper:* This concise 13-episode series introduces integer linear programming with clear examples and explanations of binary variables, constraints, and solving methods, providing a practical and accessible overview of the core integer programming concepts used in the paper.

*If you want all of it:* All 13 episodes, about 1.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on quantum annealing approaches to shipment rerouting problems, start with foundational knowledge on the shipment rerouting and vehicle routing problems, as these establish the problem context and challenges. Next, study mixed integer programming formulations to grasp the classical optimization methods used. Then, explore NP-hard combinatorial optimization to appreciate the computational complexity motivating quantum methods. Finally, focus on quantum annealing algorithms, including the authors' own talks and related advanced research presentations, to understand the quantum approaches and their application to the shipment rerouting problem.

### Shipment rerouting problem *(prerequisite)*
This section covers the formulation and challenges of shipment rerouting and vehicle routing problems, which are essential to understand the logistics and combinatorial complexity the paper addresses. The selected video is a rigorous university lecture from IIT Madras, providing an advanced treatment of vehicle routing problems relevant to shipment rerouting.

*How the paper uses it:* Understanding the shipment rerouting problem formulation and challenges is foundational to grasping the paper's contributions.

▶ [Lec-29 Vehicle Routeing Problem](https://www.youtube.com/watch?v=A1wsIFDKqBk) — nptelhrd · 16 years ago

### Vehicle routing and scheduling *(prerequisite)*
This section delves into the practical logistics context and operational challenges of vehicle routing and scheduling, which directly relate to shipment rerouting. The chosen talk is a detailed seminar from a recognized scheduling seminar series, offering advanced insights into vehicle routing optimization.

*How the paper uses it:* Vehicle routing and scheduling provide the practical logistics context for the shipment rerouting problem studied in the paper.

▶ [[Scheduling Seminar] Daniele Vigo (Unibo CIRI-ICT) | One ...](https://www.youtube.com/watch?v=5hxwkxiAS0c) — Scheduling seminar · 1:10:46

### Mixed integer programming formulations *(prerequisite)*
Mixed integer programming (MIP) formulations are the classical optimization approach used in the paper for exact solutions. The selected video is a comprehensive lecture from IIT Madras on advanced operations research, covering MIP applications with sufficient depth for graduate-level understanding.

*How the paper uses it:* The paper develops two classical MIP formulations as exact classical solutions to the shipment rerouting problem.

▶ [Lec 38 - Mixed Integer Linear Programming](https://www.youtube.com/watch?v=oYLI_cmHICU) — nptelhrd · 14 years ago

### NP-hard combinatorial optimization *(prerequisite)*
This section addresses the computational complexity of the shipment rerouting problem, which is NP-hard. The chosen video is a recent seminar talk focused on combinatorial optimization problems in transportation, providing advanced insights into the challenges motivating quantum approaches.

*How the paper uses it:* The shipment rerouting problem is NP-hard, motivating the need for advanced solution methods like quantum annealing.

▶ [[Scheduling seminar] Changhyun Kwon (KAIST/Omelet, Inc ...](https://www.youtube.com/watch?v=pEPck7IL1zo) — Scheduling seminar · 48:52

### Quantum annealing algorithms
Quantum annealing is the central quantum method used in the paper to solve the shipment rerouting problem efficiently. The selected video is a detailed tutorial by D-Wave on using the constrained quadratic model hybrid solver, which aligns closely with the paper's quantum annealing approach and implementation.

*How the paper uses it:* Quantum annealing algorithms form the core quantum approach used to solve the shipment rerouting problem in the paper.

▶ [Using the Constrained Quadratic Model Hybrid Solver ...](https://www.youtube.com/watch?v=qaGUNL28TZg) — D-Wave · 44:25

### Paper authors talk *(the paper's own talk)*
This section features talks by the paper's authors or closely related presentations on quantum annealing applied to logistics and routing problems. The selected webinar by D-Wave and Tecnalia researchers explores quantum annealing for complex logistics routing problems, providing direct insights relevant to the paper's contributions.

*How the paper uses it:* Direct source for the authors' presentation and insights on quantum annealing approaches to shipment rerouting.

▶ [Webinar: Quantum Meets Logistics: A Real-World Routing ...](https://www.youtube.com/watch?v=vm_9wbmhQyA) — D-Wave · 45:42

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the shipment rerouting problem and its challenges in logistics, then explains classical mixed integer programming formulations used for exact solutions, followed by an accessible introduction to quantum annealing algorithms that the paper uses to solve the problem efficiently. The sequence builds foundational understanding of the problem and classical methods before exploring the quantum approach central to the paper's contributions.

### Shipment rerouting problem *(prerequisite)*
Learn what the shipment rerouting problem is: scheduling trucks to deliver goods between hubs in a network while minimizing costs. This involves complex routing and packing challenges similar to vehicle routing problems in logistics. Understanding this sets the stage for why advanced optimization methods are needed.

*How the paper uses it:* The paper focuses on solving the shipment rerouting problem (SRP), which is NP-hard and combines sequencing and packing challenges in transportation logistics.

▶ [Solving the vehicle routing problem for optimizing shipment ...](https://www.youtube.com/watch?v=v9tUEsHD6BE) — Hasgeek TV · 39:19

### Mixed integer programming formulations *(prerequisite)*
Mixed integer programming (MIP) is a classical optimization method that models decision problems with integer and continuous variables under constraints. It is widely used for exact solutions in scheduling and routing problems, providing a baseline for comparing newer quantum methods.

*How the paper uses it:* The authors develop two classical mixed integer programming formulations to solve SRP exactly, serving as a benchmark for their quantum annealing algorithms.

▶ [Mixed Integer Linear Programming (MILP) Tutorial](https://www.youtube.com/watch?v=i8WS6HlE8qM) — APMonitor.com · 10:12

### Quantum annealing algorithms
Quantum annealing is a quantum computing technique designed to solve optimization problems by encoding them into energy landscapes and finding low-energy states efficiently. Hybrid quantum-classical solvers can tackle constrained problems like shipment rerouting faster than classical methods for small instances.

*How the paper uses it:* The paper proposes quantum annealing algorithms based on constrained quadratic models to solve SRP more efficiently than classical solvers.

▶ [Using the Constrained Quadratic Model Hybrid Solver ...](https://www.youtube.com/watch?v=qaGUNL28TZg) — D-Wave · 44:25

## Already in your library

- [16. Complexity: P, NP, NP-completeness, Reductions](https://www.youtube.com/watch?v=eHZifpgyH_4) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the quantum annealing approaches to the shipment rerouting problem (SRP) from the paper. The beginner project reproduces a small-scale classical MIP formulation and solver to grasp the problem structure. The intermediate project implements a simplified quantum annealing CQM formulation and compares it to the classical baseline on a small network. The advanced project extends the quantum annealing approach to explore scalability improvements by reducing variables or adding constraints, addressing a key limitation and future direction from the paper.

### Beginner — Classical MIP Model for Small Shipment Rerouting
*Effort: a weekend, ~8 hours*

You build a classical mixed integer programming (MIP) model for the shipment rerouting problem with up to 3 shipments on a small transportation network. You implement the model using Python and a solver like CPLEX or CBC via PuLP or Pyomo, and solve for minimum cost routing and scheduling. You reproduce a key metric such as total cost and solver runtime for this small instance.

**Why it shows you understood the paper:** This project shows you understand the SRP formulation, constraints, and classical solution approach described in the paper. It demonstrates your ability to translate the problem into a MIP and interpret solver results, foundational to grasping the paper's classical baseline.

**Grounded in:** Two mixed integer programming formulations for exact classical solutions to SRP.

**Tech stack:** Python 3.11, PuLP or Pyomo, CBC or CPLEX solver

**Data:** Simulated small transportation network with 3 shipments, inspired by the paper's experimental setup; no public dataset available so you create a synthetic example with hubs and trucks.

**Build it:**

1. Define a small network graph with hubs and trucks, and specify 3 shipments with source, destination, and demand.
2. Implement the classical MIP formulation constraints ensuring no fractional shipment division and hub loading/unloading rules.
3. Use PuLP or Pyomo to encode the model and solve it with CBC or CPLEX.
4. Extract and report the total cost and solver runtime.
5. Document the model, constraints, and results in a README.

**Ships as:** A GitHub repo with Python code implementing the classical MIP for SRP on a small example, solver output showing optimal shipment routing and cost, and a README explaining the model and results.

**Stretch goal:** Add visualization of shipment routes on the network graph to illustrate the solution.

### Intermediate — Quantum Annealing CQM Model for Shipment Rerouting
*Effort: 1-2 weekends, ~20 hours*

You reimplement the core quantum annealing approach using constrained quadratic models (CQM) for SRP with up to 5 shipments on a small network. You encode the problem constraints and objective as a CQM and solve it using D-Wave's LeapHybridCQMSampler or its Python SDK. You compare solution quality and runtime against your classical MIP baseline from the beginner project.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's quantum annealing formulation into code and understand the constrained quadratic modeling approach. Comparing quantum and classical results shows comprehension of the paper's key experimental findings.

**Grounded in:** Two quantum annealing algorithms based on constrained quadratic models for SRP. Quantum annealing algorithms achieve near-optimal solutions much faster than classical solvers.

**Tech stack:** Python 3.11, D-Wave Ocean SDK (LeapHybridCQMSampler)

**Data:** Use the same synthetic small transportation network with up to 5 shipments as in the beginner project, extended to test quantum annealing scalability.

**Build it:**

1. Study the paper's CQM formulation and constraints for SRP.
2. Implement the CQM model encoding the shipment rerouting problem using D-Wave Ocean SDK.
3. Run the LeapHybridCQMSampler to solve the problem on the synthetic network.
4. Compare the quantum annealing solution cost and runtime to the classical MIP baseline.
5. Document the implementation details, comparison results, and insights.

**Ships as:** A GitHub repo with Python code implementing the quantum annealing CQM model for SRP, scripts to run and compare against classical MIP, and a README reporting solution quality and runtime comparisons.

**Stretch goal:** Experiment with adding a dispatch center constraint to the CQM model and observe effects on runtime and solution quality.

### Advanced — Scalability Improvements for Quantum Annealing on SRP
*Effort: 3+ weeks*

You develop and test new constrained quadratic model formulations for SRP that reduce the number of variables and constraints, aiming to improve scalability beyond 5 shipments. You explore adding additional constraints to narrow the search space or design problem decompositions inspired by the paper's future directions. You benchmark your improved quantum annealing models against the baseline CQM on synthetic larger shipment sets.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of the quantum annealing approach and its bottlenecks. It demonstrates your ability to innovate on the formulation and evaluate improvements quantitatively.

**Grounded in:** Limitations: Formulations still have large numbers of variables and constraints, limiting scalability. Future directions: Design formulations with fewer variables and constraints to improve scalability. Explore narrowing the search space further by introducing additional constraints.

**Tech stack:** Python 3.11, D-Wave Ocean SDK, Optimization libraries (e.g., NetworkX for graph processing)

**Data:** Synthetic transportation networks with 6-10 shipments generated to test scalability improvements; no public dataset available.

**Build it:**

1. Analyze the original CQM formulation to identify variables and constraints contributing most to scaling issues.
2. Design alternative formulations or add constraints to reduce variable count or prune the search space.
3. Implement the improved CQM models using D-Wave Ocean SDK.
4. Generate synthetic larger shipment problem instances for testing.
5. Benchmark solution quality and runtime against the baseline quantum annealing model.
6. Document methodology, results, and discuss scalability implications.

**Ships as:** A GitHub repo containing improved quantum annealing formulations for SRP, benchmarking scripts, synthetic datasets, and a detailed README discussing scalability improvements and limitations.

**Stretch goal:** Investigate hybrid classical-quantum branch-and-price frameworks or variational quantum optimization methods as alternative solution approaches.
