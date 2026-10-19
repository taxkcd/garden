---
title: "792 · Allocation Policies Matter for Hybrid Memory Systems — Janki Bhimani"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-janki-bhimani"
source_hash: "494bfbedf271bb3010162478af88b4c8ba755395f6d7c3b290c2c14ab811a767"
sequence: 792
generator: "outreach-garden: managed"
---

# 792 · Allocation Policies Matter for Hybrid Memory Systems

## At a glance

- **Professor:** Janki Bhimani
- **Institution:** Florida International University
- **Paper:** [Allocation Policies Matter for Hybrid Memory Systems](https://dl.acm.org/doi/pdf/10.1145/3588195.3595946)
- **Authors:** Adnan Maruf, Manoj Saha, Daniel Carlson, Ashikee Ghosh, Janki Bhimani, Raju Rangaswami
- **Year:** 2023

## Paper overview

This paper studies how different policies for allocating new memory pages in hybrid memory systems affect system performance. It shows that the commonly used policy of filling fast DRAM first and then slower persistent memory is not always optimal. By designing and testing three different allocation policies in a real system, the authors demonstrate that choosing the right policy can improve performance by up to 17 times for some workloads.

### Why it matters

**Research problem:** Existing tiered memory systems use a default DRAM-Preferred allocation policy that allocates new pages to DRAM until full, then to slower persistent memory. This approach can cause high access latencies and overhead due to frequent page migrations. The problem is to find better page allocation policies that reduce latency and migration overhead to improve overall system performance.

**Why it matters:** Hybrid memory systems combining DRAM and persistent memory are increasingly important for high-performance computing and data centers. Optimizing how memory pages are allocated and migrated can significantly impact workload performance and resource efficiency. Improving allocation policies can reduce latency and overhead, enabling better use of emerging memory technologies.

**Key contributions:**

- Identification that page allocation policy significantly affects hybrid memory system performance, a previously unexplored aspect.
- Design and implementation of three distinct page allocation policies integrated with dynamic tiering in Linux kernel.
- Comprehensive evaluation of these policies using real workloads and benchmarks on a hybrid memory system.
- Demonstration that allocation policies can improve performance by up to 17x depending on workload.
- Observation that no single allocation policy is best for all workloads, highlighting the need for workload-aware policies.

## About the professor

**Janki Bhimani** — Professor and Director, Data Management Research Lab (DaMRL), School of Computing and Information Science, Florida International University.

Research interests: Memory and Storage Systems; Cloud Computing; Performance Modeling and Prediction; Capacity Planning; Resource Management; Applied Machine Learning; Datacenter Endurance and Reliability Management; High-Performance Computing;

### Research links

- [Faculty/profile page](https://damrl.cs.fiu.edu/janki-bhimani)
- [Lab website](https://damrl.cs.fiu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Operating Systems Memory Management
**The paper assumes:** operating systems memory management, virtual memory, page allocation policies, memory tiering, and page migration mechanisms
**Already in this field?** Skip this entirely if you already have a solid understanding of operating systems memory management concepts including virtual memory and page allocation.

To understand the paper on allocation policies in hybrid memory systems, a solid grasp of operating systems memory management concepts such as page allocation, migration, and virtual memory hierarchy is essential. The rigorous course option provides a deep, structured university-level lecture series on operating systems memory management, while the fast track offers a concise, focused playlist covering core memory management topics quickly and clearly. Choose the course for a thorough foundation and the fast track for a quicker, practical overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Memory Management | OS | Operating Systems | Aktu](https://www.youtube.com/playlist?list=PL8tc66sMn9Kjt2Wf5H9O-TMqZFQukoCQ1) — Anjali Sharma · 17 videos · 4.3h across 17 episodes

**Watch only this:** Episodes 1 through 14, about 3.5 hours — covering Introduction to Memory Management, Memory Allocation Techniques, Paging, Segmentation, Virtual Memory, and Page Fault handling to quickly grasp key OS memory management concepts.

*Why it unblocks this paper:* This concise playlist by Anjali Sharma provides clear, focused explanations of memory management concepts including memory allocation techniques, paging, segmentation, virtual memory, and page replacement algorithms, giving a quick yet solid foundation for understanding the paper's focus on allocation policies and migration overhead.

*If you want all of it:* About 4.3 hours across 17 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Allocation Policies Matter for Hybrid Memory Systems," start with foundational knowledge of hybrid memory systems and memory page allocation, which are essential to grasp the hardware and OS-level context. Then, study dynamic memory tiering as it relates to managing data movement between memory tiers. Finally, focus on the paper's core concept of hybrid memory allocation policies, selecting the best video that directly addresses the authors' approach and findings.

### Hybrid memory systems *(prerequisite)*
This section covers the foundational understanding of hybrid memory systems combining DRAM and persistent memory hardware. It provides the necessary background on the architecture and challenges of hybrid memory, which is crucial to appreciate the context and motivation of the paper.

*How the paper uses it:* The paper studies allocation policies in hybrid memory systems that combine DRAM and persistent memory.

▶ [Stanford Seminar - Rethinking Memory System Design for Data-Intensive Computing](https://www.youtube.com/watch?v=F7xZLNMIY1E) — Stanford Online · 1:19:05 · 11y ago

### Memory page allocation *(paper-talk search result; attribution unverified)*
This section explains core operating system concepts underlying how memory pages are assigned to physical memory, including paging and allocation strategies. Understanding these mechanisms is essential to grasp how allocation policies impact performance in hybrid memory systems.

*How the paper uses it:* The paper investigates different page allocation policies and their impact on system performance.

▶ [CS350 Operating Systems - Lecture 9: Memory Allocation](https://www.youtube.com/watch?v=sn6Fu9uZ_DA) — Ali Mashtizadeh · 44:47 · 4y ago

### Dynamic memory tiering *(prerequisite)*
Dynamic memory tiering is a key technique for managing data movement between memory tiers in hybrid systems. This section provides insight into how tiering systems operate, which is necessary to understand the interaction between allocation policies and dynamic tiering in the paper.

*How the paper uses it:* The paper integrates allocation policies with a state-of-the-art dynamic tiering system in Linux.

▶ [Memory tiering - Jerome Glisse](https://www.youtube.com/watch?v=rqKlXwkpMEM) — Linux Plumbers Conference · 30:21 · 3y ago

### Hybrid memory allocation policies *(paper-talk search result; attribution unverified)*
This core section focuses on the paper's central topic: different page allocation strategies in hybrid memory systems. It covers the design, implementation, and evaluation of allocation policies that significantly affect performance.

*How the paper uses it:* The paper designs and evaluates three distinct page allocation policies for hybrid memory systems.

▶ [\[vLLM Office Hours #30\] Hybrid Memory Allocator Architecture in vLLM](https://www.youtube.com/watch?v=0cUFUtNW_S8) — Red Hat · 57:15 · Streamed 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on allocation policies in hybrid memory systems, start by learning the basics of memory page allocation and memory management in operating systems, which are foundational to how memory is assigned and managed. Next, build an understanding of hybrid memory systems that combine fast DRAM and slower persistent memory, followed by dynamic memory tiering techniques that manage data movement between these memory types. Finally, focus on the core concept of hybrid memory allocation policies, which directly relates to the paper's investigation of different page allocation strategies and their performance impacts.

### Memory page allocation *(prerequisite)*
Memory page allocation is how an operating system assigns fixed-size blocks of memory (pages) to processes. Understanding paging, virtual memory, and allocation strategies is essential to grasp how memory is managed efficiently and how different policies affect performance.

*How the paper uses it:* The paper studies how different page allocation policies affect performance in hybrid memory systems.

▶ [L-5.9: What is Paging | Memory management | Operating System](https://www.youtube.com/watch?v=6c-mOFZwP_8) — Gate Smashers · 25:54 · 8y ago

### Hybrid memory systems *(prerequisite)*
Hybrid memory systems combine fast volatile memory (DRAM) with slower but larger persistent memory (like Intel Optane) to balance performance and capacity. Understanding the hardware and system-level challenges of managing these tiers is key to appreciating why allocation policies matter.

*How the paper uses it:* The paper focuses on hybrid systems combining DRAM and persistent memory and how allocation policies impact their performance.

▶ [Stanford Seminar - Rethinking Memory System Design for Data-Intensive Computing](https://www.youtube.com/watch?v=F7xZLNMIY1E) — Stanford Online · 1:19:05 · 11y ago

### Dynamic memory tiering *(prerequisite)*
Dynamic memory tiering is the technique of moving data between different memory tiers (fast and slow) based on usage patterns to optimize performance and resource utilization. It is a critical mechanism underlying the paper's evaluation of allocation policies integrated with dynamic tiering.

*How the paper uses it:* The authors implement allocation policies integrated with a dynamic tiering system to evaluate their impact.

▶ [Memory tiering - Jerome Glisse](https://www.youtube.com/watch?v=rqKlXwkpMEM) — Linux Plumbers Conference · 30:21 · 3y ago

### Hybrid memory allocation policies
Hybrid memory allocation policies determine where new memory pages are allocated in a system with multiple memory types. Different policies (e.g., DRAM-Preferred, DRAM-Always, PM-Preferred) affect latency and migration overhead, directly influencing system performance.

*How the paper uses it:* The core contribution of the paper is designing and evaluating three distinct page allocation policies for hybrid memory systems.

▶ [L-5.5: First Fit, Next Fit, Best Fit, Worst fit Memory Allocation | Memory Management | OS](https://www.youtube.com/watch?v=N3rG_1CEQkQ) — Gate Smashers · 16:22 · 8y ago

## Already in your library

- [12. Parallel Storage Allocation](https://www.youtube.com/watch?v=d5e_YJGXXFU) — also for: BootSeer: Analyzing and Mitigating Initialization Bottlenecks in Large-Scale LLM Training (Gene Cooperman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and demonstrating the impact of page allocation policies in hybrid memory systems as studied in the paper. The beginner project reproduces a key performance comparison of allocation policies using simulated data and simple metrics. The intermediate project implements and evaluates the core allocation policies on a public cache trace dataset, comparing their performance impact. The advanced project extends the paper by designing and testing an adaptive allocation policy that dynamically selects policies based on workload characteristics, addressing a key future direction.

### Beginner — Simulate and Compare Hybrid Memory Allocation Policies
*Effort: a weekend, ~8 hours*

You build a simple simulation model of a hybrid memory system with DRAM and persistent memory tiers. Implement the three allocation policies (DRAM-Preferred, DRAM-Always, PM-Preferred) as described in the paper. Run synthetic workloads with configurable access patterns to measure page migration counts and average access latency under each policy.

**Why it shows you understood the paper:** This project shows you understand the fundamental differences between the allocation policies and their impact on migration overhead and latency, reproducing the paper's key insight that allocation policy significantly affects performance.

**Grounded in:** Identification that page allocation policy significantly affects hybrid memory system performance, a previously unexplored aspect.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic workload traces generated to mimic frequent and infrequent page accesses, simulating the paper's workload characteristics.

**Build it:**

1. Implement a simple hybrid memory simulator with two tiers: DRAM and persistent memory, each with fixed capacity.
2. Implement the three allocation policies: DRAM-Preferred, DRAM-Always, and PM-Preferred, controlling where new pages are allocated.
3. Generate synthetic workloads with configurable access frequencies and patterns to simulate hot and cold pages.
4. Run simulations to measure total page migrations and average access latency for each policy under different workloads.
5. Plot and compare the results to highlight performance differences between policies.

**Ships as:** A GitHub repository with the simulator code, synthetic workload generator, plots comparing allocation policies, and a README explaining the simulation and results.

**Stretch goal:** Add a simple visualization of page migrations over time to better illustrate migration overhead dynamics.

### Intermediate — Implement and Evaluate Allocation Policies on Twitter Cache Trace
*Effort: 2 weekends, ~20 hours*

You reimplement the three allocation policies (DRAM-Preferred, DRAM-Always, PM-Preferred) in a memory tiering simulator and evaluate their performance using the Twitter Cache Trace dataset. You compare metrics such as page migration overhead and access latency to reproduce the paper's performance impact findings.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's core method to real workload data and quantitatively evaluate allocation policies, showing comprehension of dynamic tiering and workload-dependent policy performance.

**Grounded in:** Comprehensive evaluation of these policies using real workloads and benchmarks on a hybrid memory system.

**Tech stack:** Python 3.11, pandas, matplotlib, numpy

**Data:** Twitter Cache Trace dataset from https://github.com/twitter/cache-trace, used in the paper's experiments.

**Build it:**

1. Download and preprocess the Twitter Cache Trace dataset to extract page access sequences.
2. Implement a memory tiering simulator supporting DRAM and persistent memory tiers with configurable capacities.
3. Implement the three allocation policies as per the paper's description.
4. Run simulations of the workload trace under each policy, measuring page migrations and access latency.
5. Analyze and plot the results comparing the policies' performance on the real workload.

**Verified links from the paper:**

- <https://github.com/twitter/cache-trace> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the simulator code, data preprocessing scripts, evaluation results, plots, and a detailed README documenting the methodology and findings.

**Stretch goal:** Add a baseline policy (e.g., random allocation) for comparison to highlight the benefits of the studied policies.

### Advanced — Design and Evaluate an Adaptive Allocation Policy for Hybrid Memory
*Effort: 3+ weeks*

You design and implement an adaptive page allocation policy that dynamically selects among DRAM-Preferred, DRAM-Always, and PM-Preferred policies based on real-time workload characteristics such as page access frequency and migration overhead. You integrate this policy into the memory tiering simulator and evaluate it on the Twitter Cache Trace and synthetic workloads.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper by addressing the limitation that no single policy is best for all workloads. It shows your ability to extend the paper's work with a novel mechanism and perform rigorous evaluation.

**Grounded in:** Developing adaptive allocation policies that dynamically select the best policy based on workload behavior.

**Tech stack:** Python 3.11, pandas, matplotlib, numpy, scikit-learn

**Data:** Twitter Cache Trace dataset and synthetic workload traces as in previous projects.

**Build it:**

1. Analyze workload characteristics (e.g., page access frequency, migration rates) to identify features useful for policy selection.
2. Design an adaptive allocation policy that monitors workload features and switches allocation strategies dynamically.
3. Implement the adaptive policy in the memory tiering simulator alongside the existing policies.
4. Evaluate the adaptive policy on Twitter Cache Trace and synthetic workloads, comparing performance to static policies.
5. Document the design decisions, evaluation methodology, and results in a comprehensive report.

**Verified links from the paper:**

- <https://github.com/twitter/cache-trace> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the extended simulator code, adaptive policy implementation, evaluation scripts, results, and a detailed README explaining the adaptive mechanism and its benefits.

**Stretch goal:** Incorporate machine learning models to predict the best allocation policy based on workload features for improved adaptability.
