---
title: "578 · Streamlined On-Chip Temporal Prefetching — Calvin Lin"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-calvin-lin"
source_hash: "3664b7703c2d5c6e7d0d52c790082b2578a88096df76f0538a51b66ea36af99d"
sequence: 578
generator: "outreach-garden: managed"
---

# 578 · Streamlined On-Chip Temporal Prefetching

## At a glance

- **Professor:** Calvin Lin
- **Institution:** University of Texas at Austin
- **Paper:** [Streamlined On-Chip Temporal Prefetching](https://www.cs.utexas.edu/~lin/papers/hpca26.pdf)
- **Authors:** Quang Duong, Calvin Lin
- **Year:** 2026

## Paper overview

This paper presents Streamline, a new on-chip temporal prefetcher that improves the efficiency and accuracy of predicting future memory accesses by using a stream-based metadata representation. This approach reduces redundancy, improves storage and bandwidth efficiency, and eliminates costly metadata rearrangements, resulting in better performance compared to previous state-of-the-art prefetchers.

### Why it matters

**Research problem:** On-chip temporal prefetchers face challenges in storing and managing large amounts of metadata efficiently, minimizing metadata storage size while maximizing useful correlations, and avoiding costly metadata rearrangements during dynamic resizing.

**Why it matters:** Efficient temporal prefetching is critical for covering irregular memory access patterns and improving overall system performance, especially in bandwidth-constrained multi-core environments. Poor metadata management limits prefetch coverage and accuracy, reducing the benefits of prefetching.

**Key contributions:**

- Introduction of a stream-based metadata format that eliminates redundancy and improves storage efficiency by 33%.
- A new indexing scheme (filtered indexing) that prevents metadata misplacement and eliminates costly metadata shuffling during resizing.
- Utility-aware metadata management policies including Temporal-Prefetching-MIN (TP-MIN) replacement and Utility-Aware Dynamic Partitioning.
- A tagged set-partitioning scheme that increases metadata associativity and reduces conflict misses.
- Demonstration of improved prefetch coverage (+12.5 percentage points) and accuracy (+3.6 percentage points) over prior state-of-the-art (Triangel).

## About the professor

**Calvin Lin** — Professor of Computer Science, University of Texas at Austin.

Research interests: I do research in compilers and computer architecture, with interests in security.

### Research links

- [Faculty/profile page](https://www.cs.utexas.edu/~lin)
- [Professor website](https://www.cs.utexas.edu/~lin/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cache and Prefetching Techniques
**The paper assumes:** computer architecture cache memory, prefetching algorithms, metadata management in caches
**Already in this field?** Skip this entirely if you already understand cache memory systems and prefetching techniques in computer architecture.

To understand the innovations in Streamline's on-chip temporal prefetching, a solid grasp of cache memory management, prefetching mechanisms, and metadata handling is essential. The rigorous course option offers a deep dive into parallel computing concepts including cache coherence and memory consistency, which underpin prefetching strategies. The fast track provides a concise, focused introduction to these topics, suitable for quickly building the necessary intuition and background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 I Parallel Computing I 2023 I Kayvon Fatahalian and Kunle Olukotun](https://www.youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp) — Stanford Online · 19 videos · 24.3h across 19 episodes

**Watch only this:** Lectures 1 through 12, about 15.3 hours — covering parallelism motivation, multi-core architecture, programming basics, performance optimization, GPU architecture, cache coherence, and memory consistency to build a strong foundation for cache and prefetching techniques.

*Why it unblocks this paper:* Stanford CS149 covers multi-core processor architecture, cache coherence, memory consistency, and performance optimization, directly relevant to understanding metadata management and prefetching in multi-core systems as discussed in the paper.

*If you want all of it:* 24.3 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.172 Performance Engineering of Software Systems, Fall 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf) — MIT OpenCourseWare · 23 videos · 29.8h across 23 episodes

**Watch only this:** Episodes 6, 11, 12, and 14, about 5.1 hours — covering multicore programming, storage allocation, parallel storage allocation, and caching/cache-efficient algorithms to quickly grasp key concepts for prefetching and metadata handling.

*Why it unblocks this paper:* MIT 6.172 includes focused lectures on caching, cache-efficient algorithms, and multicore programming, providing a concise yet comprehensive overview of performance engineering and memory system optimization relevant to prefetching metadata management.

*If you want all of it:* 29.8 hours across all 23 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Streamlined On-Chip Temporal Prefetching paper, start with foundational knowledge on cache design and replacement policies, which underpin the metadata management and indexing techniques used. Then, explore specialized topics like temporal prefetching metadata management and memory system metadata indexing to grasp the innovations in metadata handling. Finally, focus on the core concept by watching the authors' own talks and related recent conference presentations for direct insights into their novel approach and results.

### Set-associative cache design *(prerequisite)*
Set-associative cache design is fundamental to understanding how the paper's tagged set-partitioning scheme increases metadata associativity and reduces conflict misses. This knowledge provides the architectural context for the metadata storage improvements Streamline achieves.

*How the paper uses it:* Streamline's tagged set-partitioning scheme increases metadata associativity, a concept rooted in set-associative cache design.

▶ [14.2.9 Associative Caches](https://www.youtube.com/watch?v=q30W7ApRqjI) — MIT OpenCourseWare · 7 years ago

### Replacement policies in cache systems *(prerequisite)*
Understanding cache replacement policies is crucial to appreciate the utility-aware TP-MIN replacement policy introduced in Streamline. This background helps in grasping how Streamline improves prefetch accuracy by maximizing correlation hit rates.

*How the paper uses it:* Streamline introduces the TP-MIN replacement policy to improve prefetch accuracy by utility-aware metadata management.

▶ [Cache Replacement Policies - RR, FIFO, LIFO, & Optimal](https://www.youtube.com/watch?v=7lxAfszjy68) — Neso Academy · 15:14

### Memory system metadata indexing *(prerequisite)*
Memory system metadata indexing knowledge is necessary to understand Streamline's novel filtered indexing scheme, which prevents metadata misplacement and eliminates costly rearrangements. This topic bridges general indexing concepts with their specialized application in prefetch metadata.

*How the paper uses it:* Streamline's filtered indexing scheme innovates on metadata indexing to avoid costly rearrangements during resizing.

▶ [Enabling Rapid and Secure Metadata Search Across Storage ...](https://www.youtube.com/watch?v=SQ0tfzOcaL4) — SNIAVideo · 33:16

### Temporal prefetching metadata management
This concept directly addresses how temporal prefetchers store and manage metadata, which is central to Streamline's contributions. Understanding existing metadata management challenges and approaches sets the stage for appreciating Streamline's stream-based metadata representation and utility-aware policies.

*How the paper uses it:* Streamline improves temporal prefetching by introducing efficient metadata management techniques.

▶ [ISCA'25 - Session 4B - Profile-Guided Temporal Prefetching](https://www.youtube.com/watch?v=yH7KCnNqTTI) — ACM SIGARCH · 5 months ago

### Streamlined On-Chip Temporal Prefetching talk
The authors' own talks and recent conference presentations provide the most direct and detailed insights into the Streamline prefetcher, its design rationale, and empirical results. These talks are essential for an advanced understanding of the paper's novel contributions and their implications.

*How the paper uses it:* These talks present the authors' detailed explanation and evaluation of Streamline, the paper's core contribution.

▶ [https://www.youtube.com › watch?v=6cbieWORlog](https://www.youtube.com/watch?v=6cbieWORlog) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts in cache prefetching and memory system design, then builds up to the specific metadata management and replacement policies that Streamline innovates on. Starting with basic cache prefetching techniques, it progresses through set-associative cache design and replacement policies, then covers metadata indexing and management before concluding with the core Streamline temporal prefetching approach. This order ensures a clear, intuitive understanding of how Streamline improves on prior work.

### Cache prefetching techniques *(prerequisite)*
Learn how cache prefetching works to anticipate and load data before it is requested, improving memory access latency and system performance. This foundation explains why prefetching is critical and the challenges it faces, especially with irregular access patterns.

*How the paper uses it:* Understanding cache prefetching basics is essential to grasp why Streamline’s improvements in temporal prefetching metadata management matter.

▶ [3 2 10 HW Prefetching Example && Summary](https://www.youtube.com/watch?v=lDegeSGAXqI) — Prof. Dr. Ben H. Juurlink · 7 years ago

### Set-associative cache design *(prerequisite)*
Set-associative caches balance between direct-mapped and fully associative caches, reducing conflict misses by allowing multiple blocks per set. This concept is key to understanding how Streamline’s tagged set-partitioning scheme increases metadata associativity.

*How the paper uses it:* Streamline uses a tagged set-partitioning scheme to increase metadata associativity and reduce conflict misses.

▶ [Set Associative Mapping](https://www.youtube.com/watch?v=KhAh6thw_TI) — Neso Academy · 10:52 · 5 years ago

### Replacement policies in cache systems *(prerequisite)*
Replacement policies decide which cache entries to evict when space is needed. Common policies like LRU are well-known, but Streamline introduces a utility-aware policy (TP-MIN) that focuses on maximizing prefetch accuracy rather than just recency.

*How the paper uses it:* Streamline’s TP-MIN replacement policy improves prefetch accuracy by considering the utility of entire correlations.

▶ [Cache Replacement Policies - RR, FIFO, LIFO, & Optimal](https://www.youtube.com/watch?v=7lxAfszjy68) — Neso Academy · 15:14

### Memory system metadata indexing *(prerequisite)*
Metadata indexing organizes and locates metadata efficiently in memory systems. Streamline’s novel filtered indexing scheme prevents costly metadata rearrangements during resizing, improving efficiency.

*How the paper uses it:* Streamline introduces filtered indexing to avoid costly metadata shuffling during dynamic resizing.

▶ [Enabling Rapid and Secure Metadata Search Across Storage ...](https://www.youtube.com/watch?v=SQ0tfzOcaL4) — SNIAVideo · 33:16

### Temporal prefetching metadata management
This concept covers how temporal prefetchers store and manage metadata about correlated memory accesses. Streamline innovates by using a stream-based metadata format that reduces redundancy and improves storage efficiency.

*How the paper uses it:* Streamline’s stream-based metadata representation is central to its improved efficiency and accuracy in temporal prefetching.

▶ [Triage: Temporal Prefetching without Off-Chip Metadata](https://www.youtube.com/watch?v=3-TiAlBoulE) — Hao Wu · 6 years ago

### Streamlined On-Chip Temporal Prefetching talk
This talk provides direct insights from the authors on the Streamline prefetcher, explaining its design, key contributions, and performance benefits in their own words.

*How the paper uses it:* The authors’ talk offers a concise overview of Streamline’s innovations and empirical results.

▶ [https://www.youtube.com › watch?v=6cbieWORlog](https://www.youtube.com/watch?v=6cbieWORlog) — YouTube result via DuckDuckGo

## Already in your library

- [Lecture 35: Hardware Prefetching](https://www.youtube.com/watch?v=cPpMrxUUSbk) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Hardware prefetching | Video 28](https://www.youtube.com/watch?v=pWiPlEA4H9s) — also for: Pathfinder: Practical Real-Time Learning for Data Prefetching (Rajeev Balasubramonian)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of the Streamline on-chip temporal prefetching paper. The beginner project focuses on implementing and visualizing the stream-based metadata representation to grasp its storage efficiency. The intermediate project involves reimplementing the core Streamline metadata management and comparing prefetch coverage against a simple baseline on a public memory access trace. The advanced project extends the paper by exploring a bypassing mechanism for non-temporal entries, addressing one of the paper's stated limitations, and evaluating its impact on prefetch accuracy and metadata eviction.

### Beginner — Stream-Based Metadata Representation Visualization
*Effort: a weekend, ~8 hours*

You build a small simulation that encodes sequences of correlated memory addresses into a compact stream-based metadata format as described in the paper. You visualize how this representation reduces redundancy compared to a naive metadata format by showing storage size and correlation counts for sample address sequences.

**Why it shows you understood the paper:** This project demonstrates you understand the core innovation of Streamline's metadata format and its impact on storage efficiency, a key contribution of the paper.

**Grounded in:** Introduction of a stream-based metadata format that eliminates redundancy and improves storage efficiency by 33%.

**Tech stack:** Python 3.11, matplotlib, Jupyter Notebook

**Data:** Synthetic sequences of correlated memory addresses simulating temporal access patterns, created based on descriptions in the paper.

**Build it:**

1. Implement a naive metadata format that stores address correlations with redundancy.
2. Implement the stream-based metadata format that compacts correlated address sequences.
3. Generate or simulate example address sequences with temporal correlations.
4. Measure and compare storage size and number of correlations stored by both formats.
5. Visualize the comparison with plots showing storage efficiency and correlation counts.

**Ships as:** A Jupyter notebook with code, plots, and explanations showing how stream-based metadata reduces redundancy and improves storage efficiency.

**Stretch goal:** Add a simple interactive visualization to explore how different address sequences affect compression efficiency.

### Intermediate — Reimplementation of Streamline Metadata Management and Prefetch Coverage Evaluation
*Effort: 2 weekends, ~20 hours*

You reimplement the core Streamline metadata management techniques including the stream-based format, tagged set-partitioning, and utility-aware replacement policy (TP-MIN). You run your implementation on a publicly available memory access trace dataset to measure prefetch coverage and compare it against a simple baseline prefetcher such as a stride prefetcher.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the core methods of the paper and evaluate key metrics like prefetch coverage, demonstrating deep comprehension of Streamline's approach and its benefits over simpler baselines.

**Grounded in:** Demonstration of improved prefetch coverage (+12.5 percentage points) and accuracy (+3.6 percentage points) over prior state-of-the-art (Triangel).

**Tech stack:** Python 3.11, NumPy, Pandas, matplotlib

**Data:** Use publicly available memory access traces such as SPEC CPU 2006 or 2017 traces if accessible; otherwise, simulate memory access patterns with temporal correlations as described in the paper.

**Build it:**

1. Implement the stream-based metadata representation for temporal prefetching correlations.
2. Implement tagged set-partitioning to increase metadata associativity.
3. Implement the TP-MIN utility-aware replacement policy for metadata entries.
4. Implement a simple stride prefetcher as a baseline.
5. Run both prefetchers on the memory access trace dataset and collect prefetch coverage and accuracy metrics.
6. Plot and compare the results, highlighting improvements from Streamline techniques.

**Ships as:** A Python project with scripts and a report showing implementation details, evaluation methodology, and comparative results of prefetch coverage and accuracy.

**Stretch goal:** Add filtered indexing to your metadata management to eliminate costly metadata rearrangements and evaluate its effect on performance.

### Advanced — Bypassing Mechanism for Non-Temporal Entries in Streamline Prefetcher
*Effort: 3+ weeks, ~60 hours*

You extend the Streamline metadata management by designing and implementing a bypassing mechanism that identifies and avoids storing non-temporal (low utility) metadata entries. You evaluate how this affects metadata eviction rates, prefetch coverage, and accuracy on memory access traces, addressing a limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing you can critically analyze and extend the research. It demonstrates your ability to innovate on top of the core method and evaluate system-level tradeoffs.

**Grounded in:** Streamline does not implement a bypassing mechanism for non-temporal entries, leading to potential eviction of valuable metadata.

**Tech stack:** Python 3.11, NumPy, Pandas, matplotlib

**Data:** Use the same memory access traces or simulated datasets as in the intermediate project to maintain consistency in evaluation.

**Build it:**

1. Analyze metadata entries to identify criteria for non-temporal (low utility) entries based on prefetch accuracy or utility metrics.
2. Design and implement a bypassing mechanism that prevents such entries from being stored or replaces them preferentially.
3. Integrate the bypassing mechanism into the existing Streamline metadata management implementation.
4. Run experiments comparing prefetch coverage, accuracy, and metadata eviction rates with and without bypassing.
5. Analyze and visualize the tradeoffs and improvements achieved by bypassing.
6. Document the design decisions, evaluation results, and implications for future Streamline enhancements.

**Ships as:** A comprehensive GitHub repository with code, evaluation scripts, and a detailed README/report discussing the bypassing mechanism, its implementation, and impact on prefetching performance.

**Stretch goal:** Explore skewed indexing or hybrid partitioning schemes in combination with bypassing to further optimize metadata management.
