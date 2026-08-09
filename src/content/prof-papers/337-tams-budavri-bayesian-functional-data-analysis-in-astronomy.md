---
title: "337 · Bayesian functional data analysis in astronomy — Tamás Budavári"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tamas-budavari"
source_hash: "c138e8614dd225f8cdd85c17d82860ed27fa295c6399ec4b8ed01424a1e1155c"
sequence: 337
generator: "outreach-garden: managed"
---

# 337 · Bayesian functional data analysis in astronomy

## At a glance

- **Professor:** Tamás Budavári
- **Institution:** Johns Hopkins University
- **Paper:** [Bayesian functional data analysis in astronomy](https://arxiv.org/abs/2408.14466v1)
- **Authors:** Thomas Loredo, Tamás Budavári, David Kent, David Ruppert
- **Year:** 2024

## Paper overview

This paper discusses how modern astronomy is producing large collections of complex data that are best understood as functions, such as light curves and spectra, rather than simple fixed-length vectors. It introduces Bayesian functional data analysis (FDA) as a powerful statistical framework to model these functional data, addressing challenges like irregular sampling and measurement errors. The authors illustrate FDA applications in astronomy, including a novel low-dimensional model for galaxy spectra that can improve photometric redshift estimation, crucial for understanding the universe's structure.

### Why it matters

**Research problem:** Astronomical data have evolved from fixed-length tabular catalogs to complex functional data like light curves and spectra, which pose statistical challenges due to irregular sampling, heteroscedastic noise, and high dimensionality. Existing methods are insufficient for accurate, scalable analysis of these large functional datasets.

**Why it matters:** Accurate analysis of functional astronomical data is essential for cosmic demographics, understanding galaxy evolution, and cosmology. For example, precise photometric redshift estimation for hundreds of millions of galaxies is critical for upcoming surveys like LSST. Current physical models are too slow and complex, and black-box machine learning lacks accuracy, necessitating new FDA methods.

**Key contributions:**

- Overview of functional data analysis tailored to astronomical data challenges.
- Development of Bayesian FDA methods for irregular, noisy, and incomplete functional data.
- Introduction of the Splines-n-Lines (SnL) model for high-dimensional galaxy spectra as a Gaussian process.
- Application of manifold learning (PHATE) to derive a low-dimensional embedding of galaxy SEDs.
- Construction of a parametric inverse map from manifold coordinates to spectra for simulation and photometric redshift estimation.

## About the professor

**Tamás Budavári** — Professor, Department of Applied Mathematics and Statistics, Johns Hopkins University.

Research interests: Computational statistics, Bayesian inference, Low-dimensional embeddings, Streaming algorithms, Parallel processing on GPUs, Scientific databases, Survey astronomy

### Research links

- [Faculty/profile page](https://engineering.jhu.edu/ams/faculty/tamas-budavari)
- [Google Scholar](https://scholar.google.com/citations?user=VoyeryMAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper "Bayesian functional data analysis in astronomy," start with foundational concepts including Gaussian processes and hierarchical Bayesian modeling, which underpin the statistical framework used. Then study manifold learning with the PHATE algorithm to grasp the dimension reduction approach applied to galaxy spectra. Finally, focus on the paper authors' own talk by Tom Loredo on hierarchical Bayesian modeling, which provides direct insight into the Bayesian methods central to the paper.

### Gaussian processes for functional data *(prerequisite)*
Gaussian processes are a key modeling tool for representing smooth functions with uncertainty, crucial for modeling galaxy spectra as functional data. Understanding Gaussian processes provides the mathematical and statistical foundation for the Splines-n-Lines (SnL) model introduced in the paper.

*How the paper uses it:* The paper models galaxy spectra as a nonstationary Gaussian process with a complex covariance structure using the SnL model.

▶ [ML Tutorial: Gaussian Processes (Richard Turner)](https://www.youtube.com/watch?v=92-98SYOdlY) — Marc Deisenroth · 1:53:32

### Hierarchical Bayesian modeling *(prerequisite)*
Hierarchical Bayesian models provide a framework for modeling populations of functions with measurement error and missing data, addressing challenges in astronomical functional data. This framework is essential to understand the Bayesian FDA approach advocated in the paper.

*How the paper uses it:* The paper uses hierarchical Bayesian models to handle irregular sampling, heteroscedastic noise, and incomplete data in astronomical functional data.

▶ [Bayesian Hierarchical Models](https://www.youtube.com/watch?v=zoSk9_5ow3U) — NEON Science · 49:19

### Manifold learning PHATE algorithm *(prerequisite)*
Manifold learning techniques like PHATE are used to discover low-dimensional structures in high-dimensional data, enabling efficient representation and analysis. Understanding PHATE is important to grasp how the paper derives a low-dimensional embedding of galaxy spectral energy distributions.

*How the paper uses it:* The paper applies PHATE manifold learning to reveal a 3D manifold structure in the galaxy SED population space.

▶ [Manifold Learning Yields Insight into Complex Biological State ...](https://www.youtube.com/watch?v=E-5AXUrdW2c) — Microsoft Research · 1:03:36

### Paper authors' talk *(the paper's own talk)*
The authors' own talk provides direct presentation of their Bayesian hierarchical modeling approach and insights into the statistical challenges and solutions for astronomical functional data. This talk offers the most precise and authoritative explanation of the methods and results in the paper.

*How the paper uses it:* Tom Loredo, a co-author, presents hierarchical Bayesian modeling relevant to the paper's methodology.

▶ [19 Oct 2016, ASTRO Class, Tom Loredo, “Hierarchical Bayesian Modeling”](https://www.youtube.com/watch?v=EX8O0-pPu1Q) — SAMSI Institute · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in Bayesian statistics and functional data analysis, then builds up to specialized methods used in the paper such as Gaussian processes, hierarchical Bayesian modeling, manifold learning with PHATE, and finally Bayesian functional data analysis as applied to astronomical spectra. The sequence starts with intuitive Bayesian basics, then explains functional data and Gaussian processes, followed by hierarchical models and manifold learning, culminating in the core Bayesian FDA framework used in the paper.

### Bayesian functional data analysis
Learn what functional data analysis (FDA) is—an approach to analyze data that are functions rather than fixed-length vectors—and how Bayesian methods provide a principled framework to model uncertainty and irregularities in such data. This sets the stage for understanding how complex astronomical data like spectra and light curves can be modeled statistically.

*How the paper uses it:* Bayesian FDA is the central statistical framework used to model irregular, noisy, and incomplete astronomical functional data in the paper.

▶ [What is functional data analysis?](https://www.youtube.com/watch?v=U2TvHLA18lo) — Very Normal · 2 years ago

### Introduction to Bayesian statistics *(prerequisite)*
Understand the basic concepts of Bayesian statistics, including prior, likelihood, and posterior distributions, through intuitive examples like coin tosses. This foundation is essential to grasp how Bayesian inference updates beliefs with data, a key idea underlying the paper's methodology.

*How the paper uses it:* The paper uses Bayesian hierarchical models and Gaussian processes, which rely on Bayesian inference principles.

▶ [Introduction to Bayesian statistics, part 1: The basic concepts](https://www.youtube.com/watch?v=0F0QoMCSKJ4) — StataCorp LLC · 9:12

### Functional Data Explained in Less Than 5 Minutes *(the paper's own talk)*
This concise video explains what functional data are and why traditional methods fall short, emphasizing the need for specialized FDA techniques. It builds intuition about analyzing data that vary continuously, like spectra, which is crucial before diving into Bayesian FDA.

*How the paper uses it:* The paper treats astronomical spectra and light curves as functional data requiring FDA methods.

▶ [Functional Data Explained in Less Than 5 Minutes](https://www.youtube.com/watch?v=CvhiXRcK64M) — Stats Like Jazz · 4:52

### Gaussian processes for functional data *(prerequisite)*
Gaussian processes (GPs) model functions as distributions over functions, providing smooth predictions with uncertainty quantification. This video builds intuition on how GPs can represent complex functional data like galaxy spectra, a key modeling tool in the paper.

*How the paper uses it:* The paper models galaxy spectra as nonstationary Gaussian processes using the Splines-n-Lines model.

▶ [Gaussian Processes : Data Science Concepts](https://www.youtube.com/watch?v=HA-VHNVbvwQ) — ritvikmath · 24:47

### Hierarchical Bayesian modeling *(prerequisite)*
Hierarchical Bayesian models allow modeling populations of related functions or parameters, capturing variability and measurement error at multiple levels. This framework is essential for handling the population-level modeling of galaxy spectra with noisy and incomplete data.

*How the paper uses it:* The paper uses hierarchical Bayesian models to represent populations of galaxy spectra with measurement uncertainties.

▶ [Bayesian Hierarchical Models](https://www.youtube.com/watch?v=zoSk9_5ow3U) — NEON Science · 49:19

### Manifold learning PHATE algorithm *(prerequisite)*
Manifold learning techniques like PHATE discover low-dimensional structures embedded in high-dimensional data, helping to visualize and model complex datasets. This video explains PHATE's role in uncovering the intrinsic 3D manifold structure of galaxy spectral energy distributions.

*How the paper uses it:* The paper applies PHATE to reveal a low-dimensional manifold structure in the galaxy spectral population.

▶ [Visualizing Data with PHATE | Unsupervised Learning for Big Data](https://www.youtube.com/watch?v=A7IkWk_X0Tc) — Krishnaswamy Lab · 4 years ago

### Bayesian functional data analysis
This longer lecture covers Bayesian FDA in depth, including hierarchical modeling and Gaussian processes for functional data, tying together all prior concepts. It provides a comprehensive understanding of the statistical framework the paper advocates for analyzing astronomical functional data.

*How the paper uses it:* This is the core statistical framework developed and applied in the paper for modeling and inference on astronomical functional data.

▶ [Part 1/2 of lecture on Chapter 1 of Introduction to Bayesian ...](https://www.youtube.com/watch?v=vE85V7zsksc) — Shravan Vasishth · 1:10:48

## Already in your library

- [Understanding Gaussian Processes | Part 1 - What are ...](https://www.youtube.com/watch?v=71e6xfxrIRs) — also for: Comprehensive profiling of chromatin occupancy dynamics through the cell cycle (Alexander J. Hartemink)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Bayesian functional data analysis (FDA) in astronomy as presented in the paper. The beginner project focuses on grasping Gaussian processes for functional data by denoising and interpolating a simple synthetic spectrum. The intermediate project implements a simplified version of the Splines-n-Lines (SnL) model on publicly available galaxy spectra data to reproduce denoising and interpolation with uncertainty quantification. The advanced project extends the Bayesian FDA framework to multi-wavelength spectral data, addressing one of the paper's future directions and limitations, showcasing your ability to adapt and scale the methodology.

### Beginner — Gaussian Process Denoising and Interpolation of Synthetic Galaxy Spectra
*Effort: a weekend, ~8 hours*

You build a Python notebook that uses Gaussian processes to denoise and interpolate a synthetic galaxy spectrum sampled irregularly with added noise. This reproduces the core idea of modeling spectra as functions with uncertainty, handling irregular sampling and noise.

**Why it shows you understood the paper:** This project shows you understand Gaussian processes for functional data and their application to noisy, irregularly sampled spectra, a foundational concept in the paper's SnL model.

**Grounded in:** Key contribution: 'SnL model successfully denoises, interpolates, and extrapolates incomplete galaxy spectra with uncertainty quantification.'

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, scikit-learn (GaussianProcessRegressor)

**Data:** Synthetic galaxy spectrum generated by sampling a smooth function with added Gaussian noise and irregular wavelength points to simulate observational conditions.

**Build it:**

1. Generate a synthetic galaxy spectrum as a smooth function over wavelength with added Gaussian noise.
2. Sample the spectrum at irregular wavelength points to simulate sparse observations.
3. Use scikit-learn's GaussianProcessRegressor to fit the noisy, irregularly sampled data.
4. Predict the denoised and interpolated spectrum over a fine wavelength grid with uncertainty estimates.
5. Plot the original noisy samples, the true underlying function, and the GP mean with confidence intervals.

**Ships as:** A Jupyter notebook demonstrating Gaussian process denoising and interpolation of synthetic galaxy spectra with plots and uncertainty visualization.

**Stretch goal:** Add heteroscedastic noise modeling by varying noise levels across wavelengths to better mimic astronomical measurement errors.

### Intermediate — Reimplementation of the Splines-n-Lines Model on SDSS Galaxy Spectra
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the SnL model by representing galaxy spectra from the Sloan Digital Sky Survey (SDSS) as a combination of B-spline basis for continuum and Gaussian line components. You fit a hierarchical Bayesian model using Gaussian processes to denoise and interpolate spectra, then compare results to a simple spline interpolation baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core SnL model methodology on real astronomical data, including hierarchical Bayesian modeling and uncertainty quantification, validating the approach against a baseline.

**Grounded in:** Key contribution: 'Development of Bayesian FDA methods for irregular, noisy, and incomplete functional data.' and 'The Splines-n-Lines (SnL) model represents galaxy spectra as a nonstationary Gaussian process with a complex covariance structure.'

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, pymc3 or pymc, astropy

**Data:** Publicly available SDSS optical galaxy spectra (downloaded from SDSS DR16 or later), used as a substitute for the paper's galaxy spectral data.

**Build it:**

1. Download a sample of SDSS galaxy spectra with irregular wavelength coverage and measurement errors.
2. Implement B-spline basis functions for the continuum and Gaussian basis functions for emission/absorption lines.
3. Construct a hierarchical Bayesian model with priors on basis coefficients representing the SnL model structure.
4. Use pymc3 to fit the model to observed spectra, performing denoising and interpolation with uncertainty quantification.
5. Compare the SnL model results to a simple spline interpolation baseline by plotting fits and computing reconstruction errors.

**Ships as:** A Jupyter notebook or Python package that fits the SnL model to SDSS spectra, visualizes denoised spectra with uncertainties, and compares to baseline interpolation.

**Stretch goal:** Incorporate a low-dimensional embedding of spectra using PHATE or PCA and visualize the manifold structure of the spectral population.

### Advanced — Extending Bayesian FDA to Multi-Wavelength Galaxy Spectra for Photometric Redshift Estimation
*Effort: 3+ weeks*

You develop an extension of the Bayesian FDA framework to jointly model multi-wavelength galaxy spectra (e.g., optical plus near-infrared) using a hierarchical Gaussian process model. You implement a parametric inverse map from low-dimensional manifold coordinates to spectra, enabling fast photometric redshift estimation on a multi-band photometric dataset.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by extending FDA methods beyond optical spectra to multi-wavelength data, demonstrating your ability to innovate and scale Bayesian FDA for upcoming large surveys.

**Grounded in:** Limitation: 'Current models focus on optical spectra; extension to other wavelengths and data types is needed.' and Future direction: 'Extension of FDA methods to dynamic spectra, images, and multivariate functional data.'

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, pymc3 or pymc, scikit-learn, phate

**Data:** Simulated or publicly available multi-band photometric data combined with optical spectra from SDSS or similar surveys; if unavailable, simulate multi-wavelength spectra by extending synthetic data with wavelength-dependent features.

**Build it:**

1. Collect or simulate multi-wavelength galaxy spectral data covering optical and near-infrared bands with associated photometric measurements.
2. Extend the SnL Gaussian process model to jointly model multiple wavelength ranges with a multivariate covariance structure.
3. Apply PHATE manifold learning to derive a low-dimensional embedding of the multi-wavelength spectral population.
4. Develop a parametric inverse map from manifold coordinates to spectra using function-on-vector regression.
5. Implement a photometric redshift estimation algorithm using the parametric model to fit multi-band photometric data.
6. Evaluate the method's accuracy and computational efficiency compared to a baseline photometric redshift estimator.

**Ships as:** A comprehensive codebase and report demonstrating multi-wavelength Bayesian FDA modeling, manifold embedding, and photometric redshift estimation with evaluation results.

**Stretch goal:** Integrate physical galaxy evolution models or machine learning methods to improve parameter inference and reduce degeneracies.
