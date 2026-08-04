---
title: "199 · A Practical Algorithm for Knot Factorisation — Eric Sedgwick"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-sedgwick"
source_hash: "9aa4f3660b5885f1a64302ae09889af1f2be53b01d7ec7d26e8573ea8e5680bf"
sequence: 199
generator: "outreach-garden: managed"
---

# 199 · A Practical Algorithm for Knot Factorisation

## At a glance

- **Professor:** Eric Sedgwick
- **Institution:** DePaul University
- **Paper:** [A Practical Algorithm for Knot Factorisation](https://arxiv.org/abs/2504.03942)
- **Authors:** Alexander He, Eric Sedgwick, Jonathan Spreer
- **Year:** 2025

## Paper overview

This paper presents a practical algorithm to compute the prime factorisation of knots, which are loops embedded in 3-dimensional space. The algorithm uses a new representation called edge-ideal triangulations and leverages the tool of crushing normal surfaces to efficiently decompose knots into prime components. The implementation works well on knots of reasonable size, including complex knots with many crossings.

### Why it matters

**Research problem:** Developing an algorithm that can practically compute the prime factorisation of a knot, i.e., decomposing a knot into its unique prime summands, and providing complexity results and software implementation for this problem.

**Why it matters:** Knot factorisation is a fundamental problem in knot theory with applications in 3-manifold topology and computational topology. Prior to this work, no practical algorithms with software implementations existed for this problem, despite its theoretical importance and connections to complexity classes NP and coNP.

**Key contributions:**

- Introduction of edge-ideal triangulations as a combinatorial representation of knots.
- Development of a practical algorithm (Algorithm 23) for knot factorisation using crushing of normal surfaces.
- Proof that the k-Summands problem is in NP, providing an alternative proof that composite knot recognition is in NP.
- Implementation of the algorithm in Regina, demonstrating practical performance on knots up to 19 crossings and composite knots with up to 152 crossings.
- Theoretical results on the existence of suitable quad vertex normal 2-spheres for decomposition.

## About the professor

**Eric Sedgwick** — Associate Professor, School of Computing, DePaul University.

Research interests: Computational Topology

### Research links

- [Faculty/profile page](https://www.depaul.edu/faculty/eric-sedgwick)
- [Identity evidence](https://www.cdm.depaul.edu/about/Pages/People/facultyinfo.aspx?fid=121)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper 'A Practical Algorithm for Knot Factorisation,' start with foundational knowledge on 3-manifold triangulations and normal surface theory, which provide the mathematical framework for representing knots and decomposing them via surfaces. Then, explore the core concept of knot prime factorisation to grasp the problem the paper addresses. Finally, delve into the paper authors' own talk to gain direct insight into their novel algorithm and representation, including edge-ideal triangulations and crushing normal surfaces.

### 3-manifold triangulations *(prerequisite)*
3-manifold triangulations are fundamental for representing the 3-dimensional spaces in which knots reside. Understanding how manifolds can be decomposed into simplicial complexes is essential background for the paper's use of edge-ideal triangulations and crushing operations.

*How the paper uses it:* The paper encodes knots as edge-ideal triangulations, a special kind of triangulation of the 3-sphere.

▶ [Triangulations of manifolds - Ciprian Manolescu](https://www.youtube.com/watch?v=UWcaUanYEEM) — Stony Brook Mathematics · 1:01:52

### Normal surface theory *(prerequisite)*
Normal surface theory provides the key mathematical tool for decomposing knots via surfaces embedded in triangulations. It underpins the algorithm's use of quad vertex normal 2-spheres and the crushing operation to factor knots.

*How the paper uses it:* The algorithm relies on normal surface theory and crushing normal surfaces to iteratively decompose knots.

▶ [Joel Hass - Lecture 1 - Algorithms and complexity in the theory ...](https://www.youtube.com/watch?v=_hIG7O7bHhc) — Institut Henri Poincaré · 1:33:46

### Knot prime factorisation *(prerequisite)*
Knot prime factorisation is the main problem the paper solves: decomposing knots into their unique prime summands. Understanding this concept is crucial to appreciate the significance and goals of the algorithm presented.

*How the paper uses it:* The paper presents a practical algorithm to compute the prime factorisation of knots.

▶ [Alexander Stoimenov: Knotscape and knot tables](https://www.youtube.com/watch?v=2_33U4Rdx5c) — Science and Beyond · 47:52

### Paper authors talk *(the paper's own talk)*
A direct talk from the authors or closely related researchers provides the most precise and insightful explanation of the novel algorithm, the new edge-ideal triangulations representation, and the crushing technique used in the paper. This talk will give advanced readers a deep understanding of the paper's contributions and context.

*How the paper uses it:* Direct insight from the authors on their new algorithm and representation.

▶ [Knot Diagrams and Sum-of-Squares Matrix Decomposability ...](https://www.youtube.com/watch?v=ynEykChXce0) — Science and Beyond · 47:11

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the practical algorithm for knot factorisation presented in the paper, start by building foundational knowledge of 3-manifold triangulations and normal surface theory, which provide the geometric and topological framework for representing knots and decomposing them. Then, learn about knot prime factorisation to grasp the main problem the paper solves. Finally, explore the key operations of crushing normal surfaces and the novel edge-ideal triangulations introduced by the authors to see how the algorithm efficiently decomposes knots into prime components.

### 3-manifold triangulations *(prerequisite)*
3-manifold triangulations are ways to break down 3-dimensional spaces into simpler building blocks called tetrahedra. This representation is fundamental because knots live embedded in these 3D spaces, and understanding their structure requires understanding these triangulations.

*How the paper uses it:* The paper encodes knots as edge-ideal triangulations, a special kind of triangulation of the 3-sphere, to represent knots combinatorially.

▶ [Jessica Purcell: Triangulations, geometry and knots](https://www.youtube.com/watch?v=x4mzyor9oBI) — Sydney Mathematical Research Institute - SMRI · 14:18

### Normal surface theory *(prerequisite)*
Normal surface theory studies surfaces embedded in triangulated 3-manifolds that intersect tetrahedra in simple, standard pieces. This theory allows algorithms to detect and manipulate surfaces that reveal topological features, such as decompositions of knots.

*How the paper uses it:* The algorithm uses normal surface theory to find special 2-spheres intersecting the knot, which are then crushed to factor the knot.

▶ [Joel Hass - Lecture 1 - Algorithms and complexity in the theory ...](https://www.youtube.com/watch?v=_hIG7O7bHhc) — Institut Henri Poincaré · 1:33:46

### Knot prime factorisation *(prerequisite)*
Knot prime factorisation is the process of decomposing a knot into simpler 'prime' knots that cannot be further decomposed. Understanding this concept is essential to grasp the goal of the paper's algorithm.

*How the paper uses it:* The main problem solved by the paper is computing the unique prime factorisation of knots.

▶ [The Insane Math Of Knot Theory](https://www.youtube.com/watch?v=8DBhTXM_Br4) — Veritasium · 35:21

### Crushing normal surfaces
Crushing is an operation that simplifies a triangulation by collapsing along certain normal surfaces, reducing complexity and revealing structural decompositions. It is a key step in the algorithm to break down knots into prime factors.

*How the paper uses it:* The algorithm repeatedly crushes quad vertex normal 2-spheres intersecting the knot to reduce triangulation size and expose prime summands.

▶ [(GT)^2 - Alex He - Local crushing](https://www.youtube.com/watch?v=4GNTrEkqstc) — Graduate Talks on Geometry and Topology · 3 years ago
