---
title: "110 · Formalizing MLTL Formula Progression in Isabelle/HOL — Katherine Kosaian"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-katherine-cordwell"
source_hash: "f492ce1438d25f51317ef3582e742e773af92b29e9934a79450f6e823b69d932"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** temporal logic and formal verification
**The paper assumes:** temporal logic, linear temporal logic semantics, formal verification methods, theorem proving basics
**Already in this field?** Skip this entirely if you already understand temporal logic semantics and have experience with formal verification or theorem proving.

To understand the formalization of MLTL formula progression in Isabelle/HOL, a solid grasp of temporal logic and formal verification is essential. The rigorous course option offers a comprehensive university-level treatment of safety-critical system validation, including temporal logic and runtime monitoring, while the fast track provides a concise, focused introduction to linear temporal logic concepts and semantics. Choose the rigorous course for deep foundational knowledge and the fast track for a quick, clear conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford AA228V I Validation of Safety Critical Systems I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOq1LMLI8U7djzDb8--xpaC) — Stanford Online · 17 videos · 20.1h across 17 episodes

**Watch only this:** Episodes 3 and 4: 'Property Specification 1' and 'Property Specification 2', plus Episode 16: 'Runtime Monitoring', about 3.5 hours total (~70 minutes each episode). These cover temporal logic specification and runtime verification concepts crucial for understanding MLTL formalization.

*Why it unblocks this paper:* This Stanford course covers property specification and runtime monitoring in safety-critical systems, directly relevant to MLTL and its formal verification in Isabelle/HOL. It provides a rigorous foundation in validation techniques and temporal logic applications in embedded and aerospace systems.

