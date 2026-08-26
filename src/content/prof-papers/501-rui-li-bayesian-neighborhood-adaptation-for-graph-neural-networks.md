---
title: "501 · Bayesian Neighborhood Adaptation for Graph Neural Networks — Rui Li"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rui-li"
source_hash: "97178914215bda1402f17a8e7fb7218ada15a0e87a9e00eca8cad65972c7c9bf"
sequence: 501
generator: "outreach-garden: managed"
---

# 501 · Bayesian Neighborhood Adaptation for Graph Neural Networks

## At a glance

- **Professor:** Rui Li
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Bayesian Neighborhood Adaptation for Graph Neural Networks](https://doi.org/10.48550/arXiv.2602.05358)
- **Authors:** Paribesh Regmi, Rui Li, Kishan KC
- **Year:** 2025

## Paper overview

This paper proposes a Bayesian method to automatically determine the optimal neighborhood scope (number of hops) for message aggregation in graph neural networks (GNNs). Instead of manually tuning or exhaustively searching neighborhood sizes, the method models neighborhood scope as a beta process, allowing adaptive and simultaneous learning of neighborhood size and GNN parameters. This approach improves GNN performance on both homophilic and heterophilic graphs, enhances model expressivity especially in deep networks, and provides better uncertainty calibration. The method is validated on benchmark datasets and a real-world protein-protein interaction network.

### Why it matters

**Research problem:** Determining the appropriate neighborhood scope (number of hops) for message aggregation in GNNs is critical but traditionally done via costly and biased two-stage search processes. Existing methods lack an automatic, adaptive mechanism to infer neighborhood scope, especially for both homophilic and heterophilic graphs.

**Why it matters:** Neighborhood scope directly impacts GNN performance: too small limits long-range information capture, too large degrades expressivity and increases computation. Automatically adapting neighborhood scope improves efficiency, accuracy, and robustness of GNNs, which are widely used in computational biology, social network analysis, and other domains.

**Key contributions:**

- Propose a general Bayesian inference strategy to automatically infer neighborhood scopes for GNN message passing.
- Develop an efficient stochastic variational approximation to jointly infer neighborhood scopes and learn node representations.
- Provide theoretical analysis showing improved expressivity of GNNs with adaptive neighborhood inference.
- Demonstrate empirical performance gains on node classification tasks for both homophilic and heterophilic graphs.
- Show improved uncertainty calibration and robustness in GNN predictions.

## About the professor

**Rui Li** — Associate Professor, Department of Computing and Information Sciences, Rochester Inst. of Technology.

Research interests: statistical machine learning, AI, computational biology, medical image understanding, human visual attention

### Research links

- [Faculty/profile page](https://www.rit.edu/directory/rxlics-rui-li)
- [Professor website](https://ruililuci.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian Nonparametrics
**The paper assumes:** Bayesian nonparametric models, beta processes, stochastic variational inference, and Bayesian inference principles
**Already in this field?** Skip this entirely if you already understand Bayesian nonparametric methods and variational inference in probabilistic machine learning.

This background focuses on Bayesian Nonparametrics, essential for understanding the paper's core method of modeling neighborhood scope in graph neural networks using a beta process prior and stochastic variational inference. The rigorous course option offers a deep, mathematical foundation suitable for readers wanting a thorough grasp of Bayesian nonparametrics, while the fast track provides a concise, intuition-driven introduction to the key concepts, ideal for those with limited time.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bayesian Nonparametric](https://www.youtube.com/playlist?list=PLOgQzez42bSYsY8XtkyxoNCZYH2U0mepu) — Rakib Al-Fahad · 8 videos · 4.0h across 8 episodes

**Watch only this:** Episodes 1, 3, and 5: 'Continuous Distributions: Beta and Dirichlet Distributions', 'Machine Learning: Variational Inference', and 'Variational Inference: Foundations and Innovations', about 1.5 hours total — these episodes cover the essential distributions and inference techniques underpinning the paper's Bayesian framework.

*Why it unblocks this paper:* This short playlist by Rakib Al-Fahad covers Bayesian nonparametrics and related foundational topics such as beta and Dirichlet distributions and variational inference, providing a clear, visual, and concise introduction to the key concepts needed to grasp the paper's method.

*If you want all of it:* All 8 episodes, about 4.0 hours total — for a broader but still concise overview of Bayesian nonparametrics and related machine learning concepts.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Bayesian Neighborhood Adaptation for Graph Neural Networks," start by building a solid foundation on the key prerequisite topics: graph neural networks' message passing mechanism, nonparametric Bayesian methods, stochastic variational inference, and uncertainty quantification in GNNs. These topics provide the theoretical and methodological background necessary to grasp the paper's novel Bayesian approach. Finally, focus on the core concept of Bayesian neighborhood scope inference and the authors' own talk to directly connect with the paper's contributions and innovations.

### Graph neural networks message passing *(prerequisite)*
Understanding message passing is fundamental to grasp how GNNs aggregate information from neighbors, which is the mechanism the paper aims to adaptively optimize. The Stanford CS224W lecture by Jure Leskovec provides a rigorous, graduate-level introduction to message passing and node classification in graphs, making it highly relevant and academically substantive.

*How the paper uses it:* The paper modifies the message passing neighborhood scope in GNNs to improve performance and expressivity.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 5.1 - Message passing and Node Classification](https://www.youtube.com/watch?v=6g9vtxUmfwM) — Stanford Online · 18:34 · 5 years ago

### Nonparametric Bayesian methods *(prerequisite)*
Nonparametric Bayesian methods underpin the paper's modeling of neighborhood scope as a beta process over infinite hops. The MIT OpenCourseWare lecture '17. Bayesian Statistics' by Philippe Rigollet offers a comprehensive and mathematically rigorous treatment of Bayesian inference and priors, suitable for advanced learners.

*How the paper uses it:* The paper uses a beta process prior, a nonparametric Bayesian method, to model neighborhood scopes in GNNs.

▶ [17. Bayesian Statistics](https://www.youtube.com/watch?v=bFZ-0FH5hfs) — MIT OpenCourseWare · 1:18:05 · 9 years ago

### Stochastic variational inference *(prerequisite)*
Stochastic variational inference is the key technique the paper employs to jointly infer neighborhood scope and GNN parameters efficiently. The Stanford CS330 lecture on Variational Inference and Generative Models provides a detailed, graduate-level explanation of variational inference methods, including amortized inference, which aligns well with the paper's approach.

*How the paper uses it:* The paper uses stochastic variational inference to perform joint Bayesian inference over neighborhood scopes and GNN parameters.

▶ [Stanford CS330 I Variational Inference and Generative Models l 2022 I Lecture 11](https://www.youtube.com/watch?v=iL1c1KmYPM0) — Stanford Online · 1:18:12 · 3y ago

### Uncertainty quantification in GNNs *(prerequisite)*
Improved uncertainty calibration is a key result of the paper, making understanding uncertainty quantification in GNNs important. The Stanford CS224W lecture on Training Graph Neural Networks covers methods for training GNNs with uncertainty considerations, providing an advanced and relevant perspective.

*How the paper uses it:* The paper demonstrates improved uncertainty calibration in GNN predictions through its Bayesian framework.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 8.2 - Training Graph Neural Networks](https://www.youtube.com/watch?v=eXIIH8YVxKI) — Stanford Online · 40:19 · 5 years ago

### Bayesian neighborhood scope inference
This is the core methodological innovation of the paper, enabling automatic adaptive neighborhood size learning in GNNs via a Bayesian framework. While no direct author talk on this exact method was found, the talk 'Graph Structure Learning with Interpretable Bayesian Neural Networks' by Max Wasserman is a recent, research-level presentation that closely relates to Bayesian approaches in graph neural networks and provides valuable insights into interpretable Bayesian graph learning.

*How the paper uses it:* The paper's central contribution is a Bayesian inference strategy for adaptive neighborhood scope in GNN message passing.

▶ [Graph Structure Learning with Interpretable Bayesian Neural Networks](https://www.youtube.com/watch?v=zcYD-r8DlUI) — Max Wasserman · 25:42 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Bayesian Neighborhood Adaptation for Graph Neural Networks, start by learning the fundamental mechanism of message passing in GNNs, which is the core operation modified by the paper's method. Next, build intuition on nonparametric Bayesian methods that provide the theoretical foundation for modeling infinite neighborhood hops. Then, grasp stochastic variational inference, the key technique used to jointly infer neighborhood scope and GNN parameters. Finally, focus on the paper's core concept of Bayesian neighborhood scope inference, which enables automatic adaptive neighborhood size learning in GNNs.

### Graph neural networks message passing *(prerequisite)*
Message passing is the fundamental process in GNNs where nodes aggregate information from their neighbors to update their representations. Understanding this mechanism is essential because the paper's method adapts how far (how many hops) this message passing extends.

*How the paper uses it:* The paper modifies the message passing neighborhood scope to improve GNN performance.

▶ [Message Passing: How Graph Neural Networks Actually Work](https://www.youtube.com/watch?v=1DmNdMUbDkg) — The Synthetic Mind · 7:39 · 2mo ago

### Nonparametric Bayesian methods *(prerequisite)*
Nonparametric Bayesian methods allow modeling with potentially infinite complexity, such as an unbounded number of neighborhood hops in a graph. This provides a flexible way to infer the neighborhood scope without fixing an upper limit.

*How the paper uses it:* The paper models neighborhood scope as a beta process, a nonparametric Bayesian prior over infinite hops.

▶ [Beginner's Guide to Nonparametric Bayesian Methods](https://www.youtube.com/watch?v=bxHmNOLyxq8) — Param Damle · 17:01 · 3 years ago

### Stochastic variational inference *(prerequisite)*
Stochastic variational inference is a scalable technique to approximate complex Bayesian posteriors by optimizing a simpler distribution using stochastic optimization. It is crucial for jointly inferring neighborhood scopes and GNN parameters efficiently.

*How the paper uses it:* The authors use stochastic variational inference to jointly infer neighborhood scope and GNN parameters.

▶ [Stanford CS330 I Variational Inference and Generative Models l 2022 I Lecture 11](https://www.youtube.com/watch?v=iL1c1KmYPM0) — Stanford Online · 1:18:12 · 3y ago

### Bayesian neighborhood scope inference
This concept involves automatically learning the optimal neighborhood size for message passing in GNNs using a Bayesian framework. It adapts the neighborhood scope during training, improving expressivity and performance without manual tuning.

*How the paper uses it:* This is the core method proposed by the paper to adaptively infer neighborhood scopes in GNNs.

▶ [Graph Structure Learning with Interpretable Bayesian Neural Networks](https://www.youtube.com/watch?v=zcYD-r8DlUI) — Max Wasserman · 25:42 · 2 years ago

## Already in your library

- [Introduction to Bayesian statistics, part 1: The basic concepts](https://www.youtube.com/watch?v=0F0QoMCSKJ4) — also for: Bayesian functional data analysis in astronomy (Tamás Budavári)
- [Bayesian Networks 1 - Inference | Stanford CS221: AI (Autumn ...](https://www.youtube.com/watch?v=U23yuPEACG0) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [L14.4 The Bayesian Inference Framework](https://www.youtube.com/watch?v=0w_4QcvBYII) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)
- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Graph Neural Networks (GNN) | Nodes, Edges, Adjacency Matrix, Message Passing, Aggregation explained](https://www.youtube.com/watch?v=m-pttXkgXrs) — also for: Gate the Filter, Not the Message: Node-Channel Mixtures for Pre-Propagation GNNs (Zhiru Zhang)
- [Lecture 11 - Graph Neural Networks (GNNs)](https://www.youtube.com/watch?v=FaqkCfv5LTg) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Intro to graph neural networks (ML Tech Talks)](https://www.youtube.com/watch?v=8owQBFAHw7E) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Variational Inference - Explained](https://www.youtube.com/watch?v=G5xcC5ABVjA) — also for: ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning (Tom Silver)
- [Variational Inference | Evidence Lower Bound (ELBO ...](https://www.youtube.com/watch?v=HxQ94L8n0vU) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Lecture 21: Variational Autoencoders](https://www.youtube.com/watch?v=LzEywGCT7-A) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Easy introduction to gaussian process regression (uncertainty models)](https://www.youtube.com/watch?v=iDzaoEwd0N0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Uncertainty Quantification (1): Enter Conformal Predictors](https://www.youtube.com/watch?v=xZbuFKWV5NA) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the Bayesian Neighborhood Adaptation (BNA) method for Graph Neural Networks (GNNs) from the paper. The beginner project reproduces a core mechanism of adaptive neighborhood weighting on a small graph, the intermediate project runs and extends the authors' released code on benchmark datasets to reproduce key results, and the advanced project explores extending the method to dynamic graphs, addressing a future direction stated in the paper.

### Beginner — Adaptive Neighborhood Weighting Visualization on a Small Graph
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements the core idea of Bayesian neighborhood scope adaptation by modeling contribution probabilities for neighbors at different hops using a beta distribution. You simulate a small graph (e.g., Zachary's Karate Club) and compute adaptive weights for 1-3 hop neighbors, visualizing how the model assigns importance across hops.

**Why it shows you understood the paper:** This project shows you grasp the fundamental Bayesian modeling of neighborhood scope and how contribution probabilities vary with hop distance, a key mechanism in the paper.

**Grounded in:** The authors model the neighborhood scope as a stochastic beta process prior over infinite hops, assigning contribution probabilities to neighbors at each hop.

**Tech stack:** Python 3.11, Jupyter Notebook, NetworkX, Matplotlib, NumPy

**Data:** Zachary's Karate Club graph from NetworkX as a small, well-known social network graph substitute.

**Build it:**

1. Load the Karate Club graph using NetworkX.
2. Implement a beta distribution-based weighting scheme for neighbors at 1, 2, and 3 hops.
3. Calculate contribution probabilities for neighbors at each hop using beta distribution parameters.
4. Visualize the graph with node colors or edge thickness representing contribution probabilities.
5. Write a brief explanation linking the visualization to the Bayesian neighborhood adaptation concept.

**Ships as:** A Jupyter notebook with code, visualizations of adaptive neighborhood weights, and explanations connecting to the paper's Bayesian neighborhood scope modeling.

**Stretch goal:** Add stochastic sampling of neighborhood scopes using a concrete Bernoulli distribution to simulate feature sampling as in the paper.

### Intermediate — Run and Extend Bayesian Neighborhood Adaptation on Benchmark Graphs
*Effort: 1-3 weekends, ~20 hours*

You clone and run the authors' official BNA-GNN implementation from their GitHub repository on a benchmark dataset such as Cora or Citeseer. You reproduce node classification accuracy and uncertainty calibration metrics reported in the paper. Then, you modify the code to compare performance with a fixed neighborhood size baseline to demonstrate the benefit of adaptive neighborhood inference.

**Why it shows you understood the paper:** This project demonstrates you can operate the authors' Bayesian neighborhood adaptation framework, reproduce their empirical results, and critically evaluate the adaptive neighborhood scope against a fixed baseline.

**Grounded in:** The method automatically infers neighborhood scope during training and achieves competitive or superior performance on node classification tasks.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, Jupyter Notebook

**Data:** Standard citation network datasets like Cora or Citeseer, commonly used in GNN research and supported by PyTorch Geometric.

**Build it:**

1. Clone the BNA-GNN repository from https://github.com/paribeshregmi/BNA-GNN.
2. Set up the environment with required dependencies (PyTorch, PyTorch Geometric).
3. Run the provided training scripts on a benchmark dataset (e.g., Cora) to reproduce node classification accuracy and calibration metrics.
4. Implement a baseline GNN with fixed neighborhood size (e.g., 2 hops) using the same codebase.
5. Compare and report accuracy and expected calibration error (ECE) between BNA-GNN and the fixed neighborhood baseline.
6. Document findings and link them to the paper's claims about adaptive neighborhood scope benefits.

**Verified links from the paper:**

- <https://github.com/paribeshregmi/BNA-GNN> — released by the paper's authors

**Ships as:** A GitHub repo fork with scripts to run BNA-GNN and baseline, a report notebook showing reproduced metrics and comparison, and a README explaining the results.

**Stretch goal:** Add ablation by varying the truncation level T to observe its effect on performance and training time.

### Advanced — Extending Bayesian Neighborhood Adaptation to Dynamic Graphs
*Effort: a few weeks, ~40+ hours*

You develop an extension of the Bayesian neighborhood adaptation framework to handle dynamic or temporal graphs where neighborhood relevance changes over time. You adapt the variational inference to incorporate temporal dynamics in neighborhood scope inference. You test this on a publicly available temporal graph dataset (e.g., the Wikipedia or Reddit temporal interaction graphs) and evaluate node classification or link prediction performance over time.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating deep comprehension of the Bayesian neighborhood adaptation method and the ability to innovate by applying it to dynamic graph scenarios relevant to computational biology and social networks.

**Grounded in:** Future directions include adopting the neighborhood adaptation strategy for dynamic or temporal graphs where neighborhood relevance may change over time.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric Temporal, Jupyter Notebook

**Data:** Public temporal graph datasets such as Wikipedia or Reddit temporal interaction graphs available in PyTorch Geometric Temporal or other repositories.

**Build it:**

1. Study the BNA-GNN codebase and identify components for neighborhood scope inference.
2. Incorporate temporal modeling by extending the beta process prior to vary over time steps or snapshots.
3. Modify the stochastic variational inference to jointly infer time-varying neighborhood scopes and GNN parameters.
4. Select a temporal graph dataset and preprocess it for node classification or link prediction tasks.
5. Train the extended model and evaluate performance metrics over time, comparing against static neighborhood baselines.
6. Document methodology, challenges, results, and potential biological or social network implications.

**Verified links from the paper:**

- <https://github.com/paribeshregmi/BNA-GNN> — released by the paper's authors

**Ships as:** A GitHub repository with the extended dynamic BNA-GNN implementation, training scripts, evaluation notebooks, and a detailed README discussing the extension and results.

**Stretch goal:** Explore uncertainty quantification improvements in the temporal setting and visualize how neighborhood scopes evolve over time.

_The intermediate and advanced projects depend on the authors' released code at https://github.com/paribeshregmi/BNA-GNN; verify it supports the chosen datasets and can be adapted for temporal graphs before starting._
