---
title: "515 · RPU – A Reasoning Processing Unit — David Brooks"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-brooks"
source_hash: "1236ec4ca1908d60e7a1596ebd93b17dd095fb6efa870bccf759549834c33b3d"
sequence: 515
generator: "outreach-garden: managed"
---

# 515 · RPU – A Reasoning Processing Unit

## At a glance

- **Professor:** David Brooks
- **Institution:** Harvard University
- **Paper:** [RPU – A Reasoning Processing Unit](https://doi.org/10.48550/arXiv.2602.18568)
- **Authors:** Matthew Joseph Adiletta, Gu-Yeon Wei, David Brooks
- **Year:** 2026

## Paper overview

This paper introduces the Reasoning Processing Unit (RPU), a novel chiplet-based system architecture designed to dramatically improve the memory bandwidth and energy efficiency for low-latency inference in large language models (LLMs). The RPU addresses the memory bottleneck in current GPU architectures by using a capacity-optimized high-bandwidth memory (HBM-CO), a scalable chiplet design, and a decoupled microarchitecture to maximize bandwidth utilization and reduce latency and energy consumption during LLM reasoning tasks.

### Why it matters

**Research problem:** Current GPU architectures for LLM inference are bottlenecked by memory bandwidth, especially during the decode phase of reasoning LLMs which require low-latency, low-batch token generation. Existing high-bandwidth memory (HBM) solutions are designed for high capacity rather than the bandwidth-to-capacity ratio needed for efficient low-latency inference, leading to energy inefficiency, high cost, and underutilized memory capacity.

**Why it matters:** Low-latency inference is critical for reasoning LLMs that generate long output sequences. Inefficient memory bandwidth utilization leads to slow token generation, high energy consumption, and increased system cost, limiting the practical deployment and scalability of advanced AI systems.

**Key contributions:**

- Design of HBM-CO memory that trades capacity for higher bandwidth and energy efficiency tailored for low-latency LLM inference.
- A scalable chiplet-based RPU architecture that increases memory IO shoreline and dedicates 70-80% of power to memory interfaces, improving bandwidth at ISO TDP.
- A decoupled pipeline microarchitecture with custom ISA and pipeline arbiters enabling near-roofline memory bandwidth utilization even at batch size 1.
- Development of an event-driven simulation framework combining RTL-modeled kernels and analytical energy models to evaluate RPU performance and energy.
- Demonstration of up to 45.3× lower latency and 18.6× higher throughput compared to NVIDIA H100 GPU on Llama3-405B model at similar system cost.

## About the professor

**David Brooks** — Haley Family Professor of Computer Science, John A. Paulson School of Engineering and Applied Sciences, Harvard University.

Research interests: Computer Architecture, Hardware / Software Co-Design of AI Systems, Energy-Efficient Computing, Sustainable Computing

### Research links

- [Faculty/profile page](https://davidbrooks.seas.harvard.edu/)
- [Identity evidence](https://www.seas.harvard.edu/directory/dbrooks)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Architecture
**The paper assumes:** modern computer architecture, memory hierarchy design, microarchitecture pipelines, chiplet system design, and memory bandwidth optimization
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computer architecture and memory systems.

This background focuses on computer architecture fundamentals essential for understanding the RPU paper, including memory hierarchy, chiplet-based system design, microarchitecture pipelines, and bandwidth-to-capacity trade-offs in memory systems. The rigorous course option offers a deep, structured university-level lecture series for comprehensive study, while the fast track provides a concise, intuition-driven explainer series for a quicker but still solid grasp of core concepts. Choose the course for thorough preparation or the fast track for an efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Organization and Architecture - CST202](https://www.youtube.com/playlist?list=PLpOlX5FjW5ZCoHzS_O8JPCO_d_b2pjHKe) — Shastra Technical Institute · 44 videos

**Watch only this:** Episodes 1-12, about 5 hours — covering syllabus introduction, functional units, basic operational concepts, bus structures, memory locations and operations, instruction sequencing, addressing modes, and processor organization to build a solid foundation for the paper's architecture.

*Why it unblocks this paper:* This university-level course covers detailed computer organization and architecture topics, including memory operations, bus structures, micro-operations, and processor organization, which are directly relevant to understanding the RPU's architectural innovations and memory bandwidth optimizations.

*If you want all of it:* 17.8 hours across 44 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer architecture from scratch](https://www.youtube.com/playlist?list=PL9vTTBa7QaQOoMfpP3ztvgyQkPWDPfJez) — Core Dumped · 6 videos · 1.7h across 6 episodes

**Watch only this:** Episodes 1-4, about 1.1 hours — covering how transistors run code, remember data, CPU crafting, and capacitor memory limitations, which are key to grasping the hardware basics relevant to the paper.

*Why it unblocks this paper:* This concise explainer series provides clear, visual, and intuition-first explanations of fundamental computer architecture concepts such as transistor operation, CPU design, and clocking, enabling a quick yet effective understanding of the hardware principles underlying the RPU design.

*If you want all of it:* 1.7 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the RPU paper, start by grasping the foundational hardware challenges and design principles that motivate the work, including the memory bandwidth bottleneck in GPUs, chiplet-based system architectures, and decoupled microarchitecture pipelines. Then, build on this foundation by studying capacity-optimized high-bandwidth memory designs, which are central to the RPU's innovation. Finally, focus on the core concept of the RPU itself through the authors' own seminar talk for the most direct and detailed insights.

### memory bandwidth bottleneck in GPUs *(prerequisite)*
Understanding the memory bandwidth bottleneck in GPUs is essential because it is the primary performance limitation that the RPU architecture aims to overcome. This section covers GPU performance bottlenecks, memory bandwidth constraints, and their impact on AI workloads, especially low-latency inference.

*How the paper uses it:* The RPU addresses the memory bandwidth bottleneck in current GPU architectures for LLM inference.

▶ [Making GPUs Actually Fast: A Deep Dive into Training Performance](https://www.youtube.com/watch?v=pHqcHzxx6I8) — Jane Street · 47:44 · 9 months ago

### chiplet based system architecture *(prerequisite)*
Chiplet-based system architectures enable modular, scalable compute fabrics by integrating multiple smaller dies, which is foundational to the RPU's design. This section explores the motivations, challenges, and benefits of chiplet technology in modern processors.

*How the paper uses it:* The RPU uses a scalable chiplet-based compute fabric to increase memory IO shoreline and balance compute-to-bandwidth ratio.

▶ [CHIPLETS: Divide and Conquer | The Future of Processors](https://www.youtube.com/watch?v=ss8eCAVZ7Hg) — My Computer · 14:32 · 3 years ago

### decoupled microarchitecture pipelines *(prerequisite)*
Decoupled microarchitecture pipelines separate memory, compute, and network pipelines to improve utilization and hide latency, which is a core microarchitectural innovation in the RPU. This section covers pipeline organization and out-of-order execution principles relevant to the RPU design.

*How the paper uses it:* The RPU features a decoupled pipeline microarchitecture enabling near-roofline memory bandwidth utilization even at batch size 1.

▶ [Implementation of an Out-of-order RISC-V Vector Unit- Roger Espasa, SemiDynamics Technology Services](https://www.youtube.com/watch?v=WzID6kk8RNs) — RISC-V International · 29:13 · 4 years ago

### capacity-optimized high bandwidth memory
Capacity-optimized high-bandwidth memory (HBM-CO) is a novel memory design that trades off capacity for improved bandwidth-to-capacity ratio and energy efficiency, which is central to the RPU's performance gains. This section covers advanced memory architectures and energy considerations.

*How the paper uses it:* HBM-CO memory is a key contribution enabling the RPU's improved bandwidth and energy efficiency tailored for low-latency LLM inference.

▶ [Processing-in-memory in High Bandwidth Memory Architecture with Efficient and Low Latency Channel](https://www.youtube.com/watch?v=e4zU6u0YIRU) — TERA KAIST · 15:52 · 5 years ago

### RPU Reasoning Processing Unit talk *(the paper's own talk)*
The authors' own seminar talk provides the most direct and comprehensive insights into the RPU architecture, design decisions, and evaluation results. It is the best resource to understand the paper's contributions in context.

*How the paper uses it:* This is the authors' own presentation on the RPU architecture, offering detailed explanations and motivations.

▶ [Purdue AARC Seminar – Asim Munawar (IBM Watson Research Center) | LLM-Based Reasoning](https://www.youtube.com/watch?v=uHe_5J3v5-I) — Purdue Applied AI Research Center · 1:28:49 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the RPU paper, start by grasping the fundamental hardware bottleneck it addresses: the memory bandwidth limitations in GPUs. Next, learn about chiplet-based system architectures, which underpin the RPU's modular design. Then, explore decoupled microarchitecture pipelines, the core innovation enabling efficient bandwidth utilization. Finally, dive into capacity-optimized high-bandwidth memory, the specialized memory design that makes the RPU's improvements possible.

### memory bandwidth bottleneck in GPUs *(prerequisite)*
This concept explains why GPUs struggle with memory bandwidth, especially during low-latency inference tasks. Understanding this bottleneck clarifies why improving memory bandwidth is critical for performance and energy efficiency in AI workloads.

*How the paper uses it:* The RPU is designed specifically to overcome the memory bandwidth bottleneck that limits current GPU performance during low-batch LLM inference.

▶ [Making GPUs Actually Fast: A Deep Dive into Training Performance](https://www.youtube.com/watch?v=pHqcHzxx6I8) — Jane Street · 47:44 · 9 months ago

### chiplet based system architecture *(prerequisite)*
Chiplet architectures break down large chips into smaller, modular components that can be combined flexibly. This approach allows better scalability and power allocation, which is essential for balancing compute and memory bandwidth in modern processors.

*How the paper uses it:* The RPU uses a scalable chiplet-based compute fabric to increase memory IO shoreline and dedicate more power to memory interfaces.

▶ [CHIPLETS: Divide and Conquer | The Future of Processors](https://www.youtube.com/watch?v=ss8eCAVZ7Hg) — My Computer · 14:32 · 3 years ago

### decoupled microarchitecture pipelines *(prerequisite)*
Decoupled pipelines separate memory, compute, and network operations to allow out-of-order execution and better resource utilization. This microarchitectural design helps hide latency and maximize throughput, especially at low batch sizes.

*How the paper uses it:* The RPU’s decoupled microarchitecture enables near-roofline memory bandwidth utilization and hides network latency stalls during LLM inference.

▶ [Introduction to Pipeline Architecture](https://www.youtube.com/watch?v=q4fwx3h3mdg) — TutorialsPoint · 14:31 · 9 years ago

### capacity-optimized high bandwidth memory
This memory design trades off some capacity to improve the bandwidth-to-capacity ratio and energy efficiency. It is tailored for workloads like low-latency LLM inference where bandwidth is more critical than raw capacity.

*How the paper uses it:* HBM-CO memory is a key innovation in the RPU that reduces unnecessary capacity to boost bandwidth and energy efficiency for reasoning tasks.

▶ [Why The Fastest Memory Isn't In Your PC (HBM explained)](https://www.youtube.com/watch?v=-mKb75P7wT0) — Techquickie · 5:14 · 1 month ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the RPU architecture and its key innovations for low-latency LLM inference. The beginner project recreates a core concept of memory bandwidth bottleneck visualization using familiar tools. The intermediate project implements a simplified simulation of the decoupled pipeline microarchitecture to evaluate bandwidth utilization against a baseline. The advanced project extends the RPU simulation approach to explore physical design trade-offs of HBM-CO memory, addressing a stated limitation and future direction of the paper.

### Beginner — Memory Bandwidth Bottleneck Visualization for LLM Inference
*Effort: a weekend, ~8 hours*

You build an interactive web visualization that demonstrates the memory bandwidth bottleneck during low-batch LLM inference decode phase, inspired by the paper's analysis of GPU limitations. The visualization shows how batch size affects memory bandwidth utilization and energy efficiency, using simplified data derived from the paper's reported metrics.

**Why it shows you understood the paper:** This project shows you grasp the core problem the RPU addresses: inefficient memory bandwidth utilization at low batch sizes during LLM reasoning. A professor would see you can translate architectural bottlenecks into clear, data-driven visual explanations.

**Grounded in:** Research problem: "Current GPU architectures for LLM inference are bottlenecked by memory bandwidth, especially during the decode phase of reasoning LLMs which require low-latency, low-batch token generation."

**Tech stack:** TypeScript, React, D3.js

**Data:** Synthetic data based on the paper's reported GPU bandwidth utilization and energy efficiency at varying batch sizes, approximated from the key results and supporting text.

**Build it:**

1. Extract key numerical insights from the paper about GPU memory bandwidth utilization and energy efficiency at different batch sizes.
2. Design a simple React app with D3.js to plot batch size versus bandwidth utilization and energy efficiency.
3. Implement interactive controls to simulate decode-phase inference scenarios with batch sizes from 1 to 64.
4. Add explanatory annotations referencing the paper's claims about low power utilization and energy inefficiency.
5. Test and document how the visualization reflects the memory bottleneck problem.

**Ships as:** A GitHub repo with a React+D3 interactive visualization and README explaining the memory bandwidth bottleneck in low-batch LLM inference as described in the paper.

**Stretch goal:** Add a comparison mode showing hypothetical bandwidth utilization improvements with RPU-like architectures.

### Intermediate — Simulated Decoupled Pipeline Microarchitecture for Memory Bandwidth Utilization
*Effort: 2 weekends, ~20 hours*

You implement a simplified event-driven simulation of the RPU's decoupled microarchitecture pipelines (memory, compute, network) coordinating via pipeline arbiters. The simulation models token decode workloads at batch size 1 and measures bandwidth utilization and latency compared to a baseline monolithic pipeline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core architectural innovation—the decoupled pipeline microarchitecture—and quantitatively evaluate its impact on bandwidth utilization and latency. It shows you understand the microarchitectural mechanisms behind the RPU's performance gains.

**Grounded in:** Key contribution: "A decoupled pipeline microarchitecture with custom ISA and pipeline arbiters enabling near-roofline memory bandwidth utilization even at batch size 1." Key result: "Batch size 1 inference saturates memory bandwidth and achieves roofline performance."

**Tech stack:** Python 3.11, SimPy (event-driven simulation library), Matplotlib

**Data:** Synthetic workload traces simulating token decode requests at batch size 1, derived from the paper's description of decode-phase memory access patterns.

**Build it:**

1. Study the paper's description of the decoupled microarchitecture and pipeline arbiters coordinating memory, compute, and network pipelines.
2. Design a simplified event-driven simulation model with separate pipeline stages and arbiters using SimPy.
3. Implement baseline monolithic pipeline simulation for token decode workload at batch size 1.
4. Implement decoupled pipeline simulation with out-of-order execution and network latency hiding.
5. Run simulations to measure bandwidth utilization and latency for both models.
6. Plot and compare results, documenting how decoupled pipelines improve utilization and latency.

**Ships as:** A Python simulation repo with scripts, plots, and README demonstrating the performance benefits of decoupled microarchitecture pipelines for low-batch LLM inference.

**Stretch goal:** Extend the simulation to model pipeline stalls and synchronization overheads, exploring scalability limits.

### Advanced — Exploring Physical Design Trade-offs of Capacity-Optimized HBM for RPU
*Effort: 3+ weeks*

You develop a detailed analytical model and simulation framework to explore the physical design trade-offs of the HBM-CO memory proposed in the paper, focusing on cost, energy per bit, and bandwidth per shoreline. You extend the paper's analytical energy and cost models to evaluate different core-die and sub-array configurations, addressing the limitation of lacking physical implementation studies.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by investigating the physical design and manufacturing challenges of HBM-CO. It shows you can extend architectural simulation with physical modeling to validate and optimize novel memory designs for AI inference.

**Grounded in:** Limitation: "Physical design and manufacturing of HBM-CO require further study to realize potential bandwidth and energy gains from smaller core-die and sub-arrays." Future direction: "Physical implementation and fabrication studies of HBM-CO memory to validate energy and bandwidth improvements."

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Analytical parameters and baseline energy/cost metrics from the paper's energy and cost models; no physical hardware data available, so models are based on published paper formulas.

**Build it:**

1. Extract and formalize the paper's analytical models for HBM-CO energy per bit, cost per GB, and bandwidth per shoreline.
2. Research typical physical parameters for HBM core-die and sub-array sizes from literature to parameterize the model.
3. Implement a flexible simulation framework to vary core-die and sub-array configurations and compute resulting energy, cost, and bandwidth metrics.
4. Analyze trade-offs between capacity reduction, cost increase, and bandwidth/energy efficiency gains.
5. Visualize results and identify optimal design points under different deployment scenarios.
6. Document assumptions, limitations, and implications for physical design of HBM-CO.

**Ships as:** A Jupyter notebook and Python repo with analytical models, plots, and detailed README exploring physical design trade-offs of HBM-CO memory for RPU systems.

**Stretch goal:** Incorporate preliminary floorplanning or packaging constraints to simulate chiplet integration impacts on bandwidth and energy.

_The paper does not provide released code or datasets; all data must be synthesized or approximated from the paper's reported metrics and descriptions._
