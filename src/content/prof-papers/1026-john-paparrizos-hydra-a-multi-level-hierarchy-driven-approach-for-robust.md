---
title: "1026 · HYDRA: A Multi-Level Hierarchy-Driven Approach for Robust Anomaly Detection in Time Series — John Paparrizos"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-paparrizos"
source_hash: "53bdff19beb0b295f350eaed15dcc5723a19c7003e74bf81865b4a2fcd82b8b8"
sequence: 1026
generator: "outreach-garden: managed"
---

# 1026 · HYDRA: A Multi-Level Hierarchy-Driven Approach for Robust Anomaly Detection in Time Series

## At a glance

- **Professor:** John Paparrizos
- **Institution:** Ohio State University
- **Paper:** [HYDRA: A Multi-Level Hierarchy-Driven Approach for Robust Anomaly Detection in Time Series](https://inria.hal.science/hal-05650530v1/document)
- **Authors:** Mingyi Huang, Qinghua Liu, Paul Boniol, John Paparrizos
- **Year:** 2026

## Paper overview

HYDRA is a new method for detecting anomalies in time-series data that uses a hierarchical approach to combine multiple levels of analysis. It overcomes limitations of existing methods by reducing reliance on data normalization and improving robustness to repeated or clustered anomalies. HYDRA progressively selects representative subsequences at multiple resolutions and aggregates anomaly scores across these levels to detect diverse anomaly types effectively and scalably.

### Why it matters

**Research problem:** Time-series anomaly detection methods face challenges such as sensitivity to repeated anomalies, reliance on normalization that can suppress certain anomaly types, and vulnerability to contamination by anomalous data points. Existing methods either fail to detect repeated anomalies or miss fine-grained deviations and often require careful tuning of parameters like cluster numbers.

**Why it matters:** Accurate and robust anomaly detection in time series is critical in many domains including industrial monitoring, finance, and healthcare, where early detection of abnormal events can prevent failures, uncover fraud, or enable timely interventions. The increasing scale and heterogeneity of time-series data from IoT and sensing applications make this problem more challenging and important.

**Key contributions:**

- Identification of the limitations of existing distance- and clustering-based anomaly detection methods, especially their sensitivity to anomaly contamination and normalization choices.
- Introduction of a hierarchical, unsupervised framework that progressively filters out anomalous representatives to form a contamination-free reference set.
- Development of a multi-resolution representation and level-wise score aggregation that captures both fine-grained and persistent anomalies.
- A parameter-light, training-free approach that reduces reliance on explicit normalization and hyperparameter tuning.
- Extensive evaluation on 40 univariate and multivariate datasets showing state-of-the-art performance and scalability.

## About the professor

**John Paparrizos** — Assistant Professor, Computer Science and Engineering, Ohio State University.

Research interests: data-intensive and machine-learning applications, databases, data science, machine learning, artificial intelligence

### Research links

- [Faculty/profile page](https://cse.osu.edu/people/paparrizos.1)
- [Professor website](https://www.paparrizos.org/)
- [Lab website](https://www.thedatum.org/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Time Series Anomaly Detection
**The paper assumes:** time series anomaly detection methods, distance-based and clustering-based anomaly detection, hierarchical time series analysis
**Already in this field?** Skip this entirely if you already understand fundamental time series anomaly detection techniques and their common challenges.

To understand the HYDRA paper on hierarchical anomaly detection in time series, it is essential to grasp foundational concepts and challenges in time-series anomaly detection, including handling contamination, repeated anomalies, and multi-resolution analysis without explicit normalization. The rigorous course offers a deep, structured university-level treatment of practical anomaly detection methods, while the fast track provides a concise, practical introduction to anomaly detection techniques, focusing on time series, suitable for a quicker but still solid grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [TransferLab - Practical Anomaly Detection Training](https://www.youtube.com/playlist?list=PLz6xKPm1Bnd6cDDgct3MDhNWJuPXzsmyW) — appliedAI Institute for Europe · 8 videos · 3.9h across 8 episodes

**Watch only this:** Episodes 1 through 6, about 2.9 hours — covering introduction, density estimation and robustness, isolation, reconstruction error, and anomaly detection on time series, which together provide a comprehensive foundation for understanding HYDRA's approach.

*Why it unblocks this paper:* This course, 'TransferLab - Practical Anomaly Detection Training' by appliedAI Institute for Europe, covers practical anomaly detection methods including density estimation, isolation, reconstruction error, and specifically anomaly detection on time series, which aligns closely with the HYDRA paper's focus on robust, multi-level anomaly detection.

*If you want all of it:* 3.9 hours across all 8 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Anomaly Detection](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5DflJUcymWEKhfhLx2MhRO) — AIEngineering · 6 videos · 3.4h across 6 episodes

**Watch only this:** First 3 episodes, about 1.7 hours — 'Autoencoder Explained - Deep Neural Networks', 'Anomaly Detection with AutoEncoders using Tensorflow', and 'Anomaly Detection model on Time Series data in Python' give a focused introduction to core methods and time series applications.

*Why it unblocks this paper:* This 'Anomaly Detection' playlist by AIEngineering offers concise, clear explainers on anomaly detection techniques including autoencoders and isolation forests applied to time series data, providing a quick yet practical overview relevant to the challenges HYDRA addresses.

*If you want all of it:* 3.4 hours across all 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To thoroughly understand the HYDRA paper on robust anomaly detection in time series, start with foundational concepts including time series anomaly detection, distance-based anomaly detection, multi-resolution time series analysis, and unsupervised anomaly detection methods. These prerequisites build the necessary background on the domain, key techniques, and challenges. Finally, focus on the core concept of HYDRA's hierarchical anomaly detection approach, featuring the authors' own talk if available, to grasp the novel hierarchical framework and its multi-level score aggregation.

### time series anomaly detection *(prerequisite)*
This section covers the fundamental domain of time series anomaly detection, introducing the challenges and typical approaches used to identify anomalies in sequential data. Understanding this background is essential as HYDRA addresses these specific challenges in time series data.

*How the paper uses it:* HYDRA targets anomaly detection in time series data, improving robustness and scalability over existing methods.

▶ [Unsupervised anomaly detection in multivariate time series - Laura BOGGIA](https://www.youtube.com/watch?v=fV1cSVncNI0) — IPhT-TV · 24:55 · 1y ago

### distance based anomaly detection *(prerequisite)*
Distance-based methods are a core technique in anomaly detection, where anomalies are identified based on their distance from normal data points. HYDRA builds on distance measures for selecting representative subsequences, making this understanding critical.

*How the paper uses it:* HYDRA uses distance computations to select representatives and compute anomaly scores without explicit normalization.

▶ [Local Outlier Factor (LOF) | Anomaly Detection | Explained with Example](https://www.youtube.com/watch?v=8W3mTEKTORg) — RoboSathi · 23:50 · 8mo ago

### multi resolution time series analysis *(prerequisite)*
Multi-resolution analysis techniques allow capturing patterns and anomalies at different temporal scales, which is key to HYDRA's hierarchical approach. This section introduces concepts like wavelets and multi-scale representations relevant to HYDRA's multi-level hierarchy.

*How the paper uses it:* HYDRA constructs a multi-level hierarchy of subsequences to detect anomalies across multiple temporal resolutions.

▶ [Wavelets and Multiresolution Analysis](https://www.youtube.com/watch?v=y7KLbd7n75g) — Steve Brunton · 15:12 · 6y ago

### unsupervised anomaly detection methods *(prerequisite)*
Unsupervised methods detect anomalies without labeled data, relying on intrinsic data properties. HYDRA is a training-free, parameter-light unsupervised approach, so understanding unsupervised anomaly detection algorithms is important to appreciate HYDRA's contributions.

*How the paper uses it:* HYDRA is an unsupervised, training-free method that contrasts with supervised neural network approaches.

▶ [Unsupervised Anomaly Detection with Isolation Forest - Elena Sharova](https://www.youtube.com/watch?v=5p8B2Ikcw-k) — PyData · 32:48 · 8y ago

### hierarchical anomaly detection
This core concept focuses on hierarchical frameworks that combine anomaly evidence across multiple levels or scales. HYDRA's main novelty is its multi-level hierarchy-driven approach that aggregates anomaly scores to improve robustness and detection accuracy.

*How the paper uses it:* HYDRA introduces a hierarchical ensemble mechanism to aggregate anomaly scores from multiple levels for robust detection.

▶ [A Hierarchical Transformation-Discriminating Generative Model for Few Shot Anomaly Detection](https://www.youtube.com/watch?v=cY_j1w6xj9s) — Ortal Dayan · 23:06 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the fundamentals of time series anomaly detection to grasp the problem HYDRA addresses. Then learn about unsupervised anomaly detection methods and distance-based approaches, which are key building blocks of HYDRA. Next, explore multi-resolution time series analysis to appreciate how HYDRA captures anomalies at different scales. Finally, study hierarchical anomaly detection to understand HYDRA's core multi-level aggregation mechanism.

### time series anomaly detection *(prerequisite)*
This section introduces the basic challenges and methods for detecting anomalies in time series data, such as unusual spikes or patterns that deviate from normal behavior. Understanding these fundamentals helps you appreciate why HYDRA focuses on robustness and multi-scale detection.

*How the paper uses it:* HYDRA addresses key challenges in time series anomaly detection, including repeated anomalies and normalization sensitivity.

▶ [TransferLab Anomaly Detection Training - Module 5: Anomaly Detection on Time Series](https://www.youtube.com/watch?v=Q0VxhJ5c_7k) — appliedAI Institute for Europe · 50:59 · 2y ago

### unsupervised anomaly detection methods *(prerequisite)*
Learn about anomaly detection techniques that do not require labeled data, focusing on how algorithms identify unusual data points based on patterns or distances. This is important because HYDRA is an unsupervised, training-free method.

*How the paper uses it:* HYDRA is a training-free, parameter-light unsupervised anomaly detection framework.

▶ [Unsupervised Anomaly Detection with Isolation Forest - Elena Sharova](https://www.youtube.com/watch?v=5p8B2Ikcw-k) — PyData · 32:48 · 8y ago

### distance based anomaly detection *(prerequisite)*
Distance-based methods detect anomalies by measuring how far data points are from typical patterns or clusters. Understanding these concepts is crucial since HYDRA uses distance measures to select representative subsequences and compute anomaly scores.

*How the paper uses it:* HYDRA builds on distance measures for representative subsequence selection and anomaly scoring.

▶ [Complete Anomaly Detection Machine Learning Algorithms- Isolation Forest,DBSCAN,Local Factor Outlier](https://www.youtube.com/watch?v=93DwLV0TkNs) — Krish Naik Hindi · 32:02 · 3y ago

### multi resolution time series analysis *(prerequisite)*
Multi-resolution analysis breaks down time series data into different scales or levels of detail, enabling detection of anomalies that appear at various granularities. This concept underpins HYDRA’s hierarchical approach to capturing both fine-grained and persistent anomalies.

*How the paper uses it:* HYDRA uses multi-resolution representations to detect diverse anomaly types across temporal scales.

▶ [Wavelets and Multiresolution Analysis](https://www.youtube.com/watch?v=y7KLbd7n75g) — Steve Brunton · 15:12 · 6y ago

### hierarchical anomaly detection
Hierarchical anomaly detection combines anomaly evidence from multiple levels or clusters to improve robustness and accuracy. This approach aligns with HYDRA’s core innovation of aggregating standardized anomaly scores across a multi-level hierarchy.

*How the paper uses it:* HYDRA’s central method is a multi-level hierarchy-driven ensemble that aggregates anomaly scores across levels.

▶ [A Hierarchical Transformation-Discriminating Generative Model for Few Shot Anomaly Detection](https://www.youtube.com/watch?v=cY_j1w6xj9s) — Ortal Dayan · 23:06 · 4y ago

## Already in your library

- [Anomaly-Based Intrusion Detection Explained (Beginner-Friendly IDS Tutorial)](https://www.youtube.com/watch?v=7vgKmbYWHiI) — also for: A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS) (Bryan C. Ward)
- [Anomaly Detection Explained | Unsupervised Machine Learning with Real-World Examples](https://www.youtube.com/watch?v=7FjapNRy5YA) — also for: Extended Isolation Forest (Robert J. Brunner)
- [Anomaly Detection: Algorithms, Explanations, Applications](https://www.youtube.com/watch?v=12Xq9OLdQwQ) — also for: Towards Scalable Visual Data Wrangling via Direct Manipulation (El Kindi Rezig)
- [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Hierarchical Cluster Analysis \[Simply explained\]](https://www.youtube.com/watch?v=8QCBl-xdeZI) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)
- [Generic and Scalable Framework for Automated Time-series Anomaly Detection](https://www.youtube.com/watch?v=G0jxilXDVUQ) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [Anomaly detection in time series with Python | Data Science with Marco](https://www.youtube.com/watch?v=qy41dXGbAxY) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [Detecting Anomalies Using Statistical Distances | SciPy 2018 | Charles Masson](https://www.youtube.com/watch?v=U7xdiGc7IRU) — also for: Mitigating Data Poisoning Attacks to Local Differential Privacy (Boyang Wang)
- [Anomaly Detection | Machine Learning Tutorial | TutorialsPoint](https://www.youtube.com/watch?v=AYap1FTvR9E) — also for: Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults (Daniel P. Siewiorek)
- [Time Series Talk : Autoregressive Model](https://www.youtube.com/watch?v=5-2C4eO4cPQ) — also for: BAMM: Bidirectional Autoregressive Motion Model (Minwoo Lee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the HYDRA anomaly detection framework. The beginner project focuses on reproducing a core hierarchical score aggregation mechanism from the paper using simple synthetic data. The intermediate project involves running and extending the authors' released HYDRA code on a public time-series anomaly dataset, comparing it to a baseline method. The advanced project tackles a stated limitation by implementing an approximate nearest neighbor optimization to improve HYDRA's scalability on long sequences, demonstrating a genuine extension of the paper.

### Beginner — Hierarchical Anomaly Score Aggregation Prototype
*Effort: a weekend, ~8 hours*

You build a minimal Python prototype that implements the hierarchical aggregation of standardized anomaly scores across multiple temporal resolutions. Using synthetic time-series data with injected anomalies, you compute simple distance-based anomaly scores at different window sizes and aggregate them hierarchically to detect anomalies.

**Why it shows you understood the paper:** This project demonstrates your grasp of HYDRA's key idea of multi-resolution score aggregation without relying on complex clustering or normalization, showing you can reproduce a core mechanism of the method.

**Grounded in:** HYDRA aggregates level-specific, standardized evidence at its native resolution, preserving attribution and maintaining semantic consistency across scales, enabling detection of diverse anomaly types.

**Tech stack:** Python 3.11, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic univariate time-series data generated with injected isolated and repeated anomalies to mimic the paper's anomaly types.

**Build it:**

1. Generate synthetic time-series data with normal patterns and injected anomalies (both isolated and repeated).
2. Implement sliding windows at multiple resolutions (e.g., window sizes 10, 20, 40) and extract subsequences.
3. Compute simple distance-based anomaly scores (e.g., Euclidean distance to mean subsequence) at each level.
4. Standardize scores per level and aggregate them hierarchically (e.g., weighted average or max).
5. Visualize the aggregated anomaly scores alongside the time series to identify detected anomalies.

**Ships as:** A Python notebook or script with code, plots showing multi-level anomaly scores and aggregated detection results, and a README explaining the hierarchical aggregation concept.

**Stretch goal:** Add a simple contamination filtering step to remove anomalous representatives before score computation, mimicking HYDRA's contamination reduction.

### Intermediate — Run and Extend HYDRA on Public Time-Series Data
*Effort: 1-3 weekends*

You clone and run the authors' official HYDRA implementation on a well-known public time-series anomaly detection dataset (e.g., Numenta Anomaly Benchmark or a similar substitute). You then implement a simple baseline method such as Matrix Profile or a distance-based detector to compare performance using metrics like F1 score or AUC.

**Why it shows you understood the paper:** This project shows you can operate the full HYDRA pipeline, understand its hierarchical representative selection and scoring, and critically evaluate its performance against a baseline, reflecting a deeper comprehension of the paper's contributions and empirical claims.

**Grounded in:** We open-source our code at https://github.com/thedatumorg/HYDRA to facilitate reproducibility. Extensive evaluation on 40 univariate and multivariate time-series anomaly detection datasets from the TSB-AD benchmark demonstrates that HYDRA achieves state-of-the-art performance.

**Tech stack:** Python 3.11, PyTorch or NumPy (as required by HYDRA repo), scikit-learn, Matplotlib

**Data:** A public time-series anomaly detection dataset such as the Numenta Anomaly Benchmark (NAB) or a similar publicly available dataset, used as a substitute for the TSB-AD benchmark.

**Build it:**

1. Clone and install dependencies of the HYDRA repository from https://github.com/thedatumorg/HYDRA.
2. Run HYDRA on the chosen public dataset and reproduce anomaly detection results with provided evaluation metrics.
3. Implement a simple baseline anomaly detection method (e.g., Matrix Profile or distance-based scoring).
4. Compare HYDRA's detection performance against the baseline using metrics like precision, recall, and F1 score.
5. Document the setup, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/thedatumorg/HYDRA> — released by the paper's authors

**Ships as:** A GitHub repository with scripts to run HYDRA and baseline methods on the dataset, evaluation results, and a README explaining the experiment and findings.

**Stretch goal:** Experiment with varying window lengths and strides to observe their effect on HYDRA's detection performance, relating to the paper's limitation on parameter sensitivity.

### Advanced — Approximate Nearest Neighbor Optimization for HYDRA Scalability
*Effort: few weeks*

You extend the HYDRA implementation by integrating an approximate nearest neighbor (ANN) search algorithm (e.g., FAISS or Annoy) to replace exact nearest neighbor computations. This aims to improve scalability on ultra-long time series, addressing a key limitation noted in the paper. You evaluate the trade-off between speed and detection accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation of HYDRA's computational expense on very long sequences, demonstrating your ability to innovate on the method and engage with its scalability challenges, potentially opening a research conversation.

**Grounded in:** Exact nearest-neighbor computations are computationally expensive for very long sequences, though an approximate solution is proposed.

**Tech stack:** Python 3.11, PyTorch or NumPy, FAISS or Annoy library, scikit-learn, Matplotlib

**Data:** A long univariate or multivariate time-series dataset from a public source or synthetically generated to simulate ultra-long sequences with anomalies.

**Build it:**

1. Familiarize yourself with the HYDRA codebase and identify where exact nearest neighbor computations occur.
2. Integrate an approximate nearest neighbor library (e.g., FAISS or Annoy) into HYDRA's representative selection and scoring steps.
3. Benchmark runtime and memory usage on long sequences before and after ANN integration.
4. Evaluate anomaly detection accuracy trade-offs using metrics like F1 score compared to the original exact method.
5. Document the implementation details, performance improvements, and accuracy impacts in the README.

**Verified links from the paper:**

- <https://github.com/thedatumorg/HYDRA> — released by the paper's authors

**Ships as:** An extended HYDRA codebase with ANN optimization, benchmark scripts, evaluation results, and a comprehensive README discussing scalability improvements and limitations.

**Stretch goal:** Explore adaptive windowing strategies combined with ANN to further improve detection sensitivity and efficiency, as suggested in the paper's future directions.
