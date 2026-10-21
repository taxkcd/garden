---
title: "898 · Scenario-based Compositional Verification of Autonomous Systems with Neural Perception — Rajeev Alur"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rajeev-alur"
source_hash: "245354f53e8d3758e4da1f1195a872adeccc3461975750f2e53f930449705515"
sequence: 898
generator: "outreach-garden: managed"
---

# 898 · Scenario-based Compositional Verification of Autonomous Systems with Neural Perception

## At a glance

- **Professor:** Rajeev Alur
- **Institution:** University of Pennsylvania
- **Paper:** [Scenario-based Compositional Verification of Autonomous Systems with Neural Perception](https://arxiv.org/pdf/2504.20942)
- **Authors:** Christopher Watson, Rajeev Alur, Divya Gopinath, Ravi Mangal, Corina S. Păsăreanu
- **Year:** 2025

## Paper overview

This paper presents a new method to verify the safety of autonomous systems that use deep neural networks for perception, such as self-driving cars or autonomous airplanes. The method breaks down the system's operation into different scenarios based on environment conditions (like lighting or track type), builds probabilistic models of the perception system's behavior in each scenario, and then composes these models to analyze overall system safety. The approach allows efficient and scalable verification even when the environment changes unpredictably.

### Why it matters

**Research problem:** Formal verification of autonomous systems with deep neural network (DNN) perception is difficult due to the complexity and size of DNNs, their sensitivity to environmental changes, and the unknown, changing conditions in which these systems operate. Existing verification methods either do not scale well or cannot handle environment variability effectively.

**Why it matters:** Autonomous systems increasingly rely on DNNs for perception, but their safety is critical, especially in safety-critical applications like autonomous driving or aircraft taxiing. Without scalable and accurate verification methods that account for environmental variability, deploying these systems safely is challenging.

**Key contributions:**

- A scenario-based decomposition approach that models autonomous systems under varying environment conditions.
- Extension of probabilistic abstractions to allow separate models per environment condition and generalized confusion matrices for arbitrary state estimates.
- An efficient symbolic analysis method for finite sequences of scenarios with affine constraints on initial state distributions.
- Novel compositional acceleration proof rules that provide parametric error bounds for arbitrary-length scenario sequences and interleavings.
- Demonstration of the approach on two case studies: an autonomous airplane taxiing system using TaxiNet DNN and a simulated F1Tenth autonomous race car using LiDAR.

## About the professor

**Rajeev Alur** — Zisman Family Professor and Director, Department of Computer and Information Science, University of Pennsylvania.

Research interests: Trustworthy AI and Safe Autonomy; formal methods for system design, artificial intelligence, cyber-physical systems, distributed systems, logic in computer science, machine learning, programming languages

### Research links

- [Faculty/profile page](https://www.cis.upenn.edu/~alur)
- [Lab website](https://asset.seas.upenn.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=ZvLa1RIAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/a/RAlur.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Model Checking
**The paper assumes:** probabilistic model checking, discrete-time Markov chains, symbolic verification, compositional verification methods
**Already in this field?** Skip this entirely if you have prior experience with formal verification of probabilistic systems or have studied probabilistic model checking in depth.

To understand the core verification framework in the paper, it is essential to grasp probabilistic model checking, especially how discrete-time Markov chains (DTMCs) are constructed and analyzed symbolically. The rigorous course option offers a deep, foundational understanding of probability and Markov chains, while the fast track provides a concise, intuition-driven introduction to formal verification and model checking concepts relevant to probabilistic systems. Choose the course for thorough mastery or the fast track for a quick, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [6.041 Probabilistic Systems Analysis and Applied Probability](https://www.youtube.com/playlist?list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8) — MIT OpenCourseWare · 25 videos · 21.1h across 25 episodes

**Watch only this:** Lectures 1 to 7 (Probability Models and Axioms through Discrete Random Variables III), plus Lectures 16 to 18 (Markov Chains I to III), about 7.5 hours total — this covers the probability basics and Markov chain theory needed to understand the paper's modeling and analysis.

*Why it unblocks this paper:* MIT's 6.041 Probabilistic Systems Analysis and Applied Probability covers foundational probability theory and Markov chains, which underpin the paper's use of DTMCs and probabilistic abstractions for verification.

*If you want all of it:* 21.1 hours across 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Formal Methods for Verification and Model Checking](https://www.youtube.com/playlist?list=PLZ5_EQH6uyVucnu20SS2BFQdVp_m_bznu) — scottlanyon · 7 videos · 1.5h across 7 episodes

**Watch only this:** Episodes 1 to 5 (model checking intro through What is Formal Verification?), about 1.0 hour total — these provide a concise primer on formal verification concepts and model checking relevant to the paper.

*Why it unblocks this paper:* This short-form series by scottlanyon offers a clear, visual introduction to formal verification and model checking, including neural network verification, which aligns well with the paper's scenario-based compositional verification approach.

*If you want all of it:* 1.5 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on scenario-based compositional verification of autonomous systems with neural perception, start by building foundational knowledge on formal methods for neural network verification, discrete-time Markov chains, compositional verification techniques, and symbolic model checking with acceleration proofs. Then, focus on the core concept of probabilistic verification of autonomous systems under uncertainty. Finally, conclude with the authors' own talk or related advanced talks to gain direct insights into their novel scenario-based compositional verification framework.

### Formal methods for neural network verification *(prerequisite)*
This section covers advanced formal verification techniques specifically tailored for deep neural networks, which are critical to understanding how the paper abstracts and verifies neural perception components. The selected video is a research-level presentation from a university research group focusing on formal verification of neural networks in both open-loop and closed-loop settings.

*How the paper uses it:* The paper builds probabilistic abstractions of perception DNNs, so understanding formal verification of neural networks is foundational.

▶ [\[CORA\] Formal Verification of Neural Networks: Set-Based Training for Neural Network Verification](https://www.youtube.com/watch?v=AnfrsKRltMY) — TUM Cyber-Physical Systems · 1y ago

### Discrete-time Markov chains in system modeling *(prerequisite)*
Discrete-time Markov chains (DTMCs) are the mathematical framework used to compose scenario abstractions into a unified model for verification. This lecture provides a rigorous university-level introduction to DTMCs, essential for grasping how the paper models system behavior probabilistically.

*How the paper uses it:* The paper composes scenario abstractions into DTMCs for verification analysis.

▶ [Lecture 1: Discrete time Markov chains](https://www.youtube.com/watch?v=bDiXDeaBaxc) — Ayalvadi Ganesh · 6y ago

### Compositional verification techniques *(prerequisite)*
Compositional verification is key to scaling verification by decomposing complex systems into manageable components. The chosen talk is a recent conference presentation by one of the paper's co-authors, providing direct insights into compositional verification approaches relevant to the paper's methodology.

*How the paper uses it:* The paper uses compositional verification to handle multiple scenarios and system components efficiently.

▶ [\[KenFest @ CAV 2025\] Compositional Verification of Complex Systems (Corina Păsăreanu, CMU/NASA Ames)](https://www.youtube.com/watch?v=px8PGSz32c0) — Fan of Model Checking · 1y ago

### Symbolic model checking and acceleration proofs *(prerequisite)*
Symbolic model checking and acceleration proofs enable efficient analysis and bounding of error probabilities over scenario sequences, which is a novel contribution of the paper. The selected video is a university lecture on symbolic model checking, providing the necessary theoretical background.

*How the paper uses it:* The paper introduces novel compositional acceleration proof rules and symbolic analysis methods for scenario sequences.

▶ [VLSI Design \[Module 05 - Lecture 23\] Verification: Symbolic Model Checking](https://www.youtube.com/watch?v=ZCWkdTv6Qdk) — Optimization Techniques for Digital VLSI Design · 8y ago

### Probabilistic verification of autonomous systems
This section focuses on the central method of the paper: probabilistic verification of autonomous systems under uncertainty. The chosen talk is a distinguished lecture by a leading professor in the field, offering an advanced and research-focused perspective on real-time probabilistic verification techniques for autonomous systems.

*How the paper uses it:* The paper proposes a scenario-based probabilistic verification framework for autonomous systems with neural perception.

▶ [Real-Time Verification of Autonomous Systems — CCAT Distinguished Lecture Series](https://www.youtube.com/watch?v=BMQmBGJaeyw) — Center for Connected and Automated Transportation · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's approach to verifying autonomous systems with neural perception. It starts with basics of discrete-time Markov chains to grasp system modeling, then covers compositional verification techniques to understand scalable system analysis. Next, it explains symbolic model checking and acceleration proofs for efficient verification, followed by formal methods for neural network verification to appreciate how perception models are handled. Finally, it presents probabilistic verification of autonomous systems to tie all concepts together in the paper's scenario-based framework.

### Discrete-time Markov chains in system modeling *(prerequisite)*
Discrete-time Markov chains (DTMCs) model systems where transitions between states happen with certain probabilities at discrete time steps. Understanding DTMCs helps you see how the paper composes scenario abstractions into a probabilistic model for verification.

*How the paper uses it:* The paper composes scenario abstractions into DTMCs to analyze overall system safety.

▶ [Markov Chains Clearly Explained! Part - 1](https://www.youtube.com/watch?v=i3AkTO9HLXo) — Normalized Nerd · 5y ago

### Compositional verification techniques *(prerequisite)*
Compositional verification breaks down complex systems into smaller parts or scenarios, verifying each separately and then combining results. This approach improves scalability and manageability of verification, which is key to the paper's scenario-based method.

*How the paper uses it:* The paper uses compositional verification to handle different environment scenarios efficiently.

▶ [\[KenFest @ CAV 2025\] Compositional Verification of Complex Systems (Corina Păsăreanu, CMU/NASA Ames)](https://www.youtube.com/watch?v=px8PGSz32c0) — Fan of Model Checking · 1y ago

### Symbolic model checking and acceleration proofs *(prerequisite)*
Symbolic model checking uses mathematical symbols to represent system states compactly, enabling efficient verification of large systems. Acceleration proofs help bound error probabilities over potentially infinite scenario sequences, which the paper leverages for scalable analysis.

*How the paper uses it:* The paper introduces symbolic analysis and novel acceleration proof rules for bounding error probabilities.

▶ [VLSI Design \[Module 05 - Lecture 23\] Verification: Symbolic Model Checking](https://www.youtube.com/watch?v=ZCWkdTv6Qdk) — Optimization Techniques for Digital VLSI Design · 8y ago

### Formal methods for neural network verification *(prerequisite)*
Formal verification of neural networks aims to mathematically prove properties like safety or robustness despite their complexity. This is crucial for understanding how the paper builds probabilistic abstractions of perception DNNs under different environment conditions.

*How the paper uses it:* The paper builds probabilistic abstractions of perception DNNs for each environment condition.

▶ [\[CORA\] Formal Verification of Neural Networks: Set-Based Training for Neural Network Verification](https://www.youtube.com/watch?v=AnfrsKRltMY) — TUM Cyber-Physical Systems · 1y ago

### Probabilistic verification of autonomous systems
Probabilistic verification assesses the safety of autonomous systems under uncertainty by modeling and analyzing the likelihood of different outcomes. This concept ties together the paper's scenario-based framework that accounts for environment variability and perception errors.

*How the paper uses it:* The paper proposes a scenario-based probabilistic verification framework for autonomous systems with neural perception.

▶ [Prof. Sam Coogan: Formal Probabilistic Guarantees for Safe Learning in Autonomous Systems](https://www.youtube.com/watch?v=WiJm-lghsJg) — KAUST RISC Lab · 4y ago

## Already in your library

- [An Introduction to Formal Verification Methods for Neural Networks](https://www.youtube.com/watch?v=kINfn-ZYiLY) — also for: First three years of the international verification of neural networks competition (VNN-COMP) (Stanley Bak)
- [α,β-CROWN: A Formal Verification Framework for Neural Networks - Prof. Huan Zhang, UIUC](https://www.youtube.com/watch?v=xCuY97ywyCc) — also for: Two-Stage Learning of Stabilizing Neural Controllers via Zubov Sampling and Iterative Domain Expansion (Huan Zhang)
- [What is Neural Network Verification?](https://www.youtube.com/watch?v=1LcJk5UHpTo) — also for: Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability (Jacob Andreas)
- [\[CPP'24\] Compositional Verification of Concurrent C Programs ...](https://www.youtube.com/watch?v=_DZYmS04ZEw) — also for: Architectural Modeling and Analysis for Safety Engineering (Mats Per Erik Heimdahl)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of scenario-based compositional verification of autonomous systems with neural perception. Starting with a simple probabilistic confusion matrix model for perception under fixed environment conditions, you then implement the core scenario-based probabilistic abstraction and composition method on a small dataset. Finally, you extend the approach to address one of the paper's stated limitations by modeling continuous environment condition changes or symbolic abstractions, showcasing deeper engagement with the paper's future directions.

### Beginner — Probabilistic Confusion Matrix Model for Neural Perception
*Effort: a weekend, ~8 hours*

You build a simple probabilistic model of a neural perception system's classification errors using confusion matrices derived from synthetic or small-scale offline datasets representing two distinct environment conditions (e.g., bright and dark lighting). You then simulate the perception output probabilistically for given inputs under each condition.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key idea of separate probabilistic abstractions per environment condition and how confusion matrices capture perception uncertainty, a foundational step before composing system-level models.

**Grounded in:** We build a separate probabilistic abstraction of perception for each environment condition... TaxiNet perception system has dramatically different performance in bright versus dark lighting conditions.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic confusion matrices simulating perception accuracy under two environment conditions; no real dataset required.

**Build it:**

1. Define two confusion matrices representing perception accuracy under bright and dark lighting conditions.
2. Implement a function that probabilistically simulates perception outputs given true labels and environment condition.
3. Generate sample perception outputs for a set of test inputs under each environment condition.
4. Visualize the confusion matrices and sample output distributions.
5. Write a README explaining the relation to scenario-based probabilistic abstractions.

**Ships as:** A Python script and README showing probabilistic perception simulation under two environment conditions with visualized confusion matrices.

**Stretch goal:** Add a simple metric comparing pooled versus separate confusion matrix models to illustrate the benefit of separate abstractions.

### Intermediate — Scenario-based Probabilistic Verification on a Toy Autonomous System
*Effort: 1-3 weekends*

You reimplement the core scenario-based compositional verification method by modeling a toy autonomous system with a neural perception component under two environment scenarios. You build separate probabilistic abstractions from confusion matrices, compose them with a simple discrete-time Markov chain model of system dynamics, and perform symbolic analysis of finite scenario sequences to compute error probabilities.

**Why it shows you understood the paper:** This project shows you can implement the paper's main verification framework, including scenario decomposition, probabilistic abstraction, DTMC composition, and symbolic analysis, demonstrating comprehension of the core technical contributions.

**Grounded in:** The probabilistic abstraction αe of the learning-enabled component in environment condition e can be composed with the discrete models of the conventional components to yield a discrete-time Markov chain (DTMC). We illustrate our approach on two case studies...

**Tech stack:** Python 3.11, NumPy, SymPy, NetworkX

**Data:** Synthetic or small-scale offline datasets to derive confusion matrices for two environment conditions; no authors' code available, so reimplementation from paper description.

**Build it:**

1. Define two environment scenarios with corresponding confusion matrices for perception.
2. Model a simple autonomous system's state space and transitions as a discrete-time Markov chain.
3. Compose the perception probabilistic abstraction with the system DTMC for each scenario.
4. Implement symbolic analysis to compute error probabilities over finite sequences of scenarios.
5. Compare results against a baseline that pools environment conditions into a single model.
6. Document the implementation and results in a detailed README.

**Ships as:** A Python package implementing scenario-based compositional verification on a toy system with analysis results and comparison to pooled models.

**Stretch goal:** Incorporate affine constraints on initial state distributions as in the paper's symbolic analysis method.

### Advanced — Extending Scenario-based Verification to Continuous Environment Conditions
*Effort: a few weeks*

You develop an extension of the scenario-based compositional verification framework to handle continuous environment condition changes or distribution shifts. This involves designing symbolic or continuous-state abstractions of the perception model, implementing compositional acceleration proof rules adapted for continuous scenarios, and evaluating the approach on a simulated autonomous system.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate beyond the original framework and engage deeply with formal verification challenges in neural perception under realistic environment variability.

**Grounded in:** Current models assume discrete environment condition changes; continuous distribution shifts are not yet handled. Develop symbolic or continuous-state abstractions of perception to reduce discretization inaccuracies.

**Tech stack:** Python 3.11, NumPy, SymPy, SciPy, Matplotlib

**Data:** Simulated continuous environment condition data and perception outputs; no real dataset available, synthetic data generation required.

**Build it:**

1. Review the paper's compositional acceleration proof rules and scenario-based framework.
2. Design a symbolic or parametric probabilistic abstraction that models perception errors as a function over continuous environment variables.
3. Implement a continuous-state Markov model or parametric DTMC representing system dynamics under continuous environment changes.
4. Adapt compositional acceleration proof rules to provide error bounds for continuous scenario sequences.
5. Evaluate the approach on a simulated autonomous system with continuous environment variation.
6. Document methodology, implementation, and evaluation results in a comprehensive README.

**Ships as:** A research prototype extending scenario-based verification to continuous environment conditions with code, analysis, and documentation.

**Stretch goal:** Apply the framework to a more complex real-world autonomous system dataset if available.
