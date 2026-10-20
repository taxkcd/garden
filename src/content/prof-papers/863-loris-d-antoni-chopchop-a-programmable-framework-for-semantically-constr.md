---
title: "863 · ChopChop: A Programmable Framework for Semantically Constraining the Output of Language Models — Loris D'Antoni"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-loris-d-antoni"
source_hash: "18bef4021a1b27610838dce0f1901a25553ae81a92b1b95ed8662c1ba4d132b3"
sequence: 863
generator: "outreach-garden: managed"
---

# 863 · ChopChop: A Programmable Framework for Semantically Constraining the Output of Language Models

## At a glance

- **Professor:** Loris D'Antoni
- **Institution:** Univ. of California - San Diego
- **Paper:** [ChopChop: A Programmable Framework for Semantically Constraining the Output of Language Models](https://arxiv.org/pdf/2509.00360)
- **Authors:** Shaan Nagy, Timothy Zhou, Nadia Polikarpova, Loris D’Antoni
- **Year:** 2026

## Paper overview

ChopChop is a framework that allows language models to generate code that is guaranteed to satisfy semantic constraints, such as type safety or program equivalence. It works by representing the space of possible program completions as infinite but finitely representable structures called regular codata, and pruning this space using user-defined semantic constraints during code generation. This ensures that the generated code is both syntactically valid and semantically correct according to the specified constraints.

### Why it matters

**Research problem:** Language models can generate code but often produce outputs that violate semantic properties like type safety or program invariants. Existing constrained decoding methods either only enforce syntactic constraints or rely on brittle encodings of semantic properties over token sequences rather than program structure, limiting expressivity and programmability.

**Why it matters:** Ensuring that generated code satisfies semantic constraints is crucial for building trustworthy software. Without guarantees, language models may produce incorrect or unsafe code, limiting their practical utility in software development.

**Key contributions:**

- The first programmable framework for semantic constrained decoding that operates over ASTs rather than token strings.
- A formal connection between semantic constrained decoding and realizability checking in program synthesis.
- A novel constrained decoding algorithm based on corecursion and coinductive representations of program spaces.
- An implementation of ChopChop as an embedded DSL in Python supporting symbolic manipulation of coinductive structures.
- Demonstrations of ChopChop in two domains: equivalence-guided decoding and type-safe decoding in TypeScript.

## About the professor

**Loris D'Antoni** — Professor, Computer Science and Engineering, Univ. of California - San Diego.

Research interests: Techniques for making large language models generate code that is guaranteed to satisfy formal specifications.

### Research links

- [Faculty/profile page](https://cseweb.ucsd.edu/~ldantoni)
- [Lab website](https://cseweb.ucsd.edu/groups/progsys/)
- [Google Scholar](http://scholar.google.com/citations?user=ao8EeJ8AAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/85/770.html)
- [GitHub](https://github.com/lorisdanto/)
- [LinkedIn](http://www.linkedin.com/pub/loris-d-antoni/17/b5a/5a4)
- [Social profile](https://twitter.com/lorisdanto)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Coinductive Data Structures
**The paper assumes:** coinductive data structures, corecursion, coinductive reasoning, infinite data representations
**Already in this field?** Skip this entirely if you already understand coinductive types, corecursion, and their use in modeling infinite or cyclic data structures in computer science.

This background focuses on coinductive data structures and corecursion, which are fundamental to understanding how ChopChop represents infinite program spaces as finitely representable cyclic structures and performs semantic pruning. The rigorous course option provides a solid foundation in data structures and algorithms with detailed explanations, while the fast track offers a concise, focused introduction to data structures that covers essential concepts quickly. Choose the course for depth and formal understanding, or the fast track for a quicker, practical overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CS Paper - I : Chapter 2 : Data Structures (17 marks)](https://www.youtube.com/playlist?list=PLAdLPf98sLny8Hu0ivusTerAB-G-XwiPf) — Computer Science Academy · 21 videos · 6.2h across 21 episodes

**Watch only this:** Episodes 1, 14-19, about 1.5 hours — focusing on introduction, linked lists, binary trees, and stack/queue to cover core data structures and recursive concepts relevant to coinductive data.

*Why it unblocks this paper:* This Computer Science Academy playlist offers a concise and clear introduction to data structures with short episodes that quickly build intuition about trees, linked lists, and recursion, which are key to understanding regular codata and corecursion.

*If you want all of it:* 6.2 hours across 21 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand ChopChop, start with foundational concepts that underpin its theoretical framework: corecursion and coinduction, realizability checking in program synthesis, parser derivatives for incremental parsing, and the representation of infinite program spaces as regular codata. These prerequisites provide the mathematical and algorithmic background necessary to grasp ChopChop's novel approach. Finally, focus on the core concept of ChopChop's programmable semantic constrained decoding framework through the authors' own talks, which offer direct insight into the design, implementation, and evaluation of the system.

### Corecursion and coinduction in program analysis *(prerequisite)*
Corecursion and coinduction are mathematical techniques for reasoning about infinite, cyclic, or unbounded structures, which are central to ChopChop's representation and pruning of infinite program spaces. Understanding these concepts is essential to appreciate how ChopChop manipulates infinite AST spaces symbolically and performs semantic pruning via corecursive functions.

*How the paper uses it:* ChopChop uses corecursion and coinduction to represent and prune infinite program spaces as regular codata.

▶ [Logic, Co-induction and Infinite Computation](https://www.youtube.com/watch?v=nOqO5OlC920) — Microsoft Research · 8y ago

### Realizability checking in program synthesis *(prerequisite)*
Realizability checking is a formal method to determine whether there exists a program satisfying a given specification. This theoretical foundation connects ChopChop's semantic constrained decoding to program synthesis correctness, framing the pruning of program spaces as a realizability problem.

*How the paper uses it:* ChopChop reduces semantic constrained decoding to realizability checking over prefix spaces of ASTs.

▶ ["Quantitative Assume Guarantee Synthesis" Jan Oliver Ringert | CAV 2017](https://www.youtube.com/watch?v=UxLux2THJms) — Conference on Computer-Aided Verification · 9y ago

### Parser derivatives for incremental parsing *(prerequisite)*
Parser derivatives provide an efficient technique for incremental parsing, allowing ChopChop to compute the space of possible program completions from a token prefix. This method is crucial for representing prefix program spaces as regular codata.

*How the paper uses it:* ChopChop uses parser derivatives to compute the space of AST completions for a given token prefix.

▶ [Parsing with Derivatives](https://www.youtube.com/watch?v=ZzsK8Am6dKU) — Stanford · 15y ago

### ChopChop framework talk
The authors' own talks provide the most direct and detailed exposition of ChopChop's design, implementation, and evaluation. These talks cover the programmable semantic constrained decoding framework, its theoretical foundations, and practical applications, offering invaluable insights beyond the paper text.

*How the paper uses it:* These talks are given by the paper's authors and focus specifically on ChopChop.

▶ [https://www.youtube.com › watch?v=ja4Kqe56o2w](https://www.youtube.com/watch?v=ja4Kqe56o2w) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand ChopChop, start by learning about parser derivatives, which explain how ChopChop incrementally computes program completions. Then build intuition on corecursion and coinduction, the mathematical tools ChopChop uses to represent and prune infinite program spaces. Next, grasp realizability checking in program synthesis, which connects semantic constraints to program correctness. Finally, explore semantic constrained decoding, the core method ChopChop uses to enforce semantic properties during code generation.

### Parser derivatives for incremental parsing *(prerequisite)*
Parser derivatives provide a way to efficiently parse and represent all possible continuations of a partial input, enabling incremental parsing. This technique helps ChopChop compute the space of abstract syntax trees that can complete a given token prefix.

*How the paper uses it:* ChopChop uses parser derivatives to compute the space of AST completions for a given prefix.

▶ [Parsing with Derivatives](https://www.youtube.com/watch?v=ZzsK8Am6dKU) — Stanford · 15y ago

### Corecursion and coinduction in program analysis *(prerequisite)*
Corecursion and coinduction are mathematical methods for defining and reasoning about infinite, cyclic, or self-referential structures. ChopChop leverages these to finitely represent infinite program spaces and prune them based on semantic constraints.

*How the paper uses it:* ChopChop represents program spaces as regular codata and applies corecursive semantic pruners to them.

▶ [Logic, Co-induction and Infinite Computation](https://www.youtube.com/watch?v=nOqO5OlC920) — Microsoft Research · 8y ago

### Realizability checking in program synthesis *(prerequisite)*
Realizability checking determines whether there exists a program that satisfies a given specification within a search space. This concept underpins ChopChop's reduction of semantic constrained decoding to a realizability problem over program prefix spaces.

*How the paper uses it:* ChopChop reduces semantic constrained decoding to checking realizability over prefix spaces of ASTs.

▶ ["Quantitative Assume Guarantee Synthesis" Jan Oliver Ringert | CAV 2017](https://www.youtube.com/watch?v=UxLux2THJms) — Conference on Computer-Aided Verification · 9y ago

### Semantic constrained decoding
Semantic constrained decoding is a method to guide language model generation so that outputs satisfy semantic properties, not just syntax. ChopChop's core innovation is applying semantic constraints directly on program structures during decoding to ensure correctness.

*How the paper uses it:* ChopChop applies semantic pruners during decoding to enforce semantic constraints on generated code.

▶ [L-43: Constrained decoding and structured output – Constrained Decoding #LLM #Agents #JSON](https://www.youtube.com/watch?v=btMNL18Q4d8) — Mehdi Hosseini Moghadam · 3w ago

## Already in your library

- [Introduction to Program Synthesis - Lecture 1](https://www.youtube.com/watch?v=8dZ_XDXCoOk) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Introduction to Program Synthesis - Course Overview](https://www.youtube.com/watch?v=wvlZDdAg5PI) — also for: Linear temporal constraints for sketch-based synthesizers (Armando Solar-Lezama)
- [Correctness-Guaranteed Code Generation via Constrained Decoding](https://www.youtube.com/watch?v=5_U6-659GwE) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of ChopChop's semantic constrained decoding framework. The beginner project focuses on implementing a simple semantic pruner over ASTs to enforce a basic semantic property, using your existing Python and TypeScript skills. The intermediate project involves reimplementing the core ChopChop method of semantic pruning over program spaces represented as regular codata, comparing semantic pruning against syntax-only constraints on a small TypeScript subset. The advanced project extends ChopChop by exploring semantic constrained decoding for dynamically typed languages, addressing one of the paper's stated future directions and limitations.

### Beginner — Simple Semantic Pruner for Arithmetic Expressions
*Effort: a weekend (~6 hours)*

You build a small Python tool that parses arithmetic expressions into ASTs and implements a semantic pruner that enforces a simple semantic constraint: all generated expressions must evaluate to a non-negative integer. You will use parser combinators or a simple recursive descent parser to generate the AST space and prune invalid expressions.

**Why it shows you understood the paper:** This project demonstrates your grasp of semantic pruning over ASTs, core to ChopChop's approach, by implementing a user-defined semantic constraint that prunes program spaces beyond syntax.

**Grounded in:** ChopChop applies semantic pruners as corecursive functions to prune program spaces.

**Tech stack:** Python 3.11

**Data:** No external data needed; you generate and prune arithmetic expression ASTs programmatically.

**Build it:**

1. Implement a parser that converts arithmetic expressions with variables and constants into ASTs.
2. Define a semantic pruner function that evaluates ASTs and prunes those that evaluate to negative values.
3. Generate a small space of possible expressions (e.g., all expressions up to a fixed depth) and apply the semantic pruner to prune invalid ASTs.
4. Demonstrate the pruning effect by printing or visualizing the remaining valid ASTs.
5. Write a README explaining the semantic pruning concept and how your implementation relates to ChopChop.

**Ships as:** A GitHub repo with Python code implementing parsing, semantic pruning, and example runs showing pruning of invalid expressions, plus a README linking the project to ChopChop's semantic pruning concept.

**Stretch goal:** Add support for more complex semantic constraints, such as enforcing that expressions only use certain operators or variables.

### Intermediate — Reimplementation of ChopChop's Semantic Pruning on TypeScript Subset
*Effort: 2 weekends (~20 hours)*

You reimplement the core ChopChop method by representing the space of possible TypeScript program completions as finite representations of infinite AST spaces (regular codata). You implement parser derivatives to incrementally parse prefixes and apply semantic pruners enforcing type safety on a small subset of TypeScript. You compare semantic pruning against syntax-only constrained decoding and report success rates in generating well-typed programs.

**Why it shows you understood the paper:** This project shows you understand ChopChop's core technical contributions: representing program spaces as regular codata, applying semantic pruners, and the connection to realizability checking, demonstrated concretely on a real language subset.

**Grounded in:** The first programmable framework for semantic constrained decoding that operates over ASTs rather than token strings; Type-safe decoding uses a corecursive type checker with bounded types to ensure regularity.

**Tech stack:** Python 3.11, TypeScript 5.x, Node.js 20.x

**Data:** No external dataset; you use a small hand-crafted TypeScript grammar subset and generate program prefixes programmatically.

**Build it:**

1. Define a small subset grammar of TypeScript expressions and statements suitable for parsing and type checking.
2. Implement parser derivatives in Python or TypeScript to represent prefix program spaces as regular codata.
3. Implement a corecursive semantic pruner that performs bounded-depth type checking to prune ill-typed program completions.
4. Implement a baseline syntax-only constrained decoder that prunes only syntactically invalid completions.
5. Run experiments generating program completions from prefixes using both semantic and syntax-only pruning, measuring the fraction of well-typed programs generated.
6. Write a detailed README explaining your implementation, the comparison, and how it relates to ChopChop's core method.

**Ships as:** A GitHub repo with code implementing parser derivatives, semantic pruning with type checking, baseline syntax pruning, and experimental results comparing success rates, plus documentation linking to ChopChop's contributions.

**Stretch goal:** Integrate a simple e-graph based equivalence checker to prune semantically equivalent programs as in ChopChop's equivalence-guided decoding.

### Advanced — Extending ChopChop for Semantic Constraints in Dynamically Typed Languages
*Effort: 3+ weeks*

You develop an extension of ChopChop's semantic constrained decoding framework to handle semantic constraints in a dynamically typed language (e.g., a subset of Python or JavaScript). You design semantic pruners that work with partial or absent static type information, possibly using runtime checks or symbolic execution approximations. You evaluate the approach on generating code snippets that satisfy user-defined semantic properties despite dynamic typing.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding by adapting ChopChop's framework beyond statically typed languages and addressing challenges of partial semantic information.

**Grounded in:** Future directions: Extending ChopChop to support more complex semantic constraints and richer programming languages; limitation: handling semantic constraints where type information is partial or unavailable.

**Tech stack:** Python 3.11, TypeScript 5.x, Node.js 20.x

**Data:** No external dataset; you use small code snippet sets and user-defined semantic constraints for dynamically typed languages.

**Build it:**

1. Select a dynamically typed language subset (e.g., Python expressions or JavaScript snippets) and define a grammar.
2. Implement or adapt parser derivatives to represent program prefix spaces as regular codata for this language subset.
3. Design semantic pruners that approximate semantic constraints without relying on static types, e.g., via symbolic execution or runtime checks.
4. Integrate these semantic pruners into the constrained decoding framework to prune invalid completions.
5. Evaluate the approach by generating code snippets that satisfy semantic constraints and compare against syntax-only pruning.
6. Document challenges, limitations, and how your approach extends ChopChop's framework.

**Ships as:** A GitHub repo with code implementing the extended ChopChop framework for dynamic languages, semantic pruners, evaluation scripts, and a comprehensive README discussing the extension and its relation to the paper.

**Stretch goal:** Explore automated synthesis of semantic pruners from examples or specifications for dynamically typed languages.
