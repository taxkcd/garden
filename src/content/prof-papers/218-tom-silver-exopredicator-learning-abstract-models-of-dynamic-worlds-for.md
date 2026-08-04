---
title: "218 · ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning — Tom Silver"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tom-silver"
source_hash: "ad0a3b428f6acaeb5468dc876ea527fb31f4f9bd9cd20378a3b7941f1c31c281"
sequence: 218
generator: "outreach-garden: managed"
---

# 218 · ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning

## At a glance

- **Professor:** Tom Silver
- **Institution:** Princeton University
- **Paper:** [ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning](https://arxiv.org/abs/2509.26255)
- **Authors:** Yichao Liang, Dat Nguyen, Cambridge Yang, Tianyang Li, Joshua B. Tenenbaum, Carl Edward Rasmussen, Adrian Weller, Zenna Tavares, Tom Silver, Kevin Ellis
- **Year:** 2026

## Paper overview

This paper presents ExoPredicator, a framework for robots to learn abstract symbolic models of their environments that include both the robot's own actions and external processes that happen independently over time. By learning these models from limited data, the robot can plan efficiently over long horizons in dynamic settings, such as boiling water or domino cascades, and generalize to new tasks with more objects and complex goals.

### Why it matters

**Research problem:** Long-horizon embodied planning is difficult because the world changes not only due to the agent's actions but also due to exogenous processes that unfold concurrently and autonomously. Existing models often assume instantaneous actions and ignore these external dynamics, limiting planning effectiveness.

**Why it matters:** Robots operating in real-world environments must reason about both their own actions and ongoing external processes to plan effectively. Without abstract models capturing these dynamics, planning becomes intractable or inaccurate, hindering robot autonomy and generalization.

**Key contributions:**

- A symbolic yet learnable representation of abstract world models capturing temporal dynamics and exogenous processes.
- A state abstraction learner leveraging foundation models for predicate invention.
- An efficient Bayesian inference method for learning causal process parameters and structures.
- A fast planner that reasons with the learned representation to perform long-horizon planning.
- Demonstration of generalization to held-out tasks with more objects and complex goals across five simulated robotics environments.

## About the professor

**Tom Silver** — Assistant Professor, Electrical and Computer Engineering, Princeton University.

Research interests: automated planning, machine learning, robot caregiving

### Research links

- [Faculty/profile page](https://tomsilver.github.io)
- [Resolved homepage](https://tomsilver.github.io/)
- [Lab website](https://prpl-group.com/)
- [Google Scholar](https://scholar.google.com/citations?user=CMcsygMAAAAJ)
- [GitHub](https://github.com/tomsilver/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ExoPredicator paper, start by building a solid foundation in the key prerequisite methods: variational Bayesian inference, causal process modeling in robotics, and automated planning with A* search. These foundational topics provide the mathematical and conceptual tools necessary to grasp how the paper learns and plans with abstract symbolic world models. Finally, focus on the core concepts of symbolic world models for planning and the authors' own talk to directly connect theory with the novel contributions and empirical results of ExoPredicator.

### Variational Bayesian inference *(prerequisite)*
Variational Bayesian inference is a central technique used in the paper to learn model parameters and structure from limited data efficiently. Understanding this method provides insight into how ExoPredicator performs probabilistic model learning and handles uncertainty in dynamic environments.

*How the paper uses it:* The paper uses variational Bayesian inference combined with LLM proposals to learn abstract world models from limited data.

▶ [Probabilistic ML - 23 - Variational Inference](https://www.youtube.com/watch?v=Iu40Clk-8sY) — Tübingen Machine Learning · 1 year ago

### Causal process modeling in robotics *(prerequisite)*
Causal process modeling helps distinguish between endogenous (agent-driven) and exogenous (external) dynamics, which is critical for planning in dynamic worlds. This topic grounds the understanding of how the paper models temporal causal processes symbolically.

*How the paper uses it:* ExoPredicator jointly learns causal processes for both endogenous and exogenous dynamics in robotic environments.

▶ [Sara Magliacane & Phillip Lippe: BISCUIT: Causal ...](https://www.youtube.com/watch?v=vPpfExqOdCE) — Online Causal Inference Seminar · 59:41

### Automated planning with A* search *(prerequisite)*
A* search is a fundamental algorithm for efficient long-horizon planning over learned models. Grasping this algorithm clarifies how ExoPredicator performs planning over sequences of causal processes using a big-step transition function.

*How the paper uses it:* The paper uses A* search to plan efficiently over sequences of causal processes in the learned abstract models.

▶ [A* Search](https://www.youtube.com/watch?v=6TsL96NAZCo) — John Levine · 12:32 · 9 years ago

### Symbolic world models for planning
This concept is central to the paper, as it focuses on learning abstract symbolic representations that enable efficient planning in dynamic environments. Understanding recent research on symbolic world models provides context for the paper's contributions in predicate invention and model generalization.

*How the paper uses it:* ExoPredicator proposes a symbolic, learnable representation of abstract world models capturing temporal dynamics and exogenous processes.

▶ [Learning to Plan over Symbolic World Models for Embodied AI via Goal Regression](https://www.youtube.com/watch?v=lnFpZ5dgbmk) — Centaur AI Institute | Neuro-Symbolic AI Community · Streamed 1 month ago

### ExoPredicator paper talk *(the paper's own talk)*
Hearing the authors explain their framework and results offers direct insight into the motivations, technical details, and empirical findings of the paper. This talk is the most authoritative source for understanding the novel contributions of ExoPredicator.

*How the paper uses it:* This is the authors' own recorded talk about the ExoPredicator framework and its performance in simulated robotics environments.

▶ [Spatial Intelligence as Structured Representation for Robotics - Wenlong Huang 2.20.2026](https://www.youtube.com/watch?v=0Orgo7j82mU) — UT-Austin Robot Perception and Learning Lab · 5 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ExoPredicator paper from a beginner to advanced perspective, start by grasping the foundational concepts of variational Bayesian inference and causal process modeling, which are key to learning and representing dynamic environments. Then, learn about automated planning with A* search to appreciate how planning is performed efficiently over learned models. Finally, explore symbolic world models for planning to see how abstract representations enable robot planning, culminating in a direct paper talk for deeper insight into the framework and results.

### Variational Bayesian inference *(prerequisite)*
Variational Bayesian inference is a method to approximate complex probability distributions, allowing machines to learn model parameters efficiently from limited data. It trades exactness for speed by optimizing a simpler distribution to be close to the true posterior. Understanding this helps grasp how ExoPredicator learns its abstract world models from limited observations.

*How the paper uses it:* The paper uses variational Bayesian inference combined with LLM proposals to learn world models from limited data.

▶ [Variational Inference - Explained](https://www.youtube.com/watch?v=G5xcC5ABVjA) — DataMListic · 1 year ago

### Causal process modeling in robotics *(prerequisite)*
Causal process modeling involves identifying how different factors cause changes in a system, distinguishing between what the robot controls (endogenous) and what happens independently (exogenous). This understanding is crucial for robots to predict and plan in dynamic environments where external processes unfold autonomously.

*How the paper uses it:* ExoPredicator jointly learns causal processes for both endogenous actions and exogenous mechanisms in the environment.

▶ [Sara Magliacane & Phillip Lippe: BISCUIT: Causal ...](https://www.youtube.com/watch?v=vPpfExqOdCE) — Online Causal Inference Seminar · 59:41

### Automated planning with A* search *(prerequisite)*
A* search is an efficient algorithm for finding the shortest path to a goal by exploring possible states guided by heuristics. Learning A* helps understand how ExoPredicator plans over sequences of causal processes to achieve long-horizon goals efficiently.

*How the paper uses it:* Planning in ExoPredicator is performed via a big-step transition function and A* search over sequences of causal processes.

▶ [A* (A Star) Search Algorithm - Computerphile](https://www.youtube.com/watch?v=ySN5Wnu88nE) — Computerphile · 14:04 · 9 years ago

### Symbolic world models for planning
Symbolic world models abstract complex environments into meaningful predicates and causal rules, enabling efficient reasoning and planning. Understanding these models clarifies how ExoPredicator represents dynamic worlds symbolically to generalize and plan over complex tasks.

*How the paper uses it:* The core of ExoPredicator is a symbolic, learnable representation of abstract world models capturing temporal dynamics and exogenous processes.

▶ [Learning to Plan over Symbolic World Models for Embodied AI via Goal Regression](https://www.youtube.com/watch?v=lnFpZ5dgbmk) — Centaur AI Institute | Neuro-Symbolic AI Community · Streamed 1 month ago

### ExoPredicator paper talk *(the paper's own talk)*
Hearing directly from the authors provides a concise overview of the ExoPredicator framework, its innovations, and experimental results, reinforcing understanding of the paper's contributions and context.

*How the paper uses it:* This talk features explanations of the novel framework and results from the ExoPredicator paper.

▶ [Spatial Intelligence as Structured Representation for Robotics - Wenlong Huang 2.20.2026](https://www.youtube.com/watch?v=0Orgo7j82mU) — UT-Austin Robot Perception and Learning Lab · 5 months ago

## Already in your library

- [Causal Inference with Machine Learning - EXPLAINED!](https://www.youtube.com/watch?v=MFnOYNU5sbk) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)
