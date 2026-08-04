---
title: "219 · A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference — Ke Wang"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ke-wang"
source_hash: "39d2178037fa6e68e75e1d609e281c31fa850da55b40d4df77037984e3fceb78"
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
