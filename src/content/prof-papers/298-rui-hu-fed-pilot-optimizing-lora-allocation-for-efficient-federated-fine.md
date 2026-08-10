---
title: "298 · Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients — Rui Hu"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rui-hu"
source_hash: "4a5cd834a345b6474b56088251325651f9be92b1313b0ce68c148c0fc3edef9c"
sequence: 298
generator: "outreach-garden: managed"
---

# 298 · Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients

## At a glance

- **Professor:** Rui Hu
- **Institution:** University of Nevada
- **Paper:** [Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients](https://arxiv.org/pdf/2410.10200)
- **Authors:** Zikai Zhang, Rui Hu, Ping Liu, Jiahao Xu
- **Year:** 2025

## Paper overview

This paper introduces Fed-pilot, a new framework that optimizes the allocation of Low-Rank Adaptation (LoRA) modules for federated fine-tuning of large foundation models across clients with different GPU memory capacities. It addresses the challenge that clients with limited memory cannot fine-tune all model layers by selecting an optimal subset of LoRA modules to train, maximizing model performance while respecting memory constraints. The method also proposes a novel aggregation rule to handle heterogeneous updates from clients and demonstrates superior performance and efficiency compared to existing methods on multiple datasets.

### Why it matters

**Research problem:** Federated learning of large foundation models is limited by the heterogeneous and often constrained memory capacities of client devices, which restricts their ability to fine-tune all model parameters. Existing methods either ignore memory constraints or inefficiently allocate trainable parameters, leading to suboptimal performance and scalability issues.

**Why it matters:** Federated learning enables privacy-preserving collaborative training without sharing raw data, but large foundation models require significant GPU memory for fine-tuning, especially due to activation storage. Without efficient memory management, many clients cannot participate, limiting the scalability and effectiveness of federated fine-tuning in real-world heterogeneous environments.

**Key contributions:**

- Proposed Fed-pilot, the first federated fine-tuning framework that optimizes LoRA allocation under heterogeneous client memory constraints.
- Formulated LoRA module selection as a knapsack optimization problem using a novel IG score to quantify each module's contribution to global performance.
- Developed a new aggregation rule (ComAgg) that compensates for uneven updates across layers due to heterogeneous training and Non-IID data.
- Conducted extensive experiments on five diverse datasets with different data heterogeneity types, demonstrating superior accuracy, convergence stability, and memory efficiency compared to state-of-the-art baselines.

## About the professor

**Rui Hu** — Assistant Professor of Computer Science & Engineering, Computer Science & Engineering, University of Nevada.

Research interests: AI Security & Efficiency, Federated Learning, Data Privacy, Agentic AI

### Research links

- [Faculty/profile page](https://sites.google.com/view/ruihu/home)
- [Google Scholar](https://scholar.google.com/citations?user=3o5dRvsAAAAJ&hl=en&oi=sra)
- [LinkedIn](https://www.linkedin.com/in/hu-rui-profile/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Federated Learning and Parameter-Efficient Fine-Tuning
**The paper assumes:** federated learning fundamentals, parameter-efficient fine-tuning methods, LoRA adaptation, Non-IID data handling in distributed training
**Already in this field?** Skip this entirely if you already understand federated learning basics and parameter-efficient fine-tuning techniques such as LoRA.

To understand the key concepts behind Fed-pilot, including federated learning fundamentals, heterogeneous client constraints, and parameter-efficient fine-tuning techniques like LoRA, this background offers two complementary learning paths. The rigorous course provides a deep, structured dive into federated learning and PEFT within a university setting, ideal for thorough mastery. The fast track offers a concise, practical tutorial series focused on federated AI simulations, perfect for quickly grasping the core ideas and implementation aspects.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Federated AI Simulations with Flower (2025 Tutorial)](https://www.youtube.com/playlist?list=PLNG4feLHqCWkdlSrEL2xbCtGa6QBxlUZb) — Flower · 9 videos · 3.4h across 9 episodes

**Watch only this:** Watch episodes 1 (Introduction), 2 (Launching Your First Simulation), 4 (Defining Strategy Callbacks), and 6 (Building Custom Strategies); about 1.5 hours total. These episodes cover the basics of federated learning simulation, client strategy, and aggregation.

*Why it unblocks this paper:* The 2025 Flower tutorial series offers a concise, hands-on introduction to federated AI simulations, including client heterogeneity and aggregation strategies, providing practical insights into federated learning pipelines relevant to Fed-pilot.

*If you want all of it:* 3.4 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Fed-pilot paper, start by building foundational knowledge on federated learning with heterogeneous clients and the knapsack optimization problem, as these underpin the memory-aware parameter allocation and module selection strategies. Next, explore aggregation rules for heterogeneous federated updates and GPU memory modeling to grasp the challenges in handling uneven client updates and memory constraints. Finally, focus on the core concept of federated fine-tuning with LoRA, including the authors' own talk if available, to directly connect with the novel contributions and technical details of Fed-pilot.

### Federated learning with heterogeneous clients *(prerequisite)*
Understanding client heterogeneity is crucial because Fed-pilot addresses memory constraints and uneven training capabilities across clients. This section covers optimization and fairness challenges in federated learning when clients have diverse computational resources and data distributions.

*How the paper uses it:* Fed-pilot optimizes LoRA allocation specifically to handle heterogeneous client memory capacities in federated fine-tuning.

▶ [SNAPP Seminar || Gauri Joshi (Carnegie Mellon University ...](https://www.youtube.com/watch?v=5a-Lg75ebEc) — SNAPP Seminar · 1:04:34

### Knapsack optimization in machine learning *(prerequisite)*
The knapsack problem formulation is central to Fed-pilot's method of selecting which LoRA modules to train under memory constraints. This section introduces the knapsack optimization problem and dynamic programming solutions relevant to resource allocation in machine learning.

*How the paper uses it:* Fed-pilot formulates LoRA module selection as a knapsack optimization problem to maximize performance under memory limits.

▶ [The Knapsack problem in Combinatorial Optimization ...](https://www.youtube.com/watch?v=5jIfgETYKRE) — Ahmad Bazzi · 22:47

### Aggregation rules for heterogeneous federated updates *(prerequisite)*
Aggregation strategies are vital to combine updates from clients that train different subsets of parameters and have non-IID data. This section explores methods to handle heterogeneity in federated updates to ensure stable and effective model convergence.

*How the paper uses it:* Fed-pilot introduces a compensated aggregation rule (ComAgg) to mitigate divergence caused by heterogeneous LoRA allocations and data distributions.

▶ [Lecture 11.3 - Federated Learning Algorithms](https://www.youtube.com/watch?v=9pMQh9djClw) — UCF CRCV · 18:35

### GPU memory modeling for deep learning *(prerequisite)*
Accurate modeling of GPU memory consumption, including parameters, optimizer states, activations, and CUDA context, is essential for feasible LoRA allocation on constrained devices. This section covers GPU memory architecture and usage relevant to deep learning workloads.

*How the paper uses it:* Fed-pilot models GPU memory consumption precisely to optimize LoRA module selection under client memory constraints.

▶ [HetSys Course: Lecture 4: GPU Memory Hierarchy (Spring 2023)](https://www.youtube.com/watch?v=ZQKMZIP3Fzg) — Onur Mutlu Lectures · 3 years ago

### Federated fine-tuning with LoRA
This section focuses on the core method combining federated learning and LoRA for efficient fine-tuning of large models. It covers parameter-efficient fine-tuning techniques and their application in federated settings, directly relating to Fed-pilot's approach.

*How the paper uses it:* Fed-pilot optimizes federated fine-tuning by dynamically allocating LoRA modules per client to handle memory heterogeneity.

▶ [Lec 29 | Parameter Efficient Fine-Tuning (PEFT)](https://www.youtube.com/watch?v=S0l-qUniC54) — NPTEL IIT Delhi · 1 year ago

### Fed-pilot paper talk *(the paper's own talk)*
The authors' own talk on Fed-pilot provides direct insights into their novel framework, design choices, and experimental results. This is the most authoritative source for understanding the paper's contributions and technical nuances.

*How the paper uses it:* Direct presentation by the authors explaining Fed-pilot's optimization and aggregation strategies for federated fine-tuning.

▶ [https://www.youtube.com › watch?v=9OskAARqVeI](https://www.youtube.com/watch?v=9OskAARqVeI) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Fed-pilot, start by grasping the challenges of federated learning with heterogeneous clients, which explains why memory constraints matter. Next, learn about GPU memory modeling to appreciate how memory usage is calculated for deep learning fine-tuning. Then, study knapsack optimization as it is the core mathematical formulation used to select which LoRA modules to train under memory limits. After that, explore aggregation rules for heterogeneous federated updates to understand how Fed-pilot combines diverse client updates effectively. Finally, dive into federated fine-tuning with LoRA, the central technique Fed-pilot optimizes for efficient collaborative training.

### Federated learning with heterogeneous clients *(prerequisite)*
Federated learning involves training models across many devices with different capabilities and data. Understanding client heterogeneity explains why some devices have limited memory and computational power, which impacts how training can be distributed efficiently.

*How the paper uses it:* Fed-pilot addresses the challenge of heterogeneous client memory capacities limiting full model fine-tuning.

▶ [Federated Optimization in Heterogeneous Networks](https://www.youtube.com/watch?v=tiBxiCZ1Fs8) — On-Device Intelligence Workshop · 11:36

### GPU memory modeling for deep learning *(prerequisite)*
GPU memory modeling breaks down how memory is consumed during training, including parameters, optimizer states, activations, and context. This understanding is crucial to manage limited GPU memory effectively when fine-tuning large models.

*How the paper uses it:* Fed-pilot models GPU memory consumption precisely to optimize LoRA module allocation under memory constraints.

▶ [Estimating GPU Memory Consumption of Deep Learning ...](https://www.youtube.com/watch?v=Mg7cUO3N454) — ACM SIGSOFT · 19:45

### Knapsack optimization in machine learning *(prerequisite)*
The knapsack problem is a classic optimization task where you select items with maximum value without exceeding a weight limit. In machine learning, it helps decide which parameters or modules to train given resource constraints.

*How the paper uses it:* Fed-pilot formulates LoRA module selection as a knapsack optimization problem to maximize performance under memory limits.

▶ [1. Introduction, Optimization Problems (MIT 6.0002 Intro to ...](https://www.youtube.com/watch?v=C1lhuz6pZC0) — MIT OpenCourseWare · 40:57

### Aggregation rules for heterogeneous federated updates *(prerequisite)*
Aggregation rules combine updates from diverse clients in federated learning. Handling heterogeneous updates is key to maintaining model quality when clients train different parts or have non-identical data.

*How the paper uses it:* Fed-pilot introduces a compensated aggregation rule to handle uneven updates from heterogeneous LoRA allocations and Non-IID data.

▶ [Lecture 11.3 - Federated Learning Algorithms](https://www.youtube.com/watch?v=9pMQh9djClw) — UCF CRCV · 18:35

### Federated fine-tuning with LoRA
LoRA is a parameter-efficient fine-tuning method that adapts large models by training low-rank modules. Federated fine-tuning with LoRA enables collaborative training while reducing memory and computation costs on client devices.

*How the paper uses it:* Fed-pilot optimizes federated fine-tuning by selecting which LoRA modules each client trains under memory constraints.

▶ [Fine-tuning LLMs with PEFT and LoRA](https://www.youtube.com/watch?v=Us5ZFp16PaU) — Sam Witteveen · 3 years ago

## Already in your library

- [Federated Learning in the Generative AI Era](https://www.youtube.com/watch?v=Puf4lYXus30) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding and application of Fed-pilot's core ideas. The beginner project focuses on implementing a simplified GPU memory model and LoRA module selection as a knapsack problem, illustrating the memory constraint challenge. The intermediate project reimplements Fed-pilot's LoRA allocation optimization and compensated aggregation on a public dataset, comparing against a baseline to validate performance gains. The advanced project extends Fed-pilot by exploring hybrid offloading strategies to support clients with extremely limited memory, addressing a key limitation and future direction of the paper.

### Beginner — Simplified LoRA Module Selection under Memory Constraints
*Effort: a weekend, ~8 hours*

You build a small Python script that models GPU memory consumption components (parameters, optimizer states, activations, CUDA context) for a transformer model's LoRA modules. Then you implement a knapsack optimization to select a subset of LoRA modules to train under a fixed memory budget. The project outputs the selected modules and estimated memory usage.

**Why it shows you understood the paper:** This project demonstrates you understand the core challenge of heterogeneous client memory constraints and how Fed-pilot formulates LoRA allocation as a knapsack problem with memory modeling.

**Grounded in:** Formulated LoRA module selection as a knapsack optimization problem using a novel IG score to quantify each module's contribution to global performance.

**Tech stack:** Python 3.11, NumPy, SciPy (for knapsack optimization)

**Data:** No real dataset needed; you simulate LoRA module sizes and IG scores as numeric inputs based on paper descriptions.

**Build it:**

1. Implement a function to model total GPU memory consumption as sum of parameters, optimizer states, activations, and CUDA context for each LoRA module.
2. Generate synthetic IG scores and memory costs for a set of LoRA modules (e.g., 10 modules).
3. Formulate and solve the knapsack problem to select modules maximizing total IG score under a memory budget.
4. Output the selected modules and total memory usage.
5. Write a README explaining the memory model and knapsack formulation referencing Fed-pilot.

**Ships as:** A Python script with example inputs and outputs, plus a README explaining the memory modeling and knapsack selection aligned with Fed-pilot's approach.

**Stretch goal:** Add a simple visualization of memory usage vs. IG score trade-offs for different memory budgets.

### Intermediate — Reimplementation of Fed-pilot LoRA Allocation and Aggregation
*Effort: 2 weekends, ~20 hours*

You reimplement the core Fed-pilot method: modeling client memory constraints, computing IG scores for LoRA modules, solving the knapsack allocation per client, and applying the compensated aggregation (ComAgg) rule. You run federated fine-tuning experiments on CIFAR-100 (a well-known public dataset substituting the paper's data) under simulated heterogeneous memory and Non-IID data splits. You compare Fed-pilot allocation against a baseline that trains all modules or random subsets, reporting accuracy and convergence metrics.

**Why it shows you understood the paper:** This project proves you can implement Fed-pilot's main contributions end-to-end, including memory-aware LoRA allocation and compensated aggregation, and validate their benefits experimentally.

**Grounded in:** Fed-pilot outperforms baselines by large margins on CIFAR-100 under IID and various Non-IID settings; introduced IG score and compensated aggregation rule.

**Tech stack:** Python 3.11, PyTorch, NumPy, SciPy, scikit-learn

**Data:** CIFAR-100 dataset from torchvision.datasets used as a substitute for the paper's CIFAR-100 experiments.

**Build it:**

1. Implement GPU memory consumption model and IG score computation for LoRA modules based on local data.
2. Implement knapsack optimization to select LoRA modules per client under memory constraints.
3. Simulate federated clients with heterogeneous memory budgets and Non-IID data splits on CIFAR-100.
4. Implement compensated aggregation (ComAgg) to aggregate heterogeneous client updates.
5. Train and evaluate the global model comparing Fed-pilot allocation vs. baseline methods.
6. Plot accuracy and convergence curves; write a report comparing results referencing Fed-pilot.

**Ships as:** A GitHub repo with code to run federated fine-tuning experiments on CIFAR-100, scripts to reproduce results, and a detailed README explaining the implementation and experimental findings.

**Stretch goal:** Add ablation experiments disabling IG score or ComAgg to show their impact.

### Advanced — Hybrid Offloading for Ultra-Low Memory Clients in Fed-pilot
*Effort: 3+ weeks*

You extend Fed-pilot by integrating a hybrid training strategy that supports clients with extremely limited memory unable to train even one LoRA module locally. This involves implementing a lightweight offloading mechanism where parts of the model or optimizer states are offloaded to a server or cloud during training. You adapt the LoRA allocation and aggregation to incorporate these hybrid clients. Experiments on CIFAR-100 or a similar dataset demonstrate participation of ultra-low memory clients and analyze trade-offs in accuracy and communication overhead.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of Fed-pilot, showing deep comprehension of memory constraints and federated training dynamics, and ability to innovate beyond the paper.

**Grounded in:** Fed-pilot requires clients to train at least one LoRA module; clients with extremely low memory may need complementary techniques like offloading or checkpointing.

**Tech stack:** Python 3.11, PyTorch, NumPy, gRPC or REST for offloading communication, Docker (optional for deployment)

**Data:** CIFAR-100 dataset used for federated fine-tuning experiments; simulated ultra-low memory clients.

**Build it:**

1. Review Fed-pilot's LoRA allocation and aggregation implementation from intermediate project.
2. Design and implement an offloading mechanism to transfer parts of model training workload from ultra-low memory clients to a server.
3. Modify client-side LoRA allocation to allow zero local modules with offloading support.
4. Adapt aggregation to handle updates from hybrid clients with partial offloading.
5. Run federated experiments including ultra-low memory clients, measuring accuracy, convergence, and communication costs.
6. Document the design, implementation challenges, and experimental results in a comprehensive README.

**Ships as:** A GitHub repository demonstrating hybrid offloading integrated with Fed-pilot, with code, scripts, and documentation showing feasibility and performance impact.

**Stretch goal:** Explore adaptive hyperparameter tuning for IG score and aggregation compensation in the hybrid setting.
