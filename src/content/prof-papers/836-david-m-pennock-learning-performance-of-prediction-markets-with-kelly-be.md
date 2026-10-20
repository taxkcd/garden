---
title: "836 · Learning Performance of Prediction Markets with Kelly Bettors — David M. Pennock"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-m-pennock"
source_hash: "7c9832e644d6c2be09f4f03d5dc8d040d2257d3870d759164456e722c05d7ba9"
sequence: 836
generator: "outreach-garden: managed"
---

# 836 · Learning Performance of Prediction Markets with Kelly Bettors

## At a glance

- **Professor:** David M. Pennock
- **Institution:** Rutgers University
- **Paper:** [Learning Performance of Prediction Markets with Kelly Bettors](https://arxiv.org/pdf/1201.6655)
- **Authors:** Alina Beygelzimer, John Langford, David Pennock
- **Year:** 2012

## Paper overview

This paper studies how prediction markets aggregate individual beliefs into a market prediction and how well this market prediction performs compared to the best individual participant. Assuming traders use the Kelly betting strategy, which maximizes long-term wealth growth, the authors show that the market price is a wealth-weighted average of participants' beliefs and learns optimally over time. They also analyze a practical variant called fractional Kelly betting, providing a new theoretical justification for it and showing how it affects market dynamics.

### Why it matters

**Research problem:** How does the prediction market price compare to the best individual trader's belief, and how does the market learn and adapt over time when traders use Kelly betting strategies?

**Why it matters:** Prediction markets are used to aggregate diverse opinions to forecast uncertain events. Understanding their learning performance and how market prices relate to individual beliefs is crucial for designing efficient markets and improving prediction accuracy.

**Key contributions:**

- Proved that the market prediction is a wealth-weighted average of individual beliefs under Kelly betting.
- Showed that the market learns at an optimal rate with low worst-case log regret relative to the best participant.
- Demonstrated that wealth redistribution among agents follows Bayes' Law, leading the market price to converge to the true objective frequency.
- Provided a new theoretical justification for fractional Kelly betting as a confidence-weighted belief update.
- Proposed a method for agents to learn their optimal Kelly fraction dynamically.

## About the professor

**David M. Pennock** — Professor, Computer Science, Rutgers University.

Research interests: economics and computation; artificial intelligence

### Research links

- [Faculty/profile page](https://www.cs.rutgers.edu/people/professors/details/david-pennock)
- [Professor website](http://dpennock.com/)
- [Resolved homepage](https://docs.google.com/viewerng/thumb?ds=AON1mFxtMNA-V1FgNgsZuLv8seKzuGrsmephUkt9Mq-MGGt3BJtnfWBCMhqR23mR8aVERfPqp39tXBQnGOTsTkJXFDEuZKwkj8cOnZMdpxY3PYXd7FVVfi2ABczdudhjGxEOJ9cVzu-G4Qc4iFYKNjX4OiAsS2idx2_ODbir1Nkg7sKHKIT6jvB1B4jF3jOjzbhyl_eGNnlLPb6WdG_ujlczRmTYIlVMoiAjb74tuG-iMo0khA8g4S9GKOVYJe3XM8c_J7rYl-aq&ck=lantern&dsmi=unknown&authuser&w=800&webp=true&p=proj)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian Probability and Inference
**The paper assumes:** Bayesian probability theory, Bayesian inference, and Bayesian updating
**Already in this field?** Skip this entirely if you already understand Bayesian probability concepts and how Bayesian updating works in probabilistic models.

This background focuses on Bayesian Probability and Inference, which is essential for understanding how prediction markets with Kelly bettors update beliefs and redistribute wealth according to Bayes' Law. The rigorous course option provides a deep, structured university-level treatment of Bayesian statistics, while the fast track offers a concise, intuition-driven introduction to Bayesian inference suitable for quickly grasping the core concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [S22 MATH 347 Bayesian Statistics](https://www.youtube.com/playlist?list=PL_lWxa4iVNt2GBPOVZMVKD4jYl9Q7hs2K) — Jingchen (Monika) Hu · 73 videos · 20.1h across the first 60 episodes

**Watch only this:** Episodes 1-10, about 3.3 hours — covering course orientation, interpretation of probability and Bayes' rule, Bayesian inference basics, probability review, and Bayesian inference for a proportion including Beta distribution and updating the Beta prior.

*Why it unblocks this paper:* This is a comprehensive university course on Bayesian Statistics by Jingchen (Monika) Hu that covers Bayesian inference for proportions, Beta distributions, and Bayesian updating—directly relevant to understanding the paper's theoretical foundations on wealth redistribution and market price convergence.

*If you want all of it:* About 20.1 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bayesian Inference from Scratch](https://www.youtube.com/playlist?list=PLJ8nMoP1F6ZbcG4hiF5jd-HFNQm-7gBEc) — DeepLink · 6 videos · 0.3h across 6 episodes

**Watch only this:** All 6 episodes, about 0.3 hours — covering discrete random variables, conditional probability, likelihood, and real-world Bayesian inference examples.

*Why it unblocks this paper:* This short playlist by DeepLink offers bite-sized, clear, and visual explanations of Bayesian inference fundamentals, including Bayes' theorem and likelihood, which quickly build intuition for the Bayesian updating principles central to the paper.

*If you want all of it:* About 0.3 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Learning Performance of Prediction Markets with Kelly Bettors,' start by building a strong foundation in the theoretical underpinnings of prediction markets, Bayesian updating with Beta distributions, and online learning with regret analysis. These prerequisites provide the necessary background on how markets aggregate information, how beliefs update optimally, and how learning performance is measured. Finally, focus on the core concept of the Kelly betting strategy as it is central to the paper's model and results, and conclude with the authors' own talk or the most relevant advanced presentation on their work.

### Prediction markets theory *(prerequisite)*
This section covers the foundational theory of prediction markets, explaining how markets aggregate diverse beliefs into prices that can forecast uncertain events. Understanding this is critical to grasp how the paper models market price formation and belief aggregation.

*How the paper uses it:* The paper analyzes how prediction markets aggregate individual beliefs into a market prediction and how this prediction performs over time.

▶ ["A New Understanding of Prediction Markets Via No-Regret Learning" (CRCS Lunch Seminar)](https://www.youtube.com/watch?v=xIKdIWF6PMM) — Harvard's CRCS · 1:02:20 · 13y ago

### Bayesian updating and Beta distribution *(prerequisite)*
Bayesian updating and the Beta distribution are key mathematical tools used in the paper to describe how wealth redistribution among agents follows Bayes' Law and how market prices converge to the true probability. This section provides the statistical foundation for understanding these dynamics.

*How the paper uses it:* The paper shows that wealth redistribution among Kelly bettors follows Bayes’ Law, leading to market price convergence as if updating a Beta distribution.

▶ [The Beta distribution in 12 minutes!](https://www.youtube.com/watch?v=juF3r12nM5A) — Luis Serrano Academy · 13:31 · 5y ago

### Online learning and regret analysis *(prerequisite)*
Online learning and regret analysis provide the theoretical framework for evaluating how well the market learns over time relative to the best participant. This section introduces concepts of regret minimization and optimal learning rates that are central to the paper's performance guarantees.

*How the paper uses it:* The paper proves that the market learns at an optimal rate with low worst-case log regret relative to the best participant.

▶ [Sham Kakade (University of Washington): "A No Regret Algorithm for Robust Online Adaptive Control"](https://www.youtube.com/watch?v=115VA_tSKwg) — MIT Institute for Data, Systems, and Society · 34:32 · 7y ago

### Kelly betting strategy
The Kelly betting strategy is the core method used by agents in the paper to optimize their wealth growth. Understanding the Kelly criterion, its mathematical formulation, and its implications for betting and investment is essential to grasp the paper's model and results.

*How the paper uses it:* The paper models agents who bet according to the Kelly criterion, maximizing expected logarithmic wealth growth.

▶ [Mathematics of Maximizing Profit in Gambling/Investing | Kelly Criterion](https://www.youtube.com/watch?v=-X9u9oYvGYk) — EpsilonDelta · 34:26 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand how prediction markets aggregate beliefs and learn over time, focusing on the Kelly betting strategy used by agents in the paper. We start with the basics of prediction markets and Bayesian updating, then cover the Kelly criterion for optimal betting, and finally discuss the paper's core insights on market learning and regret analysis.

### Prediction markets theory *(prerequisite)*
Prediction markets are platforms where participants trade contracts based on uncertain future events, and prices reflect aggregated beliefs about event probabilities. Understanding how these markets work and aggregate information is essential to grasp how market prices relate to individual beliefs.

*How the paper uses it:* The paper studies how prediction markets aggregate individual beliefs into a market prediction and how this prediction performs over time.

▶ [Prediction Markets](https://www.youtube.com/watch?v=jYLgRo8upO0) — Marginal Revolution University · 9:39 · 11y ago

### Bayesian updating and Beta distribution *(prerequisite)*
Bayesian updating is a method for revising probabilities as new evidence arrives, often modeled using the Beta distribution for binary events. This concept explains how beliefs and wealth redistribute in the market, leading to convergence of market prices to true probabilities.

*How the paper uses it:* The paper shows that wealth redistribution among agents follows Bayes’ Law, with market prices converging as if updating a Beta distribution.

▶ [The Beta distribution in 12 minutes!](https://www.youtube.com/watch?v=juF3r12nM5A) — Luis Serrano Academy · 13:31 · 5y ago

### Kelly betting strategy
The Kelly criterion is a formula that determines the optimal fraction of wealth to bet to maximize long-term growth. Understanding this strategy is key to seeing how agents in the paper optimize their bets and influence market prices.

*How the paper uses it:* The paper assumes traders use the Kelly betting strategy to maximize expected logarithmic wealth growth.

▶ [The Kelly Criterion: A Proven Betting Strategy Revealed](https://www.youtube.com/watch?v=RUNSvr_MRDs) — Luke Fox · 4:53 · 3y ago

### Online learning and regret analysis
Online learning studies how algorithms adapt to data arriving sequentially, with regret analysis measuring how well they perform compared to the best fixed strategy. This framework helps understand the market's learning performance and optimality guarantees in the paper.

*How the paper uses it:* The paper analyzes the market's learning dynamics and proves low worst-case log regret relative to the best participant.

▶ [Seminar 13: Regret analysis for sequential decision making and online , part 1learning](https://www.youtube.com/watch?v=0VF6WeWMVLA) — MLRG KTH · 53:48 · 8y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from experts or related talks can provide intuition and context about prediction markets and their practical applications, complementing theoretical understanding.

*How the paper uses it:* While not directly from the authors, this video offers a clear overview of prediction markets in practice, helping ground the paper's theory.

▶ [Prediction Markets, Explained](https://www.youtube.com/watch?v=OM-v99ilk2k) — Tommy Anytime · 11:27 · 3mo ago

## Already in your library

- [Bayes theorem, the geometry of changing beliefs](https://www.youtube.com/watch?v=HZGCoVF3YvM) — also for: Credo: Declarative Control of LLM Pipelines via Beliefs and Policies (Andrew Crotty)
- [Multi-Armed Bandit : Data Science Concepts](https://www.youtube.com/watch?v=e3L4VocZnnQ) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Learning Performance of Prediction Markets with Kelly Bettors." The beginner project recreates a simple simulation of Kelly betting market dynamics to visualize wealth-weighted belief aggregation. The intermediate project implements the core Kelly betting market model from scratch and compares its learning performance against a baseline. The advanced project extends the model by incorporating heterogeneous agent behaviors beyond Kelly betting, addressing a key limitation noted in the paper.

### Beginner — Simulate Wealth-Weighted Belief Aggregation in a Kelly Betting Market
*Effort: a weekend, ~8 hours*

You build a small simulation of a binary prediction market with a few agents holding fixed beliefs who bet according to the Kelly criterion. The simulation tracks how agents' wealth evolves and how the market price updates as a wealth-weighted average of beliefs over multiple rounds.

**Why it shows you understood the paper:** This project shows you understand the core mechanism that the market price is a wealth-weighted average of individual beliefs under Kelly betting, and how wealth redistribution leads to market learning.

**Grounded in:** Proved that the market prediction is a wealth-weighted average of individual beliefs under Kelly betting.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic data generated by simulating agents with fixed initial beliefs and wealth; no external dataset required.

**Build it:**

1. Implement a simple agent class with a fixed belief and initial wealth.
2. Implement Kelly betting logic for agents to bet on binary outcomes each round.
3. Simulate multiple rounds with random binary outcomes drawn from a fixed true probability.
4. Update agents' wealth based on betting outcomes and compute the market price as the wealth-weighted average of beliefs.
5. Plot the evolution of market price and wealth distribution over time.

**Ships as:** A Jupyter notebook showing simulation code, plots of market price convergence, and wealth concentration among agents.

**Stretch goal:** Add fractional Kelly betting agents and compare how market price dynamics differ.

### Intermediate — Implement and Evaluate Kelly Betting Market Learning Performance
*Effort: 2 weekends, ~20 hours*

You implement the full Kelly betting market model for binary events from the paper, simulating multiple agents with diverse beliefs and initial wealth. You measure the market's log loss regret relative to the best agent over a sequence of outcomes and compare it to a baseline such as simple averaging of beliefs.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core theoretical model and verify its key result that the market learns optimally with low regret compared to the best participant.

**Grounded in:** Showed that the market learns at an optimal rate with low worst-case log regret relative to the best participant.

**Tech stack:** Python 3.11, NumPy, matplotlib, Jupyter Notebook

**Data:** Synthetic binary outcome sequences generated with a fixed true probability; agent beliefs sampled from distributions around the true probability.

**Build it:**

1. Implement multiple agents with initial wealth and beliefs sampled from a distribution around the true probability.
2. Implement Kelly betting logic for agents to place bets each round based on their beliefs and current market price.
3. Simulate a sequence of binary outcomes and update agents' wealth accordingly.
4. Calculate the market price as the wealth-weighted average of agent beliefs each round.
5. Compute and plot the cumulative log loss regret of the market prediction versus the best agent and versus a baseline averaging method.
6. Analyze and report how wealth concentrates among agents with beliefs close to the true probability.

**Ships as:** A Jupyter notebook with code, plots of regret curves, wealth concentration, and a short report comparing market learning performance to baseline.

**Stretch goal:** Incorporate fractional Kelly betting and show how it affects regret and market price dynamics.

### Advanced — Extend Kelly Betting Market with Heterogeneous Agent Behaviors
*Effort: 3+ weeks*

You extend the Kelly betting market simulation to include agents with heterogeneous utility functions or betting strategies beyond Kelly and fractional Kelly. You analyze how this heterogeneity affects market price convergence, wealth redistribution, and regret, addressing a key limitation of the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by exploring market dynamics when agents deviate from Kelly betting, demonstrating deep comprehension and ability to innovate on the model.

**Grounded in:** The model assumes all agents optimize according to Kelly or fractional Kelly criteria, which may not hold in real markets. Future direction: Explore markets with heterogeneous agent behaviors, including non-Kelly bettors.

**Tech stack:** Python 3.11, NumPy, matplotlib, Jupyter Notebook

**Data:** Synthetic binary outcome sequences and agent beliefs as in the intermediate project.

**Build it:**

1. Implement additional agent types with alternative betting strategies or utility functions (e.g., risk-averse, risk-neutral, or heuristic bettors).
2. Integrate these heterogeneous agents into the existing Kelly betting market simulation framework.
3. Simulate market dynamics over multiple rounds with mixed agent populations.
4. Measure market price convergence, wealth distribution, and regret compared to the best agent.
5. Analyze how heterogeneity impacts market learning performance and compare to the pure Kelly betting scenario.
6. Document findings and discuss implications for real-world prediction markets.

**Ships as:** A comprehensive Jupyter notebook or Python package with simulation code, analysis plots, and a detailed report discussing the impact of heterogeneous agent behaviors on market learning.

**Stretch goal:** Develop an adaptive algorithm for agents to learn their optimal Kelly fraction dynamically within the heterogeneous market.
