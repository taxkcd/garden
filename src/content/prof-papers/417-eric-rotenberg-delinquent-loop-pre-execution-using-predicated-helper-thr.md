---
title: "417 · Delinquent Loop Pre-execution Using Predicated Helper Threads — Eric Rotenberg"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-rotenberg"
source_hash: "d3b3ffddd77320cfd830045b8ba6f017addd760934dd96f2c44b0f810bc78b20"
sequence: 417
generator: "outreach-garden: managed"
---

# 417 · Delinquent Loop Pre-execution Using Predicated Helper Threads

## At a glance

- **Professor:** Eric Rotenberg
- **Institution:** North Carolina State University
- **Paper:** [Delinquent Loop Pre-execution Using Predicated Helper Threads](https://ericrotenberg.wordpress.ncsu.edu/files/2025/06/paper_HPCA-31_Phelps.pdf)
- **Authors:** Anirudh Seshadri, Eric Rotenberg
- **Year:** 2025

## Paper overview

This paper presents Phelps, a hardware-only technique that improves the prediction and execution of difficult-to-predict branches in loops by using helper threads that pre-execute branches and stores without relying on branch prediction. It addresses challenges with nested delinquent branches and control-dependent stores, enabling faster and more reliable execution in high-performance processors.

### Why it matters

**Research problem:** Delinquent branches, which are frequently mispredicted branches in loops, cause significant performance degradation and energy waste in superscalar processors. Prior branch pre-execution techniques struggle with nested delinquent branches and stores that influence and depend on these branches, often shifting misprediction bottlenecks to helper threads or ignoring stores, leading to incorrect outcomes.

**Why it matters:** Mispredicted branches waste tens to hundreds of cycles in high-performance processors, severely degrading performance and increasing energy consumption. Efficiently handling delinquent branches is critical to improving processor throughput and power efficiency, especially for workloads with complex control flow such as graph processing.

**Key contributions:**

- A novel hardware-only helper thread microarchitecture that unconditionally pre-executes nested delinquent branches without relying on branch prediction.
- Introduction of iteration-driven lockstep per-branch prediction queues to manage outcomes and maintain correct sequencing for guarded branches.
- Inclusion of predicated stores in helper threads to dynamically disambiguate store-load dependencies while removing control flow.
- Dual decoupled helper threads for nested loops to amortize helper thread start/stop overhead and tolerate inner loop mispredictions.
- A method to learn immediate predicate producers using a Control-Dependency Finite State Machine (CDFSM) matrix.

## About the professor

**Eric Rotenberg** — Professor of Electrical and Computer Engineering, Electrical and Computer Engineering, North Carolina State University.

Research interests: high-performance, low-power and reliable processor architectures

### Research links

- [Faculty/profile page](https://quantum.ncsu.edu/people/ericro)
- [Identity evidence](https://people.engr.ncsu.edu/ericro)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Architecture Branch Prediction
**The paper assumes:** modern processor microarchitecture, branch prediction mechanisms, speculative execution, and helper thread architectures
**Already in this field?** Skip this entirely if you already understand processor branch prediction techniques and speculative execution in superscalar processors.

This background focuses on branch prediction in computer architecture, a critical topic for understanding the challenges and innovations presented in the paper on predicated helper threads for delinquent branches. The rigorous course option provides a deep, structured university-level treatment of branch prediction and related microarchitectural concepts, while the fast track offers a concise, focused explainer series that covers the essentials quickly for efficient preparation.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Branch Prediction](https://www.youtube.com/playlist?list=PL1C2GgOjAF-IWC1AEXqWKFmAgZdQRJfZ6) — Padraic Edgington · 8 videos · 0.5h across 8 episodes

**Watch only this:** Episodes 1 through 5: 'Branch Prediction', 'Static Branch Predictors', 'Dynamic Branch Predictors', '(m, n) Branch Predictors', and 'Tournament Branch Predictors' (~15 minutes total). These cover the core concepts of branch prediction relevant to understanding the paper's context.

*Why it unblocks this paper:* This short playlist by Padraic Edgington provides a concise and clear introduction to branch prediction, including static and dynamic predictors, branch target buffers, and conditional execution bits, which directly relate to the paper's focus on improving branch prediction accuracy and helper thread execution.

*If you want all of it:* About 30 minutes across all 8 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Delinquent Loop Pre-execution Using Predicated Helper Threads,' start with foundational knowledge on branch prediction in superscalar processors, as delinquent branches are a specific challenge in this area. Next, build understanding of helper thread architectures and control dependency and predication in processors, both critical to grasping how Phelps manages pre-execution and store-load dependencies. Finally, focus on the core concept of delinquent branch pre-execution and the authors' own talk if available, to get the precise details of the Phelps technique and its innovations.

### Branch prediction in superscalar processors *(prerequisite)*
Branch prediction is fundamental to understanding how modern superscalar processors maintain high instruction throughput by guessing the direction of branches to avoid pipeline stalls. Delinquent branches are those that are difficult to predict and cause significant performance penalties, so a solid grasp of branch prediction mechanisms and challenges is essential before studying Phelps.

*How the paper uses it:* Delinquent branches cause mispredictions that Phelps aims to mitigate by pre-executing them with helper threads.

▶ [Digital Design and Computer Architecture - Lecture 17: Advanced Branch Prediction (Spring 2023)](https://www.youtube.com/watch?v=g9H_79ITdbM) — Onur Mutlu Lectures · 1:50:57 · Streamed 3 years ago

### Helper thread architectures *(prerequisite)*
Helper thread architectures involve using additional threads to speculatively execute parts of a program ahead of the main thread, improving performance by prefetching or precomputing results. Understanding these architectures is key to appreciating how Phelps constructs and manages helper threads to pre-execute delinquent branches and stores.

*How the paper uses it:* Phelps uses hardware-only helper threads to unconditionally pre-execute delinquent branches and stores in loops.

▶ [Minimal Multithreading - Exploiting Redundancy in Parallel Systems](https://www.youtube.com/watch?v=ZkHurHQUne8) — Microsoft Research · 1:17:59 · 9 years ago

### Control dependency and predication in processors *(prerequisite)*
Control dependencies arise when the execution of instructions depends on the outcome of branches, complicating speculative execution and store-load dependencies. Predication is a technique to convert control dependencies into data dependencies, enabling more straightforward speculative execution. This knowledge is crucial to understanding how Phelps handles control-dependent stores and nested delinquent branches without misprediction.

*How the paper uses it:* Phelps predicates stores on branch outcomes to handle control-dependent stores and maintain correctness during pre-execution.

▶ [Lecture 8. Pipelining II: Data and Control Dependence Handling - CMU - Comp. Arch. 2015 - Onur Mutlu](https://www.youtube.com/watch?v=2Sa55D_Ve4U) — Carnegie Mellon Computer Architecture · 1:51:54 · 11 years ago

### Delinquent branch pre-execution
Delinquent branch pre-execution is the core technique of Phelps, where helper threads unconditionally pre-execute difficult-to-predict branches, including nested ones, to reduce mispredictions and improve performance. Understanding this concept involves learning about iteration-driven lockstep prediction queues and predicated stores as implemented in Phelps.

*How the paper uses it:* This is the central method introduced by Phelps to improve prediction and execution of delinquent branches in loops.

▶ [Lecture 25: Prefetching - Carnegie Mellon - Computer Architecture 2015 - Onur Mutlu](https://www.youtube.com/watch?v=ibPL7T9iEwY) — Carnegie Mellon Computer Architecture · 1:43:15 · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the Phelps technique for improving branch prediction and execution in processors. We start with basic branch prediction in superscalar processors, then explore helper thread architectures and control dependency with predication, followed by speculative execution and misprediction mitigation. Finally, we focus on the core Phelps method of delinquent branch pre-execution using predicated helper threads.

### Branch prediction in superscalar processors *(prerequisite)*
Branch prediction is a technique used in modern processors to guess the outcome of conditional branches to keep the instruction pipeline full and avoid stalls. Superscalar processors issue multiple instructions per cycle, making accurate branch prediction critical to maintain high throughput and avoid costly mispredictions.

*How the paper uses it:* Understanding branch prediction challenges is essential since Phelps targets frequent mispredictions in loops that degrade superscalar processor performance.

▶ [How Branch Prediction Works in CPUs - Computerphile](https://www.youtube.com/watch?v=nczJ58WvtYo) — Computerphile · 25:57 · 2 years ago

### Helper thread architectures *(prerequisite)*
Helper threads are additional hardware or software threads that run alongside the main thread to pre-execute instructions or perform speculative work, helping to reduce stalls and improve performance. They can offload complex or uncertain computations, such as difficult branches, to improve the main thread's efficiency.

*How the paper uses it:* Phelps uses hardware-only helper threads to pre-execute delinquent branches unconditionally, making understanding helper thread architectures key to grasping the approach.

▶ [Introduction to Threads](https://www.youtube.com/watch?v=LOfGJcVnvAk) — Neso Academy · 14:06 · 7 years ago

### Control dependency and predication in processors *(prerequisite)*
Control dependency occurs when the execution of instructions depends on the outcome of a branch. Predication is a technique that converts control dependencies into data dependencies by executing instructions conditionally based on predicates, reducing pipeline stalls and mispredictions.

*How the paper uses it:* Phelps handles control-dependent stores and branches by predicating them on branch outcomes, enabling correct pre-execution without relying on branch prediction.

▶ [Lecture 8. Pipelining II: Data and Control Dependence Handling - CMU - Comp. Arch. 2015 - Onur Mutlu](https://www.youtube.com/watch?v=2Sa55D_Ve4U) — Carnegie Mellon Computer Architecture · 1:51:54 · 11 years ago

### Speculative execution and branch misprediction mitigation *(prerequisite)*
Speculative execution allows processors to execute instructions ahead of time based on predicted paths, improving performance but risking wasted work if predictions are wrong. Various techniques exist to mitigate the penalties of branch mispredictions, including hardware and software methods.

*How the paper uses it:* Phelps is a hardware-only speculative execution technique that reduces misprediction penalties by pre-executing delinquent branches using helper threads.

▶ [How CPUs Predict the Future Speculative Execution Explained   Software Execution](https://www.youtube.com/watch?v=Gz05V8vWCAE) — Software Explained · 13:34 · 4 months ago

## Already in your library

- [SAFARI Live Seminar - Automatic Detection of Microarchitectural Leaks](https://www.youtube.com/watch?v=rzSxWEr4qPs) — also for: MicroSampler: A Framework for Microarchitecture-Level Leakage Detection in Constant Time Execution (Radu Teodorescu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of the Phelps technique for delinquent branch pre-execution. The beginner project recreates a core mechanism of predicated helper threads in a simplified simulation. The intermediate project implements a simplified version of Phelps's iteration-driven lockstep prediction queues and predicated stores on a small loop benchmark, comparing against a baseline without helper threads. The advanced project extends Phelps by exploring optimizations to reduce helper thread instruction overhead, addressing one of the paper's stated limitations.

### Beginner — Simulate Predicated Helper Thread Execution for Nested Delinquent Branches
*Effort: a weekend, ~8 hours*

You build a simplified software simulation in Python that models a main thread executing a loop with nested delinquent branches and a helper thread that pre-executes these branches using predication to avoid branch mispredictions. The simulation tracks branch outcomes and demonstrates how predicated stores can maintain correctness without relying on branch prediction.

**Why it shows you understood the paper:** This project shows you understand the core idea of unconditional pre-execution of nested delinquent branches with predicated stores, a key contribution of Phelps, by faithfully reproducing the mechanism in a simplified environment.

**Grounded in:** A novel hardware-only helper thread microarchitecture that unconditionally pre-executes nested delinquent branches without relying on branch prediction; Inclusion of predicated stores in helper threads to dynamically disambiguate store-load dependencies while removing control flow.

**Tech stack:** Python 3.11

**Data:** Synthetic loop control flow and branch outcome data generated within the simulation to mimic nested delinquent branches.

**Build it:**

1. Implement a Python model of a loop with nested delinquent branches and control-dependent stores.
2. Implement a helper thread simulation that pre-executes all delinquent branches unconditionally using predication.
3. Model the effect of predicated stores to maintain correct store-load dependencies without control flow.
4. Run the simulation to compare misprediction counts with and without the helper thread.
5. Document the simulation design, results, and how it maps to Phelps's mechanism.

**Ships as:** A Python simulation repository with README explaining the predicated helper thread mechanism and results showing reduced mispredictions in nested delinquent branches.

**Stretch goal:** Add visualization of branch outcome sequences and predication masks to better illustrate the lockstep execution.

### Intermediate — Implement Iteration-Driven Lockstep Prediction Queues for Delinquent Branches
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of Phelps's iteration-driven lockstep per-branch prediction queues and predicated store handling in a cycle-accurate simulator or a detailed software model. You run experiments on a small loop benchmark with nested delinquent branches, comparing MPKI and execution speed against a baseline without helper threads.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core Phelps method from the paper's description, including the novel lockstep prediction queues and predicated stores, and quantitatively evaluate its impact on branch misprediction and performance.

**Grounded in:** Introduction of iteration-driven lockstep per-branch prediction queues to manage outcomes and maintain correct sequencing for guarded branches; Including predicated stores in helper threads improves accuracy by dynamically disambiguating store-load dependencies.

**Tech stack:** Python 3.11, C++ (optional for simulation speed), Jupyter Notebook for analysis

**Data:** Synthetic loop benchmarks with nested delinquent branches created based on the paper's descriptions; no public dataset available.

**Build it:**

1. Design data structures to represent per-branch prediction queues and iteration-driven lockstep execution.
2. Implement a software simulator that models main and helper thread execution with predicated stores.
3. Create synthetic nested loop benchmarks with delinquent branches to test the simulator.
4. Measure MPKI and execution cycles with and without the helper thread mechanism.
5. Analyze and plot results comparing baseline and Phelps-inspired pre-execution.
6. Write a detailed README explaining the implementation, evaluation, and relation to the paper.

**Ships as:** A repository with simulator code, benchmark scripts, analysis notebooks, and documentation showing quantitative improvements in MPKI and execution speed.

**Stretch goal:** Integrate a simple heuristic to simulate dual decoupled helper threads for nested loops and evaluate overhead amortization.

### Advanced — Optimize Helper Thread Instruction Overhead in Phelps Pre-execution
*Effort: 3+ weeks*

You extend the intermediate simulator to explore and implement optimizations aimed at reducing the helper thread instruction overhead, such as selective pre-execution, resource sharing strategies, or adaptive helper thread start/stop policies. You evaluate the impact on instruction overhead, MPKI, and performance on synthetic delinquent loop benchmarks.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by proposing and evaluating concrete optimizations to reduce helper thread overhead, demonstrating deep comprehension and ability to contribute novel ideas based on Phelps.

**Grounded in:** Phelps incurs overhead due to partially redundant execution in helper threads; Exploring optimizations to reduce helper thread instruction overhead and improve resource sharing.

**Tech stack:** Python 3.11, C++ (optional), Jupyter Notebook, Git for version control

**Data:** Synthetic benchmarks simulating delinquent loops with varying complexity and nested branches, generated as in the intermediate project.

**Build it:**

1. Review the intermediate simulator implementation and identify sources of helper thread instruction overhead.
2. Design and implement one or more optimization strategies to reduce redundant helper thread execution.
3. Modify the simulator to support adaptive helper thread start/stop and resource sharing.
4. Run experiments comparing baseline Phelps simulation and optimized versions on synthetic benchmarks.
5. Analyze trade-offs between overhead reduction, MPKI, and performance gains.
6. Document the optimization approaches, results, and implications for hardware implementation.

**Ships as:** A repository with enhanced simulator code, experimental results, and a comprehensive report discussing optimization effectiveness and future work.

**Stretch goal:** Propose a software-hardware co-design approach to better identify delinquent branches dynamically and integrate it into the simulation.
