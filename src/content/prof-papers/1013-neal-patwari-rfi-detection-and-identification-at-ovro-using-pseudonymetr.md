---
title: "1013 · RFI Detection and Identification at OVRO Using Pseudonymetry — Neal Patwari"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-neal-patwari"
source_hash: "bf116662a477e8f5ebcbb892227430e9eedbee0d8ec2ffacb759ab9cf6b54756"
sequence: 1013
generator: "outreach-garden: managed"
---

# 1013 · RFI Detection and Identification at OVRO Using Pseudonymetry

## At a glance

- **Professor:** Neal Patwari
- **Institution:** University of Utah
- **Paper:** [RFI Detection and Identification at OVRO Using Pseudonymetry](https://arxiv.org/pdf/2510.27078)
- **Authors:** Meles G. Weldegebriel, Zihan Li, Ning Zhang, Greg Hellbourg, Neal Patwari
- **Year:** 2026

## Paper overview

This paper presents a new method called pseudonymetry to detect and identify sources of radio-frequency interference (RFI) at the Owens Valley Radio Observatory (OVRO). The method embeds a unique, low-power watermark into wireless transmissions that can be detected by radio telescopes using only their standard spectrogram data, even when the interference signal is very weak. This allows the observatory to not only detect interference but also attribute it to specific transmitters, enabling better enforcement and dynamic spectrum sharing.

### Why it matters

**Research problem:** Radio astronomy observatories face increasing challenges from unintended radio-frequency interference (RFI) caused by the growing number of wireless devices. Existing mitigation methods detect interference but cannot reliably attribute it to specific transmitters, especially at very low signal-to-noise ratios (SNR), limiting enforcement and dynamic spectrum sharing.

**Why it matters:** Radio telescopes are extremely sensitive and even weak interference can corrupt scientific data. Without the ability to attribute interference to specific devices, enforcement and coordination are difficult, leading to overly conservative spectrum protection that reduces spectrum utilization.

**Key contributions:**

- First over-the-air field demonstration of pseudonymetry at a radio observatory (OVRO) using only spectrogram data.
- Development of a practical spectrogram-only receiver software chain that performs synchronization, timing correction, and low-SNR decoding.
- Demonstration that pseudonym watermarks can be decoded at SNRs as low as -20 dB, relevant to passive protection criteria.
- Provision of a lightweight accountability mechanism that complements existing RFI mitigation and dynamic spectrum sharing frameworks.

## About the professor

**Neal Patwari** — Director & Professor, University of Utah.

Research interests: Systems (Networking); Security / Privacy (Systems Security)

### Research links

- [Faculty/profile page](https://profiles.faculty.utah.edu/u0544128)
- [Identity evidence](https://www.cs.utah.edu/patwari-neal)
- [Professor website](https://www.cs.utah.edu/~kasera/)
- [Resolved homepage](https://kasera.coe.utah.edu/#content)
- [Google Scholar](http://scholar.google.com/citations?user=XeYCNAwAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Digital Signal Processing
**The paper assumes:** digital signal processing fundamentals, time-frequency analysis, OFDM modulation, synchronization techniques
**Already in this field?** Skip this entirely if you have taken an undergraduate course covering digital signal processing and wireless communications fundamentals.

This background playlist selection focuses on digital signal processing (DSP), essential for understanding the spectrogram-only decoding pipeline and low-SNR watermark detection techniques used in the paper. The rigorous course offers a deep, structured university-level foundation in real-time DSP concepts, while the fast track provides a concise, well-paced introduction to core DSP principles suitable for quick comprehension and practical grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Real-Time Digital Signal Processing](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYvviJ_ZHrHy5TKLb-Vn7-r) — NPTEL - Indian Institute of Science, Bengaluru · 57 videos · 31.4h across 57 episodes

**Watch only this:** Lectures 1-2 ('Lec 01 Introduction', 'Lec 02 Basics of Signal Processing') plus Lectures 8-9 ('Lec 08 FIR - Filters', 'Lec 09 Pipelining and Parallel Processing for Low Power Applications'), and Lecture 21 ('Lec 21 DFT, DTFT, twiddle factors, properties, circular convolution and examples'), totaling about 3.5 hours — these cover core DSP concepts, filtering, and frequency domain analysis critical for understanding the paper's methods.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, covers fundamental and advanced DSP topics including signal representation, filtering, FFT, and real-time constraints, directly relevant to the paper's spectrogram processing and synchronization methods.

*If you want all of it:* 31.4 hours across 57 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.341x Digital Signal Processing - Prof. Alan V. Oppenheim (2016)](https://www.youtube.com/playlist?list=PL9FGejYK7LeQ2oF0S3CjdWaVf8B3QcjfA) — Elmul Soad Swopno · 13 videos · 2.8h across 13 episodes

**Watch only this:** Episodes 1-6 ('T1.1 Difference equations for LTI systems' through 'T2 3 System factorization'), about 1.2 hours — these cover essential DSP system theory and frequency domain concepts relevant to the paper's decoding pipeline.

*Why it unblocks this paper:* The MIT 6.341x Digital Signal Processing course by Prof. Alan V. Oppenheim provides clear, concise explanations of fundamental DSP concepts including system behavior, frequency response, sampling, and quantization, which are foundational to understanding spectrogram-based signal processing in the paper.

*If you want all of it:* 2.8 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on pseudonymetry for RFI detection and identification at OVRO, start with foundational knowledge on Radio Frequency Interference (RFI) mitigation, Orthogonal Frequency Division Multiplexing (OFDM), spectrogram signal processing, and low signal-to-noise ratio decoding. These prerequisites build the technical background necessary to grasp the novel watermark embedding and decoding techniques. Finally, focus on the core concept of pseudonymetry for transmitter attribution, emphasizing the authors' own talks or related advanced academic presentations.

### Radio Frequency Interference Mitigation *(prerequisite)*
This section covers the challenges posed by RFI in sensitive radio astronomy environments and surveys existing detection and mitigation techniques. Understanding these methods provides context for why the paper's approach to attribution and low-SNR watermark decoding is a significant advancement.

*How the paper uses it:* The paper addresses limitations in existing RFI mitigation methods that lack device-level attribution, motivating the need for pseudonymetry.

▶ [Interference Detection, Characterization, and Mitigation Techniques for GNSS Receivers](https://www.youtube.com/watch?v=KrQsci8G1E4) — UNSW Aust. Centre for Space Engineering Research · 38:29 · 9y ago

### Orthogonal Frequency Division Multiplexing *(prerequisite)*
OFDM is the modulation scheme used for embedding the pseudonym watermark on a single subcarrier. A solid understanding of OFDM principles, including subcarrier orthogonality and block structure, is essential to grasp how the watermark is embedded and detected.

*How the paper uses it:* The watermark is embedded on a single OFDM subcarrier of a secondary transmitter, making OFDM knowledge critical to understanding the method.

▶ [Wireless Communications: lecture 8 of 11 - OFDM](https://www.youtube.com/watch?v=ZP48zQvxjf0) — Henk Wymeersch · 41:38 · 7y ago

### Spectrogram Signal Processing *(prerequisite)*
Since the decoding pipeline operates solely on spectrogram data without access to raw IQ samples, understanding spectrogram creation and interpretation is crucial. This section explains how time-frequency representations are used to extract signal features under constrained data conditions.

*How the paper uses it:* The paper's decoding pipeline uses only telescope backend spectrograms, requiring specialized spectrogram-only signal processing techniques.

▶ [Digital Signal Processing, Holton: SHOWSPEC](https://www.youtube.com/watch?v=JzqPX5Fxdok) — Cambridge University Press · 5:15 · 5y ago

### Low Signal-to-Noise Ratio Decoding *(prerequisite)*
Decoding pseudonym watermarks at very low SNRs is a key technical challenge addressed by the paper. This section provides an advanced understanding of SNR concepts and techniques for reliable detection and decoding under noisy conditions.

*How the paper uses it:* The paper demonstrates decoding pseudonym watermarks at SNRs as low as -20 dB, highlighting the importance of low-SNR decoding strategies.

▶ [Week 1-Lecture 3](https://www.youtube.com/watch?v=avKxXK7Ychs) — NPTEL IIT Bombay · 31:42 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on pseudonymetry for RFI detection and identification at OVRO, start by learning the foundational concepts of radio frequency interference (RFI) and its mitigation, which explains the problem context and existing challenges. Next, grasp the basics of Orthogonal Frequency Division Multiplexing (OFDM), as the watermark embedding uses a single OFDM subcarrier. Then, study spectrogram signal processing to understand how the method decodes watermarks using only spectrogram data without IQ samples. Finally, learn about low signal-to-noise ratio decoding to appreciate how the system detects very weak signals. The core concept of pseudonymetry is unique to this paper and lacks a suitable beginner-friendly video, so it is omitted here.

### Radio Frequency Interference Mitigation *(prerequisite)*
This section introduces what radio frequency interference (RFI) is, why it matters in radio astronomy and wireless communications, and the common techniques used to detect and mitigate interference. Understanding these basics sets the stage for why the paper's new method is needed.

*How the paper uses it:* The paper addresses limitations of existing RFI mitigation methods that cannot attribute interference to specific devices.

▶ [What is RFI? An Introduction to Radio Frequency Interference](https://www.youtube.com/watch?v=4PQQAUDPKGE) — Ham Radio DX · 16:09 · 4y ago

### Orthogonal Frequency Division Multiplexing *(prerequisite)*
OFDM is a digital modulation technique that splits a signal into multiple orthogonal subcarriers, allowing efficient and robust wireless communication. Learning OFDM helps understand how the paper embeds a pseudonym watermark on a single OFDM subcarrier.

*How the paper uses it:* The watermark is embedded on a single OFDM subcarrier of a secondary transmitter at 920 MHz.

▶ [OFDM Implementation Explained Visually!](https://www.youtube.com/watch?v=VwnUuBshXGw) — Wireless Explained · 7:40 · 1y ago

### Spectrogram Signal Processing *(prerequisite)*
Spectrograms visualize how signal frequency content varies over time and are widely used in signal processing. This section explains how spectrograms are created and interpreted, which is essential because the paper's decoding pipeline operates solely on spectrogram data without access to raw IQ samples.

*How the paper uses it:* The decoding pipeline uses only telescope backend spectrograms to detect pseudonym watermarks without IQ access.

▶ [Spectrogram explained](https://www.youtube.com/watch?v=0loVfl2Lq4s) — Srinath Srinivasan · 7:03 · 3y ago

### Low Signal-to-Noise Ratio Decoding *(prerequisite)*
Signal-to-noise ratio (SNR) measures signal strength relative to background noise. Understanding SNR and how decoding can be performed at very low SNRs is critical to appreciating how the paper achieves watermark detection even when interference signals are extremely weak.

*How the paper uses it:* The paper demonstrates decoding pseudonym watermarks at SNRs as low as -20 dB, enabling detection under challenging conditions.

▶ [Signal-To-Noise Ratio Explained](https://www.youtube.com/watch?v=6g2zpqye3Yo) — Bao Pham · 4:22 · 5y ago

## Already in your library

- [MWA Conference 2019: A Deep Learning Approach to Identifying Radio Frequency Interference](https://www.youtube.com/watch?v=jSuslxyn5Lc) — also for: Reinforcement Learning for Data-Driven Workflows in Radio Interferometry. I. Principal Demonstration in Calibration (Ramyaa Ramyaa)
- [Short-time Fourier Transform and the Spectogram](https://www.youtube.com/watch?v=NA0TwPsECUQ) — also for: MobRFFI: Non-cooperative Device Re-identification for Mobility Intelligence (Jason O. Hallstrom)
- [Feature Attribution | Stanford CS224U Natural Language Understanding | Spring 2021](https://www.youtube.com/watch?v=RFE6xdfJvag) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the pseudonymetry method for RFI detection and attribution at OVRO. The beginner project reproduces a core signal processing step on synthetic spectrogram data, the intermediate project implements the paper's decoding pipeline on simulated low-SNR OFDM spectrograms, and the advanced project extends the method toward real-time decoding or multi-interferer scenarios, addressing key limitations noted by the authors.

### Beginner — Spectrogram-Based Energy Detection of OFDM Subcarriers
*Effort: a weekend, ~8 hours*

You build a simple Python script that processes synthetic spectrogram data of an OFDM transmission to detect energy on a single subcarrier over time. This reproduces the energy-domain processing step used in the paper's spectrogram-only decoding pipeline.

**Why it shows you understood the paper:** This project shows you understand how the paper extracts and processes energy information from spectrogram data without IQ samples, a foundational step for low-SNR pseudonym watermark decoding.

**Grounded in:** The decoding pipeline uses energy-domain template matching on spectrogram-only data to decode pseudonym bits.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic spectrogram data simulating an OFDM transmission with a single subcarrier carrying a watermark, generated by you based on OFDM parameters described in the paper.

**Build it:**

1. Generate a synthetic spectrogram matrix representing power over time and frequency for an OFDM signal with one subcarrier modulated.
2. Implement a function to extract the energy time series of the target subcarrier from the spectrogram.
3. Plot the extracted energy time series to visualize the watermark signal presence.
4. Implement a simple threshold-based detector to identify watermark bits from the energy time series.
5. Document the code and explain how this relates to the paper's energy-domain processing.

**Ships as:** A Jupyter notebook with code generating synthetic spectrogram data, extracting subcarrier energy, detecting watermark bits, and visualizations illustrating the process.

**Stretch goal:** Add noise to the synthetic spectrogram to simulate low SNR and evaluate detection robustness.

### Intermediate — Offline Pseudonym Watermark Decoding from Simulated Spectrograms
*Effort: 2 weekends, ~20 hours*

You implement the core pseudonymetry decoding pipeline described in the paper, including correlation-based synchronization, timing mismatch correction via resampling, and energy-domain template matching to decode pseudonym bits from simulated spectrogram data of a low-SNR OFDM transmission.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method for low-SNR pseudonym watermark decoding using only spectrogram data, reproducing key results such as bit error rates at various SNRs.

**Grounded in:** Development of a practical spectrogram-only receiver software chain that performs synchronization, timing correction, and low-SNR decoding.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Simulated spectrogram data of OFDM transmissions with embedded pseudonym watermarks at various SNR levels, generated by you based on the paper's OFDM and watermark parameters.

**Build it:**

1. Simulate spectrogram data for OFDM transmissions with embedded pseudonym watermarks at multiple SNR levels.
2. Implement correlation-based synchronization to detect watermark packet start times in the spectrogram.
3. Implement resampling to correct timing resolution mismatches between transmitter and receiver.
4. Implement energy-domain template matching to decode pseudonym bits from the synchronized and resampled spectrogram data.
5. Evaluate bit error probability across SNR levels and plot results similar to the paper's figures.
6. Write a README explaining the pipeline and how it reproduces the paper's decoding approach.

**Ships as:** A Python package or notebook implementing the full decoding pipeline on simulated data, with plots showing decoding accuracy versus SNR.

**Stretch goal:** Compare your decoding pipeline against a naive energy threshold baseline to highlight improvements.

### Advanced — Real-Time Pseudonym Watermark Decoding and Multi-Interferer Handling
*Effort: 3+ weeks*

You extend the offline decoding pipeline to a real-time or near-real-time system that processes streaming spectrogram data, integrating synchronization and decoding steps with low latency. Additionally, you explore decoding pseudonym watermarks in scenarios with multiple overlapping interferers, implementing separation or multi-pseudonym decoding heuristics.

**Why it shows you understood the paper:** This project tackles two key limitations and future directions from the paper: real-time integration and multi-interferer scenarios, demonstrating deep comprehension and ability to innovate beyond the original work.

**Grounded in:** Limitations: Offline analysis and single interferer focus; Future directions: Develop real-time decoding and handle multiple simultaneous interferers.

**Tech stack:** Python 3.11, NumPy, SciPy, AsyncIO or multiprocessing, Matplotlib, Jupyter Notebook or lightweight GUI

**Data:** Simulated streaming spectrogram data with multiple overlapping pseudonym watermarks at low SNR, generated by you based on the paper's parameters.

**Build it:**

1. Design a streaming data pipeline that ingests spectrogram frames and performs incremental synchronization and decoding.
2. Implement real-time correlation-based synchronization and resampling with low latency.
3. Develop methods to detect and separate multiple overlapping pseudonym watermarks in the spectrogram data.
4. Evaluate decoding accuracy and latency on simulated multi-interferer data.
5. Document challenges and potential improvements for real observatory deployment.

**Ships as:** A real-time-capable decoding system prototype with multi-interferer decoding support, demonstrated on simulated streaming spectrogram data, with performance metrics and usage instructions.

**Stretch goal:** Integrate frequency offset correction heuristics to improve robustness against spectrogram distortions.

_The authors released no code or data artifacts; all projects rely on simulated spectrogram data generated based on the paper's descriptions and parameters._
