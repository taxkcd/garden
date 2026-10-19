---
title: "802 · Quantifying geographic domain shift to decouple the geospatial transferability of human mobility flow generation models — Song Gao"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-song-gao"
source_hash: "1c86f1783422119c2db120ca4fff570da58e70f522d57f1e4e8ebbcd58f71366"
sequence: 802
generator: "outreach-garden: managed"
---

# 802 · Quantifying geographic domain shift to decouple the geospatial transferability of human mobility flow generation models

## At a glance

- **Professor:** Song Gao
- **Institution:** University of Wisconsin - Madison
- **Paper:** [Quantifying geographic domain shift to decouple the geospatial transferability of human mobility flow generation models](https://arxiv.org/pdf/2608.21567)
- **Authors:** Zhiyong Zhou, Song Gao, Qianheng Zhang, Feng Zhang, Zhenhong Du
- **Year:** 2026

## Paper overview

This paper studies how well models that generate human mobility data can be transferred from one geographic region to another. Because real human mobility data are scarce and privacy-sensitive, models are used to generate such data. However, these models often perform differently when applied to new regions. The authors introduce new metrics to measure the intrinsic geographic differences between source and target regions, which affect model transferability. They show that these differences explain why models transfer better or worse across regions and propose ways to quantify and improve this transferability.

### Why it matters

**Research problem:** Human mobility data are limited and costly to collect, so models are used to generate synthetic mobility flows. However, these models often do not transfer well across different geographic regions due to intrinsic geographic differences, which are not well understood or quantified.

**Why it matters:** Understanding and improving the geospatial transferability of human mobility generation models is crucial for producing reliable synthetic mobility data across diverse regions. This impacts urban planning, social science, pandemic response, and environmental studies where mobility data are essential but often unavailable or incomplete.

**Key contributions:**

- Conceptualization of geographic domain shift and proposal of two quantitative metrics (mutual information shift and Moran spatial shift) to characterize intrinsic geographic differences between source and target domains.
- Systematic evaluation of geospatial transferability of multiple human mobility generation models across 48 U.S. states, revealing substantial spatial heterogeneity and asymmetry in transfer performance.
- Demonstration that geographic domain shift metrics have significant explanatory power for model transferability, independent of specific model architectures.
- Provision of a methodological framework to guide the selection of training datasets and improve fairness and robustness in synthetic human mobility data generation.

## About the professor

**Song Gao** — Professor (H.I. Romnes Fellow & AAG Fellow), Director of Geospatial Data Science Lab, Department of Geography, University of Wisconsin - Madison.

Research interests: GIScience, GeoAI, Geospatial Data Science, Human Mobility, Social Sensing, Spatial Networks, Urban Informatics.

### Research links

- [Faculty/profile page](https://geography.wisc.edu/staff/gao-song)
- [Professor website](https://geography.wisc.edu/geods/research)
- [Lab website](https://geography.wisc.edu/geods/)
- [Google Scholar](https://scholar.google.com/citations?user=eLdz_6IAAAAJ)
- [ORCID](http://orcid.org/0000-0003-4359-6302)
- [ResearchGate](https://www.researchgate.net/profile/Song_Gao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** spatial statistics and spatial autocorrelation
**The paper assumes:** spatial statistics, spatial autocorrelation, geographic data analysis, spatial data modeling
**Already in this field?** Skip this entirely if you already understand spatial statistics concepts such as Moran’s I and spatial autocorrelation measures used in geographic data science.

To understand this paper's core methodology on geographic domain shift and spatial autocorrelation, foundational knowledge in spatial statistics and spatial autocorrelation is essential. The rigorous course option offers a deep, structured university-level treatment of spatial statistics concepts including spatial autocorrelation and spatial regression, ideal for thorough comprehension. The fast track provides a concise, intuition-focused introduction to spatial data science and spatial autocorrelation, suitable for quickly grasping key ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Spatial Statistics and Spatial Econometrics - Prof. Gaurav Arora](https://www.youtube.com/playlist?list=PLyqSpQzTE6M9baXEa8Ha5HyxGN2yTeEMP) — NPTEL-NOC IITM · 49 videos · 27.3h across 49 episodes

**Watch only this:** Episodes 1-5 and 10-16, about 6.5 hours — covering introduction to spatial data analysis, spatial statistics basics, entropy, and detailed spatial autocorrelation including variogram and correlogram concepts.

*Why it unblocks this paper:* This NPTEL-NOC IITM course by Prof. Gaurav Arora covers spatial statistics comprehensively, including spatial autocorrelation and variogram modeling, which are directly relevant to understanding the Moran spatial shift metric and spatial dependence concepts used in the paper.

*If you want all of it:* 27.3 hours across 49 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Spatial Data Science (2021)](https://www.youtube.com/playlist?list=PLzREt6r1NenmFyTw8v2JZpEE4PZGNi5Ht) — GeoDa Software · 15 videos · 8.6h across 15 episodes

**Watch only this:** Episodes 1a, 1b, 4a, 5a, 5b, 6a, about 3.5 hours — covering spatial analysis introduction, spatial data analysis, and both global and local spatial autocorrelation concepts.

*Why it unblocks this paper:* This concise lecture series by Luc Anselin at the University of Chicago provides a clear, well-structured introduction to spatial data science and spatial autocorrelation, including global and local Moran’s I, which directly supports understanding the paper’s spatial shift metric.

*If you want all of it:* 8.6 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on geographic domain shift and transferability of human mobility flow generation models, start with foundational knowledge of spatial autocorrelation analysis, which underpins one of the key metrics (Moran spatial shift). Next, build context on domain adaptation in geospatial AI to grasp the transfer learning challenges addressed. Then, review human mobility flow modeling to understand the types of models evaluated. Finally, focus on the paper's core concept of geographic domain shift metrics and the authors' own talk if available, to gain direct insight into their novel contributions and findings.

### Spatial autocorrelation analysis *(prerequisite)*
Spatial autocorrelation is a fundamental spatial statistic measuring how similar or correlated spatial features are across geographic space. Understanding Moran's I, a key measure of spatial autocorrelation, is essential because the paper's Moran spatial shift metric quantifies differences in spatial structure between source and target domains.

*How the paper uses it:* Moran spatial shift metric is based on spatial autocorrelation analysis using Moran's I.

▶ [Moran's I & Spatial Autocorrelation, Explained Visually](https://www.youtube.com/watch?v=_fANnMZf6Oo) — QSPplus · 4mo ago

### Domain adaptation in geospatial AI *(prerequisite)*
Domain adaptation and transfer learning address how models trained in one domain can be adapted to perform well in another, especially when data distributions differ. This background is crucial to understand the transferability challenges and the motivation for quantifying geographic domain shift in the paper.

*How the paper uses it:* The paper studies transferability of human mobility models across geographic domains, a domain adaptation problem in geospatial AI.

▶ [Lecture 43: Domain Adaptation and Transfer Learning in Deep Neural Networks](https://www.youtube.com/watch?v=W7chpiCaMms) — Deep Learning For Visual Computing - IITKGP · 8y ago

### Human mobility flow modeling *(prerequisite)*
Human mobility flow modeling involves generating synthetic mobility data to overcome data scarcity and privacy issues. Understanding the types of models used, such as DeepGravity and others evaluated in the paper, provides context for the evaluation and transferability analysis.

*How the paper uses it:* The paper evaluates four representative human mobility generation models for transferability across regions.

▶ [Paper review | Diffusion-based models for Human Mobility Trajectory Generation](https://www.youtube.com/watch?v=idh3Ns_tFuc) — AI for Transportation · 9mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand geographic domain shift and the transferability of human mobility flow generation models. We start with spatial autocorrelation, a key spatial statistic, then cover human mobility flow modeling to understand the types of models used. Next, we explain domain adaptation in geospatial AI to grasp transfer challenges, and finally focus on the paper's core concept: geographic domain shift metrics that quantify intrinsic geographic differences affecting model transferability.

### Spatial autocorrelation analysis *(prerequisite)*
Spatial autocorrelation measures how similar or related data points are based on their geographic proximity. Moran's I is a common statistic used to quantify this, indicating whether nearby locations have similar values. Understanding this helps grasp how spatial patterns influence model transferability in geographic contexts.

*How the paper uses it:* The paper uses Moran spatial shift, based on Moran's I, to quantify differences in spatial structure between source and target regions.

▶ [Moran's I & Spatial Autocorrelation, Explained Visually](https://www.youtube.com/watch?v=_fANnMZf6Oo) — QSPplus · 4mo ago

### Human mobility flow modeling *(prerequisite)*
Human mobility flow models generate synthetic data representing how people move between locations, often to overcome data scarcity and privacy issues. These models vary in complexity and approach, and understanding their basics is key to appreciating challenges in transferring them across regions.

*How the paper uses it:* The paper evaluates four representative human mobility generation models to study their geospatial transferability.

▶ [Paper review | Diffusion-based models for Human Mobility Trajectory Generation](https://www.youtube.com/watch?v=idh3Ns_tFuc) — AI for Transportation · 9mo ago

### Domain adaptation in geospatial AI *(prerequisite)*
Domain adaptation involves techniques to transfer machine learning models trained in one domain to perform well in another, especially when data distributions differ. In geospatial AI, this addresses challenges when geographic regions have different characteristics affecting model performance.

*How the paper uses it:* The paper investigates geographic domain shift as a form of domain adaptation challenge affecting model transferability across regions.

▶ [46 - Transfer Learning and Domain Adaptation](https://www.youtube.com/watch?v=TqFEGBhRZbk) — AI Nirvana · 5mo ago

## Already in your library

- [Domain Adaptation Explained: Making AI Work in New Environments](https://www.youtube.com/watch?v=wpUdR6MVIHQ) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)
- [Mutual Information, Clearly Explained!!!](https://www.youtube.com/watch?v=eJIp_mgVLwE) — also for: Matching Point of Interests and Travel Blog with Multi-view Information Fusion (Dejing Dou)
- [\[ML 2021 (English version)\] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — also for: Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment (Rajiv Bagai)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of geographic domain shift and geospatial transferability in human mobility generation models. The beginner project focuses on reproducing and visualizing one of the paper's geographic domain shift metrics on a small scale. The intermediate project involves running and extending the authors' released code to evaluate transferability metrics on a subset of the commuting flow dataset. The advanced project tackles a future direction by developing a new spatial structure metric beyond Moran's I and applying it to analyze geographic domain shift.

### Beginner — Calculate and Visualize Mutual Information Shift for Two U.S. States
*Effort: a weekend (~6-8 hours)*

You build a Python script that computes the mutual information (MI) shift metric between geographic features of two selected U.S. states using publicly available census tract-level data. You then visualize the feature distributions and MI shift to illustrate geographic domain shift.

**Why it shows you understood the paper:** This project demonstrates you understand the concept of mutual information shift as a quantitative measure of geographic domain shift and can implement and interpret it on real geographic data.

**Grounded in:** Conceptualization of geographic domain shift and proposal of mutual information shift metric to characterize intrinsic geographic differences between source and target domains.

**Tech stack:** Python 3.11, pandas, numpy, scikit-learn, matplotlib, seaborn, Jupyter Notebook

**Data:** Use publicly available U.S. Census Bureau data for demographic and geographic features at the census tract level for two contiguous U.S. states (e.g., California and Nevada) as a substitute for the paper's dataset.

**Build it:**

1. Download and preprocess census tract-level geographic feature data for two U.S. states.
2. Compute feature distributions for each state and calculate mutual information between features.
3. Implement the mutual information shift metric as the difference in MI between source and target states.
4. Visualize feature distributions and MI shift using plots (histograms, heatmaps).
5. Write a README explaining the metric, data sources, and interpretation of results.

**Ships as:** A GitHub repository with a Jupyter Notebook or Python script that calculates and visualizes mutual information shift between two states, including clear documentation and plots.

**Stretch goal:** Add Moran spatial shift calculation for the same states and compare the two metrics visually.

### Intermediate — Evaluate Geospatial Transferability Using Authors' Code on Subset of Commuting Flows
*Effort: 1-2 weekends (~15 hours)*

You set up and run the authors' released code from https://github.com/GeoDS/GeoDomainShift-Mobility to reproduce the geographic domain shift metrics (mutual information shift and Moran spatial shift) and transferability evaluation on a subset of the commuting flow dataset. You then compare DeepGravity model transferability against a simple baseline (e.g., Gravity Model) on selected states.

**Why it shows you understood the paper:** This project shows you can work with the paper's code and data, reproduce core results, and understand how geographic domain shift metrics relate to model transferability in practice.

**Grounded in:** Systematic evaluation of geospatial transferability of multiple human mobility generation models across U.S. states and demonstration that geographic domain shift metrics explain transferability variations.

**Tech stack:** Python 3.11, pandas, numpy, scikit-learn, matplotlib, seaborn, Jupyter Notebook, Git

**Data:** Use the commuting OD flow dataset and code provided at https://github.com/GeoDS/GeoDomainShift-Mobility (authors' official release).

**Build it:**

1. Clone the authors' GitHub repository and install required dependencies.
2. Explore the dataset and select a manageable subset of states for evaluation.
3. Run the provided scripts to compute mutual information shift and Moran spatial shift metrics for the subset.
4. Run DeepGravity and a simple baseline model (e.g., Gravity Model) on the subset using the leave-one-state-out strategy.
5. Analyze and visualize the relationship between geographic domain shift metrics and model transferability (e.g., CPC, RMSE).
6. Document your findings and any challenges encountered.

**Verified links from the paper:**

- <https://github.com/GeoDS/GeoDomainShift-Mobility> — released by the paper's authors

**Ships as:** A GitHub repository fork with scripts and notebooks reproducing key metrics and transferability results on a subset of states, with visualizations and a report.

**Stretch goal:** Add linear mixed-effects regression analysis to quantify the association between domain shift metrics and transferability on your subset.

### Advanced — Develop and Evaluate a New Spatial Structure Metric Beyond Moran's I
*Effort: 3-4 weeks*

You design and implement a novel spatial structure metric that captures complex spatial patterns (e.g., polycentricity) beyond what Moran's I measures. You apply this metric alongside mutual information shift to analyze geographic domain shift on the commuting flow dataset. You evaluate how this new metric correlates with model transferability and compare it to Moran spatial shift.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction of the paper by extending spatial structure analysis, demonstrating deep comprehension and ability to innovate on the paper's methodology.

**Grounded in:** Limitation: Moran spatial shift captures overall spatial autocorrelation but not complex spatial structure changes; Future direction: develop additional spatial structure metrics to capture broader geographic domain shifts.

**Tech stack:** Python 3.11, pandas, numpy, scipy, geopandas, PySAL, matplotlib, seaborn, Jupyter Notebook

**Data:** Use the commuting OD flow dataset and code from https://github.com/GeoDS/GeoDomainShift-Mobility as the base dataset for analysis.

**Build it:**

1. Review literature on spatial structure metrics beyond Moran's I (e.g., Getis-Ord Gi*, spatial entropy, polycentricity indices).
2. Implement one or more candidate spatial structure metrics in Python using geospatial libraries.
3. Compute the new metric and mutual information shift for multiple U.S. states in the commuting flow dataset.
4. Analyze the correlation between the new metric and model transferability metrics (CPC, RMSE) using statistical methods.
5. Compare results with Moran spatial shift to assess added explanatory power.
6. Write a detailed report discussing methodology, results, and implications for improving geospatial transferability.

**Verified links from the paper:**

- <https://github.com/GeoDS/GeoDomainShift-Mobility> — released by the paper's authors

**Ships as:** A GitHub repository with code implementing the new spatial structure metric, analysis notebooks comparing metrics, and a comprehensive report documenting findings and methodology.

**Stretch goal:** Integrate the new spatial structure metric into a model training pipeline as a regularization term to improve transferability.

_The commuting flow dataset is large and complex; ensure you have sufficient computational resources and time to run the authors' code. Public census tract data may require preprocessing to match the paper's features._
