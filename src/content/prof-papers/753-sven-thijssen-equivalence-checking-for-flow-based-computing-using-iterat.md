---
title: "753 · Equivalence Checking for Flow-Based Computing using Iterative SAT Solving — Sven Thijssen"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sven-thijssen"
source_hash: "0dcc051f79bee9a743f106971d17e2c0e8380e5539ab975cb5bc8302fb4508da"
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

This paper addresses the challenge of verifying that flow-based computing circuits, which use bidirectional non-volatile memory devices, correctly implement Boolean logic functions. Traditional equivalence checking methods fail due to cycles in the computational graph caused by bidirectionality. The authors propose FlowSAT, a new SAT-based framework that introduces arrow variables to assign directions dynamically and iteratively eliminates cycles to enable efficient equivalence checking. Experiments show FlowSAT is significantly faster and more scalable than previous methods, verifying all tested benchmarks within practical time limits.

### Why it matters

**Research problem:** How to perform functional equivalence checking for flow-based computing circuits that have bidirectional non-volatile memory devices, resulting in undirected graphs with cycles that break traditional SAT-based equivalence checking methods.

**Why it matters:** Flow-based computing promises energy-efficient in-memory acceleration of Boolean logic, but verifying the correctness of such circuits is critical to ensure reliability and correctness of computations. Existing verification methods do not scale well or fail due to the unique bidirectional and cyclic nature of these circuits.

**Key contributions:**

- Identification of the challenge posed by bidirectional non-volatile memory devices causing cycles in flow-based computing graphs that break traditional SAT equivalence checking.
- Introduction of arrow helper variables to dynamically direct edges in the computational graph within the SAT formulation.
- Development of an iterative cycle-breaking algorithm that detects cycles from SAT solver models and bans them incrementally.
- A concise SAT formulation with significantly fewer variables and clauses compared to prior bounded model checking approaches.
- Comprehensive experimental evaluation demonstrating FlowSAT's superior scalability and speed, verifying all 20 benchmark circuits where previous methods verified fewer.

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

**What you're missing:** SAT solving and Boolean equivalence checking
**The paper assumes:** propositional satisfiability solving, Boolean circuit equivalence checking, SAT-based verification methods
**Already in this field?** Skip this entirely if you already understand SAT solvers and how they are applied to Boolean equivalence checking in hardware verification.

