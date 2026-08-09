---
title: "344 · KGML-xDTD: A Knowledge Graph-based Machine Learning Framework for Drug Treatment Prediction and Mechanism Description — David Koslicki"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-koslicki"
source_hash: "6ee07c0f2d04def6ea484cb4632d55233a55cb066059c7b1608d8d9060f30401"
sequence: 344
generator: "outreach-garden: managed"
---

# 344 · KGML-xDTD: A Knowledge Graph-based Machine Learning Framework for Drug Treatment Prediction and Mechanism Description

## At a glance

- **Professor:** David Koslicki
- **Institution:** Pennsylvania State University
- **Paper:** [KGML-xDTD: A Knowledge Graph-based Machine Learning Framework for Drug Treatment Prediction and Mechanism Description](https://arxiv.org/abs/2212.01384v2)
- **Authors:** Chunyu Ma, Zhihan Zhou, Han Liu, David Koslicki
- **Year:** 2023

## Paper overview

This paper presents KGML-xDTD, a novel computational framework that predicts which existing drugs can treat diseases and explains how they work biologically. It uses a large biomedical knowledge graph combined with machine learning and reinforcement learning to identify drug-disease treatment relationships and the underlying mechanisms of action. The framework improves prediction accuracy and provides interpretable explanations, which can accelerate drug repurposing especially for emerging diseases.

### Why it matters

**Research problem:** Computational drug repurposing methods often lack biological explanations for their predictions, limiting their clinical adoption. Existing models either do not scale well to large biomedical knowledge graphs or fail to provide interpretable mechanisms of action (MOAs) between drugs and diseases.

**Why it matters:** Drug repurposing offers a faster, cheaper alternative to traditional drug discovery, critical for addressing emerging and orphan diseases. However, without understanding the underlying MOAs, clinicians and researchers have low confidence in computational predictions, hindering their practical use.

**Key contributions:**

- Development of a scalable framework that predicts drug-disease treatment relationships with high accuracy using combined graph embeddings and Random Forest classification.
- Introduction of a reinforcement learning-based module that identifies biologically plausible mechanism of action paths in a massive biomedical knowledge graph.
- Use of demonstration paths extracted from curated drug-target databases and publication-based metrics to guide reinforcement learning for biologically meaningful explanations.
- Comprehensive evaluation showing state-of-the-art performance in both drug repurposing prediction and MOA path identification compared to multiple baselines.
- Provision of interpretable, path-based explanations that can increase confidence in computational drug repurposing predictions.

## About the professor

**David Koslicki** — Pennsylvania State University.

Research interests: developing efficient, mathematically sound approaches to extract insight from omics data; computational biology methods

### Research links

- [Faculty/profile page](https://koslickilab.github.io/Koslicki-lab-PSU)
- [Resolved homepage](https://koslickilab.github.io/Koslicki-lab-PSU/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the KGML-xDTD framework, start with foundational knowledge in graph representation learning and reinforcement learning for path finding, as these underpin the machine learning and RL modules in the paper. Next, gain insights into biomedical knowledge graphs and Random Forest classification in bioinformatics to appreciate the data and prediction techniques used. Finally, focus on the core concept of knowledge graph-based drug repurposing and the authors' own talk or closest available presentations to grasp the specific innovations and applications of KGML-xDTD.

### Graph representation learning *(prerequisite)*
Graph representation learning provides the theoretical and practical foundation for embedding nodes and edges in knowledge graphs, which is critical for the GraphSAGE embeddings used in KGML-xDTD's drug repurposing prediction module. Understanding these embeddings helps in grasping how relational biomedical data is transformed for machine learning.

*How the paper uses it:* KGML-xDTD uses GraphSAGE embeddings to represent nodes in the biomedical knowledge graph for drug-disease prediction.

▶ [Graph Representation Learning: William L. Hamilton - 2021 ...](https://www.youtube.com/watch?v=fbRDfhNrCwo) — McGill Artificial Intelligence Society · 59:32

### Reinforcement learning for path finding *(prerequisite)*
Reinforcement learning techniques, especially adversarial actor-critic methods, are central to KGML-xDTD's mechanism of action prediction module, which formulates MOA identification as a path-finding problem in the knowledge graph. Understanding RL fundamentals and path planning is essential to appreciate how the model finds biologically meaningful paths.

*How the paper uses it:* The MOA prediction module uses adversarial actor-critic reinforcement learning to find interpretable paths explaining drug mechanisms.

▶ [Planning with Reinforcement Learning](https://www.youtube.com/watch?v=T39xkKN7uwo) — RAIL · 42:22

### Biomedical knowledge graphs *(prerequisite)*
Biomedical knowledge graphs like RTX-KG2c provide the large-scale, structured biological data backbone for KGML-xDTD. Understanding their structure, scale, and role in integrating heterogeneous biomedical information is key to appreciating the data foundation of the framework.

*How the paper uses it:* KGML-xDTD relies on a customized version of the RTX-KG2c biomedical knowledge graph containing millions of nodes and edges.

▶ [Accelerating Drug Discovery With a Biomedical Knowledge ...](https://www.youtube.com/watch?v=wDq_Sxjc5Fw) — Memgraph · 57:49

### Random Forest classification in bioinformatics *(prerequisite)*
Random Forest classifiers are widely used in bioinformatics for robust prediction tasks. KGML-xDTD employs a Random Forest model on concatenated GraphSAGE embeddings to classify drug-disease treatment relationships, making understanding this method important for grasping the prediction pipeline.

*How the paper uses it:* The drug repurposing prediction module uses a Random Forest classifier on graph embeddings to predict drug-disease treatment probabilities.

▶ [7.5  Thomas Fuchs: Lecture 5: Random Forests in Cancer Research](https://www.youtube.com/watch?v=_g63MATWDyI) — caltech · 8 years ago

### Knowledge graph based drug repurposing
This concept directly addresses the core application of KGML-xDTD: leveraging biomedical knowledge graphs to predict new drug indications and explain mechanisms. Videos in this category provide context on the challenges and state-of-the-art approaches in drug repurposing using knowledge graphs, complementing the paper's contributions.

*How the paper uses it:* KGML-xDTD is a knowledge graph-based framework designed for explainable drug repurposing and mechanism prediction.

▶ [DBR-X: Drug-Based Reasoning Explainer for Interpretable ...](https://www.youtube.com/watch?v=JWxaBNZq6jI) — The Knowledge Graph Conference · 19:07

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand KGML-xDTD, starting with graph representation learning to grasp how biomedical knowledge graphs are embedded for machine learning. Then it covers reinforcement learning basics for path-finding, followed by biomedical knowledge graphs to appreciate the data structure used. Next, it explains Random Forest classification as the core prediction method, and finally focuses on knowledge graph-based drug repurposing, the central application of the paper.

### Graph representation learning *(prerequisite)*
Learn how graphs can be represented as vectors (embeddings) that capture structural and attribute information, enabling machine learning models to process graph data effectively. This foundational knowledge helps understand how the paper uses GraphSAGE embeddings to represent drugs and diseases.

*How the paper uses it:* The paper uses GraphSAGE to generate embeddings for nodes in the biomedical knowledge graph as input features for drug repurposing prediction.

▶ [Representation Learning on Graphs and Networks - Dr. Petar ...](https://www.youtube.com/watch?v=1T7mLsSD688) — Open Data Science and AI Conference · 25:30

### Reinforcement learning for path finding *(prerequisite)*
Understand the basics of reinforcement learning, where an agent learns to make sequential decisions to maximize rewards, which is crucial for learning to find meaningful paths in graphs. This intuition is key to grasping how the paper’s MOA prediction module identifies biologically plausible paths.

*How the paper uses it:* The MOA prediction module formulates mechanism of action identification as a path-finding problem solved by adversarial actor-critic reinforcement learning.

▶ [[ML 2021 (English version)] Lecture 29: Introduction of ...](https://www.youtube.com/watch?v=jbN0oYLtXps) — Hung-yi Lee · 38:47

### Biomedical knowledge graphs *(prerequisite)*
Get familiar with biomedical knowledge graphs, which integrate diverse biological entities and relationships into a large graph structure, serving as the data backbone for computational drug repurposing. Understanding their scale and complexity clarifies the challenges addressed by the paper.

*How the paper uses it:* The framework uses a customized version of RTX-KG2c, a large biomedical knowledge graph with millions of nodes and edges, as the foundational data source.

▶ [Network-based discovery: A short introduction to the core ...](https://www.youtube.com/watch?v=XcUtFig7HZI) — Lars Juhl Jensen · 7:17

### Random Forest classification in bioinformatics *(prerequisite)*
Learn how Random Forest classifiers combine multiple decision trees to improve prediction accuracy and robustness, a widely used method in bioinformatics for classification tasks. This knowledge helps understand the paper’s drug-disease treatment prediction approach.

*How the paper uses it:* The drug repurposing prediction module uses a Random Forest classifier on concatenated GraphSAGE embeddings to predict drug-disease treatment probabilities.

▶ [Random Forest Algorithm Clearly Explained!](https://www.youtube.com/watch?v=v6VJ2RO66Ag) — Normalized Nerd · 8:01

### Knowledge graph based drug repurposing
Explore how knowledge graphs are applied specifically to drug repurposing, combining biomedical data integration with machine learning to identify new therapeutic uses for existing drugs. This concept ties together the paper’s main contributions and applications.

*How the paper uses it:* KGML-xDTD integrates biomedical knowledge graphs with machine learning and reinforcement learning to predict drug treatments and explain mechanisms of action.

▶ [DBR-X: Drug-Based Reasoning Explainer for Interpretable ...](https://www.youtube.com/watch?v=JWxaBNZq6jI) — The Knowledge Graph Conference · 19:07

## Already in your library

- [Knowledge Distillation: How LLMs train each other](https://www.youtube.com/watch?v=jrJKRYAdh7I) — also for: Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking (Kunpeng Liu)
- [Knowledge graphs: A short introduction to the core concepts ...](https://www.youtube.com/watch?v=-jkKlY9UA_Y) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Graph Embeddings (node2vec) explained - How nodes get mapped to vectors](https://www.youtube.com/watch?v=pS_POUVFXvk) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [Knowledge Graph Completion using Embeddings KGC 2023](https://www.youtube.com/watch?v=PZua6Rwtp8I) — also for: Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction (Wlodek Zadrozny)
- [The FASTEST introduction to Reinforcement Learning on the internet](https://www.youtube.com/watch?v=VnpRp7ZglfA) — also for: Aligning Language Models with Selective Prediction (Aryan Deshwal)
- [StatQuest: Random Forests Part 1 - Building, Using and Evaluating](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate understanding of the KGML-xDTD framework for drug repurposing and mechanism of action (MOA) explanation. The beginner project focuses on reproducing a core component of the drug repurposing prediction module using graph embeddings and Random Forest classification on a small biomedical KG subset. The intermediate project implements the reinforcement learning-based MOA path-finding module on a smaller knowledge graph and compares it to a simple baseline. The advanced project extends the MOA path length beyond the fixed 3 hops limitation, exploring longer path discovery with computational efficiency considerations.

### Beginner — Drug-Disease Treatment Prediction with GraphSAGE and Random Forest
*Effort: a weekend, ~8 hours*

You build a simplified drug repurposing prediction pipeline that uses GraphSAGE to generate node embeddings from a small biomedical knowledge graph subset, then trains a Random Forest classifier to predict drug-disease treatment pairs. You replicate the core idea of combining graph embeddings with classical ML classification as described in the paper.

**Why it shows you understood the paper:** This project shows you understand the integration of graph representation learning with traditional classifiers for drug repurposing prediction, a key contribution of KGML-xDTD.

**Grounded in:** Development of a scalable framework that predicts drug-disease treatment relationships with high accuracy using combined graph embeddings and Random Forest classification.

**Tech stack:** Python 3.11, PyTorch Geometric, scikit-learn, NetworkX, Jupyter Notebook

**Data:** A small, publicly available biomedical knowledge graph subset (e.g., a curated subset of RTX-KG2c or a similar public biomedical KG) with drug and disease nodes and known treatment edges.

**Build it:**

1. Download and preprocess a small biomedical knowledge graph subset containing drug and disease nodes with treatment edges.
2. Use PyTorch Geometric to implement GraphSAGE and generate embeddings for all nodes.
3. Extract drug-disease pairs and their embeddings by concatenating node embeddings.
4. Train a Random Forest classifier on these embeddings to predict treatment relationships.
5. Evaluate the classifier using accuracy and macro F1 score on a held-out test set.
6. Document the pipeline and results in a README with code explanations.

**Verified links from the paper:**

- <https://github.com/williamleif/GraphSAGE> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/pyg-team/pytorch_geometric> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to generate GraphSAGE embeddings, train and evaluate a Random Forest classifier on drug-disease pairs, and a README explaining the approach and results.

**Stretch goal:** Add PubMedBERT-based node attribute embeddings concatenated with GraphSAGE embeddings to improve prediction performance.

### Intermediate — Reinforcement Learning for MOA Path Finding in a Biomedical Knowledge Graph
*Effort: 2 weekends, ~20 hours*

You implement a simplified adversarial actor-critic reinforcement learning agent to find 3-hop paths explaining drug mechanisms of action in a smaller biomedical knowledge graph. You compare your RL agent's path-finding performance against a random walk baseline using ranking metrics similar to those in the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the MOA prediction module's RL formulation, the use of demonstration paths to guide learning, and evaluation of path quality, reflecting a core novelty of KGML-xDTD.

**Grounded in:** Introduction of a reinforcement learning-based module that identifies biologically plausible mechanism of action paths in a massive biomedical knowledge graph.

**Tech stack:** Python 3.11, PyTorch, NetworkX, NumPy, Matplotlib

**Data:** A small biomedical knowledge graph subset with drug, protein, and disease nodes and edges representing biological relations; demonstration paths extracted from curated drug-target databases or synthetically generated for training.

**Build it:**

1. Construct or extract a small biomedical knowledge graph with relevant node and edge types.
2. Implement an adversarial actor-critic RL agent that learns to find 3-hop paths from drugs to diseases.
3. Incorporate demonstration paths as guidance signals during training.
4. Implement a random walk baseline for path finding.
5. Evaluate both methods using mean reciprocal rank (MRR) and hit@K metrics against expert-curated MOA paths.
6. Visualize example MOA paths found by the RL agent and document the methodology and results.

**Ships as:** A GitHub repo containing the RL path-finding implementation, baseline comparison, evaluation scripts, example MOA path visualizations, and a detailed README.

**Stretch goal:** Experiment with meta-path discriminators to improve the biological plausibility of found paths.

### Advanced — Extending MOA Path Length Beyond 3 Hops with Efficient Reinforcement Learning
*Effort: 3+ weeks*

You develop an extension of the KGML-xDTD MOA prediction module that allows discovery of longer and more complex mechanism of action paths beyond the fixed 3-hop limit. You design and implement computational optimizations to maintain tractability and interpretability, such as pruning strategies or hierarchical RL. You evaluate the impact on MOA path quality and computational cost.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction stated by the paper, demonstrating deep comprehension of the framework and ability to innovate on its core algorithms for practical biomedical applications.

**Grounded in:** Extending the framework to handle longer and more complex MOA paths beyond 3 hops.

**Tech stack:** Python 3.11, PyTorch, NetworkX, NumPy, scikit-learn, Matplotlib

**Data:** A medium-scale biomedical knowledge graph derived from RTX-KG2c or a similar source, with curated demonstration paths for training and evaluation.

**Build it:**

1. Analyze the current 3-hop MOA path limitation and identify computational bottlenecks for longer paths.
2. Design an RL agent extension supporting variable-length or longer fixed-length paths (e.g., 5 hops).
3. Implement computational optimizations such as action space pruning, hierarchical RL, or reward shaping.
4. Train the extended RL agent using demonstration paths and evaluate on MOA path identification metrics.
5. Compare results with the original 3-hop model in terms of path quality, interpretability, and computational resources.
6. Document the methodology, challenges, and findings in a comprehensive report.

**Ships as:** A GitHub repository with the extended MOA path-finding RL implementation, evaluation scripts, comparative analysis, and a detailed README/report.

**Stretch goal:** Integrate additional biomedical data sources to enrich the knowledge graph and assess their impact on longer MOA path discovery.

_The authors released no code for KGML-xDTD, so the intermediate and advanced projects require reimplementation of core methods from the paper description; data must be approximated by publicly available biomedical knowledge graphs or synthetically constructed subsets._
