---
title: "355 · DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling — Stephanie Wang"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stephanie-wang"
source_hash: "cd4c04cb5cdbf023ce1e12c3b1b325c44cece01ba76a541bc7c7cfdc7739ab90"
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

This paper presents DynaFlow, a new framework that enables flexible and transparent intra-device parallelism in machine learning systems. It addresses the challenge of inefficient resource use during ML model inference and training by allowing overlapping execution of different operators within a single device. DynaFlow decouples the model's logical definition from its physical execution schedule, enabling dynamic and programmable operator scheduling without invasive code changes. It integrates well with existing ML frameworks and achieves significant throughput improvements.

### Why it matters

**Research problem:** Existing ML frameworks use a static, sequential programming model that conflicts with intra-device parallelism strategies designed to improve hardware utilization by overlapping heterogeneous operations. Integrating these strategies requires invasive, model-specific code changes and maintaining multiple specialized solutions due to workload and hardware sensitivity, making adoption difficult.

**Why it matters:** Modern large-scale ML models have diverse operator resource requirements leading to under-utilized device resources and inefficiencies. Improving intra-device parallelism can significantly increase throughput and efficiency in ML inference and training, which is critical as models grow larger and more complex.

**Key contributions:**

- Identification of the fundamental conflict between static sequential programming models and intra-device parallelism needs, proposing decoupling execution schedule from model implementation.
- Design and implementation of DynaFlow, featuring a programmable frontend for custom parallelism and an efficient backend preserving compatibility with low-level optimizations.
- Demonstration of DynaFlow's effectiveness by integrating representative intra-device parallelism strategies into six state-of-the-art ML systems with minimal code changes.
- Achieving up to 1.29x throughput improvement over original systems and up to 1.1x over existing native implementations.

## About the professor

**Stephanie Wang** — Assistant Professor, Paul G. Allen School of Computer Science & Engineering, University of Washington.

Research interests: human-centered artificial intelligence, human-robot interaction, and social robotics

### Research links

