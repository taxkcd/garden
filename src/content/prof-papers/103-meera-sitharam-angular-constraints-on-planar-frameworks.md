---
title: "103 · Angular Constraints on Planar Frameworks — Meera Sitharam"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-meera-sitharam"
source_hash: "23df99a39311aba3b7aeb4f09a1d7af7c9ff572c19b1ca9828b7795308da61b5"
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
