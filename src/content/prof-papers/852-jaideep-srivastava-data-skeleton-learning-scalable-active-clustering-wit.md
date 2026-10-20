---
title: "852 · Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures — Jaideep Srivastava"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jaideep-srivastava"
source_hash: "50ca2419e2a161263216826d79e668d5565d8303e1a317e3620c78bfd230a119"
sequence: 852
generator: "outreach-garden: managed"
---

# 852 · Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures

## At a glance

- **Professor:** Jaideep Srivastava
- **Institution:** University of Minnesota
- **Paper:** [Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures](https://arxiv.org/pdf/2509.08530)
- **Authors:** Wen-Bo Xie, Xun Fu, Bin Chen, Yan-Li Lee, Tao Deng, Tian Zou, Xin Wang, Zhen Liu, Jaideep Srivastava
- **Year:** 2025

## Paper overview

This paper presents a new method called Data Skeleton Learning (DSL) for active clustering, which is a way to group data points efficiently with minimal human input. DSL uses two sparse graphs to represent data relationships and user constraints, enabling scalable and accurate clustering even on large datasets. The method reduces computational costs and memory usage while requiring fewer user-provided constraints, making it practical for big data applications and interactive settings.

### Why it matters

**Research problem:** Active clustering methods that use pairwise constraints face challenges in computational efficiency, scalability, and memory usage when applied to large-scale datasets. Existing methods often require extensive user input and have high time and space complexity, limiting their practical use.

**Why it matters:** Efficient and scalable clustering is essential for data mining, knowledge annotation, and AI model pre-training, especially with the growing volume of data. Improving active clustering methods enables better human-machine collaboration, reduces annotation costs, and supports real-time interactive applications.

**Key contributions:**

- Introduction of DSL framework using two sparse graphs (data skeleton and minimal constraint graph) for scalable active clustering.
- Theoretical proof of DSL's ability to achieve accurate clustering with an upper bound on user-provided constraints.
- Demonstration of DSL's superior interactive efficiency and scalability on 18 datasets, including half a million entries.
- DSL's robustness to different distance metrics, enhancing its practical applicability.
- Development of a novel deduction mechanism for efficient pairwise constraint inference.

## About the professor

**Jaideep Srivastava** — University of Minnesota.

### Research links

- [Faculty/profile page](https://experts.umn.edu/en/persons/jaideep-srivastava/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph-based Machine Learning
**The paper assumes:** graph theory, graph algorithms, graph-based clustering, and active learning in machine learning
**Already in this field?** Skip this entirely if you already understand graph representations and algorithms applied in machine learning clustering contexts.

To understand the Data Skeleton Learning (DSL) method in this paper, a solid grasp of graph-based machine learning is essential, especially how sparse graphs represent data and constraints for clustering. The rigorous course provides a comprehensive foundation in machine learning concepts including clustering and graph algorithms, while the fast track offers a focused introduction to graph neural networks and graph-based learning techniques, ideal for quickly gaining intuition and practical insights.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-9 (Stanford CS229: Machine Learning Lecture 1 through Lecture 9 - Decision Trees and Ensemble Methods), about 12 hours — covering core supervised and unsupervised learning concepts, clustering, and model evaluation essential for understanding DSL's framework.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng covers fundamental machine learning topics including clustering, graph representations, and learning theory, providing the rigorous theoretical and practical background needed to fully understand DSL's approach to scalable active clustering with sparse graphs.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [GNN basics](https://www.youtube.com/playlist?list=PLHQIc6vvfJzpDa8wPJVn6N8RDDTowzTIO) — Vinícius Scala · 11 videos · 4.8h across 11 episodes

**Watch only this:** Episodes 1-4 (Introduction to Graph Neural Networks through Stacking layers of a GNN), about 1.7 hours — covering fundamental graph concepts and neural network architectures on graphs relevant to understanding DSL's graph-based clustering approach.

*Why it unblocks this paper:* This concise series on Graph Neural Networks (GNNs) from Stanford CS224W provides a focused introduction to graph-based machine learning, including graph representations and learning on graphs, which aligns well with the DSL method's use of sparse graphs and constraint inference.

*If you want all of it:* 4.8 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Data Skeleton Learning (DSL) paper, start with foundational concepts including active clustering with pairwise constraints, sparse graph representations in machine learning, constraint propagation and inference in clustering, and scalable clustering algorithms for big data. These prerequisites build the theoretical and practical background necessary to appreciate the DSL framework. Finally, focus on the core concept of the DSL framework itself to grasp the novel contributions and methodology proposed by the authors.

### Active clustering with pairwise constraints *(prerequisite)*
This section covers the fundamental problem setting that DSL addresses: clustering with minimal user input via pairwise constraints. The selected talk from the Simons Institute provides a rigorous, research-level treatment of clustering using pairwise comparisons, which is central to understanding how DSL reduces annotation effort while maintaining clustering quality.

*How the paper uses it:* DSL improves active clustering by minimizing user constraints while maintaining accuracy.

▶ [Clustering Using Pairwise Comparisons](https://www.youtube.com/watch?v=injJY6hP-9Y) — Simons Institute for the Theory of Computing · 32:37 · Streamed 10y ago

### Sparse graph representations in machine learning *(prerequisite)*
DSL relies heavily on sparse graph structures to efficiently represent data relationships and user constraints. The chosen talk by Prof. Sujay Sanghavi on clustering sparse graphs offers an advanced seminar-level insight into sparse graph clustering techniques, directly relevant to the DSL data skeleton and minimal constraint graph concepts.

*How the paper uses it:* DSL constructs sparse graphs to represent data and constraints for scalable clustering.

▶ [Prof. Sujay Sanghavi | Clustering Sparse Graphs](https://www.youtube.com/watch?v=SX7NB2gbwws) — INI Seminar Room 1 · 43:19 · 10mo ago

### Constraint propagation and inference in clustering *(prerequisite)*
DSL introduces a novel deduction mechanism to infer pairwise constraints and reduce human annotation. The selected lecture on constraint propagation from NPTEL IIT Delhi provides a detailed and rigorous explanation of constraint satisfaction and propagation algorithms, which underpin the inference strategies used in DSL.

*How the paper uses it:* DSL’s deduction mechanism infers constraints to minimize annotation effort.

▶ [Constraint Propagation](https://www.youtube.com/watch?v=AB5dWzGm-uE) — AI:Constraint Satisfaction · 31:10 · 9y ago

### Scalable clustering algorithms for big data *(prerequisite)*
Understanding scalability challenges and solutions in clustering large datasets is crucial for appreciating DSL’s contributions. The talk by Dr. Neil J. Gunther on the Universal Scalability Law provides a rigorous, research-level perspective on scalability in distributed systems, which parallels the computational efficiency goals of DSL.

*How the paper uses it:* DSL targets scalability to very large datasets with low computational cost.

▶ [Applying The Universal Scalability Law to Distributed Systems by Dr. Neil J. Gunther](https://www.youtube.com/watch?v=cuieNj3NrZ8) — Distributed Systems Conference · 1:09:44 · 7y ago

### Data Skeleton Learning framework
This section focuses on the core method of the paper, combining sparse graphs and active clustering into the DSL framework. Unfortunately, no direct author talks or advanced research presentations on DSL were found among the candidates. The best available resource is a university-level lecture on clustering, which provides foundational clustering knowledge but does not cover DSL specifically.

*How the paper uses it:* DSL framework is the central method combining sparse graphs and active clustering.

▶ [Lecture 32: Clustering I](https://www.youtube.com/watch?v=9OjRP0ZLKkk) — Data Mining - IITKGP · 26:58 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the DSL paper, start by learning the basics of active clustering with pairwise constraints, which is the core problem DSL addresses to minimize user input. Next, grasp sparse graph representations in machine learning, as DSL relies on sparse graphs for efficient data and constraint representation. Then, explore constraint propagation and inference techniques that DSL uses to deduce constraints and reduce annotation effort. Finally, study scalable clustering algorithms for big data to appreciate DSL's scalability innovations.

### Active clustering with pairwise constraints *(prerequisite)*
Active clustering uses pairwise constraints (must-link or cannot-link) provided by users to guide clustering algorithms. This approach reduces the need for fully labeled data by selectively querying the most informative pairs, improving clustering quality with minimal human input.

*How the paper uses it:* DSL addresses the challenge of minimizing user-provided pairwise constraints for efficient and accurate clustering.

▶ [Clustering Using Pairwise Comparisons](https://www.youtube.com/watch?v=injJY6hP-9Y) — Simons Institute for the Theory of Computing · 32:37 · Streamed 10y ago

### Sparse graph representations in machine learning *(prerequisite)*
Sparse graphs efficiently represent relationships in large datasets by storing only significant connections, reducing memory and computational costs. Understanding sparse graphs helps in grasping how DSL models data relationships and constraints compactly for scalability.

*How the paper uses it:* DSL constructs two sparse graphs—the data skeleton and minimal constraint graph—to represent data and user constraints efficiently.

▶ [Sparse Matrix Explained in Python | What is Sparse Matrix? | Data Science & Machine Learning](https://www.youtube.com/watch?v=6nl_4arn68k) — Learning Globe · 14:17 · 4w ago

### Constraint propagation and inference in clustering *(prerequisite)*
Constraint propagation techniques infer additional constraints from existing ones to reduce the number of queries needed. This inference helps clustering algorithms update clusters efficiently without requiring exhaustive user input.

*How the paper uses it:* DSL uses a novel deduction mechanism based on shortest paths in the constraint graph to infer constraints and minimize human annotations.

▶ [Constraint Propagation](https://www.youtube.com/watch?v=AB5dWzGm-uE) — AI:Constraint Satisfaction · 31:10 · 9y ago

### Scalable clustering algorithms for big data *(prerequisite)*
Scalable clustering algorithms handle very large datasets efficiently by optimizing computational and memory resources. Learning about scalability challenges and solutions prepares you to understand DSL's contributions to clustering half a million data points on standard hardware.

*How the paper uses it:* DSL targets scalability with low time and space complexity, enabling clustering on datasets with up to 500,000 entries.

▶ [Applying The Universal Scalability Law to Distributed Systems by Dr. Neil J. Gunther](https://www.youtube.com/watch?v=cuieNj3NrZ8) — Distributed Systems Conference · 1:09:44 · 7y ago

## Already in your library

- [12. Clustering](https://www.youtube.com/watch?v=esmzYhuFnds) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Semi-supervised Clustering: Probabilistic Models, Algorithms and Experiments](https://www.youtube.com/watch?v=vphqZIOxyZI) — also for: Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures (Jaideep Srivastava)
- [L18: Choice of K](https://www.youtube.com/watch?v=4-ycWgdMXD4) — also for: SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning (Mengxin Zheng)
- [Hierarchical Cluster Analysis \[Simply explained\]](https://www.youtube.com/watch?v=8QCBl-xdeZI) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)
- [Sparse matrices in sparse analysis - Anna Gilbert](https://www.youtube.com/watch?v=xuY9P0dZn3Q) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)
- [Sparse Random Graphs 2](https://www.youtube.com/watch?v=bGGgxgyz8Ks) — also for: Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures (Jaideep Srivastava)
- [Sparse Matrix | Sparse matrices array and linked list representations | Data Structure](https://www.youtube.com/watch?v=JYyBg2WT68E) — also for: Efficient Privacy-Preserving Sparse Matrix-Vector Multiplication Using Homomorphic Encryption (Wujie Wen)
- [Sparse vs Dense Graphs](https://www.youtube.com/watch?v=TUauNnskiwI) — also for: Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures (Jaideep Srivastava)
- [Constraint satisfaction and constraint propagation](https://www.youtube.com/watch?v=PE8SFXTRInE) — also for: Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures (Jaideep Srivastava)
- [Constraint Satisfaction: introduction](https://www.youtube.com/watch?v=_e64FiDWvqs) — also for: TLEX: An Efficient Method for Extracting Exact Timelines from TimeML Temporal Graphs (Ning Xie)
- [Understanding Constraint Propagation & Arc Consistency in AI | AC-3 Algorithm Explained](https://www.youtube.com/watch?v=z99lsGMJrOE) — also for: Sparse Representations for Fast, One-Shot Learning (Gerald J. Sussman)
- [Constraint Satisfaction Problems (CSPs) 1 - Overview | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=-IO4fPO0rxk) — also for: Approximation Algorithms for Satisfiable and Nearly Satisfiable Ordering CSPs (Yury Makarychev)
- [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)
- [StatQuest: Hierarchical Clustering](https://www.youtube.com/watch?v=7xHsRkOdVwo) — also for: Multi-Agent Sensor Data Collection with Attrition Risk (Jae C. Oh)
- [K-Means Clustering Algorithm | Geometric Intuition | Clustering | Unsupervised Learning](https://www.youtube.com/watch?v=5shTLzwAdEc) — also for: Flash-Fusion: Enabling Expressive, Low-Latency Queries on IoT Sensor Streams with LLMs (Ashutosh Dhekne)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Data Skeleton Learning (DSL) framework for scalable active clustering. Starting with a small-scale implementation of the core DSL mechanism, you then extend to running and comparing the authors' released code on a public dataset. Finally, you explore a genuine research extension by addressing one of the paper's stated limitations on noisy user constraints, showcasing your ability to innovate beyond the original work.

### Beginner — Implement DSL's Constraint Deduction Mechanism
*Effort: a weekend, ~8 hours*

You build a simplified Python prototype that implements the DSL paper's deduction mechanism for inferring pairwise constraints using shortest paths in a minimal constraint graph. The project focuses on representing a small synthetic dataset as a sparse graph, simulating user constraints, and applying the deduction logic to infer additional constraints without human input.

**Why it shows you understood the paper:** This project demonstrates you grasp the core novel deduction mechanism of DSL, which reduces annotation effort by inferring constraints efficiently. A professor would see you understand the graph-based constraint propagation central to DSL's scalability.

**Grounded in:** Development of a novel deduction mechanism for efficient pairwise constraint inference.

**Tech stack:** Python 3.11, NetworkX

**Data:** Synthetic small dataset with 50-100 points generated to form clusters; no external dataset needed.

**Build it:**

1. Generate a small synthetic dataset with clear cluster structure (e.g., 3 clusters).
2. Construct a sparse weighted directed graph (data skeleton) representing data relationships.
3. Implement a minimal constraint graph to store user-provided must-link and cannot-link constraints.
4. Implement the shortest path based deduction mechanism to infer additional constraints.
5. Simulate user queries by manually adding a few constraints and show how deduction expands them.
6. Visualize the graphs and print inferred constraints to demonstrate the deduction process.

**Ships as:** A Python script and README showing the deduction mechanism on a small synthetic dataset, with visualizations and explanations.

**Stretch goal:** Add a simple interactive CLI to allow users to input constraints and see deduction results dynamically.

### Intermediate — Run and Extend DSL on the Olivetti Face Dataset
*Effort: 1-3 weekends*

You clone and run the authors' released DSL code from https://github.com/Traveler-fx/DSL on the Olivetti Face Dataset, a publicly available benchmark. You reproduce the paper's reported clustering accuracy and constraint efficiency metrics, then implement a simple baseline active clustering method (e.g., constrained KMeans) for comparison.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the DSL framework end-to-end, and critically evaluate its performance against a baseline. It evidences your ability to apply DSL to real data and interpret its interactive efficiency metrics.

**Grounded in:** Demonstration of DSL's superior interactive efficiency and scalability on 18 datasets, including the Olivetti Face Dataset where DSL attains 100% accuracy with fewer constraints.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, Jupyter Notebook

**Data:** Olivetti Face Dataset (publicly available from scikit-learn or UCI repository) used as a substitute for the paper's data.

**Build it:**

1. Clone the DSL repository from https://github.com/Traveler-fx/DSL and set up the environment.
2. Download and preprocess the Olivetti Face Dataset for clustering.
3. Run the DSL method on the dataset and record clustering accuracy (Adjusted Rand Index) and number of user constraints.
4. Implement a baseline active clustering method with pairwise constraints (e.g., constrained KMeans).
5. Compare the baseline results with DSL in terms of accuracy and constraint efficiency.
6. Visualize and report the results in a Jupyter Notebook.

**Verified links from the paper:**

- <https://github.com/Traveler-fx/DSL> — released by the paper's authors

**Ships as:** A Jupyter Notebook demonstrating DSL and baseline clustering on Olivetti data, with plots of accuracy vs. constraints and discussion.

**Stretch goal:** Experiment with different distance metrics to verify DSL's robustness as claimed in the paper.

### Advanced — Robust DSL with Noisy User Constraints
*Effort: a few weeks*

You extend the DSL framework by implementing robustness to noisy or erroneous user-provided constraints, addressing a key limitation noted in the paper. This involves modifying the constraint graph update and deduction mechanism to tolerate and correct inconsistent constraints. You evaluate your extension on a large public dataset (e.g., a subset of the Olivetti or another image/text dataset) with simulated annotation noise.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of DSL's assumptions and limitations, and your ability to innovate by enhancing its practical applicability. It shows research-level thinking by tackling a future direction proposed by the authors.

**Grounded in:** Current method assumes error-free user constraints, which may not hold in practice and can affect clustering quality; future work includes enhancing robustness against such errors.

**Tech stack:** Python 3.11, scikit-learn, NetworkX, matplotlib, Jupyter Notebook

**Data:** A large public dataset such as a subset of Olivetti Face Dataset or another publicly available clustering benchmark; simulate noisy constraints by flipping a fraction of user constraints.

**Build it:**

1. Study the DSL codebase and identify where user constraints are incorporated and propagated.
2. Design and implement a mechanism to detect and handle inconsistent or noisy constraints (e.g., constraint confidence scores, majority voting, or constraint correction heuristics).
3. Modify the deduction mechanism to incorporate robustness to noisy constraints.
4. Simulate noisy user constraints by randomly flipping a percentage of must-link and cannot-link labels.
5. Evaluate clustering accuracy and robustness compared to original DSL under varying noise levels.
6. Document the approach, results, and limitations in a detailed README or report.

**Verified links from the paper:**

- <https://github.com/Traveler-fx/DSL> — released by the paper's authors

**Ships as:** An extended DSL implementation with robustness to noisy constraints, evaluation results showing improved clustering stability under noise, and documentation.

**Stretch goal:** Develop a collaborative annotation simulation where multiple annotators provide constraints with varying noise levels and study global consistency maintenance.
