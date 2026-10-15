---
title: "658 · Two-Stage Learning of Stabilizing Neural Controllers via Zubov Sampling and Iterative Domain Expansion — Huan Zhang"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-huan-zhang"
source_hash: "c1df8be4ecad87556c6f70317c5370c6b00619436a61d70a8efde7b5973d2f21"
sequence: 658
generator: "outreach-garden: managed"
---

# 658 · Two-Stage Learning of Stabilizing Neural Controllers via Zubov Sampling and Iterative Domain Expansion

## At a glance

- **Professor:** Huan Zhang
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [Two-Stage Learning of Stabilizing Neural Controllers via Zubov Sampling and Iterative Domain Expansion](https://arxiv.org/pdf/2506.01356)
- **Authors:** Haoyu Li, Xiangru Zhong, Bin Hu, Huan Zhang
- **Year:** 2025

## Paper overview

This paper presents a novel two-stage training framework to learn neural network controllers for continuous-time systems that are provably stable. The approach jointly learns a controller and a Lyapunov function to certify system stability, using a Zubov theorem-inspired method to estimate the region of attraction (ROA) more accurately and less conservatively than prior methods. It also extends the α,β-CROWN neural network verifier to efficiently verify stability conditions involving Jacobians, achieving significant speedups over traditional SMT solvers.

### Why it matters

**Research problem:** Learning neural network controllers for nonlinear continuous-time systems with formal guarantees of stability and large regions of attraction is challenging due to the lack of scalable training and verification methods that reduce conservatism and handle continuous domains.

**Why it matters:** Neural controllers have shown strong empirical performance but lack formal stability guarantees, which is critical for safety in real-world mission-critical systems. Estimating and certifying the region of attraction ensures that the system will converge to a desired equilibrium from a wide set of initial states, enabling trustworthy deployment.

**Key contributions:**

- A novel two-stage Zubov-based training framework with curriculum domain expansion and training sample selection that reduces conservatism in ROA estimation.
- Extension of the α,β-CROWN neural network verifier to efficiently handle Jacobian-related operators for continuous-time system verification.
- A novel verification algorithm that dynamically adjusts verification bounds to avoid expensive bisection while maintaining soundness.
- Extensive numerical experiments demonstrating ROA volumes 5 × 1.5 × 10^5 times larger than baselines and verification speedups of 40 × 10,000 times compared to SMT solver dReal.

## About the professor

**Huan Zhang** — Assistant Professor, Department of Electrical and Computer Engineering, Univ. of Illinois at Urbana-Champaign.

Research interests: trustworthy AI systems, formal verification, empirical approaches, safety, robustness, efficiency of AI systems

### Research links

- [Faculty/profile page](https://huan-zhang.com)
- [Professor website](http://www.huan-zhang.com/)
- [Google Scholar](https://scholar.google.com/citations?user=LTa3GzEAAAAJ)
- [GitHub](https://github.com/huanzhang12/alpha-beta-CROWN)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Nonlinear Control Theory
**The paper assumes:** nonlinear control theory, Lyapunov stability analysis, region of attraction estimation, continuous-time dynamical systems
**Already in this field?** Skip this entirely if you already understand nonlinear control systems, Lyapunov methods, and stability theory for continuous-time systems.

To understand the nonlinear control theory foundations critical for this paper's contributions on stabilizing neural controllers and Lyapunov-based stability verification, two viewing lanes are offered. The rigorous course provides a deep, formal treatment of nonlinear system stability, Lyapunov functions, and region of attraction concepts, ideal for thorough mastery. The fast track offers a concise, intuition-driven introduction to nonlinear control systems and Lyapunov stability, suitable for quickly grasping the key ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Nonlinear Control Systems (EE 565)](https://www.youtube.com/playlist?list=PLHEIL5MR2cEGitc2_Q2iEN2-vD6vjZAkg) — shyam kamal · 37 videos · 40.0h across 37 episodes

**Watch only this:** Lectures 22 to 29 (8 lectures, about 8.5 hours) covering Stability of Equilibrium Points of Autonomous Systems, Comparison Principle, LaSalle's Invariance Principle, Lyapunov's Indirect Method, and Lyapunov Conditions for Exponential Stability. These provide the core nonlinear stability concepts and Lyapunov theory needed to understand the paper's approach.

*Why it unblocks this paper:* This university-level course 'Nonlinear Control Systems (EE 565)' by Shyam Kamal covers foundational and advanced nonlinear control theory topics including Lyapunov stability theorems, region of attraction, and comparison functions, directly underpinning the paper's theoretical framework and verification methods.

*If you want all of it:* About 40 hours across all 37 episodes covering a comprehensive nonlinear control theory curriculum.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Nonlinear Control Systems](https://www.youtube.com/playlist?list=PLhdVEDm7SZ-MqSUpBw78Cb2BmI142R2VA) — Topperly · 29 videos · 6.6h across 29 episodes

**Watch only this:** Episodes 16 to 21 (6 episodes, about 1.3 hours) covering Stability of Systems, Linearisation Technique, Lyapunov Stability Analysis (first and second methods), Krasovskii's Theorem, and Variable Gradient Method of Generating Lyapunov Functions. This subset covers the essential Lyapunov stability concepts and methods.

*Why it unblocks this paper:* This 'Nonlinear Control Systems' series by Topperly offers clear, concise explanations of nonlinear control concepts including Lyapunov stability, phase plane analysis, and limit cycles, providing an accessible yet sufficiently rigorous overview to quickly grasp the key ideas relevant to the paper.

*If you want all of it:* About 6.6 hours across all 29 episodes providing a broad introduction to nonlinear control systems.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on two-stage learning of stabilizing neural controllers, start with foundational concepts including Lyapunov stability theory, region of attraction estimation, Zubov theorem and method, and neural network verification with α,β-CROWN. These prerequisites build the theoretical and methodological background necessary to grasp the paper's novel contributions. Finally, focus on the core concept of the two-stage training framework and the authors' own talks or closely related advanced lectures to see the direct application and innovation presented in the paper.

### Lyapunov stability theory *(prerequisite)*
Lyapunov stability theory is fundamental for understanding how stability of dynamical systems is certified via Lyapunov functions. This theory underpins the paper's approach to jointly learning a Lyapunov function and controller to guarantee system stability.

*How the paper uses it:* The paper relies on Lyapunov functions to certify stability and estimate the region of attraction.

▶ [A Visual Explanation of Lyapunov Stability](https://www.youtube.com/watch?v=W8YpgG0KuOo) — Prof Gio | Giordano Scarciotti · 11 mo ago

### Region of attraction estimation *(prerequisite)*
Estimating the region of attraction (ROA) is central to certifying the domain from which the system converges to equilibrium. Understanding existing scalable and active learning methods for ROA estimation provides context for the paper's novel Zubov sampling and domain expansion techniques.

*How the paper uses it:* The paper proposes a novel ROA estimation stage inspired by Zubov's method to reduce conservatism in ROA estimation.

▶ [Safe Learning of Regions of Attraction with Gaussian Processes (CDC 2016 presentation)](https://www.youtube.com/watch?v=bSv-pNOWn7c) — LAS @ ETH Zurich · 9 yr ago

### Neural network verification with alpha beta CROWN *(prerequisite)*
α,β-CROWN is a state-of-the-art neural network verification framework that the paper extends to handle Jacobian-vector products for continuous-time system verification. Understanding this verifier is key to appreciating the paper's verification speedups and scalability.

*How the paper uses it:* The paper extends α,β-CROWN to efficiently verify stability conditions involving Jacobians.

▶ [α,β-CROWN: A Formal Verification Framework for Neural Networks - Prof. Huan Zhang, UIUC](https://www.youtube.com/watch?v=xCuY97ywyCc) — AVIATE center ACRL-UIUC · 1 yr ago

### Two-stage training framework for neural controllers
This concept encapsulates the paper's core contribution: a two-stage pipeline combining ROA estimation with Zubov-inspired sampling and counterexample-guided inductive synthesis (CEGIS) refinement to learn stabilizing neural controllers with formal guarantees.

*How the paper uses it:* The paper's main contribution is the novel two-stage training framework for learning provably stable neural controllers.

▶ [Machine Learning Control: Overview](https://www.youtube.com/watch?v=3yU2k8R9JeU) — Steve Brunton · 8 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building a foundation in Lyapunov stability theory, which is essential for grasping how system stability is certified. Next, learn about region of attraction (ROA) estimation, a key goal of the paper to certify large stable domains. Then, study the Zubov theorem and method, which inspires the novel training loss and sampling strategy. After that, explore neural network verification with α,β-CROWN to understand the scalable verification techniques extended in the paper. Finally, review the two-stage training framework for neural controllers to see how these concepts combine in the authors' novel approach.

### Lyapunov stability theory *(prerequisite)*
Lyapunov stability theory provides a way to prove that a system will remain stable or converge to an equilibrium point by constructing a special function called a Lyapunov function. This concept is fundamental to understanding how the paper certifies stability of neural controllers.

*How the paper uses it:* The paper jointly learns a Lyapunov function to certify system stability.

▶ [A Visual Explanation of Lyapunov Stability](https://www.youtube.com/watch?v=W8YpgG0KuOo) — Prof Gio | Giordano Scarciotti · 11 mo ago

### Region of attraction estimation *(prerequisite)*
Region of attraction (ROA) estimation identifies the set of initial states from which the system will converge to a desired equilibrium. Understanding ROA is crucial because the paper aims to estimate and certify large ROAs for neural controllers.

*How the paper uses it:* The paper focuses on accurately estimating the ROA to certify stability over a large domain.

▶ [Safe Learning of Regions of Attraction with Gaussian Processes (CDC 2016 presentation)](https://www.youtube.com/watch?v=bSv-pNOWn7c) — LAS @ ETH Zurich · 9 yr ago

### Neural network verification with alpha beta CROWN *(prerequisite)*
α,β-CROWN is a state-of-the-art neural network verification framework that efficiently computes bounds on network outputs and their derivatives. Understanding this verifier is key to grasping how the paper extends it to verify stability conditions involving Jacobians.

*How the paper uses it:* The paper extends α,β-CROWN to handle Jacobian operators for scalable stability verification of continuous-time systems.

▶ [α,β-CROWN: A Formal Verification Framework for Neural Networks - Prof. Huan Zhang, UIUC](https://www.youtube.com/watch?v=xCuY97ywyCc) — AVIATE center ACRL-UIUC · 1 yr ago

## Already in your library

- [Lecture 7 | Training Neural Networks II](https://www.youtube.com/watch?v=_JB0AO7QxSA) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the key contributions of the paper on two-stage learning of stabilizing neural controllers. Starting with a beginner-level implementation of a simple Lyapunov function and controller training on a 2D system, you then move to an intermediate project that runs and extends the authors' released code to reproduce and analyze ROA estimation improvements. Finally, the advanced project tackles a stated limitation by adapting the framework to handle stochastic disturbances, exploring robustness beyond the original continuous-time deterministic setting.

### Beginner — Lyapunov-Based Neural Controller for a 2D System
*Effort: a weekend, ~8 hours*

You implement a simple neural network controller and a Lyapunov function for a 2D nonlinear continuous-time system (e.g., a planar pendulum or Van der Pol oscillator). You train the networks jointly using a loss inspired by Lyapunov stability conditions and visualize the estimated region of attraction (ROA) by sampling points and checking the Lyapunov decrease condition.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core concept of jointly learning a stabilizing controller and a Lyapunov function, as well as the basic idea of ROA estimation through sampling, which is foundational to the paper's two-stage framework.

**Grounded in:** The project relates to the paper's key contribution of jointly synthesizing a controller and Lyapunov function with reduced conservatism in ROA estimation.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, NumPy

**Data:** No external dataset needed; you simulate trajectories of a standard 2D nonlinear system (e.g., Van der Pol oscillator) using numerical integration.

**Build it:**

1. Implement a 2D nonlinear continuous-time system simulator with numerical integration (e.g., Runge-Kutta).
2. Define simple feedforward neural networks for the controller and Lyapunov function.
3. Implement a loss function enforcing Lyapunov decrease conditions sampled over a grid or random points in state space.
4. Train the networks jointly to minimize the loss.
5. Visualize the estimated ROA by plotting points satisfying the Lyapunov conditions.

**Ships as:** A GitHub repo with code, training scripts, and a README showing ROA visualizations and explanations.

**Stretch goal:** Add a simple domain expansion mechanism by iteratively enlarging the sampled state space based on trajectory simulations.

### Intermediate — Reproduce and Extend Two-Stage Neural Controller Training
*Effort: 1-3 weekends*

You clone and run the authors' official implementation from https://github.com/Verified-Intelligence/Two-Stage_Neural_Controller_Training to reproduce ROA estimation results on a 2D or 4D system. Then, you implement a simple baseline method (e.g., standard Lyapunov training without Zubov sampling or domain expansion) and compare ROA volumes and training stability. You analyze the impact of the two-stage training and sampling strategies.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the novel two-stage training pipeline, and critically evaluate its benefits over simpler baselines, reflecting a deeper engagement with the paper's core methods and results.

**Grounded in:** This project directly demonstrates the paper's key results on ROA volume improvements and the novel two-stage training framework with curriculum domain expansion.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Use the system models and simulation environments provided in the authors' repository; no external dataset required.

**Build it:**

1. Clone and set up the authors' repository following their instructions.
2. Run training on a selected system (e.g., 2D or 4D Cartpole) to reproduce ROA estimation results.
3. Implement a baseline training method without Zubov sampling or domain expansion.
4. Compare ROA volumes and training convergence between the baseline and the authors' method.
5. Document findings with plots and metrics in a README.

**Verified links from the paper:**

- <https://github.com/Verified-Intelligence/Two-Stage_Neural_Controller_Training> — released by the paper's authors

**Ships as:** A GitHub repo fork with scripts to reproduce and compare results, plus a report summarizing ROA improvements and training behavior.

**Stretch goal:** Experiment with varying domain expansion parameters and analyze sensitivity, linking to the paper's discussion on dynamic domain expansion.

### Advanced — Extending Two-Stage Training to Stochastic Disturbances
*Effort: a few weeks*

You extend the two-stage training framework to handle continuous-time nonlinear systems with stochastic disturbances or model uncertainties. This involves modifying the ROA estimation and Lyapunov conditions to probabilistic or robust variants, adapting the sampling and verification stages accordingly. You evaluate the approach on a simulated stochastic system and analyze robustness of the learned controller.

**Why it shows you understood the paper:** This project addresses a stated future direction and limitation of the paper by adapting the method beyond deterministic continuous-time systems, demonstrating your ability to innovate on the framework and tackle open research challenges.

**Grounded in:** The project targets the paper's future direction of synthesizing and verifying robust controllers for systems with perturbations and model uncertainties.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, SciPy

**Data:** Simulated data from a stochastic nonlinear continuous-time system you define (e.g., Van der Pol oscillator with noise).

**Build it:**

1. Review the paper's two-stage training and verification framework in detail.
2. Modify the Lyapunov decrease condition to a probabilistic or robust form suitable for stochastic disturbances.
3. Adapt the sampling strategy to include stochastic trajectory simulations for domain expansion.
4. Implement the modified training pipeline integrating these changes.
5. Evaluate the learned controller's robustness via simulations and compare with the deterministic baseline.
6. Document methodology, challenges, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/Verified-Intelligence/Two-Stage_Neural_Controller_Training> — released by the paper's authors

**Ships as:** A GitHub repo with extended training code, experiments on stochastic systems, and a comprehensive report discussing robustness and limitations.

**Stretch goal:** Incorporate verifier improvements to handle stochastic Jacobian bounds or extend to hybrid system settings as further research.
