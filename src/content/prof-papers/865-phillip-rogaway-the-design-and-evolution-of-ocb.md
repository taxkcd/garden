---
title: "865 · The Design and Evolution of OCB — Phillip Rogaway"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-phillip-rogaway"
source_hash: "c673364948c0981a41dcf0f792bf8696c10c242f01e1ee82b46e35ef8c230fd6"
sequence: 865
generator: "outreach-garden: managed"
---

# 865 · The Design and Evolution of OCB

## At a glance

- **Professor:** Phillip Rogaway
- **Institution:** Univ. of California - Davis
- **Paper:** [The Design and Evolution of OCB](https://link.springer.com/content/pdf/10.1007/s00145-021-09399-8.pdf)
- **Authors:** Ted Krovetz, Phillip Rogaway
- **Year:** 2021

## Paper overview

This paper presents OCB3, the latest version of the OCB authenticated encryption mode, which provides both confidentiality and authenticity for encrypted messages efficiently. It explains the design, security proofs, and performance comparisons of OCB3 against other authenticated encryption schemes on various hardware platforms.

### Why it matters

**Research problem:** How to design an efficient, secure, and parallelizable authenticated encryption mode that provides both confidentiality and authenticity with minimal computational overhead and provable security guarantees.

**Why it matters:** Authenticated encryption is critical for secure communication, ensuring data privacy and integrity. Efficient schemes like OCB enable fast encryption on general-purpose processors, which is essential for widespread practical use, especially as hardware support for AES improves.

**Key contributions:**

- Definition and specification of OCB3, the final and corrected version of OCB.
- Security proof of OCB3 assuming the underlying blockcipher is a strong pseudorandom permutation.
- Performance evaluation showing OCB3's superior speed compared to other AE schemes like GCM, CCM, and Chacha20-Poly1305 on hardware with AES acceleration.
- Introduction of a tweakable blockcipher-based view of OCB, unifying its design and facilitating security proofs.
- Discussion of design evolution from OCB1 and OCB2, including fixes for the OCB2 bug and efficiency improvements.

## About the professor

**Phillip Rogaway** — Professor, Department of Computer Science, Univ. of California - Davis.

Research interests: cryptography, social and ethical issues connected to technology, climate crisis, mass surveillance

### Research links

- [Faculty/profile page](http://www.cs.ucdavis.edu/~rogaway)
- [Google Scholar](https://scholar.google.com/citations?user=gUEkPQEAAAAJ&hl=en&oi=ao)
- [DBLP](http://dblp.uni-trier.de/pers/hd/r/Rogaway:Phillip)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Authenticated Encryption and Blockcipher Modes
**The paper assumes:** blockcipher modes of operation, authenticated encryption schemes, pseudorandom permutations, tweakable blockciphers
**Already in this field?** Skip this entirely if you already understand blockcipher modes for authenticated encryption and their security foundations.

To understand the design, security, and performance of OCB3 authenticated encryption mode, it is essential to grasp the fundamentals of authenticated encryption, blockcipher modes of operation, and related cryptographic primitives like message authentication codes and hash functions. The rigorous option offers a structured, detailed exploration suitable for deep technical comprehension, while the fast track provides a concise, accessible introduction to the core concepts, ideal for quickly building foundational knowledge.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [authentication](https://www.youtube.com/playlist?list=PLhZfPZicwftxc3ddMA5qI4cO7yo_7rsAG) — Pendukenni Phalaagae · 11 videos · 7.3h across the first 10 episodes

**Watch only this:** Episodes 4-6, about 2.15 hours — specifically the videos on message authentication in cryptography, SHA-512 algorithm, and HMAC algorithm, which succinctly cover the core concepts needed to understand OCB3's authentication mechanisms.

*Why it unblocks this paper:* This playlist by Pendukenni Phalaagae offers focused videos on authentication and cryptographic primitives, including message authentication codes and hash functions, providing a quicker but still thorough overview of the key concepts underlying authenticated encryption modes like OCB3.

*If you want all of it:* All 10 episodes, about 7.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the design and evolution of OCB3, start by grounding yourself in foundational concepts such as blockcipher modes of operation, tweakable blockciphers, authenticated encryption modes, and the provable security framework for AE schemes. These prerequisites build the necessary cryptographic background to appreciate OCB3's design choices, security proofs, and performance benefits. Finally, focus on the core concept section featuring the authors' own talk or the most relevant advanced presentation on OCB to directly connect theory with the paper's contributions.

### Blockcipher Modes of Operation *(prerequisite)*
Understanding blockcipher modes of operation is essential because OCB3 is defined as a mode of operation for blockciphers. This section covers the rationale behind modes, their security properties, and common examples, providing the cryptographic context for OCB3's construction.

*How the paper uses it:* OCB3 is a blockcipher mode of operation, so foundational knowledge here is critical.

▶ [Block Cipher Modes of Operation](https://www.youtube.com/watch?v=VmNk-6GTqRE) — Neso Academy · 3y ago

### Tweakable Blockciphers *(prerequisite)*
OCB3's design uses a tweakable blockcipher abstraction to unify its specification and facilitate security proofs. This section introduces tweakable blockciphers, their security notions, and how they differ from standard blockciphers, which is key to understanding OCB3's innovation.

*How the paper uses it:* The paper introduces a tweakable blockcipher-based view of OCB3 to unify design and proofs.

▶ [Tweakable Blockciphers with Asymptotically Optimal Security](https://www.youtube.com/watch?v=UJrr7Szm7IY) — IACR · 11y ago

### Authenticated Encryption Modes *(prerequisite)*
Authenticated encryption (AE) modes provide confidentiality and authenticity simultaneously. This section explains the general framework of AE, common modes like GCM and CCM, and the security goals AE schemes aim to achieve, setting the stage for appreciating OCB3's efficiency and security trade-offs.

*How the paper uses it:* OCB3 is an authenticated encryption mode; understanding AE fundamentals is necessary.

▶ [Network Security 4.5: Authenticated Encryption](https://www.youtube.com/watch?v=W3GdPsBYiy4) — Cihangir Tezcan · 5y ago

### Provable Security of AE Schemes *(prerequisite)*
The paper provides formal security proofs assuming the underlying blockcipher is a strong pseudorandom permutation. This section covers the methodology and significance of provable security in AE schemes, helping to understand the theoretical guarantees OCB3 offers.

*How the paper uses it:* The paper proves OCB3 secure up to the birthday bound under strong PRP assumptions.

▶ [s-10: Authenticated Encryption](https://www.youtube.com/watch?v=zpN_uax47oc) — IACR · Streamed 5y ago

### OCB Design and Evolution Talk *(paper-talk search result; attribution unverified)*
This section features the authors' own or closely related talks about OCB, focusing on the design evolution, security fixes, and performance improvements culminating in OCB3. It provides direct insight into the paper's contributions from the creators themselves.

*How the paper uses it:* Directly targets the authors' presentation on the design and evolution of OCB3.

▶ [OCB: a block-cipher mode of operation for efficient authenticated encryption in 10 minutes](https://www.youtube.com/watch?v=_ZFXWAXamnA) — Neural Casts · 1d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the design and evolution of OCB3 authenticated encryption mode, start by learning the foundational concepts of blockcipher modes of operation and authenticated encryption. Then, build intuition on tweakable blockciphers and the provable security framework that underpins OCB3's security guarantees. Finally, explore concise explainers focused on OCB3 itself to grasp its specific design, performance, and security features.

### Blockcipher Modes of Operation *(prerequisite)*
Blockcipher modes of operation explain how to securely use a blockcipher to encrypt data longer than a single block. Understanding these modes is essential because OCB3 is itself a mode of operation that combines encryption and authentication efficiently.

*How the paper uses it:* OCB3 is defined as a blockcipher mode of operation using AES-128.

▶ [Block Cipher Modes of Operation](https://www.youtube.com/watch?v=VmNk-6GTqRE) — Neso Academy · 3y ago

### Authenticated Encryption Modes *(prerequisite)*
Authenticated encryption modes provide both confidentiality and integrity for messages, combining encryption with authentication. Grasping this concept is critical to appreciate why OCB3 is designed to be both secure and efficient.

*How the paper uses it:* The paper addresses the design of an authenticated encryption mode that provides confidentiality and authenticity.

▶ [Network Security 4.5: Authenticated Encryption](https://www.youtube.com/watch?v=W3GdPsBYiy4) — Cihangir Tezcan · 5y ago

### Tweakable Blockciphers *(prerequisite)*
Tweakable blockciphers extend blockciphers by adding a tweak input that changes the cipher's behavior without changing the key. This abstraction simplifies OCB3's design and security proofs by unifying its operations under a tweakable blockcipher model.

*How the paper uses it:* OCB3 is equivalently defined via a tweakable blockcipher abstraction.

▶ [Tweakable Blockciphers with Asymptotically Optimal Security](https://www.youtube.com/watch?v=UJrr7Szm7IY) — IACR · 11y ago

### Provable Security of AE Schemes *(prerequisite)*
Provable security provides formal guarantees that a cryptographic scheme is secure under well-defined assumptions. Understanding this helps appreciate the rigorous security proofs presented for OCB3 assuming the underlying blockcipher is a strong pseudorandom permutation.

*How the paper uses it:* The paper proves OCB3 secure up to the birthday bound assuming a strong-PRP blockcipher.

▶ [s-10: Authenticated Encryption](https://www.youtube.com/watch?v=zpN_uax47oc) — IACR · Streamed 5y ago

### OCB3 Authenticated Encryption Mode *(paper-talk search result; attribution unverified)*
This concept covers the specific design, optimizations, and security features of OCB3, the final corrected version of the OCB mode. It explains how OCB3 achieves efficient, parallelizable authenticated encryption with provable security and improved performance over alternatives.

*How the paper uses it:* OCB3 is the central method of the paper detailing the final and corrected OCB version.

▶ [OCB: a block-cipher mode of operation for efficient authenticated encryption in 10 minutes](https://www.youtube.com/watch?v=_ZFXWAXamnA) — Neural Casts · 1d ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the OCB3 authenticated encryption mode from the paper. The beginner project focuses on implementing a core mechanism of OCB3 using your existing skills. The intermediate project involves reimplementing OCB3's encryption mode and benchmarking its performance against a baseline AE scheme, deepening your grasp of its efficiency and security trade-offs. The advanced project tackles one of the paper's key limitations by exploring misuse-resistant authenticated encryption, extending OCB3's design to tolerate nonce reuse.

### Beginner — OCB3 Core Encryption Step Implementation
*Effort: a weekend, ~8 hours*

You build a simplified implementation of the core OCB3 encryption step for a single fixed-size message block using AES-128 as the blockcipher. This includes nonce processing, tweak computation, and the blockcipher call to produce ciphertext and authentication tag components.

**Why it shows you understood the paper:** This project shows you understand the fundamental building blocks of OCB3, including how tweaks and nonces are used to achieve authenticated encryption, and how OCB3 differs from traditional blockcipher modes.

**Grounded in:** Definition and specification of OCB3, the final and corrected version of OCB.

**Tech stack:** Python 3.11, PyCryptodome (for AES-128)

**Data:** No external data needed; you simulate fixed-size plaintext blocks and nonces.

**Build it:**

1. Implement AES-128 encryption using PyCryptodome.
2. Implement the nonce processing and tweak generation as described in the OCB3 specification.
3. Encrypt a single plaintext block with the computed tweak using AES-128.
4. Compute the authentication tag component for this block.
5. Write tests to verify correctness against known test vectors from the paper or standard AES-OCB examples.

**Ships as:** A Python script with functions implementing OCB3 core encryption for one block, accompanied by a README explaining the steps and correctness tests.

**Stretch goal:** Extend to handle multiple blocks with incremental authentication tag updates.

### Intermediate — OCB3 Mode Reimplementation and Performance Benchmark
*Effort: 2 weekends, ~20 hours*

You reimplement the full OCB3 authenticated encryption mode in Python, supporting variable-length messages and associated data. You benchmark its encryption speed and blockcipher call count against a baseline AE scheme like AES-GCM using the same AES-128 primitive.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the full OCB3 mode faithfully, understand its parallelizable and online properties, and empirically verify its performance advantages as reported in the paper.

**Grounded in:** Performance evaluation showing OCB3's superior speed compared to other AE schemes like GCM, CCM, and Chacha20-Poly1305 on hardware with AES acceleration.

**Tech stack:** Python 3.11, PyCryptodome, time/performance profiling tools

**Data:** Synthetic plaintext and associated data of varying lengths generated locally to simulate encryption workloads.

**Build it:**

1. Implement full OCB3 encryption and decryption supporting arbitrary-length plaintext and associated data.
2. Implement AES-GCM encryption and decryption using PyCryptodome as a baseline.
3. Generate synthetic test messages of various sizes (e.g., 1KB, 10KB, 100KB).
4. Measure and compare encryption throughput (cycles or time per byte) and blockcipher call counts for OCB3 and AES-GCM.
5. Document results and discuss how they align with the paper's reported performance gains.

**Ships as:** A Python package implementing OCB3 and AES-GCM with benchmarking scripts and a report comparing their performance.

**Stretch goal:** Add support for parallel encryption to demonstrate OCB3's parallelizability.

### Advanced — Exploring Misuse-Resistant Extensions to OCB3
*Effort: 3+ weeks*

You design and prototype an extension to OCB3 that aims to tolerate nonce reuse, addressing the paper's limitation that OCB3 is not misuse-resistant. This involves researching misuse-resistant AE modes, adapting OCB3's tweak or nonce handling, and evaluating the security and performance trade-offs.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's stated limitations and future directions, applying cryptographic research to extend OCB3's design toward practical misuse resistance.

**Grounded in:** OCB3's security depends critically on never repeating a nonce; misuse-resistant schemes are needed if nonce reuse is possible.

**Tech stack:** Python 3.11, PyCryptodome, cryptography research libraries (optional)

**Data:** Synthetic plaintext and associated data for testing encryption correctness and performance.

**Build it:**

1. Review literature on misuse-resistant authenticated encryption modes.
2. Design a modification to OCB3's nonce or tweak processing to mitigate nonce reuse risks.
3. Implement the modified OCB3 variant in Python.
4. Test correctness and measure performance compared to standard OCB3.
5. Analyze security implications and document findings in a detailed report.

**Ships as:** A prototype Python implementation of a misuse-resistant OCB3 variant with a comprehensive report discussing design choices, security considerations, and performance.

**Stretch goal:** Explore hardware acceleration opportunities for the modified mode.
