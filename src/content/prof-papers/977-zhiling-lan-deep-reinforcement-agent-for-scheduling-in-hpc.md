---
title: "977 · Deep Reinforcement Agent for Scheduling in HPC — Zhiling Lan"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhiling-lan"
source_hash: "29cdd37ad8177f41d19c2de227f87455548be51310e96c64d826910cc37d81a4"
sequence: 977
generator: "outreach-garden: managed"
---

# 977 · Deep Reinforcement Agent for Scheduling in HPC

## At a glance

- **Professor:** Zhiling Lan
- **Institution:** University of Illinois at Chicago
- **Paper:** [Deep Reinforcement Agent for Scheduling in HPC](https://arxiv.org/pdf/2102.06243)
- **Authors:** Yuping Fan, Zhiling Lan, Taylor Childers, Paul Rich, William Allcock, Michael E. Papka
- **Year:** 2021

## Paper overview

This paper presents DRAS, a deep reinforcement learning-based agent designed to automate and optimize job scheduling in high-performance computing (HPC) clusters. DRAS uses a hierarchical neural network to select jobs for immediate execution, reservation, and backfilling, adapting dynamically to workload changes and outperforming traditional heuristic and optimization scheduling methods.

### Why it matters

**Research problem:** Existing HPC cluster scheduling methods rely on heuristics or optimization approaches that are static, manually tuned, and unable to adapt to dynamic workload changes. These methods often lead to suboptimal scheduling performance and job starvation, especially for large jobs.

**Why it matters:** Efficient cluster scheduling is critical for maximizing HPC system utilization, ensuring fairness among jobs, and improving user satisfaction. As HPC systems grow more complex and workloads more dynamic, manual tuning of scheduling policies becomes impractical and error-prone, necessitating automated, adaptive scheduling solutions.

**Key contributions:**

- Design of DRAS, a deep reinforcement learning agent tailored for HPC scheduling with a hierarchical neural network incorporating resource reservation and backfilling.
- Development of a three-phase training strategy that enables rapid convergence and effective learning from diverse workload scenarios.
- Extensive trace-based simulations demonstrating DRAS outperforms existing heuristic and optimization scheduling methods by up to 45%, while preventing job starvation and adapting to workload changes.

## About the professor

**Zhiling Lan** — Professor, Department of Computer Science, University of Illinois at Chicago.

Research interests: Parallel and distributed systems, high-performance computing

### Research links

- [Faculty/profile page](https://cs.uic.edu/profiles/lan-zhiling)
- [Professor website](http://www.cs.uic.edu/~zlan)
- [Lab website](https://lanzhiling.github.io/team/)
- [Google Scholar](https://scholar.google.com/citations?user=xnKWIjEAAAAJ&hl=en&oi=ao)
- [DBLP](https://dblp.org/pid/07/2007.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep reinforcement learning
**The paper assumes:** foundations of reinforcement learning, deep neural networks, policy gradient methods, Markov decision processes
**Already in this field?** Skip this entirely if you already understand reinforcement learning basics and how deep neural networks are applied to sequential decision problems.

This background focuses on deep reinforcement learning (DRL), the core method behind the DRAS agent for HPC scheduling. The rigorous course option offers a comprehensive, university-level deep dive into DRL algorithms and theory, ideal for readers seeking deep understanding. The fast track provides a shorter, intuition-driven series with clear examples and visual explanations, suitable for quickly grasping key DRL concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-7 (Class Intro through Offline RL), about 7.5 hours — covering foundational DRL algorithms, policy gradients, actor-critic methods, and offline RL to understand DRAS's learning and adaptation mechanisms.

*Why it unblocks this paper:* Stanford CS224R is a top-tier university course specifically on deep reinforcement learning, covering policy gradients, actor-critic methods, hierarchical RL, and model-based RL, all relevant to understanding DRAS's hierarchical neural network and training process.

*If you want all of it:* About 20.6 hours across 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning, Visualized](https://www.youtube.com/playlist?list=PLuPfGAkea8b1uC8pKbevOZZl3tpzupgoz) — MartinHanderPhD · 15 videos · 6.0h across 15 episodes

**Watch only this:** Episodes 11-14 (Model Based Reinforcement Learning through Policy Gradient Methods in Reinforcement Learning), about 1.5 hours — focused on core DRL algorithms and policy improvement techniques used in DRAS.

*Why it unblocks this paper:* The 'Reinforcement Learning, Visualized' series uses clear visuals and intuitive explanations to cover key RL concepts like policy gradients, actor-critic methods, and value-based methods, providing a quick yet solid grasp of DRL fundamentals relevant to DRAS.

*If you want all of it:* About 6.0 hours across 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Deep Reinforcement Agent for Scheduling in HPC,' start with foundational knowledge on high-performance computing scheduling and hierarchical neural networks, which provide the necessary context and architectural background. Then, build a solid grasp of deep reinforcement learning fundamentals, the core methodology behind DRAS. Finally, focus on the central concept of reinforcement learning applied to scheduling, culminating in the authors' own talks and advanced lectures that directly relate to the paper's contributions and innovations.

### High-performance computing scheduling *(prerequisite)*
This section covers the challenges and context of job scheduling in HPC environments, which is the problem domain addressed by DRAS. Understanding HPC cluster architectures, existing scheduling systems like Slurm, and typical scheduling challenges such as resource allocation and job queuing is essential to appreciate the motivation and impact of the paper.

*How the paper uses it:* The paper addresses HPC scheduling challenges by proposing an adaptive, learning-based scheduling agent tailored for HPC clusters.

▶ [4. Practical Slurm: Batch Job Scheduling on HPC clusters](https://www.youtube.com/watch?v=NAAH7ufJrK0) — EuroCC@Greece · 46:37 · 3mo ago

### Hierarchical neural networks *(prerequisite)*
Hierarchical neural networks are a key architectural element enabling DRAS to incorporate HPC-specific scheduling features such as resource reservation and backfilling. This section introduces the concept of hierarchical models in neural networks, which is crucial to understanding the design choices in DRAS's neural network architecture.

*How the paper uses it:* DRAS uses a novel hierarchical neural network to model complex scheduling decisions in HPC environments.

▶ [Hierarchical Reinforcement Learning](https://www.youtube.com/watch?v=K5MlmO0UJtI) — Reinforcement Learning · 31:27 · 10y ago

### Deep reinforcement learning fundamentals *(prerequisite)*
Deep reinforcement learning (DRL) forms the methodological foundation of DRAS. This section provides a rigorous introduction to DRL concepts, algorithms, and their relation to AI, preparing the reader to understand how DRAS learns scheduling policies through interaction with the environment.

*How the paper uses it:* DRAS leverages deep reinforcement learning to dynamically optimize HPC job scheduling policies.

▶ [DeepMind x UCL RL Lecture Series - Introduction to Reinforcement Learning \[1/13\]](https://www.youtube.com/watch?v=TCCjZe0y4Qc) — Google DeepMind · 1:29:52 · 5y ago

### Reinforcement learning for scheduling
This section focuses on the application of reinforcement learning techniques specifically to scheduling problems, highlighting how adaptive and optimized job scheduling can be achieved in HPC clusters. It bridges the gap between general DRL knowledge and the specific scheduling context of the paper.

*How the paper uses it:* The core method enabling DRAS to adaptively and optimally schedule HPC jobs is reinforcement learning tailored for scheduling tasks.

▶ [GNN-RN: An Intelligent HPC Resource Scheduler](https://www.youtube.com/watch?v=bXphlneR2tY) — Institute for Information Sciences | I2S · 27:21 · 10mo ago

### DRAS paper talk *(paper-talk search result; attribution unverified)*
The authors' own talks provide the most direct and detailed insights into the design, training, and evaluation of DRAS. These presentations often include nuanced explanations, experimental details, and future directions that are not fully captured in the paper.

*How the paper uses it:* Directly targets the authors' presentation of DRAS, offering the most specific insights on their work.

▶ [Deep Reinforcement Learning Part 1 - Volodymyr Mnih - MLSS 2017](https://www.youtube.com/watch?v=WeT_a2zVPcI) — Max Planck Institute for Intelligent Systems · 1:28:14 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in deep reinforcement learning and high-performance computing (HPC) scheduling before focusing on the specific hierarchical neural network architecture and reinforcement learning approach used in the DRAS agent. The learner will first build intuition about reinforcement learning and HPC scheduling challenges, then understand hierarchical neural networks, and finally see how these ideas combine in DRAS for adaptive HPC job scheduling.

### Deep reinforcement learning fundamentals *(prerequisite)*
Start by understanding what deep reinforcement learning (DRL) is: a method where neural networks learn to make decisions by interacting with an environment to maximize rewards. This foundation explains how DRL combines deep learning with reinforcement learning to solve complex sequential decision problems.

*How the paper uses it:* DRAS uses deep reinforcement learning as the core method to learn adaptive scheduling policies in HPC clusters.

▶ [DeepMind x UCL RL Lecture Series - Introduction to Reinforcement Learning \[1/13\]](https://www.youtube.com/watch?v=TCCjZe0y4Qc) — Google DeepMind · 1:29:52 · 5y ago

### High-performance computing scheduling *(prerequisite)*
Learn the basics of HPC clusters and the challenges of scheduling jobs efficiently to maximize resource utilization and fairness. This includes understanding job queues, resource allocation, and common scheduling policies like backfilling.

*How the paper uses it:* DRAS addresses the specific challenges of HPC scheduling by automating and optimizing job selection and resource reservation.

▶ [4. Practical Slurm: Batch Job Scheduling on HPC clusters](https://www.youtube.com/watch?v=NAAH7ufJrK0) — EuroCC@Greece · 46:37 · 3mo ago

### Hierarchical neural networks *(prerequisite)*
Hierarchical neural networks organize layers or modules in a way that captures multi-level features or decisions, enabling complex tasks to be decomposed into simpler sub-tasks. This structure helps models incorporate domain-specific features effectively.

*How the paper uses it:* DRAS employs a hierarchical neural network architecture to integrate HPC-specific scheduling features like resource reservation and backfilling.

▶ [Hierarchical Reinforcement Learning](https://www.youtube.com/watch?v=K5MlmO0UJtI) — Reinforcement Learning · 31:27 · 10y ago

### Reinforcement learning for scheduling
Explore how reinforcement learning can be applied to scheduling problems, where an agent learns to allocate resources or schedule jobs by trial and error to optimize long-term performance metrics.

*How the paper uses it:* DRAS uses reinforcement learning to dynamically adapt scheduling policies based on workload changes and system feedback.

▶ [Reinforcement Learning with Neural Networks: Essential Concepts](https://www.youtube.com/watch?v=9hbQieQh7-o) — StatQuest with Josh Starmer · 24:00 · 1y ago

### DRAS paper talk *(paper-talk search result; attribution unverified)*
Finally, watch a comprehensive deep reinforcement learning lecture to solidify understanding of the methods that underpin DRAS, focusing on policy learning and neural network design.

*How the paper uses it:* This talk provides foundational knowledge relevant to the DRAS agent's deep reinforcement learning approach.

▶ [Deep Reinforcement Learning Part 1 - Volodymyr Mnih - MLSS 2017](https://www.youtube.com/watch?v=WeT_a2zVPcI) — Max Planck Institute for Intelligent Systems · 1:28:14 · 8y ago

## Already in your library

- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 8: Reward Learning](https://www.youtube.com/watch?v=PDIxDhA9Z6Y) — also for: SPEAR: Selective Preference Elicitation with Adaptive Rewards for VLM-Guided Robotic Manipulation (Feng Chen)
- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 11: Model-Based RL](https://www.youtube.com/watch?v=PvqyGnOirgA) — also for: Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency (Sergey Levine)
- [Stanford CS230 | Autumn 2025 | Lecture 5: Deep Reinforcement Learning](https://www.youtube.com/watch?v=4E27qlfYw0A) — also for: Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning (Qiang Guan)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Introduction to Reinforcement Learning | Scope of Reinforcement Learning by Mahesh Huddar](https://www.youtube.com/watch?v=PIfj8jJuO1s) — also for: Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment (Jenna Wiens)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Lecture 14 | Deep Reinforcement Learning](https://www.youtube.com/watch?v=lvoHnicueoE) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [MIT 6.S091: Introduction to Deep Reinforcement Learning (Deep RL)](https://www.youtube.com/watch?v=zR11FLZ-O9M) — also for: A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2 (Damon L. Woodard)
- [MIT 6.S191 (2025): Reinforcement Learning](https://www.youtube.com/watch?v=to-lHJfK4pw) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [MIT 6.S191 (2024): Reinforcement Learning](https://www.youtube.com/watch?v=8JVRbHAVCws) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Simply Explaining Deep Q-Learning/Deep Q-Network (DQN) | Python Pytorch Deep Reinforcement Learning](https://www.youtube.com/watch?v=EUrWGTCGzlA) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Lecture 9 | CNN Architectures](https://www.youtube.com/watch?v=DAOcjicFr1Y) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [Hierarchical reinforcement learning - Doina Precup](https://www.youtube.com/watch?v=e8b0yC6COJ8) — also for: GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation (David Held)
- [Lecture "Hierarchical (Part 1, Hierarchical Models)" of "Analyzing Software using Deep Learning"](https://www.youtube.com/watch?v=UQh3TYqWZME) — also for: Neuro-Inspired Information-Theoretic Hierarchical Perception for Multimodal Learning (Xiongye Xiao)
- [Lec-14: Hierarchical Clustering | Agglomerative vs Divisive with examples](https://www.youtube.com/watch?v=zxQF8Rmpk1M) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the DRAS deep reinforcement learning agent for HPC scheduling. The beginner project reproduces a core scheduling mechanism from the paper using familiar tools and synthetic data. The intermediate project involves reimplementing DRAS's hierarchical neural network scheduling method on a smaller scale and comparing it to a heuristic baseline. The advanced project extends DRAS by exploring online continual learning to reduce retraining time, addressing a key limitation noted by the authors.

### Beginner — Simulate HPC Job Scheduling with Backfilling
*Effort: a weekend, ~8 hours*

You build a simple HPC job scheduler simulator that implements the backfilling mechanism described in the paper. Using synthetic job traces, you simulate job arrivals and resource allocations with immediate execution and backfilling, then measure average job wait times.

**Why it shows you understood the paper:** This project shows you understand the HPC scheduling concepts of immediate execution, reservation, and backfilling, which are key components of DRAS's hierarchical scheduling approach.

**Grounded in:** The hierarchical neural network design enables DRAS to intelligently select jobs for immediate execution, reservation, and backfilling, improving scheduling efficiency.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic job traces generated to mimic HPC workloads as described in the paper's training phase; no real traces required.

**Build it:**

1. Implement a job queue simulator that models job arrivals with resource and runtime requirements.
2. Implement immediate execution scheduling and a simple backfilling algorithm.
3. Run simulations with synthetic job traces and record average job wait times.
4. Visualize scheduling outcomes and compare with a simple First-Come-First-Serve baseline.

**Ships as:** A Jupyter notebook with code simulating HPC scheduling with backfilling, plots of job wait times, and a README explaining the scheduling mechanisms.

**Stretch goal:** Add a reservation mechanism to prevent starvation of large jobs and compare its effect on wait times.

### Intermediate — Reimplement DRAS Scheduling with Hierarchical RL
*Effort: 2 weekends, ~20 hours*

You reimplement the core DRAS hierarchical deep reinforcement learning agent from the paper using Python and PyTorch. You train it on a small synthetic HPC job trace dataset and compare its scheduling performance (e.g., average job wait time) against a heuristic baseline such as FCFS or simple backfilling.

**Why it shows you understood the paper:** This project demonstrates your grasp of DRAS's core method: a hierarchical neural network for HPC scheduling trained via reinforcement learning, and your ability to reproduce its key performance improvements.

**Grounded in:** The authors design DRAS, a deep reinforcement learning agent with a hierarchical neural network architecture that incorporates HPC-specific features such as resource reservation and backfilling.

**Tech stack:** Python 3.11, PyTorch, NumPy, matplotlib

**Data:** Synthetic HPC job traces generated to simulate diverse workloads as described in the paper's three-phase training process; no official traces or code released by authors.

**Build it:**

1. Implement a hierarchical neural network architecture that outputs scheduling decisions for immediate execution, reservation, and backfilling.
2. Implement a reinforcement learning training loop (e.g., policy gradient or deep Q-learning) for the agent.
3. Generate synthetic job traces with varying workloads for training and evaluation.
4. Train the DRAS agent and evaluate its scheduling performance against a heuristic baseline.
5. Visualize and report metrics such as average job wait time and job slowdown.

**Ships as:** A GitHub repository with code for the DRAS RL agent, training scripts, evaluation results comparing to baseline, and a detailed README documenting the implementation and findings.

**Stretch goal:** Incorporate a simple reservation mechanism in the RL agent and analyze its effect on job starvation.

### Advanced — Online Continual Learning for Adaptive HPC Scheduling
*Effort: 3+ weeks*

You extend the DRAS RL agent by implementing an online continual learning mechanism to enable rapid adaptation to changing HPC system configurations and workloads without full retraining. You evaluate how this reduces retraining time and maintains scheduling performance.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of DRAS and the challenges of deploying adaptive RL schedulers in dynamic HPC environments.

**Grounded in:** Exploring methods to reduce retraining time or enable online continual learning for DRAS to handle frequent system changes.

**Tech stack:** Python 3.11, PyTorch, NumPy, matplotlib

**Data:** Synthetic HPC job traces simulating workload changes and system configuration shifts; no official datasets available.

**Build it:**

1. Review and implement the baseline DRAS RL agent from the intermediate project.
2. Design and implement an online continual learning strategy (e.g., experience replay, meta-learning, or incremental updates) for the DRAS agent.
3. Simulate system configuration changes and workload surges in synthetic job traces.
4. Evaluate the agent's adaptation speed and scheduling performance compared to full retraining.
5. Document challenges, results, and potential integration considerations for production HPC systems.

**Ships as:** A comprehensive GitHub repository with code for the continual learning enhanced DRAS agent, experiments demonstrating adaptation benefits, and a research-style README discussing limitations and future work.

**Stretch goal:** Investigate extending the agent to handle malleable jobs or job dependencies as further future directions.
