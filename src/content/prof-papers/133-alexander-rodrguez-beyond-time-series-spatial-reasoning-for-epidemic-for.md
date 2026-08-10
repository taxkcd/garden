---
title: "133 · Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning — Alexander Rodríguez"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexander-rodriguez"
source_hash: "428af52734cf5372de737e3b90369d9d599421e0f0b114e5247ffc31073d9216"
sequence: 133
generator: "outreach-garden: managed"
---

# 133 · Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning

## At a glance

- **Professor:** Alexander Rodríguez
- **Institution:** University of Michigan
- **Paper:** [Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning](https://arxiv.org/pdf/2606.22171)
- **Authors:** Diana Guadalupe Gomez, Chenwei Wu, Zhiyi Wang, Liyue Shen, Alexander Rodríguez
- **Year:** 2026

## Paper overview

This paper presents M-SPICE, a new AI framework that improves epidemic forecasting by combining traditional time series data with detailed spatial information like temperature and localized disease burden maps. Unlike existing models that treat regions as uniform units, M-SPICE captures sub-regional spatial variations to better predict disease spread, especially for COVID-19, influenza, and influenza-like illnesses. The approach uses attention-based multimodal fusion to integrate spatial and temporal data, leading to more accurate and reliable forecasts, particularly at medium-term horizons.

### Why it matters

**Research problem:** Traditional epidemic forecasting models rely on aggregated regional time series data treating regions as homogeneous units, which obscures important sub-regional spatial heterogeneity that influences disease dynamics. There is a need to integrate spatially localized, high-resolution auxiliary data with temporal surveillance data under realistic public health reporting constraints to improve forecasting accuracy.

**Why it matters:** Accurate epidemic forecasting is critical for public health decision-making and resource allocation. Existing models' inability to leverage fine-grained spatial information limits their predictive power, especially for medium-term forecasts where temporal signals alone become less reliable. Improving spatial reasoning in forecasting models can lead to better epidemic management and intervention strategies.

**Key contributions:**

- Formulation of a multimodal epidemic forecasting setting that incorporates spatially localized auxiliary data misaligned in resolution with temporal surveillance data.
- Development of M-SPICE, a structure-aware spatiotemporal forecasting framework using attention-based multimodal fusion to integrate temporal and spatial signals.
- Systematic interpretability analyses revealing when, where, and how spatial context improves forecasting, showing spatial signals primarily condition temporal representations.
- Extensive evaluation on real-world COVID-19, influenza, and ILI data demonstrating consistent performance gains over state-of-the-art temporal, multimodal, and epidemic forecasting baselines.
- Demonstration of robust probabilistic forecasting with well-calibrated uncertainty estimates across multiple diseases and forecast horizons.

## About the professor

**Alexander Rodríguez** — Assistant Professor, Computer Science and Engineering, University of Michigan.

Research interests: AI methods for modeling complex spatiotemporal dynamics to support trustworthy data-driven decision-making; machine learning, time series analysis, scientific modeling, uncertainty quantification, multi-agent systems, health sciences, engineering

### Research links

- [Faculty/profile page](https://alrodri.engin.umich.edu)
- [Resolved homepage](https://alrodri.engin.umich.edu/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=ILkESaUAAAAJ&view_op=list_works&sortby=pubdate)
- [GitHub](https://github.com/complex-ai-lab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Attention-based deep learning
**The paper assumes:** deep learning with attention mechanisms, Transformer architectures, and multimodal fusion models
**Already in this field?** Skip this entirely if you already have a solid understanding of Transformer models and attention mechanisms in deep learning.

This background focuses on attention-based deep learning, which is central to understanding the M-SPICE model's architecture and multimodal fusion mechanisms in the paper. The rigorous course option offers a deep dive into attention and Transformer architectures within a broader deep learning for computer vision context, ideal for readers seeking comprehensive mastery. The fast track provides a concise, intuition-driven introduction to neural networks and attention mechanisms, suitable for readers who want a solid conceptual grasp quickly without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1, 4, 7, and 8 (Introduction; Neural Networks and Backpropagation; Recurrent Neural Networks; Attention and Transformers), about 4.5 hours — this subset covers foundational deep learning concepts leading up to attention mechanisms critical for the paper.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 includes a dedicated lecture on Attention and Transformers, providing rigorous coverage of attention mechanisms essential to understanding M-SPICE's multimodal fusion and temporal-spatial integration.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1, 3, 6, and 7 (But what is a neural network?; Backpropagation, intuitively; Transformers, the tech behind LLMs; Attention in transformers, step-by-step), about 1.5 hours — this covers the essential intuition behind neural networks and attention.

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks series offers clear, visual, and intuitive explanations of neural networks and attention in transformers, making it an excellent quick primer on the core concepts underlying the paper's attention-based model.

*If you want all of it:* 3.6 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the M-SPICE framework for multimodal epidemic forecasting, start with foundational concepts including attention mechanisms in deep learning, transformer models for time series, spatial epidemiology and disease mapping, and probabilistic forecasting with uncertainty quantification. These prerequisites provide the technical and domain knowledge necessary to grasp the model's architecture and its application context. Finally, focus on the core concept of M-SPICE itself, prioritizing any direct talks by the paper's authors or closely related academic presentations to gain detailed insights into the novel multimodal fusion approach and its epidemiological implications.

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms are fundamental to the M-SPICE model's ability to fuse spatial and temporal information effectively. Understanding how attention works in neural networks, especially self-attention, is critical to grasping how the model dynamically weights and integrates multimodal inputs.

*How the paper uses it:* M-SPICE uses attention-based multimodal fusion to integrate temporal and spatial signals for epidemic forecasting.

▶ [Deep Learning(CS7015): Lec 15.3 Attention Mechanism](https://www.youtube.com/watch?v=yInilk6x-OY) — NPTEL-NOC IITM · 27:38

### Transformer models for time series *(prerequisite)*
Transformers provide the temporal encoding backbone in M-SPICE, enabling the model to capture complex disease dynamics over multiple forecast horizons. A solid understanding of transformer architectures applied to time series forecasting is essential to appreciate the temporal reasoning component of the framework.

*How the paper uses it:* The temporal encoder in M-SPICE is Transformer-based, modeling disease dynamics for multi-step forecasting.

▶ [Arvid Kingl: Temporal Fusion Transformers for Interpretable ...](https://www.youtube.com/watch?v=M7O4VqRf8s4) — nPlan · 45:11

### Spatial epidemiology and disease mapping *(prerequisite)*
Spatial epidemiology provides the domain knowledge about spatial heterogeneity and localized disease burden maps that M-SPICE leverages. Understanding how spatial data is used in disease modeling contextualizes the importance of integrating fine-resolution spatial context with temporal surveillance data.

*How the paper uses it:* M-SPICE incorporates fine-resolution spatial context such as temperature fields and county-level disease burden maps to improve forecasting accuracy.

▶ [Infectious Disease Surveillance and Modeling through Spatial ...](https://www.youtube.com/watch?v=mKMFqDkTMGs) — The Foundations of Biomedical Data Science · 59:32

### Probabilistic forecasting and uncertainty quantification *(prerequisite)*
Reliable epidemic forecasting requires well-calibrated probabilistic predictions to quantify uncertainty. Familiarity with methods for uncertainty quantification in probabilistic regression and forecasting helps in understanding M-SPICE's robust probabilistic outputs and calibration.

*How the paper uses it:* M-SPICE produces calibrated probabilistic forecasts with well-quantified uncertainty across multiple diseases and horizons.

▶ [Methods for Calibrated Uncertainty Quantification in Probabilistic Regression](https://www.youtube.com/watch?v=YXJN5Nc1sFo) — NSF AI Institute for Societal Decision Making · 1 year ago

### M-SPICE epidemic forecasting talk *(the paper's own talk)*
The core concept is the M-SPICE framework itself, which integrates spatial and temporal data via attention-based multimodal fusion for epidemic forecasting. Direct talks by the authors or closely related academic presentations provide the most authoritative and detailed insights into the model design, interpretability analyses, and empirical results.

*How the paper uses it:* This section covers the authors' own presentation or closely related academic talks on the M-SPICE framework and its application to epidemic forecasting.

▶ [Epidemic Model Guided Machine Learning for COVID-19 Forecasts](https://www.youtube.com/watch?v=OHkY8er6rmc) — UCLA Office of Advanced Research Computing (OARC) · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the M-SPICE paper, start by building a foundation in attention mechanisms and Transformer models for time series, as these are core to how the model integrates temporal disease dynamics. Next, learn about spatial epidemiology and disease mapping to grasp the importance of spatial heterogeneity in epidemic forecasting. Then, explore probabilistic forecasting and uncertainty quantification to appreciate how M-SPICE produces reliable predictions. Finally, study multimodal spatiotemporal forecasting and the specific M-SPICE epidemic forecasting approach to see how these concepts combine in practice.

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms allow neural networks to focus on relevant parts of input data dynamically, improving how models understand context and relationships. They are fundamental to Transformer architectures, enabling effective fusion of different data modalities.

*How the paper uses it:* M-SPICE uses attention-based multimodal fusion to integrate spatial and temporal signals for epidemic forecasting.

▶ [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — Under The Hood · 22:10

### Transformer models for time series *(prerequisite)*
Transformers apply attention mechanisms to sequential data, capturing long-range dependencies and complex temporal patterns better than traditional models. They are increasingly used for interpretable, multi-horizon time series forecasting.

*How the paper uses it:* M-SPICE employs a Transformer-based temporal encoder to model evolving disease dynamics over time.

▶ [Temporal Fusion Transformers, EXPLAINED. Advanced Time ...](https://www.youtube.com/watch?v=V14qoa5vZ1I) — Data Heroes · 20:59

### Spatial epidemiology and disease mapping *(prerequisite)*
Spatial epidemiology studies how diseases vary across geographic locations, using maps and spatial data to identify patterns and risk factors. Disease mapping visualizes localized disease burden, crucial for understanding sub-regional heterogeneity.

*How the paper uses it:* M-SPICE integrates fine-resolution spatial context like temperature fields and county-level disease burden maps to capture spatial heterogeneity.

▶ [Spatial Epidemiology: Definition, concepts, methods, and uses](https://www.youtube.com/watch?v=YB3Gz0CiOdI) — TheLawlarry · 6:57

### Probabilistic forecasting and uncertainty quantification *(prerequisite)*
Probabilistic forecasting provides predictions with uncertainty estimates, allowing decision-makers to understand confidence levels and risks. Uncertainty quantification techniques ensure forecasts are well-calibrated and reliable.

*How the paper uses it:* M-SPICE produces calibrated probabilistic forecasts with well-quantified uncertainty across diseases and forecast horizons.

▶ [Uncertainty Quantification (1): Enter Conformal Predictors](https://www.youtube.com/watch?v=xZbuFKWV5NA) — MLBoost · 6:43

### Multimodal spatiotemporal forecasting
Multimodal spatiotemporal forecasting combines multiple data types—such as spatial maps and temporal sequences—to improve prediction accuracy by leveraging complementary information across modes and time.

*How the paper uses it:* M-SPICE formulates epidemic forecasting as a multimodal problem integrating spatially localized auxiliary data with temporal surveillance data.

▶ [Introduction to spatiotemporal modeling and the webinar series](https://www.youtube.com/watch?v=THwdco2_JAk) — DHIS2 · Streamed 7 months ago

### M-SPICE epidemic forecasting talk *(the paper's own talk)*
This talk provides direct insights from the authors on the M-SPICE framework, explaining how spatial reasoning and multimodal fusion improve epidemic forecasting accuracy and interpretability.

*How the paper uses it:* The video offers an overview of M-SPICE’s novel approach to integrating spatial context with temporal disease data for forecasting COVID-19 and influenza.

▶ [Epidemic Model Guided Machine Learning for COVID-19 Forecasts](https://www.youtube.com/watch?v=OHkY8er6rmc) — UCLA Office of Advanced Research Computing (OARC) · 2 years ago

## Already in your library

- [Lecture 13: Attention](https://www.youtube.com/watch?v=YAgjfMR9R_M) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate understanding of the M-SPICE framework from the paper "Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning." The beginner project focuses on reproducing a key interpretability analysis figure using attention visualization, the intermediate project implements a simplified M-SPICE-style multimodal fusion model for epidemic forecasting on public influenza-like illness data, and the advanced project extends the framework to incorporate multi-scale spatial data, addressing a stated limitation of the paper.

### Beginner — Attention Visualization of Spatial-Temporal Fusion in Epidemic Forecasting
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates spatial and temporal token embeddings and implements a simplified attention mechanism to visualize how spatial tokens attend to temporal tokens, reproducing the paper's key interpretability insight that spatial context conditions temporal representations. You create visualizations similar to the attention heatmaps shown in the paper to demonstrate this interaction.

**Why it shows you understood the paper:** This project shows you understand the core multimodal fusion mechanism of M-SPICE and the interpretability analysis revealing the directional attention flow between spatial and temporal modalities.

**Grounded in:** Attention analyses show spatial tokens attend strongly to temporal tokens, indicating spatial information refines temporal disease dynamics rather than driving predictions independently.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, PyTorch (for attention implementation)

**Data:** Simulated token embeddings representing spatial and temporal features; no real epidemic data required.

**Build it:**

1. Implement a simple scaled dot-product attention function in PyTorch.
2. Generate random embeddings to represent spatial and temporal tokens.
3. Compute attention weights from spatial tokens to temporal tokens and vice versa.
4. Visualize the attention matrices as heatmaps using Matplotlib.
5. Write a README explaining how this visualization relates to the paper's interpretability findings.

**Ships as:** A Jupyter notebook with code and visualizations demonstrating attention flow between spatial and temporal tokens, plus a README linking the results to the paper's interpretability claims.

**Stretch goal:** Add an interactive widget to explore attention weights dynamically by varying token embeddings.

### Intermediate — Simplified M-SPICE Multimodal Epidemic Forecasting on Public ILI Data
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the M-SPICE framework that fuses temporal influenza-like illness (ILI) time series data with static spatial context features (e.g., county-level temperature averages) using a Transformer-based temporal encoder and a pretrained spatial encoder. You train and evaluate multi-step ahead forecasts and compare normalized root mean squared error (NRMSE) against a temporal-only Transformer baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core multimodal fusion method and evaluate its benefit over temporal-only models, showing comprehension of the model architecture and evaluation metrics.

**Grounded in:** Development of M-SPICE, a structure-aware spatiotemporal forecasting framework using attention-based multimodal fusion to integrate temporal and spatial signals; M-SPICE outperforms temporal-only baselines in NRMSE across 1-4 week ahead forecasts for influenza-like illnesses.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Pandas, Matplotlib, Jupyter Notebook

**Data:** Public CDC ILI weekly time series data aggregated at state or county level; publicly available US climate data (e.g., NOAA temperature averages) as spatial context proxies.

**Build it:**

1. Download and preprocess CDC ILI weekly time series data for a selected state or region.
2. Obtain and preprocess static spatial context features such as average temperature per county.
3. Implement a Transformer-based temporal encoder for the ILI time series.
4. Implement or reuse a simple pretrained spatial encoder for spatial features.
5. Design a multimodal fusion module using attention to combine spatial and temporal embeddings.
6. Train the model for 1-4 week ahead forecasting and evaluate NRMSE against a temporal-only Transformer baseline.
7. Plot and analyze performance improvements and write a README explaining the results.

**Ships as:** A GitHub repo with code to train and evaluate the simplified M-SPICE model on public ILI data, including performance comparison plots and a detailed README linking the implementation to the paper's core contributions.

**Stretch goal:** Incorporate dynamic spatial inputs by adding time-varying temperature or hospitalization maps if available.

### Advanced — Extending M-SPICE for Multi-Scale Spatial Reasoning with Sub-State Epidemiological Data
*Effort: 3-4 weeks*

You extend the M-SPICE framework to incorporate multi-scale spatial reasoning by integrating sub-state level epidemiological data (e.g., county-level COVID-19 cases) alongside state-level aggregated time series. You design a hierarchical spatial encoder that processes multiple spatial resolutions and fuse these with temporal encodings using horizon-dependent gating. You evaluate forecasting improvements and analyze challenges in scaling spatial granularity.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the framework and the ability to innovate by incorporating multi-scale spatial data under realistic constraints.

**Grounded in:** The framework currently focuses on state-level aggregation and does not yet incorporate multi-scale spatial reasoning across finer geographic units; future directions include extending the framework to support multi-scale spatial reasoning incorporating sub-state epidemiological data aggregated at health service area levels.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Pandas, Matplotlib, Jupyter Notebook

**Data:** Publicly available county-level COVID-19 case counts and hospitalization data from sources like the New York Times COVID dataset or USAFacts; state-level aggregated time series for comparison.

**Build it:**

1. Collect and preprocess multi-scale epidemiological data: county-level and state-level COVID-19 case counts.
2. Design and implement a hierarchical spatial encoder that processes spatial features at multiple geographic resolutions.
3. Integrate the hierarchical spatial encoder with a Transformer-based temporal encoder.
4. Implement horizon-dependent gating to dynamically weight spatial and temporal contributions for multi-step forecasting.
5. Train and evaluate the extended model on multi-scale data, comparing against single-scale baselines.
6. Analyze performance gains and challenges related to spatial resolution scaling.
7. Document findings and relate them to the paper's stated limitations and future directions.

**Ships as:** A comprehensive GitHub repository with code, experiments, and analysis demonstrating multi-scale spatial reasoning extension of M-SPICE, with a detailed README discussing methodology, results, and relation to the paper.

**Stretch goal:** Incorporate temporally resolved environmental data (e.g., daily temperature or mobility data) to further enrich spatial context.
