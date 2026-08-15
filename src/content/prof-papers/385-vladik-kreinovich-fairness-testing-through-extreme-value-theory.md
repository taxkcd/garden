---
title: "385 · Fairness Testing through Extreme Value Theory — Vladik Kreinovich"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vladik-kreinovich"
source_hash: "457c4dc407073f164267ad8b476079f225dbd6f9221e921f7eb1def7d7d37633"
sequence: 385
generator: "outreach-garden: managed"
---

# 385 · Fairness Testing through Extreme Value Theory

## At a glance

- **Professor:** Vladik Kreinovich
- **Institution:** University of Texas - El Paso
- **Paper:** [Fairness Testing through Extreme Value Theory](https://arxiv.org/abs/2501.11597v1)
- **Authors:** Verya Monjezi, Ashutosh Trivedi, Vladik Kreinovich, Saeid Tizpaz-Niari
- **Year:** 2025

## Paper overview

This paper introduces a new way to measure and mitigate unfairness in machine learning models by focusing on the worst-case discrimination against protected groups, rather than just average fairness. Using extreme value theory (EVT), the authors develop a metric called extreme counterfactual discrimination (ECD) to quantify the maximum disadvantage individuals may face due to their group membership. They also propose methods to generate realistic test cases for rare, extreme outcomes and design a tail-aware mitigation algorithm that improves fairness in these extreme cases.

### Why it matters

**Research problem:** Existing fairness metrics for machine learning models primarily focus on average-case discrimination, which can overlook significant biases occurring in extreme or rare cases. There is a lack of robust methods to quantify and mitigate worst-case discrimination in the tails of outcome distributions.

**Why it matters:** Data-driven decision systems increasingly impact critical societal domains, and biases in these systems can perpetuate or amplify discrimination, especially in extreme cases that affect high-stakes outcomes like employment, credit, or criminal justice. Addressing only average fairness risks missing these impactful edge cases, potentially causing lasting societal harm.

**Key contributions:**

- Introduction of the extreme counterfactual discrimination (ECD) metric to measure unfairness in the tail of ML outcome distributions.
- Development of a fairness testing method that generates realistic test cases with statistical guarantees for tail analysis.
- Comprehensive evaluation of worst-case discrimination across multiple datasets, ML models, and bias mitigation algorithms.
- Proposal and empirical validation of a novel tail-aware bias mitigation algorithm that improves fairness in the tail without degrading average fairness.

## About the professor

**Vladik Kreinovich** — University of Texas - El Paso.

### Research links

- [Faculty/profile page](https://www.cs.utep.edu/vladik/)
- [Identity evidence](http://hb2504.utep.edu/vitas/vladik.pdf)
- [Identity evidence](https://hb2504.utep.edu/Home/Profile?username=vladik)
- [Identity evidence](https://www.cs.utep.edu/vladik/interests.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Extreme Value Theory
**The paper assumes:** statistical extreme value theory, tail risk modeling, generalized extreme value distributions
**Already in this field?** Skip this entirely if you already understand the statistical theory and applications of extreme value theory in modeling tail risks and rare events.

This background focuses on Extreme Value Theory (EVT), which is central to understanding the paper's methodology for measuring and mitigating worst-case discrimination in machine learning outcomes. The rigorous course option provides a deep, structured university-level treatment of EVT with applications to extreme events, while the fast track offers a concise, clear explainer series that covers the core EVT concepts and statistical tools needed to grasp the paper's key ideas. Choose the rigorous course if you want a thorough foundation; choose the fast track for a quicker, intuition-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Climate Change - Extreme Events_Prof. Somil Swarnkar](https://www.youtube.com/playlist?list=PLyqSpQzTE6M9kKQFBp5Z3cUfB6yITxkiO) — NPTEL-NOC IITM · 59 videos · 28.9h across 59 episodes

**Watch only this:** Episodes W4L16 to W4L20 (5 episodes, about 2.4 hours) — covering Probability Distributions and Climate Data Analysis, Introduction to Extreme Value Theory (EVT) and its Applications, Analyzing Frequency and Intensity of Extreme Events, Week 4 Summary & Assignment, and Week 4 Assignment Solution. This segment introduces EVT concepts and tail modeling essential for understanding the paper's methodology.

*Why it unblocks this paper:* This NPTEL university course by Prof. Somil Swarnkar covers Extreme Value Theory in the context of climate extremes, including probability distributions, EVT fundamentals, and statistical techniques for tail analysis, closely matching the paper's use of EVT to model and fit tail distributions for fairness testing.

*If you want all of it:* 28.9 hours across 59 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Extreme Value Theory](https://www.youtube.com/playlist?list=PLBVD-YN3U17Ce7tO3bkJqgJT_JrgkFgA5) — Zak Varty · 15 videos · 3.1h across 15 episodes

**Watch only this:** Episodes 1.1 to 1.4 (4 episodes, about 48 minutes) — covering Course Overview, Introduction Summary, Block Maxima Summary, and Are two normals of the same type? These episodes introduce EVT basics and the block maxima method, foundational for understanding EVT-based fairness metrics.

*Why it unblocks this paper:* This concise 15-episode series from Lancaster University provides clear, focused explanations of EVT fundamentals, block maxima, generalized Pareto distributions, and inference methods, offering a quick yet rigorous overview of EVT concepts directly relevant to the paper's statistical approach.

*If you want all of it:* 3.1 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Fairness Testing through Extreme Value Theory," start by building a strong foundation in Extreme Value Theory (EVT) as it underpins the paper's novel fairness metric and tail modeling approach. Next, gain a rigorous understanding of fairness metrics in machine learning and counterfactual fairness concepts, which provide the context and motivation for the paper's focus on worst-case discrimination. Then, explore generative models for tabular data to appreciate the synthetic data generation methods used for tail sample augmentation. Finally, conclude with the paper's core concept and the authors' own talk to directly connect these foundations to their novel contributions and empirical results.

### Extreme value theory *(prerequisite)*
Extreme Value Theory (EVT) is the statistical foundation for modeling rare, extreme events and tail distributions. Understanding EVT is crucial for grasping how the paper models worst-case discrimination in the tails of outcome distributions and fits generalized extreme value distributions to test data.

*How the paper uses it:* The paper leverages EVT to define and quantify extreme counterfactual discrimination and to provide worst-case fairness guarantees.

▶ [Extreme value theory (QRM Chapter 5)](https://www.youtube.com/watch?v=IiOSxaF5oxo) — QRM Tutorial · 1:38:26

### Fairness metrics in machine learning *(prerequisite)*
A rigorous understanding of existing fairness definitions and metrics in machine learning is essential to appreciate the limitations of average-case fairness metrics and the motivation for the paper's focus on tail fairness. This includes knowledge of how bias is typically measured and mitigated in ML models.

*How the paper uses it:* The paper critiques average-case fairness metrics and proposes a new tail-aware fairness metric to capture worst-case discrimination.

▶ [Lecture 8: Fairness in Machine Learning](https://www.youtube.com/watch?v=VMBE2mgpxH8) — Birhanu Eshete · 1:23:59

### Counterfactual fairness and discrimination *(prerequisite)*
Counterfactual fairness is a core concept for defining and measuring discrimination by considering hypothetical changes to protected attributes. Understanding this concept is key to comprehending how the paper quantifies discrimination at the individual level and extends it to extreme cases.

*How the paper uses it:* The paper's extreme counterfactual discrimination metric builds upon counterfactual fairness to measure worst-case bias.

▶ [Counterfactual Fairness: Matt Kusner, The Alan Turing Institute](https://www.youtube.com/watch?v=ZfuOw02U7hs) — The Alan Turing Institute · 8 years ago

### Generative models for tabular data *(prerequisite)*
Generative models like CTGAN and TVAE are used to synthesize realistic data samples, especially in the tails where data scarcity is a challenge. Understanding these models is important to grasp how the paper generates realistic test cases for protected groups to enable tail analysis.

*How the paper uses it:* The paper uses CTGAN and TVAE to generate synthetic tail data for protected groups, improving the robustness of tail fairness testing.

▶ [Synthetic data generation with CTGAN](https://www.youtube.com/watch?v=Ei0klF38CNs) — Next Phase with Moe · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand the paper's novel approach to fairness testing in machine learning. Starting with the basics of fairness metrics in ML, it then covers counterfactual fairness to grasp how discrimination is defined and measured. Next, it explains generative models for synthesizing realistic data, followed by extreme value theory to understand modeling of rare, extreme outcomes. Finally, it culminates with the paper's core concept of extreme counterfactual discrimination, tying all prior knowledge together.

### Fairness metrics in machine learning *(prerequisite)*
Begin by learning what fairness means in machine learning and how it is commonly measured. This includes understanding different fairness definitions and why average-case fairness metrics can miss important biases.

*How the paper uses it:* The paper critiques existing average-case fairness metrics and motivates the need for worst-case fairness measures.

▶ [Lecture 8: Fairness in Machine Learning](https://www.youtube.com/watch?v=VMBE2mgpxH8) — Birhanu Eshete · 1:23:59

### Counterfactual fairness and discrimination *(prerequisite)*
Next, explore counterfactual fairness, which asks how model predictions would change if a protected attribute (like race or gender) were different. This concept is key to defining discrimination in a causal and individual-level manner.

*How the paper uses it:* The paper builds on counterfactual fairness to define its extreme counterfactual discrimination metric.

▶ [Counterfactual Fairness](https://www.youtube.com/watch?v=psA4U6nhZ70) — Microsoft Research · 19:11 · 8 years ago

### Generative models for tabular data *(prerequisite)*
Learn how generative models like CTGAN and TVAE create realistic synthetic tabular data. This is important for generating rare, extreme test cases for protected groups where real data is scarce.

*How the paper uses it:* The paper uses CTGAN and TVAE to synthesize realistic tail data for fairness testing.

▶ [Synthetic data generation with CTGAN](https://www.youtube.com/watch?v=Ei0klF38CNs) — Next Phase with Moe · 3 years ago

### Extreme value theory *(prerequisite)*
Understand extreme value theory (EVT), a statistical framework for modeling the behavior of rare, extreme events in data distributions. EVT helps quantify worst-case outcomes beyond average behavior.

*How the paper uses it:* The paper leverages EVT to model the tails of counterfactual discrimination distributions and derive worst-case fairness guarantees.

▶ [FRM: Extreme Value Theory (EVT) - Intro](https://www.youtube.com/watch?v=o-cpu1IH3tM) — Bionic Turtle · 8:34

## Already in your library

- [Definitions of Fairness in Machine Learning | Equal ...](https://www.youtube.com/watch?v=c2_ezuAnCrA) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Fairness Testing through Extreme Value Theory." The beginner project focuses on reproducing the core fairness metric ECD on a simple dataset, the intermediate project implements the full EVT-based tail fairness testing pipeline on a public dataset with generative synthetic data, and the advanced project extends the method to multi-valued protected attributes, addressing a stated limitation of the paper.

### Beginner — Compute Extreme Counterfactual Discrimination on UCI Adult Dataset
*Effort: a weekend, ~8 hours*

You build a Python notebook that computes the extreme counterfactual discrimination (ECD) metric on the UCI Adult dataset using a simple binary classifier. You implement the ECD metric by fitting a generalized extreme value (GEV) distribution to the tail of counterfactual discrimination scores computed from model predictions.

**Why it shows you understood the paper:** This project shows you understand the core fairness metric introduced in the paper and how EVT is applied to quantify worst-case discrimination beyond average fairness.

**Grounded in:** Introduction of the extreme counterfactual discrimination (ECD) metric to measure unfairness in the tail of ML outcome distributions.

**Tech stack:** Python 3.11, scikit-learn, numpy, scipy, matplotlib, pandas, jupyter notebook

**Data:** UCI Adult dataset from (link removed — unverified) used as a substitute for the paper's census income data.

**Build it:**

1. Download and preprocess the UCI Adult dataset, encoding protected attribute (e.g., gender) as binary.
2. Train a simple binary classifier (e.g., logistic regression) to predict income >50K.
3. Compute counterfactual discrimination scores by comparing model predictions for individuals and their counterfactuals with flipped protected attribute.
4. Extract the tail of the discrimination score distribution and fit a generalized extreme value (GEV) distribution using scipy.
5. Calculate the extreme counterfactual discrimination (ECD) metric from the fitted GEV parameters.
6. Visualize the tail fit and report the ECD value.

**Verified links from the paper:**

- <https://archive.ics.uci.edu/ml/datasets/census> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter notebook with code, plots of tail fits, and a README explaining the ECD metric computation and results.

**Stretch goal:** Add a comparison of ECD with average fairness metrics to highlight differences.

### Intermediate — EVT-Based Fairness Testing with Synthetic Tail Data on German Credit Dataset
*Effort: 2 weekends, ~20 hours*

You implement the full EVT-based fairness testing pipeline from the paper on the German Credit dataset. This includes training a classifier, generating synthetic data for protected groups using CTGAN or TVAE, generating extreme test cases, fitting GEV distributions to tail discrimination scores, and computing ECD. You compare ECD with average fairness metrics and evaluate a simple bias mitigation baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method end-to-end, including generative synthetic data for tail sampling and EVT fitting, and to critically evaluate fairness metrics and mitigation effects.

**Grounded in:** Development of a fairness testing method that generates realistic test cases with statistical guarantees for tail analysis.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, ctgan, sdv (for TVAE), scipy, jupyter notebook

**Data:** German Credit dataset from UCI repository ((link removed — unverified))) used as a substitute for the paper's credit data.

**Build it:**

1. Download and preprocess the German Credit dataset, encoding a binary protected attribute (e.g., gender).
2. Train a baseline classifier (e.g., random forest) to predict credit risk.
3. Train CTGAN and TVAE generative models on protected group subsets to synthesize realistic tail samples.
4. Implement randomized test-case generation to produce extreme counterfactual samples using the generative models.
5. Fit generalized extreme value (GEV) distributions to the tail of counterfactual discrimination scores.
6. Compute the extreme counterfactual discrimination (ECD) metric and compare it to average fairness metrics.
7. Apply a simple bias mitigation method (e.g., reweighing or threshold adjustment) and evaluate its impact on average and tail fairness.

**Ships as:** A well-documented Jupyter notebook or Python scripts with plots, metric tables, and a README describing the EVT-based fairness testing pipeline and results.

**Stretch goal:** Experiment with hyperparameter tuning of generative models to improve tail sample quality and EVT fit.

### Advanced — Extending EVT-Based Fairness Testing to Multi-Valued Protected Attributes
*Effort: 3+ weeks*

You extend the EVT-based fairness testing framework to handle multi-valued or intersectional protected attributes, addressing a key limitation noted in the paper. This involves defining a generalized extreme counterfactual discrimination metric for multiple groups, adapting generative data synthesis for intersectional groups, and implementing EVT tail fitting per group or group pair. You evaluate on a public dataset with multi-class protected attributes and compare results to binary attribute baselines.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's methodology and limitations, and the ability to innovate by generalizing the core EVT fairness metric and testing approach to more complex fairness scenarios.

**Grounded in:** The study focuses on binary protected attributes and may need extension for multi-valued or intersectional groups.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, ctgan, sdv (for TVAE), scipy, jupyter notebook

**Data:** Use UCI Adult dataset or another public dataset with multi-valued protected attributes (e.g., race, ethnicity) as a substitute for paper data.

**Build it:**

1. Review the original EVT-based fairness testing pipeline and ECD metric for binary attributes.
2. Define a generalized extreme counterfactual discrimination metric that can handle multiple protected groups or intersectional groups.
3. Adapt generative models (CTGAN, TVAE) to synthesize realistic data for multi-valued protected groups and their intersections.
4. Implement EVT tail fitting for each group or group pair's counterfactual discrimination scores.
5. Evaluate the extended metric on a dataset with multi-valued protected attributes, comparing worst-case discrimination across groups.
6. Compare results with binary attribute baselines and discuss implications for fairness testing and mitigation.

**Verified links from the paper:**

- <https://archive.ics.uci.edu/ml/datasets/census> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive codebase and Jupyter notebooks demonstrating the extended EVT fairness testing method, with detailed analysis and a README explaining the approach and findings.

**Stretch goal:** Integrate a tail-aware bias mitigation algorithm adapted for multi-valued protected attributes and evaluate its effectiveness.
