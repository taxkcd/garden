---
title: "020 · Double Equivariance for Inductive Link Prediction for Both New Nodes and New Relation Types — Bruno F. M. Ribeiro"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ribeirob"
source_hash: "1c3d35a2806275b639d7d266c4eb8e3da83d7ac9fac6ad2f60c2c3a416bc7a4e"
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

To deeply understand the paper on double equivariance for fully inductive link prediction, start with foundational knowledge on permutation group theory and equivariance in graph neural networks, as these underpin the theoretical framework. Then, study the concept of double permutation-equivariant representations, which is central to the paper's novel contributions. Finally, review the authors' own talk or related advanced talks to grasp the specific innovations, empirical results, and future directions presented in the paper.

## Recommended videos (in order)

### Permutation group theory in machine learning *(prerequisite)*
Permutation group theory provides the mathematical foundation for understanding permutation equivariance, a key property exploited in the paper's model design. Familiarity with symmetric groups and their actions is essential to grasp how models maintain invariance or equivariance under node and relation permutations.

*How the paper uses it:* The paper's double permutation-equivariant framework relies on permutation group theory to formalize invariance to permutations of nodes and relation types.

▶ [MSC |MATHEMATICAL METHODS OF PHYSICS 2| SEMINAR|](https://www.youtube.com/watch?v=aHdUCIVrZ2g) — Mr Photons Physics Classes · 14:13

### Graph neural networks equivariance theory *(prerequisite)*
Understanding equivariance in graph neural networks is foundational to appreciating how the paper extends these ideas to double equivariance for nodes and relations. These lectures cover the theoretical underpinnings and practical implementations of equivariant GNNs.

*How the paper uses it:* The paper builds on equivariant GNN theory to develop double equivariant models for knowledge graphs.

▶ [Equivariant Networks and Natural Graph Networks - Taco Cohen](https://www.youtube.com/watch?v=_8P8cLC9a14) — Workshop on Equivariance and Data Augmentation · 36:23

### Inductive link prediction knowledge graphs *(prerequisite)*
Inductive link prediction in knowledge graphs is the core application domain of the paper. These talks provide context on the challenges of predicting links involving unseen nodes and relations, setting the stage for the paper's fully inductive approach.

*How the paper uses it:* The paper addresses fully inductive link prediction, requiring understanding of inductive vs transductive settings in knowledge graph completion.

▶ [[Deep Graph Learning] 4.6 GNN inductive vs transductive ...](https://www.youtube.com/watch?v=Lrr25EzAgkI) — BASIRA Lab · 20:46

### Double permutation-equivariant representations
This concept is the central theoretical framework introduced by the paper to enable fully inductive link prediction. Videos on equivariant structures and group equivariant deep learning provide the mathematical and machine learning background necessary to understand double equivariance.

*How the paper uses it:* The paper formalizes double permutation-equivariant representations as necessary for fully inductive link prediction and analyzes existing models within this framework.

▶ [Equivariant message passing as non-linear convolution](https://www.youtube.com/watch?v=o-KcYASwUco) — Erik Bekkers · 33:08
