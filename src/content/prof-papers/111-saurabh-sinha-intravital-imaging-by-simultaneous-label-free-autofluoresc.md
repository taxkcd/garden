---
title: "111 · CIMLA: Interpretable AI for inference of differential causal networks — Saurabh Sinha"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-saurabh-sinha"
source_hash: "da7ea3f3447a2463777ed59434f626f7a254b2189a9ba8eca46cdbf9befe19cb"
sequence: 111
generator: "outreach-garden: managed"
---

# 111 · CIMLA: Interpretable AI for inference of differential causal networks

## At a glance

- **Professor:** Saurabh Sinha
- **Institution:** Georgia Institute of Technology
- **Paper:** [CIMLA: Interpretable AI for inference of differential causal networks](https://arxiv.org/pdf/2304.12523)
- **Authors:** Payam Dibaeinia, Saurabh Sinha
- **Year:** 2023

## Paper overview

This paper presents CIMLA, a new AI tool that uses machine learning and interpretable models to identify changes in causal relationships between variables across different biological conditions. It focuses on gene regulatory networks and demonstrates improved accuracy and robustness, especially in the presence of confounding factors, compared to existing methods. The approach is validated on synthetic data and applied to Alzheimer's disease single-cell data, revealing known and novel regulatory factors.

### Why it matters

**Research problem:** Extracting causal relationships and their changes between conditions from high-dimensional omics data is challenging due to confounding variables and the complexity of biological systems. Existing methods often rely on pairwise associations or linear models, which can be inaccurate and confounded.

**Why it matters:** Understanding differential causal relationships, such as changes in gene regulatory networks between healthy and disease states, is crucial for generating biological hypotheses and identifying potential therapeutic targets. Robust causal inference methods can improve the reliability of such discoveries.

**Key contributions:**

- Definition of a causal estimand for local treatment effect (LTE) of features on outcomes in the presence of confounders.
- Theoretical proof that SHAP values estimate this causal quantity under reasonable assumptions.
- Development of CIMLA, a framework and tool to infer differential causal associations between two conditions using ML models and SHAP.
- Extensive benchmarking on synthetic transcriptomics data showing CIMLA's superior robustness and accuracy compared to leading co-expression and non-linear methods.
- Application of CIMLA to Alzheimer's disease single-cell data, identifying known regulators CREB3 and NEUROD6 and suggesting novel candidates.

## About the professor

**Saurabh Sinha** — Principal Investigator, Georgia Institute of Technology.

Research interests: gene regulation; single-cell multi-omics; spatial omics data

### Research links

- [Faculty/profile page](https://sites.google.com/view/sinhalaboratorygatech)
- [Google Scholar](https://scholar.google.com/citations?user=7BM1uyYAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CIMLA paper, start with foundational concepts in causal inference and SHAP feature attribution, as these underpin the theoretical framework of CIMLA. Next, build domain-specific knowledge on gene regulatory network inference to appreciate the biological context and challenges. Finally, focus on the core concept of differential causal network inference and the authors' own presentation or closely related academic talks to grasp the novel contributions and methodology of CIMLA.

### causal inference machine learning lecture *(prerequisite)*
Understanding how machine learning models can estimate causal effects is central to CIMLA's approach, which relies on causal estimands and assumptions to interpret SHAP values causally. This section provides rigorous academic lectures on causal inference methods, including the use of ML for causal effect estimation, which is foundational for grasping CIMLA's theoretical basis.

*How the paper uses it:* CIMLA defines a causal estimand and proves SHAP values estimate this causal quantity under assumptions, making causal inference knowledge essential.

▶ [Introduction to Causal Inference](https://www.youtube.com/watch?v=zQfLlv8iSek) — Data Science Festival · 49:06

### SHAP feature attribution lecture *(prerequisite)*
SHAP values are a key tool in CIMLA for approximating local treatment effects of transcription factors on target genes. This section covers detailed, mathematically rigorous lectures on SHAP, including its foundations, variants, and limitations, which are critical for understanding how CIMLA interprets ML model outputs causally.

*How the paper uses it:* The paper leverages SHAP values to estimate causal influence, so a deep understanding of SHAP is necessary to evaluate the method's assumptions and results.

▶ [Shapley Additive Explanations (SHAP)](https://www.youtube.com/watch?v=VB9uV-x0gtg) — KIE · 11:52

### gene regulatory networks inference lecture *(prerequisite)*
CIMLA targets differential gene regulatory network inference from transcriptomics data, a complex biological problem. This section includes university-level lectures and seminars on gene regulatory networks, their modeling, and inference methods, providing essential biological and computational context for the paper.

*How the paper uses it:* The paper applies CIMLA to infer differential gene regulatory networks, so understanding GRN inference is crucial for appreciating the biological impact.

▶ [15. Gene Regulatory Networks](https://www.youtube.com/watch?v=So6MK_FcP4E) — MIT OpenCourseWare · 1:19:19

### differential causal network inference lecture
Detecting changes in causal networks between conditions is the core innovation of CIMLA. This section offers advanced academic talks on causal inference in network structures and differential causal effects, helping to contextualize CIMLA's approach within the broader causal inference literature.

*How the paper uses it:* CIMLA's main contribution is inferring differential causal associations between conditions, making this concept central to understanding the paper.

▶ [Causal Inference in Single-cell Genomics (Yongjin Park ...](https://www.youtube.com/watch?v=z76y1GjRIUw) — Paul G. Allen School · 1:08:39

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CIMLA and its application in differential causal network inference, start by building foundational knowledge of gene regulatory networks and causal inference concepts. Then, learn about SHAP feature attribution, which CIMLA uses to approximate causal effects. Finally, explore the core idea of CIMLA—interpretable AI for detecting differential causal relationships between biological conditions.

### gene regulatory networks inference lecture *(prerequisite)*
Gene regulatory networks (GRNs) describe how genes regulate each other's expression through complex interactions. Understanding GRNs is essential to grasp how changes in these networks can reflect biological conditions like disease. This foundational knowledge sets the stage for interpreting how computational methods infer these networks from data.

*How the paper uses it:* CIMLA aims to infer differential gene regulatory networks from omics data to detect changes between conditions.

▶ [15. Gene Regulatory Networks](https://www.youtube.com/watch?v=So6MK_FcP4E) — MIT OpenCourseWare · 1:19:19

### causal inference machine learning lecture *(prerequisite)*
Causal inference is about determining cause-effect relationships rather than mere correlations. Machine learning can help estimate causal effects when assumptions hold, which is critical for interpreting complex biological data. This concept helps understand how CIMLA uses ML models to infer causal influences in gene regulation.

*How the paper uses it:* CIMLA defines a causal estimand and uses ML to estimate local treatment effects, requiring causal inference understanding.

▶ [Causal Inference with Machine Learning - EXPLAINED!](https://www.youtube.com/watch?v=MFnOYNU5sbk) — CodeEmporium · 4 years ago

### SHAP feature attribution lecture *(prerequisite)*
SHAP values explain how much each feature contributes to a machine learning model's prediction, based on game theory. Understanding SHAP is key to grasping how CIMLA approximates causal effects from ML models by interpreting feature importance locally and globally.

*How the paper uses it:* The paper proves SHAP values estimate the causal quantity under assumptions and uses them to infer differential causal associations.

▶ [Shapley Additive Explanations (SHAP)](https://www.youtube.com/watch?v=VB9uV-x0gtg) — KIE · 11:52

## Already in your library

- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference - EXPLAINED!](https://www.youtube.com/watch?v=Od6oAz1Op2k) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Lecture 9 - Understanding SHAP | Explainable AI (XAI ...](https://www.youtube.com/watch?v=IIgTulcEUFw) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
