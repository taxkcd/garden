---
title: "857 · ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition — Sathyanarayanan N. Aakur"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sathyanarayanan-n-aakur"
source_hash: "ef857773d7a93089f678460960e3227b4b552cd0e0f7a39be506dd6c8226888a"
sequence: 857
generator: "outreach-garden: managed"
---

# 857 · ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition

## At a glance

- **Professor:** Sathyanarayanan N. Aakur
- **Institution:** Auburn University
- **Paper:** [ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition](https://arxiv.org/pdf/2504.03948)
- **Authors:** Sanjoy Kundu, Shanmukha Vellamcheti, Sathyanarayanan N. Aakur
- **Year:** 2025

## Paper overview

This paper introduces ProbRes, a novel method for recognizing human activities from egocentric (first-person) video in open-world settings where many activities are unknown or unseen. ProbRes uses a probabilistic search guided by structured commonsense knowledge and vision-language models to efficiently identify activities without exhaustive search. It adapts to increasing complexity and achieves state-of-the-art results on multiple benchmark datasets while reducing computational cost.

### Why it matters

**Research problem:** Open-world egocentric activity recognition requires models to infer unseen and unconstrained activities from a vast search space, which is computationally challenging due to the need to handle unknown combinations of actions and objects without exhaustive enumeration.

**Why it matters:** Understanding human activities in real-time from egocentric video is critical for applications like assistive robotics, wearable AI, and autonomous agents. Current vision-language models struggle with scalability and efficiency in open-world scenarios, limiting practical deployment.

**Key contributions:**

- Proposed ProbRes, a probabilistic residual search strategy integrating structured priors with likelihood-driven inference for open-world activity recognition.
- Introduced a hierarchical taxonomy (L0–L3) defining levels of openness in egocentric activity recognition to systematically evaluate challenges.
- Demonstrated that ProbRes drastically reduces vision-language model calls while improving or maintaining recognition accuracy.
- Provided qualitative analysis highlighting limitations of current vision-language model embeddings and the importance of structured search.

## About the professor

**Sathyanarayanan N. Aakur** — Associate Professor, Department of Computer Science and Software Engineering, Auburn University.

Research interests: open-world learning under limited supervision, robust perception and reasoning, computer vision, neuro-symbolic AI, embodied and active perception, event understanding, applications in data-scarce domains such as genomics, agriculture, robotics, and security

### Research links

- [Faculty/profile page](https://saakur.github.io)
- [LinkedIn](https://www.linkedin.com/in/sathyanarayanan-aakur-926b35a1)
- [Social profile](https://twitter.com/saakur3)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Graphical Models
**The paper assumes:** probabilistic graphical models, Bayesian inference, structured probabilistic reasoning
**Already in this field?** Skip this entirely if you already understand probabilistic graphical models and Bayesian inference concepts used in AI and machine learning.

This background focuses on Probabilistic Graphical Models (PGMs), which are essential for understanding the probabilistic inference, structured priors, and likelihood integration techniques used in the ProbRes method for open-world egocentric activity recognition. The rigorous course offers a deep, foundational understanding suitable for thorough mastery, while the fast track provides a concise, intuition-driven introduction to key concepts, ideal for quickly gaining practical insight.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS221: Artificial Intelligence: Principles and Techniques | Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rMeDqwS1yFl3j3sR_-MQNEN) — Stanford Online · 20 videos · 24.9h across 20 episodes

**Watch only this:** Lectures 12, 13, and 14: 'Bayesian Networks I', 'Bayesian Networks and Gibbs Sampling', and 'Bayesian Networks and Learning' — about 3.7 hours total (3 lectures × ~74 minutes each). These cover the core probabilistic graphical model concepts and inference methods needed to understand the paper's approach.

*Why it unblocks this paper:* Stanford CS221 is a comprehensive AI course covering probabilistic graphical models, Bayesian networks, and inference techniques, directly relevant to the paper's use of probabilistic residual search and structured priors. It includes dedicated lectures on Bayesian networks and inference that explain the mathematical foundations underlying ProbRes.

*If you want all of it:* All 20 lectures, approximately 24.9 hours, for a complete grounding in AI principles including probabilistic models, search, and learning.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Probabilistic Graphical Models - PGM](https://www.youtube.com/playlist?list=PLPc1o70dh10L3_jqEEEImJd3h7sEX1p11) — Korawich Kavee · 7 videos · 2.9h across 7 episodes

**Watch only this:** Episodes 1 through 4: 'Probabilistic Graphical Models with Daphne Koller', 'Lecture 01 - Introduction', 'Probabilistic Graphical Models in Python', and 'Markov Chains Clearly Explained! Part - 1' — about 1.7 hours total (~25 minutes each). These provide a concise overview of PGMs and key inference ideas relevant to the paper.

*Why it unblocks this paper:* Korawich Kavee's 'Probabilistic Graphical Models - PGM' playlist offers clear, visual explanations of core PGM concepts including Markov chains and Bayesian networks, providing an accessible introduction to the probabilistic reasoning and graphical structures foundational to the paper's method.

*If you want all of it:* All 7 episodes, approximately 2.9 hours, for a more complete but still concise introduction to probabilistic graphical models.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ProbRes paper, start by building foundational knowledge on vision-language models and commonsense knowledge graphs, which provide the core technologies and structured priors used in the method. Then, study the jump diffusion process in embeddings to grasp the key technique enabling semantic local jumps in the search space. Next, review probabilistic residual search concepts to understand the probabilistic framework combining priors and likelihoods. Finally, focus on the core concept of the ProbRes paper itself, ideally through the authors' own talks or closely related academic lectures.

### Vision-language models *(prerequisite)*
Vision-language models (VLMs) are central to the paper as they provide the likelihoods used for activity recognition. Understanding their architecture, interpretability, and evaluation techniques is crucial to appreciate the challenges and innovations in ProbRes.

*How the paper uses it:* ProbRes relies on VLMs to compute likelihoods for candidate activities during search.

▶ [Interpretability in Vision-Language Models (VLMs) | Sneha Rao](https://www.youtube.com/watch?v=NgsGAn-ZA7c) — Vector Institute · 19:36 · 9mo ago

### Commonsense knowledge graphs *(prerequisite)*
Commonsense knowledge graphs like ConceptNet provide structured priors that guide the search process in ProbRes. Learning about knowledge graph construction, usage, and their role in AI reasoning will clarify how ProbRes leverages structured commonsense knowledge.

*How the paper uses it:* ProbRes uses ConceptNet to estimate prior probabilities guiding efficient exploration.

▶ [Building and Using Knowledge Graphs to Turn Data into Knowledge - Craig Knoblock, USC](https://www.youtube.com/watch?v=lmbXVrySfvg) — SAIConference · 32:49 · 4y ago

### Jump diffusion process in embeddings *(prerequisite)*
The jump diffusion process in embedding spaces enables semantic local jumps during search, balancing exploration and exploitation. Understanding embeddings and their geometric properties is essential to grasp this novel search mechanism.

*How the paper uses it:* ProbRes employs a jump diffusion process in text embedding space to enable meaningful local jumps.

▶ [Lec 07 | Word Representation: Word2Vec & fastText](https://www.youtube.com/watch?v=KKJxzPxhkdo) — NPTEL IIT Delhi · 1:14:28 · 1y ago

### Probabilistic residual search
Probabilistic residual search is the core methodological framework of ProbRes, combining structured priors with likelihood-driven inference for efficient open-world activity recognition. Studying probabilistic learning and residual concepts will deepen understanding of this approach.

*How the paper uses it:* ProbRes proposes a probabilistic residual search strategy integrating priors and likelihoods for efficient inference.

▶ [Lecture - 38 Probabilistic Learning](https://www.youtube.com/watch?v=GyrtLQmjsak) — nptelhrd · 59:38 · 18y ago

### ProbRes paper talk *(paper-talk search result; attribution unverified)*
The authors' own talks or closely related academic lectures provide the most direct and detailed insight into the ProbRes method, its motivations, and experimental results. These talks contextualize the paper's contributions within the broader research landscape.

*How the paper uses it:* Directly hear the authors explain ProbRes and its novel contributions to open-world egocentric activity recognition.

▶ [8 4 Jump diffusion models](https://www.youtube.com/watch?v=ZVHnSthFFUI) — caltech · 11:16 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ProbRes paper, start by building foundational knowledge of vision-language models and commonsense knowledge graphs, which provide the core inputs and priors for the method. Next, learn about open-world activity recognition to grasp the problem context. Then, explore the jump diffusion process in embeddings to understand the semantic search mechanism. Finally, study probabilistic residual search to see how the paper combines these ideas into an efficient inference strategy.

### Vision-language models *(prerequisite)*
Vision-language models (VLMs) connect images and text, enabling machines to interpret visual content with natural language understanding. They provide likelihood scores that help identify activities in videos by matching visual inputs to textual descriptions.

*How the paper uses it:* ProbRes uses VLM likelihoods as a key signal to evaluate candidate activities during search.

▶ [Interpretability in Vision-Language Models (VLMs) | Sneha Rao](https://www.youtube.com/watch?v=NgsGAn-ZA7c) — Vector Institute · 19:36 · 9mo ago

### Commonsense knowledge graphs *(prerequisite)*
Commonsense knowledge graphs like ConceptNet organize everyday knowledge as structured relationships between concepts, enabling machines to reason about plausible actions and objects. They provide semantic priors that guide search toward meaningful activity hypotheses.

*How the paper uses it:* ProbRes leverages ConceptNet to estimate prior probabilities that guide efficient exploration of the activity space.

▶ [AI Explained - Knowledge Graphs | Turning Raw Data Into Useful Information](https://www.youtube.com/watch?v=Q5izD6Xlb8o) — SandboxAQ · 4:24 · 2y ago

### Open-world activity recognition *(prerequisite)*
Open-world activity recognition involves identifying human actions in unconstrained, real-world settings where many activities are unknown or unseen. This setting challenges models to generalize beyond fixed label sets and handle vast search spaces efficiently.

*How the paper uses it:* The paper addresses open-world egocentric activity recognition, motivating the need for scalable and adaptive inference methods like ProbRes.

▶ [Human Activity Recognition Using Smartphones Dataset](https://www.youtube.com/watch?v=1p9cpMIrpHw) — Fantastic Datasets and Where To Find Them · 10:47 · 6mo ago

### Jump diffusion process in embeddings *(prerequisite)*
Jump diffusion is a probabilistic process that enables meaningful local jumps in a continuous embedding space, balancing exploration and exploitation. In text embedding spaces, this helps efficiently navigate semantically related activity candidates without exhaustive search.

*How the paper uses it:* ProbRes uses a jump diffusion process in the text embedding space to structure the search for activities with semantic locality.

▶ [What Vector Embeddings Actually Are: Intuition to Reality](https://www.youtube.com/watch?v=8OjWCWNnqlg) — Off By One Security · 23:44 · 7mo ago

### Probabilistic residual search
Probabilistic residual search combines structured priors and likelihoods to iteratively refine predictions by focusing on residual uncertainty. This balances prior-guided exploration with likelihood-driven exploitation to efficiently identify the correct activity.

*How the paper uses it:* ProbRes's core method is a probabilistic residual search strategy integrating commonsense priors and VLM likelihoods for open-world activity recognition.

▶ [Lecture - 38 Probabilistic Learning](https://www.youtube.com/watch?v=GyrtLQmjsak) — nptelhrd · 59:38 · 18y ago

## Already in your library

- [Diffusion Models | DDPM Explained](https://www.youtube.com/watch?v=H45lF4sUgiE) — also for: Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes (Julian Togelius)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [End-to-End (small) Vision Language Model Fine-tuning ...](https://www.youtube.com/watch?v=_EMfJSmLSKE) — also for: CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries (Haipeng Chen)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Vision Transformer](https://www.youtube.com/watch?v=vJF3TBI8esQ) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Vision Language Models | Multi Modality, Image Captioning, Text-to-Image | Advantages of VLM's](https://www.youtube.com/watch?v=lbGugemmozk) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Vision-Language Models A Gentle Introduction](https://www.youtube.com/watch?v=sIX9mY185_k) — also for: Reconstructing Hand-Held Objects in 3D from Images and Videos (Georgia Gkioxari)
- [Knowledge Graphs - Computerphile](https://www.youtube.com/watch?v=PZBm7M0HGzw) — also for: CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing (Utkarshani Jaimini)
- [Brief Introduction To Knowledge Graph In NLP](https://www.youtube.com/watch?v=WZilmUNVm2U) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [Vector Databases simply explained! (Embeddings & Indexes)](https://www.youtube.com/watch?v=dN0lsF2cvm4) — also for: CactusDB: Unlock Co-Optimization Opportunities for SQL Queries and AI/ML Model Inferences (Jia Zou)
- [Introduction to Word Embedding | Static vs Dynamic Embedding | Deep Learning](https://www.youtube.com/watch?v=95eQCwQpS4k) — also for: Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM (Christopher Homan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the ProbRes method for open-world egocentric activity recognition. Starting with a small-scale implementation of the probabilistic residual search mechanism, you then reimplement the core ProbRes approach on a public egocentric video dataset to compare efficiency and accuracy gains. Finally, you extend the method by exploring hyperbolic embeddings to address the paper's noted limitation on unstructured text embeddings, showing initiative on a future research direction.

### Beginner — Probabilistic Residual Search Prototype
*Effort: a weekend, ~8 hours*

You build a simplified prototype of the probabilistic residual search framework described in ProbRes. This includes implementing a toy jump diffusion process in a low-dimensional embedding space (e.g., 2D or 3D) to simulate prior-guided exploration and likelihood-driven exploitation phases. You visualize the search trajectory over a small synthetic semantic space to demonstrate how the search balances exploration and exploitation.

**Why it shows you understood the paper:** This project shows you grasp the core mechanism of ProbRes's search strategy and how structured priors and likelihoods guide efficient inference without exhaustive enumeration.

**Grounded in:** Demonstrates the key contribution: "ProbRes balances exploration and exploitation phases for efficient search."

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic toy data simulating semantic embeddings; no real dataset required.

**Build it:**

1. Implement a simple 2D embedding space with points representing candidate activities.
2. Define a prior probability distribution over the space simulating commonsense priors.
3. Simulate a jump diffusion process that alternates between exploration (guided by prior) and exploitation (guided by likelihood).
4. Visualize the search trajectory and probability updates over iterations.
5. Write a README explaining the relation to ProbRes's search framework.

**Ships as:** A Jupyter Notebook with code and visualizations of the probabilistic residual search process on synthetic data, plus a README linking it to the paper's method.

**Stretch goal:** Add a simple likelihood model based on a toy vision-language model score to drive exploitation steps.

### Intermediate — Reimplementation of ProbRes on GTEA Gaze Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core ProbRes method from the paper using the publicly available GTEA Gaze dataset as a substitute for egocentric activity recognition data. You integrate commonsense priors from ConceptNet and a pre-trained vision-language model to perform probabilistic residual search for activity recognition. You compare your implementation's recognition accuracy and number of VLM calls against a baseline exhaustive VLM scoring approach.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main algorithmic contribution and reproduce its efficiency and accuracy improvements on a real benchmark dataset.

**Grounded in:** Validates the key result: "ProbRes achieves state-of-the-art performance on benchmark datasets (GTEA Gaze) while drastically reducing VLM calls."

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), ConceptNet API or local graph, NumPy, Pandas

**Data:** GTEA Gaze dataset (publicly available egocentric activity recognition dataset) used as a proxy for the paper's data.

**Build it:**

1. Download and preprocess the GTEA Gaze dataset for activity recognition tasks.
2. Implement a baseline exhaustive vision-language model scoring approach for activity labels.
3. Extract structured commonsense priors from ConceptNet relevant to actions and objects in the dataset.
4. Implement the probabilistic residual search framework combining priors and VLM likelihoods with jump diffusion in embedding space.
5. Evaluate recognition accuracy (e.g., WUPS or phrase-level accuracy) and count VLM calls for both baseline and ProbRes.
6. Document results and compare efficiency and accuracy gains.

**Ships as:** A Python project with scripts to run baseline and ProbRes methods on GTEA Gaze, evaluation metrics, and a README explaining the implementation and results.

**Stretch goal:** Add the final refinement step decomposing activities into action and object components for re-ranking as described in the paper.

### Advanced — Hyperbolic Embeddings for Improved ProbRes Search Efficiency
*Effort: 3+ weeks*

You extend the ProbRes framework by replacing the standard text embedding space with hyperbolic embeddings to improve semantic locality and reduce erratic search jumps. You implement or integrate a hyperbolic embedding model for activity labels and adapt the jump diffusion search process accordingly. You evaluate the impact on search efficiency and recognition accuracy on a public egocentric dataset (e.g., EPIC-Kitchens).

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing your ability to innovate on the method and contribute to ongoing research challenges.

**Grounded in:** Addresses the limitation and future direction: "Current text embeddings lack semantic organization, causing erratic search jumps" and "Explore hyperbolic embeddings to improve semantic locality and search efficiency."

**Tech stack:** Python 3.11, PyTorch, Transformers, Geoopt or similar hyperbolic geometry library, NumPy, Pandas

**Data:** EPIC-Kitchens dataset (public egocentric activity recognition benchmark) used as a proxy for the paper's data.

**Build it:**

1. Study hyperbolic embedding models and select a suitable implementation (e.g., Poincaré embeddings).
2. Generate hyperbolic embeddings for activity labels and related concepts from ConceptNet.
3. Adapt the probabilistic residual search algorithm to operate in hyperbolic embedding space.
4. Run experiments comparing search trajectories, VLM calls, and recognition accuracy against the original Euclidean embedding approach.
5. Analyze and visualize improvements in semantic locality and search efficiency.
6. Write a detailed report and README documenting methodology, experiments, and findings.

**Ships as:** A research-style codebase and report demonstrating the integration of hyperbolic embeddings into ProbRes and its effect on search efficiency and accuracy.

**Stretch goal:** Incorporate additional contextual cues such as human-object interactions or scene context to further enhance inference.
