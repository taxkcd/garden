---
title: "004 · Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models — Pavan K. Turaga"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pavanturaga-com"
source_hash: "7b401c9055553ab5cea762b26dc004f517f66023f698cb90fdfca764296f78f0"
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

To understand the paper on geometry preserving loss functions for blackbox generative model adaptation, start by learning foundational concepts including Generative Adversarial Networks (GANs), GAN inversion techniques, diffusion models for generative modeling, and manifold geometry with tangent spaces in machine learning. These prerequisites build the necessary background on generative models, latent space manipulation, and geometric concepts. Finally, focus on the core concept of geometry-preserving loss functions for domain adaptation, which is central to the paper's novel method.

## Recommended videos (in order)

### Generative Adversarial Networks (GANs) *(prerequisite)*
Understanding GANs is essential as the paper adapts pre-trained GAN generators. This video from Computerphile provides a clear and accessible explanation of how GANs work by having neural networks compete to generate realistic data.

*How the paper uses it:* The paper adapts large pre-trained GAN generators without modifying their weights.

▶ [Generative Adversarial Networks (GANs) - Computerphile](https://www.youtube.com/watch?v=Sw9r8CL98N0) — Computerphile · 21:21 · 8 years ago

### GAN Inversion *(prerequisite)*
GAN inversion maps images back into the latent space of a GAN, a key step in the adaptation pipeline. The video 'PR-293: In-Domain GAN Inversion for Real Image Editing' provides a focused overview of GAN inversion techniques relevant to real image editing and latent code recovery.

*How the paper uses it:* The method uses state-of-the-art GAN inversion to embed target domain images into the latent space of the source generator.

▶ [PR-293: In-Domain GAN Inversion for Real Image Editing](https://www.youtube.com/watch?v=TVSJO9uNq7g) — 만끽 MaanGeek · 5 years ago

### Diffusion Models for Generative Modeling *(prerequisite)*
Diffusion models are a powerful class of generative models used here as a lightweight latent sampler. The video 'What are Diffusion Models?' by Ari Seff offers a concise tutorial on the basics and expressiveness of diffusion models, suitable for understanding their role in generative modeling.

*How the paper uses it:* The paper employs a 1D diffusion model to learn the distribution of inverted latent codes for adaptation.

▶ [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — Ari Seff · 4 years ago

### Manifold Geometry and Tangent Spaces in Machine Learning *(prerequisite)*
Geometry-preserving losses rely on manifold and tangent space concepts to maintain relationships between latent and image spaces. The video 'What is a manifold?' by GeometryForPhysicists provides a visual and intuitive introduction to manifolds, which is foundational for understanding the geometric priors used in the paper.

*How the paper uses it:* The geometry-preserving loss enforces manifold priors by preserving distances and tangent space orientations.

▶ [What is a manifold?](https://www.youtube.com/watch?v=zIjBArHTPZ4) — GeometryForPhysicists · 3:51 · 10 years ago

### Geometry-Preserving Loss Functions for Domain Adaptation
This core concept involves loss functions that maintain geometric relationships during adaptation, enabling blackbox model adaptation without fine-tuning the generator. While there are no videos specifically on geometry-preserving losses for domain adaptation, the video 'What is a Loss Function? Understanding How AI Models Learn' by IBM Technology provides a solid foundation on loss functions in AI, which helps in grasping the role and importance of the novel loss introduced in the paper.

*How the paper uses it:* The novel geometry-preserving loss function is central to the paper's method for adapting blackbox generative models effectively.

▶ [What is a Loss Function? Understanding How AI Models Learn](https://www.youtube.com/watch?v=v_ueBW_5dLg) — IBM Technology · 1 year ago
