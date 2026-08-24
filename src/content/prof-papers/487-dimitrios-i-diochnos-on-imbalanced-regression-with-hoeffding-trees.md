---
title: "487 · On Imbalanced Regression with Hoeffding Trees — Dimitrios I. Diochnos"
date: 2026-08-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dimitrios-i-diochnos"
source_hash: "540b7c8e85c245031686b2ffc2e9d5363fb3203b3787636a8285a32d0df19ebb"
sequence: 487
generator: "outreach-garden: managed"
---

# 487 · On Imbalanced Regression with Hoeffding Trees

## At a glance

- **Professor:** Dimitrios I. Diochnos
- **Institution:** University of Oklahoma
- **Paper:** [On Imbalanced Regression with Hoeffding Trees](https://arxiv.org/pdf/2602.22101)
- **Authors:** Pantia-Marina Alchirch, Dimitrios I. Diochnos
- **Year:** 2026

## Paper overview

This paper addresses the challenge of performing regression on continuous data streams where the target variable distribution is imbalanced. It extends kernel density estimation (KDE) to streaming settings and integrates hierarchical shrinkage (HS) regularization into incremental decision trees, specifically Hoeffding trees. The study shows that KDE significantly improves prediction accuracy on imbalanced regression tasks in streaming data, while HS offers limited benefits.

### Why it matters

**Research problem:** How to improve the performance of incremental decision tree algorithms, such as Hoeffding trees, for regression tasks on imbalanced continuous data streams.

**Why it matters:** Many real-world applications generate continuous data streams with imbalanced target distributions, such as predicting age from facial images or weather phenomena. Existing methods mainly focus on classification imbalance or batch learning, leaving a gap in effective online regression methods for imbalanced data.

**Key contributions:**

- Implemented hierarchical shrinkage (HS) regularization on incremental decision trees.
- Extended kernel density estimation (KDE) to streaming regression tasks with imbalanced data.
- Combined KDE and HS to enhance incremental decision tree performance on imbalanced regression streams.
- Provided publicly available code for reproducibility.
- Conducted extensive experiments on multiple datasets using two different streaming machine learning libraries.

## About the professor

**Dimitrios I. Diochnos** — Associate Professor, School of Computer Science, University of Oklahoma.

Research interests: designing and analyzing machine learning algorithms, adversarial learning, multiple-instance learning, imbalanced data, semi-supervised learning, learning with streaming data, open-world learning, regularization methods

### Research links

- [Faculty/profile page](https://www.diochnos.com)
- [Resolved homepage](https://www.diochnos.com/)
- [Social profile](https://twitter.com/DDiochnos/status/1506068048607952899)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Incremental Decision Trees
**The paper assumes:** incremental decision trees, Hoeffding trees, streaming machine learning algorithms
**Already in this field?** Skip this entirely if you already understand the theory and implementation of incremental decision trees and Hoeffding trees in streaming data contexts.

To understand the core methodology of the paper on imbalanced regression with Hoeffding trees, it is essential to grasp incremental decision trees, their structure, learning process, and theoretical foundations. The rigorous course option provides a deep, university-level foundation on machine learning including decision trees, while the fast track offers a concise, focused introduction to decision trees and regression trees specifically, suitable for quickly gaining practical intuition.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lecture 9 - Decision Trees and Ensemble Methods (about 79 minutes) to cover the foundational concepts of decision trees relevant to Hoeffding trees.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a top-tier, authoritative machine learning course covering decision trees in detail within a broad ML context, including theoretical and practical aspects relevant to incremental decision trees and their extensions.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Building Decision Trees from Scratch](https://www.youtube.com/playlist?list=PLPTV0NXA_ZSjXY1XnEmtyHN5do21KCgJR) — Vizuara · 13 videos · 7.2h across 13 episodes

**Watch only this:** Episodes 1-4 and 8-10 (about 3.5 hours) to cover decision tree basics, impurity measures, and regression trees construction.

*Why it unblocks this paper:* The 'Building Decision Trees from Scratch' series by Vizuara offers a clear, visual, and intuitive explanation of decision trees and regression trees, focusing on core concepts and practical building steps, ideal for quickly understanding the basics needed for this paper.

*If you want all of it:* 7.2 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'On Imbalanced Regression with Hoeffding Trees,' start by building foundational knowledge on incremental decision trees and online learning with data streams, which are the core modeling and learning paradigms used. Next, explore the challenges of imbalanced regression problems and regularization methods for incremental trees to contextualize the problem and the proposed hierarchical shrinkage approach. Then, study kernel density estimation in streaming settings, the key technique extended in this work. Finally, focus on the paper-specific core concept videos to grasp the novel contributions and results presented by the authors.

### Incremental decision trees for streaming data *(prerequisite)*
Incremental decision trees, such as Hoeffding trees, are fundamental for modeling streaming data where the model updates continuously with new data. Understanding their construction, splitting criteria, and adaptation to regression tasks is essential to appreciate the baseline methods improved in the paper.

*How the paper uses it:* The paper builds on Hoeffding trees as the base incremental decision tree model for imbalanced regression on streaming data.

▶ [Machine Learning Lecture 29 "Decision Trees / Regression Trees" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=a3ioGSwfVpE) — Kilian Weinberger · 50:23 · 8 years ago

### Online learning with data streams *(prerequisite)*
Online learning with data streams covers algorithms and frameworks that process data sequentially and update models incrementally. This foundational knowledge is critical to understand the streaming context and constraints addressed by the paper.

*How the paper uses it:* The paper addresses regression on continuous data streams, requiring understanding of online learning principles.

▶ [Machine Learning for Data Streams - Prof. Albert Bifet](https://www.youtube.com/watch?v=hfZHscfgHXY) — Mark Last · 53:03 · 7 years ago

### Kernel density estimation in streaming settings
Kernel density estimation (KDE) is a non-parametric method to estimate probability densities, and its adaptation to streaming data is a core technical contribution of the paper. Understanding KDE and its incremental extensions is key to grasping how the authors improve regression performance on imbalanced streams.

*How the paper uses it:* The paper extends KDE to streaming regression tasks and demonstrates its effectiveness in handling imbalanced data.

▶ [Accelerating Transformers via Kernel Density Estimation Insu Han](https://www.youtube.com/watch?v=TNNqB8hUp_o) — Google TechTalks · 53:09 · 3 years ago

### Paper-specific author talk *(the paper's own talk)*
Direct talks by the authors or closely related academic lectures provide the most precise and insightful explanations of the novel methods and experimental findings. These talks help understand the rationale, implementation details, and implications of the paper's contributions.

*How the paper uses it:* While no direct author talk on this exact paper was found, related advanced lectures on Hoeffding's inequality and tree-based methods provide foundational theory relevant to the paper.

▶ [S18.3 Hoeffding's Inequality](https://www.youtube.com/watch?v=MWcO8ZTOQQQ) — MIT OpenCourseWare · 18:28 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper 'On Imbalanced Regression with Hoeffding Trees.' It starts with the basics of imbalanced regression problems and online learning with data streams, then covers incremental decision trees as the base model, followed by kernel density estimation as the core technique extended in the paper, and concludes with regularization methods relevant to incremental trees. This order builds intuition progressively from the problem context to the specific methods the paper innovates on.

### Imbalanced regression problems *(prerequisite)*
Learn what imbalanced regression means: predicting continuous outcomes when the target values are unevenly distributed, which poses unique challenges compared to balanced or classification tasks. Understanding this sets the stage for why specialized methods are needed.

*How the paper uses it:* The paper focuses on improving regression performance when the continuous target distribution is imbalanced in streaming data.

▶ [Lec-3: Introduction to Regression with Real Life Examples](https://www.youtube.com/watch?v=cHT-qLnRm0E) — Gate Smashers · 7:19 · 2 years ago

### Online learning with data streams *(prerequisite)*
Understand how machine learning models can update continuously as new data arrives in a stream, without retraining from scratch. This is crucial for real-time applications and for handling potentially infinite data.

*How the paper uses it:* The paper addresses regression on continuous data streams, requiring incremental model updates.

▶ [Data Streaming, Explained](https://www.youtube.com/watch?v=ag9jlVxM_18) — AltexSoft · 11:55 · 3 years ago

### Incremental decision trees for streaming data *(prerequisite)*
Explore how decision trees can be adapted to learn incrementally from streaming data using algorithms like Hoeffding trees, which decide splits based on statistical bounds without needing all data upfront.

*How the paper uses it:* Hoeffding trees are the base incremental decision tree models extended in the paper for imbalanced regression.

▶ [Implement Decision Trees from Scratch - Part 1](https://www.youtube.com/watch?v=loZ_KNAVwgk) — Inside Learning Machines · 23:21 · 3 years ago

### Kernel density estimation in streaming settings
Learn kernel density estimation (KDE), a non-parametric way to estimate the probability density function of a variable, and how it can be adapted for streaming data to smooth predictions and handle imbalance.

*How the paper uses it:* The paper extends KDE to streaming regression tasks to improve prediction accuracy on imbalanced data streams.

▶ [Kernel Density Estimation - Explained](https://www.youtube.com/watch?v=6sGOMbC5xdE) — DataMListic · 8:11 · 11 months ago

## Already in your library

- [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)
- [Intro to Kernel Density Estimation](https://www.youtube.com/watch?v=x5zLaWT5KPs) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)
- [Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE](https://www.youtube.com/watch?v=yh2AKoJCV3k) — also for: One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening (Alexander Tropsha)
- [Handling Imbalanced Dataset in Machine Learning: Easy Explanation for Data Science Interviews](https://www.youtube.com/watch?v=GR-OW5asKlk) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)
- [Lecture 9 - Decision Trees and Ensemble Methods | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=wr9gUr-eWdA) — also for: Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure (Benjamin C. Lee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "On Imbalanced Regression with Hoeffding Trees." The beginner project reproduces a core mechanism of incremental KDE smoothing on streaming regression data. The intermediate project builds on the authors' released implementation to evaluate KDE-enhanced Hoeffding trees against a baseline on a public streaming regression dataset. The advanced project extends the paper's KDE approach to handle concept drift, addressing a key limitation and future direction noted by the authors.

### Beginner — Incremental Kernel Density Estimation for Streaming Regression
*Effort: a weekend, ~8 hours*

You implement the telescoping update formula for kernel density estimation (KDE) in a streaming regression setting using Python. You simulate a small continuous data stream with an imbalanced target distribution and apply KDE smoothing incrementally to improve regression predictions from a simple Hoeffding tree model.

**Why it shows you understood the paper:** This project demonstrates you understand the core KDE extension to streaming regression data streams as proposed in the paper, including the incremental update mechanism and its impact on imbalanced regression.

**Grounded in:** Extended kernel density estimation (KDE) to streaming regression tasks with imbalanced data.

**Tech stack:** Python 3.11, scikit-multiflow, Jupyter Notebook

**Data:** Simulated continuous streaming regression data with an imbalanced target distribution, since no public dataset is directly provided.

**Build it:**

1. Simulate a continuous data stream with an imbalanced target variable (e.g., skewed Gaussian mixture).
2. Implement the telescoping update formula for incremental KDE smoothing of the target distribution.
3. Integrate KDE smoothing with a Hoeffding tree regressor from scikit-multiflow.
4. Evaluate prediction performance (e.g., MAE) with and without KDE smoothing on the simulated stream.
5. Visualize the KDE-smoothed target distribution and compare regression errors.

**Ships as:** A Jupyter notebook demonstrating incremental KDE smoothing on streaming regression data, with plots and error metrics comparing KDE-enhanced and base Hoeffding tree predictions.

**Stretch goal:** Add a simple baseline regression model (e.g., incremental linear regression) to compare against the KDE-enhanced Hoeffding tree.

### Intermediate — Evaluating KDE-Enhanced Hoeffding Trees on Streaming Imbalanced Regression
*Effort: 1-3 weekends, ~20 hours*

You clone and run the authors' released implementation of KDE and hierarchical shrinkage (HS) integrated with Hoeffding trees from their GitHub repository. Using a publicly available streaming regression dataset (e.g., a substitute like the Electricity or Bike Sharing dataset), you evaluate KDE-enhanced models against base Hoeffding trees on metrics such as MAE and RMSE, reproducing key results from the paper.

**Why it shows you understood the paper:** This project shows you can work with the authors' code, understand their KDE integration, and critically evaluate its performance on streaming imbalanced regression tasks, replicating the paper's core experimental findings.

**Grounded in:** Implemented hierarchical shrinkage (HS) regularization on incremental decision trees. Extended kernel density estimation (KDE) to streaming regression tasks with imbalanced data. Conducted extensive experiments on multiple datasets using two different streaming machine learning libraries.

**Tech stack:** Python 3.11, scikit-multiflow, River, Jupyter Notebook

**Data:** Use a publicly available streaming regression dataset such as the Electricity or Bike Sharing dataset as a substitute for the paper's datasets.

**Build it:**

1. Clone the authors' GitHub repository https://github.com/marinaAlchirch/DSFA_2026 and set up the environment.
2. Run baseline Hoeffding tree regression experiments on the chosen streaming dataset.
3. Run KDE-enhanced Hoeffding tree regression experiments using the authors' implementation.
4. Compare performance metrics (MAE, RMSE) between KDE-enhanced and base models.
5. Document results and reproduce a figure or table similar to the paper's reported improvements.

**Verified links from the paper:**

- <https://github.com/marinaAlchirch/DSFA_2026> — released by the paper's authors

**Ships as:** A GitHub repository with code and a detailed README showing experimental setup, results comparing KDE-enhanced and base Hoeffding trees on a streaming regression dataset, and discussion of findings.

**Stretch goal:** Add hierarchical shrinkage regularization to the experiments and analyze its impact compared to KDE alone.

### Advanced — Extending KDE-Enhanced Streaming Regression to Handle Concept Drift
*Effort: a few weeks, ~40+ hours*

You develop an extension of the KDE smoothing approach to incorporate concept drift adaptation in streaming regression. Using the authors' KDE implementation as a base, you integrate a drift detection mechanism (e.g., ADWIN) to reset or adapt KDE estimates when drift is detected. You evaluate this extended model on a streaming regression dataset with synthetic or known drift and imbalanced target distribution.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by combining KDE smoothing with concept drift adaptation, demonstrating deep comprehension of the paper's methods and challenges in real-world streaming data.

**Grounded in:** Investigate methods to combine KDE with concept drift adaptation in streaming regression.

**Tech stack:** Python 3.11, scikit-multiflow, River, Jupyter Notebook

**Data:** Use a streaming regression dataset with concept drift or simulate drift by changing the target distribution mid-stream, ensuring imbalance is present.

**Build it:**

1. Study the authors' KDE implementation and understand its incremental update mechanism.
2. Implement a concept drift detector such as ADWIN integrated with the streaming regression pipeline.
3. Modify KDE updates to reset or adapt when drift is detected to maintain accurate density estimates.
4. Run experiments comparing KDE with and without drift adaptation on streaming data with drift and imbalance.
5. Analyze and visualize the impact of drift adaptation on regression performance metrics.

**Verified links from the paper:**

- <https://github.com/marinaAlchirch/DSFA_2026> — released by the paper's authors

**Ships as:** A GitHub repository with code implementing KDE with drift adaptation, experimental results on streaming regression with drift, and a detailed report discussing improvements and challenges.

**Stretch goal:** Explore alternative regularization methods beyond hierarchical shrinkage to improve incremental tree performance under drift.
