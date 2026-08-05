---
title: "055 · SPITE: Simple Polyhedral Intersection Techniques for modified Environments — Sariel Har-Peled"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sariel-har-peled"
source_hash: "cf580f72169c164a47a25f7a73711bacd1cbeb495fb530b9ca82472ff98a14d0"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the SPITE paper. The beginner project focuses on implementing and visualizing the core geometric approximation of robot configurations as cigars. The intermediate project involves reimplementing the SPITE roadmap update algorithm on a simplified synthetic environment and comparing update times against a naive baseline. The advanced project extends SPITE by exploring an improved 3D volume approximation using oriented bounding boxes, addressing a stated future direction of the paper.

### Beginner — Visualizing Cigar Approximations for Robot Configurations
*Effort: a weekend, ~8 hours*

You build a small interactive 3D visualization tool that models robot configurations and motions as capped cylinders (cigars) in a workspace. The tool lets users input simple robot poses and motions and see their corresponding cigar volumes, demonstrating how these volumes approximate swept spaces.

**Why it shows you understood the paper:** This project shows you grasp the paper's novel geometric abstraction of robot configurations and motions as cigars, a key foundation for efficient collision checking and roadmap updates.

**Grounded in:** A novel 3D workspace volume approximation using cigars for robot configurations and motions.

**Tech stack:** TypeScript, React, Three.js

**Data:** Synthetic robot configurations and motions defined programmatically as simple line segments and poses.

**Build it:**

1. Set up a React app with Three.js for 3D rendering.
2. Implement a function to create a cigar geometry (capped cylinder) from two 3D points and a radius.
3. Create UI controls to input or randomly generate robot configurations and motions as line segments.
4. Render the corresponding cigar volumes in the 3D scene with basic camera controls.
5. Add labels and simple collision highlighting if cigars intersect a fixed obstacle volume.

**Ships as:** An interactive web app demonstrating how robot configurations and motions map to cigar volumes, with clear visualization and basic collision indication.

**Stretch goal:** Add hierarchical spatial partitioning (e.g., bounding volume hierarchy) to accelerate intersection queries between cigars and obstacles.

### Intermediate — Reimplementing SPITE Roadmap Updates with Cigar Trees
*Effort: 2 weekends, ~20 hours*

You implement the core SPITE algorithm to update roadmap node and edge validity after discrete obstacle movements using cigar volume approximations and a hierarchical cigar tree data structure. You compare update times against a naive method that checks all nodes and edges exhaustively.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's main algorithmic contribution into code, including the cigar tree structure and efficient intersection queries, and quantitatively reproduce the speedup claims.

**Grounded in:** A supplemental algorithm for dynamic roadmaps that quickly updates node and edge validity after obstacle movements.

**Tech stack:** C++, Eigen (for geometry), OpenGL or simple visualization (optional)

**Data:** Synthetic roadmap graphs and obstacle shapes generated programmatically to simulate discrete obstacle position changes.

**Build it:**

1. Implement data structures for cigars representing robot configurations and motions.
2. Build an axis-aligned bounding box (AABB) tree (cigar tree) to store cigars hierarchically.
3. Implement collision detection queries between cigars and convex polyhedral obstacles.
4. Simulate discrete obstacle movements and implement the update algorithm to mark affected roadmap nodes and edges.
5. Implement a naive baseline that checks all nodes and edges exhaustively for validity after obstacle moves.
6. Benchmark update times of SPITE vs naive baseline on synthetic test cases and report results.

**Ships as:** A command-line tool that updates roadmap validity using SPITE and compares update times to a naive method, with a README reporting quantitative results.

**Stretch goal:** Add visualization of the roadmap and highlight updated nodes and edges to better illustrate the update process.

### Advanced — Extending SPITE with Oriented Bounding Boxes for Volume Approximation
*Effort: 3-4 weeks*

You extend the SPITE approach by replacing the cigar volume approximation with oriented bounding boxes (OBBs) to better capture complex robot swept volumes. You implement an OBB tree data structure for intersection queries and evaluate update times and accuracy against the original cigar tree approach on synthetic scenarios.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, showing deep comprehension of SPITE's limitations and the ability to innovate on its core data structures and algorithms to improve approximation quality and potentially update efficiency.

**Grounded in:** Improving 3D swept volume approximations by adding lower-bound approximations and using oriented bounding boxes instead of cigars.

**Tech stack:** C++, Eigen, OpenGL or visualization library

**Data:** Synthetic robot configurations and obstacle movements designed to test volume approximation accuracy and update performance.

**Build it:**

1. Study the cigar tree implementation and identify how to replace cigars with oriented bounding boxes (OBBs).
2. Implement OBB volume construction from robot configurations and motions.
3. Build a hierarchical OBB tree data structure for fast intersection queries.
4. Adapt the roadmap update algorithm to use the OBB tree for collision checks after obstacle moves.
5. Design experiments comparing update times and validity accuracy between the cigar tree and OBB tree approaches.
6. Document findings and discuss trade-offs in approximation tightness and computational cost.

**Ships as:** A research-style codebase and report demonstrating an OBB-based extension to SPITE with comparative evaluation against the original method.

**Stretch goal:** Incorporate lazy planning heuristics to further optimize update and query times as suggested by the paper.
