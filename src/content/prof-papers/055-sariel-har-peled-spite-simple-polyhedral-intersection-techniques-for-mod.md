---
title: "055 · SPITE: Simple Polyhedral Intersection Techniques for modified Environments — Sariel Har-Peled"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sariel-har-peled"
source_hash: "4e29f3cffe89772c6e572e8d2fcb76462c2bfb9dfbbdfc37f30c6bf19c57d502"
sequence: 55
generator: "outreach-garden: managed"
---

# 055 · SPITE: Simple Polyhedral Intersection Techniques for modified Environments

## At a glance

- **Professor:** Sariel Har-Peled
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [SPITE: Simple Polyhedral Intersection Techniques for modified Environments](https://arxiv.org/pdf/2407.00259)
- **Authors:** Stav Ashur, Maria Lusardi, Marta Markowicz, James Motes, Marco Morales, Sariel Har-Peled, Nancy M. Amato
- **Year:** 2024

## Paper overview

This paper presents SPITE, a method to efficiently update motion planning roadmaps when obstacles in the environment move. It approximates robot configurations and movements as 3D volumes called cigars and uses a hierarchical data structure to quickly identify which parts of the roadmap become invalid or valid after changes. This leads to faster updates and motion planning queries compared to previous methods and single-query algorithms.

### Why it matters

**Research problem:** How to efficiently update the validity of nodes and edges in configuration space roadmaps for motion planning when obstacles in the environment move discretely, without recomputing the entire roadmap.

**Why it matters:** Motion planning in changing environments is challenging because obstacle movements invalidate parts of precomputed roadmaps, making many existing algorithms inefficient or unusable. Efficient updates enable faster replanning in multi-query scenarios, important for robotics applications like multi-robot coordination and human-robot collaboration.

**Key contributions:**

- A supplemental algorithm for dynamic roadmaps that quickly updates node and edge validity after obstacle movements.
- A novel 3D workspace volume approximation using cigars for robot configurations and motions.
- A hierarchical data structure (cigar tree) for fast intersection queries enabling efficient roadmap updates.
- Demonstration of 10-40% faster update times and up to 60% faster motion planning queries compared to the previous best method.
- Significantly reduced preprocessing time (minutes vs. hours) compared to grid-based methods.

## About the professor

**Sariel Har-Peled** — Donald Biggar Willett Professor in Engineering, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: Theory and Algorithms

### Research links

- [Faculty/profile page](https://cs.illinois.edu/directory/profile/sariel)
- [Professor website](https://sarielhp.org/)

## Learning path

To deeply understand the SPITE paper, start by building foundational knowledge on hierarchical spatial data structures and polyhedral collision detection, as these underpin the efficient intersection queries and validity checks in SPITE. Next, explore the core problem of motion planning roadmap updates in dynamic environments. Finally, focus on the paper's central contribution by reviewing the authors' own talks or closely related advanced presentations on configuration space volume approximations and the SPITE method itself.

## Recommended videos (in order)

### hierarchical spatial data structures *(prerequisite)*
SPITE relies heavily on axis-aligned bounding box (AABB) trees, a type of hierarchical spatial data structure, to enable fast intersection queries between robot swept volumes and obstacles. Understanding bounding volume hierarchies and AABB trees is essential to grasp how SPITE achieves efficient updates.

*How the paper uses it:* SPITE uses an AABB tree (cigar tree) to store 3D volume approximations for fast intersection queries.

▶ [Ray Tracing with Bounding Volume Hierarchies](https://www.youtube.com/watch?v=BmbfjHoqKUs) — The Graphics Guy · 15:40

### polyhedral collision detection *(prerequisite)*
Collision detection between convex polyhedra is fundamental to determining the validity of roadmap nodes and edges in SPITE. Familiarity with algorithms like GJK and EPA, and approaches to convex shape collision detection, provides the necessary background to understand SPITE's collision checks.

*How the paper uses it:* SPITE approximates obstacles and robot volumes as convex polyhedra and uses collision detection to update roadmap validity.

▶ [Differentiable Collision Detection for a Set of Convex Primitives](https://www.youtube.com/watch?v=cIu5fPqHF4Y) — MIT Robotic Exploration Lab · 3 years ago

### configuration space volume approximation
A central innovation in SPITE is approximating robot configurations and motions as 3D swept volumes called cigars. Understanding swept volume computation and approximation techniques is key to appreciating how SPITE achieves fast intersection queries and efficient updates.

*How the paper uses it:* SPITE uses novel 3D volume approximations (cigars) stored in a hierarchical data structure for efficient collision queries.

▶ [Silvia Sellán - A deep dive into Swept Volumes](https://www.youtube.com/watch?v=6N7jIB8WSYU) — Vision & Graphics Seminar at MIT · 1:04:40 · 5 years ago
