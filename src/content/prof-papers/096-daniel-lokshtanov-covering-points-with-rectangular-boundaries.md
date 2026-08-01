---
title: "096 · Covering Points with Rectangular Boundaries — Daniel Lokshtanov"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-lokshantov"
source_hash: "a12d512d1058d0d5f502c4f6216f2fc7014df7625957c5df9e93d893399f8189"
sequence: 96
generator: "outreach-garden: managed"
---

# 096 · Covering Points with Rectangular Boundaries

## At a glance

- **Professor:** Daniel Lokshtanov
- **Institution:** Univ. of California - Santa Barbara
- **Paper:** [Covering Points with Rectangular Boundaries](https://arxiv.org/pdf/2607.08183)
- **Authors:** Madhumita Kundu, Daniel Lokshtanov, Soumi Nandi, Saket Saurabh, Kushal Singanporia
- **Year:** 2026

## Paper overview

This paper studies the problem of covering a set of points in the plane such that each point lies exactly on the boundary of chosen axis-parallel rectangles. It distinguishes between two variants: a discrete version where rectangles must be chosen from a given family, and a continuous version where rectangles can be freely placed. The authors prove hardness results for both variants but also develop a fixed-parameter tractable (FPT) algorithm for the continuous variant parameterized by the number of rectangles used.

### Why it matters

**Research problem:** The problem is to determine whether a given set of points in the plane can be covered by the boundaries of at most k axis-parallel rectangles. Two variants are studied: Boundary Covering with Discrete Axis-Parallel Rectangles (BCDAPR), where rectangles come from a fixed family, and Boundary Covering with Continuous Axis-Parallel Rectangles (BCCAPR), where rectangles can be placed freely.

**Why it matters:** Geometric covering problems are fundamental in computational geometry and have applications in areas like sensor networks, facility location, and pattern recognition. The boundary covering variant is more restrictive and less studied, especially for axis-parallel rectangles. Understanding the complexity and algorithmic tractability of these problems advances theoretical computer science and parameterized complexity, particularly in geometric settings.

**Key contributions:**

- Proved that BCDAPR is W[1]-hard parameterized by the number of rectangles k.
- Proved NP-completeness of boundary covering by axis-aligned L-shapes (BCCAPL) and by continuous axis-parallel rectangles (BCCAPR).
- Developed a fixed-parameter tractable algorithm for BCCAPR with running time 2^{O(k log k)} * n^{O(1)}.
- Introduced a novel reduction framework to Distinct Domain Monotone 2-CSP for solving the continuous boundary covering problem.
- Provided structural insights into how rectangles interact with point sets and how exceptional points are handled.

## About the professor

**Daniel Lokshtanov** — Professor & Vice Chair, Computer Science, Univ. of California - Santa Barbara.

Research interests: Algorithms and Theory

### Research links

- [Faculty/profile page](https://sites.cs.ucsb.edu/~daniello/)
- [Identity evidence](http://www.cs.ucsb.edu/people/faculty/lokshtanov)
- [Identity evidence](https://cs.ucsb.edu/people/faculty/daniel-lokshtanov)
- [Professor website](https://cs.ucsb.edu/~daniello/)
- [Resolved homepage](https://sites.cs.ucsb.edu/~daniello/index.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Covering Points with Rectangular Boundaries," start by building a strong foundation in parameterized complexity theory and fixed-parameter tractability algorithms, as these underpin the hardness results and algorithmic contributions. Next, study computational geometry covering problems to grasp the geometric context and challenges. Then, learn about constraint satisfaction problems (2-CSP), which are central to the paper's reduction framework. Finally, focus on the paper's core concept by watching the authors' own talk presenting their novel results and methods.

### Parameterized complexity theory *(prerequisite)*
This topic provides the theoretical framework to understand the complexity classifications and hardness results presented in the paper. It covers the notions of W[1]-hardness and parameterized reductions, which are crucial for grasping why certain variants of the problem are computationally difficult.

*How the paper uses it:* The paper proves W[1]-hardness for the discrete variant and uses parameterized reductions from known hard problems.

▶ [Thatchaphol Saranurak - Tutorial (Part 2): Expander ...](https://www.youtube.com/watch?v=8VtQskg34mk) — DIMACS CCICADA · 1:33:45

### Fixed-parameter tractability algorithms *(prerequisite)*
Understanding fixed-parameter tractability (FPT) is essential to appreciate the algorithmic contributions of the paper, especially the FPT algorithm developed for the continuous variant. This includes learning how NP-hard problems can be tackled efficiently for small parameters.

*How the paper uses it:* The paper develops an FPT algorithm for the continuous boundary covering problem parameterized by the number of rectangles.

▶ [18. Complexity: Fixed-Parameter Algorithms](https://www.youtube.com/watch?v=4q-jmGrmxKs) — MIT OpenCourseWare · 1:17:43

### Computational geometry covering problems *(prerequisite)*
This area provides background on geometric covering problems, their variants, and the challenges they pose. It helps situate the paper's problem within the broader context of computational geometry and understand the significance of boundary covering variants.

*How the paper uses it:* The paper studies boundary covering problems with axis-parallel rectangles, a less explored variant in computational geometry.

▶ [CENG773 - Computational Geometry - Lecture 1.1](https://www.youtube.com/watch?v=_vfCXMSLMAU) — METUOpenCourseWare · 46:55 · 11 years ago

### Constraint satisfaction problems 2-CSP *(prerequisite)*
Constraint satisfaction problems, especially 2-CSP, are key to understanding the paper's reduction framework and algorithmic approach. The paper reduces the continuous boundary covering problem to multiple instances of Distinct Domain Monotone 2-CSP, which can be solved in polynomial time.

*How the paper uses it:* The FPT algorithm reduces the problem to Distinct Domain Monotone 2-CSP instances for efficient solving.

▶ [Constraint Satisfaction Problems (CSPs) 2 - Definitions ...](https://www.youtube.com/watch?v=uj5wCcHsSlA) — Stanford Online · 19:12

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed presentation of their novel results, methods, and structural insights. It is the best resource to understand the specific contributions and the innovative reduction framework used in the paper.

*How the paper uses it:* This talk is by the authors and directly addresses the boundary covering problem and their FPT algorithm.

▶ [Borders and Boundaries](https://www.youtube.com/watch?v=RHT3B3k2W30) — OUresearch on YouTube · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on covering points with rectangular boundaries, start by building a foundation in computational geometry and geometric covering problems to grasp the spatial and shape concepts involved. Next, learn about parameterized complexity theory and fixed-parameter tractability (FPT) to understand the complexity classifications and algorithmic strategies used. Then, study constraint satisfaction problems (2-CSP) to see how the paper reduces the geometric problem to a CSP framework. Finally, explore the paper's core technique of discretization and skeleton guessing in geometry, which is central to their FPT algorithm.

### Computational geometry covering problems *(prerequisite)*
This topic introduces the basics of computational geometry, focusing on how geometric shapes can cover points or regions in the plane. Understanding these problems provides intuition about the spatial constraints and challenges when covering points with rectangles or other shapes.

*How the paper uses it:* The paper studies a geometric covering problem where points must lie on the boundaries of axis-parallel rectangles, so foundational knowledge of geometric covering is essential.

▶ [CENG773 - Computational Geometry - Lecture 1.1](https://www.youtube.com/watch?v=_vfCXMSLMAU) — METUOpenCourseWare · 46:55 · 11 years ago

### Parameterized complexity theory *(prerequisite)*
Parameterized complexity theory classifies computational problems based on parameters beyond input size, helping to understand when problems are tractable or hard. It introduces concepts like W[1]-hardness and fixed-parameter tractability, which are key to the paper's complexity results.

*How the paper uses it:* The paper proves W[1]-hardness and NP-completeness results and develops an FPT algorithm, making parameterized complexity theory fundamental to understanding these contributions.

▶ [Parameterized Algorithms Lecture 2: Kernels](https://www.youtube.com/watch?v=Od_hrV30Y3A) — Algorithms at University of Warsaw · 1:05:43

### Fixed-parameter tractability algorithms *(prerequisite)*
Fixed-parameter tractability (FPT) algorithms solve hard problems efficiently for small parameter values by isolating combinatorial explosion to the parameter. Learning how FPT algorithms work, including branching and kernelization, helps grasp the paper's algorithmic approach.

*How the paper uses it:* The paper develops an FPT algorithm for the continuous variant of the boundary covering problem parameterized by the number of rectangles k.

▶ [18. Complexity: Fixed-Parameter Algorithms](https://www.youtube.com/watch?v=4q-jmGrmxKs) — MIT OpenCourseWare · 1:17:43

### Constraint satisfaction problems 2-CSP *(prerequisite)*
Constraint Satisfaction Problems (CSPs) involve assigning values to variables under constraints. The 2-CSP variant restricts constraints to pairs of variables. Understanding 2-CSPs is crucial because the paper reduces the geometric problem to instances of Distinct Domain Monotone 2-CSP, which can be solved efficiently.

*How the paper uses it:* The paper's FPT algorithm encodes the boundary covering problem as multiple instances of Distinct Domain Monotone 2-CSP.

▶ [Constraint Satisfaction Problems (CSPs) 2 - Definitions ...](https://www.youtube.com/watch?v=uj5wCcHsSlA) — Stanford Online · 19:12
