---
title: "838 · Parametric Level-sets Enhanced To Improve Reconstruction (PaLEnTIR) — Eric L. Miller"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-l-miller"
source_hash: "ff936705d493e0310c08eba25e2e02040a32bdf84e1d818ad3dd8a2813fb0566"
sequence: 838
generator: "outreach-garden: managed"
---

# 838 · Parametric Level-sets Enhanced To Improve Reconstruction (PaLEnTIR)

## At a glance

- **Professor:** Eric L. Miller
- **Institution:** Tufts University
- **Paper:** [Parametric Level-sets Enhanced To Improve Reconstruction (PaLEnTIR)](https://arxiv.org/pdf/2204.09815)
- **Authors:** Ege Ozsar, Misha Kilmer, Eric de Sturler, Arvind K. Saibaba, Eric Miller
- **Year:** 2024

## Paper overview

This paper introduces PaLEnTIR, an improved parametric level-set method for reconstructing images composed of piecewise constant objects with multiple contrasts. Unlike previous methods, PaLEnTIR uses a single level-set function to represent multiple contrast objects, employs anisotropic basis functions for better shape representation, and improves numerical stability and optimization speed. The method is validated on various imaging problems including X-ray computed tomography and diffuse optical tomography, showing better accuracy and efficiency than existing techniques.

### Why it matters

**Research problem:** The challenge is to reconstruct piecewise constant images containing multiple objects with different contrast values from limited or noisy data, a common inverse problem in imaging. Existing parametric level-set methods struggle with multi-contrast objects, limited shape expressiveness due to radial basis functions, and numerical conditioning issues that slow optimization.

**Why it matters:** Accurate and efficient reconstruction of multi-contrast piecewise constant images is crucial in many applications such as medical imaging, materials science, and security screening. Improving reconstruction quality and computational efficiency enables better diagnosis, monitoring, and detection in these fields.

**Key contributions:**

- A novel single level-set function formulation that can represent multi-contrast piecewise constant objects without prior knowledge of the number or contrast of objects.
- Introduction of anisotropic basis functions (ABFs) replacing radial basis functions to allow more flexible and detailed shape representation.
- Improved numerical conditioning by fixing basis function centers and bounding expansion coefficients, leading to faster and more stable optimization.
- Parameterization of spatially varying contrast bounds to capture complex contrast distributions.
- Comprehensive validation on linear and nonlinear inverse problems including 2D/3D X-ray CT, deconvolution, and diffuse optical tomography with real and synthetic data.

## About the professor

**Eric L. Miller** — Professor, Electrical and Computer Engineering, Computer Science, Biomedical Engineering, Mathematics, Tufts University.

Research interests: Statistical- and physics-based signal and image modeling and processing, tomographic image formation and object characterization, and inverse problems. Applications explored include human performance assessment, materials science, airport security, medical imaging, environmental monitoring and remediation, unexploded ordnance remediation, and automatic target detection and classification.

### Research links

- [Faculty/profile page](https://engineering.tufts.edu/cs/people/faculty/eric-miller)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Inverse Problems and Level Set Methods
**The paper assumes:** mathematical inverse problems, level set methods, parametric shape representation, nonlinear optimization in imaging
**Already in this field?** Skip this entirely if you already have a solid understanding of inverse problems and level set methods in computational imaging.

To understand the PaLEnTIR paper, which advances parametric level-set methods for inverse imaging problems, it is essential to grasp the fundamentals of inverse problems and the mathematical tools used for image reconstruction. The rigorous course option provides a deep, structured university-level lecture series on inverse problems, ideal for thorough comprehension. The fast track offers a concise, focused playlist with clear explanations suitable for quickly building intuition and foundational knowledge without committing to a full course.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Inverse problems](https://www.youtube.com/playlist?list=PL_PHdwgIZeBPddUwwVh8K6CdEc4CMFpv0) — Robert Nixon · 9 videos · 3.6h across 9 episodes

**Watch only this:** Episodes 2, 3, 5, and 6 (about 1.6 hours total) — focusing on computational models for 2D tomography, regularization, and least squares solutions.

*Why it unblocks this paper:* Robert Nixon's 9-episode playlist provides a concise and clear introduction to inverse problems in imaging, including computational models and least squares solutions, which are foundational to understanding parametric level-set methods like PaLEnTIR.

*If you want all of it:* All 9 episodes, approximately 3.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PaLEnTIR paper, start with foundational knowledge on inverse problems in imaging to grasp the core challenge of reconstructing images from limited or noisy data. Next, study the mathematical framework of parametric level-set methods, which underpin the shape and contrast representation improvements in PaLEnTIR. Then, explore basis functions in shape representation to appreciate the transition from radial to anisotropic basis functions. Finally, focus on the paper's core concept by watching the authors' own detailed seminar talk on PaLEnTIR, which provides direct insights into their novel approach and results.

### Inverse problems in imaging *(prerequisite)*
Inverse problems in imaging form the fundamental context for PaLEnTIR, as the method aims to reconstruct images from indirect, limited, or noisy measurements. Understanding the mathematical and practical challenges of inverse problems is essential to appreciate the motivation and significance of the proposed reconstruction method.

*How the paper uses it:* PaLEnTIR addresses inverse problems by improving reconstruction of piecewise constant images with multiple contrasts from limited or noisy data.

▶ [Lecture 1 on Inverse Problems in Medical Imaging](https://www.youtube.com/watch?v=g8yY7WYabc4) — Inverse Problems in Medical Imaging · 58:54 · 4y ago

### Parametric level-set methods *(prerequisite)*
Parametric level-set methods provide a mathematical framework for representing shapes implicitly via level-set functions parameterized by basis functions. This foundation is crucial to understand how PaLEnTIR innovates by using a single level-set function for multi-contrast objects and improves shape expressiveness and numerical stability.

*How the paper uses it:* PaLEnTIR builds upon parametric level-set methods to represent multiple contrast objects with a single level-set function and anisotropic basis functions.

▶ [RNT | Prof. Misha Kilmer | PaLEnTIR: a Parametric Level Set-based Approach to...](https://www.youtube.com/watch?v=moEURXJDXFs) — INI Seminar Room 2 · 56:39 · 3y ago

### Basis functions in shape representation *(prerequisite)*
Basis functions are the building blocks for parameterizing shapes in level-set methods. Understanding the difference between radial basis functions and anisotropic basis functions is key to appreciating PaLEnTIR's contribution in enhancing shape detail and flexibility by replacing radial basis functions with anisotropic ones.

*How the paper uses it:* PaLEnTIR replaces radial basis functions with anisotropic basis functions to improve shape expressiveness and reconstruction accuracy.

▶ [Linear Regression | Basis Functions](https://www.youtube.com/watch?v=xTo8Q9asVfc) — Per Starke · 8:18 · 5y ago

### Numerical optimization for inverse problems *(prerequisite)*
Efficient numerical optimization techniques are critical for solving inverse problems, especially when using parametric models. Understanding nonlinear least squares and related optimization methods helps in grasping how PaLEnTIR achieves faster convergence and improved numerical conditioning.

*How the paper uses it:* PaLEnTIR employs a nonlinear least squares algorithm (TREGS) for stable and efficient optimization of the parametric level-set model.

▶ [Inverse Problems 10: Newton’s Method (Optimization 4)](https://www.youtube.com/watch?v=39IxEkq4b1c) — Tyler Masthay · 12:01 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the PaLEnTIR paper, start by learning the fundamentals of inverse problems in imaging, which provide the context for reconstructing images from limited or noisy data. Next, grasp the role of basis functions in shape representation, focusing on radial and anisotropic basis functions as used in the paper. Then, study numerical optimization techniques crucial for efficient image reconstruction. Finally, dive into parametric level-set methods and their extension to multi-contrast imaging, which form the core mathematical framework of PaLEnTIR.

### Inverse problems in imaging *(prerequisite)*
Inverse problems involve recovering unknown information (like an image) from indirect or incomplete measurements. This concept is fundamental to understanding why and how image reconstruction methods work, especially when data is noisy or limited.

*How the paper uses it:* PaLEnTIR addresses the inverse problem of reconstructing piecewise constant images with multiple contrasts from limited or noisy data.

▶ [Introduction to Inverse problems](https://www.youtube.com/watch?v=7jQnlharrz0) — International Centre for Theoretical Sciences · 53:15 · 11y ago

### Basis functions in shape representation *(prerequisite)*
Basis functions are building blocks used to represent complex shapes mathematically. Understanding radial basis functions and their anisotropic variants helps explain how shapes can be flexibly modeled and improved in reconstruction algorithms.

*How the paper uses it:* PaLEnTIR replaces radial basis functions with anisotropic basis functions to better capture detailed shapes in image reconstruction.

▶ [#12 Introduction to Radial basis function(RBF)](https://www.youtube.com/watch?v=MwAG5uEp32E) — AI with Aamer · 8:52 · 6y ago

### Numerical optimization for inverse problems *(prerequisite)*
Optimization methods find the best solution that fits the data and model constraints. Nonlinear least squares and related algorithms are key to efficiently solving inverse problems and improving reconstruction quality.

*How the paper uses it:* PaLEnTIR uses a nonlinear least squares algorithm (TREGS) to optimize the parametric level-set representation efficiently.

▶ [Optimization: A Bootcamp for Machine Learning, Inverse Problems, and Control](https://www.youtube.com/watch?v=lPBPbGmw1_4) — Steve Brunton · 22:28 · 3mo ago

### Parametric level-set methods
Parametric level-set methods represent shapes implicitly using functions parameterized by basis functions, enabling flexible shape modeling and reconstruction. This approach is central to PaLEnTIR's method for representing multiple objects and contrasts.

*How the paper uses it:* PaLEnTIR advances parametric level-set methods by introducing a single level-set function for multi-contrast objects and anisotropic basis functions for enhanced shape expressiveness.

▶ [RNT | Prof. Misha Kilmer | PaLEnTIR: a Parametric Level Set-based Approach to...](https://www.youtube.com/watch?v=moEURXJDXFs) — INI Seminar Room 2 · 56:39 · 3y ago

## Already in your library

- [Lecture 16 - Radial Basis Functions](https://www.youtube.com/watch?v=O8CfrnOPtLc) — also for: An Architecture to Support Learning-based Adaptation of Persistent Queries in Mobile Environments (Jamie Payton)
- [Prof. Richard Nickl | Bayesian Inference for Non-linear Inverse Problems](https://www.youtube.com/watch?v=da9e053S-Qk) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)
- [RI Seminar: David Breen : Level Set Models for Computer ...](https://www.youtube.com/watch?v=RDUH2412ZU0) — also for: Snaxels on a Plane (John C. Hart)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the PaLEnTIR method for multi-contrast piecewise constant image reconstruction. Starting with a beginner-level implementation of the smooth transition function concept, advancing to a core reimplementation of PaLEnTIR with anisotropic basis functions on a synthetic dataset, and culminating in an advanced project that extends PaLEnTIR to adaptive basis function placement for improved shape representation in complex geometries, addressing a key future direction of the paper.

### Beginner — Smooth Transition Function for Multi-Contrast Level-Set
*Effort: a weekend, ~8 hours*

You implement a simple 2D parametric level-set representation using a single level-set function with a smooth transition function replacing the binary Heaviside step. You visualize how this smooth function can represent multiple contrast levels in a piecewise constant image with two or three objects of different contrasts.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key innovation of replacing the Heaviside function with a smooth transition function to represent multiple contrasts with a single level-set, a foundational concept of PaLEnTIR.

**Grounded in:** PaLEnTIR replaces the binary Heaviside function with a smooth transition function allowing a single level-set to represent multiple contrasts.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D piecewise constant images with 2-3 objects of different contrast values created programmatically.

**Build it:**

1. Implement a smooth transition function that approximates the Heaviside step but allows gradual transitions.
2. Define a single level-set function parameterized by a few coefficients representing shape.
3. Use the smooth transition function to map the level-set function values to multiple contrast levels.
4. Generate synthetic 2D images with multiple piecewise constant objects and visualize the reconstruction.
5. Plot and compare the smooth transition function output versus the binary Heaviside function.

**Ships as:** A Jupyter notebook showing the smooth transition function implementation, visualizations of multi-contrast level-set representations, and explanations linking to the paper's concept.

**Stretch goal:** Add interactive sliders to adjust level-set parameters and observe changes in multi-contrast reconstruction in real time.

### Intermediate — PaLEnTIR Core Implementation on Synthetic 2D Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core PaLEnTIR method from the paper, including the single level-set function with smooth transition, anisotropic basis functions (ABFs) for shape representation, and bounded expansion coefficients for numerical stability. You apply it to reconstruct synthetic 2D multi-contrast piecewise constant images and compare results against a baseline using radial basis functions (RBF) PaLS.

**Why it shows you understood the paper:** This project shows you can implement the paper's main algorithmic contributions and verify their advantages in shape expressiveness and numerical conditioning by reproducing key metrics such as reconstruction error and convergence speed.

**Grounded in:** Introduction of anisotropic basis functions (ABFs) replacing radial basis functions to allow more flexible and detailed shape representation; improved numerical conditioning by fixing basis function centers and bounding expansion coefficients.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D piecewise constant images with multiple objects and contrasts generated programmatically.

**Build it:**

1. Implement anisotropic basis functions (ellipsoidal shapes) and parameterize their centers and orientations.
2. Build the single level-set function as a linear combination of ABFs with bounded coefficients.
3. Implement the smooth transition function for multi-contrast representation.
4. Set up a nonlinear least squares optimization (e.g., using SciPy's least_squares) to fit the level-set parameters to synthetic data.
5. Implement a baseline using radial basis functions (RBF) PaLS for comparison.
6. Evaluate reconstruction accuracy (e.g., MSE) and convergence behavior for both methods.

**Ships as:** A Jupyter notebook or Python scripts demonstrating PaLEnTIR reconstruction on synthetic data, comparison plots of shape recovery and optimization convergence against RBF PaLS baseline, with explanations.

**Stretch goal:** Extend the implementation to handle noisy data and report robustness metrics similar to the paper.

### Advanced — Adaptive Basis Function Placement for PaLEnTIR in 2D
*Effort: 3+ weeks*

You extend the PaLEnTIR method by implementing an adaptive refinement strategy that adds anisotropic basis functions dynamically in regions with complex geometry to improve reconstruction accuracy. You test this on synthetic 2D multi-contrast images with complex shapes and compare reconstruction quality and parameter efficiency against uniform basis function placement.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by enhancing PaLEnTIR's adaptability and shape representation power, demonstrating your ability to innovate beyond the original method and engage with open research challenges.

**Grounded in:** Incorporating adaptive refinement strategies to place additional basis functions in regions with complex geometry for improved accuracy (future direction).

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D piecewise constant images with complex multi-contrast shapes generated programmatically.

**Build it:**

1. Build upon the intermediate PaLEnTIR implementation with fixed uniform ABF placement.
2. Develop a criterion to detect regions of high reconstruction error or geometric complexity.
3. Implement an adaptive algorithm to add new anisotropic basis functions in these regions.
4. Update the optimization routine to include new basis functions and re-optimize parameters.
5. Evaluate reconstruction accuracy, parameter count, and convergence speed compared to uniform ABF placement.
6. Document the impact of adaptive refinement on shape detail recovery and numerical conditioning.

**Ships as:** A repository with code and notebooks showing adaptive basis function placement improving PaLEnTIR reconstructions on complex synthetic shapes, with quantitative and qualitative comparisons and detailed README.

**Stretch goal:** Explore extending adaptive placement to 3D synthetic data or real 2D imaging data if available.
