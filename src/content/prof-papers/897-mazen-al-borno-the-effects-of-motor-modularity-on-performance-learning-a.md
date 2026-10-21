---
title: "897 · The effects of motor modularity on performance, learning and generalizability in upper-extremity reaching: a computational analysis — Mazen Al Borno"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mazen-al-borno"
source_hash: "34bd25159f147616bdb1e8eb86d29df93ecde3d83f84928194d5c999a796af39"
sequence: 897
generator: "outreach-garden: managed"
---

# 897 · The effects of motor modularity on performance, learning and generalizability in upper-extremity reaching: a computational analysis

## At a glance

- **Professor:** Mazen Al Borno
- **Institution:** University of Colorado - Denver
- **Paper:** [The effects of motor modularity on performance, learning and generalizability in upper-extremity reaching: a computational analysis](https://www.ncbi.nlm.nih.gov/pmc/articles/7328389)
- **Authors:** Mazen Al Borno, Jennifer L. Hicks, Scott L. Delp
- **Year:** 2020

## Paper overview

This study uses a detailed computational model of the human arm to investigate how the brain might simplify movement control by using muscle synergies—groups of muscles activated together. The researchers tested whether controlling muscles via these synergies affects how well movements are performed, how quickly new movements can be learned, and whether these synergies can be applied to different reaching tasks. They found that synergy-based control achieves nearly the same accuracy as controlling each muscle independently, speeds up learning, and generalizes well to new tasks, except when heavy loads are involved. Combining synergies with individual muscle control further improves flexibility without sacrificing learning speed.

### Why it matters

**Research problem:** Whether the central nervous system uses muscle synergies to simplify the control of complex upper-extremity movements, and how such modularity affects task performance, motor learning, and generalizability to new tasks.

**Why it matters:** Understanding muscle synergies can clarify how the brain controls movement efficiently, which has implications for motor neuroscience, rehabilitation therapies, and the design of assistive devices for movement disorders.

**Key contributions:**

- Developed a high-fidelity computational model to test muscle synergy hypothesis in upper-extremity reaching.
- Quantified how synergy-based control affects task performance, motor learning speed, and generalizability.
- Demonstrated that synergy-based controllers achieve near full-dimensional performance with fewer control variables.
- Showed synergy-based control facilitates faster motor learning (up to 20-fold reduction in samples).
- Provided evidence that synergies generalize well to new reaching tasks except under heavy load conditions.

## About the professor

**Mazen Al Borno** — Assistant Professor, Computer Science, University of Colorado - Denver.

Research interests: Research at the Interface of Animation, Neuroscience and AI, computational models of animal movement, rehabilitation therapies and assistive devices for patients with movement disorders.

### Research links

- [Faculty/profile page](https://cse.ucdenver.edu/mazen-alborno)
- ['\[Webinar: Computational Models of Reaching to Test Hypotheses in Motor Control](https://www.youtube.com/watch?v=hw8NkVRULmY)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Motor Control
**The paper assumes:** computational motor control, muscle synergy modeling, and motor learning optimization
**Already in this field?** Skip this entirely if you already understand computational models of motor control and muscle synergy concepts.

To understand the computational motor control concepts underlying this paper on muscle synergies and upper-extremity reaching, two background options are provided. The rigorous course offers a deep dive into biomechanics and muscle coordination principles essential for grasping the modeling and optimization methods used. The fast track is a concise, focused playlist on motor control and learning that covers key theories and measures relevant to motor performance and learning, suitable for a quicker but still substantive grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Basic Biomechanics Course for Biomedical Engineering Students 2025 | Full Lecture Series by Dr. Loay Al-Zube | Human Motion & Movement Analysis](https://www.youtube.com/playlist?list=PLPGPGYs4qj_NgCsxjhebZGlQvOUtq0Gy8) — ALZUBE Biomedical Engineering Academy · 31 videos · 18.4h across 31 episodes

**Watch only this:** Episodes 112 (Muscle Coordination & MU Recruitment), 113 (Force-Velocity and Length-Tension Relationships in Muscles), and 114 (Midterm Review) — about 1.75 hours total. These cover muscle coordination principles and muscle mechanics critical for synergy concepts.

*Why it unblocks this paper:* This Basic Biomechanics Course by Dr. Loay Al-Zube covers foundational biomechanics topics including muscle coordination, motor unit recruitment, and kinetics, which are directly relevant to understanding muscle synergy modeling and motor control optimization in the paper.

*If you want all of it:* About 18.4 hours across all 31 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Motor Control and Learning](https://www.youtube.com/playlist?list=PLfmSdQnYkFK_gt00uFJkyeswTaXD5eFGD) — Dr. Veronica Foster · 48 videos · 7.8h across 48 episodes

**Watch only this:** Episodes 1 (Motor Control, Learning, Development and Behavior), 16 (Motor Control Theories), 17 (Open-Loop and Closed-Loop Control Systems), and 20 (OPTIMAL Theory of Motor Learning) — about 36 minutes total. These give a solid conceptual foundation on motor control relevant to synergy-based control and learning.

*Why it unblocks this paper:* Dr. Veronica Foster's Motor Control and Learning playlist provides concise, clear explanations of motor control theories, motor skill measurement, and learning principles that align well with the paper's focus on motor learning speed and generalizability.

*If you want all of it:* About 7.8 hours across all 48 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on motor modularity and muscle synergies in upper-extremity reaching, start with foundational knowledge on biomechanical modeling of the upper limb and numerical optimal control methods, as these underpin the computational approach used. Then, explore computational models of motor learning to grasp how learning speed and generalization are analyzed. Finally, focus on the core concept of muscle synergy control, including the authors' own talk if available, to directly connect with the paper's contributions and findings.

### biomechanical modeling upper limb *(prerequisite)*
Understanding the biomechanical modeling of the upper limb is essential because the paper uses a high-fidelity computational model of the human arm with detailed musculoskeletal geometry. This foundational knowledge clarifies how muscle forces and joint movements are represented computationally.

*How the paper uses it:* The paper implements a biomechanically realistic upper extremity model with 47 muscles and 5 degrees of freedom.

▶ [Biomechanics of Movement | Lecture 6.6: Modeling Musculoskeletal Geometry](https://www.youtube.com/watch?v=1Fa2sqn07aU) — Biomechanics of Movement · 4y ago

### optimal control numerical methods *(prerequisite)*
Optimal control and numerical optimization methods like CMA-ES are critical to synthesizing reaching movements in the model. Understanding these methods helps interpret how the paper achieves movement synthesis and compares synergy-based versus full-dimensional control.

*How the paper uses it:* The paper uses CMA-ES, a stochastic numerical optimal control algorithm, to optimize muscle activations for reaching tasks.

▶ [CMA-ES ΓÇô a Stochastic Second-Order Method for Function-Value FreeNumerical Optimization](https://www.youtube.com/watch?v=Z458X7QxccY) — Microsoft Research · 10y ago

### motor learning computational models *(prerequisite)*
Computational models of motor learning provide insight into how learning speed and generalization are quantified and understood in motor control research. This background supports comprehension of the paper's analysis of synergy-based control facilitating faster learning.

*How the paper uses it:* The paper evaluates how synergy-based control affects motor learning speed and generalizability to new tasks.

▶ [Daniel Wolpert – "Computational principles underlying the learning of sensorimotor repertoires"](https://www.youtube.com/watch?v=xc8DlamZYBs) — Wu Tsai Neurosciences Institute, Stanford · 3y ago

### muscle synergy control
Muscle synergy control is the core concept of the paper, which investigates how modular muscle activation patterns simplify control and learning. A rigorous lecture on muscle synergies in motor control will deepen understanding of the theoretical and experimental context of the study.

*How the paper uses it:* The paper tests the muscle synergy hypothesis as a simplification strategy for upper-extremity reaching control.

▶ [Human motor control lecture Dr. Lei Zhang](https://www.youtube.com/watch?v=H5dyPSMRjn8) — Dynamic field theory · 1:09:44 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's investigation into muscle synergies and motor control in upper-extremity reaching, start by building a foundation in biomechanical modeling of the upper limb, which explains the physical system being controlled. Next, learn about optimal control numerical methods, since the paper uses these to synthesize movements. Then, explore computational models of motor learning to grasp how learning speed and generalization are studied. Finally, focus on muscle synergy control, the core concept tested in the paper for simplifying muscle activation and improving learning and generalization.

### biomechanical modeling upper limb *(prerequisite)*
Biomechanical modeling describes how the bones, joints, and muscles of the upper limb work together to produce movement. Understanding this model is essential because it forms the basis for simulating and controlling arm movements in the paper's computational experiments.

*How the paper uses it:* The paper uses a detailed biomechanical model of the human arm with 47 muscles and 5 degrees of freedom to test muscle synergy control.

▶ [Biomechanics of Movement | Lecture 6.6: Modeling Musculoskeletal Geometry](https://www.youtube.com/watch?v=1Fa2sqn07aU) — Biomechanics of Movement · 4y ago

### optimal control numerical methods *(prerequisite)*
Optimal control methods are mathematical techniques used to find the best way to perform a movement by minimizing a cost, such as effort or error. Numerical methods like CMA-ES help solve these problems when they are too complex for exact solutions.

*How the paper uses it:* The paper uses CMA-ES, a stochastic optimization algorithm, to synthesize reaching movements by controlling muscles or synergies.

▶ [How do you minimize a function when you can't take derivatives? CMA-ES and PSO](https://www.youtube.com/watch?v=oi5GQvJzy5I) — Luis Serrano Academy · 15:04 · 4y ago

### motor learning computational models *(prerequisite)*
Computational models of motor learning explain how the brain adapts and improves movement performance over time. They help us understand learning speed and how skills generalize to new tasks.

*How the paper uses it:* The paper evaluates how synergy-based control affects motor learning speed and generalizability to new reaching tasks.

▶ [Daniel Wolpert – "Computational principles underlying the learning of sensorimotor repertoires"](https://www.youtube.com/watch?v=xc8DlamZYBs) — Wu Tsai Neurosciences Institute, Stanford · 3y ago

### muscle synergy control
Muscle synergies are groups of muscles activated together as a unit to simplify movement control. Studying them helps explain how the brain might reduce the complexity of controlling many muscles individually.

*How the paper uses it:* The core hypothesis tested is whether muscle synergies simplify control while maintaining performance and improving learning and generalization.

▶ [MUSCLE SYNERGIES (Posture Biomechanics)Physiotherapy Tutorial](https://www.youtube.com/watch?v=C2e73Z4c5pk) — Movement Science · 14:43 · 5y ago

## Already in your library

- [EE 564: Lecture 1 (Optimal Control): Optimal Control Problem Formulation](https://www.youtube.com/watch?v=qLfGHizumhI) — also for: Noise Schedule Design for Diffusion Models: An Optimal Control Perspective (Weina Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of muscle synergy control in upper-extremity reaching as analyzed in the paper. The beginner project reproduces a core synergy extraction and variance explanation metric on synthetic muscle excitation data. The intermediate project implements a simplified synergy-based controller for a planar arm reaching task, comparing performance and learning speed against full-dimensional control. The advanced project extends the synergy control framework by exploring time-variant synergies, addressing a key future direction proposed by the authors.

### Beginner — Muscle Synergy Extraction and Variance Analysis
*Effort: a weekend, ~8 hours*

You build a Python script that generates synthetic muscle excitation data for a simplified upper-extremity reaching task and applies PCA to extract time-invariant muscle synergies. You then compute and plot the variance explained by increasing numbers of synergies, reproducing the paper's result that 20 synergies explain about 88% of variance.

**Why it shows you understood the paper:** This project shows you understand the concept of muscle synergies as dimensionality reduction of muscle activations and can replicate a key quantitative result from the paper about synergy representation quality.

**Grounded in:** "20 synergies explained 88% of variance in muscle excitations for nominal reaching task."

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, scikit-learn

**Data:** Synthetic muscle excitation data generated by simulating simplified reaching muscle activations as described in the paper's methods section, since no public dataset is provided.

**Build it:**

1. Implement a function to simulate muscle excitation signals for a simplified arm model with ~20 muscles performing a nominal reaching movement.
2. Apply PCA on the simulated muscle excitation data to extract principal components representing muscle synergies.
3. Calculate the cumulative variance explained by the top N synergies for N=1 to 20.
4. Plot the variance explained curve and compare it to the paper's reported 88% variance explained by 20 synergies.
5. Write a README explaining the synergy concept and how this reproduces the paper's synergy variance result.

**Ships as:** A GitHub repo with Python code, plots of variance explained by synergies, and a README explaining the synergy extraction and variance metric.

**Stretch goal:** Add a comparison of PCA with another dimensionality reduction method (e.g., NMF) to explore different synergy extraction techniques.

### Intermediate — Synergy-Based Controller for Planar Arm Reaching
*Effort: 1-3 weekends, ~20 hours*

You implement a simplified planar arm model with 6 muscles and 2 degrees of freedom and develop two controllers: one controlling each muscle independently and one controlling muscles via a small set of synergies extracted from nominal reaching data. You use numerical optimization (e.g., CMA-ES) to synthesize reaching trajectories and compare task performance error and optimization convergence speed between controllers.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core method of synergy-based control and quantitatively evaluate its impact on performance and motor learning speed compared to full-dimensional control.

**Grounded in:** "Controllers with 5 or more synergies had task errors within ~1 cm of full-dimensional control." and "Synergy-based controllers required 14 to 20 times fewer samples to converge to desired performance compared to full-dimensional control."

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, cma (CMA-ES optimizer)

**Data:** Synthetic muscle excitation and arm kinematics data generated from the planar arm model; synergy basis computed from nominal reaching trajectories simulated within the project.

**Build it:**

1. Implement a planar 2-DOF arm model with 6 muscles and forward kinematics.
2. Simulate nominal reaching movements and record muscle excitations.
3. Extract time-invariant synergies from nominal excitations using PCA.
4. Implement two controllers: full-dimensional (independent muscle control) and synergy-based (control via synergy activations).
5. Use CMA-ES to optimize muscle or synergy activations to reach targets and minimize task error.
6. Compare task error and number of optimization samples to convergence for both controllers.
7. Document results and compare them to the paper's reported performance and learning speed improvements.

**Ships as:** A GitHub repo with code for the planar arm model, synergy extraction, controllers, optimization scripts, performance plots, and a README explaining the synergy control benefits.

**Stretch goal:** Add a hybrid controller combining synergies and independent muscle control and evaluate its performance and convergence.

### Advanced — Time-Variant Muscle Synergies for Enhanced Motor Learning
*Effort: a few weeks, ~40+ hours*

You extend the synergy control framework by implementing time-variant muscle synergies that capture temporal dynamics of muscle activation patterns during reaching. You compare the performance, learning speed, and generalizability of time-variant synergy controllers against time-invariant synergy controllers on a simulated arm model. This addresses a key future direction proposed by the paper.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions by implementing a physiologically plausible extension of muscle synergy control and evaluating its impact on motor learning and generalization.

**Grounded in:** "Investigate time-variant muscle synergies to capture temporal dynamics and their effect on learning and generalization."

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, cma (CMA-ES optimizer), scikit-learn

**Data:** Synthetic muscle excitation and kinematic data generated from a simulated arm model performing reaching tasks; time-variant synergies extracted from this data.

**Build it:**

1. Implement or reuse a planar or simplified upper-extremity arm model with muscle activations.
2. Simulate reaching movements and record time-series muscle excitation data.
3. Implement time-variant synergy extraction methods (e.g., non-negative matrix factorization with temporal components or time-varying PCA).
4. Develop a synergy-based controller using time-variant synergies to generate muscle activations.
5. Optimize reaching trajectories using CMA-ES for both time-invariant and time-variant synergy controllers.
6. Evaluate and compare task performance, learning speed (optimization convergence), and generalization to new reaching tasks.
7. Document findings and discuss how time-variant synergies affect motor learning and generalizability compared to time-invariant synergies.

**Ships as:** A GitHub repo with code for time-variant synergy extraction, controllers, optimization, evaluation scripts, plots comparing controllers, and a detailed README discussing the extension and results.

**Stretch goal:** Incorporate a hybrid controller combining time-variant synergies with independent muscle control to further improve flexibility and learning speed.
