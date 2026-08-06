---
title: "264 · Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing — Aron Laszka"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aron-laszka"
source_hash: "1e963644be309473d8a1391bf85c626aaca982ac025b59a2f597361423c73170"
sequence: 264
generator: "outreach-garden: managed"
---

# 264 · Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing

## At a glance

- **Professor:** Aron Laszka
- **Institution:** Pennsylvania State University
- **Paper:** [Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing](https://arxiv.org/pdf/2603.11433)
- **Authors:** Taha Eghtesad, Yevgeniy Vorobeychik, Aron Laszka
- **Year:** 2026

## Paper overview

This paper addresses the problem of false data injection (FDI) attacks on crowdsourced navigation systems, where attackers manipulate traffic data to mislead routing algorithms and cause congestion. The authors propose a game-theoretic framework using adversarial reinforcement learning to model the interaction between an attacker and a defender. They compute equilibrium strategies that enable robust detection of such attacks, minimizing traffic disruption even under worst-case adaptive adversaries.

### Why it matters

**Research problem:** False data injection attacks on crowdsourced navigation applications can manipulate routing data to cause widespread traffic congestion and delays, posing serious risks especially to emergency response times. Existing detection methods struggle against stealthy, adaptive attackers who evade classical anomaly detection.

**Why it matters:** FDI attacks can cause life-threatening delays for emergency responders, increase commute times, fuel consumption, emissions, and disrupt public transit and logistics, leading to significant economic and environmental costs. Robust detection mechanisms are critical to ensure resilient urban mobility.

**Key contributions:**

- Formulation of a strategic zero-sum game modeling attacker and defender interaction in FDI attacks on transportation networks.
- Development of a computational method using multi-agent deep reinforcement learning and PSRO to compute equilibrium detection strategies.
- Demonstration that the equilibrium detection strategy robustly limits travel time deviations under worst-case adaptive attacks.
- Extensive experimental evaluation on real and synthetic transportation networks showing superior performance over baseline attack and defense methods.

## About the professor

**Aron Laszka** — Assistant Professor, College of Information Sciences and Technology, Pennsylvania State University.

Research interests: artificial intelligence and cyber-physical systems, machine learning for decision making and optimization, smart and connected communities, critical infrastructure, cybersecurity

### Research links

- [Faculty/profile page](https://aronlaszka.com)
- [Resolved homepage](https://aronlaszka.com/author/aron-laszka/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on adversarial reinforcement learning for detecting false data injection attacks in vehicular routing, start with foundational knowledge on zero-sum stochastic games and multi-agent deep reinforcement learning, as these form the theoretical and methodological basis of the work. Next, explore the Policy Space Response Oracles (PSRO) algorithm, which is central to computing equilibrium strategies in the paper. Finally, focus on the authors' own talk and related adversarial reinforcement learning content to grasp the specific application and innovations presented.

### Game theory zero-sum stochastic games *(prerequisite)*
Understanding zero-sum stochastic games is essential as the paper models the attacker-defender interaction as such a game. The selected video provides a rigorous, research-level seminar on the complexity and theory of these games, which underpins the strategic framework used in the paper.

*How the paper uses it:* The paper formulates a zero-sum stochastic game between attacker and defender for false data injection attacks.

▶ [The Complexity of Markov Equilibrium in Stochastic Games](https://www.youtube.com/watch?v=NnY7lLUEkqY) — Simons Institute for the Theory of Computing · 54:35

### Multi-agent deep reinforcement learning *(prerequisite)*
Multi-agent deep reinforcement learning is the core computational method used to learn strategies for both attacker and defender. The chosen seminar from MIT Embodied Intelligence offers a comprehensive and advanced treatment of multi-agent RL, suitable for understanding the learning dynamics in the paper.

*How the paper uses it:* The approach uses multi-agent deep reinforcement learning to compute equilibrium strategies for attacker and defender.

▶ [EI Seminar - Shimon Whiteson - Multi-agent RL](https://www.youtube.com/watch?v=W_9kcQmaWjo) — MIT Embodied Intelligence · 54:55

### Policy Space Response Oracles (PSRO) *(prerequisite)*
PSRO is a key algorithmic technique employed to efficiently compute approximate Nash equilibria in multi-agent settings, directly relevant to the paper's method. The selected talk from the Multi-Agent Learning Seminar provides an in-depth discussion of PSRO within a research context.

*How the paper uses it:* The paper leverages PSRO to compute equilibrium strategies efficiently for attack detection.

▶ [Max Smith: Strategic Knowledge Transfer](https://www.youtube.com/watch?v=GON26AF8Yqk) — Multi-Agent Learning Seminar · 53:09 · 2 years ago

### Adversarial reinforcement learning for detection
This concept is central to the paper, combining adversarial learning and reinforcement learning to detect false data injection attacks. The chosen lecture from Stanford University offers a detailed and rigorous explanation of adversarial examples and adversarial training, foundational to understanding the paper's approach.

*How the paper uses it:* The paper uses adversarial reinforcement learning to develop robust detection strategies against false data injection attacks.

▶ [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — Stanford University School of Engineering · 1:21:46

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper authors or closely related presentations provide the most precise insights into their novel approach and experimental results. Although no exact talk on this paper was found, the closest relevant talk on adversarial policies attacking deep reinforcement learning by a research seminar is included to provide context on adversarial RL techniques.

*How the paper uses it:* While no direct talk on this paper was found, related talks by researchers on adversarial policies in deep RL offer valuable insights into the methods used.

▶ [Adversarial Policies: Attacking Deep Reinforcement Learning](https://www.youtube.com/watch?v=-_j-fmVpn_s) — Computer Vision Seminar · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of zero-sum stochastic games to grasp the strategic interaction between attacker and defender. Next, build intuition on multi-agent deep reinforcement learning, which is the core method used to compute strategies in this setting. Then, study the Policy Space Response Oracles (PSRO) algorithm, which efficiently finds approximate equilibrium strategies. Finally, explore adversarial anomaly detection in cyber-physical systems and adversarial reinforcement learning for detection to see how these concepts apply to robustly detecting false data injection attacks in vehicular routing.

### Game theory zero-sum stochastic games *(prerequisite)*
Zero-sum stochastic games model situations where two players with completely opposing goals interact over multiple stages, with outcomes depending on both players' actions and probabilistic state transitions. Understanding this concept helps you see how attackers and defenders strategically plan their moves over time in uncertain environments.

*How the paper uses it:* The paper formulates the attacker-defender interaction as a zero-sum stochastic game to capture their strategic conflict over time.

▶ [Zero Sum Stochastic Games - Georgia Tech - Machine Learning](https://www.youtube.com/watch?v=-7KpdncFGWE) — Udacity · 5:05

### Multi-agent deep reinforcement learning *(prerequisite)*
Multi-agent deep reinforcement learning extends reinforcement learning to settings with multiple decision-makers learning simultaneously, enabling agents to adapt to others' behaviors in complex environments. This method is crucial for training both attacker and defender policies that respond to each other.

*How the paper uses it:* The authors use multi-agent deep reinforcement learning to compute best-response strategies for both attacker and defender in the game.

▶ [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — MATLAB · 14:44

### Policy Space Response Oracles (PSRO) *(prerequisite)*
PSRO is an algorithmic framework that iteratively builds a population of strategies and computes approximate Nash equilibria by training best responses to mixtures of opponent strategies. It efficiently handles the complexity of multi-agent games by focusing on promising policies rather than the entire strategy space.

*How the paper uses it:* The paper leverages PSRO to efficiently compute equilibrium detection and attack strategies in the zero-sum game.

▶ [Zun Li: Combining Tree Search and Population Based ...](https://www.youtube.com/watch?v=UKY0i4bTc3s) — Multi-Agent Learning Seminar · 56:59

### Adversarial anomaly detection in cyber-physical systems *(prerequisite)*
Adversarial anomaly detection focuses on identifying malicious manipulations in cyber-physical systems, where attackers try to evade detection by mimicking normal behavior. Understanding this helps appreciate the challenges in detecting stealthy false data injection attacks in transportation networks.

*How the paper uses it:* The paper develops a robust detection mechanism against stealthy false data injection attacks in vehicular routing systems.

▶ [Securing the Grid Edge: AI-Driven Cybersecurity for DERMS ...](https://www.youtube.com/watch?v=kAFFnsWcg3Q) — Center for Cyber Security Research, UND · 1:10:55

### Adversarial reinforcement learning for detection
Adversarial reinforcement learning combines adversarial training with reinforcement learning to create agents that can detect or defend against adaptive attackers who learn to evade detection. This approach enables robust detection strategies that anticipate and counter evolving attack tactics.

*How the paper uses it:* The core method in the paper uses adversarial reinforcement learning to model and detect false data injection attacks effectively.

▶ [Davide Paglieri - Adversarial examples to Multi-Agent RL with ...](https://www.youtube.com/watch?v=_WSnlMsrWqE) — RL and Agents Reading Group · 37:06

## Already in your library

- [General Game-Theoretic Multiagent Reinforcement Learning](https://www.youtube.com/watch?v=lPxFn1-mhVY) — also for: PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL (Mina Guirguis)
- [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder grounded in the paper "Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing." Starting with a beginner-level simulation of false data injection attacks and simple detection, you then implement the paper's core adversarial reinforcement learning method at intermediate level. Finally, the advanced project extends the framework to handle partial attacker knowledge or sensor noise, addressing a key limitation noted by the authors.

### Beginner — Simulate and Detect Simple False Data Injection Attacks in Vehicular Routing
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of a transportation network with travel time data, implement a basic false data injection attack that perturbs travel times, and a simple anomaly detection mechanism based on thresholding deviations. The project reproduces a simplified version of the attack and detection interaction to visualize how false data injection can increase travel times and how naive detection performs.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental problem of false data injection attacks on crowdsourced navigation and the challenge of detecting them, as well as the impact on travel times.

**Grounded in:** The project relates to the paper's research problem and the demonstration that false data injection attacks increase travel times and that detection must balance false positives and sensitivity.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** You simulate a small synthetic transportation network with edge travel times and perturbations, as no public dataset is provided.

**Build it:**

1. Create a synthetic graph representing a small transportation network with edges and baseline travel times.
2. Implement a simple false data injection attack that adds fixed or random perturbations to travel times on selected edges.
3. Implement a threshold-based anomaly detector that flags edges with travel times deviating beyond a set threshold.
4. Simulate routing with and without attack and detection, measuring total travel time increases.
5. Visualize travel time distributions and detection results to illustrate attack impact and detection trade-offs.

**Ships as:** A Jupyter Notebook with simulation code, plots showing attack impact on travel times, and detection performance metrics.

**Stretch goal:** Add a simple cost model for false positives and tune the detection threshold to balance detection sensitivity and false alarms.

### Intermediate — Reimplement Adversarial Reinforcement Learning for FDI Attack Detection
*Effort: 2 weekends, ~20 hours*

You implement the core adversarial reinforcement learning framework from the paper, modeling the attacker and defender as agents in a zero-sum stochastic game. Using multi-agent deep RL and a simplified PSRO algorithm, you train attacker and defender policies to approximate equilibrium strategies on a small synthetic network. You compare your equilibrium defense strategy against a baseline anomaly detector and report travel time and false alarm metrics.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into code, understand multi-agent RL and PSRO, and reproduce the key result that equilibrium strategies outperform baselines in limiting travel time increases.

**Grounded in:** This project directly implements the paper's key contribution: the multi-agent deep reinforcement learning and PSRO approach to compute equilibrium detection strategies.

**Tech stack:** Python 3.11, PyTorch, NumPy, NetworkX, Jupyter Notebook

**Data:** Use a small synthetic transportation network generated with NetworkX, simulating travel times and perturbations as per the paper's description.

**Build it:**

1. Model the transportation network as a graph with travel time states and define attacker and defender action spaces.
2. Implement deep RL agents for attacker and defender using PyTorch, with reward functions reflecting travel time and false alarm costs.
3. Implement a simplified PSRO loop to iteratively train best-response policies for attacker and defender.
4. Train the agents until approximate convergence and extract equilibrium strategies.
5. Evaluate the defender's strategy against a baseline threshold detector, measuring total travel time and false positive rates.
6. Visualize training progress and compare performance metrics.

**Ships as:** A GitHub repository with code implementing adversarial RL and PSRO, training logs, and a README reporting comparative results and visualizations.

**Stretch goal:** Extend the model to include a simple false positive cost in the defender's reward and analyze its effect on detection sensitivity.

### Advanced — Extend Adversarial RL Detection to Partial Attacker Knowledge and Noisy Sensor Data
*Effort: 3+ weeks*

You extend the adversarial reinforcement learning framework to handle scenarios where the attacker has only partial knowledge of the network state and where sensor data is noisy or incomplete. This involves modifying the environment to simulate partial observability and sensor noise, adapting the RL agents to operate under uncertainty, and evaluating the robustness of the defender's detection strategy under these more realistic conditions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the paper, demonstrating your ability to innovate beyond the original work by incorporating real-world complexities and improving detection robustness.

**Grounded in:** Addresses the paper's stated limitation that the threat model assumes full attacker knowledge and perfect sensor data, and the future direction to incorporate sensor noise and partial observability.

**Tech stack:** Python 3.11, PyTorch, NumPy, NetworkX, Jupyter Notebook

**Data:** Use synthetic transportation network data with simulated sensor noise and partial attacker observability as described in the paper's limitations and future directions.

**Build it:**

1. Modify the environment to simulate sensor noise by adding stochastic perturbations to observed travel times.
2. Implement partial observability for the attacker by restricting its view of the network state.
3. Adapt attacker and defender RL agents to operate under these uncertainties, possibly using recurrent neural networks or belief state representations.
4. Retrain the agents using the modified environment and PSRO framework.
5. Evaluate the defender's detection performance and robustness compared to the baseline equilibrium strategy without noise or partial knowledge.
6. Document the impact of these real-world complexities on detection effectiveness and discuss potential improvements.

**Ships as:** A comprehensive GitHub repository with extended adversarial RL code, experiments on noisy and partial knowledge scenarios, and a detailed README discussing methodology, results, and limitations.

**Stretch goal:** Incorporate multiple coordinated attackers or integrate trusted physical sensor data sources to further enhance detection robustness.
