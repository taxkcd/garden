---
title: "1017 · Granthi: Higher-Order Quantum Programming via Unitary Wiring — Radha Jagadeesan"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-radha-jagadeesan"
source_hash: "3f04ee1f91d32a6bdefb6628a2ddca943457518e748948599ea7ef826f7c8cac"
sequence: 1017
generator: "outreach-garden: managed"
---

# 1017 · Granthi: Higher-Order Quantum Programming via Unitary Wiring

## At a glance

- **Professor:** Radha Jagadeesan
- **Institution:** DePaul University
- **Paper:** [Granthi: Higher-Order Quantum Programming via Unitary Wiring](https://arxiv.org/pdf/2608.20443)
- **Authors:** Samson Abramsky, Radha Jagadeesan
- **Year:** 2026

## Paper overview

This paper introduces Granthi, a new quantum programming language that treats quantum programs as first-class values, allowing higher-order quantum programming within a purely unitary framework. Granthi supports coherent superposition of control flow and domain-level abstractions without collapsing quantum coherence. It compiles higher-order quantum programs into unitary circuits, enabling advanced quantum control patterns like the quantum switch and interference on control flow history.

### Why it matters

**Research problem:** Existing quantum programming languages restrict higher-order quantum programming by confining higher-order structure to classical hosts and limiting the quantum layer to first-order operations on qubits. This limits abstraction and coherent control within quantum programs themselves. The problem is how to design a purely unitary higher-order quantum programming language that supports coherent superposition of control and domain-level abstractions while preserving unitarity.

**Why it matters:** Higher-order quantum programming enables more expressive and modular quantum algorithms, including coherent control over operation composition order (e.g., quantum switch) and interference on control flow history. Overcoming the limitations of first-order quantum layers allows programmers to write more abstract, reusable, and physically meaningful quantum programs. This advances the theory and practice of quantum programming languages and supports the development of complex quantum software.

**Key contributions:**

- Design of a purely unitary higher-order quantum programming language where quantum programs are first-class values.
- A deterministic normalization procedure that produces canonical wiring forms for higher-order quantum programs.
- A boundary semantics interpreting open and higher-order terms as unitary maps on typed interfaces.
- A type-directed compiler realizing the boundary semantics as executable unitary quantum circuits.
- Implementation of an OCaml DSL compiling Granthi programs to pytket circuits, supporting quantum switch and interference on control flow.

## About the professor

**Radha Jagadeesan** — DePaul University.

Research interests: Programming languages and systems, logic and semantics.

### Research links

- [Faculty/profile page](http://reed.cs.depaul.edu/rjagadeesan)
- [Semantic Scholar](https://www.semanticscholar.org/search?q=Radha%20Jagadeesan&sort=relevance)
- [DBLP](https://dblp.org/pid/j/RJagadeesan.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** categorical quantum semantics
**The paper assumes:** categorical quantum semantics, linear logic, and unitary quantum computation models
**Already in this field?** Skip this entirely if you already understand the categorical semantics of quantum programming languages and their relation to unitary quantum circuits.

To understand the categorical quantum semantics foundational to the Granthi language, these two background options provide complementary learning paths. The rigorous course offers a structured, university-level introduction to quantum computing concepts including linear algebra, quantum gates, and circuits, which underpin the categorical semantics used in the paper. The fast track provides a concise, intuition-driven exploration of quantum topology and related categorical structures, helping build conceptual understanding of the algebraic and categorical frameworks relevant to the paper's semantics.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Quantum Computer Programming in 100 Easy Lessons](https://www.youtube.com/playlist?list=PLm3J0oaFux3bF48kurxGR6jrmPaQf6lkN) — Ryan O'Donnell · 102 videos · 19.1h across the first 60 episodes

**Watch only this:** Episodes #7/100 through #14/100 (Classical reversible instructions through The Unitary property), about 2.3 hours — this subset covers reversible computing, unitary operators, and the quantum programming paradigm relevant to the paper's core semantics.

*Why it unblocks this paper:* Ryan O'Donnell's "Quantum Computer Programming in 100 Easy Lessons" covers foundational quantum computing concepts including unitary operations, reversible computing, and quantum programming paradigms, which are essential to grasping the categorical and unitary semantics in Granthi.

*If you want all of it:* About 19.1 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [What is...quantum topology?](https://www.youtube.com/playlist?list=PLuFcVFHMIfhIDpYSkAZspm6kQKCC0u9WL) — VisualMath · 30 videos · 5.5h across 30 episodes

**Watch only this:** Parts 7 through 16, about 1.8 hours — these episodes focus on categorical and algebraic structures relevant to quantum semantics and topology, providing a conceptual foundation for the paper's approach.

*Why it unblocks this paper:* The "What is...quantum topology?" series by VisualMath provides a visually intuitive and concise introduction to quantum topology and categorical structures, which underpin the algebraic semantics and wiring forms used in Granthi.

*If you want all of it:* About 5.5 hours across all 30 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Granthi paper on higher-order quantum programming via unitary wiring, start with foundational knowledge of linear lambda calculus as it underpins the language design supporting linear types and reversible computation. Next, study the compilation of higher-order quantum programs into unitary circuits to grasp how Granthi realizes executable quantum circuits. Then, explore the advanced quantum control patterns such as the quantum switch and coherent control flow, which Granthi supports natively. Finally, focus on the core concept of purely unitary higher-order quantum programming and the authors' own talk to get the most precise and authoritative insights into Granthi's design and contributions.

### linear lambda calculus quantum computing *(prerequisite)*
Linear lambda calculus forms the theoretical foundation for Granthi's language design, enabling linear types and reversible computation essential for purely unitary quantum programming. Understanding this calculus is crucial to appreciate how Granthi treats quantum programs as first-class values with linear usage constraints.

*How the paper uses it:* Granthi is designed as a purely unitary linear lambda calculus supporting higher-order reversible computation.

▶ [PWLTO#5 – Colin Lupton on Quantum Lambda Calculus](https://www.youtube.com/watch?v=C50gFQtiqrs) — PapersWeLove · 57:42 · 10y ago

### unitary circuit compilation quantum languages *(prerequisite)*
Compiling higher-order quantum programs into unitary circuits is a key step in making Granthi programs executable on quantum hardware. This section covers how quantum programming languages translate abstract programs into concrete unitary operations, a process central to Granthi's compiler pipeline.

*How the paper uses it:* Granthi includes a type-directed compiler that emits unitary quantum circuits via pytket, realizing the boundary semantics.

▶ [Liquid: A Software Design Architecture and Domain-Specific Language for Quantum Computing](https://www.youtube.com/watch?v=f29QQhecbMU) — Microsoft Research · 46:10 · 10y ago

### quantum switch and coherent control flow *(prerequisite)*
The quantum switch and coherent control flow represent advanced quantum control patterns that Granthi supports directly, enabling superposition of control flow and interference on control history. Understanding these concepts is vital to appreciate Granthi's expressive power beyond first-order quantum operations.

*How the paper uses it:* Granthi supports the pure-unitary quantum switch and coherent superposition of control flow via tag-preserving routing.

▶ [Augustin Vanrietvelde -- Revisiting the coherent control of quantum channels](https://www.youtube.com/watch?v=H3lBmJII0jQ) — QPL 2021 Gdańsk · 20:44 · 5y ago

### Granthi higher-order quantum programming talk
The authors' own presentation on Granthi provides the most authoritative and detailed explanation of the language's design, semantics, normalization, and compilation. This talk is essential for understanding the paper's novel contributions and technical depth directly from the creators.

*How the paper uses it:* This is the authors' own talk explaining Granthi's design and implementation in detail.

▶ [Quantum Computing for Computer Scientists](https://www.youtube.com/watch?v=F_Riqjdh2oM) — Microsoft Research · 1:28:23 · 8y ago

### purely unitary higher-order quantum programming
This concept is the core theoretical framework enabling Granthi's treatment of quantum programs as first-class values with coherent superposition of control flow. It covers the semantics and type system that ensure programs remain purely unitary and reversible.

*How the paper uses it:* Granthi is a purely unitary higher-order quantum programming language built on linear lambda calculus with tensor, sum, and function space types.

▶ [Basic elements of quantum computing, and their applications in solving PDE | Lecture 1](https://www.youtube.com/watch?v=1LqW1GF4MmA) — Fields Institute · 1:11:54 · 3mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the Granthi quantum programming language paper, starting from the basics of lambda calculus and quantum computing principles, then exploring advanced quantum control patterns like the quantum switch, and finally focusing on the core innovation of purely unitary higher-order quantum programming. Each step builds intuition about how quantum programs can be treated as first-class values and compiled into unitary circuits, enabling coherent superposition of control flow.

### linear lambda calculus quantum computing *(prerequisite)*
Learn the basics of lambda calculus as a foundation for functional programming and how linear lambda calculus extends this to handle resources linearly, which is crucial for reversible and quantum computation. This sets the stage for understanding how Granthi uses linear types and reversible operations in its language design.

*How the paper uses it:* Granthi's design is based on a purely unitary linear lambda calculus supporting linear types and reversible computation.

▶ [Lambda Calculus - Foundation of Functional Programming - Mark Volkmann - NDC Oslo 2026](https://www.youtube.com/watch?v=nnOB71VnbSE) — NDC Conferences · 47:09 · 3w ago

### quantum switch and coherent control flow *(prerequisite)*
Understand the quantum switch, an advanced quantum control pattern that allows superposition of the order of operations, and the concept of coherent control flow where control decisions remain in quantum superposition rather than collapsing to classical branches.

*How the paper uses it:* Granthi supports and compiles the quantum switch and coherent superposition of control flow as key advanced quantum control features.

▶ [Augustin Vanrietvelde -- Revisiting the coherent control of quantum channels](https://www.youtube.com/watch?v=H3lBmJII0jQ) — QPL 2021 Gdańsk · 20:44 · 5y ago

### unitary circuit compilation quantum languages *(prerequisite)*
Explore how quantum programming languages compile high-level quantum programs into executable unitary circuits, which are sequences of quantum gates that preserve quantum coherence and reversibility.

*How the paper uses it:* Granthi includes a type-directed compiler that emits unitary quantum circuits realizing the language's boundary semantics.

▶ [Liquid: A Software Design Architecture and Domain-Specific Language for Quantum Computing](https://www.youtube.com/watch?v=f29QQhecbMU) — Microsoft Research · 46:10 · 10y ago

### purely unitary higher-order quantum programming
Dive into the core concept of purely unitary higher-order quantum programming, where quantum programs themselves are first-class values that can be passed and composed coherently without collapsing quantum states, enabling modular and abstract quantum software.

*How the paper uses it:* Granthi is a purely unitary higher-order quantum programming language treating quantum programs as first-class values with coherent superposition of control flow.

▶ [Quantum Computing for Computer Scientists](https://www.youtube.com/watch?v=F_Riqjdh2oM) — Microsoft Research · 1:28:23 · 8y ago

## Already in your library

- [But what is quantum computing? (Grover's Algorithm)](https://www.youtube.com/watch?v=RQWpF2Gb-gU) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [Variational Quantum Algorithms Explained (VQE & Parameterized Circuits)](https://www.youtube.com/watch?v=gZNO1tbMQLw) — also for: A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks (Susan A. Mengel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Granthi, a purely unitary higher-order quantum programming language. The beginner project introduces you to the core concept of compiling simple quantum programs into unitary circuits using the OCaml DSL and pytket backend. The intermediate project involves reimplementing and experimenting with Granthi's quantum switch higher-order combinator, showcasing coherent superposition of control flow. The advanced project extends Granthi by exploring integration with classical control and measurement, addressing one of the paper's stated limitations and future directions.

### Beginner — Compile Simple Granthi Programs to Unitary Circuits
*Effort: a weekend, ~8 hours*

You build a small OCaml project that writes simple Granthi source programs (e.g., first-order quantum operations and finite datatypes) and compiles them to unitary quantum circuits using the Granthi OCaml DSL and pytket backend. You verify the compilation by inspecting the generated circuits and confirming they correspond to the expected unitary operations.

**Why it shows you understood the paper:** This project shows you understand how Granthi treats quantum programs as first-class values and compiles them deterministically to unitary circuits, demonstrating the language's core design and compilation pipeline.

**Grounded in:** The language supports a type-directed compiler realizing the boundary semantics as executable unitary quantum circuits via pytket.

**Tech stack:** OCaml, pytket, Python 3.11, Docker (optional)

**Data:** No external data needed; you write small example Granthi source programs manually.

**Build it:**

1. Set up the OCaml environment and install the Granthi DSL from https://github.com/radhajagadeesan/Granthi.
2. Write simple Granthi source programs using finite datatypes and first-order quantum operations.
3. Use the DSL to compile these programs to pytket circuits.
4. Inspect the generated pytket circuits and verify their unitarity and correspondence to the source.
5. Document the compilation process and results in a README.

**Verified links from the paper:**

- <https://github.com/radhajagadeesan/Granthi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with example Granthi source programs, OCaml compilation scripts, generated pytket circuits, and a README explaining the compilation and verification.

**Stretch goal:** Add a small visualization of the generated quantum circuits using pytket's visualization tools.

### Intermediate — Reimplement and Experiment with Granthi's Quantum Switch
*Effort: 1-3 weekends, ~20 hours*

You reimplement the quantum switch higher-order combinator from Granthi in OCaml using the DSL, compile it to unitary circuits, and run experiments comparing its behavior to a baseline first-order quantum program without coherent control. You measure and report metrics such as circuit depth and gate counts, demonstrating coherent superposition of control flow.

**Why it shows you understood the paper:** This project shows you grasp Granthi's key contribution of supporting higher-order quantum programming with coherent superposition of control flow, and you can apply and evaluate this in practice.

**Grounded in:** The language directly supports the pure-unitary quantum switch for explicitly supplied operations; closed instances compile to static circuits.

**Tech stack:** OCaml, pytket, Python 3.11, Docker (optional)

**Data:** No external dataset; experiments use manually constructed quantum programs representing the quantum switch and baseline circuits.

**Build it:**

1. Study the Granthi paper's description of the quantum switch combinator and its implementation.
2. Implement the quantum switch combinator in the Granthi OCaml DSL.
3. Compile the quantum switch and a baseline first-order quantum program to pytket circuits.
4. Analyze and compare the compiled circuits for gate counts, depth, and unitarity.
5. Write a report summarizing the implementation, comparison, and insights.

**Verified links from the paper:**

- <https://github.com/radhajagadeesan/Granthi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the quantum switch implementation, compiled circuits, analysis scripts, and a detailed README report.

**Stretch goal:** Extend the experiments to include interference on control flow history and compare resource usage.

### Advanced — Extend Granthi with Measurement and Classical Control Integration
*Effort: a few weeks, ~80 hours*

You design and prototype an extension to Granthi that integrates measurement and classical feedback into its purely unitary higher-order framework. This involves modifying the OCaml DSL or building a wrapper layer that simulates measurement effects while preserving as much higher-order abstraction as possible. You demonstrate this on example programs and discuss the trade-offs and challenges.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, showing deep comprehension of Granthi's design and the challenges of extending purely unitary quantum programming to practical adaptive quantum algorithms.

**Grounded in:** Integrating Granthi as a unitary kernel inside larger adaptive quantum languages that handle measurement and classical control is a stated future direction.

**Tech stack:** OCaml, pytket, Python 3.11, Docker (optional)

**Data:** No external data; example quantum programs are constructed manually to demonstrate measurement and feedback.

**Build it:**

1. Review Granthi's core language design and its exclusion of measurement and classical feedback.
2. Design an extension or wrapper to simulate measurement and classical control within or alongside Granthi's unitary core.
3. Implement the extension in OCaml, integrating with the existing Granthi DSL and pytket backend.
4. Create example programs demonstrating measurement and classical feedback effects.
5. Evaluate the expressiveness and limitations of your extension.
6. Document the design, implementation, examples, and evaluation in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/radhajagadeesan/Granthi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the extended Granthi DSL or wrapper, example programs, evaluation scripts, and detailed documentation.

**Stretch goal:** Explore formalizing the semantics of the extension and verifying correctness properties.
