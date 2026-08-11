---
title: "363 · Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates — Matthew Berger"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-matthew-berger"
source_hash: "26a19343d49692115fe5862e54792bee62163d9a87e5848dc47b834b6d7e5b80"
sequence: 363
generator: "outreach-garden: managed"
---

# 363 · Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates

## At a glance

- **Professor:** Matthew Berger
- **Institution:** Vanderbilt University
- **Paper:** [Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates](https://arxiv.org/abs/2508.13088v1)
- **Authors:** Xiaohan Wang, Zhimin Li, Joshua A. Levine, Matthew Berger
- **Year:** 2025

## Paper overview

This paper presents a method to model and visualize the distribution of input parameters that produce a specified feature in simulation outputs using neural surrogate models. Instead of finding just a few optimal parameters, the approach captures a broader set of plausible parameters, accounting for surrogate model errors and enabling interactive exploration through Bayesian inference and Hamiltonian Monte Carlo sampling. The method is demonstrated on fluid flow and aerodynamic simulations with a visual interface to aid parameter space understanding.

### Why it matters

**Research problem:** Traditional simulation workflows are computationally expensive, and surrogate models approximate the mapping from input parameters to simulation outputs. While surrogates help with forward problems, inverse problems—finding input parameters that produce a desired output feature—are challenging, especially in high-dimensional spaces. Existing methods focus on a small set of optimal parameters, missing the broader distribution of plausible parameters and not accounting well for surrogate model errors.

**Why it matters:** Understanding the full distribution of input parameters that yield a desired output feature is valuable for scientific and engineering design, enabling better insight into parameter relationships, uncertainty, and robustness. Interactive exploration of these distributions can guide decision-making and design optimization without costly simulations.

**Key contributions:**

- A method for density estimation in neural field surrogates to model surrogate error efficiently and predictively.
- A Bayesian framework combining the prior and feature likelihood to sample plausible parameter configurations from the posterior using Hamiltonian Monte Carlo.
- A visualization design that enables interactive, feature-driven exploration of parameter spaces and comparison of multiple features.
- Demonstration of the method on three simulation datasets with varying parameter dimensionality, showing practical usability and insights.

## About the professor

**Matthew Berger** — Professor of Biomedical Engineering, Professor of Electrical and Computer Engineering, Professor of Ophthalmology & Visual Sciences, Biomedical Engineering, Electrical and Computer Engineering, Ophthalmology & Visual Sciences, Vanderbilt University.

Research interests: biomedical optics, microfluidics, point of care diagnostics

### Research links

- [Faculty/profile page](https://engineering.vanderbilt.edu/bio/matthew-berger)
- [Identity evidence](https://engineering.vanderbilt.edu/bio/?pid=matthew-berger)
- [Identity evidence](https://matthewberger.github.io)
- [Professor website](https://lab.vanderbilt.edu/bowdenlab)
- [Resolved homepage](https://www.vanderbilt.edu/postdoc/prospective-postdocs/current-opportunities/?id=873)
- [Google Scholar](https://scholar.google.com/citations?user=hdkdN6oAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian inference and Hamiltonian Monte Carlo
**The paper assumes:** Bayesian inference, posterior sampling, Markov Chain Monte Carlo, Hamiltonian Monte Carlo, probabilistic modeling
**Already in this field?** Skip this entirely if you already understand Bayesian statistics and have studied Hamiltonian Monte Carlo sampling methods in probabilistic modeling.

This background is focused on Bayesian inference and Hamiltonian Monte Carlo (HMC), which are central to the paper's methodology for sampling parameter distributions conditioned on features. The rigorous course option offers a deep, structured university-level introduction to Bayesian inference principles, while the fast track provides a concise, intuition-driven series specifically on Hamiltonian Monte Carlo to quickly grasp the key concepts and mechanics. Choose the course for a thorough foundation; choose the fast track for a focused, practical understanding of HMC relevant to the paper's sampling approach.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [SHOC603: Bayesian Inference](https://www.youtube.com/playlist?list=PL1KQspYAzJMHdMYZpPYgCJbDRpGGi4WBp) — Statistica Hub · 9 videos · 6.8h across 9 episodes

**Watch only this:** Lectures 1 through 8 (all 9 episodes), about 6.8 hours — these cover basics of probability, Bayesian framework, Bayes' rule for events and random variables, and problem tackling, providing a comprehensive foundation for the paper's Bayesian approach.

*Why it unblocks this paper:* This Statistica Hub course is a dedicated university-level Bayesian inference series covering foundational probability, Bayesian framework, and inference techniques, directly supporting understanding of the paper's Bayesian formulation and posterior sampling.

*If you want all of it:* 6.8 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hamiltonian Monte-Carlo videos](https://www.youtube.com/playlist?list=PLtBFFlSGg3jRMoCyvBGVvvITm40BzG54r) — David Hendriks · 7 videos · 6.6h across 7 episodes

**Watch only this:** Episodes 1, 2, 4, and 5 (4 episodes), about 3.7 hours — these cover efficient Bayesian inference with HMC, an accessible introduction, the HMC algorithm intuition, and scalable Bayesian inference, providing a focused understanding of HMC relevant to the paper.

*Why it unblocks this paper:* David Hendriks' playlist focuses specifically on Hamiltonian Monte Carlo with clear, intuition-first explanations, matching the paper's use of HMC for efficient posterior sampling and interactive exploration.

*If you want all of it:* 6.6 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates," start by building a solid foundation in Bayesian inference for inverse problems and Hamiltonian Monte Carlo (HMC) sampling, as these underpin the paper's core methodology. Next, study coordinate-based neural networks, specifically SIRENs, which are the surrogate models used. Finally, focus on the paper's central contribution: Bayesian density estimation with surrogate error modeling and interactive visualization, ideally through the authors' own talk if available.

### Bayesian inference for inverse problems *(prerequisite)*
Bayesian inference provides the theoretical framework for formulating inverse problems as posterior distributions over parameters given observed data or features. Understanding this framework is essential to grasp how the paper models parameter distributions conditioned on features and incorporates surrogate model uncertainty.

*How the paper uses it:* The paper formulates the inverse problem as sampling from a posterior distribution combining a prior on parameters and a likelihood on user-specified features using Bayesian inference.

▶ [Prof. Richard Nickl | Bayesian Inference for Non-linear Inverse Problems](https://www.youtube.com/watch?v=da9e053S-Qk) — INI Seminar Room 2 · 49:56 · 7mo ago

### Hamiltonian Monte Carlo sampling *(prerequisite)*
Hamiltonian Monte Carlo is an advanced Markov Chain Monte Carlo method that efficiently samples from complex posterior distributions, especially in high-dimensional spaces. Mastering HMC is crucial to understand how the paper achieves efficient and interactive sampling of parameter distributions.

*How the paper uses it:* The paper uses Hamiltonian Monte Carlo to sample from the posterior distribution of parameters given features, enabling efficient and interactive exploration.

▶ [The Convergence of Hamiltonian Monte Carlo](https://www.youtube.com/watch?v=JHW3Qyma6S0) — Simons Institute for the Theory of Computing · 8y ago

### Coordinate-based neural networks SIREN *(prerequisite)*
Coordinate-based neural networks like SIRENs represent continuous signals as neural implicit functions, which is key to the surrogate modeling approach in the paper. Understanding SIRENs helps in appreciating how the surrogate approximates simulation outputs and supports differentiable feature extraction.

*How the paper uses it:* The paper employs SIREN networks as coordinate-based neural surrogates to approximate simulation outputs for inverse problem solving.

▶ [SIREN: Implicit Neural Representations with Periodic Activation Functions (Paper Explained)](https://www.youtube.com/watch?v=Q5g3p9Zwjrk) — Yannic Kilcher · 6y ago

### Bayesian density estimation with surrogate error modeling
This concept covers the paper's novel method for modeling surrogate errors via density estimation to form a prior on parameters, which is combined with feature likelihoods in a Bayesian framework. Understanding this method is central to grasping how the paper improves inverse problem solutions and uncertainty quantification.

*How the paper uses it:* The paper's key contribution is a method for density estimation in neural field surrogates to model surrogate error and form priors on parameters for Bayesian inference.

▶ [Carl Henrik Ek - Modulated surrogate models for Bayesian Optimization](https://www.youtube.com/watch?v=08QFkQcSwS8) — Tübingen Machine Learning · 35:44 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts needed to understand the paper's method for exploring parameter distributions conditioned on features in neural surrogate models. Start with foundational Bayesian inference to grasp the framework for inverse problems, then learn Hamiltonian Monte Carlo for efficient sampling from complex distributions. Next, understand coordinate-based neural networks (SIRENs) as the surrogate model architecture. Finally, explore Bayesian density estimation with surrogate error modeling, the paper's core innovation for forming priors and modeling uncertainty.

### Bayesian inference for inverse problems *(prerequisite)*
Bayesian inference provides a principled way to update beliefs about unknown parameters based on observed data, combining prior knowledge with likelihoods. For inverse problems, it helps infer input parameters that produce desired outputs by sampling from the posterior distribution. Understanding this framework is essential to grasp how the paper formulates parameter estimation conditioned on features.

*How the paper uses it:* The paper uses a Bayesian framework combining a prior on parameters with a feature likelihood to sample from the posterior distribution.

▶ [L14.4 The Bayesian Inference Framework](https://www.youtube.com/watch?v=0w_4QcvBYII) — MIT OpenCourseWare · 9:48 · 8y ago

### Hamiltonian Monte Carlo sampling *(prerequisite)*
Hamiltonian Monte Carlo (HMC) is an advanced Markov Chain Monte Carlo method that uses concepts from physics to efficiently explore complex, high-dimensional probability distributions. It reduces random walk behavior and improves convergence speed, making it suitable for sampling from the posterior in Bayesian inference. Learning HMC helps understand how the paper achieves interactive, efficient sampling of parameter distributions.

*How the paper uses it:* The paper employs HMC to efficiently sample from the posterior distribution of parameters given the feature likelihood and prior.

▶ [The intuition behind the Hamiltonian Monte Carlo algorithm](https://www.youtube.com/watch?v=a-wydhEuAm0) — Ben Lambert · 8y ago

### Coordinate-based neural networks SIREN *(prerequisite)*
SIRENs are neural networks using periodic activation functions to represent signals as continuous functions of coordinates, enabling smooth and detailed implicit representations. They serve as surrogates approximating simulation outputs in the paper, mapping input parameters to vector fields. Understanding SIRENs clarifies the surrogate modeling approach used to replace expensive simulations.

*How the paper uses it:* The paper uses SIREN coordinate-based neural networks as surrogates to approximate simulation outputs from input parameters.

▶ [SIREN: Implicit Neural Representations with Periodic Activation Functions (Paper Explained)](https://www.youtube.com/watch?v=Q5g3p9Zwjrk) — Yannic Kilcher · 6y ago

## Already in your library

- [Computer Vision - Lecture 9.1 (Coordinate-based Networks ...](https://www.youtube.com/watch?v=r6n3tZJoTdI) — also for: Efficient Neural Representation of Volumetric Data using Coordinate-Based Networks (Sumanta N. Pattanaik)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and complexity to demonstrate understanding of the paper "Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates." The beginner project reproduces a core visualization concept using simple surrogate modeling and sampling. The intermediate project builds on the authors' released code to implement the Bayesian inference framework with Hamiltonian Monte Carlo sampling on a simulation dataset. The advanced project extends the method to address a stated limitation by adapting the Bayesian density estimation approach to handle non-differentiable features or higher-dimensional parameter spaces.

### Beginner — Simple Neural Surrogate and Parameter Sampling Visualization
*Effort: a weekend, ~8 hours*

You build a small neural surrogate model (e.g., a simple MLP) to approximate a scalar simulation output from 2-3 input parameters. Then, you implement a basic likelihood function for a user-specified differentiable feature (e.g., output value near a target) and sample plausible input parameters using simple Metropolis-Hastings MCMC. Finally, you create a scatterplot visualization of sampled parameter distributions conditioned on the feature.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of modeling parameter distributions conditioned on features using surrogate models and Bayesian sampling, as well as the importance of visualizing these distributions for interactive exploration.

**Grounded in:** The visualization interface reveals meaningful patterns such as density spread, parameter trends, and clusters in parameter space related to specified features.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, NumPy

**Data:** Synthetic scalar function data generated by you simulating a simple parameter-to-output mapping.

**Build it:**

1. Implement a small neural network surrogate to approximate a known scalar function of 2-3 parameters.
2. Define a feature likelihood function based on closeness of surrogate output to a target feature value.
3. Implement Metropolis-Hastings MCMC to sample input parameters from the posterior defined by the likelihood and a uniform prior.
4. Visualize the sampled parameter distributions using scatterplots and histograms.
5. Write a README explaining the surrogate, likelihood, sampling, and visualization.

**Ships as:** A GitHub repo with code to train the surrogate, run MCMC sampling, and visualize parameter distributions conditioned on a feature, plus a README explaining the approach.

**Stretch goal:** Add kernel density estimation to model surrogate error as a prior, improving sampling quality.

### Intermediate — Bayesian Parameter Distribution Sampling Using Authors' Code
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' released code from https://github.com/matthewberger/seeing-the-many to reproduce their Bayesian inference framework with Hamiltonian Monte Carlo sampling on one of their simulation datasets. You then implement a simple baseline sampling method (e.g., uniform random sampling) for comparison and quantitatively compare feature matching quality between the posterior samples and baseline.

**Why it shows you understood the paper:** This project shows you can work with the authors' neural surrogate and Bayesian sampling framework, understand the prior and likelihood construction, and evaluate the benefit of posterior sampling over naive baselines, demonstrating grasp of the paper's core method and results.

**Grounded in:** The Bayesian framework combines prior and likelihood to sample from the posterior using Hamiltonian Monte Carlo. Sampling from the posterior yields better feature matches than uniform random sampling.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Simulation datasets provided in the authors' GitHub repository at https://github.com/matthewberger/seeing-the-many

**Build it:**

1. Clone and set up the authors' repository and dependencies.
2. Run the provided scripts to train the SIREN surrogate on a chosen simulation dataset.
3. Use the authors' HMC sampling code to sample parameter distributions conditioned on a user-specified feature.
4. Implement uniform random sampling over the parameter space as a baseline.
5. Compare the feature matching quality of posterior samples vs. baseline samples using metrics reported in the paper.
6. Document your process, results, and insights in a Jupyter Notebook or README.

**Verified links from the paper:**

- <https://github.com/matthewberger/seeing-the-many> — released by the paper's authors

**Ships as:** A GitHub repo fork with runnable code reproducing the authors' Bayesian sampling, baseline comparison, and quantitative evaluation, plus documentation.

**Stretch goal:** Modify the prior construction to experiment with different kernel bandwidths or Fisher information approximations and observe effects on sampling.

### Advanced — Extending Bayesian Density Estimation to Non-Differentiable Features
*Effort: 3+ weeks*

You extend the paper's Bayesian density estimation and sampling framework to handle non-differentiable or more complex features in simulation outputs, addressing a stated limitation. This involves designing alternative likelihood formulations or surrogate feature approximations that do not require differentiability, integrating them into the HMC or alternative sampling methods, and demonstrating the approach on a simulation dataset with such features.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's Bayesian framework and its limitations, and the ability to innovate by adapting the method to a challenging new setting, potentially opening new application domains and research directions.

**Grounded in:** The approach currently focuses on vector field outputs and differentiable features; extension to other data types or non-differentiable features is not addressed.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook, Hamiltonian Monte Carlo libraries (e.g., PyMC3 or NumPyro)

**Data:** Use the authors' simulation datasets from https://github.com/matthewberger/seeing-the-many or simulate data with non-differentiable features (e.g., thresholded outputs).

**Build it:**

1. Study the authors' Bayesian framework and HMC sampling implementation in detail.
2. Identify or design non-differentiable features relevant to the simulation outputs.
3. Develop alternative likelihood functions or surrogate approximations that can handle non-differentiability.
4. Adapt or replace HMC sampling with methods suitable for the new likelihood (e.g., Metropolis-Hastings or surrogate gradient approximations).
5. Evaluate the extended method on a simulation dataset and compare with the original approach on differentiable features.
6. Document the methodology, challenges, results, and potential future improvements.

**Verified links from the paper:**

- <https://github.com/matthewberger/seeing-the-many> — released by the paper's authors

**Ships as:** A GitHub repo with code implementing the extended Bayesian sampling framework for non-differentiable features, example runs on simulation data, and a detailed README or notebook explaining the extension and results.

**Stretch goal:** Explore scalability of the extended method to higher-dimensional parameter spaces and integrate domain-specific constraints into the prior.

_The authors' repository at https://github.com/matthewberger/seeing-the-many must be accessible and contain the simulation datasets and code as described; if datasets are missing, synthetic or substitute data will be needed._
