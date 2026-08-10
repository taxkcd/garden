---
title: "255 · Be Like Water: Adaptive Floating Point for Machine Learning — Thomas Y. Yeh"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thomas-y-yeh"
source_hash: "866ed57b78dcc86234b60d03d3cc04c9fd3c0de5d837a78322168129ae5dc12e"
sequence: 255
generator: "outreach-garden: managed"
---

# 255 · Be Like Water: Adaptive Floating Point for Machine Learning

## At a glance

- **Professor:** Thomas Y. Yeh
- **Institution:** Univ. of California - Irvine
- **Paper:** [Be Like Water: Adaptive Floating Point for Machine Learning](https://proceedings.mlr.press/v162/yeh22a/yeh22a.pdf)
- **Authors:** Thomas Y. Yeh, Maxwell R. Sterner, Zerlina Lai, Brandon Y. Chuang, Alexander Ihler
- **Year:** 2022

## Paper overview

This paper introduces Adaptive Floating Point (AFP), a new numerical format designed to improve memory and compute efficiency for machine learning (ML) models without sacrificing accuracy. AFP dynamically adjusts the representation of floating point numbers in blocks, enabling ultra-low precision inference with accuracy comparable to full precision. It outperforms existing formats like BFloat16 and block floating point (BFP) in both memory and compute density.

### Why it matters

**Research problem:** Current floating point formats for ML inference either consume significant memory and compute resources (e.g., FP32) or lose precision and accuracy when reduced precision formats are used. Existing block floating point formats suffer from precision loss for values far from the maximum exponent and require selective application to certain layers, causing inefficiencies.

**Why it matters:** Efficient numerical representations are critical for accelerating ML inference and training by reducing memory bandwidth and increasing compute density. Improving these can lead to faster, more energy-efficient ML hardware and enable deployment of larger models or more models on the same hardware.

**Key contributions:**

- Proposed Adaptive Floating Point (AFP), a novel numerical datatype for ML with higher memory and compute density than FP32 and BFloat16.
- Introduced the Auto Focus feature combining a shared exponent and private offsets to provide maximum precision to 99% of ML data.
- Developed a block-level characterization scheme with shared fields to dynamically improve efficiency.
- Built a Tensorflow simulation infrastructure to model AFP's numerical effects on weights and layer outputs.
- Performed comprehensive simulations on diverse CNN and Transformer models demonstrating AFP's effectiveness.

## About the professor

**Thomas Y. Yeh** — Assistant Professor of Teaching, Computer Science Dept, Univ. of California - Irvine.

Research interests: computer science education, machine learning acceleration, and computer architecture

### Research links

- [Faculty/profile page](https://sites.google.com/uci.edu/tomyeh/bio)
- [Identity evidence](https://sites.google.com/uci.edu/tomyeh/research?authuser=0)
- [Identity evidence](https://sigcse2026.sigcse.org/profile/tomyeh)
- [LinkedIn](http://www.google.com/url?q=http%3A%2F%2Flinkedin.com&sa=D&sntz=1&usg=AOvVaw2NkP2uL_If7dVQdwqcOvW8)
- [Social profile](http://www.google.com/url?q=http%3A%2F%2Ftwitter.com&sa=D&sntz=1&usg=AOvVaw1AY-RzXps0l7kS4XYKZzQm)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** floating point numerical formats
**The paper assumes:** floating point number representation, numerical precision and rounding, block floating point formats, floating point arithmetic in machine learning
**Already in this field?** Skip this entirely if you already understand floating point number systems and their use in machine learning hardware and software.

Understanding floating point numerical formats is crucial for grasping the design and advantages of Adaptive Floating Point (AFP) in this paper. The rigorous course option offers a detailed, structured exploration of floating point representation within computer architecture, ideal for deep technical comprehension. The fast track provides a concise, focused series on floating point numerical techniques, perfect for quickly building foundational intuition and key concepts relevant to AFP.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer architecture](https://www.youtube.com/playlist?list=PLSh0x_wm6XkcjTVHRK2H9D_N-wFDNrOVF) — The computer school · 37 videos · 4.9h across 37 episodes

**Watch only this:** Watch episodes 4 (Floating point representation || full course in hindi), 5 (Biased exponent || computer architecture || full course in hindi|| #ugcnet #gate_preparation), and 6 (#Explicit and implicit normalization || computer architecture || #ugcnet #gate_preparation), about 22 minutes total — these cover floating point formats, exponent biasing, and normalization essential for AFP.

*Why it unblocks this paper:* This comprehensive computer architecture course includes dedicated lectures on floating point representation and related concepts, providing the rigorous background needed to understand AFP's shared exponent and private offset design.

*If you want all of it:* 4.9 hours across 37 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Numerical Techniques](https://www.youtube.com/playlist?list=PL6HD6MMTq7lfeZMTjq-MSZRdCQrJ1-4re) — StudyStool · 12 videos · 0.9h across 12 episodes

**Watch only this:** Watch episodes 4 (IEEE Standard 754  Floating point Representation | 32 - bit Single precision | IGNOU | StudyStool |), 6 (Relative Error in Floating Point Number | Numerical Techniques | IGNOU | BCA | StudyStool |), and 9 (Rounding Error while represent Floating Point Numbers | StudyStool |), about 12 minutes total — these cover floating point basics, error types, and rounding relevant to AFP.

*Why it unblocks this paper:* This short-form series by StudyStool offers clear, concise explanations of floating point representation, rounding errors, and IEEE 754 standards, providing a quick yet solid foundation for understanding AFP's numerical format innovations.

*If you want all of it:* 0.9 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AFP paper, start with foundational knowledge on floating point numerical formats and block floating point representations, as these are essential to grasp the innovations AFP introduces. Next, explore the context of low precision machine learning inference to appreciate the motivation and challenges AFP addresses. Finally, focus on the core concept of AFP itself, prioritizing any direct talks by the paper authors or closely related research presentations to gain detailed insights into AFP's design and evaluation.

### floating point numerical formats lecture *(prerequisite)*
Understanding standard floating point formats, especially IEEE 754, is crucial to appreciate how AFP innovates beyond existing representations. This lecture covers binary floating point number representation, including mantissa, exponent, and sign bits, providing the necessary background for AFP's adaptive approach.

*How the paper uses it:* AFP builds on and improves standard floating point formats to achieve better memory and compute efficiency.

▶ [Representations of Floating Point Numbers](https://www.youtube.com/watch?v=yvdtwKF87Ts) — Neso Academy · 3 years ago

### block floating point representation seminar *(prerequisite)*
AFP extends the idea of block floating point (BFP) formats by introducing adaptive features to overcome BFP's precision limitations. This seminar provides a detailed understanding of block floating point representation, which is foundational to grasping AFP's shared exponent and private offset scheme.

*How the paper uses it:* AFP improves on block floating point formats by dynamically adjusting precision within blocks.

▶ [tinyML Talks: Low Precision Inference and Training for Deep ...](https://www.youtube.com/watch?v=dmQ2FqhXuEE) — EDGE AI FOUNDATION · 1:01:26

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Adaptive Floating Point (AFP) format introduced in the paper, start by learning the basics of floating point numerical formats, which are foundational to how computers represent real numbers. Next, explore block floating point representations, as AFP builds upon and improves these techniques. Then, gain context on low precision machine learning inference to appreciate why AFP's efficiency matters. Finally, study the core concept of adaptive numerical representation to grasp how AFP dynamically adjusts floating point values within blocks for improved precision and efficiency.

### floating point numerical formats lecture *(prerequisite)*
Floating point formats define how real numbers are represented in binary, balancing range and precision. Understanding IEEE 754 standard formats like FP32 and BFloat16 is essential to grasp the innovations AFP introduces.

*How the paper uses it:* AFP innovates on floating point formats by dynamically adjusting precision and range within blocks to improve ML inference efficiency.

▶ [Representations of Floating Point Numbers](https://www.youtube.com/watch?v=yvdtwKF87Ts) — Neso Academy · 3 years ago

### block floating point representation seminar *(prerequisite)*
Block floating point (BFP) formats share exponent information across a block of values, improving efficiency but sometimes losing precision for values far from the max exponent. AFP builds on and improves this concept.

*How the paper uses it:* AFP addresses limitations of traditional block floating point by introducing private offsets and shared fields for better precision and efficiency.

▶ [tinyML Talks: Low Precision Inference and Training for Deep ...](https://www.youtube.com/watch?v=dmQ2FqhXuEE) — EDGE AI FOUNDATION · 1:01:26


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the Adaptive Floating Point (AFP) format introduced in the paper. Starting from a basic simulation of AFP encoding and decoding on synthetic data, advancing to applying AFP quantization on a small CNN model with ImageNetV2 subset to compare accuracy and error metrics against BFloat16, and culminating in an extension exploring AFP's potential for training workloads by implementing stochastic rounding and evaluating dynamic range effects. Each project ties directly to a key contribution, result, or limitation of the paper and leverages the applicant's existing skills in Python, TensorFlow, and machine learning.

### Beginner — AFP Encoding and Decoding Simulation on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a Python script that simulates the core AFP encoding and decoding process on small synthetic floating point blocks. This includes implementing the shared exponent, private 3-bit offset, and 5-bit mantissa encoding scheme described in the paper, along with the Auto Focus feature to automatically determine offsets. You visualize the quantization error compared to FP32 values.

**Why it shows you understood the paper:** This project demonstrates you understand AFP's core numerical representation mechanism and how it dynamically adjusts precision within blocks, a key innovation of the paper.

**Grounded in:** AFP uses a 3-bit private offset to dynamically adjust precision within blocks. All offsets are computed automatically by AFP’s encoder and decoder hardware. We call this feature Auto Focus.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic floating point blocks generated in code to mimic typical ML tensor value distributions.

**Build it:**

1. Implement a function to generate synthetic FP32 floating point blocks with realistic value distributions.
2. Implement AFP encoding: compute shared maximum exponent, calculate private offsets, and quantize mantissa bits per value.
3. Implement AFP decoding to reconstruct approximate FP32 values from AFP representation.
4. Implement Auto Focus logic to automatically compute offsets per block.
5. Visualize original vs decoded values and plot quantization error statistics.
6. Write a README explaining AFP encoding and decoding steps with references to the paper.

**Ships as:** A Python repository with scripts to encode/decode AFP blocks on synthetic data, plots of quantization error, and a clear README explaining AFP mechanics.

**Stretch goal:** Add support for the optional zero field optimization and compare error with and without it.

### Intermediate — AFP Quantization of CNN Weights and Outputs on ImageNetV2 Subset
*Effort: 2 weekends, ~20 hours*

You implement AFP quantization as a TensorFlow preprocessing step applied to weights and activations of a small CNN model (e.g., ResNet18) trained on a subset of ImageNetV2. You compare AFP quantization against BFloat16 quantization in terms of memory usage, absolute and relative error metrics, and inference accuracy.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method and evaluate AFP's effectiveness on real ML models and data, reproducing key accuracy and error claims.

**Grounded in:** We perform comprehensive simulations of AFP on a wide range of robust CNN and Transformer models... For image classification, the test dataset of ImageNetV2 was used... AFP reduces absolute error by 23% (weights) and 46% (layer outputs) compared to BFP with the same memory.

**Tech stack:** Python 3.11, TensorFlow 2.x, NumPy, Matplotlib

**Data:** Subset of ImageNetV2 dataset for image classification as a substitute for the paper's evaluation dataset.

**Build it:**

1. Train or load a pretrained small CNN model (e.g., ResNet18) on ImageNetV2 subset.
2. Implement AFP quantization functions for weights and layer outputs following the paper's block size and bit allocation.
3. Implement BFloat16 quantization baseline for comparison.
4. Quantize model weights and activations using AFP and BFloat16 separately.
5. Run inference on the validation subset and record accuracy, absolute and relative error metrics.
6. Plot and compare memory usage, compute density estimates, and error reductions between AFP and BFloat16.
7. Document methodology, results, and comparison in a detailed README.

**Ships as:** A TensorFlow project repository demonstrating AFP quantization on CNN weights and activations, with comparative evaluation against BFloat16 and visualized error and accuracy metrics.

**Stretch goal:** Extend quantization to Transformer models like DistilBERT and compare AFP's effectiveness.

### Advanced — Extending AFP for Training: Implementing Stochastic Rounding and Dynamic Range Evaluation
*Effort: 3+ weeks*

You develop an extension of AFP to support training workloads by implementing stochastic rounding during backward passes and evaluating AFP's dynamic range impact on training stability. You simulate training a small CNN or Transformer model with AFP quantization and stochastic rounding, comparing training loss convergence and final accuracy to FP32 baselines.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep comprehension of AFP's challenges beyond inference and contributing novel experimental insights.

**Grounded in:** AFP has been evaluated primarily for inference; training may require more dynamic range and is ongoing work. Explore stochastic rounding methods for AFP during training.

**Tech stack:** Python 3.11, TensorFlow 2.x, NumPy, Matplotlib

**Data:** Standard ML datasets such as CIFAR-10 or a small subset of ImageNetV2 for training experiments.

**Build it:**

1. Implement stochastic rounding methods compatible with AFP quantization for gradient updates.
2. Modify AFP quantization to support dynamic range adjustments suitable for training.
3. Integrate AFP quantization and stochastic rounding into training loops of a small CNN or Transformer model.
4. Train models with AFP quantization and stochastic rounding; record training loss, accuracy, and convergence behavior.
5. Compare results to FP32 training baseline and analyze stability and accuracy trade-offs.
6. Document challenges, implementation details, and experimental results in a comprehensive report.

**Ships as:** A TensorFlow-based training framework with AFP quantization and stochastic rounding, experimental results comparing training dynamics and accuracy to FP32, and a detailed README discussing implications for AFP training support.

**Stretch goal:** Explore hardware-friendly approximations of stochastic rounding for AFP and simulate their impact on training.
