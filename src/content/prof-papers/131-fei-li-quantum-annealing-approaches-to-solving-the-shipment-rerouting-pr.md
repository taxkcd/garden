---
title: "131 · Quantum Annealing Approaches to Solving the Shipment Rerouting Problems — Fei Li"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fei-li"
source_hash: "030317df5885b527715b4092913c59cde99388124dc24180e91b14fc0b2bba4f"
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
