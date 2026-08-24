---
title: "450 · Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE — Feng-Hao Liu"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-feng-hao-liu"
source_hash: "33c3a3816387f60f6350a03705467e17244ceed7fd686aad11312d67c47d9eb3"
sequence: 450
generator: "outreach-garden: managed"
---

# 450 · Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE

## At a glance

- **Professor:** Feng-Hao Liu
- **Institution:** Washington State University
- **Paper:** [Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE](https://doi.org/10.56553/popets-2025-0172)
- **Authors:** Yu-Te Ku, Feng-Hao Liu, Chih-Fan Hsu, Ming-Ching Chang, Shih-Hao Hung, I-Ping Tu, Wei-Chao Chen
- **Year:** 2025

## Paper overview

This paper presents a novel approach to improve the efficiency and accuracy of encrypted deep neural network (DNN) inference using third-generation Fully Homomorphic Encryption (FHE) schemes, specifically FHEW and TFHE. The authors introduce a new computational architecture called FHE-Neuron that dynamically switches ciphertext precision to optimize performance. They also develop an FHE-aware quantization and fine-tuning framework to adapt pre-trained models for encrypted inference. Their method achieves significantly faster inference times and comparable accuracy to state-of-the-art fourth-generation FHE schemes, while using smaller ciphertext sizes and less memory.

### Why it matters

**Research problem:** How to efficiently perform encrypted deep neural network inference using third-generation FHE schemes (FHEW/TFHE) under weaker Ring-LWE assumptions, achieving comparable accuracy and computation time to highly optimized fourth-generation FHE schemes like CKKS, despite the smaller ciphertext sizes and limited message space of third-generation schemes.

**Why it matters:** Encrypted DNN inference protects data privacy and security by allowing computations on encrypted data without decryption. Third-generation FHE schemes offer advantages such as smaller ciphertext sizes and lower memory usage but suffer from high computational costs and limited message space, restricting their practical applicability for complex datasets and models. Improving their efficiency and accuracy would enable more practical privacy-preserving AI applications.

**Key contributions:**

- Design of FHE-Neuron architecture that optimizes encrypted neuron computations by precision switching, balancing efficiency and accuracy.
- Development of an FHE-aware quantization and fine-tuning framework that adapts pre-trained DNN models for encrypted inference under FHE constraints.
- Extensive experimental validation demonstrating significant improvements in inference latency and accuracy on MNIST, Fashion-MNIST, and CIFAR-10 datasets compared to previous third-generation FHE methods.
- Noise analysis and empirical estimation of approximation errors in FHE activation functions, guiding parameter selection and model adaptation.
- Demonstration that third-generation FHE schemes can achieve practical encrypted DNN inference performance comparable to fourth-generation schemes while using smaller ciphertexts and less memory.

## About the professor

**Feng-Hao Liu** — Associate Professor, Electrical Engineering and Computer Science, Washington State University.

Research interests: Lattice-based Cryptography, Fully Homomorphic Encryption (FHE), theory and applications to private ML and data analytics, Post-quantum cryptography for advanced crypto designs, including functional encryption, attribute-based encryption, advanced signatures, efficient ZK proofs, Multiparty computation, Leakage and tamper resilient cryptography

### Research links

- [Faculty/profile page](https://school.eecs.wsu.edu/faculty/profile/?nid=feng-hao.liu)
- [Professor website](https://school.eecs.wsu.edu/directory/wsu-profile/feng-hao.liu)
- [Resolved homepage](https://fenghaoliu.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Fully Homomorphic Encryption
**The paper assumes:** lattice-based cryptography, ring learning with errors (Ring-LWE), bootstrapping in homomorphic encryption, ciphertext encoding and noise management
**Already in this field?** Skip this entirely if you already have a solid understanding of fully homomorphic encryption schemes and their cryptographic foundations.

This background is designed to provide a solid understanding of Fully Homomorphic Encryption (FHE), especially third-generation schemes like FHEW and TFHE, which are central to the paper's contributions on encrypted neural network inference. The rigorous course option offers a deep, university-level treatment of cryptography including FHE, suitable for readers who want a thorough theoretical foundation. The fast track is a concise, focused playlist on FHE that covers practical and conceptual aspects quickly, ideal for readers who need a clear and efficient introduction without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Cryptography and Cryptanalysis (V. Vaikuntanathan and S. Goldwasser, MIT, 2018)](https://www.youtube.com/playlist?list=PLidiQIHRzpXKZJdI4jE1K7L6yIY0IHE1Z) — Theoretical Computer Science School (TCSS) · 23 videos · 30.4h across 23 episodes

**Watch only this:** Lectures 11 (Learning with Errors), 23 (Fully Homomorphic Encryption I), and 24 (Fully Homomorphic Encryption II), about 3 hours and 45 minutes total — these cover the core lattice-based assumptions and the FHE constructions relevant to the paper.

*Why it unblocks this paper:* This MIT course by V. Vaikuntanathan and S. Goldwasser includes detailed lectures on Fully Homomorphic Encryption (lectures 23 and 24) and foundational cryptographic concepts like Learning with Errors, which underpin third-generation FHE schemes used in the paper. It provides rigorous theoretical grounding necessary to fully understand the cryptographic assumptions and mechanisms behind FHEW/TFHE.

*If you want all of it:* 30.4 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Fully Homomorphic Encryption (FHE)](https://www.youtube.com/playlist?list=PLA7-FOnOsomBQDMEHk51oBaOkFgIq7wQv) — Nicolas Brunie · 12 videos · 11.4h across 12 episodes

**Watch only this:** Episodes 3 (Introduction to FHE), 4 (Part 1 Introduction to practical FHE and the TFHE scheme), and 5 (TFHE Deep Dive), about 3 hours total — these provide a concise yet thorough overview of FHE and the TFHE scheme used in the paper.

*Why it unblocks this paper:* This playlist by Nicolas Brunie offers a focused introduction to Fully Homomorphic Encryption, including practical schemes like TFHE, which is directly relevant to the paper's focus on third-generation FHE. It balances conceptual explanations with practical insights, making it ideal for quickly grasping the key ideas and challenges in FHE for encrypted neural network inference.

*If you want all of it:* 11.4 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on optimizing encrypted neural networks using FHEW/TFHE, start with foundational knowledge of Fully Homomorphic Encryption (FHE) and the specific third-generation schemes FHEW and TFHE, including their bootstrapping techniques. Then, build understanding of quantization and fine-tuning methods for neural networks under encryption constraints. Finally, focus on the core concept of encrypted neural network inference architectures, culminating with the authors' own talk or the closest related advanced seminar to grasp their novel FHE-Neuron design and optimization strategies.

### Fully Homomorphic Encryption schemes lecture *(prerequisite)*
This section covers the fundamental cryptographic principles of Fully Homomorphic Encryption, including its mathematical foundations and bootstrapping, which are essential to understanding how encrypted computations are performed securely and efficiently. The selected lectures by Shai Halevi and Zvika Brakerski provide rigorous, university-level insights into FHE schemes and their evolution.

*How the paper uses it:* Understanding FHE is essential to grasp how encrypted computation on neural networks is performed in the paper.

▶ [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — Simons Institute for the Theory of Computing · 53:41 · 11 years ago

### FHEW and TFHE schemes seminar *(prerequisite)*
This section focuses on the third-generation FHE schemes FHEW and TFHE, which are the cryptographic foundation of the paper's method. The talks by Ilaria Chillotti and related seminars provide detailed technical insights into these schemes, their bootstrapping methods, and practical implementations, enabling a deep understanding of the schemes the paper optimizes.

*How the paper uses it:* These third-generation FHE schemes are the cryptographic foundation of the paper’s method.

▶ [Introduction to Practical FHE and the TFHE Scheme](https://www.youtube.com/watch?v=28XlccZgiUM) — Simons Institute for the Theory of Computing · 1:13:38 · Streamed 6 years ago

### Bootstrapping in FHE lecture *(prerequisite)*
Bootstrapping is critical for noise management and enabling unlimited encrypted computations in FHE. This section includes advanced lectures by Craig Gentry and Shai Halevi that explain the bootstrapping process in depth, which is central to the paper's optimization of bootstrapping costs in encrypted neural network inference.

*How the paper uses it:* Bootstrapping is critical for noise management and enabling unlimited encrypted computations in FHE, a key challenge addressed in the paper.

▶ [14 Craig Gentry on a Simple Fully Homomorphic Encryption Scheme & Thoughts on Bootstrapping](https://www.youtube.com/watch?v=LgOI05gG46Y) — Workshop on Lattices with Symmetry · 1:21:56 · 12 years ago

### Quantization and fine-tuning for encrypted models lecture *(prerequisite)*
This section covers advanced neural network quantization and fine-tuning techniques necessary to adapt pre-trained models for encrypted inference under FHE constraints. The MIT HAN Lab lectures on quantization provide rigorous academic coverage of quantization methods relevant to the paper's FHE-aware quantization and fine-tuning framework.

*How the paper uses it:* Key technique to adapt pre-trained models for efficient encrypted inference under FHE constraints.

▶ [Lecture 05 - Quantization (Part I) | MIT 6.S965](https://www.youtube.com/watch?v=AlASZb93rrc) — MIT HAN Lab · 1:11:43 · 3 years ago

### Encrypted neural network inference architecture seminar
This section focuses on the design of neural network architectures optimized for encrypted inference, which is the core contribution of the paper. The selected advanced seminars and talks discuss neural network structures and cryptographic neural network computation, providing context for the FHE-Neuron architecture and its precision-switching approach.

*How the paper uses it:* Central concept of designing architectures like FHE-Neuron to optimize encrypted DNN computations.

▶ [Designing Neural Networks for Efficient Encrypted Inference ( Chinmay Hedge (NYU) )](https://www.youtube.com/watch?v=Jl3SvZakdBE) — Utah DataScience · 1:00:45 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand encrypted neural network inference using third-generation Fully Homomorphic Encryption (FHE) schemes, focusing on the paper's novel FHE-Neuron architecture and quantization techniques. We start with the basics of Fully Homomorphic Encryption to grasp how encrypted computation works, then explore the specific FHEW/TFHE schemes that underpin the paper's approach. Next, we cover quantization and fine-tuning methods essential for adapting neural networks to encrypted settings, followed by an introduction to bootstrapping for noise management in FHE. Finally, we examine encrypted neural network inference architectures to understand the paper's core contributions.

### Fully Homomorphic Encryption schemes lecture *(prerequisite)*
Fully Homomorphic Encryption (FHE) allows computations on encrypted data without decrypting it, preserving privacy during processing. Understanding FHE's principles, including how it manages noise and supports arbitrary computations, is essential to grasp how encrypted neural network inference is possible.

*How the paper uses it:* The paper builds on FHE to perform deep neural network inference on encrypted data securely.

▶ [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — Simons Institute for the Theory of Computing · 53:41 · 11 years ago

### FHEW and TFHE schemes seminar *(prerequisite)*
FHEW and TFHE are third-generation FHE schemes that offer smaller ciphertext sizes and lower memory usage but have challenges like limited message space and higher computational costs. Learning about these schemes helps understand the cryptographic foundation of the paper's method.

*How the paper uses it:* The paper specifically optimizes encrypted inference using FHEW/TFHE schemes.

▶ [Introduction to Practical FHE and the TFHE Scheme](https://www.youtube.com/watch?v=28XlccZgiUM) — Simons Institute for the Theory of Computing · 1:13:38 · Streamed 6 years ago

### Quantization and fine-tuning for encrypted models lecture
Quantization reduces the precision of neural network parameters to make models compatible with integer arithmetic, which is crucial for encrypted inference. Fine-tuning adjusts these quantized models to recover accuracy lost during quantization, enabling efficient and accurate encrypted neural network computations.

*How the paper uses it:* The paper develops an FHE-aware quantization and fine-tuning framework to adapt pre-trained models for encrypted inference.

▶ [Lecture 05 - Quantization (Part I) | MIT 6.S965](https://www.youtube.com/watch?v=AlASZb93rrc) — MIT HAN Lab · 1:11:43 · 3 years ago

### Bootstrapping in FHE lecture *(prerequisite)*
Bootstrapping is a technique in FHE that refreshes ciphertexts to reduce noise accumulation, allowing unlimited encrypted computations. Understanding bootstrapping is critical because it affects the efficiency and accuracy of encrypted neural network inference.

*How the paper uses it:* The paper optimizes bootstrapping in FHEW/TFHE to manage noise during nonlinear activation computations.

▶ [Faster Fully Homomorphic Encryption: Bootstrapping in less than 0.1 Seconds](https://www.youtube.com/watch?v=SltIFkGPXEg) — IACR · 35:44 · 9 years ago

### Encrypted neural network inference architecture seminar
This concept covers how neural networks are designed and adapted to operate on encrypted data, focusing on architectural choices that balance computational cost and accuracy. Understanding these architectures is key to appreciating the paper's FHE-Neuron design that dynamically switches ciphertext precision.

*How the paper uses it:* The paper's core contribution is the FHE-Neuron architecture that optimizes encrypted DNN inference.

▶ [Designing Neural Networks for Efficient Encrypted Inference ( Chinmay Hedge (NYU) )](https://www.youtube.com/watch?v=Jl3SvZakdBE) — Utah DataScience · 1:00:45 · 4 years ago

## Already in your library

- [Compressing Neural Networks for Embedded AI: Pruning, Projection, and Quantization](https://www.youtube.com/watch?v=7uV3-eTB5es) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the paper's core innovations in encrypted neural network inference using third-generation FHE schemes. The beginner project focuses on implementing a simplified FHE-aware quantization step to grasp the challenges of adapting models for encrypted inference. The intermediate project involves reimplementing the FHE-Neuron precision switching mechanism on a small dataset to reproduce key latency and accuracy metrics. The advanced project tackles one of the paper's main limitations by exploring SIMD-like parallelism strategies for third-generation FHE schemes, extending the architecture to improve throughput while preserving compact ciphertext sizes.

### Beginner — FHE-Aware Quantization of a Simple Neural Network
*Effort: a weekend, ~8 hours*

You build a Python script that takes a small pretrained neural network (e.g., a simple MLP on MNIST) and applies integer quantization with scaling factor estimation inspired by the paper's FHE-aware quantization framework. You implement basic noise-aware fine-tuning by simulating quantization noise and adjusting weights accordingly.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's approach to adapting floating-point models for encrypted inference under FHE constraints, specifically the quantization and scaling factor estimation to prevent overflow and control noise.

**Grounded in:** Development of an FHE-aware quantization and fine-tuning framework that adapts pre-trained DNN models for encrypted inference under FHE constraints.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** MNIST dataset, publicly available and used in the paper for validation.

**Build it:**

1. Load a pretrained small neural network on MNIST using PyTorch.
2. Implement integer quantization of weights and activations with scaling factor estimation to avoid overflow.
3. Simulate quantization noise and perform fine-tuning of weights to compensate for noise.
4. Evaluate the quantized model accuracy on MNIST and compare to the original floating-point model.
5. Document the quantization process, scaling factor choices, and accuracy results.

**Ships as:** A Jupyter notebook or Python script showing quantization and fine-tuning steps, with accuracy comparison and explanation of scaling factors.

**Stretch goal:** Add a simple noise model to simulate bootstrapping noise and analyze its effect on accuracy.

### Intermediate — Reimplementation of FHE-Neuron Precision Switching on MNIST
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the FHE-Neuron architecture that dynamically switches ciphertext precision between high precision for linear layers and low precision for nonlinear activations, applied to encrypted inference on MNIST. You measure inference latency and accuracy, comparing against a baseline fixed-precision encrypted inference.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of precision switching in encrypted neuron computations, reproducing key performance improvements and demonstrating understanding of the trade-offs between precision, noise, and computation cost.

**Grounded in:** Design of FHE-Neuron architecture that optimizes encrypted neuron computations by precision switching, balancing efficiency and accuracy.

**Tech stack:** Python 3.11, PyTorch, NumPy, Simulated FHE environment (custom or simplified)

**Data:** MNIST dataset, publicly available and used in the paper for validation.

**Build it:**

1. Implement a simulation of ciphertext precision levels representing high and low precision states.
2. Build a small neural network inference pipeline that switches precision dynamically between linear and nonlinear layers.
3. Simulate noise and computational cost differences between precision levels.
4. Run encrypted inference on MNIST and record latency and accuracy metrics.
5. Compare results to a baseline fixed-precision encrypted inference implementation.
6. Write a README explaining the precision switching mechanism and its impact.

**Ships as:** A Python project with scripts and documentation demonstrating precision switching and its effect on encrypted inference latency and accuracy on MNIST.

**Stretch goal:** Extend the implementation to Fashion-MNIST dataset and analyze performance differences.

### Advanced — Exploring SIMD Parallelism for Third-Generation FHE in Encrypted Neural Networks
*Effort: 3+ weeks*

You design and prototype an extension to the FHE-Neuron architecture that incorporates SIMD-like parallelism strategies to overcome the lack of native SIMD support in third-generation FHE schemes. You simulate or implement parallel encrypted inference on MNIST or Fashion-MNIST, measuring throughput improvements and analyzing trade-offs in ciphertext size and memory usage.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by attempting to integrate SIMD capabilities into third-generation FHE encrypted inference, demonstrating deep understanding of the architecture and cryptographic constraints.

**Grounded in:** The approach currently lacks SIMD (Single Instruction Multiple Data) support in third-generation FHE schemes, limiting parallelism compared to fourth-generation schemes. Future direction: Development of SIMD implementations for third-generation FHE schemes to further improve encrypted inference throughput.

**Tech stack:** Python 3.11, PyTorch, NumPy, C++ (optional for performance simulation), Jupyter Notebook

**Data:** MNIST or Fashion-MNIST dataset, publicly available and used in the paper for validation.

**Build it:**

1. Study the paper's description of third-generation FHE limitations and the FHE-Neuron architecture.
2. Design a conceptual SIMD parallelism approach compatible with FHEW/TFHE ciphertext constraints.
3. Implement a simulation or prototype of parallel encrypted inference using the SIMD approach.
4. Measure throughput, memory usage, and ciphertext size compared to baseline single-instance inference.
5. Analyze trade-offs and document findings with respect to the paper's goals.
6. Prepare a detailed README explaining the SIMD design, implementation challenges, and results.

**Ships as:** A codebase and report demonstrating a SIMD-inspired parallel encrypted inference prototype with analysis of performance and resource trade-offs.

**Stretch goal:** Attempt to extend the SIMD approach to CIFAR-10 encrypted inference and evaluate scalability.
