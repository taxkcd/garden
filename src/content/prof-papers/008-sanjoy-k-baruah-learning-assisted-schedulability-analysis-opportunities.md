---
title: "008 · Learning-assisted schedulability analysis: opportunities and limitations — Sanjoy K. Baruah"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-baruah"
source_hash: "7fa54ad5d11eabe68092fee5b5ae32e3e19562dde3b1f0521178394c318c78ee"
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

To deeply understand the paper on learning-assisted schedulability analysis, start with foundational knowledge of computational complexity theory, especially NP and coNP classes, as this underpins the framework's applicability. Next, study Fixed-Priority scheduling theory, the core scheduling paradigm analyzed in the paper. Then, explore certificate-based verification methods, crucial for guaranteeing safety by eliminating false positives. Following that, review the application of deep learning in safety-critical systems to contextualize the use of neural networks with safety guarantees. Finally, focus on the paper's core contribution: the deep learning-based schedulability classification framework, ideally through the authors' own talk or closely related advanced seminars.

## Recommended videos (in order)

### Computational complexity of schedulability problems *(prerequisite)*
Understanding the computational complexity classes NP and coNP is essential to grasp why the proposed framework applies to Fixed-Priority schedulability (NP-complete) but not to EDF schedulability (coNP-complete). This foundational knowledge clarifies the theoretical limits of the approach.

*How the paper uses it:* The paper formally derives that the framework applies only to schedulability problems in NP, explaining its applicability to Fixed-Priority but not EDF schedulability.

▶ [Lecture 23: Computational Complexity](https://www.youtube.com/watch?v=moPtwq_cVH8) — MIT OpenCourseWare · 51:12 · 13 years ago

### Fixed-Priority scheduling theory *(prerequisite)*
Fixed-Priority scheduling is the primary scheduling paradigm analyzed in the paper. A solid understanding of its principles and how it differs from dynamic priority scheduling is necessary to appreciate the framework's focus and results.

*How the paper uses it:* The framework is implemented and evaluated specifically for Fixed-Priority schedulability analysis, which is NP-complete.

▶ [OS - Rate Monotonic Scheduling || Fixed Priority Scheduling || Real Time Scheduling || Examples](https://www.youtube.com/watch?v=SIqQXNSt-pE) — Mukesh Chinta · 28:23 · 4 years ago

### Certificate-based verification methods *(prerequisite)*
Certificate-based verification is a key technique used in the paper to eliminate unsafe false positives by verifying the neural network's schedulability claims efficiently. Understanding digital certificates and verification methods provides insight into how safety guarantees are achieved.

*How the paper uses it:* The paper proposes that the deep learning component generates verifiable certificates to guarantee no false positives in schedulability classification.

▶ [Intro to Digital Certificates](https://www.youtube.com/watch?v=qXLD2UHq2vk) — Dave Crabbe · 9 years ago

### Deep learning for safety-critical systems *(prerequisite)*
Applying deep learning in safety-critical systems requires careful consideration of safety guarantees and validation. This background helps contextualize the challenges and significance of the paper's approach to using neural networks safely in real-time schedulability analysis.

*How the paper uses it:* The paper applies deep learning with a novel certificate-based verification to ensure safety in real-time schedulability analysis.

▶ [Can We Make Machine Learning Safe for Safety-Critical Systems?](https://www.youtube.com/watch?v=qw4_SX_JYiM) — Software Engineering Institute | Carnegie Mellon University · 57:58 · 1 year ago
