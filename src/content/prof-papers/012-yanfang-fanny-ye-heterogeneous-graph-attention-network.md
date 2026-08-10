---
title: "012 · Heterogeneous Graph Attention Network — Yanfang (Fanny) Ye"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanfang-fanny-ye"
source_hash: "468c26ce7adf8f85b9e4d15e10fb67ea674b1724055401d300b83f51a9f0c453"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, attention mechanisms in graphs, node embedding techniques, heterogeneous graph modeling
**Already in this field?** Skip this entirely if you already understand graph neural networks and attention-based graph models.

To understand the Heterogeneous Graph Attention Network (HAN) paper, a solid grasp of graph neural networks (GNNs) and attention mechanisms on graph data is essential. The rigorous course option provides a deep, structured university-level foundation on graph machine learning, while the fast track offers a concise, visual introduction to GNN concepts including graph attention networks. Choose the course for comprehensive mastery or the fast track for a quick, intuitive overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 3.1 - Node Embeddings (30 min), 7.1 - A general Perspective on GNNs (30 min), 7.2 - A Single Layer of a GNN (30 min), 7.3 - Stacking layers of a GNN (30 min), 8.2 - Training Graph Neural Networks (30 min), and 8.3 - Setting up GNN Prediction Tasks (30 min), totaling about 3 hours — these cover the core GNN concepts and training relevant to HAN.

*Why it unblocks this paper:* This Stanford CS224W course by Jure Leskovec is a highly authoritative, comprehensive university lecture series on machine learning with graphs, covering node embeddings, graph neural networks, and attention mechanisms, directly relevant to understanding HAN's hierarchical attention on heterogeneous graphs.

