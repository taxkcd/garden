---
title: "844 · Action Flow Matching for Continual Robot Learning — Lantao Liu"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lantao-liu"
source_hash: "b05ac017da6e7ec536d31e4d302991d1ee5716f5b183c9d5bab0c10618fcc1df"
sequence: 844
generator: "outreach-garden: managed"
---

# 844 · Action Flow Matching for Continual Robot Learning

## At a glance

- **Professor:** Lantao Liu
- **Institution:** Indiana University
- **Paper:** [Action Flow Matching for Continual Robot Learning](https://arxiv.org/pdf/2504.18471)
- **Authors:** Alejandro Murillo-González, Lantao Liu
- **Year:** 2025

## Paper overview

This paper presents Action Flow Matching (AFM), a novel method that helps robots learn and adapt their dynamics models continually as they operate in changing environments. Instead of relying solely on imperfect models to plan actions, AFM transforms planned actions to better align with what the robot would do if it had a perfectly accurate model. This leads to more informative data collection and faster adaptation, improving task success and efficiency on different robotic platforms like ground vehicles and quadrotors.

### Why it matters

**Research problem:** Robots need to continually learn and adapt their dynamics models to operate safely and effectively in dynamic, uncertain environments. However, challenges such as model misalignment, catastrophic forgetting, data inefficiency, and balancing exploration with exploitation hinder continual learning in robotics.

**Why it matters:** Accurate and adaptable dynamics models are crucial for robot planning and control. Misaligned models can cause suboptimal or unsafe actions, limiting robot autonomy and performance, especially in long-term deployments where environmental conditions and robot states change unpredictably.

**Key contributions:**

- Introduction of Action Flow Matching (AFM) to transform planned actions for better alignment with true robot intent under model misalignment.
- A novel training strategy using counterfactual-inspired transitions to generate diverse training data without requiring ground-truth dynamics or intended action datasets.
- Learning a dynamics regime representation to identify current environmental conditions and inform action transformation.
- Demonstration of AFM's model-agnostic nature, applicable across different robotic platforms and dynamics models.
- Extensive evaluation on two robotic platforms (Jackal UGV and Crazyflie quadrotor) showing significant improvements in task success and learning efficiency.

## About the professor

**Lantao Liu** — Professor, Luddy School of Informatics, Computing, and Engineering, Indiana University.

Research interests: robot learning, autonomous decision-making, safe and trustworthy autonomy, connecting fundamental advances in algorithms with deployment on real robotic systems

### Research links

- [Faculty/profile page](https://luddy.iu.edu/people/liu-lantao.html)
- [Professor website](https://vail-robotics.net/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** generative flow matching models
**The paper assumes:** generative flow matching, continuous normalizing flows, and velocity field modeling
**Already in this field?** Skip this entirely if you already understand generative flow matching models and continuous normalizing flows in machine learning.

To understand the core method of Action Flow Matching (AFM) in this paper, you need a solid grasp of generative flow matching models, which underpin the transformation of planned actions into corrected actions. The rigorous course offers a deep, structured dive into the mathematical foundations and practical implementations, while the fast track provides a concise, intuition-driven overview of flow matching and related generative AI techniques. Choose the rigorous course for a thorough theoretical and practical foundation, or the fast track for a quick but clear conceptual understanding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Generative AI: From GANs and Diffusion Models to Video, Audio, and 3D AI](https://www.youtube.com/playlist?list=PLuV-zsJa9wxHau2uM-d31_s8QK8MyZsKK) — Engineering Insider · 15 videos · 2.2h across 15 episodes

**Watch only this:** Episodes 10 ("Flow Matching Explained: The Fast Generative AI Behind Flux and Stable Diffusion 3") and 14 ("Generative Audio Models Explained: Neural Codecs, Transformers, Diffusion & Flow Matching") totaling about 16 minutes — these episodes focus specifically on flow matching and its generative AI context.

*Why it unblocks this paper:* This Engineering Insider playlist offers a concise and well-produced explainer series on generative AI architectures including flow matching, providing clear intuition and practical insights into the fast generative AI methods behind AFM. It is much shorter and more accessible while covering the same core concepts.

*If you want all of it:* All 15 episodes totaling about 2.2 hours for a broad but still concise overview of generative AI models including flow matching, diffusion, GANs, and related architectures.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Action Flow Matching for Continual Robot Learning' paper, start by building foundational knowledge on continual learning in robotics, flow matching generative models, robot dynamics modeling, and the exploration-exploitation tradeoff in robotics. These prerequisites provide the necessary background on the challenges of lifelong adaptation, the mathematical framework of flow matching, and the fundamentals of robot dynamics and decision-making. Finally, focus on the core concept of Action Flow Matching itself through the authors' and related expert talks to grasp the novel method and its application in continual robot learning.

### Continual learning in robotics *(prerequisite)*
This section covers the challenges and frameworks for robots to adapt over time without catastrophic forgetting, which is central to the paper's focus on continual dynamics model learning. Understanding these concepts provides context on why continual adaptation is difficult and necessary in robotics.

*How the paper uses it:* The paper addresses continual learning challenges such as model misalignment and catastrophic forgetting in robotic dynamics.

▶ [Razvan Pascanu (DeepMind) -- What should we expect from a (robotics) continual learning system?](https://www.youtube.com/watch?v=OQ2ILHdFt_s) — Robot Learning Workshop · 27:11 · 4y ago

### Flow matching generative models *(prerequisite)*
Flow matching is the core mathematical framework underlying the AFM method, enabling the transformation of planned actions via learned velocity fields. This section explains flow matching's principles and its relation to diffusion models, essential for understanding the generative modeling approach used in AFM.

*How the paper uses it:* AFM leverages flow matching to transform planned actions into corrected actions reflecting true robot intent.

▶ [Flow Matching | Explanation + PyTorch Implementation](https://www.youtube.com/watch?v=7cMzfkWFWhI) — Outlier · 22:04 · 1y ago

### Robot dynamics modeling *(prerequisite)*
Robot dynamics modeling forms the foundation for predicting and planning robot actions. This section provides a rigorous academic treatment of robot dynamics, including Lagrangian formulations, which is critical to grasp how dynamics models are learned and adapted in the paper.

*How the paper uses it:* The paper focuses on continual learning and adaptation of robot dynamics models for safe and effective control.

▶ [6.8210 Spring 2024 Lecture 1: Robot dynamics and model-based control](https://www.youtube.com/watch?v=uyyBT-MHhLE) — underactuated · 1:25:07 · 2y ago

### Exploration-exploitation tradeoff in robotics *(prerequisite)*
Balancing exploration and exploitation is key to safely learning new dynamics while using current knowledge effectively. This section discusses algorithms and principles behind this tradeoff, which AFM addresses by detecting model misalignment to guide exploration.

*How the paper uses it:* AFM balances exploration and exploitation by detecting when the dynamics model is misaligned and needs correction.

▶ [Learning to Soar: Exploration-Exploitation Algorithms for Autonomous Soaring Flight](https://www.youtube.com/watch?v=9YTjuZsXVFM) — Microsoft Research · 1:27:12 · 10y ago

### Action Flow Matching paper talk
This section features talks directly related to the AFM method or closely related flow matching policies in robotics, providing direct insight into the novel approach, its training strategies, and applications. These talks are essential for understanding the paper's contributions from the authors' or expert perspectives.

*How the paper uses it:* Direct talks on flow matching policies and related generative methods provide insight into the AFM approach and its implementation.

▶ [Qiyang Li - Q-learning with Flow-Matching Policies](https://www.youtube.com/watch?v=te41VEOqx4w) — MSR NE Generative Modeling & Sampling Seminar · 59:03 · 7mo ago

### Action Flow Matching method
This section focuses on the central method of the paper—transforming planned actions to better align with true robot intent using flow matching. It includes detailed academic talks and tutorials on flow matching applied to robotics, which are critical to understanding the novel AFM framework.

*How the paper uses it:* AFM's core contribution is the flow matching-based transformation of planned actions to improve continual learning.

▶ [Pi.0 Deep Dive: Flow Matching in Vision-Language-Action Models](https://www.youtube.com/watch?v=CnnkU-9MWT4) — Simons AI Stuff · 25:23 · 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Action Flow Matching (AFM) paper, start by grasping the fundamentals of robot dynamics modeling, which explains how robots predict and plan their movements. Next, learn about continual learning in robotics to appreciate the challenges robots face when adapting over time. Then, explore flow matching generative models, the mathematical foundation behind AFM's action transformation. Finally, focus on the AFM method itself, which applies flow matching to improve robot action planning under changing dynamics.

### Robot dynamics modeling *(prerequisite)*
Robot dynamics modeling explains how robots predict their future states based on current actions and physical laws. Understanding this helps you see why accurate models are crucial for planning and control. It covers how forces, inertia, and motion equations govern robot behavior.

*How the paper uses it:* AFM improves robot planning by correcting actions based on the robot's true dynamics, so understanding dynamics modeling is foundational.

▶ [Dynamics of Robotic Manipulators - Part 1](https://www.youtube.com/watch?v=UEHm90eYnJY) — Ali Raza · 55:28 · 5y ago

### Continual learning in robotics *(prerequisite)*
Continual learning in robotics deals with how robots adapt their knowledge and models over time as environments change. It highlights challenges like forgetting old knowledge and balancing learning new information with using what’s already known. This is key to deploying robots in real-world, dynamic settings.

*How the paper uses it:* AFM addresses continual learning challenges by improving how robots adapt their dynamics models during operation.

▶ [Razvan Pascanu (DeepMind) -- What should we expect from a (robotics) continual learning system?](https://www.youtube.com/watch?v=OQ2ILHdFt_s) — Robot Learning Workshop · 27:11 · 4y ago

### Flow matching generative models *(prerequisite)*
Flow matching is a generative modeling technique that learns a continuous transformation (flow) from simple distributions to complex data. It provides a mathematically elegant and efficient way to model complex action distributions, which is essential for AFM’s action transformation.

*How the paper uses it:* AFM uses flow matching to transform planned actions into corrected actions that better align with true robot intent.

▶ [Flow Matching | Explanation + PyTorch Implementation](https://www.youtube.com/watch?v=7cMzfkWFWhI) — Outlier · 22:04 · 1y ago

### Action Flow Matching method
The Action Flow Matching method applies flow matching to robot action planning, transforming planned actions from an imperfect model into corrected actions that reflect the robot’s true intent. This improves data quality and speeds up continual learning in changing environments.

*How the paper uses it:* This is the core method introduced by the paper to improve continual robot learning by correcting action misalignment.

▶ [Flow Matching for Robotics: Faster, Noise-Free AI Policy (VITA & FlowPolicy Explained)](https://www.youtube.com/watch?v=bIjK5jCq8kE) — Foundation Models For Robotics · 5:42 · 10mo ago

## Already in your library

- [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 01 ...](https://www.youtube.com/watch?v=GCoP2w-Cqtg) — also for: Functional Mean Flow in Hilbert Space (Greg Turk)
- [Flow Matching for Generative Modeling (Paper Explained)](https://www.youtube.com/watch?v=7NNxK3CqaDk) — also for: Functional Mean Flow in Hilbert Space (Greg Turk)
- [Franziska Meier - Lifelong Learning for Robotics @ UCL DARK](https://www.youtube.com/watch?v=3SVT-Y10Zno) — also for: RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models (Tesca Fitzgerald)
- [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 01 ...](https://www.youtube.com/watch?v=9eJQQVrUUoI) — also for: Video Generators are Robot Policies (Ruoshi Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of Action Flow Matching (AFM) for continual robot learning. Starting with a simple simulation to reproduce AFM's action transformation concept, you then implement the core AFM method on a publicly available quadrotor simulation to compare performance against a baseline. Finally, you extend AFM by improving its misalignment detection mechanism, addressing a key limitation noted in the paper.

### Beginner — Simulate Action Flow Matching on a Simple Robot Model
*Effort: a weekend, ~8 hours*

You build a small Python simulation that models a simple robot dynamics environment with a misaligned dynamics model and implement a basic flow matching transformation to correct planned actions. The simulation visualizes how planned actions are transformed to better align with intended actions under changing dynamics.

**Why it shows you understood the paper:** This project demonstrates your grasp of AFM's core idea of transforming planned actions via a learned velocity field to correct model misalignment, as well as the concept of continual adaptation in robot dynamics.

**Grounded in:** Introduction of Action Flow Matching (AFM) to transform planned actions for better alignment with true robot intent under model misalignment.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated by simulating a simple 2D robot with misaligned dynamics; no external dataset required.

**Build it:**

1. Implement a simple 2D robot dynamics simulator with a known misaligned model.
2. Generate planned actions and corresponding true intended actions under varying dynamics.
3. Implement a flow matching model as a velocity field that transforms planned actions to intended actions.
4. Visualize the action transformations and compare trajectories before and after correction.
5. Document the simulation setup, results, and insights in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook with simulation code, visualizations of action flow matching, and explanations showing how AFM corrects misaligned actions.

**Stretch goal:** Add a simple misalignment detection heuristic to switch between transformed and untransformed actions.

### Intermediate — Reimplement AFM on Crazyflie Quadrotor Simulation
*Effort: 2 weekends, ~20 hours*

You reimplement the core AFM method described in the paper and apply it to the Crazyflie quadrotor simulation environment from the Bitcraze repository. You train a flow matching model to transform planned actions and evaluate performance by measuring trajectory tracking error compared to a baseline MPC controller without AFM.

**Why it shows you understood the paper:** This project shows you can implement the paper's core method from scratch, apply it to a real robotic platform simulation, and reproduce key metrics such as trajectory tracking error reduction, demonstrating comprehension of AFM's practical benefits.

**Grounded in:** AFM reduced trajectory tracking mean squared error by 6.6% compared to a state-of-the-art Online-KNODE-MPC baseline on the quadrotor platform.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Git

**Data:** Uses the Crazyflie quadrotor simulation environment from https://github.com/bitcraze/crazyflie-simulation as a proxy for the paper's quadrotor data.

**Build it:**

1. Clone and set up the Crazyflie simulation environment from Bitcraze.
2. Implement the AFM flow matching model based on the paper's description, including the velocity field and dynamics regime representation.
3. Train the AFM model using counterfactual-inspired transitions generated from the simulation.
4. Evaluate the AFM-enhanced controller against the baseline MPC controller by measuring trajectory tracking mean squared error.
5. Plot and analyze the results, documenting improvements and limitations.

**Verified links from the paper:**

- <https://github.com/bitcraze/crazyflie-simulation> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to run the Crazyflie simulation, train AFM, and evaluate performance, including plots comparing tracking errors.

**Stretch goal:** Incorporate a simple threshold-based misalignment detector to switch between AFM-corrected and baseline actions during evaluation.

### Advanced — Enhance AFM with Adaptive Misalignment Detection
*Effort: 3+ weeks*

You extend the AFM framework by developing an adaptive, learned misalignment detection mechanism that replaces the paper's threshold-based heuristic. This mechanism dynamically decides when to apply AFM transformations versus relying on the base dynamics model. You test this on the Crazyflie simulation and analyze improvements in learning stability and task success.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of AFM's architecture and challenges in continual learning, while contributing a novel extension that could improve real-world applicability.

**Grounded in:** Developing more adaptive or automated mechanisms for detecting model misalignment and switching between transformed and untransformed actions.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Git

**Data:** Uses the Crazyflie quadrotor simulation environment from https://github.com/bitcraze/crazyflie-simulation as a testbed.

**Build it:**

1. Reimplement the baseline AFM method and threshold-based misalignment detection on Crazyflie simulation.
2. Design and implement a neural network or statistical model to learn misalignment detection from data.
3. Integrate the learned detector into the AFM control loop to dynamically switch action transformations.
4. Train and evaluate the enhanced AFM system, comparing learning curves, task success rates, and stability against the baseline.
5. Document the design decisions, experimental results, and potential trade-offs.

**Verified links from the paper:**

- <https://github.com/bitcraze/crazyflie-simulation> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the enhanced AFM implementation, learned misalignment detector, evaluation scripts, and a detailed report on improvements and challenges.

**Stretch goal:** Test the enhanced AFM on a different robotic platform simulation (e.g., ground vehicle) to demonstrate model-agnostic applicability.
