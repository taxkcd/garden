---
title: "116 · Optimal Pseudorandom Generators for Low-Degree Polynomials Over Moderately Large Fields — Zeyu Guo"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zeyu-guo"
source_hash: "c38904cc8508b97ac552694cc17445acac9ca511266818bedfdb4b2ce582489d"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algebraic Geometry for Computer Science
**The paper assumes:** algebraic geometry over finite fields, polynomial factorization theory, irreducibility and indecomposability of polynomials, algebraic methods in theoretical computer science
**Already in this field?** Skip this entirely if you already have a solid undergraduate or beginning graduate understanding of algebraic geometry concepts applied to polynomials over finite fields and their factorization.

This background focuses on algebraic geometry concepts essential for understanding the construction and analysis of pseudorandom generators in the paper, including polynomial factorization, irreducibility, and indecomposability over finite fields. The rigorous course option offers a comprehensive university-level introduction to algebraic geometry, while the fast track provides a concise, computationally oriented series that covers key ideas more quickly. Choose the course for deep foundational knowledge or the fast track for a focused, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Algebraic Geometry_Prof. Arijit Dey](https://www.youtube.com/playlist?list=PLyqSpQzTE6M9zTmxVqW0ksQS_0ina-kxv) — NPTEL-NOC IITM · 77 videos · 25.6h across the first 60 episodes

**Watch only this:** Episodes 1 through 20 (Introduction To Algebraic Geometry - Course Introduction through Tutorial 3: Some Applications of Dimension Theory), about 8.5 hours — these cover foundational algebraic geometry concepts including commutative algebra, affine algebraic sets, irreducibility, and dimension theory essential for understanding the paper's techniques.

*Why it unblocks this paper:* This NPTEL course by Prof. Arijit Dey covers algebraic geometry topics such as affine algebraic sets, irreducibility, Zariski topology, and projective varieties, which are directly relevant to the paper's use of algebraic geometry tools in pseudorandom generator construction and polynomial factorization.

*If you want all of it:* First 60 episodes, about 25.6 hours — for a thorough grounding in algebraic geometry relevant to theoretical computer science.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Algebraic Geometry](https://www.youtube.com/playlist?list=PL5ErEZ81Tyqc1RixHj65XA32ejrS2eEFK) — Emre Sertöz · 48 videos · 13.9h across 48 episodes

**Watch only this:** Lectures 1.1 through 4.2 (Introduction through Projective Closure), about 1.5 hours — these cover the basics of algebraic geometry, affine and projective spaces, and computational tools relevant to polynomial factorization and irreducibility.

*Why it unblocks this paper:* This Computational Algebraic Geometry series by Emre Sertöz offers concise, clear lectures focused on computational aspects of algebraic geometry, including affine and projective spaces, polynomial ideals, and factorization techniques, providing a practical and intuition-driven introduction suitable for quickly grasping the algebraic tools used in the paper.

*If you want all of it:* All 48 episodes, about 13.9 hours — for a more complete computational perspective on algebraic geometry.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the core ideas of the paper on pseudorandom generators (PRGs) for low-degree polynomials over finite fields. The beginner project focuses on implementing and visualizing the concept of fooling low-degree polynomials with simple PRGs over small fields. The intermediate project involves reimplementing the paper's core PRG construction method and comparing it against a baseline on synthetic polynomial data. The advanced project tackles one of the paper's open problems by exploring reductions in field size requirements or extending PRGs to sparse polynomials, demonstrating deeper engagement with the paper's limitations and future directions.

### Beginner — Visualizing PRG Fooling on Low-Degree Polynomials Over Small Finite Fields
*Effort: a weekend, ~8 hours*

You build a small interactive notebook or script that generates random low-degree polynomials over a small finite field (e.g., F_7) and constructs a simple pseudorandom generator with a short seed. You then evaluate and visualize how the PRG output fools these polynomials by comparing polynomial evaluations on truly random inputs versus PRG outputs.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental concept of fooling polynomials with PRGs and the role of seed length and field size, which are central to the paper's contributions.

**Grounded in:** Theorem 1.1: Existence of explicit PRGs fooling n-variate degree-d polynomials over Fq with seed length O(d log n + log q).

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic low-degree polynomials generated in code over small finite fields (e.g., F_7).

**Build it:**

1. Implement finite field arithmetic for a small prime field (e.g., F_7).
2. Generate random low-degree multivariate polynomials over this field.
3. Implement a simple PRG construction (e.g., a small-bias generator or a naive seed expansion).
4. Evaluate polynomials on truly random inputs and on PRG outputs.
5. Visualize and compare the distributions of polynomial evaluations to show the PRG fools the polynomial.
6. Write a README explaining the connection to the paper's PRG seed length and field size concepts.

**Ships as:** A Jupyter notebook or Python script with visualizations showing polynomial evaluation distributions on random vs PRG inputs, plus a README linking the experiment to the paper's PRG seed length and fooling guarantees.

**Stretch goal:** Add an interactive widget to vary polynomial degree, number of variables, or seed length to observe effects on fooling quality.

### Intermediate — Reimplementing the Paper's PRG Construction for Low-Degree Polynomials
*Effort: 2 weekends, ~20 hours*

You reimplement the core PRG construction from the paper based on the description of restricting polynomials to planes and using hitting set generators. You generate synthetic low-degree polynomials over a moderately large finite field and evaluate the PRG's fooling error compared to a baseline naive PRG.

**Why it shows you understood the paper:** This project shows you can translate the paper's algebraic and combinatorial techniques into code, reproducing the main PRG construction and empirically verifying its effectiveness and seed length benefits.

**Grounded in:** Theorem 1.1 and Section 1.2: PRG construction using plane restrictions and hitting set generators with seed length O(d log n + log q).

**Tech stack:** Python 3.11, NumPy, SymPy (for polynomial manipulation), Jupyter Notebook

**Data:** Synthetic n-variate degree-d polynomials generated programmatically over finite fields of size q ≥ C(d^{2d}/ε + d^4/ε^2), simulated with moderate d and q values.

**Build it:**

1. Implement polynomial representation and evaluation over finite fields using SymPy and NumPy.
2. Implement the plane restriction technique to reduce polynomial dimension as described in the paper.
3. Implement hitting set generators for low-degree polynomials based on the paper's degree bounds.
4. Construct the PRG by combining plane restrictions and hitting set generators.
5. Generate synthetic test polynomials and measure the PRG's fooling error compared to truly random inputs and a naive baseline PRG.
6. Document the implementation details, experimental setup, and results in a README.

**Ships as:** A code repository with scripts/notebooks implementing the PRG construction, experimental results comparing fooling error and seed length against a baseline, and a detailed README linking the work to the paper's main theorem.

**Stretch goal:** Extend the implementation to handle polynomials of prime degree and verify improved field size requirements as per Theorem 1.2.

### Advanced — Exploring Field Size Reduction Techniques for PRGs on Low-Degree Polynomials
*Effort: 3-4 weeks*

You develop an experimental framework to investigate algebraic or combinatorial methods that could reduce the required field size from exponential to polynomial in d, inspired by the paper's open problem. You implement variants of the PRG construction incorporating alternative factorization or indecomposability heuristics and evaluate their impact on seed length and fooling error.

**Why it shows you understood the paper:** This project engages deeply with the paper's limitations and future directions, demonstrating your ability to extend state-of-the-art methods and contribute novel insights to the field.

**Grounded in:** Limitations and future directions: reducing field size to polynomial in d while maintaining seed length; improving combinatorial arguments to reduce union bound overheads.

**Tech stack:** Python 3.11, SymPy, NumPy, Jupyter Notebook, Git for version control

**Data:** Synthetic polynomials over finite fields with varying sizes; no external datasets required.

**Build it:**

1. Review the paper's analysis on field size requirements and factorization techniques.
2. Implement baseline PRG construction as per the intermediate project.
3. Research alternative polynomial factorization heuristics or indecomposability criteria that might relax field size constraints.
4. Incorporate these heuristics into the PRG construction and implement experimental variants.
5. Evaluate the fooling error and seed length trade-offs across different field sizes and polynomial degrees.
6. Document findings, challenges, and potential avenues for further research in a comprehensive report.

**Ships as:** A research-style repository containing code for experimental PRG variants, evaluation scripts, and a detailed report discussing attempts to reduce field size requirements and their outcomes, linked explicitly to the paper's open problems.

**Stretch goal:** Attempt to extend the PRG construction to sparse polynomials or other algebraic circuit classes as suggested in the paper's future directions.
