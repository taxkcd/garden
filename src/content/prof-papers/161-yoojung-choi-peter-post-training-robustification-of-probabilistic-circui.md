---
title: "161 · PeTeR: Post-Training Robustification of Probabilistic Circuits — YooJung Choi"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yoojung-choi"
source_hash: "a4c8dcd04455dac42751cc603a6fe12fe95ce13d700fa192578ca1212ba5ecad"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Optimal Transport and Wasserstein Distance
**The paper assumes:** optimal transport theory, Wasserstein distance, distributional robustness, gradient-based optimization in probabilistic models
**Already in this field?** Skip this entirely if you already have a solid understanding of optimal transport theory and Wasserstein metrics in machine learning contexts.

Understanding Optimal Transport and Wasserstein Distance is crucial for grasping the PeTeR method's core robustness optimization framework, which relies on the Circuit-Wasserstein distance. The rigorous course option offers a deep mathematical and theoretical foundation suitable for readers seeking comprehensive mastery, while the fast track provides a more accessible, intuition-driven introduction to the key concepts in a shorter time. Choose the lane that fits your current time and depth needs; both will prepare you to understand the paper's methodology effectively.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Probabilistic Mass Transport - from Schrödinger to Stochastic Analysis](https://www.youtube.com/playlist?list=PLjvY6sC_0lhJjuaN0Uwl1GfMaMhJMvM5V) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 15 videos

**Watch only this:** Episodes 1-7, about 3.7 hours — covering foundational concepts, Schrödinger bridge, diffusion transport maps, and regularity of Wasserstein projections, which provide the necessary theoretical background for understanding Wasserstein distances and their computation.

*Why it unblocks this paper:* This university-level lecture series from the Erwin Schrödinger International Institute for Mathematics and Physics covers Optimal Transport theory with a strong mathematical and analytical focus, including topics on Wasserstein gradient flows and entropic optimal transport, directly relevant to the Circuit-Wasserstein distance used in PeTeR.

*If you want all of it:* All 15 episodes, approximately 8.1 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Optimal Transport](https://www.youtube.com/playlist?list=PLdIeSOAGKlMc) — Mayukh Mukhopadhyay · 34 videos · 37.9h across 34 episodes

**Watch only this:** Episodes 1-6, about 6.6 hours — covering introduction, Wasserstein distance, dual problem, and gradient flows, which provide a concise yet thorough overview of the key concepts.

*Why it unblocks this paper:* This playlist by Mayukh Mukhopadhyay offers clear, visual, and intuition-first explanations of Optimal Transport and Wasserstein Distance, including the dual problem and applications, making it ideal for quickly building conceptual understanding relevant to the PeTeR paper.

*If you want all of it:* All 34 episodes, approximately 37.9 hours

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of PeTeR, the post-training robustification framework for probabilistic circuits. Starting with a beginner-level project reproducing a core concept of the Circuit-Wasserstein distance, you then implement PeTeR's core method on a small dataset at the intermediate level. Finally, the advanced project tackles one of the paper's future directions by extending PeTeR to decomposable but non-structured probabilistic circuits, showing deeper engagement with the paper's limitations and research challenges.

### Beginner — Circuit-Wasserstein Distance Visualization
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements a simplified version of the Circuit-Wasserstein (CW) distance calculation for a toy structured-decomposable probabilistic circuit. You visualize how the CW distance changes under small perturbations of the circuit parameters, illustrating the concept of robustness within a Wasserstein ball.

**Why it shows you understood the paper:** This project shows you grasp the core mathematical tool PeTeR uses to measure robustness, and how the CW distance relates to perturbations in probabilistic circuits, a key novelty of the paper.

**Grounded in:** Leveraging the Circuit-Wasserstein distance to efficiently compute and optimize robustness guarantees.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic toy probabilistic circuit data you create to demonstrate structured-decomposable PCs.

**Build it:**

1. Implement a simple structured-decomposable probabilistic circuit representation in Python.
2. Code the Circuit-Wasserstein distance calculation for this circuit based on the paper's description.
3. Create parameter perturbations within a small Wasserstein ball around the baseline distribution.
4. Visualize the CW distance values as parameters vary to show robustness sensitivity.
5. Write a README explaining the CW distance and its role in PeTeR.

**Ships as:** A Jupyter notebook with code and plots demonstrating CW distance behavior on a toy PC, plus a README explaining the concept.

**Stretch goal:** Add a small interactive widget (e.g., with ipywidgets) to let users adjust perturbation size and see CW distance update live.

### Intermediate — PeTeR Core Method Reimplementation
*Effort: 2 weekends, ~20 hours*

You reimplement the core PeTeR post-training robustification method from the paper using Python. Starting from a pre-trained structured-decomposable probabilistic circuit on a small public dataset (e.g., UCI Adult dataset as a substitute), you optimize the circuit parameters against worst-case perturbations within a Wasserstein ball using gradient ascent-descent. You compare robustness improvements against standard MLE training.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's novel unconstrained saddle-point optimization formulation and differentiable CW distance gradients into working code, validating the main contribution empirically.

**Grounded in:** Formulating robust post-training as an unconstrained saddle-point optimization problem solvable by gradient methods.

**Tech stack:** Python 3.11, PyTorch or JAX, NumPy, Jupyter Notebook

**Data:** UCI Adult dataset (public) used as a substitute for benchmark datasets mentioned in the paper.

**Build it:**

1. Implement or adapt a structured-decomposable probabilistic circuit model in Python.
2. Train the PC on the dataset using standard MLE to get a baseline model.
3. Implement the Circuit-Wasserstein distance and its differentiable gradients as described.
4. Formulate and implement the PeTeR saddle-point optimization to robustify the PC post-training.
5. Evaluate and compare log-likelihoods on clean and perturbed test sets against the baseline.
6. Document results and methodology in a detailed README.

**Ships as:** A Python codebase with training scripts, evaluation notebooks, and a README showing robustness improvements over baseline MLE.

**Stretch goal:** Add a simple adversarial perturbation generator to test robustness under stronger distribution shifts.

### Advanced — Extending PeTeR to Non-Structured Decomposable PCs
*Effort: 3+ weeks*

You develop an extension of PeTeR to apply post-training robustification to decomposable but non-structured probabilistic circuits, addressing a key limitation noted in the paper. This involves adapting the Circuit-Wasserstein distance or proposing an alternative metric suitable for this broader class of PCs. You evaluate your method on a small dataset and compare robustness gains to the original PeTeR approach.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions, demonstrating research-level thinking by extending the method beyond its original scope.

**Grounded in:** The method currently applies to structured-decomposable probabilistic circuits; extension to decomposable but non-structured PCs is future work.

**Tech stack:** Python 3.11, PyTorch or JAX, NumPy, Jupyter Notebook

**Data:** Synthetic or small real dataset suitable for decomposable PCs; no authors' datasets available.

**Build it:**

1. Study the difference between structured-decomposable and decomposable PCs and their implications for CW distance.
2. Design or adapt a robustness metric applicable to decomposable but non-structured PCs.
3. Implement the adapted PeTeR optimization framework using this new metric.
4. Train and robustify PCs on a dataset, comparing results to baseline and original PeTeR where possible.
5. Analyze stability and robustness trade-offs, documenting challenges and findings.
6. Write a comprehensive report and README explaining your extension and results.

**Ships as:** A research-style codebase and report demonstrating an extension of PeTeR to a broader class of PCs with empirical evaluation.

**Stretch goal:** Explore smoothing or regularization techniques to handle non-smooth gradients in this new setting, as suggested in the paper's future directions.

_No authors' code or datasets were released for this paper, so all implementations must be done from the paper's descriptions and public or synthetic data._
