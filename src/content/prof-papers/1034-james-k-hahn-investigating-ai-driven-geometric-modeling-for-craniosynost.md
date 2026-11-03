---
title: "1034 · Investigating AI-Driven Geometric Modeling for Craniosynostosis Surgical Planning — James K. Hahn"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-james-k-hahn"
source_hash: "0bde8d204a5a98307d71e0e1dcb7cf2fca1bd4bc7900396010130a38ff5abaea"
sequence: 1034
generator: "outreach-garden: managed"
---

# 1034 · Investigating AI-Driven Geometric Modeling for Craniosynostosis Surgical Planning

## At a glance

- **Professor:** James K. Hahn
- **Institution:** George Washington University
- **Paper:** [Investigating AI-Driven Geometric Modeling for Craniosynostosis Surgical Planning](https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176801003.31554387/v1)
- **Authors:** Aizierjiang Aiersilan, Boyuan Feng, James Hahn
- **Year:** 2026

## Paper overview

This paper explores how artificial intelligence (AI) can improve surgical planning for craniosynostosis, a condition where skull bones fuse too early in infants. It reviews current methods for diagnosis and surgery planning, discusses the use of AI to automate and enhance these processes, and identifies challenges such as limited data and the need for integrating anatomical constraints. The authors propose future research directions to develop more accurate, patient-specific surgical plans using AI combined with physics-based models.

### Why it matters

**Research problem:** Craniosynostosis surgery requires precise geometric modeling to expand intracranial volume and restore normal skull shape. Current surgical planning is manual, subjective, and time-consuming, with limited automation and predictive capability. AI methods have shown promise in diagnosis and segmentation but face challenges in automated planning, constraint integration, and standardized evaluation.

**Why it matters:** Craniosynostosis affects about 1 in 2,000–2,500 live births and can cause serious developmental and neurological complications if untreated. Surgical correction is critical but complex, requiring tailored interventions to avoid vital structures and achieve aesthetic and functional outcomes. Improving surgical planning with AI could reduce operative time, improve precision, and enhance patient outcomes.

**Key contributions:**

- Comprehensive survey of AI-driven geometric modeling techniques for craniosynostosis surgical planning.
- Detailed analysis of geometric representations and their trade-offs in pathological anatomy.
- Summary of AI methods for diagnosis, segmentation, reconstruction, and outcome prediction.
- Identification of key challenges including data scarcity, constraint integration, evaluation metrics, and clinical integration.
- Roadmap proposing hybrid AI-physics surrogates, federated learning frameworks, and differentiable geometric optimization.

## About the professor

**James K. Hahn** — Professor, Computer Science, Pediatrics, George Washington University.

Research interests: medical simulation, image-guided surgery, medical informatics, visualization, and computer animation

### Research links

