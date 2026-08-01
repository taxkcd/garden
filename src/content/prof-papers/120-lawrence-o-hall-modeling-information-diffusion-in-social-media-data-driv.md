---
title: "120 · Modeling information diffusion in social media: data-driven observations — Lawrence O. Hall"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lawrence-o-hall"
source_hash: "b411d7e5c585abdc4a0d40f36f0004448405f1facfb6ccc87a335da6b78dc379"
sequence: 120
generator: "outreach-garden: managed"
---

# 120 · Modeling information diffusion in social media: data-driven observations

## At a glance

- **Professor:** Lawrence O. Hall
- **Institution:** University of South Florida
- **Paper:** [Modeling information diffusion in social media: data-driven observations](https://www.frontiersin.org/articles/10.3389/fdata.2023.1135191/pdf)
- **Authors:** Adriana Iamnitchi, Lawrence O. Hall, Sameera Horawalavithana, Frederick Mubang, Kin Wai Ng, John Skvoretz
- **Year:** 2023

## Paper overview

This paper presents research on simulating and forecasting how information spreads across different social media platforms using machine learning models. The authors describe challenges in modeling due to platform differences, real-world events, and user behavior, and share lessons learned from a multi-year DARPA-funded project. They propose a modular approach that predicts aggregate social media activity and conversation structures, improving accuracy over end-to-end models.

### Why it matters

**Research problem:** Accurately modeling and forecasting information diffusion within and across various social media platforms at fine granularity, capturing realistic user activities and interactions over time.

**Why it matters:** Understanding information spread on social media is crucial for estimating audience exposure, designing interventions against misinformation, and addressing social, political, and economic implications of online behavior.

**Key contributions:**

- Demonstrated that aggregate social media activity can be predicted accurately over weeks, but fine-grained user-level predictions are challenging.
- Showed the importance of incorporating exogenous real-world events for accurate forecasting.
- Developed a modular simulation framework decomposing the problem into specialized subproblems for better performance and error correction.
- Provided extensive data-driven observations across multiple platforms and geopolitical contexts using large datasets.
- Highlighted limitations of traditional evaluation metrics and proposed more suitable ones for social media time series forecasting.

## About the professor

**Lawrence O. Hall** — Distinguished University Professor and Associate Dean of Research and Innovation, Bellini College of Artificial Intelligence, Cybersecurity and Computing, University of South Florida.

Research interests: distributed machine learning, data mining, pattern recognition and integrating AI into image processing

### Research links

- [Faculty/profile page](https://www.usf.edu/ai-cybersecurity-computing/people/faculty/hall-lawrence.aspx)
- [Professor website](https://cse.usf.edu/~lohall/rtn.pdf)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on modeling information diffusion in social media, start with foundational knowledge in time series forecasting and social network analysis, as these underpin the prediction of social media activity and user interactions. Then, explore machine learning approaches tailored for social media data and evaluation metrics specific to time series forecasting to grasp model assessment challenges. Finally, focus on the paper's core concept by watching the authors' own detailed talk presenting their modular simulation framework and data-driven insights.

### Time series forecasting *(prerequisite)*
Time series forecasting is fundamental for predicting aggregate social media activity over time, which is a key part of the paper's modular approach. Understanding advanced forecasting methods and their evaluation helps contextualize the paper's emphasis on specialized time series models and the limitations of traditional metrics.

*How the paper uses it:* The paper uses specialized time series forecasting models to predict aggregate social media activity accurately over weeks.

▶ [Forecast Forward: Mastering Time Series Forecasting with ...](https://www.youtube.com/watch?v=kNx1ufy2ZCQ) — Ikigai · 55:27

### Social network analysis *(prerequisite)*
Social network analysis provides essential tools and concepts for understanding user interactions and conversation structures, which the paper models as part of its simulation pipeline. Grasping network structures and dynamics is critical for appreciating the challenges in fine-grained user-level prediction.

*How the paper uses it:* The paper models conversation tree structures and user assignments, relying on social network analysis principles.

▶ [Introduction to Social Network Analysis [1/5]: Main Concepts](https://www.youtube.com/watch?v=lnLW6ITFY3M) — The Historical Network Research Community · 15:46

### Machine learning for social media *(prerequisite)*
Machine learning techniques are central to building the simulators and predictive models described in the paper. Understanding how ML is applied to social media data, including challenges like sparse and bursty user behavior, is crucial for appreciating the paper's modular and per-platform modeling approach.

*How the paper uses it:* The paper develops machine learning-based simulators trained per platform and topic to forecast social media diffusion.

▶ [Impact of Data Science on Social Media Data - Jyotika Singh](https://www.youtube.com/watch?v=pEsRCucu4Dk) — Open Data Science and AI Conference · 39:39

### Evaluation metrics for time series *(prerequisite)*
Evaluating time series models beyond traditional error metrics is important for assessing prediction quality in social media diffusion, where volatility and bursts matter. This section covers advanced evaluation strategies that align with the paper's critique of RMSE and MAE.

*How the paper uses it:* The paper highlights limitations of traditional evaluation metrics and proposes more suitable ones for social media time series forecasting.

▶ [How are Time Series Models Evaluated](https://www.youtube.com/watch?v=TpS8bcKjzw0) — Aric LaBarr · 3 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct and comprehensive presentation of their research, methodology, and findings on modeling multi-platform information diffusion. It offers insights into their modular simulation framework and data-driven observations, making it indispensable for advanced understanding.

*How the paper uses it:* This talk is by the paper authors presenting their multi-year DARPA-funded project on social media diffusion modeling.

▶ [Modeling Multi-Platform Information Diffusion in Social Media: Data-Driven Observations](https://www.youtube.com/watch?v=wr6RpaskIxA) — Institute of Data Science at Maastricht University · 30:18 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on modeling information diffusion in social media, start by learning the foundational concepts of time series forecasting and social network analysis, which underpin the prediction of social media activity and user interactions. Next, build knowledge on machine learning applications specific to social media to grasp how predictive simulators are constructed. Then, explore evaluation metrics tailored for time series to appreciate how prediction quality is assessed beyond traditional errors. Finally, focus on the core concept of information diffusion modeling as applied in this paper to simulate and forecast information spread across platforms.

### Time series forecasting *(prerequisite)*
Time series forecasting involves analyzing data points collected or recorded at successive points in time to predict future values. This foundational skill helps in understanding how aggregate social media activity, like retweet volumes, can be predicted over days or weeks.

*How the paper uses it:* The paper uses specialized time series forecasting models to accurately predict aggregate social media activity over a horizon of one to two weeks.

▶ [Time Series Forecasting in Python – Tutorial for Beginners](https://www.youtube.com/watch?v=fxx_E0ojKrc) — freeCodeCamp.org · 1:33:01

### Social network analysis *(prerequisite)*
Social network analysis studies the relationships and interactions between users in a network, helping to understand how information flows and conversations form. This is essential for grasping how conversation tree structures and user assignments are modeled in social media.

*How the paper uses it:* The paper models conversation structures and user interactions, which rely on social network analysis principles.

▶ [Introduction to Social Network Analysis [1/5]: Main Concepts](https://www.youtube.com/watch?v=lnLW6ITFY3M) — The Historical Network Research Community · 15:46

### Machine learning for social media *(prerequisite)*
Machine learning techniques are applied to analyze and predict patterns in social media data, such as user behavior and content spread. Understanding these methods is key to appreciating the paper's modular simulation framework that uses machine learning per platform and topic.

*How the paper uses it:* The authors develop machine learning-based simulators trained per platform and topic to forecast social media diffusion.

▶ [Introduction to Machine Learning for Social Media_training](https://www.youtube.com/watch?v=d8WP4tntP0A) — Mathew K Analytics · 30:06

### Evaluation metrics for time series *(prerequisite)*
Evaluating time series models requires metrics that capture not just average errors but also the ability to predict bursts and volatility. This knowledge helps in understanding the paper's critique of traditional metrics like RMSE and MAE and their proposal for more suitable alternatives.

*How the paper uses it:* The paper highlights limitations of traditional evaluation metrics and proposes metrics better aligned with social media time series forecasting.

▶ [How are Time Series Models Evaluated](https://www.youtube.com/watch?v=TpS8bcKjzw0) — Aric LaBarr · 3 years ago

### Information diffusion modeling *(the paper's own talk)*
Information diffusion modeling simulates how information spreads through social networks over time, incorporating user behavior and external events. This core concept ties together forecasting, social network analysis, and machine learning to predict social media activity and conversation dynamics.

*How the paper uses it:* The paper's core contribution is a modular approach to modeling and forecasting information diffusion across multiple social media platforms.

▶ [Modeling Multi-Platform Information Diffusion in Social Media: Data-Driven Observations](https://www.youtube.com/watch?v=wr6RpaskIxA) — Institute of Data Science at Maastricht University · 30:18 · 5 years ago

## Already in your library

- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
