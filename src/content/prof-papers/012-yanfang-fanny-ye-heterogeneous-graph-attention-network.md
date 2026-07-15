---
title: "012 · Heterogeneous Graph Attention Network — Yanfang (Fanny) Ye"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanfang-fanny-ye"
source_hash: "e5887113acc1482d0971e76a699935fcac49d293a1545173ae7c08aeae9c4d30"
sequence: 12
generator: "outreach-garden: managed"
---

# 012 · Heterogeneous Graph Attention Network

## At a glance

- **Professor:** Yanfang (Fanny) Ye
- **Institution:** University of Notre Dame
- **Paper:** [Heterogeneous Graph Attention Network](https://doi.org/10.1145/3308558.3313562)
- **Authors:** Xiao Wang, Houye Ji, Chuan Shi, Bai Wang, Peng Cui, P. Yu, Yanfang Ye
- **Year:** 2019

## Paper overview

This paper proposes a novel graph neural network model called HAN that uses hierarchical attention mechanisms to analyze heterogeneous graphs, which contain multiple types of nodes and edges. HAN learns the importance of different neighbors and meta-paths (semantic relations) to generate meaningful node embeddings, improving tasks like node classification and clustering.

### Why it matters

**Research problem:** Existing graph neural networks primarily focus on homogeneous graphs and do not effectively handle heterogeneous graphs with multiple node and edge types and rich semantic information. There is a need for a model that can capture the complex structure and semantics of heterogeneous graphs using attention mechanisms.

**Why it matters:** Heterogeneous graphs are common in real-world data such as social networks, citation networks, and multimedia data, where different types of nodes and relations exist. Properly modeling these graphs can improve various data mining tasks like classification, clustering, and recommendation, leading to better understanding and utilization of complex data.

**Key contributions:**

- First to study heterogeneous graph neural networks based solely on attention mechanisms.
- Proposed hierarchical attention structure combining node-level and semantic-level attentions to capture importance of neighbors and meta-paths simultaneously.
- Developed a highly efficient model with linear complexity relative to meta-path based node pairs, scalable to large graphs.
- Demonstrated superior performance over state-of-the-art methods on node classification and clustering tasks.
- Provided interpretability by analyzing learned attention weights, revealing meaningful neighbors and meta-paths.

## About the professor

**Yanfang (Fanny) Ye** — Galassi Family Collegiate Professor in Computer Science and Engineering, Computer Science and Engineering, University of Notre Dame.

Research interests: artificial intelligence (AI), machine learning (ML), data mining, cybersecurity, and public health

### Research links

- [Faculty/profile page](https://engineering.nd.edu/faculty/yanfang-fanny-ye)
- [Professor website](http://yes-lab.org/)
- [Resolved homepage](https://engineering.nd.edu/faculty/yanfang-fanny-ye/)
- [Google Scholar](https://scholar.google.com/citations?user=egjr888AAAAJ)

## Learning path

To deeply understand the Heterogeneous Graph Attention Network (HAN) paper, start with foundational knowledge on graph neural networks and attention mechanisms, which are critical to grasp HAN's architecture and hierarchical attention design. Next, explore the challenges and structure of heterogeneous graphs to appreciate the problem context HAN addresses. Finally, focus on the authors' own talk presenting HAN, which provides direct insights into their hierarchical attention approach and experimental results.

## Recommended videos (in order)

### Graph neural networks lecture *(prerequisite)*
Graph neural networks (GNNs) form the backbone of HAN's architecture. Understanding how GNNs encode node features and propagate information through graph structures is essential before delving into HAN's heterogeneous and attention-based extensions. The chosen lecture from Stanford Online provides a rigorous and concise introduction to GNNs, suitable for advanced learners.

*How the paper uses it:* HAN builds on graph neural networks to handle heterogeneous graphs with attention mechanisms.

▶ [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — Stanford Online · 10:31

### Attention mechanisms in deep learning seminar *(prerequisite)*
HAN leverages hierarchical attention mechanisms to weigh the importance of neighbors and meta-paths. A solid understanding of attention in neural networks, especially its motivation and implementation, is necessary to appreciate HAN's novel hierarchical attention design. The 3Blue1Brown video offers a mathematically clear and intuitive explanation of attention mechanisms.

*How the paper uses it:* HAN's core innovation is the hierarchical attention mechanism combining node-level and semantic-level attentions.

▶ [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — 3Blue1Brown · 26:10 · 2 years ago

### Heterogeneous graph mining conference *(prerequisite)*
Heterogeneous graphs contain multiple node and edge types, posing unique challenges for graph learning. Understanding these challenges and the structure of heterogeneous graphs is crucial to grasp why HAN's hierarchical attention is necessary. The Stanford CS224W lecture on heterogeneous and knowledge graph embedding offers a comprehensive academic treatment of this topic.

*How the paper uses it:* HAN targets the complex structure and semantics of heterogeneous graphs for improved node representation learning.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.1-Heterogeneous & Knowledge Graph Embedding](https://www.youtube.com/watch?v=Rfkntma6ZUI) — Stanford Online · 34:57 · 5 years ago

### HAN authors talk *(the paper's own talk)*
The authors' own presentation on HAN provides the most direct and authoritative explanation of their hierarchical attention network for heterogeneous graphs. It covers the model design, motivation, and experimental validation, offering insights that are not easily found elsewhere. This talk is indispensable for understanding the paper's contributions and innovations.

*How the paper uses it:* This talk is by the authors of HAN, explaining their hierarchical attention network for heterogeneous graph analysis.

▶ [RSS 2020, Spotlight Talk 94: Heterogeneous Graph ...](https://www.youtube.com/watch?v=W5eXnJDPm_Q) — Robotics Science and Systems · 5:03
