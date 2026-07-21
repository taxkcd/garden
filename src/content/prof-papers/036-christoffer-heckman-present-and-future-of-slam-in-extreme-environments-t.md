---
title: "036 · Present and Future of SLAM in Extreme Environments: The DARPA SubT Challenge — Christoffer Heckman"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-ristoffer-ch"
source_hash: "842bf2da2f15bb6d58bc33e0b15fa392ea4e2c017670f420b6ae7e3f8757c228"
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

To deeply understand the paper on SLAM in extreme underground environments from the DARPA SubT Challenge, start by building foundational knowledge on LIDAR-based mapping and multi-robot SLAM architectures, as these are critical enablers for the surveyed systems. Then, study factor graph optimization to grasp the back-end techniques for robust SLAM performance. Finally, focus on the authors' own seminar talk to gain direct insights into their comprehensive survey and practical challenges in subterranean SLAM.

## Recommended videos (in order)

### LIDAR based mapping and perception *(prerequisite)*
LIDAR-centric SLAM is the dominant approach for underground mapping discussed in the paper. Understanding the principles and applications of LIDAR sensors and data processing is essential to appreciate the front-end perception modules of the surveyed SLAM systems.

*How the paper uses it:* The paper emphasizes LIDAR-centric SLAM as the go-to approach for subterranean environments.

▶ [Lecture 33 : LiDAR Technique and applications](https://www.youtube.com/watch?v=FExWNMY9bWw) — IIT Roorkee July 2018 · 1:00:11 · 6 years ago

### Multi-robot SLAM architectures *(prerequisite)*
The paper discusses centralized, decentralized, and distributed multi-robot SLAM architectures, which are key to enabling collaboration and communication in challenging underground environments. This talk provides an advanced seminar perspective on resilient multi-robot coordination and learning.

*How the paper uses it:* Multi-robot SLAM architectures and communication strategies are a major focus of the paper.

▶ [Stephanie Gil: Resilient Multi-Robot Systems: Coordination and Learning in the Real-World](https://www.youtube.com/watch?v=9QzTo3xELiI) — MIT Robotics · 1:00:09 · 3 months ago

### Factor graph optimization in SLAM *(prerequisite)*
Factor graph optimization is a critical back-end technique for sensor fusion and robust SLAM performance. Understanding this method is necessary to appreciate how the surveyed systems achieve accurate mapping and localization despite sensor noise and environmental challenges.

*How the paper uses it:* The paper analyzes SLAM back-end architectures including factor graph optimization techniques.

▶ [Factor Graphs and Robust Perception | Michael Kaess | Tartan SLAM Series](https://www.youtube.com/watch?v=JmR2YpkLNt0) — AirLab · 1:09:25 · Streamed 5 years ago

### Authors' talk on DARPA SubT SLAM *(the paper's own talk)*
This seminar by Christoffer Heckman, a co-author of the paper, provides direct insights into robotic autonomy and perception in challenging environments, closely aligning with the paper's survey of underground SLAM systems developed for the DARPA Subterranean Challenge.

*How the paper uses it:* Christoffer Heckman is a co-author and expert on robust perception in challenging environments, making his talk highly relevant.

▶ [Stanford Seminar - Robotic Autonomy and Perception in Challenging Environments](https://www.youtube.com/watch?v=4AudRBdZVV0) — Stanford Online · 58:05 · 6 years ago
