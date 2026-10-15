---
title: "633 · PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI — Eleftherios Garyfallidis"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eleftherios-garyfallidis"
source_hash: "c14906f49a91126c5f07884bb62af1678cabb00d1e1f5412d5feab9280906b49"
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

This paper presents PRISM, a new computational method to analyze diffusion MRI data by fitting a detailed model of brain tissue microstructure across spatial patches. It improves the accuracy of identifying fiber directions in brain white matter, especially in regions where fibers cross at narrow angles, by jointly optimizing tissue parameters and noise calibration in an end-to-end differentiable framework.

### Why it matters

**Research problem:** Recovering multiple fiber populations in brain white matter from diffusion MRI data is challenging due to nonconvex fitting problems, noise, intensity variations, and the common practice of fitting each voxel independently without spatial coherence.

**Why it matters:** Accurate fiber orientation recovery is crucial for mapping brain connectivity and understanding brain structure, which impacts neuroscience research and clinical applications such as diagnosing and tracking neurological diseases.

**Key contributions:**

- A differentiable multi-compartment microstructure fitter with explicit K-fiber parameterization and soft model selection via repulsion and sparsity priors.
- Two data-fidelity modes: fast MSE and Rician negative log-likelihood (NLL) with self-supervised noise-level recovery.
- Achieves 1.9× lower angular error than the best baseline on a synthetic crossing-fiber benchmark with 95% recall (MSE mode) and further improvement in NLL mode.
- Improved tractography connectivity correlation on the DiSCo1 phantom dataset compared to CSD baselines.
- Whole-brain fitting of ~741k voxels in ~12 minutes on a single GPU with consistent results across random seeds.

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

**What you're missing:** Diffusion MRI microstructure modeling
**The paper assumes:** diffusion MRI physics, multi-compartment tissue modeling, fiber orientation distributions, and noise modeling in MRI
**Already in this field?** Skip this entirely if you already understand diffusion MRI microstructure modeling and multi-compartment forward models.

