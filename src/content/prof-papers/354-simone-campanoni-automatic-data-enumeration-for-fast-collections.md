---
title: "354 · Automatic Data Enumeration for Fast Collections — Simone Campanoni"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-simone-campanoni"
source_hash: "72419bb91336b3a066395ae56165cb8aac11ba2ef845309b5c2e89af01608c48"
sequence: 354
generator: "outreach-garden: managed"
---

# 354 · Automatic Data Enumeration for Fast Collections

## At a glance

- **Professor:** Simone Campanoni
- **Institution:** Northwestern University
- **Paper:** [Automatic Data Enumeration for Fast Collections](https://users.cs.northwestern.edu/~simonec/files/Research/papers/MEMORY_CGO_2026.pdf)
- **Authors:** Tommy McMichen, Simone Campanoni
- **Year:** 2026

## Paper overview

This paper presents Automatic Data Enumeration (ADE), a compiler technique that automatically transforms data collections by assigning unique contiguous integer identifiers to data items. This enables the use of specialized, efficient data structures like bitsets, improving performance and memory usage without manual developer effort. Implemented in the MEMOIR compiler, ADE achieves significant speedups and memory reductions across various benchmarks and architectures.

### Why it matters

**Research problem:** Choosing efficient implementations for data collections is critical but challenging due to tradeoffs in performance, memory, and energy. Specialized implementations require certain data properties (e.g., uniqueness, ordering) that general-purpose data often lacks, forcing developers to manually transform data, which is tedious and error-prone.

**Why it matters:** Efficient data collection implementations can drastically improve software performance and resource usage. Automating the process of manufacturing data properties to enable specialized implementations reduces developer burden, prevents bugs, and pushes the boundaries of compiler optimizations.

**Key contributions:**

- Introduces Automatic Data Enumeration (ADE) to automate data enumeration in compilers.
- Presents optimizations to eliminate redundant translations between data and identifiers.
- Extends MEMOIR compiler to support collection selection and nested collections.
- Enables performance engineering via user directives to guide enumeration and sharing.
- Evaluates ADE’s performance and memory impact on multiple architectures.

## About the professor

**Simone Campanoni** — Associate Professor, Computer Science, Northwestern University.

Research interests: understanding how abstractions used within and around compilers should evolve to better support hardware and applications trends, co-design **compilers** with the _computer architecture_ and _operating system_ they target as well as with the _programming language_ they translate

### Research links

- [Faculty/profile page](https://users.cs.northwestern.edu/~simonec)
- [Resolved homepage](https://users.cs.northwestern.edu/~simonec/index.html)
- [Lab website](https://users.cs.northwestern.edu/~simonec/Team.html)
- [GitHub](https://github.com/google/xls)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Automatic Data Enumeration for Fast Collections," start by building foundational knowledge on compiler intermediate representations and SSA form, followed by compiler data structure optimizations and data enumeration/encoding techniques. Then, study bitset and specialized collection implementations to grasp the data structure transformations ADE enables. Finally, focus on the core concept of Automatic Data Enumeration (ADE) itself, prioritizing any direct talks by the authors or closely related advanced compiler talks.

### Intermediate representation and SSA form *(prerequisite)*
Understanding SSA form and compiler intermediate representations is critical because ADE relies on these compiler abstractions to perform safe and effective transformations on data collections. These videos provide detailed university-level lectures and research-level explanations of SSA, which is foundational to modern compiler optimizations.

*How the paper uses it:* ADE uses SSA form to enable transformations that assign unique contiguous integer identifiers to data items safely.

▶ [Static Single Assignment - The Backbone of Modern Compilers](https://www.youtube.com/watch?v=-1HoeiuU9Lk) — LLVM Social Bangalore · 1:19:14

### Compiler data structure optimization *(prerequisite)*
Compiler optimizations targeting data structures are essential to understand how ADE replaces general-purpose collections with more efficient specialized implementations. These videos include university lectures and research talks that explain optimization phases and techniques relevant to data structure transformations.

*How the paper uses it:* ADE extends the MEMOIR compiler with optimizations that select and transform data collections for performance and memory improvements.

▶ [Understanding Compiler Optimization - Chandler Carruth - Opening Keynote Meeting C++ 2015](https://www.youtube.com/watch?v=FnGCDLhaxKU) — Meeting Cpp · 10 years ago

### Data enumeration and encoding techniques *(prerequisite)*
Data enumeration and encoding are core to ADE’s approach of assigning unique contiguous integer IDs to data items. These videos cover numeric data encoding and enumeration schemes at a college or research level, providing the theoretical background necessary to appreciate ADE’s enumeration transformations.

*How the paper uses it:* ADE automates data enumeration by encoding data items as unique integers to enable efficient collection implementations.

▶ [Enumeration schemes and the insertion encoding Part 1](https://www.youtube.com/watch?v=PSWk8PSgApk) — Experimental mathematics · 14 years ago

### Bitset and specialized collection implementations *(prerequisite)*
Bitsets are a key specialized data structure that ADE enables by enumerating data items. Understanding bitsets and their advantages over general collections is important to grasp the performance and memory benefits ADE achieves. The selected videos provide advanced explanations and implementations of bitsets.

*How the paper uses it:* ADE replaces sets with bitsets after enumeration to improve performance and reduce memory usage.

▶ [5. Bit sets (part 1)](https://www.youtube.com/watch?v=O104Zl0l5bY) — Derick Rethans · 52:19

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Automatic Data Enumeration (ADE) for fast collections, start by learning about basic compiler optimizations and how compilers improve code performance. Then, build foundational knowledge on intermediate representations like SSA form, which enable safe compiler transformations. Next, grasp data enumeration and encoding techniques that underpin ADE's unique integer ID assignments. After that, learn about bitsets and specialized collection implementations that ADE leverages for efficiency. Finally, explore the core concept of ADE itself, focusing on how it automates data enumeration to optimize collections.

### Compiler data structure optimization *(prerequisite)*
Compiler optimizations transform code to run faster or use less memory by improving data structures and code patterns. Understanding these optimizations helps grasp how ADE modifies collections for better performance.

*How the paper uses it:* ADE relies on compiler optimizations to automatically transform data collections into more efficient forms.

▶ [6.5 : Compiler Optimizations](https://www.youtube.com/watch?v=SLyTtM7rEDA) — IIT Madras - BS in Electronic Systems · 13:17 · 1 year ago

### Intermediate representation and SSA form *(prerequisite)*
Intermediate representations (IR) like SSA form simplify compiler analysis by ensuring each variable is assigned exactly once, making transformations safer and easier. This foundation is critical for ADE's automated data transformations.

*How the paper uses it:* ADE uses SSA form in the MEMOIR compiler to perform safe and effective enumeration transformations.

▶ [SSA1 Introduction to SSA Form](https://www.youtube.com/watch?v=3d9zfdWXGh0) — Anoop Sarkar · 12:55

### Data enumeration and encoding techniques *(prerequisite)*
Data enumeration assigns unique integer identifiers to data items, enabling compact and efficient representations. Encoding techniques help store and manipulate data efficiently, which is central to ADE's approach.

*How the paper uses it:* ADE automatically assigns unique contiguous integer IDs to data items to enable specialized collection implementations.

▶ [Enumeration schemes and the insertion encoding Part 1](https://www.youtube.com/watch?v=PSWk8PSgApk) — Experimental mathematics · 14 years ago

### Bitset and specialized collection implementations *(prerequisite)*
Bitsets represent sets as compact bit vectors, allowing fast set operations and low memory usage. Specialized collections like bitsets outperform general-purpose sets when data properties are known, which ADE exploits.

*How the paper uses it:* ADE replaces general collections with bitsets after enumeration to improve performance and memory efficiency.

▶ [Data Structures: Introduction to Bit Sets](https://www.youtube.com/watch?v=wudyP4kkKLY) — LevelUp · 5 years ago

## Already in your library

- [ECE 459 Lecture 18: Compiler Optimizations](https://www.youtube.com/watch?v=iHVUVyVZBK0) — also for: NUPEA: Optimizing Critical Loads on Spatial Dataflow Architectures via Non-Uniform Processing-Element Access (Nathan Beckmann)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Automatic Data Enumeration (ADE) from the paper. The beginner project recreates a core mechanism of ADE—enumerating data collections and replacing sets with bitsets—in a small, manageable scope using your existing skills. The intermediate project implements a simplified ADE transformation on a public dataset, comparing performance against a baseline, thereby reproducing key metrics from the paper. The advanced project extends ADE by exploring profile-guided heuristics to address the paper's limitation of static heuristic mispredictions, demonstrating a genuine research extension.

### Beginner — Enumerate and Bitset a Small Collection
*Effort: a weekend, ~8 hours*

You build a small program that takes a collection of strings (e.g., a list of names), automatically assigns unique contiguous integer identifiers to each item, and replaces set operations with bitset operations. This reproduces the core ADE mechanism of data enumeration and specialized collection replacement on a small scale.

**Why it shows you understood the paper:** This project shows you understand how ADE transforms general collections into enumerated integer sets and uses bitsets for efficient operations, a fundamental concept of the paper.

**Grounded in:** Introduces Automatic Data Enumeration (ADE) to automate data enumeration in compilers.

**Tech stack:** C++17, Standard Template Library (STL)

**Data:** Synthetic small string collections you create yourself to simulate data items.

**Build it:**

1. Implement a function to assign unique contiguous integer IDs to each unique string in a collection.
2. Implement a bitset-based set data structure that supports add, remove, and membership operations using the assigned IDs.
3. Write a small test harness that compares set operations on the original string collection versus the enumerated bitset representation.
4. Measure and print basic performance metrics (e.g., operation counts, memory usage estimates) to illustrate efficiency gains.
5. Document the enumeration and bitset transformation process in the README.

**Ships as:** A C++ repository with code and README demonstrating enumeration of a small collection and replacement of sets with bitsets, including simple performance observations.

**Stretch goal:** Add support for nested collections (e.g., sets of sets) and show enumeration and bitset replacement working recursively.

### Intermediate — Reimplement ADE Enumeration on a Public Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core ADE enumeration technique described in the paper, applying it to a public dataset of sets (e.g., the Enron email dataset or a public graph dataset with node sets). You transform sets into enumerated bitsets and compare performance (speed and memory) against a baseline implementation using standard sets.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core method from scratch and reproduce its key performance benefits on real data, showing deep comprehension of ADE's practical impact.

**Grounded in:** Our implementation in the MEMOIR compiler achieves speedups of 2.16× on average (up to 8.72×) and reduces peak memory consumption by 5.6% on average (up to 50.7%).

**Tech stack:** C++17, STL, Google Benchmark or similar microbenchmarking library

**Data:** A public dataset of sets such as a subset of the Enron email dataset or a public graph dataset with node sets; if unavailable, simulate sets of strings or integers with realistic sizes and distributions.

**Build it:**

1. Select or synthesize a dataset consisting of multiple sets of data items.
2. Implement enumeration of data items to unique contiguous integers.
3. Replace set data structures with bitset-based implementations using the enumeration.
4. Benchmark key operations (e.g., membership tests, unions, intersections) comparing baseline sets vs. enumerated bitsets.
5. Analyze and report speedup and memory usage differences in a README report.
6. Optionally, implement simple redundant translation elimination by caching translations.

**Ships as:** A C++ repository with code, benchmarks, and a report showing performance and memory comparisons between baseline sets and enumerated bitsets on a real or realistic dataset.

**Stretch goal:** Add user directives (e.g., configuration flags) to control enumeration sharing and demonstrate their effect on performance.

### Advanced — Profile-Guided Enumeration Heuristics for ADE
*Effort: 3+ weeks, ~60 hours*

You extend the ADE enumeration approach by integrating a profile-guided heuristic that dynamically decides which collections to enumerate based on runtime statistics, addressing the paper's limitation of static heuristic mispredictions. You implement a lightweight profiling pass that collects data usage patterns and a decision module that adapts enumeration choices to improve performance and memory usage.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing you can critically analyze and extend ADE with dynamic heuristics, a research-level contribution that could initiate a conversation with the authors.

**Grounded in:** Static heuristics for enumeration benefit can mispredict, causing regressions in some benchmarks (e.g., FIM, PTA).

**Tech stack:** C++17, STL, Google Benchmark, Profiling tools (e.g., Linux perf or custom instrumentation)

**Data:** Use the same public or synthetic datasets as in the intermediate project to evaluate heuristic effectiveness.

**Build it:**

1. Implement lightweight runtime profiling instrumentation to collect statistics on collection usage (e.g., frequency, size, operation types).
2. Design and implement a heuristic decision module that uses profiling data to decide whether to enumerate a collection.
3. Integrate the heuristic into the enumeration transformation pipeline.
4. Benchmark the adaptive enumeration approach against static enumeration and baseline sets on the dataset.
5. Analyze performance and memory impact, documenting cases where dynamic heuristics improve or degrade results.
6. Write a detailed README discussing the design, implementation, and evaluation.

**Ships as:** A C++ repository with code implementing profile-guided enumeration heuristics, benchmarks comparing static vs. dynamic enumeration decisions, and a detailed report.

**Stretch goal:** Explore machine learning models to predict enumeration benefit from profiling data and compare with heuristic approaches.

_The paper's authors have not released code for ADE; the MEMOIR compiler repository is a third-party artifact implementing MEMOIR but not ADE itself. Public datasets for set collections are not specified in the paper, so you may need to simulate or select suitable public datasets for intermediate and advanced projects._
