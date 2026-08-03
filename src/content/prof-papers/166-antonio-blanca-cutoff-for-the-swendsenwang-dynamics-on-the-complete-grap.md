---
title: "166 · Cutoff for the Swendsen–Wang dynamics on the complete graph — Antonio Blanca"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-antonio-blanca"
source_hash: "a3b1a93b347f1683d7693402026b00273649e7e5e34088e2dfc69c8bbd2c1b7b"
sequence: 166
generator: "outreach-garden: managed"
---

# 166 · Cutoff for the Swendsen–Wang dynamics on the complete graph

## At a glance

- **Professor:** Antonio Blanca
- **Institution:** Pennsylvania State University
- **Paper:** [Cutoff for the Swendsen–Wang dynamics on the complete graph](https://arxiv.org/pdf/2507.20482)
- **Authors:** Antonio Blanca, Zhezheng Song
- **Year:** 2025

## Paper overview

This paper studies how quickly the Swendsen–Wang (SW) Markov chain converges to its equilibrium distribution when applied to the q-state ferromagnetic Potts model on a complete graph. The authors prove that for inverse temperature parameter β greater than q, the SW dynamics exhibits a sharp cutoff phenomenon in mixing time, meaning it rapidly transitions from being far from equilibrium to well-mixed in a narrow time window proportional to log n, where n is the number of vertices.

### Why it matters

**Research problem:** Understanding the precise speed of convergence (mixing time) of the Swendsen–Wang dynamics for the mean-field Potts model, especially characterizing the presence of cutoff phenomena at low temperatures (β > q).

**Why it matters:** The SW dynamics is a widely used Markov chain for sampling from complex distributions in statistical physics and computational biology. Knowing exact mixing times and cutoff behavior is crucial for designing efficient algorithms that produce unbiased samples, avoiding highly biased results from premature stopping.

**Key contributions:**

- Proved that the SW dynamics on the complete graph exhibits cutoff for all β > q with mixing time c(β, q) log n + Θ(1).
- Provided an explicit formula for the constant c(β, q) governing the cutoff time.
- Developed a novel multi-phase coupling technique that handles the presence of a dominant spin and super-critical percolation steps.
- Extended understanding of SW dynamics mixing beyond previously known high-temperature regimes to the low-temperature regime.

## About the professor

**Antonio Blanca** — Associate Professor, CSE Department, Pennsylvania State University.

Research interests: randomized algorithms, Markov chain Monte Carlo, spin systems, learning, testing, and applications in statistical physics and computational biology

### Research links

- [Faculty/profile page](http://www.cse.psu.edu/~azb1015)
- [Resolved homepage](http://www.cse.psu.edu/~fhs/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on cutoff for the Swendsen–Wang dynamics on the complete graph, start by building a solid foundation in Markov chain mixing times and cutoff phenomena, as these concepts underpin the paper's main results. Next, study coupling methods in Markov chains, which are the key analytical tools used in the paper's novel multi-phase coupling approach. Then, gain background on the Potts model and the Swendsen–Wang dynamics, the core statistical physics model and Markov chain studied. Finally, focus on the paper-specific author talks that provide direct insight into the new cutoff results and coupling techniques developed by the authors.

### Markov chain mixing times cutoff *(prerequisite)*
Understanding the sharp transition in convergence speed known as the cutoff phenomenon is central to the paper's main result. This section covers rigorous lectures on mixing times and cutoff behavior in Markov chains, providing the theoretical background needed to appreciate the paper's precise mixing time analysis.

*How the paper uses it:* The paper proves a sharp cutoff for the Swendsen–Wang dynamics mixing time, making this foundational knowledge essential.

▶ [Yuval Peres - 1/3 The cutoff phenomenon and rate of escape ...](https://www.youtube.com/watch?v=4B6T_fcwpBs) — Yuval Peres · 1:31:07

### Coupling methods in Markov chains *(prerequisite)*
Coupling is a key analytical technique used to prove contraction and mixing time bounds in Markov chains. This section includes advanced talks and lectures on coupling methods, which are crucial to understanding the multi-phase coupling approach developed in the paper.

*How the paper uses it:* The authors develop a novel multi-phase coupling technique to establish cutoff and contraction properties.

▶ [Lecture-1: Quantitative features of Markov chains: mixing time ...](https://www.youtube.com/watch?v=0LHG6R-SXQs) — Yuval Peres · 54:24

### Potts model statistical physics *(prerequisite)*
The Potts model is the underlying spin system whose equilibrium distribution the Swendsen–Wang dynamics samples. This section provides rigorous seminar talks and university lectures on the Potts model and related statistical physics concepts, essential for understanding the model studied in the paper.

*How the paper uses it:* The paper analyzes the Swendsen–Wang dynamics applied to the q-state ferromagnetic Potts model on the complete graph.

▶ [Session 6B - Efficient sampling and counting algorithms for ...](https://www.youtube.com/watch?v=kXmD8MOg768) — Association for Computing Machinery (ACM) · 32:47

### Swendsen–Wang dynamics *(prerequisite)*
The Swendsen–Wang dynamics is the core Markov chain studied for sampling Potts model configurations. This section features advanced talks and seminars on the Swendsen–Wang algorithm, providing detailed understanding of the dynamics and its behavior.

*How the paper uses it:* The paper studies the mixing time and cutoff behavior of the Swendsen–Wang dynamics on the complete graph.

▶ [Swendsen-Wang Algorithm on the Mean-Field Potts Model](https://www.youtube.com/watch?v=7nogiBu1yxE) — Simons Institute for the Theory of Computing · 45:49

### Paper-specific author talk *(the paper's own talk)*
This section contains talks by the paper's authors or closely related researchers presenting the novel cutoff results and the multi-phase coupling techniques developed. These talks offer direct insight into the paper's contributions and technical approach.

*How the paper uses it:* Direct insight from the authors on their novel cutoff results and coupling techniques for the Swendsen–Wang dynamics.

▶ [Dynamics for the Random-Cluster Model](https://www.youtube.com/watch?v=exNyp5XZsNQ) — Simons Institute for the Theory of Computing · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper's results on the Swendsen–Wang dynamics cutoff for the Potts model. We start with the basics of Markov chains and mixing times to grasp the notion of cutoff phenomena, then explore the Potts model from statistical physics to understand the system being sampled. Next, we cover the Swendsen–Wang dynamics as the core Markov chain studied, followed by coupling methods which are key analytical tools used in the paper. The path concludes with a paper-specific author talk to connect all concepts directly to the novel contributions and techniques of the paper.

### Markov chain mixing times cutoff *(prerequisite)*
Learn what mixing times are and how Markov chains converge to equilibrium distributions. The cutoff phenomenon describes a sharp transition in convergence speed, where the chain rapidly moves from far from equilibrium to close to it in a short time window.

*How the paper uses it:* Understanding cutoff is central to the paper's main result proving sharp cutoff for the Swendsen–Wang dynamics at low temperatures.

▶ [Yuval Peres - 1/3 The cutoff phenomenon and rate of escape ...](https://www.youtube.com/watch?v=4B6T_fcwpBs) — Yuval Peres · 1:31:07

### Potts model statistical physics *(prerequisite)*
The Potts model is a generalization of the Ising model describing spins on a graph with multiple states, used to model ferromagnetism and phase transitions. Understanding its equilibrium distribution is essential to grasp what the Swendsen–Wang dynamics samples.

*How the paper uses it:* The paper studies the Swendsen–Wang dynamics applied to the q-state ferromagnetic Potts model on the complete graph.

▶ [Session 6B - Efficient sampling and counting algorithms for ...](https://www.youtube.com/watch?v=kXmD8MOg768) — Association for Computing Machinery (ACM) · 32:47

### Swendsen–Wang dynamics *(prerequisite)*
Swendsen–Wang dynamics is a Markov chain Monte Carlo algorithm that updates clusters of spins simultaneously, enabling efficient sampling from the Potts model distribution. It is especially useful for overcoming slow mixing in low-temperature regimes.

*How the paper uses it:* The paper analyzes the mixing time and cutoff behavior of the Swendsen–Wang dynamics on the complete graph.

▶ [Swendsen-Wang Algorithm on the Mean-Field Potts Model](https://www.youtube.com/watch?v=7nogiBu1yxE) — Simons Institute for the Theory of Computing · 45:49

### Coupling methods in Markov chains *(prerequisite)*
Coupling is a powerful technique to analyze how quickly two copies of a Markov chain come together, providing bounds on mixing times. Multi-phase coupling can handle complex dynamics by progressively reducing distance to stationarity.

*How the paper uses it:* The authors develop a novel multi-phase coupling to prove contraction and establish cutoff for the Swendsen–Wang dynamics.

▶ [Lecture-1: Quantitative features of Markov chains: mixing time ...](https://www.youtube.com/watch?v=0LHG6R-SXQs) — Yuval Peres · 54:24

### Paper-specific author talk *(the paper's own talk)*
Gain direct insight from experts on the novel cutoff results and coupling techniques developed for the Swendsen–Wang dynamics on the mean-field Potts model. This talk connects theory to the paper's key contributions.

*How the paper uses it:* This talk by Antonio Blanca covers the Swendsen–Wang dynamics and related phase transition phenomena relevant to the paper.

▶ [Dynamics for the Random-Cluster Model](https://www.youtube.com/watch?v=exNyp5XZsNQ) — Simons Institute for the Theory of Computing · 10 years ago

## Already in your library

- [Class 15 , Video 3: Couplings](https://www.youtube.com/watch?v=d3Oydmr87gs) — also for: Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity (Vishesh Jain)
- [Markov Chain Mixing Times and Applications I](https://www.youtube.com/watch?v=svi1j799i0A) — also for: Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity (Vishesh Jain)
