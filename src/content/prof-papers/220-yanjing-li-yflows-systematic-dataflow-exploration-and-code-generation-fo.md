---
title: "220 · YFlows: Systematic Dataflow Exploration and Code Generation for Efficient Neural Network Inference using SIMD Architectures on CPUs — Yanjing Li"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanjing-li"
source_hash: "8a723aca634e876fc387f32a75ecc409b10a5a455ebd9c97bd7abe74a9dec2e4"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** SIMD vectorization and CPU dataflows
**The paper assumes:** SIMD vectorization, CPU microarchitecture, dataflow optimization for neural networks
**Already in this field?** Skip this entirely if you already understand SIMD CPU architectures and how dataflows impact vectorized neural network inference performance.

This background focuses on understanding SIMD vectorization and CPU dataflows, which are central to the paper's contributions on optimizing neural network inference using SIMD architectures on CPUs. The rigorous course option provides a deep, structured university-level introduction to parallel computing and SIMD concepts, ideal for readers seeking a thorough foundation. The fast track offers a concise, focused playlist on dataflow concepts to quickly grasp the essentials relevant to SIMD and data reuse in CPU contexts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Parallel computing BCS702](https://www.youtube.com/playlist?list=PLhINCOs3vZGgzx3FNwZSwbrn7AptRD-x3) — Prof Vishwaraj B Patil · 13 videos · 7.9h across 13 episodes

**Watch only this:** Episodes 1 and 2: 'Parallel computing BCS702, what is Parallel computing, Flynn's Taxonomy, SIMD, MIMD' and 'Parallel Computing BCS702, What is SIMD Vector Processor & MIMD shared Memory & Distributed Memory?' totaling about 1 hour 12 minutes. These two episodes introduce SIMD architectures and vector processors foundational to the paper's SIMD code generation and dataflow optimizations.

*Why it unblocks this paper:* This university lecture series by Prof Vishwaraj B Patil covers SIMD vector processors and related parallel computing concepts in detail, directly addressing the hardware and architectural foundations needed to understand SIMD dataflows and vector register reuse in CPUs, which are key to the paper's approach.

*If you want all of it:* The full playlist has 13 episodes totaling about 7.9 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Best Buy API's Dataflow](https://www.youtube.com/playlist?list=PLpe6CiYAs7vTglPQ6IpvddxH45pS7zLS2) — Steven Koon · 8 videos · 2.5h across 8 episodes

**Watch only this:** Episodes 1-3: 'Using InvokeHTTP with the BestBuy Categories API', 'Creating a loop with Nifi processors', and 'Splitting JSON and Handling null flowfile content' totaling about 54 minutes. These episodes cover core dataflow concepts and control structures relevant to understanding data reuse and flow optimization.

*Why it unblocks this paper:* This concise playlist on 'Best Buy API's Dataflow' by Steven Koon, while focused on dataflows in a software API context, provides clear, practical explanations of dataflow concepts and processing pipelines that help build intuition about data movement and reuse, which parallels the dataflow optimization ideas in SIMD CPU contexts.

*If you want all of it:* The full playlist has 8 episodes totaling about 2.5 hours.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the YFlows paper. Starting with a beginner-level project that reproduces a core SIMD dataflow concept using familiar tools, you then move to an intermediate project that implements the paper's core dataflow optimization heuristics and compares performance against a baseline library. Finally, the advanced project extends the paper's approach by exploring dataflow optimization for transformer architectures, addressing a stated limitation and future direction.

### Beginner — SIMD Dataflow Visualization and Simple Benchmark
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates and visualizes the three basic neural network dataflows (input stationary, weight stationary, output stationary) focusing on how data is reused in SIMD vector registers. You also implement a simple microbenchmark to measure and compare the runtime of these dataflows on a small convolution operation using NumPy and Python's time module.

**Why it shows you understood the paper:** This project shows you grasp the fundamental dataflow concepts and their impact on data reuse and runtime performance, which are central to the paper's contributions.

**Grounded in:** Extension of basic neural network dataflows to enable reuse of all data types in SIMD registers; Output stationary dataflows outperform input and weight stationary dataflows.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic small convolution input, weights, and output tensors generated in code to simulate convolution layers as described in the paper.

**Build it:**

