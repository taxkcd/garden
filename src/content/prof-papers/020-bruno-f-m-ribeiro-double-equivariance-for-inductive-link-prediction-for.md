---
title: "020 · Double Equivariance for Inductive Link Prediction for Both New Nodes and New Relation Types — Bruno F. M. Ribeiro"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ribeirob"
source_hash: "0ac19d3fe7977311959671b3eb34d7425877325380e7ad226d4c53a4be13c718"
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
