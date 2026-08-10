---
title: "219 · A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference — Ke Wang"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ke-wang"
source_hash: "19c7f3b846ebc282fa29b86106635e51522cdeee0b58ed0d90e755084038d644"
sequence: 219
generator: "outreach-garden: managed"
---

# 219 · A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference

## At a glance

- **Professor:** Ke Wang
- **Institution:** UNC - Charlotte
- **Paper:** [A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference](https://arxiv.org/abs/2606.15453)
- **Authors:** Yingnan Zhao, Razvan Bunescu, Ahmed Louri, Avinash Karanth, Ke Wang
- **Year:** 2026

## Paper overview

This paper addresses the inefficiency in inference of Mixture-of-Experts (MoE) based large language models (LLMs) caused by the latency of loading expert parameters dynamically during token decoding. The authors analyze expert activation patterns and find strong correlations across layers and tokens, enabling prediction of future expert usage. They propose ST-MoE, a framework combining a lightweight prediction algorithm and reconfigurable hardware to prefetch experts proactively, overlapping loading with computation. This approach improves inference speed and energy efficiency without reducing accuracy.

### Why it matters

**Research problem:** MoE-based LLMs activate only a subset of experts per token to increase model capacity efficiently, but the dynamic and irregular expert activation causes significant expert loading latency during inference, limiting performance and energy efficiency.

**Why it matters:** Efficient inference of large-scale MoE-based LLMs is critical for practical deployment in real-world applications, as expert loading overhead can stall computation, reduce hardware utilization, and increase energy consumption, negating the benefits of MoE architectures.

**Key contributions:**

- Comprehensive empirical analysis revealing strong spatial (cross-layer) and temporal (cross-token) correlations in expert activations during MoE-based LLM decoding.
- A lightweight dynamic expert prediction strategy leveraging CCT and HT to predict future expert requests without modifying the original model or requiring additional training.
- Design of a reconfigurable hardware architecture that supports prediction-guided expert prefetching, flexible expert staging, and pipelined execution to hide expert loading latency.
- Implementation of a pipelined workflow overlapping expert prediction, prefetching, execution, and verification across MoE layers.
- Evaluation on real-world applications demonstrating significant speedup and energy efficiency improvements over GPU and prior specialized hardware baselines.

## About the professor

**Ke Wang** — Assistant Professor, Electrical & Computer Engineering, UNC - Charlotte.

Research interests: Computer Architecture, Interconnection Networks, Machine-Learning-enabled Computer Architecture Designs, Graph Neural Network Accelerators

### Research links

- [Faculty/profile page](https://ece.charlotte.edu/directory/dr-ke-cory-wang-phd)
- [Professor website](https://www.icaslab.info/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Mixture-of-Experts models
**The paper assumes:** neural network architectures, Mixture-of-Experts models, dynamic routing in deep learning
**Already in this field?** Skip this entirely if you already understand the architecture and routing mechanisms of Mixture-of-Experts neural networks.

To understand the core concepts behind Mixture-of-Experts (MoE) models, which are central to this paper's approach to efficient LLM inference, it is essential to grasp how MoE architectures activate subsets of experts dynamically. The rigorous course option offers a deep, structured university lecture series on language modeling including a dedicated lecture on MoE, while the fast track provides a concise, intuition-driven explainer series on neural networks and transformers that builds foundational understanding quickly. Choose the course for comprehensive depth or the fast track for a focused, visual introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS336 Language Modeling from Scratch I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOY23Y0BoGoBGgQ1zmU_MT_) — Stanford Online · 17 videos · 22.3h across 17 episodes

**Watch only this:** Lecture 4: Mixture of experts (about 78 minutes) — this single lecture covers the core MoE concepts needed to understand expert activation and routing mechanisms.

*Why it unblocks this paper:* This Stanford CS336 Language Modeling from Scratch course includes a dedicated lecture on Mixture of Experts (Lecture 4), providing a rigorous and detailed foundation on MoE models and their role in language modeling, directly relevant to the paper's focus on expert activation and prediction.

*If you want all of it:* All 17 lectures, approximately 22.3 hours — for a comprehensive understanding of language modeling and related architectures.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1-7 ("But what is a neural network?" through "Attention in transformers, step-by-step"), about 2.5 hours total — these episodes build intuition on neural networks, backpropagation, transformers, and attention, essential for understanding MoE-based LLMs.

*Why it unblocks this paper:* The 3Blue1Brown Neural Networks series offers clear, visual explanations of neural networks and transformers, including attention mechanisms and large language models, providing an accessible introduction to the foundational concepts underlying MoE models and LLM inference.

*If you want all of it:* All 10 episodes, about 3.6 hours total — for a broader overview including related deep learning concepts.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on ST-MoE, start with foundational knowledge on Mixture-of-Experts (MoE) architectures and dynamic expert routing to grasp the core model and inference challenges. Next, study hardware prefetching and runtime prediction algorithms to appreciate the hardware-software co-design and prediction mechanisms enabling efficient expert prefetching. Finally, focus on the paper's core concept of spatio-temporal expert prefetching and the authors' own talk or related advanced research talks to understand their novel framework and contributions.

### Mixture-of-Experts LLM inference *(prerequisite)*
This section covers the core architecture of Mixture-of-Experts models in large language models, explaining how multiple specialized experts are activated dynamically to increase model capacity efficiently. Understanding this is essential to appreciate the inference challenges addressed by the paper.

*How the paper uses it:* The paper builds on MoE-based LLMs and targets their inference inefficiencies.

▶ [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 4: Mixture of experts](https://www.youtube.com/watch?v=LPv1KfUXLCo) — Stanford Online · 1 year ago

### Dynamic expert routing in MoE *(prerequisite)*
Dynamic expert routing determines which experts are activated per token during inference, a key factor causing latency and irregularity. This section explains routing algorithms and their impact on model efficiency, crucial for understanding the need for prediction and prefetching.

*How the paper uses it:* The paper's prediction framework aims to anticipate dynamic expert routing decisions to reduce loading latency.

▶ [Stanford CS25: V1 I Mixture of Experts (MoE) paradigm and ...](https://www.youtube.com/watch?v=U8J32Z3qV8s) — Stanford Online · 1:05:44

### Hardware prefetching techniques *(prerequisite)*
Hardware prefetching is a technique to hide memory latency by predicting and loading data before it is needed. This foundational knowledge helps understand how the paper's hardware platform overlaps expert loading with computation to improve efficiency.

*How the paper uses it:* The paper designs a reconfigurable hardware architecture supporting prediction-guided expert prefetching.

▶ [Lecture 35: Hardware Prefetching](https://www.youtube.com/watch?v=cPpMrxUUSbk) — Biswabandan (Biswa@IITB) · 4 years ago

### Runtime prediction algorithms *(prerequisite)*
Lightweight runtime prediction algorithms enable dynamic forecasting of future expert activations without retraining the model. Understanding these algorithms is key to grasping the paper's prediction strategy that drives prefetching.

*How the paper uses it:* The paper proposes a lightweight dynamic expert prediction strategy leveraging correlation tables and history tables.

▶ [Compiler Construction for Hardware Acceleration: Challenges and Opportunities](https://www.youtube.com/watch?v=7TimDQC_SBQ) — mlhardware · 6 years ago

### Spatio-temporal expert prefetching
This section focuses on the paper's core innovation: leveraging spatial (cross-layer) and temporal (cross-token) correlations to predict and prefetch experts proactively. It covers advanced spatio-temporal analysis techniques relevant to the framework.

*How the paper uses it:* The paper's ST-MoE framework exploits spatio-temporal correlations for efficient expert prefetching.

▶ [The basics of spatio-temporal graph neural networks](https://www.youtube.com/watch?v=RRMU8kJH60Q) — Jaye Heglund · 13:09 · 5 years ago

### ST-MoE framework talk *(the paper's own talk)*
The authors' own talk or a direct presentation of their framework provides the most precise and authoritative explanation of their methodology, design decisions, and evaluation results. This is the capstone learning resource to fully understand the paper.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel ST-MoE framework.

▶ [KDD 2026 - Invariant Structure Learning with Pre-trained Language Models for Spatio-temporal Graph](https://www.youtube.com/watch?v=NlapG7t53Rk) — Association for Computing Machinery (ACM) · 3 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on efficient MoE-based LLM inference, start by learning the basics of Mixture-of-Experts (MoE) models and how dynamic expert routing works, since these are foundational to the problem. Then, grasp hardware prefetching techniques and runtime prediction algorithms to appreciate the hardware-software co-design approach. Finally, explore the paper's core idea of spatio-temporal expert prefetching, which combines spatial and temporal correlations to predict and prefetch experts, improving inference speed and efficiency.

### Mixture-of-Experts LLM inference *(prerequisite)*
Mixture-of-Experts models divide a large model into multiple specialized sub-models called experts. During inference, only a subset of these experts is activated per input token, enabling efficient scaling of model capacity. Understanding this architecture is key to grasping the challenges and solutions in the paper.

*How the paper uses it:* The paper targets MoE-based LLMs where only some experts are activated dynamically per token, causing loading latency.

▶ [A Visual Guide to Mixture of Experts (MoE) in LLMs](https://www.youtube.com/watch?v=sOPDGQjFcuM) — Maarten Grootendorst · 1 year ago

### Dynamic expert routing in MoE *(prerequisite)*
Dynamic expert routing is the process by which the model decides which experts to activate for each token during inference. This routing is irregular and changes token-by-token, leading to unpredictable expert usage patterns. Understanding this helps explain why expert loading latency occurs and why prediction is challenging.

*How the paper uses it:* The paper analyzes expert activation patterns across tokens and layers to predict future expert usage for prefetching.

▶ [MoE Token Routing Explained: How Mixture of Experts Works ...](https://www.youtube.com/watch?v=CDnkFbW-uEQ) — Hugging Face · 34:15

### Hardware prefetching techniques *(prerequisite)*
Hardware prefetching is a technique where data or instructions are loaded into faster memory ahead of time based on predicted future needs, hiding latency. Learning this concept clarifies how the paper's hardware design overlaps expert loading with computation to improve efficiency.

*How the paper uses it:* The paper designs reconfigurable hardware to prefetch experts proactively based on predicted activations.

▶ [Hardware Prefetching](https://www.youtube.com/watch?v=cjCt2sUaVgI) — Tau Beta Pi UIUC · 8:07

### Runtime prediction algorithms *(prerequisite)*
Runtime prediction algorithms dynamically forecast future events or data needs during program execution. In this context, lightweight prediction methods estimate which experts will be needed next without retraining the model, enabling timely prefetching.

*How the paper uses it:* The paper proposes a lightweight dynamic expert prediction strategy using correlation tables to predict future expert requests.

▶ [Compiler Construction for Hardware Acceleration: Challenges and Opportunities](https://www.youtube.com/watch?v=7TimDQC_SBQ) — mlhardware · 6 years ago

## Already in your library

- [Introduction to spatiotemporal modeling and the webinar series](https://www.youtube.com/watch?v=THwdco2_JAk) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the ST-MoE framework for efficient MoE-based LLM inference. The beginner project reproduces a core empirical analysis of expert activation correlations using synthetic or simplified data. The intermediate project implements the core ST-MoE prediction algorithm on a small-scale simulated MoE expert activation sequence and compares prediction accuracy against a naive baseline. The advanced project extends the prediction framework to dynamically adapt to changing expert activation patterns, addressing a stated limitation and exploring runtime adaptation strategies.

### Beginner — Empirical Analysis of Expert Activation Correlations
*Effort: a weekend, ~8 hours*

You build a data analysis script that simulates or uses simplified MoE expert activation sequences across multiple layers and tokens, then computes and visualizes spatial (cross-layer) and temporal (cross-token) correlation matrices. This reproduces the paper's key empirical finding that expert activations are strongly correlated across layers and tokens.

**Why it shows you understood the paper:** This project shows you understand the fundamental motivation behind ST-MoE: the predictability of expert activations. A professor would see you grasp the statistical basis for prefetching and prediction.

**Grounded in:** Comprehensive empirical analysis revealing strong spatial (cross-layer) and temporal (cross-token) correlations in expert activations during MoE-based LLM decoding.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, Pandas

**Data:** Simulated expert activation sequences mimicking MoE layer and token activations, since no public dataset is available.

**Build it:**

1. Simulate a sequence of expert activations for multiple MoE layers and tokens with correlated patterns.
2. Compute correlation matrices for expert activations across adjacent layers (spatial) and consecutive tokens (temporal).
3. Visualize these correlations using heatmaps or line plots.
4. Write a short report interpreting the correlation patterns and their implications for prediction.

**Ships as:** A Jupyter notebook with code, visualizations of correlation matrices, and a brief explanation linking the results to the paper's motivation.

**Stretch goal:** Add analysis of how correlation strength varies with different simulated task types or noise levels.

### Intermediate — Implementation of ST-MoE Expert Prediction Algorithm
*Effort: 2 weekends, ~20 hours*

You implement the ST-MoE lightweight dynamic expert prediction strategy using Cross-layer Correlation Table (CCT) and History Table (HT) on a small-scale simulated MoE expert activation dataset. You compare prediction accuracy against a naive baseline that predicts experts randomly or always predicts the most recently used expert.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method from its description, showing comprehension of the prediction mechanism and its runtime behavior. A professor would see you can translate the paper's algorithmic contributions into working code and evaluate them.

**Grounded in:** A lightweight dynamic expert prediction strategy leveraging CCT and HT to predict future expert requests without modifying the original model or requiring additional training.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Pandas, Matplotlib

**Data:** Simulated sequences of expert activations across MoE layers and tokens, generated to reflect spatial and temporal correlations as described in the paper.

**Build it:**

1. Design data structures for Cross-layer Correlation Table (CCT) and History Table (HT) based on the paper's description.
2. Implement the prediction algorithm that uses CCT and HT to predict the next expert activations per token and layer.
3. Implement a naive baseline prediction method for comparison.
4. Run experiments on simulated activation sequences to measure prediction accuracy of both methods.
5. Visualize and report the prediction accuracy results.

**Ships as:** A repository with code implementing ST-MoE prediction and baseline, scripts to run experiments on simulated data, and a README reporting accuracy results and analysis.

**Stretch goal:** Extend the implementation to simulate misprediction handling and runtime verification as described in the paper.

### Advanced — Dynamic Adaptation of ST-MoE Prediction to Changing Expert Patterns
*Effort: 3+ weeks*

You extend the ST-MoE prediction framework to dynamically adapt to evolving or diverse expert activation patterns during inference, addressing the paper's limitation on variable prediction accuracy across application domains. You implement a mechanism to update or weight the CCT and HT tables online based on recent prediction errors, and evaluate the adaptive method on simulated datasets with changing activation distributions.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep understanding of the framework and its challenges. A professor would see you can critically analyze the method and propose concrete extensions with experimental evaluation.

**Grounded in:** Given the variability in expert prediction accuracy across different application domains, how might the ST-MoE framework adapt dynamically to changing expert activation patterns during inference to maintain high prediction accuracy and efficiency?

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Pandas, Matplotlib

**Data:** Simulated expert activation sequences with evolving patterns over time to mimic changing application domains or tasks.

**Build it:**

1. Review the baseline ST-MoE prediction implementation from the intermediate project.
2. Design and implement an online adaptation mechanism that updates CCT and HT based on recent prediction outcomes.
3. Simulate expert activation sequences with shifts in activation patterns over time.
4. Evaluate prediction accuracy and efficiency of the adaptive method versus static prediction.
5. Document the design, experiments, results, and insights in a detailed report.

**Ships as:** A repository with adaptive ST-MoE prediction code, experiment scripts on evolving simulated data, and a comprehensive README discussing the approach, results, and implications.

**Stretch goal:** Explore integration of lightweight machine learning models to enhance adaptation or combine with other LLM acceleration techniques.

_No authors' code or real expert activation datasets are publicly available; all projects rely on simulated data approximating the paper's described expert activation patterns._
