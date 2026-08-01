---
title: "097 · The Model Forest Ensemble Kalman Filter — Andrey A. Popov"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrey-a-popov"
source_hash: "5cc2b24a4779f17b0cebbaaaa163c86553532097ac0e72052d3442355f9e5817"
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
