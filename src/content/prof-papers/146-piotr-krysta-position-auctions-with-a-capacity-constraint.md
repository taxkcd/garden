---
title: "146 · Position Auctions with a Capacity Constraint — Piotr Krysta"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-piotr-krysta"
source_hash: "1a3c50b179f69072d2fa9146e389c5cac8e93a6806f821cabcbfa9d85df25e63"
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
