---
title: "783 · Automatic Parallelism Management — Matthew Fluet"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-matthew-fluet"
source_hash: "26802af16aef58ced61e5e0e946a0bdf84ce10842d646b676ad1882f26454679"
sequence: 783
generator: "outreach-garden: managed"
---

# 783 · Automatic Parallelism Management

## At a glance

- **Professor:** Matthew Fluet
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Automatic Parallelism Management](https://dl.acm.org/doi/pdf/10.1145/3632880)
- **Authors:** Sam Westrick, Matthew Fluet, Mike Rainey, Umut A. Acar
- **Year:** 2024

## Paper overview

This paper addresses the challenge of efficiently managing parallelism in modern multicore computing. It proposes a novel approach that combines compiler techniques and runtime scheduling to automatically control the creation and execution of parallel tasks in high-level functional programming languages. The approach introduces a new calling convention called 'potentially parallel calls' (pcall) that allows parallelism to be expressed liberally by programmers without incurring high overhead. A dynamic scheduler selectively promotes these calls into actual parallel tasks, balancing performance and overhead. The system is implemented in an extension of the Parallel ML compiler and demonstrates good practical performance without requiring manual tuning.

### Why it matters

**Research problem:** Parallel programming on multicore architectures is difficult because programmers must manually optimize the amount of parallelism to balance overhead costs and performance benefits. This is especially challenging in high-level languages with features like higher-order functions and polymorphism, where reasoning about the cost of parallelism is complex. The problem is to automatically manage parallelism to minimize overhead while preserving performance without requiring manual tuning.

**Why it matters:** As multicore processors become ubiquitous, exploiting parallelism is essential for performance. However, manual tuning of parallelism is error-prone, time-consuming, and requires deep hardware and software knowledge. Automating parallelism management can make parallel programming more accessible, reduce bugs, and improve performance portability across architectures.

**Key contributions:**

- A compilation technique introducing potentially parallel calls (pcall) that embed potential parallelism into the call stack with nearly zero overhead.
- A formal semantics for an SSA intermediate language extended with pcall, including synchronization primitives getjoin and setjoin.
- A dynamic parallelism management algorithm that schedules promotions of pcalls to balance work-efficiency and span-efficiency.
- An implementation of these techniques in MPLs, extending the Parallel ML compiler and runtime.
- An experimental evaluation demonstrating that MPLs effectively amortizes parallelism costs while preserving performance and scalability.

## About the professor

**Matthew Fluet** — Associate Professor and Graduate Program Director, Department of Computer Science, Rochester Inst. of Technology.

Research interests: programming languages, including compiler technology, parallelism and concurrency, type systems, and program semantics

### Research links

- [Faculty/profile page](https://www.cs.rit.edu/~mtf)
- [Professor website](http://www.cs.rit.edu/~mtf)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel Programming and Task Scheduling
**The paper assumes:** parallel programming models, task scheduling algorithms, work-span theory, and runtime parallelism management
**Already in this field?** Skip this entirely if you already have a solid understanding of parallel programming concepts and runtime task scheduling techniques.

To understand the paper on Automatic Parallelism Management, it is essential to grasp core concepts of parallel programming, task parallelism, and dynamic scheduling. The rigorous course option provides a comprehensive, university-level deep dive into parallel computing fundamentals, while the fast track offers a concise, approachable introduction to parallel programming concepts and task scheduling. Choose the course for thorough mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 Parallel Computing](https://www.youtube.com/playlist?list=PLosJChMwPtizq2swoD8DZXc567PJ9YKnn) — kein406 · 18 videos

**Watch only this:** Lectures 1 through 6, about 6.5 hours — covering parallelism motivation, multicore architecture, parallel programming basics, and performance optimization including work distribution and scheduling.

*Why it unblocks this paper:* Stanford CS149 Parallel Computing is a top-tier university course covering parallel programming basics, work distribution, scheduling, and performance optimization, directly relevant to understanding the paper's compiler and runtime scheduling techniques.

*If you want all of it:* 23.2 hours across all 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Course: Task-based parallelism in scientific computing (spring 2021)](https://www.youtube.com/playlist?list=PL6jMHLEmPVLyVIp67mW1cRj0xbL-6iFMY) — HPC2N · 9 videos · 5.1h across 9 episodes

**Watch only this:** Lectures 1 through 4, about 2.3 hours — covering introduction to task-based parallelism and OpenMP task basics.

*Why it unblocks this paper:* The 'Task-based parallelism in scientific computing' series provides a focused introduction to task-based parallelism and runtime scheduling, which aligns well with the paper's focus on dynamic task promotion and scheduling heuristics.

*If you want all of it:* 5.1 hours across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Automatic Parallelism Management,' start by building a foundation in key concepts such as Static Single Assignment (SSA) form, parallel functional programming, task parallelism runtime scheduling, and the work-span model of parallelism. These foundational topics provide the necessary background on compiler intermediate representations, functional programming parallelism, runtime scheduling strategies, and theoretical performance models. Finally, focus on the paper's core novel contribution—the potentially parallel calls (pcall) concept—and the authors' own detailed presentation of their approach, which ties all these elements together into a practical compiler and runtime system.

### Static Single Assignment SSA lecture *(prerequisite)*
Understanding SSA form is essential because the paper uses an SSA intermediate representation extended with the pcall calling convention. SSA is a fundamental compiler technique that simplifies data flow analysis and optimization, which underpins the paper's compilation strategy.

*How the paper uses it:* The paper introduces a new calling convention embedded in an SSA intermediate language to represent potential parallelism.

▶ [GopherCon 2017: Generating Better Machine Code with SSA - Keith Randall](https://www.youtube.com/watch?v=uTMvKVma5ms) — Gopher Academy · 34:43 · 9y ago

### Parallel functional programming lecture *(prerequisite)*
The paper targets parallelism in high-level functional languages like Parallel ML, so understanding parallel functional programming concepts is crucial. This includes how pure functional languages express parallelism and the challenges in managing it efficiently.

*How the paper uses it:* The system is implemented in MPLs, an extension of the Parallel ML compiler, and the paper builds on prior work in parallel functional programming.

▶ [Disentanglement: Provably Efficient Parallel Functional Programming](https://www.youtube.com/watch?v=XCtIsgByg9w) — Sam Westrick · 53:33 · 5y ago

### Task parallelism runtime scheduling lecture *(prerequisite)*
The paper's dynamic scheduler selectively promotes potentially parallel calls into actual parallel tasks at runtime. Understanding task parallelism and runtime scheduling algorithms provides insight into how the system balances overhead and parallelism.

*How the paper uses it:* The paper proposes a dynamic parallelism management algorithm that schedules promotions of pcalls to balance work- and span-efficiency.

▶ [Lecture 1: Introduction to task-based parallelism](https://www.youtube.com/watch?v=ZDP3SaiBq3U) — HPC2N · 49:16 · 5y ago

### Work-span model parallelism lecture *(prerequisite)*
The paper proves that their approach preserves work- and span-efficiency, which are key theoretical metrics in parallel algorithm analysis. Understanding the work-span model helps in grasping the performance guarantees and theoretical bounds presented.

*How the paper uses it:* The approach guarantees low overhead and preserves theoretical parallelism (span) with provable bounds.

▶ [Work, Span and Parallelism: The Work Law and Span Law for Parallel Algorithms | DSA Course L138](https://www.youtube.com/watch?v=dUJdY74ZUP4) — The Modern SDE · 11:13 · 2w ago

### Automatic Parallelism Management talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides a direct and detailed presentation of their novel approach, including the design, implementation, and evaluation of their system. This talk ties together the foundational concepts with the paper's contributions and results.

*How the paper uses it:* This is the authors' own presentation of their work on automatic parallelism management.

▶ [Automatic Parallelism Management](https://www.youtube.com/watch?v=cKm2dboRoHg) — Simons Institute for the Theory of Computing · 34:36 · Streamed 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand automatic parallelism management as presented in the paper, start by building a foundation in the work-span model of parallelism, which explains how parallel programs are analyzed for efficiency. Next, learn about task parallelism and runtime scheduling to grasp how parallel tasks are managed dynamically. Then, study the basics of parallel functional programming to appreciate the language context. After that, understand Static Single Assignment (SSA) form, since the paper uses SSA as an intermediate representation. Finally, explore the core concept of potentially parallel calls (pcall), the novel calling convention introduced by the paper to embed parallelism with low overhead.

### Work-span model parallelism lecture *(prerequisite)*
The work-span model provides a way to analyze parallel programs by measuring total work (time on one processor) and span (critical path length). Understanding this model helps explain the theoretical limits of parallel speedup and efficiency.

*How the paper uses it:* The paper proves that their approach preserves work- and span-efficiency, ensuring low overhead and good parallel performance.

▶ [Work, Span and Parallelism: The Work Law and Span Law for Parallel Algorithms | DSA Course L138](https://www.youtube.com/watch?v=dUJdY74ZUP4) — The Modern SDE · 11:13 · 2w ago

### Task parallelism runtime scheduling lecture *(prerequisite)*
Task parallelism involves breaking a program into tasks that can run concurrently, and runtime scheduling decides when and where to execute these tasks. Learning about dynamic scheduling algorithms clarifies how parallelism is managed efficiently at runtime.

*How the paper uses it:* The paper's dynamic scheduler selectively promotes potentially parallel calls into actual parallel tasks using a token accounting algorithm.

▶ [Greedy Scheduling and Parallel Loops: The Work-Span Bound, Proved | DSA Course L139](https://www.youtube.com/watch?v=wP_V9GLVjjs) — The Modern SDE · 10:58 · 2w ago

### Parallel functional programming lecture *(prerequisite)*
Parallel functional programming uses functional languages to express parallelism naturally, benefiting from immutability and higher-order functions. This background helps understand the language setting and challenges addressed by the paper.

*How the paper uses it:* The paper targets parallelism management in Parallel ML, a high-level functional programming language.

▶ [Disentanglement: Provably Efficient Parallel Functional Programming](https://www.youtube.com/watch?v=XCtIsgByg9w) — Sam Westrick · 53:33 · 5y ago

### Static Single Assignment SSA lecture *(prerequisite)*
SSA form is an intermediate representation used in compilers where each variable is assigned exactly once, simplifying optimization and analysis. Understanding SSA is key to grasping how the paper embeds parallelism into the call stack.

*How the paper uses it:* The paper introduces a new calling convention in an SSA intermediate language to represent potentially parallel calls.

▶ [GopherCon 2017: Generating Better Machine Code with SSA - Keith Randall](https://www.youtube.com/watch?v=uTMvKVma5ms) — Gopher Academy · 34:43 · 9y ago

## Already in your library

- [Concurrency Vs Parallelism!](https://www.youtube.com/watch?v=RlM9AfWf1WU) — also for: Understanding Learners’ Problem-Solving Strategies in Concurrent and Parallel Programming: A Game-Based Approach (Bruce W. Char)
- [SSA1 Introduction to SSA Form](https://www.youtube.com/watch?v=3d9zfdWXGh0) — also for: Automatic Data Enumeration for Fast Collections (Simone Campanoni)
- [Programming Paradigms | Functional Programming | Object Oriented Programming | Logic | java world](https://www.youtube.com/watch?v=ySBTM-FKEtg) — also for: Functional Python Programming in Introductory Computer Science Courses (Raj Sunderraman)
- [Functional programming - A general introduction](https://www.youtube.com/watch?v=8z_bUIl_uPo) — also for: Drafter: A Python Library for Full-Stack Web Development in CS1 (Austin Cory Bart)
- [Fork-Join Parallelism & Scheduling | Chapter 26 – Introduction to Algorithms (4th)](https://www.youtube.com/watch?v=iZZ7NIYoqB4) — also for: Parallel Batch-Dynamic Maximal Independent Set (Jeremy T. Fineman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Automatic Parallelism Management." The beginner project recreates a core concept of potentially parallel calls (pcall) with minimal overhead in a simple functional style. The intermediate project builds and runs the MPLs compiler and runtime from the authors' implementation to reproduce and analyze the dynamic scheduling algorithm's impact on parallelism overhead and performance. The advanced project extends the dynamic scheduling algorithm by implementing an adaptive token tuning heuristic to address a stated limitation and explore improved performance portability.

### Beginner — Simulate Potentially Parallel Calls with Lightweight Task Promotion
*Effort: a weekend, ~8 hours*

You build a small prototype in a functional language (e.g., OCaml or Haskell) or JavaScript that simulates the pcall calling convention by representing function calls as either sequential or potentially parallel. The system tracks work tokens and selectively promotes calls to parallel tasks based on a simple heuristic to avoid overhead. This prototype models the core idea of embedding potential parallelism with minimal overhead.

**Why it shows you understood the paper:** This project shows you grasp the paper's key contribution of the pcall calling convention and the dynamic promotion mechanism to balance parallelism overhead and performance.

**Grounded in:** A compilation technique introducing potentially parallel calls (pcall) that embed potential parallelism into the call stack with nearly zero overhead.

**Tech stack:** OCaml or Haskell or JavaScript (Node.js)

**Data:** No external data needed; you simulate function calls and task promotions with synthetic workloads.

**Build it:**

1. Implement a simple function call simulation where calls are marked as sequential or pcall.
2. Create a token accounting mechanism that tracks work done and tokens available for promotion.
3. Implement a scheduler that promotes pcalls to parallel tasks only when tokens justify the overhead.
4. Run synthetic recursive or divide-and-conquer workloads to demonstrate selective parallelism.
5. Measure and log the number of promotions and overhead compared to naive parallel task creation.

**Ships as:** A repository with code simulating pcall semantics, a README explaining the design, and logs showing how promotions are controlled to reduce overhead.

**Stretch goal:** Add visualization of the call stack and token usage over time to illustrate the dynamic scheduling decisions.

### Intermediate — Run and Analyze MPLs Parallelism Management on Benchmarks
*Effort: 1-3 weekends, ~20 hours*

You clone and build the MPLs compiler and runtime from https://github.com/MPLLang/mpl and run the parallel-ml-bench benchmarks from https://github.com/MPLLang/parallel-ml-bench. You reproduce the paper's experiments measuring overhead and scalability with and without the dynamic promotion algorithm. You compare results against a baseline naive parallel task creation to quantify overhead reduction.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' implementation, understand the dynamic scheduling algorithm, and interpret performance metrics that validate the paper's claims of work- and span-efficiency.

**Grounded in:** An implementation of these techniques in MPLs, extending the Parallel ML compiler and runtime. An experimental evaluation demonstrating that MPLs effectively amortizes parallelism costs while preserving performance and scalability.

**Tech stack:** OCaml (for MPLs), Linux or macOS environment, Make or build tools, Benchmark scripts

**Data:** Use the parallel-ml-bench benchmark suite from https://github.com/MPLLang/parallel-ml-bench as provided by the authors.

**Build it:**

1. Clone https://github.com/MPLLang/mpl and https://github.com/MPLLang/parallel-ml-bench.
2. Follow build instructions to compile the MPLs compiler and runtime.
3. Run the benchmark suite with default settings to collect baseline performance data.
4. Modify or disable the dynamic promotion algorithm to create a naive parallel task baseline.
5. Compare runtime, overhead, and scalability metrics between the default and naive runs.
6. Document findings and relate them to the paper's reported results.

**Verified links from the paper:**

- <https://github.com/MPLLang/mpl> — released by the paper's authors
- <https://github.com/MPLLang/parallel-ml-bench> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository fork or branch with build scripts, benchmark results, and a README analyzing the dynamic scheduling's impact on overhead and performance.

**Stretch goal:** Experiment with tuning the token generation parameters and observe their effect on performance across different benchmarks.

### Advanced — Adaptive Token Tuning for Dynamic Parallelism Scheduling
*Effort: a few weeks, ~40+ hours*

You extend the MPLs runtime scheduler to implement an adaptive heuristic that automatically tunes the token generation rate and promotion interval based on observed workload characteristics at runtime. This addresses the paper's limitation regarding static tuning parameters. You evaluate the adaptive scheduler on the parallel-ml-bench suite and compare performance and overhead against the static parameter baseline.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep comprehension of the dynamic scheduling algorithm and the challenges of parameter tuning for diverse workloads.

**Grounded in:** Tunable parameters (token generation rate and interval) must be set appropriately to balance overhead and parallelism exposure. Investigating automated tuning of the algorithm's parameters for improved performance portability.

**Tech stack:** OCaml (MPLs runtime), Linux or macOS environment, Benchmarking tools, Git

**Data:** Use the parallel-ml-bench benchmark suite from https://github.com/MPLLang/parallel-ml-bench for evaluation.

**Build it:**

1. Study the MPLs runtime scheduler code to understand token accounting and promotion logic.
2. Design and implement an adaptive heuristic that monitors runtime metrics (e.g., task queue length, promotion success rate) to adjust token generation parameters dynamically.
3. Integrate the adaptive heuristic into the MPLs runtime scheduler.
4. Run benchmarks from parallel-ml-bench with the adaptive scheduler and collect performance data.
5. Compare results against the static parameter baseline to evaluate improvements or regressions.
6. Document the design, implementation challenges, and evaluation results.

**Verified links from the paper:**

- <https://github.com/MPLLang/mpl> — released by the paper's authors
- <https://github.com/MPLLang/parallel-ml-bench> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A fork or branch of MPLs with adaptive token tuning, benchmark results showing its impact, and a detailed README discussing the approach and findings.

**Stretch goal:** Extend the adaptive heuristic to support more complex parallelism patterns beyond fork-join, such as nested or irregular parallelism.
