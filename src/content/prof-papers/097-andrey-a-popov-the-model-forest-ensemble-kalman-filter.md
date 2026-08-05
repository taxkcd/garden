---
title: "097 · The Model Forest Ensemble Kalman Filter — Andrey A. Popov"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrey-a-popov"
source_hash: "523d24632a9e7f67e6e7fd1327247f062e37b7125df9dbd7333354566aa35e20"
sequence: 97
generator: "outreach-garden: managed"
---

# 097 · The Model Forest Ensemble Kalman Filter

## At a glance

- **Professor:** Andrey A. Popov
- **Institution:** University of Hawaii at Manoa
- **Paper:** [The Model Forest Ensemble Kalman Filter](https://doi.org/10.1137/25M1792943)
- **Authors:** Andrey A. Popov, Adrian Sandu
- **Year:** 2022

## Paper overview

This paper introduces a new data assimilation method called the Model Forest Ensemble Kalman Filter (MFEnKF), which generalizes existing multifidelity ensemble Kalman filters to work with collections of multiple simulation models organized as model trees and forests. This approach leverages both high fidelity and various low fidelity models to improve forecast accuracy while reducing computational cost. Numerical experiments with quasi-geostrophic equations and surrogate models demonstrate the method's effectiveness in reducing the number of expensive high fidelity model runs needed.

### Why it matters

**Research problem:** Traditional data assimilation methods typically use a single physics-driven model combined with observations to estimate the state of a natural process. However, multiple models of varying fidelity often exist for the same phenomenon, and organizing and utilizing these models effectively in data assimilation is challenging, especially when they cannot be arranged in a strict hierarchy.

**Why it matters:** Using multiple models can improve forecast accuracy and better represent uncertainty, especially when individual models have different biases or limitations. Efficiently combining these models can reduce computational costs and potentially replace assumptions about model error, which is crucial for operational forecasting in fields like climate science and aerospace.

**Key contributions:**

- Generalization of model hierarchies to model trees and model forests to represent collections of models that cannot be arranged linearly.
- Extension of the multifidelity ensemble Kalman filter to the model forest ensemble Kalman filter, enabling rigorous data assimilation with model forests.
- Development of a recursive linear control variate framework for model trees and forests with optimal gain computations.
- Numerical validation showing significant reduction in high fidelity model runs needed for accurate data assimilation.
- Demonstration that model forests can potentially replace model error assumptions by representing uncertainty through model ensembles.

## About the professor

**Andrey A. Popov** — Assistant Professor (US Citizen), Information and Computer Sciences, University of Hawaii at Manoa.

Research interests: fusing theory-driven and data-driven methods for scientific applications, data assimilation, and aerospace problems; directional statistics; geographic information systems

### Research links

- [Faculty/profile page](https://www2.hawaii.edu/~apopov)
- [Professor website](https://andreyapopov.scholar.st/cv)
- [Resolved homepage](https://andreyapopov.github.io/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=G0nqXfoAAAAJ&view_op=list_works)
- [ORCID](https://orcid.org/0000-0002-7726-6224)
- [ResearchGate](https://www.researchgate.net/profile/Andrey-Popov-5)
- [GitHub](https://github.com/AndreyAPopov)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Model Forest Ensemble Kalman Filter paper, start with foundational concepts including Ensemble Kalman Filters, multifidelity modeling, data assimilation with multiple models, and control variate methods in uncertainty quantification. These prerequisites provide the mathematical and methodological background necessary to grasp the paper's novel generalization. Finally, focus on the core concept of the Model Forest Ensemble Kalman Filter itself, prioritizing any direct talks by the authors or rigorous academic presentations.

### Ensemble Kalman Filter *(prerequisite)*
The Ensemble Kalman Filter (EnKF) is the fundamental data assimilation method underlying the paper's approach. Understanding its recursive filtering mechanism, ensemble representation of uncertainty, and update steps is essential before exploring multifidelity extensions.

*How the paper uses it:* The paper extends the multifidelity ensemble Kalman filter framework, which itself is based on the EnKF.

▶ [Building State-of-the-Art Forecast Systems with the Ensemble ...](https://www.youtube.com/watch?v=7QOfp4LL70I) — Greg Bronevetsky · 58:17

### Multifidelity Modeling *(prerequisite)*
Multifidelity modeling involves leveraging multiple simulation models of varying accuracy and computational cost to improve efficiency and accuracy. This concept is key to understanding how the paper generalizes multifidelity filtering to model forests.

*How the paper uses it:* The paper generalizes multifidelity ensemble Kalman filters to work with collections of multiple simulation models organized as model trees and forests.

▶ [ML & the Physical World 2024: Lecture 12 Multifidelity Models](https://www.youtube.com/watch?v=w9iVZfg7ONY) — Open Data Science Initiative · 49:17

### Data Assimilation with Multiple Models *(prerequisite)*
Data assimilation with multiple models addresses the challenge of combining information from competing or complementary models to improve state estimation. This background is crucial for appreciating the paper's approach to organizing models in forests rather than strict hierarchies.

*How the paper uses it:* The paper tackles the problem of effectively using multiple models that cannot be arranged in a strict hierarchy for data assimilation.

▶ [Data Assimilation lecture 1](https://www.youtube.com/watch?v=Pn3ffYPtzyE) — Nathan Kutz · 32:41

### Control Variate Methods in Uncertainty Quantification *(prerequisite)*
Control variate methods are mathematical techniques for variance reduction in Monte Carlo simulations and uncertainty quantification. The paper develops a recursive linear control variate framework for model trees and forests, making this concept foundational.

*How the paper uses it:* The paper extends the multifidelity ensemble Kalman filter using a generalized linear control variate theory to operate on model forests.

▶ [Alex Gorodetsky - Sampling algorithms for generalized model ...](https://www.youtube.com/watch?v=Em3Asw6PmtM) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 39:53

### Model Forest Ensemble Kalman Filter method
This is the core concept of the paper, generalizing multifidelity ensemble Kalman filtering to model forests. Understanding this method involves grasping how ensembles propagate through model trees and forests and how Kalman filter updates are performed with optimal gains.

*How the paper uses it:* The paper introduces and validates the Model Forest Ensemble Kalman Filter as a rigorous data assimilation method for collections of multiple simulation models.

▶ [Understanding the Ensemble Kalman Filter](https://www.youtube.com/watch?v=9zxdX_BqXOs) — Research Lounge · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the Model Forest Ensemble Kalman Filter paper, starting from the basics of data assimilation and the Ensemble Kalman Filter (EnKF), then covering multifidelity modeling and control variate methods for variance reduction, and culminating in the core idea of the paper: the Model Forest Ensemble Kalman Filter method. Each step builds intuition with clear, visual explanations to efficiently prepare a beginner for the paper's advanced contributions.

### Data Assimilation with Multiple Models *(prerequisite)*
Data assimilation is the process of combining model predictions with real-world observations to improve forecasts. Understanding how multiple competing models can be integrated in data assimilation provides essential context for why the paper develops a method to handle collections of models.

*How the paper uses it:* The paper addresses challenges in assimilating data using multiple models rather than a single one.

▶ [Data Assimilation lecture 1](https://www.youtube.com/watch?v=Pn3ffYPtzyE) — Nathan Kutz · 32:41

### Ensemble Kalman Filter *(prerequisite)*
The Ensemble Kalman Filter (EnKF) is a widely used data assimilation technique that uses an ensemble of model simulations to estimate the state of a system and its uncertainty. Learning the basics of EnKF is crucial since the paper extends this method to work with multiple models organized as forests.

*How the paper uses it:* The paper generalizes the multifidelity EnKF framework to model forests.

▶ [Visually Explained: Kalman Filters](https://www.youtube.com/watch?v=IFeCIbljreY) — Visually Explained · 5 years ago

### Multifidelity Modeling *(prerequisite)*
Multifidelity modeling uses multiple simulation models of varying accuracy and computational cost to improve predictions efficiently. This concept underpins the paper’s approach to combining high fidelity and surrogate models in a structured way.

*How the paper uses it:* The paper leverages multifidelity modeling by organizing multiple surrogate models alongside high fidelity ones.

▶ [ML & the Physical World 2024: Lecture 12 Multifidelity Models](https://www.youtube.com/watch?v=w9iVZfg7ONY) — Open Data Science Initiative · 49:17

### Control Variate Methods in Uncertainty Quantification *(prerequisite)*
Control variate methods are statistical techniques used to reduce the variance of estimators, improving accuracy without increasing computational cost. Understanding this mathematical foundation helps explain how the paper achieves variance reduction when combining multiple models.

*How the paper uses it:* The paper develops a recursive linear control variate framework for model trees and forests.

▶ [MC simulations: 3.2 Control variate](https://www.youtube.com/watch?v=pRvWyIOX-GM) — Jan Dufek · 16:35

### Model Forest Ensemble Kalman Filter method
This method generalizes multifidelity ensemble Kalman filters to operate on collections of multiple models organized as trees and forests, enabling efficient and accurate data assimilation with fewer high fidelity runs. It is the core contribution of the paper.

*How the paper uses it:* The paper introduces and validates the Model Forest Ensemble Kalman Filter as a novel data assimilation method.

▶ [Understanding the Ensemble Kalman Filter](https://www.youtube.com/watch?v=9zxdX_BqXOs) — Research Lounge · 1 year ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate understanding of the Model Forest Ensemble Kalman Filter (MFEnKF) paper. Starting with a beginner-level implementation of a simple bifidelity ensemble Kalman filter on surrogate models, progressing to an intermediate reimplementation of the core MFEnKF method on a quasi-geostrophic equation surrogate dataset, and culminating in an advanced project that extends the MFEnKF framework to reduce computational cost of cross covariance estimation, addressing a key limitation noted by the authors.

### Beginner — Bifidelity Ensemble Kalman Filter with Surrogate Models
*Effort: a weekend, ~8 hours*

You build a simplified bifidelity ensemble Kalman filter that uses one high fidelity model and one surrogate low fidelity model to perform data assimilation on a small synthetic dynamical system. The project implements ensemble propagation, covariance estimation, and Kalman update steps, demonstrating how surrogate models reduce the number of expensive high fidelity runs.

**Why it shows you understood the paper:** This project shows you grasp the core idea of using surrogate models as control variates in ensemble Kalman filtering to reduce computational cost, a foundational concept in the paper's generalization to model forests.

**Grounded in:** Key contribution: Generalization of model hierarchies to model trees and forests; Key result: Bifidelity trees with surrogate models reduce high fidelity ensemble size requirements

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic low-dimensional dynamical system data generated by you to simulate high and low fidelity model outputs.

**Build it:**

1. Implement a simple nonlinear dynamical system as the high fidelity model and a cheaper approximate surrogate model.
2. Generate ensembles of initial states and propagate them through both models.
3. Compute sample covariances and cross covariances between model outputs.
4. Implement the bifidelity ensemble Kalman filter update step using the control variate approach.
5. Run data assimilation cycles with perturbed observations and visualize ensemble convergence.
6. Document the reduction in high fidelity model runs compared to a single-model EnKF baseline.

**Ships as:** A Jupyter notebook demonstrating the bifidelity EnKF with plots showing ensemble convergence and computational savings, plus a README explaining the method and results.

**Stretch goal:** Add a second surrogate model to form a small model tree and extend the filter accordingly.

### Intermediate — Reimplementation of Model Forest Ensemble Kalman Filter on Quasi-Geostrophic Surrogates
*Effort: 2 weekends, ~20 hours*

You reimplement the core MFEnKF method described in the paper to assimilate data using a model forest composed of multiple surrogate models and a high fidelity quasi-geostrophic model. You compare the assimilation accuracy and computational cost against a standard single-model EnKF baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's theoretical framework into code, handling ensembles across model trees and forests, and validates the key result that model forests reduce the number of expensive high fidelity runs while maintaining accuracy.

**Grounded in:** Key contribution: Extension of multifidelity EnKF to model forests with recursive linear control variate framework; Key result: Numerical validation showing significant reduction in high fidelity model runs

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic or publicly available surrogate models approximating quasi-geostrophic equations; if unavailable, simulate surrogate models via reduced order models (e.g., POD or autoencoder approximations) of a known PDE system.

**Build it:**

1. Implement or simulate a high fidelity quasi-geostrophic model and multiple surrogate models forming a model forest.
2. Generate ensembles and propagate them through the model forest.
3. Compute cross covariances and Kalman gains using the recursive linear control variate framework.
4. Perform sequential data assimilation cycles with perturbed observations.
5. Compare assimilation accuracy and computational cost against a single-model EnKF baseline.
6. Visualize results and write a report summarizing performance improvements.

**Ships as:** A well-documented Python project with scripts/notebooks showing MFEnKF assimilation on model forests, comparison plots, and a README explaining methodology and findings.

**Stretch goal:** Incorporate autoencoder-based surrogate models trained on simulated data to improve surrogate fidelity.

### Advanced — Reducing Cross Covariance Computational Cost in Model Forest Ensemble Kalman Filters
*Effort: 3+ weeks*

You develop and implement a novel approximation or dimensionality reduction technique to mitigate the exponential computational cost of cross covariance estimation in large model forests, as identified as a key limitation in the paper. You integrate this into the MFEnKF framework and evaluate the trade-offs between computational savings and assimilation accuracy.

**Why it shows you understood the paper:** This project tackles a core open challenge from the paper, showing deep comprehension of the MFEnKF method and its practical bottlenecks, and contributes an original extension that could spark academic discussion with the authors.

**Grounded in:** Limitation: Computational cost rises exponentially due to cross covariance computations; Future direction: Reducing computational cost of cross covariance estimation in model forests

**Tech stack:** Python 3.11, NumPy, SciPy, PyTorch or TensorFlow (optional for dimensionality reduction), Matplotlib, Jupyter Notebook

**Data:** Simulated model forest data as in the intermediate project, with multiple surrogate and high fidelity models to test scalability and covariance computations.

**Build it:**

1. Review the MFEnKF framework and identify where cross covariance computations scale exponentially.
2. Research and select approximation methods (e.g., low-rank approximations, sparse covariance estimation, or clustering of models) to reduce covariance computation.
3. Implement the chosen approximation within the MFEnKF covariance estimation step.
4. Test the modified MFEnKF on a model forest with increasing numbers of surrogate models.
5. Evaluate assimilation accuracy versus computational cost trade-offs.
6. Document the approach, results, and potential applicability to operational settings.

**Ships as:** A comprehensive codebase and report demonstrating the approximation method integrated into MFEnKF, with benchmarks and analysis of computational savings and accuracy impacts.

**Stretch goal:** Explore integration of the approximation method with square-root or particle filter extensions of MFEnKF.

_The paper's authors did not release code or datasets; surrogate models and quasi-geostrophic data must be simulated or approximated by the applicant, which requires careful design to reflect the paper's context._
