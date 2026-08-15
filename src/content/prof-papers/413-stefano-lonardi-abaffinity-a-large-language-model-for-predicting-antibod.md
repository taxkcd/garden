---
title: "413 · AbAffinity: A Large Language Model for Predicting Antibody Binding Affinity against SARS-CoV-2 — Stefano Lonardi"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stefano-lonardi"
source_hash: "8cdd079ce8b96027926ab2f0ba452daeadd9f087a2d992da8ac6d47b5e4e4c3d"
sequence: 413
generator: "outreach-garden: managed"
---

# 413 · AbAffinity: A Large Language Model for Predicting Antibody Binding Affinity against SARS-CoV-2

## At a glance

- **Professor:** Stefano Lonardi
- **Institution:** Univ. of California - Riverside
- **Paper:** [AbAffinity: A Large Language Model for Predicting Antibody Binding Affinity against SARS-CoV-2](https://arxiv.org/pdf/2603.04480)
- **Authors:** Faisal Bin Ashraf, Animesh Ray, Stefano Lonardi
- **Year:** 2026

## Paper overview

This paper presents Ab-Affinity, a large language model designed to predict how strongly antibodies bind to the SARS-CoV-2 spike protein. By training on a large dataset of antibody sequences and their binding affinities, the model can accurately estimate binding strength, which is critical for designing effective antibodies against COVID-19. The model also provides useful embeddings for other antibody-related tasks and insights into antibody structure.

### Why it matters

**Research problem:** Predicting the binding affinity of antibodies to specific antigens, particularly the SARS-CoV-2 spike protein, using computational methods to accelerate antibody design and reduce experimental costs.

**Why it matters:** Binding affinity is crucial for understanding immune responses and designing therapeutic antibodies. Experimental methods to measure affinity are time-consuming and costly. Computational prediction can streamline antibody development, especially important during pandemics like COVID-19.

**Key contributions:**

- Introduced Ab-Affinity, a large language model specialized for antibody binding affinity prediction against SARS-CoV-2.
- Trained on a large, high-quality dataset of over 71,000 unique antibodies with binding affinity measurements.
- Demonstrated superior predictive performance compared to existing methods including DG-Affinity, ESM-2, and AbLang.
- Provided embeddings that enable downstream classification tasks related to antibody binding strength.
- Extracted residue-residue attention maps highlighting important antibody regions (CDRs) for binding.

## About the professor

**Stefano Lonardi** — Professor and Vice Chair of Undergraduate Education, Computer Science and Engineering, Univ. of California - Riverside.

Research interests: Computational Molecular Biology, Bioinformatics, Genomics, Epigenetics, Data Mining

### Research links

- [Faculty/profile page](http://www.cs.ucr.edu/~stelo)
- [Professor website](http://www.cs.ucr.edu/~stelo/)
- [Lab website](http://theory.cs.ucr.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** protein language models
**The paper assumes:** protein language models, transformer architectures, attention mechanisms in bioinformatics
**Already in this field?** Skip this entirely if you already understand transformer-based protein language models and their application to sequence-function prediction.

To understand the AbAffinity paper's core method—a BERT-based large language model trained on antibody sequences—you need solid background on protein language models and transformer architectures. The rigorous course option offers a detailed, structured university-level introduction to transformer-based large language models, ideal for deep comprehension. The fast track provides a shorter, focused playlist on protein folding and related protein language models, giving a quicker but still relevant overview of the biological and computational context.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to large language models](https://www.youtube.com/playlist?list=PLZ2ps__7DhBbaMNZoyW2Hizl8DG6ikkjo) — IIT Madras - B.S. Degree Programme · 55 videos · 15.0h across 55 episodes

**Watch only this:** Lectures L1 to L5 plus L21 and L24, about 2.5 hours — covering transformer basics, attention, positional encoding, and BERT masked language modeling relevant to protein language models.

*Why it unblocks this paper:* This IIT Madras course on large language models covers transformer architecture, attention mechanisms, and BERT training objectives in depth, directly matching the AbAffinity model's architecture and training approach.

*If you want all of it:* 15.0 hours across 55 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Protein Folding](https://www.youtube.com/playlist?list=PLHsPRV2hHomD6Zk-XMoRKG1lC5LPOLXd_) — Yingyao Zhou · 13 videos · 5.9h across 13 episodes

**Watch only this:** Episodes 1, 2, and 6, about 1.5 hours — focusing on AlphaFold 2, ESM metagenomic atlas with LLMs, and protein language models overview.

*Why it unblocks this paper:* This concise playlist on protein folding and protein language models provides a biologically grounded introduction to protein structure prediction and the role of language models like ESM, helping quickly grasp the biological context of AbAffinity embeddings.

*If you want all of it:* 5.9 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AbAffinity paper, start with foundational knowledge on protein language models and antibody binding affinity prediction, as these underpin the model's design and application. Then, explore attention mechanisms in deep learning to grasp how the model captures sequence-function relationships. Finally, focus on the core concept of the AbAffinity model itself, prioritizing any direct talks by the authors or closely related academic presentations.

### Protein language models *(prerequisite)*
Protein language models adapt natural language processing techniques to protein sequences, enabling the capture of complex sequence patterns and functional relationships. Understanding these models provides the foundation for how AbAffinity leverages pretrained protein language models to predict antibody binding affinity.

*How the paper uses it:* AbAffinity builds upon pretrained protein language models to encode antibody sequences effectively.

▶ [Protein Language Models](https://www.youtube.com/watch?v=9DL1aX5fM_I) — RosettaCommons · 2 years ago

### Antibody binding affinity prediction *(prerequisite)*
This concept covers computational and biological methods to estimate how strongly antibodies bind to antigens, a core problem addressed by AbAffinity. Familiarity with current approaches and challenges in affinity prediction contextualizes the paper's contributions and evaluation.

*How the paper uses it:* AbAffinity directly addresses the computational prediction of antibody binding affinity against SARS-CoV-2.

▶ [P2PXML: Antibody-Antigen Binding Affinity Prediction](https://www.youtube.com/watch?v=VpYKRmcXJmk) — Department of Electronic and Telecommunication Engineering, University of Moratuwa · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand AbAffinity, a large language model predicting antibody binding affinity against SARS-CoV-2. Start by learning how protein language models work, then grasp the biological and computational challenges of antibody binding affinity prediction. Next, understand attention mechanisms that enable the model to capture sequence-function relationships, and finally explore the specific antibody binding affinity problem addressed by the paper.

### Protein language models *(prerequisite)*
Protein language models apply natural language processing techniques to protein sequences, learning patterns and relationships between amino acids to predict protein properties. Understanding these models provides intuition on how AbAffinity leverages sequence data to infer binding affinity.

*How the paper uses it:* AbAffinity builds on pretrained protein language models to capture sequence-function relationships in antibodies.

▶ [Protein Language Models](https://www.youtube.com/watch?v=9DL1aX5fM_I) — RosettaCommons · 2 years ago

### Antibody binding affinity prediction *(prerequisite)*
Binding affinity measures how strongly an antibody binds to an antigen, a key factor in immune response and therapeutic design. Computational prediction methods aim to estimate this affinity from sequence or structure, accelerating antibody development by reducing costly experiments.

*How the paper uses it:* The core problem AbAffinity addresses is predicting antibody binding affinity to the SARS-CoV-2 spike protein computationally.

▶ [P2PXML: Antibody-Antigen Binding Affinity Prediction](https://www.youtube.com/watch?v=VpYKRmcXJmk) — Department of Electronic and Telecommunication Engineering, University of Moratuwa · 2 years ago

### AbAffinity model talk *(the paper's own talk)*
A direct explanation of antibody affinity and avidity concepts helps ground the biological context of the model's predictions. This foundational knowledge supports understanding the significance of AbAffinity's outputs.

*How the paper uses it:* Understanding antibody binding concepts clarifies what AbAffinity predicts and why it matters.

▶ [Affinity and Avidity (Antigen antibody interaction)](https://www.youtube.com/watch?v=DDEuyfKdO_4) — Animated biology With arpan · 7 years ago

## Already in your library

- [Lecture11 - Protein Language Models - MLCB24](https://www.youtube.com/watch?v=uPoFdCUqBWk) — also for: TCR-EML: Explainable Model Layers for TCR-pMHC Prediction (Ramgopal Mettu)
- [ESM-2 Protein Language Model Explained – Architecture & Training](https://www.youtube.com/watch?v=_9oTqDWGaFc) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention Mechanism](https://www.youtube.com/watch?v=oMeIDqRguLY) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [The Attention Mechanism 1 hour explanation](https://www.youtube.com/watch?v=K45ze9Yd5UE) — also for: Grounded Video Description (Jason J. Corso)
- [Lecture 13: Attention](https://www.youtube.com/watch?v=YAgjfMR9R_M) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [C5W3L07 Attention Model Intuition](https://www.youtube.com/watch?v=SysgYptB198) — also for: Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis (Christina Boucher)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the Ab-Affinity paper. The beginner project reproduces a key visualization from the paper using embeddings, the intermediate project runs and extends the authors' released Ab-Affinity model on antibody binding affinity prediction, and the advanced project tackles a future direction by extending the model to predict binding affinity for a different antigen using transfer learning. Each project builds on your existing skills while introducing relevant new concepts and tools.

### Beginner — Visualize Ab-Affinity Embeddings with t-SNE
*Effort: a weekend, ~8 hours*

You build a Python notebook that loads precomputed Ab-Affinity embeddings for a small set of antibody sequences and visualizes them using t-SNE to reproduce the smooth gradient of binding affinity shown in the paper. You compare these embeddings to generic protein model embeddings (e.g., ESM-2) to highlight differences.

**Why it shows you understood the paper:** This project shows you understand how the Ab-Affinity model captures meaningful biological information in its embeddings and can reproduce a key figure demonstrating this property.

**Grounded in:** t-SNE visualization showed Ab-Affinity embeddings form smooth gradients corresponding to binding affinity, unlike generic protein models.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, matplotlib, seaborn, numpy, pandas

**Data:** Use a small subset of antibody sequence embeddings from the Ab-Affinity GitHub repository or simulate embeddings by running the model on a few example sequences if available.

**Build it:**

1. Clone the Ab-Affinity GitHub repository and install dependencies.
2. Load a small set of antibody sequences and generate their embeddings using the Ab-Affinity model or use provided embeddings if available.
3. Load embeddings from a generic protein language model like ESM-2 for the same sequences (if feasible) or simulate for comparison.
4. Apply t-SNE dimensionality reduction to both embedding sets.
5. Plot the 2D t-SNE embeddings colored by known binding affinity values to visualize gradients.
6. Write a README explaining the visualization and its significance.

**Verified links from the paper:**

- <https://github.com/ucrbioinfo/AbAffinity> — released by the paper's authors

**Ships as:** A Jupyter notebook and plots showing t-SNE visualizations of Ab-Affinity embeddings versus generic embeddings, with a README explaining the results.

**Stretch goal:** Add interactive visualization with Plotly or Dash to explore embeddings and affinity values dynamically.

### Intermediate — Run and Evaluate Ab-Affinity Model on Antibody Binding Affinity
*Effort: 2 weekends, ~20 hours*

You set up the Ab-Affinity model from the authors' GitHub repository, run it on a provided test set of antibody sequences with binding affinity labels, and reproduce key metrics such as Pearson and Spearman correlations. You then implement a simple baseline (e.g., a linear regression on sequence features) and compare performance.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code, understand the model architecture and evaluation metrics, and critically compare it against a baseline, showing comprehension of the core method.

**Grounded in:** Ab-Affinity achieved the highest Pearson and Spearman correlation coefficients on test datasets compared to other state-of-the-art models.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook, numpy, pandas

**Data:** Use the antibody sequence and binding affinity dataset provided or referenced in the Ab-Affinity GitHub repository. If not publicly available, use a small public antibody binding affinity dataset as a substitute.

**Build it:**

1. Clone the Ab-Affinity repository and install all required dependencies.
2. Prepare the dataset of antibody sequences and binding affinity labels as per the repository instructions.
3. Run the pretrained Ab-Affinity model to generate binding affinity predictions on the test set.
4. Calculate Pearson and Spearman correlation coefficients between predicted and true affinities.
5. Implement a simple baseline model (e.g., linear regression on sequence k-mer counts or physicochemical features).
6. Compare baseline performance to Ab-Affinity and document results.
7. Write a detailed README describing the setup, evaluation, and comparison.

**Verified links from the paper:**

- <https://github.com/ucrbioinfo/AbAffinity> — released by the paper's authors

**Ships as:** A reproducible pipeline with code and notebook showing Ab-Affinity predictions, baseline comparison, and evaluation metrics with explanations.

**Stretch goal:** Fine-tune the Ab-Affinity model on a subset of data and observe changes in performance.

### Advanced — Extend Ab-Affinity to Predict Binding Affinity for a New Antigen
*Effort: 3-4 weeks*

You extend the Ab-Affinity model to predict antibody binding affinity against a different antigen (not SARS-CoV-2 HR2 peptide) by applying transfer learning. You collect or simulate a small dataset of antibody sequences with binding affinity measurements for the new antigen, fine-tune the model, and evaluate performance. You analyze whether the model embeddings and attention maps still highlight relevant antibody regions.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper by testing the model's generalizability beyond SARS-CoV-2. It shows deep understanding of the model, transfer learning, and antibody binding prediction challenges.

**Grounded in:** Limitations: Model trained specifically on SARS-CoV-2 HR2 peptide binding data, which may limit generalizability to other antigens or antibody types. Future direction: Extending the model to predict binding affinity for a broader range of antigens beyond SARS-CoV-2.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook, numpy, pandas

**Data:** Use a publicly available antibody binding affinity dataset for a different antigen if available (e.g., influenza hemagglutinin or HIV gp120). If none is available, simulate a small dataset with synthetic sequences and affinity labels for proof of concept.

**Build it:**

1. Identify and acquire a dataset of antibody sequences with binding affinity measurements for a non-SARS-CoV-2 antigen.
2. Preprocess the dataset to match the input format expected by Ab-Affinity.
3. Load the pretrained Ab-Affinity model and modify the final prediction layer if necessary.
4. Fine-tune the model on the new dataset using transfer learning techniques.
5. Evaluate the fine-tuned model's performance using Pearson and Spearman correlations.
6. Visualize attention maps and embeddings to analyze if the model focuses on relevant antibody regions.
7. Document the methodology, results, limitations, and potential improvements in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/ucrbioinfo/AbAffinity> — released by the paper's authors

**Ships as:** A fine-tuned Ab-Affinity model for a new antigen with evaluation metrics, attention visualizations, and a detailed report on methodology and findings.

**Stretch goal:** Incorporate structural data or multimodal inputs to improve prediction accuracy and interpretability as suggested in the paper's future directions.

_The Ab-Affinity authors' repository does not explicitly provide the full training dataset; you may need to use substitute public antibody binding affinity datasets or simulate data for intermediate and advanced projects._
