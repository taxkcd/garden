---
title: "978 · Visual Foresight With a Local Dynamics Model — Robert Platt"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-robert-platt"
source_hash: "94000ca3ea9faad1ab67154df407ef81504c19715f81c0b13b3ce915b0543529"
sequence: 978
generator: "outreach-garden: managed"
---

# 978 · Visual Foresight With a Local Dynamics Model

## At a glance

- **Professor:** Robert Platt
- **Institution:** Northeastern University
- **Paper:** [Visual Foresight With a Local Dynamics Model](https://arxiv.org/pdf/2206.14802)
- **Authors:** Colin Kohler, Robert Platt
- **Year:** 2022

## Paper overview

This paper presents a new method called the Local Dynamics Model (LDM) that efficiently learns how robotic pick-and-place actions change the environment by focusing on local image patches around the action. This approach improves sample efficiency and accuracy in predicting outcomes of manipulation tasks, enabling robots to plan one step ahead and perform complex object arrangement tasks in simulation better than previous methods.

### Why it matters

**Research problem:** Learning efficient and accurate models of state transitions for robotic manipulation tasks, especially for pick-and-place actions in cluttered environments, to improve policy learning and planning under high-dimensional visual inputs.

**Why it matters:** Robotic manipulation in real-world settings involves complex interactions and uncertainties. Improving sample efficiency and accuracy of dynamics models enables faster and more reliable learning of manipulation policies, which is crucial for practical deployment of robots in tasks like object arrangement and packing.

**Key contributions:**

- Introduction of the Local Dynamics Model (LDM) that models state transitions locally in image space for pick-and-place primitives.
- Exploitation of SE(2) symmetry and locality to improve sample efficiency and accuracy of dynamics modeling.
- Integration of LDM with a one-step lookahead planning method that samples diverse high-quality actions for policy learning.
- Demonstration of superior performance over model-free and other model-based baselines on multiple complex simulated manipulation tasks.
- Empirical evidence of LDM's better zero-shot generalization to unseen numbers of objects compared to baselines.

## About the professor

**Robert Platt** — Associate Professor, Affiliate Faculty with the College of Engineering, Khoury College of Computer Sciences, Northeastern University.

Research interests: Perception, planning, and control for robotic manipulation

### Research links

- [Faculty/profile page](https://www.khoury.northeastern.edu/people/robert-platt)
- [Lab website](https://www.khoury.northeastern.edu/labs_and_groups/helping-hands-lab/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** model-based reinforcement learning
**The paper assumes:** model-based reinforcement learning, dynamics modeling, planning with learned models, policy improvement
**Already in this field?** Skip this entirely if you already understand the fundamentals of model-based reinforcement learning and how learned dynamics models are used for planning and policy learning.

To understand the Local Dynamics Model paper, a solid grasp of model-based reinforcement learning (MBRL) is essential, as the paper builds on learning and using dynamics models for robotic manipulation and planning. The rigorous course option offers a deep, structured university-level treatment of MBRL concepts, while the fast track provides a concise, intuition-driven introduction suitable for quickly gaining practical understanding without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS 185/285: Deep Reinforcement Learning (Spring 2026)](https://www.youtube.com/playlist?list=PLKq1TCpsv3Y4) — RAIL · 27 videos · 36.4h across 27 episodes

**Watch only this:** Lectures 15 and 16: 'Model-Based RL' and 'Model-Based RL Algorithms', about 2 hours 40 minutes total — these cover the fundamentals and key algorithms of model-based reinforcement learning necessary to understand the Local Dynamics Model approach.

*Why it unblocks this paper:* This is a comprehensive, university-level deep reinforcement learning course from Berkeley (RAIL) that covers model-based RL in detail, including algorithms and applications relevant to robotic manipulation and planning, matching the paper's core methodology.

*If you want all of it:* 36.4 hours across 27 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning For Robotics](https://www.youtube.com/playlist?list=PLCHuhFB1N-Cn3oBRNOKSJJukmhwZ3d0u-) — Sandeep Mandrawadkar · 18 videos · 5.0h across 18 episodes

**Watch only this:** Episodes 10 and 11: 'Model-based vs Model-free RL' and 'Value-based RL', about 32 minutes total — these episodes succinctly explain the core distinctions and value-based methods relevant to the paper's use of learned dynamics and planning.

*Why it unblocks this paper:* This short-form series on Reinforcement Learning for Robotics provides clear, visual, and practical explanations of model-based vs model-free RL and related concepts, ideal for quickly grasping the intuition behind the paper's approach without deep theoretical overhead.

*If you want all of it:* 5.0 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Visual Foresight With a Local Dynamics Model," start by building foundational knowledge in model-based reinforcement learning, visual dynamics prediction, and equivariant convolutional neural networks, as these underpin the paper's approach to efficient robotic manipulation. Then, explore the core concept of the Local Dynamics Model itself through the authors' own related talks and closely aligned research presentations to grasp the novel contributions and planning integration.

### Model-based reinforcement learning *(prerequisite)*
Model-based reinforcement learning (MBRL) provides the fundamental framework for learning and planning with learned models of environment dynamics, which is central to the paper's approach to policy learning and planning. Understanding MBRL concepts such as state transition modeling, planning with learned models, and sample efficiency will clarify the motivation and advantages of the Local Dynamics Model.

*How the paper uses it:* The paper's approach integrates a learned local dynamics model with a one-step lookahead planner, a classic MBRL technique.

▶ [L6 Model-based RL (Foundations of Deep RL Series)](https://www.youtube.com/watch?v=2o1yrkbpcUk) — Pieter Abbeel · 18:14 · 5y ago

### Visual dynamics prediction *(prerequisite)*
Visual dynamics prediction involves modeling how visual states evolve over time, which is crucial for predicting the outcomes of robotic manipulation actions from image inputs. This knowledge helps in understanding how the Local Dynamics Model predicts local image changes after pick-and-place actions.

*How the paper uses it:* The Local Dynamics Model predicts local image-to-image transitions to model the effects of manipulation actions.

▶ [Stanford Seminar - The Power of Visual Representations](https://www.youtube.com/watch?v=x8AQYQemlZ8) — Stanford Online · 57:52 · 4y ago

### Equivariant convolutional neural networks *(prerequisite)*
Equivariant CNNs exploit spatial symmetries such as rotations and translations to improve sample efficiency and model generalization. This concept is key to understanding the paper's use of SE(2) symmetry and locality assumptions in the Local Dynamics Model architecture.

*How the paper uses it:* The paper leverages spatial equivariance to improve the accuracy and efficiency of the local dynamics model.

▶ [Group Equivariant Deep Learning - Lecture 1.1: Introduction](https://www.youtube.com/watch?v=z2OEyUgSH2c) — Erik Bekkers · 19:04 · 4y ago

### Local Dynamics Model talk *(paper-talk search result; attribution unverified)*
This section focuses on talks directly related to the paper or closely aligned research by the authors or their collaborators. These talks provide deep insights into the Local Dynamics Model, its design, and its integration with planning for robotic manipulation tasks.

*How the paper uses it:* Directly targets the authors' presentation and related research for deep insights on the Local Dynamics Model and its application.

▶ [Visual Foresight Tree for Object Retrieval from Clutter with Non-prehensile Rearrangement](https://www.youtube.com/watch?v=7cL-hmgvyec) — Algorithmic Robotics and Control Lab at Rutgers · 6:36 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Visual Foresight With a Local Dynamics Model,' start by building a foundation in model-based reinforcement learning, which is the framework for learning and planning policies using learned models of the environment. Next, grasp visual dynamics prediction to understand how the model forecasts environment changes from images. Then, learn about equivariant convolutional neural networks to appreciate how spatial symmetries are exploited in the model architecture. Finally, study the Local Dynamics Model itself and the one-step lookahead planning method integrated with it to see how the paper achieves efficient robotic manipulation.

### Model-based reinforcement learning *(prerequisite)*
Model-based reinforcement learning (MBRL) involves learning a model of the environment's dynamics and using it to plan or improve policies. This approach can be more sample-efficient than model-free methods because it leverages predictions about future states to guide decision-making.

*How the paper uses it:* The paper uses a model-based RL approach by learning a local dynamics model to predict state transitions and plan actions.

▶ [L6 Model-based RL (Foundations of Deep RL Series)](https://www.youtube.com/watch?v=2o1yrkbpcUk) — Pieter Abbeel · 18:14 · 5y ago

### Visual dynamics prediction *(prerequisite)*
Visual dynamics prediction is about forecasting how visual scenes change over time, especially after actions are taken. It helps robots understand and anticipate the effects of their manipulations by predicting future images or states from current observations.

*How the paper uses it:* The Local Dynamics Model predicts how local image patches change after pick-and-place actions, which is a form of visual dynamics prediction.

▶ [Stanford Seminar - The Power of Visual Representations](https://www.youtube.com/watch?v=x8AQYQemlZ8) — Stanford Online · 57:52 · 4y ago

### Equivariant convolutional neural networks *(prerequisite)*
Equivariant CNNs are designed to respect spatial symmetries like rotations and translations, meaning their outputs transform predictably when inputs are transformed. This property improves learning efficiency and generalization in spatial tasks.

*How the paper uses it:* The paper exploits SE(2) symmetry and locality assumptions in its model architecture, which relates to equivariant CNN concepts.

▶ [Group Equivariant Deep Learning - Lecture 1.1: Introduction](https://www.youtube.com/watch?v=z2OEyUgSH2c) — Erik Bekkers · 19:04 · 4y ago

### Local Dynamics Model talk *(paper-talk search result; attribution unverified)*
This talk provides direct insights into the Local Dynamics Model, explaining how focusing on local image patches around actions improves prediction accuracy and sample efficiency in robotic manipulation tasks.

*How the paper uses it:* It is a presentation by experts that covers the core contributions and methods of the paper.

▶ [Visual Foresight Tree for Object Retrieval from Clutter with Non-prehensile Rearrangement](https://www.youtube.com/watch?v=7cL-hmgvyec) — Algorithmic Robotics and Control Lab at Rutgers · 6:36 · 5y ago

### One-step lookahead planning
One-step lookahead planning involves evaluating the immediate outcomes of possible actions to select the best next step. It is a simple but effective planning strategy when combined with accurate dynamics models.

*How the paper uses it:* The paper integrates the Local Dynamics Model with a one-step lookahead planner to efficiently select actions in a large spatial action space.

▶ [Sequential decision videos - DLA Part I - Introduction to direct lookahead policies](https://www.youtube.com/watch?v=yfpRl7eeN68) — Warren Powell · 8:25 · 2mo ago

## Already in your library

- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 11: Model-Based RL](https://www.youtube.com/watch?v=PvqyGnOirgA) — also for: Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency (Sergey Levine)
- [Visually Explained: Kalman Filters](https://www.youtube.com/watch?v=IFeCIbljreY) — also for: The Model Forest Ensemble Kalman Filter (Andrey A. Popov)
- [Lecture 10 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=MfIjxPh6Pys) — also for: Knowledge-augmented Deep Learning and Its Applications: A Survey (Zijun Cui)
- [MIT 6.S191: Convolutional Neural Networks](https://www.youtube.com/watch?v=pqIcoskUuWs) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [CNN: Convolutional Neural Networks Explained - Computerphile](https://www.youtube.com/watch?v=py5byOOHZM8) — also for: Utilizing generative adversarial networks (GANs) for realistic video stream augmentation and enhancement (Magdy A. Bayoumi)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [Convolutional Neural Networks from Scratch | In Depth](https://www.youtube.com/watch?v=jDe5BAsT2-Y) — also for: What’s color got to do with it? Face recognition in grayscale (Michael King)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Local Dynamics Model (LDM) paper. The beginner project focuses on reproducing a core mechanism of local image patch dynamics prediction using familiar tools. The intermediate project builds on the authors' released code to implement and evaluate LDM on a manipulation task, comparing it to a baseline. The advanced project extends the paper by addressing a stated limitation: implementing multi-step lookahead planning using LDM to improve policy performance on complex tasks.

### Beginner — Local Patch Dynamics Prediction with UNet
*Effort: a weekend, ~8 hours*

You build a simplified image-to-image dynamics prediction model that learns to predict the next state of a local image patch around a pick-and-place action. Using a UNet architecture and focal loss on pixel-wise depth distributions, you train the model on synthetic image patches simulating object manipulation.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core idea of LDM: focusing on local image patches and modeling pixel-wise depth changes with a UNet and focal loss, as well as the importance of spatial locality in dynamics prediction.

**Grounded in:** The model uses a UNet architecture with focal loss on pixel-wise depth distributions for training.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic local image patches generated by simulating simple pick-and-place actions on 64x64 pixel images with depth channels, as no public dataset is provided.

**Build it:**

1. Generate a synthetic dataset of local image patches (64x64 pixels) representing before and after states of simple pick-and-place actions with depth values.
2. Implement a UNet model that takes a local image patch as input and predicts the pixel-wise depth distribution of the next state.
3. Train the model using a focal loss function to handle class imbalance in depth values.
4. Evaluate the model's pixel-wise prediction error on a held-out synthetic test set.
5. Visualize example predictions comparing input, ground truth, and predicted depth patches.

**Ships as:** A GitHub repository with code to generate synthetic data, train the local patch UNet model, evaluate pixel-wise depth prediction error, and visualize results, demonstrating the core LDM mechanism.

**Stretch goal:** Add data augmentation and experiment with different local crop sizes to observe effects on prediction accuracy.

### Intermediate — Reproducing Local Dynamics Model on Simulated Manipulation Tasks
*Effort: 1-3 weekends*

You clone and run the authors' official Local Dynamics Model codebase to reproduce their results on one of the provided simulated manipulation tasks. You then implement a simple baseline (e.g., a naive UNet without locality constraints) and compare pixel-wise prediction error and action success rates.

**Why it shows you understood the paper:** This project shows you can work with the authors' implementation, understand the LDM architecture and training procedure, and critically evaluate its performance against a baseline, reflecting comprehension of the paper's core contributions and empirical results.

**Grounded in:** Our code is available at https://github.com/ColinKohler/LocalDynamicsModel. Our method outperforms other model-based and model-free policies on several challenging manipulation tasks in simulation.

**Tech stack:** Python 3.11, PyTorch, Git, Linux or WSL environment

**Data:** Simulated manipulation task environments and datasets provided or generated by the authors' LocalDynamicsModel repository.

**Build it:**

1. Clone the LocalDynamicsModel repository from https://github.com/ColinKohler/LocalDynamicsModel.
2. Set up the environment and dependencies as per the repository instructions.
3. Run training and evaluation scripts on a selected manipulation task (e.g., block stacking or bottle arrangement).
4. Implement a naive UNet baseline model without local crop restriction and train it on the same task.
5. Compare pixel-wise prediction errors and action success rates between LDM and the baseline.
6. Document the results and insights in the README.

**Verified links from the paper:**

- <https://github.com/ColinKohler/LocalDynamicsModel> — released by the paper's authors

**Ships as:** A GitHub repository forked from the authors' code with added baseline implementation, comparative evaluation results, and clear documentation showing understanding of LDM's advantages.

**Stretch goal:** Experiment with varying local crop sizes and report their effect on performance in cluttered environments.

### Advanced — Multi-Step Lookahead Planning with Local Dynamics Model
*Effort: a few weeks*

You extend the LDM framework by implementing a multi-step lookahead planner that uses the learned local dynamics model and state value function to plan sequences of pick-and-place actions. This addresses the paper's limitation of single-step planning and aims to improve policy performance on complex tasks like bin packing.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions by advancing the planning methodology, integrating multi-step reasoning with LDM, and empirically evaluating improvements in task success rates.

**Grounded in:** Develop multi-step lookahead planners to leverage LDM for longer horizon planning and improved policy performance.

**Tech stack:** Python 3.11, PyTorch, Git, NumPy, Linux or WSL environment

**Data:** Simulated manipulation environments and datasets from the authors' LocalDynamicsModel repository, focusing on complex tasks like bin packing.

**Build it:**

1. Study the existing single-step lookahead planner implementation in the LocalDynamicsModel codebase.
2. Design and implement a multi-step lookahead planner that simulates sequences of actions using LDM predictions and evaluates cumulative expected rewards via the state value function.
3. Integrate the multi-step planner with the existing policy learning framework.
4. Train and evaluate the extended system on a complex manipulation task such as bin packing.
5. Compare policy success rates and sample efficiency against the original single-step planner baseline.
6. Document the implementation details, experimental setup, and results.

**Verified links from the paper:**

- <https://github.com/ColinKohler/LocalDynamicsModel> — released by the paper's authors

**Ships as:** A GitHub repository extending the authors' code with multi-step lookahead planning, experimental results showing improved policy performance, and a detailed README explaining the approach and findings.

**Stretch goal:** Incorporate uncertainty estimation from LDM's probabilistic outputs into the multi-step planner to improve robustness.
