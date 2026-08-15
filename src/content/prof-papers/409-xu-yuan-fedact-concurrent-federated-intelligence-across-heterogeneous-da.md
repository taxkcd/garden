---
title: "409 · FedACT: Concurrent Federated Intelligence across Heterogeneous Data Sources — Xu Yuan"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xu-yuan"
source_hash: "dcba43d7e780bb3e8eee293ec1befbd515a9a36d7b7fd48cf6f9c02331fd324f"
sequence: 409
generator: "outreach-garden: managed"
---

# 409 · FedACT: Concurrent Federated Intelligence across Heterogeneous Data Sources

## At a glance

- **Professor:** Xu Yuan
- **Institution:** University of Delaware
- **Paper:** [FedACT: Concurrent Federated Intelligence across Heterogeneous Data Sources](https://arxiv.org/pdf/2605.00011)
- **Authors:** Md Sirajul Islam, Isabelle G Chapman, N I Md Ashafuddula, Xu Yuan, Li Chen, Nian-Feng Tzeng, Klara Nahrstedt
- **Year:** 2026

## Paper overview

This paper presents FedACT, a novel scheduling method for federated learning systems where multiple machine learning tasks are trained simultaneously across many devices with different capabilities and data. FedACT dynamically assigns devices to tasks based on how well device resources match task requirements and ensures fair participation of devices. Experiments show FedACT significantly speeds up training and improves model accuracy compared to existing methods.

### Why it matters

**Research problem:** How to efficiently schedule heterogeneous devices to concurrently train multiple federated learning jobs, considering device resource heterogeneity and data distribution differences, to minimize job completion time and improve model accuracy.

**Why it matters:** Real-world federated learning applications often require multiple models to be trained simultaneously on decentralized devices with varying resources and data distributions. Existing single-job FL scheduling methods are suboptimal for multi-job scenarios, leading to inefficient resource use, longer training times, and lower model accuracy.

**Key contributions:**

- Proposed FedACT, a resource heterogeneity-aware device scheduling approach for multi-job federated learning.
- Developed an alignment scoring mechanism combining resource alignment and participation fairness.
- Formulated an optimal scheduling plan prioritizing devices with higher alignment scores while ensuring fair participation.
- Conducted extensive experiments on five benchmark datasets and multiple models under IID and Non-IID settings.
- Demonstrated significant improvements in job completion time and model accuracy compared to state-of-the-art baselines.

## About the professor

**Xu Yuan** — Associate Professor, Department of Computer and Information Sciences, University of Delaware.

Research interests: AI and machine learning for interdisciplinary applications (e.g., oceanography, geoscience, biomedicine, agriculture, meteorology, etc.), security and privacy, data science

### Research links

- [Faculty/profile page](https://yuanxuyx.github.io/index.html)
- [Resolved homepage](https://computing.louisiana.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Federated Learning
**The paper assumes:** federated learning fundamentals, distributed machine learning, device scheduling in FL, IID and Non-IID data distributions
**Already in this field?** Skip this entirely if you already understand the principles and challenges of federated learning, including device heterogeneity and multi-task training.

To understand the FedACT paper on concurrent federated learning across heterogeneous devices, foundational knowledge of federated learning principles, device scheduling, and handling data heterogeneity is essential. The rigorous course option offers a deep dive into distributed optimization and machine learning, providing theoretical and practical insights relevant to the paper's scheduling and resource alignment mechanisms. The fast track is a concise tutorial series focused specifically on federated AI simulations, ideal for quickly grasping core concepts and practical federated learning workflows without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2024 - Distributed Optimization and Machine Learning](https://www.youtube.com/playlist?list=PLOzRYVm0a65fhKDS8cYIC7YCuVGJ4FOJx) — NPTEL IIT Bombay · 48 videos

**Watch only this:** Lectures 1-12, approximately 6 hours — covering introduction to distributed optimization, federated learning basics, resource heterogeneity, and scheduling algorithms, which form the theoretical basis for FedACT's approach.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Distributed Optimization and Machine Learning covers foundational and advanced topics in distributed learning systems, directly relevant to federated learning scheduling and optimization challenges addressed by FedACT.

*If you want all of it:* All 48 lectures, approximately 24 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Federated AI Simulations with Flower (2025 Tutorial)](https://www.youtube.com/playlist?list=PLNG4feLHqCWkdlSrEL2xbCtGa6QBxlUZb) — Flower · 9 videos

**Watch only this:** Episodes 1-4, about 2 hours — covering federated learning basics, device simulation, scheduling concepts, and multi-job training scenarios.

*Why it unblocks this paper:* The Flower tutorial series provides a focused, practical introduction to federated AI simulations, including device participation and scheduling, which aligns well with FedACT's core contributions in multi-job federated learning.

*If you want all of it:* All 9 episodes, about 4.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand FedACT, start by exploring foundational topics including resource heterogeneity in distributed systems, multi-task federated learning, federated learning scheduling, and participation fairness in federated learning. These prerequisites cover the challenges and existing approaches in federated learning environments with heterogeneous devices and multiple concurrent tasks. Finally, focus on the core concept of FedACT itself, emphasizing its novel scheduling and alignment scoring mechanism, ideally through the authors' own presentation or closely related academic talks.

### Resource heterogeneity in distributed systems *(prerequisite)*
Resource heterogeneity is a critical challenge in federated learning systems where devices have varying computational power, memory, and network capabilities. Understanding how distributed systems manage and optimize for such heterogeneity is essential to grasp how FedACT dynamically aligns device resources to job demands.

*How the paper uses it:* FedACT explicitly accounts for device resource heterogeneity in its scheduling approach to improve training efficiency and accuracy.

▶ [Heterogeneity-Aware Algorithms for Federated Optimization ...](https://www.youtube.com/watch?v=KNMJvDgH8Xw) — Centre for Networked Intelligence, IISc · 1:08:25

### Multi-task federated learning *(prerequisite)*
Multi-task federated learning involves training multiple models or tasks concurrently across decentralized devices, which introduces complexity in scheduling and resource allocation. This concept provides the context for FedACT’s focus on concurrent multi-job federated learning.

*How the paper uses it:* FedACT addresses the challenge of scheduling devices to multiple federated learning jobs running concurrently.

▶ [ML Seminar Series - On Heterogeneity in Federated Settings](https://www.youtube.com/watch?v=EYmc6aOPUe0) — Wireless Networking and Communications Group · 48:58

### Federated learning scheduling *(prerequisite)*
Scheduling in federated learning determines how and when devices participate in training rounds, impacting convergence speed and resource utilization. A solid understanding of existing scheduling strategies is necessary to appreciate FedACT’s novel alignment scoring and fairness mechanisms.

*How the paper uses it:* FedACT proposes a new scheduling method that dynamically assigns devices to jobs based on alignment scores and fairness.

▶ [Federated Learning with Peter Kairouz](https://www.youtube.com/watch?v=I4gkIrsIAjc) — GDSC AUB · 1:14:25

### Participation fairness in federated learning *(prerequisite)*
Participation fairness ensures balanced involvement of devices in federated learning, which helps mitigate bias and improves model generalization. This principle is a core component of FedACT’s alignment scoring mechanism.

*How the paper uses it:* FedACT incorporates participation fairness to balance device involvement across multiple jobs, enhancing convergence and accuracy.

▶ [OSDI '21 - Oort: Efficient Federated Learning via Guided Participant Selection](https://www.youtube.com/watch?v=5npOel4T4Mw) — USENIX · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of federated learning and the challenges of scheduling devices in such systems. Then, learn about the impact of heterogeneous device resources and the need for fairness in device participation. Finally, grasp the core innovation of FedACT: the alignment scoring mechanism that balances resource matching and fairness to optimize multi-job federated learning scheduling.

### Federated learning scheduling *(prerequisite)*
Learn how federated learning systems assign devices to training tasks, considering device availability and resource constraints. Scheduling is crucial to ensure efficient training and timely model updates across distributed devices.

*How the paper uses it:* FedACT improves scheduling by dynamically assigning heterogeneous devices to multiple federated learning jobs concurrently.

▶ [Federated Learning with Peter Kairouz](https://www.youtube.com/watch?v=I4gkIrsIAjc) — GDSC AUB · 1:14:25

### Resource heterogeneity in distributed systems *(prerequisite)*
Understand that devices in federated learning have different computational power, memory, and network capabilities, which affects their suitability for various tasks. Accounting for this heterogeneity is key to efficient scheduling and training performance.

*How the paper uses it:* FedACT explicitly considers device resource heterogeneity to match devices to jobs that fit their capabilities.

▶ [Heterogeneity-Aware Algorithms for Federated Optimization ...](https://www.youtube.com/watch?v=KNMJvDgH8Xw) — Centre for Networked Intelligence, IISc · 1:08:25

### Participation fairness in federated learning *(prerequisite)*
Fairness ensures that devices contribute evenly to training, preventing bias and improving model convergence and accuracy. Balancing participation avoids overloading some devices while neglecting others.

*How the paper uses it:* FedACT incorporates participation fairness to balance device involvement across multiple federated learning jobs.

▶ [OSDI '21 - Oort: Efficient Federated Learning via Guided Participant Selection](https://www.youtube.com/watch?v=5npOel4T4Mw) — USENIX · 5 years ago

### Multi-task federated learning *(prerequisite)*
Multi-task federated learning involves training multiple models or jobs simultaneously on distributed devices. This setting introduces complexity in scheduling and resource allocation compared to single-task federated learning.

*How the paper uses it:* FedACT targets the multi-job federated learning scenario, optimizing concurrent training across heterogeneous devices.

▶ [[IEEE IV 2021] Multi-Task Federated Learning for Vehicular ...](https://www.youtube.com/watch?v=bdP_U6lNONc) — Mitsubishi Electric Research Laboratories (MERL) · 14:19

## Already in your library

- [SNAPP Seminar || Gauri Joshi (Carnegie Mellon University ...](https://www.youtube.com/watch?v=5a-Lg75ebEc) — also for: Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients (Rui Hu)
- [Stanford MLSys Seminar Episode 3: Virginia Smith](https://www.youtube.com/watch?v=laCyJICLyWg) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of FedACT's core ideas and contributions. The beginner project recreates the alignment scoring mechanism on simulated data to grasp the scheduling concept. The intermediate project implements FedACT's scheduling method on a small federated learning multi-job simulation, comparing job completion time and accuracy against a simple baseline. The advanced project extends FedACT by exploring asynchronous device multitasking, addressing a key limitation and future direction from the paper.

### Beginner — Simulate FedACT Alignment Scoring
*Effort: a weekend, ~8 hours*

You build a small Python simulation that models devices and federated learning jobs with heterogeneous resource demands. Implement the FedACT alignment scoring formula combining resource alignment and participation fairness to assign devices to jobs each round. Visualize how alignment scores evolve and influence scheduling decisions.

**Why it shows you understood the paper:** This project shows you understand the core mechanism FedACT uses to schedule devices dynamically, including how resource heterogeneity and fairness are quantified and combined.

**Grounded in:** FedACT uses an alignment scoring mechanism combining resource alignment and participation fairness. "Scorerk,m (Vm) = α ∗ Rrk,m (Vm) + β ∗ Fk,m (Vm) where Rrk,m denotes resource alignment and Fk,m participation fairness."

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Simulated device resource profiles and federated learning job requirements generated within the notebook; no external dataset required.

**Build it:**

1. Define data structures for devices with resource attributes (CPU, memory, bandwidth) and jobs with resource demands.
2. Implement functions to compute resource alignment scores between devices and jobs.
3. Implement participation fairness scores tracking device usage across jobs.
4. Combine scores per FedACT formula to compute alignment scores for device-job pairs.
5. Simulate multiple scheduling rounds assigning devices to jobs based on highest alignment scores.
6. Visualize alignment scores and device-job assignments over rounds.

**Ships as:** A Jupyter notebook demonstrating the alignment scoring mechanism with plots and explanations, showing how devices are dynamically scheduled based on scores.

**Stretch goal:** Add a simple heuristic baseline (e.g., random or greedy assignment) and compare alignment scores and fairness metrics.

### Intermediate — Reimplement FedACT Scheduling on Multi-Job FL Simulation
*Effort: 2 weekends, ~20 hours*

You implement the FedACT scheduling algorithm from the paper to assign heterogeneous devices to multiple concurrent federated learning jobs. Using a public federated learning dataset (e.g., FEMNIST or a synthetic Non-IID partition of MNIST), simulate multiple FL jobs running concurrently on devices with varied resource profiles. Compare FedACT's scheduling against a simple baseline like random or round-robin assignment, measuring job completion time and model accuracy.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method and reproduce its key claims about improved job completion time and accuracy in a multi-job federated learning setting with heterogeneous devices.

**Grounded in:** FedACT dynamically updates alignment scores and generates scheduling plans for concurrent FL jobs. "FedACT reduces average job completion time by up to 8.3× compared to baselines." "Improves global model accuracy by up to 44.5%."

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib

**Data:** Use the FEMNIST dataset or a synthetic Non-IID partition of MNIST as a substitute for the paper's benchmark datasets.

**Build it:**

1. Partition the chosen dataset into multiple subsets to simulate multiple FL jobs with heterogeneous data distributions.
2. Simulate a set of devices with heterogeneous resource profiles (CPU, memory, bandwidth).
3. Implement the FedACT alignment scoring mechanism and scheduling algorithm as described in the paper.
4. Implement a baseline scheduling method (e.g., random or round-robin assignment).
5. Run federated learning training rounds concurrently for multiple jobs, assigning devices per scheduling method.
6. Measure and compare average job completion time and global model accuracy between FedACT and baseline.
7. Visualize training convergence and scheduling fairness metrics.

**Ships as:** A Python project with scripts and notebooks showing FedACT scheduling implementation, experimental results comparing job completion time and accuracy against baseline, and visualizations.

**Stretch goal:** Incorporate participation fairness tracking and show its effect on convergence and accuracy.

### Advanced — Extend FedACT for Asynchronous Multi-Job Device Scheduling
*Effort: 3+ weeks*

You extend the FedACT scheduling framework to support asynchronous training where devices can participate in multiple federated learning jobs concurrently, addressing a key limitation noted in the paper. Design and implement an updated alignment scoring and scheduling algorithm that accounts for device multitasking capabilities and resource sharing. Evaluate the impact on job completion time, model accuracy, and participation fairness in a simulated multi-job FL environment.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of FedACT, demonstrating deep comprehension of the paper's scheduling approach and the challenges of asynchronous multi-job federated learning. It shows initiative to advance the state of the art.

**Grounded in:** Limitations: "Current FedACT implementation assumes devices can only be assigned to one job per round, limiting concurrent device multitasking." Future directions: "Extend FedACT to support asynchronous model updates allowing devices to train multiple jobs concurrently."

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib

**Data:** Use the FEMNIST dataset or synthetic Non-IID MNIST partitions to simulate federated learning jobs.

**Build it:**

1. Review FedACT's original alignment scoring and scheduling method.
2. Design an extended alignment scoring mechanism that models device multitasking and resource sharing constraints.
3. Implement asynchronous scheduling allowing devices to be assigned to multiple jobs per round with resource capacity limits.
4. Simulate multi-job federated learning training with asynchronous updates.
5. Compare performance metrics (job completion time, accuracy, fairness) against original FedACT and baseline.
6. Analyze trade-offs and challenges in maintaining fairness and resource alignment under asynchronous scheduling.

**Ships as:** A comprehensive codebase and report demonstrating the extended FedACT scheduler with asynchronous multi-job device assignment, experimental evaluation, and discussion of results.

**Stretch goal:** Incorporate privacy-preserving techniques such as differential privacy into the asynchronous scheduling framework.
