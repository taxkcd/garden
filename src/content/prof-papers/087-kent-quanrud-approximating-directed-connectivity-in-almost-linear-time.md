---
title: "087 · Approximating Directed Connectivity in Almost-Linear Time — Kent Quanrud"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kent-quanrud"
source_hash: "932516c62e2ef8b2ced8fc5a7a9c1f586b78e9cc7f838a99d197bd95dcd57fe6"
sequence: 87
generator: "outreach-garden: managed"
---

# 087 · Approximating Directed Connectivity in Almost-Linear Time

## At a glance

- **Professor:** Kent Quanrud
- **Institution:** Purdue University
- **Paper:** [Approximating Directed Connectivity in Almost-Linear Time](https://arxiv.org/pdf/2512.00176)
- **Authors:** Kent Quanrud
- **Year:** 2025

## Paper overview

This paper presents new randomized algorithms that efficiently approximate the minimum edge and vertex cuts in weighted directed graphs. These algorithms run in almost-linear time, significantly improving the speed of computing connectivity measures in large directed graphs. The key innovation is a divide-and-conquer technique called "shrink-wrapping" combined with graph preconditioning, enabling fast approximation and exact algorithms for small connectivity values.

### Why it matters

**Research problem:** Computing minimum global edge and vertex cuts (connectivity) in weighted directed graphs efficiently, specifically aiming for faster algorithms with almost-linear time complexity for approximations and exact solutions for small connectivity.

**Why it matters:** Edge and vertex connectivity are fundamental graph properties with applications in network reliability, flow optimization, and combinatorial optimization. Existing algorithms for directed graphs are slower compared to undirected cases, limiting scalability to large graphs. Faster algorithms enable practical analysis of large-scale networks.

**Key contributions:**

- First almost-linear time approximation algorithms for minimum global edge and vertex cuts in weighted directed graphs.
- A novel shrink-wrap divide-and-conquer technique for rooted Steiner connectivity problems.
- Graph preconditioning method to ensure well-conditioned cuts and control graph size during recursion.
- Extension of the approach to vertex connectivity using standard auxiliary graphs.
- Exact algorithms for small vertex connectivity with improved logarithmic factors in running time.

## About the professor

**Kent Quanrud** — Assistant Professor, Dept. of Computer Science, Purdue University.

Research interests: the design and analysis of algorithms in theoretical computer science, approximation algorithms, randomized algorithms, combinatorial optimization, continuous optimization, online learning, discrete geometry, highly scalable algorithms for fundamental problems in optimization

### Research links

- [Faculty/profile page](https://www.kentquanrud.com)
- [Resolved homepage](https://www.kentquanrud.com/)
- [DBLP](https://dblp.org/pid/157/8351.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph algorithms and network flows
**The paper assumes:** graph theory, network flow algorithms, minimum cut and connectivity concepts, randomized algorithms for graphs
**Already in this field?** Skip this entirely if you have completed an advanced undergraduate course on graph algorithms covering network flows and minimum cut problems.

To understand the advanced randomized algorithms and flow-based techniques in the paper on approximating directed connectivity, a solid grasp of graph algorithms and network flow fundamentals is essential. The rigorous course option offers a comprehensive university-level lecture series on graph algorithms and flows, ideal for deep theoretical understanding. The fast track provides a concise, intuition-driven playlist focused specifically on network flow concepts, suitable for quickly gaining the core insights needed to follow the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.006 Introduction to Algorithms, Fall 2011](https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb) — MIT OpenCourseWare · 47 videos · 41.8h across 47 episodes

**Watch only this:** Lectures 13 (Breadth-First Search), 14 (Depth-First Search, Topological Sort), 15 (Single-Source Shortest Paths Problem), 16 (Dijkstra), 17 (Bellman-Ford), 23 (Computational Complexity), and 24 (Topics in Algorithms Research), about 6.5 hours total. These cover graph traversal, shortest paths, and complexity background relevant to flow and connectivity.

*Why it unblocks this paper:* MIT 6.006 Introduction to Algorithms, Fall 2011 covers foundational graph algorithms including BFS, DFS, shortest paths, and network flow concepts essential for understanding flow computations and graph contractions used in the paper.

*If you want all of it:* 41.8 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Network Flow](https://www.youtube.com/playlist?list=PLJlBfw5j7ib_6xhr7lrc_WL8X6abiY_rU) — EVERTON SANTOS DE ANDRADE JUNIOR · 30 videos · 8.3h across 30 episodes

**Watch only this:** Episodes 1 (Max-Flow Min-Cut Theorem & Ford-Fulkerson Algorithm), 4 (Ford-Fulkerson in 5 minutes), 8 (Edmonds Karp Algorithm), and 9 (Minimum cuts and maximum flow rate), about 1 hour total. These provide a focused introduction to max-flow min-cut theory and algorithms.

*Why it unblocks this paper:* The 'Graph Network Flow' playlist by Everton Santos de Andrade Junior focuses specifically on network flow algorithms and minimum cut concepts, directly relevant to the paper's core techniques involving flow computations and cut certification.

*If you want all of it:* 8.3 hours across 30 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper "Approximating Directed Connectivity in Almost-Linear Time," start with foundational concepts such as randomized algorithms, graph flow algorithms, divide-and-conquer techniques in graph algorithms, and graph preconditioning. These prerequisites build the necessary background on the algorithmic paradigms and mathematical tools used. Finally, focus on the core concept of the paper by watching the authors' own talks, which provide the most precise and direct exposition of the novel shrink-wrap technique and the overall approach.

### Randomized algorithms *(prerequisite)*
The paper's algorithms are randomized and rely on probabilistic guarantees, making an understanding of randomized algorithm techniques essential. The selected lecture from David Karger's course provides a rigorous university-level introduction to randomized algorithms, covering complexity theory and randomization methods relevant to approximation and flow algorithms.

*How the paper uses it:* The paper's randomized algorithms and high-probability guarantees depend on foundational concepts in randomized algorithms.

▶ [6 5220 Lecture 1 Introduction to Randomized Algorithms ...](https://www.youtube.com/watch?v=3ivSUyNu4DA) — David Karger's Lectures · 1:36:06

### Graph flow algorithms *(prerequisite)*
Flow computations are fundamental subroutines used to certify connectivity and cuts in the paper. The MIT OpenCourseWare lecture on Max Flow and Min Cut is a rigorous university-level resource that explains the core max-flow min-cut theorem and algorithms, providing the necessary background for understanding flow-based connectivity certification.

*How the paper uses it:* Flow computations certify connectivity and cuts, which are central to the paper's approach.

▶ [13. Incremental Improvement: Max Flow, Min Cut](https://www.youtube.com/watch?v=VYZGlgzr_As) — MIT OpenCourseWare · 10 years ago

### Divide and conquer in graph algorithms *(prerequisite)*
The shrink-wrap technique introduced in the paper is a novel divide-and-conquer approach critical to reducing problem size and recursion depth. The WilliamFiset video offers a clear and rigorous explanation of the divide-and-conquer paradigm, which is foundational to understanding the paper's algorithmic strategy.

*How the paper uses it:* Shrink-wrap is a divide-and-conquer technique that contracts parts of the graph to reduce problem size.

▶ [Divide and Conquer: The Art of Breaking Down Problems ...](https://www.youtube.com/watch?v=ib4BHvr5-Ao) — WilliamFiset · 11:22

### Graph preconditioning *(prerequisite)*
Preconditioning ensures well-conditioned cuts and controls graph size during recursion in the paper's algorithms. Although no direct lecture on graph preconditioning in connectivity is available, the Simons Institute talk on preconditioning in expectation provides advanced insights into preconditioning techniques in graph-related optimization problems, which is relevant for understanding the paper's graph conditioning approach.

*How the paper uses it:* Graph preconditioning by adding auxiliary arcs ensures well-conditioned cuts and controls the size of contracted graphs.

▶ [Preconditioning in Expectation](https://www.youtube.com/watch?v=u2pgnOYNS3o) — Simons Institute for the Theory of Computing · 31:25

### Paper author talk *(the paper's own talk)*
The authors' own talks provide the most precise and direct exposition of the paper's contributions, including the shrink-wrap technique and graph preconditioning. Kent Quanrud's lectures from the Randomized Algorithms course in Fall 2025 cover connectivity and related algorithmic techniques, making them the best resources to deeply understand the paper.

*How the paper uses it:* Kent Quanrud's lectures present the paper's main ideas and techniques directly from the author.

▶ [Connectivity and electricity](https://www.youtube.com/watch?v=uiJQi4rPKhw) — Kent Quanrud · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on approximating directed connectivity in almost-linear time, start by building foundational knowledge of randomized algorithms and graph flow algorithms, as these underpin the paper's methods. Next, learn about divide-and-conquer strategies in graph algorithms to grasp the novel shrink-wrap technique. Finally, study graph preconditioning to understand how the paper controls graph size and cut quality during recursion.

### Randomized algorithms *(prerequisite)*
Randomized algorithms use random choices to simplify or speed up computations, often providing high-probability guarantees rather than deterministic results. Understanding their basic principles and how randomness can help in algorithm design is essential for grasping the paper's approach.

*How the paper uses it:* The paper's algorithms are randomized and rely on probabilistic guarantees to achieve almost-linear time complexity.

▶ [Lecture 1: Introduction to Randomized Algorithms](https://www.youtube.com/watch?v=rfAHeilGWoE) — NPTEL IIT Guwahati · 44:09

### Graph flow algorithms *(prerequisite)*
Graph flow algorithms compute the maximum flow or minimum cut between nodes in a network, which is fundamental for certifying connectivity and cuts. Learning the max-flow min-cut theorem and basic flow algorithms like Ford-Fulkerson builds intuition for how connectivity is measured and approximated.

*How the paper uses it:* Flow computations are fundamental subroutines used to certify connectivity and cuts in the paper's algorithms.

▶ [Network Flows: Max-Flow Min-Cut Theorem (& Ford-Fulkerson Algorithm)](https://www.youtube.com/watch?v=oHy3ddI9X3o) — Back To Back SWE · 6 years ago

### Divide and conquer in graph algorithms *(prerequisite)*
Divide and conquer breaks a complex problem into smaller subproblems, solves them independently, and combines the results. This strategy is key to the paper's shrink-wrap technique, which contracts parts of the graph to reduce problem size recursively.

*How the paper uses it:* The shrink-wrap technique is a novel divide-and-conquer approach critical to the paper's method for approximating connectivity.

▶ [Divide and Conquer: The Art of Breaking Down Problems ...](https://www.youtube.com/watch?v=ib4BHvr5-Ao) — WilliamFiset · 11:22


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of Kent Quanrud's 2025 paper on almost-linear time approximation algorithms for directed graph connectivity. The beginner project focuses on implementing and visualizing the core shrink-wrap divide-and-conquer idea on small graphs using familiar tools. The intermediate project involves reimplementing the paper's randomized approximation algorithm for minimum global edge cuts on a public directed graph dataset, comparing it to a simple baseline. The advanced project extends the shrink-wrap technique toward dynamic graph connectivity, addressing one of the paper's future directions and limitations, and exploring challenges in adapting the method to dynamic settings.

### Beginner — Shrink-Wrap Divide-and-Conquer Visualization on Small Directed Graphs
*Effort: a weekend, ~8 hours*

You build a small interactive tool that implements the shrink-wrap divide-and-conquer approach on toy weighted directed graphs. The tool visualizes the process of identifying minimum (r, t)-cuts, contracting the graph parts, and reducing the problem size proportional to uncertified terminals. This helps concretely understand the core recursive contraction mechanism.

**Why it shows you understood the paper:** A professor would see that you grasp the key shrink-wrap technique by reproducing its core recursive contraction and cut certification steps visually, demonstrating comprehension of the divide-and-conquer approach and its effect on graph size.

**Grounded in:** Shrink-wrap is a divide-and-conquer technique that contracts parts of the graph to reduce problem size proportional to uncertified terminals.

**Tech stack:** Python 3.11, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic small weighted directed graphs generated within the notebook to illustrate the algorithm steps.

**Build it:**

1. Implement a function to compute minimum (r, t)-cuts using single-commodity max flow on small directed graphs with NetworkX.
2. Implement the shrink-wrap contraction step: identify the cut (A, B) and contract A to reduce graph size.
3. Build a recursive divide-and-conquer routine applying shrink-wrap until all terminals are certified.
4. Visualize each recursion step and graph contraction using Matplotlib to show graph changes and cuts.
5. Test the tool on several small synthetic graphs with varying terminal sets and weights.

**Ships as:** A Jupyter notebook with code and visualizations demonstrating the shrink-wrap divide-and-conquer process on example graphs, with explanatory comments.

**Stretch goal:** Add interactive widgets (e.g., with ipywidgets) to allow users to select root and terminals and see the algorithm progress dynamically.

### Intermediate — Approximate Minimum Global Edge Cuts in Directed Graphs Using Shrink-Wrap
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's randomized almost-linear time approximation algorithm for minimum global edge cuts in weighted directed graphs using the shrink-wrap technique. You apply it to a publicly available directed graph dataset (e.g., a small web graph or citation network) as a substitute for the paper's data. You compare your approximate cut values and runtime to a simple baseline such as the classical Stoer-Wagner algorithm adapted for directed graphs or a naive min-cut approach.

**Why it shows you understood the paper:** This project shows you can translate the paper's core algorithmic contributions into working code and evaluate its performance and approximation quality on real data, demonstrating deeper understanding beyond toy examples.

**Grounded in:** A (1 + ε)-approximate minimum global edge cut can be computed with high probability in randomized time O(m^{1+o(1)}/ε), using O(log^4(n)/ε) single-commodity flow computations.

**Tech stack:** Python 3.11, NetworkX, NumPy, SciPy

**Data:** Use a publicly available small directed graph dataset such as the SNAP directed web graph or citation network as a substitute for the paper's weighted directed graphs.

**Build it:**

1. Implement or adapt a single-commodity max flow algorithm suitable for weighted directed graphs.
2. Implement the shrink-wrap divide-and-conquer algorithm for approximate minimum global edge cuts following the paper's description.
3. Precondition the graph by adding auxiliary arcs as described to ensure well-conditioned cuts.
4. Run your algorithm on the chosen public directed graph dataset to compute approximate minimum global edge cuts.
5. Implement a simple baseline min-cut algorithm for directed graphs for comparison.
6. Compare the approximation quality and runtime of your implementation against the baseline and report results.

**Ships as:** A GitHub repository with code, scripts to run experiments on the chosen dataset, and a README reporting approximation results, runtime comparisons, and explanations of the implementation.

**Stretch goal:** Extend the implementation to approximate minimum global vertex cuts using the reduction to auxiliary edge-capacitated graphs as described in the paper.

### Advanced — Extending Shrink-Wrap to Dynamic Directed Graph Connectivity Approximation
*Effort: a few weeks, ~60+ hours*

You develop an extension of the shrink-wrap divide-and-conquer technique to handle dynamic updates (edge insertions and deletions) in directed graphs, approximating minimum global edge connectivity efficiently over time. You design and implement data structures to maintain contracted graphs and preconditioning under dynamic changes, addressing challenges in adapting the static algorithm. You evaluate your approach on synthetic dynamic graph streams and analyze trade-offs in update time and approximation quality.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by adapting the novel shrink-wrap method to dynamic graph connectivity problems, demonstrating research-level insight and technical skill in algorithm design and implementation.

**Grounded in:** Future directions: Developing deterministic versions of the algorithms; Extending the shrink-wrap technique and preconditioning to other graph connectivity and cut problems, including dynamic graph connectivity.

**Tech stack:** C++17, Boost Graph Library, Google Benchmark, Python 3.11 (for scripting and visualization)

**Data:** Synthetic dynamic weighted directed graphs generated by scripted edge insertions and deletions to simulate evolving networks.

**Build it:**

1. Study the static shrink-wrap algorithm and identify components sensitive to graph changes.
2. Design data structures to maintain contracted graphs and auxiliary arcs under dynamic updates.
3. Implement dynamic updates for edge insertions and deletions, updating preconditioning and contracted graphs incrementally.
4. Implement an approximate minimum global edge cut query on the dynamic graph using the maintained structures.
5. Generate synthetic dynamic graph streams and benchmark update times and approximation quality against recomputing from scratch.
6. Analyze limitations, overheads, and propose optimizations or heuristics to improve practical performance.

**Ships as:** A GitHub repository with C++ implementation of the dynamic shrink-wrap algorithm, benchmarking scripts, and a detailed README discussing design decisions, experimental results, and challenges encountered.

**Stretch goal:** Explore randomized sampling and pruning techniques from the paper to reduce overhead in the dynamic setting and improve update efficiency.
