---
title: "103 · Angular Constraints on Planar Frameworks — Meera Sitharam"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-meera-sitharam"
source_hash: "80a0999f36ba862546423709babe107f38a23fb607629ccca5eebb59588fdff1"
sequence: 103
generator: "outreach-garden: managed"
---

# 103 · Angular Constraints on Planar Frameworks

## At a glance

- **Professor:** Meera Sitharam
- **Institution:** University of Florida
- **Paper:** [Angular Constraints on Planar Frameworks](https://doi.org/10.1016/j.dam.2026.03.009)
- **Authors:** Sean Dewar, Georg Grasegger, Anthony Nixon, Zvi Rosen, Meera Sitharam, David Urizar, William Sims
- **Year:** 2026

## Paper overview

This paper studies the rigidity of planar frameworks when constraints are placed on the angles between edges, rather than just on distances or slopes. It develops mathematical tools to characterize when such angle-constrained frameworks are rigid, providing matrix-based and combinatorial characterizations, and connects these to algebraic matroids. The work has applications in multi-agent formation control and computer-aided design.

### Why it matters

**Research problem:** Characterizing rigidity of planar frameworks under angle constraints, specifically determining when an angle constraint system is rigid such that every nontrivial motion alters at least one fixed angle.

**Why it matters:** Angle constraints are important in applications like multi-agent formation control and geometric constraint solving in CAD software. Existing combinatorial characterizations for distance or slope constraints do not directly apply to angle constraints, which are more complex and less understood.

**Key contributions:**

- Matrix-based characterization of infinitesimal angle rigidity (Theorem 2.12).
- Combinatorial characterization of minimal angle rigidity for two-color edge-colored graphs (Theorem 4.4).
- Proof of necessary Maxwell-type sparsity conditions for minimal angle rigidity (Lemma 3.1).
- Definition and analysis of extension moves (0-extension and color-preserving 1-extension) that preserve independence (Lemmas 4.1 and 4.2).
- Construction of an algebraic matroid for angle rigidity using complex function field extensions (Definition 5.1 and Theorem 5.6).

## About the professor

**Meera Sitharam** — Department of Computer & Information Science & Engineering, University of Florida.

### Research links

- [Faculty/profile page](http://www.cise.ufl.edu/~sitharam)
- [Resolved homepage](https://cise.ufl.edu/~sitharam/index.html)
- [Lab website](https://cise.ufl.edu/~sitharam/group.html)
- [Google Scholar](https://scholar.google.com/citations?user=XWi_mZsAAAAJ&hl=en&oi=ao)
- [Social profile](https://twitter.com/geoplexity?ref_src=twsrc%5Etfw)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Rigidity theory and matroids
**The paper assumes:** rigidity theory of frameworks, combinatorial matroid theory, algebraic matroids, and geometric constraint systems
**Already in this field?** Skip this entirely if you already have a solid understanding of rigidity theory and matroid theory as applied to geometric frameworks.

This background prepares you to understand the combinatorial and algebraic foundations of rigidity theory and matroids, which are central to the paper's characterization of angle rigidity in planar frameworks. The rigorous course offers a deep, structured university-level treatment of graph theory fundamentals relevant to rigidity and matroids, while the fast track provides a concise, intuition-driven introduction to linear algebra concepts that underpin the matrix and algebraic methods used in the paper. Choose the course for thorough mastery or the fast track for a quick conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.217 Graph Theory and Additive Combinatorics, Fall 2019](https://www.youtube.com/playlist?list=PLUl4u3cNGP62qauV_CpT1zKaGG_Vj5igX) — MIT OpenCourseWare · 26 videos · 33.9h across 26 episodes

**Watch only this:** Lectures 1-5, about 6.5 hours — covering the bridge between graph theory and additive combinatorics, forbidden subgraphs, and algebraic constructions relevant to rigidity theory.

*Why it unblocks this paper:* MIT 18.217 Graph Theory and Additive Combinatorics covers graph theory concepts, including forbidden subgraphs and combinatorial structures, which are foundational for understanding rigidity matroids and sparsity conditions used in the paper's combinatorial characterizations.

*If you want all of it:* 33.9 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) — 3Blue1Brown · 16 videos · 3.0h across 16 episodes

**Watch only this:** Episodes 1-7, about 1.3 hours — covering vectors, linear combinations, transformations, matrix multiplication, determinants, inverses, and null spaces essential for the paper's matrix-based results.

*Why it unblocks this paper:* 3Blue1Brown's Essence of linear algebra provides a visual and intuitive foundation for understanding matrices, rank, and linear transformations, which are crucial for grasping the angle-rigidity matrix and algebraic matroid constructions in the paper.

*If you want all of it:* 3.0 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Angular Constraints on Planar Frameworks," start with foundational knowledge in rigidity theory, matroid theory, and algebraic geometry as these underpin the paper's mathematical framework. Then explore geometric constraint systems to see the broader context of angle constraints. Finally, focus on the paper's core concept of angle rigidity matrix characterization and the authors' own talk if available, to grasp their novel contributions and results.

### Rigidity theory lecture *(prerequisite)*
Rigidity theory provides the fundamental mathematical framework for understanding when geometric structures are rigid or flexible. This background is essential to appreciate the paper's focus on angle constraints as a new type of rigidity condition beyond classical distance or slope constraints.

*How the paper uses it:* The paper extends classical rigidity theory by introducing angle constraints and analyzing their rigidity properties.

▶ [Lecture 18 - Graduate Course on Combinatorial and ...](https://www.youtube.com/watch?v=PTvOeVl_t5A) — Fields Institute · 59:27

### Matroid theory lecture *(prerequisite)*
Matroid theory abstracts the notion of independence and is crucial for understanding the algebraic matroid framework developed in the paper to characterize angle rigidity. A solid grasp of matroids will clarify the combinatorial and algebraic aspects of the authors' results.

*How the paper uses it:* The paper constructs an algebraic matroid for angle rigidity, linking combinatorial independence with algebraic properties.

▶ [Lecture 1 . Matroids (Federico Ardila)](https://www.youtube.com/watch?v=pe5MaEugAwg) — Federico Ardila · 23:54

### Algebraic geometry in rigidity talk *(prerequisite)*
Algebraic geometry concepts such as function field extensions and algebraic matroids underpin the paper's approach to angle rigidity. Understanding these ideas will help in comprehending the algebraic characterization and proofs presented.

*How the paper uses it:* The paper uses complex function field extensions to define an algebraic matroid for angle rigidity.

▶ [What is algebraic geometry?](https://www.youtube.com/watch?v=MflpyJwhMhQ) — Aleph 0 · 2 years ago

### Geometric constraint systems seminar *(prerequisite)*
Geometric constraint systems provide the applied context for angle constraints, especially in CAD and multi-agent formation control. This seminar-level content situates the paper's theoretical contributions within practical and broader research challenges.

*How the paper uses it:* The paper addresses angle constraints as a key type of geometric constraint relevant to CAD and formation control.

▶ [Graphical Models: A Combinatorial and Geometric Perspective](https://www.youtube.com/watch?v=wkEGZjHPjXA) — Fields Institute · 1:04:50

### Angle rigidity matrix characterization
The angle-rigidity matrix is the central tool introduced in the paper to characterize infinitesimal angle rigidity via a rank condition. Understanding matrix rigidity and related linear algebraic methods is critical to grasp the paper's main technical results.

*How the paper uses it:* Theorem 2.12 characterizes infinitesimal angle rigidity through the rank of the angle-rigidity matrix.

▶ [Matrix Rigidity](https://www.youtube.com/watch?v=wMcv9QVskFw) — Simons Institute for the Theory of Computing · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on angular constraints in planar frameworks, start by building a foundational grasp of rigidity theory and matroid theory, which underpin the paper's mathematical framework. Then, explore geometric constraint systems to see how angle constraints fit into broader constraint solving contexts. Finally, focus on the paper's core method: the angle rigidity matrix characterization, which is central to their infinitesimal rigidity results.

### Rigidity theory lecture *(prerequisite)*
Rigidity theory studies when a structure made of fixed-length bars and joints is rigid or flexible. Understanding the basics of frameworks, infinitesimal rigidity, and global rigidity provides the foundation for grasping how angle constraints affect rigidity.

*How the paper uses it:* The paper extends classical rigidity theory by focusing on angle constraints rather than just distances or slopes.

▶ [The rigidity of frameworks (Lecture 1)](https://www.youtube.com/watch?v=C_ZtcRlgNUM) — Fields Institute · 5 years ago

### Matroid theory lecture *(prerequisite)*
Matroid theory generalizes the notion of independence from linear algebra and graph theory. It provides a combinatorial framework to understand dependencies in geometric constraint systems, which is crucial for the algebraic matroid characterization of angle rigidity in the paper.

*How the paper uses it:* The paper constructs an algebraic matroid for angle rigidity to characterize minimal angle-rigid graphs.

▶ [Lecture 1 . Matroids (Federico Ardila)](https://www.youtube.com/watch?v=pe5MaEugAwg) — Federico Ardila · 23:54

### Geometric constraint systems seminar *(prerequisite)*
Geometric constraint systems involve specifying conditions like distances, angles, and incidences to define shapes. This seminar-level introduction helps place angle constraints in the broader context of constraint solving, especially relevant for CAD and multi-agent formation control.

*How the paper uses it:* The paper addresses angle constraints as a less-understood but important type of geometric constraint in applications.

▶ [Graphical Models: A Combinatorial and Geometric Perspective](https://www.youtube.com/watch?v=wkEGZjHPjXA) — Fields Institute · 1:04:50

### Algebraic geometry in rigidity talk *(prerequisite)*
Algebraic geometry provides tools to study solution sets of polynomial equations, which underpin algebraic matroids and function field extensions used in the paper. A basic understanding helps appreciate the algebraic characterization of angle rigidity.

*How the paper uses it:* The paper uses algebraic matroids via complex function field extensions to characterize angle rigidity.

▶ [What is algebraic geometry?](https://www.youtube.com/watch?v=MflpyJwhMhQ) — Aleph 0 · 2 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for the paper "Angular Constraints on Planar Frameworks." The beginner project helps you concretely understand the angle-rigidity matrix and its rank condition by implementing and visualizing it on small example graphs. The intermediate project involves reimplementing the core combinatorial characterization of minimal angle rigidity for two-color graphs, verifying the extension moves, and enumerating small rigid graphs. The advanced project tackles an open future direction by extending the combinatorial characterization beyond two colors, exploring new extension moves, and experimenting with their impact on rigidity.

### Beginner — Angle-Rigidity Matrix and Rank Computation for Small Planar Frameworks
*Effort: a weekend, ~8 hours*

You build a Python script that constructs the angle-rigidity matrix R(G, c, p) for small planar frameworks with two edge colors, given vertex coordinates and edge colorings. You compute the matrix rank numerically and verify the rank condition from Theorem 2.12 for infinitesimal angle rigidity on example graphs such as bichromatic K4. You visualize the framework and highlight edges and angles to connect the matrix entries to the geometry.

**Why it shows you understood the paper:** This project demonstrates you understand the core matrix-based characterization of infinitesimal angle rigidity and how the angle-rigidity matrix encodes geometric constraints. A professor would see you can translate the paper's abstract linear algebraic conditions into concrete computations and visualizations.

**Grounded in:** Infinitesimal angle rigidity is characterized by the rank condition rank R(G, c, p) = 2|V| + |C| - 4 (Theorem 2.12).

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** You create small synthetic planar frameworks with 4-6 vertices and two edge colors, e.g., bichromatic K4, as described in the paper's examples.

**Build it:**

1. Implement data structures to represent planar frameworks with vertex coordinates and two-color edge sets.
2. Implement the construction of the angle-rigidity matrix R(G, c, p) following the paper's Definition 2.9 and related formulas.
3. Compute the numerical rank of R(G, c, p) using NumPy's linear algebra functions.
4. Verify the rank condition for infinitesimal angle rigidity on example graphs such as bichromatic K4.
5. Visualize the framework with Matplotlib, showing vertices, edges colored by their color class, and annotate angles constrained.
6. Write a README explaining the connection between the matrix, rank condition, and rigidity.

**Ships as:** A Python script and Jupyter notebook that build and analyze the angle-rigidity matrix for small example graphs, with visualizations and explanations.

**Stretch goal:** Add interactive visualization with sliders to move vertices and observe changes in matrix rank and rigidity status.

### Intermediate — Reimplementation and Enumeration of Minimal Angle-Rigid Two-Color Graphs
*Effort: 2 weekends, ~20 hours*

You implement the combinatorial characterization of minimal angle rigidity for two-color edge-colored graphs from Theorem 4.4. This includes coding the 0-extension and color-preserving 1-extension moves to generate minimal angle-rigid graphs starting from bichromatic K4. You enumerate all such graphs up to 7 vertices and verify the Maxwell-type sparsity condition from Lemma 3.1. You compare your enumeration counts to the computational results reported in the paper.

**Why it shows you understood the paper:** This project shows you grasp the combinatorial core of the paper's contribution, can implement the extension moves that preserve rigidity, and can computationally reproduce key enumeration results. It evidences your ability to translate abstract combinatorial theorems into algorithms and verify structural properties.

**Grounded in:** Minimal angle-rigid graphs with two colors correspond exactly to graphs constructed from bichromatic K4 by sequences of 0- and color-preserving 1-extensions (Theorem 4.4). Necessary Maxwell-type sparsity conditions are given by Lemma 3.1.

**Tech stack:** Python 3.11, NetworkX, NumPy, Matplotlib

**Data:** Synthetic edge-colored graphs generated by your implementation of extension moves, starting from bichromatic K4 as base.

**Build it:**

1. Implement data structures for two-color edge-colored graphs using NetworkX.
2. Implement the 0-extension and color-preserving 1-extension moves as described in Lemmas 4.1 and 4.2.
3. Write a generator that produces all minimal angle-rigid graphs up to 7 vertices by applying sequences of these extension moves starting from bichromatic K4.
4. Implement checks for the Maxwell-type sparsity condition |E(H)| ≤ 2|V(H)| + χ(H) - 4 on all subgraphs H.
5. Enumerate and count all minimal angle-rigid graphs up to 7 vertices and compare counts to those reported in the paper.
6. Visualize representative graphs and document the combinatorial characterization and enumeration results.

**Ships as:** A Python package that generates and enumerates minimal angle-rigid two-color graphs, verifies sparsity conditions, and reproduces enumeration counts from the paper.

**Stretch goal:** Add a simple GUI or web interface to visualize generated graphs and apply extension moves interactively.

### Advanced — Extending Combinatorial Characterization of Minimal Angle Rigidity Beyond Two Colors
*Effort: 3-4 weeks*

You explore the open problem of extending the combinatorial characterization of minimal angle rigidity to multi-color edge-colored graphs beyond the two-color case. You design and implement candidate new extension moves inspired by the paper's 0- and 1-extensions, test their effect on rigidity properties, and attempt to formulate conjectures or partial characterizations. You develop computational experiments to enumerate small multi-color graphs under these moves and analyze their sparsity and rigidity properties.

**Why it shows you understood the paper:** This project demonstrates deep engagement with the paper's limitations and future directions. It shows you can extend theoretical concepts, design new algorithms, and experimentally investigate open problems in angle rigidity, potentially contributing new insights to the field.

**Grounded in:** Extending combinatorial characterizations to more than two colors, possibly requiring new extension moves, is a stated future direction.

**Tech stack:** Python 3.11, NetworkX, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic multi-color edge-colored graphs generated by your extension move implementations; no public dataset exists for this open problem.

**Build it:**

1. Review the paper's definitions and proofs for 0- and 1-extension moves in the two-color case.
2. Design candidate extension moves that could preserve minimal angle rigidity in multi-color graphs.
3. Implement these moves and data structures for multi-color edge-colored graphs.
4. Develop computational tests to check sparsity conditions and rigidity rank conditions on generated graphs.
5. Enumerate small multi-color graphs generated by these moves and analyze their rigidity properties.
6. Document findings, conjectures, and challenges encountered, with visualizations and code.

**Ships as:** A research-style codebase and report exploring new extension moves for multi-color angle rigidity, with experimental data and conjectures.

**Stretch goal:** Attempt to prove or disprove conjectures experimentally or theoretically, or connect findings to multi-agent formation control scenarios.
