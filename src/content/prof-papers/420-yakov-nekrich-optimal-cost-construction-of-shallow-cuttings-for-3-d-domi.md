---
title: "420 · Optimal-Cost Construction of Shallow Cuttings for 3-D Dominance Ranges in the I/O-Model — Yakov Nekrich"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yakov-nekrich"
source_hash: "ba798bc3366811543e7c0004dea366ca7efdfe06f2ea3262295eb0971c87588b"
sequence: 420
generator: "outreach-garden: managed"
---

# 420 · Optimal-Cost Construction of Shallow Cuttings for 3-D Dominance Ranges in the I/O-Model

## At a glance

- **Professor:** Yakov Nekrich
- **Institution:** Michigan Technological University
- **Paper:** [Optimal-Cost Construction of Shallow Cuttings for 3-D Dominance Ranges in the I/O-Model](https://arxiv.org/pdf/2603.21337)
- **Authors:** Yakov Nekrich, Saladi Rahul
- **Year:** 2026

## Paper overview

This paper presents the first optimal-cost algorithm to construct shallow cuttings for 3-dimensional dominance range searching in the I/O-model, which models computation with limited internal memory and costly disk accesses. The authors also apply this construction to design efficient algorithms for offline 3-D dominance reporting and approximate counting problems, improving the efficiency of spatial data structures used in computational geometry and spatial databases.

### Why it matters

**Research problem:** Efficient construction of shallow cuttings for 3-D dominance ranges in the I/O-model, which is crucial for designing space- and query-efficient data structures for range searching problems in external memory settings.

**Why it matters:** Shallow cuttings are fundamental in computational geometry and spatial databases for range searching. Existing algorithms for 3-D dominance range shallow cuttings are optimal in internal memory but lack efficient construction methods in the I/O-model, limiting practical applications in big-data scenarios where data does not fit in memory.

**Key contributions:**

- First known optimal-cost algorithm to construct k-level shallow cuttings for 3-D dominance ranges in the I/O-model.
- Design of efficient algorithms for offline 3-D dominance approximate counting and reporting using the new construction.
- Development of data structures with fast construction and query capabilities tailored for the I/O-model.
- Introduction of a hierarchical construction approach that reduces I/O complexity by exploiting large k values.
- Use of partially persistent B-trees to efficiently find parent cells during construction.

## About the professor

**Yakov Nekrich** — Associate Professor, Computer Science, Michigan Technological University.

Research interests: Data Structures, Algorithms

### Research links

- [Faculty/profile page](https://www.mtu.edu/cs/department/people/faculty/nekrich)
- [Professor website](https://pages.mtu.edu/~yakov/)
- [Google Scholar](http://scholar.google.ca/citations?user=XS3z1rkAAAAJ)
- [DBLP](http://www.informatik.uni-trier.de/%7Eley/pers/hd/n/Nekrich:Yakov.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Geometry
**The paper assumes:** computational geometry, geometric data structures, range searching algorithms
**Already in this field?** Skip this entirely if you have a solid undergraduate-level understanding of computational geometry and geometric data structures.

This background focuses on computational geometry fundamentals essential for understanding the paper's contributions on shallow cuttings and 3-D dominance range searching in the I/O-model. The rigorous course option offers a deep, structured university-level lecture series covering core geometric data structures and algorithms, while the fast track provides a concise, intuition-driven playlist that covers key computational geometry concepts quickly for efficient preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CENG 773 - Computational Geometry](https://www.youtube.com/playlist?list=PLuiPz6iU5SQ8W6v1F5OgogHel4T6KjKob) — METUOpenCourseWare · 29 videos

**Watch only this:** Lectures 1.1 through 5.3, about 9.5 hours — these cover geometric preliminaries, data structures, and range searching fundamentals needed to grasp the paper's approach.

*Why it unblocks this paper:* This METUOpenCourseWare series is a comprehensive university-level computational geometry course that covers foundational concepts and data structures such as range searching and geometric algorithms, directly relevant to understanding shallow cuttings and dominance queries in 3-D.

*If you want all of it:* 22.8 hours across all 29 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Geometry](https://www.youtube.com/playlist?list=PL7jlq62ybrDRw7bZ4ae-IKeMM2E2F-qT5) — Shrey Jain · 7 videos · 1.4h across 7 episodes

**Watch only this:** Episodes 1 through 5, about 1 hour — covering convex hull algorithms, line segment properties, and closest pair problems to build geometric intuition relevant to dominance range searching.

*Why it unblocks this paper:* This short playlist by Shrey Jain provides clear, concise explanations of core computational geometry concepts such as convex hulls, line segment properties, and closest pair algorithms, offering a quick but solid intuition foundation for the paper's geometric data structures.

*If you want all of it:* 1.4 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on optimal-cost construction of shallow cuttings for 3-D dominance ranges in the I/O-model, start by grasping the I/O-model algorithms as the foundational computational model. Next, build knowledge on 3-D dominance range searching, the fundamental geometric problem the paper addresses. Then, study partially persistent B-trees, a key data structure used in the paper's construction algorithm. Finally, focus on the core concept of shallow cuttings construction and the authors' own talk if available, to directly connect with their novel contributions and techniques.

### I/O-model algorithms *(prerequisite)*
Understanding the I/O-model is essential as it models computation with limited internal memory and costly disk accesses, which is the computational framework used in the paper. This model guides the design of algorithms that minimize disk I/O operations, crucial for big-data and external memory settings.

*How the paper uses it:* The paper develops optimal-cost algorithms for shallow cuttings construction specifically in the I/O-model, making this foundational knowledge critical.

▶ [Lecture 1: Algorithmic Thinking, Peak Finding](https://www.youtube.com/watch?v=HtSuA80QTyo) — MIT OpenCourseWare · 53:22 · 13 years ago

### 3-D dominance range searching *(prerequisite)*
3-D dominance range searching is the fundamental geometric query problem the paper addresses. Understanding the problem setting, including orthogonal range queries and dominance relations in three dimensions, is necessary to appreciate the significance of shallow cuttings and the paper's algorithmic improvements.

*How the paper uses it:* The paper constructs shallow cuttings for 3-D dominance ranges to enable efficient offline dominance reporting and approximate counting.

▶ [Computational Geometry Lecture 17: Orthogonal range searching](https://www.youtube.com/watch?v=149we3bhhRM) — Mikola Lysenko · 1:10:47 · 11 years ago

### Partially persistent B-trees *(prerequisite)*
Partially persistent B-trees are a specialized data structure that supports queries on past versions of the data, which the paper uses to efficiently find parent cells during the hierarchical shallow cutting construction. Understanding B-trees and their persistence extensions is key to grasping this technical component.

*How the paper uses it:* The paper employs partially persistent B-trees to support efficient successor queries on apex points during construction.

▶ [R2. 2-3 Trees and B-Trees](https://www.youtube.com/watch?v=TOb1tuEZ2X4) — MIT OpenCourseWare · 30:45 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand the paper's contributions on optimal-cost construction of shallow cuttings for 3-D dominance ranges in the I/O-model. We start with the computational model (I/O-model) to grasp the memory and disk access constraints, then cover the fundamental problem of 3-D dominance range searching, followed by the key data structure of partially persistent B-trees used in the paper. Finally, we focus on the core method of shallow cuttings construction, which is central to the paper's algorithmic advances.

### I/O-model algorithms *(prerequisite)*
The I/O-model captures computation where internal memory is limited and accessing external memory (disk) is costly. Understanding this model helps appreciate why minimizing disk accesses (I/Os) is crucial for big-data algorithms. This video introduces the general idea of algorithmic thinking and memory hierarchy constraints relevant to I/O-efficient algorithms.

*How the paper uses it:* The paper designs algorithms optimized for the I/O-model, minimizing costly disk accesses during shallow cutting construction and queries.

▶ [1. Introduction to Algorithms](https://www.youtube.com/watch?v=0IAPZzGSbME) — Abdul Bari · 11:49 · 8 years ago

### 3-D dominance range searching *(prerequisite)*
3-D dominance range searching is a geometric query problem where one finds points dominated by a query point in three dimensions. It is a fundamental problem in computational geometry with applications in databases and spatial data structures. This video explains the basics of range searching and data structures used to solve such queries.

*How the paper uses it:* The paper focuses on constructing shallow cuttings to efficiently solve 3-D dominance range searching problems in external memory.

▶ [Computational Geometry Lecture 17: Orthogonal range searching](https://www.youtube.com/watch?v=149we3bhhRM) — Mikola Lysenko · 1:10:47 · 11 years ago

### Partially persistent B-trees *(prerequisite)*
B-trees are balanced tree data structures optimized for systems that read and write large blocks of data, such as databases and file systems. Partial persistence allows queries on past versions of the data structure without full copies. This video explains B-trees and their role in reducing memory access, which is essential for efficient I/O operations.

*How the paper uses it:* The paper uses partially persistent B-trees to efficiently find parent cells during the hierarchical shallow cutting construction.

▶ [Lecture 33: B-Trees, Memory Hierarchy, Reducing Memory Accesses [Advanced Data Structures]](https://www.youtube.com/watch?v=X2zC99Eo0Q0) — PageWizard Games, Learning & Entertainment · 53:00 · 5 years ago

## Already in your library

- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [9. Augmentation: Range Trees](https://www.youtube.com/watch?v=xVka6z1hu-I) — also for: Verifying the Correctness of Analytic Query Results (Ying Cai)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the paper's core contributions on optimal-cost construction of shallow cuttings for 3-D dominance ranges in the I/O-model. The beginner project familiarizes you with the concept of dominance ranges and shallow cuttings through a small-scale visualization. The intermediate project involves reimplementing the hierarchical shallow cutting construction algorithm on synthetic 3-D point data, comparing I/O efficiency against a naive baseline. The advanced project extends the offline approach toward an online or dynamic query model, addressing one of the paper's stated open problems and exploring efficient I/O constructions in that setting.

### Beginner — Visualizing 3-D Dominance Ranges and Shallow Cuttings
*Effort: a weekend, ~8 hours*

You build an interactive web visualization that demonstrates 3-D dominance ranges and the concept of shallow cuttings on a small synthetic dataset (e.g., 50-100 points). The visualization shows points in 3D space, highlights dominance regions for query points, and illustrates how shallow cuttings partition the space into cells with conflict lists.

**Why it shows you understood the paper:** This project shows you grasp the geometric intuition behind dominance ranges and shallow cuttings, a fundamental concept in the paper. A professor would see you understand the spatial structure and conflict list idea central to the construction algorithms.

**Grounded in:** Key contribution: Introduction of hierarchical shallow cuttings for 3-D dominance ranges; approach section describing shallow cuttings and conflict lists.

**Tech stack:** JavaScript, React, Three.js or D3.js for 3D visualization

**Data:** Synthetic 3-D point sets generated randomly in a cube; no external dataset required.

**Build it:**

1. Generate a small synthetic 3-D point set (e.g., 50-100 points) uniformly at random.
2. Implement a function to compute dominance ranges for query points in 3D.
3. Visualize points and dominance regions in 3D using Three.js or D3.js.
4. Implement a simple shallow cutting: partition the space into cells and compute conflict lists for each cell.
5. Add interactive controls to select query points and highlight their dominance ranges and corresponding shallow cutting cells.

**Ships as:** A GitHub repo with a React-based interactive visualization and a README explaining dominance ranges and shallow cuttings with screenshots and usage instructions.

**Stretch goal:** Add visualization of the hierarchy of shallow cuttings with exponentially decreasing conflict list sizes.

### Intermediate — Reimplementing Hierarchical Shallow Cutting Construction in the I/O-Model
*Effort: 2 weekends, ~20 hours*

You implement the paper's core algorithm to construct k-level shallow cuttings for 3-D dominance ranges on synthetic large datasets, simulating the I/O-model with limited memory and block transfers. You compare the I/O cost of your hierarchical approach against a naive baseline that does not use hierarchy or partially persistent B-trees.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's theoretical algorithm into a working implementation, understand the I/O-model constraints, and measure the efficiency gains from the hierarchical construction and data structures. A professor would see you can reproduce the paper's main result on optimal I/O bounds.

**Grounded in:** Key result: The k-level shallow cutting for N points can be constructed in O((N/B) log_{M/B} (N/B)) I/Os, which is optimal; approach section on hierarchy and partially persistent B-trees.

**Tech stack:** C++, Python (for data generation and evaluation), Linux environment to simulate I/O costs (e.g., counting block reads/writes)

**Data:** Synthetic 3-D point sets generated uniformly at random or with clustered distributions to test performance; no external dataset required.

**Build it:**

1. Implement a simulator for the I/O-model that counts block transfers given memory size M and block size B.
2. Generate large synthetic 3-D point sets (e.g., 10^5 to 10^6 points).
3. Implement the hierarchical shallow cutting construction algorithm as described in the paper, including conflict list computation and partially persistent B-tree simulation.
4. Implement a naive baseline construction algorithm without hierarchy or persistence.
5. Run experiments comparing I/O costs of both methods under varying M, B, and N parameters.
6. Document results with plots and analysis comparing empirical I/O costs to theoretical bounds.

**Ships as:** A GitHub repo with C++ code implementing the hierarchical shallow cutting construction and baseline, Python scripts for data generation and evaluation, and a detailed README with experimental results and discussion.

**Stretch goal:** Extend the implementation to support offline 3-D dominance approximate counting queries using the constructed shallow cuttings.

### Advanced — Extending Optimal Shallow Cutting Construction to Online 3-D Dominance Queries
*Effort: 3-4 weeks*

You design and implement a prototype data structure supporting online 3-D dominance approximate counting or reporting queries with efficient I/O construction inspired by the paper's offline hierarchical approach. You explore challenges in adapting the offline method to dynamic or online query models, propose solutions, and evaluate I/O efficiency on synthetic workloads.

**Why it shows you understood the paper:** This project tackles one of the paper's open problems and future directions, showing deep comprehension of the paper's limitations and the ability to innovate beyond them. A professor would recognize your initiative to advance the state-of-the-art and your capacity to handle complex I/O-efficient data structures.

**Grounded in:** Limitation and future direction: Designing optimal algorithms for the online 3-D dominance approximate counting problem; developing efficient data structures for online query settings.

**Tech stack:** C++, Python (for workload simulation and evaluation), Linux environment for I/O simulation

**Data:** Synthetic 3-D point sets and query workloads generated to simulate online query arrival; no external dataset required.

**Build it:**

1. Review the paper's offline hierarchical shallow cutting construction and identify components that need adaptation for online queries.
2. Design a data structure supporting incremental updates or queries arriving one after another with efficient I/O costs.
3. Implement a prototype of the online data structure, reusing components from the offline implementation where possible.
4. Generate synthetic online query workloads and measure I/O costs and query response times.
5. Compare performance against a naive online baseline without hierarchical optimization.
6. Document design decisions, challenges, and experimental results in a comprehensive README.

**Ships as:** A GitHub repo with the online data structure implementation, evaluation scripts, and a detailed report discussing the extension, challenges, and empirical findings.

**Stretch goal:** Investigate partial persistence or other advanced data structures to further optimize online query efficiency.
