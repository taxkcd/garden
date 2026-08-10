---
title: "004 · Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models — Pavan K. Turaga"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pavanturaga-com"
source_hash: "9d7c9f11f83ef83557e4adab26eeebe7b59fbd087a9fb646447bf87dd021ef9a"
sequence: 4
generator: "outreach-garden: managed"
---

# 004 · Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models

## At a glance

- **Professor:** Pavan K. Turaga
- **Institution:** Arizona State University
- **Paper:** [Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models](https://arxiv.org/pdf/2604.23888)
- **Authors:** Sinjini Mitra, Constantine Kyriakakis, Shenyuan Liang, Eun Som Jeon, Rushil Anirudh, Jayaraman J. Thiagarajan, Anuj Srivastava, Pavan Turaga
- **Year:** 2026

## Paper overview

This paper proposes a new method to adapt large pre-trained generative models to new target domains without needing access to the model's internal weights or retraining the generator. By preserving geometric relationships in the latent and image spaces through a novel loss function, the method enables effective domain adaptation even with limited target data. The approach uses GAN inversion to map target images to latent codes, trains a lightweight latent sampler using a diffusion model with geometry-preserving losses, and generates adapted images by sampling from this learned latent distribution. Experiments demonstrate improved adaptation performance on out-of-domain datasets compared to existing methods.

### Why it matters

**Research problem:** Adapting large-scale blackbox generative models to new target domains is challenging due to restricted access to model weights, high computational costs of fine-tuning, and limited availability of target domain data. Existing methods often require generator fine-tuning or auxiliary networks, which are impractical or undesirable in many scenarios.

**Why it matters:** Many industry-grade generative models are only accessible via blackbox APIs due to ethical, legal, and proprietary concerns, limiting users' ability to adapt these models to specific applications. Efficient adaptation methods that do not require access to model internals are critical for practical deployment, especially under data scarcity and compute constraints.

**Key contributions:**

- Introduction of a geometry-preserving loss function that enforces manifold priors by preserving distances and tangent space orientations in latent and image spaces.
- A novel adaptation pipeline that does not require access to or fine-tuning of the source generator weights, enabling secure blackbox adaptation.
- Demonstration of robust adaptation performance with limited target domain data, outperforming baselines that lack geometric constraints or require generator updates.
- Use of a lightweight 1D diffusion model as a latent sampler to effectively learn target latent distributions.
- Compatibility with various GAN inversion methods and ability to perform controlled attribute generation and text-based latent editing.

## About the professor

**Pavan K. Turaga** — Founding Director, The GAME School and Electrical Engineering, Arizona State University.

Research interests: computer vision, machine learning, immersive technologies, health-analytics, public understanding of science, arts and performance

### Research links

- [Faculty/profile page](https://pavanturaga.com)
- [Resolved homepage](https://pavanturaga.com/)
- [Lab website](https://www.linkedin.com/company/geometric-media-lab/)
- [LinkedIn](https://www.linkedin.com/in/pavan-turaga/)
- [Social profile](https://twitter.com/pturaga1)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and core knowledge required to understand the paper on geometry preserving loss functions for blackbox generative model adaptation. It covers essential mathematical concepts like linear algebra and manifold geometry, probability theory for modeling latent distributions, deep learning fundamentals including neural networks and optimization, generative adversarial networks (GANs) which are central to the paper's use of pre-trained generators and inversion, and advanced diffusion models relevant to the latent sampler design. Work through these stages in order to build a solid base before engaging with the paper.

**The paper assumes:** linear algebra including vector spaces and manifolds, probability theory and statistics, deep learning fundamentals, generative adversarial networks (GANs), diffusion models, GAN inversion techniques, domain adaptation in generative modeling
**Time to work through:** roughly 90-100 hours if you watch all recommended lectures; about 50-60 hours if you follow the skip guidance for each playlist.
**Already in this field?** Skip stages 1-3 if you have a solid background in linear algebra, probability, and deep learning fundamentals; skip stages 4-5 if you are already familiar with GANs and diffusion models.

### Stage 1 · Linear Algebra and Manifold Geometry *(foundational)*
Understanding latent spaces as manifolds and geometric concepts like tangent spaces and distance preservation requires solid linear algebra and differential geometry foundations, which are critical for the geometry-preserving loss in the paper.

▶ **Course:** [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

*What to watch:* Watch the first 23 lectures of the 'MIT 18.06 Linear Algebra, Spring 2005' playlist by MIT OpenCourseWare, covering geometry of linear equations, elimination, matrix multiplication and inverse, subspaces, basis, dimension, orthogonality, projections, determinants, and eigenvalues. These topics provide the necessary background to understand tangent spaces and pairwise distances in high-dimensional latent spaces.

*Move on when you can:* Explain what a tangent space is at a point on a manifold and compute pairwise distances between vectors in a high-dimensional space.

### Stage 2 · Probability Theory and Statistical Modeling *(foundational)*
Modeling latent distributions and training diffusion models require understanding probability distributions, sampling, and statistical inference concepts, which underpin the latent sampler and geometry-preserving losses.

▶ **Course:** [Stanford CS109 Introduction to Probability for Computer Scientists I 2022 I Chris Piech](https://www.youtube.com/playlist?list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg) — Stanford Online · 29 videos · 35.4h across 29 episodes

*What to watch:* Complete the 'Stanford CS109 Introduction to Probability for Computer Scientists I 2022' playlist by Stanford Online, focusing especially on lectures 1 through 16 that cover counting, probability axioms, conditional probability, random variables, expectation, variance, and the normal distribution. This will build a strong foundation in probability theory relevant to diffusion modeling and latent space sampling.

*Move on when you can:* Derive and explain the properties of Gaussian distributions and perform sampling from simple probability distributions.

### Stage 3 · Deep Learning Fundamentals *(core)*
The approach builds on neural networks including convolutional architectures and optimization via gradient descent, essential to understand GANs, diffusion models, and inversion methods used in the paper.

▶ **Course:** [Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0) — DeepLearningAI · 43 videos · 5.7h across 43 episodes

*What to watch:* Focus on the first 20 lectures of the 'Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)' playlist by DeepLearningAI, which cover neural network basics, supervised learning, backpropagation, gradient descent, vectorization, and logistic regression. These fundamentals are crucial before moving to more advanced generative models.

*Move on when you can:* Implement and train a simple feedforward neural network on a classification task using backpropagation.

### Stage 4 · Generative Adversarial Networks (GANs) *(core)*
The paper uses pre-trained GAN generators and GAN inversion methods, so understanding GAN architectures, training dynamics, and latent space representations is critical.

▶ **Course:** [Stanford CS236: Deep Generative Models I 2023 I Stefano Ermon](https://www.youtube.com/playlist?list=PLoROMvodv4rPOWA-omMM6STXaWW4FvJT8) — Stanford Online · 18 videos · 23.6h across 18 episodes

*What to watch:* Watch the 'Stanford CS236: Deep Generative Models I 2023' playlist by Stanford Online, focusing on lectures 9 and 10 which cover GANs in depth, including their training objectives and architectures. This course also covers related generative models providing broader context.

*Move on when you can:* Explain the GAN training objective and implement a basic GAN to generate simple images.

### Stage 5 · Diffusion Models for Generative Modeling *(advanced)*
The latent sampler in the paper is a 1D diffusion model; understanding diffusion probabilistic models and their training and sampling procedures is necessary to grasp this component.

▶ **Course:** [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

*What to watch:* Complete the 'Stanford CME296: Diffusion & Large Vision Models' playlist by Stanford Online, which thoroughly covers diffusion models including forward and reverse processes, score matching, architectures, training, and evaluation. This course directly addresses the diffusion modeling techniques used in the paper.

*Move on when you can:* Describe the forward and reverse diffusion processes and implement a simple diffusion model for image generation.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on geometry preserving loss functions for blackbox generative model adaptation, start by grounding yourself in the key prerequisite topics: GAN inversion methods and diffusion models for latent sampling, as these are critical technical components of the approach. Next, study the geometric priors and geometry preserving loss functions that form the novel theoretical foundation of the paper. Finally, focus on the core concept of blackbox generative model adaptation, which ties these elements together in the proposed pipeline. This progression ensures a solid grasp of both the technical building blocks and the paper's innovative contributions.

### Generative adversarial networks inversion *(prerequisite)*
GAN inversion is essential to map target domain images into the latent space of the pre-trained generator, enabling adaptation without modifying the generator weights. Understanding state-of-the-art inversion techniques and their limitations provides insight into the first stage of the proposed pipeline and the challenges faced with far out-of-domain images.

*How the paper uses it:* The paper relies on GAN inversion to embed target images into the latent space for subsequent latent distribution modeling.

▶ [Revisiting Latent Space of GAN Inversion for Robust Real Image Editing](https://www.youtube.com/watch?v=36hLx1CtKr4) — ComputerVisionFoundation Videos · 2 years ago

### Diffusion models latent sampling *(prerequisite)*
Diffusion models are used in the paper as a lightweight latent sampler to learn the distribution of inverted latent codes. Understanding how diffusion models operate in latent spaces and their sampling mechanisms is crucial to appreciate the second stage of the pipeline and the efficiency gains achieved.

*How the paper uses it:* The paper employs a 1D diffusion model to sample adapted latent codes, enabling effective domain adaptation without generator fine-tuning.

▶ [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 4 - Latent Space & Guidance](https://www.youtube.com/watch?v=WUUq6TVAu8U) — Stanford Online · 1:40:58 · 2 months ago

### Geometry preserving loss functions *(prerequisite)*
The novel geometry preserving loss function enforces manifold priors by preserving distances and tangent space orientations between latent and image spaces. Familiarity with geometric concepts such as manifolds, tangent spaces, and their role in learning is necessary to understand the theoretical innovation and its impact on adaptation performance.

*How the paper uses it:* The geometry preserving loss is the key contribution that improves adaptation by maintaining geometric relationships during latent distribution learning.

▶ [Riemannian manifolds, kernels and learning](https://www.youtube.com/watch?v=MtZV82LCNHc) — Microsoft Research · 56:33 · 9 years ago

### Blackbox generative model adaptation
This concept covers methods to adapt pretrained generative models without access to internal weights, which is the central challenge addressed by the paper. Understanding existing blackbox adaptation techniques and their limitations contextualizes the novelty and practical significance of the proposed pipeline.

*How the paper uses it:* The paper proposes a secure and efficient blackbox adaptation pipeline that does not require generator weight access or fine-tuning.

▶ [Auxiliary Task-Guided CycleGAN for Black-Box Model Domain Adaptation](https://www.youtube.com/watch?v=ruSyh2ZXpjM) — ComputerVisionFoundation Videos · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to adapting blackbox generative models, start by learning about GAN inversion, which maps real images into the latent space of pretrained generators. Next, grasp diffusion models used for latent sampling to model distributions effectively. Then, study geometry-preserving loss functions that enforce geometric structure during adaptation. Finally, explore the concept of blackbox generative model adaptation, which ties these components together to adapt models without accessing internal weights.

### Generative adversarial networks inversion *(prerequisite)*
GAN inversion is the process of finding a latent code in a pretrained GAN's latent space that reconstructs a given real image. This step is crucial for adapting generative models to new domains by enabling manipulation in the latent space rather than retraining the generator.

*How the paper uses it:* The paper uses state-of-the-art GAN inversion methods to map target domain images into the latent space of the source generator as the first step in adaptation.

▶ [Revisiting Latent Space of GAN Inversion for Robust Real Image Editing](https://www.youtube.com/watch?v=36hLx1CtKr4) — ComputerVisionFoundation Videos · 2 years ago

### Diffusion models latent sampling *(prerequisite)*
Diffusion models are generative models that learn to gradually denoise data starting from pure noise, effectively modeling complex distributions. When applied to latent spaces, they can sample new latent codes that follow the target domain distribution, enabling generation of adapted images.

*How the paper uses it:* The paper trains a lightweight 1D diffusion model as a latent sampler to model the distribution of inverted latents from the target domain.

▶ [Sampling Diffusion Models in the Era of Generative AI](https://www.youtube.com/watch?v=xUwxZj_2d2s) — C3 Digital Transformation Institute · 2 years ago

### Geometry preserving loss functions *(prerequisite)*
Geometry-preserving loss functions enforce that geometric relationships such as distances and tangent space orientations between points are maintained during transformations. This helps preserve the manifold structure of data, leading to more meaningful and stable adaptations.

*How the paper uses it:* The novel geometry-preserving loss introduced in the paper maintains pairwise distances and tangent space relationships between latent and image spaces, improving adaptation quality.

▶ [Riemannian manifolds, kernels and learning](https://www.youtube.com/watch?v=MtZV82LCNHc) — Microsoft Research · 56:33 · 9 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the paper's core ideas on geometry-preserving loss functions for blackbox generative model adaptation. Starting with a beginner-level exploration of GAN inversion and latent space geometry visualization, you then implement the paper's core latent sampler training with geometry-preserving loss on a small dataset at intermediate level. Finally, the advanced project extends the method to improve GAN inversion quality for far out-of-domain images, addressing a key limitation identified by the authors.

### Beginner — Visualizing Latent Space Geometry via GAN Inversion
*Effort: a weekend, ~8 hours*

You build a small pipeline that takes a handful of target domain images (e.g., faces from the MetFaces dataset), performs GAN inversion using an existing open-source StyleGAN2 inverter, and visualizes the pairwise distances and tangent space approximations in the latent space versus the image space. This includes plotting distance preservation and illustrating how geometry is maintained or distorted by inversion.

**Why it shows you understood the paper:** This project shows you understand the importance of latent space geometry and GAN inversion quality, foundational to the paper's approach. A professor would see you grasp the geometric relationships the paper aims to preserve and the challenges in inversion.

**Grounded in:** Demonstrates the paper's reliance on GAN inversion quality and the geometric priors in latent space as described in the approach and limitations sections.

**Tech stack:** Python 3.11, PyTorch, matplotlib, numpy, pretrained StyleGAN2 inverter (public)

**Data:** Use a small subset (~10-20 images) of the MetFaces dataset, which the paper uses as a near out-of-domain target domain.

**Build it:**

1. Download or collect a small set of MetFaces images.
2. Use a publicly available StyleGAN2 GAN inversion method to invert these images into latent codes.
3. Compute pairwise Euclidean distances between images in pixel space and between their latent codes.
4. Approximate tangent spaces at latent points via local PCA on latent neighbors.
5. Visualize and compare distance preservation and tangent space alignment between latent and image spaces.
6. Write a README explaining the geometric concepts and their relevance to the paper.

**Ships as:** A GitHub repo with code to invert images, compute and visualize geometry preservation metrics, and a README explaining the significance of latent space geometry for blackbox adaptation.

**Stretch goal:** Add a simple baseline visualization without tangent space approximation to highlight the improvement geometry-preserving losses bring.

### Intermediate — Reimplementing Geometry-Preserving Latent Sampler Training
*Effort: 2 weekends, ~20 hours*

You implement the core pipeline of the paper: invert a small target domain dataset into StyleGAN2 latent space, then train a lightweight 1D diffusion latent sampler with the geometry-preserving loss function to model the target latent distribution. You compare adaptation quality metrics (e.g., FID) against a baseline latent sampler trained without the geometry-preserving loss.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main method from scratch, including the novel loss function and diffusion latent sampler, and evaluate its impact on adaptation quality. A professor would see you grasp the core technical contributions and can reproduce key results.

**Grounded in:** Implements the paper's key contribution: the geometry-preserving loss function and latent sampler training pipeline, and reproduces improved adaptation metrics on near out-of-domain data.

**Tech stack:** Python 3.11, PyTorch, numpy, scikit-learn, pretrained StyleGAN2 inverter (public)

**Data:** Use a small subset (~50-100 images) of the MetFaces dataset as the target domain for inversion and latent sampler training.

**Build it:**

1. Invert the target domain images into the StyleGAN2 latent space using a public GAN inverter.
2. Implement a lightweight 1D diffusion model to sample latent codes in the W+ space (18×512 dimensions).
3. Implement the geometry-preserving loss function enforcing pairwise distance and tangent space preservation between latent and image spaces.
4. Train the diffusion latent sampler on the inverted latents with and without the geometry-preserving loss.
5. Generate adapted images by sampling from the trained latent sampler and passing samples through the frozen StyleGAN2 generator.
6. Evaluate adaptation quality using FID and other relevant metrics, comparing geometry-preserving loss vs baseline.

**Ships as:** A GitHub repo with code for inversion, latent sampler training with geometry-preserving loss, generation, evaluation scripts, and a report comparing metrics to baseline.

**Stretch goal:** Add controlled attribute generation by conditioning the latent sampler on simple attributes (e.g., sunglasses) as in the paper.

### Advanced — Improving GAN Inversion for Far Out-of-Domain Adaptation
*Effort: 3-4 weeks*

You develop an extension to improve GAN inversion quality for far out-of-domain images (e.g., Ukiyoe style faces), addressing a key limitation noted in the paper. This could involve integrating geometric priors or manifold learning techniques into the inversion process to better preserve latent manifold structure. You then demonstrate improved adaptation performance on far out-of-domain data using the adapted inversion method combined with the paper's latent sampler training.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing you can critically analyze and extend the method. A professor would see your ability to innovate on geometric methods for inversion robustness and apply them to blackbox generative model adaptation.

**Grounded in:** Addresses the paper's limitation on GAN inversion quality for far out-of-domain images and explores future directions involving geometric priors and manifold learning to enhance inversion robustness.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, manifold learning libraries (e.g., PyManopt or Geomstats), pretrained StyleGAN2 inverter (public)

**Data:** Use a small set (~50 images) of Ukiyoe or other far out-of-domain face images (publicly available or synthesized) as target domain.

**Build it:**

1. Collect or synthesize a far out-of-domain target dataset (e.g., Ukiyoe faces).
2. Analyze failure modes of existing GAN inversion methods on this dataset.
3. Implement geometric priors or manifold learning constraints (e.g., tangent space regularization, Riemannian metrics) into the inversion optimization.
4. Integrate the improved inversion method into the latent sampler training pipeline from the intermediate project.
5. Evaluate adaptation quality improvements on far out-of-domain data compared to baseline inversion.
6. Document the method, results, and limitations in a detailed README.

**Ships as:** A GitHub repo with improved GAN inversion code, integration with latent sampler training, evaluation scripts, and a comprehensive report on enhanced adaptation for far out-of-domain images.

**Stretch goal:** Explore real-time or interactive inversion refinement using geometric feedback as suggested in the paper's future directions.
