---
title: "161 · PeTeR: Post-Training Robustification of Probabilistic Circuits — YooJung Choi"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yoojung-choi"
source_hash: "f5462a0b50e31c3473cb87c4fee87f5423f6400d416cd616d7c09dfd4e1bcbb5"
sequence: 161
generator: "outreach-garden: managed"
---

# 161 · PeTeR: Post-Training Robustification of Probabilistic Circuits

## At a glance

- **Professor:** YooJung Choi
- **Institution:** Arizona State University
- **Paper:** [PeTeR: Post-Training Robustification of Probabilistic Circuits](https://arxiv.org/pdf/2607.07671)
- **Authors:** Adrian Ciotinga, Yeming Dai, YooJung Choi
- **Year:** 2026

## Paper overview

This paper introduces PeTeR, a novel method to improve the robustness of probabilistic circuits (PCs) after they have been trained, without needing access to the original training data. PeTeR protects these models against distribution shifts and data noise by optimizing them against worst-case perturbations within a mathematically defined neighborhood (a Wasserstein ball). The method leverages the unique structure of PCs to efficiently compute and optimize this robustness, outperforming existing data-dependent robust learning methods on multiple benchmark datasets.

### Why it matters

**Research problem:** Standard likelihood-based learning of probabilistic circuits is vulnerable to overfitting and poor generalization when data is noisy, limited, or subject to distribution shifts. Existing robust learning methods require retraining from scratch with access to training data, limiting flexibility and applicability.

**Why it matters:** Robustness to distribution shifts and data noise is critical for reliable AI/ML models in real-world applications. Probabilistic circuits are powerful tractable probabilistic models, but their fragility limits their practical use. A flexible, data-free method to robustify pre-trained PCs would enable wider adoption and safer deployment.

**Key contributions:**

- Introduction of PeTeR, a data-free post-training robustification framework for probabilistic circuits.
- Leveraging the Circuit-Wasserstein distance to efficiently compute and optimize robustness guarantees.
- Formulating robust post-training as an unconstrained saddle-point optimization problem solvable by gradient methods.
- Derivation of differentiable gradients for the Circuit-Wasserstein distance enabling end-to-end optimization.
- Empirical demonstration that PeTeR outperforms existing data-dependent robust MLE baselines on multiple benchmark datasets.

## About the professor

**YooJung Choi** — Assistant Professor, School of Computing and Augmented Intelligence, Arizona State University.

Research interests: probabilistic reasoning and learning (tractable probabilistic models, graphical models, knowledge compilation) and trustworthy AI/ML (robustness, fairness, explainability, and more)

### Research links

- [Faculty/profile page](https://yoojungchoi.github.io)
- [Resolved homepage](https://yoojungchoi.github.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PeTeR framework for post-training robustification of probabilistic circuits, start with foundational topics including probabilistic circuits, optimal transport theory (especially Wasserstein distances), distributionally robust optimization, and saddle-point optimization methods. These prerequisites build the mathematical and algorithmic background necessary to grasp PeTeR's novel use of the Circuit-Wasserstein distance and its optimization formulation. Finally, focus on the core concept of PeTeR itself, prioritizing the authors' own presentation or closely related academic talks.

### Probabilistic circuits lecture *(prerequisite)*
Probabilistic circuits are the fundamental model class underlying PeTeR. Understanding their structure, inference, and learning algorithms is essential to appreciate how PeTeR leverages their decomposability and tractability for robustness optimization.

*How the paper uses it:* PeTeR operates on structured-decomposable probabilistic circuits, making their understanding critical.

▶ [Logic and Probabilistic Circuits 1](https://www.youtube.com/watch?v=ZW94kMFsHzc) — Simons Institute for the Theory of Computing · 1:05:03

### Optimal transport theory lecture *(prerequisite)*
Optimal transport theory provides the mathematical foundation for Wasserstein distances, which are central to PeTeR's robustness metric. A rigorous lecture on optimal transport will clarify the intuition and formalism behind these distances and their computational aspects.

*How the paper uses it:* PeTeR uses the Circuit-Wasserstein distance, a variant of Wasserstein distance, to measure distributional perturbations.

▶ [Optimal Transport - Introduction to Optimal Transport](https://www.youtube.com/watch?v=kjOBJP7gglw) — Brittany Hamfeldt · 1:07:02

### Distributionally robust optimization talk *(prerequisite)*
Distributionally robust optimization (DRO) theory underpins PeTeR's approach to optimizing model parameters against worst-case perturbations within a Wasserstein ball. Understanding DRO frameworks and algorithms is necessary to grasp PeTeR's optimization formulation.

*How the paper uses it:* PeTeR formulates robustness as an unconstrained saddle-point problem within a Wasserstein ball, a DRO concept.

▶ [L4DC 2024 Tutorials: Distributionally Robust Optimisation for ...](https://www.youtube.com/watch?v=aDejLV0w3G0) — Oxford Engineering · 1:24:55

### Saddle-point optimization methods talk *(prerequisite)*
Saddle-point optimization methods are used to solve PeTeR's unconstrained gradient ascent-descent problem. A detailed talk on these methods will provide insight into convergence properties and practical algorithmic considerations.

*How the paper uses it:* PeTeR's robust post-training optimization is formulated as a saddle-point problem solved by gradient methods.

▶ [Prof. Asu Ozdaglar - Robustness in Machine Learning and ...](https://www.youtube.com/watch?v=Up0U_6ChLmI) — Rice U ECE · 1:02:06

### Circuit-Wasserstein distance seminar
The Circuit-Wasserstein distance is the novel metric enabling efficient and exact computation of robustness guarantees in PeTeR. A seminar focused on Wasserstein distances and their variants will deepen understanding of this key concept.

*How the paper uses it:* PeTeR leverages the Circuit-Wasserstein distance to efficiently compute and optimize robustness guarantees for probabilistic circuits.

▶ [Optimal Transport and PDE: Gradient Flows in the ...](https://www.youtube.com/watch?v=MvjD-H_B5Gg) — Simons Institute for the Theory of Computing · 58:56

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand PeTeR, a post-training robustification method for probabilistic circuits. Start by learning about probabilistic circuits as the core model class, then build intuition on optimal transport theory and Wasserstein distances, which underpin the robustness metric used. Next, explore distributionally robust optimization and saddle-point optimization methods to grasp the theoretical framework for PeTeR's training approach. Finally, focus on the Circuit-Wasserstein distance, the key metric enabling efficient robustness optimization in PeTeR.

### Probabilistic circuits lecture *(prerequisite)*
Probabilistic circuits are structured probabilistic models that allow tractable inference and learning. Understanding their representation and inference mechanisms is essential to grasp how PeTeR robustifies these models post-training.

*How the paper uses it:* PeTeR operates on pre-trained probabilistic circuits, so understanding PCs is foundational.

▶ [Probabilistic Circuits: Representations, Inference, Learning and Theory (Tutorial at ECML-PKDD 2020)](https://www.youtube.com/watch?v=2RAG5-L9R70) — UCLA-StarAI · 5 years ago

### Optimal transport theory lecture *(prerequisite)*
Optimal transport theory provides the mathematical foundation for Wasserstein distances, which measure how one probability distribution can be transformed into another. This intuition is crucial to understand the Circuit-Wasserstein distance used in PeTeR.

*How the paper uses it:* PeTeR leverages Wasserstein distances to define robustness neighborhoods around the baseline distribution.

▶ [Wasserstein Distance & Optimal Transport — Fully Explained](https://www.youtube.com/watch?v=88ONbF_b3VE) — The Synthetic Mind · 22:15 · 7 months ago

### Distributionally robust optimization talk *(prerequisite)*
Distributionally robust optimization studies how to optimize models against worst-case perturbations within a set of plausible distributions. This framework underlies PeTeR's approach to robustifying probabilistic circuits without access to training data.

*How the paper uses it:* PeTeR formulates robustness as optimization within a Wasserstein ball, a classic DRO setup.

▶ [Introduction to Distributionally Robust Optimization](https://www.youtube.com/watch?v=Kfu-qYGWuhY) — PSMR UMONS · 19:29

### Saddle-point optimization methods talk *(prerequisite)*
Saddle-point optimization methods solve min-max or max-min problems by alternating gradient steps, a technique used in PeTeR to optimize robustness against adversarial distributions efficiently.

*How the paper uses it:* PeTeR's robust post-training is formulated as an unconstrained saddle-point optimization problem solved by gradient ascent-descent.

▶ [How to make the gradient descent-ascent converge to local ...](https://www.youtube.com/watch?v=RW5PMe0cXxQ) — Ernest Ryu · 54:06

## Already in your library

- [Lecture 18 | Convex Optimization I (Stanford)](https://www.youtube.com/watch?v=oMRVDILkpUI) — also for: A Unified Framework for High-Dimensional Analysis of M-Estimators with Decomposable Regularizers (Sahand N. Negahban)
- [The safe gradient flow: a system-theoretic approach to ...](https://www.youtube.com/watch?v=9kZfpsGNQx4) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)
