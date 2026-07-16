---
title: "019 · Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty — Fangxing Li"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fli6"
source_hash: "85e74dba0a0addcd7edb8a4c0eec7e9e7493e7b9539f2a9cd482ba8b3dfe3347"
sequence: 19
generator: "outreach-garden: managed"
---

# 019 · Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty

## At a glance

- **Professor:** Fangxing Li
- **Institution:** University of Tennessee
- **Paper:** [Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty](https://link.springer.com/article/10.1007/s40565-019-0526-5)
- **Authors:** Xin Fang, Bri-Mathias Hodge, Fangxing Li, Ershun Du, Chongqing Kang
- **Year:** 2019

## Paper overview

This paper proposes a new optimization model for power system economic dispatch that accounts for uncertainties in wind power forecasts without assuming a specific error distribution. The model allows system operators to adjust the robustness of constraints to balance cost and reliability, improving operational decisions under wind power variability.

### Why it matters

**Research problem:** How to model and solve the economic dispatch problem in power systems considering the uncertainty of wind power forecasts without relying on strict distributional assumptions, and how to balance system reliability and operational cost.

**Why it matters:** Wind power output is uncertain and variable, which challenges reliable and economic power system operation. Traditional models assuming Gaussian errors may underestimate risks, while fully robust models can be overly conservative and costly. A flexible approach is needed to better manage these trade-offs.

**Key contributions:**

- Proposed ADRCC-OPF model that is both adjustable and distributionally robust for wind power uncertainty.
- Demonstrated how to select an adjustable coefficient to balance conservativeness and cost based on historical data.
- Provided analysis comparing Gaussian, symmetric distributionally robust, and fully distributionally robust assumptions.
- Validated the model on modified PJM 5-bus and IEEE 118-bus systems using real historical wind forecast error data.

## About the professor

**Fangxing Li** — John W. Fisher Professor, Department of Electrical Engineering and Computer Science (EECS), University of Tennessee.

Research interests: advancing the economic, resilient, and intelligent operation and planning of modern electric power systems

### Research links

- [Faculty/profile page](http://web.eecs.utk.edu/~fli6)
- [Resolved homepage](http://web.eecs.utk.edu/~fli6/)
- [Lab website](https://enliten.utk.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=Xlzr3HMAAAAJ&hl=en)

## Learning path

To deeply understand the paper on adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty, start with foundational concepts in distributionally robust optimization and chance-constrained optimization to grasp the uncertainty modeling and probabilistic constraint handling. Then, build knowledge on economic dispatch under uncertainty and second-order cone programming, which are essential for the problem context and mathematical formulation. Finally, focus on the core concept of the paper by reviewing the authors' own talk or closely related advanced talks on distributionally robust chance-constrained programs to directly connect theory with the paper's contributions.

## Recommended videos (in order)

### Distributionally robust optimization lecture *(prerequisite)*
This section covers the fundamental theory and applications of distributionally robust optimization, which is crucial for understanding how the paper models wind power uncertainty without strict distributional assumptions. The selected lecture provides a rigorous and advanced treatment suitable for graduate-level readers.

*How the paper uses it:* The paper's ADRCC-OPF model uses distributionally robust optimization to represent wind forecast errors by their first and second moments without assuming a specific distribution.

▶ [Daniel Kuhn: Data-driven and Distributionally Robust ...](https://www.youtube.com/watch?v=b4lJENGAeEA) — DTU: Lectures on Power & Energy Systems · 1:18:16

### Chance-constrained optimization lecture *(prerequisite)*
Chance constraints form the mathematical backbone for handling probabilistic constraints under uncertainty in optimization problems. This lecture offers a detailed and mathematically rigorous explanation of chance constraints, which is essential to understand the chance-constrained aspect of the ADRCC-OPF model.

*How the paper uses it:* The paper formulates chance constraints to ensure system reliability under uncertain wind power, balancing violation probabilities with operational cost.

▶ [Gradient-based stochastic optimization under chance constraints](https://www.youtube.com/watch?v=GbejSkpPJbg) — OPTIMA ARC · 1:05:17

### Economic dispatch under uncertainty lecture *(prerequisite)*
This section contextualizes the power system operational problem addressed by the paper, focusing on economic dispatch under uncertainty. The selected talk provides advanced modeling techniques and robust optimization approaches relevant to power system operations with renewable integration.

*How the paper uses it:* The paper addresses economic dispatch considering wind power uncertainty, aiming to improve operational decisions balancing cost and reliability.

▶ [Andy Xu Sun: Robust Optimization in Electric Power System ...](https://www.youtube.com/watch?v=_mRMOrdbRR4) — CAM - Cornell Center for Applied Math Colloquium · 1:00:52

### Second-order cone programming lecture *(prerequisite)*
Second-order cone programming (SOCP) is the mathematical optimization technique used to formulate and solve the ADRCC-OPF model. This lecture offers a comprehensive and advanced introduction to SOCP, enabling understanding of the model's computational approach.

*How the paper uses it:* The ADRCC-OPF model is formulated as a second-order cone program to efficiently solve the adjustable and distributionally robust chance-constrained optimization problem.

▶ [Lecture 8 | Second Order Cone Programming (SOCP)](https://www.youtube.com/watch?v=sVbcJx4g-LQ) — Ahmad Bazzi · 1:04:46

### Authors' talk on ADRCC-OPF *(the paper's own talk)*
This section features the authors' own presentation or closely related advanced talks on distributionally robust chance-constrained programs, providing direct insight into the paper's model, methodology, and results. It is the most direct and authoritative source for understanding the paper's contributions.

*How the paper uses it:* The authors' talk presents the ADRCC-OPF model and its validation, directly reflecting the paper's core contributions and findings.

▶ [Distributionally Robust Chance-Constrained Programs under ...](https://www.youtube.com/watch?v=tisRmRCJE08) — Discrete Optimization Talks · 27:49
