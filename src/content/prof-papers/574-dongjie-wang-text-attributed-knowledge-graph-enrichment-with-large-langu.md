---
title: "574 · Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation — Dongjie Wang"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dongjie-wang"
source_hash: "622ac3a2f3f5ad7be89a443114633259030e3ca9f0d1664369465dc24e25b455"
sequence: 574
generator: "outreach-garden: managed"
---

# 574 · Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation

## At a glance

- **Professor:** Dongjie Wang
- **Institution:** University of Kansas
- **Paper:** [Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation](https://arxiv.org/pdf/2604.13331)
- **Authors:** Mohsen Nayebi Kerdabadi, Arya Hadizadeh Moghaddam, Chen Chen, Dongjie Wang, Zijun Yao
- **Year:** 2026

## Paper overview

This paper presents MEDCO, a framework that improves medical concept representations by constructing an evidence-grounded heterogeneous knowledge graph (KG) from electronic health records (EHRs), enriching it with large language model (LLM)-generated semantic descriptions and relations, and jointly training a fine-tuned LLM text encoder with a graph neural network (GNN). This approach enhances clinical prediction tasks such as diagnosis prediction by better capturing complex dependencies among diagnoses, medications, and procedures.

### Why it matters

**Research problem:** Learning robust and clinically meaningful representations of medical concepts from EHR data is challenging due to incomplete or missing cross-type dependencies in existing medical ontologies and the difficulty of integrating rich clinical semantics from text with structured knowledge graphs.

**Why it matters:** High-quality medical concept representations are fundamental for downstream clinical prediction tasks, such as predicting future diagnoses, which can improve patient care and outcomes. Existing ontologies lack comprehensive cross-domain relations, limiting predictive performance.

**Key contributions:**

- Introduced an LLM-assisted pipeline to build a clinically interpretable, evidence-grounded heterogeneous KG combining EHR-derived statistics and LLM-inferred relations.
- Enriched the KG into a text-attributed graph with LLM-generated node descriptions and edge metadata including rationales and confidence scores.
- Proposed MEDCO, a co-learning framework jointly fine-tuning a LLaMA text encoder and a heterogeneous GNN for unified medical concept embeddings.
- Demonstrated that MEDCO serves as an effective plug-in concept encoder improving sequential diagnosis prediction on MIMIC-III and MIMIC-IV datasets.

## About the professor

**Dongjie Wang** — Assistant Professor, Electrical Engineering and Computer Science, University of Kansas.

### Research links

- [Faculty/profile page](https://eecs.ku.edu/people/dongjie-wang)
- [Identity evidence](https://wangdongjie100.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, heterogeneous graph representation learning, and graph-based embedding methods
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application to heterogeneous graphs.

This background focuses on Graph Neural Networks (GNNs), essential for understanding the MEDCO framework's joint training of a heterogeneous GNN and a large language model encoder for medical concept embeddings. The rigorous course option offers a deep, structured university-level treatment of GNNs, while the fast track provides a concise, intuition-driven explainer series to quickly grasp core concepts and practical insights. Choose the course for comprehensive mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W 2023](https://www.youtube.com/playlist?list=PLlweTYMJoEmfttflTmuIqf9WSTQw9h-Io) — Kelin zhou · 8 videos · 10.3h across 8 episodes

**Watch only this:** Watch lectures 1, 3, and 4: "Graph Neural Networks", "Machine Learning with Heterogeneous Graphs", and "Knowledge Graph Embeddings" — about 3.9 hours total (~77 minutes each). These cover core GNN concepts, heterogeneous graph handling, and embeddings critical to understanding MEDCO's method.

*Why it unblocks this paper:* Stanford CS224W 2023 is a top-tier university course specifically focused on machine learning with graphs, covering heterogeneous graphs, knowledge graph embeddings, and advanced GNN topics directly relevant to MEDCO's approach.

*If you want all of it:* All 8 episodes total about 10.3 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks](https://www.youtube.com/playlist?list=PLSgGvve8UweGx4_6hhrF3n4wpHf_RV76_) — WelcomeAIOverlords · 11 videos · 5.9h across 11 episodes

**Watch only this:** Watch episodes 1 to 4: "Intro to Graphs and Label Propagation Algorithm in Machine Learning", "Graph Convolutional Networks (GCNs) made simple", "Intro to Relational - Graph Convolutional Networks", and "Graph Attention Networks (GAT) in 5 minutes" — about 2.1 hours total (~32 minutes each). This subset covers foundational GNN concepts and heterogeneous graph attention relevant to MEDCO.

*Why it unblocks this paper:* WelcomeAIOverlords' Graph Neural Networks series offers clear, visual, and intuition-first explanations of GNN fundamentals, including graph convolutional networks and attention mechanisms, suitable for quickly grasping the essentials behind MEDCO's GNN component.

*If you want all of it:* All 11 episodes total about 5.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MEDCO paper, start with foundational knowledge on heterogeneous knowledge graphs and medical concept representation from EHR data, which are crucial for grasping the structure and data sources of the knowledge graph. Next, study large language model prompting techniques for relation extraction and LoRA fine-tuning methods to appreciate the key technical innovations in relation inference and efficient model training. Finally, focus on the paper's core concept by watching the authors' own talk presenting MEDCO, which integrates these components into a novel co-learning framework for medical concept representation.

### heterogeneous knowledge graphs *(prerequisite)*
Understanding heterogeneous knowledge graphs is essential as MEDCO constructs a multi-typed node and edge knowledge graph combining EHR-derived statistics and LLM-inferred relations. This Stanford lecture by Jure Leskovec provides a rigorous, graduate-level introduction to machine learning with heterogeneous graphs, covering schema design and graph structure relevant to MEDCO's KG construction.

*How the paper uses it:* MEDCO builds an evidence-grounded heterogeneous knowledge graph combining statistical and LLM-inferred relations.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Machine Learning with Heterogeneous Graphs](https://www.youtube.com/watch?v=uvrlKxj8HVU) — Stanford Online · 1:18:51 · 2y ago

### medical concept representation from EHR *(prerequisite)*
A solid grasp of how medical concepts are represented from electronic health records is foundational for understanding the input data and clinical semantics MEDCO leverages. Dr. Chris Paton's lecture on EHRs and informatics offers an academic-level overview of EHR data, its structure, and relevance to clinical prediction tasks.

*How the paper uses it:* MEDCO learns medical concept embeddings from EHR data statistics and textual semantics.

▶ [Unit 3: Electronic Health Records Lecture B](https://www.youtube.com/watch?v=SrlzKsKUe-Q) — Dr Chris Paton - Digital Health, Informatics & AI · 32:29 · 6y ago

### large language model prompting for relation extraction *(prerequisite)*
MEDCO uses structured, type-constrained prompting of LLMs to infer semantic relations and enrich KG edges with textual rationales and confidence scores. The Stanford MedAI talk by Yan Hu offers an advanced, domain-specific discussion on improving LLMs for clinical entity recognition via prompt engineering, directly relevant to MEDCO's relation extraction approach.

*How the paper uses it:* MEDCO infers semantic relations and enriches KG edges using LLM prompting.

▶ [MedAI #127: Improving LLMs for Clinical Named Entity Recognition via Prompt Engineering | Yan Hu](https://www.youtube.com/watch?v=tk4ykvAvV7w) — Stanford MedAI · 51:49 · 1y ago

### LoRA fine-tuning for large language models *(prerequisite)*
LoRA is a parameter-efficient fine-tuning technique used in MEDCO to reduce computational cost when tuning the LLaMA text encoder. The NeuralNine video provides a thorough, code-inclusive explanation of LoRA fine-tuning, suitable for advanced readers interested in the technical details of efficient LLM adaptation.

*How the paper uses it:* MEDCO uses LoRA fine-tuning to efficiently adapt the LLaMA text encoder.

▶ [Fine-Tuning Local Models with LoRA in Python (Theory & Code)](https://www.youtube.com/watch?v=XDOSVh9jJiA) — NeuralNine · 57:36 · 1y ago

### MEDCO paper talk *(paper-talk search result; attribution unverified)*
The authors' own talk is the best resource to understand the novel contributions, methodology, and results of MEDCO directly from the creators. Although the exact MEDCO talk is not available, the closest relevant talk from a Harvard Medical AI lab member on a related topic of auto-encoding knowledge graphs for medical reports provides insight into cutting-edge medical AI research involving knowledge graphs and text, which aligns with MEDCO's approach.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel framework MEDCO.

▶ [Harvard Medical AI: Shreya Johri on "AutoEncoding Knowledge Graph for Unsupervised Medical Reports"](https://www.youtube.com/watch?v=nwU94_OuDo0) — Harvard Medical AI | Rajpurkar Lab · 21:16 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand MEDCO, a framework that enriches medical knowledge graphs with large language models for better clinical prediction. We start with basics of medical concept representation from electronic health records (EHR), then explore heterogeneous knowledge graphs and how large language models (LLMs) can be prompted to extract relations. Next, we cover efficient fine-tuning of LLMs using LoRA, and finally dive into the core MEDCO method that jointly learns from LLM text encoding and graph neural networks (GNNs).

### medical concept representation from EHR *(prerequisite)*
Learn what electronic health records (EHRs) are and how clinical concepts like diagnoses, medications, and procedures are represented in structured data for use in AI models. Understanding EHR basics is crucial to grasp how MEDCO builds its knowledge graph from real-world clinical data.

*How the paper uses it:* MEDCO constructs its knowledge graph by mining statistically reliable associations from EHR data.

▶ [Unit 3: Electronic Health Records Lecture B](https://www.youtube.com/watch?v=SrlzKsKUe-Q) — Dr Chris Paton - Digital Health, Informatics & AI · 32:29 · 6y ago

### heterogeneous knowledge graphs *(prerequisite)*
Understand what heterogeneous knowledge graphs are—graphs containing multiple types of nodes and edges—and why they are useful for representing complex, multi-typed relationships such as those among medical concepts. This foundation helps in appreciating MEDCO's evidence-grounded heterogeneous KG construction.

*How the paper uses it:* MEDCO builds a clinically interpretable, evidence-grounded heterogeneous KG combining EHR statistics and LLM-inferred relations.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Machine Learning with Heterogeneous Graphs](https://www.youtube.com/watch?v=uvrlKxj8HVU) — Stanford Online · 1:18:51 · 2y ago

### large language model prompting for relation extraction *(prerequisite)*
Explore how large language models can be prompted to extract semantic relations from text, a key technique for enriching knowledge graphs with meaningful edges and explanations. This concept explains how MEDCO uses LLMs to infer and justify relations between medical concepts.

*How the paper uses it:* MEDCO uses structured, type-constrained LLM prompting to infer semantic relations and enrich KG edges with rationales and confidence scores.

▶ [Workshop: Basics of LLMs & Prompt Engineering | AI in Medical Education Symposium](https://www.youtube.com/watch?v=zriuIpOSL2g) — Stanford CME · 40:46 · 1y ago

### LoRA fine-tuning for large language models *(prerequisite)*
Learn about LoRA, a parameter-efficient fine-tuning technique that adapts large language models by updating a small set of low-rank parameters, reducing computational cost. This technique enables MEDCO to jointly fine-tune its LLaMA text encoder efficiently.

*How the paper uses it:* MEDCO applies LoRA fine-tuning to the LLaMA text encoder to mitigate the computational expense of joint KG-LLM training.

▶ [LoRA (Low-rank Adaption of AI Large Language Models) for fine-tuning LLM models](https://www.youtube.com/watch?v=X4VvO3G6_vw) — AI Bites · 10:42 · 2y ago

### LLM-GNN co-learning framework
Understand the core MEDCO method that jointly trains a fine-tuned LLM text encoder with a heterogeneous graph neural network (GNN) to fuse textual semantics and graph structure into unified medical concept embeddings. This co-learning approach improves clinical prediction by capturing complex dependencies.

*How the paper uses it:* MEDCO jointly fine-tunes a LoRA-tuned LLaMA text encoder and a heterogeneous GNN to learn unified medical concept embeddings for clinical tasks.

▶ [MIT 6.S191 (2025): Large Language Models (Liquid AI)](https://www.youtube.com/watch?v=_HfdncCbMOE) — Alexander Amini · 1:08:18 · 1y ago

## Already in your library

- [Lecture 11 - Graph Neural Networks (GNNs)](https://www.youtube.com/watch?v=FaqkCfv5LTg) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Intro to graph neural networks (ML Tech Talks)](https://www.youtube.com/watch?v=8owQBFAHw7E) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.1-Heterogeneous & Knowledge Graph Embedding](https://www.youtube.com/watch?v=Rfkntma6ZUI) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [CS520: 2021 Knowledge Graphs Seminar Session 1](https://www.youtube.com/watch?v=FRcF6sh8sI0) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Brief Introduction To Knowledge Graph In NLP](https://www.youtube.com/watch?v=WZilmUNVm2U) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Knowledge graphs: A short introduction to the core concepts ...](https://www.youtube.com/watch?v=-jkKlY9UA_Y) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Unit 3: Electronic Health Records (EHR Systems): Lecture A](https://www.youtube.com/watch?v=EBGZdfdZDuU) — also for: Medi-Gemma: A Hybrid Clinical Decision Support System Integrating Deterministic EMR Analytics and Retrieval-Augmented Generation (Usman Roshan)
- [EHR Chapter 1 Lecture: Introduction to Electronic Health Records](https://www.youtube.com/watch?v=9nVd3-gKP0g) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Low-rank Adaption of Large Language Models: Explaining the ...](https://www.youtube.com/watch?v=dA-NhCtrrVE) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)
- [LoRA: Low-Rank Adaptation of Large Language Models - Explained visually + PyTorch code from scratch](https://www.youtube.com/watch?v=PXWYUTMt-AU) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the MEDCO framework for medical concept representation. The beginner project focuses on constructing and enriching a small heterogeneous knowledge graph with LLM-generated semantic descriptions, reflecting the paper's KG enrichment step. The intermediate project involves reimplementing the core MEDCO co-learning framework on a smaller public EHR dataset, showing the joint LLM-GNN training and clinical prediction improvements. The advanced project extends MEDCO by exploring more scalable training strategies such as distillation or sparse updating to address computational cost limitations, potentially starting a research conversation with the professor.

### Beginner — Small-scale Medical KG Enrichment with LLM Node Descriptions
*Effort: a weekend (~8 hours)*

You build a small heterogeneous knowledge graph representing a subset of medical concepts (diagnoses, medications, procedures) using simple co-occurrence statistics from a public EHR dataset substitute. Then you enrich the KG nodes with semantic descriptions generated by prompting an open LLM (e.g., a Hugging Face LLaMA variant) to produce clinical text summaries. You also add edge metadata such as relation labels and confidence scores derived from simple heuristics or LLM prompts.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's KG construction and enrichment pipeline, specifically how LLMs can augment structured EHR-derived graphs with textual semantics and edge rationales, a key contribution of MEDCO.

**Grounded in:** MEDCO enriches the KG with LLM-generated node descriptions and edge metadata including rationales and confidence scores.

**Tech stack:** Python 3.11, NetworkX for graph construction, Hugging Face transformers (e.g., meta-llama/Llama-3.2-1B), Jupyter Notebook

**Data:** Use a publicly available subset of MIMIC-III or MIMIC-IV diagnosis and medication codes as a substitute for the paper's EHR data; alternatively, simulate a small synthetic dataset of medical concepts and co-occurrence counts.

**Build it:**

1. Extract or simulate a small set of medical concepts and their co-occurrence statistics from public EHR data or synthetic data.
2. Construct a heterogeneous knowledge graph with nodes representing concepts and edges representing statistical associations.
3. Prompt a pretrained LLaMA model to generate short clinical descriptions for each node concept.
4. Use LLM prompting or heuristics to assign relation labels and confidence scores to edges.
5. Attach the generated textual descriptions and edge metadata as node and edge attributes in the graph.
6. Visualize the enriched KG and document the enrichment process in a README.

**Verified links from the paper:**

- <https://huggingface.co/meta-llama/Llama-3.2-1B> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing code and notebooks that build and enrich a small medical KG with LLM-generated text attributes, with clear documentation and example outputs.

**Stretch goal:** Add edge rationales generated by the LLM explaining why a relation exists between two concepts.

### Intermediate — Reimplementation of MEDCO Co-learning on Public EHR Data
*Effort: 1-3 weekends (~20 hours)*

You implement the core MEDCO framework by jointly training a LoRA-fine-tuned LLaMA text encoder and a heterogeneous graph neural network on a public EHR dataset substitute (e.g., MIMIC-III). You construct a heterogeneous KG from statistical co-occurrences and enrich it with LLM-generated semantic node and edge attributes. You then evaluate the learned concept embeddings by plugging them into a simple sequential diagnosis prediction model and compare performance against a baseline without MEDCO embeddings.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main method of co-learning text and graph embeddings for medical concepts, and verify its benefit on clinical prediction tasks, demonstrating a deep understanding of MEDCO's joint LLM-GNN training and evaluation.

**Grounded in:** Proposed MEDCO, a co-learning framework jointly fine-tuning a LLaMA text encoder and a heterogeneous GNN for unified medical concept embeddings.

**Tech stack:** Python 3.11, PyTorch, Hugging Face transformers (LoRA fine-tuning), PyTorch Geometric or DGL for heterogeneous GNN, Jupyter Notebook

**Data:** Use MIMIC-III or MIMIC-IV public datasets as a substitute for the paper's EHR data; focus on diagnosis, medication, and procedure codes for KG construction and prediction.

**Build it:**

1. Preprocess the public EHR dataset to extract medical concepts and their co-occurrence statistics.
2. Construct a heterogeneous knowledge graph with nodes and edges representing concepts and relations.
3. Implement LoRA fine-tuning of a LLaMA text encoder on node textual descriptions.
4. Implement a heterogeneous GNN to encode the KG structure.
5. Jointly train the text encoder and GNN to produce unified concept embeddings.
6. Integrate the learned embeddings into a sequential diagnosis prediction model and evaluate against a baseline without MEDCO embeddings.
7. Document the implementation details, training procedure, and evaluation results.

**Verified links from the paper:**

- <https://github.com/mohsen-nyb/MedCo.git> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/meta-llama/Llama-3.2-1B> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to build the KG, jointly train the LLaMA text encoder and heterogeneous GNN, and evaluate on diagnosis prediction, including scripts and notebooks with results.

**Stretch goal:** Experiment with different backbone prediction models (e.g., AdaCare, Transformer) to verify MEDCO's plug-in effectiveness.

### Advanced — Scaling MEDCO with Distillation and Sparse Updating
*Effort: several weeks (~40+ hours)*

You extend the MEDCO framework by implementing scalable training strategies to reduce computational cost. Specifically, you explore knowledge distillation to compress the jointly trained LLaMA-GNN model into a smaller student model, and implement sparse updating techniques to selectively fine-tune only parts of the model per epoch. You evaluate the impact of these strategies on training efficiency and prediction performance on a public EHR dataset substitute.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper—computational expense of joint KG-LLM training—demonstrating your ability to innovate beyond the original method and engage with current research challenges in scalable medical AI.

**Grounded in:** Joint KG-LLM training remains computationally expensive despite mitigation strategies like LoRA fine-tuning and selective code updates; future directions include more efficient training and inference strategies.

**Tech stack:** Python 3.11, PyTorch, Hugging Face transformers, PyTorch Geometric or DGL, LoRA fine-tuning libraries, Jupyter Notebook

**Data:** Use MIMIC-III or MIMIC-IV public datasets as a substitute for the paper's EHR data; focus on diagnosis prediction tasks.

**Build it:**

1. Reimplement or reuse the MEDCO co-learning framework baseline on public EHR data.
2. Implement knowledge distillation to train a smaller student model mimicking the MEDCO teacher model's embeddings.
3. Implement sparse updating by fine-tuning only selected adapter layers or subsets of parameters per epoch.
4. Compare training time, GPU memory usage, and prediction performance of the baseline and scalable variants.
5. Analyze trade-offs between efficiency and accuracy.
6. Document the methods, experiments, and findings in detail.

**Verified links from the paper:**

- <https://github.com/mohsen-nyb/MedCo.git> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/meta-llama/Llama-3.2-1B> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo demonstrating scalable MEDCO training variants with distillation and sparse updating, including benchmarks and analysis of computational cost versus performance.

**Stretch goal:** Investigate integration of additional data modalities such as clinical notes to further enrich the concept embeddings.

_The paper's authors have not released their own code; the intermediate and advanced projects require reimplementation of MEDCO from the paper's description and use of public EHR datasets (MIMIC-III/IV) as substitutes._
