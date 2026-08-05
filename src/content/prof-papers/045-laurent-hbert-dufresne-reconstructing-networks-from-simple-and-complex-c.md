---
title: "045 · Reconstructing networks from simple and complex contagions — Laurent Hébert-Dufresne"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-laurent-hebert-dufresne"
source_hash: "4f3420bbd857ea89efc7f1bb7836ddb44b9f121f944d37faba08e2960d44842f"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's novel Bayesian network reconstruction method from contagion data. The beginner project reproduces a key simulation metric from the paper using synthetic contagion data and simple MCMC sampling. The intermediate project implements the core nonparametric Bayesian inference method described in the paper on synthetic data, comparing simple versus complex contagion models. The advanced project extends the method to incorporate a more realistic structured network prior, addressing a stated limitation and exploring its impact on reconstruction accuracy.

### Beginner — Simulate Simple and Complex Contagions and Measure Reconstruction Accuracy
*Effort: a weekend, ~8 hours*

You build a Python script to simulate contagion spreading on small synthetic networks (e.g., Erdős-Rényi graphs) under both simple and complex contagion rules. Then you implement a basic MCMC edge-flip sampler to reconstruct the network adjacency matrix from the simulated binary infection time series and compute AUROC as the reconstruction accuracy metric.

**Why it shows you understood the paper:** This project shows you understand the contagion dynamics and the evaluation metric (AUROC) used in the paper, as well as the basic idea of Bayesian network reconstruction via MCMC sampling.

**Grounded in:** ‘Network reconstruction accuracy (measured by AUROC) improves with more data and saturates near perfect recovery for both simple and complex contagions.’

**Tech stack:** Python 3.11, NumPy, NetworkX, Matplotlib

**Data:** Synthetic contagion time series generated on Erdős-Rényi networks as described in the paper's simulation studies.

**Build it:**

1. Generate Erdős-Rényi random graphs with fixed node count and edge probability.
2. Simulate binary node infection time series under simple contagion (infection probability depends on any infected neighbor) and complex contagion (infection probability depends on multiple infected neighbors).
3. Implement a simple MCMC edge-flip sampler to propose network adjacency changes and accept/reject based on likelihood of observed contagion data.
4. Compute AUROC comparing inferred adjacency to true network edges.
5. Plot reconstruction accuracy versus data length or contagion parameters for both contagion types.

**Ships as:** A GitHub repo with scripts to simulate contagions, run MCMC reconstruction, and plot AUROC results replicating key trends from the paper.

**Stretch goal:** Add visualization of sampled posterior distributions over network edges to illustrate uncertainty.

### Intermediate — Reimplement Nonparametric Bayesian Network Reconstruction from Contagion Time Series
*Effort: 2 weekends, ~20 hours*

You implement the core nonparametric Bayesian framework from the paper to jointly infer network structure and contagion dynamics from binary node state time series. You apply it to synthetic contagion data on small networks and compare reconstruction accuracy of simple versus complex contagion models, reporting AUROC as in the paper.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main methodological contribution, including the flexible contagion function and MCMC sampling, and reproduce the key comparative results between contagion types.

**Grounded in:** ‘Developed a nonparametric Bayesian method to reconstruct networks and contagion dynamics simultaneously from binary node state time series.’ and ‘Complex contagions outperform simple contagions in reconstructing dense networks or when infection saturates.’

**Tech stack:** Python 3.11, NumPy, SciPy, NetworkX, Matplotlib

**Data:** Synthetic binary infection time series generated on Erdős-Rényi and small dense networks, simulating both simple and complex contagions as per paper descriptions.

**Build it:**

1. Implement the neighborhood-based SIS contagion model allowing arbitrary contagion functions dependent on number of infected neighbors.
2. Define beta priors for contagion parameters and Erdős-Rényi prior for network edges.
3. Implement MCMC sampling with edge-flip proposals to jointly sample network adjacency and contagion parameters.
4. Run inference on synthetic contagion time series data generated for both simple and complex contagions.
5. Calculate AUROC for inferred networks compared to ground truth and compare performance between contagion types.
6. Visualize posterior distributions and reconstruction accuracy metrics replicating paper figures.

**Ships as:** A GitHub repo with a documented implementation of the paper's Bayesian reconstruction method and scripts reproducing key comparative results on synthetic data.

**Stretch goal:** Extend the method to run on a small real-world social network contagion dataset (e.g., publicly available SIS epidemic data) to test practical applicability.

### Advanced — Incorporate Structured Network Priors into Bayesian Reconstruction to Improve Accuracy
*Effort: 3+ weeks, ~60+ hours*

You extend the paper's Bayesian reconstruction framework by replacing the simplistic Erdős-Rényi network prior with a more realistic structured prior, such as a stochastic block model or power-law degree prior. You evaluate how this affects reconstruction accuracy on synthetic contagion data, addressing a key limitation noted by the authors.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the Bayesian framework and network modeling, and the ability to innovate beyond the original method.

**Grounded in:** ‘Network priors are simplistic (Erdős-Rényi), which may limit inference accuracy on highly structured networks.’ and ‘Incorporate more realistic and structured network priors beyond Erdős-Rényi models.’

**Tech stack:** Python 3.11, NumPy, SciPy, NetworkX, Matplotlib, PyMC3 or Pyro (optional for advanced Bayesian modeling)

**Data:** Synthetic contagion time series generated on networks with community structure or power-law degree distributions, as described in the paper's simulation studies.

**Build it:**

1. Implement or integrate a structured network prior such as a stochastic block model or power-law degree prior into the Bayesian framework.
2. Modify the MCMC sampler to incorporate the new prior in edge proposal acceptance probabilities.
3. Generate synthetic contagion data on networks with corresponding structure (e.g., stochastic block networks).
4. Run joint inference of network and contagion parameters using the extended model.
5. Compare reconstruction accuracy (AUROC) against the original Erdős-Rényi prior baseline.
6. Analyze and visualize how structured priors improve recovery of network features and contagion dynamics.

**Ships as:** A GitHub repo with an extended Bayesian reconstruction implementation including structured network priors, evaluation scripts, and detailed README discussing improvements and limitations.

**Stretch goal:** Experiment with improved MCMC sampling algorithms (e.g., parallel tempering) to address multimodality and rugged likelihood landscapes.
