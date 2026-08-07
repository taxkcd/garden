---
title: "290 · Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure — Benjamin C. Lee"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-benjamin-c-lee"
source_hash: "8b931129850169449441805d1066e7779a17f9e1ba232a77760c41c13499b094"
sequence: 290
generator: "outreach-garden: managed"
---

# 290 · Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure

## At a glance

- **Professor:** Benjamin C. Lee
- **Institution:** University of Pennsylvania
- **Paper:** [Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure](https://www.cis.upenn.edu/~leebcc/documents/patel26-prometheus.pdf)
- **Authors:** Sourav Patel, Pratyush Kumar, Youzhi Liang, Thomas Kowalski, Nick Care, Wenjie Dong, Greg Imwalle, Rita Lu, Jeremy Rice, Nick Saddock, Rick Vengalath, Urs Hölzle, Benjamin C. Lee, Parthasarathy Ranganathan
- **Year:** 2026

## Paper overview

This paper introduces Prometheus, a framework that uses machine learning and climate simulations to forecast extreme temperatures at data center sites. It helps data center architects plan and upgrade cooling infrastructure to handle future climate risks, ensuring reliable and energy-efficient operation over decades.

### Why it matters

**Research problem:** Data centers are increasingly vulnerable to extreme temperatures due to climate change, but current design standards rely on historical weather data that underestimate future risks, leading to insufficient cooling capacity and potential outages.

**Why it matters:** Extreme heat events can cause data center cooling failures, resulting in degraded performance, outages, and significant economic costs. Designing resilient data centers requires accurate, forward-looking climate risk assessments to avoid costly failures and ensure sustainability.

**Key contributions:**

- Development of a machine learning ensemble to accurately predict wet-bulb temperatures from climate model outputs.
- Integration of historical observations with forward-looking climate projections to produce probabilistic temperature forecasts.
- A multi-timescale decision framework guiding data center cooling infrastructure planning, upgrades, and operational responses.
- Fleet-wide analysis of thirty global data centers revealing significant cooling capacity increases needed due to climate change.
- Demonstration that fixed temperature margins added to historical standards are inadequate for future climate risks.

## About the professor

**Benjamin C. Lee** — Professor, Computer and Information Science, Electrical and Systems Engineering, University of Pennsylvania.

Research interests: computer architecture (e.g., microprocessors, memories, datacenters), energy efficiency, and environmental sustainability

### Research links

- [Faculty/profile page](https://directory.seas.upenn.edu/benjamin-c-lee/)
- [Identity evidence](https://www.cis.upenn.edu/~leebcc/index.html)
- [Identity evidence](https://www.cis.upenn.edu/~leebcc/)
- [Identity evidence](https://dblp.org/pid/l/BenjaminCLee.html)
- [Identity evidence](https://www.cis.upenn.edu/~leebcc/research.html)
- [Identity evidence](https://www.cis.upenn.edu/~leebcc/publications.html)
- [Professor website](https://www.seas.upenn.edu/~leebcc/)
- [Resolved homepage](https://www.engineering.upenn.edu/~leebcc/index.html)
- [Lab website](https://dsl.cis.upenn.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Prometheus framework for resilient data center cooling under future climate risks, start with foundational knowledge of physics-based climate simulations and machine learning ensembles, which underpin the paper's methodology. Next, grasp the critical concept of wet-bulb temperature forecasting as it directly relates to cooling challenges. Then, explore data center cooling infrastructure planning to contextualize the practical application. Finally, study the authors' own presentation of the Prometheus framework to see the integrated approach and results firsthand.

### Physics-based climate simulations *(prerequisite)*
Understanding the CMIP6 climate models is essential as they provide the physics-based climate data inputs that Prometheus uses for forecasting extreme temperatures. This foundation helps in appreciating the data quality, resolution, and limitations inherent in the climate projections.

*How the paper uses it:* Prometheus integrates physics-based climate simulations (CMIP6) as core inputs for its temperature forecasting models.

▶ [A Short Introduction to Climate Models - CMIP & CMIP6](https://www.youtube.com/watch?v=WdRiYPJLt4o) — World Climate Research Programme · 9 years ago

### Machine learning ensembles *(prerequisite)*
The paper's core method involves a multi-stage machine learning ensemble combining support vector machines, random forests, and neural networks to improve wet-bulb temperature prediction accuracy. Understanding ensemble learning techniques is critical to grasp how Prometheus achieves its error reductions.

*How the paper uses it:* Prometheus uses a machine learning ensemble of SVM, random forest, and neural network models for temperature prediction.

▶ [Lecture 9 - Decision Trees and Ensemble Methods | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=wr9gUr-eWdA) — Stanford Online · 1:20:41 · 6 years ago

### Wet-bulb temperature forecasting *(prerequisite)*
Wet-bulb temperature is a key variable for assessing cooling requirements and climate risk in data centers. A solid understanding of this concept is necessary to appreciate why Prometheus focuses on predicting wet-bulb temperatures probabilistically.

*How the paper uses it:* Prometheus predicts site-specific wet-bulb temperatures to guide cooling infrastructure planning.

▶ [Too HOT and HUMID to Live: Extreme Wet Bulb Events Are on the Rise](https://www.youtube.com/watch?v=vqBrL8BokSk) — PBS Terra · 3 years ago

### Data center cooling infrastructure planning *(prerequisite)*
Knowledge of how data center cooling systems are designed and upgraded provides practical context for the paper’s multi-timescale decision framework. This helps in understanding the operational and strategic implications of Prometheus’s forecasts.

*How the paper uses it:* The paper addresses planning and upgrading data center cooling infrastructure to handle future climate risks.

▶ [Data Center Cooling - how are data centre cooled cold aisle containment hvacr](https://www.youtube.com/watch?v=vZkA0z9JRgw) — The Engineering Mindset · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Prometheus framework for resilient data center cooling, start by learning the foundational concepts of climate modeling and wet-bulb temperature, which are critical for assessing future climate risks. Then, build intuition on machine learning ensembles that improve prediction accuracy, followed by an introduction to data center cooling infrastructure to grasp practical implications. Finally, explore the Prometheus framework itself to see how these elements integrate for optimized cooling planning and operation.

### Physics-based climate simulations *(prerequisite)*
Climate models like CMIP6 simulate the Earth's climate system using physics to predict future weather patterns and extreme events. Understanding these models helps grasp the source and nature of climate data inputs used in Prometheus.

*How the paper uses it:* Prometheus uses CMIP6 climate simulations as the foundational data source for forecasting future temperature extremes at data center sites.

▶ [A Short Introduction to Climate Models - CMIP & CMIP6](https://www.youtube.com/watch?v=WdRiYPJLt4o) — World Climate Research Programme · 9 years ago

### Wet-bulb temperature forecasting *(prerequisite)*
Wet-bulb temperature combines air temperature and humidity to measure how hot it actually feels and is critical for cooling system design. Learning this concept clarifies why Prometheus focuses on wet-bulb temperature predictions for data center resilience.

*How the paper uses it:* Prometheus predicts wet-bulb temperatures because they directly impact evaporative cooling effectiveness and data center thermal safety.

▶ [Wet Bulb Temperature Explained | Animation | #hvac #hvactraining #hvacsystem #hvacr](https://www.youtube.com/watch?v=AS_M8Iu3rWg) — Zebra Learnings · 1 year ago

### Machine learning ensembles *(prerequisite)*
Ensemble learning combines multiple machine learning models to improve prediction accuracy and robustness. This concept is key to understanding how Prometheus achieves superior temperature forecasts by blending different algorithms.

*How the paper uses it:* Prometheus employs an ensemble of support vector machines, random forests, and neural networks to predict wet-bulb temperatures more accurately than single models.

▶ [Lec-12: Introduction to Ensemble Learning with Real Life Examples | Machine⚙️ Learning](https://www.youtube.com/watch?v=qQjOWmf8I_I) — Gate Smashers · 5:58 · 2 years ago

### Data center cooling infrastructure planning *(prerequisite)*
Data centers require sophisticated cooling systems to manage heat from servers. Understanding how these systems are designed and upgraded provides context for why accurate temperature forecasts are vital for resilient infrastructure planning.

*How the paper uses it:* Prometheus informs strategic and tactical decisions for upgrading cooling infrastructure to handle future climate-induced thermal risks.

▶ [Data Center Cooling - how are data centre cooled cold aisle containment hvacr](https://www.youtube.com/watch?v=vZkA0z9JRgw) — The Engineering Mindset · 4 years ago

### Prometheus framework talk *(the paper's own talk)*
This video presents the Prometheus framework directly from a relevant source, explaining how it integrates climate simulations and machine learning to forecast temperatures and guide cooling infrastructure decisions.

*How the paper uses it:* The video provides a direct overview of the Prometheus system, illustrating its multi-timescale decision support and climate risk forecasting approach.

▶ [Unlocking the Future of Green AI Infrastructure: Prometheus Hyperscale Customer Story](https://www.youtube.com/watch?v=BoWbk0VQ6FI) — Lumen Technologies · 1 year ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for understanding and demonstrating the core ideas of the Prometheus framework for resilient data center cooling under climate change. The beginner project focuses on reproducing a key metric from the paper using simple ML models and public climate data. The intermediate project implements the paper's core machine learning ensemble method to predict wet-bulb temperatures from climate simulation data and compares it to a baseline. The advanced project extends the paper by integrating workload management considerations to address the limitation of limited sheddable load, exploring operational resilience improvements.

### Beginner — Wet-Bulb Temperature Forecasting with Simple ML Models
*Effort: a weekend, ~8 hours*

You build a small ML pipeline that predicts wet-bulb temperature from publicly available weather data using a single regression model such as Random Forest or Support Vector Regression. You reproduce a simplified version of the paper's wet-bulb temperature forecast error metric by comparing your model's predictions to actual observations over a short historical period.

**Why it shows you understood the paper:** This project shows you understand the importance of wet-bulb temperature forecasting for data center cooling resilience and the value of ML models over analytical baselines, as emphasized in the paper's key contributions and results.

**Grounded in:** Development of a machine learning ensemble to accurately predict wet-bulb temperatures from climate model outputs; Prometheus reduces wet-bulb temperature forecast error by 40-60% compared to analytical baselines.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Use publicly available historical weather data from NOAA or similar sources as a substitute for the paper's climate model outputs and observations.

**Build it:**

1. Download historical weather data including temperature and humidity for a chosen location from NOAA or other public datasets.
2. Calculate wet-bulb temperature from available temperature and humidity data using a standard formula.
3. Train a regression model (e.g., Random Forest or Support Vector Regression) to predict wet-bulb temperature from input features.
4. Evaluate the model's prediction error using metrics such as RMSE and compare it to a simple analytical baseline (e.g., linear regression or climatology).
5. Visualize prediction errors and discuss how ML improves forecasting accuracy, referencing the paper's reported error reductions.

**Ships as:** A Jupyter Notebook and README showing the ML model pipeline, evaluation metrics, and plots comparing forecast errors to a baseline.

**Stretch goal:** Add probabilistic forecasting by training a quantile regression forest or using prediction intervals to mimic the paper's probabilistic forecasts.

### Intermediate — Reimplementing Prometheus ML Ensemble for Wet-Bulb Temperature Prediction
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core machine learning ensemble described in the paper, combining Random Forest, Support Vector Machine, and Neural Network meta-regressor to predict wet-bulb temperature from climate simulation outputs. You evaluate your ensemble's performance against a simple analytical baseline on a smaller public or simulated dataset and report forecast error reductions similar to the paper's metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core method faithfully, understand ensemble ML techniques, and evaluate improvements in wet-bulb temperature forecasting critical for data center cooling planning.

**Grounded in:** Prometheus integrates physics-based climate simulations (CMIP6) with a machine learning ensemble (support vector machines, random forests, and neural networks) to predict site-specific wet-bulb temperatures probabilistically; Prometheus reduces wet-bulb temperature forecast error by 40-60% compared to analytical baselines.

**Tech stack:** Python 3.11, scikit-learn, PyTorch or TensorFlow, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Use publicly available CMIP6 climate model outputs or simulate climate model-like data with temperature and humidity features; observations can be simulated or drawn from public weather datasets as a proxy.

**Build it:**

1. Obtain or simulate a dataset with climate model outputs (temperature, humidity) and corresponding wet-bulb temperature observations.
2. Implement individual ML models: Random Forest, Support Vector Machine regression, and a Neural Network meta-regressor.
3. Train each model on training data and combine predictions using the meta-regressor to form the ensemble.
4. Evaluate ensemble forecast errors (e.g., RMSE) and compare against a simple analytical baseline model.
5. Visualize error reductions and discuss how the ensemble improves prediction accuracy, referencing the paper's results.

**Ships as:** A Jupyter Notebook and README documenting the ensemble implementation, evaluation results, and comparison to baseline forecasting errors.

**Stretch goal:** Incorporate probabilistic forecasting by modeling prediction uncertainty and compare error reductions at extreme percentiles (e.g., 99.5th percentile) as in the paper.

### Advanced — Integrating Workload Management to Enhance Thermal Resilience in Data Centers
*Effort: few weeks, ~80+ hours*

You extend the Prometheus framework by integrating a workload management simulation that models sheddable load availability and its impact on operational thermal resilience. Using climate-driven wet-bulb temperature forecasts from your ML ensemble, you simulate operational decisions to shed load or shift workloads to maintain safe temperatures. This addresses the paper's limitation on limited and decreasing sheddable load and explores future directions for workload management to complement infrastructure upgrades.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's multi-timescale decision framework and limitations, applying ML forecasting outputs to operational workload management strategies to improve data center cooling resilience under climate change.

**Grounded in:** 30% of data centers lack sufficient flexible (sheddable) load to respond to thermal emergencies at two-week timescales; future directions include developing finer-grained workload management and geographic load distribution to increase sheddable load capacity.

**Tech stack:** Python 3.11, scikit-learn, PyTorch or TensorFlow, pandas, numpy, matplotlib, Jupyter Notebook, SimPy or other discrete-event simulation library

**Data:** Use your intermediate project's ML ensemble forecasts for wet-bulb temperature; simulate workload profiles and sheddable load availability based on realistic assumptions or public workload traces if available.

**Build it:**

1. Build or reuse the ML ensemble model to generate wet-bulb temperature forecasts for operational timescales (weeks).
2. Model workload profiles with parameters for sheddable load capacity and constraints, simulating typical data center load patterns.
3. Implement a simulation framework that uses temperature forecasts to trigger workload shedding or shifting decisions to maintain thermal safety.
4. Evaluate the effectiveness of workload management strategies in reducing thermal risk and compare scenarios with and without workload flexibility.
5. Analyze trade-offs between infrastructure upgrades and operational workload management, discussing implications for future data center resilience.

**Ships as:** A comprehensive Jupyter Notebook or Python package with simulation code, results visualizations, and a detailed README explaining the integration of ML forecasts with workload management for thermal resilience.

**Stretch goal:** Incorporate emerging cooling technologies or computational sprinting techniques into the simulation to explore combined effects on resilience.
