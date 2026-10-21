---
title: "915 · Dynamic Selective Protection of Sparse Iterative Solvers via ML Prediction of Soft Error Impacts — Padma Raghavan"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-padma-raghavan"
source_hash: "ec1aa741146f97f020083ba1ba9273bf9c6ed862202d84ea851db74a826f0fb4"
sequence: 915
generator: "outreach-garden: managed"
---

# 915 · Dynamic Selective Protection of Sparse Iterative Solvers via ML Prediction of Soft Error Impacts

## At a glance

- **Professor:** Padma Raghavan
- **Institution:** Vanderbilt University
- **Paper:** [Dynamic Selective Protection of Sparse Iterative Solvers via ML Prediction of Soft Error Impacts](https://dl.acm.org/doi/pdf/10.1145/3624062.3624117)
- **Authors:** Zizhao Chen, Thomas Verrecchia, Hongyang Sun, Joshua D. Booth, Padma Raghavan
- **Year:** 2023

## Paper overview

This paper addresses the problem of soft errors in high-performance computing (HPC) systems, which can degrade the performance of sparse iterative solvers like the Preconditioned Conjugate Gradient (PCG) solver. The authors propose a dynamic selective protection method that uses machine learning to predict which parts of the computation are most vulnerable to soft errors and selectively protect those parts to reduce overhead. Their approach reduces the computational overhead compared to traditional full replication or static protection methods.

### Why it matters

**Research problem:** Soft errors frequently occur in large-scale HPC systems and can significantly slow down or disrupt the convergence of sparse iterative solvers such as PCG. Existing resilience techniques like full replication incur high overhead, and not all parts of the computation are equally vulnerable to errors. The challenge is to efficiently protect only the critical parts of the computation to minimize overhead while maintaining solver reliability.

**Why it matters:** As HPC systems grow in scale and complexity, soft errors become more common, threatening the reliability and efficiency of scientific computations. Sparse iterative solvers are widely used in scientific computing, so improving their resilience with minimal overhead is crucial for effective large-scale simulations and analyses.

**Key contributions:**

- Proposed a dynamic selective protection scheme for PCG solver that leverages ML prediction to identify critical elements vulnerable to soft errors.
- Demonstrated that iteration number and matrix row 2-norm are effective features for predicting error impact.
- Evaluated multiple ML classifiers and identified Random Forest as the best performing model for this task.
- Showed that the dynamic ML-based protection reduces resilience overhead compared to full protection and static selective protection schemes.

## About the professor

**Padma Raghavan** — Distinguished Professor of Computer Science, School of Engineering, Vanderbilt University.

Research interests: enhancing the parallel performance, energy efficiency and reliability of computations that involve high-dimensional sparse and unstructured data including matrices, and graphs

### Research links

- [Faculty/profile page](https://engineering.vanderbilt.edu/bio/?pid=padma-raghavan)
- [Professor website](https://engineering.vanderbilt.edu/bio/padma-raghavan)
- [Resolved homepage](https://engineering.vanderbilt.edu/bio/padma-raghavan/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning Classification
**The paper assumes:** supervised machine learning classification algorithms and evaluation metrics
**Already in this field?** Skip this entirely if you already understand supervised classification methods and how to evaluate their performance.

This background focuses on machine learning classification, which is central to the paper's approach of predicting soft error impacts using classifiers like Random Forest, Logistic Regression, SVM, and KNN. The rigorous course option provides a deep, university-level understanding of machine learning classification concepts and evaluation metrics, while the fast track offers a concise, accessible introduction to supervised learning and classification suitable for readers seeking a quicker but solid grasp of the essentials.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE104: Introduction to Machine Learning Full Course](https://www.youtube.com/playlist?list=PLoROMvodv4rN_Uy7_wmS051_q1d6akXmK) — Stanford Online · 19 videos · 14.0h across 19 episodes

**Watch only this:** Lectures 3 (predictors), 4 (validation), 5 (features), 12 (classifiers), 13 (ERM for classifiers), 15 (multiclass classification), and 16 (probabilistic classification), about 5.1 hours total — these cover the core classification concepts and evaluation needed to understand the paper's ML approach.

*Why it unblocks this paper:* Stanford EE104 is a comprehensive introduction to machine learning by a reputable university professor, covering classification methods, evaluation metrics, and foundational concepts directly relevant to understanding the ML classifiers used in the paper.

*If you want all of it:* 14.0 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Machine Learning- Supervised Machine Learning Regression and Classification](https://www.youtube.com/playlist?list=PLYgoNb4RaVpVBf8EXw8Eca7eko9Xc4dJh) — Python Data Structures · 41 videos · 2.4h across the first 19 episodes

**Watch only this:** First 19 episodes (Week 01 Videos 02 to 20), about 2.4 hours total — covers supervised learning basics, classification, and key concepts like cost functions and gradient descent relevant to understanding ML classifiers.

*Why it unblocks this paper:* This short-form playlist by Python Data Structures offers clear, concise videos on supervised learning and classification fundamentals, including regression and classification models, cost functions, and gradient descent, providing an efficient introduction to the ML concepts used in the paper.

*If you want all of it:* 2.4 hours across the first 19 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on dynamic selective protection of sparse iterative solvers via ML prediction of soft error impacts, start with foundational knowledge on soft error resilience in HPC systems and sparse iterative solvers, as these form the problem context and computational basis. Then, study machine learning techniques for error prediction to grasp the key methodology used. Finally, focus on the paper's core contribution of dynamic selective protection, prioritizing any direct author talks or closely related academic presentations to capture the novel approach and results.

### Soft error resilience in HPC *(prerequisite)*
Understanding soft errors and their impact on HPC systems is crucial since the paper addresses resilience against these errors. This section provides foundational knowledge on the challenges and existing approaches to soft error mitigation in high-performance computing environments.

*How the paper uses it:* The paper targets soft errors in HPC systems that degrade sparse iterative solver performance.

▶ [Toward Holistic Soft-Error-Resilient Shared-Memory Multicores](https://www.youtube.com/watch?v=9A3oiIerI0w) — IEEEComputerSociety · 13y ago

### Sparse iterative solvers *(prerequisite)*
Sparse iterative solvers like the Preconditioned Conjugate Gradient (PCG) method are the computational core targeted by the paper's protection scheme. This section covers the mathematical and algorithmic foundations of sparse iterative solvers, enabling a clear understanding of the solver behavior under soft errors.

*How the paper uses it:* The paper focuses on improving resilience of sparse iterative solvers such as PCG.

▶ [https://www.youtube.com › watch?v=o9NlgwYuLOM](https://www.youtube.com/watch?v=o9NlgwYuLOM) — YouTube result via DuckDuckGo

### Machine learning for error prediction *(prerequisite)*
Machine learning is used in the paper to predict the impact of soft errors on solver convergence. This section introduces ML concepts and evaluation metrics relevant to classification tasks, which underpin the paper's approach to selective protection.

*How the paper uses it:* The paper uses ML classifiers to predict which errors will cause significant slowdowns.

▶ [Machine Learning: Scientific Machine Learning for Full-Field Predictions Using HPC Servers...](https://www.youtube.com/watch?v=YJn0vACwnH0) — Rice Ken Kennedy Institute · 4y ago

### Dynamic selective protection methods
Dynamic selective protection is the paper's central contribution, proposing a method to reduce overhead by protecting only critical computations predicted to be vulnerable. This section focuses on resilience techniques that adapt protection dynamically based on runtime information.

*How the paper uses it:* The paper proposes a dynamic selective protection scheme leveraging ML predictions to reduce resilience overhead.

▶ [Designing Resilient AI & HPC Systems | Genaro Acosta, Eviden | DDN at SC24](https://www.youtube.com/watch?v=7auTA9vJrgE) — DDN · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about soft errors in high-performance computing (HPC) systems and why resilience matters. Then, build foundational knowledge of sparse iterative solvers, which are the computational methods targeted by the paper. Next, grasp how machine learning can predict error impacts to enable selective protection. Finally, explore the concept of dynamic selective protection methods that the paper proposes to reduce overhead while maintaining solver reliability.

### Soft error resilience in HPC *(prerequisite)*
Soft errors are transient faults in hardware that can silently corrupt computations in HPC systems, causing slowdowns or incorrect results. Understanding their nature and impact is crucial to appreciating why resilience techniques are needed in large-scale scientific computing.

*How the paper uses it:* The paper addresses soft errors that degrade the performance of sparse iterative solvers in HPC systems.

▶ [Toward Holistic Soft-Error-Resilient Shared-Memory Multicores](https://www.youtube.com/watch?v=9A3oiIerI0w) — IEEEComputerSociety · 13y ago

### Sparse iterative solvers *(prerequisite)*
Sparse iterative solvers are algorithms used to solve large systems of linear equations where most matrix elements are zero. They are widely used in scientific computing for their efficiency with sparse data, and understanding their operation is key to grasping the paper's focus.

*How the paper uses it:* The paper targets the Preconditioned Conjugate Gradient (PCG) sparse iterative solver for resilience improvements.

▶ [https://www.youtube.com › watch?v=o9NlgwYuLOM](https://www.youtube.com/watch?v=o9NlgwYuLOM) — YouTube result via DuckDuckGo

### Machine learning for error prediction *(prerequisite)*
Machine learning can be used to predict which parts of a computation are vulnerable to errors by learning from features of the data and computation. This enables targeted protection rather than blanket approaches, reducing overhead.

*How the paper uses it:* The authors use ML classifiers like Random Forest to predict the impact of soft errors on solver performance.

▶ [HPC Meets Machine Learning - Andres Gómez, Centro Tecnolóxico de Supercomputación de Galicia (CESGA)](https://www.youtube.com/watch?v=Y3W4jccZMT0) — hpcaiadvisorycouncil · 8y ago

## Already in your library

- [Lecture 12: Prediction Error of Machine Learning Model | An Intuitive Analysis| Statistical Learning](https://www.youtube.com/watch?v=73ZO1Ajv6EY) — also for: WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching (Ali Raza Butt)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's dynamic selective protection method for sparse iterative solvers using ML prediction of soft error impacts. The beginner project reproduces a core ML prediction concept on synthetic data, the intermediate project implements the paper's dynamic selective protection scheme on a simplified PCG solver with real sparse matrices, and the advanced project extends the approach by exploring generalization across multiple matrices, addressing a key limitation noted by the authors.

### Beginner — ML Prediction of Soft Error Impact on Synthetic Sparse Matrix Data
*Effort: a weekend, ~8 hours*

You build a simple ML classifier (Random Forest) to predict whether injected soft errors in synthetic sparse matrix-vector multiplication cause solver slowdowns above a threshold. You simulate sparse matrix rows with features like iteration number and row 2-norm, generate labels based on error impact, and train/test the model.

**Why it shows you understood the paper:** This project shows you grasp the core ML prediction task from the paper, including feature selection and classification of error impact, which is central to enabling dynamic selective protection.

**Grounded in:** Demonstrates the paper's key contribution that iteration number and matrix row 2-norm are effective features for predicting error impact and that Random Forest is a strong classifier.

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, Jupyter Notebook

**Data:** Synthetic sparse matrix row features and simulated error impact labels generated in code, as the paper's authors released no dataset.

**Build it:**

1. Generate synthetic sparse matrix row features including iteration number and row 2-norm for multiple iterations.
2. Simulate soft error injection outcomes and label whether the error causes slowdown above a threshold.
3. Train a Random Forest classifier on the synthetic dataset to predict error impact.
4. Evaluate model accuracy, precision, recall, and F1 score.
5. Visualize feature importance and prediction results.

**Ships as:** A Jupyter Notebook showing data generation, model training, evaluation metrics, and plots illustrating the ML prediction of error impact.

**Stretch goal:** Add other classifiers (Logistic Regression, SVM) and compare their performance to Random Forest.

### Intermediate — Dynamic Selective Protection for PCG Solver with ML Prediction
*Effort: 2 weekends, ~20 hours*

You implement a simplified PCG solver that performs sparse matrix-vector multiplication on a public sparse matrix dataset. You inject soft errors during SpMV, extract features (iteration number, row 2-norm), train a Random Forest classifier to predict critical elements, and dynamically apply selective protection by replicating only predicted critical computations. You compare overhead against full and static protection baselines.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's core method of dynamic selective protection guided by ML prediction, demonstrating comprehension of the solver, error injection, feature engineering, and resilience overhead evaluation.

**Grounded in:** Reimplements the paper's main approach and validates the key result that dynamic ML-based protection reduces resilience overhead compared to full and static protection schemes.

**Tech stack:** Python 3.11, scikit-learn, scipy, numpy, matplotlib

**Data:** Use a well-known public sparse matrix from the SuiteSparse Matrix Collection as a substitute for the paper's matrices.

**Build it:**

1. Implement or adapt a PCG solver performing sparse matrix-vector multiplication using scipy.sparse.
2. Inject simulated soft errors at random iterations and vector elements during SpMV.
3. Extract features (iteration number, row 2-norm of matrix rows) for error injection points.
4. Train a Random Forest classifier to predict whether an error causes slowdown above a threshold.
5. Implement dynamic selective protection by replicating only predicted critical computations.
6. Measure and compare resilience overhead for zero protection, full protection, static protection, and dynamic ML-based protection.

**Ships as:** A Python project with scripts and a report comparing overheads and classifier performance, demonstrating dynamic selective protection on a real sparse matrix.

**Stretch goal:** Incorporate additional features such as runtime characteristics to improve prediction accuracy.

### Advanced — Generalized ML Model for Soft Error Impact Prediction Across Multiple Sparse Matrices
*Effort: 3+ weeks*

You extend the ML prediction approach by training a single Random Forest model that generalizes across multiple sparse matrices. You collect features capturing sparse matrix structure beyond iteration number and row 2-norm, such as sparsity pattern metrics. You evaluate prediction accuracy on unseen matrices and analyze the model's ability to generalize, addressing a key limitation and future direction from the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation by developing a generalized ML model, demonstrating deep understanding of the paper's approach and challenges in applying it broadly across HPC problems.

**Grounded in:** Addresses the paper's limitation that current ML models are trained separately per matrix and explores the future direction of developing a single ML model that generalizes across multiple matrices.

**Tech stack:** Python 3.11, scikit-learn, scipy, numpy, matplotlib, pandas

**Data:** Use multiple public sparse matrices from the SuiteSparse Matrix Collection to train and evaluate the generalized model.

**Build it:**

1. Collect multiple diverse sparse matrices from public repositories.
2. Implement feature extraction that captures matrix structural properties beyond iteration number and row 2-norm.
3. Simulate soft error injection and label error impact for each matrix.
4. Train a single Random Forest classifier on combined data from multiple matrices.
5. Evaluate model performance on held-out matrices to test generalization.
6. Analyze feature importance and discuss challenges in cross-matrix prediction.

**Ships as:** A comprehensive codebase and report demonstrating a generalized ML model for soft error impact prediction with evaluation across multiple matrices.

**Stretch goal:** Experiment with online learning or runtime adaptive features to improve prediction in varying HPC environments.
