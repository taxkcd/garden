---
title: "979 · Formal Machine-Verification of MemSnap: An Efficient, Far-Future Linearizable Snapshot Algorithm — Siddhartha Jayanti"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-siddhartha-jayanti"
source_hash: "85d403d320a305ec7a7bd66df8a73a26e9445347a249caa2dd622d8e1460d964"
sequence: 979
generator: "outreach-garden: managed"
---

# 979 · Formal Machine-Verification of MemSnap: An Efficient, Far-Future Linearizable Snapshot Algorithm

## At a glance

- **Professor:** Siddhartha Jayanti
- **Institution:** Dartmouth College
- **Paper:** [Formal Machine-Verification of MemSnap: An Efficient, Far-Future Linearizable Snapshot Algorithm](https://dl.acm.org/doi/pdf/10.1145/3694906.3743304)
- **Authors:** Siddhartha Jayanti, Ugur Y. Yavuz
- **Year:** 2025

## Paper overview

This paper presents a formal, machine-verified proof of correctness for MemSnap, an adaptive snapshot algorithm that efficiently supports concurrent read-modify-write operations on shared memory components. MemSnap allows a scanner process to take fast implicit snapshots and observe component values later, with operations running in constant time and using linear space. The proof is done in TLA+ and verified by the TLA+ Proof System (TLAPS), addressing the algorithm's intricate far-future linearizability property and enhancing it with parallel observation and component generalization.

### Why it matters

**Research problem:** How to formally and machine-verify the linearizability (correctness) of MemSnap, an efficient and intricate adaptive snapshot algorithm that supports arbitrary read-modify-write operations and exhibits far-future linearizability, a challenging future-dependent correctness property.

**Why it matters:** Concurrent data structures are notoriously difficult to prove correct due to asynchronous execution and complex linearization points, especially for future-dependent algorithms like MemSnap. Formal machine verification ensures reliability and prevents critical failures in concurrent systems, which have historically caused major disasters. MemSnap's efficiency and generality make it practically important, but its correctness proof is nontrivial and essential for trustworthy deployment.

**Key contributions:**

- First machine-verified proof of any adaptive snapshot algorithm and any RMWable object.
- Formalization of an enhanced MemSnap algorithm supporting parallel observation, component separation, and generalization.
- Identification and formalization of full inductive invariants for MemSnap.
- Development of a complete machine-verified linearizability proof using meta-configuration tracking in TLA+ and TLAPS.
- Open-source release of formalizations and proof artifacts to aid future verification efforts.

## About the professor

**Siddhartha Jayanti** — Assistant Professor, Computer Science, Dartmouth College.

Research interests: algorithms, verification, and applications with a focus on designing simple, fast, scalable, and reliable solutions to challenging multidisciplinary problems

### Research links

- [Faculty/profile page](https://sites.google.com/view/siddhartha-jayanti)
- [Lab website](https://sites.google.com/view/siddhartha-jayanti/research)
- [DBLP](https://dblp.uni-trier.de/pid/183/9457.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Linearizability and Concurrent Data Structures
**The paper assumes:** linearizability correctness condition, concurrent data structures, concurrent algorithm verification
**Already in this field?** Skip this entirely if you already understand linearizability and the basics of concurrent data structure correctness proofs.

To understand the formal machine-verified proof of linearizability for MemSnap, it is essential to grasp the fundamentals of linearizability and concurrent data structures, especially the challenges posed by future-dependent linearization points. The rigorous course option provides a deep, structured university-level lecture series on advanced proof techniques for linearizability, while the fast track offers a concise, accessible introduction to key concepts in linearizability and concurrent data structures through a focused short-form playlist. Choose the course for a thorough foundation and the fast track for a quicker, intuition-driven overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [DISC 2020 session 2](https://www.youtube.com/playlist?list=PLvaSNyqj9rnISfz3bN6H0k9hwK5Briyvw) — PODC–DISC · 8 videos · 2.8h across 8 episodes

**Watch only this:** Episodes 1-3: "DISC 2020 session 2", "Intermediate Value Linearizability: A Quantitative Correctness Criterion", and "The Splay-List: A Distribution-Adaptive Concurrent Skip-List", about 1 hour total — these episodes introduce linearizability concepts and adaptive concurrent data structures relevant to MemSnap.

*Why it unblocks this paper:* This concise playlist from the PODC–DISC channel covers key concepts in linearizability and concurrent data structures, including intermediate value linearizability and efficient concurrent algorithms, providing a clear and focused introduction suitable for quickly grasping the foundational ideas behind the paper.

*If you want all of it:* All 8 episodes, approximately 2.8 hours — for a fuller but still concise overview of related concurrent data structure topics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the formal machine-verification of MemSnap, start by grasping the foundational concepts of far-future linearizability, adaptive snapshot algorithms, TLA+ formal verification, and meta-configuration tracking proofs. These prerequisites build the theoretical and methodological background necessary to appreciate the complexity and novelty of the paper's approach. Finally, focus on the authors' own presentation of MemSnap verification to get a precise and comprehensive view of their contributions and proof techniques.

### Far-future linearizability *(prerequisite)*
Understanding far-future linearizability is crucial because it defines the intricate correctness condition that MemSnap satisfies. This concept explains how operations can have linearization points that depend on future events, making correctness proofs particularly challenging. The selected talk by Kyle Kingsbury provides a rigorous and research-level exploration of linearizability and related consistency models in distributed systems.

*How the paper uses it:* MemSnap's correctness hinges on its far-future linearizability property, which complicates its verification.

▶ ["Jepsen II: Linearizable Boogaloo" by Kyle Kingsbury](https://www.youtube.com/watch?v=QdkS6ZjeR7Q) — Strange Loop Conference · 44:47 · 12y ago

### TLA+ formal verification *(prerequisite)*
The paper's proof is formalized and machine-verified using TLA+, making it critical to understand this specification language and its verification tools. The chosen talk by Markus Kuppe is a university-level seminar that covers the tools, language, and applications of TLA+, providing a solid academic introduction suitable for advanced readers.

*How the paper uses it:* The MemSnap correctness proof is developed and verified in TLA+ using TLAPS.

▶ [TLA+: The Tools, The Language, and The Application](https://www.youtube.com/watch?v=zudSAv2njLs) — VSS-IARCS · 1:11:29 · 3y ago

### Meta-configuration tracking proofs *(prerequisite)*
Meta-configuration tracking is a novel forward reasoning technique used to manage the future-dependent linearizability proofs in the paper. Understanding this technique is key to grasping the paper's verification approach. The selected video by Karolos Antoniadis is a concise research-level explanation of snapshot linearizability that aligns well with this concept.

*How the paper uses it:* The paper uses meta-configuration tracking to structure its inductive linearizability proof.

▶ [Is this snapshot linearizable? Karolos Antoniadis](https://www.youtube.com/watch?v=h7X-TOpOS08) — Wandida, EPFL · 5:23 · 6y ago

### MemSnap verification talk *(paper-talk search result; attribution unverified)*
The authors' own presentation of MemSnap verification offers the most precise and comprehensive overview of the paper's contributions, methods, and verification challenges. This talk is essential to understand the detailed proof structure, enhancements, and the significance of the results.

*How the paper uses it:* This is the authors' keynote talk related to MemSnap and its verification.

▶ [APPT 2019 Keynote Speech - Processing Data Where It Makes Sense: Enabling In-Memory Computation](https://www.youtube.com/watch?v=K0OcjxVVhEw) — Onur Mutlu Lectures · 1:12:32 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the MemSnap paper from a beginner to advanced perspective, start by learning about adaptive snapshot algorithms, which provide the foundational concept of capturing consistent views of shared data in concurrent systems. Next, grasp the intricate correctness condition of far-future linearizability, essential for appreciating the verification challenges posed by MemSnap. Then, build knowledge of TLA+, the formal specification and verification language used to prove MemSnap's correctness. After that, explore meta-configuration tracking proofs, the novel technique enabling the machine-verified proof of MemSnap's future-dependent linearizability. Finally, dive into the MemSnap algorithm itself and its verification talk for a comprehensive understanding of the paper's core contributions.

### Adaptive snapshot algorithms *(prerequisite)*
Adaptive snapshot algorithms allow concurrent systems to efficiently capture consistent snapshots of shared data, adapting to workload and concurrency patterns. Understanding these algorithms provides the necessary background on how snapshots work and why efficiency and correctness are challenging in concurrent settings.

*How the paper uses it:* MemSnap is an adaptive snapshot algorithm, so foundational knowledge of snapshot algorithms is needed to understand its design and improvements.

▶ [Snapshots - Intro to Theoretical Computer Science](https://www.youtube.com/watch?v=a-h3HTmv214) — Udacity · 5:17 · 11y ago

### Far-future linearizability *(prerequisite)*
Far-future linearizability is a complex correctness condition for concurrent objects where the linearization points of operations may depend on future events, making reasoning about correctness challenging. Learning this concept helps build intuition about the verification difficulties addressed in the paper.

*How the paper uses it:* MemSnap exhibits far-future linearizability, making its correctness proof particularly intricate and challenging.

▶ [Is this snapshot linearizable? Karolos Antoniadis](https://www.youtube.com/watch?v=h7X-TOpOS08) — Wandida, EPFL · 5:23 · 6y ago

### TLA+ formal verification *(prerequisite)*
TLA+ is a formal specification language and verification system used to model and prove properties of concurrent systems. Understanding TLA+ basics equips you to appreciate how MemSnap's correctness is rigorously verified through machine-checked proofs.

*How the paper uses it:* The paper’s proof is formalized and machine-verified in TLA+, which is critical to its verification approach.

▶ [A gentle intro to TLA+](https://www.youtube.com/watch?v=D_sh1nnX3zY) — Giacomo Citi · 14:44 · 6y ago

### MemSnap verification talk *(paper-talk search result; attribution unverified)*
A direct presentation by the authors provides the most precise and comprehensive overview of MemSnap’s design, enhancements, and formal verification methods. Watching this talk consolidates understanding of the paper’s contributions and proof techniques.

*How the paper uses it:* Direct access to the authors’ presentation provides the most precise and comprehensive overview of the paper’s contributions and methods.

▶ [APPT 2019 Keynote Speech - Processing Data Where It Makes Sense: Enabling In-Memory Computation](https://www.youtube.com/watch?v=K0OcjxVVhEw) — Onur Mutlu Lectures · 1:12:32 · 7y ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Lec-46: Principal Component Analysis (PCA) Explained | Machine Learning](https://www.youtube.com/watch?v=Dv-Kk7PDEas) — also for: A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation (Elizabeth Bradley)
- [Approximate Nearest Neighbors (ANN) Explained | FAISS vs ScaNN vs Annoy (2026)](https://www.youtube.com/watch?v=xqJVwROEsuc) — also for: ParlayANN: Scalable and Deterministic Parallel Graph-Based Approximate Nearest Neighbor Search Algorithms (Yan Gu)
- [Distributed Systems 7.2: Linearizability](https://www.youtube.com/watch?v=noUNH3jDLC0) — also for: LazyLog: A New Shared Log Abstraction and Design for Modern Low-Latency Applications (Aishwarya Ganesan)
- [Formal methods with Hillel Wayne](https://www.youtube.com/watch?v=KSkcgIYQy0U) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [SNA Chapter 5 Lecture 6](https://www.youtube.com/watch?v=g2nxk0gY148) — also for: Learning to Fuse Temporal Proximity Networks: A Case Study in Chimpanzee Social Interactions (Yixuan He)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the MemSnap algorithm and its formal verification. The beginner project focuses on implementing a simplified adaptive snapshot mechanism to grasp the core algorithmic idea. The intermediate project involves reimplementing the MemSnap algorithm's core snapshot operations and comparing performance against a baseline, gaining experience with concurrent data structures and performance metrics. The advanced project tackles extending MemSnap's verification or algorithm to multi-scanner scenarios, addressing a key limitation and exploring formal verification techniques, which aligns with the paper's future directions.

### Beginner — Simplified Adaptive Snapshot Algorithm Implementation
*Effort: a weekend, ~8 hours*

You build a simplified version of an adaptive snapshot algorithm that supports concurrent read and write operations on a shared array of memory components. The implementation will allow a single scanner to take snapshots efficiently, demonstrating the core idea of fast implicit snapshots with constant-time operations.

**Why it shows you understood the paper:** This project shows you understand the fundamental mechanism of MemSnap's snapshot approach and its efficiency claims, by reproducing a core algorithmic idea in a manageable scope.

**Grounded in:** MemSnap implements each operation in just O(1) steps and requires only O(m) space to store the entire data structure consisting of m components.

**Tech stack:** C++, Python 3.11

**Data:** Simulated concurrent read-modify-write operations on an array of integers representing memory components.

**Build it:**

1. Implement a shared array data structure supporting atomic read-modify-write operations.
2. Implement a scanner process that takes an implicit snapshot of the array concurrently.
3. Ensure snapshot operations run in constant time and use linear space relative to the number of components.
4. Write simple tests simulating concurrent updates and snapshot scans.
5. Measure and log operation times to verify constant-time behavior.

**Ships as:** A repository with code implementing the simplified adaptive snapshot algorithm, tests demonstrating correctness under concurrent updates, and a README explaining the algorithm and performance observations.

**Stretch goal:** Add visualization of snapshot consistency over time to illustrate linearizability intuitively.

### Intermediate — Reimplementation and Performance Comparison of MemSnap Core Algorithm
*Effort: 2 weekends, ~20 hours*

You reimplement the core MemSnap adaptive snapshot algorithm based on the paper's detailed description, supporting single-scanner concurrent read-modify-write operations. You then compare its performance against a simple baseline snapshot algorithm (e.g., a naive locking snapshot) on synthetic workloads, measuring operation latency and space usage.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's formal algorithm into working code and empirically validate its efficiency claims, reflecting comprehension of MemSnap's design and performance benefits.

**Grounded in:** MemSnap operations run in O(1) time and use O(m) space for m components.

**Tech stack:** C++, Python 3.11

**Data:** Synthetic workloads simulating concurrent read-modify-write operations on arrays of memory components; no external dataset needed.

**Build it:**

1. Study the paper's algorithm description and formalization to understand MemSnap's core operations.
2. Implement MemSnap's snapshot and update operations supporting a single scanner.
3. Implement a baseline snapshot algorithm using coarse-grained locking.
4. Create synthetic concurrent workloads with configurable update and scan frequencies.
5. Measure and compare operation latency and memory usage for both algorithms.
6. Document results and discuss how they align with the paper's reported O(1) time and O(m) space.

**Ships as:** A repository with implementations of MemSnap and baseline snapshot algorithms, benchmarking scripts, performance results, and a README discussing findings and algorithmic insights.

**Stretch goal:** Extend the implementation to support parallel observation as described in the paper and measure its impact.

### Advanced — Extending MemSnap Verification to Multi-Scanner Adaptive Snapshots
*Effort: 3+ weeks*

You develop a formal TLA+ specification and partial machine-verified proof for a multi-scanner variant of the MemSnap algorithm, addressing the paper's stated limitation that only single-scanner versions are verified. This involves modeling concurrent scanners, adapting the meta-configuration tracking proof technique, and exploring modular proof strategies to manage complexity.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's formal verification approach, its limitations, and the challenges of extending correctness proofs to more complex concurrent scenarios, demonstrating readiness for research-level work.

**Grounded in:** The proof and formalization focus on a single-scanner version of MemSnap; multi-scanner variants have higher complexity and are not covered.

**Tech stack:** TLA+, TLA+ Proof System (TLAPS)

**Data:** No external data; formal specification and proof artifacts developed from the paper's formalization approach.

**Build it:**

1. Study the paper's TLA+ formalization and meta-configuration tracking proof technique for single-scanner MemSnap.
2. Model the multi-scanner MemSnap algorithm in TLA+, including concurrent scanner interactions.
3. Identify and formalize inductive invariants needed for multi-scanner correctness.
4. Develop machine-checked proof scripts in TLAPS for key invariants and linearizability properties.
5. Iteratively refine the specification and proofs to handle complexity and modularize helper methods.
6. Document challenges, partial results, and potential directions for completing the full proof.

**Ships as:** A TLA+ specification repository with partial machine-verified proofs for multi-scanner MemSnap, detailed README explaining the formal model, proof strategy, and encountered challenges.

**Stretch goal:** Automate proof steps further using custom tactics or explore applying meta-configuration tracking to other future-dependent concurrent algorithms.