*If you want all of it:* 24.1 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (Hands-on)](https://www.youtube.com/playlist?list=PLB1nTQo4_y6sfLtCrGAKG_l7xOHjtYqBk) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 6 videos · 0.6h across 6 episodes

**Watch only this:** All 6 episodes (about 36 minutes) — covers graph basics, machine learning tasks on graphs, simple graph convolution, graph attention networks, and node embedding methods like DeepWalk.

*Why it unblocks this paper:* This short-form series 'Graph Neural Networks (Hands-on)' from LLMs Explained offers a clear, visual, and concise introduction to graph neural networks and graph attention networks in about 36 minutes total, providing an accessible fast track to the key concepts needed for HAN.

*If you want all of it:* 0.6 hours across 6 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the HAN paper. The beginner project focuses on reproducing the core hierarchical attention mechanism on a small synthetic heterogeneous graph, helping you grasp the fundamental idea. The intermediate project involves reimplementing the HAN model from the paper's description and applying it on a real heterogeneous graph dataset, comparing it against a baseline method. The advanced project extends HAN by exploring dynamic meta-path learning, addressing a key limitation and future direction proposed by the authors, and applying it to a domain with evolving heterogeneous graphs.

### Beginner — Hierarchical Attention on a Toy Heterogeneous Graph
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements the core hierarchical attention mechanism of HAN on a tiny synthetic heterogeneous graph with two node types and two edge types. You manually define a couple of simple meta-paths and compute node embeddings using node-level and semantic-level attention. Visualization of attention weights and embeddings will illustrate the mechanism.

**Why it shows you understood the paper:** This project shows you understand the hierarchical attention structure combining node-level and semantic-level attentions, a key novelty of HAN. A professor would see you grasped how HAN learns importance weights for neighbors and meta-paths in heterogeneous graphs.

**Grounded in:** Proposed hierarchical attention structure combining node-level and semantic-level attentions to capture importance of neighbors and meta-paths simultaneously.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic heterogeneous graph data created manually in the notebook with two node types and two edge types.

**Build it:**

1. Create a small heterogeneous graph with two node types and two edge types represented as adjacency matrices.
2. Define two simple meta-paths manually (e.g., A-B-A and A-B-C).
3. Implement node-level attention to compute neighbor importance within each meta-path.
4. Implement semantic-level attention to combine embeddings from different meta-paths.
5. Visualize the learned attention weights and resulting node embeddings using 2D plots.
6. Write a README explaining the hierarchical attention mechanism and how the code reproduces it.

**Ships as:** A Jupyter notebook with code and visualizations demonstrating hierarchical attention on a toy heterogeneous graph, plus a README explaining the mechanism.

**Stretch goal:** Add a simple node classification task on the toy graph to show how embeddings improve classification accuracy.

### Intermediate — Reimplement HAN on DBLP Dataset with Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You reimplement the HAN model from the paper's description in Python using PyTorch or TensorFlow. You apply it to the DBLP heterogeneous graph dataset (a standard academic network with authors, papers, venues) for semi-supervised node classification. You compare HAN's performance against a simple baseline like GCN or metapath2vec embeddings and report classification accuracy.

**Why it shows you understood the paper:** This project demonstrates you can implement the full HAN model including hierarchical attention and apply it to a real heterogeneous graph dataset. Comparing with a baseline shows you understand the model's advantages and evaluation metrics used in the paper.

**Grounded in:** HAN outperforms baselines including DeepWalk, ESim, metapath2vec, HERec, GCN, and GAT on multiple datasets (DBLP, ACM, IMDB) for node classification and clustering.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, Jupyter Notebook

**Data:** DBLP dataset as described in the paper, publicly available citation network with heterogeneous node and edge types. Substitute with a public DBLP heterogeneous graph dataset if needed.

**Build it:**

1. Download and preprocess the DBLP heterogeneous graph dataset with node features and labels.
2. Implement the HAN model with node-level and semantic-level attention as described in the paper.
3. Train HAN in a semi-supervised setting for node classification using the provided labels.
4. Implement a baseline method such as GCN or metapath2vec embeddings for comparison.
5. Evaluate and compare node classification accuracy of HAN and the baseline.
6. Document the implementation details, results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/Jhy1993/HAN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with HAN implementation, training scripts, evaluation results on DBLP, and comparison with baseline, plus a detailed README.

**Stretch goal:** Add visualization of learned attention weights to interpret which meta-paths and neighbors are most important.

### Advanced — Dynamic Meta-path Learning Extension of HAN for Evolving Heterogeneous Graphs
*Effort: 3-4 weeks*

You extend the HAN framework by implementing a mechanism to dynamically learn or adapt meta-paths instead of relying on predefined ones. You apply this extended model to a domain with evolving heterogeneous graphs, such as a temporal citation network or a social network with changing relations. You evaluate the model on node classification or link prediction, showing how dynamic meta-path learning improves adaptability.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper: automating meta-path selection and handling dynamic graphs. It shows you deeply understand HAN's architecture and can innovate on it to address real-world challenges in heterogeneous graph learning.

**Grounded in:** Automating meta-path selection or learning meta-paths dynamically.

**Tech stack:** Python 3.11, PyTorch, NetworkX, scikit-learn, Jupyter Notebook

**Data:** A temporal heterogeneous graph dataset such as a temporal citation network or social network with multiple node and edge types. If unavailable, simulate evolving heterogeneous graph data with timestamps and node/edge type changes.

**Build it:**

1. Research existing approaches for dynamic or automated meta-path learning in heterogeneous graphs.
2. Design and implement an extension of HAN that learns meta-path importance dynamically, e.g., via reinforcement learning or attention over candidate meta-paths.
3. Prepare or simulate an evolving heterogeneous graph dataset with temporal information.
4. Train and evaluate the extended HAN model on node classification or link prediction tasks.
5. Compare performance and adaptability against the original HAN with fixed meta-paths.
6. Document the design, implementation, experiments, and results in a comprehensive README.

**Ships as:** A GitHub repo with the extended HAN implementation supporting dynamic meta-path learning, experiments on evolving heterogeneous graphs, and detailed documentation.

**Stretch goal:** Incorporate additional modalities such as text or temporal features into the model to further improve performance.
