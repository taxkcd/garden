---
title: "938 · A Pure Demand Operational Semantics: with Applications to Program Analysis — Scott F. Smith"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-scott-f-smith"
source_hash: "b7ea0c964c1a8ad5d32a74e072be4771a31f10ddb1887b560167a27db10045a8"
sequence: 938
generator: "outreach-garden: managed"
---

# 938 · A Pure Demand Operational Semantics: with Applications to Program Analysis

## At a glance

- **Professor:** Scott F. Smith
- **Institution:** Johns Hopkins University
- **Paper:** [A Pure Demand Operational Semantics: with Applications to Program Analysis](https://arxiv.org/pdf/2310.15915)
- **Authors:** Scott Smith, Robert Zhang
- **Year:** 2024

## Paper overview

This paper introduces a new way to define the operational semantics of higher-order functional programming languages using only the call stack and source program points as state information, eliminating the need for environments, substitutions, or continuations. The authors prove this semantics equivalent to standard ones and demonstrate how it can be used to create a novel program analysis that infers properties like recurrences without requiring value widening. They also provide a formal proof system for the analysis and an implementation confirming its soundness and usefulness.

### Why it matters

**Research problem:** Traditional operational semantics for functional languages rely on environments, substitutions, stores, and continuations to represent program state, which can be complex and large. There is a need for a minimal-state operational semantics that simplifies the representation of program state while preserving correctness and enabling new applications such as program analysis.

**Why it matters:** Simplifying operational semantics to minimal state information can lead to more elegant mathematical formulations and enable new program analyses that are more precise or efficient. It can reduce complexity in reasoning about programs and open doors to novel static analyses that infer richer properties without typical approximations like value widening.

**Key contributions:**

- Definition of a novel pure demand operational semantics that propagates no variable bindings forward
- Proof of correctness relative to standard environment/closure operational semantics
- Definition of a program analysis directly from the pure demand semantics that infers general value abstractions including recurrences
- First fully rule-based presentation of a higher-order program analysis
- Introduction of a stack-stitching technique for call stack finitization in program analysis

## About the professor

**Scott F. Smith** — Professor, Department of Computer Science, Johns Hopkins University.

Research interests: My research interests span a number of areas in programming languages.

### Research links

- [Faculty/profile page](https://www.cs.jhu.edu/~scott)
- [Lab website](http://pl.cs.jhu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** operational semantics of programming languages
**The paper assumes:** foundations of operational semantics, big-step and small-step semantics, environment and closure semantics in programming languages
**Already in this field?** Skip this entirely if you already understand operational semantics and environment-based semantics for functional programming languages.

To understand the novel pure demand operational semantics and the derived program analysis in this paper, a solid grasp of operational semantics—especially big-step and environment-based semantics—is essential. The rigorous course offers a comprehensive university-level treatment of programming language semantics, while the fast track provides a concise, focused introduction to operational semantics concepts, enabling efficient preparation depending on your available time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Strathclyde University CS311 - Programming language design and implementation](https://www.youtube.com/playlist?list=PLQ3RKUKyr1TsMOE-2itSwQVerA8otkiZl) — Stuart Gale · 24 videos · 14.6h across 24 episodes

**Watch only this:** Lectures 4, 5, 6, 7, 9, and 13 (covering IMP big-step semantics, LAM small-step and big-step semantics, closures and environments, thunks and laziness, and syntax and meaning) totaling about 3.5 hours — these provide the core operational semantics background needed.

*Why it unblocks this paper:* This Strathclyde University CS311 course covers programming language design and implementation with detailed lectures on big-step and small-step semantics, closures, environments, and lambda calculus, directly relevant to understanding the paper's semantics and equivalence proofs.

*If you want all of it:* Approximately 14.6 hours across all 24 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Programming Language Semantics](https://www.youtube.com/playlist?list=PLfUzQZVAoOvgXt1nRvQXqVyG3-x--a2ls) — F · 15 videos · 7.8h across 15 episodes

**Watch only this:** Episodes 5 and 6 ('Big-step operational semantics (An introduction)' and 'Small-step operational semantics (An introduction)') totaling about 1 hour — these two episodes cover the essential operational semantics needed to grasp the paper's approach.

*Why it unblocks this paper:* This concise 'Programming Language Semantics' playlist includes focused introductions to big-step and small-step operational semantics and related semantic styles, providing a clear and accessible overview that aligns well with the paper's core concepts.

*If you want all of it:* About 7.8 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Pure Demand Operational Semantics: with Applications to Program Analysis," start by building a solid foundation in operational semantics, especially minimal state representations and their role in program analysis. Then, study the semantics of higher-order functional programming languages, as the paper targets these languages. Finally, focus on the paper's core concept: the novel pure demand operational semantics and its derived program analysis, prioritizing the authors' own talk or rigorous academic lectures that directly address operational semantics and program analysis.

### Operational semantics minimal state *(prerequisite)*
Understanding how operational semantics can be simplified to minimal state information is central to the paper's approach. This includes grasping big-step and small-step semantics and how environments and continuations can be abstracted away or minimized. This foundation is crucial to appreciate the novelty of the pure demand semantics that uses only call stacks and program points.

*How the paper uses it:* The paper introduces a minimal-state operational semantics using only the call stack and lexical program points as state information.

▶ [Lecture "Operational Semantics (Part 5, Big-step semantics)" of "Program Analysis"](https://www.youtube.com/watch?v=51-oAbfxAds) — Michael Pradel · 13:35 · 5y ago

### Higher-order functional programming semantics *(prerequisite)*
Since the paper targets higher-order functional languages, it is important to understand the semantics of such languages, including how higher-order functions are modeled and reasoned about semantically. This knowledge helps in appreciating the challenges and innovations in defining operational semantics and analyses for these languages.

*How the paper uses it:* The paper focuses on higher-order functional languages and their operational semantics.

▶ [Semantic models for higher-order Bayesian inference - Sam Staton, University of Oxford](https://www.youtube.com/watch?v=nqfvr4pRB_o) — The Alan Turing Institute · 41:15 · 8y ago

### Program analysis via operational semantics *(prerequisite)*
The paper derives a program analysis directly from the pure demand operational semantics. Understanding how operational semantics can serve as a foundation for static program analysis, including big-step semantics and proof systems, is essential to grasp the paper's contributions and methodology.

*How the paper uses it:* The paper defines a program analysis directly from the pure demand operational semantics and formalizes it as a proof system.

▶ [Lecture "Operational Semantics (Part 2, Syntax of SIMP)" of "Program Analysis"](https://www.youtube.com/watch?v=kjfY063NAgo) — Michael Pradel · 15:50 · 5y ago

### Call stack based program analysis
The pure demand operational semantics and the derived program analysis rely heavily on representing program state using the call stack and program points. Understanding the call stack's role in program execution and analysis is critical to appreciate the stack stitching heuristic and the minimal state approach.

*How the paper uses it:* The paper uses the call stack and lexical program points as the complete state information and introduces a stack stitching heuristic for analysis.

▶ [How Assembly Functions Work - The Stack Explained](https://www.youtube.com/watch?v=u_-oQx_4jvo) — Mxy · 15:35 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's novel pure demand operational semantics and its application to program analysis. We start with basic operational semantics to grasp how program execution is formally described, then explore how operational semantics can be simplified to minimal state representations. Next, we cover higher-order functional programming semantics, essential since the paper targets such languages. Finally, we focus on program analysis derived from operational semantics and the role of call stacks in this approach, culminating in an intuitive understanding of the paper's core contributions.

### Operational semantics minimal state *(prerequisite)*
Operational semantics formally describe how programs execute, often using complex state representations. This section focuses on how operational semantics can be simplified to use minimal state information, such as just the call stack and program points, which is central to the paper's approach.

*How the paper uses it:* The paper defines a pure demand operational semantics using only the call stack and source program points as state.

▶ [Lecture "Operational Semantics (Part 5, Big-step semantics)" of "Program Analysis"](https://www.youtube.com/watch?v=51-oAbfxAds) — Michael Pradel · 13:35 · 5y ago

### Operational semantics *(paper-talk search result; attribution unverified)*
Understanding operational semantics basics is crucial for grasping how program execution is modeled formally. This section covers the fundamentals of big-step and small-step semantics, environments, substitutions, and continuations, providing the groundwork for appreciating the paper's novel semantics.

*How the paper uses it:* The paper builds on standard operational semantics and proves equivalence to its pure demand semantics.

▶ [Basic Mechanics of Operational Semantics](https://www.youtube.com/watch?v=exhwykjH_z4) — ACM SIGPLAN · 39:10 · 5y ago

### Higher-order functional programming semantics *(prerequisite)*
Higher-order functional languages allow functions as first-class values and support passing functions as arguments or returning them. This section introduces the semantics of such languages, which is essential since the paper targets higher-order functional programming languages.

*How the paper uses it:* The paper introduces semantics and analysis specifically for higher-order functional languages.

▶ [Higher-Order Functions ft. Functional Programming | Namaste JavaScript Ep. 18](https://www.youtube.com/watch?v=HkWxvB1RJq0) — Akshay Saini · 24:03 · 5y ago

### Call stack based program analysis
The call stack tracks active function calls during program execution and is a key structure in the paper's minimal state semantics and analysis. This section explains how call stacks work and their role in representing program state and enabling analysis.

*How the paper uses it:* The pure demand semantics and analysis rely on the call stack and program points as the complete state representation.

▶ [Space Complexity of Recursive Algorithms (The Call Stack)](https://www.youtube.com/watch?v=2w3rCXdDGIs) — Neso Academy · 13:55 · 2y ago

## Already in your library

- [Lecture "Operational Semantics (Part 1, Preliminaries)" of "Program Analysis"](https://www.youtube.com/watch?v=jsBHd3-04oA) — also for: Towards Formal Verification of Hybrid Synchronous Programs with Refinement Types (Jean-Baptiste Jeannin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the pure demand operational semantics and its program analysis applications introduced by Smith and Zhang (2024). Starting with a minimal interpreter reproducing the core semantics, you then implement the paper's novel program analysis with stack stitching heuristics, and finally extend the approach to address a stated limitation or future direction, showcasing both comprehension and research potential.

### Beginner — Pure Demand Semantics Interpreter
*Effort: a weekend, ~8 hours*

You build a small interpreter for a simple higher-order functional language that implements the pure demand operational semantics using only the call stack and source program points as state. The interpreter will evaluate small example programs by looking up variable values on demand by tracing the call stack, without using environments or substitutions.

**Why it shows you understood the paper:** This project demonstrates you grasp the core idea of representing program state minimally via call stacks and lexical points, reproducing the paper's novel semantics in a concrete implementation.

**Grounded in:** Definition of a novel pure demand operational semantics that propagates no variable bindings forward

**Tech stack:** Python 3.11

**Data:** Use small hand-crafted functional programs (e.g., simple recursive functions) as test inputs; no external dataset needed.

**Build it:**

1. Define a simple syntax for a higher-order functional language with lambda abstractions, applications, and variables.
2. Implement the call stack data structure to represent active function calls with source program points.
3. Implement the pure demand lookup mechanism that retrieves variable values by tracing back through the call stack.
4. Write an interpreter that evaluates expressions using only the call stack and source points, without environments or substitutions.
5. Test the interpreter on small example programs to verify correct evaluation results.

**Ships as:** A GitHub repo with a Python interpreter implementing pure demand semantics, example programs, and a README explaining the semantics and usage.

**Stretch goal:** Add visualization of call stacks and variable lookups during evaluation to illustrate the semantics dynamically.

### Intermediate — Program Analysis with Stack Stitching
*Effort: 2 weekends, ~20 hours*

You implement the paper's program analysis derived from the pure demand semantics by finitizing the call stack to a fixed length k and applying the stack stitching heuristic to approximate longer stacks. You then run the analysis on small functional programs and compare inferred properties (e.g., constants, intervals) against a simple baseline analysis that uses standard environment-based semantics.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into a static analysis tool, understand the stack stitching heuristic, and evaluate its precision and soundness compared to a baseline.

**Grounded in:** Definition of a program analysis directly from the pure demand semantics that infers general value abstractions including recurrences; Introduction of a stack-stitching technique for call stack finitization in program analysis

**Tech stack:** Python 3.11

**Data:** Use small hand-crafted functional programs with recursion and higher-order functions; no external dataset needed.

**Build it:**

1. Extend the pure demand interpreter to finitely represent call stacks truncated to length k.
2. Implement the stack stitching heuristic to approximate longer call stacks by stitching overlapping k-length fragments.
3. Define abstract domains for values (e.g., constants, intervals, recurrence relations) as per the paper's analysis.
4. Implement the all-paths proof system to analyze nondeterministic execution paths and prune cycles using stubbing.
5. Run the analysis on example programs and compare inferred properties to a baseline environment-based analysis.
6. Document the implementation, evaluation results, and insights in a README.

**Ships as:** A GitHub repo with a static analysis tool implementing the paper's method, example analyses, comparison results, and documentation.

**Stretch goal:** Integrate a simple CHC (Constrained Horn Clause) solver or interface to verify soundness properties of the analysis.

### Advanced — Extending Pure Demand Semantics to Small-Step Analysis
*Effort: 3+ weeks*

You develop an extension of the pure demand operational semantics and its program analysis from the paper's big-step form to a small-step operational semantics. This involves defining a minimal-state small-step semantics, adapting the stack stitching heuristic, and implementing a corresponding program analysis. You evaluate the approach on example programs and discuss improvements or trade-offs.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper, demonstrating deep comprehension and the ability to innovate beyond the original work, potentially opening new research avenues.

**Grounded in:** Extending the semantics and analysis to small-step operational semantics (future direction)

**Tech stack:** Python 3.11

**Data:** Use small hand-crafted functional programs with recursion and higher-order functions; no external dataset needed.

**Build it:**

1. Study the paper's big-step pure demand semantics and understand its limitations regarding divergence and error bubbling.
2. Define a small-step operational semantics using minimal state (call stack and source points) inspired by the paper's approach.
3. Adapt the stack stitching heuristic for finitizing call stacks in the small-step setting.
4. Implement a program analysis based on the small-step semantics that infers value abstractions and handles nondeterminism.
5. Evaluate the analysis on example programs and compare with the big-step analysis results.
6. Write detailed documentation explaining the extension, implementation challenges, and evaluation.

**Ships as:** A GitHub repo with an implementation of small-step pure demand semantics and analysis, example runs, and a comprehensive README discussing the extension and evaluation.

**Stretch goal:** Explore formalizing the soundness proof of the small-step analysis or integrating garbage collection for call stacks to improve space efficiency.
