---
title: "416 · Robust Indoor Localization via Conformal Methods and Variational Bayesian Adaptive Filtering — Yuanyuan Yang"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuanyuan-yang"
source_hash: "e33f84f82611671bc339264bf754584b405545abf2c0c0fc1dd54dcbd3585817"
sequence: 416
generator: "outreach-garden: managed"
---

# 416 · Robust Indoor Localization via Conformal Methods and Variational Bayesian Adaptive Filtering

## At a glance

- **Professor:** Yuanyuan Yang
- **Institution:** Stony Brook University
- **Paper:** [Robust Indoor Localization via Conformal Methods and Variational Bayesian Adaptive Filtering](https://arxiv.org/pdf/2505.08639)
- **Authors:** Zhiyi Zhou, Dongzhuo Liu, Songtao Guo, Yuanyuan Yang
- **Year:** 2025

## Paper overview

This paper presents a new method to improve indoor localization accuracy and robustness by combining variational Bayesian adaptive filtering, Huber M-estimation, and conformal outlier detection. The approach adapts to dynamic noise and outliers without assuming Gaussian noise, significantly improving positioning accuracy and reducing errors in indoor environments.

### Why it matters

**Research problem:** Indoor localization systems face challenges such as non-Gaussian noise, environmental interference, and measurement outliers that degrade accuracy and robustness. Traditional methods relying on Gaussian noise assumptions and fixed thresholds fail to adapt to dynamic indoor environments.

**Why it matters:** Accurate and reliable indoor localization is critical for IoT applications including autonomous robotics, wearable devices, and smart buildings. Improving robustness to noise and outliers enables safer and more effective deployment of these technologies in real-world settings.

**Key contributions:**

- Development of a VB-UKF hybrid filter for simultaneous state and noise covariance estimation enabling real-time adaptation.
- Integration of dual-layer outlier detection combining Huber M-estimation and conformal prediction with sliding-window calibration for statistical guarantees.
- Theoretical proofs of semi-positive definiteness of Huber-weighted covariance matrices and coverage bounds for sliding-window conformal prediction in time series.
- Extensive experiments demonstrating significant improvements in fingerprint matching accuracy and positioning error reduction on geomagnetic datasets.

## About the professor

**Yuanyuan Yang** — Distinguished Professor, Electrical and Computer Engineering, Stony Brook University.

Research interests: Edge computing, quantum computing, data center networking, wireless and mobile networks, parallel and distributed computing and systems.

### Research links

- [Faculty/profile page](https://www.cs.stonybrook.edu/people/faculty/YuanyuanYang)
- [Professor website](https://www.ece.stonybrook.edu/~yang/)
- [Resolved homepage](http://www.ece.stonybrook.edu/~yang)
- [Lab website](http://mcl.cewit.stonybrook.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=sPDAJ7MAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Variational Bayesian Filtering
**The paper assumes:** variational Bayesian inference, Bayesian filtering, nonlinear state estimation
**Already in this field?** Skip this entirely if you already understand Bayesian filtering methods and variational inference for state-space models.

This background playlist selection is designed to help you understand variational Bayesian filtering, a core method used in the paper for robust indoor localization. The rigorous course option offers a deep dive into the mathematical and algorithmic foundations, while the fast track option provides a concise, intuitive introduction to Bayesian filtering concepts relevant to the paper's approach. Choose the lane that fits your available time and depth of understanding needed.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Kalman Filter - VISUALLY EXPLAINED!](https://www.youtube.com/watch?v=-DiZGpAh7T4) — Kapil Sachdeva · 30:57 · 5 years ago

**Watch only this:** Full video, 30 minutes 57 seconds

*Why it unblocks this paper:* This single video tutorial 'Kalman Filter - VISUALLY EXPLAINED!' provides a clear, visual explanation of Bayesian filtering concepts including the Kalman filter, which is foundational to understanding variational Bayesian adaptive filtering used in the paper. It is concise and accessible for quick background.

*If you want all of it:* 30 minutes 57 seconds

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on robust indoor localization via conformal methods and variational Bayesian adaptive filtering, start with foundational concepts such as the Unscented Kalman Filter and Huber M-estimation, which are key components of the proposed hybrid filtering framework. Then, study conformal prediction and outlier detection methods that provide statistical guarantees for robustness. Finally, focus on the core concept of variational Bayesian adaptive filtering and the authors' own talk to grasp the novel integration and contributions of the paper.

### Unscented Kalman filter *(prerequisite)*
The Unscented Kalman Filter (UKF) is a nonlinear state estimation method foundational to the paper's hybrid filtering framework. Understanding UKF is essential as it forms the basis for the variational Bayesian adaptive filtering approach used for joint state and noise covariance estimation.

*How the paper uses it:* The paper integrates UKF within a variational Bayesian adaptive filtering framework to handle nonlinear state estimation in indoor localization.

▶ [Unscented Kalman Filter (UKF)](https://www.youtube.com/watch?v=k68cVGRH8_0) — Gustaf Hendeby · 11:59 · 6 years ago

### Huber M-estimation *(prerequisite)*
Huber M-estimation is a robust statistical technique used for mild outlier suppression in measurement data. It is critical to understand this method as it forms one layer of the paper's dual-layer outlier detection strategy to improve robustness against noise and outliers.

*How the paper uses it:* The paper employs Huber M-estimation to suppress mild outliers in the measurement data as part of its robust filtering approach.

▶ [STSW04 | Prof. Pradeep Ravikumar | Robust Estimation via Robust Gradient Estimation](https://www.youtube.com/watch?v=uwrbFMwPu1g) — INI Seminar Room 1 · 56:08 · 7 months ago

### Conformal prediction and outlier detection *(prerequisite)*
Conformal prediction provides statistical guarantees and dynamic thresholding for outlier detection, which is crucial for the paper's approach to robust indoor localization. Understanding conformal methods helps in grasping how the paper achieves controlled false alarm rates and reliable outlier detection in time series data.

*How the paper uses it:* The paper integrates conformal outlier detection with sliding-window calibration to provide statistical guarantees for outlier detection in indoor localization.

▶ [Rina Foygel Barber: An introduction to conformal prediction and distribution-free inference](https://www.youtube.com/watch?v=s7NPuCgQtfs) — Centre International de Rencontres Mathématiques · 56:46 · 1 year ago

### Variational Bayesian adaptive filtering
Variational Bayesian adaptive filtering is the core method for joint state and noise covariance estimation that adapts to dynamic noise conditions. This advanced Bayesian approach underpins the paper's novel hybrid filtering framework and is essential for understanding its real-time adaptation capabilities.

*How the paper uses it:* The paper develops a VB-UKF hybrid filter leveraging variational Bayesian adaptive filtering for simultaneous state and noise covariance estimation.

▶ [Variational Gaussian Process State-Space Models.](https://www.youtube.com/watch?v=f2fnE-xjEpE) — Microsoft Research · 21:46 · 10 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own presentation provides direct insights into their novel method, experimental results, and theoretical contributions. Watching this talk offers the most precise and authoritative understanding of the paper's approach and innovations.

*How the paper uses it:* This talk is by the authors presenting their work on robust indoor localization using conformal methods and variational Bayesian adaptive filtering.

▶ [Delta Descriptors: Change-Based Place Representation for Robust Visual Localization | RAL IROS 2020](https://www.youtube.com/watch?v=qY4VobAoLPY) — Sourav Garg · 12:42 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's approach to robust indoor localization. We start with the Unscented Kalman Filter (UKF) as the core nonlinear state estimation method, then cover Huber M-estimation for robust outlier suppression, followed by conformal prediction for statistically guaranteed outlier detection. Finally, we explore variational Bayesian adaptive filtering, the paper's central method for joint state and noise covariance estimation adapting to dynamic noise and outliers.

### Unscented Kalman filter *(prerequisite)*
The Unscented Kalman Filter (UKF) is a nonlinear state estimation technique that improves on the traditional Kalman filter by better capturing uncertainty through deterministic sampling (sigma points). It is widely used in robotics and localization to estimate system states from noisy sensor data.

*How the paper uses it:* The paper uses UKF as the foundation for its hybrid variational Bayesian adaptive filtering framework to handle nonlinear indoor localization state estimation.

▶ [Unscented Kalman Filter Explained Without Equations](https://www.youtube.com/watch?v=6jwIGEs3AJo) — Matan Pazi · 12:41 · 4 months ago

### Huber M-estimation *(prerequisite)*
Huber M-estimation is a robust statistical method that reduces the influence of mild outliers by combining squared error loss for small residuals with absolute error loss for large residuals. This approach improves estimation accuracy when data contains outliers or non-Gaussian noise.

*How the paper uses it:* The paper integrates Huber M-estimation to suppress mild measurement outliers within its adaptive filtering framework, enhancing robustness.

▶ [M Estimation](https://www.youtube.com/watch?v=cNFKCeMuobw) — Matthew Jones · 9:07 · 9 years ago

### Conformal prediction and outlier detection *(prerequisite)*
Conformal prediction is a statistical framework that provides finite-sample, distribution-free confidence guarantees for predictions. It can be used for outlier detection by dynamically calibrating thresholds to control false alarm rates, even in non-stationary time series data.

*How the paper uses it:* The paper employs conformal outlier detection with sliding-window calibration to provide statistical guarantees for detecting outliers in indoor localization measurements.

▶ [Rina Foygel Barber: An introduction to conformal prediction and distribution-free inference](https://www.youtube.com/watch?v=s7NPuCgQtfs) — Centre International de Rencontres Mathématiques · 56:46 · 1 year ago

### Variational Bayesian adaptive filtering
Variational Bayesian adaptive filtering jointly estimates system states and noise parameters by approximating complex posterior distributions, allowing the filter to adapt to changing noise characteristics without assuming Gaussian noise. This leads to improved robustness in dynamic environments.

*How the paper uses it:* The core contribution of the paper is a VB-UKF hybrid filter that adapts noise covariance in real-time for robust indoor localization under non-Gaussian noise and outliers.

▶ [Variational Gaussian Process State-Space Models.](https://www.youtube.com/watch?v=f2fnE-xjEpE) — Microsoft Research · 21:46 · 10 years ago

## Already in your library

- [L14.4 The Bayesian Inference Framework](https://www.youtube.com/watch?v=0w_4QcvBYII) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)
- [Visually Explained: Kalman Filters](https://www.youtube.com/watch?v=IFeCIbljreY) — also for: The Model Forest Ensemble Kalman Filter (Andrey A. Popov)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Robust Indoor Localization via Conformal Methods and Variational Bayesian Adaptive Filtering." The beginner project focuses on implementing and visualizing Huber M-estimation for outlier suppression, a core component of the paper's dual-layer outlier detection. The intermediate project involves reimplementing the VB-UKF hybrid filter combined with conformal outlier detection on a synthetic geomagnetic fingerprint dataset to reproduce key accuracy and error reduction results. The advanced project extends the method by exploring computational optimizations for real-time deployment on resource-constrained edge devices, addressing one of the paper's stated limitations.

### Beginner — Huber M-Estimation for Outlier Suppression Visualization
*Effort: a weekend, ~8 hours*

You build a Python notebook that implements Huber M-estimation weighting for covariance matrices and applies it to a noisy 2D localization dataset with injected outliers. You visualize how the Huber weights adaptively suppress outliers compared to standard covariance estimation.

**Why it shows you understood the paper:** This project shows you understand the mathematical mechanism and practical effect of Huber M-estimation in robust filtering, a key contribution of the paper for mild outlier suppression.

**Grounded in:** Theoretical proofs of semi-positive definiteness of Huber-weighted covariance matrices and integration of Huber M-estimation for mild outlier suppression.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic 2D localization points with Gaussian noise and injected outliers, generated within the notebook.

**Build it:**

1. Implement the Huber loss function and compute corresponding weights for data points.
2. Calculate weighted covariance matrices using Huber weights and verify semi-positive definiteness.
3. Generate a synthetic 2D dataset with Gaussian noise and injected outliers.
4. Apply standard covariance estimation and Huber-weighted covariance estimation to the dataset.
5. Visualize the effect of Huber weighting on covariance and outlier suppression.
6. Write a README explaining the connection to the paper's robust filtering approach.

**Ships as:** A Jupyter notebook demonstrating Huber M-estimation on synthetic data with visualizations and explanations linking to the paper's theory.

**Stretch goal:** Add a small simulation comparing localization error with and without Huber weighting on a simple Kalman filter.

### Intermediate — VB-UKF with Conformal Outlier Detection on Synthetic Geomagnetic Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core VB-UKF hybrid filter combined with sliding-window conformal outlier detection as described in the paper. You generate a synthetic geomagnetic fingerprint dataset with non-Gaussian noise and outliers to evaluate fingerprint matching accuracy and positioning error reduction compared to a baseline UKF.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core hierarchical filtering and outlier detection framework and reproduce its key results on positioning accuracy and error reduction.

**Grounded in:** Development of a VB-UKF hybrid filter for simultaneous state and noise covariance estimation enabling real-time adaptation; integration of dual-layer outlier detection combining Huber M-estimation and conformal prediction with sliding-window calibration.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic geomagnetic fingerprint dataset generated by simulating indoor localization signals with injected non-Gaussian noise and outliers, described and created within the project.

**Build it:**

1. Implement the Unscented Kalman Filter (UKF) for state estimation.
2. Implement variational Bayesian adaptive filtering to estimate noise covariances online.
3. Implement Huber M-estimation for mild outlier suppression within the filter update.
4. Implement sliding-window conformal outlier detection with dynamic threshold calibration.
5. Generate synthetic geomagnetic fingerprint data with controlled noise and outliers.
6. Evaluate fingerprint matching accuracy and positioning error for VB-UKF+COD versus baseline UKF.
7. Visualize results and write a detailed README linking the implementation to the paper's methods and results.

**Ships as:** A Jupyter notebook or Python package that runs the VB-UKF+COD filter on synthetic data, compares metrics to baseline UKF, and documents the connection to the paper.

**Stretch goal:** Add a simple graphical UI to visualize real-time localization estimates and detected outliers.

### Advanced — Optimizing VB-UKF+Conformal Prediction for Edge Deployment
*Effort: 3+ weeks*

You develop an optimized implementation of the VB-UKF combined with conformal outlier detection focusing on computational efficiency and memory usage to enable real-time indoor localization on resource-constrained edge devices. You profile the original algorithm, identify bottlenecks, and apply algorithmic and code-level optimizations. You evaluate trade-offs between accuracy and runtime on synthetic or small-scale real datasets.

**Why it shows you understood the paper:** This project addresses a key limitation stated in the paper about computational overhead, showing deep understanding of the algorithm's complexity and practical deployment challenges in IoT edge computing environments.

**Grounded in:** High computational overhead associated with variational Bayesian filters may limit real-time deployment in resource-constrained IoT devices; future direction to optimize computational efficiency for deployment on resource-limited IoT devices.

**Tech stack:** Python 3.11, NumPy, Cython or PyPy, Jupyter Notebook, Profiling tools (cProfile, line_profiler)

**Data:** Synthetic geomagnetic fingerprint data or small-scale real indoor localization datasets if available; otherwise synthetic data as in intermediate project.

**Build it:**

1. Profile the baseline VB-UKF+CP implementation to identify computational bottlenecks.
2. Refactor critical code sections using efficient numerical libraries or Cython for speedup.
3. Implement algorithmic simplifications or approximations to reduce complexity without large accuracy loss.
4. Evaluate runtime, memory usage, and localization accuracy trade-offs on test data.
5. Document optimization strategies and their impact in a comprehensive README.
6. Optionally, prepare a short demo showing real-time localization estimates on a simulated data stream.

**Ships as:** An optimized VB-UKF+CP implementation with profiling results, accuracy/runtime trade-off analysis, and documentation linking back to the paper's limitation and future direction.

**Stretch goal:** Explore multi-sensor fusion by integrating a second sensor modality (e.g., WiFi RSSI) with the optimized filter.
