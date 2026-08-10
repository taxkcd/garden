---
title: "137 · A Framework for Building Data Structures from Communication Protocols — Alexandr Andoni"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexandr-andoni"
source_hash: "73a07156edf713e2c867ac83739b7342c6f08b2830bca77595a047caffb43665"
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

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational knowledge necessary to understand the paper's contributions connecting communication complexity protocols to data structure design for high-dimensional pattern matching. It covers discrete mathematics and probability, classical data structures and algorithms, communication complexity theory, the Partial Match problem in high dimensions, and randomized data-dependent data structures. Work through the stages in order to build the theoretical and practical background needed before reading the paper.

**The paper assumes:** discrete mathematics, probability theory, communication complexity, data structures for high-dimensional pattern matching, randomized algorithms, complexity theory, interactive proof systems
**Time to work through:** roughly 60-70 hours if you watch everything, about 35-40 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you have a solid background in discrete math, probability, and basic communication complexity; focus on stages 4-6 for specialized knowledge in communication protocols and data-dependent data structures.

### Stage 1 · Discrete Mathematics and Probability *(foundational)*
The paper relies on combinatorial arguments and probabilistic reasoning, such as product distributions and error bounds in randomized protocols, which require a solid foundation in discrete math and probability.

▶ **Course:** [Discrete Math I (Entire Course)](https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz) — Kimberly Brehm · 80 videos · 13.4h across the first 60 episodes

*What to watch:* Watch the first 20 episodes of the "Discrete Math I (Entire Course)" playlist by Kimberly Brehm, covering propositional logic, quantifiers, rules of inference, and basic set theory. These topics provide the logical and combinatorial foundations needed to understand the paper's use of product distributions and combinatorial set arguments.

*Move on when you can:* Explain and compute probabilities of events under product distributions and solve basic combinatorial problems involving sets and subsets.

### Stage 2 · Data Structures and Algorithms *(core)*
Understanding classical data structures and algorithmic techniques is essential to grasp the design and analysis of data-dependent data structures and query time-space tradeoffs discussed in the paper.

