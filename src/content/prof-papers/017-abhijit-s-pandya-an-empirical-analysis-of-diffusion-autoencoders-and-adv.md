---
title: "017 · An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI — Abhijit S. Pandya"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dr-pandya-php"
source_hash: "feadd96d7ccda58a543c1d5561c62192b1f89e34611df93e7e18880c62ea7cb5"
sequence: 17
generator: "outreach-garden: managed"
---

# 017 · An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI

## At a glance

- **Professor:** Abhijit S. Pandya
- **Institution:** Florida Atlantic University
- **Paper:** [An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI](https://doi.org/10.1109/ACCESS.2024.3354724)
- **Authors:** Pranshav Gajjar, Manav Garg, Shivani Desai, Hitesh Chhinkaniwala, Harshal A. Sanghvi, Riki H. Patel, Shailesh Gupta, Abhijit S. Pandya
- **Year:** 2024

## Paper overview

This study compares advanced deep learning generative models—Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and Diffusion Models—to generate synthetic MRI images for dementia detection, focusing on Alzheimer's and Parkinson's diseases. It evaluates these models' ability to create realistic images and improve disease classification accuracy, finding diffusion models and data-efficient GANs particularly effective.

### Why it matters

**Research problem:** The scarcity of large, high-quality medical imaging datasets limits the development and accuracy of predictive models for neurodegenerative diseases like Alzheimer's and Parkinson's. Generating realistic synthetic MRI data can augment existing datasets and improve disease detection models.

**Why it matters:** Early and accurate detection of dementia-related diseases has significant societal value, enabling timely intervention and better patient outcomes. However, limited data availability hampers the training of robust machine learning models.

**Key contributions:**

- Comprehensive comparison of GANs, VAEs, and diffusion models for synthetic MRI generation related to dementia.
- Introduction of data-efficient GANs (GAN2) and their superior performance in generating dementia images.
- Validation of generative models through downstream classification tasks using ResNet and DenseNet architectures.
- Demonstration that diffusion models yield the best classification accuracy when their generated images are used for training.
- Application of fine-tuning generative models trained on Alzheimer's data to Parkinson's data to address limited Parkinson's dataset size.

## About the professor

**Abhijit S. Pandya** — Professor, Computer Science & Engineering, Florida Atlantic University.

Research interests: Drug Discovery: Apply computational intelligence algorithms and pattern recognition techniques, including neural networks to identify the optimum drug compositions based on individual's genetic data. Study effects of combinational multi-component drug therapies. Neural Circuitry: Study neural circuitry and build models of oscillatory neural networks with a disease specific treatment. e.g., tinnitus (ringing tone in the ear), aphasia etc.

### Research links

- [Faculty/profile page](http://pire.fiu.edu/faculty/Dr_Pandya.php)
- [Professor website](http://www.cse.fau.edu/~abhi/)

## Learning path

To deeply understand the paper's contributions on generative models for synthetic MRI in dementia prediction, start with foundational knowledge on advanced generative adversarial networks and variational autoencoders, as these are key baseline models compared in the study. Then, build expertise on diffusion models, the central generative approach yielding the best results. Finally, explore medical image synthesis applications to contextualize the use of these models in MRI data augmentation. The paper's own talk was not found, so the path relies on rigorous university lectures and research seminars.

## Recommended videos (in order)

### Generative adversarial networks advanced lecture *(prerequisite)*
This section covers advanced topics in GANs, including their theoretical foundations and recent developments, which are crucial since the paper compares standard and data-efficient GANs for MRI image generation. Understanding GAN dynamics and improvements will clarify why data-efficient GANs performed well in the study.

*How the paper uses it:* The paper introduces and evaluates data-efficient GANs as a key generative model for synthetic MRI generation.

▶ [Deep Generative Models. Lecture 10: Advanced Topics in GANs](https://www.youtube.com/watch?v=Ml15crPldBk) — Volodymyr Kuleshov · 1:04:14

### Variational autoencoders deep learning lecture *(prerequisite)*
This lecture provides an in-depth treatment of VAEs, including variational inference and training methods, which is essential since VAEs serve as a baseline generative model in the paper. Despite poorer FID scores, VAEs' faster training times and probabilistic framework are important to understand.

*How the paper uses it:* VAEs are a baseline generative model analyzed for synthetic MRI generation and compared against GANs and diffusion models.

▶ [Ali Ghodsi, Deep Learning, Variational Autoencoder, VAE ...](https://www.youtube.com/watch?v=gErs0bAM63E) — Data Science Courses · 1:12:48

### Medical image synthesis deep learning seminar *(prerequisite)*
This seminar contextualizes the application of deep generative models to medical image synthesis, covering challenges and methods relevant to MRI data augmentation. It provides domain-specific insights that bridge general generative modeling with medical imaging applications.

*How the paper uses it:* The paper applies generative models to augment MRI datasets for dementia detection, making this medical imaging context highly relevant.

▶ [MedAI Session 29: Medical Image Analysis and Reconstruction ...](https://www.youtube.com/watch?v=HhqgbVnR2ZQ) — Stanford MedAI · 59:03

### Generative diffusion models seminar
Diffusion models are the core generative approach in the paper, producing the highest quality synthetic MRI images and best classification accuracy. These lectures cover the principles, mathematical foundations, and recent advances in diffusion models, providing deep technical understanding of the paper's central method.

*How the paper uses it:* Diffusion models yielded the best synthetic image quality and classification results in the study, making them the paper's core generative technique.

▶ [Stanford CS236: Deep Generative Models I 2023 I Lecture 16](https://www.youtube.com/watch?v=VsllsC2JMGY) — Stanford Online · 1:09:37
