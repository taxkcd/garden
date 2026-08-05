---
title: "008 · Learning-assisted schedulability analysis: opportunities and limitations — Sanjoy K. Baruah"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-baruah"
source_hash: "8d8e32a81f1efe36a0d43c91760bfdc2d43a9b86b153c69ea090211efbd89c19"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Learning-assisted schedulability analysis: opportunities and limitations." Starting with a beginner-level reproduction of the certificate-based verification method for Fixed-Priority schedulability, you then implement the core deep learning classification framework and compare it to a baseline at the intermediate level. Finally, the advanced project extends the framework to multiprocessor Fixed-Priority scheduling, addressing one of the paper's stated future directions and requiring new skills in scheduling theory and neural network design.

### Beginner — Certificate Verification for Fixed-Priority Schedulability
*Effort: a weekend, ~8 hours*

You build a small Python tool that implements the certificate-based verification method described in the paper to eliminate false positives in Fixed-Priority schedulability analysis. The tool takes as input a task set and a candidate certificate (e.g., response time values) and verifies schedulability using polynomial-time algorithms.

**Why it shows you understood the paper:** This project shows you understand the key safety guarantee mechanism of the paper: how certificates can be used to verify deep learning predictions and eliminate unsafe false positives, a critical contribution for safety-critical systems.

**Grounded in:** Proposal and demonstration of a certificate-based verification method to eliminate unsafe false positives in Fixed-Priority schedulability analysis.

**Tech stack:** Python 3.11

**Data:** Synthetic sporadic task sets generated according to the paper's description of constrained-deadline sporadic tasks on uniprocessors.

**Build it:**

1. Implement a generator for synthetic constrained-deadline sporadic task sets with parameters similar to those in the paper.
2. Implement the polynomial-time response time analysis algorithm for Fixed-Priority scheduling to verify schedulability certificates.
3. Create a command-line interface that accepts a task set and a certificate (response times) and outputs whether the certificate verifies schedulability.
4. Test the verifier on known schedulable and unschedulable task sets with and without correct certificates.
5. Document the verification method and its role in eliminating false positives as per the paper.

**Ships as:** A Python repository with code and README demonstrating certificate verification for Fixed-Priority schedulability, including example task sets and certificates.

**Stretch goal:** Add a simple visualization of task response times and deadlines to illustrate why a certificate is valid or invalid.

### Intermediate — Deep Learning Classifier for Fixed-Priority Schedulability
*Effort: 2 weekends, ~20 hours*

You reimplement the core deep learning framework from the paper to classify Fixed-Priority schedulability of sporadic task systems. You train a multilayer perceptron on synthetic task sets and evaluate classification accuracy and false positive rates. You then implement the certificate-based verification step to eliminate false positives and report verified accuracy.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method and results, including the critical step of certificate generation and verification to guarantee safety, showing comprehension of both ML and real-time scheduling aspects.

**Grounded in:** Deep learning classifiers achieve over 92% accuracy for Fixed-Priority schedulability analysis; certificate-based verification eliminates all false positives.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Synthetic constrained-deadline sporadic task sets generated programmatically as per the paper's workload description; no public dataset available.

**Build it:**

1. Implement a synthetic task set generator matching the paper's constrained-deadline sporadic task model.
2. Build a multilayer perceptron classifier in PyTorch to predict schedulability from task parameters.
3. Train and validate the classifier on generated datasets, measuring accuracy and false positive rate.
4. Implement certificate generation logic for positive predictions and the polynomial-time verification algorithm from the beginner project.
5. Evaluate the verified classifier accuracy after applying certificate verification.
6. Plot and report metrics comparable to those in the paper (accuracy, verified accuracy, false positives).

**Ships as:** A Python repository with code, training scripts, evaluation metrics, and a README explaining the deep learning framework and certificate verification for Fixed-Priority schedulability.

**Stretch goal:** Experiment with a more advanced neural network architecture (e.g., deeper MLP or simple attention layer) to see if accuracy improves.

### Advanced — Extending Learning-Assisted Schedulability Analysis to Multiprocessor Fixed-Priority Scheduling
*Effort: 3-4 weeks*

You extend the paper's framework to multiprocessor Fixed-Priority scheduling, a future direction noted by the authors. You implement a deep learning classifier for partitioned Fixed-Priority schedulability on synthetic multiprocessor task sets, develop or adapt certificate-based verification methods, and evaluate accuracy and verification performance.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, requiring you to understand the theoretical framework, adapt it to a more complex scheduling paradigm, and integrate advanced ML techniques, demonstrating research-level comprehension and initiative.

**Grounded in:** Extending the framework to multiprocessor scheduling problems that are in NP, such as partitioned Fixed-Priority scheduling.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Matplotlib

**Data:** Synthetic multiprocessor constrained-deadline sporadic task sets generated according to multiprocessor Fixed-Priority scheduling models; no public dataset available.

**Build it:**

1. Research and implement a synthetic task set generator for multiprocessor partitioned Fixed-Priority scheduling.
2. Adapt or design a certificate-based verification method suitable for multiprocessor Fixed-Priority schedulability.
3. Build and train a deep learning classifier (e.g., MLP or Graph Attention Network) to predict schedulability on multiprocessor task sets.
4. Integrate certificate generation and verification to eliminate false positives.
5. Evaluate classifier accuracy, verified accuracy, and runtime performance compared to exact analysis.
6. Document challenges, methodology, and results in a detailed README.

**Ships as:** A comprehensive Python repository demonstrating an extended learning-assisted schedulability analysis framework for multiprocessor Fixed-Priority scheduling, including data generation, model training, verification, and evaluation.

**Stretch goal:** Explore hybrid verification methods combining approximate verification with deep learning for improved scalability or accuracy.
