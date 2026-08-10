---
title: "086 · On-demand generation of high-quality software engineering datasets using large language models and ontologies — Suranjan Chakraborty"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-suranjan-chakraborty"
source_hash: "03757d3d422012548b7b8d968a2f918b4bf8f5d6060f5ac14470126965b140b8"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Natural Language Processing with Deep Learning
**The paper assumes:** foundations of natural language processing, deep learning for NLP, large language models, prompt engineering techniques
**Already in this field?** Skip this entirely if you already understand how large language models are built and used, including prompt engineering and semantic similarity evaluation in NLP.

This background focuses on natural language processing (NLP) with deep learning, essential for understanding the large language models and prompt engineering techniques used in the O3DG dataset generation pipeline. The rigorous course option provides a comprehensive, university-level deep dive into NLP concepts and models, while the fast track offers a concise, practical introduction to NLP fundamentals and classical vs deep learning approaches. Choose the course for in-depth mastery and the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

**Watch only this:** Lectures 1-3 (Intro and Word Vectors, Word Vectors and Language Models, Backpropagation and Neural Networks), Lecture 7 (Attention, Final Projects and LLM Intro), Lecture 8 (Self-Attention and Transformers), Lecture 9 (Pretraining), and Lecture 10 (Post-training by Archit Sharma), about 9 hours total — these cover core NLP models, LLM foundations, and prompt engineering concepts.

*Why it unblocks this paper:* This is the Stanford CS224N Natural Language Processing with Deep Learning Spring 2024 course by Professor Christopher Manning, a leading expert in NLP. It covers foundational and advanced topics including word vectors, language models, transformers, and prompt engineering, directly relevant to understanding LLMs and semantic similarity metrics used in O3DG.

