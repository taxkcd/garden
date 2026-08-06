---
title: "251 · The Goofus & Gallant Story Corpus for Practical Value Alignment — Brent E. Harrison"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-brent-e-harrison"
source_hash: "b30035981b8e3bebf6857fe19f65cad3f85ef2e68b3117f860ab2fc5fe94c5c2"
sequence: 251
generator: "outreach-garden: managed"
---

# 251 · The Goofus & Gallant Story Corpus for Practical Value Alignment

## At a glance

- **Professor:** Brent E. Harrison
- **Institution:** University of Kentucky
- **Paper:** [The Goofus & Gallant Story Corpus for Practical Value Alignment](https://arxiv.org/pdf/2501.09707)
- **Authors:** Md Sultan Al Nahian, Tasmia Tasrin, Spencer Frazier, Mark Riedl, Brent Harrison
- **Year:** 2025

## Paper overview

This paper introduces a new multi-modal dataset based on the Goofus & Gallant children's comic strips, designed to teach AI systems about human social values and norms. The dataset includes images and text illustrating normative and non-normative behaviors, annotated with social principles. The authors demonstrate baseline machine learning models that classify behaviors and underlying social principles, aiming to improve AI value alignment.

### Why it matters

**Research problem:** AI systems increasingly interact with humans but may violate social norms or values, causing harm. Training AI to align with human values is difficult due to the lack of specialized, high-quality datasets that clearly convey social principles.

**Why it matters:** Ensuring AI systems act in ways aligned with human values is critical for safe coexistence and preventing intentional or unintentional harm in society. Current datasets often contain biases or lack clear value annotations, limiting effective training of value-aligned AI.

**Key contributions:**

- Introduction of the Goofus & Gallant story corpus for practical value alignment, containing 20 years of comics with text and images.
- Augmentation of the dataset with social principle annotations based on a curated taxonomy.
- Development of baseline machine learning models for normativity and principles classification demonstrating the dataset's utility.

## About the professor

**Brent E. Harrison** — University of Kentucky.

### Research links

- [Faculty/profile page](https://cs.engr.uky.edu/directory/harrison-brent)
- [Identity evidence](https://www.engr.uky.edu/directory/harrison-brent)
- [Identity evidence](https://corgilabai.com/)
- [Identity evidence](https://dblp.org/pid/61/8820.html)
- [Google Scholar](https://scholar.google.com/scholar)
- [Semantic Scholar](https://www.semanticscholar.org/search)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on the Goofus & Gallant Story Corpus for Practical Value Alignment, start with foundational concepts including value alignment in AI, multimodal machine learning, social norm classification, and transformer models for text classification. These prerequisites provide the theoretical and technical background necessary to grasp the dataset's purpose, annotation challenges, and modeling approaches. Finally, focus on the core concept section featuring the authors' own talk or the closest available content to gain direct insight into their dataset, methodology, and results.

### Value alignment in AI *(prerequisite)*
This concept covers the central problem the paper addresses: ensuring AI systems behave in ways aligned with human values and social norms. Understanding the challenges and motivations behind AI value alignment is crucial to appreciate the dataset's role and the paper's contributions.

*How the paper uses it:* The paper aims to improve AI value alignment by providing a dataset illustrating normative and non-normative behaviors.

▶ [Value alignment? | Richard Sutton & Blaise Agüera y Arcas ...](https://www.youtube.com/watch?v=Hnt-oBA086U) — Schwartz Reisman Institute · 1:00:36

### Multimodal machine learning *(prerequisite)*
The paper uses combined image and text inputs to classify normative behaviors, making multimodal machine learning knowledge essential. This lecture from a university course provides a rigorous academic treatment of multimodal learning techniques relevant to the paper's approach.

*How the paper uses it:* The authors demonstrate that models combining images and text outperform single-modality models on normativity classification.

▶ [Lecture 11.2 - Multimodal Transference (CMU Multimodal Machine Learning course, Fall 2022)](https://www.youtube.com/watch?v=OX0ICvvFV2o) — LP Morency · 3 years ago

### Social norm classification *(prerequisite)*
Understanding social norms and their classification is foundational to the paper's task of distinguishing normative from non-normative behaviors. This conference talk offers an academic perspective on social norms, supporting comprehension of the dataset's social principle annotations.

*How the paper uses it:* The dataset labels behaviors as normative or non-normative, reflecting social norms critical for AI value alignment.

▶ [The 2024 Social Norms Conference](https://www.youtube.com/watch?v=W9B90vuiaLk) — Social Norms Learning Collaborative · 1 year ago

### Transformer models for text classification *(prerequisite)*
The paper employs transformer-based models like BERT for classifying normativity and social principles. A detailed academic lecture on transformers and their application to text classification will help understand the modeling techniques used.

*How the paper uses it:* Transformer models achieve over 93% accuracy on normativity classification in the Goofus & Gallant dataset.

▶ [Transformer论文逐段精读](https://www.youtube.com/watch?v=nzqlFIcCSWQ) — 跟李沐学AI · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the foundational concepts of AI value alignment, which explains why aligning AI behavior with human values is critical. Next, grasp multimodal machine learning to see how combining images and text improves AI understanding. Then, explore social norm classification to understand how normative vs. non-normative behaviors are identified. Finally, learn about transformer models for text classification, the key machine learning technique used in the paper.

### Value alignment in AI *(prerequisite)*
Value alignment in AI is about ensuring AI systems act according to human values and ethical principles to prevent harm. This concept is foundational because it motivates the need for datasets and models that teach AI social norms and ethics.

*How the paper uses it:* The paper addresses the challenge of aligning AI behavior with human social values using a curated dataset.

▶ [What is AI Alignment and Why is it Important?](https://www.youtube.com/watch?v=MUjvQvVJxHw) — Eye on Tech · 3 years ago

### Multimodal machine learning *(prerequisite)*
Multimodal machine learning involves combining different types of data, such as images and text, to improve AI understanding. This approach helps AI systems interpret complex real-world inputs more effectively than single-modality models.

*How the paper uses it:* The paper uses combined image and text inputs to classify normative and non-normative behaviors more accurately.

▶ [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — AssemblyAI · 6:44

### Social norm classification *(prerequisite)*
Social norm classification is the task of identifying behaviors that conform to or violate societal expectations. Understanding this helps in grasping how AI can learn to distinguish acceptable from unacceptable actions.

*How the paper uses it:* The core task in the paper is classifying behaviors as normative or non-normative using the Goofus & Gallant dataset.

▶ [What Are The Different Types Of Social Norms? - The Sociology Workshop](https://www.youtube.com/watch?v=hfz_9ZiPAf8) — The Sociology Workshop · 11 months ago

### Transformer models for text classification *(prerequisite)*
Transformer models are advanced neural networks that excel at understanding and classifying text by capturing context and relationships between words. They are widely used in natural language processing tasks like text classification.

*How the paper uses it:* The paper uses transformer-based models like BERT to classify normativity and social principles from text.

▶ [Build a Text Classifier with Transformers in 5 minutes](https://www.youtube.com/watch?v=8yrD0hR8OY8) — Code In a Jiffy · 5:07 · 3 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors can provide insight into their motivations, dataset creation, and model development, enriching understanding of the paper's contributions.

*How the paper uses it:* These videos illustrate the source material (Goofus & Gallant comics) that inspired the dataset used for value alignment.

▶ [Goofus and Gallant Points Explained!](https://www.youtube.com/watch?v=cmAyAJuuBMU) — Thommithy · 7 years ago

## Already in your library

- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Multimodal Machine Learning | Introduction | Part 1 | CVPR ...](https://www.youtube.com/watch?v=helW1httyO8) — also for: Towards Effective Human-in-the-Loop Assistive AI Agents (Jeffrey Mark Siskind)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding and practical skills related to the Goofus & Gallant Story Corpus for Practical Value Alignment paper. The beginner project reproduces a simple normativity classification baseline using text data, the intermediate project reimplements and evaluates a multimodal transformer model combining image and text inputs, and the advanced project extends the dataset or model to address annotation consistency or richer social principle classification, directly tackling the paper's stated limitations and future directions.

### Beginner — Text-Only Normativity Classification Baseline
*Effort: a weekend, ~8 hours*

You build a text classification model to distinguish normative versus non-normative behaviors using only the action description texts from the Goofus & Gallant comics dataset. You implement a simple transformer-based classifier (e.g., DistilBERT fine-tuned) and report accuracy metrics comparable to the paper's text-only baseline.

**Why it shows you understood the paper:** This project shows you understand the core task of normativity classification and the value of using textual action descriptions as input, reproducing a key baseline result from the paper.

**Grounded in:** Text-only models trained on the full dataset achieve over 93% accuracy in normativity classification.

**Tech stack:** Python 3.11, PyTorch, Transformers (Huggingface), scikit-learn

**Data:** Use a simulated subset of the Goofus & Gallant Story Corpus focusing on action description texts labeled as normative or non-normative, since the authors released no code or dataset publicly.

**Build it:**

1. Create or simulate a small dataset of action description texts labeled normative/non-normative based on the paper's description.
2. Load a pretrained DistilBERT model from Huggingface and fine-tune it on this dataset for binary classification.
3. Implement training and evaluation loops to measure accuracy and F1 score on a held-out test split.
4. Write a README explaining the dataset simulation, model architecture, training procedure, and results.
5. Include scripts to reproduce training and evaluation.

**Verified links from the paper:**

- <https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to fine-tune and evaluate a text-only normativity classifier, plus a README documenting the approach and results.

**Stretch goal:** Add simple data augmentation or experiment with other transformer variants like BERT-base to compare performance.

### Intermediate — Multimodal Normativity Classification with Transformers
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core multimodal classification approach by combining image and text inputs to classify normative vs. non-normative behavior. Using transformer-based encoders for text and a pretrained vision model for images, you build a dual encoder architecture and evaluate its accuracy against a text-only baseline.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's key contribution that combining image and text modalities improves classification accuracy, showing grasp of multimodal fusion and transformer architectures.

**Grounded in:** Models using both image and text inputs outperform single-modality models in classifying normative vs. non-normative behavior, achieving up to ~77% accuracy.

**Tech stack:** Python 3.11, PyTorch, Transformers (Huggingface), Torchvision, scikit-learn

**Data:** Simulate or curate a small multimodal dataset with paired comic strip images and action description texts labeled normative/non-normative, as no official dataset release is available.

**Build it:**

1. Prepare a small paired dataset of images and action description texts with normativity labels.
2. Use a pretrained vision transformer or CNN backbone to encode images and DistilBERT to encode text.
3. Implement a dual encoder model that concatenates or fuses embeddings before classification.
4. Train and evaluate the multimodal model and compare results to a text-only baseline.
5. Document the architecture, training details, and performance comparison in the README.

**Verified links from the paper:**

- <https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for training and evaluating a multimodal normativity classifier, including scripts, model checkpoints, and a detailed README.

**Stretch goal:** Experiment with different fusion strategies (e.g., attention-based fusion) or add scene description text as a third modality to analyze impact on performance.

### Advanced — Improving Annotation Consistency and Principle Classification
*Effort: 3+ weeks*

You extend the Goofus & Gallant dataset or model by addressing the paper's limitation of moderate inter-annotator agreement and coarse normativity labels. This could involve designing a refined annotation schema for social principles, implementing a crowdsourcing interface to collect improved annotations, or developing a model that better leverages action descriptions while filtering extraneous scene information to improve principle classification accuracy.

**Why it shows you understood the paper:** This project tackles a core limitation and future direction from the paper, showing deep comprehension of the challenges in social value annotation and multimodal model design for AI value alignment.

**Grounded in:** Crowdsourced annotations showed moderate inter-annotator agreement (kappa=0.54), reflecting variability in interpreting social principles; scene descriptions can introduce extraneous information reducing classification performance.

**Tech stack:** Python 3.11, PyTorch, Transformers (Huggingface), FastAPI, React, Docker

**Data:** Build upon a simulated or partially curated subset of the Goofus & Gallant dataset with existing principle annotations; optionally collect new annotations via crowdsourcing or expert labeling.

**Build it:**

1. Design a refined annotation taxonomy or guideline to reduce ambiguity in social principle labels.
2. Implement a simple web-based annotation tool using FastAPI backend and React frontend to collect or refine annotations.
3. Re-annotate a subset of the dataset or simulate improved annotations based on the refined taxonomy.
4. Train a transformer-based model focusing on action descriptions only, experimenting with filtering or weighting scene description inputs.
5. Evaluate model performance on principle classification and measure annotation consistency improvements.
6. Document the annotation process, model design, and evaluation results in a comprehensive README.

**Ships as:** A full GitHub repo with annotation tool code, refined dataset or annotations, model training and evaluation scripts, and detailed documentation showing improved annotation consistency and principle classification.

**Stretch goal:** Integrate large language model assistance (e.g., GPT-4o) to generate candidate principle annotations and compare with human refinements.

_No official dataset or code release from the paper's authors is available; all projects require simulating or curating a small dataset inspired by the paper's description._
