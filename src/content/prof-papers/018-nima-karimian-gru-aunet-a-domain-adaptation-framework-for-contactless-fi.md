---
title: "018 · GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection — Nima Karimian"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nima-karimian-aspx"
source_hash: "6c017b7139a31243ed6f55b2b82e3dd4fffb213ac50e97779d9a98f75fe79234"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GRU-AUNet paper, start by building foundational knowledge on contactless fingerprint recognition and domain adaptation in biometrics, as these provide the biometric modality context and the challenge of generalizing across datasets. Next, study attention mechanisms in deep learning to grasp the core technique enhancing feature focus in the model. Finally, focus on the paper's core concept by reviewing the authors' own talk or related advanced presentations on GRU-AUNet and its architectural innovations.

### Contactless fingerprint recognition *(prerequisite)*
This section covers the biometric modality targeted by the paper—contactless fingerprint recognition. Understanding the basics and challenges of contactless fingerprint systems is essential to appreciate the problem of presentation attack detection addressed by GRU-AUNet.

*How the paper uses it:* The paper focuses on anti-spoofing for contactless fingerprint recognition systems.

▶ [Touchless Fingerprint Recognition [Torsten Meister]](https://www.youtube.com/watch?v=Ortx1pONUeo) — SecuritySession · 32:06 · 14 years ago

### Domain adaptation in biometrics *(prerequisite)*
Domain adaptation is critical for models to generalize across different biometric datasets and spoof types. This section provides insight into techniques that enable robust performance despite distribution shifts, directly relevant to GRU-AUNet's goal of cross-dataset generalization.

*How the paper uses it:* GRU-AUNet is a domain adaptation framework designed to improve generalization across datasets.

▶ [Tutorial on  Domain Adaptation in Biometrics](https://www.youtube.com/watch?v=bgF0yThs8xI) — ComputerVisionFoundation Videos · 8 years ago

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms allow neural networks to dynamically focus on important features, improving model accuracy. This foundational knowledge is necessary to understand the GRU-enhanced attention modules integrated into GRU-AUNet.

*How the paper uses it:* The model replaces traditional skip connections with GRU-enhanced attention mechanisms.

▶ [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — StatQuest with Josh Starmer · 15:51 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand GRU-AUNet for contactless fingerprint spoof detection. Start with the basics of contactless fingerprint recognition to grasp the biometric modality, then learn about domain adaptation to understand generalization challenges. Next, explore attention mechanisms in deep learning to see how models focus on important features, followed by a focused explanation of GRU units and their role in enhanced attention. Finally, cover dynamic filter networks to understand adaptive filtering, culminating in the core paper insights.

### Contactless fingerprint recognition *(prerequisite)*
Learn how contactless fingerprint recognition works as a biometric modality, including how fingerprints are captured without touch and matched. This foundational knowledge helps understand the input data and challenges in spoof detection.

*How the paper uses it:* The paper targets spoof detection specifically for contactless fingerprint systems.

▶ [Biometrics: How Fingerprint Scanners Actually Work](https://www.youtube.com/watch?v=U6zsM_XGZmA) — WonderWise · 10:20 · 2 years ago

### Domain adaptation in biometrics *(prerequisite)*
Understand domain adaptation, which enables models to generalize across different datasets and spoof types by adapting to distribution shifts. This is crucial for robust anti-spoofing in diverse real-world scenarios.

*How the paper uses it:* GRU-AUNet improves generalization across datasets and spoof types via domain adaptation techniques.

▶ [Tutorial on  Domain Adaptation in Biometrics](https://www.youtube.com/watch?v=bgF0yThs8xI) — ComputerVisionFoundation Videos · 8 years ago

### Attention mechanisms in deep learning *(prerequisite)*
Explore how attention mechanisms allow neural networks to dynamically focus on the most relevant parts of input data, improving feature extraction and classification accuracy.

*How the paper uses it:* GRU-AUNet uses attention mechanisms to replace traditional skip connections for better feature focus.

▶ [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — Google Cloud Tech · 3 years ago

### GRU-enhanced attention networks
Learn about Gated Recurrent Units (GRUs) and how they enhance attention mechanisms by capturing temporal dependencies and refining feature focus dynamically within the network.

*How the paper uses it:* The model integrates GRU-enhanced attention to improve classification accuracy over standard attention.

▶ [Illustrated Guide to LSTM's and GRU's: A step by step explanation](https://www.youtube.com/watch?v=8HyCNIVRbSU) — The AI Hacker · 11:18 · 7 years ago

### Dynamic filter networks
Understand dynamic filter networks that adapt their filtering operations based on input features, enabling the model to better distinguish subtle differences between genuine and spoof fingerprints.

*How the paper uses it:* GRU-AUNet incorporates a Dynamic Filter Network in the bottleneck to adapt filtering dynamically.

▶ [Decoupled Dynamic Filter Networks - CVPR 2021](https://www.youtube.com/watch?v=QecJD5HUF7U) — Jingkai Zhou · 5 years ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
