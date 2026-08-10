---
title: "138 · Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity — Vishesh Jain"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vishesh-jain"
source_hash: "7639c1827483a69f9d374dd4963d28432f4adacd2ac616ec8f371e915eccf962"
sequence: 138
generator: "outreach-garden: managed"
---

# 138 · Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity

## At a glance

- **Professor:** Vishesh Jain
- **Institution:** University of Illinois at Chicago
- **Paper:** [Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity](https://arxiv.org/pdf/2604.11938)
- **Authors:** Vishesh Jain, Clayton Mizgerd, Eric Vigoda
- **Year:** 2026

## Paper overview

This paper addresses the problem of efficiently sampling proper k-colorings of graphs with maximum degree ∆, particularly when the number of colors k is close to ∆. The authors develop a refined non-Markovian coupling technique and establish new local uniformity results for the Metropolis Glauber dynamics, enabling them to prove optimal mixing times for the Glauber dynamics on graphs with girth at least 11 and k ≥ (1 + δ)∆. This advances the understanding of sampling colorings near the critical threshold and resolves technical challenges in previous work.

### Why it matters

**Research problem:** Efficiently sampling random proper k-colorings of graphs with maximum degree ∆ using the Glauber dynamics, especially when k is close to ∆, remains a long-standing open problem. Prior results either require k significantly larger than ∆ or strong structural assumptions on the graph.

**Why it matters:** Sampling graph colorings is central to approximate counting and Markov chain Monte Carlo methods, with applications in statistical physics, combinatorics, and theoretical computer science. Proving rapid mixing of Glauber dynamics near the critical threshold k ≥ ∆ + 2 would yield efficient algorithms for approximate counting and sampling.

**Key contributions:**

- Resolved technical obstacles in the Hayes–Vigoda non-Markovian coupling framework and extended it to constant-degree graphs.
- Established new local uniformity results for the Metropolis Glauber dynamics, overcoming dependencies not present in the heat-bath dynamics.
- Constructed a refined local non-Markovian coupling that is bijective and controls propagation of disagreements.
- Proved optimal mixing time O(n log n) for the Glauber dynamics on graphs with girth ≥ 11 and k ≥ (1 + δ)∆ for all sufficiently large ∆.
- Provided a simpler and more transparent validity argument for the coupling's bijectivity via composition of local bijections.

## About the professor

**Vishesh Jain** — Associate Professor, Department of Mathematics, Statistics, and Computer Science, University of Illinois at Chicago.

Research interests: broadly interested in probability, combinatorics, and theoretical computer science

### Research links

- [Faculty/profile page](https://jainvishesh.github.io)
- [Resolved homepage](https://jainvishesh.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markov chain Monte Carlo
**The paper assumes:** Markov chain Monte Carlo methods, coupling techniques, mixing time analysis, and probabilistic graphical models
**Already in this field?** Skip this entirely if you already understand Markov chain Monte Carlo methods, coupling arguments, and mixing time proofs at a graduate level.

To understand the advanced coupling techniques and mixing time analysis in this paper, a solid grasp of Markov chain Monte Carlo (MCMC) methods, especially Glauber dynamics and coupling arguments, is essential. The rigorous course provides a detailed, foundational treatment of discrete-time Markov chains and Poisson processes, which underpin the theoretical framework of the paper. The fast track offers a concise, intuition-driven introduction to MCMC concepts, suitable for quickly gaining the core ideas without deep technical detail.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Discrete-time Markov Chains and Poisson Processes](https://www.youtube.com/playlist?list=PLwdnzlV3ogoXEZ6rpZLKzzlypKnsa-ySx) — NPTEL IIT Guwahati · 35 videos · 21.5h across 35 episodes

**Watch only this:** Lectures 1 through 23 (Lec 1: Review of Basic Probability I to Lec 23: Some Problems II), about 13.8 hours — these cover the essential Markov chain theory, hitting times, strong Markov property, and stationary distributions needed to follow the paper's arguments.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course thoroughly covers discrete-time Markov chains and Poisson processes, including foundational probability, Markov properties, hitting times, and stationary distributions, all crucial for understanding the rigorous coupling and mixing time proofs in the paper.

*If you want all of it:* All 35 episodes, about 21.5 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Markov Chain Monte Carlo](https://www.youtube.com/playlist?list=PL2wNuDhSPrhim3vGE2WUtVfaYDBbnXAJW) — David Cruz · 11 videos · 3.4h across 11 episodes

**Watch only this:** Episodes 2, 5, and 6 (Introduction to Bayesian statistics, part 2: MCMC and the Metropolis–Hastings algorithm; Markov Chain Monte Carlo; Markov Chain Monte Carlo and the Metropolis Algorithm), about 54 minutes total — these focus on the core MCMC algorithms and coupling ideas relevant to the paper.

*Why it unblocks this paper:* David Cruz's Markov Chain Monte Carlo playlist offers clear, concise explanations of MCMC fundamentals, including the Metropolis–Hastings algorithm and coupling concepts, providing an accessible overview that prepares the reader to grasp the paper's main techniques quickly.

*If you want all of it:* All 11 episodes, about 3.4 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's contributions on sampling colorings close to the maximum degree using non-Markovian coupling and local uniformity, start with foundational knowledge on Markov chain mixing times and the Glauber dynamics for graph colorings. Then, study the path coupling method and local uniformity in Markov chains to grasp the analytical tools used. Finally, focus on the paper's core concept of non-Markovian coupling, culminating with the authors' own talk or the closest available advanced talks on related coloring sampling problems.

### Markov chain mixing times *(prerequisite)*
Understanding mixing times is fundamental to analyzing the convergence rates of Markov chains like the Glauber dynamics. The selected lectures by Yuval Peres and the Simons Institute provide rigorous, graduate-level treatments of mixing times, hitting times, and coupling techniques essential for this paper's analysis.

*How the paper uses it:* The paper proves optimal mixing times for the Glauber dynamics, making a solid grasp of mixing time theory crucial.

▶ [Markov Chain Mixing Times and Applications I](https://www.youtube.com/watch?v=svi1j799i0A) — Simons Institute for the Theory of Computing · 1:01:55

### Glauber dynamics for graph colorings *(prerequisite)*
Glauber dynamics is the Markov chain whose mixing time and coupling properties are analyzed in the paper. The advanced talks from the Institute for Advanced Study and Microsoft Research focus on Glauber dynamics for colorings, providing the necessary background on the chain's behavior and challenges in sampling colorings.

*How the paper uses it:* The paper studies the Metropolis Glauber dynamics for sampling k-colorings near the maximum degree threshold.

▶ [Strong Spatial Mixing for Colorings on Trees and its ...](https://www.youtube.com/watch?v=MIAojhZVetw) — Institute for Advanced Study · 1:13:08

### Path coupling method *(prerequisite)*
Path coupling is a key analytical technique used in the paper to prove rapid mixing via contraction of expected Hamming distance. The Mary Wootters lecture on couplings offers a rigorous introduction to coupling methods at a graduate level, directly relevant to the paper's contraction arguments.

*How the paper uses it:* The paper uses path coupling arguments to establish contraction and rapid mixing of the Glauber dynamics.

▶ [Class 15 , Video 3: Couplings](https://www.youtube.com/watch?v=d3Oydmr87gs) — Mary Wootters · 32:09

### Local uniformity in Markov chains *(prerequisite)*
Local uniformity is a subtle property established for the Metropolis Glauber dynamics in the paper, enabling contraction arguments despite dependencies. While no perfect advanced talk on local uniformity exists in the candidates, the MIT OpenCourseWare Markov Chains lecture provides rigorous background on Markov chains that supports understanding local uniformity concepts.

*How the paper uses it:* The paper establishes new local uniformity results for the Metropolis Glauber dynamics, a key technical advance.

▶ [16. Markov Chains I](https://www.youtube.com/watch?v=IkbkEtOOC1Y) — MIT OpenCourseWare · 13 years ago

### Non-Markovian coupling
Non-Markovian coupling is the paper's central methodological innovation, refining prior frameworks to handle constant-degree graphs and future update modifications. Although no direct author talk on this exact paper is available, the Raman Research Institute talk on non-Markovian dephasing channels and the Erwin Schrödinger Institute talk on non-Markovian random walks provide advanced conceptual insights into non-Markovian processes, which can help understand the coupling's non-Markovian nature.

*How the paper uses it:* The paper develops a refined local non-Markovian coupling to control Glauber dynamics updates and disagreement propagation.

▶ [Rosemary Harris - Insights from non-Markovian random walks](https://www.youtube.com/watch?v=iHmyVkH4FJg) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 3 years ago

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper's authors or closely related talks on sampling k-colorings provide the most precise and detailed exposition of the paper's contributions. While no talk by the authors on this exact paper is available, the CMU Theory lunch talk by Siddharth Bhandari on perfect sampling of graph k-colorings for k > 3Δ is the closest advanced research talk on related coloring sampling problems, offering valuable context on coupling and sampling techniques near the maximum degree threshold.

*How the paper uses it:* This talk presents advanced sampling techniques for graph colorings closely related to the paper's focus on sampling near the maximum degree.

▶ [Perfect Sampling of graph k-colorings for k greater than 3Δ](https://www.youtube.com/watch?v=XcWXd99zKTY) — CMU Theory · 1:03:23 · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of Markov chains and their mixing times, which explain how fast random processes converge to equilibrium. Next, grasp the Glauber dynamics specifically for graph colorings, as this is the Markov chain analyzed in the paper. Then, study local uniformity in Markov chains, a key property enabling the authors' contraction arguments. Finally, explore the non-Markovian coupling method, the core novel technique developed here to refine control over the Glauber dynamics and prove rapid mixing near the critical threshold.

### Markov chain mixing times *(prerequisite)*
Markov chain mixing times measure how quickly a Markov chain converges to its steady-state distribution. Understanding this concept is essential to analyze the efficiency of sampling algorithms like Glauber dynamics.

*How the paper uses it:* The paper proves optimal mixing times for the Glauber dynamics, so understanding mixing times is foundational.

▶ [Markov Chain Mixing Times and Applications I](https://www.youtube.com/watch?v=svi1j799i0A) — Simons Institute for the Theory of Computing · 1:01:55

### Glauber dynamics for graph colorings *(prerequisite)*
Glauber dynamics is a Markov chain used to sample graph colorings by repeatedly recoloring vertices under certain constraints. Learning this helps understand the specific chain whose mixing time the paper analyzes.

*How the paper uses it:* The paper studies the Metropolis variant of Glauber dynamics for sampling proper k-colorings of graphs.

▶ [Strong Spatial Mixing for Colorings on Trees and its ...](https://www.youtube.com/watch?v=MIAojhZVetw) — Institute for Advanced Study · 1:13:08

## Already in your library

- [Markov Chain Mixing Times and Applications II](https://www.youtube.com/watch?v=zYObOwEnUzw) — also for: On quantum to classical comparison for Davies generators (Alistair Sinclair)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Sampling Colorings Close to the Maximum Degree" by Jain et al. The beginner project focuses on simulating and visualizing the Glauber dynamics for graph colorings on small graphs to grasp the basic Markov chain behavior. The intermediate project involves implementing a simplified version of the non-Markovian coupling method from the paper to empirically observe contraction of disagreements on random graphs, thereby reproducing a core theoretical insight. The advanced project extends the coupling framework to graphs with smaller girth, addressing one of the paper's stated limitations and exploring how the coupling and mixing time guarantees degrade or adapt, which could open a research conversation with the professor.

### Beginner — Simulate Glauber Dynamics for Graph Coloring on Small Graphs
*Effort: a weekend, ~8 hours*

You build a simulation of the Metropolis Glauber dynamics for proper k-colorings on small graphs (e.g., cycles, trees, or small random graphs) with maximum degree ∆. The simulation will visualize the coloring updates over time and track metrics such as the Hamming distance between successive colorings and the distribution of available colors per vertex.

**Why it shows you understood the paper:** This project shows you understand the basic operation of Glauber dynamics and the importance of local uniformity and mixing time concepts by reproducing the coloring update process and observing convergence behavior on small examples.

**Grounded in:** The simulation relates to the paper's foundational use of Metropolis Glauber dynamics and local uniformity results (Theorem 1.4) that underpin their mixing time analysis.

**Tech stack:** Python 3.11, Jupyter Notebook, NetworkX, Matplotlib

**Data:** You use small synthetic graphs generated with NetworkX (e.g., random trees, cycles, or small random regular graphs) as substitutes for the paper's graph inputs.

**Build it:**

1. Implement a function to generate small graphs with specified maximum degree and girth properties using NetworkX.
2. Implement the Metropolis Glauber dynamics update rule for proper k-colorings on these graphs.
3. Simulate the dynamics starting from a random proper coloring and visualize the coloring changes over time.
4. Track and plot metrics such as the number of available colors per vertex and the Hamming distance between successive colorings.
5. Write a README explaining the connection between the simulation and the paper's local uniformity and mixing time concepts.

**Ships as:** A Jupyter notebook and Python scripts that simulate and visualize Glauber dynamics on small graphs, with plots demonstrating local uniformity and convergence behavior.

**Stretch goal:** Add a simple heat-bath Glauber dynamics variant and compare its behavior to the Metropolis version on the same graphs.

### Intermediate — Implement Non-Markovian Coupling to Contract Disagreements on Random Graphs
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the local non-Markovian coupling described in the paper to couple two Glauber dynamics chains starting from neighboring colorings differing at one vertex. You empirically measure the contraction of expected Hamming distance over O(n) steps on random graphs with large girth and maximum degree ∆, reproducing the contraction behavior stated in Theorem 1.6.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's core coupling construction into code and verify its contraction property experimentally, showing deep comprehension of the coupling method and its role in proving rapid mixing.

**Grounded in:** This project directly implements the refined local non-Markovian coupling and validates Theorem 1.6 (formalized as Theorem 2.4) on contraction of expected Hamming distance.

**Tech stack:** Python 3.11, NetworkX, NumPy, Matplotlib

**Data:** You generate random regular graphs or random graphs with girth ≥ 11 using NetworkX as a proxy for the paper's graph classes.

**Build it:**

1. Implement graph generation for random graphs with large girth and specified maximum degree using NetworkX.
2. Implement the Metropolis Glauber dynamics update rule for k-colorings with k ≥ (1 + δ)∆.
3. Implement two coupled Glauber dynamics chains starting from colorings differing at one vertex.
4. Implement the local non-Markovian coupling that modifies updates at multiple times to prevent disagreement propagation, following the paper's description.
5. Simulate the coupled chains over O(n) steps and measure the expected Hamming distance contraction.
6. Plot the contraction over time and compare it to the theoretical factor of 1/3.
7. Document the implementation details and relate the results to the paper's coupling construction.

**Ships as:** A Python package with scripts to run coupled Glauber dynamics on random graphs, plots showing contraction of disagreements, and a detailed README linking the implementation to the paper's coupling theory.

**Stretch goal:** Compare the non-Markovian coupling contraction to a naive synchronous coupling baseline to highlight the improvement.

### Advanced — Extend Non-Markovian Coupling to Graphs with Smaller Girth
*Effort: 3+ weeks*

You extend the non-Markovian coupling framework to graphs with girth less than 11, implementing the coupling and bounding chain to track disagreement regions. You empirically investigate how the mixing time and contraction properties degrade as girth decreases, addressing a key limitation of the paper and exploring potential adaptations or heuristics to handle short cycles.

**Why it shows you understood the paper:** This project shows you can engage with open research directions from the paper, adapt complex coupling constructions to new graph classes, and critically analyze the impact of structural assumptions on mixing times, positioning you for research-level discussions.

**Grounded in:** This project addresses the paper's limitation on requiring girth ≥ 11 and explores the future direction of reducing the girth requirement.

**Tech stack:** Python 3.11, NetworkX, NumPy, Matplotlib, Jupyter Notebook

**Data:** You use synthetic graphs generated with NetworkX, including graphs with controlled girth (e.g., random graphs with planted short cycles) to test the coupling under varying girth conditions.

**Build it:**

1. Implement graph generators that produce graphs with varying girth, including graphs with girth < 11.
2. Implement the full non-Markovian coupling and bounding chain as described in the paper, adapting the logic to handle cycles.
3. Simulate coupled Glauber dynamics on these graphs and measure disagreement propagation and mixing time proxies.
4. Analyze how the contraction factor and mixing time estimates change as girth decreases.
5. Document challenges encountered, potential heuristics to control disagreement growth, and implications for extending the theory.
6. Prepare a detailed report or notebook discussing the results and connecting them to the paper's stated limitations and future directions.

**Ships as:** A comprehensive codebase and report demonstrating the coupling on graphs with smaller girth, empirical analysis of mixing behavior, and discussion of theoretical and practical implications.

**Stretch goal:** Propose and test modifications to the coupling or bounding chain that mitigate disagreement growth in graphs with short cycles.
