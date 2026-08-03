---
title: "169 · The hidden subgroup problem for infinite groups — Greg Kuperberg"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-greg-kuperberg"
source_hash: "fc2b2bdb443b8caf451b87331c36af16e54d75359790d7c55050a82c1223707a"
sequence: 169
generator: "outreach-garden: managed"
---

# 169 · The hidden subgroup problem for infinite groups

## At a glance

- **Professor:** Greg Kuperberg
- **Institution:** Univ. of California - Davis
- **Paper:** [The hidden subgroup problem for infinite groups](https://arxiv.org/abs/2507.18499)
- **Authors:** Greg Kuperberg
- **Year:** 2025

## Paper overview

This paper studies the hidden subgroup problem (HSP) in the context of infinite discrete groups, extending classical results from finite groups and Shor's algorithm. It establishes both hardness results and quantum algorithms for various infinite groups, including the additive group of rational numbers and free groups. The work also explores reductions to lattice problems and generalizes known quantum algorithms to cases where the hidden subgroup has infinite index.

### Why it matters

**Research problem:** Understanding the computational complexity and quantum algorithmic solvability of the hidden subgroup problem (HSP) for infinite discrete groups, including abelian and non-abelian cases, and how encoding and group structure affect hardness and algorithmic approaches.

**Why it matters:** HSP is a central framework in quantum computing that underlies famous algorithms like Shor's factoring algorithm. Extending HSP to infinite groups broadens the theoretical understanding of quantum algorithms and their limitations, and connects to important problems in computational complexity and lattice-based cryptography.

**Key contributions:**

- Proves that the hidden subgroup existence problem (HSEP) in the additive group of rationals Q is NP-complete, assuming either an integer factoring oracle or a number theory conjecture.
- Shows that the normal hidden subgroup existence problem (NHSEP) in finitely generated non-abelian free groups is NP-complete.
- Reduces a version of the unique short vector problem (uSVP) to HSP in Z^k with pseudo-polynomial query cost.
- Generalizes the Shor-Kitaev algorithm to solve HSP in Z^k for arbitrary hidden subgroups, including those with infinite index, in quantum polynomial time.
- Outlines a stretched exponential time quantum algorithm for the abelian hidden shift problem (AHShP) in finitely generated virtually abelian groups.

## About the professor

**Greg Kuperberg** — Professor, Mathematics Department, Univ. of California - Davis.

Research interests: Quantum algebra, geometric topology, quantum information theory, convex geometry, combinatorics

### Research links

- [Faculty/profile page](https://www.math.ucdavis.edu/~greg)
- [Resolved homepage](https://www.math.ucdavis.edu/people/general-profile?fac_id=greg)
- [Google Scholar](https://scholar.google.com/citations?user=OrKdXCgAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand Greg Kuperberg's 2025 paper on the hidden subgroup problem (HSP) for infinite groups, start with foundational knowledge in infinite discrete group theory and lattice problems, as these underpin the complexity and algorithmic reductions in the paper. Next, build familiarity with quantum complexity theory to grasp the hardness and query complexity results. Finally, focus on the core concept of the hidden subgroup problem itself, prioritizing the author's own talks on infinite groups and related quantum algorithms to directly connect with the paper's contributions.

### Infinite discrete groups theory *(prerequisite)*
Understanding the structure and properties of infinite discrete groups is essential for grasping the paper's extension of HSP from finite to infinite groups. This includes knowledge of finitely generated free groups and abelian groups, which are central to the paper's hardness and algorithmic results.

*How the paper uses it:* The paper studies HSP in infinite discrete groups such as the additive group of rationals and free groups, requiring foundational group theory.

▶ [Dr. Subhadip Dey | Irreducible discrete subgroups of G × G ...](https://www.youtube.com/watch?v=fW8-uUri6_4) — INI Seminar Room 1 · 59:48

### Lattice problems and reductions *(prerequisite)*
Lattice theory and lattice-based computational problems like the unique short vector problem (uSVP) are critical to understanding the paper's reductions from HSP to lattice problems and the use of lattice reduction algorithms like LLL in quantum algorithms.

*How the paper uses it:* The paper reduces uSVP to HSP in Z^k and generalizes Shor-Kitaev algorithms using lattice reduction techniques.

▶ [An Efficient Quantum Algorithm for Lattice Problems Achieving ...](https://www.youtube.com/watch?v=K5Apl_qCnDA) — Simons Institute for the Theory of Computing · 1:07:21

### Quantum complexity theory *(prerequisite)*
Quantum complexity theory provides the framework to analyze the computational hardness and query complexity of HSP variants, including NP-completeness results and quantum polynomial-time algorithms presented in the paper.

*How the paper uses it:* The paper proves NP-completeness and quantum query complexity bounds for HSP in infinite groups, relying on quantum complexity theory concepts.

▶ [John Watrous - Quantum Complexity Theory (Part 1) - CSSQI ...](https://www.youtube.com/watch?v=fc12NHko8sw) — Institute for Quantum Computing · 57:12

### Hidden subgroup problem quantum algorithms
This concept covers the quantum algorithmic framework underlying the paper's results, including generalizations of Shor's algorithm and quantum polynomial-time solutions for HSP in infinite abelian groups. Understanding these algorithms is key to appreciating the paper's contributions.

*How the paper uses it:* The paper generalizes Shor-Kitaev algorithms and outlines quantum algorithms for HSP and AHShP in infinite groups.

▶ [The Hidden Subgroup Problem for Infinite Groups](https://www.youtube.com/watch?v=xD1BMZrAcBI) — Simons Institute for the Theory of Computing · 40:21

### Paper author talk *(the paper's own talk)*
Direct presentations by Greg Kuperberg provide the most authoritative and detailed exposition of the paper's results, methods, and open problems, allowing an advanced reader to engage deeply with the material as intended by the author.

*How the paper uses it:* Greg Kuperberg's talks specifically address the hidden subgroup problem for infinite groups, directly relating to the paper.

▶ [QIP2021 | The Hidden Subgroup Problem for Infinite Groups (Greg Kuperberg)](https://www.youtube.com/watch?v=HdUiO78bVdI) — Munich Center for Quantum Science & Technology · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the hidden subgroup problem (HSP) for infinite groups, starting with basic group theory and lattice problems, then covering quantum complexity theory, and finally focusing on the HSP and its quantum algorithms as studied in the paper. The order is designed to build intuition progressively, from algebraic structures through computational hardness to quantum algorithmic frameworks relevant to the paper's contributions.

### Infinite discrete groups theory *(prerequisite)*
Begin by understanding what infinite discrete groups are, including examples like free groups and abelian groups. This foundational group theory knowledge is essential to grasp the types of groups the paper studies and the structure of hidden subgroups within them.

*How the paper uses it:* The paper studies the hidden subgroup problem specifically in infinite discrete groups such as the additive group of rationals and free groups.

▶ [Cyclic Group in Group Theory Explained | Discrete ...](https://www.youtube.com/watch?v=vQVk2Cq2cqw) — THE GATEHUB · 29:57

### Lattice problems and reductions *(prerequisite)*
Learn about lattices, lattice bases, and key computational problems like the shortest vector problem (SVP). Understanding these concepts is crucial because the paper reduces certain HSP instances to lattice problems and uses lattice reduction techniques in its quantum algorithms.

*How the paper uses it:* The paper reduces unique short vector problems to HSP in Z^k and uses lattice reduction algorithms like LLL in its quantum algorithmic approach.

▶ [Lecture #1 part 1: Lattices and Hard Lattice Problems | Joseph ...](https://www.youtube.com/watch?v=j30GwMRXWek) — IAS | PCMI Park City Mathematics Institute · 9:21

### Quantum complexity theory *(prerequisite)*
Gain a basic understanding of quantum complexity theory, including what it means for a problem to be NP-complete and the notion of quantum query complexity. This background helps in appreciating the paper's hardness results and the complexity of quantum algorithms for HSP.

*How the paper uses it:* The paper establishes NP-completeness and quantum query complexity lower bounds for HSP variants in infinite groups.

▶ [John Watrous - Quantum Complexity Theory (Part 1) - CSSQI ...](https://www.youtube.com/watch?v=fc12NHko8sw) — Institute for Quantum Computing · 57:12

### Hidden subgroup problem quantum algorithms
Explore the hidden subgroup problem as a unifying framework for quantum algorithms, including how quantum algorithms like Shor's solve HSP in finite groups. This section builds intuition for the quantum algorithmic techniques generalized in the paper to infinite groups.

*How the paper uses it:* The paper generalizes the Shor-Kitaev quantum algorithm to solve HSP in infinite abelian groups and outlines quantum algorithms for related problems.

▶ [#40 Hidden Subgroup Problem | Part 1 | Quantum Algorithms ...](https://www.youtube.com/watch?v=sllnCedxE2o) — NPTEL-NOC IITM · 13:35

### Paper author talk
Finally, watch the author's own presentation to see a direct explanation of the paper's results, methods, and open questions. This talk ties together the foundational concepts and shows their application to the infinite group HSP.

*How the paper uses it:* Greg Kuperberg presents the hidden subgroup problem for infinite groups, directly discussing the paper's main results and techniques.

▶ [The hidden subgroup problem for ℤ for infinite-index subgroups](https://www.youtube.com/watch?v=kDTAsTixR9I) — Fields Institute · 50:59
