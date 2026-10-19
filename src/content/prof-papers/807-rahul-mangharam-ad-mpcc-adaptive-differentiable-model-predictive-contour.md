---
title: "807 · AD-MPCC: Adaptive Differentiable Model Predictive Contouring Control for Autonomous Racing — Rahul Mangharam"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rahul-mangharam"
source_hash: "cc83523f06d64696569f753f04493d8a750c03a55b9ae198b83867776988f2d7"
sequence: 807
generator: "outreach-garden: managed"
---

# 807 · AD-MPCC: Adaptive Differentiable Model Predictive Contouring Control for Autonomous Racing

## At a glance

- **Professor:** Rahul Mangharam
- **Institution:** University of Pennsylvania
- **Paper:** [AD-MPCC: Adaptive Differentiable Model Predictive Contouring Control for Autonomous Racing](https://arxiv.org/pdf/2607.00141)
- **Authors:** Nam T. Nguyen, Binh Nguyen, Ahmad Amine, Thanh Vo-Duy, Rahul Mangharam, Truong X. Nghiem
- **Year:** 2026

## Paper overview

This paper introduces AD-MPCC, a control framework for autonomous racing cars that adapts in real-time to changing road surfaces by estimating tire-road interaction parameters and tuning control objectives. It combines a physics-based tire model with differentiable programming and machine learning to improve safety and racing speed on both known and unknown tracks.

### Why it matters

**Research problem:** Autonomous racing vehicles must operate safely and efficiently at their physical limits despite varying and uncertain road-surface conditions that affect tire-road interactions and vehicle dynamics. Traditional model predictive contouring control (MPCC) methods use fixed parameters and weights, limiting performance and safety on multi-surface tracks.

**Why it matters:** Improving autonomous racing control under varying road conditions pushes the boundaries of vehicle control at physical limits, which has broader implications for safety-critical autonomous systems such as autonomous vehicles and robotics. Ensuring safety and performance in uncertain environments is crucial for real-world deployment.

**Key contributions:**

- A novel AD-MPCC framework combining online tire parameter estimation and differentiable MPCC weight adaptation for autonomous racing.
- A prior-regularized moving horizon estimation scheme with exponentially decaying weights for rapid online estimation of Pacejka tire parameters.
- Development of a differentiable MPCC formulation enabling gradient-based tuning of objective weights through implicit optimality conditions.
- Introduction of a Pacejka-informed machine learning model to approximate optimal MPCC weights for real-time control.
- Comprehensive simulation validation on single- and multi-surface racetracks demonstrating improved lap times and safety.

## About the professor

**Rahul Mangharam** — University of Pennsylvania.

Research interests: safety-critical autonomous systems, machine learning, control theory, formal methods

### Research links

- [Faculty/profile page](http://www.seas.upenn.edu/~rahulm)
- [Lab website](https://xlab.upenn.edu/)
- [LinkedIn](https://www.linkedin.com/in/mangharam)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Model Predictive Control
**The paper assumes:** model predictive control, constrained nonlinear optimization, optimal control theory
**Already in this field?** Skip this entirely if you already understand the fundamentals of model predictive control and its optimization-based formulation.

Understanding Model Predictive Control (MPC) is essential to grasp the core methodology behind the AD-MPCC framework in this paper, as it builds upon MPC principles for adaptive and differentiable control in autonomous racing. The rigorous course option offers a deep, structured university-level treatment of MPC theory and applications, ideal for readers seeking comprehensive mastery. The fast track provides a concise, well-produced explainer series that covers the fundamental concepts and practical insights into MPC quickly, suitable for readers who want a solid conceptual foundation without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Model Predictive Control: Theory and Applications](https://www.youtube.com/playlist?list=PLyqSpQzTE6M91gU9WE5AOMhAkCf6HGbey) — NPTEL-NOC IITM · 84 videos · 20.4h across the first 60 episodes

**Watch only this:** Episodes 1-8 (INTRODUCTION - MODEL PREDICTIVE CONTROL : THEORY AND APPLICATIONS through Introduction to Model Predictive Control), about 2.7 hours — these cover the fundamentals of MPC including its features, historical context, and modeling essentials needed to understand MPCC.

*Why it unblocks this paper:* This NPTEL-NOC IITM course on Model Predictive Control offers a thorough, university-level introduction to MPC theory and applications, covering the mathematical foundations and practical aspects necessary to understand the control problem formulation and optimization in AD-MPCC.

*If you want all of it:* About 20.4 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Understanding Model Predictive Control](https://www.youtube.com/playlist?list=PLn8PRpmsu08ozoeoXgxPSBKLyd4YEHww8) — MATLAB · 10 videos · 1.6h across 10 episodes

**Watch only this:** Episodes 1-4 (Why Use Model Predictive Control? through Adaptive, Gain-Scheduled and Nonlinear Model Predictive Control), about 36 minutes — these episodes give a solid conceptual overview and introduce adaptive MPC relevant to the paper's approach.

*Why it unblocks this paper:* This MATLAB series 'Understanding Model Predictive Control' provides a concise and clear introduction to MPC concepts, design parameters, and adaptive MPC variants, which aligns well with the adaptive and differentiable aspects of the AD-MPCC framework.

*If you want all of it:* About 1.6 hours across all 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AD-MPCC framework, start by building foundational knowledge on the key prerequisite concepts: the Pacejka tire model, moving horizon estimation (MHE), and differentiable programming for control. These provide the physics-based modeling, online parameter estimation, and gradient-based optimization tools central to the paper. Then, study the core control method, Model Predictive Contouring Control (MPCC), which the paper extends adaptively. Finally, watch the authors' own talk on MPCC to connect these concepts directly to their novel adaptive framework for autonomous racing.

### Pacejka Tire Model *(prerequisite)*
The Pacejka tire model is a fundamental physics-based model describing tire-road interactions, crucial for accurately capturing vehicle dynamics under varying surface conditions. Understanding this model is essential since the paper estimates Pacejka parameters online to adapt control to changing road friction.

*How the paper uses it:* The paper uses the Pacejka tire model as the basis for online tire parameter estimation to capture road-surface changes.

▶ [Vehicle Dynamics & Control - 08 Lateral tire models](https://www.youtube.com/watch?v=Rl9WEXMmIW4) — Prof. Georg Schildbach, University of Luebeck · 6y ago

### Moving Horizon Estimation *(prerequisite)*
Moving Horizon Estimation (MHE) is an advanced state and parameter estimation technique that uses a sliding window of recent measurements to estimate system states and parameters robustly. The paper employs a prior-regularized MHE with exponential weighting to estimate tire parameters in real time, enabling adaptation to surface transitions.

*How the paper uses it:* The paper formulates a prior-regularized MHE problem with exponentially decaying weights for rapid online estimation of Pacejka tire parameters.

▶ [Differentiable Moving Horizon Estimation for Robust Flight Control (IEEE CDC 2021)](https://www.youtube.com/watch?v=TcnltFh4x8M) — CORE Lab@NUS · 4y ago

### Model Predictive Contouring Control
Model Predictive Contouring Control (MPCC) is a nonlinear optimal control method designed for path-following tasks, balancing tracking accuracy and speed. The paper extends MPCC by adaptively tuning its weights and parameters to improve autonomous racing performance under varying road conditions.

*How the paper uses it:* MPCC is the central control method extended adaptively in the AD-MPCC framework.

▶ [\[CMU - F1Tenth\] Model Predictive Contouring Control for F1Tenth Racing](https://www.youtube.com/watch?v=_X9e2xBAM0o) — Hariharan Ravichandran · 1y ago

### AD-MPCC authors talk *(paper-talk search result; attribution unverified)*
The authors' own presentation provides direct insights into the design, implementation, and evaluation of the AD-MPCC framework, combining online tire parameter estimation with differentiable MPCC weight adaptation for autonomous racing.

*How the paper uses it:* This talk is the direct source for the authors' presentation of their novel adaptive control framework.

▶ [Autonomous Driving using Model predictive contouring control (MPCC)](https://www.youtube.com/watch?v=h1aBeLiF1O8) — Abhijeet Kulkarni · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the AD-MPCC framework for adaptive autonomous racing control. Start with the physics-based Pacejka tire model to grasp tire-road interactions, then learn Moving Horizon Estimation for real-time parameter estimation. Next, explore Model Predictive Contouring Control as the core control method, followed by Differentiable Programming to understand gradient-based tuning of control objectives. This sequence builds intuition progressively to appreciate the paper's novel adaptive control approach.

### Pacejka Tire Model *(prerequisite)*
The Pacejka tire model, also known as the 'Magic Formula,' mathematically describes how tires generate forces based on slip angles and road conditions. Understanding this model is crucial because it captures the physics of tire-road interactions that directly affect vehicle dynamics and control.

*How the paper uses it:* The paper uses the Pacejka model to estimate tire parameters online, enabling adaptation to changing road surfaces.

▶ [Vehicle Dynamics & Control - 08 Lateral tire models](https://www.youtube.com/watch?v=Rl9WEXMmIW4) — Prof. Georg Schildbach, University of Luebeck · 6y ago

### Moving Horizon Estimation *(prerequisite)*
Moving Horizon Estimation (MHE) is a technique for estimating system states or parameters by solving an optimization problem over a recent time window, giving more weight to recent data. This approach helps track changes in system behavior in real time, which is essential for adaptive control.

*How the paper uses it:* The paper applies a prior-regularized MHE with exponential weighting to estimate Pacejka tire parameters online during racing.

▶ [Moving Horizon Estimation (MHE) with EKF Benchmark](https://www.youtube.com/watch?v=m6PIvrIMno4) — Elmar Ismayilov · 1mo ago

### Model Predictive Contouring Control
Model Predictive Contouring Control (MPCC) is a control strategy that optimizes a vehicle's trajectory to follow a desired path while considering dynamic constraints and objectives like speed and safety. It is widely used in autonomous racing for precise path tracking at high speeds.

*How the paper uses it:* AD-MPCC builds upon MPCC by adaptively tuning its objective weights and parameters to improve performance on varying surfaces.

▶ [\[CMU - F1Tenth\] Model Predictive Contouring Control for F1Tenth Racing](https://www.youtube.com/watch?v=_X9e2xBAM0o) — Hariharan Ravichandran · 1y ago

### AD-MPCC authors talk *(paper-talk search result; attribution unverified)*
A direct presentation from the authors explaining the AD-MPCC framework, its motivation, and key innovations. This talk helps connect all concepts and see how they integrate into a real autonomous racing control system.

*How the paper uses it:* Provides an overview of the novel adaptive control framework combining online estimation and differentiable programming for autonomous racing.

▶ [Autonomous Driving using Model predictive contouring control (MPCC)](https://www.youtube.com/watch?v=h1aBeLiF1O8) — Abhijeet Kulkarni · 5y ago

## Already in your library

- [Differentiable Programming (Part 1)](https://www.youtube.com/watch?v=R8b-vTMvN80) — also for: PRISM: Differentiable Analysis-by-Synthesis for Fixel Recovery in Diffusion MRI (Eleftherios Garyfallidis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the AD-MPCC framework for adaptive control in autonomous racing. Starting with a focused implementation of the online tire parameter estimation, you then build and extend the full AD-MPCC pipeline using the authors' released code. Finally, you tackle a real limitation of the paper by exploring real-world data adaptation or theoretical stability analysis, showing readiness for research-level work.

### Beginner — Online Tire Parameter Estimation with Moving Horizon Estimation
*Effort: a weekend, ~8 hours*

You implement a simplified moving horizon estimation (MHE) scheme with exponentially decaying weights to estimate Pacejka tire model parameters from synthetic vehicle sensor data. You simulate a scenario with changing road friction and demonstrate how the estimator adapts to these changes over time.

**Why it shows you understood the paper:** This project shows you grasp the key concept of online parameter estimation under changing conditions, a core component of AD-MPCC that enables adaptive control.

**Grounded in:** A prior-regularized moving horizon estimation scheme with exponentially decaying weights for rapid online estimation of Pacejka tire parameters.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic vehicle sensor data simulating lateral forces and slip angles with step changes in road friction; generated within the project.

**Build it:**

1. Implement the Pacejka tire model equations to simulate tire forces given parameters and slip angles.
2. Generate synthetic sensor data simulating a vehicle driving over surfaces with changing friction coefficients.
3. Formulate and implement the moving horizon estimation problem with exponential weighting of recent data.
4. Run the estimator on the synthetic data and plot estimated tire parameters over time to show adaptation.
5. Document the implementation, assumptions, and results in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook demonstrating the MHE estimator adapting tire parameters to changing road conditions with plots and explanations.

**Stretch goal:** Add noise and disturbances to the synthetic data and evaluate estimator robustness.

### Intermediate — Reproducing AD-MPCC Adaptive Control on Simulated Multi-Surface Track
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' AD-MPCC codebase from https://github.com/nxt-lab/AD-MPCC.git, set up the simulation environment, and reproduce key results on a multi-surface racetrack. You compare AD-MPCC's lap times and lateral offset errors against a baseline MPCC controller and visualize the online tire parameter estimates.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the full AD-MPCC framework, understand its integration of online estimation and differentiable control, and validate its performance improvements as reported in the paper.

**Grounded in:** Comprehensive simulation validation on single- and multi-surface racetracks demonstrating improved lap times and safety.

**Tech stack:** Python 3.11, PyTorch, Git, Matplotlib, Jupyter Notebook

**Data:** Simulation data generated by the AD-MPCC codebase on multi-surface racetracks as provided by the authors.

**Build it:**

1. Clone the AD-MPCC repository and install required dependencies as per the README.
2. Run baseline MPCC and AD-MPCC controllers on a provided multi-surface racetrack simulation.
3. Extract and plot lap times, lateral offset errors, and online estimated Pacejka tire parameters.
4. Compare results quantitatively and qualitatively to confirm AD-MPCC's improved performance.
5. Write a report summarizing the reproduction process, results, and insights.

**Verified links from the paper:**

- <https://github.com/nxt-lab/AD-MPCC.git> — released by the paper's authors

**Ships as:** A GitHub repository with scripts to run simulations, reproduce key figures, and a report comparing AD-MPCC to baseline MPCC.

**Stretch goal:** Modify the simulation to include an unknown surface segment and analyze controller robustness.

### Advanced — Extending AD-MPCC: Real-World Data Adaptation or Stability Analysis
*Effort: 3+ weeks*

You extend the AD-MPCC framework by addressing one of its stated limitations: either (a) adapt the Pacejka-informed machine learning model to real-world tire-road interaction data (collected or publicly available) to reduce reliance on simulation data, or (b) perform a theoretical stability and robustness analysis of the adaptive control scheme. You implement your approach, evaluate its impact, and document findings.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, applying your software and ML skills to push the research forward or deepen its theoretical foundation.

**Grounded in:** The framework currently relies on simulator-generated data for training the machine learning model, which may not fully capture real-world uncertainties. Future work includes deployment on real vehicles and theoretical stability guarantees.

**Tech stack:** Python 3.11, PyTorch, SciPy, Jupyter Notebook, SymPy (for symbolic math, if doing stability analysis)

**Data:** Either real-world tire-road interaction datasets (publicly available or self-collected) or symbolic models for theoretical analysis; simulation data from AD-MPCC repo as baseline.

**Build it:**

1. Choose to focus on either real-world data adaptation or stability analysis.
2. If real-world data: acquire or simulate realistic tire-road interaction data with varying conditions.
3. Retrain or fine-tune the Pacejka-informed ML model using this data, evaluate performance improvements.
4. If stability analysis: formulate the adaptive control system equations and analyze stability using Lyapunov or related methods.
5. Implement simulations or proofs to validate your approach.
6. Document methodology, results, and implications in a detailed report.

**Verified links from the paper:**

- <https://github.com/nxt-lab/AD-MPCC.git> — released by the paper's authors

**Ships as:** A repository containing code, analysis notebooks, and a comprehensive report detailing your extension to AD-MPCC addressing a key limitation.

**Stretch goal:** Integrate your improved model or stability insights back into the AD-MPCC pipeline and test on simulation.

_The real-world data adaptation project requires access to realistic tire-road interaction data, which may not be publicly available; synthetic or approximate data may be used instead._
