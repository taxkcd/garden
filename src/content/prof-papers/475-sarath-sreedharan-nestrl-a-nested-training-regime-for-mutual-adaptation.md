---
title: "475 · NestRL: A Nested Training Regime for Mutual Adaptation in Human-AI Teaming — Sarath Sreedharan"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sarath-sreedharan"
source_hash: "57fdf35eb3d99fe2f04f87f79c9f21640ee8d9ef198f7eadc8973518747bf202"
sequence: 475
generator: "outreach-garden: managed"
---

# 475 · NestRL: A Nested Training Regime for Mutual Adaptation in Human-AI Teaming

## At a glance

- **Professor:** Sarath Sreedharan
- **Institution:** Colorado State University
- **Paper:** [NestRL: A Nested Training Regime for Mutual Adaptation in Human-AI Teaming](https://arxiv.org/pdf/2602.17737)
- **Authors:** Upasana Biswas, Durgesh Kalwar, Subbarao Kambhampati, Sarath Sreedharan
- **Year:** 2026

## Paper overview

This paper addresses the challenge of creating AI agents that can effectively collaborate with humans by mutually adapting to each other's behaviors. The authors propose NestRL, a nested reinforcement learning training method based on Interactive Partially Observable Markov Decision Processes (I-POMDPs), which models recursive reasoning about partners' adaptive strategies. NestRL trains agents at multiple reasoning levels to avoid brittle coordination and improve generalization to unseen human behaviors. Experiments in a collaborative cooking game (Overcooked) and a user study demonstrate that NestRL agents outperform existing methods in adapting to diverse and adaptive human partners.

### Why it matters

**Research problem:** How to train AI agents that can robustly coordinate with humans who adapt their strategies in response to the AI, addressing mutual adaptation and multiple coordination equilibria in human-AI teaming.

**Why it matters:** Effective human-AI collaboration requires AI agents to adapt not only to fixed human behaviors but also to humans who continuously adjust their strategies in response to the AI. Existing methods often fail to capture this mutual adaptation, leading to brittle coordination and poor generalization to new partners.

**Key contributions:**

- Formalization of mutual adaptation in human-AI teaming as bounded recursive reasoning via I-POMDPs.
- Introduction of NestRL, a nested training regime that learns finitely nested reasoning by training agents at multiple levels against adaptive partners.
- Theoretical proof that NestRL prevents convergence to a single coordination convention, preserving compatibility with multiple joint solutions.
- Empirical validation in a multi-recipe Overcooked environment showing improved coordination with unseen adaptive agents and real humans.
- User study demonstrating that NestRL agents achieve higher task success, adapt within rounds, and are perceived as more responsive and adaptive partners.

## About the professor

**Sarath Sreedharan** — Assistant Professor, Department of Computer Science, Colorado State University.

Research interests: challenges in human-aware planning and planning with incomplete model-knowledge

### Research links

- [Faculty/profile page](https://sarathsreedharan.com)
- [Identity evidence](http://sarathsreedharan.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Interactive Partially Observable Markov Decision Processes
**The paper assumes:** Markov decision processes, partially observable Markov decision processes, multi-agent recursive reasoning models, Bayesian belief updates
**Already in this field?** Skip this entirely if you already understand the theory and application of I-POMDPs and recursive reasoning in multi-agent reinforcement learning.

To understand the foundational framework of Interactive Partially Observable Markov Decision Processes (I-POMDPs) used in NestRL for modeling recursive reasoning and mutual adaptation in human-AI teaming, this background provides two viewing options. The rigorous course offers a deep dive into Markov Decision Processes and related AI concepts, ideal for thorough comprehension, while the fast track provides a concise, intuition-focused introduction to Markov Decision Processes, suitable for quickly grasping the essentials before reading the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS221: Artificial Intelligence: Principles and Techniques | Autumn 2019](https://www.youtube.com/playlist?list=PLoROMvodv4rO1NB9TD4iUZ3qghGEGtqNX) — Stanford Online · 19 videos · 25.1h across 19 episodes

**Watch only this:** Watch episodes 7 and 8: 'Markov Decision Processes 1 - Value Iteration' and 'Markov Decision Processes 2 - Reinforcement Learning' (~2 hours 38 minutes total). These cover the core MDP concepts and RL methods essential for grasping the paper's approach.

*Why it unblocks this paper:* Stanford CS221 is a comprehensive AI course covering Markov Decision Processes in depth, including value iteration and reinforcement learning, which are foundational to understanding I-POMDPs and the nested training regime in NestRL.

*If you want all of it:* About 25.1 hours across 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Markov Decision Process](https://www.youtube.com/playlist?list=PLKQYHgEtgnEAWq86qLOqv7RaLEQN8fIty) — Sangeet Moy Das · 6 videos · 0.4h across 6 episodes

**Watch only this:** Watch episodes 1-4: 'Markov Decision Processes - Georgia Tech - Machine Learning' through 'Markov Decision Processes Four - Georgia Tech - Machine Learning' (~12 minutes total). These cover the basics of MDPs needed to understand the paper's modeling framework.

*Why it unblocks this paper:* This short-form series from Sangeet Moy Das provides a clear, concise introduction to Markov Decision Processes, covering the fundamental concepts quickly and visually, which helps build intuition for I-POMDPs without a large time investment.

*If you want all of it:* About 24 minutes across 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the NestRL paper, start with foundational concepts including Interactive POMDPs, multi-agent reinforcement learning, and theory of mind in AI, as these provide the formal and conceptual basis for modeling recursive reasoning and adaptive partners. Then, focus on the core method of nested reinforcement learning, which is central to the paper's novel training regime. Finally, watch the authors' own talks on nested learning paradigms to gain direct insight into their approach and contributions.

### Interactive POMDPs *(prerequisite)*
Interactive Partially Observable Markov Decision Processes (I-POMDPs) extend POMDPs to multi-agent settings by modeling recursive beliefs about other agents' strategies, which is essential for understanding mutual adaptation in human-AI teaming. The selected video from Microsoft Research provides a comprehensive and rigorous treatment of POMDPs applied to dialogue systems, illustrating uncertainty modeling and policy optimization under partial observability, foundational for grasping I-POMDPs.

*How the paper uses it:* The paper formalizes mutual adaptation in human-AI teaming using finitely nested I-POMDPs to model recursive reasoning about partners' adaptive strategies.

▶ [Partially Observable Markov Decision Processes for Spoken Dialogue Systems](https://www.youtube.com/watch?v=2tKNpzUvDc4) — Microsoft Research · 1:13:49 · 9 years ago

### Multi-agent reinforcement learning *(prerequisite)*
Multi-agent reinforcement learning (MARL) is the fundamental learning paradigm for training agents that must adapt to other adaptive entities, directly relevant to the paper's focus on mutual adaptation and coordination. The seminar by Negar Mehr at MIT offers a recent, in-depth academic talk on learning and control for multi-agent interactions, providing advanced insights into challenges and methods in MARL.

*How the paper uses it:* NestRL trains agents in multi-agent environments where partners adapt their strategies, requiring MARL techniques.

▶ [Negar Mehr: Interactive Autonomy: Learning and Control for Multi-agent Interactions](https://www.youtube.com/watch?v=NERkYgU5UA0) — MIT Robotics · 59:31 · 4 months ago

### Theory of mind in AI *(prerequisite)*
Theory of mind in AI refers to the ability of agents to reason about the beliefs, intentions, and knowledge of other agents, underpinning bounded recursive reasoning in NestRL. The MIT OpenCourseWare lecture on Theory of Mind & Mentalizing offers a rigorous academic perspective on the cognitive and computational aspects of this concept, suitable for advanced readers.

*How the paper uses it:* NestRL's nested training regime is based on bounded recursive reasoning, a computational form of theory of mind.

▶ [20. Theory of Mind & Mentalizing](https://www.youtube.com/watch?v=pfZY5aDJazA) — MIT OpenCourseWare · 1:16:02 · 4 years ago

### Nested reinforcement learning *(the paper's own talk)*
Nested reinforcement learning is the core method enabling training agents at multiple reasoning levels to achieve mutual adaptation, as proposed in NestRL. The talk by Ali Behrouz at NeurIPS 2025, although on a related nested learning paradigm, provides a detailed and rigorous presentation of nested learning architectures and optimization, offering valuable conceptual parallels and technical depth.

*How the paper uses it:* NestRL introduces a nested training regime for finitely nested reasoning policies, central to its approach.

▶ [Ali Behrouz Nested Learning](https://www.youtube.com/watch?v=uX12aCdni9Q) — Phil Trubey · 40:28 · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand NestRL and its contributions to human-AI teaming, start by learning the foundational concepts of multi-agent reinforcement learning and theory of mind in AI, which explain how agents learn and reason about others. Then, grasp Interactive POMDPs, the formal framework modeling recursive reasoning about adaptive partners, before finally exploring nested reinforcement learning, the core method enabling training agents at multiple reasoning levels for mutual adaptation as proposed in the paper.

### Multi-agent reinforcement learning *(prerequisite)*
Multi-agent reinforcement learning (MARL) studies how multiple agents learn to make decisions and coordinate in environments where other agents are also learning and adapting. It provides the fundamental learning paradigm for training AI agents that must interact with other adaptive entities, such as humans or other AI.

*How the paper uses it:* NestRL trains AI agents to coordinate with adaptive human partners using multi-agent reinforcement learning techniques.

▶ [Multi-Agent Reinforcement Learning (Part I)](https://www.youtube.com/watch?v=RCu-nU4_TQM) — Simons Institute for the Theory of Computing · 56:31 · Streamed 4 years ago

### Theory of mind in AI *(prerequisite)*
Theory of mind in AI refers to the ability of an agent to model and reason about the beliefs, intentions, and strategies of other agents. This concept underpins recursive reasoning, where agents anticipate how others will adapt their behavior in response to their own actions.

*How the paper uses it:* NestRL uses bounded recursive reasoning inspired by theory of mind to model mutual adaptation between human and AI agents.

▶ [Theory of Mind-EXPLAINED](https://www.youtube.com/watch?v=74T1D_K-peQ) — AI-ctivity · 5:45 · 3 years ago

### Interactive POMDPs *(prerequisite)*
Interactive Partially Observable Markov Decision Processes (I-POMDPs) extend POMDPs to multi-agent settings by explicitly modeling other agents as part of the environment, including their beliefs and strategies. This framework enables recursive reasoning about adaptive partners under uncertainty.

*How the paper uses it:* NestRL formalizes human-AI teaming as a finitely nested I-POMDP to capture mutual adaptation through recursive reasoning.

▶ [Partially Observable Markov Decision Processes for Spoken Dialogue Systems](https://www.youtube.com/watch?v=2tKNpzUvDc4) — Microsoft Research · 1:13:49 · 9 years ago

### Nested reinforcement learning
Nested reinforcement learning involves training agents at multiple reasoning levels, where higher-level agents learn to adapt to the behaviors of lower-level agents. This approach enables bounded recursive reasoning and mutual adaptation in multi-agent systems.

*How the paper uses it:* NestRL introduces a nested training regime where agents at different reasoning levels are trained against each other to improve coordination and generalization.

▶ [Nested Learning: The Illusion of Deep Learning Architectures](https://www.youtube.com/watch?v=-msDvVOeOZs) — Voxel51 · 33:53 · 7 months ago

## Already in your library

- [Markov Decision Processes 1 - Value Iteration | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=9g32v7bK3Co) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [EI Seminar - Shimon Whiteson - Multi-agent RL](https://www.youtube.com/watch?v=W_9kcQmaWjo) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [Offline Reinforcement Learning](https://www.youtube.com/watch?v=qgZPZREor5I) — also for: Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models (Amy Zhang)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of NestRL's nested training regime for mutual adaptation in human-AI teaming. The beginner project recreates a core emergent behavior from the paper's qualitative analysis, using your existing JavaScript skills. The intermediate project implements a simplified version of the NestRL nested training method on a small-scale Overcooked-like environment, introducing reinforcement learning with PPO in Python. The advanced project extends NestRL by exploring one of the paper's stated limitations: modeling non-recursive human adaptation behaviors, pushing the method beyond level-2 nesting and bounded recursive reasoning.

### Beginner — Simulate NestRL Emergent Coordination Behaviors
*Effort: a weekend, ~8 hours*

You build a small interactive web simulation that visualizes the emergent coordination behaviors described in the paper, such as Level-1 agents waiting under uncertainty and Level-2 agents taking initiative. Using simple rule-based agents in JavaScript, you replicate the waiting and initiative-taking patterns in a minimal collaborative cooking scenario.

**Why it shows you understood the paper:** This project demonstrates you grasp the qualitative coordination behaviors NestRL produces, connecting nested reasoning levels to concrete agent actions. A professor would see you understand the behavioral implications of the nested training regime beyond just metrics.

**Grounded in:** Qualitative analysis revealing emergent coordination behaviors such as waiting and initiative-taking consistent with human-robot co-adaptation patterns.

**Tech stack:** JavaScript, HTML, CSS

**Data:** No external data needed; you simulate agent behaviors based on the paper's qualitative descriptions.

**Build it:**

1. Design a minimal grid or recipe environment inspired by Overcooked with two agents.
2. Implement Level-0 and Level-1 agents as simple rule-based policies with waiting and initiative behaviors.
3. Create a Level-2 agent that models initiative-taking behavior.
4. Visualize agent actions and states in a browser UI with simple animations.
5. Demonstrate scenarios where Level-1 agents wait under uncertainty and Level-2 agents take initiative.
6. Write a README explaining how these behaviors relate to the paper's findings.

**Ships as:** A GitHub repo with a web-based interactive simulation showing emergent coordination behaviors, accompanied by explanations linking them to NestRL's nested reasoning.

**Stretch goal:** Add user controls to toggle agent reasoning levels and observe behavior changes interactively.

### Intermediate — Reimplement NestRL Nested Training on Mini Overcooked
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the NestRL nested training regime in Python using PPO, training Level-1 partner policies against fixed Level-0 policies, then training a Level-2 robot policy against these adaptive partners. You create a small grid-world cooking environment inspired by Overcooked to test coordination success rates compared to a baseline PPO agent trained without nesting.

**Why it shows you understood the paper:** This project shows you can translate the core NestRL method from the paper into code, capturing nested reasoning and mutual adaptation. A professor would see you understand the training regime, recursive policy levels, and evaluation metrics from the paper.

**Grounded in:** Introduction of NestRL, a nested training regime that learns finitely nested reasoning by training agents at multiple levels against adaptive partners; NestRL achieves an average success rate of 81.3% with adaptive partners, outperforming baselines.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3 (for PPO), NumPy

**Data:** No external dataset; you simulate a small Overcooked-like environment with recipes and agent actions as described in the paper.

**Build it:**

1. Implement a minimal Overcooked-inspired environment with simple recipes and partial observability.
2. Implement Level-0 fixed partner policies with simple scripted behaviors.
3. Train Level-1 partner policies using PPO against Level-0 fixed policies.
4. Train a Level-2 robot policy using PPO against the adaptive Level-1 partners.
5. Train a baseline PPO agent without nested training for comparison.
6. Evaluate and compare success rates and variability metrics between NestRL and baseline.
7. Document the training setup, results, and relation to the paper.

**Ships as:** A Python repo with code to train and evaluate nested policies on a mini Overcooked environment, showing improved coordination success and stability over baseline.

**Stretch goal:** Add latent belief embeddings to approximate partner reasoning states as in the paper.

### Advanced — Extend NestRL to Model Non-Recursive Human Adaptation
*Effort: 3+ weeks*

You extend the NestRL framework by incorporating a model of human adaptation that goes beyond bounded level-2 recursive reasoning, for example by integrating a non-recursive or heuristic-based partner adaptation model. You modify the nested training regime to include these alternative partner models and evaluate coordination performance and adaptability in the mini Overcooked environment. This addresses a key limitation noted in the paper about capturing diverse human adaptation behaviors.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of NestRL's assumptions and limitations, and the ability to innovate on the framework to handle more realistic human adaptation. A professor would recognize your capacity to engage with open research challenges and extend state-of-the-art methods.

**Grounded in:** Limitations: The framework assumes partners adapt through recursive reasoning, which may not capture all human adaptation processes, especially irrational or non-recursive behaviors; Future directions: Incorporating models of human irrationality or alternative adaptation mechanisms beyond recursive reasoning.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3, NumPy

**Data:** Simulated mini Overcooked environment as in the intermediate project, with added partner adaptation models.

**Build it:**

1. Review the NestRL nested training codebase from the intermediate project.
2. Design and implement a non-recursive partner adaptation model (e.g., heuristic or rule-based adaptation).
3. Integrate this partner model into the nested training regime as an alternative Level-1 partner.
4. Train Level-2 robot policies against these new partner models.
5. Evaluate coordination success, adaptability, and robustness compared to original NestRL agents.
6. Analyze results and discuss implications for modeling diverse human adaptation.
7. Write a detailed report linking your extension to the paper's limitations and future directions.

**Ships as:** A research-style GitHub repo with extended NestRL code, experiments on alternative partner adaptation models, and analysis discussing the impact on mutual adaptation.

**Stretch goal:** Scale the approach to a more complex environment or incorporate partial reward misalignment between agents.

_The paper's authors have not released code or datasets for NestRL, so all implementations must be reimplemented from the paper's descriptions and simulated environments inspired by Overcooked._
