---
title: "533 · Weighted Cryptography with Weight-Independent Complexity — Aarushi Goel"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aarushi-goel"
source_hash: "a797527d08bff588237ffe547a31535ddaf874c19baf2c9e2a4836c0dc889ca4"
sequence: 533
generator: "outreach-garden: managed"
---

# 533 · Weighted Cryptography with Weight-Independent Complexity

## At a glance

- **Professor:** Aarushi Goel
- **Institution:** Rutgers University
- **Paper:** [Weighted Cryptography with Weight-Independent Complexity](https://eprint.iacr.org/2026/273.pdf)
- **Authors:** Aarushi Goel, Swagata Sasmal, Mingyuan Wang
- **Year:** 2026

## Paper overview

This paper presents new cryptographic protocols that support weighted threshold access structures—where parties have different weights—without the complexity depending on the total weights. The authors develop a novel computational secret sharing scheme with linear homomorphism and use it to build efficient weighted secure multiparty computation, threshold encryption, and threshold Schnorr signature schemes. These constructions rely on standard cryptographic assumptions and only use black-box cryptography, improving on prior work that either scaled poorly with weights or required non-black-box techniques.

### Why it matters

**Research problem:** Existing cryptographic protocols for multiparty computation and threshold cryptosystems typically assume a simple threshold model where security depends on a fixed number of honest parties. However, many real-world applications require weighted threshold access structures, where parties have different weights and security depends on the total weight of corrupted parties. Prior constructions for weighted cryptosystems either have complexity scaling with total weights or rely on non-black-box cryptographic techniques. The problem is to design weighted cryptosystems with complexity independent of total weights using only black-box cryptography.

**Why it matters:** Weighted threshold models better capture trust distributions in practical scenarios such as stake-based blockchains, weighted voting, federated learning, and corporate authority structures. Efficient cryptographic protocols with weight-independent complexity enable scalable and practical deployment in these settings. Prior approaches that scale with total weights are infeasible when weights are large (potentially millions), limiting applicability.

**Key contributions:**

- First black-box computational secret sharing scheme for weighted threshold access structures with linear homomorphism and weight-independent complexity.
- Black-box weighted secure multiparty computation protocol with guaranteed output delivery and complexity independent of total weights.
- Black-box semi-honest weighted threshold encryption scheme with weight-independent complexity using interactive partial decryption.
- Black-box three-round weighted threshold Schnorr signature scheme preserving the original verification algorithm.
- Extension of all constructions to general monotone access structures represented by efficient monotone Boolean circuits.

## About the professor

**Aarushi Goel** — Assistant Professor, Computer Science, Rutgers University.

Research interests: broad interest in cryptography and related areas of security

### Research links

- [Faculty/profile page](https://aarushigoel.github.io)
- [Resolved homepage](https://aarushigoel.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** cryptographic secret sharing
**The paper assumes:** cryptographic secret sharing schemes, threshold cryptography, linear homomorphic secret sharing
**Already in this field?** Skip this entirely if you already understand cryptographic secret sharing schemes and their role in threshold cryptography.

This background focuses on cryptographic secret sharing, a foundational concept for understanding the weighted threshold access structures and linear homomorphism techniques used in the paper. The rigorous course provides a deep, structured university-level treatment suitable for thorough comprehension, while the fast track offers a concise, intuition-driven introduction to secret sharing and related cryptographic concepts for quicker preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Foundations of Cryptography](https://www.youtube.com/playlist?list=PLgMDNELGJ1CbdGLyn7OrVAP-IKg-0q2U2) — NPTEL - Indian Institute of Science, Bengaluru · 59 videos · 32.9h across 59 episodes

**Watch only this:** Episodes noc20 cs02 lec01 Introduction through noc20 cs02 lec24 Message Authentication for Long Messages Part II, about 13 hours — this subset covers the basics of computational security, secret sharing, and message authentication essential for grasping the paper's core techniques.

*Why it unblocks this paper:* This NPTEL course covers foundational and advanced cryptographic concepts including computational security and secret sharing, providing the rigorous theoretical background needed to understand the paper's novel secret sharing scheme and its cryptographic assumptions.

*If you want all of it:* 32.9 hours across 59 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intypedia Cryptography](https://www.youtube.com/playlist?list=PLptQhq5e9dN4awmtI-mDUGv8KoocBqoOm) — TheNorwied · 14 videos · 3.4h across 14 episodes

**Watch only this:** Watch Lesson 8: Secret sharing protocol (intypedia), about 14 minutes — this episode directly explains secret sharing, providing a quick conceptual foundation for the paper's constructions.

*Why it unblocks this paper:* The Intypedia Cryptography series includes a dedicated episode on secret sharing protocols and covers key cryptographic concepts in a clear, visual style, making it a suitable quick introduction to the essential ideas behind secret sharing relevant to the paper.

*If you want all of it:* 3.4 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Weighted Cryptography with Weight-Independent Complexity," start by grounding yourself in the foundational cryptographic assumptions and primitives that underpin the constructions, specifically the Learning With Errors (LWE) assumption and linearly homomorphic encryption schemes. Next, explore the fundamental concept of weighted threshold cryptography to appreciate the motivation and challenges addressed. Then, study computational secret sharing with linear homomorphism, which is the core technical tool enabling the paper's novel constructions. Finally, watch the authors' own talk for the most direct and detailed exposition of their new results and techniques.

### Learning With Errors assumption *(prerequisite)*
The Learning With Errors (LWE) assumption is a standard and widely studied hardness assumption in lattice-based cryptography. It forms the security foundation for many modern cryptographic schemes, including the linearly homomorphic encryption used in this paper. Understanding LWE is crucial to grasp the security guarantees and instantiations of the proposed weighted cryptographic protocols.

*How the paper uses it:* The paper's constructions rely on standard assumptions such as LWE to instantiate their weighted cryptosystems securely.

▶ [The Learning With Errors Problem and Cryptographic Applications](https://www.youtube.com/watch?v=K_fNK04yG4o) — Simons Institute for the Theory of Computing · Streamed 6 years ago

### Linearly homomorphic encryption schemes *(prerequisite)*
Linearly homomorphic encryption (LHE) schemes allow computations on ciphertexts that correspond to linear operations on plaintexts. This property is central to the paper's approach, where encryptions in Yao's secret sharing scheme are replaced by a specially designed LHE supporting two modes to ensure privacy and correctness. Understanding LHE is key to appreciating how the authors achieve weight-independent complexity.

*How the paper uses it:* The authors use a novel linearly homomorphic encryption scheme to replace encryptions in their computational secret sharing scheme.

▶ [06 Shai Halevi on Fully Homomorphic Encryption](https://www.youtube.com/watch?v=K6QOaBxdWrY) — Workshop on Lattices with Symmetry · 1:06:32 · 13 years ago

### Weighted threshold cryptography *(prerequisite)*
Weighted threshold cryptography generalizes traditional threshold models by assigning different weights to parties, reflecting their varying trust or stake. This concept is fundamental to the paper's motivation and problem setting, as it aims to design efficient cryptographic protocols whose complexity does not depend on the total weights, a significant challenge in prior work.

*How the paper uses it:* The paper addresses weighted threshold access structures to better model real-world trust distributions in cryptographic protocols.

▶ [From Theory to Practice - Threshold Cryptography](https://www.youtube.com/watch?v=nPY6th76IbM) — Simons Institute for the Theory of Computing · 1:05:39 · 6 years ago

### Computational secret sharing with linear homomorphism
Computational secret sharing schemes with linear homomorphism enable efficient and flexible sharing of secrets that support linear operations on shares. This core technique underlies the paper's main contribution, allowing the authors to construct weighted cryptosystems with complexity independent of total weights. Understanding this concept is essential to grasp the technical novelty and power of their constructions.

*How the paper uses it:* At the heart of the paper is a new computational secret sharing scheme with linear homomorphism for weighted threshold access structures.

▶ [Threshold Secret Sharing- Gilad Asharov](https://www.youtube.com/watch?v=5tDp_-Nf7nU) — The BIU Research Center on Applied Cryptography and Cyber Security · 1:01:53 · 6 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct, detailed, and authoritative presentation of their new weighted cryptography constructions, including the motivations, technical challenges, and key results. Watching this talk will give advanced readers the clearest insight into the paper's contributions and open questions.

*How the paper uses it:* This is the official asynchronous talk by the paper's authors at Crypto 2026, presenting their work on weighted cryptography with weight-independent complexity.

▶ [Weighted Cryptography with Weight-Independent Complexity (Crypto 2026)](https://www.youtube.com/watch?v=7gEBimpg6MU) — IACR · 20:38 · 2 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on weighted cryptography with weight-independent complexity, start by grasping the foundational cryptographic assumptions, especially the Learning With Errors (LWE) problem, which underpins the security of the constructions. Next, learn about linearly homomorphic encryption schemes, as these are key primitives used to enable the novel secret sharing scheme. Then, explore weighted threshold cryptography to understand the motivation and application context of weighted access structures. Finally, study computational secret sharing with linear homomorphism, the core technical innovation enabling weight-independent complexity in the paper's protocols.

### Learning With Errors assumption *(prerequisite)*
The Learning With Errors (LWE) problem is a fundamental cryptographic assumption that involves solving noisy linear equations and is widely used to build secure cryptographic schemes resistant to quantum attacks. Understanding LWE provides insight into the security foundations of modern lattice-based cryptography.

*How the paper uses it:* The paper's constructions rely on standard assumptions including LWE for instantiating their secret sharing and encryption schemes.

▶ [The Learning With Errors Problem and Cryptographic Applications](https://www.youtube.com/watch?v=K_fNK04yG4o) — Simons Institute for the Theory of Computing · Streamed 6 years ago

### Linearly homomorphic encryption schemes *(prerequisite)*
Linearly homomorphic encryption allows computations on encrypted data such that the encryption of a sum equals the sum of encryptions, enabling secure aggregation without decryption. This property is crucial for building efficient cryptographic protocols that support operations on shared secrets.

*How the paper uses it:* The authors replace encryptions in Yao's scheme with a specially designed linearly homomorphic encryption scheme to achieve linear homomorphism in their secret sharing.

▶ [Paillier Encryption Scheme | Homomorphic Encryption Algorithm | E-Votin](https://www.youtube.com/watch?v=sArUxdFnCyo) — Dr. Majid Khan Mathematics Waley · 17:32 · 6 years ago

### Weighted threshold cryptography *(prerequisite)*
Weighted threshold cryptography generalizes traditional threshold schemes by assigning different weights to parties, reflecting varying trust or stake, and defining access based on total weight rather than number of parties. This better models real-world scenarios like stake-based blockchains and weighted voting.

*How the paper uses it:* The paper addresses the challenge of designing weighted cryptosystems whose complexity does not depend on the total weights, improving scalability and practicality.

▶ [From Theory to Practice - Threshold Cryptography](https://www.youtube.com/watch?v=nPY6th76IbM) — Simons Institute for the Theory of Computing · 1:05:39 · 6 years ago

### Computational secret sharing with linear homomorphism
Computational secret sharing schemes distribute a secret among parties such that only authorized sets can reconstruct it, and linear homomorphism allows combining shares linearly to compute on secrets without revealing them. This enables efficient multiparty computation and threshold cryptography with advanced access structures.

*How the paper uses it:* The core contribution is a new computational secret sharing scheme with linear homomorphism for weighted threshold access structures that achieves weight-independent complexity.

▶ [Threshold Secret Sharing- Gilad Asharov](https://www.youtube.com/watch?v=5tDp_-Nf7nU) — The BIU Research Center on Applied Cryptography and Cyber Security · 1:01:53 · 6 years ago

## Already in your library

- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Lec 11 Shamir Secret-Sharing](https://www.youtube.com/watch?v=EwazKH7X0FI) — also for: Time-lock puzzles and timed-release Crypto (Ron Rivest)
- [Secret Sharing Explained Visually](https://www.youtube.com/watch?v=iFY5SyY3IMQ) — also for: Disincentivize Collusion in Verifiable Secret Sharing (Hemanta K. Maji)
- [Homomorphic Encryption from Ring Learning with Errors](https://www.youtube.com/watch?v=Dm7GI_8L4dA) — also for: From Lattices to Tensor Cores: Accelerating Private Information Retrieval (David J. Wu)
- [Learning With Errors explained](https://www.youtube.com/watch?v=RprEgcwiCFc) — also for: Adaptively-Secure Flexible and Identity-Based Broadcast Encryption from Decomposed LWE (Rishab Goyal)
- [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)
- [Learning With Errors (LWE) [Post-Quantum Cryptography Explained]](https://www.youtube.com/watch?v=7sp2-W9j2OQ) — also for: SNARGs for NP from Unprovability of Mathematical Theorems (Or: How to use the simplicity of cryptographic reasoning) (Abhishek Jain)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Fully Homomorphic Encryption I](https://www.youtube.com/watch?v=xlcb_G1_rzk) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Fully Homomorphic Encryption II](https://www.youtube.com/watch?v=iER9RkD05Oc) — also for: From Lattices to Tensor Cores: Accelerating Private Information Retrieval (David J. Wu)
- [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Weighted Cryptography with Weight-Independent Complexity." Starting from a basic simulation of the core secret sharing primitive, progressing to implementing a weighted secure multiparty computation protocol, and culminating in extending the weighted threshold encryption scheme to reduce interaction rounds, each project ties directly to a key contribution or limitation of the paper. They leverage your existing software engineering skills while introducing cryptographic concepts and practical protocol design.

### Beginner — Simulate Weighted Computational Secret Sharing
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the paper's computational secret sharing scheme for weighted threshold access structures. The simulation models parties with assigned weights and demonstrates secret sharing and reconstruction with complexity independent of total weights, including a basic demonstration of linear homomorphism on shared secrets.

**Why it shows you understood the paper:** This project shows you grasp the core primitive of the paper — the novel secret sharing scheme with weight-independent complexity and linear homomorphism — by faithfully reproducing its key mechanism in a simplified form.

**Grounded in:** Computational secret sharing scheme whose computation and communication scale polynomially with the number of parties but are independent of total weights (Theorem 1).

**Tech stack:** Python 3.11

**Data:** Simulated synthetic data representing parties with integer weights and secrets to share; no external dataset required.

**Build it:**

1. Implement a data structure to represent parties with weights and a secret sharing interface.
2. Simulate secret sharing of a value among parties according to a weighted threshold access structure.
3. Implement secret reconstruction that verifies the threshold is met by total weight, independent of total weights.
4. Demonstrate linear homomorphism by adding two shared secrets and reconstructing the sum.
5. Write tests and a README explaining the weight-independent complexity concept.

**Ships as:** A Python repository with code simulating weighted secret sharing and reconstruction, test cases, and a README explaining the scheme and its weight-independent complexity.

**Stretch goal:** Add noise and smudging simulation to illustrate privacy and correctness handling as described in the paper.

### Intermediate — Implement Weighted Secure Multiparty Computation Protocol
*Effort: 2 weekends, ~20 hours*

You implement a prototype of the paper's weighted secure multiparty computation (MPC) protocol in the f_cor-hybrid model. The implementation supports a small number of parties with assigned weights, demonstrating guaranteed output delivery and complexity independent of total weights. You compare your implementation's communication complexity against a naive weighted MPC baseline that scales with total weights.

**Why it shows you understood the paper:** This project shows you can apply the paper's core method beyond secret sharing to a full weighted MPC protocol, reproducing its key performance claim and understanding the protocol's structure and guarantees.

**Grounded in:** Weighted MPC protocol in the f_cor-hybrid model achieving guaranteed output delivery against malicious adversaries with weight-independent complexity (Theorem 2).

**Tech stack:** Python 3.11, asyncio

**Data:** Synthetic inputs generated for MPC parties; no external dataset required.

**Build it:**

1. Reimplement the computational secret sharing scheme from the beginner project as a library module.
2. Design and implement a simple weighted MPC protocol that uses the secret sharing primitive for input sharing, computation, and output reconstruction.
3. Implement a naive weighted MPC baseline where complexity scales with total weights for comparison.
4. Measure and compare communication and computation costs for both protocols as number of parties and weights vary.
5. Document the protocol design, complexity results, and comparison in a README.

**Ships as:** A Python package implementing weighted MPC and a naive baseline, scripts to run experiments, and a report README comparing complexity scaling.

**Stretch goal:** Extend the protocol to support a small monotone Boolean circuit access structure instead of just weighted thresholds.

### Advanced — Reduce Interaction in Weighted Threshold Encryption Scheme
*Effort: 3+ weeks*

You develop an extension to the paper's weighted threshold encryption scheme aiming to reduce the two-round interactive partial decryption protocol to a single round or non-interactive protocol. This addresses one of the paper's stated limitations. You design, implement, and evaluate your modified protocol for semi-honest security, analyzing trade-offs in complexity and security.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's weighted threshold encryption scheme and its limitations, and shows your ability to innovate by tackling an open problem posed by the authors.

**Grounded in:** Weighted threshold encryption scheme requires a two-round interactive partial decryption protocol rather than non-interactive decryption (Limitation).

**Tech stack:** Python 3.11, cryptography library

**Data:** Synthetic test inputs for encryption and decryption; no external dataset required.

**Build it:**

1. Study the paper's weighted threshold encryption scheme and its two-round partial decryption protocol in detail.
2. Research existing techniques for non-interactive or single-round threshold decryption in related cryptographic literature.
3. Design a modified weighted threshold encryption scheme that reduces interaction rounds while preserving semi-honest security.
4. Implement the modified scheme and compare its communication and computation costs against the original two-round protocol.
5. Write a detailed report discussing design decisions, security considerations, and performance trade-offs.

**Ships as:** A Python implementation of the modified weighted threshold encryption scheme, experimental evaluation scripts, and a comprehensive README/report.

**Stretch goal:** Explore extending the scheme to stronger adversarial models or removing the trusted setup assumption as future work.
