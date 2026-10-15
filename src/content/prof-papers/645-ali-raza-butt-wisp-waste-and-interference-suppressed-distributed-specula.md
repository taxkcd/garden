---
title: "645 · WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching — Ali Raza Butt"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ali-raza-butt"
source_hash: "a3f7c0c269a06f805e935237fd2bf488eaca89b90b54a30cbcba9c2322c2dcc2"
sequence: 645
generator: "outreach-garden: managed"
---

# 645 · WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching

## At a glance

- **Professor:** Ali Raza Butt
- **Institution:** Virginia Tech
- **Paper:** [WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching](https://doi.org/10.1145/3820171.3806912)
- **Authors:** Xiangchen Li, Jiakun Fan, Qingyuan Wang, Dimitrios Spatharakis, Saeid Ghafouri, Hans Vandierendonck, Deepu John, Bo Ji, Ali R. Butt, Dimitrios S. Nikolopoulos
- **Year:** 2026

## Paper overview

This paper presents WISP, a system that improves the efficiency and scalability of large language model (LLM) inference by distributing computation between edge devices and centralized GPU clusters. WISP reduces wasted computation on edge devices and manages server-side verification more effectively to meet strict latency requirements, enabling better resource utilization and faster response times for interactive AI applications.

### Why it matters

**Research problem:** The exponential growth in LLM inference requests creates a computational bottleneck centralized in GPU clusters, while edge devices remain underutilized. Existing distributed speculative LLM serving systems suffer from inefficiencies such as wasted drafting time on edge devices and verification interference on servers, leading to poor scalability and failure to meet strict service level objectives (SLOs).

**Why it matters:** LLMs are widely used in interactive applications on edge devices, but the computational burden on centralized data centers is costly and inefficient. Efficiently leveraging edge device resources while maintaining high-quality, low-latency inference is critical to scaling LLM services and reducing operational costs.

**Key contributions:**

- Identification and formal definition of two fundamental bottlenecks in distributed speculative edge LLM serving: Wasted Drafting Time (WDT) and Verification Interference.
- Development of a predictive modeling framework including an ML-based rejection predictor to reduce WDT and a verification time estimator for accurate latency prediction.
- Formulation of SLO-aware batch construction as a knapsack problem and design of a greedy scheduling algorithm that accounts for SLO slack and verification interference.
- Implementation of an end-to-end system with dynamic drafting, SLO-aware scheduling, and cache optimizations, validated through simulations and prototype experiments.
- Demonstration that WISP achieves lossless output quality identical to traditional autoregressive decoding.

## About the professor

**Ali Raza Butt** — Virginia Tech.

### Research links

- [Faculty/profile page](http://people.cs.vt.edu/butta)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems Scheduling
**The paper assumes:** distributed systems scheduling, batch processing algorithms, service level objective (SLO) management
**Already in this field?** Skip this entirely if you have prior coursework or practical experience in distributed systems scheduling and resource-aware batch processing algorithms.

This background covers distributed systems scheduling, focusing on scheduling theory and algorithms relevant to managing verification batching under latency and resource constraints, as in the WISP paper. The rigorous course offers a deep, structured university-level treatment, while the fast track provides a concise, accessible introduction to key concepts for quicker understanding. Choose the rigorous option for thorough mastery and the fast track for a focused overview that still covers essential ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [UMass CS677: Distributed Systems - Spring 2024](https://www.youtube.com/playlist?list=PLacuG5pysFbBpWHfKUU9Dfdk8RmQ7B9EH) — UMass OS · 25 videos · 30.8h across 25 episodes

**Watch only this:** Watch Lecture 06 - Distributed and Cluster Scheduling (~74 minutes) to get focused coverage on scheduling in distributed systems relevant to WISP's batch scheduling approach.

*Why it unblocks this paper:* The UMass CS677 Spring 2024 course by Prashant Shenoy is a comprehensive university-level series on distributed systems, including a dedicated lecture on distributed and cluster scheduling that directly relates to the scheduling challenges addressed in WISP.

*If you want all of it:* The full course is about 30.8 hours across 25 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Distributed Systems lecture series](https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB) — Martin Kleppmann · 23 videos · 6.9h across 23 episodes

**Watch only this:** Watch episodes 1.1 Introduction, 1.2 Computer networking, 1.3 RPC, 2.3 System models, 4.1 Logical time, and 6.1 Consensus (~18 minutes each, total about 1.8 hours) to cover the core distributed systems concepts underpinning scheduling and coordination in WISP.

*Why it unblocks this paper:* Martin Kleppmann's Distributed Systems lecture series offers concise, clear explanations of fundamental distributed systems concepts, including scheduling-related topics, in short episodes that provide a quick yet solid grounding for understanding WISP's scheduling and verification interference issues.

*If you want all of it:* The full series is about 6.9 hours across 23 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the WISP system for distributed speculative LLM serving at the edge, start with foundational knowledge on edge computing for AI inference and service level objectives scheduling, which underpin the system's operational context and latency guarantees. Then, study the knapsack problem and machine learning rejection prediction techniques that directly relate to WISP's batch scheduling optimization and drafting control. Finally, focus on the core concept of distributed speculative LLM serving, culminating with the authors' own talk or the closest available advanced presentation on WISP or related systems to grasp the specific innovations and results.

### Edge computing for AI inference *(prerequisite)*
Understanding edge computing for AI inference is critical as WISP leverages edge devices to perform speculative drafting of LLM outputs, reducing load on centralized GPU clusters. This section covers how AI models run on local or nearby devices, enabling low-latency and resource-efficient inference.

*How the paper uses it:* WISP distributes computation between edge devices and centralized GPU clusters for efficient LLM serving.

▶ [Edge AI & Distributed Inference Orchestration](https://www.youtube.com/watch?v=G_5dOvP3mHk) — Ciklum official · 28:30

### Service level objectives scheduling *(prerequisite)*
Service level objectives (SLOs) scheduling is essential for meeting strict latency and throughput guarantees in distributed systems like WISP. This section explains how scheduling algorithms can be designed to respect SLOs, which is fundamental to WISP's SLO-aware batch scheduler.

*How the paper uses it:* WISP employs an SLO-aware batch scheduler that optimizes batch composition while respecting latency constraints.

▶ [Actionable Service Level Objectives (SLOs) Based on What ...](https://www.youtube.com/watch?v=WvyXFXrw04Y) — Honeycomb · 55:27

### Knapsack problem in batch scheduling *(prerequisite)*
The knapsack problem provides the mathematical foundation for WISP's batch construction optimization. Understanding this problem and greedy heuristics helps in grasping how WISP formulates and solves the challenge of selecting verification requests to maximize throughput under resource constraints.

*How the paper uses it:* WISP formulates SLO-aware batch construction as a knapsack problem and uses a greedy scheduling algorithm.

▶ [4.5 0/1 Knapsack - Two Methods - Dynamic Programming](https://www.youtube.com/watch?v=nLmhmB6NzcM) — Abdul Bari · 28:24 · 8 yr ago

### Machine learning rejection prediction *(prerequisite)*
Machine learning rejection prediction techniques are used in WISP to reduce wasted drafting time on edge devices by predicting when verification should be triggered. This section covers ML models that incorporate rejection mechanisms to improve decision-making accuracy.

*How the paper uses it:* WISP uses an ML-based rejection predictor to adaptively trigger verification and reduce wasted drafting time.

▶ [Generalized Neural Framework For Learning With Rejection](https://www.youtube.com/watch?v=ih3sgriehag) — Fayyaz Minhas · 6 yr ago

### Distributed speculative LLM serving
This concept is central to WISP, describing the method of distributing LLM inference tasks between edge and cloud with speculative decoding to improve latency and resource utilization. Understanding this enables comprehension of WISP's overall system design and performance benefits.

*How the paper uses it:* WISP is a distributed speculative LLM serving system that improves efficiency and scalability of LLM inference.

▶ [OSDI '24 - DistServe: Disaggregating Prefill and Decoding for ...](https://www.youtube.com/watch?v=WwJvecXOeUA) — USENIX · 14:52

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand WISP, a system for efficient distributed speculative LLM serving at the edge. We start with edge computing basics to grasp why computation is moved closer to users, then cover service level objectives (SLOs) and scheduling to understand latency guarantees. Next, we explore the knapsack problem as it relates to batch scheduling optimization, followed by machine learning rejection prediction to reduce wasted work. Finally, we focus on distributed speculative LLM serving, the core method WISP improves upon.

### Edge computing for AI inference *(prerequisite)*
Edge computing means running AI models on local devices near users instead of centralized clouds, reducing latency and bandwidth use. This foundation helps understand why WISP leverages edge devices for drafting partial LLM outputs before server verification.

*How the paper uses it:* WISP distributes LLM inference between edge devices and centralized GPU clusters to improve efficiency and scalability.

▶ [A Practical Introduction to Edge AI](https://www.youtube.com/watch?v=ibm6ZRi6Sm4) — MATLAB · 14:54

### Service level objectives scheduling *(prerequisite)*
Service Level Objectives (SLOs) define performance targets like latency limits that systems must meet. Scheduling algorithms help allocate resources and order tasks to meet these targets, which is critical for WISP to guarantee fast LLM responses under load.

*How the paper uses it:* WISP uses an SLO-aware batch scheduler to optimize verification request batching while respecting latency constraints.

▶ [Actionable Service Level Objectives (SLOs) Based on What ...](https://www.youtube.com/watch?v=WvyXFXrw04Y) — Honeycomb · 55:27

### Knapsack problem in batch scheduling *(prerequisite)*
The knapsack problem involves selecting items with given values and weights to maximize value without exceeding capacity. WISP formulates batch construction as a knapsack problem to optimally pack verification requests within memory and latency limits.

*How the paper uses it:* WISP models SLO-aware batch construction as a knapsack problem and uses a greedy algorithm for scheduling.

▶ [0/1 Knapsack Problem Explained Visually](https://www.youtube.com/watch?v=qxWu-SeAqe4) — ByteQuest · 8:10 · 1 yr ago

### Machine learning rejection prediction *(prerequisite)*
Rejection prediction uses machine learning to anticipate when speculative outputs will be rejected, allowing systems to avoid wasted computation. This reduces unnecessary drafting on edge devices in WISP.

*How the paper uses it:* WISP employs an ML-based rejection predictor to reduce wasted drafting time on edge devices.

▶ [Lecture 12: Prediction Error of Machine Learning Model | An Intuitive Analysis| Statistical Learning](https://www.youtube.com/watch?v=73ZO1Ajv6EY) — Suman Samui · 6 yr ago

### Distributed speculative LLM serving
Distributed speculative LLM serving splits inference between edge and server, speculatively generating outputs on the edge and verifying them centrally to speed up responses. Understanding this method is key to grasping WISP's contributions.

*How the paper uses it:* WISP builds on distributed speculative LLM serving by addressing inefficiencies like wasted drafting and verification interference.

▶ [Speculative Decoding: 3× Faster LLM Inference with Zero ...](https://www.youtube.com/watch?v=Qh9cIEelCj4) — Tales Of Tensors · 7:40

## Already in your library

- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [What is vLLM? Efficient AI Inference for Large Language Models](https://www.youtube.com/watch?v=McLdlg5Gc9s) — also for: Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf (Jian Huang)
- [Lec-3: Introduction to Regression with Real Life Examples](https://www.youtube.com/watch?v=cHT-qLnRm0E) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [An introduction to rejection sampling](https://www.youtube.com/watch?v=kYWHfgkRc9s) — also for: Taming Imperfect Process Verifiers: A Sampling Perspective on Backtracking (Ankur Moitra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of WISP's approach to distributed speculative LLM serving. The beginner project focuses on implementing and evaluating the ML-based rejection predictor to reduce wasted drafting time on edge devices. The intermediate project reimplements the core SLO-aware batch scheduling heuristic as a knapsack problem solver to optimize verification batching under latency constraints. The advanced project extends WISP by exploring adaptive scheduling strategies under dynamic edge environments, addressing one of the paper's stated future directions and limitations.

### Beginner — ML-Based Rejection Predictor for Drafting Time Reduction
*Effort: a weekend, ~8 hours*

You build a lightweight machine learning model that predicts whether a speculative draft token sequence will be rejected, enabling early verification triggering to reduce wasted drafting time on edge devices. You simulate drafting and verification steps with synthetic or simplified data to measure the reduction in wasted tokens.

**Why it shows you understood the paper:** This project demonstrates your grasp of WISP's key innovation to reduce wasted drafting time (WDT) by using an ML-based rejection predictor, a fundamental bottleneck identified in the paper.

**Grounded in:** Identification and formal definition of Wasted Drafting Time (WDT) and the ML-based rejection predictor to reduce it.

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook

**Data:** Synthetic token logit sequences simulating draft outputs and rejection labels, as the paper does not provide a public dataset for this component.

**Build it:**

1. Implement a simple feature extractor that derives lightweight logit-based features from draft token sequences.
2. Train a binary classifier (e.g., logistic regression or random forest) to predict imminent rejection based on these features.
3. Simulate a drafting process where the predictor triggers verification adaptively instead of fixed window drafting.
4. Measure and plot the reduction in wasted drafting tokens compared to a fixed drafting window baseline.
5. Document the model's accuracy and the trade-off between false positives and false negatives.

**Ships as:** A GitHub repo with code and a Jupyter notebook demonstrating the rejection predictor, simulation results showing reduced wasted drafting time, and a README explaining the approach and findings.

**Stretch goal:** Add a small web UI to visualize draft token streams and prediction decisions interactively.

### Intermediate — SLO-Aware Batch Scheduling via Knapsack Heuristic
*Effort: 2 weekends, ~20 hours*

You reimplement WISP's server-side SLO-aware batch scheduler that formulates verification batching as a knapsack problem and uses a greedy heuristic to optimize batch composition under memory and latency constraints. You evaluate scheduling effectiveness on simulated heterogeneous verification requests with varying latencies.

**Why it shows you understood the paper:** This project shows you understand the core scheduling optimization in WISP, including modeling verification interference and SLO slack, and applying combinatorial optimization techniques to batch scheduling.

**Grounded in:** Formulation of SLO-aware batch construction as a knapsack problem and design of a greedy scheduling algorithm accounting for SLO slack and verification interference.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Simulated verification request profiles with heterogeneous latency and memory requirements, as no public dataset is provided.

**Build it:**

1. Model verification requests with attributes: estimated latency, memory footprint, and SLO deadline slack.
2. Implement the greedy knapsack heuristic to select batches maximizing GPU utilization while respecting SLO and memory constraints.
3. Simulate a stream of verification requests and apply your scheduler to form batches.
4. Measure metrics such as batch latency, SLO violation rate, and system goodput compared to naive batching.
5. Visualize scheduling decisions and performance metrics.
6. Write a README explaining the scheduling problem, your implementation, and evaluation results.

**Ships as:** A GitHub repo with Python scripts/notebooks implementing the scheduler, simulation code, performance plots, and documentation.

**Stretch goal:** Incorporate a simple verification time estimator model to predict batch latency more accurately and improve scheduling decisions.

### Advanced — Adaptive Scheduling for Dynamic Edge Environments in Distributed Speculative LLM Serving
*Effort: 3+ weeks*

You extend WISP by designing and implementing an adaptive scheduling and drafting strategy that dynamically adjusts to fluctuating edge device capabilities and network conditions. You simulate variable device performance and network delays, and evaluate how your adaptive approach maintains SLO guarantees compared to static scheduling.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper—handling dynamic edge environments and network variability—demonstrating deep comprehension of WISP's system design and challenges in real-world deployment.

**Grounded in:** Limitation: The system assumes stable device capabilities and network; Future direction: Exploring adaptive scheduling algorithms for dynamic workloads and heterogeneous request patterns.

**Tech stack:** Python 3.11, SimPy (discrete-event simulation), scikit-learn, Matplotlib

**Data:** Synthetic simulation data modeling edge device performance variability and network latency fluctuations.

**Build it:**

1. Develop a discrete-event simulation environment modeling edge devices drafting speculative tokens and a centralized verification server.
2. Implement dynamic profiling of device capabilities and network conditions within the simulation.
3. Design an adaptive scheduling algorithm that adjusts batch composition and drafting triggers based on real-time profiling.
4. Compare the adaptive scheduler against a static baseline in terms of SLO violation rates, system goodput, and wasted drafting time.
5. Analyze trade-offs and document challenges in maintaining strict SLOs under variability.
6. Prepare a comprehensive README detailing your approach, simulation setup, results, and insights.

**Ships as:** A GitHub repository containing simulation code, adaptive scheduling implementation, evaluation results, and a detailed report in the README.

**Stretch goal:** Integrate a privacy-preserving mechanism in the simulation to explore secure distributed speculative serving.

_No authors' own code or datasets are available for WISP; all data must be simulated or synthesized based on the paper's descriptions._
