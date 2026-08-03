---
title: "117 · Simple Mechanisms for Agents with Non-linear Utilities — Jason D. Hartline"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jason-d-hartline"
source_hash: "5ce5354bd93163a945792f42776c3a4c243e51adcbddf8f2f9d41beef10d5a66"
sequence: 117
generator: "outreach-garden: managed"
---

# 117 · Simple Mechanisms for Agents with Non-linear Utilities

## At a glance

- **Professor:** Jason D. Hartline
- **Institution:** Northwestern University
- **Paper:** [Simple Mechanisms for Agents with Non-linear Utilities](http://arxiv.org/pdf/2003.00545)
- **Authors:** Yiding Feng, Jason D. Hartline, Yingkai Li
- **Year:** 2022

## Paper overview

This paper studies how simple auction mechanisms that work well for agents with linear utilities can be extended to agents with more complex, non-linear utilities, such as those with budget constraints, risk aversion, or endogenous valuations. The authors develop a framework that quantifies how closely non-linear agents resemble linear agents and show that simple pricing mechanisms remain approximately optimal for these non-linear agents under certain conditions.

### Why it matters

**Research problem:** Optimal auction mechanisms for agents with non-linear utilities are complex and often lack closed-form characterizations, making them difficult to analyze and implement. The problem is to understand whether simple mechanisms known to work well for linear utility agents can be generalized to non-linear utility agents and under what conditions.

**Why it matters:** Many real-world economic and AI systems involve agents with non-linear preferences, such as budget constraints or risk aversion. Designing simple, approximately optimal mechanisms for such agents can improve outcomes in auctions and markets, making the theory more applicable and practical.

**Key contributions:**

- Definition of ζ-resemblance to quantify how non-linear agents approximate linear agents in terms of payoff curves.
- A reduction framework that extends approximation guarantees of pricing-based mechanisms from linear to non-linear agents.
- Characterization of ζ-resemblance bounds for canonical non-linear utility models: private budgets, risk aversion, and endogenous valuations.
- Proof that simple mechanisms like sequential posted pricing and marginal revenue maximization are approximately optimal for broad classes of non-linear agents.
- Implementation of a general reduction framework for deterministic, DSIC, IIR, pricing-based mechanisms.

## About the professor

**Jason D. Hartline** — Professor, Computer Science, Northwestern University.

Research interests: design and analysis methodologies from computer science to understand and improve outcomes of economic, legal, and AI systems; auction theory; mechanism design

### Research links

- [Faculty/profile page](https://sites.northwestern.edu/hartline)
- [Resolved homepage](https://jasonhartline.com)
- [Lab website](https://onlinemarketslab.northwestern.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Simple Mechanisms for Agents with Non-linear Utilities," start with foundational concepts in mechanism design, including von Neumann-Morgenstern expected utility theory and approximation algorithms in mechanism design, which underpin the paper's theoretical framework. Then, study the key simple mechanisms such as sequential posted pricing that the paper extends to non-linear agents. Finally, focus on the paper's core contribution: the ζ-resemblance reduction framework and the authors' own presentations explaining their novel approach and results.

### Von Neumann-Morgenstern expected utility theory *(prerequisite)*
This theory provides the utility representation assumption essential for the paper's reduction framework. Understanding expected utility theory is critical to grasp how the paper models agent preferences and justifies the ζ-resemblance property.

*How the paper uses it:* The reduction framework requires agents to satisfy the von Neumann-Morgenstern expected utility representation.

▶ [Von Neumann Morgenstern Expected Utility Theory | Utility Theory Complete Revision](https://www.youtube.com/watch?v=hNP8ldudPio) — EduVichar Hub · 4 months ago

### Approximation algorithms in mechanism design *(prerequisite)*
Approximation algorithms form the backbone of the paper's approach to extending guarantees from linear to non-linear agents. This topic covers how simple mechanisms can achieve near-optimal performance when exact solutions are intractable.

*How the paper uses it:* The framework relies on approximation guarantees for simple mechanisms to extend results to non-linear agents.

▶ [Jason Hartline - Multi-dimensional Mechanism Design and Approximation. Part I](https://www.youtube.com/watch?v=6yGkWZOwJ_M) — Israel Institute for Advanced Studies · 9 years ago

### Sequential posted pricing mechanisms *(prerequisite)*
Sequential posted pricing is a key simple mechanism analyzed and extended in the paper. Understanding its properties and why it is effective for linear agents is necessary before appreciating its extension to non-linear utilities.

*How the paper uses it:* The paper proves that sequential posted pricing mechanisms remain approximately optimal for ζ-resemblant non-linear agents.

▶ [Mechanism Design Lectures: Bayesian Approximation Part 2: Sequential Pricing and Correlation Gap](https://www.youtube.com/watch?v=gWIpEDnDxj0) — Jason Hartline · 5 years ago

### ζ-resemblance reduction framework
This is the central method introduced by the paper to quantify how closely non-linear agents resemble linear agents and to transfer approximation guarantees. Understanding this framework is crucial to grasp the paper's main theoretical contribution.

*How the paper uses it:* The paper's main contribution is the ζ-resemblance framework that extends approximation guarantees from linear to non-linear agents.

▶ [Lecture 5.4: Implementability and monotonicity of allocation rules, part 1 (Mechanism Design)](https://www.youtube.com/watch?v=1KI3deWJisU) — economification · 5 years ago

### Paper authors talk *(the paper's own talk)*
Direct presentations by the authors provide the most precise and authoritative exposition of their framework, results, and implications. These talks offer insights into the motivation, technical challenges, and applications of their work.

*How the paper uses it:* These talks are the authors' own presentations of their new framework and results on simple mechanisms for non-linear agents.

▶ [Simple Mechanisms for Non-linear Agents (July, 2021)](https://www.youtube.com/watch?v=w2HJw6Ro6DI) — Jason Hartline · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's approach to designing simple auction mechanisms for agents with non-linear utilities. We start with the basics of expected utility theory to grasp how agents evaluate outcomes under uncertainty, then cover approximation algorithms in mechanism design to understand guarantees for simple mechanisms. Next, we explore sequential posted pricing mechanisms, a key simple mechanism extended in the paper. Finally, we focus on the paper's core ζ-resemblance reduction framework that quantifies how approximation guarantees transfer from linear to non-linear agents.

### Von Neumann-Morgenstern expected utility theory *(prerequisite)*
Expected utility theory models how rational agents make decisions under uncertainty by assigning utilities to outcomes and choosing actions that maximize expected utility. This framework underlies the paper's assumptions about agent preferences and is essential for understanding how non-linear utilities are represented.

*How the paper uses it:* The reduction framework requires agents to satisfy the von Neumann-Morgenstern expected utility representation to extend approximation guarantees.

▶ [NEUMANN- MORGENSTERN UTILITY CONCEPT 1 :- Easy to understand](https://www.youtube.com/watch?v=rnWyxSiiCEk) — Eco Fun · 13:55 · 9 years ago

### Approximation algorithms in mechanism design *(prerequisite)*
Approximation algorithms provide near-optimal solutions when exact solutions are computationally hard or unknown. In mechanism design, they help design simple mechanisms that achieve provable performance guarantees compared to optimal but complex mechanisms.

*How the paper uses it:* The paper extends approximation guarantees of pricing-based mechanisms from linear to non-linear agents using a multiplicative factor ζ.

▶ [Approximation in Mechanism Design](https://www.youtube.com/watch?v=mviTfLxCct0) — Microsoft Research · 9 years ago

### Sequential posted pricing mechanisms *(prerequisite)*
Sequential posted pricing is a simple auction mechanism where prices are posted to agents one by one, and each agent decides whether to buy at the posted price. This mechanism is easy to implement and analyze, making it a natural candidate for extension to non-linear utility agents.

*How the paper uses it:* The paper proves that sequential posted pricing mechanisms remain approximately optimal for non-linear agents that are ζ-resemblant.

▶ [Mechanism Design Lectures: Bayesian Approximation Part 2: Sequential Pricing and Correlation Gap](https://www.youtube.com/watch?v=gWIpEDnDxj0) — Jason Hartline · 5 years ago

## Already in your library

- [Lecture 22: Auctions, Part 1](https://www.youtube.com/watch?v=-XGDKoWi0Zg) — also for: Efficiently Restructuring Sovereign Debt via Arctic Auctions with Convex Costs (Vijay V. Vazirani)
