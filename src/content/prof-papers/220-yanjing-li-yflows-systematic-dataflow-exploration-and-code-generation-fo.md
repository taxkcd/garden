---
title: "220 · YFlows: Systematic Dataflow Exploration and Code Generation for Efficient Neural Network Inference using SIMD Architectures on CPUs — Yanjing Li"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanjing-li"
source_hash: "a0b44fa74e5793e578f0cddb1469b5d4e14d58f15f1721a8a03b85fe526d2389"
sequence: 220
generator: "outreach-garden: managed"
---

# 220 · YFlows: Systematic Dataflow Exploration and Code Generation for Efficient Neural Network Inference using SIMD Architectures on CPUs

## At a glance

- **Professor:** Yanjing Li
- **Institution:** Northeastern University
- **Paper:** [YFlows: Systematic Dataflow Exploration and Code Generation for Efficient Neural Network Inference using SIMD Architectures on CPUs](https://arxiv.org/abs/2310.00574)
- **Authors:** Cyrus Zhou, Zachary Hassman, Ruize Xu, Dhirpal Shah, Vaughn Richard, Yanjing Li
- **Year:** 2023

## Paper overview

This paper presents a novel method to speed up neural network inference on CPUs by systematically exploring different ways to order computations (dataflows) and generate SIMD-optimized code. The approach maximizes data reuse in CPU vector registers, significantly reducing inference time for both 8-bit and binary neural networks compared to current state-of-the-art implementations.

### Why it matters

**Research problem:** Deploying neural networks efficiently on CPUs is challenging due to limited inference speed and underutilization of SIMD capabilities. Existing CPU implementations often do not consider dataflow optimizations that maximize data reuse in SIMD registers, leading to suboptimal performance.

**Why it matters:** Neural networks are increasingly deployed on edge devices and low-end servers where CPUs are prevalent. Improving inference speed on CPUs can enable faster, more energy-efficient AI applications in IoT, mobile, and cyber-physical systems, which are critical for real-world deployments.

**Key contributions:**

- Extension of basic neural network dataflows to enable reuse of all data types in SIMD registers.
- Development of heuristics based on data movement costs to optimize vector register allocation for three basic dataflows.
- Implementation of a code generator that automatically produces SIMD code for extended dataflows on CPUs.
- Comprehensive experimental evaluation demonstrating significant speedups over state-of-the-art CPU neural network implementations.

## About the professor

**Yanjing Li** — Associate Professor, Electrical and Computer Engineering, Northeastern University.

Research interests: AI and optimization for secure IoT and cyber-physical systems

### Research links

- [Faculty/profile page](https://coe.northeastern.edu/people/li-yanjing)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the YFlows paper, start with foundational knowledge on neural network inference on CPUs and dataflow architectures for neural networks, as these provide essential context on hardware constraints and computation ordering. Then, study vector register allocation heuristics and code generation for SIMD CPUs to grasp the optimization techniques used. Finally, focus on the core concept of SIMD dataflow optimization and the authors' own talk if available, to directly connect with their novel contributions and implementation details.

### Neural network inference on CPUs *(prerequisite)*
This section covers the challenges and optimization strategies specific to running neural networks efficiently on CPU architectures. Understanding these constraints and methods is crucial for appreciating why the YFlows approach targets SIMD data reuse and code generation on CPUs.

*How the paper uses it:* The paper addresses CPU-specific inference speed and SIMD utilization challenges for neural networks.

▶ [Lecture 15 | Efficient Methods and Hardware for Deep Learning](https://www.youtube.com/watch?v=eZdOkDtYMoo) — Stanford University School of Engineering · 1:16:52

### Dataflow architectures for neural networks *(prerequisite)*
Dataflow architectures determine how data moves and is reused during neural network computation, directly impacting performance. This section explains different dataflow strategies and their implications, foundational for understanding the paper's extension of dataflows for SIMD reuse.

*How the paper uses it:* The paper extends basic neural network dataflows to enable reuse of multiple data types in SIMD registers.

▶ [[Tutorial - MICRO 2020] DNN Dataflows](https://www.youtube.com/watch?v=SpDY7nN33Ys) — MAESTRO Project · 32:38

### Vector register allocation heuristics *(prerequisite)*
Efficient SIMD register allocation is key to maximizing data reuse and minimizing data movement costs. This section introduces heuristics and compiler techniques for register allocation, which underpin the paper's optimization approach.

*How the paper uses it:* The authors develop heuristics to optimize vector register allocation for different dataflows.

▶ [Lec 20: Register Allocation and Binding](https://www.youtube.com/watch?v=mzKUVBoTIJ8) — NPTEL IIT Guwahati · 4 years ago

### Code generation for SIMD CPUs *(prerequisite)*
Automatic SIMD code generation translates optimized dataflows and register allocations into executable code. Understanding this process is essential to grasp how the paper's code generator produces efficient SIMD implementations.

*How the paper uses it:* The paper implements a code generator that automatically produces SIMD code for extended dataflows on CPUs.

▶ [Talk on VeGen, The Vectorizer Generator for SIMD and Beyond](https://www.youtube.com/watch?v=uwNAnC2y8ds) — Saman Amarasinghe · 17:16

### SIMD dataflow optimization
This core concept focuses on the systematic exploration and optimization of dataflows to maximize SIMD register reuse and improve neural network inference speed. It directly relates to the novel contributions of the paper.

*How the paper uses it:* The central method enabling efficient reuse of data in vector registers for neural network inference in the paper.

▶ [Lecture 15 - Data Flow and SIMD - Carnegie Mellon - Computer Architecture 2013 - Onur Mutlu](https://www.youtube.com/watch?v=f-XL4BNRoBA) — Carnegie Mellon Computer Architecture · 13 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the YFlows paper, start by learning the basics of neural network inference on CPUs, which sets the context for the challenges and opportunities in CPU-based AI acceleration. Next, grasp dataflow architectures for neural networks to appreciate how computation ordering affects performance. Then, study SIMD dataflow optimization and vector register allocation heuristics to understand how data reuse and register management improve efficiency. Finally, explore code generation for SIMD CPUs to see how these optimizations translate into executable code. This progression builds intuition from foundational concepts to the core techniques used in the paper.

### Neural network inference on CPUs *(prerequisite)*
This section covers how neural networks are executed on CPUs, highlighting the unique challenges such as limited parallelism and the need for efficient use of CPU resources. Understanding this helps explain why specialized optimizations are necessary for fast inference on common processors.

*How the paper uses it:* The paper addresses inefficiencies in CPU-based neural network inference and aims to improve speed by optimizing dataflows and SIMD usage.

▶ [Lecture 15 | Efficient Methods and Hardware for Deep Learning](https://www.youtube.com/watch?v=eZdOkDtYMoo) — Stanford University School of Engineering · 1:16:52

### Dataflow architectures for neural networks *(prerequisite)*
Dataflow architectures define the order and manner in which data moves through neural network computations. Learning about different dataflows clarifies how computation ordering impacts data reuse and performance, which is central to the paper's approach.

*How the paper uses it:* YFlows systematically explores and extends neural network dataflows to maximize data reuse in SIMD registers.

▶ [[Tutorial - MICRO 2020] DNN Dataflows](https://www.youtube.com/watch?v=SpDY7nN33Ys) — MAESTRO Project · 32:38

### SIMD dataflow optimization *(prerequisite)*
SIMD (Single Instruction Multiple Data) allows CPUs to process multiple data points simultaneously. Optimizing dataflows for SIMD means arranging computations to maximize the reuse of data in vector registers, reducing memory access and speeding up inference.

*How the paper uses it:* The core method in the paper is optimizing dataflows to fully utilize SIMD registers for efficient neural network inference.

▶ [Lecture 15 - Data Flow and SIMD - Carnegie Mellon - Computer Architecture 2013 - Onur Mutlu](https://www.youtube.com/watch?v=f-XL4BNRoBA) — Carnegie Mellon Computer Architecture · 13 years ago

### Vector register allocation heuristics *(prerequisite)*
Register allocation heuristics are strategies for efficiently assigning limited CPU vector registers to hold data during computation. Good heuristics reduce data movement and improve performance, which is critical in SIMD-optimized neural network inference.

*How the paper uses it:* The paper develops heuristics to optimize vector register allocation for different dataflows to enhance data reuse and speed.

▶ [Coloring Code: How Compilers Use Graph Theory](https://www.youtube.com/watch?v=K3mi2m7ccDQ) — Heon Lee · 9:46 · 3 years ago

### Code generation for SIMD CPUs *(prerequisite)*
Code generation translates optimized dataflows and register allocations into actual SIMD instructions that CPUs can execute. Understanding this process shows how theoretical optimizations become practical speedups in real systems.

*How the paper uses it:* YFlows includes a code generator that automatically produces SIMD code for the optimized dataflows on CPUs.

▶ [Talk on VeGen, The Vectorizer Generator for SIMD and Beyond](https://www.youtube.com/watch?v=uwNAnC2y8ds) — Saman Amarasinghe · 17:16
