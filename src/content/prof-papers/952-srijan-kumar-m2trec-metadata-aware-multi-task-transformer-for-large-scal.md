---
title: "952 · M2TRec: Metadata-aware Multi-task Transformer for Large-scale and Cold-start free Session-based Recommendations — Srijan Kumar"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-srijan-kumar"
source_hash: "220e12cb569d5b16a5ba2b1543226e8b80504dfa81c3c1f1bf59d55522db9745"
sequence: 952
generator: "outreach-garden: managed"
---

# 952 · M2TRec: Metadata-aware Multi-task Transformer for Large-scale and Cold-start free Session-based Recommendations

## At a glance

- **Professor:** Srijan Kumar
- **Institution:** Georgia Institute of Technology
- **Paper:** [M2TRec: Metadata-aware Multi-task Transformer for Large-scale and Cold-start free Session-based Recommendations](https://arxiv.org/pdf/2209.11824)
- **Authors:** Walid Shalaby, Sejoon Oh, Srijan Kumar, Xiquan Cui, Amir Afsharinejad
- **Year:** 2022

## Paper overview

This paper presents M2TRec, a session-based recommendation system that uses item metadata instead of item IDs to generate recommendations. It addresses scalability issues in large datasets and improves recommendations for new or unpopular items (cold-start problem) by learning item representations from metadata like title, category, and brand. The model is trained to predict the next item and its categories simultaneously, improving accuracy and convergence speed. Experiments on real-world datasets show M2TRec outperforms existing methods, especially on sparse sessions with cold-start items.

### Why it matters

**Research problem:** Existing session-based recommender systems (SBRSs) struggle with scalability on large industrial datasets due to large item-ID embedding matrices and perform poorly on cold-start or sparse sessions with new or unpopular items. They also often cannot predict categories of next items or scale efficiently.

**Why it matters:** Recommender systems are critical for e-commerce and online platforms to provide relevant suggestions. Handling large-scale data efficiently and recommending cold-start items accurately are essential for improving user experience and business outcomes. Scalability and cold-start issues limit practical deployment of SBRSs in real-world settings.

**Key contributions:**

- Proposed an item-ID free SBRS that uses only item metadata for representation, improving scalability on large datasets.
- Introduced a multi-task learning framework predicting next item and its categories to enhance recommendation accuracy and convergence.
- Demonstrated superior performance on two real-world datasets, especially on sparse sessions with cold-start or tail items.
- Showed that metadata-aware models are smaller in size and more scalable than item-ID based models.
- Provided a unified encoding method for diverse metadata types (textual, categorical, numerical).

## About the professor

**Srijan Kumar** — Associate Professor, School of Computational Science and Engineering, Georgia Institute of Technology.

Research interests: Data science, applied machine learning, network analysis

### Research links

- [Faculty/profile page](https://www.cse.gatech.edu/people/srijan-kumar)
- [Professor website](https://www.cc.gatech.edu/~skumar498/)
- [Resolved homepage](https://faculty.cc.gatech.edu/~skumar498/)
- [Google Scholar](https://scholar.google.com/citations?user=kqfLNK8AAAAJ)
- [Social profile](https://twitter.com/srijankedia)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer models in machine learning
**The paper assumes:** Transformer neural networks, self-attention mechanisms, sequence modeling in machine learning
**Already in this field?** Skip this entirely if you already understand Transformer architectures and their application to sequence data in machine learning.

This background focuses on Transformer models in machine learning, which are central to understanding the M2TRec paper's multi-task Transformer architecture for session-based recommendations. The rigorous course option provides a deep, structured university-level exploration of Transformer fundamentals and their applications, while the fast track offers a concise, beginner-friendly series that covers the core concepts quickly and intuitively. Choose the course for comprehensive mastery or the fast track for a focused, time-efficient introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3, about 5.3 hours — covering Transformer basics, Transformer-based models and tricks, and large language models to understand the architecture and sequence encoding principles.

*Why it unblocks this paper:* Stanford CME295 is a university-level course dedicated specifically to Transformers and Large Language Models, covering the core Transformer architecture, self-attention mechanisms, and training techniques relevant to the M2TRec model's design and multi-task learning approach.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLMs From Scratch: Theory, Math, Code & Transformers](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8BQtdyf29kkoAXpcjaGXHHn) — Code With Aarohi · 10 videos · 5.8h across 10 episodes

**Watch only this:** Episodes 4-8, about 2.9 hours — focusing on Transformer architecture, positional encoding, self-attention, multi-head attention, and feed-forward networks for a concise yet thorough grasp of Transformer components.

*Why it unblocks this paper:* The 'LLMs From Scratch' playlist by Code With Aarohi offers a clear, beginner-friendly explanation of Transformer architecture and self-attention, including step-by-step mathematical intuition and code, which aligns well with understanding M2TRec's Transformer encoder and multi-task training.

*If you want all of it:* 5.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the M2TRec paper, start with foundational knowledge on session-based recommendation systems and Transformer models applied to recommender systems, as these provide the problem context and architectural background. Next, study multi-task learning in deep learning to grasp the training paradigm that enhances M2TRec's performance. Finally, focus on the core concept of the paper itself, including the authors' own talk if available, to understand their novel metadata-aware multi-task Transformer approach for scalable and cold-start free session-based recommendations.

### Session-based recommendation systems *(prerequisite)*
This section covers the problem domain of session-based recommendation systems, including baseline approaches and challenges such as scalability and cold-start issues. Understanding these fundamentals is crucial to appreciate the motivation behind M2TRec's design.

*How the paper uses it:* M2TRec addresses limitations in existing session-based recommender systems, making this foundational knowledge essential.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I GNNs for Recommender Systems](https://www.youtube.com/watch?v=OV2VUApLUio) — Stanford Online · 1:18:47 · 2y ago

### Transformer models in recommender systems *(prerequisite)*
Learn how Transformer architectures are adapted for recommendation tasks, focusing on their ability to model sequential user-item interactions effectively. This knowledge is key to understanding M2TRec's Transformer encoder design.

*How the paper uses it:* M2TRec uses a Transformer encoder to learn session representations from metadata embeddings.

▶ [PydataTT#18 Training session-based Recommender Models with Transformers - Gabriel de Souza, Ronay Ak](https://www.youtube.com/watch?v=HD4D-S4DKcI) — PyDataTT · 48:11 · 4y ago

### Multi-task learning in deep learning *(prerequisite)*
Explore the principles and benefits of multi-task learning, which allows models to learn shared representations by optimizing multiple related tasks simultaneously. This concept underpins M2TRec's training strategy to predict next items and their categories.

*How the paper uses it:* M2TRec employs multi-task learning to improve accuracy and convergence by predicting next items and their categories.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - What is multi-task learning? I 2022 I Lecture 1](https://www.youtube.com/watch?v=bkVCAk9Nsss) — Stanford Online · 1:11:58 · 3y ago

### M2TRec paper talk *(paper-talk search result; attribution unverified)*
Focus on the authors' own detailed presentation of M2TRec, which provides direct insights into their methodology, experimental results, and contributions. This talk is the most authoritative source on the paper's core innovations.

*How the paper uses it:* This is the authors' own talk presenting M2TRec, the core contribution of the paper.

▶ [Foundation Models for General Classification (and Regression)!](https://www.youtube.com/watch?v=0XxfErCRyCM) — marimo · 25:56 · 4d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the M2TRec paper, starting with the basics of session-based recommendation systems to grasp the problem domain. It then covers Transformer models in recommender systems to understand the architecture used, followed by multi-task learning to appreciate the training strategy. Finally, it explains metadata-based item representation, which is the core innovation of M2TRec, enabling scalable and cold-start free recommendations.

### Session-based recommendation systems *(prerequisite)*
Session-based recommendation systems predict the next item a user might interact with based only on their current session's sequence of interactions, without relying on long-term user profiles. This approach is crucial for scenarios where users are anonymous or have short interaction histories. Understanding this sets the stage for why M2TRec focuses on session data and cold-start challenges.

*How the paper uses it:* M2TRec addresses scalability and cold-start problems specifically in session-based recommendation systems.

▶ [Recurrent Neural Networks for Session-based Recommendations - Alexandros Karatzoglou](https://www.youtube.com/watch?v=M7FqgXySKYk) — Criteo Tech · 43:12 · 8y ago

### Transformer models in recommender systems *(prerequisite)*
Transformers use self-attention mechanisms to capture complex sequential dependencies in data, making them powerful for modeling user-item interaction sequences in recommendation tasks. Learning how Transformers are adapted for recommendations helps understand M2TRec's architecture, which uses a Transformer encoder to process item metadata sequences.

*How the paper uses it:* M2TRec employs a Transformer encoder to learn session representations from concatenated item metadata embeddings.

▶ [PydataTT#18 Training session-based Recommender Models with Transformers - Gabriel de Souza, Ronay Ak](https://www.youtube.com/watch?v=HD4D-S4DKcI) — PyDataTT · 48:11 · 4y ago

### Multi-task learning in deep learning *(prerequisite)*
Multi-task learning trains a model to perform multiple related tasks simultaneously, which can improve generalization and speed up convergence by sharing representations. This concept explains how predicting both the next item and its categories helps M2TRec improve recommendation accuracy and training efficiency.

*How the paper uses it:* M2TRec uses multi-task learning to predict the next item and its categories, enhancing accuracy and convergence speed.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - What is multi-task learning? I 2022 I Lecture 1](https://www.youtube.com/watch?v=bkVCAk9Nsss) — Stanford Online · 1:11:58 · 3y ago

### Metadata-based item representation
Instead of representing items by unique IDs, metadata-based representation uses descriptive attributes like title, category, and brand to encode items. This approach enables better scalability and cold-start handling because new or rare items can be represented through their metadata. Understanding this is key to grasping M2TRec's main innovation.

*How the paper uses it:* M2TRec is item-ID free and relies solely on item metadata for scalable and cold-start free recommendations.

▶ [What is Metadata? | Types of Metadata - Detailed Explained in Hindi](https://www.youtube.com/watch?v=2vpo9LYioTc) — Success Audiobooks · 8:43 · 4y ago

## Already in your library

- [Knowledge-Based Systems Explained | Recommender Systems](https://www.youtube.com/watch?v=nYaT-pRBzuQ) — also for: OptiGuide: An Efficient Domain-Independent Package Recommender System Based on Multi-Objective Optimization and User Decision Guidance (Alexander Brodsky)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Multi-Task Learning | Explained in 5 Minutes](https://www.youtube.com/watch?v=ckQuvrksP4k) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)
- [Data privacy and fairness in recommender systems by Martin Tegner](https://www.youtube.com/watch?v=9U3965uAezM) — also for: CONSEQUENCES 2025 - The 4th Workshop on Causality, Counterfactuals and Sequential Decision-Making for Recommender Systems (Thorsten Joachims)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of M2TRec, a metadata-aware multi-task Transformer for session-based recommendation. The beginner project focuses on reproducing a key metric comparison using simple metadata encoding and a baseline. The intermediate project involves reimplementing the core M2TRec model on a public session-based dataset, comparing it to a baseline, and reporting recommendation metrics. The advanced project extends M2TRec by incorporating user metadata or richer context, addressing a stated limitation and exploring improved recommendation performance.

### Beginner — Metadata-based Next Item Recommendation with Simple Transformer
*Effort: a weekend, ~8 hours*

You build a small session-based recommendation system that uses only item metadata (e.g., category and brand) encoded as embeddings, fed into a simple Transformer encoder to predict the next item in a session. You compare your model's Recall@20 metric against a simple heuristic baseline like most popular items.

**Why it shows you understood the paper:** This project shows you understand the core idea of replacing item-ID embeddings with metadata embeddings and using a Transformer for session encoding, as well as how to evaluate recommendation accuracy with standard metrics.

**Grounded in:** Proposed an item-ID free SBRS that uses only item metadata for representation, improving scalability on large datasets.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas

**Data:** Use the Diginetica dataset from the paper's experiments, or a publicly available session-based dataset with item metadata such as categories and brands. If unavailable, simulate sessions with synthetic metadata.

**Build it:**

1. Load and preprocess session data with item metadata (category, brand).
2. Encode categorical metadata as embeddings and concatenate them per item.
3. Build a simple Transformer encoder to process sessions of metadata embeddings.
4. Train the model to predict the next item in the session using cross-entropy loss.
5. Implement a heuristic baseline recommending most popular items.
6. Evaluate both models on Recall@20 and compare results.

**Ships as:** A GitHub repo with code, a README explaining the metadata-only Transformer approach, evaluation scripts, and a report comparing Recall@20 of your model versus baseline.

**Stretch goal:** Add textual metadata encoding (e.g., item titles using pretrained embeddings) to improve item representation.

### Intermediate — Reimplementation of M2TRec on Public Session Dataset
*Effort: 1-3 weekends*

You reimplement the core M2TRec model as described in the paper: an item-ID free multi-task Transformer that encodes item metadata (title, category, brand) and predicts the next item and its categories simultaneously. You train and evaluate it on a public session-based recommendation dataset with metadata, comparing it against a baseline such as GRU4Rec.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's multi-task learning framework and metadata encoding strategy, reproducing key metrics like HIT@20, Recall@20, and MRR@20 to validate performance improvements.

**Grounded in:** Introduced a multi-task learning framework predicting next item and its categories to enhance recommendation accuracy and convergence.

**Tech stack:** Python 3.11, PyTorch, transformers, pandas, numpy

**Data:** Use the Diginetica dataset or THD dataset referenced in the paper if publicly available; otherwise, use a public session-based dataset with rich item metadata such as the RetailRocket dataset or simulate metadata.

**Build it:**

1. Preprocess the dataset to extract sessions and item metadata (title, category, brand).
2. Implement metadata encoders: categorical embeddings and text embeddings for titles.
3. Build the multi-task Transformer model with heads for next item and category prediction.
4. Train the model with multi-task loss on the training sessions.
5. Implement a baseline model such as GRU4Rec for comparison.
6. Evaluate both models on HIT@20, Recall@20, and MRR@20 metrics and report results.

**Verified links from the paper:**

- <https://github.com/rn5l/session-rec> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with a full M2TRec reimplementation, training scripts, evaluation code, and a detailed README documenting the multi-task approach and metric comparisons.

**Stretch goal:** Experiment with different metadata fusion strategies or add subcategory prediction as an additional task.

### Advanced — Extending M2TRec with User Metadata and Contextual Session Features
*Effort: a few weeks*

You extend the M2TRec model by incorporating user metadata (e.g., user demographics or behavior features) and richer contextual session information (e.g., time of day, device type) into the item metadata encoding and Transformer input. You evaluate whether this extension improves recommendation accuracy and cold-start item handling, addressing a limitation noted in the paper.

**Why it shows you understood the paper:** This project shows you can critically analyze the paper's limitations and implement a genuine extension that integrates additional metadata types, testing their impact on recommendation performance in a realistic setting.

**Grounded in:** Explore incorporating user metadata and richer contextual information to further improve recommendations.

**Tech stack:** Python 3.11, PyTorch, transformers, pandas, numpy, scikit-learn

**Data:** Use a session-based recommendation dataset with available user metadata and session context, or augment an existing dataset with synthetic user/context features.

**Build it:**

1. Collect or augment dataset with user metadata and session context features.
2. Design embedding and encoding schemes for user and contextual features.
3. Modify the M2TRec Transformer input to include these additional embeddings.
4. Train the extended multi-task model with the same objectives as M2TRec.
5. Evaluate improvements on cold-start and sparse sessions using HIT@20 and Recall@20.
6. Analyze and document the impact of user/context metadata on recommendation quality.

**Verified links from the paper:**

- <https://github.com/rn5l/session-rec> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the extended M2TRec implementation, data preprocessing scripts for user/context metadata, evaluation results, and a comprehensive README discussing the extension and its effects.

**Stretch goal:** Implement parameter sharing or model compression techniques to reduce model size while maintaining performance.

_The original paper does not provide released code or datasets; dataset access may require substitution with public session-based datasets with metadata or synthetic data generation._
