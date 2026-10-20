---
title: "884 · Social-WM: Safety-Aware Latent World Models for Robot Social Navigation — Mooi Choo Chuah"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mooi-choo-chuah"
source_hash: "73fcdfd4a224c6d22afc7aeec204a31c2c664200b11ca89a10bac62d1a0261f0"
sequence: 884
generator: "outreach-garden: managed"
---

# 884 · Social-WM: Safety-Aware Latent World Models for Robot Social Navigation

## At a glance

- **Professor:** Mooi Choo Chuah
- **Institution:** Lehigh University
- **Paper:** [Social-WM: Safety-Aware Latent World Models for Robot Social Navigation](https://arxiv.org/pdf/2609.40177)
- **Authors:** Zhihao Zheng, Mooi Choo Chuah
- **Year:** 2026

## Paper overview

This paper presents Social-WM, a robot navigation system that predicts not only what actions a robot plans to take but also whether those actions can actually be safely executed around people and obstacles. By learning from video data how planned actions differ from what is realistically possible, the system avoids unsafe moves and respects personal space, improving safety and navigation success in crowded indoor environments.

### Why it matters

**Research problem:** Robots navigating in human environments must anticipate not only the outcomes of their planned actions but also whether those actions are physically and socially realizable, i.e., safe to execute without causing collisions or invading personal space. Existing models often fail to explicitly model this nominal versus realizable action discrepancy, limiting safe social navigation.

**Why it matters:** Safe social navigation is critical for robots operating around humans to prevent collisions and discomfort. Understanding which planned actions are actually feasible under social and physical constraints enables robots to behave more safely and naturally in dynamic human environments, which is essential for real-world deployment.

**Key contributions:**

- Formulation of nominal versus realizable action discrepancy as a safety-relevant signal for learning latent dynamics in social navigation.
- Introduction of realizable inverse dynamics that associates latent transitions with physically achievable motion, enabling safety evaluation of candidate actions.
- Development of an efficient, goal-independent latent world-model planner supporting both position- and image-goal navigation that generalizes across datasets without explicit pedestrian tracking or online learning.

## About the professor

**Mooi Choo Chuah** — Professor, Computer Science and Engineering Department, Lehigh University.

Research interests: building robust mobile data systems, assistive technologies, and future internet systems

### Research links

- [Faculty/profile page](http://www.cse.lehigh.edu/~chuah)
- [Lab website](http://carina.cse.lehigh.edu/winslab/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** latent variable models machine learning
**The paper assumes:** latent variable models, variational autoencoders, conditional generative models, latent dynamics modeling
**Already in this field?** Skip this entirely if you already understand probabilistic latent variable models and their use in sequential decision-making and planning.

This background focuses on latent variable models in machine learning, particularly conditional variational autoencoders (CVAEs) and latent world models, which are central to understanding the Social-WM paper's approach to safety-aware robot navigation. The rigorous course offers a deep, structured dive into latent variable models and related deep learning concepts, while the fast track provides a concise, intuition-driven introduction suitable for quickly grasping the core ideas without extensive time investment. Choose the course for comprehensive mastery or the fast track for a focused conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yann LeCun’s Deep Learning Course](https://www.youtube.com/playlist?list=PLgF7i4LH-YxacgG0OPmTYe1UUQAvcw9Ke) — NYU Data Science · 33 videos · 47.4h across 33 episodes

**Watch only this:** Episodes 5L, 5.1, 5.2, 6L, 6, 7L, 7, 8L, 8, 9L, and 9 (about 11 hours total) — these cover latent variable energy-based models, variational autoencoders, and related latent representation learning essential for grasping the paper's method.

*Why it unblocks this paper:* Yann LeCun’s Deep Learning Course covers latent variable models, variational autoencoders, and latent variable energy-based models in detail, directly supporting understanding of the paper's latent world model and realizable inverse dynamics approach.

*If you want all of it:* 47.4 hours across 33 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [BDL](https://www.youtube.com/playlist?list=PLSpsufcMqZ1GLZyEjYhYJ7crEs1th7Kum) — Chase Bosworth · 11 videos · 7.8h across the first 9 episodes

**Watch only this:** Episodes 'Deep Learning 25: (1) Conditional Variational AutoEncoder : Theory (CVAE)' and 'Variational Inference: Foundations and Innovations' (about 1.5 hours total) — these two videos cover the core concepts of CVAEs and variational inference relevant to the paper.

*Why it unblocks this paper:* The BDL playlist includes focused lectures on conditional variational autoencoders and variational inference, providing a concise and clear introduction to the key latent variable modeling techniques used in the paper.

*If you want all of it:* 7.8 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Social-WM paper, start by grounding yourself in the prerequisite topics of inverse dynamics models in robotics and robot social navigation safety, which are foundational to the paper's approach to modeling realizable actions and ensuring safe navigation around humans. Next, study conditional variational autoencoders (CVAE) planning to grasp the efficient trajectory planning technique used. Finally, focus on the core concept of latent world models for robot navigation, culminating with the authors' own talk to gain direct insights into their novel safety-aware latent world model approach.

### Inverse dynamics models in robotics *(prerequisite)*
Understanding inverse dynamics is critical for inferring the executed actions from observed state transitions, which is central to Social-WM's realizable inverse dynamics model that detects discrepancies between nominal and realizable actions. The selected talk provides a concise, research-level presentation on model-based inverse reinforcement learning from visual demonstrations, closely related to inverse dynamics learning in robotics.

*How the paper uses it:* The paper introduces a realizable inverse dynamics model to predict physically achievable actions from latent transitions, enabling safety evaluation.

▶ [CoRL 2020, Spotlight Talk 432: Model-Based Inverse Reinforcement Learning from Visual Demonstrations](https://www.youtube.com/watch?v=sRrNhtLk12M) — Conference on Robot Learning · 5:03 · 5y ago

### Robot social navigation safety *(prerequisite)*
This topic covers the challenges and constraints of navigating safely in human environments, which is the fundamental motivation behind Social-WM's approach to modeling safety-aware latent world models. The Stanford Robotics Seminar provides an advanced, university-level seminar on autonomous navigation and safe humanoids, offering relevant insights into safety considerations in robot navigation around people.

*How the paper uses it:* Social-WM addresses safety in social navigation by explicitly modeling nominal versus realizable action discrepancies to avoid collisions and respect personal space.

▶ [Stanford Robotics Seminar ENGR319 | Winter 2026 | Autonomous Navigation and Safe Humanoids](https://www.youtube.com/watch?v=o5bW3C5OD6U) — Stanford Online · 44:16 · 8mo ago

### Conditional variational autoencoders planning *(prerequisite)*
CVAE is a key technique used in Social-WM for efficient trajectory planning that balances navigation success and safety. The chosen video is a detailed lecture on the theory behind Conditional Variational Autoencoders, providing the mathematical and conceptual foundation necessary to understand the CVAE-based planner used in the paper.

*How the paper uses it:* Social-WM employs a CVAE trajectory planner to efficiently propose and evaluate candidate action sequences for safe navigation.

▶ [Deep Learning 25: (1) Conditional Variational AutoEncoder : Theory (CVAE)](https://www.youtube.com/watch?v=W4peyiOaEFU) — Ahlad Kumar · 13:45 · 7y ago

### Latent world models for robot navigation
Latent world models enable prediction of future states and realizable actions, forming the core method of Social-WM. The selected talk from Princeton Robotic Intelligence and Systems Lab presents a state-of-the-art framework combining latent goal models with memory for exploration, providing a rigorous research perspective on latent world models in robot navigation.

*How the paper uses it:* Social-WM learns a latent world model from egocentric video to predict future observations conditioned on nominal actions, capturing realizable constraints.

▶ [RECON: Rapid Exploration for Open-World Navigation with Latent Goal Models (CoRL 2021 Oral Talk)](https://www.youtube.com/watch?v=jF1URT-TSRU) — Princeton Robotic Intelligence and SysteMs Lab · 5:37 · 5y ago

### Social-WM authors talk *(paper-talk search result; attribution unverified)*
Direct insight from the authors on their novel safety-aware latent world model approach is invaluable for understanding the paper's contributions and nuances. The closest relevant talk is the recent NVIDIA 2026 explanation of a related world action model paper, which shares conceptual similarities and provides up-to-date research context, although it is not the authors' own talk on Social-WM.

*How the paper uses it:* This talk covers related world model approaches and inverse dynamics factorization, complementing the understanding of Social-WM's methodology.

▶ [World Action Models are Zero-shot Policies (DreamZero, NVIDIA 2026) explained](https://www.youtube.com/watch?v=IsUR9gSJw9g) — Forward Dynamics · 13:58 · 3d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Social-WM paper, start by building foundational knowledge about inverse dynamics models in robotics, which help infer executed actions from observed state changes. Next, learn about robot social navigation safety to grasp the challenges robots face when moving around people safely. Then, study conditional variational autoencoders (CVAE) planning, a key technique used for efficient and safe trajectory planning. Finally, explore latent world models for robot navigation, which enable prediction of future states and realizable actions, culminating in the core concept of safety-aware latent world models as proposed in the paper.

### Inverse dynamics models in robotics *(prerequisite)*
Inverse dynamics models allow robots to infer the actions that caused observed changes in their state, such as movements or forces. Understanding this helps in modeling what actions are actually realizable given physical constraints, which is crucial for safe and accurate robot control.

*How the paper uses it:* Social-WM uses a realizable inverse dynamics model to predict the action actually executed from latent transitions, enabling detection of discrepancies between planned and realizable actions.

▶ [CoRL 2020, Spotlight Talk 432: Model-Based Inverse Reinforcement Learning from Visual Demonstrations](https://www.youtube.com/watch?v=sRrNhtLk12M) — Conference on Robot Learning · 5:03 · 5y ago

### Robot social navigation safety *(prerequisite)*
Robot social navigation safety covers the challenges robots face when moving around humans, including avoiding collisions and respecting personal space. This knowledge is essential to appreciate why modeling action realizability and safety signals is critical for robots operating in crowded environments.

*How the paper uses it:* The paper addresses safety challenges by explicitly modeling nominal versus realizable action discrepancies to improve social navigation safety.

▶ [Stanford Robotics Seminar ENGR319 | Winter 2026 | Autonomous Navigation and Safe Humanoids](https://www.youtube.com/watch?v=o5bW3C5OD6U) — Stanford Online · 44:16 · 8mo ago

### Conditional variational autoencoders planning *(prerequisite)*
Conditional Variational Autoencoders (CVAEs) are generative models that can efficiently produce diverse and plausible future trajectories conditioned on current states and goals. They enable fast and safe trajectory planning by balancing success and safety in robot navigation.

*How the paper uses it:* Social-WM employs a CVAE-based trajectory planner to efficiently generate and evaluate candidate action sequences for safe navigation.

▶ [Deep Learning 25: (1) Conditional Variational AutoEncoder : Theory (CVAE)](https://www.youtube.com/watch?v=W4peyiOaEFU) — Ahlad Kumar · 13:45 · 7y ago

### Latent world models for robot navigation
Latent world models learn compact representations of the environment and predict future observations conditioned on actions, enabling robots to imagine possible futures. This helps in planning and decision-making under uncertainty, especially in dynamic and complex environments.

*How the paper uses it:* Social-WM builds a latent world model from egocentric video to predict future observations and realizable actions, forming the core of its safety-aware navigation approach.

▶ [RECON: Rapid Exploration for Open-World Navigation with Latent Goal Models (CoRL 2021 Oral Talk)](https://www.youtube.com/watch?v=jF1URT-TSRU) — Princeton Robotic Intelligence and SysteMs Lab · 5:37 · 5y ago

### Social-WM authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides insight into the motivation, approach, and implications of the Social-WM model, complementing technical understanding with context and future directions.

*How the paper uses it:* The authors discuss their novel safety-aware latent world model approach, highlighting key contributions and results.

▶ [AI Safety for Multi-Agent LLMs \[AISEAI 2025 Talk@OECD\]](https://www.youtube.com/watch?v=GKOsrFncqpI) — Zhijing Jin on AI Insights · 19:14 · 1y ago

## Already in your library

- [Zhijing Jin | Emergent AI safety risks in multi-agent LLMs](https://www.youtube.com/watch?v=1MxpYJJHeik) — also for: NeuroFilter: Activation-Based Guardrails for Privacy-Conscious LLM Agents (Ferdinando Fioretto)
- [World Models explained in 10min..](https://www.youtube.com/watch?v=ECWC-YlAk1o) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Yann LeCun | Self-Supervised Learning, JEPA, World Models, and the future of AI](https://www.youtube.com/watch?v=yUmDRxV0krg) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Yann LeCun: World Models: Enabling the next AI revolution](https://www.youtube.com/watch?v=72Xj8k5WQX4) — also for: CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization (Michael Maire)
- [TUM AI Lecture Series - Building generative world models ...](https://www.youtube.com/watch?v=CkOSMqwvFiQ) — also for: HandMade: Spatial Prompting for Generative 3D Creation with Part-Labeled VR Sketches (Yotam I. Gingold)
- [What are World Models ?](https://www.youtube.com/watch?v=qulPOUiz-08) — also for: CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization (Michael Maire)
- [Stanford CS330 I Variational Inference and Generative Models l 2022 I Lecture 11](https://www.youtube.com/watch?v=iL1c1KmYPM0) — also for: Bayesian Neighborhood Adaptation for Graph Neural Networks (Rui Li)
- [Ali Ghodsi, Deep Learning, Variational Autoencoder, VAE ...](https://www.youtube.com/watch?v=gErs0bAM63E) — also for: An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI (Abhijit S. Pandya)
- [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Variational Autoencoders - EXPLAINED!](https://www.youtube.com/watch?v=fcvYpzHmhvA) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical ladder to demonstrate your understanding of Social-WM's core ideas and limitations. The beginner project recreates the nominal versus realizable action discrepancy concept on synthetic data, the intermediate project implements a simplified latent world model with realizable inverse dynamics on a public indoor navigation dataset, and the advanced project extends the model with a route-level replanning mechanism to address the paper's stated limitation on long-horizon navigation.

### Beginner — Nominal vs Realizable Action Discrepancy Visualization
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a robot navigating a simple 2D grid environment with obstacles and humans represented as points. You generate nominal planned actions and then simulate realizable executed actions that respect safety constraints (e.g., no collisions, personal space). You compute and visualize the discrepancy between nominal and realizable actions, illustrating how large discrepancies indicate unsafe or blocked moves.

**Why it shows you understood the paper:** This project concretely demonstrates the key safety signal introduced in the paper: the nominal-realizable action discrepancy as an indicator of unsafe or blocked transitions. A professor would see you grasp the fundamental concept behind Social-WM's safety-aware planning.

**Grounded in:** Formulation of nominal versus realizable action discrepancy as a safety-relevant signal for learning latent dynamics in social navigation.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic 2D grid navigation data you generate within the notebook simulating nominal and realizable actions with obstacles and human positions.

**Build it:**

1. Implement a simple 2D grid environment with static obstacles and human positions.
2. Generate nominal planned actions for the robot (e.g., move forward, turn).
3. Simulate realizable executed actions by applying safety constraints (e.g., stop before collision, maintain personal space).
4. Calculate the discrepancy metric between nominal and realizable actions.
5. Visualize the nominal and realizable trajectories and highlight discrepancies.
6. Write a README explaining the nominal vs realizable concept and how your simulation illustrates it.

**Ships as:** A Jupyter notebook with code and plots showing nominal vs realizable action discrepancies in a simple environment, plus a README explaining the concept.

**Stretch goal:** Add a simple inverse dynamics model that predicts realizable actions from state transitions to mimic the paper's realizable inverse dynamics component.

### Intermediate — Simplified Social-WM Latent World Model on Indoor Navigation Dataset
*Effort: 2 weekends, ~20 hours*

You implement a simplified latent world model that learns to predict future egocentric RGB observations conditioned on nominal actions, and a realizable inverse dynamics model that predicts executed actions from latent transitions. You train and evaluate this model on a publicly available indoor navigation dataset (e.g., Matterport3D or Replica) as a substitute for Social-HM3D, comparing success and safety metrics against a baseline that ignores realizable action constraints.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of learning nominal vs realizable action discrepancy via latent world modeling and inverse dynamics, and evaluate its impact on navigation safety and success. It demonstrates your ability to apply the paper's approach on real data and report relevant metrics.

**Grounded in:** Social-WM learns a latent world model from egocentric RGB video sequences that predicts future observations conditioned on nominal actions, and introduces a realizable inverse dynamics model enabling safety evaluation of candidate actions.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Public indoor navigation dataset such as Matterport3D or Replica, used as a substitute for Social-HM3D to provide egocentric RGB sequences and navigation actions.

**Build it:**

1. Download and preprocess the chosen indoor navigation dataset to extract egocentric RGB frames and nominal action sequences.
2. Implement a conditional variational autoencoder (CVAE) latent world model that predicts future latent observations conditioned on nominal actions.
3. Implement a realizable inverse dynamics model that predicts executed actions from latent state transitions.
4. Train the models jointly on the dataset, using actual observed future frames as targets to capture realizable constraints.
5. Evaluate navigation success and safety metrics (e.g., collision rate, personal space compliance) comparing your model against a baseline without realizable inverse dynamics.
6. Document your implementation, training procedure, and evaluation results in a detailed README.

**Ships as:** A GitHub repository with code to train and evaluate a simplified Social-WM latent world model on a public indoor navigation dataset, including scripts, results, and a README.

**Stretch goal:** Incorporate a simple CVAE-based trajectory planner to generate candidate action sequences and evaluate them for safety before execution.

### Advanced — Route-Level Replanning Extension for Safety-Aware Latent World Models
*Effort: 3+ weeks*

You extend the latent world model planner by integrating a route-level replanning mechanism with spatial memory and adaptive subgoal selection to address persistent blockages and improve long-horizon navigation success. You implement this extension on top of the intermediate project's model and evaluate its impact on timeout failures and navigation success in dynamic indoor environments.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified in the paper, demonstrating your ability to innovate beyond the original method. It shows you understand the challenges of long-horizon navigation and can design and implement mechanisms to overcome them within the Social-WM framework.

**Grounded in:** Incorporate route-level replanning, spatial memory, and adaptive subgoal selection to handle persistent blockages and improve long-horizon navigation.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Same public indoor navigation dataset used in the intermediate project (e.g., Matterport3D or Replica) to simulate dynamic social navigation scenarios with persistent blockages.

**Build it:**

1. Review and understand the intermediate latent world model and planner implementation.
2. Design a route-level replanning module that maintains spatial memory of visited states and blockage locations.
3. Implement adaptive subgoal selection that dynamically chooses new subgoals when persistent blockages are detected.
4. Integrate the replanning and subgoal selection with the existing latent world model planner.
5. Evaluate the extended system on navigation tasks prone to timeout failures due to blockages, measuring improvements in success rate and reduced timeouts.
6. Write comprehensive documentation explaining your extension, design choices, and evaluation results.

**Ships as:** An extended latent world model planner with route-level replanning and adaptive subgoal selection, demonstrated on a public indoor navigation dataset, with code, evaluation scripts, and detailed README.

**Stretch goal:** Explore incorporating explicit pedestrian tracking or social interaction modeling to further enhance safety and compliance.
