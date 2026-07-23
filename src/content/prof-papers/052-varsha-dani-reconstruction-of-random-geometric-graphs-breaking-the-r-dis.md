---
title: "052 · Reconstruction of random geometric graphs: Breaking the Ω (r) distortion barrier — Varsha Dani"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-varsha-dani"
source_hash: "36387686ba5133f0db3fd0d5c05c8ae47f627b922f2f80e3122d078cb18e2c76"
sequence: 52
generator: "outreach-garden: managed"
---

# 052 · Reconstruction of random geometric graphs: Breaking the Ω (r) distortion barrier

## At a glance

- **Professor:** Varsha Dani
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Reconstruction of random geometric graphs: Breaking the Ω (r) distortion barrier](https://doi.org/10.1016/j.ejc.2023.103842)
- **Authors:** Varsha Dani, Josep Díaz, Thomas P. Hayes, Cristopher Moore
- **Year:** 2024

## Paper overview

This paper presents an improved algorithm for reconstructing the positions of vertices in random geometric graphs from their adjacency matrices. The authors break the previous distortion barrier proportional to the connection radius r, achieving more accurate embeddings by combining graph distance and neighborhood overlap information. The method applies to graphs embedded in Euclidean spaces, spheres, and hypercubes, and extends to cases with missing edges.

### Why it matters

**Research problem:** Given only the adjacency matrix of a random geometric graph (where vertices are points in a Euclidean space connected if within radius r), reconstruct the vertex positions up to symmetries of the underlying space with minimal distortion.

**Why it matters:** Accurate graph embeddings enable better network analysis, link prediction, routing, clustering, and visualization. Prior algorithms had distortion at least proportional to r, limiting reconstruction quality. Improving this enables more precise inference of latent geometric structures in networks.

**Key contributions:**

- An algorithm that reconstructs vertex positions with distortion O(n^β) where β = 1/2 - (4/3)α for r = n^α, improving over previous Ω(r) distortion bounds.
- A hybrid distance estimation technique combining graph distances and neighborhood overlap to break the Ω(r) distortion barrier.
- Extension of reconstruction results to the surface of the sphere and to hypercubes in fixed dimensions.
- Adaptation of methods to soft random geometric graphs where edges are randomly deleted.
- A rigorous greedy routing analysis to bound graph distances in terms of Euclidean distances with small additive errors.

## About the professor

**Varsha Dani** — Rochester Inst. of Technology.

### Research links

- [Faculty/profile page](https://www.rit.edu/computing/directory/vxdvcs-varsha-dani)
- [Identity evidence](https://www.rit.edu/directory/vxdvcs-varsha-dani)
- [Identity evidence](https://scholar.google.com/citations?hl=en&user=qA3IkiwAAAAJ)
- [Identity evidence](https://dblp.org/pid/78/6221.html)
- [Identity evidence](https://www.semanticscholar.org/author/Varsha-Dani/2714811)
- [Identity evidence](https://scholar.google.com/citations?user=qA3IkiwAAAAJ&hl=en)

## Learning path

To deeply understand the paper on reconstructing random geometric graphs with improved distortion bounds, start by building foundational knowledge on random geometric graph theory, geometric graph shortest path distances, neighborhood overlap in graphs, and greedy routing in geometric graphs. These prerequisites provide the theoretical and algorithmic background necessary to grasp the hybrid distance estimation and reconstruction techniques. Finally, focus on the core concept of random geometric graph reconstruction, including the authors' own recorded talk if available, to directly connect with their novel contributions and methods.

## Recommended videos (in order)

### Random geometric graphs theory *(prerequisite)*
This section covers the foundational theory of random geometric graphs, including their construction, properties, and typical behaviors. Understanding these basics is essential for appreciating the challenges in reconstructing vertex positions and the significance of the paper's improvements.

*How the paper uses it:* The paper builds on the properties of random geometric graphs to develop reconstruction algorithms and prove distortion bounds.

▶ [Han Huang "Random Geometric Graphs, and how to find their underlying metrics"](https://www.youtube.com/watch?v=ew1NfW2_OKs) — Probability and Analysis Webinar · 52:05 · 2 years ago

### Geometric graph shortest path distances *(prerequisite)*
Understanding shortest path distances in geometric graphs is key to the paper's hybrid distance estimation method, which relies on graph distances to approximate Euclidean distances. This section provides insights into how graph distances relate to underlying geometric metrics.

*How the paper uses it:* The authors use graph shortest path distances as a long-range estimate in their hybrid distance estimation technique.

▶ [Pim van der Hoorn - Convergence of Ollivier-Ricci curvature in ...](https://www.youtube.com/watch?v=Rgxc1jxOhJ8) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 46:11

### Neighborhood overlap in graphs *(prerequisite)*
Neighborhood overlap measures, such as the number of common neighbors, are used in the paper for short-range distance estimation. This section explains the graph-theoretic concepts and their relevance to geometric embeddings.

*How the paper uses it:* The paper leverages neighborhood overlap to improve short-range distance estimates, breaking the Ω(r) distortion barrier.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 5.2 - Relational and Iterative Classification](https://www.youtube.com/watch?v=QUO-HQ44EDc) — Stanford Online · 5 years ago

### Random geometric graph reconstruction *(the paper's own talk)*
This core section focuses on the central method of the paper: reconstructing vertex positions by combining graph distances and neighborhood overlaps. It covers the hybrid distance estimation technique and the algorithmic framework for embedding vertices with improved distortion.

*How the paper uses it:* The paper's main contribution is a hybrid distance estimation algorithm that breaks the Ω(r) distortion barrier for random geometric graph reconstruction.

▶ [Random Geometric Graphs - Aleksa Milojević](https://www.youtube.com/watch?v=qgRiuxl-Glo) — Institute for Advanced Study · 1 month ago
