---
title: "138 · Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity — Vishesh Jain"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vishesh-jain"
source_hash: "8c1b72688c8e6b64bcd0200fa0b8f8becfe92a321b06771788dad174bf800a29"
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
