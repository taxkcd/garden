---
title: "393 · ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design — Cauligi S. Raghavendra"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-cauligi-s-raghavendra"
source_hash: "efae5e44bcd46fa45e64fcdfd36b1ed66dca9b3930e4d8c630da7e3bbbcff7eb"
sequence: 393
generator: "outreach-garden: managed"
---

# 393 · ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design

## At a glance

- **Professor:** Cauligi S. Raghavendra
- **Institution:** University of Southern California
- **Paper:** [ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design](https://arxiv.org/abs/2603.03598)
- **Authors:** Sachini Wickramasinghe, Tian Ye, Cauligi Raghavendra, Viktor Prasanna
- **Year:** 2026

## Paper overview

This paper presents ARMOR, a framework that improves the deployment of convolutional neural networks (CNNs) for automatic target recognition (ATR) in synthetic aperture radar (SAR) imagery. It addresses the challenges of adversarial robustness and hardware efficiency by co-designing the CNN models and FPGA hardware accelerators. The framework uses adversarial training, hardware-guided structured pruning, and parameterized FPGA accelerator designs to produce smaller, faster, and energy-efficient models that maintain robustness against adversarial attacks.

### Why it matters

**Research problem:** CNN-based SAR ATR models are vulnerable to adversarial perturbations and are computationally expensive, making deployment on resource-constrained platforms like small satellites challenging. Existing model compression and FPGA acceleration methods often ignore adversarial robustness, leading to models that are either not robust or not efficient enough for practical use.

**Why it matters:** SAR ATR is critical in defense and remote sensing applications requiring reliable and real-time decisions. Adversarial attacks can cause misclassification with potentially severe consequences in safety-critical scenarios. Efficient inference on hardware with limited resources is essential for on-board processing and data center deployments, motivating the need for robust and efficient CNN models tailored to hardware constraints.

**Key contributions:**

- A unified model-hardware co-design framework for adversarially robust and hardware-efficient CNN-based SAR ATR on FPGA.
- A robustness-aware hardware-guided structured pruning algorithm that balances robustness preservation and hardware cost reduction.
- Design of parameterized FPGA accelerator architectures with channel-aware processing element allocation supporting different resource budgets.
- An automated design generation flow that maps pruned and quantized models to optimized FPGA implementations.
- Demonstration of models up to 18.3× smaller with 3.1× fewer MACs while maintaining robustness, and FPGA implementations achieving up to 68.1× lower latency and 169.7× better energy efficiency compared to CPU baselines.

## About the professor

**Cauligi S. Raghavendra** — Professor of Electrical and Computer Engineering and Computer Science, Ming Hsieh Department of Electrical Engineering-Systems, University of Southern California.

Research interests: parallel and distributed computing, computer networks, energy efficient protocols for wireless and sensor networks, and active networks

### Research links

- [Faculty/profile page](https://stevens-computing-ai.usc.edu/directory/faculty/profile?fname=Cauligi&lname=Raghavendra)
- [Identity evidence](http://ceng.usc.edu/~raghu)
- [Professor website](http://ceng.usc.edu/~raghu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Robustness in Deep Learning
**The paper assumes:** adversarial attacks, adversarial training, robustness evaluation in deep learning
**Already in this field?** Skip this entirely if you already understand the fundamentals of adversarial machine learning and robustness techniques in neural networks.

To understand the adversarial robustness concepts critical to the ARMOR paper, such as adversarial attacks, adversarial training, and robustness-aware pruning, this background provides two viewing options. The rigorous course offers a deep, structured university-level lecture on adversarial robustness within a broader deep learning context, while the fast track is a concise, focused explainer series that covers adversarial examples and defenses efficiently. Choose the course for comprehensive mastery or the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X) — Stanford Online · 9 videos · 13.9h across 9 episodes

**Watch only this:** Lecture 4: Adversarial Robustness and Generative Models (~92 minutes) — this single lecture focuses specifically on adversarial robustness concepts needed to understand the paper's core defense mechanisms.

*Why it unblocks this paper:* Stanford CS230 Autumn 2025 includes a dedicated lecture on adversarial robustness and generative models, directly covering adversarial training and robustness evaluation relevant to the paper's defense techniques.

*If you want all of it:* All 9 lectures, about 13.9 hours — for broader deep learning context beyond adversarial robustness.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Robustness | Applied Deep Learning](https://www.youtube.com/playlist?list=PLoEMreTa9CNnBnw17OkCP70ASwmHQqvQt) — Maziar Raissi · 18 videos · 3.5h across 18 episodes

**Watch only this:** Episodes 1-5 (Adversarial Examples | Lecture 21 (Part 2), Adversarial Examples (Continued) | Lecture 22 (Part 1), Adversarial Examples (Q&A), Fast Gradient Sign Method | Lecture 22 (Part 2), Fast Gradient Sign Method (Q&A)) totaling about 55 minutes — covers fundamental adversarial attacks and training methods relevant to the paper.

*Why it unblocks this paper:* The 'Robustness | Applied Deep Learning' playlist offers a concise, well-structured series of short videos focused on adversarial examples, attacks, and defenses, providing an accessible yet thorough introduction to adversarial robustness.

*If you want all of it:* All 18 episodes, about 3.5 hours — for a comprehensive but still concise coverage of adversarial robustness topics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ARMOR paper, start by building foundational knowledge on adversarial training and structured pruning, as these are critical for the paper's robustness and model compression techniques. Next, explore FPGA accelerator design and hardware performance modeling to grasp the hardware efficiency aspects. Finally, focus on the core concept of model-hardware co-design for CNNs and the authors' own related talks to connect all elements into the unified ARMOR framework.

### Adversarial training for robustness *(prerequisite)*
Adversarial training is the fundamental technique used to improve CNN robustness against adversarial perturbations, which is a key challenge addressed by the ARMOR framework. Understanding the theory and practical methods of adversarial robustness will provide insight into how the paper preserves model accuracy under attacks.

*How the paper uses it:* ARMOR integrates adversarial training to ensure CNN robustness against adversarial attacks in SAR ATR.

▶ [On the Adversarial Robustness of Deep Learning](https://www.youtube.com/watch?v=YgYiECAr9Gs) — Microsoft Research · 39:50

### Structured pruning of neural networks *(prerequisite)*
Structured pruning reduces model size and computation by removing entire channels or filters, which is essential for hardware efficiency and maintaining robustness. This concept underpins the hardware-guided pruning algorithm proposed in the paper.

*How the paper uses it:* The paper proposes a robustness-aware hardware-guided structured pruning algorithm to balance robustness and hardware cost.

▶ [Structured Pruning Learns Compact and Accurate Models](https://www.youtube.com/watch?v=G07ft-IiL6o) — Princeton NLP · 4 years ago

### FPGA accelerator design for CNN inference *(prerequisite)*
Understanding FPGA accelerator design is crucial to appreciate how the pruned and quantized CNN models are efficiently mapped to hardware. This knowledge covers the architectural choices and design trade-offs that enable the latency and energy improvements reported in the paper.

*How the paper uses it:* ARMOR designs parameterized FPGA accelerator architectures tailored for pruned CNN models in SAR ATR.

▶ [FPGA Based Fault-Tolerant Fused and Branched CNN Accelerator With Reconfigurable Capabilities](https://www.youtube.com/watch?v=Y9PRG8IZ9f4) — The Bitstream · 1 year ago

### Hardware performance modeling for pruning *(prerequisite)*
Hardware performance modeling guides pruning decisions by predicting latency and resource usage, enabling a balanced trade-off between robustness and hardware efficiency. This modeling is a core innovation in the ARMOR framework's pruning stage.

*How the paper uses it:* The pruning algorithm uses a hardware performance model derived from FPGA design to guide channel removal decisions.

▶ [Compressing Neural Networks for Embedded AI: Pruning, Projection, and Quantization](https://www.youtube.com/watch?v=7uV3-eTB5es) — MATLAB · 20:42 · 1 year ago

### Model-hardware co-design for CNNs
Model-hardware co-design integrates CNN model optimization with hardware accelerator design to achieve robust and efficient inference. This concept is central to ARMOR's approach, combining adversarial training, pruning, and FPGA design into a unified framework.

*How the paper uses it:* ARMOR is a unified model-hardware co-design framework for adversarially robust and hardware-efficient CNN-based SAR ATR on FPGA.

▶ [Design for Highly Flexible and Energy-Efficient Deep Neural ...](https://www.youtube.com/watch?v=brhOo-_7NS4) — MIT EEMS Group - PI: Vivienne Sze · 1:09:09

### ARMOR paper talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed insights into the ARMOR framework, its motivations, methodology, and results. Although no exact talk on ARMOR was found, related talks on CNN-based SAR classification provide relevant context.

*How the paper uses it:* Direct presentations by the authors would offer the most specific insights into ARMOR's contributions and design choices.

▶ [A Convolutional Neural Network Based Approach for SAR Image Classification of Vehicles](https://www.youtube.com/watch?v=4gkgzk1Skq4) — IJERT · 15:23 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding the ARMOR paper, starting with adversarial training to grasp robustness in CNNs, then structured pruning to learn model compression techniques, followed by FPGA accelerator design to appreciate hardware implementation, hardware performance modeling to understand pruning decisions guided by hardware constraints, and culminating with model-hardware co-design which integrates all these aspects for efficient and robust SAR ATR deployment.

### Adversarial training for robustness *(prerequisite)*
Adversarial training is a technique to make neural networks more robust against maliciously crafted inputs that try to fool the model. It involves training the model with adversarial examples to improve its ability to resist attacks. Understanding this concept is crucial to appreciate how ARMOR maintains robustness while compressing models.

*How the paper uses it:* ARMOR uses adversarial training as a foundation to ensure CNN models remain robust against adversarial perturbations in SAR ATR.

▶ [Getting Robust: Securing Neural Networks against Adversarial ...](https://www.youtube.com/watch?v=Eka4uRYGL3A) — The University of Melbourne · 49:20

### Structured pruning of neural networks *(prerequisite)*
Structured pruning removes entire channels or filters from CNNs to reduce model size and computation while maintaining accuracy. This differs from unstructured pruning by preserving hardware-friendly model structures. Learning this helps understand how ARMOR achieves smaller, efficient models without losing robustness.

*How the paper uses it:* ARMOR applies a hardware-guided structured pruning algorithm that balances robustness preservation and hardware cost reduction.

▶ [Structured Pruning Learns Compact and Accurate Models](https://www.youtube.com/watch?v=G07ft-IiL6o) — Princeton NLP · 4 years ago

### FPGA accelerator design for CNN inference *(prerequisite)*
FPGA accelerators are specialized hardware designed to efficiently run CNN inference by exploiting parallelism and custom dataflows. Understanding FPGA design principles clarifies how ARMOR achieves significant latency and energy efficiency improvements over CPUs and GPUs.

*How the paper uses it:* ARMOR designs parameterized FPGA accelerator architectures tailored to the pruned CNN models for efficient SAR ATR inference.

▶ [Hardware accelerator for training convolutional neural network | FYP 16 batch](https://www.youtube.com/watch?v=opHLiTjKW08) — Department of Electronic and Telecommunication Engineering, University of Moratuwa · 4 years ago

### Hardware performance modeling for pruning *(prerequisite)*
Hardware performance modeling predicts latency and resource usage of CNNs on hardware, guiding pruning decisions to meet efficiency targets. This concept explains how ARMOR balances robustness and hardware constraints during model compression.

*How the paper uses it:* ARMOR integrates an analytical hardware performance model to guide pruning based on latency, MACs, and resource usage predictions.

▶ [Compressing Neural Networks for Embedded AI: Pruning, Projection, and Quantization](https://www.youtube.com/watch?v=7uV3-eTB5es) — MATLAB · 20:42 · 1 year ago

### Model-hardware co-design for CNNs
Model-hardware co-design jointly optimizes neural network architectures and hardware accelerators to maximize efficiency and performance. This approach is key to ARMOR’s success in producing robust, compact CNNs mapped efficiently onto FPGA hardware.

*How the paper uses it:* ARMOR’s core contribution is a unified model-hardware co-design framework that integrates adversarial training, pruning, and FPGA accelerator design for robust and efficient SAR ATR.

▶ [Design for Highly Flexible and Energy-Efficient Deep Neural ...](https://www.youtube.com/watch?v=brhOo-_7NS4) — MIT EEMS Group - PI: Vivienne Sze · 1:09:09

## Already in your library

- [Lecture 15 | Efficient Methods and Hardware for Deep Learning](https://www.youtube.com/watch?v=eZdOkDtYMoo) — also for: YFlows: Systematic Dataflow Exploration and Code Generation for Efficient Neural Network Inference using SIMD Architectures on CPUs (Yanjing Li)
- [ACACES 2024: Hardware/software co-optimization for ...](https://www.youtube.com/watch?v=m01aZO-t31Y) — also for: JSPIM: A Skew-Aware PIM Accelerator for High-Performance Databases Join and Select Operations (Sandhya Dwarkadas)
- [Adversarial Robustness](https://www.youtube.com/watch?v=wIX00bZ173k) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the ARMOR paper's core ideas on adversarially robust and hardware-efficient CNNs for SAR ATR. The beginner project focuses on reproducing a key pruning robustness metric using familiar ML tools. The intermediate project implements the paper's hardware-guided structured pruning with adversarial training on a public SAR dataset substitute, showing model compression and robustness trade-offs. The advanced project extends the framework to transformer-based models, addressing a stated limitation and exploring robustness-aware pruning beyond CNNs.

### Beginner — Robustness-Aware Pruning Metric Visualization
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements first-order Taylor saliency pruning on a pretrained CNN for SAR image classification, then visualize how pruning affects adversarial robustness compared to random pruning. This reproduces the paper's finding that first-order Taylor saliency better preserves robustness during pruning.

**Why it shows you understood the paper:** This project shows you understand the pruning metric choice and its impact on robustness preservation, a key contribution of the paper. A professor would see you grasp the importance of saliency-guided pruning in adversarially robust model compression.

**Grounded in:** First-order Taylor saliency outperforms other saliency metrics for pruning robustness-aware models.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use a small subset of the MSTAR dataset or a publicly available SAR image classification dataset as a substitute to simulate pruning effects.

**Build it:**

1. Load a pretrained CNN model for SAR image classification (can be a simple CNN trained on a small SAR dataset).
2. Implement first-order Taylor saliency computation for each channel in convolutional layers.
3. Implement a pruning function that removes channels based on saliency scores and a random baseline.
4. Evaluate model accuracy and adversarial robustness (e.g., using PGD attack) before and after pruning.
5. Visualize and compare robustness preservation between saliency-based and random pruning.

**Ships as:** A Jupyter notebook with code, plots comparing pruning methods, and a README explaining the pruning metric's role in robustness preservation.

**Stretch goal:** Add a comparison with other saliency metrics like gradient magnitude or activation-based saliency.

### Intermediate — Hardware-Guided Structured Pruning with Adversarial Training
*Effort: 2 weekends, ~20 hours*

You implement the core ARMOR pruning algorithm integrating adversarial training and hardware performance modeling to prune a CNN for SAR ATR. Using a public SAR dataset substitute, you prune channels guided by a simple latency/resource model, retrain adversarially, and report model size, MACs, and robustness trade-offs compared to a baseline unpruned model.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's unified pruning approach combining robustness and hardware efficiency, a central contribution. A professor would see you understand model-hardware co-design and robustness-aware pruning in practice.

**Grounded in:** A robustness-aware hardware-guided structured pruning algorithm that balances robustness preservation and hardware cost reduction.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use the MSTAR dataset or a publicly available SAR image classification dataset as a substitute for training and evaluation.

**Build it:**

1. Train or load a baseline CNN model for SAR image classification.
2. Implement adversarial training using PGD attacks during model training.
3. Develop a simple hardware performance model estimating latency and resource usage based on channel counts.
4. Implement structured pruning that removes channels guided by the hardware model and saliency metrics.
5. Iteratively prune and retrain the model adversarially to maintain robustness.
6. Evaluate and compare model size, MACs, latency estimates, and adversarial robustness against the baseline.

**Ships as:** A GitHub repository with code to run pruning experiments, plots showing trade-offs between robustness and hardware efficiency, and a detailed README.

**Stretch goal:** Incorporate quantization-aware adversarial training to improve robustness under quantization.

### Advanced — Extending Robustness-Aware Pruning to Transformer Models for SAR ATR
*Effort: 3+ weeks*

You extend the ARMOR co-design framework by adapting robustness-aware pruning techniques to a transformer-based model for SAR ATR, addressing the paper's limitation of focusing only on CNNs. You implement gradient-based saliency adapted for transformer channels/heads, perform adversarial training, and evaluate robustness and efficiency trade-offs.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation, showing deep comprehension of the paper and ability to innovate beyond it. A professor would recognize your capability to translate model-hardware co-design principles to emerging architectures.

**Grounded in:** The framework currently focuses on CNN architectures and does not directly address emerging models like transformers. Future direction: Extending robustness-aware pruning techniques to other deep learning models such as transformers.

**Tech stack:** Python 3.11, PyTorch, Transformers library (HuggingFace), Jupyter Notebook, NumPy, Matplotlib

**Data:** Use a publicly available SAR image classification dataset or simulate SAR-like data for training and evaluation.

**Build it:**

1. Select or implement a transformer-based model suitable for SAR image classification.
2. Adapt gradient-based saliency metrics to transformer components (e.g., attention heads or feed-forward channels).
3. Implement adversarial training (e.g., PGD) for the transformer model.
4. Develop a pruning algorithm guided by the adapted saliency and a simple hardware performance model.
5. Prune and retrain the transformer model adversarially to preserve robustness.
6. Evaluate model size, inference latency estimates, and adversarial robustness compared to unpruned baseline.

**Ships as:** A comprehensive GitHub repository with code, experiments, and a README documenting the extension of robustness-aware pruning to transformers and its impact on SAR ATR.

**Stretch goal:** Explore quantization-aware adversarial training for the transformer model to further improve robustness under hardware constraints.
