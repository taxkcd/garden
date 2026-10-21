---
title: "916 · Good Weights: Proactive, Adaptive Dead Reckoning Fusion for Continuous and Robust Visual SLAM — Patricio A. Vela"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-patricio-a-vela"
source_hash: "96b162944c80386d9133053708b5aa3bef0c9845d3f21b5c81ee49f8972b2a52"
sequence: 916
generator: "outreach-garden: managed"
---

# 916 · Good Weights: Proactive, Adaptive Dead Reckoning Fusion for Continuous and Robust Visual SLAM

## At a glance

- **Professor:** Patricio A. Vela
- **Institution:** Georgia Institute of Technology
- **Paper:** [Good Weights: Proactive, Adaptive Dead Reckoning Fusion for Continuous and Robust Visual SLAM](https://arxiv.org/pdf/2509.22910)
- **Authors:** Yanwei Du, Jing-Chen Peng, Patricio A. Vela
- **Year:** 2026

## Paper overview

This paper presents Good Weights, a visual SLAM system that adaptively integrates dead reckoning data (from sensors like IMU and wheel encoders) with visual information to improve robot localization and mapping, especially in challenging environments with poor visual features. The system adjusts the influence of dead reckoning based on the quality of visual tracking, maintaining continuous and accurate pose estimation without over-relying on inertial data. Experiments show improved robustness and accuracy over existing methods in indoor and real-robot navigation scenarios.

### Why it matters

**Research problem:** Visual SLAM systems struggle in low-texture or visually degraded environments where feature tracking fails, causing pose estimation to diverge or lose track. Dead reckoning sensors provide continuous but drifting motion estimates. Existing fusion methods use fixed weights, leading to sensitivity and drift accumulation. There is a need for an adaptive fusion approach that maintains robust and accurate localization by balancing visual and dead reckoning data dynamically.

**Why it matters:** Robust and accurate localization is critical for autonomous robot navigation, especially in environments where visual cues are unreliable. Improving SLAM robustness enhances robot autonomy, safety, and operational reliability in real-world applications such as inspection, surveying, and navigation in complex indoor spaces.

**Key contributions:**

- A proactive, adaptive weighting scheme that modulates dead reckoning influence using visual tracking quality indicators.
- A comprehensive integration strategy of dead reckoning priors into tracking, local mapping, and loop closing modules of visual SLAM.
- Demonstration of improved robustness and accuracy in low-texture and visually degraded environments without sacrificing performance under normal conditions.
- Empirical determination of dead reckoning weighting bounds to ensure stable fusion without overfitting.
- Validation on public indoor datasets and real robot navigation sequences showing superior completeness and accuracy compared to state-of-the-art methods.

## About the professor

**Patricio A. Vela** — Associate Professor, School of Electrical and Computer Engineering, Georgia Institute of Technology.

Research interests: algorithms and algorithmic formulations for perception and control with application to robot autonomy, closed-loop aspects related to robot autonomy, perception-in-the-loop algorithms, and machine learning for control of robotic systems

### Research links

- [Faculty/profile page](https://pvela.gatech.edu)
- [Lab website](https://ivalab.gatech.edu/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=qL6ycTgAAAAJ&view_op=list_works)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Visual SLAM and Sensor Fusion
**The paper assumes:** visual simultaneous localization and mapping, sensor fusion techniques, pose estimation, bundle adjustment
**Already in this field?** Skip this entirely if you already understand visual SLAM pipelines and sensor fusion methods for robot localization.

This background focuses on visual SLAM and sensor fusion, essential for understanding the adaptive weighting of dead reckoning data integrated with visual SLAM modules in the Good Weights paper. The rigorous course provides a deep, structured foundation in sensing principles for autonomy, including inertial navigation and visual sensors, while the fast track offers concise, targeted explainers on visual inertial odometry and SLAM concepts for a quicker yet effective grasp. Choose the course for comprehensive mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE259: Principles of Sensing for Autonomy I Spring 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rOhE007XQu707Dy52qXiZGV) — Stanford Online · 21 videos · 28.7h across 21 episodes

**Watch only this:** Lectures 5 to 7 and 19 to 20, about 6.5 hours — covering inertial sensors, inertial navigation, dead reckoning, camera principles, and image sensors to understand the core sensing modalities and their integration in visual SLAM.

*Why it unblocks this paper:* Stanford EE259 covers fundamental sensing principles including inertial navigation, dead reckoning, and camera operation, directly underpinning the sensor fusion and adaptive weighting techniques in the paper.

*If you want all of it:* 28.7 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Visual Inertial Odometry & SLAM](https://www.youtube.com/playlist?list=PLxXaypZSkh7K32tkvMIpFeG0MX53fNhq6) — UZH Robotics and Perception Group · 40 videos · 2.1h across the first 39 episodes

**Watch only this:** First 10 episodes, about 30 minutes — covering continuous vs discrete visual SLAM, visual-inertial odometry basics, IMU preintegration, and related sensor fusion concepts essential for understanding adaptive weighting.

*Why it unblocks this paper:* UZH Robotics and Perception Group's Visual Inertial Odometry & SLAM playlist provides concise, research-aligned explainers on visual-inertial sensor fusion and SLAM components, matching the paper's focus on adaptive fusion of visual and dead reckoning data.

*If you want all of it:* About 2.1 hours across the first 39 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Good Weights visual SLAM paper, start with foundational knowledge on dead reckoning and odometry in robotics to grasp the nature and limitations of inertial and wheel encoder data. Next, study pose graph optimization and bundle adjustment techniques, which are key optimization methods used in the SLAM pipeline. Then, build a solid understanding of visual SLAM fundamentals to appreciate the overall pipeline and challenges addressed. Finally, focus on the core concept of adaptive sensor fusion in visual SLAM, culminating with the authors' own talks or closely related advanced lectures on adaptive weighting and sensor fusion strategies.

### Dead reckoning and odometry in robotics *(prerequisite)*
This section covers the principles and challenges of dead reckoning and odometry, including sensor calibration, drift, and fusion with inertial data. Understanding these fundamentals is essential to appreciate the sensor data that the Good Weights framework adaptively fuses with visual information.

*How the paper uses it:* The paper relies on wheel odometry and inertial data as dead reckoning inputs to improve visual SLAM robustness.

▶ [Lecture 07 | Robot Odometry and IMU Localization: Measure, Calibrate, Fuse](https://www.youtube.com/watch?v=T5rLcdsKRlw) — Adaptive AgroTech · 4d ago

### Pose graph optimization and bundle adjustment *(prerequisite)*
Pose graph optimization and bundle adjustment are core optimization techniques in SLAM systems for refining pose estimates and map consistency. This section provides insight into how these methods work and their role in maintaining well-conditioned optimization problems, which the paper leverages in its integration strategy.

*How the paper uses it:* Good Weights integrates dead reckoning priors into local mapping and global bundle adjustment modules to maintain stable pose estimation.

▶ [Understanding SLAM Using Pose Graph Optimization | Autonomous Navigation, Part 3](https://www.youtube.com/watch?v=saVZtgPyyJQ) — MATLAB · 16:22 · 6y ago

### Visual SLAM fundamentals *(prerequisite)*
A thorough understanding of visual SLAM pipelines, including feature detection, tracking, and mapping, is necessary to grasp the challenges addressed by the Good Weights system. This section covers the basics and advanced concepts of visual SLAM to provide a strong foundation.

*How the paper uses it:* The paper builds upon visual SLAM pipelines and improves robustness by adaptively fusing dead reckoning data based on visual tracking quality.

▶ [L16 Introduction to Visual SLAM](https://www.youtube.com/watch?v=6jYEoY51tnM) — Gonzalo Ferrer · 1:20:20

### Adaptive sensor fusion in visual SLAM
This section focuses on the adaptive fusion of sensor data, particularly how dead reckoning and visual information can be weighted dynamically to improve SLAM performance. It provides context on sensor fusion strategies relevant to the Good Weights approach.

*How the paper uses it:* Adaptive weighting of dead reckoning influence based on visual tracking quality is the central innovation of the Good Weights framework.

▶ [SPRING 2023 GRASP On Robotics: Frank Dellaert, Georgia Tech](https://www.youtube.com/watch?v=6o8ATX3HQQE) — GRASP Lab · 1:10:25

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the Good Weights visual SLAM paper, starting with the basics of dead reckoning and odometry in robotics, then covering visual SLAM fundamentals and key optimization techniques like pose graph optimization and bundle adjustment. After building this foundation, it progresses to adaptive sensor fusion in visual SLAM, which is central to the paper's contribution, and concludes with a focused explanation of dead reckoning in navigation to solidify understanding of the inertial data integration. The sequence ensures a clear, intuitive grasp of the core ideas before diving into the paper's specific innovations.

### Dead reckoning and odometry in robotics *(prerequisite)*
Dead reckoning is a method for estimating a robot's position by using data from sensors like wheel encoders and IMUs to track movement over time. Understanding its strengths and limitations, such as drift accumulation, is essential for grasping why fusion with visual data is needed.

*How the paper uses it:* The paper fuses dead reckoning data with visual SLAM to maintain continuous pose estimation, especially when visual tracking degrades.

▶ [Robotics - What is Dead Reckoning?](https://www.youtube.com/watch?v=r5Mnxb6LnhI) — Hummingbird · 4y ago

### Visual SLAM fundamentals *(paper-talk search result; attribution unverified)*
Visual SLAM enables a robot to simultaneously build a map of an environment and localize itself within it using camera data. Learning the basic SLAM pipeline and challenges like feature tracking and pose estimation lays the groundwork for understanding how the paper improves robustness.

*How the paper uses it:* Good Weights builds on visual SLAM by adaptively integrating dead reckoning priors to improve localization in challenging visual conditions.

▶ [What is Visual SLAM?](https://www.youtube.com/watch?v=3DaLwxaSz8I) — Standarity · 2w ago

### Pose graph optimization and bundle adjustment *(prerequisite)*
Pose graph optimization and bundle adjustment are optimization techniques used in SLAM to refine the robot's trajectory and map by minimizing errors in pose and feature reprojections. Understanding these helps explain how the paper maintains well-conditioned optimization with adaptive weighting.

*How the paper uses it:* The paper integrates dead reckoning priors into pose estimation and bundle adjustment modules to stabilize and improve accuracy.

▶ [Bundle Adjustment - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=lmj2Jk5tl60) — Cyrill Stachniss · 6y ago

### Adaptive sensor fusion in visual SLAM
Adaptive sensor fusion dynamically balances the influence of different sensors based on their reliability, improving robustness. This concept is key to the paper's approach of weighting dead reckoning data according to visual tracking quality.

*How the paper uses it:* Good Weights proposes a proactive, adaptive weighting scheme that modulates dead reckoning influence based on visual tracking quality indicators.

▶ [ROS 2 Sensor Fusion: Wheel Odometry + IMU with robot_localization | Lecture 26](https://www.youtube.com/watch?v=3qqYZmcB5bM) — Adaptive AgroTech · 7:05 · 2d ago

### Good Weights visual SLAM talk *(paper-talk search result; attribution unverified)*
Dead reckoning in navigation explains the core principle of estimating position from motion data, which is foundational to understanding how Good Weights integrates this with visual SLAM for improved localization.

*How the paper uses it:* The paper leverages dead reckoning principles to provide continuous pose priors that are adaptively weighted within the SLAM pipeline.

▶ [Navigation - Dead Reckoning (White Board Part 1)](https://www.youtube.com/watch?v=8_uBYkIiLfs) — Northeast Maritime Institute · 11y ago

## Already in your library

- [Understanding Sensor Fusion and Tracking, Part 1: What Is ...](https://www.youtube.com/watch?v=6qV3YjFppuc) — also for: D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models (A. Lynn Abbott)
- [Computer Vision - Lecture 3.4 (Structure-from-Motion: Bundle Adjustment)](https://www.youtube.com/watch?v=MyrVDUnaqUs) — also for: InstantSfM: Towards GPU-Native SfM for the Deep Learning Era (Ulrich Neumann)
- [The Basics about Bundle Adjustment (Cyrill Stachniss)](https://www.youtube.com/watch?v=sobyKHwgB0Y) — also for: InstantSfM: Towards GPU-Native SfM for the Deep Learning Era (Ulrich Neumann)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Good Weights visual SLAM system. The beginner project focuses on reproducing the core adaptive weighting mechanism in a simplified simulation, the intermediate project implements the full adaptive fusion method on a public indoor SLAM dataset and compares it to a baseline, and the advanced project extends the method to address a stated limitation by incorporating learning-based uncertainty models for visual features.

### Beginner — Simulate Adaptive Dead Reckoning Weighting in Visual SLAM
*Effort: a weekend, ~8 hours*

You build a simplified simulation that models visual tracking quality and adaptively adjusts the weighting of dead reckoning data in pose estimation. The simulation will generate synthetic visual tracking quality scores and dead reckoning drift, then apply an adaptive weighting scheme to fuse these inputs for pose updates.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core adaptive weighting mechanism proposed in the paper, showing you understand how visual tracking quality can modulate dead reckoning influence to maintain pose estimation robustness.

**Grounded in:** A proactive, adaptive weighting scheme that modulates dead reckoning influence using visual tracking quality indicators.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data simulating visual tracking quality scores and dead reckoning pose drift generated within the notebook.

**Build it:**

1. Implement a simple model that simulates visual tracking quality scores over time.
2. Simulate dead reckoning pose estimates with drift accumulation.
3. Implement an adaptive weighting function that increases dead reckoning influence when visual quality is low and decreases it when visual quality is high.
4. Fuse visual and dead reckoning pose estimates using the adaptive weights to produce a combined pose estimate.
5. Plot and analyze the fused pose accuracy compared to visual-only and dead reckoning-only estimates.

**Ships as:** A Jupyter notebook demonstrating the adaptive weighting mechanism with plots showing pose estimation accuracy under varying visual tracking quality.

**Stretch goal:** Add noise models to simulate sensor measurement uncertainty and visualize their effect on adaptive weighting.

### Intermediate — Implement Good Weights Adaptive Fusion on Public Indoor SLAM Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core Good Weights adaptive fusion method by integrating dead reckoning priors with visual SLAM pose estimation on a public indoor SLAM dataset (e.g., TUM RGB-D). You compute a visual tracking quality score from feature tracking statistics and adaptively weight dead reckoning influence during pose estimation. You compare the adaptive fusion against a fixed-weight baseline and report pose RMSE and trajectory completeness.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main adaptive fusion approach and evaluate its benefits on real data, demonstrating comprehension of the integration strategy and performance metrics used in the paper.

**Grounded in:** Demonstration of improved robustness and accuracy in low-texture and visually degraded environments without sacrificing performance under normal conditions.

**Tech stack:** Python 3.11, OpenCV, NumPy, SciPy, Matplotlib, TUM RGB-D dataset

**Data:** TUM RGB-D dataset (publicly available indoor visual SLAM dataset) used as a substitute for the paper's indoor datasets.

**Build it:**

1. Download and preprocess the TUM RGB-D dataset sequences with available visual and odometry data.
2. Implement feature detection and tracking to compute a visual tracking quality score based on feature count and tracking success.
3. Implement dead reckoning pose estimation from odometry data with drift simulation if needed.
4. Fuse visual SLAM pose estimates with dead reckoning priors using an adaptive weighting scheme based on the tracking quality score.
5. Compare the adaptive fusion results against a fixed-weight fusion baseline by computing frame-level RMSE and trajectory completeness.
6. Visualize trajectories and error plots to illustrate improvements.

**Ships as:** A Python project with scripts and a report showing adaptive fusion implementation, evaluation metrics, and comparison plots against baseline fusion.

**Stretch goal:** Extend the fusion to include local bundle adjustment with adaptive weighting and evaluate its effect on map consistency.

### Advanced — Extend Good Weights with Learning-Based Visual Feature Uncertainty Modeling
*Effort: 3+ weeks*

You develop an extension of the Good Weights framework that incorporates a learning-based model to estimate uncertainty in visual features, replacing or augmenting the heuristic visual tracking quality score. This model outputs uncertainty estimates that adaptively weight dead reckoning influence in the fusion process. You evaluate this approach on indoor SLAM sequences and analyze improvements in robustness and accuracy.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper by integrating learned uncertainty models into the adaptive weighting scheme, demonstrating deep understanding of the fusion mechanism and ability to innovate beyond the original method.

**Grounded in:** Developing online parameter adaptation or learning-based weighting schemes to generalize across diverse environments.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, SciPy, Matplotlib, TUM RGB-D dataset

**Data:** TUM RGB-D dataset for training and evaluation; synthetic augmentation may be used to simulate degraded visual conditions.

**Build it:**

1. Implement or adapt a neural network model to predict visual feature uncertainty from image patches or feature descriptors.
2. Train the model on labeled data representing varying visual tracking quality or synthetic degradations.
3. Integrate the learned uncertainty estimates into the Good Weights adaptive fusion pipeline to modulate dead reckoning weighting.
4. Evaluate the extended system on indoor SLAM sequences, comparing pose accuracy and robustness against the original heuristic weighting scheme.
5. Analyze results and visualize improvements in trajectory completeness and RMSE under challenging visual conditions.

**Ships as:** A research-style codebase and report demonstrating the learning-based uncertainty model, integration with adaptive fusion, and evaluation results with visualizations.

**Stretch goal:** Incorporate semantic or planar features alongside point features to further improve robustness.
