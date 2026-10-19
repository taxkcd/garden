---
title: "753 · Equivalence Checking for Flow-Based Computing using Iterative SAT Solving — Sven Thijssen"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sven-thijssen"
source_hash: "2f02750fb7f6bf8e7d2f6e236578e6e918d3875affe578305f7c17638bb3265b"
sequence: 753
generator: "outreach-garden: managed"
---

# 753 · Equivalence Checking for Flow-Based Computing using Iterative SAT Solving

## At a glance

- **Professor:** Sven Thijssen
- **Institution:** Florida Atlantic University
- **Paper:** [Equivalence Checking for Flow-Based Computing using Iterative SAT Solving](https://dl.acm.org/doi/pdf/10.1145/3676536.3676721)
- **Authors:** Sven Thijssen, Muhammad Rashedul Haq Rashed, Md Rubel Ahmed, Suraj Singireddy, Sumit Kumar Jha, Rickard Ewetz
- **Year:** 2024

## Paper overview

This paper addresses the challenge of verifying that flow-based computing circuits, which use bidirectional non-volatile memory devices, correctly implement Boolean functions. Traditional equivalence checking methods fail due to cycles in the computational graph caused by bidirectionality. The authors propose FlowSAT, a new SAT-based framework that introduces arrow variables to assign directions dynamically and iteratively bans cycles to enable efficient equivalence checking. Experiments show FlowSAT is faster and more scalable than previous methods, successfully verifying all tested benchmarks.

### Why it matters

**Research problem:** How to perform functional equivalence checking of flow-based computing circuits that have bidirectional non-volatile memory devices, which create cycles in the computational graph that break traditional SAT-based equivalence checking methods.

**Why it matters:** Flow-based computing is a promising in-memory computing paradigm that can accelerate data-intensive Boolean logic computations efficiently. Ensuring the functional correctness of such circuits is critical for reliable design, debugging, and optimization. Existing verification methods do not scale well or fail to handle the bidirectional cyclic nature of these circuits, limiting practical adoption.

**Key contributions:**

- Introduction of arrow variables to dynamically direct edges in the undirected computational graph of flow-based computing circuits.
- An iterative SAT solving algorithm that detects and bans cycles incrementally to handle cyclic dependencies without exhaustive enumeration.
- A SAT formulation with significantly fewer variables and clauses compared to prior bounded model checking approaches.
- Comprehensive experimental evaluation on 20 benchmarks demonstrating superior scalability and runtime performance.
- Open-source implementation of the FlowSAT framework.

## About the professor

**Sven Thijssen** — Assistant Professor, Department of Electrical Engineering and Computer Science, Florida Atlantic University.

Research interests: Emerging technologies, Artificial intelligence

### Research links

- [Faculty/profile page](https://www.fau.edu/engineering/directory/faculty/thijssen)
- [Professor website](https://www.sventhijssen.com/)
- [Resolved homepage](https://www.sventhijssen.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Boolean Satisfiability and SAT Solving
**The paper assumes:** Boolean satisfiability problem, SAT solver algorithms, SAT problem encoding, formal verification using SAT
**Already in this field?** Skip this entirely if you already understand how SAT solvers work and how Boolean satisfiability problems are encoded and used in formal verification.

This background focuses on Boolean satisfiability and SAT solving, which are fundamental to understanding the FlowSAT framework introduced in the paper. The rigorous course option provides a deep, structured university-level treatment of SAT solving concepts and techniques, ideal for readers seeking comprehensive understanding. The fast track offers a shorter, more accessible series that covers key SAT solving ideas efficiently, suitable for readers with limited time who want a solid conceptual grasp without full depth.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [FSTTCS SAT/SMT Winter School - 08 to 10 Dec 2019](https://www.youtube.com/playlist?list=PL_uaeekrhGzIOyI1MvUd_uXYZ2cnPbXZC) — Studio IIT Bombay · 16 videos · 15.6h across 16 episodes

**Watch only this:** Episodes FSTTCS2019 S007 SAT Solving and CDCL(T), FSTTCS2019 S008 SAT Solvers are Search-Directed Proof Systems, FSTTCS2019 S009 SAT Solving and CDCL(T) Hands On, and FSTTCS2019 S015 Inside the Solver, about 4 hours total — these cover core SAT solving algorithms, solver architecture, and practical solving techniques relevant to FlowSAT.

*Why it unblocks this paper:* The FSTTCS SAT/SMT Winter School playlist is a university-level lecture series focused specifically on SAT and SMT solving, covering foundational theory, solver internals, and practical applications. It aligns closely with the paper's reliance on SAT solving techniques and iterative cycle banning, providing rigorous theoretical and practical insights.

*If you want all of it:* 15.6 hours across all 16 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [SAT solvers and SMT solvers in reverse engineering](https://www.youtube.com/playlist?list=PLqinEaadXCHaVmDi3Mo2qmDv9HsQjScPw) — RANDOM NEURAL MONK · 39 videos · 23.1h across 39 episodes

**Watch only this:** Episodes 'The SAT problem', 'A Peek Inside SAT Solvers - Jon Smock', 'SMT in reverse engineering, for dummies', and 'Practical Satisfiability Modulo Theories (SMT) Solving', about 2.5 hours total — these cover the SAT problem basics, solver internals, and practical SMT solving concepts.

*Why it unblocks this paper:* The 'SAT solvers and SMT solvers in reverse engineering' playlist offers a concise, well-produced series of explainers on SAT solving concepts and applications, including solver internals and practical uses. It provides a faster, intuition-focused overview suitable for readers needing a quick but solid understanding of SAT solving relevant to the paper.

*If you want all of it:* 23.1 hours across 39 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Equivalence Checking for Flow-Based Computing using Iterative SAT Solving,' start by building foundational knowledge on graph theory cycle detection and the Boolean satisfiability problem, as these underpin the paper's novel SAT-based approach. Next, study SAT-based equivalence checking methods to grasp the verification context. Finally, focus on the paper's core concept—equivalence checking challenges in flow-based computing circuits—and the authors' own presentation to get direct insights into their innovative FlowSAT framework.

### Graph theory cycles detection *(prerequisite)*
Understanding how to detect cycles in directed and undirected graphs is fundamental to grasping the paper's approach to handling cyclic dependencies in flow-based computing circuits. The iterative banning of cycles in FlowSAT relies on these graph theory principles.

*How the paper uses it:* The paper's iterative SAT solving algorithm incrementally detects and bans cycles in the computational graph to enable equivalence checking despite bidirectionality.

▶ [Detect a Cycle in Directed Graph using DFS | Lecture 116](https://www.youtube.com/watch?v=AcppN5XFt24) — Shradha Khapra · 15:59 · 1y ago

### Boolean satisfiability problem *(prerequisite)*
The Boolean satisfiability problem (SAT) is the computational foundation of the FlowSAT framework. A solid understanding of SAT and how SAT solvers operate is essential to appreciate the paper's SAT-based equivalence checking innovations.

*How the paper uses it:* FlowSAT formulates equivalence checking as a SAT problem, using iterative SAT solving to handle cycles dynamically.

▶ [Modern SAT solvers. Boolean Satisfiability Problem.](https://www.youtube.com/watch?v=1TJK7Dec9f8) — Gheorghe Curelet-Balan · 30:33 · 9y ago

### SAT-based equivalence checking *(prerequisite)*
This topic covers how SAT solvers are applied to verify functional equivalence in digital circuits, a direct precursor to the paper's novel approach. Understanding traditional SAT-based equivalence checking methods and their limitations provides context for FlowSAT's contributions.

*How the paper uses it:* The paper improves upon existing SAT-based equivalence checking methods by introducing arrow variables and iterative cycle banning to handle bidirectional cyclic graphs.

▶ [Formal Verification-IV](https://www.youtube.com/watch?v=uQ-xAc7SxEc) — NPTEL-NOC IITM · 39:55 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on equivalence checking for flow-based computing using iterative SAT solving, start by grasping the fundamental Boolean satisfiability problem, which underpins SAT solvers. Next, learn about graph theory cycle detection, crucial for handling cycles in computational graphs caused by bidirectional memory devices. Then, explore flow-based computing architecture to appreciate the hardware context and challenges. Finally, study SAT-based equivalence checking methods to see how the paper's FlowSAT framework innovates on traditional approaches.

### Boolean satisfiability problem *(prerequisite)*
The Boolean satisfiability problem (SAT) asks whether there exists an assignment of true/false values to variables that makes a Boolean formula true. It is a foundational computational problem that SAT solvers address efficiently in practice, enabling formal verification tasks. Understanding SAT is essential because the paper's FlowSAT framework builds on SAT solving to verify circuit equivalence.

*How the paper uses it:* FlowSAT uses SAT solvers as the core engine to check equivalence by encoding circuit behavior into Boolean formulas.

▶ [The Satisfiability Problem, and SAT is in NP](https://www.youtube.com/watch?v=-wlUDJZb6-Q) — Easy Theory · 10:54 · 5y ago

### Graph theory cycles detection *(prerequisite)*
Cycle detection in graphs involves identifying if a path exists that starts and ends at the same node without repetition. In directed graphs, this is critical for understanding dependencies and feedback loops. The paper deals with cycles caused by bidirectional edges in computational graphs, so understanding how to detect cycles helps grasp why traditional methods fail and how FlowSAT addresses this.

*How the paper uses it:* FlowSAT iteratively detects and bans cycles in the computational graph to enable equivalence checking despite bidirectional cycles.

▶ [Detect a Cycle in Directed Graph using DFS | Lecture 116](https://www.youtube.com/watch?v=AcppN5XFt24) — Shradha Khapra · 15:59 · 1y ago

### SAT-based equivalence checking
SAT-based equivalence checking translates the problem of verifying if two circuits implement the same function into a SAT problem. This approach is widely used in digital design verification but struggles with cyclic dependencies caused by bidirectional edges. The paper proposes FlowSAT, which innovates on this by dynamically directing edges and banning cycles iteratively.

*How the paper uses it:* FlowSAT extends traditional SAT-based equivalence checking by introducing arrow variables and iterative cycle banning to handle cyclic graphs.

▶ [Formal Verification-IV](https://www.youtube.com/watch?v=uQ-xAc7SxEc) — NPTEL-NOC IITM · 39:55 · 1y ago

## Already in your library

- [4. SAT I](https://www.youtube.com/watch?v=x-Ik9YAFAPo) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [8. NP-Hard and NP-Complete Problems](https://www.youtube.com/watch?v=e2cF8a5aAhE) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Biggest Puzzle in Computer Science: P vs. NP](https://www.youtube.com/watch?v=pQsdygaYcE4) — also for: Fixed Points, a Predictor-Impossibility Theorem, and Applications (Tom Altman)
- [LEC-66 : How to Find Cycle in Directed Graph using DFS](https://www.youtube.com/watch?v=sLtMwI1ty2E) — also for: CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research (Borivoje Nikolic)
- [5G Core Architecture, Concepts, Call Flows & Procedures | Hands-On Training – Part 1](https://www.youtube.com/watch?v=kQZRH5txCJE) — also for: Demo: Decoding Control Information Passively from Standalone 5G Network (Alexander Marder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the FlowSAT framework for equivalence checking of flow-based computing circuits. The beginner project focuses on implementing and visualizing the core concept of arrow variables to dynamically assign directions in a small undirected graph. The intermediate project involves reimplementing the iterative SAT-based cycle banning algorithm on a simplified benchmark and comparing it against a naive baseline. The advanced project extends the method by exploring machine learning techniques to prioritize cycle banning, addressing a future direction proposed in the paper.

### Beginner — Arrow Variables for Dynamic Edge Direction in Graphs
*Effort: a weekend, ~8 hours*

You build a small interactive Python program that models a simple undirected graph representing a flow-based computing circuit and implements arrow variables to dynamically assign directions to edges. The program visualizes the graph before and after direction assignment and allows toggling arrow variables to see how the directed graph changes.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution of introducing arrow variables to convert undirected graphs into directed graphs dynamically, a foundational step in FlowSAT's approach.

**Grounded in:** Introduction of arrow variables to dynamically direct edges in the undirected computational graph of flow-based computing circuits.

**Tech stack:** Python 3.11, NetworkX, Matplotlib

**Data:** You simulate a small undirected graph with 5-10 nodes and edges representing a toy flow-based computing circuit; no external dataset is needed.

**Build it:**

1. Create a small undirected graph using NetworkX to represent a toy flow-based computing circuit.
2. Implement arrow variables as boolean flags that assign a direction to each undirected edge.
3. Write a function to convert the undirected graph into a directed graph based on the current arrow variable assignments.
4. Visualize the original undirected graph and the resulting directed graph using Matplotlib.
5. Add an interactive component (e.g., command-line input or simple GUI) to toggle arrow variables and update the directed graph visualization.

**Ships as:** A GitHub repository with Python scripts and a README that explains arrow variables, shows visualizations of the undirected and directed graphs, and demonstrates dynamic direction assignment.

**Stretch goal:** Add cycle detection on the directed graph and highlight cycles visually.

### Intermediate — Iterative SAT-Based Cycle Banning for Flow-Based Circuit Equivalence
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the FlowSAT iterative SAT solving algorithm that models a small flow-based computing circuit as an undirected graph with arrow variables, encodes the problem as a SAT instance, and iteratively bans detected cycles by adding constraints. You compare runtime and SAT solver statistics against a naive baseline that tries to enumerate all cycles upfront.

**Why it shows you understood the paper:** This project shows you can reimplement the core FlowSAT method of iterative cycle banning to handle cyclic dependencies efficiently, and you understand the trade-offs compared to exhaustive cycle enumeration.

**Grounded in:** An iterative SAT solving algorithm that detects and bans cycles incrementally to handle cyclic dependencies without exhaustive enumeration.

**Tech stack:** Python 3.11, PySAT (python-sat), NetworkX

**Data:** You create or simulate small benchmark circuits with 10-20 nodes and edges representing flow-based computing crossbars; no official dataset is available, so you synthesize graphs based on descriptions in the paper.

**Build it:**

1. Model a small flow-based computing circuit as an undirected graph with nodes and edges.
2. Implement arrow variables and encode the direction assignment and cycle constraints as a SAT problem using PySAT.
3. Implement an iterative loop that runs the SAT solver, analyzes the solution to detect cycles longer than two edges, and adds constraints to ban these cycles incrementally.
4. Implement a naive baseline that enumerates all cycles upfront and encodes constraints for all cycles at once.
5. Run both methods on the same benchmarks and compare SAT solver runtime, number of variables, and clauses.
6. Document the implementation details, comparison results, and insights in the README.

**Verified links from the paper:**

- <https://github.com/sventhijssen/factor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing iterative SAT-based cycle banning, baseline comparison, benchmark graphs, and a detailed README with results and analysis.

**Stretch goal:** Extend the implementation to handle larger graphs and analyze scalability with increasing cycle density.

### Advanced — Machine Learning Guided Cycle Banning for Scalable FlowSAT
*Effort: 3+ weeks*

You develop an extension to the FlowSAT iterative cycle banning approach by integrating a machine learning model that predicts or prioritizes which cycles to ban first based on features extracted from the SAT solver outputs and graph structure. You evaluate whether this prioritization improves scalability and runtime on synthetic benchmarks with increasing cycle density.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper by combining ML with formal verification to improve scalability, demonstrating deep comprehension of FlowSAT's limitations and potential enhancements.

**Grounded in:** Given the iterative nature of FlowSAT's cycle banning approach, have you explored or considered integrating machine learning techniques to predict or prioritize which cycles to ban first to further improve scalability?

**Tech stack:** Python 3.11, PySAT (python-sat), scikit-learn, NetworkX, Pandas

**Data:** You generate synthetic flow-based computing circuit graphs with varying sizes and cycle densities to serve as benchmarks for training and evaluation.

**Build it:**

1. Reimplement the iterative SAT-based cycle banning algorithm from the intermediate project.
2. Instrument the SAT solver outputs and graph features to collect data on cycles detected and banning order.
3. Design and train a machine learning model (e.g., decision tree or random forest) to predict cycle banning priority based on extracted features.
4. Integrate the ML model into the iterative banning loop to guide which cycles to ban first.
5. Evaluate the enhanced method against the original iterative approach on synthetic benchmarks, measuring runtime and scalability.
6. Document methodology, experiments, results, and limitations in the README.

**Verified links from the paper:**

- <https://github.com/sventhijssen/factor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the ML-augmented FlowSAT implementation, synthetic benchmark generation scripts, evaluation results, and comprehensive documentation.

**Stretch goal:** Explore reinforcement learning to dynamically adapt cycle banning strategies during SAT solving.
