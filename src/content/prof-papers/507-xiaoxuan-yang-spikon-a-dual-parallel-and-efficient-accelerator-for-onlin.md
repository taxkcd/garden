---
title: "507 · SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning — Xiaoxuan Yang"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xiaoxuan-yang"
source_hash: "975a002b5152fc34398cc5cec7d86501f3fcf21686519829491fc263eb3626f5"
sequence: 507
generator: "outreach-garden: managed"
---

# 507 · SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning

## At a glance

- **Professor:** Xiaoxuan Yang
- **Institution:** University of Virginia
- **Paper:** [SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning](https://arxiv.org/pdf/2606.30926)
- **Authors:** Peilin Chen, Xiaoxuan Yang
- **Year:** 2026

## Paper overview

This paper presents SpikON, a novel algorithm-hardware co-design framework that enables efficient and scalable online supervised learning for spiking neural networks (SNNs). SpikON introduces new algorithmic techniques and a dedicated accelerator architecture to reduce training latency and energy consumption while maintaining or improving accuracy. It achieves significant speedup and energy efficiency compared to existing GPU and TPU-like accelerators.

### Why it matters

**Research problem:** Existing online supervised learning algorithms for spiking neural networks suffer from low training accuracy, poor scalability, high latency, and energy inefficiency, especially on edge devices. Additionally, current normalization methods like batch normalization are ineffective for online SNN learning with batch size one, and existing hardware lacks efficient support for scalable online SNN training.

**Why it matters:** SNNs are promising for energy-efficient brain-inspired computing and low-power edge applications. Efficient and scalable online supervised learning for SNNs is critical to unlock their potential for real-time AI workloads, but current methods and hardware are inadequate, limiting practical deployment.

**Key contributions:**

- First algorithm-hardware co-design framework enabling efficient and scalable end-to-end online supervised SNN learning.
- Learnable threshold through time (LTTT) and scaled weight centralization through time (sWCTT) algorithms tailored for online SNN normalization.
- Bi-directional temporal parallel (BTP) training dataflow allowing concurrent forward and backward computation across timesteps.
- Cascade temporal computation reuse (CTCR) scheme exploiting spike activation similarity to reduce redundant operations.
- Dedicated SNN accelerator architecture with dual-parallel learning engine and SIMD-based core supporting proposed algorithms.

## About the professor

**Xiaoxuan Yang** — Assistant Professor, Charles L. Brown Department of Electrical and Computer Engineering, University of Virginia.

Research interests: in-memory computing, neuromorphic computing, energy-efficient design, hardware-software co-design

### Research links

- [Faculty/profile page](https://xiaoxuan-yang.github.io)
- [Professor website](https://xiaoxuan-yang.github.io/index.html)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=_JIESQ8AAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Spiking Neural Networks
**The paper assumes:** spiking neural network models, temporal coding in neural networks, neuron dynamics, spike-based learning algorithms
**Already in this field?** Skip this entirely if you already understand the fundamentals of spiking neural networks and their temporal dynamics.

To understand the SpikON paper's contributions on online supervised learning and hardware acceleration for spiking neural networks (SNNs), a solid grasp of SNN fundamentals is essential. The rigorous course option offers a deep, university-level introduction to neural computation including spiking neuron models and temporal dynamics, while the fast track provides a concise, focused tutorial series specifically on FPGA-based SNN accelerators and frameworks, ideal for quickly grasping practical SNN acceleration concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 9.40 Introduction to Neural Computation, Spring 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP61I4aI5T6OaFfRK2gihjiMm) — MIT OpenCourseWare · 20 videos · 24.6h across 20 episodes

**Watch only this:** Episodes 1 through 8 (Course Overview, Ionic Currents, Resistor Capacitor Neuron Model, Hodgkin-Huxley Model parts 1 and 2, Dendrites, Synapses, Spike Trains), about 9.7 hours — this subset covers the core biophysical and computational principles of spiking neurons and temporal spike dynamics relevant to the paper.

*Why it unblocks this paper:* MIT's 'Introduction to Neural Computation' covers foundational neuron models, spike trains, synapses, and temporal coding, which are critical to understanding the algorithmic and hardware innovations in SpikON.

*If you want all of it:* All 20 episodes, about 24.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Spiker+ - Spiking Neural Networks at the Edge](https://www.youtube.com/playlist?list=PLkIAXI4vJ8EgfZki2WRh2Da_h-w6gKbsd) — SMILIES Group Politecnico di Torino · 8 videos · 1.0h across 8 episodes

**Watch only this:** Episodes 1 through 3 (Introduction, Netbuilder, VHDL Generator), about 21 minutes — these cover the basics of SNN acceleration frameworks and hardware generation relevant to understanding SpikON's accelerator design.

*Why it unblocks this paper:* The 'Spiker+ - Spiking Neural Networks at the Edge' series provides a concise, practical introduction to FPGA-based SNN accelerators, directly relating to SpikON's hardware co-design and acceleration techniques, making it a focused quick study.

*If you want all of it:* All 8 episodes, about 1.0 hour.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SpikON paper, start with foundational knowledge on spiking neural networks and neuromorphic hardware accelerators, which provide the biological and hardware context for the work. Next, study normalization techniques and parallel training dataflows to grasp the algorithmic innovations and training efficiency improvements. Finally, focus on the core concept of online supervised learning for spiking neural networks, including the authors' own talk if available, to directly connect with the paper's contributions and design choices.

### Spiking neural networks fundamentals *(prerequisite)*
This section covers the biological inspiration, computational models, and basic principles of spiking neural networks (SNNs). Understanding these fundamentals is essential to appreciate the challenges and opportunities in training and accelerating SNNs, which SpikON addresses.

*How the paper uses it:* SpikON builds on the SNN model and its temporal dynamics to enable efficient online learning.

▶ [IEE/CSE 598: Lecture 7G (2020-04-15) - Intro. to Spiking Neural Networks and Neuromorphic Computing](https://www.youtube.com/watch?v=ICw2_49dSNw) — Ted Pavlic · 1:14:51 · 6 years ago

### Neuromorphic hardware accelerators *(prerequisite)*
Neuromorphic hardware accelerators implement brain-inspired computing architectures that support SNNs efficiently. This section provides insights into hardware design challenges and solutions relevant to SpikON's dedicated accelerator.

*How the paper uses it:* SpikON proposes a dedicated accelerator architecture optimized for online SNN training.

▶ [Stanford Seminar: Neuromorphic Chips: Addressing the Nanostransistor Challenge](https://www.youtube.com/watch?v=vHlbC74RJGU) — Stanford Online · 1:19:54 · 9 years ago

### Normalization techniques in neural networks *(prerequisite)*
Normalization is critical for stable and efficient neural network training. This section explains traditional normalization methods and their limitations, setting the stage for understanding SpikON's novel LTTT and sWCTT techniques tailored for online SNN learning.

*How the paper uses it:* SpikON introduces learnable threshold through time (LTTT) and scaled weight centralization through time (sWCTT) as hardware-friendly normalization methods.

▶ [Lecture 6 | Training Neural Networks I](https://www.youtube.com/watch?v=wEoyxE0GP2M) — Stanford University School of Engineering · 1:20:20 · 9 years ago

### Parallel training dataflows in neural networks *(prerequisite)*
Parallel training dataflows enable concurrent computation to reduce latency and improve throughput. Understanding these concepts is key to grasping SpikON's bi-directional temporal parallel (BTP) training dataflow.

*How the paper uses it:* SpikON employs a bi-directional temporal parallel dataflow to enable concurrent forward and backward computations.

▶ [Procrustes: A Dataflow and Accelerator for Sparse Deep Neural Network Training](https://www.youtube.com/watch?v=vYslaFsVb_U) — MICRO Symposium · 18:09 · 5y ago

### Spiking neural networks online learning
This section focuses on the methods and challenges of training SNNs in an online, supervised manner, which is the core problem SpikON addresses. It provides context for the algorithmic innovations and efficiency improvements in the paper.

*How the paper uses it:* SpikON presents a novel algorithm-hardware co-design framework for efficient online supervised learning of SNNs.

▶ [Training Spiking Neural Networks Using Lessons From Deep Learning](https://www.youtube.com/watch?v=zldal7b7sJ4) — iCAS Lab · 51:09 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SpikON paper, start by building a foundation in spiking neural networks (SNNs) and their unique spike-based computation. Next, learn about normalization techniques in neural networks to grasp the challenges and innovations like LTTT and sWCTT introduced in the paper. Then, explore parallel training dataflows to appreciate the bi-directional temporal parallel training dataflow used. Finally, study spiking neural networks online learning methods, which are central to SpikON's efficient online supervised learning approach.

### Spiking neural networks fundamentals *(prerequisite)*
Spiking neural networks mimic the brain's way of processing information through discrete spikes rather than continuous signals. Understanding how neurons spike and communicate over time is essential to grasp how SNNs operate differently from traditional neural networks.

*How the paper uses it:* SpikON accelerates and improves training of spiking neural networks by leveraging their temporal spike-based nature.

▶ [What are Spiking Neural Networks? A Visual Explainer](https://www.youtube.com/watch?v=oB6MRX86MTE) — RaOHan · 5:44 · 5 months ago

### Normalization techniques in neural networks *(prerequisite)*
Normalization helps stabilize and speed up neural network training by adjusting activations or weights. Traditional methods like batch normalization struggle with online learning and small batch sizes, motivating new approaches like LTTT and sWCTT in SpikON.

*How the paper uses it:* SpikON introduces learnable threshold through time (LTTT) and scaled weight centralization through time (sWCTT) as hardware-friendly normalization methods tailored for online SNN learning.

▶ [Lecture 6 | Training Neural Networks I](https://www.youtube.com/watch?v=wEoyxE0GP2M) — Stanford University School of Engineering · 1:20:20 · 9 years ago

### Parallel training dataflows in neural networks *(prerequisite)*
Parallel training dataflows enable simultaneous computation of forward and backward passes, reducing training latency. Understanding dataflow architectures helps appreciate how SpikON's bi-directional temporal parallel (BTP) dataflow achieves concurrent forward-backward computation across timesteps.

*How the paper uses it:* SpikON's BTP training dataflow is a key innovation that reduces training latency by enabling concurrent forward and backward computations.

▶ [Procrustes: A Dataflow and Accelerator for Sparse Deep Neural Network Training](https://www.youtube.com/watch?v=vYslaFsVb_U) — MICRO Symposium · 18:09 · 5y ago

### Spiking neural networks online learning
Online learning in SNNs allows models to learn from data streams in real time, which is challenging due to spike-based dynamics and hardware constraints. This concept covers methods enabling efficient and scalable supervised learning directly on SNNs without batch processing.

*How the paper uses it:* SpikON presents a co-design framework for efficient and scalable online supervised learning of SNNs, addressing limitations of prior methods.

▶ [Training Spiking Neural Networks Using Lessons From Deep Learning](https://www.youtube.com/watch?v=zldal7b7sJ4) — iCAS Lab · 51:09 · 4 years ago

## Already in your library

- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Batch Normalization (“batch norm”) explained](https://www.youtube.com/watch?v=dXB-KQYkzNU) — also for: Mitigating the ID–OOD Tradeoff in Open-Set Test-Time Adaptation (Yunhui Guo)
- [Stanford Seminar - Multiscale Dataflow Computing: Competitive Advantage at the Exascale Frontier](https://www.youtube.com/watch?v=Nwdu7QlFUnA) — also for: TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph (Hao Zheng)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the SpikON paper. The beginner project lets you implement and visualize the core learnable threshold through time (LTTT) normalization on a simple spiking neuron model. The intermediate project involves reimplementing the combined LTTT and scaled weight centralization through time (sWCTT) normalization algorithms and comparing their training performance on a small public SNN dataset, showing practical benefits. The advanced project extends the SpikON framework by exploring improved parallelism strategies to scale training throughput on larger input feature maps, addressing a key limitation noted by the authors.

### Beginner — Implement Learnable Threshold Through Time (LTTT) on a Simple Spiking Neuron
*Effort: a weekend, ~8 hours*

You build a Python simulation of a single spiking neuron with the learnable threshold through time (LTTT) normalization method as described in the paper. You visualize how the threshold evolves during online learning on a synthetic spike train input and measure the effect on spike generation.

**Why it shows you understood the paper:** This project demonstrates your grasp of the LTTT algorithm, a key normalization innovation in SpikON, and how it replaces traditional batch normalization for online SNN learning.

**Grounded in:** Learnable threshold through time (LTTT) algorithm tailored for online SNN normalization.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic spike train data generated programmatically to simulate input spikes over time.

**Build it:**

1. Implement a basic spiking neuron model with membrane potential and spike generation.
2. Add the learnable threshold through time (LTTT) mechanism to adjust the firing threshold dynamically during training.
3. Generate synthetic spike train input data to feed the neuron.
4. Simulate online learning over multiple timesteps, updating the threshold.
5. Visualize threshold evolution and spike output over time using plots.
6. Document the implementation and results in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook showing the LTTT implementation, plots of threshold adaptation, and spike outputs with explanations.

**Stretch goal:** Add a comparison plot showing fixed threshold vs. LTTT to highlight benefits.

### Intermediate — Reimplement LTTT and sWCTT Normalization for Online SNN Training on a Public Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the combined learnable threshold through time (LTTT) and scaled weight centralization through time (sWCTT) normalization methods for online supervised learning of spiking neural networks. You train a small SNN on a publicly available neuromorphic dataset (e.g., N-MNIST as a substitute for DVS128-Gesture) and compare training accuracy and latency against a baseline without these normalizations.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the core algorithmic contributions of SpikON and evaluate their impact on training performance, reflecting comprehension of the paper's key results.

**Grounded in:** Learnable threshold through time (LTTT) and scaled weight centralization through time (sWCTT) algorithms tailored for online SNN normalization; SpikON algorithm achieves 32.2% reduction in training latency and 35.0% reduction in energy consumption without sacrificing accuracy.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** N-MNIST dataset (public neuromorphic dataset) used as a substitute for DVS128-Gesture dataset mentioned in the paper.

**Build it:**

1. Implement the LTTT and sWCTT normalization algorithms within a PyTorch-based SNN training loop.
2. Load and preprocess the N-MNIST dataset for online supervised learning with batch size one.
3. Train the SNN model with and without the combined normalization methods.
4. Measure and compare training accuracy, latency, and energy proxy metrics (e.g., FLOPs or runtime).
5. Visualize training curves and report quantitative comparisons.
6. Write a detailed README explaining the implementation, experiments, and results.

**Ships as:** A GitHub repo with PyTorch code implementing LTTT+sWCTT, training scripts on N-MNIST, and a report comparing baseline vs. proposed normalization performance.

**Stretch goal:** Add ablation experiments isolating LTTT and sWCTT effects separately to replicate the paper's accuracy trade-offs.

### Advanced — Extend SpikON Framework to Optimize Parallelism for Large Input Feature Maps
*Effort: 3+ weeks*

You develop an extension of the SpikON training framework focusing on improving accelerator parallelism to handle large input feature maps efficiently, addressing the paper's stated limitation. You simulate or prototype enhanced parallel dataflows or lane parallelism strategies and evaluate throughput improvements on a larger neuromorphic dataset (e.g., DVS128-Gesture or a similar public dataset).

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of SpikON's hardware-software co-design and the challenges of scaling SNN training throughput.

**Grounded in:** Throughput on large input feature maps (e.g., DVS128-Gesture dataset) is limited by lane parallelism in the accelerator; Further optimization of accelerator parallelism to handle larger input feature maps efficiently.

**Tech stack:** Python 3.11, PyTorch, NumPy, SimPy or custom simulator, Matplotlib, Jupyter Notebook

**Data:** DVS128-Gesture dataset or a similar publicly available neuromorphic dataset to simulate large input feature map training.

**Build it:**

1. Study the SpikON accelerator architecture and lane parallelism constraints as described in the paper.
2. Design and implement a simulation or prototype of enhanced parallelism strategies (e.g., increased lane parallelism, pipeline optimizations) in software.
3. Integrate the improved parallelism scheme into the SNN training loop with LTTT+sWCTT normalization.
4. Train on the DVS128-Gesture dataset or substitute, measuring throughput and energy proxy metrics.
5. Compare results against baseline SpikON parallelism simulation to quantify improvements.
6. Document design decisions, implementation details, and evaluation results in a comprehensive report.

**Ships as:** A GitHub repository containing the extended SpikON parallelism simulation/prototype code, training scripts, and a detailed evaluation report addressing the scalability limitation.

**Stretch goal:** Explore integration of emerging memory technologies for in-memory computing to further boost energy efficiency as suggested by the paper.
