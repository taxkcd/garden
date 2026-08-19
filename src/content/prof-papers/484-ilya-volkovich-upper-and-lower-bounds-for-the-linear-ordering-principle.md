---
title: "484 · Upper and Lower Bounds for the Linear Ordering Principle — Ilya Volkovich"
date: 2026-08-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ilya-volkovich"
source_hash: "9ee6bbc000099fef72f8ccd14b87f59a59e729f7f4febb673e8b84292c75c557"
sequence: 484
generator: "outreach-garden: managed"
---

# 484 · Upper and Lower Bounds for the Linear Ordering Principle

## At a glance

- **Professor:** Ilya Volkovich
- **Institution:** Boston College
- **Paper:** [Upper and Lower Bounds for the Linear Ordering Principle](https://arxiv.org/pdf/2503.19188)
- **Authors:** Edward A. Hirsch, Ilya Volkovich
- **Year:** 2026

## Paper overview

This paper studies the complexity class LP2, defined via the Linear Ordering Principle, and establishes new upper and lower bounds for it. It resolves open questions about the relationships between classes based on symmetric alternation and Merlin-Arthur protocols, showing new containments and collapses in complexity theory. The authors develop deterministic algorithms using promise SBP oracles to approximate counting and find minimum elements in linear orders, leading to stronger Karp-Lipton-style collapse theorems.

### Why it matters

**Research problem:** Understanding the computational complexity of the Linear Ordering Principle (LP2) class, its relationship with other complexity classes such as prMA, SP2, and prSBP, and resolving open questions about Karp-Lipton-style collapses and circuit lower bounds related to these classes.

**Why it matters:** The Linear Ordering Principle and related complexity classes play a key role in connecting uniform and non-uniform complexity, with implications for circuit lower bounds and derandomization. Resolving open questions about these classes helps clarify the landscape of complexity theory, especially regarding promise problems, oracle access, and the power of probabilistic proof systems.

**Key contributions:**

- Proved PprMA ⊆ LP2, resolving an open question and establishing a new lower bound for LP2.
- Showed LP2 ⊆ PprSBP, providing a new upper bound for LP2.
- Established that PprO2 ⊆ OP2, clarifying the strongest known Karp-Lipton-style collapse.
- Demonstrated that the Karp-Lipton collapse to PprOMA is stronger than previous collapses to PprMA and OP2.
- Developed deterministic approximate counting algorithms using prSBP oracles.

## About the professor

**Ilya Volkovich** — Assistant Professor, Computer Science Department, Boston College.

Research interests: Computational Complexity with Applications to Cryptography and Machine Learning. In particular: Algebraic Complexity, Randomness in Computation, Meta Complexity, Computational Learning Theory

### Research links

- [Faculty/profile page](https://sites.google.com/site/ilyavv)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Complexity Theory
**The paper assumes:** complexity classes, oracle machines, promise problems, probabilistic proof systems, Karp-Lipton theorems
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computational complexity theory including complexity classes and oracle models.

This background is designed to prepare readers for the computational complexity theory concepts essential to understanding the paper on the Linear Ordering Principle and related complexity classes. The rigorous course option offers a deep, structured university-level treatment of complexity theory, while the fast track provides a concise, focused introduction to key complexity topics for quicker comprehension. Choose the course for thorough mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.404J Theory of Computation, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY) — MIT OpenCourseWare · 25 videos · 32.3h across 25 episodes

**Watch only this:** Lectures 14 to 25 (12 lectures, about 15.4 hours) — starting from 'P and NP, SAT, Poly-Time Reducibility' through 'Interactive Proof Systems, IP' to cover complexity classes, oracle access, probabilistic classes, and proof systems relevant to the paper.

*Why it unblocks this paper:* MIT's 18.404J Theory of Computation course covers foundational and advanced topics in computational complexity, including complexity classes, oracle machines, probabilistic computation, and interactive proofs, all directly relevant to the paper's subject matter.

*If you want all of it:* 32.3 hours across 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Complexity Theory](https://www.youtube.com/playlist?list=PLaIjqgElJIp756_68dm_Rm3HMkH6QW2cx) — holysmokesist · 17 videos · 7.5h across the first 15 episodes

**Watch only this:** Episodes 13 to 15 (3 episodes, about 1.5 hours) — 'The P versus NP Problem (Part 1)', 'Introduction to P and NP', and 'A working definition of NP-hard' to quickly grasp the essential complexity class concepts and hardness notions.

*Why it unblocks this paper:* This playlist provides a concise introduction to computational complexity theory concepts such as P vs NP, complexity classes, and probabilistic computation, offering a focused overview that aligns well with the paper's core topics in a fraction of the time.

*If you want all of it:* About 7.5 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Upper and Lower Bounds for the Linear Ordering Principle," start by grounding yourself in the foundational complexity theory concepts, including promise complexity classes and Merlin-Arthur protocols, which are central to the paper's results. Then, study the Karp-Lipton collapse theorems to grasp the significance of the collapses established. Finally, focus on the paper's core concept—the Linear Ordering Principle and its complexity class LP2—through the authors' own seminar talk, which provides the most direct and detailed exposition of their contributions.

### Promise complexity classes *(prerequisite)*
Understanding promise problems and their associated complexity classes is essential because the paper extensively deals with promise versions of classes like prMA, prSBP, and prOMA. These classes differ from classical complexity classes by incorporating promise problems, which are crucial for the paper's oracle access modes and containment results.

*How the paper uses it:* The paper studies complexity classes defined via promise problems, such as PprMA and PprSBP, making this foundational knowledge necessary.

▶ [Non-Disjoint Promise Problems from Meta-Computational View of Pseudorandom ...  - Shuichi  Hirahara](https://www.youtube.com/watch?v=DV_CPvLtnzM) — Computational Complexity Conference · 30:24 · 6 years ago

### Merlin Arthur protocols *(prerequisite)*
Merlin-Arthur (MA) protocols are a key probabilistic proof system class involved in the paper's main results, especially the containment PprMA ⊆ LP2. Understanding the structure and power of MA protocols helps in appreciating how the authors resolve open questions about these classes and their relationships.

*How the paper uses it:* The paper proves that PprMA is contained in LP2, a central result involving Merlin-Arthur protocols.

▶ [Introduction to Arthur-Merlin classes, MA and AM: Graduate Complexity Lecture 10 at CMU](https://www.youtube.com/watch?v=die3b_mOIdo) — Ryan O'Donnell · 1:22:37 · 8 years ago

### Karp Lipton collapse theorems *(prerequisite)*
Karp-Lipton collapse theorems describe how certain circuit complexity assumptions imply collapses in complexity hierarchies. The paper establishes new and stronger Karp-Lipton-style collapses involving LP2 and related classes, which are critical to understanding the broader implications of their results.

*How the paper uses it:* The paper clarifies and strengthens Karp-Lipton-style collapses, such as PprO2 ⊆ OP2 and collapses to PprOMA.

▶ [Upper and Lower Bounds for the Linear Ordering Principle - Ilya Volkovich](https://www.youtube.com/watch?v=j9RrKJpVwkM) — Institute for Advanced Study · 1:11:11 · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on the Linear Ordering Principle and its complexity class LP2, start by building a foundation in computational complexity classes and promise problems, which are central to the paper's context. Next, learn about Merlin-Arthur protocols, as they relate to key containment results. Then, grasp the Karp-Lipton collapse theorems, which the paper strengthens. Finally, explore deterministic approximate counting with oracles, a core technical method used in the paper's algorithms and proofs.

### Promise complexity classes *(prerequisite)*
Promise problems generalize decision problems by restricting inputs to a 'promise' subset, which is crucial for understanding complexity classes like prMA, prSBP, and LP2. This section introduces the idea of promise problems and how they differ from classical complexity classes, laying the groundwork for the paper's focus on promise-based classes.

*How the paper uses it:* The paper studies LP2 and related classes defined via promise problems, so understanding promise complexity classes is essential.

▶ [19. Complexity](https://www.youtube.com/watch?v=JbafQJx1CIA) — MIT OpenCourseWare · 59:09 · 4 years ago

### Merlin Arthur protocols *(prerequisite)*
Merlin-Arthur (MA) protocols are probabilistic proof systems where a powerful prover (Merlin) sends a proof to a verifier (Arthur) who uses randomness to check it. Understanding MA protocols helps grasp the containment PprMA ⊆ LP2 and the role of randomness and proofs in complexity theory.

*How the paper uses it:* The paper proves PprMA ⊆ LP2, a key containment involving Merlin-Arthur protocols.

▶ [Introduction to Arthur-Merlin classes, MA and AM: Graduate Complexity Lecture 10 at CMU](https://www.youtube.com/watch?v=die3b_mOIdo) — Ryan O'Donnell · 1:22:37 · 8 years ago

### Karp Lipton collapse theorems *(prerequisite)*
Karp-Lipton theorems describe how certain circuit complexity assumptions cause collapses in complexity class hierarchies, revealing deep structural insights. Learning these theorems clarifies the paper's new stronger collapses involving LP2 and promise classes.

*How the paper uses it:* The paper establishes new Karp-Lipton-style collapses that clarify relationships between LP2, PprOMA, and other classes.

▶ [Upper and Lower Bounds for the Linear Ordering Principle - Ilya Volkovich](https://www.youtube.com/watch?v=j9RrKJpVwkM) — Institute for Advanced Study · 1:11:11 · 6 months ago

### Deterministic approximate counting with oracles
Deterministic approximate counting algorithms estimate the number of solutions to problems using oracle queries, a technique that replaces randomness with structured queries. This method is central to the paper's construction of deterministic algorithms using prSBP oracles.

*How the paper uses it:* The paper develops deterministic approximate counting algorithms with prSBP oracle access to prove upper bounds and design iterative procedures.

▶ [A Poly-time Deterministic Algorithm for Simply Exponential Approximation...](https://www.youtube.com/watch?v=krONi-yI_gw) — Simons Institute for the Theory of Computing · 52:33 · Streamed 7 years ago

## Already in your library

- [Vinayak Kumar: Linear Hashing is Optimal](https://www.youtube.com/watch?v=TJLB1SFDvhY) — also for: Linear Hashing Is Optimal (David Zuckerman)
- [Lecture 23: Computational Complexity](https://www.youtube.com/watch?v=moPtwq_cVH8) — also for: Learning-assisted schedulability analysis: opportunities and limitations (Sanjoy K. Baruah)
- [16. Complexity: P, NP, NP-completeness, Reductions](https://www.youtube.com/watch?v=eHZifpgyH_4) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [P vs. NP and the Computational Complexity Zoo](https://www.youtube.com/watch?v=YX40hbAHx3s) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Streaming Interactive Proofs and Arthur-Merlin Communication](https://www.youtube.com/watch?v=JJ_xDqXutjw) — also for: A Framework for Building Data Structures from Communication Protocols (Alexandr Andoni)
- [Arthur–Merlin protocol](https://www.youtube.com/watch?v=i4qRlIpsXsQ) — also for: A Framework for Building Data Structures from Communication Protocols (Alexandr Andoni)
- [NP-Complete Explained (Cook-Levin Theorem)](https://www.youtube.com/watch?v=W9G_1xG77LE) — also for: Heuristic shortest hyperpaths in cell signaling hypergraphs (John D. Kececioglu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Upper and Lower Bounds for the Linear Ordering Principle." Starting with a beginner-level implementation of the deterministic approximate counting algorithm using prSBP oracles, you then move to an intermediate project reimplementing the iterative procedure to find minimum elements in linear orders. The advanced project tackles an open question from the paper by exploring parallelization of the LP2 ⊆ PprSBP containment, addressing a stated future direction.

### Beginner — Deterministic Approximate Counting with Promise SBP Oracle
*Effort: a weekend, ~8 hours*

You build a simplified deterministic approximate counting algorithm inspired by Lemma 3.4 of the paper. The algorithm will simulate oracle queries to a promise SBP (prSBP) oracle to approximate the count of satisfying assignments of a Boolean circuit within a given error bound.

**Why it shows you understood the paper:** This project shows you understand how deterministic approximate counting can be achieved using prSBP oracles, a key technical tool developed in the paper to establish upper bounds for LP2.

**Grounded in:** Lemma 3.4: Deterministic approximate counting with prSBP oracle queries.

**Tech stack:** Python 3.11

**Data:** You simulate Boolean circuits as input; no external dataset is required.

**Build it:**

1. Implement a Boolean circuit representation and evaluation function in Python.
2. Implement a deterministic approximate counting procedure that queries a simulated prSBP oracle function.
3. Design the prSBP oracle simulation to answer membership queries with promise problem constraints.
4. Test the approximate counting on small Boolean circuits with known counts.
5. Document the algorithm, its relation to the paper's Lemma 3.4, and example outputs.

**Ships as:** A Python repository with code and README demonstrating deterministic approximate counting using a simulated prSBP oracle, including example runs and explanations.

**Stretch goal:** Extend the oracle simulation to handle more complex promise problems or implement error bounds analysis.

### Intermediate — Iterative Minimum Element Finding in Linear Orders
*Effort: 2 weekends, ~20 hours*

You reimplement the polynomial-time iterative procedure 'Back' from Lemma 3.12 that finds an element with order rank reduced by a constant factor in a linear order, using oracle access to prSBP. You compare your implementation's behavior against a naive minimum-finding baseline on synthetic linear orders.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core algorithmic contribution for approximating minimum elements in linear orders using prSBP oracles, a building block for the new upper bounds on LP2.

**Grounded in:** Lemma 3.12: Procedure Back finds an element with order rank reduced by a constant factor.

**Tech stack:** Python 3.11

**Data:** Synthetic linear orders generated as permutations of n elements; no external dataset needed.

**Build it:**

1. Implement a data structure to represent linear orders as permutations.
2. Implement the 'Back' procedure simulating oracle queries to a prSBP oracle.
3. Implement a naive minimum element finder as a baseline.
4. Generate synthetic linear orders of varying sizes for testing.
5. Compare the iterative procedure's performance and correctness against the baseline.
6. Write a report linking your implementation to the paper's Lemma 3.12 and results.

**Ships as:** A Python repository with code, tests, and a README comparing the iterative minimum-finding procedure to a baseline, illustrating the paper's algorithm.

**Stretch goal:** Add visualization of the iterative rank reduction process or explore approximate counting integration.

### Advanced — Exploring Parallelization of LP2 ⊆ PprSBP Containment
*Effort: 3+ weeks*

You investigate whether the containment LP2 ⊆ PprSBP can be achieved with parallel oracle queries, addressing one of the paper's open questions and future directions. You design and implement prototype algorithms that attempt parallel query strategies for approximate counting or minimum element finding, analyze their theoretical feasibility, and empirically evaluate them on synthetic data.

**Why it shows you understood the paper:** This project tackles a stated limitation and open problem from the paper, demonstrating deep engagement with the paper's core results and future research challenges in promise problem oracle access and complexity class collapses.

**Grounded in:** Limitations and future directions: "It remains open whether LP2 ⊆ PprSBP can be implemented with parallel queries." and "Investigate whether prSBP ⊆ SP2 and whether LP2 ⊆ PprSBP can be achieved with parallel queries."

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic Boolean circuits and linear orders generated for testing parallel query algorithms.

**Build it:**

1. Review the paper's description of LP2 ⊆ PprSBP containment and oracle query models.
2. Design parallel query algorithms inspired by the deterministic approximate counting and iterative minimum-finding procedures.
3. Implement these algorithms simulating parallel oracle queries in Python.
4. Generate synthetic test cases of Boolean circuits and linear orders.
5. Evaluate the correctness and efficiency of parallel query strategies versus sequential ones.
6. Analyze theoretical barriers or advantages observed, documenting findings in a detailed report.

**Ships as:** A Python/Jupyter repository with implementations, experiments, and a report discussing the feasibility and challenges of parallelizing LP2 ⊆ PprSBP oracle queries.

**Stretch goal:** Extend the study to other promise problem classes or explore implications for Karp-Lipton-style collapses.

_The paper's authors have not released code or datasets; all projects require reimplementation and simulation of oracles and data based on the paper's descriptions._
