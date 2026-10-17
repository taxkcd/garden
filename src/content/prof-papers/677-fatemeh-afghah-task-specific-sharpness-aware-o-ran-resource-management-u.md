---
title: "677 · Task-Specific Sharpness-Aware O-RAN Resource Management using Multi-Agent Reinforcement Learning — Fatemeh Afghah"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fatemeh-afghah"
source_hash: "25bc895160ccbeab6204fb13fa2782b680c2bb6af794e81e75ceb95f081be8b5"
sequence: 677
generator: "outreach-garden: managed"
---

# 677 · Task-Specific Sharpness-Aware O-RAN Resource Management using Multi-Agent Reinforcement Learning

## At a glance

- **Professor:** Fatemeh Afghah
- **Institution:** Northern Arizona University
- **Paper:** [Task-Specific Sharpness-Aware O-RAN Resource Management using Multi-Agent Reinforcement Learning](https://doi.org/10.1109/tmlcn.2025.3634994)
- **Authors:** Fatemeh Lotfi, Hossein Rajoli, Fatemeh Afghah
- **Year:** 2025

## Paper overview

This paper proposes a novel method to improve resource management in next-generation Open Radio Access Networks (O-RAN) by using a multi-agent deep reinforcement learning approach enhanced with a sharpness-aware optimization technique. The method dynamically applies this optimization only to agents facing complex learning tasks, improving network performance and user quality of service.

### Why it matters

**Research problem:** Optimizing dynamic resource allocation and network slicing in O-RAN architectures is challenging due to the highly dynamic and complex wireless environments, where conventional deep reinforcement learning (DRL) methods often suffer from overfitting, lack of robustness, and poor generalization.

**Why it matters:** Efficient resource management in O-RAN is critical for maintaining high-quality service across diverse network slices (e.g., eMBB, mMTC, URLLC) in 5G/6G networks. Improving DRL generalization and stability directly impacts network adaptability, user experience, and operational efficiency in real-world dynamic wireless systems.

**Key contributions:**

- Proposed TA-SAM framework that integrates SAM into distributed MARL for joint network slicing and resource allocation in O-RAN.
- Introduced TD-error variance as a proxy for task complexity to selectively apply SAM regularization only to actors facing unstable learning conditions.
- Developed a dynamic ρ scheduling mechanism to adapt the SAM perturbation magnitude based on evolving environment complexity.
- Demonstrated that applying SAM to the global critic improves generalization and stability across distributed actors.
- Adapted SAC to handle discrete resource block allocation actions in a continuous state space using sigmoid activation and thresholding.

## About the professor

**Fatemeh Afghah** — Professor, Department of Electrical and Computer Engineering, Northern Arizona University.

Research interests: wireless communication networks, decision making in autonomous systems and artificial intelligence in healthcare

### Research links

- [Faculty/profile page](https://sites.google.com/g.clemson.edu/is-win-lab/home)
- [Identity evidence](https://www.clemson.edu/cecas/departments/ece/faculty_staff/faculty/fafghah.html)
- [Resolved homepage](https://fafghah.people.clemson.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=67mA71QAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/company/is-win-lab-clemson/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multi-Agent Reinforcement Learning
**The paper assumes:** multi-agent reinforcement learning, actor-critic algorithms, temporal-difference learning, policy gradient methods
**Already in this field?** Skip this entirely if you already understand multi-agent reinforcement learning fundamentals and actor-critic methods.

This background playlist selection focuses on Multi-Agent Reinforcement Learning (MARL), which is central to understanding the paper's proposed TA-SAM framework for O-RAN resource management. The rigorous course provides a deep, structured foundation in reinforcement learning concepts including actor-critic methods and policy optimization, essential for grasping the paper's methodology. The fast track offers a concise, targeted introduction to MARL concepts, enabling a quicker but still solid understanding of the multi-agent learning principles relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 3 (Policy Gradients), 4 (Actor-Critic Methods), 5 (Off-Policy Actor Critic), and 18 (Frontiers), about 4.5 hours total — these cover policy gradient basics, actor-critic algorithms, off-policy learning relevant to SAC, and advanced topics framing the state-of-the-art.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a top-tier university course that covers core deep RL algorithms including actor-critic methods and policy gradients, which are foundational to the paper's use of Soft Actor-Critic and selective SAM regularization in a multi-agent setting.

*If you want all of it:* 20.6 hours across 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multi-Agent Reinforcement Learning Course](https://www.youtube.com/playlist?list=PLYqXmZaxvwmzikjw-cNyZfI051ms05czB) — Jason Eckstein · 22 videos · 33.5h across 22 episodes

**Watch only this:** Episodes 7 (Policy-Based Learning), 9 (Off-Policy Policy Gradient with Sync), and 11 (Centralized and Action-Value Critics), about 4.5 hours total — these provide a concise overview of policy gradient methods, off-policy learning, and critic architectures in MARL.

*Why it unblocks this paper:* Jason Eckstein's Multi-Agent Reinforcement Learning Course is a focused series that directly addresses MARL concepts such as centralized critics, policy-based learning, and value decomposition, which align closely with the paper's multi-agent and selective regularization approach.

*If you want all of it:* 33.5 hours across 22 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Task-Specific Sharpness-Aware O-RAN Resource Management using Multi-Agent Reinforcement Learning, start by building foundational knowledge on the key technical components: Multi-Agent Reinforcement Learning (MARL), the Soft Actor-Critic (SAC) algorithm, Temporal-Difference (TD) error and variance in reinforcement learning, and the O-RAN architecture with network slicing context. Then, study the core concept of Sharpness-Aware Minimization (SAM) in deep learning, which is central to the paper's novel optimization approach. Finally, conclude with the authors' own talk or the closest available advanced research talk to grasp the specific contributions and innovations of the paper.

### Multi-Agent Reinforcement Learning *(prerequisite)*
Multi-Agent Reinforcement Learning (MARL) is the foundational framework for coordinating multiple agents in distributed environments, which is critical for the paper's approach to dynamic resource allocation in O-RAN. Understanding MARL concepts and challenges prepares the reader to appreciate how the paper applies and extends MARL techniques.

*How the paper uses it:* The paper uses a distributed MARL setup to manage resource allocation across network slices in O-RAN.

▶ [Vadim Liventsev "Multi-agent Reinforcement Learning"](https://www.youtube.com/watch?v=slgEUs_kWIM) — Eindhoven Reinforcement Learning Seminar · 49:01 · Streamed 5y ago

### Soft Actor-Critic Algorithm *(prerequisite)*
The Soft Actor-Critic (SAC) algorithm is the base deep reinforcement learning method adapted in the paper for discrete resource block allocation in continuous state spaces. A detailed understanding of SAC's actor-critic architecture and entropy-regularized policy learning is essential to grasp the paper's algorithmic modifications.

*How the paper uses it:* The authors adapt SAC as the underlying DRL algorithm for their multi-agent resource management framework.

▶ [DeepMind x UCL RL Lecture Series - Policy-Gradient and Actor-Critic methods [9/13]](https://www.youtube.com/watch?v=y3oqOjHilio) — Google DeepMind · 1:38:50 · 5y ago

### Temporal-Difference Error and Variance in RL *(prerequisite)*
Temporal-Difference (TD) error and its variance are key metrics used in reinforcement learning to measure learning stability and task complexity. The paper innovatively uses TD-error variance to selectively apply sharpness-aware regularization, making understanding TD learning critical.

*How the paper uses it:* TD-error variance is used as a proxy for task complexity to selectively apply SAM regularization to actor networks.

▶ [W5_L1: Temporal difference learning (TD)](https://www.youtube.com/watch?v=Udzp_KDLYUo) — IIT Madras - B.S. Degree Programme · 16:31 · 3y ago

### O-RAN Architecture and Network Slicing *(prerequisite)*
O-RAN architecture and network slicing provide the wireless network context and challenges that motivate the paper's research. A technical understanding of O-RAN components, interfaces, and the concept of network slicing is necessary to appreciate the practical significance of the proposed resource management method.

*How the paper uses it:* The paper addresses resource management challenges in next-generation O-RAN architectures with multiple network slices.

▶ [👉 5G Network Slicing Explained | O-RAN Architecture | 6G, AI, NTN & Satellite Networks](https://www.youtube.com/watch?v=nGwnExqAQLs) — NextGen Telecom Research and Development · 47:54 · 6mo ago

### Sharpness-Aware Minimization in Deep Learning
Sharpness-Aware Minimization (SAM) is the core optimization technique that improves generalization and robustness in the paper's multi-agent DRL framework. Understanding SAM's principles, how it shapes the loss landscape, and its impact on model training is crucial to grasping the paper's main contribution.

*How the paper uses it:* The paper integrates SAM into MARL with a novel task-aware selective application to improve learning stability and generalization.

▶ [Hossein Mobahi: Sharpness-Aware Minimization (SAM): Current Method and Future Directions](https://www.youtube.com/watch?v=QBiLph-r5Hw) — JumpTrading ELLIS UCL CSML Seminar Series · 53:56 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts essential to understanding the paper, starting with the basics of O-RAN architecture and network slicing to set the wireless network context. It then builds up through multi-agent reinforcement learning and the Soft Actor-Critic algorithm, which form the core learning framework. Finally, it covers temporal-difference error and sharpness-aware minimization, the key optimization technique used in the paper to improve learning stability and generalization.

### O-RAN Architecture and Network Slicing *(prerequisite)*
Begin by understanding what O-RAN (Open Radio Access Network) is and how network slicing enables flexible, efficient allocation of network resources to different service types in 5G/6G. This sets the stage for why dynamic resource management is critical in modern wireless networks.

*How the paper uses it:* The paper addresses resource management challenges in O-RAN architectures with network slicing for diverse service types.

▶ [👉 5G Network Slicing Explained | O-RAN Architecture | 6G, AI, NTN & Satellite Networks](https://www.youtube.com/watch?v=nGwnExqAQLs) — NextGen Telecom Research and Development · 47:54 · 6mo ago

### Multi-Agent Reinforcement Learning *(prerequisite)*
Learn the basics of multi-agent reinforcement learning (MARL), where multiple agents learn to coordinate their actions in a shared environment. This is crucial for distributed resource allocation tasks where agents must cooperate and adapt dynamically.

*How the paper uses it:* The paper uses a distributed MARL framework to manage resources across multiple agents in O-RAN.

▶ [Multi-Agent Reinforcement Learning (MARL) | L-11](https://www.youtube.com/watch?v=I3kI2UkOKMQ) — Professor Rahul Jain · 4:30 · 1y ago

### Soft Actor-Critic Algorithm *(prerequisite)*
Understand the Soft Actor-Critic (SAC) algorithm, an off-policy actor-critic method that balances exploration and exploitation by maximizing a trade-off between expected reward and policy entropy. SAC is the base DRL algorithm adapted in the paper for resource allocation.

*How the paper uses it:* The paper adapts SAC to handle discrete resource block allocation in continuous state spaces within the MARL setup.

▶ [Soft Actor-Critic: a beginner-friendly introduction](https://www.youtube.com/watch?v=LN29DDlHp1U) — Yann Bouteiller · 6:15 · 5y ago

### Temporal-Difference Error and Variance in RL *(prerequisite)*
Temporal-Difference (TD) error measures the difference between predicted and actual rewards over time, serving as a key signal for learning updates. Understanding TD error variance helps grasp how the paper selectively applies sharpness-aware regularization based on task complexity.

*How the paper uses it:* The paper uses TD-error variance as a proxy for task complexity to selectively apply SAM regularization to agents.

▶ [Foundation of Q-learning | Temporal Difference Learning explained!](https://www.youtube.com/watch?v=uJX_72MnKg8) — CodeEmporium · 10:11 · 2y ago

### Sharpness-Aware Minimization in Deep Learning
Sharpness-Aware Minimization (SAM) is an optimization technique that seeks model parameters lying in flat regions of the loss landscape to improve generalization and robustness. Understanding SAM is key to appreciating the paper's novel TA-SAM framework that enhances DRL stability.

*How the paper uses it:* The paper integrates SAM into MARL with a task-aware selective application to improve generalization and stability in O-RAN resource management.

▶ [What is Sharpness-Aware Minimization (SAM)?](https://www.youtube.com/watch?v=7GAv9jzx44I) — Standarity · 4:08 · 1mo ago

## Already in your library

- [Negar Mehr: Interactive Autonomy: Learning and Control for Multi-agent Interactions](https://www.youtube.com/watch?v=NERkYgU5UA0) — also for: NestRL: A Nested Training Regime for Mutual Adaptation in Human-AI Teaming (Sarath Sreedharan)
- [Stefano V. Albrecht: Deep Reinforcement Learning for Multi-Agent Interaction](https://www.youtube.com/watch?v=WsXJmy7s8tU) — also for: Social Theory Should Be a Structural Prior for Agentic AI: A Formal Framework for Multi-Agent Social Systems (Kathleen M. Carley)
- [Multi-Agent Reinforcement Learning Towards Zero-Shot Communication](https://www.youtube.com/watch?v=IhH-mNaDI_8) — also for: A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2 (Damon L. Woodard)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [What Is Multi-Agent Reinforcement Learning? | MARL | Lecture 01](https://www.youtube.com/watch?v=3RPjbaLX2Z0) — also for: A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2 (Damon L. Woodard)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=cRGKc-nAWho) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [What is Actor-Critic?](https://www.youtube.com/watch?v=oDdPcEanLwY) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder for understanding and demonstrating the key ideas of the TA-SAM framework for multi-agent reinforcement learning in O-RAN resource management. The beginner project focuses on implementing and visualizing the selective application of SAM based on TD-error variance in a simplified environment. The intermediate project involves reimplementing the core TA-SAM method with dynamic ρ scheduling and comparing it against a baseline on a synthetic O-RAN-like resource allocation task. The advanced project extends the approach toward a practical deployment scenario by exploring adaptive hyperparameter tuning or model compression to address real-world constraints noted as future work in the paper.

### Beginner — Selective SAM Regularization Visualization with TD-Error Variance
*Effort: a weekend (~8 hours)*

You build a simplified multi-agent reinforcement learning simulation where multiple agents learn a resource allocation task. Implement the selective application of Sharpness-Aware Minimization (SAM) regularization to actor networks based on their temporal-difference (TD) error variance. Visualize how SAM is applied dynamically to agents with unstable learning and how this affects their learning curves.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel idea of using TD-error variance as a proxy for task complexity to selectively apply SAM regularization, a key contribution that improves learning stability and generalization.

**Grounded in:** Introduced TD-error variance as a proxy for task complexity to selectively apply SAM regularization only to actors facing unstable learning conditions.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, Jupyter Notebook

**Data:** Simulated multi-agent environment with synthetic continuous state space and discrete resource allocation actions, created for this project.

**Build it:**

1. Implement a simple multi-agent environment simulating resource allocation with discrete actions and continuous states.
2. Implement the Soft Actor-Critic (SAC) algorithm for each agent's actor and critic networks.
3. Compute TD-error variance for each agent over recent training steps.
4. Apply SAM regularization selectively to actor networks of agents whose TD-error variance exceeds a threshold.
5. Visualize TD-error variance, SAM application flags, and learning performance over training episodes.

**Ships as:** A GitHub repository with code and a Jupyter notebook demonstrating selective SAM application based on TD-error variance, including plots showing its effect on agent learning stability.

**Stretch goal:** Add a simple dynamic adjustment of the SAM perturbation magnitude ρ based on TD-error variance to see its impact.

### Intermediate — Reimplementation of TA-SAM with Dynamic ρ Scheduling on Synthetic O-RAN Task
*Effort: 1-3 weekends (~20 hours)*

You reimplement the core TA-SAM framework integrating SAM into a distributed multi-agent SAC setup for resource block allocation in a synthetic O-RAN environment. Implement the dynamic scheduling mechanism for the SAM perturbation magnitude ρ and compare the performance of TA-SAM against a baseline SAC MARL without SAM. Report metrics such as resource allocation efficiency and QoS satisfaction analogous to the paper.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's main method and results, including the novel dynamic ρ scheduling and selective SAM application, demonstrating a deep understanding of the algorithmic contributions and their impact on network performance.

**Grounded in:** Proposed TA-SAM framework that integrates SAM into distributed MARL for joint network slicing and resource allocation in O-RAN; Developed a dynamic ρ scheduling mechanism to adapt the SAM perturbation magnitude based on evolving environment complexity.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic O-RAN-like multi-slice resource allocation environment simulated based on descriptions in the paper; no official dataset available.

**Build it:**

1. Design a synthetic multi-agent environment simulating O-RAN resource block allocation with multiple network slices (eMBB, mMTC, URLLC).
2. Implement distributed multi-agent SAC agents with actor and global critic networks.
3. Integrate SAM regularization into actor networks with selective application based on TD-error variance.
4. Implement dynamic scheduling of the SAM perturbation magnitude ρ adapting to environment complexity.
5. Train TA-SAM agents and baseline SAC agents without SAM under identical conditions.
6. Evaluate and compare resource allocation efficiency and QoS satisfaction metrics; visualize results.

**Ships as:** A GitHub repository with a full TA-SAM implementation on a synthetic O-RAN task, including training scripts, evaluation metrics, and comparison plots against baseline SAC.

**Stretch goal:** Incorporate discrete action handling via sigmoid activation and thresholding as described in the paper to better mimic the paper's approach.

### Advanced — Adaptive Hyperparameter Tuning for TA-SAM in Near-Real-Time O-RAN Deployment
*Effort: a few weeks (~40+ hours)*

You extend the TA-SAM framework by developing an adaptive mechanism to tune the TD-error variance threshold and the SAM perturbation magnitude ρ during training, aiming to improve stability and generalization without manual hyperparameter tuning. Optionally, explore lightweight model compression techniques to reduce inference latency for near-real-time RIC deployment. Evaluate the impact of these extensions on training stability and resource allocation performance in the synthetic O-RAN environment.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper by tackling environment-specific hyperparameter tuning and deployment constraints, demonstrating your ability to innovate beyond the original work and apply it toward practical real-world scenarios.

**Grounded in:** The approach requires tuning of hyperparameters such as the TD-error variance threshold and ρ scheduling, which may be environment-specific; Future work includes inference oriented deployment in near-RT RICs, where latency, hardware footprint, and accelerator aware policy compression will be key considerations.

**Tech stack:** Python 3.11, PyTorch, Optuna or Ray Tune for hyperparameter optimization, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic O-RAN resource allocation environment as in the intermediate project.

**Build it:**

1. Build upon the TA-SAM implementation from the intermediate project.
2. Implement an adaptive tuning mechanism for the TD-error variance threshold, e.g., using meta-learning or online optimization.
3. Implement adaptive scheduling for the SAM perturbation magnitude ρ driven by training signals or validation performance.
4. Optionally, apply model compression techniques such as pruning or quantization to reduce model size and inference latency.
5. Evaluate the extended TA-SAM framework on the synthetic environment, comparing stability, QoS metrics, and inference performance against the baseline TA-SAM.
6. Document findings and limitations in the README.

**Ships as:** A GitHub repository demonstrating adaptive hyperparameter tuning and optional model compression for TA-SAM, with evaluation results showing improved stability and deployment readiness.

**Stretch goal:** Deploy the adapted TA-SAM model on a lightweight edge device or simulator to measure latency and resource usage.
