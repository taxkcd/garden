---
title: "827 · Dish-TS: A General Paradigm for Alleviating Distribution Shift in Time Series Forecasting — Yanjie Fu"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanjie-fu"
source_hash: "457498785004895cc862803fa17b17d614f40097f68aac7f501070bccdb66f61"
sequence: 827
generator: "outreach-garden: managed"
---

# 827 · Dish-TS: A General Paradigm for Alleviating Distribution Shift in Time Series Forecasting

## At a glance

- **Professor:** Yanjie Fu
- **Institution:** Arizona State University
- **Paper:** [Dish-TS: A General Paradigm for Alleviating Distribution Shift in Time Series Forecasting](https://arxiv.org/pdf/2302.14829)
- **Authors:** Wei Fan, Pengyang Wang, Dongkun Wang, Dongjie Wang, Yuanchun Zhou, Yanjie Fu
- **Year:** 2023

## Paper overview

This paper addresses the problem of distribution shift in time series forecasting, where the statistical properties of data change over time and between input and output windows, which harms forecasting accuracy. The authors propose Dish-TS, a general neural framework that uses two neural networks to learn distribution coefficients for input and output windows separately, enabling better normalization and denormalization of data. This approach improves forecasting performance significantly across multiple datasets and models.

### Why it matters

**Research problem:** Time series forecasting models suffer from distribution shift, which includes intra-space shift (distribution changes over time within input data) and inter-space shift (distribution differences between input and output windows). Existing methods inadequately quantify these shifts and often ignore inter-space shift, limiting forecasting accuracy.

**Why it matters:** Distribution shifts cause poor generalization of forecasting models, leading to inaccurate predictions in critical applications like electricity consumption planning, traffic analysis, and weather forecasting. Addressing these shifts can substantially improve forecasting reliability.

**Key contributions:**

- Systematic categorization of distribution shift in time series forecasting into intra-space and inter-space shifts.
- Proposal of Dish-TS, a general neural paradigm using Dual-CONET to alleviate distribution shifts.
- Design of a simple and intuitive instance of CONET with prior knowledge-induced training.
- Extensive experiments demonstrating consistent and significant improvements over state-of-the-art forecasting models.

## About the professor

**Yanjie Fu** — Associate Professor, School of Computing and Augmented Intelligence, Arizona State University.

Research interests: data mining, AI, and their interdisciplinary applications

### Research links

- [Faculty/profile page](http://yanjiefu.com)
- [Professor website](http://yanjiefu.com/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=OSArex4AAAAJ&view_op=list_works)
- [ORCID](https://orcid.org/0000-0002-1767-8024)
- [LinkedIn](https://www.linkedin.com/in/yanjie-fu-5ba40358/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Time Series Forecasting and Distribution Shift
**The paper assumes:** time series forecasting, distribution shift in machine learning, normalization techniques for time series
**Already in this field?** Skip this entirely if you already have a solid understanding of time series forecasting methods and the challenges posed by distribution shifts in machine learning.

To understand the Dish-TS paper on alleviating distribution shift in time series forecasting, it is crucial to grasp the fundamentals of time series data, forecasting methods, and the challenges posed by distribution shifts. The rigorous course option offers a comprehensive university-level treatment of forecasting concepts and metrics, ideal for deep foundational knowledge. The fast track provides a concise, focused introduction to key time series forecasting models and concepts, suitable for quickly gaining the necessary intuition and practical understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2025 - Time Series Modelling and Forecasting with Applications in R](https://www.youtube.com/playlist?list=PLOzRYVm0a65e8s29NCmih-Aww81ax0A0H) — NPTEL IIT Bombay · 61 videos · 29.0h across the first 60 episodes

**Watch only this:** Watch Week 01: Lecture 01 to Week 05: Lecture 23 (episodes 1-23), about 10.5 hours — this covers time series introduction, stationarity, decomposition, autocorrelation, model identification, and forecasting basics needed to understand distribution shifts.

*Why it unblocks this paper:* This NPTEL IIT Bombay course covers time series modeling and forecasting in depth, including stationarity, decomposition, autocorrelation, and forecasting basics, which are essential to understand distribution shifts and normalization in forecasting models like Dish-TS.

*If you want all of it:* About 29.0 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Time Series Forecasting](https://www.youtube.com/playlist?list=PLqYFiz7NM_SMC4ZgXplbreXlRY4Jf4zBP) — Nachiketa Hebbar · 12 videos · 1.8h across 12 episodes

**Watch only this:** Watch episodes 1-8 (Stationarity & Seasonality to White Noise), about 1.2 hours — these cover core concepts of stationarity, AR, MA, ARIMA models, and noise processes fundamental to grasping distribution shifts.

*Why it unblocks this paper:* This concise series by Nachiketa Hebbar provides clear, visual explanations of key time series forecasting models and concepts, including stationarity, AR, MA, ARIMA, and machine learning approaches, giving a quick yet solid foundation relevant to understanding distribution shifts in forecasting.

*If you want all of it:* About 1.8 hours across 12 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Dish-TS paper, start by building a strong foundation in the challenges and models of time series forecasting, followed by the nature and impact of distribution shifts in such data. Then, grasp the role of normalization and denormalization in neural networks, and the architecture of dual neural networks, which underpin the Dish-TS framework. Finally, focus on the paper's core contribution by watching the authors' own detailed presentation of Dish-TS, which explains their novel Dual-CONET approach to alleviating distribution shifts.

### Time series forecasting models and challenges *(prerequisite)*
Understanding the fundamental models and challenges in time series forecasting is essential to appreciate the motivation behind Dish-TS. This includes grasping common forecasting techniques, their limitations, and why distribution shifts pose significant problems.

*How the paper uses it:* Dish-TS aims to improve forecasting accuracy by addressing inherent challenges in time series forecasting models.

▶ [Professor Rob J Hyndman: Ten years of forecast reconciliation](https://www.youtube.com/watch?v=5jB09R-sKOc) — International Institute of Forecasters · 57:31 · 5y ago

### Distribution shift in time series forecasting *(prerequisite)*
This section covers the concept of distribution shift, particularly how statistical properties of time series data change over time and between input and output windows. Understanding this is foundational to grasp why Dish-TS systematically categorizes and addresses these shifts.

*How the paper uses it:* Dish-TS systematically categorizes distribution shifts into intra-space and inter-space shifts, which it aims to alleviate.

▶ [MedAI #81: Why did the Model Fail? Attributing Performance to Distribution Shifts | Haoran Zhang](https://www.youtube.com/watch?v=0n1IgKTh-w4) — Stanford MedAI · 50:21 · 3y ago

### Normalization and denormalization in neural networks *(prerequisite)*
Normalization techniques are critical in neural network training to stabilize and improve learning. Dish-TS innovates by learning normalization and denormalization coefficients to handle distribution shifts, so understanding these concepts is key.

*How the paper uses it:* Dish-TS uses learned normalization and denormalization coefficients via Dual-CONET to handle distribution shifts.

▶ [Lecture 8: Training Neural Networks: Normalization, Regularization, etc](https://www.youtube.com/watch?v=qiFD_H1rfLo) — Carnegie Mellon University Deep Learning · 1:24:15 · 4y ago

### Dual neural network architectures *(prerequisite)*
Dual neural network architectures involve using two separate networks to model different aspects of data or tasks. Dish-TS employs a dual network framework (Dual-CONET) to separately model input and output distributions, making this concept directly relevant.

*How the paper uses it:* Dish-TS's Dual-CONET framework consists of two neural networks modeling input-space and output-space distributions separately.

▶ [Neural Networks Architecture Seminar. Lecture 1: Introduction](https://www.youtube.com/watch?v=EtVA7fTQ83g) — Pablo Duboue · 3y ago

### Dish-TS paper talk *(paper-talk search result; attribution unverified)*
The authors' own presentation of Dish-TS provides the most direct and detailed explanation of their novel approach, experimental results, and insights into alleviating distribution shifts in time series forecasting.

*How the paper uses it:* This is the authors' own talk explaining the Dish-TS framework and its contributions.

▶ [\[Paper Review\] Dish-TS](https://www.youtube.com/watch?v=tqGxCj6hS3w) — 서울대학교 산업공학과 DSBA 연구실 · 40:17 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Dish-TS paper, start by building a solid foundation in time series forecasting and its challenges, including the concept of distribution shifts that affect forecasting accuracy. Next, learn about normalization and denormalization techniques in neural networks, which are crucial for the Dish-TS approach. Then, grasp the idea of dual neural network architectures to appreciate the Dual-CONET framework. Finally, explore the core Dish-TS Dual-CONET framework that specifically addresses intra- and inter-space distribution shifts in time series forecasting.

### Time series forecasting models and challenges *(prerequisite)*
Time series forecasting involves predicting future values based on past data points arranged in time order. Understanding common models and challenges, such as non-stationarity and changing data patterns, is essential to grasp why distribution shifts harm forecasting accuracy.

*How the paper uses it:* The paper targets forecasting challenges caused by distribution shifts in time series data.

▶ [Time Series Forecasting with English \[CC\]](https://www.youtube.com/watch?v=33oItissjgc) — TJ Academy · 21:29 · 5y ago

### Distribution shift in time series forecasting *(prerequisite)*
Distribution shift means that the statistical properties of data change over time or between training and testing phases, causing models to perform poorly. In time series, this includes shifts within input data and between input and output windows, which are critical to understand for improving forecasting.

*How the paper uses it:* Dish-TS systematically categorizes and addresses intra-space and inter-space distribution shifts in time series forecasting.

▶ [MedAI #81: Why did the Model Fail? Attributing Performance to Distribution Shifts | Haoran Zhang](https://www.youtube.com/watch?v=0n1IgKTh-w4) — Stanford MedAI · 50:21 · 3y ago

### Normalization and denormalization in neural networks *(prerequisite)*
Normalization adjusts data to a common scale to improve neural network training, while denormalization reverses this process to interpret outputs correctly. Learning how these processes work helps understand how Dish-TS uses learned coefficients to handle distribution shifts.

*How the paper uses it:* Dish-TS uses learned normalization and denormalization coefficients via Dual-CONET to alleviate distribution shifts.

▶ [Batch normalization | What it is and how to implement it](https://www.youtube.com/watch?v=yXOMHOpbon8) — AssemblyAI · 13:51 · 4y ago

### Dual neural network architectures *(prerequisite)*
Dual neural network architectures use two separate networks to model different aspects of data or tasks, allowing specialized learning. Understanding this concept clarifies how Dish-TS employs two networks to separately handle input and output distributions.

*How the paper uses it:* Dish-TS's Dual-CONET framework consists of two neural networks modeling input and output distributions separately.

▶ [Neural Network Architecture Explained: Neurons, Layers & MLPs | DL02](https://www.youtube.com/watch?v=PbuFE91lILI) — Hasan Faraz Khan · 1mo ago

## Already in your library

- [8. Time Series Analysis I](https://www.youtube.com/watch?v=uBeM1FUk4Ps) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Batch Normalization (“batch norm”) explained](https://www.youtube.com/watch?v=dXB-KQYkzNU) — also for: Mitigating the ID–OOD Tradeoff in Open-Set Test-Time Adaptation (Yunhui Guo)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Dish-TS, a framework addressing distribution shift in time series forecasting. The beginner project focuses on reproducing a key visualization from the paper to grasp distribution shifts. The intermediate project involves running and extending the authors' Dish-TS code on a public dataset to compare performance against a baseline. The advanced project tackles a stated limitation by extending Dish-TS to longer horizon forecasting with a more complex CONET architecture, showing research-level initiative.

### Beginner — Visualize Distribution Shifts in Time Series Data
*Effort: a weekend, ~6 hours*

You build a Python notebook that loads a public time series dataset (e.g., Electricity Load Diagrams from UCI), computes and visualizes intra-space and inter-space distribution shifts between input and output windows as described in the Dish-TS paper. You reproduce a figure similar to the paper's distribution shift illustration, showing how statistical properties change over time and between windows.

**Why it shows you understood the paper:** This project demonstrates you understand the core problem Dish-TS addresses: quantifying and visualizing distribution shifts in time series forecasting. A professor would see you grasp the difference between intra-space and inter-space shifts and their impact on forecasting.

**Grounded in:** We systematically organize distribution shift of TSF into two categories... intra-space shift... inter-space shift...

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas, numpy

**Data:** Electricity Load Diagrams 2011-2014 dataset from UCI Machine Learning Repository (https://archive.ics.uci.edu/ml/datasets/ElectricityLoadDiagrams20112014), as used in the paper.

**Build it:**

1. Download and preprocess the Electricity Load Diagrams dataset to extract time series segments.
2. Implement functions to compute statistical properties (mean, variance) for input and output windows.
3. Calculate distribution coefficients representing intra-space and inter-space shifts.
4. Visualize these shifts using plots similar to those in the Dish-TS paper.
5. Write a README explaining the concepts of intra-space and inter-space shifts with your visualizations.

**Verified links from the paper:**

- <https://archive.ics.uci.edu/ml/datasets/ElectricityLoadDiagrams20112014> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter Notebook with code and plots illustrating distribution shifts, plus a README explaining the significance of these shifts in time series forecasting.

**Stretch goal:** Add interactive visualizations using Plotly or Dash to explore distribution shifts dynamically.

### Intermediate — Run and Extend Dish-TS on Electricity Dataset
*Effort: 2 weekends, ~20 hours*

You clone and run the Dish-TS official implementation from the authors' GitHub repository on the Electricity Load Diagrams dataset. You reproduce the paper's reported improvement in forecasting accuracy over a baseline model (e.g., vanilla Transformer or RevIN). Then, you modify the training horizon length or input window size to observe performance changes and report metrics like MSE.

**Why it shows you understood the paper:** This project shows you can work with the authors' code, understand the Dual-CONET architecture, and evaluate Dish-TS's effectiveness. A professor would see you can reproduce core results and experiment with model parameters to explore limitations.

**Grounded in:** Experimental results show Dish-TS consistently boosts them with a more than 20% average improvement. Dish-TS can still achieve better performance in different settings.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Git, Docker (optional)

**Data:** Electricity Load Diagrams 2011-2014 dataset from UCI, as used in the paper.

**Build it:**

1. Clone the Dish-TS repository from https://github.com/weifantt/Dish-TS.
2. Set up the environment and dependencies as per the repository instructions.
3. Download and preprocess the Electricity dataset to the required format.
4. Run the baseline forecasting model and Dish-TS-enhanced model to reproduce reported metrics.
5. Modify the horizon length or input window size to test performance degradation.
6. Document your findings and include metric comparisons in a report.

**Verified links from the paper:**

- <https://github.com/weifantt/Dish-TS> — released by the paper's authors
- <https://archive.ics.uci.edu/ml/datasets/ElectricityLoadDiagrams20112014> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts/notebooks to run Dish-TS on Electricity data, metric reports comparing baseline and Dish-TS, and a README explaining your experiments.

**Stretch goal:** Add visualization of learned distribution coefficients from Dual-CONET to interpret model behavior.

### Advanced — Extend Dish-TS for Long-Horizon Forecasting with Enhanced CONET
*Effort: 3+ weeks*

You develop an extension of Dish-TS by designing a more complex CONET architecture (e.g., deeper or with attention mechanisms) to better model complex distribution shifts. You apply this to longer forecasting horizons on the Electricity dataset or a similar public dataset. You compare performance against the original Dish-TS implementation and analyze improvements or remaining challenges.

**Why it shows you understood the paper:** This project tackles a stated limitation of Dish-TS and explores a future direction proposed by the authors. A professor would recognize your ability to innovate on the core method, handle complex distribution shifts, and conduct meaningful experiments beyond reproduction.

**Grounded in:** Performance on Dish-TS is slowly worse with horizon’s increasing... The simple CONET design may require more complex architectures for datasets with highly complex distribution shifts.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Git, Docker (optional)

**Data:** Electricity Load Diagrams 2011-2014 dataset from UCI or similar public time series dataset with long horizons.

**Build it:**

1. Study the original Dual-CONET implementation in the Dish-TS repository.
2. Design and implement a more complex CONET architecture (e.g., adding attention layers or deeper networks).
3. Integrate the enhanced CONET into the Dish-TS framework.
4. Train and evaluate the extended Dish-TS on longer forecasting horizons.
5. Compare results with the original Dish-TS and analyze performance trends.
6. Write a detailed report discussing your architectural choices, experimental results, and implications.

**Verified links from the paper:**

- <https://github.com/weifantt/Dish-TS> — released by the paper's authors
- <https://archive.ics.uci.edu/ml/datasets/ElectricityLoadDiagrams20112014> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with your extended Dish-TS code, experimental results on long horizons, and a comprehensive README/report discussing your contributions and findings.

**Stretch goal:** Apply your extended Dish-TS model to a different domain dataset exhibiting distribution shifts, such as traffic or weather data.
