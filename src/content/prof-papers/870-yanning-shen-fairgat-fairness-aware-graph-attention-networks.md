---
title: "870 · FairGAT: Fairness-aware Graph Attention Networks — Yanning Shen"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanning-shen"
source_hash: "1dfea3730cdcc62c4f9278234b5cc90833a2c616c0bb772bcd027ad6e8d7ca52"
sequence: 870
generator: "outreach-garden: managed"
---

# 870 · FairGAT: Fairness-aware Graph Attention Networks

## At a glance

- **Professor:** Yanning Shen
- **Institution:** Univ. of California - Irvine
- **Paper:** [FairGAT: Fairness-aware Graph Attention Networks](https://arxiv.org/pdf/2303.14591)
- **Authors:** O. Deniz Kose, Yanning Shen
- **Year:** 2023

## Paper overview

This paper addresses the problem of algorithmic bias in graph neural networks, specifically graph attention networks (GATs), which are used to analyze complex systems like social networks and gene networks. The authors theoretically analyze the sources of bias in GATs and propose FairGAT, a novel fairness-aware attention mechanism that reduces bias while maintaining comparable prediction accuracy. Experiments on real-world datasets show that FairGAT improves fairness metrics significantly compared to standard GATs and other fairness-aware methods.

### Why it matters

**Research problem:** Graph neural networks, especially graph attention networks, can amplify algorithmic bias related to sensitive attributes (e.g., ethnicity, gender) due to biased graph structures and attention mechanisms. The impact of attention design on bias in GATs had not been theoretically studied or mitigated effectively.

**Why it matters:** Algorithmic bias in machine learning models leads to unfair treatment of groups defined by sensitive attributes, causing discrimination and ethical concerns. Since GATs are widely used for graph-based learning tasks in social, biological, and other domains, mitigating bias in these models is crucial for trustworthy AI applications.

**Key contributions:**

- Theoretical analysis illuminating sources of algorithmic bias in GAT-based neural networks for node classification.
- Development of FairGAT, a novel fairness-aware attention mechanism that mitigates bias by controlling attention weights.
- Application of spectral normalization to weight matrices to limit bias amplification.
- Scaling of node representations to further reduce bias.
- Comprehensive experiments on multiple real-world datasets demonstrating improved fairness with comparable utility.

## About the professor

**Yanning Shen** — Associate Professor, Department of EECS, Department of CS (Joint appointment, WoS), Univ. of California - Irvine.

Research interests: trustworthy machine learning, network science, and statistical signal processing, along with their applications in social, brain, gene-regulatory, environmental, financial, and IoT systems

### Research links

- [Faculty/profile page](https://sites.google.com/uci.edu/yanning-shen)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, graph attention mechanisms, spectral normalization in neural networks
**Already in this field?** Skip this entirely if you already understand graph neural networks and attention-based graph models including spectral normalization techniques.

To understand the FairGAT paper on fairness-aware graph attention networks, a solid grasp of graph neural networks (GNNs) and especially graph attention mechanisms is essential. The rigorous course option offers a comprehensive, university-level deep dive into graph machine learning concepts, while the fast track provides a concise, intuition-driven introduction to GNNs and graph attention networks, suitable for quickly gaining the core ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 6.1 - Introduction to Graph Neural Networks (approx. 30 min), 7.1 - A general Perspective on GNNs (approx. 30 min), 7.2 - A Single Layer of a GNN (approx. 30 min), 7.3 - Stacking layers of a GNN (approx. 30 min), and 8.2 - Training Graph Neural Networks (approx. 30 min), totaling about 2.5 hours. This subset covers core GNN concepts, layer design, stacking, and training relevant to FairGAT.

*Why it unblocks this paper:* Stanford CS224W by Jure Leskovec is a top-tier university course covering graph machine learning comprehensively, including graph neural networks and attention mechanisms. It provides theoretical foundations and practical insights directly relevant to understanding the bias sources and attention designs in FairGAT.

*If you want all of it:* About 24.1 hours across 47 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (GNN) Full Course | Deep Learning & Graph AI](https://www.youtube.com/playlist?list=PLLlTVphLQsuOS1XwHGLW8j2NVtXvhaa76) — Numeryst · 26 videos · 3.6h across 26 episodes

**Watch only this:** Episodes 1 - Introduction to Graph Neural Networks (8 min), 3 - Message passing in Graph Neural Networks (8 min), 6 - Introduction to Graph Attention | Graph Neural Networks (8 min), 11 - Node Classification Tutorial with GAT | Full Guide (8 min), totaling about 32 minutes. These episodes cover the essentials of GNNs, attention, and node classification relevant to the paper.

*Why it unblocks this paper:* The Numeryst 'Graph Neural Networks (GNN) Full Course' playlist offers a concise, practical introduction to GNNs and graph attention networks with short episodes. It covers message passing, attention mechanisms, and node classification, providing a fast yet clear foundation for understanding FairGAT's approach.

*If you want all of it:* About 3.6 hours across 26 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FairGAT paper, start with foundational knowledge on algorithmic bias in graph neural networks and the fundamentals of graph attention networks, as these provide the necessary background on the problem and the base architecture FairGAT builds upon. Next, study spectral normalization in neural networks to grasp the technical method used to control bias amplification. Finally, focus on the core concept of FairGAT itself, prioritizing any direct talks by the authors or closely related academic presentations to gain insight into their novel fairness-aware attention mechanism and theoretical contributions.

### Algorithmic bias in graph neural networks *(prerequisite)*
Understanding the sources and impacts of bias in graph neural networks is essential to appreciate the motivation behind FairGAT. This section covers foundational concepts about how bias arises in GNNs and why it matters for fairness in graph-based learning tasks.

*How the paper uses it:* FairGAT addresses algorithmic bias in GNNs, so grasping bias origins is foundational to the paper's motivation.

▶ [Theoretical Foundations of Graph Neural Networks](https://www.youtube.com/watch?v=uF53xsT7mjc) — Petar Veličković · 1:12:20 · 5y ago

### Graph attention networks *(prerequisite)*
Graph Attention Networks (GATs) are the base architecture that FairGAT extends. Understanding how GATs work, especially their attention mechanisms, is critical for comprehending how FairGAT modifies attention to mitigate bias.

*How the paper uses it:* FairGAT builds on GAT architecture by introducing fairness-aware attention mechanisms.

▶ [GNN Architectures Explained | GCN, GIN, EGConv, PNA, GAT and GATv2](https://www.youtube.com/watch?v=e4Upa7sf7gM) — LatentShift · 17:29 · 4mo ago

### Spectral normalization in neural networks *(prerequisite)*
Spectral normalization is a key technique used in FairGAT to control the spectral norms of weight matrices, preventing bias amplification. This section explains the theory and application of spectral normalization in neural networks.

*How the paper uses it:* FairGAT applies spectral normalization to weight matrices to limit bias amplification.

▶ [Spectral Normalization | Lecture 70 (Part 1) | Applied Deep Learning](https://www.youtube.com/watch?v=3VcPZ4SuIaA) — Maziar Raissi · 19:42 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand FairGAT, a fairness-aware graph attention network. We start with the basics of algorithmic bias in graph neural networks to grasp the motivation, then cover graph attention networks to understand the architecture FairGAT builds upon, followed by spectral normalization to see how weight matrices are controlled, and finally focus on fairness-aware attention mechanisms which are central to FairGAT's innovation.

### Algorithmic bias in graph neural networks *(prerequisite)*
Learn what algorithmic bias means in the context of graph neural networks (GNNs), why it arises, and how it affects predictions unfairly across sensitive groups. This foundational understanding explains the motivation behind designing fairness-aware GNNs like FairGAT.

*How the paper uses it:* FairGAT addresses bias amplification in GATs caused by graph structure and attention mechanisms.

▶ [The ultimate intro to Graph Neural Networks. Maybe.](https://www.youtube.com/watch?v=me3UsMm9QEs) — AI Coffee Break with Letitia · 8:35 · 6y ago

### Graph attention networks *(prerequisite)*
Understand the architecture of graph attention networks (GATs), which use attention mechanisms to weigh neighbor nodes differently during message passing. This knowledge is essential to grasp how FairGAT modifies attention to reduce bias.

*How the paper uses it:* FairGAT builds on the GAT architecture by introducing fairness-aware attention.

▶ [Graph Attention Network (GAT): A Graph Neural Network (GNN) | Self-Attention](https://www.youtube.com/watch?v=itF0YPlJjaQ) — Nihar Ranjan Samal · 35:30 · 1y ago

### Spectral normalization in neural networks *(prerequisite)*
Spectral normalization is a technique to control the largest singular value (spectral norm) of weight matrices in neural networks, preventing them from amplifying errors or bias. Understanding this helps explain how FairGAT limits bias amplification through weight matrix constraints.

*How the paper uses it:* FairGAT applies spectral normalization to weight matrices to prevent bias amplification.

▶ [Spectral Norm Regularization for Improving the Generalizability of Deep Learning](https://www.youtube.com/watch?v=F-cckDPsWWU) — Federico Barbero · 19:04 · 6y ago

## Already in your library

- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Lecture 11 - Graph Neural Networks (GNNs)](https://www.youtube.com/watch?v=FaqkCfv5LTg) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Graph Neural Networks](https://www.youtube.com/watch?v=ZfK4FDk9uy8) — also for: Extracting default mode network based on graph neural network for resting state fMRI study (D. Wang)
- [Understanding Graph Attention Networks](https://www.youtube.com/watch?v=A-yKQamf2Fc) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)
- [GAT: Graph Attention Networks (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=v2P1yZhP8cs) — also for: Matching Point of Interests and Travel Blog with Multi-view Information Fusion (Dejing Dou)
- [Graph Attention Networks - Oxford Geometric Deep Learning](https://www.youtube.com/watch?v=iAEDA8aDCZg) — also for: Matching Point of Interests and Travel Blog with Multi-view Information Fusion (Dejing Dou)
- [Graph Attention Networks (GAT) | GNN Paper Explained](https://www.youtube.com/watch?v=uFLeKkXWq2c) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention Mechanism Explained](https://www.youtube.com/watch?v=gSwjW945Ivc) — also for: FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing (Sos S. Agaian)
- [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the key ideas of FairGAT. The beginner project focuses on reproducing a core fairness metric comparison between GAT and FairGAT attention weights on a small synthetic graph, using familiar tools. The intermediate project involves reimplementing the FairGAT method for node classification on a public graph dataset, comparing fairness and accuracy against a baseline GAT, introducing spectral normalization and fairness-aware attention. The advanced project extends FairGAT to handle multi-class sensitive attributes, addressing a stated limitation and exploring fairness in a more complex setting.

### Beginner — Fairness Metric Comparison on Synthetic Graph
*Effort: a weekend, ~8 hours*

You build a small synthetic graph with binary sensitive attributes and implement a simple graph attention network (GAT) to perform node classification. Then you implement a basic fairness metric calculation (e.g., statistical parity difference) comparing standard GAT attention weights to a fairness-aware attention mechanism that limits attention on inter-group edges.

**Why it shows you understood the paper:** This project demonstrates your grasp of how attention weights on inter- and intra-group edges influence bias, a core theoretical insight of the paper, and your ability to measure fairness metrics as used in the experiments.

**Grounded in:** FairGAT’s attention coefficients satisfy an optimal amount of attention assigned to inter-edges minimizing bias-related terms.

**Tech stack:** Python 3.11, PyTorch, NetworkX, Jupyter Notebook

**Data:** Synthetic graph data generated with two sensitive groups and labeled nodes for classification.

**Build it:**

1. Generate a small synthetic graph with nodes assigned binary sensitive attributes and labels.
2. Implement a simple GAT model for node classification using PyTorch.
3. Calculate fairness metrics such as statistical parity difference on model predictions.
4. Modify the attention mechanism to limit attention weights on inter-group edges.
5. Compare fairness metrics before and after applying the fairness-aware attention.
6. Document the results and include visualizations of attention weights and fairness metrics.

**Ships as:** A Jupyter notebook demonstrating synthetic graph creation, GAT training, fairness metric calculations, and comparison of standard vs fairness-aware attention.

**Stretch goal:** Add spectral normalization to the GAT weight matrices and observe its effect on fairness metrics.

### Intermediate — Reimplement FairGAT for Node Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the FairGAT method described in the paper, including the fairness-aware attention mechanism, spectral normalization of weight matrices, and representation scaling. You train this model on a public graph dataset with binary sensitive attributes (e.g., the Recidivism or Pokec dataset substitute) and compare fairness metrics and accuracy against a baseline GAT.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the core method of the paper, understand the interplay of attention design and spectral normalization in bias mitigation, and evaluate fairness-utility trade-offs on real data.

**Grounded in:** Development of FairGAT, a novel fairness-aware attention mechanism that mitigates bias by controlling attention weights; application of spectral normalization to weight matrices to limit bias amplification; comprehensive experiments on multiple real-world datasets demonstrating improved fairness with comparable utility.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NetworkX, Jupyter Notebook

**Data:** A public graph dataset with node features, labels, and binary sensitive attributes (e.g., a publicly available social network dataset with gender or ethnicity labels). If unavailable, simulate a small graph with these properties.

**Build it:**

1. Select or generate a graph dataset with binary sensitive attributes and node labels.
2. Implement the baseline GAT model using PyTorch Geometric.
3. Implement the FairGAT attention mechanism controlling inter- and intra-group edge attention weights.
4. Apply spectral normalization to the GAT weight matrices as described.
5. Incorporate representation scaling to control maximal deviations.
6. Train both models and evaluate fairness metrics (statistical parity, equal opportunity) and accuracy.
7. Perform ablation by disabling one FairGAT component at a time to observe effects.
8. Document the implementation details, results, and comparisons.

**Ships as:** A GitHub repository with code to train baseline GAT and FairGAT on a public dataset, scripts to compute fairness metrics, and a report comparing results with visualizations.

**Stretch goal:** Integrate hyperparameter tuning for attention limits and scaling factors to explore fairness-utility trade-offs.

### Advanced — Extending FairGAT to Multi-class Sensitive Attributes
*Effort: 3+ weeks*

You extend the FairGAT framework to handle multiple, non-binary sensitive attributes simultaneously, addressing a key limitation noted in the paper. This involves adapting the fairness-aware attention mechanism and spectral normalization to multi-group settings, and evaluating the method on a citation network or similar graph with multi-class sensitive attributes for node classification or link prediction.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's theoretical and practical contributions, and the ability to innovate beyond them by tackling a stated future direction, potentially contributing novel insights into fairness-aware graph learning.

**Grounded in:** Extension of FairGAT to link prediction tasks with non-binary sensitive attributes showing promising results; limitation that extension to multiple, non-binary sensitive attributes remains future work.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NetworkX, Jupyter Notebook, scikit-learn

**Data:** A publicly available citation network dataset with multi-class sensitive attributes (e.g., gender and ethnicity labels if available) or a simulated graph with multiple sensitive groups.

**Build it:**

1. Identify or simulate a graph dataset with multiple non-binary sensitive attributes and node labels.
2. Analyze the current FairGAT attention mechanism and spectral normalization to identify necessary adaptations for multi-group fairness.
3. Modify the attention mechanism to control attention weights across multiple sensitive groups, possibly via group-aware constraints or regularization.
4. Extend spectral normalization and representation scaling to accommodate multi-group settings.
5. Implement training and evaluation pipelines for node classification or link prediction tasks.
6. Evaluate fairness metrics generalized to multi-class sensitive attributes (e.g., multi-group statistical parity, equal opportunity).
7. Compare results against baseline GAT and existing fairness-aware methods if possible.
8. Document methodology, challenges, results, and potential directions for further research.

**Ships as:** A comprehensive GitHub repository with code, experiments, and a detailed report demonstrating the extension of FairGAT to multi-class sensitive attributes and its impact on fairness and utility.

**Stretch goal:** Explore combining FairGAT with feature debiasing techniques to address input data bias jointly.
