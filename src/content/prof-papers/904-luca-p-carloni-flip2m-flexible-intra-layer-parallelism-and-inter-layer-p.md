---
title: "904 · FLIP2M: Flexible Intra-layer Parallelism and Inter-layer Pipelining for Multi-model AR/VR Workloads — Luca P. Carloni"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luca-p-carloni"
source_hash: "cde84b0311ef01d93036764dbcb4e03f944ee854f3d2bc09655bb362fcbcf2d4"
sequence: 904
generator: "outreach-garden: managed"
---

# 904 · FLIP2M: Flexible Intra-layer Parallelism and Inter-layer Pipelining for Multi-model AR/VR Workloads

## At a glance

- **Professor:** Luca P. Carloni
- **Institution:** Columbia University
- **Paper:** [FLIP2M: Flexible Intra-layer Parallelism and Inter-layer Pipelining for Multi-model AR/VR Workloads](https://dl.acm.org/doi/pdf/10.1145/3762656)
- **Authors:** Gabriele Tombesi, Je Yang, Joseph Zuckerman, Davide Giri, William Baisi, Luca Carloni
- **Year:** 2025

## Paper overview

This paper presents FLIP2M, a system that improves the performance and energy efficiency of running multiple deep learning models simultaneously on hardware accelerators for augmented and virtual reality (AR/VR) applications. FLIP2M combines two execution strategies: intra-layer parallelism, which splits the computation of a single neural network layer across multiple accelerator cores, and inter-layer pipelining, which allows different layers of a model to be processed concurrently. The system includes a flexible hardware architecture called FLIP and an optimization framework called OASIS that finds the best way to map models onto the hardware. Experiments on a prototype show significant improvements in latency, energy, and energy-delay product compared to baseline approaches.

### Why it matters

**Research problem:** Efficiently mapping and scheduling multiple heterogeneous deep neural network (DNN) models for AR/VR workloads on tiled accelerator architectures is challenging due to the need to balance intra-layer parallelism and inter-layer pipelining. Existing solutions often focus on either intra-layer parallelism or inter-layer pipelining but rarely integrate both flexibly, especially for multi-model workloads. The problem involves handling diverse layer types, computational intensities, and memory demands while optimizing resource allocation and communication patterns to minimize latency and energy consumption.

**Why it matters:** AR/VR applications require running multiple DNN models concurrently to support features like object detection, hand tracking, and face recognition. These workloads are heterogeneous and demand high performance and energy efficiency on edge-class hardware. Improving the mapping and scheduling of these models on accelerators can significantly enhance user experience by reducing latency and power consumption, which is critical for wearable and mobile AR/VR devices with limited resources.

**Key contributions:**

- Design of FLIP, a tiled accelerator fabric supporting flexible intra-layer parallelism and inter-layer pipelining with advanced on-chip communication patterns (DMA, P2P, multicast).
- Development of OASIS, an optimization framework that efficiently explores the large mapping space for multi-model AR/VR workloads using dynamic and constraint programming.
- Implementation of an FPGA prototype of FLIP with 36 accelerators and 7 DDR4 controllers to validate the approach.
- Demonstration of significant improvements in latency, energy, and energy-delay product on real multi-model AR/VR workloads compared to baseline configurations.
- Provision of a holistic solution that integrates intra-layer parallelism and inter-layer pipelining with multi-model support, unlike prior works that focus on only one aspect.

## About the professor

**Luca P. Carloni** — Professor and Chair, Computer Science, Columbia University.

Research interests: agile design of system-on-chip platforms, hardware acceleration of AI workloads, agentic computer-aided design, and open-source hardware

### Research links

- [Faculty/profile page](http://www.cs.columbia.edu/~luca)
- [Lab website](http://sld.cs.columbia.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=sEAoh3MAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/luca-carloni-23289b5/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** combinatorial optimization and scheduling
**The paper assumes:** combinatorial optimization, constraint programming, project scheduling algorithms, dynamic programming for scheduling
**Already in this field?** Skip this entirely if you already understand combinatorial optimization methods and scheduling problem formulations, including constraint programming and dynamic programming approaches.

This background focuses on combinatorial optimization and scheduling, essential for understanding the OASIS framework in FLIP2M, which solves a multi-model resource-constrained project scheduling problem using dynamic and constraint programming. The rigorous course provides a structured, in-depth programming foundation relevant to implementing and grasping optimization algorithms, while the fast track offers concise, targeted explanations of scheduling algorithms to quickly build intuition on key concepts. Choose the course for a deep dive into programming and algorithmic foundations; choose the fast track for a quick conceptual overview of scheduling techniques relevant to resource allocation and optimization.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [SC513124 Computer Programming Khon Kaen University](https://www.youtube.com/playlist?list=PLmkGf1ia5ztd5cbufcvj63bMw5BnE3Tm3) — Chakrit Pongkitivanichkul · 20 videos · 11.4h across 20 episodes

**Watch only this:** Episodes 1-4 (SC513124 Computer Programming 1 to SC513124 Computer Programming 4), about 2.3 hours — these cover core programming constructs and control flow essential for implementing scheduling algorithms.

*Why it unblocks this paper:* This 20-episode university-level programming course covers fundamental programming concepts and problem-solving skills that underpin combinatorial optimization and scheduling algorithms, providing a solid foundation for understanding the dynamic programming and constraint programming techniques used in OASIS.

*If you want all of it:* All 20 episodes, about 11.4 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Disc Scheduling Algorithms](https://www.youtube.com/playlist?list=PLRNkaOMDE7cjCqDc5XWgYosTiITLLpVsC) — Debasish Dalei · 6 videos · 0.7h across 6 episodes

**Watch only this:** Episodes 1-3 (L-6.3: Disk Scheduling Algorithm | Operating System to L-6.5: SSTF in Disk scheduling with Example | Operating System), about 18 minutes — these introduce fundamental scheduling concepts and algorithms relevant to understanding scheduling trade-offs.

*Why it unblocks this paper:* This concise 6-episode series on disk scheduling algorithms provides clear, visual explanations of scheduling principles and algorithms, which are conceptually similar to resource scheduling and optimization challenges addressed in the paper.

*If you want all of it:* All 6 episodes, about 42 minutes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FLIP2M paper, start with foundational concepts including tiled accelerator architectures, intra-layer parallelism, inter-layer pipelining, and constraint programming for resource scheduling. These prerequisites provide the hardware and algorithmic background necessary to grasp the system design and optimization challenges. Finally, focus on the core concept of multi-model DNN scheduling optimization and the authors' own talks to directly connect theory with the FLIP2M approach and results.

### Tiled accelerator architectures for AI *(prerequisite)*
This section covers the hardware foundation of tiled accelerator fabrics like FLIP, focusing on how computation and memory are organized across multiple cores with network-on-chip communication. Understanding tiled architectures is critical to appreciate FLIP's flexible resource allocation and communication patterns.

*How the paper uses it:* FLIP2M's hardware design is based on a tiled accelerator fabric that supports flexible intra-layer parallelism and inter-layer pipelining.

▶ [Memory System Design for AI/ML & ...](https://www.youtube.com/watch?v=RHR0S4q0hQM) — Onur Mutlu Lectures · 16:51

### Intra-layer parallelism in neural networks *(prerequisite)*
This section explains how computation within a single neural network layer can be split across multiple processing units, a key technique to accelerate large DNN layers. It provides the conceptual and practical background to understand FLIP2M's intra-layer parallelism capabilities.

*How the paper uses it:* FLIP2M exploits flexible intra-layer parallelism to split layer computation across accelerator cores for performance gains.

▶ [How to Split One Transformer Layer Across GPUs](https://www.youtube.com/watch?v=yJAFpWiTnOw) — Softmaxedd · 17:10

### Inter-layer pipelining in DNN accelerators *(prerequisite)*
This section introduces pipelining techniques that allow different layers of a neural network to be processed concurrently, improving throughput and latency. It is essential to understand how FLIP2M integrates inter-layer pipelining with intra-layer parallelism.

*How the paper uses it:* FLIP2M combines inter-layer pipelining with intra-layer parallelism to optimize multi-model execution on accelerators.

▶ [Lecture 10 - HW accelerators for learning | Deep Learning on Computational Accelerators](https://www.youtube.com/watch?v=wyLxd2QRFL4) — Prof. Alex Bronstein · 7y ago

### Constraint programming for resource scheduling *(prerequisite)*
This section covers constraint programming techniques used to solve complex scheduling and resource allocation problems. It lays the groundwork for understanding OASIS, the optimization framework in FLIP2M that uses constraint programming to map multi-model workloads efficiently.

*How the paper uses it:* OASIS uses constraint programming to explore the large mapping space for multi-model AR/VR workloads.

▶ [An Introduction To Constraint Programming - Jacob Allen](https://www.youtube.com/watch?v=1FJy-ubE7UE) — HackSoc · 5y ago

### Multi-model DNN scheduling optimization
This section focuses on the optimization challenges and techniques for scheduling multiple heterogeneous DNN models concurrently on accelerator hardware. It directly relates to OASIS's approach in FLIP2M to balance intra-layer parallelism and inter-layer pipelining for multi-model workloads.

*How the paper uses it:* OASIS formulates and solves the multi-model resource-constrained scheduling problem central to FLIP2M's performance improvements.

▶ [Workshop on Architecture, Compiler, and System Support for Multi-Model DNN Workloads](https://www.youtube.com/watch?v=aXLqyqpLJpo) — MICRO Symposium · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand FLIP2M, start by learning about tiled accelerator architectures, which form the hardware basis for flexible resource allocation. Next, grasp intra-layer parallelism and inter-layer pipelining, the two key execution strategies FLIP2M combines to improve performance. Finally, explore multi-model DNN scheduling optimization and constraint programming techniques that underpin the OASIS framework for mapping and scheduling models efficiently.

### Tiled accelerator architectures for AI *(prerequisite)*
Tiled accelerator architectures divide computation into multiple small cores or tiles connected via a network-on-chip, enabling scalable and flexible hardware acceleration. Understanding this helps grasp how FLIP provides flexible resource allocation and communication patterns across many accelerator cores.

*How the paper uses it:* FLIP2M builds on a tiled accelerator fabric (FLIP) that supports flexible intra-layer parallelism and inter-layer pipelining.

▶ [Tiled Multicore Processor | Tiled Chip Multicore Architecture | Network-on-Chip (NoC)](https://www.youtube.com/watch?v=tQSKV4QXpGA) — AI TechClass · 1mo ago

### Intra-layer parallelism in neural networks *(prerequisite)*
Intra-layer parallelism splits the computation within a single neural network layer across multiple processing units to speed up execution. This concept is essential to understand how FLIP2M divides layer computations across accelerator cores to improve throughput and efficiency.

*How the paper uses it:* FLIP2M uses flexible intra-layer parallelism to split layer computations across multiple accelerator cores.

▶ [How to Split One Transformer Layer Across GPUs](https://www.youtube.com/watch?v=yJAFpWiTnOw) — Softmaxedd · 17:10

### Inter-layer pipelining in DNN accelerators *(prerequisite)*
Inter-layer pipelining allows different layers of a neural network to be processed concurrently in a pipeline fashion, improving throughput by overlapping computations. This technique complements intra-layer parallelism and is key to FLIP2M's performance gains.

*How the paper uses it:* FLIP2M integrates inter-layer pipelining to process different layers concurrently on the accelerator fabric.

▶ [What is pipeline ? full explanation | Pipeline kya hai](https://www.youtube.com/watch?v=Gpgvsyqv_UA) — Target with knowledge onlineclasses · 9:51

### Constraint programming for resource scheduling *(prerequisite)*
Constraint programming is a method for solving complex scheduling and allocation problems by defining constraints and searching for solutions that satisfy them. This technique is used by OASIS to efficiently explore the large mapping space for multi-model workloads.

*How the paper uses it:* OASIS uses constraint programming combined with dynamic programming to solve the multi-model resource-constrained scheduling problem.

▶ [An Introduction To Constraint Programming - Jacob Allen](https://www.youtube.com/watch?v=1FJy-ubE7UE) — HackSoc · 5y ago

## Already in your library

- [LLM Parallelism Explained: Data, Tensor, Pipeline & More](https://www.youtube.com/watch?v=G6S5qizNuk8) — also for: Efficient Long-context Language Model Training by Core Attention Disaggregation (Hao Zhang)
- [\[Scheduling seminar\] Zijie Zhou (IEDA, HKUST) | Efficient and Robust LLM Scheduling](https://www.youtube.com/watch?v=obTtEShQKXc) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)
- [Systematic Modeling and Design of Sparse Tensor Accelerators \[Nellie Wu\]](https://www.youtube.com/watch?v=XBdvtfidNAs) — also for: TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph (Hao Zheng)
- [\[Scheduling seminar\] Pascal Van Hentenryck (Georgia Tech ...](https://www.youtube.com/watch?v=PzC0FeLO3UA) — also for: Almost Tight Approximation Hardness and Online Algorithms for Resource Scheduling (Rathish Das)
- [Constraint Satisfaction: introduction](https://www.youtube.com/watch?v=_e64FiDWvqs) — also for: TLEX: An Efficient Method for Extracting Exact Timelines from TimeML Temporal Graphs (Ning Xie)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of FLIP2M's approach to flexible intra-layer parallelism and inter-layer pipelining for multi-model AR/VR workloads. The beginner project recreates a simplified scheduling visualization to grasp the core concepts. The intermediate project implements a basic version of the OASIS optimization framework on a small multi-model workload to compare scheduling strategies. The advanced project extends FLIP2M by exploring dynamic scheduling for runtime variability, addressing one of the paper's stated limitations.

### Beginner — Visualizing Intra-layer Parallelism and Inter-layer Pipelining
*Effort: a weekend, ~8 hours*

You build a web-based interactive visualization that simulates how intra-layer parallelism and inter-layer pipelining work together in a tiled accelerator architecture. The app will let users configure a small neural network with up to three layers and see how computation is split across cores and pipelined between layers.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core execution strategies FLIP2M integrates, showing you understand how flexible parallelism and pipelining reduce latency and improve resource utilization.

**Grounded in:** Design of FLIP, a tiled accelerator fabric supporting flexible intra-layer parallelism and inter-layer pipelining with advanced on-chip communication patterns (DMA, P2P, multicast).

**Tech stack:** TypeScript, React, D3.js

**Data:** Simulated small neural network layer configurations with up to three layers; no external dataset needed.

**Build it:**

1. Create a React app with a UI to input layer sizes and number of accelerator cores.
2. Implement a visualization of intra-layer parallelism by splitting layer computation across cores.
3. Add inter-layer pipelining visualization showing concurrent execution of different layers.
4. Include controls to toggle communication modes (DMA, P2P, multicast) and show their effects.
5. Document how the visualization relates to FLIP2M's execution model.

**Ships as:** An interactive web app with a README explaining the visualization and how it models FLIP2M's execution strategies.

**Stretch goal:** Add a latency and energy estimation model based on user configurations to quantify benefits.

### Intermediate — Implementing OASIS-inspired Multi-model Scheduling
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the OASIS optimization framework that schedules multiple small DNN models on a simulated tiled accelerator. Using constraint programming libraries, you explore mappings that balance intra-layer parallelism and inter-layer pipelining, then compare latency and energy-delay product against a baseline static scheduling.

**Why it shows you understood the paper:** This project proves you can translate the paper's core optimization approach into code, understand the scheduling problem formulation, and evaluate performance improvements quantitatively.

**Grounded in:** Development of OASIS, an optimization framework that efficiently explores the large mapping space for multi-model AR/VR workloads using dynamic and constraint programming.

**Tech stack:** Python 3.11, Google OR-Tools (CP-SAT solver), Jupyter Notebook

**Data:** Simulated small multi-model AR/VR workload with 2-3 heterogeneous DNNs, each with up to three layers; synthetic data generated based on paper descriptions.

**Build it:**

1. Model the scheduling problem as a resource-constrained project scheduling problem with constraints for intra-layer parallelism and inter-layer pipelining.
2. Implement the model using Google OR-Tools CP-SAT solver in Python.
3. Create a baseline static scheduler that assigns models sequentially without pipelining or flexible parallelism.
4. Run experiments comparing latency and energy-delay product between your OASIS-inspired scheduler and baseline.
5. Document the implementation, problem formulation, and results in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook with code, problem formulation, scheduling results, and comparison charts demonstrating benefits of flexible scheduling.

**Stretch goal:** Incorporate multicast and peer-to-peer communication constraints into the scheduling model for more realistic mapping.

### Advanced — Extending FLIP2M for Dynamic Runtime Scheduling
*Effort: 3+ weeks*

You develop a prototype extension of the OASIS framework to support dynamic scheduling of multi-model AR/VR workloads with runtime variability and inter-model dependencies. This includes implementing adaptive scheduling heuristics and runtime monitoring simulation to adjust resource allocation on-the-fly, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of FLIP2M, demonstrating deep comprehension of the system-level challenges and the ability to innovate beyond static optimization.

**Grounded in:** The optimization framework currently targets static deployments and does not handle dynamic inter-model dependencies or runtime variability.

**Tech stack:** Python 3.11, Google OR-Tools, FastAPI (for simulation API), TypeScript, React (for monitoring dashboard)

**Data:** Synthetic multi-model AR/VR workload traces with dynamic runtime variability and inter-model dependencies simulated based on paper context.

**Build it:**

1. Extend the static scheduling model to incorporate dynamic workload changes and inter-model dependencies.
2. Implement adaptive scheduling heuristics that react to simulated runtime metrics.
3. Build a simple runtime monitoring dashboard using React to visualize scheduling decisions and resource utilization.
4. Simulate dynamic workload scenarios and evaluate latency and energy-delay product improvements over static scheduling.
5. Write detailed documentation explaining the extension, design decisions, and evaluation.

**Ships as:** A prototype system with code for dynamic scheduling, a monitoring dashboard, and an evaluation report showing benefits and trade-offs.

**Stretch goal:** Integrate a simple hardware communication model (DMA, P2P, multicast) to study communication overheads in dynamic scheduling.
