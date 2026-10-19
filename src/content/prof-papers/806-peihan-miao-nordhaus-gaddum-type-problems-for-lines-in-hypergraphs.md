---
title: "806 · Nordhaus-Gaddum-type problems for lines in hypergraphs — Peihan Miao"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peihan-miao"
source_hash: "b944f1ca94b198b4c63a1a2a73a68bb43c8139db56479f449faf7cc9736676ad"
sequence: 806
generator: "outreach-garden: managed"
---

# 806 · Nordhaus-Gaddum-type problems for lines in hypergraphs

## At a glance

- **Professor:** Peihan Miao
- **Institution:** Brown University
- **Paper:** [Nordhaus-Gaddum-type problems for lines in hypergraphs](https://arxiv.org/pdf/1411.0474)
- **Authors:** Xiaomin Chen, Peihan Miao
- **Year:** 2014

## Paper overview

This paper studies the number of lines in 3-uniform hypergraphs and their complements, focusing on the sum and product of the number of lines in both. It establishes lower and upper bounds for these quantities and explores special cases such as hypergraphs derived from Euclidean spaces, projective planes, and trees. The work extends classical graph theory problems (Nordhaus-Gaddum type) to hypergraphs, providing new insights and tight bounds in various settings.

### Why it matters

**Research problem:** Determining tight lower and upper bounds on the sum and product of the number of lines in a 3-uniform hypergraph and its complement, including special cases derived from metric spaces and trees, and understanding the structural properties influencing these bounds.

**Why it matters:** Understanding the combinatorial structure of hypergraphs and their complements has implications in discrete mathematics and theoretical computer science, particularly in problems related to geometry, graph theory, and metric spaces. The symmetric consideration of hypergraphs and their complements (Nordhaus-Gaddum type problems) reveals deeper combinatorial properties and leads to more elegant proofs and tighter bounds.

**Key contributions:**

- Introduced the study of the sum and product of the number of lines in a 3-uniform hypergraph and its complement as a Nordhaus-Gaddum type problem.
- Proved that the minimum product of the number of lines in both hypergraphs is 2.
- Established lower and upper bounds on the sum of the number of lines, showing it lies between Ω(n) and O(n log n).
- Characterized tight bounds for special classes of hypergraphs derived from Euclidean spaces, real projective planes, and trees.
- Solved completely the case when the hypergraph is derived from a tree metric, providing exact bounds and characterizations.

## About the professor

**Peihan Miao** — John E. Savage Assistant Professor, Department of Computer Science, Brown University.

Research interests: My research interests lie broadly in cryptography and security, with a focus on secure multi-party computation (both theoretical and applied).

### Research links

- [Faculty/profile page](https://sites.google.com/view/peihanmiao/home)
- [Lab website](https://cs.brown.edu/research/cs-theory-group/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Extremal Combinatorics
**The paper assumes:** extremal combinatorics, hypergraph theory, combinatorial set systems
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of extremal combinatorics and hypergraph theory.

This background focuses on extremal combinatorics, the core mathematical area underpinning the paper's study of lines in 3-uniform hypergraphs and their complements. The rigorous course option offers a deep, structured university-level treatment of extremal combinatorics, ideal for thorough understanding and research preparation. The fast track provides a concise, well-curated introduction to key probabilistic and extremal combinatorial techniques, suitable for quickly gaining the essential concepts needed to engage with the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Extremal Combinatorics (University of Victoria Math 426/529)](https://www.youtube.com/playlist?list=PLtxJg53s2o0MEvvdIxPKI1AXYLI1cH4A2) — Jonathan Noel · 34 videos · 27.2h across 34 episodes

**Watch only this:** Lectures 1 through 13 (Intersecting Families through Turán's Theorem), about 10.5 hours — these cover foundational extremal set theory and graph theory results crucial for grasping the paper's combinatorial techniques and bounds.

*Why it unblocks this paper:* Jonathan Noel's Extremal Combinatorics course is a comprehensive university lecture series covering classical and modern extremal combinatorics topics, including intersecting families, Sperner's theorem, Kruskal-Katona theorem, and Turán-type results, all directly relevant to understanding the combinatorial bounds and structural characterizations in the paper.

*If you want all of it:* 27.2 hours across all 34 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 18.226 Probabilistic Methods in Combinatorics, Fall 2024](https://www.youtube.com/playlist?list=PLUl4u3cNGP61cYB5ymvFiEbIb-wWHfaqO) — MIT OpenCourseWare · 11 videos · 3.6h across 11 episodes

**Watch only this:** Episodes 1 through 6 (Large Bipartite Subgraph through Independent Sets and Turán's Theorem), about 1.9 hours — these provide a focused overview of extremal combinatorics fundamentals relevant to the paper's approach.

*Why it unblocks this paper:* MIT's 18.226 Probabilistic Methods in Combinatorics offers a concise, well-structured introduction to extremal set theory and combinatorial methods, including Sperner's theorem, intersecting families, and Turán's theorem, which are key to understanding the combinatorial bounds and probabilistic techniques used in the paper.

*If you want all of it:* 3.6 hours across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Nordhaus-Gaddum-type problems for lines in hypergraphs, start with foundational concepts in graph theory focusing on Nordhaus-Gaddum inequalities and combinatorial geometry related to lines in point sets. Then, build knowledge on metric spaces and tree metrics, which are crucial for the paper's special cases. Finally, study the core concept of lines in 3-uniform hypergraphs, culminating with the authors' own talks or related advanced seminars to grasp their novel contributions and methods.

### Nordhaus-Gaddum problems graph theory *(prerequisite)*
This section covers the classical Nordhaus-Gaddum inequalities in graph theory, which provide bounds on graph parameters for a graph and its complement. Understanding these foundational results is essential as the paper extends these inequalities to hypergraphs, framing the main research problem.

*How the paper uses it:* The paper generalizes Nordhaus-Gaddum-type inequalities from graphs to 3-uniform hypergraphs.

▶ [Nordhaus-Gaddum Theorem](https://www.youtube.com/watch?v=anzxaZR6oK0) — Mister Professor \[교수아재\] · 2y ago

### Combinatorial geometry lines sets *(prerequisite)*
This section introduces combinatorial geometry concepts related to lines defined by point sets, which underpin the notion of lines in hypergraphs. A solid grasp of these geometric and combinatorial principles is necessary to appreciate the paper's approach to counting and bounding lines.

*How the paper uses it:* The paper's concept of lines in hypergraphs is inspired by combinatorial geometry of lines in point sets.

▶ [Extremal problems in combinatorial geometry - Orit Raz](https://www.youtube.com/watch?v=uh4ghc4WDEY) — Institute for Advanced Study · 9y ago

### Metric spaces and tree metrics *(prerequisite)*
Metric spaces and tree metrics provide the structural framework for special cases analyzed in the paper. Understanding these concepts is key to following the exact characterizations and bounds the authors derive for hypergraphs arising from tree metrics.

*How the paper uses it:* The paper solves the problem completely for hypergraphs derived from tree metrics, using metric space properties.

▶ [Weird notions of "distance" || Intro to Metric Spaces](https://www.youtube.com/watch?v=fl5fOAYY-1s) — Dr. Trefor Bazett · 4y ago

### 3-uniform hypergraph lines
This section focuses on the central concept of lines in 3-uniform hypergraphs, which is the core object of study in the paper. Advanced seminars on this topic provide insight into the combinatorial structures and challenges involved in counting and characterizing these lines.

*How the paper uses it:* The paper studies the number and properties of lines in 3-uniform hypergraphs and their complements.

▶ [Irregular triads in 3-uniform hypergraphs](https://www.youtube.com/watch?v=bL-NMxkz4NE) — Fields Institute · 4y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the authors or closely related advanced seminars provide the deepest insight into their methods, results, and motivations. These talks often include detailed proofs, constructions, and discussions of open problems, making them invaluable for advanced readers.

*How the paper uses it:* The authors' own presentations or closely related research talks best explain their novel Nordhaus-Gaddum-type results for hypergraphs.

▶ [Maryam Abuissa: Null Models for Hypergraphs Given Pairwise Interactions](https://www.youtube.com/watch?v=aJWo3kiKR5U) — Brown CS Theory · 10mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the key ideas behind the paper on Nordhaus-Gaddum-type problems for lines in 3-uniform hypergraphs, start by learning the classical Nordhaus-Gaddum inequalities in graph theory to grasp the foundational symmetric bounds concept. Next, build intuition about combinatorial geometry and metric spaces, especially tree metrics, since the paper explores special hypergraphs derived from these structures. Finally, focus on the core concept of lines in 3-uniform hypergraphs, which the paper studies in depth, to appreciate the combinatorial bounds and characterizations presented.

### Nordhaus-Gaddum problems graph theory *(prerequisite)*
Nordhaus-Gaddum inequalities provide classical symmetric bounds on graph parameters involving a graph and its complement, forming the conceptual foundation for the paper's extension to hypergraphs. Understanding these inequalities helps grasp why studying sums and products of parameters in a graph and its complement reveals deep combinatorial properties.

*How the paper uses it:* The paper generalizes Nordhaus-Gaddum-type bounds from graphs to 3-uniform hypergraphs, focusing on the number of lines in both a hypergraph and its complement.

▶ [Nordhaus-Gaddum Theorem](https://www.youtube.com/watch?v=V8iWfBQMeQg) — Drake Olejniczak · 4y ago

### Combinatorial geometry lines sets *(prerequisite)*
Combinatorial geometry studies configurations of points and lines, focusing on counting and characterizing lines determined by point sets. This background helps understand how lines are defined and counted in geometric and combinatorial contexts, which parallels the paper's approach to lines in hypergraphs.

*How the paper uses it:* The paper relates the number of lines in hypergraphs to classical geometric problems like the orchard-planting problem and uses geometric intuition for special cases.

▶ [Extremal problems in combinatorial geometry - Orit Raz](https://www.youtube.com/watch?v=uh4ghc4WDEY) — Institute for Advanced Study · 9y ago

### Metric spaces and tree metrics *(prerequisite)*
Metric spaces generalize the notion of distance, and tree metrics are special metric spaces derived from tree structures. Understanding these concepts is crucial because the paper studies hypergraphs derived from tree metrics and uses their properties to establish exact bounds.

*How the paper uses it:* The paper completely solves the problem for hypergraphs derived from tree metrics, providing exact formulas and characterizations.

▶ [Weird notions of "distance" || Intro to Metric Spaces](https://www.youtube.com/watch?v=fl5fOAYY-1s) — Dr. Trefor Bazett · 4y ago

### 3-uniform hypergraph lines
3-uniform hypergraphs are hypergraphs where each edge connects exactly three vertices. The concept of lines in such hypergraphs generalizes lines in graphs and geometry, involving sets of vertices determined by pairs. Understanding this is central to the paper's study of counting lines and their complements.

*How the paper uses it:* The paper focuses on counting and bounding the number of lines in 3-uniform hypergraphs and their complements, extending classical graph theory concepts.

▶ [Irregular triads in 3-uniform hypergraphs](https://www.youtube.com/watch?v=bL-NMxkz4NE) — Fields Institute · 4y ago

## Already in your library

- [Introduction to Hypergraphs \[Graph Theory\]](https://www.youtube.com/watch?v=UwvZn9lm_98) — also for: Library-Attack: Reverse Engineering Approach for Evaluating Hardware IP Protection (Andrew Lukefahr)
- [Hypergraphs](https://www.youtube.com/watch?v=Sb7Xw7SYmlE) — also for: Efficient Parallel Algorithms for Hypergraph Matching (Nodari Sitchinava)
- [Convex Sets | Introduction, Definition and Examples](https://www.youtube.com/watch?v=oX_WK5co4HY) — also for: The General Stability of Ranking (H. V. Jagadish)
- [Hsien-Chih Chang - Covering Planar Metrics (and Beyond): O(1) Trees Suffice](https://www.youtube.com/watch?v=6EnxGdT2MAU) — also for: Paths and Intersections: Recognizing Outerplanar Metrics (Zihan Tan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Nordhaus-Gaddum-type problems for lines in 3-uniform hypergraphs studied in the paper. Starting with a basic implementation of line counting in small hypergraphs and their complements, you then reimplement the core combinatorial method to analyze bounds on the sum of lines, and finally extend the work by exploring algorithmic aspects for tree-derived hypergraphs, addressing a future direction mentioned by the authors. Each project leverages your existing software engineering and algorithmic skills while introducing new concepts and challenges tied directly to the paper's contributions.

### Beginner — Counting Lines in Small 3-Uniform Hypergraphs and Complements
*Effort: a weekend, ~8 hours*

You build a program that takes a small 3-uniform hypergraph (with up to ~10 vertices) as input, computes the sets of lines generated by pairs of vertices in both the hypergraph and its complement, and outputs the counts of red and blue lines. The program visualizes or tabulates these lines to illustrate the concept of lines in hypergraphs and their complements.

**Why it shows you understood the paper:** This project shows you understand the fundamental definitions of lines in 3-uniform hypergraphs and the Nordhaus-Gaddum-type problem setup by explicitly constructing and counting lines in both the hypergraph and its complement.

**Grounded in:** Introduced the study of the sum and product of the number of lines in a 3-uniform hypergraph and its complement as a Nordhaus-Gaddum type problem.

**Tech stack:** Python 3.11

**Data:** You generate small synthetic 3-uniform hypergraphs with up to 10 vertices by enumerating triples or randomly selecting edges.

**Build it:**

1. Implement data structures to represent a 3-uniform hypergraph and its complement on a small vertex set.
2. Write a function to compute the red lines: for each pair of vertices, find all vertices that form red triples with that pair.
3. Write a similar function for blue lines in the complement hypergraph.
4. Count and output the number of distinct red and blue lines.
5. Optionally, create a simple textual or tabular visualization of lines and their intersections.

**Ships as:** A Python script with clear README explaining how to input a small hypergraph, run the line counting, and interpret the output.

**Stretch goal:** Add support for visualizing the hypergraph and its lines using a graph visualization library like NetworkX with matplotlib.

### Intermediate — Reimplementing Bounds on the Sum of Lines in 3-Uniform Hypergraphs
*Effort: 1-3 weekends*

You reimplement the core combinatorial method from the paper to compute and analyze the sum of the number of lines in a 3-uniform hypergraph and its complement for larger vertex sets (e.g., n=20-50). You generate hypergraphs derived from simple metric spaces or random constructions, compute the sum of lines, and compare your results against the theoretical lower and upper bounds established in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's combinatorial definitions and bounds into code, reproduce key metrics, and validate theoretical results experimentally.

**Grounded in:** Established lower and upper bounds on the sum of the number of lines, showing it lies between Ω(n) and O(n log n).

**Tech stack:** Python 3.11, NumPy

**Data:** Synthetic hypergraphs generated from metric space-inspired constructions or random edge selections, simulating the paper's examples.

**Build it:**

1. Implement efficient data structures to represent 3-uniform hypergraphs on up to 50 vertices.
2. Implement functions to compute red and blue lines as per the paper's bi-colored system.
3. Generate hypergraphs from simple metric spaces (e.g., points on a line or circle) and random hypergraphs.
4. Compute the sum of the number of lines in the hypergraph and its complement.
5. Compare computed sums against the theoretical bounds and document observations.
6. Write a report summarizing the implementation, experiments, and how results align with the paper.

**Ships as:** A Python repository with scripts to generate hypergraphs, compute line sums, and a report comparing empirical results to theoretical bounds.

**Stretch goal:** Implement the special case for hypergraphs derived from Euclidean spaces or projective planes and compare line counts.

### Advanced — Algorithmic Exploration of Lines in Hypergraphs Derived from Tree Metrics
*Effort: a few weeks*

You develop algorithms to compute the exact number of lines in 3-uniform hypergraphs derived from tree metrics, implementing the exact formulas and characterizations given in the paper. You then explore algorithmic efficiency and propose heuristics or optimizations for computing lines in large tree-derived hypergraphs. This addresses the paper's future direction of exploring algorithmic aspects and extends the solved special case.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's complete solution for tree metrics, ability to implement complex combinatorial formulas, and initiative to tackle open algorithmic challenges suggested by the authors.

**Grounded in:** Solved completely the case when the hypergraph is derived from a tree metric, providing exact bounds and characterizations.

**Tech stack:** Python 3.11, NetworkX, C++ (optional for performance)

**Data:** Synthetic tree metrics generated as random trees with weighted edges to simulate tree-derived hypergraphs.

**Build it:**

1. Implement data structures to represent trees and derive corresponding 3-uniform hypergraphs based on tree metrics.
2. Implement the exact formulas from the paper to compute the sum of lines in these hypergraphs.
3. Validate your implementation on small example trees with known results.
4. Analyze the computational complexity and identify bottlenecks.
5. Develop and implement heuristic or optimized algorithms to improve computation time for larger trees.
6. Document your findings, including performance benchmarks and potential applications to secure multi-party computation as suggested by the paper.

**Ships as:** A repository with implementations of exact and heuristic algorithms for line counting in tree-derived hypergraphs, example datasets, performance analysis, and a detailed README.

**Stretch goal:** Explore connections between these combinatorial structures and secure multi-party computation protocols, proposing a conceptual mapping or prototype.
