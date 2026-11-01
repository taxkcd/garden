---
title: "986 · SIT-LMPC: Safe Information-Theoretic Learning Model Predictive Control for Iterative Tasks — Truong Nghiem"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-truong-nghiem"
source_hash: "206ef09a8391906b91d8ec5066d4fc937adad468a560b9ae99caeff1967ec20a"
sequence: 986
generator: "outreach-garden: managed"
---

# 986 · SIT-LMPC: Safe Information-Theoretic Learning Model Predictive Control for Iterative Tasks

## At a glance

- **Professor:** Truong Nghiem
- **Institution:** Northern Arizona University
- **Paper:** [SIT-LMPC: Safe Information-Theoretic Learning Model Predictive Control for Iterative Tasks](https://arxiv.org/pdf/2602.16187)
- **Authors:** Zirui Zang, Ahmad Amine, Nick-Marios T. Kokolakis, Truong X. Nghiem, Ugo Rosolia, Rahul Mangharam
- **Year:** 2025

## Paper overview

This paper presents SIT-LMPC, a new control algorithm designed for robots performing repetitive tasks in uncertain and complex environments. It combines learning from past experiences with a safety-focused control strategy that balances performance and constraint satisfaction. The method uses advanced probabilistic modeling and parallel computing to efficiently generate safe and optimized control actions in real time. Experiments on simulated and real robotic systems show that SIT-LMPC improves safety and performance compared to previous methods.

### Why it matters

**Research problem:** Developing control strategies for iterative robotic tasks in complex, uncertain environments that ensure safety (constraint satisfaction) while improving performance over successive executions, especially for stochastic nonlinear systems with state constraints.

**Why it matters:** Robots in real-world applications must operate safely and efficiently despite uncertainties and complex dynamics. Existing methods either lack safety guarantees, are overly conservative, or fail to scale to nonlinear stochastic systems. Improving control methods for such tasks enables safer, more reliable, and higher-performing autonomous systems in applications like autonomous racing, navigation, and robotic manipulation.

**Key contributions:**

- Extension of LMPC to stochastic nonlinear systems with general state constraints.
- Development of a constrained information-theoretic MPC algorithm using exterior penalty functions with an online adaptive penalty method to balance safety and optimality.
- Use of normalizing flows to learn the iteration value function from previous trajectories, enabling richer uncertainty modeling than Gaussian or Bayesian neural network approaches.
- A fully parallelized implementation on GPUs enabling real-time control at 100Hz+ on a scaled autonomous vehicle.
- Comprehensive validation through simulations on linear and nonlinear stochastic systems and real-world experiments on a 1/5th scale off-road autonomous race car.

## About the professor

**Truong Nghiem** — Northern Arizona University.

Research interests: integration of control, optimization, machine learning and computation to address cyber-physical system challenges across various domains

### Research links

- [Faculty/profile page](https://truong.nxtlab.org)
- [Identity evidence](https://www.cecs.ucf.edu/faculty/truong-nghiem)
- [Professor website](https://www.cecs.ucf.edu/faculty/truong-nghiem/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Stochastic Optimal Control
**The paper assumes:** stochastic optimal control theory, constrained nonlinear control systems, model predictive control fundamentals
**Already in this field?** Skip this entirely if you already have a solid understanding of stochastic optimal control and model predictive control for nonlinear systems.

To understand the SIT-LMPC paper, a solid grasp of stochastic optimal control is essential, as it underpins the formulation and solution of the constrained stochastic nonlinear control problem using information-theoretic MPC. The rigorous course option offers a deep, structured university-level treatment of optimal and learning-based control, ideal for those seeking comprehensive mastery. The fast track provides a concise, intuition-focused introduction to stochastic control theory, suitable for readers who want a quick but clear conceptual foundation before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [AA203 Optimal and Learning-Based Control | Spring 2026](https://www.youtube.com/playlist?list=PLa9dmHsLK9dg) — Stanford Online · 19 videos

**Watch only this:** Lectures 1-6, about 6 hours — covering fundamentals of optimal control, stochastic systems, and learning-based control principles to understand the problem formulation and solution approach in SIT-LMPC.

*Why it unblocks this paper:* This Stanford Online course on Optimal and Learning-Based Control covers foundational and advanced topics in stochastic optimal control and learning-based methods, directly relevant to the paper's extension of LMPC to stochastic nonlinear systems and its information-theoretic MPC approach.

*If you want all of it:* All 19 lectures, approximately 19 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Stochastic Control Theory](https://www.youtube.com/playlist?list=PLhvw3mw86d7d716QYXuWeYu_MrqXWwPaH) — Xiangyu Meng · 7 videos · 2.1h across 7 episodes

**Watch only this:** Episodes 1-4, about 1.1 hours — covering problem formulation, estimation, multivariate normal distributions, and geometric interpretations to quickly build intuition on stochastic control relevant to SIT-LMPC.

*Why it unblocks this paper:* This short series by Xiangyu Meng provides a clear and concise introduction to stochastic control theory with focused episodes on estimation and control for stochastic discrete-time systems, which aligns well with the paper's core concepts of handling uncertainty and constraints in control.

*If you want all of it:* All 7 episodes, approximately 2.1 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SIT-LMPC paper, start with foundational concepts that underpin the method: Model Predictive Path Integral (MPPI) control as the core information-theoretic MPC technique, normalizing flows for advanced uncertainty modeling, adaptive penalty methods for constrained optimization balancing safety and performance, and GPU parallelization enabling real-time control. Then, study the central framework of Learning Model Predictive Control (LMPC), which SIT-LMPC extends. Finally, focus on the paper's core concept itself, SIT-LMPC, through the authors' own talk or closest available academic presentation to grasp the novel contributions and experimental validations.

### Model Predictive Path Integral control *(prerequisite)*
MPPI is the core information-theoretic Model Predictive Control method integrated into SIT-LMPC. Understanding MPPI's sampling-based approach to solving stochastic optimal control problems is essential to grasp how SIT-LMPC formulates and solves its constrained optimization problem in real time.

*How the paper uses it:* SIT-LMPC builds on the information-theoretic MPPI control framework as a fundamental component.

▶ [LTC21 Tutorial MPPI](https://www.youtube.com/watch?v=19QLyMuQ_BE) — Neuromorphic Workshop Telluride · 23:16 · 5y ago

### Normalizing flows for uncertainty modeling *(prerequisite)*
Normalizing flows are a class of deep generative models used to learn complex probability distributions. In SIT-LMPC, they enable richer and more flexible uncertainty modeling of the iteration value function compared to Gaussian or Bayesian neural network approaches.

*How the paper uses it:* The paper uses normalizing flows to learn the iteration value function from previous trajectories for better uncertainty representation.

▶ [Stanford CS236: Deep Generative Models I 2023 I Lecture 7 - Normalizing Flows](https://www.youtube.com/watch?v=m6dKKRsZwBQ) — Stanford Online · 1:23:02 · 2y ago

### Adaptive penalty methods in constrained optimization *(prerequisite)*
Adaptive penalty methods transform constrained optimization problems into unconstrained ones by dynamically adjusting penalty parameters. This technique is crucial in SIT-LMPC to balance safety constraints and optimality without being overly conservative.

*How the paper uses it:* SIT-LMPC employs an online adaptive penalty method to enforce state constraints effectively.

▶ [Lec 15: Constrained Optimization III: Penalty function methods](https://www.youtube.com/watch?v=z8d6764LApE) — NPTEL IIT Guwahati · 5 yr ago

### GPU parallelization for real-time control *(prerequisite)*
GPU parallelization techniques enable the computationally intensive SIT-LMPC algorithm to run efficiently at high frequencies (100Hz+) on robotic platforms. Understanding GPU programming models and parallel execution is key to appreciating the real-time capabilities of SIT-LMPC.

*How the paper uses it:* The SIT-LMPC algorithm is fully parallelized on GPUs to achieve real-time control performance.

▶ [Stanford CS149 I Parallel Computing I 2023 I Lecture 4](https://www.youtube.com/watch?v=0-ztm8SKq70) — Stanford Online · 1:17:14

### Learning Model Predictive Control
LMPC is the central control framework that SIT-LMPC extends to stochastic nonlinear systems with safety constraints. Studying LMPC provides the foundational understanding of iterative learning control and how performance improves over repeated task executions.

*How the paper uses it:* SIT-LMPC extends the LMPC framework to handle stochastic nonlinear systems with general state constraints.

▶ [Melanie Zeilinger: "Learning-based Model Predictive Control - Towards Safe Learning in Control"](https://www.youtube.com/watch?v=nO8r8XKlPgA) — Institute for Pure & Applied Mathematics (IPAM) · 51:10 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the SIT-LMPC paper, starting with Model Predictive Control (MPC) to build intuition on predictive control frameworks. Next, it covers Model Predictive Path Integral (MPPI) control, the core information-theoretic method SIT-LMPC extends. Then, it explains normalizing flows for uncertainty modeling, which SIT-LMPC uses to better represent uncertainty in learning value functions. After that, adaptive penalty methods are introduced to understand how safety constraints are balanced with performance. Finally, GPU parallelization is covered to appreciate how SIT-LMPC achieves real-time control. Each step builds on the previous to prepare the learner for the paper’s novel contributions.

### Learning Model Predictive Control *(prerequisite)*
Model Predictive Control (MPC) is a control strategy that optimizes future control actions by predicting system behavior over a horizon and solving an optimization problem at each step. Learning MPC extends this by using data from previous executions to improve performance iteratively. This foundation helps understand how SIT-LMPC builds on MPC to handle stochastic nonlinear systems safely.

*How the paper uses it:* SIT-LMPC extends Learning Model Predictive Control to stochastic nonlinear systems with state constraints.

▶ [Melanie Zeilinger: "Learning-based Model Predictive Control - Towards Safe Learning in Control"](https://www.youtube.com/watch?v=nO8r8XKlPgA) — Institute for Pure & Applied Mathematics (IPAM) · 51:10 · 6y ago

### Model Predictive Path Integral control *(prerequisite)*
Model Predictive Path Integral (MPPI) control is a sampling-based, information-theoretic approach to MPC that uses stochastic sampling and path integrals to solve the control optimization problem efficiently. It is well-suited for nonlinear and stochastic systems and forms the computational backbone of SIT-LMPC.

*How the paper uses it:* SIT-LMPC integrates an information-theoretic MPPI control framework to solve the constrained optimal control problem.

▶ [LTC21 Tutorial MPPI](https://www.youtube.com/watch?v=19QLyMuQ_BE) — Neuromorphic Workshop Telluride · 23:16 · 5y ago

### Normalizing flows for uncertainty modeling *(prerequisite)*
Normalizing flows are a class of deep generative models that transform simple probability distributions into complex ones via invertible mappings, enabling rich uncertainty modeling. SIT-LMPC uses normalizing flows to learn the iteration value function from past trajectories, capturing uncertainty better than traditional Gaussian or Bayesian methods.

*How the paper uses it:* SIT-LMPC employs normalizing flows to model the iteration value function for richer uncertainty representation.

▶ [What are Normalizing Flows?](https://www.youtube.com/watch?v=i7LjDvsLWCg) — Ari Seff · 12:31 · 6y ago

### Adaptive penalty methods in constrained optimization *(prerequisite)*
Adaptive penalty methods convert constrained optimization problems into unconstrained ones by adding penalty terms that increase when constraints are violated, adjusting these penalties online to balance constraint satisfaction and optimality. This technique allows SIT-LMPC to enforce safety constraints without being overly conservative.

*How the paper uses it:* SIT-LMPC uses an online adaptive penalty method to balance safety constraints and control performance.

▶ [Converting Constrained Optimization to Unconstrained Optimization Using the Penalty Method](https://www.youtube.com/watch?v=RTEpONXUJyE) — Christopher Lum · 6 yr ago

### GPU parallelization for real-time control *(prerequisite)*
GPU parallelization leverages the massively parallel architecture of graphics processing units to accelerate computations, enabling real-time execution of computationally intensive algorithms like SIT-LMPC. Understanding GPU parallelization explains how SIT-LMPC achieves high-frequency control updates necessary for robotic applications.

*How the paper uses it:* SIT-LMPC is fully parallelized on GPUs to enable real-time control at 100Hz+ on robotic platforms.

▶ [Stanford CS149 I Parallel Computing I 2023 I Lecture 4](https://www.youtube.com/watch?v=0-ztm8SKq70) — Stanford Online · 1:17:14

## Already in your library

- [How I Understand Flow Matching](https://www.youtube.com/watch?v=DDq_pIfHqLs) — also for: HCFM: Helmholtz Component Flow Matching for Time Series Anomaly Detection (Sanjay Madria)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to engage deeply with the SIT-LMPC paper. Starting with a beginner-level implementation of the adaptive penalty method in a simple constrained MPC setting, you then move to an intermediate reimplementation of the core SIT-LMPC algorithm on a simulated stochastic nonlinear system, comparing safety and performance metrics. Finally, the advanced project challenges you to extend SIT-LMPC to handle unknown system dynamics via integration with a learning-based system identification method, addressing a key limitation noted by the authors.

### Beginner — Adaptive Penalty Method in Constrained MPC
*Effort: a weekend, ~8 hours*

You build a simple Model Predictive Control (MPC) simulation for a 2D point-mass navigating with state constraints (e.g., obstacle avoidance). Implement the online adaptive penalty method described in the paper to enforce constraints without excessive conservatism, adjusting penalty weights based on constraint violations during iterations.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key mechanism for balancing safety and optimality via adaptive penalties, a core contribution that enables SIT-LMPC to handle constraints efficiently in uncertain environments.

**Grounded in:** Development of a constrained information-theoretic MPC algorithm using exterior penalty functions with an online adaptive penalty method to balance safety and optimality.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Simulated 2D point-mass system with simple obstacle constraints synthesized by you.

**Build it:**

1. Implement a basic MPC controller for a 2D point-mass with state constraints.
2. Add an exterior penalty function to the MPC cost for constraint violations.
3. Implement an online adaptive penalty update rule that increases penalty weights when constraints are violated and decreases them otherwise.
4. Simulate multiple iterations and plot constraint violation metrics and control trajectories.
5. Compare results with a fixed penalty weight baseline.

**Ships as:** A GitHub repo with code and README showing plots of constraint violations and control trajectories demonstrating adaptive penalty effectiveness.

**Stretch goal:** Add stochastic noise to the system dynamics and evaluate how the adaptive penalty method maintains constraint satisfaction under uncertainty.

### Intermediate — Reimplementation of SIT-LMPC on Simulated Stochastic Nonlinear System
*Effort: 2 weekends, ~20 hours*

You reimplement the core SIT-LMPC algorithm from the paper, including the information-theoretic MPPI control framework and the online adaptive penalty method, applied to a simulated nonlinear stochastic system such as a unicycle robot with state constraints (e.g., obstacle avoidance). You learn the iteration value function using normalizing flows trained on previous trajectories. Compare SIT-LMPC performance and safety metrics against a baseline LMPC without adaptive penalties.

**Why it shows you understood the paper:** This project shows you can reconstruct the paper's main algorithmic contributions and validate their benefits on a nonlinear stochastic control problem, including the novel use of normalizing flows for value function approximation.

**Grounded in:** Extension of LMPC to stochastic nonlinear systems with general state constraints; use of normalizing flows to learn the iteration value function; development of a constrained information-theoretic MPC algorithm with an online adaptive penalty method.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Simulated nonlinear stochastic system trajectories generated by your SIT-LMPC implementation; no external dataset used.

**Build it:**

1. Implement a nonlinear stochastic system simulator (e.g., unicycle model with noise).
2. Implement the MPPI control framework with an exterior penalty for constraints.
3. Implement the online adaptive penalty method to balance safety and optimality.
4. Train a normalizing flow model on previous iteration trajectories to approximate the iteration value function.
5. Run iterative SIT-LMPC control and compare lap times, constraint violations, and convergence against a baseline LMPC without adaptive penalties.
6. Visualize and report performance and safety metrics.

**Ships as:** A GitHub repo with code, training scripts, and a detailed README showing quantitative comparisons and plots of trajectories, constraint satisfaction, and value function learning.

**Stretch goal:** Add GPU parallelization for the MPPI sampling to improve real-time performance.

### Advanced — Extending SIT-LMPC to Unknown Dynamics with Online System Identification
*Effort: 3+ weeks*

You extend the SIT-LMPC framework to handle systems with unknown or partially known dynamics by integrating a learning-based system identification module (e.g., a neural network or Gaussian process) that updates the system model online. The controller adapts its predictions and constraints accordingly. You evaluate this extended SIT-LMPC on a simulated nonlinear stochastic system with initially unknown dynamics, measuring safety and performance improvements over iterations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on the SIT-LMPC framework by combining adaptive control and learning-based system identification to handle unknown dynamics.

**Grounded in:** Future work is needed to extend SIT-LMPC to systems with unknown dynamics; exploring integration with learning-based system identification or adaptive control.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Simulated nonlinear stochastic system with unknown dynamics modeled by you; no external dataset used.

**Build it:**

1. Implement a nonlinear stochastic system simulator with unknown dynamics parameters.
2. Develop a learning-based system identification module that estimates system dynamics online from observed data.
3. Integrate the learned dynamics model into the SIT-LMPC framework, updating predictions and constraints accordingly.
4. Implement the online adaptive penalty method and normalizing flows for value function learning as in SIT-LMPC.
5. Evaluate the extended SIT-LMPC controller on iterative tasks, measuring safety, performance, and model accuracy improvements.
6. Document challenges, limitations, and potential improvements.

**Ships as:** A GitHub repo with code and README demonstrating the extended SIT-LMPC with online system identification, including quantitative results and analysis of safety and performance under unknown dynamics.

**Stretch goal:** Apply the extended SIT-LMPC to a real robotic platform or a more complex simulated environment with partial observability.
