---
title: "993 · LLM-Enhanced Energy Contrastive Learning for Out-of-Distribution Detection in Text-Attributed Graphs — Chen Zhao"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chen-zhao"
source_hash: "3e0d989b88f6bafcda866112370034efd802ea24e3055c68a2c65847b114e0d1"
sequence: 993
generator: "outreach-garden: managed"
---

# 993 · LLM-Enhanced Energy Contrastive Learning for Out-of-Distribution Detection in Text-Attributed Graphs

## At a glance

- **Professor:** Chen Zhao
- **Institution:** Baylor University
- **Paper:** [LLM-Enhanced Energy Contrastive Learning for Out-of-Distribution Detection in Text-Attributed Graphs](https://ojs.aaai.org/index.php/AAAI/article/download/39611/43572)
- **Authors:** Xiaoxu Ma, Dong Li, Minglai Shao, Xintao Wu, Chen Zhao
- **Year:** 2026

## Paper overview

This paper presents a new method called LECT that improves the detection of out-of-distribution (OOD) nodes in graphs where nodes have associated text. It uses large language models (LLMs) to generate realistic pseudo-OOD samples and applies an energy-based contrastive learning approach to distinguish between in-distribution and OOD nodes, achieving better detection and classification performance than previous methods.

### Why it matters

**Research problem:** Detecting out-of-distribution (OOD) nodes in text-attributed graphs is challenging because existing methods often assume consistent data distributions and overlook the complex dependencies between textual attributes and graph structure, leading to poor robustness and misclassification of OOD nodes.

**Why it matters:** Accurate OOD detection in text-attributed graphs is critical for reliable graph learning in real-world applications such as citation, social, and transaction networks, where distribution shifts can degrade model performance and trustworthiness.

**Key contributions:**

- A novel method to generate high-quality pseudo-OOD node textual attributes using LLMs that preserve dependency relationships with connected in-distribution nodes.
- An energy-based contrastive learning algorithm that uses linked IND-OOD pairs and triplet contrastive pairs to distinguish OOD from IND nodes effectively.
- Extensive experiments on six benchmark datasets demonstrating superior OOD detection and node classification performance compared to state-of-the-art baselines.

## About the professor

**Chen Zhao** — Assistant Professor, Department of Computer Science, Baylor University.

Research interests: Fairness-aware Machine Learning; Uncertainty Quantification; Distribution Shift and Domain Generalization; Graph Learning; Computational Biology; Large Language Models.

### Research links

- [Faculty/profile page](https://charliezhaoyinpeng.github.io/homepage)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=xebNvXQAAAAJ&view_op=list_works&sortby=pubdate)
- [GitHub](https://github.com/charliezhaoyinpeng)
- [LinkedIn](https://www.linkedin.com/in/chenzhaoutd)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'LLM-Enhanced Energy Contrastive Learning for Out-of-Distribution Detection in Text-Attributed Graphs,' start by exploring foundational concepts such as out-of-distribution detection in graphs and the use of large language models for data generation, which underpin the paper's approach. Then, study the energy-based contrastive learning framework that forms the core algorithmic contribution. Finally, consolidate understanding with the authors' own talk or the closest available advanced research talks on related topics.

### Out-of-distribution detection in graphs *(prerequisite)*
This section covers the challenges and methodologies for detecting out-of-distribution nodes in graph-structured data, a central problem addressed by the paper. Understanding these techniques is crucial to appreciate how LECT improves robustness and detection accuracy in text-attributed graphs.

*How the paper uses it:* The paper focuses on improving OOD detection in text-attributed graphs, making foundational knowledge of OOD detection in graphs essential.

▶ [Part 1: deep anomaly detection on attributed networks](https://www.youtube.com/watch?v=duFACUGg2uM) — Farshad Noravesh · 10:22 · 3y ago

### Large language models for data generation *(prerequisite)*
This section explains the role of large language models (LLMs) in generating synthetic data, particularly how LLMs can be used to create pseudo-OOD samples that maintain dependency relationships in graphs. This knowledge is key to understanding the innovative data augmentation strategy in LECT.

*How the paper uses it:* LECT uses LLMs to generate high-quality pseudo-OOD node textual attributes, making understanding LLM data generation pipelines important.

▶ [Lecture 12: The entire Data Preprocessing Pipeline of Large Language Models (LLMs)](https://www.youtube.com/watch?v=mk-6cFebjis) — Vizuara · 1:34:15 · 2y ago

### Energy-based contrastive learning
This section delves into energy-based models and contrastive learning frameworks, which are central to the paper's approach for distinguishing in-distribution from out-of-distribution nodes. Understanding these concepts will clarify how LECT achieves effective representation learning.

*How the paper uses it:* The core algorithm of LECT is an energy-based contrastive learning framework that separates IND and OOD nodes effectively.

▶ [Yann LeCun: "Energy-Based Self-Supervised Learning"](https://www.youtube.com/watch?v=A7AnCvYDQrU) — Institute for Pure & Applied Mathematics (IPAM) · 1:00:10 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about large language models (LLMs) and how they can generate realistic textual data, which is foundational for the paper's pseudo-OOD sample generation. Next, grasp the challenges and methods of out-of-distribution (OOD) detection specifically in graph data, as this is the core problem addressed. Finally, study energy-based contrastive learning, the key algorithmic technique the paper uses to distinguish in-distribution from OOD nodes effectively.

### Large language models for data generation *(prerequisite)*
Large language models (LLMs) are powerful AI systems trained on vast text corpora that can generate coherent and contextually relevant text. Understanding how LLMs process and generate data helps appreciate how they can create realistic pseudo-OOD samples that maintain relationships in graph data.

*How the paper uses it:* The paper uses LLMs with chain-of-thought prompts to generate high-quality pseudo-OOD node textual attributes that preserve dependencies with in-distribution nodes.

▶ [Lecture 12: The entire Data Preprocessing Pipeline of Large Language Models (LLMs)](https://www.youtube.com/watch?v=mk-6cFebjis) — Vizuara · 1:34:15 · 2y ago

### Out-of-distribution detection in graphs *(prerequisite)*
Out-of-distribution detection aims to identify data points that differ significantly from the training distribution, which is especially challenging in graphs due to complex node and edge dependencies. Learning about OOD detection in graphs clarifies why standard methods struggle and why specialized approaches are needed.

*How the paper uses it:* The paper addresses the challenge of detecting OOD nodes in text-attributed graphs where existing methods fail to capture complex dependencies.

▶ [Part 1: deep anomaly detection on attributed networks](https://www.youtube.com/watch?v=duFACUGg2uM) — Farshad Noravesh · 10:22 · 3y ago

### Energy-based contrastive learning
Energy-based contrastive learning is a technique that learns representations by assigning low energy to in-distribution samples and high energy to out-of-distribution ones, often using contrastive pairs to sharpen distinctions. Understanding this approach reveals how the paper's method effectively separates IND and OOD nodes while preserving classification accuracy.

*How the paper uses it:* The paper proposes an energy-based contrastive learning framework using linked IND-OOD pairs and triplet contrastive pairs to distinguish OOD from IND nodes.

▶ [New AI Paradigm?! Energy-Based Transformers Explained](https://www.youtube.com/watch?v=LUQkWzjv2RM) — bycloud · 9:43 · 1y ago

## Already in your library

- [Stanford CS229 Machine Learning | Spring 2026 | Lecture 14: Transformers, In-Context Learning](https://www.youtube.com/watch?v=pwQ0l4hFCVI) — also for: Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization (Yanfu Zhang)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Supervised Contrastive Learning](https://www.youtube.com/watch?v=MpdbFLXOOIw) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Contrastive learning explained | Ishan Misra and Lex Fridman](https://www.youtube.com/watch?v=bDfqtxKEThI) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Lec 17. Generalization: Out-of-Distribution (OOD)](https://www.youtube.com/watch?v=tjD9LIzIIek) — also for: Knowledge-Guided Machine Learning: A Paradigm Shift in AI for Science (Xiaowei Jia)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Project Showcase: Out-Of-Distribution Detection](https://www.youtube.com/watch?v=Kx15r5gnqvE) — also for: Energy-based Out-of-distribution Detection (Sharon Li)
- [A Critical Analysis of Feature & Confidence-Based Out-of-distribution Detection - MICCAI 2024](https://www.youtube.com/watch?v=aLJhQsk4IDY) — also for: Energy-based Out-of-distribution Detection (Sharon Li)
- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Energy-Based Models Explained: The AI Beyond Next-Token](https://www.youtube.com/watch?v=NYmXYF8A3Q4) — also for: Energy-based Out-of-distribution Detection (Sharon Li)
- [What is Contrastive Learning? (Contrastive Learning/Self-supervised Learning Explained)](https://www.youtube.com/watch?v=cH8I8jf-xJU) — also for: CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images (Miaomiao Zhang)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [MIT 6.S191 (2025): Large Language Models (Google)](https://www.youtube.com/watch?v=ZNodOsz94cc) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [How LLMs Works? - Overview](https://www.youtube.com/watch?v=K45s2PgywvI) — also for: Towards Higher Quality Software Vulnerability Data Using LLM-based Patch Filtering (Hui Chen)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Large Language Models from scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) — also for: Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI (Adam Perer)
- [Every Large Language Model Explained in 17 Minutes!](https://www.youtube.com/watch?v=9UpLmjlDgPg) — also for: On the Opportunities of Large Language Models for Programming Process Data (John Edwards)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the LECT paper's core ideas and contributions. The beginner project reproduces a fundamental mechanism of pseudo-OOD sample generation using LLMs on a small synthetic graph. The intermediate project implements the energy-based contrastive learning framework on a standard citation graph dataset, comparing OOD detection performance against a simple baseline. The advanced project extends the method by exploring adaptive pseudo-OOD sample selection to address a stated limitation of manual tuning, applying it to a text-attributed graph dataset.

### Beginner — LLM-Guided Pseudo-OOD Text Generation on a Small Graph
*Effort: a weekend, ~8 hours*

You build a small synthetic text-attributed graph with a few nodes and edges, then use a large language model (e.g., OpenAI GPT-4 via API) with chain-of-thought prompts to generate pseudo-OOD node textual attributes that maintain dependency relationships with connected in-distribution nodes. You visualize the generated text and graph structure to illustrate the pseudo-OOD sample generation process.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel contribution of generating high-quality pseudo-OOD samples using LLMs guided by chain-of-thought prompts to preserve dependencies, a key step before contrastive learning.

**Grounded in:** A novel method to generate high-quality pseudo-OOD node textual attributes using LLMs that preserve dependency relationships with connected in-distribution nodes.

**Tech stack:** Python 3.11, OpenAI API (or similar LLM API), NetworkX, Matplotlib or Plotly

**Data:** Synthetic small graph with manually created nodes and edges; no external dataset required.

**Build it:**

1. Create a small synthetic graph with 5-10 nodes and edges, assigning simple textual attributes to in-distribution nodes.
2. Design chain-of-thought prompts that instruct the LLM to generate textual attributes for pseudo-OOD nodes linked to existing nodes, preserving dependency relationships.
3. Use the LLM API to generate pseudo-OOD node texts based on the prompts and graph context.
4. Add the generated pseudo-OOD nodes and edges to the graph data structure.
5. Visualize the graph showing in-distribution and pseudo-OOD nodes with their textual attributes.
6. Document the prompt design and generation process in the README.

**Ships as:** A GitHub repo with code to generate and visualize pseudo-OOD nodes on a small graph, including prompt templates and example outputs.

**Stretch goal:** Add a simple metric or heuristic to evaluate the diversity or quality of generated pseudo-OOD texts compared to in-distribution texts.

### Intermediate — Energy-Based Contrastive Learning for OOD Detection on Citeseer
*Effort: 2 weekends, ~20 hours*

You implement the core LECT method's energy-based contrastive learning framework on the Citeseer citation graph dataset (a standard public dataset used in the paper). You generate pseudo-OOD samples using simple heuristics or small LLM prompts (due to no released code), then train a model with linked IND-OOD pairs and triplet contrastive pairs to distinguish OOD from IND nodes. You compare OOD detection metrics (AUROC, AUPR) against a baseline such as plain node classification without contrastive learning.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core algorithmic approach and evaluate its effectiveness on a real benchmark dataset, demonstrating comprehension of the energy-based contrastive learning and OOD detection metrics.

**Grounded in:** An energy-based contrastive learning algorithm that uses linked IND-OOD pairs and triplet contrastive pairs to distinguish OOD from IND nodes effectively.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NetworkX, OpenAI API (optional for pseudo-OOD text generation)

**Data:** Citeseer citation graph dataset (publicly available, used as substitute for the paper's data).

**Build it:**

1. Download and preprocess the Citeseer dataset to obtain graph structure and node textual attributes.
2. Implement a simple pseudo-OOD sample generation method (e.g., perturbing node texts or using small LLM prompts) to create pseudo-OOD nodes linked to IND nodes.
3. Construct linked IND-OOD pairs and triplet contrastive pairs as described in the paper.
4. Implement the energy-based contrastive learning loss and train a graph neural network or embedding model accordingly.
5. Evaluate OOD detection performance using AUROC and AUPR metrics, comparing against a baseline model trained without contrastive learning.
6. Document the implementation details, evaluation results, and insights in the README.

**Ships as:** A GitHub repo with code to train and evaluate the energy-based contrastive learning model on Citeseer, including scripts for pseudo-OOD generation and metric calculation.

**Stretch goal:** Incorporate chain-of-thought LLM prompts for pseudo-OOD generation to improve sample quality and observe impact on detection metrics.

### Advanced — Adaptive Pseudo-OOD Sample Selection for Robust OOD Detection
*Effort: 3+ weeks*

You extend the LECT framework by implementing an adaptive strategy to select or weight pseudo-OOD samples and contrastive pairs during training, aiming to reduce manual hyperparameter tuning as noted in the paper's limitations. You apply this to a text-attributed graph dataset such as Pubmed or Citeseer, reimplementing the energy-based contrastive learning method and comparing OOD detection performance and robustness against the original fixed-sample approach.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding of the method and the challenges in pseudo-OOD sample quality and hyperparameter tuning, while contributing a meaningful extension.

**Grounded in:** The method requires tuning of hyperparameters such as the number of linked IND-OOD pairs and triplet contrastive pairs, which can affect performance and risk overfitting; future direction includes exploring adaptive or automated methods for selecting pseudo-OOD samples and contrastive pairs.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NetworkX, OpenAI API or similar LLM API

**Data:** Pubmed or Citeseer dataset (publicly available text-attributed citation graphs).

**Build it:**

1. Reimplement the LECT energy-based contrastive learning framework and pseudo-OOD sample generation on the chosen dataset.
2. Design and implement an adaptive mechanism (e.g., sample weighting, curriculum learning, or reinforcement learning) to select or prioritize pseudo-OOD samples and contrastive pairs during training.
3. Train models with and without the adaptive selection to compare OOD detection metrics (AUROC, AUPR, FPR95) and in-distribution classification accuracy.
4. Analyze the impact of adaptive selection on hyperparameter sensitivity and model robustness.
5. Document the methodology, experiments, results, and limitations in the README.

**Ships as:** A GitHub repo with code implementing adaptive pseudo-OOD sample selection in LECT, experimental results comparing to baseline, and analysis of robustness and tuning.

**Stretch goal:** Extend the adaptive framework to dynamic or online learning scenarios where distribution shifts occur over time.
