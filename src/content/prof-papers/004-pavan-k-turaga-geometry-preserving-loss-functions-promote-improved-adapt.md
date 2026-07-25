---
title: "004 · Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models — Pavan K. Turaga"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pavanturaga-com"
source_hash: "40c6c248ecddd13bedea7ae83ec57dfce5e42ecad866e5d39e90c8e3a35c290b"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on geometry preserving loss functions for blackbox generative model adaptation, start by grounding yourself in the key prerequisite topics: GAN inversion methods and diffusion models for latent sampling, as these are critical technical components of the approach. Next, study the geometric priors and geometry preserving loss functions that form the novel theoretical foundation of the paper. Finally, focus on the core concept of blackbox generative model adaptation, which ties these elements together in the proposed pipeline. This progression ensures a solid grasp of both the technical building blocks and the paper's innovative contributions.

### Generative adversarial networks inversion *(prerequisite)*
GAN inversion is essential to map target domain images into the latent space of the pre-trained generator, enabling adaptation without modifying the generator weights. Understanding state-of-the-art inversion techniques and their limitations provides insight into the first stage of the proposed pipeline and the challenges faced with far out-of-domain images.

*How the paper uses it:* The paper relies on GAN inversion to embed target images into the latent space for subsequent latent distribution modeling.

▶ [Revisiting Latent Space of GAN Inversion for Robust Real Image Editing](https://www.youtube.com/watch?v=36hLx1CtKr4) — ComputerVisionFoundation Videos · 2 years ago

### Diffusion models latent sampling *(prerequisite)*
Diffusion models are used in the paper as a lightweight latent sampler to learn the distribution of inverted latent codes. Understanding how diffusion models operate in latent spaces and their sampling mechanisms is crucial to appreciate the second stage of the pipeline and the efficiency gains achieved.

*How the paper uses it:* The paper employs a 1D diffusion model to sample adapted latent codes, enabling effective domain adaptation without generator fine-tuning.

▶ [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 4 - Latent Space & Guidance](https://www.youtube.com/watch?v=WUUq6TVAu8U) — Stanford Online · 1:40:58 · 2 months ago

### Geometry preserving loss functions *(prerequisite)*
The novel geometry preserving loss function enforces manifold priors by preserving distances and tangent space orientations between latent and image spaces. Familiarity with geometric concepts such as manifolds, tangent spaces, and their role in learning is necessary to understand the theoretical innovation and its impact on adaptation performance.

*How the paper uses it:* The geometry preserving loss is the key contribution that improves adaptation by maintaining geometric relationships during latent distribution learning.

▶ [Riemannian manifolds, kernels and learning](https://www.youtube.com/watch?v=MtZV82LCNHc) — Microsoft Research · 56:33 · 9 years ago

### Blackbox generative model adaptation
This concept covers methods to adapt pretrained generative models without access to internal weights, which is the central challenge addressed by the paper. Understanding existing blackbox adaptation techniques and their limitations contextualizes the novelty and practical significance of the proposed pipeline.

*How the paper uses it:* The paper proposes a secure and efficient blackbox adaptation pipeline that does not require generator weight access or fine-tuning.

▶ [Auxiliary Task-Guided CycleGAN for Black-Box Model Domain Adaptation](https://www.youtube.com/watch?v=ruSyh2ZXpjM) — ComputerVisionFoundation Videos · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to adapting blackbox generative models, start by learning about GAN inversion, which maps real images into the latent space of pretrained generators. Next, grasp diffusion models used for latent sampling to model distributions effectively. Then, study geometry-preserving loss functions that enforce geometric structure during adaptation. Finally, explore the concept of blackbox generative model adaptation, which ties these components together to adapt models without accessing internal weights.

### Generative adversarial networks inversion *(prerequisite)*
GAN inversion is the process of finding a latent code in a pretrained GAN's latent space that reconstructs a given real image. This step is crucial for adapting generative models to new domains by enabling manipulation in the latent space rather than retraining the generator.

*How the paper uses it:* The paper uses state-of-the-art GAN inversion methods to map target domain images into the latent space of the source generator as the first step in adaptation.

▶ [Revisiting Latent Space of GAN Inversion for Robust Real Image Editing](https://www.youtube.com/watch?v=36hLx1CtKr4) — ComputerVisionFoundation Videos · 2 years ago

### Diffusion models latent sampling *(prerequisite)*
Diffusion models are generative models that learn to gradually denoise data starting from pure noise, effectively modeling complex distributions. When applied to latent spaces, they can sample new latent codes that follow the target domain distribution, enabling generation of adapted images.

*How the paper uses it:* The paper trains a lightweight 1D diffusion model as a latent sampler to model the distribution of inverted latents from the target domain.

▶ [Sampling Diffusion Models in the Era of Generative AI](https://www.youtube.com/watch?v=xUwxZj_2d2s) — C3 Digital Transformation Institute · 2 years ago

### Geometry preserving loss functions *(prerequisite)*
Geometry-preserving loss functions enforce that geometric relationships such as distances and tangent space orientations between points are maintained during transformations. This helps preserve the manifold structure of data, leading to more meaningful and stable adaptations.

*How the paper uses it:* The novel geometry-preserving loss introduced in the paper maintains pairwise distances and tangent space relationships between latent and image spaces, improving adaptation quality.

▶ [Riemannian manifolds, kernels and learning](https://www.youtube.com/watch?v=MtZV82LCNHc) — Microsoft Research · 56:33 · 9 years ago
