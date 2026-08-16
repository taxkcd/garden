---
title: "469 · Quadratic Running Time Example for Ruppert’s Refinement Algorithm — Jernej Barbic"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jernej-barbic"
source_hash: "31fa6d2d6f30902ca0f59dc95a0dcca2ad7a75231a8fc00fa1784714e62d4178"
sequence: 469
generator: "outreach-garden: managed"
---

# 469 · Quadratic Running Time Example for Ruppert’s Refinement Algorithm

## At a glance

- **Professor:** Jernej Barbic
- **Institution:** University of Southern California
- **Paper:** [Quadratic Running Time Example for Ruppert’s Refinement Algorithm](https://viterbi-web.usc.edu/~jbarbic/BarbicMiller-CCCG-2026.pdf)
- **Authors:** Jernej Barbič, Gary L. Miller
- **Year:** 2026

## Paper overview

This paper analyzes the worst-case running time of Ruppert’s refinement algorithm, a popular method for generating quality 2D meshes. The authors construct a specific input example and a particular strategy of selecting skinny triangles to split, demonstrating that the algorithm can take quadratic time relative to the output mesh size. This shows that without careful scheduling, the algorithm's running time can be significantly slower than previously expected.

### Why it matters

**Research problem:** While Ruppert’s refinement algorithm is known to produce output meshes of near-optimal size, its worst-case running time complexity was not well understood. The problem is to determine how slow the algorithm can run in the worst case, especially given that the standard algorithm does not specify an order for selecting skinny triangles to refine.

**Why it matters:** Understanding the worst-case running time is critical for applications in scientific computing, engineering, and computer graphics where mesh generation is a foundational step. Knowing the limits of Ruppert’s algorithm helps in designing efficient implementations and informs users about potential performance bottlenecks.

**Key contributions:**

- Proof that Ruppert’s refinement algorithm can have quadratic running time in the size of the output mesh under certain triangle selection strategies.
- Construction of a specific input example with size Θ(n) and output mesh size Θ(n) where the algorithm creates Θ(n²) triangles.
- Geometric lemmas establishing the recursive 'broom'-like pattern of skinny triangles causing the quadratic behavior.
- Demonstration that Miller’s priority-based triangle selection avoids this quadratic worst case, but naive strategies like FIFO or LIFO can incur it.
- Clarification that the example is tight since the running time is at most quadratic in output size.

## About the professor

**Jernej Barbic** — Professor, Computer Science, University of Southern California.

Research interests: computer graphics, animation, interactive physics, FEM, model reduction, deformable models, anatomically based modeling, medical imaging, haptics

### Research links

- [Faculty/profile page](https://viterbi.usc.edu/directory/faculty/Barbic/Jernej)
- [Identity evidence](https://viterbi-web.usc.edu/~jbarbic)
- [Resolved homepage](http://www.cs.usc.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Geometry
**The paper assumes:** computational geometry, triangulations, Delaunay refinement algorithms, mesh generation theory
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computational geometry and mesh refinement algorithms.

To understand the quadratic worst-case running time example for Ruppert’s refinement algorithm, a solid grasp of computational geometry concepts such as triangulations, Delaunay refinement, and mesh quality criteria is essential. The rigorous course option offers a deep, structured university-level lecture series covering these foundational topics in detail, while the fast track provides a concise, intuition-focused introduction to computational geometry algorithms relevant to mesh generation. Choose the rigorous course for thorough theoretical grounding or the fast track for a quick, clear overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CENG 773 - Computational Geometry](https://www.youtube.com/playlist?list=PLuiPz6iU5SQ8W6v1F5OgogHel4T6KjKob) — METUOpenCourseWare · 29 videos · 22.8h across 29 episodes

**Watch only this:** Lectures 1.1 through 2.3, about 4 hours — covering basic computational geometry concepts, triangulations, and initial mesh refinement techniques necessary to grasp the paper's geometric lemmas and algorithmic structure.

*Why it unblocks this paper:* This METUOpenCourseWare Computational Geometry course covers fundamental concepts such as triangulations and mesh refinement strategies in depth, directly supporting the understanding of Ruppert’s algorithm and its complexity analysis.

*If you want all of it:* 22.8 hours across 29 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Geometry](https://www.youtube.com/playlist?list=PL7jlq62ybrDRw7bZ4ae-IKeMM2E2F-qT5) — Shrey Jain · 7 videos · 1.4h across 7 episodes

**Watch only this:** Episodes 1 through 4, about 48 minutes — covering convex hull algorithms and line segment intersection properties that underpin the geometric reasoning in Ruppert’s algorithm.

*Why it unblocks this paper:* This short series by Shrey Jain provides a concise and clear introduction to key computational geometry algorithms like convex hulls, line segment properties, and closest pair problems, which build intuition relevant to understanding mesh refinement and triangle selection strategies.

*If you want all of it:* 1.4 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the quadratic running time example for Ruppert’s refinement algorithm, start by building foundational knowledge on Delaunay refinement algorithms and mesh generation complexity, which underpin Ruppert’s method. Next, grasp the role of priority queue scheduling in algorithmic efficiency, as it directly relates to the triangle selection strategies discussed in the paper. Finally, focus on the core concept of Ruppert’s refinement algorithm and the authors' specific quadratic time complexity analysis to appreciate their novel contribution.

### Delaunay refinement algorithm lecture *(prerequisite)*
Delaunay triangulation and refinement form the geometric and algorithmic foundation of Ruppert’s algorithm. Understanding these lectures provides the necessary background on how meshes are constructed and refined, which is crucial for following the paper's analysis of running time.

*How the paper uses it:* Ruppert’s refinement algorithm is based on Delaunay triangulation, so understanding this core technique is essential.

▶ [Delaunay Triangulation (1/5) | Computational Geometry - Lecture 08](https://www.youtube.com/watch?v=6UsdvbiJx54) — Philipp Kindermann · 5:32 · 6 years ago

### Mesh generation complexity seminar *(prerequisite)*
This seminar-level content discusses computational complexity issues in mesh generation algorithms, providing context on why worst-case running time analyses like the one in the paper matter. It helps situate Ruppert’s algorithm within broader mesh generation challenges.

*How the paper uses it:* The paper's main contribution is a worst-case complexity example for Ruppert’s algorithm, so understanding mesh generation complexity is foundational.

▶ [FEM@LLNL | Mesh Generation and Adaptation Using Green AI](https://www.youtube.com/watch?v=2_bLfUg_Ok0) — Inside Livermore Lab · 1:06:45 · 1 year ago

### Priority queue scheduling in algorithms talk *(prerequisite)*
Priority queue scheduling is a key technique to avoid the quadratic worst-case running time by disciplined triangle selection. These talks explain priority scheduling algorithms, which directly relate to the paper’s discussion of Miller’s priority-based triangle selection strategy.

*How the paper uses it:* The paper shows that naive triangle selection can cause quadratic running time, while priority-based scheduling avoids it, making understanding priority queues critical.

▶ [Priority Queue Introduction](https://www.youtube.com/watch?v=wptevk0bshY) — WilliamFiset · 13:18 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Ruppert’s refinement algorithm's quadratic running time, start by learning the basics of mesh generation and Delaunay triangulation, which form the foundation of Ruppert’s method. Next, grasp how triangle quality is measured and why skinny triangles matter for refinement. Then, explore priority queue scheduling to see how disciplined triangle selection affects algorithm efficiency. Finally, dive into the specific analysis of Ruppert’s refinement algorithm to understand the paper's core contribution on worst-case complexity.

### Delaunay refinement algorithm lecture *(prerequisite)*
Delaunay triangulation is a fundamental technique for creating meshes by connecting points to form triangles that maximize minimum angles, avoiding skinny triangles. Understanding this helps grasp how Ruppert’s algorithm refines meshes to improve quality.

*How the paper uses it:* Ruppert’s algorithm builds on Delaunay triangulation to iteratively refine meshes by splitting skinny triangles.

▶ [Delaunay Triangulation (1/5) | Computational Geometry - Lecture 08](https://www.youtube.com/watch?v=6UsdvbiJx54) — Philipp Kindermann · 5:32 · 6 years ago

### Triangle quality measures lecture *(prerequisite)*
Triangle quality measures identify skinny or poorly shaped triangles that can degrade mesh quality and simulation accuracy. Knowing these criteria explains why Ruppert’s algorithm targets certain triangles for refinement.

*How the paper uses it:* The paper analyzes how selecting skinny triangles for splitting affects Ruppert’s algorithm’s running time.

▶ [30 Most Important Triangle Concepts Every Student Should Know | Part-1](https://www.youtube.com/watch?v=4bxXOfr5tXQ) — Brain Station · 12:56 · 1 year ago

### Priority queue scheduling in algorithms talk *(prerequisite)*
Priority queue scheduling is a method to select tasks based on priority, ensuring efficient processing order. In mesh refinement, it helps pick the most critical triangles to split first, avoiding inefficient refinements.

*How the paper uses it:* The paper shows that Miller’s priority-based triangle selection avoids quadratic running time, unlike naive strategies.

▶ [Learn Priority Queue data structures in 5 minutes 🥇](https://www.youtube.com/watch?v=7z_HXFZqXqc) — Bro Code · 5:01 · 4 years ago

### Ruppert’s refinement algorithm talk *(the paper's own talk)*
This concept covers Ruppert’s refinement algorithm itself, focusing on how it refines meshes by splitting skinny triangles to improve quality and guarantees output size. Understanding the algorithm’s steps and complexity is key to grasping the paper’s worst-case example.

*How the paper uses it:* The paper constructs a specific input and triangle selection strategy to demonstrate Ruppert’s algorithm can run in quadratic time.

▶ [Lecture 4 - Quadratic Time Complexity | DSA in JAVA by Prateek Jain](https://www.youtube.com/watch?v=WocQnT_rSmg) — Prateek Jain Academy · 15:29 · 3 years ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 11: Large Scale Distributed Training](https://www.youtube.com/watch?v=9MvD-XsowsE) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Lecture 1: Algorithmic Thinking, Peak Finding](https://www.youtube.com/watch?v=HtSuA80QTyo) — also for: Optimal-Cost Construction of Shallow Cuttings for 3-D Dominance Ranges in the I/O-Model (Yakov Nekrich)
- [Lecture 23: Computational Complexity](https://www.youtube.com/watch?v=moPtwq_cVH8) — also for: Learning-assisted schedulability analysis: opportunities and limitations (Sanjoy K. Baruah)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the quadratic worst-case running time example for Ruppert’s refinement algorithm. The beginner project recreates a small-scale visualization of the recursive triangle refinement pattern. The intermediate project implements Ruppert’s algorithm with naive and priority-based triangle selection strategies on a synthetic input to compare running times. The advanced project extends the paper by exploring whether similar quadratic behavior can occur with input bounding boxes of constant aspect ratio, addressing a stated open problem.

### Beginner — Visualizing Ruppert’s Recursive Triangle Refinement Pattern
*Effort: a weekend, ~8 hours*

You build a small interactive 2D visualization that constructs and displays the 'broom'-like recursive pattern of skinny triangles described in the paper’s worst-case example. The visualization shows how splitting skinny triangles in a naive FIFO order leads to a quadratic number of triangles, illustrating the geometric lemmas visually.

**Why it shows you understood the paper:** This project demonstrates you grasp the core geometric construction and recursive refinement pattern that causes the quadratic running time, a key contribution of the paper.

**Grounded in:** Geometric lemmas establishing the recursive 'broom'-like pattern of skinny triangles causing the quadratic behavior.

**Tech stack:** JavaScript, HTML, CSS

**Data:** Synthetic geometric data generated according to the paper’s described input pattern; no external dataset needed.

**Build it:**

1. Implement a 2D canvas or SVG-based drawing area using JavaScript.
2. Programmatically generate the initial input point set and bounding box with linear aspect ratio as described.
3. Implement the naive triangle splitting strategy that recursively refines skinny triangles in FIFO order.
4. Visualize each refinement step by drawing triangles and highlighting skinny triangles to be split.
5. Add controls to step through the refinement process and observe the growth in triangle count.

**Ships as:** An interactive web page with a step-through visualization of the recursive triangle refinement pattern showing the quadratic growth in triangles.

**Stretch goal:** Add a toggle to switch between naive FIFO and priority-based triangle selection to visually compare refinement patterns.

### Intermediate — Implementing Ruppert’s Refinement with Triangle Selection Strategies
*Effort: 1-3 weekends*

You implement Ruppert’s refinement algorithm in 2D from the paper’s description, including the naive FIFO triangle selection strategy and Miller’s priority-based strategy. You generate the paper’s constructed input with bounding box size 1 × Θ(n) synthetically. You run both strategies and measure the number of triangles created and running time to reproduce the quadratic vs near-linear behavior.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the core algorithm and reproduce the paper’s main experimental result about how triangle selection strategy affects running time complexity.

**Grounded in:** Proof that Ruppert’s refinement algorithm can have quadratic running time in the size of the output mesh under certain triangle selection strategies; demonstration that Miller’s priority-based triangle selection avoids this quadratic worst case.

**Tech stack:** C++, Python 3.11

**Data:** Synthetic input point sets constructed per the paper’s example with bounding box 1 × Θ(n); no external dataset.

**Build it:**

1. Implement Ruppert’s refinement algorithm in C++ or Python, including mesh data structures and quality checks.
2. Implement two triangle selection strategies: naive FIFO and Miller’s priority-based largest circumradius first.
3. Generate the paper’s input point set synthetically with linear bounding box aspect ratio.
4. Run the algorithm with both strategies on increasing input sizes n and record the number of triangles created and running time.
5. Plot and compare the growth of triangles and running time to confirm quadratic vs near-linear behavior.

**Ships as:** Code repository with Ruppert’s refinement implementation, scripts to generate input, run experiments, and plots comparing triangle counts and running times for both strategies.

**Stretch goal:** Add logging to visualize the refinement sequence and verify the recursive pattern matches the paper’s lemmas.

### Advanced — Exploring Quadratic Running Time with Constant Aspect Ratio Inputs
*Effort: a few weeks*

You extend the paper’s work by attempting to construct or discover input point sets with a constant aspect ratio bounding box (e.g., [0,1] × [0,1]) that cause Ruppert’s refinement algorithm to exhibit quadratic running time under naive triangle selection. You implement the algorithm and test your constructions, analyzing whether the quadratic worst case can be realized in this more constrained geometric setting.

**Why it shows you understood the paper:** This project tackles a stated open problem and limitation from the paper, demonstrating deep comprehension of the algorithm’s behavior and the geometric constraints affecting worst-case complexity.

**Grounded in:** The constructed input has a bounding box with linear aspect ratio (1 × Θ(n)), and it remains open whether similar examples exist for constant aspect ratio boxes.

**Tech stack:** C++, Python 3.11, Matplotlib or similar for visualization

**Data:** Synthetic input point sets designed and generated by you to test constant aspect ratio bounding boxes; no external dataset.

**Build it:**

1. Review the paper’s geometric construction and understand why the linear aspect ratio is used.
2. Design candidate input point sets constrained to a constant aspect ratio bounding box aiming to replicate the recursive refinement pattern.
3. Implement Ruppert’s refinement algorithm with naive triangle selection to test these inputs.
4. Measure triangle counts and running times to detect quadratic behavior.
5. Visualize refinement sequences and analyze geometric properties to understand success or failure.
6. Document findings and limitations.

**Ships as:** A research-style report and code repository demonstrating attempts to construct constant aspect ratio inputs causing quadratic running time, with experimental results and analysis.

**Stretch goal:** Explore heuristic or modified triangle selection strategies that might induce quadratic behavior in constant aspect ratio inputs.
