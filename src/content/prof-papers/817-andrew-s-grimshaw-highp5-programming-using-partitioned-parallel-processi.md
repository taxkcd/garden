---
title: "817 · HighP5: Programming using Partitioned Parallel Processing Spaces — Andrew S. Grimshaw"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-s-grimshaw"
source_hash: "afdf071cb9e4980901406d5ecbe109aa08aa3c140459f9efe00c2892b46cd7b8"
sequence: 817
generator: "outreach-garden: managed"
---

# 817 · HighP5: Programming using Partitioned Parallel Processing Spaces

## At a glance

- **Professor:** Andrew S. Grimshaw
- **Institution:** University of Virginia
- **Paper:** [HighP5: Programming using Partitioned Parallel Processing Spaces](https://journals-sol.sbc.org.br/index.php/jbcs/article/download/4345/3038)
- **Authors:** Muhammad Nur Yanhaona, Andrew Grimshaw, Shahriar Hasan Mickey
- **Year:** 2024

## Paper overview

HighP5 is a new high-level parallel programming language designed to improve programmer productivity, program portability, and performance by introducing a hardware-cognizant programming paradigm. It uses a novel type architecture called Partitioned Parallel Processing Spaces (PCubeS) to model modern hierarchical and hybrid hardware architectures, enabling programmers to write efficient parallel programs that are portable across different platforms. The language features a declarative syntax that separates program semantics from hardware mapping, allowing easier performance tuning and portability without rewriting code.

### Why it matters

**Research problem:** Existing parallel programming methods are either low-level and hardware-specific, making programming complex and non-portable, or high-level but hardware-agnostic, leading to poor performance on modern hierarchical and hybrid architectures. There is a lack of a unified programming model that exposes hardware features and costs to programmers while maintaining productivity and portability.

**Why it matters:** Efficient parallel programming is critical for leveraging the computational power of modern multi-layered, heterogeneous architectures such as multicore CPUs, distributed memory systems, and GPUs. Without a programming model that balances performance, portability, and productivity, programmers face significant challenges in writing efficient, maintainable, and portable parallel code, which limits scientific and industrial computing advances.

**Key contributions:**

- Design and formalization of the PCubeS type architecture that accurately models hierarchical and hybrid parallel hardware.
- Development of HighP5, a declarative parallel programming language based on PCubeS.
- Separation of program semantics from hardware mapping to enhance portability and performance tuning.
- Preliminary compiler implementations targeting shared-memory multicore, distributed memory, and hybrid GPU/multi-computer architectures.
- Demonstration of HighP5's ability to write portable, productive, predictable, and performant parallel programs.

## About the professor

**Andrew S. Grimshaw** — Professor of Computer Science, Department of Computer Science, University of Virginia.

### Research links

- [Faculty/profile page](https://www.cs.virginia.edu/~grimshaw)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel Computing and Programming Models
**The paper assumes:** parallel computing concepts, parallel programming models, hierarchical hardware architectures, and performance trade-offs in parallel systems
**Already in this field?** Skip this entirely if you already have a solid understanding of parallel computing principles and programming models for heterogeneous architectures.

This background focuses on parallel computing and programming models, essential for understanding the HighP5 language and its PCubeS architecture, which address hierarchical and heterogeneous hardware. The rigorous course offers a detailed, structured introduction to parallel programming concepts, while the fast track provides a concise, accessible overview covering the same core topics more quickly. Choose the course for deep foundational knowledge and the fast track for a quicker, yet solid, grasp of the subject.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBAyEJmxsOowMYNTKsUmTZ8) — NPTEL IIT Delhi · 87 videos · 12.3h across the first 60 episodes

**Watch only this:** Episodes 1-23, about 4.6 hours — covering Introduction to Parallel Programming through Vector-Vector operations (Dot product), which includes parallel architectures, memory models, and basic parallel programming constructs essential for grasping HighP5's context.

*Why it unblocks this paper:* This NPTEL IIT Delhi course provides a comprehensive and authoritative introduction to parallel programming, covering parallel architectures, memory models, and programming constructs like OpenMP, which are foundational to understanding the hardware-aware programming paradigm and hierarchical architectures discussed in the paper.

*If you want all of it:* About 12.3 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLJ5C_6qdAvBFMAko9JTyDJDIt1W48Sxmg) — Computer Science and Engineering · 37 videos · 7.4h across 37 episodes

