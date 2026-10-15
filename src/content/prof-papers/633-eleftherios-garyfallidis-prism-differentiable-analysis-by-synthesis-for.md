---
title: "633 · PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI — Eleftherios Garyfallidis"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eleftherios-garyfallidis"
source_hash: "23ff0a984c0e6149e23913b3c34ac541f48a7de71df8dc1c9876a691410a17d5"
sequence: 633
generator: "outreach-garden: managed"
---

# 633 · PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI

## At a glance

- **Professor:** Eleftherios Garyfallidis
- **Institution:** Indiana University
- **Paper:** [PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI](https://arxiv.org/pdf/2604.00250v1)
- **Authors:** Mohamed Abouagour, Atharva Shah, Eleftherios Garyfallidis
- **Year:** 2026

## Paper overview

This paper presents PRISM, a new computational method to analyze diffusion MRI data by fitting a detailed model of brain tissue microstructure across spatial patches. It improves the accuracy of identifying fiber directions in the brain, especially in areas where fibers cross at narrow angles, by jointly optimizing tissue parameters and correcting for imaging noise and intensity variations in an end-to-end differentiable framework.

### Why it matters

**Research problem:** Recovering multiple fiber populations in diffusion MRI is a challenging nonconvex problem typically solved voxelwise, which limits accuracy in narrow fiber crossings and ignores spatial coherence. Additionally, intensity variations and noise complicate reliable fiber recovery.

**Why it matters:** Accurate fiber orientation estimation is crucial for understanding brain connectivity and microstructure, impacting neuroscience research and clinical applications. Improving crossing fiber resolution and robustness to noise enhances tractography and brain mapping quality.

**Key contributions:**

- A differentiable multi-compartment microstructure fitter with explicit fiber parameterization and soft model selection via repulsion and sparsity priors.
- Two data-fidelity modes: fast MSE and Rician negative log-likelihood with self-supervised noise-level recovery.
- Achieves 1.9× lower angular error than the best baseline on synthetic crossing-fiber benchmarks and improved tractography connectivity on a digital phantom.
- Whole-brain fitting of ~741k voxels in ~12 minutes on a single GPU with consistent results across random seeds.
- A nuisance calibration module that halves angular error under intensity perturbations and self-regularizes on clean data.

## About the professor

**Eleftherios Garyfallidis** — Associate Professor of Intelligent Systems Engineering, Luddy School of Informatics, Computing, and Engineering, Indiana University.

Research interests: Prof. Garyfallidis works on the interface between machine learning, medical imaging and engineering visualization.

### Research links

- [Faculty/profile page](https://luddy.iu.edu/people/garyfallidis-eleftherios.html)
- [Identity evidence](https://grg.sice.indiana.edu)
- [Professor website](https://grg.luddy.indiana.edu/)
- [Lab website](https://grg.luddy.indiana.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** diffusion MRI microstructure modeling
**The paper assumes:** diffusion MRI physics, brain tissue microstructure modeling, multi-compartment diffusion models, fiber orientation estimation
**Already in this field?** Skip this entirely if you already understand diffusion MRI signal formation and microstructure modeling concepts including multi-compartment models and fiber orientation estimation.

To understand the PRISM paper on diffusion MRI microstructure modeling, it is essential to grasp how diffusion MRI signals relate to brain tissue compartments and fiber orientation estimation. The rigorous course option offers a deep, structured university-level lecture series on diffusion MRI modeling and microstructure probing, ideal for thorough comprehension. The fast track provides a concise, focused playlist of clear explainers on diffusion tensor imaging and related concepts, suitable for a quicker but still solid grounding in the key ideas.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Work: MRI: Diffusion Tensor](https://www.youtube.com/playlist?list=PLSeXa4W7XBn6SadCR6T76MO7Ij56UOicQ) — ReaperJ4F · 11 videos · 5.7h across the first 9 episodes

**Watch only this:** Watch the first 3 episodes: "DTI .  MRI Siemens diffusion tensor imaging", "Introduction to Diffusion Tensor Imaging (DTI)", and "Introduction to DTI Workshop", about 1 hour and 51 minutes total — these cover the core concepts of diffusion MRI and fiber orientation estimation.

*Why it unblocks this paper:* This playlist offers concise, clear explanations of diffusion tensor imaging (DTI) and related diffusion MRI concepts, providing a practical and accessible introduction to fiber orientation and diffusion modeling relevant to PRISM's context.

*If you want all of it:* All 9 episodes, approximately 5.7 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PRISM paper, start with foundational knowledge of diffusion MRI microstructure modeling and multi-compartment tissue models to grasp how brain tissue and fiber orientations are represented. Then, study gradient-based optimization methods and noise/bias field correction techniques critical for the joint parameter optimization and nuisance calibration in PRISM. Finally, focus on the core concept of differentiable analysis-by-synthesis, culminating with the authors' own talk or the most relevant advanced video on differentiability as it directly relates to the PRISM framework.

### Diffusion MRI microstructure modeling *(prerequisite)*
This foundational topic covers how diffusion MRI captures brain microstructure by modeling water diffusion patterns in tissue, essential for understanding the biological basis behind fiber orientation estimation. The selected university-level and research seminar talks provide rigorous, research-grade insights into white matter integrity and microstructure imaging.

*How the paper uses it:* PRISM builds on diffusion MRI microstructure modeling to improve fiber orientation recovery accuracy.

▶ [“Advanced diffusion MRI methods for studying white matter integrity in Aphasia”, Emilie McKinnon](https://www.youtube.com/watch?v=l6GTwt_-ZC0) — C-STAR Lecture Series · 53:01 · 9y ago

### Multi-compartment tissue models diffusion MRI *(prerequisite)*
Understanding multi-compartment models is crucial as PRISM explicitly models different tissue types (CSF, gray matter, white matter fibers, restricted compartment). The chosen advanced lecture provides detailed explanations of compartmental modeling in diffusion MRI.

*How the paper uses it:* PRISM’s explicit multi-compartment tissue model is central to its improved fitting and fiber recovery.

▶ [The Neurite model of Diffusion in Brain Tissue - Sune Jespersen](https://www.youtube.com/watch?v=2EM3KyTWALE) — Cardiff University Psychology · 20:40 · 9y ago

### Gradient-based optimization in imaging *(prerequisite)*
Gradient-based optimization methods underpin the joint parameter fitting in PRISM’s differentiable framework. The selected university lecture offers a rigorous introduction to gradient waveform design and optimization relevant to MRI sequences and parameter estimation.

*How the paper uses it:* PRISM jointly optimizes tissue and nuisance parameters using gradient-based methods.

▶ [Rad229 (2020) Lecture-12B: Gradient Waveform Design](https://www.youtube.com/watch?v=gEu58CtN8z8) — Stanford-RAD229 · 27:23 · 6y ago

### Noise and bias field correction MRI *(prerequisite)*
Nuisance calibration in PRISM addresses intensity variations and noise, making understanding noise and bias field correction essential. The chosen advanced seminar discusses denoising diffusion MRI with a research focus on noise modeling and correction.

*How the paper uses it:* PRISM’s nuisance calibration module improves robustness by correcting noise and intensity bias.

▶ [MedAI #70: Denoising diffusion models for denoising diffusion MRI | Tiange Xiang](https://www.youtube.com/watch?v=IOmnazOXfv4) — Stanford MedAI · 40:29 · 3y ago

### Differentiable analysis-by-synthesis
This core concept enables end-to-end gradient optimization of the forward model and nuisance parameters in PRISM. The selected video is a comprehensive university-level lecture on differentiable programming, providing the mathematical and computational foundation for PRISM’s differentiable framework.

*How the paper uses it:* PRISM’s differentiable analysis-by-synthesis framework is the key methodological innovation.

▶ [Differentiable Programming (Part 1)](https://www.youtube.com/watch?v=R8b-vTMvN80) — Institute of Computing for Climate Science (ICCS) · 1:20:34 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the PRISM paper, start with foundational knowledge of diffusion MRI microstructure modeling to grasp how brain tissue and fibers are represented. Next, learn about multi-compartment tissue models which are essential for modeling different tissue types and fibers explicitly, as used in PRISM. Then, study gradient-based optimization methods to understand how PRISM jointly optimizes parameters in an end-to-end differentiable framework. After that, explore noise and bias field correction in MRI to appreciate the nuisance calibration module improving robustness. Finally, focus on differentiable analysis-by-synthesis, the core method enabling PRISM's end-to-end gradient optimization of tissue and nuisance parameters.

### Diffusion MRI microstructure modeling *(prerequisite)*
This concept explains how diffusion MRI captures water molecule movement to infer brain tissue microstructure, including fiber orientations and compartments. Understanding this provides the biological and physical basis for modeling brain connectivity and microstructure from diffusion signals.

*How the paper uses it:* PRISM builds on diffusion MRI microstructure modeling to fit detailed tissue parameters and fiber directions across spatial patches.

▶ [Introduction to Diffusion-Weighted MRI and Microstructure Imaging](https://www.youtube.com/watch?v=-JGLhF5FiGY) — Maxime Taquet · 13:53 · 11y ago

### Multi-compartment tissue models diffusion MRI *(prerequisite)*
Multi-compartment models represent different tissue types (e.g., white matter fibers, gray matter, CSF) explicitly, allowing more accurate characterization of complex brain microstructure. This is crucial for resolving crossing fibers and modeling tissue heterogeneity.

*How the paper uses it:* PRISM uses an explicit multi-compartment tissue model including CSF, gray matter, multiple white-matter fibers, and a restricted compartment.

▶ [MRillustrated - Diffusion 5: Multi-Shell & Compartments](https://www.youtube.com/watch?v=8gnVmT0KCSE) — USC Stevens Neuroimaging and Informatics Institute · 5:40 · 8y ago

### Gradient-based optimization in imaging *(prerequisite)*
Gradient-based optimization methods iteratively adjust parameters to minimize error functions using derivatives, enabling efficient fitting of complex models. This is foundational for understanding how PRISM jointly optimizes tissue and nuisance parameters end-to-end.

*How the paper uses it:* PRISM employs gradient-based methods to optimize all parameters jointly over spatial patches in a differentiable framework.

▶ [Gradient Descent, Step-by-Step](https://www.youtube.com/watch?v=sDv4f4s2SB8) — StatQuest with Josh Starmer · 23:54 · 7y ago

### Noise and bias field correction MRI *(prerequisite)*
MRI images often suffer from noise and intensity non-uniformities (bias fields) that can degrade analysis accuracy. Understanding correction techniques is important to appreciate how nuisance calibration improves robustness in diffusion MRI fitting.

*How the paper uses it:* PRISM includes a nuisance calibration module that corrects for bias field, intensity variations, and noise level estimation to halve angular error under perturbations.

▶ [Lab3 BiasFieldAndSkullStripping](https://www.youtube.com/watch?v=CL3bRWHmnfI) — Neuroimaging Research Methods · 4:00 · 6y ago

### Differentiable analysis-by-synthesis
Differentiable analysis-by-synthesis involves building a forward model of data generation that is differentiable, allowing gradients to flow through the entire pipeline for end-to-end optimization. This enables joint fitting of complex models and nuisance parameters.

*How the paper uses it:* PRISM's core innovation is a differentiable analysis-by-synthesis framework enabling joint optimization of tissue microstructure and nuisance calibration parameters.

▶ [Differentiable Programming (Part 1)](https://www.youtube.com/watch?v=R8b-vTMvN80) — Institute of Computing for Climate Science (ICCS) · 1:20:34 · 1y ago

## Already in your library

- [SAS2018 - Verifying Properties of Differentiable Programs (by Jan Hückelheim)](https://www.youtube.com/watch?v=-melP96HupQ) — also for: PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI (Eleftherios Garyfallidis)
- [Diffusion MRI Explained: Mapping the Brain’s Hidden Highways 🧠](https://www.youtube.com/watch?v=7JvgYRD36Rw) — also for: PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI (Eleftherios Garyfallidis)
- [“Microstructure imaging by diffusion MRI: modeling, simulation, machine learning, application to...](https://www.youtube.com/watch?v=5Zgbrh6Z-BY) — also for: White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity (Zhaohua Ding)
- [Dr. Ileana Jelescu - In vivo brain microstructure mapping for translational neuroimaging](https://www.youtube.com/watch?v=IadWIFYgH3s) — also for: PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI (Eleftherios Garyfallidis)
- [22. Gradient Descent: Downhill to a Minimum](https://www.youtube.com/watch?v=AeRwohPuUHQ) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Intro to Gradient Descent || Optimizing High-Dimensional Equations](https://www.youtube.com/watch?v=fXQXE96r4AY) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Introduction to Gradient Descent | How Models Minimize Loss](https://www.youtube.com/watch?v=vtOI7NgXMQQ) — also for: Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs (Georg Stadler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of PRISM's differentiable analysis-by-synthesis approach for diffusion MRI fixel recovery. Starting with a focused implementation of the nuisance calibration module on synthetic data, you then reimplement the core multi-compartment fitting method and benchmark it against a simple baseline. Finally, you extend the model to address a stated limitation by incorporating fiber dispersion modeling, exploring a future direction proposed by the paper.

### Beginner — Nuisance Calibration Module on Synthetic Diffusion MRI Data
*Effort: a weekend, ~8 hours*

You build a simplified version of PRISM's nuisance calibration module that estimates and corrects intensity bias fields and noise levels on synthetic diffusion MRI patches. This project focuses on implementing the calibration optimization using gradient-based methods and visualizing the reduction in angular error under intensity perturbations.

**Why it shows you understood the paper:** This project demonstrates your grasp of PRISM's key innovation in nuisance calibration that halves angular error under intensity perturbations, showing you understand how joint optimization of nuisance parameters improves fiber recovery robustness.

**Grounded in:** A nuisance calibration module that halves angular error under intensity perturbations and self-regularizes on clean data.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, JAX or PyTorch for autodiff

**Data:** Synthetic diffusion MRI patches generated with known fiber orientations and simulated intensity gain perturbations, created based on descriptions in the paper since no code or dataset is released.

**Build it:**

1. Generate synthetic diffusion MRI patches with known fiber orientations and simulated intensity gain perturbations.
2. Implement a differentiable nuisance calibration module that models bias field and noise level parameters.
3. Use gradient-based optimization (e.g., with JAX or PyTorch autograd) to jointly optimize nuisance parameters to minimize reconstruction error.
4. Visualize angular error before and after calibration to demonstrate error reduction.
5. Document the module's design, optimization procedure, and results in a README.

**Ships as:** A GitHub repository with code to generate synthetic data, run nuisance calibration optimization, and visualize angular error improvements, accompanied by a clear README explaining the approach and results.

**Stretch goal:** Add a simple spatial smoothness prior on the bias field to mimic PRISM's spatial calibration regularization.

### Intermediate — Reimplementation of PRISM Multi-Compartment Fitting on Synthetic Crossing Fibers
*Effort: 2-3 weekends, ~20 hours*

You reimplement the core differentiable multi-compartment microstructure fitting method from PRISM, including explicit fiber parameterization and soft model selection via sparsity and repulsion priors. You apply it to synthetic crossing-fiber diffusion MRI data and compare angular error metrics against a simple baseline such as constrained spherical deconvolution (CSD).

**Why it shows you understood the paper:** This project shows you can translate PRISM's main analysis-by-synthesis framework into code, jointly optimize tissue and nuisance parameters, and reproduce the paper's key metric of angular error improvement over baselines on crossing fibers.

**Grounded in:** PRISM achieves 1.9× lower angular error than the best baseline on synthetic crossing-fiber benchmarks.

**Tech stack:** Python 3.11, PyTorch or JAX, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic crossing-fiber diffusion MRI data generated according to the paper's benchmark setup (SNR=30), since no authors' code or dataset is available.

**Build it:**

1. Generate or obtain synthetic crossing-fiber diffusion MRI data with known ground truth fiber orientations.
2. Implement the differentiable multi-compartment tissue model including CSF, gray matter, white matter fibers, and restricted compartments.
3. Incorporate soft model selection using sparsity and repulsion priors on fiber parameters.
4. Jointly optimize tissue and nuisance calibration parameters using gradient-based methods over spatial patches.
5. Implement a simple baseline method (e.g., MSMT-CSD) or use a public implementation for comparison.
6. Evaluate angular error and recall metrics comparing your implementation against the baseline.
7. Write a detailed README documenting the model, optimization, evaluation, and results.

**Ships as:** A GitHub repository with code for the differentiable fitting model, optimization scripts, baseline comparison, evaluation metrics, and a README explaining the implementation and results.

**Stretch goal:** Add the Rician negative log-likelihood data-fidelity mode with self-supervised noise-level recovery as an alternative to MSE.

### Advanced — Extending PRISM with Fiber Dispersion Modeling
*Effort: 3-4 weeks*

You extend the PRISM differentiable fitting framework by incorporating a fiber dispersion model such as Bingham distribution to address the paper's limitation of fixed diffusivities and lack of dispersion modeling. You implement this extension on synthetic or publicly available diffusion MRI data and analyze its impact on angular error and tractography metrics.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of PRISM, demonstrating your ability to innovate on the model architecture and optimization, and to critically evaluate improvements in microstructure recovery.

**Grounded in:** The forward model uses fixed diffusivities and does not yet model fiber dispersion or geometric distortions. Future direction: Extend the model to include Bingham dispersion.

**Tech stack:** Python 3.11, PyTorch or JAX, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic diffusion MRI data with crossing fibers, or a publicly available diffusion MRI dataset suitable for microstructure modeling (e.g., HCP data as a substitute), since no authors' dataset is released.

**Build it:**

1. Review literature on fiber dispersion models such as the Bingham distribution and how to incorporate them into diffusion MRI microstructure models.
2. Modify the PRISM multi-compartment fitting model to include fiber dispersion parameters in the forward model.
3. Implement differentiable forward modeling and joint optimization of dispersion and tissue parameters.
4. Apply the extended model to synthetic or public diffusion MRI data with crossing fibers.
5. Evaluate improvements in angular error and tractography connectivity metrics compared to the original fixed-diffusivity model.
6. Document the model extension, implementation details, evaluation, and insights in a comprehensive README.

**Ships as:** A GitHub repository containing the extended PRISM model code, optimization scripts, evaluation results, and a detailed README discussing the extension and its impact.

**Stretch goal:** Incorporate geometric distortion correction operators into the differentiable framework as an additional extension.

_The paper's authors did not release code or datasets for PRISM; all projects require synthetic data generation or use of publicly available diffusion MRI data as substitutes._
