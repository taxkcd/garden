---
title: "009 · NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models — Pinar Yanardag"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pinar-yanardag-html"
source_hash: "ad4cabdcdccfa3acf1240b2530c55d30726cc46db2ccdbbf5eadc9dbf408ccf3"
sequence: 9
generator: "outreach-garden: managed"
---

# 009 · NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models

## At a glance

- **Professor:** Pinar Yanardag
- **Institution:** Virginia Tech
- **Paper:** [NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models](https://doi.org/10.1109/cvpr52733.2024.02285)
- **Authors:** Yusuf Dalva, Pinar Yanardag
- **Year:** 2023

## Paper overview

This paper introduces NoiseCLR, a novel unsupervised method that discovers meaningful and disentangled editing directions in the latent space of large text-to-image diffusion models like Stable Diffusion. Unlike prior methods relying on text prompts or labeled data, NoiseCLR uses contrastive learning on a small set of unlabeled images to find semantic directions that can be combined within and across domains (e.g., faces, cats, art) for precise image editing.

### Why it matters

**Research problem:** Existing diffusion model editing methods depend heavily on text prompts or labeled data to identify semantic directions, limiting their applicability in domains where such prompts are unavailable or hard to define. Moreover, prior unsupervised methods struggle with large-scale diffusion models and often produce entangled edits or require separate models per domain.

**Why it matters:** Discovering interpretable and disentangled directions in diffusion models' latent spaces enables precise and flexible image editing, expanding the usability of these models in creative and specialized fields such as art, fashion, and medicine. It also enhances transparency and trust by demystifying the 'black-box' nature of diffusion models and helps identify potential biases.

**Key contributions:**

- First unsupervised method to discover disentangled latent directions in large-scale diffusion models like Stable Diffusion.
- Contrastive learning framework (NoiseCLR) that requires no text prompts, labeled data, or user guidance.
- Ability to discover diverse, fine-grained semantic directions across multiple domains (faces, cats, cars, artwork) using a single diffusion model.
- Capability to apply multiple directions simultaneously within and across domains without interference.
- Demonstrated competitive or superior editing quality compared to state-of-the-art diffusion-based and GAN-based methods.

## About the professor

**Pinar Yanardag** — Assistant Professor, Virginia Tech.

Research interests: graph kernels, submodular optimization, human-AI collaboration, augmented creativity, deep learning

### Research links

- [Faculty/profile page](https://website.cs.vt.edu/people/faculty/pinar-yanardag.html)
- [Google Scholar](https://scholar.google.com/citations?user=qzczdd8AAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand NoiseCLR, start with foundational knowledge on diffusion models for image generation, as NoiseCLR builds upon these generative frameworks. Next, grasp latent space disentanglement concepts to appreciate how NoiseCLR achieves interpretable and independent editing directions. Then, study the CLIP model's role in semantic understanding, which NoiseCLR leverages for evaluation and guidance. Finally, focus on the core concept of NoiseCLR itself, emphasizing the authors' own talks and advanced seminar presentations to capture the novel contrastive learning approach for unsupervised discovery of editing directions.

### Diffusion models for image generation *(prerequisite)*
Diffusion models form the generative backbone of NoiseCLR, enabling image synthesis from noise. Understanding their mechanics and training is essential to appreciate how NoiseCLR manipulates latent spaces within these models for editing.

*How the paper uses it:* NoiseCLR discovers editing directions in the latent space of large-scale diffusion models like Stable Diffusion.

▶ [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — Machine Learning at Berkeley · 3 years ago

### Latent space disentanglement *(prerequisite)*
Disentanglement in latent spaces ensures that semantic directions correspond to independent, interpretable factors of variation. This concept underpins NoiseCLR's goal of finding disentangled editing directions without supervision.

*How the paper uses it:* NoiseCLR aims to discover disentangled latent directions enabling precise and interpretable image edits.

▶ [Lec 26 Entanglement, Disentanglement Latent Space, and Beta-VAE](https://www.youtube.com/watch?v=nh55anAdRfw) — NPTEL - Indian Institute of Science, Bengaluru · 51:22 · 4 days ago

### CLIP model for semantic understanding *(prerequisite)*
CLIP provides a joint image-text embedding space that NoiseCLR uses to evaluate and guide semantic edits. Understanding CLIP's architecture and contrastive training helps in grasping how semantic similarity and disentanglement are measured.

*How the paper uses it:* NoiseCLR relies on CLIP embeddings for semantic understanding and evaluation of discovered directions.

▶ [How AI 'Understands' Images (CLIP) - Computerphile](https://www.youtube.com/watch?v=KcSXcpluDe4) — Computerphile · 18:05 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand NoiseCLR, start by learning about diffusion models for image generation, which are the foundational generative models NoiseCLR edits. Next, grasp the concept of latent space disentanglement to appreciate how interpretable and independent editing directions are discovered. Then, study contrastive learning in latent spaces, the core technique NoiseCLR uses to find semantic directions without supervision. Finally, explore the NoiseCLR paper talk for direct insights from the authors.

### Diffusion models for image generation *(prerequisite)*
Diffusion models generate images by gradually transforming noise into coherent images through a learned denoising process. Understanding this process helps you see what NoiseCLR edits and why latent directions matter in this context.

*How the paper uses it:* NoiseCLR discovers editing directions in the latent space of large text-to-image diffusion models like Stable Diffusion.

▶ [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — Machine Learning at Berkeley · 3 years ago

### Latent space disentanglement *(prerequisite)*
Latent space disentanglement means representing different semantic features independently in the model's latent space, allowing for precise and interpretable edits. This concept is key to understanding how NoiseCLR finds meaningful, disentangled editing directions.

*How the paper uses it:* NoiseCLR aims to discover disentangled latent directions that correspond to independent semantic edits in diffusion models.

▶ [Lec 26 Entanglement, Disentanglement Latent Space, and Beta-VAE](https://www.youtube.com/watch?v=nh55anAdRfw) — NPTEL - Indian Institute of Science, Bengaluru · 51:22 · 4 days ago

### Contrastive learning in latent spaces
Contrastive learning trains models to bring similar data points closer and push different ones apart in latent space, enabling unsupervised discovery of meaningful features. NoiseCLR uses this technique to learn semantic directions without labeled data or text prompts.

*How the paper uses it:* NoiseCLR employs a contrastive learning framework to discover semantic directions from unlabeled images by contrasting feature divergences.

▶ [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — Deepia · 1 year ago

## Already in your library

- [[CVPR2024] NoiseCLR - Teaser Video](https://www.youtube.com/watch?v=RA2KzZ25F5I) — also for: NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models (Pinar Yanardag)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
