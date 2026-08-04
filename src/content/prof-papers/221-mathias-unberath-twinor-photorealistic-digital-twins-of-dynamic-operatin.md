---
title: "221 · TwinOR: Photorealistic Digital Twins of Dynamic Operating Rooms for Embodied AI Research — Mathias Unberath"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mathias-unberath"
source_hash: "a541fc9e50b1a6893039264f33ab58bc9ebbdd5bedb7c9e24caa68a1ff59aff2"
sequence: 221
generator: "outreach-garden: managed"
---

# 221 · TwinOR: Photorealistic Digital Twins of Dynamic Operating Rooms for Embodied AI Research

## At a glance

- **Professor:** Mathias Unberath
- **Institution:** Johns Hopkins University
- **Paper:** [TwinOR: Photorealistic Digital Twins of Dynamic Operating Rooms for Embodied AI Research](https://doi.org/10.1007/s11548-026-03644-w)
- **Authors:** Han Zhang, Yiqing Shen, Roger D. Soberanis-Mukul, Ankita Ghosh, Hao Ding, Lalithkumar Seenivasan, Jose L. Porras, Zhekai Mao, Chenjia Li, Wenjie Xiao, Lonny Yarmus, Angela Christine Argento, Masaru Ishii, Mathias Unberath
- **Year:** 2026

## Paper overview

TwinOR is a system that creates highly realistic and dynamic 3D digital replicas of operating rooms (ORs). These digital twins capture the room's geometry, equipment, and human activities in real time, providing a safe and controllable environment for developing and testing AI systems that assist in surgery. This approach overcomes the challenges of collecting data and testing AI directly in live surgeries due to safety and operational constraints.

### Why it matters

**Research problem:** Developing embodied AI for intelligent surgical systems requires realistic, safe, and controllable environments for continual learning and evaluation. However, operating rooms have strict safety regulations and operational constraints that limit data collection and testing of AI agents in real settings. Existing synthetic or simulated environments often fail to capture the full spatial, visual, and behavioral complexity of real ORs, especially dynamic interactions.

**Why it matters:** Intelligent automation in surgery can address critical challenges such as the global shortage of skilled medical staff, rising costs, and risks of human error. Realistic and dynamic digital twins of ORs enable safe experimentation, training, and development of AI systems without disrupting clinical operations, thus accelerating innovation and improving surgical safety and efficiency.

**Key contributions:**

- Development of TwinOR, a perception-grounded real-to-sim infrastructure for creating photorealistic and dynamic digital twins of operating rooms.
- Integration of static 3D reconstruction and continuous dynamic modeling of human and equipment motion in ORs.
- Achieving centimeter-level geometric accuracy and photorealistic visual fidelity in reconstructed OR environments.
- Demonstration of sensor-level realism sufficient for embodied AI tasks such as stereo depth estimation and visual localization.
- Provision of a scalable and safe environment for embodied AI research, benchmarking, and simulation in surgical settings.

## About the professor

**Mathias Unberath** — John C. Malone Associate Professor of Computer Science, Computer Science, Johns Hopkins University.

Research interests: medical computer vision, machine learning, human–computer interaction

### Research links

- [Faculty/profile page](https://mathiasunberath.github.io)
- [Resolved homepage](https://mathiasunberath.github.io/)
- [Lab website](https://arcade.cs.jhu.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TwinOR paper, start with foundational concepts in multi-view stereo and camera calibration, which are essential for capturing accurate geometry and motion in operating rooms. Next, study 3D human pose estimation and SMPL models to grasp how dynamic human motion is modeled. Then, explore 3D reconstruction and neural surface modeling techniques that underpin the photorealistic static geometry in TwinOR. Finally, conclude with the core concept of the TwinOR paper itself, focusing on the authors' own talk or the most relevant advanced presentations about digital twins.

### Multi-view stereo and camera calibration *(prerequisite)*
Multi-view stereo and camera calibration are fundamental for reconstructing 3D geometry and capturing dynamic motion from multiple camera views, which is critical for building accurate digital twins like TwinOR. Understanding these techniques provides the geometric basis for the system's high-fidelity reconstructions.

*How the paper uses it:* TwinOR relies on a multi-view stereo camera setup and precise calibration to capture static and dynamic elements in the operating room.

▶ [CVFX Lecture 18: Stereo rig calibration and projective ...](https://www.youtube.com/watch?v=DDjfhYxqp3w) — Rich Radke · 1:01:08

### 3D human pose estimation and SMPL models *(prerequisite)*
3D human pose estimation and statistical body models like SMPL are essential for accurately modeling the dynamic human motion in the operating room environment. These techniques enable TwinOR to represent and track surgical staff movements realistically.

*How the paper uses it:* TwinOR integrates 3D human pose estimation with SMPL models to capture and reconstruct human activities in the OR.

▶ [Unsupervised Geometry-Aware Representation for 3D Human Pose Estimation](https://www.youtube.com/watch?v=Ml4_tX9PsQA) — European Computer Vision Association · 7 years ago

### 3D reconstruction and neural surface modeling
This concept covers advanced methods for reconstructing photorealistic 3D geometry using neural implicit representations and surface modeling, which are core to TwinOR's ability to create visually accurate digital twins. Understanding these methods clarifies how static room geometry is captured and rendered.

*How the paper uses it:* TwinOR uses neural surface reconstruction and rendering techniques to achieve photorealistic static 3D reconstructions of operating rooms.

▶ [Neural Implicit Representations for 3D Vision - Prof. Andreas ...](https://www.youtube.com/watch?v=-RsTgHlwhmw) — IARAI Research · 56:30

### TwinOR paper talk *(the paper's own talk)*
The authors' own talk or a direct presentation about TwinOR provides the most authoritative and detailed insight into the system's design, contributions, and evaluation. This talk contextualizes all foundational concepts within the specific application of dynamic operating room digital twins for embodied AI.

*How the paper uses it:* This is the direct source for understanding the authors' presentation of TwinOR, its motivations, methods, and results.

▶ [Elevating Digital Twins | Pierangelo Rothenbüehler](https://www.youtube.com/watch?v=uaFeK-cr9EI) — Reality Capture Network · 8 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand TwinOR, starting with multi-view stereo and camera calibration to grasp how geometry and motion are captured. Next, it covers 3D human pose estimation and SMPL models to understand dynamic human modeling in the OR. Then it explains 3D reconstruction and neural surface modeling, the core technique for creating photorealistic static geometry. Finally, it introduces embodied AI in robotic surgery simulation to contextualize TwinOR's application in AI research for surgical environments.

### Multi-view stereo and camera calibration *(prerequisite)*
Multi-view stereo uses multiple camera views to reconstruct 3D geometry by finding correspondences and estimating depth, while camera calibration determines the cameras' positions and parameters. Understanding these fundamentals is essential for capturing accurate spatial information and motion in complex scenes like operating rooms.

*How the paper uses it:* TwinOR relies on a multi-view stereo camera setup and precise calibration to capture the static geometry and dynamic motion in operating rooms.

▶ [CVFX Lecture 18: Stereo rig calibration and projective ...](https://www.youtube.com/watch?v=DDjfhYxqp3w) — Rich Radke · 1:01:08

### 3D human pose estimation and SMPL models *(prerequisite)*
3D human pose estimation recovers the 3D positions of human joints from images or videos, often using statistical body models like SMPL that represent body shape and pose in a parametric form. This enables accurate modeling of human motion and posture in dynamic environments.

*How the paper uses it:* TwinOR uses 3D human pose estimation and SMPL models to capture and represent the dynamic movements of surgical staff within the digital twin.

▶ [Unsupervised Geometry-Aware Representation for 3D Human Pose Estimation](https://www.youtube.com/watch?v=Ml4_tX9PsQA) — European Computer Vision Association · 7 years ago

### 3D reconstruction and neural surface modeling
3D reconstruction creates detailed 3D models of scenes or objects from images, and neural surface modeling uses neural networks to represent surfaces implicitly for photorealistic rendering. These techniques enable building high-fidelity, realistic static geometry essential for immersive digital twins.

*How the paper uses it:* TwinOR integrates neural surface reconstruction to achieve photorealistic and geometrically accurate 3D models of operating rooms.

▶ [Neural Implicit Representations for 3D Vision - Prof. Andreas ...](https://www.youtube.com/watch?v=-RsTgHlwhmw) — IARAI Research · 56:30

### Embodied AI in robotic surgery simulation
Embodied AI involves AI systems that perceive and act within physical or simulated environments, such as robotic surgery simulators that allow safe training and testing. Understanding this context highlights the importance of realistic digital twins for advancing AI in surgical robotics.

*How the paper uses it:* TwinOR provides a safe, photorealistic simulation environment for embodied AI research in surgical robotics and intelligent automation.

▶ [Embodied AI at MIT CSAIL's Living Lab: Simulation for Safer Robots](https://www.youtube.com/watch?v=k-Jc3AeUnec) — MIT CSAIL Alliances · 2 months ago

### TwinOR paper talk *(the paper's own talk)*
A direct presentation or overview from the authors helps consolidate understanding of TwinOR’s goals, methods, and results, tying together the foundational concepts with the system’s unique contributions.

*How the paper uses it:* This video introduces the concept of digital twins, foundational to understanding TwinOR’s approach to creating virtual replicas of operating rooms.

▶ [What is a Digital Twin? Technology, Types, & How it Works](https://www.youtube.com/watch?v=taSbwarjGGw) — Automatedo · 8:47
