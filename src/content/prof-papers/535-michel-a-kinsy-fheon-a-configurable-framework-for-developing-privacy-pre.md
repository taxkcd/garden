---
title: "535 · FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks — Michel A. Kinsy"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michel-a-kinsy"
source_hash: "15be77c5ac6f53100e214611fc36e765ffb8a36df0353582b950311263a9bb17"
sequence: 535
generator: "outreach-garden: managed"
---

# 535 · FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks

## At a glance

- **Professor:** Michel A. Kinsy
- **Institution:** Arizona State University
- **Paper:** [FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks](https://doi.org/10.56553/popets-2026-0133)
- **Authors:** Nges Brian Njungle, Eric Jahns, Michel A. Kinsy
- **Year:** 2026

## Paper overview

This paper presents FHEON, an open-source framework that enables the development of privacy-preserving neural network models using homomorphic encryption (HE). FHEON supports configurable and optimized neural network layers compatible with encrypted data processing, allowing secure inference on encrypted inputs without decrypting them. The framework achieves high accuracy with practical latency and memory usage on consumer-grade hardware, making privacy-preserving machine learning more accessible and efficient.

### Why it matters

**Research problem:** Machine Learning as a Service (MLaaS) raises privacy and security concerns because sensitive data must be shared with untrusted cloud providers or model owners. Homomorphic Encryption (HE) can protect data privacy by enabling computations on encrypted data, but existing HE-based neural network implementations are limited to specific architectures, have high computational and memory costs, and lack a general, reusable framework for diverse models.

**Why it matters:** Protecting data privacy in MLaaS is critical due to trust issues and regulatory requirements like HIPAA and GDPR. Efficient HE-based neural network inference would allow secure use of sensitive data in cloud-based machine learning without exposing raw data, enabling broader adoption of privacy-preserving AI applications.

**Key contributions:**

- Design and development of FHEON, an open-source framework with optimized, parameterized HE-friendly CNN layers supporting diverse architectures.
- Novel SIMD-aware padding algorithm enabling arbitrary padding with low rotation-key complexity.
- Two HE-friendly striding algorithms with trade-offs between noise budget and runtime/memory overhead, including a multi-channel striding pipeline.
- Specialized convolution layer optimized for common 3x3 kernel, stride=1, padding=1 configurations using dynamic masking to avoid explicit padding.
- Helper functions for HE cryptographic context abstraction and flexible model weight import pipelines.

## About the professor

**Michel A. Kinsy** — Associate Professor and Director of STAM Center, School of Computing and Augmented Intelligence, Arizona State University.

Research interests: His research interests lie in the area of hardware security, with a particular emphasis on (1) secure architectures and trusted execution environments, (2) design of hardware security primitives and root-of-trust techniques, (3) quantum-proof crypto-systems design, (4) self-aware polymorphous architectures, (5) secure distributed and zero-trust computing systems, and (6) compute acceleration engine architectures.

### Research links

- [Faculty/profile page](https://isearch.asu.edu/profile/472846)
- [Professor website](https://stamcenter.asu.edu/)
- [Lab website](https://stamcenter.asu.edu/semisec-lab/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Homomorphic Encryption
**The paper assumes:** homomorphic encryption schemes, CKKS encryption scheme, ciphertext operations, noise management in encryption, cryptographic evaluation keys
**Already in this field?** Skip this entirely if you already understand homomorphic encryption principles and the CKKS scheme.

This background focuses on homomorphic encryption (HE), the cryptographic technique enabling computations on encrypted data without decryption, which is central to the FHEON framework's privacy-preserving neural network inference. The rigorous course option provides a deep, structured university-level introduction to cryptography including HE foundations, suitable for readers seeking comprehensive understanding. The fast track offers a concise, approachable series of visual explainers on homomorphic encryption concepts, ideal for readers needing a quick but solid grasp of the core ideas and terminology.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Cryptography and Cryptanalysis (V. Vaikuntanathan and S. Goldwasser, MIT, 2018)](https://www.youtube.com/playlist?list=PLidiQIHRzpXKZJdI4jE1K7L6yIY0IHE1Z) — Theoretical Computer Science School (TCSS) · 23 videos · 30.4h across 23 episodes

**Watch only this:** Episodes 1-3 (Introduction, One-Time Pad, One-Way Functions, Number Theory), plus Episodes 11, 23, and 24 (Learning with Errors, Fully Homomorphic Encryption I & II) — about 7.5 hours total. This subset covers the cryptographic foundations and the core HE concepts needed to understand FHEON's design.

*Why it unblocks this paper:* This MIT course by Vaikuntanathan and Goldwasser covers foundational cryptography topics culminating in fully homomorphic encryption, providing rigorous theoretical and practical insights directly relevant to understanding the CKKS scheme and HE computations used in FHEON.

*If you want all of it:* Approximately 30.4 hours across all 23 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Fully Homomorphic Encryption (FHE)](https://www.youtube.com/playlist?list=PLA7-FOnOsomBQDMEHk51oBaOkFgIq7wQv) — Nicolas Brunie · 12 videos · 11.4h across 12 episodes

**Watch only this:** Episodes 2 (Introduction to CKKS), 3 (Introduction to FHE), and 8 (Homomorphic Encryption with BFV, BGV and CKKS using SEAL and C++/.NET) — about 3 hours total. These cover the approximate HE scheme and practical implementation details relevant to FHEON.

*Why it unblocks this paper:* This playlist offers focused, clear explanations on fully homomorphic encryption and the CKKS scheme, including practical aspects and recent advances, matching the paper's use of CKKS and HE-friendly neural network computations.

*If you want all of it:* Approximately 11.4 hours across all 12 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FHEON framework and its contributions, start with foundational knowledge of the CKKS homomorphic encryption scheme, which underpins the encrypted computations in FHEON. Next, build context on privacy-preserving machine learning to appreciate the motivation and challenges addressed by the framework. Then, study encrypted convolutional neural networks to grasp the application domain of FHEON's configurable HE-friendly CNN layers. Finally, focus on the core concept of FHEON itself, selecting the best available talk that provides direct insight into the framework and its novel contributions.

### CKKS homomorphic encryption scheme *(prerequisite)*
The CKKS scheme is a foundational approximate homomorphic encryption method enabling arithmetic on encrypted data, crucial for implementing encrypted neural network inference efficiently. Understanding CKKS provides insight into how FHEON performs encrypted computations with practical noise and precision management.

*How the paper uses it:* FHEON uses the CKKS scheme as the underlying encryption method for enabling privacy-preserving encrypted neural network inference.

▶ [The CKKS (a.k.a. HEAAN) FHE Scheme](https://www.youtube.com/watch?v=LNbGeaWKzpI) — Simons Institute for the Theory of Computing · 1:01:50 · Streamed 6 years ago

### Privacy-preserving machine learning *(prerequisite)*
This area covers the motivations, threat models, and existing techniques for securing machine learning workflows, especially inference on sensitive data. It sets the stage for why frameworks like FHEON are necessary and what challenges they address in real-world MLaaS scenarios.

*How the paper uses it:* FHEON addresses privacy concerns in MLaaS by enabling encrypted inference, protecting sensitive client data from untrusted servers.

▶ [Panel: Privacy preserving machine learning](https://www.youtube.com/watch?v=ZYPaf3L_ZoI) — Microsoft Research · 31:40 · 4 years ago

### Encrypted convolutional neural networks *(prerequisite)*
Understanding CNN architectures and how convolution, pooling, and activation layers function is essential before exploring their encrypted counterparts. This knowledge helps appreciate the technical challenges and innovations FHEON introduces for HE-friendly CNN layers.

*How the paper uses it:* FHEON provides configurable and optimized HE-friendly CNN layers, making encrypted CNN inference practical on consumer hardware.

▶ [CS231n Winter 2016: Lecture 7: Convolutional Neural Networks](https://www.youtube.com/watch?v=LxfUGhug-iQ) — Andrej Karpathy · 1:19:01 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of privacy-preserving machine learning to grasp why protecting data during ML inference matters. Then learn about the CKKS homomorphic encryption scheme, which enables approximate computations on encrypted data and underpins FHEON. Next, build intuition on convolutional neural networks (CNNs), the core model type FHEON supports. Finally, explore homomorphic encryption applied specifically to neural networks to see how encrypted inference is achieved in practice, culminating in an understanding of the FHEON framework itself.

### Privacy-preserving machine learning *(prerequisite)*
This concept explains why and how machine learning models can be designed to protect sensitive data privacy during training and inference. It covers threats to data confidentiality and introduces techniques like encryption and federated learning to mitigate these risks.

*How the paper uses it:* FHEON addresses privacy concerns in MLaaS by enabling encrypted neural network inference without exposing raw data.

▶ [Panel: Privacy preserving machine learning](https://www.youtube.com/watch?v=ZYPaf3L_ZoI) — Microsoft Research · 31:40 · 4 years ago

### CKKS homomorphic encryption scheme *(prerequisite)*
CKKS is a homomorphic encryption scheme that allows approximate arithmetic operations on encrypted data, enabling computations like neural network inference without decrypting inputs. Understanding CKKS is key to grasping how FHEON performs encrypted computations efficiently.

*How the paper uses it:* FHEON uses the CKKS scheme as the cryptographic foundation for encrypted neural network computations.

▶ [The CKKS (a.k.a. HEAAN) FHE Scheme](https://www.youtube.com/watch?v=LNbGeaWKzpI) — Simons Institute for the Theory of Computing · 1:01:50 · Streamed 6 years ago

### Encrypted convolutional neural networks *(prerequisite)*
Convolutional neural networks (CNNs) are widely used for image and signal processing tasks. Learning how CNNs work, including convolution, stride, padding, and pooling, is essential before understanding how these operations can be adapted to work on encrypted data.

*How the paper uses it:* FHEON provides configurable HE-friendly CNN layers optimized for encrypted inference.

▶ [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — Binod Suman Academy · 21:32 · 6 years ago

### Homomorphic encryption neural networks
This concept focuses on how homomorphic encryption enables neural network inference directly on encrypted data, preserving privacy without sacrificing accuracy. It covers challenges and solutions in implementing encrypted neural networks.

*How the paper uses it:* FHEON is a framework that implements homomorphic encryption-based neural network inference with practical latency and memory usage.

▶ [ONNXCommunityMeetup2023: HE-MAN – Homomorphically Encrypted MAchine learning with oNnx models](https://www.youtube.com/watch?v=W1Mah5QImdo) — ONNX · 11:21 · 3y ago

## Already in your library

- [Fully Homomorphic Encryption I](https://www.youtube.com/watch?v=xlcb_G1_rzk) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Prof. Nigel Smart | Fully Homomorphic Encryption](https://www.youtube.com/watch?v=gWcjwXJWMKM) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Designing Neural Networks for Efficient Encrypted Inference ( Chinmay Hedge (NYU) )](https://www.youtube.com/watch?v=Jl3SvZakdBE) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Introduction to CKKS (Approximate Homomorphic Encryption)](https://www.youtube.com/watch?v=iQlgeL64vfo) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)
- [Fully Homomorphic Encryption II](https://www.youtube.com/watch?v=iER9RkD05Oc) — also for: From Lattices to Tensor Cores: Accelerating Private Information Retrieval (David J. Wu)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Introduction to Practical FHE and the TFHE Scheme](https://www.youtube.com/watch?v=28XlccZgiUM) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Naoise Holohan - Diffprivlib: Privacy-preserving machine ...](https://www.youtube.com/watch?v=LWneaO94esk) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Privacy Preserving AI (Andrew Trask) | MIT Deep Learning Series](https://www.youtube.com/watch?v=4zrU54VIK6k) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [AWS re:Invent 2020: Privacy-preserving machine learning](https://www.youtube.com/watch?v=ZQkB9XRqdnc) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [MIT 6.S191 (2025): Convolutional Neural Networks](https://www.youtube.com/watch?v=oGpzWAlP5p0) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)](https://www.youtube.com/watch?v=HGwBXDKFk9I) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the FHEON framework and its contributions to privacy-preserving encrypted neural network inference. The beginner project focuses on implementing a core HE-friendly CNN layer to grasp the fundamental encrypted computation concepts. The intermediate project involves reimplementing a simplified encrypted CNN inference pipeline on MNIST, comparing accuracy and latency to plaintext inference, thus engaging with the paper's core methods and metrics. The advanced project tackles one of the paper's stated limitations by exploring encrypted model weights support, extending the framework and considering hardware architectural implications for practical performance.

### Beginner — Implement HE-Friendly Average Pooling Layer
*Effort: a weekend, ~8 hours*

You build a standalone implementation of the average pooling layer optimized for homomorphic encryption using the CKKS scheme, following the paper's description of HE-friendly pooling. This involves simulating encrypted data inputs and performing average pooling with configurable parameters like kernel size and stride.

**Why it shows you understood the paper:** This project shows you understand how to adapt standard CNN layers to operate on encrypted data, a core contribution of FHEON, and the challenges of HE-compatible operations such as avoiding expensive rotations and managing noise.

**Grounded in:** FHEON provides reusable, parameterized HE-friendly CNN layers including average pooling with support for standard parameters, enabling encrypted inference on ciphertexts.

**Tech stack:** Python 3.11, NumPy, PySEAL (or another CKKS-compatible HE library)

**Data:** Simulated encrypted input tensors representing feature maps; no real dataset required.

**Build it:**

1. Set up a CKKS homomorphic encryption context using PySEAL or a similar library.
2. Implement a function to encrypt a sample input tensor representing a feature map.
3. Implement the average pooling operation on encrypted data, supporting kernel size and stride parameters.
4. Decrypt the output and verify correctness against plaintext average pooling results.
5. Document the implementation and include example usage in the README.

**Ships as:** A GitHub repo with code implementing HE-friendly average pooling, example scripts demonstrating encryption, pooling, decryption, and a README explaining the approach and results.

**Stretch goal:** Add support for the SIMD-aware padding algorithm described in the paper to handle arbitrary padding efficiently.

### Intermediate — Encrypted LeNet-5 Inference on MNIST
*Effort: 2 weekends, ~20 hours*

You reimplement the core FHEON method by building an encrypted inference pipeline for the LeNet-5 CNN architecture on the MNIST dataset using CKKS homomorphic encryption. You compare encrypted inference accuracy and latency against plaintext inference to validate the approach.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's configurable HE-friendly CNN layers and optimizations to a real dataset and model, reproducing key results such as accuracy within ±1% of plaintext and practical latency on consumer hardware.

**Grounded in:** Benchmarking of LeNet-5 on MNIST shows encrypted inference accuracy within ±1% of plaintext and latency of 13 seconds on consumer CPUs using FHEON's optimized layers.

**Tech stack:** Python 3.11, PyTorch (for plaintext baseline), NumPy, PySEAL or TenSEAL for CKKS HE operations

**Data:** MNIST dataset (publicly available handwritten digit images) used as input for encrypted inference.

**Build it:**

1. Implement or obtain a plaintext LeNet-5 model in PyTorch and verify baseline accuracy on MNIST.
2. Set up CKKS encryption context and implement encryption/decryption utilities.
3. Implement HE-friendly versions of LeNet-5 layers (convolution, average pooling, activation approximations, fully connected) following the paper's algorithms.
4. Build an encrypted inference pipeline that encrypts MNIST inputs, runs inference on encrypted data, and decrypts outputs.
5. Measure and compare accuracy and latency against plaintext inference.
6. Write a report summarizing implementation details, results, and comparison to the paper.

**Ships as:** A GitHub repo containing code for plaintext and encrypted LeNet-5 inference, scripts to run benchmarks on MNIST, and a README with results and discussion.

**Stretch goal:** Incorporate the paper's rotation-key reuse strategy and SIMD-aware padding to optimize memory and runtime.

### Advanced — Extending FHEON for Encrypted Model Weights
*Effort: 3+ weeks*

You extend the FHEON framework concept by designing and prototyping support for encrypted model weights during inference, addressing one of the paper's key limitations. This includes implementing encrypted weight storage, adapting convolution and fully connected layers to operate on encrypted weights, and exploring hardware architectural considerations to maintain practical performance.

**Why it shows you understood the paper:** This project tackles a major open challenge identified by the authors, demonstrating deep comprehension of FHEON's design and the cryptographic and architectural complexities involved in encrypted model weights, potentially opening avenues for privacy-preserving model confidentiality.

**Grounded in:** Current limitation: FHEON supports encrypted inference with plaintext model weights only; encrypted model weights support is a stated future direction.

**Tech stack:** Python 3.11, PySEAL or TenSEAL, PyTorch (for model reference), Docker (for environment reproducibility)

**Data:** MNIST or CIFAR-10 datasets as inputs; models adapted from LeNet-5 or ResNet-20 for experimentation.

**Build it:**

1. Review FHEON's layer implementations and identify components assuming plaintext weights.
2. Design a scheme to encrypt model weights and manage their homomorphic operations during inference.
3. Implement encrypted weight storage and loading mechanisms compatible with CKKS.
4. Adapt convolution and fully connected layers to perform encrypted computations with encrypted weights.
5. Evaluate accuracy and latency trade-offs on MNIST or CIFAR-10 with encrypted weights.
6. Analyze hardware architectural factors (e.g., memory bandwidth, parallelism) critical to performance and document findings.
7. Prepare a detailed report discussing implementation challenges, results, and architectural insights.

**Ships as:** A GitHub repo with extended FHEON-like code supporting encrypted weights, benchmark scripts, and a comprehensive README/report discussing the approach and hardware considerations.

**Stretch goal:** Prototype noise management or bootstrapping automation to enable deeper encrypted models with encrypted weights.

_The authors have not released code for FHEON; intermediate and advanced projects require reimplementation from paper descriptions. MNIST and CIFAR-10 are publicly available datasets used as substitutes for the paper's benchmarks._
