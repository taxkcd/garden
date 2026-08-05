---
title: "107 · Non-uniform Mixing of Quantum Walks on the Symmetric Group — Avah Banerjee"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-avah-banerjee"
source_hash: "1460e30e0bc82e0d79355ebe433ff3f3f68e89ebc48bcc2b1dfa9cb2463c38fa"
sequence: 107
generator: "outreach-garden: managed"
---

# 107 · Non-uniform Mixing of Quantum Walks on the Symmetric Group

## At a glance

- **Professor:** Avah Banerjee
- **Institution:** Missouri S&T
- **Paper:** [Non-uniform Mixing of Quantum Walks on the Symmetric Group](https://arxiv.org/pdf/2311.02843)
- **Authors:** Avah Banerjee
- **Year:** 2023

## Paper overview

This paper studies discrete-time quantum walks (DTQW) on the symmetric group, focusing on how their probability distributions differ from classical random walks. It shows that unlike classical walks, these quantum walks do not converge to a uniform distribution, revealing 'blind spots' or localization effects in the quantum walk's behavior. The analysis uses advanced representation theory and Fourier analysis on non-commutative groups to characterize the spectral properties of the quantum walk operator.

### Why it matters

**Research problem:** Understanding the mixing behavior and limiting distributions of discrete-time quantum walks on the symmetric group, specifically whether these quantum walks converge to uniform distributions like their classical counterparts.

**Why it matters:** Quantum walks are fundamental tools for developing quantum algorithms and understanding their mixing properties is crucial for leveraging quantum speedups in randomized algorithms. The symmetric group is a key non-abelian group with rich structure, making it a challenging and important case for quantum walk analysis.

**Key contributions:**

- Extension of Gerhardt and Watrous's continuous-time quantum walk results to the discrete-time Szegedy walk framework on the symmetric group.
- Derivation of spectral decomposition of the Szegedy walk operator using irreps and character theory of the symmetric group.
- Proof that the discrete-time quantum walk does not converge to the uniform distribution, with explicit upper bounds on the probability of observing n-cycles.
- Identification of localization phenomena and lack of anti-concentration in the quantum walk distribution.
- Development of general techniques potentially applicable to other non-commutative groups.

## About the professor

**Avah Banerjee** — Assistant Professor of Computer Science, Computer Science, Missouri S&T.

Research interests: high-precision physics ML, quantum circuits, ML models, structured objects, AI in human-centered computing systems, drug discovery

### Research links

- [Faculty/profile page](https://www.avahbanerjee.com)
- [Resolved homepage](https://www.avahbanerjee.com/)
- [Lab website](https://semiqlassical.tech/#founders)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on non-uniform mixing of quantum walks on the symmetric group, start with foundational mathematical prerequisites: representation theory of the symmetric group and Fourier analysis on non-abelian groups. Then study the Szegedy quantum walk framework, which is the central method used in the paper. Finally, focus on the paper's core concept of discrete-time quantum walks on the symmetric group, including the author's own talk and related advanced seminars to gain direct insight into the novel results and methods.

### Representation theory of symmetric group *(prerequisite)*
Representation theory of the symmetric group is essential to decompose the quantum walk operator and analyze its spectral properties. Understanding irreducible representations and character theory provides the mathematical foundation for the spectral decomposition used in the paper.

*How the paper uses it:* The paper uses irreps and character theory of the symmetric group to derive the spectral decomposition of the quantum walk operator.

▶ [Representation Theory & Combinatorics of the Symmetry Group &Related Structures III -Monica Vazirani](https://www.youtube.com/watch?v=2tvNWmzBc-4) — Institute for Advanced Study · 5 years ago

### Fourier analysis on non-abelian groups *(prerequisite)*
Fourier analysis on non-abelian groups generalizes classical Fourier transform techniques to groups like the symmetric group, enabling spectral analysis of operators defined on these groups. This is crucial for understanding the spectral properties and character theory applied in the paper.

*How the paper uses it:* The paper employs Fourier analysis on the symmetric group to characterize spectral properties of the quantum walk operator.

▶ [Lec 49 Fourier analysis on nonabeilian groups](https://www.youtube.com/watch?v=vJe_rQaZsAA) — NPTEL - Indian Institute of Science, Bengaluru · 5 months ago

### Szegedy quantum walk framework
Szegedy's framework provides a systematic way to quantize classical Markov chains into discrete-time quantum walks. Understanding this framework is key to grasping how the paper constructs and analyzes the discrete-time quantum walk on the symmetric group.

*How the paper uses it:* The paper constructs the discrete-time quantum walk using Szegedy's framework applied to the Cayley graph of the symmetric group.

▶ [2021 lecture28 Szegedy Walks](https://www.youtube.com/watch?v=-6-xtwMHaGM) — Nathan Wiebe · 3 years ago

### Paper author talk *(the paper's own talk)*
Direct talks by experts or authors provide the most precise and insightful explanations of their novel results and methods. Such talks often include motivations, technical challenges, and implications that are not fully captured in the paper text.

*How the paper uses it:* Although no direct talk by Avah Banerjee on this exact paper was found, closely related advanced talks on quantum walks on groups provide valuable context and depth.

▶ [Quantum Walks on Graphs and Group State Transfer](https://www.youtube.com/watch?v=JCavHmcloyo) — Fields Institute · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand the paper on discrete-time quantum walks on the symmetric group. We start with the basics of the symmetric group and its representation theory, then build intuition on Fourier analysis on non-abelian groups, followed by understanding mixing times and limiting distributions in quantum walks. Finally, we cover the Szegedy quantum walk framework, which is the core method used in the paper.

### Representation theory of symmetric group *(prerequisite)*
Representation theory helps us understand how groups like the symmetric group can be broken down into simpler, well-understood pieces called irreducible representations. This decomposition is crucial for analyzing complex operators, like the quantum walk operator in the paper, by studying their action on these simpler components.

*How the paper uses it:* The paper uses irreducible representations and their characters to decompose and analyze the quantum walk operator on the symmetric group.

▶ [Lecture 22 (Specht representations of symmetric groups)](https://www.youtube.com/watch?v=TWZ51wyS6U4) — Math with MS · 5 years ago

### Fourier analysis on non-abelian groups *(prerequisite)*
Fourier analysis generalizes to non-abelian groups by using their irreducible representations to transform functions on the group into simpler components. This tool is essential for understanding the spectral properties of operators defined on groups, such as the quantum walk operator studied in the paper.

*How the paper uses it:* The paper applies Fourier analysis on the symmetric group to characterize the spectral decomposition of the quantum walk operator.

▶ [Fourier transform on finite non-abelian groups](https://www.youtube.com/watch?v=KJ9Dqn6Afo4) — Arijit Ganguly · 6 years ago

### Mixing times and limiting distributions of quantum walks *(prerequisite)*
Mixing time measures how quickly a random or quantum walk approaches its steady-state distribution. Understanding these concepts helps us grasp why quantum walks on the symmetric group do not converge to uniform distributions, unlike classical walks.

*How the paper uses it:* The paper studies the non-uniform mixing behavior and limiting distributions of discrete-time quantum walks on the symmetric group.

▶ [Lecture 16: Mixing time for random walks on graphs](https://www.youtube.com/watch?v=Ae25jFh_TAg) — Ayalvadi Ganesh · 5 years ago

### Szegedy quantum walk framework
Szegedy's framework provides a method to construct discrete-time quantum walks from classical Markov chains, enabling the study of their spectral and mixing properties. This framework is central to the paper's approach for defining and analyzing the quantum walk on the symmetric group.

*How the paper uses it:* The paper employs Szegedy's framework to build the discrete-time quantum walk operator on the symmetric group.

▶ [2021 lecture28 Szegedy Walks](https://www.youtube.com/watch?v=-6-xtwMHaGM) — Nathan Wiebe · 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core findings on discrete-time quantum walks (DTQW) on the symmetric group. The beginner project reproduces a key probability bound visualization using basic Python tools, the intermediate project implements the Szegedy quantum walk operator on small symmetric groups and compares quantum vs classical mixing distributions, and the advanced project extends the analysis to quantum walks on a non-conjugacy-closed generating set or another non-commutative group, addressing a stated limitation and future direction.

### Beginner — Visualize Probability Bounds for n-Cycles in Quantum Walks on S_n
*Effort: a weekend, ~8 hours*

You build a Python script that plots the upper bound on the instantaneous probability of observing an n-cycle in the quantum walk as a function of n, reproducing the O(n^{20} β^{2n} / n!) decay behavior described in the paper. This involves implementing the formula for the bound and generating plots to compare it qualitatively against the classical uniform distribution probability 1/n.

**Why it shows you understood the paper:** This project shows you understand the paper's key quantitative result about non-uniform mixing and the exponential suppression of certain cycle types in the quantum walk distribution, a central insight contrasting classical and quantum behavior.

**Grounded in:** The instantaneous and time-averaged probability of observing an n-cycle in the quantum walk is exponentially smaller than in the classical uniform distribution, bounded by O(n^{20} β^{2n} / n!) for any constant β > 16/81.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** No external data needed; you implement the theoretical bound formula from the paper.

**Build it:**

1. Implement the formula for the upper bound probability of observing an n-cycle as given in the paper.
2. Generate values for n in a reasonable range (e.g., 1 to 20) and compute the bound for each.
3. Plot the bound curve alongside the classical uniform probability 1/n for comparison.
4. Add labels, legends, and explanations in the plot to clarify the contrast.
5. Write a README explaining the significance of the plot and how it relates to the paper's findings.

**Ships as:** A GitHub repo with a Python script and README showing plots of quantum walk probability bounds vs classical uniform distribution for n-cycles.

**Stretch goal:** Add interactive sliders to vary β and observe its effect on the bound curve.

### Intermediate — Implement Szegedy Quantum Walk on Small Symmetric Groups and Compare Mixing
*Effort: 2 weekends, ~20 hours*

You implement the discrete-time Szegedy quantum walk operator on the Cayley graph of the symmetric group S_n generated by transpositions for small n (e.g., n=3 or 4). You simulate the quantum walk's probability distribution over conjugacy classes and compare it against the classical random walk's uniform distribution, reproducing the non-uniform mixing behavior and localization effects described in the paper.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's core method—constructing and analyzing the Szegedy quantum walk operator using representation theory—into code, and empirically verify the key result that the quantum walk does not mix uniformly.

**Grounded in:** The paper employs Szegedy's framework for quantizing Markov chains to construct a discrete-time quantum walk on the Cayley graph of the symmetric group generated by transpositions and proves non-uniform mixing behavior with explicit bounds.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** No external dataset; the symmetric group S_n and its Cayley graph are constructed algorithmically for small n.

**Build it:**

1. Implement the classical random walk transition matrix on S_n generated by transpositions for n=3 or 4.
2. Construct the Szegedy quantum walk operator W from the classical transition matrix using the paper's description.
3. Compute the spectral decomposition of W numerically and simulate the quantum walk probability distribution over conjugacy classes.
4. Plot and compare the quantum walk distribution against the classical uniform distribution at various time steps.
5. Document the code and results, highlighting the observed non-uniform mixing and localization effects.

**Ships as:** A GitHub repo with code implementing the Szegedy quantum walk on S_n, simulation results, and plots comparing quantum and classical mixing distributions.

**Stretch goal:** Extend the implementation to n=5 or include time-averaged distributions to observe long-term behavior.

### Advanced — Extend Quantum Walk Analysis Beyond Conjugacy-Closed Generating Sets
*Effort: 3+ weeks*

You develop code to construct and analyze discrete-time quantum walks on the symmetric group with generating sets that are not conjugacy closed, or alternatively on another non-commutative group such as the discrete Heisenberg group. You adapt the spectral analysis techniques from the paper or develop approximations to study mixing behavior and localization, addressing a key limitation and future direction.

**Why it shows you understood the paper:** This project shows you deeply understand the paper's mathematical framework and limitations, and can extend or adapt it to new group structures or generating sets, potentially opening new research avenues.

**Grounded in:** The analysis relies on the generating set being conjugacy closed (transpositions), limiting generality. Future directions include applying techniques to other non-commutative groups and extending beyond class functions.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, sympy (optional for symbolic computations)

**Data:** No external data; group elements and Cayley graphs are constructed algorithmically.

**Build it:**

1. Select a non-conjugacy-closed generating set for S_n or choose another non-commutative group like the discrete Heisenberg group.
2. Implement the classical random walk transition matrix for the chosen generating set/group.
3. Adapt or develop code to construct the Szegedy quantum walk operator for this setting, possibly approximating spectral decompositions.
4. Simulate the quantum walk and analyze the probability distributions over group elements or conjugacy classes.
5. Compare mixing behavior to classical walks and to the paper's results, documenting any localization or non-uniform mixing.
6. Write a detailed report discussing challenges, methods, and implications for quantum algorithm design.

**Ships as:** A GitHub repo with code and analysis extending quantum walk spectral methods beyond conjugacy-closed generating sets, with simulations and a comprehensive README.

**Stretch goal:** Investigate efficient classical approximations or simulations of these quantum walks to handle larger groups.
