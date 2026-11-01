---
title: "980 · Intrusion Detection Datasets for Cyber-Physical Systems: Taxonomy, Challenges, and Opportunities — Daniel Mossé"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-mosse"
source_hash: "2155c4bb55ea3bc880161f329b70efb7490818e776055e1a8ce8180d5a0ba038"
sequence: 980
generator: "outreach-garden: managed"
---

# 980 · Intrusion Detection Datasets for Cyber-Physical Systems: Taxonomy, Challenges, and Opportunities

## At a glance

- **Professor:** Daniel Mossé
- **Institution:** University of Pittsburgh
- **Paper:** [Intrusion Detection Datasets for Cyber-Physical Systems: Taxonomy, Challenges, and Opportunities](https://www.sciencedirect.com/science/article/pii/S0167404826003937/pdf)
- **Authors:** Vagner E. Quincozes, Silvio E. Quincozes, Célio Albuquerque, Diego Passos, Daniel Mossé
- **Year:** 2026

## Paper overview

This paper addresses the challenge of detecting cyberattacks in Cyber-Physical Systems (CPS) by analyzing and categorizing existing datasets used for intrusion detection. It proposes a new taxonomy to classify CPS intrusion detection datasets based on data sources, attack types, and feature representation. The authors review over twenty public datasets, highlight their limitations, and conduct experiments to validate the taxonomy and reveal gaps in current datasets. The work aims to guide future dataset development and improve the design and evaluation of intrusion detection systems for CPS.

### Why it matters

**Research problem:** Cyber-Physical Systems require effective Intrusion Detection Systems (IDS) to detect cyberattacks, but the scarcity and heterogeneity of domain-specific datasets limit IDS development and evaluation. There is a lack of a structured taxonomy to categorize and assess CPS intrusion detection datasets, hindering systematic analysis and improvement.

**Why it matters:** CPSs are critical infrastructures (e.g., water treatment, smart grids) with real-time and safety-critical requirements. Attacks on CPS can cause severe physical and operational damage, including risks to human life. Effective IDSs rely on high-quality datasets that accurately represent cyber and physical features and attack scenarios, which are currently insufficient.

**Key contributions:**

- Introduction of a new taxonomy for CPS intrusion detection datasets based on data sources, attack types, and feature representation.
- Comprehensive review and comparative analysis of over twenty publicly available CPS intrusion detection datasets.
- Experimental validation of the taxonomy using multiple real-world CPS datasets via the SEF-CPS framework.
- Identification of key limitations in current datasets, such as underrepresentation of physical features and complex attack scenarios.
- Discussion of challenges and opportunities for future CPS dataset development and IDS evaluation.

## About the professor

**Daniel Mossé** — Professor, Department of Computer Science, University of Pittsburgh.

Research interests: Power- energy- and temperature-aware systems, Real-time systems, Scheduling, Distributed systems, Wireless networking

### Research links

- [Faculty/profile page](https://www.cs.pitt.edu/people/full-time-faculty/daniel-mosse)
- [Identity evidence](https://www.cs.pitt.edu/~mosse)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Intrusion Detection Systems
**The paper assumes:** intrusion detection systems fundamentals, cyber attack taxonomy, IDS feature engineering
**Already in this field?** Skip this entirely if you already understand the basics of intrusion detection systems and their role in cybersecurity.

To understand the taxonomy, evaluation, and experimental validation of intrusion detection datasets for Cyber-Physical Systems, a solid grasp of Intrusion Detection Systems (IDS) fundamentals is essential. The rigorous course option offers a structured university-level lecture series covering core IDS concepts in depth, while the fast track provides a concise, focused playlist of short videos that efficiently cover the same foundational topics for quicker preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Intrusion Detection](https://www.youtube.com/playlist?list=PLeXyJOUZ-Te4) — NLC Cyber Defense Institute · 11 videos · 2.9h across 11 episodes

**Watch only this:** Episodes 10 through 4 (in reverse order): 'Intrusion Detection: An Introductory Guide - Chapter 1' through 'Intrusion Detection: Chapter 05 - Video Overview', about 1.6 hours total — these cover foundational IDS concepts, attack types, and detection methodologies relevant to understanding the paper's taxonomy and dataset analysis.

*Why it unblocks this paper:* This playlist from NLC Cyber Defense Institute is a comprehensive university-style lecture series on Intrusion Detection, covering core concepts, network and host-based monitoring, log analysis, and tools for investigating suspicious activity. It aligns well with the paper's focus on IDS principles, attack types, and feature representation.

*If you want all of it:* 2.9 hours across all 11 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [\[CS161\] Networking8: Intrusion Detection](https://www.youtube.com/playlist?list=PLfBkt1-_BHX-f8ge8QwvPZ-jkbPDLHbi_) — CS 161 (Computer Security) at UC Berkeley · 20 videos · 1.4h across 20 episodes

**Watch only this:** Videos 4 through 14: 'NIDS - Definition, Benefits' through 'Anomaly-Based Detection', about 44 minutes total — these cover the core IDS concepts, detection techniques, and challenges needed to appreciate the paper's contributions.

*Why it unblocks this paper:* This UC Berkeley CS161 short-form playlist provides concise, clear explainers on Intrusion Detection Systems, including definitions, benefits, drawbacks, detection methods, and attacks on IDS. Its short episodes make it ideal for quickly grasping IDS fundamentals to support understanding of the paper's dataset taxonomy and evaluation.

*If you want all of it:* 1.4 hours across all 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on intrusion detection datasets for Cyber-Physical Systems (CPS), start with foundational knowledge of CPS architecture to grasp the system structure and data sources. Then, build understanding of Intrusion Detection Systems (IDS) in CPS contexts to appreciate the challenges and design considerations. Next, explore dataset feature representation in security to comprehend how cyber and physical features impact IDS performance. Finally, focus on the paper's core concept of CPS intrusion detection dataset taxonomy, including the authors' own talk presenting their taxonomy and experimental findings.

### Cyber-Physical Systems architecture *(prerequisite)*
Understanding the architecture of Cyber-Physical Systems is essential to appreciate the sources of data and the attack surfaces relevant to intrusion detection. This foundational knowledge sets the stage for analyzing datasets and IDS design tailored to CPS environments.

*How the paper uses it:* The paper categorizes datasets based on CPS data sources and attack types, which requires understanding CPS architecture.

▶ [Cyber-Physical Systems: A Natural Convergence of Engineering and Computer Science](https://www.youtube.com/watch?v=7wvq7pVjdJA) — NC State · 1:12:21 · 16y ago

### Intrusion Detection Systems in CPS *(prerequisite)*
A solid grasp of IDS principles, types, and challenges in CPS contexts is critical to understand the motivation behind dataset development and evaluation. This knowledge helps contextualize the taxonomy and experimental validation presented in the paper.

*How the paper uses it:* The paper aims to improve IDS evaluation by addressing dataset limitations specific to CPS intrusion detection.

▶ [Intrusion Detection Systems (ITS335, Lecture 16, 2013)](https://www.youtube.com/watch?v=6sfiGsFjluY) — Steven Gordon · 45:23 · 12y ago

### Dataset Feature Representation in Security *(prerequisite)*
Understanding how datasets represent cyber and physical features is key to analyzing their impact on IDS performance. This section provides insight into feature diversity and enrichment, which the paper identifies as critical for effective CPS intrusion detection.

*How the paper uses it:* The paper experimentally shows that combining cyber and physical features improves IDS performance and highlights feature representation gaps in datasets.

▶ [A Dual-Function Dataset for IoT Device Identification and Anomaly Detection by Dr. Mahdi Rabbani](https://www.youtube.com/watch?v=Pxny98wJoOc) — Canadian Institute for Cybersecurity (CIC) · 24:08 · 1y ago

### Cyber-Physical Systems Intrusion Detection Taxonomy
This is the core concept of the paper, presenting a novel taxonomy to categorize CPS intrusion detection datasets by data sources, attack types, and feature representation. Understanding this taxonomy is crucial to grasp the paper's contributions and experimental findings.

*How the paper uses it:* The paper introduces and validates this taxonomy to guide future dataset development and IDS evaluation in CPS.

▶ [Sensor Data Analytics for Intrusion Detection in Cyber-Physical Systems](https://www.youtube.com/watch?v=Bqe3eeNLPHA) — CREDC · 38:22 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand intrusion detection in Cyber-Physical Systems (CPS) and the specific challenges addressed by the paper. Starting with the basics of CPS architecture, it then covers intrusion detection systems (IDS) fundamentals, followed by how datasets represent features relevant to security. Finally, it presents the paper's core contribution: the taxonomy for CPS intrusion detection datasets, enabling a clear understanding of the paper's analysis and findings.

### Cyber-Physical Systems architecture *(prerequisite)*
Learn what Cyber-Physical Systems are, their components, and how they integrate physical processes with computing and networking. Understanding CPS architecture is essential to grasp where data sources come from and what attack surfaces exist.

*How the paper uses it:* The paper analyzes CPS datasets which are based on CPS architectures combining cyber and physical components.

▶ [Cyber Physical Systems Explained | CPS Architecture, Examples & Difference from IoT](https://www.youtube.com/watch?v=v8CjqKc7als) — Industrial IoT · 4:10 · 7mo ago

### Intrusion Detection Systems in CPS *(prerequisite)*
Understand the purpose and types of intrusion detection systems (IDS), especially in the context of CPS where real-time and safety-critical constraints apply. This knowledge helps appreciate the challenges in detecting attacks on CPS.

*How the paper uses it:* The paper focuses on datasets used to develop and evaluate IDS for CPS environments.

▶ [Intrusion Detection Systems (IDS) | Cyber Security | CS627_Topic037](https://www.youtube.com/watch?v=zqNj4udnoNc) — Virtual University of Pakistan · 4:58 · 1mo ago

### Dataset Feature Representation in Security *(prerequisite)*
Explore how datasets represent features from cyber and physical domains, and why combining these features improves intrusion detection. This is key to understanding the paper's findings on feature diversity and IDS performance.

*How the paper uses it:* The paper highlights the importance of cyber and physical feature representation in CPS intrusion detection datasets.

▶ [Network Intrusion Detection Using the UNSW-NB15 Data Set and the Conditional GAN-Augmented CNN](https://www.youtube.com/watch?v=tWLO0czKCo0) — Computer Science & IT Conference Proceedings · 12:23 · 1y ago

### Cyber-Physical Systems Intrusion Detection Taxonomy
Learn about the novel taxonomy introduced by the paper that categorizes CPS intrusion detection datasets by data sources, attack types, and feature representation. This taxonomy organizes the landscape of datasets and reveals gaps and challenges.

*How the paper uses it:* This taxonomy is the paper's central contribution for systematically analyzing CPS intrusion detection datasets.

▶ [Sensor Data Analytics for Intrusion Detection in Cyber-Physical Systems](https://www.youtube.com/watch?v=Bqe3eeNLPHA) — CREDC · 38:22 · 8y ago

## Already in your library

- [Anomaly-Based Intrusion Detection Explained (Beginner-Friendly IDS Tutorial)](https://www.youtube.com/watch?v=7vgKmbYWHiI) — also for: A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS) (Bryan C. Ward)
- [Cyber Physical Systems Explained](https://www.youtube.com/watch?v=Ec7Gix_mihA) — also for: Scenic: A Language for Scenario Specification and Data Generation (Daniel J. Fremont)
- [Lec-36: Feature Extraction in Data preprocessing | Machine Learning](https://www.youtube.com/watch?v=lzWcVVCXMfo) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the taxonomy and evaluation of CPS intrusion detection datasets introduced in the paper. The beginner project focuses on reproducing a key experimental comparison of feature sets using existing tools and datasets. The intermediate project involves running and extending the authors' SEF-CPS framework to validate the taxonomy and analyze dataset limitations. The advanced project tackles a future direction by developing a method to synchronize cyber and physical data streams for improved IDS performance, addressing a key limitation identified in the paper.

### Beginner — Feature Set Comparison for CPS Intrusion Detection
*Effort: a weekend, ~8 hours*

You build a simple Python notebook that loads a publicly available CPS intrusion detection dataset (e.g., WADI or BATADAL), extracts cyber-only, physical-only, and combined feature sets, and trains basic classifiers (e.g., Random Forest) to compare detection performance across these feature sets. You visualize and report metrics such as accuracy or F1-score to reproduce the paper's finding that combined features improve IDS performance.

**Why it shows you understood the paper:** This project shows you grasp the importance of feature representation in CPS IDS datasets and can reproduce a core experimental result from the paper, demonstrating practical skills in data handling, feature engineering, and classification.

**Grounded in:** Experiments show that combining cyber and physical features improves intrusion detection performance compared to using either alone.

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook, pandas, matplotlib

**Data:** Use the WADI or BATADAL dataset as named in the paper; these are publicly available CPS intrusion detection datasets with cyber and physical features.

**Build it:**

1. Download and preprocess the WADI or BATADAL dataset to extract cyber and physical features separately.
2. Implement feature set splits: cyber-only, physical-only, and combined features.
3. Train a Random Forest classifier on each feature set using scikit-learn.
4. Evaluate and compare detection performance metrics (accuracy, precision, recall, F1-score).
5. Visualize the results in plots to highlight performance differences.
6. Write a README explaining the experiment and its relation to the paper's findings.

**Ships as:** A Jupyter Notebook and README showing the comparative performance of cyber-only, physical-only, and combined feature sets on a CPS IDS dataset, reproducing a key experimental insight from the paper.

**Stretch goal:** Add explainability analysis (e.g., feature importance) to show which features contribute most to detection performance.

### Intermediate — Validating CPS Dataset Taxonomy with SEF-CPS Framework
*Effort: 1-3 weekends, ~20 hours*

You clone and run the SEF-CPS open-source framework released by the paper's authors to ingest multiple CPS intrusion detection datasets (e.g., WADI, BATADAL, Morris-3). You reproduce the taxonomy-based dataset characterization and perform experiments to validate dataset limitations such as imbalanced attack distributions and feature diversity. You extend the framework by adding a simple baseline classifier or metric to deepen the analysis.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' codebase, understand and apply their taxonomy, and critically analyze CPS datasets' strengths and weaknesses, reflecting a deeper engagement with the paper's core contributions.

**Grounded in:** Experimental validation of the taxonomy using multiple real-world CPS datasets via the SEF-CPS framework; identification of dataset limitations such as imbalanced attack distributions and limited feature diversity.

**Tech stack:** Python 3.11, scikit-learn, SEF-CPS framework, pandas, matplotlib

**Data:** Use the datasets supported by the SEF-CPS framework as per https://github.com/vagnerereno/sef-cps, including WADI, BATADAL, Morris-3, etc.

**Build it:**

1. Clone the SEF-CPS repository from https://github.com/vagnerereno/sef-cps and set up the environment.
2. Download and prepare the supported CPS datasets as per the framework instructions.
3. Run the framework's automated data ingestion, training, and report generation scripts on multiple datasets.
4. Analyze the taxonomy-based dataset characterizations and experimental results to identify limitations.
5. Implement a simple additional classifier or metric (e.g., Logistic Regression or AUC) to extend the evaluation.
6. Document your findings and how they relate to the paper's taxonomy and dataset analysis.

**Verified links from the paper:**

- <https://github.com/vagnerereno/sef-cps> — released by the paper's authors

**Ships as:** A GitHub repository with scripts and reports reproducing the taxonomy validation experiments using SEF-CPS, plus your extension and analysis of dataset limitations.

**Stretch goal:** Add visualization dashboards to interactively explore dataset characteristics and attack distributions.

### Advanced — Synchronizing Cyber and Physical Data Streams for CPS IDS
*Effort: a few weeks, ~40+ hours*

You design and implement a data synchronization pipeline that aligns cyber and physical data collected asynchronously in CPS intrusion detection datasets. Using time-series alignment techniques and feature engineering, you create a unified dataset that improves IDS model training and evaluation. You test your approach on a public CPS dataset or a synthesized dataset simulating asynchronous data collection, and compare IDS performance before and after synchronization.

**Why it shows you understood the paper:** This project addresses a key limitation identified in the paper regarding asynchronous data collection, demonstrating your ability to extend the research with a novel solution that could improve IDS accuracy and robustness in CPS environments.

**Grounded in:** Physical and cyber data are often collected asynchronously, making unified analysis challenging; future direction includes developing domain-specific datasets with richer physical and cyber feature integration.

**Tech stack:** Python 3.11, pandas, numpy, scikit-learn, tslearn (time-series alignment), Jupyter Notebook

**Data:** Use a public CPS dataset with cyber and physical data (e.g., WADI) or simulate asynchronous data streams by offsetting timestamps artificially.

**Build it:**

1. Select or simulate a CPS dataset with asynchronous cyber and physical data streams.
2. Implement time-series alignment methods (e.g., Dynamic Time Warping) to synchronize the data streams.
3. Engineer combined features from the synchronized dataset for IDS training.
4. Train and evaluate IDS models on original (asynchronous) and synchronized datasets.
5. Analyze and report the impact of synchronization on detection performance.
6. Write detailed documentation explaining the synchronization approach and its benefits.

**Ships as:** A repository with code and documentation demonstrating a synchronization pipeline for cyber-physical data and its impact on IDS performance, addressing a key limitation from the paper.

**Stretch goal:** Integrate the synchronization pipeline into the SEF-CPS framework and evaluate on multiple datasets.

_Confirm availability and access instructions for the WADI and BATADAL datasets before starting; if unavailable, simulate data as described._
