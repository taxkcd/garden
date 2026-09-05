---
title: "545 · Oblivis: A Framework for Delegated and Efficient Oblivious Transfer — Yvo Desmedt"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yvo-desmedt"
source_hash: "a001c03369986c4fe5fe91efd49e234443e55a536b96354f64cfb304ff01d9b2"
sequence: 545
generator: "outreach-garden: managed"
---

# 545 · Oblivis: A Framework for Delegated and Efficient Oblivious Transfer

## At a glance

- **Professor:** Yvo Desmedt
- **Institution:** University of Texas at Dallas
- **Paper:** [Oblivis: A Framework for Delegated and Efficient Oblivious Transfer](https://arxiv.org/pdf/2603.14492v1)
- **Authors:** Aydin Abadi, Yvo Desmedt
- **Year:** 2026

## Paper overview

This paper introduces Oblivis, a new framework of Oblivious Transfer (OT) protocols that enable clients to securely retrieve data from databases via proxies without revealing their query intent or metadata. It supports delegation of query generation to proxies, multi-receiver settings, and efficient constant-size responses suitable for lightweight clients. The framework includes a novel Supersonic OT protocol that is highly efficient and information-theoretic without relying on multiple senders or trusted setups.

### Why it matters

**Research problem:** Existing Oblivious Transfer protocols assume direct client-database interaction and do not support delegated query generation or lightweight clients. They also leak metadata in multi-receiver or merged database settings and require heavy local storage or trusted setups for constant-size responses or information-theoretic security.

**Why it matters:** Modern cloud and edge computing environments often require clients to access sensitive data via proxies without revealing query intent, especially in financial, healthcare, and multi-tenant cloud scenarios. Protecting privacy in these settings is critical to prevent insider threats, data leaks, and misuse of sensitive information.

**Key contributions:**

- Delegated-Query OT (DQ-OT) allowing secure outsourcing of query generation to proxies without revealing the query index.
- Delegate-Unknown-Query OT (DUQ-OT) supporting hidden query indices unknown even to the receiver.
- Delegated-Query Multi-Receiver OT (DQMR-OT) enabling private queries on merged cloud-hosted databases without leaking database size or receiver identity.
- A generic compiler transforming any 1-out-of-n OT into one with constant-size receiver download complexity.
- Supersonic OT: a novel, highly efficient, proxy-based, information-theoretic 1-out-of-2 OT without requiring multiple senders, noisy channels, or trusted setup.

## About the professor

**Yvo Desmedt** — Jonsson Distinguished Professor, Department of Computer Science, University of Texas at Dallas.

Research interests: His main interests include cryptography, quantum computing, privacy, network security, critical infrastructure and computer security.

### Research links

- [Faculty/profile page](http://www.utdallas.edu/~Yvo.Desmedt)
- [Resolved homepage](http://www.utdallas.edu/~ygd120030/)
- [DBLP](http://www.informatik.uni-trier.de/~ley/db/indices/a-tree/d/Desmedt:Yvo.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cryptographic Protocols and Oblivious Transfer
**The paper assumes:** cryptographic protocols, oblivious transfer protocols, simulation-based security proofs, discrete logarithm and computational Diffie-Hellman assumptions
**Already in this field?** Skip this entirely if you already understand cryptographic protocol design and the theory and practice of oblivious transfer.

This background focuses on cryptographic protocols with an emphasis on Oblivious Transfer (OT), its security models, and efficiency improvements, which are central to understanding the Oblivis framework and its novel OT variants. The rigorous course offers a deep dive into advanced cryptographic concepts and proofs, while the fast track provides a concise introduction to foundational cryptography and network security principles relevant to OT. Choose the rigorous course for a comprehensive theoretical foundation and the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.5630 Advanced Topics in Cryptography, Fall 2023](https://www.youtube.com/playlist?list=PLUl4u3cNGP61EZllk7zwgvPbI4kbnKhWz) — MIT OpenCourseWare · 17 videos · 22.6h across 17 episodes

**Watch only this:** Lectures 1 through 7 (14 episodes, about 18.5 hours) focusing on interactive proofs, zero-knowledge proofs, and soundness in the standard model, which provide the cryptographic foundations for OT security proofs.

*Why it unblocks this paper:* MIT 6.5630 Advanced Topics in Cryptography covers advanced cryptographic protocols, including interactive proofs and zero-knowledge proofs, which underpin the security proofs and protocol design of Oblivious Transfer variants like those in Oblivis. This course is directly relevant for understanding the formal security models and efficiency claims in the paper.

*If you want all of it:* All 17 episodes, approximately 22.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Cryptography | Chapter 1 | Cryptography & Network Security](https://www.youtube.com/playlist?list=PLBlnK6fEyqRhBsP45jUdcqBivf25hyVkU) — Neso Academy · 28 videos · 5.6h across 28 episodes

**Watch only this:** Episodes 1 through 10 (about 1.8 hours) covering cryptography basics, security goals, cryptanalysis, and classical encryption techniques to build intuition for OT protocols.

*Why it unblocks this paper:* This Introduction to Cryptography and Network Security playlist by Neso Academy offers a clear, concise foundation in cryptographic principles, symmetric and asymmetric encryption, and security goals, which are essential for grasping the basics of Oblivious Transfer and its security context without deep theoretical overhead.

*If you want all of it:* All 28 episodes, approximately 5.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Oblivis framework and its contributions, start with foundational concepts in cryptographic assumptions and information-theoretic security, which underpin the security proofs and guarantees of the protocols. Next, study secure multi-party computation and oblivious transfer protocols to grasp the core cryptographic primitives and techniques used. Finally, focus on the paper's core concept by watching the authors' own talk on Oblivis to gain direct insight into their novel framework and its practical implications.

### Cryptographic Assumptions DL CDH RO *(prerequisite)*
Understanding the Discrete Logarithm (DL), Computational Diffie-Hellman (CDH), and Random Oracle (RO) assumptions is essential as these form the cryptographic foundation for the security proofs in Oblivis. These assumptions enable reasoning about the hardness of underlying problems and the security of the protocols.

*How the paper uses it:* The security proofs of Oblivis rely on DL, CDH, and RO assumptions in the simulation-based paradigm.

▶ [Lec 40 Discrete Logarithm and DDH Assumption](https://www.youtube.com/watch?v=kz6BD1Dj_ms) — NPTEL - Indian Institute of Science, Bengaluru · 27:53 · 5 years ago

### Information-Theoretic Security *(prerequisite)*
Information-theoretic security provides unconditional security guarantees independent of computational assumptions, which is key to understanding the Supersonic OT protocol's security properties. This section covers the principles and techniques that enable such strong security.

*How the paper uses it:* Supersonic OT achieves information-theoretic security without relying on multiple senders or trusted setups.

▶ [Information Theoretic Secrecy and Interactive Communication 1/3](https://www.youtube.com/watch?v=kjOL0U6t1-0) — Institut Henri Poincaré · 52:53 · 10 years ago

### Secure Multi-Party Computation *(prerequisite)*
Secure multi-party computation (MPC) underpins the proxy-based computations and security model in Oblivis. Learning MPC concepts helps understand how non-colluding proxies can jointly compute queries without revealing sensitive information.

*How the paper uses it:* Oblivis leverages MPC concepts to enable secure delegation of query generation to two non-colluding proxies.

▶ [Secure Multiparty Computation I](https://www.youtube.com/watch?v=Fv4UawF52eU) — Simons Institute for the Theory of Computing · 57:49 · 11 years ago

### Oblivious Transfer Protocols *(prerequisite)*
Oblivious Transfer (OT) is the foundational cryptographic primitive for private data retrieval. Studying OT protocols, including 1-out-of-2 and 1-out-of-n variants, provides the necessary background to appreciate the innovations in Oblivis.

*How the paper uses it:* Oblivis introduces new OT variants and a compiler transforming any 1-out-of-n OT into one with constant-size responses.

▶ [The GMW Multi Party Protocols and Oblivious Transfer Extension - Prof. Benny Pinkas](https://www.youtube.com/watch?v=4YwvZaA9IEg) — Bar-Ilan University - אוניברסיטת בר-אילן · 57:39 · 11 years ago

### Oblivis Framework Talk *(the paper's own talk)*
This section features the authors' own talk on Oblivis, providing direct insight into their novel framework, its design, security proofs, and performance results. It is the most authoritative and focused resource for understanding the paper's contributions.

*How the paper uses it:* The authors present their framework, including Supersonic OT and delegated query OT variants, with implementation and security details.

▶ [Oblivis: A Framework for Delegated and Efficient Oblivious Transfer](https://www.youtube.com/watch?v=qqeFtZ_wGF8) — Privacy Enhancing Technologies Symposium · 12:29 · 3 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Oblivis, start by grasping the basics of Oblivious Transfer (OT) protocols, which are fundamental for secure and private data retrieval. Then, build knowledge on Secure Multi-Party Computation (MPC) and Information-Theoretic Security, which underpin the security guarantees and proxy-based computations in Oblivis. Finally, explore the novel Supersonic OT variant introduced by the paper, which enables efficient and delegated OT without trusted setups.

### Oblivious Transfer Protocols *(prerequisite)*
Oblivious Transfer is a cryptographic protocol that allows a sender to transfer one of many pieces of information to a receiver, without knowing which piece was transferred. Understanding OT basics is essential as it forms the foundation for privacy-preserving data retrieval in Oblivis.

*How the paper uses it:* Oblivis builds on and extends OT protocols to support delegation, multi-receiver settings, and efficiency.

▶ [Oblivious Transfer - Computerphile](https://www.youtube.com/watch?v=wE5cl8J27Is) — Computerphile · 20:15 · 2 years ago

### Secure Multi-Party Computation *(prerequisite)*
Secure Multi-Party Computation enables multiple parties to jointly compute a function over their inputs while keeping those inputs private. This concept is crucial for understanding how Oblivis securely delegates query generation to proxies without leaking sensitive information.

*How the paper uses it:* Oblivis uses MPC principles to enable secure computations by non-colluding proxies in delegated OT.

▶ [Lec 01 What is Secure Multi-Party Computation (MPC)?](https://www.youtube.com/watch?v=NXFLrm8zcS8) — NPTEL - Indian Institute of Science, Bengaluru · 31:49 · 4 years ago

### Information-Theoretic Security *(prerequisite)*
Information-Theoretic Security guarantees security even against adversaries with unlimited computational power, relying on mathematical properties rather than computational hardness. This is key to understanding the strong security guarantees of the Supersonic OT protocol in Oblivis.

*How the paper uses it:* Supersonic OT achieves information-theoretic security without trusted setups or multiple senders.

▶ [Information Theoretic Secrecy and Interactive Communication 1/3](https://www.youtube.com/watch?v=kjOL0U6t1-0) — Institut Henri Poincaré · 52:53 · 10 years ago

### Cryptographic Assumptions DL CDH RO *(prerequisite)*
Discrete Logarithm (DL), Computational Diffie-Hellman (CDH), and Random Oracle (RO) models are foundational cryptographic assumptions that support the security proofs of many protocols. Understanding these assumptions helps in appreciating the formal security guarantees provided by Oblivis.

*How the paper uses it:* Oblivis's security proofs rely on DL, CDH, and RO assumptions in the simulation-based paradigm.

▶ [Lec 40 Discrete Logarithm and DDH Assumption](https://www.youtube.com/watch?v=kz6BD1Dj_ms) — NPTEL - Indian Institute of Science, Bengaluru · 27:53 · 5 years ago

### Supersonic Oblivious Transfer
Supersonic OT is a novel, highly efficient 1-out-of-2 OT protocol introduced by Oblivis that uses a proxy-based controlled-swap mechanism to achieve information-theoretic security without trusted setups. Learning this concept reveals how Oblivis attains significant speedups and supports lightweight clients.

*How the paper uses it:* Supersonic OT is the core new OT variant enabling Oblivis's efficiency and delegation features.

▶ [The Simplest Oblivious Transfer Protocol](https://www.youtube.com/watch?v=pIi-YTBBolU) — Simons Institute for the Theory of Computing · 16:59 · 11 years ago

### Oblivis Framework Talk *(the paper's own talk)*
This talk by the authors presents an overview of Oblivis, explaining its motivation, design, and key contributions. It provides direct insight into how the framework supports delegated query generation, multi-receiver OT, and constant-size responses.

*How the paper uses it:* The talk offers a concise summary and explanation of the Oblivis framework and its novel OT variants.

▶ [Oblivis: A Framework for Delegated and Efficient Oblivious Transfer](https://www.youtube.com/watch?v=qqeFtZ_wGF8) — Privacy Enhancing Technologies Symposium · 12:29 · 3 weeks ago

## Already in your library

- [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Information Theory Basics](https://www.youtube.com/watch?v=bkLHszLlH34) — also for: Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts (Nathan D. Cahill)
- [The Discrete Logarithm Problem](https://www.youtube.com/watch?v=za9azzh4v9A) — also for: Revisiting the Security of Sparkle (Adam O'Neill)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of Oblivis and its core contributions. Starting with a beginner-level implementation of a simplified delegated oblivious transfer protocol, you progress to an intermediate reimplementation of the Supersonic OT protocol with performance comparison against a baseline OT extension. The advanced project tackles a future direction by extending the framework to consider malicious proxy behavior, addressing a key limitation of the paper.

### Beginner — Simplified Delegated-Query Oblivious Transfer Prototype
*Effort: a weekend, ~8 hours*

You build a minimal prototype simulating the Delegated-Query OT (DQ-OT) mechanism where a client secret-shares a query index to two proxies that sequentially compute partial queries without learning the index. The prototype will demonstrate the core idea of query delegation and privacy preservation in a simplified setting.

**Why it shows you understood the paper:** This project shows you grasp the fundamental concept of query delegation to non-colluding proxies and how secret sharing can protect query privacy, a key innovation of Oblivis.

**Grounded in:** Demonstrates the Delegated-Query OT (DQ-OT) allowing secure outsourcing of query generation to proxies without revealing the query index.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** No external data needed; simulate small example queries and database indices in code.

**Build it:**

1. Implement a simple secret sharing scheme to split a query index into two shares.
2. Simulate two proxy functions that receive one share each and compute partial queries.
3. Combine proxy outputs to reconstruct a final query indistinguishable from classical OT.
4. Demonstrate that neither proxy learns the original query index.
5. Write a README explaining the protocol steps and privacy guarantees.

**Ships as:** A Python notebook or script with code and explanations showing the delegated query secret sharing and reconstruction, plus a README summarizing the protocol and privacy properties.

**Stretch goal:** Add a simple visualization of the secret sharing and proxy computation flow.

### Intermediate — Reimplementation and Benchmark of Supersonic OT
*Effort: 2 weekends, ~20 hours*

You reimplement the Supersonic OT protocol as described in the paper, focusing on the proxy-based, information-theoretic 1-out-of-2 OT using the controlled-swap mechanism. You then benchmark its performance against a standard OT extension baseline (using the libOTe library) over multiple invocations and report speedups similar to those in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to implement a core novel protocol from the paper and quantitatively evaluate its efficiency gains, reflecting deep comprehension of the Supersonic OT design and its practical benefits.

**Grounded in:** Reproduces the Supersonic OT achieving at least 92× speedup over a highly efficient 1-out-of-2 OT and 2.6×–106× speedup over standard OT extensions.

**Tech stack:** Python 3.11, C++ (optional for performance), libOTe (https://github.com/osu-crypto/libOTe)

**Data:** Synthetic OT invocation data simulated in code; no external dataset required.

**Build it:**

1. Study the Supersonic OT protocol description and controlled-swap mechanism in the paper.
2. Implement the Supersonic OT protocol in Python or C++.
3. Set up the libOTe library as a baseline OT extension implementation.
4. Run performance benchmarks comparing Supersonic OT and libOTe over 200 to 10,000 invocations.
5. Analyze and plot speedup metrics similar to the paper's results.
6. Document the implementation details, benchmark setup, and results in a README.

**Verified links from the paper:**

- <https://github.com/osu-crypto/libOTe> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with Supersonic OT implementation, benchmark scripts comparing to libOTe, performance plots, and a detailed README.

**Stretch goal:** Port the Supersonic OT implementation to run on a Raspberry Pi 4 or similar constrained hardware and measure latency.

### Advanced — Extending Oblivis for Malicious Proxy Resistance
*Effort: 3+ weeks*

You design and prototype an extension to the Oblivis framework that addresses the limitation of assuming semi-honest, non-colluding proxies by introducing mechanisms to detect or mitigate malicious proxy behavior or collusion. This may involve adding cryptographic checks, zero-knowledge proofs, or redundancy to the delegated query protocols. You evaluate the security improvements and discuss performance trade-offs.

**Why it shows you understood the paper:** This project tackles a key open problem identified by the paper, showing your ability to critically analyze limitations and propose meaningful protocol enhancements grounded in cryptographic principles.

**Grounded in:** Addresses the limitation that the framework assumes semi-honest adversaries and non-colluding proxies and does not handle malicious proxy behavior.

**Tech stack:** Python 3.11, Cryptography libraries (e.g., PyCryptodome), Jupyter Notebook or C++ for prototyping

**Data:** No external data needed; protocol simulations with synthetic queries and proxy interactions.

**Build it:**

1. Review the security model and limitations regarding malicious proxies in the paper.
2. Research cryptographic techniques for malicious adversary resistance (e.g., zero-knowledge proofs, verifiable secret sharing).
3. Design protocol modifications or additions to detect or prevent malicious proxy behavior.
4. Implement a prototype of the extended protocol simulating malicious proxy scenarios.
5. Evaluate the security improvements and measure any performance overhead.
6. Write a comprehensive report detailing the design, implementation, security analysis, and performance.

**Ships as:** A repository containing the extended protocol prototype, simulation scripts demonstrating malicious proxy detection, and a detailed technical report.

**Stretch goal:** Integrate the extended protocol with a lightweight client implementation and measure end-to-end latency.

_The paper's authors released no code for Oblivis; the intermediate project requires reimplementation from the paper's protocol descriptions and uses libOTe as a baseline._
