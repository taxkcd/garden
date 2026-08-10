---
title: "242 · Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning — Andrew Perrault"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-perrault"
source_hash: "226fa2a49c78566d6effdf938f79eec1b9aec5bd1fc789997060bc6a2d32ec3f"
sequence: 242
generator: "outreach-garden: managed"
---

# 242 · Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning

## At a glance

- **Professor:** Andrew Perrault
- **Institution:** Ohio State University
- **Paper:** [Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning](https://arxiv.org/pdf/2603.19397)
- **Authors:** Xueqiao Peng, Andrew Perrault
- **Year:** 2026

## Paper overview

This paper presents a hierarchical reinforcement learning framework to optimize the allocation of limited testing resources across multiple asynchronous infectious disease outbreak clusters. The method separates global resource coordination from local testing decisions, using a global controller to adjust test cost signals and local policies to prioritize individual tests. Evaluated on a realistic SARS-CoV-2 simulator, the approach outperforms heuristic and existing bandit-based methods, improving outbreak control effectiveness and decision-making speed.

### Why it matters

**Research problem:** How to efficiently allocate limited non-pharmaceutical intervention resources, specifically diagnostic testing, across multiple asynchronously emerging outbreak clusters under strict per-timestep budget constraints, while making decisions under uncertainty and heterogeneous cluster demands.

**Why it matters:** In early stages of infectious disease outbreaks, vaccines or treatments may be unavailable, making NPIs like testing and quarantine critical. However, limited resources and asynchronous, heterogeneous outbreak clusters complicate resource allocation. Effective coordination is essential to control transmission, minimize unnecessary quarantine, and optimize operational costs in real-world public health settings.

**Key contributions:**

- Formulation of multi-cluster outbreak control as a constrained RMAB with asynchronous cluster arrivals, bridging theory and practical public health needs.
- Design of a hierarchical RL framework decoupling global resource allocation from local intervention decisions, enabling scalable coordination.
- Development of a generalized local DQN conditioned on test cost that adapts to varying resource constraints without retraining.
- Integration of a PPO-based global controller to dynamically adjust test cost multipliers based on system state.
- Implementation of a global Q-ranking execution layer that guarantees strict adherence to hard budget constraints.

## About the professor

**Andrew Perrault** — Assistant Professor, Department of Computer Science and Engineering, Ohio State University.

Research interests: reinforcement learning and optimization and their application to scientific and engineering problems

### Research links

- [Faculty/profile page](https://aperrault.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** foundations of reinforcement learning, policy gradient methods, Q-learning, hierarchical reinforcement learning
**Already in this field?** Skip this entirely if you already understand reinforcement learning fundamentals including policy optimization and value-based methods.

This background focuses on reinforcement learning (RL), specifically hierarchical RL and multi-agent coordination, which are central to the paper's approach for optimizing resource allocation in outbreak control. The rigorous course option offers a deep, structured university-level treatment of core RL concepts including policy gradients, actor-critic methods, Q-learning, multi-armed bandits, and hierarchical RL. The fast track provides a shorter, more intuitive series of explainers that cover key RL advances and hierarchical methods, suitable for quickly grasping the main ideas without full technical depth.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-8 and 15 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods, Off-Policy Actor Critic, Q-Learning, Offline RL, Reward Learning, and Hierarchical RL and IL), about 7.5 hours total — this subset covers core RL algorithms and hierarchical RL needed to understand the paper's methodology.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive, authoritative university course that covers foundational RL algorithms, policy optimization, multi-armed bandits, and hierarchical RL, directly relevant to the paper's hierarchical PPO and DQN methods for constrained resource allocation.

*If you want all of it:* About 20.6 hours across all 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning](https://www.youtube.com/playlist?list=PL1v8zpldgH3rJk6UKP_npByDuE7v1WSdt) — Yannic Kilcher · 67 videos · 33.8h across the first 60 episodes

**Watch only this:** Episodes 6 (Reinforcement Learning, Fast and Slow), 7 (Learning World Graphs to Accelerate Hierarchical Reinforcement Learning), and 11 (A neurally plausible model learns successor representations in partially observable environments), about 1.5 hours total — these cover foundational RL concepts and hierarchical RL relevant to the paper.

*Why it unblocks this paper:* Yannic Kilcher's Reinforcement Learning playlist offers concise, well-explained videos on key RL advances including hierarchical RL, model-based RL, and multi-agent methods, providing an accessible yet substantive overview aligned with the paper's focus on hierarchical RL for outbreak control.

*If you want all of it:* About 33.8 hours across the first 60 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper, start with foundational concepts of constrained restless multi-armed bandits and hierarchical reinforcement learning, as these form the theoretical and methodological backbone of the work. Next, study Proximal Policy Optimization and Deep Q-Networks with Transformers to grasp the specific RL algorithms used. Finally, focus on the paper's core contribution by watching the authors' own talk to see their novel hierarchical RL framework for resource-constrained outbreak control in action.

### Constrained restless multi-armed bandits *(prerequisite)*
This concept models the problem of allocating limited testing resources across asynchronously arriving outbreak clusters under constraints. Understanding constrained RMABs is essential to appreciate the problem formulation and how the paper bridges theory with practical public health needs.

*How the paper uses it:* The paper formulates multi-cluster outbreak control as a constrained RMAB with asynchronous cluster arrivals.

▶ [Constrained Bandits: Talk by Prof. Jayakrishnan Nair, IIT Bombay](https://www.youtube.com/watch?v=wcaF72f8ze8) — Centre for Networked Intelligence, IISc · 5 years ago

### Hierarchical reinforcement learning *(prerequisite)*
Hierarchical RL decouples decision-making into global and local levels, enabling scalable coordination under resource constraints. Grasping this framework is crucial to understand how the paper separates global resource coordination from local testing decisions.

*How the paper uses it:* The paper proposes a hierarchical RL framework to optimize global and local intervention policies for outbreak control.

▶ [RLSS 2023 - Hierarchical Reinforcement Learning - Anders Jonsson](https://www.youtube.com/watch?v=dooSrAH3o14) — Universitat Pompeu Fabra - Barcelona · 2 years ago

### Proximal Policy Optimization *(prerequisite)*
PPO is a state-of-the-art policy gradient method used for stable and efficient policy updates. Understanding PPO helps in comprehending how the global controller dynamically adjusts test cost multipliers in the paper's hierarchical RL framework.

*How the paper uses it:* The global controller in the paper uses PPO to learn continuous cost multipliers for resource demand regulation.

▶ [Proximal Policy Optimization (RVLS 2021 version)](https://www.youtube.com/watch?v=uRNL93jV2HE) — Olivier Sigaud · 5 years ago

### Deep Q-Networks with Transformers *(prerequisite)*
The local policy employs a generalized Transformer-based DQN to estimate marginal testing values conditioned on cost signals. Familiarity with DQNs and Transformer architectures is necessary to understand this novel local decision-making approach.

*How the paper uses it:* The paper develops a generalized Transformer-based DQN local policy for adaptive test prioritization without retraining.

▶ [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — Professor Bryce · 3 years ago

### Paper authors talk *(the paper's own talk)*
Directly hearing the authors explain their hierarchical RL framework, problem formulation, and experimental results provides the most precise and comprehensive understanding of the paper's contributions and innovations.

*How the paper uses it:* This is the authors' own talk about their novel hierarchical RL framework for multi-cluster outbreak control.

▶ [IDWSDS 2024 - S26: Modeling the Impact: Non-Pharmaceutical Interventions (NPIs) and COVID-19 Transmi](https://www.youtube.com/watch?v=oe14LCoi16A) — CWSTAT · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand the paper's approach to optimizing resource-constrained testing during infectious disease outbreaks. Start with the foundational idea of multi-armed bandits to grasp the problem formulation, then learn hierarchical reinforcement learning to see how global and local decisions are decoupled. Next, study Proximal Policy Optimization and Deep Q-Networks with Transformers to understand the specific RL methods used. Finally, explore the core application of hierarchical RL for resource allocation to connect all concepts to the paper's main contribution.

### Constrained restless multi-armed bandits *(prerequisite)*
Multi-armed bandits are a classic framework for making decisions under uncertainty by balancing exploration and exploitation. Constrained restless bandits extend this by modeling multiple evolving options (arms) with resource limits and asynchronous availability, capturing complex real-world scenarios.

*How the paper uses it:* The paper formulates multi-cluster outbreak control as a constrained restless multi-armed bandit problem to model asynchronous cluster arrivals and limited testing resources.

▶ [Constrained Bandits: Talk by Prof. Jayakrishnan Nair, IIT Bombay](https://www.youtube.com/watch?v=wcaF72f8ze8) — Centre for Networked Intelligence, IISc · 5 years ago

### Hierarchical reinforcement learning *(prerequisite)*
Hierarchical reinforcement learning breaks down complex decision-making into multiple levels, separating high-level strategic control from low-level actions. This structure helps manage large-scale problems by enabling scalable and interpretable policies.

*How the paper uses it:* The paper uses hierarchical RL to decouple global resource coordination from local testing decisions for scalable outbreak control.

▶ [RLSS 2023 - Hierarchical Reinforcement Learning - Anders Jonsson](https://www.youtube.com/watch?v=dooSrAH3o14) — Universitat Pompeu Fabra - Barcelona · 2 years ago

### Proximal Policy Optimization *(prerequisite)*
Proximal Policy Optimization (PPO) is a modern reinforcement learning algorithm that improves policy updates by limiting how much the policy can change at once, ensuring stable and efficient learning.

*How the paper uses it:* The global controller in the paper employs PPO to dynamically adjust test cost multipliers based on the system state.

▶ [Simply Explaining Proximal Policy Optimization (PPO) | Deep Reinforcement Learning](https://www.youtube.com/watch?v=5VHLd9eCZ-w) — Johnny Code · 31:15 · 1 year ago

### Deep Q-Networks with Transformers *(prerequisite)*
Deep Q-Networks (DQN) use neural networks to estimate the value of actions in reinforcement learning, while Transformers provide powerful sequence modeling capabilities. Combining them allows flexible, context-aware decision-making.

*How the paper uses it:* The paper's local policy uses a generalized Transformer-based DQN to estimate the marginal value of tests within each cluster conditioned on cost signals.

▶ [Simply Explaining Deep Q-Learning/Deep Q-Network (DQN) | Python Pytorch Deep Reinforcement Learning](https://www.youtube.com/watch?v=EUrWGTCGzlA) — Johnny Code · 2 years ago

### Hierarchical RL for resource allocation
Hierarchical RL can be applied to resource allocation problems by coordinating high-level resource distribution with low-level task execution, enabling efficient management of limited resources in complex environments.

*How the paper uses it:* The paper's main contribution is a hierarchical RL framework that optimizes limited testing resources across multiple outbreak clusters.

▶ [What can Hierarchical Reinforcement Learning Do for You? [Doina Precup, McGill University | MILA]](https://www.youtube.com/watch?v=IDJh5e-NEAo) — Behaviour Priors in RL [ICRA 2022 Workshop] · 4 years ago

## Already in your library

- [L4 TRPO and PPO (Foundations of Deep RL Series)](https://www.youtube.com/watch?v=KjWF8VIMGiY) — also for: PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL (Mina Guirguis)
- [Proximal Policy Optimization | ChatGPT uses this](https://www.youtube.com/watch?v=MVXdncpCbYE) — also for: PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL (Mina Guirguis)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity to the paper "Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning." The beginner project recreates a simplified local testing decision mechanism to demonstrate understanding of cost-conditioned test prioritization. The intermediate project implements the core hierarchical RL framework on a small synthetic multi-cluster outbreak environment, comparing it to a heuristic baseline. The advanced project extends the framework by incorporating imperfect compliance behavior into the simulation and policy, addressing a key limitation noted by the authors.

### Beginner — Cost-Conditioned Local Testing Policy Simulation
*Effort: a weekend, ~8 hours*

You build a simplified simulation of a single outbreak cluster where a local Deep Q-Network-like policy prioritizes tests based on a continuous test cost signal. The policy outputs test priorities conditioned on varying cost multipliers, illustrating how test allocation adapts to resource constraints.

**Why it shows you understood the paper:** This project shows you understand the paper's key contribution of a generalized local testing policy conditioned on test cost, which enables flexible adaptation without retraining.

**Grounded in:** Development of a generalized local DQN conditioned on test cost that adapts to varying resource constraints without retraining.

**Tech stack:** Python 3.11, NumPy, PyTorch, Matplotlib

**Data:** Synthetic data simulating infection states and test outcomes in a single outbreak cluster, generated within the project.

**Build it:**

1. Implement a simple environment simulating infection states and test outcomes for individuals in one outbreak cluster.
2. Implement a neural network that takes as input individual features and a continuous test cost multiplier, outputting a Q-value representing test priority.
3. Train the network with a simple Q-learning loop on synthetic data to learn to prioritize tests under different cost signals.
4. Visualize how test priorities change as the cost multiplier varies.
5. Write a README explaining the connection to the paper's local DQN conditioned on test cost.

**Ships as:** A GitHub repo with code to train and visualize a cost-conditioned local testing policy on synthetic cluster data, plus a README linking it to the paper's local DQN contribution.

**Stretch goal:** Add a simple heuristic baseline (e.g., random or fixed priority) and compare test allocation behavior under varying cost signals.

### Intermediate — Hierarchical RL for Multi-Cluster Test Allocation
*Effort: 2 weekends, ~20 hours*

You implement a simplified hierarchical RL framework inspired by the paper, with a global PPO controller adjusting a test cost multiplier and local DQN policies prioritizing tests within multiple asynchronously activated synthetic outbreak clusters. You compare performance against a heuristic baseline on metrics like infections and budget adherence.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core hierarchical RL method and validate its effectiveness in multi-cluster outbreak control under resource constraints.

**Grounded in:** Design of a hierarchical RL framework decoupling global resource allocation from local intervention decisions, enabling scalable coordination.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3 (for PPO), NumPy, Matplotlib

**Data:** Synthetic multi-cluster outbreak simulation data generated by your environment, modeling asynchronous cluster arrivals and infection dynamics.

**Build it:**

1. Design a multi-cluster outbreak environment simulating asynchronous cluster activations and infection spread with limited testing budget per timestep.
2. Implement a local DQN policy conditioned on a test cost signal to prioritize tests within each cluster.
3. Implement a global PPO controller that outputs a continuous test cost multiplier to regulate global resource demand.
4. Implement a global Q-ranking layer that selects tests with highest marginal value up to the budget.
5. Train the hierarchical RL system end-to-end and evaluate against a heuristic baseline (e.g., fixed cost multiplier or random test allocation).
6. Plot metrics such as total infections, quarantine counts, and budget adherence over episodes.
7. Document the implementation and results in a README linking to the paper's hierarchical RL framework.

**Ships as:** A GitHub repo with code for a hierarchical RL system controlling test allocation across multiple synthetic outbreak clusters, with evaluation plots and a README explaining the connection to the paper.

**Stretch goal:** Add a generalized local DQN conditioned on cost that can adapt to different budgets without retraining, and demonstrate its flexibility.

### Advanced — Extending Hierarchical RL with Behavioral Compliance Modeling
*Effort: 3+ weeks*

You extend the hierarchical RL framework by incorporating imperfect compliance behavior into the simulation environment and policies. This includes modeling variability in testing and quarantine adherence, and adapting the global and local policies to optimize under these behavioral uncertainties.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, showing you can innovate beyond the original framework by integrating human behavioral dynamics into resource-constrained outbreak control.

**Grounded in:** The framework assumes perfect compliance with testing and quarantine, omitting behavioral factors such as fatigue and risk perception that affect real-world adherence.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3, NumPy, Matplotlib

**Data:** Synthetic multi-cluster outbreak data extended with stochastic compliance parameters for testing and quarantine, simulated within the project.

**Build it:**

1. Extend the multi-cluster outbreak environment to include stochastic compliance models for testing and quarantine adherence, parameterized by fatigue or risk perception variables.
2. Modify the local DQN and global PPO policies to incorporate compliance state information as part of their inputs.
3. Train the hierarchical RL system in this extended environment to learn robust test allocation and cost multiplier strategies under imperfect compliance.
4. Evaluate performance against the original perfect compliance model and heuristic baselines, reporting metrics on infections, quarantines, and budget adherence.
5. Analyze how compliance variability affects policy behavior and resource allocation decisions.
6. Write a detailed README discussing the extension, challenges, and relation to the paper's stated limitations and future directions.

**Ships as:** A GitHub repo implementing hierarchical RL for outbreak control with behavioral compliance modeling, including training code, evaluation results, and a comprehensive README linking to the paper's limitations and future directions.

**Stretch goal:** Incorporate a simple natural language model or rule-based agent to simulate human decision-making on compliance, inspired by the paper's suggestion to leverage large language models.
