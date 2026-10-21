---
title: "917 · Pulse2AI: An Adaptive Framework to Standardize and Process Pulsatile Wearable Sensor Data for Clinical Applications — Roozbeh Jafari"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-roozbeh-jafari"
source_hash: "7bcb7cfe6c621244fb3c314e7da9d8541825b9cbea673d0f0ae2a45a3854d712"
sequence: 917
generator: "outreach-garden: managed"
---

# 917 · Pulse2AI: An Adaptive Framework to Standardize and Process Pulsatile Wearable Sensor Data for Clinical Applications

## At a glance

- **Professor:** Roozbeh Jafari
- **Institution:** Texas A&M University
- **Paper:** [Pulse2AI: An Adaptive Framework to Standardize and Process Pulsatile Wearable Sensor Data for Clinical Applications](https://pmc.ncbi.nlm.nih.gov/articles/PMC11186651/pdf/ojemb-huang-3398444.pdf)
- **Authors:** Sicong Huang, Roozbeh Jafari, Bobak J. Mortazavi
- **Year:** 2024

## Paper overview

Pulse2AI is a data preprocessing framework designed to clean and standardize pulsatile signals from wearable sensors, making them ready for machine learning applications in healthcare. It improves the accuracy of medical parameter estimations like blood pressure and respiration rate by filtering noise and aligning signals with reference data.

### Why it matters

**Research problem:** Wearable sensors generate noisy pulsatile biomarker data in free-living environments, which complicates the creation of high-quality machine learning datasets for medical applications. Existing denoising methods either distort signals or lack standardization for downstream medical modeling.

**Why it matters:** Accurate and continuous monitoring of physiological parameters such as blood pressure and respiration rate is critical for diagnosing and managing health conditions like hypertension and respiratory deterioration. Current methods are limited by noise, infrequent measurements, discomfort, and lack of standardized preprocessing, hindering effective remote health monitoring.

**Key contributions:**

- Identification of challenges in preprocessing wearable pulsatile data for machine learning healthcare models.
- Development of an adaptive, parametric preprocessing framework that produces ML-ready datasets via automatic grid searching of noise rejection parameters.
- Introduction of a robust two-pass signal alignment method to synchronize wearable sensor data with reference medical signals.
- Design of three complementary SQI-based filtering techniques to improve signal quality without distorting clean data.
- Validation of Pulse2AI on two distinct datasets and medical applications (blood pressure and respiration rate estimation) demonstrating significant performance improvements.

## About the professor

**Roozbeh Jafari** — Adjunct Professor, Electrical & Computer Engineering, Texas A&M University.

Research interests: Biomedical optics, Biosensors, Medical devices, Digital health, Clinical informatics

### Research links

- [Faculty/profile page](https://engineering.tamu.edu/electrical/profiles/jafari-roozbeh.html)
- [Identity evidence](http://jafari.tamu.edu/rjafari)
- [Professor website](http://jafari.tamu.edu/)
- [Resolved homepage](https://jafari.tamu.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=ZKg1UKwAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Biomedical Signal Processing
**The paper assumes:** digital signal processing of physiological signals, cardiac cycle segmentation, signal quality assessment in biomedical data
**Already in this field?** Skip this entirely if you already have a solid understanding of biomedical signal processing and physiological data preprocessing techniques.

This background focuses on biomedical signal processing, essential for understanding how Pulse2AI preprocesses and denoises pulsatile wearable sensor data for clinical machine learning applications. The rigorous course option provides a deep, structured university-level treatment of the subject, while the fast track offers a concise, intuition-driven introduction to core concepts. Choose the course for thorough mastery or the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [PEC303:Biomedical Signal Processing](https://www.youtube.com/playlist?list=PLeefXVKiX48rcnK0TentV2rXrQoIhuqpy) — Course on Biomedical Signal Processing · 45 videos · 13.2h across 45 episodes

**Watch only this:** Episodes 1 through 12 (Series 2 Lecture 1 Introduction to Series 2 Lecture 12 Heart rate variability spectral analysis), about 3.5 hours — covering fundamentals of biomedical signals, ECG acquisition, parameter estimation, and noise/artifact concepts essential for understanding signal quality indices and alignment.

*Why it unblocks this paper:* This 45-episode university-level series covers biomedical signal processing comprehensively, including ECG data acquisition, parameter estimation, noise and artifact handling, and event detection, directly relevant to Pulse2AI's preprocessing pipeline and filtering techniques.

*If you want all of it:* All 45 episodes, about 13.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Biomedical Signal Processing](https://www.youtube.com/playlist?list=PL7u4JHpM3DM1JaMxM6ca0Mg19GEQ-5Bx-) — Leo Udeji · 8 videos · 1.0h across the first 7 episodes

**Watch only this:** First 5 episodes (Fourier Series Example: Square Wave Part 1 & 2, Fourier Analysis: Introduction, plus the first two cancer treatment videos for context), about 40 minutes — enough to understand signal decomposition and basic processing concepts.

*Why it unblocks this paper:* This concise 8-video playlist provides a focused introduction to biomedical signal processing concepts including Fourier analysis, which underpins many denoising and signal alignment techniques used in Pulse2AI, suitable for quickly grasping the essentials.

*If you want all of it:* All 7 relevant episodes, about 1 hour.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Pulse2AI framework, start with foundational knowledge on pulsatile biomarker signal processing and wearable sensor signal preprocessing, which provide essential background on the nature of physiological signals and their challenges. Then, study signal alignment techniques critical for synchronizing wearable data with reference signals, followed by signal quality index filtering methods that are central to noise rejection in the framework. Finally, focus on the core concept by watching the authors' own talk or the closest available academic presentation on the Pulse2AI framework itself.

### Pulsatile biomarker signal processing *(prerequisite)*
Understanding pulsatile biomarker signals is fundamental because Pulse2AI processes these physiological signals to extract meaningful clinical parameters. This section covers the signal characteristics, filtering, and processing techniques specific to biomedical signals like ECG and PPG, which are the basis for the framework's preprocessing pipeline.

*How the paper uses it:* Pulse2AI processes pulsatile physiological signals from wearable sensors, so grasping their signal properties is foundational.

▶ [https://www.youtube.com › watch?v=h44DykrDvjY](https://www.youtube.com/watch?v=h44DykrDvjY) — YouTube result via DuckDuckGo

### Wearable sensor signal preprocessing *(prerequisite)*
This section provides foundational knowledge on cleaning and preparing data from wearable sensors, addressing challenges such as noise and motion artifacts in free-living environments. It sets the stage for understanding why Pulse2AI's adaptive preprocessing is necessary for clinical applications.

*How the paper uses it:* Pulse2AI is a preprocessing framework designed specifically for wearable sensor data, making this background crucial.

▶ [Dr Changsheng Wu - Accessible Wireless Wearables Toward Pervasive Healthcare](https://www.youtube.com/watch?v=t-6shwTAqSg) — Loughborough University IAS · 1:06:12 · 1y ago

### Signal alignment techniques *(prerequisite)*
Signal alignment is critical for synchronizing wearable sensor data with reference medical signals, a key step in Pulse2AI's two-pass alignment method. This section explains theoretical and practical approaches to time-series alignment, which underpins the framework's ability to accurately match wearable data with clinical references.

*How the paper uses it:* Pulse2AI uses a novel two-pass alignment method to synchronize wearable and reference signals.

▶ [Aligning Time Signals](https://www.youtube.com/watch?v=AfcQcTdpQ2s) — Srinath Srinivasan · 4:10 · 3y ago

### Signal quality index filtering
Signal quality index (SQI) filtering is central to Pulse2AI's approach for rejecting noisy cardiac cycles without distorting clean data. This section covers advanced filtering techniques that improve signal quality, including morphology-driven and deep learning-based methods, which are integral to the framework's noise rejection pipeline.

*How the paper uses it:* Pulse2AI designs three complementary SQI-based filters to enhance signal quality for downstream ML tasks.

▶ [Reconsider Photoplethysmogram (PPG) Signal Quality -- A discussion.](https://www.youtube.com/watch?v=5XolMm27_-c) — Dr. Wu's medical AI · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Pulse2AI paper, start by learning the basics of wearable sensor signal preprocessing to grasp how raw physiological data is cleaned and prepared. Next, build intuition on pulsatile biomarker signal processing to appreciate the nature of the signals Pulse2AI handles. Then, study signal alignment techniques, which are crucial for synchronizing wearable data with reference medical signals. After that, explore signal quality index (SQI) filtering methods that Pulse2AI uses to reject noise without distorting data. Finally, deepen your understanding of machine learning applications for physiological signal analysis, which is the ultimate goal of Pulse2AI's preprocessing pipeline.

### Wearable sensor signal preprocessing *(prerequisite)*
This concept covers how raw data from wearable sensors is cleaned and prepared for analysis, including noise reduction and artifact removal. Understanding this helps you appreciate the challenges of working with real-world physiological data collected outside controlled environments.

*How the paper uses it:* Pulse2AI builds on foundational preprocessing techniques to standardize pulsatile wearable sensor data for clinical machine learning tasks.

▶ [Dr Changsheng Wu - Accessible Wireless Wearables Toward Pervasive Healthcare](https://www.youtube.com/watch?v=t-6shwTAqSg) — Loughborough University IAS · 1:06:12 · 1y ago

### Pulsatile biomarker signal processing *(prerequisite)*
Pulsatile signals, like those from heartbeats, have unique characteristics and challenges such as variability and noise. Learning how these signals are processed helps you understand the specific signal features Pulse2AI targets.

*How the paper uses it:* Pulse2AI focuses on processing pulsatile biomarker signals from wearable sensors to improve clinical parameter estimation.

▶ [https://www.youtube.com › watch?v=h44DykrDvjY](https://www.youtube.com/watch?v=h44DykrDvjY) — YouTube result via DuckDuckGo

### Signal alignment techniques *(prerequisite)*
Signal alignment synchronizes data streams recorded separately or with timing offsets, which is essential for comparing wearable sensor data with reference medical signals. This ensures accurate downstream analysis and modeling.

*How the paper uses it:* Pulse2AI uses a robust two-pass alignment method to synchronize wearable pulsatile signals with reference medical data.

▶ [Aligning Time Signals](https://www.youtube.com/watch?v=AfcQcTdpQ2s) — Srinath Srinivasan · 4:10 · 3y ago

### Signal quality index filtering
SQI filtering methods assess and reject noisy or corrupted signal segments without distorting clean data, improving the reliability of physiological measurements. These filters can be based on signal-to-noise ratio, morphology, or machine learning.

*How the paper uses it:* Pulse2AI applies three complementary SQI-based filters to reject noisy cardiac cycles and enhance signal quality for machine learning.

▶ [Reconsider Photoplethysmogram (PPG) Signal Quality -- A discussion.](https://www.youtube.com/watch?v=5XolMm27_-c) — Dr. Wu's medical AI · 2y ago

### Machine learning for physiological signal analysis
This area covers how processed physiological signals are used as inputs for machine learning models to estimate clinical parameters like blood pressure and respiration rate. Understanding this helps connect preprocessing steps to their ultimate clinical applications.

*How the paper uses it:* Pulse2AI prepares wearable sensor data to improve machine learning models for clinical parameter estimation.

▶ [CONF-MLA 2023—Machine Learning on Physiological Signals](https://www.youtube.com/watch?v=ifJv4t3j50Q) — CONF-MLA · 3y ago

## Already in your library

- [Dr Changsheng Wu - Accessible Wireless Wearables Toward Pervasive Healthcare](https://www.youtube.com/watch?v=n6I81q4Zkn0) — also for: Active noise cancellation on open-ear smart glasses (Swarun Kumar)
- [Photoplethysmography (PPG): Origins to Modern Applications in Wearable Technology](https://www.youtube.com/watch?v=YjM_bvzwwRc) — also for: Drug Overdose Vital-Signs Evaluator Using Machine Learning (Amanda Watson)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Pulse2AI's approach to preprocessing pulsatile wearable sensor data for clinical applications. The beginner project focuses on implementing a basic signal quality index filter to clean noisy pulsatile data. The intermediate project involves reimplementing the core Pulse2AI preprocessing pipeline, including two-pass signal alignment and SQI filtering, and evaluating its impact on blood pressure estimation accuracy using a substitute dataset. The advanced project extends Pulse2AI by addressing one of its stated limitations: adapting the framework for real-time processing on resource-constrained wearable devices, including profiling and optimizing for power and memory usage.

### Beginner — Basic Signal Quality Index Filtering for Pulsatile Signals
*Effort: a weekend, ~8 hours*

You build a simple signal quality index (SQI) filter that processes segments of pulsatile wearable sensor data to reject noisy cardiac cycles based on signal-to-noise ratio (SNR) thresholds. This project implements one of the three SQI-based filtering techniques described in Pulse2AI and applies it to a small sample of synthetic or publicly available pulsatile data.

**Why it shows you understood the paper:** This project demonstrates your grasp of the importance of signal quality filtering in preprocessing wearable sensor data and your ability to implement a key Pulse2AI filtering method that improves data quality without distorting clean signals.

**Grounded in:** We designed signal quality-driven filtering based on SNR, morphology-driven filtering using fiducial point plausibility thresholds, and DL-based filtering using a variational autoencoder and clustering.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Use a small synthetic pulsatile signal dataset generated by simulating cardiac cycles with added noise, or a publicly available PPG (photoplethysmogram) dataset such as the BIDMC PPG dataset as a substitute.

**Build it:**

1. Generate or obtain a small sample of pulsatile signal data with known noise characteristics.
2. Segment the signal into cardiac cycles using peak detection methods.
3. Compute the signal-to-noise ratio (SNR) for each cardiac cycle segment.
4. Implement a threshold-based filter to reject cycles with low SNR.
5. Visualize the original and filtered signals to demonstrate noise rejection.
6. Document the filter design, implementation, and effect on signal quality.

**Ships as:** A GitHub repository with Python code implementing the SNR-based SQI filter, example data, visualizations showing noise rejection, and a README explaining the method and its relation to Pulse2AI.

**Stretch goal:** Add morphology-driven filtering by detecting fiducial points and applying plausibility thresholds to further improve filtering accuracy.

### Intermediate — Reimplementation of Pulse2AI Preprocessing Pipeline with Two-Pass Alignment
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core Pulse2AI preprocessing pipeline including cardiac cycle segmentation, the two-pass signal alignment method synchronizing wearable pulsatile signals with reference medical data, and the three SQI-based filtering techniques. You then apply this pipeline to a substitute pulsatile dataset and evaluate its impact on blood pressure estimation accuracy compared to a baseline without preprocessing.

**Why it shows you understood the paper:** This project shows you can reproduce the main technical contributions of Pulse2AI, including the novel two-pass alignment and adaptive filtering, and quantitatively assess their benefit for a clinical prediction task, demonstrating deep comprehension of the paper's core methods and results.

**Grounded in:** Pulse2AI implements an end-to-end preprocessing pipeline that segments cardiac cycles, aligns pulsatile signals with reference medical data using a two-pass alignment method, and applies three types of signal quality index (SQI)-based filters to reject noisy data.

**Tech stack:** Python 3.11, NumPy, SciPy, scikit-learn, Matplotlib, Jupyter Notebook

**Data:** Use a publicly available PPG or ECG dataset with reference blood pressure measurements, such as the BIDMC dataset as a substitute, or simulate aligned pulsatile and reference signals.

**Build it:**

1. Implement cardiac cycle segmentation using peak detection on pulsatile signals.
2. Develop the two-pass alignment method: first match inter-beat intervals, then apply cross-correlation phase correction to synchronize wearable and reference signals.
3. Implement the three SQI-based filters: signal quality-driven (SNR), morphology-driven (fiducial point plausibility), and a simplified deep learning-based filter (e.g., autoencoder reconstruction error).
4. Apply the preprocessing pipeline to the dataset and extract features for blood pressure estimation.
5. Train a simple regression model (e.g., linear regression) to estimate blood pressure with and without preprocessing.
6. Compare estimation errors (e.g., RMSE) to demonstrate performance improvements.
7. Document the pipeline, evaluation methodology, and results.

**Ships as:** A GitHub repository containing the Pulse2AI preprocessing pipeline implementation, evaluation scripts, comparison plots of blood pressure estimation errors, and a detailed README linking the work to the paper's contributions.

**Stretch goal:** Incorporate automatic grid search for noise rejection parameters to optimize filtering thresholds as Pulse2AI does.

### Advanced — Real-Time Adaptation of Pulse2AI for Resource-Constrained Wearable Devices
*Effort: a few weeks, ~40+ hours*

You extend Pulse2AI by adapting its preprocessing pipeline for real-time execution on resource-constrained wearable hardware. This includes profiling and optimizing the pipeline's computational and memory footprint, implementing streaming signal processing, and evaluating trade-offs between filtering quality and resource usage. You demonstrate a prototype on a simulated or actual embedded platform.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the authors, showing your ability to translate offline research methods into practical, deployable solutions for wearable health monitoring, bridging algorithmic design with embedded systems constraints.

**Grounded in:** Pulse2AI has not yet been validated in online, real-time wearable settings regarding power consumption and memory usage. Future directions include validating Pulse2AI in real-world wearable deployments considering resource constraints.

**Tech stack:** Python 3.11, NumPy, C++ (for embedded simulation), PyTorch (optional for DL filter), Docker (for environment reproducibility)

**Data:** Use synthetic or substitute pulsatile sensor data streams to simulate real-time input; no official dataset required.

**Build it:**

1. Profile the existing Pulse2AI preprocessing pipeline implementation to identify computational bottlenecks and memory usage.
2. Refactor the pipeline for streaming data processing, handling cardiac cycle segmentation and filtering in real-time.
3. Implement lightweight approximations of the SQI filters suitable for embedded deployment (e.g., replace DL filter with a simpler model).
4. Simulate or deploy the pipeline on a resource-constrained environment (e.g., Raspberry Pi or microcontroller simulator).
5. Measure processing latency, memory usage, and power consumption estimates.
6. Evaluate the impact of optimizations on signal quality and downstream estimation accuracy.
7. Document challenges, trade-offs, and recommendations for real-time Pulse2AI deployment.

**Ships as:** A GitHub repository with optimized real-time preprocessing code, profiling reports, simulation or deployment instructions, and a comprehensive README discussing the adaptation challenges and solutions in the context of the paper's limitations.

**Stretch goal:** Integrate the real-time preprocessing pipeline with an IoMT device simulator to demonstrate end-to-end remote health monitoring.
