---
title: "476 · Active noise cancellation on open-ear smart glasses — Swarun Kumar"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-swarun-kumar"
source_hash: "b811e44767614d19177803eea49eb2218fcf5957f9dcad0d7b702c5197d84516"
sequence: 476
generator: "outreach-garden: managed"
---

# 476 · Active noise cancellation on open-ear smart glasses

## At a glance

- **Professor:** Swarun Kumar
- **Institution:** Carnegie Mellon University
- **Paper:** [Active noise cancellation on open-ear smart glasses](https://arxiv.org/pdf/2604.05519)
- **Authors:** Kuang Yuan, Freddy Yifei Liu, Tong Xiao, Yiwen Song, Chengyi Shen, Saksham Bhutani, Justin Chan, Swarun Kumar
- **Year:** 2026

## Paper overview

This paper presents the first real-time active noise cancellation (ANC) system designed for open-ear smart glasses, which do not seal the ear canal and thus cannot use traditional ANC methods. Using eight microphones embedded around the glasses frame and a neural network to estimate noise at the ear, the system generates anti-noise signals through open-ear speakers to reduce environmental noise. The system was tested on a custom prototype in various real-world environments and showed significant noise reduction and improved audio clarity without requiring in-ear microphones.

### Why it matters

**Research problem:** Conventional ANC techniques rely on error microphones inside or near the ear canal to measure residual sound after cancellation, which is incompatible with open-ear smart glasses that do not seal the ear canal. This makes real-time ANC on open-ear wearables challenging, especially in dynamic, real-world environments.

**Why it matters:** Open-ear smart glasses are increasingly popular wearable devices that preserve ambient awareness but suffer from poor audio quality in noisy environments due to lack of physical isolation. Effective ANC for these devices would improve user experience by reducing unwanted environmental noise while maintaining situational awareness.

**Key contributions:**

- First real-time ANC system for open-ear smart glasses without requiring in-ear error microphones.
- Neural network-based virtual in-ear sensing that estimates acoustic signals at the ear from frame microphones.
- Dual-pipeline architecture separating filter estimation and real-time anti-noise generation to meet latency constraints.
- Custom glasses prototype integrating eight MEMS microphones and open-ear speakers.
- Comprehensive evaluation including benchtop tests on a mannequin head, real-world tests on 11 unseen users across 8 environments, and subjective user studies.

## About the professor

**Swarun Kumar** — Sathaye Family Foundation Professor, Electrical and Computer Engineering, Carnegie Mellon University.

Research interests: next-generation wireless systems spanning sensing, actuation, connectivity, and intelligence

### Research links

- [Faculty/profile page](https://swarunkumar.com)
- [Professor website](https://swarunkumar.com/index.html)
- [Lab website](http://www.witechlab.com/)
- [Google Scholar](https://scholar.google.com/citations?user=WfaqxlgAAAAJ&hl=en&oi=ao)
- [LinkedIn](https://www.linkedin.com/in/swarun/)
- [Social profile](https://twitter.com/swarunk)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** adaptive noise cancellation signal processing
**The paper assumes:** adaptive noise cancellation, digital signal processing, real-time audio filtering, acoustic signal modeling
**Already in this field?** Skip this entirely if you already have a solid understanding of adaptive noise cancellation and real-time digital signal processing concepts.

This background focuses on adaptive noise cancellation (ANC) and real-time digital signal processing (DSP), which are critical to understanding the methods used in the paper for active noise cancellation on open-ear smart glasses. The rigorous course option provides a deep, structured university-level foundation in statistical signal processing, including Wiener filters and estimation theory, essential for grasping the core ANC algorithms. The fast track offers a concise, practical introduction to ANC concepts and adaptive filtering through a short, well-focused explainer series, ideal for quickly gaining intuition and practical understanding without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Statistical Signal Processing](https://www.youtube.com/playlist?list=PLwdnzlV3ogoVj-FLNpzXInhZxcnibqb56) — NPTEL IIT Guwahati · 38 videos · 22.0h across 38 episodes

**Watch only this:** Lectures 1 through 22 (Lec 1 : Overview of Statistical Signal Processing to Lec 22: Causal IIR Wiener Filter), about 12.5 hours — this subset covers the essential theory behind adaptive filtering and Wiener filters used in ANC.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Statistical Signal Processing covers foundational topics such as Wiener filters, estimation theory, and linear models of random signals, directly relevant to the ANC filter design and virtual in-ear sensing in the paper.

*If you want all of it:* 22 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Noise Cancellation Project](https://www.youtube.com/playlist?list=PLmUdsrnksuymSXNwIf2X93xxo7NHeHrgD) — Chaitanya Varun · 10 videos · 1.4h across 10 episodes

**Watch only this:** Episodes 3 (Active Noise Cancellation Explained), 7 (Active Noise Cancellation – From Modeling to Real-Time Prototyping), and 9 (LMS algorithm for noise cancellation on DSK TMS320C6713), about 24 minutes total — these cover the core ANC concepts and adaptive filter implementation relevant to the paper.

*Why it unblocks this paper:* This concise playlist by Chaitanya Varun provides clear, practical explanations of active noise cancellation principles and adaptive filtering algorithms, including LMS, which underpin the real-time ANC system in the paper.

*If you want all of it:* 1.4 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on active noise cancellation (ANC) for open-ear smart glasses, start with foundational knowledge on active noise cancellation systems, then build understanding of acoustic signal processing in wearables, neural networks for audio estimation, and real-time embedded DSP architectures. Finally, focus on the paper's core novel contribution, the virtual in-ear sensing method for ANC, with emphasis on the authors' own talk if available.

### Active noise cancellation systems *(prerequisite)*
Begin by learning the fundamental principles and algorithms behind active noise cancellation, including feedforward and feedback ANC systems, adaptive filtering, and latency considerations. This foundational knowledge is critical to appreciate the challenges and innovations in applying ANC to open-ear smart glasses.

*How the paper uses it:* The paper builds on ANC fundamentals to design a novel system for open-ear smart glasses without in-ear microphones.

▶ [Lecture 30 : Active noise control :1](https://www.youtube.com/watch?v=wpCeixhr5tc) — IIT Roorkee July 2018 · 25:25 · 1 year ago

### Acoustic signal processing for wearables *(prerequisite)*
Next, explore how acoustic signals are captured and processed in wearable devices, focusing on sensor integration, signal conditioning, and challenges unique to wearables such as form factor and ambient noise. This knowledge supports understanding the hardware and signal acquisition aspects of the paper's prototype.

*How the paper uses it:* The paper's system uses multiple microphones embedded in glasses frames and processes acoustic signals for noise estimation and cancellation.

▶ [Dr Changsheng Wu - Accessible Wireless Wearables Toward Pervasive Healthcare](https://www.youtube.com/watch?v=n6I81q4Zkn0) — Loughborough University IAS · 1:05:22 · 10 months ago

### Neural networks for audio estimation *(prerequisite)*
Gain insight into neural network architectures and training methods relevant to audio signal estimation, including convolutional neural networks and their application to time-series data. This is essential to grasp the paper's virtual in-ear sensing approach that uses a neural network to estimate ear canal noise from frame microphones.

*How the paper uses it:* The paper employs a neural network to perform virtual in-ear sensing for noise estimation without in-ear microphones.

▶ [Lecture 9 | (1/3) Convolutional Neural Networks](https://www.youtube.com/watch?v=2XbZ03D0Sf4) — Carnegie Mellon University Deep Learning · 1:21:23 · 6 years ago

### Real-time embedded DSP architectures *(prerequisite)*
Understand the design and implementation of low-latency digital signal processing systems on embedded hardware, including processor selection, real-time constraints, and optimization techniques. This knowledge is crucial for appreciating the paper's dual-pipeline system that meets strict latency requirements for ANC.

*How the paper uses it:* The paper implements real-time ANC filter application on embedded DSP hardware to achieve low latency noise cancellation.

▶ [High-Level Programming of FPGAs for Audio Real-Time Signal Processing Applications - Romain Michon](https://www.youtube.com/watch?v=7IbD4DDS5UA) — ADC - Audio Developer Conference · 20:18 · 3 years ago

### Virtual in-ear sensing for ANC
Focus on the paper's novel virtual in-ear sensing technique, which estimates the noise at the ear from multiple microphones on the glasses frame using neural networks. This approach enables ANC on open-ear smart glasses without traditional in-ear error microphones, addressing a key challenge in the field.

*How the paper uses it:* This is the paper's core contribution enabling real-time ANC on open-ear smart glasses without in-ear microphones.

▶ [Interspeech 2020: A Deep Learning Approach to Active Noise Control](https://www.youtube.com/watch?v=Mo2SBv7Ibcg) — MLOps Guru · 15:36 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand active noise cancellation (ANC) on open-ear smart glasses, start by learning the fundamentals of ANC systems and how they reduce noise. Next, explore acoustic signal processing in wearables to grasp how sound is captured and processed in such devices. Then, build intuition on neural networks for audio estimation, which are key to the paper's virtual in-ear sensing method. Finally, study real-time embedded DSP architectures critical for implementing low-latency ANC on wearable hardware. The path concludes with the paper’s novel virtual in-ear sensing approach, tying all concepts together.

### Active noise cancellation systems *(prerequisite)*
Active noise cancellation (ANC) uses sound waves that are the exact opposite (anti-noise) of unwanted noise to cancel it out, improving audio clarity. Understanding the basic types of ANC systems, such as feedforward and feedback, and how adaptive filtering works is essential to grasp how noise reduction is achieved in real time.

*How the paper uses it:* The paper builds on ANC fundamentals but innovates by applying ANC to open-ear smart glasses without in-ear microphones.

▶ [Lecture 31 : Active noise control  : 2](https://www.youtube.com/watch?v=UYcON6YKkYU) — IIT Roorkee July 2018 · 29:28 · 1 year ago

### Acoustic signal processing for wearables *(prerequisite)*
Acoustic signal processing involves capturing, filtering, and analyzing sound signals in wearable devices, which face unique challenges like limited space and environmental noise. Learning how microphones and speakers work together in wearables helps understand how the glasses capture ambient noise and generate anti-noise.

*How the paper uses it:* The paper’s system uses multiple microphones embedded in the glasses frame and open-ear speakers, relying on acoustic signal processing to estimate and cancel noise.

▶ [How Do Hearing Aids Really Work? The Science Explained 🔊](https://www.youtube.com/watch?v=VvBMHccM7iA) — History of Simple Things · 8:46 · 2 months ago

### Neural networks for audio estimation *(prerequisite)*
Neural networks can learn complex patterns in audio data to estimate or predict sound signals, such as noise at a specific location. Understanding the basics of neural networks and how they process audio features is key to grasping how the paper’s system estimates noise at the ear from frame microphone signals.

*How the paper uses it:* The paper uses a neural network to perform virtual in-ear sensing by estimating the noise at the ear from multiple microphones on the glasses frame.

▶ [Understanding Audio Signals for Machine Learning](https://www.youtube.com/watch?v=daB9naGBVv4) — Valerio Velardo - The Sound of AI · 25:16 · 6 years ago

### Real-time embedded DSP architectures *(prerequisite)*
Digital Signal Processing (DSP) architectures in embedded systems enable real-time audio processing with strict latency constraints, which is critical for effective ANC. Learning how DSP hardware and software work together to apply filters and generate anti-noise signals helps understand the system’s low-latency implementation.

*How the paper uses it:* The paper implements a dual-pipeline system with a low-latency DSP unit to generate anti-noise signals in real time on wearable hardware.

▶ [Alan Christie - Building a real-time embedded audio sampling application with MicroPython](https://www.youtube.com/watch?v=LXRLr8pIJf0) — EuroPython Conference · 28:26 · 8 years ago

## Already in your library

- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for understanding and demonstrating the core ideas and challenges of the paper "Active noise cancellation on open-ear smart glasses." Starting with a beginner-level simulation of virtual in-ear noise estimation, progressing to an intermediate implementation of a simplified ANC system using neural networks and multiple microphones, and culminating in an advanced project that addresses a key limitation by developing wind-noise detection and mitigation to improve outdoor ANC performance.

### Beginner — Simulate Virtual In-Ear Noise Estimation from Frame Microphones
*Effort: a weekend, ~8 hours*

You build a Python simulation that models how signals from multiple microphones placed around a glasses frame can be combined using a simple neural network to estimate the noise signal at the ear canal. The project uses synthetic audio signals to mimic environmental noise and microphone inputs, and trains a small neural network to predict the virtual in-ear noise.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's key contribution of virtual in-ear sensing using frame microphones and neural networks, showing you understand how the system estimates noise at the ear without in-ear microphones.

**Grounded in:** Neural network-based virtual in-ear sensing that estimates acoustic signals at the ear from frame microphones.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic audio signals generated to simulate environmental noise and microphone inputs, as no public dataset is available.

**Build it:**

1. Generate synthetic audio signals representing environmental noise and simulate microphone signals with added noise and delays.
2. Design and implement a small neural network in PyTorch that takes multiple microphone signals as input and outputs an estimated in-ear noise signal.
3. Train the network on the synthetic data and evaluate its prediction accuracy using mean squared error.
4. Visualize the input microphone signals and the predicted in-ear noise to compare performance.
5. Write a README explaining the simulation setup, neural network architecture, and results.

**Ships as:** A GitHub repository with code to simulate microphone signals, train a neural network for virtual in-ear noise estimation, and visualizations showing estimation accuracy.

**Stretch goal:** Extend the simulation to include different noise source positions and microphone counts to observe effects on estimation accuracy.

### Intermediate — Implement Simplified Real-Time ANC with Virtual In-Ear Sensing
*Effort: 2 weekends, ~20 hours*

You implement a simplified active noise cancellation system that uses a neural network to estimate noise at the ear from multiple microphone inputs and applies a basic adaptive filter to generate anti-noise signals. You evaluate noise reduction performance on a public or synthetic dataset simulating environmental noise and compare against a Wiener filter baseline.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's core method of dual-pipeline ANC with virtual in-ear sensing and demonstrates understanding of real-time ANC principles, neural network noise estimation, and filter application under latency constraints.

**Grounded in:** Dual-pipeline architecture separating filter estimation and real-time anti-noise generation to meet latency constraints; outperforms Wiener filter baseline.

**Tech stack:** Python 3.11, PyTorch, SciPy, NumPy, Matplotlib

**Data:** Synthetic or publicly available environmental noise audio samples used to simulate microphone inputs and evaluate ANC performance; no authors' dataset is available.

**Build it:**

1. Prepare or generate multi-channel audio data simulating microphone signals around a glasses frame with environmental noise.
2. Implement a neural network in PyTorch to estimate virtual in-ear noise from microphone signals, training it on the data.
3. Implement a simple adaptive filter (e.g., LMS or FIR filter) to generate anti-noise signals based on the estimated noise.
4. Evaluate noise reduction performance by comparing input and output noise levels in dB and compare against a Wiener filter baseline.
5. Document the system architecture, training procedure, evaluation metrics, and results in a README.

**Ships as:** A GitHub repository with code for neural network-based virtual in-ear noise estimation, adaptive filter-based ANC, evaluation scripts, and comparison to Wiener filter baseline.

**Stretch goal:** Incorporate user-specific calibration by simulating secondary path effects and adapting filters accordingly.

### Advanced — Wind Noise Detection and Mitigation for Outdoor ANC on Open-Ear Glasses
*Effort: 3+ weeks*

You develop a wind noise detection algorithm and integrate a wind-resistant microphone signal processing pipeline to improve ANC performance in outdoor environments. This project extends the paper's system by addressing the limitation of degraded performance due to wind noise, implementing signal processing techniques to detect and suppress wind noise before ANC filtering.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the system's challenges in real-world outdoor settings and the ability to design signal processing solutions to improve robustness.

**Grounded in:** Performance decreases in outdoor environments due to wind noise affecting microphones and ears; future direction to develop wind-noise detection algorithms and wind-resistant microphone enclosures.

**Tech stack:** Python 3.11, PyTorch, SciPy, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic or publicly available audio recordings with wind noise mixed with environmental noise to simulate outdoor microphone signals; no authors' dataset is available.

**Build it:**

1. Collect or generate audio samples simulating outdoor microphone signals with wind noise and environmental noise.
2. Research and implement wind noise detection algorithms based on spectral and temporal features.
3. Design and implement preprocessing filters or neural network modules to suppress detected wind noise.
4. Integrate the wind noise mitigation pipeline with a virtual in-ear noise estimation and ANC filter system.
5. Evaluate noise reduction performance indoors vs. outdoors with and without wind noise mitigation, reporting dB reduction and speech intelligibility metrics.
6. Document the approach, algorithms, evaluation, and limitations in a detailed README.

**Ships as:** A GitHub repository demonstrating wind noise detection and suppression integrated with virtual in-ear ANC, with evaluation results showing improved outdoor noise reduction.

**Stretch goal:** Prototype a lightweight recalibration trigger based on detected performance degradation to maintain ANC effectiveness over time.

_The paper authors have not released code or datasets; all projects rely on synthetic or publicly available audio data to simulate microphone inputs and environmental noise._
