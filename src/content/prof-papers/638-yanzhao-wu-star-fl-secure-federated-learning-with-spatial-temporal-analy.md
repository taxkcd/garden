---
title: "638 · STAR-FL: Secure Federated Learning with Spatial-Temporal Analysis and Robust Aggregation — Yanzhao Wu"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanzhao-wu"
source_hash: "72102d40ec5eb32ca1e13d6e1081dbee5fe8ed26f5b035877597641737205b46"
sequence: 638
generator: "outreach-garden: managed"
---

# 638 · STAR-FL: Secure Federated Learning with Spatial-Temporal Analysis and Robust Aggregation

## At a glance

- **Professor:** Yanzhao Wu
- **Institution:** Florida International University
- **Paper:** [STAR-FL: Secure Federated Learning with Spatial-Temporal Analysis and Robust Aggregation](https://arxiv.org/pdf/2608.14861)
- **Authors:** Nawrin Tabassum, Yanzhao Wu
- **Year:** 2026

## Paper overview

This paper presents STAR-FL, a defense framework designed to protect federated learning systems from targeted data poisoning attacks, especially backdoor attacks. It uses a combination of spatial and temporal analysis to detect malicious client updates and a robust aggregation method that adjusts the server learning rate to reduce the impact of undetected malicious updates. Experiments on benchmark datasets show that STAR-FL significantly reduces attack success rates while maintaining high accuracy.

### Why it matters

**Research problem:** Federated Learning (FL) systems are vulnerable to targeted poisoning attacks where malicious clients send poisoned model updates to implant backdoors, causing the global model to misclassify specific inputs without degrading overall accuracy. Existing defenses struggle to accurately distinguish malicious updates from benign ones and to mitigate the influence of poisoned updates during aggregation without harming model performance.

**Why it matters:** FL is widely used for privacy-preserving distributed training, but poisoning attacks threaten both the privacy and integrity of the learned models. Targeted attacks are particularly stealthy and damaging, making robust defenses critical for real-world FL deployments in sensitive applications like medical data analysis and computer vision.

**Key contributions:**

- Proposed STAR-FL, a unified defense framework combining spatial-temporal analysis with robust aggregation to secure FL against backdoor attacks.
- Developed a spatial-temporal clustering mechanism to detect malicious client updates by analyzing gradient similarities and temporal consistency.
- Introduced an adaptive server learning rate adjustment during aggregation to mitigate the impact of undetected poisoned updates.
- Conducted extensive experiments on multiple benchmark datasets (FMNIST, CIFAR-10, CIFAR-100) and attack scenarios demonstrating superior robustness and accuracy.
- Provided ablation studies showing the complementary benefits of spatial, temporal filtering, and robust aggregation.

## About the professor

**Yanzhao Wu** — Assistant Professor, Knight Foundation School of Computing and Information Sciences, Florida International University.

Research interests: machine learning and computing systems, including machine learning algorithm and system optimizations, deep learning, large language models (LLMs), edge AI, big data analytics and their real-world applications

### Research links

- [Faculty/profile page](https://yanzhaowu.me)
- [Google Scholar](https://scholar.google.com/citations?user=ZANfMywAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Robust Federated Learning
**The paper assumes:** federated learning fundamentals, adversarial machine learning, distributed optimization, and secure aggregation methods
**Already in this field?** Skip this entirely if you already understand federated learning architectures, common poisoning attacks, and defense strategies in distributed machine learning.

To understand the STAR-FL paper on secure federated learning with spatial-temporal analysis and robust aggregation, it is essential to grasp the fundamentals of federated learning, its vulnerabilities to poisoning attacks, and defense mechanisms. The rigorous course option provides a deep, structured university-level lecture series on federated learning, ideal for a thorough technical foundation. The fast track offers a concise, practical tutorial series focused on federated AI simulations, suitable for quickly gaining applied knowledge of federated learning workflows and aggregation strategies.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Federated AI Simulations with Flower (2025 Tutorial)](https://www.youtube.com/playlist?list=PLNG4feLHqCWkdlSrEL2xbCtGa6QBxlUZb) — Flower · 9 videos · 3.4h across 9 episodes

**Watch only this:** Episodes 1-4 ("Introduction" through "Defining Strategy Callbacks"), about 1.5 hours — these cover the basics of federated AI simulation setup, client updates, and aggregation strategy design relevant to STAR-FL's approach.

*Why it unblocks this paper:* This 2025 tutorial series on federated AI simulations with Flower provides a practical, implementation-focused introduction to federated learning, client-server interactions, and aggregation strategies, giving quick insight into how federated learning systems operate and can be defended.

*If you want all of it:* 3.4 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the STAR-FL paper, start by building foundational knowledge on federated learning security and the nature of backdoor attacks in federated learning, as these provide the threat context and challenges STAR-FL addresses. Next, study robust aggregation methods to grasp how malicious updates can be mitigated during model aggregation. Then, explore spatial-temporal analysis techniques relevant to anomaly detection, which underpin STAR-FL's detection mechanism. Finally, focus on advanced federated learning talks that cover scalable and secure FL systems to contextualize STAR-FL's contributions within state-of-the-art research.

### Federated learning security *(prerequisite)*
This section covers the security challenges and threat models inherent in federated learning systems, including poisoning and backdoor attacks. Understanding these challenges is critical to appreciate the motivation behind STAR-FL's defense mechanisms.

*How the paper uses it:* STAR-FL addresses vulnerabilities in FL systems to targeted poisoning attacks, making foundational knowledge of FL security essential.

▶ [2021-06-09 CERIAS - Secure Federated Learning](https://www.youtube.com/watch?v=LP4uqW18yA0) — Purdue CERIAS · 1:04:20 · 5y ago

### Backdoor attacks federated learning *(prerequisite)*
Learn about how targeted poisoning attacks implant stealthy backdoors in federated learning models, the attack vectors, and their impact on model integrity. This knowledge is crucial to understand the specific threat STAR-FL defends against.

*How the paper uses it:* STAR-FL specifically defends against backdoor attacks in federated learning, so understanding these attacks is foundational.

▶ [FLOW Seminar #19: Chulin Xie (UIUC) DBA: Distributed Backdoor Attacks Against Federated Learning](https://www.youtube.com/watch?v=dB0ur56Xfak) — Federated Learning One World Seminar · 37:42 · 6y ago

### Robust aggregation methods FL *(prerequisite)*
Study aggregation techniques designed to mitigate the influence of malicious client updates during federated learning. This provides insight into the robust aggregation component of STAR-FL that dynamically adjusts learning rates to suppress undetected malicious updates.

*How the paper uses it:* STAR-FL incorporates a robust aggregation method to reduce the impact of malicious updates during model aggregation.

▶ [FLOW Seminar #11: Krishna Pillutla (Washington) Robust Aggregation for Federated Learning](https://www.youtube.com/watch?v=-wNV8pbMNQk) — Federated Learning One World Seminar · 56:30 · 6y ago

### Spatial-temporal analysis machine learning
Explore combined spatial and temporal data analysis methods used to detect anomalies and inconsistencies in data streams. This knowledge supports understanding STAR-FL's novel spatial-temporal clustering mechanism for detecting malicious client updates.

*How the paper uses it:* STAR-FL uses spatial-temporal analysis to detect malicious updates by analyzing gradient similarities and temporal consistency.

▶ [Spatial-Temporal Modelling for Visual Computing](https://www.youtube.com/watch?v=jrd6D_VdioE) — Hubert P. H. Shum · 38:05

### STAR-FL paper talk *(paper-talk search result; attribution unverified)*
Engage with advanced talks on federated learning that discuss scalability, security, and robustness to contextualize STAR-FL's contributions within the broader research landscape. Although no direct STAR-FL author talk is available, these talks provide deep insights into state-of-the-art FL defenses and system optimizations.

*How the paper uses it:* These talks provide advanced context on federated learning security and robustness, complementing the understanding of STAR-FL's defense framework.

▶ [RoFL: Robustness of Secure Federated Learning](https://www.youtube.com/watch?v=Xi3fYGRgaBY) — IEEE Symposium on Security and Privacy · 15:05 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces federated learning and its security challenges, focusing on backdoor attacks and robust aggregation methods to defend against them. It starts with foundational concepts of federated learning and its vulnerabilities, then explains targeted backdoor attacks, followed by robust aggregation techniques to mitigate malicious updates. Finally, it covers the core paper concept of spatial-temporal analysis used in STAR-FL to detect and defend against poisoning attacks.

### Federated learning security *(prerequisite)*
Learn what federated learning is and why it faces unique security challenges, including how malicious clients can poison the training process. This foundation is essential to understand the threats STAR-FL defends against.

*How the paper uses it:* STAR-FL addresses security vulnerabilities in federated learning systems, making this foundational knowledge critical.

▶ [An Introduction to Federated Learning & its Applications in Cybersecurity Domain by Xichen Zhang](https://www.youtube.com/watch?v=0AY5neOM2Zo) — Canadian Institute for Cybersecurity (CIC) · 27:33 · 4y ago

### Backdoor attacks federated learning *(prerequisite)*
Understand how attackers implant stealthy backdoors in federated learning models by sending poisoned updates that cause targeted misclassifications without degrading overall accuracy. This explains the specific threat STAR-FL aims to mitigate.

*How the paper uses it:* STAR-FL is designed to detect and defend against backdoor attacks in federated learning.

▶ [FLOW Seminar #19: Chulin Xie (UIUC) DBA: Distributed Backdoor Attacks Against Federated Learning](https://www.youtube.com/watch?v=dB0ur56Xfak) — Federated Learning One World Seminar · 37:42 · 6y ago

### Robust aggregation methods FL *(prerequisite)*
Explore aggregation techniques that reduce the influence of malicious client updates during federated learning model aggregation, helping maintain model integrity despite attacks.

*How the paper uses it:* STAR-FL uses robust aggregation with adaptive learning rate adjustments to mitigate undetected malicious updates.

▶ [FLOW Seminar #11: Krishna Pillutla (Washington) Robust Aggregation for Federated Learning](https://www.youtube.com/watch?v=-wNV8pbMNQk) — Federated Learning One World Seminar · 56:30 · 6y ago

### Spatial-temporal analysis machine learning
Gain intuition on combining spatial and temporal data analysis methods to detect anomalies and inconsistencies over time and across data dimensions, a key technique in STAR-FL's detection mechanism.

*How the paper uses it:* STAR-FL integrates spatial-temporal clustering to identify malicious client updates based on gradient similarity and temporal consistency.

▶ [Spatial-Temporal Modelling for Visual Computing](https://www.youtube.com/watch?v=jrd6D_VdioE) — Hubert P. H. Shum · 38:05

### STAR-FL paper talk
Watch a detailed presentation on federated learning at scale, including security challenges and defenses, to contextualize STAR-FL's contributions within the broader FL research landscape.

*How the paper uses it:* Provides deep insights into federated learning systems and defenses, complementing STAR-FL's approach.

▶ [“Federated Learning at Scale” Prof. Mike Rabbat, Meta AI](https://www.youtube.com/watch?v=j5e7bZLTMH0) — Center for Intelligent Systems CIS EPFL · 1:21:55 · 4y ago

## Already in your library

- [Federated Learning in the Generative AI Era](https://www.youtube.com/watch?v=Puf4lYXus30) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Neural Cleanse: Identifying and Mitigating Backdoor Attacks in ...](https://www.youtube.com/watch?v=krVLXbGdlEg) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [April 16 Visitor Talk: Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=uoYEWZY16Uc) — also for: CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms (Lei Jiang)
- [Secure Model Aggregation in Federated Learning](https://www.youtube.com/watch?v=rwzLSNMpm8U) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)
- [The basics of spatio-temporal graph neural networks](https://www.youtube.com/watch?v=RRMU8kJH60Q) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and implement key aspects of STAR-FL, a defense framework for federated learning against backdoor attacks. Starting from a focused implementation of spatial clustering on client updates, you advance to reimplementing the full spatial-temporal detection and robust aggregation pipeline on a benchmark dataset. Finally, you extend STAR-FL by exploring adaptive parameter tuning to balance robustness and accuracy dynamically, addressing a stated future direction of the paper.

### Beginner — Spatial Clustering for Malicious Update Detection
*Effort: a weekend, ~8 hours*

You build a simplified spatial analysis module that applies PCA and clustering on simulated federated learning client updates to separate malicious from benign updates. This project focuses on implementing the spatial clustering mechanism described in STAR-FL to detect anomalous gradient patterns.

**Why it shows you understood the paper:** This project demonstrates your grasp of the spatial analysis component of STAR-FL and how gradient similarity patterns can be used to identify malicious clients, a core contribution of the paper.

**Grounded in:** Proposed STAR-FL, a unified defense framework combining spatial-temporal analysis with robust aggregation to secure FL against backdoor attacks.

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, jupyter notebook

**Data:** Simulated federated learning client updates generated by adding noise and crafted anomalies to mimic malicious updates, as no authors' dataset or code is available.

**Build it:**

1. Simulate gradient updates for multiple clients with some containing injected anomalies to represent malicious updates.
2. Apply PCA to reduce the dimensionality of the final layer gradients.
3. Perform clustering (e.g., KMeans or DBSCAN) on the PCA-transformed gradients to separate clusters.
4. Visualize clusters and identify which clusters correspond to malicious updates.
5. Evaluate detection accuracy by comparing cluster assignments to ground truth labels.

**Ships as:** A Jupyter notebook demonstrating spatial clustering on simulated client updates with visualizations and detection accuracy metrics.

**Stretch goal:** Add a simple baseline comparison using raw gradients without PCA to show the benefit of dimensionality reduction.

### Intermediate — Reimplementing STAR-FL on FMNIST Dataset
*Effort: 2-3 weekends, ~20 hours*

You implement the full STAR-FL defense pipeline including spatial-temporal clustering and robust aggregation on the Fashion-MNIST dataset used in the paper. You compare STAR-FL's attack success rate and accuracy against a baseline FedAvg aggregation under a backdoor poisoning attack.

**Why it shows you understood the paper:** This project shows you can reproduce the core method of STAR-FL from the paper's description, apply it to a real benchmark dataset, and evaluate its effectiveness against backdoor attacks, demonstrating deep comprehension of the defense framework.

**Grounded in:** Conducted extensive experiments on multiple benchmark datasets (FMNIST, CIFAR-10, CIFAR-100) and attack scenarios demonstrating superior robustness and accuracy.

**Tech stack:** Python 3.11, PyTorch, numpy, scikit-learn, matplotlib

**Data:** Fashion-MNIST dataset, a publicly available benchmark dataset used as a substitute for the paper's FMNIST experiments.

**Build it:**

1. Implement a federated learning simulation with multiple clients training a CNN on Fashion-MNIST.
2. Implement a backdoor poisoning attack where malicious clients inject triggers into their local data.
3. Implement STAR-FL's spatial analysis: PCA and clustering on final layer gradients to detect malicious updates.
4. Implement temporal analysis: track historical client updates and detect inconsistencies using cosine similarity and kernel density estimation.
5. Combine spatial and temporal filtering to exclude detected malicious updates.
6. Implement robust aggregation with adaptive server learning rate adjustment per parameter dimension.
7. Evaluate and compare attack success rate and main task accuracy against FedAvg baseline.

**Ships as:** A GitHub repository with code to run STAR-FL defense on Fashion-MNIST, including scripts, evaluation metrics, and a README explaining results.

**Stretch goal:** Add ablation studies to evaluate the impact of spatial filtering, temporal filtering, and robust aggregation separately.

### Advanced — Adaptive Parameter Tuning for STAR-FL under Non-IID Data
*Effort: 3+ weeks, ~60 hours*

You extend STAR-FL by implementing an adaptive parameter tuning mechanism for the robust aggregation component to dynamically balance robustness and accuracy during training on non-IID Fashion-MNIST or CIFAR-10 data. You evaluate how this adaptive tuning mitigates accuracy degradation and maintains low attack success rates, addressing a key limitation and future direction of the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to critically engage with the paper's limitations and future work by improving STAR-FL's adaptability to heterogeneous data and complex scenarios, a genuine research extension.

**Grounded in:** Exploring adaptive parameter tuning for the robust aggregation component to optimize trade-offs between accuracy and robustness per dataset.

**Tech stack:** Python 3.11, PyTorch, numpy, scikit-learn, matplotlib

**Data:** Fashion-MNIST or CIFAR-10 dataset with simulated non-IID client data partitions to replicate heterogeneous federated learning settings.

**Build it:**

1. Reimplement STAR-FL defense pipeline as baseline on chosen dataset with non-IID client data partitions.
2. Design and implement an adaptive tuning algorithm that adjusts server learning rate parameters dynamically based on observed update consistency and model accuracy metrics.
3. Integrate the adaptive tuning into the robust aggregation step of STAR-FL.
4. Run experiments comparing static vs adaptive parameter tuning under varying proportions of malicious clients and non-IID data.
5. Analyze trade-offs in attack success rate and main task accuracy, documenting improvements and limitations.
6. Prepare a detailed report and README explaining the adaptive tuning approach, experimental setup, and results.

**Ships as:** A GitHub repository with code implementing adaptive parameter tuning for STAR-FL, experimental results, and a comprehensive README discussing findings and implications.

**Stretch goal:** Extend the adaptive tuning to incorporate client-side defenses or privacy-preserving mechanisms to complement server-side robustness.

_The paper's authors have not released code or datasets; all projects require reimplementation and simulation of federated learning data and attacks based on the paper's descriptions._
