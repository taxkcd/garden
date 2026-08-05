---
title: "134 · CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images — Yaacov Yesha"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yaacov-yesha"
source_hash: "bb27f6ddb7daa8366cacb6156b6675c5973be1c6971379c6d909194dbb8de248"
sequence: 134
generator: "outreach-garden: managed"
---

# 134 · CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images

## At a glance

- **Professor:** Yaacov Yesha
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images](https://doi.org/10.1007/s10278-023-00811-2)
- **Authors:** Sumeet Menon, Jayalakshmi Mangalagiri, Josh Galita, Michael Morris, Babak Saboury, Yaacov Yesha, Yelena Yesha, Phuong Nguyen, Aryya Gangopadhyay, David Chapman
- **Year:** 2023

## Paper overview

This paper presents CCS-GAN, a novel deep learning algorithm that generates synthetic COVID-19 pneumonia CT scan images using very few positive training examples (as few as 10). These synthetic images enable training of classifiers that achieve high accuracy in detecting COVID-19 from CT scans, overcoming the challenge of limited positive data availability during pandemics.

### Why it matters

**Research problem:** Deep learning models for COVID-19 diagnosis from CT scans typically require large volumes of positive training images, which are difficult to obtain early in a pandemic due to data scarcity and privacy concerns.

**Why it matters:** Limited availability of positive COVID-19 CT images delays the development of accurate AI-based screening tools, hindering early diagnosis and response during pandemics or for rare diseases.

**Key contributions:**

- First GAN architecture capable of generating high-quality synthetic COVID-19 pneumonia CT images using only 10 positive training samples.
- Integration of pulmonary segmentation to exclude irrelevant anatomy, simplifying the learning task and improving data efficiency.
- Use of cycle-consistent adversarial loss to ensure meaningful style transfer between normal and COVID-19 images.
- Ablation studies demonstrating that all components (pulmonary segmentation, cycle-consistent loss, U-Net generator) are necessary for high-quality image generation and classification performance.
- Quantitative and qualitative comparisons showing CCS-GAN outperforms state-of-the-art methods and baseline GANs with far fewer positive training images.

## About the professor

**Yaacov Yesha** — Professor, CSEE Department, Univ. of Maryland - Baltimore County.

Research interests: Cloud computing, SSME, Web services, IT services, service oriented architecture, mobile computing, software testing, parallel computing, high performance computing.

### Research links

- [Faculty/profile page](https://userpages.cs.umbc.edu/yayesha/)
- [Identity evidence](https://www.cs.utexas.edu/~diz)
- [Identity evidence](https://www.csee.umbc.edu/people/tenure-track-faculty/yaacov-yesha/)
- [Identity evidence](https://dblp.org/pid/y/YaacovYesha)
- [Google Scholar](https://scholar.google.com/scholar)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CCS-GAN paper, start with foundational concepts critical to the method: generative adversarial networks (GANs), cycle-consistent GANs, pulmonary CT segmentation, and transfer learning in medical imaging. These prerequisites build the necessary background on GAN architectures, style transfer mechanisms, relevant anatomy segmentation, and data-efficient learning. Finally, focus on the core concept of the paper itself, featuring the authors' own talk if available, to grasp their novel CCS-GAN approach for COVID-19 CT scan generation and classification with very limited positive samples.

### Generative adversarial networks *(prerequisite)*
Understanding the fundamentals of GANs is essential as CCS-GAN builds upon the adversarial training framework to generate synthetic CT images. This section covers the theory and applications of GANs, providing the base for grasping how CCS-GAN synthesizes COVID-19 positive images.

*How the paper uses it:* CCS-GAN extends GAN architectures to generate synthetic COVID-19 CT images from very few positive samples.

▶ [Lecture 23: Generative Adversarial Networks Part 1](https://www.youtube.com/watch?v=QRGBrc_Yh0Q) — Carnegie Mellon University Deep Learning · 1:17:56

### Cycle-consistent GANs *(prerequisite)*
Cycle-consistency loss is a key innovation in CCS-GAN that ensures meaningful style transfer between normal and COVID-19 CT images without paired data. This section explains the cycle-consistent adversarial training mechanism that underpins CCS-GAN's image translation capability.

*How the paper uses it:* CCS-GAN integrates cycle-consistent adversarial loss to enforce style transfer between normal and COVID-19 CT images.

▶ [CycleGAN Paper Walkthrough](https://www.youtube.com/watch?v=5jziBapziYE) — Aladdin Persson · 19:32

### Pulmonary CT segmentation *(prerequisite)*
Pulmonary segmentation isolates lung regions from CT scans, allowing CCS-GAN to focus on relevant anatomy and improve data efficiency. This section covers the anatomical and imaging principles behind lung segmentation in CT, which is critical for the model's success.

*How the paper uses it:* CCS-GAN uses automated pulmonary segmentation to exclude irrelevant anatomy and simplify the learning task.

▶ [Introduction to CT Chest - Anatomy and Approach](https://www.youtube.com/watch?v=tJPfcmA-WWs) — Navigating Radiology · 36:54

### Transfer learning in medical imaging *(prerequisite)*
Transfer learning leverages knowledge from abundant normal images to improve learning from scarce COVID-19 positive samples. This section discusses transfer learning techniques in medical imaging, which CCS-GAN employs to enhance synthetic image generation with limited data.

*How the paper uses it:* CCS-GAN applies transfer learning from normal CT images to enable generation with very few positive COVID-19 samples.

▶ [MICCAI Industrial Talk: Data- and Annotation-Efficient Deep ...](https://www.youtube.com/watch?v=oH-wyVVe9fE) — MICCAI Industrial Talk Series · 51:55

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand CCS-GAN, a deep learning method for generating synthetic COVID-19 CT images with very limited data. Start by learning the basics of generative adversarial networks (GANs), then explore cycle-consistent GANs which enable style transfer between normal and COVID-19 CT images. Next, understand pulmonary CT segmentation to see how relevant lung anatomy is isolated, followed by transfer learning in medical imaging to grasp how knowledge from normal images aids training. Finally, the path concludes with the core CCS-GAN approach and its impact on COVID-19 CT classification accuracy.

### Generative adversarial networks *(prerequisite)*
Generative adversarial networks (GANs) are a type of deep learning model where two neural networks—the generator and discriminator—compete to create realistic synthetic data. This adversarial training enables the generator to produce images that resemble real ones, which is fundamental to CCS-GAN's image synthesis.

*How the paper uses it:* CCS-GAN builds on GANs to generate synthetic COVID-19 CT images from very few positive samples.

▶ [A Friendly Introduction to Generative Adversarial Networks (GANs)](https://www.youtube.com/watch?v=8L11aMN5KY8) — Luis Serrano Academy · 6 years ago

### Cycle-consistent GANs *(prerequisite)*
Cycle-consistent GANs extend GANs by enforcing that translating an image from one domain to another and back again returns the original image, ensuring meaningful style transfer without paired data. This cycle consistency loss is key to CCS-GAN's ability to convert normal CT images into COVID-19-like images.

*How the paper uses it:* CCS-GAN uses cycle-consistent adversarial loss to ensure realistic transformation between normal and COVID-19 CT images.

▶ [CycleGAN Explained in 5 Minutes!](https://www.youtube.com/watch?v=-8hfnlxEPn4) — Matchue · 4:37 · 6 years ago

### Pulmonary CT segmentation *(prerequisite)*
Pulmonary CT segmentation isolates the lung regions from CT scans, removing irrelevant anatomy to focus analysis on the lungs. This step simplifies the learning task and improves data efficiency by allowing CCS-GAN to concentrate on pneumonia features.

*How the paper uses it:* CCS-GAN integrates automated pulmonary segmentation to exclude irrelevant anatomy and improve synthetic image quality.

▶ [Tutorial video (CT): "Lung segmentation"](https://www.youtube.com/watch?v=E9yXa_e9W3s) — Imalytics Preclinical · 5:13

### Transfer learning in medical imaging *(prerequisite)*
Transfer learning leverages knowledge from models trained on abundant normal images to improve performance on tasks with limited data, such as COVID-19 CT classification. This approach helps CCS-GAN generate meaningful synthetic images despite very few positive samples.

*How the paper uses it:* CCS-GAN uses transfer learning from normal CT images to enable training with as few as 10 positive COVID-19 samples.

▶ [What is Transfer Learning?](https://www.youtube.com/watch?v=3gyeDlZqWko) — Prof. Ryan Ahmed · 14:20

### Deep learning for COVID-19 CT classification
Deep learning models like VGG-19 and AlexNet classify CT scans to detect COVID-19 pneumonia, and their accuracy improves when trained with augmented data. Understanding these classifiers contextualizes how CCS-GAN's synthetic images enhance diagnostic performance.

*How the paper uses it:* CCS-GAN synthetic images enable classifiers such as VGG-19 and AlexNet to achieve high accuracy with very limited positive training data.

▶ [AI-Powered COVID-19 Detection Using CNNs](https://www.youtube.com/watch?v=OkR-B8uPAGM) — freeplacementcourse

## Already in your library

- [Understanding GANs (Generative Adversarial Networks)](https://www.youtube.com/watch?v=RAa55G-oEuk) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of CCS-GAN's approach to generating synthetic COVID-19 CT images from very few positive samples. The beginner project focuses on reproducing a key classification result using synthetic augmentation, the intermediate project implements the core CCS-GAN method on a substitute dataset to compare classification improvements, and the advanced project extends the method to generate coherent 3D CT volumes, addressing a key limitation noted in the paper.

### Beginner — COVID-19 CT Classification with Synthetic Augmentation
*Effort: a weekend, ~8 hours*

You build a simple pipeline that trains a COVID-19 CT slice classifier (e.g., AlexNet or VGG-19) using a very small number of positive samples augmented with synthetic images generated by a basic GAN model. You reproduce the paper's key result showing classification accuracy improvement from limited positive data by augmenting with synthetic images.

**Why it shows you understood the paper:** This project shows you understand the core motivation and impact of CCS-GAN: improving classification accuracy with very limited positive COVID-19 CT data by using synthetic augmentation. It demonstrates grasp of the data scarcity problem and the value of GAN-based augmentation.

**Grounded in:** Achieved 99.00% test accuracy with VGG-19 and 98.17% with AlexNet classifiers trained using only 10 positive COVID-19 CT slices augmented with CCS-GAN synthetic images.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Use a publicly available COVID-19 CT slice dataset substitute (e.g., COVID-CT dataset from public repositories) with a small subset of positive samples (10 slices) and normal CT slices.

**Build it:**

1. Download a public COVID-19 CT slice dataset and select 10 positive and a larger number of normal slices.
2. Implement or reuse a simple GAN (e.g., DCGAN) to generate synthetic COVID-19 positive slices from the limited positive samples.
3. Train a CNN classifier (AlexNet or VGG-19) on the combined real and synthetic positive samples plus normal samples.
4. Evaluate and report classification accuracy compared to training without synthetic augmentation.
5. Document the pipeline, results, and comparison in a README.

**Ships as:** A GitHub repo with code to generate synthetic images, train classifiers, and a README showing classification accuracy improvement with synthetic augmentation.

**Stretch goal:** Add pulmonary segmentation preprocessing to the pipeline to focus on lung regions before GAN training and classification.

### Intermediate — Reimplementation of CCS-GAN for COVID-19 CT Slice Generation and Classification
*Effort: 1-3 weekends, ~20 hours*

You reimplement the CCS-GAN architecture described in the paper, including cycle-consistent adversarial loss and pulmonary segmentation preprocessing, to generate synthetic COVID-19 CT slices from a very limited positive dataset. You then train classifiers augmented with these synthetic images and compare classification accuracy against a baseline without augmentation.

**Why it shows you understood the paper:** This project demonstrates deep understanding of the paper's core method and its components (pulmonary segmentation, cycle-consistent loss, U-Net generator). Successfully reproducing classification improvements validates your grasp of the technical contributions.

**Grounded in:** The authors propose CCS-GAN, which integrates cycle-consistent generative adversarial networks (CycleGAN) with automated intensity-based pulmonary segmentation and transfer learning from abundant normal images.

**Tech stack:** Python 3.11, PyTorch, OpenCV, scikit-image, Jupyter Notebook

**Data:** Use a public COVID-19 CT slice dataset substitute with a small number of positive samples (e.g., 10 slices) and normal slices. Simulate pulmonary segmentation using intensity thresholding or open-source lung segmentation tools.

**Build it:**

1. Implement pulmonary segmentation on CT slices to isolate lung regions using intensity-based thresholding or open-source segmentation.
2. Implement the CCS-GAN architecture with cycle-consistent adversarial loss and a U-Net generator as described in the paper.
3. Train CCS-GAN on the limited positive and abundant normal CT slices to generate synthetic COVID-19 positive slices.
4. Train classifiers (AlexNet, VGG-19) augmented with synthetic images and evaluate classification accuracy.
5. Compare results against classifiers trained without synthetic augmentation and document findings.

**Ships as:** A GitHub repo with CCS-GAN implementation, pulmonary segmentation code, classifier training scripts, and a detailed README comparing classification performance with and without synthetic augmentation.

**Stretch goal:** Conduct an ablation study disabling pulmonary segmentation or cycle-consistent loss to observe effects on image quality and classification accuracy.

### Advanced — 3D Volume Coherent CCS-GAN for COVID-19 CT Scan Generation
*Effort: few weeks, ~40+ hours*

You extend the CCS-GAN method to generate coherent 3D COVID-19 CT volumes rather than independent 2D slices. This involves designing a 3D cycle-consistent GAN architecture and applying 3D pulmonary segmentation. You evaluate the synthetic 3D volumes qualitatively and quantitatively, and assess classification improvements using 3D CNN classifiers.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate beyond the original work. It shows mastery of GANs, 3D medical imaging, and deep learning classification, positioning you for research-level discussion.

**Grounded in:** CCS-GAN operates on individual 2D CT slices rather than coherent 3D volumes, potentially causing discontinuities between consecutive slices. Future directions include improving generation of coherent 3D CT volumes rather than independent 2D slices.

**Tech stack:** Python 3.11, PyTorch, MONAI (Medical Open Network for AI), SimpleITK, Jupyter Notebook

**Data:** Use a public 3D COVID-19 CT volume dataset substitute (e.g., MosMedData or COVID-19 CT segmentation datasets) with limited positive volumes and normal volumes.

**Build it:**

1. Implement or adapt 3D pulmonary segmentation on CT volumes using intensity-based or deep learning methods.
2. Design and implement a 3D cycle-consistent GAN architecture inspired by CCS-GAN to generate synthetic COVID-19 CT volumes.
3. Train the 3D CCS-GAN on limited positive and abundant normal 3D CT volumes.
4. Train 3D CNN classifiers on real plus synthetic volumes and evaluate classification accuracy improvements.
5. Analyze synthetic volume quality for coherence across slices and document results.
6. Write a comprehensive README discussing the extension, challenges, and comparison to 2D CCS-GAN.

**Ships as:** A GitHub repo with 3D CCS-GAN code, 3D segmentation scripts, classification training, and a detailed report on synthetic volume quality and classification performance.

**Stretch goal:** Explore adapting the 3D CCS-GAN approach to other pulmonary diseases or imaging modalities to test generalizability.
