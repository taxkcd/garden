---
title: "312 · Soft Subdivision Motion Planning for Complex Planar Robots — Yi-Jen Chiang"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yi-jen-chiang"
source_hash: "d5b11b0d3ce440609ef7931948f3f69c48eef764a5bad6c070c4d9795585b755"
sequence: 312
generator: "outreach-garden: managed"
---

# 312 · Soft Subdivision Motion Planning for Complex Planar Robots

## At a glance

- **Professor:** Yi-Jen Chiang
- **Institution:** New York University
- **Paper:** [Soft Subdivision Motion Planning for Complex Planar Robots](https://www.sciencedirect.com/science/article/am/pii/S0925772120300778)
- **Authors:** Bo Zhou, Yi-Jen Chiang, Chee Yap
- **Year:** 2018

## Paper overview

This paper presents a new algorithmic framework for motion planning of planar robots with complex polygonal shapes. It introduces soft predicates and resolution-exact planners that efficiently handle collision detection and path planning by decomposing complex robot shapes into simpler triangles. The approach guarantees finding a path if one exists with certain clearance and can also reliably report no-path scenarios, outperforming many sampling-based methods in experiments.

### Why it matters

**Research problem:** Designing theoretically sound and practical motion planning algorithms for planar polygonal rigid robots with arbitrarily complex geometry, overcoming the high computational complexity and lack of guarantees in existing exact and heuristic planners.

**Why it matters:** Motion planning is fundamental in robotics for navigating robots through environments without collisions. Complex robot shapes are more realistic models but pose significant computational challenges. Existing methods either lack guarantees or are inefficient, especially for complex shapes, limiting practical applications.

**Key contributions:**

- Introduction of a general technique to decompose complex polygonal robots into nice triangles for soft predicate construction.
- Development of resolution-exact planners that guarantee halting with either a path or a no-path answer with clearance bounds.
- Design of soft predicates based on a common coordinate system for all decomposed triangles.
- Implementation of T/R splitting strategy for efficient subdivision in SE(2) configuration space.
- Experimental validation showing real-time performance and superiority over sampling-based planners.

## About the professor

**Yi-Jen Chiang** — Associate Professor, Computer Science and Engineering, New York University.

Research interests: Computer Graphics and Visualization, Computer Algorithms

### Research links

- [Faculty/profile page](http://engineering.nyu.edu/people/yi-jen-chiang)
- [Professor website](http://engineering.nyu.edu/faculty/yi-jen-chiang)
- [Resolved homepage](https://engineering.nyu.edu/faculty/yi-jen-chiang)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Soft Subdivision Motion Planning for Complex Planar Robots," start by building a foundation in the key prerequisite topics of Configuration Space in Robotics, Subdivision Algorithms in Computational Geometry, and Polygon Decomposition into Triangles. These topics provide the necessary geometric and algorithmic background. Then, focus on the core concept of Motion Planning with Soft Predicates, which is central to the paper's novel approach. Finally, study the authors' own talks to gain direct insights into their algorithmic framework and experimental results.

### Configuration Space in Robotics *(prerequisite)*
Understanding configuration spaces is fundamental for representing robot poses and planning feasible paths. This concept underpins how the paper models the robot's translational and rotational movements in SE(2) and is critical for grasping the subdivision and predicate design.

*How the paper uses it:* The paper uses configuration space to represent the robot's pose and applies T/R splitting in SE(2) for efficient subdivision.

▶ [Modern Robotics, Chapter 2.3.1:  Configuration Space Topology](https://www.youtube.com/watch?v=FyLNR3edOds) — Northwestern Robotics · 8 years ago

### Subdivision Algorithms in Computational Geometry *(prerequisite)*
Subdivision algorithms are core to decomposing the configuration space and searching for collision-free paths. This background helps in understanding the soft subdivision search framework and the linear scaling complexity achieved by the authors.

*How the paper uses it:* The paper's planner relies on subdivision techniques to efficiently explore the configuration space and manage complexity.

▶ [CENG773 - Computational Geometry - Lecture 5.1](https://www.youtube.com/watch?v=lGcrYdD4kx4) — METUOpenCourseWare · 11 years ago

### Polygon Decomposition into Triangles *(prerequisite)*
Decomposing complex polygonal robot shapes into triangles simplifies collision detection and predicate construction. This geometric tool is a key step in the authors' approach to handle complex robot geometries efficiently.

*How the paper uses it:* The paper introduces a technique to decompose complex polygonal robots into nice triangles for soft predicate construction.

▶ [Polygon Triangulation, Art Gallery Problem](https://www.youtube.com/watch?v=pmVn5KylI1Q) — Algorithms Lab · 3 years ago

### Motion Planning with Soft Predicates
Soft predicates enable efficient and resolution-exact collision detection, which is central to the paper's novel algorithmic framework. Understanding this concept is crucial to grasp how the planner guarantees finding a path or reporting no-path with clearance bounds.

*How the paper uses it:* The paper develops resolution-exact planners using soft predicates for collision detection and path planning.

▶ [CS498IR Offline Lecture 11: Motion Planning](https://www.youtube.com/watch?v=OP2-AkS5OXM) — Intelligent Motion Lab · 5 years ago

### Paper Authors Talk
The authors' own presentations provide the most direct and detailed exposition of their algorithmic framework, experimental validation, and theoretical contributions. These talks offer unique insights beyond the written paper.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel algorithmic framework.

▶ [https://www.youtube.com › watch?v=Cey4ICbze-U](https://www.youtube.com/watch?v=Cey4ICbze-U) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Soft Subdivision Motion Planning for Complex Planar Robots, start by learning the foundational concept of Configuration Space in robotics, which represents all possible robot poses and is essential for planning feasible paths. Next, grasp Polygon Decomposition into Triangles, a key geometric technique used to simplify complex robot shapes for efficient computation. Then, study Subdivision Algorithms in Computational Geometry, which underpin the decomposition and search strategies in the planner. Finally, focus on Motion Planning with Soft Predicates, the core method enabling efficient collision detection and resolution-exact planning in the paper.

### Configuration Space in Robotics *(prerequisite)*
Configuration space (C-space) is a way to represent all possible positions and orientations of a robot as points in a mathematical space. Understanding C-space helps visualize and plan collision-free paths by transforming the robot's motion problem into a geometric search problem.

*How the paper uses it:* The paper uses SE(2) configuration space to represent planar robot poses combining translation and rotation for motion planning.

▶ [Modern Robotics, Chapter 2.3.1:  Configuration Space Topology](https://www.youtube.com/watch?v=FyLNR3edOds) — Northwestern Robotics · 8 years ago

### Polygon Decomposition into Triangles *(prerequisite)*
Polygon decomposition breaks down complex polygonal shapes into simpler triangles, which are easier to analyze and process. This technique is fundamental for simplifying the robot's shape to efficiently build collision detection predicates.

*How the paper uses it:* The authors decompose complex polygonal robots into 'nice' triangles sharing a common rotation center to enable efficient soft predicate construction.

▶ [Polygon Triangulation, Art Gallery Problem](https://www.youtube.com/watch?v=pmVn5KylI1Q) — Algorithms Lab · 3 years ago

### Subdivision Algorithms in Computational Geometry *(prerequisite)*
Subdivision algorithms iteratively divide geometric spaces into smaller parts to simplify complex problems. They are crucial for spatial search and for managing the complexity of configuration spaces in motion planning.

*How the paper uses it:* The paper employs a T/R splitting scheme, a subdivision approach, to efficiently explore the robot's translational and rotational configuration space.

▶ [CENG773 - Computational Geometry - Lecture 5.1](https://www.youtube.com/watch?v=lGcrYdD4kx4) — METUOpenCourseWare · 11 years ago

### Motion Planning with Soft Predicates
Soft predicates are approximate but reliable tests used to classify regions of configuration space as free, occupied, or uncertain, enabling efficient and resolution-exact motion planning. They help avoid expensive exact collision checks while guaranteeing correctness within a resolution.

*How the paper uses it:* Soft predicates form the core of the paper's resolution-exact planners, enabling efficient collision detection and guaranteed halting with path or no-path results.

▶ [CS498IR Offline Lecture 11: Motion Planning](https://www.youtube.com/watch?v=OP2-AkS5OXM) — Intelligent Motion Lab · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and complexity to demonstrate understanding of the paper "Soft Subdivision Motion Planning for Complex Planar Robots." The beginner project recreates a core geometric concept from the paper using familiar tools. The intermediate project implements the paper's core decomposition and soft predicate approach on a simplified planar robot scenario, comparing against a baseline planner. The advanced project extends the method toward a stated future direction by exploring 3D polygonal robot decomposition or integrating arbitrary precision arithmetic to approach theoretical guarantees.

### Beginner — Triangle Decomposition Visualization for Complex Planar Robots
*Effort: a weekend, ~8 hours*

You build a web-based interactive visualization that takes a user-defined complex planar polygonal robot shape and decomposes it into 'nice' triangles sharing a common rotation center, as described in the paper. The app lets users input polygon vertices and see the decomposition steps and final triangles in a common coordinate system.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key geometric insight: decomposing complex polygonal robots into simpler triangles to enable soft predicate construction. A professor would see you understand the decomposition technique and its role in simplifying collision detection.

**Grounded in:** Introduction of a general technique to decompose complex polygonal robots into nice triangles for soft predicate construction.

**Tech stack:** TypeScript, React, SVG

**Data:** User-defined planar polygon shapes input interactively; no external dataset needed.

**Build it:**

1. Create a React app with an SVG canvas for polygon input and rendering.
2. Implement polygon vertex input and validation for simple polygons.
3. Implement a polygon triangulation algorithm (e.g., ear clipping) to decompose the polygon into triangles.
4. Calculate and display the common rotation center and transform all triangles into this coordinate system.
5. Visualize the original polygon and its decomposed triangles with distinct colors.
6. Add UI controls to reset, edit polygon, and highlight decomposition steps.

**Ships as:** An interactive React app repository with a README explaining the decomposition method and how it relates to the paper's approach.

**Stretch goal:** Add animation showing the T/R splitting scheme concept by illustrating translational and rotational configuration space boxes for a triangle.

### Intermediate — Resolution-Exact Planner for Planar Polygonal Robot via Triangle Decomposition
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the paper's resolution-exact planner that uses the decomposition of a planar polygonal robot into triangles and soft predicates for collision detection. You apply a T/R splitting scheme to explore the SE(2) configuration space and attempt to find a collision-free path in a 2D environment with polygonal obstacles. You compare your planner's success rate and runtime against a simple sampling-based planner like RRT.

**Why it shows you understood the paper:** This project shows you can reimplement the core method of the paper from its description, including the decomposition, soft predicate design, and subdivision search in SE(2). A professor would see you understand the algorithmic framework and can evaluate its practical performance.

**Grounded in:** Development of resolution-exact planners that guarantee halting with either a path or a no-path answer with clearance bounds; Implementation of T/R splitting strategy for efficient subdivision in SE(2) configuration space.

**Tech stack:** C++, Python, Matplotlib or similar for visualization

**Data:** Synthetic planar polygonal robot shapes (e.g., hexagon, octagon) and polygonal obstacle environments created programmatically; no external dataset needed.

**Build it:**

1. Implement polygon triangulation to decompose the robot shape into triangles sharing a rotation center.
2. Design soft predicates for collision detection of each triangle in a common coordinate system.
3. Implement a T/R splitting subdivision search algorithm to explore the robot's SE(2) configuration space.
4. Implement a simple sampling-based planner (e.g., RRT) as a baseline.
5. Run experiments on several synthetic environments and robot shapes, measuring success rate and runtime.
6. Document results and compare performance between your planner and the baseline.

**Ships as:** A repository with code implementing the planner and baseline, scripts to run experiments, and a README reporting results and explaining the method's connection to the paper.

**Stretch goal:** Incorporate a clearance parameter ε and demonstrate how varying it produces multiple distinct paths as in the paper.

### Advanced — Extending Soft Subdivision Planning to 3D Polygonal Robots or Arbitrary Precision
*Effort: 3+ weeks*

You develop an extension of the paper's approach by either (a) adapting the decomposition and soft predicate framework to handle 3D polygonal rigid robots, addressing the paper's open future direction, or (b) integrating arbitrary precision arithmetic into the existing planar planner to approach theoretical resolution-exactness guarantees. You implement the necessary geometric algorithms and demonstrate the approach on representative scenarios.

**Why it shows you understood the paper:** This project tackles a stated limitation or future direction of the paper, showing deep comprehension and initiative to advance the research. A professor would recognize your ability to bridge theory and practice and contribute novel extensions.

**Grounded in:** Extension to 3D rigid robots remains open; Incorporating arbitrary precision arithmetic to fully guarantee resolution-exactness.

**Tech stack:** C++, CGAL (Computational Geometry Algorithms Library) or MPFR for arbitrary precision, Python for prototyping and visualization

**Data:** Synthetic 3D polygonal robot models or planar robot models with arbitrary precision computations; no external dataset needed.

**Build it:**

1. Research and implement a 3D polygon decomposition method or integrate an arbitrary precision library into the planar planner.
2. Adapt the soft predicate design to the 3D case or to use arbitrary precision arithmetic for predicate evaluation.
3. Extend the subdivision search algorithm to handle the increased complexity of 3D SE(3) or to maintain resolution-exactness with arbitrary precision.
4. Create test scenarios demonstrating the new capability or improved guarantees.
5. Evaluate performance and correctness compared to the original planar planner.
6. Document the approach, challenges, and results in detail.

**Ships as:** A repository with code implementing the extension, test cases, and a comprehensive README discussing the method, its relation to the paper, and evaluation results.

**Stretch goal:** Combine both 3D extension and arbitrary precision arithmetic to build a robust planner for complex 3D polygonal robots.
