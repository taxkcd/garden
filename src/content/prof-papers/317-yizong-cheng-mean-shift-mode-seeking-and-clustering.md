---
title: "317 · Mean Shift, Mode Seeking, and Clustering — Yizong Cheng"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yizong-cheng"
source_hash: "25375ac4051c082c7ae1368b4c41d031d599c1b79c8fc18082abb76963bce8f5"
sequence: 317
generator: "outreach-garden: managed"
---

# 317 · Mean Shift, Mode Seeking, and Clustering

## At a glance

- **Professor:** Yizong Cheng
- **Institution:** University of Cincinnati
- **Paper:** [Mean Shift, Mode Seeking, and Clustering](https://members.loria.fr/MOBerger/Enseignement/Master2/Exposes/meanShiftCluster.pdf)
- **Authors:** Yizong Cheng
- **Year:** 1995

## Paper overview

This paper generalizes and rigorously analyzes the mean shift algorithm, an iterative procedure that shifts data points to the average of their neighbors, showing it as a mode-seeking process useful for clustering and global optimization. The work connects mean shift to gradient ascent on density estimates, proves convergence properties, and demonstrates applications in clustering, Hough transform, and multistart global optimization.

### Why it matters

**Research problem:** How to generalize, analyze, and apply the mean shift algorithm for clustering and mode seeking, clarifying its relation to other clustering methods and proving its convergence and effectiveness.

**Why it matters:** Clustering is a fundamental task in data analysis and pattern recognition, but many clustering algorithms are heuristic or probabilistic with no guaranteed convergence or interpretability. Mean shift offers a deterministic, natural process for clustering and optimization, potentially overcoming limitations of existing methods.

**Key contributions:**

- Generalization of mean shift algorithm to nonflat kernels and weighted points.
- Proof that mean shift is a gradient mapping on a density estimate using a shadow kernel.
- Convergence theorems for mean shift iterations and blurring processes.
- Demonstration that k-means clustering is a limit case of mean shift.
- Application of mean shift to clustering with deterministic outcomes.

## About the professor

**Yizong Cheng** — Assoc Professor, CEAS - Computer Science, University of Cincinnati.

Research interests: Self-organizing algorithms; Similarity and uncertainty representations; Computational biology; Machine learning; Digital libraries; Computer networks; Compilers.

### Research links

- [Faculty/profile page](https://researchdirectory.uc.edu/p/chengy)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 1995 paper "Mean Shift, Mode Seeking, and Clustering" by Yizong Cheng, start with foundational concepts of kernel density estimation and gradient ascent optimization, as these underpin the theoretical framing of mean shift as gradient ascent on a density estimate. Then, explore clustering algorithms to contextualize mean shift among other clustering methods, especially its deterministic nature and relation to k-means. Finally, focus on the core concept of the mean shift algorithm itself, prioritizing the author's own talks or rigorous university lectures that detail the iterative mode seeking and clustering process.

### Kernel density estimation lecture *(prerequisite)*
Kernel density estimation (KDE) is fundamental to understanding how mean shift operates as a mode-seeking algorithm on a density surface. A rigorous lecture on KDE will clarify the construction of density estimates and the role of kernels, which is essential before grasping mean shift's gradient ascent interpretation.

*How the paper uses it:* The paper shows mean shift as gradient ascent on a density estimate constructed with a shadow kernel, making KDE understanding essential.

▶ [MATH5714M, Section 2.1: A Statistical Model for Kernel Density Estimation](https://www.youtube.com/watch?v=hc1d_A9cK5Q) — Jochen Voss · 4 years ago

### Gradient ascent optimization lecture *(prerequisite)*
Gradient ascent is the optimization technique that mean shift implicitly performs on the density estimate. A university-level lecture explaining gradient ascent in higher dimensions will provide the mathematical and conceptual background necessary to appreciate the convergence proofs and mode-seeking behavior in the paper.

*How the paper uses it:* The paper rigorously proves that mean shift iterations correspond to gradient ascent on a density estimate.

▶ [W9_L2: Gradient ascent in higher dimensions | logistic regression](https://www.youtube.com/watch?v=KmBGJCXITHM) — IIT Madras - B.S. Degree Programme · 1 year ago

### Clustering algorithms lecture *(prerequisite)*
Understanding classical clustering algorithms, especially k-means, is important to contextualize mean shift's contributions. A lecture that covers clustering methods at a university or research level will help appreciate the deterministic clustering outcomes and the theoretical connection between mean shift and k-means as a limit case.

*How the paper uses it:* The paper demonstrates that k-means clustering is a limit case of mean shift and contrasts mean shift's deterministic clustering with heuristic methods.

▶ [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — Gate Smashers · 2 years ago

### Paper author talk
The author's own talk provides direct insight into the generalization, analysis, and applications of the mean shift algorithm as presented in the paper. This talk is invaluable for understanding the theoretical contributions, convergence proofs, and practical implications from the original researcher.

*How the paper uses it:* This is a direct presentation by the paper's author on mean shift, mode seeking, and clustering, aligning perfectly with the paper's content.

▶ [Mean Shift Clustering](https://www.youtube.com/watch?v=Evc53OaDTFc) — Udacity · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the mean shift algorithm and its applications as presented in the paper, start by building foundational knowledge of kernel density estimation and gradient ascent optimization, which underpin the algorithm's mode-seeking behavior. Then, learn about clustering algorithms to place mean shift in context before diving into focused explainers on the mean shift algorithm itself. This progression ensures a clear intuition for how mean shift works and why it is effective for clustering and optimization.

### Kernel density estimation lecture *(prerequisite)*
Kernel density estimation (KDE) is a way to estimate the probability density function of data points by smoothing them with a kernel function. Understanding KDE is essential because mean shift operates by iteratively moving points toward the modes (peaks) of such density estimates.

*How the paper uses it:* The paper shows mean shift as a gradient ascent on a density estimate constructed using a kernel function.

▶ [Intro to Kernel Density Estimation](https://www.youtube.com/watch?v=x5zLaWT5KPs) — webel od · 17:38 · 7 years ago

### Gradient ascent optimization lecture *(prerequisite)*
Gradient ascent is an optimization technique that iteratively moves a point uphill on a function to find local maxima. Grasping this concept helps understand how mean shift moves data points toward density peaks by following the gradient of the estimated density.

*How the paper uses it:* Mean shift is rigorously proven to be a gradient ascent procedure on a density estimate in the paper.

▶ [Gradient Descent in 3 minutes](https://www.youtube.com/watch?v=qg4PchTECck) — Visually Explained · 4 years ago

### Clustering algorithms lecture *(prerequisite)*
Clustering groups data points into meaningful subsets based on similarity. Learning about common clustering methods like k-means provides context to appreciate mean shift's deterministic and mode-seeking clustering approach.

*How the paper uses it:* The paper relates mean shift clustering to k-means as a limit case and highlights its deterministic clustering outcomes.

▶ [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — Gate Smashers · 2 years ago

### Mean shift algorithm lecture
This concept focuses on the mean shift algorithm itself: how it iteratively shifts points to the average of their neighbors to find modes of the density. Understanding this process is key to grasping the paper's contributions on convergence, clustering, and optimization.

*How the paper uses it:* The paper generalizes and analyzes the mean shift algorithm as a mode-seeking and clustering method with convergence guarantees.

▶ [Mean Shift Clustering](https://www.youtube.com/watch?v=Evc53OaDTFc) — Udacity · 11 years ago

## Already in your library

- [12. Clustering](https://www.youtube.com/watch?v=esmzYhuFnds) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the mean shift algorithm as presented in Cheng's 1995 paper. The beginner project focuses on implementing the core mean shift iteration and visualizing mode convergence on a simple 2D synthetic dataset. The intermediate project applies a faithful reimplementation of mean shift clustering on a public dataset, comparing it to k-means clustering to illustrate the deterministic clustering and mode-seeking properties. The advanced project tackles a stated limitation by exploring scalable approximations of mean shift using efficient neighbor search data structures, aiming to reduce computational complexity while preserving convergence behavior.

### Beginner — Mean Shift Mode Seeking on 2D Synthetic Data
*Effort: a weekend, ~8 hours*

You build a Python implementation of the mean shift algorithm with a Gaussian kernel on a small synthetic 2D dataset (e.g., a mixture of Gaussian blobs). You visualize the iterative shifting of points toward modes and plot the convergence of points to local maxima of the estimated density.

**Why it shows you understood the paper:** This project demonstrates you understand mean shift as a gradient ascent on a kernel density estimate and the mode-seeking nature of the algorithm, as well as its convergence properties on simple data.

**Grounded in:** Mean shift converges to local maxima of a density estimate function.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D Gaussian mixture data generated in code to simulate multimodal density.

**Build it:**

1. Generate a synthetic 2D dataset with multiple Gaussian clusters.
2. Implement the mean shift update step using a Gaussian kernel.
3. Iterate mean shift updates for each data point until convergence.
4. Visualize the initial points and their trajectories converging to modes.
5. Plot the final cluster centers corresponding to density maxima.

**Ships as:** A Jupyter notebook showing the mean shift iterations, convergence plots, and visualizations of mode seeking on synthetic data.

**Stretch goal:** Add support for different kernel functions and compare convergence behavior.

### Intermediate — Mean Shift Clustering vs K-Means on Iris Dataset
*Effort: 1-2 weekends, ~15 hours*

You reimplement the core mean shift clustering algorithm from the paper, applying it to the well-known Iris dataset. You compare the clustering results and cluster centers to those obtained by k-means, demonstrating the deterministic nature and mode-seeking behavior of mean shift.

**Why it shows you understood the paper:** This project shows you can faithfully implement the generalized mean shift clustering method, understand its relation to k-means as a limit case, and evaluate clustering outcomes on real data, reflecting the paper's key contributions.

**Grounded in:** Demonstration that k-means clustering is a limit case of mean shift; Mean shift clustering outcomes are deterministic and reveal stable cluster structures without prior assumptions on cluster number.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Matplotlib, Jupyter Notebook

**Data:** The Iris dataset, a classic public dataset for clustering and classification tasks.

**Build it:**

1. Load and preprocess the Iris dataset.
2. Implement mean shift clustering with a Gaussian kernel and bandwidth selection.
3. Run k-means clustering on the same data for baseline comparison.
4. Compare cluster assignments, centers, and visualize clusters.
5. Analyze and report on the deterministic outcomes and cluster stability.

**Ships as:** A Jupyter notebook comparing mean shift clustering and k-means on Iris, with visualizations and analysis of clustering behavior.

**Stretch goal:** Experiment with different kernel bandwidths and weighted points to observe effects on clustering.

### Advanced — Scalable Mean Shift Clustering with Approximate Nearest Neighbors
*Effort: 3+ weeks, ~40+ hours*

You develop an extension of mean shift clustering that uses approximate nearest neighbor search (e.g., via KD-trees or locality-sensitive hashing) to reduce the O(n^2) computational cost per iteration. You evaluate the scalability and convergence behavior on a moderately sized public dataset, analyzing trade-offs between speed and clustering quality.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by improving computational efficiency while maintaining convergence guarantees, demonstrating deep comprehension of mean shift's computational challenges and practical applicability.

**Grounded in:** Improving computational efficiency via better data structures and neighbor search; Computational cost per iteration is O(n^2), reducible to O(n log n) with efficient data structures.

**Tech stack:** Python 3.11, NumPy, scikit-learn, faiss or Annoy (for approximate nearest neighbors), Matplotlib, Jupyter Notebook

**Data:** A publicly available moderate-sized dataset such as the Wine dataset or a synthetic dataset scaled to thousands of points to test scalability.

**Build it:**

1. Implement baseline mean shift clustering with exact neighbor computations.
2. Integrate an approximate nearest neighbor library to find neighbors efficiently.
3. Modify mean shift updates to use approximate neighbors for shifting points.
4. Benchmark runtime and clustering quality against the baseline on datasets of increasing size.
5. Visualize convergence behavior and analyze trade-offs between speed and accuracy.

**Ships as:** A Jupyter notebook and scripts demonstrating scalable mean shift clustering with approximate neighbor search, including runtime and clustering quality comparisons.

**Stretch goal:** Explore adaptive kernel bandwidths or weighted points to further improve clustering robustness.
