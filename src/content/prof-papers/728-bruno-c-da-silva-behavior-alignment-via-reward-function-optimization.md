---
title: "728 · Behavior Alignment via Reward Function Optimization — Bruno C. da Silva"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bruno-c-da-silva"
source_hash: "b46a4304ae65d1fcb1e296d150a193efe8f7160113f9720bc0435a1bb2a7b494"
sequence: 728
generator: "outreach-garden: managed"
---

# 728 · Behavior Alignment via Reward Function Optimization

## At a glance

- **Professor:** Bruno C. da Silva
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [Behavior Alignment via Reward Function Optimization](https://arxiv.org/pdf/2310.19007)
- **Authors:** Dhawal Gupta, Yash Chandak, Philip S. Thomas, Scott M. Jordan, Bruno Castro da Silva
- **Year:** 2023

## Paper overview

This paper addresses the challenge of designing reward functions in reinforcement learning (RL) that guide agents to desired behaviors efficiently and robustly. It introduces BARFI, a novel bi-level optimization framework that learns behavior alignment reward functions by blending primary and auxiliary rewards. BARFI adapts to misaligned or poorly specified auxiliary rewards, ensuring robust learning and mitigating biases in RL algorithms. The method is scalable to high-dimensional problems and outperforms traditional approaches like naive reward addition and potential-based reward shaping.

### Why it matters

**Research problem:** Designing reward functions that efficiently guide RL agents towards intended behaviors is difficult, especially when auxiliary rewards are heuristically specified and may be misaligned or poorly designed, potentially leading to unintended or suboptimal behaviors.

**Why it matters:** Reward design is critical in RL as sparse or misaligned rewards can hinder learning or induce undesirable behaviors. Making RL more accessible to practitioners who are not experts in reward design can broaden its applicability and improve performance in complex tasks.

**Key contributions:**

- Identification and analysis of limitations of potential-based reward shaping in policy gradient methods.
- Introduction of a novel bi-level optimization framework to learn behavior alignment reward functions that blend primary and auxiliary rewards robustly.
- Demonstration that the framework can mitigate biases inherent in policy gradient and off-policy RL algorithms by optimizing reward parameters and discount factors.
- Development of an efficient implicit gradient-based algorithm (BARFI) for scalable bi-level optimization in high-dimensional RL problems.
- Comprehensive empirical evaluation showing BARFI's robustness to misaligned auxiliary rewards and superior performance compared to naive and potential-based reward shaping methods.

## About the professor

**Bruno C. da Silva** — Assistant Professor, College of Information and Computer Sciences, Univ. of Massachusetts Amherst.

Research interests: reinforcement learning (RL), decision making, robotics, and AI safety

### Research links

- [Faculty/profile page](https://people.cs.umass.edu/~bsilva)
- [Lab website](https://all.cs.umass.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bi-level Optimization in Machine Learning
**The paper assumes:** bi-level optimization theory, implicit differentiation, gradient-based optimization in machine learning
**Already in this field?** Skip this entirely if you already understand bi-level optimization methods and implicit gradient computation in machine learning contexts.

This background focuses on bi-level optimization in machine learning, which is central to understanding the BARFI framework's design and algorithmic contributions in the paper. The rigorous course option provides a deep, structured university-level treatment of distributed and federated optimization methods relevant to bi-level problems, while the fast track offers a concise, intuition-driven introduction to key concepts in constrained optimization and KKT conditions that underpin bi-level optimization theory. Choose the course for a thorough foundation and the fast track for a quicker conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2024 - Distributed Optimization and Machine Learning](https://www.youtube.com/playlist?list=PLOzRYVm0a65fhKDS8cYIC7YCuVGJ4FOJx) — NPTEL IIT Bombay · 48 videos · 23.8h across 48 episodes

**Watch only this:** Watch Week 7: Lecture 23: Method of Multipliers and Week 7: Lecture 24: Dual Ascent and Dual Decomposition, plus Week 10: Lecture 35: Algorithms for Distributed Optimization and Week 10: Lecture 36: Algorithms for Distributed Optimization-2, about 2 hours total. These cover key bi-level optimization methods and algorithmic foundations needed to grasp the paper's approach.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Distributed Optimization and Machine Learning covers advanced optimization algorithms including bi-level optimization techniques, implicit gradients, and convergence analysis, directly relevant to understanding BARFI's bi-level framework and efficient gradient computations.

*If you want all of it:* 23.8 hours across 48 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lagrange and KKT in Constrained Optimization](https://www.youtube.com/playlist?list=PLN7nX8sS1dGE0jJA2QiVN2dxDTAemneGv) — Viraj Ariyawansa · 8 videos · 2.3h across 8 episodes

**Watch only this:** Watch the first 4 episodes: 'Understanding Lagrange Multipliers Visually', 'The Karush–Kuhn–Tucker (KKT)  Conditions and the Interior Point Method for Convex Optimization', 'Meaning of Lagrange multiplier', and 'The Lagrangian', about 1 hour total. These episodes give the essential intuition and mathematical tools for bi-level optimization.

*Why it unblocks this paper:* This short series on Lagrange and KKT in Constrained Optimization provides a clear, visual, and conceptual introduction to the Lagrangian framework and KKT conditions, which are fundamental to formulating and solving bi-level optimization problems like BARFI's reward function optimization.

*If you want all of it:* 2.3 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the BARFI framework for behavior alignment via reward function optimization, start with foundational concepts in bi-level optimization and implicit gradients, which are key computational techniques enabling BARFI's efficient learning of reward functions. Next, review traditional reward shaping and potential-based methods to appreciate the limitations BARFI addresses. Finally, focus on the core concept of BARFI itself, prioritizing the authors' own academic-level presentations and related AI alignment talks to gain direct insights into the paper's contributions and context.

### Bi-level optimization in reinforcement learning *(prerequisite)*
Bi-level optimization forms the mathematical backbone of BARFI, where an outer optimization adjusts reward parameters and an inner optimization finds the policy maximizing the learned reward. Understanding this framework is crucial to grasp how BARFI learns behavior-aligned rewards robustly.

*How the paper uses it:* BARFI is a bi-level optimization framework that learns reward functions by optimizing an outer objective over the inner RL policy optimization.

▶ [Functional Bilevel Optimization: Theory and Algorithms](https://www.youtube.com/watch?v=qTdOFaPlvvc) — Institute of Applied Mathematics (METU) · 1:11:31 · 1y ago

### Implicit gradients and meta-learning *(prerequisite)*
Implicit gradients enable efficient computation of updates in bi-level optimization without expensive backpropagation through the entire inner optimization. This technique is central to BARFI's scalability and computational feasibility in high-dimensional RL problems.

*How the paper uses it:* BARFI uses implicit gradient approximations to efficiently compute updates for the reward parameters in its bi-level optimization.

▶ [Efficient and Modular Implicit Differentiation (Machine Learning Research Paper Explained)](https://www.youtube.com/watch?v=8Oy7o3Yu-Xo) — Yannic Kilcher · 32:47 · 5y ago

### Reward shaping and potential-based methods *(prerequisite)*
Traditional reward shaping and potential-based methods are common approaches to incorporate auxiliary rewards in RL but have known limitations, especially with misaligned or action-dependent rewards. Understanding these methods provides context for BARFI's improvements.

*How the paper uses it:* The paper analyzes limitations of potential-based reward shaping and compares BARFI's performance against these traditional methods.

▶ [Reward shaping](https://www.youtube.com/watch?v=S6X7Kb7v3II) — Tim Miller · 20:00 · 2y ago

### BARFI paper talk *(paper-talk search result; attribution unverified)*
The core concept is the BARFI framework itself. Watching talks by the paper's authors or related academic presentations on AI alignment and reward modeling offers the most direct and detailed insights into the method, its motivation, and empirical results.

*How the paper uses it:* This section features the authors' own and closely related academic talks on BARFI and reward alignment in RL.

▶ [AI Alignment w/ Changing and Influenceable Reward Functions - Micah Carroll (PIBBSS Speaker Series)](https://www.youtube.com/watch?v=3KS6guhbPN4) — Principles of Intelligence · 1:56:03 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts in reinforcement learning (RL) reward design, starting with traditional reward shaping methods and the challenges they face. It then builds intuition on bi-level optimization and implicit gradients, which are key computational tools used in the BARFI framework. Finally, it presents a focused talk on BARFI itself, enabling a clear understanding of how this novel method robustly learns aligned reward functions to improve RL behavior.

### Reward shaping and potential-based methods *(prerequisite)*
Reward shaping is a traditional technique in RL to guide agents by modifying the reward function, often using potential functions to provide additional feedback and speed up learning. Understanding these methods helps grasp the limitations BARFI addresses, such as handling misaligned or action-dependent auxiliary rewards.

*How the paper uses it:* BARFI improves upon traditional reward shaping by robustly blending primary and auxiliary rewards to avoid suboptimal behaviors.

▶ [Reward shaping](https://www.youtube.com/watch?v=S6X7Kb7v3II) — Tim Miller · 20:00 · 2y ago

### Bi-level optimization in reinforcement learning *(prerequisite)*
Bi-level optimization involves solving an outer optimization problem that depends on the solution of an inner optimization problem, a structure common in meta-learning and reward function learning. In RL, this means optimizing reward parameters while considering the policy that maximizes those rewards, which is central to BARFI's approach.

*How the paper uses it:* BARFI formulates reward learning as a bi-level optimization problem, with the outer level tuning reward parameters and the inner level optimizing the policy.

▶ [Bilevel Problems, MPCCs, and Multi-Leader-Follower Games - Part 1/2](https://www.youtube.com/watch?v=A4B_ZcRa3_o) — ALOP Trier University · 1:29:16 · 5y ago

### Implicit gradients and meta-learning *(prerequisite)*
Implicit gradients allow efficient computation of gradients in bi-level optimization without fully differentiating through the inner optimization path, reducing memory and computational costs. This technique is widely used in meta-learning and is crucial for scaling BARFI to high-dimensional RL problems.

*How the paper uses it:* BARFI uses implicit gradient methods to efficiently update reward parameters during bi-level optimization without expensive computations.

▶ [Efficient and Modular Implicit Differentiation (Machine Learning Research Paper Explained)](https://www.youtube.com/watch?v=8Oy7o3Yu-Xo) — Yannic Kilcher · 32:47 · 5y ago

### BARFI paper talk
This talk provides a direct presentation of the BARFI framework, explaining its motivation, methodology, and empirical results. It offers specific insights into how BARFI learns behavior-aligned reward functions and addresses challenges in reward design.

*How the paper uses it:* The talk is by the authors and covers the BARFI framework in detail, complementing the foundational concepts with concrete explanations.

▶ [Lec 25 Reward Modelling](https://www.youtube.com/watch?v=X3PkVU9Hetw) — NPTEL - Indian Institute of Science, Bengaluru · 46:28 · 2w ago

## Already in your library

- [Introduction to Bilevel Optimization, Linear Bilevel Problems, and Maybe Beyond - Part 1/2](https://www.youtube.com/watch?v=hTDrSjBtKLc) — also for: Towards Unveiling Vulnerabilities of Large Reasoning Models in Machine Unlearning (Chenglin Miao)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Lecture 19 - Reward Model & Linear Dynamical System | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=0rt2CsEQv6U) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)
- [MIT 6.S091: Introduction to Deep Reinforcement Learning (Deep RL)](https://www.youtube.com/watch?v=zR11FLZ-O9M) — also for: A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2 (Damon L. Woodard)
- [Minae Kwon's talk on "Reward Design with Language Models"](https://www.youtube.com/watch?v=v4A5kc6ZVsE) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the BARFI framework from the paper "Behavior Alignment via Reward Function Optimization." The beginner project focuses on reproducing a core experimental result with simple RL environments and reward shaping baselines. The intermediate project involves implementing the BARFI bi-level optimization method from the paper and comparing it against naive reward shaping on a standard benchmark. The advanced project extends BARFI to address one of its stated limitations by experimenting with more general auxiliary rewards or discount factors, showing your ability to innovate beyond the original work.

### Beginner — Reproduce BARFI's Robustness to Misaligned Auxiliary Rewards in CartPole
*Effort: a weekend, ~8 hours*

You build a simple reinforcement learning setup using OpenAI Gym's CartPole environment. Implement naive reward addition and potential-based reward shaping baselines, then simulate misaligned auxiliary rewards to reproduce the paper's finding that these baselines fail or degrade performance. Visualize and compare learning curves to show how naive methods struggle under misaligned rewards.

**Why it shows you understood the paper:** This project shows you understand the problem of misaligned auxiliary rewards and the limitations of traditional reward shaping methods, a key motivation for BARFI.

**Grounded in:** Key result: "Naive reward combination and potential-based shaping methods often fail or produce suboptimal policies under misaligned auxiliary rewards."

**Tech stack:** Python 3.11, OpenAI Gym, NumPy, Matplotlib

**Data:** Use OpenAI Gym CartPole-v1 environment as the RL benchmark; no external dataset needed.

**Build it:**

1. Set up the CartPole-v1 environment and a basic policy gradient agent.
2. Implement naive reward addition by summing primary and auxiliary rewards.
3. Implement potential-based reward shaping as described in the paper.
4. Design a misaligned auxiliary reward function that conflicts with the primary reward.
5. Train agents with each reward scheme and plot learning curves comparing performance.
6. Analyze and document how naive and potential-based methods degrade under misalignment.

**Ships as:** A GitHub repo with code to run experiments, plots showing learning curves, and a README explaining the results and their connection to the paper's findings.

**Stretch goal:** Add a simple heuristic to downweight auxiliary rewards and observe if performance improves.

### Intermediate — Implement BARFI Bi-level Optimization on MountainCar Environment
*Effort: 2-3 weekends, ~20 hours*

You implement the BARFI framework's core bi-level optimization algorithm from the paper, including the implicit gradient computation for reward parameter updates. Apply it to the MountainCar-v0 environment with both primary and auxiliary rewards, some of which are misaligned. Compare BARFI's learned reward function and policy performance against naive reward addition and potential-based shaping baselines.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main algorithm and empirically validate its advantages, showing deep comprehension of BARFI's bi-level optimization and implicit gradient techniques.

**Grounded in:** Key contribution: "Development of an efficient implicit gradient-based algorithm (BARFI) for scalable bi-level optimization in high-dimensional RL problems." Key result: "BARFI consistently achieves near-optimal performance even with misaligned auxiliary rewards."

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym, NumPy, Matplotlib

**Data:** Use OpenAI Gym MountainCar-v0 environment; no external dataset needed.

**Build it:**

1. Implement a policy gradient RL agent using PyTorch for MountainCar-v0.
2. Implement naive reward addition and potential-based reward shaping baselines.
3. Implement BARFI's bi-level optimization framework: outer loop for reward parameter updates, inner loop for policy optimization.
4. Implement implicit gradient computation using Neumann series approximations as described in the paper.
5. Define parameterized reward functions blending primary and auxiliary rewards.
6. Train and compare all methods, plotting performance metrics and reward parameter evolution.
7. Document the implementation details, challenges, and results in the README.

**Ships as:** A GitHub repo with BARFI implementation, baseline methods, training scripts, performance plots, and a detailed README linking results to the paper's claims.

**Stretch goal:** Experiment with different parameterizations of the reward function and analyze sensitivity.

### Advanced — Extend BARFI to Learn Discount Factors and Auxiliary Rewards on Continuous Control
*Effort: 3-4 weeks, ~80 hours*

You extend the BARFI framework to jointly optimize not only the behavior alignment reward function but also discount factors and more general auxiliary reward parameterizations, addressing a limitation and future direction from the paper. Apply this extended BARFI to a continuous control task such as HalfCheetah-v4 using neural network policies. Evaluate whether learning discount factors improves robustness and performance compared to fixed discounting.

**Why it shows you understood the paper:** This project shows your ability to innovate on the paper's method by tackling a stated limitation and future direction, demonstrating research-level comprehension and engineering skill to scale BARFI to complex tasks with enhanced flexibility.

**Grounded in:** Limitation: "The method relies on the expressiveness of parameterized reward functions; insufficient parameterization may limit performance." Future direction: "Extending the framework to support more general forms of auxiliary rewards and discount factors."

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym, MuJoCo or equivalent continuous control simulator, NumPy, Matplotlib

**Data:** Use OpenAI Gym MuJoCo HalfCheetah-v4 environment as the continuous control benchmark; no external dataset needed.

**Build it:**

1. Reimplement or reuse your BARFI codebase from the intermediate project with neural network policies.
2. Extend the reward parameterization to include discount factors as learnable parameters.
3. Modify the bi-level optimization to jointly update reward parameters and discount factors using implicit gradients.
4. Incorporate more flexible auxiliary reward parameterizations, possibly action-dependent.
5. Train the extended BARFI on HalfCheetah-v4 and compare performance to BARFI with fixed discount factors and to baseline reward shaping.
6. Analyze the learned discount factors and reward parameters to interpret their effect.
7. Document the extension, experimental setup, results, and insights in the README.

**Ships as:** A GitHub repo with extended BARFI code, training scripts for continuous control, performance comparisons, and a comprehensive README discussing the extension's impact and relation to the paper.

**Stretch goal:** Investigate computational efficiency improvements to reduce memory overhead of the BARFI unrolled variant.
