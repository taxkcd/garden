---
title: "200 · Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction — Eran Halperin"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eran-halperin"
source_hash: "c2512e4708882ace84a119a7ae2aeb8f811f2c1c3740d54903961fa5bf8a0393"
sequence: 200
generator: "outreach-garden: managed"
---

# 200 · Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction

## At a glance

- **Professor:** Eran Halperin
- **Institution:** New York University
- **Paper:** [Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction](https://doi.org/10.1609/aaai.v39i23.34660)
- **Authors:** Mingyu Derek Ma, Xiaoxuan Wang, Yijia Xiao, Anthony Cuturrufo, Vijay S Nori, Eran Halperin, Wei Wang
- **Year:** 2025

## Paper overview

This paper introduces M ERA, a large language model fine-tuned to predict clinical diagnoses from patient history by integrating natural language clinical knowledge with medical codes. It addresses challenges in handling a large number of possible diagnoses and the gap between natural language and medical coding systems. The model uses hierarchical contrastive learning and dynamic confidence thresholds to improve prediction accuracy and interpretability, outperforming existing methods on major clinical datasets.

### Why it matters

**Research problem:** Clinical diagnosis prediction is challenging due to the large candidate disease space (13k+ ICD codes), sparse patient data, and the gap between natural language clinical knowledge and structured medical codes. Existing models often treat diagnosis prediction as a simple classification task, ignoring disease dependencies and the hierarchical structure of medical codes.

**Why it matters:** Accurate early diagnosis prediction can enable timely interventions, optimize clinical resource allocation, and improve patient outcomes. Leveraging large language models to integrate clinical knowledge with electronic health records could significantly enhance clinical decision-making but remains underexplored due to technical challenges.

**Key contributions:**

- Proposed a unified LLM framework (M ERA) that bridges natural language clinical knowledge with medical codes for diagnosis prediction.
- Introduced hierarchical contrastive learning aligned with the ICD code ontology to distinguish true diagnoses from similar candidates.
- Developed a dynamic confidence threshold mechanism using a special EOV token to flexibly select confident diagnoses.
- Demonstrated bidirectional memorization of medical codes and definitions to enhance model understanding of clinical semantics.
- Validated the approach on large EHR datasets (MIMIC-III and IV), achieving state-of-the-art performance.

## About the professor

**Eran Halperin** — Professor, Department of Computer Science, Courant Institute; Division of Precision Medicine, NYU Langone, New York University.

Research interests: Computational Genomics, Machine Learning in Medicine, Deep Learning, Algorithms, Epigenomics, Single-Cell Analysis, Clinical AI

### Research links

- [Faculty/profile page](https://www.eranhalperingenomics.com)
- [Professor website](https://eranhalperingenomics.com)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=bpDPt1QAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction," start by building foundational knowledge on the hierarchical structure of medical coding systems (ICD ontology) and the principles of hierarchical contrastive learning, which are core to the model's approach. Then, study the fine-tuning of large language models, essential for adapting LLMs to clinical diagnosis tasks. Finally, focus on the paper's core concept by watching the authors' own talk on the MERA model, which provides direct insight into their novel framework and contributions.

### Medical code ontology and ICD hierarchy *(prerequisite)*
Understanding the structured medical coding system, especially the ICD hierarchy, is essential to grasp how the model captures disease dependencies and leverages the ontology for diagnosis prediction. This background clarifies the hierarchical relationships that the model exploits for better ranking and prediction.

*How the paper uses it:* The paper leverages the ICD code ontology to model disease dependencies and improve diagnosis ranking accuracy.

▶ [ICD-10-CM CMS-HCC Crosswalk & HCC Hierarchies](https://www.youtube.com/watch?v=mBa8m5lUcug) — Medicare Informatics · 7:27

### Hierarchical contrastive learning *(prerequisite)*
Hierarchical contrastive learning is a core technique used in the paper to distinguish true diagnoses from similar candidates by aligning with the ICD ontology hierarchy. Understanding this method is crucial to appreciate how the model improves prediction accuracy and handles the large candidate space.

*How the paper uses it:* The paper applies hierarchical contrastive learning on diagnosis candidate lists to capture inter- and intra-visit diagnosis patterns.

▶ [Stanford CS25: V2 I Represent part-whole hierarchies in a ...](https://www.youtube.com/watch?v=CYaju6aCMoQ) — Stanford Online · 52:48

### Large language model fine-tuning *(prerequisite)*
Fine-tuning large language models is fundamental to the paper's approach, enabling the model to memorize medical code-definition mappings and understand clinical semantics. This section covers the techniques and challenges involved in adapting LLMs for specialized biomedical tasks.

*How the paper uses it:* MERA fine-tunes large language models to memorize mappings between medical codes and their natural language definitions.

▶ [Fine Tuning Large Language Models with InstructLab](https://www.youtube.com/watch?v=pu3-PeBG0YU) — IBM Technology · 8:01 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how the MERA model improves clinical diagnosis prediction using large language models. Start by learning about medical code ontologies and the ICD hierarchy to grasp the structured diagnosis space. Next, understand large language model fine-tuning to see how models adapt to clinical data. Then, explore hierarchical contrastive learning, a key technique for capturing disease relationships. Finally, study the MERA model itself, focusing on how it integrates these ideas for improved diagnosis prediction.

### Medical code ontology and ICD hierarchy *(prerequisite)*
Medical codes like ICD-9 and ICD-10 organize diseases into a hierarchical structure, grouping related conditions together. Understanding this hierarchy helps models capture dependencies between diagnoses rather than treating them as unrelated labels.

*How the paper uses it:* MERA leverages the ICD code ontology to model disease dependencies and improve diagnosis ranking accuracy.

▶ [AMCI ICD-10-CM Coding for Beginners- Part 1](https://www.youtube.com/watch?v=c8FDIr5WPwU) — AMCI Medical Coding Institute (AMCI) · 5 years ago

### Large language model fine-tuning *(prerequisite)*
Fine-tuning adapts a pre-trained large language model to a specific task or domain by updating its parameters with task-relevant data. This process enables the model to memorize mappings between medical codes and their natural language definitions, improving clinical understanding.

*How the paper uses it:* MERA fine-tunes large language models to memorize medical code-definition mappings and clinical semantics.

▶ [Pretraining vs Fine Tuning in Large Language Models (LLMs)](https://www.youtube.com/watch?v=kYkPDaQun4g) — BrainOmega · 4:59 · 1 year ago

### Hierarchical contrastive learning *(prerequisite)*
Hierarchical contrastive learning trains models to distinguish between similar and dissimilar items by leveraging hierarchical relationships. This helps the model learn nuanced differences between related diseases, improving diagnosis prediction accuracy.

*How the paper uses it:* MERA uses hierarchical contrastive learning aligned with the ICD hierarchy to distinguish true diagnoses from similar candidates.

▶ [MulCon: Contrastive Loss for Multi-Label Images | Paper ...](https://www.youtube.com/watch?v=ql2Q2XSHMbU) — Bits Of Deep Learning · 14:55

## Already in your library

- [Fine Tuning LLM Explained Simply](https://www.youtube.com/watch?v=ezdIOLbUSWg) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the MERA paper's core ideas and contributions. The beginner project focuses on reproducing the dynamic confidence threshold mechanism in a simplified setting using familiar tools. The intermediate project involves reimplementing the hierarchical contrastive learning approach for diagnosis prediction on a public clinical dataset, adding new skills in contrastive learning and LLM fine-tuning. The advanced project extends MERA by exploring multimodal clinical data integration, addressing a key future direction from the paper and showcasing your ability to innovate beyond the original work.

### Beginner — Dynamic Confidence Threshold Simulation for Diagnosis Ranking
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates the dynamic confidence threshold mechanism (EOV token) described in MERA. Using a toy dataset of diagnosis candidates with confidence scores, you implement a simple ranking and thresholding method that dynamically selects confident diagnoses until the EOV token is reached. You visualize how this dynamic thresholding differs from fixed thresholding.

**Why it shows you understood the paper:** This project shows you grasp the novel dynamic confidence threshold concept and its role in flexible diagnosis prediction, a key contribution of the paper.

**Grounded in:** Dynamic confidence threshold improves diagnosis prediction flexibility and accuracy.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Simulated toy data representing diagnosis confidence scores for a small set of candidate ICD codes.

**Build it:**

1. Create a small synthetic dataset of diagnosis candidates with associated confidence scores.
2. Implement a function that iterates through candidates and selects diagnoses until a learned EOV threshold is reached.
3. Compare this dynamic thresholding with a fixed confidence threshold approach.
4. Plot and analyze the number of diagnoses selected and confidence distributions for both methods.
5. Write a README explaining the dynamic threshold concept and your implementation.

**Ships as:** A Python script with plots demonstrating dynamic vs fixed confidence thresholding and a README explaining the mechanism.

**Stretch goal:** Add a simple UI with React to allow interactive adjustment of confidence scores and visualize thresholding behavior.

### Intermediate — Hierarchical Contrastive Learning for Clinical Diagnosis Prediction
*Effort: 2 weekends, ~20 hours*

You reimplement the core hierarchical contrastive learning method from MERA to improve diagnosis prediction on a public clinical dataset such as MIMIC-III (publicly available). You fine-tune a smaller pretrained language model to memorize mappings between ICD codes and their natural language definitions. Then you implement hierarchical contrastive loss aligned with the ICD ontology to distinguish true diagnoses from similar candidates. Finally, you evaluate your model against a simple baseline like a standard classification model and report weighted F1 and recall@20 metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to implement MERA's core methodological innovation—hierarchical contrastive learning—and to apply it to clinical diagnosis prediction, showing you understand the paper's main technical contribution and evaluation.

**Grounded in:** Introduced hierarchical contrastive learning aligned with the ICD code ontology to distinguish true diagnoses from similar candidates.

**Tech stack:** Python 3.11, PyTorch, transformers, scikit-learn, pandas

**Data:** Use the publicly available MIMIC-III dataset as a substitute for the paper's data, focusing on patient diagnosis codes and clinical notes.

**Build it:**

1. Download and preprocess MIMIC-III data to extract patient visits with ICD codes and clinical notes.
2. Prepare natural language definitions for ICD codes from publicly available ICD code descriptions.
3. Fine-tune a pretrained transformer-based language model to memorize ICD code-definition mappings.
4. Implement hierarchical contrastive loss using the ICD ontology hierarchy to train the model on diagnosis prediction.
5. Train a baseline classification model (e.g., simple multi-label classifier) for comparison.
6. Evaluate both models on weighted F1 and recall@20 metrics and document results.

**Ships as:** A GitHub repo with code for data preprocessing, model training with hierarchical contrastive learning, baseline comparison, evaluation scripts, and a detailed README.

**Stretch goal:** Incorporate the dynamic confidence threshold mechanism to improve prediction ranking and compare results.

### Advanced — Extending MERA for Multimodal Clinical Data Integration
*Effort: 3+ weeks*

You develop an extension of the MERA framework to incorporate multimodal clinical data, such as medical imaging metadata or physiological waveform summaries, alongside textual patient histories and ICD codes. This project addresses a key future direction from the paper. You design a pipeline to combine embeddings from a fine-tuned language model with features extracted from a secondary modality (e.g., ECG waveform features or chest X-ray metadata). You adapt hierarchical contrastive learning and dynamic confidence thresholding to this multimodal setting and evaluate improvements on a clinical prediction task.

**Why it shows you understood the paper:** This project shows deep comprehension of MERA's architecture and limitations, and your ability to innovate by extending it to a challenging, clinically relevant multimodal setting as suggested by the authors.

**Grounded in:** Extending MERA to incorporate multimodal clinical data such as medical imaging and physiological waveforms.

**Tech stack:** Python 3.11, PyTorch, transformers, scikit-learn, numpy, pandas, matplotlib

**Data:** Use MIMIC-CXR (public chest X-ray dataset linked to MIMIC-III) or MIMIC-III waveform subset as a proxy for multimodal data integration; combine with MIMIC-III clinical notes and ICD codes.

**Build it:**

1. Obtain and preprocess MIMIC-CXR or MIMIC-III waveform data alongside clinical notes and ICD codes.
2. Extract feature embeddings from imaging or waveform data using pretrained models or signal processing techniques.
3. Fine-tune a language model on ICD code-definition memorization and clinical notes as in MERA.
4. Design a multimodal fusion architecture combining LLM embeddings with imaging/waveform features.
5. Adapt hierarchical contrastive learning and dynamic confidence thresholding to the multimodal embeddings.
6. Train and evaluate the multimodal model on diagnosis prediction or heart failure prediction tasks, comparing to unimodal baselines.
7. Document methodology, challenges, and results in a comprehensive README.

**Ships as:** A full codebase demonstrating multimodal data integration with MERA extensions, training and evaluation scripts, and a detailed report README.

**Stretch goal:** Experiment with parameter-efficient fine-tuning methods (e.g., LoRA, adapters) to reduce computational cost.
