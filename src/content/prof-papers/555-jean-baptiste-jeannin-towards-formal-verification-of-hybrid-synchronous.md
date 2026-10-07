---
title: "555 · Towards Formal Verification of Hybrid Synchronous Programs with Refinement Types — Jean-Baptiste Jeannin"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jean-baptiste-jeannin"
source_hash: "0c9c298c4c19959689572ee2a7f19208dd86c94fb7d7ee406ba540ee603af9c5"
sequence: 555
generator: "outreach-garden: managed"
---

# 555 · Towards Formal Verification of Hybrid Synchronous Programs with Refinement Types

## At a glance

- **Professor:** Jean-Baptiste Jeannin
- **Institution:** University of Michigan
- **Paper:** [Towards Formal Verification of Hybrid Synchronous Programs with Refinement Types](https://www-personal.umich.edu/~jeannin/papers/dane2026towards.pdf)
- **Authors:** Serra Z. Dane, Jiawei Chen, Marc Pouzet, Jean-Baptiste Jeannin
- **Year:** 2026

## Paper overview

This paper develops a formal verification framework for hybrid synchronous programs—programs that combine discrete control steps with continuous physical dynamics—using refinement types. It formalizes zero-crossings (events triggering discrete changes), extends the type system of a synchronous programming language (Zélus) to handle hybrid dynamics, and proves type safety. The approach enables verifying safety properties of cyber-physical systems (CPS) directly on executable code, bridging the gap between modeling and implementation.

### Why it matters

**Research problem:** Cyber-physical systems often involve hybrid dynamics mixing discrete control and continuous physical evolution. Existing formal verification methods typically verify abstract models rather than executable code, limiting confidence in real-world safety. Extending verification techniques to hybrid synchronous programs with continuous dynamics and event-triggered resets is challenging due to semantic and proof-theoretic complexities, especially in defining zero-crossings and ensuring soundness of verification.

**Why it matters:** Safety-critical CPS like autonomous vehicles and aircraft require high assurance that their control software behaves correctly in complex hybrid environments. Verifying executable code rather than abstract models increases trustworthiness and reduces errors in implementation. A formal, sound, and compositional verification framework for hybrid synchronous programs enables rigorous safety guarantees and practical verification of real CPS software.

**Key contributions:**

- A formal, modular definition of zero-crossings for hybrid synchronous programs.
- Operational semantics and typing rules for a synchronous programming language extended with continuous dynamics and event-triggered resets.
- A hybrid refinement type system that guarantees safety properties of hybrid programs.
- Proof of type safety relating typing judgments to operational semantics.
- Verification of motivating examples including water tank controller and automatic braking system.

## About the professor

**Jean-Baptiste Jeannin** — Associate Professor, Department of Aerospace Engineering, University of Michigan.

Research interests: Verification of cyber-physical systems, in particular aerospace applications; Verification of numerical methods; Logics and semantics of programming languages, in particular synchronous languages; Programming with coinductive types

### Research links

- [Faculty/profile page](http://www-personal.umich.edu/~jeannin)
- [Resolved homepage](https://public.websites.umich.edu/~jeannin/)
- [Lab website](https://marvl.engin.umich.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hybrid Systems Verification
**The paper assumes:** hybrid systems theory, formal verification of hybrid automata, differential dynamic logic
**Already in this field?** Skip this entirely if you already understand the theory and verification methods of hybrid systems combining continuous and discrete dynamics.

To understand the formal verification framework for hybrid synchronous programs presented in the paper, it is essential to grasp the theory and verification techniques of hybrid systems, which combine continuous dynamics and discrete transitions. The rigorous course provides a deep, structured foundation in formal methods and system verification, while the fast track offers a concise, intuition-focused introduction to hybrid systems and their verification principles. Readers should pick the lane that fits their available time and prior background; the fast track is a focused primer, not a watered-down version.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Formal Methods for System Verification](https://www.youtube.com/playlist?list=PLwdnzlV3ogoU0I4OqKZvuaPc_EoUPifbP) — NPTEL IIT Guwahati · 41 videos · 20.1h across the first 39 episodes

**Watch only this:** Lectures 1 through 24 (Lec 1: Formal Methods for System Verification: Course Introduction to Lec 24: LTL Encoding Examples), about 12.5 hours — covering formal methods basics, temporal logic, and model checking necessary to follow the paper's verification framework.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Formal Methods for System Verification covers foundational logic, model checking, and formal property verification techniques essential for understanding the paper's use of refinement types and differential dynamic logic in hybrid systems verification.

*If you want all of it:* About 20.1 hours across the first 39 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Embedded Systems - Design Verification and Test](https://www.youtube.com/playlist?list=PLwdnzlV3ogoVjd2oVYYXcclK3wFgu8FKn) — NPTEL IIT Guwahati · 38 videos · 31.9h across 38 episodes

**Watch only this:** Episodes 1 through 4 (Introduction Video, Introduction, Modeling Techniques – 1, Modeling Techniques – 2), about 3.3 hours — sufficient to understand hybrid system modeling and verification basics.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Embedded Systems - Design Verification and Test includes modeling techniques and temporal logic fundamentals that provide a concise yet rigorous introduction to hybrid systems verification concepts relevant to the paper's formalization of zero-crossings and operational semantics.

*If you want all of it:* About 31.9 hours across 38 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper 'Towards Formal Verification of Hybrid Synchronous Programs with Refinement Types,' start by building foundational knowledge on zero-crossing formalization and differential dynamic logic, which underpin the modeling of hybrid systems and reasoning about continuous dynamics. Next, study synchronous programming languages and type safety proofs to grasp the base language semantics and the importance of type soundness. Finally, focus on the paper's core contribution—the hybrid refinement type system—through advanced talks on refinement types and program synthesis, culminating with the authors' own talk or closest available expert presentations on formal verification frameworks.

### Zero-crossing formalization *(prerequisite)*
Zero-crossings are fundamental to modeling discrete events triggered by continuous dynamics in hybrid systems. Understanding their formal semantics is crucial for grasping how the paper defines and detects these events precisely to ensure sound verification.

*How the paper uses it:* The paper formalizes zero-crossings as sign changes of continuous guard functions with precise conditions to support sound verification.

▶ [Zero Crossing Detector](https://www.youtube.com/watch?v=n7CuYxDE74E) — LEARN AND GROW · 6:37 · 9 years ago

### Differential dynamic logic *(prerequisite)*
Differential dynamic logic (dL) provides the logical framework to reason about continuous evolution in hybrid systems, including ODEs and invariants. This foundation is essential to understand the paper's use of dL proof principles within the refinement type system.

*How the paper uses it:* The approach integrates differential dynamic logic proof principles for continuous evolution within the hybrid refinement type system.

▶ [Logical Analysis of Hybrid Systems](https://www.youtube.com/watch?v=QAX6VJcCX14) — Institute for Systems Research · 1:12:20 · 3 years ago

### Synchronous programming languages *(prerequisite)*
Synchronous programming languages form the base paradigm extended by the paper to incorporate hybrid dynamics. Understanding their operational semantics and concurrency models is necessary to appreciate the paper's language extensions and typing rules.

*How the paper uses it:* The paper extends the synchronous programming language Zélus with continuous dynamics and event-triggered resets.

▶ [Lecture "Operational Semantics (Part 1, Preliminaries)" of "Program Analysis"](https://www.youtube.com/watch?v=jsBHd3-04oA) — Michael Pradel · 31:09 · 5 years ago

### Type safety proofs *(prerequisite)*
Type safety proofs ensure that well-typed programs maintain safety invariants during execution, a key property the paper establishes for hybrid synchronous programs. Familiarity with progress and preservation lemmas will clarify the paper's soundness theorem.

*How the paper uses it:* The paper proves type safety relating typing judgments to operational semantics, ensuring safety invariants hold throughout execution.

▶ [Lecture 1: Review of Type Safety Proofs](https://www.youtube.com/watch?v=CR58Ms5Q6Ws) — Neelakantan Krishnaswami · 53:54 · 4 years ago

### Hybrid refinement type system
The hybrid refinement type system is the paper's central method encoding safety invariants for hybrid synchronous programs. Studying advanced talks on refinement types and program synthesis will deepen understanding of how refinement types enable modular verification of complex hybrid behaviors.

*How the paper uses it:* The paper develops a hybrid refinement type system guaranteeing safety properties of hybrid programs using refinement types and differential invariants.

▶ [Program Synthesis from Refinement Types](https://www.youtube.com/watch?v=KZwpQIpqbf4) — Microsoft Research · 54:12 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on formal verification of hybrid synchronous programs with refinement types, start by grasping the foundational concepts of zero-crossings and differential dynamic logic, which underpin modeling and reasoning about hybrid systems. Then, learn about synchronous programming languages as the base paradigm extended by the paper. Next, study type safety proofs to appreciate how the paper guarantees safety properties. Finally, focus on the hybrid refinement type system, the paper's core method encoding safety invariants for hybrid synchronous programs.

### Zero-crossing formalization *(prerequisite)*
Zero-crossings are points where a continuous signal changes sign, triggering discrete events in hybrid systems. Understanding how zero-crossings are precisely defined and detected is crucial for modeling the interaction between continuous dynamics and discrete control.

*How the paper uses it:* The paper formalizes zero-crossings as sign changes of continuous guard functions with precise conditions to support sound verification.

▶ [Zero Crossing Detector](https://www.youtube.com/watch?v=n7CuYxDE74E) — LEARN AND GROW · 6:37 · 9 years ago

### Differential dynamic logic *(prerequisite)*
Differential dynamic logic (dL) is a formal logic for reasoning about hybrid systems combining discrete transitions and continuous evolutions described by differential equations. It provides proof principles to verify properties of continuous dynamics within hybrid programs.

*How the paper uses it:* The paper leverages differential dynamic logic proof principles to reason about continuous evolution and encode safety invariants.

▶ [Logical Analysis of Hybrid Systems](https://www.youtube.com/watch?v=QAX6VJcCX14) — Institute for Systems Research · 1:12:20 · 3 years ago

### Synchronous programming languages *(prerequisite)*
Synchronous programming languages model systems where computation proceeds in discrete logical steps synchronized globally. They provide a structured way to design reactive systems with predictable timing, which the paper extends to hybrid dynamics.

*How the paper uses it:* The paper extends the type system of the synchronous language Zélus to handle hybrid dynamics combining discrete steps and continuous evolution.

▶ [Lecture "Operational Semantics (Part 1, Preliminaries)" of "Program Analysis"](https://www.youtube.com/watch?v=jsBHd3-04oA) — Michael Pradel · 31:09 · 5 years ago

### Type safety proofs *(prerequisite)*
Type safety proofs show that well-typed programs cannot go wrong during execution, ensuring that safety properties encoded in types hold throughout program runs. This foundational concept underpins the paper's guarantee that hybrid programs maintain safety invariants.

*How the paper uses it:* The paper proves type safety relating typing judgments to operational semantics, ensuring safety properties hold during continuous and discrete phases.

▶ [Lecture 1: Review of Type Safety Proofs](https://www.youtube.com/watch?v=CR58Ms5Q6Ws) — Neelakantan Krishnaswami · 53:54 · 4 years ago

### Hybrid refinement type system
Refinement types enrich traditional types with logical predicates to express and verify detailed safety properties. The hybrid refinement type system in the paper encodes invariants over both discrete and continuous behaviors in hybrid synchronous programs.

*How the paper uses it:* The paper develops a hybrid refinement type system that guarantees safety properties of hybrid programs by combining refinement types with differential invariants.

▶ [An Introduction to Refinement Types](https://www.youtube.com/watch?v=OEdXcn1rx6k) — Ras Bodik · 29:47 · 10 years ago

## Already in your library

- [DIREC TALK: Formal Verification and Machine Learning Joining Forces](https://www.youtube.com/watch?v=KERGagqPWqY) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's formal verification framework for hybrid synchronous programs using refinement types. Starting with a small-scale implementation of zero-crossing detection, you then build a core hybrid refinement type system for a simple hybrid program, and finally extend the framework to address one of the paper's stated limitations, showing deeper engagement with the research challenges.

### Beginner — Zero-Crossing Event Detector for Hybrid Signals
*Effort: a weekend, ~8 hours*

You build a small TypeScript/React web app that simulates continuous signals and implements zero-crossing detection based on sign changes of guard functions, visualizing detected zero-crossings on a time plot. The app will allow users to input simple continuous functions and see where zero-crossings occur, mimicking the paper's formal definition of zero-crossings.

**Why it shows you understood the paper:** This project shows you grasp the paper's formalization of zero-crossings as sign changes of continuous guard functions, a key foundation for hybrid synchronous program verification.

**Grounded in:** The project demonstrates the paper's contribution: "A formal, modular definition of zero-crossings for hybrid synchronous programs."

**Tech stack:** TypeScript, React, D3.js or any plotting library

**Data:** Simulated continuous guard functions defined by simple mathematical expressions entered by the user; no external dataset needed.

**Build it:**

1. Set up a React app with TypeScript and a plotting library.
2. Implement functions to evaluate continuous guard functions over time intervals.
3. Detect zero-crossings by finding intervals where the function changes sign from negative to positive.
4. Visualize the continuous function and mark detected zero-crossings on the plot.
5. Add UI controls to input different guard functions and adjust time intervals.

**Ships as:** A GitHub repo with a React app demonstrating zero-crossing detection on user-defined continuous signals, with a README explaining the connection to the paper's zero-crossing formalization.

**Stretch goal:** Add support for detecting zero-crossings with resets and simulate simple discrete event triggering.

### Intermediate — Hybrid Refinement Type Checker for a Simple Water Tank Controller
*Effort: 2 weekends, ~20 hours*

You implement a simplified hybrid refinement type system in Python or TypeScript that can type-check a small hybrid synchronous program modeling a water tank controller with continuous water level dynamics and zero-crossing triggered resets. You encode safety invariants as refinement types and verify that the program maintains these invariants during continuous evolution and discrete resets.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of embedding hybrid synchronous programming constructs with continuous ODE dynamics and event-triggered resets into a refinement type system, and verify safety invariants as the paper does for the water tank example.

**Grounded in:** The project reproduces the paper's key contribution: "A hybrid refinement type system that guarantees safety properties of hybrid programs," and the verification of the water tank controller example.

**Tech stack:** Python 3.11, TypeScript (optional), Jupyter Notebook (optional)

**Data:** No external dataset; the water tank controller model is simulated as per the paper's example in Section 8.

**Build it:**

1. Define a small domain-specific language (DSL) or data structures to represent hybrid synchronous programs with ODEs and resets.
2. Implement zero-crossing detection logic for guard functions within the program semantics.
3. Design a refinement type system that encodes safety invariants and differential invariants.
4. Implement a type checker that verifies the program against these refinement types.
5. Simulate the water tank controller program and demonstrate that the type checker verifies its safety properties.

**Ships as:** A GitHub repo containing the type checker code, example water tank program, verification proofs as code or comments, and a README linking the implementation to the paper's method and results.

**Stretch goal:** Add support for verifying an automatic braking system example as in the paper.

### Advanced — Extending Hybrid Refinement Types to Handle Exogenous Discrete Events
*Effort: 3+ weeks*

You extend your intermediate hybrid refinement type system to incorporate inherently discrete or exogenous events beyond zero-crossings, addressing one of the paper's stated limitations. You formalize the semantics of such events, update the type system and operational semantics accordingly, and verify safety properties of a hybrid program that includes these discrete events.

**Why it shows you understood the paper:** This project demonstrates deep engagement with the paper by tackling a known limitation and extending the formal verification framework, showing you can contribute to advancing the research.

**Grounded in:** The project addresses the paper's limitation: "Does not yet address inherently discrete or exogenous events outside zero-crossing mechanisms," and explores the future direction of incorporating such events.

**Tech stack:** Python 3.11, TypeScript (optional), Jupyter Notebook (optional)

**Data:** No external dataset; you design or simulate hybrid programs with exogenous discrete events for verification.

**Build it:**

1. Review the paper's operational semantics and type system for hybrid synchronous programs.
2. Define formal semantics for exogenous discrete events and integrate them into the hybrid program model.
3. Extend the refinement type system to handle safety invariants involving these discrete events.
4. Update the type checker and operational semantics implementation accordingly.
5. Verify safety properties on example hybrid programs combining continuous dynamics, zero-crossings, and exogenous discrete events.
6. Document the extension, challenges, and verification results in the README.

**Ships as:** A GitHub repo with the extended type system implementation, example programs including exogenous events, verification results, and a detailed README discussing the extension relative to the paper.

**Stretch goal:** Explore formalizing and verifying liveness or bounded response properties using temporal logics as a further extension.

_The paper's authors have not released code or datasets; all implementations must be reimplemented from the paper's formal definitions and examples._
