---
title: "620 · Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images — Xubo Song"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xubo-song"
source_hash: "da12356b02b86c0239d6a1194383654e26792342d36d91c32e8e1fc2b151af0c"
sequence: 620
generator: "outreach-garden: managed"
---

# 620 · Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images

## At a glance

- **Professor:** Xubo Song
- **Institution:** OHSU
- **Paper:** [Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images](https://tvst.arvojournals.org/arvo/content_public/journal/tvst/938620/i2164-2591-12-1-12_1672916244.30342.pdf)
- **Authors:** Kaitlin Kogachi, Prajna Lalitha, N. Venkatesh Prajna, Rameshkumar Gunasekaran, Jeremy D. Keenan, J. Peter Campbell, Xubo Song, Travis K. Redd
- **Year:** 2023

## Paper overview

This study investigated whether deep convolutional neural networks (CNNs) can distinguish between images of infectious corneal ulcers that test positive or negative for infection using microbiological tests. Using nearly 2000 images from 886 patients, the CNN models could not reliably detect morphological differences between culture-positive and culture-negative ulcers. This suggests that AI models trained only on microbiologically positive cases may still generalize well to negative cases, which is important for developing diagnostic tools for infectious keratitis.

### Why it matters

**Research problem:** Determining if deep convolutional neural networks can detect morphological differences in corneal ulcer images between microbiologically positive (culture or smear positive) and negative cases.

**Why it matters:** Infectious keratitis is a leading cause of blindness worldwide, and current microbiological tests have poor sensitivity and slow turnaround, delaying targeted treatment. AI-based image analysis could provide faster diagnosis, but it is unclear if morphological differences exist that AI can detect to distinguish infection status.

**Key contributions:**

- Provided a large, prospectively collected dataset of corneal ulcer images with microbiological labels.
- Evaluated two state-of-the-art CNN architectures for detecting microbiologic positivity from clinical images.
- Demonstrated that CNNs could not reliably distinguish culture-positive from culture-negative ulcers.
- Showed that morphological differences detectable by CNNs between microbiologically positive and negative ulcers are absent or minimal.
- Suggested that training AI models only on microbiologically positive cases may not impair generalizability to negative cases.

## About the professor

**Xubo Song** — PhD, OHSU.

Research interests: machine learning, biomedical image computing, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Image Analysis

### Research links

- [Faculty/profile page](https://www.ohsu.edu/people/xubo-song-phd)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep convolutional neural networks
**The paper assumes:** convolutional neural networks, deep learning architectures, transfer learning, image classification metrics
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and their application to image classification tasks.

To understand the deep convolutional neural networks (CNNs) used in this paper for classifying infectious keratitis images, it is essential to grasp CNN architectures, transfer learning, and evaluation metrics like AUC. The rigorous course offers a comprehensive, university-level deep dive into CNNs, while the fast track provides a concise, focused introduction suitable for quickly building foundational knowledge. Choose the rigorous option for in-depth understanding and the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231n: Convolutional Neural Networks for Visual Recognition - Winter 2016](https://www.youtube.com/playlist?list=PLwQyV9I_3POsyBPRNUU_ryNfXzgfkiw2p) — sharno · 15 videos · 18.5h across 15 episodes

**Watch only this:** Lectures 6-8, about 3.5 hours — covering introduction to ConvNets, convolutional neural networks architecture, and localization/detection to understand CNN fundamentals and image classification techniques.

*Why it unblocks this paper:* Stanford CS231n is a highly authoritative university course that thoroughly covers convolutional neural networks, including architectures, transfer learning, and practical applications, directly relevant to the CNN models and evaluation methods used in this paper.

*If you want all of it:* 18.5 hours across 15 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convolutional Neural Network (NPTEL)](https://www.youtube.com/playlist?list=PLcb5orJZN8yXdYp_iRAxhd7b3D51AXZCi) — Mukesh Kannan · 39 videos · 8.0h across 39 episodes

**Watch only this:** Episodes 11.1 to 11.5, about 1 hour — covering the convolution operation, CNN basics, and success stories on ImageNet to build a solid foundational understanding.

*Why it unblocks this paper:* The NPTEL Convolutional Neural Network playlist provides clear, concise explanations of CNN concepts, convolution operations, and transfer learning in a shorter format, ideal for quickly grasping the core ideas behind the CNN architectures used in the paper.

*If you want all of it:* 8.0 hours across 39 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on CNNs detecting morphological differences in infectious keratitis images, start by grounding yourself in the clinical context of infectious keratitis and its microbiological diagnosis. Then, build foundational knowledge on deep convolutional neural networks and transfer learning techniques, which are core to the paper's methodology. Finally, focus on the authors' own talk presenting their findings to grasp the specific challenges and insights of their study.

### Microbiological diagnosis of infectious keratitis *(prerequisite)*
This section covers the clinical gold standard methods for diagnosing infectious keratitis, including culture and smear tests. Understanding these diagnostic procedures is crucial because the paper's labels and evaluation depend on microbiological results, which have known limitations affecting AI model training and interpretation.

*How the paper uses it:* The paper uses microbiological culture and smear results as ground truth labels for training and evaluating CNN models.

▶ [AIOC2020 GP116 T1 Dr Savitri Sharma  Microbiological diagnosis of microbial keratitis](https://www.youtube.com/watch?v=ngwTT9DHbOc) — aioseditorproceedings · 15:18 · 6y ago

### Deep convolutional neural networks in medical imaging *(prerequisite)*
This section introduces the application of deep CNNs in medical imaging, highlighting their impact and challenges. It provides context on why CNNs are suitable for image-based diagnosis tasks and the technical background needed to appreciate the architectures used in the paper.

*How the paper uses it:* The paper applies state-of-the-art CNN architectures to classify corneal ulcer images based on microbiological positivity.

▶ [EI 2018 Plenary: Overview of Modern Machine Learning and Deep Neural Networks Impact on Imaging](https://www.youtube.com/watch?v=Z_aMmVBFhDQ) — IS&T Electronic Imaging (EI) Symposium · 1:03:01 · 8y ago

### Transfer learning for image classification *(prerequisite)*
Transfer learning is a key technique used in the paper to adapt pretrained CNNs to the corneal ulcer image dataset, enabling effective training despite limited labeled data. This section explains the principles and benefits of transfer learning in medical image classification.

*How the paper uses it:* The authors used transfer learning to fine-tune DenseNet201 and MobileNetV2 models on their corneal ulcer dataset.

▶ [[CIVI Academic Lecture] Transfer Learning for Medical Image Classification](https://www.youtube.com/watch?v=mtfmtn9Dy9w) — DLSU CIVI · 43:17 · 1y ago

### Evaluation metrics for diagnostic AI models *(prerequisite)*
Understanding how model performance is measured is essential to interpret the paper's results. This section explains ROC curves and AUC, which are the primary metrics used to evaluate the CNNs' ability to predict microbiologic positivity.

*How the paper uses it:* The paper evaluates CNN performance using area under the receiver operating characteristic curve (AUC) on held-out test data.

▶ [ROC Curves Explained: Understanding Diagnostic Tests & Cutoffs](https://www.youtube.com/watch?v=TaQoXQTTvy4) — This Is Why with Dr. Busti · 25:18 · 3mo ago

### CNN model limitations in subtle morphological detection
This section discusses the challenges CNNs face when detecting minimal or subtle morphological differences in images, which is central to the paper's finding that CNNs could not distinguish culture-positive from culture-negative ulcers. Understanding these limitations helps contextualize the negative results.

*How the paper uses it:* The paper suggests that CNNs may lack sufficient representational capacity to detect subtle morphological differences between microbiologically positive and negative ulcers.

▶ [Lecture 5 | Convolutional Neural Networks](https://www.youtube.com/watch?v=bNb2fEVKeEo) — Stanford University School of Engineering · 1:08:56 · 9y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This is the authors' own presentation of their research, providing direct insights into their methodology, results, and interpretations. Watching this talk offers the most precise and authoritative understanding of the paper's contributions and implications.

*How the paper uses it:* This talk is by the paper's authors and directly presents their study on CNNs and infectious keratitis image analysis.

▶ [CD-MAKE 2021 - Deep Convolutional Neural Network(CNN) design for pathology detection of COVID-19...](https://www.youtube.com/watch?v=uZsmPyg7HnY) — ARES & CD-MAKE Conference · 20:56 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced learning path introduces foundational concepts needed to understand the paper on CNNs detecting morphological differences in infectious keratitis images. It starts with understanding the clinical context and microbiological diagnosis of keratitis, then builds up AI fundamentals including convolutional neural networks, transfer learning, and evaluation metrics. Finally, it covers the core challenge of CNN limitations in detecting subtle morphological differences, directly relating to the paper's findings.

### Microbiological diagnosis of infectious keratitis *(prerequisite)*
Learn about infectious keratitis, its causes, symptoms, and how microbiological tests like cultures and smears are used to diagnose it. This clinical background explains the gold standard labels used for training and evaluating AI models in the paper.

*How the paper uses it:* The paper uses microbiological culture and smear results as labels to train and evaluate CNN models on corneal ulcer images.

▶ [Keratitis Lecture in Hindi | Causes, Symptoms and Treatment of Keratitis](https://www.youtube.com/watch?v=Oqb1vDjbth4) — GS Medical Academy · 7:51 · 3y ago

### Deep convolutional neural networks in medical imaging *(prerequisite)*
Understand what convolutional neural networks (CNNs) are and why they are powerful for analyzing medical images. This section covers the basics of CNN architecture and their application in biomedical image analysis.

*How the paper uses it:* The paper applies CNN architectures to classify corneal ulcer images based on microbiological positivity.

▶ [Convolutional Neural Networks (CNNs) explained](https://www.youtube.com/watch?v=YRhxdVk_sIs) — deeplizard · 8:37 · 8y ago

### Transfer learning for image classification *(prerequisite)*
Learn how transfer learning leverages pretrained CNN models to adapt to new image classification tasks with limited data. This technique reduces training time and improves performance, especially important in medical imaging.

*How the paper uses it:* The authors used transfer learning with DenseNet201 and MobileNetV2 pretrained models to classify corneal ulcer images.

▶ [All about Transfer Learning | Image Classification | TF 2.0](https://www.youtube.com/watch?v=fj9Y6T7mOyE) — Learn DL Code TF · 9:22 · 6y ago

### Evaluation metrics for diagnostic AI models *(prerequisite)*
Understand how model performance is measured using metrics like the ROC curve and area under the curve (AUC), which summarize diagnostic accuracy and trade-offs between sensitivity and specificity.

*How the paper uses it:* The paper evaluates CNN model performance using AUC on a held-out test set to assess ability to predict microbiologic positivity.

▶ [ROC Curve in Machine Learning | ROC-AUC in Machine Learning Simplified | CampusX](https://www.youtube.com/watch?v=gdW6hj9IXaA) — CampusX · 1:11:15 · 3y ago

### CNN model limitations in subtle morphological detection
Explore the challenges CNNs face when detecting very subtle or minimal morphological differences in images, which may limit their diagnostic utility in certain medical imaging tasks.

*How the paper uses it:* The paper finds that CNNs could not reliably detect morphological differences between culture-positive and culture-negative keratitis images, highlighting this limitation.

▶ [Lecture 5 | Convolutional Neural Networks](https://www.youtube.com/watch?v=bNb2fEVKeEo) — Stanford University School of Engineering · 1:08:56 · 9y ago

## Already in your library

- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)](https://www.youtube.com/watch?v=HGwBXDKFk9I) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [Lec 18. Transfer Learning: Models](https://www.youtube.com/watch?v=tNfuZ9Imt3M) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [What is Transfer Learning? Transfer Learning in Keras | Fine Tuning Vs Feature Extraction](https://www.youtube.com/watch?v=WWcgHjuKVqA) — also for: Comparative Analysis of Transformers to Support Fine-Grained Emotion Detection in Short-Text Data (David C. Wilson)
- [ROC and AUC, Clearly Explained!](https://www.youtube.com/watch?v=4jRBRDbJemM) — also for: Aligning Language Models with Selective Prediction (Aryan Deshwal)
- [ROC Curves and Area Under the Curve (AUC) Explained](https://www.youtube.com/watch?v=OAl6eAyP-yo) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the paper's core finding that CNNs cannot distinguish culture-positive from culture-negative infectious keratitis images. The beginner project reproduces the paper's main classification task on a small scale using transfer learning and AUC evaluation. The intermediate project reimplements the CNN training and evaluation pipeline on a substitute public dataset to validate the negative result and compare a baseline. The advanced project extends the work by integrating clinical metadata with image data to explore whether multimodal AI models can improve diagnostic performance, addressing a key future direction of the paper.

### Beginner — Reproduce CNN Classification of Culture Positivity on Sample Corneal Images
*Effort: a weekend, ~8 hours*

You build a simple image classification pipeline using transfer learning with a pretrained CNN (e.g., MobileNetV2) to classify corneal ulcer images as culture-positive or culture-negative. You evaluate model performance using AUC on a small labeled subset, reproducing the paper's main negative result that CNNs cannot reliably distinguish these classes.

**Why it shows you understood the paper:** This project shows you understand the paper's core experimental setup, including data labeling, transfer learning, and diagnostic performance metrics, and the key finding that morphological differences are not detectable by CNNs.

**Grounded in:** Demonstrated that CNNs could not reliably distinguish culture-positive from culture-negative ulcers (AUC near random chance).

**Tech stack:** Python 3.11, PyTorch, Torchvision, scikit-learn, Jupyter Notebook

**Data:** Simulated or small publicly available corneal ulcer image subset labeled for culture positivity; since the paper's dataset is not publicly released, you create a small synthetic or proxy dataset with binary labels.

**Build it:**

1. Set up a Python environment with PyTorch and torchvision.
2. Collect or simulate a small set of corneal ulcer images labeled as culture-positive or culture-negative.
3. Load a pretrained MobileNetV2 model and fine-tune it on the labeled images using transfer learning.
4. Evaluate the model on a held-out test set and compute the AUC metric.
5. Document the results and compare them to the paper's reported AUC near 0.5.

**Ships as:** A GitHub repo with code, a Jupyter notebook demonstrating training and evaluation, and a README explaining the negative classification result.

**Stretch goal:** Add visualization of model attention maps (e.g., Grad-CAM) to explore what image regions the CNN focuses on.

### Intermediate — Reimplement CNN Culture Positivity Classification on Public Eye Image Dataset
*Effort: 1-3 weekends*

You reimplement the paper's CNN training and evaluation pipeline using DenseNet201 and MobileNetV2 architectures with transfer learning on a publicly available eye image dataset that approximates infectious keratitis images. You compare model performance to a simple baseline (e.g., logistic regression on image features) and report AUC to verify the negative predictive performance.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method on a real dataset, understand transfer learning with CNNs, and critically evaluate diagnostic metrics, confirming the paper's finding that morphological differences are not detectable by CNNs.

**Grounded in:** Evaluated two state-of-the-art CNN architectures for detecting microbiologic positivity from clinical images and found performance no better than chance.

**Tech stack:** Python 3.11, PyTorch, Torchvision, scikit-learn, NumPy, Pandas, Jupyter Notebook

**Data:** A publicly available eye image dataset with labels approximating infectious keratitis culture positivity (e.g., a subset of ocular disease images from a public repository). If no exact dataset exists, use a proxy dataset of corneal images with binary labels.

**Build it:**

1. Identify and download a public eye image dataset with relevant labels.
2. Preprocess images and labels to match the binary classification task.
3. Implement transfer learning training scripts for DenseNet201 and MobileNetV2.
4. Train models and evaluate on a held-out test set, computing AUC.
5. Implement a simple baseline classifier (e.g., logistic regression on extracted features) and compare results.
6. Write a report comparing your results to the paper's findings.

**Ships as:** A GitHub repo with training and evaluation code, baseline implementation, and a detailed README comparing your results to the paper's negative findings.

**Stretch goal:** Experiment with data augmentation or alternative CNN architectures to see if performance improves beyond chance.

### Advanced — Multimodal AI Model Integrating Clinical Metadata and Corneal Images for Infectious Keratitis Diagnosis
*Effort: a few weeks*

You develop a multimodal deep learning model that combines corneal ulcer images with associated clinical metadata (e.g., patient demographics, symptoms) to predict microbiologic positivity. This addresses the paper's limitation that CNNs on images alone cannot distinguish culture-positive cases. You evaluate whether adding clinical features improves diagnostic performance over image-only models.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper by integrating additional data modalities to overcome limitations of image-only CNNs, demonstrating deep comprehension of the paper's findings and limitations and the ability to extend them.

**Grounded in:** Given that CNN models could not distinguish microbiologic positivity from corneal images, the paper suggests integrating additional data modalities or clinical features to improve AI diagnostic performance.

**Tech stack:** Python 3.11, PyTorch, Torchvision, scikit-learn, Pandas, NumPy, Jupyter Notebook

**Data:** Simulated dataset combining corneal ulcer images with synthetic clinical metadata labels, since the original dataset is not publicly available. Clinical features can include age, symptom duration, and other relevant metadata.

**Build it:**

1. Simulate or collect a dataset of corneal images paired with clinical metadata and microbiologic labels.
2. Preprocess image and tabular data for multimodal input.
3. Implement a multimodal neural network architecture combining CNN image features with clinical metadata embeddings.
4. Train and evaluate the multimodal model, comparing AUC to image-only CNN baselines.
5. Analyze whether clinical metadata improves prediction performance.
6. Document methodology, results, and implications for future research.

**Ships as:** A GitHub repo with multimodal model code, training scripts, evaluation metrics, and a README discussing how integrating clinical data can improve diagnostic AI models beyond image-only CNNs.

**Stretch goal:** Incorporate uncertainty estimation or latent class analysis methods to better handle imperfect microbiologic gold standards as suggested by the paper.

_The paper's dataset and code are not publicly released, so projects must use simulated or proxy data approximating corneal ulcer images and labels._
