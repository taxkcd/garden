---
title: "689 · Accountable Secret Leader Election — Tal Malkin"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tal-malkin"
source_hash: "df0836c4c58585751a0a83115e4b251a3dd26a6be64d9c232f3a54c660053466"
sequence: 689
generator: "outreach-garden: managed"
---

# 689 · Accountable Secret Leader Election

## At a glance

- **Professor:** Tal Malkin
- **Institution:** Columbia University
- **Paper:** [Accountable Secret Leader Election](https://drops.dagstuhl.de/storage/00lipics/lipics-vol316-aft2024/LIPIcs.AFT.2024.1/LIPIcs.AFT.2024.1.pdf)
- **Authors:** Miranda Christ, Kevin Choi, Walter McKelvie, Joseph Bonneau, Tal Malkin
- **Year:** 2024

## Paper overview

This paper addresses the problem of secret leader election in proof-of-stake blockchains, where leaders are chosen secretly to prevent attacks but can withhold their identity and disrupt the protocol. The authors define accountability for secret leader election protocols and propose three approaches—delay-based cryptography, key-reveal incentives, and threshold committees—to ensure that leaders who withhold their identity can be identified after some time, balancing secrecy and accountability.

### Why it matters

**Research problem:** Existing secret leader election protocols keep leader identities secret to prevent adaptive attacks but cannot detect when elected leaders fail to act (withholding attacks), which can bias future elections and harm fairness and liveness.

**Why it matters:** Withholding attacks incentivize leaders to not perform their duties, slowing down the protocol and creating unfair advantages for large stakeholders, undermining decentralization and security of blockchain consensus.

**Key contributions:**

- Formal definition of accountability (strong and weak) for secret leader election protocols.
- Construction of accountable single secret leader election (SSLE) protocols using re-randomizable timed commitments.
- Introduction of timed verifiable random functions (timed VRFs) for accountable probabilistic secret leader election (PSLE).
- Proposal of key-disclosure approaches leveraging slashing and indexed VRFs for accountability.
- Design of a committee-based accountable SSLE protocol using threshold public-key encryption.

## About the professor

**Tal Malkin** — Professor, IACR Fellow, Department of Computer Science, Columbia University.

Research interests: My main research area is cryptography. Much of my work is on the foundations of cryptography. I also work on practical aspects and applications of cryptography, and am a member of the DSI Cybersecurity center. I am very interested in connections between cryptography and other areas, especially complexity theory, systems security, and machine learning (but also other areas, including information theory, databases, hardware security, and biology).

### Research links

- [Faculty/profile page](http://www.cs.columbia.edu/~tal)
- [Lab website](http://www.cs.columbia.edu/crypto)
- [Google Scholar](https://scholar.google.com/citations?user=c0yPSEYAAAAJ&hl=en)
- [DBLP](https://dblp.uni-trier.de/pers/hd/m/Malkin:Tal)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cryptographic Protocols and Primitives
**The paper assumes:** graduate-level cryptography, cryptographic protocols, zero-knowledge proofs, verifiable random functions, threshold cryptography
**Already in this field?** Skip this entirely if you already have a solid graduate-level understanding of cryptographic protocols and primitives including zero-knowledge proofs and threshold cryptography.

To understand the cryptographic foundations and protocols underlying accountable secret leader election, this background focuses on advanced cryptographic primitives such as timed commitments, verifiable random functions, threshold encryption, and zero-knowledge proofs. The rigorous course offers a deep, structured university-level introduction to cryptography, ideal for thorough comprehension and research preparation. The fast track provides a concise, visually clear series on network security and cryptography basics, suitable for quickly grasping core concepts relevant to the paper without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Cryptography Lecture Series](https://www.youtube.com/playlist?list=PL2jrku-ebl3H50FiEPr4erSJiJHURM9BX) — Tyler Larson · 24 videos

**Watch only this:** Lectures 1 through 20, about 27 hours — covering introduction, symmetric and asymmetric cryptography, digital signatures, hash functions, and modes of operation, which are essential for grasping the cryptographic tools used in the paper.

*Why it unblocks this paper:* This university-level cryptography lecture series by Dr. Christof Paar covers fundamental and advanced cryptographic primitives and protocols, providing the rigorous foundation needed to understand the paper's constructions and security proofs involving timed commitments, VRFs, and threshold encryption.

*If you want all of it:* 32.7 hours across 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Network Security & Cryptography – Algorithms, Protocols & Encryption Explained](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_7-QrsY_n9nC0Xfhs1tLEK) — Simple Snippets · 20 videos · 3.6h across 20 episodes

**Watch only this:** Episodes 1 through 10, about 1.7 hours — covering basic concepts, principles of cryptography, symmetric vs asymmetric cryptography, and algorithm modes, which form the core background for the paper's cryptographic primitives.

*Why it unblocks this paper:* This short-form animated series provides clear, intuitive explanations of network security and cryptographic algorithms and protocols, giving a quick but solid overview of key concepts like symmetric and asymmetric cryptography, encryption modes, and key exchange relevant to understanding the paper's cryptographic context.

*If you want all of it:* 3.6 hours across 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Accountable Secret Leader Election' paper, start with foundational cryptographic primitives and blockchain consensus concepts that underpin the proposed protocols. Begin with Threshold Cryptography and Timed Cryptography to grasp the cryptographic tools used, then study Verifiable Random Functions as they are central to leader election randomness and accountability. Next, review Blockchain Consensus and Proof-of-Stake to understand the system context and threat model. Finally, focus on Secret Leader Election protocols to appreciate the baseline mechanisms before diving into the paper's core contribution via the authors' own talk on Accountable Secret Leader Election.

### Threshold Cryptography *(prerequisite)*
Threshold cryptography enables distributed parties to jointly perform cryptographic operations without revealing secret keys, which is essential for the committee-based accountability approach in the paper. Understanding threshold encryption and decryption schemes provides the cryptographic foundation for reconstructing withheld leader identities securely.

*How the paper uses it:* The paper's committee-based approach relies on threshold encryption to enable a quorum of validators to recover withheld leader identities.

▶ [Björn Tackmann - Threshold Cryptography for Multichain Dapps](https://www.youtube.com/watch?v=ygzO3UfaLyw) — Duct Tape · 2 yr ago

### Verifiable Random Functions *(prerequisite)*
Verifiable Random Functions (VRFs) provide publicly verifiable randomness, a fundamental building block for leader election protocols. The paper extends VRFs to timed VRFs for accountability, so understanding standard VRFs is crucial to appreciate these novel constructions.

*How the paper uses it:* Timed VRFs introduced in the paper enable eventual public verification of leader election outcomes.

▶ [Verifiable Random Functions - how it works!](https://www.youtube.com/watch?v=usUQ_cMU_Xk) — Procedural Nodes · 5 yr ago

### Blockchain Consensus and Proof-of-Stake *(prerequisite)*
Proof-of-Stake consensus protocols form the operational context for secret leader election. Understanding how consensus and leader election work in PoS blockchains is essential to grasp the motivation and threat model addressed by the paper.

*How the paper uses it:* The paper addresses secret leader election challenges specifically in proof-of-stake blockchain consensus.

▶ [Lecture 17: Consensus Mechanism | What is Proof of Stake?](https://www.youtube.com/watch?v=PYW0pyxSaDU) — Irfan Malik · 3 yr ago

### Secret Leader Election protocols
Secret leader election protocols select leaders without revealing their identities immediately, preventing adaptive attacks but enabling withholding attacks. Understanding these protocols is key to appreciating the paper's contributions in adding accountability to secret leader election.

*How the paper uses it:* The paper builds on and enhances secret leader election protocols by introducing accountability mechanisms.

▶ [ConsensusDay 1 // Single Secret Leader Election - Brian Vohaska](https://www.youtube.com/watch?v=_ha6abiM0Uw) — Protocol Labs · 7 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Accountable Secret Leader Election, start by learning the basics of blockchain consensus and proof-of-stake to grasp the context and motivation for leader election. Next, build foundational knowledge on cryptographic primitives like Verifiable Random Functions and Timed Cryptography, which underpin the accountability mechanisms. Then, explore Threshold Cryptography to understand committee-based approaches. Finally, study Secret Leader Election protocols themselves, culminating in the paper's core concept of accountable secret leader election.

### Blockchain Consensus and Proof-of-Stake *(prerequisite)*
This section introduces how blockchain networks agree on the next block through consensus mechanisms, focusing on Proof-of-Stake (PoS) where validators are chosen based on stake. Understanding PoS clarifies why leader election is critical and what threats (like withholding attacks) exist.

*How the paper uses it:* The paper addresses leader election in PoS blockchains and the security challenges therein.

▶ [Lecture 17: Consensus Mechanism | What is Proof of Stake?](https://www.youtube.com/watch?v=PYW0pyxSaDU) — Irfan Malik · 3 yr ago

### Verifiable Random Functions *(prerequisite)*
Verifiable Random Functions (VRFs) produce random outputs that can be publicly verified, ensuring unpredictability and fairness in leader selection. They are essential cryptographic tools used in secret leader election protocols.

*How the paper uses it:* The paper uses timed VRFs as a new primitive for accountable probabilistic secret leader election.

▶ [Verifiable Random Functions - how it works!](https://www.youtube.com/watch?v=usUQ_cMU_Xk) — Procedural Nodes · 5 yr ago

### Threshold Cryptography *(prerequisite)*
Threshold cryptography allows a group of participants to jointly perform cryptographic operations, such as decrypting a secret only if a quorum agrees. This supports committee-based accountability by enabling leader identity recovery without premature disclosure.

*How the paper uses it:* The paper's committee-based approach uses threshold encryption to reconstruct withheld leader identities.

▶ [Threshold Cryptography Explained | Threshold Network](https://www.youtube.com/watch?v=OcU8stcVO6k) — Threshold Network · 2 mo ago

### Secret Leader Election protocols
Secret leader election protocols select leaders in a way that keeps their identity hidden to prevent targeted attacks, but this secrecy can enable withholding attacks. Understanding these protocols is key to grasping the accountability challenges addressed.

*How the paper uses it:* The paper builds on secret leader election protocols by adding accountability mechanisms to detect withholding.

▶ [ConsensusDay 1 // Single Secret Leader Election - Brian Vohaska](https://www.youtube.com/watch?v=_ha6abiM0Uw) — Protocol Labs · 7 yr ago

### Accountable Secret Leader Election paper talk *(paper-talk search result; attribution unverified)*
This talk by the authors explains their novel accountable secret leader election protocols, detailing the three approaches and cryptographic tools introduced to balance secrecy and accountability.

*How the paper uses it:* Direct presentation of the paper's contributions and methods by the authors themselves.

▶ [https://www.youtube.com › watch?v=sEskjEU424A](https://www.youtube.com/watch?v=sEskjEU424A) — YouTube result via DuckDuckGo

## Already in your library

- [From Theory to Practice - Threshold Cryptography](https://www.youtube.com/watch?v=nPY6th76IbM) — also for: Weighted Cryptography with Weight-Independent Complexity (Aarushi Goel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of accountable secret leader election as presented in the paper. The beginner project focuses on implementing a simplified delay-based secret leader election using timed commitments to grasp the core accountability concept. The intermediate project involves reimplementing a timed verifiable random function (VRF) based secret leader election protocol, comparing it to a baseline without accountability, and measuring detection of withholding. The advanced project extends the committee-based approach by simulating threshold encryption with an honest majority and exploring incentive delays, addressing a limitation noted in the paper.

### Beginner — Delay-Based Secret Leader Election Prototype
*Effort: a weekend, ~8 hours*

You build a simplified prototype of a secret leader election protocol using re-randomizable timed commitments to reveal leader identities after a fixed delay. The prototype simulates leader election rounds where leaders commit to their identity secretly and reveal it after a delay, allowing detection of withholding behavior.

**Why it shows you understood the paper:** This project shows you understand the delay-based accountability mechanism and timed commitments introduced in the paper, including the trade-off between secrecy and eventual accountability.

**Grounded in:** Construction of accountable single secret leader election (SSLE) protocols using re-randomizable timed commitments.

**Tech stack:** Python 3.11, Flask (optional for UI), cryptography library (PyCA)

**Data:** No external data needed; simulate leader election rounds with synthetic identities.

**Build it:**

1. Implement a timed commitment scheme that allows committing to a leader identity with a time delay before reveal.
2. Simulate multiple leader election rounds where leaders produce commitments and reveal identities after the delay.
3. Detect and log cases where leaders fail to reveal their identity after the delay (withholding).
4. Optionally build a simple UI or CLI to visualize election rounds, commitments, and reveals.

**Ships as:** A GitHub repo with code implementing timed commitments for secret leader election, simulation scripts, and a README explaining the protocol and how withholding is detected.

**Stretch goal:** Add zero-knowledge proof stubs to demonstrate strong accountability as discussed in the paper.

### Intermediate — Timed VRF-Based Secret Leader Election Reimplementation
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's timed verifiable random function (VRF) based probabilistic secret leader election protocol. You simulate leader election rounds with timed VRFs to generate leader identities that can be publicly verified after a delay. You compare this accountable protocol against a baseline VRF leader election without accountability, measuring detection of withholding attacks.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core cryptographic primitive (timed VRF) and evaluate its accountability properties compared to a standard VRF approach.

**Grounded in:** Introduction of timed verifiable random functions (timed VRFs) for accountable probabilistic secret leader election (PSLE).

**Tech stack:** Python 3.11, PyNaCl or similar crypto library, Jupyter Notebook for analysis

**Data:** Synthetic simulation of leader election rounds; no external dataset required.

**Build it:**

1. Implement a timed VRF primitive that outputs a leader identity and a proof verifiable after a delay.
2. Simulate probabilistic leader election rounds using timed VRFs and record leader outputs.
3. Implement a baseline VRF leader election without timed delay for comparison.
4. Measure and compare the detection rate of withholding leaders between the two protocols.
5. Document results and protocol details in a Jupyter Notebook.

**Ships as:** A GitHub repo with timed VRF implementation, simulation scripts, comparison analysis, and a detailed README with results.

**Stretch goal:** Incorporate simple economic incentive simulation to explore key-disclosure accountability as future work.

### Advanced — Committee-Based Accountable Secret Leader Election Simulation
*Effort: 3+ weeks*

You build a simulation of the committee-based accountable secret leader election protocol using threshold encryption. The simulation models a committee of validators encrypting leader identities and collaboratively decrypting them after a delay, assuming an honest majority. You explore the impact of accountability delay on detection and propose a simple incentive mechanism to encourage honest committee behavior, addressing a limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a core contribution and limitation of the paper by implementing threshold encryption-based accountability and experimenting with incentive delays, demonstrating deep comprehension and extension of the research.

**Grounded in:** Design of a committee-based accountable SSLE protocol using threshold public-key encryption; limitation: requires honest majority and trust in committee.

**Tech stack:** Python 3.11, Charm-Crypto library for threshold cryptography, Docker for environment reproducibility

**Data:** Synthetic simulation of leader election and committee behavior; no external dataset.

**Build it:**

1. Implement threshold encryption and decryption primitives simulating a validator committee.
2. Simulate secret leader election rounds where leader identities are encrypted and revealed by committee decryption after a delay.
3. Model honest and dishonest committee members to test accountability under different assumptions.
4. Design and simulate a simple incentive mechanism to encourage timely key revelation by committee members.
5. Analyze the trade-offs between delay, accountability, and incentive effectiveness.
6. Document the protocol, simulation results, and incentive design in a comprehensive README.

**Ships as:** A GitHub repo with threshold encryption simulation, committee behavior models, incentive mechanism code, and detailed documentation of findings.

**Stretch goal:** Extend the simulation to explore denial-of-service attack scenarios on leaders and propose mitigation strategies.
