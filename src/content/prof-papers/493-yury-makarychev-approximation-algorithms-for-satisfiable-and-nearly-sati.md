---
title: "493 · Approximation Algorithms for Satisfiable and Nearly Satisfiable Ordering CSPs — Yury Makarychev"
date: 2026-08-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yury-makarychev"
source_hash: "2c0cb037b2a398f3a8b39e12ad75a7d310a0df76105ac45da9b42c2ebb77aa78"
sequence: 493
generator: "outreach-garden: managed"
---

# 493 · Approximation Algorithms for Satisfiable and Nearly Satisfiable Ordering CSPs

## At a glance

- **Professor:** Yury Makarychev
- **Institution:** TTI Chicago
- **Paper:** [Approximation Algorithms for Satisfiable and Nearly Satisfiable Ordering CSPs](https://arxiv.org/pdf/2603.30020)
- **Authors:** Yury Makarychev
- **Year:** 2026

## Paper overview

This paper develops a new general framework to design approximation algorithms for ordering constraint satisfaction problems (CSPs) that are either completely satisfiable or nearly satisfiable. Ordering CSPs involve finding permutations that satisfy constraints expressed as order relations among variables, which appear naturally in ranking and scheduling. The framework relaxes the original problem to a tractable one, solves it, and then applies a structured randomized transformation to improve approximation guarantees. The paper classifies these transformations, called strong IDU transformations, and shows how to optimize over them efficiently. Applying this framework, the author identifies thousands of ordering CSPs of arity 4 that admit nontrivial approximation guarantees, expanding the known positive results in this area.

### Why it matters

**Research problem:** Ordering CSPs are optimization problems where the goal is to find a permutation of variables satisfying the maximum number of ordering constraints. Despite their natural applications, their approximability is poorly understood, especially for completely satisfiable or nearly satisfiable instances. Prior hardness results show approximation resistance for fixed constants, but leave open the asymptotic regime where the fraction of unsatisfied constraints tends to zero. The problem is to develop approximation algorithms that achieve guarantees better than random orderings in these regimes.

**Why it matters:** Ordering CSPs model fundamental problems in ranking, scheduling, and temporal reasoning. Understanding their approximability impacts both theory and practice, as many real-world problems require near-optimal orderings. Existing hardness results limit approximation for fixed error, but practical scenarios often involve nearly satisfiable instances where better algorithms may exist. Providing a general framework and positive results for such cases advances the state of knowledge and algorithmic tools.

**Key contributions:**

- Development of a general framework for approximation algorithms for satisfiable and nearly satisfiable ordering CSPs.
- Introduction and classification of strong IDU transformations, a structured class of randomized transformations that capture the power of the framework.
- Reduction of the optimization over transformations to a finite-dimensional polynomial optimization problem depending only on predicate arity and precision.
- Application of the framework to single-predicate ordering CSPs of arity 3 and 4, identifying thousands of NP-hard predicates admitting nontrivial approximation guarantees.
- Provision of polynomial-time algorithms to compute nearly optimal strong IDU transformations and sample from them efficiently.

## About the professor

**Yury Makarychev** — TTI Chicago.

### Research links

- [Faculty/profile page](https://home.ttic.edu/~yury/)
- [Identity evidence](http://ttic.uchicago.edu/~yury)
- [Identity evidence](https://scholar.google.com/citations?user=W4Y0jUIAAAAJ)
- [Professor website](https://scholar.google.com/schhp?hl=en)
- [Resolved homepage](https://scholar.google.com/schhp?hl=en&as_sdt=0,44)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Approximation Algorithms for CSPs
**The paper assumes:** approximation algorithms, constraint satisfaction problems, polynomial-time relaxations, randomized rounding techniques
**Already in this field?** Skip this entirely if you already understand approximation algorithms for CSPs, including relaxations and rounding methods.

This background is designed to provide foundational understanding of approximation algorithms for constraint satisfaction problems (CSPs), which is essential for grasping the framework and techniques in the paper on ordering CSPs. The rigorous course offers a deep, structured dive into approximation algorithms, including relaxation and rounding methods, while the fast track provides a concise, focused introduction to key concepts and algorithmic techniques relevant to CSP approximations. Choose the rigorous course for comprehensive mastery or the fast track for a quicker, yet solid, conceptual grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Approximation Algorithms (Rasmus Pagh, University of Copenhagen, 2022)](https://www.youtube.com/playlist?list=PLidiQIHRzpXLXmsvFnU0al8j32y5srwyM) — Theoretical Computer Science School (TCSS) · 16 videos · 5.2h across 16 episodes

**Watch only this:** Lectures 1-6, about 1 hour 55 minutes — covering greedy/local search, rounding techniques including randomized rounding of LPs and SDPs, which are crucial for understanding relaxations and transformations in the paper.

*Why it unblocks this paper:* This university lecture series by Rasmus Pagh covers approximation algorithms with detailed treatments of randomized rounding, linear and semidefinite programming relaxations, and local search methods, all of which underpin the paper's framework for ordering CSPs.

*If you want all of it:* 5.2 hours across 16 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Approximation Algorithms](https://www.youtube.com/playlist?list=PLMDFPuH4ZxUFiTruqjoEG8NvpjBRvPulE) — Algorithms Lab · 11 videos · 5.9h across 11 episodes

**Watch only this:** Episodes 1-4, about 2 hours 8 minutes — including introduction, greedy set cover, knapsack FPTAS, and metric k-center, which build intuition for approximation frameworks and algorithm design.

*Why it unblocks this paper:* This concise playlist from Algorithms Lab introduces approximation algorithms with clear examples and covers LP rounding and local search methods relevant to CSP approximations, providing an accessible overview aligned with the paper's core techniques.

*If you want all of it:* 5.9 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on approximation algorithms for satisfiable and nearly satisfiable ordering CSPs, start with foundational knowledge on the complexity of constraint satisfaction problems (CSPs) to grasp the hardness and approximability context. Then, study relaxations in approximation algorithms and randomized rounding techniques, which are key methodological tools used in the paper. Next, learn about permutons and their applications, as they underpin the classification of strong IDU transformations central to the framework. Finally, focus on the paper's core concept by watching the author's own talk on ordering CSPs and approximation algorithms, which presents the main contributions and methods directly from the author.

### Constraint satisfaction problems complexity *(prerequisite)*
Understanding the complexity and approximability of CSPs is foundational to appreciating the challenges and contributions of the paper. This section covers rigorous university-level lectures and research talks that explain exact and approximate CSP complexity, including hardness results and structural characterizations.

*How the paper uses it:* The paper addresses approximation algorithms for ordering CSPs, so understanding CSP complexity is essential background.

▶ [Inapproximability of Constraint Satisfaction Problems I](https://www.youtube.com/watch?v=hLDpDtNoWBI) — Simons Institute for the Theory of Computing · 1:31:39 · 12 years ago

### Relaxations in approximation algorithms *(prerequisite)*
The paper’s framework relies on relaxing ordering CSP predicates to polynomially tractable CSPs. This section includes advanced talks on relaxations used in approximation algorithms, providing the theoretical and practical background needed to understand how relaxations enable efficient approximate solutions.

*How the paper uses it:* The framework relaxes predicates to tractable CSPs using Bodirsky–Kára classification, making relaxations a key methodological component.

▶ [Tutte Colloquium - Euiwoong Lee - 06/07/2024](https://www.youtube.com/watch?v=XBCkFxMSe0g) — Combinatorics & Optimization University of Waterloo · 1:07:27 · 2 years ago

### Randomized rounding and transformations *(prerequisite)*
Randomized rounding and structured randomized transformations are crucial in converting relaxed solutions back to approximate solutions for the original problem. This section features advanced university lectures on randomized rounding techniques relevant to the paper's IDU transformations.

*How the paper uses it:* The paper applies strong IDU randomized transformations to improve approximation guarantees after relaxation.

▶ [Lecture 05: Randomized rounding of semidefinite programs](https://www.youtube.com/watch?v=E6c0mp4UfQg) — Rasmus Pagh · 27:18 · 4 years ago

### Permutons and their applications *(prerequisite)*
Permutons are analytic objects used to classify strong IDU transformations in the paper. This section includes mathematically rigorous combinatorics lectures on permutations and related concepts, providing the necessary background to understand permutons and their role in the framework.

*How the paper uses it:* Strong IDU transformations are classified via permutons constructed from identity, decreasing, and uniform permutons.

▶ [COMBINATORICS AND DISCRETE PROBABILITY|COUNTING |Permutations |LECTURE 01 | DISCRETE MATHEMATICS](https://www.youtube.com/watch?v=ceyihXC6Ao8) — Pradeep Giri Academy · 1:06:24 · 2 years ago

### Paper author talk *(the paper's own talk)*
This is the author's own detailed presentation of approximation algorithms for ordering CSPs, including the framework, strong IDU transformations, and key results. Watching this talk provides direct insight into the paper's contributions and methods from the author himself.

*How the paper uses it:* Direct source for the author's own presentation of the paper's main contributions and methods.

▶ [Satisfiability of Ordering CSPs Above Average Is Fixed-Parameter Tractable](https://www.youtube.com/watch?v=s44Ii8Lskd0) — Microsoft Research · 54:08 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on approximation algorithms for satisfiable and nearly satisfiable ordering CSPs, start by building a foundation in constraint satisfaction problems (CSPs) and their complexity. Then learn about relaxations and randomized rounding techniques used in approximation algorithms. Finally, explore the specific framework of ordering CSP approximations and the role of permutons in the paper's novel transformations.

### Constraint satisfaction problems complexity *(prerequisite)*
Constraint satisfaction problems (CSPs) are mathematical questions defined by variables and constraints on their values. Understanding their complexity helps grasp why some CSPs are hard to solve exactly and why approximation algorithms are necessary. This foundation is crucial for appreciating the hardness and approximability results discussed in the paper.

*How the paper uses it:* The paper studies ordering CSPs, a special class of CSPs, and their approximability, so understanding CSP complexity is foundational.

▶ [Constraint Satisfaction Problems (CSPs) 1 - Overview | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=-IO4fPO0rxk) — Stanford Online · 13:50 · 4 years ago

### Relaxations in approximation algorithms *(prerequisite)*
Relaxations simplify hard optimization problems by allowing solutions in a broader space, making them tractable to solve approximately. This technique is key in designing approximation algorithms, as it provides a starting point before rounding or transforming solutions back to the original problem domain.

*How the paper uses it:* The paper’s framework relies on relaxing ordering CSP predicates to polynomially tractable CSPs to enable efficient approximation.

▶ [Introduction to Approximation Algorithms - K Center Problem](https://www.youtube.com/watch?v=dpYZojRuJEI) — CSBreakdown · 10:38 · 11 years ago

### Randomized rounding and transformations *(prerequisite)*
Randomized rounding converts fractional or relaxed solutions into discrete ones by using randomness, often preserving expected quality. Structured randomized transformations can improve approximation guarantees by carefully reshaping solutions, a technique central to many advanced approximation algorithms.

*How the paper uses it:* The paper applies structured randomized transformations called IDU transformations to improve approximation guarantees for ordering CSPs.

▶ [Lecture 05: Randomized rounding of semidefinite programs](https://www.youtube.com/watch?v=E6c0mp4UfQg) — Rasmus Pagh · 27:18 · 4 years ago

## Already in your library

- [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)
- [Constraint Satisfaction: introduction](https://www.youtube.com/watch?v=_e64FiDWvqs) — also for: TLEX: An Efficient Method for Extracting Exact Timelines from TimeML Temporal Graphs (Ning Xie)
- [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's framework for approximation algorithms on ordering CSPs. The beginner project focuses on implementing and visualizing a core concept of strong IDU transformations on a simple predicate. The intermediate project involves reimplementing the paper's core approximation framework for a small arity-3 ordering CSP and comparing it to a random baseline. The advanced project extends the framework to a nearly satisfiable regime or a dynamic setting, addressing one of the paper's stated limitations or future directions.

### Beginner — Visualizing Strong IDU Transformations for a Simple Ordering CSP
*Effort: a weekend, ~8 hours*

You build a small interactive visualization that demonstrates the concept of strong IDU transformations by combining identity (I), decreasing (D), and uniform (U) permutons. The app shows how these basic permutons and their up-combinations produce randomized orderings, and how these transformations affect a simple arity-3 ordering predicate such as Betweenness.

**Why it shows you understood the paper:** This project shows you understand the core algebraic and probabilistic structure of strong IDU transformations and their role in the approximation framework, as well as how permutons model randomized orderings.

**Grounded in:** Introduction and classification of strong IDU transformations, and their representation via up-combinations of I, D, and U permutons.

**Tech stack:** TypeScript, React, D3.js or similar visualization library

**Data:** No external data needed; you simulate small example predicates like Betweenness (arity 3) and generate permuton samples.

**Build it:**

1. Implement basic permutons: identity (I), decreasing (D), and uniform (U) as probability distributions over permutations.
2. Implement the up-combination operation to combine permutons into strong IDU transformations.
3. Simulate sampling permutations from these permutons and visualize the distribution of orderings.
4. Define a simple arity-3 ordering predicate (e.g., Betweenness) and compute the expected satisfaction probability under each permuton.
5. Build an interactive UI to toggle permuton combinations and display their effect on predicate satisfaction.

**Ships as:** A GitHub repository with a React app that visualizes strong IDU transformations and their effect on a simple ordering CSP predicate, with explanations in the README.

**Stretch goal:** Add support for visualizing arity-4 predicates and show how the approximation guarantee improves over random ordering.

### Intermediate — Reimplementing the Approximation Framework for Arity-3 Ordering CSPs
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core approximation algorithm framework for satisfiable ordering CSPs with a single arity-3 predicate (Betweenness or its variants). You implement the relaxation step, solve the relaxed instance, and apply strong IDU transformations to produce an ordering. You compare the approximation ratio achieved against a random ordering baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's theoretical framework into a working algorithm, including relaxation, polynomial optimization over transformations, and randomized rounding, validating the improvement over random orderings.

**Grounded in:** Development of a general framework for approximation algorithms and application to arity-3 single-predicate ordering CSPs, showing nontrivial approximation guarantees.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic instances of arity-3 ordering CSPs generated by you, simulating satisfiable instances with known solutions.

**Build it:**

1. Implement a generator for synthetic satisfiable instances of an arity-3 ordering CSP predicate (e.g., Betweenness).
2. Implement the relaxation of the ordering CSP to a polynomially tractable CSP as described in the paper.
3. Implement or adapt a solver to solve the relaxed instance exactly or approximately.
4. Implement the polynomial optimization over strong IDU transformations to find a near-optimal transformation.
5. Apply the sampled strong IDU transformation to the relaxed solution to produce an ordering.
6. Evaluate and compare the fraction of satisfied constraints against a random ordering baseline.
7. Plot results and write up explanations in the README.

**Ships as:** A GitHub repository with Python code implementing the approximation framework for arity-3 ordering CSPs, with scripts to generate instances, run the algorithm, and compare results.

**Stretch goal:** Extend the implementation to handle arity-4 predicates and compare approximation guarantees.

### Advanced — Extending the Framework to Nearly Satisfiable Ordering CSPs with Dynamic Constraints
*Effort: 3+ weeks*

You develop an extension of the paper's framework to handle nearly satisfiable ordering CSPs in a dynamic or online setting where constraints arrive over time. You adapt the relaxation and strong IDU transformation approach to update solutions incrementally and maintain approximation guarantees as constraints evolve. You evaluate the performance on synthetic dynamic instances and analyze the degradation factors related to ε log n log log n.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, demonstrating deep comprehension of the framework and creativity in adapting it to a new, practically relevant setting, potentially opening avenues for research collaboration.

**Grounded in:** Future direction: Extending the framework to dynamic or online ordering CSPs and improving approximation guarantees in nearly satisfiable regimes.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic dynamic instances of ordering CSPs where constraints are added over time, generated by you.

**Build it:**

1. Review the paper's approach for nearly satisfiable instances and the role of strong IDU transformations.
2. Design a data structure and algorithm to update the relaxation solution and transformation as new constraints arrive.
3. Implement incremental updates to the relaxation solver and transformation optimizer.
4. Generate synthetic dynamic instances with constraints arriving in batches or streams.
5. Evaluate the approximation ratio over time and analyze the impact of ε log n log log n factors.
6. Document the approach, challenges, and results in a detailed README or Jupyter notebook.

**Ships as:** A GitHub repository with code and documentation demonstrating an extension of the approximation framework to dynamic nearly satisfiable ordering CSPs, including evaluation results.

**Stretch goal:** Explore heuristic improvements or machine learning models to predict effective transformations in the dynamic setting.

_The authors released no code for this paper, so the intermediate and advanced projects require reimplementation from the paper's descriptions; synthetic data must be generated as no public datasets are provided._
