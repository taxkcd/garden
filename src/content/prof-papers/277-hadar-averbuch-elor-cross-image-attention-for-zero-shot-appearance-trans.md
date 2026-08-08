---
title: "277 · Cross-Image Attention for Zero-Shot Appearance Transfer — Hadar Averbuch-Elor"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hadar-averbuch-elor"
source_hash: "25b84d0f79914c876385ef110bfca84c44a6d60ecaf2b10a5e4ef9fb64d0b7d5"
sequence: 277
generator: "outreach-garden: managed"
---

# 277 · Cross-Image Attention for Zero-Shot Appearance Transfer

## At a glance

- **Professor:** Hadar Averbuch-Elor
- **Institution:** Cornell University
- **Paper:** [Cross-Image Attention for Zero-Shot Appearance Transfer](https://arxiv.org/pdf/2311.03335)
- **Authors:** Yuval Alaluf, Daniel Garibi, Or Patashnik, Hadar Averbuch-Elor, Daniel Cohen-Or
- **Year:** 2023

## Paper overview

This paper introduces a novel zero-shot method to transfer the visual appearance from one image to another while preserving the structure of the target image. The method leverages the self-attention layers of pretrained text-to-image diffusion models by introducing a cross-image attention mechanism that implicitly finds semantic correspondences between two images. This enables realistic appearance transfer even between objects of different shapes, sizes, and viewpoints without any additional training or optimization.

### Why it matters

**Research problem:** How to transfer the visual appearance between semantically related objects in two images that may differ significantly in shape, size, and viewpoint, without requiring model training or optimization.

**Why it matters:** Appearance transfer enables flexible and semantically meaningful image manipulation, which is valuable for creative applications and understanding multimodal perception. Existing methods often require domain-specific training or are limited to objects with similar shapes, restricting their generality and usability.

**Key contributions:**

- Introduction of a cross-image attention layer that mixes queries from a structure image with keys and values from an appearance image to enable semantic-based appearance transfer.
- A zero-shot approach requiring no additional training or optimization, operating with a single forward pass through a pretrained diffusion model.
- Three novel mechanisms to improve transfer quality: attention map contrasting to focus attention, appearance guidance adapted from classifier-free guidance, and AdaIN for color distribution alignment.
- Demonstration of effective appearance transfer across diverse object categories and challenging cross-domain pairs with significant shape and viewpoint differences.
- Comprehensive qualitative, quantitative, and user study evaluations showing superior or comparable performance to state-of-the-art methods.

## About the professor

**Hadar Averbuch-Elor** — Assistant Professor, Computer Science Department, Cornell University.

Research interests: computer vision and graphics, with a focus on building multimodal perception systems that can reconstruct, generate and understand the full complexity of the real 3D world

### Research links

- [Faculty/profile page](https://www.hadarelor.com)
- [Professor website](https://www.hadarelor.com/)
- [Google Scholar](https://scholar.google.com/citations?user=oBldxf0AAAAJ&hl=en&oi=ao)
- [GitHub](https://github.com/TAU-VAILab)
- [LinkedIn](https://www.linkedin.com/mwlite/in/hadar-averbuch-elor-9678666a)
- [Social profile](https://twitter.com/ElorHadar)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Cross-Image Attention for Zero-Shot Appearance Transfer,' start by building a foundation on key prerequisite concepts such as diffusion model attention mechanisms, semantic correspondences in vision, zero-shot image manipulation, and adaptive instance normalization (AdaIN). These topics provide the necessary background on how attention and semantic alignment work in generative models and zero-shot settings. Finally, focus on the paper's core concept of cross-image attention, ideally through the authors' own talk or closely related academic presentations, to grasp the novel method and its contributions.

### Diffusion models attention mechanisms *(prerequisite)*
Understanding self-attention in diffusion models is crucial because the paper leverages the self-attention layers of pretrained diffusion models to implement cross-image attention. This section covers how attention mechanisms work in deep learning, especially transformers, which underpin diffusion models' internal representations.

*How the paper uses it:* The paper's method modifies self-attention layers in diffusion models to enable cross-image attention for appearance transfer.

▶ [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — Gal Lahat · 1 year ago

### Semantic correspondences in vision *(prerequisite)*
Semantic correspondences link related regions across images despite differences in shape or viewpoint, a fundamental concept for the paper's approach. This section introduces how vision models establish semantic alignment, which is essential for transferring appearance between semantically related but structurally different objects.

*How the paper uses it:* Cross-image attention implicitly establishes semantic correspondences between images to enable appearance transfer.

▶ [STEGO: Unsupervised Semantic Segmentation by Distilling Feature Correspondences](https://www.youtube.com/watch?v=NPub4E4o8BA) — Mark Hamilton · 4 years ago

### Zero-shot image manipulation *(prerequisite)*
Zero-shot image manipulation involves performing image editing or generation without additional training or optimization, aligning with the paper's zero-shot approach. This section contextualizes the challenges and techniques in zero-shot settings, helping to appreciate the novelty of the paper's method.

*How the paper uses it:* The paper proposes a zero-shot method requiring no training or optimization for appearance transfer.

▶ [LLM Chronicles #6.3a: OpenAI CLIP for Zero-Shot Image Classification and Similarity](https://www.youtube.com/watch?v=GWaoin6bprQ) — Donato Capitella · 22:13 · 1 year ago

### Adaptive Instance Normalization (AdaIN) *(prerequisite)*
AdaIN is a technique to align color distributions between images, which the paper uses to improve color consistency during appearance transfer. Understanding AdaIN helps in grasping how the method achieves better visual quality and color alignment.

*How the paper uses it:* AdaIN is used in the paper to align color statistics between the structure and appearance images.

▶ [Arbitrary Style Transfer in Real-time with Adaptive Instance Normalization](https://www.youtube.com/watch?v=IIRxJvW6bE4) — ComputerVisionFoundation Videos · 8 years ago

### Cross-image attention mechanism
This is the core concept of the paper, introducing a novel cross-image attention layer that mixes queries from a structure image with keys and values from an appearance image to enable semantic-based appearance transfer. Understanding this mechanism is key to comprehending the paper's main contribution.

*How the paper uses it:* The paper's central innovation is the cross-image attention mechanism enabling zero-shot appearance transfer.

▶ [Cross-Image-Attention for Conditional Embeddings in Deep Metric Learning](https://www.youtube.com/watch?v=tD_JQI4ZvA0) — mvlupload · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on zero-shot appearance transfer using cross-image attention, start by learning the foundational concept of self-attention mechanisms in diffusion models, as this is key to how the method works. Next, grasp the idea of zero-shot image manipulation to appreciate how the method transfers appearance without training. Then, understand Adaptive Instance Normalization (AdaIN), which aligns color distributions during transfer. Finally, focus on the core concept of cross-image attention, which enables semantic correspondence and appearance transfer between images.

### Diffusion models attention mechanisms *(prerequisite)*
Self-attention is a mechanism that allows models to weigh the importance of different parts of the input data relative to each other. In diffusion models, self-attention helps the model understand spatial and semantic relationships within images during generation and denoising. Understanding this mechanism is essential to grasp how cross-image attention modifies these relationships to transfer appearance.

*How the paper uses it:* The paper leverages the self-attention layers of pretrained diffusion models to implement cross-image attention for appearance transfer.

▶ [Self-attention in deep learning (transformers) - Part 1](https://www.youtube.com/watch?v=8fIJk1lJ4aE) — AI Bites · 5 years ago

### Zero-shot image manipulation *(prerequisite)*
Zero-shot image manipulation refers to changing images in meaningful ways without any additional training or optimization on the specific task or data. This approach relies on pretrained models that generalize well to new tasks. Understanding zero-shot methods helps appreciate how the paper achieves appearance transfer in a single forward pass without retraining.

*How the paper uses it:* The method is zero-shot, requiring no additional training or optimization to transfer appearance between images.

▶ [LLM Chronicles #6.3a: OpenAI CLIP for Zero-Shot Image Classification and Similarity](https://www.youtube.com/watch?v=GWaoin6bprQ) — Donato Capitella · 22:13 · 1 year ago

### Adaptive Instance Normalization (AdaIN) *(prerequisite)*
AdaIN is a technique that aligns the mean and variance of feature activations between images, effectively transferring style or color distributions. It is widely used in style transfer tasks to harmonize appearance. Understanding AdaIN clarifies how the paper aligns color statistics between the source and target images during appearance transfer.

*How the paper uses it:* The paper uses AdaIN to align color distributions between the appearance and structure images for better transfer quality.

▶ [Arbitrary Style Transfer in Real-time with Adaptive Instance Normalization](https://www.youtube.com/watch?v=IIRxJvW6bE4) — ComputerVisionFoundation Videos · 8 years ago

### Cross-image attention mechanism
Cross-image attention extends self-attention by mixing queries from one image with keys and values from another, enabling the model to find semantic correspondences between images. This mechanism allows transferring appearance while preserving structure, even when images differ in shape or viewpoint. Understanding this is crucial to grasp the core innovation of the paper.

*How the paper uses it:* The core contribution is the cross-image attention layer that enables semantic-based appearance transfer between two images.

▶ [Cross-Image-Attention for Conditional Embeddings in Deep Metric Learning](https://www.youtube.com/watch?v=tD_JQI4ZvA0) — mvlupload · 3 years ago

## Already in your library

- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the zero-shot cross-image attention mechanism for appearance transfer introduced in the paper. Starting with a beginner-level focused implementation of a core mechanism (cross-image attention) on a simple example, you then move to an intermediate project that reimplements the full method and evaluates it against a baseline on publicly available images. Finally, the advanced project extends the method to address a stated limitation by improving inversion stability or enabling user-guided appearance transfer, showcasing research potential and technical depth.

### Beginner — Cross-Image Attention Visualization on Simple Image Pairs
*Effort: a weekend, ~8 hours*

You build a minimal Python notebook that implements the core idea of cross-image attention by extracting and visualizing attention maps between two images using a pretrained diffusion model's self-attention layers. You replace keys and values with those from an appearance image and keep queries from a structure image, then visualize the semantic correspondences formed.

**Why it shows you understood the paper:** This project demonstrates you grasp the key mechanism of cross-image attention and how it implicitly finds semantic correspondences between images, a central contribution of the paper.

**Grounded in:** Introduction of a cross-image attention layer that mixes queries from a structure image with keys and values from an appearance image to enable semantic-based appearance transfer.

**Tech stack:** Python 3.11, PyTorch, diffusers library, matplotlib

**Data:** Use two publicly available images from online sources (e.g., COCO or Flickr) that contain semantically related objects for visualization.

**Build it:**

1. Set up a Python environment with PyTorch and the diffusers library.
2. Load a pretrained text-to-image diffusion model with accessible self-attention layers.
3. Implement a function to extract queries, keys, and values from the self-attention layers for two input images.
4. Replace keys and values in the structure image's attention layer with those from the appearance image to form cross-image attention.
5. Visualize the resulting attention maps to show semantic correspondences between the two images.
6. Write a README explaining the mechanism and how the visualization relates to the paper's cross-image attention.

**Ships as:** A Jupyter notebook with code and visualizations of cross-image attention maps between two images, plus a README explaining the connection to the paper.

**Stretch goal:** Add a simple user interface to upload image pairs and visualize their cross-image attention maps interactively.

### Intermediate — Reimplementation of Zero-Shot Appearance Transfer with Cross-Image Attention
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core zero-shot appearance transfer method by modifying the self-attention layers of a pretrained diffusion model to perform cross-image attention between a structure and an appearance image. You apply the method to a small set of publicly available image pairs and compare the results qualitatively and quantitatively against a simple baseline such as naive style transfer or direct image blending.

**Why it shows you understood the paper:** This project shows you can implement the full core method from the paper, including the cross-image attention mechanism and the zero-shot inference pipeline, and evaluate its effectiveness compared to a baseline.

**Grounded in:** The method successfully transfers appearance between semantically related regions even when objects differ in shape, size, or viewpoint.

**Tech stack:** Python 3.11, PyTorch, diffusers library, OpenCV, scikit-image

**Data:** Use publicly available image pairs from datasets like COCO or Flickr containing semantically related objects with different shapes or viewpoints as a substitute for the paper's test images.

**Build it:**

1. Set up a Python environment with necessary ML and image libraries.
2. Implement image inversion into the diffusion model's latent space using existing inversion methods.
3. Modify the diffusion model's self-attention layers to implement cross-image attention as described in the paper.
4. Integrate additional mechanisms such as AdaIN for color alignment and appearance guidance adapted from classifier-free guidance.
5. Run zero-shot appearance transfer on selected image pairs and generate output images.
6. Implement a simple baseline method (e.g., naive style transfer) for comparison.
7. Evaluate results qualitatively and quantitatively using metrics for structure preservation and appearance fidelity.
8. Document the implementation details, evaluation, and comparison in a README.

**Verified links from the paper:**

- <https://github.com/ai-forever/Kandinsky-2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A runnable Python project with scripts to perform zero-shot appearance transfer on image pairs, baseline comparison, evaluation metrics, and a detailed README.

**Stretch goal:** Add attention map contrasting to improve output quality and include ablation studies showing its effect.

### Advanced — Improving Latent Inversion Stability for Enhanced Zero-Shot Appearance Transfer
*Effort: 3+ weeks*

You develop an extension to the zero-shot appearance transfer method by implementing improved inversion techniques to generate more stable and editable latent codes for input images. This addresses a key limitation noted in the paper regarding inversion artifacts and instability. You evaluate how improved inversion affects the quality and fidelity of appearance transfer, and optionally add a simple user control interface to guide the transfer process.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding of the method's bottlenecks and the ability to innovate beyond the original work toward research-level contributions.

**Grounded in:** Improving inversion techniques to achieve more accurate and editable latent codes for better appearance transfer results.

**Tech stack:** Python 3.11, PyTorch, diffusers library, OpenCV, scikit-image, Gradio or Streamlit for UI

**Data:** Use the same publicly available image pairs as in the intermediate project for consistency and evaluation.

**Build it:**

1. Review and implement state-of-the-art latent inversion methods for diffusion models to improve stability and editability.
2. Integrate the improved inversion pipeline into the zero-shot appearance transfer method.
3. Conduct experiments comparing appearance transfer results using standard inversion versus improved inversion.
4. Quantitatively and qualitatively evaluate improvements in artifact reduction, structure preservation, and appearance fidelity.
5. Optionally, build a simple interactive UI to allow users to adjust inversion or appearance guidance parameters to refine transfer results.
6. Document the methodology, experiments, and findings in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/ai-forever/Kandinsky-2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A research-style project repository with improved inversion implementation, enhanced zero-shot appearance transfer pipeline, evaluation scripts, and optional user interface, accompanied by detailed documentation.

**Stretch goal:** Extend the method to handle more challenging cross-domain appearance transfers with less semantic overlap, exploring new attention mechanisms or guidance strategies.
