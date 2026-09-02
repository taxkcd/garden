---
title: "517 · MiLaSol: Modeling Protein Solubility by Mixing Up Multiple Protein Language Models — Lenore Cowen"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lenore-cowen"
source_hash: "5248bb13028243fa160d80961b0c3b495e25184a323038dd745ab21b9d4f5e93"
sequence: 517
generator: "outreach-garden: managed"
---

# 517 · MiLaSol: Modeling Protein Solubility by Mixing Up Multiple Protein Language Models

## At a glance

- **Professor:** Lenore Cowen
- **Institution:** Tufts University
- **Paper:** [MiLaSol: Modeling Protein Solubility by Mixing Up Multiple Protein Language Models](http://127.0.0.1:8899/milasol.pdf)
- **Authors:** Weiwei Lou, Mert Erden, Lenore Cowen
- **Year:** 2026

## Paper overview

This paper introduces MiLaSol, a deep learning model that predicts protein solubility by combining multiple protein language model embeddings. It achieves higher accuracy than previous methods and can also design more soluble protein variants using computational optimization.

### Why it matters

**Research problem:** Predicting intrinsic protein solubility directly from amino acid sequences is challenging due to complex dependencies on both global and local sequence features, and existing methods struggle to integrate structural information effectively.

**Why it matters:** Protein solubility is critical for therapeutic protein efficacy, protein engineering, and biotechnological applications. Accurate solubility prediction and design can accelerate protein optimization and improve drug development.

**Key contributions:**

- Development of MiLaSol, a multi-embedding deep learning model for protein solubility prediction without handcrafted features.
- Demonstration that combining multiple protein language models improves prediction accuracy and robustness.
- Introduction of latent space mixup and denoising autoencoder regularization to enhance model generalization.
- Application of MiLaSol to design soluble protein variants from insoluble mutants using latent space optimization.
- Comprehensive benchmarking showing MiLaSol outperforms prior state-of-the-art methods on standard datasets.

## About the professor

**Lenore Cowen** — Tufts University.

### Research links

- [Faculty/profile page](https://engineering.tufts.edu/cs/people/faculty/lenore-cowen)
- [Identity evidence](http://www.cs.tufts.edu/~cowen)
- [Identity evidence](https://www.cs.tufts.edu/~cowen/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Protein language models
**The paper assumes:** protein language models, deep learning for biological sequences, embedding representations of proteins
**Already in this field?** Skip this entirely if you already understand how protein language models generate embeddings and their role in computational biology.

To understand the MiLaSol paper, which relies heavily on embeddings from multiple protein language models, it is essential to grasp how protein language models work and how they represent protein sequences. The rigorous course option provides a deep, structured university-level introduction to proteogenomics and protein sequence analysis, while the fast track offers a concise, focused series on protein language models and machine learning applications in protein modeling and design. Choose the course for a thorough foundation and the fast track for a quicker, targeted overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2019-Introduction to Proteogenomics](https://www.youtube.com/playlist?list=PLOzRYVm0a65ejXQYPTNNRNbLmeqzCzsc-) — NPTEL IIT Bombay · 81 videos · 26.7h across the first 60 episodes

**Watch only this:** Lectures 3 to 5 (Introduction to Genomics - Parts I to III: Gene sequencing and mutations, Sequence Alignment, Transcriptome), plus Lectures 11 to 13 (Introduction to Proteomics, Sample Prep & Protein Quantification, Applications of Proteomics), totaling about 3.5 hours. These cover the biological sequence data and protein context needed to understand protein language models.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Proteogenomics covers foundational topics in genomics and proteomics, including sequence analysis and protein quantification, which are critical for understanding protein language models and their biological context.

*If you want all of it:* About 26.7 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Protein Modeling and Design with PyRosetta and Machine Learning (Rosetta Commons RaMP Bootcamp 2023)](https://www.youtube.com/playlist?list=PLFavr8uo6kSqDB1cbXUDFZSooNk537teC) — RosettaCommons · 12 videos · 7.0h across 12 episodes

**Watch only this:** Episodes 7 (Machine learning basics for protein modeling and design) and 8 (Protein Language Models), totaling about 1.1 hours. These episodes focus directly on the ML and protein language model concepts relevant to the paper.

*Why it unblocks this paper:* This RosettaCommons RaMP Bootcamp series includes a dedicated episode on Protein Language Models and covers machine learning basics for protein modeling and design, providing a concise, practical introduction to the core concepts behind protein language model embeddings used in MiLaSol.

*If you want all of it:* About 7.0 hours across 12 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MiLaSol paper, start by building a foundation in deep learning methods for protein sequence analysis, which underlie the neural network architectures used. Then, learn about latent space mixup augmentation and denoising autoencoder regularization, key techniques that enhance MiLaSol's robustness and generalization. Next, study simulated annealing optimization to grasp how MiLaSol guides protein sequence design. Finally, focus on the core concept by watching the authors' own talk or the closest relevant research seminar on protein solubility modeling and protein language model embeddings integration.

### deep learning for protein sequence analysis lecture *(prerequisite)*
This section covers foundational knowledge on how deep learning models process protein sequences, which is essential for understanding MiLaSol's architecture that integrates multiple embeddings with convolutional and recurrent networks. The selected seminar provides a rigorous, research-level introduction to protein sequence modeling and design using deep learning.

*How the paper uses it:* MiLaSol uses deep learning to integrate multiple protein language model embeddings for solubility prediction and design.

▶ [Robust deep learning based protein sequence design using ProteinMPNN](https://www.youtube.com/watch?v=aVQQuoToTJA) — ML for protein engineering seminar series · 53:42 · 3 years ago

### latent space mixup augmentation lecture *(prerequisite)*
Understanding latent space mixup augmentation is crucial because MiLaSol employs this technique to improve model generalization without corrupting supervision. The chosen video explains interpolation-based data augmentation methods in latent spaces, providing insight into the theoretical and practical aspects relevant to MiLaSol's approach.

*How the paper uses it:* MiLaSol introduces latent space mixup augmentation to enhance robustness and generalization in protein solubility prediction.

▶ [MSMix An Interpolation Based Text Data Augmentation Method Manifold Swap Mixup](https://www.youtube.com/watch?v=hRcnKN_v71Q) — Computer Science & IT Conference Proceedings · 4:23 · 2 years ago

### denoising autoencoder regularization lecture *(prerequisite)*
Denoising autoencoder regularization is a key method used in MiLaSol to prevent overfitting and improve robustness by reconstructing clean inputs from corrupted versions. The selected lecture provides a detailed and rigorous explanation of denoising autoencoders, suitable for an advanced audience.

*How the paper uses it:* MiLaSol uses denoising autoencoder regularization as part of its training to improve model robustness.

▶ [Lec 13 Regularization Techniques in AE: Denoising](https://www.youtube.com/watch?v=q3XAdXdqz8s) — NPTEL - Indian Institute of Science, Bengaluru · 42:36 · 2 months ago

### simulated annealing optimization protein design lecture *(prerequisite)*
Simulated annealing is the optimization technique MiLaSol uses to guide the design of more soluble protein variants in latent space. The chosen lecture offers a comprehensive university-level introduction to simulated annealing, covering its theoretical foundations and algorithmic details.

*How the paper uses it:* MiLaSol applies simulated annealing in latent space to optimize protein sequences for improved solubility.

▶ [IEE 598: Lecture 5C (2022-03-01): From MCMC Sampling to Optimization by Simulated Annealing](https://www.youtube.com/watch?v=WZE7GC1UI0k) — Ted Pavlic · 1:15:24 · 4 years ago

### MiLaSol protein solubility talk *(the paper's own talk)*
This section focuses on the core concept of the paper: modeling protein solubility by mixing multiple protein language model embeddings. The ideal resource is the authors' own talk or a closely related research seminar that directly addresses the MiLaSol approach, providing the most precise and detailed understanding of their methodology and results.

*How the paper uses it:* This is the authors' own presentation or a closely related seminar on MiLaSol, directly explaining their novel approach to protein solubility prediction and design.

▶ [La-Proteina: Atomistic Protein Generation via Partially Latent Flow Matching](https://www.youtube.com/watch?v=kA6-x5CpJIU) — ML for protein engineering seminar series · 1:05:13 · 9 months ago

### protein language models embeddings lecture
Protein language model embeddings are central to MiLaSol's architecture, as it integrates embeddings from ESM2, Raygun, and ProtT5. This seminar-level talk provides an advanced overview of protein language models, their scaling, and applications in protein design, complementing the core understanding of MiLaSol's embedding integration.

*How the paper uses it:* MiLaSol combines multiple pretrained protein language model embeddings to improve solubility prediction accuracy.

▶ [BioML Seminar 4.1 - Jeff Ruffolo on Designing proteins with language models](https://www.youtube.com/watch?v=8cPv9yAcNpo) — Machine Learning at Berkeley · 1:16:16 · 6mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand MiLaSol, a deep learning model for protein solubility prediction. We start with basics of deep learning applied to protein sequences, then cover key techniques used in MiLaSol such as latent space mixup augmentation and denoising autoencoder regularization. Next, we explain simulated annealing optimization for protein design, followed by protein language model embeddings, culminating in the core topic of MiLaSol's protein solubility modeling approach.

### deep learning for protein sequence analysis lecture *(prerequisite)*
Learn how deep learning models process protein sequences to extract meaningful features for prediction tasks. This foundation helps understand how neural networks can capture complex sequence patterns relevant to protein properties.

*How the paper uses it:* MiLaSol uses convolutional and recurrent neural networks to analyze protein sequences for solubility prediction.

▶ [Robust deep learning based protein sequence design using ProteinMPNN](https://www.youtube.com/watch?v=aVQQuoToTJA) — ML for protein engineering seminar series · 53:42 · 3 years ago

### latent space mixup augmentation lecture *(prerequisite)*
Understand latent space mixup, a data augmentation technique that creates new training examples by interpolating hidden representations, improving model generalization without corrupting labels.

*How the paper uses it:* MiLaSol applies latent space mixup augmentation to enhance robustness and generalization in solubility prediction.

▶ [MSMix An Interpolation Based Text Data Augmentation Method Manifold Swap Mixup](https://www.youtube.com/watch?v=hRcnKN_v71Q) — Computer Science & IT Conference Proceedings · 4:23 · 2 years ago

### denoising autoencoder regularization lecture *(prerequisite)*
Explore denoising autoencoders, which learn to reconstruct original data from corrupted inputs, serving as a regularization method to prevent overfitting and improve model robustness.

*How the paper uses it:* MiLaSol incorporates denoising autoencoder regularization to stabilize training and improve prediction accuracy.

▶ [Denoising Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=0V96wE7lY4w) — Deepia · 15:17 · 1 year ago

### simulated annealing optimization protein design lecture *(prerequisite)*
Learn simulated annealing, a probabilistic optimization technique inspired by metal annealing, useful for searching complex solution spaces to find near-optimal designs.

*How the paper uses it:* MiLaSol uses simulated annealing in latent space to design more soluble protein variants from insoluble mutants.

▶ [The simulated annealing algorithm explained with an analogy to a toy](https://www.youtube.com/watch?v=eBmU1ONJ-os) — Badri Adhikari · 11:15 · 9 years ago

### protein language models embeddings lecture
Discover how protein language models learn rich sequence embeddings by training on large protein databases, capturing evolutionary and structural information useful for downstream tasks.

*How the paper uses it:* MiLaSol integrates embeddings from multiple pretrained protein language models (ESM2, Raygun, ProtT5) to improve solubility prediction.

▶ [Using ESM-2 in Python: Protein Embeddings & Fine-Tuning](https://www.youtube.com/watch?v=i2kz72NIpNs) — ProteinVision · 11:01 · 9mo ago

### MiLaSol protein solubility talk *(the paper's own talk)*
Watch a detailed presentation on MiLaSol to understand its architecture, training strategies, and applications in protein solubility prediction and design.

*How the paper uses it:* This talk directly presents the MiLaSol model and its innovations as described in the paper.

▶ [La-Proteina: Atomistic Protein Generation via Partially Latent Flow Matching](https://www.youtube.com/watch?v=kA6-x5CpJIU) — ML for protein engineering seminar series · 1:05:13 · 9 months ago

## Already in your library

- [Lecture11 - Protein Language Models - MLCB24](https://www.youtube.com/watch?v=uPoFdCUqBWk) — also for: TCR-EML: Explainable Model Layers for TCR-pMHC Prediction (Ramgopal Mettu)
- [6: Deep Learning for Natural Language – Embeddings](https://www.youtube.com/watch?v=LqFc0z-pQTg) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Protein embeddings and deep learning predict... - Maria Littmann - Function - Abstract - ISMB 2022](https://www.youtube.com/watch?v=ZLbIel0wr6g) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [ESM-2 Protein Language Model Explained – Architecture & Training](https://www.youtube.com/watch?v=_9oTqDWGaFc) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Nazim Bouatta | Machine learning for protein structure prediction, Part 1: Algorithm space](https://www.youtube.com/watch?v=yqeUH4RsJp8) — also for: Traditional machine learning vs. deep learning from dynamic graph representations of proteins’ 3D folds in the task of protein structure classification (Tijana Milenkovic)
- [Deep Learning(CS7015): Lec 7.4 Denoising Autoencoders](https://www.youtube.com/watch?v=0n2x_D-ZmmU) — also for: Inter-beat Interval Estimation with Tiramisu Model: A Novel Approach with Reduced Error (Behrooz A. Shirazi)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of MiLaSol, a multi-embedding deep learning model for protein solubility prediction and design. Starting from reproducing a core predictive metric using pretrained embeddings, you advance to running and extending the authors' code on benchmark datasets, and finally explore an extension addressing a stated limitation by incorporating explicit structural features for improved prediction.

### Beginner — Protein Solubility Prediction Using Single Protein Language Model Embeddings
*Effort: a weekend, ~8 hours*

You build a simple protein solubility classifier using one pretrained protein language model embedding (e.g., ESM2) combined with a basic neural network (e.g., a small CNN or RNN). You train and evaluate it on the DeepSol benchmark dataset, reproducing the paper's baseline accuracy and MCC for a single embedding.

**Why it shows you understood the paper:** This project shows you understand the importance of protein language model embeddings and how they contribute to solubility prediction, as well as the evaluation metrics used in the paper.

**Grounded in:** Ablation studies confirm that combining ESM2, Raygun, and ProtT5 embeddings yields the best performance, with ESM2 being the most critical.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** DeepSol benchmark dataset (Chang et al., 2014) used in the paper for solubility prediction evaluation; publicly available substitute datasets may be used if exact data is unavailable.

**Build it:**

1. Download and preprocess the DeepSol benchmark dataset to extract protein sequences and solubility labels.
2. Obtain pretrained embeddings from the ESM2 protein language model for each sequence.
3. Build a simple neural network classifier (e.g., CNN or RNN) that takes ESM2 embeddings as input and predicts solubility.
4. Train the model on the training split and evaluate accuracy and Matthews Correlation Coefficient (MCC) on the test split.
5. Compare your results to the single-embedding baseline reported in the paper.

**Ships as:** A GitHub repository with code and a README showing the model architecture, training procedure, evaluation metrics, and comparison to the paper's single-embedding baseline.

**Stretch goal:** Add Raygun or ProtT5 embeddings and compare single-embedding performance across models.

### Intermediate — Reproducing MiLaSol Multi-Embedding Solubility Prediction and Latent Mixup
*Effort: 2-3 weekends, ~20 hours*

You clone and run the MiLaSol codebase from the authors' GitHub repository to reproduce their multi-embedding solubility prediction results on the DeepSol and UESolDS benchmarks. You implement an ablation to compare performance with and without latent space mixup augmentation, reporting accuracy and MCC.

**Why it shows you understood the paper:** This project demonstrates your ability to work with complex multi-embedding models and advanced regularization techniques like latent mixup, directly engaging with the paper's core contributions and results.

**Grounded in:** Development of MiLaSol, a multi-embedding deep learning model for protein solubility prediction without handcrafted features; Latent mixup augmentation improves generalization without corrupting supervision.

**Tech stack:** Python 3.11, PyTorch, NumPy, pandas, scikit-learn

**Data:** DeepSol and UESolDS benchmark datasets as used in the paper; the authors' code repository includes data preprocessing scripts.

**Build it:**

1. Clone the MiLaSol repository from https://github.com/weiweiloutufts/milasol and set up the environment.
2. Download and preprocess the DeepSol and UESolDS datasets as per the repository instructions.
3. Run the baseline multi-embedding MiLaSol model training and evaluation to reproduce reported metrics.
4. Implement an ablation experiment by disabling latent space mixup augmentation and retrain the model.
5. Compare and report the differences in accuracy and MCC between models with and without latent mixup.
6. Document your findings and any challenges encountered.

**Verified links from the paper:**

- <https://github.com/weiweiloutufts/milasol> — released by the paper's authors

**Ships as:** A GitHub repository fork with scripts to run MiLaSol, an ablation experiment on latent mixup, and a detailed README with reproduced metrics and analysis.

**Stretch goal:** Add a simple baseline using only one embedding (e.g., ESM2) within the MiLaSol codebase for direct comparison.

### Advanced — Incorporating Explicit Structural Features into MiLaSol for Improved Solubility Prediction
*Effort: 3-4 weeks*

You extend the MiLaSol architecture by integrating explicit structural information (e.g., predicted secondary structure or solvent accessibility) alongside the multiple protein language model embeddings. You retrain and evaluate the enhanced model on the DeepSol benchmark to test if structural features improve prediction accuracy and robustness.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors — limited incorporation of structural information — and applies your skills to meaningfully extend the model, demonstrating deep comprehension and research potential.

**Grounded in:** Structural information incorporation remains limited compared to some recent methods that use explicit structural features; future direction: incorporating more explicit structural information to further improve prediction accuracy.

**Tech stack:** Python 3.11, PyTorch, biopython, scikit-learn, NumPy, pandas

**Data:** DeepSol benchmark dataset; structural features can be derived from sequence using tools like DSSP or predicted by AlphaFold or similar, or approximated from sequence-based predictors.

**Build it:**

1. Familiarize yourself with the MiLaSol codebase and its multi-embedding integration.
2. Select or develop a pipeline to generate explicit structural features (e.g., secondary structure, solvent accessibility) from protein sequences in the dataset.
3. Modify the MiLaSol model architecture to accept and integrate these structural features alongside the existing embeddings.
4. Retrain the modified model on the DeepSol training set with the combined features.
5. Evaluate the model on the DeepSol test set and compare accuracy, MCC, and other metrics to the original MiLaSol results.
6. Analyze whether structural features improve prediction and document your methodology and results.

**Verified links from the paper:**

- <https://github.com/weiweiloutufts/milasol> — released by the paper's authors

**Ships as:** A GitHub repository with the extended MiLaSol model code, scripts for structural feature extraction, training and evaluation results, and a comprehensive README discussing the impact of structural features.

**Stretch goal:** Experiment with different types of structural features or incorporate experimental feedback loops for iterative model refinement.

_The DeepSol and UESolDS datasets are referenced in the paper but may require locating publicly or substituting with similar protein solubility datasets; the MiLaSol repository provides data preprocessing guidance but not raw datasets._
