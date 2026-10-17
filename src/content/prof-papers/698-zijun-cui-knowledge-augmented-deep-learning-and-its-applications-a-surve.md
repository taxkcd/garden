---
title: "698 · Knowledge-augmented Deep Learning and Its Applications: A Survey — Zijun Cui"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zijun-cui"
source_hash: "41626374d0035ebaef6a4413064f0fa1f214e56532028e70746f063660597ea5"
sequence: 698
generator: "outreach-garden: managed"
---

# 698 · Knowledge-augmented Deep Learning and Its Applications: A Survey

## At a glance

- **Professor:** Zijun Cui
- **Institution:** Michigan State University
- **Paper:** [Knowledge-augmented Deep Learning and Its Applications: A Survey](https://doi.org/10.1109/TNNLS.2023.3338619)
- **Authors:** Zijun Cui, Tian Gao, Kartik Talamadupula, Qiang Ji
- **Year:** 2022

## Paper overview

This survey paper reviews the emerging field of knowledge-augmented deep learning (KADL), which integrates domain knowledge into deep learning models to improve data efficiency, generalization, and interpretability. It categorizes domain knowledge into scientific and experiential types, discusses their representations, and surveys methods for integrating such knowledge at various levels of deep learning models. The paper also highlights applications across scientific and real-world tasks, providing a comprehensive taxonomy and critical review of existing techniques.

### Why it matters

**Research problem:** Deep learning models often require large amounts of data, generalize poorly to unseen samples, and lack interpretability. These limitations stem from their purely data-driven nature and inability to effectively incorporate domain knowledge.

**Why it matters:** Addressing these limitations is crucial for developing AI systems that are more data-efficient, generalizable, and interpretable, which is important for trustworthy AI and for applications in scientific and real-world domains where data may be scarce or expensive to obtain.

**Key contributions:**

- Proposes a novel taxonomy of domain knowledge covering both scientific and experiential knowledge.
- Provides a broad and systematic review of knowledge representation and integration techniques in deep learning.
- Covers methodologies applicable to both scientific problems and real-world applications across various domains.
- Clarifies the four levels of knowledge integration and discusses their benefits and use cases.
- Highlights the limitations of existing surveys that focus narrowly on either neural-symbolic models or physics-informed learning.

## About the professor

**Zijun Cui** — Assistant Professor, CSE, Michigan State University.

Research interests: Knowledge-augmented Deep Learning, including Physics-informed Deep Learning and Neural Symbolic Integration; Probabilistic Graphical Models; Computer Vision; AI for Health

### Research links

- [Faculty/profile page](https://zijunjkl.github.io)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=hxkHMJIAAAAJ)
- [LinkedIn](https://www.linkedin.com/in/zijun-cui-949761240/)
- [Social profile](https://twitter.com/zijun_cui)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Physics-informed machine learning
**The paper assumes:** machine learning, deep learning, and physics-informed machine learning
**Already in this field?** Skip this entirely if you already understand how physical laws are incorporated into machine learning models and the basics of physics-informed neural networks.

This background playlist selection focuses on physics-informed machine learning, which is central to understanding the integration of scientific domain knowledge such as Newtonian, Hamiltonian, and Lagrangian mechanics into deep learning models, as surveyed in the paper. The rigorous course option provides a structured university-level introduction to AI concepts foundational to physics-informed ML, while the fast track offers a concise, focused series on physics-informed neural networks (PINNs) and related methods, ideal for quickly grasping key ideas and challenges.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [An Introduction to Artificial Intelligence](https://www.youtube.com/playlist?list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz) — NPTEL IIT Delhi · 99 videos · 20.3h across the first 60 episodes

**Watch only this:** Episodes 1-12 ("An Introduction to Artificial Intelligence | Prof. Mausam" through "Uniformed Search: Basic Search Strategies Part-3"), about 4 hours — these provide a solid AI foundation including search and optimization relevant to physics-informed ML.

*Why it unblocks this paper:* This NPTEL IIT Delhi course 'An Introduction to Artificial Intelligence' covers foundational AI concepts including search, optimization, and backpropagation, which underpin understanding of physics-informed machine learning architectures and training-level integration methods discussed in the paper.

*If you want all of it:* About 20.3 hours across the first 60 episodes, covering broad AI topics beyond physics-informed ML.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [PINN (Physics-Informed Neural Networks)](https://www.youtube.com/playlist?list=PLXmYoJbJ848pkMm9NGZZKXUQJ8XWIXZX8) — Karet Pentil · 17 videos · 2.6h across 17 episodes

**Watch only this:** Episodes 1-5 ("A Hands-on Introduction to Physics-informed Machine Learning" through "Solving differential equations with Neural Networks"), about 3 hours — these cover the essentials of PINNs and solving differential equations with ML.

*Why it unblocks this paper:* This playlist by Karet Pentil is dedicated to Physics-Informed Neural Networks (PINNs) and related physics-informed machine learning methods, directly addressing the core topics of the paper such as integrating differential equations and physical laws into neural networks.

*If you want all of it:* About 10.5 hours across all 17 episodes, including advanced topics and practical demos.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on knowledge-augmented deep learning, start by building a strong foundation in domain knowledge representation and physics-informed deep learning, which are key prerequisites for integrating domain knowledge into deep models. Then, explore neural-symbolic integration to grasp experiential knowledge integration approaches. Finally, focus on the core concept of knowledge integration methods in deep learning and conclude with the authors' own talk or the closest relevant advanced lecture to gain a comprehensive understanding of the survey's taxonomy and methodologies.

### Domain Knowledge Representation in AI *(prerequisite)*
Understanding how domain knowledge is represented is essential for integrating it effectively into deep learning models. This section covers foundational university lectures that rigorously explain knowledge representation techniques such as semantic networks, frames, and logic, which underpin the experiential knowledge category in the paper.

*How the paper uses it:* The paper categorizes domain knowledge into scientific and experiential types and discusses their representations, making knowledge representation foundational.

▶ [Lecture - 11 Knowledge Representation and Logic](https://www.youtube.com/watch?v=kXlr6ydiPAQ) — nptelhrd · 56:59 · 18y ago

### Physics-informed Deep Learning *(prerequisite)*
Physics-informed deep learning is a core example of integrating scientific knowledge into deep models to improve interpretability and physical consistency. The selected lecture provides a detailed, research-level introduction to Physics-Informed Neural Networks (PINNs), covering theory and applications relevant to the scientific knowledge integration discussed in the paper.

*How the paper uses it:* The paper highlights physics-informed learning as a key scientific knowledge integration method improving model interpretability and consistency.

▶ [Physics Informed Neural Networks | Theory and Application](https://www.youtube.com/watch?v=ddAZAq3gdm0) — Vizuara · 1:25:55 · 1y ago

### Neural-symbolic Integration *(prerequisite)*
Neural-symbolic integration combines symbolic reasoning with deep learning, representing a key experiential knowledge integration approach. The chosen invited talk from a reputable conference provides an advanced, research-focused presentation on logical neural networks, aligning with the paper's discussion on neural-symbolic methods.

*How the paper uses it:* The paper discusses neural-symbolic integration as a major experiential knowledge integration technique in knowledge-augmented deep learning.

▶ [KRHCAI Invited Talk by Alexander Gray: Logical Neural Networks](https://www.youtube.com/watch?v=m687EBE0Nqw) — KR conference series · 38:08 · 4y ago

### Knowledge Integration Methods in Deep Learning
This section covers the central concept of the paper: the four levels of knowledge integration into deep learning—data-level, architecture-level, training-level, and decision-level. The selected Stanford lecture provides a rigorous and comprehensive introduction to neural networks and their architectures, which is essential for understanding how knowledge can be integrated at different levels.

*How the paper uses it:* The paper categorizes integration methods into data-level, architecture-level, training-level, and decision-level approaches, which is central to its taxonomy.

▶ [Lecture 10 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=MfIjxPh6Pys) — Stanford Online · 1:20:14 · 6y ago

### Knowledge-augmented Deep Learning Survey Talk *(paper-talk search result; attribution unverified)*
To gain a comprehensive understanding of the paper's contributions and taxonomy, it is ideal to watch the authors' own presentation or a closely related advanced university lecture. Although no direct author talk on this exact paper was found, the Stanford CS231N lecture on 3D vision includes advanced deep learning topics relevant to knowledge integration and scientific knowledge embedding.

*How the paper uses it:* The authors' own talk would provide direct insights into the survey's taxonomy and methodologies; this lecture is the closest advanced substitute available.

▶ [Stanford CS231N Deep Learning for Computer Vision | Spring 2025 | Lecture 15: 3D Vision](https://www.youtube.com/watch?v=7lxrKDKtykM) — Stanford Online · 1:11:50 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand knowledge-augmented deep learning (KADL) as surveyed in the paper. It starts with how domain knowledge is represented in AI, then covers physics-informed deep learning as a key example of scientific knowledge integration, followed by neural-symbolic integration for experiential knowledge. Finally, it presents knowledge integration methods in deep learning, culminating in the core concept of knowledge-augmented deep learning surveyed in the paper.

### Domain Knowledge Representation in AI *(prerequisite)*
Understanding how domain knowledge is represented is essential before integrating it into deep learning models. This includes knowledge structures like semantic networks, frames, and logic that allow AI systems to encode and reason with information about the world.

*How the paper uses it:* The paper categorizes domain knowledge into scientific and experiential types and discusses their representations such as mathematical equations and knowledge graphs.

▶ [7. Layered Knowledge Representations](https://www.youtube.com/watch?v=oG6FyY2r9G0) — MIT OpenCourseWare · 1:49:44 · 12y ago

### Physics-informed Deep Learning *(prerequisite)*
Physics-informed deep learning integrates scientific knowledge, such as physical laws, into neural networks to improve interpretability and ensure physically consistent outputs. This approach uses physics-based constraints during training to guide model predictions.

*How the paper uses it:* The paper highlights physics-informed learning as a core example of scientific knowledge integration improving model interpretability and consistency.

▶ [Physics-Informed Neural Networks (PINNs) - An Introduction - Ben Moseley | Jousef Murad](https://www.youtube.com/watch?v=G_hIppUWcsc) — Jousef Murad LITE · 1:10:36 · 3y ago

### Neural-symbolic Integration *(prerequisite)*
Neural-symbolic integration combines symbolic reasoning methods with deep learning to incorporate experiential knowledge like logic rules and knowledge graphs. This hybrid approach aims to leverage the strengths of both symbolic AI and neural networks.

*How the paper uses it:* The paper discusses neural-symbolic integration as a key experiential knowledge integration approach.

▶ [Neuro Symbolic AI Explained : The Next Evolution of AI Agents](https://www.youtube.com/watch?v=_DuiSU_AkAM) — AI Tools Quest · 21:49 · 3w ago

### Knowledge Integration Methods in Deep Learning
Knowledge integration methods describe how domain knowledge is incorporated into deep learning models at different levels: data-level, architecture-level, training-level, and decision-level. Understanding these methods is crucial to grasp the taxonomy proposed in the paper.

*How the paper uses it:* The paper categorizes integration methods into four levels and reviews their benefits and use cases.

▶ [Deep Learning Explained](https://www.youtube.com/watch?v=cKvX_MqFWfo) — 365 Data Science · 10:29 · 1y ago

## Already in your library

- [Introduction to RAG (Retrieval Augmented Generation) | Deep Learning](https://www.youtube.com/watch?v=cXcgyzuljyY) — also for: InferScale: GPU-Native KV Injection for Personalized LLM Serving (Prashant Pandey)
- [Introduction to Knowledge Representation and Reasoning](https://www.youtube.com/watch?v=cckckL3uOW8) — also for: KnowTeX: Visualizing Mathematical Dependencies (Lawrence S. Moss)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)
- [Artificial intelligence 20 knowledge representation in ai](https://www.youtube.com/watch?v=rLFXyT10_As) — also for: Knowledge-Guided Machine Learning: A Paradigm Shift in AI for Science (Xiaowei Jia)
- [ETH Zürich AISE: Physics-Informed Neural Networks – Introduction](https://www.youtube.com/watch?v=D-F7BYRhAkQ) — also for: EINNs: Epidemiologically-Informed Neural Networks (Bijaya Adhikari)
- [Physics-Informed Machine Learning – Lecture 1 | Why Physics + AI?](https://www.youtube.com/watch?v=BVkGy4oz3Lg) — also for: Knowledge-Guided Machine Learning: A Paradigm Shift in AI for Science (Xiaowei Jia)
- [Physics Informed Neural Networks (PINNs) [Physics Informed Machine Learning]](https://www.youtube.com/watch?v=-zrY7P2dVC4) — also for: EINNs: Epidemiologically-Informed Neural Networks (Bijaya Adhikari)
- [An Introduction to Physics-Informed Neural Networks](https://www.youtube.com/watch?v=KffYsBqrBVo) — also for: Guaranteeing Conservation of Integrals with Projection in Physics-Informed Neural Networks (Luca Daniel)
- [BEST Neuro Symbolic AI EXPLAINER](https://www.youtube.com/watch?v=6xGfrLBrDfo) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)
- [MIT 6.S191 (2020): Neurosymbolic AI](https://www.youtube.com/watch?v=4PuuziOgSU4) — also for: Introduction to open-world AI (Larry B. Holder)
- [Lecture 10 - Knowledge Distillation | MIT 6.S965](https://www.youtube.com/watch?v=tT9Lnt6stwA) — also for: Attention Smoothing Is All You Need for Unlearning (Dongxiao Zhu)
- [Lec 01. Introduction to Deep Learning](https://www.youtube.com/watch?v=6FkRvTtUc-o) — also for: NeurLZ: An Online Neural Learning-based Method to Enhance Scientific Lossy Compression (Jinzhen Wang)
- [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path through knowledge-augmented deep learning as surveyed by Cui et al. (2022). Starting with a beginner-level implementation of physics-based training regularization, moving to an intermediate-level reimplementation of a Hamiltonian Neural Network for physics-informed modeling, and culminating in an advanced project addressing a key limitation by integrating differentiable simulation engines for end-to-end training, these projects demonstrate increasing mastery of domain knowledge integration techniques and their challenges.

### Beginner — Physics-based Training Regularization for Simple Pendulum Prediction
*Effort: a weekend, ~8 hours*

You build a neural network to predict the motion of a simple pendulum from time-series data, integrating scientific knowledge by adding a physics-based regularization term to the training loss that enforces energy conservation. This reproduces the training-level integration method discussed in the paper.

**Why it shows you understood the paper:** This project shows you understand how to incorporate domain knowledge as constraints during training to improve physical consistency and interpretability of deep learning models.

**Grounded in:** Training-level integration uses physics-based regularization terms to guide model training toward physically consistent outputs.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated simple pendulum time-series data generated using classical physics equations.

**Build it:**

1. Simulate or generate time-series data of a simple pendulum's angle and angular velocity using physics equations.
2. Build a feedforward neural network to predict the next state of the pendulum given the current state.
3. Implement a physics-based regularization term in the loss function that penalizes deviations from conserved energy.
4. Train the model with and without the regularization term and compare prediction accuracy and energy conservation.
5. Visualize the predicted trajectories and energy over time to demonstrate physical consistency.

**Ships as:** A GitHub repo with code, a Jupyter notebook demonstrating training with physics-based regularization, plots comparing baseline and physics-regularized models, and a README explaining the approach and results.

**Stretch goal:** Extend the model to handle noisy or partially observed pendulum data and evaluate robustness of physics-based regularization.

### Intermediate — Reimplementation of Hamiltonian Neural Network on a Mass-Spring System
*Effort: 2 weekends, ~20 hours*

You reimplement the core idea of Hamiltonian Neural Networks (HNNs) by building a neural network that learns the Hamiltonian function of a mass-spring system from trajectory data, enforcing energy conservation through the model architecture. You compare it against a baseline feedforward model without physics integration.

**Why it shows you understood the paper:** This project demonstrates your grasp of architecture-level knowledge integration by embedding physics laws into model structure to improve interpretability and physical consistency, as surveyed in the paper.

**Grounded in:** Hamiltonian and Lagrangian neural networks embed physics knowledge into model variables to enforce energy conservation.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated trajectories of a mass-spring system generated from classical mechanics equations.

**Build it:**

1. Simulate or obtain time-series data of position and momentum for a mass-spring system.
2. Implement a Hamiltonian Neural Network that outputs the Hamiltonian scalar and derives time derivatives via automatic differentiation.
3. Train the HNN to predict system dynamics and compare its performance to a baseline neural network that directly predicts next states.
4. Evaluate models on prediction accuracy and energy conservation over time.
5. Visualize trajectories, energy plots, and compare baseline vs HNN results.

**Ships as:** A GitHub repo with code, notebooks showing HNN implementation and training, comparison plots, and a README detailing the method, results, and insights.

**Stretch goal:** Incorporate noise in training data and evaluate robustness of HNN versus baseline under uncertainty.

### Advanced — End-to-End Differentiable Physics Simulation for Knowledge-Augmented Deep Learning
*Effort: 3-4 weeks*

You develop a prototype integrating a differentiable physics simulation engine with a deep learning model to enable end-to-end training, addressing the paper's limitation that most simulation engines are non-differentiable and hinder gradient-based learning. This project explores a future direction proposed by the authors.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the survey by implementing a flexible, differentiable simulation-based data-level integration, demonstrating advanced knowledge of integrating domain knowledge and overcoming real-world challenges.

**Grounded in:** Simulation engines used for data-level integration are often non-differentiable, limiting end-to-end training.

**Tech stack:** Python 3.11, PyTorch, JAX or TensorFlow (for differentiable programming), NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated from a simple physics system (e.g., pendulum or mass-spring) simulated with a differentiable physics engine or custom differentiable simulator implemented in JAX or PyTorch.

**Build it:**

1. Research and select or implement a simple differentiable physics simulation (e.g., pendulum dynamics) using JAX or PyTorch.
2. Build a deep learning model that takes simulation parameters or initial states as input and predicts system trajectories.
3. Integrate the differentiable simulator into the training loop to enable gradient backpropagation through the simulation.
4. Train the model end-to-end on synthetic data and evaluate prediction accuracy and physical consistency.
5. Compare results to a non-differentiable simulation baseline where gradients cannot flow through the simulator.
6. Document challenges, solutions, and implications for knowledge-augmented deep learning.

**Ships as:** A GitHub repo with code for the differentiable simulator and model, training scripts, evaluation notebooks, and a detailed README discussing the implementation, challenges, and how this addresses the paper's limitation.

**Stretch goal:** Extend the differentiable simulation to more complex physics systems or integrate with real-world datasets.
