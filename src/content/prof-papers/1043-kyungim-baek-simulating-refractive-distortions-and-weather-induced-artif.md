---
title: "1043 · Simulating Refractive Distortions and Weather-Induced Artifacts for Resource-Constrained Autonomous Perception — Kyungim Baek"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kyungim-baek"
source_hash: "f12b6c521d20a6c34c337d02d8b41dc2f523726bbab1dd769006f253b955f3e2"
sequence: 1043
generator: "outreach-garden: managed"
---

# 1043 · Simulating Refractive Distortions and Weather-Induced Artifacts for Resource-Constrained Autonomous Perception

## At a glance

- **Professor:** Kyungim Baek
- **Institution:** University of Hawaii at Manoa
- **Paper:** [Simulating Refractive Distortions and Weather-Induced Artifacts for Resource-Constrained Autonomous Perception](https://arxiv.org/pdf/2507.05536)
- **Authors:** Moseli Mots’oehli, Feimei Chen, Hok Wai Chan, Itumeleng Tlali, Thulani Babeli, Kyungim Baek, Huaijin Chen
- **Year:** 2025

## Paper overview

This paper presents a lightweight and scalable method to simulate common optical distortions and weather effects on dashcam footage from Southern Africa, enabling the creation of augmented datasets for autonomous driving research in resource-limited settings. It introduces a pipeline to add refractive lens distortions and weather artifacts like fog and lens flare, and benchmarks image restoration models that remove these effects to recover clean images.

### Why it matters

**Research problem:** There is a scarcity of autonomous vehicle datasets from developing regions, especially Africa, which limits robust perception research for autonomous driving under diverse and challenging environmental conditions. Collecting and labeling data or running expensive simulations is often infeasible in these low-resource settings.

**Why it matters:** Without sufficient and realistic data capturing the optical distortions and weather conditions typical in underrepresented regions, autonomous driving systems cannot be reliably developed or tested for those contexts, hindering the democratization and inclusivity of autonomous vehicle technologies.

**Key contributions:**

- A scalable synthetic distortion and artifact pipeline tailored for low-resource autonomous driving data augmentation without costly hardware or high-budget rendering.
- Context-aware weather artifact simulation modeling realistic African driving conditions such as fog and sun glare.
- Baseline undistortion and deweathering models and benchmarks using CNN, Transformer, and diffusion architectures.
- Release of distortion toolkit, augmented dataset splits, and benchmark results to support future research in underrepresented African contexts.

## About the professor

**Kyungim Baek** — Associate Professor, University of Hawaii at Manoa.

Research interests: Computer vision, machine learning, computational modeling of visual perception.

### Research links

- [Faculty/profile page](https://www.ics.hawaii.edu/people)
- [Professor website](http://www2.hawaii.edu/~kyungim/)
- [DBLP](https://dblp.uni-trier.de/pers/hd/b/Baek:Kyungim)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Image Restoration and Enhancement
**The paper assumes:** image restoration techniques, optical distortion modeling, convolutional neural networks for image enhancement
**Already in this field?** Skip this entirely if you already understand modern image restoration methods and the basics of optical image distortions and enhancement.

To understand the simulation and correction of optical distortions and weather-induced artifacts in autonomous driving images, a solid grasp of image restoration and enhancement techniques is essential. The rigorous course offers a deep dive into medical image analysis methods, including image processing fundamentals and restoration techniques, suitable for readers seeking comprehensive technical depth. The fast track provides a concise, focused introduction to image restoration concepts, ideal for readers needing a quick yet clear conceptual foundation before engaging with the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Medical Image Analysis](https://www.youtube.com/playlist?list=PLyqSpQzTE6M_ZBtBMkhFNMg6RA8vsBdBk) — NPTEL-NOC IITM · 51 videos · 23.0h across 51 episodes

**Watch only this:** Episodes 7 to 13 (Basic Image Processing Methods, Contrast Enhancement, Histogram Equalization, Edge Enhancement - Laplacian, Noise Reduction, Diffusion Filtering, Bayesian Image Restoration), about 3.2 hours — these cover core image restoration concepts and methods used in the paper.

*Why it unblocks this paper:* This NPTEL-NOC IITM Medical Image Analysis course covers foundational and advanced image processing and restoration techniques, including noise reduction, diffusion filtering, and Bayesian image restoration, directly relevant to understanding the paper's augmentation and restoration pipeline.

*If you want all of it:* 23.0 hours across 51 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Image Restoration](https://www.youtube.com/playlist?list=PLf8KLRBAJZmeHqVxPl3DqAO0fEQPIvPjW) — Concepts In Depth And Easy ! · 9 videos · 1.3h across 9 episodes

**Watch only this:** Episodes 1, 2, 3, 5, and 8 (Image Restoration | Digital Image Processing, Image Degradation Model, Noise Models, Gaussian Noise, Impulse Noise | Salt and Pepper Noise), about 40 minutes — these episodes cover the essential background on image degradation and restoration.

*Why it unblocks this paper:* This short playlist from Concepts In Depth And Easy ! provides clear, concise explanations of image restoration fundamentals and noise models, giving a quick but solid conceptual overview of the key ideas behind image degradation and restoration relevant to the paper.

*If you want all of it:* 1.3 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on simulating refractive distortions and weather-induced artifacts for autonomous perception, start with foundational concepts in optical lens distortion modeling and procedural texture generation using Perlin noise, as these underpin the simulation of refractive effects. Next, explore weather artifact simulation in computer vision to grasp how environmental effects like fog and lens flare are modeled. Then, study diffusion probabilistic models for image restoration, since these are among the baseline architectures benchmarked in the paper. Finally, conclude with the authors' own talk or related advanced talks to gain direct insights into their methodology and results.

### Optical lens distortion modeling *(prerequisite)*
Understanding optical lens distortion is foundational for simulating refractive distortions caused by lenses, such as radial distortion and warping effects. The chosen video provides a rigorous academic lecture from a university professor covering theoretical and practical aspects of lens distortion in camera systems.

*How the paper uses it:* The paper simulates refractive distortions including radial lens distortion and warping effects, making lens distortion modeling essential background.

▶ [Image formation: pixels: lens distortion](https://www.youtube.com/watch?v=hY4Dvw2A_PI) — Hany Farid, Professor at Dartmouth College · 11:19 · 3y ago

### Procedural texture generation Perlin noise *(prerequisite)*
Perlin noise is a key procedural technique used to simulate naturalistic distortions and turbulence effects in images. The selected video is a detailed coding lecture from a reputable academic channel explaining Perlin noise generation and its applications, suitable for advanced learners.

*How the paper uses it:* The paper uses Perlin noise to simulate naturalistic refractive distortions caused by air turbulence and lens imperfections.

▶ [Coding Challenge 11: 3D Terrain Generation with Perlin Noise in Processing](https://www.youtube.com/watch?v=IKB1hWWedMk) — The Coding Train · 22:44 · 10y ago

### Weather artifact simulation computer vision *(prerequisite)*
Modeling weather-induced artifacts like fog and lens flare is critical for augmenting datasets with realistic environmental effects. The recommended video is a recent university-level keynote talk on spatial AI and generative 4D worlds, covering advanced computer vision techniques relevant to weather simulation.

*How the paper uses it:* The paper simulates weather artifacts such as uniform and heterogeneous fog and lens flare to augment dashcam footage realistically.

▶ [3D Computer Vision & Deep Learning | Prof. Daniel Cremers on Spatial AI and Generative 4D Worlds](https://www.youtube.com/watch?v=B2t4ckHzOg0) — SAIConference · 35:15 · 1d ago

### Diffusion probabilistic models image restoration *(prerequisite)*
Diffusion probabilistic models represent a state-of-the-art approach to image restoration and generation. The selected video is a PhD seminar lecture from a recognized research institution that thoroughly explains diffusion models applied to image restoration, matching the paper's use of DDPM as a baseline.

*How the paper uses it:* The paper benchmarks a diffusion probabilistic model for removing distortions and weather artifacts from images.

▶ [Diffusion Models in Image Restoration - Bahjat Kawar PhD Seminar](https://www.youtube.com/watch?v=iXTryAQFcR8) — Bahjat Kawar · 58:14 · 3y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides the most direct and authoritative insight into their methodology, experimental setup, and findings. Although no exact talk on this paper was found, the closest relevant advanced talk on optics by a domain expert is included to provide context on optical distortions.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on simulating refractive distortions and weather artifacts.

▶ [Julius Muschaweck: The case for angular extent X](https://www.youtube.com/watch?v=1OzaphP2bL4) — Nonimaging Optics Conference · 32:27 · 10mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's contributions on simulating refractive distortions and weather-induced artifacts for autonomous driving perception, start by building foundational knowledge on optical lens distortion and procedural texture generation (Perlin noise), which are key to simulating realistic image distortions. Then, learn about weather artifact simulation in computer vision to grasp how environmental effects like fog and lens flare are modeled. Next, explore image restoration deep learning methods that recover clean images from corrupted inputs. Finally, study diffusion probabilistic models as a modern approach benchmarked in the paper for artifact removal.

### Optical lens distortion modeling *(prerequisite)*
Optical lens distortion explains how lenses cause images to warp, such as barrel or pincushion distortion, which is crucial for simulating refractive effects in images. Understanding these distortions helps in modeling and correcting the visual artifacts introduced by imperfect lenses.

*How the paper uses it:* The paper simulates refractive distortions including radial lens distortion to augment dashcam images realistically.

▶ [Why Do Progressive Lenses Have Distortion at The Sides?](https://www.youtube.com/watch?v=1bGwFJW7_SU) — Laramy-K Optical · 16:32 · 7y ago

### Procedural texture generation Perlin noise *(prerequisite)*
Perlin noise is a technique to generate smooth, natural-looking textures and patterns algorithmically, often used to simulate natural phenomena like turbulence or surface irregularities. It helps create realistic, non-uniform distortions in images without manual design.

*How the paper uses it:* The paper uses Perlin noise to simulate naturalistic refractive distortions caused by air turbulence and lens imperfections.

▶ [Perlin Noise in p5.js](https://www.youtube.com/watch?v=Qf4dIN99e2w) — The Coding Train · 11:33 · 10y ago

### Weather artifact simulation computer vision *(prerequisite)*
Weather artifact simulation involves modeling environmental effects such as fog and lens flare that degrade image quality, important for training robust perception systems. Understanding these simulations helps in creating datasets that reflect real-world challenging conditions.

*How the paper uses it:* The paper’s pipeline adds homogeneous and heterogeneous fog and lens flare to dashcam images to mimic African driving conditions.

▶ [New Weather Simulator: Almost Perfect! 🌤](https://www.youtube.com/watch?v=mY2ozPHn0w4) — Two Minute Papers · 5:29 · 4y ago

### Image restoration deep learning
Image restoration with deep learning involves training models to recover clean images from corrupted or distorted inputs, using architectures like CNNs and Transformers. This is essential for improving perception in autonomous systems under adverse conditions.

*How the paper uses it:* The paper benchmarks ResUnet, SegFormer-B1, and diffusion models for removing simulated distortions and weather artifacts.

▶ [Jean Ponce. Lecture "Machine Learning for Image Restoration"](https://www.youtube.com/watch?v=rZ767gFeb1g) — Strelka Institute/Институт Стрелка · 45:37 · 7y ago

### Diffusion probabilistic models image restoration
Diffusion probabilistic models are a recent generative approach that iteratively denoise images to restore or generate high-quality outputs, showing promise in image restoration tasks. Understanding their mechanism provides insight into advanced restoration techniques.

*How the paper uses it:* The paper uses a diffusion probabilistic model as one of the baselines for image restoration from distortions and weather artifacts.

▶ [Lec 44 Introduction to Diffusion Model](https://www.youtube.com/watch?v=scQsAvXIOWw) — NPTEL - Indian Institute of Science, Bengaluru · 37:23 · 2mo ago

## Already in your library

- [4: Deep Learning for Computer Vision – Transfer Learning and Fine-Tuning; Intro to HuggingFace](https://www.youtube.com/watch?v=8xh7Y0pBrCE) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Image Restoration & Degradation Model in Digital Image Processing (DIP) | EC Academy](https://www.youtube.com/watch?v=hL1aHfrDFPs) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Lens Related Issues | Image Formation](https://www.youtube.com/watch?v=hzOeqCb2Fg4) — also for: Evaluating effects of focal length and viewing angle in a comparison of recent face landmark and alignment methods (Eric Patterson)
- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [MIT 6.S192 - Lecture 22: Diffusion Probabilistic Models ...](https://www.youtube.com/watch?v=XCUlnHP1TNM) — also for: Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes (Julian Togelius)
- [Lecture 03: Denoising Diffusion Probabilistic Models 1 (Diffusion and Flow Models, Fall 2025, KAIST)](https://www.youtube.com/watch?v=qiFZQvcqTOo) — also for: DiTVC: One-Shot Voice Conversion via Diffusion Transformer with Environment and Speaking Rate Cloning (Adam Finkelstein)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's core contributions in simulating and restoring refractive and weather-induced distortions in autonomous driving images from low-resource African contexts. The beginner project focuses on reproducing a simple weather artifact simulation and restoration pipeline using familiar tools. The intermediate project involves reimplementing the paper's distortion and artifact augmentation pipeline and benchmarking a baseline restoration model on a substitute dataset. The advanced project extends the paper by addressing one of its limitations, exploring adaptive distortion parameter estimation to improve refractive undistortion accuracy in resource-constrained settings.

### Beginner — Simulate and Remove Fog on Dashcam Images
*Effort: a weekend, ~8 hours*

You build a simple pipeline that adds uniform fog to dashcam images and trains a small CNN-based model (like a ResUnet variant) to remove the fog and restore clean images. This reproduces the paper's weather artifact simulation and restoration on a small scale.

**Why it shows you understood the paper:** This project shows you understand the procedural weather artifact simulation (fog) and the basics of image restoration benchmarking, replicating the paper's key weather module and demonstrating the effectiveness of CNN-based deweathering.

**Grounded in:** Key contribution: Context-aware weather artifact simulation modeling realistic African driving conditions such as fog; Key result: ResUnet achieved highest PSNR on weather artifact removal.

**Tech stack:** Python 3.11, PyTorch, OpenCV, Jupyter Notebook

**Data:** Use publicly available dashcam images from a substitute dataset such as the Berkeley DeepDrive dataset or any open dashcam image set, as the paper's own dataset is not released.

**Build it:**

1. Collect a small set (~100) of dashcam images from a public dataset.
2. Implement a simple uniform fog simulation by blending a white fog layer with the images using alpha blending.
3. Prepare paired clean and foggy images for supervised training.
4. Build and train a small ResUnet-like CNN model to remove fog from images.
5. Evaluate restoration quality using PSNR and visualize before/after images.
6. Write a README explaining the simulation method, model architecture, and results.

**Ships as:** A GitHub repo with code to simulate fog, train a CNN to remove it, evaluation metrics, and example visualizations demonstrating restoration quality.

**Stretch goal:** Add heterogeneous fog simulation using Perlin noise to vary fog density spatially and retrain the model.

### Intermediate — Reimplement Distortion and Weather Augmentation Pipeline with Baseline Restoration
*Effort: 2-3 weekends, ~20 hours*

You reimplement the paper's procedural augmentation pipeline that applies refractive distortions (radial lens distortion, Perlin noise, Thin-Plate Spline warping) and weather artifacts (uniform and heterogeneous fog, lens flare) to dashcam images. Then you train and benchmark a baseline image restoration model (ResUnet) to recover clean images, reporting PSNR metrics.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the core method of the paper—synthetic distortion and artifact generation tailored for low-resource autonomous driving data augmentation—and benchmark restoration models, showing grasp of both augmentation and restoration tasks.

**Grounded in:** Key contribution: A scalable synthetic distortion and artifact pipeline tailored for low-resource autonomous driving data augmentation; Key result: ResUnet and DDPM models performed comparably on refractive undistortion.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Jupyter Notebook

**Data:** Use a publicly available dashcam dataset such as Berkeley DeepDrive or KITTI as a substitute for the paper's Southern African dashcam footage.

**Build it:**

1. Implement radial lens distortion simulation using OpenCV camera models.
2. Add Perlin noise and Thin-Plate Spline warping to simulate refractive distortions.
3. Implement weather artifact simulation: uniform fog, heterogeneous fog (using Perlin noise), and lens flare.
4. Generate paired clean and corrupted images with corresponding distortion maps.
5. Train a ResUnet model to restore clean images from distorted inputs.
6. Evaluate restoration performance using PSNR and compare results with a simple baseline (e.g., no restoration).
7. Document the pipeline, model training, and evaluation in a detailed README.

**Ships as:** A GitHub repo containing the augmentation pipeline code, restoration model training scripts, evaluation metrics, and visual examples of distortions and restorations.

**Stretch goal:** Add a SegFormer-B1 Transformer-based restoration model and compare its performance with ResUnet.

### Advanced — Adaptive Distortion Parameter Estimation for Improved Refractive Undistortion
*Effort: 3-4 weeks*

You extend the paper by developing an adaptive or learned distortion parameter estimation module that predicts distortion parameters from corrupted images to improve refractive undistortion accuracy. Integrate this with the restoration pipeline and evaluate improvements over fixed-parameter models.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper—residual distortions remain after undistortion, especially for radial lens effects—by implementing a novel adaptive approach, demonstrating deep comprehension and research potential.

**Grounded in:** Limitation: Refractive undistortion models still leave visible residual distortions, indicating room for improvement in handling strong radial lens effects; Future direction: Exploring adaptive or learned distortion parameter estimation methods.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Jupyter Notebook

**Data:** Use the same substitute dashcam dataset as in the intermediate project with synthetic distortions applied.

**Build it:**

1. Reimplement the refractive distortion simulation pipeline from the intermediate project.
2. Design a neural network module that estimates distortion parameters (e.g., radial distortion coefficients) from distorted images.
3. Integrate the parameter estimator with the undistortion pipeline to adaptively correct distortions.
4. Train the combined system end-to-end or in stages using paired clean and distorted images.
5. Evaluate restoration quality quantitatively (PSNR) and qualitatively, comparing with fixed-parameter undistortion models.
6. Document methodology, experiments, and results in a comprehensive README.

**Ships as:** A GitHub repo with code for adaptive distortion parameter estimation, integrated undistortion pipeline, training scripts, evaluation metrics, and visual comparisons showing improved correction.

**Stretch goal:** Explore lightweight diffusion or hybrid models for undistortion that incorporate adaptive parameter estimation, targeting low-resource deployment.
