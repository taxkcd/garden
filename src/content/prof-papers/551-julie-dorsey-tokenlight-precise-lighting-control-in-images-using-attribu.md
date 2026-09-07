---
title: "551 · TokenLight: Precise Lighting Control in Images using Attribute Tokens — Julie Dorsey"
date: 2026-09-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-julie-dorsey"
source_hash: "92a08ecaffd7f4caeda02267718b4cc61aa6167f65db9e5e2d066e63d5712dcc"
sequence: 551
generator: "outreach-garden: managed"
---

# 551 · TokenLight: Precise Lighting Control in Images using Attribute Tokens

## At a glance

- **Professor:** Julie Dorsey
- **Institution:** Yale University
- **Paper:** [TokenLight: Precise Lighting Control in Images using Attribute Tokens](https://arxiv.org/pdf/2604.15310v2)
- **Authors:** Sumit Chaturvedi, Yannick Hold-Geoffroy, Mengwei Ren, Jingyuan Liu, He Zhang, Yiqun Mei, Julie Dorsey, Zhixin Shu
- **Year:** 2026

## Paper overview

This paper introduces TokenLight, a novel method that allows precise and continuous control over lighting in images by encoding lighting attributes as tokens. It enables users to add, move, and adjust virtual lights in 2D images with 3D spatial awareness, producing photorealistic relighting effects without needing explicit 3D scene reconstruction.

### Why it matters

**Research problem:** Existing image relighting methods either lack precise, interpretable, and spatially localized lighting control or require complex 3D scene reconstruction, which is challenging especially from a single image. There is a need for a representation that combines the intuitive control of 3D lighting tools with the accessibility of 2D image editing.

**Why it matters:** Precise lighting control in images is crucial for creative workflows in photography, visual effects, and mixed reality. It enhances aesthetic quality and visual consistency but is difficult to achieve post-capture with existing tools, limiting creative flexibility.

**Key contributions:**

- Formulation of precise and continuous lighting control as an end-to-end image generation problem using diffusion models.
- Introduction of a compact, physically meaningful lighting-attribute token representation unifying various relighting tasks.
- Demonstration of state-of-the-art performance on multiple relighting benchmarks, including spatial lighting precision and visible light fixture control.
- A scene-agnostic 3D coordinate system for lighting attributes that preserves lighting behavior under similarity transforms.
- Training on a large-scale synthetic dataset with additional real-world captures to improve realism and generalization.

## About the professor

**Julie Dorsey** — Frederick W. Beinecke Professor of Computer Science, Computer Science, Yale University.

Research interests: photorealistic image synthesis, material and texture models, illustration techniques, and interactive visualization of complex scenes, with an application to urban environments

### Research links

- [Faculty/profile page](https://engineering.yale.edu/research-and-faculty/faculty-directory/julie-dorsey)
- [Professor website](https://graphics.cs.yale.edu/people/julie-dorsey)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** diffusion models in computer vision
**The paper assumes:** probabilistic diffusion models, generative image modeling, conditional image synthesis
**Already in this field?** Skip this entirely if you already understand the fundamentals of diffusion models and their application in image generation.

This background focuses on diffusion models in computer vision, essential for understanding TokenLight's core method of conditional image generation using a diffusion transformer. The rigorous course option provides a deep, structured university-level exploration of diffusion models, including architectures and training, while the fast track offers a concise, accessible introduction to the key concepts and applications of diffusion models. Choose the course for comprehensive mastery or the fast track for a quick yet solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1-6, about 10.5 hours — covering diffusion fundamentals, score matching, flow matching, latent space & guidance, architectures, and model training, which are critical to grasp the paper's diffusion transformer model and training methodology.

*Why it unblocks this paper:* Stanford CME296 is a recent, authoritative university course explicitly covering diffusion models and diffusion transformers, directly matching the paper's method. It includes detailed lectures on diffusion, score matching, architectures, and training, providing the rigorous foundation needed to fully understand the TokenLight approach.

*If you want all of it:* All 8 lectures, about 14 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Diffusion Models](https://www.youtube.com/playlist?list=PLyXDCTF4yPcSNIvlUmJPYC8s2oskmaFZB) — AI Focus · 17 videos · 1.4h across 17 episodes

**Watch only this:** First 6 episodes, about 24 minutes — covering score matching, denoising diffusion models, implicit models, and conditional diffusion, which give a compact yet sufficient background on diffusion model basics and their use in image generation.

*Why it unblocks this paper:* The AI Focus 'Diffusion Models' playlist offers a well-produced, concise series of short videos that introduce key concepts and applications of diffusion models in computer vision. It provides a quick, intuition-driven overview suitable for readers needing a rapid but solid understanding of diffusion models relevant to the paper.

*If you want all of it:* All 17 episodes, about 1.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand TokenLight, start with foundational knowledge on diffusion transformer models, which underpin the paper's generative approach. Next, explore image relighting techniques and 3D lighting representation in 2D images to grasp the challenges and context of spatially localized lighting control without explicit 3D reconstruction. Then, study token-based attribute encoding to comprehend how lighting attributes are compactly represented. Finally, focus on the core concept of the paper via the authors' own talk to gain direct insight into their novel method.

### Diffusion transformer models *(prerequisite)*
This section covers the core generative model architecture enabling TokenLight's conditional image synthesis. Understanding diffusion models and their integration with transformer architectures is essential to grasp how TokenLight performs precise lighting control through image generation.

*How the paper uses it:* TokenLight formulates relighting as a conditional image generation task using a diffusion transformer model conditioned on tokenized lighting attributes.

▶ [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 8 - Trending Topics](https://www.youtube.com/watch?v=oyLUvz9nR6E) — Stanford Online · 1:49:34 · 3 months ago

### Image relighting techniques *(prerequisite)*
This section provides fundamental background on relighting methods and the challenges TokenLight addresses, such as spatial lighting precision and photorealistic relighting without explicit 3D reconstruction. It situates TokenLight within the broader context of image-based relighting research.

*How the paper uses it:* TokenLight advances image relighting by enabling precise and continuous control over lighting attributes without requiring 3D scene reconstruction.

▶ [De-rendering and Re-rendering the World](https://www.youtube.com/watch?v=aGuhCtIPbzI) — Silicon Valley ACM SIGGRAPH · 1:19:11 · Streamed 9 months ago

### 3D lighting representation in 2D images *(prerequisite)*
Understanding how 3D lighting can be represented and controlled in 2D images without explicit 3D reconstruction is crucial. This section explores spatially localized lighting control and the physical principles behind light placement and rendering in image space.

*How the paper uses it:* TokenLight uses a scene-agnostic camera-relative 3D coordinate system for lighting attributes, enabling precise spatial control without explicit inverse rendering or 3D reconstruction.

▶ [Rendering Lecture 01 - Light](https://www.youtube.com/watch?v=QgzqCLXX1OQ) — Computer Graphics at TU Wien · 26:35 · 5 years ago

### Token-based attribute encoding *(prerequisite)*
This section explains the key technique for encoding lighting attributes compactly and meaningfully as tokens, which is central to TokenLight's approach. Understanding tokenization and representation learning helps clarify how lighting parameters are embedded for conditioning the diffusion model.

*How the paper uses it:* TokenLight introduces a compact, physically meaningful lighting-attribute token representation unifying various relighting tasks.

▶ [Deep Learning Decall Fall 2017 Day 6: Autoencoders and Representation Learning](https://www.youtube.com/watch?v=R3DNKE3zKFk) — Machine Learning at Berkeley · 1:20:51 · 8 years ago

### TokenLight paper talk *(the paper's own talk)*
This is the authors' own talk presenting their novel lighting control method, providing direct insight into the design, implementation, and evaluation of TokenLight. It is the most authoritative and focused resource for understanding the paper's contributions and results.

*How the paper uses it:* Direct insight from the authors on their novel lighting control method.

▶ [[ECCV-2024]: PreciseControl: Enhancing T2I Diffusion Models with Fine-Grained Attribute Control](https://www.youtube.com/watch?v=t9GJT1HnQhU) — Rishubh Parihar · 10:09 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand TokenLight, starting with the basics of physically based rendering and image relighting techniques to grasp how lighting affects images. Then it covers 3D lighting representation in 2D images and token-based attribute encoding to build intuition on spatial and compact lighting control. Finally, it presents diffusion transformer models as the core generative architecture enabling TokenLight's precise lighting manipulation.

### Physically based rendering datasets *(prerequisite)*
Learn the fundamentals of physically based rendering (PBR), which models how light interacts with surfaces to create realistic images. Understanding PBR helps you appreciate how synthetic datasets for training lighting models are generated with accurate light-material interactions.

*How the paper uses it:* TokenLight trains on a large-scale synthetic dataset rendered with path tracing, relying on physically based rendering principles to simulate diverse lighting conditions.

▶ [Computer Graphics Tutorial - PBR (Physically Based Rendering)](https://www.youtube.com/watch?v=RRE-F57fbXw) — Victor Gordan · 13:40 · 5 years ago

### Image relighting techniques *(prerequisite)*
Explore how image relighting methods work to change the lighting in images after they are captured, including challenges like spatially localized control and photorealism. This background sets the stage for understanding what TokenLight improves upon.

*How the paper uses it:* TokenLight addresses limitations of existing relighting methods by enabling precise, interpretable, and spatially localized lighting edits without explicit 3D reconstruction.

▶ [Image Based Relighting Using Neural Networks](https://www.youtube.com/watch?v=mX5aI2lr7KQ) — Microsoft Research · 9 years ago

### 3D lighting representation in 2D images *(prerequisite)*
Understand how lighting can be represented in 3D space relative to a camera, even when working with 2D images. This concept is key to controlling light placement and effects without reconstructing full 3D scenes.

*How the paper uses it:* TokenLight uses a scene-agnostic camera-relative 3D coordinate system to place virtual lights precisely in 2D images with 3D spatial awareness.

▶ [3D Lighting Explained: The ONLY Tutorial You Need / DaVinci Resolve Tutorial](https://www.youtube.com/watch?v=2-QbenW_2L8) — Aless Mignone · 12:28 · 8 months ago

### Token-based attribute encoding *(prerequisite)*
Learn how complex attributes like lighting parameters can be encoded compactly as tokens for input into transformer models. This encoding enables continuous, interpretable control over multiple lighting factors.

*How the paper uses it:* TokenLight introduces attribute tokens encoding intensity, color, diffuse level, and 3D position, forming the input conditioning for its diffusion transformer model.

▶ [Deep Learning Decall Fall 2017 Day 6: Autoencoders and Representation Learning](https://www.youtube.com/watch?v=R3DNKE3zKFk) — Machine Learning at Berkeley · 1:20:51 · 8 years ago

### Diffusion transformer models *(prerequisite)*
Get an intuitive overview of diffusion models combined with transformer architectures for image generation. This knowledge explains how TokenLight generates relit images conditioned on lighting tokens.

*How the paper uses it:* TokenLight formulates relighting as a conditional image generation task using a diffusion transformer conditioned on lighting attribute tokens.

▶ [Diffusion in Transformers Tutorial and Explainer](https://www.youtube.com/watch?v=L45iAba2DAw) — Richard Aragon · 15:51 · 1 year ago

### TokenLight paper talk *(the paper's own talk)*
Hear directly from the authors about their novel approach to precise lighting control in images using attribute tokens and diffusion transformers. This talk summarizes the method, contributions, and results.

*How the paper uses it:* This video provides direct insight into TokenLight’s design and capabilities from the research team.

▶ [[ECCV-2024]: PreciseControl: Enhancing T2I Diffusion Models with Fine-Grained Attribute Control](https://www.youtube.com/watch?v=t9GJT1HnQhU) — Rishubh Parihar · 10:09 · 1 year ago

## Already in your library

- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [Stanford CS25: V5 I Transformers in Diffusion Models for Image Generation and Beyond](https://www.youtube.com/watch?v=vXtapCFctTI) — also for: NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models (Pinar Yanardag)
- [11: Generative AI – Text-to-Image Models](https://www.youtube.com/watch?v=NQBhhRG-Pe4) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 1 - Diffusion](https://www.youtube.com/watch?v=tr-CUpw--ck) — also for: Noise Schedule Design for Diffusion Models: An Optimal Control Perspective (Weina Wang)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Transformers & Diffusion LLMs: What's the connection?](https://www.youtube.com/watch?v=SFi9KsnidNc) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of TokenLight's approach to precise lighting control in images. The beginner project focuses on reproducing a core lighting attribute token concept with familiar tools. The intermediate project involves reimplementing the paper's core diffusion transformer method on a simplified dataset to evaluate spatial lighting control. The advanced project extends TokenLight toward video relighting, addressing a key limitation by exploring temporal consistency and light persistence.

### Beginner — Interactive Lighting Attribute Token Editor
*Effort: a weekend, ~8 hours*

You build a simple web-based tool that lets users manipulate lighting attribute tokens—intensity, color, and 3D position—in a 2D image canvas. The app visualizes how changing these tokens affects a basic lighting overlay on the image, simulating continuous and spatially localized lighting control.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution of encoding lighting attributes as tokens for precise, continuous control without 3D reconstruction. A professor would see you understand the token representation and spatial placement concepts.

**Grounded in:** From key contributions: 'Introduction of a compact, physically meaningful lighting-attribute token representation unifying various relighting tasks.'

**Tech stack:** TypeScript, React, CSS

**Data:** Use a single indoor image from a public domain or your own photo to demonstrate lighting edits.

**Build it:**

1. Create a React app with a 2D image canvas displaying a fixed indoor scene.
2. Implement UI controls to adjust lighting attribute tokens: intensity (slider), color (color picker), and 3D position (x, y, z inputs relative to camera).
3. Visualize the effect of these tokens as colored light overlays or simple shading on the image, approximating lighting influence spatially.
4. Allow adding, moving, and removing multiple light tokens with independent controls.
5. Document how token changes correspond to lighting effects, referencing the paper's token design.

**Ships as:** A GitHub repo with a React app demonstrating interactive lighting attribute token manipulation on a 2D image, with a README explaining the token concept and its relation to TokenLight.

**Stretch goal:** Add a simple animation showing continuous interpolation of lighting attributes to demonstrate continuous control.

### Intermediate — Diffusion Transformer for Precise Image Relighting
*Effort: 2 weekends, ~20 hours*

You implement a simplified diffusion transformer model conditioned on lighting attribute tokens to perform image relighting on a small synthetic indoor dataset. You compare your model's relighting quality against a baseline environment-map-based relighting method using PSNR and SSIM metrics.

**Why it shows you understood the paper:** This project shows you can reimplement the core TokenLight method—formulating relighting as conditional image generation with tokenized lighting attributes—and evaluate spatial lighting precision, a key paper result.

**Grounded in:** From approach and key results: 'TokenLight formulates relighting as a conditional image generation task using a diffusion transformer model conditioned on tokenized lighting attributes...' and 'TokenLight outperforms prior environment-map-based relighting methods on synthetic benchmarks in PSNR, SSIM, and LPIPS metrics.'

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Create a small synthetic dataset by rendering a few indoor scenes with varied lighting using a path-tracing renderer or use publicly available synthetic indoor datasets as a substitute.

**Build it:**

1. Prepare a small synthetic dataset of indoor images with ground-truth lighting annotations (intensity, color, 3D position tokens).
2. Implement a diffusion transformer model conditioned on lighting attribute tokens to generate relit images.
3. Train the model on the synthetic dataset with varied lighting conditions.
4. Implement a simple baseline relighting method using environment maps or fixed lighting.
5. Evaluate and compare your model and baseline on PSNR and SSIM metrics.
6. Write a report summarizing the implementation, results, and relation to TokenLight.

**Ships as:** A GitHub repo with code for training and evaluating a diffusion transformer relighting model, baseline comparison, and a README with results and discussion.

**Stretch goal:** Incorporate a scene-agnostic camera-relative coordinate system for 3D light placement as in the paper.

### Advanced — Extending TokenLight for Temporally Consistent Video Relighting
*Effort: 3+ weeks*

You develop an extension of the TokenLight approach to video relighting by incorporating temporal consistency and light persistence across frames. You design a token-based lighting representation that evolves over time and implement a diffusion transformer with temporal conditioning to relight short video clips with moving cameras or objects.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction stated in the paper—video relighting with temporal consistency—demonstrating deep comprehension and ability to extend TokenLight's method to dynamic scenes.

**Grounded in:** From limitations and future directions: 'Current method does not address video relighting challenges such as light persistence across frames with moving cameras or objects.' and 'Extending the lighting representation and model to video relighting with temporal consistency and light persistence.'

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Use short indoor video clips with moving lights or objects, either captured yourself or from public datasets of indoor scenes; synthetic video data can be generated by rendering sequences with varied lighting.

**Build it:**

1. Design a temporal extension of the lighting attribute token representation to encode lighting changes over time.
2. Implement a diffusion transformer model conditioned on temporal sequences of lighting tokens and video frames.
3. Prepare or generate a small video dataset with ground-truth lighting variations and annotations.
4. Train the model to relight video frames with consistent lighting effects and light persistence.
5. Evaluate temporal consistency qualitatively and quantitatively (e.g., frame-to-frame lighting stability).
6. Document challenges, design decisions, and relation to TokenLight's limitations and future work.

**Ships as:** A GitHub repo with code and documentation for temporally consistent video relighting using tokenized lighting attributes and diffusion transformers, including sample videos and evaluation.

**Stretch goal:** Explore autoregressive generation methods for interactive video relighting as suggested in the paper.
