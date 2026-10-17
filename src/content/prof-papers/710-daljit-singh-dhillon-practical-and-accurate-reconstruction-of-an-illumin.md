---
title: "710 · Practical and Accurate Reconstruction of an Illuminant’s Spectral Power Distribution for Inverse Rendering Pipelines — Daljit Singh Dhillon"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daljit-singh-dhillon"
source_hash: "e4df27b3bdc0c3f4ad4a199317eb2aa0b8532c3c1ce22767c71d15ef849e1e58"
sequence: 710
generator: "outreach-garden: managed"
---

# 710 · Practical and Accurate Reconstruction of an Illuminant’s Spectral Power Distribution for Inverse Rendering Pipelines

## At a glance

- **Professor:** Daljit Singh Dhillon
- **Institution:** Clemson University
- **Paper:** [Practical and Accurate Reconstruction of an Illuminant’s Spectral Power Distribution for Inverse Rendering Pipelines](https://arxiv.org/pdf/2410.22679v1)
- **Authors:** Parisha Joshi, Daljit Singh J. Dhillon
- **Year:** 2024

## Paper overview

This paper presents a low-cost, practical method to accurately reconstruct the spectral power distribution (SPD) of uniform light sources using a simple setup involving a compact disk (CD-ROM) as a diffractive element and machine learning. This enables photo-realistic rendering of materials under real-world lighting without expensive spectrometers.

### Why it matters

**Research problem:** Accurately measuring the spectral power distribution of illuminants is critical for photo-realistic inverse rendering but existing spectrometers are expensive and not widely accessible to artists and content creators.

**Why it matters:** Precise SPD measurements are essential for realistic rendering of complex material appearances such as iridescence and structural coloration, which are sensitive to illumination spectra. Affordable and accessible methods can democratize high-quality rendering workflows.

**Key contributions:**

- A novel, low-cost imaging setup using a CD-ROM as a diffractive grating for spectral profiling of illuminants.
- A data-driven machine learning model (MLP) trained on synthetic data to reconstruct SPDs from images.
- Quantitative and qualitative validation showing high accuracy and rendering fidelity compared to ground truth spectrometer measurements.
- Demonstration of practical real-world adaptation with promising initial results.
- Discussion of potential extensions to non-uniform illuminants and general camera setups.

## About the professor

**Daljit Singh Dhillon** — Assistant Professor, School of Computing, Clemson University.

Research interests: Computer graphics, realistic appearances, bio-physical modeling and simulation, surface geometries, fabrication

### Research links

- [Faculty/profile page](https://djsingh.people.clemson.edu)
- [Google Scholar](https://scholar.google.ch/citations?user=3GWWmEsAAAAJ&hl=en)
- [ResearchGate](https://www.researchgate.net/profile/Daljit_Singh_Dhillon)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** spectral signal reconstruction
**The paper assumes:** spectral signal reconstruction, inverse problems in optics, and spectral measurement techniques
**Already in this field?** Skip this entirely if you already understand how spectral signals are reconstructed from indirect optical measurements and the basics of inverse problems in spectral imaging.

To understand the core method of reconstructing spectral power distributions (SPDs) from diffracted images using machine learning in this paper, a solid grasp of spectral signal reconstruction fundamentals is essential. The rigorous course option offers a deep, structured university-level introduction to digital signal processing concepts crucial for spectral reconstruction, while the fast track provides a concise, focused explanation of sampling and reconstruction principles to quickly build intuition and foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Digital signal processing Lecture Series](https://www.youtube.com/playlist?list=PLXOYj6DUOGrpVb7_cCB1pZuGH4BFlp61B) — EC Academy · 86 videos · 9.0h across the first 60 episodes

**Watch only this:** Episodes 1-6, about 48 minutes — covering Introduction to DSP, frequency domain sampling and reconstruction, Discrete Fourier Transform (DFT) and Inverse DFT, and related problems to build a solid foundation in signal reconstruction.

*Why it unblocks this paper:* This EC Academy Digital Signal Processing lecture series thoroughly covers frequency domain sampling and reconstruction of discrete-time signals, including Fourier transforms and their properties, which are fundamental to understanding how spectral signals can be reconstructed from indirect measurements like diffraction patterns.

*If you want all of it:* About 9.0 hours across the first 60 episodes (full series is 86 episodes)

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Sampling and Reconstruction of Signals](https://www.youtube.com/playlist?list=PLGI7M8vwfrFNzwXZcoaCamnZld7mXue5B) — Barry Van Veen · 15 videos · 2.9h across 15 episodes

**Watch only this:** Episodes 1-4, about 44 minutes — covering Introduction to Sampling and Reconstruction, Frequency Domain Interpretation of Sampling, Aliasing and the Sampling Theorem, and Reconstruction and the Sampling Theorem.

*Why it unblocks this paper:* Barry Van Veen's 'Sampling and Reconstruction of Signals' playlist provides clear, concise explanations of sampling theory and reconstruction with a focus on intuition and practical understanding, ideal for quickly grasping the essentials needed to follow the paper's spectral reconstruction approach.

*If you want all of it:* About 2.9 hours across all 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on practical and accurate reconstruction of an illuminant's spectral power distribution (SPD) for inverse rendering, start with foundational knowledge on diffractive optics and spectral power distribution measurement techniques, as these underpin the novel imaging setup and SPD reconstruction. Next, explore inverse rendering and spectral illumination to contextualize the importance of accurate SPD in rendering pipelines. Finally, focus on the core concept of the paper itself, including the authors' own talk if available, to grasp their specific approach using a CD-ROM and machine learning for SPD reconstruction.

### Diffractive optics for spectral sensing *(prerequisite)*
Understanding diffractive optics is essential because the paper uses a CD-ROM as a diffractive grating to capture spectral information from illuminants. This section covers the physics of diffraction and how diffractive elements can be used for spectral measurement, providing the optical foundation for the paper's imaging setup.

*How the paper uses it:* The paper's novel low-cost imaging setup relies on using a CD-ROM as a diffractive optical element to capture diffraction patterns of light sources.

▶ [#43 Diffractive Optics | Optical Engineering](https://www.youtube.com/watch?v=EBbEpLSDD44) — NPTEL-NOC IITM · 6 yr ago

### Spectral power distribution measurement *(prerequisite)*
This section provides fundamental knowledge about spectral power distribution (SPD) measurement techniques, critical for understanding why accurate SPD reconstruction matters in rendering. It covers the basics of SPD, its role in lighting characterization, and traditional measurement methods.

*How the paper uses it:* Accurate SPD measurement is the core problem addressed by the paper, which aims to provide a low-cost alternative to expensive spectrometers.

▶ [HCL Basics - SPD (Spectral Power Distribution) inIntegrative Lighting / HCL](https://www.youtube.com/watch?v=BNmSGHI7P0M) — LED professional Symposium – Expert Talks on Light · 6 yr ago

### Inverse rendering and spectral illumination *(prerequisite)*
Inverse rendering techniques rely on accurate knowledge of illumination spectra to realistically reproduce material appearances. This section contextualizes the importance of SPD reconstruction within photorealistic rendering pipelines and discusses related inverse rendering challenges.

*How the paper uses it:* The paper targets inverse rendering pipelines that require precise SPD measurements for realistic material rendering.

▶ [[CVPR 2023] Inverse Rendering for Reflectance Decomposition with Near-Field Indirect Illumination](https://www.youtube.com/watch?v=CHNrEw8FQmo) — 吴昊潜 · 3 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of spectral power distribution (SPD) and why it matters for realistic rendering. Then, grasp how diffractive optics like CD-ROMs can be used to capture spectral information. Next, build intuition on inverse rendering and the role of accurate illumination spectra. Finally, explore how machine learning, specifically multilayer perceptrons (MLPs), can reconstruct SPDs from diffraction images, which is the core method in this paper.

### Spectral power distribution measurement *(prerequisite)*
Spectral power distribution (SPD) describes how much light power is emitted at each wavelength by a light source. Understanding SPD is fundamental because it determines how materials appear under illumination, especially for effects like iridescence. This section introduces SPD measurement techniques and their importance in lighting and rendering.

*How the paper uses it:* The paper aims to reconstruct the SPD of illuminants accurately to enable photorealistic rendering without expensive spectrometers.

▶ [Illuminating Spectrum: The Evolution of Spectral Power Distribution (SPD)](https://www.youtube.com/watch?v=s7y3biV3RhI) — Colours Guide · 2 yr ago

### Diffractive optics for spectral sensing *(prerequisite)*
Diffractive optics use structures like gratings to split light into its component wavelengths, creating patterns that encode spectral information. A CD-ROM acts as a low-cost diffractive grating, producing diffraction patterns that can be captured by a camera to infer the SPD. This section explains how diffraction works and why it is useful for spectral sensing.

*How the paper uses it:* The paper uses an unwritten CD-ROM as a diffractive element to capture diffraction patterns of light sources for SPD reconstruction.

▶ [#43 Diffractive Optics | Optical Engineering](https://www.youtube.com/watch?v=EBbEpLSDD44) — NPTEL-NOC IITM · 6 yr ago

### Inverse rendering and spectral illumination *(prerequisite)*
Inverse rendering is the process of estimating scene properties like lighting and material reflectance from images. Accurate knowledge of the illumination SPD is crucial because it affects how materials look. This section provides context on why reconstructing the SPD is important for realistic inverse rendering pipelines.

*How the paper uses it:* The paper’s goal is to improve inverse rendering by providing accurate, accessible SPD measurements of illuminants.

▶ [ITEC4017 - Photo and Non-photorealistic Rendering - Lecture 5](https://www.youtube.com/watch?v=NwYyakViS_E) — Lesley talks CS, Graphics and AI · 4 yr ago

### Machine learning for spectral reconstruction
Machine learning models like multilayer perceptrons (MLPs) can learn to map complex input data to outputs, such as predicting SPD from images of diffraction patterns. This section introduces how ML can be applied to spectral reconstruction tasks, highlighting the data-driven approach used in the paper.

*How the paper uses it:* The paper trains an MLP on synthetic diffraction images to predict the SPD of unknown illuminants.

▶ [SPIE 2021 Presentation Machine Learning for Spectral Analysis](https://www.youtube.com/watch?v=BPia8YrZKEc) — Tony.X. Cao · 5 yr ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's novel approach to spectral power distribution (SPD) reconstruction using a CD-ROM diffractive setup and machine learning. The beginner project replicates a core visualization from the paper to grasp the optical principle. The intermediate project implements the core MLP model to reconstruct SPDs from synthetic diffraction images, validating accuracy with simple metrics. The advanced project extends the method to handle non-uniform illuminants or arbitrary camera setups, addressing one of the paper's stated limitations and future directions.

### Beginner — Simulate CD-ROM Diffraction Patterns for Uniform Illuminants
*Effort: a weekend, ~6 hours*

You build a Python script that simulates the diffraction pattern produced by a uniform light source passing through a CD-ROM acting as a diffractive grating, generating images similar to those shown in the paper's figures. The simulation visualizes how different wavelengths produce distinct diffraction rings or patterns.

**Why it shows you understood the paper:** This project shows you understand the physical principle of using a CD-ROM as a diffractive optical element to encode spectral information spatially, a key foundation of the paper's approach.

**Grounded in:** The paper's key contribution: 'A novel, low-cost imaging setup using a CD-ROM as a diffractive grating for spectral profiling of illuminants.'

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic data generated by your simulation code based on diffraction physics described in the paper.

**Build it:**

1. Implement a function to model diffraction angles for different wavelengths using the CD-ROM grating equation.
2. Generate synthetic images showing the spatial distribution of diffracted light for a uniform SPD.
3. Visualize the diffraction pattern as a 2D image using matplotlib.
4. Compare your simulated pattern qualitatively to the paper's example images.

**Ships as:** A GitHub repo with simulation code and README explaining the diffraction principle and showing example images.

**Stretch goal:** Add interactive sliders to vary wavelength or grating parameters and observe changes in diffraction patterns.

### Intermediate — MLP-Based SPD Reconstruction from Synthetic CD-ROM Images
*Effort: 1-3 weekends, ~20 hours*

You implement the core machine learning pipeline described in the paper: generate synthetic training data by simulating CD-ROM diffraction images paired with known SPDs, then train a multilayer perceptron (MLP) to predict SPDs from images. You evaluate reconstruction accuracy using metrics like correlation and mean absolute error.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method end-to-end, including data simulation, neural network training, and quantitative evaluation, confirming comprehension of the data-driven spectral reconstruction approach.

**Grounded in:** The paper's approach: 'They simulate this setup to generate training data of images paired with known SPDs, then train a multilayer perceptron (MLP) neural network to predict SPDs from captured images.' and results: 'High correlation (0.864 on validation) between predicted and ground truth SPDs.'

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib, scikit-learn

**Data:** Synthetic dataset generated by your diffraction simulation paired with sampled SPDs (e.g., Gaussian mixtures or sampled spectra).

**Build it:**

1. Extend your diffraction simulation to generate a dataset of images paired with known SPD vectors.
2. Design and implement an MLP model in PyTorch to map images to SPD vectors.
3. Split data into training and validation sets; train the MLP with appropriate loss functions (e.g., MAE).
4. Evaluate model performance using correlation and error metrics against ground truth SPDs.
5. Visualize example reconstructions and compare predicted vs. true SPDs.

**Ships as:** A GitHub repo with data generation scripts, MLP training code, evaluation metrics, and a README documenting results.

**Stretch goal:** Implement a simple baseline (e.g., linear regression) for SPD prediction and compare its performance to the MLP.

### Advanced — Extending SPD Reconstruction to Non-Uniform Illuminants and Arbitrary Camera Setups
*Effort: a few weeks, ~40+ hours*

You develop an extension of the paper's method to reconstruct spectral power distributions for spatially varying (non-uniform) illuminants or from images captured with arbitrary camera and CD-ROM orientations. This involves modifying the simulation and MLP training to handle spatial variation or camera parameters, addressing a key limitation noted by the authors.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions by implementing a genuine extension that moves beyond uniform spotlights and fixed camera setups, demonstrating research-level initiative.

**Grounded in:** The paper's limitation and future direction: 'Current method validated primarily on uniform spotlights and fronto-parallel camera-CD setups.' and 'Adaptation to handle general camera and illuminant placements, including non-uniform spectral illumination.'

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib, scikit-learn

**Data:** Synthetic dataset extended to include spatially varying illuminants or varied camera parameters, generated by your enhanced simulation.

**Build it:**

1. Modify the diffraction simulation to model spatially varying illuminants or arbitrary camera-CD orientations.
2. Generate a new synthetic dataset reflecting these variations paired with ground truth SPDs or spatial SPD maps.
3. Adapt the MLP architecture or input representation to handle spatial or camera parameter inputs.
4. Train and validate the extended model, measuring reconstruction accuracy across spatial locations or camera setups.
5. Document challenges, results, and potential improvements in the README.

**Ships as:** A GitHub repo with extended simulation, training code, evaluation scripts, and a detailed README discussing the extension and its impact.

**Stretch goal:** Experiment with real-world captures using a CD-ROM and a consumer camera to validate the extended method.
