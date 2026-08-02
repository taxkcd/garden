---
title: "134 · CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images — Yaacov Yesha"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yaacov-yesha"
source_hash: "281c2a1aaa191fe18e5f77d0261d8c3e1d36d624c12cf0b5b17e6a211b730c4c"
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
