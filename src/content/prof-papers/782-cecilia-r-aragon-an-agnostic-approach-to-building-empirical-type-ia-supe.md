---
title: "782 · An Agnostic Approach To Building Empirical Type Ia Supernova Light Curves: Evidence for Intrinsic Chromatic Flux Variation using Nearby Supernova Factory Data — Cecilia R. Aragon"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-cecilia-r-aragon"
source_hash: "23948c75e157bb6a3f199bba1e2a4df547fe85ef5d220095bc028389b7b171f0"
sequence: 782
generator: "outreach-garden: managed"
---

# 782 · An Agnostic Approach To Building Empirical Type Ia Supernova Light Curves: Evidence for Intrinsic Chromatic Flux Variation using Nearby Supernova Factory Data

## At a glance

- **Professor:** Cecilia R. Aragon
- **Institution:** University of Washington
- **Paper:** [An Agnostic Approach To Building Empirical Type Ia Supernova Light Curves: Evidence for Intrinsic Chromatic Flux Variation using Nearby Supernova Factory Data](https://arxiv.org/pdf/2505.07880)
- **Authors:** Jared Hand, A. G. Kim, G. Aldering, P. Antilogus, C. Aragon, S. Bailey, C. Baltay, S. Bongard, K. Boone, C. Buton, Y. Copin, S. Dixon, D. Fouchez, E. Gangler, R. Gupta, B. Hayden, W. Hillebrandt, Mitchell Karmen, M. Kowalski, D. Küsters, P.-F. Léget, F. Mondon, J. Nordin, R. Pain, E. Pecontal, R. Pereira, S. Perlmutter, K. A. Ponder, D. Rabinowitz, M. Rigault, D. Rubin, K. Runge, C. Saunders, N. Suzuki, C. Tao, S. Taubenberger, R. C. Thomas, M. Vincenzi
- **Year:** 2025

## Paper overview

This paper presents a new empirical model for Type Ia supernova light curves that includes three chromatic flux variation templates: one that depends on time (phase-dependent) and two that do not (phase-independent). Unlike previous models, it does not assume any dust extinction model or intrinsic variability patterns. Using spectrophotometric data from the Nearby Supernova Factory, the model reveals that about 13% of the phase-independent flux variation is intrinsic to the supernovae and not due to dust. This approach improves understanding of supernova variability and could enhance cosmological measurements.

### Why it matters

**Research problem:** Existing empirical models for Type Ia supernovae either assume a dust extinction model or use a single phase-independent template that does not distinguish between intrinsic and extrinsic (dust-related) variability. This simplification may cause intrinsic variations to be misattributed, limiting the accuracy of supernova standardization and cosmological parameter estimation.

**Why it matters:** Type Ia supernovae are critical standard candles for measuring cosmological parameters, including dark energy. Improving the modeling of their light curves and color variations reduces systematic errors in cosmology. With upcoming surveys like LSST increasing data volume, better models that separate intrinsic and dust effects are essential to fully leverage the data and improve precision cosmology.

**Key contributions:**

- Introduction of a new SN Ia empirical model with two phase-independent chromatic flux variation templates, allowing separation of intrinsic and dust-like variability.
- Physics-agnostic modeling approach that does not assume dust extinction or intrinsic variability patterns.
- Use of Gaussian process mean predictors for temporal interpolation of light curves.
- Application of geometric algebra to analyze and interpret the phase-independent variation templates.
- Demonstration that about 13% of phase-independent flux variance is intrinsic and not dust-like.

## About the professor

**Cecilia R. Aragon** — Professor, University of Washington.

Research interests: human-centered data science, human-centered artificial intelligence, human-centered machine learning, human-computer interaction (HCI), computer-supported cooperative work (CSCW), visual analytics, accessible computing, aviation and astronautics sociotechnical systems, emotion in informal text communication (sentiment analysis in social media)

### Research links

- [Faculty/profile page](http://faculty.washington.edu/aragon)
- [Professor website](http://faculty.washington.edu/aragon/index.html)
- [Lab website](http://depts.washington.edu/hdsl/research/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian hierarchical modeling
**The paper assumes:** Bayesian hierarchical models, probabilistic programming, Hamiltonian Monte Carlo sampling, Gaussian processes
**Already in this field?** Skip this entirely if you already understand Bayesian hierarchical modeling and probabilistic inference methods including MCMC and Gaussian processes.

This background playlist selection focuses on Bayesian hierarchical modeling, which is central to understanding the empirical modeling approach used in the paper, including latent variable inference, Gaussian process interpolation, and Hamiltonian Monte Carlo sampling in Stan. The rigorous course provides a deep, structured foundation in Bayesian statistics with detailed coverage of hierarchical models and MCMC diagnostics, while the fast track offers a concise introduction to Bayesian hierarchical models and related concepts for quicker comprehension. Choose the rigorous course for thorough mastery or the fast track for a focused, efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [S22 MATH 347 Bayesian Statistics](https://www.youtube.com/playlist?list=PL_lWxa4iVNt2GBPOVZMVKD4jYl9Q7hs2K) — Jingchen (Monika) Hu · 73 videos · 20.1h across the first 60 episodes

**Watch only this:** Episodes 1-22, about 7.3 hours — covering Bayesian inference basics, priors and posteriors, Gaussian process interpolation concepts, and MCMC diagnostics, stopping after the episode on MCMC diagnostics (episode 22).

*Why it unblocks this paper:* This is a comprehensive university-level Bayesian statistics course by Jingchen (Monika) Hu, covering foundational Bayesian inference, hierarchical models, and MCMC methods, directly supporting understanding of the paper's complex Bayesian hierarchical model and Stan implementation.

*If you want all of it:* About 20.1 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Bayesian statistics](https://www.youtube.com/playlist?list=PLuHZxhktm95NFCbTkwY9Bi8eOB7kfJsqd) — abdulganiu sodiq · 29 videos · 8.9h across 29 episodes

**Watch only this:** Episodes 1-12, about 3.5 hours — covering Bayes rule, Bayesian parameter estimation, conjugacy, Monte Carlo integration, and an introduction to Bayesian hierarchical models, stopping after the hierarchical models episode.

*Why it unblocks this paper:* This short-form series by abdulganiu sodiq offers clear, concise explanations of Bayesian statistics including Bayesian hierarchical models and MCMC methods, providing a quick yet solid introduction to the key concepts needed to grasp the paper's methodology.

*If you want all of it:* About 8.9 hours across 29 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's novel empirical modeling of Type Ia supernova light curves, start with foundational knowledge of Gaussian process regression for time series interpolation, Hamiltonian Monte Carlo sampling for Bayesian inference, dust extinction models in astrophysics, and geometric algebra for data analysis interpretation. Then, focus on the core concept of empirical modeling of Type Ia supernova light curves, culminating with the authors' own talk or closely related expert talks on Type Ia supernovae light curves and spectra. This progression ensures a solid grasp of the statistical, astrophysical, and mathematical tools underpinning the paper before engaging with the specific empirical modeling advances.

### Gaussian process regression in time series *(prerequisite)*
The paper uses Gaussian process mean predictors to interpolate supernova light curves over time, a key statistical technique for modeling continuous time series data with uncertainty quantification. Understanding Gaussian processes and their application to time series forecasting provides the mathematical foundation for the paper's interpolation approach.

*How the paper uses it:* The model uses Gaussian process mean predictors for temporal interpolation of supernova light curves.

▶ [Gaussian Processes for Time Series Forecasting](https://www.youtube.com/watch?v=n42uQjhoS9g) — Fields Institute · 53:24 · 6y ago

### Hamiltonian Monte Carlo sampling *(prerequisite)*
Hamiltonian Monte Carlo (HMC) is a sophisticated Markov Chain Monte Carlo method used for efficient sampling of high-dimensional posterior distributions in Bayesian inference. The paper implements its model in Stan using HMC to fit complex empirical templates, so understanding HMC is crucial for grasping the model fitting and uncertainty estimation.

*How the paper uses it:* The model fitting uses Stan with Hamiltonian Monte Carlo for high-dimensional posterior sampling.

▶ [Michael Betancourt: Scalable Bayesian Inference with Hamiltonian Monte Carlo](https://www.youtube.com/watch?v=jUSZboSq1zg) — London Machine Learning Meetup · 53:20 · 8y ago

### Dust extinction models in astrophysics *(prerequisite)*
Dust extinction affects observed supernova fluxes and colors, complicating the separation of intrinsic and extrinsic variability. Familiarity with dust extinction physics and models like CCM89 is essential to appreciate the paper's agnostic approach that avoids assuming specific dust models and to understand the interpretation of dust-like versus intrinsic flux variation templates.

*How the paper uses it:* Understanding dust extinction is key to separating intrinsic and extrinsic flux variations in SN Ia.

▶ [Melanie Köhler - Dust evolution in the interstellar medium](https://www.youtube.com/watch?v=7cJkR_3N-2k) — AstronomyHeidelberg · 54:34 · 10y ago

### Geometric algebra in data analysis *(prerequisite)*
The paper applies geometric algebra to analyze and interpret the phase-independent chromatic flux variation templates, providing a mathematical framework to understand the geometry of variation spaces. Learning geometric algebra concepts helps in comprehending how the authors distinguish dust-like and intrinsic variation components.

*How the paper uses it:* Geometric algebra is applied to interpret phase-independent chromatic flux variation templates.

▶ [A Swift Introduction to Geometric Algebra](https://www.youtube.com/watch?v=60z_hpEAtD8) — sudgylacmoe · 44:23 · 6y ago

### Empirical modeling of Type Ia supernova light curves
This concept covers the core methodology of the paper: building empirical SN Ia light curve models that separate intrinsic and dust-related chromatic flux variations without assuming dust extinction models. Understanding existing empirical models, their limitations, and advances in modeling SN Ia light curves is critical to grasp the paper's contributions.

*How the paper uses it:* Central method of the paper is an empirical SN Ia light curve model separating intrinsic and dust effects.

▶ [Dan Kasen: Light curves and spectra of Type Ia SNe](https://www.youtube.com/watch?v=b_t23R4Xf6c) — Israel Institute for Advanced Studies · 1:25:57 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to modeling Type Ia supernova light curves, start by learning the basics of Gaussian process regression for time series interpolation, which is key to how the model handles temporal data. Next, grasp the fundamentals of dust extinction in astrophysics to appreciate the challenge of separating intrinsic supernova variability from dust effects. Then, study Hamiltonian Monte Carlo sampling to understand the Bayesian inference method used for model fitting. After that, explore geometric algebra as it is applied to interpret the chromatic flux variation templates. Finally, focus on empirical modeling of Type Ia supernova light curves to see how these concepts come together in the paper's novel model.

### Gaussian process regression in time series *(prerequisite)*
Gaussian process regression is a powerful, flexible method for modeling and interpolating time series data by defining distributions over functions. It allows smooth predictions with uncertainty estimates, which is essential for handling irregularly sampled supernova light curve data.

*How the paper uses it:* The paper uses Gaussian process mean predictors to interpolate supernova light curves over time without assuming a fixed parametric form.

▶ [Gaussian Processes for Time Series Forecasting](https://www.youtube.com/watch?v=n42uQjhoS9g) — Fields Institute · 53:24 · 6y ago

### Dust extinction models in astrophysics *(prerequisite)*
Dust extinction refers to how interstellar dust dims and reddens light from astronomical objects, complicating observations. Understanding dust extinction curves and their effects on observed spectra is crucial to disentangling intrinsic supernova properties from dust-induced variations.

*How the paper uses it:* Separating intrinsic supernova flux variations from dust extinction effects is a central challenge addressed by the paper's model.

▶ [ISM & Star Formation – Part 4: Interstellar Reddening & Extinction](https://www.youtube.com/watch?v=_TuUpCLT3Ko) — Astronomy with Anoush · 6:23 · 5y ago

### Hamiltonian Monte Carlo sampling *(prerequisite)*
Hamiltonian Monte Carlo (HMC) is an advanced Markov Chain Monte Carlo method that efficiently samples from complex, high-dimensional posterior distributions by leveraging gradient information. It enables robust Bayesian inference for models with many parameters.

*How the paper uses it:* The paper implements its empirical model in Stan and uses HMC to sample the high-dimensional posterior distribution of model parameters.

▶ [How Hamiltonian Monte Carlo Works | HMC Explained](https://www.youtube.com/watch?v=yRymPs9si6g) — stats 4 good · 8:38 · 1mo ago

### Geometric algebra in data analysis *(prerequisite)*
Geometric algebra provides a mathematical framework to represent and analyze geometric transformations and relationships in data. It can reveal structure in multi-dimensional variation spaces, aiding interpretation of complex data patterns.

*How the paper uses it:* The authors apply geometric algebra to analyze and interpret the phase-independent chromatic flux variation templates in their model.

▶ [A Swift Introduction to Geometric Algebra](https://www.youtube.com/watch?v=60z_hpEAtD8) — sudgylacmoe · 44:23 · 6y ago

### Empirical modeling of Type Ia supernova light curves
Empirical modeling of Type Ia supernova light curves involves creating data-driven representations of their brightness and color evolution over time, crucial for standardizing them as cosmological distance indicators. Understanding these models helps grasp how intrinsic and extrinsic variations affect measurements.

*How the paper uses it:* The paper introduces a novel empirical SN Ia light curve model that separates intrinsic and dust-like chromatic flux variations without assuming dust extinction models.

▶ [How Do You Solve a Problem Like (Photometric) Supernovae? - Renée Hložek](https://www.youtube.com/watch?v=WuiBKpt_yF8) — Institute for Advanced Study · 53:52 · 6y ago

## Already in your library

- [Machine Learning Lecture 26 "Gaussian Processes" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=R-NUdqxKjos) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Easy introduction to gaussian process regression (uncertainty models)](https://www.youtube.com/watch?v=iDzaoEwd0N0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Gaussian Processes : Data Science Concepts](https://www.youtube.com/watch?v=HA-VHNVbvwQ) — also for: Bayesian functional data analysis in astronomy (Tamás Budavári)
- [The Convergence of Hamiltonian Monte Carlo](https://www.youtube.com/watch?v=JHW3Qyma6S0) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)
- [Markov Chain Monte Carlo Explained in 10 Minutes](https://www.youtube.com/watch?v=3qodjHRUxAo) — also for: Taming Imperfect Process Verifiers: A Sampling Perspective on Backtracking (Ankur Moitra)
- [The intuition behind the Hamiltonian Monte Carlo algorithm](https://www.youtube.com/watch?v=a-wydhEuAm0) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)
- [What is algebraic geometry?](https://www.youtube.com/watch?v=MflpyJwhMhQ) — also for: Angular Constraints on Planar Frameworks (Meera Sitharam)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to engage with the paper's novel empirical modeling of Type Ia supernova light curves. Starting with a focused reproduction of Gaussian process interpolation for light curve data, you then implement the core model's phase-independent chromatic flux variation templates on a smaller dataset. Finally, you extend the model to address one of the paper's limitations by improving model stability and convergence with outlier handling strategies.

### Beginner — Gaussian Process Interpolation of SN Ia Light Curves
*Effort: a weekend, ~8 hours*

You build a Python script that performs Gaussian process mean prediction interpolation on simplified synthetic or publicly available SN Ia light curve data, mimicking the paper's temporal interpolation method. This project focuses on implementing the Gaussian process kernel and predicting flux values at unobserved phases.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's interpolation technique, a foundational step for modeling SN Ia light curves without assuming dust extinction or intrinsic variability patterns.

**Grounded in:** The interpolation is controlled by a kernel K... This equation is the same used to predict the mean in a Gaussian process, so we refer to this interpolation scheme as the Gaussian Process Mean Predictor (GPMP).

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, scikit-learn

**Data:** Use a small synthetic SN Ia light curve dataset generated by sampling a known function with noise or a publicly available SN Ia light curve subset from the Nearby Supernova Factory data if accessible; otherwise simulate data resembling the paper's description.

**Build it:**

1. Implement a Gaussian process regression function with a squared exponential kernel in Python.
2. Generate or load a small SN Ia light curve dataset with flux measurements at discrete phases.
3. Use the Gaussian process mean predictor to interpolate flux values at unobserved phases.
4. Visualize the original data points and the interpolated light curve with uncertainty bands.
5. Document the code and explain how this interpolation relates to the paper's GPMP method.

**Ships as:** A GitHub repository with Python code that interpolates SN Ia light curves using Gaussian processes, plots showing interpolation results, and a README explaining the connection to the paper's interpolation approach.

**Stretch goal:** Add kernel hyperparameter tuning to optimize interpolation quality and compare results with linear interpolation.

### Intermediate — Reimplementation of Phase-Independent Chromatic Flux Variation Templates
*Effort: 2 weekends, ~20 hours*

You reimplement the core empirical model from the paper that fits two phase-independent chromatic flux variation templates plus one phase-dependent template to SN Ia light curve data. You train the model on a smaller or publicly available SN Ia spectrophotometric dataset, using Gaussian process interpolation and Hamiltonian Monte Carlo sampling (via PyStan or CmdStanPy). You compare your results to a simple baseline model with a single phase-independent template.

**Why it shows you understood the paper:** This project shows you can translate the paper's novel modeling approach into working code, capturing the intrinsic and dust-like variability separation and reproducing key metrics such as the variance explained by each template.

**Grounded in:** We present a new empirical type Ia supernova (SN Ia) model with three chromatic flux variation templates: one phase-dependent and two phase-independent... Previous empirical SN Ia models either assume an effective dust extinction recipe in their architecture, or only allow for a single mode of phase-independent variation.

**Tech stack:** Python 3.11, numpy, pandas, matplotlib, PyStan or CmdStanPy, scikit-learn

**Data:** Use a smaller publicly available SN Ia spectrophotometric time series dataset or a subset of the Nearby Supernova Factory data if accessible; otherwise simulate simplified data capturing flux variations over phases and wavelengths.

**Build it:**

1. Implement Gaussian process interpolation for temporal flux data as in the beginner project.
2. Define a model with three chromatic flux variation templates: one phase-dependent and two phase-independent.
3. Implement Hamiltonian Monte Carlo sampling using PyStan or CmdStanPy to fit the model parameters to the data.
4. Fit the model to the dataset and extract the phase-independent templates and per-supernova parameters.
5. Compare the two-template model's variance explained to a baseline single-template model.
6. Visualize the templates and report the fraction of phase-independent flux variance attributed to intrinsic variation.

**Ships as:** A GitHub repository containing the model implementation, fitting scripts, visualizations of the chromatic flux variation templates, comparison to baseline, and a README describing the methodology and results.

**Stretch goal:** Incorporate geometric algebra analysis of the phase-independent templates using the 'clifford' Python library to interpret template orientations.

### Advanced — Improving Model Stability and Outlier Handling in SN Ia Light Curve Modeling
*Effort: 3+ weeks*

You extend the empirical SN Ia light curve model by implementing strategies to detect and mitigate the influence of less representative or outlier supernovae that cause convergence issues, as noted in the paper. This may include robust Bayesian hierarchical modeling, outlier-aware priors, or iterative outlier removal. You evaluate the impact on model convergence and template stability using a diverse SN Ia dataset.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, demonstrating your ability to critically engage with and improve upon the paper's methodology, potentially enabling more robust cosmological inferences.

**Grounded in:** In training, the samplers converge to one of three sets of very similar solutions... We find that simultaneously obtaining global template and per-SN parameters leaves the resulting samplers sensitive to the three least representative SNe Ia in the training sample.

**Tech stack:** Python 3.11, numpy, pandas, matplotlib, PyStan or CmdStanPy, scikit-learn, arviz

**Data:** Use a larger and more diverse SN Ia spectrophotometric dataset if accessible, or simulate data including outlier supernovae with atypical flux variations to test robustness.

**Build it:**

1. Reimplement the baseline empirical SN Ia model with three chromatic flux variation templates and HMC sampling.
2. Analyze sampler convergence and identify supernovae causing instability or multimodal solutions.
3. Implement outlier detection methods such as robust priors, hierarchical modeling, or iterative reweighting.
4. Refit the model with outlier handling and compare convergence diagnostics and template stability.
5. Visualize the effect of outlier mitigation on phase-independent templates and per-supernova parameters.
6. Document the methodology, challenges, and improvements over the baseline model.

**Ships as:** A GitHub repository with the extended model code, convergence analyses, visualizations of outlier effects and mitigations, and a detailed README discussing the improvements and remaining challenges.

**Stretch goal:** Incorporate a hierarchical Bayesian dust extinction model to further disentangle intrinsic and extrinsic variability as a next step.

_No authors' released code or direct access to the Nearby Supernova Factory dataset is available; projects rely on public or simulated SN Ia data approximating the paper's descriptions._
