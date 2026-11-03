---
title: "1030 · CryptoTrain: Fast Secure Training on Encrypted Dataset — Xueqiang Wang"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xueqiang-wang"
source_hash: "449d09ced6cbd913086f05e685cb1a00af93b43871e8a759333dcb3c4f11d1e8"
sequence: 1030
generator: "outreach-garden: managed"
---

# 1030 · CryptoTrain: Fast Secure Training on Encrypted Dataset

## At a glance

- **Professor:** Xueqiang Wang
- **Institution:** University of Central Florida
- **Paper:** [CryptoTrain: Fast Secure Training on Encrypted Dataset](https://arxiv.org/pdf/2409.16675)
- **Authors:** Jiaqi Xue, Yancheng Zhang, Yanshan Wang, Xueqiang Wang, Hao Zheng, Qian Lou
- **Year:** 2024

## Paper overview

This paper presents CryptoTrain, a framework for securely training neural networks on encrypted data efficiently. It combines homomorphic encryption and oblivious transfer to protect data and model privacy while significantly reducing the computational overhead typical in secure training. The authors introduce two key innovations: precomputing expensive ciphertext-ciphertext multiplications offline and a correlation-aware polynomial convolution method that reduces redundant computations in padded convolutions. CryptoTrain achieves substantial speedups over prior methods and enables secure training on larger datasets like TinyImageNet.

### Why it matters

**Research problem:** How to efficiently train deep neural networks on encrypted datasets while preserving the confidentiality of both data and model weights, overcoming the high computational overhead and latency caused by fully homomorphic encryption (FHE) bootstrapping and ciphertext-ciphertext multiplications.

**Why it matters:** Training as a Service (TaaS) is widely used but raises privacy concerns when sensitive data is outsourced for training. Legal regulations like CCPA and GDPR require data confidentiality. Existing secure training methods either suffer from impractical latency or require multiple non-colluding servers, limiting real-world applicability. Efficient secure training enables privacy-preserving AI applications in sensitive domains such as healthcare and finance.

**Key contributions:**

- Development of CryptoTrain-B baseline protocol combining FHE and OT to avoid costly bootstrapping and reduce server requirements to a single semi-honest server.
- Introduction of CCMul-Precompute technique (CryptoTrain-P) that shifts expensive CCMul operations offline, enabling faster online training.
- Design of correlation-aware polynomial convolution that efficiently encodes padded inputs to minimize redundant polynomial multiplications.
- Implementation and evaluation of CryptoTrain demonstrating significant speedups (up to 8.2× over baseline and 75.5× over prior HE-based methods) on MNIST, CIFAR-10, and TinyImageNet datasets.
- First secure training demonstration on the TinyImageNet dataset.

## About the professor

**Xueqiang Wang** — Assistant Professor, Computer Science, University of Central Florida.

Research interests: security and privacy risks in real-world software ecosystems, privacy compliance, software supply chain security, and online deception across mobile and IoT systems and emerging agentic AI systems

### Research links

- [Faculty/profile page](https://xw48.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Homomorphic Encryption
**The paper assumes:** homomorphic encryption schemes, ciphertext operations, bootstrapping in homomorphic encryption, secure multiparty computation basics
**Already in this field?** Skip this entirely if you already understand the principles and practical challenges of homomorphic encryption and its application to secure computation.

Understanding homomorphic encryption (HE) is essential for grasping how CryptoTrain securely performs computations on encrypted data without costly bootstrapping. The rigorous course option provides a deep, structured exploration of HE principles and schemes, while the fast track offers a concise, accessible introduction to the core concepts and practical implications. Choose the course for comprehensive technical depth or the fast track for a quick, clear conceptual foundation.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Homomorphic Encryption: Compute on Encrypted Data](https://www.youtube.com/playlist?list=PLZ0iFJdiqMNajplNdEyzP0hX4kVtbndYa) — onlyTech R&D · 12 videos · 1.1h across 12 episodes

**Watch only this:** Episodes 1-4, about 20 minutes — covering use cases, system architecture, performance optimization, and HE for machine learning, which together give a practical overview of HE relevant to the paper.

*Why it unblocks this paper:* This concise 12-episode series from onlyTech R&D offers a clear, end-to-end introduction to homomorphic encryption, including practical system design and performance trade-offs, ideal for quickly understanding the key concepts behind CryptoTrain's protocol.

*If you want all of it:* 1.1 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand CryptoTrain, start with foundational cryptographic primitives essential to the paper: homomorphic encryption, oblivious transfer, and secure multiparty computation. These provide the theoretical and practical basis for secure training on encrypted data. Then, explore polynomial convolution optimization as a key technical innovation in the paper. Finally, focus on the authors' own talk or equivalent advanced presentations about CryptoTrain to grasp their novel hybrid protocol, offline precomputation, and correlation-aware convolution techniques.

### Homomorphic encryption secure training *(prerequisite)*
Fully homomorphic encryption (FHE) enables computation directly on encrypted data, a core technique underlying CryptoTrain's secure linear operations. Understanding FHE schemes and their computational challenges is critical to appreciating CryptoTrain's optimizations.

*How the paper uses it:* CryptoTrain leverages FHE for linear computations to avoid costly bootstrapping and improve efficiency.

▶ [Introduction to fully homomorphic encryption](https://www.youtube.com/watch?v=y3Mu3GSRoTA) — Jean-Sébastien Coron - University of Luxembourg · 1:26:02 · 4y ago

### Oblivious transfer protocols *(prerequisite)*
Oblivious transfer (OT) is a fundamental cryptographic primitive used for secure non-linear operations in CryptoTrain. A rigorous lecture on OT provides the necessary background on its variants and security properties.

*How the paper uses it:* CryptoTrain combines OT with FHE to securely perform non-linear computations without expensive bootstrapping.

▶ [Lec 37 Oblivious Transfer (OT)](https://www.youtube.com/watch?v=1s-bKKdElAU) — NPTEL - Indian Institute of Science, Bengaluru · 38:06 · 5y ago

### Secure multiparty computation *(prerequisite)*
Secure multiparty computation (MPC) frameworks encompass protocols like FHE and OT, enabling joint computation without revealing private inputs. Understanding MPC principles contextualizes CryptoTrain's hybrid cryptographic approach.

*How the paper uses it:* CryptoTrain builds on MPC concepts to design a single-server secure training protocol combining FHE and OT.

▶ [Secure Multiparty Computation II](https://www.youtube.com/watch?v=cFJtCZaUsRc) — Simons Institute for the Theory of Computing · 1:09:31 · 11y ago

### Polynomial convolution optimization
Polynomial convolution optimization reduces computational overhead in encrypted convolution layers by minimizing polynomial degrees and ciphertext multiplications. This technique is a key innovation in CryptoTrain to accelerate padded convolutions.

*How the paper uses it:* CryptoTrain introduces a correlation-aware polynomial convolution scheme to efficiently encode padded inputs and reduce computation.

▶ [UTRC CDS Invited Lecture: Javad Lavaei "Graph-Theoretic Convexification of Polynomial Optimization"](https://www.youtube.com/watch?v=V0cm-dP2guw) — Institute for Systems Research · 53:22 · 9y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CryptoTrain, start by learning the foundational cryptographic techniques enabling secure computation on encrypted data, specifically homomorphic encryption and oblivious transfer. Then, build intuition on secure multiparty computation as the broader framework. Finally, explore the paper's core innovations: how polynomial convolution optimization reduces overhead in encrypted neural network training.

### Homomorphic encryption secure training *(prerequisite)*
Homomorphic encryption (HE) allows computations to be performed directly on encrypted data without decrypting it, preserving privacy. Understanding HE is essential because CryptoTrain uses it for linear operations in neural network training on encrypted datasets.

*How the paper uses it:* CryptoTrain leverages FHE to securely perform linear computations on encrypted data without costly bootstrapping.

▶ [Introduction to fully homomorphic encryption](https://www.youtube.com/watch?v=y3Mu3GSRoTA) — Jean-Sébastien Coron - University of Luxembourg · 1:26:02 · 4y ago

### Oblivious transfer protocols *(prerequisite)*
Oblivious transfer (OT) is a cryptographic protocol that enables one party to send information to another without knowing which piece was received, preserving privacy in non-linear computations. This is crucial for CryptoTrain's secure handling of non-linear neural network operations.

*How the paper uses it:* CryptoTrain combines OT for non-linear operations with FHE for linear ones to avoid expensive bootstrapping.

▶ [Lec 37 Oblivious Transfer (OT)](https://www.youtube.com/watch?v=1s-bKKdElAU) — NPTEL - Indian Institute of Science, Bengaluru · 38:06 · 5y ago

### Secure multiparty computation *(prerequisite)*
Secure multiparty computation (MPC) allows multiple parties to jointly compute a function over their inputs while keeping those inputs private. It provides the broader theoretical framework within which CryptoTrain's hybrid cryptographic protocols operate.

*How the paper uses it:* CryptoTrain's protocols fit within the MPC paradigm to enable privacy-preserving neural network training.

▶ [Intro - Secure Computation: Part I](https://www.youtube.com/watch?v=ENBhmjHXleM) — NPTEL - Indian Institute of Science, Bengaluru · 9:38 · 5y ago

### Polynomial convolution optimization
Polynomial convolution optimization involves techniques to reduce the computational complexity of convolutions by efficiently encoding inputs into polynomials, minimizing redundant operations. This optimization is key to CryptoTrain's reduction of latency in encrypted convolution layers.

*How the paper uses it:* CryptoTrain introduces a correlation-aware polynomial convolution method to reduce polynomial degrees and ciphertext multiplications in padded convolutions.

▶ [The Convolution of Two Functions | Definition & Properties](https://www.youtube.com/watch?v=AgKQQtEc9dk) — Dr. Trefor Bazett · 10:33 · 6y ago

## Already in your library

- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Fully Homomorphic Encryption I](https://www.youtube.com/watch?v=xlcb_G1_rzk) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Homomorphic Encryption from Ring Learning with Errors](https://www.youtube.com/watch?v=Dm7GI_8L4dA) — also for: From Lattices to Tensor Cores: Accelerating Private Information Retrieval (David J. Wu)
- [Prof. Nigel Smart | Fully Homomorphic Encryption](https://www.youtube.com/watch?v=gWcjwXJWMKM) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Why Fully Homomorphic Encryption Is the Future of Private Computing](https://www.youtube.com/watch?v=RgzeESzBa4Y) — also for: Efficient Privacy-Preserving Sparse Matrix-Vector Multiplication Using Homomorphic Encryption (Wujie Wen)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [The Simplest Oblivious Transfer Protocol](https://www.youtube.com/watch?v=pIi-YTBBolU) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Oblivious Transfer - Computerphile](https://www.youtube.com/watch?v=wE5cl8J27Is) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Benjamin Kreuter - Secure Multiparty Computation at Google](https://www.youtube.com/watch?v=iViQHHchtbk) — also for: Federated Analytics: A survey (Shantanu Sharma)
- [Secure Multiparty Computation I](https://www.youtube.com/watch?v=Fv4UawF52eU) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Secure Multiparty Computation](https://www.youtube.com/watch?v=pjlXjBSyyHI) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Basics of Secure Multiparty Computation](https://www.youtube.com/watch?v=_mDlLKgiFDY) — also for: Federated Analytics: A survey (Shantanu Sharma)
- [Introduction to Multi-Party Computation (MPC or SMPC)](https://www.youtube.com/watch?v=90jcXCHsBF0) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)
- [Lec 01 What is Secure Multi-Party Computation (MPC)?](https://www.youtube.com/watch?v=NXFLrm8zcS8) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [2. Optimization Problems](https://www.youtube.com/watch?v=uK5yvoXnkSk) — also for: OptiGuide: An Efficient Domain-Independent Package Recommender System Based on Multi-Objective Optimization and User Decision Guidance (Alexander Brodsky)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [What is convolution? This is the easiest way to understand](https://www.youtube.com/watch?v=QmcoPYUfbJ8) — also for: 𝑓 VDB: A Deep-Learning Framework for Sparse, Large-Scale, and High-Performance Spatial Intelligence (Eftychios Sifakis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of CryptoTrain's innovations in secure neural network training on encrypted data. The beginner project recreates a core cryptographic optimization concept from the paper using familiar tools. The intermediate project implements the paper's CCMul-Precompute offline-online split on a smaller dataset, comparing performance to a baseline. The advanced project extends CryptoTrain by addressing one of its stated limitations—reducing communication overhead during preprocessing—exploring ciphertext compression techniques.

### Beginner — Offline Precomputation of Ciphertext Multiplications
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the CryptoTrain-P CCMul-Precompute technique by implementing offline precomputation of ciphertext-ciphertext multiplications and replacing them with ciphertext-plaintext multiplications during online training. This will be a small-scale prototype demonstrating the computational cost difference between online CCMul and CPMul operations.

**Why it shows you understood the paper:** This project shows you grasp the paper's key innovation of shifting expensive CCMul operations offline to speed up online training, a core contribution of CryptoTrain-P.

**Grounded in:** Introduction of CCMul-Precompute technique (CryptoTrain-P) that shifts expensive CCMul operations offline, enabling faster online training.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy

**Data:** Synthetic small matrix data simulating encrypted tensors; no real encrypted data needed.

**Build it:**

1. Implement functions to simulate ciphertext-ciphertext multiplication (CCMul) and ciphertext-plaintext multiplication (CPMul) with dummy data.
2. Create an offline preprocessing step that precomputes CCMul results and stores them.
3. Implement an online training step that uses precomputed CCMul results to perform CPMul instead of CCMul.
4. Measure and compare the runtime of online CCMul vs CPMul operations.
5. Document the performance difference and explain how this relates to CryptoTrain-P.

**Ships as:** A Jupyter Notebook demonstrating offline precomputation of CCMul and faster online CPMul with runtime comparisons and explanations.

**Stretch goal:** Add a simple visualization of runtime improvements and discuss communication trade-offs during preprocessing.

### Intermediate — Implementing CryptoTrain-P on CIFAR-10 with Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of CryptoTrain-P's offline-online protocol for secure training on encrypted CIFAR-10 data. You will simulate the offline precomputation of CCMul and replace online CCMul with CPMul during training of a small CNN. You compare training time and latency against a baseline that performs all CCMul online.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core CCMul-Precompute method and empirically validate its speedup on a standard dataset, reflecting the paper's key results on CIFAR-10.

**Grounded in:** CryptoTrain-P splits the protocols ... such that most of the heavy cryptographic computation, i.e., CCMul, is offloaded to the preprocessing phase.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** CIFAR-10 dataset (publicly available) used as a substitute for encrypted training data.

**Build it:**

1. Implement a CNN model compatible with encrypted training simulation.
2. Simulate ciphertext-ciphertext multiplication (CCMul) and ciphertext-plaintext multiplication (CPMul) operations within training loops.
3. Implement an offline preprocessing phase that precomputes CCMul results for convolution layers.
4. Modify the online training phase to use precomputed CCMul results and CPMul operations.
5. Train the model on CIFAR-10 with both baseline (all CCMul online) and CryptoTrain-P style offline precomputation.
6. Measure and compare training time and latency between the two approaches.
7. Write a report summarizing the speedup and relate findings to the paper's results.

**Verified links from the paper:**

- <https://github.com/mpc-msri/EzPC> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/Microsoft/SEAL> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing CryptoTrain-P style offline precomputation on CIFAR-10, training logs comparing baseline and optimized methods, and a README explaining the approach and results.

**Stretch goal:** Extend the implementation to include the correlation-aware polynomial convolution optimization for padded convolutions.

### Advanced — Reducing Communication Overhead in CryptoTrain Preprocessing via Ciphertext Compression
*Effort: 3+ weeks*

You develop an extension to CryptoTrain-P that implements a ciphertext compression technique during the preprocessing phase to reduce communication overhead. You will explore using pseudorandom generator (PRG) seeds to compress ciphertext polynomials, simulate the compression and decompression steps, and evaluate the trade-offs between communication cost and latency.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of CryptoTrain, demonstrating your ability to extend the protocol to improve practical deployment efficiency in bandwidth-constrained environments.

**Grounded in:** Future work includes reducing communication overhead via ciphertext compression.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook, Git

**Data:** Simulated encrypted data and ciphertext polynomials; no real encrypted dataset required.

**Build it:**

1. Study the paper's discussion on communication overhead and ciphertext compression using PRG seeds.
2. Implement a simulation of ciphertext polynomial compression using PRG seeds during preprocessing.
3. Implement decompression on the server side to reconstruct ciphertext polynomials for online training.
4. Integrate compression into the offline preprocessing phase of CryptoTrain-P simulation.
5. Measure communication volume before and after compression and evaluate latency impact.
6. Analyze trade-offs and document findings in a detailed report.
7. Optionally, propose further optimizations or hybrid cryptographic primitives to improve efficiency.

**Ships as:** A GitHub repository with code simulating ciphertext compression in CryptoTrain preprocessing, communication and latency benchmarks, and a comprehensive README discussing results and implications.

**Stretch goal:** Experiment with integrating hardware acceleration simulation or explore extending the threat model to malicious adversaries.
