---
title: "009 · NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models — Pinar Yanardag"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pinar-yanardag-html"
source_hash: "edd13950a1d165458d79d2be043623da547675ac69949d451f6d0e95e5cc995f"
sequence: 9
generator: "outreach-garden: managed"
---

# 009 · NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models

## At a glance

- **Professor:** Pinar Yanardag
- **Institution:** Virginia Tech
- **Paper:** [NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models](https://doi.org/10.1109/cvpr52733.2024.02285)
- **Authors:** Yusuf Dalva, Pinar Yanardag
- **Year:** 2023

## Paper overview

This paper introduces NoiseCLR, a novel unsupervised method that discovers meaningful and disentangled editing directions in the latent space of large text-to-image diffusion models like Stable Diffusion. Unlike prior methods relying on text prompts or labeled data, NoiseCLR uses contrastive learning on a small set of unlabeled images to find semantic directions that can be combined within and across domains (e.g., faces, cats, art) for precise image editing.

### Why it matters

**Research problem:** Existing diffusion model editing methods depend heavily on text prompts or labeled data to identify semantic directions, limiting their applicability in domains where such prompts are unavailable or hard to define. Moreover, prior unsupervised methods struggle with large-scale diffusion models and often produce entangled edits or require separate models per domain.

**Why it matters:** Discovering interpretable and disentangled directions in diffusion models' latent spaces enables precise and flexible image editing, expanding the usability of these models in creative and specialized fields such as art, fashion, and medicine. It also enhances transparency and trust by demystifying the 'black-box' nature of diffusion models and helps identify potential biases.

**Key contributions:**

- First unsupervised method to discover disentangled latent directions in large-scale diffusion models like Stable Diffusion.
- Contrastive learning framework (NoiseCLR) that requires no text prompts, labeled data, or user guidance.
- Ability to discover diverse, fine-grained semantic directions across multiple domains (faces, cats, cars, artwork) using a single diffusion model.
- Capability to apply multiple directions simultaneously within and across domains without interference.
- Demonstrated competitive or superior editing quality compared to state-of-the-art diffusion-based and GAN-based methods.

## About the professor

**Pinar Yanardag** — Assistant Professor, Virginia Tech.

Research interests: graph kernels, submodular optimization, human-AI collaboration, augmented creativity, deep learning

### Research links

- [Faculty/profile page](https://website.cs.vt.edu/people/faculty/pinar-yanardag.html)
- [Google Scholar](https://scholar.google.com/citations?user=qzczdd8AAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and advanced background knowledge necessary to understand the NoiseCLR paper on unsupervised discovery of interpretable directions in diffusion models. It covers essential mathematics, probability, machine learning fundamentals, generative models, and contrastive learning. The playlist is designed to be worked through in order, starting from linear algebra and calculus, progressing through probability and statistics, core machine learning concepts, and culminating in advanced topics like generative models and contrastive representation learning.

**The paper assumes:** linear algebra, multivariate calculus, probability theory, machine learning fundamentals, deep learning architectures, generative models including GANs and diffusion models, contrastive learning methods, latent space manipulation in generative models
**Time to work through:** roughly 100-120 hours if you watch everything, about 70-80 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you have a solid background in machine learning and deep learning fundamentals; skip stage 4 if you are already familiar with generative models like GANs and diffusion models.

### Stage 1 · Linear Algebra and Multivariate Calculus *(foundational)*
Understanding vector spaces, matrix operations, and gradients is essential for grasping how latent spaces and neural network parameters are manipulated in diffusion models and contrastive learning.

▶ **Course:** [Mathematical Foundations for Machine Learning](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYPJS6m_ygxb4KtHYxh1HjR) — NPTEL - Indian Institute of Science, Bengaluru · 71 videos · 40.3h across the first 60 episodes

*What to watch:* Watch the first 60 episodes of the "Mathematical Foundations for Machine Learning" playlist by NPTEL - Indian Institute of Science, Bengaluru, focusing on lectures covering multivariate functions, gradients, matrix derivatives, and optimization (roughly episodes 50 to 69). These cover the necessary linear algebra and calculus concepts relevant to neural networks and latent space manipulations.

*Move on when you can:* Explain how to compute gradients of a multivariate function and perform matrix-vector multiplication relevant to neural network layers.

### Stage 2 · Probability and Statistics for Machine Learning *(foundational)*
Diffusion models and contrastive learning rely on probabilistic modeling and statistical measures; understanding distributions, expectations, and divergences is critical for interpreting noise prediction and contrastive objectives.

▶ **Course:** [Stanford CS109 Introduction to Probability for Computer Scientists I 2022 I Chris Piech](https://www.youtube.com/playlist?list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg) — Stanford Online · 29 videos · 35.4h across 29 episodes

*What to watch:* Watch the entire "Stanford CS109 Introduction to Probability for Computer Scientists I 2022" playlist by Stanford Online. This course covers fundamental probability concepts including expectation, variance, and KL divergence, which are crucial for understanding the probabilistic foundations of diffusion models and contrastive learning.

*Move on when you can:* Derive and explain the concept of expectation, variance, and KL divergence between probability distributions.

### Stage 3 · Fundamentals of Machine Learning and Deep Learning *(core)*
The paper builds on neural network training, feature extraction, and optimization techniques; knowledge of supervised and unsupervised learning, backpropagation, and representation learning is required to understand the method's framework.

▶ **Course:** [Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0) — DeepLearningAI · 43 videos · 5.7h across 43 episodes

*What to watch:* Focus on the first 20 episodes of the "Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)" by DeepLearningAI, which cover neural network basics, supervised learning, gradient descent, and backpropagation. These topics are essential to grasp the training and optimization aspects of the NoiseCLR contrastive learning framework.

*Move on when you can:* Implement a simple neural network and train it using gradient descent on a classification task.

### Stage 4 · Generative Models: GANs and Diffusion Models *(advanced)*
NoiseCLR operates on latent spaces of large-scale diffusion models and compares to GAN-based methods; understanding how these models generate data and represent latent semantics is necessary to follow the editing and direction discovery process.

▶ **Course:** [Stanford CS236: Deep Generative Models I 2023 I Stefano Ermon](https://www.youtube.com/playlist?list=PLoROMvodv4rPOWA-omMM6STXaWW4FvJT8) — Stanford Online · 18 videos · 23.6h across 18 episodes

*What to watch:* Watch the full "Stanford CS236: Deep Generative Models I 2023" playlist by Stanford Online, focusing especially on lectures covering GANs (lectures 9-10), score-based models, and diffusion models (lectures 13-16). This course provides a comprehensive understanding of generative model architectures and training, crucial for understanding NoiseCLR's application to diffusion models.

*Move on when you can:* Explain the architecture and training procedure of GANs and diffusion models and describe how latent spaces encode semantic information.

### Stage 5 · Contrastive Learning and Representation Learning *(advanced)*
The core of NoiseCLR is a contrastive learning framework that discovers disentangled semantic directions; understanding contrastive loss, positive/negative sample construction, and feature space alignment is key to grasping the method.

▶ **Course:** [Representation Learning MSc course SS2023 HHU Dusseldorf](https://www.youtube.com/playlist?list=PL3mKiGE4zNJJ83K4c3IBka6eYfe6v71dS) — Nikolas Adaloglou · 21 videos · 16.4h across 21 episodes

*What to watch:* Watch the entire "Representation Learning MSc course SS2023 HHU Dusseldorf" playlist by Nikolas Adaloglou, focusing on lectures 4 and 5 which cover contrastive learning methods such as SimCLR and MoCo in detail. This course thoroughly explains contrastive loss functions and representation learning techniques essential to NoiseCLR.

*Move on when you can:* Derive the contrastive loss function and implement a simple contrastive learning algorithm on unlabeled data.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand NoiseCLR, start with foundational knowledge on diffusion models for image generation, as NoiseCLR builds upon these generative frameworks. Next, grasp latent space disentanglement concepts to appreciate how NoiseCLR achieves interpretable and independent editing directions. Then, study the CLIP model's role in semantic understanding, which NoiseCLR leverages for evaluation and guidance. Finally, focus on the core concept of NoiseCLR itself, emphasizing the authors' own talks and advanced seminar presentations to capture the novel contrastive learning approach for unsupervised discovery of editing directions.

### Diffusion models for image generation *(prerequisite)*
Diffusion models form the generative backbone of NoiseCLR, enabling image synthesis from noise. Understanding their mechanics and training is essential to appreciate how NoiseCLR manipulates latent spaces within these models for editing.

*How the paper uses it:* NoiseCLR discovers editing directions in the latent space of large-scale diffusion models like Stable Diffusion.

▶ [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — Machine Learning at Berkeley · 3 years ago

### Latent space disentanglement *(prerequisite)*
Disentanglement in latent spaces ensures that semantic directions correspond to independent, interpretable factors of variation. This concept underpins NoiseCLR's goal of finding disentangled editing directions without supervision.

*How the paper uses it:* NoiseCLR aims to discover disentangled latent directions enabling precise and interpretable image edits.

▶ [Lec 26 Entanglement, Disentanglement Latent Space, and Beta-VAE](https://www.youtube.com/watch?v=nh55anAdRfw) — NPTEL - Indian Institute of Science, Bengaluru · 51:22 · 4 days ago

### CLIP model for semantic understanding *(prerequisite)*
CLIP provides a joint image-text embedding space that NoiseCLR uses to evaluate and guide semantic edits. Understanding CLIP's architecture and contrastive training helps in grasping how semantic similarity and disentanglement are measured.

*How the paper uses it:* NoiseCLR relies on CLIP embeddings for semantic understanding and evaluation of discovered directions.

▶ [How AI 'Understands' Images (CLIP) - Computerphile](https://www.youtube.com/watch?v=KcSXcpluDe4) — Computerphile · 18:05 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand NoiseCLR, start by learning about diffusion models for image generation, which are the foundational generative models NoiseCLR edits. Next, grasp the concept of latent space disentanglement to appreciate how interpretable and independent editing directions are discovered. Then, study contrastive learning in latent spaces, the core technique NoiseCLR uses to find semantic directions without supervision. Finally, explore the NoiseCLR paper talk for direct insights from the authors.

### Diffusion models for image generation *(prerequisite)*
Diffusion models generate images by gradually transforming noise into coherent images through a learned denoising process. Understanding this process helps you see what NoiseCLR edits and why latent directions matter in this context.

*How the paper uses it:* NoiseCLR discovers editing directions in the latent space of large text-to-image diffusion models like Stable Diffusion.

▶ [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — Machine Learning at Berkeley · 3 years ago

### Latent space disentanglement *(prerequisite)*
Latent space disentanglement means representing different semantic features independently in the model's latent space, allowing for precise and interpretable edits. This concept is key to understanding how NoiseCLR finds meaningful, disentangled editing directions.

*How the paper uses it:* NoiseCLR aims to discover disentangled latent directions that correspond to independent semantic edits in diffusion models.

▶ [Lec 26 Entanglement, Disentanglement Latent Space, and Beta-VAE](https://www.youtube.com/watch?v=nh55anAdRfw) — NPTEL - Indian Institute of Science, Bengaluru · 51:22 · 4 days ago

### Contrastive learning in latent spaces
Contrastive learning trains models to bring similar data points closer and push different ones apart in latent space, enabling unsupervised discovery of meaningful features. NoiseCLR uses this technique to learn semantic directions without labeled data or text prompts.

*How the paper uses it:* NoiseCLR employs a contrastive learning framework to discover semantic directions from unlabeled images by contrasting feature divergences.

▶ [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — Deepia · 1 year ago

## Already in your library

- [[CVPR2024] NoiseCLR - Teaser Video](https://www.youtube.com/watch?v=RA2KzZ25F5I) — also for: NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models (Pinar Yanardag)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of NoiseCLR's unsupervised discovery of interpretable directions in diffusion models. The beginner project focuses on reproducing a core qualitative edit using existing tools and small data. The intermediate project involves reimplementing the NoiseCLR contrastive learning framework on a small public dataset to quantitatively evaluate disentangled directions. The advanced project extends NoiseCLR by addressing one of its stated limitations, such as bias mitigation or real-time direction discovery, to explore novel research directions.

### Beginner — Reproduce NoiseCLR Face Attribute Edits on Stable Diffusion Outputs
*Effort: a weekend, ~8 hours*

You build a simple pipeline that uses a pretrained Stable Diffusion model to generate a small set of face images, then manually apply latent space perturbations along a few semantic directions inspired by NoiseCLR's qualitative results (e.g., age, mustache). You visualize before-and-after images to show disentangled edits without retraining the diffusion model.

**Why it shows you understood the paper:** This project shows you grasp the core idea of latent space editing in diffusion models and the concept of semantic directions without supervision, as well as the importance of disentanglement in edits.

**Grounded in:** Qualitative results show effective, disentangled edits such as changing facial features (age, race, mustache).

**Tech stack:** Python 3.11, Stable Diffusion pretrained model (e.g., via diffusers library), PyTorch, Jupyter Notebook, matplotlib

**Data:** Use a small set (~50) of generated face images from Stable Diffusion as a substitute for the unlabeled domain images used in the paper.

**Build it:**

1. Set up a Python environment with PyTorch and the diffusers library to load pretrained Stable Diffusion.
2. Generate a small batch of face images using Stable Diffusion with fixed seeds for reproducibility.
3. Identify or approximate a few semantic latent directions manually (e.g., by interpolating noise vectors or latent embeddings).
4. Apply perturbations along these directions to the latent representations before image decoding.
5. Visualize and compare original and edited images side-by-side to demonstrate disentangled attribute changes.

**Ships as:** A GitHub repo with a Jupyter notebook that generates face images, applies latent edits along semantic directions, and visualizes the results with explanations.

**Stretch goal:** Add a simple user interface to select and combine multiple semantic directions interactively.

### Intermediate — Reimplement NoiseCLR Contrastive Learning for Unsupervised Direction Discovery
*Effort: 2 weekends, ~20 hours*

You implement the core NoiseCLR contrastive learning framework from the paper to discover disentangled semantic directions in the latent space of Stable Diffusion. You train on a small unlabeled dataset of real face images (e.g., CelebA subset) and evaluate discovered directions by applying edits and measuring disentanglement with LPIPS and CLIP scores compared to a simple baseline (e.g., random directions).

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's novel contrastive learning approach into code, handle latent space manipulations, and quantitatively evaluate semantic disentanglement, reflecting a deep understanding of NoiseCLR's core contributions.

**Grounded in:** NoiseCLR employs a contrastive learning framework that learns K semantic directions from a small set (around 100) of unlabeled images per domain using a pretrained diffusion model (Stable Diffusion).

**Tech stack:** Python 3.11, PyTorch, diffusers library for Stable Diffusion, CLIP model for semantic evaluation, NumPy, matplotlib

**Data:** Use a publicly available subset of the CelebA dataset (~100 images) as the unlabeled domain data for training NoiseCLR.

**Build it:**

1. Set up the environment with PyTorch, diffusers, and CLIP models.
2. Implement the NoiseCLR contrastive loss as described, contrasting feature divergences in the noise prediction space.
3. Extract noise prediction features from the pretrained Stable Diffusion model for the unlabeled images.
4. Train the contrastive model to learn K semantic directions (e.g., K=10) from the dataset.
5. Apply discovered directions to edit images and compute LPIPS and CLIP re-scoring metrics to evaluate disentanglement and edit quality.
6. Compare results against a baseline using random latent directions.

**Ships as:** A GitHub repo with code to train NoiseCLR on a small real dataset, scripts to apply discovered directions for editing, and a report notebook showing quantitative and qualitative evaluation.

**Stretch goal:** Extend the implementation to discover directions across two domains (e.g., faces and cats) and demonstrate cross-domain composable edits.

### Advanced — Mitigate Biases in NoiseCLR Direction Discovery Using Data Augmentation
*Effort: 3+ weeks*

You extend NoiseCLR by integrating data augmentation strategies during contrastive learning to mitigate biases inherited from limited or skewed unlabeled datasets, addressing a key limitation noted in the paper. You evaluate how augmentation affects the diversity and disentanglement of discovered directions and their robustness across demographic attributes in face images.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, designing and implementing a meaningful extension that improves NoiseCLR's fairness and generalization, which could spark research discussions with the professor.

**Grounded in:** Explore methods to mitigate biases inherited from Stable Diffusion and CLIP. Some edits (e.g., 'Child') affect related attributes due to model biases.

**Tech stack:** Python 3.11, PyTorch, diffusers library, CLIP model, Albumentations or torchvision for data augmentation, NumPy, matplotlib

**Data:** Use a real-world face dataset such as CelebA with demographic annotations to analyze bias and augmentation effects.

**Build it:**

1. Reimplement or reuse your NoiseCLR training pipeline from the intermediate project.
2. Integrate data augmentation techniques (e.g., color jitter, horizontal flip, random crop) into the unlabeled image preprocessing pipeline.
3. Train NoiseCLR with and without augmentation on the same dataset.
4. Analyze the discovered directions for diversity and disentanglement using LPIPS and CLIP metrics.
5. Perform qualitative and quantitative bias analysis by examining edits on demographic subgroups (e.g., age, race).
6. Document how augmentation impacts bias and direction quality, proposing further improvements.

**Ships as:** A GitHub repo with the extended NoiseCLR training code, evaluation scripts, and a detailed report discussing bias mitigation results and future work.

**Stretch goal:** Develop a real-time or faster training variant of NoiseCLR using lightweight augmentations or model pruning.

_No official code or datasets were released by the authors; all projects rely on publicly available pretrained Stable Diffusion and CLIP models and substitute datasets such as CelebA._
