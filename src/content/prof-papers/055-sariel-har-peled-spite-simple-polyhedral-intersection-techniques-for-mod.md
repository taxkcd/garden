---
title: "055 · SPITE: Simple Polyhedral Intersection Techniques for modified Environments — Sariel Har-Peled"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sariel-har-peled"
source_hash: "2f114e1f42626466c045ae4f34c28aad6dde5b165579c802e5d79327094c0a80"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SPITE paper, start by grasping foundational concepts such as configuration space approximations, hierarchical spatial data structures, swept volume collision detection, and motion planning in dynamic environments. These prerequisites provide the necessary background on how robot configurations are modeled, how spatial queries are accelerated, and why efficient updates in changing environments matter. Finally, focus on the core concept of the SPITE roadmap update algorithm and the authors' own talk to directly learn about their novel method and contributions.

### Configuration space approximation *(prerequisite)*
Understanding configuration space is essential as SPITE approximates robot configurations and motions as 3D volumes (cigars). This section covers how robot poses and movements are represented in a higher-dimensional space to facilitate collision checking and planning.

*How the paper uses it:* SPITE uses configuration space approximations to model robot states as 3D swept volumes for efficient collision queries.

▶ [L17.1 Configuration space for Hamiltonians](https://www.youtube.com/watch?v=oEBwIJZ3RNM) — MIT OpenCourseWare · 7 years ago

### Hierarchical spatial data structures *(prerequisite)*
Hierarchical spatial data structures like bounding volume hierarchies enable fast intersection queries by organizing geometric objects efficiently. This knowledge is crucial to understand the cigar tree data structure used in SPITE for quick collision checks.

*How the paper uses it:* SPITE employs an axis-aligned bounding box tree (cigar tree) to store and query robot configuration volumes efficiently.

▶ [Lecture 13: Spatial Data Structures (CMU 15-462/662)](https://www.youtube.com/watch?v=NF7r-pC8fFc) — Keenan Crane · 1:21:35 · 5 years ago

### Swept volume collision detection *(prerequisite)*
Swept volume collision detection involves checking collisions over the continuous motion of objects, approximated here by 'cigars'. This concept underpins SPITE's approach to efficiently detect invalid roadmap edges and nodes after obstacle movements.

*How the paper uses it:* SPITE approximates robot motions as 3D swept volumes (cigars) to perform collision detection efficiently.

▶ [Continuous Collision Detection (Swept AABB) - No More Tunneling](https://www.youtube.com/watch?v=nh37K1UMe_s) — Dylan Falconer · 4 months ago

### Motion planning in dynamic environments *(prerequisite)*
Motion planning in dynamic environments addresses challenges when obstacles move, requiring fast updates to precomputed roadmaps. This context explains the motivation behind SPITE and the importance of efficient roadmap updates.

*How the paper uses it:* SPITE targets efficient updates of motion planning roadmaps when obstacles move discretely in the environment.

▶ [Deep Reactive Planning in Dynamic Environments](https://www.youtube.com/watch?v=hE-Ew59GRPQ) — Mitsubishi Electric Research Laboratories (MERL) · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SPITE paper, start by learning about configuration space approximations, which explain how robot positions and movements are modeled as volumes. Next, grasp hierarchical spatial data structures that enable efficient intersection queries. Then, study swept volume collision detection to see how robot motions are checked for collisions. After these foundations, explore motion planning in dynamic environments to understand the challenges SPITE addresses. Finally, watch the authors' talk for a direct explanation of their novel method and contributions.

### Configuration space approximation *(prerequisite)*
Configuration space (C-space) is a way to represent all possible positions and orientations of a robot as points in a high-dimensional space. Approximating robot configurations as volumes in this space helps simplify collision checking and motion planning.

*How the paper uses it:* SPITE approximates robot configurations and motions as 3D volumes called cigars to efficiently check collisions.

▶ [SRS 5.1 Configuration space](https://www.youtube.com/watch?v=GCOjHQ8rcIQ) — Ivan Borisov · 3 years ago

### Hierarchical spatial data structures *(prerequisite)*
Hierarchical spatial data structures, like bounding volume hierarchies, organize geometric objects in a tree structure to quickly find intersections or collisions. This reduces the number of expensive checks needed by pruning large parts of the search space.

*How the paper uses it:* SPITE uses a hierarchical axis-aligned bounding box tree (cigar tree) to quickly identify roadmap parts affected by obstacle movements.

▶ [Spatial acceleration structures: Bounding Volume Hierarchies (SGP'26 course)](https://www.youtube.com/watch?v=az6nYX-XikE) — Symposium on Geometry Processing 2026 · 11 days ago

### Swept volume collision detection *(prerequisite)*
Swept volume collision detection involves checking if the volume traced by a moving object over time intersects with obstacles. This is crucial for safe motion planning as it accounts for the robot's entire path, not just discrete positions.

*How the paper uses it:* SPITE models robot motions as swept volumes (cigars) to efficiently detect collisions during roadmap updates.

▶ [23 - Sweep and Prune Collision Detection with 10 lines of code](https://www.youtube.com/watch?v=MKeWXBgEGxQ) — Ten Minute Physics · 1 year ago

### Motion planning in dynamic environments *(prerequisite)*
Motion planning in dynamic environments deals with planning robot paths when obstacles can move or change. Efficiently updating precomputed roadmaps after obstacle changes is key to fast replanning.

*How the paper uses it:* SPITE addresses the challenge of quickly updating roadmap validity when obstacles move discretely in the environment.

▶ [Motion Planning in Dynamic Environment](https://www.youtube.com/watch?v=34AH3iIxRG4) — Hua Hua · 11 years ago

### SPITE paper talk *(the paper's own talk)*
A direct presentation by the authors explaining the SPITE method, its key contributions, and experimental results, providing an overview of their novel approach to dynamic roadmap updates.

*How the paper uses it:* Hearing from the authors themselves clarifies the motivation, approach, and benefits of SPITE.

▶ [Poly2Tri - Line Segment Intersection](https://www.youtube.com/watch?v=_rAccbsecHw) — Thomas Åhlén · 16 years ago
