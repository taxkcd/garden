---
title: "017 · An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI — Abhijit S. Pandya"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dr-pandya-php"
source_hash: "65f77d6345101fb9d5bcbf1ebce405702a129d7586c4141841113257d8bf952e"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper, start by grounding yourself in the foundational generative models relevant to the study: Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), as these are key baselines compared in the paper. Next, explore MRI-based dementia classification methods to appreciate the downstream application validating synthetic data utility. Finally, focus on the core concept of generative diffusion models, which the paper identifies as producing the highest quality synthetic MRI images, and conclude with the authors' own related talks or closely aligned advanced research presentations to gain direct insights into their methodology and findings.

### Generative adversarial networks *(prerequisite)*
GANs are a fundamental generative model baseline in this study, used for synthetic MRI image generation. Understanding their adversarial training framework and applications in medical imaging is crucial for appreciating the comparative analysis in the paper.

*How the paper uses it:* The paper empirically compares standard GANs and data-efficient GANs as key generative models for synthetic MRI generation.

▶ [Synthesizing medical images using generative adversarial ...](https://www.youtube.com/watch?v=O6J9zdbL7NM) — Institute for Advanced Study · 28:11

### Variational autoencoders *(prerequisite)*
VAEs provide an important generative modeling approach analyzed in the paper, especially for their trade-offs between image quality and computational efficiency. A solid understanding of VAEs will clarify why they performed differently compared to GANs and diffusion models.

*How the paper uses it:* The paper evaluates VAEs for synthetic MRI generation, noting their poorer FID scores but faster training and testing times.

▶ [Variational Autoencoders](https://www.youtube.com/watch?v=Zkv_YuzEVfs) — Machine Learning in the Nanoworld · 1:51:16 · 2 years ago

### MRI-based dementia classification *(prerequisite)*
This concept covers the downstream classification tasks that validate the utility of synthetic images generated by the models. Understanding MRI-based dementia detection methods contextualizes the practical impact of the generative models evaluated.

*How the paper uses it:* The paper uses ResNet and DenseNet classifiers trained on synthetic images to detect Alzheimer's and Parkinson's diseases, validating generative model effectiveness.

▶ [Advancing Alzheimer's Diagnosis with Dr. Samaneh Abolpour ...](https://www.youtube.com/watch?v=5gWOfozdpaE) — SAIConference · 8:31

### Generative diffusion models
Diffusion models are the core generative approach in the paper, producing the highest quality synthetic MRI images and best classification accuracy. A detailed understanding of diffusion models is essential to grasp the paper's main contributions and results.

*How the paper uses it:* Diffusion models yielded the lowest FID scores and highest classification accuracy in the study, making them central to the paper's findings.

▶ [Stanford CS231N Deep Learning for Computer Vision | Spring ...](https://www.youtube.com/watch?v=Edr4uZFh4EE) — Stanford Online · 1:12:09

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper authors or closely related advanced research presentations provide the most precise insights into their methodology, experimental setup, and nuanced findings. These talks can clarify complex aspects and contextualize the empirical results.

*How the paper uses it:* While no direct talk by the authors on this exact paper is available, related advanced diffusion MRI talks provide relevant domain context.

▶ [“Advanced diffusion MRI methods for studying white matter integrity in Aphasia”, Emilie McKinnon](https://www.youtube.com/watch?v=l6GTwt_-ZC0) — C-STAR Lecture Series · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in deep learning generative models and their application to MRI-based dementia detection. Starting with core generative models like GANs and VAEs, it then covers MRI-based dementia classification to understand the medical context, and culminates with diffusion models, the paper's key method for generating high-quality synthetic MRI images. Each step builds intuition with clear, concise explainers tailored to the paper's focus.

### Generative adversarial networks *(prerequisite)*
Generative Adversarial Networks (GANs) are a class of deep learning models where two neural networks compete—the generator creates synthetic data, and the discriminator evaluates its authenticity. This adversarial process helps GANs generate realistic images, making them a foundational technique for synthetic MRI generation in medical imaging.

*How the paper uses it:* The paper compares standard and data-efficient GANs for generating synthetic MRI images to augment dementia datasets.

▶ [Understanding GANs (Generative Adversarial Networks)](https://www.youtube.com/watch?v=RAa55G-oEuk) — DeepBean · 1 year ago

### Variational autoencoders *(prerequisite)*
Variational Autoencoders (VAEs) are generative models that learn to compress data into a latent space and then reconstruct it, enabling the generation of new, similar data samples. VAEs trade off image quality for faster training and inference, which is important for understanding their role in medical image synthesis.

*How the paper uses it:* The paper evaluates VAEs for synthetic MRI generation, noting their speed advantage but poorer image quality compared to GANs and diffusion models.

▶ [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — Deepia · 1 year ago

### MRI-based dementia classification *(prerequisite)*
MRI-based dementia classification involves using machine learning models to analyze brain MRI scans and detect signs of neurodegenerative diseases like Alzheimer's and Parkinson's. Understanding this task provides context for why synthetic MRI data generation is valuable for improving classification accuracy.

*How the paper uses it:* The paper validates synthetic images by training classifiers to detect dementia from MRI scans, demonstrating the practical utility of generated data.

▶ [MRI And Dementia: Why A Normal Scan Isn't Enough](https://www.youtube.com/watch?v=OyYh1NdRKrU) — Rosabel Unscripted · 5:50

### Generative diffusion models
Diffusion models are a newer class of generative models that iteratively refine random noise into realistic images through a learned denoising process. They have recently achieved state-of-the-art results in image synthesis, producing higher-quality and more diverse samples than GANs or VAEs.

*How the paper uses it:* Diffusion models in the paper produced the highest-quality synthetic MRI images and led to the best dementia classification accuracy.

▶ [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — Deepia · 1 year ago

## Already in your library

- [Stanford CS236: Deep Generative Models I 2023 I Lecture 18 - Diffusion Models for Discrete Data](https://www.youtube.com/watch?v=mCaRNnEnYwA) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Generative Adversarial Networks (GANs) - Computerphile](https://www.youtube.com/watch?v=Sw9r8CL98N0) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
