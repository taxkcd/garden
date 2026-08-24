---
title: "479 · Real-Time 3D Simulation of Heat-Induced Air Turbulence — Jinwei Ye"
date: 2026-08-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jinwei-ye"
source_hash: "45fb7a5cdda0d0a000559264104b3ad2a5b0591252774da8acac8864bbb79f22"
sequence: 479
generator: "outreach-garden: managed"
---

# 479 · Real-Time 3D Simulation of Heat-Induced Air Turbulence

## At a glance

- **Professor:** Jinwei Ye
- **Institution:** George Mason University
- **Paper:** [Real-Time 3D Simulation of Heat-Induced Air Turbulence](https://doi.org/10.48550/arXiv.2603.02048)
- **Authors:** Wanqi Yuan, Ethan Chung, Man Luo, Suren Jayasuriya, Huaijin Chen, Jinwei Ye, Nianyi Li
- **Year:** 2026

## Paper overview

This paper presents a real-time simulation and rendering system that models heat-induced air turbulence in 3D. It couples a particle-based fluid simulation with curved ray tracing to produce realistic, multi-view consistent optical distortions caused by heat haze, such as mirages or heat shimmer. The system runs interactively and matches real-world observations better than previous 2D image-based methods.

### Why it matters

**Research problem:** Heat-induced air turbulence causes complex, depth-dependent optical distortions that are difficult to simulate interactively and consistently across multiple viewpoints because it requires coupling thermal fluid dynamics with refractive light transport in a 3D volume.

**Why it matters:** Accurate and efficient simulation of heat haze is valuable for cinematic visual effects, scientific visualization, and generating datasets for computer vision. Existing real-time methods lack multi-view coherence and do not model a full 3D refractive volume, limiting realism and applicability in VR/AR and multi-camera setups.

**Key contributions:**

- Integration of heat-driven thermofluid simulation and volumetric refractive rendering into a single system producing a shared 3D refractive volume observed consistently from multiple viewpoints.
- Augmentation of compressible SPH with temperature transport and buoyancy/pressure-driven motion to generate physically plausible plume dynamics suitable for real-time refractive rendering.
- Introduction of spatially adaptive step-size curved-ray integration that concentrates computation near strong refractive-index gradients to improve efficiency while preserving detail.
- Evaluation against real-world video captures and image-based baselines demonstrating improved depth-dependent distortion and multi-view 3D consistency.

## About the professor

**Jinwei Ye** — Dr., Computer Vision, George Mason University.

Research interests: Visual Computing, Computer Vision, Imaging

### Research links

- [Faculty/profile page](https://ivlab.cs.gmu.edu/index.html)
- [Identity evidence](https://ivlab.cse.lsu.edu)
- [Resolved homepage](https://ivlab.cs.gmu.edu/)
- [Lab website](https://ivlab.cs.gmu.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Smoothed Particle Hydrodynamics
**The paper assumes:** particle-based fluid simulation, compressible fluid dynamics, numerical integration of SPH equations
**Already in this field?** Skip this entirely if you already understand particle-based fluid simulation methods, especially Smoothed Particle Hydrodynamics and its application to compressible thermofluids.

To understand the core simulation method used in the paper—compressible Smoothed Particle Hydrodynamics (SPH) augmented with temperature transport, buoyancy, and pressure-driven motion—this background will build foundational knowledge of SPH and fluid dynamics principles. The rigorous course offers a deep dive into computational fluid dynamics concepts essential for grasping the physics and numerical methods behind the simulation, while the fast track provides a concise, intuitive introduction to particle systems and forces relevant to SPH, suitable for quickly gaining practical insight.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computational Fluid Dynamics by Mr. P Venkata Mahesh - ELRV](https://www.youtube.com/playlist?list=PLzkMouYverALERifT6ak9BSUpjc0w_RYc) — Institute of Aeronautical Engineering · 31 videos · 17.3h across 31 episodes

**Watch only this:** Episodes 1 to 8 (Introduction to Computational Fluid Dynamics, Models of Flow & Substantial Derivative, Divergence of Velocity, Continuity Equation, The Momentum Equation, Energy Equation, Conversion of Non Conservative Form to Conservative Form Parts 1 & 2), about 4.4 hours — these cover the core fluid dynamics and governing equations relevant to SPH.

*Why it unblocks this paper:* This university-level Computational Fluid Dynamics course covers fundamental fluid dynamics equations, numerical methods, and modeling approaches that underpin SPH simulation. It provides the rigorous theoretical and practical foundation needed to understand the paper's thermofluid simulation and its numerical integration.

*If you want all of it:* Approximately 17.3 hours across all 31 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Particles , Forces (OLD)](https://www.youtube.com/playlist?list=PLnlHkTValtGcLD8EtnV8XNEK4w1RH6SnI) — Skydesign · 14 videos · 5.1h across 14 episodes

**Watch only this:** Episodes 1 to 5 (Feedback Particles, Interactive Particles, 3D shapes and particles, Audioreactive particles, The jellyfish - animating SOPs with TOPs), about 1.75 hours — these episodes introduce particle behavior and forces relevant to SPH.

*Why it unblocks this paper:* This short-form playlist on particles and forces provides an accessible, visual introduction to particle-based systems and their dynamics, which is foundational for understanding SPH simulation at an intuitive level. It is well suited for quickly grasping the key concepts of particle interactions and forces without deep mathematical detail.

*If you want all of it:* About 5.1 hours across all 14 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on real-time 3D simulation of heat-induced air turbulence, start by building a solid foundation in the physics of heat-induced air turbulence and the numerical methods used for efficient simulation, such as adaptive step-size numerical integration and compressible Smoothed Particle Hydrodynamics (SPH). Then, focus on the core concept of curved ray tracing for volumetric refraction, which is critical for rendering the optical distortions caused by turbulence. Finally, review the authors' own talk or related advanced presentations to see how these components integrate into their novel real-time system.

### Heat-induced air turbulence physics *(prerequisite)*
Understanding the fundamental physical phenomena driving heat-induced air turbulence is essential, as it underpins the fluid dynamics and optical distortion modeling in the paper. The selected lecture from Caltech provides a rigorous, research-level treatment of fluid dynamics and turbulence, suitable for advanced readers.

*How the paper uses it:* The paper models heat transport, buoyancy, and pressure-driven motion to simulate plume dynamics and density variations causing optical distortions.

▶ [Fluid Dynamics: From Disturbances to Turbulence, with Salvador Gomez](https://www.youtube.com/watch?v=tM2rkdX7r8Q) — caltech · 40:08 · 5 years ago

### Adaptive step-size numerical integration *(prerequisite)*
Adaptive step-size numerical integration is a key numerical technique used in the paper to efficiently and accurately perform curved ray tracing through refractive volumes. The NPTEL lecture on adaptive step size Runge Kutta schemes offers a detailed and mathematically rigorous explanation suitable for graduate-level understanding.

*How the paper uses it:* The authors introduce spatially adaptive step-size integration for curved-ray tracing to refine steps near strong refractive-index gradients and relax them in smooth regions.

▶ [Lecture 33 -  Adaptive step size Runge Kutta scheme](https://www.youtube.com/watch?v=osHgLsObORA) — nptelhrd · 57:55 · 18 years ago

### Compressible SPH thermofluid simulation *(prerequisite)*
Compressible Smoothed Particle Hydrodynamics (SPH) is the core fluid simulation method used to model heat transport and buoyancy in the system. The lecture by Volker Springel from the Max Planck Institute is a comprehensive, research-level presentation on SPH, providing deep insights into the method's theoretical and practical aspects.

*How the paper uses it:* The paper augments compressible SPH with temperature transport and buoyancy/pressure-driven motion to generate physically plausible plume dynamics.

▶ [Collisionless Dynamics and Smoothed Particle Hydrodynamics, Part 1 - Volker Springel](https://www.youtube.com/watch?v=eSuV3ocghSI) — Institute for Advanced Study · 1:39:15 · 9y ago

### Curved ray tracing for volumetric refraction
Curved ray tracing is the key rendering technique used to simulate light distortion through the 3D refractive volumes caused by heat haze. The lecture from the University of Utah on volume rendering provides an advanced, academic-level overview of volume rendering techniques, including ray tracing approaches, which is directly relevant to the paper's rendering method.

*How the paper uses it:* The system uses curved ray integration through a shared 3D refractive volume to produce multi-view consistent optical distortions.

▶ [Interactive Graphics 25 - Volume Rendering](https://www.youtube.com/watch?v=y4KdxaMC69w) — Cem Yuksel · 1:10:11 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on real-time 3D simulation of heat-induced air turbulence, start by building a foundation in the physics of heat-driven air turbulence and fluid dynamics. Then learn about the numerical method used for fluid simulation, Smoothed Particle Hydrodynamics (SPH), focusing on its compressible thermofluid variant. Next, grasp the concept of adaptive step-size numerical integration, which improves computational efficiency in ray tracing. Finally, explore curved ray tracing techniques for volumetric refraction to understand how the paper achieves realistic rendering of optical distortions caused by heat haze.

### Heat-induced air turbulence physics *(prerequisite)*
This section introduces the fundamental physical phenomena behind heat-induced air turbulence, including how temperature differences cause air density variations and complex turbulent flows. Understanding these basics helps grasp why heat haze causes depth-dependent optical distortions and why simulating these effects is challenging.

*How the paper uses it:* The paper simulates heat-induced air turbulence by modeling temperature transport, buoyancy, and pressure-driven motion to reproduce realistic plume dynamics.

▶ [What Is Turbulence?  Turbulent Fluid Dynamics are Everywhere](https://www.youtube.com/watch?v=v5IoP9Pc-Y0) — Steve Brunton · 29:59 · 5 years ago

### Compressible SPH thermofluid simulation *(prerequisite)*
Smoothed Particle Hydrodynamics (SPH) is a meshless particle-based method for simulating fluids. This video explains the core SPH concepts and how it can be extended to model compressible fluids with heat transport and buoyancy, which are essential for simulating thermally driven air turbulence in real time.

*How the paper uses it:* The authors augment compressible SPH with temperature transport and buoyancy to simulate the fluid dynamics of heat plumes in their system.

▶ [Smoothed Particle Hydrodynamics overview lecture](https://www.youtube.com/watch?v=2_dcwBwC0P0) — James Wurster · 52:41 · 4y ago

### Adaptive step-size numerical integration *(prerequisite)*
Adaptive step-size integration is a numerical technique that dynamically adjusts the step length during integration to balance accuracy and efficiency. This concept is important for efficiently tracing curved rays through refractive volumes where refractive index gradients vary spatially.

*How the paper uses it:* The paper introduces spatially adaptive step-size integration to accelerate curved ray tracing by refining steps near strong refractive-index gradients and relaxing them in smooth regions.

▶ [Adaptive Quadrature | Lecture 41 | Numerical Methods for Engineers](https://www.youtube.com/watch?v=U4NUXAwwR8E) — Jeffrey Chasnov · 12:00 · 5 years ago

### Curved ray tracing for volumetric refraction
Curved ray tracing simulates how light bends when passing through media with spatially varying refractive indices, such as heated air causing optical distortions. This video explains ray tracing basics and how it can be extended to handle refraction and volumetric effects, which is key to rendering realistic heat haze.

*How the paper uses it:* The system uses curved ray tracing to render multi-view consistent optical distortions caused by the 3D refractive volume of heated air.

▶ [Coding Adventure: Ray-Tracing Glass](https://www.youtube.com/watch?v=wA1KVZ1eOuA) — Sebastian Lague · 41:18 · 1 year ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Real-Time 3D Simulation of Heat-Induced Air Turbulence." The beginner project focuses on reproducing a core physical principle from the paper using familiar tools. The intermediate project involves reimplementing the core coupled SPH thermofluid simulation and curved ray tracing rendering pipeline on a simplified scale, adding adaptive step-size integration. The advanced project extends the system toward one of the paper's future directions by adapting the simulation to a different thermally driven fluid, demonstrating your ability to innovate beyond the original work.

### Beginner — Simulate and Visualize Depth-Dependent Heat Distortion Variance
*Effort: a weekend, ~8 hours*

You build a simple 2D simulation and visualization that reproduces the paper's validation result showing the linear growth of angle-of-arrival variance with distance due to heat haze distortion. Using Python and matplotlib, you simulate a set of markers at increasing distances and apply a simplified distortion model to measure variance, plotting the linear trend.

**Why it shows you understood the paper:** This project shows you grasp the physical principle of depth-dependent distortion variance and how the simulation matches real-world data, a key validation in the paper.

**Grounded in:** Validation against controlled real captures shows the simulator reproduces the linear growth of angle-of-arrival variance with distance, matching physical models and real data.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic marker positions and simulated distortion values generated by your simplified model, as no public dataset is provided.

**Build it:**

1. Implement a simple function to simulate heat-induced distortion as a function of distance.
2. Generate synthetic marker positions at increasing distances.
3. Apply the distortion function to markers and compute angle-of-arrival variance.
4. Plot variance versus distance and verify linear growth.
5. Write a README explaining the physical principle and your implementation.

**Ships as:** A Python script and notebook showing the linear variance plot with explanatory comments and README.

**Stretch goal:** Add a simple animation showing distortion evolving over time for multiple markers.

### Intermediate — Reimplement Real-Time Compressible SPH Thermofluid Simulation with Adaptive Curved Ray Tracing
*Effort: 2 weekends, ~20 hours*

You implement a simplified 3D compressible SPH thermofluid simulation that models temperature transport, buoyancy, and pressure-driven motion to generate plume dynamics. You couple this with a volumetric curved ray tracing renderer using spatially adaptive step-size integration to produce multi-view consistent heat haze distortions. You compare your results qualitatively against a naive uniform-step ray tracing baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core method of integrating SPH thermofluid simulation with adaptive curved ray tracing, reproducing the key multi-view consistent refractive volume rendering contribution.

**Grounded in:** Integration of heat-driven thermofluid simulation and volumetric refractive rendering into a single system producing a shared 3D refractive volume observed consistently from multiple viewpoints; Introduction of spatially adaptive step-size curved-ray integration that concentrates computation near strong refractive-index gradients to improve efficiency while preserving detail.

**Tech stack:** Python 3.11, NumPy, PyOpenGL or moderngl for rendering, matplotlib for visualization

**Data:** Synthetic particle data generated by your SPH simulation; no external dataset is required.

**Build it:**

1. Implement a basic compressible SPH simulation with temperature transport and buoyancy forces.
2. Simulate a small plume of heated air particles in 3D.
3. Implement volumetric curved ray tracing through the refractive index field derived from particle densities and temperatures.
4. Add spatially adaptive step-size integration for ray marching based on refractive index gradients.
5. Render the resulting heat haze distortion from multiple viewpoints and compare with uniform-step ray tracing.
6. Document your implementation and results in a README.

**Ships as:** A Python-based simulation and renderer producing multi-view consistent heat haze visualizations with adaptive ray integration, with code and documentation.

**Stretch goal:** Quantitatively measure and plot cross-view displacement divergence compared to uniform-step baseline.

### Advanced — Extend Real-Time Heat Turbulence Simulation to Thermally Driven Water Plumes
*Effort: 3+ weeks*

You extend the paper's real-time SPH thermofluid simulation and volumetric refractive rendering framework to simulate thermally driven water plumes instead of air. This involves adapting the physics model to water's thermal properties and refractive index behavior, implementing buoyancy and convection forces accordingly, and modifying the curved ray tracing to handle water's refractive index gradients. You evaluate the visual plausibility and multi-view consistency of water plume distortions.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by adapting the approach to a new thermally driven fluid, demonstrating deep comprehension and ability to innovate beyond the original system.

**Grounded in:** Current implementation focuses on air turbulence and does not yet extend to other thermally driven fluids like water; future direction includes adapting the approach to other thermally driven fluids beyond air.

**Tech stack:** Python 3.11, NumPy, PyOpenGL or moderngl, matplotlib

**Data:** Synthetic simulation data generated by your adapted SPH model for water plumes; no external dataset is available.

**Build it:**

1. Research thermal and fluid properties of water relevant to thermally driven plumes.
2. Modify the SPH simulation to incorporate water's density, viscosity, and thermal expansion coefficients.
3. Adjust the refractive index model for water's temperature-dependent behavior.
4. Implement the volumetric curved ray tracing renderer for water plume refractive volumes.
5. Simulate and render water plume heat distortions from multiple viewpoints.
6. Evaluate visual realism and multi-view consistency, documenting challenges and results.

**Ships as:** A codebase and report demonstrating a real-time simulation and rendering of thermally driven water plumes with multi-view consistent refractive distortions.

**Stretch goal:** Incorporate higher-fidelity turbulence modeling or compare with real water plume video captures if available.
