---
title: "236 · PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL — Mina Guirguis"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mina-guirguis"
source_hash: "89ccf796b0f4bdc551afeeea71bf953e570139120b1f2015d43616b7e1d4eeca"
sequence: 236
generator: "outreach-garden: managed"
---

# 236 · PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL

## At a glance

- **Professor:** Mina Guirguis
- **Institution:** Texas State University
- **Paper:** [PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL](http://www.cs.txstate.edu/~mg65/papers/gamesec25.pdf)
- **Authors:** Javad Mokhtari Koushyar, Mina Guirguis, George Atia
- **Year:** 2026

## Paper overview

This paper addresses the security risks in open-source software (OSS) development, specifically the threat of malicious pull requests (PRs) that can inject harmful code into widely used software packages. The authors model the problem of assigning PRs to maintainers as a game between a defender (assigning PRs) and an attacker (submitting malicious PRs). They develop reinforcement learning algorithms within a game-theoretic framework to derive effective strategies for both players, demonstrating improved performance over baseline methods on real OSS projects.

### Why it matters

**Research problem:** How to assign pull requests to maintainers in open-source software projects in the presence of stealthy attackers submitting malicious PRs aiming to inject harmful code, while considering maintainers' availability, expertise, and PR severity.

**Why it matters:** Open-source software is widely used and critical to many systems, but its transparency and collaborative nature expose it to supply-chain attacks via malicious PRs. Such attacks can compromise downstream systems globally, as exemplified by the Log4Shell vulnerability. Effective PR assignment strategies are essential to detect and mitigate these threats.

**Key contributions:**

- Developed a novel game-theoretic framework modeling PR assignment under adversarial conditions capturing maintainer availability, expertise, PR severity, and backlog.
- Designed reinforcement learning algorithms within the PSRO framework to handle the combinatorial complexity and learn strong approximate strategies for defender and attacker.
- Evaluated the approach on real-world OSS projects, demonstrating superior performance of learned policies over random and greedy baselines.
- Provided a practical method to model stealthy, persistent attackers injecting malicious code incrementally rather than flooding PRs.

## About the professor

**Mina Guirguis** — Professor, Computer Science, Texas State University.

Research interests: AI/ML in Cybersecurity Decision Making, Space Cyber, Security in Cyber-Physical Systems

### Research links

- [Faculty/profile page](http://www.cs.txstate.edu/~mg65)
- [Resolved homepage](https://userweb.cs.txstate.edu/~mg65/research.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PuRe Defender paper, start with foundational concepts of partially observable stochastic games and the Policy-Space Response Oracle (PSRO) framework, as these underpin the game-theoretic modeling and algorithmic approach. Next, study Proximal Policy Optimization (PPO), the deep reinforcement learning algorithm used to train the defender and attacker policies. Then, explore the domain context of open-source software supply chain security to appreciate the practical motivation. Finally, focus on the core concept of game-theoretic reinforcement learning and the authors' own talk if available, to grasp the novel contributions and results of the paper.

### Partially observable stochastic games *(prerequisite)*
Partially observable stochastic games (POSGs) provide the mathematical framework to model multi-agent interactions with uncertainty and incomplete information, which is essential to represent the defender-attacker dynamics in the paper. Understanding POSGs helps in grasping how the paper models the PR assignment problem under adversarial conditions with partial observability.

*How the paper uses it:* The paper formulates the PR assignment problem as a two-player general-sum game with partial observability.

▶ [Stochastic games with neural perception mechanisms](https://www.youtube.com/watch?v=LuI-IsD72Bk) — Simons Institute for the Theory of Computing · 1:06:46

### Policy-Space Response Oracle PSRO *(prerequisite)*
PSRO is an advanced algorithmic framework used to compute approximate best-response policies in complex games by iteratively expanding policy sets. It is critical to understand PSRO to appreciate how the paper handles the combinatorial complexity of the PR assignment game and learns robust defender and attacker strategies.

*How the paper uses it:* The authors use PSRO to design reinforcement learning algorithms that compute strong approximate strategies for both players.

▶ [The Contextual Bandits Problem: A New, Fast, and Simple ...](https://www.youtube.com/watch?v=gzxRDw3lXv8) — Microsoft Research · 1:00:56

### Proximal Policy Optimization PPO *(prerequisite)*
PPO is a state-of-the-art deep reinforcement learning algorithm that balances sample efficiency and training stability. Understanding PPO is necessary to follow how the paper trains the defender and attacker policies within the PSRO framework effectively.

*How the paper uses it:* The paper uses PPO to train defender and attacker policies efficiently within the PSRO framework.

▶ [L4 TRPO and PPO (Foundations of Deep RL Series)](https://www.youtube.com/watch?v=KjWF8VIMGiY) — Pieter Abbeel · 25:21

### Open-source software supply chain security *(prerequisite)*
This domain context explains the critical security challenges in OSS development, including supply chain attacks via malicious pull requests. Understanding this background is important to appreciate the practical significance and motivation of the paper's adversarial PR assignment problem.

*How the paper uses it:* The paper addresses security risks in OSS supply chains caused by malicious pull requests.

▶ [NDSS 2026 - Keynote 2: Securing the Software Supply Chain](https://www.youtube.com/watch?v=rifS4khiNoM) — NDSS Symposium · 1:10:09

### Game-theoretic reinforcement learning
This concept combines game theory and reinforcement learning to model and solve multi-agent adversarial problems, directly reflecting the paper's approach to the PR assignment problem. Studying this will provide insight into how the paper integrates these fields to derive effective defender and attacker strategies.

*How the paper uses it:* The paper develops reinforcement learning algorithms within a game-theoretic framework to model attacker-defender dynamics.

▶ [General Game-Theoretic Multiagent Reinforcement Learning](https://www.youtube.com/watch?v=lPxFn1-mhVY) — Simons Institute for the Theory of Computing · 40:25

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the PuRe Defender paper, starting with the security challenges in open-source software supply chains. It then builds up to the game-theoretic and reinforcement learning methods used to model and solve the adversarial pull request assignment problem. The path progresses from domain context to technical methods, enabling a clear grasp of the paper's approach and contributions.

### Open-source software supply chain security *(prerequisite)*
Learn why open-source software supply chains are vulnerable to attacks, especially through malicious pull requests, and why securing these supply chains is critical. This context motivates the need for advanced defender strategies against stealthy attackers.

*How the paper uses it:* The paper addresses security risks in OSS supply chains caused by malicious pull requests.

▶ [Securing the Unseen: Defending Against Open Source ...](https://www.youtube.com/watch?v=4eZAQR_Klvc) — The Linux Foundation · 28:54

### Partially observable stochastic games *(prerequisite)*
Understand the framework of partially observable stochastic games, which model multi-agent interactions with uncertainty and incomplete information. This is key to grasping how the defender and attacker interact under uncertainty in the paper.

*How the paper uses it:* The PR assignment problem is modeled as a two-player partially observable extensive-form game.

▶ [Stochastic games with neural perception mechanisms](https://www.youtube.com/watch?v=LuI-IsD72Bk) — Simons Institute for the Theory of Computing · 1:06:46

### Game-theoretic reinforcement learning
Explore how game theory and reinforcement learning combine to model and learn strategies in adversarial multi-agent settings. This helps explain how the paper derives defender and attacker policies through learning in a game framework.

*How the paper uses it:* The authors use deep RL within a game-theoretic framework to learn defender and attacker strategies.

▶ [General Game-Theoretic Multiagent Reinforcement Learning](https://www.youtube.com/watch?v=lPxFn1-mhVY) — Simons Institute for the Theory of Computing · 40:25

### Proximal Policy Optimization PPO *(prerequisite)*
Understand PPO, a popular and efficient deep reinforcement learning algorithm used to train policies by balancing exploration and stable updates. PPO is the RL method used to train the defender and attacker policies in the paper.

*How the paper uses it:* The authors use PPO within PSRO to train defender and attacker policies.

▶ [Proximal Policy Optimization | ChatGPT uses this](https://www.youtube.com/watch?v=MVXdncpCbYE) — CodeEmporium · 13:26


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth around the PuRe Defender paper. The beginner project reproduces a core metric from the paper using a simplified simulation to demonstrate understanding of the game-theoretic PR assignment problem. The intermediate project reimplements the paper's core reinforcement learning method (PPO within PSRO) on a small-scale simulated environment, comparing defender policies against baselines. The advanced project extends the paper by incorporating dynamic maintainer expertise and availability, addressing a stated limitation and exploring evolving attacker tactics, thus demonstrating capacity for genuine research extension.

### Beginner — Simulate Pull Request Assignment Game and Measure Malicious PR Detection Rate
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the pull request assignment scenario modeled as a two-player game between a defender and an attacker. The simulation will include basic parameters for maintainers' expertise and availability, PR severity, and a stealthy attacker injecting malicious PRs incrementally. You then compute and visualize the malicious PR detection rate metric similar to the paper's reported results.

**Why it shows you understood the paper:** This project shows you understand the core problem formulation as a game between defender and attacker, and the importance of metrics like malicious PR detection rate. It demonstrates grasp of the adversarial setting and key variables influencing PR assignment security.

**Grounded in:** Trained defender policies (PRD) consistently outperform random and greedy baselines in terms of malicious PR detection rate (up to ~84% in small environments).

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Simulated data representing maintainers, PRs, and attacker behavior based on parameters described in the paper's small environment setup.

**Build it:**

1. Implement a simple environment simulating maintainers with fixed expertise and availability levels.
2. Model a stealthy attacker injecting malicious PRs incrementally over time.
3. Implement baseline defender assignment policies: random and greedy.
4. Simulate multiple rounds of PR assignments and record detection outcomes.
5. Calculate and plot the malicious PR detection rate for each defender policy.
6. Write a README explaining the simulation setup, assumptions, and results.

**Ships as:** A Jupyter notebook and scripts simulating the PR assignment game with plots comparing detection rates of baseline defender policies, demonstrating the adversarial dynamics.

**Stretch goal:** Add a simple heuristic defender policy that prioritizes maintainers by expertise and compare its detection rate.

### Intermediate — Reimplement PuRe Defender's PPO-PSRO Framework on a Small Simulated OSS Project
*Effort: 2 weekends, ~20 hours*

You reimplement the core reinforcement learning method from the paper: training defender and attacker policies using Proximal Policy Optimization (PPO) within the Policy-Space Response Oracle (PSRO) framework. You apply this to a small-scale simulated environment inspired by the paper's small environment parameters, and compare the learned defender policy against random and greedy baselines on metrics like average reward and malicious PR detection rate.

**Why it shows you understood the paper:** This project shows you can translate the paper's novel game-theoretic RL approach into working code, handle the combinatorial complexity with PSRO, and evaluate policies with meaningful metrics. It demonstrates comprehension of the core algorithmic contributions and experimental methodology.

**Grounded in:** We design reinforcement learning algorithms within the Policy-Space Response Oracle (PSRO) framework to handle the combinatorial complexity and learn strong approximate strategies for defender and attacker.

**Tech stack:** Python 3.11, PyTorch, stable-baselines3 (for PPO), numpy, matplotlib

**Data:** Simulated PR assignment environment with parameters inspired by the paper's small environment (e.g., 3 maintainers with varying expertise and availability, PR severity levels).

**Build it:**

1. Implement the simulated environment modeling maintainers, PRs, attacker stealthy behavior, and backlog dynamics.
2. Implement PPO agents for defender and attacker roles using stable-baselines3 or custom PyTorch code.
3. Implement the PSRO training loop to iteratively train best-response policies for both players.
4. Train defender and attacker policies for a fixed number of timesteps (e.g., 100,000).
5. Evaluate the trained defender policy against random and greedy baselines on detection rate and average reward.
6. Document the implementation details, training curves, and evaluation results in a README.

**Verified links from the paper:**

- <https://github.com/j0m0k0/PuReX> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python codebase with PPO-PSRO training scripts, trained policy models, evaluation scripts, and a report comparing learned policies to baselines on key metrics.

**Stretch goal:** Visualize policy behaviors and backlog dynamics over time to better understand learned strategies.

### Advanced — Extend PuRe Defender Framework to Model Dynamic Maintainer Expertise and Evolving Attacker Tactics
*Effort: 3+ weeks*

You extend the PuRe Defender framework by incorporating dynamic maintainer expertise and availability that change over time, addressing a limitation noted in the paper. Additionally, you model evolving attacker tactics beyond stealthy incremental PR injections, such as adaptive attack strategies reacting to defender behavior. You implement these extensions in the PPO-PSRO framework and evaluate their impact on defender policy robustness and detection performance.

**Why it shows you understood the paper:** This project demonstrates deep understanding of the paper's limitations and future directions, and the ability to implement meaningful research extensions. It shows capacity to innovate on the core method and explore more realistic, dynamic adversarial scenarios relevant to OSS security.

**Grounded in:** Limitations: The model assumes fixed parameters for detection probabilities and resolution times which may vary in practice. Future directions: Incorporating dynamic or learned detection probabilities and maintainer behaviors; exploring evolving attacker tactics beyond stealthy incremental PR injections.

**Tech stack:** Python 3.11, PyTorch, stable-baselines3, numpy, matplotlib

**Data:** Simulated environment extended with time-varying maintainer expertise and availability profiles, and attacker strategies that adapt based on defender actions.

**Build it:**

1. Extend the environment to model maintainer expertise and availability as dynamic variables changing over episodes.
2. Implement attacker agents capable of evolving tactics, e.g., switching between stealthy incremental and bursty PR injections based on defender detection history.
3. Modify the PPO-PSRO training loop to accommodate the extended environment and attacker behaviors.
4. Train and evaluate defender policies under these dynamic conditions, comparing robustness and detection metrics to the original static model.
5. Analyze results to identify strengths and weaknesses of defender strategies against evolving attackers.
6. Prepare a detailed README documenting the extensions, experimental setup, results, and implications.

**Verified links from the paper:**

- <https://github.com/j0m0k0/PuReX> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** An extended PPO-PSRO codebase with dynamic environment and attacker models, trained policies, evaluation scripts, and a comprehensive report discussing the impact of dynamic factors on PR assignment security.

**Stretch goal:** Integrate learned detection probabilities or maintainer behavior models using online learning or meta-RL techniques.

_The authors have not released their own code for this paper; the intermediate and advanced projects rely on reimplementing the core PPO-PSRO method from the paper's description and using the third-party PuReX repository as a baseline reference._
