---
title: "1003 · Efficient Direct-Connect Topologies for Collective Communications — Arvind Krishnamurthy"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-arvind-krishnamurthy"
source_hash: "ea3d60dfa0c54307b14d726e74c82de3f6313507be0a256d2d57edd56eeaf06e"
sequence: 1003
generator: "outreach-garden: managed"
---

# 1003 · Efficient Direct-Connect Topologies for Collective Communications

## At a glance

- **Professor:** Arvind Krishnamurthy
- **Institution:** University of Washington
- **Paper:** [Efficient Direct-Connect Topologies for Collective Communications](https://arxiv.org/pdf/2202.03356)
- **Authors:** Liangyu Zhao, Jason Fantl, Siddharth Pal, Prithwish Basu, Tapan Chugh, Joud Khoury, Weiyang Wang, Arvind Krishnamurthy
- **Year:** 2025

## Paper overview

This paper develops new network topologies and communication schedules optimized for collective communication operations in distributed computing clusters, especially for machine learning and high-performance computing workloads. It addresses the challenge of designing direct-connect networks with limited node degrees that balance latency and bandwidth efficiency. The authors propose algorithmic methods to synthesize scalable topologies and schedules, evaluate them on real testbeds and simulations, and demonstrate significant performance improvements over existing methods.

### Why it matters

**Research problem:** How to efficiently construct high-performance direct-connect network topologies and corresponding communication schedules for collective operations, given constraints on node degree and network performance characteristics, to optimize latency and bandwidth trade-offs.

**Why it matters:** Collective communication operations are critical overheads in large-scale distributed machine learning and HPC. Existing topologies and algorithms either have high latency or bandwidth inefficiencies, especially under degree constraints of optical circuit switching fabrics. Improving these can significantly reduce communication times and improve training and computation efficiency.

**Key contributions:**

- Introduced expansion techniques (line graph, degree expansion, Cartesian product) to synthesize scalable direct-connect topologies and schedules preserving latency or bandwidth optimality.
- Developed a polynomial-time BFB schedule generation algorithm that produces low-latency, bandwidth-balanced collective communication schedules for large-scale topologies with symmetry properties.
- Created a topology finder that searches and identifies Pareto-efficient topologies balancing total-hop latency and bandwidth performance for given cluster sizes and degrees.
- Implemented compilers to lower schedules to GPU and CPU runtimes, integrating with ML frameworks like PyTorch via MSCCL and oneCCL.
- Evaluated on a 12-node GPU cluster and a 54-node CPU supercomputer, showing >30% reduction in collective communication time for DNN training and up to 3.1× speedup for HPC workloads.

## About the professor

**Arvind Krishnamurthy** — Short-Dooley Professor, Paul G. Allen School of Computer Science & Engineering, University of Washington.

Research interests: building effective and robust computer systems in the context of both data centers and Internet-scale systems, programmable networks and systems for machine learning

### Research links

- [Faculty/profile page](http://www.cs.washington.edu/people/faculty/arvind)
- [Professor website](https://sites.google.com/cs.washington.edu/arvind)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Theory and Network Topologies
**The paper assumes:** graph theory, network topology design, graph expansions, and graph symmetry properties
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of graph theory and network topology concepts.

Understanding graph theory and network topologies is essential for grasping the design and analysis of scalable direct-connect topologies and communication schedules in this paper. The rigorous course option offers a deep, structured university-level lecture series on computer networks, covering foundational concepts of network topology and related protocols. The fast track provides a concise, focused introduction to graph theory basics, enabling quick comprehension of key graph concepts relevant to the paper's topology synthesis techniques.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lectures: Computer Networks-Digital Image Processing-Computer Graphics-Analysis of Algorithms \[nptelhrd\]-Programming Paradigms \[Stanford\]](https://www.youtube.com/playlist?list=PLF63F34AF8FE7126F) — Petros Tsoutouras · 184 videos · 58.8h across the first 60 episodes

**Watch only this:** Lectures 2 (Network Topology) and 3 (Physical Medium - I), about 2 hours — these cover network topology fundamentals and physical layer concepts relevant to direct-connect topologies.

*Why it unblocks this paper:* This university lecture series on Computer Networks covers network topology in detail and provides foundational knowledge on network structures, which directly supports understanding the paper's topology design and communication scheduling.

*If you want all of it:* About 58.8 hours across the first 60 episodes if a comprehensive understanding of computer networks is desired.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Theory with imran idrees || Graph Theory || Applications of Graph Theory](https://www.youtube.com/playlist?list=PLZBLQxIyx29g5-fnel3SxP59cMpx5cfo6) — Expert College · 11 videos

**Watch only this:** Episodes 1-5 (Types of graph parts 1-3, Compliment of Graph, and Properties of compliment), about 35 minutes — these cover essential graph types and properties needed to follow the paper's graph-based methods.

*Why it unblocks this paper:* This short playlist on Graph Theory provides a quick, clear introduction to graph types and properties, which are crucial for understanding the paper's use of line graphs, Cartesian products, and symmetry in topology synthesis.

*If you want all of it:* About 1.3 hours across the first 10 episodes for a broader overview of graph theory concepts.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Efficient Direct-Connect Topologies for Collective Communications," start by building foundational knowledge on graph diameter and Moore bounds, which underpin latency optimality in network topologies. Then, study collective communication algorithms to grasp the scheduling and communication patterns in distributed clusters. Next, learn about optical circuit switching hardware constraints that motivate the paper's topology design. Finally, focus on the paper's core contributions: network topology expansion techniques and the authors' own talk to understand their novel synthesis and scheduling methods.

### Graph diameter and Moore bounds *(prerequisite)*
Understanding graph diameter and Moore bounds is critical because the paper leverages these concepts to achieve latency optimality and diameter preservation in synthesized topologies. These mathematical bounds provide theoretical limits on network performance metrics such as shortest path lengths and node connectivity.

*How the paper uses it:* The paper proves that line graph expansion preserves Moore optimality, a key latency metric.

▶ [32 Combinatorics Intro: The degree-diameter problem, Moore bound, Hoffman-Singleton theorem](https://www.youtube.com/watch?v=fSoaYXpFrkQ) — Sebi Cioaba · 50:47 · 4y ago

### Collective communication algorithms *(prerequisite)*
Collective communication algorithms form the basis for understanding how communication schedules are constructed and optimized in distributed systems. Familiarity with MPI collective operations and their communication patterns is essential to appreciate the scheduling improvements proposed in the paper.

*How the paper uses it:* The paper develops polynomial-time schedule generation algorithms for collective communication.

▶ [Week 5: Lecture 3: Collective Communication in MPI](https://www.youtube.com/watch?v=pKlPIwdGSbE) — NPTEL IIT Bombay · 26:21 · 1y ago

### Optical circuit switching in data centers *(prerequisite)*
Optical circuit switching hardware imposes constraints such as limited node degree and static topology duration, which motivate the paper's focus on direct-connect topologies with bounded degrees. Understanding this hardware context clarifies the practical relevance and design trade-offs addressed.

*How the paper uses it:* The paper targets degree-constrained topologies motivated by optical circuit switching fabrics in data centers.

▶ [Jupiter Evolving: Transforming Google's Datacenter Network via Optical Circuit (TS 1, SIGCOMM'22)](https://www.youtube.com/watch?v=Hfl-i56hZUg) — ACM SIGCOMM · 21:58 · 4y ago

### Network topology expansion techniques
This concept covers the core methods the paper introduces to scale small optimal topologies to large cluster sizes while preserving performance metrics. Understanding these expansion techniques is crucial to grasp how the authors synthesize scalable, efficient network topologies.

*How the paper uses it:* The paper's main contribution is the introduction of expansion techniques like line graph and degree expansion to synthesize scalable topologies.

▶ [Lec-6: Topologies in Computer Networks | Part-1 | All imp points of Mesh, Star, Hub, Bus, Hybrid](https://www.youtube.com/watch?v=uDulBxDb7GM) — Gate Smashers · 10:43 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on efficient direct-connect topologies for collective communications, start by learning the basics of network topologies and their types to build intuition about how nodes connect in a network. Then, grasp the concept of collective communication algorithms, which are fundamental to how data is exchanged in distributed systems. Next, explore graph diameter and Moore bounds to understand latency and optimality in network design. Follow this with an introduction to optical circuit switching to appreciate the hardware constraints motivating the paper's approach. Finally, learn about the paper's core methods: network topology expansion techniques and the Breadth-First Broadcast scheduling algorithm, which together enable scalable, low-latency communication schedules.

### Network topology expansion techniques *(prerequisite)*
Network topology expansion techniques explain how small, optimal network structures can be scaled up to larger sizes while preserving key performance properties. Understanding common network topologies like mesh, star, and hybrid helps build intuition for how expansions work in practice.

*How the paper uses it:* The paper uses expansion techniques to synthesize scalable direct-connect topologies from small optimal base topologies.

▶ [Lec-6: Topologies in Computer Networks | Part-1 | All imp points of Mesh, Star, Hub, Bus, Hybrid](https://www.youtube.com/watch?v=uDulBxDb7GM) — Gate Smashers · 10:43 · 7y ago

### Collective communication algorithms *(prerequisite)*
Collective communication algorithms coordinate data exchange among multiple nodes in a distributed system, enabling operations like broadcast, reduce, and allreduce. Grasping these algorithms helps understand the communication patterns the paper aims to optimize.

*How the paper uses it:* The paper optimizes collective communication schedules to reduce latency and bandwidth overhead in distributed clusters.

▶ [Week 5: Lecture 3: Collective Communication in MPI](https://www.youtube.com/watch?v=pKlPIwdGSbE) — NPTEL IIT Bombay · 26:21 · 1y ago

### Graph diameter and Moore bounds *(prerequisite)*
Graph diameter measures the longest shortest path between any two nodes, impacting communication latency. Moore bounds provide theoretical limits on the smallest possible diameter for given node degree and size, guiding optimal topology design.

*How the paper uses it:* The paper analyzes diameter preservation and Moore optimality to ensure low-latency topologies.

▶ [What are Moore Graphs and Cages? \[Graph Theory\]](https://www.youtube.com/watch?v=J7JFWbCVsD4) — Vital Sine · 14:40 · 4y ago

### Optical circuit switching in data centers *(prerequisite)*
Optical circuit switching uses light paths to connect nodes in data centers, offering high bandwidth but limited node degrees due to hardware constraints. Understanding this technology explains why the paper focuses on degree-limited direct-connect topologies.

*How the paper uses it:* The paper targets topologies suitable for optical circuit switching fabrics with limited node degrees.

▶ [Large Scale Optical Switching in Google Data Centers](https://www.youtube.com/watch?v=tOzg-2kVfWs) — SEMI-MEMS & Sensors Industry Group · 27:20 · 3y ago

### Network topologies
Network topologies define how nodes are interconnected, affecting communication efficiency and fault tolerance. Familiarity with common topologies like star, ring, mesh, and hybrid helps understand the baseline structures the paper builds upon and expands.

*How the paper uses it:* The paper synthesizes and evaluates various topologies to balance latency and bandwidth for collective communication.

▶ [Network Topologies (Star, Bus, Ring, Mesh, Ad hoc, Infrastructure, & Wireless Mesh Topology)](https://www.youtube.com/watch?v=zbqrNg4C98U) — PowerCert Animated Videos · 8:58 · 7y ago

### Breadth-First Broadcast scheduling
Breadth-First Broadcast (BFB) scheduling is a communication strategy that propagates messages layer by layer along shortest paths, minimizing total hop latency and balancing bandwidth usage. Understanding BFS traversal helps grasp how BFB schedules are generated efficiently.

*How the paper uses it:* The paper develops a polynomial-time BFB schedule generation algorithm to produce low-latency, bandwidth-balanced collective communication schedules.

▶ [Breadth First Search (BFS): Visualized and Explained](https://www.youtube.com/watch?v=xlVX7dXLS64) — Reducible · 10:41 · 6y ago

## Already in your library

- [Network Topology](https://www.youtube.com/watch?v=uSKdjjw5zow) — also for: Breaking the VLB Barrier for Oblivious Reconfigurable Networks (Hakim Weatherspoon)
- [What is Topology? full Explanation | BUS, STAR, RING, MESH, TREE and Hybrid Topologies](https://www.youtube.com/watch?v=gGTDFG2Q_UM) — also for: Quantifying the Causes of Path Inflation (Neil Spring)
- [5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search](https://www.youtube.com/watch?v=pcKY4hjDrxk) — also for: Analysis of a Memory-Efficient Self-stabilizing BFS Spanning Tree Construction (Lawrence L. Larmore)
- [L-4.15: BFS & DFS | Breadth First Search | Depth First Search | Graph Traversing | DAA](https://www.youtube.com/watch?v=N2P7w22tN9c) — also for: Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time (Thatchaphol Saranurak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's core ideas on scalable direct-connect network topologies and collective communication schedules. Starting with a small-scale topology and schedule visualization, you then implement the paper's Breadth-First Broadcast (BFB) schedule generation algorithm and compare it to a baseline. Finally, you explore an advanced extension by addressing one of the paper's limitations on dynamic topology reconfiguration, applying it to a simulated environment.

### Beginner — Visualize Small Direct-Connect Topologies and Latency Metrics
*Effort: a weekend, ~8 hours*

You build a small interactive visualization of a direct-connect network topology (e.g., a 12-node ring and its line graph expansion) and compute basic latency metrics such as diameter and average hop count. The visualization will show nodes, edges, and highlight shortest paths for collective communication.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's expansion techniques and latency metrics by reproducing a small-scale example of topology synthesis and evaluation, foundational to the paper's contributions.

**Grounded in:** Introduced expansion techniques (line graph, degree expansion, Cartesian product) to synthesize scalable direct-connect topologies and schedules preserving latency or bandwidth optimality.

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic small network topologies (e.g., 12-node ring and its expansions) generated programmatically based on the paper's descriptions.

**Build it:**

1. Implement data structures to represent small network topologies such as rings and their line graph expansions.
2. Compute graph metrics: diameter, average shortest path length (total-hop latency).
3. Use D3.js to visualize the topology with nodes and edges, highlighting shortest paths for broadcast.
4. Add UI controls to switch between base topology and expanded topology views.
5. Document the code and explain how the visualization relates to the paper's expansion techniques.

**Ships as:** An interactive web app repository with a README explaining the topology visualizations and latency metrics, reproducing a figure or metric from the paper.

**Stretch goal:** Add bandwidth metric visualization by simulating link loads under simple collective communication patterns.

### Intermediate — Implement BFB Schedule Generation and Compare to Ring Baseline
*Effort: 2 weekends, ~20 hours*

You implement the paper's polynomial-time Breadth-First Broadcast (BFB) schedule generation algorithm for a symmetric topology such as a 12-node ring or torus. You then simulate collective communication schedules (e.g., allreduce) using your generated schedule and compare latency and bandwidth metrics against a naive ring-based schedule.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core scheduling algorithm and quantitatively evaluate its performance benefits over a baseline, demonstrating comprehension of the scheduling approach and its impact on communication efficiency.

**Grounded in:** Developed a polynomial-time BFB schedule generation algorithm that produces low-latency, bandwidth-balanced collective communication schedules for large-scale topologies with symmetry properties.

**Tech stack:** Python 3.11, NetworkX, Matplotlib

**Data:** Synthetic symmetric network topologies (ring, torus) generated programmatically; no external dataset needed.

**Build it:**

1. Implement data structures for symmetric network topologies using NetworkX.
2. Code the BFB schedule generation algorithm as described in the paper for broadcast/allreduce.
3. Implement a naive ring-based schedule generator for baseline comparison.
4. Simulate collective communication schedules to measure total-hop latency and bandwidth usage.
5. Plot and compare the performance metrics between BFB and ring schedules.
6. Write a detailed README explaining the implementation, results, and relation to the paper.

**Ships as:** A Python repository with scripts to generate schedules, simulate communication, and produce comparative plots demonstrating schedule efficiency.

**Stretch goal:** Extend the simulation to larger synthetic topologies (e.g., 54-node CPU cluster scale) and measure schedule generation runtime.

### Advanced — Explore Dynamic Topology Reconfiguration for Collective Communication
*Effort: 3+ weeks*

You design and simulate a dynamic topology reconfiguration framework that switches between low-hop and load-balanced topologies during collective communication, addressing the paper's limitation on static topologies. Using synthetic topologies and schedules, you evaluate the potential latency and bandwidth gains of hybrid strategies enabled by faster reconfiguration hardware.

**Why it shows you understood the paper:** This project tackles a stated future direction by extending the paper's static topology framework to dynamic reconfiguration, demonstrating deep understanding and ability to innovate on the paper's methods and limitations.

**Grounded in:** The approach assumes static topologies for the duration of a job due to high reconfiguration costs in patch-panel optical circuits; dynamic reconfiguration at finer timescales is not yet supported.

**Tech stack:** Python 3.11, NetworkX, SimPy (for discrete event simulation)

**Data:** Synthetic network topologies and schedules generated programmatically; no external dataset required.

**Build it:**

1. Implement synthetic network topologies representing low-hop and load-balanced configurations.
2. Implement schedule generators for each topology using BFB or naive methods.
3. Design a simulation framework (e.g., with SimPy) to model dynamic switching between topologies during collective communication.
4. Define policies for when and how to switch topologies to optimize latency and bandwidth trade-offs.
5. Run experiments comparing static vs. dynamic topology strategies on simulated workloads.
6. Analyze results and document insights on potential benefits and challenges of dynamic reconfiguration.

**Ships as:** A simulation codebase with scripts, experiments, and a comprehensive report discussing the feasibility and impact of dynamic topology reconfiguration.

**Stretch goal:** Integrate realistic reconfiguration costs and delays based on literature to refine simulation fidelity.

_No authors' own code or datasets are publicly available for this paper; all projects rely on synthetic topologies generated from the paper's descriptions._
