---
title: "340 · Coordinating Instruments for Multi-Messenger Astrophysics — Jeremy Buhler"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jeremy-buhler"
source_hash: "1e471918e2c701bb9083a719bc1df49e2c9bbe954effe52047474a968c8c5b3f"
sequence: 340
generator: "outreach-garden: managed"
---

# 340 · Coordinating Instruments for Multi-Messenger Astrophysics

## At a glance

- **Professor:** Jeremy Buhler
- **Institution:** Washington University in St. Louis
- **Paper:** [Coordinating Instruments for Multi-Messenger Astrophysics](https://doi.org/10.1145/3706594.3727948)
- **Authors:** Daisy Wang, Ye Htet, Marion Sudvarg, Roger Chamberlain, Jeremy Buhler, James H. Buckley
- **Year:** 2025

## Paper overview

This paper presents computational methods and algorithms developed for the Advanced Particle-astrophysics Telescope (APT) and its Antarctic Demonstrator (ADAPT) to detect, reconstruct, and localize gamma-ray bursts (GRBs) in real time. These instruments enable coordinated multi-messenger astrophysics by quickly identifying transient celestial events and guiding follow-up observations with optical telescopes. The work addresses challenges of onboard computation under size, weight, and power constraints, and proposes machine learning and optimization techniques to improve localization accuracy and follow-up observation strategies.

### Why it matters

**Research problem:** How to perform prompt, accurate localization and mapping of gamma-ray bursts (GRBs) onboard space-borne instruments with limited computational resources, enabling coordinated multi-messenger astrophysics and timely follow-up observations by narrow field-of-view optical telescopes.

**Why it matters:** Transient astrophysical events like GRBs are short-lived and multi-modal observations (gamma rays, gravitational waves, neutrinos, optical) provide richer scientific insights. Rapid and accurate localization onboard the instrument is critical because communication latency and bandwidth constraints make ground-based real-time processing impractical. Effective localization and likelihood mapping enable optical telescopes to efficiently search for counterparts before they fade.

**Key contributions:**

- Design and implementation of an FPGA-based pipeline for real-time signal processing and event reconstruction from gamma-ray detector data.
- Development of accelerated branch-and-bound algorithms for Compton reconstruction achieving high throughput (~3×10^5 events/s).
- Integration of machine learning models to classify background rings and improve uncertainty estimation in localization.
- Iterative localization pipeline combining approximation and refinement stages with ML-based background suppression.
- Likelihood map generation methods using HEALPix discretization and empirical instrument response models for guiding follow-up observations.

## About the professor

**Jeremy Buhler** — Professor, Computer Science and Engineering, Genetics, Washington University in St. Louis.

Research interests: analysis of scientific datasets; computing architectures; parallel computations; programming frameworks for streaming and modular computation; bioinformatics; real-time analysis pipelines for gamma-ray telescopes

### Research links

- [Faculty/profile page](https://www.cse.wustl.edu/~jbuhler)
- [Resolved homepage](https://www.cse.wustl.edu/~jbuhler/)
- [Lab website](https://sbs.washu.edu/)
- [GitHub](https://github.com/jdbuhler/mercator)
- [Curriculum Vitae](https://www.cse.wustl.edu/~jbuhler/vitae.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Coordinating Instruments for Multi-Messenger Astrophysics," start by building foundational knowledge on Compton scattering reconstruction and FPGA signal processing pipelines, which are critical for onboard event processing and gamma-ray trajectory estimation. Then, explore machine learning techniques for background suppression and combinatorial optimization for telescope scheduling, which enhance localization accuracy and follow-up observation planning. Finally, study the core concept of multi-messenger astrophysics through an advanced academic talk to contextualize the paper's contributions within the broader field.

### Compton scattering reconstruction *(prerequisite)*
Compton scattering physics and reconstruction techniques are fundamental for estimating gamma-ray trajectories from detector data, a core step in the paper's localization pipeline. Understanding the quantum and interaction physics behind Compton scattering enables comprehension of the reconstruction algorithms and their computational challenges.

*How the paper uses it:* The paper uses accelerated branch-and-bound algorithms for Compton reconstruction to achieve high throughput onboard.

▶ [Compton Scattering](https://www.youtube.com/watch?v=WR88_Vzfcx4) — MIT OpenCourseWare · 9 years ago

### FPGA signal processing pipelines *(prerequisite)*
FPGA-based pipelines enable real-time, onboard processing of high-throughput gamma-ray detector data under strict size, weight, and power constraints. Learning about FPGA architecture and programming provides insight into how the paper achieves its computational performance goals.

*How the paper uses it:* The paper implements an FPGA pipeline for real-time signal processing and event reconstruction from gamma-ray detector data.

▶ [Lecture 1: Introduction to FPGA](https://www.youtube.com/watch?v=uEpdlGzfFBQ) — IIT Roorkee July 2018 · 37:54

### Machine learning for background suppression *(prerequisite)*
Machine learning models are employed to classify background events and estimate uncertainties, improving localization accuracy. Understanding ML techniques for noise and background suppression in signal data is essential to grasp the paper's approach to enhancing detection quality.

*How the paper uses it:* The paper integrates multilayer perceptron models to suppress background and improve uncertainty estimation in localization.

▶ [Noise Reduction: From Capacitors to Convolutional Neural ...](https://www.youtube.com/watch?v=q4EQKDXOUH8) — Chicago AES Section · 56:51

### Combinatorial optimization for telescope scheduling *(prerequisite)*
The follow-up observation scheduling problem is modeled as a Budgeted Prize-Collecting Traveling Salesman Problem, requiring knowledge of combinatorial optimization and integer linear programming. Understanding these optimization frameworks is key to appreciating the paper's approach to efficient telescope path planning.

*How the paper uses it:* The paper formulates follow-up telescope scheduling as a Budgeted Prize-Collecting Traveling Salesman Problem and evaluates heuristics and ILP solvers.

▶ [Lec-24 Traveling Salesman Problem(TSP)](https://www.youtube.com/watch?v=-cLsEHP0qt0) — nptelhrd · 16 years ago

### Paper authors talk *(the paper's own talk)*
A direct presentation by experts in multi-messenger astrophysics provides authoritative insights into the challenges and solutions for real-time GRB localization and coordinated observations. This talk contextualizes the paper's contributions within the broader scientific and computational landscape.

*How the paper uses it:* The paper's authors focus on real-time onboard computational pipelines and multi-messenger coordination, which aligns with the talk's subject on multi-messenger astrophysics.

▶ [Multi-Messenger astrophysics by Varun Bhalerao](https://www.youtube.com/watch?v=hn3YMeBEyag) — International Centre for Theoretical Sciences · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand real-time gamma-ray burst localization onboard space instruments, starting with the physics of Compton scattering, then FPGA-based signal processing for real-time event handling, followed by machine learning techniques for background suppression, and combinatorial optimization for telescope scheduling. Finally, it covers the core gamma-ray burst localization algorithms used in the paper. The sequence builds intuition from fundamental physics and hardware constraints to computational methods and scheduling strategies.

### Compton scattering reconstruction *(prerequisite)*
Compton scattering is a fundamental physics process where a photon scatters off an electron, changing the photon's direction and energy. Understanding this effect is key to reconstructing the paths of gamma rays detected by the instrument, which is essential for localizing gamma-ray bursts.

*How the paper uses it:* The paper uses Compton reconstruction algorithms to estimate gamma-ray trajectories from detector data onboard the APT and ADAPT instruments.

▶ [Compton Scattering: Explanation and Derivation](https://www.youtube.com/watch?v=3UgjB1RuXCI) — AstroNaught · 5:11

### FPGA signal processing pipelines *(prerequisite)*
Field-Programmable Gate Arrays (FPGAs) allow custom digital circuits to process data in real time with low latency and high throughput, which is critical for onboard processing under size, weight, and power constraints. Learning how FPGA pipelines work helps understand how the paper achieves real-time event reconstruction.

*How the paper uses it:* The authors implement an FPGA-based pipeline for real-time signal processing and event reconstruction from gamma-ray detector data.

▶ [Introduction to FPGA Part 1 - What is an FPGA? | Digi-Key ...](https://www.youtube.com/watch?v=lLg1AgA2Xoo) — DigiKey · 15:21

### Machine learning for background suppression *(prerequisite)*
Machine learning models can classify and filter out background noise from detector signals, improving the accuracy of event localization. Understanding these techniques provides insight into how the paper integrates ML to enhance gamma-ray burst localization.

*How the paper uses it:* The paper integrates multilayer perceptron models to classify background events and estimate uncertainties, improving localization accuracy.

▶ [292 - Denoising images using deep learning (Noise2Void)​](https://www.youtube.com/watch?v=nVKvGBq_-wQ) — DigitalSreeni · 16:56

### Combinatorial optimization for telescope scheduling *(prerequisite)*
Combinatorial optimization methods, such as solving variants of the Traveling Salesman Problem, help plan efficient paths for telescopes to follow up on transient events. This knowledge explains how the paper schedules optical telescope observations after localization.

*How the paper uses it:* The authors formulate follow-up observation scheduling as a Budgeted Prize-Collecting Traveling Salesman Problem and evaluate heuristics and integer linear programming solutions.

▶ [The Traveling Salesman Problem Explained in under 5 mins ...](https://www.youtube.com/watch?v=V4OKrnAxpiM) — Minute Math · 4:40

### Gamma-ray burst localization algorithms
Gamma-ray burst localization algorithms combine physics, signal processing, and statistical methods to pinpoint the origin of transient gamma-ray events. Understanding these algorithms ties together the prior concepts and reveals the core computational challenge addressed in the paper.

*How the paper uses it:* The paper develops iterative localization pipelines combining Compton reconstruction, machine learning background suppression, and likelihood map generation for real-time GRB localization.

▶ [Gamma Ray Bursts](https://www.youtube.com/watch?v=Qm8gi85cdGE) — Paul Fellows · 5 years ago

## Already in your library

- [4.7 Traveling Salesperson Problem - Dynamic Programming](https://www.youtube.com/watch?v=XaXsJJh-Q5Y) — also for: Spot-Scanning Confocal Photon Beams for Hypofractionated Brain Radiosurgery (Shuang (Sean) Luan)
- [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Coordinating Instruments for Multi-Messenger Astrophysics." The beginner project focuses on reproducing a core signal processing step from the FPGA pipeline using familiar tools. The intermediate project implements a simplified Compton reconstruction and localization pipeline on simulated data, comparing baseline and ML-enhanced localization accuracy. The advanced project tackles a future direction by developing a compact ML model to approximate instrument response functions, addressing onboard memory and computation constraints.

### Beginner — Simulate and Visualize Compton Event Signal Processing
*Effort: a weekend, ~8 hours*

You build a small Python simulation of the signal processing stage that integrates charge signals from gamma-ray detector events, mimicking the FPGA pipeline's pedestal subtraction and signal integration. You visualize the processed signals and demonstrate throughput estimation on synthetic event data.

**Why it shows you understood the paper:** This project shows you understand the initial real-time signal processing step critical for event reconstruction, including noise subtraction and digital signal integration, as described in the FPGA pipeline implementation.

**Grounded in:** Design and implementation of an FPGA-based pipeline for real-time signal processing and event reconstruction from gamma-ray detector data.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic gamma-ray detector event signals generated with noise and pedestal offsets to simulate raw detector outputs.

**Build it:**

1. Implement a function to simulate raw detector signals with pedestal offsets and noise.
2. Implement pedestal subtraction and signal integration to compute total charge per event.
3. Simulate a stream of events and measure processing throughput.
4. Visualize raw and processed signals for a sample of events.
5. Write a README explaining the signal processing steps and their role in the FPGA pipeline.

**Ships as:** A Jupyter notebook or Python script that simulates and visualizes the signal processing pipeline stage, with throughput metrics and explanatory documentation.

**Stretch goal:** Add a simple finite state machine (FSM) simulation to mimic packet handling as described in the FPGA pipeline.

### Intermediate — Compton Reconstruction and Localization with ML Background Suppression
*Effort: 2 weekends, ~20 hours*

You implement a simplified Compton event reconstruction and iterative localization pipeline on simulated gamma-ray burst events. You integrate a small neural network classifier to suppress background rings and improve localization accuracy, comparing results with and without ML. You report localization error metrics similar to the paper's 68%ile and 95%ile errors.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core computational methods: Compton reconstruction, ML-based background suppression, and iterative localization algorithms that enable real-time onboard GRB localization.

**Grounded in:** Integration of machine learning models to classify background rings and improve uncertainty estimation in localization; iterative localization pipeline combining approximation and refinement stages with ML-based background suppression.

**Tech stack:** Python 3.11, NumPy, scikit-learn, PyTorch, Matplotlib, Jupyter Notebook

**Data:** Simulated gamma-ray burst event data with Compton scattering parameters and background noise generated synthetically to mimic detector outputs.

**Build it:**

1. Simulate a dataset of Compton scattering events including signal and background rings.
2. Implement a baseline Compton reconstruction algorithm to estimate source localization.
3. Train a simple multilayer perceptron to classify rings as signal or background.
4. Integrate the ML classifier into the localization pipeline to suppress background.
5. Evaluate localization accuracy with and without ML using angular error metrics.
6. Visualize likelihood maps and localization error distributions.
7. Document the pipeline, results, and comparison to paper metrics.

**Ships as:** A Jupyter notebook or Python package implementing the reconstruction and localization pipeline with ML background suppression, including evaluation and visualization of localization accuracy.

**Stretch goal:** Extend the pipeline to generate HEALPix likelihood maps and implement a simple telescope scheduling heuristic.

### Advanced — Compact ML Approximation of Instrument Response for Real-Time Localization
*Effort: 3+ weeks*

You develop and train a compact machine learning model to approximate the instrument response function used in gamma-ray burst localization, aiming to reduce memory and computational demands for onboard processing. You evaluate the model's accuracy in approximating response outputs and demonstrate its integration into a localization pipeline on simulated data, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation by applying ML to approximate large instrument response models, showing deep comprehension of the computational challenges and potential solutions for real-time onboard localization.

**Grounded in:** Create compact machine learning models to approximate instrument response functions, reducing memory and computation demands.

**Tech stack:** Python 3.11, NumPy, PyTorch, scikit-learn, Jupyter Notebook

**Data:** Synthetic instrument response data generated by simulating detector responses to gamma-ray photons at various energies and angles, mimicking GEANT4 simulation outputs.

**Build it:**

1. Generate or simulate a dataset representing instrument response outputs for a range of input parameters.
2. Design and train a compact neural network model to predict instrument response outputs from inputs.
3. Evaluate model accuracy and compression compared to baseline large response tables.
4. Integrate the compact model into a simplified localization pipeline using simulated event data.
5. Benchmark memory usage and inference speed versus a naive lookup approach.
6. Document the approach, results, and implications for onboard resource constraints.

**Ships as:** A Python package or notebook demonstrating a compact ML model for instrument response approximation, integrated into a localization pipeline with evaluation of accuracy and resource usage.

**Stretch goal:** Explore active learning strategies to reduce training data requirements for the ML model.

_No code or datasets were released by the paper's authors; all data must be simulated or synthesized based on the paper's descriptions and standard gamma-ray detector physics._
