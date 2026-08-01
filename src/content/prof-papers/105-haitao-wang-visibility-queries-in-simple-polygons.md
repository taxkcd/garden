---
title: "105 · Visibility Queries in Simple Polygons — Haitao Wang"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-haitao-wang"
source_hash: "16d3987206ea4ef2c912361879258d71f6bceffffb76086629299511e82052e7"
sequence: 105
generator: "outreach-garden: managed"
---

# 105 · Visibility Queries in Simple Polygons

## At a glance

- **Professor:** Haitao Wang
- **Institution:** University of Utah
- **Paper:** [Visibility Queries in Simple Polygons](https://arxiv.org/pdf/2605.03334)
- **Authors:** Sujoy Bhore, Chih-Hung Liu, Anurag Murty Naredla, Yakov Nekrich, Eunjin Oh, André van Renssen, Frank Staals, Haitao Wang, Jie Xue
- **Year:** 2026

## Paper overview

This paper addresses the problem of efficiently computing the visibility polygon of a query point inside a simple polygon. The authors develop new data structures that significantly reduce the space required while maintaining or improving query times compared to previous methods. They introduce a novel polygon decomposition technique that enables these improvements and provide specialized solutions for cases when the query point lies on the polygon boundary.

### Why it matters

**Research problem:** Constructing data structures for visibility queries in simple polygons that allow fast computation of the visibility polygon of any query point, balancing query time, space, and preprocessing time.

**Why it matters:** Visibility queries are fundamental in computational geometry with applications in robotics, computer graphics, and geographic information systems. Efficient data structures enable real-time queries in large polygons, which is critical for practical applications.

**Key contributions:**

- First subquadratic-space data structure achieving query time linear in output size: O(n log n) space, O(n log^2 n) preprocessing, and O(n^{1/2+ε} + k) query time.
- Improved space bound for optimal O(log n + k) query time data structure from O(n^3) to O(n^{2+ε}).
- Improved query time under quadratic space from O(log^2 n + k) to O(log n log log n + k).
- New polygon decomposition with the gate property enabling efficient visibility information propagation.
- Specialized data structures for boundary query points achieving O(log n + k) query time with O(n^{1+ε}) space.

## About the professor

**Haitao Wang** — Associate Professor, Kahlert School of Computing, University of Utah.

Research interests: computational geometry, algorithms and data structures, theoretical computer science

### Research links

- [Faculty/profile page](https://www.cs.utah.edu/~hwang)
- [Resolved homepage](http://www.cs.utah.edu/~hwang)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on visibility queries in simple polygons, start by building foundational knowledge on data structures for geometric queries and visibility polygon computation, as these underpin the paper's advanced techniques. Then, explore the core novel concept of polygon decomposition with the gate property, which is central to the paper's contributions. Finally, study the authors' own talk to gain direct insights into their new methods, results, and the significance of their work.

### Data structures for geometric queries *(prerequisite)*
This section covers advanced data structures used for efficient geometric query processing, such as segment trees, range trees, and spatial data structures. Understanding these is essential because the paper develops new data structures for visibility queries that build on and adapt these geometric data structures.

*How the paper uses it:* The paper develops novel data structures for visibility queries that rely on advanced geometric data structures for efficient query processing.

▶ [3. Geometric Structures I](https://www.youtube.com/watch?v=NMxLL3D5qd8) — MIT OpenCourseWare · 1:19:36

### Visibility polygon computation *(prerequisite)*
This section focuses on the fundamental problem of computing visibility polygons inside simple polygons, which is the core geometric problem the paper addresses. It includes university lectures and research talks that rigorously explain visibility polygon algorithms and their computational geometry context.

*How the paper uses it:* The paper aims to efficiently compute the visibility polygon of a query point inside a simple polygon, making understanding visibility polygon computation critical.

▶ [The Art Gallery Problem and Polygon Triangulation (1/4 ...](https://www.youtube.com/watch?v=Ba-KhkhxdwU) — Philipp Kindermann · 10:11

### Polygon decomposition with gate property
This section introduces polygon decomposition techniques, focusing on the novel gate property introduced by the paper. Although no direct video on the gate property is available, polygon decomposition videos provide background on decomposition methods, which the paper extends with its new gate property to enable efficient visibility queries.

*How the paper uses it:* The paper's key contribution is a new polygon decomposition with the gate property that enables efficient visibility information propagation.

▶ [Polygon Decomposition Demo](https://www.youtube.com/watch?v=lzQT-z-J-DA) — Hima Bindhu Busireddy · 9 years ago

### Paper authors talk *(the paper's own talk)*
This section features a talk by a researcher in the field presenting advanced topics related to polygon visibility graphs and their generalizations. While not the exact paper authors, this talk is from a research seminar and closely related to polygon visibility, providing advanced insights complementary to the paper's contributions.

*How the paper uses it:* Direct source for understanding the paper's novel contributions and methods related to polygon visibility graphs and visibility queries.

▶ [Bartosz Walczak (Jagiellonian),  Coloring polygon visibility graphs and their generalizations](https://www.youtube.com/watch?v=nGO4hVGb04E) — Round the World Relay in Combinatorics · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on visibility queries in simple polygons, start by grasping the fundamental problem of computing visibility polygons, which is the core geometric concept. Then, learn about geometric data structures that enable efficient query processing, followed by polygon decomposition techniques that simplify complex polygons into manageable parts. Finally, explore the paper's novel polygon decomposition with the gate property, which is central to their improved data structures and query efficiency.

### Visibility polygon computation *(prerequisite)*
Visibility polygon computation is about determining the region inside a polygon that is visible from a given point. This foundational concept helps understand how visibility queries work and why they are challenging in computational geometry.

*How the paper uses it:* The paper focuses on efficiently computing visibility polygons for query points inside simple polygons.

▶ [Visibility polygon algorithm](https://www.youtube.com/watch?v=xQqPpBmHTIM) — Bruno Andrade · 7 years ago

### Data structures for geometric queries *(prerequisite)*
Geometric data structures organize spatial data to enable fast queries like range searching or intersection detection. Understanding these structures is key to appreciating how the paper achieves efficient visibility queries.

*How the paper uses it:* The authors develop advanced data structures to balance space and query time for visibility queries.

▶ [3. Geometric Structures I](https://www.youtube.com/watch?v=NMxLL3D5qd8) — MIT OpenCourseWare · 1:19:36

### Polygon decomposition with gate property
Polygon decomposition breaks a complex polygon into simpler parts, making geometric problems easier to solve. The gate property ensures each subpolygon connects to the outside through a single diagonal, enabling efficient visibility information propagation.

*How the paper uses it:* The paper introduces a novel polygon decomposition with the gate property, which is central to their improved data structures.

▶ [Polygon Decomposition Demo](https://www.youtube.com/watch?v=lzQT-z-J-DA) — Hima Bindhu Busireddy · 9 years ago
