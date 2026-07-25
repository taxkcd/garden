---
title: "051 · Rapid Bacterial Detection and Identification of Bacterial Strains Using Machine Learning Methods Integrated With a Portable Multichannel Fluorometer — Fow-Sen Choa"
date: 2026-07-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fow-sen-choa"
source_hash: "406bdb98245424ed1d8e84218ac67c7532ce0de06beecf991204791e00182fde"
sequence: 51
generator: "outreach-garden: managed"
---

# 051 · Rapid Bacterial Detection and Identification of Bacterial Strains Using Machine Learning Methods Integrated With a Portable Multichannel Fluorometer

## At a glance

- **Professor:** Fow-Sen Choa
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [Rapid Bacterial Detection and Identification of Bacterial Strains Using Machine Learning Methods Integrated With a Portable Multichannel Fluorometer](https://doi.org/10.1109/ACCESS.2023.3303815)
- **Authors:** MD Sadique Hasan, Chad Sundberg, Hasibul Hasan, Yordan Kostov, Xudong Ge, Fow-Sen Choa, Govind Rao
- **Year:** 2023

## Paper overview

This study developed a low-cost, portable multichannel fluorometer combined with machine learning algorithms to rapidly detect and identify bacterial contamination and strains from fluorescence time-series data. The system can detect bacteria at very low concentrations (as low as 1 CFU/mL) within 1 minute of measurement after 6 hours incubation, achieving high accuracy in distinguishing bacterial presence, bacterial strains, and gram-positive versus gram-negative bacteria. This approach overcomes traditional slow and complex bacterial detection methods by automating and accelerating analysis with machine learning.

### Why it matters

**Research problem:** Traditional bacterial detection methods are slow (taking hours to days) and complex, limiting timely and accurate identification of bacterial contamination and strain differentiation. Existing biosensors suffer from noise and lack commercial viability due to inaccuracy and reliability issues.

**Why it matters:** Rapid and sensitive detection of bacterial contamination is critical for public health, food and water safety, and biopharmaceutical manufacturing. Faster, accurate detection enables timely interventions and better disease management.

**Key contributions:**

- Development of a portable multichannel fluorometer for fluorescence-based bacterial detection
- Integration of machine learning algorithms for automated, rapid bacterial detection and strain identification
- Demonstration of bacterial detection at concentrations as low as 1 CFU/mL with ~98% accuracy
- Application of regression models to predict bacterial concentration levels from fluorescence data
- Multiclass classification to differentiate five bacterial strains and gram-positive vs gram-negative bacteria with high accuracy

## About the professor

**Fow-Sen Choa** — Univ. of Maryland - Baltimore County.

Research interests: Current treatment techniques for neural diseases and disorders such as Alzheimer’s, schizophrenia, attention-deficit hyperactivity disorder (ADHD), autism etc.

### Research links

- [Faculty/profile page](https://www.csee.umbc.edu/people/tenure-track-faculty/fow-sen-choa/)
- [Identity evidence](http://www.csee.umbc.edu/people/faculty/fow-sen-choa)
- [Identity evidence](https://www.csee.umbc.edu/people/tenure-track-faculty/fow-sen-choa/ , https://blogs.cs.umbc.edu/choalab/ , https://news.cs.umbc.edu/2011/07/faculty-research-profile-dr-fow-sen-choa/)
- [Identity evidence](https://blogs.cs.umbc.edu/choalab/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on rapid bacterial detection using a portable multichannel fluorometer integrated with machine learning, start by building foundational knowledge on fluorescence spectroscopy and machine learning for time series classification, as these are core to the data acquisition and analysis methods. Next, learn about feature extraction and normalization, and key machine learning algorithms like support vector machines and ensemble classifiers, which are critical for model performance. Finally, focus on the paper's core concept by watching the authors' own talks presenting their work, which provide direct insights into their methodology and results.

### Fluorescence spectroscopy in biosensing *(prerequisite)*
This section covers the fundamental principles and instrumentation of fluorescence spectroscopy, the sensing technique used to generate the time-series data for bacterial detection. Understanding fluorescence mechanisms and spectral properties is essential to grasp how the portable fluorometer detects bacterial contamination.

*How the paper uses it:* The paper uses fluorescence time-series data collected by a portable multichannel fluorometer to detect bacteria.

▶ [Lecture 18: Fluorescence Spectroscopy and Imaging Part 1 (Introduction)](https://www.youtube.com/watch?v=HY_AVz9zJeE) — LEAP Lab@IIITDM Kancheepuram · 2 years ago

### Machine learning for time series classification *(prerequisite)*
Machine learning methods for time series classification are core to analyzing the fluorescence data collected over time to detect and identify bacteria. This section explains the challenges and approaches to classifying dynamic data sequences, which is directly relevant to the paper's methodology.

*How the paper uses it:* The paper applies supervised and unsupervised machine learning algorithms on fluorescence time-series data for bacterial detection and strain classification.

▶ [UoA ML Seminar: Geoff Webb – Time Series Classification at Scale](https://www.youtube.com/watch?v=SOnHXymw48k) — Machine Learning Group - University of Auckland · 5 years ago

### Feature extraction and normalization in ML *(prerequisite)*
Feature extraction and normalization are critical preprocessing steps that improve the accuracy and robustness of machine learning models by transforming raw fluorescence data into informative features. This section details these techniques, which the paper uses to enhance classifier performance.

*How the paper uses it:* The paper demonstrates that feature extraction and normalization improve classifier accuracy compared to raw fluorescence data.

▶ [Lec-36: Feature Extraction in Data preprocessing | Machine Learning](https://www.youtube.com/watch?v=lzWcVVCXMfo) — Gate Smashers · 2 years ago

### Support vector machines and ensemble classifiers *(prerequisite)*
Support vector machines (SVM) and ensemble classifiers are key machine learning algorithms employed in the paper for bacterial strain classification and binary detection tasks. This section provides an in-depth understanding of these algorithms' principles and applications.

*How the paper uses it:* The paper uses SVM and ensemble classifiers to achieve high accuracy in bacterial strain and contamination detection.

▶ [Lec-40: Support Vector Machines (SVMs) | Machine Learning](https://www.youtube.com/watch?v=NDqACjz5j8g) — Gate Smashers · 1 year ago

### Paper authors talk *(the paper's own talk)*
This section features talks by researchers presenting their work on rapid bacterial detection using machine learning and portable fluorometry. These talks provide direct insights into the study's experimental setup, data analysis, and key findings, offering the most precise understanding of the paper.

*How the paper uses it:* The authors' talks present their methodology and results on integrating a portable multichannel fluorometer with machine learning for rapid bacterial detection.

▶ [Rapid and Real-time monitoring of bacterial growth](https://www.youtube.com/watch?v=aNZu_mGwYa4) — School of Engineering UBC Okanagan · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of fluorescence spectroscopy, the sensing technique used to generate data. Next, grasp how machine learning analyzes time-series data, focusing on classification tasks relevant to bacterial detection. Then, explore feature extraction and normalization, crucial preprocessing steps that improve model accuracy. Finally, learn about support vector machines and ensemble classifiers, the key algorithms used for bacterial strain classification in this study.

### Fluorescence spectroscopy in biosensing *(prerequisite)*
Fluorescence spectroscopy is a technique that measures light emitted by a substance after it absorbs light, revealing molecular properties. It is widely used in biosensing to detect biological molecules by their fluorescent signals. Understanding this helps you grasp how the portable fluorometer collects data on bacterial samples in the paper.

*How the paper uses it:* The paper uses fluorescence time-series data from a portable multichannel fluorometer to detect bacteria.

▶ [Fluorescence Spectroscopy Tutorial - Basics of Fluorescence](https://www.youtube.com/watch?v=5Q0n27pnQQU) — Ibsen Photonics · 6 years ago

### Machine learning for time series classification *(prerequisite)*
Time series classification involves analyzing data points collected over time to identify patterns or categories. Machine learning models can learn from these patterns to classify or predict outcomes. This concept is essential to understand how the paper's algorithms interpret fluorescence data to detect bacterial contamination.

*How the paper uses it:* The study applies machine learning algorithms to classify bacterial presence and strains from fluorescence time-series data.

▶ [What is Time Series l Machine Learning](https://www.youtube.com/watch?v=lcS0jiNoj6o) — 5 Minutes Engineering · 8:29 · 4 years ago

### Feature extraction and normalization in ML *(prerequisite)*
Feature extraction transforms raw data into meaningful attributes that improve machine learning model performance. Normalization scales features to a common range, preventing bias in learning. These preprocessing steps are critical for the paper's improved classifier accuracy on fluorescence data.

*How the paper uses it:* The paper shows that feature extraction and normalization significantly enhance classification accuracy over raw data.

▶ [Lec - 9 : Normalization in Data Transformation | Min-Max & Z-score Techniques with example](https://www.youtube.com/watch?v=lggqjmQzsGI) — Gate Smashers · 2 years ago

### Support vector machines and ensemble classifiers *(prerequisite)*
Support vector machines (SVM) find the best boundary separating classes in data, while ensemble classifiers combine multiple models to improve accuracy. Both are powerful supervised learning methods for classification tasks. Understanding these helps explain the paper's approach to bacterial strain and contamination classification.

*How the paper uses it:* The study uses SVM and ensemble classifiers as key algorithms for bacterial strain identification and contamination detection.

▶ [Lec-40: Support Vector Machines (SVMs) | Machine Learning](https://www.youtube.com/watch?v=NDqACjz5j8g) — Gate Smashers · 1 year ago
