---
title: "110 · Formalizing MLTL Formula Progression in Isabelle/HOL — Katherine Kosaian"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-katherine-cordwell"
source_hash: "4bda51fee8bc46e20da06e6bb0fbfc5cf0184ccc4b2f5f5d6dfc6462dc6b9905"
sequence: 110
generator: "outreach-garden: managed"
---

# 110 · Formalizing MLTL Formula Progression in Isabelle/HOL

## At a glance

- **Professor:** Katherine Kosaian
- **Institution:** University of Iowa
- **Paper:** [Formalizing MLTL Formula Progression in Isabelle/HOL](https://arxiv.org/pdf/2410.03465)
- **Authors:** Katherine Kosaian, Zili Wang, Elizabeth Sloan, Kristin Rozier
- **Year:** 2025

## Paper overview

This paper formalizes the syntax, semantics, and key properties of Mission-time Linear Temporal Logic (MLTL) in the Isabelle/HOL theorem prover. It verifies the correctness of the MLTL formula progression algorithm, fixing errors in prior proofs and providing a verified, executable implementation. The work establishes foundational concepts like computation length and develops a reusable library of MLTL properties to support future formal verification and tool validation efforts.

### Why it matters

**Research problem:** MLTL is widely used for specifying temporal properties in embedded and aerospace systems, but existing tools analyzing MLTL lack provably correct formal foundations. Prior correctness proofs for MLTL formula progression algorithms were incomplete or contained errors, limiting trustworthiness and hindering tool validation.

**Why it matters:** MLTL is critical for runtime verification and model checking in safety-critical aerospace and embedded systems, including NASA missions. Reliable formal foundations and verified algorithms are essential to ensure correctness of MLTL-based tools and thereby improve system safety and verification confidence.

**Key contributions:**

- Formalization of MLTL syntax and semantics in Isabelle/HOL with a reusable property library
- Verification and correction of MLTL formula progression algorithm and its correctness theorems
- Identification and formalization of the computation length concept crucial for correctness proofs
- Development of custom induction rules and negation normal form transformations for MLTL
- Provision of an executable, verified formula progression implementation with code generation support

## About the professor

**Katherine Kosaian** — Assistant Professor, Department of Computer Science, University of Iowa.

Research interests: formal verification, interactive theorem proving, ways in which math (especially algebra) and computer science intersect, formalizing mathematics and algorithms with safety-critical applications

### Research links

- [Faculty/profile page](https://cs.uiowa.edu/people/katherine-kosaian)
- [Identity evidence](https://sites.google.com/view/katherinekosaian/home)
- [Lab website](https://sites.google.com/view/katherinekosaian/formal-mathods-lab?authuser=0)
- [Google Scholar](https://scholar.google.com/citations?user=tDH2uIoAAAAJ&hl=en&oi=ao)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the formalization of MLTL formula progression in Isabelle/HOL, start by gaining a solid foundation in the Isabelle/HOL theorem prover, as it is the environment used for the formalization and proofs. Next, study the formal verification of temporal logics to appreciate the correctness proofs and theoretical context. Then, explore the temporal logic formula progression algorithm, which is the key algorithm verified and corrected in the paper. Finally, focus on the core concept of Mission-time Linear Temporal Logic (MLTL) and the authors' own talk to directly connect with their formalization and results.

### Isabelle/HOL theorem prover *(prerequisite)*
Understanding Isabelle/HOL is essential because the entire formalization and mechanization of MLTL formula progression is implemented within this interactive theorem prover. The selected lecture by Zili Wang offers a recent, detailed introduction to Isabelle/HOL, covering basic proof techniques and providing context relevant to the paper's formalization work.

*How the paper uses it:* The formalization and mechanization of MLTL formula progression is implemented in Isabelle/HOL.

▶ [Isabelle/HOL Lecture 1](https://www.youtube.com/watch?v=TXRcofnX07U) — Laboratory For Temporal Logic (LTL) · 59:40 · 1 month ago

### Formal verification of temporal logics *(prerequisite)*
This topic provides the theoretical and practical context for correctness proofs and formal properties essential to trustworthy MLTL tool validation. The talk by Pawel Szulc on formal verification with TLA+ is a rigorous research-level presentation that discusses formal methods applied to temporal logics, which aligns well with the paper's goals.

*How the paper uses it:* Context for correctness proofs and formal properties essential to trustworthy MLTL tool validation.

▶ [Pawel Szulc - Formal verification applied (with TLA+)](https://www.youtube.com/watch?v=l9XZYI3jta0) — Scala in the City · 43:05

### Temporal logic formula progression *(prerequisite)*
The formula progression algorithm is the key algorithm verified and corrected in the paper, crucial for runtime verification and model checking. Although no direct author talks on MLTL progression were found, the selected advanced talk on solving quantified Horn clauses and related verification techniques provides insight into formal reasoning about temporal properties and progression-like algorithms.

*How the paper uses it:* The key algorithm verified and corrected in the paper for runtime verification and model checking.

▶ [Solving Quantified Horn Clauses, Andrey Rybalchenko](https://www.youtube.com/watch?v=bTPSCVzp1m8) — Workshop on Software Correctness and Reliability 2013 · 50:07

### Mission-time Linear Temporal Logic
MLTL is the central logic formalism whose syntax and semantics are formalized and verified in the paper. While no direct author talks on MLTL were found, the selected advanced lecture on Linear Temporal Logic by ThoughtLab provides a mathematically precise introduction to LTL, which is foundational to understanding MLTL's temporal logic framework.

*How the paper uses it:* Central logic formalism whose syntax and semantics are formalized and verified in the paper.

▶ [Linear Temporal Logic: Rules for a Perfect Future](https://www.youtube.com/watch?v=uZaNrnkKkDg) — ThoughtLab · 10 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of the Isabelle/HOL theorem prover, since the formalization and verification are done there. Next, build intuition on temporal logics, focusing on Linear Temporal Logic (LTL), which underpins MLTL. Then, study the concept of temporal logic formula progression, the key algorithm the paper verifies and corrects. Finally, explore the specifics of Mission-time Linear Temporal Logic (MLTL) to grasp the paper's core formalism and contributions.

### Isabelle/HOL theorem prover *(prerequisite)*
Isabelle/HOL is an interactive theorem prover used to formally verify mathematical theorems and algorithms. Understanding its basics helps grasp how the paper mechanizes and proves properties about MLTL formulas. This includes learning about proof assistants, simple type theory, and how formal proofs are constructed and checked.

*How the paper uses it:* The paper formalizes MLTL syntax, semantics, and formula progression correctness within Isabelle/HOL.

▶ [Isabelle/HOL Lecture 1](https://www.youtube.com/watch?v=TXRcofnX07U) — Laboratory For Temporal Logic (LTL) · 59:40 · 1 month ago

### Temporal logic formula progression *(prerequisite)*
Formula progression is a technique to update temporal logic formulas as a system evolves over time, crucial for runtime verification and model checking. Understanding this concept clarifies the algorithm the paper verifies and corrects, which ensures formulas correctly reflect system states as time advances.

*How the paper uses it:* The paper verifies and corrects the MLTL formula progression algorithm, a key runtime verification method.

▶ [Linear Temporal Logic: Rules for a Perfect Future](https://www.youtube.com/watch?v=uZaNrnkKkDg) — ThoughtLab · 10 months ago

### Mission-time Linear Temporal Logic
MLTL extends Linear Temporal Logic by incorporating mission time constraints, making it suitable for embedded and aerospace systems. Learning MLTL's syntax and semantics helps understand the specific logic the paper formalizes and verifies, including its unique properties and assumptions.

*How the paper uses it:* The paper formalizes MLTL syntax and semantics and develops a verified library of its properties.

▶ [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — Andrei Popescu · 7:51 · 5 years ago

## Already in your library

- [Lecture 12 Linear temporal logic](https://www.youtube.com/watch?v=--4S7HjoZho) — also for: Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction (Mani B. Srivastava)
- [Linear Temporal Logic](https://www.youtube.com/watch?v=5EO2yUwdODM) — also for: ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees (Jyotirmoy Deshmukh)
