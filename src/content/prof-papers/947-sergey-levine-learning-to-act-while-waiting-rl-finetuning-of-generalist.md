---
title: "947 · Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency — Sergey Levine"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sergey-levine"
source_hash: "aba6d2244d3b23e9fabc248b7dcdd7c3f9cda1e18430106437556b085748f4f2"
sequence: 947
generator: "outreach-garden: managed"
---

# 947 · Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency

## At a glance

- **Professor:** Sergey Levine
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency](https://arxiv.org/pdf/2608.23831)
- **Authors:** Brian Zhu, Momen Khalil, E Harrison, Emanuele Poggi, Philipp Schmitt, Bernd Kast, Philine Meister, Pranav Atreya, Qiyang Li, Finn Ferchau, Cesar Colmenero, Yash Shahapurkar, Gokul Narayanan, Melih Erdogan, Kai Wurm, Georg von Wichert, Oier Mees, Eugen Solowjow, Andrew Wagenmaker, Sergey Levine
- **Year:** 2026

## Paper overview

This paper addresses the challenge of improving large generalist robot policies using reinforcement learning (RL) when there is a delay in computing actions (inference latency). The authors propose a method called Asynchronous RL with Intermediate Information (A RLI) that allows RL to effectively fine-tune these policies despite delays by conditioning the RL policy on intermediate actions and states. They demonstrate that A RLI outperforms existing methods in both simulated and real-world robotic tasks, enabling robots to learn and adapt in real time even with significant inference delays.

### Why it matters

**Research problem:** Modern generalist robot policies, such as vision-language-action models (VLAs), have large model sizes causing significant inference latency. This latency disrupts the Markov assumption in RL and leads to poor or failed RL fine-tuning. The problem is how to enable effective RL improvement of these generalist policies under practical inference latency constraints.

**Why it matters:** Generalist robot policies are increasingly deployed in real-world settings where inference latency can cause jerky or paused movements, degrading performance. Enabling RL to improve these policies online despite latency is critical for achieving reliable, high-performance robotic control in practical scenarios.

**Key contributions:**

- Identification of inference latency as a fundamental obstacle to RL fine-tuning of large generalist robot policies.
- Development of A RLI, a latency-aware RL framework that conditions on intermediate actions and states to mitigate non-Markovian effects caused by asynchronous inference.
- Theoretical analysis bounding the suboptimality due to delayed observations in RL.
- Extensive empirical evaluation showing A RLI enables effective RL fine-tuning under latency in both simulated high-reactivity tasks and challenging real-world bimanual manipulation tasks.
- Demonstration that A RLI outperforms naive RL approaches, residual RL, and synchronous inference baselines in success rate and learning speed.

## About the professor

**Sergey Levine** — Department of Electrical Engineering and Computer Sciences, Univ. of California - Berkeley.

Research interests: artificial intelligence, intelligent systems and robotics

### Research links

- [Faculty/profile page](https://vcresearch.berkeley.edu/faculty/sergey-levine)
- [Identity evidence](https://people.eecs.berkeley.edu/~svlevine)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** Markov decision processes, policy optimization, delayed reinforcement learning, and asynchronous RL algorithms
**Already in this field?** Skip this entirely if you have a solid understanding of reinforcement learning fundamentals including MDPs, policy learning, and handling delayed or partial observations.

This background focuses on reinforcement learning (RL), essential for understanding the challenges and solutions in fine-tuning robot policies under inference latency as presented in the paper. The rigorous course offers a deep, structured dive into RL concepts, algorithms, and applications, while the fast track provides a concise, intuition-driven introduction to core RL ideas and algorithms. Choose the course for comprehensive mastery or the fast track for a quick, clear conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-7 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods, Off-Policy Actor Critic, Q-Learning, Offline RL), about 7.5 hours — these cover core RL algorithms and policy learning needed to understand the paper's RL foundation.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a university-level course that covers fundamental and advanced RL topics, including policy gradients, actor-critic methods, model-based RL, and RL for robots, directly relevant to the paper's focus on RL fine-tuning and latency challenges.

*If you want all of it:* All 19 episodes, about 20.6 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning from Scratch](https://www.youtube.com/playlist?list=PLUGP9jhqEwEs) — Robo · 7 videos · 1.3h across the first 6 episodes

**Watch only this:** Episodes 1-6 (Every RL Algorithm Explained on One Simple Game through Reinforcement Learning Explained | Monte Carlo, TD(0), TD(λ) & Value Iteration), about 1.3 hours — covers essential RL concepts and algorithms with clear intuition.

*Why it unblocks this paper:* The 'Reinforcement Learning from Scratch' series offers a concise and visual explanation of fundamental RL algorithms and concepts, providing a quick yet solid grounding in RL necessary to grasp the paper's key ideas about policy learning and delayed feedback.

*If you want all of it:* All 7 episodes, about 1.5 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency," start with foundational concepts including Markov decision processes and the Markov assumption, which are critical to grasping the problem of inference latency breaking the Markov property. Then, study reinforcement learning with delayed observations to understand how RL algorithms handle asynchronous or delayed feedback. Next, explore asynchronous inference in robotics to see how inference latency affects robot control and how asynchronous methods can mitigate these effects. Finally, focus on the paper's core contribution: latency-aware RL policy conditioning, which directly relates to the proposed A RLI method. Unfortunately, no direct recorded talk by the paper authors was found, so the learning path relies on rigorous university lectures and research talks closely aligned with the paper's key themes.

### Markov decision processes and Markov assumption *(prerequisite)*
Understanding Markov decision processes (MDPs) and the Markov assumption is foundational for reinforcement learning. This concept explains how future states depend only on the current state and action, a property that inference latency can break, causing challenges for RL algorithms.

*How the paper uses it:* The paper's problem centers on inference latency breaking the Markov assumption, which is fundamental to RL.

▶ [COMPSCI 188 - 2018-09-18 - Markov Decision Processes (MDPs) Part 1/2](https://www.youtube.com/watch?v=4LW3H_Jinr4) — Webcast Departmental · 1:25:00 · 8y ago

### Reinforcement learning with delayed observations *(prerequisite)*
This topic covers how reinforcement learning algorithms can be adapted or challenged by delayed or asynchronous feedback, which is critical to understanding the latency issues addressed in the paper. It provides insight into how RL can still learn effectively despite delays in observations or actions.

*How the paper uses it:* The paper addresses RL fine-tuning under inference latency, a form of delayed observation.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 11: Model-Based RL](https://www.youtube.com/watch?v=PvqyGnOirgA) — Stanford Online · 1:13:20 · 10mo ago

### Asynchronous inference in robotics *(prerequisite)*
Asynchronous inference is key to understanding how inference latency affects robot policy execution and how asynchronous methods can help mitigate these effects. This concept bridges the gap between theoretical RL challenges and practical robotic control under latency constraints.

*How the paper uses it:* The paper builds on asynchronous inference to design latency-aware RL policies.

▶ [VLASH: Real-Time VLAs via Future-State-Aware Asynchronous inference - Jiaming Tang 03/09/2026](https://www.youtube.com/watch?v=IRva9O4EX98) — Robot Perception and Learning Lab · 34:12 · 7mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the foundational concepts of Markov decision processes and the Markov assumption, which underpin reinforcement learning (RL). Next, grasp how RL deals with delayed or asynchronous observations, a critical challenge addressed by the paper. Then, explore asynchronous inference in robotics to see how inference latency affects robot control. Finally, focus on the paper's core contribution: latency-aware RL policy conditioning, which enables effective RL fine-tuning despite inference delays.

### Markov decision processes and Markov assumption *(prerequisite)*
Markov decision processes (MDPs) model decision-making where the future depends only on the current state and action, not on the full history. The Markov assumption simplifies learning by assuming this memoryless property, which is fundamental to most RL algorithms.

*How the paper uses it:* The paper addresses how inference latency breaks the Markov assumption, causing standard RL to fail.

▶ [Uncertainty probabilistic inference (Markov Model) | Artificial Intelligence](https://www.youtube.com/watch?v=6eKQnSf7atA) — Gate Smashers · 14:15 · 1y ago

### Reinforcement learning with delayed observations *(prerequisite)*
RL with delayed observations studies how agents learn when feedback or state information arrives late, breaking the usual timing assumptions. Understanding this helps grasp why inference latency disrupts RL and what challenges arise in learning policies under delay.

*How the paper uses it:* The paper analyzes RL fine-tuning under inference latency, which causes delayed observations and non-Markovian effects.

▶ [16. Reinforcement Learning, Part 1](https://www.youtube.com/watch?v=YZ5pOgY5hEE) — MIT OpenCourseWare · 1:17:08 · 6y ago

### Asynchronous inference in robotics *(prerequisite)*
Asynchronous inference means the robot's policy computation and action execution happen out of sync, often due to computational delays. This concept explains how inference latency arises in robotics and motivates methods to mitigate its negative effects on control.

*How the paper uses it:* The paper's method builds on asynchronous inference by conditioning on intermediate states and actions to handle latency.

▶ [Synchronous vs Asynchronous Explained | Tech Concepts](https://www.youtube.com/watch?v=4Xj9J4VZcfw) — Arkynate · 7:09 · 1y ago

## Already in your library

- [Lecture 17 - MDPs & Value/Policy Iteration | Stanford CS229: Machine Learning Andrew Ng (Autumn2018)](https://www.youtube.com/watch?v=d5gaWTo6kDM) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [Markov Decision Processes 2 - Reinforcement Learning | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=HpaHTfY52RQ) — also for: Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver (Mingyan Liu)
- [Stanford CS230 | Autumn 2025 | Lecture 5: Deep Reinforcement Learning](https://www.youtube.com/watch?v=4E27qlfYw0A) — also for: Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning (Qiang Guan)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Markov Decision Processes 1 - Value Iteration | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=9g32v7bK3Co) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [Markov Decision Processes - Computerphile](https://www.youtube.com/watch?v=2iF9PRriA7w) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [Reinforcement Learning #2: Markov Decision Process, Bellman, State Action Value, Policy](https://www.youtube.com/watch?v=lFLGVlBwUDM) — also for: ShIOEnv: A Command Evaluation Environment for Grammar-Constrained Synthesis and Execution Behavior Modeling (Rajendra V. Boppana)
- [Markov Chains Clearly Explained! Part - 1](https://www.youtube.com/watch?v=i3AkTO9HLXo) — also for: Scenario-based Compositional Verification of Autonomous Systems with Neural Perception (Rajeev Alur)
- [Markov Decision Processes Explained | The Foundation of ...](https://www.youtube.com/watch?v=ljrjEh13Vyg) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)
- [Markov Decision Processes (MDP) Explained: Fundamentals, Expected Return, Policy & Value Functions](https://www.youtube.com/watch?v=XKZIsODur_g) — also for: Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning (Qiang Guan)
- [Markov Decision Processes Explained in 12 Minutes](https://www.youtube.com/watch?v=2sVDNV3l-vo) — also for: Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver (Mingyan Liu)
- [Markov Decision Processes: Definition | Week 10 lecture 5 | by Prof. Mausam](https://www.youtube.com/watch?v=Zs9MLJnSCWU) — also for: Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning (Qiang Guan)
- [Stanford CS224N | 2023 | Lecture 10 - Prompting ...](https://www.youtube.com/watch?v=SXpJ9EmG3s4) — also for: What Benchmarks Don’t Measure: The Case for Evaluating Abstention Competence in Autonomous Agents (Suresh Venkatasubramanian)
- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 1: Class Intro](https://www.youtube.com/watch?v=EvHRQhMX7_w) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=cRGKc-nAWho) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [An introduction to Reinforcement Learning](https://www.youtube.com/watch?v=JgvyzIkgxF0) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Proximal Policy Optimization (PPO) for LLMs Explained Intuitively](https://www.youtube.com/watch?v=8jtAzxUwDj0) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the core ideas of the paper on latency-aware reinforcement learning (A RLI) for generalist robot policies. The beginner project recreates a simplified simulation of inference latency effects and naive RL failure, illustrating the problem. The intermediate project implements a basic version of the A RLI method on a simulated control task, comparing it to a naive RL baseline to demonstrate performance gains. The advanced project extends A RLI to pretrained policies without modular decomposition, addressing a key limitation and exploring adaptive latency handling, thus pushing toward future research directions.

### Beginner — Simulate RL with Inference Latency and Naive Policy Fine-tuning
*Effort: a weekend, ~8 hours*

You build a simple simulated environment with a delayed action inference pipeline to reproduce how inference latency breaks the Markov assumption and causes naive RL fine-tuning to fail. You implement a baseline RL agent that ignores latency and observe degraded performance as latency increases.

**Why it shows you understood the paper:** This project demonstrates you grasp the fundamental problem identified in the paper: that inference latency disrupts standard RL assumptions and leads to poor policy improvement, which motivates the need for latency-aware methods.

**Grounded in:** Identification of inference latency as a fundamental obstacle to RL fine-tuning of large generalist robot policies.

**Tech stack:** Python 3.11, PyTorch, Gym (or a simple custom environment)

**Data:** Simulated control environment with synthetic inference latency introduced as a delay between action computation and execution.

**Build it:**

1. Create a simple Gym-like environment (e.g., 2D point navigation) with a controllable inference latency parameter.
2. Implement a standard RL agent (e.g., DQN or PPO) that selects actions without accounting for latency.
3. Modify the environment to delay action execution by a fixed number of steps to simulate inference latency.
4. Train the RL agent with increasing latency values and record performance degradation.
5. Plot success rate or cumulative reward versus latency to visualize the problem.

**Ships as:** A GitHub repo with code and README showing the simulation setup, latency effect on naive RL, and plots illustrating performance drop with latency.

**Stretch goal:** Add a simple residual RL baseline that tries to correct delayed actions and compare its performance to naive RL.

### Intermediate — Implement A RLI Conditioning on Intermediate Actions and States in Simulation
*Effort: 2 weekends, ~20 hours*

You implement the core A RLI method by augmenting the RL policy input with intermediate actions and intermediate states to restore near-Markovian structure under inference latency. You apply this to a simulated control task with delayed inference and compare it against a naive RL baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main technical contribution and empirically validate its advantage over naive RL under latency, reproducing key results about improved success rates and learning speed.

**Grounded in:** Development of A RLI, a latency-aware RL framework that conditions on intermediate actions and states to mitigate non-Markovian effects caused by asynchronous inference.

**Tech stack:** Python 3.11, PyTorch, Gym or a similar RL environment, NumPy, Matplotlib

**Data:** Simulated control environment with synthetic inference latency; no external dataset required.

**Build it:**

1. Recreate the simulated environment with inference latency as in the beginner project.
2. Implement the A RLI policy architecture that takes augmented state inputs including intermediate actions and intermediate states.
3. Train the A RLI agent using a diffusion steering RL (D SRL) or a simpler RL algorithm adapted to handle augmented inputs.
4. Train a naive RL baseline without augmented inputs under the same latency conditions.
5. Compare and plot the success rates and learning curves of A RLI versus naive RL.
6. Write a README explaining the method, implementation details, and results.

**Ships as:** A GitHub repo with code implementing A RLI in simulation, comparison plots, and a detailed README explaining the method and results.

**Stretch goal:** Incorporate real-time chunking (RTC) to improve temporal consistency and evaluate its effect on performance.

### Advanced — Extend A RLI to Non-Decomposable Policies with Adaptive Latency Estimation
*Effort: 3+ weeks*

You develop an extension of A RLI that relaxes the assumption that the pretrained policy decomposes into a vision-language backbone and an action expert. You design a method to estimate inference latency adaptively and condition the RL policy accordingly, applying it to a simulated or small real robot control task.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate beyond the original method and address practical challenges in latency-aware RL fine-tuning of generalist policies.

**Grounded in:** Extending A RLI to pretrained policies that do not decompose into backbone and action expert components; investigating adaptive methods to estimate and handle variable inference delays.

**Tech stack:** Python 3.11, PyTorch, Gym or robotics simulation environment, NumPy, Matplotlib

**Data:** Simulated control environment or small-scale real robot data if accessible; no public dataset required.

**Build it:**

1. Review the A RLI method and its reliance on policy decomposition.
2. Design a mechanism to estimate inference latency online during policy execution (e.g., measuring action computation times).
3. Modify the RL policy input conditioning to incorporate adaptive latency estimates without relying on intermediate states from decomposition.
4. Implement the extended A RLI method in simulation with variable and unknown latency.
5. Evaluate performance compared to standard A RLI and naive RL baselines under varying latency conditions.
6. Document the approach, challenges, and results in a comprehensive README.

**Ships as:** A GitHub repo with code for the extended A RLI method, experiments showing adaptive latency handling, and a detailed report in the README.

**Stretch goal:** Apply the extended method to a real-world bimanual manipulation task on a UR5e robot if hardware access is available.

_No authors' own code or datasets are available for this paper; all projects rely on simulated environments and synthetic latency modeling._
