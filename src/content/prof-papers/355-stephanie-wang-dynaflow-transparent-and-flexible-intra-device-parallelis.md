---
title: "355 · DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling — Stephanie Wang"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stephanie-wang"
source_hash: "4b2c9405a7b60b723e15968c3bf6a0e490be32091059202694f0652c418406a0"
sequence: 355
generator: "outreach-garden: managed"
---

# 355 · DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling

## At a glance

- **Professor:** Stephanie Wang
- **Institution:** University of Washington
- **Paper:** [DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling](https://arxiv.org/pdf/2605.21603)
- **Authors:** Yi Pan, Yile Gu, Jinbin Luo, Yibo Wu, Ziren Wang, Hongtao Zhang, Ziyi Xu, Shengkai Lin, Baris Kasikci, Stephanie Wang
- **Year:** 2026

## Paper overview

This paper presents DynaFlow, a framework that enables efficient and flexible intra-device parallelism in machine learning systems by decoupling the logical model definition from its physical execution schedule. It allows existing ML frameworks to integrate advanced parallelism strategies with minimal code changes, improving throughput by overlapping computation, communication, and memory operations within a single device. DynaFlow provides a programmable frontend for defining custom scheduling and an efficient backend that manages data-flow and preserves compatibility with optimizations like CUDA Graphs.

### Why it matters

**Research problem:** Existing machine learning frameworks use a static, sequential programming model that conflicts with intra-device parallelism strategies aimed at overlapping heterogeneous operations to improve hardware utilization. Integrating these strategies requires invasive, model-specific code changes and maintaining multiple specialized solutions due to workload and hardware sensitivity, resulting in prohibitive engineering costs and limited adoption.

**Why it matters:** As ML models grow larger and more complex, inefficiencies from under-utilized device resources during sequential execution degrade training and inference throughput. Efficient intra-device parallelism can significantly improve performance but is difficult to adopt widely due to programming model mismatches and engineering complexity.

**Key contributions:**

- Identification of the fundamental conflict between static sequential ML programming models and intra-device parallelism needs, proposing decoupling execution schedule from model implementation.
- Design and implementation of DynaFlow, featuring a programmable frontend for custom parallelism and an efficient backend preserving compatibility with low-level optimizations.
- Demonstration of DynaFlow’s effectiveness by integrating representative intra-device parallelism strategies into six state-of-the-art ML systems with minimal code changes.
- Achieving up to 1.29x throughput improvement over original systems and up to 1.1x over existing native implementations.

## About the professor

**Stephanie Wang** — Assistant Professor, Paul G. Allen School of Computer Science & Engineering, University of Washington.

Research interests: distributed systems, systems for machine learning and data processing, computer systems, and programming languages

### Research links

- [Faculty/profile page](https://www.engr.washington.edu/faculty-research/new-faculty-2024/wang)
- [Identity evidence](https://www.cs.washington.edu/people/faculty/stephanie-wang)
- [Identity evidence](https://stephanie-wang.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel Computing and Scheduling
**The paper assumes:** parallel computing concepts, task scheduling algorithms, data and control flow dependencies, asynchronous execution models
**Already in this field?** Skip this entirely if you already have a solid understanding of parallel computing principles and scheduling techniques in computer systems.

This background playlist selection focuses on parallel computing and scheduling, essential for understanding the dynamic, programmable intra-device parallelism introduced by DynaFlow. The rigorous course option provides a deep, structured university-level foundation on parallel computing concepts, architectures, and scheduling strategies, while the fast track offers a concise, accessible introduction to the same core ideas for readers with limited time. Choose the course for comprehensive mastery or the fast track for a focused, efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 I Parallel Computing I 2023 I Kayvon Fatahalian and Kunle Olukotun](https://www.youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp) — Stanford Online · 19 videos · 24.3h across 19 episodes

**Watch only this:** Lectures 1-8, about 10 hours — covering why parallelism matters, multi-core architectures, parallel programming basics, and performance optimization including work distribution and scheduling, plus GPU architecture and data-parallel thinking.

*Why it unblocks this paper:* Stanford CS149 is a comprehensive, authoritative university course on parallel computing covering fundamental concepts such as scheduling, data dependencies, GPU architectures, and performance optimization, directly relevant to understanding DynaFlow's programmable scheduling and backend execution management.

*If you want all of it:* 24.3 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [NPTEL: Introduction to Parallel Programming in OpenMP - Prof. Yogish Sabharwal](https://www.youtube.com/playlist?list=PLjzjdo8qdH01OxjkI2BdtZ8TUfUMMrxvS) — Suraj Donthi · 40 videos · 8.1h across 40 episodes

**Watch only this:** Episodes 1-12, about 2.5 hours — covering course intro, parallel programming basics, architectures, pipelining, memory latency, cache locality, shared and distributed memory architectures, and basic OpenMP parallel programming constructs.

*Why it unblocks this paper:* The NPTEL Introduction to Parallel Programming in OpenMP series provides a concise, clear introduction to parallel programming models, scheduling basics, and shared memory concepts, offering a practical and accessible overview of parallelism and scheduling relevant to intra-device parallelism.

*If you want all of it:* 8.1 hours across all 40 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DynaFlow paper, start by grounding yourself in foundational concepts such as machine learning execution models, programmable scheduling systems, CUDA Graphs optimization, and zero-copy memory management. These prerequisites provide the necessary background on the challenges and techniques that DynaFlow addresses. Then, focus on the core concept of intra-device parallelism scheduling to grasp the specific parallelism strategies DynaFlow enables. Finally, study the authors' own talk on DynaFlow to gain direct insights into their design, implementation, and evaluation of the system.

### Programmable scheduling systems *(prerequisite)*
Programmable scheduling systems provide the conceptual framework for DynaFlow's programmable frontend that allows custom intra-device parallelism strategies. Understanding general scheduling principles and programmability in systems helps appreciate DynaFlow's novel scheduling substrate.

*How the paper uses it:* DynaFlow features a programmable frontend for custom parallelism strategies.

▶ [Systems & Networks Seminar, Anirudh Sivaraman, "Designing fast and programmable routers"](https://www.youtube.com/watch?v=wTN2yVBPaio) — Paul G. Allen School · 8 years ago

### CUDA Graphs optimization *(prerequisite)*
CUDA Graphs optimization is critical to understanding how DynaFlow's backend preserves compatibility with static optimizations while enabling dynamic scheduling. Knowledge of CUDA Graphs helps explain the backend's efficient execution and memory management.

*How the paper uses it:* DynaFlow maintains compatibility with CUDA Graphs and applies static optimization at the subgraph level.

▶ [Parameterized CUDA Graph Launch in PyTorch: CUDA Graphs Without the Pain - Daniel Galvez, NVIDIA](https://www.youtube.com/watch?v=37w9hQb5gME) — PyTorch · 3 months ago

### Zero-copy memory management *(prerequisite)*
Zero-copy memory management techniques are essential to reducing overhead in data movement, a key backend optimization in DynaFlow. Understanding zero-copy principles clarifies how DynaFlow eliminates copy overheads to improve throughput.

*How the paper uses it:* DynaFlow's backend uses custom zero-copy memory management to eliminate copy overheads.

▶ [Zero-Copy Zen: Boost Performance with Memory View — Kesia Mary Joies, Aby M Joseph](https://www.youtube.com/watch?v=tcY_6OAFtss) — EuroPython Conference · 2 years ago

### Intra-device parallelism scheduling
Intra-device parallelism scheduling is central to DynaFlow's contribution, enabling flexible and efficient overlap of computation, communication, and memory operations within a device. This concept directly relates to how DynaFlow improves hardware utilization and throughput.

*How the paper uses it:* DynaFlow enables flexible intra-device parallelism via programmable operator scheduling.

▶ [OSDI '22 - Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning](https://www.youtube.com/watch?v=oVC3SB3GqrI) — USENIX · 3 years ago

### DynaFlow authors talk *(the paper's own talk)*
The authors' own talk provides direct insights into the design, implementation, and evaluation of DynaFlow. It offers the most authoritative and detailed explanation of the system and its contributions.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on DynaFlow.

▶ [Zhiyan Ding - Ground State Preparation for Near-Term Devices using System-Bath Coupling Dynamics](https://www.youtube.com/watch?v=offX-WBTsjE) — Institute for Pure & Applied Mathematics (IPAM) · 5 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand DynaFlow, starting with basic machine learning execution models to grasp the limitations of static sequential execution. It then covers programmable scheduling systems and zero-copy memory management to build intuition on how flexible scheduling and efficient data handling improve performance. Finally, it focuses on intra-device parallelism scheduling and CUDA Graphs optimization, which are central to DynaFlow's approach to enhancing ML system throughput.

### Machine learning execution models *(prerequisite)*
Learn how machine learning models are typically executed, focusing on the static and sequential nature of common frameworks. Understanding this helps clarify why such models struggle to efficiently utilize hardware resources and sets the stage for appreciating DynaFlow's dynamic scheduling approach.

*How the paper uses it:* The paper identifies conflicts between static sequential ML programming models and the need for flexible intra-device parallelism.

▶ [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — Infinite Codes · 1 year ago

### Programmable scheduling systems *(prerequisite)*
Explore the basics of programmable scheduling, which allows systems to flexibly decide the order and timing of task execution. This concept is key to understanding how DynaFlow enables custom intra-device parallelism strategies through a programmable frontend.

*How the paper uses it:* DynaFlow provides a programmable frontend for defining custom scheduling strategies decoupled from model implementation.

▶ [Introduction to RTOS Part 3 - Task Scheduling | Digi-Key ...](https://www.youtube.com/watch?v=95yUbClyf3E) — DigiKey · 10:59

### Zero-copy memory management *(prerequisite)*
Understand zero-copy memory management, a technique that reduces overhead by avoiding unnecessary data copying between memory regions. This is crucial for efficient data handling in DynaFlow's backend, which manages control and data flow asynchronously.

*How the paper uses it:* DynaFlow’s backend uses zero-copy memory management to eliminate copy overheads and improve efficiency.

▶ [Zero-copy: Principle and Implementation (By Zhenyuan Zhang)](https://www.youtube.com/watch?v=SLkRYqj6d4E) — Zhenyuan Zhang · 2 years ago

### Intra-device parallelism scheduling
Delve into intra-device parallelism, which overlaps computation, communication, and memory operations within a single device to improve hardware utilization. This concept is central to DynaFlow’s goal of enhancing throughput by flexible operator scheduling inside devices.

*How the paper uses it:* DynaFlow enables flexible intra-device parallelism by decoupling execution schedule from model implementation.

▶ [OSDI '22 - Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning](https://www.youtube.com/watch?v=oVC3SB3GqrI) — USENIX · 3 years ago

### CUDA Graphs optimization
Learn about CUDA Graphs, a GPU optimization technique that captures and replays sequences of GPU operations to reduce CPU overhead. DynaFlow maintains compatibility with CUDA Graphs to preserve performance benefits while enabling dynamic scheduling.

*How the paper uses it:* DynaFlow’s backend preserves compatibility with CUDA Graphs to combine static optimizations with dynamic scheduling.

▶ [Parameterized CUDA Graph Launch in PyTorch: CUDA Graphs Without the Pain - Daniel Galvez, NVIDIA](https://www.youtube.com/watch?v=37w9hQb5gME) — PyTorch · 3 months ago

## Already in your library

- [Dynaflow Overview](https://www.youtube.com/watch?v=Z3QGGl8chMQ) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [[Scheduling seminar] Pascal Van Hentenryck (Georgia Tech ...](https://www.youtube.com/watch?v=PzC0FeLO3UA) — also for: Almost Tight Approximation Hardness and Online Algorithms for Resource Scheduling (Rathish Das)
- [[Scheduling seminar] Changhyun Kwon (KAIST/Omelet, Inc ...](https://www.youtube.com/watch?v=pEPck7IL1zo) — also for: Quantum Annealing Approaches to Solving the Shipment Rerouting Problems (Fei Li)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of DynaFlow's approach to intra-device parallelism in ML systems. The beginner project focuses on reproducing a core mechanism of decoupling execution schedule from model definition using simple PyTorch code. The intermediate project involves reimplementing and benchmarking a simplified programmable scheduling strategy inspired by DynaFlow on a public ML workload. The advanced project extends DynaFlow by exploring adaptive scheduling policies that dynamically optimize intra-device parallelism, addressing a key future direction from the paper.

### Beginner — Simple Dynamic Operator Scheduling in PyTorch
*Effort: a weekend, ~8 hours*

You build a minimal PyTorch example that decouples the logical model definition from its execution schedule by implementing a simple dynamic scheduler that overlaps computation and communication operations within a single device. This reproduces the core idea of DynaFlow’s programmable execution substrate on a small scale.

**Why it shows you understood the paper:** This project demonstrates you grasp the fundamental conflict between static sequential ML programming models and intra-device parallelism, and can implement a dynamic scheduling layer that manages operator execution separately from model definition.

**Grounded in:** Identification of the fundamental conflict between static sequential ML programming models and intra-device parallelism needs, proposing decoupling execution schedule from model implementation.

**Tech stack:** Python 3.11, PyTorch

**Data:** Use a small synthetic dataset or simple input tensors to simulate ML workload within PyTorch.

**Build it:**

1. Implement a simple PyTorch model with multiple operators that include both compute and communication-like dummy operations.
2. Design a dynamic scheduler function that controls the order and overlap of operator execution asynchronously within the same device.
3. Modify the model execution to invoke the scheduler instead of the default sequential execution.
4. Measure and compare throughput or latency between default sequential execution and your dynamic scheduler.
5. Document the design and results in a README explaining how this reproduces DynaFlow’s decoupling concept.

**Ships as:** A GitHub repo with runnable PyTorch code demonstrating dynamic operator scheduling and a README explaining the mechanism and performance comparison.

**Stretch goal:** Add zero-copy memory management simulation by reusing input/output buffers to reduce memory overhead.

### Intermediate — Reimplementing DynaFlow-style Programmable Scheduling on vLLM
*Effort: 2 weekends, ~20 hours*

You reimplement the core programmable scheduling approach of DynaFlow by integrating a custom intra-device parallelism strategy into the open-source vLLM system. You compare throughput improvements against vLLM’s native sequential execution baseline on a representative LLM inference workload.

**Why it shows you understood the paper:** This project shows you can apply DynaFlow’s programmable frontend and dynamic scheduling backend concepts to a real ML system, reproducing the paper’s key result of minimal code changes yielding throughput improvements.

**Grounded in:** Demonstration of DynaFlow’s effectiveness by integrating representative intra-device parallelism strategies into six state-of-the-art ML systems with minimal code changes.

**Tech stack:** Python 3.11, PyTorch, vLLM

**Data:** Use publicly available LLM inference workloads or synthetic token sequences to simulate batch inference in vLLM; this substitutes for the paper’s evaluation data.

**Build it:**

1. Clone and set up the vLLM repository and environment.
2. Implement a simple graph partitioning and scheduling strategy inspired by DynaFlow’s programmable frontend, requiring minimal code changes (~40 lines).
3. Integrate your scheduler into vLLM’s execution pipeline to overlap computation and communication.
4. Run inference benchmarks comparing throughput and latency against vLLM’s original sequential execution.
5. Analyze and document the performance gains and engineering effort in a detailed README.

**Verified links from the paper:**

- <https://github.com/vllm-project/vllm> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked vLLM GitHub repo with your scheduling integration and benchmark scripts, plus a README reporting throughput improvements and code change size.

**Stretch goal:** Extend your scheduler to support dynamic batch splitting to prevent performance degradation seen in static approaches.

### Advanced — Adaptive Scheduling for Intra-Device Parallelism in DynaFlow
*Effort: 3+ weeks*

You develop an extension to DynaFlow’s programmable scheduler that implements an automated adaptive scheduling policy. This policy learns or heuristically adjusts execution plans at runtime based on workload characteristics to optimize throughput without manual scheduler programming, addressing a key future direction from the paper.

**Why it shows you understood the paper:** This project tackles a stated future direction by enhancing DynaFlow’s flexibility and performance with adaptive scheduling, demonstrating deep comprehension of the system’s architecture and limitations.

**Grounded in:** Exploring automated or adaptive scheduling policies that better tune parallelism strategies to workload and hardware contexts.

**Tech stack:** Python 3.11, PyTorch, vLLM, NumPy, Matplotlib

**Data:** Use LLM inference workloads on vLLM or synthetic workloads simulating varying batch sizes and context lengths to evaluate adaptive scheduling effectiveness.

**Build it:**

1. Study DynaFlow’s programmable scheduler interface and existing scheduling strategies in vLLM.
2. Design an adaptive scheduling policy that dynamically adjusts operator execution order and batch partitioning based on runtime metrics (e.g., throughput, latency).
3. Implement the adaptive scheduler as a plugin or extension to the existing DynaFlow-inspired scheduler in vLLM.
4. Benchmark the adaptive scheduler against static scheduling strategies on diverse workloads, measuring throughput and resource utilization.
5. Analyze results to identify scenarios where adaptive scheduling provides gains or overhead.
6. Document your design, implementation challenges, and evaluation in a comprehensive report.

**Verified links from the paper:**

- <https://github.com/vllm-project/vllm> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with your adaptive scheduler implementation, benchmark scripts, and a detailed README/report discussing design, evaluation, and insights.

**Stretch goal:** Incorporate reinforcement learning or Bayesian optimization to automate scheduler tuning further.

_The paper’s authors did not release their own code repository for DynaFlow; the intermediate and advanced projects rely on the third-party vLLM repository as a proxy for integration and evaluation._
