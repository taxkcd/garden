---
title: "523 · Matching Point of Interests and Travel Blog with Multi-view Information Fusion — Dejing Dou"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dejing-dou"
source_hash: "c1a5cbcd151917311fb602739eb14a4767028a39d380c1825199de9449147930"
sequence: 523
generator: "outreach-garden: managed"
---

# 523 · Matching Point of Interests and Travel Blog with Multi-view Information Fusion

## At a glance

- **Professor:** Dejing Dou
- **Institution:** University of Oregon
- **Paper:** [Matching Point of Interests and Travel Blog with Multi-view Information Fusion](https://doi.org/10.1145/3539618.3592016)
- **Authors:** Shuokai Li, Jingbo Zhou, Jizhou Huang, Hao Chen, Fuzhen Zhuang, Qing He, Dejing Dou
- **Year:** 2023

## Paper overview

This paper addresses the challenge of ranking travel blogs that focus on specific Points of Interest (POIs) by leveraging multi-view information from user search behaviors and travel blog content. The authors propose a novel framework called MOTIF that integrates two types of POI graphs—search-level and document-level—and uses mutual information maximization to align their semantic spaces, improving the ranking of high-quality travel blogs.

### Why it matters

**Research problem:** Ranking POI-centric travel blogs is difficult because evaluating the quality of related POIs in blogs requires domain knowledge or actual travel experience, which is often unavailable. Existing query-document ranking methods fail to consider multi-view POI information and user search behavior, leading to poor ranking performance.

**Why it matters:** High-quality POI-centric travel blogs help travelers quickly understand and plan visits to target POIs by providing relevant and reliable information. Improving blog ranking enhances user experience and decision-making in travel planning.

**Key contributions:**

- First investigation of the novel task of POI-centric travel blog ranking.
- Incorporation of multi-view POI information (search-level and document-level graphs) into document ranking.
- Application of Mutual Information Maximization to align semantic spaces of multi-view POI representations.
- Development of an end-to-end framework (MOTIF) that significantly outperforms state-of-the-art baselines on real-world datasets.

## About the professor

**Dejing Dou** — Full Professor, Computer and Information Science Department, University of Oregon.

Research interests: Artificial Intelligence, Data Mining, Data Integration, Natural Language Processing, Biomedical and Health Informatics

### Research links

- [Faculty/profile page](http://ix.cs.uoregon.edu/~dou)
- [Resolved homepage](https://scds.uoregon.edu/clone-ready-willing-and-able-build-better-internet)
- [Lab website](http://aimlab.cs.uoregon.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, graph attention networks, node representation learning, graph embedding techniques
**Already in this field?** Skip this entirely if you already understand graph neural networks and attention mechanisms on graphs.

This background focuses on Graph Neural Networks (GNNs), especially Graph Attention Networks (GAT), which are central to the paper's approach for learning POI representations from multi-view graphs. The rigorous course provides a deep, structured university-level understanding of graph machine learning, while the fast track offers a concise, intuition-driven introduction to GNNs and GATs for quicker comprehension. Choose the rigorous course for thorough mastery and the fast track for a rapid but solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 6.1 - Introduction to Graph Neural Networks (approx. 30 min), 7.1 - A general Perspective on GNNs (approx. 30 min), 7.2 - A Single Layer of a GNN (approx. 30 min), 7.3 - Stacking layers of a GNN (approx. 30 min), and 8.2 - Training Graph Neural Networks (approx. 30 min); about 2.5 hours total. This subset covers the fundamentals of GNNs and the specifics of GATs needed to understand the paper.

*Why it unblocks this paper:* Stanford CS224W by Jure Leskovec is a top-tier university course that covers graph machine learning comprehensively, including detailed lectures on GNNs and GATs, which are directly used in the paper's methodology.

*If you want all of it:* 24.1 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (Hands-on)](https://www.youtube.com/playlist?list=PLB1nTQo4_y6sfLtCrGAKG_l7xOHjtYqBk) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 6 videos · 0.6h across 6 episodes

**Watch only this:** Episodes 1 through 5 (Introduction to Graphs, Graph Definition, Machine-Learning Tasks on Graphs, Simple Graph Convolution, Graph Attention Networks); about 25 minutes total. This covers the essential concepts and the specific GAT mechanism relevant to the paper.

*Why it unblocks this paper:* This short series 'Graph Neural Networks (Hands-on)' by LLMs Explained - Aggregate Intellect - AI.SCIENCE provides a clear, concise introduction to graph neural networks and specifically includes a focused episode on Graph Attention Networks, matching the paper's key techniques.

*If you want all of it:* 0.6 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MOTIF framework for ranking POI-centric travel blogs, start with foundational knowledge on Graph Attention Networks (GATs) since they are used to learn POI representations from multi-view graphs. Next, study Mutual Information Maximization, the central technique for aligning semantic spaces of the multi-view POI graphs. Then, review multi-view information fusion concepts to grasp how different POI graph views are integrated. Finally, watch the authors' own talk on MOTIF to see the complete framework and its application in travel blog ranking.

### Graph Attention Networks seminar *(prerequisite)*
Graph Attention Networks (GATs) are a key component in the MOTIF framework for learning POI representations from both search-level and document-level graphs. Understanding GATs provides insight into how the model captures neighborhood information with attention mechanisms on graph-structured data.

*How the paper uses it:* The paper uses GATs to learn POI representations from multi-view POI graphs.

▶ [Graph Attention Networks - Oxford Geometric Deep Learning](https://www.youtube.com/watch?v=iAEDA8aDCZg) — Federico Barbero · 9:09 · 3 years ago

### Mutual Information Maximization lecture *(prerequisite)*
Mutual Information Maximization (MIM) is the core technique used to align the semantic spaces of the two POI graphs in MOTIF. A rigorous lecture on MIM will clarify the theoretical foundations and practical implications of maximizing mutual information between representations.

*How the paper uses it:* MIM is applied to bridge the semantic gap between search-level and document-level POI graphs.

▶ [Mutual Information || @ CMU || Lecture 24b of CS Theory Toolkit](https://www.youtube.com/watch?v=7D8_-S6d5RU) — Ryan O'Donnell · 28:16 · 6 years ago

### Multi-view information fusion lecture *(prerequisite)*
Multi-view information fusion is fundamental to integrating heterogeneous data sources, such as the search-level and document-level POI graphs in MOTIF. Understanding this concept helps in appreciating how the framework combines multiple modalities to improve ranking performance.

*How the paper uses it:* The MOTIF framework integrates multi-view POI information from different graph views for better representation learning.

▶ [AMOSL: Adaptive Modality-Wise Structure Learning in Multi-View Graph Neural Networks for Enhanced](https://www.youtube.com/watch?v=w0PLrJvOhvc) — Computer Science & IT Conference Proceedings · 21:57 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the MOTIF framework for ranking POI-centric travel blogs, start by learning about Graph Attention Networks (GAT), which are used to learn representations from POI graphs. Next, grasp the concept of multi-view information fusion, essential for integrating different POI graph views. Then, study Mutual Information Maximization, the key technique for aligning semantic spaces of these graphs. Finally, explore the challenges and existing methods in Point of Interest ranking to appreciate the problem context and MOTIF's contributions.

### Graph Attention Networks seminar *(prerequisite)*
Graph Attention Networks (GAT) are neural networks designed to work on graph-structured data by assigning different importance (attention) weights to neighboring nodes. This allows learning rich node representations by focusing on the most relevant neighbors without costly computations. Understanding GATs provides the foundation for how MOTIF learns POI representations from multi-view graphs.

*How the paper uses it:* MOTIF uses GATs to learn POI representations from search-level and document-level POI graphs.

▶ [GAT: Graph Attention Networks (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=v2P1yZhP8cs) — TechViz - The Data Science Guy · 8:45 · 4 years ago

### Multi-view information fusion lecture *(prerequisite)*
Multi-view information fusion involves combining data from different sources or modalities to create a unified, richer representation. This is crucial when different views provide complementary information that can improve learning and decision-making. Understanding this concept helps grasp how MOTIF integrates search-level and document-level POI graphs for better ranking.

*How the paper uses it:* MOTIF integrates multi-view POI information from user search behavior and travel blog content to improve ranking.

▶ [AMOSL: Adaptive Modality-Wise Structure Learning in Multi-View Graph Neural Networks for Enhanced](https://www.youtube.com/watch?v=w0PLrJvOhvc) — Computer Science & IT Conference Proceedings · 21:57 · 2 years ago

### Mutual Information Maximization lecture
Mutual Information Maximization is a technique to measure and maximize the shared information between two representations, encouraging them to be semantically aligned. This helps bridge gaps between different data views by forcing their embeddings to be similar when they represent the same underlying concept. Learning this concept clarifies how MOTIF aligns semantic spaces of POI graphs.

*How the paper uses it:* MOTIF applies Mutual Information Maximization to align semantic spaces of search-level and document-level POI graphs.

▶ [Mutual Information, Clearly Explained!!!](https://www.youtube.com/watch?v=eJIp_mgVLwE) — StatQuest with Josh Starmer · 16:14 · 3 years ago

### Point of Interest ranking methods talk *(prerequisite)*
Point of Interest (POI) ranking methods focus on recommending or ranking locations based on user preferences, context, and data patterns. Understanding existing POI ranking challenges and approaches provides context for why MOTIF's multi-view fusion and semantic alignment improve travel blog ranking.

*How the paper uses it:* The paper addresses limitations of existing POI ranking methods by incorporating multi-view information and user search behavior.

▶ [Relevance Models for Multi-Contextual Appropriateness in Point-of-Interest Recommendation](https://www.youtube.com/watch?v=M6eUNIZntJM) — Anirban Chakraborty · 9:20 · 6 years ago

## Already in your library

- [Understanding Graph Attention Networks](https://www.youtube.com/watch?v=A-yKQamf2Fc) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Graph Attention Networks (GAT) | GNN Paper Explained](https://www.youtube.com/watch?v=uFLeKkXWq2c) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the MOTIF framework for POI-centric travel blog ranking. The beginner project reproduces a core component of POI graph construction and representation learning. The intermediate project implements the full MOTIF method on a small substitute dataset and compares it to a baseline ranking method. The advanced project extends MOTIF by incorporating multimedia content, addressing a stated future direction of the paper.

### Beginner — POI Graph Construction and GAT Embedding
*Effort: a weekend, ~8 hours*

You build a simplified version of the two POI graphs described in the paper: a search-level POI graph and a document-level POI graph, using synthetic or small-scale data simulating co-search and co-occurrence relationships. Then you implement Graph Attention Networks (GAT) to learn POI embeddings from these graphs.

**Why it shows you understood the paper:** This project shows you understand the multi-view POI graph construction and the use of GAT for representation learning, which are foundational to the MOTIF framework.

**Grounded in:** The approach uses Graph Attention Networks to learn POI representations from multi-view graphs.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, Jupyter Notebook

**Data:** Synthetic data simulating POI co-search behavior and POI co-occurrence in travel blogs, created by you to mimic the paper's graph construction.

**Build it:**

1. Create synthetic datasets representing user co-search behavior and POI co-occurrence in documents.
2. Construct two graphs: search-level POI graph and document-level POI graph using networkx or PyTorch Geometric.
3. Implement a simple 2-layer Graph Attention Network (GAT) to learn node embeddings for each graph.
4. Visualize and compare the learned embeddings to verify the model learns meaningful representations.

**Ships as:** A Jupyter notebook with code for graph construction, GAT embedding training, and visualization, plus a README explaining the process and relation to the paper.

**Stretch goal:** Add a simple similarity metric to compare embeddings from the two graphs to hint at semantic alignment.

### Intermediate — Reimplementation of MOTIF for POI-Blog Ranking
*Effort: 1-3 weekends, ~20 hours*

You reimplement the MOTIF framework end-to-end based on the paper's description, including constructing multi-view POI graphs, learning POI embeddings with GAT, applying Mutual Information Maximization (MIM) to align embeddings, and training a pair-wise ranking model to score POI-blog relevance. You evaluate your model against a simple baseline like BM25 ranking on a small public or simulated dataset.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the core MOTIF method, including multi-view graph fusion and mutual information maximization, and to evaluate its effectiveness in POI-centric blog ranking.

**Grounded in:** Development of an end-to-end framework (MOTIF) that significantly outperforms state-of-the-art baselines on real-world datasets.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, scikit-learn, Jupyter Notebook

**Data:** A small substitute dataset created by scraping or simulating POI mentions and user search logs, or a publicly available travel blog dataset with POI annotations (if accessible).

**Build it:**

1. Collect or simulate a dataset of travel blogs with POI mentions and user search behavior data.
2. Construct search-level and document-level POI graphs from the dataset.
3. Implement GAT models to learn POI embeddings from each graph.
4. Implement Mutual Information Maximization to align the two POI embedding spaces.
5. Train a pair-wise ranking model using Bayesian Personalized Ranking loss to score POI-blog relevance.
6. Compare your MOTIF implementation's ranking results with a baseline method such as BM25 using metrics like MRR or nDCG.

**Ships as:** A GitHub repository with code for data processing, model training, evaluation scripts, and a report README showing quantitative results and analysis.

**Stretch goal:** Add ablation experiments to measure the impact of MIM or each POI graph view on ranking performance.

### Advanced — Extending MOTIF with Multimedia Content for POI-Blog Ranking
*Effort: a few weeks, ~40+ hours*

You extend the MOTIF framework by incorporating image features extracted from travel blogs to enhance POI-blog relevance ranking. This involves integrating visual embeddings with the existing multi-view POI graph embeddings and adapting the mutual information maximization to align semantic spaces across text and image modalities.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating your ability to innovate on the MOTIF framework by multimodal fusion, addressing the limitation of ignoring multimedia content in travel blogs.

**Grounded in:** Future directions: Extending the framework to incorporate additional modalities like images or videos in travel blogs.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, Transformers (Hugging Face), OpenCV, Jupyter Notebook

**Data:** A small travel blog dataset with images and POI mentions, either scraped or simulated, with image features extracted using pretrained CNNs (e.g., ResNet).

**Build it:**

1. Collect or simulate a dataset of travel blogs containing both text and images with POI annotations.
2. Extract image embeddings from blog images using a pretrained CNN model.
3. Construct multi-view POI graphs as in MOTIF and learn POI embeddings with GAT.
4. Design a multimodal fusion mechanism to combine POI embeddings with image embeddings.
5. Adapt Mutual Information Maximization to align semantic spaces across text and image modalities.
6. Train a ranking model incorporating multimodal features and evaluate improvements over the original MOTIF.

**Ships as:** A GitHub repository with code for multimodal data processing, model training, evaluation, and a detailed README discussing methodology, challenges, and results.

**Stretch goal:** Explore temporal dynamics by incorporating timestamped user search logs or blog updates to enable dynamic ranking.

_The paper does not provide released code or datasets; synthetic or substitute datasets must be created carefully to reflect the paper's multi-view POI graphs and user search behavior._
