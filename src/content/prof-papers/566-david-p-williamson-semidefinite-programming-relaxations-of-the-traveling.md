---
title: "566 · Semidefinite Programming Relaxations of the Traveling Salesman Problem and Their Integrality Gaps — David P. Williamson"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-p-williamson"
source_hash: "0ffaec68a7b9c5125adbdea3eb27605bea26a25b424168903e7ba9e784ae5549"
sequence: 566
generator: "outreach-garden: managed"
---

# 566 · Semidefinite Programming Relaxations of the Traveling Salesman Problem and Their Integrality Gaps

## At a glance

- **Professor:** David P. Williamson
- **Institution:** Cornell University
- **Paper:** [Semidefinite Programming Relaxations of the Traveling Salesman Problem and Their Integrality Gaps](https://pubsonline.informs.org/doi/10.1287/moor.2020.1100)
- **Authors:** Samuel C. Gutekunst, David P. Williamson
- **Year:** 2019

## Paper overview

This paper studies semidefinite programming (SDP) relaxations of the Traveling Salesman Problem (TSP), a classic combinatorial optimization problem. It shows that several known SDP relaxations have unbounded integrality gaps, meaning they can be arbitrarily bad approximations of the true TSP solution. The authors introduce a family of test instances called simplicial TSP instances that reveal these limitations. They also prove that these SDP relaxations are non-monotonic, unlike the well-known subtour linear programming relaxation. The work highlights fundamental challenges in using SDP relaxations for TSP and motivates the search for better relaxations.

### Why it matters

**Research problem:** The paper investigates the quality of semidefinite programming relaxations for the metric and symmetric Traveling Salesman Problem, focusing on their integrality gaps and monotonicity properties.

**Why it matters:** The TSP is a fundamental NP-hard problem with wide applications. SDP relaxations are powerful tools in combinatorial optimization, but understanding their limitations is crucial for developing effective approximation algorithms. Knowing that certain SDP relaxations have unbounded integrality gaps limits their usefulness and guides future research toward better formulations.

**Key contributions:**

- Introduction of simplicial TSP instances as a litmus test for SDP relaxations of the TSP.
- Proof that the integrality gap of the SDP relaxation by de Klerk and Sotirov (2012) is unbounded.
- Extension of unbounded integrality gap results to all SDP relaxations surveyed by Sotirov (2012) and the SDP by Anstreicher (2000).
- Demonstration that these SDP relaxations exhibit non-monotonicity, a counterintuitive property not shared by the TSP or subtour LP.
- Explicit construction of feasible SDP solutions with detailed spectral analysis to support the theoretical results.

## About the professor

**David P. Williamson** — Professor, School of Operations Research and Information Engineering, Cornell University.

Research interests: discrete optimization, approximation algorithms, network design, scheduling, facility location, clustering, traveling salesman problem

### Research links

- [Faculty/profile page](https://www.orie.cornell.edu/faculty-directory/david-p-williamson)
- [Identity evidence](http://www.orie.cornell.edu/people/profile.cfm?netid=dw36)
- [Identity evidence](http://www.davidpwilliamson.net/work/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Semidefinite Programming
**The paper assumes:** semidefinite programming, convex optimization, positive semidefinite matrices, combinatorial optimization relaxations
**Already in this field?** Skip this entirely if you already understand semidefinite programming formulations and their role in combinatorial optimization.

To understand the semidefinite programming (SDP) relaxations analyzed in the paper, it is essential to grasp the fundamentals of SDP, including positive semidefinite matrices, convex optimization, and spectral properties. The rigorous course offers a deep, structured university-level treatment suitable for thorough comprehension, while the fast track provides a concise, intuition-driven introduction that covers the core concepts efficiently. Choose the lane that best fits your available time and depth of study needs.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Semidefinite Programming](https://www.youtube.com/playlist?list=PLozfWTmL_5hu7SidLQJFN7hguNX84dlPp) — Saurabh Shringarpure · 8 videos · 4.3h across 8 episodes

**Watch only this:** Episodes 1 through 4, about 2.1 hours — focusing on positive semidefinite matrices, SDP basics, stability, and a key SDP application in combinatorial optimization, providing a quick yet solid foundation.

*Why it unblocks this paper:* This concise playlist by Saurabh Shringarpure delivers a practical and intuitive introduction to semidefinite programming, including positive semidefinite matrices and the Goemans-Williamson Max-Cut algorithm, which parallels SDP applications in combinatorial optimization like the TSP relaxations studied in the paper.

*If you want all of it:* All 8 episodes, about 4.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on semidefinite programming relaxations of the Traveling Salesman Problem (TSP) and their integrality gaps, start with foundational concepts including the Traveling Salesman Problem approximations, integrality gaps in optimization, spectral graph theory and matrix analysis, and subtour elimination linear programming relaxations. Then, study semidefinite programming relaxations as the central method analyzed in the paper. Finally, focus on the authors' own talk presenting their specific results for direct insight into their contributions and techniques.

### Traveling salesman problem approximation *(prerequisite)*
This section covers advanced approximation algorithms for the TSP, including constant-factor approximations for asymmetric TSP and improvements on classical results. Understanding these algorithms and their LP relaxations provides essential context for the paper's focus on SDP relaxations and integrality gaps.

*How the paper uses it:* The paper studies SDP relaxations as alternatives to classical LP relaxations for approximating the TSP.

▶ [A Constant-factor Approximation Algorithm for the Asymmetric Traveling Salesman Problem](https://www.youtube.com/watch?v=xeOSV7FaJwY) — Simons Institute for the Theory of Computing · 1:07:59 · Streamed 9y ago

### Integrality gaps in optimization *(prerequisite)*
Integrality gaps measure how well a relaxation approximates the integer solution of a combinatorial optimization problem. This section introduces the concept and examples of integrality gaps in linear and semidefinite programming, which is crucial to understanding the paper's main results on unbounded integrality gaps of SDP relaxations.

*How the paper uses it:* The paper proves unbounded integrality gaps for several SDP relaxations of the TSP.

▶ [20May2022 Tutte The Chvatal Gomory Procedure for Interger SDPs with Application in Combinatorial Opt](https://www.youtube.com/watch?v=6VA8KYskHSo) — Combinatorics & Optimization University of Waterloo · 54:49 · 4y ago

### Spectral graph theory and matrix analysis *(prerequisite)*
Spectral graph theory and matrix analysis provide tools to analyze the eigenvalues and eigenvectors of matrices associated with graphs, which are used in the paper to construct and analyze SDP solutions. This section offers an advanced introduction to these techniques relevant to the paper's spectral and algebraic methods.

*How the paper uses it:* The paper uses spectral properties of circulant matrices and Kronecker products to prove feasibility and integrality gap results.

▶ [Spectral Graph Theory I: Introduction to Spectral Graph Theory](https://www.youtube.com/watch?v=01AqmIU9Su4) — Simons Institute for the Theory of Computing · 1:03:00 · 12y ago

### Subtour elimination linear programming relaxation *(prerequisite)*
The subtour elimination LP is a classical relaxation for the TSP with well-studied integrality gap and monotonicity properties. Understanding this baseline relaxation is important to appreciate the paper's comparison and contrast with SDP relaxations, especially regarding integrality gaps and monotonicity.

*How the paper uses it:* The paper shows that simplicial TSP instances have integrality gap 1 for the subtour LP but unbounded gaps for SDP relaxations.

▶ [10-5 TSP Subtour Elimination](https://www.youtube.com/watch?v=sOTUaT0aABc) — James Davis · 9:08 · 10y ago

### Semidefinite programming relaxations
This section delves into semidefinite programming relaxations, the core method analyzed in the paper for approximating the TSP. It covers advanced SDP hierarchies, relaxations of quadratic programs, and their applications in combinatorial optimization, providing the theoretical foundation for the paper's analysis.

*How the paper uses it:* The paper analyzes known SDP relaxations of the TSP and constructs explicit SDP solutions to demonstrate unbounded integrality gaps.

▶ [2020Oct23 Tutte Semidefinite Programming Relaxations of the Traveling Salesman Problem David P  Will](https://www.youtube.com/watch?v=3sdi8TOnJoI) — Combinatorics & Optimization University of Waterloo · 1:04:19 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper on semidefinite programming (SDP) relaxations of the Traveling Salesman Problem (TSP) and their integrality gaps. Starting with the basics of the TSP and approximation algorithms, it then covers integrality gaps to understand relaxation quality, followed by spectral graph theory and matrix analysis techniques used in the paper. Finally, it explains SDP relaxations themselves, focusing on their role in approximating the TSP and the limitations highlighted by the paper.

### Traveling salesman problem approximation *(prerequisite)*
Learn what the Traveling Salesman Problem is and how approximation algorithms provide near-optimal solutions for this NP-hard problem. This section covers the intuition behind approximation guarantees and the role of linear programming relaxations as a baseline.

*How the paper uses it:* The paper studies SDP relaxations as alternatives to classical LP relaxations for approximating the TSP.

▶ [A Constant-Factor Approximation Algorithm for the Asymmetric Traveling Salesman Problem](https://www.youtube.com/watch?v=EMgzeyOidCw) — Microsoft Research · 47:51 · 8y ago

### Integrality gaps in optimization *(prerequisite)*
Understand integrality gaps, which measure how far a relaxation's solution can be from the true integer solution. This concept is key to evaluating the quality of relaxations like those studied in the paper.

*How the paper uses it:* The paper proves that certain SDP relaxations have unbounded integrality gaps for the TSP.

▶ [Linear Programming & Combinatorial Optimization (2022) Lecture-20](https://www.youtube.com/watch?v=Akz1JsnOBC4) — Nishad-Kothari-IIT-Madras · 32:36 · 4y ago

### Spectral graph theory and matrix analysis *(prerequisite)*
Explore how eigenvalues and eigenvectors of matrices associated with graphs reveal structural properties. These tools are essential for analyzing SDP solutions and proving their feasibility and integrality gaps.

*How the paper uses it:* The authors use spectral and algebraic techniques, including circulant matrices and Kronecker products, to analyze SDP solutions.

▶ [Introduction to Spectral Graph Theory and Laplacian Matrix](https://www.youtube.com/watch?v=8tKbrNjkM70) — Sonny Xu · 7:22 · 6y ago

### Semidefinite programming relaxations
Learn what semidefinite programming is and how SDP relaxations extend linear programming relaxations by optimizing over positive semidefinite matrices. This section explains why SDP relaxations are powerful but also challenging to analyze.

*How the paper uses it:* The paper analyzes known SDP relaxations of the TSP and demonstrates their limitations.

▶ [Semidefinite Programming](https://www.youtube.com/watch?v=u3rbGJN93ro) — Barnabas Poczos · 39:59 · 6mo ago

## Already in your library

- [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)
- [4.7 Traveling Salesperson Problem - Dynamic Programming](https://www.youtube.com/watch?v=XaXsJJh-Q5Y) — also for: Spot-Scanning Confocal Photon Beams for Hypofractionated Brain Radiosurgery (Shuang (Sean) Luan)
- [Introduction to Spectral Graph Theory - David Rosen & Kasra Khosoussi | RSS '23 SGTM Workshop](https://www.youtube.com/watch?v=nF-GchT7mxM) — also for: Graph Theoretic Approach to QoS Guaranteed Spectrum Allocation in Cognitive Radio Networks (Kenneth A. Berman)
- [15. Linear Programming: LP, reductions, Simplex](https://www.youtube.com/watch?v=WwMz2fJwUCg) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the limitations of semidefinite programming (SDP) relaxations for the Traveling Salesman Problem (TSP) as studied in the paper. Starting with a beginner project that reproduces a key example of simplicial TSP instances and their SDP integrality gaps, progressing to an intermediate project that implements and tests the de Klerk and Sotirov SDP relaxation on these instances, and culminating in an advanced project that explores one of the paper's open questions by augmenting SDP relaxations with subtour elimination constraints and analyzing their impact.

### Beginner — Reproduce Simplicial TSP Instances and Visualize Integrality Gaps
*Effort: a weekend, ~8 hours*

You build a script to generate simplicial TSP instances as defined in the paper, where vertices are placed at the extreme points of a simplex. You then compute and visualize the cost of the subtour LP relaxation and a simple SDP relaxation solution (constructed as per the paper's description) to illustrate the integrality gap difference.

**Why it shows you understood the paper:** This project shows you understand the construction of simplicial TSP instances and the fundamental difference in integrality gaps between the subtour LP and SDP relaxations, a key contribution of the paper.

**Grounded in:** Introduction of simplicial TSP instances as a litmus test for SDP relaxations of the TSP; Simplicial TSP instances have integrality gap 1 for the subtour LP but unbounded integrality gaps for all considered SDP relaxations.

**Tech stack:** Python 3.11, NumPy, Matplotlib, CVXPY (for LP relaxation)

**Data:** Synthetic simplicial TSP instances generated according to the paper's definition (no external dataset needed).

**Build it:**

1. Implement a function to generate simplicial TSP instances with vertices at simplex extreme points.
2. Implement the subtour LP relaxation using CVXPY and solve it on these instances.
3. Implement a simple SDP relaxation solution construction as described in the paper (feasible but not optimal).
4. Compute and compare the costs of the subtour LP and SDP solutions.
5. Visualize the instance and the integrality gap results in plots.
6. Write a README explaining the instance construction and the observed integrality gaps.

**Ships as:** A GitHub repository with scripts to generate simplicial TSP instances, solve the subtour LP and SDP relaxations, and visualize integrality gaps, accompanied by a clear README.

**Stretch goal:** Add interactive visualization to explore how changing the number of vertices affects the integrality gaps.

### Intermediate — Implement and Evaluate the de Klerk and Sotirov SDP Relaxation on Simplicial TSP Instances
*Effort: 1-3 weekends, ~20 hours*

You implement the SDP relaxation for the TSP as formulated by de Klerk and Sotirov (2012) from the paper's description. You generate simplicial TSP instances and solve the SDP relaxation using a semidefinite programming solver. You compare the SDP relaxation cost against the subtour LP cost and the true TSP cost (computed via a heuristic or exact solver for small instances) to empirically demonstrate the unbounded integrality gap.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement a core SDP relaxation method from the paper, apply it to the key test instances introduced by the authors, and reproduce the main integrality gap results, showing deep comprehension of the paper's technical content.

**Grounded in:** Proof that the integrality gap of the SDP relaxation by de Klerk and Sotirov (2012) is unbounded; Simplicial TSP instances have integrality gap 1 for the subtour LP but unbounded integrality gaps for all considered SDP relaxations.

**Tech stack:** Python 3.11, CVXPY with SCS or MOSEK solver, NumPy, NetworkX (for TSP heuristics)

**Data:** Synthetic simplicial TSP instances generated as per the paper; small TSP instances for exact or heuristic comparison.

**Build it:**

1. Implement the de Klerk and Sotirov SDP relaxation formulation using CVXPY.
2. Generate simplicial TSP instances with varying sizes.
3. Solve the SDP relaxation on these instances and record the objective values.
4. Compute subtour LP relaxation costs using CVXPY for comparison.
5. Use a heuristic TSP solver (e.g., NetworkX Christofides algorithm) to estimate the true TSP cost.
6. Analyze and plot the integrality gaps (SDP vs TSP and LP vs TSP) as instance size grows.
7. Document the implementation details, results, and interpretation in the README.

**Ships as:** A GitHub repository with a full implementation of the de Klerk and Sotirov SDP relaxation, scripts to generate test instances, run comparisons, and visualize integrality gaps, with detailed documentation.

**Stretch goal:** Extend the implementation to include the SDP relaxation by Anstreicher (2000) and compare integrality gaps.

### Advanced — Augment SDP Relaxations with Subtour Elimination Constraints and Analyze Integrality Gaps
*Effort: a few weeks, ~40+ hours*

You extend the SDP relaxation implementation by adding subtour elimination constraints, inspired by the paper's open question about whether these constraints can improve integrality gaps beyond the subtour LP. You generate simplicial TSP instances and possibly other TSP instances, solve the augmented SDP relaxations, and analyze whether the integrality gaps improve or remain unbounded. You document your findings and discuss implications for future SDP relaxation design.

**Why it shows you understood the paper:** This project tackles a stated limitation and open question from the paper, showing initiative to explore beyond the original results. It demonstrates your ability to extend complex SDP formulations and critically analyze their performance, which is valuable for research collaboration.

**Grounded in:** The paper leaves open the question of whether adding subtour elimination constraints to these SDPs can improve their integrality gaps; Investigate the integrality gaps of SDP relaxations augmented with subtour elimination constraints and whether they can surpass the 3/2 approximation ratio.

**Tech stack:** Python 3.11, CVXPY with MOSEK or SCS solver, NumPy, NetworkX

**Data:** Synthetic simplicial TSP instances and possibly other small TSP benchmark instances (e.g., TSPLIB small instances) for broader evaluation.

**Build it:**

1. Review and understand subtour elimination constraints from the subtour LP relaxation.
2. Integrate subtour elimination constraints into the SDP relaxation formulation implemented previously.
3. Generate simplicial TSP instances and select additional small TSP instances from public benchmarks.
4. Solve the augmented SDP relaxation on these instances and record objective values.
5. Compare integrality gaps against the original SDP relaxation and subtour LP results.
6. Analyze and visualize the impact of subtour elimination constraints on integrality gaps.
7. Write a detailed report discussing whether these constraints improve SDP relaxation quality and implications for future research.

**Ships as:** A GitHub repository with extended SDP relaxation code including subtour elimination constraints, evaluation scripts on multiple TSP instances, visualizations of integrality gaps, and a comprehensive README/report discussing results and future directions.

**Stretch goal:** Experiment with adding constraints enforcing solutions lie within the Minimum Spanning Tree polytope and analyze effects on integrality gaps.
