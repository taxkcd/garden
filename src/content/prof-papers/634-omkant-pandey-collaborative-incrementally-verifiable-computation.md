---
title: "634 · Collaborative Incrementally Verifiable Computation — Omkant Pandey"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-omkant-pandey"
source_hash: "87151ed830c3ececc6497e6267aca1e191e8f8745888aa6dc22c9060283f2831"
sequence: 634
generator: "outreach-garden: managed"
---

# 634 · Collaborative Incrementally Verifiable Computation

## At a glance

- **Professor:** Omkant Pandey
- **Institution:** Stony Brook University
- **Paper:** [Collaborative Incrementally Verifiable Computation](https://eprint.iacr.org/2026/410.pdf)
- **Authors:** Eden Aldema Tshuva, Sanjam Garg, Omkant Pandey, Abhiram Kothapalli, Bhaskar Roberts, Rotem Oshman
- **Year:** 2026

## Paper overview

This paper presents a new cryptographic protocol called collaborative incrementally verifiable computation (IVC), which allows multiple distrustful parties to jointly and efficiently prove the correctness of computations on private inputs that are updated over time. Unlike previous methods, this approach supports streaming data, has low memory and communication overhead per party, and allows proofs to be updated incrementally without starting from scratch. This enables practical applications like privacy-preserving healthcare data aggregation, joint credit scoring, private audits, and collaborative machine learning.

### Why it matters

**Research problem:** Existing collaborative zero-knowledge succinct non-interactive arguments of knowledge (zkSNARKs) face scalability issues when applied to large-scale streaming computations involving multiple parties with private inputs. They suffer from high memory and communication overheads and lack updatability, requiring recomputation of proofs from scratch upon data updates.

**Why it matters:** Many real-world applications, such as privacy-preserving healthcare statistics, joint credit scoring, private audits, and collaborative machine learning, require multiple parties to jointly prove computations over sensitive data without revealing private inputs. Efficient, scalable, and updatable collaborative proof systems are essential to enable these applications in practice.

**Key contributions:**

- Introduction of collaborative incrementally verifiable computation (IVC) enabling multiple parties to jointly update succinct proofs for streaming computations with private inputs.
- Design of a special-purpose MPC protocol for collaborative folding with constant communication overhead per party.
- Achieving constant communication overhead and memory overhead scaling only with a single computation step per party.
- Generalization of IVC to reveal only the final state after multiple increments, ensuring strong t-zero-knowledge privacy.
- Security proof showing malicious security with abort and t-zero-knowledge privacy.

## About the professor

**Omkant Pandey** — Assistant Professor, SBU, Stony Brook University.

Research interests: secure computation and next-generation encryption systems

### Research links

- [Faculty/profile page](https://www3.cs.stonybrook.edu/~omkant/)
- [Identity evidence](https://news.stonybrook.edu/facultystaff/research-into-advanced-cryptography-wins-pandey-1-million-darpa-award/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multiparty Computation and Zero-Knowledge Proofs
**The paper assumes:** cryptographic multiparty computation protocols, zero-knowledge proofs, secret sharing schemes, zkSNARK constructions
**Already in this field?** Skip this entirely if you already understand the basics of secure multiparty computation and zero-knowledge proof systems in cryptography.

This background is essential for understanding the cryptographic foundations of collaborative incrementally verifiable computation, focusing on multiparty computation (MPC) and zero-knowledge proofs, especially zkSNARKs and IVC. The rigorous course offers a deep, structured university-level treatment of these topics, ideal for thorough comprehension. The fast track provides a concise, intuition-driven introduction to the core concepts of privacy-preserving computation and MPC, suitable for quickly gaining the necessary conceptual grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Secure Computation: Part I](https://www.youtube.com/playlist?list=PLgMDNELGJ1Ca3l-xioOzN86BIZ2a0N8Ds) — NPTEL - Indian Institute of Science, Bengaluru · 60 videos · 31.8h across 60 episodes

**Watch only this:** Lectures 1 through 13 (Lec 01 What is Secure MPC to Lec 13 Linear Secret Sharing Contd.), about 6.5 hours — this covers the fundamentals of MPC, secret sharing schemes including Shamir's, and linear secret sharing, which are crucial for understanding the collaborative IVC construction.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, covers secure multiparty computation and secret sharing in detail, including Shamir secret sharing and degree-reduction problems, which are directly relevant to the MPC folding protocol and secret sharing techniques used in the paper.

*If you want all of it:* 31.8 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Privacy-preserving computation](https://www.youtube.com/playlist?list=PLZeK3TZueogHjGeEIWUThWXh0NF98mVeF) — Security and Privacy Academy · 8 videos · 1.0h across 8 episodes

**Watch only this:** Episodes 1 through 4 (Zero-knowledge Proof explained to Secure Multi-party Computation - Secure Circuit Evaluation Explained), about 28 minutes — these episodes introduce zero-knowledge proofs and MPC basics needed to grasp the paper's core ideas.

*Why it unblocks this paper:* This short series from Security and Privacy Academy provides clear, concise explainers on zero-knowledge proofs and secure multiparty computation, including the Millionaires' Problem and secure circuit evaluation, giving a quick conceptual overview of the cryptographic primitives underlying the paper.

*If you want all of it:* 1.0 hour across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Collaborative Incrementally Verifiable Computation," start by building a strong foundation in the key cryptographic techniques it builds upon: zero-knowledge proofs, multi-party computation (MPC), secret sharing schemes, and zkSNARKs. These prerequisites provide the theoretical and practical background necessary to grasp the novel collaborative IVC scheme. Finally, focus on the core concept of incrementally verifiable computation and the authors' own talk or closely related academic presentations to gain direct insight into their contributions and design choices.

### Zero Knowledge Proofs Seminar *(prerequisite)*
Zero-knowledge proofs form the foundational privacy-preserving cryptographic primitive underlying the paper's t-zero-knowledge guarantees. Understanding the formal definitions, security properties, and applications of zero-knowledge proofs is essential to appreciate how the paper achieves privacy against colluding parties.

*How the paper uses it:* The paper achieves t-zero-knowledge privacy guarantees for collaborative proofs, making zero-knowledge proofs a critical prerequisite.

▶ [Distributed Zero-Knowledge Proofs and Applications to Secure Computation - Elette Boyle](https://www.youtube.com/watch?v=RyPZQIEywPA) — ZKProof Standards · 51:26 · 5y ago

### Multi Party Computation Lecture *(prerequisite)*
Multi-party computation (MPC) protocols enable multiple distrustful parties to jointly compute functions over their private inputs without revealing them. The paper designs a special-purpose MPC protocol tailored for folding operations, so a solid understanding of MPC concepts and protocols is necessary.

*How the paper uses it:* The authors design a special-purpose MPC protocol for collaborative folding to enable efficient collaborative proof updates.

▶ [Secure Multi Party Computation part 1- The BGW Protocol - Gilad Asharov](https://www.youtube.com/watch?v=XA_4dzs1Zys) — The BIU Research Center on Applied Cryptography and Cyber Security · 1:00:00 · 6y ago

### Secret Sharing Schemes Talk *(prerequisite)*
Secret sharing schemes, especially Shamir secret sharing, are used in the paper to manage witness shares and avoid costly degree-reduction steps in the MPC protocol. Understanding how secret sharing works and its probabilistic and algebraic properties is important for grasping the efficiency and security trade-offs in the collaborative IVC scheme.

*How the paper uses it:* The paper uses Shamir secret sharing with different polynomial degrees to manage witness shares efficiently.

▶ [Andrej Bogdanov - Secret Sharing, A Probabilistic Perspective](https://www.youtube.com/watch?v=rP06qg27_c0) — Rutgers University · 24:43 · 10y ago

### zkSNARKs and Succinct Proofs Lecture *(prerequisite)*
zkSNARKs provide succinct, non-interactive proofs of knowledge and are the prior art context for scalable succinct proof systems. The paper extends Nova's folding-based IVC, which is related to zkSNARK constructions, so understanding zkSNARKs and succinct proofs is crucial to appreciate the improvements and limitations of the proposed scheme.

*How the paper uses it:* The paper extends Nova's folding-based IVC construction, which relates closely to zkSNARKs and succinct proofs.

▶ [zk-SHARKs: Combining Succinct Verification and Public Coin Setup - Madars Virza, MIT](https://www.youtube.com/watch?v=OP8ydUxAVt4) — ZKProof Standards · 25:56 · 7y ago

### Incrementally Verifiable Computation Lecture
Incrementally verifiable computation (IVC) is the core concept enabling efficient proof updates over streaming computations. This lecture provides a detailed academic treatment of verifiable computation, which is essential to understand the incremental and collaborative aspects introduced in the paper.

*How the paper uses it:* The paper's main contribution is a collaborative IVC scheme that supports streaming computations with private inputs.

▶ [Introduction to Verifiable Computing - Ahto Truu - ACCU 2022](https://www.youtube.com/watch?v=ar-VpygQWqw) — ACCU Conference · 1:25:12 · 4y ago

### Collaborative Incrementally Verifiable Computation Paper Talk *(paper-talk search result; attribution unverified)*
The authors' own talk or closely related conference presentations provide direct insight into their novel collaborative IVC scheme, design decisions, and security proofs. This is the most authoritative and detailed source for understanding the paper's contributions and context.

*How the paper uses it:* Direct insight from the authors on their novel collaborative IVC scheme.

▶ [Verifiable Computation (Asiacrypt 2024)](https://www.youtube.com/watch?v=rOspv4WAlz0) — IACR · 44:44 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Collaborative Incrementally Verifiable Computation, start by building foundational knowledge of cryptographic techniques like secret sharing and multi-party computation, which enable secure collaboration among distrustful parties. Then, learn about zero-knowledge proofs and zkSNARKs to grasp privacy-preserving succinct proofs. Finally, focus on incrementally verifiable computation and the specific collaborative IVC scheme introduced in the paper, which combines these concepts for efficient, streaming multi-party proofs.

### Secret Sharing Schemes Talk *(prerequisite)*
Secret sharing schemes allow a secret to be split into parts distributed among parties, so that only certain groups can reconstruct the secret. Shamir's Secret Sharing is a foundational method using polynomial interpolation to securely share secrets. Understanding this helps grasp how the paper manages witness shares and avoids costly degree-reduction in their MPC protocol.

*How the paper uses it:* The paper uses Shamir secret sharing with different polynomial degrees to manage witness shares efficiently in the collaborative MPC protocol.

▶ [Simple introduction to Shamir's Secret Sharing and Lagrange interpolation](https://www.youtube.com/watch?v=kkMps3X_tEE) — CryptoClear · 17:19 · 10y ago

### Multi Party Computation Lecture *(prerequisite)*
Multi-party computation (MPC) enables multiple parties to jointly compute a function over their inputs while keeping those inputs private. This is key for collaborative proof generation among distrustful parties. Understanding MPC principles is essential to follow the paper's design of a special-purpose MPC protocol tailored for folding operations.

*How the paper uses it:* The authors design a special-purpose MPC protocol for collaborative folding that achieves constant communication overhead per party.

▶ [Introduction to Multi-Party Computation (MPC or SMPC)](https://www.youtube.com/watch?v=90jcXCHsBF0) — Safe-DEED · 5:44 · 5y ago

### Zero Knowledge Proofs Seminar *(prerequisite)*
Zero-knowledge proofs let one party prove knowledge of a secret without revealing it, ensuring privacy. The concept of t-zero-knowledge extends this privacy to coalitions of parties. This foundation is critical to understand the paper's privacy guarantees and how proofs reveal only the final state after multiple increments.

*How the paper uses it:* The protocol achieves t-zero-knowledge privacy, hiding inputs of up to t colluding parties, ensuring strong privacy guarantees.

▶ [Zero-Knowledge Proofs Explained: How ZK Technology Works 2026](https://www.youtube.com/watch?v=jdkjuiNtLiQ) — CRYPTO LADY · 5:17 · 8mo ago

### zkSNARKs and Succinct Proofs Lecture *(prerequisite)*
zkSNARKs are succinct, non-interactive zero-knowledge proofs that allow efficient verification of computations. They provide context for scalable succinct non-interactive arguments of knowledge, which the paper extends to a collaborative and incrementally updatable setting. Understanding zkSNARKs helps appreciate the improvements and limitations addressed by the paper.

*How the paper uses it:* The paper builds on zkSNARKs and IVC techniques to enable collaborative, incrementally updatable proofs with low overhead.

▶ [Introduction to zkSnarks](https://www.youtube.com/watch?v=IizZEihY8AE) — Bill Buchanan OBE FRSE · 12:32 · 9y ago

### Incrementally Verifiable Computation Lecture
Incrementally verifiable computation (IVC) allows proofs to be updated efficiently as computations progress, without recomputing from scratch. This is crucial for streaming data and long-running computations. Learning about IVC provides the core method enabling the paper's collaborative proof updates over streaming computations.

*How the paper uses it:* The paper introduces a collaborative IVC scheme that supports streaming computations with efficient incremental proof updates.

▶ [Introduction to Verifiable Computing - Ahto Truu - ACCU 2022](https://www.youtube.com/watch?v=ar-VpygQWqw) — ACCU Conference · 1:25:12 · 4y ago

### Collaborative Incrementally Verifiable Computation Paper Talk *(paper-talk search result; attribution unverified)*
This talk by the authors presents their novel collaborative IVC scheme, explaining the motivation, design, and key contributions. It offers direct insight into how the paper's approach overcomes prior limitations and achieves efficient, privacy-preserving collaborative proofs.

*How the paper uses it:* The talk directly covers the collaborative IVC scheme introduced in the paper, providing detailed explanations from the authors.

▶ [Verifying computations with state](https://www.youtube.com/watch?v=PSXvTIVhI-0) — Association for Computing Machinery (ACM) · 29:13 · 12y ago

## Already in your library

- [Zero Knowledge Proofs - Computerphile](https://www.youtube.com/watch?v=HUs1bH85X9I) — also for: HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes (Pratik Soni)
- [A Beginner's Guide to Zero Knowledge Proofs (ZK Proofs Explained)](https://www.youtube.com/watch?v=_MYpZQVZdiM) — also for: Round-Optimal Pairing-Free Blind Signatures (Stefano Tessaro)
- [Multiparty Computation Research](https://www.youtube.com/watch?v=bSC4rCHbLlc) — also for: BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer (Alan T. Sherman)
- [Lec 01 What is Secure Multi-Party Computation (MPC)?](https://www.youtube.com/watch?v=NXFLrm8zcS8) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Introduction to Secure Multi-Party Computation - Ahto Truu ...](https://www.youtube.com/watch?v=z4aStwXT2GE) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Lec 11 Shamir Secret-Sharing](https://www.youtube.com/watch?v=EwazKH7X0FI) — also for: Time-lock puzzles and timed-release Crypto (Ron Rivest)
- [Secret Sharing Explained Visually](https://www.youtube.com/watch?v=iFY5SyY3IMQ) — also for: Disincentivize Collusion in Verifiable Secret Sharing (Hemanta K. Maji)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the collaborative incrementally verifiable computation (IVC) scheme introduced in the paper. The beginner project recreates a core mechanism of incremental proof updates with multiple parties using secret sharing, the intermediate project implements a simplified collaborative folding MPC protocol and compares communication overhead against a naive baseline, and the advanced project explores extending the scheme to reduce prover runtime or relax communication assumptions, addressing key limitations and future directions from the paper.

### Beginner — Incremental Proof Update Simulation with Secret Sharing
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of the collaborative incremental proof update process for a streaming computation involving multiple parties. Using Shamir secret sharing, you implement witness sharing and incremental updates of a proof state over a sequence of computation steps, demonstrating constant communication per party per step.

**Why it shows you understood the paper:** This project shows you understand the core idea of collaborative IVC: how multiple parties can jointly update succinct proofs incrementally without recomputing from scratch, and how secret sharing manages private inputs securely.

**Grounded in:** Introduction of collaborative incrementally verifiable computation enabling multiple parties to jointly update succinct proofs for streaming computations; achieving constant communication overhead per party per step.

**Tech stack:** Python 3.11, Jupyter Notebook, SecretSharing library (e.g. 'secretsharing' Python package)

**Data:** Synthetic streaming data simulated as incremental inputs to a simple arithmetic computation function F.

**Build it:**

1. Implement Shamir secret sharing for splitting and reconstructing secret inputs among n parties with threshold t.
2. Simulate a simple step computation F (e.g., addition or multiplication) on secret-shared inputs.
3. Implement incremental proof state updates over k steps, where each party updates its witness share and communication per step is constant.
4. Visualize communication overhead and memory usage per party per step.
5. Write a README explaining how the simulation relates to the collaborative IVC scheme and its constant communication property.

**Ships as:** A Jupyter notebook or Python scripts simulating incremental proof updates with secret sharing, with plots showing communication and memory overhead, and a README linking the implementation to the paper's collaborative IVC concept.

**Stretch goal:** Add zero-knowledge masking to the witness shares to simulate t-zero-knowledge privacy against colluding parties.

### Intermediate — Collaborative Folding MPC Protocol Implementation and Benchmark
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the special-purpose MPC protocol for folding operations described in the paper. Your implementation supports multiple parties performing folding steps collaboratively with constant communication per party. You benchmark communication and memory overhead against a naive MPC baseline that uses degree-reduction.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core technical contribution: the novel MPC protocol tailored for folding that avoids costly degree-reduction and achieves constant communication overhead per party.

**Grounded in:** Design of a special-purpose MPC protocol for collaborative folding with constant communication overhead per party; demonstration that the folding scheme requires no intermediate degree-reduction, saving communication costs.

**Tech stack:** Python 3.11, asyncio or multiprocessing for simulating multiple parties, NumPy for polynomial operations

**Data:** Synthetic polynomial shares representing witness shares for folding steps; no external dataset needed.

**Build it:**

1. Implement polynomial secret sharing with different degrees to represent witness shares.
2. Implement folding operations on secret-shared polynomials collaboratively among n parties.
3. Implement the MPC protocol that avoids intermediate degree-reduction during folding.
4. Implement a naive baseline MPC protocol that performs degree-reduction after folding.
5. Benchmark and compare communication and memory overhead per party for both protocols over multiple folding steps.
6. Document the implementation, benchmarks, and relate results to the paper's claims.

**Ships as:** A Python project with scripts to run the collaborative folding MPC protocol and baseline, benchmark results comparing communication and memory overhead, and a detailed README explaining the protocol and its efficiency gains.

**Stretch goal:** Extend the implementation to include zero-knowledge commitments and simulate malicious security with abort.

### Advanced — Extending Collaborative IVC to Sublinear Prover Runtime or Weaker Communication Models
*Effort: 3+ weeks*

You design and prototype an extension to the collaborative IVC scheme addressing one of the paper's stated limitations or future directions. For example, you explore integrating packed-secret-sharing techniques to reduce prover runtime towards sublinear, or you adapt the MPC protocol to work under weaker communication assumptions (e.g., asynchronous or point-to-point channels). You evaluate the feasibility and performance impact of your extension.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's open problems and future work, demonstrating your ability to extend state-of-the-art cryptographic protocols beyond their original scope.

**Grounded in:** Limitations: prover runtime is not sublinear; requires broadcast channel assumption. Future directions: developing sublinear prover-time updatable zkSNARKs; extending scheme to weaker communication assumptions or asynchronous networks.

**Tech stack:** Python 3.11, NumPy, asyncio or networking libraries for communication simulation, Optional: cryptographic libraries for secret sharing or zkSNARK primitives

**Data:** Synthetic data simulating streaming inputs and secret shares; no external dataset required.

**Build it:**

1. Study the paper's description of the prover runtime limitation or communication assumptions.
2. Design a modification or extension to the MPC protocol or secret sharing scheme to address the chosen limitation.
3. Implement a prototype of the extended protocol simulating multiple parties.
4. Measure prover runtime or communication overhead compared to the original protocol.
5. Analyze trade-offs in security, efficiency, and practicality.
6. Write a comprehensive report and README documenting your design, implementation, evaluation, and relation to the paper.

**Ships as:** A prototype implementation and evaluation of an extended collaborative IVC protocol addressing a key limitation, with a detailed report and README discussing the design choices and results.

**Stretch goal:** Prepare a presentation or blog post summarizing your findings and proposing future research directions.
