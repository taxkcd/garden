---
title: "068 · Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction — Wlodek Zadrozny"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wlodek-zadrozny"
source_hash: "d03df5cf21f1966550e3a34f04a6c5d54ab56b94a624cc4c95937ba716c36389"
sequence: 68
generator: "outreach-garden: managed"
---

# 068 · Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction

## At a glance

- **Professor:** Wlodek Zadrozny
- **Institution:** UNC - Charlotte
- **Paper:** [Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction](https://arxiv.org/abs/2601.17188)
- **Authors:** Swapn Shah, Wlodek Zadrozny
- **Year:** 2026

## Paper overview

This paper empirically validates the Tensor Logic framework, which unifies symbolic logical reasoning and neural network learning by showing that Datalog rules and tensor operations are mathematically equivalent. Through three experiments, the authors demonstrate that logical inference can be implemented as tensor contractions, learned relation matrices compose correctly for multi-hop reasoning, and that this approach scales to large knowledge graphs for link prediction and compositional reasoning.

### Why it matters

**Research problem:** How to unify symbolic reasoning systems, which are interpretable but lack scalability, with neural networks, which learn from data but lack transparency, under a single mathematical framework.

**Why it matters:** Symbolic AI and neural networks have complementary strengths but remain largely separate, limiting AI's ability to perform reliable, interpretable, and scalable reasoning. A unified framework could leverage the advantages of both paradigms, improving AI's reasoning and learning capabilities.

**Key contributions:**

- Empirical validation that recursive Datalog rules can be exactly implemented as iterative tensor contractions with Boolean tensors.
- Demonstration that learned relation transformation matrices compose correctly for multi-hop inference in embedding space.
- Scaling the Tensor Logic superposition construction to a large knowledge graph (FB15k-237) achieving competitive link prediction and compositional reasoning performance.
- Providing the first open-source implementation of Tensor Logic with reproducible experimental traces.
- Formal verification of correctness properties (containment, closure, acyclicity) in symbolic reasoning experiment.

## About the professor

**Wlodek Zadrozny** — Associate Professor, Department of Management, UNC - Charlotte.

Research interests: text mining, quality control, statistics, asymmetric distributions

### Research links

- [Faculty/profile page](https://cci.charlotte.edu/directory/wlodek-zadrozny/)
- [Identity evidence](https://sites.google.com/a/uncc.edu/wzadrozny)
- [Identity evidence](https://sds.charlotte.edu/directory/wlodek-zadrozny/)
- [Identity evidence](https://scholar.google.com/citations?user=PwdKImsAAAAJ&hl=en)
- [Professor website](https://www.researchgate.net/profile/Triss_Ashton)
- [Resolved homepage](https://www.researchgate.net/profile/Triss-Ashton)
- [Lab website](https://www.researchgate.net/lab/Triss-Ashton-Lab)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction,' start by grounding yourself in the foundational symbolic reasoning formalism of Datalog and the mathematical notation of Einstein summation, both critical for grasping the paper's theoretical framework. Then, explore knowledge graph embeddings to appreciate the neural reasoning and multi-hop inference aspects. Finally, focus on the core concept of Tensor Logic itself, prioritizing the authors' own presentation to directly connect with their unified symbolic-neural reasoning framework.

### Datalog logic programming *(prerequisite)*
Datalog is the fundamental symbolic reasoning language underlying the paper's logical rules. Understanding Datalog's declarative logic programming paradigm and its semantics is essential to appreciate how the paper translates these rules into tensor operations. The selected talk is a university-level seminar that rigorously covers Datalog's theory and applications, suitable for advanced readers.

*How the paper uses it:* The paper builds on Datalog-style reasoning as the symbolic logic fragment implemented via tensor contractions.

▶ [Logic and Datalog](https://www.youtube.com/watch?v=AK2zl8HeyS0) — plast-lab · 10 years ago

### Einstein summation notation *(prerequisite)*
Einstein summation notation is the concise mathematical language used to express tensor contractions, which the paper equates with logical inference. A thorough understanding of this notation is necessary to follow the paper's formal equivalence between Datalog rules and tensor operations. The chosen lecture is a university-level presentation that provides detailed examples and applications, ensuring a rigorous grasp of the concept.

*How the paper uses it:* The paper uses Einstein summation notation to implement logical inference as tensor contractions.

▶ [Linear Algebra: Lecture 9/33 - Examples and Applications of Einstein's Summation Notation](https://www.youtube.com/watch?v=W49gnc7LETI) — Divergence is Divergence · 56:31 · 3 years ago

### Knowledge graph embeddings *(prerequisite)*
Knowledge graph embeddings are critical for the neural reasoning and multi-hop inference components of the paper. Understanding how embeddings represent relational data and enable link prediction provides context for the paper's experiments on large-scale knowledge graphs. The selected talk is from a reputable conference and offers an advanced treatment of embedding techniques in knowledge graphs.

*How the paper uses it:* The paper demonstrates learned relation matrices composing correctly for multi-hop inference in embedding space.

▶ [Knowledge Graph Completion using Embeddings KGC 2023](https://www.youtube.com/watch?v=PZua6Rwtp8I) — The Knowledge Graph Conference · 11 months ago

### Tensor Logic Shah talk *(the paper's own talk)*
This section covers the core concept of the paper: the Tensor Logic framework unifying symbolic and neural reasoning. The authors' own talk provides the most direct and authoritative exposition of their framework, experiments, and results, making it indispensable for a deep understanding of the paper's contributions.

*How the paper uses it:* This is the authors' presentation of their unified symbolic-neural reasoning framework, directly related to the paper.

▶ [Tensor Logic: The Language of AI (Oct 2025)](https://www.youtube.com/watch?v=Stirdy-PMXY) — AI Paper Slop · 19:01 · 9 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Implementing Tensor Logic,' start by learning the foundational symbolic reasoning formalism of Datalog, which underpins the logical rules unified in the framework. Next, grasp knowledge graph embeddings to see how neural representations enable reasoning over data. Then, learn Einstein summation notation, the mathematical shorthand for tensor operations used in the paper. Finally, build intuition on tensor contraction reasoning, the core mathematical operation equating logical inference with tensor algebra, and conclude with the authors' own presentation of Tensor Logic to see the unified framework in action.

### Datalog logic programming *(prerequisite)*
Datalog is a simple, declarative logic programming language used for expressing symbolic rules and queries, especially in databases and knowledge graphs. Understanding Datalog helps you grasp the symbolic reasoning side of the paper, as the authors show how Datalog rules correspond to tensor operations.

*How the paper uses it:* The paper's symbolic reasoning experiments are based on Datalog rules, which are implemented as tensor contractions.

▶ [Introduction to Datalog](https://www.youtube.com/watch?v=jPt4MiHFGy8) — Knowledge-Based Systems, TU Dresden · 5 years ago

### Knowledge graph embeddings *(prerequisite)*
Knowledge graph embeddings represent entities and relations in continuous vector spaces, enabling neural networks to perform reasoning and inference over graph data. This concept bridges symbolic knowledge with neural learning, crucial for understanding the neural reasoning part of the paper.

*How the paper uses it:* The paper uses learned relation matrices in embedding space to perform multi-hop reasoning and link prediction.

▶ [Graph Embeddings: 5 Ways Your AI Can Learn From Your Connected Data - Nicolas Rouyer](https://www.youtube.com/watch?v=sUn_zu2RyFg) — Open Data Science and AI Conference · 3 years ago

### Einstein summation notation *(prerequisite)*
Einstein summation notation is a concise mathematical shorthand for expressing sums over tensor indices, widely used in physics and machine learning. Learning this notation is essential to understand how the paper expresses logical inference as tensor contractions.

*How the paper uses it:* The paper implements Datalog logical rules as Einstein summation operations over tensors.

▶ [Einstein Convention (Einstein Notation) -- Explained](https://www.youtube.com/watch?v=3m_ko4kqVq8) — Professor Ricardo Explains · 4:04 · 5 years ago

### Tensor contraction reasoning
Tensor contraction is the operation of summing over shared indices of tensors, generalizing matrix multiplication. It is the core mathematical operation that the paper equates with logical inference, enabling the unification of symbolic and neural reasoning.

*How the paper uses it:* The paper's main claim is that logical inference can be exactly implemented as iterative tensor contractions.

▶ [Tensor Contraction Explained: The Math Behind Deep Learning & AI (2026)](https://www.youtube.com/watch?v=ljtcqTumLyk) — Micro Learning · 4 weeks ago

### Tensor Logic Shah talk *(the paper's own talk)*
This is the authors' own presentation of the Tensor Logic framework, explaining how symbolic logical reasoning and neural network learning unify via tensor contraction. Watching this talk consolidates understanding of the paper's contributions and experiments.

*How the paper uses it:* This talk directly presents the Tensor Logic framework and the empirical validation experiments from the paper.

▶ [Tensor Logic: The Language of AI (Oct 2025)](https://www.youtube.com/watch?v=Stirdy-PMXY) — AI Paper Slop · 19:01 · 9 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and complexity to demonstrate your understanding of the Tensor Logic paper. The beginner project reproduces the symbolic transitive closure experiment using Boolean tensor contractions, the intermediate project runs and extends the authors' Tensor Logic implementation on the FB15k-237 knowledge graph for link prediction, and the advanced project explores extending Tensor Logic to handle negation or aggregation in symbolic reasoning, addressing a key limitation noted by the authors. Each project builds on your existing software engineering and ML skills while introducing new concepts relevant to the paper.

### Beginner — Transitive Closure with Boolean Tensor Contractions
*Effort: a weekend, ~8 hours*

You build a Python script that computes the transitive closure of a small directed graph using Boolean adjacency matrices and iterative tensor contractions with Einstein summation notation, replicating the core mechanism from Experiment 1 in the paper. You implement the Heaviside step function thresholding to update the closure matrix until convergence.

**Why it shows you understood the paper:** This project shows you understand the equivalence between recursive Datalog rules and tensor operations, a foundational contribution of the paper, by faithfully reproducing the symbolic reasoning experiment on a manageable dataset.

**Grounded in:** Empirical validation that recursive Datalog rules can be exactly implemented as iterative tensor contractions with Boolean tensors.

**Tech stack:** Python 3.11, NumPy

**Data:** Use the biblical genealogy dataset from https://github.com/BradyStephenson/bible-data as in the paper's Experiment 1.

**Build it:**

1. Clone and inspect the biblical genealogy dataset to extract parent-child relationships as a Boolean adjacency matrix.
2. Implement a Python function that performs iterative tensor contractions using np.einsum('xy,yz->xz', A, P) to compute transitive closure.
3. Apply a Heaviside step function threshold to update the closure matrix after each iteration.
4. Run the iteration until convergence and verify the number of ancestor relationships matches the paper's reported 33,945.
5. Document the code and results in a README explaining the tensor logic equivalence.

**Verified links from the paper:**

- <https://github.com/BradyStephenson/bible-data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a Python script computing transitive closure via tensor contractions on biblical genealogy data, with README explaining the method and results.

**Stretch goal:** Add visualization of the graph and its transitive closure using a network graph library like NetworkX and matplotlib.

### Intermediate — Link Prediction with Tensor Logic on FB15k-237
*Effort: 2 weekends, ~20 hours*

You run and extend the authors' open-source Tensor Logic implementation to perform link prediction on the FB15k-237 knowledge graph dataset. You reproduce the mean reciprocal rank (MRR) metric reported in Experiment 3 and implement a simple baseline (e.g., DistMult or TransE from a known library) for comparison.

**Why it shows you understood the paper:** This project demonstrates you can apply the core Tensor Logic superposition construction to a large-scale knowledge graph and understand how learned relation matrices compose for multi-hop reasoning, validating the paper's scaling claims.

**Grounded in:** Scaling the Tensor Logic superposition construction to a large knowledge graph (FB15k-237) achieving competitive link prediction and compositional reasoning performance.

**Tech stack:** Python 3.11, PyTorch, NumPy

**Data:** Use FB15k-237 dataset from https://github.com/DeepGraphLearning/KnowledgeGraphEmbedding as in the paper's Experiment 3.

**Build it:**

1. Clone the authors' Tensor Logic implementation from https://github.com/sshah100-clt/tensor_logic_implementation.
2. Set up the environment and download the FB15k-237 dataset.
3. Run the Tensor Logic link prediction training and evaluation pipeline to reproduce the reported MRR scores.
4. Implement a simple baseline link prediction model (e.g., DistMult) using a standard library and evaluate on the same dataset.
5. Compare the Tensor Logic results with the baseline and document findings.
6. Write a detailed README explaining the Tensor Logic method, baseline, and evaluation metrics.

**Verified links from the paper:**

- <https://github.com/sshah100-clt/tensor_logic_implementation> — released by the paper's authors
- <https://github.com/DeepGraphLearning/KnowledgeGraphEmbedding> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with runnable code reproducing Tensor Logic link prediction on FB15k-237, baseline comparison, and analysis in README.

**Stretch goal:** Experiment with modifying the learned relation matrices to test compositional reasoning on multi-hop queries beyond two hops.

### Advanced — Extending Tensor Logic for Negation and Aggregation in Symbolic Reasoning
*Effort: 3+ weeks*

You design and implement an extension of the Tensor Logic framework to handle symbolic reasoning tasks involving negation and aggregation, addressing a key limitation noted in the paper. You prototype tensor operations or approximations that represent negation (e.g., complement of Boolean tensors) and aggregation (e.g., sum or max pooling) within the tensor contraction framework. You evaluate your extension on synthetic or small real datasets to demonstrate correctness.

**Why it shows you understood the paper:** This project shows you deeply understand the paper's mathematical framework and limitations, and can creatively extend it toward richer symbolic reasoning tasks relevant to natural language understanding, potentially opening new research directions.

**Grounded in:** Current experiments focus on two-hop chains; more complex queries involving branching, negation, or aggregation remain untested.

**Tech stack:** Python 3.11, NumPy, PyTorch

**Data:** Use synthetic datasets simulating small knowledge graphs with negation and aggregation queries, or adapt biblical genealogy or geographic data with added negation/aggregation tasks.

**Build it:**

1. Review the Tensor Logic framework and its Boolean tensor contraction implementation.
2. Design tensor operations to represent negation (e.g., Boolean complement) and aggregation (e.g., sum, max) compatible with tensor contractions.
3. Implement these operations in Python using NumPy or PyTorch.
4. Create synthetic datasets or modify existing datasets to include negation and aggregation queries.
5. Evaluate the extended Tensor Logic implementation on these queries, verifying correctness and convergence.
6. Document the design decisions, implementation details, and evaluation results in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/sshah100-clt/tensor_logic_implementation> — released by the paper's authors

**Ships as:** A GitHub repo with extended Tensor Logic code supporting negation and aggregation, example datasets, and detailed documentation of methods and results.

**Stretch goal:** Explore integrating differentiable approximations of negation to enable gradient-based learning within Tensor Logic.
