---
title: "860 · Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models — Russ Tedrake"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-russ-tedrake"
source_hash: "25ab197493ec1614517ee504014c8266ece4d40ce9b2008118f0e5a23dcf0a4d"
sequence: 860
generator: "outreach-garden: managed"
---

# 860 · Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models

## At a glance

- **Professor:** Russ Tedrake
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models](https://arxiv.org/pdf/2206.10787)
- **Authors:** Tao Pang, H.J. Terry Suh, Lujie Yang, Russ Tedrake
- **Year:** 2023

## Paper overview

This paper addresses the challenge of planning robot motions in tasks involving complex contact interactions, such as dexterous manipulation. It identifies difficulties in model-based planning due to many contact modes, non-smooth dynamics, and non-convex optimization. The authors propose smoothing contact dynamics both analytically and via randomized methods, develop a convex quasi-dynamic contact model that is differentiable and numerically robust, and combine these with sampling-based motion planning (RRT) to enable efficient global planning. Their approach achieves comparable results to reinforcement learning but with much less computation, and is validated on challenging manipulation tasks including hardware experiments.

### Why it matters

**Research problem:** Planning robot motions through contact-rich environments is difficult due to the explosion of contact modes, stiff and non-smooth contact dynamics causing discontinuous gradients, and the non-convexity of the planning problem. Existing model-based methods struggle with scalability and local minima, while reinforcement learning methods are computationally expensive and less interpretable.

**Why it matters:** Dexterous manipulation and contact-rich tasks are critical for deploying robots in real-world applications. Efficient, generalizable, and interpretable planning methods that can handle complex contact dynamics are essential for advancing robotic capabilities beyond current limitations.

**Key contributions:**

- Theoretical equivalence between randomized and analytic smoothing schemes for contact dynamics, supported by qualitative and empirical validation.
- Development of a convex, differentiable, quasi-dynamic contact dynamics model (CQDC) suitable for contact-rich manipulation planning.
- Analytic smoothing of the CQDC model via log-barrier relaxation enabling efficient gradient computation.
- Integration of contact mode smoothing with sampling-based motion planning (RRT), enabling efficient global planning through complex contact dynamics.
- Demonstration of the approach on challenging manipulation tasks, including 3D in-hand manipulation, extrinsic dexterity, door opening, and hardware experiments with dual robot arms.

## About the professor

**Russ Tedrake** — Toyota Professor of EECS, Aero/Astro, MechE, Electrical Engineering and Computer Science, Aeronautics and Astronautics, Mechanical Engineering, Massachusetts Inst. of Technology.

Research interests: My research journey really took shape when I first fell in love with the rich dynamics of legged robots, and the control problems they pose. From there I got interested in control with complex fluid dynamics, epitomized by flying vehicles in post-stall or flapping flight, or moving at high speeds through dense obstacles. My work on legged robots matured into work on full humanoids including, as computer vision came to fruition, work on dexterous manipulation. The latest breakthroughs in physical AI represent a culmination of what I've been pushing towards for my entire career. Truly dexterous and capable robots are here and there has never been a better time to deploy these machines into real applications, _and_ to dig in and try to deeply understand their underlying principles.

### Research links

- [Faculty/profile page](https://groups.csail.mit.edu/locomotion/russt.html)
- [Professor website](http://locomotion.csail.mit.edu/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=nxNkEiYAAAAJ&view_op=list_works&sortby=pubdate)
- [GitHub](https://github.com/RussTedrake/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, convex analysis, and implicit differentiation of optimization problems
**Already in this field?** Skip this entirely if you have a solid understanding of convex optimization theory and its applications in control or robotics.

This background focuses on convex optimization, which is central to understanding the paper's convex, differentiable quasi-dynamic contact model and the analytic smoothing techniques used for efficient trajectory optimization. The rigorous course option offers a comprehensive university-level treatment of convex optimization, ideal for deep mastery, while the fast track provides a concise, intuition-driven introduction suitable for quickly grasping core concepts before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1-7, about 9 hours total — covering foundational convex sets, functions, and problem formulations necessary to understand the paper's convex optimization framework.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a top-tier, authoritative university course that thoroughly covers convex sets, functions, and optimization problems, directly underpinning the paper's convex model formulation and implicit differentiation approach.

*If you want all of it:* All 18 lectures, about 23.7 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convexity](https://www.youtube.com/playlist?list=PLUJGfL_499TLYEd-9IO1DmQKwm6Mtdt4u) — Amit Goyal · 32 videos · 6.1h across 32 episodes

**Watch only this:** Episodes 1-13, about 2.5 hours total — covering core convexity definitions, properties, and examples to quickly build intuition relevant to the paper's convex modeling.

*Why it unblocks this paper:* The 'Convexity' playlist by Amit Goyal offers a clear, focused introduction to convex and concave functions and sets with economic and mathematical intuition, providing a quick yet rigorous foundation for the convexity concepts critical to the paper's smoothing and optimization methods.

*If you want all of it:* All 32 episodes, about 6.1 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models," start by building foundational knowledge on contact dynamics in robotics and convex optimization, which underpin the modeling and smoothing techniques. Next, study sampling-based motion planning methods like RRT, essential for the global planning approach. Finally, focus on the paper's core concept of quasi-dynamic contact models and the authors' own detailed presentation to grasp their novel smoothing and planning integration.

### Contact Dynamics in Robotics *(prerequisite)*
Understanding the physical and mathematical modeling of contact interactions is foundational for grasping the challenges and solutions in contact-rich manipulation. This section covers advanced seminars that discuss the complexities and nuances of contact dynamics in robotic systems, providing the necessary background to appreciate the paper's focus on smoothing and modeling contact.

*How the paper uses it:* The paper addresses the difficulties of non-smooth contact dynamics and their impact on planning.

▶ [Stanford Seminar - The Trouble with Contact: Helping Robots Touch the World](https://www.youtube.com/watch?v=GHXko5-CorQ) — Stanford Online · 1y ago

### Convex Optimization in Robotics *(prerequisite)*
Convex optimization techniques are critical for developing differentiable and numerically robust contact models. This section includes advanced talks explaining how convex optimization frameworks are applied in robotics, which is essential to understand the convex quasi-dynamic contact model (CQDC) and its smoothing via log-barrier relaxation.

*How the paper uses it:* The paper's CQDC model and smoothing rely on convex optimization and implicit differentiation.

▶ [Efficient Trajectory Optimization for Generalized Multirotors via Sequential Convex Programming](https://www.youtube.com/watch?v=1zZJ64Jxb1M) — DRAGON Lab · 2mo ago

### Sampling-Based Motion Planning RRT *(prerequisite)*
Sampling-based motion planning, particularly RRT, is a key global planning algorithm integrated with the smoothing techniques in the paper. This section features rigorous university lectures and conference talks that delve into the theoretical and practical aspects of RRT, enabling a solid understanding of the global planning framework used.

*How the paper uses it:* The paper combines smoothing with RRT to achieve efficient global planning in contact-rich tasks.

▶ [Computer Science Lecture Series: Sampling-based Motion Planning](https://www.youtube.com/watch?v=yqMvUGVQctY) — George Mason University Television · 6y ago

### Smoothing Techniques for Non-smooth Dynamics *(prerequisite)*
Smoothing resolves discontinuities in contact dynamics, enabling gradient-based planning methods. Although no perfect advanced paper-specific smoothing talks are available, this section includes rigorous academic lectures on non-smooth dynamics and smoothing approaches relevant to the paper's analytic and randomized smoothing schemes.

*How the paper uses it:* The paper establishes theoretical equivalence between analytic and randomized smoothing of contact dynamics.

▶ [Non smooth dynamics of a vibro impact pair - Daniil Yurchenko](https://www.youtube.com/watch?v=jHyv1ER9IdE) — Complex Systems and Dynamics, IIT Madras · 2y ago

### Quasi-Dynamic Contact Models
This is the core concept of the paper, focusing on a convex, differentiable quasi-dynamic contact model that simplifies contact dynamics for tractable planning. The selected talks include the authors' own presentations and related advanced research talks that explain the quasi-dynamic modeling approach and its application in manipulation planning.

*How the paper uses it:* The paper develops and uses a convex quasi-dynamic contact model (CQDC) as a central component of its planning approach.

▶ [Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models v2](https://www.youtube.com/watch?v=D8VIzBRy_m4) — Pang's Robotics Research · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building a foundation in contact dynamics in robotics, which explains how robots physically interact with objects. Next, learn about convex optimization, a key mathematical tool used to make the contact models tractable and differentiable. Then, study smoothing techniques that resolve discontinuities in contact dynamics, enabling gradient-based planning. After that, grasp sampling-based motion planning, especially RRT, which the paper uses for global exploration. Finally, focus on the paper's core method: quasi-dynamic contact models and their smoothing, which simplify and enable efficient planning for contact-rich manipulation.

### Contact Dynamics in Robotics *(prerequisite)*
Contact dynamics studies how robots physically interact with objects, including forces and constraints during contact. Understanding these interactions is crucial because contact introduces complex, non-smooth behaviors that challenge planning and control.

*How the paper uses it:* The paper addresses challenges arising from non-smooth contact dynamics in manipulation tasks.

▶ [Stanford Seminar - The Trouble with Contact: Helping Robots Touch the World](https://www.youtube.com/watch?v=GHXko5-CorQ) — Stanford Online · 1y ago

### Convex Optimization in Robotics *(prerequisite)*
Convex optimization is a mathematical technique to efficiently find the best solution to problems with convex constraints and objectives. It is widely used in robotics to solve planning and control problems reliably and quickly.

*How the paper uses it:* The paper develops a convex, differentiable contact model to enable efficient planning.

▶ [Convex Optimization Explained | How It Powers Machine Learning & AI](https://www.youtube.com/watch?v=HY0r4xHXMms) — XYZ Star | FinTech & Markets · 1y ago

### Smoothing Techniques for Non-smooth Dynamics *(prerequisite)*
Smoothing techniques transform discontinuous or non-smooth dynamics into smooth approximations, allowing the use of gradient-based optimization methods. This is essential for handling contact dynamics, which inherently have abrupt changes.

*How the paper uses it:* The paper proposes analytic and randomized smoothing schemes to handle non-smooth contact dynamics.

▶ [Non-smooth dynamics and machine learning](https://www.youtube.com/watch?v=HwwPXl-dyY4) — Fields Institute · 2y ago

### Sampling-Based Motion Planning RRT *(prerequisite)*
Sampling-based motion planning algorithms like RRT explore high-dimensional spaces by randomly sampling states and connecting them to build feasible paths. They are powerful for global planning in complex environments where analytical solutions are hard.

*How the paper uses it:* The paper integrates smoothing with RRT to enable efficient global planning through complex contact dynamics.

▶ [Computer Science Lecture Series: Sampling-based Motion Planning](https://www.youtube.com/watch?v=yqMvUGVQctY) — George Mason University Television · 6y ago

### Quasi-Dynamic Contact Models
Quasi-dynamic contact models simplify full dynamic equations by ignoring transient accelerations and velocities, making long-term prediction of contact interactions more tractable. This simplification enables efficient planning in contact-rich manipulation tasks.

*How the paper uses it:* The paper develops a convex, differentiable quasi-dynamic contact model (CQDC) as its core contribution.

▶ [Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models v2](https://www.youtube.com/watch?v=D8VIzBRy_m4) — Pang's Robotics Research · 3y ago

## Already in your library

- [6.8210 Spring 2024 Lecture 1: Robot dynamics and model-based control](https://www.youtube.com/watch?v=uyyBT-MHhLE) — also for: Action Flow Matching for Continual Robot Learning (Lantao Liu)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the key ideas from the paper on smoothing quasi-dynamic contact models for contact-rich manipulation planning. The beginner project focuses on implementing and visualizing analytic smoothing of a simple contact constraint, the intermediate project reimplements the core convex quasi-dynamic contact model (CQDC) and integrates it with a sampling-based planner (RRT) on a simplified 2D manipulation task, and the advanced project extends the planner with a feedback control layer to address the paper's limitation on open-loop execution robustness.

### Beginner — Analytic Smoothing of Contact Constraints Visualization
*Effort: a weekend (~6-8 hours)*

You build a small Python notebook that implements the analytic smoothing of a simple contact constraint using log-barrier relaxation as described in the paper. You visualize how smoothing affects the contact force profile and gradients compared to the non-smooth original constraint.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key smoothing technique and its effect on contact dynamics, which is foundational to enabling differentiable and robust planning.

**Grounded in:** Analytic smoothing of the CQDC model via log-barrier relaxation enabling efficient gradient computation.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data representing a simple 1D contact force constraint; no external dataset required.

**Build it:**

1. Implement the original non-smooth contact constraint function for a simple contact model (e.g., unilateral contact force >= 0).
2. Implement the analytic smoothing of this constraint using a log-barrier relaxation as described in the paper.
3. Plot and compare the original and smoothed constraint functions and their gradients over a range of contact force values.
4. Write a short explanation in the notebook linking the smoothing effect to improved gradient behavior for optimization.

**Ships as:** A Jupyter notebook showing plots of original vs. smoothed contact constraints and gradients, with commentary explaining the smoothing effect.

**Stretch goal:** Add randomized smoothing via sampling and compare its empirical behavior to analytic smoothing as per the paper's equivalence claim.

### Intermediate — CQDC Model with RRT for 2D Contact-Rich Manipulation
*Effort: 2-3 weekends (~20 hours)*

You reimplement the convex quasi-dynamic contact model (CQDC) from the paper for a simplified 2D planar manipulation task (e.g., planar pushing or in-hand manipulation). You integrate analytic smoothing of contact constraints and implement a sampling-based motion planner (RRT) guided by the smoothed model's distance metric. You compare planning success and efficiency against a baseline RRT without smoothing.

**Why it shows you understood the paper:** This project shows you can implement the paper's core contact model and smoothing approach, integrate it with a global planner, and empirically validate the benefits of smoothing in contact-rich planning.

**Grounded in:** Development of a convex, differentiable, quasi-dynamic contact dynamics model (CQDC) suitable for contact-rich manipulation planning; Integration of contact mode smoothing with sampling-based motion planning (RRT), enabling efficient global planning through complex contact dynamics.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D planar manipulation environment simulated in code; no external dataset required.

**Build it:**

1. Implement the CQDC model for a 2D planar manipulation scenario, ignoring transient accelerations as per the paper.
2. Incorporate analytic smoothing of contact constraints using log-barrier relaxation within the CQDC model.
3. Implement a basic RRT planner that uses the smoothed CQDC model to compute a distance metric and extend states.
4. Run planning experiments comparing the smoothed CQDC-guided RRT against a baseline RRT without smoothing.
5. Visualize planned trajectories and report metrics such as planning time and success rate.

**Ships as:** A Jupyter notebook or Python scripts demonstrating CQDC-based RRT planning with visualizations and comparison metrics.

**Stretch goal:** Add implicit differentiation of the CQDC model's convex optimization step to compute gradients for trajectory optimization as in the paper.

### Advanced — Feedback Control for Robust Execution of CQDC Plans
*Effort: 3-4 weeks*

You extend the intermediate CQDC+RRT planner by implementing a low-level feedback controller to stabilize open-loop plans during execution, addressing the paper's limitation on open-loop failures due to missed contacts or phase differences. You simulate execution with disturbances and compare robustness with and without feedback control.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend model-based planning with control to improve sim-to-real transfer and robustness in contact-rich manipulation.

**Grounded in:** Open-loop execution of plans may fail due to missed contacts or phase differences between planned and real trajectories, necessitating low-level feedback control for stabilization; Development of feedback controllers to stabilize and robustify open-loop plans generated by CQDC dynamics.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D planar manipulation environment with simulated disturbances; no external dataset required.

**Build it:**

1. Build on the intermediate CQDC+RRT planner implementation and simulate open-loop execution of planned trajectories.
2. Design and implement a low-level feedback controller (e.g., PD or model predictive control) that tracks the planned trajectory and compensates for disturbances.
3. Integrate the feedback controller with the CQDC dynamics simulation to enforce quasi-dynamic behavior during execution.
4. Simulate scenarios with disturbances and contact uncertainties, comparing execution robustness with and without feedback control.
5. Document results with plots and analysis showing improved robustness and discuss implications for sim-to-real transfer.

**Ships as:** A repository with code and notebooks demonstrating feedback control integration, robustness experiments, and analysis.

**Stretch goal:** Explore incorporating robustness objectives into the planner to generate grasps with better control authority and damping as suggested in the paper.
