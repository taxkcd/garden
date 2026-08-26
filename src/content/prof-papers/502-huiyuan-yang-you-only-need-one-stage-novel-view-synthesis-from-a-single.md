---
title: "502 · You Only Need One Stage: Novel-View Synthesis From A Single Blind Face Image — Huiyuan Yang"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-huiyuan-yang"
source_hash: "4761ceefd8593d6e0e66184e87e6e727bd278d21cdc84902a6bb5044ab48a8cc"
sequence: 502
generator: "outreach-garden: managed"
---

# 502 · You Only Need One Stage: Novel-View Synthesis From A Single Blind Face Image

## At a glance

- **Professor:** Huiyuan Yang
- **Institution:** Missouri S&T
- **Paper:** [You Only Need One Stage: Novel-View Synthesis From A Single Blind Face Image](https://arxiv.org/pdf/2603.01328)
- **Authors:** Taoyue Wang, Xiang Zhang, Xiaotian Li, Huiyuan Yang, Lijun Yin
- **Year:** 2026

## Paper overview

This paper presents NVB-Face, a novel single-stage framework that directly generates high-quality novel-view face images from a single degraded (blind) face image. Unlike traditional two-stage methods that first restore the image and then synthesize new views, NVB-Face integrates these tasks into one end-to-end process. It uses a transformer-based 3D feature construction model and a diffusion model to produce consistent and realistic multi-view images even from low-quality inputs.

### Why it matters

**Research problem:** Generating consistent and high-quality novel-view images of faces from a single degraded (low-quality, blurry, noisy) face image is challenging. Existing methods require high-resolution inputs and rely on a two-stage pipeline (restoration then synthesis), which leads to error accumulation and poor multi-view consistency.

**Why it matters:** Novel-view face synthesis has applications in digital human modeling, 3D animation, surveillance, identity verification, and search-and-rescue. However, real-world images are often degraded, making existing methods unreliable and inefficient. Improving this task enables better human behavior understanding and health/social outcomes through enhanced visual data.

**Key contributions:**

- A novel tuning-free, end-to-end framework (NVB-Face) that directly generates novel-view face images from a single blind face input.
- Introduction of a transformer-based 3D latent space representation of facial features to enforce multi-view consistency.
- A single-stage inference pipeline that integrates blind face restoration and novel-view synthesis, reducing error propagation and improving efficiency.
- A tailored loss function combining diffusion loss, feature loss, and camera parameter loss to jointly optimize restoration and novel-view synthesis.
- Demonstration of superior performance over state-of-the-art two-stage methods on multiple datasets, including degraded and in-the-wild images.

## About the professor

**Huiyuan Yang** — Assistant Professor, Computer Science, Missouri S&T.

Research interests: Yang's research interests are at the intersection of machine learning and multimodal human-centered data, using a variety of sensory data (e.g., video, wearable sensors, EHR, fMRI, human biomedical and behavioral data, etc), to develop models and datasets for understanding human behaviour, improving health and social outcomes.

### Research links

- [Faculty/profile page](https://cii.mst.edu/people/members/huiyuanyang)
- [Identity evidence](https://hyang428.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** diffusion models in machine learning
**The paper assumes:** generative diffusion models, denoising diffusion probabilistic models, latent space image synthesis
**Already in this field?** Skip this entirely if you already understand the principles and implementation of diffusion models for image generation and restoration.

This background focuses on diffusion models in machine learning, which are central to the NVB-Face paper's approach for image restoration and novel-view synthesis. The rigorous course option offers a deep, structured university-level treatment of diffusion models, suitable for readers seeking comprehensive understanding. The fast track provides a concise, practical introduction to diffusion models, ideal for readers who want a solid grasp quickly without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1-6, about 10.5 hours — covering diffusion fundamentals, score matching, flow matching, latent space, architectures, and model training, which provide the essential theory and practical knowledge for the paper's diffusion model usage.

*Why it unblocks this paper:* Stanford CME296 is a recent, authoritative university course that covers diffusion-based generative models in vision, including foundational theory, architectures, training, and evaluation, directly relevant to understanding the diffusion components and innovations in NVB-Face.

*If you want all of it:* 14.0 hours across 8 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.S183 A Practical Introduction to Diffusion Models, IAP 2025](https://www.youtube.com/playlist?list=PL_1TbuIu65A_G908tHHvTnyQsueR17rMh) — Students for Open and Universal Learning · 6 videos · 4.9h across 6 episodes

**Watch only this:** Lectures 1-4, about 3.3 hours — these cover the basics of diffusion models, training, and sampling, sufficient for understanding the key diffusion principles applied in the paper.

*Why it unblocks this paper:* MIT 6.S183 offers a clear, practical introduction to diffusion models in a concise 6-episode series, ideal for quickly grasping the core concepts and mechanisms behind diffusion models used in NVB-Face without the depth of a full university course.

*If you want all of it:* 4.9 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the NVB-Face paper, start by grounding yourself in the foundational concepts of blind face restoration and novel-view synthesis from single images, as these are the core challenges the paper addresses. Next, study diffusion models for image synthesis, which are central to the paper's generative approach. Then, explore transformer-based 3D latent representations to grasp how the paper constructs multi-view consistent 3D facial features. Finally, focus on the paper's core concept and the authors' own presentation to understand their novel single-stage framework integrating restoration and synthesis.

### Blind face restoration methods *(prerequisite)*
Understanding blind face restoration is essential because NVB-Face starts from degraded face images and integrates restoration into its pipeline. The Stanford CS231N lecture on Deep Learning for Computer Vision provides a rigorous academic foundation on computer vision techniques including restoration, suitable for advanced readers.

*How the paper uses it:* The paper integrates blind face restoration as a key step in its single-stage pipeline for novel-view synthesis from degraded inputs.

▶ [Stanford CS231N Deep Learning for Computer Vision | Spring 2025 | Lecture 1: Introduction](https://www.youtube.com/watch?v=2fq9wYslV0A) — Stanford Online · 1:02:53 · 11mo ago

### Novel-view synthesis from single images *(prerequisite)*
Novel-view synthesis from a single image is the broader task context of the paper. The talk 'Worldsheet: View Synthesis from a Single Image' by Deepak Pathak is a concise research presentation that explains the challenges and methods for generating novel views from single images, providing relevant background for NVB-Face.

*How the paper uses it:* NVB-Face improves upon existing novel-view synthesis methods by handling degraded inputs and integrating restoration in a single stage.

▶ [Worldsheet: View Synthesis from a Single Image](https://www.youtube.com/watch?v=scuao0KB21s) — Deepak Pathak · 4:45 · 5 years ago

### Diffusion models for image synthesis *(prerequisite)*
Diffusion models are the core generative technique used in NVB-Face for both restoration and novel-view image generation. The seminar 'High-Resolution Image Synthesis with Latent Diffusion Models' by BML Uniandes offers a detailed academic presentation of latent diffusion models, including their architecture and training, which is directly relevant to understanding the paper's generative backbone.

*How the paper uses it:* The paper uses a fine-tuned Stable Diffusion model as the generative backbone for restoration and novel-view synthesis.

▶ [High-Resolution Image Synthesis with Latent Diffusion Models](https://www.youtube.com/watch?v=LytU887jCvU) — BML Uniandes · 47:50 · 3 years ago

### Transformer-based 3D latent representation
The transformer-based 3D latent space representation is central to how NVB-Face constructs multi-view consistent 3D facial features from single degraded images. The MIT CSAIL seminar by Bolei Zhou on 'Inverting Latent Space of GANs for Real Image Editings' provides an advanced discussion on latent space representations and their manipulation, which is conceptually aligned with the paper's transformer-based 3D feature construction.

*How the paper uses it:* NVB-Face introduces a transformer-based 3D Feature Construction Module to build a latent 3D face representation grid from single-view inputs.

▶ [Bolei Zhou - Inverting Latent Space of GANs for Real Image Editings](https://www.youtube.com/watch?v=zyBQ9obuqfQ) — Vision & Graphics Seminar at MIT · 52:33 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the NVB-Face paper, start by learning the broader task of novel-view synthesis from single images, which sets the stage for why generating new views from limited input is challenging and important. Next, grasp the fundamentals of blind face restoration to appreciate the difficulties in handling degraded facial images. Then, study diffusion models for image synthesis, as they are the core generative technique used in the paper. Finally, dive into the transformer-based 3D latent representation concept, which is central to how the paper achieves multi-view consistency and integrates restoration with synthesis in a single stage.

### Novel-view synthesis from single images *(prerequisite)*
Novel-view synthesis is about generating images of a scene or object from new viewpoints given only a single input image. This requires understanding the 3D structure and appearance from limited data, which is a challenging but foundational problem for applications like VR and 3D modeling.

*How the paper uses it:* The paper builds on this task by improving novel-view synthesis specifically for degraded face images in a single-stage framework.

▶ [What is Novel View Synthesis (NVS) ?](https://www.youtube.com/watch?v=oof19nr_DVI) — ScaleUp University · 4:40 · 5 months ago

### Blind face restoration methods *(prerequisite)*
Blind face restoration aims to recover high-quality facial images from degraded inputs like blur, noise, or low resolution without knowing the degradation process. Understanding these methods helps appreciate the challenges in restoring faces before synthesizing new views.

*How the paper uses it:* NVB-Face integrates blind face restoration directly with novel-view synthesis, addressing degraded inputs in an end-to-end manner.

▶ [GFP-GAN For Blind Face Restoration Clearly Explained!!!](https://www.youtube.com/watch?v=SSoYwKKG7eM) — AI for everyone · 26:58 · 3 years ago

### Diffusion models for image synthesis *(prerequisite)*
Diffusion models generate images by gradually denoising random noise into a coherent image, allowing high-quality and controllable synthesis. They have become state-of-the-art for image generation and restoration tasks.

*How the paper uses it:* The paper uses a fine-tuned Stable Diffusion model both for restoring the degraded input and for synthesizing novel views in a unified pipeline.

▶ [How does Stable Diffusion work? – Latent Diffusion Models EXPLAINED](https://www.youtube.com/watch?v=J87hffSMB60) — AI Coffee Break with Letitia · 13:16 · 3 years ago

### Transformer-based 3D latent representation
Transformers can model complex relationships in data and are used here to construct a 3D latent feature volume from a single 2D face image. This 3D representation enforces multi-view consistency when generating images from new viewpoints.

*How the paper uses it:* The paper introduces a transformer-based 3D Feature Construction Module to build a 3D latent face representation that enables consistent novel-view synthesis.

▶ [Transformers in Deep Learning | Introduction to Transformers](https://www.youtube.com/watch?v=lRylkiFdUdk) — Learn With Jay · 21:09 · 1 year ago

## Already in your library

- [Stanford CS25: V5 I Transformers in Diffusion Models for Image Generation and Beyond](https://www.youtube.com/watch?v=vXtapCFctTI) — also for: NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models (Pinar Yanardag)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [4: Deep Learning for Computer Vision – Transfer Learning and Fine-Tuning; Intro to HuggingFace](https://www.youtube.com/watch?v=8xh7Y0pBrCE) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Stanford CS231N Deep Learning for Computer Vision | Spring ...](https://www.youtube.com/watch?v=mQOK0Mfyrkk) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the NVB-Face paper. The beginner project focuses on replicating a core mechanism of blind face restoration using diffusion models, leveraging your existing ML and Python skills. The intermediate project involves reimplementing the paper's transformer-based 3D latent space construction and single-stage novel-view synthesis pipeline on a public face dataset, comparing it against a simple two-stage baseline. The advanced project extends the method to improve non-facial content generation and background consistency, addressing a key limitation noted by the authors.

### Beginner — Blind Face Restoration with Diffusion Models
*Effort: a weekend, ~8 hours*

You build a simplified blind face restoration pipeline using a pretrained diffusion model to restore degraded face images. This project focuses on the first step of NVB-Face's two-step training process, isolating the restoration task from novel-view synthesis.

**Why it shows you understood the paper:** This project demonstrates your grasp of the blind face restoration component and diffusion model usage, which is foundational to NVB-Face's integrated pipeline.

**Grounded in:** The paper states: 'first, an image encoder extracts features from the degraded input and a fine-tuned Stable Diffusion model restores high-quality images;' and notes the restoration module achieves comparable performance to classic methods but is not the main contribution.

**Tech stack:** Python 3.11, PyTorch, diffusers library, Jupyter Notebook

**Data:** Use the CelebA-HQ dataset as a publicly available substitute for degraded face images by synthetically adding blur and noise.

**Build it:**

1. Download and preprocess a subset of CelebA-HQ images, applying synthetic degradation (blur, noise).
2. Load a pretrained Stable Diffusion model or a publicly available diffusion-based face restoration model.
3. Fine-tune or adapt the model on the degraded-clean image pairs for blind face restoration.
4. Evaluate restoration quality using metrics like SSIM and LPIPS on a held-out validation set.
5. Document the pipeline and results in a Jupyter Notebook with visual examples.

**Ships as:** A GitHub repo containing code and a notebook that demonstrates blind face restoration on degraded face images with quantitative and qualitative results.

**Stretch goal:** Add a simple GUI using Streamlit or Gradio to upload degraded face images and see restored outputs interactively.

### Intermediate — Single-Stage Novel-View Face Synthesis with Transformer 3D Features
*Effort: 2 weekends, ~20 hours*

You reimplement the core NVB-Face pipeline: extract features from a single degraded face image, build a transformer-based 3D latent feature volume conditioned on camera parameters, and synthesize novel views in a single stage using a diffusion decoder. You compare your results to a simple two-stage baseline (restoration then synthesis).

**Why it shows you understood the paper:** This project shows you understand the paper's main technical contribution — the transformer-based 3D feature construction and single-stage synthesis — and can implement and evaluate it on real data.

**Grounded in:** The paper's key contribution: 'A transformer-based 3D latent space representation of facial features to enforce multi-view consistency' and 'A single-stage inference pipeline that integrates blind face restoration and novel-view synthesis, reducing error propagation and improving efficiency.'

**Tech stack:** Python 3.11, PyTorch, transformers library, diffusers library, Jupyter Notebook

**Data:** Use the LFW (Labeled Faces in the Wild) dataset as a substitute for the paper's LFW-Test dataset; simulate degraded inputs by adding blur and noise.

**Build it:**

1. Preprocess LFW images by applying synthetic degradation to simulate blind face inputs.
2. Implement an image encoder to extract features from degraded inputs.
3. Build a transformer-based 3D Feature Construction Module that maps single-view features into a 3D latent grid conditioned on camera parameters (which you predict or fix).
4. Implement a diffusion-based decoder to synthesize novel-view images from projected 3D features.
5. Train the pipeline end-to-end with a combined loss (diffusion loss, feature loss, camera parameter loss) as described.
6. Implement a simple two-stage baseline: restore images first, then synthesize novel views separately.
7. Evaluate and compare both methods on multi-view consistency metrics (e.g., SSIM, LPIPS, pose error).
8. Document the implementation, training details, and evaluation results.

**Ships as:** A GitHub repo with code to train and evaluate the single-stage NVB-Face pipeline and a baseline, including quantitative metrics and visualizations of novel-view synthesis.

**Stretch goal:** Incorporate a learned camera parameter predictor module as in the paper to improve novel-view synthesis conditioning.

### Advanced — Improving Non-Facial Content and Background Consistency in NVB-Face
*Effort: 3+ weeks*

You extend the NVB-Face framework to better handle non-facial elements such as clothing, accessories, and complex backgrounds, aiming to reduce unrealistic outputs and flickering across views. This involves modifying the 3D latent representation or diffusion model conditioning to explicitly model these elements and enforce temporal/spatial consistency.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, demonstrating deep comprehension of the method and creativity in extending it to improve real-world applicability and output quality.

**Grounded in:** The paper notes as a limitation: 'Limited generative capability for non-facial content such as clothing, accessories, and complex backgrounds, sometimes causing unrealistic outputs or flickering.' and suggests as future direction: 'Expand the generative scope to better handle non-facial elements like clothing, accessories, and backgrounds for more realistic and temporally stable outputs.'

**Tech stack:** Python 3.11, PyTorch, transformers library, diffusers library, Jupyter Notebook, OpenCV

**Data:** Use LFW or CelebA-HQ with synthetic degradation and backgrounds; optionally augment with images containing hats, glasses, and varied backgrounds to test non-facial content handling.

**Build it:**

1. Reimplement or reuse your intermediate NVB-Face pipeline baseline.
2. Analyze failure cases on non-facial content and background flickering in generated novel views.
3. Modify the 3D latent feature construction to include separate channels or embeddings for non-facial elements.
4. Incorporate spatial-temporal consistency losses or attention mechanisms in the diffusion decoder to stabilize backgrounds across views.
5. Train the extended model on augmented data with diverse accessories and backgrounds.
6. Evaluate improvements quantitatively (e.g., reduced flickering, improved realism) and qualitatively with visual comparisons.
7. Document your methodology, experiments, and results.

**Ships as:** A GitHub repo demonstrating an extended NVB-Face model with improved non-facial content generation and background consistency, including before/after comparisons and evaluation metrics.

**Stretch goal:** Explore integrating a visible watermarking mechanism to address ethical concerns about misuse as suggested by the paper's future directions.

_The authors have not released code or datasets for NVB-Face; public face datasets like LFW and CelebA-HQ must be used as substitutes with synthetic degradation to simulate blind face inputs._
