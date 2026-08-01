---
title: "102 · Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks — Anne R. Haake"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anne-r-haake"
source_hash: "9746f6abd36c0b1de747c57b5add0208f9c9c45225e9257b0a9381ef29b543b1"
sequence: 102
generator: "outreach-garden: managed"
---

# 102 · Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks

## At a glance

- **Professor:** Anne R. Haake
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks](https://doi.org/10.1109/TCBB.2021.3059415)
- **Authors:** Kishan KC, Rui Li, Feng Cui, Anne R. Haake
- **Year:** 2020

## Paper overview

This paper introduces a novel deep learning model called Higher-Order Graph Convolutional Network (HOGCN) to predict interactions between biomedical entities such as proteins, drugs, genes, and diseases. Unlike previous methods that only consider immediate neighbors in a network, HOGCN aggregates information from neighbors at multiple distances, improving prediction accuracy and confidence. The model is tested on four biomedical interaction datasets and shows superior performance and robustness, including the ability to identify novel interactions supported by literature.

### Why it matters

**Research problem:** Predicting biologically meaningful interactions between biomedical entities (e.g., protein-protein, drug-drug, drug-target, gene-disease interactions) using network data, where existing graph convolutional methods are limited to immediate neighbors and fail to capture higher-order neighborhood information.

**Why it matters:** Understanding and predicting biomedical interactions is crucial for system-level biological understanding, disease biomarker identification, drug target discovery, and drug safety. Improved prediction models can accelerate biomedical research and therapeutic development.

**Key contributions:**

- Proposed HOGCN model that aggregates features from higher-order neighbors for biomedical interaction prediction.
- Designed a higher-order graph convolutional layer that learns linear combinations of features from neighbors at multiple distances.
- Introduced a bilinear decoder to reconstruct interactions from learned node representations.
- Demonstrated superior performance over state-of-the-art network similarity, embedding, and graph convolution methods on four biomedical datasets.
- Showed that HOGCN learns meaningful biomedical entity representations, evidenced by clustering of drugs by category without explicit category information.

## About the professor

**Anne R. Haake** — Professor, College of Science and Engineering, Rochester Inst. of Technology.

### Research links

- [Faculty/profile page](https://www.rit.edu/academicaffairs/facultyscholarship/person.php?username=arhics)
- [Identity evidence](https://www.rit.edu/gccis/anne-haake)
- [Identity evidence](http://hccl.gccis.rit.edu/index.php/people/8-faculty/2-anne-haake)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Higher-Order Graph Convolutional Networks (HOGCN) for biomedical interaction prediction, start with foundational knowledge on graph neural networks and biomedical interaction networks to grasp the domain and general methodology. Then, explore graph embedding methods and bilinear decoders to understand baseline comparisons and key model components. Finally, focus on the core concept of higher-order graph convolution and the authors' own talk or closely related advanced presentations to gain detailed insights into the novel HOGCN model and its contributions.

### Graph neural networks *(prerequisite)*
Graph neural networks (GNNs) provide the fundamental framework for learning on graph-structured data, which is essential for understanding how HOGCN extends these methods. The selected lecture from Lancaster University Leipzig by Dr. Pascal Welke is a recent, research-focused presentation that covers advanced GNN concepts suitable for graduate-level study.

*How the paper uses it:* HOGCN builds upon and extends graph neural network architectures by incorporating higher-order neighborhood information.

▶ [Lecture Dr Welke: Graph Neural Networks for Machine ...](https://www.youtube.com/watch?v=3LttLhxVIaY) — Lancaster University Leipzig · 38:13

### Biomedical interaction networks *(prerequisite)*
Understanding the nature of biomedical interaction networks and their biological significance provides necessary context for the application domain of HOGCN. The seminar by Pierre Baldi at Purdue CS offers a comprehensive and academic overview of deep learning in biomedical sciences, aligning well with the paper's focus.

*How the paper uses it:* HOGCN is applied to predict interactions in biomedical networks such as protein-protein and drug-drug interactions.

▶ [Pierre Baldi - Deep Learning in the Biomedical Sciences](https://www.youtube.com/watch?v=wgcFdQc9aZQ) — Bioinformatics Seminar Series at Purdue CS · 1:05:58

### Graph embedding methods *(prerequisite)*
Graph embedding methods like DeepWalk and node2vec serve as baseline approaches compared against HOGCN. The Stanford CS224W lecture on Machine Learning with Graphs provides a rigorous academic treatment of graph embeddings and their mathematical foundations, suitable for advanced readers.

*How the paper uses it:* HOGCN outperforms traditional graph embedding methods such as DeepWalk and node2vec in biomedical interaction prediction tasks.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 ...](https://www.youtube.com/watch?v=eliMLfJeu7A) — Stanford Online · 18:04

### Bilinear decoders in graph models *(prerequisite)*
Bilinear decoders are key components used in the paper to reconstruct interaction edges from learned node representations. The Carnegie Mellon University Deep Learning lecture on Graph Neural Networks covers formal aspects of GNNs including decoding mechanisms, providing a solid academic foundation.

*How the paper uses it:* HOGCN employs a bilinear decoder to reconstruct interaction edges from node embeddings.

▶ [Lecture: Graph Neural Networks](https://www.youtube.com/watch?v=84_R03D89iE) — Carnegie Mellon University Deep Learning · 5 years ago

### Higher-order graph convolution
Higher-order graph convolution is the central methodological innovation of the paper, enabling aggregation of multi-hop neighborhood information. The AAAI 2024 talk by Yujie Zeng on Higher-order Graph Convolutional Networks with Flower-Petals Laplacians is a recent, research-level presentation closely related to the paper's core concept, offering advanced insights into higher-order convolutions on graphs.

*How the paper uses it:* HOGCN introduces higher-order graph convolutional layers to aggregate features from neighbors at multiple distances.

▶ [AAAI-Higher-order Graph Convolutional Network with Flower-Petals Laplacians on Simplicial Complexes](https://www.youtube.com/watch?v=pe-L20ncdAQ) — Yujie Zeng · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's novel Higher-Order Graph Convolutional Network (HOGCN) for biomedical interaction prediction. We start with the basics of biomedical interaction networks to understand the domain context, then cover graph neural networks to grasp the general modeling framework. Next, we explore graph embedding methods as baseline techniques, followed by bilinear decoders which are key to reconstructing interactions. Finally, we focus on the core concept of higher-order graph convolution, which is the main innovation of the paper.

### Biomedical interaction networks *(prerequisite)*
Biomedical interaction networks represent relationships among biological entities like proteins, drugs, genes, and diseases. Understanding these networks provides context for why predicting interactions is important and how data is structured in this domain.

*How the paper uses it:* The paper applies HOGCN to predict interactions in biomedical networks involving proteins, drugs, genes, and diseases.

▶ [Machine Learning for Spatial and Network Biology – Uthsav ...](https://www.youtube.com/watch?v=2m5QhvwVMbM) — Johns Hopkins Whiting School of Engineering · 1:15:49

### Graph neural networks *(prerequisite)*
Graph neural networks (GNNs) are deep learning models designed to work directly on graph-structured data by aggregating information from nodes and their neighbors. Learning how GNNs operate is essential to understand how HOGCN extends these ideas.

*How the paper uses it:* HOGCN builds on graph convolutional networks, a type of GNN, to aggregate neighborhood information for prediction.

▶ [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — IBM Technology · 16:47

### Graph embedding methods *(prerequisite)*
Graph embedding methods like DeepWalk and node2vec convert nodes in a graph into vector representations capturing structural information. These embeddings serve as baselines for comparison with HOGCN in the paper.

*How the paper uses it:* The paper compares HOGCN's performance against embedding methods such as DeepWalk and node2vec.

▶ [Graph Embeddings (node2vec) explained - How nodes get mapped to vectors](https://www.youtube.com/watch?v=pS_POUVFXvk) — Philipp Brunenberg · 4 years ago

### Bilinear decoders in graph models *(prerequisite)*
Bilinear decoders reconstruct relationships between nodes by combining their learned representations through a bilinear function. This mechanism helps predict edges (interactions) in the graph from node embeddings.

*How the paper uses it:* HOGCN uses a bilinear decoder to reconstruct interaction edges from learned node representations.

▶ [Lecture: Graph Neural Networks](https://www.youtube.com/watch?v=84_R03D89iE) — Carnegie Mellon University Deep Learning · 5 years ago

### Higher-order graph convolution *(the paper's own talk)*
Higher-order graph convolution extends traditional graph convolution by aggregating information not just from immediate neighbors but also from nodes multiple hops away. This richer neighborhood aggregation improves representation quality and prediction accuracy.

*How the paper uses it:* The core innovation of the paper is the higher-order graph convolutional layer that aggregates features from neighbors at multiple distances.

▶ [Workshop Introduction to Graph Neural Network and Its ...](https://www.youtube.com/watch?v=YwCsPY6TB8U) — Toronto Machine Learning Series (TMLS) · 1:51:57

## Already in your library

- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [MedAI #76: Multimodal learning with graphs for biomedical ...](https://www.youtube.com/watch?v=CWOCDnNvPhg) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Knowledge Graph Completion using Embeddings KGC 2023](https://www.youtube.com/watch?v=PZua6Rwtp8I) — also for: Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction (Wlodek Zadrozny)
