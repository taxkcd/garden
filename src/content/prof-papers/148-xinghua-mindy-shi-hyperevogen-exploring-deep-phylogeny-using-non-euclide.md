---
title: "148 · HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference — Xinghua Mindy Shi"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xinghua-mindy-shi"
source_hash: "c73232711ab89dfb4e46a1a8d55a0cac3164f7c38f762dcb96ad01b6b7468aca"
sequence: 148
generator: "outreach-garden: managed"
---

# 148 · HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference

## At a glance

- **Professor:** Xinghua Mindy Shi
- **Institution:** Temple University
- **Paper:** [HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference](https://arxiv.org/pdf/2604.22997)
- **Authors:** Jason Lamanna, Erfan Mowlaei, Xinghua Shi, Sudhir Kumar, Vincenzo Carnevale
- **Year:** 2026

## Paper overview

The paper presents HyperEvoGen, a novel machine learning framework that uses hyperbolic geometry and variational autoencoders to better model protein evolution. It addresses the challenge of accurately representing evolutionary distances and reconstructing ancestral protein sequences, especially for deeply diverged proteins where traditional methods fail. HyperEvoGen learns biologically meaningful embeddings that preserve hierarchical evolutionary relationships and improves ancestral sequence reconstruction accuracy compared to conventional methods.

### Why it matters

**Research problem:** Existing methods for estimating evolutionary distances and reconstructing ancestral protein sequences struggle with deep evolutionary divergence due to saturation of sequence dissimilarity measures and inability to capture complex co-evolutionary patterns and hierarchical relationships.

**Why it matters:** Accurate evolutionary distance estimation and ancestral sequence reconstruction are fundamental for understanding protein family histories, functional diversification, and molecular evolution. Improved methods enable better phylogenetic inference and experimental resurrection of ancestral proteins, which can reveal insights into protein stability, specificity, and adaptation.

**Key contributions:**

- Introduction of a hyperbolic latent space (Poincaré ball) for protein sequence embedding to naturally represent hierarchical evolutionary relationships.
- Design of a compound loss function incorporating adversarial, covariance matching, and divergence correlation terms to capture biological constraints and evolutionary geometry.
- Development of a generative ancestral sequence reconstruction method using latent space geodesic interpolation, avoiding explicit substitution models.
- Demonstration that hyperbolic embeddings maintain a nearly linear relationship with true evolutionary distances, mitigating saturation issues of traditional metrics.
- Comprehensive benchmarking on large-scale Potts-model simulated datasets showing improved ancestral reconstruction accuracy at moderate to deep divergences compared to maximum-likelihood methods.

## About the professor

**Xinghua Mindy Shi** — Professor, Department of Computer and Information Sciences (CIS), Temple University.

Research interests: We work at the intersection of computer science, data science, and life sciences, focusing on the development of statistical and machine learning methods for biomedical research.

### Research links

- [Faculty/profile page](https://cis.temple.edu/~mindyshi)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HyperEvoGen paper, start with foundational concepts of hyperbolic geometry in machine learning to grasp why hyperbolic space is suited for modeling hierarchical evolutionary relationships. Next, study variational autoencoders as the generative modeling framework underlying HyperEvoGen. Then, review phylogenetic inference and ancestral sequence reconstruction to appreciate the biological context and evaluation targets. Finally, focus on the core concept of hyperbolic variational autoencoders as applied in this work, culminating with the authors' own talk if available.

### Hyperbolic geometry in machine learning *(prerequisite)*
This section covers the mathematical foundation of hyperbolic geometry and its application in machine learning, particularly for representing hierarchical and tree-like data structures efficiently. Understanding hyperbolic space properties is crucial for appreciating why HyperEvoGen uses a Poincaré ball latent space to embed protein sequences.

*How the paper uses it:* HyperEvoGen leverages hyperbolic geometry to naturally represent hierarchical evolutionary relationships in protein sequences.

▶ [Hyperbolic Geometry in Machine Learning - Inzamam Rahaman](https://www.youtube.com/watch?v=Fbcd31g70ps) — TT LAB · 5 years ago

### Variational autoencoders *(prerequisite)*
Variational autoencoders (VAEs) are a class of generative models that learn latent representations of data with probabilistic encodings. This section explains the VAE framework, including the evidence lower bound (ELBO), reconstruction loss, and latent variable modeling, which are foundational for understanding HyperEvoGen's architecture.

*How the paper uses it:* HyperEvoGen is implemented as a variational autoencoder with a hyperbolic latent space to generate and embed protein sequences.

▶ [Lecture 21: Variational Autoencoders](https://www.youtube.com/watch?v=LzEywGCT7-A) — Carnegie Mellon University Deep Learning · 4 years ago

### Hyperbolic variational autoencoder
This section focuses on the integration of hyperbolic geometry with variational autoencoders, explaining how embedding in hyperbolic space improves modeling of hierarchical data. It directly relates to the core methodology of HyperEvoGen, which uses a hyperbolic VAE with a compound loss function to capture evolutionary constraints.

*How the paper uses it:* HyperEvoGen's core innovation is a hyperbolic VAE embedding protein sequences into a Poincaré ball latent space.

▶ [Variational Autoencoders](https://www.youtube.com/watch?v=9zKuYvjFFS8) — Arxiv Insights · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand HyperEvoGen, start by learning the biological context of phylogenetic inference and ancestral sequence reconstruction, which explains the problem HyperEvoGen addresses. Next, build foundational knowledge of variational autoencoders as the generative model framework underlying the method. Then, grasp hyperbolic geometry's role in representing hierarchical data, followed by how hyperbolic variational autoencoders combine these ideas to embed protein sequences. This progression ensures a clear, intuitive understanding of the paper's core innovations.

### Variational autoencoders *(prerequisite)*
Variational autoencoders (VAEs) are generative models that learn to compress data into a latent space and then reconstruct it, enabling generation of new realistic samples. Learning VAEs provides the foundation for understanding HyperEvoGen's generative modeling approach.

*How the paper uses it:* HyperEvoGen is implemented as a variational autoencoder that embeds protein sequences into a latent space for generative reconstruction.

▶ [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — Deepia · 1 year ago

### Hyperbolic geometry in machine learning *(prerequisite)*
Hyperbolic geometry describes spaces with constant negative curvature, which naturally represent hierarchical and tree-like data structures more efficiently than flat Euclidean space. Understanding this geometry explains why HyperEvoGen uses a hyperbolic latent space to capture evolutionary hierarchies.

*How the paper uses it:* HyperEvoGen uses hyperbolic geometry to embed protein sequences, preserving hierarchical evolutionary relationships in the latent space.

▶ [Hyperbolic Geometry: The Mind-Bending World of Non-Euclidean Space](https://www.youtube.com/watch?v=K8qv--2l54Q) — eduvids · 4 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of HyperEvoGen's key innovations. The beginner project focuses on reproducing a core visualization of hyperbolic embeddings preserving evolutionary hierarchy. The intermediate project involves reimplementing the core hyperbolic variational autoencoder method on a simplified dataset and benchmarking ancestral sequence reconstruction accuracy against a baseline. The advanced project extends the model to incorporate uncertainty in ancestral reconstruction by sampling multiple latent geodesic points, addressing a stated limitation and opening a path for research discussion.

### Beginner — Visualize Hyperbolic Embeddings of Protein Sequences
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates or loads a small set of protein sequences and embeds them into a 2D Poincaré ball using a simple hyperbolic embedding method. Then you visualize the embeddings with matplotlib, showing how hierarchical relationships can be represented in hyperbolic space compared to Euclidean embeddings.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of using hyperbolic geometry to represent hierarchical evolutionary relationships, a foundational concept of HyperEvoGen.

**Grounded in:** Introduction of a hyperbolic latent space (Poincaré ball) for protein sequence embedding to naturally represent hierarchical evolutionary relationships.

**Tech stack:** Python 3.11, NumPy, matplotlib, scipy

**Data:** Use a small synthetic set of protein sequences or short simulated sequences representing a simple hierarchy; no real dataset required.

**Build it:**

1. Generate or collect a small set (~20) of synthetic protein sequences arranged in a simple hierarchical tree structure.
2. Implement or use a basic hyperbolic embedding method (e.g., Poincaré embeddings) to embed sequences into 2D hyperbolic space.
3. Also embed the same sequences into 2D Euclidean space using a simple method like PCA or t-SNE on sequence features.
4. Visualize both embeddings side-by-side with matplotlib, highlighting hierarchical clusters and distances.
5. Write a README explaining how hyperbolic embeddings better preserve hierarchy compared to Euclidean embeddings.

**Ships as:** A Jupyter notebook with code and plots comparing hyperbolic vs Euclidean embeddings of synthetic protein sequences, plus a README explaining the biological relevance.

**Stretch goal:** Add interactive visualization (e.g., with Plotly) to explore embedding distances and hierarchical relationships dynamically.

### Intermediate — Reimplement HyperEvoGen Core VAE and Benchmark Ancestral Reconstruction
*Effort: 2 weekends, ~20 hours*

You reimplement the core hyperbolic variational autoencoder architecture described in the paper, including the Poincaré ball latent space and compound loss terms (reconstruction, adversarial, covariance matching, divergence correlation). You train it on a small simulated protein sequence dataset (e.g., Potts model simulated or a public protein family alignment substitute) and benchmark ancestral sequence reconstruction accuracy against a simple maximum-likelihood baseline.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into code, understand the compound loss design, and reproduce key results on ancestral reconstruction accuracy, demonstrating deep comprehension of the model and evaluation.

**Grounded in:** Development of a generative ancestral sequence reconstruction method using latent space geodesic interpolation, avoiding explicit substitution models.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, matplotlib

**Data:** Use a small synthetic dataset simulated from a Potts model on a single Pfam family or a public protein multiple sequence alignment as a substitute.

**Build it:**

1. Implement a variational autoencoder with a hyperbolic latent space (Poincaré ball) in PyTorch.
2. Incorporate the compound loss function: reconstruction loss, adversarial loss (using a simple discriminator), covariance matching loss, and divergence correlation loss.
3. Simulate or obtain a small protein sequence dataset with known phylogeny (e.g., Potts model simulation or a public MSA).
4. Train the model on the dataset and embed sequences into latent space.
5. Implement ancestral sequence reconstruction by interpolating along hyperbolic geodesics between latent embeddings of observed sequences.
6. Compare reconstruction accuracy against a simple maximum-likelihood ancestral reconstruction baseline using standard metrics.
7. Plot and report results showing improved accuracy at moderate to deep divergences.

**Ships as:** A PyTorch codebase with training scripts, evaluation notebooks comparing ancestral reconstruction accuracy, and a README documenting methods and results.

**Stretch goal:** Add visualization of latent space geodesics and ancestral sequence diversity to better illustrate generative reconstruction.

### Advanced — Bayesian Sampling of Ancestral States Along Hyperbolic Geodesics
*Effort: 3+ weeks, ~60 hours*

You extend the HyperEvoGen ancestral reconstruction method by implementing a Bayesian approach that samples multiple plausible ancestral latent states along geodesic paths in the hyperbolic latent space instead of using a single midpoint. You quantify uncertainty in ancestral reconstructions and evaluate how sampling affects reconstruction accuracy and biological interpretability.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper, demonstrating your ability to innovate beyond the original method and engage with open research questions in evolutionary modeling and uncertainty quantification.

**Grounded in:** The ancestral reconstruction uses a single geodesic midpoint without modeling uncertainty or alternative evolutionary paths.

**Tech stack:** Python 3.11, PyTorch, NumPy, Pyro or another probabilistic programming library, matplotlib

**Data:** Use the same synthetic Potts model simulated dataset or a public protein family MSA substitute as in the intermediate project.

**Build it:**

1. Build on your intermediate HyperEvoGen implementation with hyperbolic latent space and ancestral reconstruction.
2. Implement a Bayesian framework (e.g., using Pyro) to sample multiple latent points along the geodesic path between observed sequence embeddings.
3. Generate multiple ancestral sequence reconstructions from these sampled latent points using the decoder.
4. Quantify uncertainty by analyzing sequence diversity and posterior probabilities of sampled ancestors.
5. Evaluate reconstruction accuracy compared to single-point geodesic midpoint reconstruction and maximum-likelihood methods.
6. Visualize uncertainty and discuss implications for biological interpretability and evolutionary inference.

**Ships as:** An extended codebase and analysis notebook demonstrating Bayesian ancestral sampling, uncertainty quantification, and comparative accuracy, with a detailed README discussing methodology and biological relevance.

**Stretch goal:** Incorporate this Bayesian ancestral reconstruction into a phylogenetic tree inference pipeline to test impact on tree topology and branch length estimation.
