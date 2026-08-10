---
title: "081 · When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting — Sangmi Lee Pallickara"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sangmi-lee-pallickara"
source_hash: "108d11425c79db914e73c9aa7f36c6f817354ca19552622a6bbb819644f75a09"
sequence: 81
generator: "outreach-garden: managed"
---

# 081 · When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting

## At a glance

- **Professor:** Sangmi Lee Pallickara
- **Institution:** Colorado State University
- **Paper:** [When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting](https://arxiv.org/pdf/2606.19363)
- **Authors:** Rupasree Dey, Abdul Matin, Nathan Orwick, Yao Zhang, Shrideep Pallickara, Sangmi Lee Pallickara
- **Year:** 2026

## Paper overview

This paper presents Guard, a novel framework that distills knowledge from multiple large time-series foundation models into a lightweight, specialized forecasting model. Guard dynamically selects the most relevant teacher model for each data instance and adjusts the distillation strength based on teacher uncertainty. This approach enables accurate and robust forecasting across diverse scientific domains such as meteorology, ecosystem carbon flux, soil moisture, and energy grids, while being efficient enough for deployment on resource-constrained edge devices.

### Why it matters

**Research problem:** Time-series foundation models (TSFMs) encode rich temporal dynamics but suffer from distributional misalignment when applied zero-shot to specific scientific domains, and their large computational cost prohibits deployment in edge sensor networks. The challenge is how to extract useful latent knowledge from these misaligned foundation models to train lightweight, specialized forecasters that are both accurate and efficient.

**Why it matters:** Accurate and resilient time-series forecasting is critical for understanding natural phenomena and monitoring infrastructures in fields like meteorology, agriculture, and energy. However, scientific domains often have limited labeled data and complex dynamics, making direct use of large foundation models impractical. Efficiently leveraging these models' knowledge in a lightweight form enables real-time, trustworthy forecasting on edge devices, which is vital for timely decision-making in climate change, environmental monitoring, and agricultural management.

**Key contributions:**

- Introduced Guard, a multi-teacher knowledge distillation framework with instance-wise adaptive routing and uncertainty-aware gating for scientific time series forecasting.
- Demonstrated that Guard can distill complementary knowledge from misaligned foundation models, improving forecasting accuracy even when teachers perform poorly zero-shot.
- Produced a lightweight student model (~0.3M parameters) suitable for real-time edge deployment with significant compression (>390×) over teacher models.
- Validated Guard across five diverse scientific domains, achieving a 28.3% average RMSE reduction compared to state-of-the-art baselines.
- Provided interpretable routing decisions based on physical regime features, enabling auditable and trustworthy forecasting.

## About the professor

**Sangmi Lee Pallickara** — Clare Booth Luce Professor, Professor of Computer Science, Computer Science, Colorado State University.

Research interests: Big Data for the sciences, predictive analytics, storage, retrieval, and metadata management, data science and data engineering, high-velocity data

### Research links

- [Faculty/profile page](http://www.cs.colostate.edu/~sangmi)
- [Resolved homepage](https://www.cs.colostate.edu/~sangmi/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Knowledge Distillation in Machine Learning
**The paper assumes:** knowledge distillation techniques, teacher-student model training, uncertainty-aware model compression
**Already in this field?** Skip this entirely if you already understand the fundamentals of knowledge distillation and teacher-student training methods in machine learning.

To understand the core methodology of the paper, which centers on knowledge distillation from multiple large foundation models into a lightweight student model with adaptive routing and uncertainty gating, background on knowledge distillation in machine learning is essential. The rigorous course option provides a deep, structured university-level treatment of knowledge distillation within the broader context of ML hardware and systems, while the fast track offers a concise, focused explainer series specifically on knowledge distillation concepts and techniques. Choose the course for comprehensive depth and system-level insights, or the fast track for a quicker, concept-driven introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning Hardware and Systems (Cornell Tech, Spring 2022)](https://www.youtube.com/playlist?list=PL0mFAhrXqy9CuopJhAB8GVu_Oy7J0ery6) — Prof. Mohamed Abdelfattah · 21 videos · 19.9h across the first 20 episodes

**Watch only this:** Watch Lecture 9: Knowledge Distillation (~59 minutes) for focused coverage of the topic within the course.

*Why it unblocks this paper:* This Cornell Tech course includes a dedicated lecture on knowledge distillation (Lecture 9) within a broader ML hardware and systems context, providing rigorous coverage of the principles and practical considerations relevant to distillation frameworks like Guard.

*If you want all of it:* The full playlist is about 19.9 hours across the first 20 episodes, covering ML hardware, efficiency, and related topics.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Knowledge Distillation](https://www.youtube.com/playlist?list=PLzXhOfVed5oYjv0tKuzKgvZlIGLheQ9FV) — jeromeeusebius · 9 videos · 3.6h across 9 episodes

**Watch only this:** Watch episodes 1-4 (approximately 1.5 hours total) to cover fundamental concepts and examples of knowledge distillation.

*Why it unblocks this paper:* This concise 9-episode playlist by jeromeeusebius is dedicated specifically to knowledge distillation, explaining core concepts, examples, and recent advances in an accessible manner, ideal for quickly grasping the essentials relevant to the paper.

*If you want all of it:* The entire playlist is about 3.6 hours across 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Guard framework for multi-foundation model knowledge distillation in scientific time series forecasting, start by building foundational knowledge on uncertainty quantification in deep learning, adaptive model routing mechanisms, lightweight transformer models, and foundation models for time series. These prerequisites provide the theoretical and architectural context for the paper's contributions. Finally, focus on the core concept of knowledge distillation and the authors' own talks or advanced presentations on this topic to grasp the specific innovations and techniques introduced by Guard.

### Uncertainty quantification in deep learning *(prerequisite)*
Understanding uncertainty quantification is critical because Guard modulates distillation strength based on teacher model confidence, requiring robust methods to estimate and leverage uncertainty in deep learning models. This section covers Bayesian deep learning, evidential methods, and practical uncertainty estimation techniques from university lectures and research seminars.

*How the paper uses it:* Guard uses uncertainty-gated temperature networks to attenuate distillation from uncertain or misaligned teachers.

▶ [MIT 6.S191: Uncertainty in Deep Learning](https://www.youtube.com/watch?v=veYq6EWZyVc) — Alexander Amini · 50:08

### Adaptive model routing mechanisms *(prerequisite)*
Adaptive routing dynamically selects the most relevant teacher model per data instance, a core technique in Guard. This section explores advanced routing strategies in AI, including dynamic model selection and routing in neural networks, from research talks and expert seminars.

*How the paper uses it:* Guard employs a Contextual Router to dynamically weight teacher contributions based on local input statistics.

▶ [Route, Serve, Adapt, Repeat: Adaptive Routing for AI Inference Workl... Nir Rozenbaum & Kellen Swain](https://www.youtube.com/watch?v=DxWAsFl9EAA) — CNCF [Cloud Native Computing Foundation] · 3 months ago

### Lightweight transformer models *(prerequisite)*
The student model in Guard is a compact transformer designed for efficient edge deployment. This section covers the architecture and design principles of lightweight transformers, focusing on their suitability for resource-constrained environments, based on advanced seminar series and university talks.

*How the paper uses it:* Guard's student model is a compact transformer trained jointly with adaptive routing and uncertainty gating.

▶ [Your Next-Token Prediction and Transformers Are Biased for ...](https://www.youtube.com/watch?v=A36u6DB_TgU) — ASAP Seminar Series · 1:22:46

### Foundation models for time series *(prerequisite)*
Foundation models serve as the teacher models in Guard. Understanding their architecture, training, and limitations in time series forecasting provides essential context for the distillation framework. This section includes university lectures and conference talks on state-of-the-art time series foundation models.

*How the paper uses it:* Guard distills knowledge from multiple large time-series foundation models that are misaligned zero-shot to specific domains.

▶ [Time Series Foundation Models: A Tutorial and Survey](https://www.youtube.com/watch?v=XRhgrvPilMs) — MLBoost · 1:30:10

### Guard framework talk *(the paper's own talk)*
This section focuses on the core concept of the paper: multi-teacher knowledge distillation with adaptive routing and uncertainty gating for scientific time series forecasting. It includes talks by the authors or closely related advanced presentations that explain the Guard framework and its contributions in detail.

*How the paper uses it:* Directly targets the authors' presentation on the Guard framework and its novel contributions.

▶ [Gurtam DevConf 2024: How knowledge distillation inspires foundation models? | Veronika Suprunovich](https://www.youtube.com/watch?v=4OxWuwXaXMs) — Gurtam. GPS tracking and IoT solutions developer · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of foundation models for time series, which are the large pretrained models serving as teachers in Guard. Then learn about uncertainty quantification in deep learning, a key technique for modulating distillation strength based on teacher confidence. Next, explore adaptive model routing mechanisms, which dynamically select the most relevant teacher model per instance. After that, grasp lightweight transformer models, the architecture enabling efficient edge deployment of the student model. Finally, dive into knowledge distillation, the core method for transferring knowledge from large models to lightweight forecasters, culminating in the specific Guard framework talk that ties all these concepts together.

### Foundation models for time series *(prerequisite)*
Foundation models are large pretrained neural networks trained on vast amounts of time series data to capture general temporal patterns. Understanding these models helps grasp the source of knowledge that Guard distills into a smaller model.

*How the paper uses it:* Guard uses multiple large time-series foundation models as teachers to transfer knowledge to a lightweight student.

▶ [Foundation Models for Time Series](https://www.youtube.com/watch?v=OhEAS5oBcco) — Open Data Science and AI Conference · 56:00

### Uncertainty quantification in deep learning *(prerequisite)*
Uncertainty quantification methods estimate how confident a model is in its predictions, which is crucial for trusting or discounting model outputs. This concept is key to Guard's ability to modulate distillation strength based on teacher uncertainty.

*How the paper uses it:* Guard attenuates distillation strength when teacher confidence diverges from domain reality using uncertainty gating.

▶ [MIT 6.S191: Uncertainty in Deep Learning](https://www.youtube.com/watch?v=veYq6EWZyVc) — Alexander Amini · 50:08

### Adaptive model routing mechanisms *(prerequisite)*
Adaptive routing dynamically selects which model or expert to trust for each input instance based on input features or context. This mechanism enables Guard to leverage complementary strengths of multiple teachers per data instance.

*How the paper uses it:* Guard’s Contextual Router dynamically weights teacher contributions based on local input statistics.

▶ [Route, Serve, Adapt, Repeat: Adaptive Routing for AI Inference Workl... Nir Rozenbaum & Kellen Swain](https://www.youtube.com/watch?v=DxWAsFl9EAA) — CNCF [Cloud Native Computing Foundation] · 3 months ago

### Lightweight transformer models *(prerequisite)*
Lightweight transformers are compact versions of transformer neural networks designed for efficient inference on resource-constrained devices. Understanding these models clarifies how Guard’s student model achieves real-time edge deployment.

*How the paper uses it:* Guard’s student is a compact transformer model (~0.3M parameters) suitable for edge deployment.

▶ [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — Krish Naik · 6:49 · 1 year ago

### Knowledge distillation in time series
Knowledge distillation transfers learned knowledge from large, complex teacher models to smaller, efficient student models. In time series forecasting, this enables building lightweight models that retain accuracy.

*How the paper uses it:* Guard distills knowledge from multiple foundation models into a specialized lightweight forecaster.

▶ [Knowledge Distillation Simplified | Teacher to Student Model ...](https://www.youtube.com/watch?v=_3asoj46jVw) — Unfold Data Science · 29:14

### Guard framework talk *(the paper's own talk)*
This talk presents the Guard framework itself, explaining how it combines adaptive routing and uncertainty gating to distill multiple foundation models into a robust, lightweight forecasting model.

*How the paper uses it:* Direct presentation of Guard’s novel multi-teacher distillation approach and its scientific forecasting applications.

▶ [Gurtam DevConf 2024: How knowledge distillation inspires foundation models? | Veronika Suprunovich](https://www.youtube.com/watch?v=4OxWuwXaXMs) — Gurtam. GPS tracking and IoT solutions developer · 1 year ago

## Already in your library

- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the Guard framework from the paper. Starting with a beginner-level reproduction of the Contextual Router's adaptive teacher weighting on a small synthetic time series, moving to an intermediate-level reimplementation and evaluation of Guard's multi-teacher distillation on a public scientific time series dataset using the authors' released code, and culminating in an advanced project that extends Guard by integrating physics-informed constraints to improve interpretability and accuracy, addressing a future direction stated by the authors.

### Beginner — Adaptive Teacher Weighting Visualization
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates multiple simple teacher models producing forecasts on synthetic time series data with varying volatility and trend. Implement a simplified version of the Contextual Router that dynamically weights teacher contributions based on local input statistics (e.g., volatility). Visualize how the router adjusts weights over time and how this affects the combined forecast.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of instance-wise adaptive routing of teacher models based on input context, a key mechanism in Guard. A professor would see you grasp how local data features influence teacher selection.

**Grounded in:** Introduced Guard, a multi-teacher knowledge distillation framework with instance-wise adaptive routing based on local input statistics.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, Pandas

**Data:** Synthetic univariate time series data generated with controlled volatility and trend patterns to simulate scientific time series characteristics.

**Build it:**

1. Generate synthetic time series data with segments of varying volatility and trend.
2. Simulate predictions from multiple simple teacher models with different error characteristics.
3. Implement a Contextual Router that computes local statistics and assigns dynamic weights to each teacher.
4. Combine teacher predictions weighted by the router and visualize the weights and combined forecast over time.
5. Document the relationship between input statistics and routing decisions in the README.

**Ships as:** A Jupyter Notebook with code, plots showing adaptive teacher weights over time, and a README explaining the routing mechanism and its effect on combined forecasts.

**Stretch goal:** Add uncertainty estimates to teacher predictions and implement a simple uncertainty gating mechanism to modulate weights.

### Intermediate — Reimplement Guard Distillation on Soil Moisture Dataset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' Guard codebase from https://github.com/RupasreeDey/GUARD-KDD2026, then adapt it to train a lightweight student model on a publicly available soil moisture time series dataset (e.g., from the UCI Machine Learning Repository or NASA Earthdata). You compare Guard's adaptive multi-teacher distillation against a fixed-weight baseline and report RMSE metrics similar to the paper.

**Why it shows you understood the paper:** This project shows you can work with the authors' implementation, apply the core Guard method to new data, and reproduce the key result of improved forecasting accuracy via adaptive routing and uncertainty gating. It evidences comprehension of the full pipeline and evaluation.

**Grounded in:** Demonstrated that Guard can distill complementary knowledge from misaligned foundation models, improving forecasting accuracy even when teachers perform poorly zero-shot.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Pandas, Matplotlib

**Data:** Public soil moisture time series dataset from a scientific repository (e.g., NASA Earthdata or UCI ML Repository) used as a substitute for the paper's soil moisture dataset.

**Build it:**

1. Clone and set up the Guard codebase from the authors' GitHub repository.
2. Obtain and preprocess a public soil moisture time series dataset to match input requirements.
3. Run the Guard training pipeline with multiple pretrained teacher models (or simulated teachers if pretrained models unavailable).
4. Implement a fixed-weight distillation baseline for comparison.
5. Evaluate and compare RMSE of Guard vs baseline on test data.
6. Document the setup, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/RupasreeDey/GUARD-KDD2026> — released by the paper's authors

**Ships as:** A GitHub repository with code to run Guard on soil moisture data, scripts for baseline comparison, evaluation metrics, and a README reporting results and analysis.

**Stretch goal:** Experiment with varying the number of teachers or adjusting the uncertainty gating parameters to observe effects on performance.

### Advanced — Physics-Informed Guard for Ecosystem Carbon Flux Forecasting
*Effort: 3-4 weeks*

You extend the Guard framework by integrating physics-informed constraints relevant to ecosystem carbon flux forecasting, such as conservation laws or known seasonal patterns, into the student model training or the routing mechanism. You apply this extended Guard to a public ecosystem carbon flux dataset (e.g., FLUXNET data) and evaluate whether physics-informed Guard improves forecasting accuracy and interpretability compared to the original Guard.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating deep comprehension of Guard's architecture and limitations. It shows initiative in research-level extension and practical application to a complex scientific domain, potentially opening dialogue with the professor.

**Grounded in:** Integrate physics-informed constraints into Guard to further improve scientific forecasting accuracy and interpretability.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Pandas, Matplotlib

**Data:** Public ecosystem carbon flux time series data from FLUXNET or similar scientific repositories, used as a proxy for the paper's ecosystem carbon flux dataset.

**Build it:**

1. Review Guard's architecture and identify integration points for physics-informed constraints.
2. Select relevant physics-informed constraints for ecosystem carbon flux (e.g., seasonal cycles, mass balance).
3. Modify the student model training loss or routing mechanism to incorporate these constraints.
4. Preprocess and prepare the ecosystem carbon flux dataset for training and evaluation.
5. Train the extended Guard model and compare forecasting accuracy and routing interpretability against the original Guard.
6. Document methodology, experiments, results, and insights in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/RupasreeDey/GUARD-KDD2026> — released by the paper's authors

**Ships as:** A GitHub repository with the extended Guard code, training scripts, evaluation results, and a README explaining the physics-informed integration and its impact.

**Stretch goal:** Explore extending the framework to multivariate or spatiotemporal forecasting tasks as a further research step.

_Public scientific datasets used as substitutes for the paper's proprietary datasets may differ in characteristics; verify data suitability and preprocessing requirements before starting._