To understand the core technical contributions of the paper on FlowSAT, which innovates SAT-based equivalence checking for flow-based computing circuits, a solid grasp of SAT solving and Boolean equivalence checking is essential. The rigorous course option offers a deep, structured university-level treatment of formal methods and SAT solving, ideal for readers seeking comprehensive mastery. The fast track provides a concise, focused introduction to SAT concepts through a well-produced short-form playlist, suitable for readers who want a quick but clear conceptual foundation before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Formal Methods for System Verification](https://www.youtube.com/playlist?list=PLwdnzlV3ogoU0I4OqKZvuaPc_EoUPifbP) — NPTEL IIT Guwahati · 58 videos · 30.9h across 58 episodes

**Watch only this:** Lectures 9 through 16 (Lec 9: Introduction to SAT Solver through Lec 16: SAT Tool Demo), about 4 hours and 8 minutes — these cover SAT solver basics, DPLL algorithm, decision heuristics, Tseitin transformation, and SAT encoding examples essential for understanding the paper's SAT formulation.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Formal Methods for System Verification covers SAT solving in depth, including SAT solver algorithms, encoding examples, and decision heuristics, directly relevant to understanding the SAT-based equivalence checking and iterative cycle-breaking approach in FlowSAT.

*If you want all of it:* About 30.9 hours across all 58 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [SAT](https://www.youtube.com/playlist?list=PLwI-5aSFIWxIvWvdrk-VdL1rPf-d4zIwT) — Shashank Singh · 21 videos · 8.0h across 21 episodes

**Watch only this:** First 6 episodes, about 2 hours and 12 minutes — covering core SAT concepts and problem-solving strategies relevant to the paper's SAT-based equivalence checking approach.

*Why it unblocks this paper:* This short-form playlist by Shashank Singh provides a clear and concise introduction to SAT concepts in about 8 hours total, making it a practical quick-start for readers who need to grasp SAT solving fundamentals and Boolean logic equivalence efficiently.

*If you want all of it:* About 8 hours across all 21 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Equivalence Checking for Flow-Based Computing using Iterative SAT Solving,' start with foundational knowledge on cycle detection in graphs and Boolean equivalence checking, as these underpin the challenges and verification goals. Next, gain insight into SAT solving iterative methods, which are central to the FlowSAT approach. Finally, focus on the core concept of the paper by reviewing the authors' own talk on equivalence checking, which directly presents their novel FlowSAT framework and its contributions.

### Cycle detection in graphs *(prerequisite)*
Cycle detection in directed and undirected graphs is a fundamental algorithmic problem relevant to the paper because FlowSAT must dynamically detect and eliminate cycles in the bidirectional computational graphs of flow-based circuits. Understanding standard DFS-based cycle detection methods provides the necessary background to appreciate the iterative cycle-breaking approach introduced.

*How the paper uses it:* FlowSAT iteratively detects and bans cycles in the computational graph to enable equivalence checking despite bidirectionality-induced cycles.

▶ [G-19. Detect cycle in a directed graph using DFS | Java | C++](https://www.youtube.com/watch?v=9twcmtQj4DU) — take U forward · 17:22 · 4y ago

### Boolean equivalence checking *(prerequisite)*
Boolean equivalence checking is the fundamental verification problem the paper addresses, ensuring that two circuit representations implement the same Boolean function. A solid understanding of equivalence checking techniques and their challenges in hardware verification is essential to grasp the motivation and impact of FlowSAT.

*How the paper uses it:* The paper proposes a new equivalence checking method tailored for flow-based computing circuits with bidirectional devices.

▶ [Understanding Logic Equivalence Check in VLSI | What is LEC?](https://www.youtube.com/watch?v=-5VgCo-ICTU) — Bibekananda Bora · 21:00 · 6y ago

### SAT solving iterative methods
Iterative SAT solving techniques are core to the FlowSAT framework, which incrementally adds constraints to ban detected cycles and solve the equivalence checking problem efficiently. Understanding iterative SAT solving and MaxSAT approaches provides insight into how FlowSAT achieves scalability and dynamic cycle elimination.

*How the paper uses it:* FlowSAT uses an iterative SAT solving approach to dynamically assign edge directions and ban cycles without upfront enumeration.

▶ [Tobias Paxian: (Weighted) Pacose: An iterative SAT-based MaxSAT solver](https://www.youtube.com/watch?v=iv_noIFZ88M) — MIAO Research · 1:04:17 · 3y ago

### FlowSAT paper talk *(paper-talk search result; attribution unverified)*
The authors' own talk on equivalence checking provides the most direct and detailed exposition of the FlowSAT method, its motivation, technical approach, and experimental results. This talk is invaluable for understanding the paper's contributions from the researchers themselves.

*How the paper uses it:* This talk presents the novel FlowSAT framework and its iterative cycle-breaking SAT formulation for equivalence checking in flow-based computing.

▶ [Equivalence Checking Workshop Talk 2022](https://www.youtube.com/watch?v=eSJtoDc-3Tg) — compilerai · 1:10:48 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand the FlowSAT paper, starting with the basics of flow-based computing architectures and Boolean equivalence checking, then covering the critical challenge of cycle detection in graphs, followed by the properties of non-volatile memory devices that cause bidirectionality and cycles. Finally, it introduces SAT solving iterative methods, culminating in the core concept of equivalence checking for flow-based computing circuits using the FlowSAT approach.

### Flow-based computing architectures *(prerequisite)*
Flow-based computing architectures organize computation as a network of interconnected components where data flows between nodes. Understanding this paradigm helps grasp how circuits in the paper are structured and why bidirectionality arises. This foundation is essential to appreciate the unique verification challenges addressed by FlowSAT.

*How the paper uses it:* The paper targets flow-based computing circuits that use bidirectional non-volatile memory devices, making this concept fundamental.

▶ [Flow Based Programming - I shouldn't write new languages](https://www.youtube.com/watch?v=wlna48I2aIE) — Deltride · 25:38 · 5y ago

### Boolean equivalence checking *(prerequisite)*
Boolean equivalence checking verifies that two logic circuits implement the same Boolean function, a fundamental step in hardware verification. Learning this concept clarifies the verification goal FlowSAT aims to achieve for flow-based circuits.

*How the paper uses it:* FlowSAT is designed to perform functional equivalence checking for flow-based computing circuits.

▶ [Understanding Logic Equivalence Check in VLSI | What is LEC?](https://www.youtube.com/watch?v=-5VgCo-ICTU) — Bibekananda Bora · 21:00 · 6y ago

### Cycle detection in graphs *(prerequisite)*
Cycle detection algorithms identify loops in directed or undirected graphs, which is crucial because cycles complicate verification methods. Understanding how cycles are detected helps in grasping FlowSAT's iterative cycle-breaking approach.

*How the paper uses it:* FlowSAT iteratively detects and bans cycles in the computational graph to enable equivalence checking.

▶ [G-19. Detect cycle in a directed graph using DFS | Java | C++](https://www.youtube.com/watch?v=9twcmtQj4DU) — take U forward · 17:22 · 4y ago

### Non-volatile memory device modeling *(prerequisite)*
Non-volatile memory devices retain information without power and can be bidirectional, causing cycles in computational graphs. Understanding their properties explains why traditional verification methods fail and motivates FlowSAT's approach.

*How the paper uses it:* The bidirectional nature of non-volatile memory devices introduces cycles that break traditional equivalence checking methods.

▶ [Volatile vs Non-Volatile Memory | Simply Explained](https://www.youtube.com/watch?v=1DgJmnJ8D2Y) — TechPrep · 4:49 · 2y ago

### SAT solving iterative methods
SAT solvers determine the satisfiability of logical formulas, and iterative SAT solving refines solutions by adding constraints dynamically. This technique underpins FlowSAT's method of incrementally banning cycles to scale verification.

*How the paper uses it:* FlowSAT uses an iterative SAT solving approach to dynamically assign edge directions and eliminate cycles.

▶ [CIS1921 - Lecture 3 - Algorithms for SAT](https://www.youtube.com/watch?v=fNnZD8IkPv8) — Ishaan Lal · 1:04:05 · 2y ago

### FlowSAT paper talk *(paper-talk search result; attribution unverified)*
This talk presents the FlowSAT method directly from the authors, explaining the novel use of arrow variables and iterative cycle-breaking in equivalence checking for flow-based computing circuits. It consolidates understanding of the paper's core contributions.

*How the paper uses it:* It is the authors' presentation of the FlowSAT framework and experimental results.

▶ [Equivalence Checking Workshop Talk 2022](https://www.youtube.com/watch?v=eSJtoDc-3Tg) — compilerai · 1:10:48 · 4y ago

## Already in your library

- [LECTURE 25 Equivalence Checking Formal Verification](https://www.youtube.com/watch?v=Ff5TX3B7Zcg) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)
- [4. SAT I](https://www.youtube.com/watch?v=x-Ik9YAFAPo) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [lec03 SAT Problem](https://www.youtube.com/watch?v=ZqFVJiXqgYI) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)
- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)
- [Tutorial / SAT for Problem Solving](https://www.youtube.com/watch?v=GdrI3IESyVY) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)
- [Equivalence Checking / Formal Verification](https://www.youtube.com/watch?v=LfqNlRfpVWo) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)
- [Logic Gates | Boolean Algebra | Types of Logic Gates | AND, OR, NOT, NOR, NAND](https://www.youtube.com/watch?v=EW_2MhFu7tE) — also for: Symmetry-induced quantum-inspired parallelism of classical dynamic systems (Pinaki Mazumder)
- [DSA Python - Detect Cycle in Directed Graph | GFG Problem | DFS + Path Visited - Part 134 \[Hindi\]](https://www.youtube.com/watch?v=BrxY15Gz2DY) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)
- [6.8 Cycle detection in Directed Graph |Data Structures and Algorithms Tutorials](https://www.youtube.com/watch?v=AK7BuT5MgU0) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the FlowSAT paper's core ideas and challenges in equivalence checking for flow-based computing circuits. The beginner project focuses on implementing basic cycle detection in graphs, a foundational concept for FlowSAT's iterative cycle-breaking. The intermediate project involves reimplementing the FlowSAT iterative SAT-based cycle-breaking approach on small synthetic circuits, showing practical application of the paper's main method. The advanced project extends FlowSAT by exploring AI-based heuristics to guide cycle elimination, addressing the paper's stated future direction and scalability limitation.

### Beginner — Cycle Detection in Undirected Graphs for Flow-Based Circuits
*Effort: a weekend, ~8 hours*

You build a small tool that takes an undirected graph representing a simplified flow-based computing circuit and detects cycles using standard graph algorithms (e.g., DFS-based cycle detection). The tool visualizes the graph and highlights detected cycles.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental challenge posed by cycles in flow-based computing graphs, which is the core problem FlowSAT addresses by iterative cycle-breaking.

**Grounded in:** Identification of the challenge posed by bidirectional non-volatile memory devices causing cycles in flow-based computing graphs that break traditional SAT equivalence checking.

**Tech stack:** Python 3.11, networkx, matplotlib

**Data:** Synthetic small undirected graphs simulating flow-based computing circuits with cycles, created manually or via simple random graph generators.

**Build it:**

1. Implement a function to represent an undirected graph using networkx.
2. Write a DFS-based cycle detection algorithm to find all cycles in the graph.
3. Create a visualization of the graph and highlight detected cycles using matplotlib.
4. Test the tool on small example graphs with known cycles.
5. Document the approach and relate it to the cycle problem in flow-based computing.

**Ships as:** A Python script and README showing cycle detection on example graphs, with visualizations and explanation linking to the paper's problem context.

**Stretch goal:** Add support for detecting cycles incrementally as edges are added, mimicking the iterative nature of FlowSAT's cycle banning.

### Intermediate — Reimplementation of FlowSAT's Iterative Cycle-Breaking SAT Solver
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of FlowSAT's SAT formulation with arrow variables to dynamically assign directions and iteratively ban cycles. You apply it to small synthetic flow-based computing circuits and compare runtime and scalability against a baseline SAT formulation without iterative cycle banning.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into code, understand the iterative SAT solving approach, and evaluate its benefits quantitatively, mirroring the paper's key contributions and results.

**Grounded in:** Introduction of arrow helper variables to dynamically direct edges in the computational graph within the SAT formulation; Development of an iterative cycle-breaking algorithm that detects cycles from SAT solver models and bans them incrementally; Comprehensive experimental evaluation demonstrating FlowSAT's superior scalability and speed.

**Tech stack:** Python 3.11, PySAT (python-sat), networkx

**Data:** Synthetic small flow-based computing circuit graphs with bidirectional edges and cycles, generated programmatically to simulate benchmark circuits described in the paper.

**Build it:**

1. Implement a SAT encoding of the undirected graph with arrow variables representing edge directions.
2. Formulate constraints to ensure the directed graph is acyclic for a given input vector.
3. Use a SAT solver (PySAT) to find a satisfying assignment of arrow variables.
4. Detect cycles in the SAT solver's model and add constraints to ban these cycles iteratively.
5. Compare runtime and number of iterations against a baseline SAT encoding without iterative banning.
6. Document results and relate findings to the paper's experimental evaluation.

**Verified links from the paper:**

- <https://github.com/sventhijssen/factor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python project with code to run iterative SAT solving on synthetic circuits, a report comparing performance to baseline, and README explaining the method and results.

**Stretch goal:** Integrate visualization of the iterative cycle banning process and show how the graph evolves toward acyclicity.

### Advanced — AI-Guided Heuristics for Scalable Cycle Elimination in FlowSAT
*Effort: 3+ weeks*

You develop an extension to the iterative cycle-breaking approach by integrating AI-based heuristics (e.g., reinforcement learning or supervised learning) to prioritize which cycles to ban first, aiming to reduce the number of SAT solver iterations and improve scalability on larger synthetic crossbar circuits.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of FlowSAT's iterative method and the challenges of scaling it. It also applies your AI engineering skills to enhance the core algorithm.

**Grounded in:** The iterative cycle-breaking approach may increase variables and clauses as cycles grow in number, potentially impacting runtime for very dense or large circuits; Integration of AI-based methods to improve scalability and automation in equivalence checking.

**Tech stack:** Python 3.11, PySAT (python-sat), networkx, PyTorch or TensorFlow, scikit-learn

**Data:** Synthetic large-scale flow-based computing circuit graphs with many cycles, generated programmatically to simulate dense crossbar designs as described in the paper's sensitivity analysis.

**Build it:**

1. Implement the baseline iterative cycle-breaking SAT solver from the intermediate project.
2. Design features representing cycles and graph state for AI model input.
3. Collect data from solver runs to train a heuristic model predicting cycle banning impact.
4. Integrate the AI heuristic to guide cycle banning order during iterative SAT solving.
5. Evaluate performance improvements in runtime and solver iterations on large synthetic circuits.
6. Document methodology, experiments, and discuss limitations and future work.

**Verified links from the paper:**

- <https://github.com/sventhijssen/factor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A research-style codebase and report demonstrating AI-guided cycle banning with empirical evaluation, including code, trained models, and detailed README.

**Stretch goal:** Explore reinforcement learning to dynamically adapt heuristics during SAT solving for even better scalability.
