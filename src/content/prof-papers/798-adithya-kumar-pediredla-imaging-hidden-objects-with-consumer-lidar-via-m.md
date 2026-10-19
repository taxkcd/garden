---
title: "798 · Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling — Adithya Kumar Pediredla"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adithya-kumar-pediredla"
source_hash: "9d994aa0f5fc290a854276ea651586e85c4b73d4b5e4853ac935c85b0a9ac3c7"
sequence: 798
generator: "outreach-garden: managed"
---

# 798 · Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling

## At a glance

- **Professor:** Adithya Kumar Pediredla
- **Institution:** Dartmouth College
- **Paper:** [Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling](https://arxiv.org/pdf/2605.17865)
- **Authors:** Siddharth Somasundaram, Aaron Young, Akshat Dave, Adithya Pediredla, Ramesh Raskar
- **Year:** 2026

## Paper overview

This paper demonstrates that consumer-grade LiDAR sensors, such as those found in smartphones, can be used to image objects hidden from direct view by exploiting motion-induced sampling and multi-frame fusion. The authors develop a motion-induced aperture sampling model that accounts for object shape, object motion, and camera motion, enabling 3D reconstruction, object tracking, and camera localization of hidden objects using affordable, off-the-shelf hardware.

### Why it matters

**Research problem:** Non-line-of-sight (NLOS) imaging, which involves capturing information about objects hidden from direct line of sight, has traditionally required expensive, bulky, and research-grade LiDAR hardware. Consumer LiDARs face challenges such as low signal-to-noise ratio (SNR), limited spatial resolution, and motion blur due to object and camera movement, making NLOS imaging difficult on these devices.

**Why it matters:** Enabling NLOS imaging on consumer devices would democratize access to advanced imaging capabilities, allowing applications in augmented reality, robotics, navigation, and user interfaces without costly equipment or complex calibration. This could lead to safer robots, better AR experiences, and new ways to sense environments beyond direct view.

**Key contributions:**

- Development of the motion-induced aperture sampling (MAS) model that decouples object shape, object motion, and camera motion effects for NLOS imaging with consumer LiDAR.
- Demonstration of 3D reconstruction of static hidden objects using handheld smartphone-grade LiDAR.
- Real-time single and multi-object 3D tracking of hidden objects using particle filtering.
- Camera localization using NLOS signals from hidden objects as landmarks, especially useful in textureless or planar environments.
- Validation that the approach works with off-the-shelf consumer LiDAR hardware costing under $100 with minimal calibration.

## About the professor

**Adithya Kumar Pediredla** — Assistant Professor, Computer Science, Dartmouth College.

Research interests: computational photography, computer graphics, acousto-optics, computer vision

### Research links

- [Faculty/profile page](https://web.cs.dartmouth.edu/people/adithya-k-pediredla)
- [Professor website](https://adithya-pediredla.com/)
- [Resolved homepage](https://web.cs.dartmouth.edu/news/2026/10/adithya-pediredla-earns-two-dartmouth-faculty-fellowships)
- [Lab website](https://risclab-dartmouth.org/)
- [Google Scholar](https://scholar.google.com/citations?user=ey6n20kAAAAJ&hl=en)
- [GitHub](https://github.com/AdithyaPediredla)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian Filtering and Particle Filters
**The paper assumes:** Bayesian filtering, particle filtering, sequential Monte Carlo methods, probabilistic state estimation
**Already in this field?** Skip this entirely if you already understand Bayesian state estimation and particle filtering algorithms in probabilistic robotics or signal processing.

This background focuses on Bayesian filtering and particle filters, which are central to the paper's approach for real-time tracking and localization of hidden objects using consumer LiDAR. The rigorous course option provides a deep, structured university-level understanding of probabilistic robotics and particle filtering, while the fast track offers a concise, clear, and practical introduction to particle filters suitable for readers with limited time. Choose the lane that fits your available time and depth needs; both will enable you to grasp the key algorithmic concepts used in the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture: Mobile Sensing and Robotics 1 (Winter 2021/22, Uni Bonn)](https://www.youtube.com/playlist?list=PLgnQpQtFTOGQEn33QDVGJpiZLi-SlL7vA) — Cyrill Stachniss · 21 videos · 14.9h across 21 episodes

**Watch only this:** Watch episodes 2-3 ("Probability Primer for Probabilistic Robotics", "Bayes Filter"), 7-8 ("Motion Models", "Observation Models"), 12-14 ("Particle Filter - 5 Minutes with Cyrill", "Particle Filter and Monte Carlo Localization", "Robot Control") for about 3.5 hours total — these cover the Bayesian filtering basics, motion and observation models, and particle filtering in detail.

*Why it unblocks this paper:* This university lecture series by Cyrill Stachniss covers Bayesian filtering and particle filters in a robotics context, directly matching the paper's use of particle filtering for multi-frame fusion, tracking, and localization. It offers a rigorous, step-by-step foundation in probabilistic robotics essential for understanding the paper's algorithmic approach.

*If you want all of it:* About 14.9 hours across all 21 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Particle Filter](https://www.youtube.com/playlist?list=PL3EFm54Q_261f64hRtOeWM_emabLvgkgt) — Mehmet İşcan · 9 videos · 2.3h across 9 episodes

**Watch only this:** Watch episodes 1-4 ("Particle Filter Design - Les 1-4") for about 1 hour — these cover Bayesian estimation, sequential Bayesian estimation, Monte Carlo methods, and importance sampling, which are the foundations of particle filtering.

*Why it unblocks this paper:* This concise playlist by Mehmet İşcan provides a clear, practical introduction to particle filters with Bayesian estimation and Monte Carlo methods, including Matlab examples. It is well-suited for quickly grasping the core concepts of particle filtering relevant to the paper's tracking and localization methods.

*If you want all of it:* About 2.3 hours across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling," start by building foundational knowledge in non-line-of-sight imaging, synthetic aperture imaging, and particle filtering for tracking, as these are key technical pillars underpinning the work. Then, focus on the paper's core novel contribution—the motion-induced aperture sampling model—and finally, review the authors' own talk to gain direct insights into their approach, experimental validation, and future directions.

### Non-line-of-sight imaging *(prerequisite)*
Non-line-of-sight (NLOS) imaging is the fundamental problem domain of the paper, involving techniques to reconstruct or detect objects hidden from direct view. Understanding recent advances and theoretical foundations in NLOS imaging will provide context for the challenges and innovations in using consumer LiDAR for this task.

*How the paper uses it:* The paper addresses NLOS imaging using consumer-grade LiDAR, a challenging domain traditionally requiring expensive hardware.

▶ [Non-Line-of-Sight Reconstruction using Efficient Transient Rendering](https://www.youtube.com/watch?v=raflaLbLw44) — Visual Computing at University of Bonn · 20:00 · 5y ago

### Synthetic aperture imaging *(prerequisite)*
Synthetic aperture imaging is a core technique that enables resolution enhancement by synthesizing a larger effective aperture through motion, which is central to the paper's multi-frame fusion strategy. A rigorous seminar on synthetic aperture radar (SAR) imaging provides the necessary mathematical and conceptual background.

*How the paper uses it:* The paper leverages synthetic aperture concepts to overcome resolution and SNR limitations in consumer LiDAR NLOS imaging.

▶ [Associate Prof. Venky Krishnan | Microlocal analysis methods in synthetic aperture radar imaging](https://www.youtube.com/watch?v=gWAerjRHzIY) — INI Seminar Room 1 · 45:17 · 3y ago

### Particle filtering for tracking *(prerequisite)*
Particle filtering is a key algorithmic technique used in the paper for real-time tracking and localization of hidden objects. Understanding particle filters in depth, especially in the context of tracking, will clarify how the authors achieve robust inference from noisy LiDAR data.

*How the paper uses it:* The paper employs particle filtering to enable real-time single and multi-object tracking and camera localization using the MAS model.

▶ [Particle Filters](https://www.youtube.com/watch?v=lzN18y_z6HQ) — Bert Huang · 16:34 · 9y ago

### Motion-induced aperture sampling model
This is the paper's central novel model that unifies the effects of object shape, object motion, and camera motion on LiDAR measurements. While no direct recorded talk by the authors on this model is available, related advanced lectures on motion perception and synthetic aperture imaging provide conceptual grounding for this model's principles.

*How the paper uses it:* The MAS model is the key technical contribution enabling multi-frame fusion and NLOS imaging with consumer LiDAR.

▶ [Lecture 2: What is Synthetic Aperture RADAR and Polarimetric Synthetic Aperture RADAR?](https://www.youtube.com/watch?v=PDhAJiuQbnU) — TechEd Insights · 15:23 · 1y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Directly hearing the authors explain their novel approach, experimental results, and implications offers the most precise and authoritative understanding of the paper. This talk likely covers the MAS model, multi-frame fusion, tracking, and localization in detail.

*How the paper uses it:* The authors' own talk provides firsthand exposition of their work on consumer LiDAR-based NLOS imaging via motion-induced sampling.

▶ [This Camera Can See Around Corners](https://www.youtube.com/watch?v=UoO8MCWfnoc) — Future Got Weird · 5:25 · 9d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces you to the foundational concepts needed to understand how consumer LiDAR can image hidden objects via motion-induced sampling. Start with the fundamental problem of non-line-of-sight imaging to grasp why seeing hidden objects is challenging. Then learn about synthetic aperture imaging, a key technique that enhances resolution by leveraging motion. Next, understand particle filtering, the core algorithm used for real-time tracking and localization in the paper. Finally, explore the paper's central novel model, the motion-induced aperture sampling model, which unifies object shape, motion, and camera motion effects to enable imaging with consumer-grade LiDAR.

### Non-line-of-sight imaging *(prerequisite)*
Non-line-of-sight (NLOS) imaging is about capturing information about objects that are hidden from direct view, such as around corners or behind obstacles. This section explains how indirect light reflections can be used to reconstruct or detect these hidden objects, which is the fundamental problem the paper addresses.

*How the paper uses it:* The paper tackles NLOS imaging using consumer LiDAR to see hidden objects beyond direct line of sight.

▶ [Non-Line-of-Sight Reconstruction using Efficient Transient Rendering](https://www.youtube.com/watch?v=raflaLbLw44) — Visual Computing at University of Bonn · 20:00 · 5y ago

### Synthetic aperture imaging *(prerequisite)*
Synthetic aperture imaging is a technique that uses motion to simulate a larger sensor aperture, improving spatial resolution beyond the physical sensor's limits. Understanding this concept helps explain how the paper leverages handheld camera motion to create a synthetic aperture for better 3D reconstruction of hidden objects.

*How the paper uses it:* The paper uses synthetic aperture principles to enhance resolution via motion-induced sampling with consumer LiDAR.

▶ [Synthetic Aperture Radar (SAR) Explained](https://www.youtube.com/watch?v=sGCJZtJVTWQ) — QinetiQ · 5:19 · 5y ago

### Particle filtering for tracking *(prerequisite)*
Particle filtering is a probabilistic algorithm used for estimating the state of a system that evolves over time, such as tracking moving objects. It works by representing possible states with particles and updating their likelihood based on new measurements, enabling real-time tracking despite noisy data.

*How the paper uses it:* The paper employs particle filtering for real-time 3D tracking of hidden objects and camera localization using noisy LiDAR data.

▶ [Particle Filters](https://www.youtube.com/watch?v=lzN18y_z6HQ) — Bert Huang · 16:34 · 9y ago

## Already in your library

- [https://www.youtube.com › watch?v=N3LEhhQz-cM](https://www.youtube.com/watch?v=N3LEhhQz-cM) — also for: Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling (Ramesh Raskar)
- [Non-line-of-sight Imaging with Partial Occluders and Surface Normals | TOG 2019](https://www.youtube.com/watch?v=nVoEZuFFMzA) — also for: Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling (Ramesh Raskar)
- [Satellites Use 'This Weird Trick' To See More Than They Should - Synthetic Aperture Radar Explained.](https://www.youtube.com/watch?v=u2bUKEi9It4) — also for: Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling (Ramesh Raskar)
- [Understanding the Particle Filter | | Autonomous Navigation, Part 2](https://www.youtube.com/watch?v=NrzmH_yerBU) — also for: Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling (Ramesh Raskar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling." Starting with a basic simulation of the motion-induced aperture sampling concept, you then implement a core particle filtering tracking algorithm on synthetic data, and finally extend the method to address a stated limitation by integrating a learned score function for improved robustness. Each project ties directly to a key contribution, result, or limitation of the paper, using your existing software engineering and applied ML skills.

### Beginner — Simulate Motion-Induced Aperture Sampling
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models the motion-induced aperture sampling (MAS) effect described in the paper. The simulation will generate synthetic LiDAR measurements of a hidden static object as the camera moves along a predefined path, illustrating how multi-frame fusion can improve spatial resolution.

**Why it shows you understood the paper:** This project demonstrates you understand the MAS model's core idea of unifying object shape, object motion, and camera motion effects to create a synthetic aperture from consumer LiDAR data.

**Grounded in:** Development of the motion-induced aperture sampling (MAS) model that decouples object shape, object motion, and camera motion effects for NLOS imaging.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated by the simulation representing LiDAR returns from a hidden object under camera motion.

**Build it:**

1. Implement a simple 3D geometric model of a hidden object (e.g., a planar retroreflective surface).
2. Simulate camera motion along a linear or circular trajectory.
3. Generate synthetic LiDAR measurements for each camera pose using a simplified MAS model.
4. Visualize the aggregated measurements to show the synthetic aperture effect improving resolution.
5. Write a README explaining the MAS concept and how the simulation illustrates it.

**Ships as:** A Jupyter Notebook with simulation code, visualizations of synthetic LiDAR measurements under motion, and explanatory text linking to the MAS model.

**Stretch goal:** Add object motion simulation (e.g., translation) and show its effect on the synthetic aperture sampling.

### Intermediate — Particle Filter Tracking of Hidden Objects Using MAS Model
*Effort: 1-2 weekends, ~20 hours*

You implement a particle filtering algorithm to track a single hidden object in 3D using synthetic LiDAR measurements generated by your MAS simulation. You compare the tracking accuracy against a naive baseline that does not fuse multi-frame data, reporting position error metrics similar to the paper.

**Why it shows you understood the paper:** This project shows you can apply the MAS model for real-time object tracking using particle filtering, reproducing the paper's core method for fusing noisy consumer LiDAR data over multiple frames.

**Grounded in:** Real-time single and multi-object 3D tracking of hidden objects using particle filtering.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic LiDAR measurements from the MAS simulation with added noise to mimic consumer LiDAR characteristics.

**Build it:**

1. Extend the MAS simulation to generate noisy LiDAR measurements over multiple frames with known camera motion.
2. Implement a particle filter that models the object's 3D position and updates particles based on the MAS measurement likelihood.
3. Implement a baseline tracker that uses only single-frame measurements without fusion.
4. Evaluate and compare tracking accuracy (e.g., average position error) of both methods over multiple runs.
5. Document the implementation details, evaluation results, and discussion of limitations.

**Ships as:** A Jupyter Notebook or Python scripts demonstrating particle filter tracking with plots of estimated vs. ground truth object positions and error metrics.

**Stretch goal:** Incorporate simple object motion (translation) in the particle filter state and evaluate tracking performance.

### Advanced — Learned Score Function for Robust Particle Filtering in MAS Tracking
*Effort: 3+ weeks*

You develop a learned score function using a neural network to replace the handcrafted score function in the particle filter's data likelihood computation. You train the network on synthetic MAS measurements to improve robustness against noise and diffuse object reflectance, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by integrating machine learning to enhance particle filtering robustness, demonstrating deep comprehension and extension of the MAS tracking framework.

**Grounded in:** Future work could overcome this limitation by leveraging machine learning to learn a score function to improve robustness of particle filtering.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic MAS measurement datasets with varying noise levels and reflectance properties generated from the simulation.

**Build it:**

1. Generate a labeled dataset of synthetic MAS measurements paired with ground truth object states.
2. Design and train a neural network to predict measurement likelihood or score given particle states and measurements.
3. Integrate the learned score function into the particle filter's update step.
4. Evaluate the learned score particle filter against the handcrafted score baseline on tracking accuracy and robustness.
5. Analyze results and document improvements and remaining challenges.

**Ships as:** A GitHub repository with code for data generation, neural network training, particle filter integration, and evaluation scripts, plus a detailed README and results report.

**Stretch goal:** Experiment with joint estimation of object shape and pose using the learned score function.
