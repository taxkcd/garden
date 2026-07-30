---
title: "075 · Streaming Algorithms for Graph k-Matching with Optimal or Near-Optimal Update Time — Jianer Chen"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jianer-chen"
source_hash: "e94dfcd9bb59e3f31ce1af7828ab1ee857046f1d4494837fc0a7b3db574feb9c"
sequence: 75
generator: "outreach-garden: managed"
---

# 075 · Streaming Algorithms for Graph k-Matching with Optimal or Near-Optimal Update Time

## At a glance

- **Professor:** Jianer Chen
- **Institution:** Texas A&M University
- **Paper:** [Streaming Algorithms for Graph k-Matching with Optimal or Near-Optimal Update Time](https://arxiv.org/abs/2310.10815)
- **Authors:** Jianer Chen, Qin Huang, Iyad Kanj, Qian Li, Ge Xia
- **Year:** 2023

## Paper overview

This paper develops streaming algorithms that efficiently find a matching of k edges in graphs, both weighted and unweighted, under streaming data models where edges arrive or are updated dynamically. The algorithms achieve optimal or near-optimal memory usage and update times, significantly improving previous results, especially in update time complexity.

### Why it matters

**Research problem:** Designing streaming algorithms for the graph k-matching problem that minimize both space complexity and update time in insert-only and dynamic streaming models, including for weighted graphs.

**Why it matters:** Graph matching is a fundamental problem with applications in data processing and network analysis. Streaming models are crucial for handling large-scale graphs where data arrives rapidly and memory is limited. Improving update time is critical to keep pace with high-rate data streams and avoid system failures.

**Key contributions:**

- A one-pass insert-only streaming algorithm with optimal space O(k^2) and optimal update time O(1) for maximum weighted k-matching.
- A one-pass dynamic streaming algorithm with space O(k^2 W polylog(n)) and update time O(polylog(n)) for weighted graphs, improving update time over previous algorithms.
- A hashing scheme using O(k polylog(n)) space with high success probability for perfect hashing without prior knowledge of the subset.
- A streaming approximation algorithm for maximum weighted k-matching with improved update time.
- Lower bounds showing the space and update time complexities achieved are optimal or near-optimal.

## About the professor

**Jianer Chen** — Professor, Department of Computer Science & Engineering, Texas A&M University.

Research interests: Jianer Chen's main research is centered on computer algorithms and their applications. His current research projects include algorithms and complexity theory, big data, and computer graphics.

### Research links

- [Faculty/profile page](http://faculty.cs.tamu.edu/chen)
- [Resolved homepage](https://people.engr.tamu.edu/j-chen3/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on streaming algorithms for graph k-matching, start with foundational concepts in streaming graph algorithms, universal hashing, and ℓ0-sampling, which are key technical tools used in the paper. Then, study the core combinatorial problem of graph matching algorithms to grasp the underlying problem structure. Finally, focus on the paper's central topic by watching the authors' own advanced lecture on matching, which provides direct insight into their novel streaming algorithms and theoretical contributions.

### Streaming graph algorithms *(prerequisite)*
Streaming graph algorithms provide the fundamental framework and constraints for processing large graphs with limited memory and dynamic updates, which is the setting of the paper. Understanding these algorithms is essential to appreciate the challenges and innovations in the paper's streaming k-matching algorithms.

*How the paper uses it:* The paper develops streaming algorithms under insert-only and dynamic streaming models for graph k-matching.

▶ [Graph Streaming Algorithms](https://www.youtube.com/watch?v=uIJR_2rS44k) — NPTEL - Special Lecture Series · 1:11:52

### Universal hashing techniques *(prerequisite)*
Universal hashing is a key randomized technique that enables efficient and probabilistically reliable hashing schemes, which the paper leverages to achieve optimal update times and space. A solid understanding of universal hashing is critical to grasp the paper's novel hashing scheme.

*How the paper uses it:* The paper introduces a novel universal hashing scheme that achieves perfect hashing with high probability using less space.

▶ [Lecture 23 : Universal Hashing](https://www.youtube.com/watch?v=9hsQgN524OU) — Introduction to Algorithms and Analysis · 28:47

### ℓ0-sampling in data streams *(prerequisite)*
ℓ0-sampling is a sophisticated sampling technique used in streaming algorithms to maintain representative samples of data elements, crucial for the paper's compact subgraph maintenance and update efficiency. Understanding ℓ0-sampling helps in comprehending how the paper maintains relevant graph structures in streaming.

*How the paper uses it:* The paper uses ℓ0-sampling techniques to maintain compact subgraphs containing maximum weighted k-matchings.

▶ [1W-MINDS: Piotr Indyk, June 10, Learning-Based Sampling ...](https://www.youtube.com/watch?v=YYgwNkitixI) — Mark Iwen · 57:10

### Graph matching algorithms *(the paper's own talk)*
Graph matching algorithms form the combinatorial foundation of the k-matching problem addressed in the paper. Familiarity with these algorithms is necessary to understand the problem's complexity and the significance of the paper's streaming solutions.

*How the paper uses it:* The paper focuses on streaming algorithms for the graph k-matching problem, a core combinatorial problem in graph theory.

▶ [Lecture 12: Matching](https://www.youtube.com/watch?v=CEd313PPKXQ) — MIT OpenCourseWare · 1:21:44

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand streaming algorithms for graph k-matching, starting from basic graph matching ideas, then covering streaming models and key algorithmic tools like universal hashing and ℓ0-sampling. Finally, it leads to the core streaming graph algorithms and the specific compact subgraph maintenance techniques used in the paper. The order ensures a gradual build-up from graph theory basics to the advanced streaming algorithm concepts central to the paper.

### Graph matching algorithms *(the paper's own talk)*
Graph matching is a fundamental combinatorial problem where we select edges so that no two share a vertex. Understanding basic matching algorithms and their intuition is essential to grasp the k-matching problem tackled in the paper.

*How the paper uses it:* The paper focuses on streaming algorithms to find maximum weighted k-matchings, so understanding what matchings are and how they work is foundational.

▶ [Lecture 12: Matching](https://www.youtube.com/watch?v=CEd313PPKXQ) — MIT OpenCourseWare · 1:21:44

### Streaming graph algorithms *(prerequisite)*
Streaming graph algorithms process graph data that arrives as a sequence of edges, often with strict memory and time constraints. Learning the streaming model and its challenges helps understand why specialized algorithms like those in the paper are needed.

*How the paper uses it:* The paper develops streaming algorithms for graph k-matching under insert-only and dynamic streaming models, so understanding streaming constraints is key.

▶ [Graph streaming algorithms Introduction](https://www.youtube.com/watch?v=6o_Oslhs4Ds) — NPTEL-NOC IITM · 23:13

### Universal hashing techniques *(prerequisite)*
Universal hashing is a randomized hashing method that reduces collisions and ensures good distribution with high probability. It is a key tool in streaming algorithms to efficiently update and query data structures.

*How the paper uses it:* The paper introduces a novel universal hashing scheme to achieve perfect hashing with high probability and low space, enabling efficient streaming updates.

▶ [Lecture 23 : Universal Hashing](https://www.youtube.com/watch?v=9hsQgN524OU) — Introduction to Algorithms and Analysis · 28:47

### ℓ0-sampling in data streams *(prerequisite)*
ℓ0-sampling is a technique to randomly sample nonzero elements from a data stream, which helps maintain compact representations of data. It is crucial for updating and preserving relevant subgraphs in streaming graph algorithms.

*How the paper uses it:* The paper uses ℓ0-sampling to maintain compact subgraphs that contain maximum weighted k-matchings efficiently as edges arrive or are deleted.

▶ [Algorithms to Sample From Streams - Reservoir Sampling ...](https://www.youtube.com/watch?v=Buzn4tQz-ZY) — PyCon Israel · 16:17
