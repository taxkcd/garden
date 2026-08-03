---
title: "178 · A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation — Elizabeth Bradley"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-elizabeth-bradley"
source_hash: "993de07ebbcda4b81b3a6d68f6180550a2ceecb70e342dc80434aa9ea8a20ecb"
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
