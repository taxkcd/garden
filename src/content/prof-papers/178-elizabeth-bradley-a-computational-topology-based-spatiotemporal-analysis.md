---
title: "178 · A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation — Elizabeth Bradley"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-elizabeth-bradley"
source_hash: "6f8d89051ce9ff33e608cb54c5783c115d93011e48744c60207f45112bb609af"
sequence: 178
generator: "outreach-garden: managed"
---

# 178 · A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation

## At a glance

- **Professor:** Elizabeth Bradley
- **Institution:** University of Colorado Boulder
- **Paper:** [A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation](https://arxiv.org/pdf/2307.09720)
- **Authors:** Golnar Gharooni-Fard, Morgan Byers, Varad Deshmukh, Elizabeth Bradley, Carissa Mayo, Chad Topaz, Orit Peleg
- **Year:** 2023

## Paper overview

This paper presents a novel method using topological data analysis (TDA) to study how honeybees form groups during food exchange. By analyzing the spatial and temporal patterns of bee positions, the authors detect distinct phases in bee aggregation behavior, both in simulations and real experiments. Their approach can automatically identify changes in group structure without predefined scales, offering insights into collective animal behavior.

### Why it matters

**Research problem:** Understanding and characterizing the spatiotemporal dynamics of collective behavior in honeybee aggregations during trophallaxis (food exchange) is challenging, especially in detecting phase changes in group morphology over time.

**Why it matters:** Honeybee social organization and food exchange are vital for colony function. Quantifying aggregation dynamics can reveal how efficiently food is distributed and improve understanding of collective animal behavior. Existing methods rely on predefined scales or are limited in capturing multi-scale, time-evolving structures.

**Key contributions:**

- Development of a TDA-based framework using CROCKER matrices to capture multi-scale, time-varying morphology of honeybee aggregations.
- Application of dimensionality reduction (ℓ2 norm, PCA) combined with change-point detection and clustering algorithms to automatically detect phase changes in collective behavior.
- Demonstration of the method on both synthetic agent-based models and real experimental data, revealing biologically meaningful phases.
- Identification of an additional late-phase change in longer experiments suggesting a return to dispersed behavior after food distribution.
- Provision of code and some datasets publicly for reproducibility.

## About the professor

**Elizabeth Bradley** — Professor, Computer Science, University of Colorado Boulder.

Research interests: nonlinear dynamics and chaos, scientific computation and AI, fluid dynamics and flow control

### Research links

- [Faculty/profile page](https://www.colorado.edu/cs/elizabeth-bradley)
- [Identity evidence](https://www.cs.colorado.edu/~lizb)
- [Professor website](http://www.cs.colorado.edu/~lizb)
- [Resolved homepage](https://home.cs.colorado.edu/~lizb/)
- [Lab website](https://www.colorado.edu/cs/research/complex-systems)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Topological Data Analysis
**The paper assumes:** topological data analysis, persistent homology, computational topology, multi-scale shape analysis
**Already in this field?** Skip this entirely if you already understand the basics of topological data analysis and persistent homology.

This background focuses on Topological Data Analysis (TDA), which is central to understanding the paper's methodology involving persistent homology and CROCKER matrices for analyzing honeybee aggregation patterns. The rigorous course option provides a deep, structured university-level introduction to computational algebraic topology concepts essential for grasping the mathematical foundations of TDA. The fast track offers a concise, intuition-driven explainer series that covers the core TDA concepts quickly, ideal for readers needing a practical overview without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computational Algebraic Topology Lecture Videos](https://www.youtube.com/playlist?list=PLnLAqsCN_2ke8_EUd_KoJsLkPO0BKrrc6) — Vidit Nanda · 37 videos · 13.4h across 37 episodes

**Watch only this:** Watch Week 1 Lectures 1A to 1E (Simplicial Complexes, Subcomplexes, Geometric Realization, Simplicial Maps, Filtrations and Data), and Week 3 Lectures 3A to 3C (Euler Characteristic, Chain Complexes, Homology), about 3.5 hours total — this subset covers the core topological and homological concepts needed to understand persistent homology and CROCKER matrices.

*Why it unblocks this paper:* Vidit Nanda's Computational Algebraic Topology lecture series is a rigorous university-level course that systematically covers simplicial complexes, filtrations, homology, and related algebraic topology concepts foundational to persistent homology and TDA methods used in the paper.

*If you want all of it:* All 37 episodes, about 13.4 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Topological Data Analysis](https://www.youtube.com/playlist?list=PL8MAmqMDID4w_Rv2m2-lhrLQYrOz9iYMP) — AlgoTales · 9 videos · 2.3h across 9 episodes

**Watch only this:** Watch episodes 1 through 6 (Introduction to TDA, Applications, Simplicial Complex, Oriented Simplicial Complex, Face of a Simplex, Boundary of a Simplex), about 1.5 hours total — these cover the essential concepts to grasp the paper's topological data analysis approach.

*Why it unblocks this paper:* AlgoTales' Topological Data Analysis series provides clear, visual, and concise explanations of TDA fundamentals including simplicial complexes, homology, and boundary operators, making it an excellent quick introduction aligned with the paper's use of persistent homology.

*If you want all of it:* All 9 episodes, about 2.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's novel computational topology-based analysis of honeybee aggregation, start with foundational concepts in collective animal behavior to grasp the biological context. Then study change-point detection algorithms and dimensionality reduction techniques, which are key analytical tools used in the paper. Next, learn about persistent homology and CROCKER matrices as the core topological methods. Finally, watch the authors' own talks to see their direct presentation and insights on their methodology and results.

### Collective animal behavior and aggregation *(prerequisite)*
This section provides the biological and behavioral context for the paper, explaining how animals like honeybees form groups and the significance of aggregation dynamics. Understanding collective animal behavior is essential to appreciate why the paper studies trophallaxis and phase changes in group morphology.

*How the paper uses it:* The paper studies honeybee aggregation during food exchange, a key example of collective animal behavior.

▶ [Collective Movement in Animal Societies](https://www.youtube.com/watch?v=jbDcEw8digE) — ICTP Quantitative Life Sciences · 8 years ago

### Change-point detection algorithms *(prerequisite)*
Change-point detection is a statistical technique to identify times when the properties of a time series change abruptly. This is crucial for the paper's goal of detecting phase changes in honeybee aggregation behavior from topological summaries.

*How the paper uses it:* The authors apply change-point detection algorithms to time series derived from topological data to identify phase changes in aggregation.

▶ [Alain Celisse - Using kernels to detect abrupt changes in time ...](https://www.youtube.com/watch?v=WdgHhhn7P7k) — Institut des Hautes Etudes Scientifiques (IHES) · 50:23

### Dimensionality reduction techniques *(prerequisite)*
Dimensionality reduction methods like PCA and ℓ2 norm calculations reduce complex, high-dimensional data into simpler forms for analysis. The paper uses these techniques to convert CROCKER matrix data into scalar time series for change detection.

*How the paper uses it:* The paper reduces high-dimensional CROCKER matrices to scalar time series using ℓ2 norms and PCA for phase change detection.

▶ [Lec-46: Principal Component Analysis (PCA) Explained | Machine Learning](https://www.youtube.com/watch?v=Dv-Kk7PDEas) — Gate Smashers · 14:06 · 1 year ago

### Persistent homology and CROCKER matrices
Persistent homology is a topological data analysis method that captures features across multiple scales, and CROCKER matrices summarize these features over time. This section covers the core mathematical tools the paper uses to analyze honeybee aggregation morphology.

*How the paper uses it:* The paper's central method uses persistent homology and CROCKER matrices to capture multi-scale, time-varying topological features of bee aggregations.

▶ [Matrix Reduction for Persistent Homology](https://www.youtube.com/watch?v=w23O6vyZIIY) — Melvin Leok · 5 years ago

### Paper authors' talk *(the paper's own talk)*
Watching the authors' own presentations provides direct insight into their methodology, results, and interpretations. These talks often include nuanced explanations and contextual details not found in the paper alone.

*How the paper uses it:* These talks present the authors' explanation and demonstration of their computational topology-based analysis of honeybee aggregation.

▶ [Simulation vs. reality: Honeybee aggregation](https://www.youtube.com/watch?v=C5ZdAW73pjE) — Artificial Life Lab Graz · 14 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational ideas behind collective animal behavior and topological data analysis, then covers key computational techniques like dimensionality reduction and change-point detection, culminating in the core method of persistent homology and CROCKER matrices used in the paper. The sequence builds intuition about the biological motivation first, then the mathematical and algorithmic tools, enabling a clear understanding of how the authors analyze honeybee aggregation dynamics.

### Collective animal behavior and aggregation *(prerequisite)*
Learn about how animals like honeybees coordinate and form groups, which motivates studying their spatial and temporal patterns. This biological context helps understand why detecting changes in group structure is important.

*How the paper uses it:* The paper studies honeybee aggregation during food exchange, a classic example of collective animal behavior.

▶ [Collective Animal Behavior in Nature](https://www.youtube.com/watch?v=QoS_9OcOjX4) — Mansoor Shaukat · 13 years ago

### Topological data analysis *(prerequisite)*
Topological data analysis (TDA) is a way to study the 'shape' of data, capturing features like clusters and holes that persist across scales. This section builds intuition on how TDA extracts meaningful structure from complex datasets.

*How the paper uses it:* The authors use TDA as the fundamental framework to analyze multi-scale, time-varying structures in bee position data.

▶ [Topological Data Analysis (TDA) | An introduction](https://www.youtube.com/watch?v=fpL5fMmJHqk) — Shaw Talebi · 7:42

### Dimensionality reduction techniques *(prerequisite)*
Dimensionality reduction simplifies complex, high-dimensional data into fewer variables while preserving important information. Understanding PCA and ℓ2 norms helps grasp how the paper reduces CROCKER matrices to scalar time series for analysis.

*How the paper uses it:* The paper applies ℓ2 norm and PCA to reduce CROCKER matrices, enabling effective detection of phase changes in aggregation behavior.

▶ [Lec-46: Principal Component Analysis (PCA) Explained | Machine Learning](https://www.youtube.com/watch?v=Dv-Kk7PDEas) — Gate Smashers · 14:06 · 1 year ago

### Change-point detection algorithms *(prerequisite)*
Change-point detection identifies moments when the statistical properties of a time series change, signaling shifts in underlying processes. This technique is key for detecting phase transitions in the bee aggregation data.

*How the paper uses it:* The authors use change-point detection to automatically find times when honeybee group morphology changes.

▶ [Change Point Detection Algorithms](https://www.youtube.com/watch?v=yidQ5G-jKf0) — Data Skeptic · 30:49

### Persistent homology and CROCKER matrices
Persistent homology tracks topological features like connected components across multiple scales, and CROCKER matrices summarize these features over time and scale. This method captures the evolving shape of bee aggregations without preset scales.

*How the paper uses it:* The core method of the paper builds CROCKER matrices from persistent homology to analyze spatiotemporal patterns in honeybee aggregations.

▶ [Introduction to Persistent Homology](https://www.youtube.com/watch?v=h0bnG1Wavag) — Matthew Wright · 11 years ago

## Already in your library

- [Change Point Detection in Time Series](https://www.youtube.com/watch?v=JrOnOcnkR-8) — also for: Autonomous Hamiltonian certification and changepoint detection (Steven T. Flammia)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from reproducing a core visualization from the paper using existing tools, to implementing and extending the paper's topological data analysis method on real data, and finally to addressing a key limitation by improving data quality with machine learning-based tracking. Each project deepens your understanding of the paper's computational topology approach to honeybee aggregation and its challenges.

### Beginner — Visualize CROCKER Matrix ℓ2 Norm Time Series from Honeybee Simulation
*Effort: a weekend, ~8 hours*

You build a Python script that loads a CROCKER matrix vector time series from the authors' simulation dataset, computes the ℓ2 norm of the topological feature vectors over time, and plots the resulting time series to reproduce the key figure showing phase change detection. This reproduces the paper's dimensionality reduction step and visualizes the phase transition after donor introduction.

**Why it shows you understood the paper:** This project shows you understand how the CROCKER matrix encodes multi-scale topological features over time and how the ℓ2 norm reduction reveals phase changes in aggregation behavior, a central mechanism in the paper.

**Grounded in:** Dimensionality reduction via ℓ2 norm of CROCKER vectors enables effective phase change detection.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use the synthetic agent-based simulation data available in the authors' GitHub repository https://github.com/vrd1243/tda_bees_datasets.

**Build it:**

1. Clone and explore the authors' GitHub repository to locate the simulation CROCKER matrix data files.
2. Write a Python script to load the CROCKER matrix vectors for each time step.
3. Compute the ℓ2 norm of each vector to produce a scalar time series.
4. Plot the ℓ2 norm time series using Matplotlib, highlighting the donor introduction time.
5. Add comments explaining how this visualization relates to phase change detection in the paper.

**Verified links from the paper:**

- <https://github.com/vrd1243/tda_bees_datasets> — released by the paper's authors

**Ships as:** A Jupyter notebook or Python script with plots reproducing the ℓ2 norm time series figure from simulation data, with explanatory comments.

**Stretch goal:** Add PCA dimensionality reduction and compare its time series to the ℓ2 norm plot.

### Intermediate — Implement Change-Point Detection on Experimental Honeybee Aggregation Data
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's core TDA pipeline: load experimental bee position data from the authors' datasets, compute persistent homology and CROCKER matrices, reduce dimensionality via ℓ2 norm, and apply a change-point detection algorithm to identify phase changes. You compare your detected change points to the donor introduction time and report timing lag metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main computational topology method end-to-end on real data, including topological feature extraction and temporal change detection, validating the approach's effectiveness.

**Grounded in:** Change-point detection and clustering algorithms successfully detect phase changes in both simulated and experimental data.

**Tech stack:** Python 3.11, GUDHI or Ripser (persistent homology), NumPy, scikit-learn, ruptures (change-point detection), Matplotlib

**Data:** Use the raw image files for dataset C0128 available at https://github.com/vrd1243/tda_bees_datasets; process to extract bee positions as point clouds.

**Build it:**

1. Download and preprocess the experimental dataset C0128 to extract bee position point clouds per time frame.
2. Compute persistent homology and build CROCKER matrices summarizing connected components over multiple scales and times.
3. Reduce the CROCKER matrix vectors to scalar time series using the ℓ2 norm.
4. Apply a change-point detection algorithm (e.g., Pelt from ruptures) to the time series to identify phase changes.
5. Compare detected change points to the known donor introduction time and report lag statistics.
6. Visualize the time series and detected change points with annotations.

**Verified links from the paper:**

- <https://github.com/vrd1243/tda_bees_datasets> — released by the paper's authors

**Ships as:** A Python project with scripts/notebooks that process experimental data, compute TDA summaries, detect phase changes, and visualize results with timing comparisons.

**Stretch goal:** Implement clustering algorithms with time-annotated features and compare their phase change detection performance to change-point detection.

### Advanced — Enhance Bee Position Extraction Using ML Tracking to Improve Topological Analysis
*Effort: few weeks, ~40+ hours*

You develop a machine learning-based tracking pipeline to improve the quality of bee position extraction from dense video frames, addressing occlusion and touching bees. You then feed the improved point clouds into the paper's TDA pipeline to assess whether enhanced data quality leads to more sensitive and accurate phase change detection in aggregation behavior.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors—noisy segmentation and occlusion in video data—and extends their method by integrating advanced ML tracking, demonstrating a deep grasp of both biological data challenges and computational topology analysis.

**Grounded in:** Limitations: Video data segmentation is challenging due to occlusions and touching bees, leading to noisy point clouds.

**Tech stack:** Python 3.11, OpenCV, PyTorch or TensorFlow, Deep SORT or similar multi-object tracking, GUDHI or Ripser, ruptures, NumPy, Matplotlib

**Data:** Use the raw image files for dataset C0128 from https://github.com/vrd1243/tda_bees_datasets as input video frames for tracking.

**Build it:**

1. Implement or adapt a state-of-the-art multi-object tracking algorithm (e.g., Deep SORT) to track individual bees in dense video frames.
2. Process the video frames to generate improved, temporally consistent bee position point clouds with reduced occlusion errors.
3. Apply the paper's persistent homology and CROCKER matrix pipeline to the improved point clouds.
4. Perform dimensionality reduction and change-point detection to identify aggregation phase changes.
5. Compare the sensitivity and timing accuracy of phase change detection using improved tracking data versus the original point cloud data.
6. Document the impact of enhanced data quality on topological analysis results.

**Verified links from the paper:**

- <https://github.com/vrd1243/tda_bees_datasets> — released by the paper's authors

**Ships as:** A comprehensive codebase and report demonstrating improved bee tracking, enhanced TDA analysis, and quantitative comparison of phase change detection accuracy.

**Stretch goal:** Explore alternative dimension reduction techniques or clustering algorithms on the improved data to further refine phase detection.
