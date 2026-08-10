---
title: "304 · FedHFT: Efficient Federated Fine-tuning with Heterogeneous Edge Clients — Calton Pu"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-calton-pu"
source_hash: "f39e3c6acda6f65cc3577abb014985bf6324cbfb3a6408df99ca167b7342bb7a"
sequence: 304
generator: "outreach-garden: managed"
---

# 304 · FedHFT: Efficient Federated Fine-tuning with Heterogeneous Edge Clients

## At a glance

- **Professor:** Calton Pu
- **Institution:** Georgia Institute of Technology
- **Paper:** [FedHFT: Efficient Federated Fine-tuning with Heterogeneous Edge Clients](https://arxiv.org/abs/2510.14054)
- **Authors:** Fatih Ilhan, Selim Furkan Tekin, Tiansheng Huang, Gaowen Liu, Ramana Kompella, Greg Eisenhauer, Yingyan Celine Lin, Calton Pu, Ling Liu
- **Year:** 2025

## Paper overview

This paper presents FedHFT, a new federated fine-tuning framework designed to efficiently personalize large language models across many edge devices with different data and resource capabilities. It uses a mixture of masked adapters and client clustering to reduce memory and communication costs while improving performance on natural language tasks, even when clients have very different data distributions and hardware resources.

### Why it matters

**Research problem:** How to efficiently fine-tune large pre-trained language models collaboratively across heterogeneous edge clients that have varying data distributions (non-iid) and limited, diverse computational resources, while preserving data privacy.

**Why it matters:** Fine-tuning large language models locally on edge devices is challenging due to limited memory, computation, and privacy concerns. Federated learning can help but existing methods struggle with heterogeneous data and resource constraints, limiting practical deployment and personalization of language models on edge devices.

**Key contributions:**

- Proposed a mixture of masked adapters to handle resource heterogeneity and reduce memory/communication costs in federated fine-tuning.
- Introduced a bi-level optimization with client clustering via Gaussian Mixture Models to address non-iid data distributions.
- Developed a masking technique using Fisher information to communicate only important adapter weight dimensions, improving personalization and efficiency.
- Extensive experiments on nine datasets and multiple large language models (BERT, T5) demonstrating superior or competitive performance with significant reductions in memory and communication costs.
- Provided analysis of FedHFT under varying data heterogeneity, resource heterogeneity, and client availability scenarios.

## About the professor

**Calton Pu** — Professor and John P. Imlay, Jr. Chair in Software, College of Computing, Georgia Institute of Technology.

Research interests: service computing, distributed and cloud computing, and dynamic analytics on changing big data

### Research links

- [Faculty/profile page](http://www.cc.gatech.edu/~calton)
- [Resolved homepage](https://faculty.cc.gatech.edu/~calton/)
- [Lab website](http://www.cercs.gatech.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=Vbv-JEwAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/p/CaltonPu.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Federated Learning and Personalization
**The paper assumes:** federated learning fundamentals, personalization in distributed ML, non-iid data challenges, parameter-efficient fine-tuning
**Already in this field?** Skip this entirely if you already understand federated learning concepts, client heterogeneity, and adapter-based model fine-tuning.

To understand the FedHFT paper, a solid grasp of federated learning fundamentals, personalization techniques, and handling of heterogeneous clients is essential. The rigorous course offers a deep dive into distributed optimization and federated learning algorithms, while the fast track provides a practical, hands-on tutorial on federated AI simulations using Flower, ideal for quickly grasping implementation and core concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2024 - Distributed Optimization and Machine Learning](https://www.youtube.com/playlist?list=PLOzRYVm0a65fhKDS8cYIC7YCuVGJ4FOJx) — NPTEL IIT Bombay · 48 videos · 23.8h across 48 episodes

**Watch only this:** Watch Week 11: Lectures 42 (Introduction to Federated Learning), 43 (FedAvg Algorithm), 44 (Convergence Analysis of FL), and Week 12: Lectures 45 (Sources of Computational Heterogeneity in FL), 46 (Objective Inconsistency Problem), and 47 (General Update Rule), about 3 hours total — these cover core federated learning concepts, heterogeneity, and optimization relevant to FedHFT.

*Why it unblocks this paper:* This NPTEL IIT Bombay course covers federated learning fundamentals, including client heterogeneity, federated averaging, convergence, and optimization algorithms, directly relevant to understanding FedHFT's approach to heterogeneous edge clients and clustering.

*If you want all of it:* 23.8 hours across 48 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Federated AI Simulations with Flower (2025 Tutorial)](https://www.youtube.com/playlist?list=PLNG4feLHqCWkdlSrEL2xbCtGa6QBxlUZb) — Flower · 9 videos · 3.4h across 9 episodes

**Watch only this:** Watch episodes 1 to 5 (Introduction, Launching Your First Simulation, Understanding Flower Apps, Defining Strategy Callbacks, Sending ClientApp Metrics), about 1.8 hours total — this subset covers the essentials of federated learning simulation and client-server interaction.

*Why it unblocks this paper:* The Flower 2025 tutorial series provides a concise, practical introduction to federated AI simulations, covering environment setup, client creation, aggregation strategies, and scaling, which helps quickly understand federated learning workflows and personalization strategies relevant to FedHFT.

*If you want all of it:* 3.4 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand FedHFT, start by building foundational knowledge on federated learning with heterogeneous clients, Gaussian Mixture Models for clustering, Fisher information for parameter importance, and parameter-efficient fine-tuning of large language models. These prerequisites provide the theoretical and methodological background necessary to grasp the novel contributions of FedHFT. Finally, focus on the core concept of federated fine-tuning with adapters, which is central to the paper's approach.

### Federated learning with heterogeneous clients *(prerequisite)*
This section covers the challenges and optimization algorithms designed for federated learning environments where clients have non-iid data and diverse resource constraints. Understanding these issues is crucial because FedHFT specifically addresses data and resource heterogeneity in federated fine-tuning.

*How the paper uses it:* FedHFT tackles the problem of heterogeneous data distributions and resource constraints in federated learning.

▶ [ML Seminar - Optimization Algorithms for Heterogeneous Clients in Federated Learning](https://www.youtube.com/watch?v=HflhKCZ7Qbs) — Wireless Networking and Communications Group · 5 years ago

### Gaussian Mixture Models clustering *(prerequisite)*
Gaussian Mixture Models (GMMs) are a key technique for soft clustering used in FedHFT to group clients based on their adapter updates. This clustering helps handle non-iid data distributions by allowing personalized adapter updates per cluster.

*How the paper uses it:* FedHFT uses GMM-based client clustering to address data heterogeneity in federated fine-tuning.

▶ [Clustering: Gaussian Mixture Models (12c)](https://www.youtube.com/watch?v=0NMC2NfJGqo) — Jordan Boyd-Graber · 7:25

### Fisher information for parameter importance *(prerequisite)*
Fisher information quantifies the importance of model parameters with respect to the output, enabling efficient communication by masking less important parameters. This concept is foundational to FedHFT's masking technique that reduces communication costs while preserving personalization.

*How the paper uses it:* FedHFT applies Fisher information to mask adapter updates and communicate only important parameters.

▶ [What is Fisher Information? ("The best tutorial on Fisher information")](https://www.youtube.com/watch?v=82molmnRCg0) — Iain Explains Signals, Systems, and Digital Comms · 19:24 · 4 years ago

### Parameter-efficient fine-tuning of large language models *(prerequisite)*
Parameter-efficient fine-tuning methods like adapters and LoRA enable fine-tuning large language models on resource-constrained devices by updating only a small subset of parameters. This foundational knowledge is essential to understand how FedHFT achieves memory and communication efficiency.

*How the paper uses it:* FedHFT leverages parameter-efficient adapters to enable federated fine-tuning on heterogeneous edge clients.

▶ [10: Generative AI – Adapting LLMs with Parameter-Efficient Fine-Tuning](https://www.youtube.com/watch?v=d-tngNnaG4U) — MIT OpenCourseWare · 7 months ago

### Federated fine-tuning with adapters
This section focuses on the core method of combining federated learning with parameter-efficient adapters to reduce memory and communication costs during fine-tuning. It directly relates to FedHFT's main technical contributions and experimental validation.

*How the paper uses it:* FedHFT's central innovation is a federated fine-tuning framework using a mixture of masked adapters and client clustering.

▶ [HeLoRA: LoRA-heterogeneous Federated Fine-tuning for Foundation Models](https://www.youtube.com/watch?v=UMJuiKG1mBI) — Flower · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand FedHFT, start by learning the basics of federated learning and the challenges posed by heterogeneous clients, which is crucial for grasping why FedHFT is needed. Then, build intuition on Gaussian Mixture Models for client clustering and Fisher information for parameter importance, both key techniques used in FedHFT. Finally, explore parameter-efficient fine-tuning and federated fine-tuning with adapters to understand how FedHFT efficiently personalizes large language models on edge devices.

### Federated learning with heterogeneous clients *(prerequisite)*
Federated learning enables multiple devices to collaboratively train a model without sharing raw data, but client data and resources often vary widely, causing challenges in fairness and efficiency. Understanding these heterogeneity issues is essential to appreciate FedHFT's approach to personalized and efficient fine-tuning.

*How the paper uses it:* FedHFT addresses the challenges of data and resource heterogeneity in federated fine-tuning across edge clients.

▶ [AI4OPT Seminar Series: Optimization Algorithms for ...](https://www.youtube.com/watch?v=3w5H91L3JHY) — AI4OPT - AI Institute for Advances in Optimization · 1:00:49

### Gaussian Mixture Models clustering *(prerequisite)*
Gaussian Mixture Models (GMM) are a probabilistic clustering method that models data as a mixture of multiple Gaussian distributions, allowing soft assignment of data points to clusters. This helps group clients with similar update patterns, improving personalization in federated learning.

*How the paper uses it:* FedHFT uses GMM to cluster clients based on their adapter updates to handle non-iid data distributions.

▶ [Clustering: Gaussian Mixture Models (12c)](https://www.youtube.com/watch?v=0NMC2NfJGqo) — Jordan Boyd-Graber · 7:25

### Fisher information for parameter importance *(prerequisite)*
Fisher information measures how much each parameter influences the model's output, helping identify which parameters are most important. Masking updates based on Fisher information allows efficient communication by focusing only on critical parameters.

*How the paper uses it:* FedHFT applies Fisher information to mask adapter updates, communicating only important parameters to reduce costs and improve personalization.

▶ [Fisher information explained in 5 minutes](https://www.youtube.com/watch?v=f_wU0LeNUvE) — StatLect official YouTube channel · 5:24 · 4 years ago

### Parameter-efficient fine-tuning of large language models *(prerequisite)*
Parameter-efficient fine-tuning techniques, like adapters, enable updating only a small subset of model parameters, making it feasible to fine-tune large language models on devices with limited resources. This is foundational for FedHFT's approach to edge device personalization.

*How the paper uses it:* FedHFT leverages parameter-efficient fine-tuning with masked adapters to reduce memory and computation costs on heterogeneous clients.

▶ [LLM (Parameter Efficient) Fine Tuning - Explained!](https://www.youtube.com/watch?v=HcVtpLAGMXo) — CodeEmporium · 1 year ago

### Federated fine-tuning with adapters
Federated fine-tuning with adapters combines federated learning and parameter-efficient fine-tuning by training small adapter modules locally and aggregating them centrally, reducing communication and computation overhead. This method is central to FedHFT's design.

*How the paper uses it:* FedHFT introduces a mixture of masked adapters in federated fine-tuning to efficiently personalize large language models across edge clients.

▶ [HeLoRA: LoRA-heterogeneous Federated Fine-tuning for Foundation Models](https://www.youtube.com/watch?v=UMJuiKG1mBI) — Flower · 1 year ago

## Already in your library

- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [LLM Fine Tuning Crash Course | LLM Fine Tuning Tutorial](https://www.youtube.com/watch?v=IIvORO248Zs) — also for: LabSafety Bench: Benchmarking LLMs on Safety Issues in Scientific Labs (Xiangliang Zhang)
- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Fine-tuning LLMs with PEFT and LoRA](https://www.youtube.com/watch?v=Us5ZFp16PaU) — also for: Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients (Rui Hu)
- [Lec 29 | Parameter Efficient Fine-Tuning (PEFT)](https://www.youtube.com/watch?v=S0l-qUniC54) — also for: Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients (Rui Hu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of FedHFT's approach to efficient federated fine-tuning with heterogeneous edge clients. The beginner project focuses on implementing and visualizing the Fisher information-based masking mechanism on adapter weights, a core efficiency technique. The intermediate project reimplements the core FedHFT method of federated fine-tuning with masked adapters and client clustering on a smaller public NLP dataset, comparing it to a simple baseline. The advanced project extends FedHFT by exploring dynamic client clustering during training, addressing a stated limitation and future direction of the paper.

### Beginner — Fisher Information Masking Visualization for Adapter Weights
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates adapter weight updates and computes Fisher information scores to identify important parameters. You implement the masking technique from FedHFT that selects top important dimensions and visualize the sparsity pattern and communication savings. This project isolates and demonstrates the masking mechanism without full federated training.

**Why it shows you understood the paper:** This project shows you grasp the key idea of using Fisher information to reduce communication by masking adapter updates, a central contribution of FedHFT. A professor would see you understand how parameter importance is quantified and applied practically.

**Grounded in:** Masking technique using Fisher information to communicate only important adapter weight dimensions, improving personalization and efficiency.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated adapter weight updates generated in the notebook; no external dataset required.

**Build it:**

1. Implement a function to simulate adapter weight updates as random vectors.
2. Compute Fisher information scores for each adapter weight dimension based on simulated gradients.
3. Implement a masking function that selects top-k important dimensions according to Fisher scores.
4. Visualize the masked vs unmasked adapter weights and compute communication cost reduction.
5. Write a README explaining the masking concept and how it relates to FedHFT.

**Ships as:** A Jupyter notebook demonstrating Fisher information-based masking with visualizations and a README linking the implementation to FedHFT's masking contribution.

**Stretch goal:** Add a simple experiment showing how masking affects model output sensitivity using a toy NLP model.

### Intermediate — Federated Fine-tuning with Masked Adapters and Client Clustering
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of FedHFT's federated fine-tuning framework using masked low-rank adapters and client clustering via Gaussian Mixture Models. You run experiments on a public natural language understanding dataset (e.g., SST-2 from GLUE) simulating heterogeneous clients with non-iid splits. You compare FedHFT-style masked adapter fine-tuning with a baseline federated fine-tuning method without masking or clustering, reporting accuracy and communication cost metrics.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core FedHFT method from the paper's description, including adapter masking and client clustering to handle data heterogeneity and resource constraints. A professor would see you understand the federated optimization and personalization mechanisms and can evaluate their impact.

**Grounded in:** Proposed a mixture of masked adapters and client clustering via Gaussian Mixture Models to handle resource and data heterogeneity, achieving significant memory and communication cost reductions.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Jupyter Notebook

**Data:** SST-2 dataset from the GLUE benchmark, publicly available and suitable for simulating federated NLP tasks.

**Build it:**

1. Prepare SST-2 dataset splits to simulate heterogeneous clients with non-iid data distributions.
2. Implement low-rank adapter modules for a pretrained BERT-base model and integrate masking based on Fisher information.
3. Implement client clustering using Gaussian Mixture Models on adapter updates after PCA dimension reduction.
4. Simulate federated fine-tuning rounds with masked adapters and client clustering, aggregating updates on a central server.
5. Implement a baseline federated fine-tuning without masking or clustering for comparison.
6. Evaluate and report accuracy and communication cost metrics for both methods.

**Ships as:** A GitHub repo with code to run federated fine-tuning experiments on SST-2, scripts to reproduce results, and a README explaining the implementation and comparison to baseline.

**Stretch goal:** Add ablation studies to isolate the effect of masking and clustering components on performance and cost.

### Advanced — Dynamic Client Clustering for Scalable FedHFT
*Effort: 3+ weeks*

You extend the FedHFT framework by implementing dynamic adjustment of the number of client clusters during federated fine-tuning, addressing a limitation noted in the paper. You design and evaluate strategies for cluster number selection (e.g., Bayesian Information Criterion or silhouette scores) during training. You test scalability and personalization impact on simulated heterogeneous clients with varying availability and adapter ranks, analyzing trade-offs in server computation and model performance.

**Why it shows you understood the paper:** This project tackles a key open problem from the paper, showing you can critically engage with FedHFT's limitations and propose practical extensions. A professor would recognize your ability to innovate on federated learning frameworks and handle real-world deployment challenges.

**Grounded in:** Number of clusters is fixed in experiments; dynamic adjustment is possible but not fully explored (limitation and future direction).

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Jupyter Notebook

**Data:** Simulated federated NLP data splits based on SST-2 or similar public dataset, with client heterogeneity and availability modeled.

**Build it:**

1. Reimplement or reuse the intermediate FedHFT federated fine-tuning framework with masked adapters and fixed client clustering.
2. Implement methods to dynamically determine and adjust the number of clusters during training using metrics like BIC or silhouette score.
3. Modify the central server aggregation and clustering logic to support cluster number changes and adapter weight management.
4. Simulate federated training with dynamic clustering on heterogeneous clients with varying adapter ranks and availability.
5. Evaluate model performance, communication cost, and server computation overhead compared to fixed clustering.
6. Document findings, limitations, and potential improvements in a detailed README.

**Ships as:** A GitHub repository with code and scripts demonstrating dynamic client clustering in FedHFT, experimental results, and analysis in the README.

**Stretch goal:** Explore privacy-preserving clustering methods or extend to other model architectures beyond BERT.
