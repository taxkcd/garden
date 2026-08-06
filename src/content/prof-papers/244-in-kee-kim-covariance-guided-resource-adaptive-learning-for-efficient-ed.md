---
title: "244 · Covariance-Guided Resource Adaptive Learning for Efficient Edge Inference — In Kee Kim"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-in-kee-kim"
source_hash: "cd39f2cd19d9d16042c9f5b234194916e655ce533110546fb167eb12075f0a57"
sequence: 244
generator: "outreach-garden: managed"
---

# 244 · Covariance-Guided Resource Adaptive Learning for Efficient Edge Inference

## At a glance

- **Professor:** In Kee Kim
- **Institution:** University of Georgia
- **Paper:** [Covariance-Guided Resource Adaptive Learning for Efficient Edge Inference](https://arxiv.org/pdf/2603.14577)
- **Authors:** Ahmad N. L. Nabhaan, Zaki Sukma, Rakandhiya D. Rachmanto, Muhammad Husni Santriaji, Byungjin Cho, Arief Setyanto, In Kee Kim
- **Year:** 2026

## Paper overview

This paper presents CORAL, a method to optimize deep learning inference on edge devices by dynamically tuning hardware settings to meet both power and throughput requirements without needing time-consuming offline profiling. CORAL uses a statistical technique called distance covariance to efficiently find near-optimal configurations quickly, improving energy efficiency and performance on devices like NVIDIA Jetson.

### Why it matters

**Research problem:** Finding efficient hardware configurations for deep learning inference on edge devices that satisfy both throughput targets and power budgets simultaneously is challenging due to the large, complex, and nonlinear configuration space. Existing methods rely on exhaustive offline profiling or extensive training, which are impractical for real-time adaptation.

**Why it matters:** Edge devices such as autonomous drones and smart surveillance systems require consistent inference throughput under strict power constraints to maintain battery life and responsiveness. Inefficient hardware configurations can double power consumption or reduce throughput, negatively impacting real-world deployments.

**Key contributions:**

- Introduction of distance covariance for online hardware configuration search enabling real-time adaptation without offline profiling.
- Formalization of edge inference as a throughput-power co-optimization problem addressing simultaneous constraints.
- Comprehensive evaluation on two NVIDIA Jetson devices and three object detection models spanning a 20× size range.
- Demonstration that CORAL achieves near-optimal performance with minimal exploration and outperforms baselines in dual-constraint scenarios.

## About the professor

**In Kee Kim** — Associate Professor of Computer Science, School of Computing, University of Georgia.

Research interests: Cloud Computing, Edge/IoT Systems

### Research links

- [Faculty/profile page](https://www.cs.uga.edu/directory/people/kee-kim)
- [Identity evidence](https://cobweb.cs.uga.edu/~kim)
- [Professor website](https://inkeekim.github.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CORAL paper, start by building a strong foundation in the statistical technique of distance covariance, which is central to CORAL's method. Next, grasp the challenges and principles of edge device hardware configuration optimization and throughput-power co-optimization, as these contextualize the problem CORAL addresses. Finally, focus on the core concept of CORAL itself, emphasizing the authors' novel approach to online adaptive resource management for efficient edge inference without offline profiling.

### Distance covariance statistical dependence *(prerequisite)*
Distance covariance is a key statistical measure used in CORAL to capture nonlinear dependencies between hardware parameters and performance metrics. Understanding this concept provides insight into how CORAL efficiently guides its online search without exhaustive profiling.

*How the paper uses it:* CORAL leverages distance covariance to statistically capture dependencies and perform online optimization without offline profiling.

▶ [Combinatorics of Distance Covariance  Inclusion Minimal Maximizers part 1](https://www.youtube.com/watch?v=mHx3PU5NpcQ) — Experimental mathematics · 9 years ago

### Edge device hardware configuration optimization *(prerequisite)*
Optimizing hardware configurations on edge devices is challenging due to the large and nonlinear configuration space. This section covers the fundamental challenges and considerations in tuning edge device parameters for performance and power efficiency.

*How the paper uses it:* CORAL addresses the challenge of finding efficient hardware configurations for deep learning inference on edge devices.

▶ [Introduction to Deep Learning for Edge Devices Session 5: Hardware at the Edge](https://www.youtube.com/watch?v=E3sbK1-oxh4) — Women Who Code · 5 years ago

### Throughput power co-optimization *(prerequisite)*
Simultaneously optimizing throughput and power consumption is critical in edge inference scenarios. This section explains the trade-offs and strategies involved in co-optimizing these metrics, which is the core problem CORAL formalizes and solves.

*How the paper uses it:* CORAL explicitly formulates the throughput-power co-optimization problem to satisfy power budgets and throughput targets simultaneously.

▶ [Throughput Optimization Policy](https://www.youtube.com/watch?v=VgACIF9U4yc) — Zenlab Cedt · 12 years ago

### Online adaptive resource management *(prerequisite)*
Online adaptive resource management enables real-time tuning of system parameters without offline profiling. Understanding this concept is essential to appreciate how CORAL performs lightweight, iterative configuration search efficiently.

*How the paper uses it:* CORAL performs an online, lightweight search guided by distance covariance to find configurations meeting constraints without offline profiling.

▶ [EVSP501. Lecture 2  Adaptive Resource Management Process](https://www.youtube.com/watch?v=Zr6R3hvw-WE) — Thomas Simon · 11 years ago

### CORAL paper talk
This section focuses on the authors' own presentations or closely related academic talks that provide direct insight into the CORAL method, its formulation, and evaluation. Such talks offer the most precise and detailed understanding of the paper's contributions and innovations.

*How the paper uses it:* The authors' own talks provide deep insight into their novel method CORAL for efficient edge inference optimization.

▶ [Lecture on Adaptive Covariance Pattern Search (Fitness Landscape Analysis)](https://www.youtube.com/watch?v=CCxHa5qytEk) — Ferrante Neri · 44:04 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand CORAL, a method for efficient edge inference optimization. Start by learning about edge computing and hardware configuration challenges, then grasp the statistical concept of covariance and distance covariance, followed by understanding throughput-power co-optimization and online adaptive resource management. Finally, explore the core CORAL method that combines these ideas for real-time hardware tuning on edge devices.

### Edge device hardware configuration optimization *(prerequisite)*
Edge devices have limited resources and require careful tuning of hardware parameters like CPU/GPU frequencies and core counts to balance performance and power consumption. Understanding these challenges is essential to appreciate why adaptive optimization methods like CORAL are needed.

*How the paper uses it:* CORAL dynamically tunes hardware settings on NVIDIA Jetson edge devices to meet power and throughput constraints.

▶ [What is edge computing?](https://www.youtube.com/watch?v=3hScMLH7B4o) — TECHtalk · 6 years ago

### Distance covariance statistical dependence *(prerequisite)*
Distance covariance is a statistical measure that captures nonlinear dependencies between variables, unlike traditional covariance which only captures linear relationships. Grasping this concept helps understand how CORAL identifies important hardware-performance correlations efficiently.

*How the paper uses it:* CORAL uses distance covariance to measure nonlinear dependencies between hardware parameters and performance metrics.

▶ [Covariance Clearly Explained!](https://www.youtube.com/watch?v=TPcAnExkWwQ) — Normalized Nerd · 5 years ago

### Throughput power co-optimization *(prerequisite)*
Throughput-power co-optimization involves balancing two competing objectives: maximizing inference speed (throughput) while respecting power consumption limits. This trade-off is critical for edge devices that must be both fast and energy-efficient.

*How the paper uses it:* CORAL explicitly formulates edge inference as a throughput-power co-optimization problem to satisfy simultaneous constraints.

▶ [Throughput vs Latency | System Design](https://www.youtube.com/watch?v=ryzF1vO7N4w) — System Design School · 1 year ago

### Online adaptive resource management *(prerequisite)*
Online adaptive resource management refers to dynamically adjusting system resources in real-time based on current workload and constraints, without relying on offline profiling. This approach enables fast adaptation to changing conditions on edge devices.

*How the paper uses it:* CORAL performs an online, lightweight search guided by statistical correlations to find near-optimal configurations without offline profiling.

▶ [What is Resource Management? [Definition, Terms, Overview Basics]](https://www.youtube.com/watch?v=EG31WtHhNs0) — ProSymmetry · 4 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of CORAL's approach to efficient edge inference through covariance-guided adaptive hardware configuration. The beginner project recreates a core statistical concept from the paper using familiar tools, the intermediate project implements the core CORAL method on a simplified setup to reproduce key results, and the advanced project extends CORAL to address one of its stated limitations by adapting it to rapidly changing workloads. Each project ties directly to a specific contribution or limitation from the paper and leverages your existing software engineering and ML skills.

### Beginner — Distance Covariance Visualization for Hardware Parameters
*Effort: a weekend, ~8 hours*

You build a Python notebook that computes and visualizes distance covariance between synthetic hardware configuration parameters (e.g., CPU frequency, GPU frequency) and simulated performance metrics (throughput and power). This reproduces the core statistical dependency measure CORAL uses to guide its search.

**Why it shows you understood the paper:** This project shows you understand the key statistical tool—distance covariance—that CORAL uses to capture nonlinear dependencies between hardware settings and performance, a foundational concept of the paper.

**Grounded in:** Introduction of distance covariance for online hardware configuration search enabling real-time adaptation without offline profiling.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib, seaborn

**Data:** Synthetic data simulating hardware parameters and performance metrics, generated within the notebook to mimic nonlinear dependencies described in the paper.

**Build it:**

1. Generate synthetic data arrays representing hardware parameters and corresponding throughput and power metrics with nonlinear relationships.
2. Implement distance covariance calculation using scipy or custom code.
3. Visualize the distance covariance matrix and compare it to Pearson correlation to highlight nonlinear dependency capture.
4. Write explanatory comments linking the visualization to CORAL's method.
5. Package the notebook with instructions for running and interpreting results.

**Ships as:** A Jupyter notebook that clearly demonstrates distance covariance computation and visualization on synthetic hardware-performance data, with explanations connecting to CORAL's approach.

**Stretch goal:** Add an interactive dashboard using Plotly Dash or Streamlit to allow users to modify synthetic data parameters and observe changes in distance covariance.

### Intermediate — Reimplementation of CORAL's Online Configuration Search
*Effort: 2 weekends, ~20 hours*

You implement the core CORAL method from the paper to perform online adaptive hardware configuration search optimizing throughput and power constraints. You simulate a small configuration space and performance model, then compare CORAL's guided search against a random search baseline, reporting convergence speed and constraint satisfaction.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's core algorithmic contribution into working code, reproducing the key metric of fast convergence within few iterations and dual-constraint satisfaction.

**Grounded in:** CORAL converges within 10 iterations, orders of magnitude faster than profiling-based methods.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib

**Data:** Simulated hardware configuration space with parameters like CPU/GPU frequency and concurrency level, and a synthetic performance model mimicking nonlinear throughput and power behavior as described in the paper.

**Build it:**

1. Define a small discrete configuration space with parameters similar to those in the paper (CPU freq, GPU freq, concurrency).
2. Create a synthetic nonlinear performance model mapping configurations to throughput and power metrics.
3. Implement distance covariance calculation to measure dependency between parameters and performance metrics.
4. Implement CORAL's iterative online search algorithm to select configurations satisfying throughput and power constraints.
5. Implement a random search baseline for comparison.
6. Run experiments comparing convergence speed and constraint satisfaction between CORAL and baseline.
7. Plot results showing CORAL's near-optimal performance within 10 iterations.

**Ships as:** A Python notebook or script demonstrating CORAL's online search method on a simulated problem, with comparison plots and a clear explanation of results.

**Stretch goal:** Extend the implementation to support an additional constraint such as latency or thermal limit as a proof of concept.

### Advanced — Adaptive CORAL for Rapidly Changing Edge Workloads
*Effort: 3-4 weeks*

You extend the CORAL method to handle rapidly changing workloads by integrating a simple workload prediction model that anticipates changes in throughput and power demands. You simulate dynamic workload scenarios and demonstrate improved adaptation speed and constraint satisfaction compared to the original CORAL approach.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing you can critically analyze the method and propose a meaningful extension that could lead to publishable research discussions.

**Grounded in:** The approach assumes stable workload characteristics during optimization; rapid workload changes could affect performance. Future direction: exploring adaptive strategies for rapidly changing workloads or environments.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib, scikit-learn

**Data:** Simulated dynamic workload traces with time-varying throughput and power targets, generated to mimic realistic edge device workload fluctuations.

**Build it:**

1. Build on the intermediate CORAL implementation with synthetic static workload.
2. Design and implement a simple workload prediction model (e.g., moving average or lightweight regression) to forecast short-term workload changes.
3. Modify CORAL's online search to incorporate workload predictions to proactively adjust configurations.
4. Simulate dynamic workload scenarios with sudden changes in throughput and power constraints.
5. Evaluate and compare adaptation speed and constraint satisfaction of the original and extended CORAL methods.
6. Document findings and discuss potential real-world applicability and limitations.

**Ships as:** A comprehensive project repository with code, simulation data, evaluation plots, and a detailed README explaining the extension and its impact on CORAL's adaptation capabilities.

**Stretch goal:** Integrate the extended CORAL with a simple multi-DNN scheduling simulator to explore concurrent execution frameworks as another future direction.

_The paper's authors did not release code or datasets for CORAL; all data must be simulated based on descriptions in the paper. Verify that synthetic data generation aligns with the nonlinear dependencies and configuration parameters described._
