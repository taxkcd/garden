---
title: "1016 · Integrating Homomorphic Encryption and Trusted Execution Technology for Autonomous and Confidential Model Refining in Cloud — Wensheng Zhang"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wensheng-zhang"
source_hash: "59f9659096437e2002237b85db2f781654e56222ca59f4a3744a2e89aad96673"
sequence: 1016
generator: "outreach-garden: managed"
---

# 1016 · Integrating Homomorphic Encryption and Trusted Execution Technology for Autonomous and Confidential Model Refining in Cloud

## At a glance

- **Professor:** Wensheng Zhang
- **Institution:** Iowa State University
- **Paper:** [Integrating Homomorphic Encryption and Trusted Execution Technology for Autonomous and Confidential Model Refining in Cloud](https://arxiv.org/pdf/2308.00963)
- **Authors:** Pinglan Liu, Wensheng Zhang
- **Year:** 2023

## Paper overview

This paper presents a system that allows cloud servers to autonomously refine machine learning models using encrypted data and models, ensuring confidentiality and privacy. It combines homomorphic encryption and trusted execution environments to securely perform continuous model training without exposing sensitive data or models to the cloud provider.

### Why it matters

**Research problem:** How to enable autonomous, continuous, and confidential machine learning model refining in the cloud while protecting the confidentiality of users' data and models from potentially untrusted cloud servers.

**Why it matters:** Cloud computing offers scalable resources for machine learning, but outsourcing training and inference raises serious confidentiality and privacy concerns. Users want their data and models to remain confidential despite the cloud's untrusted nature, especially for long-term continuous learning where users cannot always be online.

**Key contributions:**

- Design of a scheme combining homomorphic encryption and TEE for autonomous and confidential model refining in cloud.
- Development of algorithms for encrypted forward and backward propagation in CNNs using LHE.
- Implementation of noise reduction via TEE re-encryption to sustain long-term encrypted training.
- Prototype system demonstrating feasibility of autonomous refining without client intervention.
- Evaluation showing comparable accuracy improvements to plaintext training despite higher computational cost.

## About the professor

**Wensheng Zhang** — Iowa State University.

Research interests: Cloud Computing; Distributed Systems; Security and Privacy; Applied Cryptography; Networks.

### Research links

- [Faculty/profile page](https://faculty.sites.iastate.edu/wzhang/research)
- [Identity evidence](http://www.cs.iastate.edu/~wzhang)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Homomorphic Encryption
**The paper assumes:** homomorphic encryption, leveled homomorphic encryption schemes, ciphertext noise management, encrypted computation
**Already in this field?** Skip this entirely if you already understand homomorphic encryption schemes and their application to encrypted computation.

This background focuses on homomorphic encryption, the cryptographic technique central to the paper's approach for confidential model refining in the cloud. The rigorous course option provides a deep, university-level foundation in modern cryptography including homomorphic encryption concepts, while the fast track offers a concise, practical introduction to homomorphic encryption with clear Python implementations. Choose the course for a thorough theoretical understanding; choose the fast track for a quick, applied grasp of homomorphic encryption principles relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Invitation to Modern Cryptography: CSE207, UCSD Computer Science](https://www.youtube.com/playlist?list=PL-SStBoAJuw0vj8MgTFhY5y9wSFnjGbOB) — Mihir Bellare · 28 videos · 24.1h across 28 episodes

**Watch only this:** Lectures 15 and 16: "Public-key Encryption: Part 1" and "Public-Key Encryption: Part 2" (about 1 hour 42 minutes total) — these cover the basics of public-key encryption schemes foundational to homomorphic encryption. Optionally, include Lecture 19: "Digital Signatures: Part 2" (about 51 minutes) for broader cryptographic context relevant to secure key management.

*Why it unblocks this paper:* This UCSD course by Mihir Bellare is a rigorous, well-structured introduction to modern cryptography, covering foundational concepts that underpin homomorphic encryption, including public-key encryption and computational number theory, which are essential to understanding the cryptographic techniques used in the paper.

*If you want all of it:* Approximately 24.1 hours across all 28 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Homomorphic Encryption In Python From Scratch](https://www.youtube.com/playlist?list=PLsS_1RYmYQQHy-Hhr3WELOXiEa5vF-UN9) — Sefik Ilkin Serengil · 11 videos · 2.6h across 11 episodes

**Watch only this:** Episodes 1-5: "LightPHE: A Lightweight Partially Homomorphic Encryption Library for Python" through "Partially Homomorphic Encryption with Paillier in Python From Scratch" (about 1 hour 5 minutes total) — these episodes introduce core homomorphic encryption concepts and practical schemes relevant to the paper's LHE approach.

*Why it unblocks this paper:* This playlist by Sefik Ilkin Serengil provides a practical and concise introduction to homomorphic encryption with Python implementations, covering partially and fully homomorphic encryption schemes. It offers an accessible, applied perspective that complements the theoretical course and aligns well with the paper's focus on implementing encrypted CNN training.

*If you want all of it:* Approximately 2.6 hours across all 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's novel integration of homomorphic encryption and trusted execution environments for confidential model refining in the cloud, start with foundational concepts of leveled homomorphic encryption and trusted execution environments. Then, explore encrypted neural network training and noise management in homomorphic encryption to grasp the technical challenges addressed. Finally, focus on the core concept of confidential model refining in cloud environments, emphasizing the paper's unique approach.

### Leveled Homomorphic Encryption *(prerequisite)*
Leveled homomorphic encryption (LHE) enables computation on encrypted data without decryption, which is fundamental for performing encrypted forward and backward propagation in the paper's scheme. Understanding LHE's principles and limitations is essential to appreciate how encrypted model refining is achieved.

*How the paper uses it:* LHE is the core cryptographic technique enabling computation on encrypted data in the proposed model refining scheme.

▶ [001 Introduction to Homomorphic Encryption w/ Pascal Paillier](https://www.youtube.com/watch?v=umqz7kKWxyw) — FHE_org · 5y ago

### Trusted Execution Environments *(prerequisite)*
Trusted Execution Environments (TEEs) provide a secure hardware-based environment for sensitive operations such as key management and noise reduction via re-encryption. Grasping TEE functionality and security considerations is crucial to understand how the paper mitigates noise accumulation and protects keys.

*How the paper uses it:* The paper uses TEE primarily for key management and noise reduction to sustain long-term encrypted training.

▶ [Trusted Execution Environments (TEEs) for Blockchain Applications with Ari Juels | a16z crypto](https://www.youtube.com/watch?v=Xq7oWtiwWII) — a16z Frontier · 3y ago

### Encrypted Neural Network Training *(prerequisite)*
This concept covers how neural network operations, including forward and backward propagation, can be executed on encrypted data and models. Familiarity with encrypted neural network training frameworks and challenges will clarify the paper's algorithmic contributions for encrypted CNN refining.

*How the paper uses it:* The paper develops algorithms for encrypted forward and backward propagation in CNNs using LHE.

▶ [FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks](https://www.youtube.com/watch?v=-kRK-kBaPXc) — Privacy Enhancing Technologies Symposium · 3mo ago

### Noise Management in Homomorphic Encryption *(prerequisite)*
Noise accumulation in ciphertexts is a critical challenge in homomorphic encryption that limits the depth of computable circuits. Understanding noise management techniques, including re-encryption and noise reduction, is vital to appreciate the paper's use of TEE to enable sustainable long-term encrypted training.

*How the paper uses it:* The paper implements noise reduction via TEE re-encryption to sustain long-term encrypted model refining.

▶ [A Decade (or so) of fully homomorphic encryption, by Craig Gentry](https://www.youtube.com/watch?v=487AjvFW1lk) — IACR · Streamed 5y ago

### Confidential Model Refining in Cloud
This core concept focuses on the integration of homomorphic encryption and TEEs to enable autonomous, continuous, and confidential model refining in cloud environments. Understanding this approach is key to grasping the paper's main contribution and its implications for privacy-preserving cloud ML.

*How the paper uses it:* The paper's central contribution is the design of a scheme combining LHE and TEE for autonomous and confidential model refining in the cloud.

▶ [Confidential computing and confidential accelerators for AI workloads](https://www.youtube.com/watch?v=a-hd78NX36c) — Google Cloud Tech · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand confidential model refining in the cloud, starting with the basics of homomorphic encryption and trusted execution environments. It then covers how neural networks can be trained on encrypted data, the critical challenge of noise management in encryption, and culminates with the core idea of integrating these technologies for autonomous, confidential model refining as presented in the paper.

### Leveled Homomorphic Encryption *(prerequisite)*
Learn how homomorphic encryption allows computations directly on encrypted data without decrypting it, preserving privacy. Leveled homomorphic encryption supports a limited number of operations, which is essential for practical encrypted machine learning.

*How the paper uses it:* The paper uses leveled homomorphic encryption to perform encrypted forward and backward propagation on CNN models.

▶ [001 Introduction to Homomorphic Encryption w/ Pascal Paillier](https://www.youtube.com/watch?v=umqz7kKWxyw) — FHE_org · 5y ago

### Trusted Execution Environments *(prerequisite)*
Understand TEEs as secure hardware environments that protect sensitive operations like key management and noise reduction from untrusted cloud servers. TEEs provide a trusted space to handle critical cryptographic tasks securely.

*How the paper uses it:* The paper leverages TEEs for key management and ciphertext noise reduction via re-encryption to sustain long-term encrypted training.

▶ [Trusted Execution Environments (TEEs) for Blockchain Applications with Ari Juels | a16z crypto](https://www.youtube.com/watch?v=Xq7oWtiwWII) — a16z Frontier · 3y ago

### Encrypted Neural Network Training *(prerequisite)*
Explore how neural networks can be trained on encrypted data, including how forward and backward propagation are adapted to work under encryption constraints. This is key to confidential model refining without exposing data or model parameters.

*How the paper uses it:* The paper develops algorithms for encrypted forward and backward propagation in CNNs using leveled homomorphic encryption.

▶ [FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks](https://www.youtube.com/watch?v=-kRK-kBaPXc) — Privacy Enhancing Technologies Symposium · 3mo ago

### Noise Management in Homomorphic Encryption *(prerequisite)*
Learn why noise accumulates in ciphertexts during homomorphic operations and how it limits the number of computations. Effective noise management techniques, like re-encryption, are essential to maintain correctness over long computations.

*How the paper uses it:* The paper uses TEE-based re-encryption to periodically reduce noise in ciphertexts, enabling sustainable encrypted model refining.

▶ [A Decade (or so) of fully homomorphic encryption, by Craig Gentry](https://www.youtube.com/watch?v=487AjvFW1lk) — IACR · Streamed 5y ago

### Confidential Model Refining in Cloud
Understand the integration of homomorphic encryption and TEEs to enable autonomous, continuous, and confidential model refining in cloud environments. This approach protects user data and models from untrusted cloud providers while leveraging cloud scalability.

*How the paper uses it:* This is the core contribution of the paper: combining LHE and TEE to achieve autonomous confidential model refining on encrypted data and models in the cloud.

▶ [Confidential computing and confidential accelerators for AI workloads](https://www.youtube.com/watch?v=a-hd78NX36c) — Google Cloud Tech · 2y ago

## Already in your library

- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [CROSS: Leveraging ASIC AI Chips for Homomorphic Encryption \[HPCA'26\]](https://www.youtube.com/watch?v=TFnQPlLZs1E) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [What is Trusted Execution Environment (TEE) | TEE (Trusted Execution Environment)](https://www.youtube.com/watch?v=heTIzSzXN-M) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Trusted Execution Environments: A Technical Overview of ...](https://www.youtube.com/watch?v=MREwcSo0uz4) — also for: Efficient Security Support for CXL Memory through Adaptive Incremental Offloaded (Re-)Encryption (Yuanchao Xu)
- [#33 Trusted Execution Environments | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=7EfWU52MgM8) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Prof. Nigel Smart | Fully Homomorphic Encryption](https://www.youtube.com/watch?v=gWcjwXJWMKM) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder that helps you demonstrate understanding of the paper's core contribution: enabling confidential, autonomous CNN model refining in the cloud using homomorphic encryption (HE) and trusted execution environments (TEE). The beginner project focuses on implementing a small-scale encrypted forward pass using HE primitives, the intermediate project reimplements the paper's encrypted CNN refining scheme on MNIST and compares accuracy to plaintext training, and the advanced project extends the scheme by exploring GPU acceleration or parallelism to address the paper's computational efficiency limitations.

### Beginner — Encrypted Forward Propagation on MNIST with Microsoft SEAL
*Effort: a weekend, ~8 hours*

You build a minimal prototype that performs encrypted forward propagation of a simple CNN layer on MNIST images using leveled homomorphic encryption (LHE) primitives from Microsoft SEAL. This involves encrypting input data, performing convolution and activation operations homomorphically, and decrypting the output to verify correctness.

**Why it shows you understood the paper:** This project shows you understand how homomorphic encryption can be applied to neural network inference, a key component of the paper's confidential model refining approach.

**Grounded in:** Development of algorithms for encrypted forward propagation in CNNs using LHE.

**Tech stack:** Python 3.11, Microsoft SEAL (via Python bindings or C++ with Python wrapper), NumPy, Jupyter Notebook

**Data:** MNIST dataset of handwritten digits, publicly available at (link removed — unverified) (used in the paper).

**Build it:**

1. Set up Microsoft SEAL and familiarize yourself with its API for encryption, evaluation, and decryption.
2. Load a small batch of MNIST images and encrypt the pixel data using LHE.
3. Implement homomorphic convolution and activation functions (e.g., polynomial approximation of ReLU) on encrypted data.
4. Decrypt the output ciphertexts and compare results with plaintext forward propagation to verify correctness.
5. Document the process, challenges, and performance observations in a README.

**Verified links from the paper:**

- <https://github.com/Microsoft/SEAL> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code and README demonstrating encrypted forward propagation on MNIST images, including correctness verification.

**Stretch goal:** Add encrypted pooling layers or extend to a small multi-layer CNN forward pass.

### Intermediate — Confidential CNN Model Refining with Homomorphic Encryption and TEE Simulation
*Effort: 2 weekends, ~20 hours*

You reimplement the core method of the paper: encrypted forward and backward propagation for CNN model refining on MNIST, integrating homomorphic encryption for data/model confidentiality and simulating TEE-based noise reduction via periodic ciphertext re-encryption. You compare the refined model's accuracy against plaintext training to demonstrate feasibility.

**Why it shows you understood the paper:** This project proves you grasp the paper's main contribution of autonomous, confidential model refining using LHE and TEE, including noise management and encrypted backpropagation algorithms.

**Grounded in:** Design of a scheme combining homomorphic encryption and TEE for autonomous and confidential model refining in cloud; Implementation of noise reduction via TEE re-encryption to sustain long-term encrypted training; Evaluation showing comparable accuracy improvements to plaintext training despite higher computational cost.

**Tech stack:** Python 3.11, Microsoft SEAL, NumPy, PyTorch (for plaintext baseline)

**Data:** MNIST dataset of handwritten digits, publicly available at (link removed — unverified) (used in the paper).

**Build it:**

1. Implement encrypted forward propagation for a simple CNN using Microsoft SEAL.
2. Implement encrypted backward propagation algorithms for convolutional and fully connected layers as described in the paper.
3. Simulate TEE noise reduction by periodically decrypting and re-encrypting ciphertexts within a secure enclave simulation (e.g., a trusted function in code).
4. Train the encrypted CNN model on MNIST data and track accuracy improvements over epochs.
5. Train a plaintext CNN baseline on MNIST for comparison.
6. Document accuracy, runtime, and communication overhead observations in README.

**Verified links from the paper:**

- <https://github.com/Microsoft/SEAL> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code and README showing encrypted CNN model refining on MNIST with noise management, including accuracy comparison to plaintext training.

**Stretch goal:** Add multi-threading or basic parallelism to speed up encrypted training steps.

### Advanced — Scaling Confidential Model Refining: GPU Acceleration and Parallelism for Encrypted CNN Training
*Effort: 3+ weeks*

You extend the paper's prototype by implementing GPU acceleration and parallel computation for encrypted CNN refining to address the computational efficiency limitation. This involves adapting homomorphic encryption operations to GPU-compatible libraries or frameworks and optimizing the encrypted forward/backward propagation pipeline. You evaluate performance gains and discuss trade-offs.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the system's bottlenecks and practical engineering solutions to scale confidential model refining.

**Grounded in:** Limitations: The prototype runs single-threaded on CPU without GPU acceleration, which constrains performance; Future directions: Improve computational performance by leveraging GPU acceleration and higher parallelism in cloud servers.

**Tech stack:** Python 3.11, Microsoft SEAL, CUDA or PyTorch with custom GPU kernels, NumPy

**Data:** MNIST dataset of handwritten digits, publicly available at (link removed — unverified) (used in the paper).

**Build it:**

1. Profile the existing encrypted CNN training implementation to identify computational bottlenecks.
2. Research GPU-compatible homomorphic encryption libraries or implement GPU acceleration for core HE operations using CUDA or PyTorch custom kernels.
3. Adapt encrypted forward and backward propagation to leverage GPU acceleration and parallelism.
4. Benchmark training time and accuracy improvements compared to CPU-only implementation.
5. Document challenges, performance results, and potential security considerations in README.

**Verified links from the paper:**

- <https://github.com/Microsoft/SEAL> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code and README demonstrating GPU-accelerated encrypted CNN refining with performance benchmarks and analysis.

**Stretch goal:** Extend to larger CNN architectures or datasets beyond MNIST to further validate scalability.

_The paper's authors did not release code for their scheme, so the intermediate and advanced projects require reimplementation from the paper's descriptions; also, Microsoft SEAL is the main HE library referenced and must be used for homomorphic encryption operations._
