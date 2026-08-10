---
title: "018 · GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection — Nima Karimian"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nima-karimian-aspx"
source_hash: "5c4886411e0ebd033f48bfd9411de890407af80ef9d57d33321481dcbc99e60a"
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

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and advanced background knowledge necessary to understand the GRU-AUNet paper on contactless fingerprint presentation attack detection. It covers essential mathematics, machine learning basics, deep learning fundamentals, attention mechanisms including transformers, domain adaptation techniques, and biometric anti-spoofing concepts. The resources are carefully selected university-level courses and lectures, with specific viewing guidance to efficiently prepare you for the paper's technical content.

**The paper assumes:** linear algebra, probability and statistics, machine learning fundamentals, deep learning architectures, attention mechanisms in neural networks, domain adaptation techniques, biometric anti-spoofing methods
**Time to work through:** roughly 90-110 hours if you watch everything, about 50-60 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you have a solid background in machine learning and deep learning fundamentals; skip stages 4-5 if you are already familiar with attention mechanisms and domain adaptation in biometrics.

### Stage 1 · Linear Algebra and Probability Basics *(foundational)*
Understanding tensors, matrix operations, and probability distributions is essential to grasp neural network computations, loss functions like Focal and Contrastive Loss, and statistical evaluation metrics used in the paper.

