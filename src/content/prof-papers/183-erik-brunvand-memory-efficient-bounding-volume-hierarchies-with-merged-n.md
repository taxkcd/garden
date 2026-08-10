---
title: "183 · Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing — Erik Brunvand"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-erik-brunvand"
source_hash: "14353df8dd5fc7598a1d5da9335aeb2eebb7ac6875f144a3de6d455c8cbe309e"
sequence: 183
generator: "outreach-garden: managed"
---

# 183 · Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing

## At a glance

- **Professor:** Erik Brunvand
- **Institution:** University of Utah
- **Paper:** [Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing](https://doi.org/10.1145/3820018)
- **Authors:** Jacob Haydel, Andrew Kensler, Erik Brunvand, Cem Yuksel
- **Year:** 2026

## Paper overview

This paper introduces a new method to improve the memory efficiency of bounding volume hierarchies (BVHs) used in hardware-accelerated ray tracing on GPUs. By merging nodes and optimizing the data structure for memory bandwidth rather than compute, the authors reduce memory traffic, BVH size, and rendering time, leading to faster and more efficient ray tracing.

### Why it matters

**Research problem:** Hardware ray tracing performance on modern GPUs is limited primarily by memory bandwidth rather than compute power. Existing BVH structures and construction heuristics are optimized for computational cost, not memory traffic, leading to inefficiencies in memory usage and traversal performance.

**Why it matters:** Ray tracing is a key technique for generating realistic graphics but remains expensive to compute in real-time. Improving memory efficiency in ray tracing acceleration structures can significantly enhance rendering speed and reduce resource usage, enabling better graphics performance on current and future GPU architectures.

**Key contributions:**

- A new block-based wide BVH representation with merged nodes that reduces memory traffic and BVH size.
- A memory-based surface area heuristic (MSAH) that better predicts hardware ray tracing performance by focusing on memory access cost.
- An optimal dynamic programming algorithm and a fast greedy builder for constructing memory-efficient BVHs.
- A node merging technique that improves node fullness and further reduces memory footprint without impacting traversal quality.
- Evaluation using a cycle-level GPU simulator demonstrating significant reductions in memory traffic and rendering time.

## About the professor

**Erik Brunvand** — Professor, School of Computing, University of Utah.

Research interests: computer architecture and VLSI systems, self-timed and asynchronous systems, graphics processing systems, compiling concurrent communicating programs into asynchronous VLSI circuits, effects of asynchrony on computer systems architecture, GPU architecture targeted at Ray Tracing

### Research links

- [Faculty/profile page](https://www.cs.utah.edu/~elb)
- [Resolved homepage](https://users.cs.utah.edu/~elb/plan.txt)
- [Google Scholar](https://scholar.google.com/citations?user=Hkw7KOoAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bounding Volume Hierarchies
**The paper assumes:** bounding volume hierarchies, acceleration structures for ray tracing, surface area heuristic, BVH traversal algorithms
**Already in this field?** Skip this entirely if you already understand BVHs and their role in ray tracing acceleration, including standard construction and traversal methods.

To understand the innovations in memory-efficient bounding volume hierarchies (BVHs) for hardware ray tracing presented in this paper, it is essential to grasp the fundamentals of BVHs, their construction, traversal, and traditional heuristics like the surface area heuristic (SAH). The rigorous course option provides a deep, structured university-level introduction to computer graphics with detailed coverage of BVHs and ray tracing acceleration structures, while the fast track offers a concise, focused playlist on BVHs and related memory/cache concepts for a quicker but still solid grounding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [_exjobb](https://www.youtube.com/playlist?list=PLdDv6CILzxnH0X-3cq7H6OQ0sgGDeJ-YG) — David Nilsson · 9 videos

**Watch only this:** Watch the 'Bounding Volume Hierarchy' episode only, about 10-15 minutes — it directly explains BVHs and their role in graphics acceleration.

*Why it unblocks this paper:* This playlist by David Nilsson includes a focused episode on Bounding Volume Hierarchies and related memory/cache topics, providing a quick, intuitive introduction to BVHs and their performance implications relevant to the paper's focus on memory efficiency.

*If you want all of it:* 9 episodes total, approximately 1.5 to 2 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on memory-efficient BVHs with merged nodes for hardware ray tracing, start by grounding yourself in the fundamentals of hardware ray tracing architectures and the classic bounding volume hierarchy data structures and heuristics, including the traditional Surface Area Heuristic (SAH). Then, build on this foundation by exploring the novel memory-based surface area heuristic (MSAH) concept. Finally, conclude with the authors' own detailed presentation of their new BVH representation, construction algorithms, and evaluation results to grasp the full scope and innovation of their work.

### Hardware Ray Tracing Architectures *(prerequisite)*
Understanding the GPU hardware constraints and ray tracing bottlenecks is essential to appreciate why memory bandwidth is the primary performance limiter and how BVH design impacts traversal efficiency. This section covers detailed talks on GPU ray tracing architectures, including Qualcomm Adreno and Intel hardware, providing an advanced view of the underlying systems.

*How the paper uses it:* The paper targets memory efficiency in hardware ray tracing on modern GPUs, making knowledge of GPU ray tracing architectures critical.

▶ [Raytracing on Qualcomm® Adreno™ GPUs](https://www.youtube.com/watch?v=xGHysLQoTJM) — Graphics Programming Conference · 20:13

### Bounding Volume Hierarchies *(prerequisite)*
Bounding volume hierarchies are the fundamental acceleration structures for ray tracing. This section includes rigorous university lectures and conference talks that explain BVH construction, traversal, and optimization techniques at an advanced level, providing the necessary background for understanding the paper's novel BVH representation.

*How the paper uses it:* The paper proposes a new BVH representation and construction method, so a solid grasp of BVHs is foundational.

▶ [Introduction to Computer Graphics (Lecture 12): Accelerating ...](https://www.youtube.com/watch?v=TrqK-atFfWY) — Justin Solomon · 1:09:51

### Surface Area Heuristic (SAH) *(prerequisite)*
The Surface Area Heuristic is the classic cost model used for BVH construction, which the paper extends by introducing a memory-based variant. This section features detailed academic lectures and surveys explaining SAH and its role in BVH optimization, enabling a clear understanding of the baseline the paper improves upon.

*How the paper uses it:* The paper introduces a memory-based SAH that better predicts hardware performance compared to traditional SAH.

▶ [A Survey on Bounding Volume Hierarchies for Ray Tracing [2021-05-19]](https://www.youtube.com/watch?v=el3-7PwnILA) — Graphics Programming Virtual Meetup · 4 years ago

### Memory-Based Surface Area Heuristic (MSAH)
This concept is central to the paper's novel approach, focusing on modeling traversal cost in terms of memory traffic rather than computation. While no dedicated academic talks on MSAH exist outside the authors' presentation, related heuristic discussions and the authors' own talk provide insight into this innovative cost model.

*How the paper uses it:* MSAH is the core heuristic introduced by the authors to optimize BVH construction for memory efficiency on GPUs.

▶ [Memory-Efficient Bounding Volume Hierarchies with Merged Nodes](https://www.youtube.com/watch?v=aacI8loTNj8) — High-Performance Graphics · 4 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on memory-efficient bounding volume hierarchies (BVHs) for hardware ray tracing, start by learning the fundamental concept of BVHs and why they accelerate ray tracing. Next, grasp the hardware constraints and bottlenecks in GPU ray tracing architectures, focusing on memory bandwidth limitations. Then, study the classic Surface Area Heuristic (SAH) used for BVH construction, which this paper extends with a novel memory-based SAH (MSAH). Finally, watch the authors' own presentation for a direct explanation of their merged-node BVH method and its benefits.

### Bounding Volume Hierarchies *(prerequisite)*
Bounding Volume Hierarchies (BVHs) are tree data structures that group geometric primitives into nested bounding volumes to accelerate ray tracing. They allow rays to quickly skip large parts of a scene by testing intersections with bounding volumes instead of every primitive. Understanding BVHs is essential to grasp how ray tracing performance is improved.

*How the paper uses it:* The paper proposes a new BVH representation that merges nodes to reduce memory traffic and size.

▶ [24 - Bounding Volume Hierarchies with a blazing fast ...](https://www.youtube.com/watch?v=LAxHQZ8RjQ4) — Ten Minute Physics · 11:35

### Hardware Ray Tracing Architectures *(prerequisite)*
Modern GPUs include dedicated hardware to accelerate ray tracing, but their performance is often limited by memory bandwidth rather than compute power. Understanding these hardware constraints helps explain why optimizing memory traffic in BVHs is crucial for faster rendering.

*How the paper uses it:* The paper targets memory bandwidth bottlenecks in hardware ray tracing on GPUs.

▶ [Raytracing on Qualcomm® Adreno™ GPUs](https://www.youtube.com/watch?v=xGHysLQoTJM) — Graphics Programming Conference · 20:13

### Surface Area Heuristic (SAH) *(prerequisite)*
The Surface Area Heuristic is a classic cost model used to build BVHs by estimating the expected traversal cost based on the surface areas of bounding volumes. It guides how to split nodes to minimize ray intersection tests. This heuristic is foundational for BVH construction methods.

*How the paper uses it:* The paper extends SAH by introducing a memory-based variant focused on data movement costs.

▶ [CS 4910 - Bounding Volume Hierarchies and Heuristics for Ray Tracers!](https://www.youtube.com/watch?v=eTDeCYugEv4) — Neel Bhalla · 3 years ago

### Paper authors talk
Hearing directly from the authors provides a clear and authoritative explanation of their new BVH method with merged nodes, the memory-based heuristic, and the construction algorithms. This talk summarizes their contributions and evaluation results.

*How the paper uses it:* This video is the authors’ own presentation of the paper at HPG 2026.

▶ [Memory-Efficient Bounding Volume Hierarchies with Merged Nodes](https://www.youtube.com/watch?v=aacI8loTNj8) — High-Performance Graphics · 4 days ago

## Already in your library

- [Ray Tracing with Bounding Volume Hierarchies](https://www.youtube.com/watch?v=BmbfjHoqKUs) — also for: SPITE: Simple Polyhedral Intersection Techniques for modified Environments (Sariel Har-Peled)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing." The beginner project focuses on reproducing and visualizing the concept of node merging and its effect on node fullness. The intermediate project implements the memory-based surface area heuristic (MSAH) and compares it against traditional SAH on a small synthetic BVH dataset. The advanced project extends the paper by exploring a GPU-friendly greedy builder implementation, addressing a key future direction mentioned by the authors.

### Beginner — Visualize Node Merging Effects on BVH Node Fullness
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that simulates a simple BVH with nodes and primitives, then applies the paper's node merging technique to show how node fullness improves without degrading bounding volumes. The tool will display before-and-after statistics on node fullness and memory footprint reduction.

**Why it shows you understood the paper:** This project demonstrates you grasp the node merging technique's purpose and effect, a key contribution of the paper, by faithfully reproducing its impact on node fullness and memory efficiency.

**Grounded in:** Node merging improves node fullness and reduces wasted space without degrading tree quality.

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic BVH node and primitive data generated within the tool to simulate typical BVH structures.

**Build it:**

1. Implement a simple BVH node data structure with bounding boxes and primitive counts.
2. Create a visualization of the BVH tree showing node fullness and bounding volumes.
3. Implement the node merging algorithm as described in the paper, merging internal and leaf nodes.
4. Update the visualization to show the BVH before and after node merging.
5. Calculate and display metrics such as node fullness percentage and estimated memory footprint.
6. Write a README explaining the node merging technique and its benefits as per the paper.

**Ships as:** An interactive web-based visualization with a README that explains node merging and shows its effect on node fullness and memory footprint.

**Stretch goal:** Add a comparison view showing traversal quality metrics to verify that merging does not degrade tree quality.

### Intermediate — Implement and Compare Memory-Based SAH vs Traditional SAH
*Effort: 2 weekends, ~20 hours*

You implement the memory-based surface area heuristic (MSAH) from the paper and a traditional SAH for BVH construction on a synthetic or publicly available small 3D scene dataset. You build BVHs using both heuristics and compare metrics such as estimated memory traffic, BVH size, and traversal cost proxies.

**Why it shows you understood the paper:** This project proves you understand the core methodological innovation of the paper—MSAH—and can implement and evaluate it against the traditional SAH, replicating the paper's approach to modeling traversal cost in terms of memory traffic.

**Grounded in:** A memory-based surface area heuristic (MSAH) that better predicts hardware ray tracing performance by focusing on memory access cost.

**Tech stack:** C++, Python, Jupyter Notebook

**Data:** Synthetic 3D scenes generated programmatically or a small public 3D model dataset (e.g., Stanford Bunny or Cornell Box) used as a substitute for the paper's data.

**Build it:**

1. Implement a basic BVH builder using traditional SAH in C++.
2. Implement the memory-based surface area heuristic (MSAH) as described in the paper.
3. Build BVHs on the same dataset using both SAH and MSAH.
4. Measure and compare metrics such as BVH size, estimated memory traffic, and traversal cost proxies.
5. Visualize and report the comparison results in a Jupyter Notebook.
6. Document the implementation details and analysis in the README.

**Ships as:** A repository with BVH builder implementations, scripts to run comparisons, and a Jupyter Notebook reporting results and analysis.

**Stretch goal:** Extend the implementation to include the greedy builder algorithm and compare build times and quality.

### Advanced — GPU-Friendly Greedy BVH Builder with Node Merging
*Effort: 3+ weeks*

You develop a GPU-accelerated implementation of the paper's greedy BVH builder combined with the node merging technique. This project addresses the paper's stated limitation and future direction of developing efficient GPU builders. You evaluate build time and traversal quality on synthetic or public 3D scenes and compare against a CPU baseline implementation.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's algorithms and limitations by extending the work into a GPU context, tackling a future direction the authors highlight as important but unaddressed.

**Grounded in:** Developing efficient GPU implementations of the proposed greedy build method, potentially combined with H-PLOC.

**Tech stack:** C++, CUDA, Python, Jupyter Notebook

**Data:** Synthetic or public 3D scene datasets (e.g., Stanford Bunny, Cornell Box) used as substitutes for the paper's data.

**Build it:**

1. Implement a baseline CPU version of the greedy BVH builder with node merging in C++.
2. Design and implement a GPU-accelerated version of the greedy builder using CUDA.
3. Integrate node merging into the GPU builder pipeline.
4. Benchmark build times and traversal quality metrics on test datasets comparing CPU and GPU implementations.
5. Analyze results and document performance trade-offs and challenges.
6. Write a detailed README explaining the implementation, evaluation, and how this addresses the paper's future direction.

**Ships as:** A GPU-accelerated BVH builder repository with benchmarking scripts and a comprehensive report on performance and quality.

**Stretch goal:** Explore integration of spatial splits into the GPU builder to further improve BVH quality without increasing primitive duplication.
