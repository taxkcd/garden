---
title: "183 · Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing — Erik Brunvand"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-erik-brunvand"
source_hash: "516e067af38d1f0051704c85effe84c69547b0e9d175b5a13f2ecafe2e3007a4"
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
