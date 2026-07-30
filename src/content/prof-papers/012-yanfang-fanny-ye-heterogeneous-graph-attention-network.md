---
title: "012 · Heterogeneous Graph Attention Network — Yanfang (Fanny) Ye"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanfang-fanny-ye"
source_hash: "fcec7ff06efd0ecf4bb26ee0d24f0840a6f431dcf1cdd00603f973a970d3921f"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HAN paper, start with foundational knowledge on Graph Neural Networks and Heterogeneous Graphs to grasp the underlying data structures and learning frameworks HAN builds upon. Then study Attention Mechanisms in Graphs and Meta-path based Graph Analysis to comprehend the key techniques HAN employs for weighting neighbors and semantic relations. Finally, focus on the HAN paper talk itself for the authors' detailed presentation of their hierarchical attention model for heterogeneous graphs.

### Graph Neural Networks *(prerequisite)*
Graph Neural Networks (GNNs) provide the fundamental framework for learning on graph-structured data, which is essential to understand before diving into HAN. These videos cover the mathematical foundations, model architectures, and applications of GNNs, preparing you to appreciate how HAN extends these ideas to heterogeneous graphs.

*How the paper uses it:* HAN builds on the GNN framework to handle heterogeneous graphs with multiple node and edge types.

▶ [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — Alex Foo · 4 years ago

### Heterogeneous Graphs *(prerequisite)*
Understanding heterogeneous graphs, which contain multiple types of nodes and edges, is crucial since HAN specifically targets this complex graph type. The selected university lecture from Stanford CS224W provides an advanced and rigorous introduction to machine learning on heterogeneous graphs.

*How the paper uses it:* HAN is designed to analyze heterogeneous graphs by capturing their rich semantic and structural information.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Machine Learning with Heterogeneous Graphs](https://www.youtube.com/watch?v=uvrlKxj8HVU) — Stanford Online · 2 years ago

### Attention Mechanisms in Graphs *(prerequisite)*
Attention mechanisms allow models to weigh the importance of different nodes and edges dynamically. These videos explain how attention is integrated into graph neural networks, a core technique HAN uses to learn node-level and semantic-level importance.

*How the paper uses it:* HAN uses hierarchical attention mechanisms to learn the importance of neighbors and meta-paths.

▶ [Understanding Graph Attention Networks](https://www.youtube.com/watch?v=A-yKQamf2Fc) — DeepFindr · 5 years ago

### Meta-path based Graph Analysis *(prerequisite)*
Meta-paths capture semantic relations in heterogeneous graphs by defining meaningful sequences of node and edge types. Understanding meta-paths is essential to grasp how HAN leverages them for semantic-level attention and embedding learning.

*How the paper uses it:* HAN relies on predefined meta-paths to model semantic relations in heterogeneous graphs.

▶ [Meta Paths and Meta Structures: Discovery and Applications](https://www.youtube.com/watch?v=8JPcFXWXUmU) — HKU Faculty of Science · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HAN paper from a beginner to advanced perspective, start by learning the fundamentals of Graph Neural Networks (GNNs) to grasp how graphs are represented and processed in AI. Next, build intuition on heterogeneous graphs to appreciate the multi-typed nodes and edges HAN operates on. Then, study attention mechanisms in graphs to understand how HAN weighs neighbors and meta-paths. After that, learn about meta-path based graph analysis to see how semantic relations are captured. Finally, explore the HAN-specific hierarchical attention structure combining node-level and semantic-level attentions to fully comprehend the paper's core innovation.

### Graph Neural Networks *(prerequisite)*
Graph Neural Networks (GNNs) are a class of neural networks designed to work directly with graph-structured data by passing messages between nodes to learn useful representations. Understanding GNNs provides the foundation for how graph data is processed and why they are powerful for tasks like node classification.

*How the paper uses it:* HAN builds on the GNN framework to handle heterogeneous graphs with multiple node and edge types.

▶ [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — Alex Foo · 4 years ago

### Heterogeneous Graphs *(prerequisite)*
Heterogeneous graphs contain different types of nodes and edges, representing complex real-world data with rich semantic information. Learning about heterogeneous graphs helps understand the challenges HAN addresses in modeling diverse relationships and node types.

*How the paper uses it:* HAN is designed specifically to analyze heterogeneous graphs with multiple node and edge types.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Machine Learning with Heterogeneous Graphs](https://www.youtube.com/watch?v=uvrlKxj8HVU) — Stanford Online · 2 years ago

### Attention Mechanisms in Graphs *(prerequisite)*
Attention mechanisms allow models to weigh the importance of different neighbors or features dynamically, improving representation learning by focusing on the most relevant information. In graph contexts, attention helps decide which neighboring nodes contribute more to a node's embedding.

*How the paper uses it:* HAN uses attention mechanisms to learn the importance of neighbors and meta-paths in heterogeneous graphs.

▶ [Understanding Graph Attention Networks](https://www.youtube.com/watch?v=A-yKQamf2Fc) — DeepFindr · 5 years ago

### Meta-path based Graph Analysis *(prerequisite)*
Meta-paths are sequences of node and edge types that capture semantic relationships in heterogeneous graphs, enabling models to consider meaningful multi-hop connections. Understanding meta-paths is key to grasping how HAN captures complex semantics in graph data.

*How the paper uses it:* HAN leverages meta-paths to define semantic relations and applies attention to weigh their importance.

▶ [Meta Paths and Meta Structures: Discovery and Applications](https://www.youtube.com/watch?v=8JPcFXWXUmU) — HKU Faculty of Science · 5 years ago

## Already in your library

- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.1-Heterogeneous & Knowledge Graph Embedding](https://www.youtube.com/watch?v=Rfkntma6ZUI) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
