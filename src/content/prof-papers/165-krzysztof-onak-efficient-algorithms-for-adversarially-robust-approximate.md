---
title: "165 · Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search — Krzysztof Onak"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-krzysztof-onak"
source_hash: "b47b42036df604f9c1777fc9545592523e02314cd216c235a0626310d40aadd4"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from a simple demonstration of fairness-based robustness in ANN algorithms to a full reimplementation of the paper's core robust ANN method, culminating in an advanced extension addressing one of the paper's key limitations on adaptive dataset updates. Each project is designed to fit your existing software engineering and algorithmic skills while deepening your understanding of adversarial robustness, differential privacy, and locality-sensitive hashing in ANN search.

### Beginner — Fairness-Based Robust ANN Demo
*Effort: a weekend, ~8 hours*

You build a small-scale Approximate Nearest Neighbor (ANN) search simulation that implements a fairness-inspired randomized algorithm ensuring uniform output distribution over neighbors. The demo will visualize how fairness in output distribution implies robustness against adaptive queries in a simple synthetic metric space.

**Why it shows you understood the paper:** This project concretely demonstrates the paper's Claim 4.3 that fairness implies adversarial robustness, showing you grasp the connection between fairness and robustness in ANN algorithms.

**Grounded in:** Claim 4.3 (Fairness Implies Robustness). The algorithm Afair is n^{1}-adversarially robust for Q adaptive queries.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic low-dimensional Euclidean points generated randomly to simulate a small dataset for ANN queries.

**Build it:**

1. Generate a small synthetic dataset of points in 2D Euclidean space.
2. Implement a simple randomized ANN query algorithm that returns neighbors with a uniform probability distribution (fairness).
3. Simulate adaptive queries where each query depends on previous outputs.
4. Visualize the distribution of returned neighbors over multiple adaptive queries to show fairness and robustness.
5. Write a README explaining the fairness-robustness connection demonstrated.

**Ships as:** A Jupyter notebook with code, visualizations, and explanations showing fairness-based robustness in a toy ANN setting.

**Stretch goal:** Add a comparison with a classical randomized ANN algorithm that is not fairness-aware to highlight robustness differences.

### Intermediate — Robust ANN via Differential Privacy Reimplementation
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core robust ANN algorithm based on the search-to-decision reduction combined with differential privacy techniques. Using a publicly available low-dimensional dataset (e.g., MNIST embeddings or a small UCI dataset as a proxy), you implement the bucketing-based ANN with private aggregation of decision queries and compare query accuracy and robustness against a baseline classical ANN method.

**Why it shows you understood the paper:** This project shows you can translate the paper's main algorithmic framework into working code, understand the role of differential privacy in robustness, and evaluate performance metrics similar to those in the paper.

**Grounded in:** Theorem 1.3. There exists an adversarially robust algorithm for the (c, r)-ANN problem ... The algorithm uses O(n^{1/(2−ρ)}) time per-query and differential privacy to robustify the decision process.

**Tech stack:** Python 3.11, numpy, scipy, scikit-learn, matplotlib

**Data:** Use a publicly available dataset such as MNIST embeddings or UCI datasets as a substitute for the paper's data; synthetic data generation is also acceptable.

**Build it:**

1. Implement a classical bucketing-based ANN algorithm for approximate nearest neighbor search.
2. Implement the search-to-decision reduction framework to convert ANN queries into decision queries.
3. Apply a simple differential privacy mechanism (e.g., Laplace noise addition) to aggregate decision query results privately.
4. Evaluate query time, accuracy, and robustness against adaptive query sequences.
5. Compare results with the classical ANN baseline and document findings in a report.

**Ships as:** A Python project with scripts and a report comparing robust and classical ANN algorithms on a real or synthetic dataset.

**Stretch goal:** Experiment with tuning privacy parameters and analyze their impact on query time and robustness.

### Advanced — Extending Robust ANN to Fully Adaptive Dataset Updates
*Effort: 3+ weeks*

You develop an extension of the paper's robust ANN algorithms to handle fully adaptive dataset modifications, addressing one of the paper's stated limitations. This involves designing and implementing an update-efficient robust ANN data structure that maintains adversarial robustness under adaptive insertions and deletions. You evaluate your method on a synthetic dynamic dataset simulating adversarial updates and compare robustness and update efficiency with a baseline static robust ANN.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions, your ability to innovate beyond the original work, and your skills in algorithm design and evaluation under adversarial models.

**Grounded in:** Limitation: The approach assumes oblivious updates and does not address fully adaptive dataset modifications. Future direction: Improving update efficiency and handling fully adaptive dataset changes.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, pytest

**Data:** Synthetic dynamic datasets generated to simulate adversarial adaptive updates in a metric space.

**Build it:**

1. Study the paper's robust ANN algorithms and identify update mechanisms and limitations.
2. Design a data structure and algorithm to support fully adaptive dataset updates while preserving robustness.
3. Implement the extended robust ANN algorithm with update support.
4. Create synthetic dynamic datasets with adversarial update patterns.
5. Evaluate query robustness, update time, and space complexity compared to the original static robust ANN.
6. Document the design, implementation, and evaluation results in a detailed README.

**Ships as:** A Python codebase implementing the extended robust ANN with adaptive updates and an evaluation report demonstrating improvements and trade-offs.

**Stretch goal:** Explore applying the extended method to other metric spaces or integrate differential privacy techniques for stronger guarantees.
