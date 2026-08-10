---
title: "146 · Position Auctions with a Capacity Constraint — Piotr Krysta"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-piotr-krysta"
source_hash: "0e43630d37c4dea8dfcf54ac586288a4d5f55193b8b2b949ea0ed6607635bf6f"
sequence: 146
generator: "outreach-garden: managed"
---

# 146 · Position Auctions with a Capacity Constraint

## At a glance

- **Professor:** Piotr Krysta
- **Institution:** Augusta University
- **Paper:** [Position Auctions with a Capacity Constraint](https://arxiv.org/pdf/2605.12040)
- **Authors:** Eleni Batziou, Georgios Birmpas, Georgios Chionas, Piotr Krysta
- **Year:** 2026

## Paper overview

This paper studies a more complex model of online advertising auctions where ads have different sizes and must fit within a limited page capacity. The authors design algorithms and truthful mechanisms that efficiently allocate ads to positions while respecting capacity constraints, achieving good approximations to the optimal social welfare.

### Why it matters

**Research problem:** Designing computationally efficient, truthful mechanisms for position auctions where ads have heterogeneous sizes and must fit within a global capacity constraint, modeled as a capacity-constrained bipartite matching problem.

**Why it matters:** Online advertising generates billions in revenue, and modern ad formats are more complex than classical models. Efficient and truthful auction mechanisms that handle capacity constraints and heterogeneous ad sizes are crucial for maximizing social welfare and platform revenue.

**Key contributions:**

- Formulation of position auctions with heterogeneous ad sizes and a global capacity constraint as a capacity-constrained matching problem.
- A novel algorithm that achieves a 6-approximation for the general capacity-constrained matching problem by combining greedy selection with adaptive reassignment.
- Identification of limitations of natural greedy heuristics and demonstration of their poor approximation ratios.
- Design of a modified monotone algorithm (Mechanism 3) that ensures truthfulness in the single-parameter setting.
- Development of a universally truthful randomized mechanism (Mechanism 4) with a 12-approximation guarantee.

## About the professor

**Piotr Krysta** — Professor, School of Computer and Cyber Sciences, Augusta University.

Research interests: theoretical computer science with an emphasis on algorithmic mechanism design, algorithmic game theory, combinatorial and continuous optimization, mathematical programming, approximation algorithms, randomized algorithms and probabilistic analysis, distributed algorithms, and their applications in computational economics, blockchains, computational chemistry, Artificial Intelligence and Machine Learning

### Research links

- [Faculty/profile page](https://sites.google.com/view/piotrkrysta)
- [Professor website](https://www.csc.liv.ac.uk/~piotr/)
- [Resolved homepage](http://www.csc.liv.ac.uk/~piotr/)
- [Lab website](http://www.csc.liv.ac.uk/~piotr/algame.htm)
- [Google Scholar](https://scholar.google.co.uk/citations?user=Pe39BdUAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/k/PiotrKrysta.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algorithmic Mechanism Design
**The paper assumes:** algorithmic mechanism design, truthful mechanism design, approximation algorithms for auctions, single-parameter agent models
**Already in this field?** Skip this entirely if you already understand the basics of truthful mechanism design and approximation algorithms in auction settings.

To understand the design of truthful mechanisms and approximation algorithms for capacity-constrained position auctions, a solid grasp of algorithmic mechanism design and game theory is essential. The rigorous course offers a deep, structured university-level treatment of these topics, while the fast track provides a concise, accessible introduction to the core concepts of game theory and mechanism design. Choose the rigorous course for comprehensive understanding and the fast track for a quicker conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Algorithmic Game Theory (Stanford CS364A, Fall 2013)](https://www.youtube.com/playlist?list=PLEGCF-WLh2RJBqmxvZ0_ie-mleCFhi2N4) — Tim Roughgarden Lectures · 20 videos · 25.2h across 20 episodes

**Watch only this:** Lectures 2-5 (Mechanism Design Basics, Myerson's Lemma, Algorithmic Mechanism Design, Revenue-Maximizing Auctions), about 5 hours — these cover the core concepts of mechanism design, monotonicity, and truthful auctions needed to understand the paper's mechanisms.

*Why it unblocks this paper:* This Stanford course by Tim Roughgarden covers algorithmic game theory and mechanism design fundamentals, including monotonicity, truthfulness, and approximation algorithms, directly relevant to the paper's focus on truthful randomized mechanisms for capacity-constrained matching.

*If you want all of it:* All 20 lectures, about 25.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Game Theory and Algorithmic Mechanism Design](https://www.youtube.com/playlist?list=PLeyWfpm2PI_ek2mCJJhjX3G6QRS7LaW9c) — Swaprava Nath, IIT Bombay · 63 videos · 18.6h across the first 60 episodes

**Watch only this:** Modules 01-03 (Introduction to Game Theory, Introduction to Mechanism Design, The Game of Chess), about 54 minutes — these modules introduce the foundational ideas of game theory and mechanism design relevant to the paper.

*Why it unblocks this paper:* This lecture series from IIT Bombay provides a clear, concise introduction to game theory and algorithmic mechanism design, covering key concepts like Nash equilibrium, mechanism design basics, and truthful mechanisms in a shorter format suitable for quick background.

*If you want all of it:* First 60 episodes, about 18.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper "Position Auctions with a Capacity Constraint," start by building a foundation in the key prerequisite topics: capacity-constrained bipartite matching, algorithmic mechanism design, approximation algorithms for combinatorial optimization, and truthfulness and monotonicity in auctions. These topics provide the mathematical, algorithmic, and economic mechanism design background necessary to grasp the paper's novel contributions. Finally, focus on the core concept of capacity-constrained matching as it directly models the paper's problem, and conclude with the authors' own talk if available to gain direct insights into their approach and results.

### Capacity-constrained bipartite matching *(prerequisite)*
This topic covers the mathematical formulation and algorithms for bipartite matching problems with capacity constraints, which is the core combinatorial optimization model underlying the paper's auction problem. Understanding classical maximum matching and capacity constraints is essential to appreciate the complexity and novelty of the paper's problem formulation and algorithmic approach.

*How the paper uses it:* The paper formulates position auctions with heterogeneous ad sizes as a capacity-constrained bipartite matching problem.

▶ [A Second Course in Algorithms (Lecture 5: Minimum-Cost ...](https://www.youtube.com/watch?v=Wq2tkITYYHE) — Tim Roughgarden Lectures · 1:21:01

### Algorithmic mechanism design *(prerequisite)*
Algorithmic mechanism design provides the framework for designing auction mechanisms that are both computationally efficient and incentive compatible (truthful). This background is crucial to understand how the paper ensures truthfulness and designs randomized mechanisms with approximation guarantees.

*How the paper uses it:* The paper designs truthful mechanisms for capacity-constrained position auctions using algorithmic mechanism design principles.

▶ [Algorithmic Game Theory (Lecture 4: Algorithmic Mechanism ...](https://www.youtube.com/watch?v=BMoSLmuJsak) — Tim Roughgarden Lectures · 1:16:00

### Approximation algorithms for combinatorial optimization *(prerequisite)*
Approximation algorithms are key to efficiently solving NP-hard combinatorial optimization problems with provable guarantees. The paper's main algorithm achieves constant-factor approximations for the capacity-constrained matching problem, so understanding approximation techniques is foundational.

*How the paper uses it:* The paper develops approximation algorithms achieving constant-factor guarantees for capacity-constrained matching.

▶ [Approximation Algorithms for Stochastic Minimum Norm Combinatorial Optimization](https://www.youtube.com/watch?v=4uQA2MXkCNY) — IEEE FOCS: Foundations of Computer Science · 5 years ago

### Truthfulness and monotonicity in auctions *(prerequisite)*
Truthfulness and monotonicity are fundamental properties that ensure agents reveal their true valuations in auctions. The paper modifies algorithms to restore monotonicity and designs universally truthful randomized mechanisms, making this topic essential to grasp the mechanism design aspects.

*How the paper uses it:* The paper proves monotonicity and designs truthful mechanisms for single-parameter agents in capacity-constrained auctions.

▶ [Revenue Efficient Mechanisms for Online Advertising](https://www.youtube.com/watch?v=t2UbrmVmlSY) — Microsoft Research · 59:38

### Position Auctions with a Capacity Constraint (Core Concept) *(the paper's own talk)*
This concept focuses on the paper's central problem: designing truthful, efficient mechanisms for position auctions with heterogeneous ad sizes and a global capacity constraint. Understanding this core problem and the paper's novel algorithmic and mechanism design contributions is the ultimate goal of the learning path.

*How the paper uses it:* The paper's main contribution is the formulation and solution of position auctions with capacity constraints as a capacity-constrained matching problem with truthful mechanisms.

▶ [Learning Optimal Bids in Second Price Auctions with Temporal and Overlapping Targeting Constraints](https://www.youtube.com/watch?v=dA44DA8gQDM) — STCS TIFR · Streamed 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand position auctions with capacity constraints, starting with the basics of bipartite matching and approximation algorithms, then covering algorithmic mechanism design and truthfulness in auctions, and finally focusing on the paper's core novel algorithmic approach combining capacity-aware greedy algorithms with local improvements. Each step builds intuition for the paper's problem formulation and mechanism design techniques, enabling a clear grasp of the paper's contributions and results.

### Capacity-constrained bipartite matching *(prerequisite)*
Learn what bipartite matching is and how capacity constraints limit the number or size of matches. This forms the mathematical foundation for modeling the auction problem where ads must fit within a limited page capacity.

*How the paper uses it:* The paper formulates position auctions with heterogeneous ad sizes as a capacity-constrained bipartite matching problem.

▶ [Unweighted Bipartite Matching | Network Flow | Graph Theory](https://www.youtube.com/watch?v=GhjwOiJ4SqU) — WilliamFiset · 11:24

### Approximation algorithms for combinatorial optimization *(prerequisite)*
Understand how approximation algorithms provide efficient near-optimal solutions for complex optimization problems where exact solutions are computationally hard. This is key to appreciating the paper's constant-factor approximation guarantees.

*How the paper uses it:* The paper designs algorithms achieving constant-factor approximations for the capacity-constrained matching problem.

▶ [Approximation Algorithms Part I - Learn Algorithms](https://www.youtube.com/watch?v=LGiIiT4ACho) — Ho Manh Hung · 7:41

### Algorithmic mechanism design *(prerequisite)*
Explore how to design algorithms that incentivize participants to truthfully reveal their private information, ensuring efficient and fair outcomes in strategic settings like auctions.

*How the paper uses it:* The paper develops truthful mechanisms for position auctions under capacity constraints.

▶ [Algorithmic Game Theory (Lecture 4: Algorithmic Mechanism ...](https://www.youtube.com/watch?v=BMoSLmuJsak) — Tim Roughgarden Lectures · 1:16:00

### Truthfulness and monotonicity in auctions *(prerequisite)*
Learn why monotonicity in allocation rules is crucial for truthfulness in auctions, meaning that bidding higher should not hurt an agent's chance of winning, which the paper ensures via mechanism modifications.

*How the paper uses it:* The paper modifies algorithms to restore monotonicity, enabling truthful mechanisms.

▶ [Truthfulness in a Rubik's Cube Auction (VCG Mechanism)](https://www.youtube.com/watch?v=rdgPPExcbhM) — Cognitophila · 2 years ago

### Capacity-aware greedy algorithms with local improvements
Understand how combining greedy selection with adaptive local improvements can efficiently handle capacity constraints and heterogeneous sizes, forming the core of the paper's novel algorithmic approach.

*How the paper uses it:* The paper's main algorithm combines density-based greedy selection with capacity-aware local reassignment to achieve a 6-approximation.

▶ [General Lecture Series 9 - Greedy Algorithms (RUCP Fall 2020)](https://www.youtube.com/watch?v=8SYw9GcScMY) — Code Badger · 5 years ago

## Already in your library

- [2.11.7 Bipartite Matching](https://www.youtube.com/watch?v=HZLKDC9OSaQ) — also for: Speeding-up Graph Algorithms via Clique Partitioning (Daniel Grosu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper "Position Auctions with a Capacity Constraint." The beginner project reproduces a key algorithmic idea on a small synthetic example, the intermediate project implements the core randomized truthful mechanism and compares it to a simple baseline, and the advanced project explores a future direction by extending the model to handle ad-dependent CTRs, addressing a stated limitation.

### Beginner — Capacity-Constrained Greedy Matching Simulator
*Effort: a weekend, ~8 hours*

You build a small simulator that implements the paper's novel greedy algorithm combining density-based ordering with capacity-aware local improvements for capacity-constrained bipartite matching. The simulator runs on a small synthetic dataset of ads with heterogeneous sizes and values, fitting them into a fixed capacity, and outputs the selected ads and total value.

**Why it shows you understood the paper:** This project shows you understand the core algorithmic challenge of capacity-constrained matching with heterogeneous ad sizes and the paper's approach to approximate it beyond naive greedy heuristics.

**Grounded in:** Key contribution: "A novel algorithm that achieves a 6-approximation for the general capacity-constrained matching problem by combining greedy selection with adaptive reassignment."

**Tech stack:** Python 3.11

**Data:** Synthetic dataset generated in code simulating ads with random sizes and values, and a fixed global capacity constraint.

**Build it:**

1. Implement a data structure to represent ads with size and value attributes.
2. Implement the density-based greedy selection algorithm that orders ads by value-to-size ratio.
3. Add capacity-aware local improvement steps to reassign ads for better total value.
4. Create a small synthetic dataset of 10-20 ads with varying sizes and values.
5. Run the algorithm on the dataset and output the selected ads and total value.
6. Write a README explaining the algorithm and how it relates to the paper.

**Ships as:** A Python script that runs the capacity-constrained greedy matching algorithm on synthetic data with output showing selected ads and total value, plus a README linking it to the paper's algorithm.

**Stretch goal:** Add a visualization of the capacity usage and selected ads to better illustrate the algorithm's behavior.

### Intermediate — Implementation and Evaluation of Mechanism 2 for Position Auctions
*Effort: 2 weekends, ~20 hours*

You implement Mechanism 2 from the paper, which randomizes between the novel capacity-constrained matching algorithm and selecting the single highest-value feasible ad-position pair. You evaluate its performance on a synthetic dataset simulating position auctions with heterogeneous ad sizes and capacity constraints, comparing it against a natural greedy baseline. You report approximation ratios and expected social welfare.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core truthful mechanism and experimentally verify its approximation guarantees compared to simpler heuristics, showing grasp of both algorithm design and mechanism truthfulness.

**Grounded in:** Key result: "Mechanism 2 (randomizing between the novel algorithm and a single highest-value feasible pair) achieves a 6-approximation in expectation."

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic datasets generated in code simulating ads with heterogeneous sizes, values, and a global capacity constraint; no public dataset available.

**Build it:**

1. Reimplement the novel capacity-constrained matching algorithm from the paper.
2. Implement the single highest-value feasible ad-position pair selection algorithm.
3. Implement Mechanism 2 that randomizes between the two algorithms.
4. Generate multiple synthetic datasets simulating position auctions with capacity constraints.
5. Implement a natural greedy baseline algorithm for comparison.
6. Run experiments comparing Mechanism 2 against the baseline, measuring total social welfare and approximation ratios.
7. Plot results and write a report linking findings to the paper's theoretical guarantees.

**Ships as:** A Python repository with implementations of Mechanism 2 and baseline, scripts to run experiments on synthetic data, plots of approximation performance, and a README explaining the connection to the paper.

**Stretch goal:** Add code to verify monotonicity properties of Mechanism 2 outputs on synthetic data to explore truthfulness aspects.

### Advanced — Extending Capacity-Constrained Position Auctions to Ad-Dependent CTRs
*Effort: 3-4 weeks*

You extend the paper's model and mechanism to handle click-through rates (CTRs) that depend on both the position and the assigned ad, addressing a key limitation noted by the authors. You modify the capacity-constrained matching formulation and adapt the randomized truthful mechanism accordingly. You evaluate your extension on synthetic data with ad-position dependent CTRs and compare social welfare to the original model.

**Why it shows you understood the paper:** This project tackles an open future direction from the paper, demonstrating deep comprehension of the model's assumptions and the challenges in extending truthful mechanisms to more general CTR models.

**Grounded in:** Limitation and future direction: "The approach does not extend directly to more general CTR models where CTR depends on the ad assigned." and "Extending the model to settings where CTRs depend on both position and the assigned ad."

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic datasets generated in code simulating ads with heterogeneous sizes, values, and ad-position dependent CTRs; no public dataset available.

**Build it:**

1. Review the paper's model and mechanism assumptions regarding CTRs.
2. Formulate an extended capacity-constrained matching problem incorporating ad-position dependent CTRs.
3. Adapt the randomized truthful mechanism (Mechanism 4) to the new model, ensuring monotonicity if possible.
4. Generate synthetic datasets with ad-position dependent CTR values.
5. Implement the extended mechanism and baseline algorithms.
6. Run experiments comparing social welfare and approximation ratios between the original and extended models.
7. Document challenges, limitations, and potential improvements in a detailed README.

**Ships as:** A Python repository implementing the extended mechanism, experimental scripts, results comparing original and extended models, and a comprehensive README discussing the extension and its relation to the paper.

**Stretch goal:** Explore heuristic or approximation algorithms that could yield deterministic truthful mechanisms under the extended CTR model.
