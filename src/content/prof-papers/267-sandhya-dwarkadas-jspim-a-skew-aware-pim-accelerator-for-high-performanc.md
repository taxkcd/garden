---
title: "267 · JSPIM: A Skew-Aware PIM Accelerator for High-Performance Databases Join and Select Operations — Sandhya Dwarkadas"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sandhya-dwarkadas"
source_hash: "6273cf716c527acc23152016d01985b26ff92389ac61093c057451af907c9fbe"
sequence: 267
generator: "outreach-garden: managed"
---

# 267 · JSPIM: A Skew-Aware PIM Accelerator for High-Performance Databases Join and Select Operations

## At a glance

- **Professor:** Sandhya Dwarkadas
- **Institution:** University of Virginia
- **Paper:** [JSPIM: A Skew-Aware PIM Accelerator for High-Performance Databases Join and Select Operations](https://arxiv.org/pdf/2508.08503)
- **Authors:** Sabiha Tajdari, Anastasia Ailamaki, Sandhya Dwarkadas
- **Year:** 2025

## Paper overview

This paper presents JSPIM, a novel Processing-in-Memory (PIM) architecture designed to accelerate database join and select queries by integrating computation directly into memory modules. JSPIM addresses key challenges like memory bottlenecks, data skew, and inefficient data movement by combining hardware and algorithmic innovations. It achieves significant speedups over traditional CPU and GPU database systems while incurring modest hardware overhead.

### Why it matters

**Research problem:** Database join operations are bottlenecked by memory bandwidth and latency due to the memory wall and limited DRAM scalability. Existing PIM designs reuse CPU-oriented join algorithms, limiting parallelism and suffering from costly inter-chip communication and unresolved data skew issues.

**Why it matters:** Joins are central to analytical database workloads and contribute a substantial portion of query latency. Improving join performance directly enhances overall database query efficiency, which is critical for many data-intensive applications across domains like business intelligence, healthcare, and finance.

**Key contributions:**

- Subarray-level PIM parallel search engine enabling constant-time hash bucket lookups via integrated hardware comparators.
- Rank-Level Unit (RLU) that performs pipelined, parallel traversal and comparison locally, eliminating CPU involvement and cross-chip communication.
- Algorithm-hardware co-design including duplication linked list to handle duplicates, simple hash function to mitigate skew, lightweight encoding, and data layout aligned with DRAM banks and columns.
- Integration of JSPIM with DuckDB demonstrating practical end-to-end query acceleration.

## About the professor

**Sandhya Dwarkadas** — Walter N. Munster Professor and Chair, Department of Computer Science, University of Virginia.

Research interests: Parallel and distributed computing, Computer architecture, Interaction and interface between the compiler, runtime/operating system, and underlying architecture

### Research links

- [Faculty/profile page](https://engineering.virginia.edu/faculty/sandhya-dwarkadas)
- [Google Scholar](https://scholar.google.com/citations?user=L1pb8GUAAAAJ&hl=en&oi=ao)
- [DBLP](https://dblp.org/pid/62/1421.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Database Systems and Join Algorithms
**The paper assumes:** database join algorithms, hash join methods, data skew in databases, memory bottlenecks in query processing
**Already in this field?** Skip this entirely if you already have a solid understanding of database join algorithms and their performance characteristics.

This background is designed to provide foundational knowledge on database systems and join algorithms, crucial for understanding the JSPIM paper's contributions to accelerating join operations with Processing-in-Memory architectures. The rigorous course option offers a deep, structured university-level lecture series covering core database concepts and join algorithms in detail, while the fast track provides a shorter, more focused subset of the same course for quicker comprehension without sacrificing essential understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Intro to Database Systems (15-445/645 - Fall 2024)](https://www.youtube.com/playlist?list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq) — CMU Database Group · 26 videos · 33.9h across 26 episodes

**Watch only this:** Lectures #01 - Relational Model & Algebra, #07 - Hash Tables, and #12 - Join Algorithms: Hash, Sort-Merge, Nested Loop Joins, totaling about 3.5 hours (approx. 78 min + 78 min + 78 min). This subset covers the essential database and join algorithm concepts needed to understand JSPIM's contributions.

*Why it unblocks this paper:* This is a comprehensive, authoritative university course from CMU Database Group (Fall 2024) that covers database fundamentals, hash tables, and join algorithms in depth, directly relevant to the paper's focus on join acceleration and hash join redesign.

*If you want all of it:* 33.9 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CMU Intro to Database Systems (15-445/645 - Fall 2023)](https://www.youtube.com/playlist?list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g) — CMU Database Group · 26 videos · 33.3h across 26 episodes

**Watch only this:** Lectures F2023 #01 - Relational Model & Algebra, F2023 #07 - Hash Tables, and F2023 #11 - Join Algorithms, totaling about 3.8 hours (approx. 76 min + 76 min + 76 min). This focused subset provides a concise yet solid foundation for understanding the paper.

*Why it unblocks this paper:* This Fall 2023 CMU Intro to Database Systems playlist is a well-produced, clear, and slightly shorter version of the same course, covering the same fundamental topics including hash tables and join algorithms, suitable for a quicker but still rigorous overview.

*If you want all of it:* 33.3 hours across 26 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the JSPIM paper, start by building foundational knowledge on key prerequisite topics such as DRAM architecture and subarray-level parallelism, hash join algorithms, data skew in parallel databases, and hardware-software co-design for accelerators. These topics provide the necessary background on memory structures, join techniques, load balancing challenges, and the co-design approach that JSPIM employs. Finally, focus on the core concept of Processing-in-Memory database acceleration and the authors' own talk to grasp the novel contributions and design details of JSPIM.

### DRAM architecture and subarray-level parallelism *(prerequisite)*
Understanding the internal structure of DRAM, including banks, subarrays, and how parallelism is exploited at the subarray level, is critical to appreciating how JSPIM integrates parallel search engines within memory. This knowledge lays the groundwork for comprehending the hardware innovations that enable constant-time hash bucket lookups and fine-grained parallelism.

*How the paper uses it:* JSPIM exploits subarray-level parallelism within DRAM to implement its parallel search engines and optimize data layout.

▶ [Onur Mutlu @ TU Wien 2019 - Memory Systems - Lecture 1c ...](https://www.youtube.com/watch?v=zwJrUn2jqHs) — Onur Mutlu Lectures · 1:14:20

### Hash join algorithms *(prerequisite)*
Hash join algorithms are fundamental to database join operations and are redesigned in JSPIM for constant-time lookups using hardware comparators. A deep understanding of traditional and parallel hash join methods is essential to appreciate JSPIM's algorithmic innovations and hardware co-design.

*How the paper uses it:* JSPIM redesigns hash tables and join algorithms to achieve O(1) lookups and efficient handling of duplicates within memory.

▶ [17 - Hash Join Algorithms (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=J0nbgXIarhc) — CMU Database Group · 1:26:43

### Data skew in parallel databases *(prerequisite)*
Data skew is a major challenge in parallel join operations, causing load imbalance and performance degradation. JSPIM addresses this through algorithmic and hardware techniques such as duplication linked lists and simple hash functions. Understanding data skew and its impact is vital to grasping JSPIM's contributions.

*How the paper uses it:* JSPIM tackles data skew by enabling constant-time in-bucket searches and managing duplicates efficiently.

▶ [S2024 #09 - Parallel Hash Join Algorithms (CMU Advanced Database Systems)](https://www.youtube.com/watch?v=S40K8iGa8Ek) — CMU Database Group · 2 years ago

### Hardware-software co-design for accelerators *(prerequisite)*
JSPIM exemplifies hardware-software co-design by tightly integrating algorithmic strategies with memory hardware enhancements to optimize join and select operations. Familiarity with co-design principles helps in understanding how JSPIM balances hardware overhead with performance gains.

*How the paper uses it:* JSPIM's design tightly couples algorithmic innovations with hardware features like the Rank-Level Unit and subarray comparators.

▶ [ACACES 2024: Hardware/software co-optimization for ...](https://www.youtube.com/watch?v=m01aZO-t31Y) — HiPEAC TV · 1:10:11

### Processing-in-Memory database acceleration
Processing-in-Memory (PIM) integrates computation within memory modules to overcome memory bottlenecks in database operations. This concept is central to JSPIM, which uses PIM to accelerate join and select queries by minimizing data movement and exploiting parallelism inside DRAM.

*How the paper uses it:* JSPIM is a novel PIM accelerator that embeds computation within memory to speed up database joins and selects.

▶ [The Road to Widely Deploying Processing-In-Memory: Challenges and Opportunities](https://www.youtube.com/watch?v=IHIw2I4rWTU) — Onur Mutlu Lectures · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand JSPIM, start by learning about the basics of DRAM architecture and subarray-level parallelism, which form the hardware foundation JSPIM exploits for parallel search. Next, grasp hash join algorithms, the fundamental database join technique that JSPIM redesigns for constant-time lookups. Then, study data skew in parallel databases, a key challenge JSPIM addresses to improve join performance. Finally, explore processing-in-memory database acceleration, the core method JSPIM uses to integrate computation inside memory and speed up joins.

### DRAM architecture and subarray-level parallelism *(prerequisite)*
DRAM is organized into banks, rows, columns, and subarrays, enabling parallel access to memory cells. Understanding subarray-level parallelism helps explain how JSPIM embeds parallel search engines within memory to speed up data lookups by exploiting this fine-grained structure.

*How the paper uses it:* JSPIM exploits subarray-level parallel search engines aligned with DRAM structure to achieve high parallelism and minimize latency.

▶ [How does Computer Memory Work?](https://www.youtube.com/watch?v=7J7X7aZvMXQ) — Branch Education · 35:33

### Hash join algorithms *(prerequisite)*
Hash join is a common database join technique that uses hash tables to quickly find matching rows between tables. Learning how hash joins work provides intuition for JSPIM's redesign of hash tables and constant-time bucket lookups.

*How the paper uses it:* JSPIM redesigns hash join algorithms for constant-time lookups using hardware comparators integrated in memory subarrays.

▶ [17 - Hash Join Algorithms (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=J0nbgXIarhc) — CMU Database Group · 1:26:43

### Data skew in parallel databases *(prerequisite)*
Data skew occurs when data is unevenly distributed, causing load imbalance and performance bottlenecks in parallel database operations. Understanding this problem clarifies why JSPIM introduces duplication linked lists and simple hash functions to mitigate skew.

*How the paper uses it:* JSPIM addresses data skew by enabling constant-time in-bucket searches and managing duplicates efficiently with a duplication linked list.

▶ [Skew Mitigation For Facebook PetabyteScale Joins](https://www.youtube.com/watch?v=QxfFbu65Hn8) — Databricks · 5 years ago

### Processing-in-Memory database acceleration
Processing-in-Memory (PIM) integrates computation directly inside memory modules to overcome memory bandwidth bottlenecks. This concept is central to JSPIM's approach of embedding hash join operations within memory to achieve massive speedups.

*How the paper uses it:* JSPIM is a PIM accelerator that combines hardware and algorithmic innovations to perform join and select operations inside memory modules.

▶ [The Road to Widely Deploying Processing-In-Memory: Challenges and Opportunities](https://www.youtube.com/watch?v=IHIw2I4rWTU) — Onur Mutlu Lectures · 3 years ago

## Already in your library

- [Hardware/Software Co-design Course - Lecture 1: 16.03.22 ...](https://www.youtube.com/watch?v=OJRBbOoiHXw) — also for: Seeking Solutions in Configurable Computing (David Andrews)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for understanding and demonstrating the core ideas of JSPIM, a PIM accelerator for database join and select operations. The beginner project focuses on simulating and visualizing the constant-time hash bucket lookup mechanism using software, the intermediate project implements a simplified hash join algorithm inspired by JSPIM's design and compares it against a baseline on a public dataset, and the advanced project extends JSPIM's approach to address dynamic updates in join workloads, a key limitation noted in the paper.

### Beginner — Simulate Constant-Time Hash Bucket Lookup with Duplication Handling
*Effort: a weekend, ~8 hours*

You build a software simulation of JSPIM's subarray-level parallel search engine concept by implementing a hash table with constant-time bucket lookups and a duplication linked list to handle duplicates. The simulation will visualize how lookups and duplicate management work, illustrating the core hardware-algorithm co-design principle in JSPIM.

**Why it shows you understood the paper:** This project demonstrates your grasp of JSPIM's key hardware innovation—constant-time hash bucket lookups and duplicate handling—by faithfully reproducing the mechanism in software and visualizing its behavior.

**Grounded in:** Subarray-level PIM parallel search engine enabling constant-time hash bucket lookups via integrated hardware comparators; Algorithm-hardware co-design including duplication linked list to handle duplicates.

**Tech stack:** JavaScript, React

**Data:** Synthetic key-value pairs generated in code to simulate hash buckets with duplicates and skew.

**Build it:**

1. Implement a hash table data structure with buckets supporting O(1) lookup.
2. Add a duplication linked list within buckets to manage duplicate keys.
3. Create a React UI to visualize bucket lookups and duplicate traversal.
4. Simulate skewed data distribution by varying bucket sizes and duplicates.
5. Demonstrate constant-time lookup behavior and duplicate handling via UI.

**Ships as:** A GitHub repo with a React app showing interactive visualizations of constant-time hash bucket lookups and duplication linked lists, with explanatory README.

**Stretch goal:** Add a comparison of lookup times with and without duplication linked lists to highlight performance impact.

### Intermediate — Implement and Benchmark a Simplified JSPIM-Inspired Hash Join
*Effort: 2 weekends, ~20 hours*

You implement a simplified hash join algorithm inspired by JSPIM's design, including a simple hash function to mitigate skew and a duplication linked list for duplicates. You benchmark this implementation against a baseline naive hash join on the TPC-H public dataset (or a smaller substitute) and report join throughput and latency metrics.

**Why it shows you understood the paper:** This project shows you can translate JSPIM's core algorithmic innovations into software, reproduce key performance metrics, and understand the impact of skew mitigation and duplicate handling on join performance.

**Grounded in:** Algorithm-hardware co-design including duplication linked list to handle duplicates, simple hash function to mitigate skew; JSPIM achieves 400×–1000× speedup on join queries compared to DuckDB on CPU.

**Tech stack:** C++, Python (for benchmarking scripts)

**Data:** TPC-H benchmark dataset at scale factor 0.1 or smaller public substitute dataset for join queries.

**Build it:**

1. Implement a hash join algorithm with a simple hash function and duplication linked list in C++.
2. Implement a baseline naive hash join without skew mitigation or duplication handling.
3. Prepare or download a small TPC-H dataset or substitute for join queries.
4. Benchmark both implementations on join queries, measuring throughput and latency.
5. Analyze and report the impact of skew mitigation and duplication linked list on performance.

**Ships as:** A GitHub repo with C++ implementations, benchmarking scripts, results comparing join performance, and a detailed README explaining the design and findings.

**Stretch goal:** Add a visualization of hash bucket size distribution and skew before and after applying the simple hash function.

### Advanced — Extend JSPIM's Architecture to Support Dynamic Real-Time Updates in Joins
*Effort: 3-4 weeks*

You design and prototype an extension to JSPIM's hash join approach to support dynamic, real-time updates in database join workloads without compromising throughput and latency. This includes implementing incremental maintenance of hash tables with duplication linked lists and evaluating the impact on join performance and update latency.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring dynamic update mechanisms, demonstrating deep comprehension of JSPIM's architecture and the challenges of real-time workloads.

**Grounded in:** The design assumes static datasets for evaluation; dynamic updates require careful management; future direction: exploring dynamic update mechanisms and incremental maintenance for real-time workloads.

**Tech stack:** C++, Python (for evaluation and visualization)

**Data:** Simulated dynamic join workloads with incremental inserts and deletes, based on synthetic or TPC-H-like data.

**Build it:**

1. Design a data structure extension to JSPIM's hash join supporting incremental updates with duplication linked lists.
2. Implement incremental insert and delete operations maintaining hash table consistency.
3. Simulate dynamic join workloads with real-time updates using synthetic data.
4. Measure throughput and latency of join queries under dynamic updates.
5. Compare results against static join implementation to evaluate overhead and performance trade-offs.
6. Document design decisions, challenges, and performance results.

**Ships as:** A GitHub repo with extended hash join code supporting dynamic updates, evaluation scripts, performance analysis, and a comprehensive README discussing the approach and findings.

**Stretch goal:** Explore hardware-software co-design ideas to minimize update latency inspired by JSPIM's subarray-level parallelism.
