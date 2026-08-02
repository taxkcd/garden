---
title: "148 · HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference — Xinghua Mindy Shi"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xinghua-mindy-shi"
source_hash: "56383471d3177001a1a5be2cca3b7d75bdada22eda2a9182d98313563d55bf3d"
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
