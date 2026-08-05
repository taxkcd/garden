---
title: "067 · Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment — Rajiv Bagai"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rajiv-bagai"
source_hash: "c45713493c42e5bdc655fd07b3ddfb06bfb3a21ed9fe4a0a8a7a40093a06de62"
sequence: 67
generator: "outreach-garden: managed"
---

# 067 · Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment

## At a glance

- **Professor:** Rajiv Bagai
- **Institution:** Wichita State University
- **Paper:** [Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment](https://mdpi-res.com/d_attachment/remotesensing/remotesensing-18-01529/article_deploy/remotesensing-18-01529-v3.pdf?version=1779327086)
- **Authors:** Shruti Kshirsagar, Bharath Chandra, Unaza Tallal, Rajiv Bagai, Atri Dutta
- **Year:** 2026

## Paper overview

This paper studies how AI models that assess building damage from satellite images after disasters perform poorly when applied to new geographic regions with different environmental and structural characteristics. The authors propose enhancing input images with structural features and using domain adaptation techniques to improve model robustness and generalization across diverse disaster locations.

### Why it matters

**Research problem:** Deep learning models for automated building damage assessment from satellite imagery struggle to generalize across geographically and environmentally diverse disaster locations due to geographic bias and domain shift.

**Why it matters:** Accurate and rapid building damage assessment is critical for effective disaster response and humanitarian aid. Models that fail to generalize well can lead to delayed or inadequate emergency assistance, risking lives and resources.

**Key contributions:**

- Systematic geographic bias analysis across 17 disaster locations showing performance variation linked to geographic and structural differences.
- Development of a six-channel Fusion Augmentation strategy to enhance structural features in input images.
- Evaluation of supervised fine-tuning and unsupervised CORAL domain adaptation combined with Fusion Augmentation on out-of-domain locations.
- Demonstration that structural feature enhancement and domain adaptation substantially improve cross-location generalization.

## About the professor

**Rajiv Bagai** — Professor, Computer Science, Wichita State University.

Research interests: Data Privacy and Web Anonymity, Incomplete and/or Inconsistent Databases, Data Models, Deductive Databases, Logic Programming, Programming Languages

### Research links

- [Faculty/profile page](https://www.wichita.edu/profiles/academics/engineering/SoC/Bagai-Rajiv.php)
- [Resolved homepage](https://www.wichita.edu/profiles/academics/engineering/SoC/01_Faculty/Bagai-Rajiv.php)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the geographic bias and domain shift challenges addressed in the paper, start with foundational knowledge on domain adaptation techniques and their theoretical underpinnings. Then, proceed to a focused, rigorous lecture that covers domain adaptation in machine learning, which directly relates to the paper's approach to improving cross-domain generalization in building damage assessment models.

### Geographic bias and domain shift *(prerequisite)*
This section covers the fundamental challenges of domain shift and geographic bias in machine learning models, which cause performance degradation when models are applied to new, unseen geographic regions. Understanding domain adaptation methods is critical to grasping how the paper improves model robustness across diverse disaster locations.

*How the paper uses it:* The paper addresses geographic bias and domain shift as the key problem limiting the generalization of building damage assessment models across different disaster locations.

▶ [[ML 2021 (English version)] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — Hung-yi Lee · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the key concept of geographic bias and domain shift in machine learning, which is central to understanding the challenges faced by building damage assessment models in this paper. Starting with foundational intuition about domain adaptation and domain shift, the learner will build a clear mental model of why models fail to generalize across regions and how adaptation techniques can help. The selected videos are concise, clear, and focused on domain adaptation as used in the paper's context.

### Geographic bias and domain shift *(prerequisite)*
Geographic bias and domain shift occur when machine learning models trained on data from one region perform poorly on data from different regions due to differences in environment, structure, or data distribution. Domain adaptation techniques aim to reduce this performance gap by adjusting models to new domains without requiring extensive new labeled data. Understanding this concept is crucial to grasp why the paper proposes structural feature enhancement and domain adaptation to improve damage assessment models.

*How the paper uses it:* The paper analyzes geographic bias and applies domain adaptation to improve model generalization across diverse disaster locations.

▶ [[ML 2021 (English version)] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — Hung-yi Lee · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of geographic bias and domain adaptation in deep learning-based building damage assessment from satellite imagery. The beginner project reproduces a core structural feature enhancement technique from the paper on a small scale. The intermediate project implements the Fusion Augmentation method and evaluates its effect on a baseline model using publicly available xView2 challenge code and data. The advanced project extends the paper by exploring a future direction: integrating a foundation model or generative domain adaptation method to improve cross-domain generalization beyond the original dataset.

### Beginner — Structural Feature Enhancement on Satellite Images
*Effort: a weekend, ~8 hours*

You build a small image processing pipeline that takes RGB satellite images and generates auxiliary structural feature channels such as edge detection, contrast enhancement, and unsharp masking. You then combine these channels with the original RGB channels to create a six-channel input tensor. Finally, you visualize and compare the original and enhanced images to understand the structural augmentation.

**Why it shows you understood the paper:** This project shows you grasp the paper's Fusion Augmentation concept by faithfully reproducing the structural feature enhancement step, a key contribution to improving model robustness across geographic domains.

**Grounded in:** Development of a six-channel Fusion Augmentation strategy to enhance structural features in input images.

**Tech stack:** Python 3.11, OpenCV, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use a small sample of satellite RGB images from the xView2 challenge dataset available publicly via the third-party xView2 repositories.

**Build it:**

1. Download a small subset of RGB satellite images from the xView2 challenge dataset or use sample satellite images from public sources.
2. Implement edge detection (e.g., Canny), contrast enhancement (e.g., histogram equalization), and unsharp masking using OpenCV.
3. Combine the original RGB channels with the three auxiliary channels to form a six-channel image tensor.
4. Visualize the original RGB images alongside the enhanced six-channel images to observe structural feature differences.
5. Document the process and include example images in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook demonstrating the generation and visualization of six-channel Fusion Augmentation images from RGB satellite inputs.

**Stretch goal:** Add a simple classification model to compare performance on RGB-only versus six-channel inputs on a small damage classification task.

### Intermediate — Implementing Fusion Augmentation with Baseline xView2 Model
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's Fusion Augmentation method by extending a baseline xView2 building damage assessment model to accept six-channel inputs. Using the publicly available xView2 first-place solution code, you augment the input images with structural channels and retrain the model on a subset of the xView2 dataset. You then evaluate and compare the F1 scores on damage classification, focusing on minor and major damage classes.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the core method and quantitatively evaluate its impact on model robustness and cross-domain generalization, directly reflecting the paper's key results.

**Grounded in:** Fusion Augmentation improves overall F1 score by 7.1%, with notable gains in minor and major damage categories.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, scikit-learn

**Data:** Use the xView2 challenge dataset as accessed via the third-party xView2 first-place solution repository (https://github.com/vdurnov/xview2_1st_place_solution).

**Build it:**

1. Clone and set up the xView2 first-place solution repository and prepare the dataset as per instructions.
2. Implement the Fusion Augmentation pipeline to generate six-channel inputs by adding edge detection, contrast enhancement, and unsharp masking channels to the RGB images.
3. Modify the baseline model input layer to accept six-channel images and retrain the model on a subset of the xView2 training data.
4. Evaluate the retrained model on a held-out validation set, computing F1 scores for damage classes, especially minor and major damage.
5. Compare the results against the baseline RGB-only model and document the performance improvements.

**Verified links from the paper:**

- <https://github.com/vdurnov/xview2_1st_place_solution> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to generate six-channel inputs, retrain the xView2 baseline model, and evaluation scripts reporting F1 scores with a README summarizing findings.

**Stretch goal:** Add supervised fine-tuning or unsupervised CORAL domain adaptation on an unseen disaster location subset to further improve cross-domain performance.

### Advanced — Extending Domain Adaptation with Foundation Models for Building Damage Assessment
*Effort: 3+ weeks*

You develop an extension of the paper's method by integrating a large-scale pretrained vision transformer (foundation model) for feature extraction on satellite images, combined with Fusion Augmentation. You implement a generative domain adaptation technique such as CycleGAN to synthesize target-domain images for improved cross-domain generalization. You evaluate this approach on the xView2 dataset or a substitute, comparing against the original Fusion Augmentation plus CORAL adaptation results.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, demonstrating deep comprehension of domain adaptation challenges and the ability to innovate beyond the original work, potentially opening new research avenues.

**Grounded in:** Future directions: Incorporate foundation models such as large-scale vision transformers pretrained on diverse remote sensing data; Explore generative domain adaptation methods like GAN-based approaches (e.g., CycleGAN) to synthesize target-domain images.

**Tech stack:** Python 3.11, PyTorch, Hugging Face Transformers, OpenCV, CycleGAN implementation, NumPy, scikit-learn

**Data:** Use the xView2 dataset or a publicly available satellite imagery dataset with building damage labels; if unavailable, simulate domain shift by splitting data geographically.

**Build it:**

1. Set up a pretrained vision transformer model (e.g., ViT) for feature extraction on satellite images.
2. Implement Fusion Augmentation to enhance input images with structural channels.
3. Integrate a CycleGAN-based generative domain adaptation pipeline to translate source domain images to target domain style.
4. Train a damage assessment classifier using features from the foundation model and augmented images, incorporating synthetic target-domain images.
5. Evaluate cross-domain generalization performance on unseen geographic regions, comparing with baseline Fusion Augmentation plus CORAL adaptation results.
6. Document methodology, experiments, and results in a detailed report.

**Ships as:** A comprehensive GitHub repository with code for foundation model integration, generative domain adaptation, training and evaluation scripts, plus a detailed README and experimental report.

**Stretch goal:** Explore sensitivity analysis on loss weighting schemes for multi-channel inputs as another future direction.
