---
title: "104 · Query Lower Bounds for Correlation Clustering under Memory Constraints — Periklis A. Papakonstantinou"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-periklis-a-papakonstantinou"
source_hash: "ded207b417f682b50fefbbf9e82d45dcb5cb5d9018d2dede7ad6a50a95c8d699"
sequence: 104
generator: "outreach-garden: managed"
---

# 104 · Query Lower Bounds for Correlation Clustering under Memory Constraints

## At a glance

- **Professor:** Periklis A. Papakonstantinou
- **Institution:** Rutgers University
- **Paper:** [Query Lower Bounds for Correlation Clustering under Memory Constraints](https://arxiv.org/pdf/2605.23104)
- **Authors:** Songhua He, Sumegha Garg, Periklis A. Papakonstantinou
- **Year:** 2026

## Paper overview

This paper studies the fundamental limits on how efficiently algorithms can solve the correlation clustering problem on graphs when constrained by limited memory and query access. It establishes tight lower bounds on the number of queries needed to approximate the clustering cost within a small additive error, especially under memory constraints and different query models. The work also extends these results to related graph problems like max cut and minimum bisection.

### Why it matters

**Research problem:** Understanding the query complexity and memory-query tradeoffs for approximating correlation clustering cost in large graphs, especially under memory constraints and various query models such as adjacency-matrix queries, random queries, and general graph queries.

**Why it matters:** Correlation clustering is a fundamental problem in machine learning and network analysis with applications in data clustering and graph partitioning. Efficient algorithms that use sublinear queries and limited memory are crucial for processing massive graphs. Establishing lower bounds clarifies the inherent difficulty and guides algorithm design.

**Key contributions:**

- Proved a tight Ω(n/ε²) query lower bound for approximating correlation clustering cost within additive error εn² in the adjacency-matrix query model.
- Established the first non-trivial memory-query tradeoff lower bound in the random query model, showing that limited memory algorithms require significantly more queries.
- Provided the first query lower bound Ω(n/ε) for correlation clustering in the general graph model with adjacency-matrix, neighbor, and degree queries.
- Extended lower bounds to related problems like max cut and minimum bisection.
- Introduced a noisy variant of the Distributional Boolean Hidden Partition problem (PD-BHP) to handle dense graphs and noise.

## About the professor

**Periklis A. Papakonstantinou** — associate professor, Management Science and Information Systems, Rutgers University.

Research interests: foundations of computing, computational complexity, mathematical foundations of cryptography, machine learning

### Research links

- [Faculty/profile page](http://papakons.business.rutgers.edu/)
- [Identity evidence](http://papakonstantinou.net)
- [Identity evidence](https://www.business.rutgers.edu/faculty/periklis-papakonstantinou)
- [Resolved homepage](http://papakons.business.rutgers.edu/#)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Query Lower Bounds for Correlation Clustering under Memory Constraints," start with foundational knowledge on communication complexity and information theory, as these underpin the lower bound techniques used. Next, explore sublinear algorithms for graph problems to grasp the context of query and memory constraints in large graphs. Finally, focus on the core concept of correlation clustering complexity and the authors' own presentation of their novel results to directly connect theory with their contributions.

### Communication complexity lower bounds *(prerequisite)*
Communication complexity provides the theoretical foundation for proving lower bounds on query complexity, which is central to the paper's approach. Understanding these concepts helps in grasping the reductions and complexity arguments used by the authors.

*How the paper uses it:* The paper uses communication complexity techniques to establish tight query lower bounds for correlation clustering under memory constraints.

▶ [Lower Bounds in Complexity Theory, Communication ...](https://www.youtube.com/watch?v=w3kq7vTta7c) — Institute for Advanced Study · 1:00:16

### Information theory in algorithms *(prerequisite)*
Information theory, especially concepts like entropy and Fano's inequality, is key to analyzing memory-query tradeoffs and proving lower bounds in the paper. This background aids in understanding the generalized Fano’s inequality and noisy problem variants introduced.

*How the paper uses it:* The authors apply a generalized Fano’s inequality tailored for approximation problems and use information-theoretic arguments in their proofs.

▶ [Intuitively Understanding the Shannon Entropy](https://www.youtube.com/watch?v=0GCGaw0QOhA) — Adian Liusie · 8:03

### Sublinear algorithms for graph problems *(prerequisite)*
Sublinear algorithms provide context for the challenges of processing large graphs with limited queries and memory. This background clarifies why query lower bounds and memory constraints are significant in graph clustering problems.

*How the paper uses it:* The paper studies query complexity and memory-query tradeoffs in sublinear algorithms for correlation clustering and related graph problems.

▶ [Soheil Behnezhad - Recent Progress on Sublinear Time ...](https://www.youtube.com/watch?v=8TJw_nr83ko) — DIMACS CCICADA · 50:36

### Correlation clustering complexity *(the paper's own talk)*
Understanding the complexity and challenges of correlation clustering is essential to appreciate the significance of the paper’s lower bounds. This section focuses on the problem itself and its computational intricacies.

*How the paper uses it:* Correlation clustering is the central problem studied, and the paper establishes fundamental query lower bounds for it under memory constraints.

▶ [Recent Progress on Correlation Clustering - Vincent Cohen ...](https://www.youtube.com/watch?v=R7k1HUNF6Uw) — DIMAP · 46:06

### Paper authors talk *(the paper's own talk)*
The authors' own presentation provides the most direct and detailed exposition of their novel results, techniques, and challenges. Watching this talk offers insights into their approach and the nuances of their contributions.

*How the paper uses it:* This is the authors' presentation video for the paper, directly explaining their results on query lower bounds for correlation clustering under memory constraints.

▶ [[ITCS 2026] Query Lower Bounds for Correlation Clustering under Memory Constraints](https://www.youtube.com/watch?v=zSagjpaRsk4) — Songhua He · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper on query lower bounds for correlation clustering under memory constraints. We start with basic information theory to grasp memory-query tradeoffs, then cover communication complexity which underpins the proof techniques. Next, we explore sublinear algorithms for graph problems to appreciate the context of query complexity, followed by an intuitive introduction to correlation clustering itself. Finally, we conclude with a concise presentation by the paper's authors to directly connect theory with their novel results.

### Information theory in algorithms *(prerequisite)*
Information theory helps us understand how much information can be stored or transmitted, which is crucial when analyzing algorithms that operate under memory constraints. Concepts like entropy and Fano’s inequality provide tools to prove lower bounds on what can be computed with limited memory and queries.

*How the paper uses it:* The paper uses a generalized Fano’s inequality and information-theoretic arguments to establish memory-query tradeoffs and lower bounds.

▶ [Intuitively Understanding the Shannon Entropy](https://www.youtube.com/watch?v=0GCGaw0QOhA) — Adian Liusie · 8:03

### Communication complexity lower bounds *(prerequisite)*
Communication complexity studies the minimal amount of communication needed between parties to solve a problem, which translates to query complexity in algorithms. Understanding these lower bounds is key to grasping why certain problems require many queries or large memory.

*How the paper uses it:* The authors use communication complexity techniques and reductions to Boolean Hidden Partition problems to prove query lower bounds.

▶ [Basics of Communication Complexity || @ CMU || Lecture 23a ...](https://www.youtube.com/watch?v=mQQ36cDnmR8) — Ryan O'Donnell · 19:56

### Sublinear algorithms for graph problems *(prerequisite)*
Sublinear algorithms aim to solve problems on large graphs by inspecting only a small portion of the data, often using queries. This area provides context for why query complexity and memory constraints matter when clustering or partitioning graphs.

*How the paper uses it:* The paper studies sublinear query algorithms for correlation clustering and related graph partitioning problems under memory constraints.

▶ [Algorithms for Clustering: Lessons from Sublinear Time Graph ...](https://www.youtube.com/watch?v=0XkGda_-YoQ) — EnCORE · 35:27

### Correlation clustering complexity *(the paper's own talk)*
Correlation clustering is a graph partitioning problem where the goal is to cluster vertices to minimize disagreements with given edge labels. Understanding its complexity and approximation challenges is essential to appreciate the significance of query lower bounds.

*How the paper uses it:* The paper establishes tight query lower bounds for approximating correlation clustering cost under various query and memory models.

▶ [Sublinear algorithms for correlation clustering](https://www.youtube.com/watch?v=Dxi8UnFto8U) — Simons Institute for the Theory of Computing · 49:36

### Paper authors talk *(the paper's own talk)*
A direct presentation by the authors provides a concise overview of their novel results, techniques, and implications, tying together the theoretical foundations with their contributions.

*How the paper uses it:* This video is the authors' presentation of the paper "Query Lower Bounds for Correlation Clustering under Memory Constraints."

▶ [[ITCS 2026] Query Lower Bounds for Correlation Clustering under Memory Constraints](https://www.youtube.com/watch?v=zSagjpaRsk4) — Songhua He · 6 months ago

## Already in your library

- [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Sublinear Algorithms, by Prof. Michael Kapralov](https://www.youtube.com/watch?v=4m9MJu1sZmM) — also for: Palindrome Recognition In The Streaming Model (Funda Ergün)
