---
title: "789 · Optimal Scoring Rule Design under Partial Knowledge — Fang-Yi Yu"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fang-yi-yu"
source_hash: "5e06008b8703d692fce121cb8c84ff04f8514a6d2cfdecad4740f418057d275b"
sequence: 789
generator: "outreach-garden: managed"
---

# 789 · Optimal Scoring Rule Design under Partial Knowledge

## At a glance

- **Professor:** Fang-Yi Yu
- **Institution:** George Mason University
- **Paper:** [Optimal Scoring Rule Design under Partial Knowledge](https://arxiv.org/pdf/2107.07420)
- **Authors:** Yiling Chen, Fang-Yi Yu
- **Year:** 2024

## Paper overview

This paper addresses how to design scoring rules that incentivize agents to truthfully acquire and report costly information when the principal has only partial knowledge about the agent's information distribution. It generalizes prior work that assumed full knowledge, proposing algorithms to find optimal or near-optimal scoring rules under various uncertainty settings about the agent's prior beliefs and signal distributions.

### Why it matters

**Research problem:** How to design optimal proper scoring rules that maximize an agent's incentive to acquire costly information when the principal has only partial knowledge of the agent's signal distribution and prior beliefs.

**Why it matters:** In many real-world scenarios like conference peer review or crowdsourced scientific predictions, principals want to incentivize agents to exert effort to acquire high-quality information. However, principals often lack full knowledge of agents' information structures, making it challenging to design effective incentives. Addressing this gap improves the reliability and quality of elicited information in multi-agent systems.

**Key contributions:**

- Generalization of optimal scoring rule design to settings with partial knowledge of agents' information structures.
- Closed-form characterization of optimal v-shaped scoring rules for known prior or known information structure cases.
- Efficient linear programming algorithm to compute optimal piecewise linear scoring rules for finite collections of information structures.
- Development of an FPTAS for infinite collections of information structures, including ρ-correlated information structures.
- Novel coupling technique bounding earth mover's distance of posterior predictions by total variation distance of joint distributions.

## About the professor

**Fang-Yi Yu** — Assistant Professor, Department of Computer Science, George Mason University.

Research interests: My research lies at the interface of economics and computation, with a focus on information: how to elicit truthful and high-quality information, how to aggregate information reliably, and how agents behave when they exchange information. My main threads are information elicitation and quality assurance, forecasting and market design, and multi-agent learning dynamics.

### Research links

- [Faculty/profile page](https://people.cs.gmu.edu/~fangyiyu)
- [Google Scholar](https://scholar.google.com/citations?user=LhLBzWEAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/183/3719.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex analysis, convex optimization theory, linear programming, max-min optimization problems
**Already in this field?** Skip this entirely if you already understand convex optimization concepts including convex functions, duality, and linear programming.

This background focuses on convex optimization, which is essential for understanding the core methodology of the paper on optimal scoring rule design under partial knowledge. The rigorous course option provides a comprehensive, university-level treatment of convex optimization principles and techniques, while the fast track offers a concise, intuition-driven introduction suitable for quickly grasping the key concepts needed to follow the paper's approach.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1-7, about 9.2 hours — covering foundational convex sets and functions, optimality conditions, and duality, which are critical to understanding the paper's optimization framework.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a top-tier university course that thoroughly covers convex optimization theory and algorithms, directly supporting the paper's use of convex functions, max-min optimization, and linear programming techniques.

*If you want all of it:* 23.7 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Analysis and Optimization](https://www.youtube.com/playlist?list=PLiNGnnotnLOeYieGiDCOsdwI9ogWI4D3j) — Marcelo Oliveira · 18 videos · 11.1h across 18 episodes

**Watch only this:** Episodes 1-6, about 3.6 hours — covering basic convex optimization concepts, gradients, constraints, and introduction to optimization, sufficient for grasping the core ideas used in the paper.

*Why it unblocks this paper:* Marcelo Oliveira's Convex Analysis and Optimization playlist offers clear, concise explanations of convex optimization concepts with a focus on geometric intuition and practical optimization principles, providing a quick yet solid foundation for the paper's techniques.

*If you want all of it:* 11.1 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Optimal Scoring Rule Design under Partial Knowledge," start with foundational concepts in information elicitation mechanisms and convex optimization in mechanism design, as these provide the theoretical and mathematical tools used in the paper. Next, study max-min optimization and robust mechanism design to grasp the paper's approach to handling partial knowledge and worst-case scenarios. Finally, focus on the core concept of optimal scoring rule design under partial knowledge, including related advanced talks that directly address scoring rules and their optimization.

### Information Elicitation Mechanisms *(prerequisite)*
This section covers the core framework for designing incentives to acquire and report information truthfully, which is fundamental to the paper's goal of incentivizing agents under partial knowledge. The selected talk by Bo Waggoner is a rigorous research seminar that delves into information elicitation and mechanism design, providing a strong theoretical foundation.

*How the paper uses it:* The paper builds on information elicitation mechanisms to design scoring rules that incentivize truthful reporting under uncertainty.

▶ [Bo Waggoner: On Information Elicitation and Mechanism Design](https://www.youtube.com/watch?v=0pc2dldH6bs) — YoungEC 2017 Workshop · 30:35 · 9y ago

### Convex Optimization in Mechanism Design *(prerequisite)*
Convex optimization is the mathematical backbone for characterizing and computing optimal scoring rules in the paper. The lecture by Jing Chen at the Institute for Advanced Study is a comprehensive and advanced seminar on computational complexity in mechanism design, which includes convex optimization techniques relevant to the paper's approach.

*How the paper uses it:* The authors leverage convex optimization to solve the max-min problem for scoring rule design under partial knowledge.

▶ [Computational Complexity in Mechanism Design - Jing Chen](https://www.youtube.com/watch?v=ozfeaiCLzbA) — Institute for Advanced Study · 1:48:55 · 10y ago

### Max-Min Optimization and Robust Mechanism Design *(prerequisite)*
Understanding max-min optimization and robust mechanism design is crucial for grasping how the paper handles uncertainty and partial knowledge in scoring rule design. The talk by Asu Ozdaglar on robustness in machine learning and optimization provides a rigorous treatment of min-max approaches, directly relevant to the paper's max-min formulation.

*How the paper uses it:* The paper formulates scoring rule design as a max-min optimization problem to maximize worst-case incentives under uncertainty.

▶ [OWOS: Asu Ozdaglar - "Robustness in Machine Learning and Optimization: A Minmax Approach"](https://www.youtube.com/watch?v=qv0Yzcc95A8) — One World Optimization Seminar · 5 yr ago

### Optimal Scoring Rule Design under Partial Knowledge
This section focuses on the paper's central topic: designing optimal scoring rules when the principal has only partial knowledge of agents' information structures. The selected video, "Optimization of Scoring Rules" by Yifan Wu, is a research-level talk closely related to the paper's theme, providing insights into scoring rule optimization techniques that align with the paper's contributions.

*How the paper uses it:* This video complements the paper by discussing optimization techniques for scoring rules, a core method generalized in the paper under partial knowledge.

▶ [Optimization of Scoring Rules](https://www.youtube.com/watch?v=DLmOxCyAjHs) — Yifan Wu · 4 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on optimal scoring rule design under partial knowledge, start by learning the basics of proper scoring rules, which are the fundamental incentive mechanisms for truthful reporting. Next, explore information elicitation mechanisms to grasp how incentives are designed to acquire and report information. Then, study convex optimization techniques used to characterize and compute optimal scoring rules. After that, learn about max-min optimization and robust mechanism design, which handle uncertainty and worst-case scenarios. Finally, delve into the core concept of optimal scoring rule design under partial knowledge, which generalizes classical scoring rules to settings with uncertain priors and partial knowledge.

### Proper Scoring Rules *(prerequisite)*
Proper scoring rules are mathematical tools that incentivize agents to truthfully report their beliefs or information by rewarding accuracy. Understanding these rules provides the foundation for designing mechanisms that encourage honest information sharing.

*How the paper uses it:* The paper builds on proper scoring rules as the fundamental incentive mechanism for truthful reporting under uncertainty.

▶ [Decision Scoring Rules by Caspar Oesterheld](https://www.youtube.com/watch?v=Rl1vQ2N9FYk) — DIMACS CCICADA · 5:06 · 5 yr ago

### Information Elicitation Mechanisms *(prerequisite)*
Information elicitation mechanisms are frameworks that design incentives to encourage agents to acquire and report information truthfully, especially when the information is costly or private. Grasping these mechanisms is key to understanding how the paper addresses incentive design under partial knowledge.

*How the paper uses it:* The paper focuses on designing scoring rules as information elicitation mechanisms that work under partial knowledge of agents' information structures.

▶ [Bo Waggoner: On Information Elicitation and Mechanism Design](https://www.youtube.com/watch?v=0pc2dldH6bs) — YoungEC 2017 Workshop · 30:35 · 9y ago

### Convex Optimization in Mechanism Design *(prerequisite)*
Convex optimization provides mathematical tools to efficiently find optimal solutions in mechanism design problems, especially when scoring rules are linked to convex functions. Learning these concepts helps understand how the paper computes optimal scoring rules.

*How the paper uses it:* The authors leverage convex optimization and Savage's representation to characterize and compute optimal scoring rules.

▶ [Convex Optimization Basics](https://www.youtube.com/watch?v=oLowhs83aHk) — Intelligent Systems Lab · 21:32 · 6y ago

### Max-Min Optimization and Robust Mechanism Design *(prerequisite)*
Max-min optimization is a strategy to design mechanisms that perform well in the worst-case scenarios, which is crucial when the principal has only partial knowledge. Robust mechanism design uses these ideas to ensure incentives remain effective despite uncertainty.

*How the paper uses it:* The paper formulates scoring rule design as a max-min optimization problem to maximize worst-case information gain under partial knowledge.

▶ [Robust Mechanism Design](https://www.youtube.com/watch?v=nmq7bHbwTs4) — Microsoft Research · 10 yr ago

## Already in your library

- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Convex Sets | Introduction, Definition and Examples](https://www.youtube.com/watch?v=oX_WK5co4HY) — also for: The General Stability of Ranking (H. V. Jagadish)
- [Robust Learning via Robust Optimization - Stefanie Jegelka](https://www.youtube.com/watch?v=IgAPc0i0-9E) — also for: Can We Trust the Similarity Measurement in Federated Learning? (Xukai Zou)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of optimal scoring rule design under partial knowledge as presented in the paper. The beginner project reproduces a core concept with simple data and visualization, the intermediate project implements the paper's linear programming method for finite information structures and compares it against classical scoring rules, and the advanced project extends the method to richer state spaces or signal models, addressing a key limitation and future direction of the paper.

### Beginner — Visualize V-shaped Scoring Rules for Known Priors
*Effort: a weekend, ~6 hours*

You build a small Python notebook that implements and visualizes the v-shaped scoring rules shown to be optimal when the principal knows the prior or full information structure. Using synthetic binary state and signal distributions, you plot the scoring functions and demonstrate their shape and incentive properties.

**Why it shows you understood the paper:** This project shows you understand the closed-form characterization of v-shaped scoring rules and their optimality conditions under known priors, a key theoretical result in the paper.

**Grounded in:** Proposition 3.1 and Theorem 3.2 show that v-shaped scoring rules are optimal in the singleton and homogeneous prior settings.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic binary state and signal distributions generated in code to simulate known prior settings.

**Build it:**

1. Implement the formula for v-shaped scoring rules as described in the paper for binary states.
2. Generate example binary prior distributions and corresponding scoring functions.
3. Plot the scoring functions and illustrate their v-shaped form.
4. Demonstrate how the scoring rule incentivizes truthful reporting by simulating agent payoffs.
5. Write a README explaining the connection to the paper's theoretical results.

**Ships as:** A Jupyter notebook with plots of v-shaped scoring rules, simulation of incentives, and a README linking the results to the paper's theory.

**Stretch goal:** Add interactive widgets to vary the prior and see how the scoring rule shape changes.

### Intermediate — Compute Optimal Piecewise Linear Scoring Rules via Linear Programming
*Effort: 2 weekends, ~20 hours*

You implement the paper's linear programming algorithm to compute optimal piecewise linear scoring rules for a finite set of information structures. Using synthetic or small-scale simulated binary state-signal distributions, you compare the computed scoring rules against classical quadratic and log scoring rules in terms of incentive uniformity and worst-case payoff.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core max-min optimization and LP formulation into code, reproducing a key algorithmic contribution and empirical result.

**Grounded in:** Theorem 3.3 states that for finite X, an optimal piecewise linear scoring rule can be derived by solving a linear program in polynomial time.

**Tech stack:** Python 3.11, cvxpy, numpy, matplotlib, Jupyter Notebook

**Data:** Synthetic finite collections of binary state-signal joint distributions generated in code to represent finite information structures.

**Build it:**

1. Formulate the max-min optimization problem as a linear program following the paper's description.
2. Implement the LP using cvxpy to solve for optimal piecewise linear scoring rules.
3. Generate finite sets of synthetic information structures with varying correlations.
4. Compute classical scoring rules (quadratic, log) for baseline comparison.
5. Simulate agent payoffs under each scoring rule and plot performance metrics.
6. Document the implementation and results in a notebook and README.

**Ships as:** A Jupyter notebook and codebase that computes optimal scoring rules via LP, compares them to classical rules, and visualizes incentive performance.

**Stretch goal:** Extend the LP to handle more complex finite signal spaces or multi-state settings.

### Advanced — Extend FPTAS for Optimal Scoring Rules to Multi-State Settings
*Effort: 3+ weeks*

You develop an extension of the paper's fully polynomial-time approximation scheme (FPTAS) for infinite collections of information structures to handle categorical (multi-state) state spaces beyond the binary case. You implement the approximation algorithm, test it on synthetic multi-state correlated information structures, and analyze approximation quality and computational performance.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by generalizing the core approximation method to richer state spaces, demonstrating deep comprehension and research potential.

**Grounded in:** The paper primarily focuses on binary state spaces; extensions to categorical states are discussed but less emphasized. Future directions include extending the framework to more general or high-dimensional state spaces.

**Tech stack:** Python 3.11, cvxpy, numpy, scipy, Jupyter Notebook

**Data:** Synthetic multi-state categorical information structures generated in code, simulating infinite sets with ρ-correlations.

**Build it:**

1. Study the paper's FPTAS algorithm and coupling technique for binary states.
2. Design an extension of the approximation scheme to handle categorical states.
3. Implement the extended FPTAS algorithm using convex optimization tools.
4. Generate synthetic multi-state correlated information structures for testing.
5. Evaluate approximation guarantees and runtime performance experimentally.
6. Write a detailed report and README explaining the extension and results.

**Ships as:** A code repository with the extended FPTAS implementation, experimental evaluation notebooks, and documentation linking to the paper's limitations and future directions.

**Stretch goal:** Explore connections between the extended scoring rules and classical scoring rules like the log scoring rule in multi-state settings.
