---
title: "019 · Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty — Fangxing Li"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fli6"
source_hash: "709ddf6058cc4dcc9ddf6c436890e6ee6c1406ef8e4d0128fdf1c7a4b3735609"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty, start with foundational knowledge on distributionally robust optimization, chance-constrained optimization, economic dispatch in power systems, and second-order cone programming. These prerequisites build the mathematical and domain-specific background needed to grasp the novel ADRCC-OPF model. Finally, focus on the core concept of adjustable distributionally robust chance-constrained optimization to directly connect with the paper's main methodological contribution.

### Distributionally robust optimization lecture *(prerequisite)*
Distributionally robust optimization (DRO) provides the theoretical foundation for modeling uncertainty without strict distributional assumptions, which is central to the paper's approach. These lectures cover DRO theory and applications, helping understand how the paper uses moment-based ambiguity sets to handle wind power forecast errors.

*How the paper uses it:* The paper's ADRCC-OPF model is distributionally robust by using only first and second moments of wind forecast errors instead of assuming a specific distribution.

▶ [Distributional Robust Optimization, Online Linear Programming, Yinyu Ye, Stanford University](https://www.youtube.com/watch?v=7l6mi2e94yw) — 运筹OR帷幄(Operation Research China Society) · 1:27:49 · 4 years ago

### Chance-constrained optimization lecture *(prerequisite)*
Chance-constrained optimization introduces probabilistic constraints that ensure system reliability under uncertainty, a core mathematical framework used in the paper. These lectures explain how chance constraints work and their role in balancing risk and cost.

*How the paper uses it:* The paper formulates economic dispatch with chance constraints to manage the risk of violating operational limits under wind uncertainty.

▶ [Chance constraints](https://www.youtube.com/watch?v=FRLmJZEsS44) — Dr. Clausen · 5 years ago

### Economic dispatch in power systems lecture *(prerequisite)*
Economic dispatch is the fundamental operational problem addressed by the paper. These lectures provide essential background on how power generation is optimally scheduled to meet demand at minimum cost, setting the stage for understanding the paper's optimization model.

*How the paper uses it:* The paper proposes an economic dispatch model that incorporates wind power uncertainty and chance constraints.

▶ [03- Introduction to Optimization and Economic Dispatch, part 1](https://www.youtube.com/watch?v=ufODuY6PImU) — Daniel Kirschen · 1:11:58

### Second-order cone programming lecture *(prerequisite)*
Second-order cone programming (SOCP) is the mathematical optimization technique used to solve the ADRCC-OPF model efficiently. These lectures explain SOCP formulations and solution methods, enabling comprehension of the paper's computational approach.

*How the paper uses it:* The ADRCC-OPF model is formulated as a second-order cone program to handle the adjustable and distributionally robust chance constraints.

▶ [EE563 Convex Optimization - Second-Order Cone Programming](https://www.youtube.com/watch?v=uHFNDDoPkVc) — Zubair Khalid · 29:01

### Adjustable distributionally robust chance-constrained optimization lecture
This concept directly addresses the paper's central methodological innovation: tuning the robustness level of chance constraints to balance cost and reliability under uncertain wind power. The selected lectures provide advanced insights into adjustable and distributionally robust chance-constrained optimization frameworks.

*How the paper uses it:* The paper's key contribution is the ADRCC-OPF model that allows adjustable robustness in chance constraints for economic dispatch under wind uncertainty.

▶ [Understanding Chance-Constrained Optimization](https://www.youtube.com/watch?v=YSIIs27yxvU) — Keerthi Chacko: Control and Optimization · 13:20

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of economic dispatch in power systems, which is the operational problem the paper addresses. Next, build intuition on chance-constrained optimization to grasp how probabilistic constraints manage uncertainty. Then, study distributionally robust optimization to see how uncertainty is modeled without strict distribution assumptions. Finally, explore second-order cone programming as the mathematical tool used to solve the proposed model, and conclude with the adjustable distributionally robust chance-constrained optimization concept that is central to the paper's novel approach.

### Economic dispatch in power systems lecture *(prerequisite)*
Economic dispatch is the process of determining the optimal output of multiple power generation units to meet demand at the lowest cost while respecting operational constraints. Understanding this foundational concept is essential to grasp the paper’s focus on optimizing power system operations under uncertainty.

*How the paper uses it:* The paper proposes an improved economic dispatch model that accounts for wind power uncertainty.

▶ [Lec 01 Economic Load Dispatch Introduction, objective and its ...](https://www.youtube.com/watch?v=J4WGO3VzPCo) — Chinmay Deshpande · 10:36

### Chance-constrained optimization lecture *(prerequisite)*
Chance-constrained optimization incorporates probabilistic constraints to ensure that certain conditions hold with a specified probability, allowing for controlled risk in decision-making under uncertainty. This framework is key to managing the variability of wind power in the paper’s model.

*How the paper uses it:* The paper uses chance constraints to handle wind power forecast uncertainty with a controllable risk level.

▶ [Understanding Chance-Constrained Optimization](https://www.youtube.com/watch?v=YSIIs27yxvU) — Keerthi Chacko: Control and Optimization · 13:20

### Distributionally robust optimization lecture *(prerequisite)*
Distributionally robust optimization models uncertainty by considering all probability distributions consistent with known moments (like mean and covariance), avoiding reliance on a single assumed distribution. This approach provides a safeguard against model misspecification, which is critical for the paper’s wind uncertainty modeling.

*How the paper uses it:* The paper’s ADRCC-OPF model is distributionally robust, using only first and second moments of wind forecast errors.

▶ [Introduction to Distributionally Robust Optimization](https://www.youtube.com/watch?v=Kfu-qYGWuhY) — PSMR UMONS · 19:29 · 5 years ago

### Second-order cone programming lecture *(prerequisite)*
Second-order cone programming (SOCP) is a convex optimization technique that efficiently solves problems with quadratic and conic constraints. Understanding SOCP is important because the paper formulates its adjustable distributionally robust chance-constrained model as an SOCP for computational tractability.

*How the paper uses it:* The ADRCC-OPF model is formulated as a second-order cone program to solve the optimization efficiently.

▶ [EE563 Convex Optimization - Second-Order Cone Programming](https://www.youtube.com/watch?v=uHFNDDoPkVc) — Zubair Khalid · 29:01

## Already in your library

- [Daniel Kuhn: Data-driven and Distributionally Robust ...](https://www.youtube.com/watch?v=b4lJENGAeEA) — also for: Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty (Fangxing Li)
- [Lecture 8 | Second Order Cone Programming (SOCP)](https://www.youtube.com/watch?v=sVbcJx4g-LQ) — also for: Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty (Fangxing Li)
- [Distributionally Robust Chance-Constrained Programs under ...](https://www.youtube.com/watch?v=tisRmRCJE08) — also for: Adjustable and distributionally robust chance-constrained economic dispatch considering wind power uncertainty (Fangxing Li)
