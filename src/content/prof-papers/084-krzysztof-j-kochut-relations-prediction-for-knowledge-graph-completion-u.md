---
title: "084 · Relations Prediction for Knowledge Graph Completion using Large Language Models — Krzysztof J. Kochut"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-krzysztof-j-kochut"
source_hash: "2be5841a2fa0c3241f1a1e7a4954f2462c4b689d040fabfc2da7d6ee56e78b5f"
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
