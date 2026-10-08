---
title: "601 · CortenMM: Efficient Memory Management with Strong Correctness Guarantees — Yuval Tamir"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuval-tamir"
source_hash: "16f7ccc69d9a9edcf679ec8523fa6bded305571cf676f1671ecb49685cc6d192"
sequence: 601
generator: "outreach-garden: managed"
---

# 601 · CortenMM: Efficient Memory Management with Strong Correctness Guarantees

## At a glance

- **Professor:** Yuval Tamir
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [CortenMM: Efficient Memory Management with Strong Correctness Guarantees](https://doi.org/10.1145/3731569.3764836)
- **Authors:** Junyang Zhang, Xiangcan Xu, Yonghao Zou, Zhe Tang, Xinyi Wan, Kang Hu, Siyuan Wang, Wenbo Xu, Di Wang, Hao Chen, Lin Huang, Shoumeng Yan, Yuval Tamir, Yingwei Luo, Xiaolin Wang, Huashan Yu, Zhenlin Wang, Hongliang Tian, Diyu Zhou
- **Year:** 2025

## Paper overview

CortenMM is a new memory management system designed to improve both performance and correctness in operating systems by eliminating the traditional software-level abstraction layer. It uses a single-level design focused on hardware page tables and introduces a transactional interface with locking protocols to manage memory operations atomically and efficiently. The system is formally verified for correctness and outperforms Linux significantly on real-world benchmarks.

### Why it matters

**Research problem:** Modern memory management systems suffer from poor performance and subtle concurrency bugs due to the complexity of synchronizing two levels of abstraction: a software-level abstraction (like VMA trees) and a hardware-level abstraction (page tables). This complexity leads to scalability bottlenecks and security vulnerabilities.

**Why it matters:** Memory management is critical for operating system performance and security, especially in multicore environments. Concurrency bugs can cause severe vulnerabilities, and performance bottlenecks slow down important real-world applications such as Android app startup and thread creation in Google Fibers.

**Key contributions:**

- Insight that the root causes of poor performance and correctness in memory management lie in the two levels of abstraction, and that the software-level abstraction is unnecessary for modern OSes.
- Design and implementation of a single-level abstraction memory management system (CortenMM) that eliminates the software-level abstraction.
- Development of a formally verified transactional interface and locking protocols for programming the MMU with strong correctness guarantees.
- Demonstration that CortenMM outperforms Linux by 1.2× to 26× on real-world benchmarks.
- Use of Rust and formal verification to ensure memory safety, data-race freedom, and correctness of concurrency control.

## About the professor

**Yuval Tamir** — Associate Professor, Computer Science Department, Univ. of California - Los Angeles.

Research interests: Systems: parallel, distributed, and networked systems (software & hardware), resilient computing (hardware & software), virtualization, operating systems, network design automation, multicore architectures, on-chip and off-chip interconnection networks and switches

### Research links

- [Faculty/profile page](https://samueli.ucla.edu/people/yuval-tamir)
- [Identity evidence](http://www.cs.ucla.edu/~tamir)
- [Resolved homepage](http://web.cs.ucla.edu/~tamir)
- [Lab website](http://web.cs.ucla.edu/csl/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Operating Systems Memory Management
**The paper assumes:** operating systems memory management, virtual memory, page tables, concurrency control in OS
**Already in this field?** Skip this entirely if you already have a solid understanding of operating systems memory management concepts including virtual memory and page tables.

This background selection is tailored to provide a solid understanding of operating systems memory management, focusing on virtual memory, page tables, and concurrency control, which are central to the CortenMM paper. The rigorous course option offers a deep, structured university-level treatment, while the fast track provides a concise, clear introduction suitable for quickly grasping the core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Operating Systems | IIT Madras](https://www.youtube.com/playlist?list=PLyqSpQzTE6M9SYI5RqwFYtFYab94gJpWk) — NPTEL-NOC IITM · 39 videos · 14.3h across 39 episodes

**Watch only this:** Episodes #6 Memory Management Introduction, #7 Virtual Memory, #8 MMU Mapping, and #10 Memory Management in xv6, about 1.5 hours total — these cover the fundamentals of OS memory management, virtual memory concepts, hardware MMU interaction, and a practical OS implementation example.

*Why it unblocks this paper:* The 'Introduction to Operating Systems | IIT Madras' course is a comprehensive university-level series that covers memory management in detail, including virtual memory, MMU mapping, and concurrency aspects relevant to CortenMM's focus on hardware page tables and transactional memory operations.

*If you want all of it:* 14.3 hours across 39 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Memory Management | OS | Operating Systems | Aktu](https://www.youtube.com/playlist?list=PL8tc66sMn9Kjt2Wf5H9O-TMqZFQukoCQ1) — Anjali Sharma · 17 videos · 4.3h across 17 episodes

**Watch only this:** Parts 1, 6, 7, 8, 10, 13, and 14, about 1.75 hours total — these episodes introduce memory management basics, fragmentation, paging, multi-level paging, protection, virtual memory, and page faults, giving a solid quick overview.

*Why it unblocks this paper:* The 'Memory Management | OS | Operating Systems | Aktu' playlist provides concise and clear explanations of memory management topics including paging, segmentation, virtual memory, and page replacement algorithms, which align well with the core concepts needed to understand CortenMM's design and performance improvements.

*If you want all of it:* 4.3 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CortenMM paper, start with foundational knowledge on hardware page tables and memory management, as CortenMM relies exclusively on hardware-level multi-level radix tree page tables. Next, study transactional memory concurrency control to grasp the atomic memory operations and concurrency correctness guarantees central to CortenMM. Then, explore formal verification of concurrent systems to appreciate the rigorous correctness proofs behind CortenMM's concurrency control. Also, learn about Rust programming for memory safety, since CortenMM is implemented mostly in safe Rust to ensure data-race freedom. Finally, focus on the core innovation of CortenMM: the single-level memory management abstraction that eliminates the software-level abstraction, and if available, the authors' own talk on the paper for direct insights.

### Hardware page tables memory management *(prerequisite)*
Understanding the structure and operation of hardware page tables is essential because CortenMM eliminates the software-level abstraction and relies solely on hardware multi-level radix tree page tables. This foundational knowledge enables comprehension of how CortenMM programs the MMU directly and achieves performance and correctness improvements.

*How the paper uses it:* CortenMM relies exclusively on hardware-level multi-level radix tree page tables common in modern ISAs.

▶ [Memory management Part 6 Structure of page tables](https://www.youtube.com/watch?v=Qjm2crJoOXA) — SG Academy · 18:42 · 6 years ago

### Transactional memory concurrency control *(prerequisite)*
Transactional memory and concurrency control concepts are critical to understanding how CortenMM achieves atomic memory operations and strong correctness guarantees. Learning about optimistic concurrency control and transactional memory implementations provides the background to appreciate CortenMM's transactional interface and locking protocols.

*How the paper uses it:* CortenMM introduces a transactional interface with locking protocols to program the MMU atomically and efficiently.

▶ [Lecture 14: Optimistic Concurrency Control](https://www.youtube.com/watch?v=Cw6Nj2evjSs) — MIT 6.824: Distributed Systems · 1:22:37 · 6 years ago

### Formal verification concurrent systems *(prerequisite)*
Formal verification techniques for concurrent systems underpin CortenMM's guarantees of correctness and data-race freedom. Understanding formal methods and verification frameworks for concurrent programs helps grasp the significance of CortenMM's formally verified concurrency code and locking protocols.

*How the paper uses it:* CortenMM is formally verified using the Verus verifier to ensure synchronization correctness.

▶ [Modular verification of concurrent programs with heap](https://www.youtube.com/watch?v=mKVhfJZygNY) — Microsoft Research · 58:29 · 9 years ago

### Rust programming memory safety *(prerequisite)*
Rust's memory safety and concurrency features are fundamental to CortenMM's implementation. Learning about Rust's approach to memory and thread safety clarifies how CortenMM achieves memory safety and data-race freedom in a systems programming context.

*How the paper uses it:* CortenMM is implemented mostly in safe Rust to ensure memory safety and data-race freedom.

▶ [Keynote: Rust is not about memory safety - Helge Penne - NDC TechTown 2025](https://www.youtube.com/watch?v=ngTZN09poqk) — NDC Conferences · 46:06 · 7 months ago

### Single-level memory management abstraction
This concept is the core innovation of CortenMM, which eliminates the traditional software-level abstraction and relies solely on hardware page tables. Understanding single-level memory management abstraction is key to appreciating how CortenMM achieves simplicity, performance, and correctness improvements over conventional two-level designs.

*How the paper uses it:* CortenMM eliminates the software-level abstraction to achieve simplicity and performance.

▶ [Elsewhere Memory (C++20 Abstract Machine) + Virtual Memory - Niall Douglas [ACCU 2019]](https://www.youtube.com/watch?v=Djw6aY0VhwI) — ACCU Conference · 1:23:06 · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the CortenMM paper, start by learning the fundamentals of hardware page tables and virtual memory, as CortenMM relies solely on hardware-level page tables. Next, grasp the basics of transactional memory and concurrency control, which underpin CortenMM's atomic memory operations and correctness guarantees. Then, explore Rust's memory safety features since the system is implemented in Rust for safe concurrency. Finally, study the core innovation of CortenMM: the single-level memory management abstraction that eliminates the traditional software-level abstraction for improved performance and correctness.

### Hardware page tables memory management *(prerequisite)*
Hardware page tables are the data structures used by the CPU's memory management unit (MMU) to translate virtual addresses to physical addresses. Understanding how multi-level radix tree page tables work is essential because CortenMM builds its memory management directly on this hardware abstraction, eliminating the software-level layer.

*How the paper uses it:* CortenMM eliminates the software-level abstraction and relies solely on hardware multi-level radix tree page tables common in modern ISAs.

▶ [Memory management Part 6 Structure of page tables](https://www.youtube.com/watch?v=Qjm2crJoOXA) — SG Academy · 18:42 · 6 years ago

### Transactional memory concurrency control *(prerequisite)*
Transactional memory is a concurrency control mechanism that allows multiple memory operations to execute atomically as a single transaction, simplifying synchronization. Learning the basics of transactional memory helps understand how CortenMM ensures atomic and correct memory operations with its transactional interface and locking protocols.

*How the paper uses it:* CortenMM introduces a transactional interface that atomically executes memory operations with scalable locking protocols to ensure correctness.

▶ [Stanford CS149 I Parallel Computing I 2023 I Lecture 16 - Transactional Memory 1](https://www.youtube.com/watch?v=rFFf3WIJ7BA) — Stanford Online · 1:20:21 · 1 year ago

### Rust programming memory safety *(prerequisite)*
Rust is a systems programming language designed to guarantee memory safety and prevent data races at compile time. Understanding Rust's safety features provides insight into how CortenMM achieves safe concurrency and memory safety in its implementation.

*How the paper uses it:* CortenMM is implemented mostly in safe Rust to ensure memory safety and data-race freedom.

▶ [Chandler Carruth: Memory Safety Everywhere with Both Rust and Carbon | RustConf 2025](https://www.youtube.com/watch?v=FYLuom6gg_s) — Rust Foundation · 37:27 · 10 months ago

### Single-level memory management abstraction
Traditional operating systems use a two-level abstraction for memory management: a software-level structure and hardware page tables. CortenMM's key innovation is removing the software-level abstraction, simplifying concurrency control and improving performance by working directly with hardware page tables.

*How the paper uses it:* CortenMM's central innovation is eliminating the software-level abstraction to achieve simplicity, correctness, and performance improvements.

▶ [Elsewhere Memory (C++20 Abstract Machine) + Virtual Memory - Niall Douglas [ACCU 2019]](https://www.youtube.com/watch?v=Djw6aY0VhwI) — ACCU Conference · 1:23:06 · 7 years ago

## Already in your library

- [https://www.youtube.com › watch?v=9OLWCBGNI68](https://www.youtube.com/watch?v=9OLWCBGNI68) — also for: LiteTM: Reducing Transactional State Overhead (T. N. Vijaykumar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of CortenMM's core ideas and contributions. The beginner project focuses on simulating and visualizing the core concept of single-level memory management abstraction and transactional locking. The intermediate project involves reimplementing the transactional interface and locking protocol on a simplified multi-level radix tree page table model, benchmarking it against a naive locking baseline. The advanced project extends CortenMM's design by exploring NUMA-aware memory management policies, addressing one of the paper's stated future directions.

### Beginner — Simulate Single-Level Memory Management with Transactional Locking
*Effort: a weekend, ~8 hours*

You build a simplified simulation of a multi-level radix tree page table representing virtual memory mappings, implementing a basic transactional interface with locking to perform atomic memory operations. The simulation visualizes how eliminating the software-level abstraction simplifies concurrency control and improves atomicity.

**Why it shows you understood the paper:** This project concretely demonstrates the paper's insight that removing the software-level abstraction reduces complexity and concurrency bugs, and shows how transactional locking ensures atomic memory operations.

**Grounded in:** Insight that the root causes of poor performance and correctness in memory management lie in the two levels of abstraction, and that the software-level abstraction is unnecessary for modern OSes.

**Tech stack:** JavaScript, React

**Data:** No external data needed; you simulate virtual memory operations and locking behavior.

**Build it:**

1. Implement a simplified multi-level radix tree data structure to represent page tables in JavaScript.
2. Create a transactional interface that batches memory operations and applies them atomically with locking.
3. Visualize the page table state and locking status before, during, and after transactions using React.
4. Simulate concurrent transactions and show how locking prevents race conditions.
5. Document how this simulation reflects the paper's single-level abstraction and transactional interface.

**Ships as:** A GitHub repo with a React app that simulates and visualizes transactional memory management on a radix tree, with a README explaining the connection to CortenMM's design.

**Stretch goal:** Add a comparison visualization showing how a two-level abstraction with software-level locking complicates concurrency control.

### Intermediate — Reimplement CortenMM's Transactional Interface and Locking Protocol
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of CortenMM's transactional interface and scalable locking protocols for programming a multi-level radix tree page table in Rust. You benchmark your implementation against a naive coarse-grained locking baseline on synthetic memory operation workloads, measuring throughput and atomicity.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's core concurrency control mechanism and quantitatively evaluate its performance benefits, demonstrating comprehension of the formal verification and scalability claims.

**Grounded in:** Design and implementation of a single-level abstraction memory management system (CortenMM) that eliminates the software-level abstraction; Development of a formally verified transactional interface and locking protocols for programming the MMU with strong correctness guarantees.

**Tech stack:** Rust 1.70+, Cargo, lmbench for synthetic workload generation

**Data:** Synthetic workloads simulating memory operations on a multi-level radix tree page table; lmbench used as a baseline benchmarking tool.

**Build it:**

1. Implement a multi-level radix tree data structure in Rust to model page tables.
2. Develop a transactional interface that applies memory operations atomically with fine-grained locking.
3. Implement a naive baseline with coarse-grained locking for comparison.
4. Generate synthetic workloads simulating concurrent memory operations using lmbench or custom Rust code.
5. Benchmark throughput and latency of both implementations under varying concurrency levels.
6. Write a README reporting results and relating them to the paper's performance claims.

**Verified links from the paper:**

- <https://github.com/intel/lmbench> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Rust GitHub repo with implementations of transactional and naive locking memory management, benchmark scripts, and a report comparing performance.

**Stretch goal:** Add formal verification annotations or comments inspired by Verus to document correctness assumptions.

### Advanced — Extend CortenMM with NUMA-Aware Memory Management Policies
*Effort: 3+ weeks*

You extend the single-level memory management abstraction by integrating NUMA (Non-Uniform Memory Access) policies into the transactional interface and locking protocols. You simulate or prototype memory placement optimizations on a multi-core NUMA system model, measuring performance improvements and correctness.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of CortenMM, demonstrating your ability to extend the system design to a complex real-world scenario and evaluate its impact on scalability and correctness.

**Grounded in:** Currently lacks NUMA policy support, which can be addressed with further engineering; Incorporate NUMA policies to optimize memory placement on NUMA systems.

**Tech stack:** Rust 1.70+, Cargo, Linux NUMA tools (numactl) for simulation or measurement

**Data:** Synthetic or simulated NUMA memory operation workloads; optionally use Linux NUMA tools to profile on a NUMA-enabled machine if available.

**Build it:**

1. Study NUMA architectures and how memory placement affects performance.
2. Extend your Rust multi-level radix tree and transactional interface to include NUMA-aware memory allocation policies.
3. Implement locking protocols that consider NUMA locality to reduce cross-node contention.
4. Simulate or run benchmarks on a NUMA system or simulated environment with synthetic workloads.
5. Measure and compare performance and correctness against a NUMA-unaware baseline.
6. Document your design decisions, challenges, and results in a detailed README.

**Ships as:** A Rust GitHub repo with NUMA-aware memory management extensions, benchmark scripts, and a comprehensive report linking your work to CortenMM's future directions.

**Stretch goal:** Explore formal verification of NUMA-aware locking protocols using Verus or similar tools.
