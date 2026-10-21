---
title: "896 · AV-Link: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation — Vicente Ordonez"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vicente-ordonez"
source_hash: "6e1bf0c4ab5115972fb38640ae50e8e82c6c35eb9df4620fccbebf6a986e6ec2"
sequence: 896
generator: "outreach-garden: managed"
---

# 896 · AV-Link: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation

## At a glance

- **Professor:** Vicente Ordonez
- **Institution:** Rice University
- **Paper:** [AV-Link: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation](https://arxiv.org/pdf/2412.15191)
- **Authors:** Moayed Haji-Ali, Alper Canberk, Willi Menapace, Kwot Sin Lee, Aliaksandr Siarohin, Ivan Skorokhodov, Vicente Ordonez, Sergey Tulyakov
- **Year:** 2025

## Paper overview

This paper introduces AV-Link, a unified framework that generates audio from video and video from audio with precise temporal alignment. It leverages activations from pretrained frozen diffusion models for audio and video, connected via a novel Fusion Block that enables bidirectional information exchange. This approach outperforms existing methods in synchronizing audio and video content, improving both semantic and temporal alignment.

### Why it matters

**Research problem:** Generating audio from silent videos (Video-to-Audio, V2A) and generating videos from audio (Audio-to-Video, A2V) with precise semantic and temporal alignment is challenging. Existing methods rely on separate models and pretrained feature extractors that lack precise temporal synchronization, limiting unified cross-modal generation.

**Why it matters:** Accurate cross-modal generation is crucial for applications like movie production, virtual reality, and multimedia content creation, where synchronized audio and video enhance user experience. A unified, efficient framework simplifies deployment and improves quality across modalities.

**Key contributions:**

- A unified framework (AV-Link) for both Video-to-Audio and Audio-to-Video generation using pretrained frozen diffusion models.
- Introduction of a Fusion Block enabling bidirectional information exchange through temporally-aligned self-attention and symmetric feature reinjection.
- Use of temporally-aligned Rotary Position Embeddings to achieve precise temporal synchronization between audio and video features.
- Demonstration that activations from frozen diffusion models serve as superior conditioning signals compared to specialized pretrained feature extractors.
- Extensive evaluations showing substantial improvements in temporal alignment and generation quality over state-of-the-art baselines.

## About the professor

**Vicente Ordonez** — Professor of Computer Science, Computer Science, Rice University.

Research interests: Computer Vision, Machine Learning, Natural Language Processing

### Research links

- [Faculty/profile page](https://profiles.rice.edu/faculty/vicente-ordonez-roman)
- [Professor website](https://www.vicenteordonez.com/)
- [Resolved homepage](https://www.cs.rice.edu/~vo9/)
- [Lab website](https://www.vislang.ai/)
- [Google Scholar](https://scholar.google.com/citations?user=TtA_j4YAAAAJ&hl=en&oi=ao)
- [LinkedIn](https://www.linkedin.com/in/vicenteordonez/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** diffusion probabilistic models
**The paper assumes:** diffusion probabilistic models, generative modeling, and flow matching sampling
**Already in this field?** Skip this entirely if you already understand the fundamentals of diffusion probabilistic models and their use in generative machine learning.

This background focuses on diffusion probabilistic models, which are central to understanding AV-Link's use of pretrained frozen diffusion models for audio and video generation and their temporal alignment. The rigorous course option offers a deep, structured academic treatment of diffusion and flow matching models, ideal for thorough comprehension. The fast track provides a concise, intuition-driven series that covers the core principles efficiently for readers with limited time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1-3 (Diffusion, Score matching, Flow matching), about 5.3 hours — these cover the core theoretical foundations and flow matching essential to understanding AV-Link's diffusion models and conditioning.

*Why it unblocks this paper:* Stanford CME296 is a focused, authoritative course on diffusion-based generative models including flow matching, score matching, and modern architectures, directly covering the foundational methods used in AV-Link. It includes detailed lectures on diffusion, flow matching, and conditioning techniques relevant to the paper's approach.

*If you want all of it:* All 8 lectures, about 14.0 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [The Principles of Diffusion Models](https://www.youtube.com/playlist?list=PLPTV0NXA_ZShSUHKLhdHAdAw5oM9vM1Yf) — Vizuara · 11 videos · 10.7h across 11 episodes

**Watch only this:** Episodes 3-7 (Introduction to Diffusion Models (DDPM), Diffusion Models Practical | DDPM, Energy Based Models | Score Function, Denoising Score Matching, Noise Conditional Score Networks), about 4.8 hours — these episodes cover the essential principles and practicalities of diffusion models relevant to the paper.

*Why it unblocks this paper:* The Principles of Diffusion Models by Vizuara provides a clear, well-structured introduction to diffusion models with a strong emphasis on intuition and practical understanding, suitable for quickly grasping the key concepts behind AV-Link's diffusion features.

*If you want all of it:* All 11 episodes, about 10.7 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AV-Link paper, start with foundational concepts including diffusion models, cross-modal audio-video generation, self-attention and fusion mechanisms, and rotary position embeddings for temporal alignment. These prerequisites provide the theoretical and technical background necessary to grasp AV-Link's innovations. Finally, focus on the core concept of AV-Link itself, ideally through the authors' own talk or the closest available substitute to gain direct insights into their approach and contributions.

### Diffusion models for generative modeling *(prerequisite)*
Diffusion models form the generative backbone of AV-Link's audio and video generation. Understanding their mathematical foundations and operational principles is essential to appreciate how AV-Link leverages pretrained frozen diffusion models for cross-modal generation.

*How the paper uses it:* AV-Link uses pretrained frozen flow matching diffusion models for audio and video generation.

▶ [Lec 31: Diffusion Models - I](https://www.youtube.com/watch?v=RSNT2x1sKf0) — NPTEL IIT Guwahati · 1mo ago

### Cross-modal audio-video generation *(prerequisite)*
This concept addresses the fundamental challenge AV-Link tackles: generating one modality (audio or video) conditioned on the other with precise temporal and semantic alignment. Familiarity with prior work and challenges in this area contextualizes AV-Link's contributions.

*How the paper uses it:* AV-Link addresses generating audio from video and video from audio with precise semantic and temporal alignment.

▶ [Ovi: Twin Backbone Cross-Modal Fusion for Audio-Video Generation (Sep 2025)](https://www.youtube.com/watch?v=EVip-Jrvpwc) — AI Paper Slop · 11mo ago

### Self-attention and fusion mechanisms *(prerequisite)*
Self-attention is a key mechanism enabling AV-Link's Fusion Block to perform bidirectional information exchange between audio and video features. Understanding self-attention and fusion mechanisms clarifies how AV-Link achieves temporally-aligned conditioning.

*How the paper uses it:* The Fusion Block enables bidirectional information exchange through temporally-aligned self-attention and symmetric feature reinjection.

▶ [7. Attention Mechanisms in NLP Explained | Self-Attention, Transformers & Modern AI](https://www.youtube.com/watch?v=t9YJ9t8SE5o) — Professor Rahul Jain · 4mo ago

### Rotary position embeddings for temporal alignment *(prerequisite)*
Rotary Position Embeddings (RoPE) are used in AV-Link to achieve precise temporal synchronization between audio and video tokens. Understanding RoPE helps explain how AV-Link maintains temporal alignment across modalities.

*How the paper uses it:* AV-Link uses temporally-aligned Rotary Position Embeddings tailored for audio and video tokens.

▶ [Rotary Positional Embeddings Explained | Transformer](https://www.youtube.com/watch?v=V8r__fXx7tU) — Outlier · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand AV-Link, start by learning about diffusion models, which are the core generative technique used for both audio and video generation. Next, grasp the fundamentals of cross-modal audio-video generation to appreciate the challenge of generating one modality from the other. Then, study self-attention and fusion mechanisms that enable the bidirectional exchange of information between audio and video features. After that, learn about rotary position embeddings, which are crucial for precise temporal alignment in AV-Link. Finally, explore the paper's core innovation: temporally-aligned diffusion features that leverage frozen diffusion activations for synchronized cross-modal generation.

### Diffusion models for generative modeling *(prerequisite)*
Diffusion models are a type of generative model that create data by gradually denoising random noise into meaningful samples. Understanding how these models work provides the foundation for grasping how AV-Link generates audio and video content.

*How the paper uses it:* AV-Link uses pretrained frozen diffusion models as the backbone for both audio and video generation.

▶ [Introduction to denoising diffusion probabilistic models](https://www.youtube.com/watch?v=rcy30M9UItg) — William Smith · 2y ago

### Cross-modal audio-video generation *(prerequisite)*
Cross-modal generation involves producing one type of data (like audio) from another (like video), which requires learning the relationships and synchronization between modalities. This concept is essential to understand the problem AV-Link addresses.

*How the paper uses it:* AV-Link tackles the challenge of generating audio from video and video from audio with precise temporal and semantic alignment.

▶ [Ovi: Twin Backbone Cross-Modal Fusion for Audio-Video Generation (Sep 2025)](https://www.youtube.com/watch?v=EVip-Jrvpwc) — AI Paper Slop · 11mo ago

### Self-attention and fusion mechanisms *(prerequisite)*
Self-attention allows models to weigh the importance of different parts of input data, enabling effective information exchange. Fusion mechanisms combine features from different modalities, which is key for AV-Link's bidirectional conditioning.

*How the paper uses it:* AV-Link's Fusion Block uses temporally-aligned self-attention to enable bidirectional information exchange between audio and video features.

▶ [Self-attention mechanism explained | Self-attention explained | scaled dot product attention](https://www.youtube.com/watch?v=J42KmMGxZxo) — Unfold Data Science · 2y ago

### Rotary position embeddings for temporal alignment *(prerequisite)*
Rotary position embeddings encode the position of tokens in a sequence to help models understand temporal order, which is critical for synchronizing audio and video streams.

*How the paper uses it:* AV-Link employs temporally-aligned Rotary Position Embeddings to achieve precise temporal synchronization between audio and video tokens.

▶ [Rotary Positional Embeddings Explained | Transformer](https://www.youtube.com/watch?v=V8r__fXx7tU) — Outlier · 1y ago

## Already in your library

- [Babak Heydari: Beyond Model Alignment: Adaptive Interaction Architectures for H-AI Complementarity](https://www.youtube.com/watch?v=nNLoriZfLSI) — also for: HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person ReID (Feng Liu)
- [Lecture 22 (Diffusion Models) by Chitwan Saharia | Machine Learning CS391L - Spring 2025](https://www.youtube.com/watch?v=3zTkTqZMn4M) — also for: PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models (Ping Liu)
- [Lecture 1 - Deep Generative Modeling | Principles of Diffusion ...](https://www.youtube.com/watch?v=bVrweqE-r38) — also for: OASIS: Harnessing Diffusion Adversarial Network for Ocean Salinity Imputation using Sparse Drifter Trajectories (Yufei Tang)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [How do AI video generation models work?](https://www.youtube.com/watch?v=Y5zHHoLrvAE) — also for: COMIC: Agentic Sketch Comedy Generation (Brian Curless)
- [Introduction to self attention | Implementing a simplified self-attention | Transformers for Vision](https://www.youtube.com/watch?v=NUBqwmTcoJI) — also for: Unified Local and Global Attention Interaction Modeling for Vision Transformers (Corey Toler-Franklin)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Rotary Positional Embeddings: Combining Absolute and Relative](https://www.youtube.com/watch?v=o29P0Kpobz0) — also for: InferScale: GPU-Native KV Injection for Personalized LLM Serving (Prashant Pandey)
- [\[CVPR 2025, Highlight\] CrossOver: 3D Scene Cross-Modal Alignment](https://www.youtube.com/watch?v=tDrQ4R-F8hk) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of AV-Link's core ideas and challenges. The beginner project focuses on reproducing a key mechanism from the paper using familiar tools, the intermediate project involves reimplementing the Fusion Block and evaluating temporal alignment on a public dataset, and the advanced project extends AV-Link by addressing one of its stated limitations—improving inference speed via step distillation techniques.

### Beginner — Visualizing Temporally-Aligned Rotary Position Embeddings
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements Rotary Position Embeddings (RoPE) for a sequence of synthetic audio and video tokens, visualizing how temporal alignment is encoded. You demonstrate how RoPE can be applied to align audio and video token sequences of different lengths and sample rates.

**Why it shows you understood the paper:** This project shows you understand the temporal alignment mechanism critical to AV-Link, specifically how RoPE encodes temporal information to synchronize audio and video features.

**Grounded in:** Use of temporally-aligned Rotary Position Embeddings to achieve precise temporal synchronization between audio and video features.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic sequences of audio and video token indices generated to simulate temporal sequences.

**Build it:**

1. Implement the Rotary Position Embedding function as described in the AV-Link paper.
2. Generate synthetic sequences representing audio and video tokens with different lengths.
3. Apply RoPE to both sequences and visualize the resulting embeddings using heatmaps.
4. Demonstrate temporal alignment by showing how embeddings correspond across modalities.
5. Write a README explaining RoPE and its role in AV-Link.

**Ships as:** A Jupyter notebook with code and visualizations demonstrating RoPE-based temporal alignment, plus a README explaining the concept and its significance.

**Stretch goal:** Extend the notebook to compare RoPE with standard positional embeddings and show the difference in temporal alignment quality.

### Intermediate — Reimplementing AV-Link Fusion Block for Audio-Video Synchronization
*Effort: 2 weekends, ~20 hours*

You reimplement the Fusion Block mechanism from AV-Link that enables bidirectional information exchange between audio and video diffusion features using temporally-aligned self-attention and symmetric feature reinjection. You train and evaluate this module on a publicly available paired audio-video dataset (e.g., VGGSound subset) to measure temporal alignment improvements over a baseline that uses separate pretrained feature extractors.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the core AV-Link contribution—the Fusion Block—and empirically validate its impact on temporal synchronization, reflecting comprehension of the paper's main technical innovation and evaluation methodology.

**Grounded in:** Introduction of a Fusion Block enabling bidirectional information exchange through temporally-aligned self-attention and symmetric feature reinjection.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Librosa (audio processing), OpenCV (video processing)

**Data:** A publicly available subset of the VGGSound dataset or a similar paired audio-video dataset to simulate the paper's training data.

**Build it:**

1. Implement a simplified version of the Fusion Block with temporally-aligned self-attention between audio and video features.
2. Extract frozen diffusion model features for audio and video modalities (simulate or use pretrained feature extractors if diffusion activations are unavailable).
3. Train a small model using the Fusion Block on paired audio-video samples to condition one modality on the other.
4. Evaluate temporal alignment using Onset Accuracy or a similar metric comparing to a baseline without fusion.
5. Document the implementation details, evaluation results, and insights in a README.

**Ships as:** A PyTorch implementation of the Fusion Block with training and evaluation scripts, plus a report showing improved temporal alignment compared to baseline.

**Stretch goal:** Incorporate Rotary Position Embeddings into the Fusion Block to further improve temporal synchronization.

### Advanced — Improving AV-Link Inference Speed via Step Distillation
*Effort: 3-4 weeks*

You develop and integrate a step distillation technique to reduce the number of sampling steps in AV-Link's flow matching diffusion models, aiming to improve inference speed without sacrificing temporal alignment quality. You evaluate the trade-offs on a paired audio-video dataset and compare against the original sampling procedure.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the AV-Link authors—slow inference speed due to flow model sampling—demonstrating your ability to extend the paper's method and contribute to its practical usability.

**Grounded in:** Applying step distillation techniques to reduce sampling steps and improve inference speed.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Librosa, OpenCV

**Data:** A paired audio-video dataset such as a subset of VGGSound or a similar publicly available dataset for training and evaluation.

**Build it:**

1. Implement the baseline AV-Link sampling procedure with flow matching diffusion models (or a simplified proxy).
2. Research and implement a step distillation method to reduce sampling steps (e.g., knowledge distillation or progressive distillation).
3. Integrate step distillation into the AV-Link inference pipeline.
4. Evaluate inference speed and temporal alignment quality compared to the baseline.
5. Analyze results and document findings, including limitations and potential improvements.

**Ships as:** A codebase demonstrating step distillation applied to AV-Link sampling with evaluation scripts and a detailed report on speed vs. quality trade-offs.

**Stretch goal:** Explore caching or approximation methods for feature reinjection to further reduce computational overhead during sampling.
