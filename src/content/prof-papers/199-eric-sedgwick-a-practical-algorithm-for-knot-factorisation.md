---
title: "199 · A Practical Algorithm for Knot Factorisation — Eric Sedgwick"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-sedgwick"
source_hash: "e6a40e064aa696a3d55abef4d6cfd7280a822bb7afcf49358c1017e3d30420ac"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of engagement with the paper "A Practical Algorithm for Knot Factorisation." The beginner project introduces you to the concept of edge-ideal triangulations and normal surfaces by visualizing and manipulating simple examples. The intermediate project has you run and extend the authors' implementation to factorize knots and compare performance on smaller knots. The advanced project tackles a stated limitation by exploring heuristic methods to convert edge-ideal triangulations back into knot diagrams, potentially opening new practical applications.

### Beginner — Visualize and Explore Edge-Ideal Triangulations
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that loads simple edge-ideal triangulations of knots and highlights normal 2-spheres intersecting the ideal loop twice. The tool allows basic exploration of how crushing these surfaces reduces triangulation size and affects the knot representation.

**Why it shows you understood the paper:** This project demonstrates you understand the core combinatorial representation (edge-ideal triangulations) and the crushing operation on normal surfaces, key concepts introduced in the paper.

**Grounded in:** Introduction of edge-ideal triangulations as a combinatorial representation of knots; Analysis of how crushing affects the ideal loop and triangulation complexity.

**Tech stack:** TypeScript, React, D3.js

**Data:** You create or simulate small example edge-ideal triangulations based on descriptions in the paper, as no public datasets are provided.

**Build it:**

1. Read the paper sections describing edge-ideal triangulations and normal surfaces to understand their structure.
2. Design a simple JSON format to represent small edge-ideal triangulations and normal 2-spheres intersecting the ideal loop.
3. Build a React app that visualizes the triangulation as a graph and highlights the ideal loop and normal surfaces.
4. Implement interactive controls to simulate crushing a selected normal 2-sphere, updating the visualization accordingly.
5. Document the visualization with explanations linking to the paper's concepts.

**Ships as:** An interactive web app repository with a README explaining edge-ideal triangulations, normal surfaces, and crushing, including example visualizations.

**Stretch goal:** Add animation to show step-by-step crushing sequences and their effect on triangulation size.

### Intermediate — Run and Extend the Regina Implementation for Knot Factorisation
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' Regina-based implementation of the knot factorisation algorithm on knots up to 19 crossings. You then implement a simple baseline that counts crossings or uses a naive decomposition heuristic and compare runtime and factorisation results.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the algorithm's practical performance, and critically evaluate it against a baseline, demonstrating comprehension of the core algorithm and its experimental validation.

**Grounded in:** Implementation of the algorithm in Regina, demonstrating practical performance on knots up to 19 crossings; The algorithm successfully computes prime factorisations of knots represented as edge-ideal triangulations.

**Tech stack:** Python 3.11, Regina software, C++ (optional for extensions)

**Data:** Use prime knots from the census up to 19 crossings as described in the paper; these are publicly known knot datasets substituted for the paper's input.

**Build it:**

1. Clone the authors' repository https://github.com/AlexHe98/idealedge and set up Regina as per instructions.
2. Run the knot factorisation algorithm on sample knots from the census up to 19 crossings.
3. Implement a simple baseline heuristic (e.g., crossing number based or naive decomposition) in Python or C++.
4. Compare the runtime and factorisation outputs between the baseline and the authors' algorithm.
5. Write a report summarizing the comparison and insights on algorithm efficiency.

**Verified links from the paper:**

- <https://github.com/AlexHe98/idealedge> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run the authors' implementation, baseline code, comparison results, and a README explaining the experiment.

**Stretch goal:** Add visualization of factorisation steps using Regina's output or export formats.

### Advanced — Heuristic Conversion from Edge-Ideal Triangulations to Knot Diagrams
*Effort: 3-4 weeks*

You develop heuristic or algorithmic methods to convert edge-ideal triangulations back into knot diagrams, addressing a key limitation noted in the paper. You implement and test your approach on small examples and evaluate its practicality and correctness.

**Why it shows you understood the paper:** This project tackles a stated open problem from the paper, demonstrating deep engagement with the representation and its limitations, and contributes a novel practical tool that could facilitate broader applications of the authors' algorithm.

**Grounded in:** Converting edge-ideal triangulations back into knot diagrams is highly nontrivial and beyond the scope of the paper; future direction includes improving methods to convert edge-ideal triangulations back into knot diagrams.

**Tech stack:** Python 3.11, NetworkX, Regina software (for input/output)

**Data:** Use small edge-ideal triangulations from the authors' code or simulated examples as input for conversion.

**Build it:**

1. Study the paper's description of edge-ideal triangulations and knot diagrams to understand structural differences.
2. Analyze the Regina output format for edge-ideal triangulations to extract combinatorial data.
3. Design heuristics to reconstruct planar knot diagrams from triangulation data, possibly using planar graph embedding techniques.
4. Implement the heuristics in Python using NetworkX for graph operations.
5. Test the conversion on small knots and validate correctness by comparing known knot invariants or diagrams.
6. Document limitations, potential improvements, and future work.

**Verified links from the paper:**

- <https://github.com/AlexHe98/idealedge> — released by the paper's authors

**Ships as:** A repository with code implementing the conversion heuristics, test cases, and a detailed README discussing the approach and results.

**Stretch goal:** Integrate the conversion tool with the Regina implementation to provide end-to-end factorisation and visualization.
