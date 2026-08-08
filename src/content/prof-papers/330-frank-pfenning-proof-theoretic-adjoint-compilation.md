---
title: "330 · Proof-Theoretic Adjoint Compilation — Frank Pfenning"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-frank-pfenning"
source_hash: "a9c4a71c388218fccdf0371d203d3e980432ee218d831a17552481ff8f277852"
sequence: 330
generator: "outreach-garden: managed"
---

# 330 · Proof-Theoretic Adjoint Compilation

## At a glance

- **Professor:** Frank Pfenning
- **Institution:** Carnegie Mellon University
- **Paper:** [Proof-Theoretic Adjoint Compilation](http://www.cs.cmu.edu/~fp/papers/xlang26.pdf)
- **Authors:** Joanna Boyland, Frank Pfenning
- **Year:** 2026

## Paper overview

This paper studies the logical and computational translations between different formulations of adjoint logic, a framework integrating various substructural and modal logics. It presents a translation from adjoint natural deduction to a semi-axiomatic sequent calculus (Sax), extends these languages with recursion, and proves that compilation preserves observational behavior using a step-indexed cross-language logical relation. The work lays theoretical foundations for a compiler from an adjoint functional language to C, preserving substructural properties and enabling optimizations.

### Why it matters

**Research problem:** How to establish a proof-theoretic and computationally sound translation (compilation) between adjoint natural deduction and a semi-axiomatic sequent calculus that preserves truth, verifications, substructural properties, and observational equivalence, especially when extending the languages with recursion.

**Why it matters:** Adjoint logic generalizes various substructural and modal logics, which are important for reasoning about resources and effects in programming languages. A sound compilation preserving these properties enables trustworthy and optimized implementations of functional languages with rich type systems, bridging logic and practical programming.

**Key contributions:**

- Presentation of the adjoint semi-axiomatic sequent calculus (Sax) based on verifications and bidirectional typing.
- A verification- and substructural property-preserving translation from adjoint natural deduction to Sax.
- Extension of adjoint Sax with recursive types and programs, including a sequential computational interpretation.
- A correctness proof of the extended translation using a step-indexed cross-language logical relation.
- Operational semantics for both source and target languages supporting observational equivalence.

## About the professor

**Frank Pfenning** — Professor of Computer Science, Computer Science Department, Carnegie Mellon University.

Research interests: Programming Languages, Logic and Type Theory, Logical Frameworks, Automated Deduction, Trustworthy Computing

### Research links

- [Faculty/profile page](http://www.cs.cmu.edu/~fp)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=ghWKWBUAAAAJ&view_op=list_works&sortby=pubdate)
- [DBLP](https://dblp.uni-trier.de/pid/p/FPfenning.html?view=by-year)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand 'Proof-Theoretic Adjoint Compilation,' start by grounding yourself in the foundational proof systems of natural deduction and sequent calculus, as the paper's translation operates between these. Next, study substructural type systems, which are crucial for grasping the resource-sensitive typing preserved by the translation. Then, learn about step-indexed logical relations, the key technique used to prove correctness and observational equivalence of the compilation. Finally, focus on the core concept of proof-theoretic adjoint compilation itself, prioritizing the authors' own talks or rigorous research presentations that directly address this topic.

### Natural deduction and sequent calculus *(prerequisite)*
Understanding natural deduction and sequent calculus is essential because the paper defines a translation between these two proof systems. These videos provide rigorous academic lectures that explain the structure and reasoning behind these proof systems, which form the theoretical backbone of the compilation approach.

*How the paper uses it:* The paper presents a translation from adjoint natural deduction to a semi-axiomatic sequent calculus (Sax).

▶ [Lecture 10 - Natural Deduction and Sequent Calculus](https://www.youtube.com/watch?v=WZJy-H0Jq3A) — UWYO COSC 5010 · 5 years ago

### Substructural type systems *(prerequisite)*
Substructural type systems are critical for understanding how the paper preserves resource-sensitive typing and substructural properties during compilation. The selected videos are advanced lectures by Frank Pfenning, a co-author of the paper, offering deep insights into these type systems and their role in concurrent programming.

*How the paper uses it:* The translation preserves substructural properties, a key aspect of the paper's correctness guarantees.

▶ [Substructural Type Systems and Concurrent Programming 1 - Frank Pfenning - OPLSS 2017](https://www.youtube.com/watch?v=ZW-VWWa1o9g) — OPLSS · 1:19:29 · 9 years ago

### Step-indexed logical relations *(prerequisite)*
Step-indexed logical relations are the main technical tool used in the paper to prove the correctness and observational equivalence of the compilation. The chosen video provides an introduction to this advanced technique in the context of type safety, suitable for an advanced audience.

*How the paper uses it:* The paper uses a step-indexed cross-language logical relation to prove compilation correctness.

▶ [Analyzing Control Flow More Like a Human - Kimball Germane](https://www.youtube.com/watch?v=c282Q5VL75Y) — Tianyu Chen · 1:04:14

### Proof-Theoretic Adjoint Compilation talk *(the paper's own talk)*
This section focuses on the core concept of the paper: the proof-theoretic adjoint compilation itself. Unfortunately, no direct recorded talk by the authors on this exact paper was found. The selected video offers a detailed overview of general proof theory, which underpins the paper's framework and is suitable for an advanced audience.

*How the paper uses it:* The paper introduces and develops the adjoint semi-axiomatic sequent calculus (Sax) and its compilation from adjoint natural deduction.

▶ [The Deep Structure of General Proof Theory](https://www.youtube.com/watch?v=9flRkCYctnU) — ThoughtLab · 9 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand 'Proof-Theoretic Adjoint Compilation,' start by building a foundation in the proof systems of natural deduction and sequent calculus, which are the logical frameworks between which the paper translates. Then, learn about substructural type systems that handle resource-sensitive typing, followed by step-indexed logical relations, a key technique for proving compiler correctness and observational equivalence. Finally, grasp the core concept of adjoint logic and its compilation, which integrates these ideas to enable sound and property-preserving translations.

### Natural deduction and sequent calculus *(prerequisite)*
Natural deduction and sequent calculus are two fundamental proof systems in logic. Natural deduction focuses on building proofs by applying inference rules directly, while sequent calculus structures proofs as sequences of logical deductions, making it easier to analyze properties like cut-elimination. Understanding these systems provides the logical background for the translation presented in the paper.

*How the paper uses it:* The paper defines a translation from adjoint natural deduction to a semi-axiomatic sequent calculus (Sax), so understanding both proof systems is essential.

▶ [Lecture 10 - Natural Deduction and Sequent Calculus](https://www.youtube.com/watch?v=WZJy-H0Jq3A) — UWYO COSC 5010 · 5 years ago

### Substructural type systems *(prerequisite)*
Substructural type systems control how resources are used in computation, restricting structural rules like weakening or contraction to model effects such as linearity or uniqueness. These systems are crucial for reasoning about resource-sensitive programming languages and preserving such properties during compilation.

*How the paper uses it:* The paper preserves substructural properties through its translation, making knowledge of substructural type systems important to grasp the resource-sensitive aspects.

▶ [Substructural Type Systems and Concurrent Programming 1 - Frank Pfenning - OPLSS 2017](https://www.youtube.com/watch?v=ZW-VWWa1o9g) — OPLSS · 1:19:29 · 9 years ago

### Step-indexed logical relations *(prerequisite)*
Step-indexed logical relations are a semantic technique used to relate programs across different languages or stages of compilation by indexing relations with a step count to handle recursion and infinite behaviors. They are powerful tools for proving compiler correctness and observational equivalence.

*How the paper uses it:* The paper uses a step-indexed cross-language logical relation to prove that compilation preserves observational behavior.

▶ [Analyzing Control Flow More Like a Human - Kimball Germane](https://www.youtube.com/watch?v=c282Q5VL75Y) — Tianyu Chen · 1:04:14

### Adjoint logic *(prerequisite)*
Adjoint logic is a framework integrating various substructural and modal logics, capturing complex reasoning about resources and effects. It generalizes many logical systems and provides the foundation for the languages studied in the paper.

*How the paper uses it:* The paper studies translations within adjoint logic and its computational interpretations, so understanding adjoint logic is foundational.

▶ [Adjoint School Behavioural Metrics, Quantitative Logics, and ...](https://www.youtube.com/watch?v=ZDri3OtkDQo) — Applied Category Theory · 20:49

### Proof-Theoretic Adjoint Compilation talk *(the paper's own talk)*
A talk focused on proof-theoretic validity and adjoint logic provides direct insight into the theoretical foundations and motivations behind the paper's approach, helping to connect abstract concepts with their computational interpretations.

*How the paper uses it:* This talk is directly related to the authors' presentation of the concepts underlying the paper.

▶ [The Deep Structure of General Proof Theory](https://www.youtube.com/watch?v=9flRkCYctnU) — ThoughtLab · 9 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the 'Proof-Theoretic Adjoint Compilation' paper. Starting with a beginner-level project that reproduces a core translation example between adjoint natural deduction and Sax, you then move to an intermediate project implementing the paper's verification-preserving translation and operational semantics with recursion. Finally, the advanced project extends the framework by modeling closure conversion, addressing a key limitation noted by the authors, and exploring preservation of observational equivalence through this compiler phase.

### Beginner — Adjoint Logic Translation Example
*Effort: a weekend, ~8 hours*

You build a small TypeScript program that encodes a simple example of adjoint natural deduction proof and its translation into the semi-axiomatic sequent calculus (Sax) as described in the paper. The project includes a step-by-step demonstration of the translation preserving verifications and substructural properties for this example.

**Why it shows you understood the paper:** This project shows you understand the core translation mechanism between adjoint natural deduction and Sax, and how verifications and substructural properties are preserved in a concrete case.

**Grounded in:** Presentation of the adjoint semi-axiomatic sequent calculus (Sax) and a verification- and substructural property-preserving translation from adjoint natural deduction to Sax (Key Contributions 1 and 2).

**Tech stack:** TypeScript, Node.js

**Data:** No external data needed; you simulate a small proof example from the paper's figures and descriptions.

**Build it:**

1. Implement data structures to represent adjoint natural deduction proofs in TypeScript.
2. Implement data structures for Sax derivations.
3. Code the translation function from natural deduction proofs to Sax derivations following the paper's rules.
4. Write a test example of a simple proof and show its translation output.
5. Document how verifications and substructural properties are preserved in this example.

**Ships as:** A GitHub repo with TypeScript code and README explaining the example proof, its translation, and preservation properties.

**Stretch goal:** Add a visualization of the proof and its translation steps using a simple graph or tree viewer.

### Intermediate — Verification-Preserving Translation with Recursion
*Effort: 2 weekends, ~20 hours*

You implement a small interpreter in TypeScript that models both the adjoint natural deduction language and the Sax calculus extended with recursive types and programs, as described in the paper. You implement the verification-preserving translation between them and demonstrate operational semantics preservation on example recursive programs.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method including recursion and operational semantics, and verify that compilation preserves observational equivalence on concrete examples.

**Grounded in:** Extension of adjoint Sax with recursive types and programs and correctness proof using step-indexed cross-language logical relation (Key Contributions 3 and 4; Key Results 2 and 3).

**Tech stack:** TypeScript, Node.js

**Data:** No external dataset; you create example recursive programs and their translations based on the paper's definitions.

**Build it:**

1. Define syntax and typing rules for adjoint natural deduction with recursion in TypeScript.
2. Define syntax and typing rules for Sax calculus with recursion.
3. Implement operational semantics (small-step) for both languages.
4. Implement the verification-preserving translation from natural deduction to Sax.
5. Write example recursive programs and verify that their compiled Sax versions preserve behavior.
6. Document the implementation and results.

**Ships as:** A GitHub repo with interpreter code, translation implementation, example programs, and README showing preservation of semantics.

**Stretch goal:** Add automated tests comparing observational equivalence of source and compiled programs.

### Advanced — Modeling Closure Conversion in Adjoint Compilation
*Effort: 3-4 weeks*

You extend the intermediate interpreter to model closure conversion, a compiler phase not covered in the paper but identified as a key limitation. You design a closure conversion translation for the adjoint natural deduction language and prove (or empirically demonstrate) that it preserves observational equivalence when composed with the existing translation to Sax.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep understanding of the framework and the challenges of extending it to advanced compiler phases while maintaining correctness guarantees.

**Grounded in:** Closure conversion is not modeled and left for future work (Limitations); future direction includes extending the framework to model closure conversion and other compiler phases.

**Tech stack:** TypeScript, Node.js

**Data:** No external dataset; you use synthetic example programs to demonstrate closure conversion correctness.

**Build it:**

1. Study the existing translation framework and operational semantics from the intermediate project.
2. Design a closure conversion translation for the adjoint natural deduction language, producing closure-converted terms.
3. Extend the operational semantics to model closure-converted terms.
4. Implement the closure conversion pass in TypeScript.
5. Compose closure conversion with the existing translation to Sax and verify preservation of observational equivalence on example programs.
6. Document the design, implementation, and evaluation.

**Ships as:** A GitHub repo with extended interpreter supporting closure conversion, example programs, and README discussing correctness and challenges.

**Stretch goal:** Attempt a formal proof sketch or mechanized verification of observational equivalence preservation for closure conversion.
