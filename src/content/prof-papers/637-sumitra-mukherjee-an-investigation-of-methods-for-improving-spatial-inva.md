---
title: "637 · An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification — Sumitra Mukherjee"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sumitra-mukherjee"
source_hash: "4b0104d6c65b89a92d755c618d484c7d88a9827144900ac90f774b9eedce1e95"
sequence: 637
generator: "outreach-garden: managed"
---

# 637 · An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification

## At a glance

- **Professor:** Sumitra Mukherjee
- **Institution:** Nova Southeastern University
- **Paper:** [An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification](https://doi.org/10.2139/ssrn.4548826)
- **Authors:** David Noel, Sumitra Mukherjee
- **Year:** 2024

## Paper overview

This paper studies how to improve the ability of convolutional neural networks (CNNs) to correctly classify images even when the images are slightly transformed, such as rotated or shifted. The authors compare two advanced data augmentation techniques—RandAugment, which applies random geometric transformations, and Conditional Generative Adversarial Networks (CGANs), which generate synthetic images—to see which better improves CNN performance and robustness. They test these methods on three standard image datasets using three CNN models and find that RandAugment consistently improves accuracy and robustness more than CGAN-based augmentation.

### Why it matters

**Research problem:** Convolutional Neural Networks are assumed to be spatially invariant, meaning they should recognize objects regardless of small changes in position, orientation, or scale. However, in practice, small transformations in input images can significantly reduce CNN accuracy. The problem is how to improve spatial invariance in CNNs to enhance their robustness and generalizability.

**Why it matters:** Lack of spatial invariance in CNNs can lead to unreliable predictions, which is critical in applications requiring high reliability and fairness, such as medical diagnosis or security systems. Improving spatial invariance reduces overfitting and increases model robustness against small input perturbations, thereby making CNNs safer and more trustworthy.

**Key contributions:**

- Developed a custom 9-layer CNN (NoelNet) for benchmarking augmentation techniques.
- Implemented and trained Conditional GANs to generate synthetic labeled images for augmentation.
- Performed a comprehensive empirical comparison of RandAugment and CGAN-based augmentation across multiple CNN architectures and datasets.
- Demonstrated that RandAugment consistently improves spatial invariance and classification accuracy more than CGAN-based augmentation.
- Showed that combining GAN-generated samples with original data improves invariance better than using GAN samples alone.

## About the professor

**Sumitra Mukherjee** — Professor - Computing, Computing, Nova Southeastern University.

Research interests: Analytics, data science, machine learning, artificial intelligence, data security.

### Research links

- [Faculty/profile page](https://cec.nova.edu/faculty/mukherjee.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convolutional Neural Networks
**The paper assumes:** convolutional neural networks architecture, convolution operations, spatial invariance in CNNs, image classification with deep learning
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and their role in image classification.

To understand the methods for improving spatial invariance in convolutional neural networks (CNNs) as studied in the paper, a solid grasp of CNN architectures, convolution operations, and data augmentation techniques is essential. The rigorous course option offers a deep, structured university-level treatment of CNNs in computer vision, ideal for thorough comprehension and research preparation. The fast track provides a concise, intuition-focused series that covers the core concepts of CNNs quickly, suitable for readers who want a clear and practical overview without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1 through 6, about 7 hours — covering introduction, linear classifiers, regularization, neural networks, CNNs, and CNN architectures. This subset provides the essential background on CNNs and their training needed to grasp the paper's core methods.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a comprehensive, authoritative university course focused specifically on deep learning for computer vision, including CNN architectures, image classification, and generative models. It covers foundational and advanced topics directly relevant to understanding spatial invariance and augmentation techniques like RandAugment and GANs.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convolutional Neural Networks Basics & Intuitions](https://www.youtube.com/playlist?list=PL1GQaVhO4f_jn1QGu1O64hgr3Dcj-rJLB) — Cogneethi · 17 videos · 1.5h across 17 episodes

**Watch only this:** Episodes C 4.0 through C 4.9, about 50 minutes — covering classical vs CNN vision, 1D and 2D convolutions, CNN architecture, filters, fully connected layers, softmax, complete ConvNet, pooling, and an end-to-end example.

*Why it unblocks this paper:* The 'Convolutional Neural Networks Basics & Intuitions' playlist by Cogneethi offers a concise, visual, and intuitive introduction to CNNs, covering convolution operations, architecture, pooling, and training concepts in short episodes. It is well-suited for quickly building practical intuition about CNNs relevant to the paper's focus on spatial invariance and augmentation.

*If you want all of it:* 1.5 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on improving spatial invariance in CNNs, start by grounding yourself in the foundational concepts of convolutional neural network architectures, data augmentation techniques, and generative adversarial networks, as these underpin the methods compared in the study. Then, focus on the core concept of spatial invariance in CNNs, which is central to the paper's research problem. Finally, consolidate your understanding with advanced university lectures and research talks that cover spatial invariance and CNNs in depth.

### Convolutional neural network architectures *(prerequisite)*
Understanding the design and differences between CNN architectures like ResNet and InceptionV3 is critical for interpreting the comparative results in the paper. The selected Stanford lecture offers a rigorous, graduate-level overview of prominent CNN architectures used in image classification research.

*How the paper uses it:* The paper compares augmentation effects across multiple CNN architectures including ResNet50 and InceptionV3.

▶ [Lecture 9 | CNN Architectures](https://www.youtube.com/watch?v=DAOcjicFr1Y) — Stanford University School of Engineering · 1:17:40 · 9y ago

### Data augmentation techniques *(prerequisite)*
Data augmentation is fundamental to improving model robustness and spatial invariance. The chosen MIT seminar provides an advanced, research-focused discussion on data augmentation methods in image-based learning, suitable for understanding the augmentation strategies evaluated in the paper.

*How the paper uses it:* The paper rigorously compares RandAugment and CGAN-based data augmentation techniques.

▶ [EI Seminar - Rob Fergus - Data Augmentation for Image-Based Reinforcement Learning](https://www.youtube.com/watch?v=Ny2CpgPrtB8) — MIT Embodied Intelligence · 52:22 · Streamed 4y ago

### Generative adversarial networks *(prerequisite)*
Since the paper evaluates Conditional GANs for synthetic data generation, a deep understanding of GANs and conditional variants is essential. The MIT OpenCourseWare lecture offers a comprehensive and recent graduate-level treatment of conditional generative models, including CGANs.

*How the paper uses it:* The paper implements and trains Conditional GANs for synthetic image augmentation.

▶ [Lec 16. Generative Models: Conditional Models](https://www.youtube.com/watch?v=zaMcHuJwe1w) — MIT OpenCourseWare · 1:21:32 · 8mo ago

### RandAugment method *(prerequisite)*
RandAugment is the primary augmentation technique shown to improve spatial invariance effectively in the paper. The selected video provides a focused explanation of the RandAugment algorithm and its practical impact on model performance, suitable for an advanced audience.

*How the paper uses it:* RandAugment (Policy 2) achieved the highest accuracy and F1 scores in the paper's experiments.

▶ [RandAugment Explained!](https://www.youtube.com/watch?v=Zzt9i3gDueE) — Connor Shorten · 8:15 · 6y ago

### Spatial invariance in CNNs
Spatial invariance is the core concept underlying the paper's focus on robustness to image transformations. The Carnegie Mellon University Deep Learning lecture offers an in-depth, research-level treatment of shift invariance and convolutional neural networks, directly relevant to the paper's problem.

*How the paper uses it:* The paper investigates methods to improve spatial invariance in CNNs for image classification.

▶ [Lecture 9: Shift invariance and Convolutional Neural Networks](https://www.youtube.com/watch?v=l3_WzGEUOU8) — Carnegie Mellon University Deep Learning · 1:50:53 · 5y ago

### Paper authors talk
While no direct recorded talk by the paper authors on this exact work is available, the selected Stanford CS231n lecture by Andrej Karpathy covers localization and detection in CNNs, which relates closely to spatial invariance and robustness in convolutional networks, providing valuable context.

*How the paper uses it:* Direct source for authors' insights on spatial invariance and CNN robustness would be ideal but is unavailable; this lecture provides relevant advanced context.

▶ [CS231n Winter 2016: Lecture 8: Localization and Detection](https://www.youtube.com/watch?v=GxZrEKZfW2o) — Andrej Karpathy · 1:04:57 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of convolutional neural networks (CNNs), including their architecture and how convolution works, to build a foundation for image classification. Next, learn about data augmentation techniques, which are essential for improving model robustness by artificially expanding training data. Then, explore generative adversarial networks (GANs), focusing on conditional GANs used for synthetic data generation. Finally, study spatial invariance in CNNs and the RandAugment method, which are central to the paper's investigation on improving CNN robustness to image transformations.

### Convolutional neural network architectures *(prerequisite)*
Learn how CNNs are structured and why they are effective for image classification. This includes understanding convolutional layers, pooling, and common architectures like ResNet and Inception. This foundation helps you grasp how different models perform in the paper's experiments.

*How the paper uses it:* The paper compares three CNN architectures including a custom NoelNet, ResNet50, and InceptionV3 to evaluate augmentation methods.

▶ [MIT 6.S191: Convolutional Neural Networks](https://www.youtube.com/watch?v=pqIcoskUuWs) — Alexander Amini · 56:46 · 6mo ago

### Data augmentation techniques *(prerequisite)*
Understand how data augmentation artificially increases the diversity of training data by applying transformations like rotation, scaling, and flipping. This improves model generalization and robustness, which is key to the paper’s approach to enhancing spatial invariance.

*How the paper uses it:* The paper evaluates RandAugment and GAN-based augmentation as methods to improve spatial invariance in CNNs.

▶ [Image Data Augmentation Explained | Boost Model Accuracy with Smart Techniques](https://www.youtube.com/watch?v=70gmWbwUOEE) — Neuro Splash · 4:40 · 1y ago

### Generative adversarial networks *(prerequisite)*
Get an intuitive grasp of GANs, where two neural networks compete to generate realistic synthetic data. Conditional GANs extend this by generating data conditioned on labels, which the paper uses to create synthetic images for augmentation.

*How the paper uses it:* The paper implements Conditional GANs to generate synthetic labeled images for data augmentation.

▶ [Lec 16. Generative Models: Conditional Models](https://www.youtube.com/watch?v=zaMcHuJwe1w) — MIT OpenCourseWare · 1:21:32 · 8mo ago

### Spatial invariance in CNNs
Learn what spatial invariance means — the ability of CNNs to recognize objects regardless of small shifts, rotations, or scaling in images. Understanding this concept is crucial to appreciating why the paper focuses on improving CNN robustness to such transformations.

*How the paper uses it:* The core problem addressed by the paper is improving spatial invariance in CNNs to enhance classification robustness.

▶ [Lecture 9: Shift invariance and Convolutional Neural Networks](https://www.youtube.com/watch?v=l3_WzGEUOU8) — Carnegie Mellon University Deep Learning · 1:50:53 · 5y ago

### RandAugment method
RandAugment is a simple yet effective data augmentation technique that applies random geometric transformations to images during training, improving model robustness without complex tuning. Understanding RandAugment helps explain why it outperforms GAN-based augmentation in the paper.

*How the paper uses it:* RandAugment is the primary augmentation method shown in the paper to consistently improve spatial invariance and accuracy.

▶ [RandAugment Explained!](https://www.youtube.com/watch?v=Zzt9i3gDueE) — Connor Shorten · 8:15 · 6y ago

## Already in your library

- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [Lecture 5 | Convolutional Neural Networks](https://www.youtube.com/watch?v=bNb2fEVKeEo) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [Data Augmentation in Deep Learning | CNN](https://www.youtube.com/watch?v=sM2C-SsREgM) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Convolutional Neural Networks (CNNs) explained](https://www.youtube.com/watch?v=YRhxdVk_sIs) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate understanding of the paper's investigation into improving spatial invariance in CNNs via data augmentation. The beginner project reproduces a simple RandAugment augmentation pipeline on a standard dataset to show baseline improvements. The intermediate project implements and compares RandAugment and CGAN-based augmentation on a small CNN and dataset, replicating core experimental comparisons. The advanced project extends the paper by exploring a future direction: applying alternative augmentation methods like CutMix or Wasserstein GANs to improve synthetic data quality and spatial invariance.

### Beginner — RandAugment on FashionMNIST for Spatial Invariance
*Effort: a weekend, ~8 hours*

You build a simple image classification pipeline using a small CNN (e.g., a few convolutional layers) trained on the FashionMNIST dataset. You implement RandAugment with a fixed policy (similar to Policy 2 in the paper) to augment training images with random geometric transformations. You then compare classification accuracy and F1 score against a baseline without augmentation.

**Why it shows you understood the paper:** This project shows you understand the core augmentation technique (RandAugment) that the paper found most effective for improving spatial invariance and classification accuracy. It demonstrates your ability to implement and evaluate augmentation impact on CNN performance.

**Grounded in:** Policy 2, which only uses RandAugment, performed best by achieving the highest accuracy and f1 score across all models and datasets.

**Tech stack:** Python 3.11, PyTorch, Torchvision, Jupyter Notebook

**Data:** FashionMNIST dataset from Torchvision, a standard benchmark dataset used in the paper.

**Build it:**

1. Set up a small CNN architecture similar to NoelNet with 5-9 layers.
2. Load FashionMNIST dataset with standard train/test splits.
3. Implement RandAugment with a fixed policy applying random rotations, translations, and scaling.
4. Train the CNN on the original dataset and record baseline metrics (accuracy, F1 score).
5. Train the CNN on the RandAugment-augmented dataset and record metrics.
6. Compare and visualize the performance difference.

**Ships as:** A GitHub repo with code, a README explaining RandAugment implementation, training results, and plots comparing baseline vs augmented model performance.

**Stretch goal:** Add visualization of augmented images to illustrate the transformations applied.

### Intermediate — Comparative Study of RandAugment and CGAN Augmentation on MNIST
*Effort: 2-3 weekends, ~20 hours*

You reimplement the core comparative experiment from the paper by training a small CNN (NoelNet or similar) on the MNIST dataset with three augmentation policies: baseline (no augmentation), RandAugment, and CGAN-generated synthetic images. You train a Conditional GAN to generate labeled synthetic MNIST digits for augmentation. You evaluate and compare accuracy, precision, recall, and F1 score across these policies.

**Why it shows you understood the paper:** This project demonstrates your grasp of both augmentation methods studied in the paper, including the challenges of GAN-based augmentation (overfitting, poorer performance). It replicates the paper's key empirical comparison and metrics, showing you can implement and evaluate augmentation strategies rigorously.

**Grounded in:** Performed a comprehensive empirical comparison of RandAugment and CGAN-based augmentation across multiple CNN architectures and datasets; GAN-generated samples alone (Policy 3) performed worse than baseline, indicating overfitting.

**Tech stack:** Python 3.11, PyTorch, Torchvision, Jupyter Notebook, GAN implementation libraries

**Data:** MNIST dataset from Torchvision, a standard benchmark dataset used in the paper.

**Build it:**

1. Implement or reuse a small CNN architecture similar to NoelNet.
2. Train a baseline CNN on MNIST without augmentation and record metrics.
3. Implement RandAugment and train the CNN with RandAugment-augmented MNIST data.
4. Implement a Conditional GAN to generate synthetic MNIST digits conditioned on class labels.
5. Train the CNN on CGAN-generated synthetic data alone and record metrics.
6. Train the CNN on a combination of original MNIST and CGAN-generated samples and record metrics.
7. Compare all results and analyze the impact of each augmentation policy.

**Ships as:** A GitHub repo with code for CNN, RandAugment, CGAN training and augmentation, detailed README with experimental setup, results tables, and discussion comparing augmentation methods.

**Stretch goal:** Add training latency measurements and analyze trade-offs between accuracy and training time.

### Advanced — Exploring Wasserstein GAN and CutMix for Enhanced Spatial Invariance
*Effort: 3-4 weeks, ~60+ hours*

You extend the paper by implementing a Wasserstein GAN (WGAN) to generate higher-quality synthetic images for augmentation, addressing the limitation of overfitting with baseline CGANs. Additionally, you implement CutMix augmentation and compare its effect on spatial invariance and classification accuracy with RandAugment and WGAN-based augmentation. You evaluate on CIFAR-10 using NoelNet or a similar CNN, reporting accuracy, F1 score, and training latency.

**Why it shows you understood the paper:** This project tackles a stated future direction from the paper, demonstrating your ability to implement advanced generative models and alternative augmentation strategies. It shows you can critically extend the paper's findings by improving synthetic data quality and exploring new augmentation methods to enhance spatial invariance.

**Grounded in:** Explore GANs with more versatile loss functions such as Wasserstein GANs to improve synthetic sample quality; investigate other augmentation strategies like Cutout, CutMix, and GridMask.

**Tech stack:** Python 3.11, PyTorch, Torchvision, Jupyter Notebook, WGAN implementation libraries

**Data:** CIFAR-10 dataset from Torchvision, a standard benchmark dataset used in the paper.

**Build it:**

1. Implement or adapt a WGAN architecture to generate synthetic CIFAR-10 images conditioned on class labels.
2. Train the WGAN and evaluate the quality and diversity of generated images.
3. Implement CutMix augmentation and integrate it into the CNN training pipeline.
4. Train NoelNet or a similar CNN on CIFAR-10 with RandAugment, WGAN-generated augmentation, and CutMix separately.
5. Evaluate and compare classification accuracy, F1 score, and training latency for each augmentation method.
6. Analyze results to assess improvements in spatial invariance and robustness.
7. Document findings and discuss implications for future augmentation strategies.

**Ships as:** A comprehensive GitHub repo with WGAN and CutMix implementations, training scripts, evaluation code, and a detailed report comparing augmentation methods and their impact on spatial invariance.

**Stretch goal:** Incorporate adversarial robustness evaluation to study augmentation impact on model fairness and security.
