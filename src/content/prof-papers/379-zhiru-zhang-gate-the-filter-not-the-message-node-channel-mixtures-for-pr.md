---
title: "379 · Gate the Filter, Not the Message: Node-Channel Mixtures for Pre-Propagation GNNs — Zhiru Zhang"
date: 2026-08-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhiru-zhang"
source_hash: "1f6a8eb3d9841c839c64b24d42f41d9b2bdec8b293f27e77e9dcfc24bdbb55b8"
sequence: 379
generator: "outreach-garden: managed"
---

# 379 · Gate the Filter, Not the Message: Node-Channel Mixtures for Pre-Propagation GNNs

## At a glance

- **Professor:** Zhiru Zhang
- **Institution:** Cornell University
- **Paper:** [Gate the Filter, Not the Message: Node-Channel Mixtures for Pre-Propagation GNNs](https://arxiv.org/abs/2606.01660)
- **Authors:** Zichao Yue, Zhiru Zhang
- **Year:** 2026

## Paper overview

This paper proposes FilterMoE, a new type of graph neural network (GNN) that improves scalability and accuracy for node classification on large graphs. It does so by learning adaptive graph filters that vary jointly across nodes and feature channels, using a mixture-of-experts approach over a shared bank of spectral filters. This method preserves the efficiency of pre-propagation GNNs, which preprocess graph structure once and then train on dense features, avoiding costly repeated message passing during training.

### Why it matters

**Research problem:** Existing pre-propagation graph neural networks (PP-GNNs) differ mainly in how they aggregate precomputed hop features, but more complex aggregators do not consistently outperform simpler ones. The problem is that current PP-GNNs either learn filters that adapt across channels but are shared across nodes, or adapt across nodes but are shared across channels, missing a regime of joint node- and channel-adaptive filtering.

**Why it matters:** PP-GNNs enable scalable training on large graphs by decoupling graph propagation from training, but their performance depends heavily on the choice of hop-feature aggregator. Manual selection or tuning of these aggregators is dataset-specific and suboptimal. A robust, learned mechanism for adaptive filtering that maintains scalability would improve accuracy and ease of use across diverse datasets.

**Key contributions:**

- Analysis of existing PP-GNN hop aggregators from a graph-filter perspective, showing their main difference lies in coefficient sharing across nodes and channels.
- Identification of the missing regime of joint node- and channel-adaptive filtering in PP-GNNs.
- Proposal of FilterMoE, a mixture-of-experts PP-GNN that routes a shared bank of Chebyshev filter experts jointly over nodes and channels.
- Demonstration that FilterMoE robustly outperforms strong PP-GNN baselines across 11 benchmark datasets, improving average test scores by 1.53 points and winning on 9 datasets.
- Extensive ablations quantifying the effects of node adaptivity, channel adaptivity, routing design, diffusion operator choice, and auxiliary regularization.

## About the professor

**Zhiru Zhang** — Professor, School of Electrical and Computer Engineering, Cornell University.

Research interests: new algorithms, methodologies, and design automation tools for heterogeneous computing systems; high-level synthesis (HLS); hardware specialization for machine learning; programming models for software-defined FPGAs

### Research links

- [Faculty/profile page](http://www.csl.cornell.edu/~zhiruz)
- [Resolved homepage](https://www.csl.cornell.edu/~zhiruz/index.html)
- [Lab website](http://www.csl.cornell.edu/)
- [LinkedIn](https://www.linkedin.com/company/cornell-zhang-group)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Signal Processing
**The paper assumes:** spectral graph theory, graph signal processing, polynomial graph filters, Chebyshev filter approximation
**Already in this field?** Skip this entirely if you already understand spectral graph theory and graph signal processing concepts including polynomial filter design on graphs.

Understanding graph signal processing is essential for grasping the core mechanism of FilterMoE, which relies on spectral graph filters and Chebyshev polynomial approximations for adaptive filtering on graphs. The rigorous course option provides a deep, university-level foundation in matrix methods and spectral techniques relevant to graph signal processing, while the fast track offers a concise, intuition-driven introduction to graph signal processing concepts suitable for quickly building the necessary background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.065 Matrix Methods in Data Analysis, Signal Processing, and Machine Learning, Spring 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k) — MIT OpenCourseWare

**Watch only this:** Lectures 1-6, about 4.5 hours — covering matrix basics, eigenvalues, spectral decompositions, and polynomial approximations relevant to graph filters.

*Why it unblocks this paper:* MIT 18.065 covers matrix methods in data analysis, signal processing, and machine learning, providing rigorous mathematical foundations including spectral methods that underpin graph signal processing and polynomial filter approximations like Chebyshev filters used in FilterMoE.

*If you want all of it:* Entire playlist (all lectures), approximately 12+ hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Signal Processing](https://www.youtube.com/playlist?list=PLeMXQeoNccrjCFyCUUpvAkCcsREa88WFQ) — Liang Zhang · 11 videos

**Watch only this:** Episodes 1-5, about 1.5 hours — covering graph signal basics, spectral graph theory, and graph filters including polynomial filters.

*Why it unblocks this paper:* Liang Zhang's Graph Signal Processing playlist offers a clear, concise introduction to the fundamental concepts of graph signals and spectral filtering, ideal for quickly understanding the key ideas behind FilterMoE's adaptive filtering approach.

*If you want all of it:* All 11 episodes, approximately 3.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FilterMoE paper, start with foundational knowledge in graph signal processing to grasp spectral graph filters and Chebyshev polynomials. Next, study mixture-of-experts models to comprehend the adaptive routing mechanism central to FilterMoE. Then, learn about graph neural network filter design to understand coefficient sharing across nodes and channels. Finally, focus on the core concept of joint node-channel adaptive filtering as introduced by the paper, prioritizing the authors' own talk if available.

### Graph signal processing lecture *(prerequisite)*
Graph signal processing (GSP) provides the mathematical foundation for spectral graph filters and polynomial filter approximations like Chebyshev polynomials, which are key to FilterMoE's filter experts. Understanding GSP helps in grasping how graph signals are transformed and filtered in the spectral domain.

*How the paper uses it:* FilterMoE uses a bank of Chebyshev polynomial filter experts, a concept rooted in graph signal processing.

▶ [GRAPH SIGNAL PROCESSING FOR MACHINE LEARNING ...](https://www.youtube.com/watch?v=iWq5XKtJodU) — USC Information Sciences Institute · 1:03:34

### Mixture of experts models lecture *(prerequisite)*
Mixture-of-experts (MoE) architectures enable adaptive routing of inputs to specialized sub-models, improving model capacity and flexibility. Understanding MoE is crucial to grasp how FilterMoE routes node-channel pairs over a shared filter bank.

*How the paper uses it:* FilterMoE employs a mixture-of-experts approach to learn adaptive graph filters jointly across nodes and channels.

▶ [Mixture of Experts (MoE), Visually Explained](https://www.youtube.com/watch?v=0QQlYR1r6pQ) — Jia-Bin Huang · 31:46

### Graph neural network filter design lecture *(prerequisite)*
This topic covers how graph neural networks design and share filter coefficients across nodes and feature channels, which is central to understanding the limitations of existing PP-GNNs and the novelty of FilterMoE's joint node-channel adaptive filtering.

*How the paper uses it:* The paper analyzes how existing PP-GNNs differ mainly in coefficient sharing across nodes and channels, motivating FilterMoE's design.

▶ [Xavier Bresson: "Convolutional Neural Networks on Graphs"](https://www.youtube.com/watch?v=v3jZRkvIOIM) — Institute for Pure & Applied Mathematics (IPAM) · 40:48

### Node-channel adaptive filtering lecture
This concept focuses on the joint adaptation of filters across both nodes and feature channels, which is the core innovation of FilterMoE. Understanding this enables comprehension of how FilterMoE achieves improved accuracy and scalability.

*How the paper uses it:* FilterMoE introduces joint node-channel routing for adaptive filtering, a previously missing regime in PP-GNNs.

▶ [ADL4CV:DV - Graph neural networks and attention](https://www.youtube.com/watch?v=zUnr24d1PDw) — Dynamic Vision and Learning Group · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FilterMoE paper, start by building foundational knowledge of graph signal processing, which explains how signals on graphs can be filtered and analyzed. Next, learn about graph neural networks with pre-propagation to grasp how graph structure is decoupled from training for scalability. Then, study mixture-of-experts models to understand the adaptive routing mechanism FilterMoE uses. Finally, focus on the core concept of joint node-channel adaptive filtering, which enables FilterMoE's improved accuracy and efficiency.

### Graph signal processing lecture *(prerequisite)*
Graph signal processing (GSP) extends classical signal processing concepts to data defined on irregular graph structures. It introduces spectral graph filters and Chebyshev polynomials, which are key to understanding how graph filters operate in FilterMoE.

*How the paper uses it:* FilterMoE uses a bank of Chebyshev polynomial spectral filters to adaptively filter graph signals across nodes and channels.

▶ [A Brief Introduction to Graph Signal Processing and Its ...](https://www.youtube.com/watch?v=7DV1TU_jtBg) — Preferred Networks · 59:51

### Graph neural networks pre-propagation lecture *(prerequisite)*
Pre-propagation GNNs preprocess graph structure once to compute hop features, enabling efficient training by avoiding repeated message passing. Understanding this approach is essential to appreciate FilterMoE's scalability benefits.

*How the paper uses it:* FilterMoE preserves the pre-propagation training contract, maintaining efficiency while improving adaptive filtering.

▶ [Graph Neural Networks (GNN) | Nodes, Edges, Adjacency Matrix, Message Passing, Aggregation explained](https://www.youtube.com/watch?v=m-pttXkgXrs) — Vizuara · 2 years ago

### Mixture of experts models lecture *(prerequisite)*
Mixture-of-experts (MoE) models combine multiple specialized sub-models (experts) and use a gating mechanism to route inputs to the most relevant experts. This concept underpins FilterMoE's adaptive filter routing across nodes and channels.

*How the paper uses it:* FilterMoE routes each node-channel pair over a shared bank of Chebyshev filter experts via a 3D gating tensor.

▶ [Mixture of Experts (MoE), Visually Explained](https://www.youtube.com/watch?v=0QQlYR1r6pQ) — Jia-Bin Huang · 31:46

## Already in your library

- [Particle Filters Basic Idea](https://www.youtube.com/watch?v=_LjBba2hnfk) — also for: Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling (Ramesh Raskar)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 4: Mixture of experts](https://www.youtube.com/watch?v=LPv1KfUXLCo) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Stanford CS25: V1 I Mixture of Experts (MoE) paradigm and ...](https://www.youtube.com/watch?v=U8J32Z3qV8s) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [A Visual Guide to Mixture of Experts (MoE) in LLMs](https://www.youtube.com/watch?v=sOPDGQjFcuM) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the FilterMoE paper. The beginner project focuses on reproducing a core mechanism of node-channel adaptive filtering on a small synthetic graph using familiar tools. The intermediate project involves implementing the FilterMoE method from the paper on a public node classification dataset, comparing it to a simple baseline, and reporting accuracy improvements. The advanced project extends FilterMoE to a new graph learning task—link prediction—addressing one of the paper's stated limitations and exploring routing adaptations.

### Beginner — Node-Channel Adaptive Filter Routing on a Small Synthetic Graph
*Effort: a weekend, ~8 hours*

You build a small Python script that implements the core idea of FilterMoE's joint node-channel routing mechanism on a synthetic graph with a few nodes and feature channels. You create a small bank of Chebyshev polynomial filters and a simple 3D gating tensor to route node-channel pairs to filter experts, then visualize the routing weights and filtered features.

**Why it shows you understood the paper:** This project shows you understand the key mechanism of joint node-channel adaptive filtering and how FilterMoE routes filter experts, which is central to the paper's contribution.

**Grounded in:** Proposal of FilterMoE, a mixture-of-experts PP-GNN that routes a shared bank of Chebyshev filter experts jointly over nodes and channels.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic small graph with 10 nodes and 5 feature channels created programmatically.

**Build it:**

1. Generate a small synthetic graph adjacency matrix and node feature matrix with multiple channels.
2. Implement a small bank of Chebyshev polynomial filters (e.g., order 3) as matrices.
3. Create a 3D gating tensor that assigns routing weights for each node-channel pair to filter experts.
4. Apply the mixture-of-experts filtering by combining filter experts weighted by the gating tensor.
5. Visualize the gating tensor and resulting filtered features to demonstrate node-channel adaptivity.

**Ships as:** A Jupyter notebook showing the synthetic graph, filter expert bank, gating tensor visualization, and filtered feature outputs with explanations.

**Stretch goal:** Add a simple MLP router to learn gating weights from node and channel embeddings instead of fixed random routing.

### Intermediate — Reimplement FilterMoE on Cora Dataset with Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You implement the core FilterMoE method described in the paper from scratch in Python using PyTorch. You apply it to the well-known Cora citation network dataset for node classification, comparing FilterMoE's joint node-channel adaptive filtering to a simpler baseline that uses node-only or channel-only routing. You report classification accuracy and visualize routing patterns.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method and reproduce its key claim that joint node-channel routing outperforms simpler routing schemes on a real benchmark.

**Grounded in:** Demonstration that FilterMoE robustly outperforms strong PP-GNN baselines across 11 benchmark datasets; Joint node-channel routing outperforms node-only or channel-only routing variants.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, Matplotlib

**Data:** Cora citation network dataset (publicly available), used as a substitute for the paper's node classification benchmarks.

**Build it:**

1. Load and preprocess the Cora dataset using PyTorch Geometric.
2. Implement a small bank of Chebyshev polynomial filter experts as described in the paper.
3. Implement the 3D gating tensor router for joint node-channel routing, and also implement node-only and channel-only routing variants.
4. Train FilterMoE on the pre-propagated features and evaluate node classification accuracy.
5. Compare results against a simple baseline PP-GNN aggregator (e.g., SIGN or MLP-based aggregator).
6. Visualize routing weights and report accuracy improvements.

**Ships as:** A GitHub repository with code to train and evaluate FilterMoE on Cora, comparison plots of accuracy, and a README explaining the method and results.

**Stretch goal:** Add the response-aware two-stage router design from the paper and compare its performance to the direct MLP router.

### Advanced — Extending FilterMoE to Link Prediction on a Dynamic Graph
*Effort: 3-4 weeks*

You extend the FilterMoE framework to the link prediction task, which the paper identifies as a limitation. You adapt the routing mechanism and decoding layers to predict edges rather than node labels. You apply your method to a publicly available dynamic graph dataset (e.g., a temporal citation or social network) and implement incremental updates to the filter bank to handle graph changes efficiently.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep comprehension of FilterMoE's design and the challenges of extending it beyond static node classification. It also demonstrates your ability to innovate and adapt the method to new tasks and data modalities.

**Grounded in:** Current work focuses on node classification on fixed, homogeneous graphs; Does not address link prediction or dynamic graphs; Future directions include extending FilterMoE to link prediction and dynamic graphs with incremental updates.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric Temporal, NumPy, Matplotlib

**Data:** A publicly available dynamic graph dataset suitable for link prediction, such as the UCI Network Data Repository's temporal datasets or a similar substitute.

**Build it:**

1. Select and preprocess a dynamic graph dataset for link prediction.
2. Adapt the FilterMoE architecture to output edge existence probabilities instead of node labels.
3. Implement incremental updates to the Chebyshev filter bank to handle graph changes without full recomputation.
4. Design or adapt a routing mechanism suitable for link prediction, possibly incorporating edge features or pairwise node-channel routing.
5. Train and evaluate the extended FilterMoE on link prediction metrics (e.g., AUC, average precision).
6. Compare performance and efficiency against a baseline dynamic GNN or static PP-GNN adapted for link prediction.

**Ships as:** A GitHub repository with code, training scripts, evaluation metrics, and a detailed README describing the extension, challenges, and results.

**Stretch goal:** Explore heterogeneous graph extensions by incorporating relation-specific filter banks or meta-path aware routing.

_The paper's authors did not release code or datasets; the intermediate and advanced projects require reimplementation from the paper's descriptions and use publicly available substitute datasets._
