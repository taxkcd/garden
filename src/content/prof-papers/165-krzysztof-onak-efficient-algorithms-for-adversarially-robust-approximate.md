---
title: "165 · Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search — Krzysztof Onak"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-krzysztof-onak"
source_hash: "79444b245e13d0f17279804b74379ae2e0060a63fdd00980a5043576f1b99c80"
sequence: 165
generator: "outreach-garden: managed"
---

# 165 · Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search

## At a glance

- **Professor:** Krzysztof Onak
- **Institution:** Boston University
- **Paper:** [Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search](https://arxiv.org/pdf/2601.00272)
- **Authors:** Alexandr Andoni, Themistoklis Haris, Esty Kelman, Krzysztof Onak
- **Year:** 2026

## Paper overview

This paper develops new algorithms for the Approximate Nearest Neighbor (ANN) search problem that remain efficient and correct even when queries and datasets are chosen adversarially and adaptively. The authors introduce novel connections between fairness, differential privacy, and robustness, and propose new algorithmic frameworks that achieve sublinear query time without assumptions on the input data. They also provide specialized algorithms with strong guarantees for low-dimensional metric spaces.

### Why it matters

**Research problem:** How to design efficient Approximate Nearest Neighbor search algorithms that are robust against adaptive adversaries who can choose both the dataset and queries based on previous algorithm outputs, thus potentially breaking classical randomized algorithms' guarantees.

**Why it matters:** ANN search is fundamental in many applications including AI, machine learning, data compression, robotics, and DNA sequencing. Classical ANN algorithms rely on randomness and assume oblivious queries, making them vulnerable to adaptive adversaries. Robust algorithms are crucial for security and reliability in adversarial environments.

**Key contributions:**

- Establishing a formal connection between fairness and adversarial robustness in ANN algorithms.
- Designing an assumption-free robust ANN algorithm via a search-to-decision reduction and differential privacy.
- Introducing a concentric annuli LSH construction that achieves purely sublinear query time and improved robustness.
- Developing for-all robust ANN algorithms for low-dimensional metric spaces with strong correctness guarantees.
- Providing detailed analyses of space, query time, and update time complexities under adversarial models.

## About the professor

**Krzysztof Onak** — Shibulal Family Career Development Assistant Professor, Faculty of Computing & Data Sciences, Boston University.

Research interests: theoretical foundations of algorithms for big data and their applications to AI and machine learning, algorithms for modern parallel and distributed frameworks and streaming and sublinear-time algorithms

### Research links

- [Faculty/profile page](https://onak.pl)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on adversarially robust approximate nearest neighbor search, start with foundational concepts including differential privacy, adversarial robustness in algorithms, fairness in algorithmic outputs, and locality sensitive hashing. These prerequisites provide the theoretical and technical background necessary to grasp the novel algorithmic frameworks introduced. Finally, focus on the core concept of robust approximate nearest neighbor search, featuring a talk by one of the paper's authors to gain direct insight into the new contributions and their significance.

### Differential privacy in algorithms *(prerequisite)*
Differential privacy is a core technique used in the paper to robustify the decision process in ANN algorithms against adaptive adversaries. Understanding the mathematical framework and mechanisms of differential privacy is essential to appreciate how privacy techniques contribute to robustness guarantees.

*How the paper uses it:* The paper uses differential privacy to robustify weak decision ANN algorithms against adaptive queries.

▶ [Tutorial: Differential Privacy and Learning: The Tools, The ...](https://www.youtube.com/watch?v=hoEyvHCRRc8) — Microsoft Research · 1:55:51

### Adversarial robustness in algorithms *(prerequisite)*
Adversarial robustness addresses how algorithms maintain correctness and efficiency when facing adaptive adversaries who can choose inputs based on previous outputs. This concept is central to the paper's problem and motivates the need for new algorithmic designs.

*How the paper uses it:* The paper designs ANN algorithms robust to adaptive adversaries who can choose queries and datasets adversarially.

▶ [Eylon Yogev - Adversarially Robust Streaming Algorithms](https://www.youtube.com/watch?v=gynrNq5OxZM) — HUJI CSE School · 51:15

### Fairness in algorithmic outputs *(prerequisite)*
The paper establishes a formal connection between fairness and adversarial robustness in ANN algorithms. Understanding fairness notions in algorithmic outputs helps to grasp how uniformity and independence from internal randomness imply robustness.

*How the paper uses it:* The paper proves that fairness in ANN algorithms implies adversarial robustness.

▶ [Practical Individual Fairness Algorithms](https://www.youtube.com/watch?v=WiWsJh1peoA) — Toronto Machine Learning Series (TMLS) · 43:48

### Locality Sensitive Hashing *(prerequisite)*
Locality Sensitive Hashing (LSH) is a fundamental method for approximate nearest neighbor search and underpins the paper's novel concentric annuli LSH construction. A solid understanding of LSH principles and mechanisms is necessary to appreciate the improvements introduced.

*How the paper uses it:* The paper introduces a concentric annuli LSH construction combining fairness and privacy for improved robustness and query time.

▶ [Locality Sensitive Hashing - Part-1](https://www.youtube.com/watch?v=yhZ7N1Jr1io) — NPTEL - Special Lecture Series · 41:44

### Robust Approximate Nearest Neighbor Search *(the paper's own talk)*
This is the core concept of the paper, focusing on designing ANN algorithms that remain efficient and correct under adversarial query and dataset choices. The chosen talk by a paper author provides direct insight into the novel algorithmic frameworks and theoretical guarantees.

*How the paper uses it:* The paper develops new adversarially robust ANN algorithms with strong theoretical guarantees and novel algorithmic frameworks.

▶ [Akexandr Andoni - Sublinear Algorithmic Tools](https://www.youtube.com/watch?v=rTUHSXtaWb0) — DIMACS CCICADA · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand adversarially robust approximate nearest neighbor (ANN) search algorithms. We start with the basics of adversarial robustness and fairness in algorithms, then cover differential privacy and locality-sensitive hashing (LSH), which are key technical tools used in the paper. Finally, we focus on robust ANN search itself, tying all concepts together to grasp the paper's novel contributions.

### Adversarial robustness in algorithms *(prerequisite)*
Learn what adversarial robustness means in the context of algorithms—how algorithms can maintain correctness and performance even when facing adaptive adversaries who try to break them. This foundational understanding is crucial to appreciate why classical ANN algorithms fail under adversarial queries and how robustness can be achieved.

*How the paper uses it:* The paper addresses designing ANN algorithms that remain efficient and correct against adaptive adversaries.

▶ [Adversarial Robustness](https://www.youtube.com/watch?v=wIX00bZ173k) — Center for AI Safety · 30:55

### Fairness in algorithmic outputs *(prerequisite)*
Understand the concept of fairness in algorithms, which ensures that similar inputs are treated similarly and outputs do not depend unfairly on internal randomness. This paper uniquely connects fairness to adversarial robustness, showing that fair ANN algorithms can resist adaptive adversaries.

*How the paper uses it:* The paper establishes a formal connection between fairness and adversarial robustness in ANN algorithms.

▶ [Definitions of Fairness in Machine Learning | Equal ...](https://www.youtube.com/watch?v=c2_ezuAnCrA) — A Data Odyssey · 10:32

### Differential privacy in algorithms *(prerequisite)*
Differential privacy is a technique originally designed to protect individual data privacy but also useful to make algorithms robust against adaptive queries by limiting information leakage. This section introduces the core ideas of differential privacy and how it can be applied to robustify decision procedures.

*How the paper uses it:* The paper uses differential privacy techniques to robustify weak decision ANN algorithms against adaptive adversaries.

▶ [Tutorial: Differential Privacy and Learning: The Tools, The ...](https://www.youtube.com/watch?v=hoEyvHCRRc8) — Microsoft Research · 1:55:51

### Locality Sensitive Hashing *(prerequisite)*
Locality Sensitive Hashing (LSH) is a fundamental method for approximate nearest neighbor search that hashes similar points to the same buckets with high probability. Understanding LSH is key to grasping the paper's novel concentric annuli LSH construction that improves robustness and query time.

*How the paper uses it:* The paper introduces a novel concentric annuli LSH construction combining fairness and privacy to break query time barriers.

▶ [Locality Sensitive Hashing - Part-1](https://www.youtube.com/watch?v=yhZ7N1Jr1io) — NPTEL - Special Lecture Series · 41:44

### Robust Approximate Nearest Neighbor Search
This section focuses on approximate nearest neighbor search algorithms that remain robust under adversarial conditions. It ties together the prior concepts to explain how the paper's new algorithms achieve sublinear query time and strong correctness guarantees even with adaptive adversaries.

*How the paper uses it:* The paper develops new adversarially robust ANN algorithms with improved efficiency and correctness guarantees.

▶ [HNSW for Vector Search Explained and Implemented with ...](https://www.youtube.com/watch?v=QvKMwLjdK-s) — James Briggs · 34:35

## Already in your library

- [04. Privacy II: Differential Privacy for Machine Learning ...](https://www.youtube.com/watch?v=0wbN0CFP6UY) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)
