---
title: "116 · Optimal Pseudorandom Generators for Low-Degree Polynomials Over Moderately Large Fields — Zeyu Guo"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zeyu-guo"
source_hash: "8a1caebe6ac2b2cd7b212a24900dac24ddb79898fa53ac07e6113d06b81028c0"
sequence: 116
generator: "outreach-garden: managed"
---

# 116 · Optimal Pseudorandom Generators for Low-Degree Polynomials Over Moderately Large Fields

## At a glance

- **Professor:** Zeyu Guo
- **Institution:** Ohio State University
- **Paper:** [Optimal Pseudorandom Generators for Low-Degree Polynomials Over Moderately Large Fields](https://arxiv.org/pdf/2402.11915)
- **Authors:** Ashish Dwivedi, Zeyu Guo, Ben Lee Volk
- **Year:** 2024

## Paper overview

This paper constructs explicit pseudorandom generators (PRGs) that fool low-degree multivariate polynomials over finite fields, achieving near-optimal seed length with improved field size requirements. The authors improve on previous constructions by reducing the seed length to O(d log n + log q) for polynomials of degree at most d over fields of size exponential in d, independent of the number of variables n. They use algebraic and combinatorial techniques, including results from polynomial factorization and indecomposability, to achieve these improvements.

### Why it matters

**Research problem:** Constructing efficient pseudorandom generators that fool n-variate polynomials of degree at most d over finite fields, with minimal seed length and field size requirements.

**Why it matters:** Pseudorandom generators reduce the need for true randomness in algorithms, which is costly or limited. Fooling low-degree polynomials is a fundamental problem in complexity theory with applications in derandomization and circuit complexity. Improving PRGs for such polynomials can impact the construction of PRGs for small-depth circuits and advance understanding of randomness in computation.

**Key contributions:**

- Explicit PRG construction with seed length O(d log n + log q) for degree-d polynomials over fields of size exponential in d but independent of n.
- Improved field size requirement for polynomials of prime degree to O(d^4 / ε^2), avoiding exponential dependence on d.
- Use of Lecerf’s factorization techniques to reduce degree bounds from O(d^4) to O(d) in hitting set generators.
- Application of indecomposability properties to ensure equidistribution and irreducibility in the PRG analysis.
- Derandomization of the preprocessing step (Hypothesis (H)) using hitting set generators.

## About the professor

**Zeyu Guo** — Assistant Professor, Department of Computer Science and Engineering, Ohio State University.

Research interests: pseudorandomness, coding theory, algebraic complexity theory, and applications of algebraic methods in theoretical computer science

### Research links

- [Faculty/profile page](https://zeyuguo.bitbucket.io)
- [Resolved homepage](https://zeyuguo.bitbucket.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on optimal pseudorandom generators for low-degree polynomials over moderately large fields, start by building a foundation in polynomial factorization algorithms and algebraic derandomization techniques, which are key algebraic tools used in the construction. Next, study hitting set generators and the concept of indecomposable polynomials, both critical for the PRG analysis. Finally, focus on the core topic of pseudorandom generators for low-degree polynomials, including the authors' own talks and related advanced lectures, to grasp the specific advances and methods introduced in the paper.

### Polynomial factorization algorithms *(prerequisite)*
Understanding polynomial factorization algorithms over finite fields is essential because the paper leverages Lecerf’s improved factorization bounds to reduce degree parameters in hitting set generators. These algorithms provide the algebraic foundation for analyzing polynomial structure and irreducibility, which are central to the PRG construction.

*How the paper uses it:* The paper uses Lecerf’s factorization techniques to reduce degree bounds in hitting set generators.

▶ [Root-finding and polynomial factorization over finite fields](https://www.youtube.com/watch?v=HIiotVxxi8c) — Andrew Sutherland · 1:01:37 · 5 years ago

### Algebraic derandomization techniques *(prerequisite)*
Algebraic derandomization techniques form the theoretical framework for constructing explicit pseudorandom generators and derandomizing preprocessing steps. These methods underpin the paper's approach to reducing randomness and achieving explicit constructions with optimal seed length.

*How the paper uses it:* The paper derandomizes preprocessing steps and constructs explicit PRGs using algebraic derandomization frameworks.

▶ [Non-Black-Box Derandomization - Roei Tell](https://www.youtube.com/watch?v=50pWmn4ZcFw) — Institute for Advanced Study · 1:54:17 · 4 years ago

### Hitting set generators for polynomials *(prerequisite)*
Hitting set generators are used to derandomize polynomial identity testing and are a key tool in the paper’s approach to fooling low-degree polynomials by restricting them to planes. Understanding these generators is crucial for grasping how the authors reduce degree bounds and improve seed length.

*How the paper uses it:* The authors use hitting set generators to restrict polynomials and derandomize preprocessing in their PRG construction.

▶ [On Low-Degree Polynomials - Madhu Sudan](https://www.youtube.com/watch?v=V_SsWbs2kNw) — Institute for Advanced Study · 42:37 · 9 years ago

### Pseudorandom generators for polynomials
This is the core concept of the paper, focusing on explicit constructions of pseudorandom generators that fool low-degree polynomials over finite fields. The selected talks provide advanced insights into the state-of-the-art methods and theoretical underpinnings relevant to the paper’s contributions.

*How the paper uses it:* The paper constructs explicit PRGs with near-optimal seed length for low-degree polynomials over large fields.

▶ [Pseudorandom Generators I](https://www.youtube.com/watch?v=WT_vXeuk8yk) — Simons Institute for the Theory of Computing · 1:04:17 · Streamed 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces key algebraic and pseudorandomness concepts needed to understand the paper's construction of optimal pseudorandom generators (PRGs) for low-degree polynomials over finite fields. We start with foundational polynomial and finite field basics, then cover polynomial factorization algorithms and indecomposable polynomials, which are crucial algebraic tools used in the paper. Finally, we explore hitting set generators and pseudorandom generators for polynomials to grasp the core derandomization techniques employed.

### Polynomial factorization algorithms *(prerequisite)*
Polynomial factorization is the process of breaking down a polynomial into irreducible factors over a given field. Understanding algorithms for factoring polynomials over finite fields is essential because they reveal structural properties of polynomials that the paper exploits to reduce degree bounds in pseudorandom generator constructions.

*How the paper uses it:* The paper uses Lecerf’s polynomial factorization techniques to improve hitting set degree bounds from O(d^4) to O(d).

▶ [Root-finding and polynomial factorization over finite fields](https://www.youtube.com/watch?v=HIiotVxxi8c) — Andrew Sutherland · 1:01:37 · 5 years ago

### Hitting set generators for polynomials *(prerequisite)*
Hitting set generators produce small sets of inputs that guarantee detection of nonzero low-degree polynomials. They are used to derandomize polynomial identity testing and form a key step in constructing pseudorandom generators that fool polynomials by restricting them to lower-dimensional subspaces.

*How the paper uses it:* The authors use hitting set generators to derandomize preprocessing and restrict polynomials to planes, following Bogdanov’s paradigm.

▶ [On Low-Degree Polynomials - Madhu Sudan](https://www.youtube.com/watch?v=V_SsWbs2kNw) — Institute for Advanced Study · 42:37 · 9 years ago

### Pseudorandom generators for polynomials
Pseudorandom generators (PRGs) produce sequences that appear random to specific classes of tests, such as low-degree polynomials. Understanding how PRGs fool polynomials is central to grasping the paper’s main contribution of constructing explicit PRGs with near-optimal seed length and improved field size requirements.

*How the paper uses it:* The paper constructs explicit PRGs that fool n-variate degree-d polynomials over finite fields with optimal seed length.

▶ [Pseudorandom Generators I](https://www.youtube.com/watch?v=WT_vXeuk8yk) — Simons Institute for the Theory of Computing · 1:04:17 · Streamed 9 years ago
