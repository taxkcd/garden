---
title: "226 · Favoring Eagerness for Remaining Items: Designing Efficient, Fair, and Strategyproof Mechanisms — Sujoy Sikdar"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sujoy-sikdar"
source_hash: "1c05e26b98f544f6b6c6901361529c553b070c2e586a7eb0410532c3ec513ed1"
sequence: 226
generator: "outreach-garden: managed"
---

# 226 · Favoring Eagerness for Remaining Items: Designing Efficient, Fair, and Strategyproof Mechanisms

## At a glance

- **Professor:** Sujoy Sikdar
- **Institution:** Binghamton University
- **Paper:** [Favoring Eagerness for Remaining Items: Designing Efficient, Fair, and Strategyproof Mechanisms](https://doi.org/10.1613/jair.1.13878)
- **Authors:** Xiaoxi Guo, Sujoy Sikdar, Lirong Xia, Yongzhi Cao, Hanpin Wang
- **Year:** 2023

## Paper overview

This paper addresses the problem of assigning indivisible items to agents who have ranked preferences, aiming to do so efficiently, fairly, and without incentives for agents to misreport their preferences. The authors propose a new efficiency property called favoring-eagerness-for-remaining-items (FERI), which ensures that each item is allocated to an agent who values it most among the remaining items. They design mechanisms based on FERI that achieve desirable combinations of efficiency, fairness, and strategyproofness, overcoming limitations of previous approaches.

### Why it matters

**Research problem:** How to design assignment mechanisms for indivisible items that simultaneously satisfy important efficiency criteria (like first-choice maximality and Pareto-efficiency), fairness (such as equal treatment of equals and envy-freeness variants), and strategyproofness (preventing agents from benefiting by misreporting preferences), given that many such properties are known to be incompatible.

**Why it matters:** The assignment problem models many real-world resource allocation scenarios such as school choice, housing, and cloud computing resources. Ensuring that assignments are efficient, fair, and strategyproof is critical for participant satisfaction, social welfare, and practical adoption of allocation mechanisms. Existing mechanisms like the Boston mechanism fail to satisfy all these properties simultaneously, motivating new designs.

**Key contributions:**

- Propose the new efficiency property FERI that implies first-choice maximality and Pareto-efficiency.
- Design the eager Boston mechanism (EBM) that satisfies ex-post FERI, strong fairness notions (sd-weak-envy-freeness and strong equal treatment of equals), and sd-weak-strategyproofness.
- Show that EBM assignments correspond to a subset of adaptive Boston mechanisms but EBM itself is not a member of that family.
- Introduce the family of probabilistic respecting eagerness mechanisms (PRE) and identify UPRE as a member satisfying ex-ante FERI, fairness, and efficiency.
- Prove impossibility results showing that stronger fairness or strategyproofness properties cannot be combined with FERI mechanisms.

## About the professor

**Sujoy Sikdar** — Assistant Professor, Computer Science, Binghamton University.

Research interests: Artificial Intelligence, Computational Social Choice, Mechanism Design, Algorithm Design, Machine Learning, Computational Social Science, Trust and Credibility in Media

### Research links

- [Faculty/profile page](https://orcid.org/0000-0003-4742-812X)
- [Identity evidence](https://www.binghamton.edu/computer-science/contact/profile.html?id=ssikdar)
- [Identity evidence](https://www.binghamton.edu/computer-science/people/profile.html?id=ssikdar)
- [Identity evidence](https://sites.google.com/view/sujoysikdar)
- [Professor website](https://cs.binghamton.edu/~sikdar/)
- [Resolved homepage](https://cs.binghamton.edu/~sikdar/index.html)
- [Google Scholar](http://scholar.google.com/citations?user=OmZaKTEAAAAJ&hl=en)
- [GitHub](https://github.com/sujoyksikdar/)
- [LinkedIn](https://www.linkedin.com/pub/sujoy-sikdar/20/465/651)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Mechanism Design and Social Choice
**The paper assumes:** mechanism design, social choice theory, strategyproofness, fairness in allocation, Pareto-efficiency
**Already in this field?** Skip this entirely if you already have a solid understanding of mechanism design and social choice theory, including key fairness and efficiency concepts in resource allocation.

To understand the key concepts in this paper on mechanism design and social choice, especially the new efficiency property FERI and the design of fair and strategyproof allocation mechanisms, foundational knowledge in mechanism design, fairness, and strategyproofness is essential. The rigorous course option offers a deep, university-level treatment of these topics, while the fast track provides a concise, accessible introduction to the core ideas for quicker preparation. Choose the rigorous course if you want a thorough theoretical grounding; choose the fast track if you need a focused overview that covers the essentials efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Advanced Mechanism Design (Stanford CS364B, Winter 2014)](https://www.youtube.com/playlist?list=PLEGCF-WLh2RI77PL4gwLld_OU9Zh3TCX9) — Tim Roughgarden Lectures · 21 videos · 25.1h across 21 episodes

**Watch only this:** Lectures 1-5, about 6 hours — covering incentive compatible mechanisms, unit-demand bidders, and foundational auction theory to grasp strategyproofness and efficiency concepts.

*Why it unblocks this paper:* This Stanford course by Tim Roughgarden covers advanced topics in mechanism design including incentive compatibility, efficiency, and fairness notions, which are directly relevant to understanding the theoretical foundations and proofs in the paper.

*If you want all of it:* All 21 lectures, about 25.1 hours — for a comprehensive understanding of advanced mechanism design.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Social Network Analysis](https://www.youtube.com/playlist?list=PLY_5Saa90gdp73VxK4Y8K8IO6pQacXEUE) — Leaders' Decision-Making Lab · 37 videos · 8.7h across 37 episodes

**Watch only this:** Episodes 1-5, about 1.2 hours — covering introduction, random networks, graph theory, and decision making to quickly grasp relevant social choice concepts.

*Why it unblocks this paper:* This Social Network Analysis playlist provides clear, concise explanations of social choice and decision-making concepts, including fairness and collective behavior, which help build intuition about fairness and efficiency in allocation mechanisms.

*If you want all of it:* All 37 episodes, about 8.7 hours — for a broader understanding of social network influences on decision making and fairness.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Favoring Eagerness for Remaining Items (FERI) and the proposed mechanisms, start with foundational concepts in mechanism design, focusing on strategyproofness and fairness notions in resource allocation. Then, review classical efficiency properties like Pareto-efficiency and first-choice maximality to appreciate the efficiency improvements FERI offers. Finally, study the core concept of FERI and the paper's novel mechanisms, ideally through the authors' own presentations or closely related academic talks.

### Strategyproofness in allocation mechanisms *(prerequisite)*
Understanding strategyproofness is essential as it addresses incentive compatibility, a key constraint in mechanism design. This section covers formal definitions and theoretical results about mechanisms that prevent agents from benefiting by misreporting preferences, which is central to the paper's goal of designing strategyproof mechanisms.

*How the paper uses it:* The paper designs mechanisms that are strategyproof or weakly strategyproof to prevent manipulation by agents.

▶ [Obviously Strategy-Proof Mechanisms](https://www.youtube.com/watch?v=8ylbpcE3qfk) — Simons Institute for the Theory of Computing · 10 years ago

### Fairness notions in resource allocation *(prerequisite)*
Fairness concepts such as envy-freeness and equal treatment of equals are fundamental to evaluating allocation mechanisms. This section provides academic seminar talks and research presentations that rigorously discuss these fairness notions, which the paper aims to satisfy alongside efficiency and strategyproofness.

*How the paper uses it:* The paper analyzes fairness properties like sd-weak-envy-freeness and strong equal treatment of equals in its mechanism design.

▶ [Arpita Biswas - Fair Allocation of Indivisible Goods under Structured Set Systems -  EconCS Seminar](https://www.youtube.com/watch?v=XEg0AIkLKqg) — Harvard's CRCS · 5 years ago

### Pareto-efficiency and first-choice maximality *(prerequisite)*
These classical efficiency properties form the baseline for evaluating allocation mechanisms. Understanding them is crucial since FERI, the paper's novel efficiency property, implies both. This section includes university lectures that rigorously define and exemplify these concepts.

*How the paper uses it:* FERI implies first-choice maximality and Pareto-efficiency, making these foundational for understanding the paper's efficiency contributions.

▶ [(M8E4) [Microeconomics] Pareto Efficiency (Optimality)](https://www.youtube.com/watch?v=ROuNsyRhvQA) — selcuk ozyurt · 42:43 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's contributions on efficient, fair, and strategyproof assignment mechanisms, start by grasping foundational economic concepts of Pareto-efficiency and first-choice maximality, which underpin the new efficiency property FERI. Then, learn about fairness notions and strategyproofness in allocation mechanisms, which are central to the paper's design goals. Finally, focus on the core concept of favoring eagerness for remaining items (FERI), the novel efficiency property introduced by the authors, to appreciate how it leads to new mechanism designs.

### Pareto-efficiency and first-choice maximality *(prerequisite)*
Pareto-efficiency means an allocation where no one can be made better off without making someone else worse off, a fundamental efficiency criterion in economics. First-choice maximality ensures that as many agents as possible get their top-ranked item, which is a natural fairness and efficiency goal in assignments.

*How the paper uses it:* FERI implies both first-choice maximality and Pareto-efficiency, making it a stronger efficiency property than these classical notions.

▶ [Pareto Optimality - Meaning, Conditions (Efficiency in Exchange, Production & Product Mix)](https://www.youtube.com/watch?v=zp3Mh_dL62U) — Mini Sethi · 11:42 · 3 years ago

### Fairness notions in resource allocation *(prerequisite)*
Fairness in allocation involves concepts like envy-freeness, where no agent prefers another's allocation, and equal treatment of equals, ensuring agents with identical preferences are treated the same. These notions help ensure perceived justice and acceptance of the allocation.

*How the paper uses it:* The paper analyzes fairness properties such as sd-weak-envy-freeness and strong equal treatment of equals to evaluate their new mechanisms.

▶ [FSTTCS2019 S005 Towards Efficient, Almost Envy-Free Allocations](https://www.youtube.com/watch?v=L7zWrEg15N4) — Studio IIT Bombay · 4 years ago

### Strategyproofness in allocation mechanisms *(prerequisite)*
Strategyproofness means agents cannot benefit by misreporting their preferences, which is crucial to prevent manipulation and ensure truthful participation. Understanding this concept is key to grasping the incentive constraints in mechanism design.

*How the paper uses it:* The paper designs mechanisms that are strategyproof or weakly strategyproof to prevent gaming by agents.

▶ [Obviously Strategy-Proof Mechanisms](https://www.youtube.com/watch?v=8ylbpcE3qfk) — Simons Institute for the Theory of Computing · 10 years ago

## Already in your library

- [Lecture 20: Malleability and Inaccessibility of Preferences](https://www.youtube.com/watch?v=Z0vdSf8m13k) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's core ideas on the favoring-eagerness-for-remaining-items (FERI) property and its mechanisms. Starting with a basic implementation of the eager Boston mechanism (EBM) to grasp ex-post FERI and fairness, you then reimplement and compare the uniform probabilistic respecting eagerness mechanism (UPRE) against a baseline to explore ex-ante FERI and fairness trade-offs. Finally, you extend the mechanisms to handle indifferences in preferences, addressing a stated limitation and exploring future directions.

### Beginner — Implement Eager Boston Mechanism for Small Assignment Problem
*Effort: a weekend, ~8 hours*

You build a simple simulation of the eager Boston mechanism (EBM) for assigning indivisible items to agents with strict ordinal preferences and unit demand. The implementation will allocate items stepwise, ensuring ex-post favoring-eagerness-for-remaining-items (FERI) and demonstrate fairness properties like equal treatment of equals.

**Why it shows you understood the paper:** This project shows you understand the core mechanism design of EBM, how it enforces ex-post FERI, and its fairness guarantees, reflecting the paper's Theorem 1.

**Grounded in:** Theorem 1 proves that EBM satisfies ep-FERI, sd-WEF, SETE, and sd-WSP.

**Tech stack:** Python 3.11

**Data:** Simulated small synthetic preference profiles with 3-5 agents and 3-5 items, generated randomly with strict rankings.

**Build it:**

1. Implement a data structure to represent agents' strict ordinal preferences over items.
2. Implement the eager Boston mechanism allocation rounds, assigning items to agents who rank them highest among remaining items.
3. Verify that the allocation satisfies ex-post FERI by checking that each assigned item is the highest-ranked remaining item for the assigned agent.
4. Implement checks for fairness properties such as strong equal treatment of equals (SETE).
5. Create example runs with small synthetic data and output the assignment and verification results.

**Ships as:** A Python script with clear functions implementing EBM, example preference inputs, printed assignments, and verification of ex-post FERI and fairness properties documented in the README.

**Stretch goal:** Add a visualization of the allocation rounds showing how items are assigned stepwise to agents.

### Intermediate — Reimplement and Compare UPRE with Boston Mechanism on Synthetic Data
*Effort: 2 weekends, ~20 hours*

You reimplement the uniform probabilistic respecting eagerness mechanism (UPRE) from the paper, which satisfies ex-ante FERI and fairness, and compare it against the classic Boston mechanism on synthetic preference data. You compute and report metrics such as ex-ante FERI satisfaction, sd-weak-envy-freeness, and strategyproofness indicators.

**Why it shows you understood the paper:** This project demonstrates your ability to implement a probabilistic mechanism from the paper, understand the difference between ex-ante and ex-post FERI, and evaluate fairness and strategyproofness trade-offs, reflecting Theorem 3 and key results.

**Grounded in:** Theorem 3 shows that UPRE, a member of PRE, satisfies ea-FERI, sd-WEF, and SETE.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic preference profiles with 10 agents and 10 items, generated randomly with strict ordinal preferences.

**Build it:**

1. Implement data structures for agents' preferences and random assignment matrices.
2. Implement the uniform probabilistic respecting eagerness mechanism (UPRE) as described in the paper.
3. Implement the classic Boston mechanism for baseline comparison.
4. Simulate multiple runs to generate probabilistic assignments for both mechanisms.
5. Compute metrics: verify ex-ante FERI, measure sd-weak-envy-freeness, and check strategyproofness indicators.
6. Plot and compare the metrics between UPRE and Boston mechanism in the README.

**Ships as:** A Python package with implementations of UPRE and Boston mechanisms, scripts to run simulations, metric computations, and a README with comparative analysis and plots.

**Stretch goal:** Extend the comparison to include the eager Boston mechanism (EBM) from the beginner project for a three-way comparison.

### Advanced — Extend FERI Mechanisms to Handle Indifferences in Preferences
*Effort: 3-4 weeks*

You develop an extension of the eager Boston mechanism (EBM) or UPRE to handle agents with indifferences (ties) in their ordinal preferences, addressing a limitation noted in the paper. You implement the mechanism, test it on synthetic data with indifferences, and analyze how fairness and efficiency properties are affected.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of FERI mechanisms and the challenges in extending them beyond strict preferences, potentially contributing novel insights.

**Grounded in:** The paper notes as a limitation that it focuses on strict ordinal preferences and unit demands; future directions include extending FERI-based mechanisms to settings with indifferences in preferences.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic preference profiles with 10 agents and 10 items, including indifferences (ties) in rankings, generated programmatically.

**Build it:**

1. Review the paper's definitions and mechanisms for strict preferences and identify challenges with indifferences.
2. Design an extension of EBM or UPRE to handle indifferences, e.g., by adapting tie-breaking rules or probabilistic assignments.
3. Implement the extended mechanism in Python.
4. Generate synthetic preference data including indifferences.
5. Evaluate the extended mechanism for ex-post or ex-ante FERI, fairness, and strategyproofness properties, comparing with the strict preference baseline.
6. Document findings, limitations, and potential trade-offs in the README.

**Ships as:** A Python implementation of the extended FERI mechanism with indifferences, test scripts, evaluation metrics, and a detailed README discussing the extension and its impact on mechanism properties.

**Stretch goal:** Investigate approximate fairness or strategyproofness relaxations in the extended mechanism, inspired by the paper's impossibility results.
