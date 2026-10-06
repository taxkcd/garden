---
title: "553 · BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer — Alan T. Sherman"
date: 2026-10-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alan-t-sherman"
source_hash: "15f07598d3daa61c25a1e960adaabf36f560c48bc77a3e1e3658e28bfa233696"
sequence: 553
generator: "outreach-garden: managed"
---

# 553 · BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer

## At a glance

- **Professor:** Alan T. Sherman
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer](https://arxiv.org/pdf/2010.02421)
- **Authors:** Farid Javani, Alan T. Sherman
- **Year:** 2020

## Paper overview

This paper presents BVOT, a voting protocol designed for small-scale boardroom elections that ensures ballot secrecy, fairness, and dispute-freeness without relying on complex zero-knowledge proofs. It uses oblivious transfer and homomorphic encryption to allow voters to cast encrypted votes linked to masked primes representing candidates, enabling anyone to tally votes after polls close while preserving privacy and preventing cheating.

### Why it matters

**Research problem:** Designing a secure, fair, and private electronic voting system for small boardroom elections that does not require complex zero-knowledge proofs or trusted election authorities.

**Why it matters:** Boardroom elections involve a small number of voters and require high integrity and privacy without the overhead of large election authorities. Existing protocols often rely on complex proofs or trusted parties, which can be impractical or vulnerable. A simpler, secure protocol enhances trust and usability in such settings.

**Key contributions:**

- Introduction of BVOT, the first boardroom voting protocol leveraging oblivious transfer to ensure ballot secrecy and correct vote casting without zero-knowledge proofs.
- A novel use of masked unique primes to represent candidates, enabling multiple candidates in one election without protocol extensions.
- A self-tallying protocol that is fair (no partial tally before polls close), dispute-free (voters can detect misbehavior), and provides perfect ballot secrecy.
- Performance analysis showing BVOT has comparable or better efficiency than existing protocols, replacing zero-knowledge proofs with OT.
- Security proofs and discussion of properties including fairness, dispute-freeness, perfect ballot secrecy, and limitations such as lack of robustness and coercion resistance.

## About the professor

**Alan T. Sherman** — Professor, Department of Computer Science and Electrical Engineering, Univ. of Maryland - Baltimore County.

Research interests: High-integrity voting systems, information assurance, cryptology, discrete algorithms.

### Research links

- [Faculty/profile page](http://www.csee.umbc.edu/~sherman)
- [Professor website](http://www.csee.umbc.edu/people/faculty/alan-t-sherman/)
- [Resolved homepage](https://news.cs.umbc.edu/people/faculty/alan-t-sherman/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cryptographic Protocols and Oblivious Transfer
**The paper assumes:** cryptographic protocols, oblivious transfer, homomorphic encryption, threshold cryptography
**Already in this field?** Skip this entirely if you already understand cryptographic primitives like oblivious transfer and homomorphic encryption and their use in secure multiparty protocols.

To understand the BVOT protocol's core cryptographic mechanisms, especially oblivious transfer (OT) and threshold homomorphic encryption, this background selection offers two complementary learning paths. The rigorous course provides a deep, structured university-level treatment of secure multiparty computation and secret sharing concepts foundational to OT, while the fast track offers a concise, intuitive introduction to network security and cryptography principles, including key algorithms and protocols relevant to OT and encryption. Choose the rigorous course for a thorough theoretical foundation; choose the fast track for a quicker, visual overview that still covers essential concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Secure Computation: Part I](https://www.youtube.com/playlist?list=PLgMDNELGJ1Ca3l-xioOzN86BIZ2a0N8Ds) — NPTEL - Indian Institute of Science, Bengaluru · 60 videos · 31.8h across 60 episodes

**Watch only this:** Lectures 7 through 15, about 4.5 hours — covering Secret Sharing, Additive Secret Sharing, Threshold Secret Sharing, Linear Secret Sharing, and Perfectly-Secure Message Transmission, which provide the cryptographic foundation for OT and threshold encryption used in BVOT.

*Why it unblocks this paper:* This NPTEL course 'Secure Computation: Part I' covers secret sharing, threshold schemes, and multiparty computation protocols, which are directly relevant to understanding the cryptographic building blocks of BVOT, including oblivious transfer and threshold homomorphic encryption.

*If you want all of it:* About 31.8 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Network Security & Cryptography – Algorithms, Protocols & Encryption Explained](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_7-QrsY_n9nC0Xfhs1tLEK) — Simple Snippets · 20 videos · 3.6h across 20 episodes

**Watch only this:** Episodes 8 (Vernam Cipher), 9 (Symmetric vs Asymmetric Cryptography), 17 (Diffie Hellman Key Exchange), and 19 (RSA Algorithm), about 40 minutes total — these episodes cover key cryptographic primitives and protocols foundational to OT and homomorphic encryption.

*Why it unblocks this paper:* This 'Network Security & Cryptography – Algorithms, Protocols & Encryption Explained' series by Simple Snippets offers clear, animated explanations of cryptographic concepts including symmetric and asymmetric encryption, Diffie-Hellman key exchange, and RSA, which provide essential intuition for understanding OT and encryption in BVOT.

*If you want all of it:* About 3.6 hours across 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the BVOT protocol, start by building a strong foundation in the key cryptographic primitives it relies on: oblivious transfer and threshold homomorphic encryption, followed by secure multiparty computation principles and the novel use of prime number encoding in cryptography. After grasping these prerequisites, explore the core concept of self-tallying voting protocols to appreciate BVOT's fairness and dispute-freeness. Finally, watch the authors' own detailed presentation on BVOT to see how these concepts integrate into their novel voting protocol.

### Oblivious transfer cryptography *(prerequisite)*
Oblivious transfer (OT) is the fundamental cryptographic primitive that BVOT leverages to ensure ballot secrecy and correct vote casting without zero-knowledge proofs. Understanding OT's definitions, variants, and security properties is essential to appreciate how BVOT replaces complex proofs with OT.

*How the paper uses it:* BVOT uses oblivious transfer to provide perfect ballot secrecy and ensure correct vote casting without zero-knowledge proofs.

▶ [Definitions and Oblivious Transfer - Prof. Yehuda Lindell](https://www.youtube.com/watch?v=C6WRWtym2JY) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:29:19 · 11y ago

### Threshold homomorphic encryption *(prerequisite)*
Threshold homomorphic encryption enables secure aggregation of encrypted votes and prevents premature tallying before all votes are cast. Grasping this concept is crucial to understanding how BVOT achieves fairness and self-tallying without trusted authorities.

*How the paper uses it:* BVOT uses a multiparty threshold homomorphic encryption system to prevent tallying before all votes are cast.

▶ [CIF Seminar - "Homomorphic Encryption" (Nigel Smart)](https://www.youtube.com/watch?v=algkDFnaFJ8) — COSIC - Computer Security and Industrial Cryptography · 49:39 · 6y ago

### Secure multiparty computation *(prerequisite)*
Secure multiparty computation (MPC) underpins the distributed trust and fairness in BVOT by allowing mutually distrusting parties to jointly compute functions without revealing private inputs. Familiarity with MPC principles helps in understanding BVOT's dispute-freeness and security guarantees.

*How the paper uses it:* BVOT's fairness and dispute-freeness rely on secure multiparty computation principles.

▶ [Multiparty Computation Research](https://www.youtube.com/watch?v=bSC4rCHbLlc) — Microsoft Research · 58:39 · 7y ago

### Prime number encoding in cryptography *(prerequisite)*
BVOT introduces a novel use of masked unique primes to represent candidates, enabling multiple candidates in a single election execution. Understanding prime number properties and their role in cryptography is key to appreciating this innovative encoding technique.

*How the paper uses it:* BVOT associates each candidate with multiple unique masked primes to support multiple candidates efficiently.

▶ [Prime Numbers in Cryptography](https://www.youtube.com/watch?v=5J3l894CiMI) — Neso Academy · 10:20 · 5y ago

### Self-tallying voting protocols
Self-tallying voting protocols allow anyone to compute the election result after voting concludes without trusted tallying authorities. Understanding this concept is essential to grasp BVOT's fairness, dispute-freeness, and perfect ballot secrecy properties.

*How the paper uses it:* BVOT is a self-tallying protocol that ensures fairness and dispute-freeness in boardroom elections.

▶ [The Open Vote Network: Decentralised Internet Voting as a Smart Contract](https://www.youtube.com/watch?v=4GvRYRUrwRA) — Ethereum Foundation · 15:54 · 8y ago

### BVOT protocol talk *(paper-talk search result; attribution unverified)*
The authors' own detailed presentation on BVOT provides the most specific and authoritative explanation of their protocol, including its design, security properties, and performance. Watching this talk consolidates understanding of how all foundational concepts come together in BVOT.

*How the paper uses it:* This is the authors' own talk presenting the BVOT protocol in detail.

▶ [CDL Talk 2020-11-06 - Farid Javani on BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer](https://www.youtube.com/watch?v=4pyG76NkuJg) — UCYBR - UMBC Center for Cybersecurity · 56:38 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the BVOT paper, start by learning about oblivious transfer, the key cryptographic primitive enabling ballot secrecy without complex zero-knowledge proofs. Next, grasp threshold homomorphic encryption, which allows secure vote aggregation and prevents early tallying. Then, study the novel use of masked unique primes for candidate representation, a critical innovation in BVOT. Finally, explore the BVOT protocol itself through the authors' detailed talk, which ties all these concepts together in a practical voting system.

### Oblivious transfer cryptography *(prerequisite)*
Oblivious transfer is a cryptographic protocol where a sender transfers one of many pieces of information to a receiver, but remains oblivious to which piece was transferred. This ensures privacy for the receiver's choice and is fundamental for secure voting without revealing ballots.

*How the paper uses it:* BVOT uses oblivious transfer to ensure ballot secrecy and correct vote casting without relying on zero-knowledge proofs.

▶ [Definitions and Oblivious Transfer - Prof. Yehuda Lindell](https://www.youtube.com/watch?v=C6WRWtym2JY) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:29:19 · 11y ago

### Threshold homomorphic encryption *(prerequisite)*
Threshold homomorphic encryption allows multiple parties to jointly encrypt and decrypt data, enabling computations on encrypted votes without revealing them prematurely. This prevents early tallying and ensures fairness in the voting process.

*How the paper uses it:* BVOT employs a multiparty threshold homomorphic encryption system to prevent tallying before all votes are cast.

▶ [Deep Dive into Homomorphic Encryption - THR3001](https://www.youtube.com/watch?v=JM0bJoCRp0I) — Microsoft Developer · 26:02 · 7y ago

### Prime number encoding in cryptography *(prerequisite)*
Prime numbers are used in cryptography to uniquely encode information due to their mathematical properties. In BVOT, masked unique primes represent candidates, enabling multiple candidates to be handled efficiently in one election.

*How the paper uses it:* BVOT introduces a novel use of masked unique primes to represent candidates, supporting multiple candidates without protocol extensions.

▶ [Prime Numbers in Cryptography](https://www.youtube.com/watch?v=5J3l894CiMI) — Neso Academy · 10:20 · 5y ago

### BVOT protocol talk *(paper-talk search result; attribution unverified)*
This talk by the paper's author explains the BVOT protocol in detail, covering how oblivious transfer, threshold homomorphic encryption, and masked primes combine to create a secure, fair, and private boardroom voting system.

*How the paper uses it:* The talk provides a comprehensive explanation of BVOT, directly from its creators, making it the best resource to understand the protocol's design and properties.

▶ [CDL Talk 2020-11-06 - Farid Javani on BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer](https://www.youtube.com/watch?v=4pyG76NkuJg) — UCYBR - UMBC Center for Cybersecurity · 56:38 · 5y ago

## Already in your library

- [The Simplest Oblivious Transfer Protocol](https://www.youtube.com/watch?v=pIi-YTBBolU) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Oblivious Transfer - Computerphile](https://www.youtube.com/watch?v=wE5cl8J27Is) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [From Theory to Practice - Threshold Cryptography](https://www.youtube.com/watch?v=nPY6th76IbM) — also for: Weighted Cryptography with Weight-Independent Complexity (Aarushi Goel)
- [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Introduction to CKKS (Approximate Homomorphic Encryption)](https://www.youtube.com/watch?v=iQlgeL64vfo) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Lec 01 What is Secure Multi-Party Computation (MPC)?](https://www.youtube.com/watch?v=NXFLrm8zcS8) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Secure Multiparty Computation](https://www.youtube.com/watch?v=pjlXjBSyyHI) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and complexity to demonstrate your understanding of the BVOT protocol for secure boardroom voting. The beginner project recreates a core mechanism of BVOT using familiar tools to grasp the masked prime encoding and oblivious transfer concept. The intermediate project implements the full BVOT voting and tallying process for a small simulated election, comparing performance to a simple baseline. The advanced project extends BVOT by addressing one of its key limitations—adding robustness against vote withholding—exploring a novel protocol enhancement.

### Beginner — Masked Prime Encoding and Simple Oblivious Transfer Demo
*Effort: a weekend, ~8 hours*

You build a small Node.js/TypeScript demo that simulates the core idea of BVOT's masked prime encoding for candidates and a simple oblivious transfer (OT) interaction between a voter and a distributor. The demo shows how a voter privately obtains a masked prime corresponding to their chosen candidate and encrypts it. It includes a visualization or console output illustrating the masking and OT steps.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental cryptographic building blocks of BVOT—how masked primes represent candidates and how OT ensures ballot secrecy without zero-knowledge proofs.

**Grounded in:** A novel use of masked unique primes to represent candidates, enabling multiple candidates in one election without protocol extensions; and the use of OT to provide perfect ballot secrecy and correct vote casting without zero-knowledge proofs.

**Tech stack:** Node.js, TypeScript, console or simple web UI

**Data:** Simulated candidate primes and random masks generated within the demo; no external data needed.

**Build it:**

1. Implement a function to generate unique prime numbers representing candidates.
2. Implement masking of primes by multiplying with random factors.
3. Simulate an oblivious transfer protocol where a voter privately receives a masked prime for their chosen candidate.
4. Encrypt the masked prime using a simple homomorphic encryption placeholder or mock.
5. Output the steps and values to console or a simple UI to illustrate the process.

**Ships as:** A GitHub repo with a TypeScript demo script and README explaining masked primes, OT, and how the demo simulates BVOT's core mechanisms.

**Stretch goal:** Add a visualization of the OT interaction and masking/unmasking steps to improve conceptual clarity.

### Intermediate — BVOT Protocol Implementation for Small Boardroom Election
*Effort: 1-3 weekends, ~20 hours*

You implement a simplified version of the full BVOT protocol in TypeScript/Node.js, supporting multiple candidates and voters. The implementation includes masked prime assignment, oblivious transfer for vote casting, homomorphic encryption simulation, and self-tallying after all votes are cast. You simulate a small election with 3-5 voters and 2-3 candidates, then compare the tally correctness and runtime against a naive plaintext voting baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method end-to-end, including the novel masked prime encoding, OT-based vote casting, and self-tallying, and you understand the protocol's fairness and privacy guarantees.

**Grounded in:** Introduction of BVOT, the first boardroom voting protocol leveraging oblivious transfer to ensure ballot secrecy and correct vote casting without zero-knowledge proofs; and performance benchmarks indicating OT operations are practical for small numbers of voters.

**Tech stack:** Node.js, TypeScript, crypto libraries for RSA or Paillier homomorphic encryption simulation, Jest or similar for testing

**Data:** Simulated small election data with 3-5 voters and 2-3 candidates generated within the project; no external dataset required.

**Build it:**

1. Implement candidate representation with unique masked primes.
2. Implement a threshold homomorphic encryption scheme or simulate it with existing crypto libraries.
3. Implement oblivious transfer protocol for voters to privately receive masked primes.
4. Implement vote encryption and broadcast simulation.
5. Implement self-tallying by factoring the product of encrypted votes after revealing masks.
6. Simulate a small election and compare tally correctness and runtime with a plaintext voting baseline.

**Ships as:** A GitHub repo with a working BVOT protocol implementation, test scripts simulating elections, and a README documenting the protocol steps, results, and comparison to baseline.

**Stretch goal:** Add logging and dispute detection features to demonstrate dispute-freeness as described in the paper.

### Advanced — Robust BVOT Extension to Handle Vote Withholding
*Effort: few weeks, ~40+ hours*

You design and implement an extension to the BVOT protocol that adds robustness against vote withholding, a key limitation noted in the paper. This involves modifying the protocol to detect and handle voters who fail to cast votes, possibly by integrating accountability mechanisms or fallback tallying. You implement the extended protocol in TypeScript/Node.js and evaluate it on simulated elections, analyzing the trade-offs in complexity, privacy, and fairness.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of BVOT's limitations and the ability to innovate on the protocol to address open problems, aligning with the paper's future directions and security discussions.

**Grounded in:** BVOT is not robust: a single voter can prevent tally computation by withholding their vote; and future directions include addressing voter disruption and detection.

**Tech stack:** Node.js, TypeScript, crypto libraries, Jest or similar for testing

**Data:** Simulated election data with voter participation and withholding scenarios generated within the project.

**Build it:**

1. Study the BVOT protocol and identify points vulnerable to vote withholding.
2. Design protocol modifications to detect and mitigate vote withholding, e.g., timeout mechanisms or cryptographic proofs of participation.
3. Implement the extended protocol in TypeScript/Node.js.
4. Simulate elections with and without vote withholding to evaluate robustness and privacy impact.
5. Document the design decisions, limitations, and evaluation results.

**Ships as:** A GitHub repo with the extended BVOT implementation, simulation scripts, and a detailed README discussing the robustness enhancement and evaluation.

**Stretch goal:** Explore integration of a trusted election authority to improve efficiency and robustness as suggested in the paper's future directions.
