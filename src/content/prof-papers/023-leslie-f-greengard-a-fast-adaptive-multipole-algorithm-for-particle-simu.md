---
title: "023 · A Fast Adaptive Multipole Algorithm for Particle Simulations — Leslie F. Greengard"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-greengar"
source_hash: "b587274acf20b2f445aecf2ca1a2601e896ceca4a8743844747b9c86590fdbfe"
sequence: 23
generator: "outreach-garden: managed"
---

# 023 · A Fast Adaptive Multipole Algorithm for Particle Simulations

## At a glance

- **Professor:** Leslie F. Greengard
- **Institution:** New York University
- **Paper:** [A Fast Adaptive Multipole Algorithm for Particle Simulations](https://math.nyu.edu/~greengar/cgr_88.pdf)
- **Authors:** J. Carrier, L. Greengard, V. Rokhlin
- **Year:** 1988

## Paper overview

This paper presents an adaptive algorithm that efficiently computes the potential and force fields in large systems of particles interacting via Coulomb's law. The method achieves linear computational complexity O(N), independent of particle distribution, by using hierarchical clustering and multipole expansions to approximate distant interactions, while computing nearby interactions directly.

### Why it matters

**Research problem:** Efficiently evaluating Coulombic interactions among large numbers of particles, where direct computation scales quadratically O(N^2) and becomes computationally prohibitive for large N.

**Why it matters:** Simulating physical systems such as plasma physics, molecular dynamics, fluid dynamics, and celestial mechanics requires fast and accurate computation of particle interactions to enable practical large-scale simulations.

**Key contributions:**

- Introduction of an adaptive multipole algorithm with O(N) complexity for 2D particle simulations.
- Development of a hierarchical mesh refinement strategy that adapts to particle distribution.
- Detailed complexity analysis showing linear scaling independent of particle distribution.
- Numerical experiments demonstrating accuracy and efficiency on uniform, clustered, and complex particle distributions.
- Provision of error bounds and rigorous analytical tools for multipole expansions and translations.

## About the professor

**Leslie F. Greengard** — Department of Mathematics, New York University.

Research interests: Scientific computing, fast algorithms, adaptive methods, integral equations, potential theory, electromagnetics, computational chemistry, computational biology.

### Research links

- [Faculty/profile page](https://math.nyu.edu/~greengar)
- [Resolved homepage](http://math.nyu.edu/faculty/greengar/)
- [A Short Course on Fast Multipole Methods](http://math.nyu.edu/faculty/greengar/shortcourse_fmm.pdf)

## Learning path

To deeply understand the 1988 paper on the fast adaptive multipole algorithm, start by building foundational knowledge on the fast multipole method (FMM) as it underpins the adaptive approach. Next, study hierarchical mesh refinement techniques crucial for adaptive domain subdivision. Then, explore multipole expansions and their error analysis to grasp the mathematical approximations and accuracy guarantees. Finally, focus on the core concept of the adaptive multipole algorithm itself, ideally via the authors' own talk or a close substitute if available.

## Recommended videos (in order)

### Fast multipole method seminar *(prerequisite)*
The fast multipole method (FMM) is the foundational algorithmic framework that the adaptive multipole algorithm builds upon. Understanding the classical FMM, its hierarchical decomposition, and O(N) complexity is essential to appreciate the improvements introduced by the adaptive method.

*How the paper uses it:* The adaptive algorithm extends and adapts the classical fast multipole method to achieve efficient computation for nonuniform particle distributions.

▶ [The Fast Multipole Method](https://www.youtube.com/watch?v=qMLIyZi8Sz0) — IBM Research · 56:33

### Hierarchical mesh refinement lecture *(prerequisite)*
Hierarchical mesh refinement is a key technique for adaptively subdividing the computational domain based on particle density, enabling the algorithm to focus computational effort where needed. This concept is critical to understanding how the adaptive algorithm reduces unnecessary computations and storage.

*How the paper uses it:* The paper introduces a hierarchical mesh refinement strategy that adapts to particle distribution to improve efficiency.

▶ [FEM Lecture 9: Grid Adaptivity](https://www.youtube.com/watch?v=zGH7DlllklI) — Dennis Wenzel · 1:10:10

### Multipole expansions error analysis talk *(prerequisite)*
Multipole expansions approximate distant particle interactions, and understanding their error bounds and accuracy guarantees is vital for assessing the reliability of the algorithm. This knowledge supports comprehension of the paper's rigorous analytical tools and error bounds.

*How the paper uses it:* The paper provides error bounds and analytical tools for multipole expansions and translations to ensure accuracy.

▶ [Alex Townsend: Fast Transforms Based on Asymptotic ...](https://www.youtube.com/watch?v=3dfn0yHrbv4) — CAM - Cornell Center for Applied Math Colloquium

### Hierarchical multipole expansions lecture
Hierarchical multipole expansions form the mathematical core of the algorithm, enabling efficient approximation of interactions between well-separated particle clusters. A detailed lecture on this topic helps solidify understanding of the multipole expansions used in the adaptive method.

*How the paper uses it:* The algorithm uses hierarchical multipole expansions to approximate distant interactions efficiently.

▶ [Multipole expansion of potential](https://www.youtube.com/watch?v=S1gm-n1cRzg) — Matthew Wright · 26:19 · 6 years ago
