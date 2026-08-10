---
title: "120 · Modeling information diffusion in social media: data-driven observations — Lawrence O. Hall"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lawrence-o-hall"
source_hash: "0c1c2753b84e3c083e7d6966ec03e5b28db97c861ff64a27c6e4ab57bfd5fb55"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** time series forecasting
**The paper assumes:** time series forecasting methods and evaluation metrics
**Already in this field?** Skip this entirely if you already understand time series forecasting techniques and their evaluation in machine learning contexts.

This background focuses on time series forecasting, a core methodology used in the paper to model and predict social media information diffusion. The rigorous course option provides a deep, structured university-level understanding of forecasting methods, while the fast track offers a concise, intuition-driven introduction suitable for quickly grasping key concepts without extensive time investment. Choose the lane that fits your available time and depth of interest.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2024 Business Forecasting | IIT Bombay](https://www.youtube.com/playlist?list=PLOzRYVm0a65diLBYrP7EpXv7FZFM0Zf3z) — NPTEL IIT Bombay · 38 videos · 21.7h across 38 episodes

**Watch only this:** Lectures 4A and 4B (Components of a Time Series & Measures of Forecast Accuracy), Lectures 5A and 5B (Moving Average Methods), Lectures 9A and 10A (Exponential Smoothing and Trend Projections), Lectures 14A and 14B (ARIMA models), about 4.5 hours total — these cover the essential time series concepts and models relevant to the paper's methodology.

*Why it unblocks this paper:* This IIT Bombay Business Forecasting course covers a comprehensive range of forecasting methods including time series components, model building, and evaluation metrics, directly supporting the paper's use of specialized time series forecasting models and critique of traditional metrics like RMSE and MAE.

*If you want all of it:* 21.7 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Basic Introduction to Time Series Analysis & Forecasting (in R Studio)](https://www.youtube.com/playlist?list=PLasapTYuX87FXPUVye-xuCFmWOPDBKChi) — Data & Donuts · 5 videos · 0.4h across 5 episodes

**Watch only this:** Episodes 1 to 5 (VERY BASIC introduction to TIME SERIES ANALYSIS through Time Series Forecast Evaluation), about 25 minutes total — this concise set covers the foundational ideas and evaluation methods needed to follow the paper's approach.

*Why it unblocks this paper:* This short playlist by Data & Donuts provides a clear, beginner-friendly introduction to time series analysis and forecasting concepts, including decomposition and evaluation metrics, which are crucial for understanding the paper's modular forecasting approach and metric critiques.

*If you want all of it:* 0.4 hours across 5 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity in modeling social media information diffusion as presented in the paper. The beginner project focuses on reproducing a core aggregate activity forecasting result using time series methods familiar to the applicant. The intermediate project implements the paper's modular forecasting approach on a public Twitter dataset, comparing specialized per-topic models against a baseline. The advanced project extends the modular simulation framework to incorporate new user engagement dynamics, addressing a key limitation and future direction of the paper.

### Beginner — Aggregate Topic Activity Forecasting with Time Series
*Effort: a weekend, ~8 hours*

You build a simple time series forecasting pipeline that predicts aggregate social media activity (e.g., retweet counts) on a chosen topic over a short horizon. Using Python and standard libraries, you replicate the paper's finding that aggregate activity can be predicted with reasonable accuracy over one to two weeks.

**Why it shows you understood the paper:** This project demonstrates you understand the core challenge of forecasting aggregate social media activity and the importance of time series modeling as a modular component of the paper's approach.

**Grounded in:** Aggregate social media activity can be predicted accurately over a horizon of one to two weeks.

**Tech stack:** Python 3.11, pandas, scikit-learn, statsmodels, matplotlib

**Data:** Use a publicly available Twitter hashtag time series dataset or simulate aggregate hourly retweet counts for a topic as a substitute for the paper's data.

**Build it:**

1. Collect or simulate hourly aggregate retweet counts for a specific topic over several weeks.
2. Preprocess the data to handle missing values and normalize counts.
3. Implement a baseline forecasting model such as ARIMA or exponential smoothing.
4. Evaluate forecasting accuracy over a one to two week horizon using metrics like RMSE and MAE.
5. Visualize actual vs predicted aggregate activity time series.

**Ships as:** A GitHub repo with a Jupyter notebook showing data loading, model training, evaluation, and plots of forecasted vs actual aggregate social media activity.

**Stretch goal:** Add exogenous event signals (e.g., news event indicators) as features to improve forecasting accuracy.

### Intermediate — Modular Social Media Activity Simulation on Twitter Data
*Effort: 2 weekends, ~20 hours*

You implement a modular pipeline inspired by the paper's approach: separate models for time series forecasting of aggregate activity, conversation tree generation, and user assignment. You apply this pipeline to a public Twitter dataset, comparing specialized per-topic models against a single monolithic baseline, and evaluate using volatility-sensitive metrics.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core modular simulation method and understand the benefits of decomposing the problem, as well as the importance of appropriate evaluation metrics for social media time series.

**Grounded in:** Developed a modular simulation framework decomposing the problem into specialized subproblems for better performance and error correction; Specialized per-topic and per-platform models outperform single monolithic models.

**Tech stack:** Python 3.11, pandas, scikit-learn, networkx, matplotlib, statsmodels

**Data:** Use the Twitter cascade reconstruction scripts from https://github.com/socsim-ta2/socialsim_package as a baseline and public Twitter datasets (e.g., from Twitter API or academic datasets) for simulation input.

**Build it:**

1. Clone and explore the socialsim_package repository to understand Twitter cascade reconstruction.
2. Extract or collect Twitter data for multiple topics over a defined period.
3. Build specialized time series forecasting models per topic to predict aggregate activity.
4. Implement a simple conversation tree generation module using networkx.
5. Assign users to conversation nodes based on activity patterns.
6. Compare performance against a single monolithic forecasting model using metrics that capture bursts and volatility.
7. Document results and insights.

**Verified links from the paper:**

- <https://github.com/socsim-ta2/socialsim_package> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with modular Python scripts/notebooks demonstrating the pipeline, evaluation results comparing modular vs monolithic models, and visualizations of conversation trees and activity forecasts.

**Stretch goal:** Incorporate exogenous real-world event signals to improve forecasting accuracy as per the paper's findings.

### Advanced — Extending Modular Simulation with New User Engagement Modeling
*Effort: 3+ weeks*

You extend the modular simulation framework by adding an inductive user assignment module that models new user engagement dynamics, addressing the paper's limitation on sparse and bursty user behavior. You evaluate how incorporating new user modeling affects micro-level simulation accuracy and forecasting of conversation structures.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the challenges in fine-grained user-level prediction and the modular approach's extensibility.

**Grounded in:** Fine-grained prediction of individual user actions and timing remains highly challenging due to sparse and bursty user behavior; Developing models that better incorporate new user behavior and inductive capabilities for unseen users.

**Tech stack:** Python 3.11, pandas, scikit-learn, networkx, matplotlib, PyTorch or TensorFlow (optional for advanced modeling)

**Data:** Use public Twitter datasets or simulate social media activity with user-level timestamps and new user arrivals to model sparse and bursty behavior.

**Build it:**

1. Review the modular simulation pipeline and identify where user assignment occurs.
2. Design and implement a new user engagement model that can inductively assign actions to previously unseen users based on activity patterns.
3. Integrate this model into the existing modular pipeline.
4. Simulate social media activity including new user bursts and evaluate micro-level accuracy of conversation trees and user actions.
5. Compare results against the baseline modular simulation without new user modeling.
6. Document methodology, challenges, and results.

**Ships as:** A GitHub repo with extended modular simulation code, experiments showing improved micro-level simulation accuracy through new user modeling, and a detailed README explaining the approach and evaluation.

**Stretch goal:** Explore cross-platform diffusion modeling by extending the simulation to multiple social media platforms with platform-specific user behavior modules.
