---
title: "987 · Slax: a composable JAX library for rapid and flexible prototyping of spiking neural networks — Siddharth Joshi"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-siddharth-joshi"
source_hash: "c54d1695621cb31628fbf9743651c1013fc428e6138e0fe35f7ac6185cd8b489"
sequence: 987
generator: "outreach-garden: managed"
---

# 987 · Slax: a composable JAX library for rapid and flexible prototyping of spiking neural networks

## At a glance

- **Professor:** Siddharth Joshi
- **Institution:** University of Notre Dame
- **Paper:** [Slax: a composable JAX library for rapid and flexible prototyping of spiking neural networks](https://doi.org/10.1088/2634-4386/ada9a8)
- **Authors:** Thomas M Summe, Siddharth Joshi
- **Year:** 2025

## Paper overview

This paper introduces Slax, a new software library built on JAX designed to help researchers quickly develop and test spiking neural networks (SNNs). Slax supports multiple training algorithms, including both common and alternative methods, and offers tools for visualization and performance evaluation. It aims to make SNN research more accessible and efficient by combining flexibility with high performance.

### Why it matters

**Research problem:** Training spiking neural networks is challenging due to their complex temporal dynamics and the inefficiency of standard training methods like backpropagation through time (BPTT) for long sequences. Existing SNN frameworks often focus on a limited set of training algorithms, hindering exploration and comparison of alternative methods.

**Why it matters:** SNNs promise significant energy efficiency and brain-like computation advantages, which are important for advancing machine intelligence. Improving training methods and tools for SNNs can accelerate research and development in neuromorphic computing, potentially leading to more efficient AI systems.

**Key contributions:**

- Development of Slax, a JAX-based SNN library supporting diverse training algorithms beyond BPTT.
- Integration with the broader JAX and Flax ecosystem for composability and hardware acceleration.
- Provision of tools for visualization, debugging, and evaluation of SNN training algorithms.
- Demonstration of competitive or superior performance compared to existing SNN packages across hardware platforms.
- Support for forward-mode differentiation enabling advanced optimization techniques.

## About the professor

**Siddharth Joshi** — Associate Professor, Computer Science and Engineering, University of Notre Dame.

Research interests: adaptive sensing and communication for extremely power-constrained applications, intelligent and adaptive communication systems to maximize circuit efficiency, adaptive beamforming, energy-efficient circuits and algorithms for array statistical signal processing using high-resolution analog computing, UWB communication systems for distributed systems

### Research links

- [Faculty/profile page](https://engineering.nd.edu/faculty/siddharth-joshi)
- [Professor website](https://siddharth-joshi.com/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=PegsFZ8AAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Spiking Neural Networks
**The paper assumes:** spiking neural networks, neuron models, temporal dynamics in neural computation, surrogate gradient methods, and training algorithms for recurrent neural networks
**Already in this field?** Skip this entirely if you already understand the fundamentals of spiking neural networks and their training methods.

To understand the Slax library for spiking neural networks (SNNs), it is essential to grasp the fundamentals of SNNs, including their temporal dynamics, neuron models, and training challenges. The rigorous course option offers a deep dive into neuromorphic computing and memory technologies relevant to SNNs, while the fast track provides a concise, accessible introduction to spiking neural networks for quicker comprehension. Choose the course for comprehensive foundational knowledge and the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [EE 698P: Memory Technology and Neuromorphic Computing](https://www.youtube.com/playlist?list=PLP-rjhz_nIi7vrSb2YyZaLvEMiLC7l26N) — SSCD IIT Kanpur · 32 videos

**Watch only this:** Lectures 1-10, about 5 hours — covering introduction to neuromorphic computing, spiking neuron models, and training algorithms including backpropagation through time and alternatives.

*Why it unblocks this paper:* This IIT Kanpur course on Memory Technology and Neuromorphic Computing covers foundational concepts in neuromorphic systems and spiking neural networks, directly relevant to understanding the Slax library's context and challenges in SNN training and hardware.

*If you want all of it:* All 32 lectures, approximately 16 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Spiking Neural Network](https://www.youtube.com/playlist?list=PLpyvXlwVdE8xjmV06F2wOyZ7X405p_JGA) — Wajd Ali · 15 videos

**Watch only this:** Episodes 1-5, about 1 hour — covering basic SNN concepts, neuron models, and an overview of training challenges.

*Why it unblocks this paper:* This playlist by Wajd Ali offers a clear and concise introduction to spiking neural networks, focusing on core concepts and neuron dynamics, which provides a quick yet solid foundation to understand the Slax paper's key ideas.

*If you want all of it:* All 15 episodes, approximately 3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Slax library for spiking neural networks (SNNs), start by building foundational knowledge on the dynamics of spiking neural networks and the principles of JAX's functional programming and just-in-time compilation, which Slax leverages for performance and flexibility. Next, gain context on neuromorphic computing and hardware acceleration to appreciate the broader impact and deployment challenges of SNNs. Finally, focus on the core concepts of Slax itself, including its design, training algorithms, and integration with JAX, by watching the authors' own talks and related advanced presentations.

### Spiking neural networks dynamics *(prerequisite)*
Understanding the complex temporal dynamics of spiking neural networks is essential for appreciating how Slax models and trains these networks. This section covers advanced seminar talks and university lectures that delve into neural spiking activity, temporal coding, and firing rate models, providing a rigorous foundation in SNN behavior.

*How the paper uses it:* Slax is designed to model and train SNNs with complex temporal dynamics, so grasping these dynamics is foundational.

▶ [Introduction to Spiking Neural Networks, Neuromorphic Computing and Computational Neuroscience](https://www.youtube.com/watch?v=F633rfo7JC0) — Marko Velic · 1:10:32 · 12d ago

### JAX functional programming and JIT compilation *(prerequisite)*
Slax builds on JAX's functional programming interface and just-in-time compilation to achieve high performance and flexibility. This section includes advanced university lectures and research talks explaining JAX's design, composable transformations, and compilation strategies, which are critical for understanding Slax's software architecture.

*How the paper uses it:* Slax leverages JAX's functional interface and JIT compilation for rapid prototyping and hardware acceleration.

▶ [ETH Zürich AISE: Introduction to JAX](https://www.youtube.com/watch?v=0JsPcm_Vl1g) — CAMLab, ETH Zürich · 1:05:24 · 2y ago

### Neuromorphic computing and hardware acceleration *(prerequisite)*
Contextualizing Slax within the broader field of neuromorphic computing highlights its relevance to energy-efficient AI systems and hardware deployment challenges. This section features recent academic talks on neuromorphic hardware architectures and energy-efficient deployment strategies, providing insight into the hardware context Slax aims to support.

*How the paper uses it:* Slax aims to accelerate SNN research that is foundational for neuromorphic computing and energy-efficient AI.

▶ [2022 IGSC - Energy-Efficient Deployment of Machine Learning Workloads on Neuromorphic Hardware](https://www.youtube.com/watch?v=dogBJGqkzQc) — iCAS Lab · 26:33 · 4y ago

### Slax spiking neural network library talk
This section focuses on the core contribution of the paper: the Slax library itself. It includes the authors' own talks and advanced presentations about Slax's design, training algorithms, and integration with JAX, providing direct insight into the library's capabilities and innovations.

*How the paper uses it:* Direct insight from the authors on the Slax library and its design is crucial for understanding the paper's contributions.

▶ [What is JAX?](https://www.youtube.com/watch?v=juy9nrcTBck) — Google for Developers · 16:30 · 1y ago

### Training algorithms for spiking neural networks
Slax supports multiple training algorithms for SNNs, including BPTT, RTRL, and online learning methods. This section includes advanced university lectures and research talks that explain these diverse training approaches, enabling a deeper understanding of Slax's flexibility and algorithmic support.

*How the paper uses it:* Understanding diverse SNN training methods is central to Slax's contributions and design.

▶ [ESWEEK 2021 Education - Spiking Neural Networks](https://www.youtube.com/watch?v=7TybETlCslM) — Embedded Systems Week (ESWEEK) · 1:58:53 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Slax library for spiking neural networks (SNNs), start by building intuition about the dynamics of spiking neurons and how they differ from traditional neural networks. Next, learn about JAX's functional programming and just-in-time compilation features, which Slax leverages for performance and flexibility. Then, explore the diverse training algorithms for SNNs that Slax supports. Finally, dive into the Slax library itself to see how these concepts come together for rapid prototyping and evaluation of SNNs.

### Spiking neural networks dynamics *(prerequisite)*
Spiking neural networks communicate via discrete spikes over time, mimicking biological neurons' temporal dynamics. Understanding these dynamics is key to grasping why SNNs require specialized training and modeling approaches.

*How the paper uses it:* Slax models complex temporal behavior of SNNs, so understanding spiking dynamics is foundational.

▶ [A Beginner-Friendly Introduction to Spiking Neural Networks](https://www.youtube.com/watch?v=1emzZdfMzy0) — Qianming Huang · 31:06 · 11mo ago

### JAX functional programming and JIT compilation *(prerequisite)*
JAX is a Python library that enables high-performance numerical computing by combining NumPy-like syntax with composable function transformations and just-in-time (JIT) compilation. Learning JAX's functional style and JIT features helps understand how Slax achieves flexibility and speed.

*How the paper uses it:* Slax is built on JAX, leveraging its functional interface and JIT compilation for efficient SNN prototyping.

▶ [What is JAX?](https://www.youtube.com/watch?v=juy9nrcTBck) — Google for Developers · 16:30 · 1y ago

### Training algorithms for spiking neural networks
Training SNNs is challenging due to their temporal nature, requiring algorithms like backpropagation through time (BPTT), real-time recurrent learning (RTRL), and online learning methods. Understanding these methods clarifies Slax's support for diverse training approaches.

*How the paper uses it:* Slax supports multiple SNN training algorithms, enabling rapid experimentation and comparison.

▶ [Introduction to Spiking Neural Networks, Neuromorphic Computing and Computational Neuroscience](https://www.youtube.com/watch?v=F633rfo7JC0) — Marko Velic · 1:10:32 · 12d ago

## Already in your library

- [Training Spiking Neural Networks Using Lessons From Deep Learning](https://www.youtube.com/watch?v=zldal7b7sJ4) — also for: SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning (Xiaoxuan Yang)
- [What are Spiking Neural Networks? A Visual Explainer](https://www.youtube.com/watch?v=oB6MRX86MTE) — also for: SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning (Xiaoxuan Yang)
- [What is actually Spiking Neural Network (SNN)?](https://www.youtube.com/watch?v=MJsomZjzFGk) — also for: Spike-Train Level Backpropagation for Training Deep Recurrent Spiking Neural Networks (Peng Li)
- [Sanja Karilanova: Bridging Spiking Neural Networks and Deep State Space Models](https://www.youtube.com/watch?v=7D6-hBS3cug) — also for: Spike-Train Level Backpropagation for Training Deep Recurrent Spiking Neural Networks (Peng Li)
- [Functional Programming & Haskell - Computerphile](https://www.youtube.com/watch?v=LnX3B9oaKzw) — also for: SHEPHERD: Enabling Programmable Meta-Agents via Reversible Agentic Execution Traces (Weiyan Shi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the Slax library and its contributions to spiking neural networks (SNNs). The beginner project introduces you to Slax's visualization tools by reproducing a key training loss landscape visualization. The intermediate project has you implement and compare multiple training algorithms for SNNs using Slax, demonstrating its flexible training support. The advanced project tackles a stated limitation by adding sparse computation support to Slax, improving efficiency on long sequences, thus extending the library's capabilities.

### Beginner — Visualize SNN Training Loss Landscapes with Slax
*Effort: a weekend, ~8 hours*

You build a small JAX-based script using the Slax library to train a simple spiking neural network on a synthetic dataset and generate visualizations of the training loss landscape and gradient similarities. This reproduces one of the paper's visualization tools to understand differences between training algorithms.

**Why it shows you understood the paper:** By completing this project, you demonstrate comprehension of Slax's visualization utilities and how they reveal training dynamics in SNNs, a key contribution of the paper.

**Grounded in:** Visualization tools in Slax reveal differences in training loss landscapes, aiding algorithm comparison.

**Tech stack:** Python 3.11, JAX, Slax (installed from PyPI), Matplotlib or Plotly for visualization

**Data:** Use the synthetic Randman dataset included with Slax for training and visualization.

**Build it:**

1. Install Slax and its dependencies via PyPI.
2. Load the Randman synthetic dataset provided by Slax.
3. Define a simple spiking neural network model using Slax's functional interface.
4. Train the model using one of the supported algorithms (e.g., BPTT).
5. Use Slax's visualization utilities to plot the training loss landscape and gradient similarity metrics.
6. Document the process and include example plots in the README.

**Verified links from the paper:**

- <https://github.com/Intelligent-Microsystems-Lab/slax> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train an SNN on Randman, generate loss landscape visualizations, and a README explaining the results and how they relate to the paper's visualization contributions.

**Stretch goal:** Add visualization comparisons for at least two different training algorithms (e.g., BPTT vs RTRL) to deepen insight into training dynamics.

### Intermediate — Compare SNN Training Algorithms with Slax on Randman
*Effort: 1-3 weekends, ~20 hours*

You implement training of a spiking neural network on the Randman synthetic dataset using Slax, experimenting with multiple training algorithms supported by the library such as BPTT and RTRL. You compare their training speed and accuracy, reproducing the paper's core benchmarking results.

**Why it shows you understood the paper:** This project shows you understand Slax's core contribution of supporting diverse training algorithms with minimal code changes and can evaluate their performance, reflecting the paper's key results.

**Grounded in:** Slax supports multiple training algorithms with minimal code changes, facilitating rapid prototyping; Slax achieves competitive or better training speed compared to other SNN libraries.

**Tech stack:** Python 3.11, JAX, Slax (from GitHub or PyPI), NumPy, Matplotlib or Seaborn for plotting

**Data:** Use the Randman synthetic dataset included with Slax for training and evaluation.

**Build it:**

1. Set up a Python environment with Slax and dependencies installed.
2. Load the Randman dataset from Slax.
3. Define a spiking neural network model using Slax's API.
4. Train the model using at least two different training algorithms (e.g., BPTT and RTRL).
5. Measure and record training speed (time per epoch) and accuracy metrics for each algorithm.
6. Plot and compare the results, highlighting differences in performance and training dynamics.
7. Write a README explaining the setup, results, and how they relate to the paper's benchmarking.

**Verified links from the paper:**

- <https://github.com/Intelligent-Microsystems-Lab/slax> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository demonstrating training of an SNN with multiple algorithms on Randman, with comparative performance metrics and plots, plus a clear README linking to the paper's claims.

**Stretch goal:** Add an additional training algorithm supported by Slax (e.g., online spatio-temporal learning) and analyze its performance.

### Advanced — Implement Sparse Computation Support in Slax for Long Sequences
*Effort: a few weeks, ~60+ hours*

You extend the Slax library by adding sparse computation support to reduce computational cost for long time sequences in spiking neural networks. This involves modifying the core Slax codebase to implement sparse updates and benchmarking the efficiency gains on synthetic datasets.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction in the paper, demonstrating deep understanding of Slax's architecture and the challenges of efficient SNN training on long sequences.

**Grounded in:** Sparse computation support to reduce costs for long time sequences is planned but not yet implemented.

**Tech stack:** Python 3.11, JAX, Slax (forked from GitHub), NumPy, pytest for testing

**Data:** Use the Randman synthetic dataset from Slax for benchmarking before and after sparse computation implementation.

**Build it:**

1. Fork and clone the Slax GitHub repository.
2. Study Slax's codebase focusing on the computation graph and training loop implementations.
3. Design and implement sparse computation mechanisms to skip inactive neurons/time steps during forward and backward passes.
4. Integrate the sparse computation feature with existing training algorithms in Slax.
5. Benchmark training speed and memory usage on Randman dataset with and without sparse computation.
6. Write tests to verify correctness and document the new feature in Slax's README or docs.

**Verified links from the paper:**

- <https://github.com/Intelligent-Microsystems-Lab/slax> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked Slax repository with a new sparse computation feature, benchmark results showing efficiency improvements, tests verifying correctness, and documentation explaining the implementation and its impact.

**Stretch goal:** Extend sparse computation support to additional training algorithms and evaluate impact on real neuromorphic hardware simulators if available.
