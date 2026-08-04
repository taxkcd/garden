---
title: "200 · Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction — Eran Halperin"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eran-halperin"
source_hash: "217f2706d2294ac6d13ad1d301520395bdd0a2b5c26ea6d3efaaecef212e8606"
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
