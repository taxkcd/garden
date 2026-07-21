---
title: "045 · Reconstructing networks from simple and complex contagions — Laurent Hébert-Dufresne"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-laurent-hebert-dufresne"
source_hash: "6e1ca8b98df60872b651ccd7db5c1eed5f142505ca78cbc8f257677a5cf0fa49"
sequence: 45
generator: "outreach-garden: managed"
---

# 045 · Reconstructing networks from simple and complex contagions

## At a glance

- **Professor:** Laurent Hébert-Dufresne
- **Institution:** University of Vermont
- **Paper:** [Reconstructing networks from simple and complex contagions](https://arxiv.org/pdf/2405.00129)
- **Authors:** Nicholas W. Landry, William Thompson, Laurent Hébert-Dufresne, Jean-Gabriel Young
- **Year:** 2024

## Paper overview

This paper develops a new nonparametric Bayesian method to reconstruct both the structure of a network and the dynamics of contagion spreading on it, from observed time series of node infection states. The method generalizes beyond traditional simple contagion models to include complex contagions that depend on multiple infected neighbors. The authors demonstrate that complex contagions can improve network reconstruction accuracy in dense networks or when the contagion saturates, while simple contagions perform better in other regimes. This work advances understanding of how contagion complexity affects the ability to infer underlying contact networks from data.

### Why it matters

**Research problem:** Network reconstruction from contagion data is challenging, especially when contagion dynamics are complex and not limited to simple pairwise infection. Existing methods often assume simple contagion dynamics, limiting their applicability to real-world social, biological, or epidemiological systems where contagions may require multiple exposures.

**Why it matters:** Understanding the structure of contact networks is crucial for predicting and controlling the spread of diseases, information, and behaviors. Accurate network reconstruction enables better epidemic forecasting, intervention design, and insight into social contagion processes. However, incomplete or noisy data and complex contagion mechanisms hinder effective inference.

**Key contributions:**

- Developed a nonparametric Bayesian method to reconstruct networks and contagion dynamics simultaneously from binary node state time series.
- Unified simple and complex contagion models under a general neighborhood-based susceptible-infected-susceptible (SIS) framework.
- Demonstrated that complex contagions improve network reconstruction in dense networks or when contagion saturates, while simple contagions perform better in other regimes.
- Provided extensive simulation studies on various network models (Erdős-Rényi, power-law configuration, clustered, small-world, stochastic block) to characterize reconstruction performance.
- Showed that reconstruction accuracy depends on the basic reproduction number R0 and contagion complexity.

## About the professor

**Laurent Hébert-Dufresne** — University of Vermont.

### Research links

- [Faculty/profile page](https://laurenthebertdufresne.github.io)
- [Identity evidence](http://www.uvm.edu/cems/cs/profiles/laurent-hebert-dufresne)
- [Resolved homepage](https://www.uvm.edu/cems/cs/profiles/laurent-hebert-dufresne)

## Learning path

To deeply understand the paper 'Reconstructing networks from simple and complex contagions,' start by grounding yourself in the foundational concepts of network epidemiology and SIS models, as these form the epidemic modeling basis. Next, study Markov Chain Monte Carlo methods, which are essential for the Bayesian inference approach used. Then, explore complex contagion dynamics to grasp the contagion mechanisms beyond simple pairwise infection. Finally, focus on the paper's core topic by watching the authors' own talk presenting their novel nonparametric Bayesian network reconstruction method from contagion data.

## Recommended videos (in order)

### Network epidemiology and SIS models *(prerequisite)*
Understanding the SIS (susceptible-infected-susceptible) epidemic model and its network-based generalizations is foundational, as the paper builds on neighborhood-based SIS contagion frameworks. These videos provide rigorous university-level lectures on epidemic modeling and SIS dynamics, essential for grasping the contagion processes modeled.

*How the paper uses it:* The paper generalizes neighborhood-based SIS contagion models as the underlying epidemic process for network reconstruction.

▶ [Mathematical Modeling of Epidemics. Lecture 1: basic SI/SIS ...](https://www.youtube.com/watch?v=IXkr0AsEh1w) — Leonid Zhukov · 1:01:39

### Markov Chain Monte Carlo methods *(prerequisite)*
MCMC methods are critical for sampling from the posterior distributions in the paper's Bayesian inference framework. The selected video is a detailed university-level lecture introducing MCMC sampling techniques, providing the necessary depth to understand the computational approach used.

*How the paper uses it:* The paper uses MCMC sampling to estimate posterior distributions over network structure and contagion parameters.

▶ [Session 10: An Introduction to MCMC Sampling (Lecture III)](https://www.youtube.com/watch?v=bpGWOnvhHew) — LSST-DA Data Science Fellowship · 1:02:55

### Complex contagion dynamics *(prerequisite)*
Complex contagions involve infection processes requiring multiple exposures, a key extension beyond simple contagions in this paper. The chosen talk is a rigorous research seminar from the Simons Institute, offering an in-depth theoretical treatment of complex contagions and their phase transitions, directly relevant to the paper's contagion modeling.

*How the paper uses it:* The paper models contagion probability as a function of multiple infected neighbors, unifying simple and complex contagions.

▶ [Complex Contagions and Hybrid Phase Transitions](https://www.youtube.com/watch?v=17QkYHxDaAY) — Simons Institute for the Theory of Computing · 1:08:26

### Authors' talk on network reconstruction contagions *(the paper's own talk)*
The authors' own recorded talk on their paper is the most direct and authoritative source to understand their novel nonparametric Bayesian method, results, and implications. It provides concise insights into their approach and findings, making it essential for grasping the paper's core contributions.

*How the paper uses it:* This is the authors' own presentation of their method and results on reconstructing networks from contagion data.

▶ [Reconstructing networks from simple and complex contagions - ArXiv:2405.00129](https://www.youtube.com/watch?v=DqtUw0--9pE) — Ambient Harmonics · 5:24 · 1 year ago
