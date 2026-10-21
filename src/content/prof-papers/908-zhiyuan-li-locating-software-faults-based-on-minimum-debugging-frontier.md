---
title: "908 · Locating Software Faults Based on Minimum Debugging Frontier Set — Zhiyuan Li"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhiyuan-li"
source_hash: "01737bd8fc833a8e26a0353189705606c56ac5ce8afb8354b5e7fc4de7a0d50b"
sequence: 908
generator: "outreach-garden: managed"
---

# 908 · Locating Software Faults Based on Minimum Debugging Frontier Set

## At a glance

- **Professor:** Zhiyuan Li
- **Institution:** Purdue University
- **Paper:** [Locating Software Faults Based on Minimum Debugging Frontier Set](https://www.cs.purdue.edu/homes/ci/draft/NoCommentProof.pdf)
- **Authors:** Feng Li, Zhiyuan Li, Wei Huo, Xiaobing Feng
- **Year:** 2017

## Paper overview

This paper presents a new method for automatically locating software faults by analyzing program execution traces. The method uses a concept called the Minimum Debugging Frontier Set (MDFS) to efficiently narrow down the parts of the program state that are likely responsible for a failure. By iteratively selecting minimal sets of program points to examine and applying symbolic execution, the approach identifies root causes of failures more accurately and efficiently than previous methods.

### Why it matters

**Research problem:** Debugging software failures is time-consuming and challenging, especially locating the exact faulty program states or statements causing an observed failure. Existing state-based fault localization techniques can be costly and less accurate due to the large state space and complex dependencies.

**Why it matters:** Efficient and accurate fault localization reduces developer effort and accelerates software maintenance and reliability improvement. It is crucial for handling complex software systems where manual debugging is impractical.

**Key contributions:**

- Introduction of the Minimum Debugging Frontier Set (MDFS) concept for fault localization.
- A theoretical foundation and algorithms for constructing dynamic dependence graphs including summary control dependencies.
- An iterative fault localization scheme that narrows the analysis domain using MDFS and sparse symbolic exploration.
- A new sparse symbolic exploration technique that explores one execution path at a time to reduce symbolic execution cost.
- Experimental evaluation on 16 real-world bugs demonstrating higher accuracy and efficiency compared to state-of-the-art methods.

## About the professor

**Zhiyuan Li** — Professor of Computer Science, Department of Computer Science, Purdue University.

Research interests: compiler techniques for parallel processing and locality enhancement, programming interfaces and compiler support for innovative parallel software, programming environments and run-time systems for resource-constrained distributed systems

### Research links

- [Faculty/profile page](https://www.cs.purdue.edu/people/faculty/ci.html)
- [Identity evidence](https://www.cs.purdue.edu/people/faculty/ci)
- [Professor website](https://www.cs.purdue.edu/homes/ci/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** program analysis and symbolic execution
**The paper assumes:** program analysis, symbolic execution, dynamic dependence graphs, and constraint solving
**Already in this field?** Skip this entirely if you already have a solid understanding of program analysis techniques and symbolic execution methods used in software debugging.

To understand the paper's novel fault localization method based on Minimum Debugging Frontier Set, a solid grasp of program analysis concepts—especially dynamic dependence graphs and symbolic execution—is essential. The rigorous course option offers a deep, structured university-level introduction to symbolic execution techniques, while the fast track provides a concise, focused explainer series on symbolic execution to quickly build relevant intuition and practical understanding. Choose the lane that fits your available time and depth of study needs.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Symbolic Execution](https://www.youtube.com/playlist?list=PL6ZFt8zslw73FyVpxdwJFspzsXZJVQ9YG) — AdaLogics · 7 videos · 3.6h across 7 episodes

**Watch only this:** Episodes 1-4 (Symbolic execution by compilation with SymCC; Introduction to symbolic execution with KLEE; Introduction to symbolic execution with KLEE (part 2) - running six examples of diverse small C apps; Capturing memory corruptions with symbolic execution - Introduction to KLEE (part 3)), about 2 hours — these cover the basics and practical examples of symbolic execution needed to grasp the paper's methods.

*Why it unblocks this paper:* This concise series provides clear, practical introductions to symbolic execution concepts and tools like KLEE, directly relevant to the paper's use of symbolic execution for fault localization. It is well-suited for quickly gaining intuition and understanding of symbolic execution without deep theoretical overhead.

*If you want all of it:* All 7 episodes, about 3.6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Locating Software Faults Based on Minimum Debugging Frontier Set," start with foundational concepts including dynamic dependence graphs, symbolic execution, and program slicing, as these underpin the paper's approach to fault localization. Then, focus on the core concept of the Minimum Debugging Frontier Set (MDFS) and the authors' own talk if available, to grasp their novel method and its practical implications.

### Dynamic dependence graphs *(prerequisite)*
Dynamic dependence graphs are essential for understanding how the paper constructs the analysis domain and identifies minimal cut sets for fault localization. This lecture by Prof. Dr. Michael Pradel provides a rigorous academic treatment of program slicing and dynamic slicing, which are closely related to dependence graphs used in the paper.

*How the paper uses it:* The paper builds a dynamic dependence graph incorporating dynamic flow, direct control, and summary control dependencies to identify the Minimum Debugging Frontier Set.

▶ [Lecture "Program Slicing (Part 4, Dynamic Slicing)" of "Program Analysis"](https://www.youtube.com/watch?v=flkYsAkc8rA) — Michael Pradel · 25:19 · 5y ago

### Symbolic execution *(prerequisite)*
Symbolic execution is a core technique used in the paper to verify whether altering program states can eliminate failures. The MIT OpenCourseWare lecture by Prof. Armando Solar-Lezama offers a comprehensive and advanced introduction to symbolic execution, suitable for graduate-level understanding.

*How the paper uses it:* The paper uses symbolic execution with constraint solving to check the effects of state alterations on program failures during fault localization.

▶ [10. Symbolic Execution](https://www.youtube.com/watch?v=yRVZPvHYHzw) — MIT OpenCourseWare · 1:22:16 · 11y ago

### Program slicing and fault localization *(prerequisite)*
Program slicing concepts underpin the approach to narrowing down program states responsible for failures by focusing on relevant program parts. Michael Pradel's lecture on program slicing provides a detailed and research-level explanation of static and dynamic slicing techniques.

*How the paper uses it:* The paper's iterative narrowing of the analysis domain is conceptually related to program slicing techniques that isolate relevant program statements.

▶ [Lecture "Program Slicing (Part 1, Introduction)" of "Program Analysis"](https://www.youtube.com/watch?v=4qTgXbkIglc) — Michael Pradel · 10:32 · 5y ago

### Minimum Debugging Frontier Set (MDFS)
The Minimum Debugging Frontier Set is the central concept introduced by the paper to efficiently locate faults by selecting minimal sets of program points to examine. Although no direct author talk on MDFS is available, related advanced talks on automated debugging provide context on fault localization frameworks.

*How the paper uses it:* MDFS defines minimal cut sets in the dynamic dependence graph that the paper uses to iteratively isolate fault causes.

▶ [Automated Debugging as a Constraint Solving Problem](https://www.youtube.com/watch?v=Dcu3Mj0EDoE) — Microsoft Research · 1:05:53 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's approach to software fault localization, start by learning about program slicing and fault localization, which explain how to narrow down program parts related to failures. Then, grasp dynamic dependence graphs that model dependencies in program executions, followed by symbolic execution, a technique to explore program paths symbolically. Finally, focus on the paper's core concept, the Minimum Debugging Frontier Set (MDFS), which efficiently identifies minimal program points to examine for fault localization.

### Program slicing and fault localization *(prerequisite)*
Program slicing is a technique to extract parts of a program relevant to a particular computation or behavior, helping to isolate code affecting a failure. Fault localization uses these slices to pinpoint the exact statements or states causing bugs, reducing debugging effort.

*How the paper uses it:* The paper builds on program slicing concepts to narrow down program states responsible for failures.

▶ [Lecture "Program Slicing (Part 4, Dynamic Slicing)" of "Program Analysis"](https://www.youtube.com/watch?v=flkYsAkc8rA) — Michael Pradel · 25:19 · 5y ago

### Dynamic dependence graphs *(prerequisite)*
Dynamic dependence graphs represent dependencies between program statements during a specific execution, capturing how data and control flow influence each other. Understanding these graphs helps in tracking how faults propagate through program states.

*How the paper uses it:* The paper constructs dynamic dependence graphs to identify minimal cut sets for fault localization.

▶ [3.19 - Dependency Graph & Translation Scheme - CD](https://www.youtube.com/watch?v=Te6e7DD3U8o) — Ayan Memon · 18:19 · 1y ago

### Symbolic execution *(prerequisite)*
Symbolic execution explores program paths by treating inputs as symbolic variables rather than concrete values, allowing reasoning about many execution paths simultaneously. It helps verify if altering program states can prevent failures.

*How the paper uses it:* The paper uses symbolic execution to check if changing program states in the MDFS can eliminate failures.

▶ [10. Symbolic Execution](https://www.youtube.com/watch?v=yRVZPvHYHzw) — MIT OpenCourseWare · 1:22:16 · 11y ago

## Already in your library

- [L-4.15: BFS & DFS | Breadth First Search | Depth First Search | Graph Traversing | DAA](https://www.youtube.com/watch?v=N2P7w22tN9c) — also for: Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time (Thatchaphol Saranurak)
- [What is DAG?](https://www.youtube.com/watch?v=1Yh5S-S6wsI) — also for: Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf (Jian Huang)
- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the Minimum Debugging Frontier Set (MDFS) fault localization method from the paper. Starting with a small-scale reproduction of dynamic dependence graph construction and minimal cut sets, you then implement the core iterative MDFS algorithm with symbolic execution on a simple program and compare it to a baseline. Finally, you extend the approach to address a stated limitation by exploring heuristic detection of fault cancellations in dependence chains, showing deeper engagement with the paper's challenges.

### Beginner — Dynamic Dependence Graph and Minimal Cut Set Visualization
*Effort: a weekend, ~8 hours*

You build a tool that takes a small, simple program's execution trace (e.g., a short C++ or Python program with a known bug) and constructs a dynamic dependence graph including data and control dependencies. Then you implement an algorithm to find minimal cut sets (candidate MDFS) in this graph and visualize them.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core concept of dynamic dependence graphs and the Minimum Debugging Frontier Set as a minimal cut set, foundational to the fault localization approach.

**Grounded in:** Introduction of the Minimum Debugging Frontier Set (MDFS) concept for fault localization; A theoretical foundation and algorithms for constructing dynamic dependence graphs including summary control dependencies.

**Tech stack:** Python 3.11, NetworkX (graph library), Matplotlib or Plotly for visualization

**Data:** Use a small, self-created program with a known bug and its execution trace simulated or manually instrumented; no external dataset required.

**Build it:**

1. Write or select a small buggy program (e.g., a simple sorting or arithmetic program with a fault).
2. Manually or via lightweight instrumentation, collect an execution trace with statement instances and dependencies.
3. Implement construction of a dynamic dependence graph including data and control dependencies using NetworkX.
4. Implement an algorithm to find minimal cut sets (candidate MDFS) in the graph.
5. Visualize the graph and highlight the minimal cut sets.
6. Document the process and explain how the minimal cut sets relate to fault localization.

**Ships as:** A GitHub repo with code to build and visualize dynamic dependence graphs and minimal cut sets from a simple program trace, with a README explaining the relation to MDFS.

**Stretch goal:** Add support for summary control dependencies as described in the paper to enrich the dependence graph.

### Intermediate — Iterative MDFS Fault Localization with Sparse Symbolic Exploration
*Effort: 2 weekends, ~20 hours*

You implement the core iterative fault localization algorithm based on MDFS for a small open-source program with a known bug. You build the dynamic dependence graph, iteratively select MDFS sets, and apply symbolic execution with constraint solving to check state alterations. You compare your results to a simple baseline like predicate switching.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main algorithm and sparse symbolic exploration technique, and evaluate its effectiveness compared to a baseline, demonstrating comprehension of the method's efficiency and accuracy claims.

**Grounded in:** An iterative fault localization scheme that narrows the analysis domain using MDFS and sparse symbolic exploration; Experimental evaluation showing higher accuracy and efficiency compared to predicate switching.

**Tech stack:** Python 3.11, Z3 SMT solver (https://github.com/Z3Prover/z3), NetworkX, pytest for testing

**Data:** Use a small open-source program with a reproducible bug (e.g., a simple C program from public bug repositories or a small Python script with a known assertion failure).

**Build it:**

1. Select a small buggy program with a reproducible failure and define correctness criteria (assertions or output checks).
2. Implement dynamic dependence graph construction from the program's execution trace.
3. Implement the iterative MDFS selection algorithm to find minimal debugging frontier sets.
4. Integrate Z3 SMT solver to perform symbolic execution and constraint solving to check if altering states in MDFS can eliminate the failure.
5. Implement sparse symbolic exploration to reduce path exploration based on MDFS feedback.
6. Compare fault localization results and efficiency metrics against a simple baseline method like predicate switching.
7. Write tests and document the implementation and evaluation results.

**Verified links from the paper:**

- <https://github.com/Z3Prover/z3> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing iterative MDFS fault localization with symbolic execution, evaluation scripts comparing to predicate switching, and a detailed README with results and analysis.

**Stretch goal:** Add support for handling multiple faults and dynamic correctness property updates as described in the paper.

### Advanced — Heuristic Detection of Fault Cancellations in Dependence Chains
*Effort: 3+ weeks*

You extend the MDFS fault localization approach by designing and implementing heuristics to detect and handle cases where multiple faults in the same dependence chain cancel each other out, a limitation noted in the paper. You evaluate your heuristics on synthetic or small multi-fault programs and analyze their impact on localization accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep engagement with the method's challenges and the ability to innovate beyond the original approach.

**Grounded in:** Potential vulnerability when multiple faults in the same dependence chain cancel each other out, though not observed in tested cases; future direction to evaluate and handle such cases.

**Tech stack:** Python 3.11, Z3 SMT solver, NetworkX, pytest, Jupyter Notebook for analysis

**Data:** Create or synthesize small multi-fault programs where faults may cancel each other along dependence chains; no public dataset available.

**Build it:**

1. Review the original MDFS implementation from the intermediate project.
2. Design heuristics or detection mechanisms to identify suspicious dependence chains where fault cancellations might occur.
3. Implement these heuristics integrated with the MDFS iterative localization process.
4. Create or synthesize small multi-fault programs exhibiting fault cancellation scenarios.
5. Evaluate the heuristics' effectiveness in detecting and correctly localizing faults compared to the baseline MDFS approach.
6. Analyze results and document findings, limitations, and potential improvements.

**Verified links from the paper:**

- <https://github.com/Z3Prover/z3> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo extending the MDFS implementation with fault cancellation heuristics, evaluation scripts on multi-fault programs, and a comprehensive README discussing methodology and results.

**Stretch goal:** Explore extending the approach to handle multithreaded program failures or missing statement faults as further future directions.
