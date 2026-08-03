---
title: "177 · The Communication Complexity of Approximating Matrix Rank — Alexander A. Sherstov"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexander-a-sherstov"
source_hash: "3c74b1bc651cf1323d76081b4c7118467a08d197535df319f85ee93034f21d26"
sequence: 177
generator: "outreach-garden: managed"
---

# 177 · The Communication Complexity of Approximating Matrix Rank

## At a glance

- **Professor:** Alexander A. Sherstov
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [The Communication Complexity of Approximating Matrix Rank](https://arxiv.org/pdf/2410.20094)
- **Authors:** Alexander A. Sherstov, Andrey A. Storozhenko
- **Year:** 2024

## Paper overview

This paper fully characterizes the communication complexity of approximating the rank of a matrix over any finite field. It establishes tight lower and upper bounds for randomized and quantum communication protocols distinguishing matrices of different ranks. The work extends to streaming algorithms, determinant problems, subspace sum and intersection problems, multiparty communication, and bilinear query complexity, providing optimal or near-optimal bounds in all these settings.

### Why it matters

**Research problem:** Determining the minimal communication required between two or more parties to approximate the rank of the sum of their input matrices over finite fields, and related linear algebraic problems such as determinant evaluation and subspace dimension computations, especially in randomized and quantum communication models.

**Why it matters:** Matrix rank approximation is fundamental in theoretical computer science with connections to algorithm design, complexity theory, and streaming algorithms. Understanding communication complexity informs the design of efficient distributed and streaming algorithms and clarifies the inherent difficulty of these problems in various computational models.

**Key contributions:**

- Complete resolution of the communication complexity of approximating matrix rank over any finite field, including tight lower and upper bounds for randomized and quantum protocols.
- Establishment of essentially optimal lower bounds on the space complexity of streaming algorithms approximating matrix rank, even with multiple passes and error probability close to 1/2.
- Resolution of the communication complexity of the determinant problem for arbitrary field elements, settling a prior conjecture.
- Complete characterization of the communication complexity of subspace sum and intersection problems for all parameter settings and error probabilities.
- Extension of two-party communication lower bounds to multiparty communication models with linear scaling in the number of parties.

## About the professor

**Alexander A. Sherstov** — Professor, Computer Science Department, Univ. of California - Los Angeles.

Research interests: theoretical computer science, computational complexity theory, computational learning theory, quantum computing

### Research links

- [Faculty/profile page](http://www.cs.ucla.edu/~sherstov)
- [Professor website](http://web.cs.ucla.edu/~sherstov)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "The Communication Complexity of Approximating Matrix Rank," start by building a solid foundation in communication complexity lower bound techniques and quantum communication protocols, as these are essential to grasp the paper's tight complexity results and quantum extensions. Next, study streaming algorithms for linear algebra to appreciate the paper's applications to space lower bounds in streaming models. Finally, focus on the paper's core contributions by watching the authors' own talks presenting their novel techniques and results, which provide direct insight into their approach and findings.

### Communication complexity lower bounds *(prerequisite)*
Understanding lower bound techniques in communication complexity is crucial for appreciating the paper's establishment of tight lower bounds for randomized and quantum protocols. The selected video provides a rigorous seminar-style presentation on multiparty communication complexity lower bounds, which aligns well with the paper's extension of two-party results to multiparty settings.

*How the paper uses it:* The paper establishes essentially optimal lower bounds on communication complexity for matrix rank and related problems, relying on advanced lower bound techniques.

▶ [Lower Bound Techniques for Multiparty Communication ...](https://www.youtube.com/watch?v=qNTEZNEGAJ8) — Institut Henri Poincaré · 48:45

### Quantum communication protocols *(prerequisite)*
The paper includes tight quantum communication complexity bounds, so familiarity with quantum communication protocols and their complexity measures is necessary. The chosen talk from the Institute for Quantum Computing covers product theorems and applications in quantum communication complexity, providing a rigorous and research-level perspective relevant to the paper's quantum results.

*How the paper uses it:* The paper provides tight lower and upper bounds for quantum communication protocols approximating matrix rank.

▶ [Linear Growth of Quantum Circuit Complexity - Jonas ...](https://www.youtube.com/watch?v=AklY6hfitYA) — Institute for Quantum Computing · 59:03

### Streaming algorithms for linear algebra *(prerequisite)*
Since the paper applies communication complexity results to prove strong space lower bounds for streaming algorithms approximating matrix rank, understanding the landscape of streaming linear algebra algorithms is important. The selected talk from the Simons Institute offers a deep dive into low-rank matrix problems and algorithmic approaches, which complements the paper's streaming complexity results.

*How the paper uses it:* The paper derives optimal space lower bounds for streaming algorithms approximating matrix rank using communication complexity techniques.

▶ [Finding Low-Rank Matrices: From Matrix Completion to ...](https://www.youtube.com/watch?v=lXeEWsJ_5TQ) — Simons Institute for the Theory of Computing · 53:56

### Paper author talk *(the paper's own talk)*
The authors' own talks on this paper provide the most direct and detailed exposition of their novel techniques, such as the use of symmetric witness matrices and hyperpolynomials, and their main results on communication complexity of matrix rank approximation. These talks are essential for an advanced reader to fully grasp the paper's contributions and methodology.

*How the paper uses it:* These talks present the paper's main results and novel technical approach from the authors themselves.

▶ [FOCS 2024 2B The Communication Complexity of ...](https://www.youtube.com/watch?v=DliJuDz2d6A) — FOCS 2024 · 19:55

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in linear algebra and communication complexity before exploring quantum communication protocols and streaming algorithms relevant to the paper. It culminates with the paper's core novel technique involving approximate trace norms and hyperpolynomials, providing a clear, intuitive progression to understand the paper's contributions.

### Streaming algorithms for linear algebra *(prerequisite)*
Start by understanding what streaming algorithms are and how they apply to linear algebra problems like matrix rank approximation. This includes grasping how data is processed in passes with limited memory, a key motivation for the paper's space lower bounds.

*How the paper uses it:* The paper applies communication complexity results to prove strong space lower bounds for streaming algorithms approximating matrix rank.

▶ [Finding Low-Rank Matrices: From Matrix Completion to ...](https://www.youtube.com/watch?v=lXeEWsJ_5TQ) — Simons Institute for the Theory of Computing · 53:56

### Communication complexity lower bounds *(prerequisite)*
Learn the fundamental techniques used to prove lower bounds in communication complexity, which measure the minimal communication needed between parties to solve problems. This foundation is crucial to appreciate the tight bounds established in the paper.

*How the paper uses it:* The paper establishes tight lower bounds on communication complexity for matrix rank and related problems using advanced lower bound techniques.

▶ [Lower Bound Techniques for Multiparty Communication ...](https://www.youtube.com/watch?v=qNTEZNEGAJ8) — Institut Henri Poincaré · 48:45

### Quantum communication protocols *(prerequisite)*
Gain an intuitive understanding of quantum communication protocols and how they differ from classical ones. This helps in grasping the paper's results on quantum communication complexity for matrix problems.

*How the paper uses it:* The paper provides tight bounds for quantum communication protocols approximating matrix rank and determinant problems.

▶ [Quantum versus Randomized Communication Complexity ...](https://www.youtube.com/watch?v=u7hqUdPD17E) — Simons Institute for the Theory of Computing · 20:35

### Paper author talk *(the paper's own talk)*
Watch the authors present their work to get a direct, high-level overview of the problem, techniques, and results. This talk offers insight into the novel methods and the significance of their findings.

*How the paper uses it:* This talk by Andrey Storozhenko and Alexander Sherstov directly explains the paper's contributions and methods.

▶ [FOCS 2024 2B The Communication Complexity of ...](https://www.youtube.com/watch?v=DliJuDz2d6A) — FOCS 2024 · 19:55

### Approximate trace norm and hyperpolynomials
Finally, explore the key novel technique of the paper: analyzing approximate trace norms of communication matrices using symmetric witnesses described by hyperpolynomials. Understanding these concepts sheds light on how the authors achieve their tight complexity bounds.

*How the paper uses it:* The paper's main technical innovation involves hyperpolynomial-structured witness matrices and approximate trace norm analysis.

▶ [Matrix trace isn't just summing the diagonal | Lie groups, algebras, brackets #5](https://www.youtube.com/watch?v=B2PJh2K-jdU) — Mathemaniac · 2 years ago

## Already in your library

- [Lower Bounds in Complexity Theory, Communication ...](https://www.youtube.com/watch?v=w3kq7vTta7c) — also for: Query Lower Bounds for Correlation Clustering under Memory Constraints (Periklis A. Papakonstantinou)
- [Basics of Communication Complexity || @ CMU || Lecture 23a ...](https://www.youtube.com/watch?v=mQQ36cDnmR8) — also for: Query Lower Bounds for Correlation Clustering under Memory Constraints (Periklis A. Papakonstantinou)
