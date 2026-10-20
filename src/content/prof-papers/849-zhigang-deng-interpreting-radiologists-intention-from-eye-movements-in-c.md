---
title: "849 · Interpreting Radiologist’s Intention from Eye Movements in Chest X-ray Diagnosis — Zhigang Deng"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhigang-deng"
source_hash: "1e8ffe4751ec2b84ad2a7e42db4a0a126d7676efc88d3418a75314963280558b"
sequence: 849
generator: "outreach-garden: managed"
---

# 849 · Interpreting Radiologist’s Intention from Eye Movements in Chest X-ray Diagnosis

## At a glance

- **Professor:** Zhigang Deng
- **Institution:** University of Houston
- **Paper:** [Interpreting Radiologist’s Intention from Eye Movements in Chest X-ray Diagnosis](https://arxiv.org/pdf/2507.12461)
- **Authors:** Trong Thang Pham, Anh Nguyen, Zhigang Deng, Carol C. Wu, Hien Nguyen, Ngan Le
- **Year:** 2025

## Paper overview

This paper presents RadGazeIntent, a deep learning model that interprets the diagnostic intentions behind radiologists' eye movements while they analyze chest X-rays. Unlike previous work that mimics gaze patterns or predicts disease locations, this approach decodes the purpose behind each eye fixation to better understand how radiologists search for multiple findings. The authors create three datasets reflecting different search behaviors and demonstrate that their transformer-based model outperforms existing methods in predicting what a radiologist is focusing on at each moment.

### Why it matters

**Research problem:** Existing AI models for gaze-assisted medical imaging fail to interpret the underlying diagnostic intention behind each radiologist's eye fixation during chest X-ray analysis. They either mimic gaze patterns or predict disease locations without explaining why a radiologist fixates on specific regions.

**Why it matters:** Understanding the intention behind radiologists' eye movements can improve interactive AI systems that collaborate with human experts, enhance training, and provide real-time feedback. It can lead to more effective diagnostic assistance and better integration of AI in clinical workflows.

**Key contributions:**

- Introduction of three new benchmark datasets (RadSeq, RadExplore, RadHybrid) representing different radiologist visual search strategies.
- Development of RadGazeIntent, a novel transformer-based framework for interpreting radiologists' fixation intentions.
- Comprehensive evaluation showing RadGazeIntent outperforms baseline models across multiple datasets and intention definitions.
- Qualitative analysis demonstrating the model's ability to accurately predict diagnostic intentions behind fixations.
- Ablation studies highlighting the importance of temporal, spatial, peripheral, and foveal features in intention interpretation.

## About the professor

**Zhigang Deng** — Moores Professor of Computer Science, Department of Computer Science, University of Houston.

Research interests: human-centered computing, computer graphics and animation, human computer conversation, and biomedical informatics

### Research links

- [Faculty/profile page](https://graphics.cs.uh.edu/zdeng)
- [Professor website](http://graphics.cs.uh.edu/zdeng)
- [Lab website](http://graphics.cs.uh.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=Um2XpzkAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** transformer models in machine learning
**The paper assumes:** transformer architectures, attention mechanisms, spatial and temporal embeddings in deep learning
**Already in this field?** Skip this entirely if you already understand transformer models and their application to sequential and spatial data in machine learning.

This background focuses on transformer models in machine learning, which is essential to understand the RadGazeIntent model's architecture and its use of spatial and temporal embeddings with causal self-attention. The rigorous course option provides a deep, university-level exploration of transformers and large language models, ideal for readers seeking comprehensive mastery. The fast track offers a concise, well-structured explainer series that covers core transformer concepts efficiently, suitable for readers who want a solid grasp without investing extensive time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3, about 5.3 hours — covering the Transformer architecture, transformer-based models, and large language models to build foundational understanding.

*Why it unblocks this paper:* This Stanford CME295 course is a rigorous university-level series that thoroughly covers transformer architectures, their components, and applications, directly relevant to understanding the RadGazeIntent transformer's design and performance.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Transformers in Deep Learning Course](https://www.youtube.com/playlist?list=PLuhqtP7jdD8CQTxwVsuiFYGvHtFpNhlR3) — Learn With Jay · 11 videos · 4.3h across 11 episodes

**Watch only this:** Episodes 1-6, about 2.3 hours — covering introduction, self-attention, linear transformations, query/key/value concepts, scaling, and multi-headed attention.

*Why it unblocks this paper:* This 'Transformers in Deep Learning' playlist by Learn With Jay offers clear, concise explanations of key transformer concepts including self-attention, multi-head attention, positional encoding, and encoder/decoder architectures, providing an efficient overview suitable for quick comprehension.

*If you want all of it:* 4.3 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Interpreting Radiologist’s Intention from Eye Movements in Chest X-ray Diagnosis,' start by building foundational knowledge on eye tracking in medical imaging and the modeling of visual attention and intention, as these underpin the interpretation of gaze data. Next, grasp the technical methods such as spatial-temporal embeddings in transformers and multi-label classification in deep learning, which are critical for the RadGazeIntent model. Finally, focus on the core concept by reviewing the authors' own talks to gain direct insight into their novel transformer-based approach and datasets.

### eye tracking in medical imaging *(prerequisite)*
Understanding eye tracking technology and its application in medical imaging is fundamental to appreciating how radiologists' visual behavior is captured and analyzed. This knowledge provides the basis for interpreting gaze data and its relation to diagnostic processes.

*How the paper uses it:* The paper relies on eye tracking data to infer radiologists' diagnostic intentions during chest X-ray analysis.

▶ [Modelling Visual Perception and Image Quality for Medical Imaging](https://www.youtube.com/watch?v=SUvjwKsPt1k) — NIHR Maudsley Biomedical Research Centre (BRC) · 4mo ago

### visual attention and intention modeling *(prerequisite)*
Visual attention and intention modeling explain how cognitive focus and goals can be inferred from gaze and attention data. This theoretical background is crucial for understanding how the paper interprets the diagnostic intent behind each fixation.

*How the paper uses it:* The paper interprets radiologists' intentions from their eye movements, which requires understanding visual attention and intention modeling.

▶ [Seeing to Ground: Visual Attention for Hallucination-Resilient MDLLMs Conference - ECCV 2026](https://www.youtube.com/watch?v=Bk_09mGIkXc) — UCF CRCV · 13d ago

### spatial temporal embeddings in transformers *(prerequisite)*
Spatial and temporal embeddings are essential for encoding the location and sequence of eye fixations in transformer models. Grasping this concept helps in understanding how RadGazeIntent processes gaze data to maintain causality and context.

*How the paper uses it:* RadGazeIntent uses spatial and temporal embeddings to encode fixation locations and sequences for intention interpretation.

▶ [Spatial-Temporal Transformer for 3D Point Cloud Sequences](https://www.youtube.com/watch?v=RLcMwPvMiuA) — ComputerVisionFoundation Videos · 3y ago

### multi-label classification in deep learning *(prerequisite)*
Multi-label classification techniques allow models to predict multiple diagnostic findings simultaneously from each fixation. Understanding this method is key to comprehending how RadGazeIntent classifies diagnostic intentions.

*How the paper uses it:* The model performs multi-label classification to identify multiple diagnostic intentions per fixation.

▶ [Machine learning lesson 9: multilabel classification on packing dataset](https://www.youtube.com/watch?v=Ss83O9qNc6k) — zilefac ebenezer nwetlawung · 2y ago

### transformer models for gaze analysis
Transformers are the core architecture behind RadGazeIntent, enabling the integration of spatial, temporal, and peripheral gaze features. Familiarity with transformer models tailored for gaze analysis clarifies the model's design and advantages.

*How the paper uses it:* RadGazeIntent is a transformer-based framework designed to interpret radiologists' fixation intentions from gaze data.

▶ [L19.5.1 The Transformer Architecture](https://www.youtube.com/watch?v=tstbZXNCfLY) — Sebastian Raschka · 5y ago

### RadGazeIntent authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper's authors provide the most precise and detailed insights into their novel datasets, model architecture, experimental results, and future directions. These talks are invaluable for an advanced understanding of the paper's contributions.

*How the paper uses it:* These talks present the authors' own explanations and findings on RadGazeIntent and their new benchmark datasets.

▶ [https://www.youtube.com › watch?v=5ew6hy_FgxA](https://www.youtube.com/watch?v=5ew6hy_FgxA) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how RadGazeIntent interprets radiologists' diagnostic intentions from eye movements in chest X-ray analysis. We start with the basics of eye tracking in medical imaging to grasp how visual behavior data is captured, then explore visual attention and intention modeling to understand how gaze relates to cognitive goals. Next, we cover multi-label classification and spatial-temporal embeddings in transformers to build intuition on the model's technical methods, and finish with a focused look at transformer models for gaze analysis, the core technique behind RadGazeIntent.

### eye tracking in medical imaging *(prerequisite)*
Eye tracking technology records where and how eyes move, providing data on visual attention and search patterns. In medical imaging, this helps capture how radiologists examine images, revealing their focus and search strategies.

*How the paper uses it:* The paper relies on eye tracking data to analyze radiologists' fixation points during chest X-ray diagnosis.

▶ [https://www.youtube.com › watch?v=GYsdvt-pIKU](https://www.youtube.com/watch?v=GYsdvt-pIKU) — YouTube result via DuckDuckGo

### visual attention and intention modeling *(prerequisite)*
Visual attention modeling studies how humans focus on certain parts of a scene, while intention modeling tries to infer the goals behind these attention shifts. Understanding this helps decode why radiologists fixate on specific image regions.

*How the paper uses it:* RadGazeIntent interprets the diagnostic intention behind each eye fixation, linking gaze to cognitive goals.

▶ [Lecture 11: Visual Attention and Consciousness](https://www.youtube.com/watch?v=pnfudjQwjS8) — allen institute · 13y ago

### multi-label classification in deep learning *(prerequisite)*
Multi-label classification allows a model to assign multiple labels to a single input, useful when several findings can be present simultaneously. This technique enables predicting multiple diagnostic intentions per fixation.

*How the paper uses it:* The model classifies each fixation's diagnostic intent across multiple findings using multi-label classification.

▶ [What is Multi Label Classification in Machine Learning?](https://www.youtube.com/watch?v=qMhNYVJH5Ag) — MLDawn · 4y ago

### spatial temporal embeddings in transformers *(prerequisite)*
Spatial and temporal embeddings encode where and when events occur, helping transformers understand sequences with spatial context. This is crucial for modeling the order and location of radiologists' fixations.

*How the paper uses it:* RadGazeIntent uses spatial and temporal embeddings to encode fixation location and sequence for intention interpretation.

▶ [Spatial-Temporal Transformer for 3D Point Cloud Sequences](https://www.youtube.com/watch?v=RLcMwPvMiuA) — ComputerVisionFoundation Videos · 3y ago

### transformer models for gaze analysis
Transformers are deep learning models that excel at processing sequences and capturing context. Applying transformers to gaze data allows decoding complex patterns in eye movements to infer intentions.

*How the paper uses it:* RadGazeIntent is a transformer-based architecture designed to interpret radiologists’ diagnostic intentions from gaze sequences.

▶ [Lecture 4: What are transformers?](https://www.youtube.com/watch?v=NLn4eetGmf8) — Vizuara · 2y ago

## Already in your library

- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Eye-Tracking Explained! | Neuroscience Methods 101](https://www.youtube.com/watch?v=sbkbekz82wQ) — also for: The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing (Scott A. Kuhl)
- [Stanford Seminar - Why does where people look matter ...](https://www.youtube.com/watch?v=PiYwEq0x2rU) — also for: The Impact of Surface Co-location and Eye-tracking on Mixed Reality Typing (Scott A. Kuhl)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Vector Databases simply explained! (Embeddings & Indexes)](https://www.youtube.com/watch?v=dN0lsF2cvm4) — also for: CactusDB: Unlock Co-Optimization Opportunities for SQL Queries and AI/ML Model Inferences (Jia Zou)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of RadGazeIntent's approach to interpreting radiologists' diagnostic intentions from eye movements on chest X-rays. The beginner project recreates a core visualization of gaze intention classification to grasp the basic concept. The intermediate project involves reimplementing the transformer-based model on a smaller or substitute dataset to replicate key metrics and compare with a baseline. The advanced project extends the method to a new imaging modality, addressing a stated limitation and exploring domain adaptation challenges.

### Beginner — Visualize Diagnostic Intention Classification from Eye Fixations
*Effort: a weekend, ~8 hours*

You build a simple web-based or notebook visualization that simulates radiologist eye fixation sequences on chest X-rays and classifies each fixation into diagnostic intention categories using a basic multi-label classifier (e.g., logistic regression). You reproduce a figure similar to the paper's qualitative analysis showing predicted intentions overlaid on X-ray images and fixation sequences.

**Why it shows you understood the paper:** This project demonstrates you understand the concept of decoding diagnostic intentions from gaze data and the multi-label classification task central to RadGazeIntent, as well as how spatial fixation data relates to diagnostic focus.

**Grounded in:** Qualitative analysis demonstrating the model's ability to accurately predict diagnostic intentions behind fixations.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, matplotlib, OpenCV

**Data:** Simulated or publicly available chest X-ray images combined with synthetic eye fixation sequences labeled with diagnostic intention categories, since the paper's datasets are not publicly released.

**Build it:**

1. Collect a small set of chest X-ray images from a public source (e.g., NIH ChestX-ray14) as background images.
2. Generate or simulate eye fixation sequences with spatial coordinates and timestamps, assigning simple diagnostic intention labels per fixation.
3. Implement a multi-label classifier (e.g., logistic regression) to predict intention labels from fixation features (location, time).
4. Visualize fixation points on X-ray images with color-coded predicted intentions and ground truth labels.
5. Compare predicted vs. true intention labels in a confusion matrix or simple metrics.

**Ships as:** A Jupyter notebook or small web app showing fixation sequences on chest X-rays with predicted diagnostic intentions visualized, accompanied by classification metrics and explanatory comments.

**Stretch goal:** Add temporal sequence visualization with simple temporal embeddings to show how intention predictions evolve over time.

### Intermediate — Reimplement RadGazeIntent Transformer for Intention Prediction
*Effort: 1-3 weekends*

You implement a simplified version of the RadGazeIntent transformer model that integrates spatial and temporal embeddings with chest X-ray images and gaze data to perform multi-label classification of diagnostic intentions per fixation. You train and evaluate it on a substitute or simulated dataset and compare performance against a baseline model such as an LSTM or simple MLP.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into code, understand the importance of spatial-temporal embeddings and peripheral/foveal features, and replicate the evaluation approach with F1-score metrics.

**Grounded in:** Development of RadGazeIntent, a novel transformer-based framework for interpreting radiologists' fixation intentions; ablation studies showing importance of temporal and spatial embeddings.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, scikit-learn

**Data:** Simulated chest X-ray images with synthetic gaze fixation sequences labeled with diagnostic intentions, as the paper's datasets are not publicly available. Use NIH ChestX-ray14 or similar as image base.

**Build it:**

1. Prepare a dataset of chest X-ray images with synthetic gaze fixation sequences and multi-label intention annotations.
2. Implement spatial and temporal embeddings for fixation data as described in the paper.
3. Build a transformer-based model architecture incorporating peripheral and foveal image features alongside gaze embeddings.
4. Train the model to predict multi-label diagnostic intentions per fixation.
5. Implement a baseline model (e.g., LSTM or MLP) for comparison.
6. Evaluate both models using F1-score, precision, and recall metrics and report results.

**Ships as:** A GitHub repository with code implementing RadGazeIntent's core model, training scripts, evaluation metrics, and a README explaining the approach and results compared to baseline.

**Stretch goal:** Add ablation experiments removing temporal or foveal embeddings to observe performance impact.

### Advanced — Extend RadGazeIntent to Interpret Gaze Intentions on CT Scans
*Effort: several weeks*

You adapt the RadGazeIntent framework to work with 3D CT scan slices and corresponding radiologist gaze data, addressing the paper's limitation of modality exclusivity. You develop data preprocessing pipelines for CT volumes and gaze fixation mapping, modify the model to handle volumetric data, and evaluate intention prediction performance. This explores the generalization of gaze intention decoding beyond chest X-rays.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the model architecture, data modality challenges, and the clinical relevance of intention interpretation across imaging types.

**Grounded in:** Limitations: The datasets and model focus exclusively on chest X-rays; radiologist behavior in other imaging modalities like CT or MRI may differ. Future directions: Extending the approach to other imaging modalities such as CT and MRI.

**Tech stack:** Python 3.11, PyTorch, NumPy, SimpleITK, OpenCV, scikit-learn

**Data:** Publicly available CT scan datasets (e.g., LIDC-IDRI) combined with simulated or small-scale collected gaze fixation data mapped to CT slices, since no public gaze datasets for CT exist.

**Build it:**

1. Acquire a public CT scan dataset and preprocess volumes into 2D slices or 3D patches.
2. Simulate or collect gaze fixation data mapped to CT slices with diagnostic intention labels.
3. Adapt RadGazeIntent's transformer architecture to accept volumetric or multi-slice input with spatial-temporal embeddings.
4. Train the adapted model on the CT gaze-intention dataset.
5. Evaluate model performance and compare with baseline methods.
6. Analyze challenges in modality transfer and propose improvements.

**Ships as:** A comprehensive GitHub repository with code, data preprocessing scripts, model adaptation, training and evaluation pipelines, and a detailed README discussing modality adaptation challenges and results.

**Stretch goal:** Develop an interactive visualization tool for real-time gaze intention decoding on CT scans to support radiologist collaboration.

_The paper's datasets and code are not publicly released, so all projects require synthetic or substitute data and careful simulation of gaze fixation and intention labels._
