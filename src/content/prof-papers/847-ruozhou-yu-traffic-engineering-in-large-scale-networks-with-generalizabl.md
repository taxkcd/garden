---
title: "847 · Traffic Engineering in Large-scale Networks with Generalizable Graph Neural Networks — Ruozhou Yu"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ruozhou-yu"
source_hash: "94045874f03044495850755e864a4252922db40e2436dc5823f6db8de7810054"
sequence: 847
generator: "outreach-garden: managed"
---

# 847 · Traffic Engineering in Large-scale Networks with Generalizable Graph Neural Networks

## At a glance

- **Professor:** Ruozhou Yu
- **Institution:** North Carolina State University
- **Paper:** [Traffic Engineering in Large-scale Networks with Generalizable Graph Neural Networks](https://arxiv.org/pdf/2503.24203)
- **Authors:** Fangtong Zhou, Sihao Liu, Xiaorui Liu, Ruozhou Yu, Guoliang Xue
- **Year:** 2026

## Paper overview

This paper presents TELGEN, a novel machine learning framework using graph neural networks (GNNs) to efficiently solve traffic engineering (TE) problems in very large networks. TELGEN learns to mimic classical optimization algorithms to allocate network traffic optimally, generalizing well to unseen and much larger network topologies and varying traffic demands, while significantly reducing computation time compared to traditional solvers.

### Why it matters

**Research problem:** Traffic engineering in large-scale networks like cloud WANs and satellite constellations is computationally challenging due to network size, dynamic topology and traffic changes, and the need for real-time solutions. Existing optimization methods are too slow and learning-based methods lack generalizability and often violate constraints.

**Why it matters:** Efficient and scalable traffic engineering is critical for managing modern networks supporting billions of applications and users. Poor TE leads to congestion, degraded performance, higher costs, and revenue loss. Real-time adaptability is essential for dynamic networks such as LEO satellite constellations where topology changes rapidly.

**Key contributions:**

- A flexible GNN architecture modeling TE problems agnostic to network topology, size, and traffic demands.
- A supervised learning approach mimicking classical IPM algorithm steps to efficiently solve large-scale TE problems.
- Extensive evaluation on random and real-world topologies up to 5000 nodes demonstrating superior optimality, training efficiency, inference speed, and generalizability.

## About the professor

**Ruozhou Yu** — Associate Professor, Department of Computer Science, North Carolina State University.

Research interests: computer networks, distributed systems and cybersecurity, with an emphasis on designing high-performance, secure and practical systems for smart and connected communities, Internet of Things, cloud and edge computing, satellite computing and networks, wireless and mobile networks, data analytics and machine learning, blockchain and quantum networking, algorithm design, game theory, optimization and provable security

### Research links

- [Faculty/profile page](https://csc.ncsu.edu/people/ryu5)
- [Professor website](https://ruozhouy.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=WbFCWFsAAAAJ)
- [DBLP](https://dblp.uni-trier.de/pers/hd/y/Yu:Ruozhou)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, interior-point methods, linear programming formulations
**Already in this field?** Skip this entirely if you already understand convex optimization fundamentals, interior-point algorithms, and linear programming.

Understanding convex optimization, especially the interior-point method (IPM), is crucial for grasping the methodology and contributions of the TELGEN paper, which formulates traffic engineering as a linear program solved via a novel GNN architecture mimicking IPM iterations. The rigorous course option offers a comprehensive, university-level deep dive into convex optimization fundamentals and algorithms, while the fast track provides a shorter, focused series of lectures that cover core concepts efficiently for quicker background preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 10, about 13 hours — covering convex sets, functions, problem formulation, and interior-point methods to understand the optimization foundation and algorithmic alignment in TELGEN.

*Why it unblocks this paper:* This is a well-structured, authoritative Stanford course by Stephen Boyd, a leading expert in convex optimization, covering convex sets, functions, optimization problems, and algorithms including interior-point methods, directly relevant to the paper's approach.

*If you want all of it:* All 18 lectures, about 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Optimization Algorithms](https://www.youtube.com/playlist?list=PLXsmhnDvpjORzPelSDs0LSDrfJcqyLlZc) — Constantine Caramanis · 58 videos · 27.7h across 58 episodes

**Watch only this:** Episodes 1.1 through 2.5, about 3.5 hours — covering introduction, convex sets and functions, and optimality conditions to quickly build the core understanding needed for the paper.

*Why it unblocks this paper:* This concise lecture series by Constantine Caramanis focuses on algorithms for convex optimization, providing clear, intuition-driven explanations of key concepts and methods including optimality conditions and Newton steps, which are essential for understanding the supervised learning approach in TELGEN.

*If you want all of it:* All 58 episodes, about 27.7 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TELGEN paper, start with foundational concepts in optimization and graph neural networks, as TELGEN builds on interior-point methods and novel GNN architectures. Then, study classical traffic engineering optimization to grasp the problem context. Finally, focus on the paper's core contribution by reviewing the authors' own talk or the best available advanced material on TELGEN's approach.

### Interior-point method optimization *(prerequisite)*
Interior-point methods are central to TELGEN's approach, as the framework mimics the classical IPM algorithm steps to solve traffic engineering problems efficiently. Understanding the theory and mechanics of IPM will clarify how TELGEN approximates Newton steps and achieves strong supervision.

*How the paper uses it:* TELGEN uses a novel double-looped GNN architecture aligned with the interior-point method algorithm for strong supervision and generalizability.

▶ [Lecture 19 | Convex Optimization I (Stanford)](https://www.youtube.com/watch?v=HZW-9Ar0iVc) — Stanford · 18y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the TELGEN framework for traffic engineering in large-scale networks. It starts with the basics of traffic engineering optimization to grasp the problem TELGEN solves, then covers interior-point methods as the classical optimization technique TELGEN mimics. Next, it explains graph neural networks, the core machine learning architecture enabling TELGEN's scalability and generalization. Finally, it highlights the supervised learning approach used to approximate classical algorithm steps. This progression builds intuition from problem context to advanced ML methods applied in the paper.

### Traffic engineering optimization *(prerequisite)*
Traffic engineering involves optimizing how data flows through a network to avoid congestion and improve performance. Understanding the classical formulation and challenges of TE problems provides context for why new methods like TELGEN are needed.

*How the paper uses it:* TELGEN addresses the computational challenges of classical traffic engineering optimization in large-scale networks.

▶ [Lec-18_Traffic Engineering | Telecommunication Engineering | ICT Engineering](https://www.youtube.com/watch?v=9Rc_XrgN9kA) — Computer_IT_ICT Engineering Department : LJIET · 5y ago

### Interior-point method optimization *(prerequisite)*
Interior-point methods are powerful algorithms for solving constrained optimization problems efficiently by iteratively improving solutions while staying within feasible regions. Learning how IPM works helps understand the classical algorithm TELGEN is designed to mimic.

*How the paper uses it:* TELGEN uses a double-looped GNN architecture aligned with the interior-point method to approximate its Newton steps.

▶ [Interior Point Method for Optimization](https://www.youtube.com/watch?v=zm4mfr-QT1E) — APMonitor.com · 10y ago

## Already in your library

- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [AI Explained - Graph Neural Networks | How AI Uses Graphs to Accelerate Innovation](https://www.youtube.com/watch?v=epVW0_iVBX8) — also for: CableRobotGraphSim: A Graph Neural Network for Modeling Partially Observable Cable-Driven Robot Dynamics (Mridul Aanjaneya)
- [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [Lec-2: Supervised Learning Algorithms | Machine Learning](https://www.youtube.com/watch?v=LKlOH8OLLcw) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [Lecture 11 - Graph Neural Networks (GNNs)](https://www.youtube.com/watch?v=FaqkCfv5LTg) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of TELGEN's approach to traffic engineering using graph neural networks. The beginner project focuses on reproducing a core concept of representing a small TE problem as a graph and visualizing it. The intermediate project builds on the authors' released code to run and extend TELGEN on smaller networks, comparing its performance to a baseline solver. The advanced project tackles one of the paper's stated future directions by adapting TELGEN to a dynamic wireless network scenario with variable link capacities, exploring temporal adaptation and online learning.

### Beginner — Graph Representation of Traffic Engineering Problems
*Effort: a weekend, ~8 hours*

You build a small Python tool that takes a simple network topology and traffic demand input, formulates the corresponding traffic engineering linear program variables and constraints, and constructs a graph representation as described in TELGEN. You then visualize this graph using a graph visualization library to illustrate how variables, constraints, and objectives map to nodes and edges.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental step of TELGEN's approach: representing TE problems as graphs that capture variables, constraints, and objectives, which is essential for applying GNNs.

**Grounded in:** TELGEN formulates TE as a linear program and represents it as a graph capturing variables, constraints, and objectives.

**Tech stack:** Python 3.11, networkx, matplotlib

**Data:** You create a small synthetic network topology with a few nodes and traffic demands to simulate a TE problem, as no public dataset is provided for this step.

**Build it:**

1. Define a small network topology with nodes and links and specify traffic demands between node pairs.
2. Formulate the TE problem variables and constraints as per the paper's description of the linear program.
3. Construct a graph where nodes represent variables and constraints, and edges represent their relationships.
4. Use networkx to build and matplotlib to visualize the graph structure.
5. Document the mapping from TE problem elements to graph components in the README.

**Ships as:** A Python script and README showing the graph representation of a small TE problem, with visualizations and explanations linking back to TELGEN's formulation.

**Stretch goal:** Add a simple heuristic solver to solve the small TE problem and highlight how the graph representation could support learning-based methods.

### Intermediate — Run and Extend TELGEN on Small Networks
*Effort: 1-3 weekends*

You clone and run the TELGEN codebase from the authors' GitHub repository on small to medium-sized network topologies. You reproduce key metrics such as optimality gap and inference speed compared to a classical interior-point method solver. You then extend the evaluation by testing on a new small synthetic or publicly available network topology and traffic demand scenario, reporting TELGEN's generalization performance.

**Why it shows you understood the paper:** This project shows you can work with the authors' implementation, understand the supervised learning approach mimicking IPM iterations, and evaluate TELGEN's generalizability and efficiency claims.

**Grounded in:** Extensive evaluation on random and real-world topologies up to 5000 nodes demonstrating superior optimality, training efficiency, inference speed, and generalizability.

**Tech stack:** Python 3.11, PyTorch, TELGEN codebase from https://github.com/Amihua/TELGEN

**Data:** Use the network topologies and traffic demand datasets included or referenced in the TELGEN repository; if none are provided, synthesize small random topologies and demands as described in the paper.

**Build it:**

1. Clone the TELGEN repository and set up the environment following the authors' instructions.
2. Run training and inference on provided small network topologies to reproduce baseline results.
3. Implement or source a classical IPM solver baseline for comparison if not included.
4. Create or obtain a new small synthetic network topology and traffic demand dataset.
5. Evaluate TELGEN's performance on this new data, measuring optimality gap and inference speed.
6. Document results, methodology, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/Amihua/TELGEN> — released by the paper's authors

**Ships as:** A forked TELGEN repository with scripts and documentation showing reproduction and extension of TELGEN's evaluation on new small networks, including comparative metrics.

**Stretch goal:** Modify the GNN architecture or training supervision to experiment with different iteration counts or loss functions and analyze effects on performance.

### Advanced — Adapting TELGEN for Dynamic Wireless Networks with Temporal Adaptation
*Effort: a few weeks*

You develop an extension of TELGEN that incorporates temporal information and online adaptation mechanisms to handle dynamic wireless network scenarios with variable link capacities and interference, addressing a key limitation noted in the paper. This involves designing a temporal GNN architecture or integrating recurrent components to model continuous network dynamics and implementing an online learning or adaptation loop.

**Why it shows you understood the paper:** This project tackles a stated future direction of TELGEN, demonstrating deep comprehension of its architecture and limitations, and the ability to innovate by extending it to more complex, realistic network settings.

**Grounded in:** Future directions include incorporating temporal information and online adaptation mechanisms for continuous network dynamics and extending TELGEN to dynamic wireless networks with interference and variable link capacities.

**Tech stack:** Python 3.11, PyTorch, TELGEN codebase from https://github.com/Amihua/TELGEN, PyTorch Geometric or DGL for GNN extensions

**Data:** Simulate dynamic wireless network topologies with time-varying link capacities and interference patterns; no public dataset is provided, so you create synthetic temporal network data based on realistic wireless network models.

**Build it:**

1. Study TELGEN's existing GNN architecture and training pipeline from the codebase.
2. Design a temporal GNN model by adding recurrent layers or temporal message passing to capture network dynamics.
3. Implement an online adaptation mechanism that updates the model or its outputs as network states change.
4. Generate synthetic dynamic wireless network data with variable link capacities and interference over time.
5. Train and evaluate the extended TELGEN model on this data, measuring performance and adaptability.
6. Document the design, implementation, evaluation, and challenges encountered.

**Verified links from the paper:**

- <https://github.com/Amihua/TELGEN> — released by the paper's authors

**Ships as:** A repository with code and documentation demonstrating a temporal extension of TELGEN for dynamic wireless networks, including synthetic data generation scripts and evaluation results.

**Stretch goal:** Explore a decentralized or distributed version of TELGEN with multiple agents controlling subnetworks, as another future direction.
