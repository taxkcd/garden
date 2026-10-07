---
title: "557 · MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions — P. Thomas Fletcher"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-p-thomas-fletcher"
source_hash: "396e4cedd1f01134c2cd1bce68492fe734c8ee6a8b3663f682de60f52ded8f7b"
sequence: 557
generator: "outreach-garden: managed"
---

# 557 · MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions

## At a glance

- **Professor:** P. Thomas Fletcher
- **Institution:** University of Virginia
- **Paper:** [MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions](https://arxiv.org/abs/2504.09322v1)
- **Authors:** Tyler Spears, Shen Zhu, Yinzhu Jin, Aman Shrivastava, P. Thomas Fletcher
- **Year:** 2025

## Paper overview

This paper introduces MedIL, a novel autoencoder designed to encode and generate medical images of varying sizes and resolutions without needing to resample them. MedIL treats medical images as continuous signals, allowing it to preserve fine anatomical details and generate images at any resolution. The method is validated on brain MRIs and lung CTs, showing improved reconstruction and generation quality compared to traditional fixed-size models.

### Why it matters

**Research problem:** Medical images vary widely in size, resolution, and acquisition parameters, making it challenging for generative models to accurately represent and generate realistic medical images without losing important anatomical details. Existing latent diffusion models require fixed-size inputs and resampling, which can degrade image quality.

**Why it matters:** Preserving fine anatomical details in medical images is crucial for clinical applications such as diagnosis and treatment planning. Generative models that fail to handle heterogeneous image resolutions limit their usefulness in real-world clinical settings where images come from diverse sources and scanners.

**Key contributions:**

- Proposed MedIL, a novel autoencoder architecture for encoding and decoding medical images with heterogeneous resolutions.
- Demonstrated MedIL's effectiveness on T1-weighted brain MRIs and lung CTs from multiple datasets with varying resolutions.
- Showed that MedIL's flexible latent representations improve downstream generative image tasks using diffusion models.
- Released the MedIL implementation publicly to support future research in spatially-continuous autoencoders.

## About the professor

**P. Thomas Fletcher** — Associate Professor, Electrical and Computer Engineering, Computer Science, University of Virginia.

### Research links

- [Faculty/profile page](https://engineering.virginia.edu/faculty/tom-fletcher)
- [Google Scholar](https://scholar.google.com/citations?user=7pRRhkkAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Implicit Neural Representations
**The paper assumes:** implicit neural representations, continuous signal modeling, neural function approximation
**Already in this field?** Skip this entirely if you already understand implicit neural representations and their use in continuous signal modeling.

This background focuses on Implicit Neural Representations (INRs), the core technique behind MedIL for modeling medical images as continuous signals at arbitrary resolutions. The rigorous course option offers a deep, structured university-level introduction to convolutional neural networks and generative models foundational to understanding INRs, while the fast track provides a concise, focused playlist of expert talks and lectures specifically on implicit neural representations and related advances. Choose the course for a comprehensive foundation; choose the fast track for a targeted, efficient overview of INRs themselves.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture Collection | Convolutional Neural Networks for Visual Recognition (Spring 2017)](https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv) — Stanford University School of Engineering · 16 videos · 19.5h across 16 episodes

**Watch only this:** Lectures 4 to 7 (Introduction to Neural Networks, Convolutional Neural Networks, Training Neural Networks I & II), about 5 hours — these cover the neural network basics and convolutional architectures crucial for grasping MedIL's backbone.

*Why it unblocks this paper:* This Stanford University course covers convolutional neural networks and generative models in depth, providing essential foundational knowledge to understand the neural network architectures and training methods underlying MedIL's implicit representations.

*If you want all of it:* All 16 lectures, about 19.5 hours — for a comprehensive understanding of CNNs, generative models, and related deep learning concepts.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Implicit Neural Representations](https://www.youtube.com/playlist?list=PLat4GgaVK09e7aBNVlZelWWZIUzdq0RQ2) — Márton Vaitkus · 66 videos · 52.7h across the first 60 episodes

**Watch only this:** Episodes 1 to 6 (Vladlen Koltun: Towards Photorealism, Convolutional Occupancy Networks, Vincent Sitzmann: Implicit Neural Scene Representations, TUM AI Lecture Series - Neural Implicit Representations for 3D Vision, New Methods for Reconstruction and Neural Rendering, Matthew Tancik: Neural Radiance Fields for View Synthesis), about 5.2 hours — these provide a concise yet thorough introduction to INRs and their applications.

*Why it unblocks this paper:* This playlist by Márton Vaitkus is a focused collection of expert talks and lectures specifically on implicit neural representations, neural radiance fields, and related methods, directly addressing the core method used in MedIL.

*If you want all of it:* First 60 episodes, about 52.7 hours — for an extensive deep dive into implicit neural representations and cutting-edge research.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MedIL paper, start with foundational concepts such as implicit neural representations, latent diffusion models, medical image reconstruction, and continuous signal modeling in imaging. These prerequisites provide the theoretical and technical background necessary to grasp MedIL's novel approach. Finally, study the core concept of the MedIL autoencoder architecture and the authors' own talk to see how these foundations are integrated and applied to heterogeneous medical image generation.

### Implicit neural representations *(prerequisite)*
Implicit neural representations (INRs) are the core technique enabling MedIL to model medical images as continuous 3D signals, allowing encoding and decoding at arbitrary resolutions without resampling. Understanding INRs, their properties, and challenges such as spectral bias is essential to appreciate MedIL's approach.

*How the paper uses it:* MedIL uses implicit neural representations to treat medical images as continuous signals for flexible resolution generation.

▶ [Lecture 5: Implicit Neural Representations (KAIST CS479 ...](https://www.youtube.com/watch?v=XCZPlMv7iKQ) — Minhyuk Sung · 1:12:54

### Latent diffusion models *(prerequisite)*
Latent diffusion models provide the generative modeling framework that MedIL improves upon, especially in handling heterogeneous medical images. Learning how latent diffusion models operate in compressed latent spaces and their limitations with fixed-size inputs is important to understand MedIL's contributions.

*How the paper uses it:* MedIL improves downstream generative image tasks by providing flexible latent representations for diffusion models.

▶ [Solving Inverse Problems with Latent Diffusion Models via ...](https://www.youtube.com/watch?v=br6_bSCdxs8) — Communications and Signal Processing Seminar Series · 1:12:13

### Medical image reconstruction *(prerequisite)*
Medical image reconstruction is a fundamental problem where preserving fine anatomical details is critical. Understanding traditional and deep learning-based reconstruction methods contextualizes the challenges MedIL addresses in reconstructing heterogeneous medical images without loss of detail.

*How the paper uses it:* MedIL aims to reconstruct native-resolution medical images with high fidelity, preserving fine anatomical features.

▶ [Webinar #14: Deep Learning-based Medical Image ...](https://www.youtube.com/watch?v=AsvcdYYXgBQ) — IEEE EMBS Technical Community on BIIP · 1:00:06

### Continuous signal modeling in imaging *(prerequisite)*
Continuous signal modeling underpins MedIL's treatment of medical images as continuous 3D signals rather than discrete pixel grids. Grasping the principles of continuous versus discrete signals and their sampling is key to understanding how MedIL achieves arbitrary resolution decoding.

*How the paper uses it:* MedIL models medical images as continuous signals to enable resolution-flexible encoding and decoding.

▶ [Computational Imaging through Atmospheric Turbulence](https://www.youtube.com/watch?v=XKX4fOFI1jg) — Communications and Signal Processing Seminar Series · 1:01:26

### MedIL autoencoder architecture
The MedIL autoencoder architecture is the paper's central method, combining convolutional backbones with Local Texture Estimator modules to encode and decode medical images at arbitrary resolutions. Studying this architecture reveals how MedIL overcomes limitations of fixed-size latent diffusion models.

*How the paper uses it:* MedIL proposes a novel autoencoder architecture to encode and decode heterogeneous medical images without resampling.

▶ [A Disentangled Latent Space for Cross-Site MRI Harmonization | MICCAI 2020](https://www.youtube.com/watch?v=zVWIX75rYZM) — IACL JHU · 5 years ago

### MedIL paper talk *(the paper's own talk)*
The authors' own presentation of MedIL provides the most direct and detailed explanation of their novel method, experimental validation, and insights into limitations and future directions. This talk is invaluable for advanced readers seeking a comprehensive understanding of the paper.

*How the paper uses it:* This talk is the authors' own presentation of MedIL, offering deep insights into their approach and results.

▶ [Enhancing generative ML interpretability: disentangled latent spaces via generative factors](https://www.youtube.com/watch?v=sY-DafhAi6w) — LINCC · 7 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding MedIL, starting with the basics of continuous signal modeling and implicit neural representations, which underpin MedIL's ability to handle medical images at arbitrary resolutions. Next, it covers latent diffusion models to grasp the generative framework MedIL improves upon, followed by medical image reconstruction to appreciate the clinical importance of preserving anatomical details. Finally, it culminates with an explanation of MedIL's autoencoder architecture, tying all concepts together to understand the paper's novel approach.

### Continuous signal modeling in imaging *(prerequisite)*
Learn how signals and images can be represented as continuous functions rather than discrete pixels, which allows flexible sampling and resolution changes. This concept is key to understanding how MedIL treats medical images as continuous 3D signals for generation at arbitrary resolutions.

*How the paper uses it:* MedIL models medical images as continuous signals to avoid resampling and preserve fine anatomical details.

▶ [Introduction to Signal Processing: An Overview (Lecture 1)](https://www.youtube.com/watch?v=kjw6W0SZe04) — Nathan Kutz · 32:24

### Implicit neural representations *(prerequisite)*
Implicit neural representations use neural networks to represent continuous signals, enabling smooth and flexible encoding of complex data like images or 3D shapes. Understanding INRs is crucial to grasp how MedIL encodes and decodes medical images without fixed-size constraints.

*How the paper uses it:* MedIL leverages implicit neural representations to encode medical images as continuous 3D signals for arbitrary resolution reconstruction.

▶ [Lecture 5: Implicit Neural Representations (KAIST CS479 ...](https://www.youtube.com/watch?v=XCZPlMv7iKQ) — Minhyuk Sung · 1:12:54

### Latent diffusion models *(prerequisite)*
Latent diffusion models are generative models that operate in a compressed latent space to efficiently generate high-quality images. Understanding these models helps appreciate the baseline generative framework that MedIL improves upon for medical image generation.

*How the paper uses it:* MedIL improves downstream generative tasks by providing flexible latent encodings that enhance latent diffusion models' performance on medical images.

▶ [Latent Diffusion Models](https://www.youtube.com/watch?v=wuwByIh5kDU) — William Smith · 16:21

### Medical image reconstruction *(prerequisite)*
Medical image reconstruction involves creating accurate images from raw data, preserving critical anatomical details for clinical use. This foundational knowledge highlights why MedIL's ability to reconstruct images at native resolution without resampling is clinically important.

*How the paper uses it:* MedIL addresses challenges in reconstructing heterogeneous medical images while preserving fine anatomical features.

▶ [Webinar #14: Deep Learning-based Medical Image ...](https://www.youtube.com/watch?v=AsvcdYYXgBQ) — IEEE EMBS Technical Community on BIIP · 1:00:06

### MedIL autoencoder architecture
This section explains the specific architecture of MedIL, which combines convolutional backbones with Local Texture Estimator modules to encode and decode medical images flexibly. Understanding this architecture reveals how MedIL achieves its novel continuous and heterogeneous resolution capabilities.

*How the paper uses it:* MedIL's novel autoencoder design enables encoding and decoding of medical images at arbitrary resolutions without resampling.

▶ [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — Deepia · 2 years ago

## Already in your library

- [MedAI Session 29: Medical Image Analysis and Reconstruction ...](https://www.youtube.com/watch?v=HhqgbVnR2ZQ) — also for: An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI (Abhijit S. Pandya)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of MedIL's approach to encoding and generating heterogeneous medical images at arbitrary resolutions. The beginner project focuses on reproducing a key visualization from the paper using existing tools, the intermediate project involves running and extending the authors' released MedIL code on a public substitute dataset, and the advanced project tackles one of the paper's stated limitations by experimenting with reducing spectral bias in implicit neural representations for fine anatomical detail reconstruction.

### Beginner — Visualize Implicit Neural Representation of a 2D Medical Image Slice
*Effort: a weekend, ~8 hours*

You build a small Python notebook that loads a single 2D slice from a public brain MRI dataset (e.g., a T1-weighted slice from the OASIS dataset as a substitute) and fits a simple implicit neural representation (a small MLP) to model the image as a continuous function. Then you visualize the reconstructed image at multiple resolutions to demonstrate continuous decoding without resampling.

**Why it shows you understood the paper:** This project shows you understand the core idea of treating medical images as continuous signals via implicit neural representations, a foundational concept in MedIL. It also demonstrates awareness of the spectral bias limitation by observing reconstruction quality at different scales.

**Grounded in:** MedIL uses implicit neural representations (INRs) to model medical images as continuous 3D signals with physical coordinates, enabling encoding and decoding at arbitrary resolutions without resampling.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use a publicly available brain MRI slice from the OASIS dataset as a substitute for the paper's T1-weighted brain MRI data.

**Build it:**

1. Download a single 2D T1-weighted brain MRI slice from the OASIS dataset.
2. Implement a small MLP that takes 2D coordinates as input and outputs pixel intensity.
3. Train the MLP to fit the image intensities by minimizing mean squared error.
4. Visualize the reconstructed image by querying the MLP at the original and higher resolutions.
5. Compare the original and reconstructed images visually and note differences.

**Ships as:** A Jupyter notebook showing the implicit neural representation fitting process, visualizations of the original and reconstructed images at multiple resolutions, and commentary on reconstruction quality.

**Stretch goal:** Add a simple positional encoding or Fourier feature mapping to the input coordinates to improve reconstruction quality and observe effects on fine details.

### Intermediate — Run and Extend MedIL Autoencoder on Public Brain MRI Data
*Effort: 2 weekends, ~20 hours*

You clone and run the MedIL implementation from the authors' GitHub repository to encode and decode brain MRI volumes at native resolution. Using a public brain MRI dataset (e.g., OASIS or ADNI as a substitute), you fine-tune the MedIL model on native-resolution patches and compare reconstruction quality against a simple convolutional autoencoder baseline using metrics like PSNR or SSIM.

**Why it shows you understood the paper:** This project demonstrates practical skills in running and extending the authors' code, applying MedIL's core method to heterogeneous medical images, and evaluating reconstruction quality quantitatively, reflecting the paper's main contributions.

**Grounded in:** MedIL is trained in two stages: pretraining on downsampled volumes and fine-tuning on native-resolution patches. MedIL reconstructs native-resolution T1w brain MRIs with high quality, preserving fine anatomical features better than convolutional latent diffusion models.

**Tech stack:** Python 3.11, PyTorch, MedIL codebase from https://github.com/TylerSpears/medil, NumPy, scikit-image

**Data:** Use a public brain MRI dataset such as OASIS or ADNI as a substitute for the paper's T1-weighted brain MRI datasets.

**Build it:**

1. Clone the MedIL repository and set up the environment with required dependencies.
2. Download and preprocess a public brain MRI dataset to match MedIL input requirements.
3. Run the MedIL pretraining and fine-tuning stages on the dataset's native-resolution patches.
4. Implement a simple convolutional autoencoder baseline for comparison.
5. Evaluate and compare reconstruction quality using PSNR and SSIM metrics.
6. Document results with visual examples and metric tables.

**Verified links from the paper:**

- <https://github.com/TylerSpears/medil> — released by the paper's authors

**Ships as:** A GitHub repository with code, scripts, and a README documenting MedIL training and evaluation on public brain MRI data, including baseline comparison and quantitative results.

**Stretch goal:** Experiment with decoding MedIL latent representations at multiple arbitrary resolutions and visualize the differences.

### Advanced — Mitigate Spectral Bias in MedIL for Fine Anatomical Detail Reconstruction
*Effort: 3-4 weeks*

You extend the MedIL autoencoder by integrating positional encoding techniques (e.g., Fourier features) or alternative implicit representation architectures to reduce spectral bias. You retrain MedIL on native-resolution brain MRI patches and evaluate improvements in reconstructing fine anatomical structures such as narrow sulci or small vessels. You compare results quantitatively and qualitatively against the original MedIL model.

**Why it shows you understood the paper:** This project addresses a key limitation identified by the authors—spectral bias in implicit neural representations—and attempts a concrete improvement, demonstrating deep comprehension of MedIL's architecture and challenges, and capability for research-level extension.

**Grounded in:** MedIL exhibits spectral bias common to implicit neural representations, leading to challenges in reconstructing very fine, small-scale features such as narrow bronchial branches. Future directions include reducing spectral bias in implicit neural representations to better capture fine anatomical details.

**Tech stack:** Python 3.11, PyTorch, MedIL codebase from https://github.com/TylerSpears/medil, NumPy, scikit-image

**Data:** Use a public brain MRI dataset such as OASIS or ADNI as a substitute for the paper's T1-weighted brain MRI datasets.

**Build it:**

1. Study the MedIL architecture and identify where implicit neural representations are implemented.
2. Implement positional encoding (e.g., Fourier feature mapping) or alternative INR architectures within MedIL's encoder/decoder.
3. Retrain the modified MedIL model on native-resolution brain MRI patches.
4. Evaluate reconstruction quality focusing on fine anatomical details using metrics and visual inspection.
5. Compare results against the original MedIL model to assess improvements.
6. Document methodology, experiments, and findings in a detailed README.

**Verified links from the paper:**

- <https://github.com/TylerSpears/medil> — released by the paper's authors

**Ships as:** A GitHub repository with the modified MedIL code, training scripts, evaluation results, and a comprehensive report on spectral bias mitigation experiments.

**Stretch goal:** Explore conditional image generation by conditioning MedIL latent space on clinical metadata or segmentation masks to generate anatomically accurate images.
