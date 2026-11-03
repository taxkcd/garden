---
title: "1027 · Preparing for Future Heterogeneous Systems Using Migrating Threads — Peter M. Kogge"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peter-m-kogge"
source_hash: "5e32a26189729fbdaf5cd4ac199c1f71dff817d54de5af5bd95106f8b2616770"
sequence: 1027
generator: "outreach-garden: managed"
---

# 1027 · Preparing for Future Heterogeneous Systems Using Migrating Threads

## At a glance

- **Professor:** Peter M. Kogge
- **Institution:** University of Notre Dame
- **Paper:** [Preparing for Future Heterogeneous Systems Using Migrating Threads](https://dl.acm.org/doi/pdf/10.1145/3642961.3643801)
- **Authors:** Peter Kogge, Jayden Vap, Derek Pepple
- **Year:** 2024

## Paper overview

This paper addresses the challenges of designing efficient computing systems that combine multiple heterogeneous processors, such as CPUs and accelerators, especially when these processors are separated by networks or lack shared memory. The authors propose using migrating threads—threads that can move across different processors and memory locations without heavy software overhead—as a key architectural mechanism. They demonstrate this concept through two experiments involving machine learning and graph processing applications, and propose a hardware architecture that supports lightweight thread migration and spawning to simplify software complexity and improve performance in future heterogeneous systems.

### Why it matters

**Research problem:** How to architect efficient heterogeneous computing systems that integrate multiple types of processors and accelerators, enabling concurrent threads to migrate across different cores and memory without incurring costly software stack overheads, especially when cores are separated by networks or have no shared memory.

**Why it matters:** Heterogeneous systems are increasingly common due to the rise of accelerators and chiplet technologies, but current software approaches to manage communication and thread spawning across different processor types and nodes are complex and inefficient, causing latency and wasted computational resources. Efficient architectures are needed to fully exploit the potential of large-scale heterogeneous systems for compute-intensive applications like machine learning and graph processing.

**Key contributions:**

- Identification of key challenges in managing threads and memory in heterogeneous systems with distributed accelerators.
- Demonstration of migrating threads as a mechanism to simplify cross-node and cross-accelerator communication.
- Experimental evaluation of Hogwild++ and Frogwild! algorithms on heterogeneous platforms to reveal performance bottlenecks and architectural needs.
- Proposal of a hardware architecture supporting migrating threads with a global address space and hardware thread spawning to reduce software complexity.
- Discussion of spawning semantics between multi-threaded cores and accelerators, including reverse spawning from accelerators to cores.

## About the professor

**Peter M. Kogge** — Ted H. McCourtney Professor of Computer Science and Engineering, Computer Science and Engineering, University of Notre Dame.

Research interests: massively parallel processing architectures, advanced VLSI technology and architectures, non van Neumann models of programming and execution, parallel algorithms and applications and their impact on computer architecture, architectures using migrating threads to improve the parallelism possible when dealing with very large graph problems, performance evaluation of very large parallel systems, languages and algorithms for quantum computing, and efficient architectures for neural nets, especially when implemented in non-traditional technologies

### Research links

- [Faculty/profile page](https://engineering.nd.edu/faculty/peter-kogge/)
- [Professor website](https://www3.nd.edu/~kogge/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel Computing Architectures
**The paper assumes:** parallel computing architectures, thread concurrency models, heterogeneous system design, and synchronization mechanisms
**Already in this field?** Skip this entirely if you already have a solid understanding of parallel computing concepts and heterogeneous processor architectures.

To understand the architectural challenges and solutions proposed in the paper on migrating threads in heterogeneous systems, a solid grasp of parallel computing architectures is essential. The rigorous course option offers a deep, structured university-level lecture series on parallel programming concepts, memory models, and synchronization, while the fast track provides a concise, focused playlist covering parallel architectures and programming models with an emphasis on practical understanding of concurrency and memory systems. Choose the course for comprehensive mastery or the fast track for a quicker, yet still thorough, conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBAyEJmxsOowMYNTKsUmTZ8) — NPTEL IIT Delhi · 87 videos · 12.3h across the first 60 episodes

**Watch only this:** Episodes 1-10, about 2 hours — covering Introduction to Parallel Programming, Parallel Architectures and Programming Models, Pipelining, Memory Latency, Cache and Locality, and Shared vs Distributed Memory architectures.

*Why it unblocks this paper:* This NPTEL IIT Delhi course on Introduction to Parallel Programming in OpenMP covers fundamental concepts of parallel architectures, memory latency, shared and distributed memory models, synchronization, and thread management, directly relevant to understanding thread migration and spawning in heterogeneous systems.

*If you want all of it:* About 12.3 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLJ5C_6qdAvBFMAko9JTyDJDIt1W48Sxmg) — Computer Science and Engineering · 37 videos · 7.4h across 37 episodes

**Watch only this:** Episodes 1-10, about 2 hours — covering Introduction to Parallel Programming, Parallel Architectures and Programming Models, Pipelining, Memory Latency, Cache and Temporal Locality, and Shared and Distributed Memory architectures.

*Why it unblocks this paper:* This playlist from Computer Science and Engineering provides a concise introduction to parallel programming concepts including parallel architectures, memory latency, cache locality, and shared vs distributed memory, which are foundational for grasping the paper's discussion on thread migration and synchronization overheads.

*If you want all of it:* About 7.4 hours across 37 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on migrating threads for future heterogeneous systems, start with foundational knowledge on heterogeneous computing architectures, which provide the context for combining CPUs and accelerators. Then, study the core mechanisms of thread migration in parallel systems and the Partitioned Global Address Space (PGAS) memory model that underpins the proposed architecture. Finally, focus on the paper's core concept of migrating threads and thread spawning hardware support, emphasizing the authors' own talk or the most relevant advanced lecture available.

### Heterogeneous computing architectures *(prerequisite)*
This section covers the fundamentals of heterogeneous systems that integrate CPUs and accelerators, essential for understanding the environment in which migrating threads operate. The selected lecture from NPTEL by the Indian Institute of Science provides a recent, academically rigorous treatment of chiplet-based heterogeneous architectures relevant to large language model acceleration, closely aligned with the paper's focus on future heterogeneous systems.

*How the paper uses it:* The paper addresses challenges in designing efficient heterogeneous systems combining CPUs and accelerators.

▶ [Lec 50 Chiplet-Based Heterogeneous Architectures for LLM Acceleration](https://www.youtube.com/watch?v=zQGqrGaiNyI) — NPTEL - Indian Institute of Science, Bengaluru · 27:20 · 1mo ago

### Thread migration in parallel systems *(prerequisite)*
Understanding thread migration is critical as it is the core mechanism enabling threads to move efficiently across processors in heterogeneous systems. The ACM talk by M. Frans Kaashoek provides a research-level overview of parallelism in operating systems, including processor parallelism and distributed computing, which lays a strong foundation for the migrating thread concept in the paper.

*How the paper uses it:* Migrating threads are proposed as a key mechanism to simplify communication and computation across heterogeneous cores.

▶ [Parallel computing and the OS](https://www.youtube.com/watch?v=KZ9hm5AUmWU) — Association for Computing Machinery (ACM) · 29:14 · 10y ago

### Partitioned global address space PGAS *(prerequisite)*
PGAS is a key memory model that supports global memory access across distributed nodes, which is fundamental to the paper's proposed architecture enabling transparent memory access. Kathy Yelick's detailed lecture on PGAS programming offers an authoritative and comprehensive introduction to this model, making it ideal for advanced readers.

*How the paper uses it:* The proposed architecture uses a global address space to enable threads to access memory anywhere in the system transparently.

▶ [Partitioned Global Address Space Programming - Kathy Yelick](https://www.youtube.com/watch?v=NU4VfjISk2M) — CITRIS and the Banatao Institute · 1:02:44 · 13y ago

### Hardware support for thread spawning
Hardware mechanisms for thread spawning are essential to reduce software overhead in managing threads across heterogeneous cores, a key contribution of the paper. The NPTEL IIT Bombay lecture on SIMD vs. SIMT and thread scheduling in NVIDIA GPUs provides a rigorous, hardware-focused perspective on thread management relevant to understanding hardware spawning support.

*How the paper uses it:* The paper proposes hardware thread spawning to reduce software complexity in heterogeneous systems.

▶ [Week 7: Lecture 1: SIMD vs. SIMT: Thread Mapping, Scheduling, and Pipelining in NVIDIA GPUs](https://www.youtube.com/watch?v=rS1_t2xKA5Y) — NPTEL IIT Bombay · 27:47 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on migrating threads in heterogeneous systems, start by learning the basics of heterogeneous computing architectures, which combine CPUs and accelerators. Then grasp the concept of thread migration in parallel systems, which enables threads to move efficiently across processors. Next, study the partitioned global address space (PGAS) memory model that supports global memory access across nodes. Finally, explore the core idea of migrating threads and hardware support for thread spawning to see how the paper proposes to reduce software overhead and improve performance.

### Heterogeneous computing architectures *(prerequisite)*
Heterogeneous computing involves systems that combine different types of processors, such as CPUs and GPUs, to accelerate workloads. Understanding this helps you see why managing threads and memory across diverse processors is challenging and important.

*How the paper uses it:* The paper addresses challenges in designing efficient systems combining CPUs and accelerators in heterogeneous platforms.

▶ [Lec 50 Chiplet-Based Heterogeneous Architectures for LLM Acceleration](https://www.youtube.com/watch?v=zQGqrGaiNyI) — NPTEL - Indian Institute of Science, Bengaluru · 27:20 · 1mo ago

### Thread migration in parallel systems *(prerequisite)*
Thread migration allows threads of execution to move between processors to balance load or access data efficiently. This concept is key to enabling flexible and efficient parallelism in distributed and heterogeneous systems.

*How the paper uses it:* Migrating threads are the core mechanism proposed to simplify cross-node and cross-accelerator communication in the paper.

▶ [Parallel computing and the OS](https://www.youtube.com/watch?v=KZ9hm5AUmWU) — Association for Computing Machinery (ACM) · 29:14 · 10y ago

### Partitioned global address space PGAS *(prerequisite)*
PGAS is a memory model that provides a global address space logically partitioned across nodes, allowing threads to access remote memory transparently. This model supports the hardware architecture proposed in the paper for migrating threads.

*How the paper uses it:* The paper proposes a hardware architecture with a global address space (PGAS) to enable transparent memory access across nodes.

▶ [Partitioned Global Address Space Programming - Kathy Yelick](https://www.youtube.com/watch?v=NU4VfjISk2M) — CITRIS and the Banatao Institute · 1:02:44 · 13y ago

### Authors migrating threads talk
This concept covers the basics of threads and multithreading, explaining what threads are and how they differ from processes. It builds intuition about thread management, which is foundational before understanding migrating threads.

*How the paper uses it:* Understanding threads is essential before grasping migrating threads as proposed in the paper.

▶ [Threads, Multithreading & Parallelism in Operating Systems Explained | OS Basics Ep. 4](https://www.youtube.com/watch?v=Y6sZtk0EQKo) — KnowledgeCatch · 15:27 · 1mo ago

### Hardware support for thread spawning
Hardware support for thread spawning reduces the overhead of creating and managing threads, enabling efficient parallel execution. This is critical for the paper’s proposed architecture to enable lightweight thread migration and spawning.

*How the paper uses it:* The paper proposes hardware mechanisms for thread spawning to reduce software overhead in heterogeneous systems.

▶ [How Hardware Makes Threads Less of a Nightmare](https://www.youtube.com/watch?v=IMceN4_rieo) — Core Dumped · 18:41 · 6mo ago

## Already in your library

- [Introduction to Threads](https://www.youtube.com/watch?v=LOfGJcVnvAk) — also for: Delinquent Loop Pre-execution Using Predicated Helper Threads (Eric Rotenberg)
- [HetSys Course: Lecture 1: Programming Heterogeneous Computing Systems with GPUs (Spring 2023)](https://www.youtube.com/watch?v=8JGo2zylE80) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [HetSys Course: Lecture 1: Hands-on Acceleration on Heterogeneous Computing Systems (Spring 2022)](https://www.youtube.com/watch?v=oFO5fTrgFIY) — also for: FZModules: A Heterogeneous Computing Framework for Customizable Scientific Data Compression Pipelines (Fengguang Song)
- [Heterogeneous Computing: Hardware and Software Perspectives](https://www.youtube.com/watch?v=H1lkkrt13v0) — also for: Lightweight Congruence Profiling for Early Design Exploration of Heterogeneous FPGAs (Pierre-Emmanuel Gaillardon)
- [Heterogeneous Computing: CPU vs GPU vs Accelerators Explained](https://www.youtube.com/watch?v=mCaenGlWURw) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of migrating threads in heterogeneous systems as presented in the paper. The beginner project recreates a simplified thread migration simulation to grasp the core concept. The intermediate project implements a small-scale parallel Hogwild++-style SGD on a heterogeneous CPU-GPU platform to expose memory and thread spawning overheads. The advanced project extends the migrating thread architecture concept by simulating multi-directional thread spawning and global address space on a larger heterogeneous system, addressing one of the paper's future directions.

### Beginner — Simulate Migrating Threads Across Heterogeneous Nodes
*Effort: a weekend, ~8 hours*

You build a discrete-event simulation in Python that models threads migrating between heterogeneous processors (e.g., CPU and GPU nodes) with different memory access latencies. The simulation will track thread migration costs and memory access delays to illustrate overheads described in the paper.

**Why it shows you understood the paper:** This project concretely demonstrates the fundamental concept of migrating threads and the challenges of memory and synchronization overheads in heterogeneous systems, reflecting the paper's identification of key bottlenecks.

**Grounded in:** Identification of key challenges in managing threads and memory in heterogeneous systems with distributed accelerators.

**Tech stack:** Python 3.11

**Data:** No external data needed; you simulate thread migration events and memory access latencies based on parameters inspired by the paper's experiments.

**Build it:**

1. Implement a simple model of two heterogeneous nodes (e.g., CPU and GPU) with different memory latencies.
2. Model threads as entities that can migrate between nodes with an associated migration cost.
3. Simulate a workload where threads perform memory accesses and migrate based on simple heuristics.
4. Collect and plot metrics such as total execution time, migration overhead, and memory access delays.
5. Write a README explaining how the simulation relates to the paper's observations on overheads.

**Ships as:** A Python simulation script with plots and a README that explains how migrating threads and memory overheads impact performance in heterogeneous systems.

**Stretch goal:** Add support for modeling token passing synchronization and compare its overhead to migrating threads.

### Intermediate — Implement Hogwild++ SGD on a CPU-GPU Heterogeneous Platform
*Effort: 1-3 weekends*

You implement a parallel stochastic gradient descent (SGD) algorithm inspired by Hogwild++ that runs on a heterogeneous system with CPU and GPU components sharing memory (e.g., NVIDIA Jetson or a simulated environment). You measure memory allocation, synchronization overhead, and thread spawning costs.

**Why it shows you understood the paper:** By reproducing the Hogwild++ experiment setup, you expose the practical challenges of memory management and thread spawning overheads in heterogeneous systems, directly reflecting the paper's experimental findings.

**Grounded in:** Hogwild++ experiment showed that memory allocation and synchronization between CPU and GPU introduce significant overheads, and token passing for synchronization is costly.

**Tech stack:** Python 3.11, PyCUDA or PyOpenCL, NumPy, Matplotlib

**Data:** You use a synthetic dataset for a simple linear regression or logistic regression task to run SGD; no external dataset is required.

**Build it:**

1. Set up a heterogeneous environment using PyCUDA or PyOpenCL to run code on CPU and GPU.
2. Implement Hogwild++ style parallel SGD where multiple threads update shared model parameters asynchronously.
3. Instrument the code to measure memory allocation times, synchronization delays, and thread spawning overhead.
4. Run experiments varying the number of threads and measure convergence time and overhead.
5. Compare results to a baseline single-threaded SGD implementation.
6. Document the results and relate them to the paper's observations.

**Ships as:** A GitHub repo with code implementing Hogwild++ SGD on CPU-GPU, performance measurements, and a detailed README discussing overheads and bottlenecks.

**Stretch goal:** Extend the implementation to simulate migrating threads by allowing threads to move execution between CPU and GPU dynamically.

### Advanced — Simulate Migrating Thread Architecture with Multi-Directional Spawning and Global Address Space
*Effort: a few weeks*

You develop a detailed simulation or prototype that models the proposed migrating thread hardware architecture supporting a global address space and multi-directional thread spawning between heterogeneous cores and accelerators. This prototype addresses the paper's limitation of lacking full implementation and explores spawning semantics including reverse spawning from accelerators to cores.

**Why it shows you understood the paper:** This project tackles a core future direction of the paper by implementing and experimenting with the migrating thread architecture concept, demonstrating your ability to extend the paper's ideas and address its stated limitations.

**Grounded in:** Proposal of a hardware architecture supporting migrating threads with a global address space and hardware thread spawning to reduce software complexity; discussion of spawning semantics including reverse spawning from accelerators to cores.

**Tech stack:** Python 3.11, SimPy or custom discrete-event simulation, NumPy, Matplotlib

**Data:** Synthetic workloads simulating machine learning or graph processing tasks with thread spawning and migration events; no external dataset required.

**Build it:**

1. Design a simulation framework modeling multiple heterogeneous nodes with a shared global address space abstraction.
2. Implement hardware-like thread spawning and migration primitives supporting multi-directional spawning (CPU to GPU, GPU to CPU).
3. Simulate workloads with dynamic thread spawning and migration patterns reflecting Hogwild++ and Frogwild! style algorithms.
4. Measure and analyze performance metrics such as thread spawning latency, memory access times, and synchronization overhead.
5. Compare your architecture's simulated performance against a baseline without migrating threads.
6. Write a comprehensive README discussing how your simulation addresses the paper's limitations and future directions.

**Ships as:** A simulation prototype with code, performance analysis, and a detailed report linking the results to the migrating thread architecture and its benefits.

**Stretch goal:** Integrate multi-tenancy support in the simulation to explore concurrent applications sharing accelerators and data sets.
