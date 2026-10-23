---
title: "960 · LLM4HAR: Generalizable On-device Human Activity Recognition with Pretrained LLMs — Yi Ding"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yi-ding"
source_hash: "46b8b316822c90af789f5433106d7351f0acf96e684175b375d525912c41739e"
sequence: 960
generator: "outreach-garden: managed"
---

# 960 · LLM4HAR: Generalizable On-device Human Activity Recognition with Pretrained LLMs

## At a glance

- **Professor:** Yi Ding
- **Institution:** University of Texas at Dallas
- **Paper:** [LLM4HAR: Generalizable On-device Human Activity Recognition with Pretrained LLMs](https://dl.acm.org/doi/pdf/10.1145/3711896.3737226)
- **Authors:** Zhiqing Hong, Yiwei Song, Zelong Li, Anlan Yu, Shuxin Zhong, Yi Ding, Tian He, Desheng Zhang
- **Year:** 2025

## Paper overview

This paper presents LLM4HAR, a novel system that leverages pretrained large language models (LLMs) to improve human activity recognition (HAR) from sensor data collected on mobile devices. The approach addresses challenges in cross-domain generalization and on-device efficiency by adapting LLMs, injecting sensor knowledge, and compressing the model for real-time use on smartphones. The system has been deployed in real-world logistics settings, demonstrating high accuracy and practical benefits.

### Why it matters

**Research problem:** Sensor-based human activity recognition (HAR) suffers from significant performance degradation when models trained on one domain (e.g., one group of users or devices) are tested on another due to distribution shifts. Existing domain adaptation and generalization methods often require costly target domain data or fine-tuning, which is impractical in large-scale industrial applications like last-mile delivery. The challenge is to develop a generalizable, efficient HAR model that can run on mobile devices and handle cross-domain variability without extensive target data.

**Why it matters:** Accurate and generalizable HAR is critical for many applications including healthcare, industrial production, and logistics. In last-mile delivery, recognizing courier activities enables workload fairness, efficiency improvements, and low-cost map data generation. However, domain shifts caused by diverse users, devices, and sensor placements hinder robust deployment. Solving this problem enables scalable, privacy-preserving, and real-time HAR on mobile devices, directly impacting courier welfare and operational efficiency.

**Key contributions:**

- Bridging the modality gap between IMU sensor data and pretrained LLMs by designing sensor embedding and segmentation modules.
- Demonstrating that knowledge learned from large-scale textual data enhances cross-domain HAR generalization.
- Developing a selective fine-tuning strategy to inject sensor knowledge while preserving pretrained LLM generalization.
- Designing a model compression pipeline that reduces model size by over 10x, enabling on-device real-time HAR.
- Deploying LLM4HAR in a large-scale industrial setting (JD Logistics) with millions of detected activities supporting practical applications.

## About the professor

**Yi Ding** — Assistant Professor, Computer Science, University of Texas at Dallas.

Research interests: mobile computing, multimodal sensing, machine learning

### Research links

- [Faculty/profile page](https://yi-ding.me)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** transformer neural networks
**The paper assumes:** transformer neural network architectures, self-attention mechanisms, positional encoding, and pretrained language models
**Already in this field?** Skip this entirely if you already understand the architecture and training of transformer-based language models like GPT-2.

This background focuses on transformer neural networks, the foundational architecture behind pretrained large language models like GPT-2 used in the LLM4HAR paper. Understanding transformers' key components such as token embeddings, positional encodings, self-attention, and layer normalization is essential to grasp how the authors adapt LLMs for sensor data and optimize them for on-device human activity recognition. The course option offers a deep, rigorous dive suitable for those seeking comprehensive mastery, while the fast track provides a concise, visual, and intuition-driven introduction to the same concepts for quicker understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

**Watch only this:** Lectures 7-11 (Attention, Final Projects and LLM Intro; Self-Attention and Transformers; Pretraining; Post-training by Archit Sharma; Benchmarking by Yann Dubois), about 6 hours — these cover transformer basics, self-attention, and pretrained LLM concepts essential for this paper.

*Why it unblocks this paper:* Stanford CS224N Spring 2024 is a top-tier university course taught by Professor Christopher Manning that thoroughly covers transformer architectures, including self-attention, positional embeddings, and layer normalization, all critical to understanding the LLM4HAR methodology.

*If you want all of it:* 27.5 hours across all 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Transformer Explained and Visualized](https://www.youtube.com/playlist?list=PLRgS_r6tnkkhI-q1auABKLfLWG0suOWln) — Pak · 10 videos · 2.7h across 10 episodes

**Watch only this:** Episodes 1-3 (Position Embeddings; Multi-Head & Self-Attention; Decoder’s Masked Attention), about 45 minutes — these episodes cover the fundamental transformer mechanisms needed to understand the paper's adaptation of LLMs.

*Why it unblocks this paper:* The 'Transformer Explained and Visualized' playlist by Pak offers a clear, visual, and concise explanation of transformer components such as position embeddings, multi-head self-attention, and layer normalization, providing an accessible yet sufficiently detailed overview relevant to the paper's core techniques.

*If you want all of it:* 2.7 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LLM4HAR paper, start with foundational concepts including domain generalization in machine learning, model compression for on-device inference, sensor-based human activity recognition (HAR), and large language model (LLM) adaptation techniques. These prerequisites provide the necessary background on the challenges and methods the paper addresses. Finally, focus on the core concept of the paper itself, featuring the authors' own talk or closest available substitute to gain direct insights into their novel approach and system design.

### Domain generalization in machine learning *(prerequisite)*
Domain generalization is critical for understanding how models can maintain performance across different data distributions without access to target domain data. This section covers university-level lectures and research talks that explain domain generalization techniques and challenges, which directly relate to LLM4HAR's goal of cross-domain HAR generalization.

*How the paper uses it:* LLM4HAR addresses cross-domain variability in HAR by leveraging pretrained LLM knowledge to generalize without target domain fine-tuning.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - Domain Generalization l 2022 I Lecture 14](https://www.youtube.com/watch?v=EK0sgHPLou8) — Stanford Online · 3y ago

### Model compression for on-device inference *(prerequisite)*
Understanding model compression techniques is essential to grasp how LLM4HAR achieves real-time inference on resource-constrained mobile devices. This section includes university seminars and technical talks on pruning, quantization, and other compression methods relevant to deploying large models efficiently.

*How the paper uses it:* LLM4HAR compresses GPT-2 based LLMs by over 10x to enable efficient on-device HAR with low latency and energy consumption.

▶ [Model Compression for On-Device AI • Talk at University of South Carolina @UofSC • Oct 17, 2025](https://www.youtube.com/watch?v=_x44Zr2lgfo) — Aman Chadha · 1y ago

### Sensor-based human activity recognition *(prerequisite)*
A solid understanding of sensor-based HAR fundamentals is necessary to appreciate the challenges in sensor data processing and activity classification. This section focuses on academic lectures and research-level content rather than beginner tutorials, providing context for the sensor data adaptation and knowledge learning modules in LLM4HAR.

*How the paper uses it:* LLM4HAR innovates on sensor data adaptation and knowledge injection to improve HAR performance using pretrained LLMs.

▶ [ICIEV-IVPR Lect.: Smartphone-based Human Activity Recognition: Applications to Nursing Bigdata](https://www.youtube.com/watch?v=IWwj9cBZjhE) — Rumaisa Umar Foundation · 5y ago

### Large language models adaptation *(prerequisite)*
This section covers advanced talks on adapting pretrained LLMs to new tasks and modalities, including parameter-efficient fine-tuning methods. Understanding these adaptation strategies is key to comprehending how LLM4HAR selectively fine-tunes LLM components for sensor data without losing pretrained knowledge.

*How the paper uses it:* LLM4HAR applies selective fine-tuning and sensor embedding injection to adapt GPT-2 LLMs for sensor-based HAR tasks.

▶ [Private Adaptations of Large Language Models](https://www.youtube.com/watch?v=xr352igdOy4) — Google TechTalks · 8mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand LLM4HAR, starting with the basics of sensor-based human activity recognition (HAR), then exploring how large language models (LLMs) can be adapted for new tasks, followed by understanding domain generalization to handle cross-domain variability, and model compression techniques for efficient on-device inference. Finally, it covers the core method of sensor data adaptation that bridges sensor inputs with pretrained LLMs, enabling the novel HAR approach in the paper.

### Sensor-based human activity recognition *(prerequisite)*
Learn what human activity recognition (HAR) is, how sensor data from devices like smartphones is used to detect activities, and why this is important for applications such as healthcare and logistics. This foundational knowledge helps you understand the problem LLM4HAR aims to solve.

*How the paper uses it:* The paper improves HAR by using pretrained LLMs to better generalize across different users and devices.

▶ [HAR#1: Human Action, Activity Recognition: Video-based, Sensor-based: Computer Vision, Sensor-based](https://www.youtube.com/watch?v=Q7R2Wixpi6w) — Rumaisa Umar Foundation · 6y ago

### Large language models adaptation *(prerequisite)*
Understand how pretrained large language models, originally trained on text, can be adapted to new tasks and data modalities by fine-tuning or modifying parts of the model. This concept is key to grasping how LLM4HAR repurposes LLMs for sensor data.

*How the paper uses it:* LLM4HAR adapts pretrained LLMs to sensor-based HAR by selective fine-tuning and adding sensor-specific embeddings.

▶ [Adam Zíka: Low‑Rank Adaptation (LoRA) in Large Language Models](https://www.youtube.com/watch?v=HcBiSv9WHak) — PyCon CZ · 2y ago

### Domain generalization in machine learning *(prerequisite)*
Learn about domain generalization techniques that enable machine learning models to perform well on unseen data distributions without requiring target domain data or fine-tuning. This is critical for HAR systems deployed in diverse real-world settings.

*How the paper uses it:* LLM4HAR addresses cross-domain variability in HAR by leveraging pretrained LLM knowledge to generalize without costly target data.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - Domain Generalization l 2022 I Lecture 14](https://www.youtube.com/watch?v=EK0sgHPLou8) — Stanford Online · 3y ago

### Model compression for on-device inference *(prerequisite)*
Explore methods to reduce the size and computational requirements of deep learning models so they can run efficiently on resource-constrained devices like smartphones, enabling real-time applications.

*How the paper uses it:* LLM4HAR compresses the LLM by removing unnecessary components to enable fast, energy-efficient inference on mobile devices.

▶ [Model Compression for On-Device AI • Talk at University of South Carolina @UofSC • Oct 17, 2025](https://www.youtube.com/watch?v=_x44Zr2lgfo) — Aman Chadha · 1y ago

### LLM4HAR sensor data adaptation
Understand how raw sensor data is transformed into a format compatible with pretrained LLMs through tokenization and sensor embeddings, bridging the modality gap between IMU data and language model inputs.

*How the paper uses it:* This sensor data adaptation module is central to LLM4HAR’s ability to leverage pretrained LLMs for HAR tasks.

▶ [Sensor Fundamentals Data Acquisition Basics and Terminology](https://www.youtube.com/watch?v=Xc8dP0PdC_4) — SAAB RDS · 35:18 · 5y ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Human Activity Recognition Using Smartphones Dataset](https://www.youtube.com/watch?v=1p9cpMIrpHw) — also for: ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition (Sathyanarayanan N. Aakur)
- [Human Activity Recognition using TensorFlow (CNN + LSTM) | 2 Methods](https://www.youtube.com/watch?v=QmtSkq3DYko) — also for: Modeling human activity comprehension at human scale: prediction, segmentation, and categorization (Aaron F. Bobick)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 2 - Large Language Models](https://www.youtube.com/watch?v=GaIeu3npx04) — also for: “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims (Yu Fu)
- [https://www.youtube.com › watch?v=WTeokClNC4o](https://www.youtube.com/watch?v=WTeokClNC4o) — also for: Decomposed Trust: Privacy, Adversarial Robustness, Ethics, and Fairness in Low-Rank LLMs (Yang Li)
- [LoRA: Low-Rank Adaptation of Large Language Models - Explained visually + PyTorch code from scratch](https://www.youtube.com/watch?v=PXWYUTMt-AU) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [Fine-Tuning a Small Language Model - Part-01](https://www.youtube.com/watch?v=pJIfSHwVT1E) — also for: Learning to Reason Efficiently with A* Post-Training (Abulhair Saparov)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the LLM4HAR paper. The beginner project focuses on reproducing the sensor data adaptation step to bridge IMU data with LLM inputs. The intermediate project implements a simplified version of the LLM4HAR core method on a public HAR dataset, comparing it to a baseline. The advanced project extends the method by incorporating multi-modal sensor data, addressing a key limitation noted in the paper.

### Beginner — Sensor Data Tokenization and Embedding for HAR
*Effort: a weekend, ~8 hours*

You build a small pipeline that takes raw IMU sensor data segments and converts them into tokenized sequences with sensor embeddings suitable as input to a pretrained language model. This reproduces the sensor data adaptation module described in LLM4HAR.

**Why it shows you understood the paper:** This project shows you grasp the challenge of bridging the modality gap between raw sensor signals and LLM input formats, a key contribution of the paper.

**Grounded in:** Bridging the modality gap between IMU sensor data and pretrained LLMs by designing sensor embedding and segmentation modules.

**Tech stack:** Python 3.11, NumPy, PyTorch

**Data:** Use a publicly available IMU dataset such as the UCI HAR Dataset as a substitute for the paper's sensor data.

**Build it:**

1. Download and preprocess raw IMU sensor data from the UCI HAR Dataset.
2. Segment the continuous sensor data into fixed-length windows.
3. Design and implement sensor embeddings that encode sensor type and position.
4. Convert each segment into a token sequence combining raw values and embeddings.
5. Visualize or print sample tokenized sequences to verify correctness.

**Ships as:** A Python script or notebook demonstrating sensor data segmentation and tokenization with embeddings, with clear documentation explaining the process.

**Stretch goal:** Add positional embeddings to the token sequences to mimic the paper's sensor positional encoding.

### Intermediate — Implementing LLM4HAR Core Method on Public HAR Data
*Effort: 1-3 weekends*

You implement a simplified version of the LLM4HAR approach by adapting a pretrained GPT-2 model to classify human activities from IMU sensor data. You include sensor data adaptation, partial fine-tuning of LLM parameters, and compare performance against a baseline like a CNN classifier.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method and validate the benefit of pretrained LLM knowledge for cross-domain HAR generalization.

**Grounded in:** Demonstrating that knowledge learned from large-scale textual data enhances cross-domain HAR generalization; selective fine-tuning strategy to inject sensor knowledge while preserving pretrained LLM generalization.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), scikit-learn

**Data:** Use the UCI HAR Dataset or a similar public IMU-based HAR dataset as a proxy for the paper's source domain data.

**Build it:**

1. Preprocess and segment the IMU data into token sequences with sensor embeddings as in the beginner project.
2. Load a pretrained GPT-2 model and modify its input embedding layer to accept sensor tokens.
3. Freeze most GPT-2 parameters except positional encodings and layer normalization layers for selective fine-tuning.
4. Train the adapted model on the source domain HAR data and evaluate on a held-out subset or a different user subset to simulate domain shift.
5. Implement a baseline CNN classifier on the same data for comparison.
6. Report classification metrics such as F1 score for both models.

**Ships as:** A GitHub repository with code to train and evaluate the adapted GPT-2 model and baseline, including scripts, README with results, and instructions.

**Stretch goal:** Implement model compression by pruning or removing GPT-2 layers to reduce model size and measure inference speed.

### Advanced — Extending LLM4HAR with Multi-Modal Sensor Data
*Effort: a few weeks*

You extend the LLM4HAR framework by incorporating additional sensor modalities (e.g., magnetometer or barometer data) alongside IMU data into the tokenization and embedding pipeline. You adapt the LLM input to handle multi-modal tokens and evaluate whether this improves HAR accuracy on a multi-sensor public dataset.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating your ability to innovate beyond the original work and apply its principles to more complex sensor fusion scenarios.

**Grounded in:** The approach currently uses only IMU sensor data; incorporating multi-modal data and contextual information could further improve HAR accuracy.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), scikit-learn

**Data:** Use a public multi-modal HAR dataset such as the WISDM or PAMAP2 dataset that includes IMU plus other sensors.

**Build it:**

1. Collect and preprocess multi-modal sensor data, segmenting into windows.
2. Design tokenization and embedding schemes that encode sensor modality and position.
3. Modify the LLM input embedding layer to accept multi-modal tokens.
4. Fine-tune the adapted LLM selectively as in the intermediate project.
5. Train and evaluate the model on multi-modal HAR data, comparing to IMU-only input.
6. Analyze results to assess the impact of multi-modal fusion on accuracy and generalization.

**Ships as:** A comprehensive GitHub repo with code, documentation, and evaluation results showing the multi-modal LLM4HAR extension.

**Stretch goal:** Experiment with quantization or pruning to further compress the multi-modal model for on-device deployment.
