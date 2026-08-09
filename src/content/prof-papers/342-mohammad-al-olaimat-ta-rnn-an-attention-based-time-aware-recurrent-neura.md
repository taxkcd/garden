---
title: "342 · TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records — Mohammad Al Olaimat"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mohammad-al-olaimat"
source_hash: "260d4c38485b23676ec5476c430e734d51d2eeed9fd077f3b1b9046d9c120719"
sequence: 342
generator: "outreach-garden: managed"
---

# 342 · TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records

## At a glance

- **Professor:** Mohammad Al Olaimat
- **Institution:** University of South Florida
- **Paper:** [TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records](https://doi.org/10.1093/bioinformatics/btae264)
- **Authors:** Mohammad Al Olaimat, Serdar Bozdag, for the Alzheimer’s Disease Neuroimaging Initiative
- **Year:** 2024

## Paper overview

This paper introduces two deep learning models, TA-RNN and TA-RNN-Autoencoder, designed to predict clinical outcomes such as Alzheimer's disease progression and mortality using electronic health records (EHR). These models uniquely incorporate time embeddings to handle irregular intervals between patient visits and use a dual-level attention mechanism to improve interpretability by identifying important visits and features influencing predictions.

### Why it matters

**Research problem:** Existing deep learning models for analyzing longitudinal EHR data often fail to properly handle irregular time intervals between clinical visits and lack interpretability, which limits their clinical utility in predicting disease progression and outcomes.

**Why it matters:** Accurate and interpretable prediction models for diseases like Alzheimer's are crucial for early detection and personalized care, which can improve patient outcomes and healthcare decision-making. Handling irregular time intervals in EHR data is essential for realistic modeling of patient histories.

**Key contributions:**

- Development of two interpretable deep learning architectures (TA-RNN and TA-RNN-AE) for clinical outcome prediction using EHR.
- Introduction of a time embedding layer to integrate irregular time intervals between visits into the model input.
- Implementation of a dual-level attention mechanism to identify significant visits and features influencing predictions, improving interpretability.
- Demonstration of superior predictive performance over state-of-the-art and baseline models on multiple real-world datasets (ADNI, NACC, MIMIC-III).

## About the professor

**Mohammad Al Olaimat** — Assistant Research Professor, Bellini College of Artificial Intelligence, Cybersecurity, and Computing, University of South Florida.

Research interests: development of artificial intelligence and deep learning models to analyze multimodal electronic health records, clinical notes, imaging, and biological data; improve early detection, prediction, and personalized care for individuals with Alzheimer's disease and related dementias and other age-related conditions

### Research links

- [Faculty/profile page](https://www.usf.edu/ai-cybersecurity-computing/people/faculty/mohammad_al_olaimat.aspx)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TA-RNN paper, start by building a strong foundation in recurrent neural networks (RNNs) and attention mechanisms, which are critical for modeling sequential clinical data and improving interpretability. Next, explore the concept of time embeddings to handle irregular time intervals in EHR data. Finally, focus on the core contribution by watching the authors' own talk on TA-RNN, which directly explains their novel architecture and experimental results.

### Recurrent neural networks for healthcare *(prerequisite)*
This section covers foundational knowledge about recurrent neural networks, especially their application to clinical time series data. Understanding RNNs is essential since TA-RNN builds upon RNN architectures to model longitudinal EHR data.

*How the paper uses it:* TA-RNN is an RNN-based architecture designed for clinical outcome prediction using EHR data.

▶ [Lecture 10 | Recurrent Neural Networks](https://www.youtube.com/watch?v=6niqTuYFZLQ) — Stanford University School of Engineering · 1:13:09

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms are key to improving model interpretability by identifying important features and visits in sequential data. This section provides an advanced understanding of attention, which TA-RNN uses as a dual-level attention mechanism.

*How the paper uses it:* TA-RNN employs a dual-level attention mechanism to highlight significant visits and features influencing predictions.

▶ [Lecture 19: Graph Neural Networks. Attention Mechanisms ...](https://www.youtube.com/watch?v=nyKuAm-HWn4) — Florian Marquardt · 1:30:25

### Time embeddings in machine learning *(prerequisite)*
Time embeddings encode elapsed time between irregular visits into the model input, a crucial innovation in TA-RNN to handle irregular time intervals in EHR data. This section introduces embeddings and their role in temporal modeling.

*How the paper uses it:* TA-RNN incorporates a time embedding layer to integrate irregular time intervals between visits into the model input.

▶ [6: Deep Learning for Natural Language – Embeddings](https://www.youtube.com/watch?v=LqFc0z-pQTg) — MIT OpenCourseWare · 1:17:51

### Time-aware recurrent neural networks
This section focuses on recurrent neural networks that explicitly handle irregular time intervals, directly relating to the TA-RNN approach. It bridges foundational RNN knowledge with the paper's core innovation of time-awareness.

*How the paper uses it:* TA-RNN is a time-aware RNN architecture designed to model irregular intervals in EHR data.

▶ [TA-RNN: an Attention-based Time-aware Recurrent Neural ...](https://www.youtube.com/watch?v=IA_3e5J4PRs) — ISCB · 19:36

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the TA-RNN paper from a beginner to advanced level, start by building a foundational understanding of recurrent neural networks (RNNs) and their applications in healthcare, since the paper's models are RNN-based. Next, learn about attention mechanisms in deep learning to grasp how the model improves interpretability. Then, study time embeddings as a technique to handle irregular time intervals in sequential data, which is central to TA-RNN. Finally, explore the core concept of time-aware recurrent neural networks, which combines these ideas to model irregular EHR data effectively.

### Recurrent neural networks for healthcare *(prerequisite)*
Recurrent neural networks (RNNs) are designed to process sequential data by maintaining a hidden state that captures information from previous inputs. Understanding how RNNs work and their use in clinical time series data is essential to grasp how TA-RNN models patient visit sequences. This foundation helps in appreciating the temporal modeling capabilities of the paper's architectures.

*How the paper uses it:* TA-RNN and TA-RNN-AE are based on RNN architectures to model longitudinal EHR data for clinical outcome prediction.

▶ [Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) — StatQuest with Josh Starmer · 16:37

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms allow models to weigh the importance of different parts of the input data dynamically, improving interpretability and performance. Learning how attention works in deep learning helps understand how TA-RNN identifies significant visits and features influencing predictions.

*How the paper uses it:* The paper employs a dual-level attention mechanism to assign importance weights to visits and features, enhancing interpretability.

▶ [Introduction to Attention Mechanism in Deep Learning and the ...](https://www.youtube.com/watch?v=NORqRcsYGHY) — PIRAT Research Team · 1:05:57

### Time embeddings in machine learning *(prerequisite)*
Time embeddings encode elapsed time information between irregular events into a continuous vector space, enabling models to handle irregular time intervals effectively. Understanding this concept is key to appreciating how TA-RNN incorporates timing information between patient visits.

*How the paper uses it:* TA-RNN integrates irregular time intervals between visits using a time embedding layer to improve temporal modeling.

▶ [TOTEM: TOkenized Time Series EMbeddings for General ...](https://www.youtube.com/watch?v=AH2_Aq9_4R8) — Steve Brunton · 29:23

### Time-aware recurrent neural networks
Time-aware RNNs extend standard RNNs by explicitly incorporating time information to handle irregularly spaced sequential data. This concept directly relates to TA-RNN's architecture, which combines time embeddings and attention within an RNN framework to model EHR data with irregular visit intervals.

*How the paper uses it:* TA-RNN is a time-aware RNN architecture designed to handle irregular time intervals in EHR data for clinical outcome prediction.

▶ [TA-RNN: an Attention-based Time-aware Recurrent Neural ...](https://www.youtube.com/watch?v=IA_3e5J4PRs) — ISCB · 19:36

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Lecture 13: Attention](https://www.youtube.com/watch?v=YAgjfMR9R_M) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Lecture 13: Introduction to the Attention Mechanism in Large ...](https://www.youtube.com/watch?v=XN7sevVxyUM) — also for: Grounded Video Description (Jason J. Corso)
- [The Attention Mechanism 1 hour explanation](https://www.youtube.com/watch?v=K45ze9Yd5UE) — also for: Grounded Video Description (Jason J. Corso)
- [DeepMind x UCL | Deep Learning Lectures | 8/12 | Attention ...](https://www.youtube.com/watch?v=AIiwuClvH6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Attention Mechanism](https://www.youtube.com/watch?v=oMeIDqRguLY) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder grounded in the TA-RNN paper. The beginner project focuses on reproducing and visualizing the dual-level attention mechanism on a small synthetic EHR dataset to understand interpretability. The intermediate project involves reimplementing the TA-RNN core architecture with time embeddings and dual-level attention on a public EHR dataset, comparing performance against a simple baseline. The advanced project extends the TA-RNN model by integrating unstructured clinical notes using a multimodal approach, addressing a key limitation and future direction of the paper.

### Beginner — Visualize Dual-Level Attention on Synthetic EHR Data
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a tiny longitudinal EHR dataset with irregular time intervals and multiple features per visit. You implement a simplified dual-level attention mechanism (visit-level and feature-level) on top of a basic RNN to generate attention weights and visualize which visits and features the model attends to for a sample prediction.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key interpretability contribution — the dual-level attention mechanism — and how it highlights important visits and features in irregular time series EHR data.

**Grounded in:** Implementation of a dual-level attention mechanism to identify significant visits and features influencing predictions, improving interpretability.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Matplotlib, NumPy

**Data:** Synthetic EHR-like data you generate with irregular time intervals and multiple features per visit, simulating the paper's data structure.

**Build it:**

1. Generate a small synthetic dataset simulating patient visits with irregular time gaps and multiple features per visit.
2. Implement a simple RNN model that takes visit features and time intervals as input.
3. Add a dual-level attention mechanism: one attention layer over visits, another over features within each visit.
4. Train the model on a dummy prediction task (e.g., binary classification) using the synthetic data.
5. Visualize the attention weights for visits and features for a sample patient to interpret model focus.

**Ships as:** A Jupyter notebook with code, visualizations of attention weights, and a README explaining the dual-level attention mechanism and its interpretability benefits.

**Stretch goal:** Add a time embedding layer to encode elapsed time between visits and show how it affects attention weights.

### Intermediate — Reimplement TA-RNN on ADNI Dataset with Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You reimplement the core TA-RNN architecture including the time embedding layer and dual-level attention mechanism in PyTorch. You train and evaluate it on the ADNI dataset (or a publicly available substitute like a subset of MIMIC-III with longitudinal patient visits) to predict Alzheimer's disease progression at the next visit. You compare performance against a simple baseline such as a Random Forest or vanilla RNN without time embedding.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's core method and validate the importance of time embeddings and attention mechanisms for irregular EHR data modeling and clinical outcome prediction.

**Grounded in:** Development of two interpretable deep learning architectures (TA-RNN and TA-RNN-AE) for clinical outcome prediction using EHR; introduction of a time embedding layer; ablation studies confirming their importance.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn, NumPy, Pandas

**Data:** ADNI dataset for Alzheimer's disease progression prediction as used in the paper; if unavailable, a public longitudinal EHR dataset like MIMIC-III subset with multiple visits per patient can be used as a substitute.

**Build it:**

1. Download and preprocess the ADNI dataset or a suitable public substitute to extract longitudinal visit data with irregular time intervals and relevant features.
2. Implement the TA-RNN model architecture with time embedding layer and dual-level attention as described in the paper.
3. Train the model to predict clinical outcomes at the next visit.
4. Implement a baseline model (e.g., Random Forest or vanilla RNN without time embedding).
5. Evaluate both models using metrics reported in the paper such as F2 score and sensitivity.
6. Analyze and visualize attention weights to interpret model predictions.

**Verified links from the paper:**

- <https://github.com/bozdaglab/TA-RNN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code, training scripts, evaluation results comparing TA-RNN to baseline, and attention visualizations with a detailed README.

**Stretch goal:** Extend the model to predict multiple visits ahead using the TA-RNN-Autoencoder architecture.

### Advanced — Integrate Clinical Notes into TA-RNN for Multimodal Prediction
*Effort: 3+ weeks*

You extend the TA-RNN architecture to incorporate unstructured clinical notes alongside structured EHR data by adding a text embedding module (e.g., pretrained ClinicalBERT embeddings) fused with the time-aware RNN inputs. You train and evaluate this multimodal model on a dataset containing both structured visits and clinical notes (e.g., MIMIC-III with notes) to improve prediction accuracy and interpretability.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper by integrating additional data modalities, demonstrating your ability to extend the core method to multimodal EHR data and improve clinical utility.

**Grounded in:** Extending the models to incorporate additional data modalities such as clinical notes and imaging data (future directions); limitation that the paper focuses on structured EHR data and does not extensively address unstructured data.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), Jupyter Notebook, scikit-learn, NumPy, Pandas

**Data:** MIMIC-III dataset including both structured EHR data and clinical notes, publicly available for research with credentialed access.

**Build it:**

1. Obtain and preprocess MIMIC-III data to extract structured visit features and corresponding clinical notes per visit.
2. Implement a text embedding pipeline using pretrained ClinicalBERT or similar model to encode clinical notes into vector representations.
3. Modify the TA-RNN architecture to accept concatenated embeddings of structured features, time embeddings, and text embeddings per visit.
4. Train the multimodal TA-RNN model to predict clinical outcomes such as mortality or disease progression.
5. Evaluate model performance against the original TA-RNN without notes using metrics like AUC and sensitivity.
6. Analyze attention weights and text embeddings to interpret the influence of clinical notes on predictions.

**Verified links from the paper:**

- <https://github.com/bozdaglab/TA-RNN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repository with code for multimodal data processing, model training, evaluation results, and interpretability analysis, accompanied by a detailed README.

**Stretch goal:** Incorporate imaging data embeddings to further extend the multimodal approach.

_Access to the ADNI and MIMIC-III datasets requires credentialed approval; if unavailable, substitute with synthetic or publicly available longitudinal EHR datasets, noting the difference in data provenance._
