---
title: "1024 · Anonymous Credentials from ECDSA — Abhi Shelat"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-abhi-shelat"
source_hash: "d36027862478f47dfadd0b3935ef6dea4bfcf6909c76ab3df07411728141ff5d"
sequence: 1024
generator: "outreach-garden: managed"
---

# 1024 · Anonymous Credentials from ECDSA

## At a glance

- **Professor:** Abhi Shelat
- **Institution:** Northeastern University
- **Paper:** [Anonymous Credentials from ECDSA](https://cic.iacr.org/p/3/1/7/pdf)
- **Authors:** Matteo Frigo, abhi shelat
- **Year:** 2025

## Paper overview

This paper presents a new method to create anonymous digital credentials using the widely deployed ECDSA signature scheme. These credentials allow users to prove possession of attributes (like being over 18) without revealing additional personal information. The approach overcomes previous deployment challenges by enabling zero-knowledge proofs for ECDSA signatures without requiring changes to existing issuer infrastructure or mobile devices. The system is efficient enough to run on mobile devices and relies only on standard cryptographic assumptions like SHA256.

### Why it matters

**Research problem:** Existing anonymous credential schemes often require new cryptographic primitives or hardware changes, making them difficult to deploy at scale. Proving possession of ECDSA signatures in zero-knowledge is challenging due to the lack of efficient number theoretic transforms on standardized elliptic curves, and existing solutions have high computational overhead or require trusted setups.

**Why it matters:** Anonymous credentials are crucial for privacy-preserving authentication, allowing users to prove attributes without revealing unnecessary personal data. However, deployment barriers limit their adoption in real-world systems like mobile driver licenses or digital identity wallets. Overcoming these barriers enables scalable, privacy-enhancing identity solutions compatible with existing infrastructure.

**Key contributions:**

- Construction of an efficient zero-knowledge proof of knowledge for ECDSA signatures relying only on SHA256 security assumptions.
- Design of an NTT in a quadratic field extension to enable efficient polynomial operations over fields without roots of unity.
- Novel Reed-Solomon encoding exploiting subfield structures to reduce proof sizes.
- Specialized circuits for verifying ECDSA signatures, SHA256 preimages, and parsing ISO-standardized identity document formats.
- A witness consistency protocol to prove consistency of witnesses across proofs over different fields.

## About the professor

**Abhi Shelat** — Professor, Khoury College of Computer Sciences, Northeastern University.

Research interests: computer security and cryptography, secure computation protocols, zero-knowledge protocols, verifiable computation

### Research links

- [Faculty/profile page](https://shelat.khoury.northeastern.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Zero-Knowledge Proofs
**The paper assumes:** zero-knowledge proofs, interactive proof systems, cryptographic protocols, and complexity assumptions
**Already in this field?** Skip this entirely if you already have a solid understanding of zero-knowledge proofs and their cryptographic foundations.

This background prepares the reader to understand the advanced zero-knowledge proof techniques used in the paper, especially the construction of efficient zero-knowledge proofs for ECDSA signatures relying on sumcheck and Ligero protocols. The rigorous course offers a deep, structured university-level introduction to zero-knowledge proofs, while the fast track provides a concise, intuition-focused overview suitable for quickly grasping the core concepts without extensive time commitment. Choose the lane that fits your available time and prior familiarity with cryptography.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Zero Knowledge Proofs MOOC Spring 2023](https://www.youtube.com/playlist?list=PLS01nW3Rtgor_yJmQsGBZAg5XM4TSGpPs) — Berkeley RDI · 18 videos

**Watch only this:** Lectures 1-6, about 5 hours — covering introduction, basic zero-knowledge definitions, interactive proofs, and sumcheck protocol, which are essential to understand the paper's proof construction.

*Why it unblocks this paper:* This Berkeley RDI course is a rigorous university-level lecture series specifically on zero-knowledge proofs, covering foundational theory and advanced protocols, which aligns well with the paper's reliance on zero-knowledge proof systems like sumcheck and Ligero.

*If you want all of it:* All 18 lectures, approximately 15-18 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Foundations and Applications of Zero-Knowledge Proofs](https://www.youtube.com/playlist?list=PLUbgZHsSoMEXiRHekPzXKvlQOr74Ik4mX) — International Centre for Mathematical Sciences · 18 videos

**Watch only this:** Episodes 1-5, about 2.5 hours — covering the basics of zero-knowledge proofs, their motivation, and core techniques relevant to the paper's approach.

*Why it unblocks this paper:* This International Centre for Mathematical Sciences playlist offers clear, concise explainers on the foundations and applications of zero-knowledge proofs, providing an accessible overview of the key concepts needed to grasp the paper's contributions without deep technical prerequisites.

*If you want all of it:* All 18 episodes, approximately 9 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Anonymous Credentials from ECDSA," start by building a strong foundation on the ECDSA signature scheme, as it is the cryptographic primitive the paper focuses on. Next, study the sumcheck protocol and Ligero proof system, which are key zero-knowledge proof techniques combined in the paper's construction. Then, learn about Reed-Solomon codes and polynomial encoding, which optimize proof sizes and efficiency. Finally, focus on the paper's core concept by watching the authors' own talks and related advanced presentations on zero-knowledge proofs for signatures, especially those by Professor Abhi Shelat, to grasp the novel integration of these techniques for anonymous credentials.

### ECDSA signature scheme *(prerequisite)*
ECDSA is the underlying digital signature scheme for which the paper constructs zero-knowledge proofs. Understanding its mathematical structure and signature generation/verification process is essential to appreciate the challenges and innovations in proving knowledge of ECDSA signatures anonymously.

*How the paper uses it:* The paper builds zero-knowledge proofs specifically for ECDSA signatures, so understanding ECDSA is foundational.

▶ [The Elliptic Curve Digital Signature Algorithm (ECDSA) — Don Johnson et al.](https://www.youtube.com/watch?v=bmQr7LBbQiw) — Neural Casts · 3w ago

### Sumcheck protocol *(prerequisite)*
The sumcheck protocol is a fundamental interactive proof technique used to verify polynomial sums efficiently. The paper leverages sumcheck as a core component in its zero-knowledge proof construction, making it crucial to understand its intuition and mechanics.

*How the paper uses it:* The authors combine sumcheck protocols with Ligero to achieve efficient zero-knowledge proofs without trusted setup.

▶ [The intuition behind the sumcheck protocol in 5 minutes](https://www.youtube.com/watch?v=XV62OB022tU) — David Wong · 3y ago

### Reed-Solomon codes and polynomial encoding *(prerequisite)*
Reed-Solomon codes are used in the paper to optimize proof sizes and enable efficient polynomial operations over fields without roots of unity. A solid understanding of their encoding process and error-correcting properties is important to appreciate the paper's technical contributions.

*How the paper uses it:* The authors design novel Reed-Solomon encoding methods exploiting subfield structures to reduce proof sizes.

▶ [Encoding of Reed Solomon Codes](https://www.youtube.com/watch?v=FS503xdAg8U) — H.B. Ghorpade · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper's authors provide the most precise and insightful explanations of their novel zero-knowledge proof construction for ECDSA and its applications to anonymous credentials. These talks often include motivation, technical details, and future directions.

*How the paper uses it:* Professor Abhi Shelat co-authored the paper and has given talks explaining the research and its significance.

▶ [Privacy-Preserving Digital Identity with Abhi Shelat | a16z crypto Research Series](https://www.youtube.com/watch?v=_vHRFtNuwCo) — a16z Frontier · 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on anonymous credentials from ECDSA, start by learning the foundational ECDSA signature scheme since it is the cryptographic basis of the work. Next, build intuition on the sumcheck protocol and Ligero proof system, which are key zero-knowledge proof techniques combined in the paper. Then, study Reed-Solomon codes to grasp how polynomial encoding optimizes proof sizes. Finally, explore zero-knowledge proofs for signatures to see how these concepts come together to enable anonymous credential proofs without revealing secrets.

### ECDSA signature scheme *(prerequisite)*
ECDSA is a widely used digital signature scheme based on elliptic curve cryptography. Understanding how ECDSA works will give you the foundation to appreciate how the paper constructs zero-knowledge proofs for these signatures. This includes how signatures are generated and verified using elliptic curves and hash functions.

*How the paper uses it:* The paper builds zero-knowledge proofs on top of the legacy ECDSA signature scheme.

▶ [V8e: Elliptic Curve Digital Signature Algorithm (ECDSA) (Applied Cryptography 101)](https://www.youtube.com/watch?v=mhUcjCV4ih8) — Cryptography 101 · 1y ago

### Sumcheck protocol *(prerequisite)*
The sumcheck protocol is an interactive proof technique that allows a prover to convince a verifier that the sum of a polynomial over a domain equals a claimed value, without revealing the polynomial itself. This protocol is a building block for zero-knowledge proofs and is used in the paper to efficiently prove polynomial relations.

*How the paper uses it:* The authors combine sumcheck protocols with Ligero to efficiently prove knowledge of ECDSA signatures.

▶ [The intuition behind the sumcheck protocol in 5 minutes](https://www.youtube.com/watch?v=XV62OB022tU) — David Wong · 3y ago

### Reed-Solomon codes and polynomial encoding *(prerequisite)*
Reed-Solomon codes are error-correcting codes that encode data as polynomials over finite fields. They enable efficient polynomial operations and are used in zero-knowledge proofs to reduce proof sizes and improve verification. Learning about these codes provides insight into the paper's optimization techniques.

*How the paper uses it:* The authors design novel Reed-Solomon encoding methods to reduce proof sizes in their zero-knowledge system.

▶ [Encoding of Reed Solomon Codes](https://www.youtube.com/watch?v=FS503xdAg8U) — H.B. Ghorpade · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides valuable insights into their motivations, challenges, and design choices in constructing anonymous credentials from ECDSA. This talk can contextualize the technical content and highlight real-world applications.

*How the paper uses it:* Direct insight from the authors on their novel zero-knowledge proof construction for ECDSA.

▶ [Privacy-Preserving Digital Identity with Abhi Shelat | a16z crypto Research Series](https://www.youtube.com/watch?v=_vHRFtNuwCo) — a16z Frontier · 5mo ago

## Already in your library

- [Anonymous Credentials from ECDSA (RWC 2025)](https://www.youtube.com/watch?v=G52iNwkrF8E) — also for: Anonymous Credentials from ECDSA (Abhi Shelat)
- [Zero-Knowledge Proofs Explained: How ZK Technology Works 2026](https://www.youtube.com/watch?v=jdkjuiNtLiQ) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)
- [Zero Knowledge Proofs](https://www.youtube.com/watch?v=5qzNe1hk0oY) — also for: Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations (Dan Boneh)
- [Lecture 1: Interactive Proofs and the Sum-Check Protocol, Part 1](https://www.youtube.com/watch?v=iqSMRO78UD0) — also for: Anonymous Credentials from ECDSA (Abhi Shelat)
- [Zero Knowledge Ideal Functionality - Muthu Venkitasubramaniam, Ligero & University of Rochester](https://www.youtube.com/watch?v=J4NSJDiTeKs) — also for: Anonymous Credentials from ECDSA (Abhi Shelat)
- [Lecture 20: Reed-Solomon Codes](https://www.youtube.com/watch?v=OapnQzIDBM0) — also for: List Decoding and Property Testing of Error Correcting Codes (Atri Rudra)
- [Reed Solomon Encoding - Intuitive/Simplified](https://www.youtube.com/watch?v=3HRIeWYbIuI) — also for: Improved Pseudorandom Codes from Permuted Puzzles (Daniel Wichs)
- [Lecture 4, Video 4: Reed-Solomon Codes!](https://www.youtube.com/watch?v=yQkEnde2lNg) — also for: List Decoding and Property Testing of Error Correcting Codes (Atri Rudra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Anonymous Credentials from ECDSA." Starting with a basic implementation of zero-knowledge proof concepts for ECDSA signatures, you then build on the authors' open-source system to reproduce and benchmark core performance metrics. Finally, you extend the approach to address a stated limitation by exploring support for another signature scheme, gaining experience with adapting zero-knowledge proof techniques beyond ECDSA.

### Beginner — ECDSA Signature Verification with Basic Zero-Knowledge Proof
*Effort: a weekend, ~8 hours*

You implement a simplified zero-knowledge proof protocol that demonstrates knowledge of an ECDSA signature on a given message without revealing the signature itself. This project focuses on understanding the core cryptographic primitives involved in ECDSA and zero-knowledge proofs by building a minimal prototype that verifies signature possession.

**Why it shows you understood the paper:** This project shows you grasp the fundamental challenge the paper addresses: proving possession of ECDSA signatures in zero-knowledge. A professor would see you understand ECDSA signature structure and the concept of zero-knowledge proofs applied to it, even if not at the paper's full efficiency or complexity.

**Grounded in:** Construction of an efficient zero-knowledge proof of knowledge for ECDSA signatures relying only on SHA256 security assumptions.

**Tech stack:** Python 3.11, ecdsa Python library, PyCryptodome, Jupyter Notebook

**Data:** Use synthetic ECDSA key pairs and signatures generated locally with standard libraries; no external dataset required.

**Build it:**

1. Generate an ECDSA key pair and sign a sample message using Python's ecdsa library.
2. Implement a basic zero-knowledge proof protocol that proves knowledge of the signature without revealing it, using hash commitments and challenge-response.
3. Write verification code that confirms the proof without learning the signature.
4. Document the protocol steps and demonstrate correctness with example runs.

**Ships as:** A GitHub repo with Python scripts and a Jupyter notebook demonstrating the zero-knowledge proof of ECDSA signature knowledge on sample messages, with clear README explaining the approach.

**Stretch goal:** Add a simple selective disclosure feature to prove possession of a signature on a message containing multiple attributes, revealing only one attribute.

### Intermediate — Reproduce and Benchmark the Longfellow-ZK ECDSA Proof System
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' open-source implementation of their zero-knowledge proof system for ECDSA signatures from https://github.com/google/longfellow-zk. You reproduce the reported proof generation times (~20ms) and benchmark the system on a small set of ECDSA signatures. You also compare the performance against a baseline zero-knowledge proof system for ECDSA such as the circom-ecdsa circuit from https://github.com/0xPARC/circom-ecdsa.

**Why it shows you understood the paper:** This project demonstrates your ability to work with complex cryptographic codebases and reproduce key performance results from the paper. It shows you understand the integration of sumcheck and Ligero proof systems and the practical efficiency gains achieved.

**Grounded in:** Proof generation for ECDSA signatures can be done in approximately 20 milliseconds.

**Tech stack:** Python 3.11, Bazel or C++ build tools (as required by longfellow-zk), Node.js (for circom-ecdsa baseline), Linux or macOS environment

**Data:** Generate or reuse small sets of ECDSA signatures on test messages using standard cryptographic libraries; no external dataset needed.

**Build it:**

1. Clone https://github.com/google/longfellow-zk and follow build instructions to compile and run the proof generation.
2. Generate sample ECDSA signatures using standard tools and feed them into the proof system.
3. Measure and record proof generation times and verify correctness.
4. Clone https://github.com/0xPARC/circom-ecdsa and set up the baseline zero-knowledge proof system.
5. Run comparable benchmarks on the baseline and compare results in a report.
6. Write a README summarizing your findings and reproductions.

**Verified links from the paper:**

- <https://github.com/google/longfellow-zk> — released by the paper's authors
- <https://github.com/0xPARC/circom-ecdsa> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts to run the longfellow-zk system and circom-ecdsa baseline, benchmark results, and a report comparing proof generation times and resource usage.

**Stretch goal:** Extend the benchmark to measure proof verification times and discuss the trade-offs between prover and verifier efficiency.

### Advanced — Extending Zero-Knowledge Proofs to Support EdDSA Signatures
*Effort: 3+ weeks*

You design and implement an extension of the zero-knowledge proof techniques from the paper to support EdDSA (Edwards-curve Digital Signature Algorithm) signatures, addressing the paper's limitation of focusing only on ECDSA. This involves adapting the sumcheck and Ligero proof systems and the witness consistency protocol to the EdDSA signature scheme and its hash function (SHA512). You evaluate the performance and discuss challenges compared to ECDSA.

**Why it shows you understood the paper:** This project tackles a future direction explicitly mentioned in the paper: applying the techniques to other standardized signature schemes. It shows deep comprehension of the paper's methods and the ability to generalize and innovate beyond the original scope.

**Grounded in:** The approach currently focuses on ECDSA and SHA256; extending to other signature schemes or hash functions may require additional work.

**Tech stack:** Python 3.11, Rust or C++ (for performance-critical proof components), Cryptography libraries supporting EdDSA (e.g., libsodium), Build tools for Ligero and sumcheck protocol implementations

**Data:** Synthetic EdDSA key pairs and signatures generated locally; no external dataset required.

**Build it:**

1. Study the EdDSA signature scheme and its verification algorithm, focusing on differences from ECDSA.
2. Analyze the paper's zero-knowledge proof construction for ECDSA and identify components dependent on ECDSA specifics.
3. Adapt the sumcheck and Ligero proof system circuits to implement EdDSA signature verification and SHA512 hashing.
4. Implement a witness consistency protocol for the new finite fields and hash function.
5. Benchmark proof generation and verification times on sample EdDSA signatures.
6. Document challenges, performance trade-offs, and potential improvements.

**Verified links from the paper:**

- <https://github.com/google/longfellow-zk> — released by the paper's authors

**Ships as:** A GitHub repository containing the adapted zero-knowledge proof system supporting EdDSA, benchmark results, and a detailed README explaining the design and evaluation.

**Stretch goal:** Explore integrating zero-knowledge revocation mechanisms for the EdDSA-based anonymous credentials.
