---
title: "989 · Accurate and Reliable Uncertainty Estimates for Deterministic Predictions: Extensions to Under and Overpredictions — Rebecca E. Morrison"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rebecca-e-morrison"
source_hash: "3f004d9b9d24fa9fa30c1e3738524ce015a79a4a1b16ad42ec50cd0578e2d74d"
sequence: 989
generator: "outreach-garden: managed"
---

# 989 · Accurate and Reliable Uncertainty Estimates for Deterministic Predictions: Extensions to Under and Overpredictions

## At a glance

- **Professor:** Rebecca E. Morrison
- **Institution:** University of Colorado Boulder
- **Paper:** [Accurate and Reliable Uncertainty Estimates for Deterministic Predictions: Extensions to Under and Overpredictions](https://arxiv.org/pdf/2604.08755)
- **Authors:** Rileigh Bandy, Enrico Camporeale, Andong Hu, Thomas Berger, Rebecca Morrison
- **Year:** 2026

## Paper overview

This paper develops methods to provide reliable uncertainty estimates for deterministic computational model predictions. It extends an existing framework called ACCRUE to handle non-Gaussian, skewed uncertainty distributions, enabling better modeling of asymmetric and heavy-tailed errors. The approach uses neural networks to learn input-dependent uncertainty parameters, improving probabilistic forecasts in synthetic and real-world applications like weather forecasting.

### Why it matters

**Research problem:** Deterministic computational models produce single-point predictions but lack uncertainty quantification (UQ), which is critical for decision-making. Existing UQ methods either rely on computationally expensive sampling or assume Gaussian uncertainty, which fails to capture skewness and heavy tails in errors. The problem is to develop efficient, accurate, and reliable uncertainty estimates that can model input-dependent, non-Gaussian uncertainties.

**Why it matters:** Reliable uncertainty quantification supports high-stakes decisions in engineering and science by providing probabilistic predictions rather than just point estimates. Capturing realistic error distributions, including asymmetry and heavy tails, improves forecast reliability and interpretability, especially for real-time applications where computational cost is a concern.

**Key contributions:**

- Extension of ACCRUE framework to handle skewed, non-Gaussian uncertainty distributions (two-piece Gaussian and asymmetric Laplace).
- Derivation of analytical CRPS and RS formulas for these distributions enabling efficient neural network training.
- Development of a generalized β heuristic for balancing accuracy and reliability in the loss function.
- Demonstration of the method's ability to learn input-dependent uncertainty parameters from synthetic data with known distributions.
- Application to real-world weather forecasting data showing improved probabilistic forecast performance compared to deterministic and state-of-the-art methods.

## About the professor

**Rebecca E. Morrison** — Assistant Professor, Computer Science, University of Colorado Boulder.

Research interests: Dynamical systems, Probabilistic graphical models, Calibration, validation, and uncertainty quantification

### Research links

- [Faculty/profile page](https://www.colorado.edu/cs/rebecca-morrison)
- [Professor website](https://rebeccaem.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Machine Learning
**The paper assumes:** probabilistic modeling, uncertainty quantification, scoring rules in machine learning, neural network-based probabilistic forecasting
**Already in this field?** Skip this entirely if you already understand probabilistic machine learning methods for uncertainty quantification and scoring-rule-based model training.

To understand this paper's methodology on input-dependent, non-Gaussian uncertainty quantification using neural networks and probabilistic scoring rules, a solid grasp of probabilistic machine learning fundamentals is essential. The rigorous course option offers a comprehensive, structured university-level introduction to machine learning concepts including neural networks and probabilistic models, while the fast track provides a concise, intuition-driven explainer series focused specifically on probabilistic machine learning topics relevant to uncertainty quantification. Choose the course for deep foundational knowledge or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229 Machine Learning | Spring 2026](https://www.youtube.com/playlist?list=PLaqpC4kq8Gpw) — Stanford Online · 17 videos · 20.6h across 17 episodes

**Watch only this:** Lectures 1-4 and 7-8, about 6 hours — covering introduction, supervised learning setup, weighted least squares, exponential family and GLMs, and neural networks architecture and backpropagation, which provide the core machine learning and probabilistic modeling background needed.

*Why it unblocks this paper:* Stanford CS229 Machine Learning | Spring 2026 is a rigorous graduate-level course covering supervised learning, neural networks, and probabilistic models, directly supporting understanding of neural network training for input-dependent uncertainty and probabilistic scoring rules used in the paper.

*If you want all of it:* About 20.6 hours across all 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Probabilistic Machine Learning](https://www.youtube.com/playlist?list=PL8ru1Gu3oL0RGN164eClIUUbdMnUG6bwy) — André Gadelha · 17 videos · 4.2h across 17 episodes

**Watch only this:** Episodes 1-6 and 9-11, about 2.5 hours — covering probability vs likelihood, binomial distribution, Bayesian vs frequentist thinking, maximum likelihood estimation, multivariate normal distribution, and EM algorithm, providing a focused overview of probabilistic modeling and inference.

*Why it unblocks this paper:* André Gadelha's Probabilistic Machine Learning playlist offers clear, concise explainers on key probabilistic concepts such as distributions, maximum likelihood estimation, Bayesian linear regression, and EM algorithm, which are directly relevant to understanding the paper's use of non-Gaussian distributions and probabilistic loss functions.

*If you want all of it:* About 4.2 hours across all 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on extending the ACCRUE framework for accurate and reliable uncertainty estimates in deterministic predictions, start by grounding yourself in the foundational concepts of Continuous Ranked Probability Score (CRPS), neural networks for probabilistic forecasting, non-Gaussian uncertainty distributions, and reliability score in uncertainty quantification. Then, focus on the core concept of input-dependent uncertainty quantification, which is central to the paper's methodology. Finally, conclude with the authors' own recorded talk to gain direct insights into their novel contributions and approach.

### Continuous ranked probability score CRPS *(prerequisite)*
CRPS is a fundamental metric used in the paper for training and evaluating probabilistic forecasts. Understanding CRPS helps in grasping how the paper derives analytical expressions to efficiently optimize the uncertainty models.

*How the paper uses it:* The paper derives analytical CRPS formulas for two-piece Gaussian and asymmetric Laplace distributions to train neural networks efficiently.

▶ [Module 8: Verification of probabilistic forecasts](https://www.youtube.com/watch?v=Ffo8XilZAZw) — Renewables in electricity markets · 19:20 · 7y ago

### Neural networks for probabilistic forecasting *(prerequisite)*
The paper employs neural networks to learn input-dependent parameters of uncertainty distributions. Familiarity with neural networks applied to probabilistic forecasting is essential to understand the model training and parameter estimation techniques used.

*How the paper uses it:* Neural networks are trained to learn input-dependent distribution parameters by minimizing a loss balancing accuracy and reliability.

▶ [Nicolas Kuhaupt - Probabilistic Forecasting with DeepAR and AWS SageMaker](https://www.youtube.com/watch?v=zQvHESgqFcU) — EuroPython Conference · 30:43 · 6y ago

### Non-Gaussian uncertainty distributions *(prerequisite)*
The paper extends uncertainty quantification beyond Gaussian assumptions to handle skewed and heavy-tailed distributions. Understanding the challenges and methods related to non-Gaussian uncertainty is crucial for appreciating the paper's novel distributional extensions.

*How the paper uses it:* The paper extends ACCRUE to two-piece Gaussian and asymmetric Laplace distributions to model skewed uncertainties.

▶ [GeoDAWG seminar 04/02/2024 - Jeff Anderson - Removing the Kalman from the Ensemble Kalman Filter](https://www.youtube.com/watch?v=7h1CWfu_VCg) — IAGA GeoDAWG Virtual Seminar Series · 1:00:21 · 2y ago

### Reliability score in uncertainty quantification *(prerequisite)*
Reliability score is used as a regularizer in the paper's loss function to balance accuracy and reliability of uncertainty estimates. Understanding this concept aids in comprehending the optimization strategy and the role of the reliability score in the ACCRUE framework.

*How the paper uses it:* Reliability score is used as a regularizer balancing accuracy and reliability in the loss function.

▶ [Charlotte Peale: Uncertainty Quantification Beyond Calibration (February 5, 2026)](https://www.youtube.com/watch?v=hXGDJuQYTFs) — Simons Foundation · 52:09 · 8mo ago

### Input-dependent uncertainty quantification
This is the core concept of the paper, where uncertainty parameters are modeled as functions of inputs using neural networks. Mastery of this topic is essential to understand how the paper achieves improved probabilistic forecasts with skewed, non-Gaussian uncertainties.

*How the paper uses it:* The paper's method centers on learning input-dependent uncertainty parameters to model non-Gaussian, skewed error distributions.

▶ [Uncertainty Quantification & Machine Learning](https://www.youtube.com/watch?v=Q83PcGVsRWs) — Michael Shields · 1:10:47 · 6mo ago

### Paper authors recorded talk *(paper-talk search result; attribution unverified)*
The authors' own recorded talk provides direct insights into their novel ACCRUE extensions, methodology, and results. It is the most authoritative source for understanding the paper's contributions and context.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel ACCRUE extensions.

▶ [Sequential Statistical Methods for Reliable Machine Learning](https://www.youtube.com/watch?v=j3Qumv16vk0) — Simons Institute for the Theory of Computing · 46:15 · Streamed 3w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to uncertainty quantification in deterministic predictions, start by building a foundation in neural networks for probabilistic forecasting, which explains how models learn uncertainty parameters. Next, learn about the Continuous Ranked Probability Score (CRPS), a key metric used for training and evaluating probabilistic forecasts. Then, explore non-Gaussian uncertainty distributions to grasp why modeling skewed and heavy-tailed errors matters. Finally, study input-dependent uncertainty quantification and reliability score concepts to see how the paper extends ACCRUE to handle complex, input-conditioned uncertainties with balanced accuracy and reliability.

### Neural networks for probabilistic forecasting *(prerequisite)*
This section introduces how neural networks can be trained to output probabilistic forecasts rather than single-point predictions, learning parameters of uncertainty distributions conditioned on inputs. Understanding this helps grasp how the paper uses neural nets to model input-dependent uncertainty.

*How the paper uses it:* The paper uses neural networks to learn input-dependent parameters of non-Gaussian uncertainty distributions for probabilistic forecasting.

▶ [Nicolas Kuhaupt - Probabilistic Forecasting with DeepAR and AWS SageMaker](https://www.youtube.com/watch?v=zQvHESgqFcU) — EuroPython Conference · 30:43 · 6y ago

### Continuous ranked probability score CRPS *(prerequisite)*
CRPS is a scoring rule used to evaluate the quality of probabilistic forecasts by measuring the difference between predicted and observed distributions. Learning about CRPS is essential to understand how the paper trains models efficiently with analytical CRPS formulas.

*How the paper uses it:* The paper derives analytical CRPS formulas for non-Gaussian distributions to efficiently train neural networks.

▶ [Module 8: Verification of probabilistic forecasts](https://www.youtube.com/watch?v=Ffo8XilZAZw) — Renewables in electricity markets · 19:20 · 7y ago

### Non-Gaussian uncertainty distributions *(prerequisite)*
This concept covers uncertainty models beyond the common Gaussian assumption, including skewed and heavy-tailed distributions. Understanding these helps appreciate why the paper extends ACCRUE to two-piece Gaussian and asymmetric Laplace distributions for more realistic error modeling.

*How the paper uses it:* The paper extends ACCRUE to handle skewed, non-Gaussian uncertainty distributions to better capture asymmetric and heavy-tailed errors.

▶ [An Introduction to the Normal Distribution](https://www.youtube.com/watch?v=iYiOVISWXS4) — jbstatistics · 5:27 · 13y ago

### Input-dependent uncertainty quantification
Input-dependent uncertainty quantification means the model learns uncertainty parameters that vary with input features, allowing more flexible and accurate uncertainty estimates. This concept is key to the paper's method of learning uncertainty parameters conditioned on inputs.

*How the paper uses it:* The paper trains neural networks to learn input-dependent uncertainty parameters for improved probabilistic forecasts.

▶ [Uncertainty Quantification & Machine Learning](https://www.youtube.com/watch?v=Q83PcGVsRWs) — Michael Shields · 1:10:47 · 6mo ago

### Reliability score in uncertainty quantification
Reliability score measures how well predicted uncertainty intervals correspond to observed errors, serving as a regularizer to balance accuracy and reliability in model training. Understanding this helps explain the paper's weighted loss function combining accuracy and reliability.

*How the paper uses it:* The paper uses reliability score as a regularizer in the loss function to balance accuracy and reliability of uncertainty estimates.

▶ [Charlotte Peale: Uncertainty Quantification Beyond Calibration (February 5, 2026)](https://www.youtube.com/watch?v=hXGDJuQYTFs) — Simons Foundation · 52:09 · 8mo ago

## Already in your library

- [MIT 6.S191: Evidential Deep Learning and Uncertainty](https://www.youtube.com/watch?v=toTcf7tZK8c) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)
- [Methods for Calibrated Uncertainty Quantification in Probabilistic Regression](https://www.youtube.com/watch?v=YXJN5Nc1sFo) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Mini Tutorial 6: An Introduction to Uncertainty Quantification for Modeling & Simulation](https://www.youtube.com/watch?v=7w-K_EF2j64) — also for: Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems (Carlos Varela)
- [Martina Rama: Physics-Informed Neural Networks for Probabilistic Epidemic Forecasting](https://www.youtube.com/watch?v=CCfPVKnZ5kc) — also for: EINNs: Epidemiologically-Informed Neural Networks (Bijaya Adhikari)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Easy introduction to gaussian process regression (uncertainty models)](https://www.youtube.com/watch?v=iDzaoEwd0N0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's extension of the ACCRUE framework for input-dependent, non-Gaussian uncertainty quantification. The beginner project reproduces a core metric calculation and visualization on synthetic data to grasp the fundamental concepts. The intermediate project implements the core ACCRUE method with neural networks on a synthetic dataset, comparing two uncertainty distributions and reporting reliability and accuracy metrics. The advanced project extends the method to handle misspecified error distributions, addressing a key limitation and exploring robustness, potentially applying it to a new domain or more complex data.

### Beginner — Compute and Visualize CRPS and Reliability Score for Two-Piece Gaussian
*Effort: a weekend, ~6 hours*

You build a Python script that implements the analytical formulas for the Continuous Ranked Probability Score (CRPS) and Reliability Score (RS) for the two-piece Gaussian distribution as derived in the paper. Using synthetic data generated with known two-piece Gaussian parameters, you compute these scores and visualize how predicted uncertainty intervals compare to true errors.

**Why it shows you understood the paper:** This project shows you understand the key metrics used in the paper to balance accuracy and reliability for skewed uncertainty distributions, and how these metrics are computed analytically for efficient training.

**Grounded in:** Derivation of analytical CRPS and RS formulas for two-piece Gaussian distribution enabling efficient neural network training.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated in code with known two-piece Gaussian parameters as described in the paper's synthetic experiments section.

**Build it:**

1. Implement the two-piece Gaussian probability density function and cumulative distribution function.
2. Implement the analytical CRPS formula for the two-piece Gaussian distribution following the paper's derivation.
3. Implement the analytical Reliability Score (RS) formula for the two-piece Gaussian distribution.
4. Generate synthetic samples with input-dependent parameters for the two-piece Gaussian distribution.
5. Compute CRPS and RS for the synthetic samples and visualize predicted confidence intervals versus true errors.
6. Write a README explaining the formulas, implementation, and interpretation of results.

**Ships as:** A Jupyter Notebook or Python script that computes and plots CRPS and RS for synthetic two-piece Gaussian data, demonstrating understanding of the paper's core metrics.

**Stretch goal:** Add the asymmetric Laplace distribution's CRPS and RS formulas and compare metric values on the same synthetic data.

### Intermediate — Reimplement ACCRUE with Neural Networks on Synthetic Skewed Data
*Effort: 2 weekends, ~20 hours*

You implement the ACCRUE framework from the paper to train neural networks that learn input-dependent parameters of two non-Gaussian uncertainty distributions: two-piece Gaussian and asymmetric Laplace. Using synthetic datasets with known input-dependent parameters, you train models minimizing the weighted ACCRUE loss balancing CRPS and RS, then compare predictive performance and reliability against a simple baseline such as a deterministic regression with fixed Gaussian uncertainty.

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's core method end-to-end, including neural network training with the novel loss function and analytical metrics, and evaluate uncertainty quantification quality on controlled data.

**Grounded in:** Neural network ensembles accurately learned input-dependent parameters for both two-piece Gaussian and asymmetric Laplace distributions on synthetic data.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated in code simulating input-dependent two-piece Gaussian and asymmetric Laplace error distributions as described in the paper.

**Build it:**

1. Generate synthetic datasets with input-dependent parameters for two-piece Gaussian and asymmetric Laplace error distributions.
2. Implement neural network models that output distribution parameters conditioned on inputs.
3. Implement the ACCRUE loss function combining CRPS and RS with the β weighting heuristic.
4. Train neural networks to minimize the ACCRUE loss on synthetic data for both distributions.
5. Evaluate and compare predicted confidence intervals, CRPS, and RS metrics against a deterministic baseline with fixed Gaussian uncertainty.
6. Visualize learned parameter functions and uncertainty intervals versus ground truth.
7. Document the implementation, experiments, and results in a README.

**Verified links from the paper:**

- <https://github.com/evwalz/easyuq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train and evaluate ACCRUE neural networks on synthetic skewed data, showing improved uncertainty quantification over baseline.

**Stretch goal:** Incorporate the EasyUQ method from the third-party artifact as an additional baseline for comparison.

### Advanced — Extend ACCRUE to Handle Misspecified Error Distributions and Multidimensional Inputs
*Effort: 3+ weeks*

You extend the ACCRUE framework to improve robustness under misspecified error distributions, such as gamma-distributed errors, by experimenting with alternative uncertainty distributions or flexible mixture models. You also adapt the method to handle multidimensional inputs, for example by using NOAA weather forecast features with multiple predictors. You evaluate the extended method on synthetic misspecified data and a real-world dataset (e.g., NOAA temperature forecasts), analyzing improvements in reliability and accuracy, addressing a key limitation and future direction from the paper.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, extending the methodology to more complex and realistic scenarios, which is a step toward publishable research.

**Grounded in:** Misspecified error distributions require further investigation to improve robustness; extension to multidimensional inputs and complex uncertainties is needed.

**Tech stack:** Python 3.11, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook

**Data:** Synthetic data simulating misspecified error distributions (e.g., gamma) generated in code; real-world NOAA one-hour ahead temperature forecast data as used in the paper.

**Build it:**

1. Review the paper's ACCRUE framework and limitations regarding misspecified error distributions and univariate inputs.
2. Generate synthetic datasets with misspecified error distributions (e.g., gamma) and multidimensional input features.
3. Implement extensions to ACCRUE to support alternative or mixture uncertainty distributions that can better model misspecification.
4. Adapt neural network architectures to handle multidimensional inputs for learning input-dependent uncertainty parameters.
5. Train and evaluate models on synthetic misspecified data and NOAA temperature forecast data, comparing reliability and accuracy metrics.
6. Analyze results to assess improvements over the original ACCRUE method and document findings.
7. Write a detailed README explaining the extension, experiments, and implications for real-world uncertainty quantification.

**Ships as:** A comprehensive repository demonstrating ACCRUE extensions for misspecified errors and multidimensional inputs, with experiments on synthetic and NOAA data, addressing a key paper limitation.

**Stretch goal:** Explore automated selection or learning of the best uncertainty distribution when prior knowledge is limited, as suggested in the paper's future directions.
