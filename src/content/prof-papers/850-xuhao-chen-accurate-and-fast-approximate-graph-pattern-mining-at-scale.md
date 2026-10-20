---
title: "850 · Accurate and Fast Approximate Graph Pattern Mining at Scale — Xuhao Chen"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xuhao-chen"
source_hash: "af2a188c2ca196cf27e544c82c42ac0978eb61784b6b01b223ece9ad7c1f229c"
sequence: 850
generator: "outreach-garden: managed"
---

# 850 · Accurate and Fast Approximate Graph Pattern Mining at Scale

## At a glance

- **Professor:** Xuhao Chen
- **Institution:** Michigan State University
- **Paper:** [Accurate and Fast Approximate Graph Pattern Mining at Scale](https://arxiv.org/pdf/2405.03488)
- **Authors:** Anna Arpaci-Dusseau, Zixiang Zhou, Xuhao Chen
- **Year:** 2024

## Paper overview

This paper presents ScaleGPM, a system for fast and accurate approximate graph pattern mining (A-GPM) on large graphs. It addresses key limitations in existing systems by introducing an online convergence detection method with theoretical confidence guarantees, an eager-verify sampling technique to improve hit rates, and a hybrid sampling method that adaptively selects the best sampling scheme. ScaleGPM achieves significant speedups over prior state-of-the-art systems and can handle billion-scale graphs efficiently.

### Why it matters

**Research problem:** Existing approximate graph pattern mining systems suffer from unstable and theoretically unsupported termination mechanisms and poor performance on extremely sparse graphs (needle-in-the-hay cases) due to low sampling hit rates and fixed sampling schemes.

**Why it matters:** Graph pattern mining is fundamental in many applications such as bioinformatics, social network analysis, and fraud detection. Exact mining is computationally expensive, so approximate methods are needed. However, current approximate methods are unreliable and inefficient on large or sparse graphs, limiting their practical adoption.

**Key contributions:**

- Analysis and empirical study identifying limitations in existing A-GPM systems.
- A novel online convergence detection method with theoretical confidence guarantees.
- Introduction of eager-verify mechanism to improve sampling hit rates and convergence speed.
- Hybrid sampling method that adaptively selects the better sampling scheme using cost models.
- Implementation of ScaleGPM system incorporating these techniques and demonstrating significant performance improvements.

## About the professor

**Xuhao Chen** — Assistant Professor, CSE MSU & Research Scientist at CSAIL MIT, Michigan State University.

Research interests: high-performance and intelligent computer systems, at the intersection of computer architecture and databases

### Research links

- [Faculty/profile page](https://chenxuhao.github.io)
- [Lab website](https://bass-research-group.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=GcdGTBAAAAAJ&hl=en)
- [GitHub](https://github.com/chenxuhao)
- [LinkedIn](https://www.linkedin.com/in/xuhao-chen-b7296a43/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** probabilistic graph sampling
**The paper assumes:** probabilistic sampling methods on graphs, statistical error estimation, and graph sparsification techniques
**Already in this field?** Skip this entirely if you already understand probabilistic graph sampling methods and their theoretical error guarantees.

This background focuses on probabilistic graph sampling techniques essential for understanding the core methods in the paper, such as neighbor sampling, graph sparsification, and eager-verify sampling. The rigorous course option offers a deep mathematical foundation in probability and combinatorics relevant to graph sampling, while the fast track provides a concise, intuitive introduction to sampling distributions and confidence intervals to quickly grasp the statistical concepts underpinning convergence detection and error estimation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.1200J Mathematics for Computer Science, Spring 2024](https://www.youtube.com/playlist?list=PLUl4u3cNGP61VNvICqk2HXJTonnKgAc9d) — MIT OpenCourseWare · 24 videos · 31.7h across 24 episodes

**Watch only this:** Lectures 15: Relations and Counting, 16: Counting Techniques, 17: More Counting Techniques, 18: Probability, 19: Conditional Probability, 20: Independence, 21: Random Variables, 22: Expectation, 23: Expectation and Variance, and 24: Large Deviations: Chebyshev and Chernov Bound, Wrap Up — about 13 hours total, focusing on probability and variance estimation relevant to sampling and convergence guarantees.

*Why it unblocks this paper:* MIT 6.1200J Mathematics for Computer Science covers fundamental probability, counting, and graph theory concepts that underpin probabilistic graph sampling and error estimation techniques used in ScaleGPM.

*If you want all of it:* 31.7 hours across all 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Sampling distributions | AP Statistics | Khan Academy](https://www.youtube.com/playlist?list=PLSQl0a2vh4HBrMFHsJOEQLOKpfEAyYOAJ) — Khan Academy · 11 videos · 1.7h across 11 episodes

**Watch only this:** Episodes 1 through 6: Sampling distribution example problem, Probability of sample proportions example, Sampling distribution of sample proportion parts 1 and 2, Sampling distribution of the sample mean, and Standard error of the mean — about 54 minutes total, covering core concepts of sampling error and confidence estimation.

*Why it unblocks this paper:* Khan Academy's Sampling distributions playlist offers clear, concise explanations of sampling distributions, standard errors, and confidence intervals, which are key to understanding the paper's online convergence detection and error guarantees.

*If you want all of it:* 1.7 hours across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Accurate and Fast Approximate Graph Pattern Mining at Scale," start by building foundational knowledge on graph sparsification methods and graph sampling techniques, which are crucial for grasping the hybrid sampling approach. Then, study cost models for sampling and online convergence detection to appreciate the adaptive and theoretically guaranteed aspects of ScaleGPM. Finally, focus on the core concept of approximate graph pattern mining and the authors' own talk on related state-of-the-art systems to connect all innovations presented in the paper.

### Graph sparsification methods *(prerequisite)*
Graph sparsification is a fundamental technique to reduce graph size while preserving key properties, which is essential for ScaleGPM's hybrid sampling method that improves performance on sparse graphs. Understanding streaming algorithms for graph sparsification provides insight into how large graphs can be efficiently approximated.

*How the paper uses it:* ScaleGPM uses graph sparsification as one of the adaptive sampling schemes to handle extremely sparse graphs efficiently.

▶ [Graph streaming algorithms Graph sparsification](https://www.youtube.com/watch?v=KcDy2cQdW5g) — NPTEL-NOC IITM · 4y ago

### Graph sampling techniques *(prerequisite)*
Graph sampling techniques form the backbone of approximate graph pattern mining by enabling scalable exploration of large graphs. A solid grasp of different sampling methods and their implications on accuracy and efficiency is necessary to understand ScaleGPM's eager-verify and hybrid sampling innovations.

*How the paper uses it:* ScaleGPM introduces eager-verify and hybrid sampling methods to improve sampling hit rates and adaptively select the best sampling scheme.

▶ [Class 18: Graph Sampling Fundamentals](https://www.youtube.com/watch?v=CW8NMJnN_g0) — Justin Ruths · 7y ago

### Cost models for sampling *(prerequisite)*
Cost models help predict the computational expense of different sampling schemes, enabling adaptive selection to optimize performance. Understanding these models is key to appreciating how ScaleGPM dynamically chooses between neighbor sampling and graph sparsification.

*How the paper uses it:* ScaleGPM uses cost models to adaptively select the better sampling scheme in its hybrid sampling method.

▶ [Learning Cost-Effective Sampling Strategies for Empirical Performance Modeling](https://www.youtube.com/watch?v=c7FQxSZNKWA) — Scalable Parallel Computing Lab, SPCL @ ETH Zurich · 5y ago

### Online convergence detection *(prerequisite)*
Online convergence detection methods provide stable and theoretically guaranteed termination criteria for approximate algorithms. This concept is critical to understanding ScaleGPM's novel on-the-fly convergence detection mechanism that replaces unstable offline profiling.

*How the paper uses it:* ScaleGPM proposes a novel online convergence detection method with theoretical confidence guarantees for stable termination.

▶ [Convergence Algorithm Explained | Lecture 12 | Machine Learning Course](https://www.youtube.com/watch?v=rHBaa1vooCk) — Pratham Chandratre · 1y ago

### Approximate graph pattern mining
Approximate graph pattern mining enables scalable discovery of frequent subgraphs in large graphs by trading off exactness for efficiency. This core concept underpins the entire ScaleGPM system and its improvements over prior work.

*How the paper uses it:* ScaleGPM advances approximate graph pattern mining by addressing limitations in existing systems and improving speed and accuracy.

▶ [NSDI '23 - Arya: Arbitrary Graph Pattern Mining with Decomposition-based Sampling](https://www.youtube.com/watch?v=NlXLuhnJZ9w) — USENIX · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand ScaleGPM, a system for fast and accurate approximate graph pattern mining. It begins with basic graph sampling techniques, then covers graph sparsification methods and cost models for sampling to build intuition on performance tradeoffs. Next, it explains online convergence detection for stable approximate mining termination, and finally focuses on approximate graph pattern mining itself, culminating in understanding ScaleGPM's core innovations.

### Graph sampling techniques *(prerequisite)*
Graph sampling is the process of selecting a subset of nodes or edges from a large graph to analyze its properties efficiently. Understanding different sampling methods helps grasp how ScaleGPM improves efficiency by smartly selecting parts of the graph to examine.

*How the paper uses it:* ScaleGPM improves sampling hit rates and efficiency through novel sampling techniques.

▶ [Class 18: Graph Sampling Fundamentals](https://www.youtube.com/watch?v=CW8NMJnN_g0) — Justin Ruths · 7y ago

### Graph sparsification methods *(prerequisite)*
Graph sparsification reduces a graph's size by approximating it with fewer edges while preserving key properties. This technique is crucial for handling extremely large or sparse graphs efficiently, as used in ScaleGPM's hybrid sampling.

*How the paper uses it:* ScaleGPM uses graph sparsification as part of its hybrid sampling to improve performance on sparse graphs.

▶ [Graph streaming algorithms Graph sparsification](https://www.youtube.com/watch?v=KcDy2cQdW5g) — NPTEL-NOC IITM · 4y ago

### Cost models for sampling *(prerequisite)*
Cost models estimate the computational expense of different sampling methods, enabling adaptive selection of the most efficient approach. Understanding these models is key to appreciating how ScaleGPM dynamically chooses between sampling schemes.

*How the paper uses it:* ScaleGPM adaptively selects sampling schemes based on cost models to optimize performance.

▶ [Learning Cost-Effective Sampling Strategies for Empirical Performance Modeling](https://www.youtube.com/watch?v=c7FQxSZNKWA) — Scalable Parallel Computing Lab, SPCL @ ETH Zurich · 5y ago

### Online convergence detection *(prerequisite)*
Online convergence detection methods monitor algorithm progress in real-time to decide when to stop sampling with guaranteed error bounds. This ensures stable and theoretically sound termination, a core innovation in ScaleGPM.

*How the paper uses it:* ScaleGPM introduces a novel online convergence detection method with theoretical confidence guarantees.

▶ [Convergence Algorithm Explained | Lecture 12 | Machine Learning Course](https://www.youtube.com/watch?v=rHBaa1vooCk) — Pratham Chandratre · 1y ago

### Approximate graph pattern mining
Approximate graph pattern mining finds frequent subgraph patterns efficiently by trading off some accuracy for speed, essential for large-scale graphs. Understanding this concept is critical to grasping ScaleGPM's overall goal and improvements.

*How the paper uses it:* ScaleGPM is a system for fast and accurate approximate graph pattern mining on large graphs.

▶ [#15 Graph Pattern Mining in Data Mining |DM|](https://www.youtube.com/watch?v=4M4e1zBGKCA) — Trouble- Free · 4y ago

## Already in your library

- [Graph Sparsification II: Barrier Functions and Rank-one Updates](https://www.youtube.com/watch?v=r0SGCR7z94s) — also for: Speeding-up Graph Algorithms via Clique Partitioning (Daniel Grosu)
- [Importance Sampling](https://www.youtube.com/watch?v=C3p2wI4RAi8) — also for: The General Stability of Ranking (H. V. Jagadish)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the ScaleGPM paper. The beginner project focuses on implementing and visualizing the online convergence detection mechanism on small synthetic graphs using familiar tools. The intermediate project involves reimplementing the core ScaleGPM approximate graph pattern mining method with eager-verify sampling on a public graph dataset, comparing performance against a baseline. The advanced project extends the hybrid sampling method by integrating an adaptive runtime profiling technique to improve cost model accuracy, addressing a stated limitation of the paper.

### Beginner — Online Convergence Detection Visualization
*Effort: a weekend, ~8 hours*

You build a small Python program that implements the paper's online convergence detection method for approximate graph pattern mining error estimation. Using synthetic small graphs and simple pattern queries, you simulate sampling iterations and plot the predicted error bounds over time until convergence is detected.

**Why it shows you understood the paper:** This project demonstrates your grasp of the novel on-the-fly convergence detection mechanism with theoretical confidence guarantees, a key contribution of the paper.

**Grounded in:** The authors propose a novel on-the-fly convergence detection method ... We prove formally in Theorem 1 that the probability of the true error being smaller than our predicted error is 1 − δ, for a given confidence 1 − δ.

**Tech stack:** Python 3.11, matplotlib, networkx

**Data:** Synthetic small graphs generated with networkx (e.g., random graphs with 50-100 nodes) to simulate graph pattern mining scenarios.

**Build it:**

1. Implement a simple graph pattern mining sampling loop on synthetic graphs using networkx.
2. Implement the online convergence detection algorithm as described in the paper, computing error bounds dynamically.
3. Simulate sampling iterations and record predicted error bounds at each step.
4. Plot the predicted error bounds over iterations using matplotlib to visualize convergence.
5. Write a README explaining the convergence detection method and how the plots demonstrate stable termination with confidence guarantees.

**Ships as:** A Python script and Jupyter notebook showing convergence detection plots on synthetic graphs, with clear explanation of the method and its theoretical guarantees.

**Stretch goal:** Add a comparison plot showing how offline error-latency profiling (ELP) behaves unstably compared to the online method.

### Intermediate — Approximate Graph Pattern Mining with Eager-Verify Sampling
*Effort: 2 weekends, ~20 hours*

You reimplement the core ScaleGPM approximate graph pattern mining method focusing on the eager-verify sampling technique. Using a public graph dataset such as the SNAP social network graphs (e.g., ego-Facebook), you implement neighbor sampling with eager verification to prune unpromising candidates early. You compare sampling hit rates and runtime against a baseline lazy-verify sampling implementation.

**Why it shows you understood the paper:** This project shows you can implement the eager-verify mechanism that improves sampling hit rates and convergence speed, a central innovation of ScaleGPM, and evaluate its impact on real graph data.

**Grounded in:** Our eager-verify method drastically improves sampling hit rate by pruning unpromising candidates as early as possible.

**Tech stack:** Python 3.11, networkx, numpy, pandas

**Data:** Public SNAP ego-Facebook graph dataset ((link removed — unverified)) used as a substitute for large social graphs.

**Build it:**

1. Load and preprocess the SNAP ego-Facebook graph using networkx.
2. Implement a baseline approximate graph pattern mining method with lazy-verify neighbor sampling.
3. Implement the eager-verify sampling technique to prune candidates early during sampling.
4. Run experiments comparing sampling hit rates and runtime between lazy-verify and eager-verify methods.
5. Analyze and plot results showing improved hit rates and faster convergence with eager-verify.
6. Document the implementation details, experimental setup, and results in a README.

**Ships as:** A Python project with scripts to run approximate graph pattern mining on SNAP data, comparing eager-verify vs lazy-verify sampling, with plots and analysis in the README.

**Stretch goal:** Extend the implementation to include the hybrid sampling method that adaptively selects between neighbor sampling and graph sparsification based on cost models.

### Advanced — Adaptive Runtime Profiling for Hybrid Sampling Cost Models
*Effort: 3+ weeks*

You develop an extension to the ScaleGPM hybrid sampling method by integrating an adaptive runtime profiling technique that dynamically estimates average work per sample during neighbor sampling. This aims to improve the accuracy of the cost model used to select between neighbor sampling and graph sparsification. You evaluate your method on sparse graph datasets and analyze its impact on sampling scheme selection and overall performance.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper regarding challenges in estimating average work per sample for neighbor sampling, demonstrating deep comprehension and ability to extend the core method.

**Grounded in:** Estimating average work per sample for neighbor sampling cost model is challenging due to graph structure variability.

**Tech stack:** Python 3.11, networkx, numpy, pandas, matplotlib

**Data:** Public SNAP social network graphs (e.g., ego-Facebook, or other sparse graphs) used to evaluate adaptive profiling and hybrid sampling.

**Build it:**

1. Reimplement the hybrid sampling method from the paper, including neighbor sampling and graph sparsification schemes with cost models.
2. Design and implement an adaptive runtime profiling module that collects statistics on work per sample during neighbor sampling dynamically.
3. Integrate the profiling data to refine the cost model estimates in real-time and adapt sampling scheme selection accordingly.
4. Run experiments on sparse graph datasets to compare performance and accuracy of hybrid sampling with and without adaptive profiling.
5. Analyze results to show improved cost model accuracy and better sampling scheme decisions leading to performance gains.
6. Write detailed documentation explaining the adaptive profiling approach, implementation, experiments, and findings.

**Ships as:** A comprehensive Python project demonstrating an improved hybrid sampling method with adaptive profiling, including experimental evaluation and analysis in the README.

**Stretch goal:** Explore additional pruning techniques to enhance eager-verify sampling and further reduce variance in sampling estimates.

_No code or datasets were released by the paper's authors; public SNAP datasets are used as substitutes for large graphs. Synthetic data is used for the beginner project._