*If you want all of it:* 27.5 hours across all 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Learning Machine Learning | Natural Language Processing (NLP) in R](https://www.youtube.com/playlist?list=PLGey__rsxvBXNOv0Yq9jWcgo_iBH_Z9U_) — Learn Machine Learning · 14 videos · 2.0h across 14 episodes

**Watch only this:** Episodes 1-4 (NLP Intuition, Types of NLP, Classical vs Deep Learning Models, Bag Of Words Model), about 30 minutes total — these provide a quick, intuitive overview of NLP and foundational models relevant to the paper.

*Why it unblocks this paper:* This Learn Machine Learning playlist offers a concise and clear introduction to NLP concepts including classical vs deep learning models and practical NLP steps, suitable for quickly grasping the basics behind LLMs and prompt engineering without deep mathematical detail.

*If you want all of it:* 2.0 hours across all 14 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the O3DG approach for on-demand generation of software engineering datasets using LLMs and ontologies. The beginner project focuses on reproducing a key validation metric from the paper using your existing ML and Python skills. The intermediate project involves reimplementing the core O3DG pipeline on a small scale with a public dataset substitute, adding prompt engineering and semantic similarity pruning. The advanced project extends the method by exploring automated prompt design to reduce manual effort, directly addressing a stated limitation and future direction of the paper.

### Beginner — Reproduce Semantic Similarity Metrics for Dataset Pruning
*Effort: a weekend, ~8 hours*

You build a Python notebook that implements semantic similarity metrics such as cosine similarity and Euclidean distance on text embeddings to prune a small sample dataset of software requirements. You use pre-trained sentence transformers to compute embeddings and visualize the similarity distributions to mimic the paper's pruning validation step.

**Why it shows you understood the paper:** This project shows you understand the paper's use of semantic similarity metrics for dataset quality control and pruning, a key mechanism to ensure category cohesion and reduce ambiguity.

**Grounded in:** Manual inspection and semantic similarity metrics are used for dataset pruning and validation.

**Tech stack:** Python 3.11, Jupyter Notebook, sentence-transformers, scikit-learn, matplotlib

**Data:** A small synthetic set of software requirements sentences created by you to simulate ambiguous and non-ambiguous examples, as no public dataset is provided.

**Build it:**

1. Collect or write 20-30 example software requirements sentences with varying ambiguity and categories.
2. Use a pre-trained sentence transformer model to embed each sentence.
3. Calculate pairwise cosine similarity and Euclidean distance between embeddings.
4. Visualize similarity distributions and identify thresholds for pruning.
5. Write a short report comparing your results to the paper's described metrics.

**Ships as:** A Jupyter notebook with code, visualizations, and a README explaining how semantic similarity metrics help prune datasets in O3DG.

**Stretch goal:** Add manual rubric-based inspection simulation by labeling sentences yourself and comparing with metric-based pruning.

### Intermediate — Reimplement O3DG Pipeline for NFR Classification Dataset Generation
*Effort: 2 weekends, ~20 hours*

You reimplement the core O3DG pipeline to generate a synthetic, ontology-aligned dataset for non-functional requirements (NFR) classification using a publicly available NFR dataset as a baseline. You design ontology-guided prompts for an LLM (e.g., OpenAI GPT-4), generate synthetic requirements, prune them using semantic similarity metrics, and validate class balance and cohesion compared to the baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's core method end-to-end, including prompt engineering, ontology alignment, iterative generation, and validation, proving you grasp the approach beyond theory.

**Grounded in:** Development of a repeatable approach (O3DG) for on-demand generation of domain-specific datasets using LLMs and contextual ontologies.

**Tech stack:** Python 3.11, OpenAI GPT-4 API, sentence-transformers, scikit-learn, pandas, matplotlib

**Data:** Use a publicly available NFR classification dataset (e.g., the PROMISE repository NFR dataset) as a baseline for comparison and ontology guidance.

**Build it:**

1. Study the PROMISE NFR dataset and identify key NFR categories.
2. Design ontology-guided prompts to generate synthetic NFR examples using GPT-4.
3. Generate a synthetic dataset via iterative prompting and collect outputs.
4. Compute semantic similarity metrics to prune low-quality or duplicate samples.
5. Analyze class balance and category cohesion compared to the baseline dataset.
6. Document the pipeline, results, and lessons learned.

**Ships as:** A GitHub repository with scripts for dataset generation, pruning, analysis, and a detailed README explaining the O3DG reimplementation and evaluation.

**Stretch goal:** Add a simple ML classifier trained on both baseline and synthetic datasets to compare performance.

### Advanced — Automate Prompt Engineering for O3DG Dataset Generation
*Effort: 3-4 weeks*

You build an extension to the O3DG pipeline that automates or semi-automates prompt design using prompt templates, few-shot learning, and prompt optimization techniques. You integrate this with ontology constraints and semantic similarity pruning to generate high-quality datasets with reduced human effort. You evaluate the approach on NFR classification or ambiguity detection tasks.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by reducing manual prompt engineering, demonstrating deep comprehension of O3DG and advancing its scalability and reproducibility.

**Grounded in:** Exploring automated or semi-automated prompt design to reduce human effort and improve reproducibility.

**Tech stack:** Python 3.11, OpenAI GPT-4 API, sentence-transformers, scikit-learn, pandas, optuna or other hyperparameter optimization library

**Data:** Use the same public NFR dataset substitute as in the intermediate project for evaluation and ontology guidance.

**Build it:**

1. Research prompt optimization and automated prompt generation techniques.
2. Implement a prompt template system with parameterized slots guided by ontology terms.
3. Use few-shot examples and iterative refinement to generate candidate prompts.
4. Integrate prompt selection with semantic similarity pruning and dataset quality metrics.
5. Generate datasets with automated prompts and compare quality and class balance to manual prompts.
6. Document the system design, experiments, and results.

**Ships as:** A GitHub repository with code for automated prompt engineering integrated into O3DG, example datasets, evaluation scripts, and a comprehensive README.

**Stretch goal:** Extend the system to support multiple software engineering domains beyond requirements engineering.
