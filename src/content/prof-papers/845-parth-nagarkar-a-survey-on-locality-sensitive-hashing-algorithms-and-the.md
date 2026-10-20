---
title: "845 · A Survey on Locality Sensitive Hashing Algorithms and their Applications — Parth Nagarkar"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-parth-nagarkar"
source_hash: "df7061617e7ca5aa1b83f7d66541ba9891afeafac5930bbd48f264f1ac8361f3"
sequence: 845
generator: "outreach-garden: managed"
---

# 845 · A Survey on Locality Sensitive Hashing Algorithms and their Applications

## At a glance

- **Professor:** Parth Nagarkar
- **Institution:** New Mexico State University
- **Paper:** [A Survey on Locality Sensitive Hashing Algorithms and their Applications](https://arxiv.org/pdf/2102.08942)
- **Authors:** Omid Jafari, Preeti Maurya, Parth Nagarkar, Khandker Mushfiqul Islam, Chidambaram Crushev
- **Year:** 2021

## Paper overview

This paper surveys Locality Sensitive Hashing (LSH) algorithms, which are techniques to efficiently find approximate nearest neighbors in high-dimensional data. It reviews various LSH methods, distributed frameworks to scale LSH, and diverse applications where LSH is used, such as multimedia retrieval, biological data analysis, and privacy-preserving computations.

### Why it matters

**Research problem:** Finding nearest neighbors in high-dimensional spaces is computationally expensive and traditional exact methods suffer from the curse of dimensionality. The problem is to efficiently perform approximate nearest neighbor searches with theoretical guarantees on accuracy and sub-linear query time.

**Why it matters:** Nearest neighbor search is fundamental in many domains including multimedia retrieval, machine learning, biological sciences, and information retrieval. Efficient approximate methods enable scalable processing of large, high-dimensional datasets where exact search is infeasible.

**Key contributions:**

- Comprehensive review of LSH techniques categorized by hash family and detailed explanation of their workflows.
- Survey of distributed frameworks that improve LSH processing speed and scalability.
- Categorization and explanation of diverse application domains utilizing LSH algorithms.
- Presentation of novel aspects not covered in prior surveys, such as distributed LSH and application-specific adaptations.

## About the professor

**Parth Nagarkar** — Assistant Professor, Computer Science, New Mexico State University.

Research interests: big data management, scalable index structures, distributed systems, efficient large-scale, high-dimensional data processing

### Research links

- [Faculty/profile page](https://www.cs.nmsu.edu/~nagarkar/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Approximate Nearest Neighbor Search
**The paper assumes:** approximate nearest neighbor search, high-dimensional indexing, and similarity search algorithms
**Already in this field?** Skip this entirely if you already understand the principles and challenges of approximate nearest neighbor search in high-dimensional data.

To understand the survey paper on Locality Sensitive Hashing (LSH) and its applications, it is crucial to grasp the fundamentals of approximate nearest neighbor (ANN) search, the challenges of high-dimensional spaces, and the practical algorithms used to address these challenges. The rigorous course option provides a deep dive into vector similarity search techniques and ANN algorithms with practical examples, while the fast track offers a concise, intuition-driven introduction to the core concepts of vector search and ANN, suitable for a quicker but still solid background.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [📚 Vector Search & Vector Database Engineering](https://www.youtube.com/playlist?list=PLO6J-cftRL0g) — Engineering Visualized · 7 videos · 0.5h across 7 episodes

**Watch only this:** Episodes 1-5, about 20 minutes — covering embeddings, AI understanding of vectors, Euclidean and Manhattan distances, and the challenges of high-dimensional spaces, which are essential to appreciate why LSH is needed.

*Why it unblocks this paper:* This short series offers clear, visual explanations of vector search fundamentals, distance metrics, and high-dimensional space peculiarities, giving a quick but intuitive grasp of the core concepts underlying LSH and ANN.

*If you want all of it:* 0.5 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the surveyed Locality Sensitive Hashing (LSH) algorithms and their applications, start by grasping the foundational challenges of high-dimensional data such as the curse of dimensionality and the approximate nearest neighbor search problem that LSH addresses. Then, study the fundamentals of LSH itself, followed by insights into distributed hashing frameworks for scalability. Finally, conclude with advanced talks by leading researchers that explore LSH and its extensions beyond the classical methods.

### Curse of Dimensionality *(prerequisite)*
Understanding the curse of dimensionality is crucial because it explains why exact nearest neighbor search becomes computationally infeasible in high-dimensional spaces. This foundational knowledge motivates the need for approximate methods like LSH.

*How the paper uses it:* The paper addresses the challenge of high-dimensional nearest neighbor search, which is fundamentally impacted by the curse of dimensionality.

▶ [8.2 David Thompson (Part 2): Nearest Neighbors and the Curse of Dimensionality](https://www.youtube.com/watch?v=dZrGXYty3qc) — caltech · 16:38 · 8y ago

### Approximate Nearest Neighbor Search *(prerequisite)*
Approximate nearest neighbor (ANN) search is the core problem that LSH algorithms aim to solve efficiently. Understanding ANN search systems and their theoretical underpinnings provides context for why LSH is a powerful technique.

*How the paper uses it:* LSH is surveyed as a leading approach for approximate nearest neighbor search in high-dimensional spaces.

▶ [Approximate nearest neighbor search in high dimensions – Piotr Indyk – ICM2018](https://www.youtube.com/watch?v=cn15P8vgB1A) — Rio ICM2018 · 52:03 · 8y ago

### Distributed Hashing Frameworks *(prerequisite)*
Distributed hashing frameworks are important for scaling LSH algorithms to handle large datasets efficiently. This section covers architectures and frameworks that enable practical deployment of LSH at scale.

*How the paper uses it:* The paper surveys distributed LSH frameworks that improve scalability and processing speed.

▶ [Locality Sensitive Hashing Part-1](https://www.youtube.com/watch?v=u-BAogU1lvI) — SWAYAM Prabha IIT Madras Channels · 1y ago

### Locality Sensitive Hashing Fundamentals
This section covers the core technique surveyed in the paper: Locality Sensitive Hashing. It explains the principles, hash families, and algorithmic workflows that underpin LSH methods for approximate nearest neighbor search.

*How the paper uses it:* The paper provides a comprehensive review of LSH techniques categorized by hash family and detailed explanation of their workflows.

▶ [Locality-Sensitive Hashing and Beyond](https://www.youtube.com/watch?v=t_8SpFV0l7A) — Microsoft Research · 54:28 · 10y ago

### Paper Author Talk *(paper-talk search result; attribution unverified)*
Hearing from leading researchers who have contributed to the field provides advanced insights and perspectives on LSH and its extensions. These talks often discuss recent advances, theoretical guarantees, and open challenges.

*How the paper uses it:* Directly hear from experts who have shaped the understanding of LSH and its applications, complementing the survey's comprehensive review.

▶ [Beyond Locality-Sensitive Hashing](https://www.youtube.com/watch?v=a8Aaap9maB0) — Simons Institute for the Theory of Computing · 28:20 · 13y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Locality Sensitive Hashing (LSH) and its applications, start by grasping the foundational challenge of the curse of dimensionality, which explains why exact nearest neighbor search is difficult in high-dimensional data. Next, learn about approximate nearest neighbor search, the core problem LSH addresses efficiently. Finally, dive into the fundamentals of LSH itself, which is the central technique surveyed in the paper, to build intuition on how it enables scalable, approximate similarity search.

### Curse of Dimensionality *(prerequisite)*
The curse of dimensionality describes how data becomes sparse and distances lose meaning as the number of dimensions grows, making exact nearest neighbor search computationally expensive and ineffective. Understanding this challenge motivates the need for approximate methods.

*How the paper uses it:* The paper addresses the inefficiency of exact nearest neighbor search caused by the curse of dimensionality in high-dimensional spaces.

▶ [PCA 1: curse of dimensionality](https://www.youtube.com/watch?v=IbE0tbjy6JQ) — Victor Lavrenko · 10:00 · 12y ago

### Approximate Nearest Neighbor Search *(prerequisite)*
Approximate nearest neighbor search finds points close to a query point quickly but without guaranteeing the exact closest match, trading off some accuracy for much faster query times. This approach is essential for handling large, high-dimensional datasets.

*How the paper uses it:* LSH algorithms surveyed in the paper are designed to efficiently perform approximate nearest neighbor searches with theoretical accuracy guarantees.

▶ [What is Approximate Nearest Neighbor Search?](https://www.youtube.com/watch?v=72VDNPnSFUo) — Standarity · 5:34 · 2mo ago

### Locality Sensitive Hashing Fundamentals
Locality Sensitive Hashing (LSH) is a technique that hashes input items so that similar items map to the same buckets with high probability, enabling fast approximate nearest neighbor search. Understanding how LSH works and its different hash families is key to grasping the paper's survey and applications.

*How the paper uses it:* The paper provides a comprehensive review of LSH techniques, which are central to efficient approximate nearest neighbor search in high-dimensional data.

▶ [LSH.9 Locality-sensitive hashing: how it works](https://www.youtube.com/watch?v=Arni-zkqMBA) — Victor Lavrenko · 16:18 · 11y ago

## Already in your library

- [L-6.1: What is hashing with example | Hashing in data structure](https://www.youtube.com/watch?v=W5q0xgxmRd8) — also for: Linear Hashing Is Optimal (David Zuckerman)
- [LSH.8 Locality-sensitive hashing: the idea](https://www.youtube.com/watch?v=dgH0NP8Qxa8) — also for: krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement (Siavash Mirarab)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Locality Sensitive Hashing (LSH) as surveyed in the paper. The beginner project introduces the basic concept of LSH with a simple implementation and visualization. The intermediate project involves reimplementing a core LSH method and evaluating its approximate nearest neighbor search performance on a public dataset. The advanced project extends the surveyed work by exploring adaptive or data-dependent LSH variants to address limitations noted in the paper, potentially integrating machine learning techniques for hash function learning.

### Beginner — Basic Locality Sensitive Hashing for Jaccard Similarity
*Effort: a weekend, ~8 hours*

You build a simple implementation of MinHash-based LSH to approximate Jaccard similarity between sets. The project includes generating hash signatures for small synthetic sets and visualizing how similar sets collide in hash buckets, demonstrating the locality sensitivity property.

**Why it shows you understood the paper:** This project shows you understand the fundamental mechanism of LSH for set similarity, including how hash functions preserve locality and enable approximate nearest neighbor queries efficiently.

**Grounded in:** Demonstrates the paper's explanation of LSH workflows for the Jaccard hash family and their locality sensitivity properties.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic small sets generated in code to simulate high-dimensional binary data representing presence/absence features.

**Build it:**

1. Implement MinHash signature generation for sets using multiple hash functions.
2. Create an LSH scheme by grouping MinHash signatures into bands and hashing each band.
3. Generate synthetic sets with varying overlap to simulate similarity.
4. Visualize collisions of similar sets in hash buckets to show locality sensitivity.
5. Write a README explaining the LSH mechanism and how the visualization demonstrates approximate similarity.

**Ships as:** A Jupyter notebook with code and visualizations showing MinHash LSH behavior on synthetic data, plus a README explaining the approach.

**Stretch goal:** Add a simple query interface to find approximate nearest neighbors of a query set among a collection using the LSH index.

### Intermediate — Reimplementation of Basic LSH for Approximate Nearest Neighbor Search on MNIST
*Effort: 1-3 weekends*

You reimplement a core LSH algorithm for Euclidean distance (e.g., using random projection hash functions) to perform approximate nearest neighbor search on the MNIST dataset. You compare query accuracy and speed against a brute-force baseline and report recall and query time metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the core LSH method described in the paper, apply it to a real high-dimensional dataset, and evaluate the trade-offs between accuracy and efficiency as surveyed.

**Grounded in:** Reflects the paper's key results on query efficiency and accuracy trade-offs of LSH methods for Minkowski (Euclidean) distance metrics.

**Tech stack:** Python 3.11, NumPy, scikit-learn, matplotlib, Jupyter Notebook

**Data:** MNIST handwritten digits dataset (publicly available) used as a substitute for high-dimensional data to test approximate nearest neighbor search.

**Build it:**

1. Load and preprocess MNIST dataset (flatten images to vectors).
2. Implement LSH using random projection hash functions for Euclidean distance.
3. Build hash tables and index the dataset vectors.
4. Implement approximate nearest neighbor query using the LSH index.
5. Implement brute-force nearest neighbor search as baseline.
6. Evaluate and compare recall and query time between LSH and brute-force.
7. Plot and report results in a notebook or script.

**Ships as:** A repository with code to run LSH and brute-force nearest neighbor search on MNIST, including evaluation scripts and a report of accuracy and performance metrics.

**Stretch goal:** Experiment with tuning LSH parameters (number of hash tables, hash functions per table) and analyze their impact on accuracy and speed.

### Advanced — Adaptive Data-Dependent LSH with Learned Hash Functions for Streaming Data
*Effort: a few weeks*

You develop an adaptive LSH framework that learns data-dependent hash functions using machine learning techniques to improve accuracy-performance trade-offs in dynamic streaming data scenarios. The system updates hash functions as data distribution evolves and evaluates performance on a synthetic or public streaming dataset.

**Why it shows you understood the paper:** This project tackles a future direction and limitation highlighted in the paper: improving LSH with adaptive, learned hash functions and handling dynamic data distributions. It shows deep comprehension of LSH theory and practical challenges in scalable, distributed, and evolving environments.

**Grounded in:** Addresses the paper's future directions on integrating machine learning to learn data-dependent hash functions and improving distributed LSH frameworks for dynamic data.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use a synthetic streaming dataset simulating evolving high-dimensional vectors or a publicly available streaming dataset (e.g., a time-evolving text or image dataset) to demonstrate adaptability.

**Build it:**

1. Research and select a data-dependent LSH approach that learns hash functions (e.g., deep hashing or kernelized LSH).
2. Implement a prototype that trains hash functions on initial data batches.
3. Design a mechanism to update or retrain hash functions as new streaming data arrives.
4. Build an approximate nearest neighbor query interface using the adaptive hash functions.
5. Evaluate accuracy and query performance over time compared to static LSH.
6. Document challenges, parameter tuning, and results.

**Ships as:** A codebase demonstrating adaptive LSH with learned hash functions on streaming data, with evaluation plots and a detailed README discussing the approach and results.

**Stretch goal:** Extend the system to a distributed setting with load balancing and fault tolerance as surveyed in the paper.

_The paper does not provide released code or datasets; the intermediate project uses MNIST as a substitute for high-dimensional data, which is a standard benchmark but not from the paper itself._
