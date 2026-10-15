---
title: "651 · Homomorphism Calculus for User-Defined Aggregations — Dixin Tang"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dixin-tang"
source_hash: "e5734d6c6a5659ddfaa10f1ce17da243ebc6f167f7e2de70c157fec779649883"
sequence: 651
generator: "outreach-garden: managed"
---

# 651 · Homomorphism Calculus for User-Defined Aggregations

## At a glance

- **Professor:** Dixin Tang
- **Institution:** University of Texas at Austin
- **Paper:** [Homomorphism Calculus for User-Defined Aggregations](https://arxiv.org/pdf/2508.15109v1)
- **Authors:** Ziteng Wang, Ruijie Fang, Linus Zheng, Dixin Tang, Işıl Dillig
- **Year:** 2025

## Paper overview

This paper introduces a new mathematical framework called homomorphism calculus to verify and synthesize efficient merge operators for user-defined aggregation functions (UDAFs) in data processing frameworks like Apache Spark and Flink. The approach enables parallel and incremental computation of complex aggregations, especially those involving complex data structures like maps and nested collections. The authors implement their method in a tool called Ink and demonstrate superior performance over existing synthesizers on real-world UDAFs.

### Why it matters

**Research problem:** Efficient execution of user-defined aggregation functions (UDAFs) in data processing frameworks requires the UDAF to satisfy a homomorphism property, allowing partial results to be merged correctly. Existing techniques struggle to verify this property and synthesize merge operators for UDAFs with complex inputs and intermediate data structures.

**Why it matters:** UDAFs enable domain-specific logic and complex calculations in data science applications. Efficient parallel and incremental execution of UDAFs is crucial for performance in large-scale data processing systems. Without automated verification and synthesis of merge operators, users must manually implement correct and efficient merge functions, which is error-prone and limits scalability.

**Key contributions:**

- A homomorphism calculus for proving and refuting homomorphisms and constructing merge operators enabling parallel and incremental computation.
- A formal proof that a program is a homomorphism if and only if its accumulator satisfies a generalized commutativity condition via normalizers.
- A novel type-directed decomposition technique to handle accumulators with complex internal state.
- Implementation of a verification and synthesis procedure in the tool Ink, demonstrating effectiveness on 50 real-world UDAFs.

## About the professor

**Dixin Tang** — Assistant Professor, Department of Computer Science, University of Texas at Austin.

Research interests: building data systems for novel applications and hardware; building data foundations for agentic AI

### Research links

- [Faculty/profile page](https://dx-tang.github.io)
- [Lab website](https://ut-datasys.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algebraic Structures and Homomorphisms
**The paper assumes:** abstract algebra focusing on algebraic structures, homomorphisms, and monoids
**Already in this field?** Skip this entirely if you already understand algebraic structures like monoids and groups and the concept of homomorphisms between them.

Understanding algebraic structures and homomorphisms is essential for grasping the theoretical foundations of the homomorphism calculus introduced in the paper. The rigorous course option offers a deep, university-level treatment of abstract algebra concepts relevant to homomorphisms, while the fast track provides a concise, intuition-driven overview suitable for quickly building core understanding before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Harvard MATH E-222 Abstract Algebra, lecturer Benedict Gross supporting book Algebra by Michael Artin](https://www.youtube.com/playlist?list=PLzUeAPxtWcqzr80lS25FrzMn7a36BuXhj) — Jeroen Zuijderhoudt · 38 videos · 32.9h across 38 episodes

**Watch only this:** Watch lectures 1 through 10 (math e222 L01 20030915 to math e222 L10 20031006), about 8.5 hours — these cover groups, homomorphisms, and fundamental algebraic structures needed to understand the paper's core theorems.

*Why it unblocks this paper:* This Harvard Abstract Algebra course, based on Michael Artin's renowned textbook, thoroughly covers algebraic structures and homomorphisms with formal definitions and proofs, directly supporting the paper's reliance on these concepts.

*If you want all of it:* All 38 episodes, approximately 32.9 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Algebraic Structure Group Complete chapter Dream Maths](https://www.youtube.com/playlist?list=PLEHGYFbPuuMFliz3cxhMf9eL4bKpjqIFC) — Dream Maths · 39 videos · 31.9h across 39 episodes

**Watch only this:** Watch episodes 1 through 15, about 12 hours — covering cyclic permutations, groups, normalizers, automorphisms, and the fundamental theorem on homomorphisms, providing a solid conceptual foundation.

*Why it unblocks this paper:* This Dream Maths playlist offers clear, focused explanations on algebraic structures and homomorphisms, including normalizers and commutativity, which align well with the paper's key concepts, making it a great quick primer.

*If you want all of it:* All 39 episodes, approximately 31.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Homomorphism Calculus for User-Defined Aggregations,' start by building a solid foundation in algebraic homomorphisms, focusing on their properties and significance in abstract algebra. Next, study deductive and inductive program synthesis techniques, which underpin the paper's approach to constructing merge operators. Then, explore type-directed decomposition methods in program verification to grasp how complex accumulator states are handled. Follow this with an understanding of syntax-guided synthesis (SyGuS) frameworks, crucial for the leaf-level synthesis tasks in the paper. Finally, focus on the paper's core concept: the homomorphism calculus for UDAF merge synthesis, which integrates these foundations into a novel verification and synthesis framework.

### Algebraic homomorphisms in data aggregation *(prerequisite)*
This section covers the mathematical foundation of homomorphisms, essential for understanding the homomorphism property that enables parallel and incremental aggregation. The selected video provides a rigorous university-level lecture on group homomorphisms, explaining their structural properties and significance in abstract algebra, which directly relates to the paper's theoretical basis.

*How the paper uses it:* Understanding algebraic homomorphisms is central to verifying and synthesizing merge operators for UDAFs.

▶ [Group Theory: Lecture 3/30 - Homomorphisms](https://www.youtube.com/watch?v=e2TV11yBmKw) — Divergence is Divergence · 1:03:54 · 3y ago

### Deductive and inductive program synthesis *(prerequisite)*
This section introduces the program synthesis techniques combining deductive reasoning and inductive synthesis, which the paper leverages to construct merge functions. The chosen talk is a detailed conference presentation on inductive program synthesis frameworks, providing advanced insights into the challenges and methodologies relevant to the paper's synthesis approach.

*How the paper uses it:* The paper combines deductive reasoning with inductive synthesis to construct merge functions for UDAFs.

▶ [[OOPSLA] FlashMeta: A Framework for Inductive Program Synthesis](https://www.youtube.com/watch?v=FhQrKmZkid0) — SPLASH15 Conference · 16:59 · 10y ago

### Type-directed decomposition in program verification *(prerequisite)*
This section explains decomposition techniques in program verification, crucial for managing complex accumulator states by breaking down synthesis problems into simpler subproblems. The selected lecture from MIT OpenCourseWare offers a rigorous and detailed treatment of function decomposition and abstraction, aligning well with the paper's type-directed decomposition method.

*How the paper uses it:* Type-directed decomposition is a key technique to handle complex accumulator states by breaking down synthesis problems.

▶ [Lecture 7: Decomposition, Abstraction, and Functions](https://www.youtube.com/watch?v=Qf6OVR8MLnU) — MIT OpenCourseWare · 45:54 · 2y ago

### Syntax-guided synthesis SyGuS frameworks *(prerequisite)*
This section covers the syntax-guided synthesis frameworks that the paper integrates for leaf-level scalar synthesis. The chosen video is a university-level colloquium talk by a leading researcher in SyGuS, providing an in-depth view of the solver internals and synthesis guarantees, which are directly relevant to the paper's synthesis backend.

*How the paper uses it:* Leaf-level scalar synthesis in the paper relies on SyGuS solvers integrated into the approach.

▶ [Rajeev Alur, University of Pennsylvania](https://www.youtube.com/watch?v=1QBs-3bNgk0) — UC Berkeley EECS · 56:54 · Streamed 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on homomorphism calculus for user-defined aggregations, start by building a solid intuition about algebraic homomorphisms, which are central to the paper's verification and synthesis approach. Next, learn about deductive and inductive program synthesis techniques, as the paper combines these methods to construct merge operators. Then, grasp the idea of type-directed decomposition, a key technique to handle complex accumulator states. Finally, explore syntax-guided synthesis (SyGuS) frameworks, which the paper uses for leaf-level scalar synthesis. This progression builds from foundational algebraic concepts to the specific synthesis techniques enabling the paper's contributions.

### Algebraic homomorphisms in data aggregation *(prerequisite)*
Algebraic homomorphisms are functions that preserve structure between algebraic objects, such as groups. Understanding this concept helps grasp how partial aggregation results can be combined correctly, which is essential for parallel and incremental data aggregation.

*How the paper uses it:* The paper's homomorphism calculus relies on verifying that user-defined aggregation functions satisfy a homomorphism property to enable correct merging of partial results.

▶ [Group Homomorphisms - Abstract Algebra](https://www.youtube.com/watch?v=XPF5fe1WdKY) — Socratica · 10:04 · 6y ago

### Deductive and inductive program synthesis *(prerequisite)*
Deductive synthesis uses logical reasoning to break down problems, while inductive synthesis learns programs from examples. Combining these approaches allows efficient construction of complex programs by decomposing tasks and synthesizing solutions for simpler subproblems.

*How the paper uses it:* The paper combines deductive reasoning with syntax-guided inductive synthesis to construct merge operators for complex user-defined aggregation functions.

▶ [[OOPSLA] FlashMeta: A Framework for Inductive Program Synthesis](https://www.youtube.com/watch?v=FhQrKmZkid0) — SPLASH15 Conference · 16:59 · 10y ago

### Type-directed decomposition in program verification *(prerequisite)*
Type-directed decomposition breaks complex verification or synthesis problems into smaller, manageable parts based on data types. This technique simplifies reasoning about programs with complex internal states by handling each component independently.

*How the paper uses it:* The paper uses type-directed decomposition to handle accumulators with complex internal states by reducing synthesis problems into simpler subproblems.

▶ [Lecture 7: Decomposition, Abstraction, and Functions](https://www.youtube.com/watch?v=Qf6OVR8MLnU) — MIT OpenCourseWare · 45:54 · 2y ago

### Syntax-guided synthesis SyGuS frameworks *(prerequisite)*
Syntax-guided synthesis (SyGuS) frameworks generate programs that satisfy a specification while conforming to a given syntactic template or grammar. They are powerful tools for automating program synthesis, especially for scalar operations.

*How the paper uses it:* The paper relies on SyGuS solvers for leaf-level scalar synthesis within its homomorphism calculus framework.

▶ [Rajeev Alur, University of Pennsylvania](https://www.youtube.com/watch?v=1QBs-3bNgk0) — UC Berkeley EECS · 56:54 · Streamed 8y ago

## Already in your library

- [Introduction to Program Synthesis - Lecture 1](https://www.youtube.com/watch?v=8dZ_XDXCoOk) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the homomorphism calculus for user-defined aggregations introduced in the paper. Starting with a small-scale implementation of a homomorphism property check on simple aggregations, you then reimplement the core synthesis method on a manageable example to compare against a baseline. Finally, you extend the approach to address one of the paper's stated limitations, exploring synthesis improvements or broader applicability.

### Beginner — Simple Homomorphism Verification for Sum Aggregation
*Effort: a weekend, ~6 hours*

You build a small program that verifies the homomorphism property for a basic user-defined aggregation function computing sums over integer lists. This involves implementing the accumulator and merge functions and checking the generalized commutativity condition described in the paper's homomorphism calculus.

**Why it shows you understood the paper:** This project shows you understand the core homomorphism property and how the calculus reduces verification to checking accumulator normalizers and commutativity, even in a simple setting.

**Grounded in:** Demonstrates the paper's key contribution: "A homomorphism calculus for proving and refuting homomorphisms and constructing merge operators enabling parallel and incremental computation."

**Tech stack:** Python 3.11

**Data:** Synthetic integer lists generated within the program to simulate aggregation inputs.

**Build it:**

1. Implement a simple accumulator function that sums integers in a list.
2. Implement a candidate merge function that combines partial sums.
3. Encode the generalized commutativity condition from the homomorphism calculus as a verification function.
4. Write tests to verify that the accumulator and merge satisfy the homomorphism property on sample inputs.
5. Document the verification logic and results in a README.

**Ships as:** A Python repository with code verifying homomorphism for sum aggregation, including test cases and a README explaining the verification steps.

**Stretch goal:** Extend the verification to a user-defined aggregation computing counts of distinct elements using a set accumulator.

### Intermediate — Reimplementation of Homomorphism Calculus for Map Aggregations
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core homomorphism calculus method to verify and synthesize merge operators for a user-defined aggregation over maps (dictionaries) with integer keys and values. You compare your synthesis results and verification speed against a naive baseline that manually implements merge functions without formal verification.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's type-directed decomposition and synthesis approach to a non-trivial data structure, reflecting the paper's handling of complex internal states and showing practical performance gains.

**Grounded in:** Implements the paper's approach: "A novel type-directed decomposition technique to handle accumulators with complex internal state" and "Ink significantly outperforms two leading synthesizers... on real-world UDAFs involving maps."

**Tech stack:** Python 3.11, Z3 SMT solver (for verification)

**Data:** Synthetic map data generated programmatically to simulate aggregation inputs; no external dataset required.

**Build it:**

1. Implement accumulator and candidate merge functions for map-based aggregation.
2. Implement type-directed decomposition to break down verification into scalar subproblems.
3. Use deductive reasoning combined with a simple syntax-guided synthesis approach (e.g., enumerative search) to synthesize merge operators for scalar subproblems.
4. Compare synthesis time and correctness against a baseline manual merge implementation.
5. Write a report summarizing the verification results, synthesis performance, and comparison.

**Ships as:** A Python project with code for homomorphism verification and merge synthesis on map aggregations, benchmark scripts comparing to a baseline, and a detailed README report.

**Stretch goal:** Integrate a lightweight SyGuS solver or SMT-based synthesis backend to improve scalar synthesis efficiency.

### Advanced — Extending Homomorphism Calculus to Non-Surjective Aggregations
*Effort: 3+ weeks, ~60 hours*

You develop an extension to the homomorphism calculus framework that relaxes the surjectivity assumption on the aggregation function, addressing one of the paper's stated limitations. You implement this extension and evaluate it on synthetic UDAFs designed to violate surjectivity, demonstrating improved verification or synthesis capabilities.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's theoretical foundations and limitations, and your ability to contribute novel improvements aligned with the authors' future directions.

**Grounded in:** Targets the limitation: "The approach relies on the surjectivity of the aggregation function for completeness guarantees, which may not hold in all cases." and future direction: "Extending the calculus to handle non-surjective aggregation functions more generally."

**Tech stack:** Python 3.11, Z3 SMT solver, Jupyter Notebook for experimentation and visualization

**Data:** Synthetic UDAFs and input data crafted to test non-surjective aggregation scenarios; no external dataset required.

**Build it:**

1. Study the paper's formal proofs and identify where surjectivity is assumed.
2. Design modifications to the homomorphism calculus to relax or bypass surjectivity requirements.
3. Implement the extended verification and synthesis procedures in Python.
4. Create synthetic UDAFs that are non-surjective and test the extended calculus on them.
5. Analyze and document the effectiveness and limitations of your extension compared to the original method.

**Ships as:** A Python codebase implementing the extended homomorphism calculus, with Jupyter notebooks demonstrating experiments and a comprehensive README discussing the theoretical and practical implications.

**Stretch goal:** Explore integration of learning-based heuristics to guide synthesis in the extended framework, addressing the paper's question about improving synthesis efficiency.