**Watch only this:** Episodes 1-23, about 4.4 hours — covering Introduction to Parallel Programming through Vector-Vector operations (Dot product), providing a focused overview of key concepts needed to understand HighP5's programming model.

*Why it unblocks this paper:* This playlist from Computer Science and Engineering offers a concise and clear introduction to parallel programming concepts, mirroring the rigorous course's topics but in fewer episodes, making it ideal for a quick yet thorough overview of parallel architectures, memory models, and OpenMP programming relevant to the paper.

*If you want all of it:* About 7.4 hours across 37 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HighP5 paper, start with foundational knowledge of hierarchical parallel hardware architectures and parallel programming models for heterogeneous systems, as these provide the hardware context and programming challenges HighP5 addresses. Then, explore declarative parallel programming languages to grasp the language paradigm HighP5 employs. Next, study performance portability in parallel computing to appreciate the key challenge HighP5 tackles. Finally, focus on the core concept of Partitioned Parallel Processing Spaces (PCubeS) and the HighP5 programming language itself, which embody the paper's main contributions.

### Hierarchical parallel hardware architectures *(prerequisite)*
Understanding the structure and characteristics of hierarchical and heterogeneous hardware architectures is essential to appreciate how HighP5's PCubeS type architecture models such systems. This knowledge provides the hardware background necessary to grasp the challenges HighP5 aims to solve.

*How the paper uses it:* HighP5's PCubeS architecture models modern hierarchical and hybrid parallel hardware.

