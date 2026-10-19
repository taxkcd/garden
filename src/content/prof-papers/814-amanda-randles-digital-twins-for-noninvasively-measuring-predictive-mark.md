---
title: "814 · Digital twins for noninvasively measuring predictive markers of right heart failure — Amanda Randles"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amanda-randles"
source_hash: "d7cc887713428c04f1c5d66edec197bd9a378832902e7eee60c3a987f36276b9"
sequence: 814
generator: "outreach-garden: managed"
---

# 814 · Digital twins for noninvasively measuring predictive markers of right heart failure

## At a glance

- **Professor:** Amanda Randles
- **Institution:** Duke University
- **Paper:** [Digital twins for noninvasively measuring predictive markers of right heart failure](https://www.nature.com/articles/s41746-025-01920-8.pdf)
- **Authors:** Justen R. Geddes, Christopher W. Jensen, Cyrus Tanade, Arash Ghorbannia, Marat Fudim, Manesh R. Patel, Amanda Randles
- **Year:** 2025

## Paper overview

This study presents a novel digital twin framework that uses noninvasive imaging and computational fluid dynamics to predict pulmonary artery pressures in heart failure patients. By creating patient-specific 3D models of the pulmonary arteries and simulating blood flow, the digital twins can accurately estimate pressures that are usually measured invasively. The approach enables continuous, noninvasive monitoring of heart failure progression, potentially improving early detection and personalized treatment.

### Why it matters

**Research problem:** Current invasive techniques for monitoring pulmonary artery pressure in heart failure patients are risky, costly, and not scalable for routine use. There is a need for noninvasive, accurate, and scalable methods to monitor hemodynamic changes indicative of worsening heart failure.

**Why it matters:** Heart failure is a leading cause of death and hospitalization worldwide, with significant economic and health burdens. Early detection of worsening heart failure through precise hemodynamic monitoring can reduce mortality, hospitalizations, and healthcare costs. Noninvasive monitoring tools would enable more frequent and safer patient assessments.

**Key contributions:**

- Developed a scalable digital twin framework combining noninvasive imaging and CFD to predict pulmonary artery pressure.
- Determined that a simplified geometric model (level 1 complexity) of the pulmonary arteries is sufficient for accurate pressure prediction, reducing segmentation and computation time.
- Validated digital twin predictions against invasive IHM measurements, demonstrating close agreement within clinically acceptable error margins.
- Showed that simple 0-pressure outlet boundary conditions suffice for accurate simulations, simplifying model setup.
- Established a pipeline for creating personalized heart failure digital twins capable of noninvasive monitoring.

## About the professor

**Amanda Randles** — Professor, Duke University.

Research interests: multiscale, image-based digital twins of the human vasculature, high-performance computational platforms, biomedical research

### Research links

- [Faculty/profile page](http://randleslab.pratt.duke.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Fluid Dynamics
**The paper assumes:** fundamentals of computational fluid dynamics, Navier-Stokes equations, numerical simulation of fluid flow
**Already in this field?** Skip this entirely if you already understand the basics of fluid mechanics and numerical methods for simulating fluid flow.

This background focuses on Computational Fluid Dynamics (CFD), which is central to understanding the digital twin framework used in the paper for simulating blood flow and pressure in pulmonary arteries. The rigorous course option provides a detailed, university-level introduction to CFD principles, equations, and numerical methods, suitable for deep technical understanding. The fast track offers a concise, visual introduction to turbulence modeling within CFD, giving a quicker grasp of key concepts relevant to flow simulation without the full mathematical depth.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computational Fluid Dynamics](https://www.youtube.com/playlist?list=PL3zvA_WajfGB3npvBGKtzSWlNVjJt0TFC) — Prof. Suman Chakraborty, IIT Kharagpur · 43 videos · 8.7h across the first 9 episodes

**Watch only this:** Episodes 1-6: 'Introduction to Computational Fluid Dynamics and Principles of Conservation' through 'Fundamentals of Discretization (Finite Volume Method)', about 5.7 hours — these cover the core CFD theory and numerical methods needed to understand the digital twin simulations.

*Why it unblocks this paper:* This playlist by Prof. Suman Chakraborty from IIT Kharagpur covers fundamental CFD topics including conservation principles, Navier-Stokes equations, discretization methods, and turbulence modeling, directly relevant to the paper's use of CFD for blood flow simulation.

*If you want all of it:* All 9 episodes, about 8.7 hours — includes turbulence modeling and implementation details for comprehensive understanding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Turbulence Modeling](https://www.youtube.com/playlist?list=PLZbT7hdtyzjBwcmoiteZnavxLUOtvtPff) — Applied Computational Fluid Dynamics · 8 videos · 2.0h across 8 episodes

**Watch only this:** Episodes 1-4: 'DNS, LES and URANS' through 'RANS Turbulence Modeling: Prediction of Near-Wall Turbulence', about 1 hour — covers key turbulence modeling methods relevant to CFD simulations in the paper.

*Why it unblocks this paper:* This short series on Turbulence Modeling provides a focused, intuitive introduction to turbulence concepts and modeling approaches used in CFD, which are important for understanding flow simulations in complex geometries like pulmonary arteries.

*If you want all of it:* All 8 episodes, about 2 hours — for a fuller picture of turbulence modeling techniques.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on digital twins for noninvasively measuring predictive markers of right heart failure, start by building foundational knowledge in computational fluid dynamics (CFD) as it underpins the blood flow simulations. Next, gain insights into medical image segmentation techniques critical for creating patient-specific vascular models. Then, study hemodynamics and pulmonary artery pressure measurement to interpret the physiological relevance of the model outputs. Finally, focus on the core concept of digital twin frameworks in personalized medicine, culminating with the authors' own detailed talk on their digital twin framework for cardiovascular applications.

### Computational fluid dynamics in cardiovascular modeling *(prerequisite)*
Understanding CFD principles and their application in cardiovascular systems is essential to grasp how the digital twin simulates blood flow and pressure in patient-specific pulmonary artery models. The selected talk provides a rigorous academic seminar by a recognized expert, covering advanced CFD topics relevant to cardiovascular research.

*How the paper uses it:* The paper uses a high-performance CFD solver (HARVEY) to simulate blood flow and pressure in pulmonary arteries, making CFD knowledge foundational.

▶ [CFD in Cardiovascular Systems: Charles Taylor, PhD](https://www.youtube.com/watch?v=6BbrSzjBdIk) — Villanova University · 36:35 · 16y ago

### Medical image segmentation for vascular modeling *(prerequisite)*
Segmentation of pulmonary arteries from CT images is a critical step in creating accurate patient-specific digital twins. The chosen seminar from Stanford MedAI discusses advanced methods for training segmentation models with limited labeled data, reflecting the challenges and solutions in medical image segmentation relevant to this paper.

*How the paper uses it:* The paper segments pulmonary arteries at varying geometric complexities from CT pulmonary angiograms to build the digital twin models.

▶ [MedAI Session 25: Training medical image segmentation models with less labeled data | Sarah Hooper](https://www.youtube.com/watch?v=FTmvdARsbnI) — Stanford MedAI · 54:23 · 4y ago

### Hemodynamics and pulmonary artery pressure measurement *(prerequisite)*
A solid understanding of hemodynamic principles and pulmonary artery pressure measurement techniques is necessary to interpret the digital twin's pressure predictions and their clinical significance. The selected lecture provides an in-depth academic overview of hemodynamics and pressure monitoring in critical care settings.

*How the paper uses it:* The digital twin predicts pulmonary artery pressures, which are key hemodynamic markers for heart failure progression monitored invasively in clinical practice.

▶ [HEMODYNAMIC MONITORING: RAP & PAP](https://www.youtube.com/watch?v=MuvSQkQboHc) — Dr. Tom Madayag · 34:55 · 5y ago

### Digital twin frameworks in personalized medicine
This concept focuses on the creation and application of patient-specific computational models for personalized healthcare. The selected academic lecture explores AI-driven digital twin technologies in medicine, providing context for the paper's approach to noninvasive cardiovascular monitoring using digital twins.

*How the paper uses it:* The paper develops a scalable digital twin framework integrating imaging and CFD to noninvasively monitor heart failure patients.

▶ [Virtual Cells and Digital Twins: AI in Personalized Medicine, by Charlotte Bunne](https://www.youtube.com/watch?v=AJL7fMYvCKE) — EPFL School of Computer and Communication Sciences · 36:46 · 1y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk offers direct insight into their novel digital twin framework, methodology, validation, and clinical implications. This presentation is the most authoritative and focused resource for understanding the paper's contributions and future directions.

*How the paper uses it:* Amanda Randles, senior author, presents their digital twin approach for proactive cardiovascular care, directly related to the paper.

▶ [Using Digital Twins to Shift from Reactive to Proactive Healthcare: Amanda Randles](https://www.youtube.com/watch?v=xVVt_B-lU6c) — National Academy of Engineering · 37:11 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper on digital twins for noninvasive prediction of pulmonary artery pressures in heart failure patients. We start with basic heart failure and hemodynamics to grasp the medical context, then cover medical image segmentation and computational fluid dynamics (CFD) to understand how patient-specific models are built and simulated. Finally, we explore digital twin frameworks in personalized medicine to see how these technologies integrate for noninvasive monitoring.

### Hemodynamics and pulmonary artery pressure measurement *(prerequisite)*
Learn the basics of blood flow dynamics and how pressures in the pulmonary artery are measured clinically. This includes understanding the role of pulmonary artery catheters and the significance of pressure waveforms in assessing heart function.

*How the paper uses it:* The paper predicts pulmonary artery pressures noninvasively, so understanding traditional invasive pressure measurement is essential.

▶ [Learn NCLEX Now: Hemodynamics, CVP, & PAWP](https://www.youtube.com/watch?v=Gk5qT4h57aM) — People’s Academy of Sciences, LLC · 5:55 · 3y ago

### Congestive heart failure and right heart failure basics *(paper-talk search result; attribution unverified)*
Understand what congestive heart failure is, focusing on right-sided heart failure, its causes, symptoms, and why monitoring pulmonary artery pressures is clinically important.

*How the paper uses it:* The study targets heart failure patients, especially right heart failure, to improve monitoring and treatment.

▶ [Right-Sided Heart Failure](https://www.youtube.com/watch?v=Af8IqwlG0XI) — Nucleus Medical Media · 4:48 · 1y ago

### Medical image segmentation for vascular modeling *(prerequisite)*
Explore how medical images, like CT scans, are processed to isolate and reconstruct blood vessels. Segmentation is critical for creating accurate 3D models of the pulmonary arteries used in simulations.

*How the paper uses it:* The digital twins are built from segmented pulmonary artery images obtained from CT pulmonary angiograms.

▶ [MedAI Session 25: Training medical image segmentation models with less labeled data | Sarah Hooper](https://www.youtube.com/watch?v=FTmvdARsbnI) — Stanford MedAI · 54:23 · 4y ago

### Computational fluid dynamics in cardiovascular modeling *(prerequisite)*
Gain an intuitive understanding of CFD, which simulates blood flow and pressure in vessels by solving fluid dynamics equations. This helps predict hemodynamic parameters noninvasively.

*How the paper uses it:* The paper uses CFD simulations (via HARVEY) to estimate pulmonary artery pressures in patient-specific models.

▶ [What is CFD? — Lesson 1](https://www.youtube.com/watch?v=F0gDV6Ykc5A) — Ansys Learning · 4:40 · 3y ago

### Digital twin frameworks in personalized medicine
Learn what digital twins are—virtual replicas of physical systems personalized to individuals—and how they can integrate data and simulations to support personalized healthcare decisions.

*How the paper uses it:* The core contribution is a digital twin framework that noninvasively predicts pulmonary artery pressures for heart failure patients.

▶ [Digital Twins in Healthcare: The Next Generation of Personal Care](https://www.youtube.com/watch?v=MaQ6fAeYnfc) — Open 3D Engine · 26:13 · 3y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hear directly from Professor Amanda Randles about the motivation, methods, and implications of using digital twins in healthcare, providing context and expert insight into the study.

*How the paper uses it:* Amanda Randles is a senior author and expert in computational vascular modeling, directly related to this work.

▶ [Using Digital Twins to Shift from Reactive to Proactive Healthcare: Amanda Randles](https://www.youtube.com/watch?v=xVVt_B-lU6c) — National Academy of Engineering · 37:11 · 1y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the digital twin framework for noninvasive pulmonary artery pressure prediction in heart failure patients. The beginner project replicates a key result comparing geometric model complexities using synthetic or simplified data. The intermediate project reimplements the core digital twin CFD simulation pipeline on a small-scale or substitute dataset, validating pressure predictions against a simple baseline. The advanced project extends the method by developing a reduced-order or AI surrogate model to accelerate simulations, addressing a stated future direction of the paper.

### Beginner — Compare Pulmonary Artery Pressure Predictions Across Geometric Model Complexities
*Effort: a weekend, ~8 hours*

You build a simple script or notebook that models pulmonary artery pressure predictions using simplified geometric representations at different complexity levels (e.g., level 1 vs level 3). Using synthetic or publicly available vascular geometry data, you simulate or approximate pressure differences and reproduce the paper's finding that level 1 models predict pressures within 1.1 mmHg of more complex models.

**Why it shows you understood the paper:** This project shows you grasp the importance of geometric complexity in digital twin modeling and how simplifications can reduce computational cost without sacrificing accuracy, a key contribution of the paper.

**Grounded in:** Level 1 geometric models predicted left pulmonary artery (LPA) pressures within 1.1 mmHg of more complex models (levels 2 and 3).

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic pulmonary artery geometries or simplified vascular models created programmatically, as no public dataset is provided by the paper.

**Build it:**

1. Generate or obtain simplified pulmonary artery geometric models at two complexity levels (e.g., simplified tree vs detailed branches).
2. Implement a basic pressure estimation function or use a simple CFD approximation to simulate pressure at the left pulmonary artery for each model.
3. Calculate and compare the pressure predictions between the two model complexities.
4. Visualize the pressure differences and report the absolute difference statistics.
5. Write a README explaining the comparison and how it relates to the paper's findings.

**Ships as:** A Jupyter notebook or Python script that compares pressure predictions between simplified and complex pulmonary artery models, with plots and a clear explanation linking to the paper's result.

**Stretch goal:** Add a simple user interface to input different geometric parameters and see predicted pressure differences interactively.

### Intermediate — Reimplement Digital Twin CFD Pipeline for Pulmonary Artery Pressure Prediction
*Effort: 1-3 weekends, ~20 hours*

You develop a simplified digital twin pipeline that segments pulmonary artery geometry from a public or synthetic CT angiogram substitute, sets up a computational fluid dynamics simulation to estimate pulmonary artery pressures, and compares predictions against a simple baseline such as a constant pressure assumption. You report metrics similar to the paper's mean bias and limits of agreement.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of the paper—combining image-based vascular modeling and CFD simulation for pressure prediction—and to validate the approach quantitatively.

**Grounded in:** The authors developed patient-specific digital twins of the pulmonary arterial tree using high-resolution CT pulmonary angiograms and used a high-performance CFD solver to simulate blood flow and pressure, validated against invasive measurements.

**Tech stack:** Python 3.11, FastAPI or Flask (optional for API), VTK or SimpleITK for image segmentation, PyVista or trimesh for 3D geometry handling, OpenFOAM or a Python CFD library (e.g., fenics, SimScale API) for flow simulation, Matplotlib or Plotly for visualization

**Data:** Synthetic or publicly available CT angiogram substitutes for pulmonary artery segmentation; no direct access to the paper's patient data.

**Build it:**

1. Obtain or generate a 3D pulmonary artery geometry from synthetic data or a substitute public dataset.
2. Segment the pulmonary artery tree at a simplified geometric complexity (level 1).
3. Set up and run a CFD simulation to estimate blood flow and pressure using a Python CFD library or OpenFOAM.
4. Implement a simple baseline pressure prediction (e.g., constant pressure or zero-pressure outlet).
5. Compare the CFD predicted pressures to the baseline and calculate error metrics similar to mean bias and limits of agreement.
6. Document the pipeline, results, and how they relate to the paper's validation approach.

**Ships as:** A repository containing code to segment pulmonary artery geometry, run CFD simulations, compare predictions to a baseline, and report validation metrics with visualizations.

**Stretch goal:** Incorporate a simple 1-element Windkessel boundary condition and compare its effect on pressure predictions.

### Advanced — Develop AI Surrogate Model to Accelerate Pulmonary Artery Pressure Predictions
*Effort: a few weeks, ~40+ hours*

You create a reduced-order or machine learning surrogate model that approximates the CFD simulation outputs of pulmonary artery pressures from geometric inputs. This model aims to accelerate pressure prediction for real-time or scalable clinical applications, addressing a key future direction of the paper. You train and validate the surrogate on synthetic or substitute data and compare its accuracy and speed to the full CFD simulation.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction by implementing an AI surrogate to improve efficiency, demonstrating deep comprehension of the paper's methodology and challenges in clinical translation.

**Grounded in:** Develop reduced-order or AI surrogate models to further improve efficiency and scalability of digital twins.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, NumPy, Matplotlib, VTK or trimesh for geometry processing

**Data:** Synthetic datasets of pulmonary artery geometries paired with CFD-simulated pressure outputs generated by your intermediate project or approximations.

**Build it:**

1. Generate a dataset of pulmonary artery geometries and corresponding CFD pressure simulation outputs using your intermediate pipeline or approximations.
2. Design and train a machine learning model (e.g., a neural network or gradient boosting model) to predict pressures from geometric features.
3. Evaluate the surrogate model's accuracy against CFD simulation results using metrics like mean bias and limits of agreement.
4. Measure and compare the computational time of the surrogate model versus full CFD simulations.
5. Document the surrogate model development, validation results, and discuss implications for clinical scalability.

**Ships as:** A repository with code and documentation for training and evaluating an AI surrogate model that approximates pulmonary artery pressure CFD simulations, including performance and accuracy comparisons.

**Stretch goal:** Extend the surrogate to incorporate pulsatile flow features or elastic vessel wall effects as additional inputs.
