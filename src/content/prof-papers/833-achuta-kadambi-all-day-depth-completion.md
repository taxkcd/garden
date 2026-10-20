---
title: "833 · All-day Depth Completion — Achuta Kadambi"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-achuta-kadambi"
source_hash: "ed947f85f753a65fb6afb3544812456e7b22a13a9e34906661858f89a60cbe19"
sequence: 833
generator: "outreach-garden: managed"
---

# 833 · All-day Depth Completion

## At a glance

- **Professor:** Achuta Kadambi
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [All-day Depth Completion](https://arxiv.org/pdf/2405.17315)
- **Authors:** Vadim Ezhov, Hyoungseob Park, Zhaoyang Zhang, Rishi Upadhyay, Howard Zhang, Chethan Chinder Chandrappa, Achuta Kadambi, Yunhao Ba, Julie Dorsey, Alex Wong
- **Year:** 2024

## Paper overview

This paper presents a method to estimate depth in 3D scenes accurately during both day and night by combining data from cameras and sparse LiDAR sensors. It uses synthetic data to train a model that predicts dense depth maps and their uncertainty from sparse LiDAR points. This model can be plugged into existing depth estimation systems to improve their performance under varying lighting conditions without needing extra training on nighttime images.

### Why it matters

**Research problem:** Depth estimation methods often fail in low-light or nighttime conditions because image-based photometric cues become unreliable. Existing methods trained on well-lit scenes do not generalize well to nighttime due to illumination changes and data imbalance.

**Why it matters:** Accurate depth estimation is crucial for applications like autonomous driving, robotics, and augmented reality, which must operate reliably around the clock under varying lighting conditions. Overcoming the limitations of current methods in low illumination is essential for safety and robustness.

**Key contributions:**

- Development of SpaDe, a lightweight network that predicts dense depth and uncertainty from sparse LiDAR points using synthetic data.
- Introduction of an uncertainty-driven residual learning (URL) scheme that uses SpaDe outputs to refine depth completion adaptively.
- Demonstration of SpaDe's plug-and-play capability to improve existing depth completion models without retraining.
- Forward compatibility of SpaDe allowing seamless integration of improved versions to boost performance.
- First approach to address all-day depth estimation by fusing image and sparse range data robustly under diverse illumination.

## About the professor

**Achuta Kadambi** — Assistant Professor of ECE and CS, Electrical and Computer Engineering, Univ. of California - Los Angeles.

Research interests: Computational Imaging, Computer Vision, Robotics, Machine Learning, Medical Devices

### Research links

- [Faculty/profile page](https://www.ee.ucla.edu/achuta-kadambi)
- [Professor website](http://visual.ee.ucla.edu/)
- [Social profile](https://twitter.com/AchutaKadambi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** depth completion and uncertainty estimation
**The paper assumes:** depth completion methods, predictive uncertainty estimation in computer vision, multi-sensor fusion for depth estimation
**Already in this field?** Skip this entirely if you already understand depth completion techniques and how uncertainty is modeled and used in depth estimation tasks.

To understand the core methodology of the paper "All-day Depth Completion," it is essential to grasp how sparse LiDAR depth data can be converted into dense depth maps and how predictive uncertainty is modeled and used to refine these estimates. The rigorous course option offers a deep, structured university-level introduction to 3D computer vision concepts foundational to depth completion, while the fast track provides a concise, practical introduction to stereo vision and depth estimation techniques relevant to the paper's sensor fusion approach. Choose the course for a thorough theoretical grounding and the fast track for a quicker, application-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [3D Computer Vision | National University of Singapore](https://www.youtube.com/playlist?list=PLxg0CGqViygP47ERvqHw_v7FVnUovJeaz) — CVRP Lab at NUS · 39 videos · 33.4h across 39 episodes

**Watch only this:** Lectures 1 (Parts 1 and 2), 2 (Parts 1 and 2), 5 (Parts 1, 2, and 3), and 6 (Parts 1, 2, and 3), totaling about 7.5 hours — these cover projective geometry, camera calibration, and single view metrology, foundational for depth completion.

*Why it unblocks this paper:* The "3D Computer Vision | National University of Singapore" playlist covers fundamental 3D vision topics including projective geometry, camera models, and multi-view geometry, which are essential for understanding depth estimation and sensor fusion techniques like those used in SpaDe and URL.

*If you want all of it:* 33.4 hours across 39 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Depth Measuring with Stereo Camera Python](https://www.youtube.com/playlist?list=PLCpB2LmtGbuel31gdKHSV_HBaZa2guc6Y) — Yumao Liu · 6 videos · 2.6h across 6 episodes

**Watch only this:** Episodes 1 through 3, about 1.25 hours — covering stereo vision basics, depth estimation, and camera calibration, which are key to grasping the paper's approach to depth completion.

*Why it unblocks this paper:* The "Depth Measuring with Stereo Camera Python" playlist provides a practical and concise introduction to depth estimation using stereo vision and camera calibration, directly relevant to understanding dense depth map generation from sparse inputs and sensor fusion.

*If you want all of it:* 2.6 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'All-day Depth Completion' paper, start by building foundational knowledge on multi-sensor fusion and predictive uncertainty in deep learning, as these underpin the method's robustness and adaptive refinement. Next, explore the role of synthetic data in training depth models to appreciate the generalization capabilities of SpaDe. Finally, focus on the core concept of sparse-to-dense depth completion, culminating with the authors' own talks on related depth completion techniques to gain direct insights into their approach and innovations.

### Multi-sensor Fusion for Depth Estimation *(prerequisite)*
Understanding how RGB images and sparse LiDAR data are combined is foundational for grasping the fusion approach in this paper. Multi-sensor fusion techniques enable leveraging complementary strengths of different sensors to improve depth estimation robustness under varying illumination.

*How the paper uses it:* The paper's approach relies on fusing sparse LiDAR depth maps with RGB images to achieve all-day depth completion.

▶ [Probabilistic Multi-View Fusion of Active Stereo Depth Maps](https://www.youtube.com/watch?v=hn663srGcho) — trailab · 11:05

### Predictive Uncertainty in Deep Learning *(prerequisite)*
Predictive uncertainty estimation is key to the uncertainty-driven residual learning (URL) scheme proposed in the paper. Understanding different types of uncertainty and their estimation methods helps in appreciating how the model adaptively refines depth predictions.

*How the paper uses it:* The URL scheme uses predicted uncertainty to weight residuals and improve depth completion adaptively.

▶ [Predictive Uncertainty Estimation of Neural Networks with Sparse Gaussian Processes](https://www.youtube.com/watch?v=vu2TnDEqDRk) — DLR RM · 4y ago

### Synthetic Data for Training Depth Models *(prerequisite)*
Synthetic data enables training models like SpaDe without requiring extensive real-world nighttime datasets, facilitating generalization across illumination conditions. Learning about synthetic data generation and its use in depth estimation provides context for the training strategy.

*How the paper uses it:* SpaDe is trained on synthetic data to predict dense depth and uncertainty, enabling robust generalization to real-world datasets.

▶ [Alex Wong: The Know-How of Multimodal Depth Perception ...](https://www.youtube.com/watch?v=sYjTx26VUVQ) — UMass Machine Learning & Friends Lunch · 59:35

### Sparse-to-Dense Depth Completion
Sparse-to-dense depth completion methods form the core technical foundation of the paper, as SpaDe predicts dense depth and uncertainty from sparse LiDAR points. Understanding prior work in this area clarifies the novelty and improvements introduced.

*How the paper uses it:* SpaDe is a lightweight network that performs sparse-to-dense depth completion with uncertainty prediction.

▶ [Sparse-To-Dense: Depth Prediction from Sparse Depth Samples and a Single Image](https://www.youtube.com/watch?v=lygq9FVqQrc) — ICRA 2018 · 8y ago

### All-day Depth Completion paper talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper authors or closely related presentations provide the most precise and detailed insights into the methodology, experiments, and contributions. These talks help connect foundational concepts to the specific innovations of the paper.

*How the paper uses it:* Although no direct talk of this exact paper was found, related depth completion talks by Alex Wong and others provide valuable context.

▶ [Unsupervised Depth Completion from Visual Inertial Odometry (RAL 2020 and ICRA 2020)](https://www.youtube.com/watch?v=oBCKO4TH5y0) — Alex Wong · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the 'All-day Depth Completion' paper. Start with multi-sensor fusion to grasp how RGB images and sparse LiDAR data combine, then learn about predictive uncertainty in deep learning, followed by the role of synthetic data in training depth models. Finally, focus on sparse-to-dense depth completion, the core method SpaDe uses to predict dense depth and uncertainty from sparse points.

### Multi-sensor Fusion for Depth Estimation *(prerequisite)*
Multi-sensor fusion combines data from different sensors, like cameras and LiDAR, to produce more reliable and accurate depth estimates. Understanding this helps appreciate how the paper fuses sparse LiDAR depth with dense RGB images to overcome illumination challenges.

*How the paper uses it:* The paper's approach relies on fusing sparse LiDAR and RGB images to achieve robust depth estimation under varying lighting.

▶ [Probabilistic Multi-View Fusion of Active Stereo Depth Maps](https://www.youtube.com/watch?v=hn663srGcho) — trailab · 11:05

### Predictive Uncertainty in Deep Learning *(prerequisite)*
Predictive uncertainty quantifies how confident a deep learning model is about its predictions, which is crucial for adaptive refinement and safety-critical applications. Learning this concept clarifies how the paper uses uncertainty to improve depth completion results.

*How the paper uses it:* The paper uses predictive uncertainty to adaptively refine depth predictions via the uncertainty-driven residual learning scheme.

▶ [Uncertainty (Aleatoric vs Epistemic) | Machine Learning](https://www.youtube.com/watch?v=Osju20L6Z3I) — TwinEd Productions · 5y ago

### Synthetic Data for Training Depth Models *(prerequisite)*
Synthetic data is artificially generated data used to train models when real labeled data is scarce or hard to obtain. This concept explains how the paper trains SpaDe on synthetic datasets to generalize well to real-world scenarios without needing nighttime images.

*How the paper uses it:* SpaDe is trained on synthetic data to predict dense depth and uncertainty, enabling all-day depth completion without extra nighttime training data.

▶ [What is Synthetic Data? No, It's Not "Fake" Data](https://www.youtube.com/watch?v=HIusawrGBN4) — IBM Technology · 3y ago

### Sparse-to-Dense Depth Completion
Sparse-to-dense depth completion methods predict dense depth maps from sparse depth samples, often combining them with images. This is the core technique SpaDe uses to convert sparse LiDAR points into dense depth and uncertainty maps.

*How the paper uses it:* SpaDe is a lightweight sparse-to-dense network that predicts dense depth and uncertainty from sparse LiDAR points as a plug-and-play module.

▶ [Sparse-To-Dense: Depth Prediction from Sparse Depth Samples and a Single Image](https://www.youtube.com/watch?v=lygq9FVqQrc) — ICRA 2018 · 8y ago

## Already in your library

- [MIT 6.S191: Evidential Deep Learning and Uncertainty](https://www.youtube.com/watch?v=toTcf7tZK8c) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)
- [How Neural Nets estimate depth from 2D images? Monocular Depth Estimation Explained!](https://www.youtube.com/watch?v=sz30TDttIBA) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the All-day Depth Completion paper. The beginner project recreates a core component of the SpaDe network's sparse-to-dense depth completion using synthetic sparse depth inputs. The intermediate project implements the full SpaDe method on a public dataset, comparing its performance to a simple baseline depth completion model. The advanced project extends the paper by exploring improved incorporation of predictive uncertainty in downstream depth completion, addressing one of the paper's stated limitations.

### Beginner — Sparse-to-Dense Depth Completion with Synthetic Data
*Effort: a weekend, ~8 hours*

You build a lightweight neural network that takes sparse depth points as input and predicts a dense depth map, mimicking the SpaDe network's core function. You train this model on synthetic sparse depth data generated from a public 3D scene dataset or by simulating sparse points from dense depth maps.

**Why it shows you understood the paper:** This project shows you understand the key idea of sparse-to-dense depth completion and how synthetic data can be used to train such a model, a central contribution of the paper.

**Grounded in:** Development of SpaDe, a lightweight network that predicts dense depth and uncertainty from sparse LiDAR points using synthetic data.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Use the KITTI Depth Completion dataset or simulate sparse depth points from publicly available dense depth maps (e.g., NYU Depth V2) as a substitute for the paper's synthetic data.

**Build it:**

1. Obtain a public dataset with dense depth maps (e.g., KITTI or NYU Depth V2).
2. Simulate sparse depth points by randomly sampling a small subset of pixels from the dense depth maps.
3. Design and implement a lightweight convolutional neural network that inputs sparse depth maps and outputs dense depth predictions.
4. Train the network on the synthetic sparse-to-dense task using the simulated sparse points and ground truth dense depth.
5. Evaluate the model qualitatively by visualizing predicted dense depth maps and quantitatively using RMSE or MAE metrics.

**Ships as:** A GitHub repository with code to generate sparse depth inputs, train the sparse-to-dense network, and visualize results, plus a README explaining the approach and evaluation.

**Stretch goal:** Add uncertainty prediction as a second output channel to the network, training it to estimate confidence in depth predictions.

### Intermediate — Reimplementation of SpaDe for All-day Depth Completion
*Effort: 1-3 weekends*

You implement the SpaDe network as described in the paper, training it on synthetic data or a public dataset with sparse and dense depth maps. You then integrate SpaDe as a preprocessing module for an existing depth completion baseline and compare performance with and without SpaDe on day and night scenes.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method and validate its plug-and-play improvement on depth completion models, reproducing the key quantitative improvements reported.

**Grounded in:** SpaDe improves pretrained depth completion models by approximately 11.65% on average across day and night scenarios on the nuScenes dataset; SpaDe can be used plug-and-play without retraining existing models.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, Matplotlib

**Data:** Use the nuScenes dataset as a substitute for the paper's evaluation data, focusing on scenes with sparse LiDAR and RGB images; synthetic training data can be simulated or adapted from existing datasets.

**Build it:**

1. Implement the SpaDe network architecture based on the paper's description.
2. Prepare training data by simulating sparse depth inputs and corresponding dense depth ground truth from nuScenes or similar datasets.
3. Train SpaDe to predict dense depth and optionally uncertainty from sparse depth inputs.
4. Select a simple pretrained depth completion baseline model (e.g., a known open-source method) and integrate SpaDe as a preprocessing step to densify sparse depth inputs.
5. Evaluate and compare depth completion performance with and without SpaDe on day and night scenes using standard metrics (e.g., RMSE).
6. Document the performance improvements and visualize qualitative results.

**Ships as:** A GitHub repository with SpaDe implementation, integration code with a baseline depth completion model, evaluation scripts, and a detailed README with results and analysis.

**Stretch goal:** Implement the uncertainty-driven residual learning (URL) scheme from the paper to further refine depth predictions based on SpaDe's uncertainty outputs.

### Advanced — Incorporating Predictive Uncertainty into Downstream Depth Completion
*Effort: a few weeks*

You extend the SpaDe method by designing and implementing a downstream depth completion model that explicitly incorporates SpaDe's predictive uncertainty to adaptively refine depth predictions. This addresses the paper's limitation regarding the need for better utilization of uncertainty in downstream models.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions by tackling the challenge of leveraging uncertainty estimates to improve depth completion robustness, potentially advancing the state of the art.

**Grounded in:** The downstream depth completion models still require design improvements to fully leverage predictive uncertainty.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, Matplotlib

**Data:** Use the nuScenes dataset for evaluation and synthetic or simulated sparse-to-dense training data as in previous projects.

**Build it:**

1. Reimplement or reuse the SpaDe network to obtain dense depth and uncertainty predictions from sparse depth inputs.
2. Design a downstream depth completion model that takes SpaDe's depth and uncertainty outputs as inputs.
3. Incorporate uncertainty into the model's loss function or prediction refinement mechanism, e.g., by weighting residuals or using uncertainty-aware layers.
4. Train the downstream model end-to-end or in stages on synthetic or public datasets.
5. Evaluate the model's performance compared to baseline depth completion models without uncertainty integration, focusing on low illumination and high uncertainty regions.
6. Analyze and visualize how uncertainty improves depth prediction quality and robustness.

**Ships as:** A comprehensive GitHub repository with SpaDe and the uncertainty-aware downstream model implementations, training and evaluation scripts, and a README detailing methodology, experiments, and insights.

**Stretch goal:** Experiment with adaptive imaging hardware simulation or multi-modal sensor fusion extensions to further improve depth estimation under extreme conditions.
