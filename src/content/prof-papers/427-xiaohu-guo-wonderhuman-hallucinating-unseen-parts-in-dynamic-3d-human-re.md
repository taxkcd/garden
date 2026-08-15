---
title: "427 · WonderHuman: Hallucinating Unseen Parts in Dynamic 3D Human Reconstruction — Xiaohu Guo"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xiaohu-guo"
source_hash: "b98316808a27226e45eef8945b410d6015bfc1b4b9b9eb90df193c2692842dbe"
sequence: 427
generator: "outreach-garden: managed"
---

# 427 · WonderHuman: Hallucinating Unseen Parts in Dynamic 3D Human Reconstruction

## At a glance

- **Professor:** Xiaohu Guo
- **Institution:** University of Texas at Dallas
- **Paper:** [WonderHuman: Hallucinating Unseen Parts in Dynamic 3D Human Reconstruction](https://arxiv.org/abs/2502.01045)
- **Authors:** Zilong Wang, Zhiyang Dou, Yuan Liu, Cheng Lin, Xiao Dong, Yunhui Guo, Chenxu Zhang, Xin Li, Wenping Wang, Xiaohu Guo
- **Year:** 2025

## Paper overview

WonderHuman is a novel method to reconstruct detailed 3D human avatars from monocular videos that only capture partial views, such as front views. It uses advanced 2D diffusion generative models to hallucinate or predict the unseen parts of the human body, combining these with a 3D Gaussian splatting framework to create photorealistic, animatable avatars. The method ensures consistency and realism across different views and poses by optimizing in both canonical and observation spaces and using strategies like view selection and pose feature injection.

### Why it matters

**Research problem:** Existing dynamic human avatar reconstruction methods require full coverage of the human body from multi-view videos and struggle to reconstruct unseen or occluded parts from monocular videos with limited viewpoints. This limits their applicability in real-world scenarios where only partial views are available.

**Why it matters:** High-fidelity dynamic human avatars have wide applications in gaming, entertainment, communication, and telepresence. Being able to reconstruct complete avatars from monocular videos with limited viewpoints would greatly enhance accessibility and usability of avatar technologies in practical settings.

**Key contributions:**

- Proposed WonderHuman framework that uses 2D diffusion model priors to reconstruct dynamic humans from monocular videos including unseen parts.
- Introduced Dual-space Optimization applying SDS loss in both canonical and observation spaces to ensure visual consistency and realism.
- Developed view selection and pose feature injection strategies to resolve conflicts between generative predictions and observed data, improving pose-dependent effects and avatar fidelity.

## About the professor

**Xiaohu Guo** — Assistant Professor, Department of Computer Science, University of Texas at Dallas.

Research interests: machine learning, artificial intelligence, explainable AI

### Research links

- [Faculty/profile page](https://www.utdallas.edu/~xxg061000)
- [Resolved homepage](https://personal.utdallas.edu/~xxg061000/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D human reconstruction and generative diffusion models
**The paper assumes:** 3D human reconstruction techniques, diffusion generative models, Gaussian splatting, and score distillation sampling
**Already in this field?** Skip this entirely if you already have experience with 3D dynamic human reconstruction methods and generative diffusion models in computer vision.

To deeply understand the WonderHuman paper, which combines 3D human reconstruction with 2D diffusion generative models, you need background on both 3D representations and generative diffusion models. The rigorous course option offers a comprehensive, university-level deep dive into generative diffusion models, essential for grasping the hallucination and optimization techniques used. The fast track provides a concise, visual introduction to 3D reconstruction concepts relevant to the paper, enabling quicker contextual understanding of the 3D reconstruction pipeline and Gaussian splatting.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS236: Deep Generative Models I 2023 I Stefano Ermon](https://www.youtube.com/playlist?list=PLoROMvodv4rPOWA-omMM6STXaWW4FvJT8) — Stanford Online · 18 videos · 23.6h across 18 episodes

**Watch only this:** Lectures 1-2 for foundational background (~2.6 hours), then Lectures 13 and 16 covering Score Based Models and Score Based Diffusion Models (~2.6 hours), totaling about 5.2 hours. This subset covers the generative diffusion model theory and techniques needed to understand the hallucination and optimization in the paper.

*Why it unblocks this paper:* Stanford CS236: Deep Generative Models I 2023 by Stefano Ermon is a top-tier university course that covers score-based and diffusion models in depth, including Score Distillation Sampling (SDS), which is central to WonderHuman's Dual-space Optimization approach.

*If you want all of it:* 23.6 hours across all 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [3D reconstruction](https://www.youtube.com/playlist?list=PL-GKHoSeWKYr6lOaxMt6MgYL1T0wdd4D6) — Winton Tao · 8 videos · 0.6h across the first 7 episodes

**Watch only this:** First 7 episodes (~35 minutes) covering virtual 3D human head pose tools, monocular depth estimation, photogrammetry, and Gaussian splatting. This subset gives a quick but solid grasp of the 3D reconstruction techniques and challenges addressed in the paper.

*Why it unblocks this paper:* This short-form playlist by Winton Tao provides a clear, visual introduction to 3D reconstruction concepts including photogrammetry and Gaussian splatting, which are directly relevant to the 3D reconstruction framework used in WonderHuman.

*If you want all of it:* About 0.6 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the WonderHuman paper, start by building foundational knowledge on 2D diffusion generative models, 3D Gaussian splatting, and Score Distillation Sampling optimization, as these are core technical pillars enabling the method. Then, explore the broader context of dynamic human avatar reconstruction from monocular video to appreciate the challenges and prior art. Finally, focus on the paper's core concept by watching the authors' own talk on WonderHuman, which provides direct insight into their novel approach and contributions.

### 2D diffusion generative models for image synthesis *(prerequisite)*
This section covers the theory and application of 2D diffusion models, which serve as the generative priors for hallucinating unseen human parts in WonderHuman. Understanding diffusion models and their use in image synthesis is critical to grasp how the paper leverages these models for 3D reconstruction.

*How the paper uses it:* WonderHuman uses 2D diffusion generative models like Zero-1-to-3 to hallucinate unseen body parts from monocular videos.

▶ [Cornell CS 6785: Deep Generative Models. Lecture 13 ...](https://www.youtube.com/watch?v=yUnIzzNiyho) — Volodymyr Kuleshov · 1:12:16

### 3D Gaussian splatting for dynamic reconstruction *(prerequisite)*
3D Gaussian splatting is a novel 3D scene representation and rendering technique that enables photorealistic and efficient novel view synthesis. This foundational knowledge is essential to understand the 3D representation framework into which the hallucinated parts from diffusion models are integrated in WonderHuman.

*How the paper uses it:* WonderHuman integrates hallucinated unseen parts with a 3D Gaussian splatting framework for dynamic human reconstruction.

▶ [TUM AI Lecture Series - The 3D Gaussian Splatting Adventure ...](https://www.youtube.com/watch?v=DjOqkVIlEGY) — Matthias Niessner · 1:04:20

### Score Distillation Sampling optimization *(prerequisite)*
Score Distillation Sampling (SDS) is an optimization technique that enables leveraging pretrained 2D diffusion models for 3D generation tasks. Understanding SDS is key to comprehending how WonderHuman performs dual-space optimization to maintain visual consistency and realism.

*How the paper uses it:* WonderHuman applies SDS loss in both canonical and observation spaces as part of its Dual-space Optimization strategy.

▶ [Lecture 09: DDIM Inversion / Score Distillation 1 (KAIST CS492D, Fall 2024)](https://www.youtube.com/watch?v=l1bYcU6Z7iU) — Minhyuk Sung · 1 year ago

### Dynamic human avatar reconstruction from monocular video *(prerequisite)*
This section contextualizes the challenges and goals of reconstructing animatable human avatars from monocular video, highlighting the limitations of prior methods and the importance of hallucinating unseen parts. It provides background to appreciate the novelty and impact of WonderHuman.

*How the paper uses it:* WonderHuman addresses the challenge of reconstructing unseen or occluded parts from monocular videos with limited viewpoints.

▶ [iHuman: Instant Animatable Digital Humans From Monocular Videos, ECCV 2024](https://www.youtube.com/watch?v=W5xG2GYfUM0) — Pramish Paudel · 2 years ago

### WonderHuman paper talk *(the paper's own talk)*
The authors' own presentation on WonderHuman offers direct insight into their novel framework, design choices, and experimental results. This talk is the most authoritative and focused resource to understand the paper's contributions and technical details.

*How the paper uses it:* This is the authors' own talk introducing the WonderHuman framework and its key innovations.

▶ [WonderHuman](https://www.youtube.com/watch?v=bdwUL_RKajA) — Zilong Wang · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand WonderHuman, a method for reconstructing complete 3D human avatars from monocular videos by hallucinating unseen parts. We start with the basics of dynamic human avatar reconstruction to understand the problem context, then cover 2D diffusion generative models which provide the hallucination prior. Next, we explore 3D Gaussian splatting as the core 3D representation framework. Finally, we discuss Score Distillation Sampling optimization, a key technique enabling the method's dual-space consistency. This order builds intuition progressively from problem context to core technical components.

### Dynamic human avatar reconstruction from monocular video *(prerequisite)*
Learn how 3D human avatars can be reconstructed from single-camera videos, including the challenges of limited viewpoints and partial observations. This provides context on why hallucinating unseen parts is necessary and what prior methods achieve.

*How the paper uses it:* WonderHuman addresses limitations in reconstructing unseen parts from monocular videos in dynamic human avatar reconstruction.

▶ [Detailed Human Avatars from Monocular Video - 3DV 2018](https://www.youtube.com/watch?v=w5NsY3IFrm8) — Christian Theobalt · 7 years ago

### 2D diffusion generative models for image synthesis *(prerequisite)*
Understand the basics of 2D diffusion models, which generate images by iteratively denoising random noise guided by learned data distributions. These models serve as powerful priors for hallucinating realistic unseen image content.

*How the paper uses it:* WonderHuman uses 2D diffusion generative priors (Zero-1-to-3) to hallucinate unseen human body parts from partial views.

▶ [Cornell CS 6785: Deep Generative Models. Lecture 13 ...](https://www.youtube.com/watch?v=yUnIzzNiyho) — Volodymyr Kuleshov · 1:12:16

### 3D Gaussian splatting for dynamic reconstruction *(prerequisite)*
Explore 3D Gaussian splatting, a representation that models scenes as collections of 3D Gaussian blobs for efficient, photorealistic rendering and reconstruction. This technique enables real-time novel view synthesis and integrates hallucinated parts into a coherent 3D avatar.

*How the paper uses it:* WonderHuman integrates hallucinated parts with a 3D Gaussian splatting framework for dynamic human reconstruction.

▶ [TUM AI Lecture Series - The 3D Gaussian Splatting Adventure ...](https://www.youtube.com/watch?v=DjOqkVIlEGY) — Matthias Niessner · 1:04:20

### Score Distillation Sampling optimization *(prerequisite)*
Learn about Score Distillation Sampling (SDS), an optimization technique that leverages pretrained 2D diffusion models to guide 3D generation by matching model gradients. SDS enables the dual-space optimization that maintains visual consistency across views and poses.

*How the paper uses it:* WonderHuman applies SDS loss in both canonical and observation spaces to optimize reconstruction quality and consistency.

▶ [Score Distillation via Reparametrized DDIM](https://www.youtube.com/watch?v=sNjqHmA2uWQ) — ottogin · 1 year ago

### WonderHuman paper talk *(the paper's own talk)*
Watch a concise introduction by the author to gain direct insight into the WonderHuman framework, its motivations, and key innovations. This helps consolidate understanding of how the components come together.

*How the paper uses it:* The video is an introduction to the WonderHuman method by the first author.

▶ [WonderHuman](https://www.youtube.com/watch?v=bdwUL_RKajA) — Zilong Wang · 1 year ago

## Already in your library

- [MIT 6.S183 A Practical Introduction to Diffusion Models ...](https://www.youtube.com/watch?v=bBA0Ueb80hg) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [How I Understand Diffusion Models](https://www.youtube.com/watch?v=i2qSxMVeVLI) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Wasserstein Distance & Optimal Transport — Fully Explained](https://www.youtube.com/watch?v=88ONbF_b3VE) — also for: PeTeR: Post-Training Robustification of Probabilistic Circuits (YooJung Choi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the WonderHuman paper's core ideas and contributions. The beginner project focuses on reproducing a key mechanism—hallucinating unseen parts using 2D diffusion priors—on static images. The intermediate project implements the paper's Dual-space Optimization method for dynamic 3D human reconstruction from monocular video on a small public dataset, comparing with a baseline. The advanced project extends the method to improve modeling of loose clothing, addressing a stated limitation and exploring future directions.

### Beginner — Hallucinate Unseen Human Body Parts with 2D Diffusion Priors
*Effort: a weekend, ~8 hours*

You build a simple Python script that takes partial human body images (e.g., front view only) and uses a pretrained 2D diffusion generative model (such as Zero-1-to-3) to hallucinate or predict the unseen parts of the body. The output is a completed human figure image showing plausible unseen regions.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of using 2D diffusion model priors to hallucinate unseen human parts, a key contribution of WonderHuman. A professor would see you grasp how generative priors can complement incomplete observations.

**Grounded in:** The key idea of WonderHuman is to hallucinate the unseen parts of the human using the generative prior encoded by large-scale image diffusion models such as Zero123 [17].

**Tech stack:** Python 3.11, PyTorch, diffusers library (for diffusion models)

**Data:** Use publicly available partial human images from COCO or MPII datasets as input; no 3D data required.

**Build it:**

1. Set up Python environment with PyTorch and diffusers library.
2. Load a pretrained 2D diffusion model capable of image-to-image generation or inpainting (e.g., Zero-1-to-3 if available or a similar open diffusion model).
3. Prepare partial human body images by cropping or masking unseen parts.
4. Run the diffusion model to hallucinate the missing/unseen parts.
5. Visualize and save the completed images showing hallucinated regions.

**Ships as:** A GitHub repo with scripts and example images showing partial inputs and diffusion-based hallucinated outputs, plus a README explaining the connection to WonderHuman's use of 2D diffusion priors.

**Stretch goal:** Add a simple quantitative metric comparing hallucinated outputs to ground truth full images using LPIPS or SSIM on a small test set.

### Intermediate — Reimplement Dual-space Optimization for Dynamic 3D Human Reconstruction
*Effort: 2 weekends, ~20 hours*

You implement the core Dual-space Optimization method from WonderHuman that applies Score Distillation Sampling (SDS) loss in both canonical and observation spaces to reconstruct dynamic 3D human avatars from monocular video. You run this on a small public monocular human motion dataset and compare novel view synthesis quality against a baseline without dual-space optimization.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main technical contribution and evaluate its impact quantitatively, demonstrating comprehension of the optimization strategy that ensures visual consistency and realism.

**Grounded in:** We introduce Dual-space Optimization, which performs SDS optimization in both canonical and observation spaces... This approach allows us to more effectively associate features across frames for the reconstruction of unseen parts.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, a 3D Gaussian splatting implementation or simplified renderer

**Data:** Use a small subset of the ZJU-Mocap revised dataset or a publicly available monocular human motion video dataset as a substitute for the paper's data.

**Build it:**

1. Set up environment with PyTorch and necessary 3D visualization tools.
2. Implement a simplified 3D Gaussian splatting pipeline for dynamic human reconstruction.
3. Implement Score Distillation Sampling (SDS) loss and apply it in both canonical and observation spaces as described.
4. Run reconstruction on monocular video sequences and generate novel view synthesis images.
5. Implement a baseline reconstruction using SDS loss only in observation space.
6. Compare quantitative metrics (e.g., PSNR, SSIM) between baseline and dual-space optimization results.

**Ships as:** A GitHub repo with code to run dual-space optimization reconstruction, baseline comparison, quantitative evaluation scripts, and a README explaining the method and results.

**Stretch goal:** Add view selection and pose feature injection modules to improve reconstruction fidelity as per the paper.

### Advanced — Modeling Loose Clothing Dynamics in Dynamic 3D Human Reconstruction
*Effort: 3+ weeks*

You extend the WonderHuman framework by developing a module to better model loose clothing geometry and dynamics, such as dresses or flowing garments, which the paper identifies as a limitation. You integrate this with the existing dual-space optimization pipeline and evaluate improvements in reconstruction quality on challenging sequences with loose attire.

**Why it shows you understood the paper:** This project demonstrates deep understanding of the paper's limitations and future directions by tackling a concrete open problem. It shows capability to innovate beyond the original method and engage in research-level extension.

**Grounded in:** Challenges remain in reconstructing hand parts and loose clothing such as dresses, which can produce artifacts or less realistic results. Future directions include improving modeling of complex clothing geometry and dynamics.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, 3D geometry processing libraries (e.g., PyTorch3D or Open3D)

**Data:** Use monocular video sequences from public datasets containing loose clothing motions, or simulate synthetic sequences with loose garments if unavailable.

**Build it:**

1. Review the WonderHuman dual-space optimization pipeline and implement a baseline reconstruction.
2. Research and implement a geometric or physics-inspired model to represent loose clothing dynamics (e.g., layered Gaussian splats with deformation fields).
3. Integrate the clothing dynamics model into the reconstruction pipeline, modifying optimization to account for clothing motion.
4. Run experiments on sequences with loose clothing and compare reconstruction quality against baseline.
5. Quantitatively and qualitatively evaluate improvements, documenting artifacts reduction and texture consistency.
6. Write detailed documentation explaining the extension, challenges, and results.

**Ships as:** A GitHub repo with extended reconstruction code, experimental results on loose clothing sequences, and a comprehensive README discussing the approach and findings.

**Stretch goal:** Explore adaptive weighting strategies in dual-space optimization to further improve temporal coherence for complex poses and clothing.
