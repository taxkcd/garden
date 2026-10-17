---
title: "726 · Optimal Bailouts in Diversified Financial Networks — Rakesh V. Vohra"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rakesh-v-vohra"
source_hash: "ca94ba12b690025584e30a872ade14ead11546dfaa6866295aa4022e7ccdcdd3"
sequence: 726
generator: "outreach-garden: managed"
---

# 726 · Optimal Bailouts in Diversified Financial Networks

## At a glance

- **Professor:** Rakesh V. Vohra
- **Institution:** University of Pennsylvania
- **Paper:** [Optimal Bailouts in Diversified Financial Networks](https://arxiv.org/pdf/2406.12818)
- **Authors:** Krishna Dasaratha, Santosh S. Venkatesh, Rakesh Vohra
- **Year:** 2024

## Paper overview

This paper studies how a regulator can optimally inject capital into failing firms within a complex financial network to prevent widespread defaults. The authors model financial networks using stochastic block models and their continuous analogs called graphons. They characterize equilibria of firm valuations and develop a bailout policy that targets firms based on their characteristics and network position to minimize total bailout costs while ensuring solvency.

### Why it matters

**Research problem:** Determining which firms to bailout and how much capital to inject in a diversified financial network to minimize total bailout cost while ensuring solvency of all firms, despite the problem being NP-hard in general.

**Why it matters:** Widespread defaults in financial networks cause substantial deadweight costs such as fire sales, contract terminations, and legal costs. Efficient bailout policies can mitigate systemic risk and reduce economic losses.

**Key contributions:**

- Show that equilibria of large SBM financial networks concentrate around equilibria of a deterministic block-regular clique network.
- Introduce the block equity graphon as a continuum limit of SBM networks to analyze equilibria and bailout policies.
- Characterize extremal equilibria in the graphon model via monotone cutoff equilibria with at most one jump per block.
- Define a spillover matrix quantifying marginal contagion effects of firm failures across blocks.
- Derive an explicit formula for the spillover matrix and establish a stability condition based on its spectral radius.

## About the professor

**Rakesh V. Vohra** — George A. Weiss and Lydia Bravo Weiss University Professor, Department of Economics & Department of Electrical and Systems Engineering, University of Pennsylvania.

### Research links

- [Faculty/profile page](https://economics.sas.upenn.edu/people/rakesh-vohra)
- [Identity evidence](https://sites.google.com/site/quaerereverum9)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Stochastic Block Models and Graphons
**The paper assumes:** stochastic block models, graphon theory, random graph limits, spectral graph theory
**Already in this field?** Skip this entirely if you already understand stochastic block models and graphon theory at an advanced undergraduate or graduate level.

This background covers stochastic block models (SBMs) and graphons, which are central to modeling and analyzing the financial networks in the paper. The rigorous course option offers a deep, structured university-level treatment of algebraic graph theory concepts foundational to understanding SBMs and graphons. The fast track provides a shorter, more accessible introduction to the same core ideas, suitable for quickly grasping the essentials needed to follow the paper's modeling framework and results.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Algebraic Graph Theory_Prof. Ranveer](https://www.youtube.com/playlist?list=PLyqSpQzTE6M_ciAYiv53KZyKncwXZw8TU) — NPTEL-NOC IITM · 45 videos · 19.9h across 45 episodes

**Watch only this:** Episodes 7 to 14, about 3.5 hours — covering introduction of eigenvalues and eigenvectors, adjacency matrices, spectral theorem, Rayleigh quotient, Perron-Frobenius theorem, and its consequences.

*Why it unblocks this paper:* This NPTEL course on Algebraic Graph Theory by Prof. Ranveer covers eigenvalues, spectral theorems, Perron-Frobenius theory, and spectral properties of graphs, which underpin the analysis of stochastic block models and graphons in the paper.

*If you want all of it:* 19.9 hours across 45 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [random graphs](https://www.youtube.com/playlist?list=PLFJlD-nIwemcz5vW3yfOczgpsagDU7peo) — Bharath Roy Choudhury · 22 videos · 20.9h across 22 episodes

**Watch only this:** Episodes 18 and 19, about 2 hours — focusing on sparse graphs using exchangeable random measures and an overview of graph limit theory.

*Why it unblocks this paper:* This playlist on random graphs includes lectures on graph limit theory and spectral geometry of random graphs, providing a concise introduction to graphons and stochastic block models relevant to the paper's modeling approach.

*If you want all of it:* 20.9 hours across 22 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Optimal Bailouts in Diversified Financial Networks," start by building a strong foundation in the modeling tools used: stochastic block models and graphon theory, which underpin the network structure and continuum limit analysis. Then, study Katz-Bonacich centrality to grasp the importance measure used in the bailout policy. Finally, focus on the paper's core concept of fixed point equilibria in financial networks and the authors' own talk if available, to directly connect theory with their novel contributions.

### Stochastic block models in networks *(prerequisite)*
Stochastic block models (SBMs) provide a probabilistic framework to model community structure in networks, which is fundamental to representing diversified financial networks in the paper. Understanding SBMs will clarify how the authors model inter-firm connections and block structures that influence contagion and bailout strategies.

*How the paper uses it:* The paper models financial networks as stochastic block models to capture diversified interconnections among firms.

▶ [Stochastic block models and probabilistic reductions - Emmanuel Abbe](https://www.youtube.com/watch?v=kMIxM8C0Ruo) — Institute for Advanced Study · 1:08:43 · 9y ago

### Graphon theory for large networks *(prerequisite)*
Graphon theory extends the analysis of large networks to a continuum limit, enabling tractable characterization of equilibria and bailout policies in infinite-size financial networks. This mathematical tool is key to the paper's approach of passing from finite SBM networks to their graphon limits.

*How the paper uses it:* The authors use block equity graphons as continuum limits of SBM networks to analyze equilibria and optimal bailouts.

▶ [Jennifer Tour Chayes: Graphons and graphexes as limits of sparse graphs - lecture 1](https://www.youtube.com/watch?v=rQz8kdnPwu8) — Centre International de Rencontres Mathématiques · 48:24 · 8y ago

### Katz-Bonacich centrality *(prerequisite)*
Katz-Bonacich centrality measures node importance by accounting for both direct and indirect connections in a network, which the paper leverages to prioritize firms for bailouts. Understanding this centrality concept is essential to grasping the index policy derived for optimal capital injections.

*How the paper uses it:* The optimal bailout policy is proportional to firms' block Katz-Bonacich centrality and characteristics.

▶ [NetSci 04-3 Katz Centrality](https://www.youtube.com/watch?v=9xX4Z5Sfk7g) — Andrew Beveridge · 11:14 · 6y ago

### Fixed point equilibria in financial networks
Fixed point equilibria characterize the stable valuations and solvency states of firms in the financial network under cross-holdings. This concept is central to understanding how the paper models firm valuations and the impact of bailouts on network stability.

*How the paper uses it:* The paper characterizes equilibria of firm valuations as fixed points of valuation functions in the financial network.

▶ [Fixed Points and Stability - Dynamical Systems | Lecture 3](https://www.youtube.com/watch?v=BlBbPYuQyz0) — Jason Bramburger · 38:56 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on optimal bailouts in diversified financial networks, start by learning about stochastic block models, which form the foundation for modeling the network structure of firms. Next, grasp graphon theory to appreciate how large networks can be analyzed in a continuum limit. Then, study Katz-Bonacich centrality to understand how node importance is measured and used in the bailout policy. Finally, explore fixed point equilibria to comprehend how firm valuations and solvency equilibria are characterized in the model.

### Stochastic block models in networks *(prerequisite)*
Stochastic block models (SBMs) are a way to represent networks with communities or groups, where nodes within the same group have similar connection patterns. Learning SBMs helps you understand how complex financial networks with different types of firms can be modeled probabilistically.

*How the paper uses it:* The paper models financial networks as stochastic block models to capture diversified firm connections and analyze bailout strategies.

▶ [Stochastic block models and probabilistic reductions - Emmanuel Abbe](https://www.youtube.com/watch?v=kMIxM8C0Ruo) — Institute for Advanced Study · 1:08:43 · 9y ago

### Graphon theory for large networks *(prerequisite)*
Graphon theory studies the limits of large dense networks by representing them as continuous objects, which simplifies analysis of very large systems. This helps in understanding how properties of huge financial networks can be approximated and analyzed using continuum methods.

*How the paper uses it:* The authors use the block equity graphon as a continuum limit of SBM networks to analyze equilibria and bailout policies.

▶ [Jennifer Tour Chayes: Graphons and graphexes as limits of sparse graphs - lecture 1](https://www.youtube.com/watch?v=rQz8kdnPwu8) — Centre International de Rencontres Mathématiques · 48:24 · 8y ago

### Katz-Bonacich centrality *(prerequisite)*
Katz-Bonacich centrality measures the importance of nodes in a network by accounting for both direct and indirect connections, weighting neighbors' influence recursively. Understanding this centrality helps explain how the paper prioritizes firms for bailout based on their network position.

*How the paper uses it:* The optimal bailout policy injects capital into firms proportional to their block Katz-Bonacich centrality and characteristics.

▶ [NetSci 04-3 Katz Centrality](https://www.youtube.com/watch?v=9xX4Z5Sfk7g) — Andrew Beveridge · 11:14 · 6y ago

### Fixed point equilibria in financial networks
Fixed point equilibria describe stable states where firm valuations and solvency conditions do not change, capturing the outcome of interdependent financial relationships. Learning about fixed points helps understand how the paper characterizes firm valuations and solvency equilibria in the network.

*How the paper uses it:* The paper characterizes equilibria of firm valuations using fixed-point equations to analyze solvency and bailout effects.

▶ [The beauty of Fixed Points](https://www.youtube.com/watch?v=bEZ6JLLjM3Y) — Fee Phi Fo Fum · 16:25 · 1y ago

## Already in your library

- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [What is a Bipartite Graph? | Graph Theory](https://www.youtube.com/watch?v=HqlUbSA9cEY) — also for: Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult (Zilin Jiang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper 'Optimal Bailouts in Diversified Financial Networks'. Starting with a beginner-level simulation of a small stochastic block model financial network and its bailout policy, you then implement the paper's core index bailout policy on a larger synthetic network for intermediate depth. Finally, the advanced project extends the model to incorporate debt linkages, addressing a key limitation and exploring new bailout policy adaptations.

### Beginner — Simulate Equilibrium and Bailout in a Small SBM Financial Network
*Effort: a weekend, ~8 hours*

You build a small stochastic block model (SBM) financial network simulator with equity cross-holdings among firms. Implement the fixed-point equilibrium valuation calculation and a simple bailout policy that injects capital into firms based on their block membership and endowment cutoff values. Visualize the equilibrium firm valuations and bailout intervals per block.

**Why it shows you understood the paper:** This project shows you understand how SBM networks model financial linkages, how equilibria concentrate around deterministic block-regular networks, and how bailout intervals form within blocks as monotone cutoff sets.

**Grounded in:** Show that equilibria of large SBM financial networks concentrate around equilibria of a deterministic block-regular clique network; characterize extremal equilibria via monotone cutoff equilibria with at most one jump per block.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated by sampling a small SBM with 2-3 blocks and firm endowments drawn from simple distributions.

**Build it:**

1. Implement a function to generate a small SBM adjacency matrix with specified block sizes and inter/intra-block connection probabilities.
2. Assign random endowments to firms within each block from a chosen distribution (e.g., uniform or normal).
3. Implement the fixed-point iteration to compute equilibrium firm valuations using the paper's equations for equity cross-holdings.
4. Identify cutoff values within each block that characterize extremal equilibria and determine bailout intervals.
5. Implement a simple bailout policy that injects capital into firms below the cutoff to ensure solvency.
6. Visualize the network structure, equilibrium valuations, and bailout intervals per block.

**Ships as:** A Jupyter notebook with code, plots of SBM network structure, equilibrium valuations, and bailout intervals, plus a README explaining the simulation and results.

**Stretch goal:** Add interactive widgets to vary SBM parameters and observe changes in equilibrium and bailout intervals.

### Intermediate — Implement and Evaluate the Optimal Index Bailout Policy on SBM Networks
*Effort: 1-3 weekends*

You reimplement the paper's core optimal bailout policy for SBM financial networks by computing the block Katz-Bonacich centrality and applying the index policy proportional to firm endowments and block centrality. You simulate larger SBM networks, compute equilibria, and compare the total bailout cost of the index policy against a naive baseline (e.g., uniform bailout). Report metrics such as total bailout cost and number of firms bailed out.

**Why it shows you understood the paper:** This project demonstrates your ability to operationalize the paper's main theoretical contribution—the optimal index bailout policy—and verify its efficiency compared to simple baselines on synthetic SBM data.

**Grounded in:** Derive an optimal bailout policy as an index policy proportional to block Katz-Bonacich centrality and firm characteristics, minimizing total bailout cost; prove convergence of equilibria and bailout policies from finite SBM networks to the graphon limit.

**Tech stack:** Python 3.11, NumPy, SciPy, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic SBM networks with multiple blocks and firm endowments sampled from distributions; no public dataset available, synthetic generation described in the paper.

**Build it:**

1. Implement SBM network generation with configurable block sizes and connection probabilities.
2. Compute block Katz-Bonacich centrality using NetworkX or custom matrix operations.
3. Implement the fixed-point equilibrium valuation solver for the SBM network.
4. Implement the optimal index bailout policy based on firm endowments and block centrality.
5. Implement a naive baseline bailout policy (e.g., equal bailout to all firms below cutoff).
6. Simulate multiple SBM networks, apply both policies, and compare total bailout costs and bailout coverage.
7. Visualize results with plots and summarize findings in a report.

**Ships as:** A Jupyter notebook or Python scripts with code, comparative plots of bailout costs, and a README documenting the implementation and evaluation.

**Stretch goal:** Incorporate sensitivity analysis on network parameters and endowment distributions to study robustness of the index policy.

### Advanced — Extend the Bailout Model to Incorporate Debt Linkages and Adapt Bailout Policies
*Effort: a few weeks*

You extend the paper's equity cross-holding financial network model to include debt linkages between firms, representing a more realistic financial network. Adapt the equilibrium valuation computation and bailout policy derivation to account for debt contracts. Analyze how the spillover matrix and stability conditions change, and propose a modified bailout policy. Evaluate on synthetic networks and compare to the original equity-only model.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by modeling debt linkages, demonstrating deep comprehension of the paper's framework and the challenges in extending it to richer financial instruments.

**Grounded in:** Limitation: The model assumes equity cross-holdings and does not explicitly incorporate debt linkages or other financial instruments; Future direction: Extending the model to incorporate debt linkages and other financial instruments beyond equity cross-holdings.

**Tech stack:** Python 3.11, NumPy, SciPy, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic financial networks extended to include debt linkages, generated by augmenting SBM adjacency matrices with debt edges and associated parameters.

**Build it:**

1. Review the paper's equilibrium valuation and bailout policy framework for equity cross-holdings.
2. Research modeling approaches for debt linkages in financial networks (e.g., debt contracts as weighted directed edges).
3. Extend the SBM network generator to include debt linkages alongside equity cross-holdings.
4. Adapt the fixed-point equilibrium solver to incorporate debt effects on firm valuations.
5. Derive or approximate a modified spillover matrix and stability condition accounting for debt.
6. Propose and implement a modified bailout policy that accounts for debt linkages.
7. Simulate and compare the extended model's equilibria and bailout costs against the original model on synthetic networks.
8. Document challenges, assumptions, and insights in a detailed README.

**Ships as:** A comprehensive Jupyter notebook or Python package implementing the extended model, with comparative analyses, visualizations, and a detailed report explaining the extension and results.

**Stretch goal:** Incorporate moral hazard or asymmetric information effects into the extended bailout model as a further research exploration.