- [Faculty/profile page](https://smhs.gwu.edu/faculty-research/james-hahn-phd)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Geometric Deep Learning
**The paper assumes:** geometric deep learning, graph neural networks, 3D shape representations, differentiable optimization
**Already in this field?** Skip this entirely if you already understand geometric deep learning concepts and their applications to 3D medical imaging and surgical planning.

This background focuses on geometric deep learning, essential for understanding AI-driven geometric modeling techniques applied in craniosynostosis surgical planning. The rigorous course offers a comprehensive university-level introduction to machine learning foundations, including neural networks and kernel methods relevant to geometric data. The fast track provides a concise, intuition-driven series on group equivariant deep learning, a core concept in geometric deep learning, enabling quicker grasp of key ideas behind graph neural networks and equivariant models used in the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 4 to 7 (Perceptron & Generalized Linear Model, GDA & Naive Bayes, Support Vector Machines, Kernels), about 5.3 hours — these cover key ML models and kernel methods foundational to geometric deep learning.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a rigorous, authoritative machine learning course covering foundational topics such as neural networks, kernel methods, and support vector machines that underpin geometric deep learning techniques used in the paper.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Geometric Deep Learning](https://www.youtube.com/playlist?list=PLJ2Aod97Uj8IH7sT4NpM2MOpPeq0H2_lM) — Deep Learning II · 9 videos · 2.9h across 9 episodes

**Watch only this:** Episodes 1.1 to 1.4 (Introduction, Group theory basics, Regular group convolutional neural networks, Example), about 1.3 hours — covers core concepts of equivariance and group convolutions essential for understanding geometric deep learning.

*Why it unblocks this paper:* The Deep Learning II channel's 'Geometric Deep Learning' playlist offers a concise, well-structured introduction to group equivariant deep learning, a central concept in geometric deep learning relevant to the paper's use of graph neural networks and equivariant models.

*If you want all of it:* 2.9 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on AI-driven geometric modeling for craniosynostosis surgical planning, start with foundational knowledge on geometric modeling and medical image segmentation, which are critical for representing and processing anatomical data. Next, explore federated learning in healthcare to grasp privacy-preserving multi-center AI collaboration, followed by physics-based surgical simulation to appreciate the integration of physics with AI. Finally, focus on the core concept of AI-driven surgical planning with a relevant expert talk to connect all these elements directly to the paper's contributions and future directions.

### Geometric Modeling in Medical Imaging *(prerequisite)*
This section covers how anatomical structures are computationally represented, a foundational aspect for understanding the geometric modeling techniques surveyed in the paper. The chosen lecture from IIT Delhi provides a rigorous, university-level overview of geometric modeling principles relevant to medical applications.

*How the paper uses it:* The paper analyzes various geometric representations (meshes, point clouds, voxels, graphs, implicit fields) used in craniosynostosis modeling.

▶ [Lec-44 An Overview of Geometric Modeling](https://www.youtube.com/watch?v=0IgOapAtauM) — nptelhrd · 56:19 · 16y ago

### Deep Learning for Medical Image Segmentation *(prerequisite)*
Understanding deep learning methods for segmenting medical images is essential since the paper discusses AI techniques achieving high accuracy in skull bone segmentation. The selected NPTEL lecture offers a detailed, research-level treatment of segmentation using deep learning, suitable for advanced learners.

*How the paper uses it:* The paper highlights deep learning segmentation achieving Dice scores >0.95 for skull bone in craniosynostosis cases.

▶ [#60 Segmentation of Brain Tumors from MRI using Deep Learning](https://www.youtube.com/watch?v=PcNqAVNCZrE) — NPTEL-NOC IITM · 38:51 · 7y ago

### Federated Learning in Healthcare *(prerequisite)*
Federated learning is critical for addressing data privacy and enabling multi-center collaboration, a major challenge identified in the paper. The Stanford seminar provides a comprehensive, expert-level discussion on federated learning applications in medicine, aligning well with the paper's future research directions.

*How the paper uses it:* The paper proposes federated learning frameworks to overcome data scarcity and privacy challenges in multi-center craniosynostosis datasets.

▶ [Stanford Seminar - Federated Learning in Medicine: Breaking Down Silos to Advance Medical Research](https://www.youtube.com/watch?v=mjqTpahgkGs) — Stanford Online · 1:19:45 · 6y ago

### Physics-Based Surgical Simulation *(prerequisite)*
Physics-based surgical simulation underpins the hybrid AI-physics models proposed in the paper for accurate surgical outcome prediction. The ORBIT-Surgical framework video offers a focused, research-oriented presentation on physics-based surgical robot simulation, relevant to the paper's integration of physics and AI.

*How the paper uses it:* The paper discusses machine learning surrogates approximating finite element simulations and advocates hybrid AI-physics models for surgical planning.

▶ [ORBIT-Surgical: An Open-Simulation Framework for Learning Surgical Augmented Dexterity](https://www.youtube.com/watch?v=Jch3N0NqL2k) — Masoud Moghani · 7:24 · 2y ago

### AI-Driven Surgical Planning
This core section focuses on the integration of AI and geometric modeling to automate and optimize surgical planning, the central theme of the paper. The selected webinar features an industry expert discussing end-to-end digital workflows including AI segmentation and virtual surgical planning, providing practical insights closely aligned with the paper's scope.

*How the paper uses it:* The paper surveys AI methods for diagnosis, segmentation, reconstruction, and surgical planning, emphasizing automation and optimization in craniosynostosis surgery.

▶ [End to End Orthognathic Surgery Planning | DICOM, AI Segmentation & Virtual Surgical Planning](https://www.youtube.com/watch?v=jkUURp2aExY) — 3dsurgical · 59:37 · 2mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand AI-driven geometric modeling for craniosynostosis surgical planning. We start with medical imaging basics to grasp how anatomical data is captured, then cover deep learning methods for segmenting medical images, followed by physics-based surgical simulation to appreciate physics-informed modeling. Next, we explore federated learning to understand privacy-preserving multi-center AI collaboration. Finally, we focus on AI-driven surgical planning, the core concept of the paper, to see how AI integrates with geometric modeling to optimize surgery.

### Geometric Modeling in Medical Imaging *(prerequisite)*
Learn how medical images are captured and represented digitally, including common imaging modalities and geometric representations like meshes and voxels. This foundation helps you understand how anatomical structures, such as infant skulls, are modeled computationally for analysis and planning.

*How the paper uses it:* The paper reviews geometric representations used in craniosynostosis modeling, which rely on medical imaging data.

▶ [Artificial Intelligence in medical imaging: From research to clinical practice – Koen Van Leemput](https://www.youtube.com/watch?v=iiw4j-Frljo) — Aalto University · 15:00 · 3y ago

### Deep Learning for Medical Image Segmentation *(prerequisite)*
Understand how AI, especially deep learning models like U-Net, automatically identify and segment anatomical structures from medical images. This skill is essential for extracting skull bone regions needed for surgical planning in craniosynostosis.

*How the paper uses it:* The paper highlights deep learning segmentation achieving high accuracy for skull bone extraction.

▶ [U-Net clearly explained | Image Segmentation with AI](https://www.youtube.com/watch?v=oxcgx75k6yU) — TileStats · 32:16 · 1y ago

### Physics-Based Surgical Simulation *(prerequisite)*
Explore how physics-based models simulate tissue behavior and surgical outcomes, providing realistic predictions of how surgical interventions affect anatomy. This knowledge is key to understanding hybrid AI-physics models proposed for surgical planning.

*How the paper uses it:* The paper discusses combining AI with physics-based simulations to improve surgical outcome prediction.

▶ [Physics-Based Simulations Ready to Enter the Cathlab | Mimics Innovation Conference](https://www.youtube.com/watch?v=8XHDE7vH4bs) — Materialise Medical · 14:20 · 9y ago

### Federated Learning in Healthcare *(prerequisite)*
Learn about federated learning, a method that enables AI models to be trained across multiple hospitals without sharing sensitive patient data. This approach addresses data scarcity and privacy challenges in medical AI development.

*How the paper uses it:* Federated learning is proposed in the paper as a solution to data privacy and multi-center collaboration challenges.

▶ [Stanford Seminar - Federated Learning in Medicine: Breaking Down Silos to Advance Medical Research](https://www.youtube.com/watch?v=mjqTpahgkGs) — Stanford Online · 1:19:45 · 6y ago

### AI-Driven Surgical Planning
Discover how AI integrates geometric modeling and predictive analytics to automate and optimize surgical planning, improving precision and outcomes. This concept ties together the paper's focus on AI-enhanced craniosynostosis surgery workflows.

*How the paper uses it:* The paper centers on AI-driven geometric modeling to automate and enhance craniosynostosis surgical planning.

▶ [End to End Orthognathic Surgery Planning | DICOM, AI Segmentation & Virtual Surgical Planning](https://www.youtube.com/watch?v=jkUURp2aExY) — 3dsurgical · 59:37 · 2mo ago

## Already in your library

- [Babak Heydari: Beyond Model Alignment: Adaptive Interaction Architectures for H-AI Complementarity](https://www.youtube.com/watch?v=nNLoriZfLSI) — also for: HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person ReID (Feng Liu)
- [MedAI Session 25: Training medical image segmentation models with less labeled data | Sarah Hooper](https://www.youtube.com/watch?v=FTmvdARsbnI) — also for: Digital twins for noninvasively measuring predictive markers of right heart failure (Amanda Randles)
- [Deep learning for medical imaging applications](https://www.youtube.com/watch?v=M1lgXr4Xcns) — also for: Automated Classification of Breast Cancer Cells Using High-Throughput Holographic Cytometry (Cindy X. Chen)
- [Week 01 | Introduction to Federated Learning | Theory and Applications of Federated Learning](https://www.youtube.com/watch?v=ovFPEx-2c2Q) — also for: Federated Analytics: A survey (Shantanu Sharma)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of AI-driven geometric modeling for craniosynostosis surgical planning. The beginner project focuses on implementing a simple skull bone segmentation model to reproduce reported segmentation accuracy. The intermediate project reimplements a machine learning surrogate for physics-based surgical outcome prediction, comparing it to a baseline regression model. The advanced project explores federated learning to address data scarcity and privacy challenges, directly tackling a key limitation and future direction proposed in the paper.

### Beginner — Skull Bone Segmentation with Deep Learning
*Effort: a weekend, ~8 hours*

You build a convolutional neural network (CNN) to segment skull bones from CT scan slices, aiming to reproduce the high Dice score (>0.95) reported in the paper. You use a public cranial CT dataset as a substitute for the paper's data and implement basic preprocessing and evaluation metrics.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key result on deep learning segmentation accuracy and the importance of precise geometric modeling in craniosynostosis surgical planning.

**Grounded in:** Deep learning segmentation achieves Dice scores >0.95 for skull bone.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, SimpleITK

**Data:** Use a publicly available cranial CT dataset such as the CQ500 dataset or simulate CT slices with synthetic skull masks if no direct craniosynostosis data is available.

**Build it:**

1. Download and preprocess cranial CT scan slices, normalizing intensities and resizing images.
2. Implement a simple 2D U-Net CNN architecture for binary skull bone segmentation.
3. Train the model on training slices with skull bone masks, validating on a held-out set.
4. Evaluate segmentation performance using Dice coefficient and visualize sample predictions.
5. Write a README explaining the model, dataset, and results.

**Ships as:** A GitHub repo with code for training and evaluating the skull bone segmentation CNN, including sample visualizations and Dice scores in the README.

**Stretch goal:** Add 3D volumetric segmentation using 3D U-Net and compare performance to 2D slices.

### Intermediate — Machine Learning Surrogate for Surgical Outcome Prediction
*Effort: 1-3 weekends*

You reimplement a machine learning surrogate model to predict post-surgical cranial indices from preoperative geometric features, approximating physics-based finite element method (FEM) simulations as described in the paper. You compare the surrogate's accuracy and runtime against a baseline linear regression model.

**Why it shows you understood the paper:** This project shows your ability to apply the paper's core method of using ML surrogates to accelerate surgical outcome prediction, a key contribution and result of the paper.

**Grounded in:** Machine learning surrogates can approximate finite element simulations with high accuracy and much faster runtime.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Pandas, Matplotlib

**Data:** Simulate or generate synthetic geometric features and corresponding FEM simulation outputs (e.g., cranial indices) since no public FEM dataset is provided.

**Build it:**

1. Generate or simulate a dataset of preoperative geometric features and corresponding FEM-simulated post-surgical cranial indices.
2. Implement a Support Vector Regression (SVR) model to predict post-surgical outcomes from features.
3. Train and evaluate SVR performance using R2 score and runtime metrics.
4. Implement a baseline linear regression model for comparison.
5. Analyze and visualize prediction accuracy and runtime differences.
6. Document methodology, results, and implications in the README.

**Ships as:** A GitHub repo containing code for training and evaluating the ML surrogate and baseline models, with performance metrics and analysis in the README.

**Stretch goal:** Extend the surrogate to predict multiple surgical outcome metrics and explore ensemble methods for improved accuracy.

### Advanced — Federated Learning Framework for Craniosynostosis Imaging
*Effort: a few weeks*

You develop a federated learning prototype to collaboratively train a cranial bone segmentation model across simulated multi-center datasets, addressing data scarcity and privacy challenges highlighted in the paper. You implement basic annotation standardization and evaluate model generalization across centers.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper—using federated learning to overcome data scarcity and heterogeneous imaging protocols while preserving privacy.

**Grounded in:** Federated learning frameworks are prioritized for future research to preserve data privacy while enabling multi-center collaboration.

**Tech stack:** Python 3.11, PyTorch, Flower federated learning framework, NumPy, SimpleITK

**Data:** Simulate multiple small cranial CT datasets with varying imaging characteristics to represent different centers, using public cranial CT data or synthetic data.

**Build it:**

1. Set up a federated learning environment using the Flower framework.
2. Prepare simulated multi-center cranial CT datasets with slight variations in imaging parameters.
3. Implement a CNN segmentation model to be trained in a federated manner across simulated clients.
4. Incorporate basic annotation standardization techniques to harmonize labels across centers.
5. Train the federated model and evaluate segmentation accuracy and generalization on each center's test data.
6. Document challenges, results, and potential clinical implications in the README.

**Ships as:** A GitHub repo demonstrating federated training of a cranial bone segmentation model with multi-center simulated data, including evaluation results and discussion.

**Stretch goal:** Integrate differential privacy mechanisms and test robustness to domain shifts and imaging artifacts.

_The paper authors released no code or datasets; all projects must rely on public or synthetic data substitutes and reimplement methods from the paper's descriptions._
