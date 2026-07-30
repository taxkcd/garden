---
title: "077 · Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult — Zilin Jiang"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zilin-jiang"
source_hash: "8c57b6074e6e6d22a805d16e3b3a860c95e4a6b8301534c3df2248d282fed6d3"
sequence: 77
generator: "outreach-garden: managed"
---

# 077 · Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult

## At a glance

- **Professor:** Zilin Jiang
- **Institution:** Arizona State University
- **Paper:** [Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult](https://doi.org/10.1017/s0963548325100278)
- **Authors:** Hricha Acharya, Zilin Jiang
- **Year:** 2026

## Paper overview

This paper extends a classical classification of graphs with smallest eigenvalue at least -2 to classify all connected graphs whose smallest eigenvalue lies in the interval (-λ*, -2), where λ* ≈ 2.0198 is a special algebraic constant. The authors provide a complete classification of these graphs, identifying infinite families called augmented path extensions and a finite set of exceptional 'maverick' graphs. They also develop computer-assisted methods to enumerate these graphs and explore extensions beyond this eigenvalue range.

### Why it matters

**Research problem:** Classify all connected graphs whose smallest eigenvalue lies in the interval (-λ*, -2), extending the classical classification of graphs with smallest eigenvalue at least -2.

**Why it matters:** Graphs with eigenvalues bounded from below have deep connections to root systems, Lie algebras, and discrete geometry. Understanding these graphs aids spectral graph theory and has implications for spherical two-distance sets and artificial intelligence applications.

**Key contributions:**

- Complete classification of all connected graphs with smallest eigenvalue in (-λ*, -2).
- Identification of 794 families of augmented path extensions and 4752 maverick graphs up to 19 vertices.
- Development of a linear-algebraic lemma simplifying eigenvalue computations for augmented path extensions.
- Characterization of rooted graphs whose augmented path extensions lie in the classification range.
- Enumeration of maximal connected bipartite single-rooted graphs corresponding to augmented path extensions.

## About the professor

**Zilin Jiang** — Professor, School of Mathematical Statistical Sciences, School of Computing and Augmented Intelligence, Arizona State University.

Research interests: discrete geometry, graph theory, topological combinatorics

### Research links

- [Faculty/profile page](https://www.zilin.one)
- [Professor website](https://zilin.one)
- [Resolved homepage](https://zilin.one/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult," start with foundational knowledge in spectral graph theory, root systems and their connections to graphs, line graphs and bipartite graphs, and forbidden subgraph characterizations. These prerequisites build the algebraic and combinatorial background necessary to grasp the paper's advanced classification results. Finally, focus on the paper's core concept of augmented path extensions, which are central to the new classification, and conclude with the authors' own talk if available to gain direct insights into their methods and findings.

### Spectral graph theory *(prerequisite)*
Spectral graph theory provides the fundamental framework for analyzing graph eigenvalues and their structural implications, which is essential for understanding the classification of graphs by their smallest eigenvalue. The selected lecture by Professor Stephan Wagner offers a rigorous and recent university-level overview of spectral graph theory, suitable for advanced readers.

*How the paper uses it:* The paper extends classical spectral graph theory results by classifying graphs based on their smallest eigenvalue in a specific interval.

▶ [Lecture – Spectral Graph Theory by Professor Stephan Wagner](https://www.youtube.com/watch?v=O0JTZ30gMso) — School on Graph Theory · 1:36:42

### Root systems and graphs *(prerequisite)*
Root systems link algebraic structures to graph eigenvalue bounds and classifications. Understanding simply laced root systems and their Coxeter graphs is crucial for grasping the algebraic underpinnings of the paper's approach. The NPTEL lecture on classification of root systems is a focused academic resource that matches this need.

*How the paper uses it:* The authors use root system representations to relate graph eigenvalues to algebraic constants and forbidden subgraphs.

▶ [Lec 48 Classification of Root systems](https://www.youtube.com/watch?v=ag_WJun_cP4) — NPTEL - Indian Institute of Science, Bengaluru · 2 years ago

### Line graphs and bipartite graphs *(prerequisite)*
The structure of rooted graphs as line graphs of bipartite graphs is a key characterization in the paper. A detailed university lecture on bipartite graphs and matchings provides the necessary depth to understand these graph classes and their role in the classification.

*How the paper uses it:* The paper characterizes rooted graphs whose augmented path extensions lie in the classification range as line graphs of connected bipartite single-rooted graphs.

▶ [Lesson 101 Part II: Bipartite Graphs and Matchings | Hall's ...](https://www.youtube.com/watch?v=sd1_-heJNjs) — Fahad Hussain · 20:45

### Forbidden subgraph characterization *(prerequisite)*
Forbidden subgraph characterization is a central technique used to classify graphs by excluding certain induced subgraphs. The talk by Zilin Jiang on forbidden subgraphs and spherical two-distance sets is a research-level presentation directly related to the author's expertise and relevant to the paper's methods.

*How the paper uses it:* The classification relies on forbidden subgraph characterizations confirmed by computer-assisted proofs.

▶ [Zilin Jiang - "Forbidden subgraphs and spherical two-distance sets"](https://www.youtube.com/watch?v=QG6_aMr3aXs) — Combgeo Lab · 39:34

### Augmented path extensions
Augmented path extensions are the core new concept introduced by the authors to classify graphs with smallest eigenvalue in (-λ*, -2). Although no direct videos on this novel concept exist, related advanced talks on augmenting paths in graph theory and network flows provide foundational understanding of path-based graph constructions.

*How the paper uses it:* The paper identifies 794 families of augmented path extensions as a main component of the classification.

▶ [Augmenting Paths - Georgia Tech - Computability, Complexity, Theory: Algorithms](https://www.youtube.com/watch?v=Xpn9qCSsS7Q) — Udacity · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by building a solid understanding of spectral graph theory, which is essential for grasping how graph eigenvalues relate to structure. Next, learn about root systems and their connection to graphs, followed by the concepts of line graphs and bipartite graphs that underpin the paper's classification framework. Then explore forbidden subgraph characterization, a key method used to classify graphs by excluding certain patterns. Finally, study the paper's core new concept of augmented path extensions, which are central to the classification results.

### Spectral graph theory *(prerequisite)*
Spectral graph theory studies properties of graphs through the eigenvalues and eigenvectors of matrices associated with them, such as adjacency matrices. Understanding how eigenvalues reflect graph structure is fundamental to this paper's classification of graphs by their smallest eigenvalue.

*How the paper uses it:* The paper classifies graphs based on their smallest eigenvalue, making spectral graph theory the foundational concept.

▶ [Spectral Graph Theory For Dummies](https://www.youtube.com/watch?v=uTUVhsxdGS8) — Ron & Math · 28:17

### Root systems and graphs *(prerequisite)*
Root systems are algebraic structures that connect to graphs via geometric and combinatorial properties. They provide the algebraic framework linking eigenvalue bounds to graph classifications, which the paper leverages to extend classical results.

*How the paper uses it:* The paper uses root system representations to analyze and classify graphs with eigenvalues in the specified range.

▶ [Lec 48 Classification of Root systems](https://www.youtube.com/watch?v=ag_WJun_cP4) — NPTEL - Indian Institute of Science, Bengaluru · 2 years ago

### Line graphs and bipartite graphs *(prerequisite)*
Line graphs represent adjacency between edges of another graph, and bipartite graphs have vertices split into two sets with edges only across sets. These concepts are crucial for understanding the structure of rooted graphs and their augmented path extensions in the paper.

*How the paper uses it:* The paper characterizes rooted graphs as line graphs of connected bipartite single-rooted graphs, a key structural insight.

▶ [What is a Bipartite Graph? | Graph Theory](https://www.youtube.com/watch?v=HqlUbSA9cEY) — Wrath of Math · 5:17

### Forbidden subgraph characterization *(prerequisite)*
Forbidden subgraph characterization classifies graphs by identifying subgraphs that cannot appear, thus restricting graph structure. This technique is central to the paper's method of classifying graphs with eigenvalues in the target interval.

*How the paper uses it:* The paper uses forbidden subgraph characterizations to confirm eigenvalue bounds and classify graphs.

▶ [Zilin Jiang - "Forbidden subgraphs and spherical two-distance sets"](https://www.youtube.com/watch?v=QG6_aMr3aXs) — Combgeo Lab · 39:34
