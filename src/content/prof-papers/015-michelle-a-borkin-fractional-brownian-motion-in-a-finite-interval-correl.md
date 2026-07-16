---
title: "015 · Fractional Brownian motion in a finite interval: correlations effect depletion or accretion zones of particles near boundaries — Michelle A. Borkin"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-borkin"
source_hash: "780906c6bf6cb3cfa82ba357ee59d9d3df61354cd8d88d596cf769cafb0e464c"
sequence: 15
generator: "outreach-garden: managed"
---

# 015 · Fractional Brownian motion in a finite interval: correlations effect depletion or accretion zones of particles near boundaries

## At a glance

- **Professor:** Michelle A. Borkin
- **Institution:** Northeastern University
- **Paper:** [Fractional Brownian motion in a finite interval: correlations effect depletion or accretion zones of particles near boundaries](https://arxiv.org/abs/1903.08927)
- **Authors:** T Guggenberger, G Pagnini, T Vojta, R Metzler
- **Year:** 2019

## Paper overview

This paper studies how fractional Brownian motion (FBM), a model for anomalous diffusion with long-time correlations, behaves when confined within a finite interval with reflecting boundaries. Unlike normal Brownian motion, where particles distribute evenly over time, FBM shows either depletion or accumulation of particles near boundaries depending on whether the diffusion is subdiffusive or superdiffusive. This has implications for understanding particle motion in confined biological or microfluidic environments.

### Why it matters

**Research problem:** Understanding the stationary probability distribution and mean squared displacement (MSD) of fractional Brownian motion confined to a finite interval with reflecting boundary conditions, and how correlations in FBM increments affect particle distribution near boundaries.

**Why it matters:** FBM is widely used to model anomalous diffusion in complex systems such as biological cells and crowded liquids. Knowing how confinement and boundary effects alter particle distributions is crucial for interpreting experimental data and for modeling processes like molecule diffusion or tracer transport in confined environments.

**Key contributions:**

- Demonstration that the stationary probability density of reflected FBM deviates significantly from the uniform distribution found in normal Brownian motion.
- Identification that subdiffusive FBM leads to depletion zones near boundaries, while superdiffusive FBM causes accretion zones near boundaries.
- Quantification that the stationary MSD increases monotonically with the anomalous diffusion exponent α and scales proportionally to the square of the interval length L.
- Comparison of different implementations of reflecting boundary conditions and justification of the chosen approach.
- Discussion of fundamental differences between reflected FBM and FBM confined by harmonic potentials.

## About the professor

**Michelle A. Borkin** — Northeastern University.

### Research links

- [Faculty/profile page](https://vis.khoury.northeastern.edu/people/Michelle-Borkin)
- [Identity evidence](http://www.ccs.neu.edu/home/borkin)

## Learning path

To deeply understand the paper on fractional Brownian motion (FBM) in confined intervals, start with foundational knowledge on stochastic processes with memory to grasp the non-Markovian nature of FBM increments. Next, study anomalous diffusion to contextualize the deviation from classical Brownian motion that FBM models. Finally, focus on the core concept of fractional Brownian motion itself, including its simulation and properties, to directly connect with the paper's specific findings about boundary effects and particle distributions.

## Recommended videos (in order)

### Stochastic processes with memory lecture *(prerequisite)*
This section covers the fundamentals of stochastic processes that exhibit memory, which is crucial for understanding the long-range correlations inherent in fractional Brownian motion. The non-Markovian nature of FBM increments underpins the unique boundary behaviors studied in the paper.

*How the paper uses it:* Understanding the memory effects in stochastic processes is key to grasping why FBM behaves differently near boundaries compared to normal Brownian motion.

▶ [5. Stochastic Processes I](https://www.youtube.com/watch?v=TuTmC8aOQJE) — MIT OpenCourseWare · 1:17:41 · 11 years ago

### Anomalous diffusion lecture *(prerequisite)*
Anomalous diffusion lectures provide insight into diffusion processes that deviate from classical Brownian motion, including subdiffusion and superdiffusion regimes. This background is essential to appreciate the anomalous scaling and particle distribution effects observed in FBM within confined intervals.

*How the paper uses it:* The paper investigates how anomalous diffusion modeled by FBM leads to depletion or accretion zones near boundaries, making this context critical.

▶ [Prof. Ralf Metzler | Anomalous diffusion in biological membranes and their mathematical description](https://www.youtube.com/watch?v=TsaISdbDq7A) — INI Seminar Room 2 · 1:04:14 · 7 months ago

### Fractional Brownian motion lecture
This section focuses on the core stochastic process studied in the paper: fractional Brownian motion. It covers the fundamental properties, simulation techniques, and mathematical characterization of FBM, providing the necessary theoretical foundation to understand the paper's numerical simulation approach and results.

*How the paper uses it:* The paper centers on FBM confined to finite intervals with reflecting boundaries, making a deep understanding of FBM itself indispensable.

▶ [Mohamed Ndaoud - Constructing the fractional Brownian motion](https://www.youtube.com/watch?v=XXSCwm06J_w) — Institut des Hautes Etudes Scientifiques (IHES) · 21:16

### Authors' talk on fractional Brownian motion boundaries *(the paper's own talk)*
While no direct recorded talk by the paper's authors on this exact work was found, talks by experts on fractional Brownian motion simulation and properties provide valuable insights into the numerical methods and theoretical challenges relevant to the paper's approach.

*How the paper uses it:* The paper relies heavily on simulation of FBM with reflecting boundaries; expert talks on FBM simulation methods complement understanding of their approach.

▶ [How to Simulate Fractional Brownian Motion (fBm) via Davies-Harte](https://www.youtube.com/watch?v=qQYgbIYz9i0) — Roman Paolucci · 23:56 · 1 year ago
