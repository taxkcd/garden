---
title: "081 · When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting — Sangmi Lee Pallickara"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sangmi-lee-pallickara"
source_hash: "9dbb84115efa502a4503d615f1bccf571abaa11a45a2460534120f94c653cb84"
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
