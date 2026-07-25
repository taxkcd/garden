---
title: "008 · Learning-assisted schedulability analysis: opportunities and limitations — Sanjoy K. Baruah"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-baruah"
source_hash: "f0fe6e1fb13b74439bb4481b2c8b3df5050db7dcdb7a028a5481c7bed9b1b9f0"
sequence: 8
generator: "outreach-garden: managed"
---

# 008 · Learning-assisted schedulability analysis: opportunities and limitations

## At a glance

- **Professor:** Sanjoy K. Baruah
- **Institution:** Washington University in St. Louis
- **Paper:** [Learning-assisted schedulability analysis: opportunities and limitations](https://doi.org/10.1007/s11241-025-09450-y)
- **Authors:** Sanjoy Baruah, Pontus Ekberg, Marion Sudvarg
- **Year:** 2025

## Paper overview

This paper presents a novel framework that uses deep learning to analyze whether real-time systems can meet their timing requirements without ever incorrectly declaring an unschedulable system as schedulable, making it suitable for safety-critical applications. The authors focus on schedulability analysis for constrained-deadline sporadic task systems on preemptive uniprocessors under Fixed-Priority (Deadline-Monotonic) and Earliest-Deadline First scheduling. They show that deep learning can effectively classify schedulability with high accuracy and propose a method to eliminate unsafe false positives by generating verifiable certificates. The framework is applicable to problems in the NP complexity class, demonstrated for Fixed-Priority schedulability but not for EDF schedulability, which is coNP-complete. The approach is evaluated on synthetic workloads and embedded platforms, including FPGA implementations, showing efficient and predictable runtimes.

### Why it matters

**Research problem:** Schedulability analysis for real-time systems is computationally expensive and often intractable (NP-hard or coNP-hard), making it challenging to perform frequent runtime checks needed for adaptive Cyber-Physical Systems (CPS). The problem is to develop efficient, safe, and reliable schedulability analysis methods that can be used online on resource-constrained platforms without risking unsafe false positives (incorrectly classifying unschedulable systems as schedulable).

**Why it matters:** Real-time schedulability is a safety-critical property in CPS, especially autonomous systems operating in uncertain environments. Incorrectly declaring an unschedulable system as schedulable can lead to catastrophic failures. Existing exact algorithms are often too slow for runtime use, motivating the need for faster, yet safe, analysis methods.

**Key contributions:**

- Development of the first deep learning-based schedulability analysis framework that guarantees no false positives, suitable for safety-critical systems.
- Formal derivation of a necessary and sufficient condition (membership in NP) for schedulability problems to be amenable to the framework.
- Proof-of-concept implementations and experimental evaluation of deep neural networks for Fixed-Priority and EDF schedulability analysis.
- Proposal and demonstration of a certificate-based verification method to eliminate unsafe false positives in Fixed-Priority schedulability analysis.
- Comprehensive evaluation on synthetic workloads and embedded platforms, including FPGA implementation showing highly efficient and predictable runtimes.

## About the professor

**Sanjoy K. Baruah** — Department of Computer Science & Engineering, Washington University in St. Louis.

### Research links

- [Faculty/profile page](https://research.engineering.wustl.edu/~baruah/Pubs.shtml)
- [Identity evidence](https://sites.wustl.edu/baruah)
- [Resolved homepage](https://sites.wustl.edu/baruah/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on learning-assisted schedulability analysis, start with foundational knowledge in computational complexity theory to grasp the NP and coNP complexity classes relevant to the framework's applicability. Next, build a solid understanding of real-time scheduling theory, focusing on Fixed-Priority and EDF scheduling algorithms. Then, study deep learning classification methods as they form the core technique used in the paper. Finally, explore the paper authors' own talk or closely related academic talks on schedulability analysis to gain direct insights into their novel framework and experimental results.

### Computational complexity theory *(prerequisite)*
Understanding computational complexity, especially the classes NP and coNP, is essential to appreciate why the proposed framework applies to Fixed-Priority schedulability (NP-complete) but not EDF schedulability (coNP-complete). This foundation clarifies the theoretical limits and guarantees of the learning-assisted approach.

*How the paper uses it:* The paper formally derives that the framework applies only to schedulability problems in NP, explaining the difference in applicability between Fixed-Priority and EDF schedulability.

▶ [Recitation 23: Computational Complexity](https://www.youtube.com/watch?v=t5Wxk96QjUk) — MIT OpenCourseWare · 13 years ago

### Real-time scheduling theory *(prerequisite)*
A thorough understanding of real-time scheduling algorithms, including Fixed-Priority and Earliest Deadline First (EDF), and their schedulability analysis is critical. This knowledge provides the context for the paper’s focus on constrained-deadline sporadic task systems and the scheduling policies evaluated.

*How the paper uses it:* The paper focuses on Fixed-Priority and EDF schedulability analysis, making foundational knowledge of these scheduling paradigms necessary.

▶ [Scheduling in Hard Real Time Systems: The Response Time Approach](https://www.youtube.com/watch?v=kJ6Y1KbF4Xc) — ASET Forum · Streamed 5 years ago

### Deep learning for classification *(prerequisite)*
Deep learning classification techniques, especially multilayer perceptrons used for binary classification, underpin the paper’s approach to predicting schedulability. Understanding these methods is vital to grasp how neural networks can be trained and verified for safety-critical decisions.

*How the paper uses it:* The authors use deep learning classifiers to predict schedulability and generate certificates for verification, making classification fundamentals essential.

▶ [Machine Learning Crash Course: Classification](https://www.youtube.com/watch?v=QM0sYbEQSkM) — Google for Developers · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced learning path introduces foundational concepts needed to understand the paper's novel deep learning framework for schedulability analysis. It starts with the basics of computational complexity theory to grasp why some schedulability problems are tractable and others are not, then covers real-time scheduling theory to understand the scheduling models and constraints involved. Next, it explains deep learning classification methods as the core technique used for schedulability prediction, followed by a focused look at schedulability analysis itself. Finally, it touches on certificate-based verification methods that guarantee safety by eliminating false positives in the framework.

### Computational complexity theory *(prerequisite)*
Learn the basics of computational complexity, including the classes NP and coNP, which categorize problems based on how easily their solutions can be verified. Understanding these classes helps explain why some schedulability problems can be efficiently analyzed with the proposed framework, while others cannot.

*How the paper uses it:* The paper's framework applies only to schedulability problems in NP, such as Fixed-Priority scheduling, but not to coNP-complete problems like EDF schedulability.

▶ [Recitation 23: Computational Complexity](https://www.youtube.com/watch?v=t5Wxk96QjUk) — MIT OpenCourseWare · 13 years ago

### Real-time scheduling theory *(prerequisite)*
This concept covers how tasks with timing constraints are scheduled on processors, focusing on algorithms like Fixed-Priority and Earliest Deadline First (EDF). Understanding these scheduling policies and their constraints is essential to grasp the problem of schedulability analysis tackled in the paper.

*How the paper uses it:* The paper analyzes schedulability under Fixed-Priority (Deadline-Monotonic) and EDF scheduling policies on uniprocessors.

▶ [Real time Scheduling | ES | Embedded Systems | Lec-31 | Bhanu Priya](https://www.youtube.com/watch?v=oU4RwHkmnaM) — Education 4u · 7 years ago

### Deep learning for classification *(prerequisite)*
This section introduces how deep learning models, particularly neural networks, can be trained to classify data into categories. It explains the intuition behind supervised learning and classification tasks, which is the core method used in the paper to predict schedulability of task systems.

*How the paper uses it:* The paper uses multilayer perceptrons to classify task systems as schedulable or unschedulable based on learned patterns.

▶ [Machine Learning Crash Course: Classification](https://www.youtube.com/watch?v=QM0sYbEQSkM) — Google for Developers · 1 year ago

### Schedulability analysis *(the paper's own talk)*
This concept explains how to determine whether a set of real-time tasks can meet their deadlines under a given scheduling policy. It covers the challenges of computational complexity and the importance of safe, efficient analysis methods in safety-critical systems.

*How the paper uses it:* The paper proposes a deep learning-assisted framework to perform fast and safe schedulability analysis for real-time systems.

▶ [Schedulability Analysis](https://www.youtube.com/watch?v=Rs0ow2pS_K0) — Software Engineering Institute | Carnegie Mellon University · 9:33 · 10 years ago

## Already in your library

- [Lecture 23: Computational Complexity](https://www.youtube.com/watch?v=moPtwq_cVH8) — also for: Learning-assisted schedulability analysis: opportunities and limitations (Sanjoy K. Baruah)
