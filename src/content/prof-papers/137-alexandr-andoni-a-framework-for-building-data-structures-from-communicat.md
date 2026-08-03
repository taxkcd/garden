---
title: "137 · A Framework for Building Data Structures from Communication Protocols — Alexandr Andoni"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexandr-andoni"
source_hash: "744168c8bface0a84b4d5f6d0537d9a6bee81ac1e03b96ec5eb31bcb965a0510"
sequence: 137
generator: "outreach-garden: managed"
---

# 137 · A Framework for Building Data Structures from Communication Protocols

## At a glance

- **Professor:** Alexandr Andoni
- **Institution:** Columbia University
- **Paper:** [A Framework for Building Data Structures from Communication Protocols](https://arxiv.org/pdf/2506.20761)
- **Authors:** Alexandr Andoni, Shunhua Jiang, Omri Weinstein
- **Year:** 2025

## Paper overview

This paper introduces a novel framework that connects communication complexity protocols to the design of efficient data structures for high-dimensional pattern-matching problems, particularly focusing on the Partial Match problem with wildcards. The authors develop new communication protocols with sublinear complexity under product distributions and leverage these to build data-dependent data structures with improved query times and near-linear space. They also provide matching lower bounds in restricted models, clarifying the limits of such data structures.

### Why it matters

**Research problem:** Designing efficient data structures for high-dimensional pattern-matching problems, especially the Partial Match problem with wildcards, which is challenging due to the curse of dimensionality and the complexity of exact search in high dimensions.

**Why it matters:** Partial Match and related problems are fundamental in information retrieval, databases, routing, and packet classification. Efficient data structures for these problems enable faster query processing in large-scale, high-dimensional datasets, impacting search engines, spatial databases, and network systems. Overcoming the curse of dimensionality is crucial for practical scalability.

**Key contributions:**

- A new framework connecting distributional communication protocols to data structure design for pattern-matching problems.
- A novel UAM communication protocol for sparse set-disjointness with exponentially small error and dimension-free complexity.
- A data-dependent data structure for Partial Match with w = c log n wildcards achieving sublinear query time n^{1 - 1/(Θ(c log c))} and near-linear space O(n^{1.1}).
- A matching lower bound in the List-of-Points model showing query time ≥ Ω(n^{1 - 1/c}) for polynomial space data structures, nearly matching the upper bound.
- Insights into the limitations of data-independent data structures and the power of data-dependent approaches.

## About the professor

**Alexandr Andoni** — Associate Professor of Computer Science, Department of Computer Science, Columbia University.

Research interests: sublinear algorithms (streaming and property testing), high-dimensional computational geometry, metric embeddings, and machine learning

### Research links

- [Faculty/profile page](http://datascience.columbia.edu/alex-andoni)
- [Professor website](http://www.cs.columbia.edu/~andoni/)
- [Lab website](https://cail.columbia.edu/)
- [Link to full publications](http://www.cs.columbia.edu/~andoni/papers/index.html)
- [Locality-Sensitive Hashing page](http://www.cs.columbia.edu/~andoni/LSH)
- [FALCONN software](https://falconn-lib.org/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'A Framework for Building Data Structures from Communication Protocols,' start by grounding yourself in the foundational concepts of communication complexity under product distributions and Unambiguous Arthur-Merlin (UAM) protocols, as these are central to the authors' novel framework. Then, study the Partial Match problem with wildcards, the core computational challenge addressed. Finally, engage with the authors' own talk to gain direct insight into their framework, results, and implications.

### Communication complexity under product distributions *(prerequisite)*
This section covers the communication complexity model under product distributions, a key theoretical foundation for the paper's framework. Understanding this will clarify how the authors reduce data structure design to communication protocols and the significance of distributional assumptions in achieving sublinear complexity.

*How the paper uses it:* The paper's framework reduces data structure design to communication protocols under product distributions.

▶ [Tim Roughgarden - Communication Complexity and ...](https://www.youtube.com/watch?v=5aPlX8KGhqE) — Israel Institute for Advanced Studies · 1:29:27

### Unambiguous Arthur-Merlin protocols *(prerequisite)*
UAM protocols are a specialized interactive proof model that the authors leverage to achieve dimension-free communication complexity. This section will provide the theoretical background on UAM protocols, their properties, and their role in communication complexity.

*How the paper uses it:* The authors design a novel UAM communication protocol for sparse set-disjointness with dimension-free complexity.

▶ [Streaming Interactive Proofs and Arthur-Merlin Communication](https://www.youtube.com/watch?v=JJ_xDqXutjw) — Simons Institute for the Theory of Computing · 11 years ago

### Paper authors talk *(the paper's own talk)*
This talk by Alexandr Andoni provides direct insight from one of the paper's authors on the novel framework, communication protocols, and data structures developed. It offers an advanced and detailed presentation of the paper's contributions and results.

*How the paper uses it:* Direct insight from the authors on their novel framework and results.

▶ [TCS+ talk: Alexandr Andoni](https://www.youtube.com/watch?v=8_OWKux3iW4) — TCS+ · 1:11:12

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's novel framework connecting communication protocols to data structures for high-dimensional pattern matching. We start with the basics of the Partial Match problem with wildcards, then build intuition on communication complexity under product distributions and Unambiguous Arthur-Merlin protocols, which are key to the paper's approach. Finally, we explore data-dependent data structures to see how these theoretical insights translate into practical algorithmic improvements.

### Partial Match problem with wildcards *(prerequisite)*
Learn what the Partial Match problem is: given a query pattern with some positions as wildcards, find data points matching the pattern. This problem is fundamental in databases and search, and wildcards add complexity by allowing flexible matching.

*How the paper uses it:* The paper focuses on designing efficient data structures to solve the Partial Match problem with wildcards.

▶ [Wildcard Pattern Matching | GeeksForGeeks | Problem of the ...](https://www.youtube.com/watch?v=KO-HcuZDGak) — Mathematics · 15:24

### Communication complexity under product distributions *(prerequisite)*
Understand the communication complexity model where two parties compute a function with minimal communication, especially under product distributions where inputs are independent. This sets the stage for the paper's framework linking communication protocols to data structures.

*How the paper uses it:* The framework reduces data structure design to constructing efficient communication protocols under product distributions.

▶ [Tim Roughgarden - Communication Complexity and ...](https://www.youtube.com/watch?v=5aPlX8KGhqE) — Israel Institute for Advanced Studies · 1:29:27

### Unambiguous Arthur-Merlin protocols *(prerequisite)*
Explore the Arthur-Merlin interactive proof model, focusing on unambiguous protocols where the prover's advice leads to a unique accepting path. This model allows dimension-free communication complexity crucial for the paper's new protocols.

*How the paper uses it:* The paper designs a novel UAM communication protocol with dimension-free complexity for sparse set-disjointness.

▶ [Arthur–Merlin protocol](https://www.youtube.com/watch?v=i4qRlIpsXsQ) — WikiAudio · 10 years ago

### Data-dependent data structures for high-dimensional search
Learn how data-dependent data structures adapt their organization based on the dataset distribution to overcome the curse of dimensionality, enabling faster queries in high-dimensional spaces.

*How the paper uses it:* The paper's framework yields data-dependent data structures with improved query times and near-linear space.

▶ [CCMB Seminar 11/10 /2021 Robert M Haralick, PhD](https://www.youtube.com/watch?v=uOkZEZu9aXU) — University of Michigan Computational Medicine and Bioinformatics · 1:10:10