- [Faculty/profile page](https://www.cs.washington.edu/people/faculty/stephanie-wang)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand DynaFlow, start with foundational concepts in operator scheduling and dynamic scheduling/runtime systems, which underpin the framework's programmable and adaptive execution model. Next, explore machine learning compiler optimizations and asynchronous control/data flow to grasp backend integration and execution management. Finally, focus on the core concept of intra-device parallelism in ML systems and conclude with the authors' own talk on DynaFlow for direct insights into their novel contributions.

### Operator scheduling in parallel computing *(prerequisite)*
Operator scheduling is fundamental to understanding how DynaFlow dynamically manages the execution order of ML operators to enable flexible intra-device parallelism. This section covers advanced university-level lectures on scheduling task graphs and dataflow architectures, providing the theoretical basis for programmable operator scheduling.

*How the paper uses it:* DynaFlow's core innovation is decoupling operator execution from model implementation via dynamic, programmable scheduling.

▶ [Scheduling Task Graphs on Dataflow Architectures](https://www.youtube.com/watch?v=cAuihrBDt-Y) — Scalable Parallel Computing Lab, SPCL @ ETH Zurich · 29:29

### Dynamic scheduling and runtime systems *(prerequisite)*
Dynamic scheduling and runtime systems enable adaptive execution based on workload and hardware context, which is critical for DynaFlow's flexible intra-device parallelism. This section includes advanced talks on dynamic scheduling techniques for large-scale systems and runtime adaptations.

*How the paper uses it:* DynaFlow uses dynamic scheduling to adapt execution strategies to varying workloads and hardware environments.

▶ [OSDI '24 - Llumnix: Dynamic Scheduling for Large Language ...](https://www.youtube.com/watch?v=4qaos-_I3O0) — USENIX · 16:01

### Machine learning compiler optimizations *(prerequisite)*
Understanding ML compiler optimizations is important for grasping how DynaFlow integrates with backend technologies like CUDA Graphs and TorchInductor to preserve and enhance performance. This section features rigorous seminar talks on ML compiler optimization techniques.

*How the paper uses it:* DynaFlow's backend preserves compatibility with low-level compiler optimizations to achieve efficient execution.

▶ [ML for ML Compilers - Mangpo Phothilimthana | Stanford ...](https://www.youtube.com/watch?v=VASg2XNgj-4) — Stanford MLSys Seminars · 58:07

### Asynchronous control and data flow *(prerequisite)*
Asynchronous control and data flow concepts are essential to understand how DynaFlow's backend manages complex execution dependencies and overlaps operator execution efficiently. This section includes technical lectures on asynchronous data transfer and control mechanisms.

*How the paper uses it:* DynaFlow's backend manages complex control and data flow asynchronously to enable flexible scheduling.

▶ [Deciphering C++ Coroutines Part 2 - Mastering Asynchronous ...](https://www.youtube.com/watch?v=qfKFfQSxvA8) — CppCon · 1:00:17

### Intra-device parallelism in ML systems
This section covers the central concept of intra-device parallelism, which enables overlapping execution of ML operators on a single device to improve hardware utilization. It includes advanced university and research seminar talks on automating intra-operator parallelism in large-scale ML models.

*How the paper uses it:* DynaFlow advances intra-device parallelism by decoupling execution scheduling from model implementation for flexible operator overlap.

▶ [Alpa: Automated Model-Parallel Deep Learning - Zhuohan Li ...](https://www.youtube.com/watch?v=y1NXHjcl6V0) — Stanford MLSys Seminars · 55:07

### DynaFlow authors talk *(the paper's own talk)*
The authors' own talk provides direct insights into the design, implementation, and evaluation of DynaFlow, explaining their novel framework and contributions in their own words. This is the most authoritative source for understanding the paper's innovations.

*How the paper uses it:* This talk directly presents the DynaFlow framework and its key contributions from the authors themselves.

▶ [Dynaflow Overview](https://www.youtube.com/watch?v=Z3QGGl8chMQ) — dyna1955 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand DynaFlow, a framework for flexible intra-device parallelism in machine learning. We start with basic operator scheduling in parallel computing to grasp execution order management, then cover dynamic scheduling and runtime systems to understand adaptability in execution. Next, we explore asynchronous control and data flow for managing dependencies, followed by machine learning compiler optimizations to appreciate backend integration. Finally, we focus on intra-device parallelism in ML systems, culminating in the core concept of DynaFlow itself.

### Operator scheduling in parallel computing *(prerequisite)*
Operator scheduling is about deciding the order and timing of tasks (operators) in parallel computing to optimize resource use and performance. Understanding this helps grasp how execution can be managed efficiently when multiple operations compete for hardware.

*How the paper uses it:* DynaFlow dynamically manages operator execution order to enable flexible intra-device parallelism.

▶ [Scheduling Task Graphs on Dataflow Architectures](https://www.youtube.com/watch?v=cAuihrBDt-Y) — Scalable Parallel Computing Lab, SPCL @ ETH Zurich · 29:29

### Dynamic scheduling and runtime systems *(prerequisite)*
Dynamic scheduling allows a system to adapt task execution order at runtime based on workload and hardware conditions, improving efficiency and responsiveness. Runtime systems implement these strategies to manage resources flexibly during execution.

*How the paper uses it:* DynaFlow uses dynamic, programmable scheduling to adapt execution to varying workloads and hardware contexts.

▶ [OSDI '24 - Llumnix: Dynamic Scheduling for Large Language ...](https://www.youtube.com/watch?v=4qaos-_I3O0) — USENIX · 16:01

### Asynchronous control and data flow *(prerequisite)*
Asynchronous control and data flow techniques enable tasks to proceed independently without waiting for others to complete, allowing overlapping execution and better hardware utilization. This is key for managing complex dependencies in parallel systems.

*How the paper uses it:* DynaFlow's backend manages complex control and data dependencies asynchronously to enable efficient operator overlap.

▶ [Asynchronous Data Transfer | Asyn. Communication Interface ...](https://www.youtube.com/watch?v=t97c2FZoQlU) — Dr. Sapna Katiyar · 27:50

### Machine learning compiler optimizations *(prerequisite)*
ML compiler optimizations transform and schedule ML model code to run efficiently on hardware, leveraging techniques like kernel fusion and graph optimizations. Understanding these helps appreciate how DynaFlow integrates with existing ML compiler backends.

*How the paper uses it:* DynaFlow preserves compatibility with ML compiler optimizations such as CUDA Graphs and TorchInductor in its backend.

▶ [ML for ML Compilers - Mangpo Phothilimthana | Stanford ...](https://www.youtube.com/watch?v=VASg2XNgj-4) — Stanford MLSys Seminars · 58:07

### Intra-device parallelism in ML systems
Intra-device parallelism involves overlapping execution of different ML operators within a single device to improve hardware utilization and throughput. This concept is central to DynaFlow's goal of flexible and transparent operator scheduling.

*How the paper uses it:* DynaFlow enables flexible intra-device parallelism by decoupling execution scheduling from model implementation.

▶ [Alpa: Automated Model-Parallel Deep Learning - Zhuohan Li ...](https://www.youtube.com/watch?v=y1NXHjcl6V0) — Stanford MLSys Seminars · 55:07

### DynaFlow authors talk *(the paper's own talk)*
This talk provides a direct overview from the authors explaining the motivation, design, and benefits of DynaFlow, offering insights into its novel approach to intra-device parallelism in ML systems.

*How the paper uses it:* Hearing from the authors clarifies DynaFlow's contributions and how it achieves flexible, programmable operator scheduling with minimal code changes.

▶ [Dynaflow Overview](https://www.youtube.com/watch?v=Z3QGGl8chMQ) — dyna1955 · 3 years ago

## Already in your library

- [Concurrency Vs Parallelism!](https://www.youtube.com/watch?v=RlM9AfWf1WU) — also for: Understanding Learners’ Problem-Solving Strategies in Concurrent and Parallel Programming: A Game-Based Approach (Bruce W. Char)
- [Understanding Compiler Optimization - Chandler Carruth - Opening Keynote Meeting C++ 2015](https://www.youtube.com/watch?v=FnGCDLhaxKU) — also for: Automatic Data Enumeration for Fast Collections (Simone Campanoni)
- [WiCT Meetup — Saturday, March 14, 2026: Compiler Optimizations for CPU-GPU](https://www.youtube.com/watch?v=02p4PdSCekk) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the core ideas of DynaFlow, a framework for flexible intra-device parallelism in ML systems. The beginner project introduces you to the concept of operator scheduling by simulating a simple dynamic scheduler for overlapping operators. The intermediate project involves reimplementing DynaFlow's core dynamic scheduling mechanism on a smaller ML workload, comparing throughput gains against a baseline static schedule. The advanced project extends DynaFlow by exploring one of its stated future directions: reducing CPU overhead in dynamic scheduling, or adapting programmable scheduling to a new domain such as real-time human-robot interaction.

### Beginner — Simulate Dynamic Operator Scheduling for Overlapping Execution
*Effort: a weekend, ~8 hours*

You build a small Python simulation that models a simple ML operator graph with heterogeneous operators and implements a dynamic scheduler to overlap operator execution within a single device. The simulation will visualize operator execution timelines comparing static sequential scheduling versus dynamic overlapping scheduling.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental conflict between static sequential execution and intra-device parallelism, and how dynamic scheduling can improve hardware utilization by overlapping operators.

**Grounded in:** Identification of the fundamental conflict between static sequential programming models and intra-device parallelism needs, proposing decoupling execution schedule from model implementation.

**Tech stack:** Python 3.11, matplotlib

**Data:** Synthetic operator graph data simulated in code to represent heterogeneous operator resource demands and dependencies.

**Build it:**

1. Define a simple operator graph with nodes representing operators and edges representing dependencies.
2. Implement a static sequential scheduler that executes operators one after another respecting dependencies.
3. Implement a dynamic scheduler that allows overlapping execution of independent operators based on resource availability.
4. Simulate execution timelines for both schedulers and visualize them using matplotlib Gantt charts.
5. Compare total execution time and resource utilization between static and dynamic scheduling.

**Ships as:** A Python script and README showing simulation code, execution timeline visualizations, and a brief explanation of how dynamic scheduling improves intra-device parallelism.

**Stretch goal:** Add a simple annotation interface to mark operators with resource types and constraints, mimicking DynaFlow's frontend annotations.

### Intermediate — Reimplement DynaFlow's Dynamic Scheduling on a Small ML Model
*Effort: 2 weekends, ~20 hours*

You reimplement the core idea of DynaFlow by building a programmable operator scheduler for a small PyTorch model (e.g., ResNet18 on CIFAR-10). You implement a dynamic scheduling backend that overlaps operators asynchronously within a single GPU device and compare throughput against PyTorch's default static execution.

**Why it shows you understood the paper:** This project shows you can translate DynaFlow's decoupling of execution schedule from model implementation into a working prototype, demonstrating throughput improvements and minimal code changes on a real ML workload.

**Grounded in:** Design and implementation of DynaFlow, featuring a programmable frontend for custom parallelism and an efficient backend preserving compatibility with low-level optimizations.

**Tech stack:** Python 3.11, PyTorch, CUDA (via PyTorch)

**Data:** CIFAR-10 dataset, a well-known public image classification dataset used as a substitute for the paper's ML workloads.

**Build it:**

1. Set up a PyTorch training script for ResNet18 on CIFAR-10 with default static operator execution.
2. Implement a dynamic operator scheduler that intercepts operator calls and schedules them asynchronously to overlap execution where possible.
3. Integrate custom memory management to reduce copy overheads during overlapping execution.
4. Measure and compare throughput (images/sec) between static and dynamic scheduling.
5. Document the minimal code changes required to enable dynamic scheduling.

**Verified links from the paper:**

- <https://github.com/uw-syfi/DynaFlow> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with PyTorch code demonstrating dynamic intra-device parallelism, throughput benchmarks, and a README explaining the implementation and results.

**Stretch goal:** Extend the scheduler to support simple operator fusion or splitting strategies to further improve throughput.

### Advanced — Reduce CPU Overhead in Dynamic Scheduling or Adapt DynaFlow to Real-Time Human-Robot Interaction
*Effort: 3+ weeks*

You extend the DynaFlow dynamic scheduler by implementing optimizations to reduce CPU scheduling overhead, such as fallback modes or lightweight scheduling heuristics. Alternatively, you adapt the programmable scheduling abstraction to optimize real-time decision-making pipelines in a simulated human-robot interaction system, focusing on responsiveness and adaptability.

**Why it shows you understood the paper:** This project tackles a stated limitation or future direction of DynaFlow, demonstrating deep comprehension of its architecture and the ability to innovate on its dynamic scheduling substrate or transfer its concepts to a new domain aligned with Professor Wang's research interests.

**Grounded in:** Further improving dynamic scheduling efficiency and reducing CPU overhead; Exploring integration with emerging megakernel techniques and more dynamic runtime adaptations.

**Tech stack:** Python 3.11, PyTorch, CUDA, ROS (Robot Operating System) or a simple robotics simulation environment

**Data:** For the ML scheduling part, CIFAR-10 or a small ML workload; for human-robot interaction, simulated sensor and decision data representing real-time interaction scenarios.

**Build it:**

1. Profile the existing dynamic scheduler to identify CPU overhead bottlenecks.
2. Implement fallback scheduling modes or lightweight heuristics to reduce CPU overhead during operator scheduling.
3. Benchmark throughput and CPU usage before and after optimization.
4. Alternatively, design a programmable scheduling abstraction for a real-time decision pipeline in a human-robot interaction simulation.
5. Implement and evaluate responsiveness and adaptability improvements using the scheduling abstraction.
6. Document the design, implementation, and evaluation results.

**Verified links from the paper:**

- <https://github.com/uw-syfi/DynaFlow> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repo with code, benchmarks, and documentation showing reduced CPU overhead in dynamic scheduling or a novel scheduling abstraction applied to human-robot interaction.

**Stretch goal:** Integrate with TorchInductor or CUDA Graphs to further optimize backend execution or extend to conditional intra-device parallelism strategies.

_The authors did not release their own code for DynaFlow; the intermediate and advanced projects rely on reimplementing core methods from the paper and using the publicly available DynaFlow repository as a reference implementation._
