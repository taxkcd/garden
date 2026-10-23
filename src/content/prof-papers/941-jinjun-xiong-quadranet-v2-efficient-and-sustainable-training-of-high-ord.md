---
title: "941 · QuadraNet V2: Efficient and Sustainable Training of High-Order Neural Networks with Quadratic Adaptation — Jinjun Xiong"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jinjun-xiong"
source_hash: "f84a6328804897c26bdd1b017a35fb8e2c045e48d4e2c87189d3025023423c04"
sequence: 941
generator: "outreach-garden: managed"
---

# 941 · QuadraNet V2: Efficient and Sustainable Training of High-Order Neural Networks with Quadratic Adaptation

## At a glance

- **Professor:** Jinjun Xiong
- **Institution:** University at Buffalo
- **Paper:** [QuadraNet V2: Efficient and Sustainable Training of High-Order Neural Networks with Quadratic Adaptation](https://arxiv.org/pdf/2405.03192)
- **Authors:** Chenhui Xu, Xinyao Wang, Fuxun Yu, Jinjun Xiong, Xiang Chen
- **Year:** 2024

## Paper overview

This paper introduces QuadraNet V2, a new framework that efficiently trains high-order neural networks by adapting existing pre-trained linear models with quadratic neurons. This approach significantly reduces training time and computational costs while improving model performance, especially in handling nonlinear data shifts.

### Why it matters

**Research problem:** Training large-scale, high-order deep neural networks is computationally expensive and unsustainable, especially since existing pre-trained linear models cannot be effectively reused due to architectural differences and nonlinear data distribution shifts.

**Why it matters:** Large-scale pre-training of deep neural networks requires massive GPU hours and financial costs, limiting practical applications and raising sustainability concerns. Efficient reuse of pre-trained models can save resources and accelerate development of more powerful models.

**Key contributions:**

- Proposed QuadraNet V2, a sustainable training framework that efficiently utilizes legacy pre-trained weights for high-order neural networks.
- Introduced neural-level quadratic adaptation to capture nonlinear distribution shifts beyond linear adaptation methods like LoRA.
- Designed efficient quadratic neurons with low-rank and atrous decomposition to reduce computational overhead.
- Developed a staged training methodology that freezes the linear term and trains the quadratic adapter, enabling efficient adaptation.
- Demonstrated integration with existing convolutional architectures (e.g., ConvNeXt) and acceleration via a specialized computational library (QuadraLib).

## About the professor

**Jinjun Xiong** — Empire Innovation Professor, Department of Computer Science & Engineering, University at Buffalo.

Research interests: Innovative AI applications, in particular on education and sustainability; Novel AI algorithms, in particular on computer vision and natural language processing; Productivity tooling for AI development, in particular on software engineering, compilers, and operating systems; AI accelerators and computer architectures for edge computing and hybrid clouds, such as GPUs, and FPGAs.

### Research links

- [Faculty/profile page](https://cse.buffalo.edu/~jinjun)
- [Professor website](https://www.xlab-ub.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** high-order neural networks
**The paper assumes:** high-order neural networks, quadratic neurons, nonlinear model adaptation, low-rank matrix decomposition in neural networks
**Already in this field?** Skip this entirely if you already understand the theory and implementation of high-order neural networks and quadratic neuron architectures.

To understand the core methodology of QuadraNet V2, which builds on high-order neural networks using quadratic neurons, it is essential to grasp how these networks extend linear models and how adaptation techniques like low-rank and atrous decompositions improve efficiency. The rigorous course option offers a deep, structured university-level foundation on deep learning and neural networks, while the fast track provides a concise, focused introduction to convolutional neural networks relevant to the paper's architecture and adaptation techniques. Choose the rigorous lane for comprehensive understanding or the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CSci 560 Deep Learning and Neural Networks](https://www.youtube.com/playlist?list=PLKELFBqOW0CcTt05vYzec_y_p7fnV7rW9) — Derek Harter · 46 videos · 18.9h across 46 episodes

**Watch only this:** L01: What is Deep Learning; L02.1: A First Look at a Neural Network; L02.3: The Gears of Neural Networks: Tensor Operations; L02.4.1: The Engine of NN: derivatives and tensor gradients; L02.4.3: The Engine of NN: backpropagation and automatic differentiation; L07.4: Writing your own Training and Evaluation Loops — about 3 hours 30 minutes total

*Why it unblocks this paper:* This university course on Deep Learning and Neural Networks covers foundational concepts including neural network operations, tensor computations, backpropagation, and model training, which are critical to understanding the quadratic neuron adaptations and staged training methodology in QuadraNet V2.

*If you want all of it:* 18.9 hours across 46 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convolutional Neural Network (NPTEL)](https://www.youtube.com/playlist?list=PLcb5orJZN8yXdYp_iRAxhd7b3D51AXZCi) — Mukesh Kannan · 39 videos · 8.0h across 39 episodes

**Watch only this:** Deep Learning(CS7015): Lec 11.1 The convolution operation; Lec 11.3 Convolutional Neural Networks; Lec 11.4 CNNs (success stories on ImageNet); Lec 11.5 Image Classification continued (GoogLeNet and ResNet) — about 50 minutes total

*Why it unblocks this paper:* This concise playlist on Convolutional Neural Networks provides a focused introduction to CNN operations, filter design, and visualization techniques, which align well with the paper's use of convolutional architectures and efficient quadratic neuron designs.

*If you want all of it:* 8.0 hours across 39 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand QuadraNet V2, start with foundational concepts including efficient neural network training, transfer learning with pretrained models, low-rank matrix decomposition, and high-order neural networks. These prerequisites build the necessary background on sustainability in training, reuse of pretrained weights, computational optimization techniques, and the model class QuadraNet V2 innovates upon. Finally, focus on the core concept of quadratic neuron adaptation and the authors' own talk to grasp the novel quadratic adaptation framework and its practical impact.

### Efficient neural network training *(prerequisite)*
This section covers the principles and challenges of training neural networks efficiently, focusing on reducing computational cost and improving sustainability. Understanding these concepts contextualizes the motivation behind QuadraNet V2's design to drastically cut GPU hours while maintaining accuracy.

*How the paper uses it:* QuadraNet V2 aims to reduce training time and computational costs, addressing sustainability concerns in large-scale neural network training.

▶ [EfficientML.ai Lecture 1 - Introduction (MIT 6.5940, Fall 2023)](https://www.youtube.com/watch?v=rCFvPEQTxKI) — MIT HAN Lab · 1:17:05 · 3y ago

### Transfer learning with pretrained models *(prerequisite)*
This section explains how pretrained linear models can be reused and adapted for new tasks, a key background for understanding how QuadraNet V2 leverages existing weights. It covers feature extraction, fine-tuning, and the challenges of adapting pretrained models efficiently.

*How the paper uses it:* QuadraNet V2 efficiently utilizes legacy pretrained linear weights as initialization for quadratic neurons to enable sustainable training.

▶ [Salman Khan - Transfer Learning: Leveraging Pretrained Models with Limited Data | PyData London 25](https://www.youtube.com/watch?v=rNXb-rMJgCY) — PyData · 13:08 · 1y ago

### Low-rank matrix decomposition *(prerequisite)*
Low-rank matrix decomposition techniques reduce computational overhead by approximating large matrices with lower-rank factors. This mathematical tool is critical for the low-rank and atrous design of quadratic adapters in QuadraNet V2 to maintain efficiency.

*How the paper uses it:* QuadraNet V2 employs low-rank decomposition to sparsify quadratic adapters and minimize parameters and computations.

▶ [7. Eckart-Young: The Closest Rank k Matrix to A](https://www.youtube.com/watch?v=Y4f7K9XF04k) — MIT OpenCourseWare · 47:16 · 7y ago

### High-order neural networks *(prerequisite)*
High-order neural networks extend traditional linear models by capturing complex interactions, which is the model class QuadraNet V2 enhances. Understanding the challenges and optimization methods for these networks provides insight into the significance of the quadratic adaptation approach.

*How the paper uses it:* QuadraNet V2 transforms linear DNNs into quadratic ones to model nonlinear distribution shifts more effectively.

▶ [2nd-order Optimization for Neural Network Training](https://www.youtube.com/watch?v=qAVZd6dHxPA) — Microsoft Research · 1:27:22 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand QuadraNet V2, start by building foundational knowledge on transfer learning with pretrained models and efficient neural network training to grasp why reusing models efficiently matters. Then learn about low-rank matrix decomposition, a key technique for reducing computational cost in the paper's quadratic adapters. Next, explore high-order neural networks to understand the model class QuadraNet V2 improves upon. Finally, focus on quadratic neurons adaptation, the core method enabling nonlinear adaptation beyond linear models in QuadraNet V2.

### Transfer learning with pretrained models *(prerequisite)*
Transfer learning involves reusing a model pretrained on a large dataset to solve a new but related task, saving training time and data. Understanding how pretrained linear weights can be adapted efficiently is essential for grasping QuadraNet V2's approach to leveraging legacy models.

*How the paper uses it:* QuadraNet V2 adapts pretrained linear models with quadratic neurons to efficiently handle nonlinear shifts.

▶ [Transfer learning - explained (VGG16, MobileNet, ResNet, EfficientNet)](https://www.youtube.com/watch?v=YaBX-eNdYGw) — TileStats · 38:26 · 1y ago

### Efficient neural network training *(prerequisite)*
Efficient training techniques aim to reduce computational resources and time required to train neural networks, which is critical for sustainability and scalability. This context helps appreciate QuadraNet V2's goal of drastically cutting GPU hours while maintaining or improving accuracy.

*How the paper uses it:* QuadraNet V2 significantly reduces GPU training time compared to training from scratch or full fine-tuning.

▶ [EfficientML.ai Lecture 1 - Introduction (MIT 6.5940, Fall 2023)](https://www.youtube.com/watch?v=rCFvPEQTxKI) — MIT HAN Lab · 1:17:05 · 3y ago

### Low-rank matrix decomposition *(prerequisite)*
Low-rank matrix decomposition approximates a large matrix by one with lower rank to reduce parameters and computation, a common technique in model compression and efficient adaptation. This technique underpins the paper's design of quadratic adapters with low-rank and atrous decomposition to optimize efficiency.

*How the paper uses it:* QuadraNet V2 uses low-rank decomposition to sparsify quadratic adapters and minimize computational overhead.

▶ [7. Eckart-Young: The Closest Rank k Matrix to A](https://www.youtube.com/watch?v=Y4f7K9XF04k) — MIT OpenCourseWare · 47:16 · 7y ago

### High-order neural networks
High-order neural networks extend traditional linear neurons by modeling interactions beyond simple weighted sums, enabling richer representations of complex data. Understanding this helps contextualize the class of models QuadraNet V2 enhances through quadratic adaptation.

*How the paper uses it:* QuadraNet V2 transforms linear DNNs into quadratic ones by localizing high-order interactions at the neuron level.

▶ [2nd-order Optimization for Neural Network Training](https://www.youtube.com/watch?v=qAVZd6dHxPA) — Microsoft Research · 1:27:22 · 10y ago

## Already in your library

- [Lecture 6 | Training Neural Networks I](https://www.youtube.com/watch?v=wEoyxE0GP2M) — also for: SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning (Xiaoxuan Yang)
- [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [SVD Visualized, Singular Value Decomposition explained | SEE Matrix , Chapter 3 #SoME2](https://www.youtube.com/watch?v=vSczTbgc8Rc) — also for: QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models (Sai Qian Zhang)
- [What is Low-Rank Adaptation (LoRA) | explained by the inventor](https://www.youtube.com/watch?v=DhRoTONcyZE) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [Lec 18. Transfer Learning: Models](https://www.youtube.com/watch?v=tNfuZ9Imt3M) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [What is Transfer Learning? Transfer Learning in Keras | Fine Tuning Vs Feature Extraction](https://www.youtube.com/watch?v=WWcgHjuKVqA) — also for: Comparative Analysis of Transformers to Support Fine-Grained Emotion Detection in Short-Text Data (David C. Wilson)
- [Lecture 10 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=MfIjxPh6Pys) — also for: Knowledge-augmented Deep Learning and Its Applications: A Survey (Zijun Cui)
- [Lec 02. How to Train a Neural Net](https://www.youtube.com/watch?v=vidCX_dMCu0) — also for: PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models (Ping Liu)
- [Backpropagation, intuitively | Deep Learning Chapter 3](https://www.youtube.com/watch?v=Ilg3gGewQ5U) — also for: Neural Control Variates with Automatic Integration (Gordon Wetzstein)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the core ideas of QuadraNet V2. The beginner project introduces the concept of quadratic adaptation by implementing a simple quadratic neuron layer to adapt a pretrained linear model on a small vision dataset. The intermediate project reimplements the core quadratic adapter method from the paper on ImageNet-1K, comparing it against a linear adapter baseline to reproduce key metrics. The advanced project extends the paper by exploring selective placement of quadratic adapters to reduce computational overhead, addressing a stated limitation and experimenting with trade-offs on a downstream vision task.

### Beginner — Quadratic Neuron Adaptation on CIFAR-10
*Effort: a weekend, ~8 hours*

You build a simple PyTorch module that implements a quadratic neuron layer combining a frozen pretrained linear weight term and a trainable quadratic term. You adapt a small pretrained linear CNN on CIFAR-10 by freezing the linear weights and training only the quadratic term to improve accuracy on nonlinear data shifts simulated by simple image transformations.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of QuadraNet V2's quadratic adaptation and staged training process by reproducing the idea on a small scale with real pretrained weights and nonlinear adaptation.

**Grounded in:** Proposed QuadraNet V2, a sustainable training framework that efficiently utilizes legacy pre-trained weights for high-order neural networks; Developed a staged training methodology that freezes the linear term and trains the quadratic adapter, enabling efficient adaptation.

**Tech stack:** Python 3.11, PyTorch, Torchvision

**Data:** CIFAR-10 dataset from Torchvision, used as a substitute for small-scale vision data to simulate nonlinear shifts.

**Build it:**

1. Load a pretrained linear CNN model on CIFAR-10 from Torchvision.
2. Implement a quadratic neuron layer that adds a quadratic term to the frozen linear weights.
3. Replace the last linear layer with the quadratic neuron layer.
4. Freeze the linear weights and train only the quadratic term on CIFAR-10 with simple nonlinear augmentations (e.g., color jitter, rotation).
5. Evaluate and compare accuracy before and after quadratic adaptation.

**Ships as:** A GitHub repo with code implementing quadratic neurons, training scripts, and README explaining the staged training and adaptation results on CIFAR-10.

**Stretch goal:** Add low-rank decomposition to the quadratic term to reduce parameters and compare training speed and accuracy.

### Intermediate — Reimplementing QuadraNet V2 Quadratic Adapter on ImageNet-1K
*Effort: 2 weekends, ~20 hours*

You reimplement the core quadratic adapter method described in the paper to adapt a pretrained ConvNeXt linear model on ImageNet-1K. You implement the quadratic neuron with low-rank and atrous decomposition, freeze the linear term, and train the quadratic adapter. You compare performance and GPU training time against a linear adapter baseline such as LoRA.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's main method and results on a large-scale dataset, demonstrating comprehension of the quadratic adaptation mechanism, efficiency optimizations, and staged training.

**Grounded in:** Introduced neural-level quadratic adaptation to capture nonlinear distribution shifts beyond linear adaptation methods like LoRA; Designed efficient quadratic neurons with low-rank and atrous decomposition to reduce computational overhead; Demonstrated integration with existing convolutional architectures (e.g., ConvNeXt).

**Tech stack:** Python 3.11, PyTorch, Torchvision, CUDA-enabled GPU

**Data:** ImageNet-1K dataset, publicly available, used as the paper's main benchmark for training and evaluation.

**Build it:**

1. Obtain a pretrained ConvNeXt linear model checkpoint on ImageNet-1K.
2. Implement the quadratic neuron layer with low-rank and atrous decomposition as described in the paper.
3. Replace selected layers in ConvNeXt with quadratic neurons, freezing the linear weights.
4. Train only the quadratic adapter on ImageNet-1K training set.
5. Implement a linear adapter baseline (e.g., LoRA) for comparison.
6. Evaluate Top-1 accuracy and GPU training time for both methods and compare results.

**Ships as:** A GitHub repo with code for quadratic adapter implementation, training scripts on ImageNet-1K, comparison plots of accuracy and training time versus linear adapter baseline, and detailed README.

**Stretch goal:** Integrate a simple selective placement heuristic to add quadratic adapters only to certain layers and measure computational savings.

### Advanced — Selective Quadratic Adapter Placement for Efficient Adaptation
*Effort: 3+ weeks*

You extend QuadraNet V2 by implementing and evaluating selective placement strategies for quadratic adapters to reduce computational overhead. You design heuristics or learnable criteria to add quadratic adapters only to a subset of neurons or layers in a pretrained ConvNeXt model. You evaluate the trade-offs between accuracy, training time, and resource usage on ImageNet-1K and a downstream task such as MS COCO object detection.

**Why it shows you understood the paper:** This project tackles a key limitation stated in the paper and explores a future direction, demonstrating deep understanding of the method's computational challenges and practical deployment considerations.

**Grounded in:** Limitations: Indiscriminate addition of quadratic adapters to all neurons can cause computational overhead, requiring careful selective placement; Future directions: Further optimization of quadratic adapter placement to balance expressiveness and computational cost.

**Tech stack:** Python 3.11, PyTorch, Torchvision, Detectron2 or similar for object detection, CUDA-enabled GPU

**Data:** ImageNet-1K for classification; MS COCO dataset for downstream object detection task, both publicly available.

**Build it:**

1. Implement a mechanism to selectively add quadratic adapters to chosen layers or neurons based on heuristics (e.g., layer sensitivity, magnitude of gradients).
2. Modify the ConvNeXt model to support selective quadratic adapter placement.
3. Train the selectively adapted model on ImageNet-1K, freezing linear weights and training only quadratic adapters.
4. Evaluate accuracy and GPU training time compared to full quadratic adapter placement.
5. Fine-tune the selectively adapted model on MS COCO object detection with frozen primary weights and trained quadratic adapters.
6. Analyze trade-offs between computational cost and performance gains.

**Ships as:** A GitHub repo with code for selective quadratic adapter placement, training and evaluation scripts on ImageNet-1K and MS COCO, performance and resource usage analysis, and a comprehensive README documenting methodology and findings.

**Stretch goal:** Explore automated learning-based adapter placement using reinforcement learning or gradient-based pruning.
