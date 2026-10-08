---
title: "577 · SNARGs for NP from Unprovability of Mathematical Theorems (Or: How to use the simplicity of cryptographic reasoning) — Abhishek Jain"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-abhishek-jain"
source_hash: "0709e84d69078bc92e28b8723d52d5d1d99efefa02cb9ee896a22e220e7055d6"
sequence: 577
generator: "outreach-garden: managed"
---

# 577 · SNARGs for NP from Unprovability of Mathematical Theorems (Or: How to use the simplicity of cryptographic reasoning)

## At a glance

- **Professor:** Abhishek Jain
- **Institution:** Johns Hopkins University
- **Paper:** [SNARGs for NP from Unprovability of Mathematical Theorems (Or: How to use the simplicity of cryptographic reasoning)](https://eprint.iacr.org/2026/1180)
- **Authors:** Yao-Ching Hsieh, Abhishek Jain, Jiatu Li, Surya Mathialagan
- **Year:** 2026

## Paper overview

This paper presents a novel approach to constructing succinct non-interactive arguments (SNARGs) for all NP problems by leveraging the hardness of proving mathematical theorems rather than traditional computational assumptions. The authors introduce a new assumption about the unprovability of certain Extended Frege proof lower bounds in a weak bounded arithmetic theory (APC1). Under this assumption and standard cryptographic assumptions (LWE, SXDH, and prBPP = prP), they show that a variant of an existing EF-SNARG construction is sound for all NP languages. The work formalizes cryptographic reasoning in a weak theory, demonstrating that cryptographic proofs are formally simple, and opens a new direction linking proof complexity and cryptography.

### Why it matters

**Research problem:** Whether succinct non-interactive arguments (SNARGs) for all NP languages can be constructed from standard cryptographic assumptions without relying on strong or non-standard assumptions such as indistinguishability obfuscation or random oracles.

**Why it matters:** SNARGs are crucial cryptographic primitives with significant applications, especially in blockchain technology. Existing constructions for all NP rely on strong or non-standard assumptions, limiting their theoretical and practical appeal. Establishing SNARGs from standard assumptions would be a major breakthrough, improving trust and applicability.

**Key contributions:**

- Introduced a new hardness certification assumption based on unprovability in bounded arithmetic (APC1).
- Proved that under this assumption and standard cryptographic assumptions, SNARGs for all NP exist.
- Formalized the security proofs of cryptographic primitives and EF-SNARG in the weak theory APC1, showing cryptographic reasoning is formally simple.
- Provided a security lifting lemma that converts EF-SNARG security into full SNARG security under the assumption.
- Connected proof complexity lower bounds and cryptographic hardness in a novel way.

## About the professor

**Abhishek Jain** — Associate Professor, Computer Science, Johns Hopkins University.

Research interests: Cryptography, Computer security, Privacy, Blockchains

### Research links

- [Faculty/profile page](https://www.cs.jhu.edu/faculty/abhishek-jain)
- [Professor website](https://www.cs.jhu.edu/~abhishek/)
- [Resolved homepage](https://www.cs.jhu.edu/~abhishek)
- [Lab website](https://arc.isi.jhu.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=xjkmJsgAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/34/3.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** bounded arithmetic and proof complexity
**The paper assumes:** bounded arithmetic, proof complexity, Extended Frege proof systems, formal logic in computer science
**Already in this field?** Skip this entirely if you already have graduate-level familiarity with bounded arithmetic theories and proof complexity frameworks in theoretical computer science.

This background focuses on bounded arithmetic and proof complexity, which are central to understanding the formalization of cryptographic proofs in the weak theory APC1 and the novel unprovability assumptions used in the paper. The rigorous course provides a deep, structured foundation in circuit complexity theory, which underpins proof complexity and bounded arithmetic concepts relevant to the paper. The fast track offers a shorter, more accessible introduction to the same core topics, suitable for quickly grasping key ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Circuit Complexity Theory](https://www.youtube.com/playlist?list=PLFW6lRTa1g80mLxSKThHMRccovvJ9r0cp) — IIT KANPUR-NPTEL · 60 videos · 30.0h across 60 episodes

**Watch only this:** Lectures 1-12, about 6 hours — covering introductions, lower bounds for circuits and formulas, Khrapchenko's theorem, and Subbotovskaya's theorem, which provide the core complexity and proof techniques relevant to the paper's assumptions and formalizations.

*Why it unblocks this paper:* This IIT Kanpur NPTEL course on Circuit Complexity Theory covers foundational topics in circuit lower bounds and complexity, which are essential for understanding proof complexity and bounded arithmetic theories like APC1 used in the paper's formalization of cryptographic proofs.

*If you want all of it:* 30.0 hours across 60 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on SNARGs for NP from unprovability assumptions, start by building a foundation in bounded arithmetic (especially APC1) and Extended Frege proof systems, as these are central to the paper's novel hardness assumptions and formalization of cryptographic proofs. Next, study lattice-based cryptography focusing on the Learning With Errors (LWE) problem, which underpins the cryptographic assumptions used. Finally, focus on the core concept of succinct non-interactive arguments (SNARGs), prioritizing talks by the paper's authors and related advanced research seminars to grasp the new construction and its implications.

### Bounded arithmetic APC1 *(prerequisite)*
Bounded arithmetic, particularly the theory APC1, is the weak arithmetic framework where the paper formalizes the security proofs of EF-SNARGs. Understanding APC1 is crucial to appreciate the unprovability assumptions and the formal simplicity of cryptographic reasoning presented.

*How the paper uses it:* The paper formalizes the EF-SNARG security proof in APC1 and bases its new hardness certification assumption on unprovability in this theory.

▶ [Dr. Leszek Kolodziejczyk | Toda's theorem in bounded arithmetic with parity quantifiers and......](https://www.youtube.com/watch?v=juHMCIJaArE) — INI Seminar Room 1 · 7 months ago

### Extended Frege proof systems *(prerequisite)*
Extended Frege proof systems are a core proof system whose lower bounds and unprovability form the basis of the paper's new hardness assumption. Understanding the complexity and known results about Extended Frege proofs is essential to grasp the theoretical foundations of the paper.

*How the paper uses it:* The unprovability assumption concerns Extended Frege lower bounds, which underpin the soundness and security lifting of the SNARG construction.

▶ [Towards P≠NP from Extended Frege Lower Bounds](https://www.youtube.com/watch?v=zaQx7-PxWPU) — Simons Institute for the Theory of Computing · 56:40

### Lattice-based cryptography LWE *(prerequisite)*
The Learning With Errors (LWE) problem is a standard cryptographic hardness assumption used in the paper's SNARG construction. A rigorous understanding of LWE and its role in post-quantum cryptography is necessary to appreciate the cryptographic assumptions combined with the unprovability assumption.

*How the paper uses it:* The SNARG construction relies on standard assumptions including the hardness of LWE alongside the new unprovability assumption.

▶ [Learning With Errors (LWE) and Public Key Encryption ...](https://www.youtube.com/watch?v=QcVns57MTxg) — Ryan O'Donnell · 25:54

### Succinct non-interactive arguments SNARGs
SNARGs are the central cryptographic primitive constructed in the paper for all NP languages. Understanding existing SNARG constructions and their security proofs provides context for the paper's novel approach using unprovability assumptions and formalization in bounded arithmetic.

*How the paper uses it:* The paper presents a new SNARG construction for NP based on unprovability assumptions and standard cryptographic assumptions.

▶ [Surya Mathialagan - Universal SNARGs for NP from Proofs of ...](https://www.youtube.com/watch?v=Tf9WvpLYNuc) — CMU × LayerZero Crypto Seminar · 52:05

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's novel SNARG construction for NP languages from unprovability assumptions. We start with the basics of lattice-based cryptography (LWE) as a standard hardness assumption, then build intuition on Extended Frege proof systems and bounded arithmetic (APC1), which are central to the paper's new assumptions and formalizations. Finally, we cover succinct non-interactive arguments (SNARGs) themselves, focusing on their role and construction in this work.

### Lattice-based cryptography LWE *(prerequisite)*
Learning With Errors (LWE) is a foundational cryptographic hardness assumption based on the difficulty of solving noisy linear equations over lattices. It underpins many modern cryptographic schemes and is a key standard assumption in this paper's SNARG construction.

*How the paper uses it:* The paper relies on the hardness of LWE as one of the standard cryptographic assumptions supporting their SNARG construction.

▶ [Learning With Errors (LWE) [Post-Quantum Cryptography Explained]](https://www.youtube.com/watch?v=7sp2-W9j2OQ) — Cryptography 101 · 1 month ago

### Extended Frege proof systems *(prerequisite)*
Extended Frege systems are powerful propositional proof systems that extend classical Frege proofs with additional axioms and rules, central to proof complexity. Understanding their structure and the challenge of proving lower bounds is crucial to grasping the paper's new unprovability assumption.

*How the paper uses it:* The paper's new hardness certification assumption is about the unprovability of Extended Frege lower bounds in a weak arithmetic theory.

▶ [On Extended Frege Proofs](https://www.youtube.com/watch?v=-g7IclniUJ0) — Simons Institute for the Theory of Computing · 38:55

### Bounded arithmetic APC1 *(prerequisite)*
APC1 is a weak bounded arithmetic theory used to formalize cryptographic proofs and reasoning in a mathematically simple framework. Familiarity with APC1 helps understand how the paper formalizes the security proofs of their SNARG construction.

*How the paper uses it:* The paper formalizes the security proof of EF-SNARG in the weak bounded arithmetic theory APC1, linking proof complexity and cryptography.

▶ [Learning from Bounded Arithmetic](https://www.youtube.com/watch?v=9BZm5ueHTfo) — Proof Theory Virtual Seminar · 5 years ago

### Succinct non-interactive arguments SNARGs
SNARGs are cryptographic proof systems that allow one to prove membership in NP languages succinctly and non-interactively. Understanding their purpose and construction is essential to appreciate the paper's main contribution of building SNARGs from new unprovability assumptions.

*How the paper uses it:* The paper constructs SNARGs for all NP languages under new unprovability and standard cryptographic assumptions.

▶ [Surya Mathialagan - Universal SNARGs for NP from Proofs of ...](https://www.youtube.com/watch?v=Tf9WvpLYNuc) — CMU × LayerZero Crypto Seminar · 52:05


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of the paper's novel approach to SNARGs for NP via unprovability assumptions in bounded arithmetic. The beginner project grounds you in the foundational concepts of bounded arithmetic and Extended Frege proof systems with a simple interactive visualization. The intermediate project involves reimplementing a core element of the EF-SNARG construction's security proof formalization in APC1, using your existing programming skills and a small synthetic dataset. The advanced project tackles a future direction from the paper by exploring how to weaken the assumptions, specifically removing the SXDH assumption, through a prototype security lifting lemma variant, bridging your software engineering skills with theoretical cryptography research.

### Beginner — Interactive Visualization of Extended Frege Proof Size Lower Bounds in APC1
*Effort: a weekend, ~8 hours*

You build a small web app that visually explains the concept of Extended Frege proof systems and the notion of proof size lower bounds as formalized in the bounded arithmetic theory APC1. The app will allow users to explore simple propositional formulas and see an illustrative comparison of proof sizes under different assumptions, helping to concretely grasp the unprovability assumption introduced in the paper.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key new hardness certification assumption about unprovability in APC1 and can translate abstract proof complexity concepts into an accessible, interactive format.

**Grounded in:** Key contribution: Introduced a new hardness certification assumption based on unprovability in bounded arithmetic (APC1).

**Tech stack:** TypeScript, React, CSS

**Data:** No external data required; you simulate simple propositional formulas and their proof size characteristics as examples.

**Build it:**

1. Research and summarize the basics of Extended Frege proof systems and bounded arithmetic APC1 from the paper and related sources.
2. Design a simple UI with React to input or select propositional formulas and display their proof size lower bound illustrations.
3. Implement visualization components that show hypothetical proof size comparisons and highlight the concept of unprovability.
4. Add explanatory text and tooltips linking the visualization to the paper's assumption about Extended Frege lower bounds in APC1.
5. Test the app for clarity and usability, ensuring it conveys the hardness certification assumption intuitively.

**Ships as:** A GitHub repository with a React web app and README explaining the visualization and its connection to the paper's unprovability assumption.

**Stretch goal:** Add a quiz or interactive tutorial mode that tests users on understanding proof size lower bounds and APC1 concepts.

### Intermediate — Reimplementation of EF-SNARG Security Proof Formalization in APC1
*Effort: 2 weekends, ~20 hours*

You reimplement a simplified version of the paper's formalization of the EF-SNARG security proof within the bounded arithmetic theory APC1. Since no code is released by the authors, you build from the paper's detailed descriptions a prototype that models the key logical steps and reasoning in APC1, using a small synthetic NP language instance to demonstrate the soundness argument.

**Why it shows you understood the paper:** This project shows you grasp the core method of formalizing cryptographic proofs in a weak bounded arithmetic theory and can translate complex theoretical constructs into a working prototype, reflecting the paper's main technical approach.

**Grounded in:** Key result: Demonstrated that the EF-SNARG security proof can be formalized in the weak bounded arithmetic theory APC1.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic NP problem instances (e.g., small SAT formulas) generated programmatically to serve as input for the formalization prototype.

**Build it:**

1. Study the paper's section on formalizing EF-SNARG security proofs in APC1 and understand the logical framework and proof steps.
2. Design a Python prototype that encodes the bounded arithmetic reasoning steps and models the soundness proof structure.
3. Generate small synthetic NP instances (e.g., SAT formulas) to serve as concrete examples for the prototype.
4. Implement the formalization steps, simulating the proof verification and soundness arguments within APC1 constraints.
5. Compare the prototype's outputs against expected theoretical results to validate correctness.
6. Document the prototype and its relation to the paper's formalization approach.

**Ships as:** A GitHub repo containing a Jupyter Notebook with the APC1 formalization prototype, synthetic data generation scripts, and detailed README linking back to the paper's formalization result.

**Stretch goal:** Extend the prototype to model the non-adaptive soundness property and compare with a baseline naive formalization.

### Advanced — Prototype Security Lifting Lemma Without SXDH Assumption
*Effort: 3+ weeks*

You develop a prototype implementation and theoretical exploration of a variant of the paper's security lifting lemma that attempts to remove the SXDH assumption, relying only on LWE and prBPP = prP. This involves coding a modular framework to simulate the security proof steps and experimenting with alternative assumptions, aiming to partially address one of the paper's stated future directions.

**Why it shows you understood the paper:** This project demonstrates deep engagement with the paper's limitations and future directions, bridging your software engineering skills with cryptographic research by attempting to weaken assumptions in the SNARG construction's security proof.

**Grounded in:** Future direction: Weaken the assumptions by removing SXDH and relying only on LWE and prBPP = prP.

**Tech stack:** Python 3.11, TypeScript, Jupyter Notebook

**Data:** Synthetic cryptographic challenge instances generated to test the security lifting framework; no real cryptographic datasets exist for this theoretical work.

**Build it:**

1. Review the paper's security lifting lemma and understand the role of the SXDH assumption in the proof.
2. Design a modular codebase to represent the security proof components and assumptions, enabling substitution of SXDH with alternatives.
3. Implement simulation modules for LWE-based hardness and prBPP = prP derandomization assumptions.
4. Experiment with variants of the lifting lemma omitting SXDH, recording theoretical and empirical observations.
5. Analyze the results to identify potential gaps or partial successes in weakening assumptions.
6. Write a detailed report and README explaining the prototype, experiments, and implications for the paper's future direction.

**Ships as:** A GitHub repository with code simulating the security lifting lemma variants, experimental notebooks, and a comprehensive README discussing the attempt to remove SXDH.

**Stretch goal:** Extend the prototype to explore weakening the base theory from APC1 to an even weaker bounded arithmetic theory.
