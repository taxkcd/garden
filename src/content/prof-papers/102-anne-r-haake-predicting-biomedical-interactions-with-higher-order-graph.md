---
title: "102 · Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks — Anne R. Haake"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anne-r-haake"
source_hash: "5d6a3347d36071313cec23a77699834b6854be7fb5b83ee28773a2311ad0ad7f"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the HOGCN paper. The beginner project reproduces a core mechanism of higher-order neighborhood aggregation on a small synthetic graph, the intermediate project implements the HOGCN model from scratch and evaluates it on a public biomedical interaction dataset against a baseline, and the advanced project extends the model by integrating additional biomedical features to address a stated limitation and explores interpretability techniques.

### Beginner — Higher-Order Neighborhood Aggregation on a Small Graph
*Effort: a weekend, ~8 hours*

You build a simple Python notebook that constructs a small synthetic biomedical interaction graph and implements the higher-order graph convolutional layer concept by aggregating node features from neighbors up to 3 hops away. You visualize how node representations change when including neighbors at increasing distances.

**Why it shows you understood the paper:** This project shows you grasp the core idea of HOGCN's higher-order neighborhood aggregation mechanism and its effect on node embeddings, a key contribution of the paper.

**Grounded in:** Proposed HOGCN model that aggregates features from higher-order neighbors for biomedical interaction prediction.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, NetworkX, Matplotlib

**Data:** Synthetic small graph with nodes representing biomedical entities and edges representing interactions, created within the notebook.

**Build it:**

1. Create a small synthetic graph with nodes and edges representing biomedical entities and interactions using NetworkX.
2. Assign simple one-hot or random initial features to nodes.
3. Implement a function to aggregate features from neighbors at distances 1 to 3 hops.
4. Combine aggregated features linearly to produce updated node embeddings.
5. Visualize node embeddings with and without higher-order neighbor aggregation using dimensionality reduction (e.g., PCA or t-SNE).
6. Write a README explaining the implementation and how it relates to the HOGCN higher-order convolution.

**Ships as:** A Jupyter notebook and README demonstrating higher-order neighborhood aggregation on a small graph, with visualizations showing embedding changes.

**Stretch goal:** Add a simple bilinear decoder to reconstruct edges from learned embeddings and evaluate reconstruction quality on the synthetic graph.

### Intermediate — Reimplementing HOGCN on a Public Biomedical Interaction Dataset
*Effort: 2 weekends, ~20 hours*

You implement the HOGCN model from the paper using PyTorch or PyTorch Geometric, including the higher-order graph convolutional layers and bilinear decoder. You train and evaluate it on a publicly available biomedical interaction dataset (e.g., a protein-protein interaction subset from STRING or Drug-Drug Interaction data from DrugBank) and compare performance (AUPRC) against a simple baseline like GCN or node2vec embeddings.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the paper's core method and reproduce its key metric improvements, showing deep comprehension of the model architecture and training procedure.

**Grounded in:** Develop an end-to-end trainable deep learning framework (HOGCN) that uses higher-order graph convolutional layers to aggregate and linearly mix feature representations from neighbors at various distances (up to k-hop neighborhoods). The model employs a bilinear decoder to reconstruct interaction edges and is trained using binary cross-entropy loss on known interaction networks.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, scikit-learn, Jupyter Notebook

**Data:** A publicly available biomedical interaction dataset such as a subset of the STRING PPI network or DrugBank DDI data, used as a substitute for the paper's datasets.

**Build it:**

1. Select and preprocess a public biomedical interaction dataset to create a graph with node features (one-hot encoding) and known edges.
2. Implement the higher-order graph convolutional layer that aggregates features from neighbors up to k hops and learns linear mixing weights.
3. Implement the bilinear decoder to reconstruct edges from node embeddings.
4. Train the HOGCN model with binary cross-entropy loss on the known interactions.
5. Implement a baseline model (e.g., standard GCN or node2vec embeddings with logistic regression) for comparison.
6. Evaluate both models using AUPRC and report results in a README with discussion.

**Ships as:** A GitHub repo with code to train and evaluate HOGCN and a baseline on a biomedical interaction dataset, including scripts, notebooks, and a report comparing performance.

**Stretch goal:** Experiment with different neighborhood orders k and analyze their impact on performance and training time.

### Advanced — Extending HOGCN with Biomedical Features and Interpretability
*Effort: 3+ weeks*

You extend the HOGCN model by integrating additional biomedical features such as physicochemical properties or pre-trained embeddings (e.g., drug molecular fingerprints or protein sequence embeddings) as initial node features. You also implement an interpretability method to identify influential subgraphs or neighbors contributing to specific interaction predictions. You evaluate the extended model on a biomedical interaction dataset and analyze improvements and interpretability insights.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing you can innovate beyond the original work by enhancing feature representation and adding interpretability, which are critical for biomedical applications.

**Grounded in:** The model currently uses one-hot encoding as initial features and does not integrate additional biomedical properties or physicochemical data. The interpretability of predictions is limited; explanations for predictions are not provided but suggested as future work.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, RDKit (for chemical features), scikit-learn, Jupyter Notebook

**Data:** A public biomedical interaction dataset with available entity metadata (e.g., DrugBank with drug molecular structures or UniProt with protein sequences) to extract additional features.

**Build it:**

1. Collect or preprocess additional biomedical features for entities in the dataset (e.g., molecular fingerprints for drugs using RDKit, or protein embeddings).
2. Modify the HOGCN model to accept and integrate these richer initial node features instead of simple one-hot encodings.
3. Implement or adapt an interpretability method such as GNNExplainer or integrated gradients to identify influential neighbors or subgraphs for specific predictions.
4. Train and evaluate the extended model on the dataset, comparing performance and calibration to the baseline HOGCN.
5. Analyze interpretability results and document case studies showing how additional features and explanations improve trustworthiness.
6. Write a comprehensive README detailing the extension, experiments, and insights.

**Ships as:** A GitHub repository with extended HOGCN code, feature extraction scripts, interpretability tools, evaluation results, and detailed documentation.

**Stretch goal:** Apply the extended model to a different biomedical interaction prediction task (e.g., gene-disease instead of drug-drug) to test generalization.
