---
title: "257 · Strata: Hierarchical Context Caching for Long Context Language Model Serving — Scott A. Mahlke"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-scott-a-mahlke"
source_hash: "824e6c6e6a06aff0b21004f42f77274f22cfa5570eb71a7fdb8fd04adc319c22"
sequence: 257
generator: "outreach-garden: managed"
---

# 257 · Strata: Hierarchical Context Caching for Long Context Language Model Serving

## At a glance

- **Professor:** Scott A. Mahlke
- **Institution:** University of Michigan
- **Paper:** [Strata: Hierarchical Context Caching for Long Context Language Model Serving](https://arxiv.org/pdf/2508.18572)
- **Authors:** Zhiqiang Xie, Yuwei An, Vikram Sharma Mailthody, Ziyi Xu, Michael Garland, Scott Mahlke, Christos Kozyrakis, Mark Zhao
- **Year:** 2025

## Paper overview

Strata is a system designed to improve the efficiency of serving large language models (LLMs) with very long input contexts. It addresses the problem of slow data transfers and inefficient scheduling when caching large amounts of context data across different memory types (GPU, CPU, disk). Strata uses GPU-assisted data transfer and intelligent scheduling to reduce latency and increase throughput, enabling faster and more scalable LLM serving for tasks requiring long contexts.

### Why it matters

**Research problem:** Long-context LLMs require caching large key–value (KV) states to avoid recomputation, but the size of these caches exceeds GPU memory capacity, necessitating hierarchical caching across CPU memory and storage. Transferring large cached contexts back to GPUs causes severe performance bottlenecks due to fragmented I/O and ineffective scheduling, leading to loading-bound systems rather than compute-bound.

**Why it matters:** Efficient long-context LLM serving is critical for applications like multi-turn conversations, retrieval-augmented generation, and document-centric tasks. Without efficient caching and data transfer, response latency increases drastically and throughput decreases, limiting practical deployment and user experience.

**Key contributions:**

- A novel GPU-assisted I/O mechanism that enables efficient small, fragmented KV cache transfers with minimal interference to compute.
- Decoupling of GPU and CPU memory layouts to optimize both computation and data transfer efficiency.
- A cache-aware scheduling algorithm that balances computation and data transfer demands, mitigates delay hits, and overlaps I/O stalls with useful computation.
- Implementation of Strata on top of the SGLang framework and deployment in production environments.
- Comprehensive evaluation demonstrating significant improvements over state-of-the-art hierarchical caching systems.

## About the professor

**Scott A. Mahlke** — Professor & Associate Chair, Electrical Engineering and Computer Science Department, University of Michigan.

Research interests: compilers, computer architecture, and high-level synthesis

### Research links

- [Faculty/profile page](http://web.eecs.umich.edu/~mahlke)
- [Professor website](https://web.eecs.umich.edu/~mahlke/#)
- [Lab website](http://www.eecs.umich.edu/acal)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Strata system for hierarchical context caching in long-context LLM serving, start by building foundational knowledge in hierarchical caching systems, GPU-assisted data transfer, cache-aware scheduling algorithms, and memory layout optimization. These prerequisites provide the necessary background on memory hierarchies, efficient data movement, and scheduling techniques. Finally, focus on the core concept by watching the authors' own talk or the most relevant advanced lecture on context caching for LLMs to grasp Strata's novel contributions and implementation details.

### Hierarchical caching systems lecture *(prerequisite)*
Understanding hierarchical caching is essential to grasp how Strata manages large KV caches across multiple memory tiers such as GPU, CPU, and disk. This section covers the organization, principles, and performance trade-offs of cache hierarchies in computer architecture, which underpin Strata's approach to efficient memory management.

*How the paper uses it:* Strata relies on hierarchical caching to store large KV states beyond GPU memory capacity, making this foundational knowledge critical.

▶ [CS6810 -- Lecture 36. Lectures on Cache Hierarchies.](https://www.youtube.com/watch?v=BugqvXP-oUE) — Rajeev Balasubramonian · 12:00

### GPU assisted data transfer lecture *(prerequisite)*
Efficient data transfer between CPU and GPU memory is core to Strata's performance gains. This section introduces GPU-assisted I/O techniques, asynchronous data transfers, and task parallelism that enable high-throughput, low-latency movement of fragmented KV cache data.

*How the paper uses it:* Strata introduces GPU-assisted I/O kernels to achieve nearly 50 GB/s transfer throughput with minimal compute interference.

▶ [Lecture 22 Task parallelism and asynchronous data transfer](https://www.youtube.com/watch?v=yUHhZ02WuFc) — cat blue · 1:25:00

### Cache aware scheduling algorithms lecture *(prerequisite)*
Scheduling algorithms that are aware of cache states and data transfer latencies can significantly improve throughput and reduce redundant computation. This section covers advanced scheduling strategies that balance computation and I/O, which are key to Strata's cache-aware scheduler design.

*How the paper uses it:* Strata's scheduler forms balanced batches and overlaps I/O stalls with decoding to hide latency and improve resource utilization.

▶ [Cache Aware Scheduling - Georgia Tech - Advanced ...](https://www.youtube.com/watch?v=lLT1zGZrilE) — Udacity · 5:54

### Memory layout optimization lecture *(prerequisite)*
Memory layout optimization affects both computation efficiency and data transfer speed. This section discusses how decoupling GPU and CPU memory layouts can optimize bulk transfers and computation separately, a technique central to Strata's design.

*How the paper uses it:* Strata decouples GPU and CPU memory layouts to reduce disk-to-CPU loading latency by up to 4×.

▶ [Week 8: Lecture 6: Memory Layouts and Their Role in Optimizing Computing Performance](https://www.youtube.com/watch?v=o0KYMgx2pic) — NPTEL IIT Bombay · 34:19 · 1 year ago

### Strata hierarchical context caching talk *(the paper's own talk)*
This section focuses on the core concept of the paper: hierarchical context caching for long-context LLM serving. The authors' own talk or a highly relevant advanced lecture provides the most direct and detailed explanation of Strata's novel GPU-assisted I/O, cache-aware scheduling, and memory layout decoupling techniques.

*How the paper uses it:* The authors' talk or a specialized lecture on context caching offers the best insight into Strata's contributions and evaluation results.

▶ [CS6810 -- Lecture 41. Lectures on Cache Hierarchies](https://www.youtube.com/watch?v=2iuNBCBH7I4) — Rajeev Balasubramonian · 13 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding Strata's approach to efficient long-context LLM serving. It starts with memory hierarchy and caching basics, then covers GPU-assisted data transfer and cache-aware scheduling, followed by memory layout optimization, and concludes with the core concept of hierarchical context caching in LLMs as implemented by Strata.

### Hierarchical caching systems lecture *(prerequisite)*
Learn how computer systems organize multiple layers of memory (like cache, RAM, and disk) to balance speed, size, and cost. Understanding this hierarchy helps grasp why Strata needs to manage large KV caches across GPU, CPU, and disk efficiently.

*How the paper uses it:* Strata relies on hierarchical caching to store large KV states beyond GPU memory capacity.

▶ [COS217 Spring 2020 Lecture 20: Storage Hierarchy and ...](https://www.youtube.com/watch?v=1X952-TLj50) — Princeton COS 217 · 44:49

### GPU assisted data transfer lecture *(prerequisite)*
Explore how GPUs can be used not just for computation but also to accelerate data movement, especially for fragmented or small data chunks. This knowledge is key to understanding Strata's GPU-assisted I/O mechanism that speeds up cache transfers.

*How the paper uses it:* Strata uses GPU-assisted I/O to efficiently transfer fragmented KV cache data with minimal compute interference.

▶ [Nvidia CUDA in 100 Seconds](https://www.youtube.com/watch?v=pPStdjuYzSI) — Fireship · 2 years ago

### Cache aware scheduling algorithms lecture *(prerequisite)*
Understand scheduling strategies that consider cache states and data locality to optimize resource usage and reduce latency. This helps explain how Strata’s scheduler balances computation and data transfer to hide I/O stalls.

*How the paper uses it:* Strata implements a cache-aware scheduler to form balanced batches and overlap I/O stalls with decoding.

▶ [Cache Aware Scheduling - Georgia Tech - Advanced ...](https://www.youtube.com/watch?v=lLT1zGZrilE) — Udacity · 5:54

### Memory layout optimization lecture *(prerequisite)*
Learn why and how different memory layouts affect data transfer and computation efficiency. This is crucial for understanding Strata’s decoupling of GPU and CPU memory layouts to optimize both operations independently.

*How the paper uses it:* Strata decouples GPU and CPU memory layouts to reduce disk-to-CPU loading latency and improve transfer efficiency.

▶ [Week 8: Lecture 6: Memory Layouts and Their Role in Optimizing Computing Performance](https://www.youtube.com/watch?v=o0KYMgx2pic) — NPTEL IIT Bombay · 34:19 · 1 year ago

### Strata hierarchical context caching talk *(the paper's own talk)*
Dive into the specific system design and innovations of Strata, including its GPU-assisted I/O, cache-aware scheduling, and hierarchical caching for long-context LLM serving. This talk ties together all prior concepts in the context of the paper’s contributions.

*How the paper uses it:* This talk directly explains Strata’s approach to hierarchical context caching and its performance benefits.

▶ [CONTEXT CACHING for Faster and Cheaper Inference](https://www.youtube.com/watch?v=YeAAUghx_Xs) — Trelis Research · 1 year ago

## Already in your library

- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate understanding of Strata’s hierarchical context caching system for long-context LLM serving. The beginner project reproduces a core mechanism of GPU-assisted I/O data transfer on a small scale using familiar tools. The intermediate project implements and evaluates the cache-aware scheduling algorithm on a simplified simulated KV cache workload, comparing throughput and latency against a naive baseline. The advanced project extends Strata’s GPU-assisted I/O and scheduling ideas to a distributed multi-node setting, addressing one of the paper’s stated limitations and exploring new system design challenges.

### Beginner — Simulate GPU-Assisted Fragmented KV Cache Transfers
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of fragmented key-value cache data transfers between CPU and GPU memory using Python and CUDA (via PyCUDA or Numba). The project mimics Strata’s GPU-assisted I/O mechanism by launching concurrent GPU kernels to transfer small chunks of data, measuring throughput and latency under different fragmentation patterns.

**Why it shows you understood the paper:** This project demonstrates you understand the core GPU-assisted I/O mechanism that enables efficient fragmented KV cache transfers with minimal compute interference, a key contribution of Strata.

**Grounded in:** Strata leverages GPU-assisted I/O by launching CUDA kernels that load small chunks of data concurrently, achieving nearly 50 GB/s throughput with minimal interference (Section 4.2).

**Tech stack:** Python 3.11, Numba or PyCUDA, Jupyter Notebook

**Data:** Synthetic fragmented KV cache data simulated as multiple small byte arrays representing cache chunks.

**Build it:**

1. Set up a Python environment with Numba or PyCUDA for GPU kernel programming.
2. Generate synthetic fragmented KV cache data as multiple small arrays in CPU memory.
3. Implement GPU kernels that concurrently transfer these small chunks to GPU memory.
4. Measure and log transfer throughput and latency under varying chunk sizes and fragmentation.
5. Visualize results to show transfer efficiency and minimal compute interference.

**Ships as:** A Jupyter notebook with code, plots of transfer throughput/latency, and explanations linking the simulation to Strata’s GPU-assisted I/O mechanism.

**Stretch goal:** Add a simple CPU compute task running concurrently to demonstrate minimal interference during GPU-assisted I/O.

### Intermediate — Implement Cache-Aware Scheduler for Simulated Long-Context LLM Serving
*Effort: 2 weekends, ~20 hours*

You implement a simplified cache-aware scheduling algorithm inspired by Strata’s approach to balance computation and data transfer tasks. Using Python and simulated workloads representing KV cache loads and decoding tasks, you compare your scheduler’s throughput and latency against a naive FIFO baseline.

**Why it shows you understood the paper:** This project shows you grasp Strata’s core scheduling innovation that forms balanced batches to hide I/O latency and overlap stalls with useful computation, improving resource utilization and throughput.

**Grounded in:** The scheduler forms balanced batches that pair sufficient prefill computation with loading tasks and inserts complementary decoding tasks to overlap unavoidable stalls (Section 4.3).

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic workload traces simulating KV cache load requests and decoding tasks with timing and size parameters.

**Build it:**

1. Design a workload simulator that generates sequences of KV cache load and decoding tasks with timing.
2. Implement a naive FIFO scheduler that executes tasks in arrival order and measures throughput and latency.
3. Implement a cache-aware scheduler that forms balanced batches pairing load and compute tasks to hide I/O latency.
4. Run experiments comparing throughput, latency, and redundant computation between schedulers.
5. Plot and analyze results to demonstrate improvements from cache-aware scheduling.

**Ships as:** A Python project with scheduler implementations, workload simulation, performance plots, and a README explaining the scheduler design and evaluation.

**Stretch goal:** Extend the scheduler to track transient nodes and defer susceptible requests to reduce redundant computation as in Strata.

### Advanced — Extend Strata’s GPU-Assisted I/O and Scheduling to Distributed Multi-Node LLM Serving
*Effort: 3+ weeks*

You design and prototype an extension of Strata’s GPU-assisted I/O and cache-aware scheduling techniques to a distributed multi-node environment where KV cache is disaggregated across nodes. You simulate or implement a multi-node scheduler that coordinates data transfers and computation across GPUs and CPUs on different machines, addressing network transfer overheads and global resource coordination.

**Why it shows you understood the paper:** This project tackles one of Strata’s stated limitations and future directions by exploring how to scale hierarchical caching and scheduling beyond a single instance, demonstrating deep comprehension and original system design thinking.

**Grounded in:** Strata focuses on memory management and scheduling within single compute instances and does not inherently address distributed or disaggregated KV cache systems. Future directions include integration with large-scale disaggregated KV cache memory pools and global resource coordinators.

**Tech stack:** Python 3.11, gRPC or ZeroMQ for inter-node communication, Numba or PyCUDA for GPU kernels, Docker for multi-node simulation

**Data:** Synthetic KV cache access patterns and simulated networked multi-node environment; no public dataset available.

**Build it:**

1. Design a multi-node architecture simulating disaggregated KV cache across CPU/GPU nodes with networked communication.
2. Implement GPU-assisted I/O kernels for intra-node transfers and extend with simulated inter-node data transfer over network.
3. Develop a global cache-aware scheduler coordinating batch formation and task scheduling across nodes to hide I/O and network latency.
4. Simulate workloads with long-context KV cache access patterns and measure throughput and latency improvements over naive distributed scheduling.
5. Document design decisions, challenges, and evaluation results in a detailed README.

**Verified links from the paper:**

- <https://github.com/InternLM/lmdeploy> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A multi-node simulation prototype with code, performance evaluation, and a comprehensive report discussing extension challenges and potential real-world applicability.

**Stretch goal:** Prototype integration with a third-party LLM serving toolkit such as LMDeploy for baseline comparison.

_No authors' own code or datasets for Strata are publicly available; synthetic data and workload simulation are necessary to approximate the paper’s mechanisms and evaluation._
