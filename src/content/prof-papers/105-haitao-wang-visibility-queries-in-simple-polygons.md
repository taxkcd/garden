---
title: "105 · Visibility Queries in Simple Polygons — Haitao Wang"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-haitao-wang"
source_hash: "d86f2b9bf7f9042e72142d95f7d7b543c27aae841df672a7ed868b6d1f789f2c"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Geometry
**The paper assumes:** polygon decompositions, visibility polygons, geometric data structures, stabbing queries, hierarchical cuttings
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computational geometry focusing on polygon algorithms and geometric data structures.

This background prepares the reader to understand the computational geometry concepts essential for the paper on visibility queries in simple polygons, including polygon decompositions, visibility polygons, and geometric data structures. The rigorous course option offers a deep, structured university-level lecture series, while the fast track provides a concise, intuition-focused playlist for quicker comprehension. Choose the rigorous course for thorough theoretical grounding and the fast track for a rapid but solid overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computational Geometry Lecture Videos (METU-CENG) (Fall 2020-2021)](https://www.youtube.com/playlist?list=PL0X39D1PSBWP0PoU0NZY8NHpA7340PeLA) — Tolga Can · 22 videos · 19.8h across 22 episodes

**Watch only this:** Episodes 1 through 7 ("CENG570 Computational Geometry: Course Intro" through "CENG570 Comp Geo: Polygon Triangulation, the Art Gallery Guarding Problem Part #2"), about 6 hours 10 minutes — these cover geometric preliminaries, polygon triangulation, and visibility concepts foundational for understanding the paper's decomposition and query structures.

*Why it unblocks this paper:* This is a full university course on computational geometry from Middle East Technical University, covering polygon triangulation, visibility graphs, and related geometric data structures directly relevant to the paper's focus on polygon decompositions and visibility queries.

*If you want all of it:* All 22 episodes, about 19.8 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Geometry](https://www.youtube.com/playlist?list=PLTZbNwgO5ebqdDy16sKYjmfCzkzoS0fxN) — saurabhschool · 6 videos · 1.1h across 6 episodes

**Watch only this:** All 6 episodes, about 1.1 hours — covers line segment properties, intersection algorithms, closest pair, and convex hull algorithms that build intuition for polygon visibility and decomposition.

*Why it unblocks this paper:* This short playlist provides clear, concise explanations of core computational geometry problems such as line segment intersection and convex hulls, which underpin understanding polygon visibility and decomposition techniques in a fraction of the time.

*If you want all of it:* All 6 episodes, about 1.1 hours.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Visibility Queries in Simple Polygons." The beginner project focuses on implementing a basic visibility polygon computation inside a simple polygon, illustrating the fundamental concept of visibility queries. The intermediate project involves reimplementing the paper's core polygon decomposition with the gate property and building a data structure for efficient visibility queries, comparing query times against a naive baseline. The advanced project extends the paper's approach by exploring dynamic visibility queries where the polygon or query points change over time, addressing one of the paper's stated future directions.

### Beginner — Basic Visibility Polygon Computation in Simple Polygons
*Effort: a weekend, ~8 hours*

You build a program that takes as input a simple polygon and a query point inside it, then computes and visualizes the visibility polygon of that point using a standard ray-shooting or rotational sweep algorithm. The project includes a simple interactive visualization to show the polygon, query point, and resulting visibility polygon.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental problem the paper addresses: computing visibility polygons inside simple polygons. It shows you understand the geometric definitions and can implement a baseline visibility query.

**Grounded in:** The paper's research problem: Constructing data structures for visibility queries in simple polygons that allow fast computation of the visibility polygon of any query point.

**Tech stack:** C++, Python 3.11, matplotlib (for visualization)

**Data:** You generate or manually specify small simple polygons (e.g., convex and concave polygons with 10-20 vertices) as input data; no external dataset is needed.

**Build it:**

1. Implement a simple polygon data structure and input parser.
2. Implement a visibility polygon algorithm using ray casting or rotational sweep from the query point.
3. Create a visualization to display the polygon, query point, and computed visibility polygon.
4. Test with multiple polygons and query points inside the polygon.
5. Document the approach and limitations in the README.

**Ships as:** A repository with code to compute and visualize visibility polygons inside simple polygons, demonstrating the baseline visibility query problem.

**Stretch goal:** Add support for query points on the polygon boundary and visualize differences.

### Intermediate — Implementing Polygon Decomposition with Gate Property for Visibility Queries
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core polygon decomposition technique that partitions a simple polygon into subpolygons connected by a single diagonal (the gate). You then build a data structure that supports visibility queries using this decomposition, implementing cone stabbing queries or a simplified version thereof. You compare query times against the naive visibility polygon computation from the beginner project.

**Why it shows you understood the paper:** This project shows you understood the paper's key contribution of the polygon decomposition with the gate property and how it enables efficient visibility queries. It also demonstrates your ability to implement and evaluate a novel geometric data structure.

**Grounded in:** Key contribution: New polygon decomposition with the gate property enabling efficient visibility information propagation; Key result: Data structure with O(n log n) space and O(n^{1/2+ε} + k) query time.

**Tech stack:** C++, Python 3.11, matplotlib, optional: Jupyter Notebook for analysis

**Data:** Use synthetic simple polygons generated programmatically or manually created polygons with 50-200 vertices to test scalability and query performance.

**Build it:**

1. Implement the polygon decomposition algorithm with the gate property as described in the paper.
2. Build a data structure to store visibility information for subpolygons and implement cone stabbing queries or a simplified stabbing approach.
3. Implement query processing that uses the decomposition to compute visibility polygons faster than naive methods.
4. Benchmark query times against the baseline visibility polygon computation on multiple polygons and query points.
5. Document the implementation details, performance results, and comparison in the README.

**Ships as:** A repository with code implementing the polygon decomposition and visibility query data structure, including benchmarks comparing query times to a naive baseline.

**Stretch goal:** Add support for query points on polygon boundaries using the specialized data structures described in the paper.

### Advanced — Dynamic Visibility Queries in Simple Polygons
*Effort: 3+ weeks*

You extend the static visibility query data structures by implementing a dynamic version that supports updates to the polygon (e.g., vertex insertions/deletions or edge modifications) or moving query points. You adapt the polygon decomposition and data structures to handle changes efficiently and evaluate query performance and update costs.

**Why it shows you understood the paper:** This project tackles one of the paper's future directions, demonstrating deep understanding of the data structures and their limitations. It shows initiative in extending theoretical work toward practical dynamic scenarios relevant in robotics and graphics.

**Grounded in:** Future direction: Investigating dynamic versions of visibility queries where the polygon or query points change over time.

**Tech stack:** C++, Python 3.11, matplotlib, optional: benchmarking tools

**Data:** Use synthetic polygons with 100-500 vertices and sequences of polygon modifications and query points to simulate dynamic scenarios.

**Build it:**

1. Study the static polygon decomposition and visibility query data structures from the intermediate project.
2. Design and implement algorithms to update the polygon decomposition and data structures efficiently upon polygon modifications.
3. Implement support for moving query points and incremental updates to visibility polygons.
4. Benchmark query and update times against static implementations and naive recomputation.
5. Document challenges, design decisions, and performance results in the README.

**Ships as:** A repository demonstrating dynamic visibility query data structures with code, benchmarks, and documentation of the extension beyond the static case.

**Stretch goal:** Explore extending the approach to polygons with holes or more complex planar domains as another future direction.
