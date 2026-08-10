---
title: "288 · DiscoRD: An Experimental Methodology for Quickly Discovering the Reliable Read Disturbance Threshold of Real DRAM Chips — Minesh Patel"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-minesh-patel"
source_hash: "e0545de749a13d169ee2a929568a2dda3dd6b0b0a92935d3e12be45400ae8d95"
sequence: 288
generator: "outreach-garden: managed"
---

# 288 · DiscoRD: An Experimental Methodology for Quickly Discovering the Reliable Read Disturbance Threshold of Real DRAM Chips

## At a glance

- **Professor:** Minesh Patel
- **Institution:** Rutgers University
- **Paper:** [DiscoRD: An Experimental Methodology for Quickly Discovering the Reliable Read Disturbance Threshold of Real DRAM Chips](https://arxiv.org/abs/2603.12435)
- **Authors:** Ataberk Olgun, F. Nisa Bostancı, İsmail Emir Yüksel, Haocong Luo, Minesh Patel, A. Giray Yağlıkçı, Onur Mutlu
- **Year:** 2026

## Paper overview

This paper presents DiscoRD, a new experimental method to quickly and reliably find the minimum number of times a DRAM row can be activated before causing errors in nearby rows (read disturbance threshold or RDT). The authors experimentally characterize 212 real DDR4 DRAM chips and show that RDT varies significantly over time and across rows. They develop an empirical model to predict error probabilities and demonstrate that combining error-correcting codes with adaptive mitigation techniques can greatly improve system reliability and efficiency.

### Why it matters

**Research problem:** Modern DRAM chips suffer from read disturbance errors (e.g., RowHammer and RowPress), where repeatedly activating or keeping open an aggressor row causes bitflips in nearby victim rows. Accurately and rapidly determining the read disturbance threshold (RDT) for every DRAM row is time-consuming and challenging due to temporal and spatial variations in RDT.

**Why it matters:** Read disturbance errors threaten memory isolation and system security. Existing mitigation techniques rely on RDT values, but inaccurate or one-time RDT measurements can lead to either performance and energy inefficiencies or uncorrectable errors. Efficient and reliable RDT characterization is critical for secure, high-performance, and energy-efficient memory systems.

**Key contributions:**

- Developed DiscoRD, a fast and reliable methodology to identify minimum RDT across all DRAM rows with a single measurement.
- Performed large-scale experimental characterization of 212 DDR4 DRAM chips for read disturbance bitflips.
- Provided an empirical model to evaluate uncorrectable error probabilities under read disturbance.
- Demonstrated that using lightweight ECC alone yields high uncorrectable error probability, but combining ECC with memory scrubbing and configurable thresholds greatly reduces errors.
- Adapted DiscoRD to account for spatial variation in RDT and showed the necessity of considering temporal variation for secure mitigation.

## About the professor

**Minesh Patel** — Assistant Professor, Computer Science, Rutgers University.

Research interests: intersection between computer architecture, systems, and dependability; architectures, programming interfaces, and runtime support for highly-efficient, cost-effective dependable systems; system optimizations, mechanisms, and techniques to provide architectural, runtime and/or application control over security and reliability concerns.

### Research links

- [Faculty/profile page](https://www.mineshp.com)
- [Resolved homepage](https://www.mineshp.com/)
- [Google Scholar](https://scholar.google.com/citations?user=om-NSbgAAAAJ)
- [GitHub](https://github.com/CMU-SAFARI/BEER)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** DRAM architecture and reliability
**The paper assumes:** DRAM internal architecture, memory cell operation, read disturbance errors, and reliability mechanisms
**Already in this field?** Skip this entirely if you already understand DRAM chip design, common failure modes like RowHammer, and standard reliability techniques in memory systems.

To understand the DiscoRD paper on DRAM read disturbance thresholds, a solid grasp of DRAM architecture, operation, and reliability challenges is essential. The rigorous course option provides a comprehensive university-level foundation in computer architecture including memory systems, while the fast track offers a concise, focused introduction to DRAM fundamentals and operation. Choose the course for deep, structured learning; choose the fast track for a quick, visual primer on DRAM concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Advanced Computer Architecture](https://www.youtube.com/playlist?list=PLwdnzlV3ogoWJhBxBYu-K4l-q-nNHd24D) — NPTEL IIT Guwahati · 34 videos · 19.7h across 34 episodes

**Watch only this:** Lectures 13 to 16 (Introduction to Cache Memory, Block Replacement Techniques & Write Strategy, Optimization Techniques in Cache Memory, Advanced Cache Optimization Techniques), about 2.3 hours — these focus on memory system design and optimization relevant to DRAM reliability and disturbance.

*Why it unblocks this paper:* This NPTEL IIT Guwahati Advanced Computer Architecture playlist covers fundamental and advanced topics in computer architecture including detailed lectures on memory hierarchy and cache memory, which are crucial for understanding DRAM operation and reliability issues addressed in the paper.

*If you want all of it:* 19.7 hours across 34 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [DRAM](https://www.youtube.com/playlist?list=PLMeF8KgQb-8xldKQVxmTKA8plUWM7JZhw) — Paul Ji · 14 videos · 2.7h across the first 13 episodes

**Watch only this:** First 7 episodes (DRAM 02 : DRAM cell 동작원리 만., RAM Explained - Random Access Memory, Different Types of DRAM: SDRAM/DDR1/DDR2/DDR3/DDR4/LPDDR/GDDR, What is DRAM?, OLD Dynamic Random Access Memory (DRAM). Part 1: Memory Cell Arrays, Dynamic Random Access Memory (DRAM). Part 2: Read and Write Cycles, Dynamic Random Access Memory (DRAM). Part 3: Binary Decoders), about 1.4 hours — covers DRAM cell basics, operation, and types relevant to the paper.

*Why it unblocks this paper:* Paul Ji's DRAM playlist provides a clear, visual, and concise explanation of DRAM fundamentals, including cell operation, read/write cycles, and types of DRAM, which directly supports understanding the experimental methodology and terminology used in the paper.

*If you want all of it:* 2.7 hours across the first 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DiscoRD paper, start with foundational knowledge on DRAM architecture and operation to grasp how DRAM cells work and why read disturbance occurs. Next, study the background on RowHammer and memory disturbance errors, which motivate the need for reliable read disturbance threshold testing. Then, learn about DRAM read disturbance threshold testing methods and experimental characterizations, including related recent research by the authors' group. Finally, focus on the core concept of the DiscoRD methodology and its empirical modeling of error probabilities and mitigation strategies through the authors' own talks and related presentations.

### DRAM architecture and operation *(prerequisite)*
Understanding the internal structure and operation of DRAM is essential to appreciate how read disturbance errors arise. This includes knowledge of DRAM cells, refresh cycles, and row activations, which form the basis for the vulnerabilities studied in the paper.

*How the paper uses it:* The paper investigates read disturbance errors in DRAM, so foundational knowledge of DRAM internals is critical.

▶ [DRAM || Read, Write and Hold Operation || Concept of Refresh Cycles in DRAM](https://www.youtube.com/watch?v=2AG9y5s0gjg) — Engineers Learning Hub - Dr. Irfan Ahmad Pindoo · 6 years ago

### RowHammer and memory disturbance errors *(prerequisite)*
RowHammer and related read disturbance vulnerabilities are the key motivation behind the DiscoRD methodology. This section covers the nature of these errors, their security implications, and prior mitigation attempts, providing context for why accurate RDT measurement matters.

*How the paper uses it:* The paper addresses challenges in reliably identifying read disturbance thresholds to mitigate RowHammer-like errors.

▶ [Fundamentally Understanding and Solving RowHammer by A. Giray Yaglikci](https://www.youtube.com/watch?v=Knyv8Vi9ogE) — Onur Mutlu Lectures · 19:50 · 4 years ago

### DRAM read disturbance threshold testing
This section focuses on experimental methodologies to identify the read disturbance threshold in DRAM chips, including recent research talks by the authors and their group. It provides insight into the state-of-the-art techniques and challenges that DiscoRD aims to overcome.

*How the paper uses it:* DiscoRD is a novel, rapid, and reliable RDT testing methodology developed by the paper's authors.

▶ [An Experimental Analysis of RowHammer in HBM2 DRAM Chips | Full Talk/Q&A in DSN'23 by Ataberk Olgun](https://www.youtube.com/watch?v=0OkYwavtrMc) — Onur Mutlu Lectures · 3 years ago

### Empirical modeling of hardware reliability *(prerequisite)*
Empirical modeling helps predict error probabilities and system reliability, which is central to the paper's approach in evaluating mitigation strategies. This section introduces reliability concepts and modeling techniques relevant to hardware error characterization.

*How the paper uses it:* The paper develops an empirical model to predict uncorrectable error probabilities under read disturbance.

▶ [Stanford Seminar - Flash Reliability in Production: The Expected and the Unexpected](https://www.youtube.com/watch?v=60OmhRJ0CUA) — Stanford Online · 1:04:42 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the DiscoRD paper, start by learning the fundamentals of DRAM architecture and operation, which is essential to grasp how memory cells work and why read disturbance occurs. Next, build intuition on RowHammer and memory disturbance errors, the key vulnerabilities motivating this research. Then, learn about DRAM read disturbance threshold testing methods to appreciate the core experimental approach. Finally, explore error correcting codes in memory systems to understand mitigation strategies evaluated in the paper.

### DRAM architecture and operation *(prerequisite)*
DRAM stores data in capacitors that need periodic refreshing. Understanding how DRAM reads, writes, and refreshes data is crucial to grasp why repeated row activations can cause errors in neighboring rows.

*How the paper uses it:* The paper studies errors caused by repeated activations in DRAM rows, so understanding DRAM internals is foundational.

▶ [DRAM || Read, Write and Hold Operation || Concept of Refresh Cycles in DRAM](https://www.youtube.com/watch?v=2AG9y5s0gjg) — Engineers Learning Hub - Dr. Irfan Ahmad Pindoo · 6 years ago

### RowHammer and memory disturbance errors *(prerequisite)*
RowHammer is a phenomenon where repeatedly activating a DRAM row causes bit flips in adjacent rows, threatening data integrity and security. Learning about this vulnerability provides context for why read disturbance thresholds matter.

*How the paper uses it:* The paper addresses read disturbance errors like RowHammer, which motivate the need for reliable threshold detection.

▶ [Rowhammer Attack Explained: Flipping Bits with Physics](https://www.youtube.com/watch?v=O2o7kEMixhg) — CodeLucky · 7 months ago

### DRAM read disturbance threshold testing
This concept covers how to experimentally determine the minimum number of activations before errors occur in DRAM rows. Understanding these testing methods helps appreciate the novelty and speed of the DiscoRD methodology.

*How the paper uses it:* DiscoRD is a new, fast, and reliable method for identifying read disturbance thresholds in DRAM chips.

▶ [Computer Architecture - Lecture 7: Cutting Edge Research on DRAM Read Disturbance (Fall 2023)](https://www.youtube.com/watch?v=O3IXOFsyvFo) — Onur Mutlu Lectures · Streamed 2 years ago

### Error correcting codes in memory systems *(prerequisite)*
Error correcting codes (ECC) detect and fix bit errors in memory, improving reliability. Knowing how ECC works is important to understand the mitigation strategies combined with DiscoRD in the paper.

*How the paper uses it:* The paper evaluates how combining ECC with DiscoRD-based mitigation reduces uncorrectable errors.

▶ [Linus was right. - ECC Memory Explained](https://www.youtube.com/watch?v=pPeCNrNTr3k) — Linus Tech Tips · 9:48 · 5 years ago

## Already in your library

- [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)
- [But what are Hamming codes? The origin of error correction](https://www.youtube.com/watch?v=X8jsijhllIA) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)
- [Frontiers in Machine Learning: Machine Learning Reliability ...](https://www.youtube.com/watch?v=JmcIE1zUDIM) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder that helps you demonstrate understanding of the DiscoRD paper's core contributions and challenges. Starting with a beginner project that reproduces a key experimental observation using simulated data, you then implement the core DiscoRD methodology on a smaller scale for intermediate depth. Finally, the advanced project tackles a future direction by exploring adaptive runtime mitigation strategies informed by temporal variation in RDT, bridging experimental characterization with system-level mechanisms.

### Beginner — Simulate and Visualize Temporal Variation in DRAM Read Disturbance Threshold
*Effort: a weekend, ~8 hours*

You build a Python simulation that models temporal variation in the minimum read disturbance threshold (RDTmin) for a small set of DRAM rows, inspired by the paper's Fig. 5 and Fig. 6. The simulation generates multiple RDTmin measurements over time with at least 21% variation and visualizes the distribution and variation using plots.

**Why it shows you understood the paper:** This project shows you understand the key challenge of temporal variation in RDTmin and its impact on reliability, a fundamental motivation behind DiscoRD's methodology.

**Grounded in:** Key result: "RDTmin varies significantly over time (at least 21% variation), making one-time RDT measurement unreliable."

**Tech stack:** Python 3.11, matplotlib, numpy, jupyter notebook

**Data:** Simulated RDTmin values generated according to the paper's reported variation statistics; no real DRAM data required.

**Build it:**

1. Implement a Python script to generate synthetic RDTmin values for 10-20 DRAM rows over 1000 time points with at least 21% variation.
2. Plot the distribution of RDTmin values per row and overall variation across time using matplotlib.
3. Compare the simulated variation to the paper's reported statistics and annotate the plots accordingly.
4. Write a README explaining the significance of temporal variation in RDTmin and how this simulation relates to the paper's findings.

**Ships as:** A Jupyter notebook or Python script with plots demonstrating temporal variation in RDTmin and a README explaining the connection to the paper.

**Stretch goal:** Add spatial variation by simulating different RDTmin distributions per row and visualize combined spatial-temporal variation.

### Intermediate — Reimplement DiscoRD's Rapid RDTmin Estimation Methodology
*Effort: 2 weekends, ~20 hours*

You reimplement the core DiscoRD methodology to rapidly estimate the minimum read disturbance threshold for a smaller set of DRAM rows using a synthetic or publicly available DRAM error dataset substitute. You compare your rapid estimation against a naive baseline that tests rows exhaustively and report metrics such as estimation time and accuracy.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's core experimental method into a practical implementation, understand its efficiency benefits, and evaluate its accuracy against simpler approaches.

**Grounded in:** Key contribution: "Developed DiscoRD, a fast and reliable methodology to identify minimum RDT across all DRAM rows with a single measurement."

**Tech stack:** Python 3.11, numpy, pandas, matplotlib

**Data:** Since no authors' dataset is released, you simulate DRAM row activation counts and error occurrences based on the paper's empirical error probability model and variation statistics.

**Build it:**

1. Study the paper's description of DiscoRD's methodology and error probability model.
2. Implement a Python program that simulates DRAM rows with varying RDTmin values and error probabilities.
3. Implement the rapid RDTmin estimation algorithm inspired by DiscoRD to find minimum thresholds with fewer tests.
4. Implement a baseline exhaustive search method that tests all rows multiple times to find minimum RDTmin.
5. Compare the two methods on simulated data in terms of runtime and accuracy of minimum RDTmin estimation.
6. Visualize results and write a report explaining the methodology, evaluation, and implications.

**Ships as:** A Python repository with scripts implementing DiscoRD-inspired rapid RDTmin estimation and baseline, evaluation results, and a detailed README.

**Stretch goal:** Incorporate a simple error-correcting code simulation to evaluate uncorrectable error probabilities under different RDTmin thresholds.

### Advanced — Adaptive Runtime Mitigation for Temporal Variation in DRAM Read Disturbance
*Effort: 3-4 weeks*

You design and prototype an adaptive runtime system that dynamically adjusts read disturbance mitigation parameters (e.g., refresh intervals, ECC thresholds) based on observed or predicted temporal shifts in RDTmin. You build a predictive model (e.g., simple ML regression) to anticipate RDTmin changes over time and integrate it with a mitigation policy simulator to evaluate reliability and performance trade-offs.

**Why it shows you understood the paper:** This project addresses a key future direction from the paper, showing you can extend DiscoRD's static characterization into a dynamic, system-level mechanism that accounts for temporal variation to improve reliability and efficiency.

**Grounded in:** Future direction: "Given the significant temporal variation in RDT and the challenges in definitively identifying minimum thresholds, how do you envision integrating DiscoRD with adaptive runtime mechanisms to dynamically adjust mitigation parameters in deployed systems?"

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, pandas

**Data:** Simulated temporal RDTmin sequences based on paper statistics; no real hardware data available.

**Build it:**

1. Review the paper's analysis of temporal variation and mitigation strategies combining ECC and scrubbing.
2. Generate synthetic temporal RDTmin data sequences for multiple DRAM rows over time.
3. Train a simple predictive model (e.g., linear regression or decision tree) to forecast near-future RDTmin values from past observations.
4. Design a mitigation policy simulator that adjusts ECC strength, scrubbing intervals, or refresh thresholds based on predicted RDTmin.
5. Evaluate the simulator's reliability (uncorrectable error probability) and performance overhead compared to static threshold policies.
6. Document the design, implementation, evaluation results, and discuss limitations and possible real-world integration.

**Ships as:** A Python-based adaptive mitigation simulator with predictive modeling, evaluation scripts, and a comprehensive README discussing the approach and results.

**Stretch goal:** Explore reinforcement learning to optimize mitigation policies dynamically based on system feedback.
