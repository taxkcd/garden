---
title: "821 · Deconstructing Denoising Diffusion Models for Self-Supervised Learning — He He"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-he-he"
source_hash: "0bca765dc9715a211326f90b2d1decea0d4d84c05eceb5dd6ee9330e752d6674"
sequence: 821
generator: "outreach-garden: managed"
---

# 821 · Deconstructing Denoising Diffusion Models for Self-Supervised Learning

## At a glance

- **Professor:** He He
- **Institution:** New York University
- **Paper:** [Deconstructing Denoising Diffusion Models for Self-Supervised Learning](https://arxiv.org/pdf/2401.14404)
- **Authors:** Xinlei Chen, Zhuang Liu, Saining Xie, Kaiming He
- **Year:** 2024

## Paper overview

This paper investigates how denoising diffusion models (DDMs), originally designed for image generation, can be simplified and adapted for self-supervised representation learning. By gradually transforming a modern DDM into a classical denoising autoencoder (DAE), the authors identify which components are essential for learning good image representations without supervision. They find that adding noise in a low-dimensional latent space is critical, and that a simplified model called latent DAE (l-DAE) performs competitively with state-of-the-art methods.

### Why it matters

**Research problem:** Understanding which components of modern denoising diffusion models contribute to effective self-supervised representation learning, and whether the representation power comes from the denoising process or the diffusion process.

**Why it matters:** Self-supervised learning is crucial for learning useful representations without labeled data. Denoising diffusion models have shown impressive image generation quality, suggesting potential for representation learning, but it is unclear how to adapt them effectively for recognition tasks. Clarifying this can lead to simpler, more efficient models for self-supervised learning.

**Key contributions:**

- A systematic deconstruction of modern denoising diffusion models towards classical denoising autoencoders.
- Identification that a low-dimensional latent space for adding noise is the critical component for good self-supervised representations.
- Demonstration that a simple latent DAE (l-DAE) using patch-wise PCA tokenizer achieves competitive performance.
- Empirical evidence that multi-level noise acts as data augmentation but is not essential.
- Comparison showing l-DAE narrows the performance gap with masking-based methods like MAE.

## About the professor

**He He** — Assistant Professor, Computer Science and Data Science, New York University.

Research interests: Understanding LLMs; Evaluation and oversight; Human-AI collaboration

### Research links

- [Faculty/profile page](https://hhexiy.github.io)
- [Lab website](https://wp.nyu.edu/cilvr/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Denoising Autoencoders and Diffusion Models
**The paper assumes:** denoising autoencoders, diffusion probabilistic models, latent variable modeling, noise injection in neural networks
**Already in this field?** Skip this entirely if you already understand the principles and training of denoising autoencoders and diffusion models in machine learning.

To understand this paper's core contributions on denoising diffusion models and their simplification to denoising autoencoders, a solid grasp of diffusion-based generative models and denoising autoencoders is essential. The rigorous course option offers a deep, structured university-level treatment of diffusion models, ideal for readers seeking comprehensive theoretical and practical foundations. The fast track provides a concise, visual, and intuition-driven explainer series focused on diffusion models, suitable for readers who want a quicker but still substantive understanding of the key concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1-6, about 10.5 hours — covering diffusion fundamentals, score matching, flow matching, latent space and guidance, architectures, and model training, which provide the essential background for understanding denoising diffusion models and their simplifications.

*Why it unblocks this paper:* Stanford CME296 is a dedicated university course on diffusion and large vision models, covering foundational theory, architectures including diffusion transformers, noise mechanisms, and evaluation—directly aligned with the paper's focus on deconstructing diffusion models for representation learning.

*If you want all of it:* 14.0 hours across 8 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Diffusion Models](https://www.youtube.com/playlist?list=PLHuatpd5Fusg) — Stanley · 17 videos · 15.8h across 17 episodes

**Watch only this:** Episodes 1-5, about 4.5 hours — covering DDPM explanation, diffusion models from scratch, generative AI animation, score-based models, and principles of diffusion models to build a solid conceptual foundation.

*Why it unblocks this paper:* The 'Diffusion Models' playlist by Stanley offers a clear, visual, and intuition-first explanation of denoising diffusion probabilistic models and related concepts, making it an excellent quick background to grasp the key ideas behind diffusion and denoising processes relevant to the paper.

*If you want all of it:* 15.8 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Deconstructing Denoising Diffusion Models for Self-Supervised Learning,' start by grounding yourself in the foundational concepts of denoising diffusion models, self-supervised representation learning, denoising autoencoders, and latent space representations. These prerequisites build the necessary background on the generative modeling and learning paradigms the paper builds upon. Finally, focus on the authors' own detailed talk to grasp their novel approach, experimental insights, and the proposed latent DAE method central to their contributions.

### Denoising diffusion models *(prerequisite)*
This section covers the foundational generative model that the paper simplifies and analyzes. Understanding the principles and mathematical formulation of denoising diffusion probabilistic models is critical to appreciate how the authors deconstruct and adapt these models for self-supervised learning.

*How the paper uses it:* The paper starts from a state-of-the-art diffusion transformer and simplifies it towards classical denoising autoencoders.

▶ [Ultimate Guide to Diffusion Models | ML Coding Series | Denoising Diffusion Probabilistic Models](https://www.youtube.com/watch?v=y7J6sSO1k50) — Aleksa Gordić - The AI Epiphany · 1:28:56 · 4y ago

### Self-supervised representation learning *(prerequisite)*
This section introduces the learning paradigm the paper aims to improve. It covers how models learn useful representations from unlabeled data, which is the core motivation behind adapting diffusion models for recognition tasks.

*How the paper uses it:* The paper investigates how diffusion models can be adapted for effective self-supervised representation learning.

▶ [MedAI Session 16: Bootstrapped Self-Supervised Representation Learning in Graphs | Shantanu Thakoor](https://www.youtube.com/watch?v=OkhUCbpWxwc) — Stanford MedAI · 1:07:46 · 5y ago

### Denoising autoencoders *(prerequisite)*
Denoising autoencoders are classical models for learning robust representations by reconstructing clean data from noisy inputs. Understanding their architecture and training principles is essential to follow the paper's approach of transforming diffusion models into classical DAEs.

*How the paper uses it:* The paper systematically simplifies diffusion models towards classical denoising autoencoders.

▶ [Denoising Autoencoders](https://www.youtube.com/watch?v=NiMQU5RyP-Y) — Data and Knowledge Modeling and Analysis · 21:19 · 5y ago

### Latent space representation *(prerequisite)*
This section explains the concept of latent spaces where data is represented in a lower-dimensional form. The paper identifies the addition of noise in a low-dimensional latent space as a critical factor for learning good representations.

*How the paper uses it:* The paper finds that noise addition in a low-dimensional latent space is key to effective self-supervised learning.

▶ [UofT GenAI Course -- Lecture 23: Latent Space](https://www.youtube.com/watch?v=-ecs7CS8jP4) — Ali Bereyhi · 29:05 · 1y ago

### Latent DAE method
This section focuses on the central simplified model proposed by the authors, the latent denoising autoencoder (l-DAE), which achieves competitive performance with simpler components. Understanding this method is crucial to grasp the paper's main contributions and empirical findings.

*How the paper uses it:* The latent DAE is the simplified model the paper proposes for effective self-supervised learning.

▶ [8: Deep Learning for Natural Language – Transformers, Self-Supervised Learning](https://www.youtube.com/watch?v=v-lHsawHyaI) — MIT OpenCourseWare · 1:16:47 · 9mo ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This is the authors' own detailed talk explaining the principles behind diffusion models and their approach to deconstructing them for self-supervised learning. It provides direct insights into their methodology, experimental design, and key findings.

*How the paper uses it:* Directly hear the authors explain their novel approach and findings on simplifying diffusion models for representation learning.

▶ [The Principles of Diffusion Models - with Jesse Lai (Sony AI)](https://www.youtube.com/watch?v=wgv0Gnat0LY) — The Information Bottleneck · 55:53 · 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of self-supervised representation learning, which is the learning paradigm the paper aims to improve. Then, learn about denoising autoencoders, the classical model that the paper relates diffusion models to. Next, grasp the foundational concept of denoising diffusion models, the generative models that the paper simplifies. After that, explore latent space representations, a key insight about noise addition in low-dimensional latent space critical to the paper's findings. Finally, conclude with the paper's core contribution, the latent DAE method, which is the simplified model proposed for effective self-supervised learning.

### Self-supervised representation learning *(prerequisite)*
Self-supervised learning is a way for models to learn useful data representations without relying on labeled data. It often involves designing tasks where the model predicts parts of the input from other parts, enabling it to learn meaningful features. Understanding this paradigm is essential to appreciate how the paper adapts diffusion models for representation learning.

*How the paper uses it:* The paper aims to improve self-supervised representation learning by simplifying denoising diffusion models.

▶ [Online Seminar 28 - January 13, 2022 - Self-Supervised Learning - A High-Level Introduction](https://www.youtube.com/watch?v=fSlg-TwYpm0) — RAIS Project · 34:52 · 4y ago

### Denoising autoencoders *(prerequisite)*
Denoising autoencoders are neural networks trained to reconstruct clean inputs from their noisy versions, learning robust feature representations in the process. They consist of an encoder that compresses the input and a decoder that reconstructs it, helping the model learn to ignore noise and capture essential data structure.

*How the paper uses it:* The paper systematically transforms a modern diffusion model into a classical denoising autoencoder to identify essential components for representation learning.

▶ [Denoising Autoencoders](https://www.youtube.com/watch?v=NiMQU5RyP-Y) — Data and Knowledge Modeling and Analysis · 21:19 · 5y ago

### Denoising diffusion models *(prerequisite)*
Denoising diffusion models are generative models that learn to generate data by reversing a gradual noising process. They have achieved impressive results in image generation by learning to denoise data step-by-step, which the paper simplifies for self-supervised learning purposes.

*How the paper uses it:* The paper starts from a state-of-the-art diffusion transformer and simplifies it towards a denoising autoencoder for representation learning.

▶ [Ultimate Guide to Diffusion Models | ML Coding Series | Denoising Diffusion Probabilistic Models](https://www.youtube.com/watch?v=y7J6sSO1k50) — Aleksa Gordić - The AI Epiphany · 1:28:56 · 4y ago

### Latent space representation *(prerequisite)*
Latent space refers to a lower-dimensional representation of data where essential features are captured compactly. Adding noise in this latent space, rather than the high-dimensional input space, is a critical insight for effective denoising and representation learning.

*How the paper uses it:* The paper finds that adding noise in a low-dimensional latent space is the key factor enabling good self-supervised representations.

▶ [Latent Space Visualisation: PCA, t-SNE, UMAP | Deep Learning Animated](https://www.youtube.com/watch?v=o_cAOa5fMhE) — Deepia · 18:46 · 2y ago

## Already in your library

- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Diffusion Models | DDPM Explained](https://www.youtube.com/watch?v=H45lF4sUgiE) — also for: Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes (Julian Togelius)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Lecture 03: Denoising Diffusion Probabilistic Models 1 (Diffusion and Flow Models, Fall 2025, KAIST)](https://www.youtube.com/watch?v=qiFZQvcqTOo) — also for: DiTVC: One-Shot Voice Conversion via Diffusion Transformer with Environment and Speaking Rate Cloning (Adam Finkelstein)
- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — also for: Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings (Tolga Tasdizen)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [What Is Self-Supervised Learning and Why Care?](https://www.youtube.com/watch?v=iGJ1XSkCyU0) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Denoising Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=0V96wE7lY4w) — also for: MiLaSol: Modeling Protein Solubility by Mixing Up Multiple Protein Language Models (Lenore Cowen)
- [Lec 15. Generative Models: Representation Learning Meets Generative Modeling](https://www.youtube.com/watch?v=8zzfcYIELdo) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [MedAI #56: Fundamentals of Multimodal Representation Learning | Paul Pu Liang](https://www.youtube.com/watch?v=ybJXOtJNpNw) — also for: Global and Local Semantic Completion Learning for Vision-Language Pre-training (Liu Liu)
- [Variational Autoencoders](https://www.youtube.com/watch?v=9zKuYvjFFS8) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Deconstructing Denoising Diffusion Models for Self-Supervised Learning." Starting with a small-scale reproduction of a key mechanism using PCA tokenization, you then implement the core latent DAE method on a public dataset to compare representation quality. Finally, you extend the approach to explore efficiency improvements or modality transfer, addressing limitations noted in the paper.

### Beginner — Patch-wise PCA Tokenizer for Image Denoising Autoencoder
*Effort: a weekend, ~8 hours*

You build a simple patch-wise PCA tokenizer that converts image patches into a low-dimensional latent space and reconstructs them back, mimicking the PCA tokenizer step in the paper. You then implement a classical denoising autoencoder (DAE) that adds noise in this latent space and trains to reconstruct clean patches.

**Why it shows you understood the paper:** This project demonstrates your grasp of the critical role of low-dimensional latent space noise addition and the tokenizer simplification from the paper, showing you can reproduce a key component that enables good self-supervised representations.

**Grounded in:** Identification that a low-dimensional latent space for adding noise is the critical component for good self-supervised representations; patch-wise PCA tokenizer works well without gradient training.

**Tech stack:** Python 3.11, NumPy, scikit-learn, PyTorch

**Data:** Use CIFAR-10 dataset as a substitute for ImageNet for patch extraction and PCA computation.

**Build it:**

1. Load CIFAR-10 images and extract fixed-size patches (e.g., 8x8 pixels).
2. Compute PCA on the patches to obtain a low-dimensional latent representation.
3. Implement a function to encode patches into latent vectors and decode back to image patches.
4. Add Gaussian noise to latent vectors and train a simple denoising autoencoder neural network to reconstruct clean latent vectors.
5. Evaluate reconstruction quality visually and quantitatively (e.g., MSE).

**Ships as:** A GitHub repo with code for PCA tokenizer, latent space noise addition, a simple DAE training script, and README explaining the connection to the paper's tokenizer simplification and latent noise importance.

**Stretch goal:** Add linear evaluation of learned latent representations by training a simple classifier on CIFAR-10 labels to measure representation quality.

### Intermediate — Latent DAE Representation Learning on CIFAR-10
*Effort: 2 weekends, ~20 hours*

You implement the latent DAE (l-DAE) method described in the paper, including patch-wise PCA tokenizer, noise addition in latent space, and a transformer-based denoising autoencoder model. You train this model on CIFAR-10 and evaluate the learned representations using linear probe accuracy, comparing against a baseline DAE operating in image space.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method from scratch on a smaller dataset, reproduce the key evaluation metric (linear probe accuracy), and understand the impact of latent space noise and tokenizer design on representation quality.

**Grounded in:** Demonstration that a simple latent DAE (l-DAE) using patch-wise PCA tokenizer achieves competitive performance; linear probe accuracy as the evaluation metric.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Torchvision

**Data:** CIFAR-10 dataset as a smaller substitute for ImageNet for training and evaluation.

**Build it:**

1. Implement patch-wise PCA tokenizer and inverse transform for CIFAR-10 images.
2. Build a transformer-based denoising autoencoder model that operates on latent PCA tokens.
3. Add noise to latent tokens according to a noise schedule and train the model to reconstruct clean latent tokens.
4. Train a linear classifier on frozen learned representations to evaluate linear probe accuracy on CIFAR-10 test set.
5. Compare results with a baseline DAE trained directly on image pixels without latent PCA tokenizer.

**Ships as:** A GitHub repo with full latent DAE implementation, training scripts, linear probe evaluation, and README discussing results and comparison to the paper's findings.

**Stretch goal:** Experiment with different latent space dimensionalities and noise schedules to analyze their effect on representation quality.

### Advanced — Efficient Latent DAE Training and Modality Transfer
*Effort: 3+ weeks*

You extend the latent DAE approach by implementing an efficient training strategy that reduces computation, such as patch masking or selective noise addition, addressing the paper's limitation of lower training efficiency compared to masking-based methods. Alternatively, you adapt the latent DAE method to a new modality like audio or text embeddings, exploring the role of latent space noise and tokenizer design beyond images.

**Why it shows you understood the paper:** This project tackles a stated limitation or future direction from the paper, demonstrating deep comprehension of the method and creativity in improving or generalizing it. It also shows capability to conduct meaningful experimental research beyond replication.

**Grounded in:** Limitations: Training efficiency of l-DAE is lower than MAE; Future directions: Exploration of more efficient training strategies for l-DAE and investigation of latent space design in other domains beyond images.

**Tech stack:** Python 3.11, PyTorch, Librosa (for audio) or HuggingFace Transformers (for text), scikit-learn

**Data:** Use a publicly available dataset appropriate to the chosen modality, e.g., Speech Commands dataset for audio or a text corpus like WikiText-2 for language.

**Build it:**

1. Choose modality (audio or text) and prepare dataset with patch or segment extraction.
2. Design or adapt a tokenizer to produce a low-dimensional latent representation (e.g., PCA on audio spectrogram patches or embedding projection for text).
3. Implement latent DAE training with noise addition in latent space and reconstruction objective.
4. Incorporate an efficient training strategy such as random patch masking or selective noise to reduce computation.
5. Evaluate learned representations on a downstream task (e.g., audio classification or text classification) using linear probes or fine-tuning.
6. Analyze results and compare efficiency and accuracy trade-offs with baseline latent DAE training.

**Ships as:** A comprehensive GitHub repo with code for modality-specific latent DAE, efficient training modifications, evaluation scripts, and detailed README discussing methodology, results, and relation to the paper's limitations and future directions.

**Stretch goal:** Explore multi-level noise schedules or hybrid latent-image space models to further improve representation quality and efficiency.
