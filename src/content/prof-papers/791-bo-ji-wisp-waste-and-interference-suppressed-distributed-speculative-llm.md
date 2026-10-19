---
title: "791 · WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching — Bo Ji"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bo-ji"
source_hash: "e47189df6673988f8abae2b5143bf6ef3df8f9799a23dbcbb87b5677d6623530"
sequence: 791
generator: "outreach-garden: managed"
---

# 791 · WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching

## At a glance

- **Professor:** Bo Ji
- **Institution:** Virginia Tech
- **Paper:** [WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching](https://arxiv.org/pdf/2601.11652)
- **Authors:** Xiangchen Li, Jiakun Fan, Qingyuan Wang, Dimitrios Spatharakis, Saeid Ghafouri, Hans Vandierendonck, Deepu John, Bo Ji, Ali R. Butt, Dimitrios S. Nikolopoulos
- **Year:** 2026

## Paper overview

This paper addresses the inefficiencies in serving large language model (LLM) inference requests that originate from edge devices but are processed in centralized GPU clusters. It proposes WISP, a system that dynamically balances workload between edge devices and cloud servers using speculative decoding, reducing wasted computation and improving latency guarantees. WISP includes an intelligent drafting controller to minimize wasted draft tokens, an SLO-aware batch scheduler to reduce verification delays, and a verification time estimator to optimize scheduling. The system significantly improves throughput and reduces latency violations compared to prior methods.

### Why it matters

**Research problem:** The exponential growth in LLM inference requests from edge devices causes resource inefficiency and latency issues because computation is centralized in GPU clusters while edge devices remain underutilized. Existing distributed speculative LLM serving systems suffer from wasted drafting time (WDT) and verification interference, leading to poor scalability and failure to meet strict service level objectives (SLOs).

**Why it matters:** LLMs are widely used in interactive applications on edge devices, but centralized inference leads to high operational costs and latency issues, limiting scalability and user experience. Efficiently leveraging edge resources while maintaining output quality and latency guarantees is critical for real-time AI applications and sustainable deployment.

**Key contributions:**

- Identification and formal definition of two fundamental bottlenecks in distributed speculative edge LLM serving: Wasted Drafting Time (WDT) and Verification Interference.
- Development of an ML-based rejection predictor mathematically proven to reduce WDT by dynamically controlling drafting length.
- Formulation of SLO-aware verification batch scheduling as a knapsack problem and design of a greedy scheduling algorithm that accounts for SLO slack and interference.
- Design and validation of a fine-grained verification time estimator that predicts server-side batch latency by modeling linear operations, attention interactions, and memory access.
- Implementation of a comprehensive distributed speculative edge LLM serving system combining dynamic drafting, SLO-aware scheduling, and cache optimizations.

## About the professor

**Bo Ji** — Professor, Department of Computer Science, Virginia Tech.

Research interests: design, analysis, control, and optimization of complex networked systems, wireless and wired communication networks, edge and cloud computing, data centers, information-update systems, Internet of Things, cyber-physical systems

### Research links

- [Faculty/profile page](http://people.cs.vt.edu/boji)
- [Professor website](https://people.cs.vt.edu/boji/index.html)
- [Lab website](https://people.cs.vt.edu/boji/group.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems Scheduling
**The paper assumes:** distributed systems scheduling, batch processing algorithms, service level objective (SLO) management
**Already in this field?** Skip this entirely if you already understand distributed system scheduling algorithms, batch scheduling under latency constraints, and SLO-aware resource management.

This background focuses on distributed systems scheduling, which is central to understanding how WISP optimizes workload balancing, verification interference, and latency guarantees in distributed speculative LLM serving. The rigorous course offers a deep, structured university-level treatment of distributed scheduling and related concepts, while the fast track provides a concise, visual introduction to CPU scheduling algorithms relevant to scheduling theory and heuristics. Choose the course for comprehensive mastery and the fast track for a quick, intuitive grasp of scheduling fundamentals.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [UMass CS677: Distributed Systems - Spring 2024](https://www.youtube.com/playlist?list=PLacuG5pysFbBpWHfKUU9Dfdk8RmQ7B9EH) — UMass OS · 25 videos · 30.8h across 25 episodes

**Watch only this:** Lectures 1-6 (Introduction to Distributed Systems through Distributed and Cluster Scheduling), about 7.4 hours — covering foundational distributed systems concepts and the key lecture on distributed scheduling.

*Why it unblocks this paper:* UMass CS677 is a university-level distributed systems course that includes a dedicated lecture on distributed and cluster scheduling, directly relevant to the paper's formulation of SLO-aware batch scheduling and greedy algorithms for verification interference.

*If you want all of it:* All 25 lectures, about 30.8 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CPU Scheduling (OS Ch# 04)](https://www.youtube.com/playlist?list=PLSw9kNHHr5i1IHHAyT1et1gPmTM7azY_e) — Flare College · 11 videos · 1.6h across 11 episodes

**Watch only this:** Episodes 1-6 (Multilevel Feedback Queue through Shortest Remaining Time First), about 48 minutes — covering key scheduling algorithms relevant to understanding scheduling heuristics and trade-offs.

*Why it unblocks this paper:* This CPU Scheduling playlist from Flare College offers concise, clear explanations of core scheduling algorithms and concepts such as priority scheduling, round robin, and shortest job first, which underpin the scheduling heuristics used in WISP's batch scheduling approach.

*If you want all of it:* All 11 episodes, about 1.6 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the WISP paper, start by building foundational knowledge on key prerequisite topics such as service level objectives (SLO) scheduling, the knapsack problem in scheduling, machine learning rejection prediction, and latency estimation for GPU inference. These topics underpin the system's design decisions and algorithms. Finally, focus on the core concept of distributed speculative LLM serving and the authors' own talk on WISP to gain direct insights into their novel system, its architecture, and evaluation results.

### Service level objectives scheduling *(prerequisite)*
This section covers the fundamentals of scheduling algorithms with a focus on meeting service level objectives (SLOs), which are critical for guaranteeing latency constraints in batch verification scheduling. The chosen lecture from IIT Bombay provides a rigorous academic treatment of packet scheduling algorithms, relevant to understanding how WISP prioritizes verification batches to minimize latency violations.

*How the paper uses it:* WISP employs SLO-aware scheduling to meet strict latency guarantees in verification batch processing.

▶ [Lecture - 9 Packet Scheduling Algorithm Introduction](https://www.youtube.com/watch?v=sRTDMvT3dL8) — nptelhrd · 55:49 · 17 yr ago

### Knapsack problem in scheduling *(prerequisite)*
Understanding the knapsack problem and greedy algorithms is essential because WISP formulates its verification batch scheduling as an SLO-aware knapsack problem. The selected lecture from Dr. Daniel Page offers a detailed university-level explanation of greedy algorithms and the knapsack problem, providing the mathematical foundation for WISP's scheduling heuristic.

*How the paper uses it:* WISP formulates verification batch scheduling as a knapsack problem solved approximately by a greedy algorithm.

▶ [W2022 CS 340 Lecture 19 (Greedy Algorithms, Knapsack, Fractional Knapsack)](https://www.youtube.com/watch?v=bxAokV4oPWs) — Dr. Daniel Page \[CS University Lectures\] · 1:16:35 · 4 yr ago

### Machine learning rejection prediction *(prerequisite)*
This topic introduces machine learning techniques for predictive control and rejection prediction, which WISP uses to dynamically reduce wasted drafting time. Although no perfect match for the paper's specific ML rejection predictor exists, the Udacity video on regression predictions offers a substantive introduction to ML prediction concepts relevant to understanding WISP's rejection predictor.

*How the paper uses it:* WISP uses an ML-based rejection predictor to dynamically control drafting length and reduce wasted draft tokens.

▶ [Predictions Using Regression - Intro to Machine Learning](https://www.youtube.com/watch?v=cUhgZ2BnWq0) — Udacity · 11 yr ago

### Latency estimation for GPU inference *(prerequisite)*
Accurate latency estimation for GPU inference is crucial for WISP's verification time estimator, which models batch latency to enable effective SLO-aware scheduling. The selected talk on LLM inference optimization by Micro Learning provides a deep dive into GPU performance considerations, quantization, batching, and latency optimization relevant to WISP's latency modeling.

*How the paper uses it:* WISP designs a fine-grained verification time estimator modeling GPU batch latency components for scheduling.

▶ [LLM Inference Optimization Explained | Quantization, KV Cache, Batching & GPU Performance](https://www.youtube.com/watch?v=dpGpcODPdPY) — Micro Learning · 3 mo ago

### Distributed speculative LLM serving
This core concept explains the balance of edge and cloud inference with speculative decoding, which is central to WISP's approach. The university-level talks on LLM serving with SGLang and optimization provide rigorous insights into distributed LLM serving architectures and challenges, setting the stage for understanding WISP's innovations.

*How the paper uses it:* WISP addresses inefficiencies in distributed speculative LLM serving by balancing edge and cloud workloads.

▶ [Introduction to LLM serving with SGLang - Philip Kiely and Yineng Zhang, Baseten](https://www.youtube.com/watch?v=Ahtaha9fEM0) — AI Engineer · 1 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand WISP, a system optimizing distributed LLM serving across edge and cloud. We start with basic scheduling and optimization principles, then cover machine learning prediction techniques and GPU latency estimation, before concluding with the core idea of distributed speculative LLM serving. This progression builds intuition from general system optimization to the specific innovations in WISP.

### Service level objectives scheduling *(prerequisite)*
Service Level Objectives (SLOs) define performance targets like latency guarantees that systems must meet. Understanding scheduling algorithms that prioritize tasks to meet these SLOs is key to managing workloads efficiently and avoiding delays.

*How the paper uses it:* WISP uses SLO-aware scheduling to batch verification requests and minimize latency violations.

▶ [What is a Service Level Objective?](https://www.youtube.com/watch?v=fKh4FtBn2vM) — Harness · 1 yr ago

### Knapsack problem in scheduling *(prerequisite)*
The knapsack problem is a classic optimization challenge where you select items with given values and sizes to maximize total value without exceeding capacity. It models how to batch requests under resource and latency constraints effectively.

*How the paper uses it:* WISP formulates verification batch scheduling as a knapsack problem to optimize throughput while respecting SLOs.

▶ [L-4.2: Knapsack Problem With Example| Greedy Techniques| Algorithm](https://www.youtube.com/watch?v=M79iHjAG1tg) — Gate Smashers · 11:41 · 6 yr ago

### Machine learning rejection prediction *(prerequisite)*
Machine learning rejection prediction uses models to decide early when to stop speculative work that is unlikely to be useful, saving computation and time. This dynamic control improves system efficiency by reducing wasted effort.

*How the paper uses it:* WISP employs an ML-based rejection predictor to dynamically reduce wasted drafting time during speculative decoding.

▶ [Predictions Using Regression - Intro to Machine Learning](https://www.youtube.com/watch?v=cUhgZ2BnWq0) — Udacity · 11 yr ago

### Latency estimation for GPU inference *(prerequisite)*
Estimating latency for GPU inference involves modeling computation, memory access, and attention mechanisms to predict how long batches will take. Accurate predictions enable smarter scheduling to meet latency targets.

*How the paper uses it:* WISP designs a fine-grained verification time estimator to predict batch latency for SLO-aware scheduling.

▶ [LLM Inference Optimization Explained | Quantization, KV Cache, Batching & GPU Performance](https://www.youtube.com/watch?v=dpGpcODPdPY) — Micro Learning · 3 mo ago

### Distributed speculative LLM serving
Distributed speculative LLM serving balances workload between edge devices and cloud servers by speculatively generating tokens on the edge and verifying them centrally. This approach reduces latency and improves resource utilization.

*How the paper uses it:* WISP is a distributed speculative LLM serving system that dynamically drafts on edge and verifies on cloud GPUs.

▶ [Introduction to LLM serving with SGLang - Philip Kiely and Yineng Zhang, Baseten](https://www.youtube.com/watch?v=Ahtaha9fEM0) — AI Engineer · 1 yr ago

### WISP system talk *(paper-talk search result; attribution unverified)*
A direct overview from the authors provides insight into WISP's architecture, key innovations, and performance improvements, tying together the concepts learned earlier.

*How the paper uses it:* This talk explains WISP's design and experimental results from the paper.

▶ [SGLang Explained: How Efficient LLM Serving Works](https://www.youtube.com/watch?v=nFZGrweVF2U) — Forward Pass · 1 mo ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 11: Large Scale Distributed Training](https://www.youtube.com/watch?v=9MvD-XsowsE) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Speculative Decoding: 3× Faster LLM Inference with Zero ...](https://www.youtube.com/watch?v=Qh9cIEelCj4) — also for: WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching (Ali Raza Butt)
- [4.5 0/1 Knapsack - Two Methods - Dynamic Programming](https://www.youtube.com/watch?v=nLmhmB6NzcM) — also for: WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching (Ali Raza Butt)
- [0/1 Knapsack Problem Explained Visually](https://www.youtube.com/watch?v=qxWu-SeAqe4) — also for: WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching (Ali Raza Butt)
- [Generalized Neural Framework For Learning With Rejection](https://www.youtube.com/watch?v=ih3sgriehag) — also for: WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching (Ali Raza Butt)
- [Lecture 12: Prediction Error of Machine Learning Model | An Intuitive Analysis| Statistical Learning](https://www.youtube.com/watch?v=73ZO1Ajv6EY) — also for: WISP: Waste- and Interference-Suppressed Distributed Speculative LLM Serving at the Edge via Dynamic Drafting and SLO-Aware Batching (Ali Raza Butt)
- [Lec-3: Introduction to Regression with Real Life Examples](https://www.youtube.com/watch?v=cHT-qLnRm0E) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [An introduction to rejection sampling](https://www.youtube.com/watch?v=kYWHfgkRc9s) — also for: Taming Imperfect Process Verifiers: A Sampling Perspective on Backtracking (Ankur Moitra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of WISP's approach to distributed speculative LLM serving. The beginner project focuses on reproducing the ML-based rejection predictor concept to reduce wasted drafting time. The intermediate project implements a simplified SLO-aware verification batch scheduler using a knapsack heuristic and compares it to naive scheduling. The advanced project extends WISP by exploring adaptive profiling of the verification time estimator for heterogeneous edge devices, addressing a key limitation noted in the paper.

### Beginner — ML-Based Rejection Predictor for Draft Token Control
*Effort: a weekend, ~8 hours*

You build a lightweight machine learning model that predicts whether to reject speculative draft tokens early to reduce wasted drafting time (WDT). Using synthetic or simulated token draft sequences, you implement a simple rejection predictor that triggers verification dynamically based on draft token features.

**Why it shows you understood the paper:** This project demonstrates your grasp of WISP's core mechanism to reduce WDT via an ML-based rejection predictor, showing you can translate the paper's theoretical concept into a working prototype.

**Grounded in:** Development of an ML-based rejection predictor mathematically proven to reduce WDT by dynamically controlling drafting length.

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook

**Data:** Simulated draft token sequences generated to mimic speculative decoding outputs with labels indicating whether early verification should be triggered, as no public dataset is available.

**Build it:**

1. Simulate draft token sequences with features such as token confidence scores, token positions, and partial output quality metrics.
2. Label sequences with a binary target indicating whether early rejection (verification trigger) is beneficial to reduce wasted drafting.
3. Train a lightweight classifier (e.g., logistic regression or decision tree) to predict rejection decisions.
4. Evaluate the predictor's accuracy and simulate its impact on reducing wasted drafting time compared to a fixed-length drafting baseline.
5. Document the model design, training process, and evaluation results in a Jupyter Notebook.

**Ships as:** A GitHub repository containing the simulation code, ML model training notebook, evaluation results, and a README explaining how the predictor reduces wasted drafting time.

**Stretch goal:** Add an interactive visualization showing how different rejection thresholds affect wasted drafting time and verification frequency.

### Intermediate — SLO-Aware Verification Batch Scheduler with Knapsack Heuristic
*Effort: 1-3 weekends*

You implement a simplified version of WISP's SLO-aware verification batch scheduler that formulates scheduling as a knapsack problem. Using synthetic request workloads with deadlines and verification times, you develop a greedy scheduling algorithm prioritizing urgent requests to minimize verification interference and SLO violations. You compare your scheduler's performance against a naive FIFO batch scheduler.

**Why it shows you understood the paper:** This project shows you can operationalize WISP's core scheduling contribution, understand the trade-offs in batch formation under SLO constraints, and evaluate scheduling algorithms' impact on latency and throughput.

**Grounded in:** Formulation of SLO-aware verification batch scheduling as a knapsack problem and design of a greedy scheduling algorithm that accounts for SLO slack and interference.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic workload traces simulating heterogeneous LLM inference requests with verification deadlines and estimated verification times, generated based on distributions described in the paper.

**Build it:**

1. Generate synthetic request workloads with attributes: arrival time, verification deadline (SLO), and estimated verification time.
2. Implement a baseline FIFO batch scheduler that batches requests in arrival order without SLO awareness.
3. Formulate the scheduling problem as a knapsack problem with SLO constraints and implement a greedy heuristic prioritizing urgent requests and utility scores.
4. Simulate batch scheduling under both algorithms and measure metrics such as batch latency, SLO violation rate, and throughput.
5. Visualize and compare the performance of the SLO-aware scheduler against the baseline.
6. Write a detailed README explaining the scheduling problem, algorithms, and evaluation.

**Ships as:** A GitHub repository with the batch scheduler implementations, synthetic workload generator, simulation scripts, performance plots, and documentation.

**Stretch goal:** Incorporate a simple verification time estimator model to dynamically update estimated verification times during scheduling.

### Advanced — Adaptive Verification Time Estimator for Heterogeneous Edge-Cloud Systems
*Effort: a few weeks*

You extend WISP by developing an adaptive verification time estimator that profiles and models verification latency across different GPU hardware and LLM model configurations. You implement a profiling pipeline to collect latency data, fit a fine-grained latency model incorporating linear computation, attention interactions, and memory access, and adapt scheduling decisions based on the estimator. This addresses the paper's limitation on fixed profiling for specific hardware.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, demonstrating your ability to extend WISP's verification time estimator to heterogeneous environments and improve scheduling accuracy and SLO adherence.

**Grounded in:** The verification time estimator and scheduling algorithms are profiled and tuned for specific GPU hardware and model configurations, requiring re-profiling for different setups.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Docker

**Data:** Profiling data collected by running LLM verification batches on available GPU hardware (e.g., NVIDIA A100 or substitute GPUs) with varying batch sizes and model parameters; if hardware unavailable, simulated latency data based on the paper's latency model.

**Build it:**

1. Set up an environment to run LLM verification batches on available GPU hardware or simulate latency data based on the paper's model.
2. Collect latency measurements for different batch sizes, model configurations, and attention patterns.
3. Fit a fine-grained latency model that predicts verification time as a function of linear computation, attention interactions, and memory access.
4. Integrate the adaptive estimator into a scheduling simulation that adjusts batch formation based on updated latency predictions.
5. Evaluate the impact of adaptive profiling on scheduling accuracy and SLO violation rates compared to a static estimator.
6. Document the profiling methodology, model fitting, scheduling integration, and evaluation results.

**Ships as:** A GitHub repository with profiling scripts, latency model fitting code, scheduling simulation with adaptive estimator, evaluation plots, and comprehensive README.

**Stretch goal:** Explore extending the estimator and scheduler to multi-tenant environments with dynamic workloads as suggested in the paper's future directions.
