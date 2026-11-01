---
title: "985 · CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images — Miaomiao Zhang"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-miaomiao-zhang"
source_hash: "8c92d487bcfe62d61b2d51be6bb4791e86ca5f23550be8e0df47495973945358"
sequence: 985
generator: "outreach-garden: managed"
---

# 985 · CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images

## At a glance

- **Professor:** Miaomiao Zhang
- **Institution:** University of Virginia
- **Paper:** [CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images](https://arxiv.org/pdf/2503.17162)
- **Authors:** Tonmoy Hossain, Miaomiao Zhang
- **Year:** 2025

## Paper overview

This paper introduces CoRLD, a new machine learning framework that learns detailed shape features from medical images without needing a fixed reference template during testing. It uses contrastive learning to better distinguish subtle shape differences, improving classification tasks such as diagnosing brain conditions from MRI scans and identifying adrenal gland abnormalities from CT scans.

### Why it matters

**Research problem:** Existing deformable shape representation methods rely on known template images during testing, limiting flexibility and practicality. They also struggle to capture fine-grained voxel-level differences between similar shapes, which is critical for medical image analysis.

**Why it matters:** Accurate and flexible shape representation is vital for medical imaging tasks like classification, segmentation, and diagnosis. Overcoming template dependency and improving sensitivity to subtle anatomical variations can enhance diagnostic accuracy and applicability across diverse clinical scenarios.

**Key contributions:**

- Developed CoRLD, the first model to learn class-aware contrastive shape features in latent geometric deformation spaces.
- Eliminated the need for template images during inference, using templates only as ground truth in training loss.
- Designed a plug-and-play module to integrate learned shape features with existing image classifiers to improve classification accuracy.

## About the professor

**Miaomiao Zhang** — Assistant Professor, Electrical and Computer Engineering, Computer Science, University of Virginia.

Research interests: developing novel models at the intersection of mathematics, computer engineering, and statistics in the field of biomedical imaging

### Research links

- [Faculty/profile page](https://www.cs.virginia.edu/~mz8rr)
- [Google Scholar](https://scholar.google.com/citations?user=EGBMBTwAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/miaomiao-zhang-a5665055/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** contrastive representation learning
**The paper assumes:** contrastive learning, representation learning, supervised metric learning
**Already in this field?** Skip this entirely if you already understand the principles and applications of contrastive representation learning in machine learning.

This background focuses on contrastive representation learning, the core method behind CoRLD's ability to learn shape features without template images during inference. The rigorous course option offers a deep, structured university-level understanding of deep learning and representation learning techniques, including supervised and unsupervised contrastive learning. The fast track provides a concise, visual-intuition-driven series of explainers specifically on contrastive learning, ideal for quickly grasping key concepts and methods relevant to this paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yann LeCun’s Deep Learning Course](https://www.youtube.com/playlist?list=PLgF7i4LH-YxacgG0OPmTYe1UUQAvcw9Ke) — NYU Data Science · 33 videos · 47.4h across 33 episodes

**Watch only this:** Episodes 5L (Joint embedding method and latent variable energy based models (LV-EBMs)), 5.1 (Latent Variable Energy Based Models (LV-EBMs), inference), 5.2 (But what are these EBMs used for?), 6L (Latent variable EBMs for structured prediction), and 6 (Latent Variable Energy Based Models (LV-EBMs), training), about 5 hours total — these cover the core contrastive learning and latent embedding methods relevant to CoRLD.

*Why it unblocks this paper:* Yann LeCun’s Deep Learning Course covers supervised and unsupervised deep learning and embedding methods, including contrastive learning in latent variable energy-based models, which directly relates to CoRLD's supervised contrastive learning in latent deformation spaces.

*If you want all of it:* 47.4 hours across 33 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [contrastive learning](https://www.youtube.com/playlist?list=PL4rcooZADlRCmeG82d4hMLtwWAp9PE5Cg) — Christoph Schuhmann · 16 videos · 8.8h across 16 episodes

**Watch only this:** Episodes 'Supervised Contrastive Learning', 'Contrastive learning in unsupervised learning with Prannay Khosla', and 'Contrastive Learning of visual representations - SimCLR (paper illustrated)', about 1.5 hours total — these episodes succinctly explain the core contrastive learning concepts used in CoRLD.

*Why it unblocks this paper:* Christoph Schuhmann’s contrastive learning playlist offers clear, focused explainers on supervised and unsupervised contrastive learning methods, including supervised contrastive learning and SimCLR, which align well with CoRLD’s approach and provide quick conceptual clarity.

*If you want all of it:* 8.8 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CoRLD paper, start by building foundational knowledge on deformable shape representation learning, supervised contrastive loss, contrastive learning in computer vision, and latent deformation spaces. These prerequisites provide the theoretical and methodological background necessary to grasp the paper's novel contributions. Finally, conclude with the authors' own talk on contrastive learning to directly connect the foundational concepts with CoRLD's innovative framework.

### Deformable shape representation learning *(prerequisite)*
This section covers how deformable shapes are modeled and represented in machine learning, which is essential to understand CoRLD's approach to learning shape features without fixed templates. The chosen MIT OpenCourseWare lecture provides a rigorous, graduate-level introduction to reconstruction-based representation learning, including autoencoders and self-supervised methods relevant to shape modeling.

*How the paper uses it:* CoRLD learns latent deformation representations of shapes, so understanding deformable shape representation is foundational.

▶ [Lec 11. Representation Learning: Reconstruction-Based](https://www.youtube.com/watch?v=QxOzQRtd440) — MIT OpenCourseWare · 1:21:04 · 8mo ago

### Supervised contrastive loss *(prerequisite)*
This section explains the supervised contrastive loss function that drives CoRLD to cluster similar shapes and separate dissimilar ones in latent space. The Stanford CS230 lecture offers an advanced, comprehensive treatment of supervised and self-supervised learning losses, suitable for graduate-level understanding.

*How the paper uses it:* CoRLD employs a class-aware supervised contrastive loss to learn discriminative shape features.

▶ [Stanford CS230 | Autumn 2025 | Lecture 2: Supervised, Self-Supervised, & Weakly Supervised Learning](https://www.youtube.com/watch?v=DNCn1BpCAUY) — Stanford Online · 1:39:48 · 1y ago

### Contrastive learning in computer vision *(prerequisite)*
This section provides a detailed overview of contrastive learning frameworks in computer vision, which underpin CoRLD’s method for distinguishing subtle shape differences. The Stanford MedAI seminar is a rigorous, research-focused talk reviewing self-supervised and contrastive methods in vision, aligning well with the paper's methodology.

*How the paper uses it:* CoRLD’s core methodology is based on contrastive learning to enhance shape feature discrimination.

▶ [MedAI Session 8: Self-supervision & Contrastive Frameworks: a vision-based review | Nandita Bhaskhar](https://www.youtube.com/watch?v=OF_7dBbb_N0) — Stanford MedAI · 58:13 · 5y ago

### Latent deformation spaces *(prerequisite)*
Understanding latent deformation spaces is key to grasping how CoRLD encodes shapes and their geometric variations. The Stanford CME296 lecture on latent space and guidance offers a detailed, graduate-level explanation of latent representations in vision models, which is directly relevant to CoRLD’s latent deformation encoding.

*How the paper uses it:* CoRLD encodes shapes in latent deformation spaces to capture geometric variations without templates.

▶ [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 4 - Latent Space & Guidance](https://www.youtube.com/watch?v=WUUq6TVAu8U) — Stanford Online · 1:40:58 · 6mo ago

### CoRLD paper talk *(paper-talk search result; attribution unverified)*
This section features a direct talk by researchers on contrastive learning, providing insights into the theoretical foundations and practical implementations that relate closely to CoRLD’s framework. Although not the authors' own talk, the Simons Institute talk by Sujay Sanghavi is a rigorous, research-level presentation on contrastive learning that complements understanding CoRLD’s contributions.

*How the paper uses it:* Hearing from experts on contrastive learning deepens understanding of CoRLD’s novel contrastive shape representation approach.

▶ [Understanding Contrastive Learning and Self-training](https://www.youtube.com/watch?v=Inab20jJ4z0) — Simons Institute for the Theory of Computing · 44:41 · Streamed 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CoRLD, start by building foundational knowledge of contrastive learning in computer vision, which is the core technique used to distinguish subtle shape differences. Then, learn about deformable shape representation to grasp how shapes that can change form are modeled. Next, explore latent deformation spaces to understand how CoRLD encodes shape variations. Follow this with supervised contrastive loss to see how the model clusters similar shapes and separates dissimilar ones. Finally, learn about integrating shape and image features to appreciate how CoRLD boosts classification performance by combining these complementary data types.

### Contrastive learning in computer vision *(prerequisite)*
Contrastive learning teaches models to recognize which data points are similar or different by comparing pairs of examples, often without explicit labels. This approach helps models learn useful representations by pulling similar examples closer and pushing different ones apart in the feature space.

*How the paper uses it:* CoRLD uses contrastive learning to better distinguish subtle shape differences in medical images.

▶ [What is Contrastive Learning? (Contrastive Learning/Self-supervised Learning Explained)](https://www.youtube.com/watch?v=cH8I8jf-xJU) — Stochine · 6:13 · 4y ago

### Deformable shape representation learning *(prerequisite)*
Deformable shape representation involves modeling shapes that can bend, stretch, or change form, which is crucial for analyzing anatomical structures that vary between individuals. Understanding these representations helps in capturing detailed shape variations beyond rigid templates.

*How the paper uses it:* CoRLD focuses on learning deformable shape features without relying on fixed templates during inference.

▶ [EGGN 512 - Lecture 30-1 Deformable Models](https://www.youtube.com/watch?v=B205e9EEyFk) — William Hoff · 7:02 · 14y ago

### Latent deformation spaces *(prerequisite)*
Latent deformation spaces are abstract, compressed representations where complex shape transformations are encoded as simpler vectors or parameters. This allows models to capture geometric variations efficiently and compare shapes in a meaningful way.

*How the paper uses it:* CoRLD encodes shapes in latent deformation spaces to capture geometric variations without needing templates at test time.

▶ [The Mystery of 'Latent Space' in Machine Learning Explained!](https://www.youtube.com/watch?v=mX2y3NWmaCQ) — Dylan Curious · 12:20 · 3y ago

### Supervised contrastive loss *(prerequisite)*
Supervised contrastive loss extends contrastive learning by using label information to group samples of the same class closer together while pushing different classes apart, improving the model's ability to learn discriminative features.

*How the paper uses it:* CoRLD employs a supervised contrastive loss to cluster similar class shapes and separate dissimilar ones in latent space.

▶ [Stanford CS230 | Autumn 2025 | Lecture 2: Supervised, Self-Supervised, & Weakly Supervised Learning](https://www.youtube.com/watch?v=DNCn1BpCAUY) — Stanford Online · 1:39:48 · 1y ago

### Integrating shape and image features
Combining shape features with image intensity features allows models to leverage complementary information, improving classification accuracy by considering both geometric and appearance cues.

*How the paper uses it:* CoRLD integrates learned shape features with image intensity features to boost classification performance on medical imaging tasks.

▶ [Lecture 2 | Image Classification](https://www.youtube.com/watch?v=OoUX-nOEjG0) — Stanford University School of Engineering · 59:32 · 9y ago

### CoRLD paper talk *(paper-talk search result; attribution unverified)*
A direct explanation from experts provides insight into the novel framework, its motivations, and key contributions, helping to contextualize the technical concepts within the paper's goals.

*How the paper uses it:* Hearing the authors explain CoRLD offers a comprehensive understanding of the method and its impact on deformable shape learning.

▶ [Understanding Contrastive Learning and Self-training](https://www.youtube.com/watch?v=Inab20jJ4z0) — Simons Institute for the Theory of Computing · 44:41 · Streamed 1y ago

## Already in your library

- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Contrastive learning explained | Ishan Misra and Lex Fridman](https://www.youtube.com/watch?v=bDfqtxKEThI) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Deep Learning Decall Fall 2017 Day 6: Autoencoders and Representation Learning](https://www.youtube.com/watch?v=R3DNKE3zKFk) — also for: TokenLight: Precise Lighting Control in Images using Attribute Tokens (Julie Dorsey)
- [Stanford CS229 Machine Learning | Spring 2026 | Lecture 12: Representation Learning](https://www.youtube.com/watch?v=_kREM2UAiJ8) — also for: WNet: Discrete Wavelets Transform for Efficient Token Mixing (Abdou Youssef)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [Lec 15. Generative Models: Representation Learning Meets Generative Modeling](https://www.youtube.com/watch?v=8zzfcYIELdo) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [DIP Lecture 25: Active shape models](https://www.youtube.com/watch?v=53kx_czs7Es) — also for: Evaluating effects of focal length and viewing angle in a comparison of recent face landmark and alignment methods (Eric Patterson)
- [SimCLR: A Simple Framework for Contrastive Learning of Visual Representations](https://www.youtube.com/watch?v=wySLC4nszv8) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Supervised Contrastive Learning](https://www.youtube.com/watch?v=MpdbFLXOOIw) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [Latent Space Visualisation: PCA, t-SNE, UMAP | Deep Learning Animated](https://www.youtube.com/watch?v=o_cAOa5fMhE) — also for: Deconstructing Denoising Diffusion Models for Self-Supervised Learning (He He)
- [Contrastive Learning in PyTorch - Part 1: Introduction](https://www.youtube.com/watch?v=u-X_nZRsn5M) — also for: Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series (Xiang Zhang)
- [Contrastive Loss : Data Science Basics](https://www.youtube.com/watch?v=dC3_IKaBXTk) — also for: Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis (Natalie Stanley)
- [Stanford CS231N | Spring 2025 | Lecture 5: Image Classification with CNNs](https://www.youtube.com/watch?v=f3g1zGdxptI) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of CoRLD's approach to deformable shape representation learning without template dependency. Starting with a small-scale contrastive learning experiment on synthetic shapes, you then implement the core CoRLD method on a public medical imaging substitute dataset to reproduce classification improvements. Finally, you extend the framework toward unsupervised contrastive shape learning, addressing a key limitation noted in the paper.

### Beginner — Contrastive Learning of Simple Deformable Shapes
*Effort: a weekend, ~8 hours*

You build a small Python notebook that generates synthetic 2D deformable shapes (e.g., ellipses with subtle deformations) and trains a simple convolutional encoder with a supervised contrastive loss to cluster shapes by class. This reproduces the core idea of learning class-aware shape features without templates.

**Why it shows you understood the paper:** This project shows you grasp the supervised contrastive learning mechanism in latent deformation spaces and the importance of class-aware clustering for shape representation, a foundational concept in CoRLD.

**Grounded in:** Demonstrates the paper's key contribution of using a class-aware contrastive supervised learning objective in latent deformation spaces to promote similarity among representations of similar classes and separation of dissimilar groups.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic 2D deformable shapes generated procedurally within the notebook to simulate subtle shape variations.

**Build it:**

1. Generate a dataset of synthetic 2D shapes with subtle class-specific deformations.
2. Implement a simple convolutional encoder network to embed shapes into a latent space.
3. Implement a supervised contrastive loss function to cluster embeddings by class.
4. Train the model and visualize embedding clusters using dimensionality reduction (e.g., t-SNE).
5. Evaluate clustering quality qualitatively and quantitatively (e.g., silhouette score).

**Ships as:** A Jupyter notebook demonstrating synthetic shape generation, training of a contrastive encoder, and visualization of learned shape embeddings clustered by class.

**Stretch goal:** Add noise perturbations to shapes and evaluate robustness of learned embeddings, mimicking the paper's adversarial noise robustness results.

### Intermediate — Reimplementation of CoRLD on Public Brain MRI Subset
*Effort: 2 weekends, ~20 hours*

You implement the core CoRLD framework from the paper based on its method description, training a model to learn latent deformation fields and class-aware contrastive shape features on a publicly available brain MRI dataset substitute (e.g., OASIS or ADNI subset). You integrate learned shape features with image intensity features to improve classification of brain conditions.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement CoRLD's template-free shape representation learning and supervised contrastive loss, and to reproduce its classification improvements by fusing shape and image features.

**Grounded in:** Reproduces the paper's key result that CoRLD outperforms state-of-the-art methods on brain MRI shape classification tasks by learning template-free class-aware contrastive shape features and integrating them with image intensity features.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, SimpleITK

**Data:** A publicly available brain MRI dataset such as OASIS or ADNI used as a substitute for the paper's brain MRI data; shape annotations can be approximated by segmentations or synthetic deformation fields.

**Build it:**

1. Preprocess the brain MRI dataset to extract relevant anatomical shapes (e.g., brain structures) and corresponding image patches.
2. Implement the CoRLD model architecture to encode images and predict latent deformation fields without template input during inference.
3. Implement the supervised contrastive loss to cluster shape embeddings by class labels.
4. Train the model jointly on shape and image features and evaluate classification accuracy against a baseline using image features alone.
5. Visualize learned deformation fields and embedding clusters to validate shape feature learning.

**Ships as:** A GitHub repository with code to train and evaluate the CoRLD model on brain MRI data, including scripts for data preprocessing, training, evaluation, and visualization, plus a README documenting results and comparisons.

**Stretch goal:** Experiment with different backbone architectures (e.g., ResNet, DenseNet) for the image encoder and report their impact on classification performance, as done in the paper.

### Advanced — Unsupervised Contrastive Shape Representation Learning Extension
*Effort: 3+ weeks*

You extend the CoRLD framework to an unsupervised or semi-supervised setting by removing the need for paired shape annotations and template images during training. You design and implement an unsupervised contrastive learning objective on latent deformation spaces, possibly leveraging data augmentation or pseudo-labeling, and evaluate on a medical imaging dataset substitute.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper by exploring unsupervised learning of deformable shape representations, demonstrating deep comprehension of CoRLD's methodology and its challenges.

**Grounded in:** Targets the paper's stated limitation that current training requires paired shape annotations and templates, and the future direction of extending CoRLD to unsupervised learning settings.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, SimpleITK

**Data:** Same public brain MRI or CT dataset substitute as intermediate project, without requiring shape annotation pairs; synthetic augmentations simulate shape variability.

**Build it:**

1. Review CoRLD's supervised contrastive loss and identify components requiring paired annotations.
2. Design an unsupervised contrastive loss leveraging data augmentations or clustering to learn shape features without explicit labels.
3. Modify the CoRLD architecture and training pipeline to incorporate the unsupervised loss.
4. Train the model on the dataset substitute and evaluate learned shape embeddings via downstream classification or clustering tasks.
5. Compare performance against the supervised CoRLD baseline and analyze strengths and weaknesses.
6. Document challenges and potential clinical implications of uncertainty estimation or multi-modal extensions.

**Ships as:** A comprehensive GitHub repository with code, experiments, and detailed README explaining the unsupervised extension, evaluation results, and discussion of limitations and future work.

**Stretch goal:** Incorporate uncertainty estimation into the learned shape representations to provide confidence measures, aligning with another future direction from the paper.
