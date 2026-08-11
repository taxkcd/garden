---
title: "373 · AutoSLO: Practical Latency SLOs on Cloud Data Warehouses – Extended Version — Tim Kraska"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tim-kraska"
source_hash: "169037457c0afc1c1fba3301c996dfee79c57d3a7452f64a02d90f4a651a16d7"
sequence: 373
generator: "outreach-garden: managed"
---

# 373 · AutoSLO: Practical Latency SLOs on Cloud Data Warehouses – Extended Version

## At a glance

- **Professor:** Tim Kraska
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [AutoSLO: Practical Latency SLOs on Cloud Data Warehouses – Extended Version](https://arxiv.org/abs/2607.11770)
- **Authors:** Markos Markakis, Tim Kraska
- **Year:** 2026

## Paper overview

AutoSLO is a framework designed to efficiently manage workloads on multi-cluster cloud data warehouses by meeting latency service-level objectives (SLOs) cost-effectively. It proactively plans resource scaling based on historical workload patterns, adjusts resources reactively to workload changes, and routes queries in real-time to meet latency targets while minimizing costs.

### Why it matters

**Research problem:** Modern cloud data warehouses separate compute from storage, allowing multiple compute clusters to access the same data. However, existing systems lack mechanisms to directly specify and reliably meet latency SLOs for diverse workloads, leading to inefficient resource use and potential SLO violations due to static cluster assignments and reactive scaling delays.

**Why it matters:** Meeting latency SLOs reliably is critical for various workloads like interactive dashboards, ETL jobs, and data science queries, each with different latency and cost requirements. Inefficient resource provisioning wastes money, while under-provisioning risks violating SLOs, degrading user experience and business operations.

**Key contributions:**

- Formulation of SLO-aware multi-cluster workload management problem balancing SLO violation rate and infrastructure cost.
- Design of AutoSLO framework integrating planning, adjustment, and reaction behaviors across multiple timescales.
- Development of Policy Tuner for proactive cluster management using workload forecasting and simulation.
- Creation of Autoscaler with simulation-based scaling decisions triggered by SLO adherence metrics.
- Implementation of Query Router leveraging an enhanced LSTM-based latency predictor (Iconq+) for concurrency-aware query placement.

## About the professor

**Tim Kraska** — Professor of Electrical Engineering and Computer Science, Electrical Engineering and Computer Science, Massachusetts Inst. of Technology.

Research interests: agentic systems, large language models (LLMs), artificial intelligence (AI) for data-centric problems and systems building

### Research links

- [Faculty/profile page](https://people.csail.mit.edu/kraska)
- [Professor website](https://www.csail.mit.edu/person/tim-kraska)
- [Resolved homepage](http://people.csail.mit.edu/kraska)
- [Lab website](https://dsg.csail.mit.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=biuxbRsAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/26/6037)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning for Systems Performance Prediction
**The paper assumes:** machine learning for time series forecasting, recurrent neural networks, LSTM models, performance prediction in computer systems
**Already in this field?** Skip this entirely if you already understand recurrent neural networks and their application to time series forecasting and system performance prediction.

This background focuses on machine learning techniques for systems performance prediction, especially recurrent neural networks like LSTMs used for latency prediction and workload forecasting in AutoSLO. The rigorous course offers a deep, structured university-level treatment of AI and ML foundations relevant to performance prediction, while the fast track provides concise, intuitive explainers on neural networks and LSTMs to quickly grasp the core concepts needed for understanding AutoSLO's latency predictor and workload forecasting.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Artificial Intelligence and Machine Learning in Materials Engineering](https://www.youtube.com/playlist?list=PLFW6lRTa1g82ij-dcyhI_dLSDk_Mb6pR3) — IIT KANPUR-NPTEL · 78 videos

**Watch only this:** Lectures 1-20, about 7 hours — covering fundamentals of machine learning, neural networks, and time series forecasting to understand the ML models used in AutoSLO.

*Why it unblocks this paper:* This IIT Kanpur NPTEL course on Artificial Intelligence and Machine Learning provides a comprehensive, rigorous foundation in ML techniques, including time series forecasting and neural networks, which underpin the LSTM-based latency predictor and workload forecasting in AutoSLO.

*If you want all of it:* All 78 lectures, approximately 30+ hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks / Deep Learning](https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1) — StatQuest with Josh Starmer · 33 videos

**Watch only this:** Episodes 1-10, about 3 hours — focusing on neural network basics, recurrent neural networks, and LSTM fundamentals relevant to performance prediction.

*Why it unblocks this paper:* StatQuest with Josh Starmer's 'Neural Networks / Deep Learning' playlist offers clear, visual, and intuitive explanations of neural networks and LSTMs, ideal for quickly grasping the core ML concepts behind AutoSLO's latency predictor without deep mathematical detail.

*If you want all of it:* All 33 episodes, approximately 10 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AutoSLO paper, start with foundational concepts including workload forecasting, autoscaling in cloud computing, and LSTM-based performance prediction, as these underpin the system's proactive and reactive resource management. Then, focus on the core problem of latency SLO management in cloud data warehouses to contextualize the challenges AutoSLO addresses. Finally, watch the authors' own talks to gain direct insights into their novel multi-timescale framework and its components.

### Workload forecasting for resource management *(prerequisite)*
Workload forecasting is essential for AutoSLO's proactive cluster scaling via the Policy Tuner. Understanding forecasting techniques and their challenges in dynamic environments provides the foundation for appreciating how AutoSLO anticipates workload changes to meet latency SLOs cost-effectively.

*How the paper uses it:* AutoSLO's Policy Tuner relies on workload forecasting to plan cluster scaling proactively.

▶ [Unified, AI-driven Workload Forecasting](https://www.youtube.com/watch?v=JlzPxW673dc) — RELEX Solutions · 3y ago

### Autoscaling in cloud computing systems *(prerequisite)*
Autoscaling is a core reactive mechanism in AutoSLO, adjusting resources in response to workload deviations. Familiarity with autoscaling principles and challenges in cloud environments helps understand the design and effectiveness of AutoSLO's Autoscaler component.

*How the paper uses it:* AutoSLO's Autoscaler reactively adjusts active clusters based on workload changes to maintain SLO adherence.

▶ [AWS EC2 Auto Scaling - How it Works](https://www.youtube.com/watch?v=rcWgcFMlwFw) — Digital Cloud Training · 1y ago

### LSTM based performance prediction *(prerequisite)*
AutoSLO's Query Router uses an enhanced LSTM-based latency predictor (Iconq+) for concurrency-aware query placement. Understanding LSTM models for performance prediction is crucial to grasp how AutoSLO routes queries to minimize latency SLO violations.

*How the paper uses it:* The Query Router leverages an LSTM-based latency predictor to estimate query latency under concurrency for optimal routing.

▶ [https://www.youtube.com › watch?v=yEhHeosH4YM](https://www.youtube.com/watch?v=yEhHeosH4YM) — YouTube result via DuckDuckGo

### AutoSLO authors talk *(the paper's own talk)*
Direct talks by the authors provide the most authoritative and detailed explanation of AutoSLO's design, contributions, and evaluation. These talks offer insights into the multi-timescale framework and the integration of forecasting, reactive control, and real-time query routing.

*How the paper uses it:* Authors' talks explain the novel AutoSLO framework and its components in detail.

▶ [https://www.youtube.com › watch?v=ZLONwS7IBkY](https://www.youtube.com/watch?v=ZLONwS7IBkY) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand AutoSLO, starting from foundational ideas about workload forecasting and autoscaling in cloud systems, then covering LSTM-based latency prediction, and finally focusing on latency SLO management in cloud data warehouses. The path builds intuition progressively, enabling learners to grasp how AutoSLO integrates forecasting, reactive scaling, and query routing to meet latency objectives cost-effectively.

### Workload forecasting for resource management *(prerequisite)*
Workload forecasting predicts future demand to proactively allocate resources, reducing latency and cost. Understanding forecasting methods helps grasp how AutoSLO plans cluster scaling ahead of time based on historical patterns.

*How the paper uses it:* AutoSLO’s Policy Tuner uses workload forecasting to proactively plan cluster scaling and tuning.

▶ [Unified, AI-driven Workload Forecasting](https://www.youtube.com/watch?v=JlzPxW673dc) — RELEX Solutions · 3y ago

### Autoscaling in cloud computing systems *(prerequisite)*
Autoscaling dynamically adjusts computing resources in response to workload changes, ensuring performance targets are met without overspending. This reactive control complements forecasting by handling unexpected workload spikes.

*How the paper uses it:* AutoSLO’s Autoscaler reactively adjusts active clusters based on real-time workload deviations to maintain latency SLOs.

▶ [AWS EC2 Auto Scaling - How it Works](https://www.youtube.com/watch?v=rcWgcFMlwFw) — Digital Cloud Training · 1y ago

### LSTM based performance prediction *(prerequisite)*
Long Short-Term Memory (LSTM) models are a type of recurrent neural network that can predict time-series data like query latency under varying concurrency. Understanding LSTM helps explain how AutoSLO’s Query Router predicts latency to route queries optimally.

*How the paper uses it:* AutoSLO’s Query Router uses an enhanced LSTM-based latency predictor (Iconq+) for concurrency-aware query placement.

▶ [https://www.youtube.com › watch?v=M1pqI1B9Zjs](https://www.youtube.com/watch?v=M1pqI1B9Zjs) — YouTube result via DuckDuckGo

### Latency SLO management cloud data warehouses
Latency Service-Level Objectives (SLOs) define acceptable query response times in cloud data warehouses. Managing these SLOs involves balancing resource costs and performance to meet diverse workload needs.

*How the paper uses it:* AutoSLO addresses the challenge of reliably meeting latency SLOs in multi-cluster cloud data warehouses while minimizing cost.

▶ [What is a Cloud Data Warehouse #datawarehouse #cloudcomputing #bigdata #digitaltransformation](https://www.youtube.com/watch?v=fOI4K7thkOI) — DataSpaceX · 1y ago

### AutoSLO authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into AutoSLO’s design, motivations, and evaluation, complementing conceptual understanding with practical details.

*How the paper uses it:* These talks explain AutoSLO’s multi-timescale framework integrating forecasting, reactive scaling, and query routing to meet latency SLOs cost-effectively.

▶ [https://www.youtube.com › watch?v=ZLONwS7IBkY](https://www.youtube.com/watch?v=ZLONwS7IBkY) — YouTube result via DuckDuckGo

## Already in your library

- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of AutoSLO's approach to latency SLO management in cloud data warehouses. The beginner project focuses on reproducing a core latency prediction mechanism at small scale using familiar tools. The intermediate project implements a simplified version of AutoSLO's multi-timescale workload management framework on a public dataset, comparing SLO adherence and cost metrics. The advanced project extends AutoSLO by integrating adaptive learning for workload forecasting to address a stated limitation, showcasing your ability to innovate beyond the paper.

### Beginner — Latency Predictor Simulation with LSTM
*Effort: a weekend, ~8 hours*

You build a small-scale latency predictor for query workloads using an LSTM model similar to the Iconq+ predictor described in the paper. Using synthetic or simplified query latency and concurrency data, you train the model to predict latency under varying concurrency levels.

**Why it shows you understood the paper:** This project shows you understand the concurrency-aware latency prediction core to AutoSLO's Query Router, demonstrating grasp of the enhanced LSTM model and its role in routing decisions.

**Grounded in:** The Query Router uses an enhanced LSTM-based latency predictor (Iconq+) for concurrency-aware query placement.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic query latency and concurrency data generated to mimic workload patterns described in the paper, since no public dataset is provided.

**Build it:**

1. Generate synthetic time series data representing query latencies under different concurrency levels.
2. Implement an LSTM model in PyTorch to predict latency given concurrency and query features.
3. Train the model on the synthetic data and evaluate prediction accuracy.
4. Visualize predicted vs actual latencies to demonstrate concurrency awareness.
5. Write a README explaining the model, data generation, and how this relates to AutoSLO's Query Router.

**Ships as:** A Jupyter notebook with code for data generation, LSTM training, evaluation plots, and a README linking the implementation to the paper's latency prediction component.

**Stretch goal:** Add a simple query routing simulation that uses the latency predictor to assign queries to clusters minimizing predicted latency.

### Intermediate — Simplified AutoSLO Multi-Timescale Workload Manager
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of AutoSLO's three-component framework: a Policy Tuner for proactive scaling based on workload forecasts, an Autoscaler for reactive cluster adjustments, and a Query Router using a basic latency predictor. You apply this to a public cloud workload trace or a synthetic workload simulating multi-cluster query arrivals.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core multi-timescale management approach of AutoSLO, including workload forecasting, reactive scaling, and query routing, and to measure SLO adherence and cost tradeoffs.

**Grounded in:** AutoSLO integrates planning, adjustment, and reaction behaviors across multiple timescales.

**Tech stack:** Python 3.11, scikit-learn, PyTorch, Pandas, Matplotlib

**Data:** Synthetic multi-cluster query workload data generated to simulate varying load patterns; no official dataset is released by the authors.

**Build it:**

1. Generate or obtain a synthetic workload trace with query arrival times, concurrency, and latency targets.
2. Implement a simple workload forecasting method (e.g., moving average) for the Policy Tuner to plan cluster scaling.
3. Implement an Autoscaler that reacts to workload deviations by adjusting active clusters.
4. Implement a Query Router that uses a basic latency predictor to assign queries to clusters.
5. Simulate the system over the workload trace, measuring SLO violation rates and infrastructure cost.
6. Compare results against a static baseline cluster assignment and document findings.

**Ships as:** A Python project with scripts to run the simulation, generate plots of SLO violation rates and cost, and a README explaining the implementation and comparison to baseline.

**Stretch goal:** Incorporate a simple LSTM-based latency predictor for improved query routing accuracy.

### Advanced — Adaptive Learning for Workload Forecasting in AutoSLO
*Effort: 3-4 weeks*

You extend the AutoSLO framework by integrating an adaptive learning method that continuously updates workload forecasting models based on recent data, addressing the limitation of imperfect forecasts. You implement online learning or reinforcement learning to improve proactive scaling decisions in dynamic workloads.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of AutoSLO, demonstrating your ability to innovate on the framework by incorporating adaptive forecasting to enhance SLO adherence and cost efficiency in novel workload environments.

**Grounded in:** The system relies on workload forecasts which may be imperfect, requiring reactive adjustments. Future directions include exploring improved workload forecasting techniques to enhance planning accuracy.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Pandas, Matplotlib

**Data:** Synthetic or publicly available cloud workload traces adapted to simulate dynamic and novel workload patterns; no official dataset from the paper.

**Build it:**

1. Reimplement the simplified AutoSLO framework from the intermediate project as a base.
2. Develop an adaptive workload forecasting model using online learning or reinforcement learning techniques.
3. Integrate the adaptive forecaster into the Policy Tuner to update scaling plans continuously.
4. Evaluate the enhanced system on dynamic workload traces, comparing SLO violation rates and cost against the static forecast baseline.
5. Analyze the tradeoffs and document how adaptive learning improves scaling decisions.
6. Prepare a detailed README explaining the extension, methodology, and results.

**Ships as:** A full Python project demonstrating adaptive forecasting integrated with AutoSLO components, with evaluation scripts, plots, and comprehensive documentation linking back to the paper's limitations and future directions.

**Stretch goal:** Explore multi-objective optimization incorporating energy efficiency alongside cost and SLO adherence.

_The paper's authors have not released code or datasets for AutoSLO; synthetic workloads must be generated to approximate described scenarios._
