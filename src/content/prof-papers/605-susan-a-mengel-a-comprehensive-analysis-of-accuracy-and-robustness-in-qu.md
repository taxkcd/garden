---
title: "605 · A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks — Susan A. Mengel"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-susan-a-mengel"
source_hash: "de577fcebe5b56df385444f4619e87fcf6c969186f1316d464186b7a1d7eae19"
sequence: 605
generator: "outreach-garden: managed"
---

# 605 · A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks

## At a glance

- **Professor:** Susan A. Mengel
- **Institution:** Texas Tech University
- **Paper:** [A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks](https://arxiv.org/pdf/2604.26110)
- **Authors:** Ban Q. Tran, Duong M. Chu, Hai T.D. Pham, Viet Q. Nguyen, Quan A. Pham, Susan Mengel
- **Year:** 2026

## Paper overview

This paper evaluates three hybrid classical-quantum neural network architectures—Quantum Convolutional Neural Networks (QCNN), Quantum Recurrent Neural Networks (QRNN), and Quantum Vision Transformers (QViT)—to understand their accuracy, generalization, and robustness, especially under adversarial attacks and quantum noise. The study finds that these models perform well on simple datasets but degrade on complex ones, with varying resilience to noise and attacks.

### Why it matters

**Research problem:** The practical performance, generalization ability, and robustness of quantum neural networks (QNNs), especially hybrid classical-quantum architectures, remain insufficiently understood, particularly on complex, high-dimensional datasets and under adversarial or quantum noise conditions.

**Why it matters:** Quantum machine learning promises advantages over classical methods, but without thorough evaluation of QNNs' accuracy and robustness, especially in realistic noisy environments, their practical utility and deployment on near-term quantum hardware (NISQ) remain uncertain.

**Key contributions:**

- Comprehensive empirical performance analysis of three VQC-based hybrid classical-quantum neural networks (QCNN, QRNN, QViT).
- Evaluation of accuracy, generalization error, and robustness using classical metrics (accuracy, loss, Lipschitz bound) and quantum metrics (average fidelity).
- Benchmarking on both low-feature (MNIST) and high-feature (CIFAR-10) datasets to assess scalability and learning efficacy.
- Detailed robustness assessment against adversarial attacks (FGSM, PGD, APGD, MIM) and quantum noise types (measurement noise, channel noise including Bit-flip, Phase-flip, Amplitude-damping, Depolarizing).
- Insights into model-specific strengths and weaknesses, including QViT's superior generalization but vulnerability to attacks, and QRNN's robustness.

## About the professor

**Susan A. Mengel** — Associate Professor and Undergraduate Program Coordinator, CS, Texas Tech University.

Research interests: Information retrieval, security, and assurance; Computer science education

### Research links

- [Faculty/profile page](https://www.depts.ttu.edu/cs/faculty/susan_a._mengel)
- [Resolved homepage](https://www.depts.ttu.edu/cs/faculty/susan_a._mengel/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum machine learning
**The paper assumes:** quantum computing fundamentals, variational quantum circuits, quantum data encoding, quantum noise models, and quantum machine learning principles
**Already in this field?** Skip this entirely if you already have a solid understanding of quantum computing basics and quantum machine learning concepts.

To understand the hybrid classical-quantum neural network architectures and their robustness under quantum noise and adversarial attacks discussed in the paper, a solid grasp of quantum computing fundamentals, variational quantum algorithms, and quantum noise models is essential. The rigorous course option offers a comprehensive university-level introduction to quantum computing and variational quantum algorithms, while the fast track provides a concise, intuition-focused overview of quantum computing concepts relevant to optimization and quantum algorithms. Choose the course for depth and completeness, or the fast track for a quick conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Quantum Computing NPTEL IITM-IBM](https://www.youtube.com/playlist?list=PLuBwWyD3M82x9PfxeF7oxb0E122mQAWh6) — sukanya srinivasan · 26 videos · 12.3h across 26 episodes

**Watch only this:** Watch lectures mod01lec04 to mod01lec09 (Quantum Computing Basics, Postulates of Quantum Mechanics, Quantum Measurements, Quantum Gates and Circuits) plus mod04lec19 to mod04lec21 (NISQ-era quantum algorithms, Variational Quantum Algorithms, Variational Quantum Eigensolver), about 5.5 hours total — this subset covers the essential quantum computing background and variational algorithms relevant to the paper.

*Why it unblocks this paper:* This NPTEL IITM-IBM course covers foundational quantum computing concepts, quantum gates, measurements, and importantly variational quantum algorithms and NISQ-era quantum algorithms, which directly relate to the hybrid classical-quantum neural network architectures (QCNN, QRNN, QViT) and their noise resilience studied in the paper.

*If you want all of it:* 12.3 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Computing Explained: From Optimization to QAOA](https://www.youtube.com/playlist?list=PLzRvZZJWWHvdj9TrEIawpG4xBFXEUas69) — NextGen Computing · 10 videos · 1.1h across 10 episodes

**Watch only this:** Watch episodes 1 through 5 (The Impossibly Hard Choice, The Architecture of a Choice, QAOA: A Beginner's Guide, QAOA's Secret: The Mixer, Quantum's Smart Compass), about 30 minutes total — these episodes give a focused introduction to quantum computing and variational algorithms relevant to the paper's architectures.

*Why it unblocks this paper:* This short series by NextGen Computing provides a clear, visual, and intuition-first explanation of quantum computing concepts and quantum optimization algorithms like QAOA, which are closely related to variational quantum circuits and hybrid quantum-classical models discussed in the paper.

*If you want all of it:* 1.1 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on accuracy and robustness in quantum neural networks, start with foundational knowledge on Variational Quantum Circuits and Quantum Noise Models, as these underpin the architectures and noise considerations studied. Next, grasp the importance of Adversarial Attacks on Neural Networks to appreciate robustness evaluations. Finally, focus on the core concept of Hybrid Classical-Quantum Neural Networks, including the authors' own talk or closely related expert talks, to connect theory with the empirical analyses presented in the paper.

### Variational Quantum Circuits *(prerequisite)*
Variational Quantum Circuits (VQCs) form the backbone of the hybrid classical-quantum neural network architectures analyzed in the paper. Understanding their structure, training challenges such as barren plateaus, and algorithmic frameworks is essential to appreciate how QCNN, QRNN, and QViT models operate and are optimized.

*How the paper uses it:* The paper evaluates three VQC-based hybrid classical-quantum neural networks, making VQC knowledge foundational.

▶ [QML School. Day 3. Introduction to Variational algorithms. Igor Sokolov](https://www.youtube.com/watch?v=dMTcVFjRWO0) — Kyiv Academic University · 1:42:40 · 3 years ago

### Quantum Noise Models *(prerequisite)*
Quantum noise and decoherence critically affect the performance and robustness of quantum neural networks, especially on near-term noisy quantum devices. A rigorous understanding of noise channels, Lindblad dynamics, and noise impact on quantum states is necessary to interpret the paper's robustness assessments under various noise types.

*How the paper uses it:* The paper benchmarks QNN robustness against multiple quantum noise channels, requiring comprehension of quantum noise models.

▶ [Theory of quantum noise and decoherence, Lecture 1](https://www.youtube.com/watch?v=mKpURUtQgZ4) — Tobias Osborne · 1:23:35 · 10 years ago

### Adversarial Attacks on Neural Networks *(prerequisite)*
Adversarial attacks are a major focus of the paper's robustness evaluation. Understanding the nature of adversarial perturbations, attack methodologies like APGD, and defense strategies in classical neural networks provides the necessary background to appreciate the quantum-specific adversarial robustness results.

*How the paper uses it:* The paper evaluates QNN robustness against adversarial attacks including APGD, FGSM, and PGD.

▶ [Recent Progress in Adversarial Robustness of AI Models: Attacks, Defenses, and Certification](https://www.youtube.com/watch?v=RYpmTldTkcw) — IBM Research · 59:43 · 7 years ago

### Hybrid Classical-Quantum Neural Networks
This core concept combines classical and quantum layers in the neural network architectures studied. Understanding the design, training, and application of hybrid quantum-classical models is crucial to grasp the paper's comparative analysis of QCNN, QRNN, and QViT architectures in terms of accuracy, generalization, and robustness.

*How the paper uses it:* The paper's main contribution is the empirical analysis of three hybrid classical-quantum neural network architectures.

▶ [Ensuring Robustness in Hybrid Quantum Neural Networks | Karthikeyan Rajamani | Conf42 SRE 2025](https://www.youtube.com/watch?v=GsR69tPgC20) — Conf42 · 15:00 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of quantum noise and adversarial attacks, as these are critical to grasping the robustness challenges faced by quantum neural networks (QNNs). Then, learn about variational quantum circuits, the foundational framework behind the hybrid classical-quantum architectures studied in the paper. Finally, explore hybrid classical-quantum neural networks themselves to see how classical and quantum components combine in the models analyzed.

### Quantum Noise Models *(prerequisite)*
Quantum noise models describe how quantum information is disturbed by the environment, which is crucial for understanding the limitations and robustness of quantum neural networks. Learning about different noise types like bit-flip, phase-flip, and amplitude damping helps explain how these affect QNN performance.

*How the paper uses it:* The paper evaluates QNN robustness under various quantum noise channels, making noise models essential to understand their impact.

▶ [Noise in quantum computing (ep4)](https://www.youtube.com/watch?v=AUAkoEiutOE) — Q-CTRL · 4:27 · 6 years ago

### Adversarial Attacks on Neural Networks *(prerequisite)*
Adversarial attacks involve subtle input perturbations designed to fool neural networks, testing their robustness. Understanding common attack methods and their effects on classical networks provides intuition for evaluating similar threats in quantum neural networks.

*How the paper uses it:* The paper benchmarks QNN robustness against adversarial attacks like APGD, FGSM, and PGD, highlighting their vulnerability and resilience.

▶ [Adversarial Attacks on AI Explained | AiSecurityDIR](https://www.youtube.com/watch?v=5mCQOZBagGo) — AiSecurityDIR · 6:05 · 9 months ago

### Variational Quantum Circuits *(prerequisite)*
Variational quantum circuits are parameterized quantum circuits optimized to perform tasks like classification. They form the core computational framework for hybrid quantum-classical neural networks, enabling quantum layers to learn from data.

*How the paper uses it:* The studied QNN architectures in the paper are based on variational quantum circuits, making this concept foundational.

▶ [Variational Quantum Algorithms Explained (VQE & Parameterized Circuits)](https://www.youtube.com/watch?v=gZNO1tbMQLw) — CodeLucky · 4:57 · 7 months ago

### Hybrid Classical-Quantum Neural Networks
Hybrid classical-quantum neural networks combine classical neural network layers with quantum circuits to leverage quantum advantages while maintaining classical processing strengths. Understanding this hybrid approach clarifies how the paper's models operate and are evaluated.

*How the paper uses it:* The paper analyzes three hybrid classical-quantum architectures—QCNN, QRNN, and QViT—making this concept central to the study.

▶ [Hybrid Quantum-Classical Computing Explained - The Future of AI & Science](https://www.youtube.com/watch?v=Vk__RaHK9pA) — CodeLucky · 5:59 · 7 months ago

### Paper authors talk
Hearing directly from researchers provides insights into the specific challenges, methods, and findings of the paper, complementing foundational knowledge with detailed context.

*How the paper uses it:* Though no direct talk from the authors is available, a related talk on robustness in hybrid quantum neural networks offers relevant perspectives.

▶ [Ensuring Robustness in Hybrid Quantum Neural Networks | Karthikeyan Rajamani | Conf42 SRE 2025](https://www.youtube.com/watch?v=GsR69tPgC20) — Conf42 · 15:00 · 1 year ago

## Already in your library

- [Quantum neural networks](https://www.youtube.com/watch?v=lkmehsypdag) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Quantum Neural Networks explained in 3Blue1Brown style animation | Episode 1, Introduction](https://www.youtube.com/watch?v=xL383DseSpE) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [QML School. Day 4. Introduction to Quantum Neural Networks Workshop by Weixi Zhang](https://www.youtube.com/watch?v=3YxCCpacjk0) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Jun Zhuang)
- [What Is the Variational Quantum Eigensolver? | VQE Explained](https://www.youtube.com/watch?v=DUq-0r-Prw0) — also for: CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms (Lei Jiang)
- [To learn and cancel quantum noise... ▸  Zlatko Minev (IBM)](https://www.youtube.com/watch?v=zxxlAbGfVtg) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Introduction to Quantum Noise - Part 1 | Qiskit Global Summer School 2023](https://www.youtube.com/watch?v=3Ka11boCm1M) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Attacks On Deep Neural Networks](https://www.youtube.com/watch?v=oGOTLa7lDHU) — also for: Context-Aware Image Denoising with Auto-Threshold Canny Edge Detection to Suppress Adversarial Perturbation (Wu-chi Feng)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's evaluation of hybrid classical-quantum neural networks (QCNN, QRNN, QViT) on accuracy, robustness, and noise resilience. The beginner project reproduces a simple accuracy comparison on MNIST using classical simulation and existing ML tools familiar to the applicant. The intermediate project involves reimplementing a core quantum neural network architecture and evaluating its adversarial robustness on MNIST, introducing quantum noise simulation. The advanced project extends the paper by exploring multi-class classification and noise effects on a more complex dataset, addressing a stated limitation and requiring deeper quantum ML knowledge and experimentation.

### Beginner — Simulate and Compare QNN Accuracy on MNIST
*Effort: a weekend, ~8 hours*

You build a classical simulation of a simple variational quantum circuit (VQC)-based hybrid model inspired by QCNN or QRNN architectures and train it on the MNIST binary classification task. You measure and compare accuracy and loss metrics to reproduce the paper's reported high accuracy on low-feature datasets.

**Why it shows you understood the paper:** This project shows you grasp the basic hybrid classical-quantum model setup, the importance of dataset complexity, and how accuracy metrics reflect model performance as reported in the paper.

**Grounded in:** All models achieve high accuracy on low-feature MNIST dataset (QViT 99.5%, QCNN 97.3%, QRNN 96.7%)

**Tech stack:** Python 3.11, PyTorch, PennyLane or Qiskit for quantum circuit simulation, Jupyter Notebook

**Data:** MNIST dataset from torchvision.datasets, used as a substitute for the paper's MNIST binary classification setup

**Build it:**

1. Set up a Python environment with PyTorch and PennyLane or Qiskit installed
2. Implement a simple variational quantum circuit representing QCNN or QRNN layers with parameterized gates
3. Build a hybrid classical-quantum model combining the VQC with a classical classifier layer
4. Train the model on a binary classification subset of MNIST (e.g., digits 0 vs 1)
5. Evaluate accuracy and loss on a test split and compare results to paper benchmarks
6. Document the model architecture, training procedure, and results in a README

**Ships as:** A GitHub repo with code to simulate and train a hybrid QNN on MNIST binary classification, showing accuracy and loss metrics comparable to the paper's results

**Stretch goal:** Add simple adversarial attacks (e.g., FGSM) to test robustness on MNIST

### Intermediate — Reimplement QRNN with Quantum Noise and Adversarial Robustness on MNIST
*Effort: 2 weekends, ~20 hours*

You reimplement the Quantum Recurrent Neural Network (QRNN) architecture described in the paper and train it on MNIST binary classification. You simulate quantum noise channels (e.g., Bit-flip, Phase-flip) during training and evaluate robustness against adversarial attacks such as APGD, reproducing the paper's robustness analysis.

**Why it shows you understood the paper:** This project demonstrates your ability to implement a core QNN architecture, incorporate quantum noise models, and apply adversarial attack methods, directly reflecting the paper's key contributions on robustness and noise resilience.

**Grounded in:** QRNN slightly outperforms QCNN on high-feature data; QRNN and QCNN exhibit strong resilience to adversarial attacks; APGD is the most effective adversarial attack method against QNNs; QRNN shows degradation across all noise types

**Tech stack:** Python 3.11, PyTorch, PennyLane or Qiskit, Adversarial Robustness Toolbox (ART) or custom adversarial attack code, Jupyter Notebook

**Data:** MNIST dataset from torchvision.datasets, used as a substitute for the paper's MNIST binary classification setup

**Build it:**

1. Implement the QRNN variational quantum circuit architecture based on the paper's description
2. Integrate quantum noise channel simulations (Bit-flip, Phase-flip, Depolarizing) into the quantum circuit during training
3. Train the QRNN model on MNIST binary classification with noise simulation enabled
4. Implement adversarial attacks, focusing on APGD, to generate adversarial examples against the trained model
5. Evaluate and report model accuracy and robustness metrics under noise and adversarial conditions
6. Write a detailed README explaining the architecture, noise models, attack methods, and results

**Ships as:** A GitHub repo with code implementing QRNN training under quantum noise and adversarial attacks, with evaluation metrics and analysis matching the paper's robustness findings

**Stretch goal:** Extend the implementation to multi-class MNIST classification and compare robustness trends

### Advanced — Multi-class QViT Classification and Noise Management on CIFAR-10
*Effort: 3+ weeks*

You extend the paper's work by implementing a Quantum Vision Transformer (QViT) hybrid model for multi-class classification on the CIFAR-10 dataset. You investigate quantum noise effects on this complex dataset, develop noise management or regularization techniques tailored for QNNs, and evaluate accuracy, generalization, and robustness under adversarial attacks and noise.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by addressing multi-class classification and noise management on a high-feature dataset, demonstrating deep comprehension and research-level initiative in quantum ML.

**Grounded in:** Study multi-class classification and noise management techniques tailored for QNNs; QViT achieves highest accuracy on CIFAR-10 but is prone to overfitting and requires many parameters; QViT is least affected by quantum noise; develop noise management and regularization techniques tailored for QNNs

**Tech stack:** Python 3.11, PyTorch, PennyLane or Qiskit, Advanced quantum noise simulation libraries, Adversarial Robustness Toolbox (ART), Jupyter Notebook

**Data:** CIFAR-10 dataset from torchvision.datasets, used as a substitute for the paper's CIFAR-10 experiments

**Build it:**

1. Implement the Quantum Vision Transformer (QViT) hybrid architecture based on the paper's description
2. Adapt the model for multi-class classification on CIFAR-10 dataset
3. Simulate various quantum noise channels during training and inference
4. Develop and integrate noise management or regularization techniques (e.g., noise-aware training, dropout variants)
5. Apply adversarial attacks (APGD and others) to evaluate robustness
6. Analyze accuracy, generalization error, and robustness metrics; compare with baseline classical Vision Transformer if possible
7. Document methodology, experiments, and findings comprehensively in the README

**Ships as:** A GitHub repo with a multi-class QViT implementation on CIFAR-10, including noise management techniques and robustness evaluation, demonstrating an extension of the paper's limitations and future directions

**Stretch goal:** Experiment with alternative quantum embedding methods beyond angle and amplitude encoding to assess impact on performance and robustness

_The paper authors released no code; all projects require reimplementation from the paper's descriptions and use publicly available datasets (MNIST, CIFAR-10) as substitutes._
