---
title: "133 · Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning — Alexander Rodríguez"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexander-rodriguez"
source_hash: "9425e3b36f1db17831ba800ee961fced667f3152dec01899bcf0061db090e055"
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
