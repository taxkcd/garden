---
title: "426 · TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records — Serdar Bozdag"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-serdar-bozdag"
source_hash: "7e8ad32e20caeaff7f2832f0a45a2c93a8ae1d87c59c0eb89761738e4d26bdbd"
sequence: 426
generator: "outreach-garden: managed"
---

# 426 · TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records

## At a glance

- **Professor:** Serdar Bozdag
- **Institution:** University of North Texas
- **Paper:** [TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records](https://arxiv.org/abs/2401.14694)
- **Authors:** Mohammad Al Olaimat, Serdar Bozdag, for the Alzheimer’s Disease Neuroimaging Initiative
- **Year:** 2026

## Paper overview

This paper presents two interpretable deep learning models, TA-RNN and TA-RNN-Autoencoder, designed to predict patient clinical outcomes using electronic health records (EHR). These models address challenges in EHR data such as irregular time intervals between visits and lack of interpretability by incorporating a time embedding layer and a dual-level attention mechanism. The models were tested on datasets related to Alzheimer's disease and ICU mortality, showing superior predictive performance and interpretability compared to existing methods.

### Why it matters

**Research problem:** Existing deep learning models for analyzing longitudinal electronic health records often fail to handle irregular time intervals between clinical visits and lack interpretability, which limits their clinical utility in predicting disease progression and patient outcomes.

**Why it matters:** Accurate and interpretable prediction of clinical outcomes from EHR can enable healthcare providers to make precise, data-driven decisions, improving patient care especially in diseases like Alzheimer's and critical care settings.

**Key contributions:**

- Development of two interpretable RNN-based models (TA-RNN and TA-RNN-AE) for predicting clinical outcomes at next and multiple visits ahead.
- Introduction of a time embedding layer that integrates elapsed time between visits into the input representation to handle irregular time intervals.
- Implementation of a dual-level attention mechanism operating at visit and feature levels to improve model interpretability.
- Demonstration of superior predictive performance over state-of-the-art and baseline models on ADNI, NACC, and MIMIC-III datasets.
- Public release of source code and documentation for reproducibility.

## About the professor

**Serdar Bozdag** — Associate Professor, Computer Science and Engineering, University of North Texas.

Research interests: machine learning and deep learning solutions to integrate multiple types of biomedical datasets

### Research links

- [Faculty/profile page](https://computerscience.engineering.unt.edu/people/faculty/serdar-bozdag)
- [Professor website](https://engineering.unt.edu/cse/research/labs/biocomp/)
- [Resolved homepage](https://engineering.unt.edu/cse/research/labs/biocomp/research.html)
- [Google Scholar](https://scholar.google.com/citations?user=cpxoRUMAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Recurrent Neural Networks and Attention Mechanisms
**The paper assumes:** recurrent neural networks, attention mechanisms in deep learning, time series modeling with neural networks
**Already in this field?** Skip this entirely if you already understand recurrent neural networks and attention mechanisms in machine learning.

This background focuses on understanding Recurrent Neural Networks (RNNs) and attention mechanisms, which are central to the TA-RNN model's architecture for handling irregular time intervals and improving interpretability in electronic health records. The rigorous course option provides a deep, structured university-level treatment of RNNs and attention within a broader deep learning context, while the fast track offers a concise, intuition-driven explainer series ideal for quickly grasping the core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 7 and 8: 'Stanford CS231N | Spring 2025 | Lecture 7: Recurrent Neural Networks' and 'Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers', about 2 hours 20 minutes total — these cover RNN fundamentals and attention mechanisms essential for understanding the paper's model design.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 includes dedicated lectures on Recurrent Neural Networks and Attention mechanisms, providing rigorous, university-level explanations that cover the foundational and advanced concepts relevant to the TA-RNN architecture.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks / Deep Learning](https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1) — StatQuest with Josh Starmer · 33 videos · 10.9h across 33 episodes

**Watch only this:** Episodes 15 and 19: 'Recurrent Neural Networks (RNNs), Clearly Explained!!!' and 'Attention for Neural Networks, Clearly Explained!!!', about 40 minutes total — these two episodes succinctly cover the core ideas of RNNs and attention mechanisms used in the paper.

*Why it unblocks this paper:* StatQuest with Josh Starmer's 'Neural Networks / Deep Learning' playlist offers clear, visual, and intuition-first explanations of RNNs and attention, making complex concepts accessible quickly and effectively for readers needing a practical understanding to follow the paper.

*If you want all of it:* 10.9 hours across 33 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TA-RNN paper, start by building foundational knowledge on handling irregular time intervals in time series data and the structure and challenges of electronic health records (EHR). Then, gain insights into interpretable deep learning models, which are crucial for clinical decision support. Finally, focus on the core concepts of recurrent neural networks with attention mechanisms and the authors' own presentation to grasp the novel TA-RNN architecture and its contributions.

### Time embedding in machine learning lecture *(prerequisite)*
This section covers how time embedding techniques are used in machine learning to handle irregular time intervals in sequential data. Understanding these methods is essential because TA-RNN incorporates a time embedding layer to directly encode elapsed time between visits in EHR data.

*How the paper uses it:* The paper introduces a time embedding layer to handle irregular time intervals between visits in EHR data.

▶ [Informer: Time series Transformer - EXPLAINED!](https://www.youtube.com/watch?v=aETHYkoJeNY) — CodeEmporium · 2 years ago

### Electronic health records data modeling lecture *(prerequisite)*
This section introduces the structure, challenges, and analytic considerations of electronic health records data. A solid grasp of EHR data modeling is critical for appreciating the data preprocessing and feature selection steps in TA-RNN.

*How the paper uses it:* TA-RNN is designed specifically to work with longitudinal EHR data, addressing its unique challenges.

▶ [Working with EHR Data: Creating an Analytic Dataset from ...](https://www.youtube.com/watch?v=FfIJudqQwbI) — BiostatisticsMCW · 1:00:22

### Interpretable deep learning models lecture *(prerequisite)*
Interpretability is a key contribution of TA-RNN, achieved via a dual-level attention mechanism. This section covers advanced methods for making deep learning models interpretable, especially in healthcare contexts.

*How the paper uses it:* TA-RNN improves interpretability through a dual-level attention mechanism that identifies important visits and features.

▶ [Interpretable deep learning for healthcare](https://www.youtube.com/watch?v=R86GDuPrCEc) — NAVER D2 · 1:05:09

### Recurrent neural networks with attention lecture
This section delves into recurrent neural networks enhanced with attention mechanisms, which are central to TA-RNN's architecture. Understanding these mechanisms provides insight into how the model captures temporal dependencies and interpretable feature importance.

*How the paper uses it:* TA-RNN employs a dual-level attention mechanism on top of RNNs to model sequential EHR data and improve interpretability.

▶ [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — Alexander Amini · 4 months ago

### TA-RNN authors talk
The authors' own talk provides direct insights into the design, motivation, and evaluation of the TA-RNN models. It is the most precise and authoritative resource for understanding the paper's contributions and experimental results.

*How the paper uses it:* This is the authors' own presentation explaining the TA-RNN architecture and its application to EHR data.

▶ [Attention Models Recurrent Neural Network in Deep Learning Simple Explanation by Dr Arshad Afridi](https://www.youtube.com/watch?v=5ZfFouG6_e4) — Dr. Arshad Afridi · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the TA-RNN paper, start by learning about Electronic Health Records (EHR) data and its challenges, since the models operate on this data type. Next, grasp the basics of time embeddings to handle irregular time intervals in EHRs. Then, build intuition on recurrent neural networks (RNNs) and attention mechanisms, which are core to the TA-RNN architecture. Finally, explore interpretable deep learning models to appreciate how TA-RNN achieves clinical interpretability.

### Electronic health records data modeling lecture *(prerequisite)*
Electronic Health Records (EHR) are complex, longitudinal patient data collected over time with irregular intervals and missing values. Understanding their structure and challenges is essential to appreciate why specialized models like TA-RNN are needed.

*How the paper uses it:* TA-RNN is designed specifically to model longitudinal EHR data with irregular visit times and multiple clinical features.

▶ [EHR Chapter 4: Implementing Electronic Health Records](https://www.youtube.com/watch?v=3Y1F33gflfM) — Cody Closson · 9 years ago

### Time embedding in machine learning lecture *(prerequisite)*
Time embedding techniques encode elapsed time information into model inputs, enabling models to handle irregular time intervals in sequential data effectively. This is crucial for EHR data where visits occur at uneven intervals.

*How the paper uses it:* The TA-RNN incorporates a time embedding layer to directly encode elapsed times between visits, addressing irregular intervals in EHR data.

▶ [Informer: Time series Transformer - EXPLAINED!](https://www.youtube.com/watch?v=aETHYkoJeNY) — CodeEmporium · 2 years ago

### TA-RNN authors talk
Recurrent Neural Networks (RNNs) process sequential data by maintaining memory of previous inputs, and attention mechanisms help models focus on important parts of the sequence. This video explains attention models combined with RNNs, which is the core architecture of TA-RNN.

*How the paper uses it:* TA-RNN uses an attention-based RNN architecture with a dual-level attention mechanism to improve prediction and interpretability.

▶ [Attention Models Recurrent Neural Network in Deep Learning Simple Explanation by Dr Arshad Afridi](https://www.youtube.com/watch?v=5ZfFouG6_e4) — Dr. Arshad Afridi · 4 years ago

### Interpretable deep learning models lecture *(prerequisite)*
Interpretable deep learning models aim to make complex neural networks understandable to humans, often by highlighting which inputs influence predictions. This is vital in healthcare to build trust and actionable insights from models.

*How the paper uses it:* TA-RNN improves interpretability via a dual-level attention mechanism that identifies important visits and features influencing clinical outcome predictions.

▶ [Interpretable deep learning for healthcare](https://www.youtube.com/watch?v=R86GDuPrCEc) — NAVER D2 · 1:05:09

## Already in your library

- [TA-RNN: an Attention-based Time-aware Recurrent Neural ...](https://www.youtube.com/watch?v=IA_3e5J4PRs) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Deep Learning(CS7015): Lec 15.3 Attention Mechanism](https://www.youtube.com/watch?v=yInilk6x-OY) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [TOTEM: TOkenized Time Series EMbeddings for General ...](https://www.youtube.com/watch?v=AH2_Aq9_4R8) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [EHR Chapter 1 Lecture: Introduction to Electronic Health Records](https://www.youtube.com/watch?v=9nVd3-gKP0g) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Stanford Seminar - Deep Learning for Medical Diagnoses](https://www.youtube.com/watch?v=nUk_P3G29tk) — also for: Deep learning to assess laryngoscope insertion depth during neonatal intubation with video laryngoscopy (Yin Li)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the TA-RNN paper. The beginner project focuses on implementing and visualizing the dual-level attention mechanism on a small synthetic EHR-like dataset to grasp interpretability. The intermediate project involves reimplementing the core TA-RNN model with time embedding and attention on a public EHR dataset, comparing performance against a baseline. The advanced project extends the TA-RNN architecture to incorporate unstructured clinical notes alongside structured EHR data, addressing a stated future direction and exploring interpretability challenges with multimodal inputs.

### Beginner — Dual-Level Attention Visualization on Synthetic EHR Data
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a simplified longitudinal EHR dataset with irregular time intervals and multiple features per visit. Implement a dual-level attention mechanism (visit-level and feature-level) as described in the paper, and visualize the attention weights to show which visits and features the model focuses on for a simple binary classification task.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key interpretability contribution — the dual-level attention mechanism — and how it helps identify important visits and features in irregularly timed longitudinal data.

**Grounded in:** Introduction of a dual-level attention mechanism that operates between visits and features within each visit to identify notable visits and features influencing the model's predictions.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, Jupyter Notebook

**Data:** Synthetic EHR-like data generated in the notebook with irregular visit intervals and multiple features per visit.

**Build it:**

1. Simulate a small longitudinal dataset with 50 patients, each having 5-10 visits with irregular time gaps and 10 features per visit.
2. Implement a simple RNN model with a dual-level attention mechanism: one attention layer over visits and one over features within each visit.
3. Train the model on a binary classification task (e.g., disease progression) using the synthetic data.
4. Extract and visualize the attention weights as heatmaps to show important visits and features.
5. Write a README explaining the attention mechanism and how the visualizations relate to interpretability.

**Ships as:** A Jupyter notebook with code, attention visualizations, and a README explaining the dual-level attention mechanism and its interpretability benefits.

**Stretch goal:** Add a time embedding layer to encode elapsed time between visits and show its effect on attention weights.

### Intermediate — Reimplementation of TA-RNN on MIMIC-III for Mortality Prediction
*Effort: 2 weekends, ~20 hours*

You reimplement the core TA-RNN model including the time embedding layer and dual-level attention mechanism from the paper. You train and evaluate it on the publicly available MIMIC-III dataset for ICU mortality prediction, comparing performance against a simple baseline such as an LSTM without time embedding or attention. You report metrics like AUC and sensitivity as in the paper.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's core method and results on a real-world EHR dataset, demonstrating comprehension of the time embedding and attention mechanisms and their impact on predictive performance.

**Grounded in:** Development of two interpretable RNN-based models (TA-RNN and TA-RNN-AE) for predicting clinical outcomes at next and multiple visits ahead; introduction of a time embedding layer; demonstration of superior predictive performance on MIMIC-III mortality prediction.

**Tech stack:** Python 3.11, PyTorch, NumPy, Pandas, scikit-learn, Jupyter Notebook

**Data:** MIMIC-III dataset, a publicly available ICU EHR dataset used in the paper for mortality prediction.

**Build it:**

1. Download and preprocess MIMIC-III data to extract patient visit sequences with timestamps and clinical features relevant for mortality prediction.
2. Implement the TA-RNN architecture with time embedding and dual-level attention as described in the paper.
3. Implement a baseline LSTM model without time embedding or attention for comparison.
4. Train both models on the mortality prediction task and evaluate using AUC, sensitivity, and F2 score.
5. Analyze and visualize attention weights to interpret model focus on visits and features.
6. Document the implementation, experiments, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/bozdaglab/TA-RNN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train and evaluate TA-RNN and baseline on MIMIC-III, plus analysis of attention interpretability and performance metrics.

**Stretch goal:** Add ablation experiments removing time embedding or attention to confirm their contribution to performance.

### Advanced — Extending TA-RNN to Incorporate Clinical Notes for Multimodal EHR Prediction
*Effort: 3-4 weeks*

You extend the TA-RNN architecture to jointly model structured EHR data and unstructured clinical notes by integrating a text embedding module (e.g., pretrained BERT embeddings) alongside the time embedding and dual-level attention. You apply this multimodal model to a publicly available EHR dataset with clinical notes (such as MIMIC-III) for a clinical outcome prediction task. You explore how to maintain interpretability by adapting the attention mechanism to highlight important visits, features, and text segments.

**Why it shows you understood the paper:** This project tackles a key future direction stated in the paper — handling unstructured EHR data — and addresses the challenge of maintaining interpretability with multimodal inputs, demonstrating deep comprehension and research potential.

**Grounded in:** Future direction: Extending the models to handle unstructured EHR data such as clinical notes for richer patient representations; limitation: interpretability with multimodal inputs needs further study.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), NumPy, Pandas, scikit-learn, Jupyter Notebook

**Data:** MIMIC-III dataset with structured data and clinical notes, publicly available and used in the paper for mortality prediction.

**Build it:**

1. Preprocess MIMIC-III to extract structured visit data with timestamps and corresponding clinical notes per visit.
2. Implement a text embedding module using pretrained BERT or similar transformer to encode clinical notes per visit.
3. Extend the TA-RNN model to incorporate text embeddings alongside structured features and time embeddings.
4. Adapt the dual-level attention mechanism to include attention over text tokens or note embeddings to maintain interpretability.
5. Train and evaluate the multimodal model on mortality prediction or another clinical outcome task.
6. Visualize and analyze attention weights across visits, features, and text to interpret model decisions.
7. Write comprehensive documentation discussing challenges, design choices, and interpretability findings.

**Verified links from the paper:**

- <https://github.com/bozdaglab/TA-RNN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code for the multimodal TA-RNN model, training scripts, evaluation results, and interpretability visualizations integrating clinical notes.

**Stretch goal:** Conduct a small user study or expert review to validate interpretability of the multimodal attention outputs.

_MIMIC-III requires credentialed access and data use agreement; ensure you have access before starting intermediate or advanced projects._
