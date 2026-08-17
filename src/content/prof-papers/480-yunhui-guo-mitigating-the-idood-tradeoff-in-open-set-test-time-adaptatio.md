---
title: "480 · Mitigating the ID–OOD Tradeoff in Open-Set Test-Time Adaptation — Yunhui Guo"
date: 2026-08-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yunhui-guo"
source_hash: "82fd3c80a431d9982aa81f3591c2bf48ce9446e8c1dfc308568ff98f6677353c"
sequence: 480
generator: "outreach-garden: managed"
---

# 480 · Mitigating the ID–OOD Tradeoff in Open-Set Test-Time Adaptation

## At a glance

- **Professor:** Yunhui Guo
- **Institution:** University of Texas at Dallas
- **Paper:** [Mitigating the ID–OOD Tradeoff in Open-Set Test-Time Adaptation](https://doi.org/10.48550/arXiv.2604.01589)
- **Authors:** Wenjie Zhao, Jia Li, Xin Dong, Yapeng Tian, Yu Xiang, Yunhui Guo
- **Year:** 2026

## Paper overview

This paper addresses the challenge of adapting machine learning models during testing to new environments where both known (in-distribution) and unknown (out-of-distribution) data appear with distribution shifts. The authors identify a conflict in existing methods that try to improve classification confidence on known data while detecting unknown data, and propose a new approach called ROSETTA that separates these objectives. ROSETTA uses novel loss functions to improve both classification accuracy and out-of-distribution detection simultaneously, validated on multiple benchmark datasets and real-world semantic segmentation tasks.

### Why it matters

**Research problem:** How to effectively adapt models at test time in open-set scenarios where covariate-shifted in-distribution (csID) samples coexist with covariate-shifted out-of-distribution (csOOD) samples, overcoming the intrinsic trade-off between maintaining high classification accuracy on csID samples and reliable detection of csOOD samples.

**Why it matters:** In real-world applications like autonomous driving and IoT, models encounter evolving environments with unknown data classes and distribution shifts. Reliable adaptation without forgetting prior knowledge and robust detection of unknown inputs are critical for safe and effective deployment of intelligent vision systems.

**Key contributions:**

- Analyzed the conflict between entropy minimization and maximization in OSTTA leading to degraded performance.
- Proposed novel angular and feature norm losses to disentangle csID classification from csOOD detection.
- Developed ROSETTA framework that balances classification confidence and OOD detection effectively.
- Validated ROSETTA on multiple benchmarks (CIFAR-10-C, CIFAR-100-C, Tiny-ImageNet-C, ImageNet-C) and real-world semantic segmentation (Cityscapes-to-ACDC).
- Demonstrated applicability across different open-set TTA frameworks and multimodal datasets (HAC).

## About the professor

**Yunhui Guo** — University of Texas at Dallas.

Research interests: machine learning and computer vision, continuous learning, adaptation to evolving environments, intelligent vision systems

### Research links

- [Faculty/profile page](https://yunhuiguo.github.io)
- [Resolved homepage](https://yunhuiguo.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Open-set test-time adaptation
**The paper assumes:** open-set test-time adaptation methods, entropy-based adaptation losses, batch normalization in test-time learning
**Already in this field?** Skip this entirely if you already understand open-set test-time adaptation techniques and entropy-based model adaptation during testing.

To understand the challenges and solutions in open-set test-time adaptation (OSTTA) as addressed by the ROSETTA paper, it is crucial to grasp concepts like entropy-based adaptation, batch normalization updates, and the trade-offs between in-distribution classification and out-of-distribution detection. The rigorous course option offers a deep dive into multi-task and meta learning including domain adaptation, which underpins OSTTA methods, while the fast track provides a concise, focused introduction to these core ideas for quicker comprehension. Choose the rigorous lane for comprehensive foundational knowledge and the fast track for a time-efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS330: Deep Multi-Task and Meta Learning I Autumn 2022](https://www.youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI) — Stanford Online · 17 videos · 21.5h across 17 episodes

**Watch only this:** Lectures 13 (Domain Adaptation) and 14 (Domain Generalization), about 2.5 hours total (~75 min each). These two lectures directly address domain shifts and adaptation techniques relevant to OSTTA.

*Why it unblocks this paper:* Stanford CS330 covers deep multi-task and meta learning including domain adaptation and domain generalization, which are foundational to understanding open-set test-time adaptation and the entropy-based losses and batch norm updates discussed in ROSETTA.

*If you want all of it:* All 17 episodes, about 21.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Mitigating the ID–OOD Tradeoff in Open-Set Test-Time Adaptation', start by building foundational knowledge on batch normalization adaptation techniques, entropy minimization and maximization in adaptation, and out-of-distribution detection in deep learning. These prerequisites provide the theoretical and practical background necessary to grasp the core challenges and innovations in the paper. Finally, focus on the core concept of open-set test-time adaptation methods and the authors' own related talks to directly connect with the paper's novel contributions and methodology.

### batch normalization adaptation techniques *(prerequisite)*
Batch normalization is critical in the ROSETTA method since the approach updates only batch normalization parameters during test-time adaptation. Understanding how batch normalization works and why it helps optimization and adaptation is foundational to implementing and extending ROSETTA.

*How the paper uses it:* ROSETTA updates only batch normalization parameters during adaptation, making this knowledge essential for understanding its adaptation mechanism.

▶ [How does Batch Normalization Help Optimization?](https://www.youtube.com/watch?v=EvAVCxZJN2U) — Microsoft Research · 48:05 · 7 years ago

### entropy minimization and maximization in adaptation *(prerequisite)*
The paper analyzes the conflicting objectives of entropy minimization and maximization in open-set test-time adaptation. A solid understanding of entropy concepts and their role in adaptation losses is necessary to appreciate the motivation behind ROSETTA's novel loss functions.

*How the paper uses it:* ROSETTA resolves the conflict between entropy minimization and maximization losses used in prior OSTTA methods.

▶ [Test-time Adaptation Methods](https://www.youtube.com/watch?v=nRoRdahTqmA) — Korea University SPS Lab. · 34:40 · 9 months ago

### out-of-distribution detection in deep learning *(prerequisite)*
Out-of-distribution detection is a core challenge addressed by ROSETTA, which aims to improve OOD detection while maintaining in-distribution classification accuracy. Understanding state-of-the-art OOD detection methods and challenges is crucial for grasping the significance of ROSETTA's contributions.

*How the paper uses it:* ROSETTA improves OOD detection by suppressing csOOD logits and separating csID and csOOD objectives.

▶ [[ICCV 2023 Tutorial] Sharon Yixuan Li: Out-of-Distribution detection](https://www.youtube.com/watch?v=hgLC9_9ZCJI) — Andrei Bursuc · 49:16 · 2 years ago

### open-set test-time adaptation methods
Open-set test-time adaptation is the central problem setting of the paper. This section covers existing methods and challenges in OSTTA, providing context for ROSETTA's improvements and innovations.

*How the paper uses it:* ROSETTA is a novel OSTTA method that balances classification confidence and OOD detection effectively.

▶ [Contrastive Test-Time Adaptation @CVPR22 | Dian Chen @ToyotaResearchInstitute](https://www.youtube.com/watch?v=8DKbESVzqvo) — Computer Vision Talks · 1:09:57 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ROSETTA paper on mitigating the ID–OOD tradeoff in open-set test-time adaptation, start by learning about out-of-distribution (OOD) detection, which is crucial for distinguishing known and unknown data. Next, grasp the role of entropy minimization and maximization in adaptation methods, as ROSETTA addresses conflicts between these objectives. Then, understand batch normalization adaptation techniques, since ROSETTA updates only batch norm parameters during adaptation. Finally, explore open-set test-time adaptation methods to see the broader problem context before diving into the ROSETTA-specific talk for a detailed method walkthrough.

### out-of-distribution detection in deep learning *(prerequisite)*
Out-of-distribution detection helps models recognize when inputs differ significantly from training data, which is essential for safe and reliable AI in real-world settings. This concept lays the foundation for understanding how ROSETTA separates known (in-distribution) from unknown (out-of-distribution) samples.

*How the paper uses it:* ROSETTA improves OOD detection by disentangling classification and detection objectives to better identify unknown data.

▶ [Reliable Open-World Learning Against Out-of-distribution Data](https://www.youtube.com/watch?v=zaXiHljOl9Y) — Open Data Science and AI Conference · 43:04 · 4 years ago

### entropy minimization and maximization in adaptation *(prerequisite)*
Entropy minimization encourages confident predictions by reducing uncertainty, while entropy maximization promotes uncertainty to detect unknowns. ROSETTA analyzes the conflict between these opposing objectives in test-time adaptation.

*How the paper uses it:* The paper reveals that entropy minimization inflates feature norms harming OOD detection, motivating ROSETTA's novel losses.

▶ [Tent: Fully Test-time Adaptation by Entropy Minimization](https://www.youtube.com/watch?v=yIAxgei5v2c) — Soroush Mehraban · 13:16 · 2 years ago

### batch normalization adaptation techniques *(prerequisite)*
Batch normalization stabilizes and accelerates training by normalizing layer inputs. Updating only batch norm parameters during test-time adaptation is an efficient way to adapt models without full retraining.

*How the paper uses it:* ROSETTA updates only batch normalization parameters during adaptation to balance classification and OOD detection.

▶ [Batch Normalization (“batch norm”) explained](https://www.youtube.com/watch?v=dXB-KQYkzNU) — deeplizard · 7:32 · 8 years ago

### open-set test-time adaptation methods
Open-set test-time adaptation involves adjusting models during testing to handle both known and unknown classes under distribution shifts. Understanding existing methods clarifies the challenges ROSETTA addresses.

*How the paper uses it:* ROSETTA proposes a new framework that decouples conflicting objectives in open-set test-time adaptation.

▶ [Contrastive Test-Time Adaptation @CVPR22 | Dian Chen @ToyotaResearchInstitute](https://www.youtube.com/watch?v=8DKbESVzqvo) — Computer Vision Talks · 1:09:57 · 3 years ago

## Already in your library

- [ICCV 2023 Tutorial: Test-time Adaptation: Formulations ...](https://www.youtube.com/watch?v=l584yXZfYx4) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Lec 17. Generalization: Out-of-Distribution (OOD)](https://www.youtube.com/watch?v=tjD9LIzIIek) — also for: Knowledge-Guided Machine Learning: A Paradigm Shift in AI for Science (Xiaowei Jia)
- [Thomas G. Dietterich, Anomaly Detection in Shallow and Deep Learning](https://www.youtube.com/watch?v=w-LrDom2Yzc) — also for: Introduction to open-world AI (Larry B. Holder)
- [Lecture 21: Minimizing a Function Step by Step](https://www.youtube.com/watch?v=nvXRJIBOREc) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the ROSETTA method for open-set test-time adaptation. The beginner project reproduces a core mechanism of ROSETTA's angular and feature norm losses on a small scale. The intermediate project implements the full ROSETTA adaptation method on a public corrupted image dataset, comparing it to a baseline entropy minimization approach. The advanced project extends ROSETTA to a setting without batch normalization, addressing a key limitation noted in the paper and exploring adaptation for transformer-based models or small-batch scenarios.

### Beginner — Angular and Feature Norm Loss Visualization on CIFAR-10 Features
*Effort: a weekend, ~8 hours*

You build a small experiment that extracts pretrained CIFAR-10 features from a standard CNN and implements the angular loss and feature norm loss described in ROSETTA. You visualize how these losses affect feature directions and norms for in-distribution and out-of-distribution samples (simulated by CIFAR-100 classes).

**Why it shows you understood the paper:** This project shows you understand the core mathematical intuition behind ROSETTA's disentangling of classification and OOD detection objectives by reproducing the key losses and their effects on feature geometry.

**Grounded in:** Proposed novel angular and feature norm losses to disentangle csID classification from csOOD detection.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, Jupyter Notebook

**Data:** Use pretrained CIFAR-10 and CIFAR-100 datasets from torchvision as substitutes for csID and csOOD samples.

**Build it:**

1. Load a pretrained CNN feature extractor (e.g., ResNet18) trained on CIFAR-10.
2. Extract feature vectors for a batch of CIFAR-10 (csID) and CIFAR-100 (csOOD) samples.
3. Implement the angular loss to align csID features directionally with class prototypes.
4. Implement the feature norm loss to suppress csOOD feature norms.
5. Visualize feature vectors before and after applying these losses using 2D PCA or t-SNE.
6. Write a README explaining how these losses affect feature geometry and relate to ROSETTA.

**Ships as:** A Jupyter notebook with code, visualizations of feature alignment and norm suppression, and a README explaining the losses and their effects.

**Stretch goal:** Add a simple classification head and show how angular loss improves classification confidence on csID samples.

### Intermediate — Reimplementation of ROSETTA on CIFAR-10-C for Open-Set Test-Time Adaptation
*Effort: 2 weekends, ~20 hours*

You implement the ROSETTA framework from the paper, including angular loss and feature norm loss, and apply it to open-set test-time adaptation on CIFAR-10-C with simulated csOOD samples from CIFAR-100-C. You compare ROSETTA's performance against a baseline entropy minimization adaptation method, reporting csID classification accuracy and csOOD detection AUROC.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the core method of the paper and evaluate it on a benchmark dataset, reproducing key metrics and validating the disentanglement of classification and OOD detection objectives.

**Grounded in:** Validated ROSETTA on multiple benchmarks (CIFAR-10-C, CIFAR-100-C) showing superior csID accuracy and csOOD AUROC compared to entropy minimization baselines.

**Tech stack:** Python 3.11, PyTorch, Torchvision, NumPy, Scikit-learn

**Data:** Use CIFAR-10-C and CIFAR-100-C datasets from torchvision as substitutes for csID and csOOD samples with covariate shifts.

**Build it:**

1. Implement the ROSETTA losses (angular loss and feature norm loss) as described in the paper.
2. Set up a test-time adaptation loop that updates only batch normalization parameters during adaptation.
3. Prepare CIFAR-10-C as csID and CIFAR-100-C as csOOD datasets with covariate shifts.
4. Implement a baseline entropy minimization adaptation method for comparison.
5. Run experiments measuring csID classification accuracy and csOOD detection AUROC for both methods.
6. Document results and write a README explaining the implementation and evaluation.

**Ships as:** A GitHub repository with ROSETTA implementation, baseline code, evaluation scripts, and a report comparing performance metrics.

**Stretch goal:** Add ablation studies on the effect of each loss component and visualize feature separation during adaptation.

### Advanced — Extending ROSETTA for Open-Set Test-Time Adaptation without Batch Normalization
*Effort: 3-4 weeks*

You develop an extension of ROSETTA that adapts its losses and parameter update strategy to models without batch normalization layers, such as transformer-based architectures or CNNs trained with group normalization. You evaluate this extension on a public dataset with open-set test-time adaptation scenarios, analyzing how to maintain disentangled csID classification and csOOD detection without BN updates.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of ROSETTA's reliance on BN adaptation and innovating to broaden its applicability, which could initiate a research dialogue with the professor.

**Grounded in:** ROSETTA relies on batch normalization parameter updates during adaptation; extending to models without BN is a stated future direction.

**Tech stack:** Python 3.11, PyTorch, Transformers library (Hugging Face), NumPy, Scikit-learn

**Data:** Use CIFAR-10-C and CIFAR-100-C or Tiny-ImageNet-C as proxy datasets for open-set test-time adaptation with covariate shifts.

**Build it:**

1. Analyze ROSETTA's losses and adaptation mechanism to identify BN dependency.
2. Modify the adaptation procedure to update alternative parameters (e.g., layer norm parameters or affine parameters in group norm) or introduce learnable scaling factors.
3. Implement the modified ROSETTA losses compatible with transformer or non-BN CNN architectures.
4. Set up open-set test-time adaptation experiments on selected datasets.
5. Evaluate csID classification accuracy and csOOD detection AUROC, comparing with standard ROSETTA on BN models.
6. Document challenges, results, and potential improvements in a detailed README.

**Ships as:** A GitHub repository with extended ROSETTA code for non-BN models, evaluation scripts, and a comprehensive report discussing methodology, results, and limitations.

**Stretch goal:** Explore hybrid adaptation strategies combining BN and non-BN parameter updates or investigate small-batch scenarios with limited data per adaptation step.
