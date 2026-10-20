---
title: "878 · Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations — Dan Boneh"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dan-boneh"
source_hash: "9e34c85f4e86bbb86ec819c2e6bb508ff9d818ff2a21bcb25e307ff055a95eab"
sequence: 878
generator: "outreach-garden: managed"
---

# 878 · Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations

## At a glance

- **Professor:** Dan Boneh
- **Institution:** Stanford University
- **Paper:** [Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations](https://arxiv.org/pdf/2603.28846)
- **Authors:** Ryan Babbush, Adam Zalcman, Craig Gidney, Michael Broughton, Tanuj Khattar, Hartmut Neven, Thiago Bergamaschi, Justin Drake, Dan Boneh
- **Year:** 2026

## Paper overview

This paper analyzes the threat posed by emerging quantum computers to cryptocurrencies that rely on elliptic curve cryptography, particularly the secp256k1 curve used in Bitcoin and Ethereum. It provides updated estimates of the quantum resources needed to break these cryptographic schemes using Shor's algorithm and introduces a zero-knowledge proof to validate these estimates without revealing attack details. The authors distinguish between fast and slow quantum computing architectures and their implications for different types of attacks on blockchain transactions. They also discuss vulnerabilities in various blockchain features, challenges in migrating to post-quantum cryptography, and policy considerations for dormant digital assets vulnerable to quantum attacks.

### Why it matters

**Research problem:** The paper addresses the vulnerability of elliptic curve cryptography (ECDLP) used in cryptocurrencies to quantum attacks, specifically how soon and with what resources quantum computers could break these cryptosystems, and how to mitigate these risks.

**Why it matters:** Cryptocurrencies depend heavily on ECDLP-based cryptography for security, and quantum computers threaten to break these cryptosystems, potentially enabling theft and undermining public trust. Unlike traditional finance, blockchains offer no recourse against fraudulent transactions, making quantum vulnerabilities critical to address urgently.

**Key contributions:**

- New resource estimates for breaking 256-bit ECDLP with significantly reduced logical qubits and Toffoli gates compared to prior work.
- Introduction of a zero-knowledge proof to cryptographically validate resource estimates without revealing attack circuits.
- Distinction between fast-clock and slow-clock quantum architectures and their implications for attack feasibility.
- Comprehensive survey of quantum vulnerabilities across Bitcoin, Ethereum, and other blockchains including smart contracts and tokenization.
- Discussion of challenges and strategies for migrating to post-quantum cryptography in blockchain systems.

## About the professor

**Dan Boneh** — Professor of Computer Science and Electrical Engineering, Computer Science and Electrical Engineering, Stanford University.

Research interests: My main research focus is applied cryptography and computer security.

### Research links

- [Faculty/profile page](http://crypto.stanford.edu/~dabo)
- [Lab website](https://seclab.stanford.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=YcvsZYMAAAAJ)
- [ORCID](https://orcid.org/0000-0003-0820-0421)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Elliptic Curve Cryptography
**The paper assumes:** elliptic curve groups, elliptic curve discrete logarithm problem, elliptic curve cryptography protocols
**Already in this field?** Skip this entirely if you already understand the mathematics and cryptographic use of elliptic curves, including ECDLP and standard curves like secp256k1.

To understand the cryptographic foundations and quantum attack implications in the paper on securing elliptic curve cryptocurrencies, a solid grasp of elliptic curve cryptography (ECC) is essential. The rigorous course option offers a deep, university-level introduction to ECC and related cryptographic concepts, while the fast track provides a concise, intuition-driven series focused specifically on ECC as used in Bitcoin, ideal for a quicker but still thorough background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Cryptography Lecture Series](https://www.youtube.com/playlist?list=PL2jrku-ebl3H50FiEPr4erSJiJHURM9BX) — Tyler Larson · 24 videos · 32.7h across 24 episodes

**Watch only this:** Lectures 16 (Introduction to Elliptic Curves) and 17 (Elliptic Curve Cryptography), about 2.7 hours total — these cover the elliptic curve groups, point addition, and ECC basics needed to follow the paper's cryptographic assumptions.

*Why it unblocks this paper:* This university-level cryptography lecture series by Dr. Christof Paar covers elliptic curves and ECC in depth, including the discrete logarithm problem and digital signatures, which are central to understanding the paper's quantum resource estimates and attack models.

*If you want all of it:* 32.7 hours across 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Elliptic Curve Cryptography for Bitcoin](https://www.youtube.com/playlist?list=PLaAxhhFb7OVElRJ8Su_C2Xu2uA7WiBKKz) — Magic Internet Math · 13 videos · 1.4h across 13 episodes

**Watch only this:** Episodes 6 (The Discrete Logarithm Problem), 7 (Elliptic Curves Over the Reals), 8 (Elliptic Curves Over Finite Fields), 9 (secp256k1 — The Six Parameters), and 10 (Key Generation and the ECDLP), about 30 minutes total — these episodes cover the core ECC concepts and curve parameters critical for understanding the paper.

*Why it unblocks this paper:* This 13-episode series from Magic Internet Math builds elliptic curve cryptography from first principles up to Bitcoin's digital signatures, providing a clear and focused introduction to ECC relevant to the secp256k1 curve and cryptographic attacks discussed in the paper.

*If you want all of it:* 1.4 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on securing elliptic curve cryptocurrencies against quantum vulnerabilities, start with foundational concepts including the elliptic curve discrete logarithm problem, Shor's algorithm, quantum error correction codes, and zero-knowledge proofs, as these underpin the cryptographic and quantum computing aspects of the work. Then, proceed to the paper's core topic by watching the authors' own talk or the closest available advanced presentation on quantum resource estimates and mitigation strategies for blockchain security. This progression ensures a solid grasp of both the theoretical background and the novel contributions of the paper.

### Elliptic curve discrete logarithm problem lecture *(prerequisite)*
Understanding the elliptic curve discrete logarithm problem (ECDLP) is essential because it is the fundamental cryptographic hardness assumption that secures the secp256k1 curve used in Bitcoin and Ethereum. This lecture provides a rigorous explanation of ECDLP, enabling comprehension of why quantum attacks threaten these systems.

*How the paper uses it:* ECDLP is the core cryptographic problem whose quantum vulnerability the paper analyzes and aims to secure against.

▶ [V8b: Elliptic curve discrete logarithm problem (Applied Cryptography 101)](https://www.youtube.com/watch?v=Z6qLEFKDlz0) — Cryptography 101 · 1y ago

### Shor's algorithm quantum computing seminar *(prerequisite)*
Shor's algorithm is the fundamental quantum algorithm that can efficiently solve the discrete logarithm problem, thus threatening elliptic curve cryptography. This seminar-level lecture explains the algorithm's mechanics and its implications for cryptographic security.

*How the paper uses it:* The paper's quantum resource estimates for breaking ECDLP rely on implementations of Shor's algorithm.

▶ [Quantum Computing Course: 3.8 Shor's Algorithm](https://www.youtube.com/watch?v=5_56TXtFVK4) — Quantum Soar · 2y ago

### Quantum error correction codes lecture *(prerequisite)*
Quantum error correction is critical for practical quantum computing, as it enables reliable quantum computation despite noise. Understanding these codes is necessary to appreciate the physical qubit overheads and resource estimates presented in the paper.

*How the paper uses it:* The paper's resource estimates depend heavily on assumptions about quantum error correction and physical qubit requirements.

▶ [Approaching the Quantum Singleton Bound with Approximate Error Correction](https://www.youtube.com/watch?v=ZuZuVu9igTU) — Simons Institute for the Theory of Computing · Streamed 3y ago

### Zero knowledge proofs cryptography lecture *(prerequisite)*
Zero-knowledge proofs allow one to prove knowledge of a secret without revealing it, a key cryptographic technique used in the paper to validate quantum resource estimates without disclosing attack details. This lecture provides a rigorous introduction to the concept and its cryptographic significance.

*How the paper uses it:* The paper introduces a zero-knowledge proof to validate resource estimates securely.

▶ [Zero Knowledge Proofs](https://www.youtube.com/watch?v=5qzNe1hk0oY) — Computational Thinking · 3y ago

### Paper authors quantum crypto talk *(paper-talk search result; attribution unverified)*
This section focuses on the authors' own or closely related advanced talks presenting their novel quantum resource estimates, distinctions between quantum architectures, and mitigation strategies for blockchain security. Such talks provide direct insight into the paper's contributions and context.

*How the paper uses it:* Directly presents the authors' novel resource estimates and mitigation strategies discussed in the paper.

▶ [🔐 4.4 Security of Bitcoin! 🔍 Cracking secp256k1](https://www.youtube.com/watch?v=rhGZBnunYmw) — BitsMaximus · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the essential concepts needed to understand the paper on quantum vulnerabilities in elliptic curve cryptocurrencies. It starts with the foundational Elliptic Curve Discrete Logarithm Problem (ECDLP), then introduces Shor's quantum algorithm that threatens ECDLP security, followed by quantum error correction which underpins resource estimates for quantum attacks. Next, it covers zero-knowledge proofs used to validate attack resource estimates without revealing details, and finally, it presents talks directly related to the paper's quantum crypto analysis and mitigation strategies.

### Elliptic curve discrete logarithm problem lecture *(prerequisite)*
Learn the core cryptographic hardness assumption behind secp256k1, the elliptic curve used in Bitcoin and Ethereum. This concept explains how the discrete logarithm problem on elliptic curves forms the basis of cryptocurrency security.

*How the paper uses it:* The paper analyzes quantum attacks targeting the elliptic curve discrete logarithm problem underlying secp256k1.

▶ [V8b: Elliptic curve discrete logarithm problem (Applied Cryptography 101)](https://www.youtube.com/watch?v=Z6qLEFKDlz0) — Cryptography 101 · 1y ago

### Shor's algorithm quantum computing seminar *(prerequisite)*
Understand Shor's algorithm, the fundamental quantum algorithm that can efficiently solve discrete logarithms and factorization problems, thus threatening classical cryptographic schemes like ECDLP.

*How the paper uses it:* Shor's algorithm is the quantum method used to break 256-bit ECDLP in the paper's resource estimates.

▶ [How Quantum Computers Break Encryption | Shor's Algorithm Explained](https://www.youtube.com/watch?v=lvTqbM5Dq4Q) — minutephysics · 7y ago

### Quantum error correction codes lecture *(prerequisite)*
Quantum error correction is essential to protect fragile quantum information and is a key factor in estimating the physical qubit resources needed for quantum attacks. This lecture introduces the principles behind error correction codes in quantum computing.

*How the paper uses it:* The paper's resource estimates for quantum attacks depend heavily on assumptions about quantum error correction codes and physical qubit overhead.

▶ [Approaching the Quantum Singleton Bound with Approximate Error Correction](https://www.youtube.com/watch?v=ZuZuVu9igTU) — Simons Institute for the Theory of Computing · Streamed 3y ago

### Zero knowledge proofs cryptography lecture *(prerequisite)*
Zero-knowledge proofs allow one to prove knowledge of a secret without revealing the secret itself. This concept is crucial for understanding how the paper validates quantum resource estimates without disclosing attack circuit details.

*How the paper uses it:* The paper introduces zero-knowledge proofs to cryptographically validate resource estimates without revealing attack specifics.

▶ [The Simplest Explanation of Zero Knowledge Proofs | ZK-Proofs](https://www.youtube.com/watch?v=JjLjIsBF2pQ) — Yaabot · 2y ago

### Paper authors quantum crypto talk *(paper-talk search result; attribution unverified)*
This talk directly addresses the paper's novel quantum resource estimates and mitigation strategies for elliptic curve cryptocurrencies, providing an overview of the quantum threat landscape and defense approaches.

*How the paper uses it:* It presents the authors' analysis of quantum vulnerabilities and their proposed mitigations as discussed in the paper.

▶ [31% of Bitcoin Is In Danger? The Quantum Threat Explained](https://www.youtube.com/watch?v=LDnl2-TKps0) — 10x crypto knowledge · 3d ago

## Already in your library

- [The Discrete Logarithm Problem](https://www.youtube.com/watch?v=za9azzh4v9A) — also for: Revisiting the Security of Sparkle (Adam O'Neill)
- [Peter Shor | Quantum error correcting codes and fault tolerance](https://www.youtube.com/watch?v=buIbd_aXAHw) — also for: Scaling and logic in the colour code on a superconducting quantum processor (Murphy Yuezhen Niu)
- [Zero Knowledge Proofs - Computerphile](https://www.youtube.com/watch?v=HUs1bH85X9I) — also for: HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes (Pratik Soni)
- [Zero-Knowledge Proofs Explained: How ZK Technology Works 2026](https://www.youtube.com/watch?v=jdkjuiNtLiQ) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from basic understanding to applied implementation and finally to research extension of the paper's analysis on quantum vulnerabilities in elliptic curve cryptocurrencies. The beginner project focuses on reproducing a key resource estimate metric using familiar tools. The intermediate project involves reimplementing the core quantum resource estimation method described in the paper and comparing it to a simple baseline. The advanced project extends the paper by exploring mitigation strategies against on-spend quantum attacks, addressing one of the paper's future directions.

### Beginner — Reproduce Quantum Resource Estimates for Breaking secp256k1
*Effort: a weekend, ~8 hours*

You build a simple interactive visualization or script that reproduces the paper's key quantum resource estimates for breaking the 256-bit ECDLP on the secp256k1 curve, specifically the logical qubit and Toffoli gate counts. This project involves extracting the numerical estimates from the paper and presenting them clearly, possibly with a comparison to prior estimates.

**Why it shows you understood the paper:** This project demonstrates you understand the core quantitative threat model and resource metrics that the paper advances, showing you can interpret and communicate the paper's main technical results.

**Grounded in:** The paper's key result: "Shor’s algorithm can break 256-bit ECDLP with ≤ 1200 logical qubits and ≤ 90 million Toffoli gates or ≤ 1450 logical qubits and ≤ 70 million Toffoli gates." (Section II.B)

**Tech stack:** TypeScript, React, D3.js or Chart.js, Node.js

**Data:** Numerical resource estimates extracted directly from the paper's Section II.B tables and figures.

**Build it:**

1. Extract the logical qubit and Toffoli gate count estimates from the paper's Section II.B.
2. Create a simple React web app or Node.js script to display these estimates in tabular and graphical form.
3. Optionally, add a comparison to prior resource estimates mentioned in the paper.
4. Write a README explaining the significance of these metrics and how they relate to quantum attacks on secp256k1.

**Ships as:** A GitHub repository containing a small web app or script that clearly presents the quantum resource estimates with explanatory notes.

**Stretch goal:** Add an interactive component allowing users to adjust parameters (e.g., physical qubit error rates) and see how resource estimates change.

### Intermediate — Reimplement Quantum Resource Estimation for ECDLP
*Effort: 1-3 weekends*

You implement a simplified version of the quantum resource estimation method for breaking the 256-bit ECDLP on secp256k1 as described in the paper, focusing on logical qubit and Toffoli gate counts. You compare your estimates against a simple baseline such as prior published resource estimates or a naive Shor's algorithm resource model.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into code, understand quantum circuit resource metrics, and critically evaluate improvements over baseline estimates.

**Grounded in:** The paper's core contribution: "New resource estimates for breaking 256-bit ECDLP with significantly reduced logical qubits and Toffoli gates compared to prior work." (Section II.B)

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** No external dataset needed; you simulate or calculate resource counts based on the paper's circuit descriptions and parameters.

**Build it:**

1. Study the paper's description of the quantum circuit resource estimation for Shor's algorithm on secp256k1.
2. Implement a Python script or Jupyter notebook that calculates logical qubit and Toffoli gate counts based on input parameters.
3. Implement a baseline estimation method (e.g., naive Shor's algorithm resource counts) for comparison.
4. Generate plots comparing your reimplemented estimates with the baseline and discuss differences.
5. Document your methodology and findings in the notebook README.

**Ships as:** A Jupyter notebook repository with code, plots, and explanations comparing quantum resource estimates for ECDLP breaking.

**Stretch goal:** Incorporate simple error correction overhead models to refine resource estimates.

### Advanced — Simulate Mitigation Strategies Against On-Spend Quantum Attacks
*Effort: a few weeks*

You design and implement a prototype simulation of a mitigation technique such as a private mempool or commit-reveal scheme to defend against fast-clock quantum on-spend attacks on blockchain transactions, as discussed in the paper's future directions. You evaluate the effectiveness of the mitigation in reducing attack feasibility within typical blockchain settlement times.

**Why it shows you understood the paper:** This project demonstrates deep engagement with the paper's identified vulnerabilities and future directions, applying cryptographic and blockchain engineering knowledge to propose and evaluate practical defenses against quantum threats.

**Grounded in:** Future direction: "Development of mitigation techniques such as private mempools and commit-reveal schemes to thwart on-spend attacks." (Section VIII)

**Tech stack:** TypeScript, Node.js, Express.js, React, Docker

**Data:** Simulated blockchain transaction data and timing parameters based on typical Bitcoin/Ethereum transaction settlement times as described in the paper.

**Build it:**

1. Research the concept of on-spend quantum attacks and mitigation techniques like private mempools and commit-reveal schemes from the paper and related literature.
2. Design a simplified blockchain transaction simulation environment modeling transaction submission, mempool behavior, and settlement timing.
3. Implement a private mempool or commit-reveal protocol prototype within this simulation.
4. Simulate attack scenarios with and without the mitigation to measure attack success probability or timing feasibility.
5. Analyze and document the mitigation's effectiveness and limitations.
6. Write a detailed README explaining the simulation setup, results, and implications for blockchain security.

**Ships as:** A GitHub repository with a simulation prototype, code, and a comprehensive report on mitigation effectiveness against quantum on-spend attacks.

**Stretch goal:** Extend the simulation to model consensus challenges and user adoption barriers for the mitigation protocol.
