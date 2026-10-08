---
title: "606 · Toward In-Context Environment Sensing for Mobile Augmented Reality — Yiqin Zhao"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yiqin-zhao"
source_hash: "06496fb61fd01b9a6db0f4e75e054acd459d0492cfc66e4734ce38c05b59649a"
sequence: 606
generator: "outreach-garden: managed"
---

# 606 · Toward In-Context Environment Sensing for Mobile Augmented Reality

## At a glance

- **Professor:** Yiqin Zhao
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Toward In-Context Environment Sensing for Mobile Augmented Reality](https://dl.acm.org/doi/10.1145/3636534.3696211)
- **Authors:** Yiqin Zhao, Ashkan Ganj, Tian Guo
- **Year:** 2024

## Paper overview

This paper explores how mobile augmented reality (AR) systems can improve environment sensing by using additional context data from devices, users, and surroundings. It introduces the concept of in-context sensing, which combines camera images with other sensor data and user interactions to achieve more accurate, efficient, and robust sensing. The authors present two case studies on metric depth estimation and lighting estimation, showing how manipulating hardware parameters and guiding user movements can enhance sensing quality.

### Why it matters

**Research problem:** Mobile AR devices have limited on-device sensing and computing resources, making it challenging to achieve high-quality environment sensing necessary for seamless integration of virtual and physical content. Traditional methods relying solely on camera images are insufficient due to scale ambiguity, overfitting to specific cameras, and limited environmental information.

**Why it matters:** Accurate environment sensing is critical for immersive and realistic AR experiences, such as placing virtual objects at correct distances or rendering lighting that matches the physical environment. Improving sensing quality directly enhances user experience and broadens AR applications.

**Key contributions:**

- Formal definition of in-context environment sensing for mobile AR.
- Survey of recent context-aware environment sensing system designs highlighting the role and challenges of sensing context data.
- Identification of uncertainty of environment information availability as the primary challenge in in-context sensing.
- Case study on metric depth estimation demonstrating benefits of incorporating camera parameters and hardware manipulation.
- Case study on lighting estimation showing improvements from guided user mobility and multi-user context sharing.

## About the professor

**Yiqin Zhao** — Assistant Professor, School of Interactive Games and Media, Rochester Inst. of Technology.

Research interests: Augmented Reality, Mobile Computing, Ubiquitous Computing

### Research links

- [Faculty/profile page](https://scholar.google.com/citations?user=2Dq4bAcAAAAJ&amp;amp;hl=en)
- [Identity evidence](https://www.rit.edu/directory/yzigm-yiqin-zhao)
- [Professor website](https://yiqinzhao.phd/)
- [Google Scholar](https://scholar.google.com/citations?user=2Dq4bAcAAAAJ&hl=en)
- [GitHub](https://github.com/YiqinZhao)
- [Social profile](https://bsky.app/profile/yiqinzhao.bsky.social)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D Computer Vision
**The paper assumes:** 3D computer vision, depth estimation, camera geometry, sensor fusion
**Already in this field?** Skip this entirely if you already understand the fundamentals of 3D computer vision, including depth sensing and camera parameter effects on scene reconstruction.

This background focuses on 3D computer vision fundamentals essential for understanding the paper's contributions in metric depth estimation, lighting estimation, and environment sensing in mobile augmented reality. The rigorous course option provides a deep, structured university-level treatment of 3D vision concepts, while the fast track offers a concise, practical tutorial series that covers core 3D computer vision topics with clear explanations and code examples. Choose the course for comprehensive mastery or the fast track for a quick, applied overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [3D Computer Vision | National University of Singapore](https://www.youtube.com/playlist?list=PLxg0CGqViygP47ERvqHw_v7FVnUovJeaz) — CVRP Lab at NUS · 39 videos · 33.4h across 39 episodes

**Watch only this:** Lectures 1 (Part 1 & 2), 2 (Part 1 & 2), 5 (Part 1, 2 & 3), and 6 (Part 1, 2 & 3) — about 7.5 hours total. These cover projective geometry, rigid body motion, camera calibration, and single view metrology, which are critical to understanding scale ambiguity and metric depth estimation.

*Why it unblocks this paper:* This National University of Singapore 3D Computer Vision lecture series covers foundational topics like projective geometry, camera models, calibration, single view metrology, and 3D reconstruction that directly underpin the paper's methods involving camera parameter manipulation and environment sensing.

*If you want all of it:* 33.4 hours across 39 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [3D Computer Vision](https://www.youtube.com/playlist?list=PLjZmPymxz1tCG_D3SemCEoAL_7FWvb7y8) — PardesLine · 16 videos · 2.3h across 16 episodes

**Watch only this:** Episodes 00 (Introduction), 01 (Point Cloud Processing with Open3D), 09 (Stereo Vision 3D Reconstruction Tutorial), and 05 (Surface Reconstruction from 3D Point Cloud) — about 35 minutes total. These cover core 3D data representations and reconstruction techniques needed to grasp the paper's environment sensing approaches.

*Why it unblocks this paper:* The PardesLine 3D Computer Vision playlist offers concise, engineering-focused tutorials on 3D point cloud processing, stereo vision, and surface reconstruction with practical Python implementations, providing an accessible yet thorough introduction to 3D vision concepts relevant to the paper.

*If you want all of it:* 2.3 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Toward In-Context Environment Sensing for Mobile Augmented Reality," start by building foundational knowledge on metric depth estimation, lighting estimation in AR, context-aware sensing systems, and sensor fusion with hardware manipulation. These prerequisites provide the technical and conceptual background necessary to grasp the paper's novel contributions. Finally, focus on the core concept of in-context environment sensing, featuring the authors' own talk if available, to directly connect with their innovative paradigm and case studies.

### Metric Depth Estimation in AR *(prerequisite)*
Metric depth estimation is fundamental to the paper's first case study, which improves depth sensing accuracy by incorporating camera parameters and hardware manipulation. Understanding state-of-the-art depth estimation methods and challenges in monocular depth perception is essential to appreciate the paper's contributions.

*How the paper uses it:* The paper's first case study focuses on metric depth estimation improvements using camera parameters and model efficiency.

▶ [03. Jaime Spencer - The Monocular Depth Estimation Challenge | 1st MDEC @ WACV23](https://www.youtube.com/watch?v=4_SlDLgU_a8) — The Surrey Institute for People-Centred AI | CVSSP · 39:06 · 3 years ago

### Lighting Estimation for Augmented Reality *(prerequisite)*
Lighting estimation is critical for realistic rendering in AR, directly relating to the paper's second case study. A solid grasp of lighting estimation techniques and challenges in mobile AR environments will clarify the significance of guided user mobility and multi-user context sharing proposed in the paper.

*How the paper uses it:* The paper's second case study improves lighting estimation by leveraging guided user mobility and multi-user data sharing.

▶ [PointAR: Efficient Lighting Estimation for Mobile Augmented Reality ECCV 2020 presentation](https://www.youtube.com/watch?v=Mg-dFJRPSH4) — The Cake Lab · 6:14 · 5 years ago

### Context-Aware Sensing Systems *(prerequisite)*
Context-aware sensing systems form the foundation for integrating multiple sensor and user context data, which is central to the in-context sensing paradigm. Understanding the challenges and opportunities in context-aware computing helps frame the paper's approach to uncertainty in environment information availability.

*How the paper uses it:* The paper surveys recent context-aware environment sensing designs and identifies uncertainty in context data availability as a key challenge.

▶ [Opportunities and Challenges in Sensing, Inference and Context-aware Computing](https://www.youtube.com/watch?v=FqrXTUOmNBU) — Microsoft Research · 54:32 · 9y ago

### Sensor Fusion and Hardware Manipulation in Mobile AR *(prerequisite)*
Sensor fusion and hardware manipulation techniques are critical to the paper's approach of combining camera parameters and sensor data to improve sensing quality. Familiarity with sensor fusion algorithms and hardware-software co-design in mobile AR systems will deepen understanding of the paper's methodology.

*How the paper uses it:* The paper demonstrates benefits of manipulating hardware parameters and fusing sensor data for improved metric depth and lighting estimation.

▶ [Lecture 06: Fundamentals of AR/VR/XR Systems:  Tracking, Sensing, Interaction and System Integration](https://www.youtube.com/watch?v=TyJz42dGtXY) — IIT KANPUR-NPTEL · 30:34 · 1 month ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential for understanding the paper on in-context environment sensing for mobile augmented reality (AR). Starting with the basics of context-aware sensing systems and sensor fusion, it then covers the key AR-specific sensing tasks of metric depth estimation and lighting estimation. Finally, it culminates with the core concept of in-context environment sensing, which integrates these ideas to improve AR environment sensing accuracy and robustness.

### Context-Aware Sensing Systems *(prerequisite)*
Context-aware sensing systems combine data from multiple sensors and user context to better understand the environment and user state. This foundational concept explains how integrating diverse data sources enables smarter, more adaptive applications.

*How the paper uses it:* The paper builds on context-aware sensing to define in-context environment sensing that leverages multiple sensor and user context data for AR.

▶ [Opportunities and Challenges in Sensing, Inference and Context-aware Computing](https://www.youtube.com/watch?v=FqrXTUOmNBU) — Microsoft Research · 54:32 · 9y ago

### Sensor Fusion and Hardware Manipulation in Mobile AR *(prerequisite)*
Sensor fusion merges data from different hardware sensors like gyroscopes, accelerometers, and cameras to create a coherent understanding of device motion and environment. Hardware manipulation involves adjusting sensor parameters to improve sensing quality.

*How the paper uses it:* The paper uses sensor fusion and hardware parameter manipulation to enhance depth and lighting estimation in mobile AR.

▶ [Sensor Fusion on Android Devices: A Revolution in Motion Processing](https://www.youtube.com/watch?v=C7JQ7Rpwn2k) — Google TechTalks · 46:27 · 16 years ago

### Metric Depth Estimation in AR *(prerequisite)*
Metric depth estimation predicts the actual physical distance to objects from a single camera image, which is crucial for placing virtual objects accurately in AR. Understanding this task helps grasp the paper's first case study on improving depth estimation using camera parameters.

*How the paper uses it:* The paper's first case study demonstrates improved metric depth estimation by incorporating camera parameters and hardware manipulation.

▶ [03. Jaime Spencer - The Monocular Depth Estimation Challenge | 1st MDEC @ WACV23](https://www.youtube.com/watch?v=4_SlDLgU_a8) — The Surrey Institute for People-Centred AI | CVSSP · 39:06 · 3 years ago

### Lighting Estimation for Augmented Reality *(prerequisite)*
Lighting estimation determines the illumination conditions of the physical environment to render virtual objects with consistent lighting and shadows in AR. This is essential for realistic and immersive AR experiences.

*How the paper uses it:* The paper's second case study improves lighting estimation by guided user mobility and multi-user context sharing.

▶ [PointAR: Efficient Lighting Estimation for Mobile Augmented Reality ECCV 2020 presentation](https://www.youtube.com/watch?v=Mg-dFJRPSH4) — The Cake Lab · 6:14 · 5 years ago

### In-Context Environment Sensing
In-context environment sensing is a paradigm that combines camera images with additional sensor data and user interactions to achieve more accurate and robust environment sensing in mobile AR. It addresses challenges like uncertainty in environment information availability by leveraging context data and hardware manipulation.

*How the paper uses it:* This is the core concept introduced and formalized by the paper to improve mobile AR environment sensing.

▶ [A context-aware method for authentically simulating outdoors shadows for mobile augmented reality.](https://www.youtube.com/watch?v=HEJV6B-OT3I) — International Symposium on Mixed and Augmented Reality (ISMAR) · 20:26 · 7 years ago

## Already in your library

- [What Is In-Context Learning in Deep Learning?](https://www.youtube.com/watch?v=As9a15poQHs) — also for: What data should I include in my POS tagging training set? (Emily Prud'hommeaux)
- [Understanding In-Context Learning: What It Is and How It Works](https://www.youtube.com/watch?v=7vJluo_FI3I) — also for: In-Context Algebra (David Bau)
- [How Neural Nets estimate depth from 2D images? Monocular Depth Estimation Explained!](https://www.youtube.com/watch?v=sz30TDttIBA) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Context Aware Computing: Understanding Human Intention](https://www.youtube.com/watch?v=N7zb0EjzFPY) — also for: Designing Robots for Families: In-Situ Prototyping for Contextual Reminders on Family Routines (Sarah Sebo)
- [Understanding Sensor Fusion and Tracking, Part 1: What Is ...](https://www.youtube.com/watch?v=6qV3YjFppuc) — also for: D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models (A. Lynn Abbott)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's in-context environment sensing paradigm for mobile AR. Starting with a simple simulation of focal length effects on depth estimation, you then implement a core method of metric depth estimation incorporating camera parameters and compare it to a baseline. Finally, you extend the paper by addressing a stated limitation through improved user movement simulation for lighting estimation, exploring guided mobility effects with more realistic human models.

### Beginner — Simulate Focal Length Impact on Depth Estimation
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates how varying camera focal length affects scale ambiguity in depth estimation from single images. Using simple synthetic images or geometric shapes, you visualize how changing focal length changes perceived depth and demonstrate the benefit of incorporating focal length as context.

**Why it shows you understood the paper:** This project shows you grasp the paper's insight that camera parameters like focal length reduce scale ambiguity in depth estimation, a core concept in their metric depth case study.

**Grounded in:** Metric depth estimation models that incorporate camera parameters (e.g., focal length) outperform single-image models in accuracy and robustness.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic geometric shapes or simple rendered images generated within the script to simulate depth cues.

**Build it:**

1. Write a Python script to generate simple 2D shapes or synthetic scenes.
2. Implement a function to simulate image capture with varying focal lengths affecting apparent scale.
3. Visualize how perceived depth changes with focal length using plots.
4. Add annotations explaining scale ambiguity and how focal length helps resolve it.
5. Document the simulation and findings in a README.

**Ships as:** A GitHub repo with a Python script and README demonstrating focal length's effect on depth perception and scale ambiguity.

**Stretch goal:** Add a simple depth estimation baseline that ignores focal length and compare outputs visually.

### Intermediate — Reimplement Metric Depth Estimation with Camera Parameters
*Effort: 2 weekends, ~20 hours*

You implement a metric depth estimation model that incorporates camera focal length as an input feature, following the paper's Metric3D approach. You train and evaluate it on a publicly available AR-related depth dataset (e.g., NYU Depth V2 as a substitute) and compare its accuracy to a baseline single-image depth model without camera parameters.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's core method of integrating camera parameters to improve depth estimation accuracy and robustness, validating the key contribution of the metric depth case study.

**Grounded in:** Metric3D, which incorporates camera parameters as additional data, produces more stable and robust results compared to ZoeDepth, which relies solely on visual data.

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib

**Data:** NYU Depth V2 dataset (publicly available indoor RGB-D dataset) used as a substitute for the paper's AR-specific datasets.

**Build it:**

1. Set up a PyTorch environment and load the NYU Depth V2 dataset.
2. Implement a baseline single-image depth estimation model (e.g., a small CNN).
3. Modify the model to accept camera focal length as an additional input feature.
4. Train both models and evaluate using RMSE and AbsRel metrics.
5. Compare and visualize the performance improvements from including focal length.
6. Write a detailed README explaining the implementation, results, and connection to the paper.

**Ships as:** A GitHub repo with code, training scripts, evaluation results, and a README reproducing the paper's metric depth estimation method with camera parameters.

**Stretch goal:** Add focal length manipulation during inference to simulate hardware parameter changes and analyze effects on depth accuracy.

### Advanced — Extend Lighting Estimation with Realistic User Movement Simulation
*Effort: 3+ weeks*

You develop a lighting estimation pipeline that incorporates guided user mobility to improve environment observation coverage, addressing the paper's limitation of simplified human joint models. You extend the simulation environment by integrating a more realistic human movement model (e.g., using an open-source human motion dataset or library) and evaluate how improved movement realism affects lighting estimation accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by enhancing user movement realism in guided mobility, showing deep comprehension of the challenges in context uncertainty and sensing quality improvement.

**Grounded in:** Current simulation environment uses simple human joint models without muscle modeling, limiting the realism of user movement simulation.

**Tech stack:** Python 3.11, PyTorch, Open3D, numpy, matplotlib, a human motion capture dataset or library (e.g., CMU MoCap)

**Data:** Use a publicly available human motion capture dataset (e.g., CMU MoCap) to simulate realistic user movements for lighting estimation context collection.

**Build it:**

1. Set up a lighting estimation baseline pipeline similar to the paper's approach using synthetic or simplified environment data.
2. Integrate a human motion dataset or library to simulate realistic guided user movements in the environment.
3. Modify the context collection process to use these realistic movements to gather lighting observations.
4. Evaluate lighting estimation accuracy compared to baseline with simple joint models or natural user movement.
5. Analyze memory usage and coverage improvements from guided mobility with realistic movement.
6. Document the methodology, results, and implications for AR environment sensing.

**Ships as:** A GitHub repo with code, simulation scripts, evaluation results, and a comprehensive README showing an extension of the paper's lighting estimation case study with improved user movement realism.

**Stretch goal:** Explore multi-user context sharing combined with realistic movement simulation to further boost lighting estimation accuracy.
