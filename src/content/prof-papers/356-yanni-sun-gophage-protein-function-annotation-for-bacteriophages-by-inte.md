---
title: "356 · GOPhage: protein function annotation for bacteriophages by integrating the genomic context — Yanni Sun"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanni-sun"
source_hash: "4f2dbbcd5fde4a02c1729f0430556c00b943143e44178e5e4c55138cd8ca0541"
sequence: 356
generator: "outreach-garden: managed"
---

# 356 · GOPhage: protein function annotation for bacteriophages by integrating the genomic context

## At a glance

- **Professor:** Yanni Sun
- **Institution:** City University of Hong Kong
- **Paper:** [GOPhage: protein function annotation for bacteriophages by integrating the genomic context](https://yiheng-zhu.github.io/Yiheng/papers/1/GOPhage.pdf)
- **Authors:** Jiaojiao Guan, Yongxin Ji, Cheng Peng, Wei Zou, Xubo Tang, Jiayu Shang, Yanni Sun
- **Year:** 2025

## Paper overview

GOPhage is a novel computational tool designed to predict the functions of proteins in bacteriophages by leveraging their genomic context and advanced protein language models. It improves annotation accuracy, especially for proteins that are diverse or lack sequence similarity to known proteins, thus enhancing our understanding of phage biology and aiding applications like phage therapy.

### Why it matters

**Research problem:** Accurate annotation of bacteriophage protein functions is challenging due to the high diversity of phage proteins and the scarcity of experimentally annotated proteins. Existing tools do not fully exploit the unique modular genomic structure of phages or contextual relationships among proteins.

**Why it matters:** Understanding phage protein functions is critical for microbial ecology studies and for developing phage-based antibacterial therapies, especially as phages are considered alternatives to antibiotics amid rising antibiotic resistance. Improved annotation tools can accelerate biological discovery and practical applications.

**Key contributions:**

- Development of GOPhage, a protein function annotation tool that leverages phage genomic context and protein language models.
- Demonstration that incorporating contextual protein information improves annotation accuracy over single-protein models.
- Introduction of GOPhage+, a hybrid model combining deep learning and homology search for superior performance.
- Application of GOPhage to identify 688 potential holin proteins, many lacking sequence similarity but showing structural homology.
- Provision of two GOPhage variants balancing performance and computational efficiency.

## About the professor

**Yanni Sun** — Professor, Dept. of Electrical Engineering, City University of Hong Kong.

Research interests: Computational biology and Bioinformatics, deep learning-based sequence analysis, BIG genomic data mining, algorithm design and tool development

### Research links

- [Faculty/profile page](https://www.cityu.edu.hk/stfprofile/yannisun.htm)
- [Identity evidence](https://www.egr.msu.edu/people/profile/yannisun)
- [Identity evidence](https://yannisun.github.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand GOPhage, start with foundational knowledge on protein language models and Transformer architectures, as these underpin the method's embedding and contextual learning approach. Next, gain biological background on bacteriophage genomics to appreciate the modular genome context GOPhage leverages. Then, review existing protein function annotation methods to contextualize GOPhage's advances. Finally, focus on the core concept of GOPhage itself, including the authors' own talks and related advanced content on contextual protein embeddings.

### protein language models *(prerequisite)*
Protein language models like ESM2 provide the foundational embeddings that GOPhage uses to represent protein sequences. Understanding these models' architecture and training helps grasp how GOPhage captures protein features beyond sequence similarity.

*How the paper uses it:* GOPhage integrates embeddings from the ESM2 protein foundation model to improve protein function annotation.

▶ [ESM-2 Protein Language Model Explained – Architecture & Training](https://www.youtube.com/watch?v=_9oTqDWGaFc) — ProteinVision · 8 months ago

### Transformer models in bioinformatics *(prerequisite)*
Transformer architectures enable learning contextual relationships among proteins in phage genomes, a key innovation in GOPhage. Familiarity with Transformers clarifies how GOPhage models protein order and interactions.

*How the paper uses it:* GOPhage uses a Transformer-based model to learn contextual relationships among proteins within phage genomes.

▶ [Τristan Bepler - Learning from Evolution to Design New Proteins](https://www.youtube.com/watch?v=YxstpjiAIxA) — Bioinformatics Seminar Series at Purdue CS · 1:08:08

### bacteriophage genomics *(prerequisite)*
Understanding the modular genomic structure and biology of bacteriophages is essential to appreciate why genomic context improves protein function annotation in GOPhage.

*How the paper uses it:* GOPhage is inspired by the modular genomic structure of phage genomes to leverage protein context for annotation.

▶ [Graham Hatfull (University of Pittsburgh/HHMI) Part 2: Bacteriophages: Genomic insights.](https://www.youtube.com/watch?v=ZENpYdQg-z4) — Science Communication Lab · 15 years ago

### protein function annotation methods *(prerequisite)*
Reviewing existing protein function annotation approaches and their limitations provides context for GOPhage's improvements, especially in handling diverse and poorly annotated phage proteins.

*How the paper uses it:* GOPhage outperforms state-of-the-art protein function annotation tools by integrating genomic context and protein language models.

▶ [Predicting protein function with ProtNLM](https://www.youtube.com/watch?v=FLkoaDJBC54) — Google Research · 3 years ago

### contextual protein embeddings
Contextual protein embeddings capture relationships among proteins in a genome, which is central to GOPhage's improved annotation accuracy. Understanding this concept clarifies the model's advantage over single-protein embeddings.

*How the paper uses it:* GOPhage improves annotation accuracy by incorporating contextual protein embeddings derived from phage genomic context.

▶ [Protein embeddings and deep learning predict... - Maria Littmann - Function - Abstract - ISMB 2022](https://www.youtube.com/watch?v=ZLbIel0wr6g) — ISCB · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational biology and machine learning concepts necessary to understand GOPhage, a tool for bacteriophage protein function annotation. We start with bacteriophage genomics to grasp the biological context, then cover protein language models and Transformer architectures to understand the computational methods. Finally, we explore protein function annotation methods and contextual protein embeddings, culminating in insights into GOPhage's novel integration of genomic context and deep learning.

### bacteriophage genomics *(prerequisite)*
Learn the basics of bacteriophages, viruses that infect bacteria, focusing on their genome structure and modular organization. This biological background is essential to appreciate how GOPhage leverages genomic context for protein function prediction.

*How the paper uses it:* GOPhage is inspired by the modular genomic structure of phage genomes to improve protein annotation.

▶ [Graham Hatfull (University of Pittsburgh/HHMI) Part 1: Bacteriophages: What are they?](https://www.youtube.com/watch?v=3VjE1zddXWk) — Science Communication Lab · 15 years ago

### protein language models *(prerequisite)*
Understand protein language models, which treat protein sequences like text to learn meaningful embeddings capturing biochemical properties. This foundation explains how GOPhage uses ESM2 embeddings to represent proteins computationally.

*How the paper uses it:* GOPhage integrates embeddings from the ESM2 protein foundation model for improved function prediction.

▶ [ESM-2 Protein Language Model Explained – Architecture & Training](https://www.youtube.com/watch?v=_9oTqDWGaFc) — ProteinVision · 8 months ago

### Transformer models in bioinformatics *(prerequisite)*
Explore Transformer neural networks, which learn contextual relationships in sequences using attention mechanisms. This knowledge is key to understanding how GOPhage models protein context within phage genomes.

*How the paper uses it:* GOPhage uses a Transformer-based model to learn contextual relationships among proteins in phage genomes.

▶ [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — The AI Hacker · 15:01

### protein function annotation methods *(prerequisite)*
Get an overview of existing computational approaches for predicting protein functions, including homology-based and deep learning methods. This sets the stage for appreciating GOPhage's advancements over prior tools.

*How the paper uses it:* GOPhage outperforms state-of-the-art protein function annotation methods by leveraging genomic context and embeddings.

▶ [Predicting protein function with ProtNLM](https://www.youtube.com/watch?v=FLkoaDJBC54) — Google Research · 3 years ago

### contextual protein embeddings
Learn how incorporating the context of proteins—such as their neighbors in a genome—into embeddings improves function prediction accuracy. This concept is central to GOPhage's innovation.

*How the paper uses it:* GOPhage improves annotation accuracy by integrating contextual protein embeddings beyond single-protein representations.

▶ [Protein embeddings and deep learning predict... - Maria Littmann - Function - Abstract - ISMB 2022](https://www.youtube.com/watch?v=ZLbIel0wr6g) — ISCB · 3 years ago

## Already in your library

- [Lecture11 - Protein Language Models - MLCB24](https://www.youtube.com/watch?v=uPoFdCUqBWk) — also for: TCR-EML: Explainable Model Layers for TCR-pMHC Prediction (Ramgopal Mettu)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [What are Transformers (Machine Learning Model)?](https://www.youtube.com/watch?v=ZXiruGOCn9s) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of GOPhage by progressively engaging with its core ideas and extending them. The beginner project recreates a key comparison of contextual versus single-protein embeddings using the authors' released code. The intermediate project applies GOPhage's core Transformer-based contextual model on a small phage protein dataset to reproduce annotation metrics and compare with a baseline. The advanced project tackles a stated limitation by exploring how to adapt GOPhage to engineered phages with novel genomic contexts, proposing and testing a method to handle proteins without natural genomic order.

### Beginner — Reproduce Contextual vs Single-Protein Embedding Comparison
*Effort: a weekend, ~8 hours*

You build a small experiment using the GOPhage codebase to compare protein function annotation performance using contextual protein embeddings versus single-protein embeddings on a provided phage protein subset. You reproduce the metric improvements (AUPR and Fmax) reported for this comparison in the paper.

**Why it shows you understood the paper:** This project shows you understand the key innovation of GOPhage in leveraging genomic context and how it quantitatively improves annotation accuracy over single-protein models.

**Grounded in:** Incorporating contextual protein embeddings improves annotation accuracy compared to single-protein embeddings.

**Tech stack:** Python 3.11, PyTorch, GOPhage codebase dependencies

**Data:** Use the phage protein datasets included or referenced in the GOPhage GitHub repository at https://github.com/jiaojiaoguan/GOPhage, which are derived from Caudoviricetes phage genomes.

**Build it:**

1. Clone the GOPhage repository from https://github.com/jiaojiaoguan/GOPhage and install dependencies.
2. Identify the scripts or notebooks that perform the embedding comparison between TransBASE (single-protein embeddings) and GOPhageBASE (contextual embeddings).
3. Run the experiments on a small subset of the phage protein data to reproduce AUPR and Fmax metrics.
4. Plot or tabulate the results to show the improvement in annotation accuracy due to contextual embeddings.
5. Write a README explaining the experiment, the metrics, and how this reproduces the paper's reported results.

**Verified links from the paper:**

- <https://github.com/jiaojiaoguan/GOPhage> — released by the paper's authors

**Ships as:** A GitHub repo with code, results, and README demonstrating the metric improvements from contextual embeddings over single-protein embeddings using GOPhage code and data.

**Stretch goal:** Add a simple visualization of protein genomic contexts to illustrate how context is encoded.

### Intermediate — Implement GOPhage Core Model on Small Phage Protein Dataset
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core GOPhage Transformer-based model that integrates protein language model embeddings with genomic context to predict protein functions. You train and evaluate it on a small phage protein dataset (e.g., a subset of Caudoviricetes phage genomes), comparing performance against a baseline single-protein embedding model using metrics like AUPR and Fmax.

**Why it shows you understood the paper:** This project demonstrates your ability to implement and apply the paper's core method, understand the integration of protein embeddings with genomic context, and evaluate annotation performance quantitatively.

**Grounded in:** GOPhage integrates embeddings from a state-of-the-art protein foundation model (ESM2) with a Transformer-based model that learns contextual relationships among proteins within phage genomes.

**Tech stack:** Python 3.11, PyTorch, transformers library, ESM2 protein language model

**Data:** Use publicly available Caudoviricetes phage protein sequences and annotations if accessible; otherwise, simulate a small dataset of phage genomes with protein sequences and GO annotations based on the paper's description.

**Build it:**

1. Obtain or simulate a small dataset of phage genomes with protein sequences and function annotations.
2. Extract protein embeddings using the ESM2 protein language model via the transformers library.
3. Implement a Transformer-based model that takes sequences of protein embeddings representing genomic context and predicts GO terms for each protein.
4. Train the model on the dataset and evaluate using AUPR and Fmax metrics.
5. Implement a baseline model that predicts functions using only single-protein embeddings without context.
6. Compare the performance of your GOPhage-like model against the baseline and report results.
7. Document your implementation, training procedure, and evaluation in a detailed README.

**Ships as:** A GitHub repo with code for the Transformer contextual model, baseline, training scripts, evaluation metrics, and a report comparing performance, demonstrating the core GOPhage method.

**Stretch goal:** Incorporate simple alignment-based features to mimic GOPhage+ hybrid model and evaluate performance gain.

### Advanced — Adapt GOPhage for Engineered Phages with Novel Genomic Contexts
*Effort: few weeks, ~40+ hours*

You extend the GOPhage approach to handle engineered or synthetic phage genomes that have novel protein arrangements not well represented in natural datasets. You design and implement a method to annotate proteins individually or with alternative context representations, test it on simulated engineered phage data, and evaluate annotation accuracy compared to the original GOPhage model.

**Why it shows you understood the paper:** This project addresses a key limitation stated in the paper and explores a future direction, showing deep comprehension of GOPhage's reliance on genomic context and practical challenges in applying it to synthetic biology.

**Grounded in:** Performance may be affected for engineered phages with novel genomic arrangements. For genomic arrangements not well represented in natural datasets, inputting individual proteins is recommended.

**Tech stack:** Python 3.11, PyTorch, transformers library, ESM2 protein language model, GOPhage codebase

**Data:** Simulate engineered phage genomes by rearranging protein orders or inserting novel proteins in existing Caudoviricetes phage genome data or synthetic sequences with GO annotations.

**Build it:**

1. Review GOPhage's original method and codebase to understand how genomic context is encoded.
2. Design an alternative input representation that can handle proteins without natural genomic order, e.g., individual protein embeddings with learned positional encodings or graph-based context.
3. Simulate engineered phage genomes by rearranging protein orders or creating synthetic protein sequences with annotations.
4. Implement the adapted model and train/evaluate it on the simulated engineered dataset.
5. Compare annotation performance with the original GOPhage model on natural and engineered datasets.
6. Write a detailed report discussing the challenges, your approach, results, and implications for synthetic phage annotation.

**Verified links from the paper:**

- <https://github.com/jiaojiaoguan/GOPhage> — released by the paper's authors

**Ships as:** A GitHub repo with code for the adapted GOPhage model, simulated engineered phage datasets, evaluation scripts, and a comprehensive README/report discussing the extension and results.

**Stretch goal:** Explore integrating protein structural features or GO term hierarchical information to further improve annotation specificity for engineered phages.
