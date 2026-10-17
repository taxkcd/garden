---
title: "692 · Geometry in Style: 3D Stylization via Surface Normal Deformation — Rana Hanocka"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rana-hanocka"
source_hash: "b46ccde4def9a0348a3786fab20f7bf03871f876cf9438899a5e6205446495eb"
sequence: 692
generator: "outreach-garden: managed"
---

# 692 · Geometry in Style: 3D Stylization via Surface Normal Deformation

## At a glance

- **Professor:** Rana Hanocka
- **Institution:** University of Chicago
- **Paper:** [Geometry in Style: 3D Stylization via Surface Normal Deformation](https://arxiv.org/pdf/2503.23241)
- **Authors:** Nam Anh Dinh, Itai Lang, Oded Stein, Hyunwoo Kim, Rana Hanocka
- **Year:** 2025

## Paper overview

This paper presents Geometry in Style, a method to deform 3D triangle meshes into new stylized shapes guided by text prompts. The method preserves the original shape's identity while applying expressive geometric stylizations by optimizing target surface normals and using a differentiable As-Rigid-As-Possible (dARAP) deformation layer. It leverages pretrained text-to-image diffusion models to guide the deformation without requiring 3D supervision data.

### Why it matters

**Research problem:** Existing learning-based 3D shape deformation methods either make small surface-level changes that are insufficient for expressive stylization or produce large deformations that destroy the original shape's identity. The challenge is to generate large, identity-preserving deformations guided by semantic text prompts.

**Why it matters:** 3D shape stylization is important for computer graphics, design, and AI-driven content creation. Achieving expressive yet identity-preserving deformations enables more intuitive and flexible 3D modeling, allowing users to apply diverse styles to various shapes without losing their semantic structure.

**Key contributions:**

- Introduction of dARAP, a differentiable neural network layer for mesh deformation via target normals.
- Geometry in Style method for identity-preserving mesh stylization driven by user text prompts.
- Use of a semantic visual loss from pretrained text-to-image diffusion models to guide deformation.
- Demonstration of expressive, part-aware stylizations that preserve shape identity across diverse shapes and styles.
- Quantitative and qualitative comparisons showing improved identity preservation and stylization fidelity over recent baselines.

## About the professor

**Rana Hanocka** — Assistant Professor, Computer Science, University of Chicago.

Research interests: building artificial intelligence for 3D data, computer graphics, machine learning, computer vision

### Research links

- [Faculty/profile page](http://people.cs.uchicago.edu/~ranahanocka)
- [Lab website](https://3dl.cs.uchicago.edu/)
- [GitHub](https://ranahanocka.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** differential geometry of surfaces
**The paper assumes:** differential geometry of surfaces, discrete differential geometry, mesh Laplacians, surface normal vectors
**Already in this field?** Skip this entirely if you already have a solid understanding of differential geometry concepts applied to 3D meshes and surface deformation.

To fully understand the Geometry in Style paper, a solid grasp of differential geometry of surfaces is essential, especially concepts like surface normals, mesh deformation, and the cotangent Laplacian operator. The rigorous course option offers a deep, structured university-level treatment of these topics, while the fast track provides a concise, intuition-driven introduction to discrete differential geometry concepts relevant to mesh processing and deformation. Choose the rigorous course for a thorough mathematical foundation or the fast track for a quicker conceptual overview that still covers the core ideas.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Discrete Differential Geometry best explanation](https://www.youtube.com/playlist?list=PLqinEaadXCHb9q0E8_8cYLpFWz3Np66FR) — RANDOM NEURAL MONK · 16 videos · 4.5h across 16 episodes

**Watch only this:** Episodes 1 (Discrete Differential Geometry - Helping Machines (and People) Think Clearly about Shape), 2 (Discrete Differential Geometry and Developability), 3 (Robust Fairing via Conformal Curvature Flow), and 6 (Globally Optimal Direction Fields), about 1 hour total — these episodes introduce key discrete geometry concepts and tools used in mesh stylization.

*Why it unblocks this paper:* The 'Discrete Differential Geometry best explanation' playlist offers a concise, visual, and intuitive introduction to discrete differential geometry concepts, including curvature, developability, and mesh processing techniques, providing a practical understanding relevant to the paper's mesh deformation approach.

*If you want all of it:* All 16 episodes, about 4.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Geometry in Style paper, start with foundational concepts including surface normals in geometry processing and 3D mesh deformation fundamentals, as these underpin the method's representation and deformation mechanics. Next, study differentiable ARAP deformation to grasp the core technical innovation enabling neural optimization of mesh deformation. Then, explore text-to-image diffusion models and semantic visual loss to understand the semantic guidance mechanism without 3D supervision. Finally, focus on the paper's core concept with the authors' own talk or the closest available academic-level video to gain direct insight into their novel 3D stylization approach.

### Surface normals in geometry processing *(prerequisite)*
Surface normals are fundamental in guiding the deformation and stylization process in the paper, as the method optimizes target normals per vertex neighborhood to drive expressive yet identity-preserving mesh changes. Understanding how normals are computed and used in geometry processing provides essential background for the paper's approach.

*How the paper uses it:* The method represents mesh deformation via target normal vectors per vertex neighborhood to guide stylization.

▶ [Julie Digne, Shape Analysis: From local to non-local information and learning](https://www.youtube.com/watch?v=fmypboRzQfw) — CGGC Seminar · 50:41 · 5y ago

### 3D mesh deformation fundamentals *(prerequisite)*
A solid grasp of 3D mesh deformation basics is crucial to understand how the paper manipulates triangle meshes and preserves shape identity. This includes knowledge of mesh representations, deformation constraints, and classical deformation techniques.

*How the paper uses it:* The paper deforms 3D triangle meshes while preserving shape identity using mesh deformation techniques.

▶ [Embedded Deformation for Shape Manipulation](https://www.youtube.com/watch?v=BEEN7Dmo9vI) — GCM EPFL · 5:09 · 13y ago

### Differentiable ARAP deformation *(prerequisite)*
The differentiable As-Rigid-As-Possible (dARAP) deformation layer is the core technical contribution enabling efficient gradient-based optimization of mesh deformation guided by target normals. Understanding ARAP and its differentiable adaptation is key to grasping how the method achieves high-quality stylizations.

*How the paper uses it:* dARAP is a differentiable neural network layer adapted from classical ARAP that enables efficient deformation optimization.

▶ [INF585 - Surface Deformation](https://www.youtube.com/watch?v=WzPRKCi2MeE) — damien rohmer · 25:21 · 5y ago

### Text-to-image diffusion models *(prerequisite)*
Text-to-image diffusion models provide the semantic visual loss that guides the deformation without requiring explicit 3D supervision. Understanding how these models generate images conditioned on text and how their latent representations can be used for guidance is essential.

*How the paper uses it:* The method uses a pretrained text-to-image diffusion model for semantic guidance without 3D supervision.

▶ [Deep Learning Foundations by Soheil Feizi : Latent Text-to-Image Diffusion Models](https://www.youtube.com/watch?v=bWPzUxFW70M) — Soheil Feizi · 30:44 · 2y ago

### Semantic visual loss for 3D shape editing *(prerequisite)*
Semantic visual loss functions align the mesh deformation with the semantics of the user-provided text prompt, enabling meaningful stylizations. Understanding how such losses are formulated and used in 3D editing contexts is important for appreciating the paper's optimization pipeline.

*How the paper uses it:* The deformation is optimized using a semantic visual loss derived from a pretrained text-to-image diffusion model.

▶ [Compactness, Symmetry, and Functionality: An Evolution to 3D Shape Understanding and Representation](https://www.youtube.com/watch?v=gKvxk-Krops) — 3DGV Seminar · 1:35:10 · Streamed 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Geometry in Style paper, start by learning the fundamentals of 3D mesh deformation and surface normals, which are essential for grasping how shapes are represented and manipulated. Next, explore text-to-image diffusion models to comprehend how semantic guidance is applied without 3D supervision. Then, study the differentiable ARAP deformation method that enables neural network-based mesh optimization. Finally, connect these concepts to the paper's core contribution: the Geometry in Style method that uses target normals and semantic visual loss for identity-preserving stylization.

### 3D mesh deformation fundamentals *(prerequisite)*
This section covers the basics of how 3D shapes represented as meshes can be deformed or manipulated. Understanding mesh deformation techniques helps you grasp how vertex positions change to achieve desired shape edits while preserving geometric properties.

*How the paper uses it:* The paper builds on mesh deformation principles to apply stylizations that preserve shape identity.

▶ [Embedded Deformation for Shape Manipulation](https://www.youtube.com/watch?v=BEEN7Dmo9vI) — GCM EPFL · 5:09 · 13y ago

### Surface normals in geometry processing *(prerequisite)*
Surface normals are vectors perpendicular to a surface at each point and are crucial for understanding shape orientation and shading. Learning about normals helps you understand how the paper uses target normals to guide mesh deformation.

*How the paper uses it:* The method optimizes target surface normals per vertex neighborhood to drive stylization.

▶ [3D Basics - What are Normals?](https://www.youtube.com/watch?v=hkTjreiookM) — CG Masters · 12:15 · 6y ago

### Text-to-image diffusion models *(prerequisite)*
Text-to-image diffusion models generate images conditioned on text prompts by iteratively refining noisy images. Understanding these models explains how semantic guidance is extracted to steer 3D shape deformation without explicit 3D data.

*How the paper uses it:* The paper leverages pretrained text-to-image diffusion models to provide semantic visual loss for deformation optimization.

▶ [Text to Image Diffusion AI Model from scratch - Explained one line of code at a time!](https://www.youtube.com/watch?v=w8YQcEd77_o) — Neural Breakdown with AVB · 24:58 · 2y ago

### Differentiable ARAP deformation
As-Rigid-As-Possible (ARAP) deformation is a technique that preserves local shape rigidity during mesh deformation. The differentiable ARAP (dARAP) layer adapts this method to be used within neural networks, enabling gradient-based optimization of mesh vertices.

*How the paper uses it:* dARAP is the core neural network layer enabling efficient, identity-preserving mesh deformation in the paper.

▶ [As-Rigid-As-Possible Shape Manipulation](https://www.youtube.com/watch?v=xkSu81GAfYM) — tabletopresearch201 · 5:00 · 16y ago

## Already in your library

- [11: Generative AI – Text-to-Image Models](https://www.youtube.com/watch?v=NQBhhRG-Pe4) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Text-to-image generation explained](https://www.youtube.com/watch?v=9YrYDqhJdPw) — also for: Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective (Cheng Zhang)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of the Geometry in Style paper. Starting with a basic exploration of surface normals and mesh deformation, you then implement the differentiable ARAP deformation guided by semantic loss, and finally extend the method to address a stated limitation by experimenting with localized stylization. Each project builds on your existing skills while introducing new concepts relevant to the paper's contributions.

### Beginner — Surface Normal Visualization and Basic Mesh Deformation
*Effort: a weekend, ~8 hours*

You build a simple interactive 3D viewer that loads a triangle mesh, computes and visualizes per-vertex surface normals, and allows basic manual deformation by adjusting vertex positions. This project helps you understand how surface normals relate to mesh geometry and how small deformations affect them.

**Why it shows you understood the paper:** A professor would see that you grasp the fundamental geometric concepts of surface normals and their role in mesh deformation, which is central to the paper's approach.

**Grounded in:** The authors represent mesh deformation via target normal vectors per vertex neighborhood.

**Tech stack:** Python 3.11, PyMesh or Trimesh, PyOpenGL or matplotlib for 3D visualization, Jupyter Notebook

**Data:** Use a publicly available simple manifold mesh such as the Stanford Bunny or a basic sphere mesh from Trimesh.

**Build it:**

1. Load a triangle mesh using a Python geometry library.
2. Compute per-vertex surface normals and visualize them as arrows.
3. Implement a simple UI or script to manually move vertices and update normals.
4. Visualize the changes in normals after deformation.
5. Document the relationship between vertex movement and normal changes.

**Ships as:** A Jupyter notebook or small Python app demonstrating mesh loading, normal computation, visualization, and manual deformation effects.

**Stretch goal:** Add a simple energy term to preserve local rigidity during manual deformation.

### Intermediate — Reimplementation of Differentiable ARAP with Text-Guided Stylization
*Effort: 2 weekends, ~20 hours*

You implement the core dARAP layer as described in the paper, enabling mesh deformation via target surface normals. You integrate a pretrained text-to-image diffusion model (e.g., Stable Diffusion) to compute a semantic visual loss guiding the deformation. You run stylization on a simple mesh and compare identity preservation metrics against a naive baseline deformation.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main technical contribution and apply semantic guidance from diffusion models, showing deep comprehension of the method and its optimization pipeline.

**Grounded in:** Introduction of dARAP, a differentiable neural network layer for mesh deformation via target normals, and use of a semantic visual loss from pretrained text-to-image diffusion models to guide deformation.

**Tech stack:** Python 3.11, PyTorch, Trimesh, Stable Diffusion pretrained model (via HuggingFace Diffusers)

**Data:** Use a simple manifold mesh such as the Stanford Bunny or a publicly available man-made object mesh from ShapeNet as a substitute for the paper's data.

**Build it:**

1. Implement the dARAP deformation layer following the paper's local-global optimization scheme.
2. Load a pretrained text-to-image diffusion model and implement the Cascaded Score Distillation loss.
3. Set up an optimization loop to deform the mesh by optimizing target normals guided by the semantic loss.
4. Run stylization on a test mesh with a user-specified text prompt.
5. Compute and report triangle area ratio and CLIP similarity metrics comparing your method to a baseline (e.g., naive vertex displacement).

**Ships as:** A Python repository with scripts to run text-driven mesh stylization using dARAP and report quantitative metrics.

**Stretch goal:** Add user control over deformation strength via a hyperparameter and visualize its effect.

### Advanced — Localized Stylization via Unsupervised Mesh Segmentation and dARAP Extension
*Effort: 3+ weeks*

You extend the dARAP deformation pipeline to support localized stylization by integrating an unsupervised mesh segmentation method (e.g., spectral clustering on mesh Laplacian). You allow text-guided stylization to be applied selectively to segments, addressing the paper's future direction on localized geometric stylization. You evaluate the effect on stylization quality and identity preservation.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, showing your ability to innovate beyond the original method and handle more complex mesh processing challenges while maintaining semantic guidance.

**Grounded in:** Future work includes incorporating unsupervised segmentation for localized geometric stylization.

**Tech stack:** Python 3.11, PyTorch, Trimesh, Scikit-learn (for clustering), Stable Diffusion pretrained model

**Data:** Use publicly available manifold meshes with clear part segmentation (e.g., ShapeNet objects) to demonstrate localized stylization.

**Build it:**

1. Implement or integrate an unsupervised mesh segmentation algorithm based on spectral clustering or mesh Laplacian eigenvectors.
2. Modify the dARAP deformation pipeline to apply target normal optimization selectively to chosen segments.
3. Allow user input or text prompt to specify which parts to stylize.
4. Run experiments showing localized stylizations and measure identity preservation and stylization fidelity.
5. Document challenges and limitations encountered in localized stylization.

**Ships as:** A codebase and report demonstrating localized text-driven mesh stylization with segmentation and dARAP, including qualitative and quantitative results.

**Stretch goal:** Experiment with interactive UI controls for segment selection and stylization strength per segment.
