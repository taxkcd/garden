---
title: "009 · NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models — Pinar Yanardag"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pinar-yanardag-html"
source_hash: "412d943b47dd02e3c39cabc093c93c53c5f48e476c3c0346a6cf681171273a6d"
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

To deeply understand NoiseCLR, start with foundational knowledge of diffusion models for image generation to grasp the architecture NoiseCLR builds upon. Next, study latent space disentanglement methods to appreciate how semantic directions can be separated for interpretable editing. Then, explore contrastive learning in latent spaces to understand the core learning framework NoiseCLR employs. Finally, watch the authors' own talk on NoiseCLR for direct insights into their novel unsupervised approach for discovering interpretable directions in diffusion models.

## Recommended videos (in order)

### Diffusion models for image generation *(prerequisite)*
This section covers the foundational architecture and principles behind diffusion models, which are the generative backbone for NoiseCLR. Understanding how diffusion models generate images and their noise prediction mechanisms is critical to grasping how NoiseCLR manipulates latent spaces for editing.

*How the paper uses it:* NoiseCLR leverages pretrained large-scale diffusion models like Stable Diffusion as the basis for discovering editing directions.

▶ [Stanford CS25: V5 I Transformers in Diffusion Models for Image Generation and Beyond](https://www.youtube.com/watch?v=vXtapCFctTI) — Stanford Online · 1 year ago

### Latent space disentanglement methods *(prerequisite)*
This section introduces methods for separating semantic factors in latent spaces, enabling interpretable and disentangled edits. Such knowledge is essential to understand the challenges NoiseCLR addresses in discovering disentangled directions without supervision.

*How the paper uses it:* NoiseCLR's key contribution is discovering disentangled latent directions in diffusion models' latent spaces.

▶ [[ICML 2024] Isometric Representation Learning for Disentangled Latent Space of Diffusion Models](https://www.youtube.com/watch?v=tNjJP6lIL7M) — Joonseok Lee · 5:38 · 2 years ago

### Contrastive learning in latent spaces
Contrastive learning is the core technique NoiseCLR uses to learn semantic directions by attracting similar edits and repelling different ones in the noise prediction space. Understanding contrastive frameworks in latent spaces clarifies how NoiseCLR achieves unsupervised disentanglement.

*How the paper uses it:* NoiseCLR employs a contrastive learning framework to discover semantic directions without labeled data or prompts.

▶ [[ICCV2021] LatentCLR: A Contrastive Learning Approach for Discovery of Interpretable Directions](https://www.youtube.com/watch?v=QWTbYaaaVO0) — CatLab · 4 years ago

### NoiseCLR authors talk *(the paper's own talk)*
This is the authors' own teaser video presenting NoiseCLR, providing direct insights into their methodology, experimental results, and the significance of their unsupervised approach for interpretable editing in diffusion models.

*How the paper uses it:* Direct source for the authors’ explanation of their novel NoiseCLR method.

▶ [[CVPR2024] NoiseCLR - Teaser Video](https://www.youtube.com/watch?v=RA2KzZ25F5I) — Yusuf Dalva · 4:09 · 2 years ago

## Already in your library

- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
