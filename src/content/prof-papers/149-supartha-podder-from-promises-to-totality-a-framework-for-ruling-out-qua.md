---
title: "149 · From Promises to Totality: A Framework for Ruling Out Quantum Speedups — Supartha Podder"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-supartha-podder"
source_hash: "bdd1084c7ae55c9649e2e095d88190fd7a7f4d41ce1d9cd75d8180395b8d736c"
sequence: 149
generator: "outreach-garden: managed"
---

# 149 · From Promises to Totality: A Framework for Ruling Out Quantum Speedups

## At a glance

- **Professor:** Supartha Podder
- **Institution:** Stony Brook University
- **Paper:** [From Promises to Totality: A Framework for Ruling Out Quantum Speedups](https://arxiv.org/pdf/2603.29256)
- **Authors:** Thomas Huffstutler, David Miloschewsky, Upendra Kapshikar, Supartha Podder
- **Year:** 2026

## Paper overview

This paper develops a comprehensive framework to determine when partial Boolean functions can or cannot achieve superpolynomial quantum query speedups over classical algorithms. It introduces new promise-aware complexity measures and the concept of function completions to characterize and rule out such quantum advantages. The work provides tight characterizations for symmetric functions, analyzes functions defined on slices of the Boolean cube, and establishes criteria under which no superpolynomial quantum speedups exist, including for functions with efficiently verifiable domains or low influence. It also shows that finding certain polynomial perturbations related to completions is computationally hard.

### Why it matters

**Research problem:** Identifying which partial Boolean functions admit superpolynomial quantum query speedups and understanding the structural reasons why some functions do not exhibit such speedups.

**Why it matters:** Quantum algorithms can outperform classical ones, but superpolynomial speedups are rare and poorly understood. Characterizing when such speedups are possible informs both quantum algorithm design and complexity theory, clarifying the limits of quantum advantage.

**Key contributions:**

- Introduced promise versions of block sensitivity and certificate complexity measures for partial functions and proved that polynomial relationships between these measures imply no superpolynomial quantum speedup.
- Provided tight characterizations (up to polynomial factors) of query complexity measures for partial symmetric functions in terms of a single gap parameter related to Hamming weight differences.
- Extended analysis to functions defined on k-slices of the Boolean cube, improving known bounds on deterministic vs quantum query complexity.
- Developed the framework of completion complexity, showing that the existence of completions preserving polynomial relationships characterizes the possibility of superpolynomial quantum speedups.
- Proved that functions with efficiently verifiable domains and certain smoothness or low influence properties do not admit superpolynomial quantum speedups.

## About the professor

**Supartha Podder** — Assistant Professor, Department of Computer Science, Stony Brook University.

Research interests: Quantum computing, complexity theory, quantum cryptography, analysis of boolean functions

### Research links

- [Faculty/profile page](https://www.cs.stonybrook.edu/people/faculty/suparthapodder)
- [Professor website](https://www.suparthapodder.com/)
- [Resolved homepage](https://sites.google.com/cs.stonybrook.edu/seminar-in-quantum-computing/home)
- [Google Scholar](https://scholar.google.com/citations?user=vpwsjWkAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/supartha-podder-723923112/)
- [Social profile](https://twitter.com/suparthapodder)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "From Promises to Totality: A Framework for Ruling Out Quantum Speedups," start by building foundational knowledge in quantum query complexity theory and key combinatorial complexity measures such as block sensitivity and certificate complexity. Then, study polynomial approximation of Boolean functions and the role of partial Boolean functions and promise problems, which are central to the paper's technical approach. Finally, focus on the paper's core concept of completion complexity in quantum query algorithms, which characterizes when superpolynomial quantum speedups occur.

### Quantum query complexity theory *(prerequisite)*
This section covers the foundational framework for understanding the differences between classical deterministic, randomized, and quantum query models. It provides the theoretical background necessary to appreciate the significance of quantum speedups and their limitations in query complexity.

*How the paper uses it:* The paper analyzes quantum query complexity measures and their relationships to classical counterparts to characterize quantum speedups.

▶ [Part 1 Quantum query complexity basics+the hybrid method | Yassine Hamoudi (U California, Berkeley)](https://www.youtube.com/watch?v=ivSG82Q3ANg) — IAS | PCMI Park City Mathematics Institute · 3 years ago

### Block sensitivity and certificate complexity *(prerequisite)*
Block sensitivity and certificate complexity are key combinatorial measures of Boolean function complexity. Understanding these concepts, especially their adaptations to partial functions, is crucial for grasping the paper's promise-aware complexity measures and their role in ruling out quantum speedups.

*How the paper uses it:* The paper introduces promise versions of block sensitivity and certificate complexity to analyze partial Boolean functions.

▶ [Sensitivity Conjecture and Its Applications](https://www.youtube.com/watch?v=EJoe4qH6kLs) — Simons Institute for the Theory of Computing · Streamed 6 years ago

### Polynomial approximation of Boolean functions *(prerequisite)*
Polynomial approximations of Boolean functions are used to study smoothness properties and perturbations, which are central to the paper's analysis of natural completions and hardness results. This section provides the mathematical tools needed to understand these polynomial techniques.

*How the paper uses it:* The paper uses approximating polynomials and smoothness conditions to analyze completions and prove hardness results.

▶ [S. Venkitesh. On Probabilistic Approximations of Boolean Functions via Polynomials](https://www.youtube.com/watch?v=VXrIM2ywlHU) — Georgetown Computer Science Colloquium · 4 years ago

### Partial Boolean functions and promise problems *(prerequisite)*
Partial Boolean functions and promise problems form the core domain of the paper's study. Understanding their structure and complexity is essential to appreciate the framework developed for ruling out quantum speedups on such functions.

*How the paper uses it:* The paper focuses on partial Boolean functions and introduces promise-aware complexity measures to characterize quantum speedups.

▶ [Analysis of Boolean Functions: advances and challenges](https://www.youtube.com/watch?v=BuiE2clVe_s) — Microsoft Research · 10 years ago

### Completion complexity in quantum query algorithms
Completion complexity is the central method introduced in the paper to characterize when superpolynomial quantum speedups can or cannot occur. This concept involves extending partial functions to total functions while preserving complexity measures, and analyzing the computational hardness of such completions.

*How the paper uses it:* The paper develops the framework of completion complexity as a characterization of superpolynomial quantum speedups.

▶ [A Quantum Query Complexity Trichotomy for Regular Languages](https://www.youtube.com/watch?v=PKAgbsncyI8) — IEEE FOCS: Foundations of Computer Science · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's framework for ruling out superpolynomial quantum speedups in partial Boolean functions. It starts with the basics of quantum query complexity theory, then covers key combinatorial complexity measures like block sensitivity and certificate complexity, followed by polynomial approximation of Boolean functions and the notion of partial Boolean functions and promise problems. Finally, it presents the core concept of completion complexity, which is central to the paper's main results.

### Quantum query complexity theory *(prerequisite)*
Learn the basics of quantum query complexity, which studies how many queries a quantum algorithm needs to evaluate a function compared to classical algorithms. This foundational framework helps understand the limits and potential speedups of quantum algorithms in decision problems.

*How the paper uses it:* The paper analyzes quantum query complexity to characterize when quantum algorithms can achieve superpolynomial speedups over classical ones.

▶ [Qalgo 6.1: Models of query complexity](https://www.youtube.com/watch?v=y9IZ6W1ddGw) — MH1200 · 4 years ago

### Block sensitivity and certificate complexity *(prerequisite)*
Understand block sensitivity and certificate complexity, which are combinatorial measures of Boolean function complexity related to how sensitive a function is to input changes. These measures are adapted in the paper to partial functions to analyze quantum speedups.

*How the paper uses it:* The paper introduces promise-aware versions of these measures and uses their polynomial relationships to rule out superpolynomial quantum speedups.

▶ [Sensitivity Conjecture and Its Applications](https://www.youtube.com/watch?v=EJoe4qH6kLs) — Simons Institute for the Theory of Computing · Streamed 6 years ago

### Polynomial approximation of Boolean functions *(prerequisite)*
Explore how Boolean functions can be approximated by polynomials, a key technique to analyze smoothness and complexity. Polynomial approximations help characterize quantum query complexity and are used in the paper to study function completions and perturbations.

*How the paper uses it:* The paper uses approximating polynomials to analyze smoothness properties and prove hardness results related to completions.

▶ [1.8 Polynomial Approximation](https://www.youtube.com/watch?v=5xTkqB0ISv8) — Ang Wei Lun · 8 years ago

### Partial Boolean functions and promise problems *(prerequisite)*
Learn what partial Boolean functions and promise problems are — functions defined only on a subset of inputs with certain conditions (promises). Understanding these is essential because the paper studies quantum speedups specifically for such partial functions.

*How the paper uses it:* The paper's framework and complexity measures are designed for partial functions with promises, central to its characterization of quantum speedups.

▶ [Analysis of Boolean Functions: advances and challenges](https://www.youtube.com/watch?v=BuiE2clVe_s) — Microsoft Research · 10 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's framework for ruling out superpolynomial quantum speedups in partial Boolean functions. Starting with a beginner-level implementation of promise-aware complexity measures on simple partial symmetric functions, you then reimplement the core completion complexity framework at intermediate level to analyze query complexity relationships. Finally, the advanced project tackles an open future direction by extending the completion complexity framework to randomized query complexity, addressing a key limitation noted by the authors.

### Beginner — Promise-Aware Complexity Measures for Partial Symmetric Functions
*Effort: a weekend, ~8 hours*

You build a small Python tool that computes promise-aware block sensitivity and certificate complexity measures for simple partial symmetric Boolean functions defined by Hamming weight gaps. The tool visualizes how these measures relate polynomially to the minimal Hamming weight gap (GAP(f)) parameter, reproducing the core intuition behind the paper's tight characterizations for partial symmetric functions.

**Why it shows you understood the paper:** This project shows you grasp the paper's introduction of promise-aware complexity measures and their role in ruling out superpolynomial quantum speedups for partial symmetric functions, directly reflecting the paper's key results on polynomial relationships involving GAP(f).

**Grounded in:** Key contribution 2: Provided tight characterizations (up to polynomial factors) of query complexity measures for partial symmetric functions in terms of a single gap parameter related to Hamming weight differences.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic partial symmetric Boolean functions defined by specifying allowed Hamming weight intervals and output values, generated within the project.

**Build it:**

1. Implement functions to generate partial symmetric Boolean functions based on Hamming weight intervals and GAP(f) parameters.
2. Implement computation of promise-aware block sensitivity and certificate complexity measures for these functions.
3. Visualize the polynomial relationships between these measures and GAP(f) using plots.
4. Write a README explaining the connection to the paper's characterization of partial symmetric functions.

**Ships as:** A GitHub repo with Python scripts and plots demonstrating polynomial relationships between promise-aware complexity measures and GAP(f) for partial symmetric functions, with explanatory documentation.

**Stretch goal:** Add a simple interactive Jupyter notebook allowing users to vary GAP(f) and see updated complexity measure plots.

### Intermediate — Reimplementation of Completion Complexity Framework for Partial Boolean Functions
*Effort: 2 weekends, ~20 hours*

You reimplement the core completion complexity framework from the paper to analyze polynomial relationships between query complexity measures of partial Boolean functions and their completions. Using synthetic partial functions defined on Boolean slices, you compute deterministic and quantum query complexity proxies and verify the characterization that superpolynomial quantum speedups occur if and only if no polynomially related completion exists.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main theoretical framework and reproduce its central characterization of quantum speedups via completion complexity, going beyond definitions to algorithmic analysis and complexity measure computations.

**Grounded in:** Key contribution 4 and key result 4: Developed the framework of completion complexity, showing that the existence of completions preserving polynomial relationships characterizes the possibility of superpolynomial quantum speedups.

**Tech stack:** Python 3.11, numpy, scipy

**Data:** Synthetic partial Boolean functions on k-slices of the Boolean cube generated programmatically to simulate the paper's function classes.

**Build it:**

1. Implement data structures to represent partial Boolean functions and their completions.
2. Implement algorithms to compute or approximate deterministic and quantum query complexity measures for these functions.
3. Implement the completion complexity framework to find completions preserving polynomial relationships between complexity measures.
4. Run experiments on synthetic partial functions on k-slices to verify the characterization of superpolynomial quantum speedups.
5. Document the implementation and experimental results in a detailed README.

**Ships as:** A GitHub repo with code implementing the completion complexity framework, scripts to generate synthetic data, and experimental results validating the paper's characterization, plus documentation.

**Stretch goal:** Add a baseline comparison with naive completions ignoring polynomial relationships to highlight the framework's advantage.

### Advanced — Extending Completion Complexity to Randomized Query Complexity
*Effort: 3-4 weeks*

You develop an extension of the completion complexity framework to characterize superpolynomial quantum speedups relative to randomized query complexity, addressing a limitation and future direction from the paper. This involves defining promise-aware randomized complexity measures, adapting completion definitions, and implementing prototype algorithms to analyze synthetic partial functions. You evaluate whether polynomial relationships between randomized and quantum measures similarly rule out superpolynomial speedups.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's open problems and the ability to extend its theoretical framework to a new complexity model, demonstrating research-level understanding and initiative to tackle stated limitations.

**Grounded in:** Limitation 1 and future direction 1: The framework primarily characterizes speedups relative to deterministic query complexity; analogous characterizations relative to randomized query complexity remain open.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** Synthetic partial Boolean functions generated programmatically, similar to those used in the intermediate project, to test the extended framework.

**Build it:**

1. Study and define promise-aware randomized query complexity measures analogous to those in the paper.
2. Adapt the completion complexity framework to incorporate randomized complexity measures.
3. Implement algorithms to approximate randomized and quantum query complexities for synthetic partial functions.
4. Run experiments to test polynomial relationships between these measures and analyze implications for superpolynomial quantum speedups.
5. Document theoretical definitions, implementation details, and experimental findings in a comprehensive report.

**Ships as:** A GitHub repo with code and documentation presenting an extended completion complexity framework for randomized query complexity, including experimental validation and discussion of challenges.

**Stretch goal:** Explore connections between polynomial approximations' smoothness properties and randomized complexity measures to refine the framework.
