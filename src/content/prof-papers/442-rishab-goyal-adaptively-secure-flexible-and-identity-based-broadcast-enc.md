---
title: "442 · Adaptively-Secure Flexible and Identity-Based Broadcast Encryption from Decomposed LWE — Rishab Goyal"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rishab-goyal"
source_hash: "c8c0fea59e3c08894751eb9169cbe42097aea37c0837138207246416b9e8f194"
sequence: 442
generator: "outreach-garden: managed"
---

# 442 · Adaptively-Secure Flexible and Identity-Based Broadcast Encryption from Decomposed LWE

## At a glance

- **Professor:** Rishab Goyal
- **Institution:** University of Wisconsin - Madison
- **Paper:** [Adaptively-Secure Flexible and Identity-Based Broadcast Encryption from Decomposed LWE](https://eprint.iacr.org/2026/862)
- **Authors:** Rishab Goyal, Saikumar Yadugiri
- **Year:** 2026

## Paper overview

This paper presents new cryptographic schemes for broadcast encryption that allow a sender to securely send messages to any chosen subset of recipients. The schemes are post-quantum secure, adaptively secure, and have parameters independent of the number of users. They address two important models: flexible broadcast encryption (FBE), where users generate and register keys asynchronously without coordination, and identity-based broadcast encryption (IBBE), where a trusted authority issues keys for identities from a very large space. The constructions rely on a new lattice-based assumption called decomposed LWE and introduce a novel equivocal matrix commitment primitive to achieve adaptive security and scalability.

### Why it matters

**Research problem:** Designing broadcast encryption schemes that are adaptively secure, have optimal succinctness (parameter sizes independent of the number of users), and are based on falsifiable post-quantum assumptions. Prior work achieved this only for bounded user sets with a slotted structure, leaving open the challenge of unbounded, flexible, and identity-based broadcast encryption.

**Why it matters:** Broadcast encryption is fundamental for secure multi-recipient communication with succinct ciphertexts, critical for applications like media distribution, cloud storage, and IoT. With the advent of quantum computing, post-quantum secure schemes are urgently needed. Achieving adaptive security and scalability without trusted setups or user coordination is a major open problem in cryptography.

**Key contributions:**

- First adaptively secure flexible broadcast encryption scheme with parameters independent of the number of users and a transparent setup.
- First adaptively secure identity-based broadcast encryption scheme under falsifiable post-quantum assumptions with parameters independent of the number of identities.
- Introduction of the Equivocal Matrix Commitment primitive enabling adaptive equivocation in lattice-based schemes.
- Extension and formalization of a stronger equivocal encryption framework with an explicit key simulation interface.
- Demonstration of public-key aggregation techniques to achieve encryption and decryption times independent of recipient set size.

## About the professor

**Rishab Goyal** — Assistant Professor, Computer Sciences Department, University of Wisconsin - Madison.

Research interests: Cryptography and Computer Security

### Research links

- [Faculty/profile page](https://pages.cs.wisc.edu/~rishab/bio.html)
- [Identity evidence](https://pages.cs.wisc.edu/~rishab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Lattice-Based Cryptography
**The paper assumes:** lattice-based cryptography, Learning With Errors problem, trapdoor sampling techniques, lattice trapdoors, post-quantum cryptography
**Already in this field?** Skip this entirely if you already have a solid understanding of lattice-based cryptography and the Learning With Errors problem.

This background is essential for understanding the lattice-based cryptographic foundations, especially the Learning With Errors (LWE) problem and related constructions, which underpin the paper's novel broadcast encryption schemes. The rigorous course offers a deep, structured university-level introduction to lattices and lattice-based cryptography, ideal for thorough comprehension. The fast track provides a concise, accessible overview of lattice-based cryptography and LWE, suitable for quickly grasping the core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [An Introduction to Lattices, Lattice Reduction, and Lattice-Based Cryptography | Joseph H. Silverman, Brown University](https://www.youtube.com/playlist?list=PLldN_DpkXL3Zp0fZEUKpMq3H0JBGBFXvO) — IAS | PCMI Park City Mathematics Institute · 18 videos · 4.8h across 18 episodes

**Watch only this:** Lectures #1 part 1, 2, and 3 (Lattices and Hard Lattice Problems), Lectures #2 part 1 and 2 (Lattice Reduction), and Lectures #4 part 1 and 2 (Lattice-Based Public Key Cryptosystems), about 2.5 hours total — this subset covers the core lattice concepts, LWE problem, and lattice-based encryption relevant to the paper.

*Why it unblocks this paper:* This is a university lecture series by Joseph H. Silverman from Brown University, covering lattices, lattice reduction, and lattice-based cryptography in detail, including public key cryptosystems and digital signatures. It directly addresses the mathematical and cryptographic foundations needed to understand the decomposed LWE assumption and lattice-based primitives used in the paper.

*If you want all of it:* Approximately 4.8 hours across all 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [The Mathematics of Lattice-Based Cryptography](https://www.youtube.com/playlist?list=PLA1qgQLL41STNFDvPJRqrHtuz0PIEJ4a8) — Cryptography 101 · 7 videos · 2.5h across 7 episodes

**Watch only this:** Lectures 1 through 3 (Introduction, SIS Problem, and LWE Problem), about 1 hour total — these lectures cover the essential mathematical problems underlying the paper's cryptographic schemes.

*Why it unblocks this paper:* This concise series from Cryptography 101 focuses on the mathematics of lattice-based cryptography, including the SIS and LWE problems, which are central to the paper's assumptions and constructions. It provides a clear, focused introduction suitable for quickly gaining the necessary background.

*If you want all of it:* Approximately 2.5 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Adaptively-Secure Flexible and Identity-Based Broadcast Encryption from Decomposed LWE," start by building a strong foundation in the Learning With Errors (LWE) assumption and its variants, which underpin the paper's post-quantum security. Next, explore the key cryptographic techniques used such as adaptive security in broadcast encryption, identity-based encryption with trapdoors, and public-key aggregation methods. Finally, focus on the paper's core novel contribution: the Equivocal Matrix Commitment primitive and the authors' own talk to grasp their new constructions and proofs.

### Decomposed Learning With Errors assumption *(prerequisite)*
Understanding the decomposed LWE assumption is crucial as it forms the hardness basis for the paper's post-quantum secure constructions. The selected talk from the Simons Institute provides a rigorous and research-level treatment of LWE and related lattice problems, suitable for advanced readers.

*How the paper uses it:* The paper's security proofs rely on the decomposed LWE assumption as the foundational hardness assumption.

▶ [An Odyssey of Lattice Cryptography with Mark Schultz-Wu](https://www.youtube.com/watch?v=1ey89_kW_1g) — Security Cryptography Whatever · 1:17:10 · 2 weeks ago

### Adaptive security in broadcast encryption *(prerequisite)*
Adaptive security is a key security notion achieved by the paper's constructions, ensuring robustness against adversaries who adaptively choose recipients. The talk by Hoeteck Wee at the Simons Institute covers optimal broadcast encryption under lattice assumptions and discusses adaptive security, providing a deep theoretical context.

*How the paper uses it:* The paper achieves adaptive security in flexible and identity-based broadcast encryption schemes.

▶ [Optimal Broadcast Encryption and More from Evasive LWE](https://www.youtube.com/watch?v=AFmQkJc4uTw) — Simons Institute for the Theory of Computing · 46:00 · Streamed 4 years ago

### Identity-based encryption with trapdoors *(prerequisite)*
Trapdoor functions for lattices enable efficient secret key extraction for arbitrary identities, a technique leveraged in the paper's identity-based broadcast encryption scheme. The Eurocrypt 2012 talk by Micciancio and Peikert is a seminal and rigorous presentation on lattice trapdoors, ideal for advanced understanding.

*How the paper uses it:* The IBBE scheme uses dual-mode key generation enabled by trapdoors for secret key extraction.

▶ [Trapdoors for Lattices: Simpler, Tighter, Faster, Smaller.](https://www.youtube.com/watch?v=o2Dv5uAwQRQ) — IACR · 26:33 · 14 years ago

### Public-key aggregation techniques *(prerequisite)*
Public-key aggregation reduces encryption and decryption complexity independent of recipient set size, a practical efficiency technique used in the paper. The MIT OpenCourseWare lecture on RSA public key encryption provides a rigorous foundation on public-key cryptography necessary to appreciate aggregation methods.

*How the paper uses it:* The paper demonstrates public-key aggregation to achieve runtime independent of recipient set size.

▶ [2.4.1 RSA Public Key Encryption: Video](https://www.youtube.com/watch?v=ZUZ8VbX1YNQ) — MIT OpenCourseWare · 21:45 · 9 years ago

### Equivocal matrix commitments
Equivocal Matrix Commitments are the core new primitive introduced by the paper to enable adaptive equivocation in lattice-based broadcast encryption schemes. While no direct talk on this exact primitive exists, the lattice cryptography tutorial by Chris Peikert provides foundational knowledge on lattice-based primitives and commitments, which is essential to understand the paper's novel construction.

*How the paper uses it:* The paper introduces Equivocal Matrix Commitments as a strengthening of matrix commitments enabling adaptive equivocation.

▶ [Chris Peikert - Lattice Cryptography for the Internet](https://www.youtube.com/watch?v=uycY1O9f2Nw) — Institute for Quantum Computing · 24:58 · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building a foundation in the Learning With Errors (LWE) problem, which underpins the paper's post-quantum security assumptions. Next, learn about adaptive security in broadcast encryption to grasp the security goals the paper achieves. Then, study identity-based encryption with trapdoors to understand key extraction techniques used in the identity-based scheme. After that, explore public-key aggregation techniques that enable efficient encryption and decryption independent of recipient set size. Finally, focus on the core new primitive introduced by the paper, Equivocal Matrix Commitments, which enable adaptive equivocation in lattice-based broadcast encryption.

### Decomposed Learning With Errors assumption *(prerequisite)*
Learning With Errors (LWE) is a fundamental problem in lattice-based cryptography that provides post-quantum security. Understanding LWE involves grasping how adding small errors to linear equations creates hard problems for attackers, forming the basis for secure encryption schemes.

*How the paper uses it:* The paper's security relies on the hardness of the decomposed LWE assumption, a variant of LWE tailored for their constructions.

▶ [Learning With Errors explained](https://www.youtube.com/watch?v=RprEgcwiCFc) — Security and Privacy Academy · 4:55 · 2 years ago

### Adaptive security in broadcast encryption *(prerequisite)*
Adaptive security ensures that an encryption scheme remains secure even when an attacker can choose which users to attack based on observed ciphertexts. In broadcast encryption, this means protecting messages sent to dynamically chosen recipient sets against adaptive adversaries.

*How the paper uses it:* The paper achieves adaptive security in flexible and identity-based broadcast encryption schemes, a key advancement over prior work.

▶ [Optimal Broadcast Encryption and More from Evasive LWE](https://www.youtube.com/watch?v=AFmQkJc4uTw) — Simons Institute for the Theory of Computing · 46:00 · Streamed 4 years ago

### Identity-based encryption with trapdoors *(prerequisite)*
Identity-based encryption allows users' identities to serve as public keys, simplifying key management. Trapdoors are secret pieces of information that enable efficient extraction of secret keys for arbitrary identities, crucial for identity-based schemes.

*How the paper uses it:* The paper's identity-based broadcast encryption scheme uses trapdoor-enabled dual-mode key generation for secret key extraction.

▶ [Trapdoors for Lattices: Simpler, Tighter, Faster, Smaller.](https://www.youtube.com/watch?v=o2Dv5uAwQRQ) — IACR · 26:33 · 14 years ago

### Public-key aggregation techniques *(prerequisite)*
Public-key aggregation combines multiple public keys into a single compact representation, enabling encryption and decryption operations whose complexity does not grow with the number of recipients. This technique improves efficiency in multi-recipient encryption.

*How the paper uses it:* The paper uses public-key aggregation to achieve encryption and decryption times independent of the recipient set size.

▶ [Asymmetric Encryption - Simply explained](https://www.youtube.com/watch?v=AQDCe585Lnc) — Simply Explained · 4:40 · 8 years ago

### Equivocal matrix commitments
Equivocal matrix commitments are cryptographic primitives that allow committing to a matrix while retaining the ability to adaptively 'equivocate' or change the committed value to any valid matrix later. This property is crucial for achieving adaptive security in lattice-based broadcast encryption.

*How the paper uses it:* The paper introduces Equivocal Matrix Commitments as a core primitive enabling adaptive equivocation in their schemes.

▶ [Chris Peikert - Lattice Cryptography for the Internet](https://www.youtube.com/watch?v=uycY1O9f2Nw) — Institute for Quantum Computing · 24:58 · 11 years ago

## Already in your library

- [Learning With Errors (LWE) [Post-Quantum Cryptography Explained]](https://www.youtube.com/watch?v=7sp2-W9j2OQ) — also for: SNARGs for NP from Unprovability of Mathematical Theorems (Or: How to use the simplicity of cryptographic reasoning) (Abhishek Jain)
- [Linear transformations and matrices | Chapter 3, Essence of ...](https://www.youtube.com/watch?v=kYB8IZa5AuE) — also for: Controlling Chat Style in Language Models via Single-Direction Editing (Victor S. Sheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and technical challenge to demonstrate understanding of the paper "Adaptively-Secure Flexible and Identity-Based Broadcast Encryption from Decomposed LWE." The beginner project focuses on implementing a core primitive (Equivocal Matrix Commitment) in a simplified form using familiar tools. The intermediate project involves reimplementing the core flexible broadcast encryption scheme under the decomposed LWE assumption and evaluating its parameter independence from user count. The advanced project tackles a future direction by exploring an extension of the Equivocal Matrix Commitment primitive to attribute-based encryption, addressing the paper's open question on broader applicability.

### Beginner — Equivocal Matrix Commitment Prototype
*Effort: a weekend, ~8 hours*

You build a simplified prototype of the Equivocal Matrix Commitment (EqMCOM) primitive described in the paper. The implementation will demonstrate how a matrix commitment can be adaptively equivocated to different public keys in a lattice-based setting, using basic linear algebra and cryptographic hash functions to simulate commitment and equivocation.

**Why it shows you understood the paper:** This project shows you grasp the novel EqMCOM primitive central to the paper's adaptive security and scalability claims. A professor would see you understand how equivocation enables flexible broadcast encryption without user coordination.

**Grounded in:** Introduction of the Equivocal Matrix Commitment primitive enabling adaptive equivocation in lattice-based schemes.

**Tech stack:** Python 3.11, NumPy, hashlib

**Data:** No external data needed; you simulate small random matrices and keys as inputs.

**Build it:**

1. Implement a matrix commitment scheme that takes a matrix and outputs a commitment digest.
2. Implement an equivocation function that, given a commitment and a target public key, produces an opening consistent with that key.
3. Demonstrate adaptive equivocation by showing the same commitment can be opened to different matrices under different keys.
4. Write tests verifying commitment binding and equivocation correctness on small matrices.

**Ships as:** A Python package with functions for EqMCOM commitment and equivocation, plus a README explaining the primitive and example usage.

**Stretch goal:** Add a simple lattice-based noise simulation to approximate decomposed LWE hardness assumptions in the commitment.

### Intermediate — Flexible Broadcast Encryption Scheme under Decomposed LWE
*Effort: 2 weekends, ~20 hours*

You reimplement the core flexible broadcast encryption (FBE) scheme from the paper based on the decomposed LWE assumption. Your implementation will include key generation, encryption to a subset of users, and decryption, demonstrating parameter sizes independent of total users. You will compare encryption and decryption runtimes for varying recipient set sizes to show public-key aggregation efficiency.

**Why it shows you understood the paper:** This project proves you can translate the paper's core cryptographic construction into working code and empirically verify its scalability claims. A professor would see you understand adaptive security, decomposed LWE usage, and public-key aggregation techniques.

**Grounded in:** Theorem 1.1: Existence of an adaptively secure flexible broadcast encryption scheme under ℓ-decomposed LWE with parameter sizes independent of total users.

**Tech stack:** Python 3.11, NumPy, PyCryptodome

**Data:** Simulated user public keys and random subsets of recipients; no external dataset required.

**Build it:**

1. Implement key generation for users based on decomposed LWE parameters.
2. Implement encryption that takes a message and a recipient subset, producing a succinct ciphertext.
3. Implement decryption for a user to recover the message if authorized.
4. Measure and plot ciphertext size and encryption/decryption time as recipient set size varies.
5. Compare results to a naive broadcast encryption baseline that scales linearly with recipients.

**Ships as:** A Python repository with FBE scheme implementation, performance evaluation scripts, and a README documenting the scheme and results.

**Stretch goal:** Add a simulation of the Random Oracle Model using cryptographic hash functions to support adaptive security proofs.

### Advanced — Extending Equivocal Matrix Commitments to Attribute-Based Encryption
*Effort: 3+ weeks*

You design and prototype an extension of the Equivocal Matrix Commitment primitive to support attribute-based encryption (ABE) schemes in a lattice-based setting. This project explores the paper's open question about adapting EqMCOM beyond broadcast encryption. You will formalize the primitive's interface for ABE, implement a proof-of-concept scheme, and evaluate its feasibility and parameter scalability.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's core innovation and its potential generalizations. A professor would recognize your ability to engage with open research problems and extend foundational primitives to new cryptographic domains.

**Grounded in:** Future direction: Investigating broader applications of Equivocal Matrix Commitments in lattice-based cryptography.

**Tech stack:** Python 3.11, NumPy, PyCryptodome, Matplotlib

**Data:** Simulated attribute sets and user keys; no external dataset required.

**Build it:**

1. Study the EqMCOM primitive and attribute-based encryption basics.
2. Design an interface for EqMCOM that supports attribute-based equivocation.
3. Implement a prototype ABE scheme using your extended EqMCOM.
4. Evaluate parameter sizes and encryption/decryption efficiency for different attribute sets.
5. Document challenges, limitations, and potential improvements.

**Ships as:** A research prototype repository with code, evaluation scripts, and a detailed README discussing design decisions and future work.

**Stretch goal:** Attempt a security proof sketch or simulation under decomposed LWE for your extended primitive.
