---
title: "051 · Rapid Bacterial Detection and Identification of Bacterial Strains Using Machine Learning Methods Integrated With a Portable Multichannel Fluorometer — Fow-Sen Choa"
date: 2026-07-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fow-sen-choa"
source_hash: "ce548dc7079dceca771595cbe98ad37843255636841b1a9db72f3dc742ec6777"
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

To deeply understand the paper on rapid bacterial detection using a portable multichannel fluorometer integrated with machine learning, start with foundational knowledge on fluorescence spectroscopy instrumentation to grasp the hardware and optical principles. Next, study supervised machine learning classification methods, especially SVM and ensemble techniques, as these are central to the paper's bacterial strain classification. Then, learn about feature extraction and normalization in biosignal processing, which are key preprocessing steps that improved classifier accuracy in the study. Finally, focus on the core concept by watching the authors' own talk or the closest available detailed presentation on their fluorometer and machine learning integration for bacterial detection.

## Recommended videos (in order)

### Fluorescence spectroscopy instrumentation seminar *(prerequisite)*
Understanding the hardware and optical principles behind fluorescence spectroscopy is essential to appreciate the design and operation of the portable multichannel fluorometer developed in the paper. This section covers instrumentation details and working principles of fluorescence spectrometers, providing the foundational knowledge needed to interpret fluorescence time-series data.

*How the paper uses it:* The paper's novel portable multichannel fluorometer relies on fluorescence spectroscopy instrumentation principles for bacterial detection.

▶ [Lecture 23 - Instrumentation of Fluorescence Spectrophotometer](https://www.youtube.com/watch?v=3cWnV8aIbB4) — AMU MOOCs · 26:27 · 2 months ago

### Supervised machine learning classification lecture *(prerequisite)*
This section introduces fundamental supervised machine learning techniques such as classification and regression, focusing on algorithms like SVM and ensemble methods that the paper applies for bacterial strain and gram-type classification. Understanding these methods is crucial to grasp how the fluorescence data is analyzed and interpreted.

*How the paper uses it:* The paper uses supervised ML algorithms including SVM and ensemble classifiers for bacterial detection and strain identification.

▶ [W1_L4: Supervised learning: classification](https://www.youtube.com/watch?v=QtOrjs0Fzzc) — IIT Madras - B.S. Degree Programme · 24:56

### Feature extraction and normalization in biosignal processing *(prerequisite)*
Feature extraction and normalization are key preprocessing steps that enhance classifier performance by transforming raw fluorescence data into meaningful inputs for machine learning models. This section explains these techniques in the context of biosignal processing, which directly relates to the paper's approach to improving detection accuracy.

*How the paper uses it:* The paper demonstrates that feature extraction and normalization significantly improve classifier accuracy on fluorescence biosensor data.

▶ [Acquisition and Processing of Biomedical Signals and images using Machine Learning](https://www.youtube.com/watch?v=S6EfSwgOL7Q) — NishantJainEducation · 3 years ago

### Authors' talk on bacterial detection fluorometer *(the paper's own talk)*
This section focuses on the authors' own detailed presentation or the closest available talk about their portable multichannel fluorometer integrated with machine learning for rapid bacterial detection. It provides direct insights into their methodology, experimental setup, and results, offering the most relevant and advanced understanding of the paper's core contributions.

*How the paper uses it:* The authors' talk presents their novel portable fluorometer and machine learning integration for rapid bacterial detection and strain identification.

▶ [Fluorometer and Assays](https://www.youtube.com/watch?v=6VWjpgfnZ3w) — EnZtekDiagnostics · 13 years ago
