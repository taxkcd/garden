---
title: "005 · Hidden Anchors in Multi-Agent LLM Deliberation — R. V. Dantu"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-index-html"
source_hash: "3a22e32af43c40a22e085ad0683c99ab611296bda2f766e66ecc8ae9a79c693d"
sequence: 5
generator: "outreach-garden: managed"
---

# 005 · Hidden Anchors in Multi-Agent LLM Deliberation

## At a glance

- **Professor:** R. V. Dantu
- **Institution:** University of North Texas
- **Paper:** [Hidden Anchors in Multi-Agent LLM Deliberation](https://arxiv.org/abs/2606.19494)
- **Authors:** Apurba Pokharel, Ram Dantu
- **Year:** 2026

## Paper overview

This paper studies how multiple large language model (LLM) agents deliberate together to improve reasoning accuracy. It challenges prior models that treat deliberation as a simple averaging process and instead proposes a new model where each agent has a hidden internal belief (anchor) that influences its opinions. This hidden-anchor model better explains observed behaviors where agents' confidence in the correct answer can exceed initial beliefs, a phenomenon classical models cannot reproduce.

### Why it matters

**Research problem:** Understanding and modeling the internal dynamics of multi-agent LLM deliberation, specifically why and how deliberation leads to improved accuracy and how agents' opinions evolve over rounds.

**Why it matters:** Multi-agent LLM deliberation is increasingly used to improve reasoning and accuracy in AI systems. However, prior work treats deliberation as a black box without modeling the underlying opinion dynamics. A better model can explain observed behaviors and guide the design of more effective multi-agent systems.

**Key contributions:**

- Proposed a new closed-loop interaction dynamics model for multi-agent LLM deliberation including a hidden per-agent anchor.
- Empirically characterized where this dynamics converges, showing deliberation settles within the convex hull defined by agents’ recovered anchor beliefs.
- Developed a system identification and held-out validation procedure to recover anchors from trajectories and test model generalization.
- Demonstrated that hidden-anchor behavior varies across LLM families, forming a spectrum rather than a uniform property.

## About the professor

**R. V. Dantu** — Professor, Computer Science and Engineering, University of North Texas.

### Research links

- [Faculty/profile page](http://www.cse.unt.edu/~rdantu/index.html)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and core knowledge needed to understand the paper "Hidden Anchors in Multi-Agent LLM Deliberation." It covers essential mathematical concepts like linear algebra and probability, introduces dynamical systems theory relevant to modeling opinion evolution, explains classical multi-agent consensus and opinion dynamics models, and covers the fundamentals of large language models. The final advanced stage on system identification is included to understand parameter estimation techniques used in the paper. Follow the stages in order to build a solid background before reading the paper.

**The paper assumes:** linear algebra, probability theory, dynamical systems, multi-agent consensus models, large language model fundamentals, opinion dynamics, system identification
**Time to work through:** roughly 70-80 hours if you watch everything, about 40-45 hours if you follow the skip guidance for each playlist.
**Already in this field?** Skip stages 1-3 if you have a solid background in linear algebra, probability, and dynamical systems; skip stage 4 if you already understand multi-agent consensus and opinion dynamics models.

### Stage 1 · Linear Algebra and Probability Basics *(foundational)*
The paper models opinions and anchors as vectors and probabilities, requiring understanding of vector spaces, convex hulls, and probability distributions to follow the mathematical formulation and data representation.

▶ **Course:** [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

*What to watch:* Watch the MIT 18.06 Linear Algebra, Spring 2005 playlist by Prof. Gilbert Strang, focusing on episodes 1 through 23 which cover geometry of linear equations, matrix operations, vector spaces, subspaces, independence, basis, dimension, projections, determinants, and eigenvalues. These topics provide the linear algebra foundation needed to understand convex hulls and vector operations in the paper.

*Move on when you can:* Explain what a convex hull is and compute it for a small set of points; calculate basic probabilities and conditional probabilities.

### Stage 2 · Introduction to Dynamical Systems *(foundational)*
The deliberation process is modeled as a closed-loop dynamical system; understanding state evolution, fixed points, and stability is essential to grasp how opinions evolve over rounds.

▶ **Course:** [Dynamical Systems and Ergodic Theory (ETH Zurich)](https://www.youtube.com/playlist?list=PLgJq62Zrc2XIdpQQ2ryKjTmqGENNPDfAy) — QCE · 25 videos · 37.6h across 25 episodes

*What to watch:* Focus on the first 10 lectures of the ETH Zurich Dynamical Systems and Ergodic Theory playlist, which introduce discrete-time dynamical systems, iteration of functions, fixed points, and stability analysis. These concepts directly relate to the closed-loop opinion dynamics modeled in the paper.

*Move on when you can:* Derive and analyze a simple discrete-time linear dynamical system and determine its fixed points and stability.

### Stage 3 · Multi-Agent Systems and Consensus Models *(core)*
The paper compares its hidden-anchor model to classical open-loop consensus models like DeGroot and Friedkin–Johnsen; understanding these is critical to appreciate the novelty and limitations of prior approaches.

▶ **Course:** [Introduction to Multi-Agent Systems](https://www.youtube.com/playlist?list=PLFW6lRTa1g81K7Ar6OT5YyK8p3sQ0B5bB) — IIT KANPUR-NPTEL · 56 videos · 31.3h across 56 episodes

*What to watch:* Watch the IIT KANPUR-NPTEL Introduction to Multi-Agent Systems playlist, focusing on the early lectures (1-22) that cover fundamentals of multi-agent systems, consensus algorithms, and opinion convergence. This will provide the background to understand classical consensus models referenced in the paper.

*Move on when you can:* Derive the DeGroot consensus update rule and simulate opinion convergence in a small network of agents.

### Stage 4 · Opinion Dynamics and Social Influence Models *(core)*
The paper builds on opinion dynamics theory to model how agents' beliefs evolve and influence each other, including latent internal beliefs (anchors); familiarity with these models is necessary to understand the paper’s assumptions and comparisons.

▶ **Course:** [Social Psychology Mini-Lectures](https://www.youtube.com/playlist?list=PL1Veqqo7Ddg7mAlVmVvyD2dQXQlAxas3I) — Professor Q · 88 videos · 4.5h across the first 60 episodes

*What to watch:* Focus on the first 20 episodes of the Social Psychology Mini-Lectures playlist by Professor Q, which cover social influence, conformity, compliance, and opinion formation theories. These lectures provide the social psychology foundation for understanding opinion dynamics and models like Friedkin–Johnsen.

*Move on when you can:* Explain the Friedkin–Johnsen model and simulate opinion updates with stubborn agents.

### Stage 5 · Large Language Models Fundamentals *(core)*
The agents in the paper are LLMs whose outputs form the opinion trajectories; understanding LLM architectures, output probabilities, and reasoning capabilities is needed to interpret the experimental setup and results.

▶ **Course:** [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

*What to watch:* Watch the Stanford CME295: Transformers and Large Language Models I Autumn 2025 playlist, focusing on lectures 1 through 6 which cover the Transformer architecture, LLM training, tuning, and reasoning. This will give a solid understanding of how LLMs generate outputs and probabilities relevant to the paper's experiments.

*Move on when you can:* Describe the transformer architecture and explain how LLMs generate probability distributions over tokens.

### Stage 6 · System Identification and Parameter Estimation *(advanced)*
The paper recovers latent hidden anchors by fitting the closed-loop dynamical model to observed opinion trajectories, requiring knowledge of system identification techniques and validation procedures.

▶ **Course:** [System Identification Course](https://www.youtube.com/playlist?list=PLX0qIDrAEpIo) — Real Control Engineering · 18 videos · 2.4h across the first 17 episodes

*What to watch:* Watch the Real Control Engineering System Identification Course playlist, focusing on the first 10 episodes which cover parameter estimation methods including least squares, maximum likelihood, model selection, and validation techniques. These are directly applicable to the paper's system identification approach.

*Move on when you can:* Perform parameter estimation for a simple dynamical system given observed state trajectories and validate the model on held-out data.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Hidden Anchors in Multi-Agent LLM Deliberation," start by building foundational knowledge on classical opinion dynamics consensus models and closed-loop dynamical systems, which underpin the mathematical modeling of agent opinion updates. Then, explore multi-agent systems reasoning to grasp how multiple agents interact and deliberate to improve reasoning. Finally, focus on the paper's core concept of the hidden-anchor model of deliberation, prioritizing any available talks by the authors or closely related academic presentations.

### Opinion dynamics consensus models *(prerequisite)*
This section covers classical models like DeGroot and Friedkin–Johnsen, which the paper extends by introducing hidden anchors. Understanding these models is essential to appreciate how the new model improves upon classical consensus frameworks by explaining opinion dynamics that classical models cannot.

*How the paper uses it:* The paper challenges classical open-loop consensus models and proposes a hidden-anchor model that better fits observed deliberation data.

▶ [Opinion Dynamics and Influence in Social Networks](https://www.youtube.com/watch?v=fjIDEDqgkDE) — Microsoft Research · 9 years ago

### Closed-loop dynamical systems *(prerequisite)*
This section introduces the mathematical framework of closed-loop dynamical systems, which is the basis for modeling the opinion update process in multi-agent LLM deliberation. Understanding closed-loop feedback and system dynamics is crucial to grasp how hidden anchors influence agent opinions over time.

*How the paper uses it:* The paper models multi-agent LLM deliberation as a closed-loop dynamical system with hidden per-agent anchors influencing opinion updates.

▶ [Linear Dynamical Systems and Control (Prof. Scott Dawson) – Part 1](https://www.youtube.com/watch?v=WC5hzACrIx0) — von Karman Institute for Fluid Dynamics · 25:48 · 3 years ago

### Multi-agent systems reasoning *(prerequisite)*
This section explores how multiple agents interact and deliberate to improve reasoning outcomes. It provides context on the collaborative dynamics and coordination mechanisms among agents, which is foundational to understanding the multi-agent LLM deliberation studied in the paper.

*How the paper uses it:* The paper studies multi-agent LLM deliberation where multiple agents deliberate together to improve reasoning accuracy.

▶ [Brain-Inspired Graph Multi-Agent Systems for LLM Reasoning](https://www.youtube.com/watch?v=c9dyH0tnaQY) — Alex Hitt · 3 months ago

### Hidden-anchor model of deliberation
This section focuses on the paper's central contribution: the hidden-anchor model that explains internal agent beliefs influencing opinion dynamics beyond classical consensus. It is critical to understand this novel model to appreciate the paper's empirical findings and theoretical advances.

*How the paper uses it:* The hidden-anchor model is the core concept proposed by the authors to explain observed deliberation behaviors in multi-agent LLM systems.

▶ [SICSS Istanbul 2026 | Simulating Public Deliberation with Multi-Agent LLMs (Ceren Budak)](https://www.youtube.com/watch?v=2QOOVQI5JKQ) — Akin Unver · 21:01 · 9 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's novel hidden-anchor model in multi-agent LLM deliberation. We start with the basics of closed-loop dynamical systems to grasp the mathematical framework of opinion updates, then cover classical opinion dynamics consensus models to see prior approaches the paper extends. Next, we explore multi-agent systems reasoning to understand how agents interact and deliberate. Finally, we conclude with latent variable inference to appreciate how hidden anchors are inferred from observed data.

### Closed-loop dynamical systems *(prerequisite)*
Closed-loop dynamical systems describe processes where the system's output feeds back into its input, influencing future states. Understanding this feedback mechanism is key to modeling how agents update opinions based on both internal beliefs and neighbors' inputs.

*How the paper uses it:* The paper models multi-agent LLM deliberation as a closed-loop dynamical system where hidden anchors pull opinions toward latent priors.

▶ [Closed Loop Systems](https://www.youtube.com/watch?v=8m0VP5_feOY) — Neso Academy · 4:55 · 6 years ago

### Opinion dynamics consensus models *(prerequisite)*
Classical opinion dynamics models like DeGroot and Friedkin–Johnsen explain how agents iteratively update opinions by averaging neighbors' views, leading to consensus. These models form the baseline that the paper challenges with its hidden-anchor approach.

*How the paper uses it:* The paper shows classical open-loop consensus models cannot explain observed opinion escapes beyond initial opinion hulls.

▶ [Opinion Dynamics and Influence in Social Networks](https://www.youtube.com/watch?v=fjIDEDqgkDE) — Microsoft Research · 9 years ago

### Latent variable inference in AI *(prerequisite)*
Latent variable inference involves recovering hidden internal states or beliefs from observable outputs. This is crucial for interpreting the hidden anchors as inferred internal beliefs influencing agent opinions.

*How the paper uses it:* The paper recovers latent hidden anchors from output-probability trajectories rather than direct model internals.

▶ [What is a latent variable?](https://www.youtube.com/watch?v=SNeC_SrbNZw) — Machine Learning & Simulation · 6:43 · 5 years ago

## Already in your library

- [Linear Dynamical Systems and Control (Prof. Scott Dawson)](https://www.youtube.com/watch?v=Y5jWRnya3ds) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)
- [Control Systems Lectures - Closed Loop Control](https://www.youtube.com/watch?v=O-OqgFE9SD4) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)
- [The Mathematics of Influence and Opinion Dynamics](https://www.youtube.com/watch?v=VKGsRU5yBzc) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)
- [LLM-Deliberation: Evaluating LLMs with Interactive Multi-Agent Negotiation Games](https://www.youtube.com/watch?v=OAXUkjd7mec) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the hidden-anchor model in multi-agent LLM deliberation. The beginner project reproduces a key figure illustrating classical vs. hidden-anchor opinion dynamics using synthetic data. The intermediate project implements the core hidden-anchor dynamical system model and fits it to a symptom-to-disease diagnosis dataset, comparing it to classical consensus baselines. The advanced project extends the model by applying it to a new domain (sentiment classification) and explores how anchor parameters affect deliberation dynamics and accuracy, addressing a future direction from the paper.

### Beginner — Simulate and Visualize Hidden-Anchor Opinion Dynamics
*Effort: a weekend, ~8 hours*

You build a Python script that simulates opinion trajectories of three agents over multiple rounds under both classical open-loop consensus models (DeGroot) and the hidden-anchor closed-loop model. You visualize how opinions evolve and demonstrate the escape of opinions beyond the initial opinion hull only under the hidden-anchor model.

**Why it shows you understood the paper:** This project shows you grasp the fundamental difference between classical consensus and the hidden-anchor model, reproducing a key behavioral phenomenon (escape beyond initial opinion hull) from the paper's Figure 1 and Eq. 5-6.

**Grounded in:** Claim: Classical open-loop consensus models cannot reproduce the observed escape of the gold-class probability beyond the initial opinion hull. Figure 1 (left and middle) shows open-loop baselines keep opinions inside initial hull; real LLM deliberation violates this (Eq. 5). Modeling deliberation as a closed-loop system with hidden per-agent anchors explains the escape behavior (Eq. 6).

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic opinion trajectories generated by your simulation code, mimicking the paper's 3-agent, 5-round setup.

**Build it:**

1. Implement the classical DeGroot consensus update rule for 3 agents over 5 rounds.
2. Implement the hidden-anchor closed-loop update rule incorporating per-agent latent anchors.
3. Simulate opinion trajectories starting from initial opinions inside a convex hull.
4. Plot opinion trajectories for both models on the same graph, highlighting escape beyond initial hull only in hidden-anchor model.
5. Write a README explaining the simulation, equations used, and the significance of escape behavior.

**Ships as:** A GitHub repo with Python scripts and plots demonstrating opinion dynamics under classical and hidden-anchor models, with a clear README explaining the phenomenon.

**Stretch goal:** Add interactive visualization with sliders to adjust anchor strength and location to see effects on opinion trajectories.

### Intermediate — Reimplement Hidden-Anchor Model on Symptom-Disease Diagnosis Data
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core closed-loop hidden-anchor dynamical system model from scratch in Python. Using the symptom-to-disease diagnosis dataset from Kaggle (https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset) as a substitute for the paper's data, you fit the model to multi-agent opinion trajectories simulated or constructed from the dataset. You compare model fit (R2) against a classical Friedkin–Johnsen consensus baseline.

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's main methodological contribution (system identification of hidden anchors) and reproduce the key empirical result that the hidden-anchor model fits deliberation data better than classical baselines.

**Grounded in:** Key contribution: Developed a system identification and held-out validation procedure to recover anchors from trajectories and test model generalization. Key result: The hidden-anchor model fits observed data significantly better in-sample than classical open-loop consensus models (Table 1).

**Tech stack:** Python 3.11, numpy, scipy, pandas, matplotlib

**Data:** Disease symptom description dataset from Kaggle (https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset) used as a substitute for the paper's symptom-to-disease diagnosis task data.

**Build it:**

1. Download and preprocess the Kaggle symptom-disease dataset to create multi-agent opinion trajectories (e.g., simulate agents' initial opinions and deliberation rounds).
2. Implement the hidden-anchor closed-loop dynamical system model equations and a classical Friedkin–Johnsen consensus baseline.
3. Fit both models to the opinion trajectories using least squares or system identification techniques to recover anchor parameters.
4. Evaluate and compare model fits using R2 or similar metrics on in-sample and held-out data splits.
5. Visualize opinion trajectories and model fits, and write a README explaining the implementation, results, and comparison.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to fit and compare hidden-anchor and classical consensus models on symptom-disease data, including evaluation metrics and visualizations.

**Stretch goal:** Extend the model fitting to include uncertainty quantification or bootstrap confidence intervals for recovered anchors.

### Advanced — Extend Hidden-Anchor Model to Sentiment Classification Domain
*Effort: 3-4 weeks*

You extend the hidden-anchor multi-agent deliberation model to a new domain: sentiment classification. Using a public sentiment dataset (e.g., IMDb reviews or Twitter sentiment), you simulate multi-agent opinion trajectories over multiple rounds of deliberation. You implement the system identification procedure to recover hidden anchors and analyze how anchor location and strength affect deliberation dynamics and classification accuracy. This addresses the paper's future direction of extending to other domains and exploring anchor influence on accuracy.

**Why it shows you understood the paper:** This project shows deep comprehension by applying the paper's core model beyond its original domain, tackling a stated limitation and future direction. It also explores the relationship between hidden-anchor dynamics and task accuracy, a nuanced aspect discussed in the paper.

**Grounded in:** Future directions: Extending the study to other domains beyond symptom-to-disease diagnosis to test generality. Also, exploring richer deliberation frameworks that improve accuracy. Limitation: The dynamics modeled do not directly improve task accuracy; the most dynamic model is less accurate.

**Tech stack:** Python 3.11, numpy, scipy, pandas, scikit-learn, matplotlib

**Data:** Public sentiment classification dataset such as IMDb movie reviews or Twitter sentiment dataset (not from paper but a well-known substitute).

**Build it:**

1. Select and preprocess a public sentiment classification dataset to create multi-agent initial opinions (e.g., probability distributions over sentiment classes).
2. Simulate multi-agent deliberation trajectories over multiple rounds using the hidden-anchor closed-loop model.
3. Implement system identification to recover hidden anchors from simulated or real multi-agent opinion trajectories.
4. Analyze how varying anchor parameters (location, strength) influence deliberation convergence and classification accuracy.
5. Compare results to classical consensus models and discuss implications for designing multi-agent LLM systems.
6. Document methodology, results, and insights in a detailed README.

**Ships as:** A GitHub repo demonstrating extension of the hidden-anchor model to sentiment classification, with code, analysis, and discussion of anchor effects on deliberation and accuracy.

**Stretch goal:** Incorporate a judge agent or retrieval augmentation to explore richer deliberation frameworks improving accuracy, as suggested by the paper.

_The paper's own code and data are not publicly released; the intermediate project uses a Kaggle symptom-disease dataset as a substitute, which may differ in format and scale from the paper's data._
