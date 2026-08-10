---
title: "262 · Pathfinder: Practical Real-Time Learning for Data Prefetching — Rajeev Balasubramonian"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rajeev-balasubramonian"
source_hash: "b2478f1875e5db3227ae23fbd3143d4a1bf073ce138c6e136565eb7d59df45fa"
sequence: 262
generator: "outreach-garden: managed"
---

# 262 · Pathfinder: Practical Real-Time Learning for Data Prefetching

## At a glance

- **Professor:** Rajeev Balasubramonian
- **Institution:** University of Utah
- **Paper:** [Pathfinder: Practical Real-Time Learning for Data Prefetching](https://users.cs.utah.edu/~rajeev/pubs/asplos24.pdf)
- **Authors:** Lin Jia, James Patrick McMahon, Sumanth Gudaparthi, Shreyas Singh, Rajeev Balasubramonian
- **Year:** 2024

## Paper overview

This paper presents Pathfinder, a hardware data prefetcher that uses spiking neural networks (SNNs) and spike timing dependent plasticity (STDP) to learn and predict memory access patterns in real-time. Unlike prior neural prefetchers that require expensive offline training, Pathfinder trains continuously and adapts quickly to new patterns with low hardware overhead. It achieves competitive performance with state-of-the-art prefetchers while being practical to implement in modern processors.

### Why it matters

**Research problem:** Improving data prefetching accuracy and coverage in high-performance processors with low overhead, especially for complex or noisy memory access patterns that challenge traditional rule-based prefetchers and existing neural prefetchers which have high training and inference costs.

**Why it matters:** Data prefetching is critical to mitigating the memory wall bottleneck in processors, improving performance for data-intensive workloads. Existing neural prefetchers show promise but are impractical due to high computational and hardware costs, limiting their real-world adoption.

**Key contributions:**

- Introduction of Pathfinder, a hardware-implementable neural prefetcher using SNN and STDP for real-time learning and inference.
- Novel input encoding techniques framing memory access patterns as image classification tasks to leverage SNN strengths.
- Design of supporting tables for on-the-fly neuron labeling and confidence estimation enabling adaptive and selective prefetching.
- Demonstration of a practical hardware microarchitecture with area and power estimates at 12nm technology.
- Comprehensive evaluation showing Pathfinder is competitive with state-of-the-art neural and rule-based prefetchers across diverse benchmarks.

## About the professor

**Rajeev Balasubramonian** — Professor, Associate Director, Kahlert School of Computing, University of Utah.

Research interests: my research focuses on many aspects of computer architecture. I am especially interested in studying how future technology trends influence the design of microprocessors and memory systems. In recent years, we have focused on designing memory systems that can cater to the bandwidth, latency, power, cost, security, and reliability demands of data-intensive workloads. We are also exploring accelerators for a range of demanding kernels, including deep neural networks, genomic analysis, and security primitives.

### Research links

- [Faculty/profile page](http://www.cs.utah.edu/~rajeev)
- [Resolved homepage](https://users.cs.utah.edu/~rajeev/)
- [Lab website](http://arch.cs.utah.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Spiking Neural Networks
**The paper assumes:** spiking neural networks, spike timing dependent plasticity, neural coding and learning in SNNs
**Already in this field?** Skip this entirely if you already understand spiking neural networks and their learning mechanisms like STDP.

To understand the core methodology of the Pathfinder paper, which uses spiking neural networks (SNNs) trained online with spike timing dependent plasticity (STDP), it is essential to grasp the fundamentals of SNN neuron models, coding schemes, and learning rules. The rigorous course offers a deep, structured university-level introduction to neural computation including spiking neurons, while the fast track provides a concise, practical tutorial series focused on FPGA SNN accelerators and their training, suitable for quickly gaining intuition and practical insights. Choose the rigorous course for a thorough theoretical foundation and the fast track for a focused, application-oriented overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 9.40 Introduction to Neural Computation, Spring 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP61I4aI5T6OaFfRK2gihjiMm) — MIT OpenCourseWare · 20 videos · 24.6h across 20 episodes

**Watch only this:** Episodes 1 through 8, about 9.7 hours — covering neuron models, synapses, and spike trains to build a solid understanding of spiking neural network basics.

*Why it unblocks this paper:* MIT 9.40 Introduction to Neural Computation is a comprehensive university course covering neuron models, spike trains, synapses, and learning rules foundational to understanding spiking neural networks and STDP, directly relevant to Pathfinder's approach.

*If you want all of it:* All 20 episodes, about 24.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Spiker+ - Spiking Neural Networks at the Edge](https://www.youtube.com/playlist?list=PLkIAXI4vJ8EgfZki2WRh2Da_h-w6gKbsd) — SMILIES Group Politecnico di Torino · 8 videos · 1.0h across 8 episodes

**Watch only this:** Episodes 1 through 5, about 35 minutes — covering introduction, netbuilder, VHDL generator, data loaders, and training to understand SNN accelerator design and training basics.

*Why it unblocks this paper:* Spiker+ is a concise tutorial series on FPGA spiking neural network accelerators, including training with STDP, providing a practical and application-focused introduction that complements the theoretical depth of the MIT course.

*If you want all of it:* All 8 episodes, about 1 hour.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Pathfinder paper, start by building foundational knowledge on spiking neural networks (SNNs) and spike timing dependent plasticity (STDP), which are the core neural mechanisms enabling Pathfinder's real-time learning. Next, gain a solid grasp of hardware data prefetching techniques and neural network hardware accelerators to contextualize Pathfinder's architectural and implementation challenges. Finally, focus on the authors' own presentation of Pathfinder to get direct insights into their novel approach, design decisions, and evaluation results.

### Spiking neural networks *(prerequisite)*
Spiking neural networks form the computational model underlying Pathfinder's learning and inference. Understanding their operation, encoding schemes, and differences from traditional artificial neural networks is essential to grasp how Pathfinder achieves efficient real-time adaptation.

*How the paper uses it:* Pathfinder uses spiking neural networks trained online with STDP for real-time learning and inference of memory access patterns.

▶ [Cosyne 2022 Tutorial on Spiking Neural Networks - Part 1/2](https://www.youtube.com/watch?v=GTXTQ_sOxak) — Neural Reckoning · 4 years ago

### Spike timing dependent plasticity *(prerequisite)*
STDP is the local learning rule that enables Pathfinder's SNN to adapt continuously during inference without separate training phases. A detailed understanding of STDP mechanisms and their computational implications is critical to appreciate Pathfinder's low-overhead learning approach.

*How the paper uses it:* STDP is the key local learning algorithm that updates synaptic weights in Pathfinder's SNN during real-time memory access pattern learning.

▶ [World Wide Theoretical Neuroscience Seminar: Maoz Shamir ...](https://www.youtube.com/watch?v=CXOQ5KZAaO0) — The Theoretical Neuroscience Channel · 34:34

### Hardware data prefetching *(prerequisite)*
Hardware data prefetching is a fundamental technique in computer architecture to reduce memory latency. Familiarity with traditional and state-of-the-art prefetching methods provides context for Pathfinder's contributions and performance improvements.

*How the paper uses it:* Pathfinder aims to improve data prefetching accuracy and coverage with low overhead compared to existing hardware prefetchers.

▶ [ASPLOS'20 - Session 6B - Classifying Memory Access ...](https://www.youtube.com/watch?v=bpLl6PfUcmw) — ACM SIGARCH · 18:39

### Neural network hardware accelerators *(prerequisite)*
Understanding hardware accelerators for neural networks helps contextualize the challenges and design choices in implementing Pathfinder's SNN efficiently on modern processors with constrained area and power budgets.

*How the paper uses it:* Pathfinder's practical hardware microarchitecture leverages efficient neural network accelerator design principles to implement SNN and STDP with low overhead.

▶ [Lecture 13 - Hardware Acceleration Implemention](https://www.youtube.com/watch?v=XdhUZRXA7fg) — Deep Learning Systems Course · 50:09

### Pathfinder authors talk *(the paper's own talk)*
The authors' own presentation at ASPLOS 2024 provides the most direct and detailed exposition of Pathfinder's design, algorithms, hardware implementation, and evaluation. This talk is indispensable for advanced readers seeking comprehensive understanding from the creators themselves.

*How the paper uses it:* This talk is the official authors' presentation of the Pathfinder paper at ASPLOS 2024.

▶ [ASPLOS'24 - Session 8A - Caching and Prefetching](https://www.youtube.com/watch?v=sYoxF2tDrMs) — ACM SIGARCH · 1:14:55

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Pathfinder, start by learning the fundamentals of hardware data prefetching, which is the core problem Pathfinder addresses. Next, build intuition on spiking neural networks (SNNs), the neural model Pathfinder uses for real-time learning. Then, grasp spike timing dependent plasticity (STDP), the local learning rule enabling Pathfinder's online adaptation. Finally, watch the authors' talk for a direct explanation of Pathfinder's design and results.

### Hardware data prefetching *(prerequisite)*
Hardware data prefetching is a technique where the processor predicts future memory accesses and loads data into cache ahead of time to reduce latency. Understanding this helps grasp why and how Pathfinder improves processor performance by predicting memory access patterns.

*How the paper uses it:* Pathfinder aims to improve hardware data prefetching accuracy and efficiency in modern processors.

▶ [Hardware prefetching | Video 28](https://www.youtube.com/watch?v=pWiPlEA4H9s) — Nanditha Rao · 17:45

### Spiking neural networks *(prerequisite)*
Spiking neural networks (SNNs) are brain-inspired neural models that communicate via discrete spikes over time, enabling efficient and event-driven computation. Learning about SNNs provides intuition on how Pathfinder models memory access patterns in a biologically plausible and hardware-friendly way.

*How the paper uses it:* Pathfinder uses a 3-layer SNN to encode and predict memory access patterns in real-time.

▶ [Spiking Neural Networks Explained | The Future of AI That Thinks Like the Brain](https://www.youtube.com/watch?v=ug92eUh_pYo) — Innatera · 9 months ago

### Spike timing dependent plasticity *(prerequisite)*
Spike timing dependent plasticity (STDP) is a local learning rule where the timing difference between pre- and post-synaptic spikes strengthens or weakens synapses. This mechanism allows SNNs to learn patterns online without expensive training, which is key to Pathfinder's continuous adaptation.

*How the paper uses it:* Pathfinder employs STDP to update synaptic weights during inference for real-time learning.

▶ [Introduction to Spike Timing Dependent Plasticity (STDP) - A ...](https://www.youtube.com/watch?v=jgLolgRSZe4) — Yannael Bossard · 13:06

### Pathfinder authors talk *(the paper's own talk)*
This session features the authors presenting Pathfinder, explaining its motivation, architecture, and evaluation results. It offers direct insights into the design choices and practical implications of the paper's contributions.

*How the paper uses it:* The talk provides an overview and detailed explanation of Pathfinder from the original researchers.

▶ [ASPLOS'24 - Session 8A - Caching and Prefetching](https://www.youtube.com/watch?v=sYoxF2tDrMs) — ACM SIGARCH · 1:14:55

## Already in your library

- [Lecture 35: Hardware Prefetching](https://www.youtube.com/watch?v=cPpMrxUUSbk) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Lecture 11 - Hardware Acceleration](https://www.youtube.com/watch?v=es6s6T1bTtI) — also for: Rendering PostScript™ Fonts on FPGAs (David Andrews)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of Pathfinder's core ideas and contributions. The beginner project recreates the paper's input encoding method to visualize memory access patterns as pixel matrices, grounding you in the data representation technique. The intermediate project implements a simplified spiking neural network with STDP learning to predict memory access deltas, comparing against a simple baseline prefetcher to validate the core learning mechanism. The advanced project extends Pathfinder by addressing its limitation in predicting first accesses to cold pages, implementing an enhanced input encoding and learning approach to handle cold page accesses, thus exploring a key future direction.

### Beginner — Memory Access Pixel Matrix Visualization
*Effort: a weekend, ~8 hours*

You build a tool that takes a sequence of memory address deltas and encodes them as pixel matrices, replicating the paper's novel input encoding technique. This visualization will help understand how memory access patterns are framed as image classification tasks for the spiking neural network.

**Why it shows you understood the paper:** This project shows you grasp the key data representation innovation of Pathfinder, which is foundational to its SNN-based learning approach.

**Grounded in:** Pathfinder encodes memory access patterns as pixel matrices for SNN input.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated memory address delta sequences generated to mimic typical page-level memory access patterns, since no public dataset is provided.

**Build it:**

1. Generate or simulate sequences of memory address deltas within a page.
2. Implement the encoding scheme to convert these sequences into pixel matrices as described in the paper.
3. Visualize the resulting pixel matrices using Matplotlib to confirm the encoding captures pattern structure.
4. Document the encoding process and example visualizations in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook demonstrating the encoding of memory access deltas into pixel matrices with visualizations and explanations.

**Stretch goal:** Add interactive visualization to explore how different delta sequences affect the pixel matrix representation.

### Intermediate — Simplified SNN with STDP for Memory Prefetching
*Effort: 2 weekends, ~20 hours*

You implement a simplified 3-layer spiking neural network with spike timing dependent plasticity (STDP) to learn and predict next memory address deltas within a page. You compare its prediction accuracy and simple prefetching IPC metric against a baseline rule-based prefetcher such as Best Offset.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement Pathfinder's core learning mechanism and evaluate its effectiveness, showing comprehension of SNN/STDP online learning for prefetching.

**Grounded in:** Introduction of Pathfinder, a hardware-implementable neural prefetcher using SNN and STDP for real-time learning and inference.

**Tech stack:** Python 3.11, Brian2 (SNN simulation library), NumPy, Matplotlib

**Data:** Use simulated memory access traces with delta patterns within pages, or adapt traces from the Pathfinder GitHub repository's dataset download script if feasible.

**Build it:**

1. Set up a spiking neural network simulation environment using Brian2.
2. Implement a 3-layer SNN architecture with STDP learning rules as described in the paper.
3. Encode memory access delta sequences as input spike trains using the pixel matrix approach.
4. Train the SNN online on the input sequences and predict next deltas.
5. Implement a simple baseline prefetcher (e.g., Best Offset) for comparison.
6. Evaluate and plot prediction accuracy and IPC improvement metrics.

**Verified links from the paper:**

- <https://github.com/linjiaty/Pathfinder.git> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python project with scripts and notebooks showing SNN implementation, training, prediction, baseline comparison, and evaluation plots.

**Stretch goal:** Incorporate confidence-based neuron labeling and selective prefetching to improve prediction precision.

### Advanced — Extending Pathfinder to Predict Cold Page Accesses
*Effort: 3+ weeks*

You develop an extension to the Pathfinder method to handle prediction of first accesses to cold pages, a stated limitation in the paper. This involves designing new input encoding strategies and adapting the SNN/STDP learning to incorporate cold page features, then evaluating the impact on prediction coverage and IPC.

**Why it shows you understood the paper:** This project tackles a key open problem from the paper, demonstrating deep comprehension of Pathfinder's architecture and the challenges in extending it, potentially contributing novel insights.

**Grounded in:** Pathfinder currently does not predict first accesses to cold pages effectively.

**Tech stack:** Python 3.11, Brian2, NumPy, Matplotlib, Git

**Data:** Use or simulate memory traces including cold page accesses; if possible, adapt data from the Pathfinder GitHub or generate synthetic traces with cold page events.

**Build it:**

1. Review Pathfinder's input encoding and SNN design to identify why cold page accesses are not predicted.
2. Design and implement an enhanced input encoding that captures cold page features or history.
3. Modify the SNN/STDP learning mechanism to incorporate the new encoding and enable learning of cold page patterns.
4. Train and evaluate the extended model on memory traces including cold page accesses.
5. Compare prediction coverage and IPC metrics against the original Pathfinder approach.
6. Document findings, limitations, and possible further improvements.

**Verified links from the paper:**

- <https://github.com/linjiaty/Pathfinder.git> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive codebase and report demonstrating the extended Pathfinder model with cold page prediction capability and evaluation results.

**Stretch goal:** Explore hybrid neuron models or ensemble strategies combining cold page predictors with Pathfinder for improved robustness.
