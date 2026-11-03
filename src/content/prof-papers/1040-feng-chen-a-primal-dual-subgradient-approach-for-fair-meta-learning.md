---
title: "1040 · A Primal-Dual Subgradient Approach for Fair Meta Learning — Feng Chen"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-feng-chen-8542518834"
source_hash: "412983b7e3651650bfa302c8f1d34eca1abbbfee0f8ec079cc73d38a4c490ee2"
sequence: 1040
generator: "outreach-garden: managed"
---

# 1040 · A Primal-Dual Subgradient Approach for Fair Meta Learning

## At a glance

- **Professor:** Feng Chen
- **Institution:** University of Texas at Dallas
- **Paper:** [A Primal-Dual Subgradient Approach for Fair Meta Learning](https://arxiv.org/pdf/2009.12675)
- **Authors:** Chen Zhao, Feng Chen, Zhuoyi Wang, Latifur Khan
- **Year:** 2021

## Paper overview

This paper proposes a new meta-learning framework called Primal-Dual Fair Meta-learning (PDFM) that trains machine learning models to be both accurate and fair when adapting to new tasks with very few training examples. Unlike prior methods that treat fairness constraints uniformly or tune fairness parameters manually, PDFM jointly optimizes model parameters and fairness constraints using a primal-dual subgradient algorithm. The approach is validated on three real-world datasets, showing improved fairness generalization and bias reduction compared to existing methods.

### Why it matters

**Research problem:** Existing meta-learning algorithms for few-shot learning focus on accuracy generalization but largely ignore fairness constraints, resulting in models that may perpetuate biases when adapting to new tasks. The problem is how to develop meta-learning methods that ensure both accuracy and fairness generalization on unseen tasks with limited data.

**Why it matters:** Machine learning models trained on biased historical data can produce unfair predictions that discriminate against protected groups. Ensuring fairness in models that quickly adapt to new tasks is critical for ethical AI deployment, especially in sensitive applications involving protected attributes like race or gender.

**Key contributions:**

- Introduction of a novel primal-dual fair meta-learning framework (PDFM) that jointly optimizes model and fairness parameters.
- Development of a dual subgradient algorithm with an averaging scheme to approximate primal and dual solutions efficiently.
- Theoretical analysis proving existence of solutions, convergence guarantees, and efficiency of the proposed algorithms.
- Empirical validation on three real-world datasets demonstrating superior fairness generalization and bias mitigation compared to state-of-the-art baselines.

## About the professor

**Feng Chen** — Professor of Computer Science, Department of Computer Science, University of Texas at Dallas.

Research interests: I develop methods that help AI systems recognize uncertainty, identify unfamiliar or unreliable information, and make trustworthy decisions. My work spans large language models and agents, uncertainty quantification, robustness, and algorithmic fairness.

### Research links

- [Faculty/profile page](https://personal.utdallas.edu/~fxc190007)
- [Lab website](https://personal.utdallas.edu/~fxc190007/pdml/)
- [Google Scholar](https://scholar.google.com/citations?user=KOQ-SSYAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/21/3047-1.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, primal-dual algorithms, subgradient methods, dual decomposition
**Already in this field?** Skip this entirely if you already understand convex optimization theory and primal-dual subgradient methods in machine learning.

Understanding convex optimization is crucial for grasping the primal-dual subgradient methods and theoretical guarantees presented in the paper on fair meta-learning. The rigorous course option offers a deep, structured university-level treatment of convex optimization fundamentals, while the fast track provides a concise, intuition-driven series that covers key concepts efficiently for quicker comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS769 Optimization in Machine Learning 2022](https://www.youtube.com/playlist?list=PLyo3HAXSZD3xk6Bc3Fri5-efbi4NKDtlO) — Ganesh Ramakrishnan · 34 videos · 47.2h across 34 episodes

**Watch only this:** Lectures 4 through 13, about 13.8 hours — covering convexity basics, convex functions, subgradient calculus, and convexity-related convergence properties essential for understanding the primal-dual algorithm.

*Why it unblocks this paper:* This is a comprehensive university course specifically focused on optimization in machine learning, covering convexity, subgradients, dual decomposition, and convergence analysis, all directly relevant to the primal-dual subgradient approach in the paper.

*If you want all of it:* 47.2 hours across 34 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [convex optimization](https://www.youtube.com/playlist?list=PLO_PNSdP8iq-29wnpz3Yptq4YVbYX6FFe) — xiyou fu · 12 videos · 8.9h across the first 11 episodes

**Watch only this:** First 8 episodes, about 6.4 hours — covering dual ascent, KKT conditions, Lagrange multipliers, and the primal-dual algorithm, which are key to understanding the paper's optimization framework.

*Why it unblocks this paper:* This playlist offers a concise and clear explanation of convex optimization concepts including dual decomposition, KKT conditions, Lagrange multipliers, and primal-dual algorithms, providing a focused and accessible introduction aligned with the paper's methods.

*If you want all of it:* 8.9 hours across the first 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Primal-Dual Subgradient Approach for Fair Meta Learning," start by building foundational knowledge in primal-dual optimization methods, subgradient methods for constrained optimization, meta-learning for few-shot adaptation, and fairness constraints in machine learning. These prerequisites provide the mathematical and conceptual tools necessary to grasp the novel primal-dual fair meta-learning framework proposed by the authors. Finally, focus on the core concept of the paper itself to see how these foundations are integrated into a new meta-learning approach that jointly optimizes accuracy and fairness.

### Primal-dual optimization methods *(prerequisite)*
This section covers the mathematical framework of primal-dual optimization, which is essential for understanding how the paper jointly optimizes model parameters and fairness constraints. The chosen video is a university-level lecture by a leading expert, providing rigorous theoretical foundations and practical insights into primal-dual methods in machine learning.

*How the paper uses it:* The paper's PDFM framework relies on primal-dual optimization to jointly optimize primal (model) and dual (fairness constraint) parameters.

▶ [Primal-dual Optimization Methods for Robust Machine Learning](https://www.youtube.com/watch?v=J5aDsKpH_o4) — Institute for Mathematical Sciences · 47:03 · 3y ago

### Subgradient methods for constrained optimization *(prerequisite)*
Subgradient methods are critical for handling non-differentiable fairness constraints in the paper's optimization approach. The selected video is a detailed university lecture that rigorously explains the subgradient method, its algorithmic steps, and examples, providing the necessary mathematical background for the paper's dual subgradient algorithm.

*How the paper uses it:* The paper uses a dual subgradient algorithm to optimize fairness constraints that may be non-differentiable.

▶ [lecture 07: subgradient method](https://www.youtube.com/watch?v=V8rjHVI-TzE) — opti cmu · 1:10:57 · 13y ago

### Meta-learning for few-shot adaptation *(prerequisite)*
Meta-learning enables models to adapt quickly to new tasks with limited data, which is the fundamental learning paradigm underlying the paper. The chosen talk is a research seminar by a leading AI institute, providing a comprehensive and advanced overview of few-shot learning with meta-learning, including challenges and progress relevant to the paper's context.

*How the paper uses it:* The paper addresses fairness in meta-learning for few-shot adaptation to new tasks.

▶ [Few Shot Learning with Meta Learning Progress Made and Challenges Ahead Hugo Larochelle](https://www.youtube.com/watch?v=FFR-IP_XUlk) — Mila - Institut québécois d'IA · 1:16:57 · 7y ago

### Fairness constraints in machine learning *(prerequisite)*
Understanding how fairness is mathematically formulated and enforced in machine learning models is crucial to grasp the fairness constraints used in the paper. The selected video is a conference talk from ACM FAccT, providing a rigorous and research-focused discussion on fairness, equality, and power in algorithmic decision-making, aligning well with the paper's fairness motivation.

*How the paper uses it:* The paper incorporates task-specific fairness constraints such as decision boundary covariance to mitigate bias.

▶ [Fairness, Equality, and Power in Algorithmic Decision-Making](https://www.youtube.com/watch?v=RMkN_LCBqz8) — ACM FAccT Conference · 20:10 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on fair meta-learning, starting with the basics of meta-learning for few-shot adaptation, then covering fairness constraints in machine learning, followed by subgradient methods for constrained optimization, and primal-dual optimization methods. Finally, it culminates with the core novel method of the paper: the primal-dual fair meta-learning framework. The order ensures a gradual build-up from general principles to the specific approach proposed in the paper.

### Meta-learning for few-shot adaptation *(prerequisite)*
Meta-learning is a technique where models learn how to learn new tasks quickly with very few examples, mimicking human-like rapid adaptation. This concept is fundamental to the paper since it focuses on improving how models adapt fairly and accurately to new tasks with limited data.

*How the paper uses it:* The paper builds on meta-learning to enable fair and accurate adaptation to new tasks with few examples.

▶ [Few Shot Learning with Meta Learning Progress Made and Challenges Ahead Hugo Larochelle](https://www.youtube.com/watch?v=FFR-IP_XUlk) — Mila - Institut québécois d'IA · 1:16:57 · 7y ago

### Fairness constraints in machine learning *(prerequisite)*
Fairness constraints are mathematical formulations used to ensure machine learning models do not produce biased or discriminatory outcomes against protected groups. Understanding these constraints is essential to grasp how the paper enforces fairness during meta-learning.

*How the paper uses it:* The paper incorporates task-specific fairness constraints to reduce bias during model adaptation.

▶ [Stanford CS109 I Fairness I 2022 I Lecture 26](https://www.youtube.com/watch?v=cbzwbr5H_LA) — Stanford Online · 1:09:58 · 3y ago

### Subgradient methods for constrained optimization *(prerequisite)*
Subgradient methods are optimization techniques used when dealing with non-differentiable functions or constraints, allowing iterative improvement even when gradients are not well-defined. This is important for optimizing fairness constraints that may be non-smooth.

*How the paper uses it:* The paper uses a dual subgradient algorithm to jointly optimize model parameters and fairness constraints.

▶ [Subgradient method I: Algorithm and examples](https://www.youtube.com/watch?v=8tiebYS372I) — Sebastian Banert · 21:32 · 5y ago

### Primal-dual optimization methods *(prerequisite)*
Primal-dual optimization involves simultaneously optimizing the original problem (primal) and its dual problem, often enabling efficient handling of constraints and better convergence properties. This framework underpins the joint optimization of accuracy and fairness in the paper.

*How the paper uses it:* The paper proposes a primal-dual meta-learning framework that jointly optimizes primal (model) and dual (fairness) parameters.

▶ [Primal-dual Optimization Methods for Robust Machine Learning](https://www.youtube.com/watch?v=J5aDsKpH_o4) — Institute for Mathematical Sciences · 47:03 · 3y ago

## Already in your library

- [Stanford CS330 Deep Multi-Task & Meta Learning - Domain Generalization l 2022 I Lecture 14](https://www.youtube.com/watch?v=EK0sgHPLou8) — also for: LLM4HAR: Generalizable On-device Human Activity Recognition with Pretrained LLMs (Yi Ding)
- [2. Optimization Problems](https://www.youtube.com/watch?v=uK5yvoXnkSk) — also for: OptiGuide: An Efficient Domain-Independent Package Recommender System Based on Multi-Objective Optimization and User Decision Guidance (Alexander Brodsky)
- [Lecture 13: Duality in Linear Programming](https://www.youtube.com/watch?v=oyVZ3rao6M4) — also for: Determining Attributes to Maximize Visibility of Objects (Gautam Das)
- [The Art of Linear Programming](https://www.youtube.com/watch?v=E72DWgKP_1Y) — also for: The Dangerous Impact of Solver Imprecision on Data Management Techniques (and How to Avoid It) (Panagiotis Manolios)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)
- [Few Shot Learning - EXPLAINED!](https://www.youtube.com/watch?v=VqPmrYFvKf8) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Model Agnostic Meta Learning (MAML) | Machine Learning](https://www.youtube.com/watch?v=ItPEBdD6VMk) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Few-Shot Learning (1/3): Basic Concepts](https://www.youtube.com/watch?v=hE7eGew4eeg) — also for: Sparse Representations for Fast, One-Shot Learning (Gerald J. Sussman)
- [CS 182: Lecture 21: Part 1: Meta-Learning](https://www.youtube.com/watch?v=h7qyQeXKxZE) — also for: Efficient Neural Representation of Volumetric Data using Coordinate-Based Networks (Sumanta N. Pattanaik)
- [Stanford CS229: Machine Learning | Summer 2019 | Lecture 12 - Bias and Variance & Regularization](https://www.youtube.com/watch?v=XhyOAX6oSX4) — also for: Do Large Language Models Discriminate in Hiring Decisions on the Basis of Race, Ethnicity, and Gender? (Rachel Rudinger)
- [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Fairness Criteria, Exploring Fairness in Machine Learning](https://www.youtube.com/watch?v=euwc0va-7Vo) — also for: Long-Term Fair Decision Making through Deep Generative Models (Lu Zhang)
- [Lecture 7: Subgradient Method](https://www.youtube.com/watch?v=L2A6lk2ot-Q) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Subgradient Methods Explained: From Polyak Step to Lasso & SVM](https://www.youtube.com/watch?v=7Ql0LO-a3r4) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the PDFM paper. The beginner project focuses on implementing and visualizing a fairness metric from the paper on a public dataset. The intermediate project involves reimplementing the core primal-dual fair meta-learning algorithm on a smaller dataset and comparing fairness and accuracy against a baseline. The advanced project extends the PDFM framework to handle multiple protected attributes, addressing a stated limitation and exploring a future research direction.

### Beginner — Decision Boundary Covariance Metric Visualization
*Effort: a weekend, ~6 hours*

You build a Python notebook that computes and visualizes the decision boundary covariance (DBC) fairness metric on a public binary classification dataset with a binary protected attribute. You implement the DBC metric as defined in the paper and plot how it varies with model parameters or threshold changes.

**Why it shows you understood the paper:** This project shows you understand the fairness constraint central to PDFM, specifically how decision boundary covariance quantifies bias and can be computed and interpreted on real data.

**Grounded in:** The project demonstrates the fairness constraint metric (decision boundary covariance) used in PDFM to measure bias and guide optimization.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, pandas, Jupyter Notebook

**Data:** Use the UCI Adult Income dataset as a substitute for the paper's Adult Income dataset, focusing on the binary protected attribute 'gender'.

**Build it:**

1. Load and preprocess the Adult Income dataset, encoding the protected attribute and features.
2. Train a simple logistic regression classifier on the dataset.
3. Implement the decision boundary covariance metric as defined in the paper.
4. Compute and plot the DBC metric for the trained model, varying classification thresholds or model parameters.
5. Write a README explaining the metric, its significance, and how the plots relate to fairness.

**Ships as:** A Jupyter notebook and README showing DBC metric implementation, plots illustrating bias measurement, and explanation of fairness constraints.

**Stretch goal:** Add computation and visualization of discrimination (Disc) metric to complement DBC.

### Intermediate — Reimplementation of PDFM on Adult Income Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core primal-dual subgradient algorithm of PDFM from the paper to jointly optimize model parameters and fairness constraints on the Adult Income dataset. You compare the fairness and accuracy results against a baseline meta-learning method such as MAML.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's primal-dual optimization framework into code, apply it to a real dataset, and evaluate fairness generalization compared to standard meta-learning.

**Grounded in:** Reimplements the core PDFM primal-dual meta-learning framework and empirically validates its fairness improvements over baselines on real-world data.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use the UCI Adult Income dataset as a proxy for the paper's Adult Income dataset, focusing on the binary protected attribute 'gender'.

**Build it:**

1. Preprocess the Adult Income dataset for few-shot meta-learning tasks with binary protected attribute.
2. Implement the primal-dual subgradient algorithm as described in the paper, including primal and dual parameter updates.
3. Implement a baseline meta-learning method such as MAML for comparison.
4. Train both methods on multiple few-shot tasks sampled from the dataset.
5. Evaluate and compare fairness metrics (DBC, discrimination) and accuracy on unseen test tasks.
6. Document the implementation details, results, and insights in a README.

**Ships as:** Codebase with PDFM and baseline implementations, evaluation scripts, and a report showing fairness and accuracy comparisons.

**Stretch goal:** Incorporate the averaging scheme for primal and dual solutions as proposed in the paper to improve convergence.

### Advanced — Extending PDFM to Multiple Protected Attributes
*Effort: 3+ weeks, ~60 hours*

You extend the PDFM framework to handle fairness constraints involving multiple protected attributes with multiple levels, addressing a limitation noted in the paper. You implement the extended primal-dual optimization and evaluate it on a dataset with two or more protected attributes, analyzing the trade-offs between accuracy and fairness.

**Why it shows you understood the paper:** This project shows deep comprehension of the PDFM framework and its limitations, and your ability to innovate by generalizing fairness constraints and optimization to more complex, realistic scenarios.

**Grounded in:** Addresses the paper's limitation and future direction of extending the framework to multiple protected attributes with multiple levels.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use the UCI Adult Income dataset augmented with an additional protected attribute (e.g., race) or another public dataset with multiple protected attributes to simulate multi-attribute fairness.

**Build it:**

1. Identify or preprocess a dataset with multiple protected attributes suitable for few-shot meta-learning.
2. Formulate fairness constraints that jointly consider multiple protected attributes, extending decision boundary covariance or other metrics.
3. Modify the primal-dual subgradient algorithm to optimize multiple dual variables corresponding to each fairness constraint.
4. Implement the extended PDFM algorithm and train on few-shot tasks.
5. Evaluate accuracy and multi-attribute fairness metrics on unseen tasks, analyzing trade-offs.
6. Write a detailed report discussing the extension, challenges, results, and potential future improvements.

**Ships as:** An extended PDFM implementation supporting multiple protected attributes, evaluation results, and a comprehensive README/report discussing methodology and findings.

**Stretch goal:** Explore explainable fairness transfer learning by incorporating multitask parameters as suggested in the paper's future directions.
