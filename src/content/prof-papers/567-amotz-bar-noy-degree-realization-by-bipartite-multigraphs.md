---
title: "567 · Degree Realization by Bipartite Multigraphs — Amotz Bar-Noy"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amotz-bar-noy"
source_hash: "544b999f70c6a985afeeb674fbeec1463b6085ed9bf5d048c46b36df14ef947f"
sequence: 567
generator: "outreach-garden: managed"
---

# 567 · Degree Realization by Bipartite Multigraphs

## At a glance

- **Professor:** Amotz Bar-Noy
- **Institution:** CUNY
- **Paper:** [Degree Realization by Bipartite Multigraphs](https://dmtcs.episciences.org/17145/pdf)
- **Authors:** Amotz Bar-Noy, Toni Böhnlein, David Peleg, Dror Rawitz
- **Year:** 2026

## Paper overview

This paper studies the problem of realizing given degree sequences as bipartite multigraphs, allowing parallel edges but no self-loops. It extends classical graph degree realization problems by relaxing constraints and focusing on bipartite structures. The authors characterize realizability conditions, analyze complexity, and provide algorithms for special cases.

### Why it matters

**Research problem:** Determining when a given degree sequence can be realized by a bipartite multigraph, and how to optimize such realizations with respect to maximum and total edge multiplicities.

**Why it matters:** Degree sequences capture important structural information in networks. Realizing sequences as bipartite multigraphs models relaxed network designs with parallel edges, relevant in noisy data modeling and network engineering. Understanding realizability and optimization aids in network design and analysis.

**Key contributions:**

- Complete characterization for bipartite multigraph realizations with bounded total multiplicity given a partition (Theorem 11).
- Proof that optimizing maximum multiplicity and total multiplicity can lead to very different realizations (Section 4).
- NP-hardness proof for deciding bipartite multigraph realizability without a given partition (Theorem 20).
- Extension of hardness to any graph family between paths and bipartite graphs (Theorem 26).
- Algorithm to compute all balanced partitions of a degree sequence using subset-sum dynamic programming (Algorithm 1).

## About the professor

**Amotz Bar-Noy** — Department of Computer and Information Science, CUNY.

### Research links

- [Faculty/profile page](http://www.sci.brooklyn.cuny.edu/~amotz/INDEX/interest.pdf)
- [Identity evidence](http://www.sci.brooklyn.cuny.edu/~amotz)
- [Identity evidence](http://www.sci.brooklyn.cuny.edu/~amotz/INDEX/pub.pdf)
- [Resolved homepage](http://www.sci.brooklyn.cuny.edu/~amotz/)
- [Google Scholar](http://scholar.google.com/scholar?q=amotz+bar-noy&hl=en&btnG=Search&as_sdt=1,33&as_sdtp=on)
- [DBLP](http://www.informatik.uni-trier.de/~ley/db/indices/a-tree/b/Bar=Noy:Amotz.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Theory and Degree Sequences
**The paper assumes:** graph theory, degree sequences, bipartite graphs, graph realizability theorems
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of graph theory focusing on degree sequences and bipartite graph realizations.

To understand the paper on bipartite multigraph degree realizations, a solid grasp of classical graph theory concepts—especially degree sequences, bipartite graphs, and related characterizations like Gale-Ryser—is essential. The rigorous course offers a deep, structured university-level treatment of these topics, while the fast track provides a concise, visual introduction to key graph theory concepts focused on degrees and bipartite graphs. Choose the rigorous option for thorough mastery and the fast track for a quick, intuitive overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Advanced Graph Theory - Prof Rajiv Misra | IIT Patna - NPTEL](https://www.youtube.com/playlist?list=PLEAYkSg4uSQ3NwwQtfSgnKPF5x4iI_XTb) — Rahul Madhavan · 24 videos · 18.6h across 24 episodes

**Watch only this:** Lectures 3 (Eulerian Circuits, Vertex Degrees and Counting), 4 (The Chinese Postman Problem and Graphic Sequences), 7 (Matchings and Covers), 8 (Independent Sets, Covers and Maximum Bipartite Matching), and 9 (Weighted Bipartite Matching), about 4 hours total — these cover vertex degrees, graphic sequences, and bipartite matchings foundational to the paper's results.

*Why it unblocks this paper:* This advanced graph theory course by Prof Rajiv Misra covers vertex degrees, bipartite matching, and graphic sequences, directly supporting understanding of degree sequence realizations and bipartite multigraph characterizations central to the paper.

*If you want all of it:* 18.6 hours across all 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Theory Visualized!](https://www.youtube.com/playlist?list=PLDtUmhkxbssVv-cntu_xenpZH80DYbTcd) — Homealone Specifications · 6 videos · 0.4h across 6 episodes

**Watch only this:** Episodes 0 (Introduction), 2 (Class of Graphs), 3 (Degrees of a Vertex), and 5 (Degree Sequences), about 16 minutes total — these episodes succinctly cover the fundamental graph theory concepts relevant to the paper.

*Why it unblocks this paper:* This short animated series visually explains graph theory basics including degrees of vertices, r-regular graphs, and degree sequences, providing an accessible introduction to the core concepts needed to grasp the paper's focus on degree realizations in bipartite multigraphs.

*If you want all of it:* 0.4 hours across all 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on degree realization by bipartite multigraphs, start with foundational prerequisites on classical theorems and complexity concepts that underpin the paper's theoretical framework. Begin with the Gale-Ryser and Erdős-Gallai theorems, which provide classical characterizations of degree sequences, then study NP-hardness reductions to grasp the complexity proofs. Next, review subset-sum dynamic programming as it is crucial for the algorithmic enumeration of balanced partitions. Finally, focus on the core concept of bipartite multigraph degree realization with advanced university lectures, culminating in the authors' own talk if available.

### Gale-Ryser theorem *(prerequisite)*
The Gale-Ryser theorem is a classical characterization of degree sequences realizable by bipartite graphs. Understanding this theorem is essential as the paper extends these classical results to bipartite multigraphs with bounded multiplicities. The selected video is a university-level lecture explaining the theorem in detail, suitable for advanced readers.

*How the paper uses it:* The paper builds on and extends the Gale-Ryser theorem to characterize bipartite multigraph realizations with bounded total multiplicity.

▶ [Lecture # 19 Discrete Math - Bipartite Graphs and Hall’s MarriageTheorem (Urdu/Hindi)](https://www.youtube.com/watch?v=WlT3amMH6B0) — Dr. Ghulam Mustafa · 27:27 · 5y ago

### Erdős-Gallai theorem *(prerequisite)*
The Erdős-Gallai theorem provides a classical characterization of degree sequences for simple graphs. It is foundational for understanding degree sequence realizations and is referenced in the paper as a basis for extending results to bipartite multigraphs. The chosen video is a research seminar-level talk that discusses the theorem and its implications in graph theory.

*How the paper uses it:* The paper uses the Erdős-Gallai theorem as a classical baseline for degree sequence realizations before extending to bipartite multigraphs.

▶ [What is...the Erdős-Gallai theorem?](https://www.youtube.com/watch?v=EpXntKw4muY) — VisualMath · 10:57 · 4y ago

### NP-hardness reductions in graph theory *(prerequisite)*
Understanding NP-hardness reductions is crucial to grasp the complexity proofs presented in the paper, especially the NP-hardness of bipartite multigraph realization without a given partition. The selected lecture is a university-level course lecture that rigorously explains polynomial-time reductions and NP-completeness with examples relevant to graph problems.

*How the paper uses it:* The paper proves NP-hardness of the bipartite multigraph realization problem via reductions from PARTITION, requiring familiarity with complexity reductions.

▶ [15. NP-Completeness](https://www.youtube.com/watch?v=iZPzBHGDsWI) — MIT OpenCourseWare · 1:25:53 · 5y ago

### Subset-sum dynamic programming *(prerequisite)*
Subset-sum dynamic programming is a key algorithmic technique used in the paper to enumerate balanced partitions of degree sequences efficiently. The chosen video is a comprehensive university lecture from MIT OpenCourseWare that covers the subset sum problem and its dynamic programming solution in depth, suitable for advanced learners.

*How the paper uses it:* The paper uses subset-sum dynamic programming to enumerate balanced partitions, which is central to their algorithmic contributions.

▶ [18. Dynamic Programming, Part 4: Rods, Subset Sum, Pseudopolynomial](https://www.youtube.com/watch?v=i9OAOk0CUQE) — MIT OpenCourseWare · 1:03:45 · 5y ago

### Bipartite multigraph degree realization
This concept is the core of the paper, focusing on realizing given degree sequences as bipartite multigraphs with parallel edges but no self-loops. The selected video is a detailed university lecture covering bipartite graphs and related concepts at an advanced level, providing the necessary background to understand the paper's contributions.

*How the paper uses it:* The paper's main focus is on characterizing and algorithmically realizing degree sequences as bipartite multigraphs.

▶ [Lecture 22](https://www.youtube.com/watch?v=XkZMZqzNz20) — COMP 1805 (Winter 2015) at Carleton University · 1:19:06 · 11y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on bipartite multigraph degree realizations, start by learning the fundamental concept of bipartite graphs and their properties. Next, build intuition on classical degree sequence characterizations with the Gale-Ryser and Erdős-Gallai theorems, which form the theoretical foundation extended by the paper. Then, grasp the complexity aspect through NP-hardness reductions, followed by the algorithmic technique of subset-sum dynamic programming used in the paper's enumeration algorithms. Finally, focus on the core concept of bipartite multigraph degree realization to connect all prior knowledge to the paper's contributions.

### Bipartite graphs *(prerequisite)*
Bipartite graphs are graphs whose vertices can be divided into two disjoint sets such that no edges connect vertices within the same set. Understanding their structure and properties is essential as the paper studies degree realizations specifically in bipartite multigraphs.

*How the paper uses it:* The paper focuses on realizing degree sequences as bipartite multigraphs, so a clear understanding of bipartite graphs is foundational.

▶ [Introduction to Bipartite Graphs](https://www.youtube.com/watch?v=cTmtc6jxbnI) — The Random Professor · 5:24 · 2y ago

### Gale-Ryser theorem *(prerequisite)*
The Gale-Ryser theorem provides a classical characterization of when two integer sequences can be realized as the degree sequences of a bipartite graph. It is a cornerstone result that the paper extends to bipartite multigraphs with bounded multiplicities.

*How the paper uses it:* The paper extends the Gale-Ryser characterization to bipartite multigraph realizations with bounded total multiplicity (Theorem 11).

▶ [Lecture # 19 Discrete Math - Bipartite Graphs and Hall’s MarriageTheorem (Urdu/Hindi)](https://www.youtube.com/watch?v=WlT3amMH6B0) — Dr. Ghulam Mustafa · 27:27 · 5y ago

### Erdős-Gallai theorem *(prerequisite)*
The Erdős-Gallai theorem characterizes degree sequences that can be realized by simple graphs. It complements the Gale-Ryser theorem and provides background on degree sequence realizations, which the paper builds upon for multigraphs.

*How the paper uses it:* The paper builds on classical degree sequence characterizations including Erdős-Gallai to study bipartite multigraph realizations.

▶ [What is...the Erdős-Gallai theorem?](https://www.youtube.com/watch?v=EpXntKw4muY) — VisualMath · 10:57 · 4y ago

### NP-hardness reductions in graph theory *(prerequisite)*
NP-hardness reductions show how solving one problem efficiently would solve another known hard problem, proving computational difficulty. Understanding these reductions helps grasp why the paper proves bipartite multigraph realization without a given partition is NP-hard.

*How the paper uses it:* The paper proves NP-hardness of the bipartite multigraph realization problem via reductions from PARTITION (Theorem 20).

▶ [What is a polynomial-time reduction? (NP-Hard + NP-complete)](https://www.youtube.com/watch?v=O7pq43hIE_0) — Easy Theory · 8:56 · 5y ago

### Subset-sum dynamic programming *(prerequisite)*
Subset-sum dynamic programming is an algorithmic technique to determine if a subset of numbers sums to a target value efficiently. The paper uses this technique to enumerate balanced partitions of degree sequences.

*How the paper uses it:* The paper uses subset-sum dynamic programming to compute all balanced partitions of a degree sequence (Algorithm 1).

▶ [18. Dynamic Programming, Part 4: Rods, Subset Sum, Pseudopolynomial](https://www.youtube.com/watch?v=i9OAOk0CUQE) — MIT OpenCourseWare · 1:03:45 · 5y ago

### Bipartite multigraph degree realization
This concept involves determining when a given degree sequence can be realized as a bipartite multigraph, allowing parallel edges but no self-loops, and optimizing edge multiplicities. It is the core focus of the paper, which extends classical results and analyzes complexity and algorithms.

*How the paper uses it:* The paper's main contribution is characterizing and analyzing bipartite multigraph degree realizations with bounded multiplicities.

▶ [Lecture 22](https://www.youtube.com/watch?v=XkZMZqzNz20) — COMP 1805 (Winter 2015) at Carleton University · 1:19:06 · 11y ago

## Already in your library

- [What is a Bipartite Graph? | Graph Theory](https://www.youtube.com/watch?v=HqlUbSA9cEY) — also for: Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult (Zilin Jiang)
- [Unweighted Bipartite Matching | Network Flow | Graph Theory](https://www.youtube.com/watch?v=GhjwOiJ4SqU) — also for: Position Auctions with a Capacity Constraint (Piotr Krysta)
- [A&DS S04E01. Maximum Matchings in Bipartite Graphs](https://www.youtube.com/watch?v=4VYVnEcLZpQ) — also for: Speeding-up Graph Algorithms via Clique Partitioning (Daniel Grosu)
- [Introduction to Matching in Bipartite Graphs (Hall's Marriage ...](https://www.youtube.com/watch?v=ooPLtxKXJPo) — also for: Bipartite Perfect Matching is in quasi-NC (Stephen A. Fenner)
- [16. Complexity: P, NP, NP-completeness, Reductions](https://www.youtube.com/watch?v=eHZifpgyH_4) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [P NP NP-Hard NP-Complete problems in Urdu/Hindi](https://www.youtube.com/watch?v=7GiM_LlzYx0) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)
- [8. NP-Hard and NP-Complete Problems](https://www.youtube.com/watch?v=e2cF8a5aAhE) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [P vs. NP and the Computational Complexity Zoo](https://www.youtube.com/watch?v=YX40hbAHx3s) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Degree Realization by Bipartite Multigraphs." The beginner project focuses on implementing and visualizing the Gale-Ryser characterization for bipartite multigraph realizations with a fixed partition. The intermediate project involves reimplementing the paper's Algorithm 1 to enumerate balanced partitions and compute maximum and total multiplicities for given degree sequences, illustrating complexity and optimization trade-offs. The advanced project extends the paper by developing heuristic methods to address the NP-hardness of bipartite multigraph realization without a given partition, targeting practical scalability for large instances relevant to wireless sensor networks.

### Beginner — Gale-Ryser Bipartite Multigraph Realization Checker
*Effort: a weekend, ~8 hours*

You build a command-line tool that takes a bipartite degree sequence and a fixed partition (a, b) and checks whether it satisfies the extended Gale-Ryser inequalities from Theorem 11, indicating realizability as a bipartite multigraph with bounded total multiplicity. The tool outputs a yes/no answer and visualizes the degree sequences and the inequalities.

**Why it shows you understood the paper:** This project demonstrates you understand the core characterization of bipartite multigraph realizations with given partitions and can implement the key mathematical conditions from the paper.

**Grounded in:** Theorem 11 provides extended Gale-Ryser inequalities characterizing t-tot-bigraphic partitions.

**Tech stack:** Python 3.11, matplotlib, argparse

**Data:** You simulate small bipartite degree sequences and partitions manually or randomly for testing, as no dataset is provided.

**Build it:**

1. Implement functions to parse input degree sequences and partitions from command line or file.
2. Code the extended Gale-Ryser inequalities as described in Theorem 11.
3. Implement a checker that verifies these inequalities for given input.
4. Add visualization of the degree sequences and inequality checks using matplotlib.
5. Write example test cases illustrating realizable and non-realizable sequences.

**Ships as:** A Python CLI tool with README explaining usage, example inputs, outputs, and plots illustrating the characterization.

**Stretch goal:** Add support for computing and displaying maximum and total multiplicities for the realizations.

### Intermediate — Balanced Partition Enumeration and Multiplicity Optimization
*Effort: 2 weekends, ~20 hours*

You reimplement Algorithm 1 from the paper to enumerate all balanced partitions of a given bipartite degree sequence using subset-sum dynamic programming. Then, you compute maximum and total multiplicities for each partition and identify partitions minimizing these metrics. You compare your results on several example sequences and discuss the trade-offs between maximum and total multiplicities.

**Why it shows you understood the paper:** This project shows you can implement the paper's core algorithmic contribution for enumerating balanced partitions and understand the complexity and optimization trade-offs between multiplicity measures.

**Grounded in:** Algorithm 1 enumerates all balanced partitions with complexity O(n^2 * |BP(d)| * min{d, |BP(d)|}), and Corollaries 31 and 32 show polynomial-time computability of maximum and total multiplicities when |BP(d)| is polynomial.

**Tech stack:** Python 3.11, numpy, matplotlib

**Data:** You generate synthetic bipartite degree sequences of moderate size (e.g., n=10-20) to test enumeration and optimization, as no real dataset is provided.

**Build it:**

1. Implement subset-sum dynamic programming to enumerate balanced partitions of a degree sequence.
2. Implement functions to compute maximum and total multiplicities for each partition.
3. Run experiments on multiple synthetic degree sequences to enumerate partitions and compute multiplicities.
4. Visualize the distribution of multiplicities and highlight partitions minimizing each metric.
5. Write a report comparing results and illustrating the trade-offs discussed in Section 4.

**Ships as:** A Python package with scripts to enumerate partitions, compute multiplicities, visualize results, and a report summarizing findings.

**Stretch goal:** Add a simple baseline that picks a random partition and compare its multiplicities to the optimized ones.

### Advanced — Heuristic Algorithms for Bipartite Multigraph Realization Without Given Partition
*Effort: 3-4 weeks*

You develop heuristic or approximation algorithms to decide bipartite multigraph realizability and optimize multiplicities without a given partition, addressing the NP-hardness established in Theorem 20. You implement heuristics inspired by subset-sum approximations and greedy partitioning, evaluate them on large synthetic degree sequences, and analyze their scalability and solution quality. You discuss applicability to wireless sensor network design as motivated in the paper's future directions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by addressing NP-hardness with practical heuristics, demonstrating deep comprehension of the problem's complexity and potential real-world applications.

**Grounded in:** Theorem 20 proves NP-hardness of bipartite multigraph realization without a given partition; future directions suggest developing heuristics or approximation algorithms for large-scale instances.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** You generate large synthetic bipartite degree sequences with varying properties to test heuristics, as no real dataset is provided.

**Build it:**

1. Review NP-hardness proof and problem formulation to understand constraints.
2. Design heuristic algorithms combining subset-sum approximations and greedy partitioning.
3. Implement heuristics and baseline random partitioning for comparison.
4. Evaluate heuristics on large synthetic degree sequences, measuring runtime and multiplicity metrics.
5. Visualize results and analyze trade-offs between solution quality and computational cost.
6. Write a detailed README discussing heuristic design, evaluation, and potential applications in wireless sensor networks.

**Ships as:** A Python repository with heuristic implementations, evaluation scripts, visualizations, and a comprehensive report on methods and results.

**Stretch goal:** Extend heuristics to handle degree sequences with self-loops or other graph families as suggested in future directions.

_No authors' code or datasets are available for this paper; all data must be synthetically generated or manually constructed based on the paper's definitions._
