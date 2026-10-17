---
title: "718 · Synthesized Image Training Techniques: On Improving Model Performance Using Confusion — Wallapak Tavanapong"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wallapak-tavanapong"
source_hash: "878c5a4daa416ca266efa131693efc580d74fed02de2a17e92dcf22a40de1620"
sequence: 718
generator: "outreach-garden: managed"
---

# 718 · Synthesized Image Training Techniques: On Improving Model Performance Using Confusion

## At a glance

- **Professor:** Wallapak Tavanapong
- **Institution:** Iowa State University
- **Paper:** [Synthesized Image Training Techniques: On Improving Model Performance Using Confusion](https://dl.acm.org/doi/pdf/10.1145/3641856)
- **Authors:** Azeez Idris, Mohammed Khaleel, Wallapak Tavanapong, Piet C. de Groen
- **Year:** 2025

## Paper overview

This paper introduces a new training framework called SIT2 that improves deep learning image classifiers when only limited labeled data is available. It does so by identifying which classes are often confused by the model and synthesizing new 'not-sure' images from these confused classes. These synthesized images are then used in three different training strategies to help the model learn better distinguishing features, leading to improved classification accuracy on medical and non-medical image datasets.

### Why it matters

**Research problem:** Deep learning image classifiers require large labeled datasets to perform well, but in domains like medicine, obtaining such datasets is expensive or infeasible. Models trained on limited labeled data often suffer from confusion between similar classes, leading to misclassification and degraded performance.

**Why it matters:** Improving model performance with limited labeled data is crucial for practical applications in healthcare and other fields where data labeling is costly or limited. Enhancing classification accuracy under these constraints can enable more reliable AI-assisted diagnosis and other automated image analysis tasks.

**Key contributions:**

- Introduction of SIT2, a novel confusion-based training framework that synthesizes images based on class confusion.
- Development of an algorithm to identify highly confused class pairs from a confusion matrix.
- Proposal of three distinct training strategies leveraging synthesized images to improve classifier performance.
- Extensive evaluation on five medical and non-medical datasets demonstrating statistically significant improvements.
- Ablation studies and qualitative analyses revealing the impact of data augmentation and synthesized images.

## About the professor

**Wallapak Tavanapong** — Professor, Kingland Systems Professor in Data Analytics or Cognitive Machine Learning, PI of Dependable Data Driven Discovery Traineeship, Department of Computer Science, Iowa State University.

Research interests: multimedia in healthcare, high performance multimedia computing, multimedia and databases, multimedia and communications, electronic medical records, and databases

### Research links

- [Faculty/profile page](http://www.cs.iastate.edu/people/wallapak-tavanapong-0)
- [Lab website](https://cml.cs.iastate.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=Pnev7hAAAAAJ)
- [DBLP](https://dblp.org/pid/79/5821.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep Learning for Image Classification
**The paper assumes:** convolutional neural networks, supervised deep learning, image classification training techniques, data augmentation methods, confusion matrix interpretation
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and standard training methods for image classification tasks.

To understand the paper on Synthesized Image Training Techniques (SIT2) for improving image classification with limited labeled data, a solid grasp of deep learning for image classification is essential. The rigorous course option offers a comprehensive, structured university-level lecture series covering foundational and advanced topics in deep learning for computer vision. The fast track provides a shorter, more accessible playlist from the same authoritative source, focusing on core concepts to quickly build relevant intuition and practical understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1 through 6, about 7 hours total — covering introduction, linear classifiers, regularization and optimization, neural networks and backpropagation, CNNs, and CNN architectures, which provide the foundational knowledge needed to grasp SIT2's methods.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a current, in-depth university course that covers image classification with CNNs, training strategies, data augmentation, and visualization techniques, all directly relevant to understanding SIT2's approach and evaluation.

*If you want all of it:* 21.2 hours across all 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Synthesized Image Training Techniques: On Improving Model Performance Using Confusion," start with foundational concepts such as confusion matrix analysis, data augmentation in deep learning, and the specific augmentation techniques MixUp and CutMix. Then, explore multi-label classification methods relevant to one of the proposed training strategies. Finally, focus on the core concept of synthesized image training, selecting a research-level talk on image synthesis methods to grasp the SIT2 framework's novel approach.

### confusion matrix analysis lecture *(prerequisite)*
Understanding confusion matrices is fundamental to identifying which classes are confused by the model, a key step in the SIT2 framework. This section covers the theory and interpretation of confusion matrices and related metrics, providing the basis for the paper's confusion-based image synthesis.

*How the paper uses it:* The paper's SIT2 framework relies on identifying highly confused class pairs from the confusion matrix to synthesize new images.

▶ [Confusion Matrix Explained](https://www.youtube.com/watch?v=6XHyYh45PxA) — Aaron Maxwell · 9:33 · 5y ago

### data augmentation deep learning seminar *(prerequisite)*
Data augmentation is essential for improving model generalization and is a critical component of the SIT2 training strategies. This section presents advanced seminar-level insights into augmentation techniques, especially in medical imaging contexts similar to those in the paper.

*How the paper uses it:* The paper's ablation studies highlight that data augmentation is essential for the success of the proposed training strategies.

▶ [MedAI Session 11: Hydranet -- Data Augmentation for Regression Neural Networks | Florian Dubost](https://www.youtube.com/watch?v=ph6xEFAu9A0) — Stanford MedAI · 41:07 · 5y ago

### mixup and cutmix augmentation lecture *(prerequisite)*
MixUp and CutMix are sophisticated data augmentation methods used in SIT2 to synthesize 'not-sure' images from confused classes. This section provides a rigorous, research-level understanding of these mixed sample augmentation techniques and their theoretical underpinnings.

*How the paper uses it:* SIT2 uses MixUp and CutMix methods to synthesize images and improve training performance.

▶ [A Unified Analysis of Mixed Sample Data Augmentation: A Loss Function Perspective [Moon Ye-Bin]](https://www.youtube.com/watch?v=4ENEVTPYg5I) — AMI Lab @ KAIST (PI: Prof. Tae-Hyun Oh) · 29:29 · 3y ago

### multi-label classification deep learning talk *(prerequisite)*
One of the SIT2 training strategies leverages multi-label classification to handle synthesized images that combine confused classes. This section covers advanced multi-label classification concepts and implementations relevant to the paper's approach.

*How the paper uses it:* The multi-label training strategy in SIT2 uses synthesized images to improve classifier performance.

▶ [MULTI-LABEL TEXT CLASSIFICATION USING 🤗 BERT AND PYTORCH](https://www.youtube.com/watch?v=f-86-HcYYi8) — The Artificial Guy · 49:55 · 5y ago

### SIT2 synthesized image training talk *(paper-talk search result; attribution unverified)*
This section focuses on the core contribution of the paper: the SIT2 framework. Since no direct author talk on SIT2 was found, a rigorous research talk on image synthesis methods for machine learning is selected to provide deep insights into the state-of-the-art in image synthesis relevant to SIT2's novel approach.

*How the paper uses it:* The core concept of the paper is the SIT2 confusion-based synthesized image training framework.

▶ [STAR 6: A Survey of Image Synthesis Methods for Visual Machine Learning | Eurographics'2021](https://www.youtube.com/watch?v=a3EFjcoZ59U) — Eurographics Conference · 1:05:31 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's approach to improving image classification with limited labeled data, start by learning about confusion matrices to grasp how model errors are identified. Next, study data augmentation techniques, especially MixUp and CutMix, which are crucial for synthesizing new training images. Finally, explore the core concept of the SIT2 framework that synthesizes images based on class confusion and employs multi-label classification strategies to enhance model performance.

### confusion matrix analysis lecture *(prerequisite)*
A confusion matrix is a fundamental tool to evaluate classification models by showing how often predictions match actual classes and where errors occur. Understanding it helps identify which classes a model confuses, which is key for targeted improvements.

*How the paper uses it:* The paper uses confusion matrices to identify pairs of classes that the model confuses, guiding the synthesis of new training images.

▶ [Confusion Matrix, Recall & Specificity in Machine Learning](https://www.youtube.com/watch?v=R1SSVT8XT8U) — Perfect Computer Engineer · 17:02 · 3y ago

### data augmentation deep learning seminar *(prerequisite)*
Data augmentation artificially increases training data diversity by applying transformations to existing images, helping models generalize better and avoid overfitting, especially when labeled data is scarce.

*How the paper uses it:* The SIT2 framework relies on data augmentation to enhance the effectiveness of synthesized images during training.

▶ [Machine Learning Foundations: Ep #7 - Image augmentation and overfitting](https://www.youtube.com/watch?v=QWdYWwW6OAE) — Google for Developers · 12:25 · 6y ago

### mixup and cutmix augmentation lecture *(prerequisite)*
MixUp and CutMix are advanced data augmentation methods that create new training samples by blending or patching images and their labels, encouraging models to learn smoother decision boundaries.

*How the paper uses it:* SIT2 uses MixUp and CutMix techniques to synthesize 'not-sure' images from confused class pairs, improving classifier robustness.

▶ [A Unified Analysis of Mixed Sample Data Augmentation: A Loss Function Perspective [Moon Ye-Bin]](https://www.youtube.com/watch?v=4ENEVTPYg5I) — AMI Lab @ KAIST (PI: Prof. Tae-Hyun Oh) · 29:29 · 3y ago

### multi-label classification deep learning talk
Multi-label classification allows a model to assign multiple labels to a single input, which is useful when synthesized images represent ambiguous or combined classes.

*How the paper uses it:* One of SIT2's training strategies treats synthesized images as multi-label inputs to better capture class confusion during learning.

▶ [Multilabel Classification](https://www.youtube.com/watch?v=nwLQIJQ03NY) — Dr. RAMBABU PEMULA · 10:53 · 1y ago

## Already in your library

- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) — also for: One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening (Alexander Tropsha)
- [EI Seminar - Rob Fergus - Data Augmentation for Image-Based Reinforcement Learning](https://www.youtube.com/watch?v=Ny2CpgPrtB8) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [Data Augmentation in Deep Learning | CNN](https://www.youtube.com/watch?v=sM2C-SsREgM) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Cutmix Data augmentation with TensorFlow 2 and intergration in tf.data - Full Stack Deep Learning.](https://www.youtube.com/watch?v=lc8VKxdEbSs) — also for: Data Augmentation Approaches for Satellite Imagery (Rebecca A. Hutchinson)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the SIT2 framework from the paper. The beginner project focuses on reproducing the confusion matrix analysis and basic synthesized image creation to grasp the core idea. The intermediate project implements the SIT2 training strategies on a public dataset, comparing performance against a baseline to validate the method. The advanced project extends the paper by exploring an open future direction: predicting the best training strategy for a new dataset using heuristics or simple meta-features.

### Beginner — Confusion Matrix Analysis and Synthesized Image Creation
*Effort: a weekend, ~8 hours*

You build a small pipeline that trains a simple image classifier on a limited subset of CIFAR-10, computes its confusion matrix to identify the most confused class pairs, and synthesizes 'not-sure' images using Random Cropping and Patching (RCP) from those confused classes. This pipeline will visualize the confusion matrix and show example synthesized images.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of SIT2: identifying confusion from the confusion matrix and synthesizing images from confused classes to augment training data.

**Grounded in:** The authors propose SIT2, a confusion-based training framework that first identifies pairs of classes with high confusion from a model's confusion matrix and synthesizes new images ('not-sure' images) by combining images from these confused classes using methods like Random Cropping and Patching (RCP).

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, scikit-learn

**Data:** Use CIFAR-10 dataset as a substitute for the paper's CIFAR10* dataset, publicly available via torchvision.datasets.

**Build it:**

1. Train a simple CNN classifier on a limited subset (e.g., 10% of CIFAR-10 training data).
2. Compute the confusion matrix on the validation set and identify the top confused class pairs.
3. Implement Random Cropping and Patching (RCP) to synthesize new images from pairs of confused classes.
4. Visualize the confusion matrix and display example synthesized 'not-sure' images.
5. Document the pipeline and results in a README.

**Ships as:** A GitHub repo with code to train the classifier, generate confusion matrix, synthesize images, and visualize results, plus a README explaining the process and findings.

**Stretch goal:** Add Equal MixUp (EQM) synthesis method and compare synthesized images visually.

### Intermediate — Implement SIT2 Training Strategies on CIFAR-10
*Effort: 1-3 weekends*

You reimplement the SIT2 framework's three training strategies (not-sure, sure-or-not, multi-label) using synthesized images created from confusion pairs on CIFAR-10. You compare classification accuracy of these strategies against a baseline model trained without SIT2, reporting improvements and statistical significance.

**Why it shows you understood the paper:** This project shows you can implement the core SIT2 training framework end-to-end, including confusion-based image synthesis, multiple training strategies, and evaluation metrics, reproducing the paper's key results on a public dataset.

**Grounded in:** Three training strategies (not-sure, sure-or-not, multi-label) are proposed to utilize synthesized images, improving classification accuracy by up to 7.8% on some datasets.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Matplotlib, SciPy

**Data:** Use CIFAR-10 dataset publicly available via torchvision.datasets as a substitute for the paper's CIFAR10* dataset.

**Build it:**

1. Implement confusion matrix calculation and identify confused class pairs from a baseline classifier.
2. Implement image synthesis methods: Random Cropping and Patching (RCP) and Equal MixUp (EQM).
3. Implement the three SIT2 training strategies using synthesized images for pretraining followed by finetuning on original data.
4. Train baseline and SIT2 models on limited CIFAR-10 data and evaluate classification accuracy.
5. Perform statistical significance testing (e.g., Mann-Whitney U test) on accuracy improvements.
6. Document methodology, results, and analysis in a detailed README.

**Ships as:** A GitHub repo with code for SIT2 training strategies, synthesis methods, evaluation scripts, and a report comparing baseline and SIT2 results with statistical tests.

**Stretch goal:** Add data augmentation methods like MixUp and CutMix to the training pipeline and analyze their impact.

### Advanced — Predicting Optimal SIT2 Training Strategy for New Datasets
*Effort: a few weeks*

You develop a heuristic or simple meta-learning approach to predict which SIT2 training strategy and image synthesis method will perform best on a new dataset, addressing a key limitation noted in the paper. You extract dataset characteristics (e.g., class confusion patterns, class granularity metrics) and train a lightweight model or rule-based system to recommend the best strategy before training. You validate this approach on multiple public datasets (e.g., CIFAR-10, Fashion-MNIST, and a medical imaging dataset).

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by attempting to automate strategy selection, demonstrating deep comprehension of SIT2's variability across datasets and practical deployment challenges.

**Grounded in:** The study does not yet provide a method to predict which training strategy or synthesis method will work best for a given dataset; future directions include developing such methods to avoid exhaustive trials.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Pandas, NumPy, Matplotlib

**Data:** Use CIFAR-10, Fashion-MNIST (public datasets), and a publicly available small medical image dataset (e.g., MedMNIST) as substitutes for the paper's datasets.

**Build it:**

1. Implement SIT2 training strategies and synthesis methods from the intermediate project.
2. Collect dataset meta-features such as confusion matrix statistics, class similarity metrics, and dataset granularity.
3. Design heuristics or train a simple classifier/regressor to predict the best SIT2 strategy based on meta-features.
4. Evaluate prediction accuracy by comparing recommended strategies' performance against actual results on multiple datasets.
5. Document the approach, experiments, and findings in a comprehensive report.

**Ships as:** A GitHub repo with code for SIT2 training, meta-feature extraction, strategy prediction model, evaluation scripts, and a detailed README discussing the approach and results.

**Stretch goal:** Explore confusion in latent feature space for image synthesis as an alternative to pixel-space methods.
