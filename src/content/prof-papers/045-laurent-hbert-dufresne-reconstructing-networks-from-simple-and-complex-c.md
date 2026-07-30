---
title: "045 · Reconstructing networks from simple and complex contagions — Laurent Hébert-Dufresne"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-laurent-hebert-dufresne"
source_hash: "6e8234e23b98b3c552febf49a5430925cfca4592439b084c1c824a68c6fd7938"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on reconstructing networks from simple and complex contagions, start by building a foundation in the key prerequisite methods and models: Markov Chain Monte Carlo (MCMC) methods for Bayesian inference, complex contagion models that extend beyond simple pairwise infection, and network epidemiology models such as SIS frameworks. Then, focus on the paper's core contribution by watching the authors' own talk presenting their novel nonparametric Bayesian reconstruction method that unifies simple and complex contagions. This progression ensures a solid grasp of both the theoretical background and the specific innovations introduced by the authors.

### Markov Chain Monte Carlo methods *(prerequisite)*
MCMC is a fundamental computational technique used to sample from complex posterior distributions in Bayesian inference. Understanding MCMC is crucial to grasp how the authors estimate the posterior over network structures and contagion parameters in their nonparametric Bayesian framework.

*How the paper uses it:* The paper uses MCMC sampling to estimate posterior distributions over network structure and contagion parameters.

▶ [Markov Chain Monte Carlo](https://www.youtube.com/watch?v=hn0Vfzcnmig) — VideoLecturesChannel · 13 years ago

### Complex contagion models *(prerequisite)*
Complex contagion models capture spreading processes that require multiple exposures or social reinforcement, going beyond simple pairwise infection. This concept is essential to understand the paper's extension of traditional contagion models and the impact of contagion complexity on network reconstruction.

*How the paper uses it:* The paper generalizes beyond simple contagions to include complex contagions that depend on multiple infected neighbors.

▶ [Complex Contagion](https://www.youtube.com/watch?v=7WNtNc-0FHk) — Amin Rahimian · 7 years ago

### Network epidemiology models *(prerequisite)*
Network epidemiology models, particularly neighborhood-based SIS models, provide the theoretical framework for modeling infection spread on networks. Familiarity with these models helps contextualize the contagion dynamics the authors infer and reconstruct.

*How the paper uses it:* The paper builds on neighborhood-based SIS contagion frameworks to model infection spread.

▶ [QLS/CAMBAM Seminar - Shuang Gao - April 7 2026](https://www.youtube.com/watch?v=Hye0UWhcQYg) — McGill Quantitative Life Sciences PhD Program · 1:04:14 · 2 months ago

### Paper authors talk *(the paper's own talk)*
The authors' own recorded talk offers the most direct and authoritative explanation of their new nonparametric Bayesian method, the unification of simple and complex contagion models, and the key results from their simulation studies. This talk is the core resource for understanding the paper's contributions and innovations.

*How the paper uses it:* This is a direct presentation by Dr. Nicholas Landry, a co-author, on the paper's method and findings.

▶ [Reconstructing networks from simple & complex contagions🦠10 28 24  Dr Landry](https://www.youtube.com/watch?v=2NLksRqe2Kw) — Quantum Photonics Club · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how networks can be reconstructed from contagion data, starting with basic epidemiological models and contagion types, then covering key computational methods like Markov Chain Monte Carlo, and concluding with the paper's core method of Bayesian network reconstruction. The order builds intuition from how diseases spread on networks, to how contagion complexity affects inference, and finally to the Bayesian framework used for joint network and contagion dynamics inference.

### Network epidemiology models *(prerequisite)*
Learn the basics of how infectious diseases spread through populations modeled as networks, focusing on the susceptible-infected-susceptible (SIS) and susceptible-infected-recovered (SIR) frameworks. These models describe how infection states change over time depending on contacts between individuals.

*How the paper uses it:* The paper builds on neighborhood-based SIS contagion models to represent infection spread on networks.

▶ [Oxford Mathematician explains SIR Disease Model for COVID-19 (Coronavirus)](https://www.youtube.com/watch?v=NKMHhm2Zbkw) — Tom Rocks Maths · 24:55 · 6 years ago

### Complex contagion models *(prerequisite)*
Understand the difference between simple contagions, where infection spreads via single contacts, and complex contagions, which require multiple infected neighbors to influence infection. This distinction is crucial for modeling realistic social or biological contagions that depend on reinforcement or thresholds.

*How the paper uses it:* The paper generalizes beyond simple contagions to include complex contagions that depend on multiple infected neighbors.

▶ [Simple contagion vs. complex contagion](https://www.youtube.com/watch?v=0f4UQuZhX2I) — Teaching Table: Dr. Yayati · 5 years ago

### Markov Chain Monte Carlo methods *(prerequisite)*
Markov Chain Monte Carlo (MCMC) is a computational technique to sample from complex probability distributions, enabling estimation of posterior distributions in Bayesian inference. It is essential for approximating the joint distribution over network structures and contagion parameters.

*How the paper uses it:* The authors use MCMC sampling to estimate posterior distributions over network structure and contagion parameters.

▶ [Markov Chain Monte Carlo (MCMC) : Data Science Concepts](https://www.youtube.com/watch?v=yApmR-c_hKU) — ritvikmath · 12:11 · 5 years ago

### Bayesian network reconstruction
This concept covers how Bayesian methods can be used to infer unknown network structures and contagion dynamics simultaneously from observed data, by combining prior beliefs with likelihoods and using sampling to approximate the posterior. It unifies network inference with contagion modeling.

*How the paper uses it:* The paper proposes a nonparametric Bayesian framework to jointly infer network adjacency and contagion functions from binary time series.

▶ [Bayesian Networks](https://www.youtube.com/watch?v=TuGDMj43ehw) — Bert Huang · 11 years ago

### Paper authors talk *(the paper's own talk)*
A direct presentation by the paper's lead author explaining the motivation, methodology, and key results of reconstructing networks from simple and complex contagions, providing insights into the approach and findings in their own words.

*How the paper uses it:* This video features Dr. Nicholas Landry discussing the paper's main contributions and implications.

▶ [Reconstructing networks from simple & complex contagions🦠10 28 24  Dr Landry](https://www.youtube.com/watch?v=2NLksRqe2Kw) — Quantum Photonics Club · 1 year ago

## Already in your library

- [Reconstructing networks from simple and complex contagions - ArXiv:2405.00129](https://www.youtube.com/watch?v=DqtUw0--9pE) — also for: Reconstructing networks from simple and complex contagions (Laurent Hébert-Dufresne)
- [Mathematical Modeling of Epidemics. Lecture 1: basic SI/SIS ...](https://www.youtube.com/watch?v=IXkr0AsEh1w) — also for: Reconstructing networks from simple and complex contagions (Laurent Hébert-Dufresne)
