---
title: "759 · RepSGG: Novel Representations of Entities and Relationships for Scene Graph Generation — Bir Bhanu"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bir-bhanu"
source_hash: "516b04a4af5eb744be41079fcb7c3de93c9fed9584996731360f7a948461005a"
sequence: 759
generator: "outreach-garden: managed"
---

# 759 · RepSGG: Novel Representations of Entities and Relationships for Scene Graph Generation

## At a glance

- **Professor:** Bir Bhanu
- **Institution:** Univ. of California - Riverside
- **Paper:** [RepSGG: Novel Representations of Entities and Relationships for Scene Graph Generation](https://arxiv.org/pdf/2309.03240)
- **Authors:** Hengyue Liu, Bir Bhanu
- **Year:** 2023

## Paper overview

This paper introduces RepSGG, a new method for generating scene graphs from images by representing entities as sets of subject queries and object keys, and relationships as attention weights between these. It also proposes a performance-guided logit adjustment (PGLA) to address the long-tailed distribution problem in scene graph data. The approach achieves state-of-the-art or comparable results on major datasets with faster inference speeds.

### Why it matters

**Research problem:** Scene Graph Generation (SGG) aims to represent visual scenes as graphs with entities as nodes and relationships as edges. Existing methods rely on fixed-size entity representations (box-based, point-based, or query-based) that have trade-offs between semantic richness, computational cost, and flexibility. Additionally, SGG suffers from long-tailed data distributions causing biased learning and poor generalization to rare classes.

**Why it matters:** Accurate and efficient scene graph generation enables high-level visual reasoning tasks such as image captioning, retrieval, visual question answering, and image generation. Improving entity and relationship representations and addressing long-tailed distributions can significantly enhance the quality and applicability of scene graph models.

**Key contributions:**

- Introduces a novel SGG paradigm representing entities as queries and keys and relationships as attention weights, capturing semantics and directionality effectively.
- Proposes a run-time performance-guided logit adjustment (PGLA) strategy to dynamically address long-tailed data imbalance in SGG.
- Demonstrates state-of-the-art or comparable performance on Visual Genome and Open Images V6 datasets with faster inference speeds.
- Develops a flexible rep-point sampling mechanism to progressively augment entity embeddings with semantically representative visual features.
- Provides extensive ablation studies and analysis on inference speed, loss functions, and hyperparameters.

## About the professor

**Bir Bhanu** — Bourns Presidential Chair, Distinguished Professor of Electrical and Computer Engineering, Cooperative Professor of Computer Science and Engineering, Mechanical Engineering and Bioengineering, Director of the Center for Research in Intelligent Systems (CRIS), Department of Electrical and Computer Engineering, Univ. of California - Riverside.

Research interests: object/target recognition, learning and vision, image/video understanding, image/video databases with applications in security, defense, intelligence, biological and medical imaging, biometrics, autonomous navigation and industrial machine vision

### Research links

- [Faculty/profile page](https://cris.ucr.edu/people/bir-bhanu)
- [Professor website](https://www.vislab.ucr.edu/PEOPLE/BIR_BHANU/index.php)
- [Lab website](https://www.vislab.ucr.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer models in machine learning
**The paper assumes:** transformer architectures, attention mechanisms, query-key-value embeddings, and cross-attention in deep learning
**Already in this field?** Skip this entirely if you already understand transformer models and attention mechanisms in machine learning.

Understanding transformer models is crucial for grasping the core architecture and innovations of RepSGG, which relies heavily on transformer-based attention mechanisms to represent entities and relationships in scene graph generation. The rigorous course option provides a deep, structured university-level exploration of transformers, ideal for a thorough technical foundation. The fast track offers a concise, intuition-driven explainer series that covers the essential concepts quickly and clearly, suitable for those needing a solid overview without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3, about 5.3 hours — covering the Transformer architecture, transformer-based models and tricks, and large language models to build a solid foundation on attention mechanisms and transformer design.

*Why it unblocks this paper:* Stanford CME295 is a university-level course focused specifically on transformers and large language models, covering the core components, architecture, and performance techniques that underpin RepSGG's transformer-based design.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Attention Is All You Need (2017) – Transformer Paper Explained Simply](https://www.youtube.com/playlist?list=PLtimovBkjswFvL3RoFoIzwlJ3VHttqqsE) — AI Breakdowns – James Agba · 10 videos · 1.8h across 10 episodes

**Watch only this:** Episodes 0-4, about 50 minutes — covering the motivation, background, big picture architecture, and self-attention to grasp the essential ideas behind transformers.

*Why it unblocks this paper:* This short-form series by AI Breakdowns offers clear, intuitive explanations of the original Transformer paper and its key concepts, providing a quick yet comprehensive understanding of attention mechanisms and transformer architecture relevant to RepSGG.

*If you want all of it:* 1.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the RepSGG paper, start by building foundational knowledge on scene graph generation methods and handling long-tailed distributions in vision, as these are critical to grasp the problem context and the novel logit adjustment technique. Next, gain a solid understanding of transformer attention mechanisms, which underpin the paper's approach to representing entities and relationships. Finally, focus on the core concept of the RepSGG paper itself by watching the authors' own talk, which directly explains their novel representation paradigm and performance-guided logit adjustment strategy.

### Scene graph generation methods *(prerequisite)*
This section covers the overall task of scene graph generation and common approaches used in the field. Understanding these methods provides the necessary background to appreciate the innovations introduced by RepSGG in entity and relationship representation.

*How the paper uses it:* RepSGG advances scene graph generation by proposing a novel representation of entities and relationships beyond existing box-, point-, or query-based methods.

▶ [Energy-Based Learning for Scene Graph Generation](https://www.youtube.com/watch?v=GzMHEwlEthw) — Suhail Mohammed · 5:00 · 5y ago

### Long-tailed distribution handling in vision *(prerequisite)*
This section explores techniques to address class imbalance in visual recognition tasks, which is crucial for understanding the paper's performance-guided logit adjustment (PGLA) method designed to mitigate long-tailed data issues in scene graph generation.

*How the paper uses it:* PGLA dynamically adjusts logits during training to handle the long-tailed distribution problem inherent in scene graph data.

▶ [Deva Ramanan - Understanding Visual Appearances in the Long-tail](https://www.youtube.com/watch?v=YTHqXEI_vgs) — UBC Computer Science · 1:14:51 · 11y ago

### Transformer attention mechanisms *(prerequisite)*
This section explains the transformer architecture and the attention mechanism, including queries, keys, and values, which are fundamental to how RepSGG models entities and relationships as attention weights between subject queries and object keys.

*How the paper uses it:* RepSGG uses a transformer-based decoder with attention layers to represent entities and relationships effectively.

▶ [Stanford CS25: V2 I Introduction to Transformers w/ Andrej Karpathy](https://www.youtube.com/watch?v=XfpMkf4rD6E) — Stanford Online · 1:11:41 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the RepSGG paper, start by learning about the general task of scene graph generation and common methods, which sets the context for the problem RepSGG addresses. Next, grasp how transformer attention mechanisms work, since RepSGG models entities and relationships using attention. Then, study how long-tailed data distributions affect visual recognition and how they can be handled, which is crucial for understanding RepSGG's PGLA method. Finally, explore the core concept of representing entities as queries and keys and relationships as attention weights, which is the novel representation introduced by RepSGG.

### Scene graph generation methods *(prerequisite)*
Scene graph generation (SGG) is about representing images as graphs where nodes are entities and edges are relationships. Understanding common SGG approaches helps appreciate the challenges RepSGG addresses, such as entity representation and relationship modeling.

*How the paper uses it:* RepSGG improves on existing SGG methods by proposing a novel way to represent entities and relationships.

▶ [Energy-Based Learning for Scene Graph Generation](https://www.youtube.com/watch?v=GzMHEwlEthw) — Suhail Mohammed · 5:00 · 5y ago

### Transformer attention mechanisms *(prerequisite)*
Transformers use attention mechanisms to model relationships between elements in data by computing interactions between queries, keys, and values. This concept is fundamental to how RepSGG models entities and relationships using attention weights.

*How the paper uses it:* RepSGG leverages transformer-based attention to represent entities as queries and keys and relationships as attention weights between them.

▶ [Attention in Transformers Explained: Query, Key, and Value (Q, K, V) with Matrices](https://www.youtube.com/watch?v=fi0jcKVR30I) — greatfeedbackguy · 5:46 · 1y ago

### Long-tailed distribution handling in vision *(prerequisite)*
Long-tailed distributions in visual data mean some classes appear very frequently while many others are rare, causing biased learning. Understanding techniques to handle this imbalance is key to grasping RepSGG's performance-guided logit adjustment (PGLA) method.

*How the paper uses it:* RepSGG introduces PGLA to dynamically adjust logits during training to mitigate the long-tailed distribution problem in scene graph data.

▶ [Taibiao Zhao@LSU: Rethinking Class-Balanced Methods for Long-Tailed Visual Recognition](https://www.youtube.com/watch?v=Twe8TQx0XU4) — UH LSU UL Joint Research · 36:02 · 4y ago

## Already in your library

- [Scene Graphs as a Symbolic Visual Representation](https://www.youtube.com/watch?v=0ks3MTzc8Mo) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Panoptic Scene Graph generation (PSG) Explained](https://www.youtube.com/watch?v=cSsE_H_0Cr8) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Visualizing transformers and attention | Talk for TNG Big Tech Day '24](https://www.youtube.com/watch?v=KJtZARuO3JY) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention is all you need (Transformer) - Model explanation (including math), Inference and Training](https://www.youtube.com/watch?v=bCz4OMemCcA) — also for: Mechanisms of Prompt-Induced Hallucination in Vision–Language Models (Ritambhara Singh)
- [Introduction to Transformers | Transformers Part 1](https://www.youtube.com/watch?v=BjRVS2wTtcA) — also for: Comparative Analysis of Transformers to Support Fine-Grained Emotion Detection in Short-Text Data (David C. Wilson)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Self-Attention Explained: How Transformers Actually Work (Full Visual Breakdown)](https://www.youtube.com/watch?v=vkhPtpUiLd8) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — also for: Cross-Image Attention for Zero-Shot Appearance Transfer (Hadar Averbuch-Elor)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the RepSGG paper. The beginner project focuses on reproducing the core idea of representing entities as queries and keys with attention-based relationships on a small synthetic example. The intermediate project involves implementing the RepSGG method on a public dataset to compare its performance against a simple baseline, introducing transformer attention mechanisms. The advanced project extends RepSGG by incorporating multi-modal features (e.g., language or depth) into the architecture, addressing one of the paper's stated future directions.

### Beginner — Attention-based Entity and Relationship Representation Demo
*Effort: a weekend, ~8 hours*

You build a small Python notebook that demonstrates the core RepSGG concept: representing entities as sets of subject queries and object keys, and relationships as attention weights between them. Using a small synthetic image feature tensor, you implement a simple transformer attention layer to compute attention weights and visualize how relationships emerge from these weights.

**Why it shows you understood the paper:** This project shows you grasp the fundamental RepSGG paradigm of entity and relationship representation via attention, a key contribution of the paper.

**Grounded in:** Introduces a novel SGG paradigm representing entities as queries and keys and relationships as attention weights, capturing semantics and directionality effectively.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Synthetic small tensor data simulating visual features; no external dataset required.

**Build it:**

1. Create synthetic feature tensors representing a small scene with a few entities.
2. Implement subject queries and object keys as learnable embeddings.
3. Build a simple transformer attention mechanism to compute attention weights between queries and keys.
4. Visualize the attention weights as relationship strengths between entities.
5. Write a README explaining the RepSGG attention-based representation concept.

**Ships as:** A Jupyter Notebook demonstrating attention-based entity and relationship representation with visualizations and explanations.

**Stretch goal:** Add dynamic rep-point sampling to augment entity embeddings with representative visual features.

### Intermediate — RepSGG Core Implementation on Visual Genome Subset
*Effort: 2 weekends, ~20 hours*

You implement the core RepSGG architecture described in the paper, including subject queries, object keys, rep-point sampling, and the transformer decoder with two-way relational cross-attention. You train and evaluate it on a small subset of the Visual Genome dataset, comparing recall and mean recall metrics against a simple point-based baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method and reproduce key metrics, showing deep comprehension of the architecture and long-tailed distribution handling.

**Grounded in:** RepSGG models entities as sets of learnable subject queries and object keys augmented by dynamically sampled representative points (rep-points) from visual features. The architecture uses a transformer-based decoder with group cross-attention and two-way relational cross-attention layers.

**Tech stack:** Python 3.11, PyTorch, NumPy, Visual Genome dataset (public)

**Data:** A publicly available subset of the Visual Genome dataset for scene graph generation, used as a substitute for the paper's data.

**Build it:**

1. Download and preprocess a small subset of Visual Genome for scene graph generation.
2. Implement subject queries and object keys with rep-point sampling from visual features.
3. Build the transformer decoder with group cross-attention and two-way relational cross-attention layers.
4. Train the model with a standard loss function and evaluate recall and mean recall metrics.
5. Implement a simple point-based baseline for comparison.
6. Document results and compare performance in a README.

**Ships as:** A GitHub repo with code to train and evaluate RepSGG on Visual Genome subset, including baseline comparison and metric reporting.

**Stretch goal:** Add the performance-guided logit adjustment (PGLA) to improve mean recall on tail classes.

### Advanced — Extending RepSGG with Multi-Modal Features for Scene Graph Generation
*Effort: 3-4 weeks*

You extend the RepSGG architecture to incorporate multi-modal inputs such as language embeddings (e.g., object category names) or depth features alongside visual features. You modify the query and key representations to include these modalities and evaluate the impact on scene graph generation performance on Visual Genome or a similar dataset.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating your ability to innovate on the RepSGG architecture and address its limitations by integrating multi-modal data.

**Grounded in:** The integration of multi-modal features, such as depth maps, language, video, and knowledge graph, can be seamlessly incorporated into our RepSGG architecture as additional queries and keys.

**Tech stack:** Python 3.11, PyTorch, Transformers library (HuggingFace), Visual Genome dataset (public)

**Data:** Visual Genome dataset with additional language embeddings derived from object category labels; depth data can be simulated or sourced from public RGB-D datasets if available.

**Build it:**

1. Extend the RepSGG entity representations to concatenate or fuse visual features with language embeddings (e.g., pretrained word vectors) or depth features.
2. Modify the transformer decoder to handle multi-modal queries and keys.
3. Train the extended model on the Visual Genome dataset or a subset with multi-modal inputs.
4. Evaluate improvements in recall, mean recall, and zero-shot mean recall metrics.
5. Analyze the effect of multi-modal integration on rare predicate classes.
6. Write detailed documentation and analysis in the README.

**Ships as:** A GitHub repository implementing multi-modal RepSGG with training scripts, evaluation metrics, and analysis of multi-modal impact on scene graph generation.

**Stretch goal:** Experiment with other modalities such as knowledge graph embeddings or video frames for temporal scene graph generation.
