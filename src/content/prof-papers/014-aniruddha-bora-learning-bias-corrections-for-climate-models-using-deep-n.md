---
title: "014 · Learning bias corrections for climate models using deep neural operators — Jenna L. Marquard"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aniruddhabora-github-io"
source_hash: "ac57985666f20aa2b415fa223097b8da0d9b9df74fbeefedf5ccd39587090437"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Operators and Scientific Machine Learning
**The paper assumes:** neural operators, operator learning, deep learning for PDEs, scientific machine learning, convolutional autoencoders
**Already in this field?** Skip this entirely if you already understand neural operator theory and its application in scientific machine learning for PDEs and climate modeling.

To understand the core methodology of this paper, which centers on Deep Operator Networks (DeepONet) combined with convolutional autoencoders for bias correction in climate models, a solid grasp of neural operators and their role in scientific machine learning is essential. The rigorous course option offers a comprehensive university-level lecture series on AI applications in science and engineering, including operator learning, while the fast track provides a focused, concise set of lectures specifically on deep learning and operator learning in scientific computing. Choose the rigorous course for deep foundational knowledge and the fast track for a quicker, targeted introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [ETH Zürich | AI in the Sciences and Engineering 2025 Lecture Series](https://www.youtube.com/playlist?list=PLJkYEExhe7rYBo2KBwsirSF-B0R3Q0nt7) — CAMLab, ETH Zürich · 14 videos · 17.9h across 14 episodes

**Watch only this:** Lectures 5 to 9 (Operator Learning Introduction, FNO, ReNO, Transformers, Graph-based Models), about 6.3 hours — these cover the fundamentals and variants of operator learning essential to understand DeepONet and its context.

*Why it unblocks this paper:* This ETH Zürich AI in the Sciences and Engineering 2025 lecture series covers operator learning in depth, including DeepONet and related neural operator architectures, directly matching the paper's core methodology of learning bias corrections via neural operators.

*If you want all of it:* All 14 episodes, about 17.9 hours — for full context on AI applications in science and engineering beyond operator learning.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [ETH Zürich | Deep Learning in Scientific Computing 2023](https://www.youtube.com/playlist?list=PLJkYEExhe7rYY5HjpIJbgo-tDZ3bIAqAm) — CAMLab, ETH Zürich · 13 videos · 18.3h across 13 episodes

**Watch only this:** Episodes 7 to 11 (Introduction to Operator Learning Parts 1 & 2, Deep Operator Networks, Neural Operators, Fourier Neural Operators and Convolutional Neural Operators), about 7 hours — these lectures directly explain the neural operator techniques central to the paper.

*Why it unblocks this paper:* This ETH Zürich Deep Learning in Scientific Computing 2023 series includes focused lectures on physics-informed neural networks and operator learning, including DeepONet and Fourier Neural Operators, providing a concise yet thorough introduction to the key concepts used in the paper.

*If you want all of it:* All 13 episodes, about 18.3 hours — for a broader understanding of deep learning in scientific computing.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's approach to climate model bias correction using Deep Operator Networks combined with autoencoders. The beginner project focuses on reproducing a core concept of dimensionality reduction of nudging tendencies with autoencoders. The intermediate project implements a simplified DeepONet surrogate model to predict nudging tendencies on a small-scale or substitute dataset, comparing against a baseline. The advanced project extends the method to additional climate variables or broader spatial domains, addressing a stated limitation and exploring integration challenges.

### Beginner — Autoencoder for Dimensionality Reduction of Climate Nudging Tendencies
*Effort: a weekend, ~8 hours*

You build a convolutional autoencoder to compress and reconstruct high-dimensional nudging tendency data similar to the paper's approach. Using a publicly available or synthetically generated dataset mimicking spatial-temporal climate fields, you demonstrate the autoencoder's ability to reduce dimensionality while preserving key features.

**Why it shows you understood the paper:** This project shows you understand the paper's key technique of using convolutional autoencoders to represent high-dimensional nudging tendencies in a latent space, a foundational step before applying DeepONet.

**Grounded in:** Integration of convolutional autoencoders to represent high-dimensional nudging tendencies in a latent space.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use a small synthetic dataset simulating spatial-temporal nudging tendencies or publicly available climate reanalysis data subsets (e.g., ERA5 variables U and V winds) as a proxy for nudging tendencies.

**Build it:**

1. Collect or generate a small dataset representing spatial-temporal climate nudging tendencies (e.g., 2D wind fields over time).
2. Design and implement a convolutional autoencoder architecture in PyTorch to compress and reconstruct the data.
3. Train the autoencoder on the dataset and evaluate reconstruction accuracy using metrics like MSE.
4. Visualize original vs reconstructed fields to qualitatively assess performance.
5. Document the architecture, training process, and results in a README.

**Ships as:** A GitHub repo with code for the convolutional autoencoder, training scripts, example data or data generation code, and a README showing reconstruction results and explaining the connection to the paper's latent space representation.

**Stretch goal:** Add a variational autoencoder (VAE) variant to explore probabilistic latent representations.

### Intermediate — DeepONet Surrogate Model for Nudging Tendency Prediction
*Effort: 2 weekends, ~20 hours*

You implement a simplified Deep Operator Network (DeepONet) surrogate model to learn the mapping from low-resolution climate model states to nudging tendencies in a latent space. You train and evaluate the model on a small-scale or substitute dataset, comparing its prediction correlation against a simple baseline like linear regression.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core method—using DeepONet combined with autoencoders to predict nudging tendencies efficiently—and your ability to implement neural operators for scientific surrogate modeling.

**Grounded in:** Development of a DeepONet-based surrogate model for bias correction in climate models and training/validation on E3SMv2 nudging data.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use a small subset of ERA5 reanalysis data or synthetically generated data representing climate states and nudging tendencies as a proxy, since the authors released no code or dataset.

**Build it:**

1. Prepare paired input-output data representing climate states and corresponding nudging tendencies in latent space (from autoencoder).
2. Implement a DeepONet architecture in PyTorch following the paper's description.
3. Train the DeepONet model on the dataset to predict nudging tendencies from climate states.
4. Implement a simple baseline model (e.g., linear regression) for comparison.
5. Evaluate and compare models using correlation metrics similar to the paper (e.g., Pearson correlation).
6. Document the implementation details, results, and comparison in a README.

**Ships as:** A GitHub repo containing DeepONet implementation, training and evaluation scripts, baseline comparison, and a README reporting correlation metrics and discussing the surrogate model's effectiveness.

**Stretch goal:** Incorporate convolutional autoencoder latent space encoding/decoding end-to-end with DeepONet training.

### Advanced — Extending DeepONet Bias Correction to Additional Climate Variables and Larger Domains
*Effort: 3+ weeks*

You extend the DeepONet surrogate model approach to predict bias corrections for additional climate state variables beyond zonal and meridional winds (e.g., temperature or humidity) and/or expand the spatial domain from the paper's sub-region to a larger or global scale. You evaluate model performance and discuss computational trade-offs.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to adapt and scale the DeepONet surrogate modeling approach to more complex, realistic climate bias correction scenarios.

**Grounded in:** Extension to other state variables and broader spatial and temporal domains; addressing current model limitations.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook, Docker (optional for environment)

**Data:** Use publicly available ERA5 reanalysis data for multiple variables over a larger spatial domain as a substitute for the paper's nudging tendency data.

**Build it:**

1. Collect and preprocess ERA5 data for additional climate variables (e.g., temperature, humidity) over an extended spatial domain.
2. Train convolutional autoencoders to encode/decode nudging tendencies for these variables.
3. Adapt and train the DeepONet surrogate model to predict nudging tendencies for the new variables and domain.
4. Evaluate model accuracy using correlation metrics and compare with baseline methods.
5. Analyze computational efficiency and discuss challenges in scaling the approach.
6. Prepare a detailed README documenting methodology, results, limitations, and potential integration paths.

**Ships as:** A comprehensive GitHub repo with code, data preprocessing scripts, trained models, evaluation results, and a README discussing the extension's impact and challenges.

**Stretch goal:** Prototype integration of the surrogate model into a simple climate simulation loop for online bias correction demonstration.
