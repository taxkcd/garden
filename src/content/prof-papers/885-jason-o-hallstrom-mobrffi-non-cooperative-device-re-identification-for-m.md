---
title: "885 · MobRFFI: Non-cooperative Device Re-identification for Mobility Intelligence — Jason O. Hallstrom"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jason-o-hallstrom"
source_hash: "e2c38db70ddbd5dacf5d0e5f3a452d90d0ed32e36c5e3e3289aaaa04511b9edb"
sequence: 885
generator: "outreach-garden: managed"
---

# 885 · MobRFFI: Non-cooperative Device Re-identification for Mobility Intelligence

## At a glance

- **Professor:** Jason O. Hallstrom
- **Institution:** Florida Atlantic University
- **Paper:** [MobRFFI: Non-cooperative Device Re-identification for Mobility Intelligence](https://arxiv.org/pdf/2503.02156)
- **Authors:** Stepan Mazokha, Fanchen Bao, George Sklivanitis, Jason O. Hallstrom
- **Year:** 2025

## Paper overview

This paper presents MobRFFI, a framework that uses deep learning to identify and track WiFi devices without relying on their MAC addresses, which are often randomized for privacy. By analyzing unique hardware imperfections in WiFi signals captured from multiple receivers, MobRFFI can accurately re-identify devices over time, enabling better monitoring of pedestrian and vehicle movement in urban areas while respecting privacy.

### Why it matters

**Research problem:** MAC address randomization in WiFi devices prevents accurate tracking of device movements and congestion estimation in urban environments, complicating mobility monitoring and trajectory analysis.

**Why it matters:** Understanding pedestrian and vehicle movements is crucial for smarter city planning and congestion management. Traditional video surveillance raises privacy concerns, so alternative privacy-preserving methods like WiFi sensing are needed. However, MAC randomization limits the effectiveness of WiFi-based monitoring.

**Key contributions:**

- Introduced a WiFi device fingerprinting and re-identification framework using encoder-based deep learning to extract hardware impairment features from WiFi preambles.
- Collected a novel 5.7 TB MobRFFI dataset with granular multi-receiver WiFi signal captures to evaluate fingerprinting performance.
- Optimized WiFi spectrogram preprocessing, boosting device classification accuracy by 13%.
- Demonstrated 94% device classification accuracy on the WiSig dataset in a multi-day closed-set scenario.
- Showed that combining fingerprints from multiple receivers improves classification accuracy from 81% to 100% on single-day and from 41% to 100% on multi-day scenarios.

## About the professor

**Jason O. Hallstrom** — Professor & Dir. I-SENSE, Department of Electrical Engineering and Computer Science, Florida Atlantic University.

Research interests: Embedded Network Systems, Internet-scale Sensing Infrastructure, The Internet of Things, Computing Education

### Research links

- [Faculty/profile page](https://www.fau.edu/engineering/directory/faculty/hallstrom)
- [Professor website](https://www.fau.edu/engineering/directory/faculty/hallstrom/)
- [Lab website](https://www.fau.edu/research/i-sense/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep learning for signal processing
**The paper assumes:** convolutional neural networks, deep learning for signal processing, spectrogram analysis, feature embedding, ResNet architecture
**Already in this field?** Skip this entirely if you already understand convolutional neural networks applied to time-frequency signal data and spectrogram-based feature extraction.

This background focuses on deep learning methods applied to signal processing, specifically convolutional neural networks (CNNs) for extracting features from WiFi signal spectrograms as used in the MobRFFI paper. The rigorous course provides a comprehensive university-level foundation in neural networks for signal processing, ideal for readers seeking deep understanding. The fast track offers a concise, practical introduction to digital signal processing concepts relevant to spectrograms and signal transformations, suitable for readers needing a quicker but solid grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Neural Networks for Signal Processing – I](https://www.youtube.com/playlist?list=PLgMDNELGJ1CZn1399dV7_U4VBNJflRsua) — NPTEL - Indian Institute of Science, Bengaluru · 67 videos · 27.9h across the first 60 episodes

**Watch only this:** Episodes 1-23 (Intro through Convolutional Neural Networks), about 10.5 hours — these cover neural network basics, learning processes, and CNNs essential for understanding the paper's fingerprint extraction.

*Why it unblocks this paper:* This NPTEL course on Neural Networks for Signal Processing covers foundational concepts including CNN architectures, feature extraction, and embedding normalization, directly matching the deep learning techniques used in MobRFFI for WiFi signal fingerprinting.

*If you want all of it:* First 60 episodes, about 27.9 hours — full course covers extensive neural network theory and applications in signal processing.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.341x Digital Signal Processing - Prof. Alan V. Oppenheim (2016)](https://www.youtube.com/playlist?list=PL9FGejYK7LeQ2oF0S3CjdWaVf8B3QcjfA) — Elmul Soad Swopno · 13 videos · 2.8h across 13 episodes

**Watch only this:** Episodes 1-6 (Difference equations, frequency response, group delay, allpass and minimum phase systems, system factorization), about 1.2 hours — these cover core DSP concepts relevant to WiFi signal preprocessing.

*Why it unblocks this paper:* This MIT 6.341x Digital Signal Processing course offers a concise, well-structured introduction to key DSP concepts like frequency response, sampling, and system factorization, providing the signal processing foundation needed to understand spectrogram preprocessing in MobRFFI.

*If you want all of it:* All 13 episodes, about 2.8 hours — complete course covers broader DSP topics including quantization and noise shaping.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MobRFFI paper, start with foundational concepts in signal processing and machine learning that underpin the framework: short-time Fourier transform (STFT) for spectrogram generation, convolutional neural networks (CNNs) with ResNet architecture for feature extraction, multi-receiver data fusion with RSSI weighting for accuracy improvement, and open-set classification for distinguishing known and unknown devices. After building this foundation, focus on the core concept of WiFi device fingerprinting using deep learning, culminating with the authors' own talk on MobRFFI for direct insights into their methodology and results.

### short time Fourier transform STFT signal processing *(prerequisite)*
STFT is a critical signal processing technique used in MobRFFI to convert raw WiFi IQ samples into time-frequency spectrograms, which serve as the input features for the deep learning model. Understanding STFT helps grasp how temporal and spectral information is captured from wireless signals.

*How the paper uses it:* MobRFFI preprocesses WiFi IQ samples into channel-independent spectrograms using STFT as a key step before fingerprint extraction.

▶ [Short-time Fourier Transform and the Spectogram](https://www.youtube.com/watch?v=NA0TwPsECUQ) — Barry Van Veen · 13:09 · 13y ago

### convolutional neural networks ResNet architecture *(prerequisite)*
The paper employs a CNN based on ResNet architecture to extract robust device fingerprints from spectrograms. Learning about ResNet's residual connections and CNN fundamentals is essential to understand how the model captures hardware impairment features effectively.

*How the paper uses it:* MobRFFI uses a ResNet-based CNN to produce device fingerprints from WiFi preamble spectrograms.

▶ [ResNet (actually) explained in under 10 minutes](https://www.youtube.com/watch?v=o_3mboe1jYI) — rupert ai · 9:47 · 3y ago

### multi-receiver data fusion RSSI weighting *(prerequisite)*
Combining fingerprints from multiple receivers using RSSI-weighted fusion significantly improves device re-identification accuracy in MobRFFI. Understanding data fusion techniques and RSSI metrics clarifies how multi-receiver information is aggregated for robust classification.

*How the paper uses it:* MobRFFI boosts classification accuracy by fusing fingerprints from multiple receivers weighted by RSSI.

▶ [Data Fusion: When and How Is It Useful? | Spectral Sessions 2022](https://www.youtube.com/watch?v=-1GGViDT-48) — NV5 Geospatial · 50:50 · 4y ago

### open-set classification machine learning *(prerequisite)*
Open-set classification is crucial for MobRFFI to distinguish between known and new devices in dynamic urban environments. Grasping this concept helps understand how the system handles unknown devices and maintains classification robustness.

*How the paper uses it:* MobRFFI improves open-set known/new device classification accuracy using multi-receiver fusion and threshold tuning.

▶ [Recitation 5: Face Classification and Verification](https://www.youtube.com/watch?v=v46C2ilPtUU) — Carnegie Mellon University Deep Learning · 1:08:41 · 5y ago

### WiFi device fingerprinting deep learning
This core concept covers the use of deep learning to extract unique hardware fingerprints from WiFi signals, addressing the challenge of MAC address randomization. It is central to the paper's approach for privacy-preserving device re-identification.

*How the paper uses it:* MobRFFI's main contribution is a deep learning framework for WiFi device fingerprinting and re-identification.

▶ [Smartphone Model Fingerprinting using WiFi Radiation Patterns](https://www.youtube.com/watch?v=QyNu1hvlqIE) — Computer Science & IT Conference Proceedings · 27:40 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand MobRFFI, start by learning the foundational signal processing technique of Short-Time Fourier Transform (STFT), which converts raw WiFi signals into spectrograms. Next, grasp convolutional neural networks (CNNs) and specifically the ResNet architecture used for extracting device fingerprints. Then, explore multi-receiver data fusion with RSSI weighting to see how combining signals improves accuracy. Finally, study WiFi device fingerprinting with deep learning to connect all concepts directly to the paper's core method.

### short time Fourier transform STFT signal processing *(prerequisite)*
STFT is a key signal processing method that breaks down a signal into time-frequency components, producing spectrograms that reveal how frequency content changes over time. This is essential for converting raw WiFi IQ samples into a form suitable for deep learning.

*How the paper uses it:* MobRFFI preprocesses raw WiFi IQ samples into channel-independent spectrograms using STFT as a foundational step.

▶ [Short-time Fourier Transform and the Spectogram](https://www.youtube.com/watch?v=NA0TwPsECUQ) — Barry Van Veen · 13:09 · 13y ago

### convolutional neural networks ResNet architecture *(prerequisite)*
CNNs are deep learning models designed to extract spatial features from data like images or spectrograms. ResNet introduces residual connections that help train very deep networks effectively, improving feature extraction quality.

*How the paper uses it:* MobRFFI uses a ResNet-based CNN to extract unique hardware impairment features from WiFi preamble spectrograms.

▶ [ResNet (actually) explained in under 10 minutes](https://www.youtube.com/watch?v=o_3mboe1jYI) — rupert ai · 9:47 · 3y ago

### multi-receiver data fusion RSSI weighting *(prerequisite)*
Multi-receiver data fusion combines signals from multiple receivers to improve detection accuracy. RSSI weighting assigns importance to each receiver's data based on signal strength, enhancing the overall fingerprint reliability.

*How the paper uses it:* MobRFFI combines fingerprints from multiple receivers using RSSI-weighted fusion to boost device re-identification accuracy significantly.

▶ [Elrs Link Quality & Rssi-dbm | How They Work Together](https://www.youtube.com/watch?v=7WCiRQpkv9E) — PropsOff · 5:44 · 2y ago

### WiFi device fingerprinting deep learning
WiFi device fingerprinting uses deep learning to identify unique hardware characteristics in WiFi signals, enabling device re-identification without relying on MAC addresses. This approach preserves privacy while tracking device movement.

*How the paper uses it:* MobRFFI's core contribution is an AI-based fingerprinting framework that extracts device-specific features from WiFi signals using deep learning.

▶ [How Device Fingerprinting Reveals Your Real Identity](https://www.youtube.com/watch?v=673nJQEkhe0) — Rob Braxman Tech · 14:24 · 6y ago

### open-set classification machine learning *(prerequisite)*
Open-set classification deals with distinguishing known classes from unknown ones, important in dynamic environments where new devices may appear. It requires models to recognize when a sample does not belong to any known category.

*How the paper uses it:* MobRFFI uses open-set classification to differentiate known and new devices, improving robustness in real-world scenarios.

▶ [Recitation 5: Face Classification and Verification](https://www.youtube.com/watch?v=v46C2ilPtUU) — Carnegie Mellon University Deep Learning · 1:08:41 · 5y ago

## Already in your library

- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [MIT 6.S191: Convolutional Neural Networks](https://www.youtube.com/watch?v=pqIcoskUuWs) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [But what is the Fourier Transform? A visual introduction.](https://www.youtube.com/watch?v=spUNpyF58BY) — also for: List Decoding Reed–Solomon Codes in the Lee, Euclidean, and Other Metrics (Chris Peikert)
- [13. Classification](https://www.youtube.com/watch?v=eg8DJYwdMyg) — also for: In the Arms of a Robot: Designing Autonomous Hugging Robots with Intra-Hug Gestures (Hasti Seifi)
- [Classification in Machine Learning | Machine Learning with ...](https://www.youtube.com/watch?v=ETChs4iQa8g) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of MobRFFI's approach to WiFi device re-identification. Starting with a beginner-level project that reproduces a core signal preprocessing step, you then implement the core fingerprint extraction and classification pipeline on a public dataset at intermediate level. Finally, the advanced project tackles a key limitation of the paper by exploring long-term fingerprint stability improvements, potentially contributing novel insights to the field.

### Beginner — WiFi Preamble Spectrogram Preprocessing
*Effort: a weekend, ~8 hours*

You build a signal preprocessing pipeline that converts raw WiFi IQ samples into channel-independent short-time Fourier transform (STFT) spectrograms, including the removal of guard and DC subcarriers as described in MobRFFI. This reproduces the optimized preprocessing step that improved classification accuracy by 13%.

**Why it shows you understood the paper:** This project shows you grasp the critical signal processing techniques used to prepare WiFi signals for fingerprint extraction, a foundational step in MobRFFI's pipeline.

**Grounded in:** Optimized WiFi spectrogram preprocessing, boosting device classification accuracy by 13%.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Simulated or publicly available WiFi IQ sample captures; since the authors did not release data, you simulate raw IQ samples or use small-scale WiFi signal captures from public repositories.

**Build it:**

1. Implement STFT transformation on raw IQ samples to generate spectrograms.
2. Identify and remove guard and DC subcarriers from the spectrograms.
3. Visualize before-and-after spectrograms to confirm preprocessing effects.
4. Document the impact of preprocessing on signal representation quality.

**Ships as:** A Jupyter Notebook demonstrating WiFi IQ to spectrogram conversion with and without subcarrier removal, including visualizations and explanations.

**Stretch goal:** Add a simple baseline classifier (e.g., KNN) on the preprocessed spectrograms to observe classification accuracy differences.

### Intermediate — MobRFFI Fingerprint Extraction and Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the core MobRFFI device fingerprinting pipeline by training a ResNet-based CNN to extract device fingerprints from WiFi preamble spectrograms and perform device classification using k-Nearest Neighbors with RSSI-weighted multi-receiver fusion. You evaluate performance on the WiSig dataset, a public WiFi signal dataset used as a substitute for MobRFFI data.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main AI-based fingerprint extraction and multi-receiver fusion method, reproducing key classification metrics and understanding the system's architecture.

**Grounded in:** Demonstrated 94% device classification accuracy on the WiSig dataset in a multi-day closed-set scenario; combining fingerprints from multiple receivers improves accuracy from 81% to 100%.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** WiSig dataset (public WiFi signal dataset used in the paper as a benchmark substitute for MobRFFI data).

**Build it:**

1. Preprocess WiSig raw WiFi IQ samples into channel-independent spectrograms using STFT and subcarrier removal.
2. Implement a ResNet-based CNN encoder to extract device fingerprints from spectrograms.
3. Train the CNN on single-receiver data and evaluate classification accuracy using k-NN.
4. Implement RSSI-weighted multi-receiver fingerprint fusion and evaluate accuracy improvements.
5. Compare single-receiver and multi-receiver classification results and report metrics.

**Ships as:** A GitHub repository with code for preprocessing, CNN training, multi-receiver fusion, and a report reproducing key classification accuracy results on WiSig.

**Stretch goal:** Extend the pipeline to perform open-set classification distinguishing known and unknown devices.

### Advanced — Improving Long-Term Fingerprint Stability for WiFi Device Re-identification
*Effort: 3+ weeks*

You develop and evaluate methods to enhance the temporal stability of WiFi device fingerprints over multiple days or weeks, addressing a key limitation of MobRFFI. This may include data augmentation, domain adaptation techniques, or temporal embedding smoothing applied to the fingerprint extraction pipeline. You test your approach on multi-day WiFi signal captures from the WiSig dataset or simulated data.

**Why it shows you understood the paper:** This project shows deep comprehension of MobRFFI's limitations and applies advanced machine learning techniques to improve robustness, potentially contributing novel insights toward long-term device tracking.

**Grounded in:** Fingerprint stability degrades over multiple days or weeks, limiting long-term tracking; future direction includes improving long-term fingerprint stability for multi-day or multi-week device tracking.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Multi-day WiFi signal captures from WiSig dataset or simulated multi-day data reflecting environmental variations.

**Build it:**

1. Analyze fingerprint temporal stability degradation over multiple days using baseline MobRFFI pipeline.
2. Implement techniques such as temporal embedding smoothing, domain adaptation, or data augmentation to improve stability.
3. Retrain and evaluate the fingerprint extraction model with these enhancements.
4. Quantify improvements in multi-day classification accuracy and fingerprint distance stability.
5. Document findings and discuss implications for real-world long-term deployment.

**Ships as:** A research-style report and code repository demonstrating improved multi-day fingerprint stability with quantitative evaluation.

**Stretch goal:** Integrate environmental context features (e.g., RSSI fluctuations, receiver location metadata) to further enhance robustness.

_No authors' code or dataset is publicly released; intermediate and advanced projects rely on the WiSig dataset as a substitute or simulated WiFi IQ data._
