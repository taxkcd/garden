---
title: "846 · Spike-Train Level Backpropagation for Training Deep Recurrent Spiking Neural Networks — Peng Li"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peng-li"
source_hash: "a00d45111fe9f08aaa30bc9ee908cba271068275dc8c6cc3e7058d045315ed09"
sequence: 846
generator: "outreach-garden: managed"
---

# 846 · Spike-Train Level Backpropagation for Training Deep Recurrent Spiking Neural Networks

## At a glance

- **Professor:** Peng Li
- **Institution:** Univ. of California - Santa Barbara
- **Paper:** [Spike-Train Level Backpropagation for Training Deep Recurrent Spiking Neural Networks](https://arxiv.org/pdf/1908.06378)
- **Authors:** Wenrui Zhang, Peng Li
- **Year:** 2019

## Paper overview

This paper introduces a new algorithm called ST-RSBP for training deep recurrent spiking neural networks (RSNNs). RSNNs are a type of neural network that mimic brain activity more closely than traditional artificial neural networks by using discrete spike events. Training these networks is challenging due to their complex temporal dynamics and non-differentiable spike events. ST-RSBP efficiently computes gradients at the spike-train level without unfolding the network in time, enabling faster and more accurate training. The method outperforms existing spiking and non-spiking models on several speech and image recognition benchmarks.

### Why it matters

**Research problem:** Training deep recurrent spiking neural networks (RSNNs) is difficult because of the temporal unfolding required, vanishing/exploding gradients, and the non-differentiability of spike events. Existing backpropagation methods either approximate gradients poorly or are computationally expensive, limiting the practical use of RSNNs.

**Why it matters:** RSNNs have greater computational power and energy efficiency compared to traditional neural networks, making them promising for neuromorphic computing and brain-inspired AI. Effective supervised training methods are essential to unlock their potential for real-world applications like speech and image recognition.

**Key contributions:**

- Development of ST-RSBP, a novel spike-train level backpropagation algorithm for deep RSNNs.
- Efficient gradient computation without unfolding the network through time.
- Accurate handling of spike discontinuities without smoothing approximations.
- Application of ST-RSBP to deep hybrid feedforward/recurrent SNN architectures.
- Demonstration of state-of-the-art performance on multiple speech and image datasets.

## About the professor

**Peng Li** — Professor, Electrical and Computer Engineering, Univ. of California - Santa Barbara.

Research interests: Integrated Circuits and Systems, Learning Algorithms and Circuits for Brain-Inspired Computing, Electronic Design Automation, Computational Brain Modeling, Hardware Machine Learning Systems.

### Research links

- [Faculty/profile page](https://www.engineering.ucsb.edu/people/peng-li)
- [Professor website](https://web.ece.ucsb.edu/~lip/)
- [Resolved homepage](http://ece.ucsb.edu/%7Elip)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Spiking Neural Networks and Backpropagation
**The paper assumes:** spiking neuron models, spike train representation, backpropagation in spiking neural networks, recurrent neural networks, gradient computation for non-differentiable functions
**Already in this field?** Skip this entirely if you already understand the fundamentals of spiking neural networks and how backpropagation is adapted for them.

To understand the novel ST-RSBP algorithm for training deep recurrent spiking neural networks, it is essential to grasp the fundamentals of spiking neurons, spike trains, and backpropagation in neural networks. The rigorous course provides a deep, structured foundation in neural computation including spiking neuron models and recurrent networks, while the fast track offers a concise, intuition-driven introduction to neural networks and backpropagation, suitable for quickly building relevant intuition. Choose the rigorous course for comprehensive technical depth, or the fast track for a focused, time-efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 9.40 Introduction to Neural Computation, Spring 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP61I4aI5T6OaFfRK2gihjiMm) — MIT OpenCourseWare · 20 videos · 24.6h across 20 episodes

**Watch only this:** Episodes 3 (Resistor Capacitor Neuron Model), 4 (Hodgkin-Huxley Model Part 1), 5 (Hodgkin-Huxley Model Part 2), 7 (Synapses), 8 (Spike Trains), and 18 (Recurrent Networks), about 7.3 hours total — this subset covers spiking neuron models, spike trains, synaptic dynamics, and recurrent network fundamentals essential for the paper.

*Why it unblocks this paper:* MIT 9.40 Introduction to Neural Computation covers spiking neurons, spike trains, and recurrent networks in detail, directly supporting understanding of the ST-RSBP paper's core technical challenges and methods.

*If you want all of it:* All 20 episodes, about 24.6 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1 (But what is a neural network?), 2 (Gradient descent, how neural networks learn), 3 (Backpropagation, intuitively), and 4 (Backpropagation calculus), about 1.4 hours total — these cover the essential intuition and math behind backpropagation relevant to the paper.

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks playlist offers clear, visual explanations of neural networks and backpropagation, providing an accessible and focused introduction to the gradient-based learning concepts underlying ST-RSBP.

*If you want all of it:* All 10 episodes, about 3.6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Spike-Train Level Backpropagation for Training Deep Recurrent Spiking Neural Networks,' start by building a solid foundation on the fundamentals of spiking neural networks and the traditional backpropagation through time method used in recurrent networks. Then, explore the key technical challenge of gradient computation in spiking neurons, which the paper addresses innovatively. Finally, focus on the core concept of the paper itself by examining the authors' own presentation or the closest available advanced talk on spike-train level backpropagation in spiking neural networks.

### Spiking Neural Networks fundamentals *(prerequisite)*
Understanding the basic principles and computational models of spiking neural networks (SNNs) is essential as the paper builds on these to develop advanced training algorithms. This section covers the neural coding, dynamics, and motivation behind SNNs as brain-inspired models.

*How the paper uses it:* The paper's RSNN models are built upon the foundational concepts of spiking neural networks.

▶ [Sanja Karilanova: Bridging Spiking Neural Networks and Deep State Space Models](https://www.youtube.com/watch?v=7D6-hBS3cug) — RISE Research Institutes of Sweden · 8mo ago

### Backpropagation through time *(prerequisite)*
Backpropagation through time (BPTT) is the classical method for training recurrent neural networks by unfolding them in time. Understanding BPTT is crucial to appreciate the paper's contribution in avoiding costly temporal unfolding for RSNNs.

*How the paper uses it:* ST-RSBP improves upon traditional BPTT by enabling efficient gradient computation without time unfolding.

▶ [L15.4 Backpropagation Through Time Overview](https://www.youtube.com/watch?v=0XdPIqi0qpg) — Sebastian Raschka · 5y ago

### Gradient computation in spiking neurons *(prerequisite)*
Computing gradients in spiking neurons is challenging due to the non-differentiable spike events. This section explores surrogate gradient methods and other approaches to handle spike discontinuities, which is a key technical hurdle addressed by the paper.

*How the paper uses it:* ST-RSBP handles spike discontinuities without smoothing approximations, a major technical advance in gradient computation for SNNs.

▶ [Talk: Surrogate gradients as a link between connectivity and computational function in spiking neur…](https://www.youtube.com/watch?v=cgzg5vQ2lG4) — Neuromatch Conference · 5y ago

### Recurrent Spiking Neural Networks training
Training recurrent spiking neural networks (RSNNs) is central to the paper's contributions. This section covers advanced methods and challenges in RSNN training, providing context for the ST-RSBP algorithm.

*How the paper uses it:* The paper proposes ST-RSBP specifically to efficiently train deep recurrent SNN architectures.

▶ [Dynamic action inference with recurrent spiking neural networks \[ICANN 2021 Talk\]](https://www.youtube.com/watch?v=zkD09C85eFU) — Manuel Traub · 4y ago

### ST-RSBP paper talk
The core concept of the paper is the ST-RSBP algorithm for spike-train level backpropagation in deep RSNNs. The ideal resource is the authors' own talk or a detailed seminar presenting this exact work to gain direct insights into their methodology and results.

*How the paper uses it:* This is the authors' own presentation of the ST-RSBP algorithm, directly explaining the paper's main contributions and innovations.

▶ [Surrogate Gradients and Deep BPTT in Spiking Neural Networks](https://www.youtube.com/watch?v=MHEjNvWf0TI) — Simple C · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand the ST-RSBP algorithm for training deep recurrent spiking neural networks. We start with the basics of spiking neural networks to grasp the biological inspiration and discrete spike events. Then, we cover backpropagation through time to understand traditional recurrent network training challenges. Next, we explore gradient computation in spiking neurons, focusing on handling spike discontinuities. Finally, we conclude with the core paper talk that directly explains the ST-RSBP method and its innovations.

### Spiking Neural Networks fundamentals *(prerequisite)*
Spiking Neural Networks (SNNs) mimic how biological neurons communicate using discrete spikes rather than continuous signals. Understanding SNNs involves learning about spike generation, neuron models, and how information is encoded in spike trains. This foundation is essential to appreciate why training these networks is challenging and how ST-RSBP addresses those challenges.

*How the paper uses it:* The paper builds on SNNs as the network model, focusing on training deep recurrent versions efficiently.

▶ [What is actually Spiking Neural Network (SNN)?](https://www.youtube.com/watch?v=MJsomZjzFGk) — Simple C · 1mo ago

### Backpropagation through time *(prerequisite)*
Backpropagation Through Time (BPTT) is the standard method to train recurrent neural networks by unfolding them across time steps and applying backpropagation. It helps understand the temporal dependencies and gradient flow issues like vanishing or exploding gradients. Knowing BPTT clarifies why ST-RSBP’s approach to avoid time unfolding is a significant improvement.

*How the paper uses it:* ST-RSBP improves upon traditional BPTT by avoiding costly time unfolding in training recurrent spiking networks.

▶ [How Backpropagation works in RNN | Backpropagation Through Time](https://www.youtube.com/watch?v=OvCz1acvt-k) — CampusX · 3y ago

### Gradient computation in spiking neurons *(prerequisite)*
Computing gradients in spiking neurons is difficult due to the non-differentiable nature of spike events, which are discrete and discontinuous. This section explains surrogate gradients and other methods to approximate or handle these discontinuities during training. Understanding this challenge is key to appreciating ST-RSBP’s exact spike-train level gradient computation without smoothing.

*How the paper uses it:* ST-RSBP handles spike discontinuities accurately without smoothing approximations, enabling precise gradient computation.

▶ [Surrogate Gradients and Deep BPTT in Spiking Neural Networks](https://www.youtube.com/watch?v=MHEjNvWf0TI) — Simple C · 1mo ago

## Already in your library

- [Backpropagation, intuitively | Deep Learning Chapter 3](https://www.youtube.com/watch?v=Ilg3gGewQ5U) — also for: Neural Control Variates with Automatic Integration (Gordon Wetzstein)
- [Spiking Neural Networks Explained | The Future of AI That Thinks Like the Brain](https://www.youtube.com/watch?v=ug92eUh_pYo) — also for: Pathfinder: Practical Real-Time Learning for Data Prefetching (Rajeev Balasubramonian)
- [Cosyne 2022 Tutorial on Spiking Neural Networks - Part 1/2](https://www.youtube.com/watch?v=GTXTQ_sOxak) — also for: Pathfinder: Practical Real-Time Learning for Data Prefetching (Rajeev Balasubramonian)
- [IEE/CSE 598: Lecture 7G (2020-04-15) - Intro. to Spiking Neural Networks and Neuromorphic Computing](https://www.youtube.com/watch?v=ICw2_49dSNw) — also for: SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning (Xiaoxuan Yang)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the ST-RSBP algorithm for training deep recurrent spiking neural networks. The beginner project focuses on implementing a core spike-train level backpropagation concept on a simple spiking neuron model. The intermediate project involves reimplementing the ST-RSBP algorithm on a small-scale dataset, comparing it against a baseline, and reproducing accuracy metrics similar to the paper. The advanced project extends ST-RSBP toward a future direction by exploring biologically plausible learning rules or adapting the method for neuromorphic hardware simulation, addressing one of the paper's stated limitations.

### Beginner — Spike-Train Level Gradient Computation for a Single Spiking Neuron
*Effort: a weekend, ~8 hours*

You build a simple Python simulation of a single spiking neuron with recurrent input, implementing the spike-train level post-synaptic potential (S-PSP) concept and computing gradients for synaptic weights without time unfolding. This includes a basic rate-coded loss function and backpropagation of error signals at the spike-train level.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of ST-RSBP: computing gradients directly at the spike-train level without smoothing or time unfolding, which is the key innovation of the paper.

**Grounded in:** Development of ST-RSBP, a novel spike-train level backpropagation algorithm for deep RSNNs.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic spike trains generated by the simulated neuron model; no external dataset required.

**Build it:**

1. Implement a single spiking neuron model with membrane potential dynamics and spike generation.
2. Simulate spike trains for a fixed input pattern with recurrent connections.
3. Implement the spike-train level post-synaptic potential (S-PSP) calculation as described in the paper.
4. Compute gradients of synaptic weights using the ST-RSBP approach without time unfolding.
5. Define a simple rate-coded loss function and perform gradient descent updates.
6. Visualize spike trains, membrane potentials, and training loss over iterations.

**Ships as:** A Python notebook or script demonstrating spike-train level gradient computation on a single neuron, with plots showing training progress and gradient correctness.

**Stretch goal:** Extend the model to a small feedforward layer of spiking neurons and apply the same gradient computation.

### Intermediate — Reimplement ST-RSBP on MNIST for Spiking CNN Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the ST-RSBP algorithm from the paper to train a spiking convolutional neural network (CNN) on the MNIST dataset. You compare the accuracy of your ST-RSBP-trained model against a simple rate-coded baseline trained with surrogate gradient backpropagation. You report classification accuracy and training curves.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the full ST-RSBP algorithm on a standard image recognition task, reproducing the paper's key result that ST-RSBP outperforms other SNN backpropagation methods on MNIST.

**Grounded in:** ST-RSBP achieves 99.62% accuracy on spiking CNNs for MNIST, outperforming all other SNN BP rules.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** MNIST handwritten digit dataset, publicly available from torchvision.datasets as a substitute for the paper's MNIST experiments.

**Build it:**

1. Implement a spiking CNN architecture compatible with ST-RSBP training.
2. Implement the ST-RSBP gradient computation for recurrent and feedforward layers as described in the paper.
3. Train the spiking CNN on MNIST using ST-RSBP with a rate-coded loss function.
4. Implement a baseline training method using surrogate gradient backpropagation for comparison.
5. Evaluate and compare classification accuracy and training loss curves for both methods.
6. Document hyperparameter choices and training settings.

**Verified links from the paper:**

- <https://github.com/stonezwr/ST-RSBP> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train and evaluate a spiking CNN on MNIST using ST-RSBP and a baseline, including scripts, training logs, and a README with results and analysis.

**Stretch goal:** Add support for recurrent spiking layers and evaluate on a small speech dataset like N-TIDIGITS.

### Advanced — Exploring Biologically Plausible Learning Rules Inspired by ST-RSBP
*Effort: 3+ weeks*

You develop an extension of ST-RSBP that incorporates more biologically plausible learning mechanisms, such as local synaptic plasticity rules or spike-timing dependent plasticity (STDP) variants, to address the paper's limitation of biological non-plausibility. You implement and test this extended algorithm on a small speech recognition dataset (e.g., TI46-Digits) and compare performance and training efficiency against the original ST-RSBP.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by bridging engineering performance with biological plausibility, demonstrating deep comprehension of ST-RSBP's mechanisms and their potential adaptations.

**Grounded in:** ST-RSBP is biologically non-plausible; future directions include extending ST-RSBP to more biologically plausible learning rules.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** TI46-Digits speech dataset or a publicly available small speech dataset as a substitute; if unavailable, simulate simple spike-train inputs representing speech features.

**Build it:**

1. Study the ST-RSBP algorithm and identify components that are biologically implausible.
2. Design a biologically plausible learning rule inspired by ST-RSBP principles, e.g., local learning with spike-timing dependencies.
3. Implement the extended learning rule in a spiking recurrent neural network.
4. Train the network on a small speech recognition task, such as TI46-Digits or a substitute dataset.
5. Compare accuracy, training time, and spike statistics against the original ST-RSBP implementation.
6. Analyze trade-offs between biological plausibility and engineering performance.

**Ships as:** A GitHub repository with code implementing the biologically plausible extension, training scripts, evaluation results, and a detailed README discussing the approach, results, and limitations.

**Stretch goal:** Investigate integration of the extended learning rule with neuromorphic hardware simulators or frameworks.
