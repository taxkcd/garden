---
title: "166 · Cutoff for the Swendsen–Wang dynamics on the complete graph — Antonio Blanca"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-antonio-blanca"
source_hash: "f8413c30cfda816cfbb30e7f156a2c3e6455b55ff5eaed2bf6f54dc6ad8de592"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markov chain mixing times
**The paper assumes:** Markov chain mixing times, coupling methods, cutoff phenomena in Markov chains
**Already in this field?** Skip this entirely if you already understand Markov chain convergence, mixing time bounds, and coupling techniques.

To understand the mixing time and cutoff phenomena of the Swendsen–Wang dynamics studied in this paper, a solid grasp of Markov chain mixing times and convergence theory is essential. The rigorous course option offers a deep, structured university-level introduction to stochastic processes and Markov chains, suitable for thorough foundational learning. The fast track provides a focused, shorter series specifically on discrete Markov chains and mixing times, ideal for quickly gaining the key concepts and intuition needed to follow the paper's arguments.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [JAN 2020 - Introduction to Stochastic Processes](https://www.youtube.com/playlist?list=PLOzRYVm0a65dFqcSScAAtAjOMGrG7luhz) — NPTEL IIT Bombay · 50 videos · 31.8h across 50 episodes

**Watch only this:** Watch Week 5: Lecture 16 to Lecture 20 (Poisson Process and its properties) and Week 6: Lecture 21 to Lecture 23 (Convergence of sequence of random variables and relations between notions of convergence), about 3.5 hours total — these lectures cover convergence concepts and stochastic process properties relevant to mixing time analysis.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on stochastic processes covers foundational probability and Markov chain concepts, including convergence and mixing, which underpin the paper's analysis of Swendsen–Wang dynamics mixing times.

