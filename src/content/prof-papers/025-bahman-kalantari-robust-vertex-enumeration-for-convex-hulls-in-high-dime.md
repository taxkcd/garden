---
title: "025 · Robust Vertex Enumeration for Convex Hulls in High Dimensions — Bahman Kalantari"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kalantar"
source_hash: "a9601955981616948f6384399ce7de0ad5dbdf6e12990f66ccba61b43a20b200"
sequence: 25
generator: "outreach-garden: managed"
---

# 025 · Robust Vertex Enumeration for Convex Hulls in High Dimensions

## At a glance

- **Professor:** Bahman Kalantari
- **Institution:** Rutgers University
- **Paper:** [Robust Vertex Enumeration for Convex Hulls in High Dimensions](https://doi.org/10.1007/s10479-020-03557-0)
- **Authors:** Pranjal Awasthi, Bahman Kalantari, Yikai Zhang
- **Year:** 2018

## Paper overview

This paper presents the All Vertex Triangle Algorithm (AVTA), a robust and efficient method to compute all vertices of the convex hull of a set of points in high-dimensional Euclidean space. AVTA can handle noisy data and approximations, and it improves upon existing algorithms in computational geometry and machine learning tasks such as topic modeling and non-negative matrix factorization.

### Why it matters

**Research problem:** Efficiently computing the vertices of the convex hull of a finite set of points in high-dimensional spaces, especially under data perturbations, and applying this to problems in computational geometry and machine learning.

**Why it matters:** Convex hull vertex enumeration is fundamental in computational geometry, linear programming, and machine learning. Many algorithms for linear programming, topic modeling, and non-negative matrix factorization rely on efficiently identifying these vertices. Existing algorithms often struggle with high dimensions or noisy data, limiting their practical use.

**Key contributions:**

- Introduction of AVTA, a robust and efficient algorithm for vertex enumeration of convex hulls in high dimensions.
- Theoretical complexity bounds for AVTA under various assumptions including robustness and perturbations.
- Extension of AVTA to handle perturbed input data with guarantees on vertex recovery.
- Application of AVTA to machine learning problems such as topic modeling and non-negative matrix factorization, demonstrating improved robustness and accuracy.
- Empirical evaluation showing AVTA's efficiency and robustness compared to state-of-the-art algorithms.

## About the professor

**Bahman Kalantari** — Professor, Rutgers University.

### Research links

- [Faculty/profile page](https://www.cs.rutgers.edu/people/professors/details/bahman-kalantari)
- [Identity evidence](http://www.cs.rutgers.edu/~kalantar)
- [Professor website](http://www.cs.rutgers.edu/~kalantar/)

## Learning path

To deeply understand the paper on Robust Vertex Enumeration for Convex Hulls in High Dimensions, start with foundational concepts such as the Johnson-Lindenstrauss lemma for dimensionality reduction and robust convex optimization techniques to handle noisy data. Next, review the Triangle Algorithm, which AVTA extends, to grasp the underlying geometric algorithmic framework. Finally, focus on the core concept of convex hull vertex enumeration and the authors' own presentation of AVTA to connect theory with their novel contributions and applications.

## Recommended videos (in order)

### Johnson Lindenstrauss lemma lecture *(prerequisite)*
The Johnson-Lindenstrauss lemma is a fundamental dimensionality reduction technique that preserves distances approximately, which the AVTA algorithm leverages to reduce high-dimensional data while maintaining vertex structure. Understanding this lemma is crucial to appreciate how AVTA achieves efficiency in high dimensions.

*How the paper uses it:* AVTA uses Johnson-Lindenstrauss random projections to reduce dimensionality while preserving vertex structure.

▶ [MIT 6.854 Spring 2016 Lecture 5: Johnson Lindenstrauss ...](https://www.youtube.com/watch?v=Tw0J5Xv6xQw) — Andrew Xia · 1:17:54

### Robust convex optimization talk *(prerequisite)*
Robust convex optimization addresses optimization problems under data uncertainty and noise, which is essential background for understanding AVTA's robustness guarantees under perturbed input data. These talks provide theoretical and practical insights into handling uncertainty in convex optimization.

*How the paper uses it:* AVTA handles noisy and perturbed data, requiring understanding of robustness in convex optimization.

▶ [Robust Optimization and Generalization](https://www.youtube.com/watch?v=oAPSAwGKWOc) — Simons Institute for the Theory of Computing · 1:17:20

### Convex hull vertex enumeration lecture
Convex hull vertex enumeration is the central problem addressed by AVTA. These lectures provide rigorous treatments of vertex enumeration algorithms and convex hull properties, which are key to understanding the problem context and challenges AVTA addresses.

*How the paper uses it:* Central problem addressed by AVTA, understanding vertex enumeration algorithms is key.

▶ [IE513 20110221 LECTURE10nn   Convex hulls, extreme points, vertices](https://www.youtube.com/watch?v=wWZc2vr8AkM) — CosmoLearning · 46:23 · 11y ago

### Authors AVTA talk *(the paper's own talk)*
The authors' own talk on AVTA is the most direct and authoritative source for their algorithmic contributions, theoretical results, and applications. Watching this talk will provide detailed insights into AVTA's design, robustness, and empirical performance.

*How the paper uses it:* Most direct source for the authors' presentation on AVTA and their contributions.

▶ [Solving Low-Dimensional Optimization Problems via Zonotope Vertex Enumeration](https://www.youtube.com/watch?v=NH_CpMYe3tw) — Purdue NLA · 48:59 · 9y ago
