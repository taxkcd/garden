---
title: "406 · A3C3: AI Algorithm and Accelerator Co-design, Co-search, and Co-generation — Deming Chen"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-deming-chen"
source_hash: "16055940f6c42499094a11a80fead696357a90c9cb79ea4277d9f3ac1a7b3b4b"
sequence: 406
generator: "outreach-garden: managed"
---

# 406 · A3C3: AI Algorithm and Accelerator Co-design, Co-search, and Co-generation

## At a glance

- **Professor:** Deming Chen
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [A3C3: AI Algorithm and Accelerator Co-design, Co-search, and Co-generation](https://arxiv.org/pdf/2606.20869)
- **Authors:** Selin Yildirim, Yingbing Huang, Deming Chen
- **Year:** 2026

## Paper overview

This paper introduces A3C3, a comprehensive methodology that jointly designs AI algorithms and their hardware accelerators to optimize performance, efficiency, and scalability. Unlike traditional approaches that design AI models and hardware separately, A3C3 co-designs neural network architectures and hardware implementations simultaneously, using differentiable and automated search techniques. The approach is demonstrated through systems for edge vision, differentiable architecture search, and large language model inference acceleration, showing significant improvements in accuracy, latency, throughput, and energy efficiency.

### Why it matters

**Research problem:** Traditional AI system design treats neural network architecture design and hardware implementation as separate stages, leading to suboptimal performance, especially under resource constraints and for heterogeneous, memory-intensive workloads.

**Why it matters:** As AI models grow in complexity and size, deploying them efficiently on hardware with constraints like latency, power, and memory is challenging. Separate optimization of algorithms and hardware results in inefficient systems, increased design time, and poor utilization of hardware resources, limiting AI applications in edge devices and large-scale deployments.

**Key contributions:**

- Proposed A3C3 methodology for joint AI algorithm and hardware accelerator co-design, co-search, and co-generation.
- Introduced the bundle abstraction that unifies neural network operations and hardware implementations to reduce search space and enable modular design.
- Developed SkyNet, a co-designed edge vision system optimized for UAV object detection under strict resource constraints.
- Presented EDD, a differentiable framework that jointly optimizes neural architectures and hardware implementations using gradient descent.
- Designed Medusa, a speculative decoding framework for large language models that accelerates inference by predicting multiple future tokens in parallel.

## About the professor

**Deming Chen** — Abel Bliss Professor of Engineering, Electrical and Computer Engineering, Univ. of Illinois at Urbana-Champaign.

Research interests: Hardware security, GPU optimization and GPU computing, IoT and data analytics, Hardware/software co-design for SoC, System-level and high-level synthesis, Cloud computing, AI, machine learning and hardware acceleration, Reconfigurable computing and FPGAs

### Research links

- [Faculty/profile page](https://www.ece.illinois.edu/directory/profile/dchen)
- [Professor website](http://dchen.ece.illinois.edu/)
- [Resolved homepage](http://dchen.ece.illinois.edu/homepage.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Architecture Search
**The paper assumes:** neural architecture search, differentiable optimization methods, and hardware-aware model design
**Already in this field?** Skip this entirely if you already understand neural architecture search methods and their application to hardware-aware AI model design.

To understand the core methodology of the A3C3 paper, which hinges on differentiable and automated co-search techniques for neural architecture and hardware co-design, a solid grasp of Neural Architecture Search (NAS) is essential. The rigorous course option offers a deep, structured university-level lecture series on deep learning foundations relevant to NAS, while the fast track provides a concise, visual introduction to deep learning concepts that underpin NAS, suitable for readers seeking a quicker but still substantive overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos

**Watch only this:** Lectures 1 (Introduction), 2 (Image Classification), 3 (Neural Networks), 4 (Training Neural Networks), and 15 (Convolutional Neural Networks) — about 5 hours total. These cover the essential background on neural architectures and training needed to grasp NAS concepts.

*Why it unblocks this paper:* Stanford CS231N is a highly authoritative, university-level course on deep learning for computer vision that covers neural network architectures and optimization techniques foundational to NAS, making it directly relevant to understanding the joint architecture and hardware co-search in A3C3.

*If you want all of it:* All 18 lectures, approximately 15 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.S191 2025](https://www.youtube.com/playlist?list=PLr8viiIjWRwrkkMasGNwIJTdckarSWo0l) — Jialin Liu · 10 videos

**Watch only this:** Lectures 1 (Introduction to Deep Learning), 2 (Neural Networks), and 3 (Training and Optimization) — about 2 hours total. These cover the core ideas behind neural architectures and their optimization.

*Why it unblocks this paper:* MIT 6.S191 2025 is a concise, well-produced introduction to deep learning that provides clear intuition and foundational concepts relevant to NAS, suitable for quickly building the necessary background without the depth of a full university course.

*If you want all of it:* All 10 lectures, approximately 6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the A3C3 methodology for joint AI algorithm and hardware accelerator co-design, start with foundational knowledge on hardware-software co-design, neural architecture search, differentiable architecture search, and AI accelerator design and optimization. These prerequisites provide the necessary background on the joint optimization challenges and techniques. Finally, focus on the core concept of joint AI algorithm and hardware co-design with a relevant advanced talk, as well as the authors' own presentation if available, to grasp the specific contributions and innovations of the A3C3 framework.

### Hardware software co-design for AI *(prerequisite)*
This section covers the foundational principles and challenges of co-designing hardware and software for AI systems, emphasizing the need for joint optimization to overcome inefficiencies in traditional separated design approaches. Understanding this will provide context for why A3C3's integrated approach is necessary.

*How the paper uses it:* A3C3 addresses inefficiencies in traditional AI system design by jointly optimizing neural architectures and hardware accelerators.

▶ [HiPEAC 2026 keynote 3: AI and hardware co-design: Taming ...](https://www.youtube.com/watch?v=7riUNvpqlFE) — HiPEAC TV · 51:58

### Neural architecture search methods *(prerequisite)*
Neural architecture search (NAS) automates the design of neural network architectures, a key component of A3C3's algorithmic co-design. This section explains NAS techniques and their role in optimizing model architectures for performance and efficiency.

*How the paper uses it:* A3C3 uses differentiable and automated search techniques to co-design neural network architectures and hardware implementations.

▶ [Lecture 07 - Neural Architecture Search (Part I) | MIT 6.S965](https://www.youtube.com/watch?v=NQj5TkqX48Q) — MIT HAN Lab · 1:04:01

### Differentiable architecture search *(prerequisite)*
Differentiable architecture search enables gradient-based optimization of neural architectures, which is critical for the joint search of algorithm and hardware parameters in A3C3. This section explains the mathematical and algorithmic foundations of differentiable NAS.

*How the paper uses it:* EDD, part of A3C3, is a differentiable framework that jointly optimizes neural architectures and hardware implementations using gradient descent.

▶ [Network Architecture Search: AutoML and others](https://www.youtube.com/watch?v=gZZKjiAKc5s) — Leo Isikdogan · 10:06

### AI accelerator design and optimization *(prerequisite)*
Understanding the design and optimization of AI hardware accelerators is essential to appreciate the hardware co-design aspect of A3C3. This section covers accelerator architectures, dataflow, and performance trade-offs relevant to efficient AI inference and training.

*How the paper uses it:* A3C3 co-designs hardware accelerators alongside AI algorithms to optimize latency, throughput, and energy efficiency.

▶ [ASPLOS'22 - Session 1A - A Full-stack Search Technique for ...](https://www.youtube.com/watch?v=-MgTD0tjaWM) — ACM SIGARCH · 19:13

### Joint AI algorithm and hardware co-design
This section focuses on the central concept of the paper: simultaneous optimization of AI models and hardware accelerators. It presents state-of-the-art approaches and challenges in co-design, setting the stage for understanding A3C3's contributions.

*How the paper uses it:* A3C3 proposes a comprehensive methodology for joint AI algorithm and hardware accelerator co-design, co-search, and co-generation.

▶ [ISCA'24 - Plenary Session - Keynote by Vivienne Sze](https://www.youtube.com/watch?v=TwzO3r-6o0k) — ACM SIGARCH · 1:12:20

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the A3C3 paper from a beginner to advanced perspective, start by grasping the foundational idea of hardware-software co-design for AI, which is essential for appreciating the joint optimization of AI algorithms and hardware accelerators. Next, learn about neural architecture search methods and differentiable architecture search, which underpin the automated and gradient-based search techniques used in the paper. Then, explore AI accelerator design and optimization to understand hardware constraints and tradeoffs. Finally, focus on the core concept of joint AI algorithm and hardware co-design, which is the central innovation of A3C3.

### Hardware software co-design for AI *(prerequisite)*
Hardware-software co-design means designing AI algorithms and their hardware implementations together rather than separately, to achieve better performance and efficiency. This approach helps overcome limitations caused by treating software and hardware as independent design problems.

*How the paper uses it:* A3C3's core methodology is based on jointly optimizing AI algorithms and hardware accelerators to improve efficiency and scalability.

▶ [Why Hardware-Software Co-Design Is AI's Real 100x: Dylan ...](https://www.youtube.com/watch?v=f6D_aiy8qyU) — Sequoia Capital · 1:10:15

### Neural architecture search methods *(prerequisite)*
Neural architecture search (NAS) automates the design of neural network architectures by exploring many possible configurations to find the best performing model. Understanding NAS is key to appreciating how A3C3 automates the search for optimal AI models.

*How the paper uses it:* A3C3 uses NAS techniques to jointly search neural architectures and hardware parameters for optimal AI system design.

▶ [EfficientML.ai Lecture 7 - Neural Architecture Search (Part I ...](https://www.youtube.com/watch?v=gFi29IEHRGc) — MIT HAN Lab · 1:14:17

### Differentiable architecture search *(prerequisite)*
Differentiable architecture search is a NAS method that uses gradient-based optimization to efficiently explore architecture choices by relaxing discrete decisions into continuous parameters. This enables faster and more precise joint optimization.

*How the paper uses it:* The EDD framework in A3C3 employs differentiable co-search to jointly optimize neural architectures and hardware implementations.

▶ [Network Architecture Search: AutoML and others](https://www.youtube.com/watch?v=gZZKjiAKc5s) — Leo Isikdogan · 10:06

### AI accelerator design and optimization *(prerequisite)*
AI accelerator design focuses on creating specialized hardware to efficiently run AI workloads, balancing tradeoffs like latency, throughput, and energy. Understanding these constraints is crucial to grasping how hardware choices impact AI performance.

*How the paper uses it:* A3C3 integrates hardware accelerator design into the joint search to ensure generated AI models are deployable and efficient on target platforms.

▶ [[CGO '22] Session 4 - Comprehensive Accelerator-Dataflow ...](https://www.youtube.com/watch?v=RKBuXUPhOcA) — CGO Conference · 18:32

### Joint AI algorithm and hardware co-design
Joint AI algorithm and hardware co-design means simultaneously optimizing neural network architectures and their hardware implementations to achieve the best overall system performance. This holistic approach contrasts with traditional separate design and leads to more efficient AI systems.

*How the paper uses it:* A3C3's main contribution is this joint co-design, co-search, and co-generation methodology that tightly couples AI models with hardware accelerators.

▶ [Democratizing AI through Hardware-Software Codesign for LLM Inference](https://www.youtube.com/watch?v=ArcVp30w3GI) — d-Matrix AI · 1 year ago

## Already in your library

- [Hardware/Software Co-design Course - Lecture 1: 16.03.22 ...](https://www.youtube.com/watch?v=OJRBbOoiHXw) — also for: Seeking Solutions in Configurable Computing (David Andrews)
- [Hardware Software Codesign for Embedded AI - Lecture 1](https://www.youtube.com/watch?v=b7aOV8Q6mXM) — also for: BOLT: Bandwidth-Optimized Lightning-Fast Oblivious Map powered by Secure HBM Accelerators (Chenghong Wang)
- [Secure Model Aggregation in Federated Learning](https://www.youtube.com/watch?v=rwzLSNMpm8U) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the A3C3 paper's core idea of joint AI algorithm and hardware accelerator co-design. The beginner project recreates a simplified co-design concept with modular bundles to show the coupling of software and hardware design. The intermediate project implements a differentiable co-search inspired by the EDD framework on a small public dataset, comparing latency improvements against a baseline. The advanced project extends the SnapKV dynamic KV cache compression method toward runtime-adaptive co-design, addressing a stated future direction of real-time adaptive hardware/software optimization during inference.

### Beginner — Bundle Abstraction Simulator for Joint AI-Hardware Design
*Effort: a weekend, ~8 hours*

You build a small Python simulator that models the bundle abstraction from A3C3: a modular unit coupling a neural network operation with a hardware implementation profile. The simulator lets you define bundles with parameters like compute cost, memory usage, and accuracy impact, then compose simple neural network pipelines and estimate overall hardware resource usage and accuracy tradeoffs.

**Why it shows you understood the paper:** This project demonstrates you understand the key concept of bundles as a unified abstraction that reduces search space and tightly couples AI model components with hardware constraints, a foundational idea in A3C3.

**Grounded in:** Introduced the bundle abstraction that unifies neural network operations and hardware implementations to reduce search space and enable modular design.

**Tech stack:** Python 3.11

**Data:** No external dataset needed; you simulate simple neural network operations and hardware parameters.

**Build it:**

1. Implement a Python class representing a bundle with attributes for operation type, latency, energy, and accuracy impact.
2. Create a few example bundles representing common layers (e.g., convolution, pooling) with hypothetical hardware costs.
3. Build a function to compose bundles into a simple network pipeline and aggregate total latency, energy, and accuracy.
4. Write a script to vary bundle parameters and observe tradeoffs in overall system metrics.
5. Document the bundle abstraction concept and how your simulator models it.

**Ships as:** A GitHub repo with Python code simulating bundle-based co-design and a README explaining the abstraction and example results.

**Stretch goal:** Add a simple heuristic search over bundle parameter combinations to find a near-optimal tradeoff between accuracy and latency.

### Intermediate — Differentiable Co-search of Neural Architecture and Hardware Parameters
*Effort: 2 weekends, ~20 hours*

You implement a simplified differentiable co-search framework inspired by the EDD system from A3C3. Using a small public vision dataset like CIFAR-10 as a substitute for UAV object detection, you jointly optimize a small neural architecture (e.g., number of filters, kernel sizes) and hardware parameters (e.g., clock frequency, memory bandwidth) to minimize latency while maintaining accuracy. You compare results against a baseline neural architecture search without hardware co-optimization.

**Why it shows you understood the paper:** This project shows you grasp the core methodology of differentiable joint optimization of AI and hardware parameters, reproducing latency improvements and accuracy tradeoffs reported by EDD.

**Grounded in:** Presented EDD, a differentiable framework that jointly optimizes neural architectures and hardware implementations using gradient descent.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** CIFAR-10 dataset (publicly available) used as a proxy for edge vision workloads.

**Build it:**

1. Set up a small neural network search space parameterized by architecture hyperparameters.
2. Model hardware latency as a differentiable function of hardware parameters and architecture choices.
3. Implement a joint loss combining classification accuracy and latency, weighted as a multi-objective function.
4. Use gradient-based optimization to search for architecture and hardware parameters minimizing the joint loss.
5. Train and evaluate the optimized model on CIFAR-10 and compare latency and accuracy against a baseline NAS without hardware parameters.
6. Visualize tradeoffs and report latency reduction and accuracy metrics.

**Verified links from the paper:**

- <https://github.com/Xilinx/chaidnn> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for differentiable co-search, training scripts, evaluation results, and a README explaining the approach and findings.

**Stretch goal:** Extend the framework to include energy consumption as a third optimization objective.

### Advanced — Runtime-Adaptive KV Cache Compression for Large Language Model Inference
*Effort: 3-4 weeks*

You develop an extension of the SnapKV method from A3C3 to enable runtime-adaptive KV cache compression during LLM inference. Your system dynamically adjusts compression parameters and hardware resource allocation based on input complexity and inference-time signals, implementing a feedback loop that co-optimizes algorithmic parameters and hardware configurations in real time. You evaluate your method on long-context LLM benchmarks, measuring decoding latency, memory footprint, and output quality.

**Why it shows you understood the paper:** This project tackles a stated future direction of A3C3 by addressing the limitation of static KV cache compression and demonstrating a novel runtime-adaptive co-design approach that integrates algorithmic and hardware adaptation during inference.

**Grounded in:** Developed SnapKV, a dynamic KV cache compression method that reduces memory footprint and decoding latency for long-context LLM inference; future direction: develop runtime-adaptive A3C3 systems that dynamically adjust parameters based on input difficulty and inference-time signals.

**Tech stack:** Python 3.11, PyTorch, NumPy, CUDA (if GPU acceleration is available)

**Data:** Use publicly available long-context LLM benchmarks or simulate long token sequences for evaluation; no authors' code released for SnapKV, so reimplement based on paper description.

**Build it:**

1. Study the SnapKV method and implement a baseline KV cache compression scheme for LLM decoding.
2. Design a runtime monitoring module that collects inference-time signals such as token complexity or attention sparsity.
3. Implement a controller that dynamically adjusts KV cache compression parameters and hardware resource allocation based on monitored signals.
4. Integrate the adaptive compression into an LLM decoding pipeline (e.g., using a small open-source transformer model).
5. Evaluate decoding latency, memory usage, and output quality on long-context sequences, comparing static vs. adaptive compression.
6. Document the design, implementation challenges, and experimental results.

**Ships as:** A GitHub repo with code for runtime-adaptive KV cache compression, evaluation scripts, and a detailed README discussing the extension and its impact.

**Stretch goal:** Incorporate multi-objective optimization to balance latency, memory, and output quality dynamically during inference.
