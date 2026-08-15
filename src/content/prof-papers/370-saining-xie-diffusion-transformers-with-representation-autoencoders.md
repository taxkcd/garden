---
title: "370 · Diffusion Transformers with Representation Autoencoders — Saining Xie"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-saining-xie"
source_hash: "055ee3548eeb1123a0ce6c18f29de8f4c059c16c5fe498a87a9c70e0d90f3bb7"
sequence: 370
generator: "outreach-garden: managed"
---

# 370 · Diffusion Transformers with Representation Autoencoders

## At a glance

- **Professor:** Saining Xie
- **Institution:** New York University
- **Paper:** [Diffusion Transformers with Representation Autoencoders](https://arxiv.org/abs/2510.11690)
- **Authors:** Boyang Zheng, Nanye Ma, Shengbang Tong, Saining Xie
- **Year:** 2025

## Paper overview

This paper introduces Representation Autoencoders (RAEs), which replace traditional variational autoencoders (VAEs) in diffusion transformer models with pretrained representation encoders paired with trained decoders. This approach yields semantically rich, high-dimensional latent spaces that improve image generation quality and training efficiency on ImageNet. The authors also propose architectural and training modifications to enable diffusion transformers to effectively operate in these high-dimensional latent spaces, achieving state-of-the-art results.

### Why it matters

**Research problem:** Current diffusion transformer models rely on VAEs for latent space encoding, which have limitations such as low-dimensional latent spaces, outdated architectures, and weak representations that hinder generative quality and efficiency.

**Why it matters:** Improving latent representations in diffusion models is crucial for advancing image generation quality, training speed, and computational efficiency, which are central challenges in generative AI.

**Key contributions:**

- Introduction of Representation Autoencoders (RAEs) that use pretrained representation encoders instead of VAEs for latent diffusion modeling.
- Demonstration that RAEs produce semantically rich, high-dimensional latent spaces enabling better reconstruction and generation quality.
- Theoretical and empirical analysis showing diffusion transformers require width at least equal to latent token dimension for effective training.
- Proposal of dimension-dependent noise schedule shifts and noise-augmented decoder training to stabilize diffusion training on RAEs.
- Development of DiTDH architecture with a wide, shallow diffusion head to efficiently scale model width without quadratic compute increase.

## About the professor

**Saining Xie** — Co-founder and Chief Science Officer (CSO), New York University.

Research interests: Most human and animal knowledge arises from sensory experiences and their interactions with the environment. I believe that achieving human-like intelligence requires moving beyond language-only systems toward world models that learn directly from continuous, real-world sensory input---systems capable of understanding, creating, reasoning, planning, and developing commonsense about the physical world.

### Research links

- [Faculty/profile page](https://www.sainingxie.com)
- [Resolved homepage](https://www.sainingxie.com/)
- [Google Scholar](https://scholar.google.com/citations?user=Y2GtJkAAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** latent variable generative models
**The paper assumes:** probabilistic latent variable models, variational autoencoders, latent space representations in generative modeling
**Already in this field?** Skip this entirely if you already understand the theory and practice of latent variable generative models including VAEs and their role in diffusion models.

This background playlist selection focuses on latent variable generative models, which are foundational to understanding the innovations in the paper on Diffusion Transformers with Representation Autoencoders. The rigorous course option offers a deep, structured university-level treatment of deep generative models including VAEs and diffusion models, ideal for readers seeking comprehensive mastery. The fast track provides a concise, visual introduction to generative models and latent variables, suitable for readers who want a quick but solid conceptual grasp before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS236: Deep Generative Models I 2023 I Stefano Ermon](https://www.youtube.com/playlist?list=PLoROMvodv4rPOWA-omMM6STXaWW4FvJT8) — Stanford Online · 18 videos · 23.6h across 18 episodes

**Watch only this:** Lectures 1-6 and 9-11, about 9.5 hours — covering introduction, background, VAEs in depth, and energy-based models which underpin diffusion approaches.

*Why it unblocks this paper:* Stanford CS236: Deep Generative Models I 2023 by Stefano Ermon is a top-tier university course that thoroughly covers latent variable models, VAEs, and diffusion models, directly relevant to the paper's core innovations and theoretical foundations.

*If you want all of it:* All 18 lectures, about 23.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Generative models](https://www.youtube.com/playlist?list=PLqTFBD-cpDV-p2JIjjrlM8nPOPoMb0Vwo) — erwan scornet · 12 videos · 1.0h across 12 episodes

**Watch only this:** Episodes 7.1 to 7.9, about 36 minutes — covering latent variables, EM algorithm, VAE framework, optimization, and discussion.

*Why it unblocks this paper:* The 'Generative models' series by erwan scornet offers a concise, clear, and well-structured introduction to latent variable generative models and VAEs, providing quick conceptual grounding relevant to the paper's use of Representation Autoencoders.

*If you want all of it:* All 12 episodes, about 1 hour.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Diffusion Transformers with Representation Autoencoders," start by building a foundation on diffusion models' latent spaces and vision transformers for generative modeling, as these are key technical prerequisites. Next, grasp the limitations of variational autoencoders and noise scheduling in diffusion training to appreciate the motivation and training innovations in the paper. Finally, focus on the paper's core concept of Representation Autoencoders and conclude with the authors' own detailed talk explaining their novel approach and empirical findings.

### Diffusion models latent spaces *(prerequisite)*
Understanding latent space encoding in diffusion models is crucial because the paper replaces traditional VAEs with pretrained representation encoders to form richer, high-dimensional latent spaces. This section covers the theory and practice of latent spaces in generative diffusion models, providing the necessary background to appreciate the paper's innovation.

*How the paper uses it:* The paper improves latent representations in diffusion models by using pretrained encoders to form semantically rich latent spaces.

▶ [Lec 47 Diffusion Models](https://www.youtube.com/watch?v=svfpNQGB1L4) — NPTEL - Indian Institute of Science, Bengaluru · 5mo ago

### Vision transformers for generative modeling *(prerequisite)*
Vision transformers (ViTs) adapted for generative modeling form the backbone of diffusion transformers used in the paper. Understanding ViT architectures and their application to image generation is essential to grasp the architectural modifications proposed by the authors.

*How the paper uses it:* The paper adapts diffusion transformers based on ViT architectures to operate effectively in high-dimensional latent spaces.

▶ [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — Code With Aarohi · 3y ago

### Variational autoencoders limitations *(prerequisite)*
This section explains the limitations of VAEs, which motivates the paper's replacement of VAEs with Representation Autoencoders. Understanding these limitations clarifies why richer latent representations and pretrained encoders are beneficial for diffusion models.

*How the paper uses it:* The paper addresses the shortcomings of VAEs by introducing RAEs with pretrained encoders for better latent representations.

▶ [Variational Autoencoders - EXPLAINED!](https://www.youtube.com/watch?v=fcvYpzHmhvA) — CodeEmporium · 7y ago

### Noise scheduling in diffusion training *(prerequisite)*
Noise scheduling is a key training modification to stabilize diffusion transformers on high-dimensional latent spaces, as proposed in the paper. This section covers the theory and practical considerations of noise schedules in diffusion models.

*How the paper uses it:* The paper proposes dimension-dependent noise schedule shifts and noise-augmented decoder training to stabilize diffusion training on RAEs.

▶ [Deep Learning Foundations: Arash Vahdat's talk on "Denoising Diffusion Models"](https://www.youtube.com/watch?v=2J_Yh4JHzyQ) — Soheil Feizi · 1:17:46 · 3y ago

### Representation Autoencoders
Representation Autoencoders (RAEs) are the core innovation of the paper, replacing traditional VAEs with pretrained representation encoders and trained decoders. This section provides an in-depth understanding of autoencoders and representation learning relevant to the paper's method.

*How the paper uses it:* The paper introduces RAEs as a novel latent encoding method that improves reconstruction and generation quality in diffusion transformers.

▶ [Lecture 19 | Representations and Autoencoders](https://www.youtube.com/watch?v=gs8vT4pdbUs) — Carnegie Mellon University Deep Learning · 6y ago

### Paper authors talk *(the paper's own talk)*
The authors' own recorded talk provides direct insights into their motivations, methodology, architectural innovations, and empirical results. This is the most authoritative and detailed resource to understand the paper's contributions and implications.

*How the paper uses it:* This talk is given by the paper's authors explaining their approach and findings on diffusion transformers with RAEs.

▶ [Diffusion Transformers with Representation Autoencoders (Oct 2025)](https://www.youtube.com/watch?v=hAgXU1PZv90) — AI Paper Slop · 9mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper, starting with the basics of latent spaces in diffusion models and the limitations of variational autoencoders (VAEs). It then covers vision transformers for generative modeling and noise scheduling in diffusion training, before explaining representation autoencoders (RAEs), the paper's core innovation. The sequence builds intuition progressively, enabling a clear grasp of how RAEs improve diffusion transformers for image generation.

### Diffusion models latent spaces *(prerequisite)*
Latent spaces are compressed representations of data that generative models use to efficiently learn and generate new samples. Understanding how diffusion models operate in latent spaces helps grasp why richer, higher-dimensional latents can improve generation quality.

*How the paper uses it:* The paper replaces traditional low-dimensional latent spaces from VAEs with semantically rich, high-dimensional latent spaces from pretrained encoders.

▶ [What is Latent Space in Generative AI? Simplest Explanation Ever!](https://www.youtube.com/watch?v=llSt93BoKkk) — SkillMove · 9mo ago

### Variational autoencoders limitations *(prerequisite)*
Variational autoencoders (VAEs) are popular generative models that encode data into a latent space but often produce low-dimensional, less expressive representations. Knowing their limitations clarifies why the paper proposes replacing VAEs with Representation Autoencoders.

*How the paper uses it:* The paper highlights that VAEs' outdated architectures and weak latent representations limit diffusion transformer performance.

▶ [Variational Autoencoders - EXPLAINED!](https://www.youtube.com/watch?v=fcvYpzHmhvA) — CodeEmporium · 7y ago

### Vision transformers for generative modeling *(prerequisite)*
Vision transformers (ViTs) apply transformer architectures to image patches, enabling powerful modeling of image data. Understanding ViTs is key to grasping how diffusion transformers work and how the paper adapts them for high-dimensional latent spaces.

*How the paper uses it:* The paper uses ViT-based decoders and scales diffusion transformer width to latent token dimensions for effective training.

▶ [Vision Transformer](https://www.youtube.com/watch?v=vJF3TBI8esQ) — AGI Lambda · 5:05 · 1y ago

### Noise scheduling in diffusion training *(prerequisite)*
Noise scheduling controls how noise is added and removed during diffusion model training, which is critical for stable and effective learning. Understanding this helps explain the paper's dimension-dependent noise schedule shifts and noise-augmented decoder training.

*How the paper uses it:* The paper proposes dimension-dependent noise schedules and noise augmentation to stabilize diffusion training on high-dimensional RAE latents.

▶ [Common Diffusion Noise Schedules and Sample Steps are Flawed](https://www.youtube.com/watch?v=ncG-qpjnHvI) — Peter Lin Research · 9:05 · 2y ago

### Representation Autoencoders
Representation Autoencoders (RAEs) combine frozen pretrained encoders with lightweight trained decoders to create semantically rich, high-dimensional latent spaces. This approach improves reconstruction and generation quality compared to traditional VAEs.

*How the paper uses it:* RAEs are the paper's core contribution, replacing VAEs to enable better latent diffusion modeling and state-of-the-art image generation.

▶ [What are Autoencoders?](https://www.youtube.com/watch?v=qiUEgSCyY5o) — IBM Technology · 4y ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insights into their motivations, methods, and results, complementing foundational knowledge with expert perspectives on the novel approach.

*How the paper uses it:* The authors explain their innovations in RAEs and diffusion transformers, highlighting key contributions and empirical results.

▶ [Diffusion Transformers with Representation Autoencoders (Paper Walkthrough)](https://www.youtube.com/watch?v=-SpYsfLxWP4) — Ribbit Ribbit - Discover Research The Fun Way · 9mo ago

## Already in your library

- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Latent Diffusion Models](https://www.youtube.com/watch?v=wuwByIh5kDU) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [Vision Transformer Quick Guide - Theory and Code in (almost) 15 min](https://www.youtube.com/watch?v=j3VNqtJUoz0) — also for: Generating Higher-Quality Anti-Forensics DeepFakes with Adversarial Sharpening Mask (Pradeep K. Atrey)
- [Variational Autoencoders](https://www.youtube.com/watch?v=9zKuYvjFFS8) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the core ideas of the paper "Diffusion Transformers with Representation Autoencoders." Starting with a beginner-level reproduction of the Representation Autoencoder (RAE) concept on a small scale, you then move to an intermediate project implementing a diffusion transformer on RAE latents using the authors' released code. Finally, the advanced project extends the method to address a stated limitation by exploring noise-augmented decoder training to improve generalization, demonstrating deeper engagement with the paper's contributions and challenges.

### Beginner — Small-scale Representation Autoencoder with Pretrained Encoder
*Effort: a weekend, ~8 hours*

You build a simplified Representation Autoencoder (RAE) using a frozen pretrained vision transformer encoder (e.g., a small MAE or DINOv2 model available publicly) combined with a lightweight ViT-based decoder trained on a small subset of CIFAR-10 images. The goal is to reproduce the key idea of replacing a VAE encoder with a frozen pretrained representation encoder and training only the decoder to reconstruct images.

**Why it shows you understood the paper:** This project demonstrates you understand the core architectural innovation of RAEs and the rationale for using pretrained encoders to obtain semantically rich latent spaces, a key contribution of the paper.

**Grounded in:** Introduction of Representation Autoencoders (RAEs) that use pretrained representation encoders instead of VAEs for latent diffusion modeling.

**Tech stack:** Python 3.11, PyTorch, timm (for pretrained models), Jupyter Notebook

**Data:** Use CIFAR-10 dataset as a small-scale substitute for ImageNet to train the decoder on frozen pretrained encoder outputs.

**Build it:**

1. Load a pretrained vision transformer encoder (e.g., MAE or DINOv2) and freeze its weights.
2. Extract latent representations (tokens) from CIFAR-10 images using the frozen encoder.
3. Implement a lightweight ViT-based decoder architecture to reconstruct images from these latents.
4. Train the decoder on the CIFAR-10 training set latents to minimize reconstruction loss.
5. Evaluate reconstruction quality visually and quantitatively (e.g., MSE or PSNR).

**Ships as:** A GitHub repo with code and a README showing the RAE architecture, training procedure, and reconstruction results on CIFAR-10.

**Stretch goal:** Add linear probing on the frozen encoder latents to demonstrate semantic representation quality.

### Intermediate — Diffusion Transformer on RAE Latents with Authors' Guided Diffusion Code
*Effort: 2 weekends, ~20 hours*

You set up and run the authors' diffusion transformer model on RAE latents using their released guided-diffusion codebase, training on a smaller subset of ImageNet or a public dataset like CIFAR-10. You compare the generative quality (FID) of diffusion transformers trained on RAE latents versus a baseline VAE latent space, reproducing the paper's core empirical comparison.

**Why it shows you understood the paper:** This project shows you can work with the authors' code, understand how RAEs integrate with diffusion transformers, and replicate key results comparing latent representations and generative performance.

**Grounded in:** RAEs outperform SD-VAE in reconstruction fidelity (rFID) and representation quality (linear probing accuracy) while being more computationally efficient.

**Tech stack:** Python 3.11, PyTorch, guided-diffusion codebase from https://github.com/openai/guided-diffusion, ImageNet or CIFAR-10 dataset

**Data:** Use a small subset of ImageNet or CIFAR-10 dataset as a proxy for ImageNet 256×256 training.

**Build it:**

1. Clone and set up the guided-diffusion repository from the authors' artifact.
2. Prepare RAE latent representations by running a pretrained frozen encoder and training a decoder on your dataset.
3. Train the diffusion transformer model on the RAE latents using the guided-diffusion codebase with dimension-dependent noise scheduling.
4. Train a baseline diffusion transformer on VAE latents for comparison.
5. Evaluate and compare FID scores and reconstruction metrics between RAE and VAE latent models.

**Verified links from the paper:**

- <https://github.com/openai/guided-diffusion> — released by the paper's authors

**Ships as:** A GitHub repo with scripts, training logs, and a report comparing diffusion transformer performance on RAE versus VAE latents.

**Stretch goal:** Implement noise-augmented decoder training to improve generative FID as per the paper's method.

### Advanced — Noise-Augmented Decoder Training to Improve RAE Generalization
*Effort: 3+ weeks*

You extend the RAE framework by implementing noise-augmented decoder training to improve decoder robustness to noisy latents produced during diffusion sampling. You experiment with different noise schedules and augmentation strengths, measuring their impact on generative FID and reconstruction fidelity, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper, showing you can critically engage with the method, implement advanced training schemes, and analyze trade-offs between reconstruction and generation quality.

**Grounded in:** RAE decoders trained on clean latents require noise augmentation to generalize to noisy diffusion outputs, indicating sensitivity to latent distribution shifts.

**Tech stack:** Python 3.11, PyTorch, guided-diffusion codebase from https://github.com/openai/guided-diffusion, ImageNet or CIFAR-10 dataset

**Data:** Use ImageNet or CIFAR-10 dataset as in intermediate project; no new dataset required.

**Build it:**

1. Implement noise augmentation during decoder training by adding controlled noise to latent inputs as described in the paper.
2. Train the decoder with noise augmentation on RAE latents.
3. Train diffusion transformers on these noise-augmented RAEs latents.
4. Evaluate generative FID and reconstruction rFID metrics, comparing to clean-latent training.
5. Analyze the trade-off between improved generative quality and reconstruction fidelity.
6. Document findings and suggest further improvements or alternative noise schedules.

**Verified links from the paper:**

- <https://github.com/openai/guided-diffusion> — released by the paper's authors

**Ships as:** A GitHub repo with code, training scripts, and a detailed report analyzing noise-augmented decoder training effects on RAE diffusion models.

**Stretch goal:** Explore alternative pretrained encoders or decoder architectures to further improve robustness and generation quality.

_The authors released code only for guided diffusion (https://github.com/openai/guided-diffusion); no direct RAE code is provided, so RAE implementation must be reimplemented from paper descriptions or adapted from pretrained encoders available publicly._
