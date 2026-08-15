---
title: "439 · Revisiting the Security of Sparkle — Adam O'Neill"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adam-o-neill"
source_hash: "f430b1071344ab3fc32af8122c00bd7b8f44f0348c6cab121f654fde11edcefe"
sequence: 439
generator: "outreach-garden: managed"
---

# 439 · Revisiting the Security of Sparkle

## At a glance

- **Professor:** Adam O'Neill
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [Revisiting the Security of Sparkle](https://eprint.iacr.org/2026/431)
- **Authors:** Ojaswi Acharya, Georg Fuchsbauer, Adam O’Neill, Marek Sefranek
- **Year:** 2025

## Paper overview

This paper revisits the Sparkle threshold Schnorr signature scheme, addressing gaps in its security proofs. The authors provide the first tight proof of full adaptive security for Sparkle in the pure random oracle model without relying on the algebraic group model. They introduce a new hardness assumption called the Vandermonde circular discrete-logarithm (VCDL) assumption, which enables simulation of adaptive corruptions without rewinding. The work also establishes equivalences between VCDL and other assumptions and extends the approach to multi-user Schnorr signatures.

### Why it matters

**Research problem:** The original Sparkle scheme lacked a proof of static security and had gaps in its claimed full adaptive security proof. Existing proofs either relied on flawed assumptions or stronger idealized models like the algebraic group model. The problem is to establish tight, proof-based full adaptive security for Sparkle in the pure random oracle model under plausible assumptions.

**Why it matters:** Threshold Schnorr signatures like Sparkle are important for blockchain and distributed systems due to their efficiency and compatibility with existing verification infrastructure. Full adaptive security is a strong and desirable security notion, especially as identified by recent NIST calls. Tight security proofs without relying on strong idealizations improve confidence and practical parameter choices.

**Key contributions:**

- First proof of static security for the original Sparkle scheme in the random oracle model.
- Introduction of the Vandermonde circular discrete-logarithm (VCDL) assumption, an interactive circular assumption tailored for adaptive security without rewinding.
- Tight reduction proving full adaptive security of Sparkle under VCDL in the pure random oracle model.
- Equivalence results showing VCDL tightly reduces to and is implied by the LDVR assumption in the elliptic-curve generic group model.
- A new framework generalizing circular assumptions and vector representation problems, including a tight proof of adaptive multi-user security for basic Schnorr signatures.

## About the professor

**Adam O'Neill** — Assistant Professor, Manning College of Information and Computer Sciences (CICS), Univ. of Massachusetts Amherst.

Research interests: Security and Privacy

### Research links

- [Faculty/profile page](https://www.cics.umass.edu/about/directory/adam-oneill)
- [Identity evidence](https://groups.cs.umass.edu/oneill)
- [Identity evidence](https://groups.cs.umass.edu/oneill/publications/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cryptographic Proofs and Security Models
**The paper assumes:** cryptographic security proofs, random oracle model, adaptive security, hardness assumptions, reduction techniques
**Already in this field?** Skip this entirely if you already understand cryptographic security proofs and the random oracle model at a graduate level.

This background focuses on cryptographic proofs and security models, essential for understanding the tight adaptive security proofs and novel hardness assumptions like VCDL in the paper on Sparkle. The rigorous course offers a deep, structured university-level treatment of foundational cryptography concepts and proof techniques, while the fast track provides a concise, intuition-driven introduction to modern cryptography and security proofs. Choose the course for comprehensive mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.5630 Advanced Topics in Cryptography, Fall 2023](https://www.youtube.com/playlist?list=PLUl4u3cNGP61EZllk7zwgvPbI4kbnKhWz) — MIT OpenCourseWare · 17 videos · 22.6h across 17 episodes

**Watch only this:** Lectures 1 through 7 (Interactive Proofs and the Sum-Check Protocol, Doubly Efficient Interactive Proofs, GKR Protocol, PCP via GKR, Kilian-Micali Protocol, Fiat-Shamir Paradigm and its Soundness) — about 9 hours total, stopping after the detailed treatment of Fiat-Shamir soundness which underpins random oracle model proofs.

*Why it unblocks this paper:* MIT 6.5630 Advanced Topics in Cryptography, Fall 2023 covers interactive proofs, security reductions, and the Fiat-Shamir paradigm in depth, directly relevant to understanding adaptive security proofs and random oracle model techniques used in the paper.

*If you want all of it:* All 17 lectures, about 22.6 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Modern Cryptography](https://www.youtube.com/playlist?list=PLvF7uxx51owgjyJgt47z-Ku1Eznk1UVMm) — Dominique Schröder · 7 videos · 1.4h across 7 episodes

**Watch only this:** Episodes 3 (Definition of Private-Key Encryption), 4 (Security Proof - Reductions), and 5 (Eavesdropper security - pseudorandom generator) — about 36 minutes total, covering core concepts of security definitions and reductions relevant to the paper's proof framework.

*Why it unblocks this paper:* Dominique Schröder's Introduction to Modern Cryptography playlist concisely covers cryptographic definitions, security proofs, and reductions, providing a clear and accessible foundation for understanding the proof techniques and assumptions in the paper.

*If you want all of it:* All 7 episodes, about 1.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Revisiting the Security of Sparkle," start with foundational concepts including threshold Schnorr signatures, the random oracle model, adaptive security proofs, and circular assumptions in cryptography. These prerequisites provide the necessary background on the signature scheme, the idealized model used for proofs, the challenges of adaptive adversaries, and the nature of circular hardness assumptions. Then, focus on the paper's core contributions by watching the authors' own talk on Sparkle's security proof, which directly addresses the new Vandermonde circular discrete-logarithm assumption and the tight adaptive security proofs.

### Threshold Schnorr signatures security *(prerequisite)*
Threshold Schnorr signatures form the cryptographic foundation upon which Sparkle is built. Understanding their design, security challenges, and existing schemes like FROST is essential to appreciate the improvements and proofs presented in the paper.

*How the paper uses it:* Sparkle is a threshold Schnorr signature scheme, so understanding threshold Schnorr signatures is foundational to grasping the paper's contributions.

▶ [FROST: Flexible Round-Optimized Schnorr Threshold Signatures - Chelsea Komlo](https://www.youtube.com/watch?v=ReN0kMzDFro) — UCL Information Security Research Group · 38:39 · 5 years ago

### Random oracle model cryptography *(prerequisite)*
The random oracle model is an idealized cryptographic model used in the paper's security proofs. Familiarity with this model helps in understanding the assumptions and limitations of the security results presented.

*How the paper uses it:* The paper proves security of Sparkle in the pure random oracle model, making this concept critical to understanding the proof framework.

▶ [Pooya Farshim | Modeling Random Oracles under Unpredictable Queries](https://www.youtube.com/watch?v=LcPKnDmoLmk) — Horst Goertz Institute for IT Se­cu­ri­ty · 17:55 · 10 years ago

### Adaptive security proofs in cryptography *(prerequisite)*
Adaptive security proofs address adversaries that can adaptively corrupt parties during protocol execution, a key challenge tackled by the paper. Understanding these proofs provides insight into the significance of the paper's tight adaptive security results.

*How the paper uses it:* The paper provides the first tight proof of full adaptive security for Sparkle, so understanding adaptive security is crucial.

▶ [Enhancing Threshold Group Action Signature Schemes: Adaptive Security and Scalability Improvement](https://www.youtube.com/watch?v=jExmrzZT5ss) — PQCrypto conference videos · 20:39 · 1 year ago

### Circular assumptions in cryptography *(prerequisite)*
Circular assumptions are a class of hardness assumptions that the paper extends with the Vandermonde circular discrete-logarithm assumption. Understanding these assumptions helps contextualize the novelty and strength of the paper's new assumption.

*How the paper uses it:* The paper introduces VCDL as an interactive strengthening of the circular discrete-logarithm assumption, making this background important.

▶ [Public Key Cryptosystems: Stronger Security from General Assumptions](https://www.youtube.com/watch?v=WUKLNcPmdoc) — Microsoft Research · 1:13:05 · 9 years ago

### Vandermonde circular discrete-logarithm assumption
The Vandermonde circular discrete-logarithm (VCDL) assumption is the paper's central new hardness assumption enabling tight adaptive security proofs without rewinding. Understanding this assumption is key to grasping the paper's main technical innovation.

*How the paper uses it:* VCDL is the novel assumption introduced by the authors to prove full adaptive security of Sparkle.

▶ [noc20 cs02 lec42 Cryptographic Applications of the Discrete Log Assumption](https://www.youtube.com/watch?v=19tskoxC7qw) — NPTEL - Indian Institute of Science, Bengaluru · 32:05 · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Sparkle's security, start by grasping the basics of threshold Schnorr signatures, which are the foundational cryptographic schemes the paper improves upon. Next, learn about the random oracle model, as the paper's security proofs rely on this idealized cryptographic model. Then, study adaptive security proofs to appreciate the challenges of proving security against adaptive adversaries. After that, explore circular assumptions in cryptography, which provide background for the new Vandermonde circular discrete-logarithm assumption introduced in the paper. Finally, dive into the Vandermonde circular discrete-logarithm assumption itself, the core new hardness assumption enabling the paper's main results.

### Threshold Schnorr signatures security *(prerequisite)*
Threshold Schnorr signatures allow multiple parties to jointly produce a Schnorr signature without revealing their individual secret shares. Understanding how these signatures work and their security properties is essential to appreciate the improvements made by the Sparkle scheme.

*How the paper uses it:* The paper revisits the Sparkle threshold Schnorr signature scheme and proves its full adaptive security.

▶ [FROST: Flexible Round-Optimized Schnorr Threshold Signatures - Chelsea Komlo](https://www.youtube.com/watch?v=ReN0kMzDFro) — UCL Information Security Research Group · 38:39 · 5 years ago

### Random oracle model cryptography *(prerequisite)*
The random oracle model is an idealized framework where hash functions are treated as perfect random functions. Many cryptographic security proofs, including those in this paper, rely on this model to argue security properties.

*How the paper uses it:* The paper provides tight security proofs for Sparkle in the pure random oracle model.

▶ [Random Oracle Model in Cryptography | Ideal Hash Function Model | CNS](https://www.youtube.com/watch?v=0rAC1bO9oUk) — T V Nagaraju Technical · 9:46 · 4 months ago

### Adaptive security proofs in cryptography *(prerequisite)*
Adaptive security proofs deal with adversaries that can adaptively corrupt parties during the protocol execution. These proofs are more challenging and require sophisticated techniques to handle such dynamic adversaries.

*How the paper uses it:* The paper addresses gaps in Sparkle's claimed full adaptive security proof and provides a tight proof under new assumptions.

▶ [Enhancing Threshold Group Action Signature Schemes: Adaptive Security and Scalability Improvement](https://www.youtube.com/watch?v=jExmrzZT5ss) — PQCrypto conference videos · 20:39 · 1 year ago

### Circular assumptions in cryptography *(prerequisite)*
Circular assumptions are cryptographic hardness assumptions involving circular relations among group elements. They have been used to prove security of complex protocols but often require careful handling to avoid flaws.

*How the paper uses it:* The paper builds on circular assumptions and introduces a new interactive strengthening called the Vandermonde circular discrete-logarithm assumption.

▶ [Overview of Elliptic Curve Isogenies Based Public Key Cryptography Assumptions](https://www.youtube.com/watch?v=cN2JR-J9-Hk) — Simons Institute for the Theory of Computing · 43:22 · Streamed 6 years ago

### Vandermonde circular discrete-logarithm assumption
The Vandermonde circular discrete-logarithm (VCDL) assumption is a new interactive hardness assumption introduced in the paper to enable tight adaptive security proofs without rewinding. It generalizes and strengthens previous circular assumptions.

*How the paper uses it:* VCDL is the key technical contribution enabling the paper's tight full adaptive security proof for Sparkle.

▶ [The Discrete Logarithm Problem](https://www.youtube.com/watch?v=za9azzh4v9A) — Neso Academy · 8:19 · 4 years ago

## Already in your library

- [Dominique Unruh - The quantum random oracle model Part 1 of 2 - IPAM at UCLA](https://www.youtube.com/watch?v=YAIFGB4ryGE) — also for: Nonadaptive One-Way to Hiding Implies Adaptive Quantum Reprogramming (Joseph Jaeger)
- [Random Oracle model, Security of hash functions](https://www.youtube.com/watch?v=L9YnO_bIdnk) — also for: Obfuscated Consensus (James Aspnes)
- [Assumptions in cryptography and complexity theory](https://www.youtube.com/watch?v=WWfikhcFq4w) — also for: Improved Pseudorandom Codes from Permuted Puzzles (Daniel Wichs)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Revisiting the Security of Sparkle." The beginner project focuses on implementing and visualizing the Vandermonde circular discrete-logarithm (VCDL) assumption conceptually. The intermediate project involves reimplementing the core Sparkle threshold Schnorr signature scheme and reproducing a key security metric under the VCDL assumption. The advanced project extends the VCDL framework to explore its applicability beyond threshold Schnorr signatures, addressing one of the paper's future directions.

### Beginner — Visualizing the Vandermonde Circular Discrete-Logarithm Assumption
*Effort: a weekend, ~8 hours*

You build an interactive visualization and explanatory web app that demonstrates the structure and intuition behind the Vandermonde circular discrete-logarithm (VCDL) assumption introduced in the paper. This includes illustrating the Vandermonde matrix structure, the circular discrete-logarithm problem, and how the VCDL assumption strengthens it to enable adaptive security proofs without rewinding.

**Why it shows you understood the paper:** This project shows you grasp the key novel hardness assumption of the paper and can explain its mathematical structure and role in the security proof, which is central to the paper's contribution.

**Grounded in:** Introduction of the Vandermonde circular discrete-logarithm (VCDL) assumption, an interactive circular assumption tailored for adaptive security without rewinding.

**Tech stack:** TypeScript, React, D3.js

**Data:** No external data required; you simulate example matrices and group elements to illustrate the assumption.

**Build it:**

1. Implement a React app with D3.js to visualize Vandermonde matrices and circular discrete-logarithm problem instances.
2. Create interactive components to show how the VCDL assumption extends the circular discrete-logarithm assumption.
3. Add explanatory text and diagrams summarizing the assumption's role in adaptive security proofs.
4. Test the app locally and ensure the visualization clearly communicates the concept.

**Ships as:** A GitHub repo with a React/D3.js app that visually explains the VCDL assumption, accompanied by a README linking the visualization to the paper's contribution.

**Stretch goal:** Add a quiz or interactive exercises to test understanding of the VCDL assumption and its equivalence to LDVR.

### Intermediate — Reimplementing Sparkle Threshold Schnorr Signature and Verifying Static Security
*Effort: 2 weekends, ~20 hours*

You implement the core Sparkle threshold Schnorr signature scheme from the paper's description, focusing on the static security setting under the circular discrete-logarithm (CDL) assumption. You simulate signing and verification among multiple signers and reproduce a security metric or property (e.g., correctness and resistance to static corruptions) reported in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's cryptographic scheme and security model into code, and to experimentally verify a foundational security property, showing comprehension beyond theory.

**Grounded in:** First proof of static security for the original Sparkle scheme in the random oracle model.

**Tech stack:** Python 3.11, PyCryptodome, Jupyter Notebook

**Data:** No external dataset; you generate synthetic cryptographic keys and messages for testing the scheme.

**Build it:**

1. Implement the Sparkle threshold Schnorr signature scheme based on the paper's protocol description.
2. Simulate key generation, signing, and verification among multiple signers with Shamir secret sharing.
3. Implement tests to verify correctness and static security properties under the CDL assumption.
4. Document the implementation and compare your results to the paper's static security claims.

**Ships as:** A Jupyter Notebook demonstrating the Sparkle scheme implementation, tests verifying static security, and a report linking results to the paper.

**Stretch goal:** Extend the implementation to simulate adaptive corruptions and explore the VCDL assumption's role.

### Advanced — Extending the VCDL Assumption Framework Beyond Threshold Schnorr Signatures
*Effort: 3-4 weeks*

You explore and prototype an extension of the Vandermonde circular discrete-logarithm (VCDL) assumption framework to another cryptographic primitive where rewinding is problematic, such as ring signatures or multi-party computation protocols. You analyze the feasibility of adapting the interactive hardness assumption to this new setting and provide a proof-of-concept implementation or formal sketch.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, showing deep engagement with the novel assumption and its potential broader impact, which could initiate a research conversation with the professor.

**Grounded in:** Future direction: Extension of the circular assumption framework to other signature schemes and cryptographic protocols where rewinding is problematic.

**Tech stack:** Python 3.11, SageMath (optional for algebraic computations), LaTeX for documentation

**Data:** No external data; you work with formal cryptographic constructions and simulated protocol instances.

**Build it:**

1. Select a cryptographic primitive (e.g., ring signatures) known to have rewinding challenges in security proofs.
2. Study the VCDL assumption and its interactive structure in detail from the paper.
3. Develop a formal adaptation or variant of VCDL tailored to the chosen primitive.
4. Implement a prototype or formal model demonstrating the adapted assumption's use in a security proof or simulation.
5. Document your findings, challenges, and potential for further research.

**Ships as:** A GitHub repo with prototype code or formal models, and a detailed README or report discussing the extension and its implications.

**Stretch goal:** Attempt to formalize a tight security reduction under the adapted assumption or submit a short workshop paper proposal.

_The paper does not provide released code or datasets, so all implementations must be based on the paper's descriptions and standard cryptographic primitives; careful reading and interpretation are required._
