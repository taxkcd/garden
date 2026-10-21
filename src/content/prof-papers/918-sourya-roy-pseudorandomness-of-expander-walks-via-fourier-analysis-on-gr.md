---
title: "918 · Pseudorandomness of Expander Walks via Fourier Analysis on Groups — Sourya Roy"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sourya-roy"
source_hash: "b24b6805b05358c09014a5306f578815e9a74ada231f175a88c4d50cb1ed7393"
sequence: 918
generator: "outreach-garden: managed"
---

# 918 · Pseudorandomness of Expander Walks via Fourier Analysis on Groups

## At a glance

- **Professor:** Sourya Roy
- **Institution:** University of Iowa
- **Paper:** [Pseudorandomness of Expander Walks via Fourier Analysis on Groups](https://arxiv.org/pdf/2507.14445)
- **Authors:** Fernando Granha Jeronimo, Tushant Mittal, Sourya Roy
- **Year:** 2025

## Paper overview

This paper studies how random walks on expander graphs can mimic true randomness when evaluating functions defined on sequences of group elements. By using Fourier analysis on finite groups, the authors improve bounds on how well these walks 'fool' symmetric and word functions, especially when the underlying graph has algebraic structure like Cayley graphs. They also prove lower bounds showing limitations of these methods.

### Why it matters

**Research problem:** How closely do distributions induced by n-length random walks on expander graphs approximate the uniform distribution over n independent elements, particularly in fooling various classes of functions defined on finite groups?

**Why it matters:** Expander graphs are fundamental pseudorandom objects with applications in coding theory, derandomization, and pseudorandom generator constructions. Understanding their pseudorandomness properties for functions over groups can lead to improved explicit constructions and derandomization techniques in theoretical computer science.

**Key contributions:**

- Generalization of Fourier analytic framework for expander walks to arbitrary finite groups and matrix-valued functions.
- Improved bounds on fooling symmetric functions from exponential dependence on alphabet size to linear dependence.
- Introduction and analysis of word functions (non-commutative monomials) and proving they are exponentially fooled by expander walks.
- Sharper bounds for structured expanders (pseudo Cayley graphs) using group representation theory and quasirandomness.
- Lower bounds showing that the linear dependence on spectral expansion λ cannot be improved even with algebraic structure.

## About the professor

**Sourya Roy** — Assistant Professor, Department of Computer Science, University of Iowa.

Research interests: Theoretical computer science, pseudorandomness, coding theory, cryptography, computer vision, machine learning

### Research links

- [Faculty/profile page](https://cs.uiowa.edu/people/sourya-roy)
- [Professor website](https://sra2.github.io/souryar/)
- [Google Scholar](https://scholar.google.com/citations?user=E8YS9QEAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Representation theory of finite groups
**The paper assumes:** undergraduate representation theory of finite groups, character theory, and basic group algebra
**Already in this field?** Skip this entirely if you already have a solid grasp of finite group representation theory and character tables.

This background focuses on the representation theory of finite groups, which is essential for understanding the Fourier analytic techniques and spectral methods used in the paper on pseudorandomness of expander walks. The rigorous course option provides a comprehensive and detailed university-level treatment, while the fast track offers a concise, intuition-driven introduction suitable for quickly grasping the core concepts needed to follow the paper's main arguments.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Representation Theory of Finite Groups](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYSbqKp1TEL2BGdGX6QXHoo) — NPTEL - Indian Institute of Science, Bengaluru · 57 videos · 30.6h across 57 episodes

**Watch only this:** Lectures 47 to 51 (Fourier analysis on finite groups, Fourier inversion, Fourier analysis on nonabelian groups, applications of Fourier analysis on finite groups, and Cayley graph and its eigenvalues), about 2.7 hours — these cover the core Fourier analytic tools and spectral graph theory needed to understand the paper's approach.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, covers representation theory of finite groups in depth, including Fourier analysis on finite groups, characters, Cayley graphs, and applications directly relevant to the paper's methods and theorems.

*If you want all of it:* All 57 lectures, about 30.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Group representation for finite group](https://www.youtube.com/playlist?list=PLg9w7tItBlZvxk4eus_gi2Wp3yYAEXF9-) — Math Geeks · 10 videos · 4.1h across 10 episodes

**Watch only this:** Episodes 1 to 5 (Group representation: introduction; G linear map, G invariant subspace and Maschke's theorem; G invariant inner product and the proof of Schur's lemma; Schur row orthogonality relation and characters; Column orthogonality and the number of irreducible reps same as conjugacy class), about 2 hours — these episodes cover the essential representation theory concepts needed to grasp the paper's framework.

*Why it unblocks this paper:* This Math Geeks playlist provides a clear and concise introduction to group representations for finite groups, including key results like Maschke's theorem, Schur's lemma, and character orthogonality, which are foundational for understanding the paper's use of representation theory and matrix-valued functions.

*If you want all of it:* All 10 episodes, about 4.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on pseudorandomness of expander walks via Fourier analysis on groups, start with foundational knowledge of expander graphs and spectral theory, followed by representation theory of finite groups, and pseudorandomness and derandomization techniques. Then, build a solid grasp of Fourier analysis on finite groups, which is the central mathematical tool used in the paper. Finally, watch the authors' own seminar talk to see their novel results and methods in context.

### Expander graphs and spectral theory *(prerequisite)*
Expander graphs are fundamental pseudorandom objects whose spectral properties govern mixing rates and error bounds in pseudorandomness applications. Understanding their spectral theory is essential to grasp how random walks on these graphs approximate uniform distributions and fool functions.

*How the paper uses it:* The paper leverages spectral properties of expanders to analyze fooling error and improve bounds.

▶ [Spectral Graph Theory II: Expanders and Eigenvalues](https://www.youtube.com/watch?v=sDWAcqFDmJg) — Simons Institute for the Theory of Computing · 1:04:01 · 12y ago

### Representation theory of finite groups *(prerequisite)*
Representation theory provides the tools to analyze group actions via linear algebra, crucial for studying structured expanders like pseudo Cayley graphs and matrix-valued functions. It enables precise calculations using characters and Clebsch-Gordan coefficients as done in the paper.

*How the paper uses it:* The paper uses representation theory to obtain sharper bounds for structured expanders and analyze matrix-valued functions.

▶ [Representations of finite groups and applications - Pham Tiep](https://www.youtube.com/watch?v=cfnplv4GJdY) — Institute for Advanced Study · 1:05:16 · 10y ago

### Pseudorandomness and derandomization techniques *(prerequisite)*
Pseudorandomness theory contextualizes the importance of fooling functions and constructing pseudorandom generators, which is the broader framework in which expander walks are studied. Understanding these concepts helps appreciate the significance of the paper's improvements in fooling error bounds.

*How the paper uses it:* The paper contributes to pseudorandomness by improving fooling bounds for functions over groups using expander walks.

▶ [Pseudorandomness - Randomness extractors - Avi Wigderson](https://www.youtube.com/watch?v=0lC5ekL5Flo) — Institute for Advanced Study · 51:45 · 10y ago

### Fourier analysis on finite groups
Fourier analysis on finite groups generalizes classical Boolean Fourier techniques to arbitrary finite groups, including non-abelian ones. This mathematical tool is central to the paper's approach for analyzing functions over group elements and obtaining improved fooling bounds.

*How the paper uses it:* The paper generalizes Fourier analytic techniques to arbitrary finite groups and uses them to analyze expander walks.

▶ [Lecture 7 - Fourier Analysis on Finite Groups](https://www.youtube.com/watch?v=O_u0fwEtCT8) — Maniacal Maths · 59:20 · 3y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own seminar talk provides direct insight into their novel results, methods, and the technical innovations introduced in the paper. It offers the most precise and authoritative exposition of their work.

*How the paper uses it:* Fernando Granha Jeronimo, a co-author, presents an in-depth seminar on related expander graph constructions and techniques foundational to the paper.

▶ [An Introduction to Lifted Expander Graphs - Fernando Granha Jeronimo](https://www.youtube.com/watch?v=CIsHzvtFpZ8) — Institute for Advanced Study · 1:55:12 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on pseudorandomness of expander walks via Fourier analysis on groups, start by learning about expander graphs and their spectral properties, which are fundamental to the paper's pseudorandomness results. Next, build intuition on Fourier analysis on finite groups, the key mathematical tool used to generalize Boolean Fourier techniques to arbitrary groups. Then, explore representation theory of finite groups to grasp how structured expanders and matrix-valued functions are analyzed. Finally, study the core concept of pseudorandomness and derandomization techniques to appreciate the broader context and significance of fooling functions with expander walks.

### Expander graphs and spectral theory *(prerequisite)*
Expander graphs are sparse but highly connected graphs whose spectral properties ensure rapid mixing of random walks. Understanding their eigenvalues and how these relate to expansion and mixing is crucial for grasping how expander walks can mimic randomness.

*How the paper uses it:* The paper leverages spectral properties of expander graphs to bound the error in fooling functions with expander walks.

▶ [Class 18, Video 2: Expander Graphs](https://www.youtube.com/watch?v=1bkkZqfqXe8) — Mary Wootters · 13:45 · 4y ago

### Fourier analysis on finite groups
Fourier analysis on finite groups generalizes classical Fourier techniques to functions defined on group elements, enabling decomposition into characters or irreducible representations. This framework is essential for analyzing how functions behave under distributions induced by expander walks.

*How the paper uses it:* The authors generalize Fourier analytic techniques from Boolean functions to arbitrary finite groups to analyze pseudorandomness.

▶ [Lecture 7 - Fourier Analysis on Finite Groups](https://www.youtube.com/watch?v=O_u0fwEtCT8) — Maniacal Maths · 59:20 · 3y ago

### Representation theory of finite groups *(prerequisite)*
Representation theory studies how groups can be represented as matrices acting on vector spaces, providing tools to analyze group structure and functions over groups. It is particularly useful for understanding structured expanders like pseudo Cayley graphs and matrix-valued functions.

*How the paper uses it:* The paper uses representation theory to obtain sharper bounds for structured expanders and analyze matrix-valued functions.

▶ [Representations of Finite Groups | Definitions and simple examples.](https://www.youtube.com/watch?v=R-eCUwhnO8c) — Michael Penn · 13:11 · 6y ago

### Pseudorandomness and derandomization techniques *(prerequisite)*
Pseudorandomness studies how deterministic objects can simulate randomness, crucial for derandomization in algorithms. Understanding how expander graphs can fool classes of functions connects to constructing pseudorandom generators and reducing randomness in computation.

*How the paper uses it:* The paper's results contribute to understanding pseudorandomness properties of expander walks and their applications in derandomization.

▶ [Pseudorandomness - Randomness extractors - Avi Wigderson](https://www.youtube.com/watch?v=0lC5ekL5Flo) — Institute for Advanced Study · 51:45 · 10y ago

## Already in your library

- [Fourier transform on finite non-abelian groups](https://www.youtube.com/watch?v=KJ9Dqn6Afo4) — also for: Non-uniform Mixing of Quantum Walks on the Symmetric Group (Avah Banerjee)
- [But what is the Fourier Transform? A visual introduction.](https://www.youtube.com/watch?v=spUNpyF58BY) — also for: List Decoding Reed–Solomon Codes in the Lee, Euclidean, and Other Metrics (Chris Peikert)
- [Avi Wigderson: Expander graphs](https://www.youtube.com/watch?v=dUH8mSma3t0) — also for: Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR (Madhu Sudan)
- [What are...expander graphs?](https://www.youtube.com/watch?v=-jcZu4hDstA) — also for: Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR (Madhu Sudan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's core ideas on pseudorandomness of expander walks via Fourier analysis on groups. The beginner project builds intuition by simulating simple random walks on small groups and measuring fooling error for symmetric functions. The intermediate project implements the paper's main Fourier analytic method to reproduce improved fooling bounds on symmetric functions over finite alphabets. The advanced project extends the analysis to explore new classes of functions or graph constructions, addressing the paper's stated limitations and future directions.

### Beginner — Simulate Expander Walks on Small Groups and Measure Fooling Error
*Effort: a weekend, ~8 hours*

You build a small simulation of random walks on expander graphs constructed over finite groups (e.g., cyclic groups of small order). You implement simple symmetric functions on sequences of group elements and measure how closely the distribution induced by the expander walk approximates uniform randomness by computing empirical fooling error.

**Why it shows you understood the paper:** This project demonstrates you understand the basic setup of the paper: how expander walks generate pseudorandom distributions over group sequences and how fooling error for symmetric functions is defined and measured.

**Grounded in:** Theorem 1.3: Symmetric functions over any finite alphabet Σ are fooled by expander walks with error O(|Σ|·λ), improving previous exponential bounds.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic data generated by simulating random walks on small finite groups (e.g., Z_5, Z_7).

**Build it:**

1. Implement a small finite group (e.g., cyclic group Z_n) and define its elements.
2. Construct a simple expander graph on the group elements (e.g., a known Cayley graph with small spectral expansion λ).
3. Simulate n-length random walks on the expander graph to generate sequences of group elements.
4. Define simple symmetric functions on sequences (e.g., counting occurrences of a particular element).
5. Compute empirical fooling error by comparing function expectations under the expander walk distribution vs. uniform distribution.
6. Visualize fooling error as a function of walk length and spectral expansion.

**Ships as:** A GitHub repo with code simulating expander walks on small groups, computing fooling error for symmetric functions, and plots illustrating the error behavior.

**Stretch goal:** Add support for non-abelian groups and compare fooling error for symmetric functions on these groups.

### Intermediate — Reimplement Fourier Analytic Bounds for Symmetric Functions on Expander Walks
*Effort: 2 weekends, ~20 hours*

You implement the core Fourier analytic framework from the paper to compute operator norm bounds for matrix-valued symmetric functions on expander walks over finite alphabets. You reproduce the improved linear dependence on alphabet size |Σ| and spectral expansion λ in fooling error, comparing your results against a naive baseline that assumes exponential dependence.

**Why it shows you understood the paper:** This project shows you can translate the paper's main theoretical contribution into code, applying Fourier analysis on finite groups to derive and verify improved fooling bounds, a central advance of the paper.

**Grounded in:** Theorem 1.3: Symmetric functions over any finite alphabet Σ are fooled by expander walks with error O(|Σ|·λ), improving previous exponential bounds.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook

**Data:** Synthetic sequences over finite alphabets (e.g., Σ = {0,...,q-1} for small q) generated via simulated expander walks and uniform sampling.

**Build it:**

1. Implement Fourier basis functions over finite cyclic groups Z_q corresponding to alphabet Σ.
2. Implement matrix-valued symmetric functions and compute their Fourier coefficients.
3. Simulate expander walks on the group and compute spectral expansion λ of the graph.
4. Calculate operator norm bounds on the difference in function expectation under expander walk vs. uniform distribution using Fourier analysis.
5. Compare fooling error bounds to a naive baseline with exponential dependence on |Σ|.
6. Document results in a Jupyter notebook with explanations and plots.

**Ships as:** A Jupyter notebook demonstrating the Fourier analytic method, reproducing improved fooling bounds for symmetric functions, with code and visualizations.

**Stretch goal:** Extend the implementation to handle word functions (non-commutative monomials) and verify exponential fooling error decay as in Theorem 1.5.

### Advanced — Explore Pseudorandomness for New Function Classes or Structured Expanders
*Effort: 3+ weeks*

You extend the paper's analysis by investigating pseudorandomness properties for a broader class of functions over finite groups with richer symmetries or by constructing and analyzing new families of structured expander graphs beyond pseudo Cayley graphs. You implement Fourier analytic techniques and representation theory tools to derive fooling bounds and compare them to the paper's known limitations.

**Why it shows you understood the paper:** This project tackles the paper's stated future directions and limitations, demonstrating deep comprehension and the ability to contribute novel insights or constructions in the area of expander pseudorandomness.

**Grounded in:** Future directions: Exploring pseudorandomness properties for broader classes of functions over groups with richer symmetries; constructing new families of structured expanders beyond pseudo Cayley graphs to improve fooling bounds.

**Tech stack:** Python 3.11, NumPy, SciPy, SymPy (for representation theory computations), Jupyter Notebook

**Data:** Synthetic data generated from newly constructed expander graphs or function classes defined over finite groups.

**Build it:**

1. Study representation theory tools (e.g., Clebsch-Gordan coefficients) relevant to finite groups beyond those in the paper.
2. Design or identify new classes of functions over groups with richer symmetries (e.g., class functions beyond symmetric or word functions).
3. Construct or simulate new families of structured expander graphs beyond pseudo Cayley graphs.
4. Implement Fourier analytic computations and spectral analysis to derive fooling error bounds for these new settings.
5. Compare results to the paper's bounds and analyze whether linear dependence on λ can be improved or circumvented.
6. Document findings, limitations, and potential implications for derandomization or coding theory.

**Ships as:** A comprehensive GitHub repo with code, notebooks, and a detailed README discussing new pseudorandomness bounds or constructions, including comparisons to the paper's results.

**Stretch goal:** Attempt to apply the new pseudorandomness results to a simple derandomization or coding theory problem as a proof of concept.
