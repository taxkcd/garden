---
title: "243 · Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR — Madhu Sudan"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-madhu-sudan"
source_hash: "208101d92c5c3a4edb52054ad2f8f6d4230fec41ac22c8ff9d35943d18009c0a"
sequence: 243
generator: "outreach-garden: managed"
---

# 243 · Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR

## At a glance

- **Professor:** Madhu Sudan
- **Institution:** Harvard University
- **Paper:** [Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR](https://arxiv.org/pdf/2604.04188)
- **Authors:** Jarosław Błasiok, Paul Lou, Alon Rosen, Madhu Sudan
- **Year:** 2026

## Paper overview

This paper challenges the widely held belief that the noisy k-XOR problem is computationally hard on graphs with strong expansion properties. By constructing explicit families of such graphs based on lossless expanders and Reed-Muller codes, the authors provide polynomial-time algorithms to solve noisy k-XOR distinguishing problems even at constant or inverse polynomial noise rates. This refutes conjectures that expansion alone implies hardness and connects coding theory with computational complexity in a novel way.

### Why it matters

**Research problem:** The noisy k-XOR problem involves distinguishing between a uniformly random vector and a noisy linear system defined by a k-left-regular bipartite graph. It is conjectured that strong expansion properties of the graph imply computational hardness of this problem, but this paper investigates whether this intuition holds.

**Why it matters:** Understanding the computational complexity of noisy k-XOR is central to the study of statistical-computational gaps, cryptographic hardness assumptions, and the design of pseudorandom generators. The problem also relates to learning parity with noise and has implications for coding theory and complexity theory.

**Key contributions:**

- Refutation of the conjecture that expansion alone implies hardness for noisy k-XOR by constructing explicit expanding graphs solvable in polynomial time.
- Introduction of a novel connection between lossless expander graphs and Reed-Muller code decoding for the noisy k-XOR problem.
- Provision of polynomial-time algorithms solving noisy k-XOR at constant noise rate η=1/3 for graphs with quasi-polynomial constraints.
- Extension of results under standard conjectures on Reed-Muller codes to polynomially many constraints and inverse polynomial noise rates.
- Demonstration that low-degree polynomial hardness predictions can fail, providing a counterexample to the low-degree conjecture in this context.

## About the professor

**Madhu Sudan** — Gordon McKay Professor of Computer Science, Harvard John A. Poulson School of Engineering and Applied Sciences, Harvard University.

Research interests: Communication & Computing, Coding theory, Property Testing, Algebra in Computation.

### Research links

- [Faculty/profile page](http://madhu.seas.harvard.edu)
- [Resolved homepage](https://madhu.seas.harvard.edu/)
- [Lab website](http://toc.seas.harvard.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Coding Theory and Reed-Muller Codes
**The paper assumes:** coding theory, error-correcting codes, Reed-Muller codes, decoding algorithms, linear codes over F2
**Already in this field?** Skip this entirely if you already understand error-correcting codes and Reed-Muller code constructions and decoding algorithms.

To understand the core methods and results of the paper "Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR," a solid grasp of coding theory, especially Reed-Muller codes and their decoding algorithms, is essential. The rigorous option offers a comprehensive university-level course covering the theoretical foundations and advanced topics, while the fast track provides a shorter, focused playlist that introduces key concepts efficiently for quicker preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Information and Coding Theory (Madhur Tulsiani, TTIC, 2021)](https://www.youtube.com/playlist?list=PLidiQIHRzpXJujWKblOWPKoiD2ltRihYj) — Theoretical Computer Science School (TCSS) · 17 videos · 22.6h across 17 episodes

**Watch only this:** Lectures 12 through 18, about 9.2 hours — covering linear codes, explicit constructions, Reed-Solomon and Reed-Muller codes, local decoding, and capacity-achieving properties relevant to the paper's methods.

*Why it unblocks this paper:* This course by Madhur Tulsiani at TTIC covers information and coding theory in depth, including Reed-Muller codes and their decoding, which are central to the paper's approach connecting expander graphs and coding theory.

*If you want all of it:* 22.6 hours across all 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR," start by building foundational knowledge on lossless expander graphs, Reed-Muller codes and their decoding, and the algebraic structure of coset graphs. Then, explore the computational complexity context of the noisy k-XOR problem and the role of expander graphs in hardness assumptions. Finally, engage with the authors' own talks and advanced lectures that directly address the paper's novel contributions and techniques.

### Lossless expander graphs *(prerequisite)*
Lossless expander graphs form the combinatorial backbone of the paper's explicit constructions. Understanding their properties and explicit constructions is essential to grasp why the authors' graphs have near-optimal expansion and how this challenges previous hardness conjectures.

*How the paper uses it:* The paper constructs explicit families of near-optimal lossless expander graphs to refute hardness conjectures for noisy k-XOR.

▶ [Avi Wigderson: Expander graphs](https://www.youtube.com/watch?v=dUH8mSma3t0) — Theorems of the 21st Century Online Seminar · 59:25 · 5 months ago

### Reed-Muller codes decoding *(prerequisite)*
Reed-Muller codes and their decoding algorithms are central to the paper's approach, enabling polynomial-time solutions to noisy k-XOR by interpreting the problem as decoding in Reed-Muller subcodes. Familiarity with these codes and their decoding complexity is crucial.

*How the paper uses it:* The authors leverage advanced decoding algorithms for Reed-Muller codes to solve the noisy k-XOR distinguishing problem efficiently.

▶ [Lecture 6, Video 3: Binary Reed-Muller Codes](https://www.youtube.com/watch?v=GZ-lfgtr-2A) — Mary Wootters · 11:50 · 5 years ago

### Coset graphs and algebraic codes *(prerequisite)*
The paper's key structural insight is that the constructed expander graphs are coset graphs whose adjacency matrices generate subcodes of Reed-Muller codes. Understanding coset graphs and their algebraic properties provides the necessary background to appreciate this connection.

*How the paper uses it:* The constructed graphs are coset graphs linked to Reed-Muller subcodes, enabling decoding-based algorithms.

▶ [Cosets and Lagrange’s Theorem - The Size of Subgroups  (Abstract Algebra)](https://www.youtube.com/watch?v=TCcSZEL_3CQ) — Socratica · 9 years ago

### Noisy k-XOR problem complexity *(prerequisite)*
Understanding the computational hardness assumptions and complexity landscape of the noisy k-XOR problem contextualizes the significance of the paper's refutation of expansion-based hardness conjectures.

*How the paper uses it:* The paper challenges the widely held belief that expansion implies computational hardness for noisy k-XOR.

▶ [https://www.youtube.com › watch?v=wRoxBS98CUA](https://www.youtube.com/watch?v=wRoxBS98CUA) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about expander graphs, which are highly connected but sparse graphs crucial to the paper's constructions. Next, grasp the noisy k-XOR problem and why it is believed to be hard, setting the stage for the paper's challenge to this assumption. Then, study Reed-Muller codes and their decoding algorithms, as these codes underpin the paper's polynomial-time solutions. Finally, explore coset graphs and algebraic codes to see the key structural insight linking the expander graphs to Reed-Muller subcodes, which enables the novel algorithmic approach.

### Lossless expander graphs *(prerequisite)*
Expander graphs are sparse graphs with strong connectivity properties, meaning any small set of vertices has many neighbors. Lossless expanders are a special kind with near-optimal expansion, which the paper uses to build explicit graph families. Understanding these graphs helps grasp why expansion was thought to imply computational hardness.

*How the paper uses it:* The paper constructs explicit families of near-optimal lossless expander graphs to refute the hardness conjecture for noisy k-XOR.

▶ [What are...expander graphs?](https://www.youtube.com/watch?v=-jcZu4hDstA) — VisualMath · 3 years ago

### Noisy k-XOR problem complexity *(prerequisite)*
The noisy k-XOR problem involves distinguishing between random vectors and noisy linear systems defined by k-regular graphs. It is widely conjectured to be computationally hard on expanding graphs, which motivates the paper's investigation. Understanding this problem clarifies the significance of the paper's algorithmic results.

*How the paper uses it:* The paper challenges the belief that expansion implies hardness for the noisy k-XOR problem by providing polynomial-time algorithms.

▶ [https://www.youtube.com › watch?v=uo8Xha-i5uE](https://www.youtube.com/watch?v=uo8Xha-i5uE) — YouTube result via DuckDuckGo

### Reed-Muller codes decoding *(prerequisite)*
Reed-Muller codes are algebraic error-correcting codes with well-studied decoding algorithms that can correct random errors efficiently. The paper leverages advanced decoding techniques for these codes to solve noisy k-XOR problems on certain graphs. Learning about these codes and their decoding is key to understanding the algorithmic approach.

*How the paper uses it:* The paper uses decoding algorithms for Reed-Muller codes to solve noisy k-XOR distinguishing problems efficiently.

▶ [Lecture 6, Video 3: Binary Reed-Muller Codes](https://www.youtube.com/watch?v=GZ-lfgtr-2A) — Mary Wootters · 11:50 · 5 years ago

### Coset graphs and algebraic codes *(prerequisite)*
Coset graphs arise from group theory and relate to how subgroups partition a group into cosets. In this paper, the constructed expander graphs are shown to be coset graphs whose adjacency matrices generate subcodes of Reed-Muller codes. Understanding cosets and their connection to algebraic codes reveals the structural insight enabling the paper's results.

*How the paper uses it:* The paper identifies the constructed expander graphs as coset graphs linked to Reed-Muller subcodes, enabling decoding-based algorithms.

▶ [Cosets and Lagrange’s Theorem - The Size of Subgroups  (Abstract Algebra)](https://www.youtube.com/watch?v=TCcSZEL_3CQ) — Socratica · 9 years ago

## Already in your library

- [What are Reed-Solomon Codes? How computers recover lost data](https://www.youtube.com/watch?v=1pQJkt7-R4Q) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [But what are Hamming codes? The origin of error correction](https://www.youtube.com/watch?v=X8jsijhllIA) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and technical challenge to demonstrate understanding of the paper "Expanders Meet Reed-Muller: Easy Instances of Noisy k-XOR." The beginner project recreates a small-scale noisy k-XOR instance and solves it via basic decoding, the intermediate project implements the core decoding algorithm on explicit expander graphs inspired by the paper, and the advanced project extends the approach to explore one of the paper's open future directions, such as adapting the method to larger fields or testing expansion properties of random coset graphs.

### Beginner — Simulate and Solve a Small Noisy k-XOR Instance
*Effort: a weekend, ~8 hours*

You build a small simulation of the noisy k-XOR problem on a tiny bipartite graph with k=3 and N=16 variables. You generate a noisy linear system with a fixed noise rate (e.g., η=1/3), then implement a simple decoding algorithm inspired by Reed-Muller decoding principles to distinguish the noisy system from uniform noise.

**Why it shows you understood the paper:** This project shows you understand the noisy k-XOR problem setup, the role of noise, and the basic idea of decoding noisy linear constraints, which is central to the paper's approach.

**Grounded in:** Main Theorem 1: polynomial-time algorithms solving the η-noisy k-XOR problem at noise rate η=1/3 on explicit expanding graphs with quasi-polynomial constraints.

**Tech stack:** Python 3.11, NumPy, Jupyter Notebook

**Data:** Synthetic data: small k-left-regular bipartite graph and noisy linear system generated in code, simulating the noisy k-XOR problem as described in the paper.

**Build it:**

1. Implement a small k-left-regular bipartite graph generator with N=16 variables and k=3 constraints per variable.
2. Generate a random assignment vector and produce noisy XOR constraints with noise rate η=1/3.
3. Implement a simple decoding algorithm inspired by Reed-Muller decoding (e.g., majority vote or low-degree polynomial fitting) to recover the assignment or distinguish from uniform noise.
4. Evaluate and report the distinguishing accuracy and runtime.
5. Document the problem setup, algorithm, and results in a Jupyter notebook.

**Ships as:** A Jupyter notebook that simulates noisy k-XOR instances, runs a decoding algorithm, and reports accuracy and runtime, with clear explanations linking back to the paper's problem and solution approach.

**Stretch goal:** Add visualization of the bipartite graph and noise distribution to better illustrate the problem structure.

### Intermediate — Implement Reed-Muller Decoding on Explicit Expander Graphs for Noisy k-XOR
*Effort: 2 weekends, ~20 hours*

You implement the core polynomial-time decoding algorithm for noisy k-XOR on explicit k-left-regular bipartite graphs constructed as coset graphs of Reed-Muller codes, following the paper's construction. You compare your decoding success rate against a naive baseline (e.g., random guessing) at a constant noise rate η=1/3.

**Why it shows you understood the paper:** This project demonstrates you can reconstruct the paper's main algorithmic contribution: leveraging the algebraic structure of Reed-Muller codes and their coset graphs to solve noisy k-XOR efficiently, thus refuting the hardness conjecture based on expansion alone.

**Grounded in:** Key Contribution: Construction of explicit expanding graphs as coset graphs of Reed-Muller codes and polynomial-time decoding algorithms solving noisy k-XOR at constant noise rate η=1/3.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook

**Data:** Synthetic data generated by constructing explicit k-left-regular bipartite graphs as coset graphs of Reed-Muller codes with parameters scaled to small sizes (e.g., N=256).

**Build it:**

1. Implement or adapt code to construct explicit k-left-regular bipartite graphs as coset graphs corresponding to subcodes of Reed-Muller codes, following the paper's description.
2. Generate noisy k-XOR instances on these graphs at noise rate η=1/3.
3. Implement the Reed-Muller decoding algorithm for random errors as described in the paper to solve the noisy k-XOR distinguishing problem.
4. Implement a naive baseline that guesses uniformly at random.
5. Run experiments comparing decoding success rates and runtime between your algorithm and baseline.
6. Write a detailed report explaining the graph construction, decoding method, experimental setup, and results.

**Ships as:** A GitHub repository with code to generate explicit expander graphs, implement Reed-Muller decoding for noisy k-XOR, experimental results comparing to baseline, and a README explaining the connection to the paper.

**Stretch goal:** Extend the implementation to handle varying noise rates and analyze the decoding performance as noise decreases.

### Advanced — Explore Noisy k-XOR Decoding over Larger Fields or Random Coset Graph Expansion
*Effort: 3+ weeks*

You extend the paper's approach by investigating one of its stated future directions: either adapting the noisy k-XOR decoding algorithm to larger finite fields beyond F2, or empirically studying the expansion properties and decoding hardness of random subspace coset graphs. This involves implementing new algebraic structures or randomized graph constructions and testing decoding algorithms on them.

**Why it shows you understood the paper:** This project tackles an open problem from the paper, demonstrating deep comprehension of the algebraic and combinatorial foundations, and the ability to innovate beyond the paper's binary-field focus to address its limitations or conjectures.

**Grounded in:** Future Directions: Extending the approach to larger fields and other algebraic structures relevant for cryptographic applications; Investigating expansion properties of random subspace coset graphs to understand algorithmic hardness.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook, SageMath (optional for algebraic computations)

**Data:** Synthetic data generated by constructing random coset graphs or algebraic structures over larger finite fields, simulating noisy k-XOR instances accordingly.

**Build it:**

1. Research algebraic preliminaries for Reed-Muller codes or analogous codes over larger finite fields or random coset graph constructions.
2. Implement code to generate random subspace coset graphs or larger-field analogues of the paper's expander graphs.
3. Adapt or design decoding algorithms suitable for these new structures, inspired by Reed-Muller decoding.
4. Generate noisy k-XOR instances on these graphs with varying noise rates.
5. Empirically evaluate expansion properties (e.g., vertex expansion) and decoding success rates.
6. Document findings, challenges, and implications for computational hardness and cryptographic applications.

**Ships as:** A comprehensive GitHub repository with code, experiments, and a detailed technical report discussing the extension, its challenges, and how it relates to the paper's limitations and future directions.

**Stretch goal:** Attempt to prove or disprove conjectures about capacity-achieving properties of Reed-Muller codes over larger fields or random coset graphs.
