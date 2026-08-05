---
title: "035 · Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems — Carlos Varela"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-cvarela"
source_hash: "20599afaab76430efda792eacea1c297b08d1905423c613023a15b6a72d8c82b"
sequence: 35
generator: "outreach-garden: managed"
---

# 035 · Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems

## At a glance

- **Professor:** Carlos Varela
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems](http://wcl.cs.rpi.edu/papers/ccgrid2018.pdf)
- **Authors:** Shigeru Imai, Stacy Patterson, Carlos A. Varela
- **Year:** 2020

## Paper overview

This paper presents a proactive scheduling framework for cloud-based stream processing systems that dynamically allocates virtual machines (VMs) to handle fluctuating workloads. The framework uniquely incorporates uncertainty in both application performance and workload predictions to optimize the tradeoff between cost and quality of service (QoS).

### Why it matters

**Research problem:** How to elastically schedule VMs for stream processing systems in the cloud to maintain high QoS under variable workloads while minimizing cost, explicitly accounting for uncertainties in performance and workload predictions.

**Why it matters:** Stream processing workloads fluctuate over time, and static or reactive VM allocation can lead to either poor QoS or excessive costs. Existing proactive schedulers often ignore uncertainty in predictions, leading to suboptimal scaling decisions.

**Key contributions:**

- A novel elastic VM scheduling framework that explicitly models uncertainty in both application performance and workload forecasts.
- Integration of online learning to adapt MST models dynamically during execution.
- Use of ARMA-based workload forecasting with uncertainty quantification to predict future workloads.
- Formulation of VM allocation as a probabilistic QoS satisfaction problem, allowing tunable tradeoffs between cost and reliability.

## About the professor

**Carlos Varela** — Professor, Department of Computer Science, Rensselaer Polytechnic Institute.

Research interests: safer flight systems, software verification, cloud and edge computing, middleware for adaptive distributed systems, and concurrent programming models and languages.

### Research links

- [Faculty/profile page](http://www.cs.rpi.edu/~cvarela)
- [Resolved homepage](http://www.cs.rpi.edu/~cvarela/)
- [Lab website](http://wcl.cs.rpi.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on uncertainty-aware elastic VM scheduling for stream processing systems, start by grasping the foundational statistical and machine learning techniques it builds upon. First, learn about ARMA models for workload forecasting, then explore online learning methods for dynamic model adaptation, followed by uncertainty quantification in performance modeling. Finally, focus on the paper's core contribution by reviewing the authors' own talk or the closest available substitute on their uncertainty-aware elastic VM scheduling framework.

### Statistical workload forecasting ARMA *(prerequisite)*
The paper relies on ARMA models to forecast future workloads and quantify uncertainty in these predictions. Understanding ARMA processes and their forecasting capabilities is essential to appreciate how workload variance is incorporated into the scheduling decisions.

*How the paper uses it:* The scheduler uses ARMA-based workload forecasting with uncertainty quantification to predict future workloads.

▶ [Time Series Analysis, Lecture 15: Forecasting for ARMA](https://www.youtube.com/watch?v=w1191j6e9x4) — Cache Lack Math & Stats Lectures · 4 years ago

### Online learning for model adaptation *(prerequisite)*
Online learning techniques enable the dynamic updating of maximum sustainable throughput models with new performance data, improving accuracy over time. This adaptive approach is critical for maintaining high QoS under changing conditions.

*How the paper uses it:* Integration of online learning to adapt MST models dynamically during execution.

▶ [Optimal and Adaptive Online Learning](https://www.youtube.com/watch?v=A4kOXiJmNFQ) — Microsoft Research · 10 years ago

### Uncertainty quantification in performance modeling *(prerequisite)*
Explicitly modeling uncertainty in throughput and workload predictions is fundamental to the paper's approach. Understanding uncertainty quantification methods helps in appreciating how probabilistic constraints are formulated for VM allocation.

*How the paper uses it:* Explicit modeling of uncertainty in throughput and workload predictions is fundamental to the approach.

▶ [Uncertainty Quantification and Deep Learning ǀ Elise Jennings, Argonne National Laboratory](https://www.youtube.com/watch?v=Puc_ujh5QZs) — Argonne Meetings, Webinars, and Lectures · 6 years ago

### Uncertainty-aware elastic VM scheduling *(the paper's own talk)*
This is the core concept of the paper, combining uncertainty modeling, workload forecasting, and online learning to enable elastic VM scheduling that balances cost and QoS. Ideally, the authors' own talk would provide the most direct and detailed insight into their framework.

*How the paper uses it:* Central method combining uncertainty modeling, forecasting, and online learning for elastic VM allocation.

▶ [MobiSys 26 - StreamSplit: Continuous Audio Representation Learning via Uncertainty-Guided Adaptive](https://www.youtube.com/watch?v=UR9u0xLdlrI) — ACM SIGMOBILE ONLINE · 6:12 · 2 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand uncertainty-aware elastic VM scheduling for stream processing systems. Start with statistical workload forecasting using ARMA models to grasp how future workloads and their uncertainties are predicted. Then learn about online learning for model adaptation to see how performance models improve dynamically. Next, explore uncertainty quantification to understand how the framework models prediction uncertainties explicitly. After that, study probabilistic QoS constraints to appreciate how VM allocations satisfy service quality targets under uncertainty. Finally, consolidate knowledge by reviewing the paper authors' talk for direct insights into their novel scheduling framework.

### Statistical workload forecasting ARMA *(prerequisite)*
Learn how ARMA models predict future workloads by capturing patterns in time series data, including how they estimate uncertainty in those predictions. This statistical forecasting is crucial for proactive VM scheduling decisions in the paper.

*How the paper uses it:* The paper uses ARMA models to forecast workloads with uncertainty quantification for conservative VM allocation.

▶ [Time Series Talk : ARMA Model](https://www.youtube.com/watch?v=HhvTlaN06AM) — ritvikmath · 7 years ago

### Online learning for model adaptation *(prerequisite)*
Understand online learning as a method to update models continuously with new data, improving accuracy over time. This dynamic adaptation helps the scheduler maintain precise performance models despite changing conditions.

*How the paper uses it:* The framework applies online learning to update maximum sustainable throughput models during execution.

▶ [Optimal and Adaptive Online Learning](https://www.youtube.com/watch?v=A4kOXiJmNFQ) — Microsoft Research · 10 years ago

### Uncertainty quantification in performance modeling *(prerequisite)*
Explore how uncertainty quantification measures confidence in model predictions, allowing systems to account for variability and risk. This is key to making robust scheduling decisions under unpredictable workloads and performance.

*How the paper uses it:* The paper explicitly models uncertainty in throughput and workload predictions using normal distributions.

▶ [Module 8.1: Introduction to Uncertainty Quantification Methods](https://www.youtube.com/watch?v=ACApE0aFpM8) — Dr. Kamal Choudhary · 12:36 · 1 year ago

### Probabilistic QoS constraints in cloud scheduling *(prerequisite)*
Learn how probabilistic constraints ensure that quality-of-service targets are met with high confidence rather than absolute certainty, balancing reliability and cost. This approach enables elastic VM allocation under uncertainty.

*How the paper uses it:* The scheduler formulates VM allocation as a probabilistic QoS satisfaction problem to trade off cost and reliability.

▶ [Dynamic Resource Allocation in Cloud Computing | Preetham Vemasani | Conf42 Observability 2024](https://www.youtube.com/watch?v=j_jpvkSjzhg) — Conf42 · 2 years ago

### Paper authors talk *(the paper's own talk)*
Hear directly from the authors about their uncertainty-aware elastic VM scheduling framework, gaining insights into their motivation, approach, and results in their own words.

*How the paper uses it:* This talk provides a direct source for understanding the novel scheduling framework proposed in the paper.

▶ [MobiSys 26 - StreamSplit: Continuous Audio Representation Learning via Uncertainty-Guided Adaptive](https://www.youtube.com/watch?v=UR9u0xLdlrI) — ACM SIGMOBILE ONLINE · 6:12 · 2 weeks ago

## Already in your library

- [Mini Tutorial 6:  An Introduction to Uncertainty Quantification for Modeling & Simulation](https://www.youtube.com/watch?v=7w-K_EF2j64) — also for: Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems (Carlos Varela)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of uncertainty-aware elastic VM scheduling for stream processing systems as presented in the paper. The beginner project focuses on reproducing a core statistical forecasting technique from the paper using familiar tools. The intermediate project implements the core scheduling framework with uncertainty quantification and compares it against a simple baseline on synthetic workload data. The advanced project extends the framework by incorporating reconfiguration costs, addressing a stated limitation and future direction of the paper, and exploring the impact on scheduling decisions.

### Beginner — ARMA Workload Forecasting with Uncertainty Quantification
*Effort: a weekend, ~8 hours*

You build a Python script that implements ARMA-based workload forecasting with uncertainty estimation, reproducing the paper's approach to predicting future workloads and their variance. You will generate synthetic workload time series data, fit an ARMA model, and visualize forecasted workloads with confidence intervals.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key statistical forecasting technique that enables proactive VM scheduling under workload uncertainty.

**Grounded in:** Use of ARMA-based workload forecasting with uncertainty quantification to predict future workloads.

**Tech stack:** Python 3.11, statsmodels, matplotlib, numpy, pandas, Jupyter Notebook

**Data:** Synthetic time series data simulating fluctuating stream processing workloads, generated to mimic real-world variability as described in the paper.

**Build it:**

1. Generate or simulate a synthetic workload time series with fluctuations and noise.
2. Fit an ARMA model to the synthetic workload data using statsmodels.
3. Forecast future workloads and compute confidence intervals representing uncertainty.
4. Visualize the original workload, forecasted values, and uncertainty bands using matplotlib.
5. Write a README explaining how this forecasting relates to the paper's scheduling framework.

**Ships as:** A Jupyter Notebook or Python script that forecasts workload with ARMA, plots forecasts with uncertainty bands, and documents the connection to the paper's workload forecasting method.

**Stretch goal:** Add an interactive dashboard (e.g., with Streamlit) to allow users to upload workload data and see ARMA forecasts with uncertainty.

### Intermediate — Uncertainty-Aware Elastic VM Scheduler Simulation
*Effort: 2 weekends, ~20 hours*

You implement a simplified simulation of the paper's elastic VM scheduling framework that integrates uncertainty in MST and workload forecasts. Using synthetic workload traces, you model VM allocations under probabilistic QoS constraints and compare cost and QoS satisfaction against a static peak provisioning baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the core scheduling approach, including uncertainty quantification and probabilistic constraints, and evaluate its benefits quantitatively.

**Grounded in:** Formulation of VM allocation as a probabilistic QoS satisfaction problem, allowing tunable tradeoffs between cost and reliability; achieved up to 48% cost reduction compared to static peak provisioning.

**Tech stack:** Python 3.11, numpy, pandas, matplotlib, scipy, Jupyter Notebook

**Data:** Synthetic workload traces generated to mimic fluctuating stream processing workloads; MST modeled as normal distributions with parameters inspired by the paper's description.

**Build it:**

1. Generate synthetic workload traces with variable demand over time.
2. Model MST as normal distributions with mean and variance parameters.
3. Implement ARMA-based workload forecasting with uncertainty quantification.
4. Develop a VM scheduler that allocates VMs to meet probabilistic QoS constraints based on workload and MST uncertainties.
5. Simulate the scheduler over the workload trace and record QoS satisfaction and VM cost metrics.
6. Implement a static peak provisioning baseline for comparison.
7. Visualize and compare QoS satisfaction rates and costs between the uncertainty-aware scheduler and baseline.

**Ships as:** A simulation framework with scripts and notebooks demonstrating uncertainty-aware VM scheduling, comparison plots of QoS and cost metrics, and documentation linking to the paper's core method and results.

**Stretch goal:** Incorporate online learning to update MST model parameters dynamically during simulation to improve scheduling decisions.

### Advanced — Extending Uncertainty-Aware VM Scheduling with Reconfiguration Costs
*Effort: 3+ weeks*

You extend the uncertainty-aware elastic VM scheduling framework by incorporating VM reconfiguration costs (e.g., startup/shutdown delays and expenses) into the probabilistic scheduling model. You simulate the impact of these costs on scheduling decisions, cost savings, and QoS satisfaction, addressing a key limitation and future direction from the paper.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's framework and limitations, and your ability to innovate by integrating real-world constraints to improve practical applicability.

**Grounded in:** Incorporate reconfiguration costs into the VM scheduler to better model real cloud environments (stated future direction and limitation).

**Tech stack:** Python 3.11, numpy, pandas, matplotlib, scipy, Jupyter Notebook

**Data:** Synthetic workload traces and MST uncertainty models as in the intermediate project, extended with parameters modeling VM reconfiguration costs based on literature or cloud provider documentation.

**Build it:**

1. Review the existing uncertainty-aware VM scheduling simulation from the intermediate project.
2. Research typical VM reconfiguration costs (time and monetary) from cloud providers or literature.
3. Model reconfiguration costs and delays as additional constraints in the scheduling problem.
4. Modify the scheduler to consider these costs when making VM allocation and deallocation decisions.
5. Simulate the extended scheduler on synthetic workload traces and compare results to the original scheduler without reconfiguration costs.
6. Analyze tradeoffs between cost savings, QoS satisfaction, and reconfiguration overhead.
7. Document findings and discuss challenges and implications for real-time production environments.

**Ships as:** An extended simulation framework with code, analysis notebooks, and a detailed README discussing the integration of reconfiguration costs, their impact on scheduling, and alignment with the paper's future directions.

**Stretch goal:** Explore heterogeneous VM types with different performance and cost profiles, integrating them into the uncertainty-aware scheduling model.
