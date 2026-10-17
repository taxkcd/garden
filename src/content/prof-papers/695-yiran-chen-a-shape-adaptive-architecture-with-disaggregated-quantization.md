---
title: "695 · A Shape-Adaptive Architecture with Disaggregated Quantization for Efficient LLM Serving — Yiran Chen"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yiran-chen"
source_hash: "e2ea985a49075a27f9feaaa1cf3f1989d5a7cc7ccded97c4bd9adecbd99988d7"
sequence: 695
generator: "outreach-garden: managed"
---

# 695 · A Shape-Adaptive Architecture with Disaggregated Quantization for Efficient LLM Serving

## At a glance

- **Professor:** Yiran Chen
- **Institution:** Duke University
- **Paper:** [A Shape-Adaptive Architecture with Disaggregated Quantization for Efficient LLM Serving](https://arxiv.org/pdf/2610.07443v1)
- **Authors:** Cong Guo, Chiyue Wei, Bowen Duan, Haoxuan Shan, Benjamin F. Morris III, Yintao He, Hai “Helen” Li, Yiran Chen
- **Year:** 2026

## Paper overview

This paper presents DynaCore, a novel hardware architecture designed to improve the efficiency of serving large language models (LLMs). It addresses the inefficiencies in current hardware accelerators caused by the distinct computational phases in LLM inference—prefill and decoding—by adapting the hardware shape and quantization methods to better match these phases. DynaCore dynamically reshapes its systolic array and applies phase-specific quantization, achieving significant improvements in latency and energy efficiency.

### Why it matters

**Research problem:** Large language model inference involves two distinct phases—prefill and decoding—with fundamentally different computational characteristics. Existing hardware accelerators are optimized for the prefill phase but suffer from severe underutilization and inefficiency during decoding due to mismatched hardware execution models and static quantization schemes.

**Why it matters:** LLMs are central to many AI applications, but their inference is computationally intensive and costly. Improving hardware efficiency for LLM serving directly impacts latency, throughput, energy consumption, and operational costs, enabling wider deployment and better user experiences.

**Key contributions:**

- Design of a splittable systolic array that reshapes the MEU along two spatial and one temporal dimension without changing array topology.
- Proposal of disaggregated quantization with an inner-product mixed-precision datapath tailored to phase-specific demands.
- Development of a runtime scheduling framework that dynamically selects MEU configurations per batch to handle continuous batching and phase disaggregation.
- Comprehensive evaluation demonstrating substantial latency and energy efficiency improvements over state-of-the-art LLM accelerators.

## About the professor

**Yiran Chen** — John Cocke Distinguished Professor, Pierre R. Lamond Department of Electrical and Computer Engineering, Duke University.

Research interests: - Emerging memory and storage technologies - Embedded systems, CPS, edge computing, and mobile applications - Neuromorphic computing, deep learning and system security - Low power circuit and system

### Research links

- [Faculty/profile page](https://ece.duke.edu/faculty/yiran-chen)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Systolic Arrays and Quantization for Neural Networks
**The paper assumes:** hardware systolic array architectures, neural network quantization methods, mixed-precision computation for deep learning
**Already in this field?** Skip this entirely if you already understand systolic array hardware design and quantization techniques for neural network inference.

To understand the hardware innovations in DynaCore, particularly its shape-adaptive systolic array and disaggregated quantization for efficient LLM serving, foundational knowledge of systolic arrays and quantization in neural network inference is essential. The rigorous course provides a deep, structured university-level treatment of these topics, while the fast track offers a concise, visual introduction to the core concepts, enabling efficient preparation depending on your available time.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks on FPGA](https://www.youtube.com/playlist?list=PLJePd8QU_LYKZwJnByZ8FHDg5l1rXtcIq) — Piero Nexus · 12 videos · 3.6h across 12 episodes

**Watch only this:** Episodes 1-6, about 1.8 hours — from introduction through hardware wrap-up, these episodes cover the essential hardware concepts and design considerations for neural network accelerators.

*Why it unblocks this paper:* This concise series on 'Neural Networks on FPGA' covers hardware implementation aspects of neural networks, including design and verification of neural network components on hardware, which complements understanding quantization and hardware acceleration relevant to DynaCore's mixed-precision datapath and runtime scheduling.

*If you want all of it:* 3.6 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Shape-Adaptive Architecture with Disaggregated Quantization for Efficient LLM Serving," start by building foundational knowledge on systolic array architectures, which form the hardware basis that DynaCore reshapes. Next, study quantization techniques for neural networks to grasp the disaggregated quantization methods tailored for different LLM inference phases. Then, learn about the distinct computational phases of large language model inference to appreciate the motivation behind DynaCore's adaptive design. Following that, explore runtime scheduling concepts to understand how DynaCore dynamically adapts to workload variations. Finally, focus on the core concept of DynaCore's shape-adaptive systolic array architecture and the authors' own talk to gain direct insight into their novel hardware and quantization approach.

### Systolic array architecture lecture *(prerequisite)*
Systolic arrays are the fundamental hardware architecture underlying DynaCore. Understanding their design, data flow, and efficiency advantages over CPUs and GPUs is essential to appreciate how DynaCore reshapes these arrays spatially and temporally to optimize LLM workloads.

*How the paper uses it:* DynaCore reshapes the systolic array's Minimum Efficient Unit (MEU) to match LLM workload characteristics.

▶ [Computer Architecture - Lecture 29: Systolic Array Architectures (Fall 2024)](https://www.youtube.com/watch?v=waqM1JM9GU0) — Onur Mutlu Lectures · 42:43 · 1y ago

### Quantization techniques for neural networks seminar *(prerequisite)*
Quantization reduces the precision of neural network computations to improve efficiency. This section covers advanced quantization methods, including mixed-precision and phase-specific quantization, which are critical to understanding DynaCore's disaggregated quantization approach tailored for prefill and decoding phases.

*How the paper uses it:* DynaCore applies disaggregated quantization with dual-side quantization for prefill and weight-only quantization for decoding.

▶ [EfficientML.ai Lecture 6 - Quantization (Part II) (MIT 6.5940, Fall 2023)](https://www.youtube.com/watch?v=g-TzDApaE88) — MIT HAN Lab · 1:14:40 · 3y ago

### Large language model inference phases talk *(prerequisite)*
LLM inference consists of two distinct phases—prefill and decoding—with fundamentally different computational and memory bottlenecks. Understanding these phases and their characteristics is crucial to grasp why DynaCore designs phase-specific hardware and quantization strategies.

*How the paper uses it:* The paper highlights the different computational bottlenecks of prefill and decoding phases motivating DynaCore's adaptive design.

▶ [AI Optimization Lecture 01 -  Prefill vs Decode - Mastering LLM Techniques from NVIDIA](https://www.youtube.com/watch?v=3SBUCJzogj4) — Faradawn Yang · 17:52 · 1y ago

### Runtime scheduling for adaptive hardware lecture *(prerequisite)*
Runtime scheduling frameworks dynamically allocate hardware resources to match workload demands. This section provides an advanced understanding of scheduling theory and practice, which is essential to comprehend how DynaCore selects optimal MEU configurations per batch to adapt to dynamic LLM workloads.

*How the paper uses it:* DynaCore uses a runtime scheduling framework to dynamically select MEU configurations per batch for workload adaptation.

▶ ["Runtime scheduling: theory and reality" by Eben Freeman](https://www.youtube.com/watch?v=8g9fG7cApbc) — Strange Loop Conference · 42:12 · 10y ago

### Shape-adaptive systolic arrays seminar
Shape-adaptive systolic arrays are the core hardware innovation enabling DynaCore to dynamically reshape its compute units spatially and temporally. This section deepens understanding of systolic array architectures and their adaptability, complementing the authors' talk.

*How the paper uses it:* DynaCore's key contribution is a splittable systolic array that reshapes the MEU along spatial and temporal dimensions.

▶ [Computer Architecture - Lecture 27: Systolic Arrays (ETH Zürich, Fall 2020)](https://www.youtube.com/watch?v=8zbh4gWGa7I) — Onur Mutlu Lectures · 1:04:51 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on DynaCore, start by learning about the two distinct phases of large language model (LLM) inference—prefill and decoding—and why they have different computational needs. Then, build foundational knowledge on systolic arrays, the hardware architecture that DynaCore reshapes dynamically. Next, grasp quantization techniques for neural networks, focusing on how phase-specific quantization improves efficiency. Finally, explore runtime scheduling concepts to understand how DynaCore adapts hardware configurations dynamically to varying workloads.

### Large language model inference phases talk *(prerequisite)*
This section explains the two fundamental phases of LLM inference: prefill, which is compute-intensive and builds the key-value cache, and decoding, which generates tokens one at a time and is memory-bound. Understanding these phases is crucial because they have different performance bottlenecks and hardware requirements.

*How the paper uses it:* The paper's motivation hinges on the distinct computational characteristics of prefill and decoding phases that DynaCore targets with adaptive hardware and quantization.

▶ [AI Optimization Lecture 01 -  Prefill vs Decode - Mastering LLM Techniques from NVIDIA](https://www.youtube.com/watch?v=3SBUCJzogj4) — Faradawn Yang · 17:52 · 1y ago

### Systolic array architecture lecture *(prerequisite)*
Systolic arrays are specialized hardware architectures optimized for matrix multiplication, a core operation in neural networks. This section provides a clear, visual explanation of how systolic arrays work, their data flow, and why they are more efficient than CPUs or GPUs for AI workloads.

*How the paper uses it:* DynaCore builds on systolic arrays by dynamically reshaping their structure to better match LLM workload phases.

▶ [Computer Architecture - Lecture 27: Systolic Arrays (ETH Zürich, Fall 2020)](https://www.youtube.com/watch?v=8zbh4gWGa7I) — Onur Mutlu Lectures · 1:04:51 · 5y ago

### Quantization techniques for neural networks seminar *(prerequisite)*
Quantization reduces the precision of neural network weights and activations to improve efficiency. This section covers the basics of quantization, including mixed-precision approaches, which are key to balancing accuracy and hardware performance.

*How the paper uses it:* DynaCore introduces disaggregated quantization applying phase-specific quantization schemes to optimize accuracy and efficiency for prefill and decoding.

▶ [EfficientML.ai Lecture 6 - Quantization (Part II) (MIT 6.5940, Fall 2023)](https://www.youtube.com/watch?v=g-TzDApaE88) — MIT HAN Lab · 1:14:40 · 3y ago

### Runtime scheduling for adaptive hardware lecture *(prerequisite)*
Runtime scheduling involves dynamically allocating hardware resources to tasks based on workload demands. This section explains the principles of scheduling, trade-offs between latency and throughput, and how adaptive scheduling can improve system performance.

*How the paper uses it:* DynaCore uses a runtime scheduling framework to select optimal hardware configurations per batch, adapting to dynamic LLM workloads.

▶ ["Runtime scheduling: theory and reality" by Eben Freeman](https://www.youtube.com/watch?v=8g9fG7cApbc) — Strange Loop Conference · 42:12 · 10y ago

### Shape-adaptive systolic arrays seminar
This concept covers how systolic arrays can be dynamically reshaped spatially and temporally to better fit different computational workloads. Understanding this adaptive reshaping is key to grasping how DynaCore achieves efficiency gains.

*How the paper uses it:* DynaCore's core innovation is a splittable systolic array that reshapes its Minimum Efficient Unit (MEU) along multiple dimensions without changing the overall array topology.

▶ [Systolic Arrays and TPU](https://www.youtube.com/watch?v=txnudN7zLb4) — Yifan&GPU · 1:06:14 · 5mo ago

## Already in your library

- [Lecture 05 - Quantization (Part I) | MIT 6.S965](https://www.youtube.com/watch?v=AlASZb93rrc) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [EfficientML.ai Lecture 5 - Quantization (Part I) (MIT 6.5940, Fall 2023)](https://www.youtube.com/watch?v=TSc_BibWRhM) — also for: QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models (Sai Qian Zhang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of DynaCore's key innovations in adaptive hardware architecture and phase-specific quantization for efficient LLM serving. The beginner project focuses on simulating the shape-adaptive systolic array concept in software to grasp dynamic MEU reshaping. The intermediate project implements a simplified disaggregated quantization scheme and runtime scheduling for LLM inference phases on a public transformer model, showing practical efficiency gains. The advanced project extends the runtime scheduling framework to handle multi-device LLM serving scenarios, addressing one of the paper's stated future directions and limitations.

### Beginner — Simulate Shape-Adaptive Systolic Array MEU Reshaping
*Effort: a weekend, ~8 hours*

You build a Python simulation that models the dynamic reshaping of the Minimum Efficient Unit (MEU) of a systolic array along spatial and temporal dimensions. The simulation will visualize how trading array width against height and temporal splitting (Split-K) affects utilization for prefill and decoding phases of LLM inference.

**Why it shows you understood the paper:** This project demonstrates you understand the core architectural innovation of DynaCore — how the systolic array dynamically adapts its shape to match workload characteristics, improving hardware utilization across LLM phases.

**Grounded in:** Design of a splittable systolic array that reshapes the MEU along two spatial and one temporal dimension without changing array topology.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic workload parameters simulating prefill and decoding GEMM dimensions based on descriptions in the paper.

**Build it:**

1. Implement a Python model representing the systolic array MEU with parameters for width, height, and temporal splits.
2. Create functions to reshape the MEU spatially by trading width and height asymmetrically.
3. Implement temporal splitting (Split-K) to simulate mapping reduction onto the array.
4. Simulate workload characteristics for prefill (compute-bound) and decoding (memory-bound) phases.
5. Visualize MEU configurations and utilization metrics for different reshaping strategies.
6. Write a README explaining the simulation, how it relates to DynaCore's MEU reshaping, and observations.

**Ships as:** A Python repository with simulation code, visualizations of MEU reshaping effects, and a README linking the simulation to the paper's architectural contribution.

**Stretch goal:** Add a simple interactive UI (e.g., using Streamlit) to let users adjust MEU shape parameters and see utilization changes in real-time.

### Intermediate — Implement Disaggregated Quantization and Runtime Scheduling for LLM Inference
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of DynaCore's disaggregated quantization scheme applying dual-side quantization for a prefill phase and weight-only quantization for decoding on a small transformer model (e.g., Hugging Face's DistilBERT). You also build a runtime scheduler that selects quantization configurations per batch based on simulated latency and energy cost models.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method of phase-specific quantization and dynamic runtime scheduling into a working system, demonstrating practical efficiency improvements and workload adaptation.

**Grounded in:** Proposal of disaggregated quantization with an inner-product mixed-precision datapath tailored to phase-specific demands; Development of a runtime scheduling framework that dynamically selects MEU configurations per batch.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), numpy, matplotlib

**Data:** Use the Hugging Face DistilBERT model and a small subset of the GLUE benchmark (e.g., SST-2) as a proxy for LLM inference workloads.

**Build it:**

1. Implement dual-side quantization (W8A8) for the prefill phase and weight-only quantization (W4A16) for the decoding phase on DistilBERT weights and activations.
2. Build a mixed-precision inner-product function that maintains output width invariant to precision changes.
3. Profile latency and energy cost estimates for each quantization configuration using simple cost models.
4. Develop a runtime scheduling framework that selects the optimal quantization configuration per batch to minimize latency and energy jointly.
5. Run inference on SST-2 batches simulating prefill and decoding phases, comparing latency and accuracy against a baseline with static quantization.
6. Document the implementation, results, and how this reproduces the paper's disaggregated quantization and scheduling approach.

**Ships as:** A PyTorch-based repository with quantization and scheduling code, evaluation scripts, and a README reporting latency, energy estimates, and accuracy trade-offs.

**Stretch goal:** Extend the scheduler to handle variable batch sizes and dynamically switch quantization modes during inference.

### Advanced — Extend Runtime Scheduling for Multi-Device Distributed LLM Serving
*Effort: 3+ weeks*

You design and prototype an extension of DynaCore's runtime scheduling framework to handle multi-device and distributed LLM serving environments. This includes modeling workload partitioning across devices, coordinating MEU configurations, and adapting scheduling decisions to network and device heterogeneity.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation from the paper, demonstrating deep comprehension of the challenges in scaling shape-adaptive hardware and scheduling to distributed settings, and proposing a concrete system-level solution.

**Grounded in:** Extending the architecture and scheduling framework to multi-device and distributed LLM serving environments; The design assumes separate devices for prefill and decoding phases (PDD), which may not be feasible in all deployment scenarios.

**Tech stack:** Python 3.11, PyTorch, Ray (for distributed simulation), numpy, matplotlib

**Data:** Use the Hugging Face DistilBERT model and synthetic workload traces simulating multi-device LLM serving with variable batch sizes and phase transitions.

**Build it:**

1. Model a multi-device LLM serving environment with devices specialized for prefill and decoding phases.
2. Extend the runtime scheduler to coordinate MEU configurations across devices considering communication overhead and device heterogeneity.
3. Simulate workload traces with variable batch sizes and phase transitions distributed across devices.
4. Implement a scheduling policy that dynamically adapts MEU shapes and quantization modes per device and batch to optimize latency and energy.
5. Evaluate the multi-device scheduler against a baseline single-device scheduler in terms of latency, throughput, and energy efficiency.
6. Write detailed documentation explaining the multi-device scheduling design, challenges addressed, and evaluation results.

**Ships as:** A repository with distributed scheduling simulation code, evaluation scripts, and a comprehensive README discussing the extension of DynaCore's scheduling to multi-device setups.

**Stretch goal:** Prototype integration with emerging memory/storage technologies to further optimize distributed scheduling decisions.
