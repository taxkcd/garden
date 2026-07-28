---
title: "068 · Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction — Wlodek Zadrozny"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wlodek-zadrozny"
source_hash: "aa20e17fcfb6279a41498bdd7b9db00bbe660815068ea0b9d82fa5f53681b0ba"
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
