---
title: "181 · GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation — Shubham Tulsiani"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shubham-tulsiani"
source_hash: "44ba37d38a5fc35ca288ef0e7f0f2b0f5aa4f69fffd598dde4eca5505085458b"
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
