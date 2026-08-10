---
title: "117 · Simple Mechanisms for Agents with Non-linear Utilities — Jason D. Hartline"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jason-d-hartline"
source_hash: "f6517a36e4313ccbb618d4ac307eb308d3997cfe4de51a0b02a49d5654711571"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Mechanism Design and Auction Theory
**The paper assumes:** mechanism design, auction theory, incentive compatibility, individual rationality, pricing mechanisms, approximation algorithms in economics
**Already in this field?** Skip this entirely if you already have a solid understanding of mechanism design and auction theory, including incentive compatibility and pricing-based mechanisms.

To understand the paper on simple mechanisms for agents with non-linear utilities, a solid grasp of mechanism design and auction theory is essential, especially concepts like incentive compatibility, individual rationality, and pricing-based mechanisms such as sequential posted pricing. The rigorous course option offers a deep, structured dive into advanced mechanism design principles, while the fast track provides a focused, shorter playlist that covers core auction market theory concepts relevant to the paper. Choose the rigorous course for a comprehensive theoretical foundation and the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Advanced Mechanism Design (Stanford CS364B, Winter 2014)](https://www.youtube.com/playlist?list=PLEGCF-WLh2RI77PL4gwLld_OU9Zh3TCX9) — Tim Roughgarden Lectures · 21 videos · 25.1h across 21 episodes

**Watch only this:** Lectures 1-6 (Frontiers in Mechanism Design Lectures 1 to 6), about 7 hours — covering incentive compatibility, unit-demand bidders, clinching auctions, and gross substitutes, which build the foundation for understanding pricing-based mechanisms and approximation in auctions.

*Why it unblocks this paper:* This Stanford course by Tim Roughgarden covers advanced mechanism design topics including incentive compatibility, Bayesian incentive-compatibility, and revenue-maximizing auctions, directly underpinning the theoretical framework and approximation guarantees discussed in the paper.

*If you want all of it:* 25.1 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Auction Market Theory](https://www.youtube.com/playlist?list=PL1vQ1_bH1I4Cno0YOeVjbuXl04PgFrWnz) — Hamilton · 14 videos · 9.1h across the first 9 episodes

**Watch only this:** First 3 episodes (Auction Market Theory Basics, Auction Market Theory - Volume Profile - Rob Mitchell, Volume Profile And Order Flow Analysis Understanding The Market Through Market Generated Information), about 3 hours — sufficient to grasp core auction theory concepts and market structure relevant to mechanism design.

*Why it unblocks this paper:* This playlist on Auction Market Theory by Hamilton provides a concise and clear introduction to auction concepts, volume profile, and order flow analysis, which helps build intuition about auction mechanisms and market behavior relevant to the paper's focus on simple pricing mechanisms.

*If you want all of it:* 9.1 hours across the first 9 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's ζ-resemblance framework and its implications for simple auction mechanisms with non-linear utilities. Starting from a basic numerical reproduction of the ζ-resemblance concept, you advance to implementing the reduction framework for private-budgeted agents and comparing approximation ratios. Finally, you tackle an open problem from the paper by exploring risk-averse agents' revenue maximization and the challenges in establishing ζ-resemblance, extending the framework with new experiments.

### Beginner — Numerical Illustration of ζ-Resemblance for Private-Budgeted Agents
*Effort: a weekend, ~8 hours*

You build a small Python notebook that numerically computes and plots the ironed price-posting payoff curve and the optimal payoff curve for a single private-budgeted agent with uniform valuation and budget distributions. You then calculate the ζ-resemblance ratio between these curves as defined in the paper and reproduce the approximate 1.02 resemblance result shown in the paper's numerical evaluation.

**Why it shows you understood the paper:** This project shows you understand the core definition of ζ-resemblance and how it quantifies the similarity between non-linear and linear agents' payoff curves, a foundational concept in the paper.

**Grounded in:** Definition of ζ-resemblance to quantify how non-linear agents approximate linear agents in terms of payoff curves; Numerical results show price-posting revenue curve closely approximates optimal revenue curve for uniform private-budgeted agents.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic data generated for uniform distributions of valuations and budgets as described in the paper's numerical evaluation section.

**Build it:**

1. Implement functions to generate uniform random samples for valuations and budgets.
2. Compute the optimal payoff curve R(q) for the private-budgeted agent using the definitions in the paper.
3. Compute the ironed price-posting payoff curve P̄(q) for the same agent.
4. Plot both curves on the same graph for q in [0,1].
5. Calculate the ζ-resemblance ratio by finding the minimal ζ such that P̄(q) ≥ 1/ζ * R(q†) for all q.
6. Document the results and compare with the paper's reported 1.02 resemblance.

**Ships as:** A Jupyter notebook with code, plots of payoff curves, ζ-resemblance calculations, and a README explaining the methodology and results.

**Stretch goal:** Extend the notebook to handle other distributions (e.g., exponential) and observe how ζ changes.

### Intermediate — Implementing the ζ-Resemblance Reduction Framework for Sequential Posted Pricing
*Effort: 2 weekends, ~20 hours*

You implement from scratch the reduction framework that transforms a sequential posted pricing mechanism designed for linear agents into one for private-budgeted agents, using the ζ-resemblance concept. You simulate multiple i.i.d. private-budgeted agents with uniform distributions, run both oblivious posted pricing and marginal payoff mechanisms, and compute approximation ratios compared to optimal revenue.

**Why it shows you understood the paper:** This project demonstrates you can operationalize the paper's core reduction framework and verify its theoretical approximation guarantees experimentally, showing grasp of both mechanism design and approximation analysis.

**Grounded in:** The reduction framework applies to deterministic, DSIC, IIR, pricing-based mechanisms; Agents with independent private budgets and regular valuation distributions are 3-resemblant; Numerical results show posted pricing mechanisms achieve approximation ratios close to optimal for multiple agents.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib

**Data:** Synthetic data simulating multiple i.i.d. private-budgeted agents with uniform valuations and budgets, as per the paper's numerical evaluation.

**Build it:**

1. Reimplement the ζ-resemblance definition and verify it for single agents.
2. Implement sequential posted pricing and marginal payoff mechanisms for linear agents.
3. Apply the reduction framework to adapt these mechanisms for private-budgeted agents.
4. Simulate multiple i.i.d. agents and run the mechanisms to collect revenue data.
5. Calculate approximation ratios compared to an estimated optimal revenue baseline.
6. Plot and analyze how approximation ratios scale with the number of agents.

**Ships as:** A repository with Python scripts/notebooks implementing the mechanisms, simulation code, plots of approximation ratios, and a README describing the implementation and results.

**Stretch goal:** Add support for other canonical non-linear utility models like endogenous valuations and compare their ζ-resemblance.

### Advanced — Exploring ζ-Resemblance and Approximation Guarantees for Risk-Averse Agents' Revenue Maximization
*Effort: 3+ weeks*

You extend the reduction framework to investigate the open problem of revenue maximization for risk-averse agents. You model risk-averse utility functions (e.g., CARA or CRRA), attempt to characterize or numerically estimate ζ-resemblance for these agents, and test whether simple posted pricing mechanisms can achieve constant-factor approximations. You implement simulations comparing risk-averse agents to linear agents and analyze the challenges in establishing ζ-resemblance.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep engagement with the theory and practical challenges of extending the framework beyond its current scope.

**Grounded in:** Risk-averse agents' revenue maximization approximation guarantees remain an open problem; Investigate conditions ensuring constant ζ-resemblance for risk-averse agents in revenue maximization.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib

**Data:** Synthetic data simulating agents with risk-averse utilities and valuation distributions; no real dataset required.

**Build it:**

1. Implement common risk-averse utility functions (e.g., CARA, CRRA).
2. Simulate agents' payoff curves under these utilities and compute their optimal payoff curves.
3. Attempt to numerically estimate ζ-resemblance ratios between risk-averse and linear agents.
4. Implement posted pricing mechanisms and evaluate their revenue performance for risk-averse agents.
5. Analyze results to identify technical challenges and conditions affecting ζ-resemblance.
6. Document findings, including limitations and potential adaptations to the reduction framework.

**Ships as:** A comprehensive repository with code, simulations, plots, and a detailed report discussing the feasibility of extending ζ-resemblance and approximation guarantees to risk-averse agents.

**Stretch goal:** Propose and test modified mechanisms or alternative welfare definitions to improve approximation for risk-averse agents.