▶ **Course:** [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

*What to watch:* Watch the first 24 lectures (episodes 1-24) of the "MIT 18.06 Linear Algebra, Spring 2005" playlist by MIT OpenCourseWare. These cover matrix multiplication, inverse, spaces, eigenvalues, and diagonalization, which are crucial for understanding the linear algebra foundations in the paper.

*Move on when you can:* Explain matrix multiplication and compute the probability of an event from a given distribution; derive the expectation and variance of a random variable.

### Stage 2 · Introduction to Machine Learning *(foundational)*
The paper builds on supervised and unsupervised learning concepts, class imbalance handling, and feature discrimination, which require understanding of basic ML models, loss functions, and evaluation metrics.

▶ **Course:** [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

*What to watch:* Focus on the first 12 lectures (episodes 1-12) of the "Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018" playlist. These cover supervised learning, loss functions, and evaluation metrics foundational for understanding the paper's learning approach and loss design.

*Move on when you can:* Implement a simple classification algorithm and explain the role of loss functions and evaluation metrics like accuracy and confusion matrix.

### Stage 3 · Deep Learning Fundamentals *(core)*
The paper uses convolutional neural networks, recurrent units (GRU), and UNet architectures, so understanding backpropagation, CNNs, RNNs, and basic deep learning frameworks is critical.

▶ **Course:** [Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0) — DeepLearningAI · 43 videos · 5.7h across 43 episodes

*What to watch:* Watch the first 20 videos (episodes 1-20) of the "Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)" playlist by DeepLearningAI. These cover neural network basics, backpropagation, and vectorization needed to understand the GRU and CNN components in the paper.

*Move on when you can:* Build and train a CNN and a GRU-based RNN on a simple dataset and explain how backpropagation updates weights.

### Stage 4 · Attention Mechanisms and Transformer Architectures *(advanced)*
GRU-AUNet replaces traditional skip connections with GRU-enhanced attention mechanisms and integrates a Swin Transformer-based UNet, requiring knowledge of attention, self-attention, and transformer models.

▶ **Course:** [Transformers in Deep Learning Course](https://www.youtube.com/playlist?list=PLuhqtP7jdD8CQTxwVsuiFYGvHtFpNhlR3) — Learn With Jay · 11 videos · 4.3h across 11 episodes

*What to watch:* Watch the entire "Transformers in Deep Learning Course" playlist by Learn With Jay (all 11 episodes). This series thoroughly explains self-attention, multi-head attention, positional encoding, and encoder-decoder architectures, which are essential to understand the paper's attention and transformer components.

*Move on when you can:* Explain the self-attention mechanism and implement a simple transformer encoder layer.

### Stage 5 · Domain Adaptation and Unsupervised Learning in Computer Vision *(advanced)*
The paper addresses domain adaptation for generalization across datasets and uses unsupervised learning techniques with only genuine images, so understanding domain shift, adaptation methods, and unsupervised loss functions is necessary.

▶ **Course:** [Modern computer vision | IIT Madras](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8X3Veh5ijSQ2UGFFEZIpKf) — NPTEL-NOC IITM · 90 videos · 21.4h across the first 60 episodes

*What to watch:* Watch the first 30 episodes of the "Modern computer vision | IIT Madras" playlist by NPTEL-NOC IITM. These cover deep learning, domain adaptation concepts, and loss functions relevant to unsupervised learning and domain generalization in computer vision.

*Move on when you can:* Describe domain adaptation challenges and implement a simple domain adaptation method for image classification.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the GRU-AUNet paper. The beginner project focuses on implementing and visualizing the GRU-enhanced attention mechanism, a core architectural novelty. The intermediate project involves reimplementing the GRU-AUNet model's core components and evaluating its anti-spoofing performance on a publicly available contactless fingerprint dataset substitute, comparing it to a baseline. The advanced project extends the model to address a stated limitation by improving detection on challenging spoof materials or adapting the architecture to a related biometric modality, showcasing research-level initiative.

### Beginner — Visualize GRU-Enhanced Attention Mechanism
*Effort: a weekend, ~8 hours*

You build a small PyTorch module that implements the GRU-enhanced attention mechanism replacing skip connections as described in the paper. You create synthetic or publicly available sample fingerprint feature maps to feed into this module and visualize the resulting attention maps to understand how the model dynamically focuses on critical features.

**Why it shows you understood the paper:** This project demonstrates you grasp the novel attention mechanism replacing traditional skip connections, a key contribution of the paper, and can implement and interpret its behavior.

**Grounded in:** Integration of GRU-enhanced attention mechanisms improves classification accuracy.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, Jupyter Notebook

**Data:** Synthetic or publicly available fingerprint feature maps simulated to mimic intermediate CNN features, as no authors' data or code is available.

**Build it:**

1. Implement a PyTorch module for channel-wise and spatial attention refined by a GRU cell as described in the paper.
2. Generate or load sample feature maps representing intermediate CNN outputs for contactless fingerprints.
3. Pass the feature maps through the GRU-enhanced attention module.
4. Visualize the attention weights and output feature maps using Matplotlib.
5. Write a README explaining the attention mechanism and your observations.

**Ships as:** A GitHub repo with code implementing the GRU-enhanced attention module, visualization notebooks, and a README explaining the mechanism and visual results.

**Stretch goal:** Extend the visualization to compare attention maps with and without GRU refinement to highlight the difference.

### Intermediate — Reimplement GRU-AUNet Core and Evaluate on Public Fingerprint Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core GRU-AUNet architecture including the Swin Transformer-based UNet backbone, GRU-enhanced attention skip connections, and Dynamic Filter Network bottleneck as described. You train and evaluate the model on a publicly available contactless fingerprint dataset substitute (e.g., LivDet 2015 contactless subset or similar), comparing performance metrics like APCER and BPCER against a simple baseline CNN.

**Why it shows you understood the paper:** This project proves you can translate the paper's novel architecture and loss functions into working code and reproduce its anti-spoofing evaluation methodology, demonstrating comprehension of domain adaptation and attention mechanisms in biometrics.

**Grounded in:** Development of an unsupervised learning approach for contactless fingerprint anti-spoofing using only genuine images during training.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use a publicly available contactless fingerprint dataset substitute such as the LivDet 2015 contactless subset or a similar open dataset, since the paper's datasets (CLARKSON, COLFISPOOF, IIITD) are not publicly released.

**Build it:**

1. Implement the Swin Transformer-based UNet backbone architecture in PyTorch.
2. Implement GRU-enhanced attention mechanisms to replace skip connections.
3. Implement the Dynamic Filter Network module in the bottleneck.
4. Implement combined Focal and Contrastive Loss functions for training.
5. Train the model using only genuine fingerprint images from the dataset.
6. Evaluate the model on spoof and genuine test images, computing APCER, BPCER, and ACER metrics.
7. Compare results against a baseline CNN trained with the same data.
8. Document the implementation, training procedure, and evaluation results.

**Ships as:** A GitHub repo with the full GRU-AUNet reimplementation, training scripts, evaluation metrics, and a detailed README describing the architecture, training, and results.

**Stretch goal:** Add cross-dataset validation by training on one dataset subset and testing on another to demonstrate domain adaptation.

### Advanced — Extend GRU-AUNet to Improve Detection on Challenging Spoof Materials
*Effort: 3+ weeks*

You extend the GRU-AUNet architecture or training approach to address the paper's limitation of higher APCER on challenging spoof materials like Playdoh. This could involve augmenting the Dynamic Filter Network, experimenting with additional attention refinements, or integrating semi-supervised learning to better handle hard spoof types. You evaluate improvements on the CLARKSON dataset or a substitute dataset with similar spoof types.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, designing and implementing meaningful architectural or methodological improvements to enhance robustness on difficult spoof attacks.

**Grounded in:** Performance on some spoof types (e.g., Playdoh in CLARKSON dataset) shows higher APCER (17.3%), indicating room for improvement on certain attack materials.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use the CLARKSON dataset if accessible or a similar public contactless fingerprint dataset with diverse spoof materials; otherwise simulate challenging spoof types based on literature descriptions.

**Build it:**

1. Analyze the baseline GRU-AUNet performance on challenging spoof types to identify failure modes.
2. Design and implement architectural extensions such as enhanced dynamic filtering or multi-head GRU attention.
3. Incorporate semi-supervised or contrastive learning techniques to improve feature discrimination on rare spoof types.
4. Train the extended model on genuine images plus limited spoof samples or unlabeled data.
5. Evaluate the model's APCER and BPCER on challenging spoof materials, comparing to the baseline.
6. Document the design decisions, experimental setup, and results in detail.

**Ships as:** A GitHub repo with the extended GRU-AUNet implementation, training and evaluation scripts, experimental results, and a comprehensive README discussing improvements and limitations.

**Stretch goal:** Adapt the extended model to a related biometric modality such as contactless palmprint spoof detection to explore cross-modal generalization.
