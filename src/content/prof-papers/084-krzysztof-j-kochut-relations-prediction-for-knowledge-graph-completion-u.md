---
title: "084 · Relations Prediction for Knowledge Graph Completion using Large Language Models — Krzysztof J. Kochut"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-krzysztof-j-kochut"
source_hash: "fe2f0f3d40265dc1b2fcb7eebf42936891299c7e26ed16b84636b973506c463a"
sequence: 84
generator: "outreach-garden: managed"
---

# 084 · Relations Prediction for Knowledge Graph Completion using Large Language Models

## At a glance

- **Professor:** Krzysztof J. Kochut
- **Institution:** University of Georgia
- **Paper:** [Relations Prediction for Knowledge Graph Completion using Large Language Models](https://arxiv.org/pdf/2405.02738)
- **Authors:** Sakher Khalil Alqaaidi, Krzysztof Kochut
- **Year:** 2024

## Paper overview

This paper presents a method to complete knowledge graphs by predicting relations between pairs of nodes using large language models (LLMs), specifically fine-tuning Llama 2 on node names only. The approach achieves state-of-the-art results on benchmarks and works well even for nodes unseen during training.

### Why it matters

**Research problem:** Knowledge graphs are often incomplete, and predicting missing relations between node pairs (relation prediction) is a key task to complete these graphs effectively, especially in inductive settings where nodes are unseen during training.

**Why it matters:** Knowledge graphs are widely used in applications like recommender systems and information extraction, but their incompleteness limits their utility. Improving relation prediction enhances graph completeness and usefulness.

**Key contributions:**

- Utilization of Llama 2 large language model for relation prediction in knowledge graphs.
- Use of minimal node information (node names only) for prediction, enabling inductive settings.
- Single-stage training process.
- Achieving new state-of-the-art scores on the FreeBase benchmark for relation prediction.

## About the professor

**Krzysztof J. Kochut** — University of Georgia.

### Research links

- [Faculty/profile page](https://computing.uga.edu/directory/people/krzysztof-j-kochut)
- [Identity evidence](http://cobweb.cs.uga.edu/~kochut)
- [Identity evidence](https://cobweb.cs.uga.edu/~kochut/)
- [Identity evidence](https://dblp.org/pid/k/KrysKochut.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Knowledge Graph Embeddings
**The paper assumes:** knowledge graph embeddings, relation prediction in knowledge graphs, inductive and transductive learning in graphs
**Already in this field?** Skip this entirely if you already understand knowledge graph embeddings and relation prediction tasks in knowledge graphs.

This background focuses on knowledge graph embeddings, essential for understanding relation prediction in knowledge graph completion using large language models as presented in the paper. The rigorous course option provides a deep, structured university-level foundation on graph machine learning and embeddings, while the fast track offers a shorter, more accessible series of explainers on graph embeddings and neural networks, suitable for quickly grasping key concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W: Machine Learning with Graphs](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn) — Stanford Online · 60 videos · 22.4h across 60 episodes

**Watch only this:** Lectures 1.1 to 3.3 (episodes 1-9), about 3.3 hours — covering graph basics, node embeddings, and embedding entire graphs to understand the foundational concepts needed for knowledge graph embeddings.

*Why it unblocks this paper:* Stanford CS224W: Machine Learning with Graphs is a comprehensive, authoritative university course covering graph representations, node embeddings, and graph neural networks, directly relevant to knowledge graph embeddings and relation prediction tasks in the paper.

*If you want all of it:* 22.4 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI_  Deep Learning on Graphs -     GNN   -  Graph Embeddings](https://www.youtube.com/playlist?list=PLfUzQZVAoOvheK6aA0BtnS-ji_wMZc_ap) — F · 38 videos · 33.6h across 38 episodes

**Watch only this:** Episodes 1 to 5, about 4.5 hours — including foundational talks on convolutional neural networks on graphs, geometric deep learning, and large-scale graph representation learning to quickly grasp key embedding concepts.

*Why it unblocks this paper:* This playlist offers a concise and well-produced series of explainers on deep learning on graphs, graph neural networks, and graph embeddings, providing an intuition-first approach that complements the rigorous course and quickly builds relevant background.

*If you want all of it:* 33.6 hours across 38 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on relation prediction for knowledge graph completion using large language models, start by building foundational knowledge on inductive learning in graphs and large language model fine-tuning. Then, explore the evaluation benchmarks and metrics used in knowledge graph research. Finally, focus on the core task of relation prediction in knowledge graphs, culminating with the authors' own talks or the most relevant advanced lectures on the topic.

### Inductive learning in graphs *(prerequisite)*
Inductive learning in graphs enables models to generalize to unseen nodes, a key capability leveraged in the paper for relation prediction on unseen entities. Understanding graph neural networks and inductive representation learning methods provides the theoretical foundation for this approach.

*How the paper uses it:* The paper achieves strong inductive performance by predicting relations involving unseen nodes using only node names.

▶ [Gerard presents: Inductive Representation Learning on Large Graphs](https://www.youtube.com/watch?v=8qXSRY2EeFE) — nPlan · 11 months ago

### Large language models fine-tuning *(prerequisite)*
Fine-tuning large language models like Llama 2 is central to the paper's methodology. This section covers advanced techniques for adapting pretrained LLMs to specific tasks efficiently, including parameter-efficient fine-tuning methods.

*How the paper uses it:* The paper fine-tunes the 7B parameter Llama 2 model on node names for relation prediction.

▶ [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — Mark Hennings · 2 years ago

### Knowledge graph benchmarks and evaluation *(prerequisite)*
Understanding the benchmarks (FreeBase, WordNet) and evaluation metrics (mean rank, Hits@1, MRR) used in knowledge graph completion research is essential to appreciate the paper's empirical contributions and comparisons.

*How the paper uses it:* The paper reports state-of-the-art results on the FreeBase benchmark and comparable results on WordNet using these metrics.

▶ [Evaluating Logical Generalization in Graph Neural Networks ...](https://www.youtube.com/watch?v=HllTbhy3WSA) — Weights & Biases · 41:02

### Relation prediction in knowledge graphs
Relation prediction is the core task addressed by the paper, involving predicting missing edges (relations) between node pairs in knowledge graphs. This lecture provides a rigorous overview of algorithms and challenges in this domain.

*How the paper uses it:* The paper proposes a novel LLM-based method for relation prediction to complete knowledge graphs effectively.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.3 - Knowledge Graph Completion Algorithms](https://www.youtube.com/watch?v=Xm5VrxZYhu4) — Stanford Online · 5 years ago

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper authors or closely related presentations provide the most precise and detailed insights into their methodology, experimental setup, and future directions.

*How the paper uses it:* Although no direct talk by the authors on this exact paper was found, the closest advanced talks on knowledge graphs and relation extraction by reputable channels are included.

▶ [NODES 2023 - Relation Extraction: Dependency Graphs vs ...](https://www.youtube.com/watch?v=wJw_GOS4iGw) — Neo4j · 14:23

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how large language models can be fine-tuned for relation prediction in knowledge graphs. We start with the basics of inductive learning in graphs, then cover how large language models are fine-tuned, followed by understanding relation prediction in knowledge graphs, and finally explore knowledge graph benchmarks and evaluation metrics. This order builds intuition progressively, preparing you to grasp the paper's core methodology and results.

### Inductive learning in graphs *(prerequisite)*
Inductive learning in graphs means training models that can generalize to unseen nodes or parts of a graph, which is crucial for real-world applications where new entities appear. This concept helps understand how models can predict relations involving nodes not seen during training.

*How the paper uses it:* The paper emphasizes inductive relation prediction, enabling the model to work with unseen nodes using only node names.

▶ [GraphSAGE: Inductive Representation Learning on Large Graphs (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=3AzphNf5ja8) — TechViz - The Data Science Guy · 13:19 · 4 years ago

### Large language models fine-tuning *(prerequisite)*
Fine-tuning large language models adapts a pre-trained model to a specific task by training it further on task-specific data, often improving performance significantly. Understanding this process clarifies how the paper customizes Llama 2 to predict relations from node names.

*How the paper uses it:* The paper fine-tunes the 7B parameter Llama 2 model on node names for multi-label relation prediction.

▶ [Fine Tuning LLM Explained Simply](https://www.youtube.com/watch?v=ezdIOLbUSWg) — codebasics · 6:46 · 9 months ago

### Relation prediction in knowledge graphs
Relation prediction is the task of inferring missing edges (relations) between nodes in a knowledge graph, which is key to completing and enriching the graph. This concept is central to the paper’s goal of knowledge graph completion using LLMs.

*How the paper uses it:* The paper’s main task is predicting relations between node pairs to complete knowledge graphs effectively.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.3 - Knowledge Graph Completion Algorithms](https://www.youtube.com/watch?v=Xm5VrxZYhu4) — Stanford Online · 5 years ago

### Knowledge graph benchmarks and evaluation
Benchmarks and evaluation metrics provide standardized ways to measure and compare model performance on knowledge graph tasks, such as relation prediction. Understanding these helps interpret the paper’s reported state-of-the-art results on FreeBase and WordNet.

*How the paper uses it:* The paper reports results using FreeBase and WordNet benchmarks with metrics like mean rank and Hits@1.

▶ [How to evaluate an AI search engine with statistical rigor ...](https://www.youtube.com/watch?v=Fo9s95AZ3I4) — Abhigya AI Lab · 6:00

## Already in your library

- [Knowledge Graph Completion using Embeddings KGC 2023](https://www.youtube.com/watch?v=PZua6Rwtp8I) — also for: Implementing Tensor Logic: Unifying Datalog and Neural Reasoning via Tensor Contraction (Wlodek Zadrozny)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core method and its limitations. The beginner project replicates the paper's key idea of relation prediction using node names with a simple model and dataset. The intermediate project involves reimplementing the paper's Llama 2 fine-tuning approach on a smaller public knowledge graph dataset, comparing performance to a baseline. The advanced project extends the method by incorporating entity descriptions to address a stated limitation, exploring improved inductive relation prediction with minimal computational overhead.

### Beginner — Simple Relation Prediction Using Node Names
*Effort: a weekend, ~8 hours*

You build a small-scale relation prediction model that uses only node names as input features to predict relations between node pairs in a toy knowledge graph. This project implements a basic multi-label classifier (e.g., logistic regression or small neural network) on a synthetic or small subset of a public KG dataset, focusing on the inductive setting where some nodes are unseen during training.

**Why it shows you understood the paper:** This project shows you grasp the paper's core insight that relation prediction can be done using minimal textual information (node names) and that inductive relation prediction is feasible without full graph structure or descriptions.

**Grounded in:** The model uses only node names as input enabling inductive relation prediction.

**Tech stack:** Python 3.11, scikit-learn, pandas, Jupyter Notebook

**Data:** Use a small synthetic knowledge graph or a publicly available subset of FreeBase or WordNet with node names only; simulate inductive splits by holding out some nodes.

**Build it:**

1. Prepare a small dataset of node pairs with their node names and known relations.
2. Split the dataset into training and inductive test sets with unseen nodes in test.
3. Extract simple text features from node names (e.g., TF-IDF vectors).
4. Train a multi-label classifier to predict relations from concatenated node name features.
5. Evaluate using metrics like Hits@1 or mean reciprocal rank on the inductive test set.
6. Document the setup, results, and limitations in a README.

**Ships as:** A Jupyter notebook and README showing a working relation prediction model using only node names, with evaluation on inductive splits.

**Stretch goal:** Add simple baseline comparisons using random or majority-class predictions to contextualize results.

### Intermediate — Reimplement Llama 2 Fine-Tuning for Relation Prediction
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core method of fine-tuning a smaller Llama 2 model (7B parameters or smaller open LLM) on node names only for relation prediction on a public knowledge graph benchmark such as a subset of FreeBase or WordNet. You compare your model's performance against a simple baseline like TransE or DistMult embeddings on the same data and report metrics like mean reciprocal rank and Hits@1.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's main approach and evaluation methodology, showing comprehension of fine-tuning LLMs for multi-label classification in inductive KG completion settings.

**Grounded in:** Fine-tune the Llama 2 large language model using only the textual node names as input for a multi-label sequence classification task to predict relations between node pairs.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), datasets, scikit-learn

**Data:** Use publicly available subsets of FreeBase or WordNet knowledge graphs with node names; simulate inductive splits by holding out nodes unseen during training.

**Build it:**

1. Prepare the dataset with node pairs and their node names, and corresponding relation labels.
2. Implement data preprocessing to format inputs as sequences of concatenated node names.
3. Fine-tune a smaller open LLM (e.g., Llama 2 7B or similar) on the multi-label relation prediction task.
4. Implement a baseline model (e.g., TransE or DistMult) for comparison.
5. Evaluate both models on inductive test splits using mean reciprocal rank and Hits@1.
6. Write a detailed report comparing your results to the paper's reported metrics.

**Ships as:** A GitHub repository with code to fine-tune an LLM for relation prediction, baseline implementations, evaluation scripts, and a README documenting results and methodology.

**Stretch goal:** Experiment with different input encodings or prompt templates to improve inductive performance.

### Advanced — Incorporate Entity Descriptions to Improve Inductive Relation Prediction
*Effort: a few weeks, ~40+ hours*

You extend the paper's method by integrating entity descriptions (textual descriptions of nodes) alongside node names as input to the LLM fine-tuning process. This addresses the paper's stated limitation about not using descriptions and aims to improve inductive relation prediction performance with minimal additional computational cost. You evaluate on the same benchmark datasets and compare results to the original node-name-only model.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, applying your engineering and ML skills to extend the method and empirically test improvements, which is a genuine research contribution.

**Grounded in:** Does not utilize node descriptions or relation text, which could improve performance.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), datasets, scikit-learn

**Data:** Use FreeBase or WordNet subsets enriched with entity descriptions from public sources or dataset metadata; simulate inductive splits as before.

**Build it:**

1. Collect or extract textual descriptions for entities in the dataset.
2. Modify data preprocessing to concatenate node names and descriptions as input sequences.
3. Fine-tune the LLM on this enriched input for relation prediction.
4. Evaluate the model on inductive test splits and compare metrics to the node-name-only baseline.
5. Analyze the impact of descriptions on prediction accuracy and inductive capability.
6. Document your methodology, experiments, and findings in a comprehensive README.

**Ships as:** A GitHub repo with code and experiments showing the effect of adding entity descriptions to LLM-based relation prediction, with evaluation and analysis.

**Stretch goal:** Explore lightweight methods to incorporate relation text or implement negative sampling strategies to further improve performance.
