---
title: "279 · Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling — Ramesh Raskar"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ramesh-raskar"
source_hash: "87067da9ee15535b1e9c35c3c67ad88d8049bcd1d70a5396fca5b8f0fcd526ae"
sequence: 279
generator: "outreach-garden: managed"
---

# 279 · Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling

## At a glance

- **Professor:** Ramesh Raskar
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling](https://arxiv.org/abs/2605.17865)
- **Authors:** Siddharth Somasundaram, Aaron Young, Akshat Dave, Adithya Pediredla, Ramesh Raskar
- **Year:** 2026

## Paper overview

This paper demonstrates that consumer-grade LiDAR sensors, such as those found in smartphones, can be used to image objects hidden from direct view by leveraging motion-induced sampling and multi-frame fusion techniques. The authors develop a model that accounts for object shape, motion, and camera motion to reconstruct 3D shapes, track objects, and localize cameras using hidden objects, all in real-time and with off-the-shelf hardware costing under $100.

### Why it matters

**Research problem:** Non-line-of-sight (NLOS) imaging traditionally requires expensive, bulky, and research-grade LiDAR systems with complex calibration. Consumer LiDARs have low laser power, low spatial resolution, and are affected by object and camera motion, making NLOS imaging challenging on these devices.

**Why it matters:** Democratizing NLOS imaging by enabling it on widely available consumer devices can open new applications in robotics, augmented reality, health, sustainability, and user interfaces. It allows imaging hidden objects without costly hardware or setups, potentially transforming how devices perceive their environment.

**Key contributions:**

- Development of the motion-induced aperture sampling (MAS) model for consumer LiDAR NLOS imaging.
- Demonstration of 3D reconstruction of hidden static objects using handheld smartphone LiDAR.
- Real-time single and multi-object 3D tracking of hidden objects with known shape.
- Camera localization using known static hidden objects as landmarks in textureless environments.
- Implementation of particle filtering for robust and efficient inference under low SNR and resolution constraints.

## About the professor

**Ramesh Raskar** — Associate Professor of Media Arts and Sciences, Media Lab, Massachusetts Inst. of Technology.

Research interests: Distributed AI agent architectures, Machine Learning and Imaging for health and sustainability.

### Research links

- [Faculty/profile page](https://www.media.mit.edu/people/raskar/overview)
- [Professor website](https://docs.google.com/document/u/1/d/1_OVmKTzxnMUA1AHkv9fbbn_A-tEzYfxsIYpc5SVJ_ok/pub?urp=gmail_link)
- [Resolved homepage](http://cameraculture.media.mit.edu/people)
- [Lab website](https://www.media.mit.edu/groups/camera-culture/overview/)
- [LinkedIn](https://www.linkedin.com/in/raskar)
- [Social profile](https://twitter.com/raskarmit)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling," start by building foundational knowledge on Non-Line-of-Sight (NLOS) imaging and Time-of-Flight LiDAR sensing, which are critical to grasp the sensing and imaging challenges addressed. Next, study particle filtering as it is the key inference method enabling real-time tracking and localization in the paper. Finally, focus on the paper's core concept by watching the authors' own talk, which directly explains their novel motion-induced aperture sampling model and its application to consumer LiDAR for NLOS imaging.

### Non-line-of-sight imaging *(prerequisite)*
This section covers the fundamental imaging paradigm of seeing objects hidden from direct view, which underpins the paper's goal. The selected talk from the Stanford Computational Imaging Lab provides a focused and research-level overview of NLOS imaging challenges and approaches, suitable for an advanced reader.

*How the paper uses it:* Understanding NLOS imaging fundamentals is essential to appreciate how the paper leverages consumer LiDAR for hidden object reconstruction.

▶ [Non-line-of-sight Imaging with Partial Occluders and Surface Normals | TOG 2019](https://www.youtube.com/watch?v=nVoEZuFFMzA) — Stanford Computational Imaging Lab · 4:52 · 7 years ago

### Time-of-flight LiDAR sensing *(prerequisite)*
This section explains the core sensing technology used by consumer LiDAR devices, focusing on time-of-flight principles. The seminar by SICK Sensor Intelligence offers a detailed and technical explanation suitable for advanced learners, helping to understand the measurement constraints and capabilities of the hardware used in the paper.

*How the paper uses it:* Grasping time-of-flight LiDAR operation is critical to understanding the sensor data and limitations addressed by the MAS model in the paper.

▶ [What Is LiDAR? Time‑of‑Flight, 2D vs 3D Explained (with Real Outdoor Tests)](https://www.youtube.com/watch?v=ySMe-FEYtxI) — SICK Sensor Intelligence · 5 months ago

### Particle filtering for tracking *(prerequisite)*
Particle filtering is a key inference method used in the paper for real-time tracking and localization of hidden objects. The MATLAB channel's video provides a comprehensive and mathematically rigorous tutorial on particle filters, making it ideal for advanced readers seeking to understand the algorithmic backbone of the paper's tracking approach.

*How the paper uses it:* The paper employs particle filtering to robustly infer object and camera states under low SNR and resolution constraints.

▶ [Understanding the Particle Filter |  | Autonomous Navigation, Part 2](https://www.youtube.com/watch?v=NrzmH_yerBU) — MATLAB · 6 years ago

### Paper authors talk
This is the authors' own presentation of their work, providing the most direct and detailed explanation of their novel motion-induced aperture sampling model and its application to consumer LiDAR for NLOS imaging. Watching this talk will give insights into the motivation, methodology, and results straight from the creators.

*How the paper uses it:* The authors' talk directly explains the MAS model, multi-frame fusion, and real-time tracking techniques developed in the paper.

▶ [https://www.youtube.com › watch?v=N3LEhhQz-cM](https://www.youtube.com/watch?v=N3LEhhQz-cM) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on imaging hidden objects with consumer LiDAR, start by learning the basics of time-of-flight LiDAR sensing, which is the core technology behind the measurements. Next, grasp the fundamental concept of non-line-of-sight (NLOS) imaging, which enables seeing hidden objects. Then, learn particle filtering, the key inference method used for real-time tracking and localization. Finally, explore the paper's central novel model, the motion-induced aperture sampling (MAS) model, which unifies object shape, motion, and camera motion effects on LiDAR data.

### Time-of-flight LiDAR sensing *(prerequisite)*
Time-of-flight LiDAR measures distance by timing how long it takes for a laser pulse to travel to an object and back. Understanding this sensing principle is essential to grasp how consumer LiDAR devices capture 3D information, despite their low power and resolution.

*How the paper uses it:* The paper uses consumer-grade time-of-flight LiDAR sensors to capture data for non-line-of-sight imaging.

▶ [What Is LiDAR? Time‑of‑Flight, 2D vs 3D Explained (with Real Outdoor Tests)](https://www.youtube.com/watch?v=ySMe-FEYtxI) — SICK Sensor Intelligence · 5 months ago

### Non-line-of-sight imaging *(prerequisite)*
Non-line-of-sight imaging techniques allow cameras to see objects hidden from direct view by analyzing indirect light paths, such as reflections from walls or other surfaces. This foundational concept explains how hidden objects can be reconstructed from indirect measurements.

*How the paper uses it:* The paper aims to perform NLOS imaging using consumer LiDAR by leveraging motion and multi-frame fusion.

▶ [Non-line-of-sight Imaging with Partial Occluders and Surface Normals | TOG 2019](https://www.youtube.com/watch?v=nVoEZuFFMzA) — Stanford Computational Imaging Lab · 4:52 · 7 years ago

### Particle filtering for tracking *(prerequisite)*
Particle filtering is a probabilistic method used to estimate the state of a system (like object position) over time by representing possible states with many samples (particles) and updating them based on new measurements. It enables robust real-time tracking even with noisy data.

*How the paper uses it:* The authors use particle filtering to track hidden objects and localize the camera in real-time under low signal-to-noise conditions.

▶ [Particle Filters Basic Idea](https://www.youtube.com/watch?v=_LjBba2hnfk) — Udacity · 11 years ago

### Motion-induced aperture sampling model
The motion-induced aperture sampling (MAS) model unifies the effects of object shape, object motion, and camera motion on LiDAR measurements by treating motion as a form of spatial sampling, inspired by synthetic aperture radar and burst photography. This model is key to reconstructing hidden objects using consumer LiDAR.

*How the paper uses it:* The MAS model is the paper's central novel contribution enabling NLOS imaging with consumer LiDAR through motion-induced sampling.

▶ [Satellites Use 'This Weird Trick' To See More Than They Should - Synthetic Aperture Radar Explained.](https://www.youtube.com/watch?v=u2bUKEi9It4) — Scott Manley · 16:26 · 5 years ago

## Already in your library

- [Visually Explained: Kalman Filters](https://www.youtube.com/watch?v=IFeCIbljreY) — also for: The Model Forest Ensemble Kalman Filter (Andrey A. Popov)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity to the paper "Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling." Starting with a beginner-level simulation of the motion-induced aperture sampling (MAS) concept, progressing to an intermediate-level reimplementation of the MAS model with particle filtering for tracking on synthetic data, and culminating in an advanced project that extends the MAS model to handle object rotations, addressing a key limitation noted by the authors. Each project is designed to leverage your existing software engineering and applied ML skills while deepening your understanding of consumer LiDAR-based NLOS imaging.

### Beginner — Simulate Motion-Induced Aperture Sampling for NLOS Imaging
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the motion-induced aperture sampling (MAS) model that visualizes how camera and object motion affect LiDAR measurements for hidden objects. The simulation will generate synthetic LiDAR range data frames under controlled motion scenarios and visualize the multi-frame fusion effect.

**Why it shows you understood the paper:** This project demonstrates your grasp of the MAS model's core idea—how motion can be exploited to improve sampling and resolution in consumer LiDAR NLOS imaging—by faithfully reproducing a key conceptual figure or metric from the paper.

**Grounded in:** Development of the motion-induced aperture sampling (MAS) model for consumer LiDAR NLOS imaging.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic LiDAR range data generated by your simulation mimicking the MAS sampling process described in the paper.

**Build it:**

1. Implement a basic MAS model simulator that generates 2D range measurements for a hidden object under camera translation.
2. Simulate multiple frames with varying camera positions to mimic motion-induced sampling.
3. Fuse the multi-frame data to produce an improved range image or depth map.
4. Visualize the original single-frame and fused multi-frame results side-by-side.
5. Write a README explaining the MAS concept and how your simulation reproduces the paper's sampling effect.

**Ships as:** A Jupyter Notebook with code and visualizations demonstrating MAS sampling and multi-frame fusion, plus a README explaining the concept and simulation.

**Stretch goal:** Add object translation motion simulation and show its effect on the fused reconstruction.

### Intermediate — Reimplement MAS Model with Particle Filtering for Hidden Object Tracking
*Effort: 2 weekends, ~20 hours*

You implement the MAS model from the paper to simulate LiDAR measurements of a known hidden object undergoing translation, and apply a particle filter to track the object's position over time. You compare tracking accuracy against a naive baseline that does not fuse multi-frame data.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method—combining the MAS model with particle filtering for real-time tracking—on synthetic data, reproducing quantitative tracking metrics and demonstrating understanding of the inference approach.

**Grounded in:** Particle filtering enables real-time single and multi-object tracking.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic LiDAR measurements generated by your MAS model implementation simulating a hidden object's translation.

**Build it:**

1. Implement the MAS sampling model equations to generate synthetic LiDAR measurements for a known hidden object under translation.
2. Implement a particle filter that estimates the object's position from noisy MAS measurements.
3. Create a naive baseline tracker that uses only single-frame measurements without fusion.
4. Run tracking experiments comparing particle filter and baseline on synthetic sequences.
5. Compute and plot tracking error metrics similar to the paper's reported average error.
6. Document the implementation details, results, and comparison in a README.

**Ships as:** A Jupyter Notebook with MAS model simulation, particle filter tracking code, baseline comparison, error plots, and explanatory README.

**Stretch goal:** Incorporate simple camera motion into the simulation and extend the particle filter to jointly track camera and object translation.

### Advanced — Extend MAS Model to Handle Object Rotations for NLOS Imaging
*Effort: 3+ weeks*

You extend the MAS model and particle filtering framework to incorporate object rotations (pitch and yaw), addressing a key limitation noted in the paper. You simulate synthetic LiDAR data with rotating hidden objects and demonstrate improved tracking or reconstruction accuracy compared to translation-only models.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing your ability to innovate on the MAS model and inference methods, and to apply your ML and mathematical modeling skills to a challenging real-world problem.

**Grounded in:** Extending the MAS model to handle non-rigid-body motion and object rotations like pitch and yaw.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook, PyTorch (optional for learned score functions)

**Data:** Synthetic LiDAR measurements generated by your extended MAS model simulating hidden objects undergoing translation and rotation.

**Build it:**

1. Review the MAS model and particle filtering implementation from the intermediate project.
2. Mathematically extend the MAS model to include object rotation parameters affecting LiDAR measurements.
3. Modify the particle filter state space and transition model to include rotation variables.
4. Simulate synthetic LiDAR data with rotating hidden objects under camera motion.
5. Evaluate tracking or reconstruction accuracy improvements over translation-only models.
6. Optionally, experiment with learned score functions to replace handcrafted particle filter likelihoods.
7. Document the extended model, implementation, experiments, and results in a detailed README.

**Ships as:** A comprehensive GitHub repository with code for the extended MAS model and particle filter, synthetic data generation scripts, evaluation results, and a detailed README discussing the extension and its impact.

**Stretch goal:** Implement joint estimation of object shape, motion, and camera pose using a SLAM-like formulation as a further research extension.
