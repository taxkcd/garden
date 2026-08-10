---
title: "036 · Present and Future of SLAM in Extreme Environments: The DARPA SubT Challenge — Christoffer Heckman"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-ristoffer-ch"
source_hash: "3ba2a57ac74f348d0abc9df918aa148357d157beee0b6e1f34bbb02c01d3d08e"
sequence: 36
generator: "outreach-garden: managed"
---

# 036 · Present and Future of SLAM in Extreme Environments: The DARPA SubT Challenge

## At a glance

- **Professor:** Christoffer Heckman
- **Institution:** University of Colorado Boulder
- **Paper:** [Present and Future of SLAM in Extreme Environments: The DARPA SubT Challenge](https://doi.org/10.1109/tro.2023.3323938)
- **Authors:** Kamak Ebadi, Lukas Bernreiter, Harel Biggie, Gavin Catt, Yun Chang, Arghya Chatterjee, Christopher E. Denniston, Simon-Pierre Deschênes, Kyle Harlow, Shehryar Khattak, Lucas Nogueira, Matteo Palieri, Pavel Petráček, Matěj Petrlík, Andrzej Reinke, Vít Krátký, Shibo Zhao, Ali-akbar Agha-mohammadi, Kostas Alexis, Christoffer Heckman, Kasra Khosoussi, Navinda Kottege, Benjamin Morrell, Marco Hutter, Fred Pauling, François Pomerleau, Martin Saska, Sebastian Scherer, Roland Siegwart, Jason L. Williams, Luca Carlone
- **Year:** 2022

## Paper overview

This paper surveys the state of the art and future directions of Simultaneous Localization and Mapping (SLAM) in challenging underground environments, motivated by the DARPA Subterranean Challenge. It reviews SLAM algorithms and systems from six teams that competed in the challenge, focusing on LIDAR-centric approaches, multi-robot collaboration, and real-world underground operation challenges such as poor lighting and communication constraints. The paper discusses technical challenges, system architectures, and open problems, and provides resources like open-source implementations and datasets.

### Why it matters

**Research problem:** Developing robust and efficient SLAM systems for autonomous exploration and mapping in extreme underground environments where GPS is unavailable, lighting is poor, and communication is limited.

**Why it matters:** Underground SLAM enables critical applications such as search and rescue, disaster response, automated mining, and planetary exploration. Reliable mapping and navigation in GPS-denied subterranean environments are essential for robot autonomy in these high-stakes scenarios.

**Key contributions:**

- Comprehensive survey of underground SLAM systems developed for the DARPA SubT Challenge.
- Detailed analysis of SLAM front-end and back-end architectures, including sensor fusion and optimization techniques.
- Discussion of multi-robot SLAM architectures and communication strategies in subterranean environments.
- Identification of technical challenges such as sensor degradation, computational constraints, and communication limitations.
- Provision of open-source SLAM implementations and datasets from the SubT Challenge to support further research.

## About the professor

**Christoffer Heckman** — Associate Professor, Department of Computer Science, University of Colorado Boulder.

Research interests: robotics, computer vision, and machine learning

### Research links

- [Faculty/profile page](http://www.ristoffer.ch)
- [Resolved homepage](https://ristoffer.ch)
- [Google Scholar](https://scholar.google.com/citations?user=lysFu30AAAAJ)
- [GitHub](https://github.com/arpg)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and core knowledge necessary to understand the advanced SLAM techniques surveyed in the paper on underground SLAM systems. It covers linear algebra and probability theory essential for sensor fusion and uncertainty modeling, robotics kinematics for understanding robot motion and coordinate transformations, probabilistic state estimation for filtering noisy sensor data, sensor modalities focusing on LIDAR and sensor data processing, graph-based SLAM optimization techniques for back-end mapping, and multi-robot systems and communication protocols critical for collaborative SLAM in constrained environments. Follow the selected parts of each resource in order to build a solid base before engaging with the paper.

**The paper assumes:** linear algebra, probability theory, optimization, robotics kinematics and dynamics, sensor modalities (especially LIDAR), graph-based SLAM frameworks, multi-robot systems and communication protocols
**Time to work through:** roughly 60-70 hours if you watch everything, about 35-40 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you have a solid background in robotics fundamentals, linear algebra, and probabilistic state estimation; focus on stages 4-6 for SLAM-specific and multi-robot system knowledge.

### Stage 1 · Linear Algebra and Probability Theory *(foundational)*
Understanding SLAM algorithms requires knowledge of vector spaces, matrices, eigenvalues, and probabilistic reasoning to model sensor noise and uncertainty, which underpin sensor fusion and state estimation.

▶ **Course:** [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

*What to watch:* Watch the first 24 episodes of the "MIT 18.06 Linear Algebra, Spring 2005" playlist by MIT OpenCourseWare, covering geometry of linear equations, matrix operations, subspaces, projections, and eigenvalues. These topics provide the mathematical foundation for covariance matrices and coordinate transformations used in SLAM.

*Move on when you can:* Explain how covariance matrices represent uncertainty and perform matrix multiplication to transform coordinate frames.

### Stage 2 · Robotics Kinematics and Dynamics *(foundational)*
SLAM depends on modeling robot motion and sensor poses; grasping forward and inverse kinematics, coordinate transformations, and motion models is essential to interpret sensor data and predict robot states.

▶ **Course:** [Robotics 101](https://www.youtube.com/playlist?list=PL1YrgW7ROFofBqPGiWAmTqIwDc5SrzZrA) — Engineering Simplified · 17 videos · 2.7h across 17 episodes

*What to watch:* Focus on the first 24 episodes of the "Robotics 101" playlist by Engineering Simplified, which cover robot kinematics, coordinate transformations, forward and inverse kinematics, and homogeneous transformations. These provide practical understanding of robot pose estimation critical for SLAM front-end processing.

*Move on when you can:* Derive the forward kinematics of a mobile robot and explain coordinate frame transformations between robot and world frames.

### Stage 3 · Probabilistic State Estimation and Filtering *(core)*
SLAM algorithms fuse noisy sensor data over time using Bayesian filters like the Kalman filter and particle filter; understanding these is critical to grasping front-end sensor fusion and back-end optimization.

▶ **Course:** [ECE497: Advanced Mobile Robotics](https://www.youtube.com/playlist?list=PLBK7yyieyrAYyvfgPyqoPAaG9JRDTfm78) — Rose-Hulman Online · 27 videos · 4.5h across 27 episodes

*What to watch:* Watch the full "ECE497: Advanced Mobile Robotics" playlist by Rose-Hulman Online, especially lectures on probabilistic robotics, Bayes filters, Kalman filters, motion and sensor models. These lectures explain the mathematical and algorithmic basis of state estimation used in SLAM.

*Move on when you can:* Derive the Kalman filter update equations and implement a simple localization filter using noisy sensor inputs.

### Stage 4 · Sensor Modalities and Data Processing in Robotics *(core)*
The paper emphasizes LIDAR-centric SLAM and multi-modal sensor fusion; understanding how LIDAR, IMU, and cameras work and how their data is processed is necessary to follow system architectures and sensor degradation challenges.

▶ [Getting Started with LIDAR](https://www.youtube.com/watch?v=VhbFbxyOI1k) — DroneBot Workshop · 47:27 · 8 years ago

*What to watch:* Watch the "Getting Started with LIDAR" video by DroneBot Workshop to understand how 3D LIDAR sensors generate point clouds and common preprocessing steps. This concise video provides practical insight into LIDAR data acquisition and processing relevant to the paper's focus.

*Move on when you can:* Explain how a 3D LIDAR sensor generates point clouds and describe common preprocessing steps like filtering and feature extraction.

### Stage 5 · Graph-Based SLAM and Optimization Techniques *(advanced)*
The paper discusses factor graph optimization and back-end SLAM architectures; knowledge of pose graph SLAM, loop closure detection, and nonlinear optimization methods is essential to understand system design and limitations.

▶ **Course:** [SLAM Course (2012)](https://www.youtube.com/playlist?list=PLgnQpQtFTOGQECnBvZSV61oxTrkPut-nc) — Cyrill Stachniss · 24 videos · 21.1h across 24 episodes

*What to watch:* Watch the full "SLAM Course (2012)" playlist by Cyrill Stachniss, focusing on lectures about pose graph SLAM, least squares optimization, and hierarchical pose graphs. This course covers the mathematical formulation and optimization techniques central to the paper's back-end SLAM discussion.

*Move on when you can:* Formulate a pose graph SLAM problem and perform nonlinear least squares optimization to minimize pose errors.

### Stage 6 · Multi-Robot Systems and Communication Protocols *(advanced)*
The paper surveys multi-robot SLAM architectures (centralized, decentralized, distributed) and communication constraints in subterranean environments; understanding multi-agent coordination, network topologies, and data sharing protocols is critical.

▶ **Course:** [Mobile Robot Systems Course - Amanda Prorok, University of Cambridge](https://www.youtube.com/playlist?list=PLaTKfS3-bDpDyOwrxLcQRGxY9XJw33ANo) — Prorok Lab · 10 videos · 11.6h across 10 episodes

*What to watch:* Watch the "Mobile Robot Systems Course - Amanda Prorok, University of Cambridge" playlist, focusing on lectures 7, 8, and 9 which cover multi-robot systems, multi-robot assignment methods, and multi-robot path planning. These provide foundational understanding of multi-robot coordination and communication relevant to the paper.

*Move on when you can:* Compare centralized and decentralized multi-robot SLAM architectures and explain how mesh networks support communication in constrained environments.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on SLAM in extreme subterranean environments, start by building foundational knowledge on LIDAR-based mapping and perception, as it is the key sensor modality emphasized. Then, study multi-robot SLAM architectures and factor graph optimization, which are critical for collaborative mapping and back-end optimization in the surveyed systems. Next, explore communication constraints in subterranean robotics to grasp the challenges in multi-robot coordination underground. Finally, focus on the core concept of SLAM itself, culminating with the authors' own talks on the DARPA Subterranean Challenge to gain direct insights into the surveyed systems and their real-world applications.

### LIDAR-based mapping and perception *(prerequisite)*
LIDAR is the primary sensing modality used in the underground SLAM systems surveyed in the paper. Understanding how LIDAR works and its role in 3D mapping and perception is essential to appreciate the front-end sensor fusion and robustness strategies discussed.

*How the paper uses it:* The paper emphasizes LIDAR-centric SLAM as the dominant approach for subterranean mapping.

▶ [Stanford Seminar-Solid State LiDar for Autonomous Vehicles,Security, Industrial Automation, 3D Maps](https://www.youtube.com/watch?v=uPqzo29Q9Wc) — Stanford Online · 1:07:37 · 10 years ago

### Multi-robot SLAM architectures *(prerequisite)*
Multi-robot SLAM architectures—centralized, decentralized, and distributed—are fundamental to the collaborative mapping approaches analyzed in the paper. Understanding these architectures helps in grasping the trade-offs in communication and computation faced by the teams.

*How the paper uses it:* The paper surveys multi-robot SLAM architectures and communication strategies used in the DARPA SubT Challenge.

▶ [ISTSC-1: Distributed Consistent Multi-Robot Semantic Localization and Mapping](https://www.youtube.com/watch?v=hwKRLAirQXg) — The Israeli Smart Transportation Research Center · 4 years ago

### Factor graph optimization in SLAM *(prerequisite)*
Factor graph optimization is a core back-end technique for SLAM systems, enabling robust pose graph optimization and sensor fusion. Familiarity with this method is crucial to understand the optimization frameworks employed by the teams.

*How the paper uses it:* The paper discusses factor graph optimization as a key back-end component in the surveyed SLAM systems.

▶ [Understanding SLAM Using Pose Graph Optimization | Autonomous Navigation, Part 3](https://www.youtube.com/watch?v=saVZtgPyyJQ) — MATLAB · 6 years ago

### Communication constraints in subterranean robotics *(prerequisite)*
Communication limitations in underground environments critically impact multi-robot SLAM system design and performance. Understanding these constraints and the networking strategies used is vital to appreciate the practical challenges and solutions presented.

*How the paper uses it:* The paper highlights communication constraints as a major challenge and discusses mesh networks and data prioritization strategies.

▶ [4 - Yasamin Mostofi: Robotics and Communications Opportunities and Challenges](https://www.youtube.com/watch?v=Du6lQ6XEpf8) — Southern California Robotics Symposium 2017 · 19:48 · 9 years ago

### Simultaneous Localization and Mapping
SLAM is the core concept underlying the entire paper. A rigorous, university-level lecture on SLAM provides the theoretical and algorithmic foundation necessary to understand the surveyed systems and their components.

*How the paper uses it:* The paper surveys SLAM strategies and system architectures for underground environments.

▶ [Lecture 11: Simultaneous Localization and Mapping (SLAM)](https://www.youtube.com/watch?v=GlNbLpYdADw) — dLabRoboticsMIT · 1:26:57 · 5 years ago

### Paper-specific author talk *(the paper's own talk)*
The authors' own talks on the DARPA Subterranean Challenge provide direct insights into the motivation, challenges, and system designs of the SLAM solutions surveyed. These talks offer the most precise and authoritative perspective on the paper's content.

*How the paper uses it:* These talks are by the paper's authors or closely related teams presenting their DARPA SubT Challenge work.

▶ [DARPA SubT Challenge - 3D SLAM flythrough](https://www.youtube.com/watch?v=EFmZN5fyx3c) — CSIRORobotics · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand SLAM in extreme underground environments, as studied in the DARPA Subterranean Challenge. We start with the basics of LIDAR sensing, essential for mapping underground spaces, then cover multi-robot SLAM architectures to grasp collaborative mapping challenges. Next, we explore factor graph optimization, the core back-end technique for SLAM, followed by communication constraints critical for subterranean multi-robot systems. Finally, we conclude with a concise, intuitive SLAM overview to tie all concepts together in the context of the paper.

### LIDAR-based mapping and perception *(prerequisite)*
LIDAR sensors use laser pulses to measure distances to surrounding objects, creating detailed 3D maps of environments. Understanding how LIDAR works and its strengths in poor lighting and GPS-denied settings is key to appreciating why the paper emphasizes LIDAR-centric SLAM for underground mapping.

*How the paper uses it:* The paper highlights LIDAR as the dominant sensor modality for robust underground SLAM.

▶ [What is Lidar?  How does Lidar work? Know all about LiDAR](https://www.youtube.com/watch?v=H2-Yp30TGk4) — Geospatial World · 4:10 · 8 years ago

### Multi-robot SLAM architectures *(prerequisite)*
Multi-robot SLAM involves multiple robots working together to map and localize in an environment, using architectures like centralized, decentralized, or distributed systems. Understanding these architectures helps grasp how teams in the paper coordinate mapping under communication constraints.

*How the paper uses it:* The paper surveys various multi-robot SLAM architectures used by teams in the DARPA SubT Challenge.

▶ [ISTSC-1: Distributed Consistent Multi-Robot Semantic Localization and Mapping](https://www.youtube.com/watch?v=hwKRLAirQXg) — The Israeli Smart Transportation Research Center · 4 years ago

### Factor graph optimization in SLAM *(prerequisite)*
Factor graph optimization is a mathematical framework used in SLAM back-ends to fuse sensor data and optimize robot poses and map features. Learning this concept provides insight into how SLAM systems achieve accurate mapping despite sensor noise and drift.

*How the paper uses it:* The paper analyzes factor graph optimization as a core back-end technique in underground SLAM systems.

▶ [Factor Graph - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=uuiaqGLFYa4) — Cyrill Stachniss · 5:27 · 5 years ago

### Communication constraints in subterranean robotics *(prerequisite)*
Communication in underground environments is challenging due to signal attenuation and obstacles, requiring specialized mesh networks and data prioritization. Understanding these constraints is vital to appreciate the design choices in multi-robot SLAM systems discussed in the paper.

*How the paper uses it:* The paper discusses communication challenges and solutions for multi-robot SLAM in subterranean settings.

▶ [Communication Constrained Multi-Robot Coordination](https://www.youtube.com/watch?v=FUBkTkpkqSc) — umrobotics · 33:30 · 6 years ago

### Simultaneous Localization and Mapping
SLAM is the process by which a robot simultaneously builds a map of an unknown environment and localizes itself within that map. This concise explainer builds intuition on the fundamental SLAM problem, tying together sensing, mapping, and localization.

*How the paper uses it:* SLAM is the central method underlying all systems surveyed in the paper.

▶ [SLAM - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=BuRCJ2fegcc) — Cyrill Stachniss · 6 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth centered on the paper's focus on LIDAR-centric SLAM and multi-robot subterranean mapping challenges from the DARPA SubT Challenge. The beginner project recreates a core SLAM front-end component using existing open-source LIDAR SLAM code to demonstrate understanding of scan matching. The intermediate project implements a simplified multi-robot SLAM system using factor graph optimization and communication constraints inspired by the surveyed architectures. The advanced project tackles a key limitation from the paper by developing an adaptive parameter tuning mechanism for SLAM to improve robustness in diverse underground environments, addressing a future direction the authors highlight.

### Beginner — LIDAR Scan Matching with A-LOAM
*Effort: a weekend, ~8 hours*

You build a minimal LIDAR scan matching pipeline using the open-source A-LOAM implementation to process a sample LIDAR dataset and visualize the resulting odometry trajectory. This reproduces the core front-end LIDAR-centric SLAM step emphasized in the paper.

**Why it shows you understood the paper:** By successfully running and explaining A-LOAM's scan matching, you demonstrate comprehension of the dominant LIDAR-centric SLAM approach and its role in underground mapping as surveyed in the paper.

**Grounded in:** Key result: 'LIDAR-centric SLAM solutions are the dominant and effective approach for underground mapping.'

**Tech stack:** Python 3.11, ROS Noetic (optional), C++ (for A-LOAM), PCL (Point Cloud Library), RViz or matplotlib for visualization

**Data:** Use publicly available LIDAR datasets compatible with A-LOAM (e.g., KITTI dataset as a substitute for subterranean LIDAR data).

**Build it:**

1. Clone the A-LOAM repository from https://github.com/HKUST-Aerial-Robotics/A-LOAM.
2. Install dependencies including ROS, PCL, and build A-LOAM.
3. Download a sample LIDAR dataset (e.g., KITTI raw data) and convert it to the required format if needed.
4. Run A-LOAM to perform scan matching and generate odometry trajectories.
5. Visualize the trajectory and point cloud alignment using RViz or matplotlib.
6. Write a README explaining how the scan matching front-end works and its importance in subterranean SLAM.

**Verified links from the paper:**

- <https://github.com/HKUST-Aerial-Robotics/A-LOAM> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with instructions to run A-LOAM on sample data, visualization outputs, and a README explaining LIDAR scan matching's role in underground SLAM.

**Stretch goal:** Add simple noise or environmental degradation simulation (e.g., fog or dust) to the input scans and observe effects on scan matching quality.

### Intermediate — Multi-Robot SLAM with Factor Graph Optimization
*Effort: 1-3 weekends, ~20 hours*

You implement a simplified multi-robot SLAM system that fuses individual robot LIDAR odometry into a centralized factor graph optimizer. You simulate communication constraints by limiting data exchange frequency and evaluate the impact on map consistency.

**Why it shows you understood the paper:** This project reproduces the paper's core analysis of multi-robot SLAM architectures and communication challenges, demonstrating grasp of back-end optimization and multi-robot data fusion under subterranean constraints.

**Grounded in:** Key contribution: 'Detailed analysis of SLAM front-end and back-end architectures, including sensor fusion and optimization techniques.' and 'Multi-robot SLAM architectures can be centralized, decentralized, or distributed.'

**Tech stack:** Python 3.11, GTSAM (Georgia Tech Smoothing and Mapping library), NumPy, matplotlib

**Data:** Simulated LIDAR odometry trajectories generated by running A-LOAM or synthetic trajectories representing multiple robots exploring an underground environment.

**Build it:**

1. Generate or obtain multiple robot odometry trajectories from LIDAR scan matching (can reuse beginner project outputs).
2. Set up a factor graph using GTSAM to represent robot poses and inter-robot loop closures.
3. Implement a simple communication model that restricts how often robots share loop closure constraints.
4. Optimize the factor graph under different communication constraints and measure map consistency errors.
5. Visualize the optimized multi-robot trajectories and quantify drift reduction compared to individual odometry.
6. Document the architecture, communication trade-offs, and results in a README.

**Verified links from the paper:**

- <https://github.com/ctu-mrs/aloam> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to build and optimize a multi-robot factor graph SLAM system, visualizations of trajectories, and analysis of communication impact.

**Stretch goal:** Extend to decentralized optimization by implementing local subgraph optimizations and periodic global synchronization.

### Advanced — Adaptive Parameter Tuning for Robust Underground SLAM
*Effort: few weeks, ~40+ hours*

You develop an adaptive parameter tuning module that dynamically adjusts SLAM parameters (e.g., scan matching resolution, loop closure thresholds) based on sensor data quality metrics to improve robustness across diverse underground conditions. You integrate this with an existing LIDAR SLAM pipeline and evaluate performance improvements.

**Why it shows you understood the paper:** This project directly addresses a key limitation and future direction from the paper—automated parameter tuning to reduce manual effort and improve SLAM robustness in challenging subterranean environments.

**Grounded in:** Limitation: 'SLAM systems require careful and robot-dependent parameter tuning, which is complex and environment-specific.' and Future direction: 'Research on automated and adaptive parameter tuning to improve SLAM robustness across diverse environments.'

**Tech stack:** Python 3.11, C++ (for SLAM integration), A-LOAM or LIO-SAM as base SLAM pipeline, scikit-learn or PyTorch (for adaptive tuning model)

**Data:** Use publicly available LIDAR datasets with varying environmental conditions (e.g., KITTI for baseline, or simulate degraded conditions) as a proxy for subterranean data.

**Build it:**

1. Select a base LIDAR SLAM implementation such as A-LOAM or LIO-SAM.
2. Identify key SLAM parameters affecting robustness (e.g., feature extraction resolution, ICP thresholds).
3. Design metrics to quantify sensor data quality or environmental degradation (e.g., point cloud density, noise levels).
4. Implement an adaptive controller or machine learning model that adjusts SLAM parameters online based on these metrics.
5. Integrate the adaptive tuning module into the SLAM pipeline and run experiments on datasets with varying conditions.
6. Evaluate improvements in trajectory accuracy and robustness compared to fixed-parameter SLAM.
7. Document methodology, experiments, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/HKUST-Aerial-Robotics/A-LOAM> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/arpg/LIO-SAM> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with adaptive parameter tuning code integrated into a LIDAR SLAM pipeline, experimental results showing robustness gains, and comprehensive documentation.

**Stretch goal:** Extend the adaptive tuning to multi-robot SLAM scenarios with communication constraints, enabling online parameter sharing and coordination.

_The paper does not provide its own released code or datasets; all projects rely on third-party open-source SLAM implementations and publicly available LIDAR datasets as substitutes._
