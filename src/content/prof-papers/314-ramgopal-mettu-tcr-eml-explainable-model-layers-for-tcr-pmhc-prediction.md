---
title: "314 · TCR-EML: Explainable Model Layers for TCR-pMHC Prediction — Ramgopal Mettu"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ramgopal-mettu"
source_hash: "5d402af3b0dc97521cc3ce265ef5280fa609d5a87c0f9519093f93a47e3110bb"
sequence: 314
generator: "outreach-garden: managed"
---

# 314 · TCR-EML: Explainable Model Layers for TCR-pMHC Prediction

## At a glance

- **Professor:** Ramgopal Mettu
- **Institution:** Tulane University
- **Paper:** [TCR-EML: Explainable Model Layers for TCR-pMHC Prediction](https://pmc.ncbi.nlm.nih.gov/articles/PMC12976928/)
- **Authors:** Jiarui Li, Zixiang Yin, Zhengming Ding, Samuel J. Landry, Ramgopal R. Mettu
- **Year:** 2026

## Paper overview

This paper presents TCR-EML, a novel explainable model layer approach for predicting the binding between T cell receptors (TCRs) and peptide-MHC (pMHC) complexes. Unlike existing black-box models, TCR-EML integrates explainability directly into the model architecture by using prototype layers that represent residue-level contacts based on known biochemical binding mechanisms. The method leverages pretrained protein language models and achieves both high predictive accuracy and interpretable explanations validated against experimental data.

### Why it matters

**Research problem:** Accurately predicting TCR-pMHC binding is crucial for understanding adaptive immunity but existing machine learning models are mostly black-boxes that lack faithful, mechanistic explanations for their predictions.

**Why it matters:** TCR-pMHC binding specificity underlies T cell-mediated immune responses, which are central to vaccine design, cancer immunotherapy, and autoimmune disease treatment. Improved predictive models with explainability can accelerate biological insights and therapeutic development.

**Key contributions:**

- Introduction of explainable model layers (TCR-EML) for TCR-pMHC binding prediction that provide mechanistic residue-level explanations.
- Integration of TCR-EML with multiple pretrained protein language models (ProteinBERT, ESM-1b, ESM-2) without full retraining.
- Demonstration of superior predictive accuracy and generalization to unseen epitopes compared to state-of-the-art black-box models (MixTCRpred, TULIP).
- Quantitative evaluation of explainability using the TCR-XAI benchmark showing high Binding Region Hit Rate (BRHR) for contact predictions.
- Case study validating predicted contact maps against experimental structural data for an MHC-II TCR-pMHC complex.

## About the professor

**Ramgopal Mettu** — Associate Professor, Department of Computer Science, Tulane University.

Research interests: computational biology, immunology, robotics, novel algorithmic approaches in machine learning and discrete optimization

### Research links

- [Faculty/profile page](https://sse.tulane.edu/ramgopal-mettu)
- [Identity evidence](http://www2.tulane.edu/sse/cs/faculty/ramgopal-mettu.cfm)
- [Identity evidence](https://ramgopalmettu.org/about)
- [Resolved homepage](https://ramgopalmettu.org)
- [Google Scholar](https://scholar.google.com/citations?user=gHZTKpkAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/ramgopal-mettu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TCR-EML paper, start with foundational knowledge on protein language models, T cell receptor structure and function, and peptide-MHC complex immunology, as these underpin the biological and computational context. Next, explore explainable AI methods for protein interactions to grasp the methodological innovations in interpretability. Finally, focus on the core concept of TCR-pMHC binding prediction explainability and the authors' own talks to directly connect with the novel contributions of TCR-EML.

### protein language models *(prerequisite)*
Protein language models are the computational backbone of TCR-EML, providing pretrained embeddings that capture biochemical and structural properties of proteins. Understanding their architecture and training is essential to appreciate how TCR-EML integrates explainable layers without full retraining.

*How the paper uses it:* TCR-EML attaches explainable model layers to pretrained protein language model backbones like ProteinBERT and ESM-1b.

▶ [Lecture11 - Protein Language Models - MLCB24](https://www.youtube.com/watch?v=uPoFdCUqBWk) — Manolis Kellis · 1 year ago

### T cell receptor structure and function *(prerequisite)*
The T cell receptor's structure, especially the CDR3 regions, is critical for antigen recognition and binding specificity. A detailed understanding of TCR domains and their roles informs the biological basis for residue-level contact modeling in TCR-EML.

*How the paper uses it:* TCR-EML focuses on modeling residue-level contacts primarily in the CDR3 regions of TCRs for binding prediction.

▶ [T Cell Receptor(TCR) and CD3 (FL-Immuno/28)](https://www.youtube.com/watch?v=W0d5ZDu9dgE) — Frank Lectures · 6:05 · 9 years ago

### peptide-MHC complex immunology *(prerequisite)*
Peptide-MHC complexes present antigenic peptides to TCRs, initiating adaptive immune responses. Understanding the immunological role and structural features of pMHC complexes is foundational for interpreting TCR-pMHC binding predictions.

*How the paper uses it:* TCR-EML predicts binding between TCRs and peptide-MHC complexes, relying on knowledge of pMHC structure and function.

▶ [Major Histocompatibility Complex (MHC) - Human Leukocytic Antigen (HLA) - Immune System](https://www.youtube.com/watch?v=4kW7-xQO-Rs) — Medicosis Perfectionalis · 13:24 · 4 years ago

### explainable AI for protein interactions *(prerequisite)*
Explainable AI methods provide mechanistic insights into protein-protein interactions, which is central to TCR-EML's prototype layers that model residue contacts. Familiarity with explainability techniques in computational biology helps contextualize the novelty of TCR-EML's approach.

*How the paper uses it:* TCR-EML introduces prototype layers that provide mechanistic, residue-level explanations for TCR-pMHC binding predictions.

▶ [Enhancing Protein-Protein Interaction... - Wei Wang - General Comp Bio - Talk - ISMB/ECCB 2021](https://www.youtube.com/watch?v=J2FrgziOyE8) — ISCB · 25:41 · 4 years ago

### TCR-pMHC binding prediction explainability
This concept covers computational methods specifically designed to predict and explain TCR-pMHC binding at the residue level. Understanding current approaches and challenges in explainability for this task directly relates to the core innovation of TCR-EML.

*How the paper uses it:* TCR-EML's central contribution is an explainable model layer that explicitly models residue-level contacts for TCR-pMHC binding prediction.

▶ [3D Structural Modelling for Enhanced Peptide-MHC and TCR Specificity predictions](https://www.youtube.com/watch?v=SH2Fl0pqaFM) — Unravelling T Cell Recognition · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the TCR-EML paper, start by learning the biological basics of T cell receptors and peptide-MHC complexes, which are central to immune recognition. Next, build intuition on protein language models that provide the pretrained embeddings used by TCR-EML. Then, explore explainable AI concepts for protein interactions to grasp how interpretability is integrated. Finally, dive into the core method of TCR-pMHC binding prediction explainability, focusing on residue-level contact modeling as introduced in the paper.

### T cell receptor structure and function *(prerequisite)*
T cell receptors (TCRs) are proteins on T cells that recognize antigens presented by MHC molecules. Understanding their structure, especially the complementarity-determining regions (CDRs) like CDR3, is key to grasping how TCRs bind peptides. This foundational biology helps contextualize the binding prediction problem.

*How the paper uses it:* The paper focuses on modeling residue-level contacts primarily in the CDR3 regions of TCRs for binding prediction.

▶ [T Cell Receptor(TCR) and CD3 (FL-Immuno/28)](https://www.youtube.com/watch?v=W0d5ZDu9dgE) — Frank Lectures · 6:05 · 9 years ago

### peptide-MHC complex immunology *(prerequisite)*
Peptide-MHC (pMHC) complexes present antigenic peptides to TCRs, triggering immune responses. Understanding MHC class I and II molecules and their role in antigen presentation is essential to appreciate the biological target of TCR binding prediction.

*How the paper uses it:* TCR-EML predicts binding between TCRs and pMHC complexes, making knowledge of pMHC immunology crucial.

▶ [Major Histocompatibility Complex (MHC) - Human Leukocytic Antigen (HLA) - Immune System](https://www.youtube.com/watch?v=4kW7-xQO-Rs) — Medicosis Perfectionalis · 13:24 · 4 years ago

### protein language models *(prerequisite)*
Protein language models are deep learning models trained on large protein sequence datasets to learn meaningful representations of amino acid sequences. These pretrained embeddings capture biochemical and structural features useful for downstream tasks like binding prediction.

*How the paper uses it:* TCR-EML attaches explainable layers on top of pretrained protein language models like ProteinBERT and ESM to leverage their learned representations.

▶ [Lecture11 - Protein Language Models - MLCB24](https://www.youtube.com/watch?v=uPoFdCUqBWk) — Manolis Kellis · 1 year ago

### explainable AI for protein interactions *(prerequisite)*
Explainable AI methods aim to make machine learning predictions interpretable, especially important in biological contexts where understanding mechanisms matters. For protein interactions, explainability often involves identifying residue-level contacts or interaction sites that justify predictions.

*How the paper uses it:* TCR-EML introduces prototype layers that provide mechanistic, residue-level explanations for TCR-pMHC binding predictions.

▶ [Enhancing Protein-Protein Interaction... - Wei Wang - General Comp Bio - Talk - ISMB/ECCB 2021](https://www.youtube.com/watch?v=J2FrgziOyE8) — ISCB · 25:41 · 4 years ago

### TCR-pMHC binding prediction explainability
This concept covers computational approaches that predict how TCRs bind to pMHC complexes with interpretable outputs, such as contact maps highlighting residue interactions. Understanding this helps appreciate TCR-EML's novel explainable model layers that integrate biochemical binding mechanisms directly into the model.

*How the paper uses it:* TCR-EML's core contribution is an explainable model layer that predicts residue-level contacts for TCR-pMHC binding with high accuracy and interpretability.

▶ [Untangling the mystery of pMHC TCR binding](https://www.youtube.com/watch?v=mo0JQnYBVzM) — Ardigen SA · 4 years ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Sepehr Ehsani, 21 September 2023: Protein-protein interactions in cell biology](https://www.youtube.com/watch?v=QN3cg9MexLs) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the TCR-EML paper. The beginner project focuses on reproducing and visualizing the explainable contact prototype layer mechanism on a small example, using familiar tools. The intermediate project involves reimplementing the core TCR-EML method on a smaller or substitute dataset, comparing predictive accuracy and explainability metrics against a simple baseline. The advanced project extends the method to incorporate additional CDR regions beyond CDR3, addressing a stated limitation and exploring improved biological fidelity.

### Beginner — Visualize TCR-EML Contact Prototype Layer on Sample TCR-pMHC Sequences
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements the contact prototype layer concept from TCR-EML to compute residue-level contact scores between a given TCR CDR3 sequence and peptide sequence. You visualize the contact scores as a heatmap and compare them qualitatively to known biochemical binding patterns described in the paper.

**Why it shows you understood the paper:** This project shows you understand the core explainability mechanism of TCR-EML — how residue-level contact prototypes are computed and interpreted — and can reproduce a key figure illustrating mechanistic explanations.

**Grounded in:** Introduction of explainable model layers (TCR-EML) for TCR-pMHC binding prediction that provide mechanistic residue-level explanations.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, seaborn, numpy

**Data:** Use a small set of example TCR CDR3 and peptide sequences from the paper's text or public immunology databases as substitute data.

**Build it:**

1. Extract or define a few example TCR CDR3 sequences and peptide sequences representing TCR-pMHC pairs.
2. Implement the contact prototype layer logic: compute similarity-based residue contact scores between TCR and peptide residues using biochemical rules described in the paper.
3. Visualize the resulting contact score matrix as a heatmap with residue labels.
4. Annotate the visualization with known contact regions or biochemical insights from the paper.
5. Write a README explaining the contact prototype layer mechanism and how the visualization relates to TCR-EML explainability.

**Ships as:** A Jupyter notebook and README showing contact score heatmaps for example TCR-peptide pairs, demonstrating the residue-level explainability mechanism.

**Stretch goal:** Add interactive visualization with hover tooltips showing residue pair scores and biochemical properties.

### Intermediate — Reimplement TCR-EML Core Model Layers and Evaluate on Public TCR-pMHC Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core TCR-EML explainable model layers including the feature enhancement and fusion module with cross-attention and the contact prototype layers, attaching them to a pretrained protein language model embedding (e.g., ESM-1b). You train and evaluate this model on a smaller public TCR-pMHC binding dataset, comparing ROC-AUC and Binding Region Hit Rate (BRHR) against a simple linear classifier baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method and metrics, showing you grasp the integration of explainable layers with pretrained embeddings and can quantitatively evaluate predictive accuracy and explainability.

**Grounded in:** The authors develop explainable model layers (TCR-EML) that can be attached to pretrained protein language model backbones. Demonstration of superior predictive accuracy and generalization to unseen epitopes compared to state-of-the-art black-box models.

**Tech stack:** Python 3.11, PyTorch, transformers, numpy, scikit-learn, Jupyter Notebook

**Data:** Use a publicly available TCR-pMHC binding dataset (e.g., VDJdb or a subset thereof) as a substitute for the paper's dataset skewed towards MHC-I.

**Build it:**

1. Obtain pretrained protein language model embeddings (e.g., ESM-1b) for TCR CDR3 and peptide sequences from the dataset.
2. Implement the TCR-EML explainable model layers: feature enhancement with cross-attention and contact prototype layers as described in the paper.
3. Train the combined model on the training split of the dataset to predict TCR-pMHC binding.
4. Evaluate predictive performance using ROC-AUC on a held-out test set with unseen epitopes.
5. Compute explainability metric Binding Region Hit Rate (BRHR) by comparing predicted contact residues to known binding regions if available.
6. Compare results against a baseline linear classifier trained on the same embeddings without explainable layers.
7. Document the implementation, evaluation results, and insights in a detailed README.

**Ships as:** A PyTorch implementation of TCR-EML layers with training and evaluation scripts, plus a report comparing accuracy and explainability metrics to a baseline.

**Stretch goal:** Incorporate cross-validation and hyperparameter tuning to optimize model performance.

### Advanced — Extend TCR-EML to Model Additional CDR Regions for Improved Contact Prediction
*Effort: 3+ weeks*

You extend the TCR-EML architecture to incorporate additional complementarity-determining regions (CDR1 and CDR2) alongside CDR3 for both TCR alpha and beta chains. You adapt the contact prototype layers to model residue-level contacts from these regions to peptides, aiming to improve biological fidelity of contact predictions. You evaluate the extended model's predictive accuracy and contact explanation quality on a dataset including MHC-II epitopes, addressing the paper's limitation on CDR3 focus and MHC-II underrepresentation.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the model architecture and biological context, and the ability to innovate on explainable AI methods for immunological sequence data.

**Grounded in:** Extending TCR-EML to incorporate additional CDR regions beyond CDR3 for more comprehensive modeling. The dataset is heavily skewed towards MHC-I samples, with fewer MHC-II examples, which may affect generalization.

**Tech stack:** Python 3.11, PyTorch, transformers, numpy, scikit-learn, Jupyter Notebook

**Data:** Use a public TCR-pMHC dataset enriched for MHC-II epitopes if available, or simulate additional CDR region sequences based on known TCR structures; no authors' code available.

**Build it:**

1. Research and extract sequence data for CDR1, CDR2, and CDR3 regions for TCR alpha and beta chains from the dataset or literature.
2. Modify the TCR-EML model layers to accept and process embeddings from all three CDR regions per chain.
3. Extend the contact prototype layers to model residue-level contacts from CDR1 and CDR2 to peptides, integrating with existing CDR3 contact modeling.
4. Train the extended model on a dataset including MHC-II epitopes, focusing on improving contact prediction fidelity.
5. Evaluate predictive accuracy (ROC-AUC) and explainability (BRHR) compared to the original CDR3-only model.
6. Analyze contact maps for biological plausibility, comparing to known structural data if available.
7. Document the architectural changes, training procedure, evaluation, and biological insights in a comprehensive report.

**Ships as:** A PyTorch implementation of an extended TCR-EML model incorporating multiple CDR regions, with evaluation scripts and a detailed report on improved contact prediction and biological relevance.

**Stretch goal:** Incorporate structural fine-tuning or additional functional annotations to further enhance contact prediction fidelity.

_No code or datasets were released by the paper's authors; all projects require reimplementation from the paper's descriptions and use of substitute public datasets or simulated data._
