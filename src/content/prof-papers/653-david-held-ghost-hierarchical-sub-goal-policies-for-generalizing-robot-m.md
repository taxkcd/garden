---
title: "653 · GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation — David Held"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-held"
source_hash: "8c1df2ff6061b2562cbf4c243c4d407c8d507ff493c3828aed628e4e337b66c8"
sequence: 653
generator: "outreach-garden: managed"
---

# 653 · GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation

## At a glance

- **Professor:** David Held
- **Institution:** Carnegie Mellon University
- **Paper:** [GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation](https://arxiv.org/pdf/2606.10025)
- **Authors:** Sriram Krishna, Ben Eisner, Haotian Zhan, Ying Yuan, Haoyu Zhen, Chuang Gan, Shubham Tulsiani, David Held
- **Year:** 2026

## Paper overview

This paper introduces GHOST, a hierarchical robot learning framework that improves robot manipulation by breaking down tasks into sub-goals. It uses a high-level policy to predict 3D sub-goals from visual inputs and a low-level policy to execute actions to reach those goals. This approach improves performance on known tasks and enables robots to generalize skills to new tasks by learning from both robot and human demonstrations without complex action retargeting.

### Why it matters

**Research problem:** Robotic manipulation policies often require large amounts of robot teleoperation data and struggle to generalize to novel objects, tasks, or environments. Existing imitation learning methods are data-intensive and limited in out-of-distribution generalization, especially when transferring skills from humans to robots due to embodiment differences.

**Why it matters:** Improving robot manipulation generalization is crucial for deploying robots in real-world, unstructured environments where they must handle novel objects and tasks without extensive retraining. Reducing reliance on costly robot teleoperation data and enabling learning from human videos can significantly accelerate robot learning and adaptability.

**Key contributions:**

- A hierarchical policy framework that decomposes manipulation into high-level sub-goal prediction and low-level goal-conditioned control, improving in-distribution task performance.
- A novel 3D goal prediction architecture using dense per-patch Gaussian Mixture Models over end-effector keypoints from multi-view RGB-D inputs.
- An end-effector heatmap representation that bridges human and robot demonstrations, enabling cross-embodiment transfer without explicit action retargeting.
- Demonstration that training the high-level policy on heterogeneous human and robot data while keeping the low-level policy robot-specific enables generalization to novel objects, categories, and task compositions.
- Extensive experiments on pick-and-place, cloth folding, and hammering tasks showing improved success rates and out-of-distribution generalization compared to flat policies and prior hierarchical methods.

## About the professor

**David Held** — Associate Professor, Robotics Institute, Carnegie Mellon University.

Research interests: robot learning for physical reasoning and manipulation, robotic perception and control, object manipulation, autonomous driving, self-supervised learning, semi-supervised learning

### Research links

- [Faculty/profile page](http://davheld.github.io)
- [Lab website](https://r-pad.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hierarchical Reinforcement Learning
**The paper assumes:** hierarchical reinforcement learning, goal-conditioned policies, and robot manipulation control
**Already in this field?** Skip this entirely if you already understand hierarchical reinforcement learning concepts and their application to robot control policies.

To understand the GHOST paper's hierarchical policy framework for robot manipulation, a solid grasp of hierarchical reinforcement learning (HRL) is essential. The rigorous course option offers a deep, structured university-level lecture series covering foundational and advanced HRL concepts, while the fast track provides a concise, focused explainer series on hierarchical reinforcement learning to quickly build intuition and core knowledge. Choose the course for comprehensive depth and the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 2 (Imitation Learning), 15 (Hierarchical RL and IL), and 16 (RL for Robots), about 3.25 hours total — these cover imitation learning foundations, hierarchical RL concepts, and robot-specific RL applications essential for understanding the paper's approach.

*Why it unblocks this paper:* This Stanford CS224R Deep Reinforcement Learning course includes a dedicated lecture on Hierarchical RL and Imitation Learning (Lecture 15) and related lectures on imitation learning and RL for robots, directly covering the hierarchical policy decomposition and learning methods relevant to GHOST.

*If you want all of it:* About 20.6 hours across all 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hierarchical Reinforcement Learning](https://www.youtube.com/playlist?list=PLHD22PKARkdR5qnXSwYOzZY4VjIDvZWan) — Sean Kugele · 9 videos · 4.2h across 9 episodes

**Watch only this:** Episodes 1 (Hierarchical Reinforcement Learning), 4 (Options), and 5 (Learning with Options), about 1.3 hours total — these episodes introduce core HRL ideas and option frameworks critical for grasping the hierarchical policy design in GHOST.

*Why it unblocks this paper:* Sean Kugele's Hierarchical Reinforcement Learning playlist is a concise, focused series specifically on HRL concepts such as options, semi-Markov decision processes, and option discovery, providing clear intuition and foundational knowledge aligned with the paper's hierarchical approach.

*If you want all of it:* About 4.2 hours across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GHOST framework for hierarchical robot manipulation, start with foundational concepts in hierarchical reinforcement learning, robot manipulation learning, imitation learning from human demonstrations, and 3D keypoint detection. These prerequisites build the theoretical and technical background needed to grasp the paper's approach. Finally, study the authors' own talk on GHOST to gain direct insights into their novel hierarchical policy design, 3D sub-goal prediction, and cross-embodiment transfer techniques.

### hierarchical reinforcement learning lecture *(prerequisite)*
Hierarchical reinforcement learning provides the fundamental framework for decomposing complex control tasks into high-level and low-level policies, exactly as GHOST factorizes robot control. Understanding this will clarify the temporal abstraction and policy structuring that underpins the paper's approach.

*How the paper uses it:* GHOST uses hierarchical RL principles to separate sub-goal prediction from goal-conditioned control.

▶ [Hierarchical reinforcement learning - Doina Precup](https://www.youtube.com/watch?v=e8b0yC6COJ8) — Stanford · 40:30 · 7y ago

### robot manipulation learning seminar *(prerequisite)*
Robot manipulation learning seminars cover state-of-the-art methods for applying learning to robotic control involving object interaction, which is the core domain of GHOST. These talks provide context on challenges and solutions in manipulation learning relevant to the paper.

*How the paper uses it:* GHOST advances robot manipulation by learning hierarchical policies from heterogeneous demonstrations.

▶ [Stanford Robotics Seminar ENGR319 | Spring 2026 | Robot Learning from Human Experience](https://www.youtube.com/watch?v=NUtaN10cVDc) — Stanford Online · 1:09:08 · 5mo ago

### imitation learning from human demonstrations lecture *(prerequisite)*
Imitation learning from human demonstrations is key to GHOST's ability to leverage heterogeneous data without complex action retargeting. These lectures explain the challenges and methods for transferring skills from humans to robots, which is central to the paper's approach.

*How the paper uses it:* GHOST trains its high-level policy on both human and robot data to improve generalization.

▶ [RIG Lecture Series - Robot Learning from Human Demonstration for Manipulation](https://www.youtube.com/watch?v=guiv-_ccRVY) — Robotics Institute Germany · 1:28:36 · 9mo ago

### 3D keypoint detection for robotics talk *(prerequisite)*
3D keypoint detection is essential for representing sub-goals as 3D end-effector targets in GHOST, enabling embodiment-agnostic goal representations. Talks on this topic provide technical background on learning and using 3D keypoints in robotic perception and control.

*How the paper uses it:* GHOST predicts 3D end-effector keypoints as sub-goals bridging human and robot embodiments.

▶ [CoRL 2020, Spotlight Talk 96: S3K: Self-Supervised Semantic Keypoints for Robotic Manipulation vi...](https://www.youtube.com/watch?v=FB3p-LUEOBE) — Conference on Robot Learning · 5:06 · 5y ago

### goal-conditioned policy learning lecture *(prerequisite)*
Goal-conditioned policy learning underlies the low-level policy in GHOST that executes robot-specific actions to reach predicted sub-goals. Understanding this concept clarifies how the low-level controller adapts to varying goals.

*How the paper uses it:* GHOST's low-level policy is conditioned on predicted sub-goal heatmaps to perform manipulation.

▶ [Goal-conditioned reinforcement learning: frameworks and core concepts](https://www.youtube.com/watch?v=glG8IwSjjKE) — Olivier Sigaud · 15:37 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the GHOST paper, starting with the basics of robot manipulation and imitation learning from human demonstrations. It then covers hierarchical reinforcement learning and 3D keypoint detection, which are essential for grasping the paper's hierarchical policy and sub-goal representation. Finally, it concludes with goal-conditioned policy learning to explain how the low-level policy executes actions conditioned on predicted sub-goals.

### robot manipulation learning seminar *(prerequisite)*
Robot manipulation involves controlling a robot to interact with objects in its environment, such as picking, placing, or folding. This seminar introduces the challenges and learning-based approaches to robot manipulation, providing a practical foundation for understanding how robots learn to perform complex tasks.

*How the paper uses it:* GHOST focuses on improving robot manipulation by learning hierarchical policies from demonstrations.

▶ [RIG Lecture Series - Robot Learning from Human Demonstration for Manipulation](https://www.youtube.com/watch?v=guiv-_ccRVY) — Robotics Institute Germany · 1:28:36 · 9mo ago

### hierarchical reinforcement learning lecture *(prerequisite)*
Hierarchical reinforcement learning breaks down complex tasks into simpler sub-tasks, enabling agents to learn and plan at multiple levels of abstraction. This lecture provides intuition on how decomposing control into high-level and low-level policies can improve learning efficiency and generalization.

*How the paper uses it:* GHOST uses a hierarchical policy with a high-level sub-goal predictor and a low-level goal-conditioned controller.

▶ [Hierarchical reinforcement learning - Doina Precup](https://www.youtube.com/watch?v=e8b0yC6COJ8) — Stanford · 40:30 · 7y ago

### 3D keypoint detection for robotics talk *(prerequisite)*
3D keypoint detection identifies important points on objects or robot end-effectors in three-dimensional space, which is crucial for precise manipulation. This talk explains how self-supervised learning can be used to detect robust keypoints for robotic tasks.

*How the paper uses it:* GHOST represents sub-goals as 3D end-effector keypoints to bridge human and robot embodiments.

▶ [CoRL 2020, Spotlight Talk 96: S3K: Self-Supervised Semantic Keypoints for Robotic Manipulation vi...](https://www.youtube.com/watch?v=FB3p-LUEOBE) — Conference on Robot Learning · 5:06 · 5y ago

### goal-conditioned policy learning lecture
Goal-conditioned reinforcement learning trains policies that take a goal as input and learn to achieve it, enabling flexible and reusable skills. This lecture introduces the core ideas behind conditioning policies on goals to improve adaptability.

*How the paper uses it:* GHOST's low-level policy is goal-conditioned on predicted sub-goal heatmaps to execute robot-specific actions.

▶ [CSL seminar: Todor Davchev - Fast skill acquisition with goal conditioned RL](https://www.youtube.com/watch?v=QRI4KkFfsr0) — MIT Improbable AI Group · 55:30 · Streamed 4y ago

## Already in your library

- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=iKWYLSVAtfM) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)
- [What can Hierarchical Reinforcement Learning Do for You? [Doina Precup, McGill University | MILA]](https://www.youtube.com/watch?v=IDJh5e-NEAo) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [RLVS 2021 - Day 1 - Introduction to hierarchical reinforcement learning](https://www.youtube.com/watch?v=kSFjMely5q8) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Goal-conditioned reinforcement learning: Introduction](https://www.youtube.com/watch?v=A2xlwqCfKSY) — also for: GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation (Shubham Tulsiani)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the GHOST hierarchical robot manipulation framework. Starting with a simple visualization of the core sub-goal heatmap representation, you then implement a scaled-down version of the hierarchical policy on a public manipulation dataset to reproduce key metrics. Finally, you extend the approach by addressing a stated limitation—automatic sub-goal discovery—exploring a novel method to reduce manual annotation effort.

### Beginner — Visualizing 3D Sub-Goal Heatmaps from Multi-View RGB-D
*Effort: a weekend, ~8 hours*

You build a small tool that takes multi-view RGB-D images and projects 3D end-effector keypoints into 2D heatmaps representing sub-goals, similar to the paper's end-effector heatmap representation. The tool visualizes these heatmaps overlaid on RGB images to illustrate the embodiment-agnostic goal representation.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key representation innovation in GHOST that enables cross-embodiment transfer by encoding 3D sub-goals as image-plane heatmaps.

**Grounded in:** An end-effector heatmap representation that bridges human and robot demonstrations, enabling cross-embodiment transfer without explicit action retargeting.

**Tech stack:** Python 3.11, Open3D, OpenCV, NumPy, Matplotlib

**Data:** Simulated or publicly available RGB-D images of a robot arm or human hand performing simple manipulation; you can synthesize 3D keypoints for demonstration.

**Build it:**

1. Load multi-view RGB-D images and camera calibration parameters.
2. Define or load 3D end-effector keypoints representing sub-goals.
3. Project 3D keypoints into each RGB image plane using camera intrinsics and extrinsics.
4. Generate 2D Gaussian heatmaps centered at projected keypoints.
5. Overlay heatmaps on RGB images and visualize the results.
6. Document the process and explain how this representation supports embodiment-agnostic goal conditioning.

**Ships as:** A GitHub repo with scripts to generate and visualize sub-goal heatmaps from multi-view RGB-D images, including example images and a README explaining the method and its role in GHOST.

**Stretch goal:** Add a simple GUI to interactively select 3D keypoints and see corresponding heatmaps in real time.

### Intermediate — Reimplementing GHOST Hierarchical Policy on a Public Robot Manipulation Dataset
*Effort: 1-3 weekends, ~20 hours*

You implement the core hierarchical policy framework of GHOST: a high-level policy predicting 3D sub-goals from RGB-D inputs and a low-level goal-conditioned policy executing actions to reach those sub-goals. You train and evaluate on a smaller public robot manipulation dataset (e.g., the RoboSuite pick-and-place subset) and compare against a flat policy baseline using success rate metrics.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main hierarchical factorization and demonstrate improved task success, reflecting comprehension of the method's architecture and training strategy.

**Grounded in:** A hierarchical policy framework that decomposes manipulation into high-level sub-goal prediction and low-level goal-conditioned control, improving in-distribution task performance.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym, RoboSuite (or similar public robot manipulation environment), NumPy, Matplotlib

**Data:** Public robot manipulation dataset or environment such as RoboSuite pick-and-place tasks, used as a substitute for the paper's proprietary robot demonstration data.

**Build it:**

1. Set up the robot manipulation environment and collect or load demonstration data.
2. Implement the high-level policy network to predict 3D sub-goals from RGB-D inputs.
3. Implement the low-level goal-conditioned policy that takes sub-goal heatmaps and executes robot actions.
4. Train the hierarchical policies separately using the demonstration data.
5. Implement a flat policy baseline trained end-to-end on the same data.
6. Evaluate both policies on task success rates and compare results.
7. Write a report summarizing the implementation details, results, and comparison.

**Ships as:** A GitHub repo containing code for hierarchical and flat policies, training scripts, evaluation results, and a README explaining the implementation and findings.

**Stretch goal:** Incorporate a pretrained visual backbone (e.g., DINOv3) for the high-level policy and analyze its impact on performance.

### Advanced — Automatic Sub-Goal Discovery for Hierarchical Robot Manipulation
*Effort: a few weeks, ~40+ hours*

You develop and integrate an automatic sub-goal discovery method to replace manual sub-goal annotation in human demonstrations, addressing a key limitation of GHOST. Using unsupervised segmentation or change-point detection on demonstration trajectories, you identify candidate sub-goals and evaluate their utility in training a hierarchical policy on a robot manipulation dataset.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, demonstrating your ability to extend the hierarchical framework and improve data efficiency by reducing annotation effort.

**Grounded in:** Manual annotation of sub-goals is required for human demonstrations; automatic sub-goal discovery remains future work.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib, OpenAI Gym or RoboSuite

**Data:** Public robot manipulation dataset or simulated demonstration trajectories with time-series state/action data to apply sub-goal discovery.

**Build it:**

1. Collect or simulate demonstration trajectories with state and action sequences.
2. Implement an unsupervised method (e.g., change-point detection, clustering on latent embeddings) to segment trajectories into sub-goals.
3. Validate discovered sub-goals qualitatively and quantitatively against manual annotations if available.
4. Integrate discovered sub-goals into the hierarchical policy training pipeline.
5. Train and evaluate the hierarchical policy using automatically discovered sub-goals.
6. Compare performance and annotation effort against manual sub-goal annotation baseline.
7. Document methodology, results, and implications for reducing annotation cost.

**Ships as:** A GitHub repo with code for automatic sub-goal discovery, hierarchical policy training using discovered sub-goals, evaluation scripts, and a detailed README discussing the approach and results.

**Stretch goal:** Experiment with contrastive learning to improve visual embeddings for better sub-goal segmentation, addressing the visual domain gap limitation.
