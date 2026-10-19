---
title: "797 · Equivalence Checking for Flow-Based Computing using Iterative SAT Solving — Muhammad Rashedul Haq Rashed"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-muhammad-rashedul-haq-rashed"
source_hash: "170c14039f9ac875010b481f70aa72be5c95e77ef162a4249c28a59ebc3b5247"
sequence: 797
generator: "outreach-garden: managed"
---

# 797 · Equivalence Checking for Flow-Based Computing using Iterative SAT Solving

## At a glance

- **Professor:** Muhammad Rashedul Haq Rashed
- **Institution:** University of Texas at Arlington
- **Paper:** [Equivalence Checking for Flow-Based Computing using Iterative SAT Solving](https://dl.acm.org/doi/pdf/10.1145/3676536.3676721)
- **Authors:** Sven Thijssen, Muhammad Rashedul Haq Rashed, Md Rubel Ahmed, Suraj Singireddy, Sumit Kumar Jha, Rickard Ewetz
- **Year:** 2024

## Paper overview

This paper addresses the challenge of verifying the functional correctness of flow-based computing circuits, which use bidirectional non-volatile memory devices and form undirected graphs with cycles. Traditional equivalence checking methods based on SAT solving fail due to these cycles. The authors propose FlowSAT, a novel SAT-based framework that introduces arrow variables to assign directions dynamically and iteratively eliminates cycles by adding constraints. This approach significantly reduces the problem size and improves verification speed, successfully verifying all tested benchmarks faster than previous methods.

### Why it matters

**Research problem:** How to perform equivalence checking for flow-based computing circuits that have bidirectional devices causing cycles in the computational graph, which breaks traditional SAT-based equivalence checking methods.

**Why it matters:** Flow-based computing is a promising energy-efficient in-memory computing paradigm for accelerating Boolean logic, but verifying the correctness of such circuits is critical to ensure reliability. Existing verification methods do not scale well or fail due to the bidirectional and cyclic nature of these circuits.

**Key contributions:**

- Introduction of arrow variables to dynamically assign directionality in bidirectional flow-based computing circuits.
- An iterative SAT solving algorithm that detects and bans cycles incrementally to handle cycles longer than length 2.
- A concise SAT formulation with significantly fewer variables and clauses compared to prior bounded model checking approaches.
- Comprehensive experimental evaluation demonstrating superior scalability and speed over state-of-the-art methods.

## About the professor

**Muhammad Rashedul Haq Rashed** — University of Texas at Arlington.

### Research links

- [Faculty/profile page](https://mrhrashed.github.io/)
- [Google Scholar](https://scholar.google.com/scholar)
- [DBLP](https://dblp.org/pid/304/0626)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** SAT solving and Boolean satisfiability
**The paper assumes:** Boolean satisfiability problem, SAT solving algorithms, CNF formulas, constraint encoding, iterative SAT solving techniques
**Already in this field?** Skip this entirely if you already understand Boolean satisfiability problems and how SAT solvers work, including iterative constraint addition and CNF encoding.

To understand the core SAT solving techniques and Boolean satisfiability concepts underlying the FlowSAT framework in this paper, two background options are provided. The rigorous course offers a deep, structured university-level introduction to machine learning and related algorithmic foundations, including optimization and constraint solving concepts relevant to SAT. The fast track is a concise, focused playlist of short explainer videos on SAT Math, providing quick intuition and essential tips for understanding problem-solving strategies related to satisfiability and constraints, suitable for a rapid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-6, about 7.9 hours — covering introduction, linear regression, logistic regression, and support vector machines to understand optimization and constraint satisfaction basics relevant to SAT solving.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a rigorous, authoritative university course covering machine learning fundamentals, including optimization and constraint-based problem solving that underpin SAT solving techniques. Its broad and deep coverage helps build a strong theoretical foundation relevant to iterative SAT solving and equivalence checking.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [7 PERFECT 800 Tips for SAT Math](https://www.youtube.com/playlist?list=PLZBnAG03572qwtV6Cmijpsha0P5R_k1f6) — Scalar Learning · 7 videos · 0.2h across 7 episodes

**Watch only this:** All 7 episodes, about 0.2 hours — a quick, focused introduction to key SAT math problem-solving tips relevant for understanding Boolean satisfiability and iterative solving.

*Why it unblocks this paper:* The '7 PERFECT 800 Tips for SAT Math' playlist offers concise, clear, and well-produced short videos that quickly build intuition on problem-solving strategies involving constraints and logical reasoning, which parallels the skills needed to grasp SAT solving concepts in the paper.

*If you want all of it:* 0.2 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Equivalence Checking for Flow-Based Computing using Iterative SAT Solving,' start by building a foundation in the key prerequisite areas: flow-based computing circuits, cycle detection in graphs, Boolean equivalence checking, and SAT formulation for hardware verification. These topics provide the necessary background on the circuit paradigm, the graph-theoretic challenges, the verification problem, and the SAT-based methods used. Finally, focus on the core concept of the paper itself, the FlowSAT iterative SAT solving approach, ideally through the authors' own talk or a closely related advanced presentation.

### Cycle detection in graphs *(prerequisite)*
Cycle detection in directed graphs is a fundamental graph algorithmic problem relevant to the paper's approach. The paper iteratively detects and bans cycles in the computational graph to enable equivalence checking. Understanding standard cycle detection algorithms provides insight into the challenges and solutions proposed.

*How the paper uses it:* FlowSAT iteratively detects and bans cycles in the directed graph formed by assigning directions to edges, making cycle detection central to the method.

▶ [6.8 Cycle detection in Directed Graph |Data Structures and Algorithms Tutorials](https://www.youtube.com/watch?v=AK7BuT5MgU0) — Jenny's Lectures CS IT · 10:36 · 7y ago

### Boolean equivalence checking *(prerequisite)*
Boolean equivalence checking is the core verification problem the paper aims to solve for flow-based computing circuits. This topic covers formal methods and techniques to verify that two Boolean circuits implement the same function, which is foundational to understanding the paper's motivation and evaluation.

*How the paper uses it:* The paper proposes a novel equivalence checking method tailored for flow-based computing circuits with cycles.

▶ [LECTURE 25 Equivalence Checking Formal Verification](https://www.youtube.com/watch?v=Ff5TX3B7Zcg) — KNOWLEDGE TREE · 1:18:48 · 9y ago

### SAT formulation for hardware verification *(prerequisite)*
SAT-based methods are widely used in hardware verification. Understanding how SAT formulations are constructed and used to verify hardware designs is crucial to grasping the paper's approach, which innovates on SAT encoding to handle cycles efficiently.

*How the paper uses it:* FlowSAT introduces a concise SAT formulation with arrow variables and iterative constraints to handle cycles in flow-based circuits.

▶ [SAT-based Techniques for Optimization and Synthesis.](https://www.youtube.com/watch?v=7tzqRtAOkfs) — Microsoft Research · 58:40 · 10y ago

### SAT solving iterative algorithms
The paper's main technical contribution is an iterative SAT solving algorithm that incrementally bans cycles by adding constraints. Understanding iterative SAT solving techniques and their theoretical underpinnings helps in appreciating how FlowSAT improves scalability and efficiency.

*How the paper uses it:* FlowSAT uses an iterative SAT solving approach to dynamically assign directions and ban cycles until the graph is acyclic.

▶ [Towards an (Experimental) Understanding of SAT Solvers](https://www.youtube.com/watch?v=ZNghg_yz76Y) — Simons Institute for the Theory of Computing · 41:29 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FlowSAT paper, start by learning about flow-based computing circuits and their bidirectional, cyclic nature. Then, grasp the fundamentals of cycle detection in graphs, which is crucial for handling cycles in these circuits. Next, study Boolean equivalence checking as the core verification problem. After that, explore SAT formulation techniques for hardware verification to appreciate how FlowSAT encodes the problem efficiently. Finally, delve into iterative SAT solving algorithms to understand how FlowSAT incrementally bans cycles for scalable equivalence checking.

### Flow-based computing circuits *(prerequisite)*
Flow-based computing circuits use bidirectional non-volatile memory devices forming undirected graphs with cycles, which differ from traditional unidirectional circuits. Understanding their structure and bidirectionality is essential to grasp why conventional verification methods fail and why FlowSAT introduces directionality dynamically.

*How the paper uses it:* The paper targets equivalence checking of flow-based computing circuits characterized by bidirectional edges and cycles.

▶ [Understanding Logic Gates](https://www.youtube.com/watch?v=INEtYZqtjTo) — Spanning Tree · 7:28 · 6y ago

### Cycle detection in graphs *(prerequisite)*
Cycle detection in directed graphs involves algorithms like depth-first search (DFS) to identify cycles, which is critical for ensuring acyclic structures. This concept is foundational to FlowSAT’s iterative approach that detects and bans cycles to convert the undirected graph into a directed acyclic graph.

*How the paper uses it:* FlowSAT iteratively detects and bans cycles in the computational graph to enable efficient equivalence checking.

▶ [DSA Python - Detect Cycle in Directed Graph | GFG Problem | DFS + Path Visited - Part 134 \[Hindi\]](https://www.youtube.com/watch?v=BrxY15Gz2DY) — Code and Debug · 23:13 · 1y ago

### Boolean equivalence checking *(prerequisite)*
Boolean equivalence checking verifies that two circuits implement the same Boolean function, a fundamental problem in hardware verification. Understanding this helps appreciate the verification goal FlowSAT addresses for flow-based computing circuits.

*How the paper uses it:* The paper’s main research problem is performing equivalence checking for flow-based computing circuits.

▶ [Equivalence Checking / Formal Verification](https://www.youtube.com/watch?v=LfqNlRfpVWo) — nptelhrd · 1:18:48 · 11y ago

### SAT formulation for hardware verification *(prerequisite)*
SAT formulation translates hardware verification problems into Boolean satisfiability problems, enabling automated solvers to check correctness. Learning how concise SAT encodings improve efficiency is key to understanding FlowSAT’s advantage over prior methods.

*How the paper uses it:* FlowSAT uses a concise SAT formulation with fewer variables and clauses tailored for flow-based computing circuits.

▶ [Tutorial / SAT for Problem Solving](https://www.youtube.com/watch?v=GdrI3IESyVY) — Verification and Synthesis · 17:04 · 4y ago

### SAT solving iterative algorithms
Iterative SAT solving involves repeatedly refining the SAT problem by adding constraints based on intermediate results, improving scalability. This approach underpins FlowSAT’s method of incrementally banning cycles until the graph is acyclic.

*How the paper uses it:* FlowSAT employs an iterative SAT solving algorithm that detects and bans cycles incrementally to handle complex cyclic structures.

▶ [lec03 SAT Problem](https://www.youtube.com/watch?v=ZqFVJiXqgYI) — NPTEL - Indian Institute of Science, Bengaluru · 32:18 · 5y ago

## Already in your library

- [4. SAT I](https://www.youtube.com/watch?v=x-Ik9YAFAPo) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)
- [Logic Gates | Boolean Algebra | Types of Logic Gates | AND, OR, NOT, NOR, NAND](https://www.youtube.com/watch?v=EW_2MhFu7tE) — also for: Symmetry-induced quantum-inspired parallelism of classical dynamic systems (Pinaki Mazumder)
- [Lecture 1: Introduction to Power Electronics](https://www.youtube.com/watch?v=f7oXhDatwtY) — also for: High-Performance High-Power Inductor Design for High-Frequency Applications (David J. Perreault)
- [LEC-66 : How to Find Cycle in Directed Graph using DFS](https://www.youtube.com/watch?v=sLtMwI1ty2E) — also for: CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research (Borivoje Nikolic)
- [From formal verification to high-performance constraint solving](https://www.youtube.com/watch?v=vmqoM4B7wvQ) — also for: HyperCertificates: Verification of Discrete-Time Dynamical Systems Against HyperLTL Specifications (Majid Zamani)
- [9. Verification and Validation](https://www.youtube.com/watch?v=-63JXElqPaY) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the FlowSAT paper. The beginner project recreates the core concept of arrow variables to handle bidirectional edges and cycles in a small graph, using your existing programming skills. The intermediate project implements the iterative SAT solving approach described in the paper on a simplified flow-based circuit model, comparing it to a naive baseline. The advanced project extends FlowSAT by exploring a future direction proposed by the authors: integrating machine learning to prioritize cycle banning, addressing scalability limitations.

### Beginner — Arrow Variable Cycle Detection Simulator
*Effort: a weekend (~8 hours)*

You build a small simulator in Python or C++ that models an undirected graph representing a flow-based computing circuit with bidirectional edges. Implement arrow variables as boolean flags to assign directions dynamically to edges and detect cycles of length 2. Visualize how assigning directions eliminates these 2-length cycles.

**Why it shows you understood the paper:** This project demonstrates you understand the key FlowSAT idea of introducing arrow variables to dynamically assign edge directions and directly eliminate cycles of length 2, a foundational step in their SAT formulation.

**Grounded in:** The key idea of FlowSAT is to introduce helper variables, in the form of arrows, that dynamically convert the undirected graph into a directed graph. The arrow variables directly eliminate all cycles of length 2.

**Tech stack:** Python 3.11, NetworkX (for graph modeling), Matplotlib (for visualization)

**Data:** Synthetic small undirected graphs (5-10 nodes) simulating flow-based circuit connectivity, created programmatically.

**Build it:**

1. Implement an undirected graph data structure representing a flow-based circuit with bidirectional edges using NetworkX.
2. Add arrow variables as boolean flags to each edge to represent direction assignment.
3. Write a function to assign directions to edges using arrow variables and detect cycles of length 2.
4. Visualize the graph before and after direction assignment, highlighting eliminated 2-length cycles.
5. Document how arrow variables help break cycles and relate this to the FlowSAT approach.

**Ships as:** A GitHub repo with code, visualization scripts, and a README explaining arrow variables and their role in cycle elimination for flow-based circuits.

**Stretch goal:** Extend the simulator to detect and visualize longer cycles (length > 2) and show why iterative banning is needed.

### Intermediate — Iterative SAT Solver for Cycle Banning in Flow-Based Circuits
*Effort: 1-3 weekends (~20 hours)*

You implement a simplified version of the FlowSAT iterative SAT solving algorithm in Python. Model a small flow-based computing circuit as an undirected graph with bidirectional edges. Encode arrow variables and cycle banning constraints into a SAT problem using a Python SAT solver (e.g., PySAT). Iteratively detect cycles longer than 2 and add constraints to ban them until no cycles remain. Compare runtime and SAT problem size against a naive baseline that encodes all cycles upfront.

**Why it shows you understood the paper:** This project shows you can translate the core FlowSAT method into code, including the iterative cycle banning approach that improves scalability by avoiding upfront enumeration of all cycles, a key contribution of the paper.

**Grounded in:** We propose to iteratively and incrementally add constraints that eliminate cycles. On average, FlowSAT only requires 8% and 49% of the number of variables and clauses, respectively, compared with XSAT.

**Tech stack:** Python 3.11, PySAT (Python SAT solver), NetworkX (graph modeling)

**Data:** Synthetic small flow-based circuit graphs (10-20 nodes) generated programmatically to simulate bidirectional edges and cycles.

**Build it:**

1. Model a small undirected graph representing a flow-based circuit with bidirectional edges using NetworkX.
2. Encode arrow variables and constraints for cycle length 2 directly into a SAT formula using PySAT.
3. Implement an iterative loop that detects longer cycles in the current SAT solution and adds constraints to ban them.
4. Run the iterative SAT solving until no cycles remain and record the number of variables, clauses, and runtime.
5. Implement a naive baseline that encodes all cycles upfront and compare metrics and runtime.
6. Write a README explaining the iterative approach, its benefits, and comparison results.

**Ships as:** A GitHub repo with code implementing iterative SAT solving for cycle banning, comparison scripts, and documentation linking the implementation to FlowSAT's core method.

**Stretch goal:** Add visualization of the cycle banning iterations and how constraints reduce cycles over time.

### Advanced — ML-Guided Cycle Prioritization for FlowSAT
*Effort: a few weeks (~40+ hours)*

You extend the iterative SAT solving framework by integrating a machine learning model to predict and prioritize which cycles to ban first, aiming to reduce the number of iterations and improve solver efficiency. Use features extracted from the circuit graph and cycle properties to train a simple classifier or ranking model. Evaluate the impact on runtime and iterations compared to the original FlowSAT iterative banning approach.

**Why it shows you understood the paper:** This project tackles a future direction proposed by the authors, demonstrating deep comprehension of FlowSAT's iterative cycle banning limitation and exploring AI integration to enhance verification scalability.

**Grounded in:** Given the iterative nature of cycle detection and banning in FlowSAT, have you explored or considered integrating machine learning techniques to predict or prioritize which cycles to ban first to further improve solver efficiency? The iterative cycle banning approach may increase variables and clauses as circuit density grows, potentially impacting runtime for very dense circuits.

**Tech stack:** Python 3.11, PySAT, scikit-learn, NetworkX, Pandas

**Data:** Synthetic flow-based circuit graphs with varying density and cycles, generated programmatically to simulate realistic scenarios.

**Build it:**

1. Reimplement or reuse the iterative SAT solving framework from the intermediate project.
2. Extract features from detected cycles and graph structure (e.g., cycle length, node degrees, edge properties).
3. Collect data from multiple SAT solving runs to label cycles by their impact on solver efficiency.
4. Train a machine learning model (e.g., random forest or logistic regression) to predict cycle banning priority.
5. Integrate the ML model into the iterative SAT solving loop to prioritize banning cycles predicted to improve efficiency.
6. Evaluate and compare runtime, number of iterations, and SAT problem size against the original iterative approach.
7. Document the approach, results, and discuss potential improvements and limitations.

**Ships as:** A GitHub repo with code for ML-guided iterative SAT solving, evaluation scripts, and a detailed README discussing the integration of ML with FlowSAT and its impact.

**Stretch goal:** Explore reinforcement learning to dynamically learn cycle banning policies during SAT solving.
