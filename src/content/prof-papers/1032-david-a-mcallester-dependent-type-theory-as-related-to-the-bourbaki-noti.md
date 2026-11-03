---
title: "1032 · Dependent Type Theory as Related to the Bourbaki Notions of Structure and Isomorphism — David A. McAllester"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-a-mcallester"
source_hash: "d7cd8dea007e1ee69bd9cb5dbf2f0dcd36651c711914224a975337ba195a083e"
sequence: 1032
generator: "outreach-garden: managed"
---

# 1032 · Dependent Type Theory as Related to the Bourbaki Notions of Structure and Isomorphism

## At a glance

- **Professor:** David A. McAllester
- **Institution:** TTI Chicago
- **Paper:** [Dependent Type Theory as Related to the Bourbaki Notions of Structure and Isomorphism](https://arxiv.org/pdf/2104.08958)
- **Authors:** David McAllester
- **Year:** 2021

## Paper overview

This paper develops a version of dependent type theory that generalizes Bourbaki's 1939 definitions of mathematical structure and isomorphism to dependent type signatures. It provides a straightforward set-theoretic definition of isomorphism and transport, enabling a constructive proof of the substitution of isomorphic objects. This approach contrasts with other treatments like the groupoid model and homotopy type theory, offering a simpler and more intuitive formalization aligned with classical logic and colloquial mathematics.

### Why it matters

**Research problem:** How to formally define isomorphism and transport in dependent type theory in a way that aligns with classical set theory and supports constructive substitution of isomorphics, overcoming complexities in existing models like the groupoid model and homotopy type theory.

**Why it matters:** Isomorphism is central to mathematical reasoning and understanding it formally is crucial for foundations of mathematics and for building automated reasoning systems. Existing models are complex and less intuitive, limiting their practical use and computational content.

**Key contributions:**

- Generalization of Bourbaki's notion of structure and isomorphism to dependent type theory.
- A straightforward set-theoretic definition of transport and isomorphism using commutativity conditions.
- Constructive proof of the substitution of isomorphics, providing computational content.
- Abandonment of propositions-as-types in favor of classical Boolean logic for simpler semantics.
- Demonstration that every class expression is cryptomorphic to a signature-axiom class.

## About the professor

**David A. McAllester** — Lenore Blum Professor, TTI Chicago.

Research interests: A Timeline of Research Areas: Truth Maintenence, The Foundations of Mathematics, Computer Chess, The Ontic Proof Verification System, SAT Solving, AI Planning, Natural Logic, Cognitive Judgments, and Obviousness, Static Analysis (Compilers), Type Theory and Automated Dynamic Programming, Constraint Programming, Reinforcement Learning, Probabilistic Programming, PAC-Bayesian Learning Theory, Misc. Learning Theory, Natural Language Processing, Concentration Inequalities, Co-Training, Computer Vision, Type Theory and MathZero

### Research links

- [Faculty/profile page](http://ttic.uchicago.edu/~dmcallester)
- [My blog](http://machinethoughts.wordpress.com/)
- [TTIC31230, Fundamentals of Deep Learning](https://mcallester.github.io/ttic-31230)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** dependent type theory
**The paper assumes:** dependent type theory, Martin-Löf type theory, type signatures, substitution principles
**Already in this field?** Skip this entirely if you already have a solid understanding of dependent type theory and its foundational concepts.

To understand the paper's core contributions on dependent type theory and its generalization of Bourbaki's notions of structure and isomorphism, a solid grasp of dependent types and their semantics is essential. The rigorous course option offers a deep, university-level exploration of dependent types with formal and conceptual depth, while the fast track provides a concise, practical introduction to programming with dependent types in Scala, suitable for quickly gaining intuition and foundational knowledge.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to programming with dependent types in Scala](https://www.youtube.com/playlist?list=PLR7tW79XkEKR3Zr3rVIhilsC5iGCIpoVb) — Dmytro Mitin · 11 videos · 1.5h across 11 episodes

**Watch only this:** Episodes 7-8 ("Type of fixed-length vectors" and "Dependent types"), about 14 minutes — these two episodes focus on dependent types directly and provide a quick, concrete foundation relevant to understanding the paper's dependent type theory.

*Why it unblocks this paper:* This short series introduces programming with dependent types in Scala, offering a practical and accessible introduction to dependent types and related concepts in about 1.5 hours, which helps build intuition for the paper's dependent type signatures and transport functions.

*If you want all of it:* All 11 episodes, about 1.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Dependent Type Theory as Related to the Bourbaki Notions of Structure and Isomorphism," start by building a solid foundation in dependent type theory and Bourbaki's notions of structure and isomorphism, as these are the theoretical pillars the paper generalizes and builds upon. Next, study set-theoretic semantics in type theory to grasp the paper's approach to formalizing isomorphism and transport. Finally, focus on the paper's core concept by watching the author's own talk, which provides direct insight into the paper's contributions and perspective.

### Dependent Type Theory *(prerequisite)*
Dependent type theory forms the foundational framework for the paper's generalization of Bourbaki structures. Understanding dependent types, their logical and computational interpretations, and how they unify programming and proofs is essential to grasp the paper's approach.

*How the paper uses it:* The paper generalizes Bourbaki's notion of structure and isomorphism to dependent type theory.

▶ ["A Little Taste of Dependent Types" by David Christiansen](https://www.youtube.com/watch?v=VxINoKFm-S4) — Strange Loop Conference · 38:36 · 8y ago

### Bourbaki Notions of Structure and Isomorphism *(prerequisite)*
Bourbaki's original definitions of mathematical structure and isomorphism are the classical basis that the paper extends to dependent type signatures. Understanding these notions and their philosophical and mathematical context is crucial for appreciating the paper's contributions.

*How the paper uses it:* The paper directly generalizes Bourbaki's 1939 definitions of structure and isomorphism.

▶ [Bourbaki, Categories and Structuralism, Jean Pierre Marquis](https://www.youtube.com/watch?v=ecHgsEI5CRs) — Copernicus · 47:37 · 6y ago

### Set-Theoretic Semantics in Type Theory *(prerequisite)*
The paper uses set-theoretic definitions to formalize isomorphism and transport, departing from propositions-as-types. Familiarity with set-theoretic semantics in type theory helps understand the paper's semantic rather than proof-theoretic approach.

*How the paper uses it:* The paper provides a straightforward set-theoretic definition of transport and isomorphism using commutativity conditions.

▶ [Peter Lumsdaine: General definitions of dependent type theories](https://www.youtube.com/watch?v=FTyQ5EFOtbQ) — LFCS Seminar · 1:03:16 · 6y ago

### Isomorphism and Transport in Type Theory
Isomorphism and transport are central methods enabling the constructive substitution of isomorphic objects in the paper's dependent type theory framework. Understanding these concepts is key to grasping the paper's main technical contributions.

*How the paper uses it:* The paper defines isomorphism sets and constructs transport functions enabling substitution of isomorphics.

▶ [Invariance Under Isomorphism and Definability - Per Martin-Löf](https://www.youtube.com/watch?v=VDreWuWDUu0) — Institute for Advanced Study · 1:33:24 · 10y ago

### Paper Author Talk *(paper-talk search result; attribution unverified)*
The author's own seminar talk provides the most direct and authoritative exposition of the paper's motivations, approach, and contributions, linking dependent type theory with AI and cognitive science perspectives.

*How the paper uses it:* David McAllester's talk directly presents the paper's perspective on dependent type theory and its relation to AI.

▶ [David McAllester | Type Theory from the Perspective of Artificial Intelligence](https://www.youtube.com/watch?v=79ymkGQW3b4) — Harvard CMSA · 1:08:55 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper, start by building a foundation in dependent type theory, which underpins the paper's generalization of Bourbaki structures. Next, learn about Bourbaki's original notions of structure and isomorphism to grasp the classical definitions the paper extends. Then, explore set-theoretic semantics as the paper uses set theory to formalize isomorphism and transport. Finally, focus on isomorphism and transport in type theory, the core method enabling constructive substitution of isomorphic objects in the paper's approach.

### Dependent Type Theory *(prerequisite)*
Dependent type theory extends traditional type theory by allowing types to depend on values, enabling more expressive and precise mathematical and programming constructs. Understanding this foundation is crucial for grasping how the paper generalizes Bourbaki's structures within a dependent type framework.

*How the paper uses it:* The paper generalizes Bourbaki's notion of structure and isomorphism to dependent type theory.

▶ ["A Little Taste of Dependent Types" by David Christiansen](https://www.youtube.com/watch?v=VxINoKFm-S4) — Strange Loop Conference · 38:36 · 8y ago

### Bourbaki Notions of Structure and Isomorphism *(prerequisite)*
Bourbaki's approach formalizes mathematical structures and their isomorphisms in a set-theoretic framework, emphasizing structural properties over specific elements. Learning these classical definitions provides the historical and conceptual background for the paper's generalization to dependent types.

*How the paper uses it:* The paper builds on and generalizes Bourbaki's 1939 definitions of structure and isomorphism.

▶ [Bourbaki, Categories and Structuralism, Jean Pierre Marquis](https://www.youtube.com/watch?v=ecHgsEI5CRs) — Copernicus · 47:37 · 6y ago

### Set-Theoretic Semantics in Type Theory *(prerequisite)*
Set-theoretic semantics interprets type-theoretic constructs using classical set theory, providing an intuitive and classical logic-based understanding. This perspective is key to the paper's approach, which abandons propositions-as-types in favor of Boolean-valued propositions and set-theoretic definitions.

*How the paper uses it:* The paper uses set-theoretic definitions to formalize isomorphism and transport within dependent type theory.

▶ [Set Theory | All-in-One Video](https://www.youtube.com/watch?v=5ZhNmKb-dqk) — Dr. Will Wood · 29:24 · 5y ago

### Isomorphism and Transport in Type Theory
Isomorphism and transport in type theory describe how objects that are structurally identical can be substituted for one another, preserving properties and enabling constructive reasoning. Understanding these concepts is essential to grasp the paper's constructive proof of substitution of isomorphics.

*How the paper uses it:* The paper provides a straightforward set-theoretic definition of transport and isomorphism enabling constructive substitution.

▶ [What does isomorphic mean? What is an isomorphism?](https://www.youtube.com/watch?v=ZPbYriK_gCs) — Epic Math Time · 12:46 · 7y ago

## Already in your library

- [SPLV 2025 - Dependent Types 1 (Edwin Brady)](https://www.youtube.com/watch?v=PQe-RGofj-k) — also for: SMT-Boosted Security Types for Low-Level MPC (Christian Skalka)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's core contributions on dependent type theory and Bourbaki's notions of structure and isomorphism. The beginner project focuses on implementing a simplified set-theoretic isomorphism and transport for dependent types. The intermediate project involves reimplementing the core constructive substitution of isomorphics with a small example and comparing it to a baseline approach. The advanced project tackles one of the paper's open limitations by exploring an extension of Bourbaki type theory to handle proper classes or sheaves, aiming to preserve constructive content.

### Beginner — Set-Theoretic Isomorphism and Transport for Simple Dependent Types
*Effort: a weekend, ~8 hours*

You build a small TypeScript or Python library that defines dependent type signatures with simple sorts and implements the set-theoretic definition of isomorphism as bijections between sorts. You also implement transport functions that satisfy the commutativity conditions described in the paper, allowing substitution of isomorphic objects in dependent types.

**Why it shows you understood the paper:** This project shows you grasp the paper's key conceptual contribution of generalizing Bourbaki's isomorphism to dependent type theory using set-theoretic semantics and transport, and that you can implement these abstract definitions concretely.

**Grounded in:** Definition of isomorphism sets id(σ, N, N') as sets of bijections satisfying transport conditions.

**Tech stack:** TypeScript, Node.js

**Data:** No external data needed; you simulate simple dependent type signatures and example objects.

**Build it:**

1. Define a simple dependent type signature with a few sorts and dependencies in TypeScript or Python.
2. Implement the set-theoretic notion of isomorphism as bijections between sorts with transport conditions.
3. Implement transport functions that map objects along isomorphisms, ensuring commutativity.
4. Write test cases demonstrating substitution of isomorphic objects in dependent types.
5. Document the implementation and relate it explicitly to the paper's definitions.

**Ships as:** A small library with code and tests showing set-theoretic isomorphisms and transport functions for dependent types, with a README explaining the connection to the paper.

**Stretch goal:** Add support for signature-axiom classes and demonstrate cryptomorphism for a simple example.

### Intermediate — Constructive Substitution of Isomorphics in Dependent Type Theory
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core constructive proof of substitution of isomorphics by coding a small framework that models dependent types and their isomorphisms, then implements transport and substitution functions. You compare this approach to a naive baseline that does not use transport, measuring correctness and simplicity.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's constructive proof into executable code, validating the computational content of substitution of isomorphics and showing the advantages of the Bourbaki approach over simpler baselines.

**Grounded in:** Proof of soundness of substitution of isomorphics in the dependent type theory.

**Tech stack:** TypeScript, Node.js, Jest (for testing)

**Data:** No external dataset; you create example dependent types and isomorphic objects to test substitution.

**Build it:**

1. Design data structures to represent dependent types, objects, and isomorphisms in TypeScript.
2. Implement transport functions that satisfy the commutativity conditions for substitution.
3. Implement substitution of isomorphic objects using transport.
4. Implement a baseline substitution without transport for comparison.
5. Write tests to verify correctness and compare code complexity and clarity.
6. Write a report in the README explaining the constructive proof and your implementation.

**Ships as:** A tested TypeScript codebase demonstrating constructive substitution of isomorphics with transport, compared against a baseline, with documentation linking to the paper's proof.

**Stretch goal:** Extend the framework to support modeling the J operator of Martin-Löf type theory as described in the paper.

### Advanced — Extending Bourbaki Type Theory to Handle Proper Classes
*Effort: a few weeks, ~60+ hours*

You develop a prototype extension of the Bourbaki type theory framework that attempts to support signature-axiom classes whose sorts are proper classes, addressing one of the paper's stated limitations. This involves designing semantic functions from sets to classes and exploring how to preserve constructive substitution and transport. You document challenges and propose solutions.

**Why it shows you understood the paper:** This project tackles an open problem from the paper, showing deep engagement with its limitations and future directions. It demonstrates your ability to extend foundational theory and reason about complex semantic issues, potentially opening paths for automated reasoning systems.

**Grounded in:** Limitations include inability to handle proper classes as sorts; future direction to expand Bourbaki type theory to handle proper classes and sheaves.

**Tech stack:** TypeScript, Node.js, Markdown for documentation

**Data:** No external data; you work with abstract semantic definitions and example classes.

**Build it:**

1. Review the paper's discussion on limitations regarding proper classes and sheaves.
2. Design an extension to the existing dependent type framework to represent proper classes as sorts.
3. Implement semantic functions from sets to classes respecting the Bourbaki framework.
4. Implement transport and substitution functions ensuring constructive content is preserved.
5. Test the framework with example signature-axiom classes involving proper classes.
6. Write detailed documentation discussing the design, challenges, and how this extension relates to the paper's goals.

**Ships as:** A prototype codebase and comprehensive README documenting an extension of Bourbaki type theory to handle proper classes, including example implementations and theoretical discussion.

**Stretch goal:** Explore representing sheaves as signature-axiom classes within this extended framework.
