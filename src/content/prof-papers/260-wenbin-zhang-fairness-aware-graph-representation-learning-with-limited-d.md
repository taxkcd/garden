---
title: "260 · Fairness-Aware Graph Representation Learning with Limited Demographic Information — Wenbin Zhang"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wenbin-zhang"
source_hash: "383964aeb129bcd566d7b90b90ffc467faf009559ba3cd9350500e8b141b4f81"
sequence: 260
generator: "outreach-garden: managed"
---

# 260 · Fairness-Aware Graph Representation Learning with Limited Demographic Information

## At a glance

- **Professor:** Wenbin Zhang
- **Institution:** Florida International University
- **Paper:** [Fairness-Aware Graph Representation Learning with Limited Demographic Information](https://arxiv.org/pdf/2511.13540)
- **Authors:** Zichong Wang, Zhipeng Yin, Liping Yang, Jun Zhuang, Rui Yu, Qingzhao Kong, Wenbin Zhang
- **Year:** 2025

## Paper overview

This paper presents FairGLite, a novel framework for learning fair graph neural network representations when demographic information is incomplete or limited. It addresses the challenge of mitigating bias in graph-based machine learning models without full demographic data, which is often unavailable due to privacy or legal reasons. FairGLite uses partial demographic data to generate proxies, applies fairness constraints selectively based on confidence in demographic predictions, and provides theoretical guarantees for fairness. Experiments on real-world datasets show that FairGLite improves fairness while maintaining predictive accuracy.

### Why it matters

**Research problem:** Existing fairness-aware graph learning methods assume full access to demographic information, which is rarely available in practice due to privacy, legal, or ethical constraints. This limits the applicability of these methods in real-world scenarios where demographic data is incomplete or missing. The problem is how to design graph neural network algorithms that ensure fairness with limited demographic information and provide theoretical fairness guarantees.

**Why it matters:** Graph Neural Networks are widely used in high-stakes applications like healthcare, social networks, and finance, where biased predictions can lead to unfair or discriminatory outcomes. Ensuring fairness in these models is critical for trustworthy and socially responsible AI. However, demographic data required for fairness is often unavailable, making existing methods impractical. Addressing fairness under limited demographic data is essential for deploying fair AI systems in real-world sensitive domains.

**Key contributions:**

- Address the challenge of fair graph learning with incomplete demographics via a proxy-based framework with tailored fairness constraints.
- Introduce an adaptive confidence strategy to balance fairness and utility by weighting nodes according to demographic prediction confidence.
- Provide theoretical analysis establishing upper bounds on fairness metrics, offering formal fairness guarantees.
- Demonstrate effectiveness on four real-world graph datasets, achieving strong bias mitigation while maintaining comparable utility to state-of-the-art methods.

## About the professor

**Wenbin Zhang** — Assistant Professor, Knight Foundation School of Computing and Information Sciences, Florida International University.

Research interests: designing machine learning algorithms that provide theoretical performance guarantees and aligning them with human values and societal goals, making machine learning usable for high-stakes decision-making in areas like healthcare, digital forensics, finance, climate, policy, and law

### Research links

- [Faculty/profile page](https://users.cs.fiu.edu/~wbzhang)
- [Resolved homepage](https://users.cs.fiu.edu/~wbzhang/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Fairness-Aware Graph Representation Learning with Limited Demographic Information," start by building a strong foundation in Graph Neural Networks (GNNs) as they are the fundamental architecture underlying the method. Next, study fairness in machine learning to grasp the core fairness concepts and metrics motivating the framework's constraints. Then, explore semi-supervised learning techniques relevant to learning from limited demographic labels, followed by adaptive confidence weighting strategies that balance fairness constraints based on prediction confidence. Finally, focus on the paper's core topic of fairness-aware graph representation learning, including the authors' own talks and related advanced research presentations.

### Graph neural networks *(prerequisite)*
Graph Neural Networks form the backbone of the representation learning approach used in FairGLite. Understanding message-passing paradigms, graph convolutions, and the theoretical foundations of GNNs is essential to grasp how node features and graph structure are encoded and manipulated.

*How the paper uses it:* FairGLite builds on graph neural networks to learn node representations that are fair under limited demographic information.

▶ [EPFL AI Center - A Physical perspective on Graph Neural ...](https://www.youtube.com/watch?v=kEyLUY8A5zo) — EPFL School of Computer and Communication Sciences · 54:43

### Fairness in machine learning *(prerequisite)*
This section covers the fundamental definitions and theoretical underpinnings of algorithmic fairness, including group fairness metrics like Demographic Parity and Equal Opportunity. Understanding these concepts is critical to appreciate the fairness constraints and guarantees proposed in FairGLite.

*How the paper uses it:* FairGLite applies fairness constraints and provides theoretical guarantees on fairness metrics, making this foundational knowledge crucial.

▶ [What and how in algorithmic fairness](https://www.youtube.com/watch?v=IhpNRHh3sSI) — Simons Institute for the Theory of Computing · 55:36

### Semi-supervised learning with limited labels *(prerequisite)*
Semi-supervised learning techniques enable learning from partially labeled data, which is directly relevant to FairGLite's approach of generating demographic proxies from limited demographic labels. This section provides insights into graph-based semi-supervised methods and their theoretical properties.

*How the paper uses it:* FairGLite's demographic identification module relies on semi-supervised learning to infer missing demographic information from partial labels.

▶ [MLSS 2012: Z. Ghahramani - Lecture 3: Graph based semi ...](https://www.youtube.com/watch?v=HZQOvm0fkLA) — ML talks · 1:07:17

### Adaptive confidence weighting in learning *(prerequisite)*
Adaptive confidence weighting strategies allow models to modulate the strength of constraints or learning signals based on the confidence of predictions. This concept is key to FairGLite's adaptive confidence strategy module, which balances fairness constraints according to demographic prediction confidence.

*How the paper uses it:* FairGLite uses an adaptive confidence strategy to apply fairness constraints selectively, improving the trade-off between fairness and utility.

▶ [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) — StatQuest with Josh Starmer · 18:08

### Fairness-aware graph representation learning
This section focuses on advanced methods for learning fair graph embeddings under demographic constraints, including algorithmic foundations and state-of-the-art approaches. It provides context and technical depth directly related to the paper's contributions.

*How the paper uses it:* FairGLite is a novel fairness-aware graph representation learning framework addressing fairness with limited demographic information.

▶ [#07 - Jian Kang (UIUC) - Algorithmic Foundation of Fair Graph Mining](https://www.youtube.com/watch?v=1ZYExQpdyIw) — DEFirst Reading Group - MILA x Vector · 3 years ago

### FairGLite authors talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed insights into the FairGLite framework, including motivation, methodology, theoretical analysis, and experimental results. These talks are invaluable for understanding the nuances and innovations of the paper.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on their novel framework FairGLite.

▶ [Demystifying and Mitigating Unfairness for Machine Learning over Graphs](https://www.youtube.com/watch?v=hQJdbD_jKCw) — Communications and Signal Processing Seminar Series · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand FairGLite, start by learning the fundamentals of Graph Neural Networks (GNNs), which are the core models used for graph representation learning. Next, grasp the basics of fairness in machine learning, focusing on fairness metrics and why fairness constraints matter. Then, explore semi-supervised learning techniques relevant to learning from limited demographic labels, followed by understanding adaptive confidence weighting strategies that balance fairness constraints based on prediction confidence. Finally, dive into fairness-aware graph representation learning methods, which directly relate to the paper's novel framework.

### Graph neural networks *(prerequisite)*
Graph Neural Networks (GNNs) are specialized neural networks designed to work with graph-structured data. They learn node representations by aggregating information from neighbors, capturing both node features and graph structure. Understanding GNNs is essential because FairGLite builds on these models to learn fair node embeddings.

*How the paper uses it:* FairGLite uses graph neural networks as the backbone to encode graph features and generate demographic proxies.

▶ [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — Microsoft Research · 59:00

### Fairness in machine learning *(prerequisite)*
Fairness in machine learning involves ensuring that models do not produce biased or discriminatory outcomes across different demographic groups. Key fairness metrics like Demographic Parity and Equal Opportunity quantify these biases. Learning these concepts helps understand why FairGLite applies fairness constraints and how it measures success.

*How the paper uses it:* FairGLite targets fairness metrics such as Demographic Parity and Equal Opportunity to mitigate bias in graph learning.

▶ [What and how in algorithmic fairness](https://www.youtube.com/watch?v=IhpNRHh3sSI) — Simons Institute for the Theory of Computing · 55:36

### Semi-supervised learning with limited labels *(prerequisite)*
Semi-supervised learning leverages both labeled and unlabeled data to improve learning when labels are scarce. Graph-based semi-supervised methods use graph structure to propagate label information. This is relevant because FairGLite generates demographic proxies from limited demographic labels using graph encoders.

*How the paper uses it:* FairGLite’s demographic identification module uses graph-based semi-supervised learning to infer missing demographic labels.

▶ [MLSS 2012: Z. Ghahramani - Lecture 3: Graph based semi ...](https://www.youtube.com/watch?v=HZQOvm0fkLA) — ML talks · 1:07:17

### Fairness-aware graph representation learning
Fairness-aware graph representation learning focuses on learning node embeddings that are both predictive and fair with respect to sensitive attributes. This involves designing fairness constraints and mitigation strategies tailored for graph data. This concept is central to understanding FairGLite’s novel framework and its contributions.

*How the paper uses it:* FairGLite proposes a proxy-based fairness-aware graph learning framework that mitigates bias with limited demographic information.

▶ [#07 - Jian Kang (UIUC) - Algorithmic Foundation of Fair Graph Mining](https://www.youtube.com/watch?v=1ZYExQpdyIw) — DEFirst Reading Group - MILA x Vector · 3 years ago

## Already in your library

- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [MIT 6.S191: AI Bias and Fairness](https://www.youtube.com/watch?v=wmyVODy_WD8) — also for: The Potential of Diverse Youth as Stakeholders in Identifying and Mitigating Algorithmic Bias for a Future of Fairer AI (Amy E. Ogan)
- [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Practical Individual Fairness Algorithms](https://www.youtube.com/watch?v=WiWsJh1peoA) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and demonstrating the core ideas of FairGLite, a fairness-aware graph neural network framework designed for limited demographic information. The beginner project reproduces a basic fairness metric on a small graph dataset to grasp fairness concepts. The intermediate project implements the core FairGLite method on a public graph dataset with partial demographic labels, comparing fairness and accuracy against a simple baseline. The advanced project extends FairGLite to handle multi-class demographic attributes, addressing a stated limitation and exploring new fairness constraints.

### Beginner — Fairness Metrics on Graph Node Classification with Partial Demographics
*Effort: a weekend, ~8 hours*

You build a small graph node classification pipeline using a public graph dataset with synthetic partial demographic labels. You implement and compute basic fairness metrics such as Demographic Parity and Equal Opportunity on the node classification outputs, simulating limited demographic information by masking some labels. This project focuses on understanding fairness metrics and their calculation in graph settings.

**Why it shows you understood the paper:** This project shows you understand the challenge of fairness evaluation under limited demographic data and how fairness metrics apply to graph node classification, a foundational aspect of the paper.

**Grounded in:** Key results: FairGLite consistently outperforms baseline methods in fairness metrics (Demographic Parity and Equal Opportunity) across datasets.

**Tech stack:** Python 3.11, PyTorch Geometric, scikit-learn, NetworkX, Jupyter Notebook

**Data:** Use the publicly available Cora or Citeseer citation network dataset as a substitute for the paper's datasets; simulate partial demographic labels by randomly masking demographic attributes.

**Build it:**

1. Load a public citation network dataset (e.g., Cora) with node features and labels.
2. Assign synthetic binary demographic attributes to nodes and randomly mask a portion to simulate limited demographic information.
3. Train a simple graph neural network (e.g., GCN) for node classification ignoring fairness constraints.
4. Implement Demographic Parity and Equal Opportunity metrics to evaluate model fairness on nodes with known demographics.
5. Analyze how masking demographic labels affects fairness metric computation and report results.

**Ships as:** A Jupyter notebook demonstrating fairness metric calculations on graph node classification with partial demographic labels, including plots and explanations.

**Stretch goal:** Add a simple demographic proxy generation step using node features to impute missing demographics and re-evaluate fairness metrics.

### Intermediate — Reimplementation of FairGLite Core Framework on a Public Graph Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core FairGLite framework as described in the paper: (1) demographic proxy generation from partial labels and graph features, (2) fair node representation learning with masking vectors and fairness constraints, and (3) adaptive confidence weighting of fairness constraints. You apply this to a public graph dataset with synthetic partial demographics and compare fairness and accuracy against a baseline GNN without fairness constraints.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method from its description, showing comprehension of its modules and how they interact to improve fairness under limited demographic data.

**Grounded in:** Key contributions: Introduce a proxy-based framework with tailored fairness constraints and an adaptive confidence strategy balancing fairness and utility.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use a public citation network dataset (e.g., Cora or Citeseer) with synthetic binary demographic attributes partially masked to simulate limited demographic information.

**Build it:**

1. Implement a graph encoder to generate proxy demographic labels from partial known demographics and node features.
2. Implement learnable masking vectors applied to node features to reduce demographic identifiability while preserving task-relevant information.
3. Incorporate fairness, information preservation, and graph reconstruction constraints into the training loss.
4. Implement an adaptive confidence strategy that weights fairness constraints based on the confidence of demographic proxy predictions.
5. Train the model and evaluate node classification accuracy and fairness metrics (Demographic Parity, Equal Opportunity) compared to a baseline GNN without fairness constraints.
6. Document results and analyze the impact of each module via ablation.

**Ships as:** A GitHub repository with code implementing FairGLite core modules, training scripts, evaluation notebooks, and a README explaining the method and results.

**Stretch goal:** Experiment with varying levels of demographic label sparsity and analyze the robustness of fairness improvements.

### Advanced — Extending FairGLite to Multi-Class Demographic Attributes
*Effort: 3-4 weeks*

You extend the FairGLite framework to handle multi-class demographic attributes instead of binary ones, addressing a limitation noted in the paper. This involves adapting the demographic proxy generation, fairness constraints, and adaptive confidence strategy to multi-class settings. You evaluate the extended method on a public graph dataset with synthetic multi-class demographics and compare fairness and accuracy against the binary version and baseline methods.

**Why it shows you understood the paper:** This project shows deep understanding of the paper's limitations and the ability to innovate by extending the method to a more complex and realistic demographic setting, potentially contributing new insights to fairness-aware graph learning.

**Grounded in:** Limitations: The framework is evaluated on binary demographic settings; extension to multi-class demographics is not discussed.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use a public citation network dataset (e.g., Cora) with synthetic multi-class demographic attributes (e.g., 3 or more classes) partially masked to simulate limited demographic information.

**Build it:**

1. Modify the demographic proxy generation module to predict multi-class demographic labels using a suitable multi-class classifier.
2. Adapt fairness constraints (e.g., Demographic Parity, Equal Opportunity) to multi-class definitions.
3. Update the adaptive confidence strategy to handle multi-class confidence scores for weighting fairness constraints.
4. Train the extended FairGLite model on the dataset with multi-class demographics.
5. Evaluate and compare fairness metrics and classification accuracy against the original binary FairGLite and baseline GNN models.
6. Document challenges, solutions, and results in a detailed report.

**Ships as:** A GitHub repository with extended FairGLite code supporting multi-class demographics, evaluation scripts, and a comprehensive README detailing the extension and experimental findings.

**Stretch goal:** Explore integrating privacy-preserving techniques (e.g., differential privacy) into the demographic proxy generation to further protect sensitive information.
