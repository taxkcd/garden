---
title: "051 · Rapid Bacterial Detection and Identification of Bacterial Strains Using Machine Learning Methods Integrated With a Portable Multichannel Fluorometer — Fow-Sen Choa"
date: 2026-07-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fow-sen-choa"
source_hash: "83dadc65ebb9334af6a8230db849028de3e0bb887ad26e073f47ad752e20b4f8"
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

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and core knowledge necessary to understand the research paper on rapid bacterial detection using machine learning and fluorescence data. It covers essential background on bacterial biology, fluorescence spectroscopy principles, time-series data analysis, machine learning methods, and data preprocessing techniques. Work through the stages in order to build a comprehensive understanding before reading the paper.

**The paper assumes:** basic molecular biology of bacteria, fluorescence spectroscopy principles, time-series data analysis, supervised and unsupervised machine learning algorithms, feature extraction and normalization techniques, classification and regression modeling, optical sensor instrumentation
**Time to work through:** roughly 40-50 hours if you watch all recommended content, about 20-25 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you already have a background in molecular biology, fluorescence sensing, and introductory machine learning; focus on stages 4-6 for applied sensor data analysis and advanced classification methods.

### Stage 1 · Molecular Biology of Bacteria *(foundational)*
Understanding bacterial structure, growth, and classification (e.g., gram-positive vs gram-negative) is essential to grasp why fluorescence signals differ and how bacterial strains can be identified, as the paper differentiates strains and gram types.

