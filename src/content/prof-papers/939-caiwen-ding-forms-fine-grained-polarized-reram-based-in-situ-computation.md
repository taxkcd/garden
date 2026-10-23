---
title: "939 · FORMS: Fine-grained Polarized ReRAM-based In-situ Computation for Mixed-signal DNN Accelerator — Caiwen Ding"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-caiwen-ding"
source_hash: "1bae8f9ab6cd0298780faa4c639f06c082329a131c5ecb2d38c23a2059d79bc0"
sequence: 939
generator: "outreach-garden: managed"
---

# 939 · FORMS: Fine-grained Polarized ReRAM-based In-situ Computation for Mixed-signal DNN Accelerator

## At a glance

- **Professor:** Caiwen Ding
- **Institution:** University of Minnesota
- **Paper:** [FORMS: Fine-grained Polarized ReRAM-based In-situ Computation for Mixed-signal DNN Accelerator](https://arxiv.org/pdf/2106.09144)
- **Authors:** Geng Yuan, Payman Behnam, Zhengang Li, Ali Shafiee, Sheng Lin, Xiaolong Ma, Hang Liu, Xuehai Qian, Mahdi Nazm Bojnordi, Yanzhi Wang, Caiwen Ding
- **Year:** 2021

## Paper overview

This paper presents FORMS, a novel deep neural network (DNN) accelerator design that uses resistive random access memory (ReRAM) technology to perform efficient in-situ analog computations. It addresses the challenge of representing both positive and negative weights in ReRAM crossbars by enforcing that all weights in a small sub-array fragment have the same sign, which avoids doubling hardware costs or adding offset circuits. The design includes algorithm-hardware co-optimization using ADMM regularized training to enforce this polarization, structured pruning, and quantization. A fine-grained architecture with zero-skipping logic improves performance and energy efficiency compared to prior designs.

### Why it matters

**Research problem:** How to efficiently represent and compute signed (positive and negative) weights in ReRAM-based DNN accelerators without doubling hardware cost or incurring additional overhead from offset circuits, while maintaining high accuracy and throughput.

**Why it matters:** ReRAM-based accelerators promise high energy efficiency and parallelism for DNNs but face a fundamental challenge in handling signed weights because ReRAM crossbars store weights as conductance values assumed to be all positive or all negative per column. Existing solutions either double hardware cost or add complex offset circuitry, limiting practical deployment and efficiency.

**Key contributions:**

- Introduction of fragment polarization technique to enforce same-sign weights in fine-grained ReRAM crossbar sub-arrays.
- Algorithm-hardware co-design framework using ADMM regularized training to jointly optimize pruning, polarization, and quantization.
- Fine-grained ReRAM accelerator architecture with smaller ADCs and zero-skipping logic to improve throughput and energy efficiency.
- Crossbar-aware structured pruning that considers ReRAM crossbar size to avoid accuracy degradation and hardware waste.
- Demonstration of significant performance and area/power efficiency improvements over state-of-the-art accelerators like ISAAC.

## About the professor

**Caiwen Ding** — Associate Professor, Department of Computer Science & Engineering, University of Minnesota.

Research interests: Algorithm-system co-design of machine learning/artificial intelligence; computer architecture and heterogeneous computing (FPGAs/GPUs); privacy-preserving machine learning; machine learning for electronic design automation (EDA); neuromorphic computing; computer vision and natural language processing.

### Research links

- [Faculty/profile page](https://caiwending.github.io/web/home.html)
- [Google Scholar](https://scholar.google.com/citations?user=7hR0r_EAAAAJ&hl=en)
- [Semantic Scholar](https://www.semanticscholar.org/author/Caiwen-Ding/2881873)
- [DBLP](https://dblp.org/pid/175/2489.html)
- [GitHub](https://github.com/ies-uconn)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** convex optimization
**The paper assumes:** convex optimization theory, ADMM algorithm, constrained optimization methods
**Already in this field?** Skip this entirely if you already understand convex optimization and the ADMM method for constrained problems.

This background focuses on convex optimization, specifically the Alternating Direction Method of Multipliers (ADMM) technique used in the FORMS paper to enforce fragment polarization constraints during DNN training. The rigorous course option provides a deep, university-level understanding of convex optimization principles and algorithms, while the fast track offers a more concise, accessible introduction to the same core concepts for quicker comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [EE364a Convex Opt (Stanford)](https://www.youtube.com/playlist?list=PL7A3953FD9E6F4912) — Jiajin Yu · 37 videos · 46.0h across 37 episodes

**Watch only this:** Lectures 1 through 7, about 8.5 hours — covering basic convex sets, functions, duality, and the introduction to ADMM and its applications, which are essential for grasping the paper's training methodology.

*Why it unblocks this paper:* This Stanford Convex Optimization I course covers foundational concepts and algorithms including ADMM, which is critical to understanding the optimization techniques used in FORMS for enforcing weight constraints and structured pruning.

*If you want all of it:* 46.0 hours across 37 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Optimization](https://www.youtube.com/playlist?list=PL-DDW8QIRjNOVxrU2efygBw0xADVOgpmw) — Ahmad Bazzi · 26 videos

**Watch only this:** First 6 videos, approximately 1.5 hours — enough to cover the basics of convex sets, functions, and an intuitive overview of ADMM.

*Why it unblocks this paper:* This short-form playlist provides clear and concise explanations of convex optimization concepts, suitable for quickly building intuition about ADMM and related optimization methods used in the paper without the depth of a full university course.

*If you want all of it:* About 6 hours across 26 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FORMS paper, start with foundational knowledge on ReRAM crossbar architectures and ADMM optimization techniques, which are critical for the hardware and algorithmic innovations in the work. Next, explore structured pruning methods relevant to DNNs to grasp how hardware constraints influence model compression. Finally, focus on the core concept of the FORMS accelerator itself through the authors' own presentation, which details their algorithm-hardware co-design approach and experimental results.

### ReRAM crossbar architecture lecture *(prerequisite)*
Understanding the ReRAM crossbar architecture is essential as it forms the fundamental hardware substrate enabling in-situ analog computation for DNN acceleration in FORMS. This lecture covers emerging memory technologies including ReRAM, providing the necessary background on device characteristics and circuit design.

*How the paper uses it:* FORMS builds on ReRAM crossbar arrays to perform efficient mixed-signal DNN computations.

▶ [VLSI - Lecture 11e: Emerging Memories (PCM, ReRAM, MRAM, FeRAM)](https://www.youtube.com/watch?v=aDzUu0L-rdg) — Adi Teman · 45:12 · 4y ago

### ADMM optimization for neural networks seminar *(prerequisite)*
ADMM (Alternating Direction Method of Multipliers) is a key optimization technique used in FORMS to enforce polarization and pruning constraints during DNN training. This seminar provides a rigorous introduction to ADMM algorithms and their application to large-scale optimization problems, which underpins the algorithm-hardware co-design in the paper.

*How the paper uses it:* FORMS uses ADMM regularized training to enforce fragment polarization and structured pruning constraints.

▶ [UTRC CDS Seminar: Rachael Tappenden, "Flexible ADMM for Big Data Applications"](https://www.youtube.com/watch?v=wQEalpgvwN0) — Institute for Systems Research · 55:21 · 10y ago

### Structured pruning for DNNs talk *(prerequisite)*
Structured pruning is a model compression technique that removes groups of weights to reduce hardware cost while maintaining accuracy. This talk explains structured pruning methods relevant to hardware-aware DNN acceleration, helping to understand how FORMS adapts pruning to crossbar constraints.

*How the paper uses it:* FORMS incorporates crossbar-aware structured pruning to reduce hardware cost without accuracy loss.

▶ [CHAP’NN: Efficient Inference of CNNs via Channel Pruning](https://www.youtube.com/watch?v=Xhukedlc13w) — IEEE COINS Conference · 25:04 · 6y ago

### Mixed-signal DNN accelerator design lecture *(prerequisite)*
Mixed-signal DNN accelerator design lectures provide context on the integration of analog and digital components, including ADC design and zero-skipping logic, which are critical for FORMS' fine-grained architecture. Understanding these design principles clarifies the hardware innovations in the paper.

*How the paper uses it:* FORMS features a fine-grained mixed-signal architecture with small ADCs and zero-skipping logic to improve efficiency.

▶ [\[ISCA'21\] FORMS: Fine-grained and Polarized Mixed-signal DNN Accelerator](https://www.youtube.com/watch?v=cVLDu29Son0) — CoCoPIE Real-time AI on Mobile · 21:16 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational hardware and algorithmic concepts behind the FORMS paper, starting with the basics of ReRAM crossbar architectures that enable in-memory analog computation. Next, it covers ADMM optimization, the key training technique used to enforce weight polarization and pruning constraints. Finally, it explains the core innovation of fragment polarization in ReRAM sub-arrays, which allows efficient representation of signed weights without hardware overhead. This progression builds intuition from hardware basics to the paper's novel co-design approach.

### ReRAM crossbar architecture lecture *(prerequisite)*
Learn about Resistive Random Access Memory (ReRAM) crossbar arrays, which are hardware structures that store weights as conductance values and enable massively parallel, in-situ analog computation for deep neural networks. Understanding this hardware foundation is crucial to grasp how FORMS accelerates DNNs efficiently.

*How the paper uses it:* FORMS builds on ReRAM crossbars as the fundamental hardware substrate for in-situ analog DNN computation.

▶ [VLSI - Lecture 11e: Emerging Memories (PCM, ReRAM, MRAM, FeRAM)](https://www.youtube.com/watch?v=aDzUu0L-rdg) — Adi Teman · 45:12 · 4y ago

### ADMM optimization for neural networks seminar *(prerequisite)*
Explore the Alternating Direction Method of Multipliers (ADMM), an advanced optimization technique that can enforce complex constraints during neural network training, such as structured pruning and weight polarization. This method helps train networks that meet hardware-friendly constraints without sacrificing accuracy.

*How the paper uses it:* FORMS uses ADMM regularized training to enforce fragment polarization and pruning constraints on DNN weights.

▶ [UTRC CDS Seminar: Rachael Tappenden, "Flexible ADMM for Big Data Applications"](https://www.youtube.com/watch?v=wQEalpgvwN0) — Institute for Systems Research · 55:21 · 10y ago

### FORMS ReRAM DNN accelerator talk
Watch the authors' presentation of the FORMS accelerator, which details the algorithm-hardware co-design, fine-grained architecture, zero-skipping logic, and performance improvements. This talk provides a concise overview of the paper's key innovations and results.

*How the paper uses it:* This talk directly explains the FORMS design and experimental outcomes.

▶ [\[ISCA'21\] FORMS: Fine-grained and Polarized Mixed-signal DNN Accelerator](https://www.youtube.com/watch?v=cVLDu29Son0) — CoCoPIE Real-time AI on Mobile · 21:16 · 5y ago

## Already in your library

- [AI Optimization Lecture 01 - Prefill vs Decode - Mastering LLM Techniques from NVIDIA](https://www.youtube.com/watch?v=3SBUCJzogj4) — also for: A Shape-Adaptive Architecture with Disaggregated Quantization for Efficient LLM Serving (Yiran Chen)
- [What is Resistive RAM?](https://www.youtube.com/watch?v=EYH8SirhnLU) — also for: XL-HD: Extended Learning in Hyperdimensional Computing via Deterministic Projections for In-Memory Accelerators (Dayane Reis)
- [Stanford CS231N | Spring 2025 | Lecture 3: Regularization and Optimization](https://www.youtube.com/watch?v=dyNGd06MWn4) — also for: Few-Step Diffusion Language Models via Trajectory Self-Distillation (Vladimir Pavlovic)
- [https://www.youtube.com › watch?v=4TJV3uV0dA0](https://www.youtube.com/watch?v=4TJV3uV0dA0) — also for: Teaching Networks to Solve Optimization Problems (Soheil Kolouri)
- [Structured Pruning Learns Compact and Accurate Models](https://www.youtube.com/watch?v=G07ft-IiL6o) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)
- [Andrea Lodi - Structured Pruning of Neural Networks for ...](https://www.youtube.com/watch?v=b409MEKUd_w) — also for: AdaCred: Adaptive Causal Decision Transformers with Feature Crediting (Saibal Mukhopadhyay)
- [Compressing Neural Networks for Embedded AI: Pruning, Projection, and Quantization](https://www.youtube.com/watch?v=7uV3-eTB5es) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)
- [Design for Highly Flexible and Energy-Efficient Deep Neural ...](https://www.youtube.com/watch?v=brhOo-_7NS4) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate the core ideas of the FORMS paper. Starting with a small-scale simulation of the fragment polarization concept, you then implement the ADMM-based training with pruning and quantization on a standard dataset to reproduce accuracy and efficiency trade-offs. Finally, you extend the approach by exploring hardware overhead reduction or robustness improvements, addressing the paper's stated limitations and future directions.

### Beginner — Simulate Fragment Polarization in ReRAM Crossbar Sub-arrays
*Effort: a weekend, ~8 hours*

You build a Python simulation that models a small ReRAM crossbar sub-array fragment enforcing same-sign weights, demonstrating how fragment polarization avoids doubling hardware cost. The simulation visualizes weight sign enforcement and quantifies the impact on hardware resource usage compared to naive signed weight representation.

**Why it shows you understood the paper:** This project shows you grasp the key hardware challenge FORMS addresses and the fragment polarization technique that enables efficient signed weight representation without extra crossbars or offset circuits.

**Grounded in:** Introduction of fragment polarization technique to enforce same-sign weights in fine-grained ReRAM crossbar sub-arrays.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic weight matrices generated to simulate signed weight distributions in small fragments.

**Build it:**

1. Implement a function to generate random weight matrices with mixed signs.
2. Partition the matrix into small fragments (e.g., size 4 or 8) and enforce same-sign weights per fragment by flipping signs or zeroing conflicting weights.
3. Calculate and compare the hardware cost metrics (e.g., number of crossbars needed) for naive signed representation vs. fragment polarization.
4. Visualize the weight matrices before and after polarization and the corresponding hardware cost savings.
5. Write a README explaining the simulation, the fragment polarization concept, and the results.

**Ships as:** A GitHub repo with Python scripts simulating fragment polarization, plots illustrating sign enforcement and hardware cost comparison, and a README explaining the concept and results.

**Stretch goal:** Add a simple zero-skipping logic simulation to show how input zeros reduce computation cycles in fine-grained sub-arrays.

### Intermediate — Reimplement FORMS ADMM Training with Pruning and Quantization on CIFAR-10
*Effort: 2 weekends, ~20 hours*

You implement the core FORMS algorithm-hardware co-design training pipeline using ADMM regularized optimization to enforce fragment polarization constraints, combined with structured pruning and quantization on a small CNN trained on CIFAR-10. You compare accuracy and model size against a baseline without polarization.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method from its description, showing understanding of ADMM-based constraint enforcement, structured pruning aware of crossbar fragments, and quantization effects on accuracy and efficiency.

**Grounded in:** Algorithm-hardware co-design framework using ADMM regularized training to jointly optimize pruning, polarization, and quantization.

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib

**Data:** CIFAR-10 dataset, a well-known public image classification benchmark used as a substitute for the paper's datasets.

**Build it:**

1. Implement a small CNN model suitable for CIFAR-10 classification.
2. Implement ADMM regularized training to enforce same-sign weights within defined fragments of the model's weight tensors.
3. Incorporate crossbar-aware structured pruning that respects fragment boundaries to avoid accuracy degradation.
4. Add quantization of weights to low bit-width (e.g., 8-bit) consistent with FORMS design.
5. Train the model with and without the FORMS constraints and compare accuracy, model size, and sparsity.
6. Visualize training curves and report metrics similar to the paper's key results.

**Ships as:** A GitHub repo with PyTorch code implementing ADMM-based fragment polarization training, pruning, and quantization on CIFAR-10, with scripts to reproduce experiments and a README detailing methodology and results.

**Stretch goal:** Extend the implementation to include zero-skipping logic simulation to measure throughput improvements.

### Advanced — Explore Hardware Overhead Reduction for Fine-Grained ADCs in FORMS Architecture
*Effort: 3+ weeks*

You design and simulate hardware-level optimizations to reduce the overhead of orchestrating multiple small ADCs in the FORMS fine-grained ReRAM accelerator. This may include architectural changes, scheduling algorithms, or resource sharing strategies. You evaluate the impact on area, power, and throughput using hardware simulation tools or detailed modeling.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep understanding of the FORMS hardware design and the trade-offs involved in fine-grained ADC implementation and zero-skipping logic.

**Grounded in:** Exploring further hardware optimizations to reduce overhead of orchestrating multiple small ADCs.

**Tech stack:** Python 3.11, SystemC or Verilog (optional for simulation), MATLAB or Excel for modeling, matplotlib

**Data:** Hardware parameters and performance metrics derived from the paper's reported results and typical ADC specifications; no external dataset required.

**Build it:**

1. Study the FORMS fine-grained ADC architecture and zero-skipping logic as described in the paper.
2. Model the overhead of multiple small ADCs in terms of area, power, and latency using analytical or simulation tools.
3. Propose and implement one or more hardware optimization strategies (e.g., ADC sharing, scheduling, pipelining).
4. Simulate or analytically evaluate the proposed optimizations against the baseline model.
5. Analyze trade-offs between hardware complexity, power, area, and throughput.
6. Document findings, including limitations and suggestions for further improvements.

**Ships as:** A GitHub repo containing hardware models, simulation scripts or analytical calculations, and a detailed README discussing the optimization approach, evaluation, and conclusions.

**Stretch goal:** Investigate robustness improvements against hardware variations by integrating pruning ratio adjustments or error correction techniques into the hardware model.
