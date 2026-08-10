---
title: "347 · Inter-beat Interval Estimation with Tiramisu Model: A Novel Approach with Reduced Error — Behrooz A. Shirazi"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-behrooz-a-shirazi"
source_hash: "86ef6756ffa545aec88fee1c209e6df4a794fd9cf7165fc6f0d9f2c195b2c921"
sequence: 347
generator: "outreach-garden: managed"
---

# 347 · Inter-beat Interval Estimation with Tiramisu Model: A Novel Approach with Reduced Error

## At a glance

- **Professor:** Behrooz A. Shirazi
- **Institution:** Washington State University
- **Paper:** [Inter-beat Interval Estimation with Tiramisu Model: A Novel Approach with Reduced Error](https://doi.org/10.1145/3616020)
- **Authors:** Asiful Arefeen, Roozbeh Jafari, Ali Akbari, Seyed Iman Mirzadeh, Behrooz A. Shirazi, Hassan Ghasemzadeh
- **Year:** 2021

## Paper overview

This paper presents a deep learning method using a modified Tiramisu autoencoder model to accurately estimate inter-beat intervals (IBI) from noisy electrocardiogram (ECG) signals corrupted by intense motion artifacts. The method suppresses noise and highlights R-peaks in ECG signals, enabling precise IBI calculation even at very low signal-to-noise ratios (SNR) down to -30dB. The approach outperforms existing techniques without requiring pre- or post-processing steps.

### Why it matters

**Research problem:** Accurate estimation of inter-beat intervals (IBI) from ECG signals corrupted by motion artifacts and intense noise is challenging because noise distorts the ECG morphology, making R-peak detection and IBI calculation unreliable.

**Why it matters:** IBI and heart rate variability (HRV) are critical indicators for early diagnosis of cardiovascular diseases, which are leading causes of death globally. Wearable sensors enable continuous health monitoring, but motion artifacts severely degrade ECG signal quality, limiting reliable IBI estimation and timely cardiac disease detection.

**Key contributions:**

- Development of a stacked Tiramisu model-based deep learning autoencoder tailored for ECG denoising and IBI estimation under intense motion artifact noise.
- Capability to estimate IBIs accurately from ECG signals with noise levels up to -30dB SNR, surpassing prior methods that handle only higher SNRs.
- Elimination of the need for pre-processing or post-processing algorithms in the denoising and IBI estimation pipeline.

## About the professor

**Behrooz A. Shirazi** — Washington State University.

### Research links

- [Faculty/profile page](https://tricities.wsu.edu/annual-mlk-distinguished-service-award-recipients-named/)
- [Identity evidence](https://school.eecs.wsu.edu/people/faculty/behrooz-a-shirazi/)
- [Identity evidence](https://orcid.org/0000-0001-6504-4651)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Inter-beat Interval Estimation using the Tiramisu model, start with foundational knowledge of ECG signal processing and R-peak detection, which is critical for accurate IBI calculation. Then, build understanding of convolutional dense networks, as the Tiramisu model is based on this architecture. Next, study time-series denoising with deep learning to grasp how noisy physiological signals can be cleaned. Finally, focus on the paper's core concept: the authors' novel application of a modified Tiramisu autoencoder for ECG denoising and IBI estimation, prioritizing any direct talks by the authors or closely related research presentations.

### ECG signal processing and R-peak detection *(prerequisite)*
Accurate detection of R-peaks in ECG signals is fundamental for calculating inter-beat intervals. This section covers advanced signal processing techniques and algorithms used to identify R-peaks reliably, especially in noisy conditions, which directly relates to the paper's challenge of estimating IBI from corrupted ECG data.

*How the paper uses it:* The paper relies on robust R-peak detection from denoised ECG signals to estimate IBIs accurately.

▶ [Dr Emlyn Clay - Analyzing the ElectroCardioGram (ECG)](https://www.youtube.com/watch?v=WyjGCEWU4zY) — PyData · 45:39

### Convolutional Dense Networks *(prerequisite)*
Understanding convolutional dense networks is essential because the Tiramisu model is a fully convolutional dense network architecture. This section explains the structure, function, and advantages of dense connectivity in convolutional neural networks, which underpin the model's ability to learn complex features for denoising ECG signals.

*How the paper uses it:* The Tiramisu model used in the paper is a fully convolutional dense network adapted for ECG denoising.

▶ [Lec 37: Introduction to Deep Learning and Convolutional ...](https://www.youtube.com/watch?v=T_kZARmvALk) — NPTEL IIT Guwahati · 52:46

### Time-series denoising with deep learning *(prerequisite)*
This section covers advanced deep learning techniques for denoising time-series data, focusing on physiological signals. It provides insight into how neural networks can suppress noise and reconstruct clean signals, which is the core technical approach of the paper's methodology.

*How the paper uses it:* The paper's approach uses a deep learning autoencoder to denoise ECG time-series data corrupted by motion artifacts.

▶ [Deep Learning(CS7015): Lec 7.4 Denoising Autoencoders](https://www.youtube.com/watch?v=0n2x_D-ZmmU) — NPTEL-NOC IITM · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's approach to estimating inter-beat intervals (IBI) from noisy ECG signals using a deep learning autoencoder based on the Tiramisu model. It starts with the physiological importance of IBI and heart rate variability, then covers ECG signal basics and R-peak detection, followed by convolutional neural networks and autoencoders for denoising time-series data, culminating in the paper's core method of deep learning autoencoder ECG denoising.

### Heart rate variability and inter-beat interval analysis *(prerequisite)*
Learn what inter-beat intervals (IBI) and heart rate variability (HRV) are, why they matter for health, and how they reflect the timing between heartbeats. This physiological understanding motivates the need for accurate IBI estimation from ECG signals.

*How the paper uses it:* The paper focuses on accurately estimating IBIs, which are critical for cardiovascular health monitoring.

▶ [Everything You Should Know About Heart Rate Variability (HRV)](https://www.youtube.com/watch?v=zUyuUoU7lAQ) — Mind Drip · 7 years ago

### ECG signal processing and R-peak detection *(prerequisite)*
Understand the basics of ECG signals, the significance of the R-peak as the most prominent feature marking heartbeats, and common methods to detect these peaks. Accurate R-peak detection is essential for calculating IBIs.

*How the paper uses it:* The paper's method enhances R-peak visibility in noisy ECG signals to enable precise IBI calculation.

▶ [How to Read an ECG | ECG Interpretation | EKG | OSCE ...](https://www.youtube.com/watch?v=4mYB_ooOgMY) — Geeky Medics · 20:44

### Convolutional Dense Networks *(prerequisite)*
Get an intuitive grasp of convolutional neural networks (CNNs), which process data with spatial or temporal structure, and understand the dense connectivity pattern used in DenseNets that improves feature reuse and gradient flow. This knowledge is key to understanding the Tiramisu model architecture.

*How the paper uses it:* The paper modifies the Tiramisu model, a fully convolutional dense network, for ECG denoising.

▶ [Convolutional Neural Networks (CNN) explained step by step](https://www.youtube.com/watch?v=sgL7RrqhGKI) — Python Lessons · 18:59

### Time-series denoising with deep learning *(prerequisite)*
Learn how deep learning models can be trained to remove noise from time-series data, improving signal quality by learning to reconstruct clean signals from corrupted inputs. This general technique underpins the paper's approach to ECG denoising.

*How the paper uses it:* The paper uses a deep learning autoencoder to denoise noisy ECG time-series signals corrupted by motion artifacts.

▶ [Deep Learning(CS7015): Lec 7.4 Denoising Autoencoders](https://www.youtube.com/watch?v=0n2x_D-ZmmU) — NPTEL-NOC IITM · 7 years ago

### Deep learning autoencoder ECG denoising
Explore how autoencoders, a type of neural network trained to reconstruct inputs, can be adapted to suppress noise and highlight important features like R-peaks in ECG signals. This is the core method used in the paper for robust IBI estimation without pre- or post-processing.

*How the paper uses it:* The paper develops a stacked Tiramisu autoencoder tailored for ECG denoising and IBI estimation under intense noise.

▶ [Autoencoders Made Simple!](https://www.youtube.com/watch?v=aqaVv3RiNow) — Prof. Ryan Ahmed · 12:29

## Already in your library

- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the Tiramisu model for inter-beat interval (IBI) estimation from noisy ECG signals. The beginner project focuses on basic ECG signal visualization and simple R-peak detection to grasp the problem context. The intermediate project involves reimplementing the core denoising autoencoder approach described in the paper and evaluating IBI estimation accuracy against a baseline. The advanced project extends the method by addressing a stated limitation: compressing the model for deployment on resource-constrained wearable devices, exploring model compression techniques and real-time feasibility.

### Beginner — ECG Signal Visualization and Simple R-Peak Detection
*Effort: a weekend, ~8 hours*

You build a small Python notebook that loads clean and noisy ECG signals (e.g., from the MIT-BIH Arrhythmia Database), visualizes them, and implements a simple peak detection algorithm to identify R-peaks. You calculate inter-beat intervals (IBIs) from detected peaks and compare them visually to ground truth intervals.

**Why it shows you understood the paper:** This project shows you understand the fundamental problem of noisy ECG signals and the challenge of R-peak detection for IBI estimation, which is the core motivation of the paper.

**Grounded in:** The research problem: Accurate estimation of inter-beat intervals (IBI) from ECG signals corrupted by motion artifacts and intense noise is challenging because noise distorts the ECG morphology, making R-peak detection and IBI calculation unreliable.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, SciPy

**Data:** Use the MIT-BIH Arrhythmia Database publicly available from PhysioNet as a substitute for the paper's data.

**Build it:**

1. Download a sample ECG record from the MIT-BIH Arrhythmia Database.
2. Plot the raw ECG signal and a version corrupted with simulated noise (e.g., Gaussian or motion artifact-like noise).
3. Implement a simple peak detection algorithm (e.g., find local maxima above a threshold) to identify R-peaks in the noisy signal.
4. Calculate IBIs as the time differences between consecutive detected R-peaks.
5. Plot detected R-peaks on the ECG signal and compare estimated IBIs to ground truth intervals from the clean signal.

**Ships as:** A Jupyter Notebook demonstrating ECG visualization, noisy signal peak detection, and IBI calculation with plots and commentary.

**Stretch goal:** Add a simple noise filtering step (e.g., bandpass filter) before peak detection and compare results.

### Intermediate — Reimplementation of Tiramisu Autoencoder for ECG Denoising and IBI Estimation
*Effort: 2 weekends, ~20 hours*

You reimplement the core stacked Tiramisu fully convolutional dense network autoencoder described in the paper to denoise noisy ECG signals and highlight R-peaks. You train and test it on the MIT-BIH Arrhythmia Database with added synthetic noise down to -30dB SNR. You then apply a simple peak detection algorithm on the denoised output to estimate IBIs and compute RMSE and percentage error compared to ground truth.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the paper's main method and quantitatively evaluate its performance, showing comprehension of the model architecture, training approach, and evaluation metrics.

**Grounded in:** Key contribution: Development of a stacked Tiramisu model-based deep learning autoencoder tailored for ECG denoising and IBI estimation under intense motion artifact noise. Key result: Achieved average RMSE of 13.514 ms and average percentage error of 7.97% for IBI estimation at noise levels down to -30dB on MIT-BIH Arrhythmia Database.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use the MIT-BIH Arrhythmia Database from PhysioNet with synthetic noise added to simulate motion artifacts as described in the paper.

**Build it:**

1. Implement the Tiramisu fully convolutional dense network architecture as an autoencoder for 1D time-series denoising.
2. Prepare training data by adding synthetic noise to clean ECG signals from MIT-BIH Arrhythmia Database at various SNR levels down to -30dB.
3. Train the autoencoder to reconstruct denoised ECG signals emphasizing R-peaks.
4. Apply a simple peak detection algorithm on the denoised output to extract R-peak locations.
5. Calculate IBIs from detected peaks and compute RMSE and percentage error against ground truth IBIs.
6. Compare results to a baseline method such as peak detection on noisy signals without denoising.

**Verified links from the paper:**

- <https://github.com/Arefeen06088/IBI_Tiramisu> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train and evaluate the Tiramisu autoencoder on noisy ECG data, including plots of denoised signals, detected peaks, and quantitative error metrics.

**Stretch goal:** Experiment with different noise levels and report performance degradation trends.

### Advanced — Model Compression and Real-Time Deployment of Tiramisu ECG Denoising for Wearables
*Effort: 3+ weeks*

You extend the Tiramisu autoencoder by applying model compression techniques such as pruning, quantization, or knowledge distillation to reduce its size and computational requirements. You evaluate the compressed model's denoising and IBI estimation performance on noisy ECG data. You prototype a real-time inference pipeline suitable for resource-constrained wearable devices, measuring latency and memory footprint.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the model and practical constraints for deployment in wearable health monitoring systems.

**Grounded in:** Limitation: The model size is large, which may limit direct deployment on embedded systems without model compression. Future direction: Develop lighter versions of the deep learning model suitable for embedded and wearable device applications.

**Tech stack:** Python 3.11, PyTorch, ONNX, TensorRT or TFLite, NumPy, Matplotlib

**Data:** Use the MIT-BIH Arrhythmia Database with synthetic noise as in the intermediate project.

**Build it:**

1. Start from your trained Tiramisu autoencoder implementation.
2. Apply model compression techniques such as pruning and quantization using PyTorch tools or export to ONNX for further optimization.
3. Evaluate the compressed model's denoising quality and IBI estimation accuracy compared to the original model.
4. Implement a real-time inference pipeline simulating streaming ECG input and measure latency and memory usage.
5. Document trade-offs between model size, speed, and accuracy.
6. Optionally, explore lightweight model architectures inspired by Tiramisu for embedded deployment.

**Verified links from the paper:**

- <https://github.com/Arefeen06088/IBI_Tiramisu> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository demonstrating compressed Tiramisu model variants with evaluation scripts, real-time inference prototype, and detailed README discussing deployment feasibility.

**Stretch goal:** Integrate the compressed model with a simple wearable device simulator or microcontroller inference framework.

_The authors did not release their own code; the intermediate and advanced projects rely on reimplementation guided by the paper and the third-party code repository at https://github.com/Arefeen06088/IBI_Tiramisu which is a related implementation but not official authors' code._
