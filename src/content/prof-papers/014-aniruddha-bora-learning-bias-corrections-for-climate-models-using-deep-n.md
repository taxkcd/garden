---
title: "014 · Learning bias corrections for climate models using deep neural operators — Jenna L. Marquard"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aniruddhabora-github-io"
source_hash: "2ed81629ad815bf58fe77f7ef89648b1bbd441819495f6ef20b098ccf7985974"
sequence: 14
generator: "outreach-garden: managed"
---

# 014 · Learning bias corrections for climate models using deep neural operators

## At a glance

- **Professor:** Jenna L. Marquard
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** Learning bias corrections for climate models using deep neural operators
- **Authors:** Aniruddha Bora, Khemraj Shukla, Shixuan Zhang, Bryce Harrop, Ruby Leung, George Em Karniadakis
- **Year:** 2023

## Paper overview

This paper develops a machine learning model using Deep Operator Networks (DeepONet) combined with autoencoders to efficiently learn and correct biases in low-resolution climate model simulations. The model predicts the nudging tendencies that adjust simulations towards more accurate reanalysis data, improving climate model accuracy and efficiency.

### Why it matters

**Research problem:** Climate models at low resolution are computationally efficient but suffer from biases due to limited spatial resolution and inaccurate physical parameterizations. Existing bias correction methods have limited generalization and rely on relaxation-based nudging corrections.

**Why it matters:** Biases in climate models reduce the accuracy and reliability of climate predictions, which are critical for understanding and preparing for climate-related events such as hurricanes. Improving bias correction can lead to more skillful and computationally efficient climate simulations.

**Key contributions:**

- Development of a DeepONet-based surrogate model for bias correction in climate models.
- Integration of convolutional autoencoders to represent high-dimensional nudging tendencies in a latent space.
- Training and validation of the model on Energy Exascale Earth System Model (E3SMv2) data nudged towards ERA5 reanalysis.
- Demonstration of the model's ability to predict nudging tendencies with high correlation and capture the track of Hurricane Sandy accurately.

## About the professor

**Jenna L. Marquard** — Assistant Professor, Department of Computer Science, Univ. of Massachusetts Amherst.

Research interests: Physics-Informed and Scientific Machine Learning, Generative AI for Scientific Modeling, Interpretable Scientific Machine Learning, Surrogate Modeling for Multiphysics Systems, Multi-Fidelity and Data-Efficient Learning, Numerical Methods + AI for Scientific Discovery, Inverse Design for Metamaterials, Symbolic Regression and Grey box modelling

### Research links

- [Faculty/profile page](https://mie.umass.edu/faculty/jenna-marquard)
- [Professor website](https://aniruddhabora.github.io)
- [Resolved homepage](https://aniruddhabora.github.io/)
- [Lab website](https://aniruddhabora.github.io/spark/)
- [Google Scholar](https://scholar.google.com/citations?user=4OMm56YAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/aniruddha-bora-49b73a80/)

## Learning path

To deeply understand the paper on learning bias corrections for climate models using Deep Neural Operators, start with foundational knowledge on neural operator methods and convolutional autoencoder architectures, as these underpin the methodology. Then, gain context on bias correction in climate models to appreciate the problem space. Finally, focus on the core concept of DeepONet and the authors' own talk to grasp the specific approach and innovations presented in the paper.

## Recommended videos (in order)

### Neural operator methods seminar *(prerequisite)*
Neural operators are a class of models designed to learn mappings between infinite-dimensional function spaces, which is central to the DeepONet approach used in the paper. These seminars provide a rigorous and research-level understanding of neural operators, their applications, and recent advances, forming the theoretical foundation for the surrogate modeling approach.

*How the paper uses it:* The paper uses Deep Operator Networks (DeepONet), a type of neural operator, to learn bias corrections in climate models.

▶ [Anima Anandkumar - Neural operator: A new paradigm for ...](https://www.youtube.com/watch?v=Bd4KvlmGbY4) — Physics Informed Machine Learning · 59:56

### Convolutional autoencoder architectures lecture *(prerequisite)*
Convolutional autoencoders are used in the paper to reduce the high-dimensional nudging tendency data into a lower-dimensional latent space, enabling efficient learning by DeepONet. These lectures provide detailed insights into the architecture and functioning of convolutional autoencoders, essential for understanding the data representation strategy.

*How the paper uses it:* The authors integrate convolutional autoencoders with DeepONet to handle high-dimensional climate data efficiently.

▶ [Lecture 31 : Convolutional Autoencoder and Deep CNN](https://www.youtube.com/watch?v=seovCoRejN8) — Deep Learning For Visual Computing - IITKGP · 33:39

### Bias correction in climate models seminar *(prerequisite)*
Understanding existing bias correction methods and their limitations is crucial to appreciate the novelty and impact of the paper's approach. These seminars discuss traditional bias correction techniques, challenges, and the context in which the new DeepONet-based surrogate model is developed.

*How the paper uses it:* The paper addresses limitations of existing bias correction methods by proposing a neural operator-based surrogate model with improved generalization.

▶ [SoMAS - Reducing Model Biases with Machine Learning ...](https://www.youtube.com/watch?v=kG8swPpJTaA) — The School of Marine and Atmospheric Sciences · 1:04:19

### Deep Operator Networks lecture
Deep Operator Networks (DeepONet) are the core methodological tool in the paper, enabling learning mappings between function spaces for bias correction. These lectures provide a focused and advanced treatment of DeepONet, including design, implementation, and applications in multiphysics systems, directly relevant to the paper's approach.

*How the paper uses it:* The paper's surrogate model for bias correction is based on DeepONet, making understanding this method essential.

▶ [Deep Operator Networks (DeepONet) [Physics Informed ...](https://www.youtube.com/watch?v=CDCyOHXDRcI) — Steve Brunton · 17:17
