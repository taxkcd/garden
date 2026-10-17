---
title: "680 · End-to-end Document Recognition and Understanding with Dessurt — Bryan S. Morse"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bryan-s-morse"
source_hash: "f2815660fc2c04745efc641328c3f6eb2c8c4c6d2b86e2157d19b275a49708e5"
sequence: 680
generator: "outreach-garden: managed"
---

# 680 · End-to-end Document Recognition and Understanding with Dessurt

## At a glance

- **Professor:** Bryan S. Morse
- **Institution:** Brigham Young University
- **Paper:** [End-to-end Document Recognition and Understanding with Dessurt](https://arxiv.org/pdf/2203.16618)
- **Authors:** Brian Davis, Bryan Morse, Bryan Price, Chris Tensmeyer, Curtis Wigington, Vlad Morariu
- **Year:** 2022

## Paper overview

This paper introduces Dessurt, a novel transformer-based model that performs end-to-end document understanding and text recognition directly from document images without relying on external OCR systems. Dessurt can generate arbitrary text outputs for a variety of document-related tasks, including handwriting recognition, form parsing, and question answering, by taking both the document image and a task description as input. The model is pre-trained on a combination of real and synthetic datasets and fine-tuned on multiple benchmarks, demonstrating flexibility across diverse document domains and tasks.

### Why it matters

**Research problem:** Existing document understanding models typically rely on external OCR systems for text recognition and are limited to predicting outputs only for recognized tokens, restricting their flexibility and performance especially on handwritten or degraded documents.

**Why it matters:** Document understanding is critical for automating information extraction from diverse document types, including forms, historical records, and handwritten texts. Improving end-to-end recognition and understanding can reduce errors from OCR dependencies and enable broader applicability across document domains.

**Key contributions:**

- A novel end-to-end document understanding transformer (Dessurt) that integrates text recognition and understanding without external OCR.
- A diverse set of synthetic datasets and tasks for pre-training to improve generalization across document types and tasks.
- Evaluation of Dessurt on nine dataset-task combinations spanning classification, question answering, handwriting recognition, form parsing, and named entity recognition.
- Introduction of a new metric (GAnTED) for evaluating form parsing that is robust to permutation of elements.
- Open-sourcing code, pre-trained models, and datasets to facilitate further research.

## About the professor

**Bryan S. Morse** — Professor, Associate Chair, Computer Science, Brigham Young University.

Research interests: image processing and analysis, computer vision, computer graphics

### Research links

- [Faculty/profile page](https://cs.byu.edu/department/directories/faculty-directory/bryan-morse/)
- [Identity evidence](http://morse.cs.byu.edu)
- [Professor website](https://cs.byu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** transformer models in machine learning
**The paper assumes:** transformer neural network architectures, attention mechanisms, autoregressive sequence modeling
**Already in this field?** Skip this entirely if you already understand transformer models and their application in machine learning.

To understand the Dessurt paper's core method—an end-to-end transformer model for document recognition and understanding—it's essential to grasp transformer architectures, self- and cross-attention mechanisms, and autoregressive generation. The rigorous course option offers a deep, structured university-level exploration of transformers and large language models, while the fast track provides a concise, clear explainer series ideal for quickly building foundational intuition without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-4, about 6.5 hours — covering Transformer basics, transformer-based models and tricks, large language models, and LLM training, which provide the foundational knowledge needed to understand Dessurt's architecture and training approach.

*Why it unblocks this paper:* This Stanford CME295 course is a comprehensive, authoritative university lecture series that covers transformer architectures, training, tuning, and reasoning in depth, directly relevant to understanding Dessurt's transformer-based design and pretraining strategies.

*If you want all of it:* 16.2 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLM Architecture Explained: Transformers, LoRA & RLHF | Full Series](https://www.youtube.com/playlist?list=PLGtYdYqSoNFAl_3Ow5okY4hiUo--MHLBZ) — NeuralCanvas · 7 videos · 0.3h across 7 episodes

**Watch only this:** All 7 episodes, about 18 minutes total — each episode is around 2 minutes and covers key concepts succinctly, ideal for a quick but thorough overview.

*Why it unblocks this paper:* This NeuralCanvas short series offers precise, no-fluff explanations of core transformer concepts, tokenization, training, and fine-tuning, giving a quick yet solid conceptual grounding on transformers relevant to Dessurt's model.

*If you want all of it:* 0.3 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Dessurt paper, start by building foundational knowledge on vision transformers, autoregressive text generation models, and cross-attention mechanisms, as these are core technical components of the Dessurt architecture. Next, explore synthetic data generation for pretraining document models to appreciate the data strategy behind Dessurt's generalization. Finally, focus on the core concept of Dessurt itself through the authors' own talk or closely related academic presentations to grasp the model's design, contributions, and evaluation.

### Vision transformers for image encoding *(prerequisite)*
Dessurt uses a Swin transformer as its visual encoder to process document images. Understanding the Swin Transformer architecture, its hierarchical design, and shifted window mechanism is crucial to grasp how Dessurt extracts visual features effectively from documents.

*How the paper uses it:* Dessurt employs a Swin transformer-based visual encoder for document image processing.

▶ [Swin Transformer: Hierarchical Vision Transformer using Shifted Windows (paper illustrated)](https://www.youtube.com/watch?v=tFYxJZBAbE8) — AI Bites · 12:06 · 5y ago

### Autoregressive text generation models *(prerequisite)*
Dessurt generates arbitrary text outputs autoregressively for tasks like recognition and question answering. Learning about autoregressive language models and their sequence generation process will clarify how Dessurt produces text outputs from encoded inputs.

*How the paper uses it:* Dessurt generates text autoregressively as output for document understanding tasks.

▶ [Lec 23 Auto Regressive models and Transformers](https://www.youtube.com/watch?v=hTKs7ozQOqM) — NPTEL - Indian Institute of Science, Bengaluru · 55:14 · 3w ago

### Cross-attention mechanisms in transformers *(prerequisite)*
Dessurt uses cross-attention layers to jointly attend to both the visual encoding of the document and the task query inputs. Understanding cross-attention is key to comprehending how the model integrates multimodal inputs to produce coherent outputs.

*How the paper uses it:* Dessurt uses cross-attention layers to combine image and text query inputs.

▶ [Cross Attention in Transformers Explained: The Bridge Between Encoder and Decoder](https://www.youtube.com/watch?v=McroJ64-Bao) — Skill Advancement · 6:37 · 9mo ago

### Synthetic data for pretraining document models *(prerequisite)*
Dessurt’s pretraining leverages a diverse set of synthetic datasets to improve generalization across document types and tasks. Understanding synthetic data generation techniques and their role in model pretraining will provide insight into Dessurt’s training strategy.

*How the paper uses it:* Dessurt is pretrained on synthetic datasets including handwriting and forms to improve generalization.

▶ [Leveraging Public Data for Practical Synthetic Data Generation](https://www.youtube.com/watch?v=thsnoqigE5c) — Google TechTalks · 55:08 · 5y ago

### Dessurt paper talk *(paper-talk search result; attribution unverified)*
The core concept is the Dessurt model itself, an end-to-end transformer architecture for document recognition and understanding. Ideally, the authors' own talk would provide the most direct and detailed insight into the model’s design, training, and evaluation. Since no direct author talk on Dessurt is available, related academic talks on end-to-end document understanding transformers like Donut or related ECCV talks on end-to-end transformer models are considered.

*How the paper uses it:* This section focuses on the Dessurt model and its contributions as presented by the authors or closely related academic talks.

▶ [DETR - End to end object detection with transformers (ECCV2020)](https://www.youtube.com/watch?v=utxbUlo9CyY) — Nicolas Carion · 9:35 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Dessurt paper, start by learning about vision transformers, especially the Swin transformer, since Dessurt uses it to encode document images. Next, grasp autoregressive text generation models and cross-attention mechanisms, which are key to how Dessurt generates text outputs from images and task queries. Finally, explore the core concept of transformer-based document understanding models that integrate recognition and understanding in one architecture.

### Vision transformers for image encoding *(prerequisite)*
Vision transformers apply the transformer architecture, originally designed for language, to images by treating image patches as tokens. The Swin transformer improves this by using hierarchical shifted windows to efficiently capture local and global image features. Understanding this helps grasp how Dessurt processes document images effectively.

*How the paper uses it:* Dessurt uses a Swin transformer as its visual encoder to extract features from document images.

▶ [Swin Transformer: Hierarchical Vision Transformer using Shifted Windows (paper illustrated)](https://www.youtube.com/watch?v=tFYxJZBAbE8) — AI Bites · 12:06 · 5y ago

### Autoregressive text generation models *(prerequisite)*
Autoregressive models generate sequences one token at a time, conditioning each token on the previously generated ones. This approach is fundamental for tasks like language modeling and text generation, enabling models to produce coherent and contextually relevant outputs.

*How the paper uses it:* Dessurt generates arbitrary text outputs autoregressively for recognition and understanding tasks.

▶ [Lec 23 Auto Regressive models and Transformers](https://www.youtube.com/watch?v=hTKs7ozQOqM) — NPTEL - Indian Institute of Science, Bengaluru · 55:14 · 3w ago

### Cross-attention mechanisms in transformers *(prerequisite)*
Cross-attention allows a transformer decoder to selectively focus on relevant parts of an encoder's output, effectively linking two different input sequences. This mechanism is crucial for tasks where one input guides the generation of another, such as image-to-text or translation.

*How the paper uses it:* Dessurt uses cross-attention layers to jointly process document images and task queries for text generation.

▶ [Cross Attention in Transformers Explained: The Bridge Between Encoder and Decoder](https://www.youtube.com/watch?v=McroJ64-Bao) — Skill Advancement · 6:37 · 9mo ago

### Transformer-based document understanding
Transformer-based document understanding models integrate visual and textual information to perform tasks like classification, question answering, and form parsing directly from document images. These models remove the need for separate OCR systems by jointly recognizing and understanding text.

*How the paper uses it:* Dessurt is a novel end-to-end transformer model that combines text recognition and document understanding without external OCR.

▶ [🍩 Donut (Document Understanding Transformer) for transforming images of graphs to tabular data](https://www.youtube.com/watch?v=KHQDnWGpcLE) — Nicholas Broad · 1:17:10 · Streamed 3y ago

## Already in your library

- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention is all you need (Transformer) - Model explanation (including math), Inference and Training](https://www.youtube.com/watch?v=bCz4OMemCcA) — also for: Mechanisms of Prompt-Induced Hallucination in Vision–Language Models (Ritambhara Singh)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Vision Transformer Quick Guide - Theory and Code in (almost) 15 min](https://www.youtube.com/watch?v=j3VNqtJUoz0) — also for: Generating Higher-Quality Anti-Forensics DeepFakes with Adversarial Sharpening Mask (Pradeep K. Atrey)
- [Vision Transformers Explained | The ViT Paper](https://www.youtube.com/watch?v=NetSJM590Lo) — also for: DA-VPT: Semantic-Guided Visual Prompt Tuning for Vision Transformers (Kien A. Hua)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS236: Deep Generative Models I 2023 I Lecture 3 - Autoregressive Models](https://www.youtube.com/watch?v=tRArbBf-AbI) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Time Series Talk : Autoregressive Model](https://www.youtube.com/watch?v=5-2C4eO4cPQ) — also for: BAMM: Bidirectional Autoregressive Motion Model (Minwoo Lee)
- [A Practical Introduction to Large Language Models (LLMs)](https://www.youtube.com/watch?v=tFHeUSJAYbE) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [From Attention to Applications: Encoder, Decoder and Cross-Attention | Deep Learning](https://www.youtube.com/watch?v=sm2ZeDY8YDw) — also for: Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching (Pew-Thian Yap)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Cross Attention in Transformers | 100 Days Of Deep Learning | CampusX](https://www.youtube.com/watch?v=smOnJtCevoU) — also for: DiTVC: One-Shot Voice Conversion via Diffusion Transformer with Environment and Speaking Rate Cloning (Adam Finkelstein)
- [Visual Guide to Transformer Neural Networks - (Episode 2) Multi-Head & Self-Attention](https://www.youtube.com/watch?v=mMa2PmYJlCo) — also for: Unified Local and Global Attention Interaction Modeling for Vision Transformers (Corey Toler-Franklin)
- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Dessurt, the end-to-end document recognition and understanding transformer. Starting with a beginner project that reproduces a key metric from the paper using existing tools, you then move to an intermediate project that runs and extends the authors' released Dessurt code on a public dataset. Finally, the advanced project challenges you to address one of the paper's limitations by improving model efficiency or handling non-textual elements, showing deeper engagement with the research.

### Beginner — Implement GAnTED Metric for Form Parsing Evaluation
*Effort: a weekend, ~8 hours*

You build a standalone implementation of the GAnTED metric introduced in the paper to evaluate form parsing results. Using Python, you will create code that computes GAnTED scores given predicted and ground truth JSON outputs representing form entities and relationships, replicating the metric's robustness to element permutation.

**Why it shows you understood the paper:** This project shows you grasp the paper's novel evaluation contribution for form parsing, including how to handle permutation invariance in structured document outputs. A professor would see you can translate a new metric from the paper into working code.

**Grounded in:** Introduction of a new metric (GAnTED) for evaluating form parsing that is robust to permutation of elements.

**Tech stack:** Python 3.11

**Data:** Use example form parsing JSON outputs from the FUNSD dataset (publicly available) or synthetic JSON samples inspired by the paper's description.

**Build it:**

1. Read the paper section describing the GAnTED metric and understand its components.
2. Collect or create sample ground truth and predicted form parsing JSON outputs with entities and relationships.
3. Implement the GAnTED metric calculation in Python, ensuring it handles permutation invariance.
4. Validate your implementation by comparing metric outputs on sample inputs and edge cases.
5. Write a README explaining the metric, usage instructions, and example results.

**Ships as:** A Python package or script that computes GAnTED scores with example inputs and a README demonstrating usage and interpretation.

**Stretch goal:** Add visualization of form parsing errors or extend the metric to handle partial matches.

### Intermediate — Run and Fine-tune Dessurt on IAM Handwriting Dataset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' Dessurt repository to fine-tune the model on the IAM handwriting recognition dataset, replicating the paper's handwriting recognition results. You compare Dessurt's word error rate (WER) against a simple baseline OCR tool like Tesseract and report the results.

**Why it shows you understood the paper:** This project demonstrates your ability to use the authors' end-to-end model and reproduce a core result on handwriting recognition. It shows you understand the model's architecture, training process, and evaluation metrics.

**Grounded in:** Dessurt performs well on full-page handwriting recognition on the IAM dataset, achieving the lowest word error rate compared to specialized models.

**Tech stack:** Python 3.11, PyTorch, Git, Linux shell

**Data:** IAM Handwriting Dataset (publicly available) as used in the paper; authors' Dessurt code and pre-trained models from https://github.com/herobd/dessurt

**Build it:**

1. Clone the Dessurt repository and set up the environment following the authors' instructions.
2. Download and preprocess the IAM handwriting dataset according to the repository's format.
3. Fine-tune Dessurt on the IAM dataset using the provided training scripts.
4. Evaluate the fine-tuned model's word error rate on the IAM test set.
5. Run a baseline OCR tool like Tesseract on the same test set and compare WER results.
6. Document your setup, training, evaluation, and comparison results in a detailed README.

**Verified links from the paper:**

- <https://github.com/herobd/dessurt> — released by the paper's authors

**Ships as:** A GitHub repository with scripts to fine-tune and evaluate Dessurt on IAM, plus a report comparing WER with a baseline OCR.

**Stretch goal:** Experiment with adding synthetic handwriting data to pre-training and measure impact on WER.

### Advanced — Improve Dessurt's Efficiency and Non-Textual Element Handling
*Effort: 3+ weeks*

You extend Dessurt by implementing model compression techniques (e.g., pruning or distillation) to reduce model size and inference time while maintaining performance. Additionally, you augment the pre-training or fine-tuning pipeline with synthetic data containing figures or diagrams to improve handling of non-textual elements, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles two of the paper's stated limitations: model size/efficiency and weak performance on non-textual elements. It shows you can innovate beyond replication by improving and adapting the model, demonstrating research-level engagement.

**Grounded in:** Limitations: model size (127M parameters) and weaker performance on figures/diagrams due to pre-training data; Future directions: improving efficiency and handling non-textual elements.

**Tech stack:** Python 3.11, PyTorch, Git, Linux shell

**Data:** Use IAM or FUNSD datasets plus synthetic figure/diagram images created or sourced publicly to augment training data; authors' Dessurt code from https://github.com/herobd/dessurt

**Build it:**

1. Analyze Dessurt's architecture and identify components suitable for pruning or distillation.
2. Implement and apply model compression techniques to reduce parameter count and measure inference speed.
3. Create or collect synthetic document images containing figures and diagrams for pre-training augmentation.
4. Fine-tune the compressed Dessurt model on augmented data and evaluate performance on tasks involving non-textual elements.
5. Compare results with the original Dessurt model and document improvements or trade-offs.
6. Write a comprehensive report detailing methods, experiments, and findings.

**Verified links from the paper:**

- <https://github.com/herobd/dessurt> — released by the paper's authors

**Ships as:** A repository with scripts for model compression and augmented training, plus evaluation results and a report on efficiency gains and improved non-textual element handling.

**Stretch goal:** Integrate a stronger language model or multi-modal pre-training to further enhance understanding.
