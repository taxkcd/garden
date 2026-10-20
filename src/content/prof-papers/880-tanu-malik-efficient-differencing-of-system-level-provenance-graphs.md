---
title: "880 · Efficient Differencing of System-level Provenance Graphs — Tanu Malik"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tanu-malik"
source_hash: "ebfd2a08542e5bd0fe1d6395a1c2182d3c372c822c393fb6f97a2d9fa503b8ba"
sequence: 880
generator: "outreach-garden: managed"
---

# 880 · Efficient Differencing of System-level Provenance Graphs

## At a glance

- **Professor:** Tanu Malik
- **Institution:** DePaul University
- **Paper:** [Efficient Differencing of System-level Provenance Graphs](https://dl.acm.org/doi/pdf/10.1145/3583780.3615171)
- **Authors:** Yuta Nakamura, Iyad Kanj, Tanu Malik
- **Year:** 2023

## Paper overview

This paper addresses the challenge of accurately comparing system-level data provenance graphs generated from application executions. Provenance data records the origin and evolution of data through system events, but current methods often miss application structures like loops and branches, reducing comparison accuracy. The authors propose a method to infer nested loop structures from event traces and use an 'unrolling' technique to mark loop iterations, improving the precision of trace comparisons significantly.

### Why it matters

**Research problem:** Current system-level provenance systems generate large volumes of low-level event traces but do not infer higher-level application structures such as loops and branches. This omission leads to inaccurate comparisons of provenance traces and low-quality provenance query results.

**Why it matters:** Accurate provenance trace comparison is vital for reproducibility, security diagnostics, and understanding application behavior changes. Without recognizing application structures, provenance systems provide less reliable insights, hindering scientific workflows and system auditing.

**Key contributions:**

- Inference of nested natural and unnatural loop structures from system-level provenance traces.
- Development of a loop-based unrolling method to mark loop iterations for improved trace comparison.
- Demonstration that incorporating inferred application structures improves trace comparison accuracy by 20-70% over methods ignoring such structures.
- Formal definition of points of divergence and convergence in traces using the unrolled graph.
- Experimental evaluation on real widely-used programs showing the presence of unnatural loops and improved precision.

## About the professor

**Tanu Malik** — Adjunct Faculty, School of Computing, DePaul University.

### Research links

- [Faculty/profile page](https://www.depaul.edu/faculty/tanu-malik)
- [Identity evidence](http://www.cdm.depaul.edu/Faculty-and-Staff/Pages/faculty-info.aspx?fid=1328)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph algorithms and data provenance
**The paper assumes:** graph theory, graph algorithms, and system-level data provenance concepts
**Already in this field?** Skip this entirely if you already understand graph algorithms and the basics of data provenance modeling in computer systems.

This background focuses on graph algorithms and data provenance concepts essential for understanding the paper's methods of inferring loop structures and unrolling provenance graphs for improved trace comparison. The rigorous course option provides a deep, structured university-level treatment of graph algorithms foundational to the paper's approach, while the fast track offers a concise, focused series covering core graph algorithm concepts quickly for efficient preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Algorithms Illuminated - Part 2: Graph Algorithms and Data Structures (Tim Roughgarden, Columbia University)](https://www.youtube.com/playlist?list=PLidiQIHRzpXL5HBHgSeV1YZX4J1J3nOFg) — Theoretical Computer Science School (TCSS) · 30 videos · 9.0h across 30 episodes

**Watch only this:** Lectures 9 1 through 10 9 (Graph Representations, Graph Search Overview, BFS, DFS, Topological Sort, Strongly Connected Components) totaling about 3.5 hours — these cover core graph concepts and algorithms needed to grasp the paper's graph differencing and loop unrolling methods.

*Why it unblocks this paper:* This Columbia University course by Tim Roughgarden covers graph algorithms and data structures in depth, including graph representations, BFS, DFS, topological sort, and strongly connected components, all directly relevant to understanding provenance graph structures, DAGs, and loop inference.

*If you want all of it:* All 30 episodes, about 9.0 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Theory](https://www.youtube.com/playlist?list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc) — Vivekanand Khyade - Algorithm Every Day · 29 videos · 6.4h across 29 episodes

**Watch only this:** Episodes 1 through 11 (Introduction to Graph, Graph Representation, Types of Graph, Degree of Vertex, Classes of Graph, Mother Vertex, Transitive Closure, BFS and DFS, Define Walk/Trail/Circuit/Path/Cycle, Tree in Data Structure, Forest with Tree) totaling about 2.5 hours — enough to grasp essential graph theory concepts for this paper.

*Why it unblocks this paper:* This concise Graph Theory playlist by Vivekanand Khyade covers fundamental graph concepts and algorithms such as graph representations, BFS, DFS, paths, cycles, and trees in short, clear episodes, providing a quick but solid foundation for understanding graph structures and traversal relevant to provenance graph analysis.

*If you want all of it:* All 29 episodes, about 6.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Efficient Differencing of System-level Provenance Graphs,' start by building foundational knowledge on data provenance in computing and program execution trace analysis, which underpin the provenance graph construction and interpretation. Next, study loop structure inference in traces and graph unrolling techniques, as these are key technical methods the paper innovates on to improve trace comparison. Finally, focus on the core concept of system-level provenance graph differencing, including the authors' own related talk if available, to grasp their novel approach and contributions.

### Data provenance in computing *(prerequisite)*
Understanding data provenance is essential as it forms the basis for tracking the origin and transformations of data, which is what provenance graphs represent. This foundational knowledge helps contextualize why accurate provenance graph differencing matters for reproducibility and security.

*How the paper uses it:* The paper improves provenance trace comparison accuracy, which relies on foundational concepts of data provenance.

▶ [Provenance for Database Transformations](https://www.youtube.com/watch?v=X0sJT0pdnIU) — Simons Institute for the Theory of Computing · 1:10:13 · Streamed 10y ago

### Program execution trace analysis *(prerequisite)*
Analyzing program execution traces is critical to understanding how system call event traces are generated and interpreted. This knowledge supports the paper's approach of inferring application structures from low-level event traces.

*How the paper uses it:* The paper infers nested loop structures from system call event traces, requiring understanding of execution trace analysis.

▶ [Reverse engineering through execution trace analysis - Gabriel Duque & Tanguy Dubroca](https://www.youtube.com/watch?v=nKvtXpgh7X8) — GConfs · 31:32 · 6y ago

### Loop structure inference in traces *(prerequisite)*
Loop inference is a key technique the paper uses to identify nested natural and unnatural loops from event traces. Understanding loops in programming and their detection in traces is necessary to appreciate the paper's method for improving provenance graph fidelity.

*How the paper uses it:* The paper's core contribution is inferring nested loop structures from system-level provenance traces.

▶ [Lecture 4: Loops over Strings, Guess-and-Check, and Binary](https://www.youtube.com/watch?v=fWNZAw5Bmco) — MIT OpenCourseWare · 1:13:16 · 2y ago

### Graph unrolling techniques *(prerequisite)*
Graph unrolling is the core approach used in the paper to mark loop iterations and enable precise detection of divergence and convergence points in provenance graphs. Familiarity with graph models and unrolling concepts is essential to understand the paper's methodology.

*How the paper uses it:* The paper develops a loop-based unrolling method to improve trace comparison accuracy.

▶ [3. Graph-theoretic Models](https://www.youtube.com/watch?v=V_TulH374hw) — MIT OpenCourseWare · 50:11 · 9y ago

### System-level provenance graph differencing
This is the central concept of the paper, focusing on improving the accuracy of comparing system-level provenance graphs by incorporating inferred application structures. Understanding this topic is crucial to grasp the paper's novel contributions and experimental results.

*How the paper uses it:* The paper proposes efficient differencing of system-level provenance graphs using inferred loop structures and unrolling.

▶ [DePaul CDM Research Colloquium - Tanu Malik - Recomputing on Provenance Graphs](https://www.youtube.com/watch?v=SolbW52QVFI) — DePaul Computing · 1:26:35 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational ideas of data provenance and program execution traces, then builds up to understanding loop structures in program traces, and finally covers graph unrolling techniques that are central to the paper's method for improving provenance graph comparison. The order ensures a beginner first grasps the basics of provenance and execution before tackling the paper's core contributions on loop inference and graph differencing.

### Data provenance in computing *(prerequisite)*
Data provenance tracks the origin and history of data as it flows and transforms through systems, which is essential for debugging, auditing, and reproducibility. Understanding provenance helps grasp why system-level provenance graphs are constructed and compared.

*How the paper uses it:* The paper improves provenance graph comparison accuracy by better modeling application structures in system-level provenance data.

▶ [Knowledge Graph Basics: Data Provenance](https://www.youtube.com/watch?v=gotLKDmI4-c) — Diffbot · 4:54 · 5y ago

### Program execution trace analysis *(prerequisite)*
Program execution traces record the sequence of events or system calls during a program run, providing raw data to analyze program behavior. Learning how to interpret these traces is key to understanding how loops and branches manifest in provenance graphs.

*How the paper uses it:* The paper infers loop structures from system call event traces to enhance provenance graph differencing.

▶ [Program execution example | Introduction to Computing | CS101_Topic037](https://www.youtube.com/watch?v=Uc-SruWIAV8) — Virtual University of Pakistan · 9:06 · 6y ago

### Loop structure inference in traces *(prerequisite)*
Loops are fundamental control structures that cause repeated execution of code blocks. Inferring loops from traces means identifying these repeated patterns, which helps reveal the program's higher-level structure beyond raw events.

*How the paper uses it:* The authors infer nested natural and unnatural loops from event traces to improve provenance graph modeling.

▶ [Lecture 4: Loops over Strings, Guess-and-Check, and Binary](https://www.youtube.com/watch?v=fWNZAw5Bmco) — MIT OpenCourseWare · 1:13:16 · 2y ago

### Graph unrolling techniques *(prerequisite)*
Graph unrolling duplicates loop bodies in a graph to explicitly represent each loop iteration, enabling precise analysis of where traces diverge or converge. This technique transforms cyclic structures into acyclic ones for easier comparison.

*How the paper uses it:* The paper applies a loop-based unrolling method to mark iterations and define divergence/convergence points in provenance graphs.

▶ [Master graphs for powerful presentations | Academic Conference Presentation](https://www.youtube.com/watch?v=JFus3-x1_YA) — University English Hub · 6:40 · 3y ago

### System-level provenance graph differencing
Differencing provenance graphs means comparing two execution traces to find where they differ, which is crucial for debugging and security. Incorporating inferred application structures like loops improves the accuracy of these comparisons.

*How the paper uses it:* This is the core method of the paper, improving trace comparison accuracy by leveraging loop inference and unrolling.

▶ [DePaul CDM Research Colloquium - Tanu Malik - Recomputing on Provenance Graphs](https://www.youtube.com/watch?v=SolbW52QVFI) — DePaul Computing · 1:26:35 · 5y ago

## Already in your library

- [AI Explained - Knowledge Graphs | Turning Raw Data Into Useful Information](https://www.youtube.com/watch?v=Q5izD6Xlb8o) — also for: ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition (Sathyanarayanan N. Aakur)
- [Using Graph Data to Detect Fraud](https://www.youtube.com/watch?v=MYJ6mYjlo0c) — also for: Understanding fraudulence in online qualitative studies: From the researcher’s perspective (Katie A. Siek)
- [Graph Convolutional Networks - Oxford Geometric Deep ...](https://www.youtube.com/watch?v=CwHNUX2GWvE) — also for: ORIGAMI: Orientation-Aware Graph Neural Network for Assessing Multimeric Interfaces of Protein Complex Structures (Debswapna Bhattacharya)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [GraphSAGE: Inductive Representation Learning on Large Graphs (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=3AzphNf5ja8) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Message Passing: How Graph Neural Networks Actually Work](https://www.youtube.com/watch?v=1DmNdMUbDkg) — also for: Bayesian Neighborhood Adaptation for Graph Neural Networks (Rui Li)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "Efficient Differencing of System-level Provenance Graphs." The beginner project focuses on reproducing the core idea of loop unrolling on a small synthetic trace to grasp the fundamental mechanism. The intermediate project implements the paper's loop inference and unrolling method on a small real or simulated provenance trace dataset and compares it against a baseline edit distance method, reporting accuracy improvements. The advanced project extends the method to handle parallel provenance traces, addressing a key limitation and exploring concurrency effects on trace comparison.

### Beginner — Loop Unrolling on Synthetic System Call Traces
*Effort: a weekend, ~8 hours*

You build a small tool that takes a synthetic system call event trace with manually annotated loops and applies the paper's loop unrolling technique to mark loop iterations explicitly. The tool outputs an unrolled graph representation of the trace, highlighting divergence and convergence points.

**Why it shows you understood the paper:** This project shows you understand the core concept of loop unrolling and how it improves trace comparison by explicitly marking loop iterations, a key contribution of the paper.

**Grounded in:** Development of a loop-based unrolling method to mark loop iterations for improved trace comparison.

**Tech stack:** Python 3.11

**Data:** Synthetic small-scale system call event traces you create manually to simulate loops and branches.

**Build it:**

1. Create a small synthetic event trace with nested loops represented as repeated sequences of events.
2. Implement a loop unrolling function that duplicates loop bodies and marks each iteration distinctly.
3. Represent the unrolled trace as a directed acyclic graph (DAG) structure.
4. Implement simple visualization or textual output to show divergence and convergence points in the unrolled graph.
5. Write a README explaining the loop unrolling process and how it relates to the paper.

**Ships as:** A Python script that unrolls loops in a synthetic trace and outputs an annotated DAG with iteration markings, plus documentation linking the implementation to the paper's loop unrolling method.

**Stretch goal:** Add support for detecting unnatural loops in the synthetic trace and unrolling them separately.

### Intermediate — Implementing Loop Inference and Trace Comparison on Sample Provenance Traces
*Effort: 2 weekends, ~20 hours*

You implement the paper's core method to infer nested natural and unnatural loops from system call event traces and apply loop unrolling to produce extended provenance graphs. You then compare pairs of traces using your method and a baseline simple edit distance, reporting accuracy improvements in identifying divergence points.

**Why it shows you understood the paper:** This project demonstrates that you can reimplement the paper's main algorithmic contribution and quantitatively evaluate its impact on trace comparison accuracy, showing comprehension of both loop inference and unrolling.

**Grounded in:** Inference of nested natural and unnatural loop structures from system-level provenance traces and demonstration that incorporating inferred application structures improves trace comparison accuracy by 20-70%.

**Tech stack:** Python 3.11, NetworkX (graph library), matplotlib (for visualization)

**Data:** Use small real or publicly available system call event traces from open-source applications or simulate traces with loops and branches to approximate the paper's data.

**Build it:**

1. Parse system call event traces into a suitable data structure representing events and their order.
2. Implement loop inference logic to detect nested natural and unnatural loops based on repeated event patterns.
3. Construct loop trees representing the inferred loop structures.
4. Apply the loop unrolling method to generate an extended DAG representation of the trace.
5. Implement a trace differencing function comparing unrolled graphs and a baseline simple edit distance on raw traces.
6. Evaluate and report accuracy improvements in identifying divergence points between trace pairs.
7. Document methodology, results, and comparison to the paper's reported metrics.

**Ships as:** A Python package that takes provenance traces, infers loops, unrolls them, compares traces, and outputs accuracy metrics with visualizations, along with a detailed README linking to the paper's contributions.

**Stretch goal:** Incorporate a simple heuristic to distinguish loops from branches more accurately than treating branches as loops.

### Advanced — Extending Loop Inference and Unrolling to Parallel Provenance Traces
*Effort: 3+ weeks*

You extend the paper's loop inference and unrolling methods to handle multi-threaded or parallel system-level provenance traces, addressing the paper's stated limitation. You develop a method to identify loops and concurrency structures in parallel traces, unroll them, and compare traces to analyze divergence and convergence under concurrency.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep understanding of the method and the challenges in applying it to parallel execution traces with complex control flow.

**Grounded in:** The method currently focuses on single-threaded application traces; parallel application traces with inner structure differences remain future work.

**Tech stack:** Python 3.11, NetworkX, multiprocessing or threading libraries for simulation, matplotlib

**Data:** Simulated or publicly available parallel system call traces with concurrency annotations; if unavailable, synthesize parallel traces with known loop and concurrency patterns.

**Build it:**

1. Research and understand concurrency models in system call traces and how parallelism affects event ordering.
2. Extend loop inference algorithms to detect loops in parallel traces, considering interleaved events and synchronization points.
3. Adapt the unrolling method to handle concurrent loop iterations and represent the extended graph as a DAG.
4. Implement trace comparison metrics that account for concurrency-induced variations.
5. Evaluate the method on parallel trace pairs, analyzing precision in divergence/convergence detection.
6. Document challenges, solutions, and how this extension relates to the original paper's approach.

**Ships as:** A research prototype Python tool that infers and unrolls loops in parallel provenance traces, compares them, and reports on divergence/convergence accuracy, with comprehensive documentation and discussion of limitations.

**Stretch goal:** Integrate dynamic tainting techniques to validate finer-grained differences in parallel traces as suggested by the paper's future directions.
