---
title: "549 · PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models — Ping Liu"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ping-liu"
source_hash: "c27d5f8254c72dbf3977356350ba6e5dd4d5cf3e4d83d1c2246f422d8b45349a"
sequence: 549
generator: "outreach-garden: managed"
---

# 549 · PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models

## At a glance

- **Professor:** Ping Liu
- **Institution:** University of Nevada
- **Paper:** [PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models](https://arxiv.org/pdf/2603.21547)
- **Authors:** Yiwei Xie, Zheng Zhang, Ping Liu
- **Year:** 2026

## Paper overview

This paper introduces PROBE, a diagnostic method to test whether concepts that have been erased from text-to-video diffusion models are truly removed or just suppressed at the output level. PROBE optimizes a pseudo-token embedding while keeping the model frozen to see if the erased concept can be reactivated. The study finds that current erasure methods leave residual concept capacity, which can resurface over time in videos, a failure mode not detectable by frame-level metrics.

### Why it matters

**Research problem:** Current concept erasure methods in text-to-video diffusion models claim to suppress sensitive or unwanted content, but it is unclear if these methods truly remove the internal representations of these concepts or merely suppress their visible occurrence in generated videos.

**Why it matters:** Ensuring that sensitive or prohibited content is fully removed from generative models is critical for safety, privacy, and ethical deployment. Incomplete erasure can lead to unintended content generation, posing risks especially in video generation where temporal dynamics can cause suppressed concepts to re-emerge.

**Key contributions:**

- Introduced a diagnostic protocol for evaluating concept erasure robustness in text-to-video diffusion models using embedding-level probing with frozen parameters.
- Defined reactivation potential as a quantitative measure of residual concept capacity and proposed a dual-objective probing mechanism combining reconstruction and latent alignment.
- Identified temporal re-emergence as a video-specific failure mode where suppressed concepts progressively resurface across frames, undetectable by frame-level metrics.
- Conducted systematic experiments across three architectures, three concept categories, and three erasure strategies, revealing that no tested method achieves complete representational removal.
- Released the PROBE protocol and codebase to support reproducible safety auditing.

## About the professor

**Ping Liu** — Tenure Track Assistant Professor, Department of Computer Science and Engineering, University of Nevada.

Research interests: AIGC

### Research links

- [Faculty/profile page](https://www.unr.edu/cse/people/ping-liu)
- [Identity evidence](https://pinglmlcv.github.io/pingliu264)
- [Identity evidence](https://scholar.google.com/citations?hl=en&user=KRz4JecAAAAJ)
- [Identity evidence](https://pinglmlcv.github.io/pingliu264/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Diffusion Models in Machine Learning
**The paper assumes:** machine learning diffusion models, generative modeling, latent variable models, denoising score matching
**Already in this field?** Skip this entirely if you already understand the principles and training of diffusion models in machine learning, especially their application to generative tasks.

To understand the PROBE paper on diagnosing residual concept capacity in erased text-to-video diffusion models, a solid grasp of diffusion models in machine learning is essential. The rigorous course option offers a deep, structured university lecture series covering foundational theory and modern architectures, while the fast track provides a concise, intuition-focused explainer series for quicker comprehension. Choose the course for thorough mastery and the fast track for a rapid but clear overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1-5, about 8.75 hours — covering Diffusion, Score matching, Flow matching, Latent Space & Guidance, and Architectures to build a solid theoretical and architectural foundation.

*Why it unblocks this paper:* Stanford CME296 is a comprehensive university course specifically on diffusion and large vision models, covering foundational concepts like diffusion, score matching, latent space, guidance, architectures, training, and evaluation, all directly relevant to understanding text-to-video diffusion models and the PROBE method.

*If you want all of it:* 14.0 hours across 8 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Flow Matching and Diffusion Models](https://www.youtube.com/playlist?list=PLdUcsPPD8lGx92jBEylh3VAERaM5d9rRT) — Jia-Bin Huang · 5 videos · 1.0h across 5 episodes

**Watch only this:** All 5 episodes, about 1.0 hour — to get a concise yet comprehensive overview of diffusion models and flow matching concepts.

*Why it unblocks this paper:* This short-form series by Jia-Bin Huang provides clear, visual, and intuition-first explanations of diffusion models and flow matching, covering key concepts quickly and accessibly, ideal for gaining a rapid understanding of the core ideas behind diffusion models relevant to the paper.

*If you want all of it:* 1.0 hour across 5 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PROBE diagnostic method for residual concept capacity in erased text-to-video diffusion models, start with foundational knowledge on text-to-video diffusion models and embedding optimization in neural networks. Next, explore the latent alignment loss concept critical to PROBE's dual-objective probing mechanism. Finally, focus on the core concept of concept erasure in diffusion models and conclude with the authors' own talk if available, to grasp the specific methodology and findings of the paper.

### text-to-video diffusion models *(prerequisite)*
This section covers the architecture and operational principles of text-to-video diffusion models, which are the generative backbone of the paper's study. Understanding how these models generate video from text prompts, including temporal and spatial super-resolution techniques, is essential for grasping the context of concept erasure and probing residual capacity.

*How the paper uses it:* The paper investigates residual concept capacity specifically in text-to-video diffusion models, making foundational knowledge of these models critical.

▶ [Lecture 22 (Diffusion Models) by Chitwan Saharia | Machine Learning CS391L - Spring 2025](https://www.youtube.com/watch?v=3zTkTqZMn4M) — Inderjit Dhillon · 1:23:41 · 1 year ago

### embedding optimization in neural networks *(prerequisite)*
This section explains how embeddings, particularly pseudo-token embeddings, are optimized within neural networks while keeping model parameters frozen. This knowledge is crucial to understand PROBE's approach of optimizing a pseudo-token embedding to probe residual concept capacity without altering the model weights.

*How the paper uses it:* PROBE optimizes a pseudo-token embedding with frozen model parameters to diagnose residual concept capacity.

▶ [Lec 02. How to Train a Neural Net](https://www.youtube.com/watch?v=vidCX_dMCu0) — MIT OpenCourseWare · 1:19:34 · 6mo ago

### latent alignment loss in generative models *(prerequisite)*
This section delves into latent alignment loss, a key component of PROBE's dual-objective probing mechanism that improves the quality of concept recovery by anchoring the probing to the spatiotemporal structure of the original concept. Understanding this loss function is important to appreciate the methodological innovations of the paper.

*How the paper uses it:* The paper introduces a novel latent alignment loss combined with reconstruction loss to enhance probing effectiveness.

▶ [MIT 6.S191 (2025): Deep Generative Modeling](https://www.youtube.com/watch?v=SdTZAMDKrNY) — Alexander Amini · 48:57 · 1 year ago

### concept erasure in diffusion models
This section focuses on the challenges and methods of concept erasure in diffusion models, which is central to the paper's investigation. It provides context on existing erasure strategies and their limitations, setting the stage for understanding why PROBE is necessary and how it advances the field.

*How the paper uses it:* PROBE evaluates residual concept capacity after concept erasure in diffusion models, making this topic central to the paper.

▶ [ECCV2026 | Rethinking Robust Adversarial Concept Erasure in Diffusion Models](https://www.youtube.com/watch?v=EZ8zuwkV_4A) — Qhong · 5:00 · 5 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the PROBE method for diagnosing residual concept capacity in erased text-to-video diffusion models. We start with the basics of embedding optimization in neural networks, then cover text-to-video diffusion models, followed by latent alignment loss in generative models, and finally focus on concept erasure in diffusion models. The path culminates with the core PROBE diagnostic method, enabling a clear grasp of how the paper evaluates and reveals residual concepts in video generation.

### embedding optimization in neural networks *(prerequisite)*
Learn how neural networks represent inputs as embeddings and how these embeddings can be optimized independently while keeping the rest of the model fixed. This concept is key to understanding how PROBE optimizes a pseudo-token embedding to probe residual concepts without changing model weights.

*How the paper uses it:* PROBE optimizes a pseudo-token embedding with frozen model parameters to detect residual concept capacity.

▶ [Embeddings for Everything: Search in the Neural Network Era](https://www.youtube.com/watch?v=JGHVJXP9NHw) — Berkeley School of Information · 1:18:23 · Streamed 8y ago

### text-to-video diffusion models *(prerequisite)*
Understand how text-to-video diffusion models generate videos from text prompts by progressively refining noisy data into coherent frames, leveraging temporal and spatial super-resolution. This foundational knowledge explains the architecture and generative process that PROBE diagnoses.

*How the paper uses it:* The paper studies residual concept capacity in text-to-video diffusion models, the generative backbone of the work.

▶ [Text-to-video models explained](https://www.youtube.com/watch?v=dECiAdfn2d4) — Google Research · 4:25 · 3 years ago

### latent alignment loss in generative models *(prerequisite)*
Explore the idea of latent alignment loss, which encourages generated outputs to align with latent representations of target concepts, improving recovery quality beyond simple reconstruction. This dual-objective loss is crucial in PROBE’s probing mechanism to better reactivate erased concepts.

*How the paper uses it:* PROBE combines reconstruction loss with latent alignment loss to enhance concept recovery quality.

▶ [MIT 6.S191 (2025): Deep Generative Modeling](https://www.youtube.com/watch?v=SdTZAMDKrNY) — Alexander Amini · 48:57 · 1 year ago

### concept erasure in diffusion models
Gain insight into how diffusion models attempt to erase or suppress unwanted concepts internally, and the challenges in verifying whether these concepts are truly removed or just hidden. This sets the stage for understanding why PROBE’s diagnostic approach is necessary.

*How the paper uses it:* The paper evaluates the effectiveness of concept erasure methods in text-to-video diffusion models.

▶ [ECCV2026 | Rethinking Robust Adversarial Concept Erasure in Diffusion Models](https://www.youtube.com/watch?v=EZ8zuwkV_4A) — Qhong · 5:00 · 5 days ago

## Already in your library

- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [Lec 47 Diffusion Models](https://www.youtube.com/watch?v=svfpNQGB1L4) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Text-to-image generation explained](https://www.youtube.com/watch?v=9YrYDqhJdPw) — also for: Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective (Cheng Zhang)
- [11: Generative AI – Text-to-Image Models](https://www.youtube.com/watch?v=NQBhhRG-Pe4) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the PROBE diagnostic method for residual concept capacity in erased text-to-video diffusion models. Starting with a beginner-level implementation of a simplified probing embedding optimization, progressing to an intermediate-level reproduction and evaluation of PROBE on a small-scale video diffusion model using the authors' released code, and culminating in an advanced project extending PROBE to handle CFG-distilled models as suggested in the paper's future directions.

### Beginner — Simplified Pseudo-Token Embedding Optimization for Concept Reactivation
*Effort: a weekend, ~8 hours*

You build a minimal prototype that implements the core idea of PROBE's embedding-level probing by optimizing a pseudo-token embedding vector with frozen model parameters to reactivate a suppressed concept in a text-to-video diffusion model. The project focuses on the reconstruction loss component only, applied to a small pretrained text-to-video diffusion model or a substitute image diffusion model if video is unavailable.

**Why it shows you understood the paper:** This project shows you understand the key mechanism of PROBE's probing approach—embedding optimization with frozen weights—and how it can reveal residual concept capacity beyond output suppression.

**Grounded in:** PROBE probes residual capacity through the narrowest possible intervention: optimizing only a pseudo-token embedding while keeping all model parameters frozen... The overall probing objective combines diagnostic reconstruction with latent alignment.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Use a small set of videos or images generated from a publicly available pretrained text-to-video or image diffusion model as reference data; if unavailable, simulate with a small set of related images.

**Build it:**

1. Set up a pretrained text-to-video or image diffusion model with frozen weights.
2. Implement a pseudo-token embedding vector initialized randomly.
3. Define a reconstruction loss comparing generated outputs conditioned on the pseudo-token to reference outputs.
4. Optimize the pseudo-token embedding to minimize reconstruction loss while keeping model weights frozen.
5. Visualize and report the reconstruction loss decrease and qualitative recovery of the concept.

**Ships as:** A GitHub repo with code and a README demonstrating the embedding optimization process, loss curves, and example recovered outputs showing partial concept reactivation.

**Stretch goal:** Add the latent alignment loss component to improve recovery quality as in the paper.

### Intermediate — Reproducing PROBE Diagnostic Evaluation on Text-to-Video Diffusion Models
*Effort: 2-3 weekends, ~20 hours*

You build a reproduction of the PROBE protocol using the authors' released codebase to probe residual concept capacity in a text-to-video diffusion model with erased concepts. You run the dual-objective probing (reconstruction + latent alignment) on a small subset of concepts and erasure methods, compare results against a simple baseline such as adversarial prompt search, and report reactivation potential metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the full PROBE method as designed by the authors, understand its evaluation framework, and interpret residual capacity metrics quantitatively.

**Grounded in:** We release our protocol to support reproducible safety auditing. Our code is available at https://github.com/YiweiXie/PRObingBasedEvaluation. PROBE achieves 28.90%, providing a substantially stronger diagnostic signal compared to P4D-K's 20.45% nudity rate on CogX-2B with T2VUnlearning.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Git

**Data:** Use the reference videos generated from the unerased model as required by PROBE; if unavailable, generate a small synthetic dataset using the authors' code or simulate with substitute data.

**Build it:**

1. Clone and set up the PROBE codebase from https://github.com/YiweiXie/PRObingBasedEvaluation.
2. Prepare or generate a small reference dataset of videos with erased concepts using the provided erasure methods.
3. Run the PROBE probing optimization with both reconstruction and latent alignment losses on selected concepts.
4. Implement or run a baseline adversarial prompt search for comparison.
5. Compute and report reactivation potential and temporal reactivation curves.
6. Analyze and visualize results to confirm residual concept capacity and temporal re-emergence.

**Verified links from the paper:**

- <https://github.com/YiweiXie/PRObingBasedEvaluation> — released by the paper's authors

**Ships as:** A GitHub repo with scripts, results, and a detailed README reproducing key PROBE metrics and visualizations on a small scale.

**Stretch goal:** Extend the evaluation to an additional erasure method or concept category not covered in the initial runs.

### Advanced — Extending PROBE to CFG-Distilled Models with Gradient Conflict Mitigation
*Effort: 3-4 weeks*

You develop an extension of the PROBE diagnostic method to handle CFG-distilled text-to-video diffusion models, addressing the gradient opposition issue between reconstruction and latent alignment losses identified in the paper. You implement techniques to estimate or compensate for internal guidance biases, enabling stable probing optimization and improved concept recovery on CFG-distilled models like HunyuanVideo.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of PROBE's dual-loss design, CFG distillation challenges, and advanced embedding optimization techniques.

**Grounded in:** In CFG-distilled models such as HunyuanVideo... the two losses optimize in opposing directions... causing gradient opposition and unstable optimization. Extending PROBE to handle CFG-distilled models by estimating or compensating for internal guidance biases is a future direction.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Git, NumPy

**Data:** Use CFG-distilled model checkpoints and corresponding reference videos if available; otherwise, simulate CFG-distilled behavior on a smaller model or dataset.

**Build it:**

1. Study the gradient conflict problem between reconstruction and latent alignment losses in PROBE on CFG-distilled models.
2. Implement methods to estimate internal guidance biases or decouple conflicting gradients (e.g., gradient surgery, loss weighting, or alternate optimization).
3. Integrate these methods into the PROBE codebase.
4. Test and validate stable probing optimization on a CFG-distilled model or simulated equivalent.
5. Evaluate concept reactivation quality improvements quantitatively and qualitatively.
6. Document methodology, experiments, and results.

**Verified links from the paper:**

- <https://github.com/YiweiXie/PRObingBasedEvaluation> — released by the paper's authors

**Ships as:** A GitHub repo with extended PROBE code supporting CFG-distilled models, experimental results showing improved probing stability and concept recovery, and a comprehensive README explaining the approach.

**Stretch goal:** Explore embedding-level probing extensions to other generative modalities such as text-to-image or audio generation models.
