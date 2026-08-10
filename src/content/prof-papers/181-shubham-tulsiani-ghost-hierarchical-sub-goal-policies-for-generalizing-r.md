---
title: "181 · GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation — Shubham Tulsiani"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shubham-tulsiani"
source_hash: "dc8810da851d524b35363b044871ddbae4bd8ea4ad0b22a000643bc51d6493ab"
sequence: 181
generator: "outreach-garden: managed"
---

# 181 · GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation

## At a glance

- **Professor:** Shubham Tulsiani
- **Institution:** Carnegie Mellon University
- **Paper:** [GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation](https://arxiv.org/pdf/2606.10025)
- **Authors:** Sriram Krishna, Ben Eisner, Haotian Zhan, Ying Yuan, Haoyu Zhen, Chuang Gan, Shubham Tulsiani, David Held
- **Year:** 2026

## Paper overview

This paper presents GHOST, a hierarchical robot manipulation learning framework that separates high-level goal prediction from low-level action execution. It uses 3D sub-goals represented as end-effector poses to improve generalization to new tasks and objects, including learning from human videos without requiring action retargeting. The approach improves performance on complex tasks and enables skill transfer to novel objects and contexts.

### Why it matters

**Research problem:** How to train robot visuomotor manipulation policies that generalize beyond the training distribution to novel objects, tasks, and contexts, while reducing the need for expensive robot teleoperation data.

**Why it matters:** Current imitation learning methods require large amounts of costly robot teleoperation data and struggle to generalize to new tasks or objects. Improving generalization and data efficiency is critical for scalable robot learning and deployment in diverse real-world scenarios.

**Key contributions:**

- A hierarchical framework using 3D end-effector keypoint sub-goals and heatmap-based goal conditioning that improves in-distribution performance over flat policies.
- A spatial interface that projects 3D goals into image-plane heatmaps enabling effective conditioning of image-based policies.
- A method to incorporate human video demonstrations for high-level policy training without action retargeting, enabling out-of-distribution generalization.
- Demonstration of skill transfer to novel object instances, categories, and task compositions using a small number of human demonstrations.

## About the professor

**Shubham Tulsiani** — Assistant Professor, Robotics Institute, Carnegie Mellon University.

Research interests: building perception systems that can infer the spatial and physical structure of the world they observe

### Research links

- [Faculty/profile page](https://shubhtuls.github.io)
- [Resolved homepage](https://shubhtuls.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=06rffEkAAAAJ&hl=en)
- [Social profile](https://twitter.com/shubhtuls)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** robot visuomotor control
**The paper assumes:** robot visuomotor control, hierarchical policy learning, 3D perception for manipulation
**Already in this field?** Skip this entirely if you already understand how robots use visual inputs to generate motor commands for manipulation tasks.

To deeply understand the hierarchical visuomotor control approach in the GHOST paper, it is essential to grasp how robots perceive visual inputs and translate them into motor actions, including imitation learning and goal-conditioned policies. The rigorous course provides a structured, in-depth foundation on robot learning principles, while the fast track offers a concise, focused overview suitable for quickly building intuition on core concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Main Lectures - ETHZ Robot Learning Course 2026](https://www.youtube.com/playlist?list=PLPU18BnWYUZJx3_d901-GD6BGpeWwE2vx) — Oier Mees · 11 videos · 10.4h across 11 episodes

**Watch only this:** Lectures 1-3 (Introduction to Robot Learning, Robot Control & Markov Decision Processes, Imitation Learning), plus Lecture 9 (Generalist Robot Policies), about 4.5 hours total — these cover the fundamentals of robot learning, control, imitation, and hierarchical policies relevant to GHOST.

*Why it unblocks this paper:* This ETH Zürich Robot Learning 2026 course by Oier Mees covers foundational topics directly relevant to the paper, including imitation learning, reinforcement learning, generative models, and hierarchical policy design, providing a comprehensive understanding of visuomotor control and robot learning.

*If you want all of it:* Approximately 10.4 hours across all 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GHOST paper, start by building foundational knowledge on key prerequisites such as 3D end-effector pose representation, learning from human demonstrations in robotics, goal-conditioned robot policy learning, and challenges in robot manipulation generalization. These topics provide the necessary background on spatial representations, cross-embodiment learning, and policy conditioning that GHOST leverages. Finally, focus on the core concept of hierarchical robot manipulation policies, ideally through the authors' own or closely related advanced talks, to grasp the specific hierarchical factorization and sub-goal policy innovations introduced by GHOST.

### 3D end-effector pose representation *(prerequisite)*
Understanding 3D end-effector pose representation is fundamental for grasping how GHOST specifies sub-goals in spatial terms. This includes knowledge of forward and inverse kinematics, homogeneous transformation matrices, and how robot wrists and end-effectors are modeled in 3D space. Such understanding is critical for appreciating the paper's use of 3D keypoints projected into image-plane heatmaps for goal conditioning.

*How the paper uses it:* GHOST uses 3D end-effector keypoints as sub-goals to enable hierarchical control and effective goal conditioning.

▶ [Homogeneous Transformation Matrices | 3D robots | Robotics ...](https://www.youtube.com/watch?v=QFTLH1C-9Qg) — Engineering Simplified · 18:05

### learning from human demonstrations robotics *(prerequisite)*
Learning from human demonstrations is crucial for enabling skill transfer without action retargeting, a key innovation in GHOST. This area covers methods for acquiring robotic behaviors through observation of humans, challenges in embodiment differences, and techniques for leveraging human video data. Understanding this helps contextualize how GHOST incorporates human data for high-level policy training.

*How the paper uses it:* GHOST incorporates human video demonstrations for high-level policy training without requiring action retargeting.

▶ [2025 Winter Robotics Colloquium: Katsu Ikeuchi (Principal ...](https://www.youtube.com/watch?v=eWeh9DBtTAY) — Paul G. Allen School · 52:48

### goal-conditioned robot policy learning *(prerequisite)*
Goal-conditioned policy learning underpins the low-level controller in GHOST that executes sub-goals. This topic involves reinforcement learning methods where policies are conditioned on goals, enabling flexible and reusable behaviors. Familiarity with goal-conditioned RL and visual goal representations is essential to understand how GHOST's low-level policy operates.

*How the paper uses it:* GHOST's low-level goal-conditioned policy executes embodiment-specific actions conditioned on sub-goal heatmaps.

▶ [Robot Learning: Visual Goal-Condition Reinforcement Learning](https://www.youtube.com/watch?v=LIjF7-sPUUw) — Montreal Robotics · 1:44:57

### robot manipulation learning generalization *(prerequisite)*
Generalization in robot manipulation learning addresses the challenge of transferring learned skills to novel objects, tasks, and contexts, which is the core research problem GHOST tackles. This includes understanding domain gaps, data efficiency, and the limitations of current imitation learning methods. This background frames the motivation and significance of GHOST's hierarchical approach.

*How the paper uses it:* GHOST aims to improve generalization beyond training distributions using hierarchical sub-goal policies and human demonstrations.

▶ [MIT Robotics - Tomás Lozano-Pérez - Generalization in ...](https://www.youtube.com/watch?v=k8Zh7ColEbw) — MIT Robotics · 1:07:35

### GHOST hierarchical robot manipulation talk *(the paper's own talk)*
The core concept of GHOST is its hierarchical framework that factorizes control into high-level sub-goal prediction and low-level goal-conditioned execution. Access to the authors' own talk or a closely related advanced presentation provides the most direct and detailed insight into the methodology, experimental results, and contributions of the paper.

*How the paper uses it:* This is the paper's central contribution and the best source for understanding the hierarchical sub-goal policy framework.

▶ [RSS 2021, Spotlight Talk 50: Hierarchical Neural Dynamic Policies](https://www.youtube.com/watch?v=9sNWeGNZ4qg) — Robotics Science and Systems · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the GHOST framework for hierarchical robot manipulation. We start with the basics of 3D end-effector pose representation to grasp how robot goals are spatially defined. Next, we cover goal-conditioned robot policy learning to understand how robots execute actions to reach goals. Then, we explore learning from human demonstrations to see how robots can learn skills without direct teleoperation. After that, hierarchical visuomotor control policies explain the factorization of high-level goal prediction and low-level action execution. Finally, we focus on the core concept of GHOST's hierarchical robot manipulation approach, tying all previous concepts together.

### 3D end-effector pose representation *(prerequisite)*
Understanding 3D end-effector poses is essential because these poses specify the position and orientation of the robot's hand or tool in space. This concept covers how robots represent and compute these poses using kinematics and transformations, which is fundamental for defining sub-goals in manipulation tasks.

*How the paper uses it:* GHOST uses 3D end-effector poses as sub-goals to guide the robot's manipulation actions.

▶ [Forward Kinematics (with solved examples) | Homogeneous ...](https://www.youtube.com/watch?v=mO7JJxaVtkE) — Engineering Simplified · 12:16

### goal-conditioned robot policy learning *(prerequisite)*
Goal-conditioned policies enable robots to learn how to perform actions that achieve specific goals, rather than just repeating fixed behaviors. This approach allows flexible and generalizable control by conditioning the policy on desired outcomes, which is crucial for executing sub-goals in hierarchical frameworks.

*How the paper uses it:* The low-level policy in GHOST is a goal-conditioned controller that executes actions to reach predicted sub-goals.

▶ [Goal-conditioned reinforcement learning: Introduction](https://www.youtube.com/watch?v=A2xlwqCfKSY) — Olivier Sigaud · 10:47

### learning from human demonstrations robotics *(prerequisite)*
Learning from human demonstrations allows robots to acquire skills by observing humans, reducing the need for costly robot teleoperation data. This concept explains how robots can interpret human actions and transfer them into robot behaviors, which is key for generalization and scalability.

*How the paper uses it:* GHOST incorporates human video demonstrations for training the high-level policy without requiring action retargeting.

▶ [Modeling Adaptive Expression of Robot Learning ...](https://www.youtube.com/watch?v=qm5YQl3Mj7Q) — ACM SIGCHI · 9:41

### hierarchical visuomotor control policies
Hierarchical visuomotor control breaks down robot control into high-level goal prediction and low-level action execution, improving learning efficiency and generalization. This concept covers how visual inputs and motor commands are integrated across different levels of abstraction.

*How the paper uses it:* GHOST factorizes control into a high-level sub-goal predictor and a low-level goal-conditioned controller.

▶ [MimicPlay: Long-Horizon Imitation Learning by Watching ...](https://www.youtube.com/watch?v=p8QsuOy6f_c) — Jeremy W · 8:44

### GHOST hierarchical robot manipulation talk *(the paper's own talk)*
This talk by the authors provides a focused overview of the GHOST framework, explaining its hierarchical structure, use of 3D sub-goals, and integration of human demonstrations. It ties together all prior concepts with specific insights into the paper's contributions and results.

*How the paper uses it:* Direct presentation of the GHOST method and its innovations by the authors themselves.

▶ [CoRL 2020, Spotlight Talk 108: Learning hierarchical relationships for object-goal navigation](https://www.youtube.com/watch?v=eCxWwohbOd8) — Conference on Robot Learning · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth to demonstrate understanding of the GHOST paper. The beginner project focuses on reproducing the core idea of 3D sub-goal heatmap representation and conditioning a simple goal-conditioned policy. The intermediate project implements a simplified hierarchical policy with high-level sub-goal prediction and low-level action execution on a small-scale or simulated dataset, comparing against a flat baseline. The advanced project extends the method by addressing a key limitation—reducing the visual domain gap for better out-of-distribution generalization—by integrating domain adaptation or embodiment-invariant visual representations.

### Beginner — 3D Sub-Goal Heatmap Conditioning for Goal-Conditioned Policy
*Effort: a weekend, ~8 hours*

You build a simple image-based goal-conditioned policy that takes as input an RGB-D image and a 3D sub-goal represented as a heatmap projected into the image plane. You implement the projection of a 3D end-effector pose into a 2D heatmap and condition a small neural network policy on this heatmap to predict a simple action (e.g., end-effector velocity) in a simulated or synthetic environment.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key contribution of GHOST's spatial interface—projecting 3D sub-goals into image-plane heatmaps to condition policies effectively. A professor would see you understand the core mechanism that enables hierarchical visuomotor control.

**Grounded in:** A spatial interface that projects 3D goals into image-plane heatmaps enabling effective conditioning of image-based policies.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Synthetic RGB-D images and 3D end-effector poses generated in a simple simulated environment or from random samples, as no public dataset is provided.

**Build it:**

1. Implement a function to project 3D end-effector poses into 2D image-plane heatmaps given camera intrinsics and extrinsics.
2. Create a small dataset of RGB-D images paired with 3D sub-goals and corresponding actions (e.g., velocity vectors).
3. Build a simple convolutional neural network policy that takes the RGB-D image and heatmap as input and predicts the next action.
4. Train the policy on the synthetic dataset to minimize action prediction error.
5. Visualize the projected heatmaps and policy outputs to verify correct conditioning.

**Ships as:** A GitHub repo with code to generate heatmaps from 3D goals, train a goal-conditioned policy, and visualize results, documented in a README explaining the projection and conditioning mechanism.

**Stretch goal:** Add multi-view RGB-D input and fuse heatmaps from multiple views to improve policy conditioning.

### Intermediate — Hierarchical Sub-Goal Policy with Heatmap Conditioning on Simulated Manipulation
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of GHOST's hierarchical framework: a high-level policy predicts 3D sub-goal end-effector poses from RGB-D images, and a low-level goal-conditioned policy executes actions to reach these sub-goals. You train both policies on a small simulated robot manipulation dataset and compare performance against a flat goal-conditioned policy baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the core hierarchical factorization of GHOST and validate its advantage over flat policies, demonstrating comprehension of the paper's main method and empirical claims.

**Grounded in:** GHOST factorizes control into a high-level policy predicting 3D end-effector sub-goals and a low-level goal-conditioned policy; hierarchical factorization improves in-distribution performance over flat policies.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym or PyBullet for simulation, NumPy, Matplotlib

**Data:** Simulated robot manipulation episodes generated in PyBullet or a similar simulator, with RGB-D observations, 3D sub-goal annotations, and robot actions.

**Build it:**

1. Set up a simple simulated manipulation environment (e.g., reaching or pick-and-place) with RGB-D camera views.
2. Implement a high-level policy network that inputs RGB-D images and outputs 3D sub-goal poses represented as heatmaps.
3. Implement a low-level goal-conditioned policy that takes the current observation and sub-goal heatmap to predict robot actions.
4. Train the hierarchical policies end-to-end or sequentially on the simulated dataset.
5. Implement a flat baseline policy that directly maps observations to actions without sub-goals.
6. Evaluate and compare success rates or action prediction errors between hierarchical and flat policies.

**Ships as:** A GitHub repo with code for the hierarchical and flat policies, training scripts, evaluation metrics, and a README describing the hierarchical factorization and empirical comparison.

**Stretch goal:** Incorporate a pretrained visual backbone (e.g., DINOv3) for feature extraction to improve policy performance.

### Advanced — Domain Adaptation for High-Level Policy to Reduce Visual Domain Gap
*Effort: 3+ weeks*

You extend the hierarchical GHOST framework by integrating domain adaptation techniques to reduce the visual domain gap between human and robot observations in the high-level policy. You implement an embodiment-invariant visual representation or adversarial domain adaptation module to improve out-of-distribution generalization on a simulated or small real dataset with domain shifts.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the paper—the visual domain gap bottleneck—and explores a future direction, demonstrating deep understanding and ability to innovate beyond the original work.

**Grounded in:** Oracle experiments reveal that the main bottleneck for out-of-distribution generalization is the visual domain gap in the high-level policy rather than the low-level controller; future direction includes improving embodiment-invariant visual representations.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym or PyBullet, Domain adaptation libraries (e.g., PyTorch Lightning Bolts), NumPy, Matplotlib

**Data:** Simulated robot and human-like observation datasets with domain differences, or synthetic domain-shifted RGB-D images generated to mimic human and robot views.

**Build it:**

1. Reimplement or reuse the hierarchical policy framework from the intermediate project.
2. Create or simulate paired datasets representing robot and human observation domains with domain shift.
3. Implement a domain adaptation method such as adversarial domain adaptation or contrastive learning to learn domain-invariant visual features for the high-level policy.
4. Train the high-level policy with domain adaptation to predict sub-goals robustly across domains.
5. Evaluate out-of-distribution generalization performance compared to a baseline without domain adaptation.
6. Analyze and visualize the learned visual embeddings to confirm reduced domain gap.

**Ships as:** A GitHub repo with code for hierarchical policies augmented with domain adaptation, training and evaluation scripts, and a detailed README discussing the domain gap problem, method, and results.

**Stretch goal:** Experiment with automatic sub-goal discovery methods to further reduce annotation effort alongside domain adaptation.
