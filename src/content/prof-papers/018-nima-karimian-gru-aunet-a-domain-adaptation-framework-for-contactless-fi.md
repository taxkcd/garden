---
title: "018 · GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection — Nima Karimian"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nima-karimian-aspx"
source_hash: "36eb61d62e549cb5c398a4be7a8dfe1a7d5cc707a683331d73ffd0676538aca7"
sequence: 18
generator: "outreach-garden: managed"
---

# 018 · GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection

## At a glance

- **Professor:** Nima Karimian
- **Institution:** University of South Florida
- **Paper:** [GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection](https://arxiv.org/abs/2504.01213)
- **Authors:** Banafsheh Adami, Nima Karimian
- **Year:** 2025

## Paper overview

This paper presents GRU-AUNet, a novel deep learning model designed to detect spoofing attacks on contactless fingerprint recognition systems. The model uses advanced attention mechanisms and dynamic filtering to improve detection accuracy and generalization across different datasets and spoof types, enhancing biometric security for touchless fingerprint authentication.

### Why it matters

**Research problem:** Contactless fingerprint recognition systems are vulnerable to presentation attacks (spoofing), and existing anti-spoofing methods often assume similar data distributions between training and testing, limiting their generalization and scalability to unseen attacks.

**Why it matters:** Contactless fingerprint biometrics are increasingly popular due to hygiene and convenience, especially during situations like the COVID-19 pandemic where face recognition is hindered by masks. Ensuring these systems are secure against spoofing is critical to prevent unauthorized access and identity theft.

**Key contributions:**

- Development of an unsupervised learning approach for contactless fingerprint anti-spoofing using only genuine images during training.
- Integration of GRU-enhanced attention mechanisms replacing traditional skip connections to dynamically focus on critical features.
- Incorporation of a Dynamic Filter Network in the bottleneck to adapt filtering based on input features.
- Comprehensive evaluation on multiple datasets (CLARKSON, COLFISPOOF, IIITD) demonstrating robustness against diverse spoof types.
- Demonstration of superior performance compared to state-of-the-art methods in terms of APCER, BPCER, and ACER metrics.

## About the professor

**Nima Karimian** — Assistant Professor, Bellini College of Artificial Intelligence, Cybersecurity and Computing, University of South Florida.

Research interests: biometrics, cybersecurity, generative AI, and trustworthy AI, particularly in healthcare

### Research links

- [Faculty/profile page](https://www.usf.edu/ai-cybersecurity-computing/people/faculty/nima_karimian.aspx)
- [Google Scholar](https://scholar.google.com/citations?user=sWecXxkAAAAJ&hl=en%20)
- [LinkedIn](https://www.linkedin.com/in/nima-karimian-2966ba53/)

## Learning path

To deeply understand the GRU-AUNet paper, start with foundational concepts including attention mechanisms, dynamic filter networks, contrastive and focal loss functions, and Swin Transformer UNet architectures. These prerequisites provide the necessary background on the model's components and training strategies. Then, focus on the core concept of domain adaptation in biometric anti-spoofing to grasp the generalization challenge the paper addresses. Finally, review the authors' own talks or related advanced presentations to connect all concepts directly to the novel contributions of GRU-AUNet.

## Recommended videos (in order)

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms are fundamental to understanding how GRU-enhanced attention replaces traditional skip connections in GRU-AUNet. This section covers the theory and implementation of attention and transformers, which are critical for grasping the model's dynamic feature focusing.

*How the paper uses it:* The paper integrates GRU-enhanced attention mechanisms to improve classification accuracy by dynamically focusing on critical features.

▶ [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — Stanford Online · 10 months ago

### Dynamic filter networks *(prerequisite)*
Dynamic filter networks adapt filtering operations based on input features, a key innovation in the GRU-AUNet bottleneck. Understanding this concept is essential to appreciate how the model captures intricate patterns distinguishing genuine and spoof fingerprints.

*How the paper uses it:* The Dynamic Filter Network in the bottleneck dynamically adjusts filtering to better distinguish genuine and spoof fingerprints.

▶ [Roman Zeyde Software Engineer @ Varada on Dynamic filtering](https://www.youtube.com/watch?v=B3vBwCCIQw8) — Trino · 14:12

### Contrastive and focal loss functions *(prerequisite)*
This section explains the combined use of focal and contrastive loss functions, which address class imbalance and improve feature discrimination. These loss functions are crucial for the model's robustness and generalization in anti-spoofing tasks.

*How the paper uses it:* The model uses a combined Focal and Contrastive Loss to handle class imbalance and improve feature discrimination.

▶ [Focal Loss for Dense Object Detection](https://www.youtube.com/watch?v=44tlnmmt3h0) — ComputerVisionFoundation Videos · 12:57

### Swin Transformer UNet architectures *(prerequisite)*
Understanding the Swin Transformer UNet architecture is vital as it forms the backbone of GRU-AUNet. This section covers how transformer concepts are integrated with UNet for hierarchical vision tasks, providing the structural basis for the model.

*How the paper uses it:* GRU-AUNet integrates a Swin Transformer-based UNet architecture as its backbone.

▶ [Swin-Unet: Unet-like Pure Transformer for Medical Image Segmentation](https://www.youtube.com/watch?v=ha1iphjz7S4) — MCV Workshop · 3 years ago

### Domain adaptation in biometric anti-spoofing
Domain adaptation is central to the paper's goal of generalizing anti-spoofing detection across different datasets and spoof types. This section focuses on advanced methods for learning domain-invariant features in biometric security.

*How the paper uses it:* The paper addresses domain adaptation to improve generalization of spoof detection across datasets.

▶ [Domain Agnostic Feature Learning for Image and Video Based Face Anti-spoofing (CVPR20 Workshop Oral)](https://www.youtube.com/watch?v=jRq7ZGEC4oY) — Suman Saha · 15:09 · 6 years ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
