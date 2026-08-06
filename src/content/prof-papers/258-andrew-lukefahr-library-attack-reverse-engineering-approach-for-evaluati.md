---
title: "258 · Library-Attack: Reverse Engineering Approach for Evaluating Hardware IP Protection — Andrew Lukefahr"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-lukefahr"
source_hash: "a30b1e86ab4af98dbd0cddfe8fdd06d3d293830d9cd71a29bcece0d704971697"
sequence: 258
generator: "outreach-garden: managed"
---

# 258 · Library-Attack: Reverse Engineering Approach for Evaluating Hardware IP Protection

## At a glance

- **Professor:** Andrew Lukefahr
- **Institution:** Indiana University
- **Paper:** [Library-Attack: Reverse Engineering Approach for Evaluating Hardware IP Protection](https://arxiv.org/pdf/2501.12292)
- **Authors:** Aritra Dasgupta, Sudipta Paria, Swarup Bhunia, Christopher Sozio, Andrew Lukefahr
- **Year:** 2025

## Paper overview

This paper introduces Library-Attack, a new reverse engineering method that uses privileged knowledge of hardware IP protections and design details to recover original unprotected hardware designs from protected versions. The attack exploits gaps in current security models by creating a library of candidate designs and comparing structural similarities to identify the original IP, demonstrating vulnerabilities in existing IP-level countermeasures.

### Why it matters

**Research problem:** Existing hardware IP protection techniques like obfuscation and logic locking are vulnerable to adversaries with privileged access and knowledge, who can reverse engineer protected designs by leveraging prior knowledge and design features. Current threat models do not adequately consider such skilled attackers with supply chain access.

**Why it matters:** FPGAs and hardware IPs are widely used in critical applications from datacenters to airplanes. Protecting hardware IP against piracy, counterfeiting, and reverse engineering is crucial for security and trust in semiconductor supply chains. Overlooking advanced adversaries risks exposing sensitive design secrets.

**Key contributions:**

- Proposed Library-Attack, a novel reverse engineering methodology leveraging privileged information and prior knowledge of IP-level countermeasures.
- Demonstrated the efficacy of Library-Attack on ISCAS89 benchmarks transformed with two IP-level countermeasures: 128-bit XOR Locking and 128-bit LUT Obfuscation.
- Proposed an updated threat model for hardware IP protection that incorporates risks posed by highly skilled adversaries with privileged supply chain access.

## About the professor

**Andrew Lukefahr** — Indiana University.

Research interests: Field-Programmable Gate Array (FPGA) security, FPGA bitstream tamper prevention, FPGA piracy detection, Security of non-volatile FPGA architectures

### Research links

- [Faculty/profile page](https://homes.luddy.indiana.edu/lukefahr/)
- [Identity evidence](http://homes.sice.indiana.edu/lukefahr)
- [Lab website](http://sailin.luddy.indiana.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Library-Attack: Reverse Engineering Approach for Evaluating Hardware IP Protection,' start with foundational knowledge on hardware IP reverse engineering, logic locking and obfuscation, hypergraph modeling of hardware netlists, and electronic design automation (EDA) structural similarity methods. These prerequisites provide the technical background on hardware design protection, representation, and analysis techniques. Finally, focus on the core concept of the Library-Attack reverse engineering method itself to grasp the novel approach proposed by the authors.

### Hardware IP reverse engineering *(prerequisite)*
This section covers advanced talks on reverse engineering hardware designs, essential for understanding how protected hardware IP can be analyzed and recovered. The selected talk provides a detailed, technical perspective suitable for graduate-level readers, focusing on embedded devices and complex hardware systems.

*How the paper uses it:* Understanding hardware IP reverse engineering techniques is fundamental to grasping how Library-Attack recovers original designs from protected versions.

▶ [Embedded devices reverse engineering by Vitor Ventura ...](https://www.youtube.com/watch?v=gfDOil_WU6Q) — Recon Conference · 42:09

### Logic locking and obfuscation *(prerequisite)*
This section presents an advanced university lecture on logic locking, a core IP protection technique targeted by Library-Attack. The talk delves into the mechanisms and security implications of logic locking, providing the necessary background to understand the vulnerabilities exploited by the attack.

*How the paper uses it:* Logic locking and obfuscation are the IP-level countermeasures that Library-Attack is designed to defeat.

▶ [Logic Locking via Stripped Functionality](https://www.youtube.com/watch?v=teV81145Ups) — Ozgur Sinanoglu · 27:28 · 6 years ago

### Hypergraph modeling of hardware netlists *(prerequisite)*
This section introduces hypergraph theory and its application to modeling hardware netlists, which is crucial for understanding the representation of designs used in Library-Attack. The chosen video is a university lecture that covers netlist partitioning and hypergraph concepts in depth.

*How the paper uses it:* Library-Attack converts design netlists into hypergraphs to analyze structural similarities between protected and candidate designs.

▶ [Mod-01 Lec-30 Netlist and System Partitioning](https://www.youtube.com/watch?v=BfkUsfTK0FA) — nptelhrd · 10 years ago

### Electronic design automation structural similarity *(prerequisite)*
This section covers methods for measuring structural similarity, a key technique used in the paper to compare protected and candidate hardware designs. The selected video provides a rigorous explanation of clustering algorithms, which underpin similarity scoring approaches relevant to EDA tools.

*How the paper uses it:* Structural similarity scores computed using EDA tools are central to identifying the original design in Library-Attack.

▶ [9. Clustering Algorithms Explained: K-Means, DBSCAN, Fuzzy ...](https://www.youtube.com/watch?v=Ax89dvBwPvE) — Andrey Holz, Ph.D. · 58:23

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Library-Attack paper, start by learning the basics of hardware IP reverse engineering, which explains how protected hardware designs can be analyzed and recovered. Next, grasp the core IP protection techniques of logic locking and obfuscation targeted by the attack. Then, understand how hardware netlists are represented as hypergraphs, a key step in the attack's methodology. After that, learn about electronic design automation (EDA) structural similarity methods used to compare designs. Finally, explore the Library-Attack reverse engineering method itself, which combines all these concepts to recover original IP from protected designs.

### Hardware IP reverse engineering *(prerequisite)*
This concept covers how hardware designs, especially embedded devices, can be analyzed and reverse engineered to reveal their internal structure and functionality. Understanding this is essential to see how attackers can recover original designs from protected versions.

*How the paper uses it:* Library-Attack builds on reverse engineering techniques to analyze protected hardware IP.

▶ [Embedded devices reverse engineering by Vitor Ventura ...](https://www.youtube.com/watch?v=gfDOil_WU6Q) — Recon Conference · 42:09

### Logic locking and obfuscation *(prerequisite)*
Logic locking and obfuscation are hardware IP protection techniques that modify designs to prevent unauthorized use or reverse engineering. Learning these methods helps understand what protections Library-Attack aims to bypass.

*How the paper uses it:* Library-Attack targets IP-level countermeasures like 128-bit XOR locking and LUT obfuscation.

▶ [Logic Locking via Stripped Functionality](https://www.youtube.com/watch?v=teV81145Ups) — Ozgur Sinanoglu · 27:28 · 6 years ago

### Hypergraph modeling of hardware netlists *(prerequisite)*
Hardware netlists can be represented as hypergraphs, which model complex multi-node connections in circuits. This representation is crucial for the Library-Attack method to analyze and compare designs structurally.

*How the paper uses it:* Library-Attack converts protected designs into hypergraphs for structural analysis.

▶ [Introduction to Hypergraphs [Graph Theory]](https://www.youtube.com/watch?v=UwvZn9lm_98) — Vital Sine · 4 years ago

### Electronic design automation structural similarity *(prerequisite)*
Structural similarity methods in EDA quantify how closely two hardware designs match, enabling identification of original designs among transformed variants. This is a key step in Library-Attack's recovery process.

*How the paper uses it:* Library-Attack uses EDA tools to compute similarity scores between protected and candidate designs.

▶ [191 - Measuring image similarity in python](https://www.youtube.com/watch?v=16s3Pi1InPU) — DigitalSreeni · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the Library-Attack paper. The beginner project reproduces a core visualization of the attack's structural similarity scoring on small ISCAS89 benchmarks. The intermediate project implements the core Library-Attack method on a small ISCAS89 benchmark with a simple baseline comparison. The advanced project extends the attack to a larger or more complex design to explore scalability, addressing a key limitation and future direction of the paper.

### Beginner — Visualize Structural Similarity Heatmaps for XOR Locking
*Effort: a weekend, ~8 hours*

You build a script to generate and visualize normalized LEC similarity heatmaps between a protected design and a small library of candidate ISCAS89 benchmark designs transformed with 128-bit XOR locking. This reproduces the key heatmap visualization from the paper that shows how the original design is identified by high similarity scores.

**Why it shows you understood the paper:** This project shows you understand how Library-Attack uses structural similarity metrics to distinguish original IP from candidates, and how to interpret the heatmap results that demonstrate attack success.

**Grounded in:** The heatmaps depicted in Fig. 6 and Fig. 7 demonstrate that the original design OD0 was correctly recovered out of the library with 5 candidates using normalized LEC similarity scores.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Simulated or manually created small ISCAS89 benchmark netlists (e.g. s298, s526) transformed with 128-bit XOR locking as described in the paper; no official dataset released by authors.

**Build it:**

1. Implement or simulate small ISCAS89 benchmark netlists with and without 128-bit XOR locking transformation.
2. Compute normalized LEC similarity scores between the protected design and each candidate design in the library.
3. Generate heatmaps of the similarity matrices using matplotlib.
4. Highlight the original design's position in the heatmap to show highest similarity.
5. Write a README explaining the heatmap interpretation and relation to Library-Attack.

**Ships as:** A GitHub repo with scripts to compute and plot LEC similarity heatmaps for XOR locked ISCAS89 benchmarks, demonstrating original design recovery.

**Stretch goal:** Add support for visualizing similarity heatmaps for LUT obfuscation transformations as well.

### Intermediate — Reimplement Library-Attack on ISCAS89 XOR Locked Designs
*Effort: 2 weekends, ~20 hours*

You reimplement the core Library-Attack method from the paper: convert protected ISCAS89 netlists into hypergraphs, extract I/O features, generate a candidate library, apply 128-bit XOR locking transformations to candidates, and compute structural similarity scores to identify the original design. You compare your results against a simple baseline that uses only I/O feature matching without hypergraph similarity.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the paper's main attack methodology and metrics, showing comprehension of the hypergraph modeling, transformation, and similarity scoring pipeline central to Library-Attack.

**Grounded in:** Library-Attack successfully recovered the original unprotected designs from a library of candidates for both XOR locking and LUT obfuscation countermeasures on s298 and s526 ISCAS89 benchmarks.

**Tech stack:** Python 3.11, networkx, numpy, matplotlib

**Data:** ISCAS89 benchmark netlists (s298, s526) transformed with 128-bit XOR locking as described in the paper; no official code or dataset released by authors, so reimplementation is required.

**Build it:**

1. Parse ISCAS89 netlists and convert them into hypergraph representations.
2. Extract I/O features from the netlists as described in the paper.
3. Generate a small library of candidate original designs by applying known transformations.
4. Apply 128-bit XOR locking transformations to candidates using a logic locking tool or simulated method.
5. Compute structural similarity scores between the protected design and transformed candidates using normalized LEC or equivalent metric.
6. Compare results to a baseline that matches only I/O features without structural similarity.
7. Visualize similarity scores and identify the original design.
8. Document methodology, results, and comparison in README.

**Ships as:** A GitHub repo implementing Library-Attack on ISCAS89 XOR locked benchmarks with similarity scoring and baseline comparison, showing original design recovery.

**Stretch goal:** Extend the implementation to support 128-bit LUT obfuscation transformations and compare attack effectiveness.

### Advanced — Scale Library-Attack to Larger Hardware Designs
*Effort: 3+ weeks*

You extend the Library-Attack methodology to apply it on larger and more complex hardware designs beyond ISCAS89 benchmarks, such as open-source FPGA IP cores or larger netlists. You evaluate the scalability of the hypergraph modeling, transformation, and similarity scoring steps, and analyze attack success and runtime. This addresses the paper's stated limitation and future direction on scalability.

**Why it shows you understood the paper:** This project shows deep understanding by tackling a core limitation of the paper and adapting the attack to real-world scale designs, which could lead to insights on practical applicability and defenses.

**Grounded in:** Applying Library-Attack to larger and more complex designs to evaluate scalability.

**Tech stack:** Python 3.11, networkx, numpy, matplotlib, EDA tools (open-source or commercial if available)

**Data:** Larger open-source hardware IP cores or FPGA netlists publicly available (e.g. OpenCores projects) used as substitutes for ISCAS89 benchmarks; no official dataset from paper authors.

**Build it:**

1. Identify and obtain larger open-source hardware netlists suitable for IP protection evaluation.
2. Adapt hypergraph conversion and I/O feature extraction to handle larger netlists efficiently.
3. Implement or simulate 128-bit XOR locking or LUT obfuscation transformations on these designs.
4. Compute structural similarity scores between protected designs and candidate libraries.
5. Analyze attack success rates, runtime, and scalability bottlenecks.
6. Document findings, challenges, and potential improvements in README.

**Ships as:** A GitHub repo demonstrating Library-Attack applied to larger hardware designs with scalability analysis and documented results.

**Stretch goal:** Integrate Library-Attack with SAT or SWEEP attacks to improve attack success on large designs.

_The paper's authors released no code or datasets, so all implementations require reimplementation from the paper's descriptions; ISCAS89 benchmarks are publicly available but transformations must be implemented or simulated._
