---
title: "086 · On-demand generation of high-quality software engineering datasets using large language models and ontologies — Suranjan Chakraborty"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-suranjan-chakraborty"
source_hash: "c8d41af24950cad4142c24fcbc8c65e7c41d4a6db5ffb5ef7b897ce4d2a8c782"
sequence: 86
generator: "outreach-garden: managed"
---

# 086 · On-demand generation of high-quality software engineering datasets using large language models and ontologies

## At a glance

- **Professor:** Suranjan Chakraborty
- **Institution:** Towson University
- **Paper:** [On-demand generation of high-quality software engineering datasets using large language models and ontologies](https://doi.org/10.1007/s10515-026-00617-w)
- **Authors:** George Bishop, Suranjan Chakraborty, Honghe Zhou, Josh Dehlinger, Lin Deng, Jonah Lin, Benjamin Kist
- **Year:** 2026

## Paper overview

This paper presents O3DG, a method that uses large language models (LLMs) combined with domain-specific ontologies to generate high-quality, labeled datasets on demand for software engineering research, particularly in requirements engineering. The approach addresses the scarcity and quality issues of existing datasets by synthesizing diverse, ontology-aligned datasets that support machine learning tasks such as classification of non-functional requirements and detection of ambiguities in requirements. The paper demonstrates the method's effectiveness through two case studies and provides publicly available datasets.

### Why it matters

**Research problem:** The lack of large, high-quality, labeled, and ontology-aligned datasets in software engineering, especially in requirements engineering, limits the development, evaluation, and reproducibility of AI-driven software engineering approaches.

**Why it matters:** High-quality datasets are critical for training effective machine learning models that can automate software engineering tasks. Existing datasets are often small, ambiguous, imbalanced, and outdated, which restricts the use of advanced deep learning models and hinders research progress and comparability.

**Key contributions:**

- Development of a repeatable approach (O3DG) for on-demand generation of domain-specific datasets using LLMs and contextual ontologies.
- Creation of two public, high-quality, labeled datasets for non-functional requirements classification and requirements ambiguity detection.
- Demonstration of the usefulness of these datasets through empirical case studies in requirements engineering.
- Integration of ontology-guided prompts with systematic validation methods including semantic similarity metrics and manual rubric-based inspection.
- Provision of a transferable guideline for generating balanced, high-quality datasets for multiple software engineering tasks.

## About the professor

**Suranjan Chakraborty** — Professor & Director, School of Emerging Technologies, Department of Computer and Information Sciences, Towson University.

Research interests: Requirements Engineering, Socio-cognitive process in Software Engineering, Applied machine learning in Software Engineering, Distributed ISD Teams, Organizations and IS, Grounded Theory Method, Qualitative Research Methods

### Research links

- [Faculty/profile page](https://www.towson.edu/fcsm/departments/computerinfosci/facultystaff/schakraborty.html)
- [Google Scholar](https://scholar.google.com/citations?user=IoDHDz8AAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on O3DG, start with foundational knowledge on large language models in NLP to grasp the synthetic data generation approach. Next, explore semantic similarity metrics which are critical for dataset pruning and validation in the paper. Then, review the challenges in requirements engineering datasets to contextualize the problem addressed. Finally, focus on the core concept of ontology-guided dataset generation and the authors' own talk or related advanced talks to understand the novel O3DG method and its empirical validation.

### Large language models in NLP *(prerequisite)*
This section covers the foundational understanding of large language models (LLMs), their architecture, and their role in natural language processing tasks. Understanding LLMs is essential because the paper leverages these models to generate synthetic datasets for software engineering tasks.

*How the paper uses it:* The paper uses large language models as a core technology for on-demand dataset generation.

▶ [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — Andrej Karpathy · 59:48

### Semantic similarity metrics *(prerequisite)*
Semantic similarity metrics are used to measure the closeness of text data, which is crucial for dataset pruning and validation in the O3DG approach. This section explains the metrics like cosine similarity and Euclidean distance that help ensure dataset quality.

*How the paper uses it:* The paper employs semantic similarity metrics for automated pruning and validation of generated datasets.

▶ [Understanding Similarity Metrics in Vector Databases ...](https://www.youtube.com/watch?v=5ak3CsQugUI) — TensorTeach · 6:23

### Requirements engineering datasets *(prerequisite)*
This section discusses the challenges and characteristics of datasets in requirements engineering, highlighting issues such as small size, ambiguity, and imbalance. This context is important to appreciate the motivation behind O3DG.

*How the paper uses it:* The paper addresses the scarcity and quality issues of existing requirements engineering datasets.

▶ [Handling Large Datasets in Data Preparation & ML Training ...](https://www.youtube.com/watch?v=rTOi82_HGf4) — Iguazio (Acquired by McKinsey) · 1:02:12

### Ontology-guided dataset generation
This section delves into how ontologies can guide the generation of high-quality, domain-aligned datasets. It explains the integration of domain knowledge with LLMs to improve dataset cohesion and labeling accuracy, which is central to the O3DG method.

*How the paper uses it:* The paper's key innovation is integrating domain-specific ontologies with LLMs to generate datasets.

▶ [OntoTune: Ontology-Driven Self-training for Aligning LLMs](https://www.youtube.com/watch?v=sEL0uQknz24) — AIDAS Lab · 16:12

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts to understand how large language models (LLMs) and ontologies are combined to generate high-quality software engineering datasets, as presented in the O3DG paper. We start with the basics of large language models in natural language processing, then cover the challenges of datasets in requirements engineering, followed by semantic similarity metrics used for dataset validation, and finally explore ontology-guided dataset generation as the core method in the paper.

### Large language models in NLP *(prerequisite)*
Learn what large language models are, how they work, and why they are powerful tools for generating and understanding text. This foundation is essential to grasp how LLMs can be used to synthesize datasets on demand.

*How the paper uses it:* The paper uses LLMs as a core technology to generate synthetic software engineering datasets.

▶ [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — 3Blue1Brown · 7:58

### Requirements engineering datasets *(prerequisite)*
Understand the nature and challenges of datasets in requirements engineering, including issues like small size, ambiguity, and class imbalance. This context explains why generating high-quality datasets is critical for advancing AI in software engineering.

*How the paper uses it:* The paper addresses the scarcity and quality problems of existing requirements engineering datasets.

▶ [Handling Large Datasets in Data Preparation & ML Training ...](https://www.youtube.com/watch?v=rTOi82_HGf4) — Iguazio (Acquired by McKinsey) · 1:02:12

### Semantic similarity metrics *(prerequisite)*
Explore how semantic similarity metrics measure the closeness in meaning between texts, which is important for validating and pruning generated dataset samples. This helps ensure dataset quality and coherence.

*How the paper uses it:* The paper uses semantic similarity metrics like cosine similarity to prune and validate generated dataset items.

▶ [Understanding Similarity Metrics in Vector Databases ...](https://www.youtube.com/watch?v=5ak3CsQugUI) — TensorTeach · 6:23

### Ontology-guided dataset generation
Learn how ontologies provide structured domain knowledge that guides the generation of datasets, ensuring alignment with domain concepts and improving dataset quality. This method integrates with LLMs to produce labeled, balanced datasets on demand.

*How the paper uses it:* The core contribution of the paper is the O3DG approach that combines ontologies with LLMs for dataset generation.

▶ [Going Meta - S02 Ep01: Using Ontologies to Guide ...](https://www.youtube.com/watch?v=RYuw4oq0G84) — Neo4j · 1:12:30