▶ **Course:** [Microbiology Lecture | CSIR NET GATE and IIT JAM](https://www.youtube.com/playlist?list=PLb0WW0k29aHq7anfNEH7FQ08iVvw0neEP) — Shomu's Biology · 15 videos · 5.3h across 15 episodes

*What to watch:* Watch the 'Microbiology Lecture | CSIR NET GATE and IIT JAM' playlist by Shomu's Biology, focusing on episodes 1, 2, 4, 5, 8, 9, and 11 to cover bacterial structure, identification methods, growth phases, culture media, and gram-positive vs gram-negative bacteria.

*Move on when you can:* Explain the differences between gram-positive and gram-negative bacteria and describe how bacterial growth phases affect detection methods.

### Stage 2 · Principles of Fluorescence Spectroscopy *(foundational)*
The paper relies on fluorescence time-series data collected by a multichannel fluorometer; understanding fluorescence excitation, emission, and quenching is critical to interpreting the sensor data and the role of resazurin as a fluorescent indicator.

▶ **Course:** [Fluorescence Spectroscopy: Principles and Biomedical Applications](https://www.youtube.com/playlist?list=PLJXg4Qpb_936k5h2-RF-GUi2NI95b_2DW) — Joseph Lakowicz · 28 videos · 14.4h across 28 episodes

*What to watch:* Focus on the first 12 lectures of the 'Fluorescence Spectroscopy: Principles and Biomedical Applications' playlist by Joseph Lakowicz, which cover the introduction, instrumentation, spectra, quantum yields, and time-resolved fluorescence essential for understanding fluorescence measurement.

*Move on when you can:* Describe the process of fluorescence emission and how fluorophores like resazurin indicate bacterial metabolic activity.

### Stage 3 · Time-Series Data Analysis Fundamentals *(core)*
The fluorescence data are collected as time-series signals; knowledge of time-series data characteristics, preprocessing, segmentation, and feature extraction is necessary to understand how the raw sensor data is transformed for machine learning.

▶ **Course:** [Complete Time Series Analysis Course for Data Analysts and Data Scientist | Time Series Forecasting](https://www.youtube.com/playlist?list=PLunlGNVWDAaadOxGTeoPK5SAc4sOx7Ss2) — Tech Classes · 14 videos · 6.3h across 14 episodes

*What to watch:* Watch the first 7 episodes of the 'Complete Time Series Analysis Course for Data Analysts and Data Scientist | Time Series Forecasting' playlist by Tech Classes, which cover time series basics, decomposition, stationarity, and preprocessing techniques.

*Move on when you can:* Perform basic preprocessing and segmentation on a sample time-series dataset and extract simple statistical features like mean, variance, and trend.

### Stage 4 · Supervised and Unsupervised Machine Learning *(core)*
The study applies various machine learning algorithms including SVM, ensemble methods, PCA, and neural networks for classification and regression tasks; understanding these algorithms and their purposes is crucial to follow the modeling approach.

▶ **Course:** [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

*What to watch:* Focus on lectures 1 through 6 and 9 through 15 of the 'Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018' playlist, covering supervised learning basics, SVMs, kernels, data splits, ensemble methods, neural networks, and PCA.

*Move on when you can:* Implement and compare a supervised classifier (e.g., SVM) and an unsupervised method (e.g., PCA) on a labeled dataset.

### Stage 5 · Feature Extraction and Data Normalization Techniques *(core)*
The paper emphasizes improved model performance through feature extraction and normalization of fluorescence data; understanding these preprocessing steps is key to appreciating how raw sensor data is converted into meaningful inputs for ML models.

▶ **Course:** [Feature Engineering](https://www.youtube.com/playlist?list=PLKnIA16_RmvYXWH_E6PuVLLHHTWXwwDN7) — CampusX · 23 videos · 9.0h across 23 episodes

*What to watch:* Watch the first 5 episodes of the 'Feature Engineering' playlist by CampusX, which cover feature engineering basics, feature scaling (standardization and normalization), and encoding categorical data relevant to preprocessing sensor data.

*Move on when you can:* Extract domain-relevant features from raw sensor data and apply normalization techniques such as min-max scaling or z-score standardization.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's integration of fluorescence spectroscopy and machine learning for rapid bacterial detection. The beginner project reproduces a core binary classification result using synthetic fluorescence data and classical ML methods. The intermediate project reimplements the paper's multiclass strain classification using a simulated dataset and compares SVM and ensemble classifiers. The advanced project extends the method to mixed bacterial strain samples, addressing a key limitation noted by the authors, and explores deep learning models for improved classification accuracy.

### Beginner — Binary Bacterial Detection from Fluorescence Time-Series
*Effort: a weekend, ~8 hours*

You build a simple machine learning pipeline that classifies bacterial contamination presence versus absence using synthetic fluorescence time-series data inspired by the paper's description. You implement feature extraction and normalization steps and train classical classifiers like SVM and Naive Bayes to reproduce the reported ~98% accuracy on binary classification.

**Why it shows you understood the paper:** This project shows you understand the core data modality (fluorescence time-series), the importance of preprocessing, and the application of supervised ML for rapid bacterial detection as demonstrated in the paper.

**Grounded in:** Binary classification of bacterial contamination achieved up to 97.9% accuracy

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, jupyter notebook

**Data:** Synthetic fluorescence time-series data generated to mimic the paper's fluorescence signals for bacterial and non-bacterial samples, as no public dataset or authors' code is available.

**Build it:**

1. Generate synthetic time-series fluorescence data representing bacterial and non-bacterial samples based on typical signal shapes described in the paper.
2. Extract statistical and temporal features (e.g., mean, variance, slope) from the time-series data and normalize them.
3. Train and evaluate classical classifiers such as Support Vector Machine and Naive Bayes on the processed features.
4. Plot classification accuracy and confusion matrix to compare results.
5. Write a README explaining the data simulation, preprocessing, model training, and results.

**Ships as:** A GitHub repo with Jupyter notebooks showing data simulation, feature extraction, classifier training, and evaluation reproducing binary bacterial detection accuracy.

**Stretch goal:** Add a simple regression model to predict bacterial concentration from the synthetic fluorescence features.

### Intermediate — Multiclass Bacterial Strain Classification Using SVM and Ensemble Methods
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's multiclass classification task to differentiate five bacterial strains plus negative control using simulated fluorescence time-series data. You apply feature extraction and normalization, then train SVM and ensemble classifiers, comparing their accuracy and reproducing the reported ~86% strain classification accuracy.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core method of multiclass classification from fluorescence features, the importance of preprocessing, and comparative evaluation of ML algorithms on time-series biosensor data.

**Grounded in:** Multiclass strain classification achieved 86% accuracy with SVM

**Tech stack:** Python 3.11, scikit-learn, numpy, pandas, matplotlib, jupyter notebook

**Data:** Simulated multichannel fluorescence time-series data for five bacterial strains and negative control, generated based on the paper's description since no public dataset or authors' code is available.

**Build it:**

1. Design and generate synthetic multichannel fluorescence time-series data for five bacterial strains and negative control samples.
2. Implement feature extraction and normalization pipelines for the multichannel data.
3. Train multiclass SVM and ensemble classifiers (e.g., Random Forest) on the extracted features.
4. Evaluate and compare classification accuracy, precision, recall, and confusion matrices.
5. Document the methodology, results, and comparison to the paper's reported metrics in a detailed README.

**Ships as:** A GitHub repo with notebooks and scripts that simulate data, extract features, train multiclass classifiers, and report comparative performance metrics aligned with the paper's results.

**Stretch goal:** Incorporate PCA for dimensionality reduction before classification and analyze its impact on accuracy.

### Advanced — Deep Learning for Mixed-Strain Bacterial Identification from Fluorescence Data
*Effort: 3+ weeks*

You extend the paper's method by developing a deep neural network model to classify mixtures of bacterial strains from simulated fluorescence time-series data, addressing the paper's limitation of only pure strains tested. You design a data simulation framework for mixed samples, implement CNN or RNN architectures, and evaluate classification accuracy compared to classical methods.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend the methodology to more complex real-world scenarios and apply advanced deep learning models to time-series biosensor data.

**Grounded in:** Current study limited to pure bacterial strains, not mixtures; future direction includes evaluation of strain identification accuracy in unknown mixtures of bacteria

**Tech stack:** Python 3.11, PyTorch, numpy, pandas, matplotlib, jupyter notebook

**Data:** Simulated fluorescence time-series data representing mixtures of bacterial strains, generated by combining synthetic signals of individual strains with noise to mimic real biosensor data.

**Build it:**

1. Develop a simulation pipeline to generate fluorescence time-series data for mixtures of bacterial strains with varying proportions.
2. Preprocess and normalize the simulated data, optionally applying feature extraction or using raw time-series as input.
3. Design and implement deep learning models (e.g., CNN, RNN) for multiclass and multilabel classification of mixed strains.
4. Train and evaluate models, comparing performance to classical ML baselines like SVM and ensemble classifiers.
5. Analyze model interpretability using techniques such as SHAP values to identify important features or time segments.
6. Prepare comprehensive documentation explaining data simulation, model design, training, evaluation, and insights.

**Ships as:** A GitHub repository containing code for data simulation, deep learning model training and evaluation, with detailed README discussing the extension to mixed strains and comparison to classical methods.

**Stretch goal:** Integrate real fluorescence data if available or collaborate with experimentalists to validate the model on actual mixed bacterial samples.

_The paper's authors have not released code or datasets, so all projects rely on synthetic data generation based on the paper's descriptions. Careful design of simulated fluorescence signals is necessary to approximate the real data characteristics._
