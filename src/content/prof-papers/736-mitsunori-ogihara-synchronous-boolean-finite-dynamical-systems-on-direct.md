---
title: "736 · Synchronous Boolean Finite Dynamical Systems on Directed Graphs over XOR Functions — Mitsunori Ogihara"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mitsunori-ogihara"
source_hash: "32ea49d27540e4676b37bbf59bf9ef4461ae24c7fbeb7a3e97db14ff83696a48"
sequence: 736
generator: "outreach-garden: managed"
---

# 736 · Synchronous Boolean Finite Dynamical Systems on Directed Graphs over XOR Functions

## At a glance

- **Professor:** Mitsunori Ogihara
- **Institution:** University of Miami
- **Paper:** [Synchronous Boolean Finite Dynamical Systems on Directed Graphs over XOR Functions](https://drops.dagstuhl.de/storage/00lipics/lipics-vol170-mfcs2020/LIPIcs.MFCS.2020.76/LIPIcs.MFCS.2020.76.pdf)
- **Authors:** Mitsunori Ogihara, Kei Uchizawa
- **Year:** 2020

## Paper overview

This paper studies the computational complexity of various problems in synchronous boolean finite dynamical systems (BFDS) where the update functions are XOR or its negation (NXOR). These systems model networks of objects with boolean states updated synchronously based on directed graph dependencies. The authors analyze reachability, path-intersection, cycle length, and predecessor problems, providing complexity classifications and efficient algorithms for special cases.

### Why it matters

**Research problem:** Determining the computational complexity of key decision problems (reachability, path-intersection, exact cycle length, t-predecessor, and t-Garden of Eden) in synchronous boolean finite dynamical systems where update functions are XOR, NXOR, or combinations thereof.

**Why it matters:** Understanding the complexity of these problems is fundamental to predicting and analyzing the behavior of discrete dynamical systems, which have applications in computation theory, network dynamics, and digital humanities. Classifying these problems helps identify tractable cases and guides algorithm design for system analysis.

**Key contributions:**

- Showed reachability and path-intersection problems are solvable in logarithmic space-uniform AC1 for permutational BFDS.
- Proved projection reachability and path-intersection problems are NP-complete, and universal projection variants are Πp2-complete.
- Established NP-completeness of the exact cycle length problem for BFDS with XOR/NXOR.
- Provided polynomial-time algorithms for t-predecessor and t-Garden of Eden problems even when t is given in binary.
- Demonstrated that t-predecessor and t-Garden of Eden problems are in logarithmic space-uniform NC2 for constant or unary t.

## About the professor

**Mitsunori Ogihara** — Professor, Ph.D., Department of Computer Science, University of Miami.

Research interests: theory of computation, music information retrieval, data mining, and digital humanities

### Research links

- [Faculty/profile page](http://www.cs.miami.edu/~ogihara)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Boolean algebra and linear algebra over GF(2)
**The paper assumes:** Boolean algebra, finite fields (especially GF(2)), linear algebra over GF(2), and algebraic methods for Boolean functions
**Already in this field?** Skip this entirely if you already understand Boolean algebra and linear algebra over the finite field GF(2), including matrix operations and Gaussian elimination in this setting.

This background focuses on Boolean algebra and linear algebra over the field GF(2), which are essential for understanding the algebraic modeling and complexity analysis of synchronous Boolean finite dynamical systems with XOR/NXOR functions in the paper. The rigorous course option provides a comprehensive university-level foundation in discrete mathematics and Boolean algebra, while the fast track offers a concise, focused introduction to Boolean algebra concepts suitable for quick comprehension. Choose the rigorous course for deep theoretical grounding, or the fast track for a quicker, more accessible overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [THEORETICAL FOUNDATIONS OF COMPUTER SCIENCE: ODD 2021 Lectures](https://www.youtube.com/playlist?list=PLZuL9NnwuOfnavTZKBQUWe8ZDIoXi09Jz) — Learning Online · 38 videos · 22.2h across 38 episodes

**Watch only this:** Lectures 19 to 23, covering Boolean algebra, binary arithmetic, K-Map, and ring/field Boolean algebra (5 episodes, about 3 hours) — these directly address Boolean algebra and algebraic structures relevant to XOR/NXOR functions and linear algebra over GF(2).

*Why it unblocks this paper:* This university lecture series covers discrete mathematics topics including Boolean algebra and algebraic structures, providing the rigorous mathematical foundation necessary to understand the paper's modeling of BFDS as linear transformations over GF(2).

*If you want all of it:* 22.2 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Boolean Algebra in Discrete Mathematics](https://www.youtube.com/playlist?list=PL15h-I4HvELL5Ri36hWPRqUaU4SkSRnrx) — Ganitya · 16 videos · 3.2h across 16 episodes

**Watch only this:** Episodes 1 to 7, covering Boolean algebra basics, laws, theorems, and De Morgan's law (7 episodes, about 1.4 hours) — sufficient to understand the core Boolean algebra concepts used in the paper.

*Why it unblocks this paper:* This concise playlist provides clear, focused explanations of Boolean algebra concepts, laws, theorems, and Boolean functions, which are crucial for grasping the algebraic basis of the paper's XOR/NXOR function modeling in a short time.

*If you want all of it:* 3.2 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on synchronous Boolean finite dynamical systems over XOR functions, start with foundational knowledge in linear algebra over finite fields and the computational complexity of reachability problems, as these underpin the algebraic and complexity-theoretic methods used. Then, build understanding of Boolean functions XOR and NXOR, which define the system updates. Next, study the general theory of Boolean finite dynamical systems to grasp the modeling framework. Finally, focus on the paper's core concept by watching the authors' own talk presenting their specific results and methods.

### Linear algebra over finite fields *(prerequisite)*
This section covers the mathematical framework of finite fields, especially Z2, which is essential for modeling the XOR-based update functions in Boolean finite dynamical systems. Understanding finite fields and linear algebra over them is critical to follow the algebraic techniques such as Gaussian elimination used in the paper.

*How the paper uses it:* The paper models synchronous BFDS updates as linear transformations over the field Z2, leveraging algebraic properties of XOR/NXOR functions.

▶ [Finite fields 2](https://www.youtube.com/watch?v=iyIaH3VDIxU) — NPTEL-NOC IITM · 42:19 · 7y ago

### Computational complexity of reachability *(prerequisite)*
This section introduces the computational complexity aspects of reachability problems in graphs and dynamical systems, which is a key decision problem analyzed in the paper. It provides context on the challenges and algorithmic approaches to reachability, helping to appreciate the complexity classifications presented.

*How the paper uses it:* The paper analyzes the reachability problem's complexity in synchronous BFDS, proving tractability in special cases and NP-completeness in others.

▶ [Fine-Grained Complexity and Algorithm Design for Graph Reachability and Distance Problems](https://www.youtube.com/watch?v=Dr9LNLHHiYY) — Simons Institute for the Theory of Computing · 52:08 · Streamed 3y ago

### Boolean functions XOR and NXOR *(prerequisite)*
This section focuses on the Boolean functions XOR and NXOR, which are the core update functions defining the system dynamics in the paper. A rigorous understanding of their properties and behavior is necessary to grasp how these functions influence the system's evolution and complexity.

*How the paper uses it:* The paper studies BFDS where update functions are XOR or its negation (NXOR), forming the basis of the system's synchronous updates.

▶ [Boolean Properties of XOR](https://www.youtube.com/watch?v=xD8eVy021Dw) — EE Prof Lady · 4:54 · 6y ago

### Boolean finite dynamical systems *(prerequisite)*
This section introduces the general theory and modeling of Boolean finite dynamical systems, which are discrete dynamical systems with Boolean states updated synchronously or asynchronously. Understanding this framework is foundational to follow the paper's specific focus on XOR-based synchronous BFDS.

*How the paper uses it:* The paper studies synchronous Boolean finite dynamical systems on directed graphs, analyzing their computational complexity.

▶ [Konstantin Mischaikow - Dynamics of Regulatory Networks - IPAM at UCLA](https://www.youtube.com/watch?v=MMBlfjHi_NQ) — Institute for Pure & Applied Mathematics (IPAM) · 50:02 · 7mo ago

### Synchronous boolean finite dynamical systems with XOR
This section presents the paper authors' own talk on their research about synchronous Boolean finite dynamical systems over XOR functions. It provides direct insight into their methods, results, and complexity classifications, making it the most relevant and authoritative resource for understanding the paper.

*How the paper uses it:* This is the authors' recorded presentation of the exact paper, detailing their complexity results and algorithms for XOR-based synchronous BFDS.

▶ [Uchizawa and Ogihara. Synchronous Boolean Finite Dynamical Systems on Directed Graphs over XOR ...](https://www.youtube.com/watch?v=mkm2L_pKFHQ) — MFCS 2020 · 22:33 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of Boolean functions XOR and NXOR, as these define the system's update rules. Next, grasp the fundamentals of linear algebra over finite fields, which provides the algebraic framework for modeling these systems. Then, study the computational complexity of reachability problems to appreciate the difficulty of key decision problems analyzed. Finally, explore Boolean finite dynamical systems to see how these concepts combine into the system studied in the paper.

### Boolean functions XOR and NXOR *(prerequisite)*
XOR and NXOR are fundamental Boolean logic gates that output true or false based on the parity of their inputs. Understanding their truth tables, properties, and behavior is essential because the paper's dynamical systems update states using these functions.

*How the paper uses it:* The paper studies synchronous Boolean finite dynamical systems where update functions are XOR or NXOR.

▶ [XOR and XNOR Gates Explained: Basics, Working, Truth Table and Properties](https://www.youtube.com/watch?v=AUxCcmXJJzw) — Engineering Funda · 10:02 · 6y ago

### Linear algebra over finite fields *(prerequisite)*
Linear algebra over finite fields, especially over the field Z2, deals with vector spaces and linear transformations where arithmetic is modulo 2. This framework is crucial for modeling XOR-based updates as linear transformations, enabling algebraic analysis of the system's behavior.

*How the paper uses it:* The authors model BFDS updates as linear transformations over Z2 to analyze complexity and design algorithms.

▶ [Finite fields 2](https://www.youtube.com/watch?v=iyIaH3VDIxU) — NPTEL-NOC IITM · 42:19 · 7y ago

### Computational complexity of reachability *(prerequisite)*
Reachability problems ask whether a system can evolve from one state to another, which is central in analyzing dynamical systems. Understanding the computational complexity of these problems helps grasp why some system analyses are tractable and others are hard.

*How the paper uses it:* Reachability is a key decision problem analyzed for complexity classification in the paper.

▶ [Fine-Grained Complexity and Algorithm Design for Graph Reachability and Distance Problems](https://www.youtube.com/watch?v=Dr9LNLHHiYY) — Simons Institute for the Theory of Computing · 52:08 · Streamed 3y ago

### Boolean finite dynamical systems
Boolean finite dynamical systems are networks of nodes with Boolean states updated synchronously based on functions of their neighbors' states. Learning this model helps understand how the paper frames system dynamics and the problems studied.

*How the paper uses it:* The paper studies synchronous Boolean finite dynamical systems on directed graphs with XOR/NXOR update functions.

▶ [LECTURE 1 : Introduction to Dynamical Systems | Maps, Phase Space, Orbits explained](https://www.youtube.com/watch?v=DaVzUnrsYyM) — TV Academic Hub | University Mathematics · 1:46:07 · 1mo ago

## Already in your library

- [History and Preliminaries - Dynamical Systems | Lecture 1](https://www.youtube.com/watch?v=Gw19VCtHYcs) — also for: Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution (Uri Wilensky)
- [P vs. NP and the Computational Complexity Zoo](https://www.youtube.com/watch?v=YX40hbAHx3s) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Logic Gates | Boolean Algebra | Types of Logic Gates | AND, OR, NOT, NOR, NAND](https://www.youtube.com/watch?v=EW_2MhFu7tE) — also for: Symmetry-induced quantum-inspired parallelism of classical dynamic systems (Pinaki Mazumder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the computational complexity and algorithmic analysis of synchronous Boolean finite dynamical systems (BFDS) over XOR/NXOR functions as studied in the paper. Starting with a basic simulation and reachability check for permutational BFDS, you then implement core algorithms for reachability and cycle detection, and finally explore an advanced extension addressing one of the paper's stated limitations by experimenting with asynchronous updates or mixed Boolean function bases.

### Beginner — Simulate Permutational BFDS and Check Reachability
*Effort: a weekend, ~8 hours*

You build a small simulator for synchronous Boolean finite dynamical systems where each node updates its state using XOR or NXOR functions, arranged as a permutation graph (each node has in-degree and out-degree 1). The simulator will allow setting an initial state and computing the next state synchronously. You implement a reachability checker that determines if a given target state is reachable from an initial state within a bounded number of steps.

**Why it shows you understood the paper:** This project shows you understand the core model of permutational BFDS and the polynomial-time reachability problem solvable in logarithmic space-uniform AC1, as proved in the paper's Theorem 12 and Corollary 13. It demonstrates you can translate the theoretical model into a working system and verify reachability by simulating the linear transformations over Z2.

**Grounded in:** Reachability problem in permutational BFDS is in P and logarithmic space-uniform AC1 (Theorem 12 and Corollary 13).

**Tech stack:** Python 3.11

**Data:** Synthetic BFDS graphs generated as permutations with XOR/NXOR update functions; no external dataset needed.

**Build it:**

1. Implement a data structure to represent a permutational BFDS graph with nodes and XOR/NXOR update functions.
2. Write a function to synchronously update the system state vector over Z2 according to the graph.
3. Implement a reachability checker that simulates the system for up to a given number of steps to see if the target state is reached.
4. Create test cases with small permutation graphs and verify reachability results.
5. Document the model, algorithms, and example runs in the README.

**Ships as:** A Python repository with a BFDS simulator, reachability checker, example graphs, and a README explaining the implementation and linking it to the paper's complexity result.

**Stretch goal:** Add a visualization of the state transitions over time for small BFDS graphs.

### Intermediate — Implement Polynomial-Time t-Predecessor and t-Garden of Eden Algorithms
*Effort: 2 weekends, ~20 hours*

You reimplement the polynomial-time algorithms for the t-predecessor and t-Garden of Eden problems for synchronous BFDS with XOR/NXOR functions as described in the paper. This involves modeling the system as linear transformations over Z2 and applying Gaussian elimination to solve for predecessors or detect Garden of Eden states. You compare your implementation's runtime and correctness on synthetic BFDS instances against a naive brute-force baseline.

**Why it shows you understood the paper:** This project demonstrates your grasp of the algebraic approach using linear algebra over finite fields to solve predecessor and Garden of Eden problems efficiently, as established in Theorem 21. It shows you can implement and evaluate the core polynomial-time algorithms from the paper, going beyond simulation to algorithmic analysis.

**Grounded in:** t-predecessor and t-Garden of Eden problems solvable in polynomial time with binary t input (Theorem 21).

**Tech stack:** Python 3.11, NumPy (for linear algebra)

**Data:** Synthetic BFDS instances generated with XOR/NXOR update functions; no external dataset required.

**Build it:**

1. Implement a representation of BFDS as matrices over Z2 using NumPy arrays.
2. Write functions to construct the system matrix and state vectors for given BFDS graphs.
3. Implement Gaussian elimination over Z2 to solve linear systems for t-predecessor and Garden of Eden detection.
4. Implement a brute-force baseline that enumerates all possible predecessors for small systems.
5. Run experiments comparing runtime and correctness of your algorithm versus brute force on various BFDS sizes.
6. Document the algorithms, complexity, and experimental results in the README.

**Ships as:** A Python repository with implementations of polynomial-time t-predecessor and t-Garden of Eden algorithms, baseline comparison, experiments, and detailed documentation linking to the paper's results.

**Stretch goal:** Extend the implementation to handle unary and constant t inputs and demonstrate the NC2 complexity class membership experimentally.

### Advanced — Explore Complexity of BFDS with Mixed Boolean Bases and Asynchronous Updates
*Effort: 3+ weeks*

You extend the paper's study by implementing a framework to model BFDS with mixed Boolean function bases beyond XOR/NXOR (e.g., including AND, OR) and asynchronous update schemes. You implement heuristic algorithms or parameterized methods to analyze reachability or cycle detection in these extended systems. You experiment with synthetic BFDS instances and report on empirical tractability, addressing the paper's limitation and future direction about other Boolean bases and asynchronous dynamics.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep engagement with the research problem. It shows you can transfer the algebraic and complexity insights to new settings, design heuristics for NP-complete variants, and contribute exploratory empirical analysis bridging theory and practice.

**Grounded in:** Limitations: NP-completeness for projection reachability and exact cycle length; Future directions: extending to other Boolean bases and asynchronous updates.

**Tech stack:** Python 3.11, NumPy, NetworkX (for graph modeling)

**Data:** Synthetic BFDS graphs with mixed Boolean functions and asynchronous update schedules generated programmatically.

**Build it:**

1. Design data structures to represent BFDS with mixed Boolean function bases and asynchronous update rules.
2. Implement synchronous and asynchronous state update functions for these systems.
3. Develop heuristic or parameterized algorithms to approximate reachability or cycle detection.
4. Generate synthetic BFDS instances with varying sizes and function mixes for experiments.
5. Run empirical evaluations measuring runtime and success rates of heuristics.
6. Write a detailed report discussing findings, challenges, and connections to the paper's complexity results.

**Ships as:** A Python repository with extended BFDS modeling, heuristic algorithms, experimental scripts, and a comprehensive README/report discussing the extension and empirical insights.

**Stretch goal:** Incorporate real-world network data (e.g., small biological or social networks) to test heuristics on practical instances.
