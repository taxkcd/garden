---
title: "350 · MicroSampler: A Framework for Microarchitecture-Level Leakage Detection in Constant Time Execution — Radu Teodorescu"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-radu-teodorescu"
source_hash: "5867d2140b1c2e9745e72f579da3f04dd5d155ef75946d404e0b562697b8234f"
sequence: 350
generator: "outreach-garden: managed"
---

# 350 · MicroSampler: A Framework for Microarchitecture-Level Leakage Detection in Constant Time Execution

## At a glance

- **Professor:** Radu Teodorescu
- **Institution:** Ohio State University
- **Paper:** [MicroSampler: A Framework for Microarchitecture-Level Leakage Detection in Constant Time Execution](https://radu.teodorescu.us/assets/pdf/microsampler_dsn2025.pdf)
- **Authors:** Moein Ghaniyoun, Kristin Barber, Yinqian Zhang, Radu Teodorescu
- **Year:** 2025

## Paper overview

MicroSampler is a dynamic framework designed to detect microarchitectural side-channel leakages in software that is intended to run in constant time, such as cryptographic algorithms. It runs the software on a cycle-accurate hardware simulator to capture detailed microarchitectural state and uses statistical analysis to find correlations between secret data and hardware behavior that could leak information.

### Why it matters

**Research problem:** Constant-time programming aims to prevent timing side-channel attacks by ensuring execution time does not depend on secret data. However, assumptions about hardware behavior are often incomplete or incorrect, leading to vulnerabilities that originate at the microarchitectural level, compiler optimizations, or algorithm design. Existing leakage detection tools either focus on software or hardware separately and do not scale well to complex processors.

**Why it matters:** Side-channel attacks exploiting microarchitectural features can breach confidentiality and integrity of security-critical applications, such as cryptographic software. Detecting these vulnerabilities before deployment is crucial to building trustworthy systems, especially as modern processors have complex microarchitectures that can leak secret data in subtle ways.

**Key contributions:**

- First framework enabling joint verification of constant-time algorithms, compiler output, and microarchitectural implementation.
- Uses principled statistical methods to identify correlations between secret data and microarchitectural state.
- Automatically flags microarchitectural sources of leakage even if not directly observable as timing differences.
- Scales linearly with design size and simulation cycles, enabling analysis of large, complex processors (e.g., RISC-V BOOM with ~700K state bits).
- Leverages actual RTL simulations without modeling assumptions, fitting into standard hardware design workflows.

## About the professor

**Radu Teodorescu** — Professor, Department of Computer Science and Engineering, Ohio State University.

Research interests: computer architecture, energy efficient computing, security and reliability

### Research links

- [Faculty/profile page](https://engineering.osu.edu/people/teodorescu.1)
- [Identity evidence](http://web.cse.ohio-state.edu/~teodores)
- [Identity evidence](https://radu.teodorescu.us/)
- [Lab website](https://archlab.us/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MicroSampler framework and its contributions, start by building foundational knowledge on constant-time programming security, cycle-accurate hardware simulation, and statistical methods for side-channel analysis. These prerequisites provide the necessary background on the security goals, the simulation techniques used, and the statistical tools applied. Finally, focus on the core concept of microarchitectural side-channel leakage detection, culminating with the authors' own talk or the closest available academic-level presentation to grasp the framework's design and evaluation.

### Constant-time programming security *(prerequisite)*
Constant-time programming is the foundational security discipline that MicroSampler aims to verify. Understanding the principles and challenges of writing constant-time code, as well as existing verification approaches, is essential to appreciate why MicroSampler's cross-stack analysis is novel and necessary.

*How the paper uses it:* MicroSampler targets leakage detection in constant-time execution kernels to ensure timing side-channel resistance.

▶ [Verifying Constant-Time Implementations](https://www.youtube.com/watch?v=Ykr9gGZavU0) — Microsoft Research · 10 years ago

### Cycle-accurate hardware simulation *(prerequisite)*
Cycle-accurate simulation is the key technique MicroSampler uses to capture detailed microarchitectural state at every cycle. Understanding how cycle-accurate simulators work and their role in hardware verification provides insight into the framework's ability to analyze complex processors without modeling assumptions.

*How the paper uses it:* MicroSampler runs target code on a cycle-accurate RTL simulator to gather microarchitectural state for leakage analysis.

▶ [Introduction to cycle-accurate Verilog simulation, Dr Graham ...](https://www.youtube.com/watch?v=UbJ7dk9GMiI) — AB Open · 26:27

### Statistical methods for side-channel analysis *(prerequisite)*
Statistical analysis is central to MicroSampler's approach for detecting correlations between secret data and microarchitectural state. Familiarity with statistical significance testing and correlation measures used in side-channel analysis helps understand how MicroSampler flags potential leakages.

*How the paper uses it:* MicroSampler uses statistical tests like Cramér’s V and chi-squared p-values to detect secret-dependent microarchitectural leakage.

▶ [Protecting Circuits from Leakage: The Computationally ...](https://www.youtube.com/watch?v=-N_ifjZ9ZDk) — Microsoft Research · 58:04

### Microarchitectural side-channel leakage detection
This concept covers the detection of subtle microarchitectural leakages that can undermine constant-time guarantees. Videos in this category provide context on the state-of-the-art in automated detection of microarchitectural leaks, complementing MicroSampler’s approach.

*How the paper uses it:* MicroSampler advances microarchitectural leakage detection by combining microarchitectural simulation with statistical correlation analysis.

▶ [SAFARI Live Seminar - Automatic Detection of Microarchitectural Leaks](https://www.youtube.com/watch?v=rzSxWEr4qPs) — Onur Mutlu Lectures · Streamed 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the MicroSampler framework and its significance, start by learning the foundational concept of constant-time programming security, which is the security goal MicroSampler aims to verify. Next, grasp the importance of cycle-accurate hardware simulation, the key technique MicroSampler uses to capture detailed microarchitectural state. Then, study statistical methods for side-channel analysis to understand how MicroSampler detects correlations between secret data and hardware behavior. Finally, explore microarchitectural side-channel leakage detection to see the broader context of MicroSampler's approach and its place in hardware security.

### Constant-time programming security *(prerequisite)*
Constant-time programming is a method to prevent timing side-channel attacks by ensuring that the execution time of code does not depend on secret data. Understanding this concept is crucial because MicroSampler analyzes software that claims to run in constant time to detect hidden leakages.

*How the paper uses it:* MicroSampler targets software intended to run in constant time to detect microarchitectural leakages that break this security assumption.

▶ [Verifying Constant-Time Implementations](https://www.youtube.com/watch?v=Ykr9gGZavU0) — Microsoft Research · 10 years ago

### Cycle-accurate hardware simulation *(prerequisite)*
Cycle-accurate hardware simulation models a processor's behavior at the granularity of individual clock cycles, capturing detailed microarchitectural state changes. This technique allows precise observation of hardware behavior necessary for detecting subtle leakages.

*How the paper uses it:* MicroSampler uses cycle-accurate RTL simulation to capture detailed microarchitectural state during execution for leakage detection.

▶ [Introduction to cycle-accurate Verilog simulation, Dr Graham ...](https://www.youtube.com/watch?v=UbJ7dk9GMiI) — AB Open · 26:27

### Statistical methods for side-channel analysis *(prerequisite)*
Statistical methods help identify correlations between secret data and observable hardware behavior, which indicate potential side-channel leakages. Understanding these methods is key to grasping how MicroSampler detects and quantifies leakage risks.

*How the paper uses it:* MicroSampler applies statistical tests like Cramér’s V and chi-squared p-values to detect correlations between secret data and microarchitectural state.

▶ [Protecting Circuits from Leakage: The Computationally ...](https://www.youtube.com/watch?v=-N_ifjZ9ZDk) — Microsoft Research · 58:04

### Microarchitectural side-channel leakage detection
This concept covers how attackers exploit hardware features to leak secret information and how detection frameworks identify such vulnerabilities. It provides context for MicroSampler’s approach and highlights the challenges in securing modern processors.

*How the paper uses it:* MicroSampler is a framework designed specifically to detect microarchitectural side-channel leakages in constant-time execution kernels.

▶ [SAFARI Live Seminar - Automatic Detection of Microarchitectural Leaks](https://www.youtube.com/watch?v=rzSxWEr4qPs) — Onur Mutlu Lectures · Streamed 2 years ago

## Already in your library

- [Lecture on Microarchitectural Side-Channel Attacks](https://www.youtube.com/watch?v=B2vGGoT-a4M) — also for: Rigorous Evaluation of Microarchitectural Side-Channels with Statistical Model Checking (Daniel J. Sorin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of MicroSampler's approach to detecting microarchitectural side-channel leakages in constant-time software. The beginner project reproduces a core statistical analysis concept from the paper using simple simulated data. The intermediate project implements the MicroSampler statistical leakage detection method on a small cycle-accurate simulation trace, comparing to a baseline. The advanced project extends the framework toward automating microarchitectural unit selection to reduce false negatives, addressing a stated future direction.

### Beginner — Statistical Correlation Analysis for Side-Channel Leakage
*Effort: a weekend, ~8 hours*

You build a small Python tool that simulates microarchitectural state snapshots and secret data values, then computes Cramér’s V and chi-squared p-values to detect correlations between secret-dependent inputs and hardware state. This reproduces the core statistical method MicroSampler uses to flag potential leakages.

**Why it shows you understood the paper:** This project shows you understand the fundamental statistical approach MicroSampler uses to detect leakage correlations, a key contribution of the paper.

**Grounded in:** Uses principled statistical methods to identify correlations between secret data and microarchitectural state.

**Tech stack:** Python 3.11, Jupyter Notebook, scipy, numpy, matplotlib

**Data:** Simulated microarchitectural state snapshots and secret data labels generated within the project; no external dataset required.

**Build it:**

1. Simulate or generate a small dataset of microarchitectural state snapshots labeled by secret data values.
2. Implement calculation of contingency tables for state vs. secret data.
3. Compute Cramér’s V statistic and chi-squared test p-values using scipy.
4. Visualize correlation strength and statistical significance.
5. Write a README explaining how this statistical test relates to leakage detection in MicroSampler.

**Ships as:** A Jupyter notebook or Python script demonstrating statistical correlation detection on simulated data, with plots and explanations.

**Stretch goal:** Add a simple CLI interface to analyze arbitrary input data files with the same statistical tests.

### Intermediate — Reimplementation of MicroSampler Leakage Detection on Cycle-Accurate Trace
*Effort: 2 weekends, ~20 hours*

You reimplement the core MicroSampler method by running a small constant-time cryptographic kernel on a cycle-accurate RTL simulator (or a simplified cycle-accurate simulator if RTL is unavailable), capturing microarchitectural state snapshots per cycle. Then you partition execution traces by secret data, hash snapshots, and apply statistical tests to detect leakage correlations, comparing results to a baseline that does not use statistical filtering.

**Why it shows you understood the paper:** This project demonstrates you can apply the paper’s core method end-to-end, including trace partitioning, hashing, and statistical analysis, and understand the importance of statistical significance testing to reduce false positives.

**Grounded in:** MicroSampler runs the target constant-time code on a cycle-accurate RTL simulator, capturing detailed microarchitectural state at cycle granularity during execution. It partitions execution traces into iterations linked to secret data values, hashes microarchitectural snapshots, and uses statistical tests (Cramér’s V and chi-squared p-values) to detect correlations between secret data and hardware state.

**Tech stack:** Python 3.11, scipy, numpy, matplotlib, RISC-V BOOM or SCARV CPU simulator if accessible, GitHub Actions for CI

**Data:** Use a small constant-time cryptographic kernel (e.g., modular exponentiation from BearSSL or a simplified toy kernel) run on a cycle-accurate simulator. If RTL simulator is unavailable, simulate microarchitectural state traces synthetically to mimic the paper’s data structure.

**Build it:**

1. Obtain or implement a small constant-time cryptographic kernel.
2. Run the kernel on a cycle-accurate simulator (e.g., SCARV CPU simulator from https://github.com/scarv/scarv-cpu) to collect microarchitectural state snapshots per cycle.
3. Partition the collected trace into iterations keyed by secret data values.
4. Hash microarchitectural snapshots and build contingency tables.
5. Compute Cramér’s V and chi-squared p-values to detect correlations.
6. Compare results to a baseline that flags leakage without statistical filtering.
7. Document findings and explain the importance of statistical significance testing.

**Verified links from the paper:**

- <https://github.com/scarv/scarv-cpu> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/scarv/xcrypto> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with scripts to run the kernel simulation, process traces, perform statistical leakage detection, and a report comparing baseline and MicroSampler-style analysis.

**Stretch goal:** Extend the analysis to detect a known compiler optimization vulnerability in libgcrypt as described in the paper.

### Advanced — Automated Microarchitectural Unit Selection for Leakage Detection
*Effort: 3-4 weeks*

You extend the MicroSampler framework by developing an automated method to select which microarchitectural units or state bits to track during simulation to reduce false negatives, addressing a key limitation noted in the paper. This involves analyzing correlations across subsets of microarchitectural state, applying feature selection or dimensionality reduction techniques, and integrating this with the statistical leakage detection pipeline.

**Why it shows you understood the paper:** This project tackles a stated future direction of MicroSampler and shows deep comprehension of the framework’s limitations and how to improve its coverage and accuracy by automating microarchitectural state selection.

**Grounded in:** Automate selection of microarchitectural units to track to reduce false negatives.

**Tech stack:** Python 3.11, scipy, numpy, scikit-learn, matplotlib, GitHub Actions, cycle-accurate simulator or synthetic data generator

**Data:** Use microarchitectural state traces from a cycle-accurate simulator or synthetically generated data structured like MicroSampler outputs.

**Build it:**

1. Review MicroSampler’s approach to tracking microarchitectural units and its limitations.
2. Implement feature selection or dimensionality reduction (e.g., PCA, mutual information) to identify microarchitectural state bits most correlated with secret data.
3. Integrate this automated selection into the leakage detection pipeline to focus analysis on relevant units.
4. Evaluate the approach on simulated traces to measure reduction in false negatives and false positives.
5. Document methodology, results, and potential improvements.

**Verified links from the paper:**

- <https://github.com/scarv/scarv-cpu> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/scarv/xcrypto> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with code implementing automated microarchitectural unit selection integrated with statistical leakage detection, plus evaluation results and documentation.

**Stretch goal:** Explore extending the framework to transient execution effects or integrate with compiler toolchains for feedback.

_Access to cycle-accurate RTL simulation or detailed microarchitectural state traces is required for intermediate and advanced projects; if unavailable, synthetic data generation must be used as a substitute._
