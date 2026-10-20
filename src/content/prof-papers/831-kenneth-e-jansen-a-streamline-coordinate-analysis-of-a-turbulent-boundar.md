---
title: "831 · A streamline coordinate analysis of a turbulent boundary layer subject to pressure gradients and curvature on the windward side of a bump — Kenneth E. Jansen"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kenneth-e-jansen"
source_hash: "ce78c061da52a78452fd26977cf13baa6936ad3f0609e23913f44323e8879a43"
sequence: 831
generator: "outreach-garden: managed"
---

# 831 · A streamline coordinate analysis of a turbulent boundary layer subject to pressure gradients and curvature on the windward side of a bump

## At a glance

- **Professor:** Kenneth E. Jansen
- **Institution:** University of Colorado Boulder
- **Paper:** [A streamline coordinate analysis of a turbulent boundary layer subject to pressure gradients and curvature on the windward side of a bump](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/3BF81449CD43030A6EF0B756DBB48EBA/S002211202400199Xa.pdf/div-class-title-a-streamline-coordinate-analysis-of-a-turbulent-boundary-layer-subject-to-pressure-gradients-and-curvature-on-the-windward-side-of-a-bump-div.pdf)
- **Authors:** Aviral Prakash, Riccardo Balin, John A. Evans, Kenneth E. Jansen
- **Year:** 2024

## Paper overview

This paper presents a detailed direct numerical simulation (DNS) study of turbulent boundary layer flow over a Gaussian-shaped bump, focusing on how pressure gradients and surface curvature affect turbulence before flow separation. The authors analyze momentum budgets in a coordinate system aligned with streamlines, propose new approximations for Reynolds stresses, and provide semi-empirical models for turbulence closure. The work offers new high-fidelity data and insights useful for improving turbulence models in engineering applications.

### Why it matters

**Research problem:** Understanding how adverse and favourable pressure gradients combined with concave and convex curvature influence turbulent boundary layers, especially before flow separation, remains challenging. Existing turbulence models need validation and improvement to accurately capture these complex effects in aerodynamic flows.

**Why it matters:** Turbulent boundary layers with pressure gradients and curvature are common in aerospace, wind turbines, and atmospheric flows. Better understanding and modeling can lead to more efficient aircraft design, improved wind turbine performance, and enhanced weather prediction, including wildfire propagation mitigation.

**Key contributions:**

- Provision of new DNS data for turbulent boundary layer over a bump at Re=2 million for community use.
- Analysis of momentum budgets in a streamline coordinate system to isolate effects of pressure gradients and curvature.
- Formulation of integral-analysis-based approximations for Reynolds shear and normal stresses in inner and outer boundary layer regions.
- Development of semi-empirical stress closure models using DNS results.
- Demonstration that commonly used normalizations (friction velocity, Zagarola–Smits) are less effective in strong favourable pressure gradient regions compared to proposed approximations.

## About the professor

**Kenneth E. Jansen** — University of Colorado Boulder.

Research interests: computational fluid dynamics, flow control, aerodynamics, multiphase flows, cardiovascular flows, respiratory flows

### Research links