▶ [Computer Architecture - Lecture 16b: Parallelism and Heterogeneity (ETH Zürich, Fall 2020)](https://www.youtube.com/watch?v=vA6AQE6uorA) — Onur Mutlu Lectures · 1:09:34 · 5y ago

### Parallel programming models for heterogeneous systems *(prerequisite)*
HighP5 targets modern heterogeneous architectures combining CPUs, GPUs, and clusters, so understanding existing parallel programming models for such systems is crucial. This foundation helps contextualize HighP5's approach to portability and performance across diverse hardware.

*How the paper uses it:* HighP5 supports hybrid GPU/multi-computer architectures through its compiler implementations.

▶ [Heterogeneous Programming in C++ today - Michael Wong \[ACCU 2018\]](https://www.youtube.com/watch?v=1kOGbxnpt6M) — ACCU Conference · 1:32:24 · 8y ago

### Declarative parallel programming languages *(prerequisite)*
HighP5 uses a declarative syntax that separates program semantics from hardware mapping, so familiarity with declarative programming paradigms in parallel contexts aids in understanding its language design and benefits.

*How the paper uses it:* HighP5's declarative syntax enables separation of program semantics from hardware mapping.

▶ ["Production Prolog" by Michael Hendricks](https://www.youtube.com/watch?v=G_eYTctGZw8) — Strange Loop Conference · 39:58 · 12y ago

### Performance portability in parallel computing *(prerequisite)*
Performance portability is a central challenge HighP5 addresses by enabling programs to run efficiently across different hardware without modification. Understanding this challenge and existing approaches provides insight into the significance of HighP5's contributions.

*How the paper uses it:* HighP5 enables portable parallel programs across different hardware without modification while maintaining competitive performance.

▶ [Stanford CS149 I Parallel Computing I 2023 I Lecture 8 - Data-Parallel Thinking](https://www.youtube.com/watch?v=Ba3TqxSgnTk) — Stanford Online · 1:17:49 · 2y ago

### Partitioned Parallel Processing Spaces PCubeS
PCubeS is the core method introduced by HighP5 to model hierarchical parallel hardware as a finite hierarchy of parallel processing spaces with compute, memory, and communication characteristics. Understanding PCubeS is key to grasping HighP5's programming paradigm and portability.

*How the paper uses it:* PCubeS is the novel type architecture at the heart of HighP5's hardware-cognizant programming model.

▶ [Stanford CS149 I Parallel Computing I 2023 I Lecture 2 - A Modern Multi-Core Processor](https://www.youtube.com/watch?v=CKmNpAO5rS4) — Stanford Online · 1:16:14 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand HighP5 and its novel approach to parallel programming, start by learning about hierarchical parallel hardware architectures, which form the physical basis for the programming model. Next, explore parallel programming models for heterogeneous systems to grasp how different hardware types like CPUs and GPUs are programmed together. Then, study performance portability challenges in parallel computing, which HighP5 aims to address. Finally, dive into declarative parallel programming languages to understand the syntax style HighP5 uses, and conclude with the core concept of Partitioned Parallel Processing Spaces (PCubeS) that models hardware hierarchy in HighP5.

### Hierarchical parallel hardware architectures *(prerequisite)*
Hierarchical parallel hardware architectures organize computing resources in layers, such as cores within CPUs, multiple CPUs in a system, and clusters of machines. Understanding this hierarchy is essential because it affects how parallel programs are designed and how data and tasks are distributed efficiently.

*How the paper uses it:* HighP5's PCubeS type architecture models modern hierarchical and hybrid hardware architectures.

▶ [Computer Architecture - Lecture 16b: Parallelism and Heterogeneity (ETH Zürich, Fall 2020)](https://www.youtube.com/watch?v=vA6AQE6uorA) — Onur Mutlu Lectures · 1:09:34 · 5y ago

### Parallel programming models for heterogeneous systems *(prerequisite)*
Modern computing systems combine different types of processors like CPUs and GPUs, requiring programming models that can handle this heterogeneity. Learning about these models helps understand how parallel tasks are managed across diverse hardware to maximize performance.

*How the paper uses it:* HighP5 targets modern heterogeneous architectures combining CPUs, GPUs, and clusters.

▶ [Heterogeneous Programming in C++ today - Michael Wong \[ACCU 2018\]](https://www.youtube.com/watch?v=1kOGbxnpt6M) — ACCU Conference · 1:32:24 · 8y ago

### Performance portability in parallel computing *(prerequisite)*
Performance portability means writing parallel programs that run efficiently on different hardware platforms without modification. This is challenging because hardware varies widely, and understanding this helps appreciate why HighP5 separates program semantics from hardware mapping.

*How the paper uses it:* HighP5 addresses the challenge of running parallel programs efficiently across platforms without rewriting code.

▶ [Stanford CS149 I Parallel Computing I 2023 I Lecture 8 - Data-Parallel Thinking](https://www.youtube.com/watch?v=Ba3TqxSgnTk) — Stanford Online · 1:17:49 · 2y ago

### Declarative parallel programming languages *(prerequisite)*
Declarative programming languages let programmers specify what computation should be done rather than how to do it, which can simplify parallel programming by separating logic from execution details. This approach improves productivity and portability.

*How the paper uses it:* HighP5 uses a declarative syntax to separate program semantics from hardware mapping.

▶ [Intro to Declarative Programming](https://www.youtube.com/watch?v=3R3pYpciujI) — Axiom Design · 17:45 · 6y ago

## Already in your library

- [Programming Paradigms | Functional Programming | Object Oriented Programming | Logic | java world](https://www.youtube.com/watch?v=ySBTM-FKEtg) — also for: Functional Python Programming in Introductory Computer Science Courses (Raj Sunderraman)
- [Imperative vs Declarative Programming](https://www.youtube.com/watch?v=X-ZYKv_0TyY) — also for: CRAQL: A Composable Language for Querying Source Code (Rahul Simha)
- [Imperative vs Declarative Programming](https://www.youtube.com/watch?v=E7Fbf7R3x6I) — also for: CRAQL: A Composable Language for Querying Source Code (Rahul Simha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of HighP5's novel parallel programming model based on the PCubeS architecture. The beginner project lets you reproduce a core concept of hardware-aware parallel task partitioning using familiar tools. The intermediate project involves reimplementing the paper's core PCubeS-based parallel matrix multiplication approach and comparing its scaling to a baseline. The advanced project extends the paper by addressing a stated compiler overhead limitation through a prototype optimization, showcasing deeper systems insight and research potential.

### Beginner — Simulate Partitioned Parallel Processing Spaces with Task Graphs
*Effort: a weekend, ~8 hours*

You build a simple simulation of the PCubeS concept by modeling a hierarchy of parallel processing spaces as nested task groups with communication costs, using Python and multiprocessing or threading. The project will let you define tasks and data partitions abstractly and simulate execution times based on configurable compute and communication parameters.

**Why it shows you understood the paper:** This project demonstrates you grasp the core PCubeS idea of modeling hardware as hierarchical parallel spaces with costs, and the separation of computation from hardware mapping. A professor would see you can translate the paper's architecture concept into a working prototype simulation.

**Grounded in:** Design and formalization of the PCubeS type architecture that accurately models hierarchical and hybrid parallel hardware.

**Tech stack:** Python 3.11, multiprocessing, matplotlib

**Data:** No external data needed; synthetic task graphs and cost parameters are defined in code.

**Build it:**

1. Implement a Python class to represent a PCubeS node with compute capacity and communication cost attributes.
2. Create a nested hierarchy of PCubeS nodes to simulate a simple hardware topology (e.g., cores within NUMA nodes).
3. Define a set of synthetic parallel tasks and data partitions mapped onto the PCubeS hierarchy.
4. Simulate execution times by summing compute times and communication delays based on the hierarchy.
5. Visualize the task execution timeline and communication overhead using matplotlib.

**Ships as:** A Python repository with code simulating PCubeS hierarchies, example task graphs, and visualizations illustrating parallel execution and communication costs.

**Stretch goal:** Add a simple declarative syntax or JSON input format to specify task graphs and hardware hierarchies, mimicking HighP5's separation of semantics and mapping.

### Intermediate — Reimplement PCubeS-Based Parallel Matrix Multiplication
*Effort: 2 weekends, ~20 hours*

You implement a parallel matrix multiplication program that partitions computation and data according to a simplified PCubeS hierarchy. You compare its performance and scalability against a baseline parallel implementation (e.g., OpenMP or multiprocessing) on your local multicore machine.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method of declarative partitioning and hardware-aware mapping into a working parallel program, and evaluate performance metrics similar to the paper's super-linear speedup results.

**Grounded in:** Strong and weak scaling experiments on a distributed shared-memory cluster show super-linear speedup for matrix multiplication.

**Tech stack:** Python 3.11, numpy, multiprocessing, time, matplotlib

**Data:** Synthetic square matrices generated in code; no external dataset required.

**Build it:**

1. Implement a baseline parallel matrix multiplication using Python multiprocessing or numpy with parallel BLAS.
2. Design a PCubeS-inspired partitioning scheme that divides matrices into blocks mapped onto a simulated hierarchy of processing spaces.
3. Implement the partitioned multiplication using the scheme, managing data partitions and communication explicitly.
4. Measure execution time and speedup for increasing numbers of worker processes and matrix sizes.
5. Plot scaling results and compare to the baseline implementation.

**Ships as:** A GitHub repo with code for baseline and PCubeS-inspired parallel matrix multiplication, performance plots, and a README explaining the approach and results.

**Stretch goal:** Extend the implementation to simulate communication costs explicitly and analyze overheads as in the paper's conjugate gradient limitation discussion.

### Advanced — Prototype Compiler Optimization to Reduce Resource Preparation Overhead
*Effort: 3+ weeks*

You develop a prototype extension or optimization to a simple parallel task runtime (e.g., Python multiprocessing or a lightweight C++ task scheduler) that reduces overhead in resource preparation and communication setup between tasks, addressing a key limitation identified in the paper's preliminary compiler implementations.

**Why it shows you understood the paper:** This project tackles a stated limitation of HighP5's current compiler by implementing a concrete optimization, demonstrating deep understanding of the paper's performance bottlenecks and the challenges of hardware-cognizant parallel programming.

**Grounded in:** Preliminary compiler implementations indicate overhead in resource preparation and communication setup, especially for some problems like conjugate gradient.

**Tech stack:** Python 3.11, multiprocessing, C++ (optional), profiling tools (e.g., cProfile)

**Data:** Synthetic parallel workloads such as matrix multiplication or conjugate gradient iterations generated in code.

**Build it:**

1. Profile a baseline parallel task runtime to identify overheads in resource preparation and communication.
2. Design and implement an optimization such as task batching, persistent resource pools, or communication setup caching.
3. Integrate the optimization into the runtime and rerun the synthetic workloads.
4. Measure and compare execution times and overhead reductions before and after optimization.
5. Document the design decisions, profiling results, and performance impact.

**Ships as:** A repository with the optimized runtime code, profiling scripts, benchmark workloads, and a detailed README discussing the optimization and its effect on overhead.

**Stretch goal:** Extend the prototype to support automatic vectorization hints or hardware-aware scheduling heuristics inspired by HighP5's PCubeS mapping.
