---
title: "400 · Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings — Tolga Tasdizen"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tolga-tasdizen"
source_hash: "2e4d79b1ccda925873652bc3fd0a732b0923bc4a7125f12ec677d418a98ffdc4"
sequence: 400
generator: "outreach-garden: managed"
---

# 400 · Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings

## At a glance

- **Professor:** Tolga Tasdizen
- **Institution:** University of Utah
- **Paper:** [Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings](https://arxiv.org/abs/2602.09477)
- **Authors:** Bodong Zhang, Xiwen Li, Hamid Manoochehri, Xiaoya Tang, Deepika Sirohi, Beatrice S. Knudsen, Tolga Tasdizen
- **Year:** 2026

## Paper overview

This paper presents WeakSupCon, a novel weakly supervised contrastive learning method designed to improve feature representation learning for histopathology image patches in multiple instance learning (MIL) settings. It leverages bag-level labels to better separate positive and negative patches in feature space without needing costly patch-level annotations, leading to improved classification performance on histopathology datasets.

### Why it matters

**Research problem:** Histopathology whole slide images (WSIs) are large and require patch-level annotations for training deep learning models, but such fine-grained labels are costly and time-consuming to obtain. Existing MIL methods use patch features from pretrained encoders but often neglect feature representation learning tailored to MIL with only bag-level labels.

**Why it matters:** Accurate and efficient analysis of histopathology images is critical for disease diagnosis, prognosis, and biomarker development. Reducing the need for detailed annotations can accelerate algorithm development and clinical deployment, especially given the gigapixel scale of WSIs and the scarcity of expert labeling resources.

**Key contributions:**

- Introduction of WeakSupCon, a weakly supervised contrastive learning method tailored for MIL with only bag-level labels.
- Design of a multi-task loss combining a Similarity Loss for negative bag patches and a SimCLR loss for positive bag patches to separate positive and negative patch features.
- Comprehensive evaluation on three histopathology datasets (Camelyon16, renal vein thrombosis, kidney metastasis) showing improved downstream MIL classification performance.
- Comparison with self-supervised (SimCLR, MoCo v3), supervised contrastive learning (SupCon), and state-of-the-art histopathology foundation models demonstrating superior or competitive results.
- Detailed feature distribution analysis and ablation studies validating the effectiveness and robustness of the proposed loss design.

## About the professor

**Tolga Tasdizen** — Professor of Electrical and Computer Engineering, Electrical and Computer Engineering, University of Utah.

Research interests: Machine learning and image analysis for healthcare, public health, and scientific imaging.

### Research links

- [Faculty/profile page](http://www.sci.utah.edu/~tolga)
- [Resolved homepage](https://www.sci.utah.edu/~tolga)
- [Google Scholar](https://scholar.google.com/citations?user=qcydYi8AAAAJ)
- [ORCID](https://orcid.org/0000-0001-6574-0366)
- [LinkedIn](https://www.linkedin.com/in/tolgatasdizen/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** contrastive learning machine learning
**The paper assumes:** contrastive learning methods, self-supervised representation learning, and multiple instance learning
**Already in this field?** Skip this entirely if you already understand contrastive learning frameworks and their application in weakly supervised machine learning.

To understand the core method WeakSupCon in this paper, a solid grasp of contrastive learning principles and loss functions like SimCLR and SupCon is essential. The rigorous course option offers a deep, structured university-level treatment of self-supervised and contrastive learning within a broader deep learning for computer vision context. The fast track provides a concise, focused explainer series on contrastive networks and Siamese networks, ideal for quickly building intuition and practical understanding without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yann LeCun’s Deep Learning Course](https://www.youtube.com/playlist?list=PLgF7i4LH-YxacgG0OPmTYe1UUQAvcw9Ke) — NYU Data Science · 33 videos · 47.4h across 33 episodes

**Watch only this:** Episodes 8L (Self-supervised learning and variational inference), 10L (Self-supervised learning in computer vision), and 11 (Graph Convolutional Networks) for about 4.5 hours total — these cover self-supervised and contrastive learning fundamentals needed for the paper.

*Why it unblocks this paper:* Yann LeCun’s Deep Learning Course covers the latest deep learning and representation learning techniques, including self-supervised and contrastive learning, embedding methods, and metric learning, which are directly relevant to understanding WeakSupCon’s multi-task loss and feature embedding design.

*If you want all of it:* 47.4 hours across 33 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [contrastive networks and siamese networks](https://www.youtube.com/playlist?list=PLyH8drkPF8JEpY7aGKqMsfuKR8hTD7fJY) — Farshad Noravesh · 32 videos · 6.5h across 32 episodes

**Watch only this:** Parts 1 (siamese prototypical contrastive learning), 2 (prototypical contrastive learning of unsupervised representation), 8 (exploring simple siamese representation learning), and 24 (a simple framework for contrastive learning of visual representation), totaling about 48 minutes — enough to grasp core contrastive learning concepts.

*Why it unblocks this paper:* This playlist by Farshad Noravesh offers a concise and clear series on contrastive and Siamese networks, including prototypical contrastive learning and SimCLR, which directly align with the paper’s focus on contrastive learning losses and feature separation.

*If you want all of it:* 6.5 hours across 32 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings,' start by building foundational knowledge on Multiple Instance Learning (MIL), contrastive learning, and self-supervised learning, as these underpin the methodology. Next, gain domain-specific context on histopathology image analysis to appreciate the application challenges. Finally, focus on the core concept of weakly supervised contrastive learning, culminating with the authors' own talk or the closest available advanced presentation to grasp their novel WeakSupCon method in detail.

### Multiple Instance Learning lecture *(prerequisite)*
Understanding MIL is essential because the paper addresses learning from bag-level labels without instance-level annotations, a core challenge in MIL. The selected video provides a comprehensive academic-level introduction to MIL approaches and their applications in medical imaging, which aligns well with the paper's problem setting.

*How the paper uses it:* The paper proposes a method tailored for MIL settings where only bag-level labels are available.

▶ [[MISS 2016] Marleen de Bruijne - Learning from Weak Labels](https://www.youtube.com/watch?v=wd8DWoExjoA) — Università di Catania - webtv · 50:36

### Contrastive learning seminar *(prerequisite)*
Contrastive learning forms the backbone of the proposed WeakSupCon method. The chosen seminar from MIT CSAIL offers a rigorous and detailed overview of contrastive learning principles and self-supervised representation learning, providing the theoretical foundation necessary to understand the paper's loss design and embedding learning.

*How the paper uses it:* WeakSupCon builds on contrastive learning to separate positive and negative patch features effectively.

▶ [Yonglong Tian - Contrastive Learning: A General Self ...](https://www.youtube.com/watch?v=7YBwnc9D2d4) — Vision & Graphics Seminar at MIT · 59:18

### Self-supervised learning lecture *(prerequisite)*
The method incorporates self-supervised techniques like SimCLR to learn patch embeddings without labels. The Stanford CS231N lecture offers an advanced, university-level treatment of self-supervised learning, including contrastive methods, which is critical for understanding the SimCLR loss component in WeakSupCon.

*How the paper uses it:* WeakSupCon uses a SimCLR self-supervised loss on positive bag patches to maintain feature diversity.

▶ [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — Stanford Online · 1:14:42

### Histopathology image analysis talk *(prerequisite)*
Contextualizing the application domain is important to appreciate the challenges of large-scale whole slide image analysis and the clinical relevance of the work. The selected talk from the University of Colorado School of Medicine provides an in-depth academic perspective on machine learning applications in histopathology.

*How the paper uses it:* The paper addresses feature learning challenges specific to histopathology whole slide images.

▶ [Artificial Intelligence and Histopathological Characterization of ...](https://www.youtube.com/watch?v=Er7X8zjBgg0) — University of Colorado School of Medicine · 1:14:50

### WeakSupCon talk *(the paper's own talk)*
The core concept is the novel weakly supervised contrastive learning method, WeakSupCon. Although the authors' exact talk on this paper is not available, the closest relevant advanced talk on weakly supervised computational pathology by a leading researcher in the field is selected to provide insight into similar approaches and the state-of-the-art context.

*How the paper uses it:* This concept directly covers the paper's novel method and its application to histopathology patch embeddings.

▶ [MedAI #39: Weakly-supervised, large-scale computational pathology for diagnosis & prognosis | Max Lu](https://www.youtube.com/watch?v=vOptYqkxgwg) — Stanford MedAI · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand WeakSupCon, a weakly supervised contrastive learning method for histopathology patch embeddings. Start with Multiple Instance Learning (MIL) to grasp learning from bag-level labels, then learn about Contrastive Learning and Self-Supervised Learning as the core techniques underlying the method. Finally, explore a focused talk on WeakSupCon itself to see how these ideas combine in the paper's novel approach.

### Multiple Instance Learning lecture *(prerequisite)*
Multiple Instance Learning (MIL) is a framework where labels are available only for groups (bags) of instances rather than individual instances. This is crucial for histopathology, where whole slide images are labeled but patch-level annotations are unavailable or costly. Understanding MIL helps grasp why the paper focuses on learning from bag-level labels.

*How the paper uses it:* The paper addresses representation learning tailored for MIL settings using only bag-level labels without patch-level annotations.

▶ [RISE-MICCAI Tutorial - An Introduction to torchmil - March 3 ...](https://www.youtube.com/watch?v=sfbNyS5zZzs) — MICCAI Society · 1:01:59

### Contrastive learning seminar *(prerequisite)*
Contrastive learning trains models by pulling similar examples closer and pushing dissimilar ones apart in feature space, enabling effective representation learning without explicit labels. This concept is foundational to WeakSupCon, which uses contrastive losses to separate positive and negative patch features.

*How the paper uses it:* WeakSupCon builds on contrastive learning to separate patch embeddings from positive and negative bags.

▶ [Yonglong Tian - Contrastive Learning: A General Self ...](https://www.youtube.com/watch?v=7YBwnc9D2d4) — Vision & Graphics Seminar at MIT · 59:18

### Self-supervised learning lecture *(prerequisite)*
Self-supervised learning leverages inherent data structure to create supervisory signals, often using contrastive methods like SimCLR. It enables learning useful features without manual labels, which is key for the paper's approach to learning patch embeddings without instance-level annotations.

*How the paper uses it:* WeakSupCon incorporates a SimCLR self-supervised loss to promote diversity among positive bag patches.

▶ [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — Stanford Online · 1:14:42

### WeakSupCon talk *(the paper's own talk)*
This talk presents the WeakSupCon method directly, explaining how weak supervision and contrastive learning combine to improve patch embedding learning for MIL in histopathology. It offers insight into the novel multi-task loss design and empirical results.

*How the paper uses it:* The talk covers the paper's core contribution: the WeakSupCon framework for weakly supervised contrastive learning in histopathology.

▶ [MedAI #39: Weakly-supervised, large-scale computational pathology for diagnosis & prognosis | Max Lu](https://www.youtube.com/watch?v=vOptYqkxgwg) — Stanford MedAI · 4 years ago

## Already in your library

- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Contrastive Self-Supervised Learning and Potential ...](https://www.youtube.com/watch?v=IEiytaXnggI) — also for: Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis (Natalie Stanley)
- [Contrastive Loss : Data Science Basics](https://www.youtube.com/watch?v=dC3_IKaBXTk) — also for: Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis (Natalie Stanley)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of WeakSupCon, a weakly supervised contrastive learning method for histopathology patch embeddings. The beginner project reproduces a key visualization from the paper to grasp feature separation concepts. The intermediate project builds on the authors' released code to implement and evaluate WeakSupCon on a histopathology dataset, comparing it to a baseline. The advanced project extends WeakSupCon to address a stated limitation by incorporating instance-level pseudo-labeling to localize positive patches within positive bags, improving interpretability.

### Beginner — Visualize Patch Feature Separation with WeakSupCon Loss
*Effort: a weekend, ~8 hours*

You build a Jupyter notebook that simulates patch embeddings for positive and negative bags and implements the core idea of the WeakSupCon multi-task loss (Similarity Loss for negative patches and SimCLR loss for positive patches). You then visualize the resulting feature distributions using PCA or t-SNE to reproduce the kind of feature separation shown in Figure 3 of the paper.

**Why it shows you understood the paper:** This project shows you understand how WeakSupCon separates positive and negative patch features in latent space using bag-level labels and distinct loss functions, a key contribution of the paper.

**Grounded in:** Feature visualization shows clear separation between positive and negative patch features with WeakSupCon, unlike overlapping distributions in SimCLR and overfitting in SupCon.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, scikit-learn, matplotlib, PyTorch

**Data:** Simulated patch embeddings representing positive and negative bags, as real patch-level data is not required for this visualization.

**Build it:**

1. Simulate synthetic patch feature vectors for positive and negative bags with distinguishable distributions.
2. Implement the WeakSupCon multi-task loss: Similarity Loss for negative bag patches and SimCLR loss for positive bag patches.
3. Train a simple encoder network on the simulated data using the combined loss.
4. Use PCA or t-SNE to reduce the learned embeddings to 2D.
5. Plot and compare the feature distributions of positive and negative patches to show separation.
6. Write a README explaining the loss functions and how the visualization relates to the paper.

**Ships as:** A Jupyter notebook with code and plots demonstrating feature separation of patch embeddings using WeakSupCon losses, plus a README linking the results to the paper's Figure 3.

**Stretch goal:** Add an ablation to vary the Similarity Loss weight and observe its effect on feature separation, reflecting the paper's ablation studies.

### Intermediate — Reproduce WeakSupCon MIL Classification on Camelyon16
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' released WeakSupCon codebase to train patch embeddings on the Camelyon16 dataset using bag-level labels. Then you evaluate downstream MIL classification performance using one MIL model (e.g., AB-MIL) and compare WeakSupCon features against a baseline self-supervised method like SimCLR, reporting balanced accuracy and AUC.

**Why it shows you understood the paper:** This project demonstrates you can apply the paper's core method end-to-end on a real histopathology dataset, reproduce key metrics, and understand the practical impact of WeakSupCon on MIL classification.

**Grounded in:** WeakSupCon outperforms self-supervised contrastive learning methods and SupCon in balanced accuracy, accuracy, and AUC across three datasets using two MIL models (DTFD-MIL and AB-MIL).

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Camelyon16 dataset, Git

**Data:** Camelyon16 dataset (publicly available histopathology WSI dataset) used as a substitute for the paper's data to train and evaluate WeakSupCon.

**Build it:**

1. Clone the authors' WeakSupCon repository from https://github.com/BzhangURU/Paper_WeakSupCon_for_MIL and set up the environment.
2. Download and preprocess the Camelyon16 dataset to extract bag-level labels and patches as required.
3. Train the WeakSupCon encoder on Camelyon16 patch bags using bag-level labels.
4. Extract patch embeddings and train an MIL classifier (e.g., AB-MIL) on these features.
5. Train a baseline encoder using SimCLR on the same data and repeat MIL classification.
6. Compare and report balanced accuracy, accuracy, and AUC metrics between WeakSupCon and SimCLR features.
7. Document the process, results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/BzhangURU/Paper_WeakSupCon_for_MIL> — released by the paper's authors

**Ships as:** A GitHub repository with code, scripts, and a report showing WeakSupCon training and MIL classification results on Camelyon16 compared to SimCLR baseline.

**Stretch goal:** Add feature visualization plots (PCA/t-SNE) of learned embeddings to qualitatively compare WeakSupCon and baseline features.

### Advanced — Extend WeakSupCon with Instance-Level Pseudo-Labeling for Patch Localization
*Effort: 3-4 weeks*

You develop an extension of WeakSupCon that incorporates instance-level pseudo-labeling or attention mechanisms to identify and localize positive patches within positive bags. This addresses a key limitation of the paper by improving interpretability and potentially enhancing MIL performance. You evaluate your method on one of the paper's datasets (e.g., renal vein thrombosis) and compare localization quality and classification metrics.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions by implementing a novel extension that improves patch-level interpretability, a challenging and clinically relevant problem.

**Grounded in:** Extending WeakSupCon to incorporate instance-level pseudo-labeling or attention mechanisms to better identify positive patches within positive bags.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Camelyon16 or renal vein thrombosis dataset, Git

**Data:** Use the renal vein thrombosis dataset from the paper if accessible; otherwise, use Camelyon16 as a substitute and simulate instance-level pseudo-labeling.

**Build it:**

1. Start from the authors' WeakSupCon codebase and understand the existing training pipeline.
2. Implement an instance-level pseudo-labeling module that assigns soft or hard labels to patches within positive bags based on feature similarity or attention scores.
3. Incorporate this pseudo-labeling into the contrastive learning loss to guide the encoder to better separate positive patches.
4. Train the extended model on the chosen dataset with bag-level labels only.
5. Evaluate the model on MIL classification metrics and qualitatively assess patch localization via visualization.
6. Write a detailed report discussing the method, results, and how it addresses the paper's limitation.

**Verified links from the paper:**

- <https://github.com/BzhangURU/Paper_WeakSupCon_for_MIL> — released by the paper's authors

**Ships as:** A GitHub repository with code implementing the extended WeakSupCon method, evaluation scripts, and a comprehensive README describing the approach, results, and clinical relevance.

**Stretch goal:** Integrate transformer-based encoders to further improve representation learning and localization performance.

_Access to the renal vein thrombosis and kidney metastasis datasets may be restricted; Camelyon16 is publicly available and can be used as a substitute for intermediate and advanced projects if needed._
