---
title: "070 · Approximate Replicability in Learning — Russell Impagliazzo"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-russell-impagliazzo"
source_hash: "db7ca6e7d8f83aa8738abe713d5effe16c39bdf18d472f0878b29abbbafd6369"
sequence: 70
generator: "outreach-garden: managed"
---

# 070 · Approximate Replicability in Learning

## At a glance

- **Professor:** Russell Impagliazzo
- **Institution:** Univ. of California - San Diego
- **Paper:** [Approximate Replicability in Learning](https://arxiv.org/abs/2510.20200)
- **Authors:** Max Hopkins, Russell Impagliazzo, Christopher Ye
- **Year:** 2026

## Paper overview

This paper studies relaxed versions of replicability in machine learning algorithms, which require algorithms to produce stable outputs when trained on different samples from the same distribution. The authors introduce three weaker notions—pointwise replicability, approximate replicability, and semi-replicability—that allow learning in settings where strict replicability is impossible or too costly. They provide algorithms achieving these relaxed replicability guarantees with near-optimal sample complexity, prove matching lower bounds, and show that shared randomness is necessary even for these relaxed notions.

### Why it matters

**Research problem:** Strict replicability in learning algorithms, which demands identical outputs on fresh samples, is often impossible or requires prohibitive sample complexity, especially for basic tasks like threshold learning. The problem is to identify weaker, approximate notions of replicability that still ensure stability but are achievable with reasonable sample complexity for any learnable class.

**Why it matters:** Replicability is crucial for scientific validity and trustworthiness of machine learning results. However, strict replicability is too restrictive and costly, limiting practical applicability. Developing approximate replicability notions expands the range of problems where stable learning is feasible, enabling more reliable and robust algorithms in practice.

**Key contributions:**

- Introduction of three natural relaxations of replicability: pointwise, approximate, and semi-replicability.
- Generic algorithms transforming any PAC learner into pointwise or approximately replicable learners with near-optimal sample complexity.
- A proper approximately replicable learner for the fundamental class of 1D thresholds, which is impossible under strict replicability.
- Tight lower bounds on sample complexity for all three relaxed replicability notions, matching upper bounds up to polylogarithmic factors.
- Proof that shared randomness is necessary even for approximate replicability using the Poincare-Miranda theorem.

## About the professor

**Russell Impagliazzo** — Professor, Computer Science and Engineering, Univ. of California - San Diego.

Research interests: computational complexity theory, proof complexity, the theory of cryptography, computational randomness, structural complexity, analyzing optimization heuristics and other approaches to solving hard problems

### Research links

- [Faculty/profile page](https://cseweb.ucsd.edu/~russell)
- [Resolved homepage](http://cseweb.ucsd.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Approximate Replicability in Learning," start with foundational concepts in PAC learning theory, algorithmic stability, sample complexity, and the role of shared randomness in learning algorithms. These prerequisites build the theoretical background necessary to grasp the paper's contributions. Finally, focus on the core concept of approximate replicability in learning, featuring the authors' own talk for direct insights into their novel relaxations and results.

### PAC Learning Theory *(prerequisite)*
PAC learning theory provides the fundamental framework for understanding learnability, sample complexity, and algorithmic guarantees that underpin the transformations and analyses in the paper. A rigorous university-level lecture or seminar is preferred to ensure depth beyond introductory treatments.

*How the paper uses it:* The paper builds on PAC learning to transform standard learners into replicable learners with provable sample complexity.

▶ [PAC Learning - Georgia Tech - Machine Learning](https://www.youtube.com/watch?v=e37nlms7Zi0) — Udacity · 11 years ago

### Algorithmic Stability in Machine Learning *(prerequisite)*
Algorithmic stability is a foundational notion related to replicability, capturing how sensitive learning algorithms are to changes in training data. Understanding stability is crucial to appreciate the relaxed replicability notions introduced in the paper.

*How the paper uses it:* The paper's relaxed replicability notions are stability-based relaxations of strict replicability.

▶ [YINS Alumnae Seminar: Anup Rao, “Machine Unlearning via Algorithmic Stability” 8/11/21](https://www.youtube.com/watch?v=VZ9oX07umVg) — Yale Institute for Network Science · 4 years ago

### Sample Complexity in Learning Theory *(prerequisite)*
Sample complexity analysis is key to evaluating the feasibility and optimality of replicable learners. A research-level talk on sample complexity bounds and learning theory provides the necessary mathematical rigor.

*How the paper uses it:* The paper proves near-optimal sample complexity upper and lower bounds for relaxed replicability notions.

▶ [Sample Complexity and Uniform Convergence I](https://www.youtube.com/watch?v=xtNAVD4_AYk) — Simons Institute for the Theory of Computing · Streamed 9 years ago

### Shared Randomness in Learning Algorithms *(prerequisite)*
Shared randomness is critical in the paper's impossibility results and algorithmic constructions. Understanding its role in communication and learning protocols is essential for grasping why it is necessary even for approximate replicability.

*How the paper uses it:* The paper proves the necessity of shared randomness for all relaxed replicability notions using topological arguments.

▶ [Finding randomness](https://www.youtube.com/watch?v=zIEJSmcvs40) — Institute for Mathematical Sciences · 7 years ago

### Approximate Replicability in Learning Paper Talk *(the paper's own talk)*
The authors' own talk provides the most precise and comprehensive overview of their new relaxed replicability notions, algorithms, sample complexity results, and impossibility proofs. It is the best resource to understand the paper's core contributions directly from the researchers.

*How the paper uses it:* This talk features Max Hopkins, Russell Impagliazzo, and Christopher Ye presenting their joint work on approximate replicability.

▶ [FOCS 2024 7C Replicability in High Dimensional Statistics](https://www.youtube.com/watch?v=5VY_pOsesUw) — FOCS 2024 · 14:16 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Approximate Replicability in Learning, start by grasping the foundational concepts of PAC learning theory and algorithmic stability, which underpin the paper's approach to learning with stability guarantees. Then, learn about sample complexity to appreciate the feasibility and optimality of replicable learners. Next, explore the role of shared randomness, crucial for the paper's impossibility results and constructions. Finally, focus on the core concept of relaxed replicability notions introduced in the paper, which enable stable learning with practical sample complexity.

### PAC Learning Theory *(prerequisite)*
PAC learning is a fundamental framework in machine learning that formalizes how algorithms can learn concepts approximately and probably correctly from samples. Understanding PAC learning helps grasp how learning algorithms guarantee performance with limited data.

*How the paper uses it:* The paper transforms standard PAC learners into replicable learners with relaxed stability guarantees.

▶ [Probably Approximately Correct (PAC)Learning ( KTU CS467  Machine Learning Module 2)](https://www.youtube.com/watch?v=fTWm2S5tFCo) — SanITtips · 5 years ago

### Algorithmic Stability in Machine Learning *(prerequisite)*
Algorithmic stability measures how sensitive a learning algorithm's output is to changes in its training data, which is key to understanding replicability and generalization. Stable algorithms produce consistent outputs, a property the paper seeks to relax and analyze.

*How the paper uses it:* Replicability notions studied in the paper are forms of algorithmic stability ensuring consistent outputs across samples.

▶ [Algorithmic Stability for Interactive Data Analysis](https://www.youtube.com/watch?v=XqfkNjSJqkk) — Simons Institute for the Theory of Computing · 8 years ago

### Sample Complexity in Learning Theory *(prerequisite)*
Sample complexity quantifies the number of training examples needed for a learning algorithm to perform well. This concept is essential to evaluate the efficiency and feasibility of replicable learners introduced in the paper.

*How the paper uses it:* The paper provides near-optimal sample complexity bounds for relaxed replicability notions.

▶ [Sample Complexity and Uniform Convergence I](https://www.youtube.com/watch?v=xtNAVD4_AYk) — Simons Institute for the Theory of Computing · Streamed 9 years ago

### Shared Randomness in Learning Algorithms *(prerequisite)*
Shared randomness refers to random bits accessible to both the learner and the evaluator, enabling coordination in randomized algorithms. It is crucial for overcoming impossibility results in replicable learning.

*How the paper uses it:* The paper proves shared randomness is necessary even for approximate replicability.

▶ [Finding randomness](https://www.youtube.com/watch?v=zIEJSmcvs40) — Institute for Mathematical Sciences · 7 years ago

### Approximate Replicability in Learning Paper Talk *(the paper's own talk)*
A concise talk by the paper's authors provides direct insights into the motivation, definitions, algorithms, and results of approximate replicability in learning, offering a clear overview from the experts themselves.

*How the paper uses it:* This talk covers the main ideas and results of the paper, complementing the foundational concepts.

▶ [FOCS 2024 7C Replicability in High Dimensional Statistics](https://www.youtube.com/watch?v=5VY_pOsesUw) — FOCS 2024 · 14:16 · 1 year ago
