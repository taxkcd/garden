---
title: "189 · A Lower Bound on the Trace Norm of Boolean Matrices and Its Applications — Kaave Hosseini"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kaave-hosseini"
source_hash: "593ccb213c6685bd20727c59232aab67948f699f137b9a80643818cfe97abee6"
sequence: 189
generator: "outreach-garden: managed"
---

# 189 · A Lower Bound on the Trace Norm of Boolean Matrices and Its Applications

## At a glance

- **Professor:** Kaave Hosseini
- **Institution:** University of Rochester
- **Paper:** [A Lower Bound on the Trace Norm of Boolean Matrices and Its Applications](https://drops.dagstuhl.de/storage/00lipics/lipics-vol325-itcs2025/LIPIcs.ITCS.2025.37/LIPIcs.ITCS.2025.37.pdf)
- **Authors:** Tsun-Ming Cheung, Hamed Hatami, Kaave Hosseini, Aleksandar Nikolov, Toniann Pitassi, Morgan Shirley
- **Year:** 2025

## Paper overview

This paper develops a new method using a variant of Hölder’s inequality to establish strong lower bounds on the trace norm of Boolean matrices. It demonstrates exponential separations between various complexity measures of Boolean functions and communication protocols, resolving open questions in theoretical computer science related to the power of randomness and oracle access in decision trees and communication complexity.

### Why it matters

**Research problem:** The paper addresses the problem of understanding the relationships between different complexity measures of Boolean functions, specifically the randomized parity decision tree depth and the spectral norm (Fourier L1-norm), and the communication complexity with oracle access to the Equality function. It investigates whether these measures are polynomially related and explores separations between randomized and deterministic models in query and communication complexity.

**Why it matters:** Understanding these complexity measures and their relationships is fundamental in theoretical computer science as it informs the power and limitations of randomness in computation and communication. It also impacts areas such as learning theory, cryptography, and additive combinatorics by clarifying how randomness and oracle access affect computational complexity.

**Key contributions:**

- Introduced a simple method based on a variant of Hölder’s inequality to lower-bound the trace norm of Boolean matrices.
- Resolved an open question by showing an exponential separation between randomized parity decision tree depth and spectral norm of Boolean functions.
- Established an exponential separation between logarithms of randomized and deterministic parity decision tree sizes.
- Proved an exponential separation between approximate and exact spectral norms for Boolean functions.
- Demonstrated an exponential separation in communication complexity between deterministic protocols with oracle access to Equality (DEQ) and randomized protocols for XOR functions.

## About the professor

**Kaave Hosseini** — Department of Computer Science, University of Rochester.

Research interests: Theoretical computer science, Additive combinatorics, Pseudorandomness, Discrete Fourier analysis

### Research links

- [Faculty/profile page](https://www.cs.rochester.edu/people/faculty/hosseini_s.kaave/index.html)
- [Identity evidence](https://www.cs.rochester.edu/u/shossei2)
- [Resolved homepage](https://www.cs.rochester.edu/people/faculty/hosseini_s.kaave/index.html#main)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Lower Bound on the Trace Norm of Boolean Matrices and Its Applications," start by building a strong foundation in Fourier analysis of Boolean functions and communication complexity with oracles, as these are fundamental frameworks underpinning the paper's complexity separations. Then, study parity decision tree complexity and combinatorial constructions like Sidon sets, which are key to the explicit function constructions and complexity measure separations. Finally, focus on the paper's core concept by watching the authors' own talk presenting their novel lower bound method using a variant of Hölder’s inequality and its applications.

### Fourier analysis of Boolean functions *(prerequisite)*
Fourier analysis provides the fundamental framework for understanding spectral norms and complexity measures of Boolean functions, which are central to the paper's results. The selected lecture by Ryan O'Donnell from CMU is a rigorous university course lecture that covers the Fourier expansion and basic formulas, giving a solid mathematical foundation necessary for the paper.

*How the paper uses it:* The paper uses Fourier analysis to relate spectral norms of Boolean functions to complexity measures and to analyze combinatorial constructions.

▶ [Analysis of Boolean Functions at CMU - Lecture 1: The Fourier ...](https://www.youtube.com/watch?v=JIruJ8edYYM) — Ryan O'Donnell · 1:11:25

### Communication complexity with oracles *(prerequisite)*
Understanding communication complexity models with oracle access, especially to the Equality function, is crucial for grasping the paper's communication complexity separations. The Simons Institute lectures by Anup Rao provide advanced, research-level insights into lower bounds in communication complexity, aligning well with the paper's context.

*How the paper uses it:* The paper establishes exponential separations in communication complexity involving deterministic protocols with oracle access to Equality (DEQ) and randomized protocols.

▶ [Communication Complexity I](https://www.youtube.com/watch?v=ApuEB6YufdU) — Simons Institute for the Theory of Computing · 59:40 · Streamed 7 years ago

### Parity decision tree complexity *(prerequisite)*
Parity decision tree complexity is a primary complexity measure studied in the paper, which shows exponential separations from spectral norms. The Simons Institute talk on Fourier growth of XOR-fibers of communication protocols discusses parity decision trees in a research-level setting, providing relevant advanced background.

*How the paper uses it:* The paper proves exponential separations between randomized and deterministic parity decision tree sizes and depths.

▶ [Fourier Growth of XOR-Fibers of Communication Protocols](https://www.youtube.com/watch?v=E8Rb6XHH1Eo) — Simons Institute for the Theory of Computing

### Sidon sets and combinatorial constructions *(prerequisite)*
Sidon sets and related combinatorial constructions are used in the paper to build explicit Boolean functions with large spectral norm but small parity decision tree complexity. The lecture by Timothy Gowers on additive combinatorics offers a rigorous introduction to the combinatorial tools relevant to these constructions.

*How the paper uses it:* The paper constructs explicit Boolean functions as indicators of Sidon sets to demonstrate complexity measure separations.

▶ [21. Structure of set addition I: introduction to Freiman's theorem](https://www.youtube.com/watch?v=oLwZFBZylUw) — MIT OpenCourseWare · 6 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk presents their novel method using a variant of Hölder’s inequality to lower-bound the trace norm of Boolean matrices and discusses the resulting complexity separations. This direct source provides the most precise and authoritative insight into the paper's contributions and techniques.

*How the paper uses it:* This talk directly explains the main theorem, key contributions, and applications of the new lower bound method developed in the paper.

▶ [A Lower Bound on the Trace Norm of Boolean Matrices and Its Applications](https://www.youtube.com/watch?v=kaDyenyrXlc) — Tsun Ming Cheung · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's results on Boolean matrices and complexity separations. Starting with Fourier analysis of Boolean functions to grasp spectral norms, it then covers parity decision tree complexity and Sidon sets as key combinatorial tools. Next, it explains the communication complexity model with oracles, followed by the central mathematical tool—Hölder’s inequality variant—culminating in a direct author talk about the paper's novel lower bound method.

### Fourier analysis of Boolean functions *(prerequisite)*
Fourier analysis decomposes Boolean functions into sums of simpler functions, revealing their spectral structure. Understanding this helps interpret the spectral norm, a key complexity measure in the paper.

*How the paper uses it:* The paper uses Fourier analysis to study the spectral norm and its relation to parity decision tree complexity.

▶ [Analysis of Boolean Functions at CMU - Lecture 1: The Fourier ...](https://www.youtube.com/watch?v=JIruJ8edYYM) — Ryan O'Donnell · 1:11:25

### Parity decision tree complexity *(prerequisite)*
Parity decision trees are a model of computation where queries ask about parity of subsets of input bits. This complexity measure is central to the paper's exponential separations.

*How the paper uses it:* The paper establishes exponential separations involving randomized and deterministic parity decision tree sizes.

▶ [Lifting to Parity Decision Trees via Stifling (with applications to ...](https://www.youtube.com/watch?v=PeZVs6WUf-4) — Simons Institute for the Theory of Computing · 1:05:00

### Sidon sets and combinatorial constructions *(prerequisite)*
Sidon sets are special sets with unique sum properties used in additive combinatorics. They provide explicit Boolean functions with large spectral norm but small parity decision tree complexity.

*How the paper uses it:* The paper constructs Boolean functions from Sidon sets to demonstrate complexity separations.

▶ [B_k[g] Sets  |  Part 1  |  Inroduction to Sidon Sets](https://www.youtube.com/watch?v=Z-cTqH8jZGE) — meta4math · 4:20 · 4 years ago

### Communication complexity with oracles *(prerequisite)*
Communication complexity studies how much communication two parties need to compute a function. Oracle access models add queries to special functions like Equality, crucial for the paper's communication complexity results.

*How the paper uses it:* The paper proves exponential separations in communication complexity involving Equality oracles.

▶ [Communication Complexity I](https://www.youtube.com/watch?v=ApuEB6YufdU) — Simons Institute for the Theory of Computing · 59:40 · Streamed 7 years ago

### Hölder’s inequality variant
Hölder’s inequality is a fundamental inequality in analysis relating norms of functions or vectors. The paper uses a novel variant to derive strong lower bounds on the trace norm of Boolean matrices.

*How the paper uses it:* The key technical tool in the paper is a variant of Hölder’s inequality to lower-bound trace norms.

▶ [Holder's Inequality](https://www.youtube.com/watch?v=XgspUqrgOaA) — Mike, the Mathematician · 9:00

### Paper authors talk *(the paper's own talk)*
A direct presentation by the authors explaining their new lower bound method and the complexity separations they achieved, providing insight into the paper’s main contributions.

*How the paper uses it:* This talk directly covers the paper’s novel method and results.

▶ [A Lower Bound on the Trace Norm of Boolean Matrices and Its Applications](https://www.youtube.com/watch?v=kaDyenyrXlc) — Tsun Ming Cheung · 1 year ago

## Already in your library

- [What is...additive combinatorics?](https://www.youtube.com/watch?v=2t11L2iT6TE) — also for: Incidence Theorems and Their Applications (Zeev Dvir)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core contributions on lower bounds for the trace norm of Boolean matrices and complexity separations. The beginner project reproduces a simple example of the trace norm lower bound using Hölder’s inequality on a small Boolean matrix. The intermediate project implements the paper's core Hölder’s inequality method to compute lower bounds on the trace norm for explicit Boolean functions related to Sidon sets, comparing randomized parity decision tree depth and spectral norm. The advanced project extends the method to explore one of the paper's open questions: investigating stronger separations between randomized and deterministic parity decision tree sizes, potentially by experimenting with new combinatorial constructions or parameter choices.

### Beginner — Trace Norm Lower Bound on a Small Boolean Matrix
*Effort: a weekend, ~6 hours*

You build a small Python script that computes the trace norm (nuclear norm) of a given small Boolean matrix and applies the variant of Hölder’s inequality as described in the paper to establish a lower bound. The project includes a simple example matrix (e.g., a 4x4 point-line incidence matrix) and demonstrates the calculation step-by-step.

**Why it shows you understood the paper:** This project shows you understand the paper's key technical tool—using Hölder’s inequality to lower-bound the trace norm—and can apply it concretely to Boolean matrices, a fundamental step in the paper's proofs.

**Grounded in:** Introduced a simple method based on a variant of Hölder’s inequality to lower-bound the trace norm of Boolean matrices.

**Tech stack:** Python 3.11, NumPy, Matplotlib (optional for visualization)

**Data:** A small synthetic Boolean matrix representing a point-line incidence system, constructed manually as per examples in the paper.

**Build it:**

1. Implement a function to compute the singular values and trace norm of a Boolean matrix using NumPy.
2. Implement the variant of Hölder’s inequality as described in the paper to compute a lower bound on the trace norm.
3. Construct a small example Boolean matrix (e.g., 4x4 incidence matrix) manually.
4. Compute and compare the actual trace norm and the Hölder’s inequality lower bound for this matrix.
5. Document the process and results in a README with explanations linking back to the paper.

**Ships as:** A GitHub repo with a Python script and README demonstrating the trace norm calculation and Hölder’s inequality lower bound on a small Boolean matrix.

**Stretch goal:** Add visualization of singular values and illustrate how the lower bound compares to the actual trace norm for different small matrices.

### Intermediate — Reimplementing Hölder’s Inequality Lower Bound for Sidon Set Boolean Functions
*Effort: 2 weekends, ~20 hours*

You implement the paper’s core method of applying Hölder’s inequality to Boolean functions defined by Sidon sets, explicitly constructing these functions and computing their spectral norms and randomized parity decision tree depths. You compare your computed lower bounds on the trace norm with baseline naive bounds, demonstrating the exponential separation between complexity measures.

**Why it shows you understood the paper:** This project shows you can reimplement the paper’s main technical method and apply it to explicit combinatorial constructions (Sidon sets), reproducing key complexity separations and metrics from the paper.

**Grounded in:** Constructed explicit Boolean functions (indicators of Sidon sets) with large spectral norm but small randomized parity decision tree complexity.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook

**Data:** Synthetic Boolean functions constructed from Sidon sets as described in the paper, generated programmatically based on BCH codes or combinatorial definitions.

**Build it:**

1. Implement a generator for Sidon sets or use BCH code constructions to define Boolean functions as indicator functions.
2. Implement Fourier transform computations to calculate spectral norms (Fourier L1-norm) of these Boolean functions.
3. Implement or simulate randomized parity decision tree algorithms to estimate their depth or size.
4. Apply the Hölder’s inequality variant to compute lower bounds on the trace norm of the associated Boolean matrices.
5. Compare your computed bounds and complexity measures, reproducing the exponential separation results.
6. Write a detailed report in a Jupyter Notebook linking your implementation steps to the paper’s theorems.

**Ships as:** A Jupyter Notebook repository with code and explanations reproducing the paper’s main complexity separations for Sidon set Boolean functions.

**Stretch goal:** Extend the implementation to approximate spectral norms and demonstrate the exponential separation between approximate and exact spectral norms.

### Advanced — Exploring Stronger Separations in Parity Decision Tree Complexity
*Effort: 3-4 weeks*

You extend the paper’s Hölder’s inequality framework to experimentally investigate whether stronger separations (e.g., O(1)-vs-Ω(n)) between randomized and deterministic parity decision tree sizes are achievable. This involves designing new combinatorial constructions or parameter variations, implementing complexity measure computations, and analyzing results to identify potential improvements or limitations.

**Why it shows you understood the paper:** This project demonstrates deep engagement with the paper’s open problems and limitations, showing you can extend and experiment with its core methods to contribute new insights or partial progress on open questions.

**Grounded in:** Investigate whether a stronger separation (O(1)-vs-Ω(n)) between randomized and deterministic parity decision tree sizes is achievable.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook, Matplotlib

**Data:** Synthetic Boolean functions generated via new or modified combinatorial constructions inspired by Sidon sets or point-line incidence systems, created programmatically.

**Build it:**

1. Review the paper’s constructions and limitations regarding parity decision tree size separations.
2. Design or adapt combinatorial constructions (e.g., variants of Sidon sets) to attempt stronger separations.
3. Implement code to compute or estimate randomized and deterministic parity decision tree sizes for these functions.
4. Apply the Hölder’s inequality method to compute trace norm lower bounds and analyze complexity separations.
5. Visualize and document findings, discussing whether stronger separations appear achievable or what barriers exist.
6. Prepare a comprehensive report or notebook linking your experiments to the paper’s open problems.

**Ships as:** A GitHub repo with code, notebooks, and a detailed report exploring stronger parity decision tree complexity separations, potentially contributing new experimental insights.

**Stretch goal:** Attempt to generalize the Hölder’s inequality framework to other complexity measures or communication models as suggested in the paper’s future directions.