1. Implement Python functions that simulate input stationary, weight stationary, and output stationary dataflows showing data reuse in vector registers.
2. Visualize the data reuse patterns for each dataflow using Matplotlib diagrams.
3. Create a small synthetic convolution input and weight tensors.
4. Write a microbenchmark to measure runtime of each dataflow simulation using Python's time module.
5. Compare and report the runtime differences and relate them to data reuse visualizations.

**Ships as:** A GitHub repo with Python scripts that visualize SIMD dataflows, run microbenchmarks, and a README explaining the relationship between data reuse and runtime performance.

**Stretch goal:** Add a simple heuristic to suggest the best dataflow for given tensor sizes based on the microbenchmark results.

### Intermediate — Reimplement YFlows Dataflow Heuristics and Benchmark on ARM CPU
*Effort: 2 weekends, ~20 hours*

You reimplement the core dataflow exploration and vector register allocation heuristics from the paper in C++ or Python with SIMD intrinsics (e.g., ARM NEON) to generate optimized convolution kernels. You benchmark your implementation against the oneDNN library's CPU convolution implementation on a publicly available convolution dataset or synthetic data, measuring inference runtime speedups.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's heuristics into working SIMD-optimized code and empirically validate performance improvements, showing deep comprehension of the core method.

**Grounded in:** Development of heuristics based on data movement costs to optimize vector register allocation; Comprehensive experimental evaluation demonstrating significant speedups over state-of-the-art CPU neural network implementations.

**Tech stack:** C++17, ARM NEON intrinsics, Linux ARM CPU environment, oneDNN library

**Data:** Synthetic convolution layer inputs and weights generated in code, or publicly available convolution benchmarks used by oneDNN as a substitute for the paper's data.

**Build it:**

1. Study the paper's heuristics for vector register allocation and dataflow exploration.
2. Implement the heuristics in C++ using ARM NEON SIMD intrinsics to generate convolution kernels.
3. Set up benchmarking code to run your kernels and oneDNN's convolution implementations on the same inputs.
4. Measure and compare inference runtimes for 8-bit convolution layers.
5. Document the implementation details, heuristics used, and benchmark results in a README.

**Verified links from the paper:**

- <https://github.com/oneapi-src/oneDNN> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/larq/larq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with SIMD-optimized convolution kernel code, benchmarking scripts comparing against oneDNN, and a report summarizing speedups and insights.

**Stretch goal:** Extend the implementation to support binary neural network convolutions and benchmark against Larq's SIMD implementations.

### Advanced — Extending SIMD Dataflow Optimization to Transformer Attention Layers
*Effort: 3-4 weeks*

You develop a prototype code generator and heuristic exploration framework to apply SIMD dataflow optimization techniques from YFlows to transformer attention layers, addressing the paper's limitation of focusing only on convolution layers. You implement vector register allocation heuristics tailored to the attention computation pattern and benchmark inference speed on a small transformer model.

**Why it shows you understood the paper:** This project shows you can critically extend the paper's approach to a new neural network architecture with different computational and data reuse characteristics, demonstrating research-level insight and initiative.

**Grounded in:** Limitations: Focuses primarily on convolution layers; Future directions: Extending dataflow exploration and code generation techniques to other neural network architectures such as transformers.

**Tech stack:** Python 3.11, C++17, SIMD intrinsics (ARM NEON or x86 AVX2), PyTorch (for transformer model and data)

**Data:** Small transformer model and input sequences from publicly available datasets (e.g., WMT or synthetic data) used to simulate attention layer inference.

**Build it:**

1. Analyze the computational pattern and data reuse opportunities in transformer attention layers.
2. Design SIMD dataflow heuristics and vector register allocation strategies adapted from YFlows for attention computations.
3. Implement a code generator or kernel prototype that produces SIMD-optimized attention layer code.
4. Integrate with a small transformer model inference pipeline (e.g., PyTorch) to replace the attention layer with your optimized kernel.
5. Benchmark inference runtime improvements compared to baseline transformer implementation.
6. Document the approach, challenges, and performance results.

**Ships as:** A GitHub repo with code generator/kernel for SIMD-optimized transformer attention, integration scripts, benchmarks, and a detailed README discussing the extension and results.

**Stretch goal:** Explore combining dataflow optimization with quantization or pruning techniques for transformer inference acceleration.
