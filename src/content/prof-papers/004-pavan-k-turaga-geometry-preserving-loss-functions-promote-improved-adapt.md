---
title: "004 · Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models — Pavan K. Turaga"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pavanturaga-com"
source_hash: "526788576c277aa91d0bc8785d101f935deede4f908fb2e61336f8eb1c0e2b9c"
sequence: 4
generator: "outreach-garden: managed"
---

# 004 · Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models

## At a glance

- **Professor:** Pavan K. Turaga
- **Institution:** Arizona State University
- **Paper:** [Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models](https://arxiv.org/pdf/2604.23888)
- **Authors:** Sinjini Mitra, Constantine Kyriakakis, Shenyuan Liang, Eun Som Jeon, Rushil Anirudh, Jayaraman J. Thiagarajan, Anuj Srivastava, Pavan Turaga
- **Year:** 2026

## Paper overview

This paper proposes a new method to adapt large pre-trained generative models to new target domains without needing access to the model's internal weights or retraining the generator. By preserving geometric relationships in the latent and image spaces through a novel loss function, the method enables effective domain adaptation even with limited target data. The approach uses GAN inversion to map target images to latent codes, trains a lightweight latent sampler using a diffusion model with geometry-preserving losses, and generates adapted images by sampling from this learned latent distribution. Experiments demonstrate improved adaptation performance on out-of-domain datasets compared to existing methods.

### Why it matters

**Research problem:** Adapting large-scale blackbox generative models to new target domains is challenging due to restricted access to model weights, high computational costs of fine-tuning, and limited availability of target domain data. Existing methods often require generator fine-tuning or auxiliary networks, which are impractical or undesirable in many scenarios.

**Why it matters:** Many industry-grade generative models are only accessible via blackbox APIs due to ethical, legal, and proprietary concerns, limiting users' ability to adapt these models to specific applications. Efficient adaptation methods that do not require access to model internals are critical for practical deployment, especially under data scarcity and compute constraints.

**Key contributions:**

- Introduction of a geometry-preserving loss function that enforces manifold priors by preserving distances and tangent space orientations in latent and image spaces.
- A novel adaptation pipeline that does not require access to or fine-tuning of the source generator weights, enabling secure blackbox adaptation.
- Demonstration of robust adaptation performance with limited target domain data, outperforming baselines that lack geometric constraints or require generator updates.
- Use of a lightweight 1D diffusion model as a latent sampler to effectively learn target latent distributions.
- Compatibility with various GAN inversion methods and ability to perform controlled attribute generation and text-based latent editing.

## About the professor

**Pavan K. Turaga** — Founding Director, The GAME School and Electrical Engineering, Arizona State University.

Research interests: computer vision, machine learning, immersive technologies, health-analytics, public understanding of science, arts and performance

### Research links

- [Faculty/profile page](https://pavanturaga.com)
- [Resolved homepage](https://pavanturaga.com/)
- [Lab website](https://www.linkedin.com/company/geometric-media-lab/)
- [LinkedIn](https://www.linkedin.com/in/pavan-turaga/)
- [Social profile](https://twitter.com/pturaga1)

## Learning path

To deeply understand the paper on geometry preserving loss functions for blackbox generative model adaptation, start with foundational concepts including manifold learning and tangent space estimation, domain adaptation for generative models, GAN inversion methods, and diffusion models for generative sampling. These prerequisites build the necessary background on geometric priors, latent space modeling, and generative techniques. Finally, focus on the core concept of geometry-preserving loss functions in generative modeling, selecting a rigorous university lecture that covers loss functions and optimization, which aligns closely with the paper's novel loss design.

## Recommended videos (in order)

### Manifold learning and tangent space estimation lecture *(prerequisite)*
Understanding manifold learning and tangent space estimation is foundational for grasping the geometric priors and tangent space preservation that the paper enforces in latent and image spaces. These concepts provide the mathematical background to appreciate how geometry-preserving losses maintain manifold structure during adaptation.

*How the paper uses it:* The paper's geometry-preserving loss relies on tangent space relationships in latent and image manifolds.

▶ [noc20 ma01 lec23  Tangent space of a submanifold](https://www.youtube.com/watch?v=70l0mhysGO8) — NPTEL - Indian Institute of Science, Bengaluru · 29:48 · 6 years ago

### Domain adaptation for generative models lecture *(prerequisite)*
Domain adaptation lectures contextualize the problem of adapting pretrained generative models to new target domains, highlighting challenges such as limited data and restricted model access. This background helps understand the motivation behind blackbox adaptation methods without generator fine-tuning.

*How the paper uses it:* The paper addresses domain adaptation challenges for blackbox generative models.

▶ [Stanford CS236: Deep Generative Models I 2023 I Lecture 1 - Introduction](https://www.youtube.com/watch?v=XZ0PMRWXBEU) — Stanford Online · 57:28 · 2 years ago

### GAN inversion methods lecture *(prerequisite)*
GAN inversion methods are essential for mapping target domain images into the latent space of a pretrained generator, a critical first step in the paper's adaptation pipeline. Understanding inversion techniques clarifies how latent codes are obtained for subsequent diffusion modeling.

*How the paper uses it:* The paper uses state-of-the-art GAN inversion to embed target images into the latent space.

▶ [Stanford CS236: Deep Generative Models I 2023 I Lecture 9 - GANs](https://www.youtube.com/watch?v=3Zv-gokhLu8) — Stanford Online · 2 years ago

### Diffusion models for generative sampling lecture *(prerequisite)*
Diffusion models provide a modern approach to generative sampling, which the paper leverages as a lightweight 1D diffusion latent sampler to model the distribution of inverted latent codes. Understanding diffusion models aids in grasping how the latent sampler learns target latent distributions effectively.

*How the paper uses it:* The paper employs a 1D diffusion model as a latent sampler in the adaptation pipeline.

▶ [Stanford CS236: Deep Generative Models I 2023 I Lecture 18 - Diffusion Models for Discrete Data](https://www.youtube.com/watch?v=mCaRNnEnYwA) — Stanford Online · 1:00:03 · 2 years ago

### Geometry-preserving loss functions in generative modeling seminar
This concept covers the paper's core novel contribution: the geometry-preserving loss function that maintains manifold priors by preserving distances and tangent space orientations. A rigorous university lecture on loss functions and optimization provides the theoretical foundation to understand this loss design and its impact on adaptation performance.

*How the paper uses it:* The geometry-preserving loss function is central to the paper's improved adaptation method.

▶ [Lecture 3 | Loss Functions and Optimization](https://www.youtube.com/watch?v=h7iBpEHGVNc) — Stanford University School of Engineering · 1:14:40 · 8 years ago
