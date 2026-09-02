---
title: "512 · Structured Monads for Generic First-Order Syntax Metatheory — Val Tannen"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-val-tannen"
source_hash: "8e7c4910090b06e1ce76496e7f28011b3ccf01ba2eaad6d9709b342f03232c28"
sequence: 512
generator: "outreach-garden: managed"
---

# 512 · Structured Monads for Generic First-Order Syntax Metatheory

## At a glance

- **Professor:** Val Tannen
- **Institution:** University of Pennsylvania
- **Paper:** [Structured Monads for Generic First-Order Syntax Metatheory](https://doi.org/10.1007/s10817-025-09731-y)
- **Authors:** Lawrence Dunn, Val Tannen, Steve Zdancewic
- **Year:** 2025

## Paper overview

This paper presents Tealeaves, a Coq framework for generic and reusable infrastructure to reason about first-order syntax with variable binding, such as lambda calculus terms. It introduces decorated traversable monads (DTMs) as a novel categorical abstraction to unify different concrete representations of syntax, like de Bruijn indices and locally nameless. The framework supports modular backends, certified translations between representations, and handles complex binding constructs like variadic and mutually recursive binders.

### Why it matters

**Research problem:** Reasoning about substitution and variable binding in formal metatheory is tedious and error-prone. Existing tools for representing syntax and substitution, such as Autosubst and LNgen, have limitations in expressiveness, reusability, and handling complex binding constructs. There is a need for a generic, modular, and mathematically principled framework that can unify different representations and support extensible metatheory infrastructure.

**Why it matters:** Formal verification of programming languages, logics, and compilers requires rigorous and reusable metatheory infrastructure. Automating and abstracting the tedious syntactic bookkeeping involved in substitution and binding reduces errors and effort, enabling more scalable and maintainable formalizations. A generic framework that supports multiple representations and complex binders broadens applicability and improves proof reuse.

**Key contributions:**

- Introduction of decorated traversable monads (DTMs) as a unifying categorical abstraction for first-order syntax with binding.
- Implementation of Tealeaves, a Coq framework supporting generic metatheory infrastructure based on DTMs.
- Backends for de Bruijn indices and locally nameless representations that replicate and improve upon Autosubst and LNgen.
- Certified translation between de Bruijn and locally nameless representations via partial bijections.
- Extension of the framework to handle variadic and mutually recursive binders using a novel generalization of the representation theorem for traversable functors.

## About the professor

**Val Tannen** — assistant professor, Computer and Information Science, University of Pennsylvania.

Research interests: Machine learning systems, database systems

### Research links

- [Faculty/profile page](https://www.cis.upenn.edu/~val/)
- [Identity evidence](http://www.cis.upenn.edu/~val)
- [Identity evidence](https://dblp.org/pid/t/ValTannen.html)
- [Identity evidence](http://db.cis.upenn.edu)
- [Professor website](https://rmarcus.info/blog/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Category theory for computer science
**The paper assumes:** category theory, monads, functors, and traversable functors in computer science
**Already in this field?** Skip this entirely if you already have a solid understanding of category theory concepts used in programming language semantics and formal methods.

This background focuses on category theory for computer science, essential for understanding the decorated traversable monads (DTMs) and categorical abstractions used in the paper. The rigorous course option offers a deep and structured university-level introduction to applied category theory, while the fast track provides a concise, intuition-driven series that covers core concepts more quickly. Choose the rigorous course for thorough mastery or the fast track for a quicker but still solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Applied Category Theory (@ MIT 2019)](https://www.youtube.com/playlist?list=PLhgq-BqyZ7i5lOqOqqRiS0U5SwTmPpHQ5) — Topos Institute · 15 videos · 13.4h across 15 episodes

**Watch only this:** Lectures 1-6 (Chapters 1-3, both lectures each), about 5.3 hours — covering foundational category theory concepts, monads, and functors essential for grasping DTMs.

*Why it unblocks this paper:* The 'Applied Category Theory (@ MIT 2019)' playlist is a university-level lecture series that systematically covers category theory concepts relevant to computer science, including monads, functors, and monoidal structures, directly supporting the understanding of DTMs and their categorical foundations in the paper.

*If you want all of it:* All 15 episodes, about 13.4 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Category Theory](https://www.youtube.com/playlist?list=PL3JI_Wj02ehWvur5K_xkUPhLC2z_4O84b) — Sheafification of G · 13 videos · 4.1h across 13 episodes

**Watch only this:** Episodes 1-4, about 1.2 hours — covering monads, comonads, limits, and opposites, which are key to understanding the categorical structures used in the paper.

*Why it unblocks this paper:* The 'Introduction to Category Theory' series by Sheafification of G offers clear, concise videos that explain monads, functors, and related category theory concepts with a focus on intuition and computer science relevance, providing a quick yet solid foundation for understanding the paper's categorical abstractions.

*If you want all of it:* All 13 episodes, about 4.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Structured Monads for Generic First-Order Syntax Metatheory,' start by building a solid foundation in category theory as it underpins the decorated traversable monads (DTMs) introduced. Next, study the core metatheoretic problems of variable binding and substitution in syntax, followed by traversable functors in functional programming, which are generalized by DTMs. Then, explore the concrete syntax representations of de Bruijn indices and locally nameless forms unified by the framework. Finally, focus on the paper's central concept of structured monads and the authors' own presentation of their work.

### Category theory for programming languages *(prerequisite)*
Category theory provides the foundational mathematical language used to model and reason about programming languages and their semantics. Understanding categories, functors, and related constructions is essential to grasp the abstract framework of decorated traversable monads introduced in the paper.

*How the paper uses it:* DTMs are a category-theoretic abstraction parameterized by a monoid representing binding contexts, so category theory is foundational to the paper's approach.

▶ [SPLV 2024 - Category Theory for Semantics 1 (Vikraman Choudhury)](https://www.youtube.com/watch?v=tjzpOdKtYVw) — SPLI: The Scottish Programming Languages Institute · 57:35 · 1 year ago

### Variable binding and substitution in syntax *(prerequisite)*
Variable binding and substitution are core metatheoretic challenges in formalizing programming languages and logics. A deep understanding of these concepts is necessary to appreciate the motivation and design of the Tealeaves framework and DTMs, which aim to unify and simplify reasoning about these issues.

*How the paper uses it:* The paper addresses the tedious and error-prone nature of reasoning about substitution and variable binding, motivating the need for a generic framework.

▶ [SYNTAX-16: The Binding Domain](https://www.youtube.com/watch?v=4vcrhUzoIso) — Dr. Nimer Abusalim (The University of Jordan) · 10:35 · 8 years ago

### Traversable functors in functional programming *(prerequisite)*
Traversable functors are a key functional programming abstraction that the paper generalizes via decorated traversable monads. Understanding traversable functors and their role in structuring computations over data types is critical to grasping the technical contributions of the paper.

*How the paper uses it:* The paper generalizes the representation theorem for traversable functors to handle complex binding constructs within DTMs.

▶ [George Wilson - The Extended Functor Family](https://www.youtube.com/watch?v=JZPXzJ5tp9w) — Compose Conference · 21:57 · 9 years ago

### De Bruijn indices and locally nameless representations *(prerequisite)*
De Bruijn indices and locally nameless representations are concrete syntax representations for variable binding that the paper's framework unifies and translates between. Familiarity with these representations is important to understand the practical impact and certified translations provided by Tealeaves.

*How the paper uses it:* Tealeaves supports modular backends implementing de Bruijn indices and locally nameless representations and provides certified translations between them.

▶ [Lecture 13: Syntax, Part 3](https://www.youtube.com/watch?v=4ndEWbwbIrA) — MIT OpenCourseWare · 1:14:15 · 3 years ago

### Tealeaves structured monads talk *(the paper's own talk)*
This is the authors' own presentation of their framework, Tealeaves, and the novel decorated traversable monads abstraction. It directly addresses the paper's contributions, implementation, and results, providing the most authoritative and focused explanation.

*How the paper uses it:* This talk by Lawrence Dunn presents the paper's main ideas, formalization, and Coq implementation of DTMs and Tealeaves.

▶ [Lawrence Dunn - Syntax Monads for the Working Formal Metatheorist](https://www.youtube.com/watch?v=NBGeflyE-og) — Applied Category Theory · 27:29 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Structured Monads for Generic First-Order Syntax Metatheory, start by learning the foundational concepts of variable binding and substitution in syntax, which are the core metatheoretic problems the paper addresses. Next, build intuition on traversable functors in functional programming, a key technical tool generalized by decorated traversable monads. Then, grasp the basics of category theory as it provides the mathematical language underlying the paper's abstractions. After that, learn about concrete syntax representations like de Bruijn indices and locally nameless representations unified by the framework. Finally, focus on the paper's core concept: decorated traversable monads, which unify different syntax representations and enable certified translations.

### Variable binding and substitution in syntax *(prerequisite)*
Variable binding and substitution are fundamental operations in formal syntax and semantics, crucial for understanding how variables are managed in programming languages and logics. This concept explains how variables are introduced, scoped, and replaced within expressions, which is essential to reasoning about syntax with binders.

*How the paper uses it:* The paper addresses the tedious and error-prone nature of reasoning about substitution and variable binding in formal metatheory.

▶ [SYNTAX-16: The Binding Domain](https://www.youtube.com/watch?v=4vcrhUzoIso) — Dr. Nimer Abusalim (The University of Jordan) · 10:35 · 8 years ago

### Traversable functors in functional programming *(prerequisite)*
Traversable functors generalize the idea of iterating over data structures while preserving their shape, enabling generic programming patterns. Understanding traversable functors helps grasp how complex syntax trees can be uniformly traversed and manipulated, which is central to the paper's categorical abstraction.

*How the paper uses it:* Decorated traversable monads generalize traversable functors to model first-order syntax generically.

▶ [George Wilson - The Extended Functor Family](https://www.youtube.com/watch?v=JZPXzJ5tp9w) — Compose Conference · 21:57 · 9 years ago

### Category theory for programming languages *(prerequisite)*
Category theory provides a high-level mathematical framework to describe and reason about structures and transformations in programming languages. Learning its basic notions like categories, functors, and monads builds the foundation to understand the paper's use of decorated traversable monads as a categorical abstraction.

*How the paper uses it:* The paper introduces decorated traversable monads, a category-theoretic abstraction to unify syntax representations.

▶ [SPLV 2024 - Category Theory for Semantics 1 (Vikraman Choudhury)](https://www.youtube.com/watch?v=tjzpOdKtYVw) — SPLI: The Scottish Programming Languages Institute · 57:35 · 1 year ago

### De Bruijn indices and locally nameless representations *(prerequisite)*
De Bruijn indices and locally nameless representations are concrete methods to represent variables and binders in syntax trees, avoiding issues like variable capture. Understanding these representations clarifies the practical syntax forms unified and translated by the paper's framework.

*How the paper uses it:* The paper's Tealeaves framework supports backends for de Bruijn indices and locally nameless representations and provides certified translations between them.

▶ [Syntax with Shifted Names](https://www.youtube.com/watch?v=Ug3JPw3Ghu4) — ACM SIGPLAN · 21:29 · 6 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Tealeaves framework and decorated traversable monads (DTMs) for first-order syntax metatheory. Starting from a beginner-level exploration of the core DTM concept and simple syntax representation, you progress to an intermediate project implementing and experimenting with the authors' Tealeaves Coq library. The advanced project challenges you to extend the framework toward one of its stated future directions, showing initiative and deeper comprehension.

### Beginner — Simple Lambda Calculus Syntax with Decorated Traversable Monads
*Effort: a weekend, ~8 hours*

You build a small functional program in OCaml or Haskell that implements a basic decorated traversable monad (DTM) abstraction to represent lambda calculus syntax with variable binding using de Bruijn indices. You will encode substitution and variable binding operations generically using the DTM laws.

**Why it shows you understood the paper:** This project shows you grasp the core categorical abstraction of DTMs and how it unifies syntax representations with binding. A professor would see you can translate the paper's abstract theory into a concrete, minimal implementation.

**Grounded in:** Introduction of decorated traversable monads (DTMs) as a unifying categorical abstraction for first-order syntax with binding.

**Tech stack:** OCaml 4.14 or Haskell GHC 9.2, dune or stack build tool

**Data:** No external data needed; you synthesize lambda calculus terms as input.

**Build it:**

1. Implement a simple datatype for lambda calculus terms with de Bruijn indices.
2. Define a monoid representing binding contexts and implement the decorated traversable monad interface.
3. Implement generic substitution and variable binding operations using the DTM abstraction.
4. Write example terms and demonstrate substitution correctness by testing simple cases.
5. Document how your implementation corresponds to the DTM laws described in the paper.

**Ships as:** A small code repository with source files, example tests, and a README explaining the DTM abstraction and your implementation.

**Stretch goal:** Add support for locally nameless representation and compare the two representations in your code.

### Intermediate — Exploring Tealeaves Coq Framework for Lambda Calculus Syntax
*Effort: 2 weekends, ~20 hours*

You clone and set up the Tealeaves Coq library from the authors' repository, then reproduce key proofs about the lambda calculus syntax DTM laws and certified translations between de Bruijn and locally nameless representations. You extend the library with a small example term and verify substitution properties.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' actual Coq implementation, understand their categorical abstractions, and verify metatheoretic properties. A professor would see you can engage with formal mechanized metatheory infrastructure.

**Grounded in:** Implementation of Tealeaves, a Coq framework supporting generic metatheory infrastructure based on DTMs; certified translation between de Bruijn and locally nameless representations; formalization of the DTM laws for lambda calculus syntax.

**Tech stack:** Coq 8.16 or later, OCaml 4.14+, Git

**Data:** No external dataset; you use example lambda calculus terms encoded in Coq as per the Tealeaves library.

**Build it:**

1. Clone the Tealeaves repository from https://github.com/dunnl/tealeaves and install dependencies.
2. Build the Coq project and run the existing proofs to verify correctness.
3. Study the formalization of the DTM laws for lambda calculus syntax in the library.
4. Add a new example lambda term and prove substitution properties using the provided tactics.
5. Experiment with the certified translation functions toLN and toDB on your example term.
6. Document your findings and any challenges encountered in a detailed README.

**Verified links from the paper:**

- <https://github.com/dunnl/tealeaves> — released by the paper's authors

**Ships as:** A forked and extended Tealeaves Coq project with your example terms, proofs, and documentation showing your engagement with the framework.

**Stretch goal:** Implement a small extension to handle a simple mutually recursive binder and prove it satisfies the DTM laws.

### Advanced — Extending Tealeaves to Support Nominal Techniques for Variable Binding
*Effort: 3+ weeks*

You design and implement an extension to the Tealeaves framework that incorporates nominal techniques for variable binding, addressing one of the paper's stated limitations. This involves enriching the DTM abstraction or integrating nominal sets to represent binders more naturally. You formalize key properties and demonstrate the approach on example syntax.

**Why it shows you understood the paper:** This project tackles a challenging open problem from the paper's future directions, showing deep comprehension and research initiative. A professor would recognize your ability to extend complex formal frameworks and contribute to ongoing research challenges.

**Grounded in:** Extending Tealeaves to capture nominal approaches and fully nominal bookkeeping as done on pen-and-paper; handling of nominal approaches is not covered and may require richer structures beyond DTMs.

**Tech stack:** Coq 8.16 or later, OCaml 4.14+, Git, Category theory libraries for Coq (e.g., UniMath or Coq's standard library)

**Data:** No external dataset; you work with formal syntax examples within Coq.

**Build it:**

1. Review the nominal approach to variable binding (e.g., Gabbay-Pitts nominal sets) and understand its differences from DTMs.
2. Analyze the Tealeaves framework codebase and identify integration points for nominal techniques.
3. Design an enriched abstraction or module that supports nominal binding within Tealeaves.
4. Implement the extension in Coq, including syntax definitions and binding operations.
5. Formalize key properties such as alpha-equivalence and substitution correctness.
6. Demonstrate the extension on example syntax with nominal binders.
7. Write comprehensive documentation explaining your design choices and formal results.

**Verified links from the paper:**

- <https://github.com/dunnl/tealeaves> — released by the paper's authors

**Ships as:** A Coq repository fork with your nominal extension to Tealeaves, formalized proofs, example syntax, and a detailed report linking your work to the paper's limitations and future directions.

**Stretch goal:** Explore automation tactics to simplify reasoning with nominal binders in your extension.

_The Tealeaves Coq framework requires familiarity with Coq and category theory; ensure your Coq environment is compatible with the repository version before starting._
