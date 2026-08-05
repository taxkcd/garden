---
title: "111 · CIMLA: Interpretable AI for inference of differential causal networks — Saurabh Sinha"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-saurabh-sinha"
source_hash: "61be5beaa5a904616db52424e8049ba34a95136ef9961caf4c3086ed15c547e4"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of CIMLA, the interpretable AI framework for differential causal network inference. Starting with a beginner project that reproduces a key concept from the paper using SHAP values on a small synthetic dataset, you then move to an intermediate project that runs the authors' CIMLA code on synthetic data and compares it to a baseline co-expression method. Finally, the advanced project extends CIMLA by addressing one of its stated limitations, such as joint modeling across conditions, to improve differential inference robustness.

### Beginner — SHAP-based Local Treatment Effect Estimation on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a small Python notebook that trains a simple machine learning model (e.g., random forest) on synthetic gene expression data with two conditions, computes SHAP values for features, and visualizes how SHAP values approximate the local treatment effect (LTE) as defined in the paper. This reproduces the core theoretical insight that SHAP values can estimate causal influence under assumptions.

**Why it shows you understood the paper:** This project shows you grasp the paper's key theoretical contribution linking SHAP values to causal estimands, and you can implement and interpret SHAP in the context of differential causal inference.

**Grounded in:** Definition of a causal estimand for local treatment effect (LTE) of features on outcomes in the presence of confounders; Theoretical proof that SHAP values estimate this causal quantity under reasonable assumptions.

**Tech stack:** Python 3.11, scikit-learn, shap, matplotlib, numpy, pandas, jupyter notebook

**Data:** Synthetic gene expression data generated with controlled confounding and two conditions, simulated in the notebook.

**Build it:**

1. Generate synthetic gene expression data with two conditions and known causal relationships including confounders.
2. Train a random forest model separately on each condition to predict target gene expression from transcription factors.
3. Compute local SHAP values for features on test samples using the SHAP library.
4. Visualize SHAP values and compare them qualitatively to the known local treatment effect from the data generation.
5. Write a README explaining the causal estimand and how SHAP approximates it.

**Ships as:** A Jupyter notebook with code and plots demonstrating SHAP values approximating LTE on synthetic data, plus a README explaining the connection to the paper.

**Stretch goal:** Add a neural network model and compare its SHAP values to the random forest's to explore noise tolerance.

### Intermediate — Differential Causal Network Inference with CIMLA on Synthetic Data
*Effort: 2 weekends, ~20 hours*

You run the authors' CIMLA Python package on the provided synthetic transcriptomics dataset from their CIMLA_data repository. You reproduce the benchmarking of CIMLA against a simple co-expression baseline (e.g., Pearson correlation difference) for differential gene regulatory network inference. You report performance metrics such as accuracy or F1 score as in the paper.

**Why it shows you understood the paper:** This project shows you can operate the authors' code and data, understand the core CIMLA pipeline, and critically evaluate its performance compared to baseline methods, demonstrating grasp of the main method and results.

**Grounded in:** Development of CIMLA, a framework and tool to infer differential causal associations between two conditions using ML models and SHAP; Extensive benchmarking on synthetic transcriptomics data showing CIMLA's superior robustness and accuracy compared to leading co-expression and non-linear methods.

**Tech stack:** Python 3.11, CIMLA package from https://github.com/PayamDiba/CIMLA, numpy, pandas, matplotlib, scikit-learn

**Data:** Synthetic transcriptomics data from https://github.com/PayamDiba/CIMLA_data, as used in the paper's benchmarking.

**Build it:**

1. Clone and install the CIMLA package and download the synthetic data from the authors' repositories.
2. Run CIMLA on the synthetic data to infer differential gene regulatory networks between two conditions.
3. Implement a simple baseline method such as differential Pearson correlation on the same data.
4. Compare CIMLA's inferred networks to the ground truth and baseline results using metrics like F1 score.
5. Visualize and document the results in a report or notebook, discussing CIMLA's robustness to confounding.

**Verified links from the paper:**

- <https://github.com/PayamDiba/CIMLA> — released by the paper's authors
- <https://github.com/PayamDiba/CIMLA_data> — released by the paper's authors

**Ships as:** A GitHub repository with scripts/notebooks running CIMLA and baseline on synthetic data, performance comparisons, and a README explaining the results.

**Stretch goal:** Apply CIMLA to a small public single-cell RNA-seq dataset (e.g., from GEO) as a substitute for Alzheimer's data and interpret findings.

### Advanced — Joint Modeling Extension of CIMLA for Improved Differential Causal Inference
*Effort: 3-4 weeks*

You develop an extension to the CIMLA framework that jointly trains machine learning models on combined data from both conditions instead of separately, aiming to improve model transferability and better separate shared versus differential causal associations as suggested in the paper's future directions. You evaluate this extension on synthetic data and compare performance to the original CIMLA implementation.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of CIMLA's assumptions and limitations, ability to modify and extend complex ML pipelines, and engagement with open research questions from the paper.

**Grounded in:** Current CIMLA implementation trains separate models per condition rather than jointly, which may limit detection of shared versus differential associations; Future direction: Develop ML models that jointly learn from multiple conditions to improve transferability and better separate shared and differential regulators.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, CIMLA codebase from https://github.com/PayamDiba/CIMLA, numpy, pandas, shap, matplotlib

**Data:** Synthetic transcriptomics data from https://github.com/PayamDiba/CIMLA_data used for benchmarking.

**Build it:**

1. Study the CIMLA codebase to understand how separate models per condition are trained and how SHAP values are computed.
2. Implement a joint ML model that takes data from both conditions with a condition indicator feature or multi-task output.
3. Adapt SHAP computation to this joint model to estimate differential causal effects.
4. Run experiments comparing the joint model CIMLA extension to the original separate-model CIMLA on synthetic data.
5. Analyze results for improved robustness or accuracy in differential network inference.
6. Document the methodology, code, and findings in a detailed README and report.

**Verified links from the paper:**

- <https://github.com/PayamDiba/CIMLA> — released by the paper's authors
- <https://github.com/PayamDiba/CIMLA_data> — released by the paper's authors

**Ships as:** A GitHub repository with the extended CIMLA implementation, experimental scripts, comparative results, and a comprehensive README discussing the extension and its impact.

**Stretch goal:** Incorporate mechanistic multi-omics data (e.g., TF-DNA binding) as additional features to refine causal inference.
