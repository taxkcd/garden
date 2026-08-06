---
title: "266 · SPIDER: constructing cell-type-specific protein–protein interaction networks — Simon Kasif"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-simon-kasif"
source_hash: "bf52b2f2142990497c2ef6cf182023da2eaca144ae6b423a073778d9b8d5a992"
sequence: 266
generator: "outreach-garden: managed"
---

# 266 · SPIDER: constructing cell-type-specific protein–protein interaction networks

## At a glance

- **Professor:** Simon Kasif
- **Institution:** Boston University
- **Paper:** [SPIDER: constructing cell-type-specific protein–protein interaction networks](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11438548/)
- **Authors:** Yael Kupershmidt, Simon Kasif, Roded Sharan
- **Year:** 2024

## Paper overview

This paper presents SPIDER, a supervised deep learning model that predicts protein–protein interaction (PPI) networks specific to cell types or tissues. Unlike previous static PPI networks, SPIDER integrates gene expression, protein abundance, localization, and experimental assay data to capture the dynamic and context-dependent nature of PPIs. The model outperforms existing methods, generalizes well to new cell types, and can be fine-tuned with limited data. It also helps identify tissue-specific disease genes and cancer-driver genes, demonstrating its utility in biomedical research.

### Why it matters

**Research problem:** Protein–protein interactions are context-dependent and vary across cell types and tissues, but most experimental PPI data are static and measured under artificial conditions. There is a lack of computational methods that accurately predict cell-type-specific PPI networks using available heterogeneous data.

**Why it matters:** Understanding cell-type-specific PPIs is crucial for elucidating protein functions, disease pathways, and drug targets. Accurate context-specific networks enable better biological insights and personalized medicine approaches, but experimental profiling is challenging and costly.

**Key contributions:**

- Development of SPIDER, a supervised graph attention model for cell-type-specific PPI prediction.
- Integration of diverse data types including gene expression, protein abundance, localization, and assay information.
- Demonstration of superior performance over unsupervised baseline methods (NR, ERW, co-abundance).
- Validation of model generalization across unseen human and mouse tissues.
- Implementation of transfer learning to improve predictions with limited new data.

## About the professor

**Simon Kasif** — Professor, Biomedical Engineering Affiliated Faculty – Computer Science, Boston University.

Research interests: Computational Biology

### Research links

