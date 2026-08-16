---
title: "474 · A two-step linear programming approach for repeater placement in large-scale quantum networks — Qing Cao"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-qing-cao"
source_hash: "9013769b4a2e8c8907d78f7cb258dda2c2e998238534d433cfb7ea4fdb3d3522"
sequence: 474
generator: "outreach-garden: managed"
---

# 474 · A two-step linear programming approach for repeater placement in large-scale quantum networks

## At a glance

- **Professor:** Qing Cao
- **Institution:** University of Tennessee
- **Paper:** [A two-step linear programming approach for repeater placement in large-scale quantum networks](https://doi.org/10.1016/j.comnet.2024.110795)
- **Authors:** Romtham Sripotchanart, Weisheng Si, Rodrigo N. Calheiros, Qing Cao, Tie Qiu
- **Year:** 2024

## Paper overview

This paper addresses the problem of efficiently placing quantum repeaters in large-scale quantum networks to enable reliable long-distance quantum communication. Quantum repeaters are expensive devices that reduce error rates in qubit transmission over long distances. The authors propose a novel two-step linear programming (TSLP) approach that significantly reduces computational complexity compared to existing integer linear programming methods, making it practical for large networks. Their method also improves network reliability by ensuring higher node connectivity.

### Why it matters

**Research problem:** Minimizing the number of quantum repeaters placed in a quantum network while satisfying performance requirements such as ensuring k node-disjoint paths between end nodes and limiting the maximum distance between repeaters or end nodes to a threshold (Lmax). Existing optimal solutions use integer linear programming with O(n^2) variables, which is computationally infeasible for large networks.

**Why it matters:** Quantum networks are essential for applications like Quantum Key Distribution and distributed quantum computing, but quantum repeaters are costly and complex to deploy. Efficient placement of repeaters is critical to reduce deployment costs and ensure reliable, scalable quantum communication infrastructure, which is foundational for realizing the Quantum Internet.

**Key contributions:**

- Formal proof that the Quantum Repeater Allocation (QRA) problem is NP-hard.
- Development of the TSLP approach that solves QRA suboptimally but efficiently with O(n) variables and approximately O(n^2) runtime in practice.
- Introduction of the Feed Forward Minimum-Cost Flow (FF-MCF) technique to optimize path overlap and reduce repeater count.
- Extensive experiments on synthetic and real-world networks demonstrating TSLP's scalability and improved node connectivity compared to prior methods.
- Definition of the Repeater Graph concept to evaluate network reliability via node connectivity.

## About the professor

**Qing Cao** — Associate Professor, Department of Electrical Engineering and Computer Science, University of Tennessee.

Research interests: trustworthy AI and cyberinfrastructure for safety-critical, data-intensive systems

### Research links

- [Faculty/profile page](http://web.eecs.utk.edu/~qcao1)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Network flow optimization
**The paper assumes:** minimum-cost flow problems, linear programming formulations of network flows, node-disjoint path optimization
**Already in this field?** Skip this entirely if you already understand minimum-cost flow problems and their linear programming formulations in network optimization.

This background covers network flow optimization, focusing on minimum-cost flow problems essential to understanding the two-step linear programming approach (TSLP) for quantum repeater placement. The rigorous course option provides a deep, university-level treatment of discrete optimization and network flows, while the fast track offers a concise, intuitive introduction to network flow models and minimum-cost flow, suitable for quickly grasping the core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Discrete Optimization (University of Victoria Math 428/529)](https://www.youtube.com/playlist?list=PLtxJg53s2o0MAC2sfZDuhKYAHgj_NrGVv) — Jonathan Noel · 23 videos · 27.8h across 23 episodes

**Watch only this:** Lectures 4 to 11 (Discrete Optimization Lecture 4: Introduction to Linear Programming through Discrete Optimization Lecture 11: Max-Flow and Ford–Fulkerson Algorithm), about 8.5 hours — these cover LP basics, duality, and max-flow/min-cost flow fundamentals essential for understanding the TSLP approach.

*Why it unblocks this paper:* This University of Victoria course on Discrete Optimization covers linear programming, network flows, and minimum-cost flow problems in depth, directly supporting the paper's core method of formulating k node-disjoint shortest paths as a minimum-cost flow LP.

*If you want all of it:* 27.8 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Network Optimization Models](https://www.youtube.com/playlist?list=PLTZ6ImmUwJHjn5oUidt2z0H1mbqbFi055) — Greg Tanner · 6 videos · 1.7h across 6 episodes

**Watch only this:** Episodes 1 to 3 (Introduction to Network Optimization Models, Shortest Path Example - Network Optimization, Minimum Cost Flow Example - Network Optimization), about 51 minutes — these cover the foundational concepts and minimum-cost flow formulation relevant to the paper's approach.

*Why it unblocks this paper:* Greg Tanner's Network Optimization Models playlist provides a concise, clear introduction to shortest path and minimum cost flow problems with practical examples, ideal for quickly grasping the key network flow concepts used in the paper.

*If you want all of it:* 1.7 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on two-step linear programming for quantum repeater placement, start with foundational knowledge of linear programming and minimum-cost flow algorithms, as these are key optimization tools used in the approach. Next, build understanding of node connectivity in networks to appreciate the network reliability improvements. Finally, focus on the core concept of quantum repeater placement optimization, including the authors' own talk if available, to grasp the novel contributions and practical implications of their method.

### Linear programming for network design *(prerequisite)*
Linear programming (LP) is the foundational optimization technique underlying the two-step approach proposed in the paper. Understanding LP, including formulations, duality, and solution methods like the simplex algorithm, is essential to grasp how the authors reduce problem complexity and solve subproblems efficiently.

*How the paper uses it:* The paper's two-step linear programming approach relies on LP formulations to find node-disjoint paths and minimize repeater counts.

▶ [24. Linear Programming and Two-Person Games](https://www.youtube.com/watch?v=feb9j65Iz4w) — MIT OpenCourseWare · 53:34 · 7 years ago

### Minimum-cost flow algorithms *(prerequisite)*
Minimum-cost flow algorithms are key to solving the first step of the authors' approach, which finds k node-disjoint shortest paths via a minimum-cost flow linear program. A detailed understanding of these algorithms, including problem definition and solution techniques, is critical to appreciate the computational efficiency gains.

*How the paper uses it:* Step 1 of the TSLP approach formulates the path-finding problem as a minimum-cost flow LP.

▶ [Lec-23 Minimum Cost Flow Problem](https://www.youtube.com/watch?v=UtSrgTsKUfU) — nptelhrd · 58:32 · 16 years ago

### Node connectivity in networks *(prerequisite)*
Node connectivity measures the robustness of a network by quantifying the minimum number of nodes whose removal disconnects the network. This concept is central to evaluating the reliability improvements achieved by the authors' method, which ensures higher node connectivity through node-disjoint paths.

*How the paper uses it:* The paper demonstrates that TSLP achieves higher node connectivity, improving network reliability.

▶ [WAOA.1.2 2-node-connectivity network design](https://www.youtube.com/watch?v=a-QQqDGAYqw) — Conference ALGO2020 · 24:46 · 5 years ago

### Quantum repeater placement optimization
This concept addresses the core problem of minimizing quantum repeater deployment while ensuring reliable quantum communication. Understanding the challenges and optimization strategies in repeater placement is essential to appreciate the paper's novel two-step linear programming approach and its practical benefits.

*How the paper uses it:* The paper proposes a novel TSLP method to optimize quantum repeater placement in large-scale networks.

▶ [Hugues de Riedmatten - Quantum Repeaters](https://www.youtube.com/watch?v=sF4y6hjy8Dg) — QCrypt 2015 · 1:26:10 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on optimizing quantum repeater placement in large-scale quantum networks, start by learning the basics of linear programming and minimum-cost flow algorithms, which underpin the authors' two-step optimization approach. Then, build intuition about quantum repeaters and their role in quantum communication networks, followed by understanding network robustness through node connectivity. Finally, focus on the core problem of quantum repeater placement optimization to see how these concepts come together in the paper's novel method.

### Linear programming for network design *(prerequisite)*
Linear programming (LP) is a mathematical optimization technique used to find the best outcome in a system modeled by linear relationships. It is foundational for designing networks efficiently by optimizing resource allocation under constraints. Understanding LP helps grasp how the paper formulates and solves the repeater placement problem.

*How the paper uses it:* The paper's two-step approach relies on linear programming formulations to efficiently find paths and place repeaters in the network.

▶ [24. Linear Programming and Two-Person Games](https://www.youtube.com/watch?v=feb9j65Iz4w) — MIT OpenCourseWare · 53:34 · 7 years ago

### Minimum-cost flow algorithms *(prerequisite)*
Minimum-cost flow algorithms find the cheapest way to send flow through a network while respecting capacity constraints. They are key to solving routing problems where costs and capacities matter, such as finding shortest disjoint paths. This concept is crucial for understanding Step 1 of the paper's approach.

*How the paper uses it:* Step 1 of the paper uses a minimum-cost flow linear program to find k node-disjoint shortest paths between end nodes.

▶ [CSE 550 (2022, Fall): 3.6 The Minimum-Cost-Flow Problem](https://www.youtube.com/watch?v=0tjpC0MCwY8) — Joshua J. Daymude · 14:30 · 3 years ago

### Quantum repeater placement optimization
Quantum repeaters extend the distance over which quantum information can be reliably transmitted by reducing errors. Optimizing their placement minimizes cost while ensuring network reliability. This concept ties together quantum communication needs with optimization techniques.

*How the paper uses it:* The paper addresses the problem of minimizing the number of quantum repeaters while ensuring k node-disjoint paths and distance constraints in large quantum networks.

▶ [How quantum repeater networks work, and the evolution of this technology](https://www.youtube.com/watch?v=OpXFtioijF8) — Aliro · 5:53 · 3 years ago

### Node connectivity in networks
Node connectivity measures how robust a network is by counting the minimum number of nodes that must be removed to disconnect the network. Higher node connectivity means more reliable communication paths. Understanding this helps appreciate the paper's focus on ensuring node-disjoint paths for robustness.

*How the paper uses it:* The paper improves network reliability by ensuring higher node connectivity through node-disjoint paths between end nodes.

▶ [WAOA.1.2 2-node-connectivity network design](https://www.youtube.com/watch?v=a-QQqDGAYqw) — Conference ALGO2020 · 24:46 · 5 years ago

## Already in your library

- [DM 01 Max Flow and Min Cut Theorem Transport Network Flow Example Solution](https://www.youtube.com/watch?v=a0XlX0NwRhM) — also for: Efficiently Restructuring Sovereign Debt via Arctic Auctions with Convex Costs (Vijay V. Vazirani)
- [Introduction to Network Neuroscience: Complex Attributes of Structural Connectivity 1. OLAF SPORNS](https://www.youtube.com/watch?v=aOWDZI6W2qM) — also for: White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity (Zhaohua Ding)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the TSLP approach for quantum repeater placement. The beginner project recreates a core network reliability metric on a small synthetic graph, the intermediate project implements the two-step linear programming method on a public graph dataset to compare repeater placement and connectivity, and the advanced project extends the method to dynamic network parameters, addressing a stated limitation of the paper.

### Beginner — Node Connectivity Visualization on Small Gabriel Graph
*Effort: a weekend, ~8 hours*

You build a small Python script that generates a synthetic Gabriel graph with about 20 nodes and computes node connectivity metrics relevant to quantum repeater placement. You visualize node-disjoint paths between selected node pairs and highlight repeater placement candidates based on simple heuristics.

**Why it shows you understood the paper:** This project shows you understand the concept of node connectivity and its importance in quantum network reliability, a key contribution of the paper. It demonstrates grasp of the Repeater Graph concept and the difference between node-disjoint and edge-disjoint paths.

**Grounded in:** Key contribution: Definition of the Repeater Graph concept to evaluate network reliability via node connectivity.

**Tech stack:** Python 3.11, NetworkX, Matplotlib

**Data:** Synthetic Gabriel graph generated using NetworkX based on the paper's description of synthetic graphs.

**Build it:**

1. Install NetworkX and Matplotlib Python packages.
2. Generate a Gabriel graph with ~20 nodes using NetworkX's geometric graph functions.
3. Implement a function to compute node connectivity between selected node pairs.
4. Visualize the graph highlighting node-disjoint paths and potential repeater nodes.
5. Write a README explaining the relation to the paper's node connectivity and repeater placement concepts.

**Ships as:** A GitHub repo with Python scripts generating the graph, computing node connectivity, visualizing paths, and a README linking these to the paper's reliability metric.

**Stretch goal:** Add a simple heuristic to select repeaters that maximize shared nodes among paths, inspired by the Feed Forward MCF technique.

### Intermediate — Reimplementation of TSLP on SURFnet Network Data
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's two-step linear programming (TSLP) approach to quantum repeater placement using Python and an LP solver. You apply it to a smaller-scale version of the SURFnet real-world network (or a substitute public network graph) to find k node-disjoint shortest paths and determine repeater placement. You compare your results against a baseline edge-disjoint path method and report node connectivity and repeater count.

**Why it shows you understood the paper:** This project shows you can translate the core TSLP method from the paper into working code, understand the problem's complexity, and evaluate trade-offs between repeater count and network robustness. It demonstrates comprehension of the two-step LP formulation and the practical scalability improvements.

**Grounded in:** Key contributions: Development of the TSLP approach with O(n) variables and Feed Forward MCF technique; Key results: TSLP runs faster and achieves higher node connectivity than LBF baseline.

**Tech stack:** Python 3.11, PuLP or OR-Tools for LP/ILP solving, NetworkX, Matplotlib or Plotly for visualization

**Data:** SURFnet network data as described in the paper is not publicly available; you use a publicly available network graph dataset (e.g., Internet topology data or a synthetic Gabriel graph with ~100 nodes) as a substitute.

**Build it:**

1. Set up Python environment with LP solver (PuLP or OR-Tools) and NetworkX.
2. Implement Step 1: formulate and solve the minimum-cost flow LP to find k node-disjoint shortest paths between selected node pairs.
3. Implement Step 2: formulate and solve the ILP to minimize repeater count supporting these paths.
4. Implement a simple Feed Forward MCF heuristic to increase shared nodes among paths.
5. Compare results (repeater count, node connectivity) against a baseline edge-disjoint path method.
6. Visualize the network, paths, and repeater placements; write a detailed README linking implementation to paper methods and results.

**Verified links from the paper:**

- <https://github.com/ekae/TSLP_QRA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing TSLP on a real or substitute network graph, comparison against baseline, visualizations, and a README explaining the approach and results.

**Stretch goal:** Incorporate runtime performance measurements and analyze scalability trends with increasing network size.

### Advanced — Adaptive Quantum Repeater Placement with Dynamic Network Parameters
*Effort: 3-4 weeks*

You extend the TSLP approach to handle dynamic or heterogeneous quantum networks by allowing variable maximum link lengths (Lmax) and adaptive number of node-disjoint paths (k) based on network usage patterns. You implement heuristic or metaheuristic methods to balance repeater count and node connectivity dynamically. You evaluate your approach on synthetic dynamic network scenarios and compare robustness and resource usage.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding of the TSLP method and its practical constraints. It shows ability to innovate beyond the paper by integrating adaptive optimization and dynamic network modeling, which could lead to publishable insights.

**Grounded in:** Limitations: Fixed Lmax and k assumptions; Future directions: Extending approach to dynamic or heterogeneous quantum networks with variable link qualities and repeater capabilities.

**Tech stack:** Python 3.11, PuLP or OR-Tools, NetworkX, NumPy, Matplotlib, possibly heuristic libraries like DEAP or custom heuristics

**Data:** Synthetic dynamic network graphs generated by varying node positions and link thresholds over time, simulating changing Lmax and k requirements.

**Build it:**

1. Review and reimplement core TSLP approach as baseline.
2. Design data structures and generators for dynamic network scenarios with variable Lmax and k.
3. Develop heuristics or metaheuristics to adapt repeater placement and path selection dynamically.
4. Integrate heuristics with LP formulations to solve adaptive repeater placement.
5. Evaluate on multiple synthetic dynamic network instances, measuring repeater count, node connectivity, and runtime.
6. Document findings and compare with static TSLP results in a comprehensive README.

**Ships as:** A GitHub repo with code for adaptive repeater placement, synthetic dynamic network generators, evaluation scripts, and a detailed README discussing methodology, results, and relation to the paper's limitations and future directions.

**Stretch goal:** Explore integration of entanglement source deployment models or free-space link considerations as additional dynamic parameters.
