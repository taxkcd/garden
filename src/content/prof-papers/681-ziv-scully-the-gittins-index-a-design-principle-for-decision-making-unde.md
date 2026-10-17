---
title: "681 · The Gittins Index: A Design Principle for Decision-Making Under Uncertainty — Ziv Scully"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ziv-scully"
source_hash: "f3fa2dadc16171347a94cd0e27969591cda0b854e718d98e08e678dd05e21156"
sequence: 681
generator: "outreach-garden: managed"
---

# 681 · The Gittins Index: A Design Principle for Decision-Making Under Uncertainty

## At a glance

- **Professor:** Ziv Scully
- **Institution:** Cornell University
- **Paper:** [The Gittins Index: A Design Principle for Decision-Making Under Uncertainty](https://ziv.codes/scully_gittins_2025/scully_gittins_2025.pdf)
- **Authors:** Ziv Scully, Alexander Terenin

## Paper overview

This tutorial paper explains the Gittins index, a mathematical tool that provides optimal or near-optimal solutions to decision-making problems under uncertainty, such as multi-armed bandits, queue scheduling, and Bayesian optimization. It introduces the concept through the Pandora’s box problem, generalizes it to Markov chain selection problems, and demonstrates both cases where the Gittins index policy is optimal and where it performs strongly but not optimally. The paper also discusses computational challenges and open problems.

### Why it matters

**Research problem:** How to optimally make sequential decisions under uncertainty when choosing among multiple stochastic options, especially in settings modeled as Markov decision processes, including multi-armed bandits, queue scheduling, and search problems.

**Why it matters:** Effective decision-making under uncertainty is central to many scientific, engineering, and technological fields. Finding optimal or near-optimal policies for such problems can improve performance in applications like resource allocation, scheduling, and optimization tasks.

**Key contributions:**

- A tutorial-style exposition of the Gittins index and its intuition via Pandora’s box.
- A general formulation of the Markov chain selection problem encompassing many decision-making scenarios.
- A rigorous definition of the Gittins index via local MDPs and proof of the optimality of the Gittins policy in this setting.
- Survey of examples where the Gittins index policy is optimal and where it is near-optimal or empirically strong.
- Discussion of computational challenges in calculating the Gittins index, especially for continuous state spaces.

## About the professor

**Ziv Scully** — Assistant Professor, Operations Research and Information Engineering, Cornell University.

Research interests: decision-making under uncertainty, queueing (scheduling, load balancing, resource allocation), Bayesian optimization

### Research links

- [Faculty/profile page](https://ziv.codes)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markov decision processes
**The paper assumes:** Markov decision processes, dynamic programming, stochastic control theory
**Already in this field?** Skip this entirely if you already understand the basics of Markov decision processes and their solution methods.

To understand the Gittins index and its optimality in decision-making under uncertainty, a solid grasp of Markov decision processes (MDPs) is essential. The rigorous course provides a comprehensive, in-depth treatment of MDPs and related decision-making frameworks, while the fast track offers a concise, intuition-focused introduction to the core concepts of MDPs. Choose the rigorous course for a deep theoretical foundation and the fast track for a quick, clear overview that covers the essentials efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Decision-making under Uncertainty (Spring 2026), Technical University of Denmark (DTU)](https://www.youtube.com/playlist?list=PLwngpBwa_6_IGlQ3v00Qm1YZXfODHpJHf) — Georgios (George) Tsaousoglou · 21 videos · 12.0h across 21 episodes

**Watch only this:** Lectures 2a (Decision Making under Uncertainty (Markov Decision Processes)), 6 (Dynamic Programming fundamentals), and 10a (Choosing the type of Policy), about 2.5 hours total — these cover the core MDP concepts, dynamic programming, and policy selection crucial for understanding the Gittins index framework.

*Why it unblocks this paper:* This Technical University of Denmark course on Decision-making under Uncertainty covers Markov decision processes in a structured, university-level format, including foundational concepts, dynamic programming, and stochastic programming, directly relevant to the paper's formulation and proofs involving local MDPs and optimal policies.

*If you want all of it:* 12.0 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Markov Decision Process](https://www.youtube.com/playlist?list=PLKQYHgEtgnEAWq86qLOqv7RaLEQN8fIty) — Sangeet Moy Das · 6 videos · 0.4h across 6 episodes

**Watch only this:** All 6 episodes, about 0.4 hours total — covers the basics of MDPs, decision problems, and example problems to quickly build intuition.

*Why it unblocks this paper:* This short-form series by Sangeet Moy Das provides a concise and clear introduction to Markov decision processes with six brief episodes totaling about 24 minutes, ideal for quickly grasping the fundamental ideas behind MDPs relevant to the paper.

*If you want all of it:* 0.4 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on the Gittins index as a design principle for decision-making under uncertainty, start by building a solid foundation in Markov decision processes and multi-armed bandits, which are the fundamental frameworks underlying the problem setting. Next, study dynamic programming techniques essential for computing indices and solving related MDPs. Then, explore the Pandora’s box problem as an intuitive motivating example illustrating the Gittins index concept. Finally, focus on the core concept of the Gittins index itself, prioritizing the authors' own talks and rigorous university lectures to grasp the theory, optimality results, and computational challenges discussed in the paper.

### Markov decision processes *(prerequisite)*
Markov decision processes (MDPs) provide the fundamental mathematical framework for modeling sequential decision-making under uncertainty, which is central to the paper's formulation of the Markov chain selection problem. Understanding MDPs is essential to grasp how the Gittins index policy optimally solves these problems.

*How the paper uses it:* The paper formulates the decision problem as a Markov chain selection problem, a special case of MDPs.

▶ [RL Course by David Silver - Lecture 2: Markov Decision Process](https://www.youtube.com/watch?v=lfHX2hHRMVQ) — Google DeepMind · 11 yr ago

### Multi-armed bandits *(prerequisite)*
Multi-armed bandits are a classic problem setting where the Gittins index policy is known to be optimal, providing a concrete context to understand the index's role in balancing exploration and exploitation. This background helps in appreciating the generalizations and applications discussed in the paper.

*How the paper uses it:* The paper uses multi-armed bandits as a key example where the Gittins index policy is optimal.

▶ [CS885 Lecture 8a: Multi-armed bandits](https://www.youtube.com/watch?v=Qy-vum3GH-s) — Pascal Poupart · 8 yr ago

### Dynamic programming *(prerequisite)*
Dynamic programming is a key computational technique for solving MDPs and computing the Gittins index via value functions and root-finding on local MDPs. Familiarity with stochastic dynamic programming principles is crucial for understanding the computational aspects and challenges highlighted in the paper.

*How the paper uses it:* The paper discusses computing the Gittins index through dynamic programming on local MDPs.

▶ [Stanford AA203 Optimal and Learning-Based Control](https://www.youtube.com/watch?v=C9mLpI8Td9g) — Stanford Online · 1:17:01

### Pandora’s box problem *(prerequisite)*
The Pandora’s box problem serves as an intuitive and motivating example illustrating the Gittins index concept and its optimality in a simpler setting. Understanding this problem helps build intuition for the more general Markov chain selection framework developed in the paper.

*How the paper uses it:* The paper introduces the Gittins index via the Pandora’s box problem as a motivating example.

▶ [Pandora's Box with Correlations: Learning and Approximation - Shuchi Chawla](https://www.youtube.com/watch?v=67ZRdtsQA5I) — Institute for Advanced Study · 5 yr ago

### The Gittins index: A Design Principle for Decision-Making Under Uncertainty
This section focuses on the core concept of the paper: the Gittins index and its optimality for sequential decision-making under uncertainty. Priority is given to talks by the paper's lead author, Ziv Scully, and rigorous university lectures that provide detailed theoretical insights, proofs, and discussions of computational challenges and extensions.

*How the paper uses it:* The paper's main contribution is a tutorial exposition and generalization of the Gittins index policy.

▶ [How Robust Is the Gittins Index? A Queueing Case Study](https://www.youtube.com/watch?v=7yf-fBEGSqA) — Simons Institute for the Theory of Computing · Streamed 4 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the Gittins index and its role in optimal decision-making under uncertainty. Starting with the basics of Markov decision processes and multi-armed bandits, it then covers the motivating Pandora’s box problem before explaining the Gittins index policy itself. This progression builds intuition step-by-step, preparing the learner to grasp the paper's contributions and applications.

### Markov decision processes *(prerequisite)*
Markov decision processes (MDPs) provide a mathematical framework for modeling sequential decision-making where outcomes are partly random and partly under the control of a decision maker. Understanding states, actions, transitions, and rewards in MDPs is essential for grasping how the Gittins index is defined and applied.

*How the paper uses it:* The paper models decision problems as MDPs to define and analyze the Gittins index policy.

▶ [Markov Decision Processes Explained | The Foundation of ...](https://www.youtube.com/watch?v=ljrjEh13Vyg) — The Synthetic Mind · 5:18

### Multi-armed bandits *(prerequisite)*
The multi-armed bandit problem is a classic example of decision-making under uncertainty where one must choose repeatedly among several options with unknown rewards. It illustrates the exploration-exploitation tradeoff and provides a concrete setting where the Gittins index policy is optimal.

*How the paper uses it:* The paper applies the Gittins index to multi-armed bandits as a key example of its optimality and practical relevance.

▶ [Multi-Armed Bandit : Data Science Concepts](https://www.youtube.com/watch?v=e3L4VocZnnQ) — ritvikmath · 6 yr ago

### Pandora’s box problem *(prerequisite)*
The Pandora’s box problem is an intuitive example where one decides which uncertain options to inspect before choosing the best one, balancing the cost of inspection against potential reward. It serves as a motivating example to introduce the intuition behind the Gittins index.

*How the paper uses it:* The paper uses the Pandora’s box problem to build intuition for the Gittins index and demonstrate its optimality over simpler heuristics.

▶ [Pandora's Box with Correlations: Learning and Approximation - Shuchi Chawla](https://www.youtube.com/watch?v=67ZRdtsQA5I) — Institute for Advanced Study · 5 yr ago

### Gittins index policy
The Gittins index assigns a value to each option based on its potential future rewards, allowing an optimal policy to select the option with the highest index at each step. This policy elegantly solves complex sequential decision problems by reducing them to simpler local comparisons.

*How the paper uses it:* The paper rigorously defines the Gittins index via local MDPs and proves the optimality of the Gittins index policy in the Markov chain selection problem.

▶ [The Gittins Index: When to Exploit, When to Explore](https://www.youtube.com/watch?v=0XvfXkSJihQ) — Intellectually Curious Podcast · 7 mo ago

### Paper authors talk
Hearing directly from the paper’s lead author provides valuable insights into the motivation, challenges, and implications of the Gittins index in scheduling and decision-making under uncertainty. These talks often clarify subtle points and highlight open problems.

*How the paper uses it:* Ziv Scully’s talks complement the paper by discussing the Gittins index’s robustness and applications in queueing and scheduling.

▶ [How Robust Is the Gittins Index? A Queueing Case Study](https://www.youtube.com/watch?v=7yf-fBEGSqA) — Simons Institute for the Theory of Computing · Streamed 4 yr ago

## Already in your library

- [Markov Decision Processes 1 - Value Iteration | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=9g32v7bK3Co) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [Markov Decision Process (MDP) - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=4Fqt2Nk2lhY) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [4 Principle  of Optimality  - Dynamic Programming introduction](https://www.youtube.com/watch?v=5dRGRueKU3M) — also for: Protein Local Structure Alignment Under the Discrete Fréchet Distance (Binhai Zhu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the Gittins index as presented in the paper. The beginner project reproduces a core illustrative example (Pandora’s box) to grasp the intuition behind the Gittins index. The intermediate project implements the Gittins index policy for a simplified multi-armed bandit problem and compares it to a baseline policy, showing practical application and performance evaluation. The advanced project tackles one of the paper's open challenges by developing an approximate method to compute the Gittins index for a continuous-state Markov chain, addressing computational limitations discussed in the paper.

### Beginner — Pandora’s Box Simulation and One-Step Lookahead Comparison
*Effort: a weekend, ~8 hours*

You build a simulation of the Pandora’s box problem as described in the paper, implementing both the one-step lookahead policy and the Gittins index policy for this setting. You reproduce the example that shows the suboptimality of one-step lookahead compared to the Gittins index policy.

**Why it shows you understood the paper:** This project demonstrates that you understand the fundamental intuition behind the Gittins index and can implement and compare decision policies in a canonical example from the paper.

**Grounded in:** Section 2.2 shows that one-step lookahead is suboptimal in Pandora’s box, with explicit example and performance gap.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic data generated by simulating Pandora’s box problem parameters as described in the paper.

**Build it:**

1. Implement the Pandora’s box problem environment with multiple boxes having stochastic rewards and inspection costs.
2. Implement the one-step lookahead policy that decides which box to open next based on immediate expected gain.
3. Implement the Gittins index policy for the Pandora’s box problem using the local MDP formulation described in the paper.
4. Simulate multiple runs comparing total rewards collected by both policies.
5. Visualize and report the performance gap between the policies.

**Ships as:** A Jupyter notebook with code, simulation results, and plots comparing the one-step lookahead and Gittins index policies on Pandora’s box.

**Stretch goal:** Add a visualization of the Gittins index values for each box over time to illustrate how the index guides decisions.

### Intermediate — Gittins Index Policy for Multi-Armed Bandits with Bernoulli Rewards
*Effort: 1-3 weekends, ~20 hours*

You implement the Gittins index policy for a classical multi-armed bandit problem with Bernoulli reward distributions, computing the index via root-finding on the local MDP value function as described in the paper. You compare its performance against a simple baseline such as epsilon-greedy or UCB on simulated bandit instances.

**Why it shows you understood the paper:** This project shows you can translate the paper’s core method into code for a standard decision-making problem, understand the computational approach to the Gittins index, and evaluate its empirical benefits.

**Grounded in:** The Gittins index can be computed via root-finding on the local MDP value function, though this is challenging for infinite or continuous state spaces.

**Tech stack:** Python 3.11, NumPy, SciPy (for root-finding), matplotlib

**Data:** Synthetic multi-armed bandit data with Bernoulli arms generated during simulation.

**Build it:**

1. Implement a multi-armed bandit environment with Bernoulli reward arms.
2. Implement a function to compute the Gittins index for each arm by solving the local MDP via root-finding as per the paper’s description.
3. Implement a baseline policy such as epsilon-greedy or UCB for comparison.
4. Run simulations comparing cumulative rewards of the Gittins index policy and the baseline over multiple trials.
5. Plot and analyze the performance metrics to demonstrate the advantage of the Gittins index policy.

**Ships as:** A Python package or notebook with implementations of the Gittins index policy and baseline, simulation results, and performance comparison plots.

**Stretch goal:** Extend the implementation to handle Markovian arms with simple finite states instead of Bernoulli rewards.

### Advanced — Approximate Gittins Index Computation for Continuous-State Markov Chains
*Effort: a few weeks, ~60+ hours*

You develop and evaluate an approximate algorithm to compute the Gittins index for continuous-state Markov chains, addressing the computational challenges highlighted in the paper. You implement a discretization or function approximation approach to estimate the index and test it on a synthetic continuous-state problem inspired by the paper’s framework.

**Why it shows you understood the paper:** This project tackles a key open problem from the paper, demonstrating deep comprehension of the Gittins index theory, computational challenges, and practical approximation methods for real-world applicability.

**Grounded in:** Computing the Gittins index for continuous or infinite state spaces remains a significant open challenge.

**Tech stack:** Python 3.11, NumPy, SciPy, JAX or PyTorch (for function approximation), matplotlib

**Data:** Synthetic continuous-state Markov chain data generated by simulating a simple stochastic process (e.g., Gaussian random walk with rewards).

**Build it:**

1. Review the paper’s description of the local MDP and Gittins index computation for Markov chains.
2. Design a discretization or function approximation scheme (e.g., grid discretization, neural network regression) to approximate the value function needed for index computation.
3. Implement root-finding or optimization routines to estimate the approximate Gittins index from the approximated value function.
4. Create a synthetic continuous-state Markov chain environment with known reward structure.
5. Evaluate the approximate Gittins index policy against a baseline policy (e.g., myopic or heuristic) in simulation.
6. Analyze the approximation quality and performance trade-offs, documenting limitations and potential improvements.

**Ships as:** A well-documented codebase with approximate Gittins index computation, simulation environment, evaluation scripts, and a detailed README discussing methods, results, and challenges.

**Stretch goal:** Incorporate Bayesian optimization or queue scheduling inspired extensions to test the approximate index in more complex settings.
