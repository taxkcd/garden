---
title: "036 · Present and Future of SLAM in Extreme Environments: The DARPA SubT Challenge — Christoffer Heckman"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-ristoffer-ch"
source_hash: "fe108075e4dba39afa2a74cdcbf37522991ff3f8c3086f9bc878b9b30e35ebe7"
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
