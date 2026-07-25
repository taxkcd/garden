---
title: "014 · Learning bias corrections for climate models using deep neural operators — Jenna L. Marquard"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aniruddhabora-github-io"
source_hash: "e937d55ae68d7fb6ceaba4cfc8c9f5f3540476e71cc1b6edfbc6dba3a436c86d"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on learning bias corrections for climate models using Deep Neural Operators, start with foundational knowledge on neural operators and convolutional autoencoders, which are core machine learning techniques enabling the surrogate modeling approach. Then, explore physics-informed machine learning to appreciate the integration of physical principles with data-driven models in climate science. Finally, focus on the core concept of Deep Operator Networks (DeepONet), the central method used in the paper, through advanced university lectures and talks by leading researchers.

### Neural operators *(prerequisite)*
Neural operators are a cutting-edge machine learning framework that learn mappings between infinite-dimensional function spaces, crucial for modeling complex physical systems like climate models. Understanding neural operators provides the mathematical and algorithmic foundation for the DeepONet surrogate model used in the paper.

*How the paper uses it:* The paper uses DeepONet, a type of neural operator, to learn bias corrections as mappings between function spaces.

▶ [Neural Operators: FNO and DeepONet](https://www.youtube.com/watch?v=COEItKEZ-is) — BYU FLOW Lab · 3 months ago

### Convolutional autoencoders *(prerequisite)*
Convolutional autoencoders are deep learning architectures designed for efficient dimensionality reduction of high-dimensional data, enabling compact latent representations. This technique is key to handling the high-dimensional nudging tendency data in the paper by encoding it into a lower-dimensional latent space for efficient learning.

*How the paper uses it:* The paper integrates convolutional autoencoder-decoder architectures to reduce the dimensionality of nudging tendency data before applying DeepONet.

▶ [L16.3 Convolutional Autoencoders & Transposed Convolutions](https://www.youtube.com/watch?v=ilkSwsggSNM) — Sebastian Raschka · 16:08

### Physics-informed machine learning *(prerequisite)*
Physics-informed machine learning combines data-driven models with physical laws to improve interpretability and generalization in scientific applications. This context is important for understanding how the paper's approach aligns with the broader trend of embedding physical knowledge into machine learning for climate modeling.

*How the paper uses it:* The authors' expertise and approach relate closely to physics-informed machine learning, enhancing surrogate modeling for climate bias correction.

▶ [Physics-Informed Machine Learning – Lecture 1 | Why Physics ...](https://www.youtube.com/watch?v=BVkGy4oz3Lg) — UniTrento Ingegneria Industriale · 1:36:40

### Deep Operator Networks (DeepONet)
Deep Operator Networks (DeepONet) are neural network architectures designed to learn operators mapping between function spaces, enabling efficient surrogate modeling of complex systems governed by PDEs. This is the core method used in the paper to learn and predict bias corrections in climate models.

*How the paper uses it:* DeepONet is the central method developed and applied in the paper for learning bias corrections in climate models.

▶ [George Karniadakis - From PINNs to DeepOnets](https://www.youtube.com/watch?v=QV1fVttZ6YE) — Physics Informed Machine Learning · 1:18:53

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational concepts needed to understand how deep neural operators can be used to correct biases in climate models. We start with the basics of climate model bias correction to understand the problem context, then cover convolutional autoencoders for dimensionality reduction, followed by neural operators which are the core machine learning framework used. Finally, we explore physics-informed machine learning to see how physical knowledge integrates with ML, culminating in a focused look at Deep Operator Networks (DeepONet), the central method in the paper.

### Climate model bias correction *(prerequisite)*
Learn why climate models have biases due to resolution and parameterization limits, and how bias correction methods adjust model outputs to better match observed or reanalysis data. This foundational understanding clarifies the motivation for the paper's approach.

*How the paper uses it:* The paper addresses improving bias correction in climate models to enhance prediction accuracy and efficiency.

▶ [Bias Correction in Climate Models](https://www.youtube.com/watch?v=LD54ofNxaZw) — Afed Ullah Khan · 5:14

### Convolutional autoencoders *(prerequisite)*
Autoencoders are neural networks that compress high-dimensional data into a smaller latent space and then reconstruct it, with convolutional autoencoders specialized for spatial data like images or climate fields. This technique enables efficient learning on complex, high-dimensional climate data.

*How the paper uses it:* The paper uses convolutional autoencoders to reduce the dimensionality of the high-dimensional nudging tendency data for efficient learning.

▶ [Autoencoders Made Easy! (with Convolutional Autoencoder)](https://www.youtube.com/watch?v=m2AyljDHYes) — Normalized Nerd · 24:19

### Neural operators *(prerequisite)*
Neural operators are machine learning models that learn mappings between function spaces, enabling them to approximate complex operators such as solutions to PDEs. Understanding neural operators is key to grasping how the paper models bias corrections as function-to-function mappings.

*How the paper uses it:* The paper employs Deep Operator Networks, a type of neural operator, to learn the bias correction operator.

▶ [A crash course on Neural Operators](https://www.youtube.com/watch?v=KIGG-IA9awU) — Kamyar Azizzadenesheli · 32:45

### Physics-informed machine learning *(prerequisite)*
Physics-informed machine learning integrates physical laws and domain knowledge into ML models to improve interpretability and generalization, especially important in scientific applications like climate modeling.

*How the paper uses it:* The paper aligns with physics-informed ML principles by developing interpretable surrogate models for climate bias correction.

▶ [Physics Informed Machine Learning: High Level Overview of ...](https://www.youtube.com/watch?v=JoFW2uSd3Uo) — Steve Brunton · 47:27

### Deep Operator Networks (DeepONet)
DeepONet is a neural operator architecture designed to learn mappings between infinite-dimensional function spaces, making it suitable for modeling complex physical processes. Understanding DeepONet helps to see how the paper builds a surrogate model for bias correction.

*How the paper uses it:* DeepONet is the central method used in the paper to learn and predict bias corrections in climate models.

▶ [George Karniadakis - From PINNs to DeepOnets](https://www.youtube.com/watch?v=QV1fVttZ6YE) — Physics Informed Machine Learning · 1:18:53

## Already in your library

- [Anima Anandkumar - Neural operator: A new paradigm for ...](https://www.youtube.com/watch?v=Bd4KvlmGbY4) — also for: Learning bias corrections for climate models using deep neural operators (Aniruddha Bora)
- [Lecture 31 : Convolutional Autoencoder and Deep CNN](https://www.youtube.com/watch?v=seovCoRejN8) — also for: Learning bias corrections for climate models using deep neural operators (Aniruddha Bora)
- [Deep Operator Networks (DeepONet) [Physics Informed ...](https://www.youtube.com/watch?v=CDCyOHXDRcI) — also for: Learning bias corrections for climate models using deep neural operators (Aniruddha Bora)
