---
title: "404 · Video Generators are Robot Policies — Ruoshi Liu"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ruoshi-liu"
source_hash: "6ba399a61597d77641460c49a11a7d7c39da5f0b3a6ade22b7a98cf00bdbfaa3"
sequence: 404
generator: "outreach-garden: managed"
---

# 404 · Video Generators are Robot Policies

## At a glance

- **Professor:** Ruoshi Liu
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Video Generators are Robot Policies](https://arxiv.org/pdf/2508.00795)
- **Authors:** Junbang Liang, Pavel Tokmakov, Ruoshi Liu, Sruthi Sudhakar, Paarth Shah, Rares Ambrus, Carl Vondrick
- **Year:** 2025

## Paper overview

This paper proposes a novel approach to robot policy learning by using video generation as a proxy. The method, called Video Policy, jointly generates videos of robot behavior and corresponding robot actions, enabling learning from action-free video data and improving generalization to new tasks and environments. The approach shows superior performance and robustness compared to traditional behavior cloning methods in both simulation and real-world experiments.

### Why it matters

**Research problem:** Current visuomotor policies for dexterous manipulation struggle to generalize under perceptual or behavioral distribution shifts and require large amounts of expensive human demonstration data.

**Why it matters:** Robust generalization in robot manipulation is critical for deploying robots in diverse real-world scenarios. Collecting large-scale human demonstration data is costly and limits scalability.

**Key contributions:**

- Demonstration that video generative models can serve as effective robot policies that generalize to visual and task distribution shifts.
- Design of a joint video and action diffusion architecture integrating video generation with policy learning.
- Empirical evidence that learning to generate videos of robot behavior requires minimal demonstration data for robust policy extraction.
- Extensive evaluation on RoboCasa and Libero10 benchmarks showing state-of-the-art performance with fewer demonstrations.
- Real-world experiments validating strong generalization to unseen objects, backgrounds, and object locations.

## About the professor

**Ruoshi Liu** — Assistant Professor, Computer Science Department, Univ. of Maryland - College Park.

Research interests: intelligent systems that can interact with the physical world

### Research links

- [Faculty/profile page](https://ruoshiliu.github.io)
- [Resolved homepage](https://ruoshiliu.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=suAawHYAAAAJ)
- [GitHub](https://github.com/ruoshiliu)
- [LinkedIn](https://www.linkedin.com/in/ruoshi-liu-a5046aa0/)
- [Social profile](https://twitter.com/ruoshi_liu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** diffusion probabilistic models
**The paper assumes:** diffusion probabilistic models and generative modeling
**Already in this field?** Skip this entirely if you already understand the principles and training of diffusion probabilistic models in machine learning.

This background focuses on diffusion probabilistic models, which are central to the Video Policy paper's approach for generating videos and robot actions. The rigorous course option offers a deep, structured understanding of deep generative models including diffusion models, while the fast track provides a concise, intuition-driven introduction to flow matching and diffusion models. Choose the course for comprehensive mastery or the fast track for a quick yet solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS236: Deep Generative Models | 2023](https://www.youtube.com/playlist?list=PL14_CPAN5yShN6x139pvSwLS4o6QaI5rJ) — Ravi Dhir · 18 videos

**Watch only this:** Lectures 1-6, about 6 hours — covering introduction to generative models, variational autoencoders, normalizing flows, and diffusion models fundamentals, sufficient to grasp diffusion probabilistic models used in the paper.

*Why it unblocks this paper:* This Stanford CS236 Deep Generative Models 2023 playlist covers diffusion models in depth as part of a broader course on generative modeling, directly relevant to understanding the Video Policy's diffusion-based video and action generation.

*If you want all of it:* All 18 lectures, approximately 18 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.S184: Flow Matching and Diffusion Models (2026)](https://www.youtube.com/playlist?list=PL57nT7tSGAAXwjhDYcxEycx5W7YoSrZyt) — Peter Holderrieth · 6 videos

**Watch only this:** Episodes 1-3, about 1.5 hours — covering basics of flow matching, diffusion models, and their connections, enough for a quick conceptual overview.

*Why it unblocks this paper:* MIT 6.S184 Flow Matching and Diffusion Models (2026) playlist offers a concise, clear introduction to diffusion models with a focus on intuition and flow matching, ideal for quickly understanding the core concepts behind the Video Policy's diffusion approach.

*If you want all of it:* All 6 episodes, approximately 3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Video Generators are Robot Policies,' start by building foundational knowledge on diffusion models for video generation, as they form the core generative technique used. Next, gain insights into robot policy learning from visual data and traditional behavior cloning methods to appreciate the baseline and context. Finally, focus on the paper's core concept by watching the authors' own talk or closely related research talks that explain the novel approach of using video generation as robot policies.

### Diffusion Models for Video Generation *(prerequisite)*
Diffusion models are the fundamental generative modeling technique underpinning the paper's approach to jointly generate videos and robot actions. Understanding their theory and practice is crucial to grasp how the Video Policy framework leverages video generation for policy learning.

*How the paper uses it:* The paper uses diffusion models to generate videos conditioned on observations and task descriptions, forming the backbone of the Video Policy architecture.

▶ [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 01 ...](https://www.youtube.com/watch?v=9eJQQVrUUoI) — Peter Holderrieth · 1:18:03

### Robot Policy Learning from Visual Data *(prerequisite)*
This concept covers how robots learn policies from visual inputs, including challenges in generalization and robustness. It provides the necessary background to understand the limitations of traditional methods and the motivation for the paper's novel approach.

*How the paper uses it:* The paper addresses the challenge of robust visuomotor policy learning under distribution shifts and leverages video generation to improve generalization.

▶ [Robot Learning 2026 – Lecture 9: Generalist Robot Policies ...](https://www.youtube.com/watch?v=dtofzDY9zuo) — Oier Mees · 1:03:29

### Behavior Cloning and Imitation Learning *(prerequisite)*
Behavior cloning is a traditional baseline method for robot policy learning, often requiring large amounts of demonstration data. Understanding this method helps contextualize the improvements and innovations introduced by the Video Policy approach.

*How the paper uses it:* The paper compares Video Policy against behavior cloning baselines, demonstrating superior performance with fewer demonstrations.

▶ [Dylan Foster | Is Behavior Cloning All You Need ...](https://www.youtube.com/watch?v=KOgh-FFDlvg) — Harvard CMSA · 1:02:15

### Paper Author Talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed explanation of their novel Video Policy framework, including the joint video and action diffusion architecture and empirical results. This talk is essential for an advanced understanding of the paper's contributions and methodology.

*How the paper uses it:* This talk directly presents the paper's approach and findings from the authors themselves.

▶ [Can World Models Become Robot Policies? | WFM-Based ...](https://www.youtube.com/watch?v=2a6OYcYcOOw) — 엥지유니버스 | 로봇 엔지니어 · 23:43

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand the paper 'Video Generators are Robot Policies.' Starting with the basics of robot policy learning from visual data, it then covers traditional behavior cloning methods, followed by diffusion models for video generation, which are central to the paper's approach. Finally, it presents the core idea of using video generation as a robot policy, tying all concepts together.

### Robot Policy Learning from Visual Data *(prerequisite)*
Learn how robots learn to perform tasks by interpreting visual inputs, a foundational idea for teaching robots to manipulate objects using cameras and sensors. This sets the stage for understanding how policies map visual observations to actions.

*How the paper uses it:* The paper builds on visuomotor policy learning to improve robot manipulation generalization.

▶ [Diffusion Policy Controlling Robots - Part 1](https://www.youtube.com/watch?v=Is2UBZIVDQQ) — West Coast Machine Learning · 1:26:34

### Behavior Cloning and Imitation Learning *(prerequisite)*
Understand behavior cloning, a traditional method where robots learn by mimicking human demonstrations. This method is a baseline in the paper and highlights the challenges Video Policy aims to overcome.

*How the paper uses it:* The paper compares its Video Policy approach against behavior cloning baselines.

▶ [Dylan Foster | Is Behavior Cloning All You Need ...](https://www.youtube.com/watch?v=KOgh-FFDlvg) — Harvard CMSA · 1:02:15

### Diffusion Models for Video Generation *(prerequisite)*
Discover diffusion models, a powerful generative AI technique that gradually refines noisy data into coherent images or videos. This concept is key to understanding how the paper generates videos and robot actions jointly.

*How the paper uses it:* The paper uses diffusion models to jointly generate videos and robot actions for policy learning.

▶ [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — Machine Learning at Berkeley · 53:40

### Video Generators as Robot Policies (Core Concept) *(the paper's own talk)*
Explore the novel idea of treating video generation models as robot policies, where generating future robot behavior videos also predicts corresponding actions. This approach enables learning from large-scale action-free videos and improves generalization.

*How the paper uses it:* This is the paper's main contribution, demonstrating video generation as a proxy for robot policy learning.

▶ [Can World Models Become Robot Policies? | WFM-Based ...](https://www.youtube.com/watch?v=2a6OYcYcOOw) — 엥지유니버스 | 로봇 엔지니어 · 23:43

## Already in your library

- [MIT 6.S183 A Practical Introduction to Diffusion Models ...](https://www.youtube.com/watch?v=bBA0Ueb80hg) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [How I Understand Diffusion Models](https://www.youtube.com/watch?v=i2qSxMVeVLI) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the "Video Generators are Robot Policies" paper. The beginner project focuses on reproducing a core mechanism of video-conditioned action prediction using simpler tools and public data. The intermediate project involves reimplementing the paper's two-stage training approach on a smaller-scale manipulation dataset to compare Video Policy against a baseline. The advanced project extends the method by addressing the paper's limitation on computational cost, experimenting with acceleration strategies for video diffusion models to enable faster robot policy inference.

### Beginner — Video-Conditioned Action Prediction Prototype
*Effort: a weekend, ~8 hours*

You build a simplified pipeline that takes a short video clip of a robot arm performing a manipulation task and predicts the corresponding robot actions frame-by-frame using a neural network. Instead of full diffusion models, you use a pretrained video feature extractor (e.g., a 3D CNN or a lightweight video transformer) to encode video frames and a simple MLP decoder to predict actions.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core idea that video generation features can be used to decode robot actions, a key insight of the paper. It shows you can implement the video-to-action mapping mechanism that underlies Video Policy.

**Grounded in:** Design of a joint video and action diffusion architecture integrating video generation with policy learning.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Use a publicly available small-scale robot manipulation video dataset such as the RoboTurk dataset or synthesize a short video-action paired dataset by recording a simulated robot arm in PyBullet.

**Build it:**

1. Collect or synthesize a small dataset of short robot manipulation videos paired with action sequences.
2. Extract video features using a pretrained lightweight video encoder (e.g., 3D CNN or video transformer).
3. Train a simple MLP to predict robot actions from the extracted video features.
4. Evaluate prediction accuracy on a held-out set and visualize predicted vs. true actions.
5. Write a README explaining the connection to the paper's video-to-action decoding.

**Ships as:** A GitHub repo with code to train and evaluate video-conditioned action prediction, plus plots showing prediction accuracy and a README linking the implementation to the paper's joint video-action architecture.

**Stretch goal:** Add a simple video generation module (e.g., frame interpolation) to generate intermediate frames and test if action prediction improves.

### Intermediate — Two-Stage Video Policy Training on RoboCasa Subset
*Effort: 1-3 weekends*

You reimplement the paper's two-stage training approach: first fine-tune a video generation model on initial observations and task descriptions, then train an action decoder from video features. You apply this on a smaller subset of the RoboCasa benchmark or a similar publicly available robot manipulation dataset. You compare Video Policy's performance to a baseline behavior cloning model trained directly on actions.

**Why it shows you understood the paper:** This project shows you can implement the core Video Policy method and reproduce the key empirical finding that two-stage training improves policy success rates with fewer demonstrations. It also demonstrates your ability to evaluate generalization under distribution shifts.

**Grounded in:** Two-stage training (video generation fine-tuning followed by action decoding) significantly improves performance over joint end-to-end training.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib, PyBullet or RoboSuite for simulation

**Data:** Use a publicly available subset of RoboCasa or a similar simulated robot manipulation dataset with paired videos and actions. If unavailable, simulate a small dataset in PyBullet with scripted policies.

**Build it:**

1. Set up a video generation model architecture (e.g., a simplified video diffusion or autoregressive model) conditioned on initial observations and task descriptions.
2. Fine-tune the video generation model on the dataset's videos without action labels.
3. Train an action decoder network to predict robot actions from the video features extracted by the video model.
4. Train a baseline behavior cloning model directly on action sequences for comparison.
5. Evaluate both models on held-out tasks and report success rates or action prediction errors.
6. Document the training procedure, results, and relate findings to the paper's claims.

**Ships as:** A GitHub repo with code for two-stage Video Policy training and baseline behavior cloning, evaluation scripts, and a detailed README comparing results and discussing the paper's two-stage training advantage.

**Stretch goal:** Experiment with longer video prediction horizons during training and analyze effects on generalization.

### Advanced — Accelerating Video Policy Inference for Real-Time Robot Control
*Effort: few weeks*

You extend the Video Policy approach by researching and implementing strategies to reduce the computational cost of video diffusion models for robot policy inference. This could include model distillation, pruning, or replacing diffusion with faster generative models. You evaluate the trade-off between inference speed and policy performance on a robot manipulation task in simulation.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the paper: the high computational cost of video diffusion models hindering real-time deployment. It demonstrates your ability to innovate on the method and contribute to future directions in robot policy learning.

**Grounded in:** Computational cost of video diffusion models remains high, posing challenges for real-time deployment.

**Tech stack:** Python 3.11, PyTorch, ONNX Runtime or TensorRT for acceleration, NumPy, Matplotlib, PyBullet or RoboSuite for simulation

**Data:** Use a simulated robot manipulation dataset similar to RoboCasa or generate synthetic data in PyBullet for training and evaluation.

**Build it:**

1. Profile the baseline Video Policy video diffusion model inference time on GPU.
2. Implement one or more acceleration techniques such as model pruning, knowledge distillation, or replacing diffusion with a faster video generation model.
3. Retrain or fine-tune the accelerated model and integrate with the action decoder.
4. Evaluate inference speed improvements and measure policy success rates on manipulation tasks.
5. Analyze the trade-offs between speed and performance and document findings.
6. Write a comprehensive README discussing the approach, results, and implications for real-time robot control.

**Ships as:** A GitHub repo with accelerated Video Policy model code, evaluation scripts showing speed and performance metrics, and a README discussing the practical impact on real-time deployment challenges.

**Stretch goal:** Integrate sensor modalities (e.g., depth or tactile data) to improve policy precision under acceleration constraints.