- [Faculty/profile page](https://experts.colorado.edu/display/fisid_147360)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Turbulent boundary layer theory
**The paper assumes:** turbulent boundary layer theory, Reynolds stress modeling, pressure gradient effects in turbulence
**Already in this field?** Skip this entirely if you already understand turbulent boundary layer fundamentals and Reynolds stress modeling in fluid dynamics.

To understand the turbulent boundary layer theory essential for this paper, two complementary learning paths are offered. The rigorous course provides a structured university-level introduction to turbulent flow concepts, including Reynolds stresses and turbulence modeling, ideal for deep foundational knowledge. The fast track offers a concise, focused playlist on turbulent boundary layers, suitable for quickly grasping key ideas relevant to the DNS analysis and Reynolds stress modeling in the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Turbulent flow in pipes, Turbulent flow theory & Numerical, Turbulent flow, Fluid mechanics, Hydraulics](https://www.youtube.com/playlist?list=PLzz056xzvpUWp9MaToz1Dz1Q_2tE0945m) — Professor Nidhi Trivedi · 13 videos · 2.5h across 13 episodes

**Watch only this:** Episodes 1-6, about 1.1 hours — covering Prandtl's Mixing Length Theory, Shear Stress in Turbulent Flow, Turbulent Flow in Pipe, Velocity Distribution for Turbulent Flow in Pipe, Hydrodynamically Smooth & Rough Boundaries, and Velocity Distribution for Smooth and Rough Pipes.

*Why it unblocks this paper:* This playlist by Professor Nidhi Trivedi covers fundamental turbulent flow theory including Prandtl's mixing length, turbulent shear stress, and velocity distributions in turbulent pipe flow, providing a solid theoretical foundation for understanding turbulent boundary layers and Reynolds stresses as used in the paper.

*If you want all of it:* 2.5 hours across all 13 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Turbulent boundary layers](https://www.youtube.com/playlist?list=PLcqHTXprNMIPhesMZI6gwRq6-6D9GAOWq) — Aerodynamic CFD · 10 videos · 1.3h across the first 9 episodes

**Watch only this:** Episodes 1-6, about 50 minutes — covering characteristics of turbulence, Reynolds averaging, ergodicity, Reynolds averaged Navier Stokes derivation, Reynolds stress analysis, and Boussinesq approximation with Prandtl mixing length.

*Why it unblocks this paper:* The 'Turbulent boundary layers' playlist by Aerodynamic CFD provides a concise, focused introduction to turbulent boundary layers, Reynolds averaging, Reynolds stresses, and inner/outer layer structure, directly relevant to the paper's DNS analysis and semi-empirical modeling.

*If you want all of it:* 1.3 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper, start with foundational knowledge of Direct Numerical Simulation (DNS) of turbulence, as it is the core computational method used. Then study the effects of pressure gradients and curvature on turbulent boundary layers, which are key physical phenomena analyzed in the paper. Next, explore Reynolds stress modeling and closure techniques to grasp the turbulence modeling advances proposed. Finally, focus on the paper-specific DNS turbulent boundary layer talk to get the authors' detailed insights and findings presented in their own words.

### Direct numerical simulation of turbulence *(prerequisite)*
Direct Numerical Simulation (DNS) resolves all relevant turbulence scales without modeling approximations, providing high-fidelity data essential for turbulence research. Understanding DNS fundamentals, numerical methods, and challenges is critical to appreciate the computational approach and data quality in the paper.

*How the paper uses it:* The paper uses DNS at Reynolds number 2 million to generate detailed turbulent boundary layer data over a bump.

▶ [Lec 22: Direct Numerical Simulation (DNS) to study Turbulent Flows: An Overview 1 #swayamprabha](https://www.youtube.com/watch?v=FTzRdyO3-LU) — CH 27: IIT KANPUR 04: Mechanical Engineering... · 57:26 · 1y ago

### Pressure gradient effects on turbulent boundary layers *(prerequisite)*
Pressure gradients strongly influence turbulent boundary layer development, affecting flow separation, turbulence intensity, and stability. Grasping how adverse and favorable pressure gradients modify boundary layer behavior is essential to understand the paper's focus on pressure gradient impacts.

*How the paper uses it:* The paper analyzes how sequences of adverse and favorable pressure gradients affect turbulence and flow states before separation.

▶ [Pressure gradient turbulent boundary layers around wing sections](https://www.youtube.com/watch?v=8oI3_wemoNE) — VinuesaLab | Ricardo Vinuesa · 6mo ago

### Curvature effects on turbulent boundary layers *(prerequisite)*
Surface curvature alters turbulence characteristics by stabilizing or destabilizing the flow, influencing Reynolds stresses and boundary layer structure. Understanding curvature effects is necessary to appreciate the paper's analysis of concave and convex curvature impacts on turbulence.

*How the paper uses it:* The paper studies how convex curvature stabilizes and concave curvature destabilizes the turbulent boundary layer over the bump.

▶ [Supersonic turbulent boundary layer subject to strong concave and convex wall curvatures](https://www.youtube.com/watch?v=KG31BDBuvhI) — American Physical Society · 4y ago

### Reynolds stress modeling and closure *(prerequisite)*
Reynolds stress closure models are vital for representing turbulence effects in averaged equations. Learning about existing closure approaches and their limitations provides context for the paper's development of new semi-empirical Reynolds stress models based on DNS data.

*How the paper uses it:* The paper proposes new semi-empirical Reynolds stress closure models informed by DNS momentum budget analysis.

▶ [Reynolds stress closure for the RANS-equation](https://www.youtube.com/watch?v=mg1GG89pYNU) — ICTP Science, Technology and Innovation · 8y ago

### Paper-specific DNS turbulent boundary layer talk *(paper-talk search result; attribution unverified)*
A talk by the paper's authors or a closely related detailed presentation offers the most direct and comprehensive explanation of the study's methodology, results, and implications. This enables an advanced reader to grasp nuanced insights and the authors' perspective on their contributions.

*How the paper uses it:* The authors present their DNS study, streamline coordinate analysis, and semi-empirical modeling of turbulent boundary layers over a Gaussian bump.

▶ [3D Turbulent Boundary Layers Empirical Correlations to Close Integral Relations](https://www.youtube.com/watch?v=XjdCMR7K4-E) — SWAYAM Prabha IIT Madras Channels · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the fundamental concepts needed to understand turbulent boundary layers affected by pressure gradients and curvature, as studied via direct numerical simulation (DNS) in the paper. We start with the basics of DNS to grasp the computational approach, then explore how pressure gradients and curvature influence turbulent boundary layers, followed by momentum budgets and Reynolds stress modeling, culminating in a focused look at turbulent boundary layers over complex geometries like bumps.

### Direct numerical simulation of turbulence *(prerequisite)*
Direct Numerical Simulation (DNS) is a high-fidelity computational method that resolves all scales of turbulence without modeling approximations. Understanding DNS basics helps appreciate how the paper generates detailed turbulence data over the bump.

*How the paper uses it:* The paper uses DNS at Reynolds number 2 million to produce high-resolution turbulent flow data over a Gaussian bump.

▶ [30. Direct numerical simulation of turbulent flows](https://www.youtube.com/watch?v=5rzuvd9yujQ) — Milovan Peric · 1y ago

### Pressure gradient effects on turbulent boundary layers *(prerequisite)*
Pressure gradients along a surface can either accelerate or decelerate the flow, strongly affecting turbulence intensity and flow separation. Grasping these effects is key to understanding the flow behavior analyzed in the paper.

*How the paper uses it:* The paper studies how sequences of adverse and favourable pressure gradients impact turbulence and boundary layer states before separation.

▶ [Pressure gradient turbulent boundary layers around wing sections](https://www.youtube.com/watch?v=8oI3_wemoNE) — VinuesaLab | Ricardo Vinuesa · 6mo ago

### Curvature effects on turbulent boundary layers *(prerequisite)*
Surface curvature influences turbulence by stabilizing or destabilizing the flow depending on whether it is convex or concave. This concept explains how the bump shape affects turbulence characteristics in the study.

*How the paper uses it:* The paper analyzes how convex curvature stabilizes and concave curvature destabilizes the turbulent boundary layer over the bump.

▶ [Supersonic turbulent boundary layer subject to strong concave and convex wall curvatures](https://www.youtube.com/watch?v=Q_PsKz8Q4U0) — G A · 5y ago

### Turbulent boundary layer momentum budgets
Momentum budgets break down the forces and fluxes within a turbulent boundary layer, revealing the balance between viscous, turbulent, pressure, and advective effects. This helps understand the detailed turbulence dynamics reported in the paper.

*How the paper uses it:* The authors analyze momentum budgets in a streamline-aligned coordinate system to isolate pressure gradient and curvature effects.

▶ [Turbulent Boundary Layers — Lesson 6](https://www.youtube.com/watch?v=w38S4FVYF9E) — Ansys Learning · 6y ago

### Reynolds stress modeling and closure
Reynolds stresses represent turbulent momentum transport and require modeling (closure) to solve averaged flow equations. The paper develops new semi-empirical closure models based on DNS data to improve turbulence predictions.

*How the paper uses it:* The paper proposes integral-analysis-based approximations and semi-empirical models for Reynolds stresses informed by DNS results.

▶ [Turbulence Closure Models: Reynolds Averaged Navier Stokes (RANS) & Large Eddy Simulations (LES)](https://www.youtube.com/watch?v=zIQpxmLwbXQ) — Steve Brunton · 5y ago

### Paper-specific DNS turbulent boundary layer talk *(paper-talk search result; attribution unverified)*
A focused presentation on turbulent boundary layers over complex geometries, such as bumps, provides direct insight into the paper's methodology and findings. This helps connect foundational concepts to the specific study.

*How the paper uses it:* The paper's core contribution is a DNS study of turbulent boundary layers over a Gaussian bump with pressure gradients and curvature effects.

▶ [3D Turbulent Boundary Layers Introduction](https://www.youtube.com/watch?v=vIpG1bqusDU) — SWAYAM Prabha IIT Madras Channels · 4y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's DNS study of turbulent boundary layers over a Gaussian bump. The beginner project focuses on reproducing a key visualization of Reynolds stress profiles using simplified or synthetic data, the intermediate project implements the paper's streamline coordinate system momentum budget analysis on a smaller or substitute dataset, and the advanced project extends the semi-empirical Reynolds stress closure modeling to a 3D or separated flow scenario, addressing one of the paper's stated limitations.

### Beginner — Reynolds Stress Profile Visualization
*Effort: a weekend, ~8 hours*

You build a Python Jupyter notebook that reproduces a key figure from the paper showing Reynolds shear and normal stress profiles normalized by the proposed integral approximations versus traditional friction velocity normalization. You will generate or simulate simplified turbulent boundary layer data with pressure gradient effects to plot these profiles.

**Why it shows you understood the paper:** This project shows you understand the paper's key contribution of improved Reynolds stress normalization and how pressure gradients affect turbulence intensity profiles, a fundamental turbulence modeling insight.

**Grounded in:** ‘The shear and wall-normal Reynolds stress profiles normalised by these approximations exhibit a better collapse compared with friction velocity and Zagarola–Smits normalisations in the strong favourable pressure gradient region...’ (§1 Introduction)

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib, NumPy, Pandas

**Data:** Synthetic or simplified turbulent boundary layer data generated in code to mimic Reynolds stress profiles under pressure gradients, as no authors' DNS data is publicly available.

**Build it:**

1. Review the paper's description of Reynolds stress normalization and the integral approximations proposed.
2. Write code to generate synthetic Reynolds shear and normal stress profiles representing inner and outer boundary layer regions under varying pressure gradients.
3. Implement traditional friction velocity and Zagarola–Smits normalization methods alongside the paper's integral-based normalization.
4. Plot and compare the normalized Reynolds stress profiles to reproduce the qualitative behavior shown in the paper's figures.
5. Document the code and interpretation of results in a Jupyter notebook.

**Ships as:** A Jupyter notebook with plots comparing Reynolds stress normalizations, demonstrating the improved collapse using the paper's approximations.

**Stretch goal:** Add interactivity to the plots to explore effects of varying pressure gradient strength on stress profiles.

### Intermediate — Streamline Coordinate Momentum Budget Analysis
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's core method of analyzing turbulent boundary layer momentum budgets in a streamline-aligned coordinate system (SCS) using a smaller or substitute turbulent boundary layer dataset. You compute and visualize the dominant momentum budget terms (viscous flux, turbulent shear flux, pressure gradient, advection) in inner and outer regions, comparing results to a simple baseline normalization.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel coordinate transformation and momentum budget decomposition approach, key to isolating pressure gradient and curvature effects on turbulence.

**Grounded in:** ‘The momentum budgets are analysed in the streamline-aligned coordinate system upstream of the separation region.’ (§1 Introduction)

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** A publicly available turbulent boundary layer DNS or LES dataset with velocity and pressure fields (e.g., from open turbulence databases) used as a substitute for the paper's DNS data.

**Build it:**

1. Study the paper's formulation of the streamline coordinate system and momentum budget equations.
2. Obtain a substitute turbulent boundary layer dataset with velocity and pressure fields.
3. Implement coordinate transformation to align data with local streamlines.
4. Calculate momentum budget terms (viscous flux, turbulent shear flux, pressure gradient, advection) in the SCS.
5. Visualize and compare the budget terms in inner and outer boundary layer regions.
6. Compare your results with a baseline analysis using traditional Cartesian coordinates or friction velocity normalization.

**Ships as:** A documented Jupyter notebook or Python script showing momentum budget computations and visualizations in the streamline coordinate system, with comparison to baseline methods.

**Stretch goal:** Incorporate curvature effects by modifying the coordinate system or budget terms and analyze their impact.

### Advanced — Extension of Semi-Empirical Reynolds Stress Models to 3D or Separated Flows
*Effort: few weeks, ~80+ hours*

You develop a computational study extending the paper's semi-empirical Reynolds stress closure models to a more complex flow scenario involving three-dimensional effects or separated flow regions. This involves implementing the closure models, applying them to a 3D turbulent boundary layer or separated flow dataset (DNS or LES), and evaluating model performance against baseline turbulence closures.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep comprehension of the modeling approach and ability to adapt it to more realistic engineering flows.

**Grounded in:** ‘The semi-empirical models are developed for this specific flow case and may require validation for other geometries and Reynolds numbers.’ and ‘Extension of DNS to separated flow regions and higher Reynolds numbers.’ (§ Limitations and Future Directions)

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook, possibly OpenFOAM or other CFD tools for data processing

**Data:** A publicly available 3D turbulent boundary layer or separated flow DNS/LES dataset from open turbulence databases or literature, used as a substitute for the paper's 2D bump DNS data.

**Build it:**

1. Review the paper's semi-empirical Reynolds stress closure models and their mathematical formulation.
2. Select a suitable 3D or separated flow turbulent dataset with velocity and Reynolds stress fields.
3. Implement the semi-empirical closure models in code, adapting parameters as needed for the new flow geometry.
4. Apply the models to the dataset and compute predicted Reynolds stresses.
5. Compare model predictions against actual Reynolds stresses and against a baseline turbulence model (e.g., standard RANS closure).
6. Analyze and document the model's performance, limitations, and potential improvements.

**Ships as:** A comprehensive project repository with code, analysis, and a detailed README documenting the extension and evaluation of the semi-empirical Reynolds stress models in complex flows.

**Stretch goal:** Incorporate machine learning regression to optimize model parameters for improved closure accuracy.

_The paper's authors did not release code or DNS data publicly; all projects requiring data must use synthetic data or substitute publicly available turbulent boundary layer datasets._
