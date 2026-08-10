---
title: "214 · Perimeter Defense using a Turret with Finite Range and Service Times — Eric Torng"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-torng"
source_hash: "98893a9b1ca7585c8fd679c5ee9127b2aa93702db1f5089e7d96ba643e1e1d1e"
sequence: 214
generator: "outreach-garden: managed"
---

# 214 · Perimeter Defense using a Turret with Finite Range and Service Times

## At a glance

- **Professor:** Eric Torng
- **Institution:** Michigan State University
- **Paper:** [Perimeter Defense using a Turret with Finite Range and Service Times](https://arxiv.org/abs/2302.02186)
- **Authors:** Shivam Bajaj, Shaunak D. Bopardikar, Alexander Von Moll, Eric Torng, David W. Casbeer
- **Year:** 2023

## Paper overview

This paper studies how a single turret with limited range and a required service time can defend a perimeter against multiple intruders moving radially inward in a conical environment. It analyzes both offline scenarios where all intruders are known in advance and online scenarios where intruders arrive over time. The authors develop algorithms to maximize the number of intruders captured and provide theoretical performance guarantees.

### Why it matters

**Research problem:** How to optimally control a single turret with finite range and non-zero service time to defend a concentric perimeter against multiple intruders moving radially inward, considering both offline (all intruders known) and online (intruders arrive over time) settings.

**Why it matters:** Perimeter defense is critical in autonomous systems and security applications. Existing approaches often do not scale well with many intruders or do not handle online arrivals effectively. Understanding optimal defense strategies with realistic turret constraints can improve autonomous perimeter security.

**Key contributions:**

- Formulation of the perimeter defense problem with a turret having finite range and service time in a conical environment.
- Equivalence proof of the offline problem to a TRP-TW problem on a line segment.
- Development of a 2-approximate algorithm for the offline problem and a polynomial-time optimal algorithm in a special parameter regime (r = ρ).
- Establishment of fundamental limits showing no online algorithm can have competitive ratio better than (N-1) under certain conditions.
- Design of two online algorithms: Sweeping Turret (SiT) with 1-competitive ratio and Dynamically Project and Capture (DPaC) with 2-competitive ratio in specific parameter regimes.

## About the professor

**Eric Torng** — Associate Professor, Department of Computer Science and Engineering (CSE), Michigan State University.

Research interests: Algorithms, On-Line Algorithms, Scheduling, Perimeter Defense, Packet Processing

### Research links

- [Faculty/profile page](https://engineering.msu.edu/faculty/Eric-Torng)
- [Identity evidence](http://www.cse.msu.edu/~torng)
- [Identity evidence](http://www.cse.msu.edu/~torng/HPFrames/outline.html)
- [Identity evidence](http://www.cse.msu.edu/~torng/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Online algorithms and competitive analysis
**The paper assumes:** online algorithms, competitive analysis, approximation algorithms, algorithmic game theory
**Already in this field?** Skip this entirely if you already understand the basics of online algorithms and how competitive ratios measure their performance.

This background focuses on online algorithms and competitive analysis, which are central to understanding the design and evaluation of turret defense strategies against intruders arriving over time in the paper. The rigorous course option offers a deep, university-level treatment of online algorithms with formal proofs and broad coverage, while the fast track provides a concise, intuition-driven series that covers key concepts and classic problems efficiently. Choose the course for a thorough foundation or the fast track for a quicker, concept-focused introduction.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Online algorithms](https://www.youtube.com/playlist?list=PLn83WpoA-HnY2n3Ao9RCywj8T7vMDHX_j) — Szabolcs Iván · 27 videos · 17.2h across 27 episodes

**Watch only this:** Episodes 1 to 3 (Online algorithms intro, the Ski Rental Problem, competitive ratio and A_B; The optimality of the algorithm A_B; The paging problem - deterministic algorithms), about 1 hour 55 minutes — these provide a quick yet solid grasp of core concepts and classic examples.

*Why it unblocks this paper:* This concise playlist by Szabolcs Iván offers clear, visual explanations of online algorithms and competitive analysis, including classic problems like ski rental and paging, which are directly relevant to the paper's online algorithmic techniques and competitive ratio results.

*If you want all of it:* All 27 episodes, about 17.2 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on perimeter defense using a turret with finite range and service times, start by building foundational knowledge in competitive analysis of online algorithms and vehicle routing problems with service times, as these underpin the theoretical guarantees and modeling of the turret's constraints. Next, study the Traveling Repairperson Problem with Time Windows, the key combinatorial optimization problem to which the offline defense problem is mapped. Finally, focus on the core concept of the paper itself, prioritizing any direct talks by the authors or closely related academic presentations on perimeter defense algorithms.

### Competitive analysis of online algorithms *(prerequisite)*
Competitive analysis is fundamental to understanding the performance guarantees of the online turret defense algorithms developed in the paper. The selected videos are advanced seminar and university lectures from reputable institutions that rigorously cover the theory and applications of competitive analysis in online algorithms.

*How the paper uses it:* The paper uses competitive analysis to establish worst-case performance bounds for online turret defense algorithms.

▶ [Competitive Analysis of Online Algorithms (Part 1)](https://www.youtube.com/watch?v=Yi4ItudutsA) — Simons Institute for the Theory of Computing · 56:00

### Vehicle routing problems with service times *(prerequisite)*
Vehicle routing problems with service times model the turret’s finite service time constraint when capturing intruders. The chosen videos include university lectures and research webinars that provide a rigorous treatment of vehicle routing problems and their extensions, which are essential for understanding the problem formulation in the paper.

*How the paper uses it:* The turret defense problem incorporates service times analogous to vehicle routing problems with service constraints.

▶ [W9_L9.5: Logistics and distribution management - vehicle ...](https://www.youtube.com/watch?v=o5HH7KPlFus) — IIT Madras - B.S. Degree Programme · 20:42

### Traveling Repairperson Problem with Time Windows
This concept is central to the paper as the offline perimeter defense problem is shown to be equivalent to a Traveling Repairperson Problem with Time Windows (TRP-TW). The selected video provides a focused explanation of the Traveling Salesman Problem with Time Windows, which closely relates to TRP-TW, helping to understand the complexity and algorithmic approaches used.

*How the paper uses it:* The offline turret defense problem is mapped to the TRP-TW, enabling the use of known algorithms and complexity results.

▶ [Travelling Salesman Problem with Time Windows](https://www.youtube.com/watch?v=vEg_KDAdv1Q) — Elok Sukmadewi · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand the turret perimeter defense problem, starting with foundational ideas in online algorithms and vehicle routing problems, then moving to the Traveling Repairperson Problem with Time Windows, and concluding with the specific turret defense algorithms and their performance guarantees. The order builds intuition on how online decision-making and routing with service constraints relate to defending a perimeter against intruders.

### Competitive analysis of online algorithms *(prerequisite)*
Competitive analysis is a framework to evaluate how well an online algorithm performs compared to an optimal offline algorithm that knows the future. It helps understand worst-case performance guarantees when decisions must be made without full information.

*How the paper uses it:* The paper uses competitive analysis to provide performance guarantees for online turret defense algorithms.

▶ [Online Algorithms Explained: Competitive Analysis & Real-World Examples](https://www.youtube.com/watch?v=nqoz7JtXtVE) — CodeLucky · 4:39 · 1 year ago

### Vehicle routing problems with service times *(prerequisite)*
Vehicle routing problems involve planning routes for vehicles to visit multiple locations efficiently, often with constraints like service times at each stop. This models the turret’s need to spend time servicing each intruder after detection.

*How the paper uses it:* The turret defense problem models the turret’s finite service time as a vehicle routing problem with service constraints.

▶ [Vehicle Routing Problem (VRP) ~xRay Pixy](https://www.youtube.com/watch?v=fIjKO3sjgok) — Ritika xRay Pixy · 11:58

### Traveling Repairperson Problem with Time Windows
The Traveling Repairperson Problem with Time Windows extends the classic Traveling Salesman Problem by adding deadlines or time windows for visiting locations. It captures the turret’s need to intercept intruders before they cross the perimeter within certain time constraints.

*How the paper uses it:* The offline turret defense problem is shown to be equivalent to a TRP-TW on a line segment, enabling algorithmic solutions.

▶ [Travelling Salesman Problem with Time Windows](https://www.youtube.com/watch?v=vEg_KDAdv1Q) — Elok Sukmadewi · 6 years ago

### Algorithms for perimeter defense and surveillance *(prerequisite)*
Algorithms for perimeter defense focus on strategies to detect and intercept intruders efficiently using autonomous systems. Understanding these helps contextualize the turret defense problem within broader security applications.

*How the paper uses it:* The paper designs and analyzes specific turret defense algorithms with provable guarantees in a conical environment.

▶ [[T-Ro] Decentralized Approach for Perimeter Defense Problem(PDP).](https://www.youtube.com/watch?v=O_yS4szWPSE) — Artificial Intelligence and Robotics Lab, IISc · 2 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into their motivations, problem setup, and key contributions in their own words, complementing the technical understanding from other sections.

*How the paper uses it:* Direct presentation by the authors on turret perimeter defense and their algorithms.

▶ [X4 Turret: Final Faction, Perimeter Defense Series.](https://www.youtube.com/watch?v=hqP9ryx9RKU) — Sageforsaken · 4 years ago

## Already in your library

- [Lec-29 Vehicle Routeing Problem](https://www.youtube.com/watch?v=A1wsIFDKqBk) — also for: Quantum Annealing Approaches to Solving the Shipment Rerouting Problems (Fei Li)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path grounded in the paper "Perimeter Defense using a Turret with Finite Range and Service Times." The beginner project recreates a key visualization of the parameter space showing algorithm effectiveness, the intermediate project implements the core offline algorithm for the special case r = ρ and compares it to a simple baseline, and the advanced project extends the model to incorporate limited look-ahead in the online setting, addressing a future direction suggested by the authors.

### Beginner — Visualize Parameter Regimes for Turret Defense Algorithms
*Effort: a weekend, ~8 hours*

You build a visualization of the (ρ, v) parameter space illustrating where the Sweeping Turret (SiT) and Dynamically Project and Capture (DPaC) algorithms are 1-competitive and 2-competitive respectively, reproducing the style of Figure 4 in the paper. This involves implementing the mathematical inequalities defining the regimes and plotting them using a suitable graphing library.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key analytical results on algorithm effectiveness and competitive ratios, as well as your ability to translate theoretical parameter bounds into clear visualizations.

**Grounded in:** Numerical visualization of parameter spaces illustrating algorithm effectiveness (Figure 4 and related text).

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** No external dataset is needed; you simulate parameter values (ρ, v) within ranges described in the paper to plot the algorithm performance regions.

**Build it:**

1. Extract the mathematical conditions defining the parameter regimes for SiT and DPaC algorithms from Theorems 4.3 and 4.7 and the paper's description of Figure 4.
2. Write Python functions that evaluate these conditions over a grid of (ρ, v) values within the feasible parameter space.
3. Use matplotlib to plot the parameter space with colored regions indicating where each algorithm is effective (1-competitive or 2-competitive).
4. Annotate the plot with legends and axis labels matching the paper's style.
5. Write a README explaining the significance of the parameter regimes and how the visualization relates to the paper's theoretical results.

**Ships as:** A Jupyter Notebook and Python script that generate a parameter space plot showing algorithm competitive ratio regions, with a README explaining the connection to the paper.

**Stretch goal:** Add interactive sliders using ipywidgets to dynamically explore how changing turret parameters affects algorithm effectiveness regions.

### Intermediate — Implement Offline Turret Defense Algorithm for r = ρ
*Effort: 2 weekends, ~20 hours*

You implement the polynomial-time offline algorithm that maximizes intruder captures when turret range equals perimeter radius (r = ρ), based on computing the longest path on the reachability graph as described in Theorem 3.5. You simulate intruder arrival times and positions in a conical environment and compare your algorithm's performance to a naive greedy baseline that captures intruders in order of arrival.

**Why it shows you understood the paper:** This project shows you can translate the paper's core offline algorithm from theory into code, handle the problem's geometric and temporal constraints, and evaluate algorithmic performance metrics similar to those in the paper.

**Grounded in:** A polynomial-time optimal algorithm exists in the special parameter regime where turret range equals perimeter radius (r = ρ) (Theorem 3.5).

**Tech stack:** Python 3.11, networkx, numpy, matplotlib

**Data:** You generate synthetic intruder arrival data simulating radial inward movement in a conical environment, consistent with the paper's model assumptions.

**Build it:**

1. Implement data structures to represent the conical environment, turret parameters (r, ρ, θ), and intruder arrival times and positions.
2. Construct the reachability graph as defined in the paper, where nodes represent intruder interception opportunities and edges represent feasible turret movements respecting service times.
3. Implement an algorithm to find the longest path in this directed acyclic graph to maximize intruder captures.
4. Implement a baseline greedy algorithm that captures intruders in order of arrival without optimization.
5. Run experiments comparing the offline algorithm to the baseline on multiple synthetic intruder scenarios, measuring number of intruders captured.
6. Visualize results and write a README explaining the implementation, evaluation, and relation to the paper.

**Ships as:** A Python repository with scripts to run the offline turret defense algorithm and baseline, synthetic data generation, performance comparison plots, and documentation.

**Stretch goal:** Extend the implementation to handle parameter regimes where r ≠ ρ approximately, exploring heuristic adaptations of the algorithm.

### Advanced — Extend Online Turret Defense with Limited Look-Ahead
*Effort: 3+ weeks*

You develop an extension of the online turret defense algorithms (SiT or DPaC) incorporating limited look-ahead or probabilistic information about intruder arrivals, addressing the paper's future direction on improving online algorithms with look-ahead. You simulate intruder arrivals under this model, implement the extended algorithm, and analyze its performance compared to the original algorithms under worst-case and probabilistic scenarios.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's online defense problem, competitive analysis limitations, and the ability to innovate by relaxing adversarial assumptions to improve algorithmic performance, potentially opening research conversations.

**Grounded in:** Future direction: Studying the problem under turrets with look-ahead capabilities and improving online algorithms given probabilistic information about intruder arrivals.

**Tech stack:** Python 3.11, numpy, matplotlib, networkx, Jupyter Notebook

**Data:** Synthetic intruder arrival sequences generated with probabilistic models or limited look-ahead information, simulating the online setting described in the paper.

**Build it:**

1. Review the original online algorithms SiT and DPaC and their competitive ratio analyses from the paper.
2. Design a model for limited look-ahead or probabilistic intruder arrival information (e.g., intruders known a few time steps ahead or arrival distributions).
3. Modify the online algorithms to incorporate this look-ahead information in turret scheduling decisions.
4. Implement simulation environments to generate intruder arrival sequences under adversarial and probabilistic models.
5. Evaluate and compare the extended algorithm's performance against original SiT and DPaC algorithms in terms of intruders captured and competitive ratios.
6. Document the methodology, results, and discuss implications for closing the gap between theoretical bounds and practical performance.

**Ships as:** A comprehensive Python project with implementations of original and extended online algorithms, simulation scripts, performance analyses, and a detailed README discussing the extension and its significance.

**Stretch goal:** Explore multi-turret extensions or stochastic intruder movement patterns to further generalize the defense model.