*If you want all of it:* 31.8 hours across 50 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Discrete Markov Chains: mixing times and beyond (2014)](https://www.youtube.com/playlist?list=PLo4jXE-LdDTT5GR1CJSLoOsTyf1ZbrM8w) — Instituto de Matemática Pura e Aplicada · 16 videos · 15.4h across 16 episodes

**Watch only this:** Watch episodes 1 to 5 (Discrete Markov Chains: mixing times and beyond - MINICOURSE - Johel Beltrán 01 to 05), about 4.75 hours total — these cover the fundamental theory of mixing times and coupling techniques essential for understanding the paper's methods.

*Why it unblocks this paper:* This minicourse on discrete Markov chains and mixing times by Instituto de Matemática Pura e Aplicada focuses directly on mixing times and cutoff phenomena, matching the paper's core topic with clear, targeted lectures.

*If you want all of it:* 15.4 hours across 16 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Swendsen–Wang dynamics cutoff phenomenon on the complete graph as studied in the paper. The beginner project recreates a key conceptual mechanism using your existing programming skills. The intermediate project implements the core multi-phase coupling method to empirically observe mixing time behavior and cutoff, gaining new skills in Markov chain simulation and statistical analysis. The advanced project tackles an open problem from the paper by exploring cutoff behavior at critical inverse temperature thresholds, extending the original analysis with new simulations and visualizations.

### Beginner — Simulate Swendsen–Wang Dynamics on Small Complete Graphs
*Effort: a weekend, ~8 hours*

You build a Python simulation of the Swendsen–Wang Markov chain for the q-state Potts model on small complete graphs (e.g., n=20 vertices). The simulation visualizes the evolution of spin proportions over time for β > q and β ≤ q, illustrating the presence or absence of a dominant spin class.

**Why it shows you understood the paper:** This project shows you understand the SW dynamics mechanism, the role of inverse temperature β relative to q, and the concept of dominant spin classes that complicate mixing time analysis in the low-temperature regime.

**Grounded in:** The presence of a dominant spin class complicates the analysis compared to high-temperature regimes.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** No external data needed; you simulate the Potts model configurations on complete graphs as described in the paper.

**Build it:**

1. Implement the q-state Potts model configuration on a complete graph with n=20 vertices.
2. Implement the Swendsen–Wang update step: form clusters via percolation and reassign spins.
3. Run the Markov chain for different β values above and below q, recording spin proportions over time.
4. Plot the evolution of spin proportions to visualize the emergence of a dominant spin for β > q.
5. Write a README explaining the connection to the paper's discussion of dominant spins and mixing behavior.

**Ships as:** A Jupyter Notebook with simulation code, plots showing spin proportion evolution, and explanatory notes linking to the paper's analysis of dominant spin effects.

**Stretch goal:** Add animation of cluster formation and spin updates to better visualize the SW dynamics steps.

### Intermediate — Reimplement Multi-Phase Coupling to Empirically Observe Cutoff
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core multi-phase coupling method for the Swendsen–Wang dynamics on the complete graph with moderate n (e.g., n=500). You simulate the Markov chain from different initial states and measure total variation distance or a proxy metric to empirically observe the sharp cutoff in mixing time for β > q.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's novel coupling technique into code, reproduce its key result of cutoff at mixing time c(β, q) log n, and understand the contraction phases that reduce distance to stationarity.

**Grounded in:** Proved that the SW dynamics on the complete graph exhibits cutoff for all β > q with mixing time c(β, q) log n + Θ(1). The coupling phases progressively reduce distance to stationarity from arbitrary initial states to O(1/√n) neighborhoods.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, Jupyter Notebook

**Data:** No external data; you simulate the Potts model and SW dynamics on complete graphs as per the paper's setting.

**Build it:**

1. Implement the Swendsen–Wang dynamics for the q-state Potts model on a complete graph with n=500 vertices.
2. Implement the multi-phase coupling strategy: simulate two chains from different initial states and couple their updates as described.
3. Define and compute a distance metric (e.g., difference in spin proportions) to track convergence.
4. Run multiple simulations for β > q, record the distance metric over time, and plot to observe the sharp cutoff.
5. Compare mixing time estimates to the theoretical c(β, q) log n formula from the paper.
6. Document the implementation details, results, and how they connect to the paper's main theorem.

**Ships as:** A Jupyter Notebook or Python scripts with simulation code, plots showing cutoff behavior, and a report linking empirical findings to the paper's theoretical results.

**Stretch goal:** Add a simple baseline simulation of single-site Glauber dynamics to contrast mixing times with SW dynamics.

### Advanced — Explore Cutoff Behavior at Critical Inverse Temperatures β = β_l and β = β_r
*Effort: 3+ weeks*

You extend the paper's analysis by simulating the Swendsen–Wang dynamics near the critical inverse temperature thresholds β = β_l and β = β_r on the complete graph. You investigate empirical mixing times, variance effects, and cluster size distributions to provide insight into the open question of cutoff presence or absence at these points.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions, applying your coding and analytical skills to a challenging open problem. It demonstrates your ability to extend theoretical work with computational experiments and critical analysis.

**Grounded in:** The cutoff behavior at the critical points β = β_l or β = β_r remains an open question.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, Jupyter Notebook, pandas

**Data:** No external data; simulations of the Potts model and SW dynamics on complete graphs with parameter sweeps near critical β values.

**Build it:**

1. Study the definitions and approximate values of β_l and β_r from the paper or related literature.
2. Implement the Swendsen–Wang dynamics simulation on complete graphs with n=500 or larger.
3. Run simulations for β values approaching β_l and β_r from below and above, recording mixing time proxies and cluster statistics.
4. Analyze variance and fluctuations in mixing behavior to detect signs of cutoff or slow mixing.
5. Visualize cluster size distributions and spin proportion trajectories near critical points.
6. Write a detailed report discussing findings, challenges, and how they relate to the paper's open questions.

**Ships as:** A comprehensive GitHub repository with simulation code, data analysis scripts, visualizations, and a well-documented report exploring cutoff phenomena at critical β values.

**Stretch goal:** Attempt to implement or adapt coupling arguments from the paper to provide heuristic explanations for observed behaviors at critical points.
