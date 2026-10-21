---
title: "919 · Bellman Value Decomposition for Task Logic in Safe Optimal Control — Sylvia L. Herbert"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sylvia-l-herbert"
source_hash: "180b354cd4011bd35790508a9bd59cd4edc2810298146c36b9625cb6df51fd30"
sequence: 919
generator: "outreach-garden: managed"
---

# 919 · Bellman Value Decomposition for Task Logic in Safe Optimal Control

## At a glance

- **Professor:** Sylvia L. Herbert
- **Institution:** Univ. of California - San Diego
- **Paper:** [Bellman Value Decomposition for Task Logic in Safe Optimal Control](https://arxiv.org/pdf/2602.19532)
- **Authors:** William Sharpless, Oswin So, Dylan Hirsch, Sylvia Herbert, Chuchu Fan
- **Year:** 2026

## Paper overview

This paper introduces a novel method to solve complex robotic tasks that require both safety and goal achievement by decomposing the value function associated with temporal logic specifications into simpler components. The authors propose an algorithm called VDPPO that leverages this decomposition to efficiently learn optimal policies for high-dimensional, safety-critical tasks. The approach is validated through simulations and real-world experiments involving drones and quadruped robots, showing improved performance over existing methods.

### Why it matters

**Research problem:** How to efficiently and optimally solve complex, high-dimensional control tasks specified by temporal logic that involve nuanced combinations of goals and safety constraints, overcoming challenges like sparse rewards, complex task logic, and scalability.

**Why it matters:** Robotic systems operating in real-world environments must satisfy complex temporal and safety specifications reliably. Traditional reinforcement learning struggles with sparse rewards and complex temporal logic, limiting applicability in safety-critical domains. A scalable, theoretically grounded approach to handle these specifications is crucial for advancing autonomous systems.

**Key contributions:**

- Formal connection between temporal logic and Bellman Value functions via Value Decomposition Rules (VDR).
- Proof that a broad class of temporal logic Value functions decompose into graphs of atomic Bellman equations including a novel Reach-Avoid-Loop BE.
- Introduction of VDPPO, an algorithm embedding the decomposed Value graph into neural networks for simultaneous learning of all sub-Values and policies.
- Development of valtr, a tool to convert temporal logic specifications into decomposed Value graphs.
- Validation of the approach on complex, high-dimensional simulated and real-world robotic tasks involving heterogeneous teams and nonlinear dynamics.

## About the professor

**Sylvia L. Herbert** — Associate Professor, Mechanical and Aerospace Engineering, Univ. of California - San Diego.

Research interests: New techniques for safety and efficiency in autonomous systems; scalable safety and real-time decision making; control theory; cognitive science; reinforcement learning.

### Research links

- [Faculty/profile page](https://jacobsschool.ucsd.edu/faculty/profile?id=516)
- [Professor website](http://sylviaherbert.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning and Bellman Equations
**The paper assumes:** Markov decision processes, Bellman equations, policy gradient methods, and value function decomposition in reinforcement learning
**Already in this field?** Skip this entirely if you have a solid understanding of reinforcement learning fundamentals, including Bellman equations and policy optimization algorithms.

This background focuses on reinforcement learning fundamentals, Bellman equations, and policy optimization methods essential to understanding the paper's core contributions on value decomposition and the VDPPO algorithm. The rigorous course option provides a comprehensive, university-level deep dive into these topics, while the fast track offers a shorter, more accessible introduction covering the key concepts efficiently. Choose the course for a thorough grasp or the fast track for a quicker, intuition-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1 to 6 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods, Off-Policy Actor Critic, Q-Learning), about 6.5 hours — these cover the essential RL algorithms and Bellman equation foundations needed to understand VDPPO.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a recent, authoritative course taught by Stanford Online that covers policy gradients, actor-critic methods, Bellman equations, and advanced RL topics directly relevant to the paper's algorithmic foundations and value decomposition framework.

*If you want all of it:* All 19 lectures, about 20.6 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Jadavpur University, 2025: Introduction to Reinforcement Learning](https://www.youtube.com/playlist?list=PLcNLn_ApooUzGJW60RcD2HRrL7sm0HG-w) — Mainak's PMRF Tutorials · 21 videos · 38.5h across 21 episodes

**Watch only this:** Sessions 7 to 10 (MDPs, Action, Value, Reward functions, Bellman Equations 1, Examples; Stochastic Shortest Path, Bellman Operators, Proof of convergence of Policy Evaluation; Policy Iteration & Q learning code, Finite Horizon MDPs, Dynamic Program, Theory and Examples; Actor Critic based Policy Gradient, Safe RL, Planning, DYNA, Curriculum Learning), about 7 hours — these sessions cover the Bellman framework and policy optimization relevant to the paper.

*Why it unblocks this paper:* The Jadavpur University 2025 Introduction to Reinforcement Learning playlist provides a concise, well-structured introduction to RL fundamentals including Bellman equations and policy learning, suitable for quickly grasping the core concepts underlying the paper's approach.

*If you want all of it:* All 21 sessions, about 38.5 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Bellman Value Decomposition for Task Logic in Safe Optimal Control," start by building a strong foundation in temporal logic for control and Bellman equations in reinforcement learning, as these underpin the paper's theoretical framework. Next, study value function decomposition and safe optimal control to grasp the key techniques and safety integration in control policies. Finally, focus on the paper's core contribution, the VDPPO algorithm, for learning decomposed value functions and policies efficiently.

### Temporal logic in control *(prerequisite)*
Temporal logic is fundamental for specifying complex robotic tasks and safety constraints over time. Understanding its formal semantics and applications in control systems enables comprehension of how the paper decomposes temporal logic specifications into value functions.

*How the paper uses it:* The paper leverages temporal logic to specify complex task goals and safety constraints that are decomposed via Value Decomposition Rules.

▶ [Hybrid Systems TC Distinguished Seminar - Dr. Agung Julius](https://www.youtube.com/watch?v=Lz0cgMUWNUo) — IEEE CSS Hybrid Systems TC · 59:06 · 1y ago

### Bellman equations in reinforcement learning *(paper-talk search result; attribution unverified)*
Bellman equations form the core mathematical framework for value functions and policy optimization in reinforcement learning. A rigorous understanding of these equations is essential to grasp the paper's novel decomposition of Bellman value functions for temporal logic predicates.

*How the paper uses it:* The paper establishes algebraic rules to decompose Bellman Value functions, making Bellman equations central to its approach.

▶ [Lecture 19 (Bellman Eq.)](https://www.youtube.com/watch?v=4R6kDYDcq8U) — JHU Learning Theory · 1:08:13 · 12y ago

### Value function decomposition *(prerequisite)*
Value function decomposition techniques enable scalable learning by breaking down complex value functions into simpler components. This concept is key to understanding how the paper manages the complexity of temporal logic specifications in high-dimensional control tasks.

*How the paper uses it:* The paper's Value Decomposition Rules formally connect temporal logic to decomposed Bellman Value functions, enabling scalable policy learning.

▶ [Transformer based Value Function Decomposition for Cooperative Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=dZhjtpAbIzs) — AIIDE Conference · 5:19 · 3y ago

### Safe optimal control *(prerequisite)*
Safe optimal control integrates safety constraints into control policies, ensuring reliable operation in safety-critical environments. This background is necessary to appreciate how the paper addresses safety within its decomposed value function framework.

*How the paper uses it:* The paper focuses on safe optimal control by ensuring temporal logic specifications involving safety are satisfied in learned policies.

▶ [Stanford Seminar - Safe and Robust Perception-Based Control](https://www.youtube.com/watch?v=Lgka_EgCtnY) — Stanford Online · 56:27 · 6y ago

### VDPPO algorithm
The VDPPO algorithm is the paper's central contribution, jointly learning decomposed value functions and policies using neural networks with shared embeddings. Understanding PPO and its adaptations is crucial to grasp how the paper achieves efficient learning for complex temporal logic tasks.

*How the paper uses it:* VDPPO is the novel algorithm proposed to efficiently learn optimal policies from decomposed value graphs derived from temporal logic.

▶ [6. Proximal Policy Optimisation](https://www.youtube.com/watch?v=xgbe95BxY7k) — EdwardJamesYoung · 1:03:07 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's approach to safe optimal control with temporal logic, start by building a foundation in temporal logic as it specifies complex task goals and safety constraints. Next, learn the Bellman equations in reinforcement learning, which underpin value functions and policy optimization. Then, grasp value function decomposition, the key technique enabling scalable learning by breaking down complex value functions. Finally, explore safe optimal control concepts to see how safety constraints integrate into control policies, preparing you to understand the paper's novel VDPPO algorithm that jointly learns decomposed value functions and policies efficiently.

### Temporal logic in control *(prerequisite)*
Temporal logic provides a formal language to specify how tasks and safety requirements evolve over time in control systems. Understanding temporal logic helps you interpret the complex task specifications the paper addresses, such as sequences of goals and safety constraints.

*How the paper uses it:* The paper decomposes temporal logic specifications into simpler value functions, so grasping temporal logic is essential to follow this decomposition.

▶ [Lecture 13 - Specification; Temporal Logic](https://www.youtube.com/watch?v=_BlYJXuEmQk) — Thiết Kế Vi Mạch Semicon · 45:21 · 6y ago

### Bellman equations in reinforcement learning *(prerequisite)*
Bellman equations define how the value of a state relates to immediate rewards and future values, forming the mathematical backbone of reinforcement learning. Learning these equations builds intuition for how policies optimize long-term rewards.

*How the paper uses it:* The paper decomposes Bellman value functions corresponding to temporal logic predicates, making Bellman equations central to its method.

▶ [Bellman Equation - Explained!](https://www.youtube.com/watch?v=9JZID-h6ZJ0) — CodeEmporium · 9:05 · 2y ago

### Value function decomposition *(prerequisite)*
Value function decomposition breaks a complex value function into simpler components, enabling scalable learning in high-dimensional tasks. This technique allows efficient policy learning by handling subproblems separately but jointly.

*How the paper uses it:* The paper's key contribution is formalizing value decomposition rules to handle temporal logic tasks, so understanding this concept is critical.

▶ [Reinforcement Learning - Lecture 4 (Value Functions and Policy Evaluation)](https://www.youtube.com/watch?v=dvaRnnpMqG0) — Jabrah Tutorials · 45:47 · 7y ago

### Safe optimal control *(prerequisite)*
Safe optimal control integrates safety constraints into control policies to ensure reliable operation in real-world environments. It balances achieving goals while avoiding unsafe states.

*How the paper uses it:* The paper focuses on safe optimal control for robots under temporal logic constraints, making this concept foundational.

▶ [Stanford Seminar - Safe and Robust Perception-Based Control](https://www.youtube.com/watch?v=Lgka_EgCtnY) — Stanford Online · 56:27 · 6y ago

### VDPPO algorithm
VDPPO is the paper's novel algorithm that jointly learns decomposed value functions and policies using neural networks with shared embeddings. It leverages the value decomposition graph to efficiently solve complex temporal logic tasks.

*How the paper uses it:* Understanding VDPPO is essential to grasp how the paper achieves scalable, safe, and optimal control under temporal logic specifications.

▶ [Proximal Policy Optimization (PPO) - How to train Large Language Models](https://www.youtube.com/watch?v=TjHH_--7l8g) — Luis Serrano Academy · 38:24 · 2y ago

## Already in your library

- [Advanced 6. Planning with Temporal Logic](https://www.youtube.com/watch?v=Tmhe33f9mWA) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — also for: Formalizing MLTL Formula Progression in Isabelle/HOL (Katherine Kosaian)
- [Lecture 17 - MDPs & Value/Policy Iteration | Stanford CS229: Machine Learning Andrew Ng (Autumn2018)](https://www.youtube.com/watch?v=d5gaWTo6kDM) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra](https://www.youtube.com/watch?v=PFDu9oVAE-g) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)
- [SVD Visualized, Singular Value Decomposition explained | SEE Matrix , Chapter 3 #SoME2](https://www.youtube.com/watch?v=vSczTbgc8Rc) — also for: QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models (Sai Qian Zhang)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)
- [EE 564: Lecture 1 (Optimal Control): Optimal Control Problem Formulation](https://www.youtube.com/watch?v=qLfGHizumhI) — also for: Noise Schedule Design for Diffusion Models: An Optimal Control Perspective (Weina Wang)
- [L4 TRPO and PPO (Foundations of Deep RL Series)](https://www.youtube.com/watch?v=KjWF8VIMGiY) — also for: PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL (Mina Guirguis)
- [Proximal Policy Optimization | ChatGPT uses this](https://www.youtube.com/watch?v=MVXdncpCbYE) — also for: PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL (Mina Guirguis)
- [Proximal Policy Optimization (RVLS 2021 version)](https://www.youtube.com/watch?v=uRNL93jV2HE) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Proximal Policy Optimization (PPO) for LLMs Explained Intuitively](https://www.youtube.com/watch?v=8jtAzxUwDj0) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Bellman Value Decomposition approach for temporal logic in safe optimal control. The beginner project familiarizes you with temporal logic and value decomposition concepts through a small-scale implementation. The intermediate project involves reimplementing the core VDPPO algorithm on a simplified task and comparing it to a baseline, gaining experience with reinforcement learning and neural network embeddings. The advanced project extends the method to address one of the paper's stated limitations, exploring scalability improvements via heuristic pruning of the decomposed Value graph.

### Beginner — Temporal Logic Value Decomposition Demo
*Effort: a weekend, ~8 hours*

You build a small Python script that parses a simple temporal logic specification (e.g., Reach-Avoid) and manually decomposes its Bellman Value function into atomic components following the Value Decomposition Rules described in the paper. Then you implement the corresponding atomic Bellman equations and simulate value iteration updates on a toy gridworld environment with deterministic dynamics.

**Why it shows you understood the paper:** This project demonstrates you understand the formal connection between temporal logic and Bellman Value functions via decomposition, and can translate temporal logic predicates into value function graphs and atomic Bellman updates.

**Grounded in:** Formal connection between temporal logic and Bellman Value functions via Value Decomposition Rules (VDR) as established in Section VI.A and Theorem 1.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** A synthetic 5x5 gridworld environment with deterministic transitions, designed by you to illustrate Reach and Avoid predicates.

**Build it:**

1. Implement a simple parser for a small subset of temporal logic formulas (e.g., Reach, Avoid, Reach-Avoid).
2. Manually decompose the parsed formula into atomic Bellman Value components using the Value Decomposition Rules.
3. Implement atomic Bellman update functions for Reach and Avoid predicates.
4. Create a deterministic gridworld environment with obstacles and goal states.
5. Run value iteration updates on each atomic component and visualize the value functions.
6. Demonstrate how the decomposed values combine to represent the original temporal logic specification.

**Ships as:** A Python repository with scripts and Jupyter notebooks showing temporal logic parsing, value decomposition, atomic Bellman updates, and visualizations of value functions on a toy gridworld.

**Stretch goal:** Add support for the novel Reach-Avoid-Loop Bellman equation and demonstrate its value iteration convergence on a cyclic environment.

### Intermediate — VDPPO Reimplementation on Simplified Multi-Goal Task
*Effort: 2 weekends, ~20 hours*

You reimplement the core VDPPO algorithm from the paper based on its detailed description, applying it to a simplified simulated environment with a small number of sequential goals and safety constraints. You train neural network policies and value functions jointly for the decomposed Value graph nodes, using shared embeddings. You compare VDPPO's success rate against a standard PPO baseline on the same task.

**Why it shows you understood the paper:** This project shows you can translate the paper's core algorithmic contribution into working code, understand the joint learning of decomposed values and policies, and evaluate performance improvements on temporal logic tasks.

**Grounded in:** Introduction of VDPPO algorithm embedding the decomposed Value graph into neural networks for simultaneous learning of all sub-Values and policies, described in Section VII and validated in Section VIII.B.

**Tech stack:** Python 3.11, PyTorch, NumPy, Gym (for environment simulation)

**Data:** A custom simulated environment with 5-10 sequential reach and avoid goals, deterministic dynamics, designed by you to mimic the paper's task logic complexity at a smaller scale.

**Build it:**

1. Implement a parser or hardcode a small decomposed Value graph for a temporal logic specification with multiple sequential goals.
2. Implement the VDPPO algorithm with shared neural network embeddings for actor and critic across decomposed Value nodes.
3. Create a Gym-compatible environment simulating the multi-goal reach-avoid task with deterministic transitions.
4. Train VDPPO policies and value functions jointly on the environment.
5. Implement a PPO baseline agent on the same environment for comparison.
6. Evaluate and plot success rates and learning curves comparing VDPPO and PPO.

**Ships as:** A PyTorch-based repository with VDPPO implementation, environment code, training scripts, and evaluation plots demonstrating improved performance over PPO on a simplified temporal logic task.

**Stretch goal:** Extend the environment to include a recurrent Reach-Avoid-Loop specification and adapt VDPPO to learn it.

### Advanced — Heuristic Pruning for Scalable VDPPO on Multi-Goal Tasks
*Effort: 3+ weeks*

You extend the VDPPO framework by implementing a heuristic pruning method to dynamically reduce the size of the decomposed Value graph during learning, addressing the exponential growth limitation for any-order multi-goal tasks. You evaluate the pruning strategy's impact on training efficiency and success rate on larger multi-goal simulated tasks.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions, and the ability to innovate by integrating heuristic graph pruning to improve scalability of the Bellman Value Decomposition approach.

**Grounded in:** Limitation of exponential growth in decomposed Values for any-order multi-goal tasks and future direction to develop approximations to mitigate this, discussed in Section X.

**Tech stack:** Python 3.11, PyTorch, NumPy, Gym

**Data:** Simulated multi-goal reach-avoid environments with up to 20 sequential goals, designed by you to test scalability and pruning effectiveness.

**Build it:**

1. Reimplement or reuse your intermediate VDPPO codebase with decomposed Value graph construction.
2. Design and implement heuristic pruning criteria (e.g., priority-based node selection, thresholding on value estimates) to dynamically prune the decomposed Value graph during training.
3. Modify the VDPPO training loop to incorporate pruning and handle dynamic graph changes.
4. Create larger multi-goal simulated environments to stress test scalability.
5. Train VDPPO with and without pruning, measuring training time, memory usage, and success rates.
6. Analyze and visualize the trade-offs introduced by pruning.

**Ships as:** A research-style codebase and report showing heuristic pruning integrated into VDPPO, with empirical results demonstrating improved scalability on complex multi-goal tasks.

**Stretch goal:** Explore partial subgraph approximations or stochastic extensions of VDPPO as further scalability improvements.