*If you want all of it:* All 17 episodes, approximately 20.1 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lectures on Linear Temporal Logic](https://www.youtube.com/playlist?list=PLMBx8HjvK7672qEl6bdnXdzYEbLP_lWPw) — Andrei Popescu · 9 videos · 1.3h across 9 episodes

**Watch only this:** Episodes 1-5: 'Introduction to LTL. Part 1: Basic Intuition' through 'Introduction to LTL. Part 5: Formal Semantics', about 40 minutes total (~8 minutes each). These episodes cover the core concepts of LTL syntax and semantics needed to grasp MLTL formalization.

*Why it unblocks this paper:* This concise series by Andrei Popescu introduces Linear Temporal Logic (LTL) with clear explanations of syntax, semantics, and formula equivalence, providing a focused primer on temporal logic foundational to MLTL understanding.

*If you want all of it:* All 9 episodes, approximately 1.3 hours.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and technical challenge to demonstrate understanding of the paper "Formalizing MLTL Formula Progression in Isabelle/HOL." The beginner project focuses on implementing a core MLTL formula progression concept in a familiar programming language, the intermediate project involves reimplementing and testing the formula progression algorithm with a simple baseline, and the advanced project extends the formalization to address one of the paper's stated limitations by exploring more expressive temporal operators or infinite traces.

### Beginner — MLTL Formula Progression Simulator in Python
*Effort: a weekend, ~8 hours*

You build a simple Python script that simulates the progression of a small subset of MLTL formulas over finite traces. The script implements the core idea of formula progression, including negation normal form transformation and basic temporal operators covered in the paper's core subset. You demonstrate progression on example traces and formulas, printing intermediate progression steps.

**Why it shows you understood the paper:** This project shows you understand the fundamental mechanism of MLTL formula progression and the role of negation normal form and induction rules in simplifying formulas for progression. A professor would see you grasped the core algorithmic idea and its logical basis.

**Grounded in:** Formalization of MLTL syntax and semantics in Isabelle/HOL with a reusable property library; Development of custom induction rules and negation normal form transformations for MLTL

**Tech stack:** Python 3.11

**Data:** You create synthetic MLTL formulas and finite traces as test inputs based on examples from the paper's formalization description.

**Build it:**

1. Implement MLTL formula syntax as Python classes or data structures supporting core operators (e.g., Next, Until, Boolean connectives).
2. Implement negation normal form (NNF) transformation for MLTL formulas.
3. Implement a function to progress an MLTL formula over one step of a finite trace.
4. Create example finite traces and MLTL formulas to test progression.
5. Print progression steps and final results for demonstration.

**Ships as:** A Python script repository with README explaining MLTL formula progression, example formulas and traces, and console output showing progression steps.

**Stretch goal:** Add visualization of formula progression steps or implement a small REPL to input formulas and traces interactively.

### Intermediate — Verified MLTL Formula Progression Algorithm Reimplementation
*Effort: 2 weekends, ~20 hours*

You reimplement the MLTL formula progression algorithm as described in the paper, including the computation length concept and correctness checks, in Python or OCaml. You compare your implementation's output on finite traces against a simple baseline that evaluates formulas directly without progression. You report correctness metrics such as logical equivalence on test traces.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the paper's core verified algorithm and understand the importance of computation length assumptions for correctness. The professor would see you can translate formal verification results into practical, testable code and validate correctness properties.

**Grounded in:** Verification and correction of MLTL formula progression algorithm and its correctness theorems; Identification and formalization of the computation length concept crucial for correctness proofs; Formal proof of trace extension corollary ensuring satisfaction is preserved by trace extension

**Tech stack:** Python 3.11

**Data:** Synthetic finite traces and MLTL formulas constructed to test correctness; no external dataset needed.

**Build it:**

1. Implement the MLTL formula progression algorithm following the paper's formal description, including computation length checks.
2. Implement a baseline evaluator that directly checks formula satisfaction on finite traces without progression.
3. Generate or handcraft test traces and formulas covering various cases.
4. Run both implementations on the test inputs and compare outputs for logical equivalence.
5. Document results and discuss the role of computation length in correctness.

**Ships as:** A repository with the progression algorithm, baseline evaluator, test cases, and a report comparing outputs and correctness metrics.

**Stretch goal:** Add code generation support to export the progression algorithm to another language (e.g., OCaml) using a simple code template.

### Advanced — Extending MLTL Formalization to Infinite Traces and Additional Operators
*Effort: 3+ weeks*

You develop an extension of the MLTL formula progression algorithm and formalization to handle infinite traces or incorporate additional temporal operators beyond the core subset formalized in the paper. You implement prototype code demonstrating progression on infinite traces or with new operators, and you attempt to prove or empirically validate correctness properties under these extensions.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep engagement with the formalization challenges and practical implications for runtime verification. The professor would recognize your ability to extend formal methods research and apply it to more expressive temporal logics or infinite behaviors.

**Grounded in:** Limitations: The formalization focuses on a core subset of MLTL operators and finite traces; Future directions: Extending the MLTL library with more properties and results related to worst-case propagation delay; Formalizing bridges between MLTL and related temporal logics such as MTL and LTL; Leveraging the verified formula progression to improve runtime verification

**Tech stack:** Isabelle/HOL (optional), Python 3.11, OCaml (optional)

**Data:** Synthetic infinite traces or extended MLTL formulas constructed for testing; no external dataset required.

**Build it:**

1. Study the paper's formalization and limitations regarding finite traces and operator subsets.
2. Select one extension: either infinite trace support or additional temporal operators (e.g., bounded until).
3. Implement the extended progression algorithm prototype in Python or OCaml.
4. Design test cases with infinite or extended operator formulas and simulate progression.
5. Attempt to prove correctness properties informally or via Isabelle/HOL if familiar.
6. Document challenges, results, and potential implications for runtime verification.

**Ships as:** A repository with extended progression code, test cases, and a detailed report discussing the extension, correctness considerations, and relation to the original paper.

**Stretch goal:** Collaborate with formal methods researchers to mechanize the extension in Isabelle/HOL or integrate with runtime verification tools like NASA's FRET or OGMA.