- [Faculty/profile page](https://www.bu.edu/cs/profiles/simon-kasif)
- [Resolved homepage](https://www.bu.edu/cs/about/people/)
- [Google Scholar](https://scholar.google.com/citations?user=SBNZBMUAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SPIDER model for cell-type-specific protein–protein interaction networks, start with foundational knowledge on graph attention networks and protein–protein interaction networks, as these underpin the model's architecture and biological context. Next, explore transfer learning and integration of heterogeneous biological data, which are key methodological components. Finally, focus on the core concept of SPIDER itself, prioritizing any direct talks by the authors or closely related academic presentations.

### Graph attention networks lecture *(prerequisite)*
Graph attention networks (GATs) are the neural network architecture used by SPIDER to model protein interactions. Understanding GATs provides insight into how SPIDER integrates node and edge features with attention mechanisms to predict PPIs.

*How the paper uses it:* SPIDER uses graph attention neural networks to model PPIs.

▶ [Graph Attention Networks (GAT) | GNN Paper Explained](https://www.youtube.com/watch?v=uFLeKkXWq2c) — Aleksa Gordić - The AI Epiphany · 37:44

### Protein–protein interaction networks lecture *(prerequisite)*
Protein–protein interaction networks are the biological foundation of the SPIDER model. A rigorous lecture on PPI networks explains the biological significance, experimental methods, and network representations crucial for appreciating SPIDER's problem domain.

*How the paper uses it:* Fundamental biological concept underlying the paper's problem and data.

▶ [Introduction to Biological Network Analysis II: Protein-Protein Interaction Networks: From Graphs to](https://www.youtube.com/watch?v=_JjmIH53DEE) — Simons Institute for the Theory of Computing · 10 years ago

### Transfer learning in biology seminar *(prerequisite)*
Transfer learning enables SPIDER to adapt models trained on some cell types to new cell types with limited data. Understanding transfer learning in biological contexts clarifies how SPIDER achieves improved generalization and fine-tuning.

*How the paper uses it:* SPIDER applies transfer learning to adapt models to new cell types.

▶ [Transfer Learning for Cross-species... - Elana Fertig - Student ...](https://www.youtube.com/watch?v=Dq3obRyl7b0) — ISCB · 31:20

### Integrating heterogeneous biological data lecture *(prerequisite)*
SPIDER integrates diverse data types such as gene expression, protein abundance, and localization. A lecture on integrating heterogeneous biological data provides context on challenges and methods for combining multi-omics data effectively.

*How the paper uses it:* SPIDER integrates gene expression, protein abundance, localization, and assay data.

▶ [MIA: Casey Greene, Unsupervised methods for discovery from ...](https://www.youtube.com/watch?v=t7HQ-r7kg0c) — Broad Institute · 1:44:02

### SPIDER cell-type-specific PPI talk *(the paper's own talk)*
The core concept is the SPIDER model itself. Although no direct author talk on SPIDER was found, the closest relevant academic talk on protein-protein interactions in cell biology from a research institute channel is selected to provide advanced insights into the biological and computational challenges addressed by SPIDER.

*How the paper uses it:* Directly targets authors' presentation for the exact method and results.

▶ [Sepehr Ehsani, 21 September 2023: Protein-protein interactions in cell biology](https://www.youtube.com/watch?v=QN3cg9MexLs) — Ronin Institute · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SPIDER paper, start by learning the biological basics of protein–protein interaction (PPI) networks, which are the foundation of the problem. Next, grasp how graph attention networks (GATs) work, since SPIDER uses this deep learning architecture to model PPIs. Then, explore how integrating diverse biological data types improves predictions, followed by understanding transfer learning to adapt models to new cell types. Finally, watch a focused talk on protein–protein interactions in cell biology to tie these concepts directly to the paper's context.

### Protein–protein interaction networks lecture *(prerequisite)*
Protein–protein interaction networks represent how proteins physically or functionally interact within cells, crucial for understanding cellular processes and disease mechanisms. This foundational knowledge helps you appreciate why predicting context-specific PPIs is important.

*How the paper uses it:* SPIDER predicts cell-type-specific PPI networks, so understanding what PPIs are and how they form networks is essential.

▶ [Introduction to Biological Network Analysis II: Protein-Protein Interaction Networks: From Graphs to](https://www.youtube.com/watch?v=_JjmIH53DEE) — Simons Institute for the Theory of Computing · 10 years ago

### Graph attention networks lecture *(prerequisite)*
Graph attention networks (GATs) are a type of neural network that learns to weigh the importance of neighboring nodes in a graph, enabling nuanced modeling of complex relationships. This concept is key to how SPIDER models protein interactions with attention mechanisms.

*How the paper uses it:* SPIDER uses a graph attention-based neural network to predict PPIs by integrating protein and interaction features.

▶ [Understanding Graph Attention Networks](https://www.youtube.com/watch?v=A-yKQamf2Fc) — DeepFindr · 5 years ago

### Integrating heterogeneous biological data lecture *(prerequisite)*
Biological data comes from many sources like gene expression, protein abundance, and localization, each providing different insights. Integrating these heterogeneous data types improves the accuracy and context-specificity of biological predictions.

*How the paper uses it:* SPIDER integrates gene expression, protein abundance, localization, and assay data to capture context-dependent PPIs.

▶ [Understanding Molecular Complexity for Precision Medicine](https://www.youtube.com/watch?v=yk2hSk-wgF4) — Simons Institute for the Theory of Computing · 32:30

### Transfer learning in biology seminar *(prerequisite)*
Transfer learning involves adapting a model trained on one dataset to perform well on a related but different dataset, especially useful when new data is limited. This technique helps improve predictions for new cell types with scarce experimental data.

*How the paper uses it:* SPIDER employs transfer learning to fine-tune models for new cell types using limited data.

▶ [91 - Introduction to transfer learning](https://www.youtube.com/watch?v=LOvrfvtiC8c) — DigitalSreeni · 20:50

### SPIDER cell-type-specific PPI talk *(the paper's own talk)*
This talk explains protein–protein interactions specifically in cell biology, providing biological context and intuition about how PPIs vary by cell type and why predicting them is challenging and important.

*How the paper uses it:* Provides biological background relevant to SPIDER’s goal of predicting cell-type-specific PPIs.

▶ [Sepehr Ehsani, 21 September 2023: Protein-protein interactions in cell biology](https://www.youtube.com/watch?v=QN3cg9MexLs) — Ronin Institute · 2 years ago

## Already in your library

- [16. Protein Interaction Networks](https://www.youtube.com/watch?v=RBPcKbEvK3U) — also for: Prioritization of causal genes from genome-wide association studies by Bayesian data integration across loci (Joel S. Bader)
- [Approaches for using protein protein interaction networks for ...](https://www.youtube.com/watch?v=VLPk1pr4QVo) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
- [Protein Protein Interaction Network- PART 1 | History of Graph ...](https://www.youtube.com/watch?v=Ukom7oPwSHk) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
- [Supervised & Unsupervised Machine Learning](https://www.youtube.com/watch?v=wvODQqb3D_8) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the SPIDER model for cell-type-specific protein–protein interaction (PPI) network prediction. The beginner project reproduces a simple baseline comparison from the paper using public data and existing tools. The intermediate project builds on the authors' released SPIDER code to train and evaluate the model on a smaller or substitute dataset, replicating core metrics and comparisons. The advanced project extends SPIDER by incorporating additional condition-specific features or uncertainty quantification, addressing one of the paper's stated limitations and future directions.

### Beginner — Baseline Co-abundance PPI Prediction on Public Data
*Effort: a weekend, ~8 hours*

You build a simple protein–protein interaction prediction pipeline using co-abundance correlation as a baseline, similar to one of the unsupervised methods compared in the paper. Using publicly available gene expression data from a well-known tissue or cell line (e.g., GTEx or a public RNA-seq dataset), you compute pairwise protein co-abundance correlations and generate a predicted PPI network. You then evaluate the network against a known PPI reference to compute AUROC or AUPRC metrics.

**Why it shows you understood the paper:** This project shows you understand the baseline methods SPIDER outperforms, the importance of integrating expression data for context-specific PPI prediction, and how to evaluate PPI prediction quality with standard metrics.

**Grounded in:** The results portrayed in Fig. 2 show the superiority of SPIDER over the three baselines (NR, ERW, co-abundance) across all cell types.

**Tech stack:** Python 3.11, pandas, numpy, scipy, matplotlib

**Data:** Public gene expression data from GTEx or a similar public RNA-seq dataset as a substitute for the paper's tissue-specific expression data; a static PPI reference network from a public database like STRING or BioGRID.

**Build it:**

1. Download a public gene expression dataset for a human tissue or cell line (e.g., GTEx).
2. Preprocess the data to compute protein-level abundance estimates (e.g., average gene expression per protein).
3. Calculate pairwise Pearson correlation coefficients between protein abundance profiles.
4. Threshold or rank correlations to predict PPIs based on co-abundance.
5. Compare predicted PPIs to a known static PPI network and compute AUROC and AUPRC metrics.
6. Visualize the ROC curve and report baseline performance.

**Ships as:** A GitHub repository with code to compute co-abundance correlations, evaluate against a reference PPI network, and a README explaining the baseline method and results.

**Stretch goal:** Add co-localization or tissue ontology distance as a simple additional feature to improve baseline predictions.

### Intermediate — Run and Evaluate SPIDER on a Small Cell-Type Dataset
*Effort: 1-3 weekends*

You clone and run the SPIDER code released by the authors to train the model on a smaller or substitute dataset, such as a subset of GTEx tissues or a public cell line dataset. You reproduce core evaluation metrics (AUROC, AUPRC) and compare SPIDER's performance against at least one baseline method like co-abundance. You prepare a report showing the model's predictive performance and generalization on unseen tissues.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' graph attention network implementation, understand the integration of heterogeneous features, and replicate the paper's core supervised learning approach and evaluation.

**Grounded in:** Development of SPIDER, a supervised graph attention model for cell-type-specific PPI prediction; The improvement in both AUROC and AUPRC is evident already after introducing the HEK293T model with 10% of the dataset.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas, numpy

**Data:** Use the authors' released code and data from https://github.com/Kuper994/SPIDER, focusing on a smaller subset of human or mouse tissue data provided or substituting with public expression and PPI data where necessary.

**Build it:**

1. Clone the SPIDER repository from https://github.com/Kuper994/SPIDER.
2. Set up the environment and install dependencies as per the repository instructions.
3. Prepare or select a small subset of tissue-specific expression and PPI data (from the repo or substitute public data).
4. Train the SPIDER model on this dataset and evaluate using AUROC and AUPRC metrics.
5. Implement a simple baseline method (e.g., co-abundance correlation) for comparison.
6. Generate a report comparing SPIDER's performance to the baseline and visualize ROC and precision-recall curves.

**Verified links from the paper:**

- <https://github.com/Kuper994/SPIDER> — released by the paper's authors

**Ships as:** A GitHub repository with scripts to run SPIDER on a small dataset, baseline comparison code, evaluation metrics, and a README documenting the process and results.

**Stretch goal:** Experiment with transfer learning by fine-tuning the model on a new tissue with limited data and report performance gains.

### Advanced — Incorporate Bayesian Uncertainty Quantification into SPIDER
*Effort: a few weeks*

You extend the SPIDER model by integrating Bayesian probabilistic modeling techniques to quantify uncertainty in cell-type-specific PPI predictions. This could involve implementing Bayesian graph neural networks or Monte Carlo dropout within the SPIDER architecture. You evaluate how uncertainty estimates correlate with prediction confidence, especially for tissues with limited or noisy data, addressing a limitation noted in the paper. You document the impact on prediction robustness and potential biological interpretability.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of SPIDER, demonstrating deep comprehension of the model's architecture and the biological context. It also shows your ability to innovate by combining Bayesian methods with graph attention networks for improved interpretability and reliability.

**Grounded in:** Given SPIDER’s reliance on experimentally measured cell-type-specific networks for supervised training, how might Bayesian probabilistic models be integrated to better quantify uncertainty in predictions, especially for tissues with limited or noisy data?; Condition-specific features could be further enhanced with more diverse data.

**Tech stack:** Python 3.11, PyTorch, Pyro or TensorFlow Probability, scikit-learn, pandas, numpy

**Data:** Use the authors' SPIDER code and data from https://github.com/Kuper994/SPIDER as a base, focusing on human or mouse tissue-specific PPI datasets; optionally simulate limited/noisy data scenarios.

**Build it:**

1. Study the SPIDER model architecture and codebase to identify integration points for Bayesian uncertainty methods.
2. Implement Bayesian extensions such as Monte Carlo dropout or a Bayesian graph attention layer within SPIDER.
3. Train the modified model on tissue-specific PPI data, including experiments with limited or noisy data subsets.
4. Quantify prediction uncertainty and analyze its correlation with prediction accuracy and data quality.
5. Compare results to the original SPIDER model without uncertainty quantification.
6. Document findings, including potential biological insights from uncertainty estimates.

**Verified links from the paper:**

- <https://github.com/Kuper994/SPIDER> — released by the paper's authors

**Ships as:** A GitHub repository with the extended SPIDER implementation supporting Bayesian uncertainty, evaluation scripts, and a detailed README discussing methodology, results, and biological implications.

**Stretch goal:** Apply the Bayesian SPIDER model to predict dynamic PPI changes across disease states or developmental stages using available or simulated data.
