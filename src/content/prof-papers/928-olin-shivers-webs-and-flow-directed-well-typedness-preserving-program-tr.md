---
title: "928 · Webs and Flow-Directed Well-Typedness Preserving Program Transformations — Olin Shivers"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-olin-shivers"
source_hash: "2f561b30b7e2fbcee91f2a8b61043c1176245a89c9fb37b5aabcd9fbd7aa8579"
sequence: 928
generator: "outreach-garden: managed"
---

# 928 · Webs and Flow-Directed Well-Typedness Preserving Program Transformations

## At a glance

- **Professor:** Olin Shivers
- **Institution:** Northeastern University
- **Paper:** [Webs and Flow-Directed Well-Typedness Preserving Program Transformations](https://dl.acm.org/doi/pdf/10.1145/3729280)
- **Authors:** Benjamin Quiring, David Van Horn, John Reppy, Olin Shivers
- **Year:** 2025

## Paper overview

This paper introduces the concept of 'webs' to represent the semantic relationships between functions and their calls in higher-order programming languages. It proposes a web-annotated intermediate language and a type system extension that preserves well-typedness during program transformations. The approach enables flow-directed, type-preserving transformations such as dead-parameter elimination, uncurrying, and defunctionalization, improving over traditional syntactic or control-flow analysis methods.

### Why it matters

**Research problem:** How to perform program transformations in higher-order languages that respect the semantic function-call relationships (webs) while preserving well-typedness, overcoming limitations of existing control-flow analyses and syntactic rewriting strategies.

**Why it matters:** Program transformations like dead-parameter elimination and uncurrying improve compiler optimizations but are challenging in higher-order languages due to complex function-call relationships and type system mismatches. Ensuring transformations preserve well-typedness is crucial for compiler correctness and enabling more aggressive optimizations.

**Key contributions:**

- A web-annotated intermediate language exposing webs as explicit program structure.
- A type system extension of the simply-typed lambda calculus with web annotations and a lightweight inference procedure.
- A formal framework for describing flow-directed, type-preserving web-based transformations.
- Generalizations of common transformations like dead-parameter elimination and uncurrying to higher-order and data-structure escaping functions.
- New semantic locality-based computation movement transformations including constant propagation and inlining.

## About the professor

**Olin Shivers** — Professor, College of Computer and Information Science, Northeastern University.

Research interests: programming languages, compilers, and systems

### Research links

- [Faculty/profile page](http://www.ccs.neu.edu/home/shivers)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** type systems and lambda calculus
**The paper assumes:** simply-typed lambda calculus, type systems, type inference, and type preservation proofs
**Already in this field?** Skip this entirely if you already have a solid understanding of typed lambda calculus and type systems in programming languages.

This background focuses on type systems and lambda calculus, foundational for understanding the paper's extension of simply-typed lambda calculus with web annotations and type-preserving program transformations. The rigorous course offers a deep, structured dive into programming language principles and lambda calculus, while the fast track provides a concise, intuition-driven introduction to lambda calculus and functional programming concepts. Choose the course for thorough mastery or the fast track for a quick, clear conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Principle of Programming Language](https://www.youtube.com/playlist?list=PL-JvKqQx2AtdIkEFDrqsHyKWzb5PWniI1) — University Academy · 18 videos · 6.5h across 18 episodes

**Watch only this:** Episodes 15-18, about 1.5 hours — these cover lambda calculus basics, numerical lambda calculus, alpha/beta/eta reductions, and simply typed lambda calculus with subtyping, which are essential for understanding the paper's type system foundation.

*Why it unblocks this paper:* This university-level playlist covers principles of programming languages including lambda calculus, type systems, and type checking, directly relevant to the paper's formal type system extension and inference procedures.

*If you want all of it:* 6.5 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Haskell, Lambda Calculus, Functional programming](https://www.youtube.com/playlist?list=PLKdt6eQo8Dxf_teCXQTBplg4tTWADAseq) — Ray Stefancsik · 9 videos · 2.2h across 9 episodes

**Watch only this:** Episodes 1-4, about 1 hour — covering lambda calculus basics, the Y combinator, curried functions, and a quick Haskell overview, giving a solid conceptual foundation for the paper's semantic and type system concepts.

*Why it unblocks this paper:* This short-form series by Ray Stefancsik offers clear, visual explanations of lambda calculus and functional programming concepts, providing an accessible introduction to the core ideas underpinning the paper's approach.

*If you want all of it:* 2.2 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Webs and Flow-Directed Well-Typedness Preserving Program Transformations," start with foundational concepts in simply typed lambda calculus and unification-based type inference, which underpin the paper's type system extension and inference procedure. Then, study control-flow analysis for higher-order languages as a baseline for comparison. Finally, focus on the paper's core concept of web-annotated intermediate languages and the authors' own talks or related advanced presentations to grasp their novel approach and results.

### Simply typed lambda calculus *(prerequisite)*
The simply typed lambda calculus forms the theoretical foundation for the paper's type system extension. Understanding its syntax, typing rules, and semantics is essential to grasp how the authors extend it with web annotations and preserve well-typedness during transformations.

*How the paper uses it:* The paper extends the simply typed lambda calculus with web annotations to enable type-preserving transformations.

▶ [Lecture 6: Simply Typed Lambda Calculus](https://www.youtube.com/watch?v=7VQtuB2Ru2A) — UWYO COSC 5010 · 1:43:18 · 5y ago

### Unification-based type inference *(prerequisite)*
Unification-based type inference is a key technique used in the paper's lightweight inference procedure for webs. Familiarity with unification algorithms and their application in type systems like Hindley-Milner is crucial to understand how the paper infers webs efficiently.

*How the paper uses it:* The authors develop a lightweight inference procedure based on unification to infer webs in their extended type system.

▶ [Lecture on ML Type Inference: No.7 Unification Algorithm and its Correctness Proof](https://www.youtube.com/watch?v=EU7HYnIZP2Q) — 大堀淳の計算機科学チャネル · 2y ago

### Control-flow analysis for higher-order languages *(prerequisite)*
Control-flow analysis (CFA) for higher-order languages is the traditional baseline technique for understanding function-call relationships and guiding program transformations. Studying CFA provides context for the paper's claim that their web-based analysis achieves comparable precision while enabling new transformations.

*How the paper uses it:* The paper compares its web-based analysis precision and transformation capabilities against traditional control-flow analyses.

▶ [CFA2: Pushdown Flow Analysis for Higher-Order Languages](https://www.youtube.com/watch?v=n0Cn9duDyuE) — Microsoft Research · 47:11 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's approach to flow-directed, well-typed program transformations, start by learning the simply typed lambda calculus as the foundational type system. Next, grasp unification-based type inference, which underpins the lightweight web inference method. Then, study control-flow analysis for higher-order languages to appreciate the baseline the paper improves upon. Finally, explore the core concept of the web-annotated intermediate language that explicitly represents semantic webs enabling type-preserving transformations.

### Simply typed lambda calculus *(prerequisite)*
Simply typed lambda calculus is a foundational typed programming language model that assigns types to lambda expressions, ensuring functions are applied to compatible arguments. Understanding its syntax and typing rules builds intuition for how types constrain program behavior.

*How the paper uses it:* The paper extends the simply typed lambda calculus with web annotations to formalize type-preserving transformations.

▶ [013 Simply Typed Lambda Calculus](https://www.youtube.com/watch?v=V5voaE9BiDk) — Piyush P Kurur · 15:00 · 6y ago

### Unification-based type inference *(prerequisite)*
Unification-based type inference is a method to automatically deduce types by solving equations between type expressions, enabling lightweight and efficient type checking. It is central to inferring web annotations without heavy analysis.

*How the paper uses it:* The paper uses a unification-based inference procedure to assign webs in the extended type system.

▶ [CSE 340 10-21-15 Office Hours "More Hindley-Milner Type Inference"](https://www.youtube.com/watch?v=Iw1n2Gevugk) — Adam Doupé · 11y ago

### Control-flow analysis for higher-order languages *(prerequisite)*
Control-flow analysis (CFA) approximates which functions may be called at different program points, especially challenging in higher-order languages where functions are first-class. Understanding CFA provides context for the paper’s improvements in precision and transformation scope.

*How the paper uses it:* The paper compares its web-based analysis precision and transformation capabilities against traditional CFAs.

▶ [CFA2: Pushdown Flow Analysis for Higher-Order Languages](https://www.youtube.com/watch?v=n0Cn9duDyuE) — Microsoft Research · 47:11 · 10y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's core concept of webs and flow-directed, well-typedness preserving program transformations. The beginner project focuses on implementing a minimal web-annotated simply-typed lambda calculus interpreter to grasp the fundamental idea of webs and type preservation. The intermediate project extends this by implementing the web inference algorithm and applying a generalized dead-parameter elimination transformation, comparing it to a baseline syntactic approach. The advanced project tackles one of the paper's limitations by exploring polymorphism-aware web transformations with specialization, addressing the challenge of polymorphism blocking transformations like uncurrying.

### Beginner — Web-Annotated Simply-Typed Lambda Calculus Interpreter
*Effort: a weekend, ~8 hours*

You build a small interpreter for a simply-typed lambda calculus extended with web annotations as described in the paper. The interpreter will parse expressions with web identifiers, perform type checking with web-aware types, and verify that simple transformations preserve well-typedness.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key contribution of extending the simply-typed lambda calculus with web annotations and the type system extension that preserves well-typedness during transformations.

**Grounded in:** A type system extension of the simply-typed lambda calculus with web annotations and a lightweight inference procedure.

**Tech stack:** TypeScript, Node.js

**Data:** No external data needed; you will create small example lambda calculus expressions with web annotations manually.

**Build it:**

1. Implement a parser for a simply-typed lambda calculus syntax extended with web annotations on functions and calls.
2. Implement a type checker that supports web-annotated types and verifies well-typedness according to the paper's rules.
3. Create example programs with webs and demonstrate that simple transformations (e.g., renaming or reordering within a web) preserve typing.
4. Write tests showing type preservation before and after transformations.

**Ships as:** A GitHub repo with a README explaining the web-annotated lambda calculus, the type checker implementation, example programs, and tests verifying type preservation.

**Stretch goal:** Add support for a small subset of flow-directed transformations such as dead-parameter elimination on the annotated terms.

### Intermediate — Web Inference and Dead-Parameter Elimination
*Effort: 2 weekends, ~20 hours*

You implement the web inference algorithm based on unification described in the paper to infer webs in a simply-typed lambda calculus program. Then implement a generalized dead-parameter elimination transformation that operates uniformly on webs. You compare the results and precision of your web-based transformation against a baseline syntactic dead-parameter elimination.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of web inference and apply a key generalized transformation, demonstrating practical understanding of how webs enable flow-directed, type-preserving transformations.

**Grounded in:** A lightweight inference procedure based on unification to infer webs and generalizations of dead-parameter elimination.

**Tech stack:** TypeScript, Node.js

**Data:** You will create or synthesize small higher-order lambda calculus programs with functions and calls to serve as input; no external dataset is required.

**Build it:**

1. Implement the unification-based web inference algorithm to identify webs in input programs.
2. Implement the generalized dead-parameter elimination transformation that removes unused parameters uniformly across webs.
3. Implement a baseline syntactic dead-parameter elimination for comparison.
4. Run both transformations on example programs and compare the results and type preservation.
5. Document the comparison and results in the README.

**Ships as:** A GitHub repo with code for web inference, web-based dead-parameter elimination, baseline syntactic elimination, example programs, and a report comparing precision and correctness.

**Stretch goal:** Extend the inference and transformations to handle simple data-structure escaping functions as described in the paper.

### Advanced — Polymorphism-Aware Web Transformations with Specialization
*Effort: 3+ weeks, ~60 hours*

You extend the web-annotated intermediate language and type system to handle polymorphic types and implement specialization techniques to enable transformations like uncurrying that are blocked by polymorphism. You evaluate how specialization affects transformation applicability and type preservation, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper by exploring polymorphism-aware web transformations and specialization, demonstrating deep comprehension and the ability to extend the framework to more complex type systems.

**Grounded in:** Polymorphism can block certain transformations like uncurrying without additional type checks or specialization.

**Tech stack:** TypeScript, Node.js

**Data:** You will create polymorphic lambda calculus programs with web annotations manually for testing; no external dataset is needed.

**Build it:**

1. Extend the type system and web annotations to support polymorphic types.
2. Implement a specialization mechanism that creates monomorphic instances of polymorphic webs to enable transformations.
3. Adapt the uncurrying transformation to use specialization and apply it to polymorphic functions.
4. Test and verify that transformations preserve well-typedness after specialization.
5. Document the design, implementation challenges, and evaluation results.

**Ships as:** A GitHub repo with polymorphism-aware web inference, specialization, adapted transformations, example polymorphic programs, and documentation of findings.

**Stretch goal:** Investigate incremental or modular compilation strategies to overcome the whole-module transformation limitation.

_The paper's authors have not released code, so all implementations must be reimplemented from the paper's descriptions; example programs must be manually created as no datasets are provided._
