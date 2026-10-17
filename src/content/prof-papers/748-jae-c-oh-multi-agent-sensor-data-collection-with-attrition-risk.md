---
title: "748 · Multi-Agent Sensor Data Collection with Attrition Risk — Jae C. Oh"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jae-c-oh"
source_hash: "55b85d57bc5a762d44b4545d09917714fb661d69e737acb2f4b3a71cf4ce2991"
sequence: 748
generator: "outreach-garden: managed"
---

# 748 · Multi-Agent Sensor Data Collection with Attrition Risk

## At a glance

- **Professor:** Jae C. Oh
- **Institution:** Syracuse University
- **Paper:** [Multi-Agent Sensor Data Collection with Attrition Risk](https://ojs.aaai.org/index.php/ICAPS/article/view/13736)
- **Authors:** Jeffrey Hudack, Jae C. Oh
- **Year:** 2016

## Paper overview

This paper addresses the problem of planning routes for multiple robots to collect sensor data in dangerous environments where robots may be lost. It proposes a new clustering algorithm that balances the number of robots used, the risk of losing them, and the value of the data collected, aiming to maximize the expected value of the mission while minimizing risk and computational cost.

### Why it matters

**Research problem:** How to optimally assign and route multiple agents to collect sensor data in hostile environments where agents may be lost (attrition risk), without requiring all tasks to be completed or a fixed number of agents, and explicitly accounting for the expected loss of agents and their collected data in the planning process.

**Why it matters:** In real-world applications such as military, environmental monitoring, or disaster response, robots or agents operate in risky environments where losing agents is possible. Efficiently planning their tasks to maximize data collection while minimizing risk and loss of valuable assets is critical for mission success and resource management.

**Key contributions:**

- Formulation of CPPAR that explicitly incorporates attrition risk and asset value into multi-agent task assignment.
- Introduction of the Progressive Risk-aware Clustering algorithm that uses expected value gain as a distance metric for hierarchical clustering.
- Demonstration that PRC outperforms sequential greedy algorithms in expected value and computational efficiency.
- Scalability of PRC to large problem instances with thousands of tasks.
- Analysis of how asset value and task distribution affect optimal agent deployment and task assignment.

## About the professor

**Jae C. Oh** — David G. Edelstein Endowed Professor, Dept. of Electrical Eng. and Computer Science, Syracuse University.

Research interests: AI Safety and Trustworthiness, System-Theoretic Risk Management, Data Fusion and Visualization, Cybersecurity, Interdisciplinary Innovation

### Research links

- [Faculty/profile page](https://campus.kennesaw.edu/faculty-staff/academic-affairs/dean_search_ccse_10-2025/cv_oh_jae-r.pdf)
- [Identity evidence](http://eng-cs.syr.edu/our-departments/electrical-engineering-and-computer-science/people/faculty)
- [Identity evidence](https://ecs.syracuse.edu/faculty-staff/jae-c-oh)
- [Identity evidence](https://experts.syr.edu/en/persons/jae-c-oh)
- [Identity evidence](https://ecs.syracuse.edu/faculty-staff/jae-c-oh/)
- [Identity evidence](https://dblp.org/pid/o/JaeCOh.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Combinatorial Optimization and Graph Algorithms
**The paper assumes:** combinatorial optimization, graph theory, minimum spanning trees, hierarchical clustering algorithms
**Already in this field?** Skip this entirely if you already have a solid understanding of combinatorial optimization techniques and graph-based clustering algorithms.

To understand the core methods in the paper on Multi-Agent Sensor Data Collection with Attrition Risk, especially the Progressive Risk-aware Clustering algorithm relying on hierarchical clustering and graph-based metrics like minimum spanning trees, a solid grasp of combinatorial optimization and graph algorithms is essential. The rigorous course option offers a comprehensive university-level treatment of data structures and graph algorithms, while the fast track provides a concise, intuition-focused series on combinatorics and graph theory concepts relevant to clustering and optimization. Choose the rigorous course for deep foundational knowledge and the fast track for a quicker conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Data structure and Algorithms](https://www.youtube.com/playlist?list=PL67egUD6BTyyfKYZNkEjQS0d9F_Zx3EyM) — Computer Science - Sri Kaliswari College · 19 videos · 4.7h across 19 episodes

**Watch only this:** Episodes 3 (Graph Basics), 4 (Graph Representation), 5 (Graph Traversal part 2), 6 (Minimum Spanning Tree part 1), and 13 (Minimum Spanning Tree part 2), totaling about 1 hour 10 minutes. These episodes cover the essential graph concepts and MST algorithms used in the paper's clustering approach.

*Why it unblocks this paper:* This university-level playlist covers fundamental graph algorithms including minimum spanning trees and graph traversal, which are directly relevant to understanding the clustering and route planning algorithms in the paper.

*If you want all of it:* 4.7 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [COMBINATORICS, HYPERGRAPHS](https://www.youtube.com/playlist?list=PLlzUVgS97R9gS3WR6XNeQ-ZDMyvEh-Jm8) — AlreadyTomorrow · 39 videos · 13.7h across the first 38 episodes

**Watch only this:** Episodes 1 (Depth First Search (DFS) Explained: Algorithm, Examples, and Code), 5 (Introduction to Graph Theory: A Computer Science Perspective), and 11 (What Are Combinatorial Algorithms? | Richard Karp and Lex Fridman), totaling about 1 hour. These episodes give a quick but solid conceptual grounding in graph traversal and combinatorial optimization.

*Why it unblocks this paper:* This short-form series provides clear, visual explanations of combinatorics and graph theory concepts including graph traversal and combinatorial algorithms, offering an accessible introduction to the mathematical foundations behind the paper's clustering and optimization methods.

*If you want all of it:* About 13.7 hours across the first 38 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Multi-Agent Sensor Data Collection with Attrition Risk," start by building foundational knowledge on multi-agent task allocation under risk, hierarchical agglomerative clustering algorithms, expected value optimization in uncertain environments, and minimum spanning tree applications in routing. These prerequisites provide the theoretical and algorithmic background necessary to grasp the paper's novel Progressive Risk-aware Clustering (PRC) algorithm. Finally, focus on the paper authors' own talk to gain direct insights into their approach, results, and implications.

### Multi-agent task allocation under risk *(prerequisite)*
This section covers how multiple agents are assigned tasks while explicitly considering risk factors, which is fundamental to the paper's problem formulation. Understanding these concepts provides the context for why attrition risk and expected value are critical in multi-agent planning.

*How the paper uses it:* The paper formulates a multi-agent route planning problem that explicitly incorporates attrition risk and asset value in task assignment.

▶ [CMU AI Agents 2026: 5. Planning, Task Decomposition, and Multi-Agent Coordination](https://www.youtube.com/watch?v=S8v-dR4s29M) — Graham Neubig · 1:15:14 · 3w ago

### Hierarchical agglomerative clustering algorithms *(prerequisite)*
Hierarchical agglomerative clustering is the core methodological framework underlying the PRC algorithm. This section explains the clustering process, linkage criteria, and how clusters are merged progressively, which is essential to understand the paper's clustering-based approach to task assignment.

*How the paper uses it:* The PRC algorithm is a hierarchical agglomerative clustering method that merges task clusters based on expected value gain.

▶ [Clustering (2): Hierarchical Agglomerative Clustering](https://www.youtube.com/watch?v=OcoE7JlbXvY) — Alexander Ihler · 12:34 · 11y ago

### Expected value optimization in uncertain environments *(prerequisite)*
This section introduces the concept of expected value and decision-making under uncertainty, which is central to the paper's objective of maximizing mission value while accounting for attrition risk. It provides the mathematical and intuitive foundation for the expected value gain metric used in clustering.

*How the paper uses it:* The algorithm optimizes expected mission value by balancing attrition risk and data value in task planning.

▶ [Expected Values, Main Ideas!!!](https://www.youtube.com/watch?v=KLs_7b7SKi4) — StatQuest with Josh Starmer · 13:39 · 5y ago

### Minimum spanning tree applications in routing *(prerequisite)*
Minimum spanning trees (MST) are used in the paper to approximate cluster values efficiently, which is crucial for scalable computation. This section explains MST concepts and algorithms, enabling understanding of how MST approximations support the PRC algorithm's efficiency.

*How the paper uses it:* The PRC algorithm uses MST approximations to estimate cluster values for efficient multi-agent task assignment.

▶ [12. Greedy Algorithms: Minimum Spanning Tree](https://www.youtube.com/watch?v=tKwnms5iRBU) — MIT OpenCourseWare · 1:22:10 · 10y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This talk provides direct insights from the authors on their novel approach, the Progressive Risk-aware Clustering algorithm, and their experimental results. It offers an authoritative and detailed explanation of the paper's contributions and practical implications.

*How the paper uses it:* The authors present their work on multi-agent task allocation under attrition risk and the PRC algorithm in this recorded talk.

▶ [Special Edition: Multi-Agent AI and Human-AI Teaming](https://www.youtube.com/watch?v=Uh0xn7gXy8Q) — Emerging Technologies Institute · 25:11 · 4w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by grasping the basics of expected value optimization under uncertainty, which explains how to make decisions when outcomes are probabilistic. Next, learn about minimum spanning trees and their role in routing and approximations, as this is key to the paper's efficient cluster value estimation. Then, study hierarchical agglomerative clustering algorithms to understand the core clustering method used. Finally, explore multi-agent task allocation under risk to see how multiple agents are assigned tasks considering attrition risk, culminating in the paper's central Progressive Risk-aware Clustering algorithm.

### Expected value optimization in uncertain environments *(prerequisite)*
Expected value is a fundamental concept for making optimal decisions under uncertainty by weighing possible outcomes by their probabilities. Understanding this helps in grasping how the paper evaluates mission plans by balancing risk and reward.

*How the paper uses it:* The paper optimizes the expected mission value by accounting for the probability of agent loss and data collection success.

▶ [Expected Values, Main Ideas!!!](https://www.youtube.com/watch?v=KLs_7b7SKi4) — StatQuest with Josh Starmer · 13:39 · 5y ago

### Minimum spanning tree applications in routing *(prerequisite)*
Minimum spanning trees (MST) connect points with the shortest total edge length without cycles, useful for approximating efficient routes. This concept helps understand how the paper estimates cluster values efficiently without computing exact paths.

*How the paper uses it:* The algorithm approximates cluster values using MSTs to estimate routing costs and expected values.

▶ [12. Greedy Algorithms: Minimum Spanning Tree](https://www.youtube.com/watch?v=tKwnms5iRBU) — MIT OpenCourseWare · 1:22:10 · 10y ago

### Hierarchical agglomerative clustering algorithms *(prerequisite)*
Hierarchical agglomerative clustering builds clusters by iteratively merging the closest pairs, creating a tree of clusters. This method underpins the paper's Progressive Risk-aware Clustering algorithm for grouping tasks.

*How the paper uses it:* The paper's PRC algorithm is a hierarchical agglomerative clustering method using expected value gain as a distance metric.

▶ [StatQuest: Hierarchical Clustering](https://www.youtube.com/watch?v=7xHsRkOdVwo) — StatQuest with Josh Starmer · 11:19 · 9y ago

### Multi-agent task allocation under risk *(prerequisite)*
Multi-agent task allocation involves assigning tasks to multiple agents while considering constraints like capabilities and risks. Understanding this is essential to appreciate how the paper balances agent loss risk with data collection value.

*How the paper uses it:* The paper formulates a multi-agent task assignment problem explicitly incorporating attrition risk and asset value.

▶ [Learning Task Requirements and Agent Capabilities for Multi-agent Task Allocation](https://www.youtube.com/watch?v=r_7ZsEk6axU) — Barton Research Group · 5:56 · 3y ago

## Already in your library

- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [Multi-Agent AI Systems Explained: The Complete Guide](https://www.youtube.com/watch?v=-zBbij9rrEI) — also for: Social Theory Should Be a Structural Prior for Agentic AI: A Formal Framework for Multi-Agent Social Systems (Kathleen M. Carley)
- [Hierarchical Cluster Analysis [Simply explained]](https://www.youtube.com/watch?v=8QCBl-xdeZI) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)
- [K-Means Clustering Algorithm | Geometric Intuition | Clustering | Unsupervised Learning](https://www.youtube.com/watch?v=5shTLzwAdEc) — also for: Flash-Fusion: Enabling Expressive, Low-Latency Queries on IoT Sensor Streams with LLMs (Ashutosh Dhekne)
- [12. Clustering](https://www.youtube.com/watch?v=esmzYhuFnds) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Multi-Agent Sensor Data Collection with Attrition Risk". The beginner project reproduces a core metric from the paper using simulated data and basic clustering. The intermediate project implements the Progressive Risk-aware Clustering (PRC) algorithm on a synthetic dataset, comparing it to a simple baseline. The advanced project extends the PRC method to handle heterogeneous asset values and location-dependent risk dynamically, addressing a key limitation noted by the authors.

### Beginner — Simulate Attrition Risk and Compute Expected Mission Value
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates a set of tasks distributed in a 2D plane with a base location, assigns uniform risk per unit distance, and computes the expected value of a simple multi-agent route plan. You implement a basic hierarchical clustering based on distance and calculate expected mission value using the attrition risk model described in the paper.

**Why it shows you understood the paper:** This project shows you understand how attrition risk affects expected mission value and how clustering can group tasks for multi-agent assignment, reproducing the paper's fundamental problem formulation and metric.

**Grounded in:** The project demonstrates the paper's formulation of CPPAR that incorporates attrition risk and asset value into multi-agent task assignment.

**Tech stack:** Python 3.11, NumPy, Matplotlib, SciPy (for hierarchical clustering)

**Data:** Simulated 2D task locations and base position generated randomly to mimic the paper's task distribution.

**Build it:**

1. Generate random 2D coordinates for tasks and define a fixed base location.
2. Implement a uniform attrition risk model proportional to distance traveled.
3. Cluster tasks hierarchically based on Euclidean distance.
4. Calculate expected mission value for clusters using the attrition risk and uniform asset value assumptions.
5. Visualize clusters and report expected values for different clusterings.

**Ships as:** A Python script and Jupyter notebook showing simulated tasks, clustering results, expected mission value calculations, and plots illustrating the impact of attrition risk.

**Stretch goal:** Add a simple greedy baseline that assigns tasks sequentially and compare its expected value to the clustering approach.

### Intermediate — Implement Progressive Risk-aware Clustering Algorithm
*Effort: 2 weekends, ~20 hours*

You implement the PRC algorithm as described in the paper to assign tasks to multiple agents under attrition risk. Using synthetic task data, you approximate cluster values with minimum spanning trees and distance to base, then perform hierarchical clustering using expected value gain as the distance metric. You compare PRC's expected mission value against a sequential greedy baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core algorithm and validate its performance advantage over simpler methods, showing comprehension of the PRC method and its computational benefits.

**Grounded in:** The project reproduces the paper's key contribution: the Progressive Risk-aware Clustering algorithm that uses expected value gain as a distance metric for hierarchical clustering and outperforms sequential greedy baselines.

**Tech stack:** Python 3.11, NetworkX (for MST), NumPy, Matplotlib

**Data:** Synthetic task locations generated to simulate large-scale task sets; no official dataset is provided by the paper.

**Build it:**

1. Generate synthetic task data with 100-500 tasks distributed in 2D space and define a base location.
2. Implement minimum spanning tree calculation for clusters using NetworkX.
3. Implement the expected value gain metric incorporating uniform risk and asset value.
4. Implement the PRC hierarchical agglomerative clustering algorithm using the expected value gain as the linkage criterion.
5. Implement a sequential greedy baseline for task assignment.
6. Compare expected mission values and runtime performance between PRC and the baseline.
7. Visualize cluster assignments and performance metrics.

**Ships as:** A Python package or notebook implementing PRC, baseline comparison, performance plots, and a README explaining the algorithm and results.

**Stretch goal:** Add command-line interface to run experiments with varying risk and asset value parameters.

### Advanced — Extend PRC for Heterogeneous Asset Values and Location-Dependent Risk
*Effort: 3+ weeks*

You extend the PRC algorithm to handle heterogeneous asset values per agent and incorporate location-dependent risk that varies by task location rather than uniform distance-based risk. You develop a dynamic risk model and modify the expected value gain metric accordingly. You evaluate your extension on synthetic data with varied asset values and spatial risk profiles, demonstrating improved mission planning realism.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of the model assumptions and the ability to innovate on the algorithm to handle more realistic, complex scenarios.

**Grounded in:** Addresses the paper's limitation that risk and asset value are uniform and the future direction to extend the model to heterogeneous assets and location-dependent risk.

**Tech stack:** Python 3.11, NetworkX, NumPy, Matplotlib, SciPy

**Data:** Synthetic task data with assigned heterogeneous asset values and spatially varying risk maps simulated as functions over the 2D task space.

**Build it:**

1. Design a data structure to represent heterogeneous asset values per agent and per task.
2. Implement a spatial risk model that assigns risk values to tasks based on location (e.g., risk heatmap).
3. Modify the expected value gain metric in PRC to incorporate heterogeneous asset values and location-dependent risk.
4. Adapt the clustering algorithm to use the new metric and dynamically adjust cluster merges.
5. Generate synthetic datasets with heterogeneous assets and spatial risk variations.
6. Evaluate and compare the extended PRC against the original uniform model on expected mission value and cluster assignments.
7. Document the algorithm changes, assumptions, and results in a detailed README.

**Ships as:** A well-documented Python implementation of the extended PRC algorithm, evaluation scripts, visualizations of heterogeneous risk and asset value effects, and a comprehensive report.

**Stretch goal:** Incorporate a simple dynamic re-planning mechanism that updates clusters in response to simulated threat detections during mission execution.