To understand the PRISM paper on differentiable analysis-by-synthesis for fixel recovery in diffusion MRI, a solid grasp of diffusion MRI microstructure modeling is essential. The rigorous course option offers a comprehensive, university-level lecture series on MRI physics with detailed coverage of diffusion imaging concepts. The fast track provides a concise, focused set of keynote talks from the DIPY research group that cover core diffusion MRI microstructure topics efficiently, suitable for readers seeking a quicker but still authoritative overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MRI Physics - Stanford Rad 229 Course](https://www.youtube.com/playlist?list=PL_f1QfEzcY41iJ_R0w2027igbVvIYOZR4) — Stanford Radiology · 39 videos

**Watch only this:** Lectures 15A (Diffusion, Spins, and MRI Signals), 15B (Diffusion Weighted Imaging), and 15C (Advanced Diffusion Imaging), about 1.15 hours total — these focus specifically on diffusion MRI physics and signal modeling essential for the paper.

*Why it unblocks this paper:* Stanford Radiology's Rad 229 course is a rigorous university lecture series covering MRI physics including diffusion imaging fundamentals, signal modeling, noise, and advanced diffusion sequences, directly relevant to understanding the multi-compartment modeling and noise calibration in PRISM.

*If you want all of it:* Approximately 15.2 hours across 39 episodes covering comprehensive MRI physics.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Keynotes](https://www.youtube.com/playlist?list=PLRZ9VSqV-6spXPe7lZbPeZc5-_ydf-SOW) — Diffusion Imaging in Python - DIPY · 8 videos · 6.0h across 8 episodes

**Watch only this:** Episodes 1 (Advancing Microstructure Imaging via Diffusion MRI | Marco Palombo | DIPY Workshop 2025), 2 (Optimization constraints for dMRI), and 3 (Challenges in diffusion MRI tractography), about 2.2 hours total — these cover core modeling and optimization concepts relevant to PRISM.

*Why it unblocks this paper:* The DIPY Keynotes playlist contains focused talks by experts on diffusion MRI microstructure imaging, optimization, noise modeling, and tractography, providing a concise and research-oriented overview aligned with PRISM's methodology.

*If you want all of it:* About 6 hours across 8 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PRISM paper, start with foundational knowledge on diffusion MRI microstructure modeling and fiber orientation distribution estimation, as these underpin the multi-compartment modeling and fiber recovery challenges addressed by PRISM. Next, study gradient-based optimization and noise modeling in diffusion MRI to grasp the technical methods enabling PRISM's differentiable framework and noise calibration. Finally, focus on the core concept of differentiable analysis-by-synthesis and the authors' own talk to fully appreciate the novel end-to-end optimization approach and its application to fixel recovery.

### Diffusion MRI microstructure modeling *(prerequisite)*
This topic covers the biophysical and mathematical models that describe tissue microstructure in diffusion MRI, including multi-compartment models that PRISM fits explicitly. Understanding these models is essential to appreciate how PRISM improves fiber orientation estimation by leveraging spatial patches and tissue parameters.

*How the paper uses it:* PRISM fits an explicit multi-compartment forward model of tissue microstructure over spatial patches.

▶ [Dr. Ileana Jelescu - In vivo brain microstructure mapping for translational neuroimaging](https://www.youtube.com/watch?v=IadWIFYgH3s) — qMRI conference · 31:24 · 3y ago

### Fiber orientation distribution estimation *(prerequisite)*
This area focuses on methods to estimate multiple fiber populations within a voxel, a key challenge PRISM addresses by improving angular resolution and recall in crossing fiber regions. It provides context on the state-of-the-art approaches like CSD that PRISM outperforms.

*How the paper uses it:* PRISM recovers multiple fiber populations in white matter, improving on existing fiber orientation distribution estimation methods.

▶ [Donald Tournier Ph.D. : Local Modeling, CSD and multi-tissue CSD](https://www.youtube.com/watch?v=skNt_lB9NRQ) — CIMAT · 1:03:47 · 9y ago

### Gradient-based optimization in imaging *(prerequisite)*
Gradient-based optimization techniques enable the joint fitting of tissue and nuisance parameters in PRISM's differentiable framework. Understanding these methods is critical to grasp how PRISM performs end-to-end parameter estimation efficiently on large datasets.

*How the paper uses it:* PRISM uses gradient-based optimization to jointly optimize tissue microstructure and nuisance calibration parameters.

▶ [MLSS 2026 — Suvrit Sra — Optimization for machine learning — gradient methods (part 1)](https://www.youtube.com/watch?v=QoHXDegIvwo) — Max Planck Institute for Intelligent Systems · 1:27:14 · 10d ago

### Noise modeling in diffusion MRI *(prerequisite)*
Noise modeling, especially Rician noise characteristics in diffusion MRI, is fundamental for PRISM's self-supervised noise-level recovery and improved data fidelity. This knowledge clarifies how PRISM calibrates noise parameters to reduce angular error.

*How the paper uses it:* PRISM incorporates noise calibration using Rician negative log-likelihood and self-supervised noise-level recovery.

▶ [Rad229 (2020) Lecture-15C: Advanced Diffusion Imaging](https://www.youtube.com/watch?v=w9-hHYj7XZw) — Stanford-RAD229 · 24:36 · 6y ago

### Differentiable analysis-by-synthesis
This core concept underlies PRISM's novel approach of fitting a forward model in a fully differentiable manner, enabling end-to-end gradient optimization over spatial patches. It is crucial to understand this framework to appreciate PRISM's methodological innovation.

*How the paper uses it:* PRISM uses a differentiable analysis-by-synthesis framework for joint optimization of tissue and nuisance parameters.

▶ [ETH Zürich DLSC: Introduction to Differentiable Physics Part 1](https://www.youtube.com/watch?v=1Edfts3UzaY) — CAMLab, ETH Zürich · 1:12:57 · 3y ago

### PRISM diffusion MRI talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insights into the development, validation, and implications of PRISM, including detailed explanations of the model, optimization strategy, and experimental results. This is the most authoritative resource to understand the paper's contributions.

*How the paper uses it:* This talk is by the paper authors presenting their novel method for diffusion MRI fixel recovery.

▶ [SAS2018 - Verifying Properties of Differentiable Programs (by Jan Hückelheim)](https://www.youtube.com/watch?v=-melP96HupQ) — Static Analysis Symposium SAS · 27:36 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the PRISM paper, start by learning the fundamentals of diffusion MRI and brain microstructure modeling, which provide the biological and imaging context. Next, grasp fiber orientation distribution estimation, the key problem PRISM addresses. Then, study gradient-based optimization methods that enable PRISM's joint parameter fitting. Finally, explore differentiable analysis-by-synthesis, the core computational framework PRISM uses to optimize tissue and nuisance parameters end-to-end.

### Diffusion MRI microstructure modeling *(prerequisite)*
Diffusion MRI microstructure modeling explains how water molecule diffusion patterns reveal brain tissue properties, especially in white matter. Understanding multi-compartment models helps interpret how PRISM fits detailed tissue parameters beyond simple voxelwise approaches.

*How the paper uses it:* PRISM fits an explicit multi-compartment microstructure model to diffusion MRI data to recover fiber populations accurately.

▶ [Diffusion MRI Explained: Mapping the Brain’s Hidden Highways 🧠](https://www.youtube.com/watch?v=7JvgYRD36Rw) — Simulated Photon · 5:22 · 11mo ago

### Fiber orientation distribution estimation *(prerequisite)*
Fiber orientation distribution estimation involves determining the directions of multiple fiber populations within a voxel from diffusion MRI signals. This is crucial for mapping brain connectivity and is the main challenge PRISM aims to improve.

*How the paper uses it:* PRISM improves fiber orientation recovery by jointly fitting multiple fiber directions with spatial coherence.

▶ [43. Diffusion Tractography: Estimating Fibre Orientations: BEDPOSTX (Tract E2)](https://www.youtube.com/watch?v=4dGC1kdNv1M) — FSL Course · 22:43 · 6y ago

### Gradient-based optimization in imaging *(prerequisite)*
Gradient-based optimization uses derivatives of a loss function to iteratively improve model parameters. In imaging, it enables fitting complex models to data by minimizing reconstruction errors efficiently.

*How the paper uses it:* PRISM uses gradient-based optimization to jointly fit tissue microstructure and nuisance parameters in an end-to-end differentiable framework.

▶ [MLSS 2026 — Suvrit Sra — Optimization for machine learning — gradient methods (part 1)](https://www.youtube.com/watch?v=QoHXDegIvwo) — Max Planck Institute for Intelligent Systems · 1:27:14 · 10d ago

### Differentiable analysis-by-synthesis
Differentiable analysis-by-synthesis is a method where a forward model synthesizes data from parameters, and gradients of the difference between synthesized and observed data are used to update parameters. This enables end-to-end learning of complex models with nuisance factors.

*How the paper uses it:* PRISM's core innovation is a differentiable analysis-by-synthesis framework that fits multi-compartment models over spatial patches with joint nuisance calibration.

▶ [ETH Zürich DLSC: Introduction to Differentiable Physics Part 1](https://www.youtube.com/watch?v=1Edfts3UzaY) — CAMLab, ETH Zürich · 1:12:57 · 3y ago

## Already in your library

- [“Microstructure imaging by diffusion MRI: modeling, simulation, machine learning, application to...](https://www.youtube.com/watch?v=5Zgbrh6Z-BY) — also for: White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity (Zhaohua Ding)
- [Stochastic Gradient Descent, Clearly Explained!!!](https://www.youtube.com/watch?v=vMh0zPT0tLI) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Introduction to Gradient Descent | How Models Minimize Loss](https://www.youtube.com/watch?v=vtOI7NgXMQQ) — also for: Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs (Georg Stadler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of PRISM's differentiable analysis-by-synthesis framework for fixel recovery in diffusion MRI. The beginner project recreates a core visualization of fiber orientation distributions from synthetic data, the intermediate project implements a simplified version of PRISM's patch-based multi-compartment fitting and compares angular error against a baseline, and the advanced project extends PRISM by integrating a geometric distortion correction step into the differentiable optimization, addressing a key limitation noted by the authors.

### Beginner — Visualize Synthetic Crossing Fibers with Multi-Compartment Model
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates synthetic diffusion MRI signals for a voxel with two crossing fibers at a known angle and fits a simple multi-compartment model to recover fiber orientations. You then visualize the recovered fiber orientation distribution function (fODF) as a polar plot or 3D sphere plot.

**Why it shows you understood the paper:** This project shows you understand the core concept of multi-compartment modeling and fiber orientation estimation, and can reproduce a key metric (angular error) on synthetic crossing-fiber data similar to the paper's benchmark.

**Grounded in:** PRISM achieves 3.5° angular error with 95% recall on synthetic crossing-fiber data (SNR=30), outperforming MSMT-CSD baseline (6.8°, 83% recall).

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic diffusion MRI signals generated in code simulating two fiber populations crossing at a fixed angle, as described in the paper's synthetic benchmark.

**Build it:**

1. Implement a function to simulate diffusion MRI signals for a voxel with two crossing fibers at a specified angle and SNR.
2. Implement a simple multi-compartment forward model to predict signals given fiber orientations and volume fractions.
3. Fit the model parameters to the synthetic signals using least squares optimization.
4. Compute and visualize the recovered fiber orientation distribution function (fODF) as a polar plot or spherical plot.
5. Calculate angular error between ground truth and recovered fiber directions.

**Ships as:** A Jupyter notebook that simulates crossing fiber signals, fits a multi-compartment model, visualizes the fODF, and reports angular error.

**Stretch goal:** Add noise-level estimation and compare fitting results with and without noise modeling.

### Intermediate — Patch-Based Differentiable Multi-Compartment Fitting on Synthetic Data
*Effort: 1-3 weekends*

You implement a simplified version of PRISM's differentiable analysis-by-synthesis framework that fits a multi-compartment microstructure model jointly over small spatial patches of synthetic diffusion MRI data. You optimize tissue parameters and nuisance calibration parameters using gradient-based optimization and compare angular error against a voxelwise baseline such as MSMT-CSD.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method of patch-based joint fitting with differentiable optimization, and reproduce the key improvement in angular error and recall on synthetic crossing-fiber benchmarks.

**Grounded in:** PRISM uses a differentiable multi-compartment fitter with explicit K-fiber parameterization and soft model selection via repulsion and sparsity priors, achieving 1.9× lower angular error than the best baseline on synthetic data.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Synthetic crossing-fiber diffusion MRI data generated in code, simulating multiple voxels arranged in small spatial patches.

**Build it:**

1. Implement a differentiable multi-compartment forward model parameterized by fiber orientations and tissue fractions.
2. Generate synthetic diffusion MRI data for small spatial patches with known ground truth fiber configurations.
3. Set up a PyTorch optimization loop to jointly fit tissue parameters and nuisance calibration parameters over patches using MSE loss.
4. Implement sparsity and repulsion priors as regularization terms in the loss.
5. Compare angular error and recall metrics against a voxelwise baseline method (e.g., MSMT-CSD implemented or approximated).
6. Visualize fitting results and report quantitative improvements.

**Ships as:** A PyTorch-based repository with scripts to run patch-based fitting on synthetic data, compare against baseline, and report angular error and recall metrics.

**Stretch goal:** Extend the model to optimize noise-level parameters using a Rician negative log-likelihood loss instead of MSE.

### Advanced — Integrate Geometric Distortion Correction into PRISM's Differentiable Framework
*Effort: a few weeks*

You extend the differentiable analysis-by-synthesis framework by incorporating a geometric distortion correction module (e.g., motion or susceptibility distortion correction) directly into the optimization pipeline. This module applies spatial transformations to the diffusion MRI data or model predictions, enabling joint optimization of tissue parameters and geometric corrections.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the authors, demonstrating deep comprehension of PRISM's framework and the challenges of integrating geometric preprocessing steps into end-to-end differentiable fitting.

**Grounded in:** PRISM currently models only intensity-domain nuisance factors; geometric preprocessing such as motion and susceptibility correction is assumed to be done separately. Future directions include incorporating geometric preprocessing steps into the differentiable framework.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Synthetic or publicly available diffusion MRI data with simulated or known geometric distortions; synthetic data can be generated with spatial transformations applied.

**Build it:**

1. Review PRISM's differentiable multi-compartment fitting framework and implement a baseline patch-based fitting pipeline.
2. Implement a differentiable geometric distortion module that applies spatial transformations (e.g., affine or nonlinear warps) to the model predictions or input data.
3. Integrate this module into the optimization loop to jointly optimize tissue parameters and geometric distortion parameters.
4. Generate synthetic diffusion MRI data with known geometric distortions to validate the approach.
5. Evaluate improvements in angular error and fitting consistency compared to fitting without geometric correction.
6. Document challenges encountered in gradient propagation through spatial transformations and strategies to address them.

**Ships as:** A PyTorch-based repository demonstrating joint optimization of tissue microstructure and geometric distortion parameters, with evaluation on synthetic distorted data.

**Stretch goal:** Apply the extended framework to real diffusion MRI data with known motion artifacts and compare results to standard preprocessing pipelines.