▶ **Course:** [CS301 Data Structures](https://www.youtube.com/playlist?list=PL9382BBC24F8460EE) — Virtual University of Pakistan · 45 videos · 38.7h across 45 episodes

*What to watch:* Focus on the first 24 lectures of the "CS301 Data Structures" playlist by Virtual University of Pakistan, which cover fundamental data structures like arrays, linked lists, trees, and hashing, along with their operations and complexities. This knowledge is critical to understand the data-dependent data structures constructed in the paper.

*Move on when you can:* Implement and analyze standard data structures like hash tables, trees, and understand query/update time complexities.

### Stage 3 · Communication Complexity Theory *(core)*
The framework reduces data structure design to communication protocols; understanding models like deterministic, randomized, and especially Arthur-Merlin communication protocols is critical to follow the paper’s approach.

▶ **Course:** [Communication Complexity (Dmitry Sokolov, KTH, 2020)](https://www.youtube.com/playlist?list=PLidiQIHRzpXKV3zHTydUgm1j2gwxpxFQJ) — Theoretical Computer Science School (TCSS) · 8 videos · 12.3h across 8 episodes

*What to watch:* Watch the entire "Communication Complexity (Dmitry Sokolov, KTH, 2020)" playlist, which provides a focused and comprehensive introduction to communication complexity, covering basic definitions, canonical problems like set disjointness, and randomized protocols. This playlist is well-suited to grasp the communication models used in the paper.

*Move on when you can:* Describe the communication complexity model and prove lower and upper bounds for canonical problems like set disjointness.

### Stage 4 · Randomized and Data-Dependent Data Structures *(advanced)*
The paper’s data structures are data-dependent and randomized, leveraging distributional assumptions; understanding these concepts and their contrast with data-independent structures is essential to grasp the paper’s contributions and limitations.

▶ **Course:** [Advanced Algorithms (COMPSCI 224)](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf) — Harvard University · 25 videos · 35.5h across 25 episodes

*What to watch:* Watch the first 20 lectures of the "Advanced Algorithms (COMPSCI 224)" playlist by Harvard University, which cover randomized algorithms and data structures, including analysis of expected query times and data-dependent techniques. This will help understand the paper's data-dependent data structures and their performance guarantees.

*Move on when you can:* Explain the difference between data-dependent and data-independent data structures and analyze a randomized data structure’s expected query time.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's framework connecting communication protocols to data structures for the Partial Match problem. The beginner project recreates a core communication complexity concept in code, the intermediate project implements a simplified data-dependent data structure inspired by the paper's main result, and the advanced project explores extending the framework to approximate Partial Match queries, addressing a future direction noted by the authors. Each project builds on your existing skills while introducing new concepts relevant to the paper.

### Beginner — Simulate a Sparse Set-Disjointness UAM Protocol
*Effort: a weekend, ~8 hours*

You build a Python simulation of the Unambiguous Arthur-Merlin (UAM) communication protocol for sparse set-disjointness with small error, as described in Theorem 1.4. The simulation will model the communication steps between Merlin, Arthur, and the two parties, and measure communication complexity as a function of the number of wildcards w and error ϵ.

**Why it shows you understood the paper:** This project shows you understand the core communication protocol that underpins the paper's data structure design, including how non-determinism and one-sided error reduce communication complexity independent of dimension.

**Grounded in:** Theorem 1.4: Existence of an ϵ-error UAM protocol for sparse partial match with communication Õ(w log(1/ϵ)) independent of the ambient dimension d.

**Tech stack:** Python 3.11

**Data:** Synthetic sparse sets generated randomly to simulate inputs for the set-disjointness problem; no external dataset needed.

**Build it:**

1. Read and extract the protocol description for the UAM sparse set-disjointness from the paper's relevant section.
2. Implement a Python script that simulates Merlin's advice generation and Arthur's verification steps for given sparse sets.
3. Generate synthetic sparse set pairs with varying sparsity (number of wildcards w) and simulate the communication protocol.
4. Measure and plot communication cost versus w and error ϵ to verify dimension-free complexity.
5. Write a README explaining the protocol, your implementation, and results.

**Ships as:** A Python repository with simulation code, plots showing communication cost scaling, and a README explaining the UAM protocol and its dimension-free communication complexity.

**Stretch goal:** Add a visualization of the communication transcript and simulate how increasing error tolerance ϵ affects communication cost.

### Intermediate — Implement a Data-Dependent Partial Match Data Structure
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the paper's data-dependent data structure for Partial Match with w = c log n wildcards, focusing on the core idea of simulating the UAM protocol to build a query-efficient index. You compare query times against a naive linear scan baseline on a synthetic dataset.

**Why it shows you understood the paper:** This project demonstrates your grasp of how communication protocols translate into data-dependent data structures with sublinear query time and near-linear space, reproducing the main algorithmic contribution in a manageable setting.

**Grounded in:** Theorem 1.2: Data structure for PM_{n,d,w} with w ≤ c log n achieving space O(n^{1.1}) and expected query time n^{1 - 1/(Θ(c log c))}.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic high-dimensional binary vectors with controlled wildcards, generated to simulate Partial Match queries; no external dataset needed.

**Build it:**

1. Study the paper's description of the data-dependent data structure construction via simulating the UAM protocol.
2. Generate a synthetic dataset of n binary vectors with dimension d and create queries with w wildcards.
3. Implement the data structure construction that partitions data based on Merlin's advice simulation and supports queries with wildcards.
4. Implement a naive linear scan baseline for Partial Match queries.
5. Benchmark query times of your data structure versus the baseline for varying n and w.
6. Document your implementation, benchmarks, and analysis in a README.

**Ships as:** A Python repository with the data structure and baseline implementations, benchmark scripts, plots comparing query times, and a README explaining the approach and results.

**Stretch goal:** Incorporate a simple product distribution assumption in data generation to observe its effect on query performance.

### Advanced — Extend the Framework to Approximate Partial Match Queries
*Effort: 3-4 weeks*

You design and implement an extension of the paper's framework to support approximate Partial Match queries, exploring how to adapt the UAM communication protocol to allow approximate matches with controlled error. You evaluate the trade-offs in query time and space on synthetic datasets and discuss challenges encountered.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, showing deep engagement with the framework's limitations and the challenges of designing efficient communication protocols for approximate similarity search.

**Grounded in:** Future direction: Extending the framework to approximate versions of Partial Match or other similarity search problems and designing efficient UAM protocols for such approximate settings.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic high-dimensional binary vectors with controlled noise to simulate approximate Partial Match queries; no external dataset needed.

**Build it:**

1. Review the paper's framework and limitations regarding exact Partial Match and UAM protocols.
2. Research approximate Partial Match problem definitions and existing approximate similarity search techniques.
3. Design a modified UAM protocol that tolerates approximate matches with bounded error.
4. Implement a prototype data-dependent data structure simulating this approximate UAM protocol.
5. Generate synthetic datasets with noise to test approximate queries.
6. Benchmark query time, space, and accuracy trade-offs compared to exact data structure.
7. Write a detailed report discussing design decisions, challenges, and potential for further research.

**Ships as:** A code repository with the approximate data structure prototype, benchmark scripts, and a comprehensive README or Jupyter notebook documenting the extension, experiments, and insights.

**Stretch goal:** Attempt to formalize theoretical communication bounds for the approximate UAM protocol and compare with exact bounds.
