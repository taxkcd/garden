---
title: "1048 · 6SEVEN: System for EValuating IPv6 ENumeration algorithms — Erik C. Rye"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-erik-c-rye"
source_hash: "650095764449533025c7b9ebf9aa31006f80afaea00d9b046fe3de3e3aa44abb"
sequence: 1048
generator: "outreach-garden: managed"
---

# 1048 · 6SEVEN: System for EValuating IPv6 ENumeration algorithms

## At a glance

- **Professor:** Erik C. Rye
- **Institution:** Johns Hopkins University
- **Paper:** [6SEVEN: System for EValuating IPv6 ENumeration algorithms](https://arxiv.org/pdf/2609.08098)
- **Authors:** Chase Kanipe, Erik Rye, Dave Levin, Robert Beverly
- **Year:** 2026

## Paper overview

The paper presents 6SEVEN, a comprehensive framework designed to fairly and consistently evaluate different algorithms that generate candidate IPv6 addresses for active Internet scanning. Because IPv6 address space is vast and sparse, discovering active addresses is challenging. Many algorithms exist to generate likely active IPv6 addresses, but prior work lacks consistent evaluation methods, making comparisons difficult. 6SEVEN hosts multiple algorithms as plugins and standardizes the evaluation process, including data cleaning, scanning, alias detection, and result analysis. The authors demonstrate 6SEVEN by implementing eight popular algorithms and conducting controlled experiments to reveal how factors like seed data and alias filtering affect performance.

### Why it matters

**Research problem:** IPv6's enormous and sparsely populated address space makes exhaustive scanning infeasible, so researchers use Target Generation Algorithms (TGAs) to predict active IPv6 addresses. However, the lack of standardized evaluation methodologies, inconsistent metrics, and varying seed data across studies prevent meaningful comparisons of TGA performance.

**Why it matters:** Accurate and comprehensive IPv6 address discovery is critical for network measurement, security assessments, and understanding Internet topology. Without reliable evaluation of TGAs, it is unclear which algorithms perform best or how to improve them, hindering progress in IPv6 measurement and security research.

**Key contributions:**

- Surveyed existing literature to identify confounding factors in TGA evaluation.
- Designed and implemented 6SEVEN, a modular framework for consistent TGA evaluation.
- Ported eight popular TGAs into 6SEVEN as plugins.
- Demonstrated controlled comparisons of TGAs using common seed sets and evaluation parameters.
- Showed that seed composition, alias detection, and evaluation methodology significantly impact TGA performance metrics.

## About the professor

**Erik C. Rye** — Assistant Professor, Computer Science, Johns Hopkins University.

Research interests: Security and privacy, Computer networks, Network measurement

### Research links

- [Faculty/profile page](https://engineering.jhu.edu/faculty/erik-rye)
- [Professor website](https://erikrye.com/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=e-7AgFoAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Internet Measurement and Scanning
**The paper assumes:** active Internet scanning, IPv6 address space structure, alias detection in network measurement
**Already in this field?** Skip this entirely if you already understand active network measurement techniques and the challenges of IPv6 scanning.

To understand the evaluation of IPv6 Target Generation Algorithms (TGAs) in the 6SEVEN framework, it is essential to grasp the fundamentals of Internet measurement and active scanning techniques, including challenges like sparse IPv6 address space and alias detection. The rigorous course option provides a structured, in-depth exploration of network scanning concepts, while the fast track offers a concise, practical introduction suitable for readers with limited time. Choose the course for comprehensive understanding and the fast track for a quick, clear overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Python Network Security Project - Real-time ARP Scanner Explained](https://www.youtube.com/playlist?list=PLGfBX096HacnIHx0r1Fe2ZqXoPyelzj_O) — pythoncysec · 7 videos · 1.6h across 7 episodes

**Watch only this:** Episodes 1-3, about 40 minutes — covering the basics of ARP scanning, device detection, and real-time scanning concepts.

*Why it unblocks this paper:* This playlist offers a practical, step-by-step explanation of building a network scanner using Python and Scapy, covering active scanning concepts relevant to understanding IPv6 scanning and TGAs. It is concise and well-structured, making it suitable for quickly grasping the basics of network scanning techniques.

*If you want all of it:* 1.6 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 6SEVEN framework and its evaluation of IPv6 Target Generation Algorithms (TGAs), start with foundational knowledge on IPv6 address scanning techniques and alias detection in network measurement, which are critical for grasping the challenges in IPv6 scanning and the importance of accurate alias filtering. Next, study statistical evaluation of network algorithms to appreciate the variability and significance in TGA performance metrics. Finally, focus on the core concept of IPv6 Target Generation Algorithms evaluation and the authors' own talk on the 6SEVEN framework to directly engage with their methodology, implementation, and findings.

### IPv6 address scanning techniques *(prerequisite)*
This section covers advanced techniques used for scanning the vast IPv6 address space, including challenges and methods to discover active hosts. Understanding these scanning methods is foundational to appreciating why TGAs and frameworks like 6SEVEN are necessary.

*How the paper uses it:* IPv6 scanning techniques provide the practical context and challenges that motivate the development of TGAs and their evaluation in 6SEVEN.

▶ [You can -j REJECT but you can not hide: Global scanning of the IPv6 Internet (33c3)](https://www.youtube.com/watch?v=U-zay6PMD4c) — media.ccc.de · 46:20 · 9y ago

### Alias detection in network measurement *(prerequisite)*
Alias detection is crucial for accurately identifying unique IPv6 addresses by resolving multiple addresses that represent the same device or interface. This knowledge is essential to understand how alias filtering impacts TGA evaluation results.

*How the paper uses it:* The paper highlights the significant impact of alias detection and removal on TGA performance metrics, making this concept critical for interpreting their results.

▶ [Alias Resolution: Resolving IP router interface aliases | Network Traffic Analysis Ep. 14 | CS4558](https://www.youtube.com/watch?v=ice1oaV_1t8) — Epic Networks Lab · 13:20 · 5y ago

### Statistical evaluation of network algorithms *(prerequisite)*
This section introduces statistical methods to evaluate algorithm performance, addressing variability, significance, and reproducibility. Such techniques are necessary to rigorously compare TGAs and interpret run-to-run variability in the paper's experiments.

*How the paper uses it:* The authors emphasize run-to-run variability and the need for multiple trials and statistical measures to ensure valid TGA comparisons.

▶ [The Challenge of Valid Evaluations](https://www.youtube.com/watch?v=WUiTKvhjn90) — Simons Institute for the Theory of Computing · 32:41 · Streamed 9mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces you to the foundational concepts needed to understand the 6SEVEN framework for evaluating IPv6 Target Generation Algorithms (TGAs). Start by learning the basics of IPv6 addressing and subnetting to grasp the vastness and structure of the IPv6 space. Then, explore how IPv6 scanning is performed and the challenges involved, including alias detection to ensure accurate measurement. Finally, understand the evaluation methodologies and statistical considerations that 6SEVEN standardizes to fairly compare different TGAs.

### IPv6 address scanning techniques *(prerequisite)*
IPv6 scanning techniques explain how researchers and attackers discover active devices in the enormous IPv6 address space. Understanding these methods highlights the challenges of scanning such a vast and sparse space and sets the stage for why specialized algorithms and evaluation frameworks like 6SEVEN are necessary.

*How the paper uses it:* The paper addresses the challenge of scanning IPv6's vast address space and evaluates algorithms designed to generate candidate addresses for scanning.

▶ [You can -j REJECT but you can not hide: Global scanning of the IPv6 Internet (33c3)](https://www.youtube.com/watch?v=U-zay6PMD4c) — media.ccc.de · 46:20 · 9y ago

### IPv6 Target Generation Algorithms evaluation
This concept covers how algorithms predict likely active IPv6 addresses to scan, focusing on their design and evaluation. Understanding TGAs is crucial to appreciate why 6SEVEN standardizes their assessment to enable fair comparisons and improvements.

*How the paper uses it:* 6SEVEN hosts multiple TGAs as plugins and standardizes their evaluation to compare performance fairly.

▶ [IPv6 Addresses Explained | Cisco CCNA 200-301](https://www.youtube.com/watch?v=irhS0ASkvy8) — CertBros · 13:37 · 6y ago

### Alias detection in network measurement *(prerequisite)*
Alias detection identifies when multiple IP addresses actually correspond to the same device or interface, preventing inflated counts of active hosts. This is critical for accurate IPv6 scanning results and fair evaluation of TGAs.

*How the paper uses it:* The paper shows that alias detection drastically reduces apparent active address counts, emphasizing its importance in evaluation.

▶ [Alias Resolution: Resolving IP router interface aliases | Network Traffic Analysis Ep. 14 | CS4558](https://www.youtube.com/watch?v=ice1oaV_1t8) — Epic Networks Lab · 13:20 · 5y ago

### Statistical evaluation of network algorithms *(prerequisite)*
Statistical evaluation helps interpret variability and significance in the performance of network algorithms, ensuring that observed differences are meaningful and reproducible. This is essential for rigorous comparison of TGAs in 6SEVEN.

*How the paper uses it:* 6SEVEN uses multiple independent trials and statistical measures to address run-to-run variability in TGA results.

▶ [The Challenge of Valid Evaluations](https://www.youtube.com/watch?v=WUiTKvhjn90) — Simons Institute for the Theory of Computing · 32:41 · Streamed 9mo ago

## Already in your library

- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Lec-3: Introduction to Regression with Real Life Examples](https://www.youtube.com/watch?v=cHT-qLnRm0E) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the 6SEVEN framework and IPv6 Target Generation Algorithm (TGA) evaluation concepts. Starting with a small-scale reproduction of alias detection impact, you then extend to running and comparing TGAs using the authors' released 6SEVEN codebase, and finally build an advanced extension addressing a stated limitation by adding connection-oriented probe support to 6SEVEN. Each project deepens your grasp of IPv6 scanning evaluation and the software engineering challenges involved.

### Beginner — Alias Detection Impact Analysis
*Effort: a weekend, ~8 hours*

You build a small tool that takes a sample IPv6 scan result dataset (simulated or publicly available) and implements a simple alias detection filter similar to the one described in the paper. You then compare the number of active addresses before and after alias filtering and visualize the reduction.

**Why it shows you understood the paper:** This project demonstrates your grasp of alias detection's critical role in IPv6 scanning evaluation and how it affects reported active address counts, a key insight from the paper.

**Grounded in:** Alias detection and removal drastically reduce apparent active address counts, highlighting the importance of consistent alias filtering.

**Tech stack:** Python 3.11, Pandas, Matplotlib or Seaborn

**Data:** Use a small IPv6 scan result dataset simulated by you or a publicly available IPv6 hitlist subset as a stand-in for the paper's scan data.

**Build it:**

1. Load or simulate a dataset of IPv6 addresses with associated response counts.
2. Implement a simple alias detection heuristic (e.g., remove addresses from known aliased prefixes or clusters).
3. Filter the dataset using the alias detection method.
4. Calculate and compare counts of active addresses before and after filtering.
5. Visualize the difference using bar charts or tables.
6. Write a README explaining alias detection and its impact.

**Ships as:** A GitHub repo with code, a sample dataset, visualizations, and a README explaining alias detection's effect on active IPv6 address counts.

**Stretch goal:** Add support for multiple alias detection heuristics and compare their effects.

### Intermediate — Run and Compare TGAs with 6SEVEN
*Effort: 2 weekends, ~20 hours*

You clone and set up the 6SEVEN framework from the authors' GitHub repository, run at least two of the included TGAs on one of the provided seed datasets (e.g., IPv6 Hitlist), and reproduce key performance metrics such as active address yield and spatial distribution. You then compare the results and generate a report.

**Why it shows you understood the paper:** This project shows you can work with the authors' modular evaluation framework, understand TGA plugin integration, and replicate controlled experiments that reveal how seed data and alias filtering impact TGA performance.

**Grounded in:** Designed and implemented 6SEVEN, a modular framework for consistent TGA evaluation; Ported eight popular TGAs into 6SEVEN as plugins; Demonstrated controlled comparisons of TGAs using common seed sets and evaluation parameters.

**Tech stack:** Rust (for 6SEVEN), Linux environment, Python 3.11 (for analysis scripts), Matplotlib or Seaborn

**Data:** Use the seed datasets included or referenced in the 6SEVEN repository (IPv6 Hitlist or NTP Pool) as provided by the authors.

**Build it:**

1. Clone the 6SEVEN repository from https://github.com/0xchase/6SEVEN.
2. Follow setup instructions to build and run the framework on Linux.
3. Select two TGAs included as plugins and run them on a common seed dataset.
4. Collect output metrics such as active address counts and spatial distributions.
5. Perform alias detection filtering using 6SEVEN's built-in components.
6. Visualize and compare the TGA results in a report.
7. Document your process and findings in a README.

**Verified links from the paper:**

- <https://github.com/0xchase/6SEVEN> — released by the paper's authors

**Ships as:** A GitHub repo fork or clone with scripts and documentation showing successful runs of multiple TGAs in 6SEVEN, reproducing key metrics and comparisons.

**Stretch goal:** Add a new simple TGA plugin or modify an existing one to experiment with seed data sensitivity.

### Advanced — Extend 6SEVEN with Connection-Oriented Probe Support
*Effort: 3+ weeks*

You extend the 6SEVEN framework by implementing support for connection-oriented probes (e.g., full TCP handshake or TCP SYN+ACK validation) as an additional probe type. You integrate this into the plugin interface and evaluation pipeline, then run experiments comparing connection-oriented probes to existing stateless probes on a seed dataset.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating deep comprehension of the framework's architecture, network measurement techniques, and the challenges of IPv6 scanning.

**Grounded in:** 6SEVEN currently supports only ICMPv6, TCP SYN, and UDP probes; connection-oriented probes are not yet implemented; Incorporate connection-oriented scanning capabilities.

**Tech stack:** Rust (6SEVEN codebase), Linux networking tools, Python 3.11 (for data analysis), Matplotlib or Seaborn

**Data:** Use the seed datasets provided in the 6SEVEN repository or simulate small IPv6 seed sets for testing.

**Build it:**

1. Study the 6SEVEN codebase to understand probe implementation and plugin interfaces.
2. Design and implement connection-oriented probe support (e.g., TCP full handshake) within 6SEVEN's asynchronous runtime.
3. Integrate the new probe type into the evaluation pipeline and alias detection steps.
4. Run controlled experiments comparing connection-oriented probes to existing probe types on a seed dataset.
5. Analyze differences in active address discovery and response types.
6. Document your implementation, challenges, and experimental results in a detailed README.

**Verified links from the paper:**

- <https://github.com/0xchase/6SEVEN> — released by the paper's authors

**Ships as:** A forked 6SEVEN repository with connection-oriented probe support, experimental results comparing probe types, and comprehensive documentation.

**Stretch goal:** Explore hybrid TGAs that adapt probe types based on seed data or address characteristics.
