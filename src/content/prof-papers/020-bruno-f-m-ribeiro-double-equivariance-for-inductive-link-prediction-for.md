---
title: "020 · Double Equivariance for Inductive Link Prediction for Both New Nodes and New Relation Types — Bruno F. M. Ribeiro"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ribeirob"
source_hash: "566a896015d657989eff4c64daf28cd85622687ec86c38bbc4c00e01160f467b"
sequence: 20
generator: "outreach-garden: managed"
---

# 020 · Double Equivariance for Inductive Link Prediction for Both New Nodes and New Relation Types

## At a glance

- **Professor:** Bruno F. M. Ribeiro
- **Institution:** Purdue University
- **Paper:** [Double Equivariance for Inductive Link Prediction for Both New Nodes and New Relation Types](https://arxiv.org/pdf/2302.01313)
- **Authors:** Jincheng Zhou, Yucheng Zhang, Jianfei Gao, Yangze Zhou, Bruno Ribeiro
- **Year:** 2025

## Paper overview

This paper addresses the challenge of fully inductive link prediction in knowledge graphs, where models must predict links involving both unseen nodes and unseen relation types. The authors introduce a theoretical framework called double permutation-equivariant representations, which underpins existing models like InGram and Ultra. They propose enhancements and new frameworks to improve performance and robustness, and identify limitations such as negative transfer and poor data scaling when learning across multiple domains.

### Why it matters

**Research problem:** How to design models capable of zero-shot generalization for fully inductive link prediction in knowledge graphs, i.e., predicting missing links involving both new nodes and new relation types without relying on additional context or overlapping entities.

**Why it matters:** Knowledge graphs are domain-specific and vary widely; models that can generalize across domains without retraining or extra context are crucial for scalable, robust knowledge graph reasoning and foundation models that can adapt to diverse applications.

**Key contributions:**

- Formal definition of double permutation-equivariant structural representations and distributionally double equivariant positional embeddings.
- Proof that Ultra produces double equivariant structural representations and InGram produces distributionally double equivariant positional embeddings.
- Proposal of DEq-InGram, an enhanced version of InGram that improves robustness and stability without retraining.
- Introduction of ISDEA+, a framework to transform homogeneous GNNs into double equivariant models suitable for knowledge graphs.
- Empirical evaluation on new datasets (PediaTypes and WikiTopics) demonstrating improved performance and highlighting limitations like negative transfer and poor data scaling.

## About the professor

**Bruno F. M. Ribeiro** — Department of Computer Science, Purdue University.

Research interests: mathematical challenges and potential solutions for harnessing relational data in foundation models

### Research links

- [Faculty/profile page](https://www.cs.purdue.edu/homes/ribeirob)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=KIEleCsAAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on double equivariance for inductive link prediction, start with foundational concepts in permutation group theory and graph neural network equivariance, which underpin the theoretical framework. Then, study inductive link prediction in knowledge graphs to grasp the task context. Finally, focus on the core concept of double permutation-equivariant representations and the authors' own talk to directly learn about their novel contributions and results.

### Permutation group theory in machine learning *(prerequisite)*
Permutation group theory provides the mathematical foundation for understanding permutation equivariance, a key property exploited in the paper's double equivariant models. This section covers the basics of permutation groups, symmetric groups, and their role in machine learning models dealing with structured data.

*How the paper uses it:* Permutation groups underlie the double permutation-equivariant representations central to the paper's theoretical framework.

▶ [Jean Phillippe Vert: Learning on the symmetric group](https://www.youtube.com/watch?v=Aw8EIK3o6Zw) — Centre International de Rencontres Mathématiques · 36:10 · 8 years ago

### Graph neural networks equivariance *(prerequisite)*
Equivariance in graph neural networks is a fundamental property that ensures model outputs transform predictably under permutations of input nodes. Understanding GNN equivariance is essential to grasp how the paper extends these ideas to double equivariance involving both nodes and relation types.

*How the paper uses it:* The paper builds on GNN equivariance to define double permutation-equivariant representations for knowledge graphs.

▶ [Equivariant Neural Networks | Part 1/3 - Introduction](https://www.youtube.com/watch?v=2bP_KuBrXSc) — DeepFindr · 18:51 · 3 years ago

### Inductive link prediction knowledge graphs *(prerequisite)*
Inductive link prediction involves predicting links involving unseen nodes or relations without retraining, which is the core task addressed by the paper. This section introduces the problem setting and challenges in knowledge graph link prediction.

*How the paper uses it:* The paper proposes models for fully inductive link prediction, predicting links with new nodes and relation types.

▶ [InGram: Inductive Knowledge Graph Embedding via Relation Graphs (ICML 2023)](https://www.youtube.com/watch?v=hDi1sdDlMZ8) — BDI Lab · 3 years ago

### Double permutation-equivariant representations
This concept is the paper's central theoretical contribution, defining representations invariant to permutations of both nodes and relation types. Understanding this concept is crucial to grasp the paper's novel framework and its improvements over existing models.

*How the paper uses it:* The paper introduces and formalizes double permutation-equivariant representations as necessary for fully inductive link prediction.

▶ [Leveraging permutation group symmetries for designing equivariant neural networks - Haggai Maron](https://www.youtube.com/watch?v=k3E3XyMtQcA) — Workshop on Equivariance and Data Augmentation · 5 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides a direct and detailed presentation of their novel framework, theoretical insights, and empirical results. It is the most authoritative source to understand their contributions and the context of their work.

*How the paper uses it:* This talk is the authors' presentation of their work on double equivariance for fully inductive link prediction.

▶ [Cai Zhou: Coevolutionary Continuous Discrete DLMs, Semantic Scale Prediction via Hierarchical DLMs](https://www.youtube.com/watch?v=QGdXR9MIHEQ) — Formal Languages and Neural Networks Seminar · 46:17 · 5 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of graph neural networks (GNNs) and their key property of equivariance, which is essential for modeling relational data. Next, build a mathematical foundation in permutation group theory to grasp how permutations affect graph structures and model invariances. Then, explore the concept of double permutation-equivariant representations, the core theoretical innovation enabling fully inductive link prediction on unseen nodes and relations. Finally, study the specific task of inductive link prediction in knowledge graphs to see how these concepts apply in practice.

### Graph neural networks equivariance *(prerequisite)*
Graph neural networks learn by passing messages between nodes and are designed to respect the structure of graphs. Equivariance means that if you permute the nodes of a graph, the output of the GNN changes in a predictable way, preserving the graph's relational information. Understanding this property is key to grasping how GNNs can generalize across different graph structures.

*How the paper uses it:* The paper builds on the equivariance property of GNNs to design models that are invariant to permutations of both nodes and relation types.

▶ [Equivariant Neural Networks | Part 1/3 - Introduction](https://www.youtube.com/watch?v=2bP_KuBrXSc) — DeepFindr · 18:51 · 3 years ago

### Permutation group theory in machine learning *(prerequisite)*
Permutation groups formalize how elements can be rearranged and combined, providing the mathematical language to describe symmetries and invariances in data. In machine learning, understanding permutation groups helps in designing models that respect these symmetries, such as equivariant neural networks.

*How the paper uses it:* The paper uses permutation group theory to define double permutation-equivariant representations that are invariant to permutations of nodes and relations.

▶ [Permutation Groups and Symmetric Groups | Abstract Algebra](https://www.youtube.com/watch?v=NwqCi63p2ik) — Wrath of Math · 18:24 · 3 years ago

### Double permutation-equivariant representations
Double permutation-equivariant representations extend the idea of equivariance to simultaneously handle permutations of two different sets, such as nodes and relation types in a knowledge graph. This ensures the model's outputs remain consistent regardless of how these elements are reordered, enabling fully inductive link prediction on unseen data.

*How the paper uses it:* This is the core theoretical framework introduced by the paper to unify and improve fully inductive link prediction models.

▶ [Leveraging permutation group symmetries for designing equivariant neural networks - Haggai Maron](https://www.youtube.com/watch?v=k3E3XyMtQcA) — Workshop on Equivariance and Data Augmentation · 5 years ago

### Inductive link prediction knowledge graphs
Inductive link prediction involves predicting missing links in knowledge graphs, especially when the graph contains new nodes or relation types not seen during training. This task requires models that can generalize without retraining, making it a challenging and important problem in graph machine learning.

*How the paper uses it:* The paper addresses fully inductive link prediction where both nodes and relation types are unseen, demonstrating improvements using double equivariant models.

▶ [InGram: Inductive Knowledge Graph Embedding via Relation Graphs (ICML 2023)](https://www.youtube.com/watch?v=hDi1sdDlMZ8) — BDI Lab · 3 years ago

## Already in your library

- [Equivariant Networks and Natural Graph Networks - Taco Cohen](https://www.youtube.com/watch?v=_8P8cLC9a14) — also for: Double Equivariance for Inductive Link Prediction for Both New Nodes and New Relation Types (Bruno F. M. Ribeiro)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's core ideas on double permutation-equivariant representations for fully inductive link prediction in knowledge graphs. Starting with a beginner-level implementation of the DEq-InGram Monte Carlo sampling mechanism, you then advance to reimplementing and evaluating the ISDEA+ framework on a substitute knowledge graph dataset. Finally, the advanced project tackles one of the paper's key limitations by experimenting with methods to mitigate negative transfer in multi-domain training, directly engaging with future research directions.

### Beginner — Monte Carlo Sampling for DEq-InGram Inference
*Effort: a weekend, ~8 hours*

You build a standalone Python script that implements the Monte Carlo sampling procedure described for DEq-InGram to estimate double equivariant representations at inference time. The script will take a small synthetic knowledge graph with nodes and relation types, apply random permutations, and compute averaged embeddings to demonstrate improved stability over naive embeddings.

**Why it shows you understood the paper:** This project shows you grasp the key mechanism by which DEq-InGram improves robustness without retraining, concretely implementing the Monte Carlo sampling to approximate double equivariance in positional embeddings.

**Grounded in:** DEq-InGram improves performance over InGram without retraining (Section 3.3, Section 5).

**Tech stack:** Python 3.11, NumPy

**Data:** A small synthetic knowledge graph with a few nodes and relation types created programmatically to simulate permutations.

**Build it:**

1. Implement a simple knowledge graph data structure with nodes and relation types.
2. Implement the InGram positional embedding computation for nodes and relations.
3. Implement Monte Carlo sampling by applying random permutations to nodes and relations multiple times.
4. Average the embeddings over samples to approximate double equivariant positional embeddings.
5. Compare the variance of embeddings with and without Monte Carlo sampling to demonstrate improved stability.

**Ships as:** A Python script with clear README explaining the Monte Carlo sampling procedure, showing numerical results and plots of embedding variance reduction.

**Stretch goal:** Add a visualization of how embeddings change under permutations and how Monte Carlo sampling stabilizes them.

### Intermediate — Reimplementing ISDEA+ for Fully Inductive Link Prediction
*Effort: 2 weekends, ~20 hours*

You implement the ISDEA+ framework from the paper, converting a simple homogeneous GNN into a double permutation-equivariant model. You train and evaluate it on a publicly available knowledge graph dataset (e.g., FB15k-237 as a substitute) adapted for fully inductive link prediction by holding out nodes and relation types. You compare ISDEA+ performance against a baseline GNN without double equivariance, reporting Hits@10 or similar metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core theoretical contribution (ISDEA+) and empirically validate its advantage on a fully inductive link prediction task, showing comprehension of double equivariance and its practical benefits.

**Grounded in:** ISDEA+ can convert any homogeneous GNN into a double equivariant model (Lemma 3.3); ISDEA+ achieves competitive or superior performance compared to Ultra (Tables 1a and 1b).

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy

**Data:** FB15k-237 knowledge graph dataset adapted for fully inductive link prediction by removing overlapping nodes and relation types between train and test splits.

**Build it:**

1. Prepare the FB15k-237 dataset for fully inductive link prediction by splitting nodes and relation types so test sets contain unseen entities and relations.
2. Implement a baseline homogeneous GNN model for link prediction using PyTorch Geometric.
3. Implement the ISDEA+ framework by adding double permutation-equivariant set aggregation layers as described.
4. Train both models on the training split and evaluate Hits@10 on the fully inductive test split.
5. Analyze and report the performance difference and variance between ISDEA+ and the baseline.

**Ships as:** A GitHub repo with code, training scripts, evaluation metrics, and a README explaining the ISDEA+ implementation and experimental results.

**Stretch goal:** Extend the evaluation to include DEq-InGram inference sampling and compare its effect on ISDEA+ performance.

### Advanced — Mitigating Negative Transfer in Multi-Domain Double Equivariant Models
*Effort: 3+ weeks*

You extend the ISDEA+ model to experiment with techniques aimed at reducing negative transfer when training on multiple knowledge graph domains jointly. For example, you implement domain-specific adapters, multi-task loss weighting, or gradient surgery methods. You evaluate on a multi-domain knowledge graph dataset synthesized from public sources or by combining subsets of FB15k-237 with other datasets, measuring zero-shot link prediction performance and comparing to vanilla ISDEA+.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the paper, demonstrating deep understanding of double equivariance models and the challenges of multi-domain learning, while applying advanced ML techniques to improve robustness and scalability.

**Grounded in:** Current double equivariant models suffer from negative transfer effects when learning jointly from multiple domains; future direction to develop methods to mitigate negative transfer in multi-domain knowledge graph learning.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, Matplotlib

**Data:** A synthesized multi-domain knowledge graph dataset created by combining subsets of FB15k-237 and other public knowledge graphs (e.g., WN18RR) with domain labels.

**Build it:**

1. Create a multi-domain knowledge graph dataset by combining multiple public datasets with domain annotations.
2. Implement the baseline ISDEA+ model for multi-domain training.
3. Implement one or more negative transfer mitigation techniques (e.g., domain-specific adapters, multi-task loss weighting, or gradient surgery).
4. Train and evaluate models on zero-shot fully inductive link prediction tasks across domains.
5. Analyze performance improvements and document findings on negative transfer mitigation.

**Ships as:** A comprehensive GitHub repo with code, experiments, analysis, and a detailed README discussing the negative transfer problem and your mitigation approach.

**Stretch goal:** Explore integrating additional context modalities (e.g., textual descriptions) into the double equivariant framework to further improve cross-domain generalization.
