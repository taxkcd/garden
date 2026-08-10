---
title: "218 · ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning — Tom Silver"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tom-silver"
source_hash: "429b19029e9e4f29f7a3a2884107173a79291fe25ddce3cc1f5696e5c2885572"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Graphical Models
**The paper assumes:** probabilistic graphical models, Bayesian inference, causal modeling, variational inference
**Already in this field?** Skip this entirely if you already understand probabilistic graphical models and Bayesian inference methods for causal process learning.

This background focuses on probabilistic graphical models, which are essential for understanding the paper's approach to learning and reasoning with abstract symbolic world models involving causal processes and temporal dynamics. The rigorous course option provides a deep, structured university-level treatment of Bayesian networks and inference techniques, while the fast track offers a concise, intuition-driven explainer series to quickly grasp the core concepts. Choose the lane that fits your available time and depth needs; the fast track is a focused introduction, not a watered-down version.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Learning and Reasoning with Bayesian Networks](https://www.youtube.com/playlist?list=PLlDG_zCuBub6ywAIrM1DfJp8xaeVjyvwx) — UCLA Automated Reasoning Group · 36 videos · 22.2h across 36 episodes

**Watch only this:** Episodes 2a, 2b, 3a, 3b, 4a, 4b, 6a, 6b, 11a, 11b, 12a, 12b — about 8.5 hours total. This subset covers probability calculus, Bayesian network fundamentals, inference methods, and learning parameters and structure, which are critical for understanding the paper's methodology.

*Why it unblocks this paper:* This UCLA course by Adnan Darwiche covers Bayesian networks comprehensively, including syntax, semantics, independence, inference algorithms, and learning parameters and structure, directly supporting the paper's use of variational Bayesian inference and model structure learning.

*If you want all of it:* 22.2 hours across 36 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [probabilistic graphical models](https://www.youtube.com/playlist?list=PLQl7D2xuMMNq5lj52YpCjGvgOrjvX4h5G) — Danai Triantafyllidou · 10 videos · 2.4h across 10 episodes

**Watch only this:** Episodes 1 through 6 — about 1.5 hours total. These episodes cover foundational models and reasoning patterns needed to grasp the basics of probabilistic graphical models used in the paper.

*Why it unblocks this paper:* This short series by Danai Triantafyllidou provides clear, Stanford-based explanations of key probabilistic graphical model concepts such as CRFs, Markov networks, HMMs, and reasoning patterns, offering a quick yet solid foundation relevant to the paper's focus on symbolic state representations and causal processes.

*If you want all of it:* 2.4 hours across 10 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of ExoPredicator's approach to learning abstract symbolic models of dynamic worlds for robot planning. The beginner project focuses on implementing a core symbolic state abstraction mechanism inspired by the paper's predicate invention. The intermediate project reimplements the core variational Bayesian inference method combined with LLM proposals to learn causal processes from limited data in a simplified simulated environment. The advanced project extends the framework to handle partial observability and noisy predicate detection, addressing a key limitation noted in the paper and moving towards real-world applicability.

### Beginner — Symbolic Predicate Invention for Dynamic States
*Effort: a weekend, ~8 hours*

You build a small symbolic state abstraction module that invents predicates from raw state features in a toy dynamic environment (e.g., a simplified domino cascade or boiling water simulation). The module uses simple clustering or rule-based heuristics to group states into symbolic predicates, mimicking the paper's predicate invention step guided by foundation models.

**Why it shows you understood the paper:** This project shows you grasp the importance of abstract symbolic predicates as state abstractions that enable efficient planning over dynamic worlds, a core contribution of ExoPredicator.

**Grounded in:** Key contribution: A state abstraction learner leveraging foundation models for predicate invention.

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook

**Data:** Simulated toy environment states synthesized to mimic simple dynamic processes like domino cascades or boiling water states, as described in the paper's Coffee and Domino environments.

**Build it:**

1. Simulate or generate a small dataset of raw state features representing dynamic environment states over time.
2. Implement a clustering or rule-based method to group raw states into symbolic predicates.
3. Visualize and validate the invented predicates against known state properties.
4. Document how these predicates abstract the raw states and enable reasoning about dynamics.

**Ships as:** A Jupyter notebook demonstrating predicate invention from raw states with visualizations and explanations.

**Stretch goal:** Integrate a simple LLM prompt or template to guide predicate naming or grouping heuristics.

### Intermediate — Variational Bayesian Learning of Causal Processes
*Effort: 2 weekends, ~20 hours*

You reimplement the core variational Bayesian inference method combined with LLM proposals to learn parameters and structure of causal processes (both endogenous and exogenous) from limited interaction data in a simplified simulated environment (e.g., a small-scale domino cascade). You compare your learned model's planning success rate against a baseline that ignores exogenous processes.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core learning algorithm and shows you understand how Bayesian inference and LLM guidance jointly enable efficient learning of abstract world models for planning.

**Grounded in:** Key contribution: An efficient Bayesian inference method for learning causal process parameters and structures; Key result: Bayesian model selection and LLM guidance are critical for efficient model learning.

**Tech stack:** Python 3.11, PyTorch, transformers (for LLM proposals), NumPy, matplotlib

**Data:** Synthetic interaction data generated from a small simulated environment with known endogenous and exogenous causal processes, inspired by the paper's Domino environment.

**Build it:**

1. Implement a simplified symbolic representation of states and causal processes.
2. Implement variational Bayesian inference to learn process parameters and structure from interaction data.
3. Integrate a small pretrained LLM (e.g., GPT-2) to propose candidate predicates or causal structures.
4. Run experiments comparing planning success rates with and without exogenous process modeling.
5. Visualize learned causal models and report sample efficiency metrics.

**Ships as:** A Python project with scripts and notebooks showing learned causal models, planning results, and comparison to baseline.

**Stretch goal:** Add support for modeling process delays probabilistically using discrete Gaussian distributions as in the paper.

### Advanced — Extending ExoPredicator for Partial Observability and Noisy Predicates
*Effort: 3+ weeks*

You extend the ExoPredicator framework by incorporating mechanisms to handle real-world sensory noise and partial observability, where predicates cannot be perfectly detected. This involves integrating probabilistic predicate detection models and belief state tracking into the symbolic world model and planner. You evaluate the extended system in a noisy simulated environment and analyze robustness.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep understanding of the framework and the challenges of real-world deployment beyond simulation.

**Grounded in:** Limitation: The approach currently demonstrated only in simulated tabletop robotics environments and assumes availability of some initial predicates; Future direction: Extending to real-world robotic systems beyond simulation.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook, transformers

**Data:** Simulated environment data augmented with synthetic sensory noise and partial observability, based on the paper's Domino or Coffee environments.

**Build it:**

1. Implement a probabilistic predicate detection model that outputs confidence scores for predicates given noisy observations.
2. Incorporate belief state tracking (e.g., particle filter or Bayesian filter) to maintain distributions over symbolic states.
3. Modify the planner to operate over belief states rather than fully observed states.
4. Evaluate planning success and robustness under varying noise levels compared to the original framework.
5. Document challenges and potential improvements for real-world sensory integration.

**Ships as:** A comprehensive codebase and report demonstrating robust planning under noisy, partially observable conditions with extended ExoPredicator.

**Stretch goal:** Explore joint learning of motor skills and world models to reduce reliance on predefined skills.

_The paper's authors have not released code or datasets, so all data must be simulated or synthesized based on environment descriptions in the paper._
