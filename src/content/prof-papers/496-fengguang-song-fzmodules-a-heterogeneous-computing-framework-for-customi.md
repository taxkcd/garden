---
title: "496 · FZModules: A Heterogeneous Computing Framework for Customizable Scientific Data Compression Pipelines — Fengguang Song"
date: 2026-08-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fengguang-song"
source_hash: "ebedde63887e841f39b3746225c1589fe1b127ff16985d0a60933a978e70076e"
sequence: 496
generator: "outreach-garden: managed"
---

# 496 · FZModules: A Heterogeneous Computing Framework for Customizable Scientific Data Compression Pipelines

## At a glance

- **Professor:** Fengguang Song
- **Institution:** Indiana University
- **Paper:** [FZModules: A Heterogeneous Computing Framework for Customizable Scientific Data Compression Pipelines](https://arxiv.org/pdf/2509.20563)
- **Authors:** Skyler Ruiter, Jiannan Tian, Fengguang Song
- **Year:** 2025

## Paper overview

This paper presents FZModules, a flexible software framework that allows scientists and engineers to build custom data compression pipelines optimized for their specific scientific datasets and hardware. It supports both CPU and GPU modules and uses asynchronous task execution to improve performance. The framework enables rapid experimentation with different compression methods to balance speed, compression ratio, and data quality.

### Why it matters

**Research problem:** Modern scientific simulations and instruments generate extremely large volumes of data that overwhelm memory and storage systems, limiting scalability and performance. Existing lossy compression methods either lack flexibility, are hard-coded for specific hardware, or do not achieve optimal trade-offs between compression ratio, speed, and data quality.

**Why it matters:** Efficient data compression is critical to reduce storage and I/O bottlenecks in scientific workflows, enabling faster analysis and reducing costs. However, no single compression method fits all datasets and hardware configurations, necessitating a modular framework for rapid development and testing of customized compressors.

**Key contributions:**

- Design of FZModules, an extensible framework for creating customized error-bounded lossy compression pipelines on heterogeneous systems.
- Integration of CUDASTF to enable asynchronous task-level concurrency and automatic memory management between CPU and GPU tasks.
- Evaluation of three representative FZModules pipelines (FZMod-Default, FZMod-Speed, FZMod-Quality) on four real-world scientific datasets, demonstrating competitive speed and rate-distortion performance compared to state-of-the-art GPU and CPU compressors.

## About the professor

**Fengguang Song** — Associate Professor, Computer Engineering, Indiana University.

Research interests: High Performance Computing, Advanced Parallel Algorithms, Scalable Parallel and Distributed Systems, Automated Performance Analysis and Optimization

### Research links

- [Faculty/profile page](https://luddy.iu.edu/people/song-fengguang.html)
- [Identity evidence](https://engineering.indiana.edu/contact/profile/index.html?Fengguang_Song)
- [Identity evidence](https://homes.luddy.indiana.edu/fgsong)
- [Google Scholar](https://scholar.google.com/citations?user=BoVnm1wAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel and Heterogeneous Computing
**The paper assumes:** parallel computing concepts, GPU architecture and programming, asynchronous task execution models, heterogeneous CPU-GPU systems
**Already in this field?** Skip this entirely if you already understand GPU programming, asynchronous concurrency, and heterogeneous system architectures.

This background focuses on parallel and heterogeneous computing, essential for understanding the design and implementation of FZModules' customizable compression pipelines that run efficiently across CPUs and GPUs. The rigorous course option offers a deep dive into parallel computing concepts, architectures, and GPU programming, while the fast track provides a concise, focused introduction to heterogeneous computing systems with GPUs and accelerators. Choose the course for comprehensive mastery or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 I Parallel Computing I 2023 I Kayvon Fatahalian and Kunle Olukotun](https://www.youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp) — Stanford Online · 19 videos · 24.3h across 19 episodes

**Watch only this:** Lectures 1-4, 6-8, and 10-12, about 11.5 hours — covering parallelism motivation, multi-core architectures, parallel programming basics, performance optimization, GPU architecture, data-parallel thinking, efficient GPU evaluation, cache coherence, and memory consistency.

*Why it unblocks this paper:* Stanford CS149 is a top-tier university course covering parallel computing fundamentals, GPU architecture, CUDA programming, and concurrency management, directly relevant to understanding FZModules' heterogeneous CPU-GPU pipelines and asynchronous task execution.

*If you want all of it:* 24.3 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Livestream - Programming Heterogeneous Computing Systems with GPUs and other Accelerators (Spring 2023)](https://www.youtube.com/playlist?list=PL5Q2soXY2Zi-qSKahS4ofaEwYl7_qp9mw) — Onur Mutlu Lectures · 15 videos · 6.6h across 15 episodes

**Watch only this:** Lectures 1-5 and 10-12, about 3.5 hours — focusing on GPU programming basics, SIMD, software and memory hierarchy, performance considerations, and key parallel patterns like prefix sum and sparse matrices.

*Why it unblocks this paper:* Onur Mutlu's 'Programming Heterogeneous Computing Systems with GPUs and other Accelerators' is a concise, well-structured series that covers GPU programming, memory hierarchy, and parallel patterns, providing a practical and accessible introduction to heterogeneous computing relevant to FZModules.

*If you want all of it:* 6.6 hours across all 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FZModules framework for customizable scientific data compression pipelines, start by building foundational knowledge on heterogeneous CPU-GPU computing architectures and asynchronous task execution frameworks, which underpin the framework's design. Next, explore scientific data compression methods to grasp the types of compression techniques integrated and compared. Finally, focus on the core concept of error-bounded lossy compression pipelines and the authors' own talk presenting FZModules to gain direct insight into their novel contributions and evaluation.

### Heterogeneous CPU GPU computing *(prerequisite)*
Understanding heterogeneous CPU-GPU computing is essential as FZModules leverages both CPU and GPU modules to optimize compression pipelines. This section covers the architectural and programming aspects of heterogeneous systems, providing the foundation for appreciating how FZModules manages mixed hardware pipelines.

*How the paper uses it:* FZModules supports heterogeneous CPU-GPU pipelines to enable flexible and high-performance compression.

▶ [HetSys Course: Lecture 1: Hands-on Acceleration on Heterogeneous Computing Systems (Spring 2022)](https://www.youtube.com/watch?v=oFO5fTrgFIY) — Onur Mutlu Lectures · 41:54 · 4 years ago

### Asynchronous task execution frameworks *(prerequisite)*
Asynchronous task execution frameworks are key to managing concurrency and dependencies in FZModules' compression pipeline execution. This section introduces the concepts and mechanisms behind asynchronous programming, which are critical for understanding how CUDASTF integrates with FZModules to improve performance.

*How the paper uses it:* FZModules integrates CUDASTF, an asynchronous task execution library, to manage dependencies and concurrency automatically.

▶ [C# Async Programming - Part 1: Conceptual Background](https://www.youtube.com/watch?v=FIZVKteEFyk) — Rainer Stropek · 29:49 · 5 years ago

### Scientific data compression methods *(prerequisite)*
This section provides context on the scientific data compression techniques that FZModules builds upon and compares against. It covers GPU-accelerated compression algorithms and the challenges of compressing large scientific datasets, which are central to the motivation and evaluation of the framework.

*How the paper uses it:* FZModules extends GPU-based compressors like cuSZ and evaluates against state-of-the-art scientific data compressors.

▶ [Accelerating scientific data compression with advanced GPUs - Xin Liang](https://www.youtube.com/watch?v=2K0hsrmpPKE) — University of Kentucky - Computer Science · 1:02:59 · 1 year ago

### Error-bounded lossy compression pipelines
Error-bounded lossy compression pipelines are the core method enabling customizable compression balancing quality and size in FZModules. This section focuses on the principles and applications of error-bounded lossy compression, which is fundamental to the framework's design and performance trade-offs.

*How the paper uses it:* FZModules assembles error-bounded lossy compression pipelines from modular components to optimize rate-distortion and speed.

▶ [The Use of Lossy Compression to Enable Breakthrough Science in Cloud Modeling](https://www.youtube.com/watch?v=DFs-vM_t1ZI) — Leigh Orf's Thunderstorm Research · 13:30 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FZModules framework for customizable scientific data compression, start by learning the basics of heterogeneous CPU-GPU computing, which underpins the framework's hardware design. Next, grasp asynchronous task execution frameworks to appreciate how the pipeline manages concurrency and dependencies. Then, study scientific data compression methods to contextualize the compression techniques involved. Finally, explore error-bounded lossy compression pipelines, the core method enabling flexible trade-offs in compression quality and speed, directly related to FZModules' modular pipeline design.

### Heterogeneous CPU GPU computing *(prerequisite)*
This concept explains how CPUs and GPUs differ and work together in computing systems. Understanding their complementary strengths helps grasp why FZModules uses both to optimize compression pipelines. It covers the basics of GPU architecture and how heterogeneous systems accelerate workloads.

*How the paper uses it:* FZModules supports heterogeneous CPU-GPU pipelines to leverage the strengths of both hardware types for efficient compression.

▶ [Stanford Seminar - NVIDIA GPU Computing: A Journey from PC Gaming to Deep Learning](https://www.youtube.com/watch?v=98Xis1W1mMk) — Stanford Online · 1:06:17 · 8 years ago

### Asynchronous task execution frameworks *(prerequisite)*
Asynchronous task execution allows programs to run multiple tasks concurrently without waiting for each to finish sequentially. This improves performance by managing dependencies and resource usage efficiently. Understanding this helps explain how FZModules uses CUDASTF to orchestrate compression pipeline stages.

*How the paper uses it:* FZModules integrates CUDASTF, an asynchronous task execution library, to automatically manage concurrency and memory between CPU and GPU tasks.

▶ [9 JavaScript Runtime/Asynchronous Execution: Event Loop, Microtask, Macrotask, Call Stack, Web API](https://www.youtube.com/watch?v=WJXjwpntThk) — Dr Nitin Naik - Aston University, UK · 9:32 · 8 months ago

### Scientific data compression methods *(prerequisite)*
This covers the types of compression algorithms used to reduce large scientific datasets, including lossy and lossless methods. It provides context on the challenges and techniques relevant to scientific data, such as prediction and encoding stages.

*How the paper uses it:* FZModules builds on GPU-accelerated scientific data compression methods like cuSZ, combining multiple compression stages for optimized pipelines.

▶ [Accelerating scientific data compression with advanced GPUs - Xin Liang](https://www.youtube.com/watch?v=2K0hsrmpPKE) — University of Kentucky - Computer Science · 1:02:59 · 1 year ago

### Error-bounded lossy compression pipelines
Error-bounded lossy compression allows controlled data loss to achieve higher compression ratios while guaranteeing a maximum error threshold. Understanding this concept is key to appreciating how FZModules enables customizable pipelines balancing speed, compression ratio, and data quality.

*How the paper uses it:* FZModules assembles error-bounded lossy compression pipelines from modular stages to tailor compression to dataset and hardware needs.

▶ [The Use of Lossy Compression to Enable Breakthrough Science in Cloud Modeling](https://www.youtube.com/watch?v=DFs-vM_t1ZI) — Leigh Orf's Thunderstorm Research · 13:30 · 4 years ago

## Already in your library

- [HetSys Course: Lecture 1: Programming Heterogeneous Computing Systems with GPUs (Spring 2023)](https://www.youtube.com/watch?v=8JGo2zylE80) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the FZModules framework for customizable scientific data compression pipelines. Starting with a beginner-level project that reproduces a core asynchronous task execution concept using familiar tools, the intermediate project involves reimplementing a simplified modular compression pipeline inspired by FZModules and benchmarking it against a baseline. The advanced project tackles one of the paper's stated limitations by extending the framework with an automatic module selection mechanism, showcasing your ability to innovate on the paper's future directions.

### Beginner — Asynchronous Task Pipeline Simulation
*Effort: a weekend, ~8 hours*

You build a small asynchronous task execution simulation in Python that models a simplified version of the CUDASTF task-based asynchronous execution used in FZModules. The simulation will demonstrate task dependencies, concurrency, and memory management between CPU and GPU-like tasks using Python's asyncio or threading.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of asynchronous task execution and dependency management that underpins FZModules' heterogeneous CPU-GPU pipeline design.

**Grounded in:** Integration of CUDASTF to enable asynchronous task-level concurrency and automatic memory management between CPU and GPU tasks.

**Tech stack:** Python 3.11, asyncio

**Data:** No external dataset needed; tasks and dependencies are simulated.

**Build it:**

1. Design a set of mock tasks representing CPU and GPU compression stages with dependencies.
2. Implement asynchronous execution of tasks respecting dependencies using Python asyncio.
3. Simulate memory transfer delays between CPU and GPU tasks.
4. Measure and log task execution order and concurrency.
5. Write a README explaining how this models the CUDASTF asynchronous execution in FZModules.

**Ships as:** A GitHub repo with Python code simulating asynchronous task execution and a README linking the simulation to the CUDASTF integration in FZModules.

**Stretch goal:** Add a simple visualization of task execution timelines to illustrate concurrency and dependencies.

### Intermediate — Modular Compression Pipeline Prototype
*Effort: 2 weekends, ~20 hours*

You implement a simplified modular compression pipeline inspired by FZModules, decomposing compression into preprocessing, prediction, and encoding stages. You apply it to a publicly available scientific dataset (e.g., a subset of climate or simulation data from a public repository) and compare compression ratio and speed against a baseline zstd compressor.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core contribution: modular pipeline construction for error-bounded lossy compression and heterogeneous execution. It also shows your ability to benchmark compression performance metrics similar to the paper's evaluation.

**Grounded in:** Design of FZModules, an extensible framework for creating customized error-bounded lossy compression pipelines on heterogeneous systems.

**Tech stack:** Python 3.11, NumPy, zstandard (zstd) Python bindings, asyncio or concurrent.futures

**Data:** Use a publicly available scientific dataset such as a climate simulation subset from NOAA or NASA open data repositories as a substitute for the paper's datasets.

**Build it:**

1. Select and download a small scientific dataset suitable for compression experiments.
2. Implement modular pipeline stages: preprocessing (e.g., normalization), prediction (e.g., simple delta coding), and encoding (using zstd).
3. Compose the pipeline to process the dataset asynchronously or sequentially.
4. Measure compression ratio, throughput, and reconstruction error.
5. Compare results against direct zstd compression of the raw data.
6. Document the pipeline design, metrics, and comparison in a README.

**Verified links from the paper:**

- <https://github.com/facebook/zstd> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/enfiskutensykkel/multi-gpu-bwtest> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with modular compression pipeline code, benchmark scripts, and a README reporting compression metrics and comparison to baseline.

**Stretch goal:** Add a simple CPU-GPU hybrid execution simulation by offloading prediction to a GPU-accelerated library (if accessible).

### Advanced — Automatic Module Selection for Compression Pipelines
*Effort: 3+ weeks*

You extend the modular compression pipeline prototype by implementing an automatic module selection mechanism that chooses pipeline modules dynamically based on input data characteristics and hardware constraints. This addresses a key limitation and future direction from the paper. You evaluate the mechanism on multiple datasets and report improvements in pipeline construction efficiency and compression performance.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future work by tackling automatic pipeline construction. It demonstrates your ability to innovate on the framework and adapt compression strategies dynamically, a critical step toward practical deployment.

**Grounded in:** Develop an automatic module selection mechanism based on data characteristics, hardware, and quality requirements to simplify pipeline construction.

**Tech stack:** Python 3.11, NumPy, scikit-learn, zstandard (zstd) Python bindings, asyncio or concurrent.futures

**Data:** Use multiple publicly available scientific datasets (e.g., subsets from NOAA, NASA, or other open scientific data) to test module selection across varying data characteristics.

**Build it:**

1. Analyze dataset characteristics (e.g., entropy, variance) to define features for module selection.
2. Implement a simple decision engine or machine learning model to select pipeline modules based on data features and hardware constraints.
3. Integrate the selection mechanism into the modular compression pipeline.
4. Evaluate compression ratio, speed, and reconstruction error across datasets with and without automatic selection.
5. Document the design, evaluation, and limitations in a detailed README.

**Verified links from the paper:**

- <https://github.com/facebook/zstd> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/enfiskutensykkel/multi-gpu-bwtest> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with an extended modular compression pipeline supporting automatic module selection, evaluation scripts, and comprehensive documentation.

**Stretch goal:** Incorporate real asynchronous heterogeneous CPU-GPU execution using CUDASTF or a similar task execution library if accessible.

_The paper's authors did not release their own code for FZModules, so the intermediate and advanced projects require reimplementation from the paper's descriptions; publicly available scientific datasets must be used as substitutes for the paper's proprietary datasets._
